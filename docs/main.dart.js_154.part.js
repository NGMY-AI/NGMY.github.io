((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,X,Al,Am,Aa,An,Ao,Y,Ab,Ap,Aq,C={
un(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
he8(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KJ(d){var w
if(d===0)return $.DR()
if(d===1)return $.a4g()
if(d===2)return $.hLM()
if(Math.abs(d)<4294967296)return C.bcU(A.o.M(d))
w=C.i67(d)
return w},
bcU(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.un(4,w)
return new C.oo(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.un(1,w)
return new C.oo(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.un(2,w)
return new C.oo(v===0?!1:s,w,v)}v=A.o.ar(A.o.galZ(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ar(d,65536)}v=C.un(v,w)
return new C.oo(v===0?!1:s,w,v)},
i67(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dO("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DR()
w=$.hLL()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lw(A.aI.gaT(w))
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
he9(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hxf(d,e,f,g){var w,v,u,t,s,r=A.o.ar(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fP(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hxa(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16)
if(A.o.F(f,16)===0)return C.he9(d,e,s,g)
w=e+s+1
C.hxf(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i6a(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fP(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fP(u,r)}w&2&&B.aj(g)
g[n]=o},
cPR(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i68(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bcV(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hxg(d,e,f,g,h,i){var w,v,u,t,s,r
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
i69(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oo:function oo(d,e,f){this.a=d
this.b=e
this.c=f},
cPS:function cPS(){},
cPT:function cPT(){},
cPU:function cPU(d,e){this.a=d
this.b=e},
cPV:function cPV(d){this.a=d},
aUb:function aUb(d,e){this.a=d
this.b=e},
hmR(d,e,f){var w=new C.T9(d,A.o.ar(Date.now(),1000),e)
w.Q=f
return w},
T9:function T9(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a5e:function a5e(d,e){this.a=d
this.b=e},
bLw:function bLw(d){this.a=d
this.c=this.b=0},
hP9(){return new C.bJK()},
bJK:function bJK(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cHN:function cHN(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i5O(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cc(d.gd43(d)))
v=f*2+2
u=C.huW(C.huY(),64)
t=new C.cqv(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cqw(e,1000,v)
s=new Uint8Array(v)
return A.aI.du(s,0,t.cRP(w,0,s,0))},
cHL:function cHL(d,e){this.c=d
this.d=e},
azy:function azy(d,e){this.a=d
this.b=e},
cHO:function cHO(d,e,f,g){var _=this
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
bby:function bby(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cHM:function cHM(){this.a=$},
hwK(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hOT(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bIk:function bIk(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hkt(d,e){e&=31
return(d&$.qE[e])<<e>>>0},
nW(d,e){e&=31
return(d>>>e|C.hkt(d,32-e))>>>0},
huX(d){var w,v=new C.av5()
if(B.j2(d))v.aNc(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
huY(){var w=C.huX(0),v=new Uint8Array(4),u=x.r
u=new C.cqx(w,v,A.FQ,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.iw(0)
return u},
huW(d,e){var w=new C.cqt(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cqs:function cqs(){},
cqw:function cqw(d,e,f){this.a=d
this.b=e
this.c=f},
cqq:function cqq(){},
av4:function av4(d){this.a=d},
cqv:function cqv(d){this.a=$
this.b=d
this.c=$},
cqr:function cqr(){},
cqp:function cqp(){},
av5:function av5(){this.b=this.a=$},
cqu:function cqu(){},
cqx:function cqx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cqt:function cqt(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cqo:function cqo(){},
cqn:function cqn(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bTN:function bTN(){},
bTO:function bTO(d){this.a=d},
i9a(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bd9:function bd9(){},
cAV:function cAV(){},
bUO:function bUO(d,e){this.a=d
this.b=!1
this.c=e},
bUP:function bUP(){},
aa_:function aa_(d){this.a=d},
ikV(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fIX(15,d,f,e,g,h),o=i*i,n=A.h.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.h.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fIX:function fIX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
apy(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$apy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(W.aiw("ngmy_menu_lib_v1_zzslides_index",A.bN),$async$apy)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.u(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cF(t,new C.c4R(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a3(t).k("M.E"))}else r=B.a([],x.c7)
A.d.b_(r,new C.c4S())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apy,v)},
apA(d){var w=0,v=B.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j
var $async$apA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.apy(),$async$apA)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aT(j);r.C();){q=r.gP(r)
p=J.u(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n4("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$apA)
case 7:if(!f){w=5
break}s.n(0,p,B.I(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.n4("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$apA)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apA,v)},
c4T(d){return C.hUY(d)},
hUY(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c4T=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(W.aiw("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.id),$async$c4T)
case 7:r=f
o=r.b
q=o==null?null:J.u(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xr(B.a1(q,x.N,x.z))
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
return B.i($async$c4T,v)},
apz(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$apz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.apy(),$async$apz)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nY(r,new C.c4U(d))
w=4
return B.b(B.n4("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$apz)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(W.aSd("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$apz)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apz,v)},
c4R:function c4R(){},
c4S:function c4S(){},
c4U:function c4U(d){this.a=d},
iv3(d,e,f){return B.bU(A.L,null,new C.h_j(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
h_j:function h_j(d,e,f){this.a=d
this.b=e
this.c=f},
a2s:function a2s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLK:function aLK(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fk6:function fk6(d,e){this.a=d
this.b=e},
fka:function fka(d){this.a=d},
fkb:function fkb(d){this.a=d},
fkc:function fkc(d,e,f){this.a=d
this.b=e
this.c=f},
fk7:function fk7(d){this.a=d},
fk8:function fk8(d){this.a=d},
fk9:function fk9(d,e){this.a=d
this.b=e},
fk1:function fk1(d){this.a=d},
fk_:function fk_(d){this.a=d},
fk0:function fk0(d){this.a=d},
fk2:function fk2(d){this.a=d},
fk3:function fk3(d){this.a=d},
fkg:function fkg(d,e){this.a=d
this.b=e},
fkf:function fkf(d,e){this.a=d
this.b=e},
fk5:function fk5(d,e,f){this.a=d
this.b=e
this.c=f},
fk4:function fk4(d,e,f){this.a=d
this.b=e
this.c=f},
fkd:function fkd(d,e){this.a=d
this.b=e},
fke:function fke(d,e){this.a=d
this.b=e},
fkj:function fkj(d){this.a=d},
fkk:function fkk(d,e){this.a=d
this.b=e},
fki:function fki(d,e){this.a=d
this.b=e},
fkh:function fkh(){},
hzL(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.W.aP(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cF(v,new C.frE(),v.$ti.k("M.E"),x.ea)
u=B.a3(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.frF(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3s(d){return C.img(d)},
img(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3s=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fMa(n)
t=4
j=m
i=C
w=7
return B.b(B.a43("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3s)
case 7:j.$1(i.hzL(f))
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
return B.b(B.aA(),$async$a3s)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hzL(B.aV(J.u(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.frN(d),$async$a3s)
case 13:p=j.C(new i.Y(h,new g.fM8(f),o),o.k("M.E"))
A.d.b_(p,new C.fM9())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3s,v)},
aj6(d,e){return C.iuI(d,e)},
iuI(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aj6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b9(e,new C.fZM(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.W.av(n,null)
q=!1
t=4
w=7
return B.b(B.aiY("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aj6)
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
return B.b(B.aA(),$async$aj6)
case 12:p=g
w=13
return B.b(p.aC("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aj6)
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
return B.i($async$aj6,v)},
frN(d){return C.iaz(d)},
iaz(d){var w=0,v=B.j(x.b),u,t=2,s=[],r,q,p,o
var $async$frN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$frN)
case 7:r=f
q=r.rA("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jH(q,B.U(q).c)
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
return B.i($async$frN,v)},
ahZ(d,e){return C.ikN(d,e)},
ikN(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahZ=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahZ)
case 6:s=g
r=B.aR(x.N)
q=s.rA("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h1(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("ci.E"))
w=7
return B.b(s.aC("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahZ)
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
return B.b(C.a3s(d),$async$ahZ)
case 8:n=g
J.nY(n,new C.fIB(e))
w=9
return B.b(C.aj6(d,n),$async$ahZ)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahZ,v)},
iv8(d,e){return B.a6(d,!1).ce(B.ef(new C.h_F(e),!0,null,x.H))},
i6c(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cE(w.d,new C.cRe())},
oT:function oT(d,e,f){this.a=d
this.b=e
this.c=f},
frE:function frE(){},
frF:function frF(){},
fMa:function fMa(d){this.a=d},
fM8:function fM8(d){this.a=d},
fM9:function fM9(){},
fZM:function fZM(){},
fIB:function fIB(d){this.a=d},
h_F:function h_F(d){this.a=d},
a_9:function a_9(d,e){this.c=d
this.a=e},
aA7:function aA7(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cRe:function cRe(){},
cRg:function cRg(d,e){this.a=d
this.b=e},
cRj:function cRj(d){this.a=d},
cRk:function cRk(d){this.a=d},
cRi:function cRi(){},
cRl:function cRl(d,e){this.a=d
this.b=e},
cRh:function cRh(d){this.a=d},
cRm:function cRm(){},
cRf:function cRf(d,e){this.a=d
this.b=e},
cRn:function cRn(){},
cRa:function cRa(d){this.a=d},
cR8:function cR8(d){this.a=d},
cR9:function cR9(d){this.a=d},
cRb:function cRb(d,e){this.a=d
this.b=e},
cR7:function cR7(d){this.a=d},
cR6:function cR6(d){this.a=d},
cR4:function cR4(d,e){this.a=d
this.b=e},
cR5:function cR5(d){this.a=d},
cRd:function cRd(){},
cRc:function cRc(d){this.a=d},
cR3:function cR3(d,e){this.a=d
this.b=e},
cR2:function cR2(d,e){this.a=d
this.b=e},
cR1:function cR1(d,e){this.a=d
this.b=e},
cRo:function cRo(d){this.a=d},
a_7:function a_7(d,e,f){this.c=d
this.d=e
this.a=f},
aHx:function aHx(d,e,f){this.a=d
this.b=e
this.c=f},
aA3:function aA3(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cQv:function cQv(d){this.a=d},
cQu:function cQu(d){this.a=d},
cQx:function cQx(d,e,f){this.a=d
this.b=e
this.c=f},
cQF:function cQF(){},
cQG:function cQG(d){this.a=d},
cQy:function cQy(d,e,f){this.a=d
this.b=e
this.c=f},
cQw:function cQw(d,e){this.a=d
this.b=e},
cQA:function cQA(d,e){this.a=d
this.b=e},
cQB:function cQB(d,e){this.a=d
this.b=e},
cQC:function cQC(d,e){this.a=d
this.b=e},
cQz:function cQz(d){this.a=d},
cQE:function cQE(d){this.a=d},
cQD:function cQD(d,e){this.a=d
this.b=e},
cQL:function cQL(d){this.a=d},
cQH:function cQH(d,e){this.a=d
this.b=e},
cQI:function cQI(d,e){this.a=d
this.b=e},
cQJ:function cQJ(d,e){this.a=d
this.b=e},
cQK:function cQK(d,e){this.a=d
this.b=e},
aA5:function aA5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hCj(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.db==="marriage_locked_bg")return t}return null},
fRR(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$fRR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=C.bFR(e)
s=t==null?null:C.hGq(t)
if(s==null){w=1
break}w=3
return B.b(B.bU(A.L,null,new C.fRS(s,f,g),d,!0,!0,!0,null,!1,!1,x.H),$async$fRR)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fRR,v)},
ip1(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=B.Sh(A.cJ.aL(A.a.b1(a7,A.a.co(a7,",")+1))),a6=B.Sh(a8)
if(a5==null||a6==null)throw B.W("Could not read the picture.")
w=a9.a
v=A.h.U(w[4]*a5.gc7(0))
u=A.h.U(w[5]*a5.gba(0))
t=A.h.U(w[3]*a5.gc7(0))
s=A.h.U(w[2]*a5.gba(0))
r=Math.max(t/a6.gc7(0),s/a6.gba(0))
w=A.h.U(a6.gc7(0)*r)
q=B.a3k(a6,A.h.U(a6.gba(0)*r),A.In,w)
p=B.hhK(q,s,t,A.o.ar(q.gc7(0)-t,2),A.o.ar(q.gba(0)-s,2))
for(w=t-1,o=s-1,n=u>0,m=v>0,l=0;l<s;++l)for(k=(o-l)/28,j=u+l,i=l/28,h=0;h<t;++h){g=v+h
f=a5.a
e=f==null
d=e?a4:f.a
if(g<(d==null?0:d)){f=e?a4:f.b
f=j>=(f==null?0:f)}else f=!0
if(f)continue
a0=m?Math.min(1,h/28):1
if(n)a0=Math.min(a0,i)
a0=A.h.D(Math.min(Math.min(a0,(w-h)/28),k),0,1)
f=p.a
a1=f==null?a4:f.dS(h,l,a4)
if(a1==null)a1=new B.ie()
if(a0>=1){f=a1.gb6(a1)
e=a1.gbc()
d=a1.gbb(a1)
a2=a5.a
if(a2!=null)a2.ie(g,j,f,e,d)}else if(a0>0){f=a5.a
a3=f==null?a4:f.dS(g,j,a4)
if(a3==null)a3=new B.ie()
f=1-a0
e=A.h.U(a3.gb6(a3)*f+a1.gb6(a1)*a0)
d=A.h.U(a3.gbc()*f+a1.gbc()*a0)
f=A.h.U(a3.gbb(a3)*f+a1.gbb(a1)*a0)
a2=a5.a
if(a2!=null)a2.ie(g,j,e,d,f)}}w=B.a6P(82).LW(a5,A.xb)
return"data:image/jpeg;base64,"+A.cK.gcn().aL(w)},
fRS:function fRS(d,e,f){this.a=d
this.b=e
this.c=f},
a_o:function a_o(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAU:function aAU(){var _=this
_.r=_.f=_.e=_.d=null
_.w=!1
_.c=_.a=null},
d91:function d91(d,e,f){this.a=d
this.b=e
this.c=f},
d8Y:function d8Y(d){this.a=d},
d8Z:function d8Z(d){this.a=d},
d9_:function d9_(d,e){this.a=d
this.b=e},
d90:function d90(d,e){this.a=d
this.b=e},
d92:function d92(){},
d93:function d93(d,e){this.a=d
this.b=e},
d94:function d94(d,e){this.a=d
this.b=e},
hGt(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.el(v,w,"").split(":"))},
hGr(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.lw)return null
return A.a.b1(w,14)},
hj4(d){var w
if(d.b!==D.lw)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b1(w,21)},
ip3(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hGv(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ioX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l_(0,f)
t=x.N
u=B.cF(u,new C.fRJ(),B.a3(u).k("M.E"),t)
s=B.C(u,B.a3(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.l_(0,f),u=new B.Gu(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SR(A.a.aA(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SR(A.a.b1(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ioV(d,e){var w,v,u,t,s,r=B.a3(e).k("cr<1>"),q=B.C(new B.cr(e,r),r.k("M.E"))
A.d.b_(q,new C.fRI())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c5(s,"]"))continue
w=B.aTg(w,u,s,0)}return w},
ioZ(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a7S:$.hNX(),s=x.N,r=B.T(s,s)
for(s=t.gdP(t),s=s.gae(s);s.C();){w=s.gP(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c5(u,"]"))continue
r.n(0,w.b,u)}return r},
hGs(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fsF(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hGt(q)===e)return q}return null},
ip_(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b1(v,u)
return A.d.gH(D.J5).a},
ip2(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afN(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afN(0,0,0)
v=C.fsF(b6,b0)
u=C.fsF(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ioZ(b2,C.ioX(C.hGs(b2),v.r))
if(s.a!==0){u.r=C.ioV(C.hGs(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hGt(o[m])
if(l==null||l==="utangulizi")continue
r.I(0,l)}for(q=B.e_(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fsF(b6,n)
i=C.fsF(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.hj4(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hGr(a8)===a0||C.hj4(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.S4(a1,new C.fRX(a0),!0)
a1=f.z
a6=Date.now()
a9=$.hG
$.hG=a9+1
A.d.I(a1,new C.en(""+1000*a6+"_"+a9,D.lw,a2,a3,a4,a5,"",24,A.a8,A.bo,A.aG,4279310375,A.b6,d.at,D.bb,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cd,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afN(k,t,e)},
ioW(d){var w=C.ip_(d)
if(d.w==="hati_kuhowa")return C.hFN("",w)
return C.hiH("",w)},
fRJ:function fRJ(){},
fRI:function fRI(){},
fRX:function fRX(d){this.a=d},
hB4(){var w=new B.V(Date.now(),0,!1),v=new C.fv5()
return B.w(v.$1(B.bY(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hjd(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fSQ(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lw&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hGK(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fSQ(d)
w=B.bk(u)
if(w==null)return!C.fSQ(d)
return new B.V(Date.now(),0,!1).aa().d4(w.aa().bS(18e9))},
ipL(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hZ0(d){return A.a.i(d).toLowerCase()},
b2h(d){return C.hZ1(d)},
hZ1(d){var w=0,v=B.j(x.b),u,t=2,s=[],r,q,p,o,n,m
var $async$b2h=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b2h)
case 7:r=f
p=r.rA("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.itv(),B.U(o).k("N<1,n>")).c_(0,new C.cgJ())
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
return B.i($async$b2h,v)},
a8K(d,e){return C.hZ2(d,e)},
hZ2(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8K=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b2h(d),$async$a8K)
case 3:r=g
if(!J.h7(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8K)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q6(r)),$async$a8K)
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
return B.i($async$a8K,v)},
a8L(){var w=0,v=B.j(x.y),u,t
var $async$a8L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a8L)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8L,v)},
hZ3(d){var w=$.Co.h(0,d)
w=w==null?null:J.u(w,"at")
return B.bk(w==null?"":w)},
hZ4(d,e){var w,v,u,t=$.Co.h(0,d)
if(t==null)return!1
w=J.a8(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hZ3(d)
return u!=null&&!e.f.cb(u)},
hsR(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i9(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gP(w)
r=s.b
if(!v.b(r))continue
q=B.a1(r,u,t)
r=q.h(0,"at")
p=B.bk(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Co.h(0,o)
s=s==null?null:J.u(s,"at")
n=B.bk(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbt())s=r===n.gbt()&&p.b>n.gcG()}if(s){s=$.Co
r=p.aa().ag()
m=q.h(0,"id")
s.n(0,o,B.I(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
hbu(){var w=$.Cn
return w.bq(w,new C.cgK())},
WO(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WO=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uE("civic_hati_kiapo_uongozi",null,A.ei),$async$WO)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a8(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a1(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Co
i=new B.cd(j,B.a3(j).k("cd<1,2>")).aU(0,new C.cgM(k))
if(n.b(o.h(a2,"deletedByState")))C.hsR(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i9(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gP(o)
h=j.b
if(!n.b(h))continue
g=C.Xr(B.a1(h,m,l))
h=$.Cn
j=j.a
f=J.kW(j)
e=h.h(0,f.v(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbt())h=a0===d.gbt()&&h.b<d.gcG()
else h=!0
h=!h}else h=!0
if(h)$.Cn.n(0,f.v(j),g)}C.hbu()
$.hsQ=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WP(),$async$WO)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Cn,o=new B.cd(o,B.a3(o).k("cd<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n4("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Co,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],m,l),null),$async$WO)
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
return B.i($async$WO,v)},
OB(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$OB=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cgL&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$OB)
case 7:r=a4
q=B.aV(J.u(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.W.aP(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i9(p),g=g.gae(g),f=x.z;g.C();){n=g.gP(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xr(B.a1(i.a(n.b),h,f)))}$.Cn=o}}m=B.aV(J.u(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.W.aP(0,m,null)
if(x.f.b(l))C.hsR(l)}C.hbu()
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
return B.b(B.c9(),$async$OB)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WO(),$async$OB)
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
case 16:case 12:$.cgL=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OB,v)},
WP(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WP=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WP)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Cn,o=new B.cd(o,B.a3(o).k("cd<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1",A.W.av(r,null)),$async$WP)
case 7:w=8
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.W.av($.Co,null)),$async$WP)
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
return B.i($async$WP,v)},
a8N(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8N=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.OB(!1),$async$a8N)
case 3:r=$.hsQ
w=r==null||new B.V(Date.now(),0,!1).bB(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8L(),$async$a8N)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WO(),$async$a8N)
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
break}o=$.Cn.h(0,p)
n=o==null?null:o.hT()
if(n==null){u=null
w=1
break}u=C.bFL(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8N,v)},
cgN(d){var w=0,v=B.j(x.y),u,t
var $async$cgN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.OB(!1),$async$cgN)
case 3:t=A.a.i(d).toLowerCase()
u=$.Co.am(0,t)&&$.Cn.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgN,v)},
a8M(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8M=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.OB(!1),$async$a8M)
case 3:o=$.Cn.W(0,i)
n=$.Co
m=new B.V(Date.now(),0,!1).aa().ag()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.I(["at",m,"id",l],k,k))
$.cgL=!0
w=4
return B.b(C.WP(),$async$a8M)
case 4:w=5
return B.b(C.a8L(),$async$a8M)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Cn,n=new B.cd(n,B.a3(n).k("cd<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n4("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Co,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],k,x.z),null),$async$a8M)
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
return B.i($async$a8M,v)},
OC(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$OC=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8L(),$async$OC)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WO(),$async$OC)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Co.h(0,a0)
if(n!=null){d=J.a8(n)
m=d.h(n,"id")
d=(m==null?"":m).length!==0&&d.h(n,"id")===a3.a}else d=!1
if(d){$.am.$1("[kiapo] not saved: this paper was deleted by the admin")
u=!1
w=1
break}a3.w="hati_kiapo_uongozi"
a3.f=new B.V(Date.now(),0,!1)
l=a3.hT()
for(d=l.r,m=d.length,k=0;k<d.length;d.length===m||(0,B.J)(d),++k)for(j=d[k].z,i=j.length,h=0;h<i;++h){g=j[h]
f=g.at
e=A.a.i(f==null?"":f)
f=g.db
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Cn.n(0,a0,l)
C.hbu()
$.cgL=!0
w=11
return B.b(C.WP(),$async$OC)
case 11:w=12
return B.b(C.a8L(),$async$OC)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Cn,m=new B.cd(m,B.a3(m).k("cd<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n4("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Co,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],d,x.z),null),$async$OC)
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
return B.i($async$OC,v)},
as_(d){var w=0,v=B.j(x.T),u,t,s
var $async$as_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i5().a75(A.eR),$async$as_)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$as_)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b2i(t,d),$async$as_)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as_,v)},
b2i(d,e){return C.hZ5(d,e)},
hZ5(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2i=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2i)
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
p=n.iE("media")
w=8
return B.b(p.xM(q,new Uint8Array(B.cc(d)),D.bNM),$async$b2i)
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
return B.i($async$b2i,v)},
LA(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ej(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bb,4280172719,2,d,0,0,"",D.cd,D.d1,l,m,n)},
fux(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ej(A.b6,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eM,j,k,l)},
hfQ(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.h.D(i*0.0017,0.02,0.06)
return C.ej(h,!1,j,A.aG,"marriage_field_"+d+":"+A.h.ad(g,3),4280640491,i,A.cL,A.O,"",v,w,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.d1,g,e,f)},
fu5(d,e,f,g){return C.fux(0,0.002,D.fw,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hfR(d,e,f,g,h,i,j,k){var w=C.cC()
return C.ej(A.ri,!1,j,A.aG,"marriage_field_"+d+":"+A.h.ad(g,3),4280640491,i,A.bo,A.a8,"",h,w,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.d1,g,e,f)},
hB3(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.el(v,w,"").split(":"))},
bFL(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.hB3(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.lw&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hT()}h=C.hiG(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cs(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,a3,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hB3(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.lw&&A.a.c5(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fQI(a2))}else A.d.bq(a1.z,new C.fQJ())
A.d.I(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fSQ(a0))a0.ax=a6.f.aa().ag()
return a0},
hiG(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.bG5(D.a96),l=C.cC(),k=x.u,j=B.a([C.ej(A.b6,!1,s,A.aG,"marriage_locked_bg",r,24,A.bo,A.a8,"",1,C.cC(),m,"","",0,!1,"",0,D.bb,q,2,"",0,0,"",D.cd,D.kj,1,0,0)],k),i=B.a([],k)
i.push(C.LA("NGMY",A.K,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.LA("TAREHE:",A.b6,o,16,A.bo,A.H,A.h.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hfQ("tarehe",0.8059999999999999,0.026,0.18,A.b6,16,p,C.hB4()))
i.push(C.fu5(0.8099999999999999,0.026+A.h.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.LA("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.LA("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cL,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fux(0,0.002,D.fw,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hfR("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hfR("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hfR("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fux(268435456,0.175,D.bb,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.LA("VIDEO YA KIAPO",A.b6,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ej(A.b6,!1,s,A.aG,"__kiapo_video__",r,24,A.bo,A.a8,"",0.131,C.cC(),t,"","",0,!1,"",0,D.bb,q,2,"",0,0,"",D.cd,D.kj,0.77,0.115,0.492))
i.push(C.LA("Rais Anayeapa:",A.b6,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.LA("Jina:",A.b6,p,13,A.bo,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hfQ("rais_jina",0.195,0.6930000000000001,0.62,A.b6,13,p,""))
i.push(C.fu5(0.195,0.7130000000000001,0.62,n))
i.push(C.LA("Sahihi:",A.b6,p,13,A.bo,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ej(A.b6,!1,s,A.aG,"marriage_sign_rais",0,24,A.bo,A.a8,"",0.07,C.cC(),t,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eM,0.38,0.21500000000000002,0.73))
i.push(C.fu5(0.21500000000000002,0.795,0.38,n))
i.push(C.LA("Tarehe:",A.b6,p,13,A.bo,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hfQ("rais_tarehe",0.745,0.74,0.2,A.b6,12,p,C.hB4()))
i.push(C.fu5(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.u(i,B.a([C.fux(0,0.032,D.bb,o,1,"state_box",0.72,0.14,0.875),C.LA("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bo,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.u(j,i)
v=C.t4(4294967035,t,0,0,j,l,D.r6,"","",u,D.dr)
return C.Cs(t,t,t,t,D.r5,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3r(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3r=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.K(x.q).f.T(D.fqc)
w=1
break}w=3
return B.b(C.OB(!0),$async$a3r)
case 3:w=4
return B.b(C.a8N(p),$async$a3r)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hGK(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.boz,null,new C.fLx(p),f,!0,!0,!1,A.lX,!1,!1,x.N),$async$a3r)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fLy(),f,null,!0,!0,x.y),$async$a3r)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hiG(p))
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
return B.b(C.cgN(p),$async$a3r)
case 13:case 12:if(l){if(f.e!=null)f.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.K(x.q).f
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hiG(p))
case 1:return B.h(u,v)}})
return B.i($async$a3r,v)},
fv5:function fv5(){},
cgJ:function cgJ(){},
cgK:function cgK(){},
cgM:function cgM(d){this.a=d},
fQI:function fQI(d){this.a=d},
fQJ:function fQJ(){},
fLx:function fLx(d){this.a=d},
fLv:function fLv(d){this.a=d},
fLw:function fLw(d){this.a=d},
fLy:function fLy(){},
fLt:function fLt(d){this.a=d},
fLu:function fLu(d){this.a=d},
asw:function asw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGk:function aGk(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
enr:function enr(d){this.a=d},
enp:function enp(d){this.a=d},
enq:function enq(d){this.a=d},
ens:function ens(d){this.a=d},
ent:function ent(d){this.a=d},
k9(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ej(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bb,4280172719,2,d,0,0,"",D.cd,D.d1,l,m,n)},
hfB(d){return C.k9("NGMY",A.K,d&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025)},
hAG(d,e,f){var w=4291404327
return B.a([C.kT(0,f,D.eZ,w,2,"ring_l",f,d-f*0.42,e),C.kT(0,f,D.eZ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
ftn(d,e,f,g,h){var w,v,u="ps_"+g,t=C.kT(4294967288,f,D.eZ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.kT(h,s,D.eZ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.kT(h,f*0.46,D.eZ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
kT(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ej(A.b6,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eM,j,k,l)},
ftm(d){return C.ej(A.b6,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bo,A.a8,"",1,C.cC(),d,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kj,1,0,0)},
Lx(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.h.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ej(h,!1,k,A.aG,i?u+A.h.ad(g,3)+":"+A.h.ad(j,1):u+A.h.ad(g,3),4280640491,j,A.cL,A.O,"",v,w,null,"","",0,!1,"",0,D.bb,4280172719,2,l,0,0,"",D.cd,D.d1,g,e,f)},
ahc(d,e,f,g){return C.kT(0,0.002,D.fw,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hfA(d,e,f,g,h,i,j,k){var w=C.cC()
return C.ej(A.b6,!1,j,A.aG,"marriage_field_"+d+":"+A.h.ad(g,3),4280640491,i,A.bo,A.cD,"",h,w,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.d1,g,e,f)},
hAE(d,e,f,g,h){var w=A.h.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.kT(0,0.036,D.bb,h,1.4,"banner_box_"+d,w,v,e),C.k9(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
fRP(){var w=new B.V(Date.now(),0,!1),v=new C.fRQ()
return B.w(v.$1(B.bY(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hAF(d,e,f,g,h,a0,a1){var w,v,u,t,s,r=4279673674,q=f+0.042,p=d===1,o=p?0.328:0,n=f+h-q,m=A.h.D(n-o,0.22,1),l=p?A.h.D(0.037399999999999996,0.02,0.06):A.h.D(0.0272,0.02,0.06),k=""+d,j=g+0.002,i=C.Lx("mahari_"+k,q,j,m,A.b6,!1,16,a1,e)
if(p)i.f=l
w=x.u
v=B.a([C.k9(k+".",A.b6,a0,13,A.H,0.022,0,"nim_n_"+k,0.032,f,g+0.004),i,C.kT(0,0.002,D.fw,4293056712,0.8,"nim_ul_"+k,n,q,j+l+0.002)],w)
if(p){u=q+m+0.008
t=u+0.268+0.004
s=j+(l-0.025875)/2
A.d.u(v,B.a([C.k9("AKUNA DENI",A.e2,r,22,A.u,l,0,"nim_akuna_deni",0.268,u,j),C.kT(0,0.025875,D.bb,r,2,"nim_akuna_box",0.046,t,s),C.k9("\u2713",A.K,r,18,A.u,0.029875,0,"nim_akuna_tick",0.046,t,s-0.002),C.kT(0,l,D.bb,0,0,"nim_akuna_hit",t+0.046-u,u,j)],w))}return v},
hfC(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.k9(r+".",A.b6,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.Lx("witness_"+d+"_"+r+"_name",q,g,p,A.b6,!0,16,j,"[Jina la Shahidi]"),C.ahc(q,g+A.h.D(0.0272,0.02,0.06),p,w),C.k9("Sahihi:",A.b6,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ej(A.b6,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a8,"",0.05,C.cC(),null,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eM,s,t,g-0.004),C.ahc(t,g+0.044,s,w)],x.u)},
Sx(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cyn,D.das,D.d7f,D.dx5,D.cy0,D.doJ,D.dqL],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gP(0)
if(u.a===d)return u}return null},
heZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w,v,u,t,s=d.d,r=C.aQm(s)
if(r!=null){w=C.icU(r,f,g,h,i,j,l,m,q)
if(!A.a.c5(A.d.gH(w).db,"_bg"))A.d.ca(w,0,C.ftm(C.bG5(s)))
return w}v=D.dH2.h(0,s)
u=v==null?null:$.fF9.h(0,v)
if(u==null)u=C.bG5(s)
t=C.hCS(s)
if(t!=null){s=B.a([C.ftm(u)],x.u)
A.d.u(s,C.id3(d,t,e,f,g,h,i,j,k,l,m,n,q))
return s}s=B.a([C.ftm(u)],x.u)
A.d.u(s,C.id5(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return s},
id5(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=4286200650,h=4291404327,g=4293056712,f=a1.f,e=a1.r,d=x.u,a0=B.a([],d)
a0.push(C.hfB(f))
w=a1.z
switch(w.a){case 1:case 3:A.d.u(a0,C.hAG(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.u(a0,C.hAG(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.u(a0,C.ftn(0.16,0.018,0.052,!1,f))
A.d.u(a0,C.ftn(0.79,0.018,0.052,!0,i))
v=0.072
break
case 5:a0.push(C.k9("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.u(a0,B.a([C.kT(0,0.062,D.eZ,h,1.6,"crest_o",0.11,0.445,0.012),C.kT(0,0.046,D.eZ,h,1,"crest_i",0.084,0.458,0.02),C.k9("MUHURI",A.K,f,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],d))
v=0.078
break
case 4:case 9:A.d.u(a0,B.a([C.kT(0,0.002,D.fw,h,1,"orn_l_0.018",0.24,0.2,0.024),C.kT(f,0.016,D.lx,h,0.9,"orn_c_0.018",0.024,0.488,0.018),C.kT(0,0.002,D.fw,h,1,"orn_r_0.018",0.24,0.518,0.024)],d))
v=0.04
break
case 0:case 11:case 12:v=b3
break
default:v=b3}A.d.u(a0,B.a([C.k9("TAREHE:",A.b6,e,20,A.H,A.h.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.Lx("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.b6,!1,21,f,C.fRP()),C.ahc(0.814,0.026+A.h.D(0.035699999999999996,0.02,0.06)*0.8,0.12,e)],d))
a0.push(C.k9(b0,A.K,f,b1,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
a0.push(C.kT(e,0.0026,D.bb,e,0,"title_rule_1",0.82*b2,0.09+0.82*(1-b2)/2,u))
t=u+0.028
a0.push(C.kT(a1.e,0.138,D.bb,e,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
a0.push(C.hfA("utangulizi",0.09,t,0.82,0.128,19,f,a3))
t+=a2
if(a6){s=A.h.D(a5.length*30*0.00058+0.08,0.2,0.5)
r=0.09+(0.82-s)/2
q=C.kT(0,0.036,D.bb,e,1.4,"banner_box_nimetowe_label",s,r,t)
p=C.cC()
A.d.u(a0,B.a([q,C.ej(A.K,!1,e,A.aG,"marriage_field_nimetowe_label:"+A.h.ad(s,3),4280640491,30,A.bo,A.u,"",0.025199999999999997,p,null,"","",0,!1,"",0,D.bb,4280172719,2,a5,0,0,"",D.cd,D.d1,s,r,t+0.00612)],d))}else A.d.u(a0,C.hAE(a5,t,0.09,0.82,e))
t+=0.048
a0.push(C.k9(a7,A.b6,f,a8,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){A.d.u(a0,C.hAF(o,a4[o-1],0.09,t,0.82,e,f))
t+=0.04}t+=0.006
A.d.u(a0,C.hAE("MASHAHIDI",t,0.09,0.82,e))
t+=0.046
if(w===D.a8Y||w===D.a9_||w===D.a8X||w===D.a8Z){w=t-0.008
A.d.u(a0,C.ftn(0.21,w,0.044,!0,i))
A.d.u(a0,C.ftn(0.7459999999999999,w,0.044,!1,f))
t+=0.012}n=0.05+b4*0.056+0.011
w=t+0.05
q=t+0.012
A.d.u(a0,B.a([C.kT(0,n,D.bb,e,1.3,"wit_table_border",0.82,0.09,t),C.kT(e,n,D.bb,e,0,"wit_table_divider",0.0024,0.4988,t),C.kT(0,0.0022,D.fw,e,1.1,"wit_table_hdrline",0.82,0.09,w),C.k9("UPANDE WA MKE",A.K,e,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,q),C.k9("UPANDE WA MUME",A.K,e,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,q)],d))
m=w+0.01
for(l=1;l<=b4;++l){A.d.u(a0,C.hfC("mke",l,0.106,m,0.378,e,f))
A.d.u(a0,C.hfC("mume",l,0.516,m,0.378,e,f))
m+=0.056}t=t+n+0.012
w=t+0.056
q=t+0.09
p=q-0.002
A.d.u(a0,B.a([C.kT(0,0.11,D.bb,e,1.2,"mw_box",0.82,0.09,t),C.k9("MWANDISHI",A.b6,e,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.k9("Jina:",A.b6,f,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.Lx("mwandishi_jina",0.215,w,0.3116,A.b6,!0,15,f,""),C.ahc(0.215,p,0.3116,g),C.k9("Sahihi:",A.b6,f,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.ej(A.b6,!1,4279310375,A.aG,"marriage_sign_mwandishi",0,24,A.bo,A.a8,"",0.044,C.cC(),null,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eM,0.3161999999999999,0.5738,q-0.044),C.ahc(0.5738,p,0.3161999999999999,g)],d))
k=A.a.i(a9)
if(k.length!==0){j=t+0.11+0.006
A.d.u(a0,B.a([C.kT(0,0.032,D.bb,e,1,"state_box",0.7,0.15,j),C.k9("EMO 'YA M'MBONDO "+k,A.K,f,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,j+0.003)],d))}return a0},
hCS(d){switch(d.a){case 25:return D.hLv
case 31:return D.hLw
case 26:return D.hLy
case 27:return D.hLz
case 28:return D.hLs
case 29:return D.hLC
case 30:return D.hLB
case 32:return D.hLA
case 33:return D.hLu
case 34:return D.hLt
case 35:return D.hLx
default:return null}},
hfz(d,e,f,g,h,i){return C.ej(A.b6,!1,4279310375,A.aG,"marriage_locked_"+i+"_fill",4280640491,24,A.bo,A.a8,"",h,C.cC(),d,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kj,g,e,f)},
hh1(d,e,f,g,h,i,j,k){var w
if(j)w=null
else w=k==null?d.as:k
if(w!=null)return B.a([C.kT(w,h,D.bb,d.b,0.8,i,g,e,f)],x.u)
return B.a([C.hfz(C.irw(),e,f,g,h,i)],x.u)},
id3(e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=null,d3="marriage_locked",d4=4279310375,d5=4280640491,d6=4280172719,d7="state_text",d8="marriage_locked_",d9=e5.e,e0=e5.ry,e1=e0?0:1,e2=x.u,e3=B.a([],e2)
e3.push(C.hfB(e5.x1?4294967295:4278190080))
w=e5.a
v=e5.r
if(w){u=e5.b
e3.push(C.hfz(C.iru(e5.Q,u),0.03,0.022,0.94,0.096,"royal_band"))
e3.push(C.k9(f4,A.K,v,f5*1.15,A.u,0.052,0,"title",0.88,0.06,0.039))
for(t=-2;t<=2;++t){v=C.hHy(u)
s=Date.now()
r=$.hG
$.hG=r+1
e3.push(new C.en(""+1000*s+"_"+r,D.kj,0.5+t*0.05-0.011,0.139,0.022,0.0124,"",24,A.a8,A.bo,A.aG,d4,A.b6,v,D.bb,d5,d6,2,0,!1,d8+("royal_dot_"+t)+"_fill",0,D.cd,0,"","","","","",!1,0))}q=0.1
p=0.158}else{e3.push(C.k9(f4,A.K,v,f5*e5.p4,A.u,0.054,0,"title",e5.p3,e5.p2,e5.p1))
q=e5.RG
p=e5.rx}o=e5.R8-0.155
n=e5.k2
if(n==null)n=d9
v=e5.k1
if(v==null)v=e5.c
u=e5.k3
s=q+0.002
A.d.u(e3,B.a([C.kT(v,0.032,D.bb,u==null?e5.b:u,1.4,"tarehe_box",0.31,o,q),C.k9("TAREHE:",A.b6,n,19,A.H,A.h.D(0.032299999999999995,0.02,0.06),0,"tarehe_lbl",0.115,o+0.022,s),C.Lx("tarehe",o+0.14,s,0.16,A.b6,!1,20,n,C.fRP())],e2))
m=0.132+(e6-0.165)*1.45
s=e5.fx
v=s==null?e5.c:s
u=e5.fy
if(u==null)u=w?e5.Q:e5.b
e3.push(C.kT(v,m,D.bb,u,1.3,"intro_frame",0.832,0.08399999999999999,p))
if(w)for(w=[A.xt,AJ.pU,AI.l8,AK.vK],v=w.length,u=e5.b,l=0;l<v;++l){s=w[l]
k=s.a
j=s.b
s=C.hHy(u)
r=Date.now()
i=$.hG
$.hG=i+1
e3.push(new C.en(""+1000*r+"_"+i,D.kj,0.08399999999999999+k*0.832-0.011,p+j*m-0.0062,0.022,0.0124,"",24,A.a8,A.bo,A.aG,d4,A.b6,s,D.bb,d5,d6,2,0,!1,d8+("intro_dia_"+B.w(k)+"_"+B.w(j))+"_fill",0,D.cd,0,"","","","","",!1,0))}w=e5.go
if(w==null)w=d9
e3.push(C.hfA("utangulizi",0.09999999999999999,p+0.01,0.7999999999999999,m-0.02,19,w,e7))
w=0.004*e1
h=p+m+0.01+w
g=new C.fvj(e3,e5)
g.$4("nimetowe_label",e9,f0,h)
h+=0.041999999999999996+0.002*e1
v=e5.k4
if(v!=null)e3.push(C.kT(v,0.208,D.bb,e5.b,1,"nim_panel",0.832,0.08399999999999999,h-0.004))
v=e5.id
e3.push(C.k9(f1,A.b6,v==null?d9:v,f2,A.O,0.03,0,"nimetowe_sub",0.82,0.09,h))
h+=0.032
for(v=e5.y,u=e5.ok,s=e5.x,f=e5.as,r=e5.CW,i=e5.f,e=!u,d=e5.d,a0=e5.ch,t=1;t<=4;++t){if(!e||(t&1)===1){a1="nim_stripe_"+t
a2=Date.now()
a3=$.hG
$.hG=a3+1
a1=a1.length===0?d3:d8+a1
e3.push(new C.en(""+1000*a2+"_"+a3,D.eM,0.09,h-0.003,0.82,0.03899999999999999,"",24,A.a8,A.bo,A.aG,d4,A.b6,d2,D.bb,d,d,0,0,!1,a1,0,D.cd,0,"","","","","",!1,0))}a4=C.hAF(t,e8[t-1],0.106,h,0.8039999999999999,i,d9)
a1=t===1?A.h.D(0.037399999999999996,0.02,0.06):A.h.D(0.0272,0.02,0.06)
a5=h+0.002+a1/2
a6=a5-0.012374999999999999
a7=r?a0:f
a1=""+t
a2="nim_badge_"+a1
if(a7!=null){a3=Date.now()
a8=$.hG
$.hG=a8+1
a2=a2.length===0?d3:d8+a2
e3.push(new C.en(""+1000*a3+"_"+a8,D.eM,0.096,a6,0.044,0.024749999999999998,"",24,A.a8,A.bo,A.aG,d4,A.b6,d2,D.eZ,a7,a7,0,0,!1,a2,0,D.cd,0,"","","","","",!1,0))}else{a3=C.irv()
a8=Date.now()
a9=$.hG
$.hG=a9+1
e3.push(new C.en(""+1000*a8+"_"+a9,D.kj,0.096,a6,0.044,0.024749999999999998,"",24,A.a8,A.bo,A.aG,d4,A.b6,a3,D.bb,d5,d6,2,0,!1,d8+a2+"_fill",0,D.cd,0,"","","","","",!1,0))}for(a2=a4.length,a3="marriage_locked_nim_ul_"+a1,a8="marriage_locked_nim_n_"+a1,a9=a5-0.0115,l=0;l<a2;++l){b0=a4[l]
b1=b0.db
if(b1===a8){b0.r=a1
b0.c=0.096
b0.e=0.044
b0.d=a9
b0.f=0.023
b0.w=15
b0.x=A.u
b0.as=A.K
b0.Q=s}else if(b1===a3)b0.ch=u?0:v}A.d.u(e3,a4)
h+=0.043}h+=0.004+w
g.$4("mashahidi","MASHAHIDI",!1,h)
h+=0.044+w
b2=e0?0.046:0.05
b3=0.048+f6*b2+0.004
for(e0=[D.f9S,D.f7k],u=e0.length,s=h+0.036,b4=s+0.012,r=e5.db,e=h+0.00612,d=e5.dy,a1=e5.c,a2=e5.b,a3=e5.cx,a8=e5.dx,b5=e5.w,a9=d==null,b1=a8==null,l=0;l<u;++l){b6=e0[l]
b7=b6.a
b8=b6.c
b9=a9?a2:d
c0="wit_card_"+b7
c1=Date.now()
c2=$.hG
$.hG=c2+1
c0=c0.length===0?d3:d8+c0
e3.push(new C.en(""+1000*c1+"_"+c2,D.eM,b8,h,0.39799999999999996,b3,"",24,A.a8,A.bo,A.aG,d4,A.b6,d2,D.bb,a1,b9,1.2,0,!1,c0,0,D.cd,0,"","","","","",!1,0))
if(r){b9=a3?d2:f
A.d.u(e3,C.hh1(e5,b8,h,0.39799999999999996,0.036,"wit_h_"+b7,a3,b9))}else{b9=a9?a2:d
c0="wit_h_"+b7
c1=Date.now()
c2=$.hG
$.hG=c2+1
c0=c0.length===0?d3:d8+c0
e3.push(new C.en(""+1000*c1+"_"+c2,D.eM,b8+0.012,s,0.37399999999999994,0.002,"",24,A.a8,A.bo,A.aG,d4,A.b6,d2,D.fw,0,b9,0.9,0,!1,c0,0,D.cd,0,"","","","","",!1,0))}if(r)b9=b1?b5:a8
else b9=i
c0="wit_h_"+b7+"_t"
c1=Date.now()
c2=$.hG
$.hG=c2+1
c0=c0.length===0?d3:d8+c0
e3.push(new C.en(""+1000*c1+"_"+c2,D.d1,b8,e,0.39799999999999996,0.025199999999999997,b6.b,20,A.u,A.bo,A.aG,b9,A.K,d2,D.bb,d5,d6,2,0,!1,c0,0,D.cd,0,"","","","","",!1,0))
for(b6=b8+0.014,c3=b4,c4=1;c4<=f6;++c4){A.d.u(e3,C.hfC(b7,c4,b6,c3,0.36999999999999994,i,d9))
c3+=b2}}h+=b3+0.01+w
e0=e5.ay
c5=e0?0.6232:0.82
c6=0.09+(e0?c5*0.55:c5*0.5)
c7=c6+0.088
u=h+0.036
s=c6-0.09-0.12
r=h+0.0615
e=0.09+c5-0.016-c7
A.d.u(e3,B.a([C.kT(a1,0.072,D.bb,a9?a2:d,1.2,"mw_box",c5,0.09,h),C.k9("MWANDISHI",A.b6,i,16,A.H,0.024,0,"mw_hdr",c5-0.044,0.11199999999999999,h+0.008),C.k9("Jina:",A.b6,d9,15,A.a8,0.026,0,"mw_jl",0.07,0.11199999999999999,u),C.Lx("mwandishi_jina",0.185,u,s,A.b6,!0,15,d9,""),C.ahc(0.185,r,s,v),C.k9("Sahihi:",A.b6,d9,15,A.a8,0.026,0,"mw_sl",0.085,c6,u),C.ej(A.b6,!1,d4,A.aG,"marriage_sign_mwandishi",0,24,A.bo,A.a8,"",0.04,C.cC(),d2,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eM,e,c7,u-0.012),C.ahc(c7,r,e,v)],e2))
c8=h+0.072+0.008+w
e2=e5.cy
w=e2?d2:f
A.d.u(e3,C.hh1(e5,0.09,c8,0.82,0.034,"state_bar",e2,w))
c9=e5.fr
b5=c9==null?b5:c9
d0=A.a.i(f3)
d1=e5.to
e2=d1==null
if(!e2){w=d0.length===0
u=w?d1:d1+"  \u2022  EMO 'YA M'MBONDO "+d0
s=w?24:20
w=w?"motto_text":d7
e3.push(C.k9(u,A.K,b5,s,A.H,0.026,0,w,0.82,0.09,c8+0.005))}if(d0.length!==0){e3.push(C.kT(0,0.034,D.bb,0,0,"state_box",0.82,0.09,c8))
if(e2)e3.push(C.k9("EMO 'YA M'MBONDO "+d0,A.K,b5,24,A.H,0.026,0,d7,0.82,0.09,c8+0.005))}if(e0)e3.push(C.hfz(C.iry(e5.z,e5.at,e5.ax),0.7459999999999999,h-0.006,0.16,0.105,"royal_seal"))
for(e0=e3.length,l=0;l<e0;++l){b0=e3[l]
if(A.a.a_(b0.db,"marriage_locked_ul_"))b0.ch=v}return e3},
aQm(d){var w
switch(d.a){case 36:w=D.hEP
break
case 37:w=D.hET
break
case 38:w=D.hER
break
case 39:w=D.hEQ
break
case 40:w=D.hEU
break
case 41:w=D.hES
break
default:w=null
break}return w},
hGq(d){var w,v,u,t,s,r,q=null,p=C.Sx(d,q),o=p==null?q:C.aQm(p.d),n=o==null,m=n?q:o.ax
if(n||m==null)return q
n=m.a
w=n[0]
v=o.b
u=n[1]
t=o.c
s=n[2]
n=n[3]
r=o.a
return new B.bso([r,"assets/hati/"+r+"_couple.jpg",(n-u)/t,(s-w)/v,w/v,u/t])},
icU(d6,d7,d8,d9,e0,e1,e2,e3,e4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=4280640491,c2=4280172719,c3="marriage_locked",c4=4279310375,c5=4279673674,c6="Jina la Shahidi",c7="marriage_locked_",c8=new C.fvd(d6),c9=new C.fv9(c8,new C.fve(d6)),d0=960/d6.b,d1=new C.fva(d0,d6),d2=new C.fvc(),d3=B.a([],x.u),d4=e3==="HATI YA KUHOWA",d5=d6.a
d5=d4?d5:d5+"_notitle"
w=$.fF9.h(0,d5)
if(w!=null)d3.push(C.ftm(w))
d3.push(C.hfB(4294967295))
if(!d4){d5=d6.d
v=d5.a
u=v[2]
t=v[0]
s=v[3]-v[1]
r=s>110?2:1
q=B.a(e3.split(" "),x.s)
if(r===1)p=e3.length
else{v=A.d.cB(q,0,new C.fvb())
p=v+(q.length>3?8:3)}v=C.k9(e3,A.K,d6.ay,Math.min(s/(r*1.3),(u-t)/(p*0.66))*d0,A.u,0,0,"title",0,0,0)
v.k1=d6.fy
d3.push(c9.$2(v,d5))}d5=d6.p2*d0
v=d6.ch
u=C.k9("TAREHE:",A.e2,v,d5,A.H,0,0,"tarehe_lbl",0,0,0)
t=d6.go
u.k1=t
d3.push(c9.$2(u,d6.e))
u=d6.f
o=u.a
v=C.Lx("tarehe",0,0,c8.$1(o[2]-o[0]),A.b6,!1,d5,v,C.fRP())
v.y=A.bo
v.x=A.H
v.k1=t
d3.push(c9.$2(v,u))
u=d6.r
v=u.a
n=Math.min(d6.p3,Math.sqrt((v[2]-v[0])*(v[3]-v[1])/(d7.length*0.53*1.42)))
v=C.hfA("utangulizi",0,0,c8.$1(v[2]-v[0]),0,n*d0,d6.CW,d7)
v.x=A.O
v.as=d6.p1
v.k1=d6.id
d3.push(c9.$2(v,u))
m=d6.p4
if(d9.length>12)m*=0.72
d5=d6.w.a
l=(d5[1]+d5[3])/2-d1.$1(m)/2
k=new B.b7([d5[0],l,d5[2],l+d1.$1(m)])
v=m*d0
u=d6.cx
t=d6.k1
if(e0){o=C.cC()
d3.push(c9.$2(C.ej(A.K,!1,u,A.aG,"marriage_field_nimetowe_label:"+J.ajE(c8.$1(d5[2]-d5[0]),3),c1,v,A.bo,A.u,"",0.2,o,c0,"","",0,!1,"",0,D.bb,c2,2,d9,0,0,t,D.cd,D.d1,0.84,0.08,0.12),k))}else{d5=C.k9(d9,A.K,u,v,A.u,0,0,"banner_t_"+d9,0,0,0)
d5.k1=t
d3.push(c9.$2(d5,k))}j=e1.length
i=d6.R8
if(j>30)i=i*28/j
d5=d6.x.a
h=(d5[1]+d5[3])/2-d1.$1(i)/2
v=C.k9(e1,A.b6,d6.cy,i*d0,A.H,0,0,"nimetowe_sub",0,0,0)
v.k1=d6.k2
d3.push(c9.$2(v,new B.b7([d5[0],h,d5[2],h+d1.$1(i)])))
d5=d6.RG
g=d1.$1(d5)
for(v=d6.x2,u=d6.y2,t=u+30,o=g/2,f=d6.db,e=d6.k3,d=d6.xr,a0=d6.bg,a1=d6.y1,a2=1;a2<=4;++a2){a3=a2-1
a4=a0[a3]
a5=a2===1?a1:d
a6=a4-o
a7=a5-v
a8=d2.$3(d8[a3],a7,d5)
a9=""+a2
a3=C.Lx("mahari_"+a9,0,0,c8.$1(a7),A.b6,!1,a8*d0,f,d8[a3])
a3.k1=e
d3.push(c9.$2(a3,new B.b7([v,a6,a5,a6+g])))
a3="nim_n_"+a9
a7=Date.now()
b0=$.hG
$.hG=b0+1
a3=a3.length===0?c3:c7+a3
b1=a4+14
d3.push(c9.$2(new C.en(""+1000*a7+"_"+b0,D.d1,0,0,0,0,a9,14,A.a8,A.bo,A.aG,0,A.b6,c0,D.bb,c1,c2,2,0,!1,a3,0,D.cd,0,"","","","","",!1,0),new B.b7([u,a4-14,t,b1])))
a9="nim_ul_"+a9
a3=Date.now()
b0=$.hG
$.hG=b0+1
a7=a9.length===0?c3:c7+a9
d3.push(c9.$2(new C.en(""+1000*a3+"_"+b0,D.eM,0,0,0,0,"",24,A.a8,A.bo,A.aG,c4,A.b6,c0,D.fw,0,0,0,0,!1,a7,0,D.cd,0,"","","","","",!1,0),new B.b7([v,b1,a5,a4+16])))}d5=d6.y.a
v=d6.rx
b2=(d5[1]+d5[3])/2-d1.$1(v)/2
d3.push(c9.$2(C.k9("AKUNA DENI",A.K,d6.dx,v*d0,A.u,0,0,"nim_akuna_deni",0,0,0),new B.b7([d5[0],b2,d5[2],b2+d1.$1(v)])))
v=d6.bd
u=d6.z
d3.push(c9.$2(C.kT(0,0,D.bb,v?c5:0,2,"nim_akuna_box",0,0,0),u))
d3.push(c9.$2(C.k9("\u2713",A.K,v?c5:0,20,A.u,0,0,"nim_akuna_tick",0,0,0),u))
u=u.a
t=Math.min(d5[0],u[0])
o=d5[1]
u=Math.max(d5[2],u[2])
d5=d5[3]
d3.push(c9.$2(C.kT(0,0,D.bb,0,0,"nim_akuna_hit",0,0,0),new B.b7([t,o,u,d5])))
for(d5=d6.k4,v=d6.aK,u=d6.a0,t=d6.aH,o=d6.dy,f=d6.ry,b3=0;b3<2;++b3){b4=D.dw5[b3]
for(e="marriage_sign_"+b4+"_witness_",a0="witness_"+b4+"_",b5=1;b5<=e4;++b5){a3=b5-1
b6=u.h(0,b4)[a3]
b7=t.h(0,b4)[a3]
a3=""+b5
a7=b6.a
a9=c8.$1(a7[2]-a7[0])
a7=d2.$3(c6,a7[2]-a7[0],f)
b0=v?c6:""
b0=C.Lx(a0+a3+"_name",0,0,a9,A.b6,!0,a7*d0,o,b0)
b0.k1=d5
d3.push(c9.$2(b0,b6))
b0=Date.now()
a7=$.hG
$.hG=a7+1
d3.push(c9.$2(new C.en(""+1000*b0+"_"+a7,D.eM,0.08,0.12,0.84,0.2,"",24,A.a8,A.bo,A.aG,c4,A.b6,c0,D.bb,0,0,2,0,!1,e+a3,0,D.cd,0,"","","","","",!1,0),b7))}}v=d6.Q
u=v.a
u=C.Lx("mwandishi_jina",0,0,c8.$1(u[2]-u[0]),A.b6,!0,d6.to*d0,d6.fr,"")
u.k1=d5
d3.push(c9.$2(u,v))
d3.push(c9.$2(C.ej(A.b6,!1,c4,A.aG,"marriage_sign_mwandishi",0,24,A.bo,A.a8,"",0.2,C.cC(),c0,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eM,0.84,0.08,0.12),d6.as))
b8=A.a.i(e2)
b9=d6.at
if(b9!=null&&d6.aR.length!==0){d5=d6.aR
if(b8.length===0){v=B.ag("\\s*\u2013\\s*\\{st\\}|\\{st\\}",!0,!1,!1,!1)
q=B.aL(d5,v,"")}else q=B.aL(d5,"{st}",b8)
d5=b9.a
v=d6.x1
a6=(d5[1]+d5[3])/2-d1.$1(v)/2
d3.push(c9.$2(C.kT(0,0,D.bb,0,0,"state_box",0,0,0),b9))
u=C.k9(q,A.K,d6.fx,v*d0,A.H,0,0,"state_text",0,0,0)
u.k1=d6.ok
d3.push(c9.$2(u,new B.b7([d5[0]-40,a6,d5[2]+40,a6+d1.$1(v)])))}return d3},
ioY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=C.aQm(h)
if(C.hCS(h)!=null||g!=null){w=$.ih7.c1(0,d.a,new C.fRL(d))
h=g==null?480:270/(g.b/g.c)
return B.ji(new B.dx(A.bX,A.aY,A.f,new B.a5(270,h,new B.dt(!0,new C.Fy(w,!1,!1,i),i),i),i),A.t,i)}v=B.b1(d.f)
u=B.b1(d.r)
t=C.hjo(h)
s=new C.fRK(v)
r=new C.fRM(v)
h=d.z
q=h===D.a8Y||h===D.a9_||h===D.a8X||h===D.a8Z
p=h===D.aLB||h===D.a90||h===D.aLC
o=B.bS(0,B.fX(t,A.z,i,i,A.cm,A.bX,!0,i,!1,i,i),0,0,0)
n=x.p
m=B.a([],n)
if(p){l=h===D.a90?26:16
m.push(new C.fRO().$1$size(l))}if(h===D.aLD)m.push(D.h7H)
if(q)m.push(B.A(B.a([r.$1$female(!1),r.$1$female(!0)],n),A.l,i,A.j_,A.i,0,i,i))
m.push(B.d("HATI YA KUHOWA",i,i,i,i,i,i,B.m(i,i,v,i,i,i,i,i,i,i,i,9,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),A.K,i,i))
m.push(A.am)
h=B.K(u,A.r,1.1)
l=B.l(4)
m.push(B.p(i,B.x(B.a([s.$0(),D.aVe,s.$1$w(0.9),D.aVe,s.$1$w(0.75)],n),A.l,i,A.e,A.i,0,A.p),A.f,i,i,new B.o(D.biS,i,h,l,i,i,A.n),i,i,i,i,A.aon,i,i,i))
m.push(A.am)
m.push(new C.fRN(u).$1("NIMETOWE"))
m.push(A.fE)
k=J.e6(3,x.l)
for(j=0;j<3;++j)k[j]=new B.D(A.Oo,new B.c8(A.aM,A.e,A.i,A.l,i,A.p,i,0,B.a([B.p(i,i,A.f,i,i,new B.o(u,i,i,i,i,i,A.a6),i,7,i,i,i,i,i,7),A.df,new B.bz(1,A.bd,s.$1$h(4),i)],n),i),i)
A.d.u(m,k)
m.push(A.b4)
m.push(B.d(d.b,i,i,i,i,i,i,B.m(i,i,v.j(0.85),i,i,i,i,i,i,i,i,8,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),A.K,i,i))
return new B.an(A.a0,i,A.b1,A.t,B.a([o,new B.D(D.bEO,B.x(m,A.al,i,A.e,A.i,0,A.p),i)],n),i)},
hiH(d,e){var w,v,u,t,s=null,r="Hati ya Kuhowa",q=C.Sx(e,s)
if(q==null)q=A.d.gH(D.J5)
w=C.cC()
v=C.t4(q.e,s,0,0,C.heZ(q,0.165,y.O,D.dro,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r6,"","",r,D.dr)
w=C.cC()
u=C.aQm(q.d)
u=u==null?s:u.b/u.c
t=A.a.i(d)
if(t.length===0)t=s
return C.Cs(s,s,s,s,D.r5,5,!1,"hati_kuhowa",s,s,s,s,w,s,!1,t,r,u,s,s,B.a([v],x.g),"hati_kuhowa_"+q.a,s,!1,s)},
hFN(d,e){var w,v,u,t,s=null,r="Hati ya Kuhoweya",q=C.Sx(e,s)
if(q==null)q=A.d.gH(D.J5)
w=C.cC()
v=C.t4(q.e,s,0,0,C.heZ(q,0.165,y.f,D.dmD,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r6,"","",r,D.dr)
w=C.cC()
u=C.aQm(q.d)
u=u==null?s:u.b/u.c
t=A.a.i(d)
if(t.length===0)t=s
return C.Cs(s,s,s,s,D.r5,5,!1,"hati_kuhoweya",s,s,s,s,w,s,!1,t,r,u,s,s,B.a([v],x.g),"hati_kuhoweya_"+q.a,s,!1,s)},
aTb(d,e,f){var w=0,v=B.j(x.T),u
var $async$aTb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iz(B.a([C.hj3(),C.hGu(),C.aSq()],x.m),x.H),$async$aTb)
case 3:if(d.e==null){u=null
w=1
break}u=B.bU(A.L,null,new C.h3e(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aTb,v)},
ai8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ai8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fLB(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.NA,null,new C.fLC(p),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$ai8)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.aTb(d,"Hati ya Kuhowa",D.J5),$async$ai8)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HG(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ai8)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hiH(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ai8,v)},
ai9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ai9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fLF(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.NA,null,new C.fLG(p),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$ai9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.aTb(d,"Hati ya Kuhoweya",D.J5),$async$ai9)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HG(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ai9)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hFN(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ai9,v)},
aia(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$aia=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:m=B.U(i).k("Y<1>")
l=B.C(new B.Y(i,new C.fLJ(),m),m.k("M.E"))
w=!g&&l.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.NA,null,new C.fLK(l),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$aia)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(l).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.aTb(d,"Malipo ya Awamu ya Mahari",D.SC),$async$aia)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HG(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$aia)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.Sx(s,D.SC)
if(q==null)q=A.d.gH(D.SC)
m=C.cC()
p=C.t4(q.e,null,0,0,C.heZ(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dgX,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),m,D.r6,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dr)
m=C.cC()
o=C.aQm(q.d)
o=o==null?null:o.b/o.c
n=A.a.i(r)
if(n.length===0)n=null
e.$1(C.Cs(null,null,null,null,D.r5,5,!1,"hati_malipo_awamu",null,null,null,null,m,null,!1,n,"Hati ya Makubaliano ya Malipo ya Awamu",o,null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aia,v)},
vg:function vg(d,e){this.a=d
this.b=e},
hb:function hb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fRQ:function fRQ(){},
yV:function yV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2){var _=this
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
_.k3=b0
_.k4=b1
_.ok=b2
_.p1=b3
_.p2=b4
_.p3=b5
_.p4=b6
_.R8=b7
_.RG=b8
_.rx=b9
_.ry=c0
_.to=c1
_.x1=c2},
fvj:function fvj(d,e){this.a=d
this.b=e},
QT:function QT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2){var _=this
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
_.k3=b0
_.k4=b1
_.ok=b2
_.p1=b3
_.p2=b4
_.p3=b5
_.p4=b6
_.R8=b7
_.RG=b8
_.rx=b9
_.ry=c0
_.to=c1
_.x1=c2
_.x2=c3
_.xr=c4
_.y1=c5
_.y2=c6
_.bg=c7
_.bd=c8
_.a0=c9
_.aH=d0
_.aK=d1
_.aR=d2},
fvd:function fvd(d){this.a=d},
fve:function fve(d){this.a=d},
fv9:function fv9(d,e){this.a=d
this.b=e},
fva:function fva(d,e){this.a=d
this.b=e},
fvc:function fvc(){},
fvb:function fvb(){},
fRL:function fRL(d){this.a=d},
fRK:function fRK(d){this.a=d},
fRN:function fRN(d){this.a=d},
fRO:function fRO(){},
fRM:function fRM(d){this.a=d},
h3e:function h3e(d,e){this.a=d
this.b=e},
aeV:function aeV(d,e,f){this.c=d
this.d=e
this.a=f},
e9O:function e9O(){},
e9P:function e9P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9N:function e9N(d,e){this.a=d
this.b=e},
e9M:function e9M(d,e){this.a=d
this.b=e},
biQ:function biQ(d,e,f){this.c=d
this.d=e
this.a=f},
fLB:function fLB(){},
fLC:function fLC(d){this.a=d},
fLz:function fLz(d){this.a=d},
fLA:function fLA(d){this.a=d},
fLF:function fLF(){},
fLG:function fLG(d){this.a=d},
fLD:function fLD(d){this.a=d},
fLE:function fLE(d){this.a=d},
fLJ:function fLJ(){},
fLK:function fLK(d){this.a=d},
fLH:function fLH(d){this.a=d},
fLI:function fLI(d){this.a=d},
hGu(){var w=$.hBm
return w==null?$.hBm=new C.fRT().$0():w},
fRT:function fRT(){},
hj3(){var w=$.hBn
return w==null?$.hBn=new C.fRW().$0():w},
aSh(d){var w=0,v=B.j(x.cO),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aSh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.hj3(),$async$aSh)
case 3:p=$.bHO()
o=x.N
n=B.C(p.a,o)
r=n
if(J.h7(r,d))m=D.dYJ
else{if(J.ad(r)>=4){u=D.dYK
w=1
break}else J.c5(r,d)
m=D.dYI}p.sp(0,B.wm(r,o))
t=5
w=8
return B.b(B.aA(),$async$aSh)
case 8:q=f
w=9
return B.b(q.aC("StringList","ngmy_hati_pins",r),$async$aSh)
case 9:t=2
w=7
break
case 5:t=4
k=s.pop()
w=7
break
case 4:w=2
break
case 7:u=m
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aSh,v)},
bFR(d){var w,v,u,t=d.c
for(w=t.length,v=0;v<3;++v){u=D.dtv[v]
if(A.a.a_(t,u)&&w>u.length)return A.a.b1(t,u.length)}return null},
ip0(d,e,f){var w,v,u=$.bHO().a,t=B.a([],f.k("O<0>"))
for(w=J.aT(u),v=B.U(d).k("Y<1>");w.C();)A.d.u(t,new B.Y(d,new C.fRU(e,w.gP(w),f),v))
t=B.C(t,f)
A.d.u(t,new B.Y(d,new C.fRV(u,e,f),v))
return t},
fRW:function fRW(){},
a8O:function a8O(d,e){this.a=d
this.b=e},
fRU:function fRU(d,e,f){this.a=d
this.b=e
this.c=f},
fRV:function fRV(d,e,f){this.a=d
this.b=e
this.c=f},
aQa(d){return B.a5a(d>>>16&255,d>>>8&255,d&255,d>>>24&255)},
fxt(d,e,f){var w=new C.fxu(d,f,e)
return(w.$1(24)<<24|w.$1(16)<<16|w.$1(8)<<8|w.$1(0))>>>0},
bEB(d,e){return $.ij2.c1(0,d,new C.fF8(d,e))},
hCx(d,e){return $.i9l.c1(0,d,new C.fAJ(e))},
hfy(d){var w,v,u,t,s,r,q
for(w=1;w<5;++w){v=D.a6g[w]
u=v.a
t=v.b
s=D.a6g[w-1]
r=s.a
q=s.b
if(d<=u)return C.fxt(q,t,A.h.D((d-r)/(u-r),0,1))}return A.d.gal(D.a6g).b},
irw(){return C.bEB("gold_strip",new C.fW3())},
irv(){return C.bEB("gold_coin",new C.fW2())},
iru(d,e){return C.bEB("band_"+d+"_"+e,new C.fW0(d,e))},
hzW(d,e,f,g,h){var w=B.a([new B.fJ(e,f-g),new B.fJ(e+g,f),new B.fJ(e,f+g),new B.fJ(e-g,f)],x.J)
B.Bl(d,C.aQa(h),w)},
iry(d,e,f){return C.bEB("seal_"+d+"_"+B.w(e)+"_"+f,new C.fW5(e,f,d))},
uI(d,e,f,g){return C.hCx("paper_"+g+"_"+d+"_"+f+"_"+e,new C.fW4(g,d,e,f))},
hh0(d,e,f,g,h,i,j,a0){var w,v,u,t,s,r,q,p,o=null,n=C.aQa(j),m=e+i,l=e+g,k=l-i
B.iI(d,!0,A.cY,n,o,A.cI,a0,m,k,f,f)
w=f+h
B.iI(d,!0,A.cY,n,o,A.cI,a0,m,k,w,w)
k=f+i
m=w-i
B.iI(d,!0,A.cY,n,o,A.cI,a0,e,e,k,m)
B.iI(d,!0,A.cY,n,o,A.cI,a0,l,l,k,m)
if(i<=0)return
for(m=[new B.b3(e,f,0),new B.b3(l,f,1.5707963267948966),new B.b3(l,w,3.141592653589793),new B.b3(e,w,4.71238898038469)],l=m.length,v=0;v<l;++v){k=m[v]
u=k.a
t=k.b
s=k.c
for(r=0;r<18;){q=s+1.5707963267948966*r/18;++r
p=s+1.5707963267948966*r/18
k=A.h.U(u+i*Math.cos(q))
w=A.h.U(t+i*Math.sin(q))
B.iI(d,!0,A.cY,n,o,A.cI,a0,k,A.h.U(u+i*Math.cos(p)),w,A.h.U(t+i*Math.sin(p)))}}},
hHy(d){return C.bEB("diamond_"+d,new C.fW1(d))},
fxu:function fxu(d,e,f){this.a=d
this.b=e
this.c=f},
fF8:function fF8(d,e){this.a=d
this.b=e},
fAJ:function fAJ(d){this.a=d},
fW3:function fW3(){},
fW2:function fW2(){},
fW0:function fW0(d,e){this.a=d
this.b=e},
fW5:function fW5(d,e,f){this.a=d
this.b=e
this.c=f},
fW4:function fW4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fW1:function fW1(d){this.a=d},
LD(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.ej(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bb,4280172719,2,d,0,0,"",D.cd,D.d1,k,l,m)},
Dv(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ej(A.b6,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eM,j,k,l)},
hBs(d,e,f){return C.Dv(0,0.002,D.fw,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bDh(d,e,f,g,h){return B.a([C.Dv(4294967288,0.032,D.bb,4291404327,1.15,"pill_"+d,g,f,e),C.LD(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hfW(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dv(0,0.002,D.fw,g,1,"orn_l_"+t,u,d,v),C.Dv(h,0.016,D.lx,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dv(0,0.002,D.fw,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2Q(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.LD(d,A.b6,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.ej(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.h.ad(t,3),4280640491,i,A.cL,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bb,4280172719,2,k,0,0,"",D.cd,D.d1,t,u,g-0.002),C.hBs(u,g+0.018,t)],x.u)},
hBt(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dv(h,0.028,D.bb,h,0,"chv_"+d,g,e,f),C.Dv(w,0.024,D.lx,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dv(w,0.024,D.lx,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.LD(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bDg(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.LD("Sahihi:",A.b6,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ej(A.b6,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bo,A.a8,"",0.032,C.cC(),null,"","",0,!1,"",0,D.bb,0,2,"",0,0,"",D.cd,D.eM,v,w,f-0.006),C.hBs(w,f+0.016,v)],x.u)},
hjp(d){var w,v
for(w=0;w<19;++w){v=D.Ti[w]
if(v.a===d)return v}return null},
iro(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.Sx(A.a.b1(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.Sx(A.a.b1(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b1(k,18)
w=C.Sx(u,D.SC)
v=w==null?l:w.d
if(v==null){w=C.Sx(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hjp(A.a.b1(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hCk.a8(0)
$.hCy.a8(0)
t=C.bG5(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hkB(d){var w=0,v=B.j(x.T),u
var $async$hkB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h4M(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hkB,v)},
yi:function yi(d,e){this.a=d
this.b=e},
oc:function oc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bmp:function bmp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h4M:function h4M(){},
aeY:function aeY(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
esc:function esc(d){this.a=d},
esb:function esb(d,e){this.a=d
this.b=e},
agE:function agE(d,e,f){this.c=d
this.d=e
this.a=f},
hjo(d){var w=C.irx(d)
if(w!=null)return w
return $.hCy.c1(0,d,new C.fTD(d))},
bG5(d){return $.hCk.c1(0,d,new C.fTC(d))},
fK(d){return B.a5a(d>>>16&255,d>>>8&255,d&255,255)},
igk(a2){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4294966515,n=4294373082,m=4289102906,l=4291404327,k=4294966774,j=4294702831,i=4285218602,h=4291394365,g=4294967295,f=4294964964,e=4294965484,d=4280241466,a0=4287326484,a1=4294966518
switch(a2.a){case 0:return C.hDI(4294570461,4293910718,4284234270,u)
case 1:return C.hDI(4294635750,4293975240,t,4292912216)
case 2:w=C.bCU(s,4294505966,r)
C.bD1(w,14,16,p)
C.kS(w,8,9,464,836,u,1.2)
C.Dr(w,2,2,1,1,u,10)
C.Dr(w,478,2,-1,1,u,10)
C.Dr(w,2,852,1,-1,u,10)
C.Dr(w,478,852,-1,-1,u,10)
return w
case 3:return C.bCU(o,n,m)
case 4:return C.iaT(C.bCU(4294376440,4293653998,4290287194))
case 5:w=C.bCU(4294965238,4294437098,4288444980)
C.bD1(w,14,16,4283043359)
C.kS(w,6,7,468,840,u,1)
C.kS(w,9,10,462,834,l,0.7)
return w
case 6:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,k,4294175448)
C.tn(v,k)
C.kS(v,24,24,432,806,4286209070,1)
C.a2D(v,12,12,468,12,l,3,20)
C.a2D(v,12,842,468,842,l,3,20)
C.a2D(v,12,12,12,842,l,3,20)
C.a2D(v,468,12,468,842,l,3,20)
return v
case 7:return C.i8Q(4294440434,4293518297,4280228630,r)
case 8:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,j,4293911504)
C.tn(v,j)
C.kS(v,28,28,424,798,i,1)
C.fBT(v,28,28,i,h)
C.fBT(v,452,28,i,h)
C.fBT(v,28,826,i,h)
C.fBT(v,452,826,i,h)
return v
case 9:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,g,4294111986)
C.tn(v,g)
C.kS(v,18,18,444,818,4292401368,0.7)
B.j4(v,!0,C.fK(p),0,13,0,853)
return v
case 10:return C.icR(f,4294173372)
case 11:return C.ie1(4294439140,4293449662)
case 12:return C.i8H(e,4294239432)
case 13:return C.ids(4294244340,4293193448)
case 14:return C.ihR(4294505710,4293780694)
case 15:return C.fqI(4294966259,4294439138,l,p,q)
case 16:return C.fqI(4294966776,4294178544,l,d,d)
case 17:return C.fqI(4294965493,4294504170,l,4286200650,q)
case 18:return C.fqI(4294966519,4294373862,l,p,p)
case 19:return C.ibZ()
case 20:return C.ic_()
case 21:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,e,4293976768)
C.tn(v,e)
C.bD1(v,14,16,p)
B.j4(v,!0,C.fK(u),4,475,4,9)
B.j4(v,!0,C.fK(u),4,475,844,849)
B.j4(v,!0,C.fK(u),4,9,4,849)
B.j4(v,!0,C.fK(u),470,475,4,849)
C.a2D(v,10,12,470,12,u,2,16)
C.a2D(v,10,842,470,842,u,2,16)
C.a2D(v,10,12,10,842,u,2,18)
C.a2D(v,470,12,470,842,u,2,18)
C.Dr(v,2,2,1,1,t,10)
C.Dr(v,478,2,-1,1,t,10)
C.Dr(v,2,852,1,-1,t,10)
C.Dr(v,478,852,-1,-1,t,10)
C.kS(v,14,16,452,822,u,1.8)
return v
case 22:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,s,4294438872)
C.tn(v,s)
C.kS(v,14,16,452,822,l,2.2)
C.kS(v,22,24,436,806,l,1)
C.hhn(v,!1,!1,l,p,p,36,14,16)
C.la(v,240,20,7,l,!0)
C.la(v,240,834,7,l,!0)
C.la(v,18,427,7,l,!0)
C.la(v,462,427,7,l,!0)
return v
case 23:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,f,4293910712)
C.tn(v,f)
B.j4(v,!0,C.fK(u),0,479,0,20)
B.j4(v,!0,C.fK(u),0,479,834,853)
B.j4(v,!0,C.fK(u),0,20,0,853)
B.j4(v,!0,C.fK(u),460,479,0,853)
B.j4(v,!0,C.fK(a0),5,474,5,9)
B.j4(v,!0,C.fK(a0),5,474,844,848)
B.j4(v,!0,C.fK(a0),5,9,5,848)
B.j4(v,!0,C.fK(a0),470,474,5,848)
C.kS(v,28,28,424,798,a0,1.4)
return v
case 24:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z8(v,a1,4294174404)
C.tn(v,a1)
C.bD1(v,14,16,p)
B.j4(v,!0,C.fK(u),3,476,3,8)
B.j4(v,!0,C.fK(u),3,476,845,850)
B.j4(v,!0,C.fK(u),3,8,3,850)
B.j4(v,!0,C.fK(u),471,476,3,850)
C.kS(v,9,10,462,834,t,1)
C.kS(v,14,16,452,822,u,1.8)
C.la(v,240,8,4,u,!0)
C.la(v,240,846,4,u,!0)
C.la(v,8,427,4,u,!0)
C.la(v,472,427,4,u,!0)
C.la(v,8,8,3,t,!0)
C.la(v,472,8,3,t,!0)
C.la(v,8,846,3,t,!0)
C.la(v,472,846,3,t,!0)
return v
case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:return C.bCU(o,n,m)}},
z8(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.h.U(q*w+p*t),0,255)
u=A.o.D(A.h.U(o*w+n*t),0,255)
w=A.o.D(A.h.U(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.iI(d,!1,A.cY,new B.MT(s),r,A.cI,1,0,w-1,k,k);++k}},
tn(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e0()
n.cU(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dS(u,t,o)
if(s==null)s=new B.ie()
v=A.o.D(A.h.M(s.gb6(s))-3,0,255)
r=A.o.D(A.h.M(s.gbc())-3,0,255)
q=A.o.D(A.h.M(s.gbb(s))-2,0,255)
p=d.a
if(p!=null)p.k9(u,t,v,r,q,255)}},
kS(d,e,f,g,h,i,j){var w,v=null,u=C.fK(i),t=e+g
B.iI(d,!0,A.cY,u,v,A.cI,j,e,t,f,f)
w=f+h
B.iI(d,!0,A.cY,u,v,A.cI,j,e,t,w,w)
B.iI(d,!0,A.cY,u,v,A.cI,j,e,e,f,w)
B.iI(d,!0,A.cY,u,v,A.cI,j,t,t,f,w)},
Dr(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.h.U(j*0.72),8,j-2)
B.iI(d,!0,A.cY,C.fK(i),u,A.cI,2,e,e+g*j,f,f)
B.iI(d,!0,A.cY,C.fK(i),u,A.cI,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.iI(d,!0,A.cY,C.fK(i),u,A.cI,1,w,e+g*t,v,v)
B.iI(d,!0,A.cY,C.fK(i),u,A.cI,1,w,w,v,f+h*t)},
hDI(d,e,f,g){var w=null,v=B.fU(w,w,A.bW,0,A.dS,854,w,0,3,w,A.bW,480,!1)
C.z8(v,d,e)
C.tn(v,d)
B.j4(v,!0,C.fK(f),0,479,0,28)
B.j4(v,!0,C.fK(f),0,479,826,853)
B.j4(v,!0,C.fK(f),0,28,0,853)
B.j4(v,!0,C.fK(f),452,479,0,853)
C.kS(v,5,5,470,844,g,1.1)
C.kS(v,28,28,424,798,g,1.6)
C.Dr(v,2,2,1,1,g,11)
C.Dr(v,478,2,-1,1,g,11)
C.Dr(v,2,852,1,-1,g,11)
C.Dr(v,478,852,-1,-1,g,11)
return v},
bCU(d,e,f){var w=null,v=B.fU(w,w,A.bW,0,A.dS,854,w,0,3,w,A.bW,480,!1)
C.z8(v,d,e)
C.tn(v,d)
C.kS(v,14,16,452,822,f,1.6)
C.kS(v,20,22,440,810,f,0.8)
return v},
bD1(d,e,f,g){var w,v=C.fK(g)
B.j4(d,!0,v,0,479,0,f-1)
w=854-f
B.j4(d,!0,v,0,479,w,853);--w
B.j4(d,!0,v,0,e-1,f,w)
B.j4(d,!0,v,480-e,479,f,w)},
iaT(d){var w,v,u=4291404327
C.bD1(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.la(d,w,8,3,u,!0)
C.la(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.la(d,7,v,3,u,!0)
C.la(d,473,v,3,u,!0)}return d},
fFb(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.fJ(e,f),new B.fJ(e+g*n,f),new B.fJ(e,f+h*n)],t)
B.Bl(d,C.fK(m),s)
w=A.o.D(A.h.U(n*0.17),5,8)
v=A.h.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.fJ(s,u),new B.fJ(e+g*v,u),new B.fJ(s,f+h*v)],t)
B.Bl(d,C.fK(k),t)
t=A.h.U(n*0.39)
C.la(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.la(d,e+g*t,f+h*3,4,k,!0)
C.la(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.la(d,e+g*t,f,5,k,!0)
C.la(d,e,f+h*t,5,k,!0)}},
hhn(d,e,f,g,h,i,j,k,l){var w,v
C.fFb(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fFb(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fFb(d,k,v,1,-1,e,f,g,h,i,j)
C.fFb(d,w,v,-1,-1,e,f,g,h,i,j)},
a2D(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.h.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.h.U(e+o*s)
q=A.h.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kV(d,!0,A.cY,new B.lz(p),null,A.cI,j,r,q)}},
fE3(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.iI(d,!0,A.cY,new B.lz(o),null,A.cI,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.iI(d,!0,A.cY,new B.lz(o),null,A.cI,1.4,q,q,p,p+h*r)}},
i8Q(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.fU(o,o,A.bW,0,A.dS,854,o,0,3,o,A.bW,480,!1)
C.z8(n,d,e)
C.tn(n,d)
C.kS(n,20,20,440,814,f,1.2)
C.fE3(n,0,0,1,1,g)
C.fE3(n,480,0,-1,1,g)
C.fE3(n,0,854,1,-1,g)
C.fE3(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.h.U(240+24*r)
q=A.h.U(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.iI(n,!0,A.cY,new B.lz(p),o,A.cI,1.2,240,r,60,q)}return n},
fBT(d,e,f,g,h){var w
C.ai2(d,!0,C.fK(g),13,e,f)
C.ai2(d,!0,C.fK(g),9,e,f)
w=B.a([new B.fJ(e,f-4),new B.fJ(e+4,f),new B.fJ(e,f+4),new B.fJ(e-4,f)],x.J)
B.Bl(d,C.fK(h),w)},
la(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.fJ(e,v),new B.fJ(u,f),new B.fJ(e,t),new B.fJ(s,f)],x.J)
if(i){B.Bl(d,C.fK(h),r)
return}B.iI(d,!0,A.cY,C.fK(h),w,A.cI,1,e,u,v,f)
B.iI(d,!0,A.cY,C.fK(h),w,A.cI,1,u,e,f,t)
B.iI(d,!0,A.cY,C.fK(h),w,A.cI,1,e,s,t,f)
B.iI(d,!0,A.cY,C.fK(h),w,A.cI,1,s,e,f,v)},
fqH(d,e,f,g,h,i,j){var w,v=B.a([new B.fJ(e,f),new B.fJ(e+g*28,f),new B.fJ(e,f+h*28)],x.J)
B.Bl(d,C.fK(i),v)
v=e+g*14
w=f+h*14
C.la(d,v,w,6,j,!0)
C.la(d,v,w,3,i,!0)},
fqI(d,e,f,g,h){var w=null,v=B.fU(w,w,A.bW,0,A.dS,854,w,0,3,w,A.bW,480,!1)
C.z8(v,d,e)
C.tn(v,d)
C.kS(v,18,18,444,818,f,2)
C.kS(v,26,26,428,802,f,0.9)
if(h!=null)B.j4(v,!0,C.fK(h),28,451,28,34)
C.fqH(v,18,18,1,1,g,f)
C.fqH(v,462,18,-1,1,g,f)
C.fqH(v,18,836,1,-1,g,f)
C.fqH(v,462,836,-1,-1,g,f)
return v},
ibZ(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.fU(v,v,A.bW,0,A.dS,854,v,0,3,v,A.bW,480,!1)
C.z8(r,u,4294240980)
C.tn(r,u)
C.kS(r,10,12,460,830,t,3.2)
C.kS(r,18,20,444,814,s,1.2)
C.kS(r,24,26,432,802,t,1.8)
C.hhn(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.la(r,w,16,3,t,!0)
C.la(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.la(r,16,w,3,t,!0)
C.la(r,464,w,3,t,!0)}return r},
ic_(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.fU(t,t,A.bW,0,A.dS,854,t,0,3,t,A.bW,480,!1)
C.z8(p,s,4294373080)
C.tn(p,s)
C.kS(p,16,18,448,818,r,2.4)
C.kS(p,24,26,432,802,4286209044,1)
w=new C.fte(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hhn(p,!1,!0,r,q,q,34,16,18)
return p},
bDJ(d,e,f,g,h,i){B.j4(d,!0,C.fK(i),e,e+g,f,f+h)},
bEC(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.h.U(v*l+u*m),0,255)
j=A.o.D(A.h.U(t*l+s*m),0,255)
l=A.o.D(A.h.U(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.iI(d,!1,A.cY,new B.MT(i),null,A.cI,1,e,w,l,l)}},
icQ(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.iI(d,!1,A.cY,new B.lz(r),null,A.cI,1,e,s,t,t);++v}return}w=f+g-1
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
B.iI(d,!1,A.cY,new B.lz(r),null,A.cI,1,t,t,f,s);++q}},
icR(d,e){var w,v,u=null,t=B.fU(u,u,A.bW,0,A.dS,854,u,0,3,u,A.bW,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.icQ(t,v,w,30,D.d8S,(A.o.ar(v,30)+A.o.ar(w,30)&1)===0)
C.bDJ(t,44,44,392,766,d)
C.bEC(t,44,44,392,766,d,e)
C.tn(t,d)
C.kS(t,44,44,392,766,4292128567,2.2)
C.kS(t,50,50,380,754,4279898632,0.8)
return t},
ie0(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.la(d,e,f,7,h,!0)
C.la(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.iI(d,!0,A.cY,C.fK(h),o,A.cI,1.6,w,u,v,t)
B.iI(d,!0,A.cY,C.fK(h),o,A.cI,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.iI(d,!0,A.cY,new B.lz(p),o,A.cI,1.2,w,v,q,q)}break
default:B.iI(d,!0,A.cY,C.fK(h),o,A.cI,1.5,e-8,e+8,f,f)
B.iI(d,!0,A.cY,C.fK(h),o,A.cI,1.5,e,e,f-8,f+8)
B.kV(d,!0,A.cY,C.fK(h),o,A.cI,2,e,f)}},
ie1(d,e){var w,v,u,t,s=null,r=B.fU(s,s,A.bW,0,A.dS,854,s,0,3,s,A.bW,480,!1)
B.j4(r,!0,C.fK(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.ie0(r,u,v,w,4292391514)}C.bDJ(r,46,46,388,762,d)
C.bEC(r,46,46,388,762,d,e)
C.tn(r,d)
C.kS(r,46,46,388,762,4291404327,1.8)
return r},
hyK(d,e,f,g){C.ai2(d,!0,C.fK(g),16,e,f)
C.ai2(d,!0,C.fK(g),11,e,f)
C.la(d,e,f,6,g,!0)
B.iI(d,!0,A.cY,C.fK(g),null,A.cI,1.3,e-14,e+14,f,f)
B.iI(d,!0,A.cY,C.fK(g),null,A.cI,1.3,e,e,f-14,f+14)},
i8H(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.fU(v,v,A.bW,0,A.dS,854,v,0,3,v,A.bW,480,!1)
B.j4(s,!0,C.fK(4280948752),0,479,0,853)
B.j4(s,!0,C.fK(u),0,479,0,78)
B.j4(s,!0,C.fK(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hyK(s,w,39,t)
C.hyK(s,w,815,t)}C.bDJ(s,38,92,404,670,d)
C.bEC(s,38,92,404,670,d,e)
C.tn(s,d)
C.kS(s,38,92,404,670,t,1.8)
C.kS(s,45,99,390,656,4287322667,0.8)
return s},
idr(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.fJ(e,f),new B.fJ(q-5,w),new B.fJ(q,f-(18-Math.abs(r)*3)),new B.fJ(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.Bl(d,new B.lz(o),p)}B.kV(d,!0,A.cY,C.fK(4292128567),null,A.cI,3,e,f)},
ids(d,e){var w,v,u,t,s=null,r=4279196764,q=B.fU(s,s,A.bW,0,A.dS,854,s,0,3,s,A.bW,480,!1)
C.z8(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.iI(q,!0,A.cY,new B.lz(v),s,A.cI,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.iI(q,!0,A.cY,new B.lz(u),s,A.cI,1.1,v,v,0,853)}B.j4(q,!0,C.fK(r),0,479,0,70)
B.j4(q,!0,C.fK(r),0,479,798,853)
for(t=0;t<5;++t)C.idr(q,70+t*85,48,4292128567)
C.bDJ(q,48,78,384,712,d)
C.bEC(q,48,78,384,712,d,e)
C.tn(q,d)
C.kS(q,48,78,384,712,4291404327,1.6)
return q},
ihR(d,e){var w,v,u,t=null,s=4279970378,r=B.fU(t,t,A.bW,0,A.dS,854,t,0,3,t,A.bW,480,!1)
B.j4(r,!0,C.fK(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.la(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kV(r,!0,A.cY,new B.lz(u),t,A.cI,1,v,w)}C.bDJ(r,40,40,400,774,d)
C.bEC(r,40,40,400,774,d,e)
C.tn(r,d)
C.kS(r,40,40,400,774,4291058750,2)
C.kS(r,48,48,384,758,s,0.8)
return r},
irx(d){var w,v=4291404346,u=4292128567,t=4279776388,s=4278852693,r=4294369986,q=4293842610,p=4287257131,o=4284099120,n=4281078794,m=4294439138,l=4293911760,k=4294371268,j=4293908910
switch(d.a){case 25:w=C.uI(4294372308,!1,v,4294768102)
break
case 31:w=C.uI(4293850350,!1,v,4294507511)
break
case 26:w=C.uI(4294241238,!0,v,4294702826)
break
case 27:w=C.uI(4278659101,!0,u,4279055656)
break
case 28:w=C.uI(4278850864,!0,u,4279377732)
break
case 29:w=C.uI(4280289578,!0,u,4281208888)
break
case 30:w=C.uI(4279045131,!0,u,4279900439)
break
case 32:w=C.uI(s,!0,u,t)
break
case 33:w=C.uI(q,!0,p,r)
break
case 34:w=C.uI(n,!0,u,o)
break
case 35:w=C.uI(l,!0,v,m)
break
case 36:w=C.uI(j,!0,4286192418,k)
break
case 37:w=C.uI(j,!0,4279510095,k)
break
case 38:w=C.uI(s,!0,u,t)
break
case 39:w=C.uI(q,!0,p,r)
break
case 40:w=C.uI(n,!0,u,o)
break
case 41:w=C.uI(l,!0,v,m)
break
default:w=null
break}return w},
hE:function hE(d,e){this.a=d
this.b=e},
fTD:function fTD(d){this.a=d},
fTC:function fTC(d){this.a=d},
fte:function fte(d){this.a=d},
fUl(d){var w
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
idV(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hfO(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.pe(d,"}")
if(s<0||r<=s)return t
try{w=A.W.aP(0,An.aiv(A.a.aA(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
ah0(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ah0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vY(null,""),$async$ah0)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.ns(n)
if(e==null)s=A.i1
else{r=C.idV(e)
s=B.a([new B.a1A(A.cK.gcn().aL(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rn(t,d,s,"news",E.Cu),$async$ah0)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.M4(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$ah0,v)},
bGh(d){return C.ir4(d)},
ir4(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bGh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.W.av(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ah0(r,null),$async$bGh)
case 7:q=f
p=C.hfO(q)
if(p==null){u=d
w=1
break}o=d.aFf(p)
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
return B.i($async$bGh,v)},
hCU(d){var w,v=F.hiC(d)
v=B.aL(v,"book","newspaper")
if(F.a3J(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fYr(d,e,f,g){return C.it2(d,e,f,g)},
it2(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fYr=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fUl(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hGT()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ah0('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hCU(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fYr)
case 3:r=m.hfO(i)
if(r==null)throw B.W(y.S)
q=new C.Ac(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aFf(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aN(t," ")
if(F.a3J(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3J(A.d.aN(t," "))==="sw"?C.bGh(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fYr,v)},
bFJ(d,e,f,g,h){return C.ioz(d,e,f,g,h)},
ioz(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bFJ=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fN(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aN(l,"\n")
l=C.hGT()
k=A.W.av(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ah0('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hCU(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bFJ)
case 3:p=j.hfO(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aFf(B.a1(o,x.N,x.z))
m=A.W.av(n.aj(),null)!==A.W.av(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3J(A.d.aN(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bGh(n),$async$bFJ)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9s(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFJ,v)},
a9s:function a9s(d,e,f){this.a=d
this.b=e
this.c=f},
ivJ(d,e){return B.a6(d,!1).ce(B.ef(new C.h4X(e),!0,null,x.H))},
h4X:function h4X(d){this.a=d},
Xh:function Xh(d,e){this.c=d
this.a=e},
aGB:function aGB(d,e,f,g,h,i,j,k){var _=this
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
eva:function eva(d){this.a=d},
ev9:function ev9(){},
evb:function evb(d){this.a=d},
ev8:function ev8(d,e){this.a=d
this.b=e},
evc:function evc(){},
euN:function euN(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e){this.a=d
this.b=e},
euU:function euU(d){this.a=d},
euV:function euV(d,e){this.a=d
this.b=e},
euW:function euW(d){this.a=d},
euP:function euP(d,e){this.a=d
this.b=e},
euQ:function euQ(d,e){this.a=d
this.b=e},
euR:function euR(d,e){this.a=d
this.b=e},
euS:function euS(d){this.a=d},
euT:function euT(d){this.a=d},
euO:function euO(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
euM:function euM(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev2:function ev2(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev3:function ev3(d,e){this.a=d
this.b=e},
ev_:function ev_(d,e){this.a=d
this.b=e},
ev4:function ev4(d){this.a=d},
euZ:function euZ(d){this.a=d},
ev5:function ev5(d){this.a=d},
euY:function euY(d){this.a=d},
ev6:function ev6(d,e){this.a=d
this.b=e},
euX:function euX(d,e){this.a=d
this.b=e},
ev7:function ev7(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
aSq(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$aSq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hAm){w=1
break}r=new C.fTe()
t=4
q=x.s
w=7
return B.b(B.iz(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.m),x.H),$async$aSq)
case 7:$.hAm=!0
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
return B.i($async$aSq,v)},
bG8(d){return A.DV[B.mA(d)-1]+", "+A.oU[B.bM(d)-1]+" "+B.bY(d)+", "+B.bD(d)},
igY(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dBW[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hj2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.u(h,new B.Y(v,new C.fRo(),B.U(v).k("Y<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.J)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fRq(j,h)
n=new C.fRp(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ar(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j6(o.$1(l)))
j.a+=l}return u},
hfs(d,e){var w=new C.fsN()
return A.d.cB(e,0,new C.fsL(w))>=A.d.cB(d,0,new C.fsM(w))},
hxp(d){var w,v,u=new B.aH($.S().r,A.aj,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bx())
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
ckw:function ckw(d){this.a=d},
cku:function cku(){},
ckv:function ckv(){},
tS:function tS(d,e){this.a=d
this.b=e},
Cd:function Cd(d,e){this.a=d
this.b=e},
lG:function lG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fTe:function fTe(){},
fRo:function fRo(){},
fRq:function fRq(d,e){this.a=d
this.b=e},
fRp:function fRp(d,e,f){this.a=d
this.b=e
this.c=f},
fsN:function fsN(){},
fsO:function fsO(){},
fsL:function fsL(d){this.a=d},
fsM:function fsM(d){this.a=d},
b3N:function b3N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ckx:function ckx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cky:function cky(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ckz:function ckz(d){this.a=d},
bfp:function bfp(d){this.a=d},
bfo:function bfo(d,e){this.b=d
this.a=e},
bxv:function bxv(d){this.a=d},
bbS:function bbS(d,e){this.b=d
this.a=e},
buZ:function buZ(d,e){this.b=d
this.a=e},
hJc(d,e){return B.a6(d,!1).ce(B.ef(new C.h5_(e,null),!0,null,x.F))},
h5_:function h5_(d,e){this.a=d
this.b=e},
Xi:function Xi(d,e,f){this.c=d
this.d=e
this.a=f},
aGE:function aGE(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
evX:function evX(){},
evY:function evY(d){this.a=d},
evW:function evW(d,e){this.a=d
this.b=e},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evR:function evR(d){this.a=d},
evS:function evS(d,e){this.a=d
this.b=e},
evP:function evP(d){this.a=d},
evQ:function evQ(d,e,f){this.a=d
this.b=e
this.c=f},
evM:function evM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evT:function evT(d,e){this.a=d
this.b=e},
evO:function evO(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evN:function evN(d,e){this.a=d
this.b=e},
evV:function evV(d,e){this.a=d
this.b=e},
beX:function beX(d,e,f){this.b=d
this.c=e
this.a=f},
ivP(d){return B.a6(d,!1).ce(B.ef(new C.h5f(),!0,null,x.I))},
bDt(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hh4(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h5f:function h5f(){},
a1r:function a1r(d){this.a=d},
p2:function p2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aI4:function aI4(d,e,f,g,h,i,j,k,l){var _=this
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
_.aO=_.aR=_.aK=_.aH=_.a0=_.bd=_.bg=_.y2=0
_.b2=null
_.aZ=0.25
_.bi=null
_.bH=0.5
_.aY=1
_.c6=_.bx=_.bn=0
_.cT=_.cg=!1
_.c=_.a=null},
f5h:function f5h(d){this.a=d},
f49:function f49(d,e){this.a=d
this.b=e},
f4x:function f4x(d,e){this.a=d
this.b=e},
f4H:function f4H(d){this.a=d},
f3T:function f3T(d){this.a=d},
f3U:function f3U(d){this.a=d},
f3R:function f3R(d){this.a=d},
f3S:function f3S(d){this.a=d},
f4q:function f4q(d,e){this.a=d
this.b=e},
f4r:function f4r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4D:function f4D(d,e,f){this.a=d
this.b=e
this.c=f},
f4C:function f4C(d,e){this.a=d
this.b=e},
f4E:function f4E(d,e){this.a=d
this.b=e},
f4B:function f4B(d,e){this.a=d
this.b=e},
f4G:function f4G(d,e,f){this.a=d
this.b=e
this.c=f},
f4F:function f4F(d,e){this.a=d
this.b=e},
f3J:function f3J(d){this.a=d},
f3K:function f3K(d){this.a=d},
f3L:function f3L(d){this.a=d},
f3I:function f3I(){},
f3M:function f3M(d,e){this.a=d
this.b=e},
f3H:function f3H(d,e){this.a=d
this.b=e},
f3O:function f3O(){},
f3N:function f3N(d,e){this.a=d
this.b=e},
f3G:function f3G(d,e){this.a=d
this.b=e},
f3D:function f3D(d,e){this.a=d
this.b=e},
f3P:function f3P(d){this.a=d},
f3F:function f3F(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d){this.a=d},
f3E:function f3E(d,e){this.a=d
this.b=e},
f56:function f56(d,e){this.a=d
this.b=e},
f5d:function f5d(d){this.a=d},
f5e:function f5e(d,e){this.a=d
this.b=e},
f5f:function f5f(){},
f57:function f57(d,e){this.a=d
this.b=e},
f55:function f55(d,e){this.a=d
this.b=e},
f58:function f58(d,e){this.a=d
this.b=e},
f54:function f54(d,e){this.a=d
this.b=e},
f59:function f59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f53:function f53(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5a:function f5a(d){this.a=d},
f5b:function f5b(d,e){this.a=d
this.b=e},
f5c:function f5c(d){this.a=d},
f52:function f52(d){this.a=d},
f4Q:function f4Q(d){this.a=d},
f4R:function f4R(d){this.a=d},
f4P:function f4P(d,e){this.a=d
this.b=e},
f4K:function f4K(d,e){this.a=d
this.b=e},
f4S:function f4S(d){this.a=d},
f4V:function f4V(d){this.a=d},
f4O:function f4O(d){this.a=d},
f4W:function f4W(d){this.a=d},
f4X:function f4X(d){this.a=d},
f4Y:function f4Y(d){this.a=d},
f4Z:function f4Z(d){this.a=d},
f4N:function f4N(d){this.a=d},
f5_:function f5_(d){this.a=d},
f4M:function f4M(d){this.a=d},
f50:function f50(d,e){this.a=d
this.b=e},
f4L:function f4L(d,e){this.a=d
this.b=e},
f51:function f51(d){this.a=d},
f4T:function f4T(d){this.a=d},
f4U:function f4U(d){this.a=d},
f4u:function f4u(d){this.a=d},
f4t:function f4t(d){this.a=d},
f4v:function f4v(d,e){this.a=d
this.b=e},
f4s:function f4s(d,e){this.a=d
this.b=e},
f4w:function f4w(d){this.a=d},
f4m:function f4m(d){this.a=d},
f4l:function f4l(d){this.a=d},
f4n:function f4n(d){this.a=d},
f4k:function f4k(d){this.a=d},
f4o:function f4o(d,e){this.a=d
this.b=e},
f4j:function f4j(d,e){this.a=d
this.b=e},
f4i:function f4i(d,e){this.a=d
this.b=e},
f40:function f40(d){this.a=d},
f41:function f41(d){this.a=d},
f42:function f42(d){this.a=d},
f43:function f43(d){this.a=d},
f44:function f44(d){this.a=d},
f45:function f45(d){this.a=d},
f46:function f46(d){this.a=d},
f47:function f47(d){this.a=d},
f48:function f48(d){this.a=d},
f3m:function f3m(d){this.a=d},
f3n:function f3n(d){this.a=d},
f3o:function f3o(d){this.a=d},
f3p:function f3p(d){this.a=d},
f3q:function f3q(d){this.a=d},
f3l:function f3l(d){this.a=d},
f3r:function f3r(d){this.a=d},
f3s:function f3s(d){this.a=d},
f3V:function f3V(d){this.a=d},
f3W:function f3W(d){this.a=d},
f3X:function f3X(d){this.a=d},
f3Y:function f3Y(d){this.a=d},
f3Z:function f3Z(d){this.a=d},
f3w:function f3w(d){this.a=d},
f3x:function f3x(d){this.a=d},
f3y:function f3y(d){this.a=d},
f3z:function f3z(d){this.a=d},
f3A:function f3A(d){this.a=d},
f3v:function f3v(d){this.a=d},
f3B:function f3B(d){this.a=d},
f3u:function f3u(d){this.a=d},
f3C:function f3C(d){this.a=d},
f3t:function f3t(d){this.a=d},
f4p:function f4p(d){this.a=d},
f4h:function f4h(d){this.a=d},
f4d:function f4d(d){this.a=d},
f4c:function f4c(d){this.a=d},
f4e:function f4e(d,e){this.a=d
this.b=e},
f4b:function f4b(d,e){this.a=d
this.b=e},
f4f:function f4f(d,e){this.a=d
this.b=e},
f4a:function f4a(d,e){this.a=d
this.b=e},
f4g:function f4g(d){this.a=d},
f4A:function f4A(d){this.a=d},
f4z:function f4z(d,e,f){this.a=d
this.b=e
this.c=f},
f4y:function f4y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4J:function f4J(d,e){this.a=d
this.b=e},
f4I:function f4I(d,e){this.a=d
this.b=e},
f4_:function f4_(d){this.a=d},
f5g:function f5g(d){this.a=d},
biy:function biy(d,e){this.b=d
this.a=e},
irf(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
irg(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).l_(0,d),m=B.C(n,B.a3(n).k("M.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b1(d,v)
return n.charCodeAt(0)==0?n:n},
bE4(){var w=$.bDa,v=$.RG
$.RG=v+1
return w+"_"+v},
iv(d,e,f,g,h,i,j){return C.ej(A.b6,!1,4279310375,A.aG,"",i,24,A.bo,A.a8,"",h,C.bE4(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cd,D.eM,g,e,f)},
os(d,e,f,g){var w=f*9
return C.iv(D.eZ,d-f/2,e-w/32,f,w/16,g,0)},
iao(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bDa
o=$.RG
$.RG=o+1
w.push(new C.en(p+"_"+o,D.eM,0,q,1,0.0016,"",24,A.a8,A.bo,A.aG,k,A.b6,null,D.bb,s,s,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bDa
o=$.RG
$.RG=o+1
w.push(new C.en(p+"_"+o,D.eM,n,0,0.004,1,"",24,A.a8,A.bo,A.aG,k,A.b6,null,D.bb,s,s,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.os(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.os(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.iv(D.bb,0.08,0.08,0.5,0.003,v,0),C.iv(D.bb,0.58,0.08,0.004,0.06,v,0),C.iv(D.bb,0.58,0.14,0.34,0.003,v,0),C.iv(D.bb,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.iv(D.bb,0.08,0.8,0.004,0.14,t,0),C.iv(D.bb,0.08,0.94,0.6,0.003,t,0),C.os(0.58,0.08,0.05,e),C.os(0.92,0.22,0.05,e),C.os(0.08,0.8,0.05,f),C.os(0.68,0.94,0.05,f),C.os(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.iv(D.lx,0.62,0.04,0.34,0.2,w|855638016,0.2),C.iv(D.lx,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.iv(D.lx,0.7,0.8,0.22,0.12,w|1140850688,0),C.iv(D.lx,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.os(0.5,0.5,1.5,w|335544320),C.os(0.5,0.5,1.15,w|402653184),C.os(0.5,0.5,0.8,v|436207616),C.os(0.95,0.05,0.4,v|855638016),C.os(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.os(0.85,0.08,0.7,w|1140850688),C.os(0.1,0.35,0.5,v|855638016),C.os(0.9,0.62,0.55,v|771751936),C.os(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.iv(D.bb,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.iv(D.bb,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.iv(D.bb,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.iv(D.bb,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.os(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.os(0.5,0.2,0.65,(w|3422552064)>>>0),C.os(0.5,0.2,0.95,w|855638016),C.iv(D.bb,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.iv(D.bb,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.iv(D.kk,-0.1,0.78,0.7,0.2,w|1426063360,0),C.iv(D.kk,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.iv(D.kk,0.15,0.86,0.6,0.14,1712265002,0),C.os(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.day[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bDa
l=$.RG
$.RG=l+1
w.push(new C.en(o+"_"+l,D.eM,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bo,A.aG,k,A.b6,null,D.eZ,s,s,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.os(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.iv(D.kk,0.35,-0.1,0.3,0.62,w|855638016,0),C.iv(D.kk,0.05,-0.1,0.3,0.55,v,-0.5),C.iv(D.kk,0.65,-0.1,0.3,0.55,v,0.5),C.os(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.iv(D.bb,0.06,0.04,0.88,0.002,e,0),C.iv(D.bb,0.06,0.96,0.88,0.002,e,0),C.iv(D.bb,0.06,0.04,0.004,0.92,e,0),C.iv(D.bb,0.936,0.04,0.004,0.92,e,0),C.iv(D.bb,0.09,0.07,0.82,0.001,w,0),C.iv(D.bb,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.iv(D.kl,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.iv(D.kl,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.iv(D.kl,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.iv(D.bb,0,0,0.3,0.09,w|1140850688,0),C.iv(D.bb,0.7,0.9,0.3,0.1,v|1426063360,0),C.iv(D.bb,0.82,0.04,0.12,0.07,w|771751936,0),C.iv(D.bb,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.iv(D.eZ,0.62,0.02,0.5,0.16,v,0.6),C.iv(D.eZ,0.78,0.12,0.4,0.12,u,0.9),C.iv(D.eZ,-0.12,0.8,0.5,0.16,u,-0.6),C.iv(D.eZ,-0.05,0.9,0.4,0.12,v,-0.9),C.os(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.iv(D.bb,0.09,0.12,0.16,0.006,e,0),C.iv(D.bb,0.05,0.03,0.9,0.001,w,0),C.iv(D.bb,0.05,0.97,0.9,0.001,w,0)],x.u)}},
inB(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bDa=j
$.RG=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fON()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ej(A.b6,!1,n,A.aG,"ngmy_quote_background",m,24,A.bo,A.a8,"",1,C.bE4(),g,"","",0,!1,"",0,D.bb,l,2,"",0,0,"",D.cd,D.kj,1,0,0))
if(a9)A.d.u(q,C.iao(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.h.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.irf(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fOM(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.h.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cL,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.ej(A.b6,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bo,A.a8,a1,a3*9/16,C.bE4(),a0,"","",0,!1,a2,0,D.bb,l,2,"",0,0,"",D.cd,D.kj,a3,a4,a5))
return C.t4(s,r,0,0,q,j+"_slide",D.r6,"","","",D.dr)},
t3:function t3(d,e){this.a=d
this.b=e},
my:function my(d,e,f,g,h,i,j,k,l,m){var _=this
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
fON:function fON(){},
fOM:function fOM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
i0e(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bk(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b9(u.a(w.h(d,"extras")),new C.cm1(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.Ad(u,t,s,B.w(w==null?"":w))},
fWO(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fWO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hAK){w=1
break}$.hAK=!0
t=4
w=7
return B.b(B.aA(),$async$fWO)
case 7:r=e
q=B.aV(J.u(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.W.aP(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i9(p),k=k.gae(k),j=x.j,i=x.e8;k.C();){o=k.gP(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gP(h)
l=C.i0e(m)
if(l!=null)J.c5(n,l)}$.Ds.c1(0,B.w(o.a),new C.fWP(n))}C.hgI()
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
return B.i($async$fWO,v)},
hgI(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dn($.Ds,$.Ds.r,$.Ds.e);w.C();)J.nY(w.d,new C.fB9(v))
$.Ds.bq($.Ds,new C.fBa())},
aQN(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQN=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQN)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cd($.Ds,B.a3($.Ds).k("cd<1,2>")).gae(0),j=x.c7;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gP(h)
g=o
J.c5(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aC("String","ngmy_slides_ai_history_v1",A.W.av(n,null)),$async$aQN)
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
return B.i($async$aQN,v)},
irY(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hgI()
w=$.Ds.c1(0,d,new C.fWR())
v=Date.now()
u=B.C(e,B.a3(e).k("ci.E"))
J.n7(w,0,new C.Ad(new B.V(v,0,!1),f,u,g))
C.aQN()},
irV(d){var w,v=$.Ds.h(0,d)
if(v==null||J.ct(v))return
w=J.cE(v)
w.cH(v,0)
if(w.gau(v))$.Ds.W(0,d)
C.aQN()},
Ad:function Ad(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cm1:function cm1(){},
fWP:function fWP(d){this.a=d},
fB9:function fB9(d){this.a=d},
fBa:function fBa(){},
fWR:function fWR(){},
is_(d){return A.d.dL(D.xi,new C.fWU(d),new C.fWV())},
i0c(d){var w
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
i0b(d){var w
switch(d.a){case 0:w=D.aqW
break
case 1:w=A.zE
break
case 2:w=A.Qk
break
case 3:w=I.aqE
break
case 4:w=A.arp
break
case 5:w=A.mo
break
default:w=null}return w},
idx(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Sr[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Sr[w]
if(!B.cR(v.toLowerCase(),t,0))u=B.cR(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
i0d(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
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
o.push(q)}return A.W.av(B.I(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
irW(d,e,f,g,h){var w=new B.N(D.xi,new C.fWN(),x.eC).aN(0,", "),v=""+d,u=C.hGL(h),t=F.fQb(h),s=C.hCv(g),r=e.q(0,D.JM)?'- New slides get an "emoji".\n':"",q=e.q(0,D.JN)?'- New slides get an "icon3d" from: '+A.d.aN(D.Sr,", ")+".\n":"",p=e.q(0,D.Ew)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
irX(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.xi,new C.fWQ(),x.eC).aN(0,", "),p=new B.fg("")
if(e.q(0,D.JM)){p.a=s
w=s}else w=""
if(e.q(0,D.JN))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aN(D.Sr,", ")+".\n")
if(e.q(0,D.Ew))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hGL(d)
v=F.fQb(d)
u=C.hCv(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.v(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aiJ(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DT(a3,"{"),a5=J.h8D(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mq(a3,a4,a5+1)
try{w=A.W.aP(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.u(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gP(o)
if(!q.b(t))continue
if(p.b(J.u(t,a2))){l=J.b9(p.a(J.u(t,a2)),new C.fUE(),m).c_(0,new C.fUF())
k=B.C(l,l.$ti.k("M.E"))}else k=B.a([],n)
s=k
l=J.u(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.u(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.u(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.u(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.u(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.u(t,"icon3d")
f=C.idx(B.w(f==null?"":f))
if(f==null)f=""
e=J.u(t,"image_query")
if(e==null)e=J.u(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.u(t,"picture")
d=B.cb(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a9A(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.u(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.u(w,"title")
q=A.a.i(B.w(q==null?J.fn(u).b:q))
p=A.d.aU(D.xi,new C.fUG(r))?r:a7
o=C.fAo(J.u(w,"logo_frame"),D.DR)
n=C.fAo(J.u(w,"logo_ring"),D.DK)
m=C.fAo(J.u(w,"photo_frame"),D.DR)
l=C.fAo(J.u(w,"photo_ring"),D.DK)
return new C.atq(q,p,u,o,n,m,l)}catch(a0){return a1}},
a3d(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hFP(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.Ex),f7=f6?C.i6Z():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e0()
v.cU(f7.w+1)
u=f7.a
t=B.br(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.of("luxe",u.a,A.mo,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dr)
w=s}if(w==null)w=C.is_(f9.b)
r=g2.q(0,D.a9i)||f6
q=g2.q(0,D.JM)
p=g2.q(0,D.Us)
o=new C.fOR()
n=B.a([],x.g)
m=new C.fOU(o,w,r)
l=new C.fOT(o,r)
k=new C.fOS(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.aU(u,new C.fOQ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.dcg[b8]
c0=D.db5[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fky.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eZ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eZ,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.na,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r7,500,f2,f0))
c1.push(l.$8$fx$key(D.bb,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.Up
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eZ,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lx,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bb,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Eu
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eZ,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.na,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cL,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r7,500,f2,f0))
d3=D.n9
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eZ,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bb,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vy:D.cd
c1.push(new C.en(b4,D.a9g,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bo,A.aG,4279310375,A.b6,e4,D.bb,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n9
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eZ,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.na,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r7,450,f2,f0))
c1.push(l.$8$fx$key(D.bb,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.Up
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eZ,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eZ,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bb,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bb,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aN(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.JK,!0,a2,250,f5))
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
e2.id=i?f:g7}}if(f8)C.i8G(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dEu[A.o.F(b1,6)]:s
n.push(new C.ll(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cs(e4,e4,e4,e4,D.Et,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aA(e3,0,60):e3,e4,e4,e4,n,"office_blue",e4,!1,e4)},
fRe(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fRe=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.Ew)
n=e.q(0,D.JN)
if(!o&&!n){u=D.a7Y
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fRh(o,s[r],n,$.icf,r).$0())
s=B.T(x.r,x.aH)
m=J
w=3
return B.b(B.iz(t,x.e),$async$fRe)
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
return B.i($async$fRe,v)},
fQe(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fQe=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.irX(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aQ5(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fQe)
case 3:u=s.aQt(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQe,v)},
bFK(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bFK=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.e_(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.I(0,(q==null?r.a(q):q).b)}C.irY(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aiJ(i,"colorful")
t=C.irW(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aQ5(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i1),$async$bFK)
case 3:u=o.aQt(m,f,h,g,D.ekr,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFK,v)},
aQ5(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aQ5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vY(null,""),$async$aQ5)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.ns(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rn(t,d,g,"slides",null),$async$aQ5)
case 7:q=i
p=q.b
if(p!=null){o=C.aiJ(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.M4(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aQ5,v)},
aQt(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aQt=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.Ew)||e.q(0,D.JN)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d0(e,x.Q)
t.W(0,D.Ew)}w=6
return B.b(C.fRe(d,t),$async$aQt)
case 6:s=k
w=4
break
case 5:s=D.a7Y
case 4:t=d.c
w=A.d.aU(t,new C.fsH())?7:9
break
case 7:r=$.hHG
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dN(r,x.aP),$async$aQt)
case 10:q=k
p=q!=null?A.W.av(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hFP(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.i0d(new C.atq(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fsI(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("kd<ci.E,n>")
t=B.C(new B.kd(e,new C.fsJ(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.Us)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQt,v)},
hjO(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a6I[v]
if(A.d.q(t,u.b))w.I(0,u)}return w},
ivU(d){return B.bU(A.L,null,new C.h5r(),d,!0,!0,!0,null,!1,!1,x.I)},
i7C(d,e){var w,v=e.toLowerCase()
if(A.a.c5(v,".png"))w="image/png"
else w=A.a.c5(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cK.gcn().aL(d)},
ivT(d,e,f){return B.bU(A.L,null,new C.h5q(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hjP(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hjQ(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fAo(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aU(e,new C.fAp(w))?w:""},
hCv(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hHE(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aiJ(a1==null?"":a1,a0),a3=C.aiJ(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nF(new B.Y(r,new C.fWW(t[p]),q))
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
g=B.C(new B.Y(k,new C.fWX(),v),r)
A.d.b_(g,new C.fWY())
if(g.length===0)continue
f=new C.fWZ(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
isg(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aMD
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.emk
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eml
return null},
hC3(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.h.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.h.cC(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
is0(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.r5
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.d1)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.h.D(m*0.85,10,120)
break
case 1:j=A.h.D(m*1.15,10,120)
if(C.hC3(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hC3(n,i,v,u))if(n.w>10){f=h+1
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
irZ(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aiJ(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a6I[r]
if(q.b===s)w.I(0,q)}}v=C.hjP(e)
u=C.hjQ(e)
p=C.hFP(n,D.a7Y,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fWS(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("kd<ci.E,n>")
o=B.C(new B.kd(w,new C.fWT(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.Us)
return p},
ivG(d,e,f){return B.bU(A.L,null,new C.h4E(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i6Z(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e0()
s.cU(t)
w=D.cPI[s.aw(10)]
v=new C.erB(s)
u=x.N
return new C.erA(w,s.aw(4),J.fn(v.$1$2(D.dhc,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dzo,2+s.aw(2),u),v.$1$2(D.drz,2,u),v.$1$2(D.dCS,4,x.fP),t)},
i8G(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e0()
a1.cU(a5.w+a3*13)
w=new C.fp_(a4)
v=new C.fp1(a4,d)
u=new C.fp0(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.d1){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b0(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b0(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ca(a2,0,w.$8(D.eZ,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a3d(a0,52),"lux_spot",a5.xh(0,"spotlight")))
else A.d.ca(a2,0,w.$8(D.bb,0,0,1,1,0,"lux_back",a5.xh(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ca(a2,1,w.$8(D.bb,0,0,1,1,0,"lux_back2",a5.aHP(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bb,0.022,0.038,0.956,0.924,0,g,a5.xh(0,f),D.dr,150,C.a3d(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bb,0.018,0.032,0.964,0.936,0,g,a5.xh(0,f),D.dr,120,C.a3d(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bb,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dr,260,C.a3d(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bb,0,0,1,1,0,"lux_filigree",a5.xh(0,"filigree"),D.dr,200))
break
default:a2.push(w.$10$anim$delay(D.bb,0.08,0.06,0.84,0.004,C.a3d(a0,208),"lux_rule",a5.aHP(0,"shimmer",r),D.vx,150))
a2.push(w.$10$anim$delay(D.bb,0.08,0.936,0.84,0.004,C.a3d(a0,144),"lux_rule2","",D.JK,220))}l=!A.d.aU(a2,new C.foZ())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xh(0,"crest"),350))
else{o=a1.h4()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xh(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a3d(r,242)
j=a5.xh(0,"orbit")
i=s===D.bb?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r7,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eZ,t-0.007,0.9495,0.014,0.025,C.a3d(r,242),"lux_g2",a5.xh(0,"orbit"),D.r7,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bb,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b0(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bb,0,0,1,1,0,"lux_velvet",a5.xh(0,"velvet")))},
of:function of(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fWU:function fWU(d){this.a=d},
fWV:function fWV(){},
wC:function wC(d,e){this.a=d
this.b=e},
a9A:function a9A(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
atq:function atq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fWN:function fWN(){},
fWQ:function fWQ(){},
fUE:function fUE(){},
fUF:function fUF(){},
fUG:function fUG(d){this.a=d},
fOR:function fOR(){},
fOU:function fOU(d,e,f){this.a=d
this.b=e
this.c=f},
fOT:function fOT(d,e){this.a=d
this.b=e},
fOS:function fOS(d,e){this.a=d
this.b=e},
fOQ:function fOQ(d){this.a=d},
fRh:function fRh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fRf:function fRf(d){this.a=d},
fRg:function fRg(d){this.a=d},
fsH:function fsH(){},
fsI:function fsI(){},
fsJ:function fsJ(){},
h5r:function h5r(){},
a1Y:function a1Y(d){this.a=d},
aK0:function aK0(d,e,f,g,h){var _=this
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
fbE:function fbE(d,e,f){this.a=d
this.b=e
this.c=f},
fbF:function fbF(d,e){this.a=d
this.b=e},
fbC:function fbC(d,e){this.a=d
this.b=e},
fbD:function fbD(d,e){this.a=d
this.b=e},
fbB:function fbB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fbw:function fbw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fbA:function fbA(d,e){this.a=d
this.b=e},
fbv:function fbv(d,e){this.a=d
this.b=e},
fbz:function fbz(d,e){this.a=d
this.b=e},
fbu:function fbu(d,e){this.a=d
this.b=e},
fbx:function fbx(d){this.a=d},
fby:function fby(d,e){this.a=d
this.b=e},
fbk:function fbk(d,e){this.a=d
this.b=e},
fbl:function fbl(d,e){this.a=d
this.b=e},
fbn:function fbn(d){this.a=d},
fbo:function fbo(d){this.a=d},
fbp:function fbp(d){this.a=d},
fbq:function fbq(d){this.a=d},
fbm:function fbm(d,e){this.a=d
this.b=e},
fbr:function fbr(d,e){this.a=d
this.b=e},
fbS:function fbS(d){this.a=d},
fbT:function fbT(d){this.a=d},
fbR:function fbR(d){this.a=d},
fbU:function fbU(d){this.a=d},
fbQ:function fbQ(d){this.a=d},
fbW:function fbW(d){this.a=d},
fbP:function fbP(d,e){this.a=d
this.b=e},
fbX:function fbX(d){this.a=d},
fbO:function fbO(d,e){this.a=d
this.b=e},
fbY:function fbY(d){this.a=d},
fbN:function fbN(d){this.a=d},
fbZ:function fbZ(d){this.a=d},
fbM:function fbM(d,e){this.a=d
this.b=e},
fc_:function fc_(d){this.a=d},
fbL:function fbL(d,e){this.a=d
this.b=e},
fc0:function fc0(d){this.a=d},
fbK:function fbK(d){this.a=d},
fc1:function fc1(d,e){this.a=d
this.b=e},
fbJ:function fbJ(d,e){this.a=d
this.b=e},
fc2:function fc2(d){this.a=d},
fbV:function fbV(d){this.a=d},
fbI:function fbI(d,e){this.a=d
this.b=e},
fbs:function fbs(d,e,f){this.a=d
this.b=e
this.c=f},
fbt:function fbt(d,e,f){this.a=d
this.b=e
this.c=f},
fbH:function fbH(d,e){this.a=d
this.b=e},
fbG:function fbG(d,e){this.a=d
this.b=e},
h5q:function h5q(d,e){this.a=d
this.b=e},
a1X:function a1X(d,e,f){this.c=d
this.d=e
this.a=f},
aK_:function aK_(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
fbd:function fbd(d){this.a=d},
fbe:function fbe(d){this.a=d},
fbf:function fbf(d,e){this.a=d
this.b=e},
fbg:function fbg(d){this.a=d},
fbh:function fbh(d){this.a=d},
fbc:function fbc(d,e){this.a=d
this.b=e},
fbi:function fbi(d,e){this.a=d
this.b=e},
fbj:function fbj(d,e){this.a=d
this.b=e},
fAp:function fAp(d){this.a=d},
b4b:function b4b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGv:function aGv(d,e,f){this.c=d
this.d=e
this.a=f},
bnm:function bnm(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
erD:function erD(d){this.a=d},
erC:function erC(){},
bkQ:function bkQ(d,e){this.b=d
this.a=e},
fWW:function fWW(d){this.a=d},
fWX:function fWX(){},
fWY:function fWY(){},
fWZ:function fWZ(d){this.a=d},
atY:function atY(d,e){this.a=d
this.b=e},
fWS:function fWS(){},
fWT:function fWT(){},
h4E:function h4E(d,e){this.a=d
this.b=e},
a0l:function a0l(d,e,f){this.c=d
this.d=e
this.a=f},
aDZ:function aDZ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
du9:function du9(d){this.a=d},
dua:function dua(d){this.a=d},
dub:function dub(d,e){this.a=d
this.b=e},
due:function due(d){this.a=d},
duf:function duf(d,e){this.a=d
this.b=e},
dud:function dud(d,e){this.a=d
this.b=e},
dug:function dug(d){this.a=d},
duc:function duc(d,e){this.a=d
this.b=e},
bw6:function bw6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
erA:function erA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
erB:function erB(d){this.a=d},
fp_:function fp_(d){this.a=d},
fp1:function fp1(d,e){this.a=d
this.b=e},
fp0:function fp0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foZ:function foZ(){},
aOF:function aOF(){},
hiz(d){var w,v,u
try{w=A.W.aP(0,d,null)
if(x.f.b(w)){v=B.wv(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b47:function b47(d,e,f){this.c=d
this.d=e
this.a=f},
boX:function boX(d,e){this.c=d
this.a=e},
io4(d){return A.d.dL(D.IL,new C.fPY(d),new C.fPZ())},
io5(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b1(t,6)
if(w.length===0)return null
v=new B.Y(D.IL,new C.fQ_(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k3("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lD:function lD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fPY:function fPY(d){this.a=d},
fPZ:function fPZ(){},
fQ_:function fQ_(d){this.a=d},
ni(d,e,f,g,h){return new C.Fz(f,g,d)},
i9W(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fr7(),v),v.k("M.E"))
d.z=w
d.x=""},
dB(d,e){var w=$.Lp
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ca(d.z,0,e)},
dC(d,e,f,g,h,i,j,k,l){return C.ej(A.b6,!1,4279310375,A.aG,"",d,24,A.bo,A.a8,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cd,D.eM,j,k,l)},
hFD(d,e){var w
C.i9W(d)
w=A.d.dL($.bHP(),new C.fNO(e),new C.fNP())
$.Lp=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lp=""}d.z=B.br(d.z,!0,x.U)},
Fz:function Fz(d,e,f){this.a=d
this.b=e
this.e=f},
fr7:function fr7(){},
fWo:function fWo(){},
fWp:function fWp(){},
fWq:function fWq(){},
fWB:function fWB(){},
fWG:function fWG(){},
fWH:function fWH(){},
fWI:function fWI(){},
fWJ:function fWJ(){},
fWK:function fWK(){},
fWL:function fWL(){},
fWM:function fWM(){},
fWr:function fWr(){},
fWs:function fWs(){},
fWt:function fWt(){},
fWu:function fWu(){},
fWv:function fWv(){},
fWw:function fWw(){},
fWx:function fWx(){},
fWy:function fWy(){},
fWz:function fWz(){},
fWA:function fWA(){},
fWC:function fWC(){},
fWD:function fWD(){},
fWE:function fWE(){},
fWF:function fWF(){},
fNO:function fNO(d){this.a=d},
fNP:function fNP(){},
je(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ej(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bb,4280172719,2,m,n,0,"",o,D.d1,p,q,r)},
DK(d,e,f,g,h,i,j,k,l){return C.ej(A.b6,!1,4279310375,A.aG,"",d,24,A.bo,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cd,D.eM,j,k,l)},
bGx(){var w=new B.V(Date.now(),0,!1)
return A.iX[B.bM(w)-1]+" "+B.bY(w)+", "+B.bD(w)},
eA:function eA(d,e,f){this.a=d
this.b=e
this.c=f},
bDP(d){return new B.ja((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
ifg(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aoR(A.cJ.aL(A.d.gal(d.split(","))))
return w}catch(v){return null}},
ifk(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fzI(),x.dv).aN(0,"\n")},
ifj(d){switch(d.a){case 2:return A.o1
case 1:case 5:return A.fw_
default:return A.VR}},
ifd(d){switch(d.a){case 2:return A.w3
case 1:case 5:return A.XV
default:return A.aeE}},
ifh(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bDP(u),q=(s&255)===0?v:C.bDP(d.ch),p=A.h.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.o_(q,p,A.lg)
w=new B.q7(t,t,t,t)}switch(d.ax.a){case 1:return B.lW(v,v,v,new B.l1(r,w,v,A.afZ,v),v,v,v,v)
case 4:return u?new B.h0(v,v,v):B.xJ(B.lW(v,v,q,v,p+0.4,v,v,v))
default:return B.lW(v,v,v,new B.l1(r,w,B.w4(4),A.i6,v),v,v,v,v)}},
iff(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eM?0.4:12,g=A.h.D(d.e*e,h,e),f=A.h.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.ifd(d.as)
v=A.h.D(d.w*(e/960),3,96)
u=C.ifk(d)
t=C.bDP(d.Q)
s=d.x.a>=700?A.eD:A.wN
r=d.y===A.cL?A.zh:A.apo
q=d.z
p=new B.DX(w,l,l,B.fe(u,l,l,l,B.hj(l,t,1===q.a?A.aWf:A.aWe,l,l,l,l,l,l,A.dE,l,l,v,r,s,l,!0,l,l,l,l),C.ifj(d.as)))
break
case 1:case 4:o=C.ifg(d.at)
if(i===D.kj)n=d.c===0&&d.d===0&&d.e===1&&d.f===1||A.a.c5(d.db,"_fill")
else n=!1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xJ(B.fe(w,l,l,l,B.hj(l,A.tN,l,l,l,l,l,l,l,A.dE,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IR(o,n?A.afV:A.Yl,l,l)
break
case 3:w=new B.o_(A.K5,1,A.lg)
u=B.w4(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lW(A.w3,B.fe(t,l,l,l,B.hj(l,D.eAO,l,l,l,l,l,l,l,A.dE,l,l,11,l,A.eD,l,!0,l,l,l,l),A.o1),l,new B.l1(E.aO4,new B.q7(w,w,w,w),u,A.i6,l),l,l,l,l)
break
case 2:p=C.ifh(d,e)
break
case 5:p=C.ife(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hwE(-w,p)
w=i===D.d1
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.auN(m/255,p)}if(w)return new F.wH(k,l,j,l,new B.TO(new B.l0(g,g,f,1/0),p))
if(i===D.lw){i=new B.o_(A.K5,1,A.lg)
i=B.lW(A.w3,p,l,new B.l1(A.pR,new B.q7(i,i,i,i),B.w4(4),A.i6,l),l,l,D.bJn,l)}else i=p
return new F.wH(k,l,j,l,new B.h0(g,f,i))},
ifi(d,e,f,g){var w,v=null,u=C.bDP(d.e),t=d.f
t=B.a([F.hvf(t!=null?B.lW(v,v,v,new B.l1(v,v,v,A.i6,new B.aZB(E.XX,A.aeB,B.a([u,C.bDP(t)],x.cR),v)),v,v,v,v):B.lW(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.u(t,new B.N(w,new C.fzH(f,g),B.U(w).k("N<1,fm>")))
return F.cBm(t)},
hjS(d){var w=0,v=B.j(x.F),u,t,s,r,q,p,o,n
var $async$hjS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5I(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.Y4(A.xr,A.K2,D.bKy,null,null,null,!1,null)
o=new B.Cx(o,new C.fX4(607,787,p,d))
o.Nt(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hjS,v)},
ife(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hiz(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.galz()
if(h==null)h=A.aDe
j=B.u5(4279308564)
w=B.w4(18)
v=new B.o_(B.u5(4287531653),3,A.lg)
u=i.length===0?"My links":i
u=B.a([B.xJ(B.fe(u,m,m,m,B.hj(m,A.pR,m,m,m,m,m,m,m,A.dE,m,m,12,m,A.eD,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xJ(B.fe(A.a.i(l.c),m,m,m,D.fDM,m)))
u.push(new B.h0(m,8,m))
for(t=B.cY(h,0,B.dD(8,"count",x.r),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gJ(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u5(4280690220)
o=new B.aaV(8,8)
n=A.a.i(r.b)
u.push(new B.og(D.bDn,new C.az7(new C.ajX(q),B.lW(m,B.fe(n.length===0?A.a.i(r.c):n,m,m,m,D.fGc,A.o1),m,new B.l1(p,m,new B.akr(o,o,o,o),A.i6,m),m,m,D.bJQ,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xJ(B.fe(k,m,m,m,D.fFq,m))
u.push(new C.az7(C.hOZ(k),t))}return B.lW(m,B.zv(u,A.O5,A.lW),m,new B.l1(j,new B.q7(v,v,v,v),w,A.i6,m),m,m,D.bEc,m)},
fzI:function fzI(){},
fzH:function fzH(d,e){this.a=d
this.b=e},
fX4:function fX4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aix(d){var w,v
for(w=0;w<32;++w){v=D.IC[w]
if(v.a===d)return v}return null},
hzi(d){var w,v,u=A.a.co(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cJ.aL(A.a.b1(d,u+1))
return w}catch(v){return null}},
d_(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hJ8(d,e){return B.a6(d,!1).ce(B.ef(new C.h2Z(e),!0,null,x.fB))},
hJ7(d,e){return B.bU(A.L,null,new C.h2Y(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jk:function jk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fp:function Fp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ov:function Ov(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmI:function bmI(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
e52:function e52(d){this.a=d},
e51:function e51(d,e,f){this.a=d
this.b=e
this.c=f},
e50:function e50(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
buC:function buC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
faq:function faq(d,e){this.a=d
this.b=e},
bhD:function bhD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b21:function b21(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgk:function cgk(){},
cgl:function cgl(d){this.a=d},
cgm:function cgm(d,e,f){this.a=d
this.b=e
this.c=f},
cgn:function cgn(d,e,f){this.a=d
this.b=e
this.c=f},
h2Z:function h2Z(d){this.a=d},
a_T:function a_T(d,e){this.c=d
this.a=e},
aCk:function aCk(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
djp:function djp(d,e,f){this.a=d
this.b=e
this.c=f},
dju:function dju(d){this.a=d},
djv:function djv(d){this.a=d},
djt:function djt(d){this.a=d},
djw:function djw(d){this.a=d},
djs:function djs(d,e){this.a=d
this.b=e},
djx:function djx(d){this.a=d},
djr:function djr(d){this.a=d},
djy:function djy(d){this.a=d},
djq:function djq(d,e){this.a=d
this.b=e},
djz:function djz(d,e){this.a=d
this.b=e},
h2Y:function h2Y(d){this.a=d},
h2X:function h2X(d){this.a=d},
h2W:function h2W(d,e,f){this.a=d
this.b=e
this.c=f},
h2V:function h2V(d,e){this.a=d
this.b=e},
aO9:function aO9(){},
ivS(d){return B.bU(A.L,null,new C.h5p(),d,!0,!0,!0,null,!1,!1,x.N)},
h5p:function h5p(){},
a0d:function a0d(d){this.a=d},
bja:function bja(d){this.d=d
this.c=this.a=null},
dqc:function dqc(d){this.a=d},
dqd:function dqd(d,e){this.a=d
this.b=e},
dqe:function dqe(d){this.a=d},
ibw(d){var w,v=d.split("@")
if(v.length>1){w=B.cb(v[1],16)
if(w!=null)return B.b1(w)}return A.wv},
iq4(d){var w=7000
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
iq3(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.ibw(d)
switch(q){case"shimmer":return B.ok(A.Mk,g,new C.fTx(p,A.h.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.biu(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e4(A.z,B.d3(F.bYk(g,new B.Ey(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.r(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bib(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.h.D(0.55+s*0.45,0,1)
return B.d3(B.eK(A.z,e*0.5,B.e4(A.z,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fE(e)
u.n5(Math.sin(e)*0.3)
return B.dP(B.fA(A.z,g,r,u,!0),new B.r(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.dt(!0,B.b5(r,r,r,new C.bri(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.dt(!0,B.b5(r,r,r,new C.bd1(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.dt(!0,B.b5(r,r,r,new C.bcF(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.byt(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bvr(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.buy(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bhw(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.z,r,A.ad,A.f,B.a([B.bS(0,new B.dt(!0,B.e4(A.z,new B.bN(new B.o(r,r,r,r,r,new B.bT(A.z,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bk,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eK(A.z,s*0.06,B.e4(A.z,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fTx:function fTx(d,e){this.a=d
this.b=e},
biu:function biu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bib:function bib(d,e,f){this.b=d
this.c=e
this.a=f},
bri:function bri(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bd1:function bd1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcF:function bcF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
byt:function byt(d,e,f){this.b=d
this.c=e
this.a=f},
bvr:function bvr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buy:function buy(d,e,f){this.b=d
this.c=e
this.a=f},
bhw:function bhw(d,e,f){this.b=d
this.d=e
this.a=f},
dj6:function dj6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yh:function yh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fTA(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.lw},
iq9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fTB())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aTg(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
iq8(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cX(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cX(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.h.D(s,0.06,u)}else{d.w=A.h.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.h.D(r*(d.w*0.001)+0.028,0.06,u)},
aib(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aib=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fLN(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dW,null,new C.fLO(e),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$aib)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hkB(d),$async$aib)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.HG(d,"Search states\u2026","",A.kg,"Choose state"),$async$aib)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hjp(s)
if(p==null)p=A.d.gH(D.Ti)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.bG5(p.d)
k=x.u
j=B.a([C.ej(A.b6,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bo,A.a8,"",1,C.cC(),l,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kj,1,0,0)],k)
i=p.f
h=x.U
k=B.C(B.a([C.Dv(i,0.016,D.lx,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dv(0,0.058,D.eZ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dv(0,0.058,D.eZ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.LD("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.LD("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.u(k,C.hfW(0.2,0.154,0.6,4291404327,i))
A.d.u(k,C.bDh("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.u(k,C.a2Q("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.u(k,C.a2Q("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.u(k,C.a2Q("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.u(k,C.a2Q("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.u(k,C.bDh("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dv(m,0.082,D.bb,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.ej(A.b6,!1,i,A.aG,"marriage_field_utangulizi:"+A.h.ad(0.78,3),4280640491,9.5,A.bo,A.cD,"",0.074,g,null,"","",0,!1,"",0,D.bb,4280172719,2,y.O,0,0,"",D.cd,D.d1,0.78,0.11,0.388))
A.d.u(k,C.hfW(0.22,0.47,0.56,4291404327,i))
A.d.u(k,C.bDh("MASHAHIDI",0.49,0.26,0.48,i))
A.d.u(k,C.hBt("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.u(k,C.hBt("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.u(k,C.a2Q("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.u(k,C.a2Q("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.u(k,C.bDg("witness_mume_1",0.11,0.596,0.37,i))
A.d.u(k,C.bDg("witness_mke_1",0.52,0.596,0.37,i))
A.d.u(k,C.bDh("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.LD("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.LD("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.u(k,C.bDg("mchumba_mume",0.11,0.7,0.37,i))
A.d.u(k,C.bDg("mchumba_mke",0.52,0.7,0.37,i))
A.d.u(k,C.bDh("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.u(k,C.a2Q("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.u(k,C.bDg("witness_mume_2",0.38,0.784,0.26,i))
A.d.u(k,C.a2Q("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hfW(0.22,0.83,0.56,4291404327,i),h)
h.push(C.LD("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.LD("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.u(k,h)
A.d.u(j,k)
a0.$1(C.Cs(null,null,null,null,D.r5,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,null,B.a([C.t4(m,null,0,0,j,n,D.r6,"","","Hati ya Ndoa",D.dr)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aib,v)},
fTB:function fTB(){},
fLN:function fLN(){},
fLO:function fLO(d){this.a=d},
fLL:function fLL(d){this.a=d},
fLM:function fLM(d){this.a=d},
ieE(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
ieD(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ne
case"lineThrough":return A.xC
default:return A.aG}},
ej(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.en(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hDG(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.T1[w]
if(v.b===u)return v}return D.dr},
iaU(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d7v[w]
if(v.b===u)return v}return D.d1},
ihu(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dAb[w]
if(v.b===u)return v}return D.bb},
t4(d,e,f,g,h,i,j,k,l,m,n){return new C.ll(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hu_(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.icV(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.h.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.h.M(s)
r=C.hDG(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.h.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.h.M(o)
if(o==null)o=0
n=x.d.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cF(n,new C.clZ(),n.$ti.k("M.E"),x.U)
n=B.C(n,B.a3(n).k("M.E"))}return C.t4(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
icV(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.auO[w]
if(v.b===u)return v}return D.n9},
Cs(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4,a5){var w=a5==null?new B.V(Date.now(),0,!1):a5
return new C.hY(p,t,a2,h,i,w,a1==null?B.a([C.t4(4294967295,null,0,0,null,C.cC(),D.r6,"","","",D.dr)],x.g):a1,k,s,a3,a4,d,a0,v,q,j,r,f,g,e,m,o,n,l,u)},
Xr(a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="deckKind",a6=a7.h(0,"id")
a6=J.k(a6==null?"":a6)
w=a7.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a7.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i8X(a7.h(0,"aspectRatio"))
t=B.aJ(a7.h(0,"autoAdvanceSeconds"))
t=t==null?a4:A.o.D(A.h.M(t),1,120)
if(t==null)t=5
s=a7.h(0,"updatedAt")
s=B.bk(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a7.h(0,a5)
r=r==null?a4:J.k(r)
q=a7.h(0,"marriageState")
q=q==null?a4:J.k(q)
p=a7.h(0,"transferClaimCode")
p=p==null?a4:J.k(p)
if(J.z(a7.h(0,"transferReceived"),!0)){o=a7.h(0,a5)
o=C.kn(o==null?a4:J.k(o))}else o=!1
n=a7.h(0,a5)
if(C.kn(n==null?a4:J.k(n))){n=a7.h(0,"adminShareEditUntil")
n=n==null?a4:J.k(n)}else n=a4
m=B.aJ(a7.h(0,"signatureStrokeWidth"))
if(m==null)m=a4
l=B.aJ(a7.h(0,"signatureInkColor"))
l=l==null?a4:A.h.M(l)
k=a7.h(0,"kiapoSignedAt")
k=k==null?a4:J.k(k)
j=J.z(a7.h(0,"cinematic"),!0)
i=J.z(a7.h(0,"loop"),!0)
h=a7.h(0,"aiOutlineJson")
h=h==null?a4:J.k(h)
g=x.d
f=g.a(a7.h(0,"aiSlideIds"))
if(f==null)f=a4
else{f=J.b9(f,new C.clM(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a7.h(0,"aiExtras"))
if(e==null)e=a4
else{e=J.b9(e,new C.clN(),x.N)
e=B.C(e,e.$ti.k("ak.E"))}d=a7.h(0,"finaleStyle")
d=d==null?a4:J.k(d)
a0=a7.h(0,"finaleTitle")
a0=a0==null?a4:J.k(a0)
a1=a7.h(0,"finaleSubtitle")
a1=a1==null?a4:J.k(a1)
a2=a7.h(0,"finaleLogo")
a2=a2==null?a4:J.k(a2)
a3=B.aJ(a7.h(0,"paperAspect"))
if(a3==null)a3=a4
g=g.a(a7.h(0,"slides"))
if(g==null)g=a4
else{g=J.de(g,x.f)
g=B.cF(g,new C.clO(),g.$ti.k("M.E"),x.o)
g=B.C(g,B.a3(g).k("M.E"))}return C.Cs(n,e,h,f,u,t,j,r,a2,d,a1,a0,a6,k,i,q,w,a3,l,m,g==null?B.a([C.t4(4294967295,a4,0,0,a4,C.cC(),D.r6,"","","",D.dr)],x.g):g,v,p,o,s)},
kn(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i8X(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dB7[w]
if(v.b===u)return v}return D.Et},
cC(){var w=Date.now(),v=$.hG
$.hG=v+1
return""+1000*w+"_"+v},
cmf(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.Eu){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.ej(A.K,!1,f.d.l(),A.aG,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bb,m,2,o,0,0,"",D.cd,D.d1,0.84,0.08,0.3)
u=C.cC()
A.d.u(w,B.a([v,C.ej(A.K,!1,f.e.l(),A.aG,"",n,20,A.bo,A.cD,"",0.12,u,p,"","",0,!1,"",0,D.bb,m,2,"Click to add subtitle",0,0,"",D.cd,D.d1,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.ej(A.b6,!1,f.d.l(),A.aG,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bb,m,2,o,0,0,"",D.cd,D.d1,0.88,0.06,0.06)
u=C.cC()
A.d.u(w,B.a([v,C.ej(A.b6,!0,f.e.l(),A.aG,"",n,20,A.bo,A.cD,"",0.68,u,p,"","",0,!1,"",0,D.bb,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cd,D.d1,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.ej(A.b6,!1,f.d.l(),A.aG,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bb,m,2,"Two Column Slide",0,0,"",D.cd,D.d1,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.ej(A.b6,!0,t.l(),A.aG,"",n,18,A.bo,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bb,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cd,D.d1,0.42,0.06,0.22)
s=C.cC()
A.d.u(w,B.a([v,u,C.ej(A.b6,!0,t.l(),A.aG,"",n,18,A.bo,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bb,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cd,D.d1,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.I(d.z,C.ej(A.K,!1,4294967295,A.aG,"",n,42,A.bo,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.bb,m,2,"Section Header",0,0,"",D.cd,D.d1,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.ej(A.b6,!1,f.d.l(),A.aG,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bb,m,2,"Compare",0,0,"",D.cd,D.d1,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.ej(A.b6,!1,l,A.aG,"",t.j(0.12).l(),24,A.bo,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bb,t.l(),2,"",0,0,"",D.cd,D.eM,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.ej(A.b6,!1,r.l(),A.aG,"",n,20,A.bo,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bb,m,2,"Option A",0,0,"",D.cd,D.d1,0.38,0.08,0.26)
q=C.cC()
t=C.ej(A.b6,!1,l,A.aG,"",t.j(0.06).l(),24,A.bo,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bb,t.j(0.5).l(),2,"",0,0,"",D.cd,D.eM,0.42,0.52,0.22)
q=C.cC()
A.d.u(w,B.a([v,u,s,t,C.ej(A.b6,!1,r.l(),A.aG,"",n,20,A.bo,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bb,m,2,"Option B",0,0,"",D.cd,D.d1,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.ej(A.K,!1,f.d.l(),A.aG,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bb,m,2,"TERM / QUESTION",0,0,"",D.cd,D.d1,0.8,0.1,0.12)
u=C.cC()
A.d.u(w,B.a([v,C.ej(A.K,!1,f.e.l(),A.aG,"",n,22,A.bo,A.cD,"",0.35,u,p,"","",0,!1,"",0,D.bb,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cd,D.d1,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.ej(A.b6,!1,f.d.l(),A.aG,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bb,m,2,"Quiz Question",0,0,"",D.cd,D.d1,0.88,0.06,0.06)
u=C.cC()
A.d.u(w,B.a([v,C.ej(A.b6,!1,f.e.l(),A.aG,"",n,20,A.bo,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bb,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cd,D.d1,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.ej(A.b6,!1,f.d.l(),A.aG,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bb,m,2,"Worksheet / Assignment",0,0,"",D.cd,D.d1,0.88,0.06,0.04)
u=C.cC()
A.d.u(w,B.a([v,C.ej(A.b6,!1,f.e.l(),A.aG,"",n,18,A.bo,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bb,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cd,D.d1,0.88,0.06,0.16)],x.u))
break}},
i0n(d){return A.d.dL(D.a6j,new C.cmg(d),new C.cmh())},
i0k(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.E)
try{w=A.W.aP(0,d,null)
if(!x.j.b(w)){t=B.a([],x.E)
return t}v=B.a([],x.E)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gP(t)
if(!q.b(u))continue
try{J.c5(v,C.Xr(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.E)
return t}},
hc5(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cmb(t)
for(w=J.aT(d);w.C();)s.$1(w.gP(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.b_(u,new C.cma())
return u},
hu2(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cm6()
if(u!==w)return u>=w?d:e
return v.$1(d).cb(v.$1(e))?d:e},
atr(d){return C.i0i(d)},
i0i(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$atr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cm9()
k=x.E
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a43(m),$async$atr)
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
return B.b(B.aA(),$async$atr)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aV(J.u(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hu1.h(0,m))
n=C.hc5(C.hc5(j,r),o)
if(n.length===0){u=C.hu2(C.hu2(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$atr,v)},
cm5(d){return C.i0h(d)},
i0h(d){var w=0,v=B.j(x.b),u,t=2,s=[],r,q,p,o
var $async$cm5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cm5)
case 7:r=f
q=r.rA("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jH(q,B.U(q).c)
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
return B.i($async$cm5,v)},
b4d(d,e){return C.i0j(d,e)},
i0j(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b4d=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b4d)
case 6:s=g
q=s.rA("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.I(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mp(r,J.ad(r)-500):r
w=7
return B.b(s.aC("StringList","ngmy_slides_deleted_"+p,o),$async$b4d)
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
return B.i($async$b4d,v)},
Xs(d,e){return C.i0l(d,e)},
i0l(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xs=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hu0.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.atr(a3),$async$Xs)
case 5:p=a6
case 4:w=6
return B.b(C.cm5(a3),$async$Xs)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gP(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbt())k=f===g.gbt()&&k.b>g.gcG()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.cmc(o),l),l.k("M.E"))
A.d.b_(e,new C.cmd())
$.hu0.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.cme(),n),n.k("ak.E"))
r=A.W.av(n,null)
$.hu1.n(0,a0,r)
t=8
w=11
return B.b(B.aiY(a0,r),$async$Xs)
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
return B.b(B.aA(),$async$Xs)
case 16:q=a6
w=17
return B.b(q.aC("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xs)
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
return B.i($async$Xs,v)},
JL:function JL(d,e){this.a=d
this.b=e},
atp:function atp(d,e){this.a=d
this.b=e},
vl:function vl(d,e){this.a=d
this.b=e},
mZ:function mZ(d,e){this.a=d
this.b=e},
hM:function hM(d,e){this.a=d
this.b=e},
en:function en(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ll:function ll(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cm_:function cm_(){},
cm0:function cm0(){},
clZ:function clZ(){},
hY:function hY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4){var _=this
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
_.fx=a4},
clP:function clP(){},
clQ:function clQ(){},
clM:function clM(){},
clN:function clN(){},
clO:function clO(){},
k3:function k3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cmg:function cmg(d){this.a=d},
cmh:function cmh(){},
cmb:function cmb(d){this.a=d},
cma:function cma(){},
cm6:function cm6(){},
cm7:function cm7(){},
cm8:function cm8(){},
cm9:function cm9(){},
cmc:function cmc(d){this.a=d},
cmd:function cmd(){},
cme:function cme(){},
iqm(d,e){var w=x.N,v=B.T(w,x.U)
w=new C.fUd(e,v,d,B.aR(w))
w.$1(new C.fU9())
w.$1(new C.fUa())
w.$1(new C.fUb())
w.$1(new C.fUc())
return v},
fUd:function fUd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fU9:function fU9(){},
fUa:function fUa(){},
fUb:function fUb(){},
fUc:function fUc(){},
b4a:function b4a(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clV:function clV(d){this.a=d},
clU:function clU(){},
clW:function clW(){},
clX:function clX(d,e){this.a=d
this.b=e},
clY:function clY(d){this.a=d},
aqq:function aqq(d,e){this.c=d
this.a=e},
bmr:function bmr(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
dRL:function dRL(){},
aNT:function aNT(){},
cm2(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cm2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.T(D.ftb)
u=!1
w=1
break}u=B.lm(!1,d,t,!1,null,A.a9k,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cm2,v)},
i0f(d){var w=A.d.bk(D.IL,new C.cm3(d))
if(w<0)return!0
return w>=4},
i0g(d){var w=A.d.bk($.bHP(),new C.cm4(d))
if(w<0)return!0
return w>=5},
cm3:function cm3(d){this.a=d},
cm4:function cm4(d){this.a=d},
isa(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xw()
$.q4().pl(t,new C.fXb(s),!0)
u=B.a([B.BZ(v,A.pS,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fEe,v,v,v),A.f,v,v,new B.o(A.b5,v,v,w,v,v,A.n),v,v,v,v,A.n3,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b1,A.t,u,v)},
fXb:function fXb(d){this.a=d},
irM(){return C.hjL()},
iou(){return C.bFH()},
iqF(){return C.hjC()},
aSg(d,e,f){var w=0,v=B.j(x.H),u
var $async$aSg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fWh(d,f),$async$aSg)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aSg,v)},
fWh(d,e){var w=0,v=B.j(x.H),u
var $async$fWh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bDQ
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.L,null,new C.fWi(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fWh)
case 2:return B.h(null,v)}})
return B.i($async$fWh,v)},
fWi:function fWi(d,e){this.a=d
this.b=e},
af0:function af0(d,e,f){this.c=d
this.d=e
this.a=f},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDY:function eDY(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
afh:function afh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b49(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b48(g,m,f,d,e,h,l,k,j,o,i,null)},
hH0(d){return B.cm(new C.fU8(d))},
hjN(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
irU(d){if(d===D.cd)return"None"
return C.hjN(d)},
bEm(d,e,f,g){return C.ihB(d,e,f,g)},
ihB(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bEm=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hgf&&t.q4())t.ek()
$.hgf=!0
s.a=null
w=3
return B.b(B.hR(A.bq,!0,"Animation preview",d,new C.fCt(s,e,g,f),null,A.eH,!0,x.H),$async$bEm)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hgf=!1
case 1:return B.h(u,v)}})
return B.i($async$bEm,v)},
h6f(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h6f=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.h.D(B.aE(d,A.c_,x.w).w.a.a*0.88,280,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hjN(f)+" Slide transition preview"
s=s?Aj.H6:A.qB
w=3
return B.b(C.bEm(d,s,new B.a5(t,t*0.56,B.bv(B.l(14),new C.aLp(f,null),A.aq),null),r),$async$h6f)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h6f,v)},
hGf(d,e,f){var w,v,u=null,t=A.ck.az(0,A.h.D(e,0,1))
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
bHh(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bHh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.h.D(B.aE(d,A.c_,x.w).w.a.a*0.88,300,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hjN(f)+" Element animation preview"
s=s?Aj.H6:A.qB
w=3
return B.b(C.bEm(d,s,new B.a5(t,t*0.62,B.bv(B.l(14),new C.aC_(f,null),A.aq),null),r),$async$bHh)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bHh,v)},
irT(d){var w,v,u,t,s=$.ahF.W(0,d)
if(s!=null){$.ahF.n(0,d,s)
return s}w=A.cJ.aL(A.a.b1(d,A.a.co(d,",")+1))
$.ahF.n(0,d,w)
v=$.hh9=$.hh9+w.length
u=B.a3($.ahF).k("cr<1>")
for(;;){if(!(v>41943040&&$.ahF.a>1))break
t=new B.cr($.ahF,u).gae(0)
if(!t.C())B.bj(B.fj())
v-=$.ahF.W(0,t.gP(0)).length
$.hh9=v}return w},
irt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l_(0,d),j=B.C(k,B.a3(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aA(d,r,o)
m=f.$1(e)
v.push(new B.et(n,l,l,A.cN,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TO(s,A.u))
v.push(new B.et(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TO(t,A.u))
v.push(new B.et(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TO(u,A.cD))
v.push(new B.et(n,l,l,A.cN,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b1(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a42(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.jA(e))
return m
case"rounded":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
w=e.gdk()*0.18
m.E(new B.jg(B.by(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.aZ(e.gbE().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bx())
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
v.ab()}}v.E(new B.bx())
return v
case"diamond":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.aZ(e.gbE().a,e.b))
m.E(new B.aq(e.c,e.gbE().b))
m.E(new B.aq(e.gbE().a,e.d))
m.E(new B.aq(e.a,e.gbE().b))
m.E(new B.bx())
return m
case"arch":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.beb(new B.r(t,p),new B.aP(s,s))
m.E(new B.aq(t,u))
m.E(new B.bx())
return m
default:m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.oE(e))
return m}},
fRw(d,e,f){return B.cm(new C.fRx(D.flf.q(0,d),d,f,e))},
b48:function b48(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
clT:function clT(d){this.a=d},
clS:function clS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clR:function clR(){},
b45:function b45(d,e){this.b=d
this.a=e},
fU8:function fU8(d){this.a=d},
fU7:function fU7(d,e){this.a=d
this.b=e},
fCt:function fCt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCr:function fCr(d){this.a=d},
fCs:function fCs(d,e){this.a=d
this.b=e},
aLp:function aLp(d,e){this.c=d
this.a=e},
bxY:function bxY(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fj0:function fj0(d,e,f){this.a=d
this.b=e
this.c=f},
aM6:function aM6(d,e){this.b=d
this.a=e},
Wy:function Wy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmE:function bmE(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e2M:function e2M(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2K:function e2K(d){this.a=d},
Fy:function Fy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clL:function clL(d){this.a=d},
clK:function clK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aC_:function aC_(d,e){this.c=d
this.a=e},
bgX:function bgX(){this.d=0
this.c=this.a=null},
dgj:function dgj(d){this.a=d},
dgi:function dgi(d){this.a=d},
a9i:function a9i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnk:function bnk(d,e){var _=this
_.d=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
erj:function erj(d,e,f){this.a=d
this.b=e
this.c=f},
b24:function b24(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bi9:function bi9(d,e,f){this.b=d
this.c=e
this.a=f},
btr:function btr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f7V:function f7V(){},
fRx:function fRx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
buv:function buv(d,e,f){this.b=d
this.c=e
this.a=f},
aO8:function aO8(){},
aOD:function aOD(){},
aPX:function aPX(){},
fV9(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fV9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xS.cq().MS(D.dxZ,A.uT,!0),$async$fV9)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fn(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.irn(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fV9,v)},
irn(d,e){var w,v=d.toLowerCase()
if(A.a.c5(v,".pdf"))return new C.a9B(d,new B.a1A(A.cK.gcn().aL(e),"application/pdf"),"")
if(A.a.c5(v,".docx")){w=C.ijh(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a9B(d,null,w.length>6e4?A.a.aA(w,0,6e4):w)}w=A.cb.LC(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a9B(d,null,w.length>6e4?A.a.aA(w,0,6e4):w)},
ijh(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cHM().cRA(B.rO(d,A.iv,o,o),o,o,!1).cTw(0,"word/document.xml")
if(n==null)return""
w=n.d0H()
v=A.cb.LC(0,w==null?$.hJF():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l_(0,r)
p=A.a.i(B.cF(q,new C.fFA(),B.a3(q).k("M.E"),t).hg(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9B:function a9B(d,e,f){this.a=d
this.b=e
this.c=f},
fFA:function fFA(){},
i0m(d,e,f,g,h,i,j,k,l){return new C.P0(l,e,d,g,f,i,h,j,k,null)},
P0:function P0(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGV:function aGV(d,e,f,g,h,i,j,k,l){var _=this
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
eKe:function eKe(d){this.a=d},
eKc:function eKc(){},
eKd:function eKd(d){this.a=d},
eGC:function eGC(){},
eGD:function eGD(){},
eGE:function eGE(d,e){this.a=d
this.b=e},
eIc:function eIc(d){this.a=d},
eI0:function eI0(){},
eI1:function eI1(){},
eG_:function eG_(){},
eJk:function eJk(d){this.a=d},
eKa:function eKa(d,e){this.a=d
this.b=e},
eIa:function eIa(d,e){this.a=d
this.b=e},
eJY:function eJY(d){this.a=d},
eJZ:function eJZ(){},
eK_:function eK_(){},
eK0:function eK0(d){this.a=d},
eK1:function eK1(){},
eFm:function eFm(d){this.a=d},
eKb:function eKb(){},
eHj:function eHj(d,e){this.a=d
this.b=e},
eFk:function eFk(d){this.a=d},
eFl:function eFl(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d,e,f){this.a=d
this.b=e
this.c=f},
eHI:function eHI(d){this.a=d},
eHi:function eHi(){},
eHh:function eHh(d){this.a=d},
eHf:function eHf(){},
eHe:function eHe(d){this.a=d},
eHg:function eHg(){},
eGy:function eGy(d){this.a=d},
eGz:function eGz(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHl:function eHl(d){this.a=d},
eHm:function eHm(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHq:function eHq(d,e){this.a=d
this.b=e},
eFo:function eFo(){},
eFp:function eFp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHB:function eHB(){},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHz:function eHz(d,e,f){this.a=d
this.b=e
this.c=f},
eHA:function eHA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHt:function eHt(d,e,f){this.a=d
this.b=e
this.c=f},
eHu:function eHu(d,e,f){this.a=d
this.b=e
this.c=f},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHx:function eHx(d,e){this.a=d
this.b=e},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHD:function eHD(d){this.a=d},
eHW:function eHW(){},
eHX:function eHX(){},
eHY:function eHY(){},
eHZ:function eHZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHT:function eHT(d){this.a=d},
eHV:function eHV(){},
eHU:function eHU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eHR:function eHR(d,e,f){this.a=d
this.b=e
this.c=f},
eHS:function eHS(d,e){this.a=d
this.b=e},
eI_:function eI_(){},
eHr:function eHr(d,e){this.a=d
this.b=e},
eFF:function eFF(){},
eFG:function eFG(d,e,f){this.a=d
this.b=e
this.c=f},
eFH:function eFH(d){this.a=d},
eFI:function eFI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFE:function eFE(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI3:function eI3(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI6:function eI6(d,e){this.a=d
this.b=e},
eEh:function eEh(d,e){this.a=d
this.b=e},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFB:function eFB(d){this.a=d},
eIe:function eIe(d,e,f){this.a=d
this.b=e
this.c=f},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFw:function eFw(d){this.a=d},
eId:function eId(d,e,f){this.a=d
this.b=e
this.c=f},
eFn:function eFn(d){this.a=d},
eG0:function eG0(){},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJX:function eJX(d,e,f){this.a=d
this.b=e
this.c=f},
eJl:function eJl(d,e,f){this.a=d
this.b=e
this.c=f},
eEi:function eEi(d){this.a=d},
eEf:function eEf(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e){this.a=d
this.b=e},
eE2:function eE2(d){this.a=d},
eE1:function eE1(d,e){this.a=d
this.b=e},
eE3:function eE3(d,e){this.a=d
this.b=e},
eFz:function eFz(d){this.a=d},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFy:function eFy(d){this.a=d},
eEK:function eEK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d){this.a=d},
eEN:function eEN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEO:function eEO(d){this.a=d},
eEM:function eEM(){},
eEJ:function eEJ(d,e,f){this.a=d
this.b=e
this.c=f},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eK4:function eK4(d){this.a=d},
eK5:function eK5(d,e){this.a=d
this.b=e},
eK6:function eK6(d){this.a=d},
eK7:function eK7(d,e,f){this.a=d
this.b=e
this.c=f},
eK3:function eK3(d){this.a=d},
eJB:function eJB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJA:function eJA(d,e,f){this.a=d
this.b=e
this.c=f},
eJz:function eJz(){},
eJy:function eJy(d,e,f){this.a=d
this.b=e
this.c=f},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJu:function eJu(d,e,f){this.a=d
this.b=e
this.c=f},
eJs:function eJs(d){this.a=d},
eJt:function eJt(d){this.a=d},
eJw:function eJw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eJv:function eJv(d){this.a=d},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGt:function eGt(d,e){this.a=d
this.b=e},
eJm:function eJm(){},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJT:function eJT(d){this.a=d},
eJU:function eJU(d){this.a=d},
eEa:function eEa(d,e){this.a=d
this.b=e},
eE8:function eE8(d){this.a=d},
eE9:function eE9(d){this.a=d},
eEb:function eEb(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e,f){this.a=d
this.b=e
this.c=f},
eEg:function eEg(d,e){this.a=d
this.b=e},
eE7:function eE7(d,e,f){this.a=d
this.b=e
this.c=f},
eE6:function eE6(d){this.a=d},
eIb:function eIb(d,e,f){this.a=d
this.b=e
this.c=f},
eK2:function eK2(d,e,f){this.a=d
this.b=e
this.c=f},
eGx:function eGx(d,e,f){this.a=d
this.b=e
this.c=f},
eGw:function eGw(){},
eET:function eET(d,e,f){this.a=d
this.b=e
this.c=f},
eEU:function eEU(d){this.a=d},
eE4:function eE4(d,e){this.a=d
this.b=e},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e){this.a=d
this.b=e},
eEm:function eEm(d){this.a=d},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEk:function eEk(d){this.a=d},
eEC:function eEC(d){this.a=d},
eED:function eED(d){this.a=d},
eEE:function eEE(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEH:function eEH(){},
eEI:function eEI(){},
eEp:function eEp(d){this.a=d},
eEq:function eEq(d){this.a=d},
eEr:function eEr(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEt:function eEt(d){this.a=d},
eEu:function eEu(d){this.a=d},
eEv:function eEv(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEA:function eEA(d){this.a=d},
eEB:function eEB(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e,f){this.a=d
this.b=e
this.c=f},
eFX:function eFX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFW:function eFW(d,e,f){this.a=d
this.b=e
this.c=f},
eFV:function eFV(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e){this.a=d
this.b=e},
eF1:function eF1(d,e){this.a=d
this.b=e},
eEX:function eEX(d){this.a=d},
eEW:function eEW(d){this.a=d},
eEV:function eEV(d,e){this.a=d
this.b=e},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eF_:function eF_(){},
eF0:function eF0(d,e){this.a=d
this.b=e},
eFC:function eFC(d){this.a=d},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHN:function eHN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHJ:function eHJ(){},
eHK:function eHK(){},
eJn:function eJn(){},
eJo:function eJo(d,e,f){this.a=d
this.b=e
this.c=f},
eJp:function eJp(){},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d,e){this.a=d
this.b=e},
eEj:function eEj(d,e){this.a=d
this.b=e},
eFq:function eFq(){},
eFr:function eFr(){},
eFs:function eFs(){},
eFv:function eFv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFt:function eFt(d,e,f){this.a=d
this.b=e
this.c=f},
eGY:function eGY(d){this.a=d},
eGX:function eGX(){},
eGZ:function eGZ(d,e){this.a=d
this.b=e},
eH_:function eH_(d,e){this.a=d
this.b=e},
eGW:function eGW(d){this.a=d},
eH0:function eH0(d,e){this.a=d
this.b=e},
eGV:function eGV(d){this.a=d},
eH1:function eH1(d,e){this.a=d
this.b=e},
eGU:function eGU(d){this.a=d},
eH2:function eH2(d,e){this.a=d
this.b=e},
eGT:function eGT(d){this.a=d},
eH3:function eH3(d,e){this.a=d
this.b=e},
eGS:function eGS(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e){this.a=d
this.b=e},
eGR:function eGR(d){this.a=d},
eH5:function eH5(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d){this.a=d},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGK:function eGK(d){this.a=d},
eGL:function eGL(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGH:function eGH(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGG:function eGG(d){this.a=d},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGF:function eGF(d){this.a=d},
eGP:function eGP(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eFR:function eFR(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFN:function eFN(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e,f){this.a=d
this.b=e
this.c=f},
eK8:function eK8(d){this.a=d},
eK9:function eK9(d){this.a=d},
eH8:function eH8(d,e){this.a=d
this.b=e},
eH7:function eH7(d,e){this.a=d
this.b=e},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
eIx:function eIx(d,e){this.a=d
this.b=e},
eIy:function eIy(d){this.a=d},
eIz:function eIz(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIV:function eIV(d){this.a=d},
eJ5:function eJ5(d){this.a=d},
eJc:function eJc(d){this.a=d},
eJd:function eJd(d){this.a=d},
eJe:function eJe(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJg:function eJg(d,e){this.a=d
this.b=e},
eIA:function eIA(d){this.a=d},
eIB:function eIB(d){this.a=d},
eIC:function eIC(d){this.a=d},
eID:function eID(d){this.a=d},
eIE:function eIE(d){this.a=d},
eIF:function eIF(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d){this.a=d},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIO:function eIO(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIQ:function eIQ(d){this.a=d},
eIR:function eIR(d){this.a=d},
eIS:function eIS(d){this.a=d},
eIT:function eIT(d){this.a=d},
eIn:function eIn(d){this.a=d},
eIU:function eIU(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIW:function eIW(d){this.a=d},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIX:function eIX(d,e){this.a=d
this.b=e},
eIY:function eIY(d,e){this.a=d
this.b=e},
eIt:function eIt(d,e,f){this.a=d
this.b=e
this.c=f},
eIj:function eIj(d,e){this.a=d
this.b=e},
eIw:function eIw(d){this.a=d},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJj:function eJj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eJi:function eJi(d,e){this.a=d
this.b=e},
eIZ:function eIZ(d,e,f){this.a=d
this.b=e
this.c=f},
eIs:function eIs(d,e,f){this.a=d
this.b=e
this.c=f},
eIi:function eIi(d,e,f){this.a=d
this.b=e
this.c=f},
eIg:function eIg(d,e){this.a=d
this.b=e},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eIr:function eIr(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e){this.a=d
this.b=e},
eIf:function eIf(d,e){this.a=d
this.b=e},
eJ0:function eJ0(d){this.a=d},
eIq:function eIq(d){this.a=d},
eJ1:function eJ1(d){this.a=d},
eJ2:function eJ2(d){this.a=d},
eJ3:function eJ3(d){this.a=d},
eJ4:function eJ4(d){this.a=d},
eIp:function eIp(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
eIo:function eIo(d){this.a=d},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
eIm:function eIm(d){this.a=d},
eJa:function eJa(d,e){this.a=d
this.b=e},
eIl:function eIl(d){this.a=d},
eJb:function eJb(d,e){this.a=d
this.b=e},
eIk:function eIk(d){this.a=d},
eES:function eES(d,e,f){this.a=d
this.b=e
this.c=f},
eER:function eER(d,e){this.a=d
this.b=e},
eJE:function eJE(d,e){this.a=d
this.b=e},
eJD:function eJD(d,e){this.a=d
this.b=e},
eJF:function eJF(d,e){this.a=d
this.b=e},
eJC:function eJC(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e){this.a=d
this.b=e},
eG2:function eG2(d){this.a=d},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG1:function eG1(d){this.a=d},
eGB:function eGB(){},
eGA:function eGA(){},
eJR:function eJR(d){this.a=d},
eJQ:function eJQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJK:function eJK(d,e){this.a=d
this.b=e},
eJO:function eJO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJL:function eJL(d,e){this.a=d
this.b=e},
eJG:function eJG(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJJ:function eJJ(d){this.a=d},
eJM:function eJM(d,e){this.a=d
this.b=e},
eJN:function eJN(d,e){this.a=d
this.b=e},
eJS:function eJS(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFi:function eFi(d,e,f){this.a=d
this.b=e
this.c=f},
eFh:function eFh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF6:function eF6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eF7:function eF7(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF9:function eF9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF5:function eF5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFa:function eFa(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFb:function eFb(d,e){this.a=d
this.b=e},
eFd:function eFd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF4:function eF4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFe:function eFe(d,e){this.a=d
this.b=e},
eF3:function eF3(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eFg:function eFg(d,e){this.a=d
this.b=e},
eHc:function eHc(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHd:function eHd(d,e){this.a=d
this.b=e},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGi:function eGi(d,e){this.a=d
this.b=e},
eGg:function eGg(d,e){this.a=d
this.b=e},
eGj:function eGj(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGk:function eGk(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e){this.a=d
this.b=e},
eGl:function eGl(d,e){this.a=d
this.b=e},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGm:function eGm(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGn:function eGn(d,e,f){this.a=d
this.b=e
this.c=f},
eGb:function eGb(d,e){this.a=d
this.b=e},
eGo:function eGo(d,e,f){this.a=d
this.b=e
this.c=f},
eGa:function eGa(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e){this.a=d
this.b=e},
eG9:function eG9(d,e,f){this.a=d
this.b=e
this.c=f},
eG6:function eG6(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e){this.a=d
this.b=e},
eGr:function eGr(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e,f){this.a=d
this.b=e
this.c=f},
eG5:function eG5(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGv:function eGv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE0:function eE0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eI9:function eI9(d,e){this.a=d
this.b=e},
eI7:function eI7(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
agO:function agO(d,e,f){this.a=d
this.b=e
this.c=f},
aBm:function aBm(d,e,f){this.c=d
this.e=e
this.a=f},
bfJ:function bfJ(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dbL:function dbL(d){this.a=d},
dbK:function dbK(d){this.a=d},
bfY:function bfY(d,e){this.c=d
this.a=e},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d){this.a=d},
KN:function KN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfI:function bfI(){this.d=!1
this.c=this.a=null},
dbI:function dbI(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbH:function dbH(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbG:function dbG(d,e){this.a=d
this.b=e},
QM:function QM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a14:function a14(d,e,f){this.c=d
this.d=e
this.a=f},
aGY:function aGY(d,e,f){var _=this
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
eKP:function eKP(){},
eKF:function eKF(d){this.a=d},
eKO:function eKO(d){this.a=d},
eKG:function eKG(d){this.a=d},
eKH:function eKH(d){this.a=d},
eKB:function eKB(d){this.a=d},
eKC:function eKC(d,e){this.a=d
this.b=e},
eKD:function eKD(d){this.a=d},
eKE:function eKE(d,e,f){this.a=d
this.b=e
this.c=f},
eKM:function eKM(){},
eKN:function eKN(d){this.a=d},
eKI:function eKI(d){this.a=d},
eKJ:function eKJ(d){this.a=d},
eKK:function eKK(d){this.a=d},
eKL:function eKL(d){this.a=d},
eKQ:function eKQ(d,e,f){this.a=d
this.b=e
this.c=f},
eKS:function eKS(d,e){this.a=d
this.b=e},
eKR:function eKR(d){this.a=d},
KT:function KT(d,e){this.c=d
this.a=e},
bv1:function bv1(d,e){this.b=d
this.a=e},
bkJ:function bkJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkI:function bkI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aMO:function aMO(){},
aOQ:function aOQ(){},
bAQ:function bAQ(){},
aOR:function aOR(){},
fXc(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fXc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xS.cq().MS(B.a(["pdf"],x.s),A.uT,!0),$async$fXc)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fn(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bs4(s,"data:application/pdf;base64,"+A.cK.gcn().aL(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXc,v)},
is4(d){var w,v,u,t,s,r
try{w=B.jP(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.cb(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).l_(0,w).gJ(0)
if(t>0){s=J.ajy(t,1,200)
return s}}catch(r){}return 1},
fX3(d){return C.is3(d)},
is3(d){var w=0,v=B.j(x.T),u
var $async$fX3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fX3,v)},
bGw(d,e,f,g){return C.isd(d,e,f,g)},
isd(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bGw=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ed(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.h.D(b5.a,80,2400)
q=A.h.D(b5.b,80,2400)
p=B.hHD(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jp(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jp(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jp(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jp(b0),a9)}o=A.h.D(o-0.04,0,1)
n=A.h.D(n-0.04,0,1)
m=A.h.D(m+0.04,0,1)
l=A.h.D(l+0.04,0,1)
j=A.h.D(m-o,0.12,1)
i=A.h.D(l-n,0.12,1)
h=A.o.D(A.h.U(800*(i/j)),180,420)
$.S()
g=new B.q8(new B.pJ())
f=B.zu(g,null)
a7=B.L()
a7.r=A.rG.gp(0)
f.aF(new B.a4(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bG
b1.e=A.dQ
b1.b=A.aa
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.r((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o8()
w=7
return B.b(a3.xI(800,h),$async$bGw)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hj(A.hf),$async$bGw)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eR(A.dI.gaT(a5))
a7=A.cK.gcn().aL(a7)
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
return B.i($async$bGw,v)},
aSQ(d,e,f){return C.is1(d,e,f)},
is1(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aSQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ajc(d,e,f,new C.fX1(r,q),q,"Sign document"),$async$aSQ)
case 3:if(!new B.ed(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bGw(q,t,r.b,r.c),$async$aSQ)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b4c(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSQ,v)},
isb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hA6(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hA6(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b1(A.a.b0(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.h.ad(q.c*100,2)+"%;top:"+A.h.ad(q.d*100,2)+"%;width:"+A.h.ad(q.e*100,2)+"%;height:"+A.h.ad(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b1(A.a.b0(A.o.ft(q.Q,16),8,"0"),2)
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.hzH(q.ay)+";border:2px solid "+C.hzH(q.ch)+'"></div>'
break
case 5:l=C.hiz(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.galz()
if(p==null)p=A.aDe
n=B.U(p)
k=n.k("iE<1>")
j=new B.iE(p,0,8,k)
j.nb(p,0,8,n.c)
j=new B.bR(j,j.gJ(0),k.k("bR<ak.E>"))
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
hzH(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.h.ad((w&255)/255,3)+")"},
hA6(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bGu(d,e){var w=0,v=B.j(x.H)
var $async$bGu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fXa(e,C.isb(e),d),d,null,!0,!0,x.H),$async$bGu)
case 2:return B.h(null,v)}})
return B.i($async$bGu,v)},
bGv(){var w=0,v=B.j(x.T),u,t,s
var $async$bGv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(X.DJ(92,2400),$async$bGv)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fX3(s),$async$bGv)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGv,v)},
aSR(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aSR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hjS(d),$async$aSR)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A6.fZU(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSR,v)},
htZ(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b4c:function b4c(d,e,f){this.a=d
this.b=e
this.c=f},
fX1:function fX1(d,e){this.a=d
this.b=e},
fXa:function fXa(d,e,f){this.a=d
this.b=e
this.c=f},
fX7:function fX7(d){this.a=d},
fX8:function fX8(d,e,f){this.a=d
this.b=e
this.c=f},
fX9:function fX9(d,e,f){this.a=d
this.b=e
this.c=f},
is2(d){return C.kn(d.w)},
is9(d){var w,v,u,t
if(d.length===0||!A.d.cE(d,C.itO()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zf(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hNZ()
if(w.b.test(u))return u
return null},
hHF(d,e,f){var w,v,u=C.hWZ(d),t=$.oz()
for(w=0;w<80;++w){v=u+A.a.b0(A.o.v(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b0(A.o.v(Date.now()%1000),3,"0")},
isf(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eL(w,d.b);v.C();){u=w.gP(w).y
t=C.zf(u==null?"":u)
if(t!=null)s.I(0,t)}return s},
fX_(d,e){var w,v=d.y,u=C.zf(v==null?"":v)
if(u!=null)return d.y=u
w=C.isf(new B.Y(e,new C.fX0(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hHF(v==null?"":v,null,w)},
ise(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kn(w.w))return null
v=w.y
return C.zf(v==null?"":v)},
i0o(){var w,v=$.oz(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.hg(u)},
Xv(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xv)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bN),$async$Xv)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.u(r,"stashes")
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
return B.i($async$Xv,v)},
Xw(d){return C.i0p(d)},
i0p(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xw=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xw)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hQ("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cQ,null),$async$Xw)
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
return B.i($async$Xw,v)},
a9D(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9D=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a9D)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xv(),$async$a9D)
case 4:s=a6
r=C.zf(a2==null?"":a2)
if(r==null)r=a3!=null?C.hHF(a3,null,A.M):null
q=x.N
p=B.aR(q)
for(o=J.dq(s),n=J.aT(o.ghM(s)),m=x.f;n.C();){l=n.gP(n)
if(!m.b(l))continue
k=J.u(l,"claimCode")
j=C.zf(J.k(k==null?"":k))
if(j!=null)p.I(0,j)}n=o.gdP(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gP(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dV.aL(t)
g.n(0,"payload",A.cK.gcn().aL(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.Vs.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zf(J.k(q==null?"":q))
if(f==null)f=C.hu3(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xw(s),$async$a9D)
case 7:u=new B.aIr(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.i0o()
n=r==null
d=n?C.hu3(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dV.aL(t)
q.n(0,"payload",A.cK.gcn().aL(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.Vs.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xw(s),$async$a9D)
case 8:u=new B.aIr(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9D,v)},
hu3(d){var w,v,u=$.oz()
for(w=0;w<200;++w){v="SL"+A.a.b0(A.o.v(u.aw(1000)),3,"0")
if(d.I(0,v))return v}return"SL"+A.a.b0(A.o.v(Date.now()%1000),3,"0")},
att(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$att=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$att)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xv(),$async$att)
case 6:t=f
s=J.a8(t)
r=s.gJ(t)
s.bq(t,new C.cmi(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xw(t),$async$att)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$att,v)},
ats(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$ats=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zf(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$ats)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xv(),$async$ats)
case 6:t=o.i9(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gP(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.u(q,"claimCode")
if(C.zf(J.k(q==null?"":q))===p){u=C.a9C(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ats,v)},
a9C(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9C=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$a9C)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xv(),$async$a9C)
case 6:p=a1
o=J.a8(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a8(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.h.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cb.cD(0,A.cJ.aL(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Vs.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.W.aP(0,s,null)
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
return B.b(C.Xw(p),$async$a9C)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9C,v)},
is8(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fX6(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fXe(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.W.av(w,null)}return A.W.av(C.is8(d==null?B.a([],x.E):d,f,g),null)},
fXd(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fXd=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9D(h,d,e,f,g),$async$fXd)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zf(e==null?"":e)
u=new B.aId(s,t)
w=1
break}t=A.dV.aL(h)
t=A.kM.gcn().aL(t)
u=new B.aId(C.zf(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXd,v)},
hjU(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eC(q,s)||J.eC(q,r))return!0
if(J.d5(q,"{"))try{w=A.W.aP(0,q,null)
if(x.f.b(w)){u=J.u(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
isc(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hjU(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b1(u,t))
if(C.hjU(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b1(u,r))
if(C.hjU(s))return s}}return null},
fX2(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.E)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.W.aP(0,A.cb.cD(0,A.cJ.aL(J.nv(t,8))),null))
else w=v.a(A.W.aP(0,t,null))
v=C.iak(w)
return v}catch(u){v=B.a([],x.E)
return v}},
aiX(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.ats(t[1]),$async$aiX)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fX2(s)
w=1
break}case 6:u=B.a([],x.E)
w=1
break
case 4:r=C.zf(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.ats(r),$async$aiX)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fX2(s)
w=1
break}u=B.a([],x.E)
w=1
break
case 9:w=A.a.a_(q,"NGMYSLIDESYNC2|")?11:12
break
case 11:t=q.split("|")
w=t.length>=2?13:14
break
case 13:w=15
return B.b(C.a9C(t[1]),$async$aiX)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fX2(s)
w=1
break}case 14:u=B.a([],x.E)
w=1
break
case 12:u=C.fX2(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiX,v)},
iak(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Vs.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.E)
return B.a([C.hjR(C.Xr(B.a1(v,x.N,x.z)),w)],x.E)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.E)
t=J.de(u,x.f)
t=B.cF(t,new C.frD(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a3(t).k("M.E"))
return t}return B.a([],x.E)},
hjR(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gP(u)
if(t.b(s)){r=Date.now()
q=$.hG
$.hG=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xr(B.a1(o,x.N,x.z))
if(e&&C.kn(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bS(144e8).ag()
return p},
bGe(){var w=0,v=B.j(x.aT),u,t,s
var $async$bGe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hz(),$async$bGe)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiX(s),$async$bGe)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGe,v)},
h5s(d){var w=0,v=B.j(x.T),u,t
var $async$h5s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.ZM,!0,"Dismiss",d,new C.h5t(),new C.h5u(),A.H4,!0,x.N),$async$h5s)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.T(D.fri)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h5s,v)},
ivV(d,e,f,g,h){return B.a6(d,!1).ce(B.ef(new C.h5v(h,e,g,f),!0,null,x.H))},
fX0:function fX0(d){this.a=d},
cmi:function cmi(d){this.a=d},
fX6:function fX6(){},
frD:function frD(d){this.a=d},
h5t:function h5t(){},
h5u:function h5u(){},
h5v:function h5v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xt:function Xt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGW:function aGW(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eKl:function eKl(){},
eKh:function eKh(d,e){this.a=d
this.b=e},
eKk:function eKk(d,e){this.a=d
this.b=e},
eKi:function eKi(d){this.a=d},
eKj:function eKj(d){this.a=d},
eKm:function eKm(d){this.a=d},
eKn:function eKn(d){this.a=d},
eKq:function eKq(d){this.a=d},
eKr:function eKr(d){this.a=d},
eKp:function eKp(d){this.a=d},
eKs:function eKs(d){this.a=d},
eKo:function eKo(d){this.a=d},
eKt:function eKt(d,e){this.a=d
this.b=e},
eKg:function eKg(d,e){this.a=d
this.b=e},
eKf:function eKf(d,e){this.a=d
this.b=e},
Xu:function Xu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnG:function bnG(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eKu:function eKu(d,e){this.a=d
this.b=e},
eKv:function eKv(d){this.a=d},
eKw:function eKw(){},
eKx:function eKx(d){this.a=d},
eKy:function eKy(d,e){this.a=d
this.b=e},
aGT:function aGT(d){this.a=d},
aGU:function aGU(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eDV:function eDV(d){this.a=d},
eDU:function eDU(){},
eDW:function eDW(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDQ:function eDQ(){},
eDS:function eDS(d){this.a=d},
eDT:function eDT(d){this.a=d},
byj:function byj(){},
atu:function atu(d){this.a=d},
aGX:function aGX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eKA:function eKA(d){this.a=d},
eKz:function eKz(d){this.a=d},
ifO(){var w,v,u,t
for(v=0;v<4;++v){w=D.dln[v]
try{if(Ag.c2j(w)){u=w
return u}}catch(t){}}return null},
Su(d,e){return C.ioD(d,e)},
ioD(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Su=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.ifO()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.gaFm()
b3=b2>=1
b4=c2.a=A.h.U(b3?1280:1280*b2)
b5=c2.b=A.h.U(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qZ(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cx(null,x.B)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eF(b8,b9)
n=new B.eF("Getting ready\u2026",b9)
m=new B.eF(0,b9)
l=B.pG(new C.fR_(c2,b7,o),!1,!1)
b6.md(0,l)
b9=x.H
B.cg(null,A.bA,!1,null,new C.fR0(n,m),c6,null,!0,!0,b9)
k=new C.fR4(b7)
j=new C.fR5()
i=null
t=4
b3=c2.a
h=Ao.aV7(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h8v(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ag.b_9(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Jr.zd(i,"dataavailable",new C.fR1(e))
d=new B.c4(new B.bm($.bF,x.dT),x.b2)
A.Jr.zd(i,"stop",new C.fR2(d))
J.ajD(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Su)
case 8:w=7
return B.b(c5.$1(d0),$async$Su)
case 7:a0=d0
J.h8w(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajD(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajD(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Su)
case 15:w=14
return B.b(c5.$1(d0),$async$Su)
case 14:a0=d0
case 13:J.h8w(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajD(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbt())b3=b3===b8.gbt()&&0<b8.gcG()
else b3=!0
if(!b3){w=17
break}J.h8w(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bO(A.fh,null,b9),$async$Su)
case 18:w=16
break
case 17:J.ajD(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajD(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.ov),$async$Su)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hS(e,a5)
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
J.HM(b0)
J.lQ(b0)
B.bO(A.qA,new C.fR3(a7),b9)
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
J.lQ(l)
if(p.q4())p.ek()
c3=o
b3=$.ax()
c3.sii(b3)
J.aTM(c3,0)
c3=n
c3.sii(b3)
J.aTM(c3,0)
c3=m
c3.sii(b3)
J.aTM(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Su,v)},
fR_:function fR_(d,e,f){this.a=d
this.b=e
this.c=f},
fQZ:function fQZ(){},
fR0:function fR0(d,e){this.a=d
this.b=e},
fR4:function fR4(d){this.a=d},
fR5:function fR5(){},
fR1:function fR1(d){this.a=d},
fR2:function fR2(d){this.a=d},
fR3:function fR3(d){this.a=d},
byx:function byx(d,e,f){this.c=d
this.d=e
this.a=f},
flE:function flE(){},
flF:function flF(){},
cmE(d){var w=0,v=B.j(x.at),u,t,s
var $async$cmE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.atC(d,A.AE),$async$cmE)
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
return B.i($async$cmE,v)},
cmD(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a9j:function a9j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnp:function bnp(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
esa:function esa(d){this.a=d},
es8:function es8(d){this.a=d},
es9:function es9(d,e){this.a=d
this.b=e},
aab:function aab(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aac:function aac(d,e){this.a=d
this.b=e},
b5S:function b5S(){},
cqy:function cqy(){},
cqz:function cqz(){},
cqA:function cqA(d,e,f,g,h,i,j,k,l){var _=this
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
hOZ(d){return new C.ajX(d)},
a4u:function a4u(){},
ajX:function ajX(d){this.a=d},
aU4:function aU4(){},
az7:function az7(d,e){this.d=d
this.b=e
this.a=null},
aVw:function aVw(d){this.b=d
this.a=null},
bF5(d,e){var w=0,v=B.j(x.H),u
var $async$bF5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gui().MB(d,e),$async$bF5)
case 2:u=B.h_2()
w=3
return B.b(u,$async$bF5)
case 3:return B.h(null,v)}})
return B.i($async$bF5,v)},
hEH(d,e){return(A.tx[(d^e)&255]^A.o.aI(d,8))>>>0},
ai2(d,e,f,g,h,i){var w=C.ikV(d,A.cY,f,null,A.cI,g,h,i)
return w},
fJM(d,e){d.oT(0,e)
return d},
hGL(d){var w=F.hHv(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hWZ(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pM.h(0,w)
if(v!=null)return v
for(u=A.pM.gdP(A.pM),u=u.gae(u);u.C();){t=u.gP(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aA(s,0,2)
return A.a.aA(s+"XX",0,2)},
hGT(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<96;++w)v+="- "+D.dom[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bEj(d,e){return C.ihw(d,e)},
ihw(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hS([d],"application/pdf")
n=x.z
q=B.aXg(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jU(o,"share",[p]),x.H),$async$bEj)
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
return B.i($async$bEj,v)},
hjL(){var w=0,v=B.j(x.y),u,t,s
var $async$hjL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fzJ
s=$.bDQ
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bEj(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hjL,v)},
bFH(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bFH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fzJ
l=$.bDQ
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A6.hAS()?3:4
break
case 3:w=5
return B.b(C.bEj(m,k),$async$bFH)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bDR
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
J.HM(q)
w=10
return B.b(B.bO(A.a3,null,x.H),$async$bFH)
case 10:J.lQ(q)
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
return B.i($async$bFH,v)},
hjC(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hjC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bDR
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.m1.rp(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hjC,v)},
hjT(d,e){var w=0,v=B.j(x.H),u,t
var $async$hjT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hS([d],"text/html"))
t.toString
u=window
u.toString
A.m1.rp(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hjT,v)},
b4O(d,e){var w=0,v=B.j(x.y),u
var $async$b4O=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b4Q(d,e),$async$b4O)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4P(d),$async$b4O)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4O,v)}},D,Ar,T,As,Ac,A3,Z,O,A4,At,G,F,E,H,A_,Au,Ad,A5,U,A6,P,Av,M,Aw,Ae,Ax,Af,N,Ay,Az,A0,L,A1,Q,A2,AA,A7,AB,R,AC,Ag,Ah,AD,Ai,AE,Aj,Ak,AF,AG,AH,V,AI,AJ,AK,AL,I,AM,W,S,K,A8,A9
J=c[1]
B=c[0]
A=c[2]
X=c[65]
Al=c[167]
Am=c[211]
Aa=c[76]
An=c[55]
Ao=c[66]
Y=c[228]
Ab=c[59]
Ap=c[153]
Aq=c[240]
C=a.updateHolder(c[5],C)
D=c[226]
Ar=c[236]
T=c[144]
As=c[43]
Ac=c[230]
A3=c[227]
Z=c[42]
O=c[140]
A4=c[216]
At=c[136]
G=c[197]
F=c[35]
E=c[229]
H=c[98]
A_=c[125]
Au=c[235]
Ad=c[146]
A5=c[241]
U=c[156]
A6=c[32]
P=c[184]
Av=c[243]
M=c[164]
Aw=c[192]
Ae=c[108]
Ax=c[138]
Af=c[120]
N=c[231]
Ay=c[244]
Az=c[135]
A0=c[69]
L=c[205]
A1=c[85]
Q=c[166]
A2=c[117]
AA=c[127]
A7=c[122]
AB=c[233]
R=c[128]
AC=c[96]
Ag=c[60]
Ah=c[201]
AD=c[41]
Ai=c[83]
AE=c[162]
Aj=c[154]
Ak=c[239]
AF=c[242]
AG=c[238]
AH=c[38]
V=c[77]
AI=c[131]
AJ=c[129]
AK=c[246]
AL=c[234]
I=c[182]
AM=c[245]
W=c[53]
S=c[232]
K=c[213]
A8=c[237]
A9=c[114]
C.oo.prototype={
vL(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.un(t,v)
return new C.oo(t===0?!1:w,v,t)},
bQF(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DR()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.un(w,u)
return new C.oo(r===0?!1:s,u,r)},
bRb(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DR()
w=o-d
if(w<=0)return p.a?$.hlq():$.DR()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.un(w,u)
q=new C.oo(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a4g())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dO("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ar(e,16)
if(A.o.F(e,16)===0)return r.bQF(v)
u=w+v+1
t=new Uint16Array(u)
C.hxf(r.b,w,e,t)
w=r.a
s=C.un(u,t)
return new C.oo(s===0?!1:w,t,s)},
mK(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dO("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ar(e,16)
u=A.o.F(e,16)
if(u===0)return n.bRb(v)
t=w-v
if(t<=0)return n.a?$.hlq():$.DR()
s=n.b
r=new Uint16Array(t)
C.i6a(s,w,e,r)
w=n.a
q=C.un(t,r)
p=new C.oo(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a4g())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a4g())}return p},
aQ(d,e){var w,v=this.a
if(v===e.a){w=C.cPR(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9E(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9E(t,e)
if(s===0)return $.DR()
if(r===0)return t.a===e?t:t.vL(0)
w=s+1
v=new Uint16Array(w)
C.i68(t.b,s,d.b,r,v)
u=C.un(w,v)
return new C.oo(u===0?!1:e,v,u)},
HX(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DR()
w=d.c
if(w===0)return t.a===e?t:t.vL(0)
v=new Uint16Array(s)
C.bcV(t.b,s,d.b,w,v)
u=C.un(s,v)
return new C.oo(u===0?!1:e,v,u)},
bDv(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.un(r,u)
return new C.oo(!1,u,s)},
bDu(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.un(u,r)
return new C.oo(!1,r,v)},
bDw(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.un(p,m)
return new C.oo(s!==0,m,s)},
VR(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DR()
w=t.a
if(w===e.a){if(w){w=$.a4g()
return t.HX(w,!0).bDw(e.HX(w,!0),!0).a9E(w,!0)}return t.bDv(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bDu(v.HX($.a4g(),!1),!1)},
a5(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9E(e,v)
if(C.cPR(u.b,t,e.b,w)>=0)return u.HX(e,v)
return e.HX(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vL(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9E(e,v)
if(C.cPR(u.b,t,e.b,w)>=0)return u.HX(e,v)
return e.HX(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DR()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hxg(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.un(w,t)
return new C.oo(q===0?!1:r,t,q)},
bQE(d){var w,v,u,t
if(this.c<d.c)return $.DR()
this.aUw(d)
w=$.he6.cq()-$.azW.cq()
v=C.he8($.he5.cq(),$.azW.cq(),$.he6.cq(),w)
u=C.un(w,v)
t=new C.oo(!1,v,u)
return this.a!==d.a&&u>0?t.vL(0):t},
cut(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aUw(d)
w=C.he8($.he5.cq(),0,$.azW.cq(),$.azW.cq())
v=C.un($.azW.cq(),w)
u=new C.oo(!1,w,v)
if($.he7.cq()>0)u=u.mK(0,$.he7.cq())
return t.a&&u.c>0?u.vL(0):u},
aUw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hxc&&d.c===$.hxe&&g.b===$.hxb&&d.b===$.hxd)return
w=d.b
v=d.c
u=16-A.o.galZ(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hxa(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hxa(g.b,f,u,r)}else{r=C.he8(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.he9(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cPR(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bcV(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bcV(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i69(p,r,i);--o
C.hxg(h,j,0,r,o,s)
if(r[i]<h){m=C.he9(j,s,o,n)
C.bcV(r,l,n,m,r)
while(--h,r[i]<h)C.bcV(r,l,n,m,r)}--i}$.hxb=g.b
$.hxc=f
$.hxd=w
$.hxe=v
$.he5.b=r
$.he6.b=l
$.azW.b=s
$.he7.b=u},
gX(d){var w,v,u,t=new C.cPS(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cPT().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oo&&this.aQ(0,e)===0},
tY(d,e){return this.aQ(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vE(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galZ(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cPU(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cPV(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lw(A.aI.gaT(w)).getFloat64(0,!0)},
v(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.v(-r.b[0])
return A.o.v(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vL(0):r
while(v.c>1){u=$.hLK()
if(u.c===0)B.bj(D.bcF)
t=v.cut(u).v(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQE(u)}w.push(A.o.v(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).hg(0)},
$iaUN:1,
$ihU:1}
C.aUb.prototype={
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
cTw(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kq(w,w.length,B.U(w).k("kq<1>"))}}
C.T9.prototype={
d0H(){var w,v
if(this.as==null)this.bgD()
w=this.as
v=w==null?null:w.ard()
return v==null?null:v.eU()},
bgD(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ard().eU()
this.as=new C.bTO(v)}},
gZ(d){return this.at}}
C.a5e.prototype={
a7(){return"CompressionType."+this.b}}
C.bLw.prototype={
eI(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.ct()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.Ac[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.ct()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fP(u,t)&A.Ac[d])
s.c=t}return v}}
C.bJK.prototype={
cRz(d,e){var w,v,u,t,s,r=this,q=new C.bLw(d)
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
t=r.csL(q)
if(t<0)return!1
if(t===0){q.eI(8)
q.eI(8)
q.eI(8)
q.eI(8)
s=r.csO(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eI(8)
q.eI(8)
q.eI(8)
q.eI(8)
return!0}}return!0},
csL(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eI(8)
if(t!==D.dDT[u])v=!1
if(t!==D.de9[u])w=!1
if(!w&&!v)return-1}return v?0:2},
csO(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eI(1),d2=((d3.eI(8)<<8|d3.eI(8))<<8|d3.eI(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eI(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eI(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6W()
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
u[w]=l}c9.fr=B.c2(6,$.hJJ(),!1,x.F)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eI(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eI(1)===0)break
i=d3.eI(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hJI()
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
if(f<h)h=f}c9.c25(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.awh(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.awh(d3)}while(a3===0||a3===1);++a5
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
a3=c9.awh(d3)
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
c1=(c1<<8^D.IU[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.J_[b9];++b9
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
if(b8===0){b8=D.J_[b9];++b9
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
if(b8===0){b8=D.J_[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.J_[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.J_[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.IU[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.IU[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.IU[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.IU[c1>>>24&255^c7&255])>>>0
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
awh(d){var w,v,u,t,s=this,r=s.ay
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
c25(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6W(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cHN.prototype={
aKF(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bUi(e)
if(q<0)return
e.c=q
if(e.aS()!==101010256)return
e.b7()
e.b7()
e.b7()
e.b7()
r.f=e.aS()
r.r=e.aS()
w=e.b7()
if(w>0)e.aKI(w,!1)
r.ct8(e)
q=r.r
v=r.f
u=e.aNO(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aS()!==33639248)break
s=new C.bby()
s.d0G(0,u,e,f)
q.push(s)}},
ct8(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a9k(20,r)
if(w.aS()!==117853008){d.c=s
return}w.aS()
v=w.tK()
w.aS()
d.c=v
if(d.aS()!==101075792){d.c=s
return}d.tK()
d.b7()
d.b7()
d.aS()
d.aS()
d.tK()
d.tK()
u=d.tK()
t=d.tK()
this.f=u
this.r=t
d.c=s},
bUi(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a9k(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.anR(A.iv)
o.aP2(r.eU(),A.iv,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aS()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cHL.prototype={}
C.azy.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cHO.prototype={
aKF(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aS()!==67324752)return
e.b7()
o.b=e.b7()
w=D.aJX.h(0,e.b7())
o.c=w==null?D.O_:w
o.d=e.b7()
o.e=e.b7()
o.f=e.aS()
o.r=e.aS()
o.w=e.aS()
v=e.b7()
u=e.b7()
o.x=e.apQ(v)
o.y=e.hu(u).eU()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b1g:D.Fp
o.ay=f
o.Q=e.hu(t)
if(o.at!==D.Fp&&u>2){w=o.y
w.toString
s=B.rO(w,A.iv,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b7()===39169){s.b7()
s.b7()
s.apQ(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b7()
o.at=D.b1h
o.ax=new C.cHL(r,q)
w=D.aJX.h(0,q)
o.c=w==null?D.O_:w}}}if((o.b&8)!==0){p=e.aS()
if(p===134695760)o.f=e.aS()
else o.f=p
o.r=e.aS()
o.w=e.aS()}},
gJ(d){return this.bqn().length},
ard(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rO(new Uint8Array(0),A.iv,q,q)
w=r.at
if(w!==D.Fp)if(p.gJ(0)<=0)r.at=D.Fp
else{if(w===D.b1g){p=r.bOX(p)
r.Q=p}else if(w===D.b1h){p=r.bOA(p)
r.Q=p}r.at=D.Fp}w=r.c
if(w===D.alP){v=p.c
u=B.dl()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.qd.Ci(p.eU(),!0,!1)
else{t=B.aa1(A.iv,r.w)
p=r.Q
p.toString
A.qd.a5p(p,t,!0,!1)
u.b=t.Hx()}r.Q.c=v
return B.rO(u.bm(),A.iv,q,q)}else if(w===D.alQ){s=B.aa1(A.iv,32768)
p=r.Q
v=p.c
C.hP9().cRz(p,s)
u=s.Hx()
r.Q.c=v
return B.rO(u,A.iv,q,q)}else return B.rO(p.eU(),A.iv,q,q)},
bqn(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eU()},
v(d){return this.x},
bcr(d){var w=this.ch,v=C.KJ(C.hEH(w[0].M(0),d))
w[0]=v
v=w[1].a5(0,v.VR(0,C.KJ(255)))
w[1]=v
w[1]=v.aM(0,C.KJ(134775813)).a5(0,C.KJ(1)).VR(0,C.KJ(4294967295))
w[2]=C.KJ(C.hEH(w[2].M(0),w[1].mK(0,24).M(0)))},
aTV(){var w=(this.ch[2].VR(0,C.KJ(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOX(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rO(new Uint8Array(0),A.iv,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bcr(u[v.c++]^r.aTV())}t=r.Q.eU()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTV()
r.bcr(s)
u&2&&B.aj(t)
t[w]=s}return B.rO(t,A.iv,q,q)},
bOA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hu(8).eU()
v=16}else if(k===2){w=d.hu(12).eU()
v=24}else{w=d.hu(16).eU()
v=32}u=d.hu(2).eU()
t=d.hu(d.gJ(0)-10)
s=d.hu(10)
r=t.eU()
k=this.ay
k.toString
q=C.i5O(k,w,v)
p=new Uint8Array(B.cc(A.aI.du(q,0,v)))
k=v*2
o=new Uint8Array(B.cc(A.aI.du(q,v,k)))
if(!C.hwK(A.aI.du(q,k,k+2),u))throw B.W(B.fo("password error"))
k=new Uint8Array(16)
n=new C.bIk(k,new Uint8Array(16),p)
k=x.r
m=J.a6J(0,k)
m=n.r=new C.cqn(m)
m.c=!0
m.b=m.bpE(!0,new C.av4(p))
if(m.c)m.d=B.br(D.oX,!0,k)
else m.d=B.br(D.A0,!0,k)
l=C.huW(C.huY(),64)
l.bj3(new C.av4(o))
n.w=l
n.d0b(r,0,r.length)
k=s.eU()
m=n.x
m===$&&B.c()
if(!C.hwK(k,m))throw B.W(B.fo("macs don't match"))
return B.rO(r,A.iv,null,null)}}
C.bby.prototype={
d0G(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b7()
e.b7()
e.b7()
e.b7()
e.b7()
e.b7()
e.aS()
n.w=e.aS()
n.x=e.aS()
w=e.b7()
v=e.b7()
u=e.b7()
n.y=e.b7()
e.b7()
n.Q=e.aS()
n.as=e.aS()
if(w>0)n.at=e.apQ(w)
if(v>0){t=e.hu(v).eU()
n.ax=t
if(v>=4){s=B.rO(t,A.iv,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b7()
p=s.b7()
o=s.a9k(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tK()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tK()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tK()
p-=8}if(p>=4&&n.y===65535)n.y=o.aS()}}}}if(u>0)e.apQ(u)
f.c=n.as
t=new C.cHO(D.O_,n,D.Fp,B.a([C.KJ(0),C.KJ(0),C.KJ(0)],x.f3))
n.ch=t
t.aKF(0,f,g)},
v(d){return this.at}}
C.cHM.prototype={
cRA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cHN(B.a([],x.fT))
this.a=g
g.aKF(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.r)
v=new C.aUb(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c5(o,"/")||A.a.c5(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.T9(o,A.o.ar(Date.now(),1000),0):C.hmR(o,q.w,q)
v.I(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hmR(o,q.w,q)
if(k.as==null)k.bgD()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.anR(A.iv)
j.aP2(o,A.iv,h,h)}i=j==null?h:j.eU()
if(i!=null)new B.GY(!1).E9(i,0,h,!0)}}return v}}
C.bIk.prototype={
d0b(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D9(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hOT(u,m.a)
q=m.r
if(16>u.byteLength)B.bj(B.dO("Input buffer too short",null))
if(16>w.byteLength)B.bj(B.dO("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bSu(u,0,w,0,o)}else{o===$&&B.c()
q.bP0(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LU(w,0)
m.x=A.aI.du(m.x,0,10)
w=m.w
l=w.a
l.iw(0)
w=w.d
w===$&&B.c()
l.D9(0,w,0,w.length)
return f}}
C.cqs.prototype={}
C.cqw.prototype={}
C.cqq.prototype={}
C.av4.prototype={}
C.cqv.prototype={
cRP(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bj3(new C.av4(A.aI.fN(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bTC(n.a,n.b,t,s,r)
r+=v}A.aI.hc(f,g,g+w,s)
return o.a.c},
bTC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dO("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D9(0,d,0,d.length)
v.D9(0,f,0,4)
u=m.c
u===$&&B.c()
w.LU(u,0)
u=m.c
A.aI.hc(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D9(0,s,0,s.length)
w.LU(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cqr.prototype={}
C.cqp.prototype={}
C.av5.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.av5){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tY(d,e){var w=this.a
w===$&&B.c()
w=A.o.tY(w,e.gc2m())
if(!w)e.gc2m()
return w},
aNc(d,e){this.a=0
this.b=d},
u0(d){return this.aNc(d,null)},
aNR(d){var w,v=this,u=v.b
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
w.b40(v,u)
u=w.b
u===$&&B.c()
w.b40(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b40(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bw(v,w,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j)}}
C.cqu.prototype={
iw(d){var w,v=this
v.a.u0(0)
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
aqG(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b5u(u,0)
v.c=0}v.a.aNR(1)},
D9(d,e,f,g){var w=this.crs(e,f,g)
f+=w
g-=w
w=this.crt(e,f,g)
this.crj(e,f+w,g-w)},
LU(d,e){var w,v=this,u=C.huX(v.a),t=u.a
t===$&&B.c()
t=C.hkt(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hkt(w,3)
v.crn()
v.crk(u)
v.av5()
v.clr(d,e)
v.iw(0)
return 20},
b5u(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oB(A.aI.gaT(d),d.byteOffset,d.length).getUint32(e,A.iI===w.d)
if(w.w===16)w.av5()},
av5(){this.d0a()
this.w=0
A.d.hA(this.r,0,16,0)},
crj(d,e,f){while(f>0){this.aqG(d[e]);++e;--f}},
crt(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b5u(d,e)
e+=4
f-=4
w.aNR(4)
v+=4}return v},
crs(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqG(d[e]);++e;--f;++v}return v},
crn(){this.aqG(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqG(0)}},
crk(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.av5()
u=v.d
switch(u){case A.iI:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.FQ:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bd("Invalid endianness: "+u.v(0)))}},
clr(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iI===this.d,s=0;s<w;++s){r=v[s]
q=J.oB(A.aI.gaT(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd2(d){return this.f}}
C.cqx.prototype={
d0a(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qE[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qE[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qE[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qE[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qE[30]
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
C.cqt.prototype={
bj3(d){var w,v,u,t,s=this,r=s.a
r.iw(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D9(0,w,0,v)
w=s.d
w===$&&B.c()
r.LU(w,0)
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
s.bdF(s.d,u,54)
s.bdF(s.e,u,92)
u=s.d
r.D9(0,u,0,u.length)},
LU(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LU(s,w)
s=u.e
t.D9(0,s,0,s.length)
v=t.LU(d,e)
s=u.e
A.aI.hA(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D9(0,s,0,s.length)
return v},
bdF(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cqo.prototype={}
C.cqn.prototype={
a3F(d){return(D.oX[d&255]&255|(D.oX[d>>>8&255]&255)<<8|(D.oX[d>>>16&255]&255)<<16|D.oX[d>>>24&255]<<24)>>>0},
bpE(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dO("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e6(t,x.bW)
for(u=x.r,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
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
for(r=1;r<=10;++r){p=(p^f.a3F((m>>>8|(m&$.qE[24])<<24)>>>0)^D.cPA[r-1])>>>0
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
p=(p^f.a3F((k>>>8|(k&$.qE[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3F((k>>>8|(k&$.qE[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a3F((g>>>8|(g&$.qE[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3F(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bd("Should never get here"))}return s},
bSu(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oB(A.aI.gaT(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.en[a8&255]
u=D.en[a9>>>8&255]
t=$.qE[8]
s=D.en[b0>>>16&255]
r=$.qE[16]
q=D.en[b1>>>24&255]
p=$.qE[24]
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
bP0(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.em[a6&255]
v=D.em[b0>>>8&255]
u=$.qE[8]
t=D.em[a5>>>16&255]
s=$.qE[16]
r=D.em[a4>>>24&255]
q=$.qE[24]
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
a4=D.A0[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.A0[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.A0[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.A0[o>>>8&255]
i=D.A0[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.A0[b0&255]
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
C.bTN.prototype={}
C.bTO.prototype={
gJ(d){var w=this.a.length
return w},
ard(){return B.rO(this.a,A.iv,null,null)}}
C.bd9.prototype={
vF(d){return C.i9a(d)}}
C.cAV.prototype={
Ny(d){var w=d.w,v=Math.max(1,A.h.cC(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abG(v,t+20,u+16,t,u,B.uy(d.x))},
nK(d){return!1}}
C.bUO.prototype={
cLC(d){if(this.b)throw B.W(B.bd("FontLoader is already loaded"))
this.c.push(d.bG(new C.bUP(),x.F))},
n1(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$n1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$n1)
case 6:w=5
return B.b(p.bF5(f,r),$async$n1)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$n1,v)}}
C.aa_.prototype={
A(d,e){if(e==null)return!1
if(J.bZ(e)!==B.b4(this))return!1
return e instanceof C.aa_&&e.a===this.a},
gX(d){return B.bw(B.b4(this),B.xt(this.a),A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j)},
v(d){var w="<optimized out>#"
if(B.b4(this)===D.hdB)return"["+(w+B.ee(this.a))+"]"
return"[ObjectKey "+(w+B.ee(this.a))+"]"}}
C.a2s.prototype={
S(){return new C.aLK(B.aR(x.N))},
cZi(d){return this.d.$1(d)},
cWZ(){return this.e.$0()}}
C.aLK.prototype={
Y(){this.a3()
this.Q1()},
Q1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cWZ(),$async$Q1)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fk6(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Q1,v)},
a_g(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_g=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fka(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fkb(t))
w=3
return B.b(C.apA(p),$async$a_g)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fkc(t,s,p))
w=4
return B.b(t.Q1(),$async$a_g)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_g,v)},
a_f(d){return this.cvH(d)},
cvH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fk7(t))
s=J.u(d,"id")
w=3
return B.b(C.c4T(J.k(s==null?"":s)),$async$a_f)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fk8(t))
w=1
break}q=C.hjR(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cZi(B.a([q],x.E)),$async$a_f)
case 4:if(t.c==null){w=1
break}t.m(new C.fk9(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a_f,v)},
Q0(d,e){return this.bPs(0,e)},
bPs(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Q0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fk1(q),r,null,!0,!0,x.y),$async$Q0)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fk2(t))
s=s.h(e,"id")
w=4
return B.b(C.apz(J.k(s==null?"":s)),$async$Q0)
case 4:if(t.c==null){w=1
break}t.m(new C.fk3(t))
w=5
return B.b(t.Q1(),$async$Q0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Q0,v)},
cKB(d){var w=B.bk(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iX[B.bM(v)-1]+" "+B.bY(v)},
aTM(d,e){var w=null,v=B.l(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.QG,A.n),w,e,w,w,w,w,w,e)},
aTL(d){return this.aTM(d,44)},
baI(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.QG:u,r=B.l(14),q=B.X(e,t?A.c:A.aE,u,u,u,17),p=x.p
q=B.a([q,A2.AZ,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aE,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.u(q,B.a([A2.AZ,B.p(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bKA,u,u,u)],p))}return B.E(B.az(A.bZ,B.cU(u,B.A(q,A.l,u,A.b9,A.i,0,u,u),u,u,A.b0,new B.o(u,u,u,r,u,s,A.n),A.ha,u,u,u,u,A.qH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fkg(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cpq(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d9.j(0.14):D.a_Y,n=B.l(18),m=p?A.d9:A.dq
m=B.K(m,A.r,p?1.8:1)
w=this.aTL(A.qV)
v=B.d(d.b,q,1,A.a2,q,q,q,P.acy,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aY3,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.QG:q
u=p?q:B.K(A.aT,A.r,1.6)
r=p?D.c1h:q
return B.az(q,B.cU(q,B.A(B.a([w,A.bc,t,B.cU(q,r,q,q,A.b0,new B.o(q,q,u,q,q,v,A.a6),A.h1,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.i,0,q,q),q,q,A.b0,new B.o(o,q,m,n,q,q,A.n),A.h1,q,q,q,A.da,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fk5(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cxi(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.cKB(J.k(o==null?"":o))
o=B.l(18)
w=B.K(A.dq,A.r,1)
v=r.aTL(A.PP)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,P.acy,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aY3,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b7a(A.hC,A.bv,"Bring it back",r.r?q:new C.fkd(r,d))
return B.p(q,B.A(B.a([v,A.bc,t,p,A.bn,r.b7a(A.ej,A.bY,"Delete",r.r?q:new C.fke(r,d))],s),A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.a_Y,q,w,o,q,q,A.n),q,q,q,A.da,D.bEN,q,q,q)},
b7a(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.he(B.az(w,B.p(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
avm(d,e,f){var w=null
return new B.D(D.bDN,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fJH,w,w,w),A.ax,B.d(f,w,w,w,w,w,w,D.fBv,A.K,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cf
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aE(d,A.c_,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aT,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTM(A.zP,46),A.bc,D.bLz],t)
if(j.r)s.push(D.ezh)
s.push(B.aI(i,i,i,i,A.tt,i,i,i,new C.fkj(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.K(A.dq,A.r,1)
o=J.a8(h)
q=B.a([A.T,u,new B.D(D.bHA,s,i),B.p(i,B.A(B.a([j.baI(0,A.zw,"Save",j.a.c.length),j.baI(1,A.I_,"Saved",o.gJ(h))],t),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bGz,A.eC,i,i,i)],t)
if(j.x!=null){u=(j.y?A.bY:A.bv).j(0.12)
s=B.l(14)
r=B.K((j.y?A.bY:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.HT:A.ea
n=B.X(n,p?A.bY:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.W5,i,i,i),1)],t),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bGv,A.hP,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fFm,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fID,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fkk(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.i,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.avm(A.qV,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.cpq(r[l]))
A.d.u(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eyO)
else if(j.e==null)s.push(j.avm(A.a3s,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.avm(A.oD,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cxi(r.gP(r)))
A.d.u(u,s)}q.push(new B.di(1,A.cn,B.cw(u,i,i,A3.anD,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc9w()
p=s?i:D.QG
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b8.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.X(A.zw,m?A.k0:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bHb,B.az(i,B.cU(i,B.A(B.a([k,A.VG,new B.di(1,A.cn,new B.dx(A.dM,A.z,A.f,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.k0:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i),i)],t),A.l,i,A.b9,A.i,0,i,i),i,i,A.b0,new B.o(s,i,i,o,n,p,A.n),A.ha,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.T)
return B.p(i,B.bn(!0,B.x(q,A.l,i,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b9m,i,i,i,i,i,i,i,i)}}
C.oT.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.a_9.prototype={
S(){return new C.aA7(B.a([],x.k),B.f4(null,x.H))},
ge3(){return this.c}}
C.aA7.prototype={
Y(){this.a3()
this.Qb()},
Qb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3s(t.a.c),$async$Qb)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cRg(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Qb,v)},
cDC(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.oD(t.d,new C.cRj(d))
v=w<0
if(v&&C.i6c(d))return t.f
u=t.d
if(v)J.n7(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h9P(new C.cRk(t),v)
return t.f=t.f.bG(new C.cRl(t,d),v).eF(new C.cRm())},
Jo(d,e,f){return this.ciW(0,e,f)},
b0P(d,e){return this.Jo(0,e,!1)},
ciW(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ce(B.ef(new C.cRf(t,e),!1,null,x.H)),$async$Jo)
case 3:w=4
return B.b(t.f,$async$Jo)
case 4:w=5
return B.b(t.Qb(),$async$Jo)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jo,v)},
b03(d){var w=A.o.v(1000*Date.now()),v=d==null?D.dSH:d
this.Jo(0,new C.oT(w,v,new B.V(Date.now(),0,!1)),!0)},
c8Y(){return this.b03(null)},
af_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cRn(),r,!1,!1,!0,null,!1,!1,x.g2),$async$af_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b03(s)
case 1:return B.h(u,v)}})
return B.i($async$af_,v)},
Jn(d,e){return this.bPj(0,e)},
bPj(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cRa(e),s,null,!0,!0,x.y),$async$Jn)
case 3:if(g!==!0){w=1
break}t.m(new C.cRb(t,e))
w=4
return B.b(t.f,$async$Jn)
case 4:w=5
return B.b(C.ahZ(t.a.c,e.a),$async$Jn)
case 5:w=6
return B.b(t.Qb(),$async$Jn)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jn,v)},
DV(d){return this.bHm(d)},
bHm(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cR6(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DV)
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
return B.b(t.b0P(0,d),$async$DV)
case 9:w=5
break
case 7:w=10
return B.b(F.hkv(r,d.b,null),$async$DV)
case 10:w=5
break
case 8:w=11
return B.b(t.Jn(0,d),$async$DV)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DV,v)},
c2i(){var w,v,u,t,s=null,r=[D.dSK,D.dSI,D.dSJ],q=new C.cRd(),p=B.l(26),o=x.V,n=B.a([new B.ab(0,A.G,A.d6.j(0.4),A.eS,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dA8[w]
u=A.c.j(0.18)
t=new B.aP(999,999)
l.push(B.p(s,B.d(v,s,s,s,s,s,s,A.p8,s,s,s),A.f,s,s,new B.o(u,s,s,new B.bf(t,t,t,t),s,s,A.n),s,s,s,s,A.oz,s,s,s))}return B.p(s,B.A(B.a([B.E(B.x(B.a([D.h8S,A.P,B.c_(A.bI,l,A.br,s,6,6),A.aO,B.az(s,B.p(s,D.fiG,A.f,s,s,new B.o(A.c,s,s,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cM,10)],o),s,A.n),s,s,s,s,Y.ao3,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cRc(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.z,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.ca_,A.n),s,s,s,s,D.bHK,s,s,s)},
bHk(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.p(v,B.bv(B.l(6),new B.an(A.a0,v,A.b1,A.t,B.a([new B.dx(A.bX,A.z,A.f,F.aqb(d.b),v),D.eFi,B.ao(v,B.az(v,B.p(v,D.c29,A.f,v,v,D.bal,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cR1(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fyB,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fFy,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cR2(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cR3(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eS(B.a([new B.D(T.amx,B.he(B.az(s,B.p(s,A.atu,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b8.j(0.5),A.J,12)],x.V),E.xd,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gcal(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nx,s,s,s,!0,s,s,s,s,s,D.h8W,s,s,s,1,s,!0)
if(t.e)r=D.be_
else{w=t.c2i()
v=B.a([D.fUX,A.ae],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fy4,s,s,s),A.f,s,s,new B.o(D.bjk,s,s,u,s,s,A.n),s,s,s,s,A.z9,s,s,s))}r=B.a([new B.nN(Aa.a1m,new B.m9(w,s),s),new B.nN(D.bH5,new B.m9(B.A(v,A.l,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.fpU)
else r.push(new B.nN(D.bGx,B.Q1(new B.oX(new C.cRo(t),J.ad(t.d),!0,!0,!0,0,B.tt(),s),D.bdd),s))
r=B.w8(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c6(q,D.bhS,r,s,!1,!1,s,s)}}
C.a_7.prototype={
S(){return new C.aA3(B.a([],x.bx))},
V5(d){return this.d.$1(d)}}
C.aHx.prototype={}
C.aA3.prototype={
b42(d,e,f){var w=$.ax(),v=new B.au(new B.bb(d,A.b7,A.aP),w),u=this.gb0O()
v.aV(0,u)
w=new B.au(new B.bb(e,A.b7,A.aP),w)
w.aV(0,u)
return new C.aHx(v,w,f)},
EI(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cz(A.qF,new C.cQv(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.bb(w.a,A.b7,A.aP),v)
t=m.gb0O()
u.aV(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.bb(w.b,A.b7,A.aP),v)
u.aV(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.bb(w.c,A.b7,A.aP),v)
u.aV(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.bb(p.a,A.b7,A.aP),v)
o.aV(0,t)
n=new B.au(new B.bb(p.b,A.b7,A.aP),v)
n.aV(0,t)
r.push(new C.aHx(o,n,p.c))}if(r.length===0)r.push(m.b42("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpF()
q=r.a
q.V5(q.c)}q=r.d
q===$&&B.c()
w=q.V$=$.ax()
q.R$=0
q=r.e
q===$&&B.c()
q.V$=w
q.R$=0
q=r.f
q===$&&B.c()
q.V$=w
q.R$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.V$=w
s.R$=0
s=t.b
s.V$=w
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
t=B.a([],x.fD)
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.J)(s),++q){p=s[q]
t.push(new F.mW(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rU(n,w,v,t,u)},
Bv(){var w=0,v=B.j(x.H),u=this,t
var $async$Bv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpF()
t=u.a
w=2
return B.b(t.V5(t.c),$async$Bv)
case 2:return B.h(null,v)}})
return B.i($async$Bv,v)},
caj(){this.m(new C.cQu(this))
this.EI()},
b_J(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cQx(w,d,v))
w.EI()},
cak(d,e){var w=A.d.cH(this.w,e)
this.m(new C.cQF())
this.EI()
$.aU.x1$.push(new C.cQG(w))},
Rv(d){return this.cpg(d)},
cpg(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i5().la(80,1400,A.eR),$async$Rv)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Rv)
case 8:p=f
o=q.b.toLowerCase()
n=J.ajz(o,".png")?"image/png":"image/jpeg"
r.m(new C.cQy(d,n,p))
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
return B.i($async$Rv,v)},
yw(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hIW(r,t.gpF()),$async$yw)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cQw(t,s))
t.EI()
case 1:return B.h(u,v)}})
return B.i($async$yw,v)},
cpy(d){var w,v=this,u=null,t=F.fQg(d.c)
if(t==null)return new B.bL(A.a5,u,u,B.hv(D.bW9,D.fXx,new C.cQA(v,d),u),u)
w=x.p
return new B.D(A.cw,new B.an(A.a0,u,A.ad,A.t,B.a([B.bv(B.l(12),B.fX(t,A.z,u,u,A.cm,A.bX,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b7b(A.jN,new C.cQB(v,d)),A.bn,v.b7b(A.cB,new C.cQC(v,d))],w),A.l,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b7b(d,e){var w=null
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(A.hA,B.X(d,A.c,w,w,w,18),w),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.b5,0,w,w,A.cU,w,w,A.ai)},
K2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$K2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bv(),$async$K2)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hkv(s,t.gpF(),new C.cQE(t)),$async$K2)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eS(B.a([new B.D(A.pu,B.hv(D.c_Z,D.h2K,m.gaB9(),B.fs(l,l,l,l,l,l,l,l,l,l,l,A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aI(l,l,l,l,A.att,l,l,l,new C.cQH(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.ZT,l,1,l,l,l,!1,l,!1,E.nx,l,l,l,!0,l,l,l,l,l,D.fYp,l,l,l,1,l,!0),i=AD.aXs(L.lJ,A.c,Ai.Yt,A.oQ,D.fZ9,m.gcai()),h=B.l(18),g=m.gaz6(),f=B.a([new B.ab(0,A.G,A.w.j(0.4),A.i3,12)],x.V)
f=B.az(l,B.p(l,new B.a5(92,142.1818181818182,new B.dx(A.dC,A.z,A.f,F.aqb(m.gpF()),l),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.p(l,B.A(B.a([f,A.eu,B.E(B.x(B.a([D.hax,A.ax,B.d(F.hiR(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fLA,l,l,l),A.T,B.df(E.asL,l,E.aYP,g,B.bp(A.d6,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(E.ZT,l,l,h,l,l,A.n),l,l,l,l,A.bl,l,l,l)
g=m.d
g===$&&B.c()
g=B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.p6,!0,A.a7,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a7,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.P,w,A.P,B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a7,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aP(16,16)
u=new B.ay(L.lJ.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fM8,l,l,l)
r=B.aI(l,l,l,l,D.bZz,l,l,l,v===0?l:new C.cQI(m,v),l,l,l,l,"Move up",A.ch)
q=h.length
p=B.aI(l,l,l,l,D.c5k,l,l,l,v===q-1?l:new C.cQJ(m,v),l,l,l,l,"Move down",A.ch)
q=q===1?l:new C.cQK(m,v)
o=new B.aP(12,12)
n=new B.aP(12,12)
f.push(B.p(l,B.x(B.a([new B.c8(A.aM,A.e,A.i,A.l,l,A.p,l,0,B.a([s,A.b4,r,p,B.aI(l,l,l,l,B.X(A.ej,A.pq,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ch)],k),l),B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e9(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bf(o,o,o,o),A.du),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.ce,!0,A.a7,l,A.ao,l,l,l,l),A.am,m.cpy(h[v]),B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e9(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bf(n,n,n,n),A.du),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a7,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(E.nx,l,new B.bH(u,u,u,u),new B.bf(w,w,w,w),l,l,A.n),l,l,new C.aa_(g),A.el,D.bF4,l,l,l))}return B.oU(!0,B.c6(j,E.akv,B.cw(f,l,l,D.bFz,l,l,A.ah,!1),l,!1,!1,i,l),new C.cQL(m),x.C)}}
C.aA5.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.bY:E.nx,q=B.l(16),p=B.l(16),o=s?A.aA.j(0.08):A.c.j(0.04)
s=s?A.aA.j(0.16):A.d6.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eP,B.aG(!1,A.a3,!0,t,B.aM(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(u.e,t,t,t,t,t,t,D.aXl,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eI,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.ai),t)}}
C.a_o.prototype={
S(){return new C.aAU()},
ak(d){return this.e.$1(d)}}
C.aAU.prototype={
afL(d){return this.coJ(d)},
coJ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$afL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(X.DJ(85,1024),$async$afL)
case 3:s=f
if(s==null||t.c==null){w=1
break}t.m(new C.d91(t,d,A.cJ.aL(A.a.b1(s,A.a.co(s,",")+1))))
case 1:return B.h(u,v)}})
return B.i($async$afL,v)},
PP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$PP=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:g=r.d
f=r.e
if(g==null||f==null||r.w){w=1
break}r.m(new C.d8Y(r))
t=4
w=7
return B.b($.pe().iG(0,r.a.c.a[1]),$async$PP)
case 7:q=a0
k=J.er(J.tw(q),q.byteOffset,q.byteLength)
j=x.N
w=8
return B.b(B.i1(B.I(["action","geminiVirtualOutfit","prompt","You are given three pictures. Picture 1 is a traditional Congolese wedding painting of a man and a woman. Picture 2 is a photo of the real man. Picture 3 is a photo of the real woman. Redraw picture 1 exactly: the same size and framing, the same pose, clothes, leopard skin, beads, head wrap, jewellery, staff, colours, lighting, background and painted style. Change only the two faces: the man in the painting gets the face of the man in picture 2, and the woman gets the face of the woman in picture 3, so each is clearly recognisable, with their own skin tone and features, painted in the same style as the rest of the picture. Keep them smiling at each other as in picture 1. Do not add any words, letters or frames. Return only the finished picture.","personOnly",!1,"images",B.a([B.I(["mimeType","image/jpeg","data",A.cK.gcn().aL(k)],j,j),B.I(["mimeType","image/jpeg","data",A.cK.gcn().aL(g)],j,j),B.I(["mimeType","image/jpeg","data",A.cK.gcn().aL(f)],j,j)],x.gE)],j,x.z),!1,!1,!1,!1,E.Cu),$async$PP)
case 8:p=a0
j=p
if(j==null)i=null
else{k=J.u(j,"imageBase64")
k=k==null?null:A.a.i(J.k(k))
i=k}o=i==null?"":i
if(J.ad(o)===0){k=p
if(k==null)k=null
else{k=J.u(k,"error")
k=k==null?null:J.k(k)}if(k==null)k="The AI could not make the picture. Please try again."
throw B.W(k)}if(r.c==null){w=1
break}r.m(new C.d8Z(r))
w=9
return B.b(B.bO(E.a0J,null,x.H),$async$PP)
case 9:n=C.hCj(r.a.d)
if(n==null||n.at==null)throw B.W("This paper has no picture to change.")
k=n.at
k.toString
m=C.ip1(k,A.cJ.aL(o),r.a.c)
r.a.ak(new C.d9_(n,m))
k=r.c
if(k==null){w=1
break}B.a6(k,!1).ek()
r.c.K(x.q).f.T(D.fuO)
t=2
w=6
break
case 4:t=3
e=s.pop()
l=B.ac(e)
if(r.c==null){w=1
break}r.m(new C.d90(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PP,v)},
cvF(){var w,v,u,t=this,s=C.hCj(t.a.d)
if(s==null)return
w=A.d.aU(t.a.d.z,new C.d92())
v=t.a
v=w?v.c.a[0]+"_notitle":v.c.a[0]
u=$.fF9.h(0,v)
if(u==null)return
t.a.ak(new C.d93(s,u))
v=t.c
v.toString
B.a6(v,!1).ek()
t.c.K(x.q).f.T(D.fq8)},
b9q(d,e,f){var w=null,v=this.w?w:new C.d94(this,f),u=B.l(18),t=B.l(18),s=e==null,r=B.K(s?A.aL:D.wq,A.r,1.4),q=s?w:B.alx(A.bX,new B.pu(e,1),w)
return B.E(B.aM(!1,u,!0,B.p(A.b3,B.p(w,B.A(B.a([B.X(s?A.wT:A.ea,D.wq,w,w,w,16),A.bn,B.d(d,w,w,w,w,w,w,A.kq,w,w,w)],x.p),A.l,w,A.b9,A.i,0,w,w),A.f,w,w,D.b9Z,w,w,w,w,A.hy,w,w,1/0),A.f,w,w,new B.o(D.bxl,q,r,t,w,w,A.n),w,150,w,w,w,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,w),1)},
B(d){var w=this,v=null,u=w.d!=null&&w.e!=null&&!w.w,t=B.l(26),s=B.K(D.ajJ,A.r,1),r=x.p,q=B.a([B.as(B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),A.aB,D.h4f,A.am,B.d("Add a clear photo of the man and of the woman (faces looking at the camera). The AI paints the same traditional picture with your faces.",v,v,v,v,v,v,B.m(v,v,A.c.j(0.65),v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),A.aB,B.A(B.a([w.b9q("Man (Mume)",w.d,!0),A.bc,w.b9q("Woman (Mke)",w.e,!1)],r),A.l,v,A.e,A.i,0,v,v)],r),p=w.f
if(p!=null)A.d.u(q,B.a([A.aB,B.A(B.a([D.foI,A.as,B.E(B.d(p,v,v,v,v,v,v,A.xG,v,v,v),1)],r),A.l,v,A.e,A.i,0,v,v)],r))
p=w.r
if(p!=null)A.d.u(q,B.a([A.af,B.d(p,v,v,v,v,v,v,D.fEh,v,v,v)],r))
q.push(A.aO)
r=u?w.gc6S():v
q.push(B.df(A.DE,v,B.d(w.w?"Painting\u2026":"Make our picture",v,v,v,v,v,v,v,v,v,v),r,B.bp(D.wq,D.bxV,v,v,P.GC,v,A.co,v,v,v,A.lZ,v)))
q.push(A.P)
q.push(B.bP(!1,D.h4h,v,v,!0,v,v,v,w.w?v:w.gcvE(),v,v))
return B.bn(!0,B.p(v,B.x(q,A.al,v,A.e,A.N,0,A.p),A.f,v,v,new B.o(A.av,v,s,t,v,v,A.n),v,v,v,A.bS,D.bGQ,v,v,v),!0,!1,A.ag,!0,!0)}}
C.asw.prototype={
S(){return new C.aGk()}}
C.aGk.prototype={
Y(){this.a3()
this.a00()},
bz(d){this.bK(d)
if(d.c!=this.a.c)this.a2q()},
a2q(){var w=0,v=B.j(x.H),u=this,t
var $async$a2q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dN(t,x.H),$async$a2q)
case 2:u.d=null
if(u.c!=null)u.m(new C.enr(u))
w=3
return B.b(u.a00(),$async$a2q)
case 3:return B.h(null,v)}})
return B.i($async$a2q,v)},
a00(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a00=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZN(B.cD(n,0,null),new B.Qo(!0))
r.d=o}else{o=B.fo("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iY(0).dg(0,A.qC),$async$a00)
case 7:if(r.c==null){w=1
break}r.d.u2(!1)
r.m(new C.enp(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.enq(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a00,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
cdC(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hi(0)
w.m(new C.ens(w))}else{v.qv(0)
w.m(new C.ent(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.l(8*n.d)
m=B.a([D.jH.j(0.92),D.MU.j(0.95)],x.O)
w=B.K(A.c3.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qW,A.c3,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bN(new B.o(o,o,w,n,o,new B.a7(A.ay,A.aC,A.x,m,o,o),A.n),A.bk,B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.N,0,A.p),o,o,o),o)}if(p.f)return B.as(B.X(A.arV,A.aE,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.beS
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([new B.dx(A.bX,A.z,A.t,new B.a5(r,q,new B.AL(s,o),o),o)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.p(o,B.X(A.he,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bv(n,new B.an(A.a0,o,A.b1,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdB(),o,o,o,o,o,o,!1,A.a4)}}
C.vg.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.hb.prototype={}
C.yV.prototype={}
C.QT.prototype={
gd2(d){return this.at}}
C.aeV.prototype={
B(d){var w=C.ip0(this.d,new C.e9O(),x.dc)
return B.pn(new C.e9P(this,B.P(d).ax.a===A.I,w,d),!0,0.72,0.9,0.5,!1,null)}}
C.biQ.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.l(18),r=B.l(18),q=B.K(D.jH.j(t?0.35:0.4),A.r,1),p=t?D.NA:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.l(10),l=B.K(A.c3.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dL,6)],o)
w=this.c
o=B.E(B.p(u,new B.fH(0.5625,C.ioY(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aoz,u,u,u,u),1)
m=D.jH.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jH,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a3,!0,u,B.aM(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cS,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aE:D.bqY,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.amO,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}}
C.a8O.prototype={
a7(){return"NgmyHatiPinResult."+this.b}}
C.yi.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.oc.prototype={}
C.bmp.prototype={
a09(d){var w=null
return new B.bL(A.a5,w,w,B.BX(A.z,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ce5(){return this.a09(1)},
azO(d){var w=null,v=B.l(8),u=B.K(A.iy,A.r,0.9)
return B.p(A.z,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ai5,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.iy,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.iy,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.r(-8.36,0))],u),A.l,v,A.b9,A.i,0,v,v),A.ax,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azO("TAARIFA ZA WANANDOA"),A.am,w.ce5(),A.cS,w.a09(0.9),A.cS,w.a09(0.7),A.P,w.azO("TAMKO LA MAKUBALIANO"),A.fE,w.a09(1),A.cS,w.a09(0.95),A.P,w.azO("MASHAHIDI"),A.b4,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.i,0,A.p)}}
C.aeY.prototype={
B(d){return B.pn(new C.esd(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.agE.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.l(18),o=B.l(18),n=B.K(A.aF.j(q?0.35:0.4),A.r,1),m=q?D.bqt:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.l(10),i=B.K(A.aF.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dL,6)],l)
w=this.c
v=C.hjp(w.a)
if(v==null)v=A.d.gH(D.Ti)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fH(0.5625,new B.an(A.a0,r,A.b1,A.t,B.a([B.bS(0,B.fX(C.hjo(v.d),A.z,r,r,A.cm,A.bX,!0,r,!1,r,r),0,0,0),new B.D(A.ans,new C.bmp(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aoz,r,r,r,r),1)
j=A.aF.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:P.GC,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a3,!0,r,B.aM(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cS,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aE:D.biz,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.amO,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.hE.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9s.prototype={}
C.Xh.prototype={
S(){var w=$.ax()
return new C.aGB(new B.cx(null,x.B),new B.au(A.aw,w),new B.au(A.aw,w),B.n2(0,null,null),A.d.gH(D.a6B),D.e2v,B.a([],x.L),B.a([],x.e9))}}
C.aGB.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.Ac(C.fUl(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.aSq().bG(new C.eva(v),w)
$.pe().iG(0,"assets/images/ngmy_logo.png").bG(new C.evb(v),w).eF(new C.evc())},
t(){var w=this,v=w.e,u=$.ax()
v.V$=u
v.R$=0
v=w.f
v.V$=u
v.R$=0
w.r.t()
w.a2()},
afW(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i5().la(88,1600,A.eR),$async$JH)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JH)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hJc(m,p),$async$JH)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bGV(new B.pu(o,1),m),$async$JH)
case 10:if(r.c!=null)r.m(new C.euN(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ac(k)
r.afW("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JH,v)},
XZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hJc(s,q),$async$XZ)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bGV(new B.pu(r,1),s),$async$XZ)
case 4:if(t.c!=null)t.m(new C.euJ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XZ,v)},
afX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.euU(q))
t=4
q.a.toString
p=C.itD()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afX)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.euV(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ac(i)
q.afW(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.euW(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afX,v)},
a0e(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a0e=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.euP(q,i))
t=4
q.a.toString
p=C.itC()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a0e)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.euQ(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ac(g)
if(q.c!=null)q.m(new C.euR(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.euS(q))
$.aU.x1$.push(new C.euT(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0e,v)},
cel(d){this.m(new C.euO(this,d))},
EY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.euL(q))
t=4
w=7
return B.b($.aU.gmy(),$async$EY)
case 7:w=8
return B.b(B.bO(A.n_,null,x.H),$async$EY)
case 8:k=$.aU.ap$.x.h(0,q.d)
p=k==null?null:k.gbf()
if(!(p instanceof B.qr))throw B.W("The page is not ready yet.")
w=9
return B.b(p.lX(1800/p.gZ(0).a),$async$EY)
case 9:o=e
w=10
return B.b(o.hj(A.hf),$async$EY)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(Ab.ai0(J.eR(A.dI.gaT(n)),"ngmy_news.png","image/png"),$async$EY)
case 11:m=e
q.afW(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
q.afW(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.euM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EY,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.ls,a2,a2,a2,new C.ev1(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.c0w,a2,a2,a2,new C.ev2(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.oP,a2,a2,a2,a4?a1.gb2a():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eS(v,a2,a2,!0,!0,A.Cp,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.fiR,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eS,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fH(0.7142857142857143,new B.dx(A.dC,A.z,A.f,new B.e8(new C.b3N(t,s,r,a1.x,a2),a1.d),a2),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,A_.u2,a2,a2,a2)
t=a1.as?a2:a1.gcek()
t=B.a([B.E(B.df(D.c1i,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bp(D.uw,a2,a2,a2,A.c,A.hg,a2,a2,new B.ba(B.l(14),R.w5),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.l(10),B.fX(r,A.z,a2,a2,A.cm,A.bX,!1,48,!1,a2,48),A.aq)
A.d.u(t,B.a([A.as,r,B.aI(a2,a2,a2,a2,D.bYQ,a2,a2,a2,a1.as?a2:a1.gbNU(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,A_.u2,a2,a2,a2)
q=B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVD("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a7,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dtO[o]
p.push(B.n8(a2,D.uw,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pZ,a2,a2,a2),A.hs,new C.ev3(a1,n),a2,a2,R.w5,a2))}p=B.c_(A.bI,p,A.br,a2,6,8)
m=a1.Q
m=B.c_(A.bI,B.a([D.h94,A.bc,B.jD(a2,a2,a2,D.fTE,a2,new C.ev4(a1),m==="en",a2,a2,a2,a2),A.ae,B.jD(a2,a2,a2,D.fTz,a2,new C.ev5(a1),m==="sw",a2,a2,a2,a2)],w),A.w_,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,A_.u2,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cY(D.a6B,0,B.dD(10,"count",x.r),j),h=i.$ti,i=new B.bR(i,i.gJ(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aU4(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.cY(D.a6B,10,a2,j),h=j.$ti,j=new B.bR(j,j.gJ(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aU4(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gcen()
h=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cw,s,a2),t,A.aB,new B.D(A.cw,r,a2),q,A.P,p,A.T,m,A.aB,new B.D(A.cw,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aO,B.az(a2,B.p(A.z,B.A(B.a([D.c1c,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fF,a2,a2,a2)],w),A.l,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.vg,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e4,B.A(B.a([D.dNo,A.as,D.bLX],w),A.l,a2,A.e,A.i,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a9:A.a5
q=e?A.b8.j(0.35):D.uw
p=new B.aP(16,16)
d=new B.ay(A.bw,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.p(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fJq,a2,a2,a2),A.f,a2,Ac.Ye,new B.o(q,a2,new B.bH(d,d,d,d),new B.bf(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cw,A.hP,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.deE[o]
t.push(B.n8(a2,D.uw,B.d(a0,a2,a2,a2,a2,a2,a2,A.L5,a2,a2,a2),A.hs,new C.ev6(a1,a0),a2,a2,R.w5,a2))}u.push(B.c_(A.bI,t,A.br,a2,6,8))
u.push(A.T)
t=B.E(B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVD("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ev7(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a7,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcem()
u.push(B.A(B.a([t,A.ae,B.IK(A.zT,s,B.ne(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.i,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb2a()
u.push(B.df(A.oP,a2,D.h4v,t,B.bp(A.dn,a2,a2,a2,a2,A.KM,a2,a2,new B.ba(B.l(16),A.a1),a2,a2,a2)))
A.d.u(v,u)}v=B.a([B.cw(v,a1.r,a2,A.anc,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.K(E.kx.j(0.5),A.r,1)
v.push(B.bS(0,B.ec(B.as(B.p(a2,B.A(B.a([E.abz,A.eu,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jC,a2,a2,a2)],w),A.l,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.Ce,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bI1,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.Cp,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aVD(d){var w=null
return B.bA(w,new B.b6(4,B.l(14),A.a1),w,A.eX,w,w,w,w,!0,w,w,w,w,w,w,D.uw,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A1.F7,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aU4(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b1(d.f),p=s?A.bE:A.bw
p=B.K(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.kX,t,t,t,t),A.fE],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bE1,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.j9,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.p(t,B.x(w,A.l,t,A.b9,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iS,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.euK(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ac.prototype={
bfP(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ac(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cPl(d){var w=null
return this.bfP(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aFf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ckw(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gP(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cku(),B.U(w).k("N<1,n>")).c_(0,new C.ckv())
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
return this.bfP(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gGb(d){return this.f}}
C.tS.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cd.prototype={
a7(){return"NewsFrame."+this.b}}
C.lG.prototype={}
C.b3N.prototype={
t2(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b2c(d,e,f,g){return this.t2(d,e,null,1.25,f,A.bo,g)},
QO(d,e,f,g,h){return this.t2(d,e,f,1.25,g,A.bo,h)},
azU(d,e,f,g,h){return this.t2(d,e,null,f,g,A.bo,h)},
azT(d,e,f,g,h){return this.t2(d,e,f,g,0,A.bo,h)},
b2e(d,e,f,g,h){return this.t2(d,e,null,f,0,g,h)},
cer(d,e,f,g,h,i){return this.t2(d,e,f,g,0,h,i)},
azS(d,e,f,g){return this.t2(d,e,null,f,0,A.bo,g)},
ag_(d,e,f){return this.t2(d,e,null,f,0,A.bo,A.d0)},
b2d(d,e,f,g,h){return this.t2(d,e,f,g,0,h,A.d0)},
ceq(d,e,f,g){return this.t2(d,e,null,f,0,g,A.d0)},
cep(d,e,f,g){return this.t2(d,e,f,g,0,A.bo,A.d0)},
ag0(d,e,f,g,h,i){return this.t2(d,e,f,g,h,A.bo,i)},
b2b(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iF(new B.et(d,u,u,A.cN,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a7,A.c1,new B.jo(1),u,u,h,u,A.c2,u,A.cx)
v.nB(g)
if(!v.b.a.c.gaH1())return w
w-=2}return j},
afY(d,e,f,g,h,i,j,k){return this.b2b(d,e,f,g,h,i,j,k,A.bo)},
aC4(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.u(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
aC3(d){return this.aC4(null,!1,d)},
aiY(d,e){return this.aC4(null,d,e)},
cwp(d,e){return this.aC4(d,!1,e)},
gb4p(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaYk(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pv(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afY(w.gaYk(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaYk(),v,g,A.a2,v,v,v,w.azT(u,t,f,1.02,A.O),e,v,v)},
aYp(d){return this.Pv(d,A.K,null,2,78,30)},
ad7(d,e,f,g,h){return this.Pv(d,e,null,f,g,h)},
c2b(d,e,f,g,h){return this.Pv(d,A.K,e,f,g,h)},
c2a(d,e,f){return this.Pv(d,A.K,null,e,f,30)},
SN(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jK,B.d(s,u,g,A.a2,u,u,u,v.b2d(w,v.b2b(t,w,A.d0,d,g,h,15,1.2,A.cL),f,1.2,A.cL),e,u,u),u)},
bam(d){return this.SN(d,A.K,null,3,24)},
aDz(d,e,f,g){return this.SN(d,e,null,f,g)},
cE5(d,e,f){return this.SN(d,A.K,e,3,f)},
ban(d,e){return this.SN(d,e,null,3,24)},
cE3(d,e){return this.SN(d,A.K,null,3,e)},
cE4(d,e,f){return this.SN(d,e,null,3,f)},
atn(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f3,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QO("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v)},
Op(){return this.atn(null,!0)},
atm(d){return this.atn(null,d)},
bJO(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.ig,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.ceq(this.d.as,13.5,1.2,A.cL),e,w,w),w),w)},
wc(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb4p(),h=A.o.ar(j.bB(B.c0(B.bD(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.igY(Math.max(1,B.bD(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b2c(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afY(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afY(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eT,l,l,l,m.ag0(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.l,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bG8(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.j_,A.i,0,l,l),A.am,m.aiY(!0,3)],s),A.l,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eu,B.E(B.d(i,l,1,A.eT,l,l,l,m.azS(v,u*0.9,1,A.O),l,l,l),1)],w),A.l,l,A.e,A.i,0,l,l),A.T,B.A(B.a([B.d(C.bG8(j),l,l,l,l,l,l,m.QO(k,13,B.b1(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.j_,A.i,0,l,l),A.P,m.cwp(B.b1(h),3)],w),A.l,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb4p()
v=B.d("NGMY",l,l,l,l,l,l,m.azU(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eK(A.z,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.t2(k,r*0.72,o,1.05,-0.5,A.cL,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b4,new B.di(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ag0(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.O),A.e2,l,l),l)],n),A.l,l,A.e,A.i,0,l,l),A.P,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.j_,A.i,0,l,l)
t=m.aiY(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azS(v,u,1,A.O),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ax,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aiY(!0,1.4),A.ax,B.d(C.bG8(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ax,m.aC3(3)],h),A.l,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azU(v,u,1,3,A.O),A.K,l,l),A.P,m.aiY(!0,1.2),A.ax,B.A(B.a([B.d(C.bG8(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.j_,A.i,0,l,l),A.ax,m.aC3(3)],h),A.l,l,A.e,A.i,0,A.p)}},
aek(d){return this.wc(d,!1)},
afZ(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.l(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ag0("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
ceo(d,e){return this.afZ(d,null,e,null)},
b_B(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b1(this.d.w).j(0.75),s=this.azT("Roboto",15,t,1,A.cD),r=B.X(E.aqb,t,w,w,w,18),q=A.a.aA(A.oU[B.bM(v)-1],0,3),p=A.a.b0(A.o.v(B.fV(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bY(v)+", "+B.bD(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.hc,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w)},
ayy(){return this.b_B(A.n5)},
b7o(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ag0("Roboto",this.afY(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aC7(d,e,f){return this.b7o(d,e,f,30)},
aDC(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.t5,B.d(v,w,e,A.a2,w,w,w,this.cep("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
bar(d){return this.aDC(d,3,22)},
cEg(d,e){return this.aDC(d,e,22)},
ul(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fX(r,A.z,s,s,A.cm,A.bX,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BG(D.bKR,w,s)
if(v==="sepia")w=new B.BG(D.bKQ,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.X(A.wT,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bN(new B.o(s,s,s,s,s,new B.bT(A.z,0.95,A.x,s,0,B.a([A.L,A.ZP.j(0.38)],x.O),s,s),A.n),A.bk,s,s))
return new B.a5(d,e,new B.an(A.a0,s,A.b1,A.t,v,s),s)},
r1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.K(B.b1(i),A.r,3)
i=B.K(B.b1(i),A.r,1)
return B.p(j,B.p(j,k.ul(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.eC,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.lQ,j,j,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.euy,14)],x.V)
v=k.ul(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eK(A.z,-0.035,B.p(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b2d(i.as,13.5,D.bki,1.1,A.cL),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(D.bon,j,j,j,w,j,A.n),j,e,j,j,D.bFu,j,j,d),j)
case 3:w=B.l(30)
i=B.K(B.b1(i.x),A.r,5)
return B.p(j,B.bv(B.l(25),k.ul(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.K(B.b1(i.x),A.r,6)
i=B.b1(i.f)
v=t-10
return new B.a5(d,e,B.as(B.p(j,B.i3(k.ul(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a6),j,t,j,j,A.lQ,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ab(0,A.G,A.w.j(0.3),D.eue,10)],x.V)
return B.eK(A.z,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bS(0,B.p(j,k.ul(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.tc,j,j,j),0,0,0),B.ao(j,B.eK(A.z,-0.6,B.p(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ao(-10,B.eK(A.z,-0.6,B.p(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b1(i.x)
return new B.a5(d,e,B.b5(B.o0(k.ul(d,e),A.aq,D.hEr),new C.bfo(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ul(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.h.bh(s));++m){l=new B.aP(2,2)
n.push(B.p(j,j,A.f,j,j,new B.o(A.bO,j,j,new B.bf(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c8(A.aM,A.r0,A.i,A.l,j,A.p,j,0,n,j),j))}return B.p(j,new B.an(A.a0,j,A.b1,A.t,w,j),A.f,A.eo,j,j,j,e,j,j,D.bK6,j,j,d)
case 8:w=d/2
v=B.xF(A.fR,new B.aP(w,w))
i=B.K(B.b1(i.x),A.r,5)
w-=5
return B.p(j,B.bv(B.xF(A.iF,new B.aP(w,w)),k.ul(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ab(0,A.G,A.w.j(0.35),A.fQ,22)],x.V)
return B.p(j,k.ul(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bS,j,j,d)
case 10:return new B.a5(d,e,B.o0(k.ul(d,e),A.aq,D.hMn),j)
case 0:i=B.K(B.b1(i.w),A.r,2.4)
return B.p(j,k.ul(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.eC,j,j,d)}},
aRy(d,e){return this.d.e===D.TV?A.bM:this.bJO(d,e)},
Xv(d){return this.aRy(d,A.K)},
gaCS(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCR(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b2e(v.Q,19,1.15,A.cL,A.O),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QO("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.ax)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.ag_(v.as,13,1.25),n,n,n),1))
A.d.u(q,r)}return B.p(n,B.ji(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcmL(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaO(d,e,f,g){return B.cm(new C.ckx(this,e,d,f,g))},
aaN(d){return this.aaO(d,22,!0,18)},
XI(d,e){return this.aaO(d,22,!0,e)},
aSE(d,e,f){return this.aaO(d,22,e,f)},
bLO(d,e,f){return this.aaO(d,e,!0,f)},
bds(d,e,f,g){return B.cm(new C.cky(this,e,d,g,!0,f))},
clw(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.aek(824),A.aB,k.aYp(824),k.bam(824),A.P,k.Op(),A.af,B.as(k.r1(824,360),j,j,j),k.Xv(824),A.af,B.E(k.aaN(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.aek(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.ad7(440,A.b6,3,62,26),k.aDz(440,A.b6,2,20),A.b4,k.atn(B.b1(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.KN,B.x(B.a([k.r1(362,310),k.Xv(362)],w),A.l,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.T,k.aC3(2),A.af,B.E(k.aaN(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.wc(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.c2b(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cE5(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.l,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.CN,j,j,j)
u=B.a([B.as(k.r1(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.TV){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.azT(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lP,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.P,k.Op(),A.T,B.E(k.XI(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.wc(824,!0)
w=k.r1(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b3,j,A.ad,A.t,B.a([w,B.ao(0,B.p(j,k.Pv(780,A.b6,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a7(A.aY,A.b3,A.x,v,j,j),A.n),j,j,j,j,D.bIk,j,j,j),j,j,0,0,j,j)],u),j),k.ban(824,A.b6),A.P,k.Op(),A.T,B.E(k.aaN(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.aek(824),A.aB,k.aYp(824),k.bam(824),A.P,k.Op(),A.af,B.E(k.bds(3,300,B.x(B.a([k.r1(300,300),k.Xv(300)],h),A.l,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.wc(824,!0)
v=x.p
u=B.x(B.a([k.ad7(440,A.b6,3,62,26),k.aDz(440,A.b6,2,20),A.b4,k.atm(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bx,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aVb,new B.D(A.ig,k.r1(364,h.e===D.TV?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aB,B.E(k.XI(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.aek(824),A.af,k.c2a(824,2,70),k.cE3(824,21),A.P,k.Op(),A.af,B.E(k.bds(3,340,B.as(k.r1(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.wc(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bG8(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QO(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b2e(h.Q,24,1.15,A.cL,A.O),j,j,j))
v.push(A.b4)
if(k.gaCS())v.push(k.aCR(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.amM,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.ad7(570,A.b6,3,62,28),k.cE4(570,A.b6,20),A.P,k.atm(!1),A.P,B.as(k.r1(570,330),j,j,j),k.Xv(570),A.T,B.E(k.aSE(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.wc(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QO(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.p(j,B.x(B.a([t,A.am,k.Pv(788,A.b6,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bGA,j,j,j),k.ban(824,A.b6),A.T,B.as(k.r1(824,310),j,j,j),k.Xv(824),A.P,k.Op(),A.T,B.E(k.aaN(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.wc(824,!0),A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([k.r1(824,430),B.ao(18,k.ceo(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.aC7(824,3,66),k.bar(824),A.af,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ayy(),A.aB,B.E(k.XI(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.wc(824,!0),A.bx,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afZ(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aO,k.b7o(410,4,58,28),k.aDC(410,6,20),A.b4],w),A.E,j,A.e,A.i,0,A.p),j),Y.aVc,k.r1(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aB,k.ayy(),A.aO,B.E(k.XI(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.wc(824,!0)
v=k.r1(824,420)
u=B.hU8(-0.25)
t=B.b1(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ao(22,B.fA(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cer(i,30,A.c,1,A.cL,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bIA,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.aC7(824,3,62),k.bar(824),A.af,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.b_B(A.lU),A.aB,B.E(k.XI(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.wc(824,!0)
u=h.w
t=x.p
w=B.a([k.r1(824,380),B.ao(j,k.afZ(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aC7(824,2,60)
r=k.cEg(824,2)
p=k.ayy()
o=B.E(k.aSE(2,!1,18),1)
n=B.K(B.b1(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ad,A.t,w,j),A.aO,s,r,A.T,p,A.aB,o,A.af,B.p(j,B.A(B.a([B.bv(B.l(14),k.ul(150,104),A.aq),A.p4,B.E(B.x(B.a([k.afZ("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.azS(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.N,0,A.p),1),B.X(A.eI,B.b1(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.wc(824,!0),A.bx,k.ad7(824,A.b6,3,62,30),k.aDz(824,A.b6,2,22),A.T,k.atm(!1),A.T,B.as(k.r1(824,330),j,j,j),k.aRy(824,A.b6),A.aO,B.E(k.bLO(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,new B.bN(new B.o(s,s,s,s,s,new B.a7(A.ay,A.aC,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bk,s,s),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b5(s,s,s,new C.bbS(B.b1(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bJ5,B.x(B.a([B.E(t.clw(),1),A.P,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fE,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b2c(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QO(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.j_,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b1(w)
n.push(B.bS(0,new B.dt(!0,B.b5(s,s,s,new C.buZ(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b1(p).j(0.75)
v=B.K(B.b1(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.i3(B.fX(q,A.z,s,s,A.cm,A.bX,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n5,B.b1(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azU(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,new B.dt(!0,B.d3(B.p(s,B.A(o,A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bKe,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.ji(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.bfp.prototype={
jt(d){return C.hxp(d)},
kb(d){return!1}}
C.bfo.prototype={
a4(d,e){var w,v=C.hxp(e)
$.S()
w=B.L()
w.r=this.b.gp(0)
w.b=A.aa
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bxv.prototype={
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
u.E(new B.bx())
return u},
kb(d){return!1}}
C.bbS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e0()
o.cU(7)
$.S()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.O(new B.r(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.r(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.san(new B.bT(A.z,0.5,A.x,p,0,B.a([A.Z9.j(0.13),A.L],v),p,p).aD(0,B.bW(r,q)))
d.O(r,q,w)}w.san(p)},
aE(d){return!1}}
C.buZ.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fE(u,A.cx,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a7,A.c1,u,A.dJ,A.c2)
s.ep()
w=d.c
J.bt(w.save())
w.translate(t/2,e.b*0.52)
d.jq(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.r(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.Xi.prototype={
S(){return new C.aGE()}}
C.aGE.prototype={
Y(){var w=this
w.a3()
B.fKs(w.a.c,null).bG(new C.evX(),x.g7).bG(new C.evY(w),x.a)
w.a.toString},
gaQk(){var w=D.aAT[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazV(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaQk()
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
q=A.h.D(v*p,q,p-q)-q
w=A.h.D(u*o,w,o-w)-w
return new B.a4(q,w,q+s,w+t)},
a0g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.evK(r))
t=4
q=r.gazV()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.q8(new B.pJ())
m=B.zu(n,null)
i=B.L()
i.z=A.h2
m.nt(g,q,new B.a4(0,0,0+p,0+o),i)
w=7
return B.b(n.o8().xI(J.hmz(p),J.hmz(o)),$async$a0g)
case 7:l=e
w=8
return B.b(l.hj(A.hf),$async$a0g)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.N(J.eR(J.tw(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.evL(r))
r.c.K(x.q).f.T(D.fsB)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0g,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.ls,s,s,s,new C.evR(d),s,s,s,s,s,s),p=x.p
q=B.eS(B.a([B.bP(!1,D.h77,s,s,!0,s,s,s,t.y||r==null?s:t.gces(),s,s)],p),s,s,!0,!0,A.Cp,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.hb9,s,s,s,1,s,!0)
if(r==null)p=A.m6
else{w=B.E(new B.D(A.bT,B.as(new B.fH(t.gaQk(),B.cm(new C.evS(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iS,B.jD(s,s,s,B.d(D.aAT[u].a,s,s,s,s,s,s,A.ace,s,s,s),s,new C.evT(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bn(!0,B.x(B.a([new B.a5(s,40,B.cw(v,s,s,s,s,s,A.aM,!1),s),B.A(B.a([D.c20,B.E(B.l5(s,s,s,6,1,new C.evU(t),t.f),1),D.c1A],p),A.l,s,A.e,A.i,0,s,s),D.h4o,A.am,B.bP(!1,D.h44,s,s,!0,s,s,s,new C.evV(t,d),s,s)],p),A.l,s,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.a_3,s,s,s,s,s,s,D.bFX,s,s,s)],p),A.l,s,A.e,A.i,0,A.p)}return B.c6(q,A.Cp,p,s,!1,!1,s,s)}}
C.beX.prototype={
a4(d,e){var w
$.S()
w=B.L()
w.z=A.cm
return d.nt(this.b,this.c,new B.a4(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1r.prototype={
S(){var w=$.ax(),v=x.B
return new C.aI4(new B.au(A.aw,w),new B.au(new B.bb("NGMY",A.b7,A.aP),w),new B.cx(null,v),new B.cx(null,v),A.d.gH(D.a7e),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.r),A.K)}}
C.p2.prototype={}
C.aI4.prototype={
gaYx(){var w,v,u=this
if(u.p1)w=new B.rG(1,u.p2,0.9,u.p3).je().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.h.U(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.f5h(w))},
t(){var w=this.d,v=$.ax()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a2()},
ZM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.pe().iG(0,"assets/images/ngmy_logo.png"),$async$ZM)
case 7:q=e
p=J.eR(J.tw(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bGV(new B.pu(p,1),o),$async$ZM)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f49(r,p))
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
return B.i($async$ZM,v)},
QR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i5().la(92,1800,A.eR),$async$QR)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QR)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bGV(new B.pu(p,1),n),$async$QR)
case 9:if(r.c==null){w=1
break}r.m(new C.f4x(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ac(l)
n=r.c
if(n!=null)n.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QR,v)},
b6L(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aO=w.aR=w.aK=w.aH=w.a0=w.bd=w.bg=w.y2=0
w.b2=null
w.aZ=0.25
w.bi=null
w.bH=0.5
w.aY=1
w.c6=w.bx=w.bn=0
w.cT=w.cg=!1},
b_k(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bDt(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dx0)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bDt(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bDt(C.hh4(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bDt(C.hh4(1-a0*0.5,n,n,n),w)}return a1?C.bDt(C.hh4(-1,255,255,255),w):w},
aDI(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).l_(0,this.d.a.a),t=B.C(u,B.a3(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xG(u,v,w)
this.dx.pG(new C.f4H(t),!0)
return t},
b9k(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDI()
w=C.irg(e.d.a.a,e.db)
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
return C.inB(d,k,v,a0,j,e.gaYx(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cBU(){return this.b9k(null)},
DU(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmy(),$async$DU)
case 3:w=4
return B.b(B.bO(A.eW,null,x.H),$async$DU)
case 4:w=5
return B.b($.aU.gmy(),$async$DU)
case 5:s=$.aU.ap$.x.h(0,t.r)
r=s==null?null:s.gbf()
if(!(r instanceof B.qr)){u=null
w=1
break}w=7
return B.b(r.lX(1080/r.gZ(0).a),$async$DU)
case 7:w=6
return B.b(e.hj(A.hf),$async$DU)
case 6:q=e
u=q==null?null:J.eR(A.dI.gaT(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DU,v)},
abI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f3T(q))
t=4
w=7
return B.b(q.DU(),$async$abI)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cK.gcn().aL(p)
n=C.Cs(null,null,null,null,D.r5,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,null,B.a([q.b9k(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ac(j)
l=q.c
if(l!=null)l.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f3U(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abI,v)},
Bc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Bc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f3R(q))
t=4
w=7
return B.b($.aU.gmy(),$async$Bc)
case 7:w=8
return B.b(B.bO(A.n0,null,x.H),$async$Bc)
case 8:w=9
return B.b($.aU.gmy(),$async$Bc)
case 9:k=$.aU.ap$.x.h(0,q.f)
p=k==null?null:k.gbf()
if(!(p instanceof B.qr))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.lX(1080/p.gZ(0).a),$async$Bc)
case 10:o=e
w=11
return B.b(o.hj(A.hf),$async$Bc)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(Ab.ai0(J.eR(A.dI.gaT(n)),"ngmy_quote.png","image/png"),$async$Bc)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.K(x.q).f
k.T(B.b2(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
k=q.c
if(k!=null)k.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f3S(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bc,v)},
coG(){var w=this.p4
w.toString
return B.cm(new C.f4q(this,w))},
b2l(d,e){var w=null
return B.bA(w,w,w,w,w,D.fDy,w,w,!0,new B.b6(4,B.l(16),R.w5),w,w,w,w,w,D.uw,!0,w,w,w,w,new B.b6(4,B.l(16),D.b7_),w,w,w,w,w,w,w,w,Ad.Fg,e,w,w,w,w,w,w,w,D.fJf,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yG(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.u(u,B.a([B.X(e,A.b8,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aY_,w,w,w))
return new B.D(H.amC,B.A(u,A.l,w,A.e,A.i,0,w,w),w)},
b2k(d,e){var w=null,v=B.l(18),u=B.K(A.bw,A.r,1)
return B.p(w,B.aG(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.io),A.f,w,w,new B.o(D.uw,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wk(d){return this.b2k(d,A.bH)},
oF(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.vg:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.K(f?A.L:A.bw,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.u(s,B.a([B.X(e,q?A.c:A.k0,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.k0,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cU(r,B.A(s,A.l,r,A.e,A.N,0,r,r),r,r,A.b0,new B.o(w,r,u,v,r,p,A.n),A.ha,r,r,r,r,A.Hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahU(d,e,f){return this.oF(d,null,e,f)},
azZ(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.ey:A.bw,s=x.p
v=B.a([B.cU(w,d,w,w,A.b0,new B.o(u,w,B.K(t,A.r,g?2:1),v,w,w,A.n),A.ha,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aE
A.d.u(v,B.a([A.ax,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b2o(d,e,f,g,h,i){return this.azZ(d,e,f,g,h,5,i)},
kC(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aWM,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.eyS,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4D(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.ac9,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a1N,u,u,u))
s=B.A(s,A.l,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.abD(w).cQH(A.b8,A.bw,A.b8.j(0.2),A.c,D.fi6,4)
return new B.D(A.yT,B.x(B.a([s,B.Za(B.l5(u,u,u,g,f,new C.f4E(this,h),A.h.D(e,f,g)),w)],t),A.l,u,A.e,A.i,0,A.p),u)},
ajX(d,e,f,g,h,i){return this.kC(d,e,f,g,h,null,i)},
akl(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b1(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bVL:o
n.push(B.az(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bH(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f4G(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.c_(A.bI,n,A.br,o,10,10)},
bPZ(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a7e
else{v=x.bt
w=B.C(new B.Y(D.a7e,new C.f3J(o),v),v.k("M.E"))}v=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b2l("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f3K(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.acv,!0,A.a7,n,A.ao,n,n,n,n)
u=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b2l("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f3L(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a7,n,A.ao,n,n,n,n)
t=o.yG("DESIGNS",A.uZ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d5a[q]
r.push(new B.D(A.iS,o.ahU(p,o.x===p,new C.f3M(o,p)),n))}return B.x(B.a([v,A.T,u,t,B.ca(B.A(r,A.l,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,n,A.aM),A.af,new B.a5(n,118,B.hW(n,new C.f3N(o,w),w.length,n,n,A.aM,new C.f3O(),!1),n),A.P,o.b2k(B.x(B.a([B.j_(A.b8,n,n,A.ag,!0,new C.f3P(o),n,D.fW4,n,D.fSe,o.k3),B.j_(A.b8,n,n,A.ag,!0,new C.f3Q(o),n,n,n,D.fPk,o.k2)],s),A.l,n,A.e,A.i,0,A.p),A.anb)],s),A.E,n,A.e,A.i,0,A.p)},
cKT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDI()
if(a7.length===0)return a5.wk(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Ld,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aA(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a3(u).k("ci.E"))
A.d.ff(m)
l=m.length!==0&&A.d.cE(m,new C.f56(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f5d(a5)
j=new C.f5f()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Ld,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.ey:A.bw
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aA(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.p(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bH(d,d,d,d),new B.bf(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.OX,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f57(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wk(B.c_(A.bI,o,A.w_,a6,6,6))
i=B.a([a5.oF("All words",N.arD,!1,new C.f58(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahU("Sentence "+a3,!1,new C.f59(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahU("Clear picks",!1,new C.f5a(a5)))
i=B.c_(A.bI,i,A.br,a6,8,8)
g=a5.yG("SIZE OF THE PICKED WORDS",D.ar5)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dDs[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f5b(e,k)
f.push(a5.ahU(a0.b,l===a4,e))}return B.x(B.a([q,A.T,o,A.T,i,g,B.c_(A.bI,f,A.br,a6,8,8),A.T,a5.oF("Make every word normal",A.kd,!1,new C.f5c(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cFP(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bLw,B.d(A.d.fb(D.aCF,new C.f4Q(q)).b,p,p,p,p,p,p,D.fBR,p,p,p)],o),A.l,p,A.e,A.i,0,p,p),m=B.cm(new C.f4R(q)),l=q.yG("HIGHLIGHT BEHIND THE WORDS",A.a3K),k=q.p1?-1:q.k4
k=q.akl(k,new C.f4S(q),D.dgS)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.T,m,l,B.c_(A.bI,B.a([k,B.az(p,B.p(p,D.bYK,A.f,p,p,new B.o(p,p,B.K(v,A.r,w?3:1),p,p,D.fvg,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f4V(q),p,p,p,p,p,p,!1,A.a4)],o),A.w_,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Ld,p,p,p)],o)
if(q.gaYx()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajX("Colour",l,0,360,new C.f4W(q),""+A.h.U(l)+"\xb0")
k=q.p3
A.d.u(m,B.a([l,q.ajX("Shade",k,0.15,0.9,new C.f4X(q),""+A.h.U(k*100))],o))}l=q.ok
m.push(q.kC("Strength",l,0.15,1,new C.f4Y(q),1,""+A.h.U(l*100)+"%"))
A.d.u(n,B.a([A.T,q.wk(B.x(m,A.l,p,A.e,A.i,0,A.p))],o))}n.push(q.yG("LOOK",A.x4))
m=B.a([q.oF("Bold",I.ar3,q.fy,new C.f4Z(q)),q.oF("Italic",I.ar4,q.go,new C.f5_(q))],o)
for(u=0;u<3;++u){l={}
k=D.d6t[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.vg:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bw,1,A.r,-1)
m.push(B.az(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bH(r,r,r,r),new B.bf(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f50(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.c_(A.bI,m,A.w_,p,8,8))
n.push(q.yG("COLOUR",A.lT))
n.push(q.akl(q.fx,new C.f51(q),D.dtd))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Ld,p,p,p))
n.push(q.yG("SIZE AND PLACE",A.I6))
m=q.fr
m=q.kC("Text size",m,0.5,1.6,new C.f4T(q),1,""+A.h.U(m*100)+"%")
l=q.k1
n.push(q.wk(B.x(B.a([m,q.kC("Up / down",l,0.12,0.5,new C.f4U(q),0.3,""+A.h.U(l*100))],o),A.l,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
coH(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.K(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bE.j(0.12)],x.O)
return B.az(q,B.p(q,B.x(B.a([B.p(q,D.c3x,A.f,q,q,D.ba_,q,62,q,q,q,q,q,62),A.aB,D.fTx,A.am,D.fYn],x.p),A.l,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(D.uw,q,v,w,q,new B.a7(A.a5,A.a9,A.x,u,q,q),A.n),q,q,q,q,D.bHa,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb2n(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bv(B.l(12),new B.a5(46,62,B.fX(p,A.z,120,q,A.cm,A.bX,!1,q,!1,q,q),q),A.aq),A.bc,B.E(B.x(B.a([D.fT2,A.P,B.c_(A.bI,B.a([r.oF("Change",A.jN,!1,r.gb2n()),r.oF("Remove",A.ej,!1,new C.f4u(r))],w),A.br,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.l,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dpf[t]
u.push(r.oF(s.b,s.a,r.at===t,new C.f4v(r,t)))}u=B.c_(A.bI,u,A.br,q,8,8)
switch(r.at){case 0:s=r.c6o(p)
break
case 1:s=r.c5h()
break
case 2:s=r.bLN()
break
case 3:s=r.bSh()
break
default:s=r.bNV()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.T,new B.bL(A.a5,q,q,r.oF("Reset the whole picture",A.kd,!1,new C.f4w(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c6o(d){var w=this,v=x.p
return B.x(B.a([B.c_(A.bI,B.a([w.oF("Auto enhance",E.a3m,!1,new C.f4m(w)),w.oF("Make words easy to read",A.nP,!1,new C.f4n(w))],v),A.br,null,8,8),A.aB,B.cm(new C.f4o(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c5h(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kC("Exposure",n,-1.5,1.5,new C.f40(o),0,A.h.ad(n,1))
w=o.RG
w=o.kC("Brightness",w,-0.5,0.5,new C.f41(o),0,""+A.h.U(w*100))
v=o.rx
v=o.kC("Contrast",v,0.4,2,new C.f42(o),1,""+A.h.U(v*100))
u=o.xr
u=o.kC("Fade",u,0,1,new C.f43(o),0,""+A.h.U(u*100))
t=o.aK
t=o.kC("Spotlight",t,0,1,new C.f44(o),0,""+A.h.U(t*100))
s=o.a0
s=o.kC("Darken",s,0,0.85,new C.f45(o),0,""+A.h.U(s*100))
r=o.bd
r=o.kC("Vignette",r,0,0.9,new C.f46(o),0,""+A.h.U(r*100))
q=o.aO
q=o.kC("Shade behind words",q,0,0.85,new C.f47(o),0,""+A.h.U(q*100))
p=o.aR
return o.wk(B.x(B.a([n,w,v,u,t,s,r,q,o.kC("Shade top & bottom",p,0,0.85,new C.f48(o),0,""+A.h.U(p*100))],x.p),A.l,null,A.e,A.i,0,A.p))},
bLN(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kC("Colour strength",q,0,2.2,new C.f3m(s),1,""+A.h.U(q*100))
w=s.to
w=s.kC("Warmth",w,-1,1,new C.f3n(s),0,""+A.h.U(w*100))
v=s.x1
v=s.kC("Tint",v,-1,1,new C.f3o(s),0,""+A.h.U(v*100))
u=s.x2
t=x.p
u=s.wk(B.x(B.a([q,w,v,s.kC("Shift colours",u,-180,180,new C.f3p(s),0,""+A.h.U(u)+"\xb0"),new B.bL(A.a5,r,r,s.oF("Negative",D.bTH,s.y1,new C.f3q(s)),r)],t),A.l,r,A.e,A.i,0,A.p))
v=s.yG("COLOUR WASH",A.Q_)
w=s.b2
q=B.a([null],x.Z)
A.d.u(q,D.aBh)
t=B.a([u,v,s.akl(w,new C.f3r(s),q),A.P],t)
if(s.b2!=null){q=s.aZ
t.push(s.wk(s.ajX("Wash strength",q,0,0.9,new C.f3s(s),""+A.h.U(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bSh(){var w,v,u,t,s,r=this,q=r.y2
q=r.kC("Blur",q,0,24,new C.f3V(r),0,A.o.v(A.h.U(q)))
w=r.bg
w=r.kC("Soft focus",w,0,1,new C.f3W(r),0,""+A.h.U(w*100))
v=r.aH
u=x.p
v=r.wk(B.x(B.a([q,w,r.kC("Film grain",v,0,1,new C.f3X(r),0,""+A.h.U(v*100))],u),A.l,null,A.e,A.i,0,A.p))
w=r.yG("LIGHT LEAK",D.bTq)
q=r.bi
t=B.a([null],x.Z)
s=x.r
A.d.u(t,B.cY(D.aBh,0,B.dD(8,"count",s),s))
u=B.a([v,w,r.akl(q,new C.f3Y(r),t),A.P],u)
if(r.bi!=null){q=r.bH
u.push(r.wk(r.ajX("Leak strength",q,0,1,new C.f3Z(r),""+A.h.U(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bNV(){var w,v,u,t,s=this,r=s.aY
r=s.kC("Zoom",r,1,3,new C.f3w(s),1,""+A.h.U(r*100)+"%")
w=s.bn
w=s.kC("Left / right",w,-1,1,new C.f3x(s),0,""+A.h.U(w*100))
v=s.bx
v=s.kC("Up / down",v,-1,1,new C.f3y(s),0,""+A.h.U(v*100))
u=s.c6
t=x.p
return B.x(B.a([s.wk(B.x(B.a([r,w,v,s.kC("Turn",u,-180,180,new C.f3z(s),0,""+A.h.U(u)+"\xb0")],t),A.l,null,A.e,A.i,0,A.p)),A.T,B.c_(A.bI,B.a([s.oF("Turn 90\xb0",H.as8,!1,new C.f3A(s)),s.oF("Flip sideways",A.Dg,s.cg,new C.f3B(s)),s.oF("Flip upside down",A.Dg,s.cT,new C.f3C(s))],t),A.br,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c96(){var w=null,v=B.l(22),u=B.K(A.bw,A.r,1)
return B.p(w,B.x(B.a([D.fii,A.T,D.fV4,A.aB,B.az(w,B.p(A.z,D.fiw,A.f,w,w,new B.o(w,w,w,B.l(16),w,G.vg,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f4p(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.uw,w,u,v,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
c6b(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f4h(p),m=x.p,l=B.A(B.a([D.bLC,p.oF("Reset",A.kd,!1,new C.f4d(p))],m),A.l,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Ld,o,o,o),j=p.yG("SHAPE",A.as3),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.DR[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b2o(n.$2(t,p.cy),62,u.b,s===t,new C.f4e(v,p),62))}}i=B.c_(A.bI,i,A.br,o,8,8)
v=p.yG("RING",A.py)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.DK[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b2o(n.$2(p.cx,t),62,r.b,q===t,new C.f4f(s,p),62))}u=B.c_(A.bI,u,A.br,o,8,8)
s=p.CW
return B.x(B.a([l,A.ax,k,j,i,v,u,A.af,p.wk(p.kC("Size",s,0.12,0.4,new C.f4g(p),0.22,""+A.h.U(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b5o(d){return new B.a5(null,d,new B.fH(0.5625,B.cm(new C.f4A(this)),null),null)},
cF0(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.K(A.bw,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.vg:q
t=new B.aP(14,14)
s=D.dry[w]
r=v?A.c:A.aE
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aE
l.push(new B.bz(1,A.bd,B.az(A.bZ,B.cU(q,B.x(B.a([r,A.cS,new B.dx(A.dM,A.z,A.f,B.d(s.b,q,q,q,q,q,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.N,0,A.p),q,q,A.b0,new B.o(q,q,q,new B.bf(t,t,t,t),q,u,A.n),D.bCC,q,q,q,q,A.hy,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f4J(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.A(l,A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bEK,A.lQ,q,q,q)},
aTd(){var w,v,u=this,t=null,s=u.cF0()
switch(u.as){case 0:w=u.bPZ()
break
case 1:w=u.cKT()
break
case 2:w=u.cFP()
break
case 3:w=u.coH()
break
case 4:w=u.c6b()
break
default:w=u.c96()
break}v=x.p
return B.bv(A.ud,B.ec(B.x(B.a([s,B.E(B.cw(B.a([w],v),t,t,D.bFY,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.i,0,A.p),D.a_3,!0),A.aq)},
aPd(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gceT(),p=B.l(16)
q=B.E(B.az(r,B.p(r,D.fiH,A.f,r,r,new B.o(A.c.j(0.08),r,B.K(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRQ()
w=B.l(16)
v=B.a([new B.ab(0,A.G,A.bE.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(A.aVg)
else t.push(D.bXQ)
t.push(A.ae)
t.push(D.bO8)
return B.p(r,B.A(B.a([q,A.as,B.E(B.az(r,B.p(r,B.A(t,A.l,r,A.b9,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.vg,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.i,0,r,r),A.f,r,r,D.b95,r,r,r,r,AA.a1c,r,r,r)},
b2m(){var w=null
return new B.D(S.a1J,B.A(B.a([B.aI(w,w,w,w,A.nQ,w,w,w,new C.f4_(this),w,w,w,w,w,w),D.ha3,A.b4,D.c5X],x.p),A.l,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.Cp,B.bn(!0,B.cm(new C.f5g(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.biy.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e0()
n.cU(7)
w=e.a
v=e.b
u=A.h.U(w*v/55)
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
C.t3.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.my.prototype={}
C.Ad.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.of.prototype={}
C.wC.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9A.prototype={}
C.atq.prototype={}
C.a1Y.prototype={
S(){return new C.aK0(new B.au(A.aw,$.ax()),B.ke(!0,null,!0,!0,null,null,!1),D.dVM,B.a([],x.s),B.ew([D.JM],x.Q))}}
C.aK0.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.f.t()
this.a2()},
a1D(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1D=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i5().CT(90,700,700,A.eR),$async$a1D)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1D)
case 8:p=e
if(r.c!=null)r.m(new C.fbE(r,p,q))
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
return B.i($async$a1D,v)},
a1G(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i5().aKk(78,n,1100,1100),$async$a1G)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.br(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gP(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1G)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c5(l,".png"))k="image/png"
else k=A.a.c5(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cK.gcn().aL(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.fbF(r,p))
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
return B.i($async$a1G,v)},
b7n(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fX(A.cJ.aL(A.d.gal(d.split(","))),A.z,u,u,A.cm,A.bX,!0,u,!1,u,u)
return w}catch(v){}return D.bAL},
c6i(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cAJ(C.fRw(w,this.b7n(d),f),g)},
ae3(d,e,f,g,h){var w=null,v=new C.fbC(f,e),u=new C.fbD(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.K(p?A.bw:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.as(B.X(f?A.zG:A.PN,A.bV,w,w,w,26),w,w,w),D.eF5],x.p),w),w)
else p=this.c6i(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a3,!0,s,B.aM(!1,r,!0,B.p(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bXx],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.n2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fbB(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
b_q(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bv(B.l(8),B.fX(A.cJ.aL(A.d.gal(h.split(","))),A.z,p,p,A.cm,A.bX,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.K(n?A.bw:A.bi.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ew,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.Lk,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Qy,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(p,B.A(n,A.l,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kX,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
aa6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aa6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fV9(),$async$aa6)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.fbk(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ac(n)
if(r.c!=null)r.m(new C.fbl(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa6,v)},
ag8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ag8=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.fbn(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.fbo(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.fbp(r))
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
return B.b(C.fQe(q,r.cx,j,new C.b4b(r.z,r.Q,r.as,r.at),new C.fbq(r),i,m,p,k),$async$ag8)
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
if(r.c!=null)r.m(new C.fbr(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aE(d,A.eU,g).w
g=B.aE(d,A.c_,g).w
w=B.as(B.p(h,h,A.f,h,h,new B.o(A.aT,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.p(h,D.c_U,A.f,h,h,new B.o(h,h,B.K(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bi.j(0.5),A.J,24)],v),D.ca8,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fbS(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,H.Qy,h,h,h,i.ax?h:new C.fbT(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbGG()
v=B.a([new B.ab(0,A.G,A.b8.j(0.45),A.J,10)],v)
s.push(B.he(B.aG(!1,A.a3,!0,h,B.aM(!1,h,!0,B.p(h,B.X(i.e==null?A.ti:A.hd,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.xd,A.a6),h,40,h,h,h,h,h,40),A.cU,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cU,h,h,A.ai),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bA(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b6y),h,h,h,h,h,h,h,h,A1.F7,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iS,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aXn,!0,A.a7,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.fbU(i)
s=i.b_q(A.l1,q,r,i.gcp9(),s)
r=i.z
r=B.E(i.ae3(new C.fbW(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bn,B.E(i.ae3(new C.fbX(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.i,0,h,h)],t),A.l,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.fbY(i)
s=i.b_q(A.uW,r,p,i.gcph(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.ae3(new C.fbZ(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fZG,A.ax,D.h1C,A.bx,u,A.P,D.h0_,A.aB,v,A.bx,B.A(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bn,B.E(i.ae3(new C.fc_(i),r,!0,n,o),1)],t),A.l,h,A.e,A.i,0,h,h)],t),A.l,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.h3v],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.K(D.brW,A.r,1)
w=C.aix(w)
w=w==null?h:w.b
A.d.u(o,B.a([A.T,new B.bL(A.a5,h,h,B.p(h,B.A(B.a([D.c12,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,H.aXE,h,h,h),B.aM(!1,h,!0,D.ez7,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fc0(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.bjs,h,u,v,h,h,A.n),h,h,h,h,D.bEo,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fQ4)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dj9[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aE:A.bw,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bz(1,A.bd,new B.D(A.j9,B.az(h,B.cU(A.z,B.d(""+l,h,h,h,h,h,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b0,new B.o(v,h,new B.bH(k,k,k,k),h,h,h,A.a6),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fc1(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.i,0,h,h))
o.push(A.bx)
o.push(D.h8g)
o.push(A.P)
o.push(B.cm(new C.fc2(i)))
o.push(A.bx)
o.push(D.fXJ)
o.push(A.P)
w=B.a([i.bak("auto","Let AI choose",A.e9,A.SG)],t)
for(v=x.O,m=0;m<11;++m){j=D.xi[m]
u=j.d
w.push(i.bak(j.a,j.b,j.c,B.a([B.b1(A.d.gH(u).a),B.b1(A.d.gH(u).b)],v)))}o.push(B.c_(A.bI,w,A.br,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.l(16)
u=B.K(i.r?A.bi.j(0.5):A.bw,A.r,1)
o.push(B.p(h,B.j_(h,A.bi,h,h,h,new C.fbV(i),D.bWZ,D.h7v,h,D.fSu,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.u(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aWy,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gceX()
v=B.fv(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.ba(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.foA:A.DE
o.push(new B.a5(h,54,B.lX(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.lZ,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.ca(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,h,A.wI,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.afN,h,h,h,h,h,h,h,h),h)},
bTz(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.fbs(this,p,d)
if(d===D.Ex)return new C.aGv(p,o,q)
w=B.l(16)
v=p?E.xd:q
u=p?q:A.c.j(0.05)
t=B.K(p?A.aE:A.bw,A.r,1)
s=B.X(p?A.ea:C.i0b(d),A.c,q,q,q,20)
r=C.i0c(d)
return B.az(q,B.cU(q,B.x(B.a([s,A.ax,new B.dx(A.dM,A.z,A.f,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],x.p),A.l,q,A.b9,A.i,0,A.p),q,q,A.b0,new B.o(u,q,t,w,q,v,A.n),A.ha,q,64,q,q,A.hA,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
bak(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bw
r=B.K(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cU(v,B.A(B.a([w,A2.AZ,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.N,0,v,v),v,v,A.b0,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,Q.aoo,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fbH(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1X.prototype={
S(){return new C.aK_(new B.au(A.aw,$.ax()))}}
C.aK_.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a2()},
ag9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ag9=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.fbd(r))
w=1
break}B.eZ()
r.m(new C.fbe(r))
t=4
q=C.isg(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.is0(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.fbf(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hgI()
f=$.Ds.h(0,k.a)
o=f==null||J.ct(f)?null:J.fn(f)
if(o==null){r.m(new C.fbg(r))
w=1
break}n=C.irZ(o,r.a.c)
C.irV(r.a.c.a)
$.hfU=!0
k=r.c
if(k!=null)B.a6(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hjO(j)
h=C.hjP(r.a.c)
e=C.hjQ(r.a.c)
w=7
return B.b(C.bFK(k,r.a.c.a,j,h,new C.fbh(r),i,e,a0),$async$ag9)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ac(a1)
if(r.c!=null)r.m(new C.fbi(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aE(d,A.eU,i).w
i=B.aE(d,A.c_,i).w
w=B.as(B.p(j,j,A.f,j,j,new B.o(A.aT,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.ass,A.f,j,j,D.b8L,j,34,j,j,j,j,j,34),A.as,D.bMg],v),A.l,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,A1.aca,j,j,j)
s=A.c.j(0.05)
s=B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bA(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),AB.afd),j,j,j,j,j,j,j,j,A1.F7,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aXn,!0,A.a7,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.df5[q]
o=B.d(p,j,j,j,j,j,j,AL.W4,j,j,j)
n=A.c.j(0.06)
r.push(B.n8(j,n,o,j,k.e?j:new C.fbj(k,p),j,j,R.w5,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.T,B.c_(A.bI,r,A.br,j,8,8)],v)
u=k.r
if(u!=null)A.d.u(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aWy,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gceY()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.bi.j(0.5),A.ep.j(0.5)],x.O):D.cMc
o=B.a([new B.ab(0,A.G,A.bi.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ez3:D.c0C
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a3,!0,j,B.aM(!1,s,!0,B.eE(B.A(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hu,j,j,j)],v),A.l,j,A.b9,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a5,A.a9,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.ca(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,j,A.wI,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.afN,j,j,j,j,j,j,j,j),j)}}
C.b4b.prototype={}
C.aGv.prototype={
S(){return new C.bnm(null,null)}}
C.bnm.prototype={
gaA_(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,A.qD,null,1,null,v)
w.cK(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaA_().t()
this.bAr()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c7(this.gaA_(),new C.erD(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bkQ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dlH[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.wv.j(0.25+s*0.6).gp(0)
d.O(new B.r(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.r(q-o,r),new B.r(q+o,r+0),p)
d.ah(new B.r(q,r-o),new B.r(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atY.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a0l.prototype={
S(){return new C.aDZ()}}
C.aDZ.prototype={
gaki(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aiJ(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAU(){var w=this.e
return w===$?this.e=C.hjO(this.a.c).q(0,D.Ex):w},
a9U(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9U=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.du9(s))
u=3
r=A.d.fb(D.xi,new C.dua(s))
q=B.d0(C.hjO(s.a.c),x.Q)
l=q
J.h7(l,D.Ex)
p=l
if(s.gAU())J.c5(p,D.Ex)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAU()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hjP(i.c)
g=C.hjQ(s.a.c)
w=6
return B.b(C.bFK(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9U)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aiJ(q,s.gaki())
f=q==null?null:q.b
n=f==null?s.gaki():f
if(!J.z(n,r.a)&&!s.gAU())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ac(d)
if(s.c!=null)s.m(new C.dub(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9U,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.l(28),h=B.K(m?A.bw:A.bm,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bF,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.due(d)
e=B.A(B.a([f,B.aI(n,n,n,n,B.X(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.xi[w]
u=o.gaki()
t=o.f?n:new C.duf(o,v)
f.push(new C.bw6(v,u===v.a,t,n))}f=B.l4(1.25,f,3,10,10,n,A.e0,!0)
u=B.l(18)
t=o.gAU()?D.ccY:n
if(o.gAU())s=n
else s=m?A.bs:A.ci
r=B.X(A.e9,o.gAU()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAU()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAU()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAU()
f=B.a([f,A.aB,B.p(n,B.A(B.a([r,A.as,q,B.b9P(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dug(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,T.an3,n,n,n)],g)
u=o.r
if(u!=null)A.d.u(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.fI9,n,n,n)],g))
f=B.ca(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,n,A.Hi,n,n,A.ah)
u=o.f?n:o.gbFF()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.ba(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bn(!0,B.p(n,B.x(B.a([new B.D(D.bHF,e,n),new B.di(1,A.cn,f,n),new B.D(A.Hh,new B.a5(1/0,50,B.bJ(B.eE(B.as(o.f?A.tY:D.h_b,n,n,n),n,new B.o(n,n,n,s,n,D.cbv,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uM,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bw6.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.K(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.b1(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bL(A.lC,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lD,w,w,B.d(v.b,w,w,w,w,w,w,D.fI6,w,w,w),w)],x.p)
if(q)v.push(D.b3H)
return B.az(w,B.cU(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b0,new B.o(w,w,p,t,s,new B.a7(A.ay,A.aC,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cq,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.erA.prototype={
aHP(d,e,f){return e+"@"+A.a.b0(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xh(d,e){return this.aHP(0,e,null)}}
C.aOF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.b47.prototype={
B(d){var w,v,u=null,t=C.hiz(this.c)
if(t==null)w=D.bzd
else{w=B.aE(d,u,x.w).w.cQ9(D.bDV,D.fnJ)
v=this.d
w=B.qh(new B.dt(!v,B.aq4(!1,t,!1,v,!1,390),u),w)}return new B.dx(A.dC,A.z,A.f,new B.a5(416,870,new C.boX(w,u),u),u)}}
C.boX.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dyT[w]
u=new B.aP(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bf(u,u,u,u),t,D.auu,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dAi[w]
u=new B.aP(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bf(u,u,u,u),t,D.auu,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,new B.bN(new B.o(t,t,t,B.l(64),D.d3D,D.c9R,A.n),A.bk,t,t),0,0,0))
s.push(B.bS(3,new B.bN(new B.o(A.w,t,t,B.l(61),t,t,A.n),A.bk,t,t),3,3,3))
s.push(B.bS(13,B.bv(B.l(51),B.ec(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ao(t,B.as(B.p(D.b3R,B.p(t,t,A.f,t,t,D.b93,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,new B.dt(!0,B.bv(B.l(51),D.bAS,A.aq),t),13,13,13))
s.push(B.ao(22,new B.dt(!0,B.as(B.p(t,t,A.f,t,t,new B.o(A.ab,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lD.prototype={
oR(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.ej(A.K,!1,e.l(),A.aG,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bb,j,2,"Your Presentation Title",0,0,"",D.na,D.d1,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.ej(A.K,!1,v.l(),A.aG,"",k,20,A.bo,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bb,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dr,D.d1,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.t4(i,l,0,0,B.a([f,w,C.ej(A.b6,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bo,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fw,t.l(),3,"",0,0,"",D.cd,D.eM,0.3,0.35,0.72)],s),C.cC(),D.n9,"","","Welcome",D.dr)
u=C.cC()
u=C.ej(A.b6,!1,e.l(),A.aG,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bb,j,2,"Agenda",0,0,"",D.cd,D.d1,0.84,0.08,0.08)
w=C.cC()
w=C.t4(i,l,0,0,B.a([u,C.ej(A.b6,!0,v.l(),A.aG,"",k,22,A.bo,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bb,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vy,D.d1,0.8,0.1,0.26)],s),C.cC(),D.n9,"","","Agenda",D.dr)
u=C.cC()
u=C.ej(A.b6,!1,e.l(),A.aG,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bb,j,2,"Main Idea",0,0,"",D.cd,D.d1,0.84,0.08,0.08)
f=C.cC()
f=C.t4(i,l,0,0,B.a([u,C.ej(A.b6,!0,v.l(),A.aG,"",k,21,A.bo,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bb,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cd,D.d1,0.8,0.1,0.26)],s),C.cC(),D.n9,"","","Key Point 1",D.dr)
u=C.cC()
u=C.ej(A.b6,!1,e.l(),A.aG,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bb,j,2,"Compare & Contrast",0,0,"",D.cd,D.d1,0.84,0.08,0.08)
r=C.cC()
r=C.ej(A.b6,!0,v.l(),A.aG,"",k,18,A.bo,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bb,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.d1,0.4,0.08,0.24)
q=C.cC()
q=C.t4(i,l,0,0,B.a([u,r,C.ej(A.b6,!0,v.l(),A.aG,"",k,18,A.bo,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bb,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.d1,0.4,0.52,0.24)],s),C.cC(),D.n9,"","","Key Point 2",D.dr)
r=C.cC()
r=C.ej(A.K,!1,e.l(),A.aG,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bb,j,2,h,0,0,"",D.dr,D.d1,0.8,0.1,0.32)
e=C.cC()
p=C.Cs(l,l,l,l,D.Et,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,l,B.a([t,w,f,q,C.t4(i,l,0,0,B.a([r,C.ej(A.K,!1,v.l(),A.aG,"",k,22,A.bo,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bb,j,2,"Questions?",0,0,"",D.cd,D.d1,0.7,0.15,0.58)],s),C.cC(),D.n9,"","",h,D.dr)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fz.prototype={
ak(d){return this.e.$1(d)}}
C.eA.prototype={}
C.jk.prototype={}
C.Fp.prototype={
gaNQ(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aix(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a51(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fp(v,u,t,d==null?w.d:d)},
Gj(d){return this.a51(null,d,null,null)},
aGt(d){return this.a51(null,null,null,d)},
cQ7(d,e){return this.a51(d,e,null,null)},
bfH(d){return this.a51(d,null,null,null)},
bfN(d){return this.a51(null,null,d,null)}}
C.Ov.prototype={
S(){return new C.bmI(new B.eF(0,$.ax()),null,null)}}
C.bmI.prototype={
Y(){var w,v=this
v.a3()
w=v.q6(new C.e52(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.V$=$.ax()
w.R$=0
this.bzV()},
B(d){var w=C.aix(this.a.c.a)
if(w==null)w=A.d.gH(D.IC)
return B.cm(new C.e51(this,w,C.hzi(this.a.c.d)))}}
C.buC.prototype={
B(d){return B.ok(A.Y4,this.e,new C.faq(this,A.h.F(this.d*0.35,1.6)-0.3))}}
C.bhD.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVT(d,e,v)
break
case"confetti":w.bMg(d,e,v)
break
case"crown":w.bNW(d,e,v)
break
case"aurora":w.bGK(d,e,v)
break
case"champagne":w.bK8(d,e,v)
break
case"diamonds":w.bQ7(d,e,v)
break
case"starburst":w.cCD(d,e,v)
break
case"balloons":w.bGY(d,e,v)
break
case"galaxy":w.bVt(d,e,v)
break
case"redcarpet":w.ctw(d,e,v)
break
case"coins":w.bLF(d,e,v)
break
case"lanterns":w.c4J(d,e,v)
break
case"hearts":w.c2e(d,e,v)
break
case"petals":w.coy(d,e,v)
break
case"butterflies":w.bJ5(d,e,v)
break
case"neon":w.c8R(d,e,v)
break
case"disco":w.bQi(d,e,v)
break
case"sunrise":w.cEi(d,e,v)
break
case"pearls":w.cnC(d,e,v)
break
case"snow":w.cCk(d,e,v)
break
case"laurel":w.c4P(d,e,v)
break
case"ribbons":w.cw2(d,e,v)
break
case"kente":w.c4x(d,e,v)
break
case"trophy":w.cI3(d,e,v)
break
case"shooting":w.cA4(d,e,v)
break
case"bokeh":w.bHj(d,e,v)
break
case"orbits":w.clc(d,e,v)
break
case"flowers":w.bUH(d,e,v)
break
case"music":w.c8z(d,e,v)
break
case"mandala":w.c7_(d,e,v)
break
case"sparklers":w.cCr(d,e,v)
break
case"city":w.bKW(d,e,v)
break}},
tg(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.L()
v.r=g.j(A.h.D(h,0,1)).gp(0)
v.a=A.pd
u=new B.aH(w.r,A.aj,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.ce(w,t,w+f,t))
u.E(new B.ce(w,t,w,t+f))
u.E(new B.ce(w,t,w-f,t))
u.E(new B.ce(w,t,w,s))
u.E(new B.bx())
d.af(u,v)
d.O(e,f*0.18,v)},
m5(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.h.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.d_(q,v)*2.5)+C.d_(q,u)*6.28)+1)/2
this.tg(d,new B.r(C.d_(q,t)*o,C.d_(q,s)*n),m*(0.006+0.014*C.d_(q,r))*(0.5+p),h,p*p)}},
aVT(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m5(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.at],w),B.a([A.ix,A.bE],w),B.a([A.eO,A.aH],w),B.a([A.c,A.aF],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.h.bh(l/2.8)
j=A.h.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.d_(i,1))
g=h+b7*(C.d_(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.d_(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kN(new B.r(h,b8),new B.r(g,f),A.ck.az(0,j/0.22))
d.toString
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.san(new B.a7(A.a5,A.a9,A.x,B.a([e[0].j(0),e[0]],w),null,null).aD(0,B.r2(new B.r(h,b8),d)))
a0.c=o
a0.d=A.bG
a1=B.kN(new B.r(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a1.r=A.c.gp(0)
c0.O(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.ck.az(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.h.U(r))
a1=C.d_(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.fT(A.G,p)
c0.O(new B.r(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.d_(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.d_(i,a9+60))
b2=new B.r(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bG
b6.a=A.pd
c0.ah(new B.r(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.d_(i,a9+120)>0.5)this.tg(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bMg(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.h.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.L()
d.san(new B.a7(A.ay,A.aC,A.x,D.dsR,B.a([A.h.D(h-0.15,0,1),A.h.D(h,0,1),A.h.D(h+0.15,0,1)],x.x),null).aD(0,new B.a4(0,0,g,f)))
a0.aF(new B.a4(0,0,g,f),d)
d=Math.max(4,A.h.U(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.h.F(a2*(i*(0.08+0.12*C.d_(u,1)))+C.d_(u,2)*w,w)
s=C.d_(u,3)
r=Math.sin(a2*(0.8+C.d_(u,4))+u)
q=i*(0.012+0.012*C.d_(u,5))
p=Math.cos(a2*(2+3*C.d_(u,6))+u)
o=D.S5[A.o.D(A.h.bh(C.d_(u,7)*5),0,4)]
J.bt(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.d_(u,8)*2)+u)*180/3.141592653589793,0,0)
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
a0.af(m,t)}else a0.aF(B.bX(A.J,q*1.8*A.h.D(t,0.15,1),q),n)
g.restore()}this.m5(a0,a1,a2,25,A.bL,30)},
bNW(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
p=new B.bx()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bT(A.z,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.blC],v),a4,a4).aD(0,B.bW(w,u)))
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
j.E(new B.bx())
i=A.h.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.L()
o.san(new B.a7(A.aY,A.b3,A.x,D.drs,a4,a4).aD(0,new B.a4(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.ePz,D.eID,D.eZf],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
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
h.r=A.hM.gp(0)
a8.O(new B.r(a5+l*a1,a6+m),o,h)}}for(v=B.BP(j),u=B.a([],x.Y),p=new B.uU(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bj(B.jN(y.M));--h
p.jP()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.b=A.aa
a2.c=m
a2.e=A.dQ
a2.r=A.bL.gp(0)
a8.af(new B.aH(o,e,a4,new B.b7([new B.BQ(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.h.F(b0*0.5,1)
this.tg(a8,new B.r(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m5(a8,a9,b0,45,A.bL,40)},
bGK(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m5(a6,a7,a8,60,A.c,50)
w=[D.fdi,D.fbU,D.faJ,D.fev]
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
o.a=A.pd
o.y=new B.fT(A.G,u)
a6.af(i,o)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.b=A.aa
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.pd
o.y=new B.fT(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.h.U(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.h.F(u*(0.05+0.06*C.d_(a2,1))+C.d_(a2,2)*a1,a1)
s=C.d_(a2,3)
r=Math.sin(a8+a2)
q=C.d_(a2,4)
$.S()
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=A.wu.j(0.4+0.5*C.d_(a2,5)).gp(0)
o.a=A.pd
a6.O(new B.r(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bK8(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.L()
e.san(new B.bT(A.z,0.5,A.x,n,0,B.a([A.i8.j(0.25+0.1*j),D.a_h],x.O),n,n).aD(0,B.bW(new B.r(i,h),g)))
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
f.r=D.S5[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.h.U(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.h.F(a1*(k*(0.07+0.12*C.d_(w,1)))+C.d_(w,2)*q,q)
s=m*(0.1+0.8*C.d_(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.d_(w,4))
if(p<i){this.tg(d,new B.r(s,p),o*2.4,A.bL,A.h.D(p/i,0,1))
continue}$.S()
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.b=A.aa
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.rK.j(0.75).gp(0)
d.O(new B.r(s,p),o,g)
g=o*0.35
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=A.c.j(0.8).gp(0)
d.O(new B.r(s-g,p-g),f,e)}},
bQ7(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m5(b0,b1,b2,30,A.lk,60)
for(w=Math.max(4,A.h.U(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.d_(p,1))
n=a8+o*4
m=A.h.F(t*(0.04+0.06*C.d_(p,2))+C.d_(p,3)*n,n)-o*2
l=C.d_(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bt(v.save())
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
a2=new B.bx()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.san(new B.a7(A.ay,A.aC,A.x,D.dmR,a6,a6).aD(0,B.bX(A.J,k*1.2,o)))
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
if(a5>0.85)this.tg(b0,new B.r(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cCD(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.bx()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.bL.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.h.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.b=A.aa
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
d.O(w,f*(0.15+0.6*k),u)}j=A.h.bh(a0/2.4)
k=A.h.F(a0,2.4)/2.4
for(v=Math.max(4,A.h.U(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.d_(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bAb.az(0,k)*(0.5+0.5*C.d_(t,u)))
this.tg(d,new B.r(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.d_(t,3)),D.S5[A.o.D(A.h.bh(C.d_(t,4)*5),0,4)],r)}},
bGY(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.h.U(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.d_(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.h.F(r*(0.05+0.05*C.d_(p,2))+C.d_(p,3)*n,n)
k=C.d_(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aBI[A.o.F(p,6)]
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
a0=B.bX(new B.r(k,l),o*2.3,m)
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e=B.ap(j,A.w,0.35)
e.toString
m.san(new B.bT(D.b3W,0.9,A.x,a1,0,B.a([A.c,j,e],u),Au.Sq,a1).aD(0,a0))
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
i=new B.bx()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=B.ap(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.h.U(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.h.F(r*(0.1+0.1*C.d_(p,11))+C.d_(p,12)*n,n)
q=C.d_(p,13)
J.bt(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bX(A.J,t,u)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=D.aBI[A.o.F(p,6)].j(0.85).gp(0)
a5.aF(s,q)
a3.restore()}},
bVt(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.r(a7,a8)
this.m5(b0,b1,b2,50,A.c,70)
for(w=[D.fds,D.fd5,D.fdb],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.r(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.san(new B.bT(A.z,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aD(0,B.bW(m,r)))
b0.O(m,r,l)}w=Math.max(4,A.h.U(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.d_(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.d_(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ap(A.bL,A.ey,i)
f.toString
e=C.d_(k,3)
$.S()
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=f.j(0.5+0.5*C.d_(k,4)).gp(0)
d.a=A.pd
b0.O(new B.r(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.L()
a8.san(new B.bT(A.z,0.5,A.x,a3,0,B.a([A.rK.j(0.55),D.aky],t),a3,a3).aD(0,B.bW(a9,a7)))
b0.O(a9,a7,a8)
a0=A.h.F(b2,3.5)/3.5
if(a0<0.25){a1=A.h.bh(b2/3.5)
a2=new B.r(a4*(0.1+0.5*C.d_(a1,9)),a5*0.1*C.d_(a1,8))
a4=B.kN(a2,a2.a5(0,new B.r(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kN(a2,a4,0.6)
a5.toString
a7=B.L()
a7.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aD(0,B.r2(a2,a4)))
a7.c=a6*0.005
a7.d=A.bG
b0.ah(a5,a4,a7)}},
ctw(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
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
p=new B.bx()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bT(A.z,0.5,A.x,b4,0,B.a([A.rK.j(0.28),D.aky],w),b4,b4).aD(0,B.bW(new B.r(r,v),u)))
p.a=A.pd
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
a8=new B.bx()
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
b1.E(new B.bx())
v=B.L()
v.san(D.cbp.aD(0,new B.a4(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.h.U(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.h.F(b6*(0.05+0.07*C.d_(s,1))+C.d_(s,2)*b2,b2)
t=C.d_(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.tg(b8,new B.r(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.d_(s,4)),A.bL,0.3+0.7*((p+1)/2))}},
bLF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.h.U(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.d_(u,1))
s=j+t*4
r=t*2
q=A.h.F(v*(0.12+0.12*C.d_(u,2))+C.d_(u,3)*s,s)-r
p=C.d_(u,4)*k
o=Math.cos(f*(2+3*C.d_(u,5))+u)
n=Math.abs(o)
m=B.bX(new B.r(p,q),r,r*A.h.D(n,0.12,1))
$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.san(new B.a7(A.ay,A.aC,A.x,o>0?D.dE_:D.cS8,null,null).aD(0,m))
d.c0(m,r)
r=-(t*0.22)
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.b=A.aa
l.c=Math.max(0.6,t*0.08)
l.r=D.bwK.gp(0)
d.c0(new B.a4(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.tg(d,new B.r(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m5(d,e,f,30,A.bL,110)},
c4J(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m5(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.h.U(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.d_(q,1))
o=a0+p*4
n=a0+p*2-A.h.F(u*(0.03+0.04*C.d_(q,2))+C.d_(q,3)*o,o)
m=C.d_(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.san(new B.bT(A.z,0.5,A.x,e,0,B.a([Ax.yH.j(0.45*l),D.aj6],v),e,e).aD(0,B.bW(new B.r(m,n),k)))
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
k=new B.bx()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=B.ap(D.blU,A.c,0.2*l)
j.toString
k.san(new B.a7(A.aY,A.b3,A.x,B.a([D.brv,j],v),e,e).aD(0,B.bX(new B.r(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=A.c.j(l).gp(0)
a2.O(new B.r(m,n+p*0.55),p*0.12,k)}},
c2e(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.h.U(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.d_(p,1))
n=a1+o*4
m=A.h.F(s*(0.05+0.06*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bt(u.save())
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
k=new B.ks(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.ks(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bx()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.dcN[A.o.F(p,5)]
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l=B.ap(e,A.w,0.25)
l.toString
m.san(new B.bT(A.nj,0.5,A.x,d,0,B.a([A.c,e,l],v),Ar.Sj,d).aD(0,B.bW(A.J,o*1.4)))
a3.af(i,m)
u.restore()}this.m5(a3,a4,a5,30,A.ix,130)},
coy(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.h.U(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.d_(q,1))
o=f+p*4
n=A.h.F(t*(0.05+0.06*C.d_(q,2))+C.d_(q,3)*o,o)
m=C.d_(q,4)
l=Math.sin(s+q*0.7)
J.bt(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.d_(q,5))+q)*180/3.141592653589793,0,0)
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
n=new B.bx()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m=(q&1)===0?D.cMb:D.doe
n.san(new B.a7(A.a5,A.a9,A.x,m,h,h).aD(0,B.bW(A.J,p)))
d.af(k,n)
v.restore()}this.m5(d,a0,a1,25,A.bL,140)},
bJ5(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m5(b1,b2,b3,40,A.bL,150)
for(w=Math.max(4,A.h.U(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.d_(r,1))
p=Math.sin(b3*(0.15+0.1*C.d_(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.d_(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bt(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bt(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aH(a3.r,A.aj,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.ks(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.ks(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bx()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.san(new B.a7(A.a5,A.a9,A.x,h?D.dnX:D.dqW,a7,a7).aD(0,new B.a4(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.b=A.aa
a3.c=Math.max(0.6,i)
a3.r=D.Cg.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=D.bvX.gp(0)
p.c=q*0.1
p.d=A.bG
b1.ah(new B.r(0,m*0.3),new B.r(0,q*0.4),p)
v.restore()}},
c8R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.r(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.h.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=v
r.r=D.aCT[u].j((1-t)*0.9).gp(0)
r.y=new B.fT(A.G,v)
q=s*0.3
d.aq(B.by(B.bX(g,s,s*1.6),new B.aP(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.d_(o,1)*4)+o)))
m=D.aCT[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.by(new B.a4(l,k,l+w,k+n),new B.aP(v,v))
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=m.j(0.85).gp(0)
l.y=new B.fT(A.af1,q)
d.aq(k,l)}},
bQi(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.r(d,w)
u=a1*0.09
for(t=Math.max(4,A.h.U(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.d_(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.d_(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bL,A.pg,A.dy][A.o.F(q,4)]
k=C.d_(q,3)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=l.j(0.75).gp(0)
j.a=A.pd
j.y=new B.fT(A.G,r)
a2.O(new B.r(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.L()
t.r=A.aE.gp(0)
t.c=1.2
a2.ah(new B.r(d,0),new B.r(d,w-u),t)
t=B.L()
t.r=A.d_.gp(0)
a2.O(v,u,t)
t=a2.c
J.bt(t.save())
a0=new B.aH(a0.r,A.aj,null,null,B.a([],x.v))
a0.E(new B.jA(B.bW(v,u)))
a2.mx(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.h.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=B.ap(A.bj,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.aF(new B.a4(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.tg(a2,v.a5(0,new B.r(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cEi(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.ck.az(0,A.h.D(a1/3,0,1))),e=new B.r(g,f)
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
s=new B.bx()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.bL.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.L()
f.san(new B.bT(A.z,0.5,A.x,k,0,B.a([D.bh_.j(0.6),D.aj6],x.O),k,k).aD(0,B.bW(e,g)))
d.O(e,g,f)
f=h*0.2
g=B.L()
g.san(D.eFY.aD(0,B.bW(e,f)))
d.O(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.h.F(g*(1+u*0.3)+C.d_(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.c.j(0.18).gp(0)
d.c0(B.bX(new B.r(n,m),s,v),l)
d.c0(B.bX(new B.r(n+r,m-p),s,o),l)}this.m5(d,a0,a1,20,A.hM,180)},
cnC(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
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
s=new B.bx()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.S()
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=B.ap(A.cF,A.jk,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.h.U(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.d_(k,1))
i=f-A.h.F(v*(0.04+0.05*C.d_(k,2))+C.d_(k,3)*l,l)
o=C.d_(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.san(new B.bT(At.Bt,0.5,A.x,h,0,D.duC,h,h).aD(0,B.bW(new B.r(o,i),j)))
d.O(new B.r(o,i),j,u)}this.m5(d,a0,a1,25,A.c,190)},
cCk(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.h.U(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.d_(r,1))
p=g+q*4
o=A.h.F(u*(0.03+0.05*C.d_(r,2))+C.d_(r,3)*p,p)
n=C.d_(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.c.j(0.6+0.4*C.d_(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bG
J.bt(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.J,new B.r(0,o),l)
d.ah(new B.r(0,n),new B.r(m,k),l)
d.ah(new B.r(0,n),new B.r(j,k),l)}v.restore()}this.m5(d,e,a0,40,A.eO,200)},
c4P(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.r(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.h.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.h.cC(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bt(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bX(new B.r(o,0),p,q)
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.san(D.cbc.aD(0,new B.a4(0,n,m,l)))
a3.c0(f,e)
r.restore()}}$.S()
a0=B.L()
a0.b=A.aa
a0.c=a2*0.003
a0.r=D.bma.gp(0)
a3.O(w,v*1.08,a0)
d=a5*0.8
this.tg(a3,w.a5(0,new B.r(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m5(a3,a4,a5,40,A.bL,210)},
cw2(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i8,A.hM],a4),B.a([A.po,A.ix],a4),B.a([A.aD,A.ey],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bR<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
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
k.ab()}j.push(new B.r(f,e+d))}for(m=new B.ds(j,t),m=new B.bR(m,m.gJ(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bx()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.S()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l=a5[n]
i=l[0]
m.san(new B.a7(A.a5,A.a9,A.x,B.a([i,l[1],i],a4),A.mq,new B.mR(w)).aD(0,new B.a4(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m5(a6,a7,a8,40,A.c,220)},
c4x(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.h.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.h.bh(g/s),5)
a1=g+s
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3=Math.abs(a0)
a2.r=D.a62[a3].gp(0)
b0.aF(new B.a4(g,i,a1,f),a2)
a2=g+r
a4=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a4.r=D.a62[A.o.F(a3+2,5)].gp(0)
b0.aF(new B.a4(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.h.U(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.h.F(n*(0.04+0.05*C.d_(a0,1))+C.d_(a0,2)*a5,a5)
u=C.d_(a0,3)
t=C.d_(a0,4)
this.tg(b0,new B.r(u*a6,l-a7),a8*(0.01+0.012*t),D.a62[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cI3(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
m.E(new B.bx())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bX(new B.r(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.b=A.aa
d.c=p
d.r=A.aF.gp(0)
a4.cQ(f,e,3.141592653589793,!1,d)}a1=B.L()
a1.san(new B.a7(A.a5,A.a9,A.x,D.dxu,A.aBP,null).aD(0,new B.a4(u,a2,r,k)))
a4.af(m,a1)
a0=A.h.F(a6*0.6,1.4)
if(a0<1)this.tg(a4,new B.r(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bMh(a4,a5,a6,60)},
bMh(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.h.U(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.h.F(l*(0.1+0.1*C.d_(p,31))+C.d_(p,32)*v,v)
n=C.d_(p,33)
J.bt(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bX(A.J,r*A.h.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=D.S5[A.o.F(p,5)].gp(0)
d.aF(o,n)
u.restore()}},
cA4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m5(d,e,f,70,A.c,250)
for(w=Math.max(4,A.h.U(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.d_(p,1)*1.6
n=A.h.F(f+C.d_(p,2)*o,o)/o
m=i*(C.d_(p*7+A.h.bh((f+C.d_(p,2)*o)/o),3)*1.2-0.1)
l=new B.r(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.r(m+t*k,v+u*k)
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.bL],s),null,null).aD(0,B.r2(j,l)))
k.c=r
k.d=A.bG
d.ah(j,l,k)
this.tg(d,l,q,A.c,1-n)}},
bHj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.h.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.d_(s,1))
q=A.h.F(C.d_(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.h.F(C.d_(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m=A.o.F(s,5)
n.r=D.aEE[m].j(o).gp(0)
n.a=A.pd
n.y=new B.fT(A.G,r*0.12)
d.O(new B.r(q,p),r,n)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=Math.max(0.6,r*0.05)
n.r=D.aEE[m].j(o*1.4).gp(0)
d.O(new B.r(q,p),r,n)}},
clc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bt(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bX(A.J,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.b=A.aa
o.c=u
o.r=A.bL.j(0.45).gp(0)
d.c0(p,o)
n=f*(0.9+q*0.25)+q
m=new B.r(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=A.hM.gp(0)
d.O(m,t,o)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=A.i8.j(0.4).gp(0)
o.y=new B.fT(A.G,r)
d.O(m,s,o)
w.restore()}this.m5(d,e,f,45,A.bL,270)},
bUH(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.h.U(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.d_(o,1)
switch(n){case 0:l=new B.r(m*a1,p)
break
case 1:l=new B.r(m*a1,q)
break
case 2:l=new B.r(r,m*a2)
break
default:l=new B.r(s,m*a2)
break}k=A.h.F(a6+C.d_(o,2)*4,4)/4
j=A.ed.az(0,A.h.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.d_(o,3))*(j*i)
if(h<=0.5)continue
g=D.dkL[A.o.F(o,5)]
J.bt(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bX(new B.r(0,l),i,j)
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.san(new B.a7(A.aY,A.b3,A.x,B.a([A.c,g],u),null,null).aD(0,B.bX(new B.r(0,l),f,h)))
a4.c0(d,a0)}$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.i8.gp(0)
a4.O(A.J,h*0.3,l)
v.restore()}this.m5(a4,a5,a6,30,A.hM,280)},
c8z(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.h.F(t+n/4,1)
l=B.bW(new B.r(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.b=A.aa
j.c=u
j.r=D.aAU[n].j((1-m)*0.8).gp(0)
a4.cQ(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.h.U(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.h.F(v*(0.06+0.06*C.d_(h,1))+C.d_(h,2)*i,i)
f=C.d_(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.d_(h,4))
d=D.aAU[A.o.F(h,4)]
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.r=d.gp(0)
J.bt(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.c0(B.bX(A.J,e,e*1.5),a0)
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
c7_(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.r(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bt(v.save())
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
d.r=B.ap(A.bL,A.pg,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=A.hM.j(0.8).gp(0)
a7.O(new B.r(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.L()
a5.san(new B.bT(A.z,0.5,A.x,a3,0,B.a([A.i8.j(0.25),D.a_h],x.O),a3,a3).aD(0,B.bW(w,a4)))
a7.O(w,a4,a5)
this.m5(a7,a8,a9,30,A.bL,300)},
cCr(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
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
g.san(new B.bT(A.z,0.5,A.x,null,0,B.a([A.hM,A.i8.j(0.6),D.a_h],o),null,null).aD(0,B.bW(h,p)))
b1.O(h,p,g)
for(l=Math.max(4,A.h.U(u)),f=0;f<l;++f){e=0.5+0.4*C.d_(f,1)
d=A.h.F(b3+C.d_(f,2)*e,e)/e
a0=A.h.bh((b3+C.d_(f,2)*e)/e)
a1=C.d_(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.d_(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.r(a4,a5)
a7=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a7.r=B.ap(A.hM,A.at,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bG
a7.a=A.pd
b1.ah(new B.r(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.r(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.r(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m5(b1,b2,b3,35,A.bL,310)},
bKW(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVT(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.d_(o,1))
m=a6*(0.14+0.24*C.d_(o,2))
l=a6-m
k=new B.a4(p,l,p+n,l+m)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.san(D.ccb.aD(0,k))
a7.aF(k,j)
i=A.h.bh(n/r)
h=A.h.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.d_(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a4.r=A.bL.j(0.85).gp(0)
a7.aF(new B.a4(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b21.prototype={
B(d){var w,v=null,u=new C.cgk(),t=new C.cgm(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.atz,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cgl(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.IC[w]))
return B.c_(A.bI,s,A.br,v,12,10)}}
C.a_T.prototype={
S(){return new C.aCk()}}
C.aCk.prototype={
gwl(){var w=this.d
return w===$?this.d=this.a.c:w},
gb2r(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.bb(w.b,A.b7,A.aP),$.ax())}return v},
gaA0(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNQ()
v=$.ax()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.bb(w,A.b7,A.aP),v)}return t},
t(){var w=this.gb2r(0),v=$.ax()
w.V$=v
w.R$=0
w=this.gaA0()
w.V$=v
w.R$=0
this.a2()},
a0r(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a0r=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i5().CT(90,700,700,A.eR),$async$a0r)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a0r)
case 8:p=e
o=q.b.toLowerCase()
n=J.ajz(o,".png")?"image/png":"image/jpeg"
r.m(new C.djp(r,n,p))
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
return B.i($async$a0r,v)},
b2q(d){var w=null,v=A.c.j(0.07)
return B.bA(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.La,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aix(p.gwl().a)
if(n==null)n=A.d.gH(D.IC)
w=p.gwl()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bS(0,new C.Ov(p.gwl(),!1,!0,new B.bg(w.a+v,x.W)),0,0,0),B.ao(o,B.IK(A.nQ,new C.dju(d),B.ne(o,A.b5,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.IK(A.asq,new C.djv(p),B.ne(o,A.b5,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aXm,o,o,o)
t=B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb2r(0),o,o,o,o,o,2,p.b2q("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.djw(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.h6,!0,A.a7,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.K(A.i8.j(0.6),A.r,1)
if(p.gwl().d.length===0)q=D.bZe
else{q=C.hzi(p.gwl().d)
if(q==null)q=new Uint8Array(0)
q=B.i3(B.fX(q,A.z,o,o,A.cm,A.bX,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.az(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gceZ(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwl().d.length!==0)r.push(B.aI(o,o,o,o,H.Qy,o,o,o,new C.djx(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bn(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.T,B.A(r,A.l,o,A.e,A.i,0,o,o),A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gaA0(),o,o,o,o,o,2,p.b2q("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.djy(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o),A.af,B.df(D.bY6,o,D.h9a,new C.djz(p,d),B.bp(A.aF,o,o,o,A.w,o,A.co,o,new B.ba(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.N,0,A.p),A.f,o,o,D.b9f,o,o,o,o,A.He,o,o,o)],u),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aO9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.a0d.prototype={
S(){return new C.bja(new B.au(A.aw,$.ax()))}}
C.bja.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aE(d,A.c_,x.w).w,j=n?A.a_:A.c,i=B.l(28),h=B.K(n?A.bw:A.bm,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cB,l,o,o,o,o),o,o,o,new C.dqc(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d30[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gP(v)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.ci
t.push(B.aM(!1,new B.bf(r,r,r,r),!0,B.p(A.z,B.d(s,o,o,o,o,o,o,A.q1,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bf(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dqd(this,s),o,o,o,o,o,o,o))}A.d.u(e,B.a([new B.D(A.hy,u,o),new B.D3(A.bI,6,6,A.br,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bs:A.aS
e.push(B.A(B.a([B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a7,o,A.ao,o,o,o,o),1),A.ae,B.bJ(A.aYm,o,new C.dqe(this),o)],g),A.l,o,A.e,A.i,0,o,o))
e.push(A.P)
return B.bn(!0,B.p(o,B.x(B.a([f,new B.di(1,A.cn,B.cw(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uM,A.a1p,o,o,o),!0,!1,A.ag,!0,!0)}}
C.biu.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e0()
a1.cU(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.L()
u.y=A.OZ
t=B.L()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.h.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.r(l,h)
if(a1.ai()<0.25){f=B.ap(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.h.D(0.35+j*0.35,0.05,0.85))
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
C.bib.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.by(new B.a4(0,0,0+a3.a,0+a3.b),A.jP),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.L()
a1.b=A.aa
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.n4
a2.aq(f,a1)
a1=x.v
a0=new B.aH(a0.r,A.aj,g,g,B.a([],a1))
a0.E(new B.jg(f))
v=new B.amb(new B.uU(B.BP(a0),!1,B.a([],x.Y))).gH(0)
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
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.h.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.b=A.aa
k.d=A.bG
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.h.F(o-q*(1-n/10),t)
i=A.h.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aH(r,l,g,new B.b7([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aH(r,l,g,new B.b7([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aH(r,e.b,g,new B.b7([v,0,i,!0]),B.a([],a1)),k)}}a0.jP()
h=u[d].W1(o).a
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=w.gp(0)
l.y=Ad.oA
a2.O(h,5,l)
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.c.gp(0)
a2.O(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bri.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e0()
f.cU(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h4()?-0.1:1.1
v=e.b*v
u=new B.r(w,v)
t=e.gaoz()*1.4
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
k=new B.bx()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=B.a([s.j(0.16),s.j(0)],r)
k.san(new B.amc(u,t,j,g,A.x,g,g,0))
k.y=A.kY
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bd1.prototype={
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
C.bcF.prototype={
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
C.byt.prototype={
a4(d,e){var w,v,u=new B.a4(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.L()
t=(0.5+0.5*t)*0.12
w.san(new B.bT(A.z,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),O.aBW,null).aD(0,u))
d.aF(u,w)
w=u.cr(-3)
v=B.L()
v.b=A.aa
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kY
d.aF(w,v)},
aE(d){return d.b!==this.b}}
C.bvr.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.h.bh(f)*7,q=0;q<7;++q){p=new B.e0()
p.cU(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.h.F(A.h.F(f,1)+q/7,1)*3.141592653589793)
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
C.buy.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a4(0,0,0+e.a,0+e.b)
$.S()
v=B.L()
v.a=A.pd
v.san(new B.a7(A.ay,A.aC,A.x,B.a([A.L,B.ap(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.h.D(u-0.15,0,1),A.h.D(u,0,1),A.h.D(u+0.15,0,1)],x.x),null).aD(0,w))
d.aF(w,v)},
aE(d){return d.b!==this.b}}
C.bhw.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdk(),q=0.55+0.45*Math.sin(this.b)
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
u.y=A.uR
r=new C.dj6(this,r*0.16,d,u,w)
t=e.gdk()*0.045
r.$3(new B.r(t,t),1,1)
v=e.a-t
r.$3(new B.r(v,t),-1,1)
s=e.b-t
r.$3(new B.r(t,s),1,-1)
r.$3(new B.r(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.yh.prototype={}
C.JL.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.atp.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vl.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mZ.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hM.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.en.prototype={
hT(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ej(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.ieE(v.z))
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
C.ll.prototype={
hT(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,en>")
n=B.C(new B.N(n,new C.cm_(),m),m.k("ak.E"))
return C.t4(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.cm0(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hY.prototype={
gbdX(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bk(v)},
gTn(){if(!C.kn(this.w))return!1
var w=this.gbdX()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d4(w.bU())},
gaFm(){var w=this.fx
if(w==null)w=this.d===D.r5?0.5625:1.7777777777777777
return w},
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
q=B.U(r).k("N<1,ll>")
r=B.C(new B.N(r,new C.clP(),q),q.k("ak.E"))
return C.Cs(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,p.fx,e,f,r,n,i,h,k)},
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
w=u.fx
if(w!=null)t.n(0,"paperAspect",w)
w=u.r
v=B.U(w).k("N<1,a9<n,@>>")
w=B.C(new B.N(w,new C.clQ(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k3.prototype={}
C.b4a.prototype={
B(d){return B.cm(new C.clV(this))}}
C.aqq.prototype={
S(){return new C.bmr(null,null)}}
C.bmr.prototype={
gb2s(){var w,v=this,u=v.d
if(u===$){w=B.bo(null,A.fM,null,1,null,v)
w.cK(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb2s().t()
this.bzD()},
B(d){return B.c7(this.gb2s(),new C.dRL(),this.a.c)}}
C.aNT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.af0.prototype={
QU(d,e,f,g){return this.bUk(d,e,f,g)},
bUk(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QU)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).N(null)
t=d.K(x.q).f
t.T(B.b2(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QU,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.K(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dl,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.u(n,B.a([A.ax,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.db)
n.push(B.A(B.a([B.E(new C.afh(A.hC,"Download",A.c3,new C.eDX(w,d),!0,v),1),A.as,B.E(new C.afh(A.tl,"Share",A.bp,new C.eDY(w,d),!1,v),1),A.as,B.E(new C.afh(A.hQ,"Safari",A.b2,new C.eDZ(w,d),!1,v),1)],m),A.l,v,A.e,A.i,0,v,v))
n.push(A.aB)
n.push(B.bP(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eE_(d),v,v))
return B.bn(!0,new B.D(A.qI,B.x(B.a([B.p(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.jn,v,t,u,s,v,A.n),v,v,v,v,A.Hk,v,v,1/0)],m),A.l,v,A.e,A.N,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.afh.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.K(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a3,!0,v,B.aM(!1,u,!0,B.eE(B.x(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bK5,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.b48.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.asw(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.cf_().amA(1.35)
s=B.ay2(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bFf(v)
if(i.e&&i.w!=null)q=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bp,h,h,h,h,2,D.c6M,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bg("slide_tf_"+g.a,x.W),h,A.xD,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.B_,A.ao,h,A.VU,h,h)
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
w=n?t.cPV(B.b1(g.Q).j(0.45),A.cL):t
p=g.as
l=m?1:h
k=m?A.eT:A.F5
p=B.d(f,new B.bg("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.VL:s
$.S()
j=B.L()
j.b=A.aa
j.c=3*w
j.e=A.dQ
j.r=A.av.gp(0)
j=i.cw5(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cw3(k,t,l?A.VL:s)],x.p),h)}else w=i.cw4(p,t,g.k2?A.VL:s,m)
v=new B.m_(w,new B.bg("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.bZ,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c2W()
case 3:return i.cnB()
case 2:return B.b5(h,h,h,new C.b45(g,h),A.h4)
case 5:g=g.r
return new C.b47(g,!i.e&&i.z==null,h)}},
cf_(){var w,v,u,t,s,r,q,p,o=this,n=null,m="NgmyOldStandard",l=o.c,k=l.k1,j=B.b1(l.Q),i=l.x,h=l.y,g=l.z,f=n,e=n,d=n,a0=n,a1=n
switch(k){case"serif":a1=m
w=j
break
case"goldserif":$.S()
d=B.L()
v=o.d
d.san(D.cbD.aD(0,new B.a4(0,0,0+900*v,0+l.w*v*1.25)))
a0=B.a([new B.cT(D.ZO,new B.r(0,2.5*v),4*v)],x.S)
a1=m
w=j
i=A.O
break
case"caps":f=3*o.d
w=j
i=A.u
break
case"elegant":f=1.2*o.d
w=j
i=A.k8
h=A.cL
break
case"shadow":v=o.d
a0=B.a([new B.cT(D.ZO,new B.r(0,4*v),8*v)],x.S)
w=j
break
case"neon":v=o.d
a0=B.a([new B.cT(j,A.J,6*v),new B.cT(j,A.J,16*v),new B.cT(j.j(0.8),A.J,30*v)],x.S)
w=j
break
case"marker":i=A.u
e=A.bt
w=A.av
break
case"stamp":f=6*o.d
w=j
i=A.u
g=A.ne
break
case"retro":v=o.d
f=2*v
v=4*v
a0=B.a([new B.cT(A.bE,new B.r(v,v),0)],x.S)
w=j
i=A.u
break
case"threed":v=B.ap(j,A.w,0.65)
v.toString
u=B.a([],x.S)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cT(v,new B.r(r,r),0))}a0=u
w=j
i=A.u
break
case"glitch":v=o.d
f=2*v
a0=B.a([new B.cT(A.ba,new B.r(-3*v,0),0),new B.cT(A.aA,new B.r(3*v,0),0)],x.S)
w=j
i=A.u
break
case"fire":v=o.d
a0=B.a([new B.cT(A.cP,A.J,8*v),new B.cT(A.aA,new B.r(0,-3*v),18*v)],x.S)
i=A.u
w=A.wh
break
case"ice":v=o.d
a0=B.a([new B.cT(A.aH,A.J,10*v),new B.cT(A.cF,A.J,22*v)],x.S)
i=A.O
w=A.eO
break
case"chalk":f=o.d
a0=B.a([new B.cT(j.j(0.45),A.J,3*f)],x.S)
w=j
i=A.k8
break
case"comic":v=B.ap(j,A.w,0.85)
v.toString
u=B.a([],x.S)
for(t=o.d,q=0;q<8;++q){p=D.ddE[q]
u.push(new B.cT(v,new B.r(p.a*t,p.b*t),0))}u.push(new B.cT(v,new B.r(5*t,6*t),0))
a0=u
w=j
i=A.u
break
case"gold":$.S()
d=B.L()
v=o.d
d.san(D.c9w.aD(0,new B.a4(0,0,0+900*v,0+l.w*v*1.6)))
a0=B.a([new B.cT(A.G_,new B.r(0,3*v),5*v)],x.S)
w=j
i=A.u
break
case"sunset":$.S()
d=B.L()
v=o.d
d.san(D.c9T.aD(0,new B.a4(0,0,0+900*v,0+l.w*v*1.6)))
w=j
i=A.u
break
case"softglow":a0=B.a([new B.cT(j,A.J,14*o.d)],x.S)
w=j
i=A.a8
break
case"lowercase":f=2*o.d
w=j
i=A.cD
break
case"double":v=o.d
u=5*v
v=10*v
a0=B.a([new B.cT(j.j(0.45),new B.r(u,u),0),new B.cT(j.j(0.2),new B.r(v,v),0)],x.S)
w=j
break
case"whisper":f=6*o.d
w=j
i=A.k8
break
default:w=j}v=l.w
u=d==null?w:n
l=l.k3
l=l!==0?B.b1(l):e
return B.m(n,l,u,n,g,n,n,n,a1,n,n,v*o.d,h,n,i,d,1.25,!0,n,f,n,n,n,a0,n,n)},
aC0(d,e,f,g,h){var w,v,u,t,s,r=null,q=this.c
if(D.fkB.q(0,q.k1))w=d.toUpperCase()
else w=q.k1==="lowercase"?d.toLowerCase():d
v=new C.clT(h)
u=q.k2?C.irt(w,e,v):r
if(u==null){v=v.$1(e)
q=q.as
t=g?1:r
s=g?A.eT:A.F5
return B.d(w,r,t,s,r,!g,f,v,q,r,r)}return B.Zl(B.cS(u,r,r,r,r,r,r,r,r,r,r),r,r,v.$1(e),q.as)},
cw5(d,e,f,g){return this.aC0(d,e,f,!1,g)},
cw3(d,e,f){return this.aC0(d,e,f,!1,null)},
cw4(d,e,f,g){return this.aC0(d,e,f,g,null)},
bFf(d){switch(d.a){case 2:return A.z
case 1:case 5:return A.a9
default:return A.a5}},
c2W(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bM
return B.as(B.X(s.b===D.lw?A.If:A.D6,A.aE,t,t,t,32),t,t,t)}w=u.bIj(r)
if(s.b===D.lw){s=B.l(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.K(A.cA,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dL,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aR_(r,!0)
return C.fRw(s.go,v,s.id)}return w},
aR_(d,e){var w,v,u,t,s
try{w=C.irT(d)
t=this.c.db
v=t==="marriage_locked_bg"||A.a.c5(t,"_bg")
u=A.a.c5(t,"_fill")
t=B.cm(new C.clS(this,w,u,v,e))
return t}catch(s){return D.ags}},
bIj(d){return this.aR_(d,!1)},
cnB(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.beT
return C.isa(v,w.db,w.dx)}}
C.b45.prototype={
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
r.E(new B.bx())
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
r.E(new B.bx())
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
r.E(new B.bx())
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
r.ab()}}r.E(new B.bx())
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aLp.prototype={
S(){return new C.bxY(null,null)}}
C.bxY.prototype={
Y(){var w,v=this
v.a3()
w=B.bo(null,A.hO,null,1,null,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBU()},
aRa(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bN(new B.o(w,w,w,B.l(8),w,new B.a7(A.a5,A.a9,A.x,v,w,w),A.n),A.bk,B.as(B.d(d,w,w,w,w,w,w,A.dl,w,w,w),w,w,w),w)},
bFt(){var w,v=this,u=null,t=v.aRa("Slide A",A.bp),s=v.aRa("Slide B",A.b2)
if(v.a.c===D.cd)return new B.an(A.a0,u,A.b1,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c7(w,new C.fj0(v,s,t),u)},
B(d){return this.bFt()}}
C.aM6.prototype={
jt(d){return new B.a4(0,0,0+d.a*A.h.D(this.b,0,1),0+d.b)},
kb(d){return d.b!==this.b}}
C.Wy.prototype={
S(){return new C.bmE(null,null)}}
C.bmE.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bo(null,A.Cy,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cd){w.sp(0,1)
return}B.bO(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e2M(u),x.a)},
bz(d){var w,v,u,t=this
t.bK(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cd)w.sp(0,1)
else B.bO(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e2L(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzU()},
B(d){var w,v=this.a
if(v.c.dy===D.cd||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c7(w,new C.e2K(this),v.d)}}
C.Fy.prototype={
B(d){return B.cm(new C.clL(this))}}
C.aC_.prototype={
S(){return new C.bgX()}}
C.bgX.prototype={
Y(){this.a3()
if(this.a.c!==D.cd)B.bO(A.Og,new C.dgj(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cd)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.v(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Wy(C.ej(A.b6,!1,4279310375,A.aG,"",4294538006,24,A.bo,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bb,o,2,"",0,0,"",u,D.eM,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.c9,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bg("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.v(0)
n=q.d
t=C.ej(A.b6,!1,4294967295,A.aG,"",4280640491,22,A.bo,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bb,o,2,"Element flies in",0,0,"",q.a.c,D.d1,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ao(32,new C.Wy(t,B.p(p,D.fVf,A.f,p,p,new B.o(s,p,B.K(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jr,p,p,1/0),!0,1,new B.bg("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bN(D.b9P,A.bk,n,p)}}
C.a9i.prototype={
S(){return new C.bnk(null,null)}}
C.bnk.prototype={
gb34(){var w=this.a
if(w.e)w=D.fkN.q(0,w.c)||D.aUl.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb34()){w=C.iq4(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bo(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cK(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bAp()},
B(d){var w,v=this,u=v.d
if(!v.gb34()||u==null)return v.a.d
w=v.a
return B.c7(u,new C.erj(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b24.prototype={
B(d){var w=null
return B.as(C.b49(!0,w,!1,C.ej(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bo,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bb,4280172719,2,"Aa",0,0,this.c,D.cd,D.d1,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bi9.prototype={
jt(d){return C.a42(this.b,new B.a4(0,0,0+d.a,0+d.b).cr(-this.c))},
kb(d){return d.b!==this.b||d.c!==this.c}}
C.btr.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a4(0,0,0+e.a,0+e.b).cr(-this.d),k=this.b,j=C.a42(k,l),i=e.gdk(),h=new C.f7V()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.san(D.aVX.aD(0,l))
d.af(j,w)
k=C.a42(k,l.cr(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bwu.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.san(O.aVY.aD(0,l))
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
k.san(D.fvc.aD(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a42(k,l.cr(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.ba.j(0.7).gp(0)
k.y=new B.fT(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pp.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.san(D.fv7.aD(0,l))
d.af(j,w)
w=C.a42(k,l.cr(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.biQ.gp(0)
d.af(w,v)
k=C.a42(k,l.cr(i*0.03))
v=h.$1(i*0.004)
v.r=D.blX.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.san(D.aVX.aD(0,l))
d.af(j,k)
for(k=B.BP(j),w=B.a([],x.Y),k=new B.uU(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bj(B.jN(y.M));--r
k.jP()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.h.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.jP()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.jP()
n=w[r].W1(q*o/p).a
m=D.daH[A.o.F(o,4)]
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=m.gp(0)
d.O(n,v,q)
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.9).gp(0)
d.O(new B.r(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.san(D.fvf.aD(0,l))
k.y=new B.fT(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.san(D.fvd.aD(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a42(k,l.cr(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.pi.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.buv.prototype={
a4(d,e){d.Gz(C.a42(this.b,new B.a4(0,0,0+e.a,0+e.b).cr(-this.c)),A.w,e.gdk()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aO8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aOD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aPX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.a9B.prototype={}
C.P0.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGV(B.a([],x.E),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUK(){return this.r},
gUL(){return this.w},
gMr(){return this.x}}
C.aGV.prototype={
Y(){var w,v,u=this
u.a3()
$.aU.bZ$.push(u)
C.fWO()
C.hGu()
C.hj3()
C.aSq()
$.hHG=new C.eKe(u)
w=B.bo(null,A.Cv,null,1,null,u)
w.f1(0,!0)
u.fy!==$&&B.aQ()
u.fy=w
v=$.hgj.h(0,u.a.c)
if(v!=null){w=B.C(v,x.I)
u.d=w
u.x=!1}u.J6()},
bz(d){var w,v,u=this
u.bK(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Pm(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J6()}},
jn(d){if(d===A.Bw||d===A.uc||d===A.ub||d===A.qa)this.uh()},
t(){var w,v,u,t=this
$.aU.hZ(t)
if(!t.x){w=t.a.c
v=B.C(t.d,x.I)
$.hgj.n(0,w,v)}w=t.at
if(w!=null)w.a1(0)
t.uh()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dn(w,w.r,w.e);w.C();){v=w.d
v.V$=$.ax()
v.R$=0}for(w=t.CW,w=new B.dn(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hl()}for(w=t.cx,w=new B.dn(w,w.r,w.e);w.C();){v=w.d
v.V$=$.ax()
v.R$=0}t.bAC()},
gZg(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPG(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ady(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTn())return!1
return!0},
kf(){return this.ady(null)},
akA(){var w=this.c
if(w==null)return
w.K(x.q).f.T(D.fts)},
qV(){if(!this.kf())return!1
this.akA()
return!0},
ats(d){var w,v,u,t,s,r=this
if(r.ady(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hGK(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ax(){return this.ats(null)},
J6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.atr(k),$async$J6)
case 3:j=e
w=4
return B.b(C.b2h(k),$async$J6)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.hc5(j,t.c61())
w=t.gZg()?5:7
break
case 5:r=t.gPG()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8N(r),$async$J6)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.eGC())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.ca(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.eGD())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zf(m==null?"":m)!=null)continue
C.fX_(n,s)
p=!0}t.m(new C.eGE(t,s))
l=B.C(s,x.I)
$.hgj.n(0,k,l)
if(p||s.length>J.ad(j))t.uh()
case 1:return B.h(u,v)}})
return B.i($async$J6,v)},
c61(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.E)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kn(w)&&w!==q}if(w)p.push(r)
return p},
cuv(d){var w,v=this,u=d.w
if(!C.kn(u)||u==="hati_kiapo_uongozi")return
v.abS(d)
w=A.d.bk(v.d,new C.eIc(d))
u=v.d
if(w>=0){u[w]=d.hT()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.ca(u,0,d.hT())
v.db=!1},
cox(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kn(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cuv(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hY>")
s=B.C(new B.cM(new B.Y(s,new C.eI0(),w.k("Y<1>")),new C.eI1(),v),v.k("M.E"))
return s},
Pm(d){return this.bUL(d)},
uh(){return this.Pm(null)},
bUL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cox()
w=3
return B.b(C.Xs(d==null?t.a.c:d,s),$async$Pm)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.ats(r)?4:5
break
case 4:w=6
return B.b(C.OC(r),$async$Pm)
case 6:q=r.x
p=A.a.i(q==null?t.gPG():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bk(t.d,new C.eG_())
q=t.d
if(o>=0)q[o]=r.hT()
else A.d.ca(q,0,r.hT())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pm,v)},
pS(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kn(u.w))===!0?A.ha:A.lM
v.at=B.cz(w,new C.eJk(v))},
b2t(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agO(u.hT(),v.f,v.r))
if(w.length>40)A.d.cH(w,0)
A.d.a8(v.ay)},
cIl(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agO(w.e.hT(),w.f,w.r))
w.m(new C.eKa(w,v.pop()))
w.pS()},
ctB(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agO(w.e.hT(),w.f,w.r))
w.m(new C.eIa(w,v.pop()))
w.pS()},
oL(){var w,v,u=this
if(u.e==null)return
w=A.d.bk(u.d,new C.eJY(u))
if(w>=0){u.d[w]=u.e.hT()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
YO(d){var w,v,u,t,s=this.gdw()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yi(){var w,v,u,t
for(w=this.ch,v=new B.dn(w,w.r,w.e);v.C();){u=v.d
u.V$=$.ax()
u.R$=0}w.a8(0)
for(w=this.CW,v=new B.dn(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hl()}w.a8(0)},
KX(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdw()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d0(new B.cM(new B.Y(w,new C.eJZ(),v.k("Y<1>")),new C.eK_(),u),u.k("M.E"))
w=this.ch
v=B.a3(w).k("cr<1>")
v=B.C(new B.cr(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.V$=$.ax()
p.R$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hl()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.d1)continue
p=n.a
m=w.c1(0,p,new C.eK0(n))
s.c1(0,p,new C.eK1())
p=m.a.a
o=n.r
if(p!==o)m.sb4(0,o)}},
Ip(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aU(u.d,new C.eFm(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPG()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.ca(u.d,0,u.e.hT())}u.oL()
u.pS()},
akV(d,e){var w,v,u,t,s=this
if(s.kf())return
w=s.YO(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kn(v.w))===!0
if(u){C.iq8(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdw()
if(t!=null)C.iq9(t,w.d+w.f*0.5)}}s.Ip()
s.oL()
s.pS()
if(u&&s.c!=null)s.m(new C.eKb())},
cJt(d,e){var w=this,v=w.gdw()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ip()
w.oL()
w.pS()},
gdw(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqZ(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.io5(o)
if(w!=null)return w
v=q.gdw()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c3a(v)
t=q.c39(v)
s=B.b1(v.e)
r=v.f
return new C.k3(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.i0n(o)},
c3a(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.d1)s=t.w>=28||A.o.D(A.o.ar(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.a_},
c39(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.d1&&t.w<28)return B.b1(t.Q)}return A.aL},
agT(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gZg()){w.c.K(x.q).f.T(D.fs2)
return}w.abS(d)
w.b3L(C.bFL(d))
return}if(C.cmD(v)){w.abS(d)
w.b3L(d)
return}w.m(new C.eHj(w,d))},
au0(){var w,v,u,t,s,r,q=this
q.a3A(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kn(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eFk(q))
if(r&&q.c!=null){u.toString
q.Kt(u,s)}return}q.uh()
q.m(new C.eFl(q))},
b3K(d){this.abS(d)
this.a14(d,!0)},
abS(d){if(!C.kn(d.w))return
C.fX_(d,this.d)},
a14(d,e){return this.cko(d,e)},
b3L(d){return this.a14(d,!1)},
cko(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a14=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bFL(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPG():r)
t.dy.W(0,q.toLowerCase())
C.a8K(t.a.c,q)}r=s}else r=d
w=C.cmD(r.w)?3:4
break
case 3:w=5
return B.b(t.abT(r),$async$a14)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aU(t.d,new C.eHG(l))
o=l.a.hT()
n=C.kn(o.w)&&C.iro(o)
t.m(new C.eHH(t,o,p))
if(n){m=A.d.bk(t.d,new C.eHI(o))
if(m>=0){t.d[m]=o.hT()
t.uh()}}if(!t.ady(l.a))t.a_1()
r=!1
if(t.c!=null)if(!t.ady(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.ats(r)&&C.fSQ(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.T(D.fsD)
case 1:return B.h(u,v)}})
return B.i($async$a14,v)},
abT(d){return this.bSL(d)},
bSL(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lH(r.c,A.AE),$async$abT)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lm(!1,r,s.c,s.d,null,A.AE,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abT,v)},
oz(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cmD(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cm2(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oz,v)},
agA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eHi(),s,null,!0,!0,x.H),$async$agA)
case 3:if(t.c==null){w=1
break}t.au0()
case 1:return B.h(u,v)}})
return B.i($async$agA,v)},
agz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eHf(),s,null,!0,!0,x.H),$async$agz)
case 3:if(t.c==null){w=1
break}t.m(new C.eHg())
t.au0()
case 1:return B.h(u,v)}})
return B.i($async$agz,v)},
a_1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$a_1)
case 3:r=e
if(B.k8(J.u(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aC("Bool","ngmy_marriage_hint_seen",!0),$async$a_1)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fqC)
case 1:return B.h(u,v)}})
return B.i($async$a_1,v)},
Kt(d,e){return this.cuV(d,e)},
cuV(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kt=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ai8(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Kt)
case 9:w=4
break
case 6:w=10
return B.b(C.ai9(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Kt)
case 10:w=4
break
case 7:w=11
return B.b(C.aia(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Kt)
case 11:w=4
break
case 8:w=12
return B.b(C.aib(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Kt)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kt,v)},
ZC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ZC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gZg()){t.c.K(x.q).f.T(D.fqP)
w=1
break}s=t.gPG()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.HG(r,"Search states\u2026",s,A.kg,"Hati ya Kiapo: which state?"),$async$ZC)
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
C.a3r(p,o,r,p,new C.eGy(t),new C.eGz(t),s)
case 1:return B.h(u,v)}})
return B.i($async$ZC,v)},
agU(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dW,null,new C.eHp(u),s,!0,!0,!1,A.lX,!1,!1,x.N),$async$agU)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aib(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ai8(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ai9(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aia(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.ZC()
return B.h(null,v)}})
return B.i($async$agU,v)},
cju(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b2t()
w=C.cC()
v=C.Cs(t,t,t,t,D.Et,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,t,"office_blue",t,!1,t)
u.m(new C.eHq(u,v))},
abf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$abf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qV()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ivU(s),$async$abf)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cE(q.r,new C.eFo())
t.d8(new C.eFp(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abf,v)},
aiV(d,e,f,g){var w=null,v=g?A.dq:A.ci,u=B.K(g?A.aT:A.cA,A.r,1)
return B.he(B.az(w,B.p(w,B.X(d,g?A.c:A.aL,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a13(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a13=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qV()){w=1
break}s=t.kg()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eHB(),q),q.k("M.E"))}o=s!=null&&s.b===D.kj?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.T(D.fsP)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eHC(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a13)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a13,v)},
aha(){return this.ckn()},
ckn(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aha=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qV()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ivG(s,t.f+1,o),$async$aha)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jH(s,B.U(s).c)
p.a=A.d.bk(o.r,new C.eHE(q))
t.d8(new C.eHF(p,t,o,q,r))
t.c.K(x.q).f.T(D.ftd)
case 1:return B.h(u,v)}})
return B.i($async$aha,v)},
ahh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ahh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qV()||!t.Ax()){w=1
break}s=t.gdw()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eHW(),q),q.k("M.E"))
if(p.length===0){t.c.K(x.q).f.T(D.fqm)
w=1
break}o=new B.N(p,new C.eHX(),B.U(p).k("N<1,F>")).f0(0,new C.eHY())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.bb(l,A.b7,A.aP),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.L,null,new C.eHZ(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ahh)
case 3:for(r=new B.dn(r,r.r,r.e);r.C();){q=r.d
q.V$=$.ax()
q.R$=0}if(t.c!=null)t.m(new C.eI_())
case 1:return B.h(u,v)}})
return B.i($async$ahh,v)},
agX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agX=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hJ7(s,new C.Fp(r,q,p,o==null?"":o)),$async$agX)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d8(new C.eHr(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aix(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agX,v)},
abM(){return this.bS2()},
bS2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qV()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ivT(s,t.f+1,l),$async$abM)
case 3:r=e
q=$.hfU
$.hfU=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d8(new C.eFF())
t.c.K(x.q).f.T(D.fqd)
w=1
break}if(!q){s=r.CW
s=C.hHE(l,s==null?"":s,!1)}else s=!1
if(s){t.d8(new C.eFG(t,l,r))
t.c.K(x.q).f.T(D.ftI)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jH(s,B.U(s).c)
s=l.r
m.a=A.d.bk(s,new C.eFH(p))
o=s.length
t.d8(new C.eFI(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abM,v)},
aTq(d,e){if(e){this.ahK()
return}this.cju(d,!1)},
bNw(){return this.aTq(null,!1)},
ahK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c6,null,new C.eI5(t),r,!0,!0,!0,A.pV,!1,!1,x.N),$async$ahK)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eI6(t,C.io4(s).oR()))
case 1:return B.h(u,v)}})
return B.i($async$ahK,v)},
d8(d){var w=this
if(w.qV())return
w.Ip()
w.b2t()
w.m(d)
w.KX()
w.oL()
w.pS()},
a9L(){this.d8(new C.eEh(this,D.n9))},
aUV(){var w=this.gdw()
if(w==null)return
this.d8(new C.eFD(this,w))},
aU0(){var w=this.e
if(w==null||w.r.length<=1)return
this.d8(new C.eFB(this))},
b6G(d,e){if(this.e==null||d===e)return
this.d8(new C.eIe(this,d,e))},
OT(d){return this.bPy(d)},
bPy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.K(x.q).f.T(D.fsK)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPG():s)
w=5
return B.b(C.a8M(r),$async$OT)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8K(t.a.c,r)
s=t.c
if(s!=null){s=s.K(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.att(s)
w=6
return B.b(C.b4d(t.a.c,s),$async$OT)
case 6:if(t.c==null){w=1
break}t.m(new C.eFx(t,d))
w=7
return B.b(t.uh(),$async$OT)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OT,v)},
cuS(d,e){var w=this
if(d.z){w.akA()
return}w.m(new C.eId(w,d,e))
w.pS()},
kg(){var w,v,u,t,s,r=this.gdw()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
XN(d){return this.ch.c1(0,d.a,new C.eFn(d))},
avU(d){return this.CW.c1(0,d.a,new C.eG0())},
a3A(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.YO(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ap$.d.c
if(u!=null)u.jr()},
bae(){return this.a3A(!0)},
a3w(d){var w,v,u=this
if(u.qV())return
if(!u.Ax())return
w=u.YO(d)
if(w==null||w.b!==D.d1)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.XN(w).sb4(0,"")}u.m(new C.eJW(u,d))
$.aU.x1$.push(new C.eJX(u,d,w))},
baN(d){var w=this
if(d.b===D.d1&&!w.kf()&&w.Ax()){w.a3w(d.a)
return}w.aCq(d.a)},
aCq(d){var w,v,u,t,s,r=this
if(r.kf())return
w=r.r
if(w!=null&&w!==d){v=r.YO(w)
if(v!=null&&v.b===D.d1){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eJl(r,s,d))
if(s||d==null){t=$.aU.ap$.d.c
if(t!=null)t.jr()}},
aPt(){this.d8(new C.eEi(this))},
pz(d){return this.bEw(d)},
bEw(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$pz)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d8(new C.eEf(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pz,v)},
WP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(X.DJ(78,1920),$async$WP)
case 3:s=e
if(s==null||t.gdw()==null){w=1
break}t.d8(new C.eE5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WP,v)},
WJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdw()==null){w=1
break}w=3
return B.b(W.DE(t.a.c),$async$WJ)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gau(s)){t.c.K(x.q).f.T(D.fuh)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eE2(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$WJ)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdw()==null){w=1
break}t.d8(new C.eE3(t,q))
case 1:return B.h(u,v)}})
return B.i($async$WJ,v)},
auS(){var w=this,v=w.r
if(v==null||w.gdw()==null)return
if(A.d.aU(w.gdw().z,new C.eFz(v))){w.c.K(x.q).f.T(D.fth)
return}if(w.w===v)w.a3A(!0)
w.d8(new C.eFA(w,v))},
bLL(){var w=this.kg(),v=w==null
if((v?null:w.b)===D.eM)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.d1)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aQc(d,e){var w=this,v=w.kg(),u=w.gdw(),t=w.e
if(t==null)return
w.d8(new C.eEK(w,v,d,e,t,u))},
bG6(d){return this.aQc(d,null)},
aa0(d){return this.bGe(d)},
bGe(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aa0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aba.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oz(),$async$aa0)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kg()
if(s!=null){r=s.b
if(r===D.d1)t.bG6(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.eM){r=d.c
t.aQc(r.j(0.88),r)}w=1
break}t.d8(new C.eEP(t,d))
case 1:return B.h(u,v)}})
return B.i($async$aa0,v)},
aa_(d){return this.bGc(d)},
bGc(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kg()
r=t.gdw()
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
return B.b(t.oz(),$async$aa_)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d8(new C.eEN(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa_,v)},
bFX(d){var w=this.gdw()
if(w==null)return
this.d8(new C.eEJ(this,w,d))},
a19(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a19=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ivP(r),$async$a19)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oL()
t.m(new C.eHQ(t,s))
w=4
return B.b(t.uh(),$async$a19)
case 4:if(t.c!=null)t.agT(s)
case 1:return B.h(u,v)}})
return B.i($async$a19,v)},
abD(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3A(!0)
t.oL()
s=t.c
s.toString
w=3
return B.b(C.Su(s,q),$async$abD)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abD,v)},
AG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$AG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oL()
t=4
w=7
return B.b(C.aSR(m),$async$AG)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aSg(o,q,m.b),$async$AG)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ac(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AG,v)},
FV(d,e){return this.cHJ(d,e)},
cHJ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FV=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qV()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3A(!0)
t.oL()
s=h.a=t.e.hT()}else{r=A.d.bk(t.d,new C.eK4(d))
s=h.a=r>=0?t.d[r].hT():d.hT()}s=s.w
q=s==null
p=C.ip3(q?"":s)
o=C.hGv(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eK5(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cAM(n.length,o,s),$async$FV)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ioW(h.a)
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
return B.b(t.cAL(n,o),$async$FV)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fb(t.d,new C.eK6(s))
s=h.a.b
w=11
return B.b(t.cAJ(k.b,s),$async$FV)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hT()
case 5:j=C.ip2(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.T(D.fut)
w=1
break}w=12
return B.b(t.cAK(j.a,s,o,j.c),$async$FV)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eK7(h,t,i))
t.pS()
case 1:return B.h(u,v)}})
return B.i($async$FV,v)},
cAM(d,e,f){var w=this.c
w.toString
return B.bU(A.L,null,new C.eJB(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cAL(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eJA(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cAJ(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eJu(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cAK(d,e,f,g){var w=this.c
w.toString
return B.bU(A.L,null,new C.eJw(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ad5(){var w=null
return B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ad6(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ap(d,A.c6,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a7(A.ay,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eu,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fFz,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aYg(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.K(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Wu,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aYj(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a7(A.ay,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.K(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nf,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.zs,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bH,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGu(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
c24(d,e,f,g,h,i){return this.aYj(d,e,f,!1,g,h,i)},
axd(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dl,w,w,w),A.bF,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a1M,w,w,w)},
aYi(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.co,w,new B.ba(B.l(14),A.a1),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.o5,w,w,w),w,new C.eGt(d,f),v)},
aYh(d,e){return this.aYi(d,e,null)},
KO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pF(l,s.c,s.d),$async$KO)
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
for(l=A.d.gae(o.z),n=new B.eL(l,new C.eJm());n.C();){m=l.gP(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abv(l.charCodeAt(0)==0?l:l,r.b),$async$KO)
case 4:l=t.a
w=5
return B.b(B.pE(l.c,l.d),$async$KO)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KO,v)},
IL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pF(q,s.c,s.d),$async$IL)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abv(A.W.av(r.aj(),null),r.b+".json"),$async$IL)
case 4:q=t.a
w=5
return B.b(B.pE(q.c,q.d),$async$IL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IL,v)},
b9Y(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oL()
u.uh()
w=u.c
w.toString
v=B.ef(new C.eJV(u,t),!1,null,x.z)
B.a6(w,!1).ce(v)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$HZ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fXc(),$async$HZ)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.is4(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.av,null,new C.eEa(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HZ)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d8(new C.eEb(t,s))
w=1
break}if(p==="split")t.d8(new C.eEc(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
Oc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Oc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}w=3
return B.b(t.oz(),$async$Oc)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aSQ(s,null,null),$async$Oc)
case 4:r=e
if(r==null||t.gdw()==null){w=1
break}t.d8(new C.eEg(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Oc,v)},
bOs(){var w,v,u=this.e,t=u==null?null:u.at
if(t!=null)return B.b1(t)
w=this.gdw()
u=this.e
v=!1
if((u==null?null:C.kn(u.w))===!0)if(w!=null){u=w.e
u=0.299*(A.o.aI(u,16)&255)+0.587*(A.o.aI(u,8)&255)+0.114*(u&255)<90}else u=v
else u=v
if(u)return D.bnq
return null},
b6s(d){var w=this.e
if(w==null||!C.kn(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRz(){var w,v=this.c
v.toString
w=this.e
w=w==null?null:w.as
return C.aSQ(v,this.bOs(),w)},
a9J(d){return this.bEn(d)},
bEn(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}if(!t.Ax()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fuJ)
w=1
break}w=3
return B.b(t.aRz(),$async$a9J)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d8(new C.eE7(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9J,v)},
aiu(d){return this.ctE(d)},
ctE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aiu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}if(!t.Ax()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.ftQ)
w=1
break}w=3
return B.b(t.aRz(),$async$aiu)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d8(new C.eIb(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aiu,v)},
cg9(){var w,v,u=this
if(u.kf())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bB(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cGJ()}},
cGJ(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d8(new C.eK2(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c2p(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d8(new C.eGx(this,r,u.d))},
c7l(d){var w
if(this.kf())return!1
w=this.e
if((w==null?null:C.kn(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fTA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lw&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c7m(d){var w
if(this.kf())return!1
w=this.e
if((w==null?null:C.kn(w.w))!==!0)return!0
if(!this.Ax())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fTA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lw&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
Ok(d){return this.bGE(d)},
bGE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ok=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}if(!t.Ax()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fsE)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.as_(p),$async$Ok)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.T(D.ftj)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.OC(r)
w=1
break}t.m(new C.eET(t,d,o))
t.oL()
$.aU.x1$.push(new C.eEU(t))
case 1:return B.h(u,v)}})
return B.i($async$Ok,v)},
WN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$WN)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bGv(),$async$WN)
case 4:s=e
if(s==null||t.gdw()==null){w=1
break}t.d8(new C.eE4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WN,v)},
P7(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$P7)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kg()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fX3(r),$async$P7)
case 4:q=e
if(q==null){w=1
break}t.d8(new C.eFZ(s,q))
case 1:return B.h(u,v)}})
return B.i($async$P7,v)},
jl(d){this.d8(new C.eEd(this,d))},
qK(d){return this.bFQ(d)},
bFQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qV()){w=1
break}m=!D.aUo.q(0,A.a.i(d))
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
case"sign_paper":t.Oc()
w=1
break A
case"hd_photo":t.WN()
w=1
break A
case"sharpen":t.P7()
w=1
break A
case"print":t.AG()
w=1
break A
case"rotate":s=t.kg()
if(s!=null)t.d8(new C.eEm(s))
w=1
break A
case"text_box":t.aPt()
w=1
break A
case"picture":t.WP()
w=1
break A
case"present":t.b9Y()
w=1
break A
case"new_slide":t.a9L()
w=1
break A
case"export_json":t.IL()
w=1
break A
case"outline_share":t.KO()
w=1
break A
case"flashcard_tool":t.vU(D.JH)
w=1
break A
case"quiz_tool":t.vU(D.JI)
w=1
break A
case"worksheet_tool":t.vU(D.JJ)
w=1
break A
case"duplicate_el":s=t.kg()
if(s==null){w=1
break A}t.d8(new C.eEn(t,s))
w=1
break A
case"delete_el":t.auS()
w=1
break A
case"bring_fwd":s=t.kg()
if(s==null||t.gdw()==null){w=1
break A}t.d8(new C.eEo(t,s))
w=1
break A
case"send_back":s=t.kg()
if(s==null||t.gdw()==null){w=1
break A}t.d8(new C.eEz(t,s))
w=1
break A
case"align_left":s=t.kg()
if(s!=null)t.d8(new C.eEC(s))
w=1
break A
case"align_center":s=t.kg()
if(s!=null)t.d8(new C.eED(s))
w=1
break A
case"align_right":s=t.kg()
if(s!=null)t.d8(new C.eEE(s))
w=1
break A
case"grayscale":case"brighten":t.P7()
w=1
break A
case"flip_h":s=t.kg()
if(s!=null)t.d8(new C.eEF(s))
w=1
break A
case"flip_v":s=t.kg()
if(s!=null)t.d8(new C.eEG(s))
w=1
break A
case"rectangle":t.pz(D.bb)
w=1
break A
case"circle":t.pz(D.eZ)
w=1
break A
case"triangle":t.pz(D.kk)
w=1
break A
case"arrow":t.pz(D.Ev)
w=1
break A
case"line":case"divider":t.pz(D.fw)
w=1
break A
case"word_count":r=t.gdw()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eL(q,new C.eEH()),o=0;p.C();){n=A.a.fw(A.a.i(q.gP(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eEI(),B.U(n).k("Y<1>")).gJ(0)}t.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.jl(C.je(A.K,!1,t.gqZ().d.l(),A.aG,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.na,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.jl(C.je(A.K,!1,t.gqZ().e.l(),A.aG,22,A.bo,A.a8,0.12,q,"Subtitle goes here",0,D.dr,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jl(C.je(A.b6,!0,4279310375,A.aG,20,A.bo,A.a8,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vy,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jl(C.je(A.b6,!1,4279310375,A.aG,20,A.bo,A.a8,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.vx,0.8,0.1,0.22))
w=1
break A
case"quote":t.jl(C.je(A.K,!1,4279310375,A.aG,24,A.cL,A.a8,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dr,0.8,0.1,0.3))
w=1
break A
case"citation":t.jl(C.je(A.b6,!1,4284773515,A.aG,14,A.bo,A.a8,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.vy,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jl(C.je(A.e2,!1,4279310375,A.aG,14,A.bo,A.a8,0.08,C.cC(),C.bGx(),0,D.dr,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jl(C.je(A.e2,!1,4279310375,A.aG,13,A.bo,A.a8,0.06,C.cC(),"Page "+(t.f+1),0,D.dr,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d8(new C.eEp(t))
w=1
break A
case"footer_bar":t.d8(new C.eEq(t))
w=1
break A
case"highlight":t.d8(new C.eEr(t))
w=1
break A
case"redact":t.d8(new C.eEs(t))
w=1
break A
case"callout":t.d8(new C.eEt(t))
w=1
break A
case"checkboxes":t.jl(C.je(A.b6,!1,4279310375,A.aG,20,A.bo,A.a8,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dr,0.8,0.1,0.2))
w=1
break A
case"table":t.jl(C.je(A.b6,!1,4279310375,A.aG,16,A.bo,A.a8,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dr,0.8,0.1,0.18))
w=1
break A
case"memo":t.d8(new C.eEu(t))
w=1
break A
case"letter":t.jl(C.je(A.b6,!1,4279179050,A.aG,17,A.bo,A.a8,0.82,C.cC(),C.bGx()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jl(C.je(A.b6,!1,4279310375,A.aG,22,A.bo,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vy,0.8,0.1,0.12))
w=1
break A
case"toc":t.jl(C.je(A.b6,!1,4279310375,A.aG,18,A.bo,A.a8,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dr,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jl(C.je(A.b6,!1,4279310375,A.aG,16,A.bo,A.a8,0.08,C.cC(),"Signature: _________________________",0,D.dr,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jl(C.je(A.b6,!1,4279310375,A.aG,16,A.bo,A.a8,0.08,C.cC(),"Initials: ______",0,D.dr,0.3,0.65,0.78))
w=1
break A
case"approved":t.jl(C.je(A.K,!1,4278556265,A.aG,28,A.bo,A.u,0.12,C.cC(),"APPROVED",0,D.na,0.32,0.62,0.08))
w=1
break A
case"draft":t.jl(C.je(A.K,!1,4292617766,A.aG,28,A.bo,A.u,0.12,C.cC(),"DRAFT",0,D.dr,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jl(C.je(A.K,!1,871318596,A.aG,36,A.bo,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dr,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d8(new C.eEv(t))
w=1
break A
case"progress":t.d8(new C.eEw(t))
w=1
break A
case"stars":t.jl(C.je(A.K,!1,4279310375,A.aG,36,A.bo,A.a8,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.r7,0.8,0.1,0.4))
w=1
break A
case"equation":t.jl(C.je(A.K,!1,4279310375,A.aG,32,A.bo,A.O,0.14,C.cC(),"y = mx + b",0,D.dr,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jl(C.je(A.K,!1,4279310375,A.aG,18,A.bo,A.a8,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vx,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d8(new C.eEx(t))
w=1
break A
case"compare":t.d8(new C.eEy(t))
w=1
break A
case"link_text":t.jl(C.je(A.b6,!1,4280640491,A.ne,16,A.bo,A.a8,0.1,C.cC(),"https://example.com",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"phone":t.jl(C.je(A.b6,!1,4279310375,A.aG,18,A.bo,A.a8,0.1,C.cC(),"(555) 123-4567",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"email":t.jl(C.je(A.b6,!1,4280640491,A.aG,18,A.bo,A.a8,0.1,C.cC(),"name@email.com",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d8(new C.eEA(t))
w=1
break A
case"cover_page":r=t.gdw()
if(r==null){w=1
break A}t.d8(new C.eEB(t,r))
w=1
break A
case"invoice":t.jl(C.je(A.b6,!1,4279179050,A.aG,16,A.bo,A.a8,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"resume":t.jl(C.je(A.b6,!1,4279179050,A.aG,17,A.bo,A.a8,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jl(C.je(A.b6,!1,4279310375,A.aG,16,A.bo,A.a8,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bGx()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dr,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jl(C.je(A.b6,!1,4279310375,A.aG,17,A.bo,A.a8,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dr,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jl(C.je(A.b6,!1,4279310375,A.aG,15,A.bo,A.a8,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dr,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qK,v)},
cAd(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fkJ.q(0,this.z)},
cAc(d){if(this.kg()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bbI(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cd,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.bw
u=B.K(u,A.r,o&&e?2:1)
t=C.irU(d)
s=o?12:18
r=o?A.H:A.d0
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Qp,A.f,p,p,D.FO,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.f2,B.az(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bSj(d){var w,v=null,u=this.kg()
if(u==null)return A.bM
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aE:A.an,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.u(w,new B.N(D.T1,new C.eFY(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.i,0,v,v)},
vU(d){return this.bEv(d)},
bEv(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aUi.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oz(),$async$vU)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d8(new C.eEe(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.fj2
w=h.e
if(w==null)return h.bIp()
v=h.gdw()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aE(u,A.c_,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aE(u,A.eU,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c6:D.ble
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTn()}else j=!1
if(j)k.push(new C.a9j(h.a.c,!1,h.e.gbdX(),h.gcg6(),g))
else if(s&&h.e!=null&&!h.kf()&&C.cmD(h.e.w)){j=h.a
k.push(new C.a9j(j.c,j.d,g,h.gchf(),g))}if(s)k.push(h.bSe(w,t,r))
if(s&&h.kf()){w=t?A.fY:A.lm
j=B.l(14)
i=B.K(A.bp.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.c0b,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.fY,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yW,A.hP,g,g,g))}w=!n
if(w&&!h.kf())k.push(h.c8i(t,r))
if(w&&h.kf())k.push(h.cHK(t))
if(r&&h.kg()!=null&&w&&!h.kf())k.push(h.c8d(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b9m(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b9m(t,!1),g))
i.push(B.E(new B.bL(A.aY,g,g,new B.e8(h.bJL(v,t,!s||p),g),g),1))
if(h.cAd(r)&&u&&s&&!h.kf())i.push(h.cfT(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.i,0,A.p),1))
if(q&&!h.kf()&&h.cAc(!1))j.push(new B.a5(240,g,h.bV9(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c8e(t))
return B.c6(g,m,B.bn(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bIp(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f1(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.rE(0,!1)}p=w?A.c6:A.c
v=r.c
v.toString
v=B.aE(v,A.dD,x.w).w
u=r.a.e
t=x.p
s=B.a([r.cf0(A.bp,A.qP,new C.eEX(r),r.gcjr(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.bx,B.A(B.a([B.E(r.asy(A.bp,A.i_,"Blank Presentation",new C.eEY(r)),1),A.as,B.E(r.asy(A.b2,A.vc,"Class Template",new C.eEZ(r)),1)],t),A.l,q,A.e,A.i,0,q,q)],t)
if(r.a.d&&r.gZg()&&!A.d.aU(r.d,new C.eF_()))A.d.u(s,B.a([A.T,new B.m_(r.asy(A.c3,A.iW,"Create Hati ya Kiapo",r.gc4N()),D.hAt)],t))
s.push(A.nd)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.m(q,q,w?A.aE:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.af)
t=r.d
if(t.length===0)s.push(r.bFi(w))
else{t=new B.ib(t,B.U(t).k("ib<1>"))
A.d.u(s,t.gdP(t).dN(0,new C.eF0(r,w),x.l))}return B.c6(q,p,B.bn(!1,new B.iX(new C.eF1(r,w),B.cw(s,q,q,new B.Q(18,v.r.b+12,18,u),q,q,A.ah,!1),q,x.fH),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bQl(){this.m(new C.eFC(this))
var w=this.c
w.toString
if(B.aE(w,A.c_,x.w).w.a.a<900){w=$.aU.ap$.d.c
if(w!=null)w.jr()}},
ahb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kg()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eHP(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$ahb)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahb,v)},
BA(d,e){return this.cAz(d,e)},
cAz(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$BA=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.ZM,!0,"Dismiss",j,new C.eJn(),new C.eJo(r,d,e),A.iQ,!0,x.N),$async$BA)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.akA()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTn()){r.akA()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aSR(d),$async$BA)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aSg(j,q,d.b),$async$BA)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ac(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.hR(D.ZM,!0,"Dismiss",j,new C.eJp(),new C.eJq(d),A.a3,!0,x.y),$async$BA)
case 20:if(g===!0)r.OT(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.aid("Rename presentation",d.b),$async$BA)
case 24:l=g
if(l!=null)r.cuS(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eJr(r,k))
r.pS()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$BA,v)},
b4o(d,e){var w=null
return B.bP(!1,D.h4P,w,w,!0,w,w,w,e,w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bp,w,w,w,A.az,w,A.lP,w,w,w,w,w,A.jO,w,w))},
bFi(d){var w,v=null
if(!d)return B.p(v,D.bzs,A.f,v,v,B.a7G(A.aH,22),v,v,v,v,A.eA,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c7(w,new C.eEj(this,!0),v)},
bOq(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eFq(),x.dv).c_(0,new C.eFr()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.amH,this.aPM(v,e,new C.eFs(),f),null)},
aPM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e7)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.u(q,B.a([B.X(p,g?A.ab:A.by,n,n,n,10),A.rd],m))}p=d[v]
o=g?A.c.j(0.85):A.aL
q.push(B.d(p,n,1,n,n,n,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.p(n,new B.c8(A.aM,A.e,A.N,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bH(r,r,r,r),new B.bf(s,s,s,s),n,n,A.n),n,n,n,n,A.n3,n,n,n))
A.d.u(l,u)}return new B.dx(A.dM,A.a5,A.f,B.A(l,A.l,n,A.e,A.N,0,n,n),n)},
bFg(d,e,f){return this.aPM(d,e,null,f)},
bOt(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dxO
else if(v==="hati_kuhoweya")w=D.dhN
else{if(v==="hati_kiapo_uongozi")v=D.d2V
else v=C.kn(v)?D.db4:A.IW
w=v}v=this.fy
v===$&&B.c()
return B.c7(v,new C.eFv(this,f,e,d,w),null)},
c8e(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kg()
if(i==null||i.b!==D.d1)return A.bM
w=k.XN(i)
v=k.avU(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.D(A.CG,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b4,B.bP(!1,D.h0b,j,j,!0,j,j,j,new C.eGY(k),j,j)],t),A.l,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.av:A.c
q=B.l(18)
p=B.K(A.bp.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hn,new B.bN(new B.o(r,j,p,q,o,j,A.n),A.bk,new B.D(A.eX,B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bp,j,j,j,j,2,D.c6u,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xD,j,j,j,j,j,j,!1,"\u2022",j,new C.eGZ(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a7,A.B_,A.ao,j,A.VU,j,j),j),j),j),1)
q=B.l(16)
p=d?A.bs:A.c
o=B.K(d?A.aL:A.bm,A.r,1)
n=B.E(B.ca(B.A(B.a([k.uL(G.Pp,j,new C.eH_(k,i),d),k.uL(G.a2U,j,new C.eH0(k,i),d),k.uL(I.ar6,j,new C.eH1(k,i),d),k.uL(I.a3I,j,new C.eH2(k,i),d),k.uL(k.bFe(i.as),j,new C.eH3(k,i),d),k.uL(D.asd,j,new C.eH4(k,i),d),k.uL(D.asc,j,new C.eH5(k,i),d)],t),A.l,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,j,A.aM),1)
m=A.h.M(i.w)
return B.bS(0,B.aG(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.amQ,B.p(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aE:A.an,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.df],t),A.l,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lR,j,j,j),j)],t),A.l,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c8d(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kg()
if(m==null)return A.bM
w=m.b
v=w===D.d1
u=B.l(18)
t=x.O
t=d?B.a([A.bs,A.a_],t):B.a([A.c,A.aS],t)
s=B.K(d?A.aL:A.bm,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7Y(A.jb,"Edit",new C.eGJ(o,m),d,!0))
if(w===D.kj)p.push(o.b7Y(A.Ia,"Shape & ring",new C.eGK(o),d,!0))
p.push(o.uL(A.Dy,"Format",new C.eGL(o),d))
if(v)A.d.u(p,B.a([o.uL(G.Pp,n,new C.eGM(o,m),d),o.uL(D.asd,n,new C.eGN(o,m),d),o.uL(D.asc,n,new C.eGO(o,m),d)],q))
p.push(A.b4)
p.push(o.cyq(A.ej,n,o.gaTZ(),d,!0))
p.push(o.uL(A.hd,"Done",new C.eGP(o),d))
return B.p(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a7(A.a5,A.a9,A.x,t,n,n),A.n),n,n,n,A.CD,A.lR,n,n,n)},
bFe(d){switch(d.a){case 2:return D.a3F
case 1:case 5:return D.a3H
default:return D.a3G}},
c98(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e2
default:return A.b6}},
aCo(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aA
else if(h)w=A.c
else{v=g?A.ab:A.aL
w=v}v=B.l(12)
u=B.l(12)
t=h?N.Is:n
if(h)s=n
else s=g?A.c.j(0.06):A.ci
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.u(o,B.a([A.e7,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pu,B.aG(!1,A.a3,!0,n,B.aM(!1,v,!1,B.eE(new B.D(new B.Q(q,8,q,8),B.A(o,A.l,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai),n)},
uL(d,e,f,g){return this.aCo(d,e,f,g,!1,!1)},
b7Y(d,e,f,g,h){return this.aCo(d,e,f,g,h,!1)},
cyq(d,e,f,g,h){return this.aCo(d,e,f,g,!1,h)},
bSe(d,e,f){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.l(20),l=x.O
l=e?B.a([A.bs,A.a_],l):B.a([A.c,A.ok],l)
w=B.K(e?A.aL:A.ph,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bp.j(e?0.18:0.1),A.cz,18)],x.V)
u=o.T5(A.eK,"Back",o.gbLv(),e)
t=d.b
s=f?14:15
t=B.d(t,n,1,A.a2,n,n,n,B.m(n,n,e?A.c:A.a_,n,n,n,n,n,n,n,n,s,n,n,A.u,n,n,!0,n,-0.2,n,n,n,n,n,n),n,n,n)
s=o.f
r=d.r.length
q=x.p
r=B.a([u,A.df,B.E(B.A(B.a([new B.di(1,A.cn,t,n),A.ae,B.d(""+(s+1)+" of "+r,n,1,n,n,n,n,B.m(n,n,e?A.bV:A.an,n,n,n,n,n,n,n,n,11,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),A.uF,n,A.e,A.i,0,A.d5,n),1)],q)
if(!o.kf()){u=o.T5(A.pD,"Undo",o.ax.length===0?n:o.gcIk(),e)
A.d.u(r,B.a([u,o.T5(D.bUx,"Redo",o.ay.length===0?n:o.gctA(),e)],q))}r.push(o.T5(A.zq,"PDF",new C.eFQ(o),e))
if(C.kn(d.w))r.push(o.T5(A.hC,"Download",new C.eFR(o),e))
else r.push(o.T5(A.hC,"Download as video",new C.eFS(o),e))
if(!o.kf()||C.bFR(d)!=null){u=B.X(A.oI,e?A.ab:A.by,n,n,n,n)
t=e?A.av:A.c
s=A.w.j(0.35)
q=B.l(20)
p=e?D.ajJ:A.bm
r.push(B.CF(n,t,D.b8d,14,u,new C.eFT(o,d,e),D.esB,new C.eFU(o,d),A.ag,s,new B.ba(q,new B.ay(p,1,A.r,-1)),A.L,"More",x.N))}r.push(A.df)
r.push(B.aG(!1,A.a3,!0,n,B.aM(!1,B.l(14),!0,B.eE(D.eza,n,new B.o(n,n,n,B.l(14),n,N.Is,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gaDd(),n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai))
return B.p(n,B.A(r,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,w,m,v,new B.a7(A.ay,A.aC,A.x,l,n,n),A.n),n,n,n,D.bEr,D.bJV,n,n,n)},
cHK(d){var w=this,v=null,u=B.l(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.K(d?A.ct:A.bm,A.r,1)
return B.p(v,B.ca(B.A(B.a([w.j6(A.v9,"Print",new C.eK8(w),d),w.j6(A.zq,"Download PDF",new C.eK9(w),d),w.j6(A.qV,"Present",w.gaDd(),d)],x.p),A.l,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yW,G.aow,v,v,v)},
Jh(d,e,f,g,h,i){var w,v=null,u=f.j(i?0.18:0.12),t=B.l(11)
t=B.p(v,B.X(e,f,v,v,v,19),A.f,v,v,new B.o(u,v,v,t,v,v,A.n),v,36,v,v,v,v,v,36)
u=B.d(g,v,1,A.a2,v,v,v,B.m(v,v,i?A.c:A.a_,v,v,v,v,v,v,v,v,14,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=x.p
return B.Pp(B.A(B.a([t,A.bc,B.E(B.x(B.a([u,A.rg,B.d(h,v,1,A.a2,v,v,v,B.m(v,v,i?A.aE:A.an,v,v,v,v,v,v,v,v,11.5,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),A.E,v,A.e,A.N,0,A.p),1)],w),A.l,v,A.e,A.i,0,v,v),!0,56,A.f3,d,x.N)},
T5(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dB
else w=g?A.ab:A.aL
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ch)},
c8i(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.K(d?A.ct:A.bm,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eH8(r,d),t),t.k("ak.E"))
t.push(new B.D(A3.aoa,new B.fh(new C.eH9(r),q),q))
A.d.u(t,w?B.a([new B.D(V.wL,r.aiV(A.kc,"Ending celebration",r.gcjE(),d),q),new B.D(V.wL,r.aiV(A.Ia,"Logo ring & frame",r.gckl(),d),q)],x.p):A.f7)
A.d.u(t,w?B.a([new B.D(V.wL,r.aiV(A.lT,"Look and feel",r.gckm(),d),q),new B.D(V.wL,r.aiV(A.pF,"Edit this slide's text",r.gckT(),d),q)],x.p):A.f7)
t.push(new B.D(V.wL,B.he(B.az(q,B.p(q,D.fir,A.f,q,q,new B.o(q,q,q,B.l(999),B.a([new B.ab(0,A.G,L.lJ.j(0.4),A.J,10)],x.V),D.aum,A.n),q,34,q,q,A.f3,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eHa(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ca(B.A(t,A.l,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,D.bKm,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ca(r.cw1(d),A.t,q,A.y,q,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yW,q,q,q,q)},
cw1(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dqH[v]
u.a=null
s=u.a=t.b
w.push(e.m2(e.cxN(s),t.a,new C.eIx(u,e),a3,D.aUi.q(0,s)))}w.push(e.j6(A.l0,"Notes Slide",new C.eIy(e),a3))
w.push(e.m2(A.I9,"Quiz",new C.eIz(e),a3,!0))
w.push(e.m2(Q.HJ,"Worksheet",new C.eIK(e),a3,!0))
w.push(e.m2(A4.Id,"Flashcard",new C.eIV(e),a3,!0))
w.push(e.m2(A.Qe,"Lab Report",new C.eJ5(e),a3,!0))
w.push(e.m2(A.qT,"Rubric",new C.eJc(e),a3,!0))
w.push(e.m2(A.pA,"Minutes",new C.eJd(e),a3,!0))
w.push(e.m2(A.oG,"Syllabus",new C.eJe(e),a3,!0))
w.push(e.m2(A.a4e,"Timeline",new C.eJf(e),a3,!0))
return B.A(w,A.l,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.ds6[v]
w.push(e.m2(r.b,r.c,new C.eJg(e,r),a3,!D.aUo.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j6(A.x4,a0,e.gaPs(),a3),e.j6(A.v4,"Picture",new C.eIA(e),a3),e.j6(A.zD,"Bio link",new C.eIB(e),a3),e.j6(A.a4d,"Table",new C.eIC(e),a3),e.j6(A.Qi,"Sticky",new C.eID(e),a3),e.j6(A.tk,"Divider",new C.eIE(e),a3),e.j6(A.zN,"Header",new C.eIF(e),a3),e.m2(A9.th,"Rectangle",new C.eIG(e),a3,!0),e.m2(A.py,"Circle",new C.eIH(e),a3,!0),e.m2(A.a3r,"Triangle",new C.eII(e),a3,!0),e.m2(A.jt,"Arrow",new C.eIJ(e),a3,!0),e.m2(D.bSV,"Parallelogram",new C.eIL(e),a3,!0),e.m2(D.bVv,"Hexagon",new C.eIM(e),a3,!0),e.m2(A.tk,"Line",new C.eIN(e),a3,!0),e.m2(A.zq,"PDF",new C.eIO(e),a3,!0),e.m2(L.a4m,"Signature",new C.eIP(e),a3,!0),e.j6(A8.Dh,"Quote",new C.eIQ(e),a3),e.j6(D.a31,a1,new C.eIR(e),a3)],x.p),A.l,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aE(w,A.c_,x.w).w
u=x.p
t=B.A(B.a([e.aQl("Wide 16:9",D.Et,a3),e.aQl("Short 9:16",D.r5,a3),new B.D(A.f2,B.n8(D.bXD,d,D.fXn,d,new C.eIS(e),d,d,d,d),d)],u),A.l,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bLK("This slide",!e.Q,a3,new C.eIT(e)),A.bn,e.aSD("All slides",e.Q,a3,new C.eIU(e),!0)],u),A.l,d,A.e,A.i,0,d,d)
p=e.bLL()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bV:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a6j,new C.eIW(e),n),n.k("ak.E"))
n=B.ca(B.A(n,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dt8[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dB:A.aT,1.5,A.r,-1)
l.push(new B.D(A.f2,B.az(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bH(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eIX(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ca(B.A(l,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bHP()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eIY(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.P,q,A.am,p,A.P,o,A.ax,n,A.P,m,A.ax,l,A.P,j,A.ax,B.ca(B.A(h,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM),A.am,e.c4U(a3)],u),A.E,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.kg()
w=e.c
w.toString
w=B.aE(w,A.c_,x.w).w
u=new C.eIw(e)
t=new C.eJh(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.T1,f.dy,new C.eIZ(e,u,f),A.b2)
A.d.u(p,B.a([o,A.ax,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ax],q))}q=e.gdw()
q=q==null?d:q.r
p.push(t.$4(D.T1,q,new C.eJ_(e,u),A.bp))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j6(A.l0,w,new C.eJ0(e),a3),e.j6(A.v9,"Print deck",new C.eJ1(e),a3),e.m2(D.aqj,"Export JSON",new C.eJ2(e),a3,!0),e.j6(A.fO,"Duplicate Slide",e.gaUU(),a3),e.j6(A.ej,a2,e.gaU_(),a3),e.cBV(a3)],x.p),A.l,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kg()
w=x.p
u=B.a([e.j6(D.a31,a1,new C.eJ3(e),a3),e.j6(A.fO,"Duplicate",e.gaUU(),a3),e.j6(A.ej,a2,e.gaU_(),a3),e.j6(A.qV,"Present",e.gaDd(),a3),e.j6(A.Dw,a0,e.gaPs(),a3),e.j6(A.Dp,"Fit Text",new C.eJ4(e),a3),e.j6(A.zq,"Download PDF",new C.eJ6(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j6(A.jN,"Transfer",new C.eJ7(e),a3))
if(f!=null){w=B.a([A.ae,e.j6(G.Pp,"Bold",new C.eJ8(e,f),a3),e.j6(G.a2U,"Italic",new C.eJ9(e,f),a3),e.j6(G.apU,"Underline",new C.eJa(e,f),a3),e.j6(Ai.Pq,"Bullets",new C.eJb(e,f),a3),e.bUT(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bSj(a3))
w.push(e.j6(D.bRB,"Delete",e.gaTZ(),a3))
A.d.u(u,w)}return B.A(u,A.l,d,A.e,A.i,0,d,d)}},
aQl(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.r5
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.acG,t,t,t)],v)
if(w)A.d.u(u,B.a([A.df,D.bWP],v))
return new B.D(A.f2,B.jD(t,t,t,B.A(u,A.l,t,A.e,A.N,0,t,t),t,new C.eES(this,w,e),s===e,A.bp.j(0.25),t,t,t),t)},
cBV(d){var w,v,u,t,s,r=this,q=null,p=r.gdw()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.K(d?A.aT:A.cA,A.r,1)
u=B.l(8)
t=B.X(A.D8,d?A.aE:A.an,q,q,q,14)
s=B.aI(q,q,q,q,D.ati,q,q,q,new C.eJE(r,p),q,q,q,q,q,A.ch)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bq,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.at9,q,q,q,new C.eJF(r,p),q,q,q,q,q,A.ch)],x.p),A.l,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Ho,A.n2,q,q,q)},
cxN(d){switch(d.a){case 6:return A4.Id
case 7:return A.I9
case 8:return Q.HJ
case 4:return A.zN
default:return A.l0}},
bUT(d,e){var w=null,v=B.K(e?A.aT:A.cA,A.r,1),u=B.l(8),t=B.aI(w,w,w,w,D.ati,w,w,w,new C.eG3(this,d),w,w,w,w,w,A.ch),s=A.h.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bq,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.at9,w,w,w,new C.eG4(this,d),w,w,w,w,w,A.ch)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uQ,A.n2,w,w,w)},
c4U(d){var w=null
return B.CF(B.Eb(B.X(Aa.a34,d?A.ab:A.by,w,w,w,16),w,w,D.h24,w,w,w),w,w,w,w,new C.eGB(),A.J,this.gbFW(),A.cq,w,w,w,"Slide layout",x.fO)},
m2(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.ci,s=B.K(g?A.dq:A.bm,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dy:A.bp,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Qp,A.f,w,w,D.FO,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.f2,B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,B.eE(new B.D(A.hn,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aR:A.by,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w)},
j6(d,e,f,g){return this.m2(d,e,f,g,!1)},
b9m(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aM
v=B.hW(t,new C.eJQ(u,s,e,d),s.r.length,A.cq,t,w,new C.eJR(e),!1)
s=d?A.av:A.ci
w=B.a([],x.p)
if(e&&!u.kf())w.push(new B.D(A.cq,B.IK(E.atx,new C.eJS(u),B.ne(t,A.bp,t,t,t,t,t,t,t,t,t,t,E.aV4,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.l,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJL(d,e,f){var w=null,v=this.e,u=v==null?w:v.gaFm()
if(u==null)u=1.7777777777777777
v=f?8:16
return new B.D(new B.Q(v,v,v,v),new B.bL(A.aY,w,w,new B.fH(u,B.az(w,B.cm(new C.eFi(this,d,e)),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eFj(this),w,w,w,w,w,w,!1,A.a4),w),w),w)},
bJN(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kn(a9.w))===!0,b1=b0&&C.fTA(b3),b2=b0&&b3.b===D.lw&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.kf())v=!b0||a7.c7m(b3)
else v=!1
if(!a7.kf())u=!b0||a7.c7l(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c9:A.bp
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hjd(b3))o=a8
else if(p&&!a7.kf())o=a7.gcg8()
else o=a7.kf()?a8:new C.eF6(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.bZ:A.iT
i=w&&C.hjd(b3)&&a7.Ax()?new C.eF7(a7,b3):a8
h=v&&b3.b===D.d1?new C.eF8(a7,b3):a8
g=u?new C.eF9(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bi
else e=q?A.c3:r
else e=A.L
e=B.K(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c3.j(0.08)
else a0=b3.b===D.lw?A.L:a8
if(b1){a1=a7.kf()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c3.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aE(a1,A.c_,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ax()
a3=b3.b===D.d1
a4=a3?a7.XN(b3):a8
a5=a3?a7.avU(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aE(a6,A.c_,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eFa(a7,b3):a8
a3=v&&a3?new C.eFb(a7,b3):a8
a6=C.b49(q,a4,a1,b3,a5,a2,a3,new C.eFc(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ao(-4,B.az(a8,B.p(a8,D.bZF,A.f,a8,a8,new B.o(r,a8,B.K(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eFd(a7,b3,b4,b5),a8,a8,new C.eFe(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kf()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.az(a8,B.p(a8,D.c_p,A.f,a8,a8,new B.o(A.d_,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc2o(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kf()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.az(a8,B.p(a8,D.c14,A.f,a8,a8,new B.o(A.c3,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eFf(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.d1)if(a7.w!==a9){e=a7.c
e.toString
e=B.aE(e,A.c_,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.as(B.az(a8,B.p(a8,D.hbg,A.f,a8,a8,new B.o(A.bp,a8,a8,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lo,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eFg(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.az(j,B.eK(A.z,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bg("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSD(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bp.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.K(e?A.bp:A.bw,A.r,1)
if(e)t=A.bp
else t=f?A.aE:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.u(t,B.a([A.df,B.p(r,D.Qp,A.f,r,r,D.FO,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.p(r,B.A(t,A.l,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.hl,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bLK(d,e,f,g){return this.aSD(d,e,f,g,!1)},
cfT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.V$=$.ax()
v.R$=0}v=d.c
w.n(0,k,new B.au(new B.bb(v,A.b7,A.aP),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aS
t=f?A.y9:l
if(f)s=new B.bH(new B.ay(e?A.bw:A.bm,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tL,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.ab:A.by,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b4,m.b4o(e,new C.eHc(m))],q),A.l,l,A.e,A.i,0,l,l)
o=B.m(l,l,e?A.c:A.aL,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bV:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(10),A.du),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eHd(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a7,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aWd(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kg()
if(a2==null)return A.bM
w=new C.eGh(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.h.D(1-a2.c,0.06,1)
t=A.h.D(1-a2.d,0.06,1)
s=A.h.D(1-a2.e,0.01,1)
r=A.h.D(1-a2.f,0.01,1)
q=a5?A.e0:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b4,a0.b4o(a3,a0.gbQk())],p),A.l,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fXU,B.E(B.l5(a1,a1,a1,u,0.05,new C.eGi(w,a2),A.h.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.h9E,B.E(B.l5(a1,a1,a1,t,0.05,new C.eGj(w,a2),A.h.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.d1
if(m)o.push(B.A(B.a([D.fRn,B.E(B.l5(a1,a1,a1,96,10,new C.eGk(w,a2),A.h.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
l=n===D.kj
if(l||n===D.lw||n===D.Uo)A.d.u(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.h2T,B.E(B.l5(a1,a1,a1,s,0,new C.eGl(w,a2),A.h.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.haY,B.E(B.l5(a1,a1,a1,r,0,new C.eGm(w,a2),A.h.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.DR[j]
i.a=null
g=h.a
i.a=g
k.push(B.jD(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.q0,a1,a1,a1),a1,new C.eGn(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c_(A.bI,k,A.br,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.DK[j]
f.a=null
g=e.a
f.a=g
h.push(B.jD(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.q0,a1,a1,a1),a1,new C.eGo(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.u(o,B.a([A.P,l,A.am,k,A.P,i,A.am,B.c_(A.bI,h,A.br,a1,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eGp(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.u(o,B.a([m,A.am,B.c_(A.bI,l,A.br,a1,6,6),A.af,B.hvN(new C.eGq(w,a2),D.cEm,B.ew([a2.as],k),!0,a1,k)],p))}if(n===D.eM){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eGr(w,a2),m),m.k("ak.E"))
A.d.u(o,B.a([n,B.c_(A.bI,m,A.br,a1,0,6)],p))}o.push(A.af)
o.push(B.df(D.c0R,a1,D.h50,new C.eGs(a0,a5),B.bp(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.ct:A.c
p=a4?A.y9:a1
if(a4)o=new B.bH(new B.ay(a3?A.bw:A.bm,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tL,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.CE,a1,a1,a1)},
bV9(d){return this.aWd(d,!1,!1,null)},
cf0(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c7(q,new C.eGv(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fGu,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bc,B.E(B.x(B.a([w,A.bF,A.cS,s.bFg(D.d8a,d,B.P(v).ax.a===A.I)],u),A.E,r,A.e,A.i,0,A.p),1)],u)
q=x.V
A.d.u(v,B.a([A.ae,B.dP(B.he(B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.foW,r,new B.o(r,r,B.K(A.c.j(0.55),A.r,1.3),r,B.a([new B.ab(0,A.G,A.c3.j(0.4),A.et,8)],q),D.aut,A.a6),r,r,r),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai),r,"Documents (Hati)",r,r),A.J)],u))
t=B.A(v,A.l,r,A.e,A.i,0,r,r)
w=s.c
w.toString
if(B.P(w).ax.a!==A.I)q=B.a7G(A.bh,20)
else{w=B.l(20)
v=B.a([D.bhe,D.bhH],x.O)
u=B.K(d.j(0.45),A.r,1.2)
q=new B.o(r,r,u,w,B.a([new B.ab(0,A.G,d.j(0.18),A.cz,14)],q),new B.a7(A.ay,A.aC,A.x,v,r,r),A.n)}return B.p(r,t,A.f,r,r,q,r,r,r,r,A.bS,r,r,r)},
asy(d,e,f,g){var w,v,u=null,t=this.c
t.toString
if(B.P(t).ax.a===A.dm){t=B.l(22)
w=A.a.q(f,"Kiapo")
v=B.a7G(w?A.bh:A.aH,22)
w=w?A.bh:A.aH
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.eE(B.x(B.a([new B.VU(w,48,e,u,u),A.af,B.d(f,u,u,u,u,u,u,D.fy3,A.K,u,u)],x.p),A.l,u,A.b9,A.i,0,A.p),u,v,u,A.CM,1/0),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}t=this.fy
t===$&&B.c()
return B.c7(t,new C.eE0(this,g,d,e,f),u)},
aid(d,e){return this.crM(d,e)},
crM(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$aid=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.bb(e,A.b7,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eI9(d,q),p,null,!0,!0,x.N),$async$aid)
case 3:s=g
q.V$=r
q.R$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aid,v)},
QV(d){var w=d.bU()
return""+B.bM(w)+"/"+B.bY(w)+"/"+B.bD(w)}}
C.agO.prototype={}
C.aBm.prototype={
S(){return new C.bfJ(null,null)}}
C.bfJ.prototype={
gcEf(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bM(u)+"/"+B.bY(u)+"/"+B.bD(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bo(u,A.qD,u,1,u,v)
w.f1(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bo(u,D.bCX,u,1,u,v)
w.cs(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.byv()},
JK(d){var w=0.12+d*0.09,v=A.h.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ck.az(0,new B.hV(w,v,A.ck).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bIH,B.c7(new B.hf(B.a([u,w],x.dS)),new C.dbL(this),v),v),v,v,v)}}
C.bfY.prototype={
B(d){var w=null,v=B.l(22),u=B.K(A.aL,A.r,1),t=x.p
return B.as(new B.D(D.bIY,B.aG(!1,A.a3,!0,w,B.p(w,B.bv(B.l(22),B.x(B.a([new B.D(D.bI9,B.x(B.a([B.p(w,D.c_v,A.f,w,w,new B.o(A.aA.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.h7b,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fHN,A.K,w,w)],t),A.l,w,A.e,A.i,0,A.p),w),A.e4,D.bC_,B.A(B.a([B.E(B.bP(!1,D.fW2,w,w,!0,w,w,w,new C.dc8(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.nF,w,A.p2,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bs,w,w,w,48,w,w,w,w,w,1),B.E(B.bP(!1,D.h0w,w,w,!0,w,w,w,new C.dc9(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.aA,w,w,w,w,w,A.nF,w,A.p2,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.i,0,w,w)],t),A.l,w,A.e,A.N,0,A.p),A.aq),A.f,w,Ac.Ye,new B.o(A.av,w,u,v,D.d8y,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.KN.prototype={
S(){return new C.bfI()}}
C.bfI.prototype={
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
return B.dP(B.d3(B.az(o,B.uN(B.cU(o,B.A(B.a([r,A.as,new B.di(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.eV:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.b9,A.N,0,o,o),o,o,A.b0,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nH,o,o,1/0),A.ck,A.jq,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dbG(p,d),new C.dbH(p),new C.dbI(p),new C.dbJ(p),o,o,o,!1,A.a4),k),new B.r(0,(1-k)*16))}}
C.QM.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.K(A.c.j(0.5),A.r,1.2),p=x.p
return B.aG(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.eX,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a7(A.ay,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eu,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nf,v,v,v),A.bF,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a14.prototype={
S(){return new C.aGY(D.dr,null,null)}}
C.aGY.prototype={
ga_8(){var w,v=this,u=v.w
if(u===$){w=B.bo(null,D.bCw,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b9R(d){if(!this.a.c.ay)return
this.x=d
this.ga_8().iD(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
Z.CW(O.abN)
Z.hiY(!1)
v.Sn()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.ga_8().t()
v=w.z
if(v!=null)v.a1(0)
Z.CW(O.KS)
Z.bFM()
w.bAD()},
cH8(){B.jv()
this.m(new C.eKP())
var w=this.c.K(x.q).f
w.Mj()
if($.bnH)w.T(D.fsj)},
Sn(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cz(B.dw(0,0,0,0,0,A.o.D(C.htZ(u,w),1,120)),new C.eKF(v))},
cGL(){var w,v=this
v.m(new C.eKO(v))
if(v.r)v.Sn()
else{w=v.f
if(w!=null)w.a1(0)}},
gaY9(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cAF(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eKG(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cz(A.lN,new C.eKH(w))},
aA1(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eKB(u))
u.Sn()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaY9()){u.cAF()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eKC(u,A.o.F(w+1,s)))
u.b9R(w)
u.Sn()}},
cqq(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eKD(v))
v.Sn()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eKE(v,w,t))
v.b9R(w)
v.Sn()}},
cCa(d){var w,v=this,u=v.e
if(u===D.cd){u=v.d
u===$&&B.c()
return new B.m_(d,new B.bg(u,x.ac))}w=v.cCb(u)
u=v.d
u===$&&B.c()
return B.oF(new B.m_(d,new B.bg(u,x.ac)),w,new C.eKM(),A.b0,A.b0,new C.eKN(v))},
cCb(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bCT
case 16:return A.iR
case 18:return A.n_
default:return A.mg}},
cC9(d,e,f){var w,v,u,t=null,s=B.cG(A.ck,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d2(s,!1,e,t)
case 2:case 17:w=x.K
return B.jO(e,new B.bi(s,new B.bs(A.tM,A.J,w),w.k("bi<bQ.T>")),t,!0)
case 3:w=x.K
return B.jO(e,new B.bi(s,new B.bs(A.UC,A.J,w),w.k("bi<bQ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jO(e,new B.bi(s,new B.bs(A.hr,A.J,w),w.k("bi<bQ.T>")),t,!0)
case 5:w=x.K
return B.jO(e,new B.bi(s,new B.bs(A.tK,A.J,w),w.k("bi<bQ.T>")),t,!0)
case 6:case 16:w=x.c
return B.ir(A.z,new B.d2(s,!1,e,t),t,new B.bi(s,new B.bs(0.82,1,w),w.k("bi<bQ.T>")))
case 7:w=x.c
return B.ir(A.z,new B.d2(s,!1,e,t),t,new B.bi(s,new B.bs(1.18,1,w),w.k("bi<bQ.T>")))
case 8:return B.c7(s,new C.eKI(s),e)
case 9:return B.c7(s,new C.eKJ(s),e)
case 10:return B.c7(s,new C.eKK(s),e)
case 11:return B.c7(s,new C.eKL(s),e)
case 12:w=x.c
return new B.d2(s,!1,B.ir(A.z,e,t,new B.bi(s,new B.bs(1.03,1,w),w.k("bi<bQ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.ji(B.jO(e,new B.bi(s,new B.bs(A.tM,A.J,v),v.k("bi<bQ.T>")),t,!0),A.t,new C.bv1(w,t))
case 15:w=x.K
return B.jO(e,new B.bi(s,new B.bs(A.UC,A.J,w),w.k("bi<bQ.T>")),t,!0)
case 19:w=B.dr()
w.n5((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k7(v,u,v,1)
return B.fA(A.z,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eK(A.z,(1-s.gp(0))*0.2,new B.d2(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.ji(new C.aqq(B.c7(n.ga_8(),new C.eKQ(n,v,w),m),m),A.t,m)}else{t=B.qt(new C.Fy(w,!0,!1,m))
l=B.b1(w.e)
u=n.cCa(B.ec(B.ji(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.htZ(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p8,m,m,m),A.bn,D.c1Y],k),A.l,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.b5,m,m,l,m,m,A.n),m,m,m,m,A.hm,m,m,m)
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
l.push(B.bS(0,new C.Ov(new C.Fp(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else l.push(B.as(new B.fH(q.c.gaFm(),B.ji(B.v4(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))
if(!$.bnH){r=B.IK(A.ls,new C.eKR(d),B.ne(m,A.b5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bn(!0,B.A(B.a([r,A.ae,B.IK(B.X(n.r?Ap.v8:A.he,m,m,m,m,m),n.gcGK(),B.ne(m,A.b5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ao(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h6,m,m,m),A.f,m,m,new B.o(A.b5,m,m,r,m,m,A.n),m,m,m,m,A.hm,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.u(l,k)}l.push(B.ao(m,B.bn(!0,B.az(A.bZ,B.p(A.lC,$.bnH?A.bM:s,A.f,m,m,m,m,64,m,m,D.bDC,m,m,150),A.y,!1,m,n.gcH7(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.az(m,new B.an(A.a0,m,A.b1,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eKS(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KT.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.D(E.anW,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b9x,w,w,w,w,w,w,w,w)}}
C.bv1.prototype={
jt(d){return new B.a4(0,0,0+d.a*A.h.D(this.b,0,1),0+d.b)},
kb(d){return d.b!==this.b}}
C.bkJ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b6h
break
default:w=B.l(6)
break}v=s.e
u=B.K(v?A.aD:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cU(r,B.as(B.p(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.xd,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b0,new B.o(s.f,r,u,w,r,r,A.n),A.ha,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bkI.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dHa.h(0,p)
if(o==null)o=D.dsh
p=p==="none"
w=p?q:new B.a7(A.a5,A.a9,A.x,o,q,q)
p=p?A.cC.j(0.25):q
v=r.e
u=v?B.K(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.asu:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eC,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aMO.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aOQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bAQ.prototype={}
C.aOR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.b4c.prototype={}
C.Xt.prototype={
S(){return new C.aGW()},
bkF(d){return this.e.$1(d)}}
C.aGW.prototype={
gb83(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gac0(){var w,v
if(this.d==="all")return B.br(this.a.d,!0,x.I)
w=this.gb83()
v=x.E
return w==null?B.a([],v):B.a([w],v)},
gaRc(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb83()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb9l(){return A.d.cB(this.gac0(),0,new C.eKl())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RZ()},
RZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4O(s.c,s.f),$async$RZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eKh(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RZ,v)},
JM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gac0()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fX_(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pF(o,q.c,q.f),$async$JM)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ef(new C.eKk(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ce(q),$async$JM)
case 4:q=t.a
w=5
return B.b(B.pE(q.c,q.f),$async$JM)
case 5:w=6
return B.b(t.RZ(),$async$JM)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JM,v)},
Sl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Sl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hF(o,D.em9,!0,"NgmySlidesTransferScan",x.N),$async$Sl)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eKi(t))
w=4
return B.b(C.aiX(s),$async$Sl)
case 4:r=e
t.m(new C.eKj(t))
o=J.a8(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.T(D.fr7)
w=1
break}w=5
return B.b(t.a.bkF(r),$async$Sl)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).N(null)
q=t.c.K(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Sl,v)},
JL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gac0()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pF(s,r.c,r.f),$async$JL)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fXe(null,A.d.gH(n),s,t.a.f)}else q=C.fXe(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hm(q,"ngmy_slides_"+p,!1),$async$JL)
case 4:o=e
s=t.a
w=5
return B.b(B.pE(s.c,s.f),$async$JL)
case 5:w=6
return B.b(t.RZ(),$async$JL)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JL,v)},
a4a(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a4a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eKm(t))
w=3
return B.b(C.bGe(),$async$a4a)
case 3:s=e
t.m(new C.eKn(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bkF(s),$async$a4a)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).N(null)
r=t.c.K(x.q).f
q=J.a8(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a4a,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.bA:A.ci,k=o.gac0().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.z,0.5,A.x,n,0,B.a([A.bp.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cB,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eKq(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tW],h),A.l,n,A.e,A.i,0,n,n)
w=B.l(24)
v=B.a([new B.ab(0,A.G,A.bp.j(0.35),A.eS,24)],x.V)
u=B.ao(n,B.X(A.qP,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.p(n,D.c2w,A.f,n,n,new B.o(t,n,B.K(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eu,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ax,D.bNR],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.l,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.he(B.az(A.bZ,D.foZ,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcl4(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a4S,A.n),n,n,n,n,E.a1z,n,n,1/0),A.e4,o.aA2(m,"What to transfer"),A.af,B.A(B.a([B.E(o.b_C(A.qV,m,new C.eKr(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.b_C(D.bSO,m,new C.eKs(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.db,o.aA2(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.l(16)
s=B.K(m?A.bw:A.bm,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aE:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bT,n,n,n))}else A.d.u(v,new B.N(u,new C.eKt(o,m),B.U(u).k("N<1,v>")))
A.d.u(w,v)}w.push(A.nd)
w.push(o.aA2(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.asA(A.aH,k,!0,A.ju,m,o.r,o.gcf4(),"Scan on another device","Show QR"),1),A.as,B.E(o.aPc(A.jG,!0,A.jv,m,o.gcxm(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.i,0,n,n))
w.push(A.T)
w.push(B.A(B.a([B.E(o.bDK(A.aV,k,A.hC,m,o.r,o.gcf1(),"Download .json","Backup file"),1),A.as,B.E(o.aPc(A.at,!0,AG.zM,m,o.gcJE(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.i,0,n,n))
if(k){v=A.bp.j(m?0.12:0.08)
u=B.l(16)
t=B.K(A.bp.j(0.28),A.r,1)
s=B.X(A.l_,A.bp.j(0.9),n,n,n,18)
r=o.gaRc()
q=o.gb9l()
p=o.gb9l()===1?"":"s"
A.d.u(w,B.a([A.bx,B.p(n,B.A(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.ab:A.by,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bH,n,n,n)],h))}j=B.a([j,B.bn(!0,B.x(B.a([new B.D(Ak.OV,i,n),B.E(B.cw(w,n,n,D.bHg,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,S.Yz,A.f,A.dZ,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
aho(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aho=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.iv3(s,t.d,t.e),$async$aho)
case 2:return B.h(null,v)}})
return B.i($async$aho,v)},
aA2(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bp,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aE:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w)},
b_C(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.av:A.c
if(g)w=A.bp
else w=e?A.bw:A.bm
w=B.K(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bp.j(0.2),A.cz,14)],x.V):s
u=A.bp.j(g?0.2:0.1)
t=B.l(12)
t=B.p(s,B.X(d,A.bp,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cq,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a3,!0,s,B.aM(!1,r,!0,B.eE(new B.D(A.bH,B.x(B.a([t,A.T,u,A.bF,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aE:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai)},
bOr(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.av:A.c,m=B.l(16)
if(p)w=A.bp
else w=e?A.bw:A.bm
w=B.K(w,A.r,p?2:1)
v=B.p(q,D.c2L,A.f,q,q,new B.o(q,q,q,B.l(12),q,new B.a7(A.a5,A.a9,A.x,B.a([A.bp,A.bp.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aE:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ea:A.py
if(p)r=A.bp
else r=e?A.aT:A.dB
return new B.D(A.cw,B.aG(!1,A.a3,!0,q,B.aM(!1,o,!0,B.p(q,B.A(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bH,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eKg(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q)},
asA(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bw:A.bm
w=B.K(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.tc,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.at3,A.f,s,s,D.b9j,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aG(!1,A.a3,!0,s,B.aM(!1,p,!0,B.eE(new B.D(E.a1e,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bF,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aE:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai),r)},
aPc(d,e,f,g,h,i,j){return this.asA(d,e,!1,f,g,!1,h,i,j)},
bDK(d,e,f,g,h,i,j,k){return this.asA(d,e,!1,f,g,h,i,j,k)}}
C.Xu.prototype={
S(){return new C.bnG()}}
C.bnG.prototype={
Y(){this.a3()
this.aga()},
aga(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aga=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fXe(null,A.d.gH(m),k,r.a.f):C.fXe(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kn(A.d.gH(n).w))C.fX_(A.d.gH(r.a.d),D.dpZ)
n=r.a
m=n.c
n=C.is9(n.d)
w=7
return B.b(C.fXd(p,C.ise(r.a.d),n,m,q),$async$aga)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eKu(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eKv(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aga,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.bA:A.ci,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cB(k.a.d,0,new C.eKw())
v=B.aI(j,j,j,j,B.X(A.eK,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eKx(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tW],u),A.l,j,A.e,A.i,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dl,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a4S,A.n),j,j,j,j,E.a1z,j,j,1/0)
q=B.l(24)
s=B.K(A.aH.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.W0,A.K,j,j))
else if(k.d==null)r.push(D.eyK)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ab(0,A.G,A.aD.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.u(p,B.a([D.fWz,A.am,B.az(j,B.p(j,B.A(B.a([D.c4m,A.as,B.d(m,j,j,j,j,j,j,D.fIb,j,j,j)],u),A.l,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c9k,A.n),j,j,j,j,A0.anG,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eKy(k,d),j,j,j,j,j,j,!1,A.a4),A.P,D.h02,A.aB],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.K(A.bw,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.qj(j,j,!1,l,j,!0,!0,j,!1,D.by2),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cq,j,j,j))
A.d.u(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ht,A.K,j,j))
return B.c6(j,h,B.bn(!0,B.x(B.a([new B.D(Ak.OV,v,j),B.E(B.ca(B.x(B.a([t,A.aO,B.p(j,B.x(r,A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.cbl,A.n),j,j,j,j,A.uP,j,j,1/0)],u),A.l,j,A.e,A.i,0,A.p),A.t,j,A.y,j,j,E.ao0,j,j,A.ah),1)],u),A.l,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGT.prototype={
S(){return new C.aGU(new B.au(A.aw,$.ax()),B.ke(!0,null,!0,!0,null,null,!1))}}
C.aGU.prototype={
Y(){var w=this
w.a3()
w.e.aV(0,new C.eDV(w))
$.aU.x1$.push(new C.eDW(w))},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.e.t()
this.a2()},
b2v(){var w,v=this.c
v.toString
w=C.zf(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aE(a2,A.eU,x.w).w,i=B.l(28),h=B.K(A.bp.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bp.j(0.28),A.vE,36),D.afY],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.c_z,A.f,k,k,new B.o(d,k,B.K(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fTy,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.i,0,A.p),A.f,k,k,D.b9K,k,k,k,k,A.wJ,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gea()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.a_
o=new B.aP(14,14)
if(q)n=A.bp
else n=r?A.bp.j(0.55):A.aL
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bp.j(0.28),A.J,12)],g):k
t.push(new B.bz(1,A.bd,B.cU(A.z,B.d(p,k,k,k,k,k,k,D.fBl,k,k,k),k,k,A.b0,new B.o(s,k,new B.bH(m,m,m,m),new B.bf(o,o,o,o),n,k,A.n),A.ha,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A2.AZ)
A.d.u(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.i,0,k,k),B.bS(0,B.d3(B.aN(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c7c,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uZ(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C9(5,k),new C.byj()],x.aS),k,k,A.aWl,k,5,k,1,k,k,!1,"\u2022",k,new C.eDR(l),k,new C.eDS(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a7,k,A.mB,k,k,k,k),0),0,0,0)],a1)
d=C.zf(w.a.a.toUpperCase())==null?k:l.gcf5()
return B.as(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a3,!0,k,new B.cN(Ah.Mq,B.p(k,B.bv(e,B.x(B.a([a0,new B.D(D.bHN,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.T,D.fRP,A.bx,new B.a5(1/0,50,B.bJ(D.h85,k,d,B.bp(A.bp,A.bs,A.an,k,A.c,k,k,k,new B.ba(B.l(16),A.a1),k,k,k)),k),A.am,B.bP(!1,A.o7,k,k,!0,k,k,k,new C.eDT(a2),k,B.fs(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.i,0,A.p),k)],a1),A.l,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.bA,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.byj.prototype={
pa(d,e){var w=e.a.toUpperCase()
return e.cQc(B.ho(A.bB,w.length),w)}}
C.atu.prototype={
S(){return new C.aGX(B.zV(A.Oa,A.oe,A.vl))}}
C.aGX.prototype={
t(){this.d.t()
this.a2()},
b2u(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j9(w,d)},
abW(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h5s(s),$async$abW)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b2u("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abW,v)},
cf3(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.isc(w[u])
if(t!=null){this.b2u(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.x7,s,s,s,t.gbSS(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eS(B.a([r,B.aI(s,s,s,s,B.X(q?A.v0:Aq.PX,s,s,s,s,s),s,s,s,new C.eKA(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bA,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h9i,s,s,s,1,s,!0)
r=B.zU(t.d,A.bX,t.gcf2())
w=B.l(28)
w=B.as(B.p(s,s,A.f,s,s,new B.o(s,s,B.K(A.bp,A.r,3),w,B.a([new B.ab(2,A.G,A.bp.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c6(p,A.w,new B.an(A.a0,s,A.b1,A.t,B.a([r,w,B.ao(32,B.p(s,D.fXF,A.f,s,s,new B.o(v,s,B.K(A.bp.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jr,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.byx.prototype={
B(d){var w=null,v=B.l(24),u=B.K(A.aL,A.r,1)
return B.aG(!1,A.a3,!0,w,B.p(w,B.x(B.a([B.p(w,H.asJ,A.f,w,w,D.b9t,w,56,w,w,w,w,w,56),A.aO,D.h9_,A.am,new B.k7(this.c,new C.flE(),w,w,x.cI),A.aO,new B.k7(this.d,new C.flF(),w,w,x.cl),A.af,D.h8Y],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,Ah.Mq,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,N.a1G,D.bIq,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)}}
C.a9j.prototype={
S(){return new C.bnp(A.bC)},
gd1(){return this.c}}
C.bnp.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a0t()
w.d=B.dh(A.fM,new C.esa(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
a0t(){return this.ctH()},
ctH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.es8(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bB(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cmE(p.c),$async$a0t)
case 6:r=e
q.a=r==null?A.bC:r
case 4:if(t.c==null){w=1
break}t.m(new C.es9(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0t,v)},
bV0(d){var w,v,u=d.a,t=A.o.ar(u,36e8)
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
return B.p(r,B.A(B.a([B.X(A.D8,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bV0(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,O.amK,A.hP,r,r,1/0)}}
C.aab.prototype={
nC(){var w,v,u,t=this
t.y3()
w=t.cx
v=t.c
w.bv_(t.cy,t,v)
u=x._
v.a.n(0,"/A",B.qp(B.I(["/S",D.eCs,"/URI",new B.t5(B.Y5(w.as),A.vH,!0)],x.N,u),u))}}
C.aac.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b5S.prototype={
bCJ(d,e,f,g,h,i,j,k,l,m){var w=B.ew([D.eAL],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcTH(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.kd(w,new C.cqy(),B.a3(w).k("kd<ci.E,G>")).f0(0,new C.cqz())},
aFA(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hm(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u4(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jy(d.a,d.b))
s.n(0,"/Border",B.u4(H.auQ))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.hc(t.gcTH()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qp(w,x._))}}
C.cqA.prototype={}
C.a4u.prototype={}
C.ajX.prototype={}
C.aU4.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lE(d)
q.MO(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bk_(w)
u=x.N
t=x._
s=new C.cqA(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bCJ(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qp(B.I(["/Type",D.eCq],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.aab(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.I(0,r)
v.dx.push(r)}}
C.az7.prototype={}
C.aVw.prototype={
fV(d){var w,v,u,t,s=this
s.lE(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.eb(u.a,u.b,0,1)
u=d.b
u.ix()
t=s.a
t.toString
u.LV(t)
u.TC(0)
u.pu(0,v)
w.fV(d)
u.nF(0)}}}
var z=a.updateTypes(["aB<~>()","~(ll)","R(hY)","~()","R(en)","R(oT)","R(ll)","~(hY)","KT(Z)","R(en,en)","R(of)","R(lD)","aB<R>()","n(of)","G(G,hY)","~(hM)","v(hM)","cK(en)","v(en)","n(en)","a9<n,@>(hY)","G(hY,hY)","R(Fz)","n(wC)","n(ll)","R(a9A)","ai<Ad>()","Xi(Z)","a1r(Z)","ai<FW>()","R(my)","en(n,F,F,F,F,F,G{align:qv,style:ID,weight:o4})","en(n,F,G)","Xh(Z)","R(Ad)","R(n,ai<Ad>)","~(ai<oT>)","of()","a2s(Z)","en(n,F,F,F,F,F{align:qv,anim:hM,bullets:R,color:G?,delay:G,fx:n,key:n,style:ID,weight:o4})","en(vl,F,F,F,F,G{fx:n,key:n,rotation:F})","en(n,F,F,F,F{anim:hM,delay:G,fx:n,key:n})","agE(Z,G)","aeY(Z)","n(hb)","a1Y(Z)","a1X(Z)","G(oT,oT)","a0l(Z)","en(vl,F,F,F,F,G,n,n{anim:hM,delay:G,rotation:F,stroke:G,strokeWidth:F})","en(n,F,F,F,F,F,n,n,G)","en(F,F,n,G{size:F})","a9<n,@>(oT)","lD()","a_9(Z)","aeV(Z)","Fz()","fm(en)","v(jk)","a_T(Z)","~(Fp)","a0d(Z)","G(en,en)","en(en)","a9<n,@>(en)","en(a9<@,@>)","ll(ll)","a9<n,@>(ll)","ll(a9<@,@>)","R(k3)","k3()","aB<~>(oT)","ll()","V(ai<hY>)","R(mW)","ai<hY>(n?)","en(en,+(F,F,F,F))","~(R(en,en))","a_7(Z)","R(n,hY)","t(ll,R)","n(hY)","af0(Z)","a_o(Z)","~(mZ)","hY(hY)","F(en)","QB(Z)","a14(Z)","hY()","~(va)","aB<~>(ai<hY>)","e8(bB<G,hY>)","D(k3)","D(Fz)","aB<~>(hM,~())","v(ai<hM>,hM?,~(hM),t)","oT(a9<@,@>)","ai<jz<mZ>>(Z)","jz<mZ>(mZ)","hY(a9<@,@>)","Xt(Z)","v(rU,F,F)","Xu(Z)","v(hY)","~(mr)","Fy(Z,ll,v?)","G(aac)","aB<ai<a9<n,@>>?>()","n(n)","aB<Ac>({paper:n?,photo:dH?,request:n,template!lG})","aB<a9s>({doc!Ac,history:ai<+(n,n)>,instruction!n,photo:dH?,template!lG})","V(hY)"])
C.cPS.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:66}
C.cPT.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:69}
C.cPU.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galZ(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mK(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:69}
C.cPV.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bUP.prototype={
$1(d){return J.er(A.dI.gaT(d),d.byteOffset,d.byteLength)},
$S:1696}
C.fIX.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.j3(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.j3(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.j3(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.j3(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1697}
C.c4R.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:31}
C.c4S.prototype={
$2(d,e){var w,v=J.u(e,"savedAt")
v=J.k(v==null?"":v)
w=J.u(d,"savedAt")
return A.a.aQ(v,J.k(w==null?"":w))},
$S:41}
C.c4U.prototype={
$1(d){var w=J.u(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.h_j.prototype={
$1(d){return new C.a2s(this.a,this.b,C.it4(),null)},
$S:z+38}
C.fk6.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fka.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fkb.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fkc.prototype={
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
C.fk7.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fk8.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fk9.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fk1.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hs,w,w,w)
return B.em(B.a([B.bP(!1,E.aYt,w,w,!0,w,w,w,new C.fk_(d),w,w),B.bP(!1,D.fV1,w,w,!0,w,w,w,new C.fk0(d),w,w)],x.p),w,w,D.a_Y,v,w,w,w,w,D.h9C,w)},
$S:18}
C.fk_.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.fk0.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.fk2.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fk3.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fkg.prototype={
$0(){var w=this.a
return w.m(new C.fkf(w,this.b))},
$S:0}
C.fkf.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fk5.prototype={
$0(){var w=this.a
return w.m(new C.fk4(w,this.b,this.c))},
$S:0}
C.fk4.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.I(0,v)},
$S:0}
C.fkd.prototype={
$0(){return this.a.a_f(this.b)},
$S:0}
C.fke.prototype={
$0(){return this.a.Q0(0,this.b)},
$S:0}
C.fkj.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fkk.prototype={
$0(){var w=this.a
return w.m(new C.fki(w,this.b))},
$S:0}
C.fki.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.u(0,new B.N(w,new C.fkh(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fkh.prototype={
$1(d){return d.a},
$S:z+81}
C.frE.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hr6(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cE)
t=t.h(0,"updatedAt")
u=B.bk(J.k(t==null?"":t))
return new C.oT(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+97}
C.frF.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fMa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbt())q=n===o.gbt()&&p.b>o.gcG()}if(q)v.n(0,s,t)}},
$S:z+36}
C.fM8.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fM9.prototype={
$2(d,e){return e.c.aQ(0,d.c)},
$S:z+47}
C.fZM.prototype={
$1(d){return d.aj()},
$S:z+52}
C.fIB.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.h_F.prototype={
$1(d){return new C.a_9(this.a,null)},
$S:z+54}
C.cRe.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+74}
C.cRg.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cRj.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cRk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cRi())},
$S:11}
C.cRi.prototype={
$0(){},
$S:0}
C.cRl.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3s(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bk(s,new C.cRh(r))
if(p<0)q.ca(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aj6(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:334}
C.cRh.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cRm.prototype={
$1(d){},
$S:29}
C.cRf.prototype={
$1(d){return new C.a_7(this.b,this.a.gcDB(),null)},
$S:z+78}
C.cRn.prototype={
$1(d){return D.hDj},
$S:z+87}
C.cRa.prototype={
$1(d){var w=null,v=B.l(24),u=B.K(D.a_s,A.r,1),t=x.p
return B.as(B.aG(!1,A.a3,!0,w,B.p(w,B.x(B.a([new B.D(D.bIc,B.x(B.a([B.p(w,D.bXE,A.f,w,w,new B.o(A.aA.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fTZ,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fH4,A.K,w,w)],t),A.l,w,A.e,A.i,0,A.p),w),A.e4,new B.D(A.qI,B.A(B.a([B.E(B.dW(D.h04,new C.cR8(d),B.dj(w,w,w,w,w,w,w,w,w,E.nx,w,w,A.co,w,new B.ba(B.l(14),A.a1),D.b6K,w,w,w,w)),1),A.as,B.E(B.bJ(D.h6k,w,new C.cR9(d),B.bp(A.bD,w,w,w,w,w,A.co,w,new B.ba(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.i,0,w,w),w)],t),A.l,w,A.e,A.N,0,A.p),A.f,w,A.w6,new B.o(D.ahP,w,u,v,D.ddB,w,A.n),w,w,w,N.a1G,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1698}
C.cR8.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.cR9.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.cRb.prototype={
$0(){return J.nY(this.a.d,new C.cR7(this.b))},
$S:0}
C.cR7.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cR6.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.K(D.a_s,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.c1P,A.f,t,t,new B.o(t,t,t,B.l(14),t,D.aum,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aY9,t,t,t),A.bF,D.h6f],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.l,t,A.e,A.i,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dC6[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aA5(u[1],u[2],u[3],new C.cR4(v,d),!1,t))}q.push(A.am)
q.push(D.bC2)
q.push(A.am)
q.push(new C.aA5(A.ej,"Delete book","Remove it from this device",new C.cR5(d),!0,t))
return B.bn(!0,B.p(t,B.x(q,A.E,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.ahP,t,r,s,t,t,A.n),t,t,t,A.uM,A.Hf,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cR4.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.cR5.prototype={
$0(){B.a6(this.a,!1).N("delete")
return null},
$S:0}
C.cRd.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aNj,12)],x.V)
return B.dP(B.eK(A.z,e,B.p(w,B.bv(B.l(4),new B.a5(62,95.81818181818181,new B.dx(A.dC,A.z,A.f,F.aqb(d),w),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.r(f,0))},
$S:z+102}
C.cRc.prototype={
$0(){return this.a.c8Y()},
$S:0}
C.cR3.prototype={
$0(){return this.a.b0P(0,this.b)},
$S:0}
C.cR2.prototype={
$0(){return this.a.DV(this.b)},
$S:0}
C.cR1.prototype={
$0(){return this.a.DV(this.b)},
$S:0}
C.cRo.prototype={
$2(d,e){var w=this.a
return w.bHk(J.u(w.d,e))},
$S:43}
C.cQv.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bv()},
$S:0}
C.cQu.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b42("Page "+(v.length+1),"",""))},
$S:0}
C.cQx.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cQF.prototype={
$0(){},
$S:0}
C.cQG.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.V$=u
v.R$=0
w=w.b
w.V$=u
w.R$=0
return null},
$S:8}
C.cQy.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cK.gcn().aL(this.c)},
$S:0}
C.cQw.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQA.prototype={
$0(){return this.a.Rv(this.b)},
$S:0}
C.cQB.prototype={
$0(){return this.a.Rv(this.b)},
$S:0}
C.cQC.prototype={
$0(){var w=this.a
w.m(new C.cQz(this.b))
w.EI()},
$S:0}
C.cQz.prototype={
$0(){return this.a.c=""},
$S:0}
C.cQE.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cQD(w,d))
w.EI()},
$S:z+90}
C.cQD.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQL.prototype={
$2(d,e){if(d)this.a.Bv()},
$S:124}
C.cQH.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bv(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.T(D.ftK)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cQI.prototype={
$0(){return this.a.b_J(this.b,-1)},
$S:0}
C.cQJ.prototype={
$0(){return this.a.b_J(this.b,1)},
$S:0}
C.cQK.prototype={
$0(){return this.a.cak(0,this.b)},
$S:0}
C.fRS.prototype={
$1(d){return new C.a_o(this.a,this.b,this.c,null)},
$S:z+83}
C.d91.prototype={
$0(){var w=this.a,v=this.c
if(this.b)w.d=v
else w.e=v
w.r=null},
$S:0}
C.d8Y.prototype={
$0(){var w=this.a
w.w=!0
w.r=null
w.f="The AI is painting your picture. This takes up to a minute."},
$S:0}
C.d8Z.prototype={
$0(){return this.a.f="Putting the picture on your paper\u2026"},
$S:0}
C.d9_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.d90.prototype={
$0(){var w=this.a
w.w=!1
w.f=null
w.r=J.k(this.b)},
$S:0}
C.d92.prototype={
$1(d){return d.db==="marriage_locked_title"},
$S:z+4}
C.d93.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.d94.prototype={
$0(){return this.a.afL(this.b)},
$S:0}
C.fRJ.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:299}
C.fRI.prototype={
$2(d,e){return A.o.aQ(e.length,d.length)},
$S:214}
C.fRX.prototype={
$1(d){var w=this.a
return C.hj4(d)===w||C.hGr(d)===w},
$S:z+4}
C.fv5.prototype={
$1(d){return A.a.b0(A.o.v(d),2,"0")},
$S:77}
C.cgJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.cgK.prototype={
$2(d,e){return C.hZ4(d,e)},
$S:z+79}
C.cgM.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.u(t,"at")
v=B.bk(J.k(w==null?"":w))}else v=null
w=J.u(d.b,"at")
u=B.bk(w==null?"":w)
if(u!=null)w=v==null||u.cb(v)
else w=!1
return w},
$S:1699}
C.fQI.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fQJ.prototype={
$1(d){return C.fTA(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fLx.prototype={
$1(d){var w=null
return B.bn(!0,new B.D(E.z5,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.h0H,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.df(D.Ij,w,D.fVF,new C.fLv(d),B.bp(A.c3,w,w,w,A.w,w,A.co,w,w,w,w,w)),A.T,B.ep(A.ve,w,D.h1Z,new C.fLw(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,U.ya,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLv.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLw.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fLy.prototype={
$1(d){var w=null
return B.em(B.a([B.bP(!1,D.fRF,w,w,!0,w,w,w,new C.fLt(d),w,w),B.bJ(D.h8E,w,new C.fLu(d),w)],x.p),w,w,w,D.haB,w,w,w,w,D.fRy,w)},
$S:18}
C.fLt.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.fLu.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.enr.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.enp.prototype={
$0(){return this.a.e=!0},
$S:0}
C.enq.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ens.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ent.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fRQ.prototype={
$1(d){return A.a.b0(A.o.v(d),2,"0")},
$S:77}
C.fvj.prototype={
$4(d,e,f,g){var w,v,u=this.a,t=this.b
A.d.u(u,C.hh1(t,0.09,g,0.82,0.036,"banner_box_"+d,!1,null))
w=g+0.00612
t=t.w
if(f){v=C.cC()
u.push(C.ej(A.K,!1,t,A.aG,"marriage_field_"+d+":"+A.h.ad(0.82,3),4280640491,30,A.bo,A.u,"",0.025199999999999997,v,null,"","",0,!1,"",0,D.bb,4280172719,2,e,0,0,"",D.cd,D.d1,0.82,0.09,w))}else u.push(C.k9(e,A.K,t,30,A.u,0.025199999999999997,0,"banner_t_"+e,0.82,0.09,w))},
$S:1700}
C.fvd.prototype={
$1(d){return d/this.a.b},
$S:5}
C.fve.prototype={
$1(d){return d/this.a.c},
$S:5}
C.fv9.prototype={
$2(d,e){var w,v=this.a,u=e.a
d.c=v.$1(u[0])
w=this.b
d.d=w.$1(u[1])
d.e=v.$1(u[2]-u[0])
d.f=w.$1(u[3]-u[1])
return d},
$S:z+76}
C.fva.prototype={
$1(d){return A.h.D(d*this.a*0.0017,0.02,0.06)*this.b.c},
$S:5}
C.fvc.prototype={
$3(d,e,f){return Math.min(f,e/Math.max(1,d.length*0.48))},
$S:1701}
C.fvb.prototype={
$2(d,e){return Math.max(d,e.length)},
$S:196}
C.fRL.prototype={
$0(){return A.d.gH(C.hiH("",this.a.a).r)},
$S:z+72}
C.fRK.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a5,w,w,B.BX(A.z,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1702}
C.fRN.prototype={
$1(d){var w=null,v=B.l(3)
return B.p(A.z,B.d(d,w,w,w,w,w,w,D.fIr,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:142}
C.fRO.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.iy,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.iy,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.r(-d*0.38,0))],x.p),A.l,w,A.b9,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1703}
C.fRM.prototype={
$2$female$size(d,e){var w=null,v=d?D.ak3:this.a,u=B.K(A.iy,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.z,w,A.ad,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ai5,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1704}
C.h3e.prototype={
$1(d){return new C.aeV(this.a,this.b,null)},
$S:z+55}
C.e9O.prototype={
$1(d){return d.a},
$S:z+44}
C.e9P.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=r?D.byF:A.NE,p=B.K(D.jH.j(0.25),A.r,1),o=B.as(B.p(s,s,A.f,s,s,new B.o(A.c3.j(0.45),s,s,B.l(2),s,s,A.n),s,4,s,s,s,s,s,40),s,s,s),n=B.l(15)
n=B.p(s,D.at2,A.f,s,s,new B.o(s,s,B.K(A.c.j(0.5),A.r,1.2),n,B.a([new B.ab(0,A.G,D.jH.j(0.35),A.et,10)],x.V),D.cc1,A.n),s,s,s,s,A.yX,s,s,s)
w=t.a
v=x.p
u=t.c
return B.p(s,B.x(B.a([new B.D(T.a1v,B.x(B.a([o,A.aB,B.A(B.a([n,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",s,s,s,s,s,s,B.m(s,s,r?A.c:D.jH,s,s,s,s,s,s,s,s,17,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),A.bF,B.d(w.c+" \xb7 "+w.d.length+" miundo",s,s,s,s,s,s,D.fHC,s,s,s)],v),A.E,s,A.e,A.i,0,A.p),1)],v),A.l,s,A.e,A.i,0,s,s)],v),A.l,s,A.e,A.i,0,A.p),s),B.E(B.iA(!0,s,e,A.y,D.aVn,new C.e9N(u,t.d),u.length,D.anA,s,A.ah,!1),1)],v),A.l,s,A.e,A.i,0,A.p),A.f,s,s,new B.o(q,s,p,A.mJ,s,s,A.n),s,s,s,s,s,s,s,s)},
$S:121}
C.e9N.prototype={
$2(d,e){var w=this.a[e]
return new B.e8(new C.biQ(w,new C.e9M(this.b,w),null),null)},
$S:1705}
C.e9M.prototype={
$0(){B.a6(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fLB.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fLC.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.z5,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.h4k,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.df(D.Ij,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fLz(d),B.bp(D.jH,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.ep(A.oQ,w,D.WA,new C.fLA(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,U.ya,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLz.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLA.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fLF.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fLG.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.z5,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fSI,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.df(D.Ij,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fLD(d),B.bp(D.jH,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.ep(A.oQ,w,D.WA,new C.fLE(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,U.ya,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLD.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLE.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fLJ.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fLK.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.z5,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fZr,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.df(D.Ij,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fLH(d),B.bp(D.jH,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.ep(A.oQ,w,D.WA,new C.fLI(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,U.ya,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLH.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLI.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fRT.prototype={
$0(){var w=0,v=B.j(x.a),u=1,t=[],s,r,q,p,o,n
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:q=0
case 2:if(!(q<12)){w=4
break}s=D.di6[q]
u=6
w=9
return B.b($.pe().iG(0,"assets/hati/"+B.w(s)+".jpg"),$async$$0)
case 9:r=e
p=J.er(J.tw(r),r.byteOffset,r.byteLength)
$.fF9.n(0,s,"data:image/jpeg;base64,"+A.cK.gcn().aL(p))
u=1
w=8
break
case 6:u=5
n=t.pop()
w=8
break
case 5:w=1
break
case 8:case 3:++q
w=2
break
case 4:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$$0,v)},
$S:48}
C.fRW.prototype={
$0(){var w=0,v=B.j(x.a),u=1,t=[],s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$$0)
case 6:s=e
r=$.bHO()
q=s.rA("ngmy_hati_pins")
if(q==null)q=A.Z
r.sp(0,B.wm(q,x.N))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$$0,v)},
$S:48}
C.fRU.prototype={
$1(d){return J.z(this.a.$1(d),this.b)},
$S(){return this.c.k("R(0)")}}
C.fRV.prototype={
$1(d){return!J.eC(this.a,this.b.$1(d))},
$S(){return this.c.k("R(0)")}}
C.fxu.prototype={
$1(d){var w=this.b
return A.o.D(A.h.U((A.o.h0(this.a,d)&255)*(1-w)+(A.o.h0(this.c,d)&255)*w),0,255)},
$S:69}
C.fF8.prototype={
$0(){var w=C.hCx(this.a,this.b)
return"data:image/png;base64,"+A.cK.gcn().aL(w)},
$S:22}
C.fAJ.prototype={
$0(){return B.fJ8(this.a.$0())},
$S:246}
C.fW3.prototype={
$0(){var w,v,u,t=null,s=B.fU(t,t,A.bW,0,A.dS,96,t,0,4,t,A.bW,4,!1),r=0
for(;;){w=s.a
v=w==null
u=v?t:w.b
if(!(r<(u==null?0:u)))break
u=v?t:w.a
if(u==null)u=0
w=v?t:w.b
w=C.hfy(r/((w==null?0:w)-1))
v=new Uint8Array(4)
v[0]=w>>>16&255
v[1]=w>>>8&255
v[2]=w&255
v[3]=w>>>24&255
B.iI(s,!1,A.cY,new B.lz(v),t,A.cI,1,0,u-1,r,r);++r}return s},
$S:212}
C.fW2.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.fU(l,l,A.bW,0,A.dS,96,l,0,4,l,A.bW,96,!1)
C.fJM(k,B.a5a(0,0,0,0))
for(w=0;w<96;++w)for(v=w/96*0.9+0.05,u=w-48+0.5,t=u*u,s=0;s<96;++s){r=s-48+0.5
q=Math.sqrt(r*r+t)
if(q>48)continue
p=48-q
o=A.h.D(p,0,1)
n=q>43?C.fxt(4287258130,4291402286,p/5):C.hfy(A.h.D(v,0,1))
p=A.h.U(o*255)<<24|n&16777215
m=new Uint8Array(4)
m[0]=p>>>16&255
m[1]=p>>>8&255
m[2]=p&255
m[3]=p>>>24&255
k.xW(s,w,new B.lz(m))}return k},
$S:212}
C.fW0.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=B.fU(i,i,A.bW,0,A.dS,196,i,0,4,i,A.bW,1140,!1)
C.fJM(h,C.aQa(this.a))
for(w=[30,166],v=w.length,u=this.b,t=u>>>16&255,s=u>>>8&255,r=u&255,u=u>>>24&255,q=0;q<v;++q){p=w[q]
for(o=p-11,n=p+11,m=36;m<1140;m+=72){l=A.o.U(m)
k=new Uint8Array(4)
j=new B.lz(k)
k[0]=t
k[1]=s
k[2]=r
k[3]=u
k=l+11
B.iI(h,!0,A.cY,j,i,A.cI,2.4,l,k,o,p)
B.iI(h,!0,A.cY,j,i,A.cI,2.4,k,l,p,n)
k=l-11
B.iI(h,!0,A.cY,j,i,A.cI,2.4,l,k,n,p)
B.iI(h,!0,A.cY,j,i,A.cI,2.4,k,l,p,o)}}return h},
$S:212}
C.fW5.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=4292456522,a3=B.fU(a1,a1,A.bW,0,A.dS,280,a1,0,4,a1,A.bW,240,!1)
C.fJM(a3,B.a5a(0,0,0,0))
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
B.Bl(a3,new B.lz(n),o)}for(w=this.b,m=0;m<280;++m)for(l=m-112,v=l*l,u=(m-8)/208,k=0;k<240;++k){j=k-120
i=Math.sqrt(j*j+v)
if(i>104)continue
t=104-i
h=A.h.D(t,0,1)
if(w)g=i>97?C.fxt(4287258130,4292455999,t/7):C.hfy(A.h.D(u,0,1))
else g=i>90?a2:4294436804
t=A.h.U(h*255)<<24|g&16777215
o=new Uint8Array(4)
o[0]=t>>>16&255
o[1]=t>>>8&255
o[2]=t&255
o[3]=t>>>24&255
a3.xW(k,m,new B.lz(o))}f=w?4286206480:a2
C.ai2(a3,!0,C.aQa(f),74,120,112)
C.ai2(a3,!0,C.aQa(f),73,120,112)
C.ai2(a3,!0,C.aQa(f),68,120,112)
w=this.c
C.hzW(a3,120,112,34,w)
for(v=[D.eHe,D.eLg,D.eH8,D.f0i],u=v.length,t=x.J,o=w>>>16&255,n=w>>>8&255,e=w&255,w=w>>>24&255,s=0;s<u;++s){d=v[s]
a0=120+d.a
d=112+d.b
d=B.a([new B.fJ(a0,d-9),new B.fJ(a0+9,d),new B.fJ(a0,d+9),new B.fJ(a0-9,d)],t)
a0=new Uint8Array(4)
a0[0]=o
a0[1]=n
a0[2]=e
a0[3]=w
B.Bl(a3,new B.lz(a0),d)}return a3},
$S:212}
C.fW4.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.fU(i,i,A.bW,0,A.dS,1280,i,0,3,i,A.bW,720,!1)
for(w=j.a,v=j.b,u=0;u<1280;++u){t=C.fxt(w,v,u/1279)
s=new Uint8Array(4)
s[0]=t>>>16&255
s[1]=t>>>8&255
s[2]=t&255
s[3]=t>>>24&255
B.iI(h,!1,A.cY,new B.lz(s),i,A.cI,1,0,719,u,u)}w=j.d
if(j.c){C.hh0(h,14,14,692,1252,34,w,3.2)
C.hh0(h,30,30,660,1220,0,w,1.6)
for(v=[D.eM7,D.eLJ],t=v.length,s=x.J,r=w>>>16&255,q=w>>>8&255,p=w&255,w=w>>>24&255,o=0;o<t;++o){n=v[o]
m=n.a+0
n=n.b+8
n=B.a([new B.fJ(m,n-9),new B.fJ(m+9,n),new B.fJ(m,n+9),new B.fJ(m-9,n)],s)
m=new Uint8Array(4)
m[0]=r
m[1]=q
m[2]=p
m[3]=w
B.Bl(h,new B.lz(m),n)}for(v=[D.eLd,D.eLN,D.eHw,D.eLE],t=v.length,o=0;o<t;++o){n=v[o]
m=A.h.U(n.a)
n=A.h.U(n.b)
l=new Uint8Array(4)
l[0]=r
l[1]=q
l[2]=p
l[3]=w
B.kV(h,!0,A.cY,new B.lz(l),i,A.cI,4,m,n)}for(v=[D.eLe,D.eLO],t=v.length,o=0;o<t;++o){n=v[o]
m=A.h.U(n.a)
n=A.h.U(n.b)
l=new Uint8Array(4)
l[0]=r
l[1]=q
l[2]=p
l[3]=w
B.kV(h,!0,A.cY,new B.lz(l),i,A.cI,4,m,n)}for(v=[326,360,394],t=v.length,o=0;o<t;++o){k=v[o]
n=k===360?10:7
n=B.a([new B.fJ(k,76-n),new B.fJ(k+n,76),new B.fJ(k,76+n),new B.fJ(k-n,76)],s)
m=new Uint8Array(4)
m[0]=r
m[1]=q
m[2]=p
m[3]=w
B.Bl(h,new B.lz(m),n)}}else C.hh0(h,16,16,688,1248,0,w,3)
return h},
$S:212}
C.fW1.prototype={
$0(){var w=null,v=B.fU(w,w,A.bW,0,A.dS,64,w,0,4,w,A.bW,64,!1)
C.fJM(v,B.a5a(0,0,0,0))
C.hzW(v,32,32,30,this.a)
return v},
$S:212}
C.h4M.prototype={
$1(d){return D.hIx},
$S:z+43}
C.esd.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.boH:A.NE,s=B.K(A.aF.j(0.25),A.r,1),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aF.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.p(v,D.c4i,A.f,v,v,new B.o(v,v,B.K(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.c3.j(0.35),A.et,10)],x.V),D.aut,A.n),v,v,v,v,A.yX,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(T.a1v,B.x(B.a([r,A.aB,B.A(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:P.GC,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bF,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fEZ,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.l,v,A.e,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),v),B.E(B.iA(!0,v,e,A.y,D.aVn,new C.esc(this.b),19,D.anA,v,A.ah,!1),1)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mJ,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.esc.prototype={
$2(d,e){var w=D.Ti[e]
return new C.agE(w,new C.esb(this.a,w),null)},
$S:z+42}
C.esb.prototype={
$0(){B.a6(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fTD.prototype={
$0(){return B.fJ8(C.igk(this.a))},
$S:246}
C.fTC.prototype={
$0(){var w=C.hjo(this.a)
return"data:image/png;base64,"+A.cK.gcn().aL(w)},
$S:22}
C.fte.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.fJ(d,e),new B.fJ(w,e+v),new B.fJ(d+f*14,e),new B.fJ(w,e-v)],x.J)
B.Bl(this.a,C.fK(4291404327),v)},
$S:751}
C.h4X.prototype={
$1(d){return new C.Xh(this.a,null)},
$S:z+33}
C.eva.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ev9())},
$S:28}
C.ev9.prototype={
$0(){},
$S:0}
C.evb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ev8(w,d))},
$S:1708}
C.ev8.prototype={
$0(){return this.a.x=J.eR(A.dI.gaT(this.b))},
$S:0}
C.evc.prototype={
$1(d){},
$S:29}
C.euN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.euJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.euU.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.euV.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eNo)},
$S:0}
C.euW.prototype={
$0(){return this.a.as=!1},
$S:0}
C.euP.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cg)},
$S:0}
C.euQ.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.euR.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.euS.prototype={
$0(){return this.a.as=!1},
$S:0}
C.euT.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd6(v).Q
v.toString
w.mv(v,A.e6,A.ie)}},
$S:8}
C.euO.prototype={
$0(){var w=this.a,v=w.z,u=C.fUl(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cPl(C.fUl(t))},
$S:0}
C.euL.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.euM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ev1.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.ev2.prototype={
$0(){var w=this.a
return w.m(new C.ev0(w))},
$S:0}
C.ev0.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ev3.prototype={
$0(){var w=this.a
return w.m(new C.ev_(w,this.b))},
$S:0}
C.ev_.prototype={
$0(){var w=this.b.b
this.a.e.sb4(0,w)
return w},
$S:0}
C.ev4.prototype={
$1(d){var w=this.a
return w.m(new C.euZ(w))},
$S:9}
C.euZ.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ev5.prototype={
$1(d){var w=this.a
return w.m(new C.euY(w))},
$S:9}
C.euY.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ev6.prototype={
$0(){var w=this.a
return w.m(new C.euX(w,this.b))},
$S:0}
C.euX.prototype={
$0(){var w=this.b
this.a.f.sb4(0,w)
return w},
$S:0}
C.ev7.prototype={
$1(d){return this.a.a0e()},
$S:2}
C.euK.prototype={
$0(){return this.a.cel(this.b)},
$S:0}
C.ckw.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:323}
C.cku.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ckv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fTe.prototype={
bph(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bUO(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cLC($.pe().iG(0,"assets/news_fonts/"+s))}w=2
return B.b(r.n1(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bph(d,e)},
$S:1709}
C.fRo.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRq.prototype={
$1(d){var w=this.a.a
w=A.d.aN(A.d.du(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:77}
C.fRp.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fE(t,A.cx,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.ri,A.c1,t,A.dJ,A.c2)
v=this.a
w.nB(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fsN.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fsO(),B.U(w).k("Y<1>")).gJ(0)},
$S:277}
C.fsO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsL.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:196}
C.fsM.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:196}
C.ckx.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCS()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hj2(i,new B.H(!0,h,a6,k,a6,a6,q,A.d0,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hfs(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aN(n.gcmL(),"\n\n")
d=B.fE(a6,A.cx,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ag_(k,q,1.28),j),A.ri,A.c1,a6,A.dJ,A.c2)
d.nB(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hj2(i,new B.H(!0,h,a6,k,a6,a6,q,A.d0,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hfs(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ag_(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bd,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.ri,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCR(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.u(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:286}
C.cky.prototype={
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
n=o.gaCS()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hj2(f,new B.H(!0,e,a5,i,a5,a5,h,A.d0,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hfs(g.length===0?B.a([a6],n):g,l))break}a1=o.ag_(i,h,1.28)
a2=new C.ckz(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.KN,new B.a5(v,a5,a4.f,a5),A.KN,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bKz,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bd,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.ri,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCR(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.u(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.l,a5,A.e,A.i,0,A.p)},
$S:158}
C.ckz.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.ri,w,w),w)},
$S:750}
C.h5_.prototype={
$1(d){return new C.Xi(this.a,this.b,null)},
$S:z+27}
C.evX.prototype={
$1(d){return d.le()},
$S:1711}
C.evY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.evW(w,d))},
$S:1712}
C.evW.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.evK.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evL.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evR.prototype={
$0(){return B.a6(this.a,!1).ek()},
$S:0}
C.evS.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.K(A.bE,A.r,2.5)
return B.az(w,B.p(w,B.b5(w,w,w,new C.beX(u,v.gazV(),w),A.h4),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evP(v),new C.evQ(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.evP.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:270}
C.evQ.prototype={
$1(d){var w=this.a
w.m(new C.evM(w,d,this.b,this.c))},
$S:213}
C.evM.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.h.D(s.x*r.d,1,6)
w=s.gazV()
r=r.a
v=t.c
u=t.d
s.r=A.h.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.h.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.evT.prototype={
$1(d){var w=this.a
return w.m(new C.evO(w,this.b))},
$S:9}
C.evO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evU.prototype={
$1(d){var w=this.a
return w.m(new C.evN(w,d))},
$S:6}
C.evN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evV.prototype={
$0(){return B.a6(this.b,!1).N(this.a.a.c)},
$S:0}
C.h5f.prototype={
$1(d){return D.hLk},
$S:z+28}
C.f5h.prototype={
$1(d){return this.a.ZM()},
$S:8}
C.f49.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cK.gcn().aL(v)},
$S:0}
C.f4x.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f4H.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f3T.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f3U.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f3R.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f3S.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f4q.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f4r(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.ji(B.qt(q>0.2?F.bYk(r,new B.Ey(q,q,A.x)):r),A.t,v)],x.p)
w=t.bg
if(w>0.02)q.push(B.ji(B.d3(B.qt(F.bYk(s.$1(!0),new B.Ey(12,12,A.x))),w*0.75),A.t,v))
s=t.b2
if(s!=null&&t.aZ>0)q.push(B.ec(v,B.b1(s).j(t.aZ),!0))
s=t.bi
if(s!=null&&t.bH>0){s=B.b1(s).j(t.bH)
w=t.bi
w.toString
q.push(new B.bN(new B.o(v,v,v,v,v,new B.bT(D.b46,1.15,A.x,v,0,B.a([s,B.b1(w).j(0)],x.O),v,v),A.n),A.bk,v,v))}s=t.aK
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.bT(D.b3Q,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bk,v,v))
s=t.aR
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.a7(A.aY,A.b3,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.dc5,v),A.n),A.bk,v,v))
if(t.aO>0){s=t.k1
q.push(B.ao(v,new B.bN(new B.o(v,v,v,v,v,new B.a7(A.aY,A.b3,A.x,B.a([A.w.j(0),A.w.j(t.aO),A.w.j(t.aO),A.w.j(0)],x.O),D.doc,v),A.n),A.bk,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.ec(v,A.w.j(s),!0))
s=t.bd
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.bT(A.z,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dkY,v),A.n),A.bk,v,v))
t=t.aH
if(t>0)q.push(B.b5(v,v,v,new C.biy(t,v),A.az))
return new B.an(A.a0,v,A.b1,A.t,q,v)},
$S:65}
C.f4r.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fX(r.b,A.z,q,q,A.cm,A.bX,!0,q,!1,q,q),o=r.a,n=o.b_k(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
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
return B.dP(B.e4(A.z,B.eK(A.z,l,B.fA(A.z,new B.BG(new B.uT(q,q,n,A.ym),p,q),q,B.wp(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.r(-m*r.d*u/2,-t*r.c*u/2))},
$S:538}
C.f4D.prototype={
$0(){return this.a.m(new C.f4C(this.b,this.c))},
$S:0}
C.f4C.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f4E.prototype={
$1(d){return this.a.m(new C.f4B(this.b,d))},
$S:6}
C.f4B.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f4G.prototype={
$0(){return this.a.m(new C.f4F(this.b,this.c))},
$S:0}
C.f4F.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3J.prototype={
$1(d){return d.c===this.a.x},
$S:z+30}
C.f3K.prototype={
$1(d){var w=this.a
return w.m(w.gcEZ())},
$S:2}
C.f3L.prototype={
$1(d){return this.a.m(new C.f3I())},
$S:2}
C.f3I.prototype={
$0(){},
$S:0}
C.f3M.prototype={
$0(){var w=this.a
return w.m(new C.f3H(w,this.b))},
$S:0}
C.f3H.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f3O.prototype={
$2(d,e){return A.as},
$S:38}
C.f3N.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bw
q=B.K(q,A.r,t?2.5:1)
r=B.cU(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b0,new B.o(w,w,q,s,w,new B.a7(A.aY,A.b3,A.x,r,w,w),A.n),A.ha,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fE,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aE,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f3G(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.f3G.prototype={
$0(){var w=this.a
return w.m(new C.f3D(w,this.b))},
$S:0}
C.f3D.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f3P.prototype={
$1(d){var w=this.a
return w.m(new C.f3F(w,d))},
$S:9}
C.f3F.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f3Q.prototype={
$1(d){var w=this.a
return w.m(new C.f3E(w,d))},
$S:9}
C.f3E.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f56.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f5d.prototype={
$1(d){var w=this.a
return w.m(new C.f5e(w,d))},
$S:32}
C.f5e.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.e_(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f5f.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:176}
C.f57.prototype={
$0(){var w=this.a
return w.m(new C.f55(w,this.b))},
$S:0}
C.f55.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.I(0,v)},
$S:0}
C.f58.prototype={
$0(){var w=this.a
return w.m(new C.f54(w,this.b))},
$S:0}
C.f54.prototype={
$0(){var w,v=this.b.length,u=J.e6(v,x.r)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.u(0,u)},
$S:0}
C.f59.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f53(v,w.b,w.c,w.d))},
$S:0}
C.f53.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.u(0,w)},
$S:0}
C.f5a.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtm(v))},
$S:0}
C.f5b.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f5c.prototype={
$0(){var w=this.a
return w.m(new C.f52(w))},
$S:0}
C.f52.prototype={
$0(){var w=this.a.db
return A.d.hA(w,0,w.length,0)},
$S:0}
C.f4Q.prototype={
$1(d){return d.a===this.a.dy},
$S:225}
C.f4R.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aCF[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azZ(new B.nx(new B.bf(n,n,n,n),A.aq,new B.bN(new B.o(j,j,j,j,j,new B.a7(A.a5,A.a9,A.x,m,j,j),A.n),A.bk,new C.b24(l,B.b1(k==null?v.w.x:k),A.h.D(w,12,26),j),j),j),u,q.b,o===p,new C.f4P(r,v),2,i))}return B.c_(A.bI,h,A.br,j,7,7)},
$S:167}
C.f4P.prototype={
$0(){var w=this.b
return w.m(new C.f4K(this.a,w))},
$S:0}
C.f4K.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f4S.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:156}
C.f4V.prototype={
$0(){var w=this.a
return w.m(new C.f4O(w))},
$S:0}
C.f4O.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f4W.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f4X.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f4Y.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f4Z.prototype={
$0(){var w=this.a
return w.m(new C.f4N(w))},
$S:0}
C.f4N.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f5_.prototype={
$0(){var w=this.a
return w.m(new C.f4M(w))},
$S:0}
C.f4M.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f50.prototype={
$0(){var w=this.b
return w.m(new C.f4L(this.a,w))},
$S:0}
C.f4L.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f51.prototype={
$1(d){return this.a.fx=d},
$S:156}
C.f4T.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f4U.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f4u.prototype={
$0(){var w=this.a
return w.m(new C.f4t(w))},
$S:0}
C.f4t.prototype={
$0(){var w=this.a
w.p4=null
w.b6L()},
$S:0}
C.f4v.prototype={
$0(){var w=this.a
return w.m(new C.f4s(w,this.b))},
$S:0}
C.f4s.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f4w.prototype={
$0(){var w=this.a
return w.m(w.gcvj())},
$S:0}
C.f4m.prototype={
$0(){var w=this.a
return w.m(new C.f4l(w))},
$S:0}
C.f4l.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f4n.prototype={
$0(){var w=this.a
return w.m(new C.f4k(w))},
$S:0}
C.f4k.prototype={
$0(){var w=this.a
w.aO=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f4o.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dlo[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.azZ(new B.nx(new B.bf(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BG(new B.uT(o,o,v.b_k(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.ym),B.fX(u,A.z,140,o,A.cm,A.bX,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f4j(v,s),3,n))}return B.c_(A.bI,m,A.br,o,10,8)},
$S:167}
C.f4j.prototype={
$0(){var w=this.a
return w.m(new C.f4i(w,this.b))},
$S:0}
C.f4i.prototype={
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
C.f40.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f41.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f42.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f43.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f44.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.f45.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f46.prototype={
$1(d){return this.a.bd=d},
$S:6}
C.f47.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.f48.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f3m.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f3n.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f3o.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f3p.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f3q.prototype={
$0(){var w=this.a
return w.m(new C.f3l(w))},
$S:0}
C.f3l.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f3r.prototype={
$1(d){return this.a.b2=d},
$S:156}
C.f3s.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.f3V.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f3W.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.f3X.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f3Y.prototype={
$1(d){return this.a.bi=d},
$S:156}
C.f3Z.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f3w.prototype={
$1(d){return this.a.aY=d},
$S:6}
C.f3x.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f3y.prototype={
$1(d){return this.a.bx=d},
$S:6}
C.f3z.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.f3A.prototype={
$0(){var w=this.a
return w.m(new C.f3v(w))},
$S:0}
C.f3v.prototype={
$0(){var w=this.a
return w.c6=A.h.F(w.c6+90+180,360)-180},
$S:0}
C.f3B.prototype={
$0(){var w=this.a
return w.m(new C.f3u(w))},
$S:0}
C.f3u.prototype={
$0(){var w=this.a
return w.cg=!w.cg},
$S:0}
C.f3C.prototype={
$0(){var w=this.a
return w.m(new C.f3t(w))},
$S:0}
C.f3t.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.f4p.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ivJ(v,w.p4)},
$S:0}
C.f4h.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.byZ:B.fX(v,A.z,w,w,A.cm,A.bX,!1,w,!1,w,w)
return C.fRw(d.length===0?"rounded":d,u,e)},
$S:118}
C.f4d.prototype={
$0(){var w=this.a
return w.m(new C.f4c(w))},
$S:0}
C.f4c.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f4e.prototype={
$0(){var w=this.b
return w.m(new C.f4b(this.a,w))},
$S:0}
C.f4b.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f4f.prototype={
$0(){var w=this.b
return w.m(new C.f4a(this.a,w))},
$S:0}
C.f4a.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f4g.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.h.D(w.ay,0,1-d)
w.ch=A.h.D(w.ch,0,0.95)},
$S:6}
C.f4A.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ab(-4,A.G,A.b8.j(0.35),A.J,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.e8(n.coG(),n.r))
l.push(new C.Fy(n.cBU(),!1,!1,t))
o=B.bS(0,B.bv(o,new B.e8(new B.an(A.a0,t,A.b1,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.p(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ao(t,B.az(A.bZ,new B.bN(new B.o(t,t,B.K(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bk,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f4z(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:168}
C.f4z.prototype={
$1(d){var w=this.a
return w.m(new C.f4y(w,d,this.b,this.c))},
$S:19}
C.f4y.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.h.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.h.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f4J.prototype={
$0(){var w=this.a
return w.m(new C.f4I(w,this.b))},
$S:0}
C.f4I.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f4_.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hY()},
$S:0}
C.f5g.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b2m(),B.E(B.as(w.b5o(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aTd(),1),w.aPd()],v),A.l,t,A.e,A.i,0,A.p),1)],v),A.l,t,A.e,A.i,0,t,t)}u=A.h.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b2m(),new B.D(A.hy,B.as(s.b5o(u),t,t,t),t),B.E(s.aTd(),1),s.aPd()],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:520}
C.fON.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ej(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bE4(),null,"","",0,!1,"",0,D.bb,4280172719,2,d,0,0,"",D.cd,D.d1,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bo,A.O)},
$S:z+31}
C.fOM.prototype={
$3(d,e,f){var w=this,v=C.bE4(),u=w.b?A.H:A.cD,t=w.c?A.cL:A.bo
return C.ej(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bb,4280172719,2,d,0,w.f,w.e,D.cd,D.d1,0.82,0.09,w.a)},
$S:z+32}
C.cm1.prototype={
$1(d){return B.w(d)},
$S:17}
C.fWP.prototype={
$0(){return this.a},
$S:z+26}
C.fB9.prototype={
$1(d){return d.a.d4(this.a)},
$S:z+34}
C.fBa.prototype={
$2(d,e){return J.ct(e)},
$S:z+35}
C.fWR.prototype={
$0(){return B.a([],x.e8)},
$S:z+26}
C.fWU.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fWV.prototype={
$0(){return A.d.gH(D.xi)},
$S:z+37}
C.fWN.prototype={
$1(d){return d.a},
$S:z+13}
C.fWQ.prototype={
$1(d){return d.a},
$S:z+13}
C.fUE.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fUF.prototype={
$1(d){return d.length!==0},
$S:3}
C.fUG.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fOR.prototype={
$0(){return C.cC()},
$S:22}
C.fOU.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cd,s=u?n:0
return C.ej(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bb,4280172719,2,d,s,0,"",t,D.d1,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,D.dr,!1,null,0,"","",A.bo,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,D.dr,!1,null,0,"",j,A.bo,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,D.dr,!1,null,0,j,k,A.bo,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bo,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bo,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dr,!1,k,l,"",m,A.bo,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,j,!1,null,0,"",k,A.bo,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,D.dr,!1,j,k,"",l,A.bo,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,j,!1,k,0,l,m,A.bo,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.b6,j,k,l,m,"",n,A.bo,A.a8)},
$S:z+39}
C.fOT.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ej(A.b6,!1,4279310375,A.aG,"",i,24,A.bo,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cd,D.eM,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+40}
C.fOS.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cd,t=v?j:0
return C.ej(A.b6,!1,4279310375,A.aG,"",4280640491,24,A.bo,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bb,4280172719,2,"",t,0,"",u,D.kj,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r7,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+41}
C.fOQ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+25}
C.fRh.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hCu.c1(0,A.a.i(s.w).toLowerCase(),new C.fRf(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c1(0,s.r,new C.fRg(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.brJ(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1715}
C.fRf.prototype={
$0(){return F.aQq(this.a.w)},
$S:201}
C.fRg.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCY("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hI(2,w,A.cb,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:201}
C.fsH.prototype={
$1(d){return d.a==="bio"},
$S:z+25}
C.fsI.prototype={
$1(d){return d.a},
$S:z+24}
C.fsJ.prototype={
$1(d){return d.b},
$S:z+23}
C.h5r.prototype={
$1(d){return D.hLL},
$S:z+45}
C.fbE.prototype={
$0(){return this.a.x=C.i7C(this.b,this.c.b)},
$S:0}
C.fbF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.fbC.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:411}
C.fbD.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:411}
C.fbB.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.av,null,new C.fbw(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kn,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b1(s,7)
if(r.length===0){n.m(new C.fbx(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hJ8(o,m.cQ7(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.fby(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.fbw.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.fbA(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bev,A.f,p,p,D.b9c,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.DK:D.DR,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fRw(v,i.b7n(h),u),p)))}t=B.l4(1,m,4,10,10,p,A.e0,!0)
if(!l)return B.bn(!0,new B.D(Af.z3,t,p),!0,!1,A.ag,!0,!0)
s=new C.fbz(i,d)
m=B.aE(d,A.c_,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.IC[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cN(new B.aY(0,1/0,0,m.a.b*0.85),B.ca(B.x(B.a([D.fXO,A.T,t,A.e4,D.fiz,A.ax,D.h7Z,A.T,B.l4(1.15,l,3,10,10,p,A.e0,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,p,Af.z3,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.fbA.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bh:A.dq
return B.az(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.K(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hA,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.fbv(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1716}
C.fbv.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.fbz.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bL:A.bw
r=B.K(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.p(v,B.bv(w,d.length===0?B.p(v,D.atz,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dt(!0,new C.Ov(u.Gj(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.ax,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bL:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fbu(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:118}
C.fbu.prototype={
$0(){B.a6(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.fbx.prototype={
$0(){var w=this.a
return w.w=w.w.Gj("")},
$S:0}
C.fby.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fbk.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.fbl.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.fbn.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.fbo.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.fbp.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.fbq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fbm(w,d))},
$S:2}
C.fbm.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.fbr.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.fbS.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.fbT.prototype={
$0(){var w=this.a
return w.m(new C.fbR(w))},
$S:0}
C.fbR.prototype={
$0(){return this.a.e=null},
$S:0}
C.fbU.prototype={
$0(){var w=this.a
return w.m(new C.fbQ(w))},
$S:0}
C.fbQ.prototype={
$0(){return this.a.x=null},
$S:0}
C.fbW.prototype={
$1(d){var w=this.a
return w.m(new C.fbP(w,d))},
$S:35}
C.fbP.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.fbX.prototype={
$1(d){var w=this.a
return w.m(new C.fbO(w,d))},
$S:35}
C.fbO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fbY.prototype={
$0(){var w=this.a
return w.m(new C.fbN(w))},
$S:0}
C.fbN.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.fbZ.prototype={
$1(d){var w=this.a
return w.m(new C.fbM(w,d))},
$S:35}
C.fbM.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.fc_.prototype={
$1(d){var w=this.a
return w.m(new C.fbL(w,d))},
$S:35}
C.fbL.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fc0.prototype={
$0(){var w=this.a
return w.m(new C.fbK(w))},
$S:0}
C.fbK.prototype={
$0(){var w=this.a
return w.w=w.w.Gj("")},
$S:0}
C.fc1.prototype={
$0(){var w=this.a
return w.m(new C.fbJ(w,this.b))},
$S:0}
C.fbJ.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fc2.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bTz(D.a6I[v]),null))
return B.c_(A.bI,t,A.br,null,8,8)},
$S:167}
C.fbV.prototype={
$1(d){var w=this.a
return w.m(new C.fbI(w,d))},
$S:9}
C.fbI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.fbs.prototype={
$0(){var w=this.a
return w.m(new C.fbt(w,this.b,this.c))},
$S:0}
C.fbt.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.I(0,w)},
$S:0}
C.fbH.prototype={
$0(){var w=this.a
return w.m(new C.fbG(w,this.b))},
$S:0}
C.fbG.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h5q.prototype={
$1(d){return new C.a1X(this.a,this.b,null)},
$S:z+46}
C.fbd.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.fbe.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.fbf.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aMD?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.fbg.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.fbh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fbc(w,d))},
$S:2}
C.fbc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.fbi.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.fbj.prototype={
$0(){var w=this.b
if(A.a.c5(w,"\u2026"))w=A.a.aA(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.ho(A.bB,w.length),A.aP))},
$S:0}
C.fAp.prototype={
$1(d){return d.a===this.a},
$S:225}
C.erD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaA_(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d5n:D.dnV
t=A.wv.j(v?1:0.55)
v=p.a.c
t=B.K(t,A.r,v?1.8:1.2)
s=A.wv.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bS(0,B.b5(q,q,q,new C.bkQ(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bS(0,B.bV4(B.eK(A.z,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a7(A.a5,A.a9,A.x,B.a([A.L,D.bmD.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.r(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ea:A.mo,A.wv,q,q,q,20),A.ax,new B.dx(A.dM,A.z,A.f,B.ok(A.jV,D.fR1,new C.erC()),q)],r),A.l,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fNp,A.f,q,q,new B.o(A.wv,q,q,B.l(6),q,q,A.n),q,q,q,q,Q.aoj,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a7(A.ay,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:82}
C.erC.prototype={
$1(d){return D.ca7.aD(0,d)},
$S:71}
C.fWW.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fWX.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:225}
C.fWY.prototype={
$2(d,e){return A.o.aQ(e.a.length,d.a.length)},
$S:1717}
C.fWZ.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:13}
C.fWS.prototype={
$1(d){return d.a},
$S:z+24}
C.fWT.prototype={
$1(d){return d.b},
$S:z+23}
C.h4E.prototype={
$1(d){return new C.a0l(this.a,this.b,null)},
$S:z+48}
C.du9.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dua.prototype={
$1(d){return d.a===this.a.gaki()},
$S:z+10}
C.dub.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.due.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.duf.prototype={
$0(){var w=this.a
return w.m(new C.dud(w,this.b))},
$S:0}
C.dud.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dug.prototype={
$1(d){var w=this.a
return w.m(new C.duc(w,d))},
$S:9}
C.duc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erB.prototype={
$1$2(d,e,f){var w=B.br(d,!0,f)
A.d.e0(w,this.a)
return B.cY(w,0,B.dD(e,"count",x.r),B.U(w).c).dq(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1718}
C.fp_.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ej(A.b6,!1,4279310375,A.aG,"",i,24,A.bo,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eM,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cd,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+49}
C.fp1.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ej(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bo,A.d0,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bb,4280172719,2,d,l,0,"",D.na,D.d1,g,e,f)},
$S:z+50}
C.fp0.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xh(0,"twinkle")
w=t===D.bb?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.na,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+51}
C.foZ.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fPY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fPZ.prototype={
$0(){return A.d.gH(D.IL)},
$S:z+53}
C.fQ_.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fr7.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fWo.prototype={
$1(d){var w=2450411,v=4281908728
C.dB(d,C.dC(4280171146,1,0,D.bb,w,0,0.52,0,0))
C.dB(d,C.dC(v,1,0,D.bb,w,0,0.04,0.48,0))
C.dB(d,C.dC(4294047225,0.38,0,D.bb,w,0,0.48,0.52,0.62))
C.dB(d,C.dC(v,0.006,0,D.fw,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWp.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dB(d,C.dC(4280172719,0.8,0,D.bb,w,0,0.36,0.58,0.1))
C.dB(d,C.dC(v,0.64,0,D.bb,w,0,0.28,0.64,0.18))
C.dB(d,C.dC(4282090230,0.44,0,D.bb,w,0,0.2,0.7,0.28))
C.dB(d,C.dC(v,0.006,0,D.fw,v,3,0.22,0.08,0.12))
C.dB(d,C.dC(u,0.004,0,D.fw,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fWq.prototype={
$1(d){var w=2450411,v=4279548070
C.dB(d,C.dC(4279080072,0.11,0,D.bb,w,0,1,0,0))
C.dB(d,C.dC(4279310375,0.11,0,D.bb,w,0,1,0,0.89))
C.dB(d,C.dC(856528008,0.72,0,D.kl,w,0,0.28,0.72,0.14))
C.dB(d,C.dC(1426953352,0.2,0,D.kl,w,0,0.2,0.78,0.22))
C.dB(d,C.dC(v,0.004,0,D.fw,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fWB.prototype={
$1(d){var w=2450411
C.dB(d,C.dC(4279203438,0.55,0,D.kl,w,0,0.5,0.55,-0.05))
C.dB(d,C.dC(4280171146,0.5,0,D.kl,w,0,0.45,0.62,0.35))
C.dB(d,C.dC(4280640491,0.4,0.3,D.kk,w,0,0.35,0.68,0.55))
C.dB(d,C.dC(571438702,0.12,0,D.bb,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fWG.prototype={
$1(d){var w=4280472558
C.dB(d,C.dC(4279310375,0.75,-0.4,D.kk,2450411,0,0.75,-0.15,0.35))
C.dB(d,C.dC(w,0.55,0,D.bb,2450411,0,0.06,0.42,0.38))
C.dB(d,C.dC(w,0.006,0,D.fw,w,3,0.35,0.08,0.08))
C.dB(d,C.dC(2282478,0.12,0,D.bb,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWH.prototype={
$1(d){var w=2450411,v=4280640491
C.dB(d,C.dC(3423541034,0.48,0,D.bb,w,0,1,0,0))
C.dB(d,C.dC(v,0.12,-0.08,D.kl,w,0,1.1,-0.05,0.38))
C.dB(d,C.dC(858088427,0.35,0,D.bb,w,0,0.42,0.55,0.05))
C.dB(d,C.dC(v,0.006,0,D.fw,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fWI.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d4b[w]
u=Date.now()
t=$.hG
$.hG=t+1
v=new C.en("design_"+(""+1000*u+"_"+t),D.eM,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bo,A.aG,4279310375,A.b6,null,D.bb,v,4294967295,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,v)}C.dB(d,C.dC(s,0.006,0,D.fw,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fWJ.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ap(A.mc,A.dy,w/3).l()
u=Date.now()
t=$.hG
$.hG=t+1
v=new C.en("design_"+(""+1000*u+"_"+t),D.eM,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bo,A.aG,4279310375,A.b6,null,D.Ev,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,v)}C.dB(d,C.dC(s,0.006,0,D.fw,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fWK.prototype={
$1(d){var w=4294967295
C.dB(d,C.dC(4280640491,1,0,D.bb,2450411,0,0.42,0,0))
C.dB(d,C.dC(4280110808,1.1,1.57,D.kk,2450411,0,0.18,0.35,-0.05))
C.dB(d,C.dC(w,0.006,0,D.fw,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWL.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dB(d,C.dC(w,0.1,0,D.bb,v,0,1,0,0))
C.dB(d,C.dC(u,0.012,0,D.bb,v,0,1,0,0.1))
C.dB(d,C.dC(u,0.006,0,D.fw,u,3,0.42,0.06,0.14))
C.dB(d,C.dC(403446057,0.68,0,D.kl,v,0,0.22,0.72,0.18))
C.dB(d,C.dC(w,0.1,0,D.bb,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWM.prototype={
$1(d){var w=4278630100
C.dB(d,C.dC(4279310375,1.2,0.15,D.kl,2450411,0,0.55,-0.2,-0.1))
C.dB(d,C.dC(w,1.1,0.15,D.bb,2450411,0,0.08,0.15,-0.05))
C.dB(d,C.dC(1120295,0.18,0,D.bb,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWr.prototype={
$1(d){var w=4292617766
C.dB(d,C.dC(4282714634,0.65,-0.2,D.kk,2450411,0,0.65,-0.1,0.45))
C.dB(d,C.dC(w,0.5,-0.15,D.kk,2450411,0,0.5,0.05,0.55))
C.dB(d,C.dC(w,0.006,0,D.fw,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fWs.prototype={
$1(d){var w=2450411
C.dB(d,C.dC(4278413729,0.35,3.14,D.kk,w,0,0.45,-0.05,0.7))
C.dB(d,C.dC(4278355143,0.3,3.14,D.kk,w,0,0.4,0.25,0.75))
C.dB(d,C.dC(4279150057,0.32,3.14,D.kk,w,0,0.5,0.55,0.72))
C.dB(d,C.dC(863884284,0.22,0,D.eZ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fWt.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dB(d,C.dC(w,0.14,0,D.bb,v,0,0.14,0.02,0.02))
C.dB(d,C.dC(2282478,0.14,0,D.bb,u,3,0.14,0.84,0.02))
C.dB(d,C.dC(w,0.28,0,D.kl,v,0,0.35,-0.08,0.78))
C.dB(d,C.dC(u,0.22,0.5,D.kk,v,0,0.3,0.72,0.78))
C.dB(d,C.dC(w,0.006,0,D.fw,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fWu.prototype={
$1(d){var w=4293571336,v=1156231944
C.dB(d,C.dC(1841431,0.92,0,D.bb,w,3,0.92,0.04,0.04))
C.dB(d,C.dC(v,0.15,0,D.kk,2450411,0,0.15,0.02,0.02))
C.dB(d,C.dC(v,0.15,3.14,D.kk,2450411,0,0.15,0.83,0.83))
C.dB(d,C.dC(w,0.004,0,D.fw,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fWv.prototype={
$1(d){var w=4279080072,v=2450411
C.dB(d,C.dC(w,0.14,0,D.lx,v,0,0.14,0.68,0.18))
C.dB(d,C.dC(4279548070,0.14,0,D.lx,v,0,0.14,0.78,0.28))
C.dB(d,C.dC(4281193663,0.14,0,D.lx,v,0,0.14,0.68,0.38))
C.dB(d,C.dC(4284410580,0.14,0,D.lx,v,0,0.14,0.78,0.48))
C.dB(d,C.dC(4279203438,0.14,0,D.lx,v,0,0.14,0.68,0.58))
C.dB(d,C.dC(w,0.006,0,D.fw,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fWw.prototype={
$1(d){var w=2450411,v=4280640491
C.dB(d,C.dC(3708753706,0.42,0,D.bb,w,0,1,0,0))
C.dB(d,C.dC(v,0.06,-0.05,D.kl,w,0,1,0,0.38))
C.dB(d,C.dC(859356664,0.25,0,D.eZ,w,0,0.25,0.7,0.08))
C.dB(d,C.dC(v,0.006,0,D.fw,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fWx.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ap(A.mc,A.dy,w/3).l()
u=Date.now()
t=$.hG
$.hG=t+1
v=new C.en("design_"+(""+1000*u+"_"+t),D.eM,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bo,A.aG,4279310375,A.b6,null,D.Ev,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,v)}C.dB(d,C.dC(4280172719,0.08,0,D.bb,2450411,0,1,0,0))
C.dB(d,C.dC(s,0.006,0,D.fw,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fWy.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.hG
$.hG=u+1
u=new C.en("design_"+(""+1000*v+"_"+u),D.eM,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bo,A.aG,s,A.b6,null,D.fw,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ca(d.z,0,u)}C.dB(d,C.dC(s,0.75,0,D.bb,2450411,0,0.22,0.72,0.1))
C.dB(d,C.dC(872415231,0.16,0,D.bb,2450411,0,0.16,0.75,0.15))
C.dB(d,C.dC(s,0.006,0,D.fw,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWz.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dB(d,C.dC(4674921,0.9,0,D.bb,4287931320,2,0.9,0.05,0.05))
C.dB(d,C.dC(w,0.08,0,D.bb,v,0,0.08,0.03,0.03))
C.dB(d,C.dC(u,0.08,0,D.bb,v,0,0.08,0.89,0.03))
C.dB(d,C.dC(u,0.08,0,D.bb,v,0,0.08,0.03,0.89))
C.dB(d,C.dC(w,0.08,0,D.bb,v,0,0.08,0.89,0.89))
C.dB(d,C.dC(w,0.004,0,D.fw,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fWA.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.hG
$.hG=t+1
t=new C.en("design_"+(""+1000*u+"_"+t),D.eM,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bo,A.aG,r,A.b6,null,D.bb,4294967295,4280640491,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.Lp
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,t)
u=B.ap(A.dh,A.cs,w/2).l()
t=Date.now()
s=$.hG
$.hG=s+1
u=new C.en("design_"+(""+1000*t+"_"+s),D.eM,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bo,A.aG,r,A.b6,null,D.bb,u,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ca(d.z,0,u)}C.dB(d,C.dC(4280171146,1,0,D.bb,q,0,0.48,0,0))
C.dB(d,C.dC(4280172719,1.1,1.57,D.kk,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fWC.prototype={
$1(d){var w=2450411
C.dB(d,C.dC(870995980,0.55,0.45,D.kl,w,0,0.55,-0.12,-0.08))
C.dB(d,C.dC(856996006,0.45,0.45,D.kl,w,0,0.45,0.62,-0.05))
C.dB(d,C.dC(16777215,0.38,0.45,D.kl,4293548044,5,0.38,0.52,0.12))
C.dB(d,C.dC(585783308,0.3,0.45,D.kl,w,0,0.3,0.56,0.16))
C.dB(d,C.dC(4279548070,0.06,0,D.bb,w,0,0.16,0.38,0.04))
C.dB(d,C.dC(1156208652,0.28,0,D.eZ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWD.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dB(d,C.dC(w,1,0,D.bb,v,0,0.07,0,0))
C.dB(d,C.dC(u,0.1,0,D.bb,t,1,0.46,0.48,0.14))
C.dB(d,C.dC(u,0.1,0,D.bb,t,1,0.46,0.48,0.28))
C.dB(d,C.dC(u,0.1,0,D.bb,t,1,0.46,0.48,0.42))
C.dB(d,C.dC(s,0.08,0,D.eZ,v,0,0.08,0.5,0.16))
C.dB(d,C.dC(w,0.08,0,D.eZ,v,0,0.08,0.5,0.3))
C.dB(d,C.dC(4279548070,0.08,0,D.eZ,v,0,0.08,0.5,0.44))
C.dB(d,C.dC(16777215,0.32,0.45,D.kl,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fWE.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dB(d,C.dC(4294047225,0.08,0,D.bb,t,2,0.1,0.02,0.06))
C.dB(d,C.dC(s,0.42,0,D.bb,2450411,0,0.36,0.58,0.18))
C.dB(d,C.dC(872415231,0.12,0,D.bb,2450411,0,0.28,0.62,0.24))
C.dB(d,C.dC(16777215,0.28,0,D.eZ,s,4,0.32,0,0.72))
C.dB(d,C.dC(r,0.006,0,D.fw,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.hG
$.hG=u+1
u=new C.en("design_"+(""+1000*v+"_"+u),D.eM,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bo,A.aG,4279310375,A.b6,null,D.eZ,16777215,t,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ca(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fWF.prototype={
$1(d){var w=2450411,v=4279548070
C.dB(d,C.dC(3423541034,0.55,0,D.bb,w,0,1,0,0))
C.dB(d,C.dC(4009754623,0.56,0.45,D.kl,w,0,0.56,0.22,0.18))
C.dB(d,C.dC(3439329279,0.44,0.45,D.kl,w,0,0.44,0.28,0.24))
C.dB(d,C.dC(v,0.07,0,D.bb,w,0,0.22,0.34,0.62))
C.dB(d,C.dC(v,1,0,D.bb,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fNO.prototype={
$1(d){return d.a===this.a},
$S:z+22}
C.fNP.prototype={
$0(){return A.d.gH($.bHP())},
$S:z+56}
C.fzI.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fzH.prototype={
$1(d){return C.iff(d,this.a,this.b)},
$S:z+57}
C.fX4.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wp(1.0375,1.01875,1)
return new B.h0(v,u,new C.aVw(B.i4z(A.w3,C.ifi(w.c,w.d,v,u),t)))},
$S:402}
C.e52.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.e51.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.ji(new B.an(A.a0,w,A.b1,A.t,B.a([new B.bN(new B.o(w,w,w,w,w,new B.bT(A.Bu,1.2,A.x,w,0,u.d,w,w),A.n),A.bk,w,w),new B.e8(B.b5(w,w,w,new C.bhD(u.a,s,r,s),A.az),w),B.as(new B.k7(s,new C.e50(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:318}
C.e50.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ed.az(0,A.h.D(e/1.4,0,1)),p=A.h.D(e/0.9,0,1),o=A.h.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.u(j,B.a([B.p(r,B.i3(B.fX(i,A.z,r,r,A.cm,A.bX,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.h4(A.z,0,6.283185307179586,A.x,t,r,new B.mR(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.buC(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cT(i[1].j(0.6),A.J,t)],x.S),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a7(A.a5,A.a9,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNQ(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.N,0,A.p),new B.r(0,(1-o)*m*0.03)),o))
return B.d3(B.e4(A.z,new B.D(new B.Q(l,0,l,0),B.x(j,A.l,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:103}
C.faq.prototype={
$1(d){var w=this.b
return new B.a7(A.ay,A.aC,A.x,this.a.c,B.a([0,A.h.D(w-0.1,0,1),A.h.D(w,0,1),A.h.D(w+0.1,0,1),1],x.x),null).aD(0,d)},
$S:71}
C.cgk.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bL:A.bw
t=B.K(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.i8.j(0.4),A.J,14)],x.V):v
w=B.cU(v,B.bv(B.l(12),d,A.aq),v,v,A.b0,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fE,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bL:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1719}
C.cgl.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gj(""))},
$S:0}
C.cgm.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dt(!0,new C.Ov(v.Gj(u),!0,!1,null),null),d.b,new C.cgn(w,this.c,d),v.a===u)},
$S:z+58}
C.cgn.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hJ8(u.b,t.c.Gj(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h2Z.prototype={
$1(d){return new C.a_T(this.a,null)},
$S:z+59}
C.djp.prototype={
$0(){var w=this.a
w.d=w.gwl().bfH("data:"+this.b+";base64,"+A.cK.gcn().aL(this.c));++w.r},
$S:0}
C.dju.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.djv.prototype={
$0(){var w=this.a
return w.m(new C.djt(w))},
$S:0}
C.djt.prototype={
$0(){return this.a.r++},
$S:0}
C.djw.prototype={
$1(d){var w=this.a
return w.m(new C.djs(w,d))},
$S:2}
C.djs.prototype={
$0(){var w=this.a
return w.d=w.gwl().aGt(this.b)},
$S:0}
C.djx.prototype={
$0(){var w=this.a
return w.m(new C.djr(w))},
$S:0}
C.djr.prototype={
$0(){var w=this.a
return w.d=w.gwl().bfH("")},
$S:0}
C.djy.prototype={
$1(d){var w=this.a
return w.m(new C.djq(w,d))},
$S:2}
C.djq.prototype={
$0(){var w=this.a
return w.d=w.gwl().bfN(this.b)},
$S:0}
C.djz.prototype={
$0(){var w=this.a
w=w.gwl().bfN(w.gaA0().a.a)
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.h2Y.prototype={
$1(d){var w={}
w.a=this.a
return new B.e3(new C.h2X(w),null)},
$S:20}
C.h2X.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cN(new B.aY(0,1/0,0,B.aE(d,A.c_,x.w).w.a.b*0.85),B.ca(B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.h5_,A.ax,D.h5f,A.aB,new C.b21(v.a,new C.h2W(v,e,d),!0,w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b9L,w,w,w,w,A.OD,w,w,w)},
$S:177}
C.h2W.prototype={
$1(d){this.b.$1(new C.h2V(this.a,d))
B.a6(this.c,!1).N(d)},
$S:z+60}
C.h2V.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h5p.prototype={
$1(d){return D.hFF},
$S:z+61}
C.dqc.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dqd.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).N(this.b)
return null},
$S:0}
C.dqe.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).N(v)}},
$S:0}
C.fTx.prototype={
$1(d){var w=this.b
return new B.a7(A.ay,A.aC,A.x,B.a([A.L,B.ap(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.h.D(w-0.12,0,1),A.h.D(w,0,1),A.h.D(w+0.12,0,1)],x.x),null).aD(0,d)},
$S:71}
C.dj6.prototype={
$3(d,e,f){var w,v=this,u=new B.aH($.S().r,A.aj,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.ce(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.ce(w,q+p,w,q+p*1.2))
u.E(new B.DW(B.bW(new B.r(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.L()
p.r=B.ap(v.a.d,A.c,0.6).gp(0)
s.O(new B.r(w,o),2.2,p)},
$S:472}
C.fTB.prototype={
$2(d,e){return A.h.aQ(d.c,e.c)},
$S:z+62}
C.fLN.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fLO.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.z5,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fNH,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.df(D.Ij,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fLL(d),B.bp(A.c3,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.ep(A.oQ,w,D.WA,new C.fLM(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,U.ya,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLL.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLM.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.cm_.prototype={
$1(d){return d.hT()},
$S:z+63}
C.cm0.prototype={
$1(d){return d.aj()},
$S:z+64}
C.clZ.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.h.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.h.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.h.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.iaU(b2.h(0,"type"))
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
n=A.aEL[A.o.D(b4,0,8)]
m=D.d7w[A.o.D(w,0,1)]
l=C.ieD(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.h.M(k)
if(k==null)k=4279310375
j=A.aB6[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ihu(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.h.M(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.h.M(f)
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
a2=a2==null?b1:A.h.M(a2)
if(a2==null)a2=0
a3=C.hDG(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.h.M(a4)
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
b2=b2==null?b1:A.h.M(b2)
return C.ej(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+65}
C.clP.prototype={
$1(d){return d.hT()},
$S:z+66}
C.clQ.prototype={
$1(d){return d.aj()},
$S:z+67}
C.clM.prototype={
$1(d){return B.w(d)},
$S:17}
C.clN.prototype={
$1(d){return B.w(d)},
$S:17}
C.clO.prototype={
$1(d){return C.hu_(B.a1(d,x.N,x.z))},
$S:z+68}
C.cmg.prototype={
$1(d){return d.a===this.a},
$S:z+69}
C.cmh.prototype={
$0(){return A.d.gH(D.a6j)},
$S:z+70}
C.cmb.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cb(d.f))w.n(0,u,d.hT())},
$S:z+7}
C.cma.prototype={
$2(d,e){return e.f.aQ(0,d.f)},
$S:z+21}
C.cm6.prototype={
$1(d){return new B.N(d,new C.cm7(),B.U(d).k("N<1,V>")).f0(0,new C.cm8())},
$S:z+73}
C.cm7.prototype={
$1(d){return d.f},
$S:z+112}
C.cm8.prototype={
$2(d,e){return d.cb(e)?d:e},
$S:712}
C.cm9.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.E)
return C.i0k(d)},
$S:z+75}
C.cmc.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cmd.prototype={
$2(d,e){return e.f.aQ(0,d.f)},
$S:z+21}
C.cme.prototype={
$1(d){return d.aj()},
$S:z+20}
C.fUd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.I(0,j)
break}}}},
$S:z+77}
C.fU9.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+9}
C.fUa.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+9}
C.fUb.prototype={
$2(d,e){var w
if(d.b===D.d1){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+9}
C.fUc.prototype={
$2(d,e){return d.b===D.eM&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+9}
C.clV.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.iqm(b2,b3),b5=B.a3(b4).k("b8<2>")
b5=B.cF(new B.b8(b4,b5),new C.clU(),b5.k("M.E"),x.N)
w=B.d0(b5,B.a3(b5).k("M.E"))
b1=b1.e
v=A.qz.az(0,A.h.D(b1,0,1))
u=new C.clW()
b5=B.ap(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ap(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.clX(a9,b7.d)
r=new C.clY(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.k2.az(0,A.h.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kO(A.h.D(1-k,0,1),B.dP(B.e4(A.z,r.$1(l),1-k*0.06,a8,a8),new B.r(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.eM){a4=i.hT()
a4.ay=B.ap(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ap(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.kj&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b1,A.t,B.a([new B.kO(A.h.D(o,0,1),r.$1(l),a8),new B.kO(A.h.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.j0(B.wU(a3),a8,A.z,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.h.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cd)a7=D.na
p.push(s.$5(i.c,i.d,i.e,i.f,C.hGf(a7,a6,r.$1(i))))}}return new B.bN(new B.o(a8,a8,a8,a8,a8,new B.a7(A.a5,A.a9,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bk,new B.an(A.a0,a8,A.ad,A.t,p,a8),a8)},
$S:371}
C.clU.prototype={
$1(d){return d.a},
$S:z+19}
C.clW.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+80}
C.clX.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1723}
C.clY.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a9i(v,C.b49(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+18}
C.dRL.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e4(new B.d7(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cm3.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cm4.prototype={
$1(d){return d.a===this.a.a},
$S:z+22}
C.fXb.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:302}
C.fWi.prototype={
$1(d){return new C.af0(this.a,this.b,null)},
$S:z+82}
C.eDX.prototype={
$0(){return this.a.QU(this.b,C.itL(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eDY.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QU(this.b,C.itN(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eDZ.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QU(this.b,C.itM(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eE_.prototype={
$0(){A6.hFZ()
B.a6(this.a,!1).N(null)},
$S:0}
C.clT.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1724}
C.clS.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.dR(d,A.oa),r=s==null?t:s.b,q=r==null?2:r,p=e.b,o=isFinite(p)?p:0,n=o<=0?t:A.h.U(A.h.D(o*Math.max(B.jp(q),5),96,1500))
s=u.b
w=u.c
v=w?t:n
if(w)w=A.ue
else w=u.d||u.e?A.bX:A.dC
return B.fX(s,A.z,v,new C.clR(),A.cm,w,!0,t,!1,new B.bg("img_"+u.a.c.a+"_"+s.length,x.W),t)},
$S:1725}
C.clR.prototype={
$3(d,e,f){return D.ags},
$S:206}
C.fU8.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a7(A.ay,A.aC,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.cY(r,0,B.dD(6,"count",x.r),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fU7(e.b,e.d),u),u.k("ak.E"))
return B.bv(s,new B.bN(new B.o(v,t,t,t,t,w,A.n),A.bk,new B.an(A.a0,t,A.ad,A.t,r,t),t),A.aq)},
$S:1726}
C.fU7.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b49(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+17}
C.fCt.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cz(r.b,new C.fCr(d))
w=B.aE(d,A.c_,x.w).w
v=B.l(22)
u=B.K(A.bw,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.fQ,28)],x.V)
s=x.p
return new B.d2(e,!1,B.as(B.aG(!1,A.a3,!0,q,B.p(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jR,q,q,q),A.ax,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bP(!1,A.Bb,q,q,!0,q,q,q,new C.fCs(p,d),q,B.fs(q,q,A.bp,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.CI,q,new B.ba(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.i,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.hc,A.CO,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:254}
C.fCr.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).q4())B.a6(w,!0).ek()},
$S:0}
C.fCs.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).ek()},
$S:0}
C.fj0.prototype={
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
case 14:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.ji(u.b,A.t,new C.aM6(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.ji(u.b,A.t,new C.aM6(1-r,t))],x.p),t)
case 16:v=D.bdq.az(0,r)
return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e4(A.z,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n5(r*6.28)
s.k7(r,r,r,1)
return B.fA(A.z,u.b,t,s,!0)
case 20:return B.eK(A.z,(r-0.5)*0.35,new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:68}
C.e2M.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.e2L.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.e2K.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hGf(v,w,e)},
$S:68}
C.clL.prototype={
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
q=B.C(new B.N(v,new C.clK(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bN(new B.o(t,r,r,r,r,u,A.n),A.bk,new B.an(A.a0,r,A.ad,A.f,q,r),r)},
$S:371}
C.clK.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cd?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a9i(m,new C.Wy(d,C.b49(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+17}
C.dgj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dgi(w))},
$S:11}
C.dgi.prototype={
$0(){return this.a.d++},
$S:0}
C.erj.prototype={
$2(d,e){var w,v=null,u=A.o.ar(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aUl.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.iq3(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
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
$S:68}
C.f7V.prototype={
$1(d){var w
$.S()
w=B.L()
w.b=A.aa
w.c=d
w.e=A.dQ
return w},
$S:1727}
C.fRx.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdk()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b5(r,r,r,new C.buv(u,t,r),A.az))
w.push(B.o0(s.d,A.aq,new C.bi9(u,t,r)))
if(!p)w.push(B.b5(r,r,r,new C.btr(u,q,t,r),A.az))
return B.as(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b1,A.t,w,r),r),r,r,r)},
$S:222}
C.fFA.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:299}
C.eKe.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(W.DE(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gau(s)){u=null
w=1
break}u=r.dL(s,new C.eKc(),new C.eKd(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1728}
C.eKc.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:187}
C.eKd.prototype={
$0(){return J.fn(this.a)},
$S:1730}
C.eGC.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGD.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGE.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eIc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eI0.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eI1.prototype={
$1(d){return d.hT()},
$S:z+85}
C.eG_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eJk.prototype={
$0(){this.a.uh()},
$S:0}
C.eKa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oL()
w.KX()},
$S:0}
C.eIa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oL()
w.KX()},
$S:0}
C.eJY.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eJZ.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eK_.prototype={
$1(d){return d.a},
$S:z+19}
C.eK0.prototype={
$0(){var w=this.a.r
return new B.au(new B.bb(w,A.b7,A.aP),$.ax())},
$S:274}
C.eK1.prototype={
$0(){return B.ke(!0,null,!0,!0,null,null,!1)},
$S:651}
C.eFm.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eKb.prototype={
$0(){},
$S:0}
C.eHj.prototype={
$0(){var w=this.a
w.e=this.b.hT()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()
w.KX()},
$S:0}
C.eFk.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yi()},
$S:0}
C.eFl.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yi()},
$S:0}
C.eHG.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eHH.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()
w.KX()
w.z="Home"},
$S:0}
C.eHI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHi.prototype={
$1(d){var w=null
return B.em(B.a([B.bP(!1,A.Wz,w,w,!0,w,w,w,new C.eHh(d),w,w)],x.p),w,w,w,D.h6R,w,w,w,w,D.fOa,w)},
$S:18}
C.eHh.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHf.prototype={
$1(d){var w=null
return B.em(B.a([B.bP(!1,A.Wz,w,w,!0,w,w,w,new C.eHe(d),w,w)],x.p),w,w,w,D.fSp,w,w,w,w,D.fQ2,w)},
$S:18}
C.eHe.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHg.prototype={
$0(){},
$S:0}
C.eGy.prototype={
$1(d){return this.a.b3K(C.bFL(d))},
$S:z+7}
C.eGz.prototype={
$1(d){return this.a.agT(C.bFL(d))},
$S:z+7}
C.eHp.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.h6V,A.ax,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.QM(A.ti,D.aCv,"HATI YA KUHOWA","Hati ya mahari",new C.eHk(d),w),A.T,new C.QM(A.h3,D.dlq,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eHl(d),w),A.T,new C.QM(A.hD,D.d5s,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eHm(d),w),A.T,new C.QM(A.ii,D.d3n,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eHn(d),w)],v)
if(this.a.gZg())A.d.u(u,B.a([A.T,new C.QM(A.iW,D.cP2,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eHo(d),w)],v))
return B.bn(!0,B.ca(B.x(u,A.al,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,E.z5,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eHk.prototype={
$0(){B.a6(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.eHl.prototype={
$0(){B.a6(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.eHm.prototype={
$0(){B.a6(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.eHn.prototype={
$0(){B.a6(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.eHo.prototype={
$0(){B.a6(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.eHq.prototype={
$0(){var w=this.a
w.e=this.b.hT()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()},
$S:0}
C.eFo.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eFp.prototype={
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
C.eHB.prototype={
$1(d){return d.b===D.kj},
$S:z+4}
C.eHC.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e3(new C.eHz(w,this.a,v),null)},
$S:20}
C.eHz.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eHA(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.bs:A.ci,h=l?A.a_:A.c,g=B.l(28),f=B.K(l?A.bw:A.bm,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bF,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aI(q,q,q,q,B.X(A.cB,j,q,q,q,q),q,q,q,new C.eHv(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.DR[w]
v.a=null
t=v.a=u.a
a1.push(new C.bkJ(t,u.b,p.a===t,i,k,new C.eHw(v,m),q))}a1=B.c_(A.bI,a1,A.br,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.DK[w]
s.a=null
t=s.a=r.a
u.push(new C.bkI(t,r.b,p.b===t,k,j,new C.eHx(s,m),q))}return B.bn(!0,B.p(q,B.ca(B.x(B.a([d,A.aO,a0,A.T,a1,A.bx,v,A.T,B.c_(A.bI,u,A.br,q,12,12),A.bx,new B.a5(1/0,48,B.ep(D.c63,q,D.h9k,new C.eHy(o,n),B.dj(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.ba(B.l(16),A.a1),D.b7f,q,q,q,q)),q)],e),A.E,q,A.e,A.N,0,A.p),A.t,q,A.y,q,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uM,D.bGV,q,q,q),!0,!1,A.ag,!0,!0)},
$S:86}
C.eHA.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eHt(w.a,d,e))
w.b.d8(new C.eHu(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1733}
C.eHt.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eHu.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eHv.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHw.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eHx.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eHy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(X.DJ(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d8(new C.eHs(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHs.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eHE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eHF.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eHD(t.d))
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
C.eHD.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eHW.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eHX.prototype={
$1(d){return d.w},
$S:z+86}
C.eHY.prototype={
$2(d,e){return d>e?d:e},
$S:84}
C.eHZ.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.bs:A.aS,q=u?A.a_:A.c,p=B.l(28),o=B.K(u?A.bw:A.bm,A.r,1),n=B.aE(d,A.c_,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.x(B.a([B.A(B.a([B.p(v,D.c_l,A.f,v,v,D.b8D,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aI(v,v,v,v,B.X(A.cB,s,v,v,v,v),v,v,v,new C.eHT(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.i,0,v,v),A.aB,new B.di(1,A.cn,B.hW(v,new C.eHU(m,k,w.c,s,w.d,t,r),k.length,A.f2,v,A.ah,new C.eHV(),!0),v)],l),A.E,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uM,A.a1p,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eHT.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHV.prototype={
$2(d,e){return A.af},
$S:38}
C.eHU.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cD
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.c2K,q,q,q,new C.eHR(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bJb,n,q),B.aN(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bA(q,new B.b6(4,B.l(16),A.a1),q,A.eX,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b6V),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eHS(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a7,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:649}
C.eHR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ivS(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.oh(q.a,o,n,s)
r.bP(0,new B.bb(m,B.ho(A.bB,o+s.length),A.aP))
l.akV(k,m)
l.pS()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHS.prototype={
$1(d){var w=this.a
w.akV(this.b.a,d)
w.pS()},
$S:2}
C.eI_.prototype={
$0(){},
$S:0}
C.eHr.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eFF.prototype={
$0(){},
$S:0}
C.eFG.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hHE(this.b,w,!0)
w=this.a
w.r=null
w.yi()},
$S:0}
C.eFH.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFI.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eFE(t.d))
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
C.eFE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eI5.prototype={
$1(d){return B.pn(new C.eI4(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:139}
C.eI4.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.anY,B.x(B.a([D.h4m,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.iA(!0,w,e,A.y,D.fpy,new C.eI3(this.a,this.b),20,A.uO,w,A.ah,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:448}
C.eI3.prototype={
$2(d,e){var w=null,v=D.IL[e],u=C.i0f(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.K(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fN,w,w,w)],m)
if(u)A.d.u(n,B.a([A.bn,B.p(w,D.fiv,A.f,w,w,new B.o(A.dX.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n3,w,w,w)],m))
return B.aG(!1,A.a3,!0,w,B.aM(!1,t,!0,B.p(w,B.x(B.a([B.A(n,A.l,w,A.e,A.i,0,w,w),A.b4,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a7(A.a5,A.a9,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eI2(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eI2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cm2(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eI6.prototype={
$0(){var w=this.a
w.e=this.b.hT()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()},
$S:0}
C.eEh.prototype={
$0(){var w,v=this.a,u=v.gqZ(),t=C.t4(4294967295,null,0,0,null,C.cC(),D.n9,"","","",D.dr),s=this.b
C.cmf(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Eu){t.e=w.e
t.f=w.f}A.d.ca(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eFD.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cC())
w=x.d.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gP(v)
if(u.b(t)){s=Date.now()
r=$.hG
$.hG=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ca(v.e.r,v.f+1,C.hu_(q));++v.f},
$S:0}
C.eFB.prototype={
$0(){var w=this.a
A.d.cH(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eIe.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cH(v.e.r,u),s=this.c
A.d.ca(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eFx.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.eFw(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eFw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eId.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eFn.prototype={
$0(){var w=this.a.r
return new B.au(new B.bb(w,A.b7,A.aP),$.ax())},
$S:274}
C.eG0.prototype={
$0(){return B.ke(!0,null,!0,!0,null,null,!1)},
$S:651}
C.eJW.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eJX.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avU(w).fW()
v=u.XN(w)
v.su_(B.ho(A.bB,v.a.a.length))},
$S:8}
C.eJl.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.YO(v)
if(u!=null&&u.b===D.d1)w.XN(u).sb4(0,u.r)}else w.w=null},
$S:0}
C.eEi.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ej(A.b6,!1,v.gqZ().e.l(),A.aG,"",4280640491,24,A.bo,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bb,4280172719,2,"Tap to edit text",0,0,"",D.cd,D.d1,0.7,0.15,0.2)
A.d.I(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eEf.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ej(A.b6,!1,4279310375,A.aG,"",v.gqZ().c.j(0.25).l(),24,A.bo,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqZ().c.l(),2,"",0,0,"",D.cd,D.eM,0.25,0.3,0.3)
A.d.I(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eE5.prototype={
$0(){var w=C.ej(A.b6,!1,4279310375,A.aG,"",4280640491,24,A.bo,A.a8,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kj,0.6,0.2,0.18),v=this.a
A.d.I(v.gdw().z,w)
v.r=w.a},
$S:0}
C.eE2.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.cda],x.p)
for(w=J.aT(this.a);w.C();){v=w.gP(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.galz().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dJ(!1,r,r,r,!0,r,r,r,!0,r,r,D.bXX,r,r,r,r,new C.eE1(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bn(!0,B.cw(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eE1.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eE3.prototype={
$0(){var w=A.h.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.W.av(u.aj(),null),s=C.ej(A.b6,!1,4279310375,A.aG,u.b,4280640491,24,A.bo,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bb,4280172719,2,t,0,0,"",D.cd,D.a9g,w,0.5-w/2,0.07)
t=this.a
A.d.I(t.gdw().z,s)
t.r=s.a},
$S:0}
C.eFz.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eFA.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gdw().z,new C.eFy(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.V$=$.ax()
w.R$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eFy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eEK.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.d1)s.Q=t.c.l()
else if(w===D.eM){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eEL(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eEL.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eEP.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eEQ(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdw()
if(t!=null)v.$1(t)}},
$S:0}
C.eEQ.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eEN.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.d1){s.Q=t.c
return}w=new C.eEO(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eEO.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eL(w,new C.eEM()),u=this.a;v.C();)w.gP(0).Q=u},
$S:z+1}
C.eEM.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eEJ.prototype={
$0(){return C.cmf(this.b,this.c,this.a.gqZ())},
$S:0}
C.eHQ.prototype={
$0(){return A.d.ca(this.a.d,0,this.b)},
$S:0}
C.eK4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eK5.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eK6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eK7.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ca(s,0,v.b)
else{w=A.d.bk(s,new C.eK3(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTn()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hT()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yi()
t.KX()}},
$S:0}
C.eK3.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eJB.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ad5(),s=w.b,r=u.ad6(A.fq,A.jN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.K(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bx,B.p(v,B.A(B.a([B.E(u.aYg(w.c,A.an),1),new B.D(A.fv,B.p(v,D.bY1,A.f,v,v,new B.o(A.fq.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aYg(s,A.fq),1)],n),A.l,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a7(A.ay,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bH,v,v,v),A.bx,u.aYj(A.fq,d,D.bU6,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.u(p,B.a([A.T,u.c24(A.aH,d,A.v1,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aYh(d,"Not now"))
return new C.KT(B.x(p,A.al,v,A.e,A.N,0,A.p),v)},
$S:z+8}
C.eJA.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KT(B.x(B.a([v.ad5(),A.P,v.ad6(A.aH,D.bTL,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cN(new B.aY(0,1/0,0,B.aE(d,A.c_,x.w).w.a.b*0.42),B.hW(w,new C.eJy(v,u,d),u.length,w,w,A.ah,new C.eJz(),!0),w),A.aB,v.aYh(d,"Cancel")],x.p),A.al,w,A.e,A.N,0,A.p),w)},
$S:z+8}
C.eJz.prototype={
$2(d,e){return A.T},
$S:38}
C.eJy.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.K(A.c.j(0.08),A.r,1),q=x.p
return B.aG(!1,A.a3,!0,w,B.aM(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.at2,A.f,w,w,new B.o(w,w,w,B.l(12),w,D.ca3,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nf,w,w,w),A.cS,B.d("Updated "+this.a.QV(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bH,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJx(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eJx.prototype={
$0(){B.a6(this.a,!1).N(this.b.a)
return null},
$S:0}
C.eJu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ad5()
t=t.ad6(A.at,A.vd,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KT(B.x(B.a([s,A.P,t,A.bx,B.A(B.a([B.E(B.dW(A.acP,new C.eJs(d),B.dj(u,u,u,u,u,u,u,u,u,A.c,u,u,A.co,u,new B.ba(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bJ(D.fQD,u,new C.eJt(d),B.bp(A.fq,u,u,u,A.c,u,A.co,u,new B.ba(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.N,0,A.p),u)},
$S:z+8}
C.eJs.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eJt.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eJw.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ad5(),s=w.b,r=u.ad6(A.aV,A.ea,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.axd("Names",""+w.c),1),A.ae,B.E(u.axd("Fields",""+w.d),1),A.ae,B.E(u.axd("Signatures",""+w.e),1)],q),A.l,v,A.e,A.i,0,v,v),o=B.bp(A.bp,v,v,v,A.c,v,A.yU,v,new B.ba(B.l(14),A.a1),v,v,v)
return new C.KT(B.x(B.a([t,A.P,r,A.aO,p,A.bx,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.o5,v,v,v),v,new C.eJv(d),o),A.T,u.aYi(d,"Stay here",!1)],q),A.al,v,A.e,A.N,0,A.p),v)},
$S:z+8}
C.eJv.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eGu.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eGt.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eJm.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eJV.prototype={
$1(d){var w=this.a,v=this.b
return new C.a14(A.d.dL(w.d,new C.eJT(v),new C.eJU(v)).hT(),w.f,null)},
$S:z+88}
C.eJT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJU.prototype={
$0(){return this.a},
$S:z+89}
C.eEa.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bH,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h6,w,w,w),w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZS,w,w,w,w,new C.eE8(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fOz,w,w,w)],x.p)
if(v>1)t.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0a,w,w,w,w,new C.eE9(d),!1,w,w,w,w,w,D.haC,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bn(!0,B.x(t,A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eE8.prototype={
$0(){B.a6(this.a,!1).N("scroll")
return null},
$S:0}
C.eE9.prototype={
$0(){B.a6(this.a,!1).N("split")
return null},
$S:0}
C.eEb.prototype={
$0(){var w=this.b,v=w.c,u=C.ej(A.b6,!1,4279310375,A.aG,v,4280640491,24,A.bo,A.a8,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.bb,4280172719,2,v,0,0,"",D.cd,D.Uo,0.88,0.06,0.08)
v=this.a
A.d.I(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eEc.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.hG
$.hG=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.hG
$.hG=k+1
m.push(new C.en(""+1000*l+"_"+k,D.Uo,0.04,0.06,0.92,0.88,v,24,A.a8,A.bo,A.aG,4279310375,A.b6,u,D.bb,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cd,0,"","","","","",!1,0))
A.d.ca(j.e.r,i+q-1,new C.ll(""+1000*p+"_"+o,r+n,"",D.r6,4294967295,null,D.dr,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eEg.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kn(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ej(A.b6,!1,4279310375,A.aG,t,4280640491,24,A.bo,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.lw,0.35,0.55,0.62)
A.d.I(u.gdw().z,w)
u.r=w.a},
$S:0}
C.eE7.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b6s(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ej(A.b6,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.el(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.lw,s,u,t)
A.d.I(p.gdw().z,q)
A.d.bq(p.gdw().z,new C.eE6(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ipL(p)}},
$S:0}
C.eE6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eIb.prototype={
$0(){var w=this.a,v=this.b
w.b6s(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eK2.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eGx.prototype={
$0(){var w,v,u,t,s,r,q=this.b
A.d.bq(q.z,new C.eGw())
w=this.a
v=w.e
if((v==null?null:v.fx)==null)for(q=q.z,v=q.length,u=this.c+0.001,t=0;t<v;++t){s=q[t]
r=s.d
if(r>u)s.d=r-0.043}w.r=null},
$S:0}
C.eGw.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||w==="marriage_locked_nim_badge_4"||w==="marriage_locked_nim_badge_4_fill"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eET.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eEU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uh()},
$S:8}
C.eE4.prototype={
$0(){var w=C.ej(A.b6,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bo,A.a8,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.bb,4280172719,2,"",0,0,"",D.cd,D.kj,0.8,0.1,0.1),v=this.a
A.d.I(v.gdw().z,w)
v.r=w.a},
$S:0}
C.eFZ.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eEd.prototype={
$0(){var w=this.a,v=this.b
A.d.I(w.gdw().z,v)
w.r=v.a},
$S:0}
C.eEm.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eEn.prototype={
$0(){var w=this.b.hT(),v=C.cC(),u=A.h.D(w.c+0.04,0,0.92),t=A.h.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ej(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.I(t.gdw().z,f)
t.r=f.a},
$S:0}
C.eEo.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bk(w,new C.eEl(v))
if(u>=0&&u<w.length-1){A.d.cH(w,u)
A.d.ca(w,u+1,v)}},
$S:0}
C.eEl.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEz.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bk(w,new C.eEk(v))
if(u>0){A.d.cH(w,u)
A.d.ca(w,u-1,v)}},
$S:0}
C.eEk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEC.prototype={
$0(){return this.a.as=A.b6},
$S:0}
C.eED.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eEE.prototype={
$0(){return this.a.as=A.e2},
$S:0}
C.eEF.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eEG.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eEH.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eEI.prototype={
$1(d){return d.length!==0},
$S:3}
C.eEp.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cC()
A.d.I(v,C.DK(w.gqZ().c.j(0.18).l(),0.1,u,D.bb,0,2,1,0,0))
u=w.gdw().z
v=C.cC()
A.d.I(u,C.je(A.b6,!1,w.gqZ().d.l(),A.aG,18,A.bo,A.H,0.07,v,"Document Header",0,D.dr,0.9,0.05,0.02))},
$S:0}
C.eEq.prototype={
$0(){var w,v=this.a,u=v.gdw().z,t=C.cC()
A.d.I(u,C.DK(v.gqZ().c.j(0.12).l(),0.1,t,D.bb,0,2,1,0,0.9))
t=v.gdw().z
u=C.cC()
w=C.bGx()
A.d.I(t,C.je(A.K,!1,v.gqZ().e.l(),A.aG,12,A.bo,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dr,0.9,0.05,0.92))},
$S:0}
C.eEr.prototype={
$0(){A.d.I(this.a.gdw().z,C.DK(1727914055,0.12,C.cC(),D.bb,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eEs.prototype={
$0(){var w=4279310375
A.d.I(this.a.gdw().z,C.DK(w,0.08,C.cC(),D.bb,w,2,0.5,0.2,0.4))},
$S:0}
C.eEt.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cC()
A.d.I(v,C.DK(w.gqZ().c.j(0.35).l(),0.12,u,D.Ev,4280640491,2,0.2,0.15,0.55))
A.d.I(w.gdw().z,C.je(A.b6,!1,4279310375,A.aG,18,A.bo,A.a8,0.15,C.cC(),"Important note",0,D.r7,0.5,0.38,0.52))},
$S:0}
C.eEu.prototype={
$0(){var w=this.a
A.d.I(w.gdw().z,C.DK(4294507260,0.78,C.cC(),D.bb,4291548641,1.5,0.84,0.08,0.1))
A.d.I(w.gdw().z,C.je(A.b6,!1,4279179050,A.aG,16,A.bo,A.a8,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bGx()+"\n\nSubject:\n\nBody text\u2026",0,D.dr,0.76,0.12,0.14))},
$S:0}
C.eEv.prototype={
$0(){var w=this.a
A.d.I(w.gdw().z,C.DK(4294897802,0.28,C.cC(),D.bb,4294626325,2,0.3,0.62,0.12))
A.d.I(w.gdw().z,C.je(A.b6,!1,4285611794,A.aG,15,A.bo,A.a8,0.24,C.cC(),"Sticky note",0,D.aMr,0.26,0.64,0.14))},
$S:0}
C.eEw.prototype={
$0(){var w=4280640491,v=this.a
A.d.I(v.gdw().z,C.DK(4293060848,0.04,C.cC(),D.bb,4291548641,2,0.8,0.1,0.48))
A.d.I(v.gdw().z,C.DK(w,0.04,C.cC(),D.bb,w,2,0.55,0.1,0.48))},
$S:0}
C.eEx.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdw().z,C.je(A.b6,!1,w,A.aG,18,A.bo,A.a8,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.JK,0.42,0.06,0.18))
A.d.I(v.gdw().z,C.je(A.b6,!1,w,A.aG,18,A.bo,A.a8,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vx,0.42,0.52,0.18))},
$S:0}
C.eEy.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdw().z,C.DK(858088427,0.62,C.cC(),D.bb,4280640491,2,0.42,0.05,0.18))
A.d.I(v.gdw().z,C.DK(856004201,0.62,C.cC(),D.bb,4278556265,2,0.42,0.53,0.18))
A.d.I(v.gdw().z,C.je(A.b6,!1,w,A.aG,20,A.bo,A.H,0.1,C.cC(),"Option A",0,D.dr,0.36,0.08,0.2))
A.d.I(v.gdw().z,C.je(A.b6,!1,w,A.aG,20,A.bo,A.H,0.1,C.cC(),"Option B",0,D.dr,0.36,0.56,0.2))},
$S:0}
C.eEA.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdw().z,C.DK(4294967295,0.36,C.cC(),D.bb,w,2,0.24,0.38,0.28))
A.d.I(v.gdw().z,C.je(A.K,!1,w,A.aG,14,A.bo,A.a8,0.12,C.cC(),"[ QR CODE ]",0,D.dr,0.24,0.38,0.4))},
$S:0}
C.eEB.prototype={
$0(){return C.cmf(this.b,D.Up,this.a.gqZ())},
$S:0}
C.eFY.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.ab8.q(0,d),t=this.a
return t.bbI(d,v===d,A.b2,this.c,new C.eFX(t,u,d,w),u)},
$S:z+16}
C.eFX.prototype={
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
C.bHh(r,new C.eFW(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFW.prototype={
$0(){return this.a.d8(new C.eFV(this.b,this.c))},
$S:0}
C.eFV.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eEe.prototype={
$0(){var w,v=this.a,u=v.gqZ(),t=C.t4(4294967295,null,0,0,null,C.cC(),D.n9,"","","",D.dr),s=this.b
C.cmf(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Eu){t.e=w.e
t.f=w.f}A.d.ca(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eF1.prototype={
$1(d){var w,v=this
if(!v.b)return!1
if(d instanceof B.wN){w=v.a.fy
w===$&&B.c()
w=w.r
w=w!=null&&w.a!=null}else w=!1
if(w){w=v.a.fy
w===$&&B.c()
w.rE(0,!1)}else{if(d instanceof B.r5){w=v.a.fy
w===$&&B.c()
w=w.r
w=!(w!=null&&w.a!=null)}else w=!1
if(w){w=v.a.fy
w===$&&B.c()
w.f1(0,!0)}}return!1},
$S:104}
C.eEX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ivV(p,q.d,s,new C.eEW(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uh(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEW.prototype={
$1(d){return this.boI(d)},
boI(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eEV(t,d))
w=2
return B.b(t.uh(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+91}
C.eEV.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gP(w)
A.d.ca(v.d,0,u)}},
$S:0}
C.eEY.prototype={
$0(){return this.a.bNw()},
$S:0}
C.eEZ.prototype={
$0(){return this.a.aTq("Class Presentation",!0)},
$S:0}
C.eF_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF0.prototype={
$1(d){return new B.e8(this.a.bOt(d.b,this.b,d.a),null)},
$S:z+92}
C.eFC.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aE(w,A.c_,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eHP.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aE(d,A.eU,x.w).w.f.d),new B.e3(new C.eHO(this.a,this.b),null),null)},
$S:63}
C.eHO.prototype={
$2(d,e){return B.pn(new C.eHN(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:512}
C.eHN.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.K(u?A.bw:A.bm,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.T,r,new B.D(A.anl,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b4,B.bP(!1,A.Bb,v,v,!0,v,v,v,new C.eHL(w.c),v,v)],q),A.l,v,A.e,A.i,0,v,v),v),B.E(B.cw(B.a([p.aWd(u,!0,!0,new C.eHM(p,w.d))],q),e,v,D.bEx,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.lf,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.eHL.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHM.prototype={
$0(){this.b.$1(new C.eHJ())
var w=this.a
if(w.c!=null)w.m(new C.eHK())},
$S:0}
C.eHJ.prototype={
$0(){},
$S:0}
C.eHK.prototype={
$0(){},
$S:0}
C.eJn.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.eJo.prototype={
$4(d,e,f,g){var w=A.ck.az(0,e.gp(0))
return B.d3(B.e4(A.z,new C.aBm(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:256}
C.eJp.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.eJq.prototype={
$4(d,e,f,g){var w=A.ck.az(0,e.gp(0))
return B.d3(B.e4(A.z,new C.bfY(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:256}
C.eJr.prototype={
$0(){return A.d.ca(this.a.d,0,C.Xr(this.b))},
$S:0}
C.eEj.prototype={
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
t=B.a([A.b_.j(0.35+q),A.cj.j(0.18),A.L],t)
q=B.K(A.b_.j(0.45+q),A.r,1)
t=B.p(p,B.X(A0.PD,u?A.ab:A.a_,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.z,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.uD(A.fk,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d(y.K,p,p,p,p,p,p,B.m(p,p,u?A.aE:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a7(A.ay,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:360}
C.eFq.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eFr.prototype={
$1(d){return d.length!==0},
$S:3}
C.eFs.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.ke
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a3P:A.D4}return w},
$S:643}
C.eFv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=m.b
v=A.dH.az(0,A.h.F(j+w*0.12,1))
j=m.c
u=j?l:new B.o(l,l,l,B.l(20),A.IS,l,A.n)
t=B.l(20)
s=m.d
r=B.l(20)
if(j)q=B.a([A.c.j(0.1+v*0.04),A.av.j(0.78)],x.O)
else{q=(A.o.ar(w,1)&1)===0
p=B.ap(A.c,q?A.aH:A.bh,0.1)
p.toString
o=B.ap(A.c,q?A.aH:A.bh,0.24)
o.toString
o=B.a([p,o],x.O)
q=o}p=!j
if(p)o=B.VV((A.o.ar(w,1)&1)===0?A.aH:A.bh,!0)[0].j(0.75)
else o=A.d.gH(m.e).j(0.34+v*0.22)
o=B.K(o,A.r,p?1.5:1.25)
n=B.l(10)
if(j)w=m.e
else{w=(A.o.ar(w,1)&1)===0
p=B.VV(w?A.aH:A.bh,!0)[0]
p=B.a([p,B.VV(w?A.aH:A.bh,!0)[1]],x.O)
w=p}w=B.p(l,B.X(C.kn(s.w)?A.ti:A.qV,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,n,l,new B.a7(A.a5,A.a9,A.x,w,l,l),A.n),l,36,l,l,l,l,l,52)
p=s.b
p=B.d(p.toUpperCase(),l,l,l,l,l,l,B.m(l,l,j?A.c:A.a_,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=s.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QV(s.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QV(s.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QV(s.f)
else if(n==="hati_kiapo_uongozi"){n=s.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QV(s.f)}else n=""+s.r.length+" slides \u2022 Updated "+k.QV(s.f)
n=k.bOq(n,A.d.gH(m.e),j)
return B.p(l,B.bv(t,new B.a9t(B.aG(!1,A.a3,!0,l,B.aM(!1,l,!0,B.p(l,B.dJ(!1,A.Ha,l,l,!0,l,l,l,!0,l,l,w,l,l,l,l,l,!1,l,l,l,l,l,n,l,p,l,B.aI(l,l,l,l,B.X(A.oI,j?A.aE:A.bP,l,l,l,l),l,l,l,new C.eFt(k,s,j),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,o,r,l,new B.a7(A.ay,A.aC,A.x,q,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eFu(k,s),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai),l),A.aq),A.f,l,l,u,l,l,l,A.kB,l,l,l,l)},
$S:82}
C.eFu.prototype={
$0(){return this.a.agT(this.b)},
$S:0}
C.eFt.prototype={
$0(){return this.a.BA(this.b,this.c)},
$S:0}
C.eGY.prototype={
$0(){var w=this.a
w.bae()
w.m(new C.eGX())},
$S:0}
C.eGX.prototype={
$0(){},
$S:0}
C.eGZ.prototype={
$1(d){return this.a.akV(this.b.a,d)},
$S:2}
C.eH_.prototype={
$0(){this.a.d8(new C.eGW(this.b))},
$S:0}
C.eGW.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eH0.prototype={
$0(){this.a.d8(new C.eGV(this.b))},
$S:0}
C.eGV.prototype={
$0(){var w=this.a
return w.y=w.y===A.cL?A.bo:A.cL},
$S:0}
C.eH1.prototype={
$0(){this.a.d8(new C.eGU(this.b))},
$S:0}
C.eGU.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eH2.prototype={
$0(){this.a.d8(new C.eGT(this.b))},
$S:0}
C.eGT.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eH3.prototype={
$0(){var w=this.a
w.d8(new C.eGS(w,this.b))},
$S:0}
C.eGS.prototype={
$0(){var w=this.b
return w.as=this.a.c98(w.as)},
$S:0}
C.eH4.prototype={
$0(){return this.a.d8(new C.eGR(this.b))},
$S:0}
C.eGR.prototype={
$0(){var w=this.a
return w.w=A.h.D(w.w+2,10,96)},
$S:0}
C.eH5.prototype={
$0(){return this.a.d8(new C.eGQ(this.b))},
$S:0}
C.eGQ.prototype={
$0(){var w=this.a
return w.w=A.h.D(w.w-2,10,96)},
$S:0}
C.eGJ.prototype={
$0(){return this.a.a3w(this.b.a)},
$S:0}
C.eGK.prototype={
$0(){this.a.a13()
return null},
$S:0}
C.eGL.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aE(v,A.c_,x.w).w.a.a<900)w.ahb()
else w.m(new C.eGI(w))},
$S:0}
C.eGI.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eGM.prototype={
$0(){this.a.d8(new C.eGH(this.b))},
$S:0}
C.eGH.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eGN.prototype={
$0(){return this.a.d8(new C.eGG(this.b))},
$S:0}
C.eGG.prototype={
$0(){var w=this.a
return w.w=A.h.D(w.w+2,10,96)},
$S:0}
C.eGO.prototype={
$0(){return this.a.d8(new C.eGF(this.b))},
$S:0}
C.eGF.prototype={
$0(){var w=this.a
return w.w=A.h.D(w.w-2,10,96)},
$S:0}
C.eGP.prototype={
$0(){return this.a.aCq(null)},
$S:0}
C.eFQ.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eFR.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eFS.prototype={
$0(){this.a.abD()
return null},
$S:0}
C.eFU.prototype={
$1(d){return this.boJ(d)},
boJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:case 3:switch(d){case"couple":w=5
break
case"pin":w=6
break
case"share":w=7
break
case"timer":w=8
break
case"motion":w=9
break
case"loop":w=10
break
case"finale":w=11
break
default:w=4
break}break
case 5:s=t.a
r=s.gdw()
if(r==null){w=1
break}q=s.c
q.toString
w=12
return B.b(C.fRR(q,t.b,r,new C.eFK(s)),$async$$1)
case 12:w=4
break
case 6:p=C.bFR(t.b)
if(p==null){w=1
break}w=13
return B.b(C.aSh(p),$async$$1)
case 13:o=f
s=t.a
if(s.c==null){w=1
break}q=C.Sx(p,null)
n=q==null?null:q.b
if(n==null)n="This paper"
s=s.c.K(x.q).f
switch(o.a){case 0:q=n+" is pinned: it comes first when you pick a paper."
break
case 1:q=n+" is unpinned."
break
case 2:q="You can pin up to 4 papers. Unpin one first (open it, tap \u22ef, then Unpin)."
break
default:q=null}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 7:w=14
return B.b(t.a.KO(),$async$$1)
case 14:w=4
break
case 8:s=t.a
m=s.e
if(m==null){w=1
break}q=s.c
q.toString
w=15
return B.b(B.bU(A.av,null,new C.eFL(m),q,!0,!0,!1,null,!1,!1,x.r),$async$$1)
case 15:l=f
if(l!=null)s.d8(new C.eFM(m,l))
w=4
break
case 9:s=t.a
m=s.e
if(m==null){w=1
break}s.d8(new C.eFN(m))
s=s.c.K(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(m.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 10:s=t.a
m=s.e
if(m==null){w=1
break}s.d8(new C.eFO(m))
s=s.c.K(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(m.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 11:s=t.a
m=s.e
if(m==null){w=1
break}q=s.c
q.toString
k=m.db
if(k==null)k=""
j=m.dx
if(j==null)j="NGMY"
i=m.dy
if(i==null)i=""
h=m.fr
w=16
return B.b(C.hJ7(q,new C.Fp(k,j,i,h==null?"":h)),$async$$1)
case 16:l=f
if(l==null||s.c==null){w=1
break}s.d8(new C.eFP(m,l))
s=s.c.K(x.q).f
q=l.a
if(q.length===0)q="No ending celebration."
else{q=C.aix(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:96}
C.eFK.prototype={
$1(d){return this.a.d8(d)},
$S:155}
C.eFL.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.ezq],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dk,p,p,p)
q=u.e===s?D.c_1:p
o.push(B.dJ(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eFJ(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bn(!0,B.x(o,A.l,p,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eFJ.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eFM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFN.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eFO.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eFP.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eFT.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.bFR(o),m=n!=null,l=m&&J.eC($.bHO().a,n),k=this.a,j=!k.kf(),i=this.c,h=x.gx,g=B.a([B.Pp(B.d("MORE",p,p,p,p,p,p,B.m(p,p,i?A.bV:A.bP,p,p,p,p,p,p,p,p,11,p,p,A.u,p,p,!0,p,1.4,p,p,p,p,p,p),p,p,p),!1,34,p,p,x.N)],h)
if(j){w=k.Jh("share",A.tl,A.bp,"Share text outline","Send the words of every slide",i)
v=k.e
v=v==null?p:v.e
v=k.Jh("timer",A.D8,A.cF,"Timer",""+(v==null?5:v)+" seconds a slide",i)
u=k.e
u=u==null?p:u.ay
t=k.Jh("motion",D.bRT,A.b8,"Video motion",u===!0?"On":"Off",i)
u=k.e
u=u==null?p:u.ch
s=k.Jh("loop",A.PJ,A.aV,"Non-stop loop",u===!0?"On":"Off",i)
r=k.e
u=C.aix(r==null?p:r.db)
u=u==null?p:u.b
A.d.u(g,B.a([w,v,t,s,k.Jh("finale",S.aqc,A.at,"Ending celebration",u==null?"None":u,i)],h))}if(j){q=C.bFR(o)
o=q!=null&&C.hGq(q)!=null}else o=!1
if(o)g.push(k.Jh("couple",A.a3B,D.wq,"Couple picture (AI)","Put your own faces in the picture",i))
if(m){o=l?D.bRc:Al.HH
m=l?"Unpin this paper":"Pin this paper"
A.d.u(g,B.a([D.eEH,k.Jh("pin",o,A.dN,m,l?"Stop showing it first":"Show it first when you pick a paper",i)],h))}return g},
$S:132}
C.eK8.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bGu(w,v)}},
$S:0}
C.eK9.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eH8.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c9Y:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.ci
if(s)v=A.c
else v=this.b?A.aR:A.by
return new B.D(A.f2,B.az(u,B.cU(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b0,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lP,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eH7(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:138}
C.eH7.prototype={
$0(){var w=this.a
return w.m(new C.eH6(w,this.b))},
$S:0}
C.eH6.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eH9.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a6T:E.aCB
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbS1():t.gbNR()
return B.he(B.az(u,B.p(u,D.ass,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a7(A.a5,A.a9,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1737}
C.eHa.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iv8(v,w.a.c)},
$S:0}
C.eIx.prototype={
$0(){return this.b.vU(this.a.a)},
$S:0}
C.eIy.prototype={
$0(){return this.a.vU(D.n9)},
$S:0}
C.eIz.prototype={
$0(){return this.a.vU(D.JI)},
$S:0}
C.eIK.prototype={
$0(){return this.a.vU(D.JJ)},
$S:0}
C.eIV.prototype={
$0(){return this.a.vU(D.JH)},
$S:0}
C.eJ5.prototype={
$0(){return this.a.qK("lab_report")},
$S:0}
C.eJc.prototype={
$0(){return this.a.qK("rubric")},
$S:0}
C.eJd.prototype={
$0(){return this.a.qK("minutes")},
$S:0}
C.eJe.prototype={
$0(){return this.a.qK("agenda")},
$S:0}
C.eJf.prototype={
$0(){return this.a.qK("timeline")},
$S:0}
C.eJg.prototype={
$0(){return this.a.qK(this.b.a)},
$S:0}
C.eIA.prototype={
$0(){this.a.WP()
return null},
$S:0}
C.eIB.prototype={
$0(){this.a.WJ()
return null},
$S:0}
C.eIC.prototype={
$0(){return this.a.qK("table")},
$S:0}
C.eID.prototype={
$0(){return this.a.qK("sticky")},
$S:0}
C.eIE.prototype={
$0(){return this.a.qK("divider")},
$S:0}
C.eIF.prototype={
$0(){return this.a.qK("header_bar")},
$S:0}
C.eIG.prototype={
$0(){return this.a.pz(D.bb)},
$S:0}
C.eIH.prototype={
$0(){return this.a.pz(D.eZ)},
$S:0}
C.eII.prototype={
$0(){return this.a.pz(D.kk)},
$S:0}
C.eIJ.prototype={
$0(){return this.a.pz(D.Ev)},
$S:0}
C.eIL.prototype={
$0(){return this.a.pz(D.kl)},
$S:0}
C.eIM.prototype={
$0(){return this.a.pz(D.lx)},
$S:0}
C.eIN.prototype={
$0(){return this.a.pz(D.fw)},
$S:0}
C.eIO.prototype={
$0(){this.a.HZ()
return null},
$S:0}
C.eIP.prototype={
$0(){this.a.Oc()
return null},
$S:0}
C.eIQ.prototype={
$0(){return this.a.qK("quote")},
$S:0}
C.eIR.prototype={
$0(){return this.a.a9L()},
$S:0}
C.eIS.prototype={
$0(){this.a.a19()
return null},
$S:0}
C.eIT.prototype={
$0(){var w=this.a
return w.m(new C.eIn(w))},
$S:0}
C.eIn.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eIU.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oz(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eIv(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIv.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eIW.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kg()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aba.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.K(t,A.r,v?2.5:1),s,s,new B.a7(A.a5,A.a9,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.aba.q(0,q))u.push(B.ao(s,B.p(s,D.Qp,A.f,s,s,D.FO,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.f2,B.az(s,B.he(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eIu(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+93}
C.eIu.prototype={
$0(){this.a.aa0(this.b)
return null},
$S:0}
C.eIX.prototype={
$0(){this.a.aa_(this.b)
return null},
$S:0}
C.eIY.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.i0g(d),p=this.a,o=B.l(8),n=p.gdw()
n=n==null?r:n.x
w=d.a
n=n===w?A.bp:A.aT
v=p.gdw()
n=B.K(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.t4(4294967295,r,0,0,r,"preview_"+w,D.r6,"","","",D.dr)
C.hFD(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.hH0(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.at3,A.f,r,r,D.FO,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iS,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aE:A.an,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eIt(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+94}
C.eIt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdw()
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
break}s.d8(new C.eIj(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIj.prototype={
$0(){return C.hFD(this.a,this.b.a)},
$S:0}
C.eIw.prototype={
boK(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.ab8.q(0,d)
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
$2(d,e){return this.boK(d,e)},
$S:z+95}
C.eJh.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eJj(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ca(B.A(v,A.l,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aM)},
$S:z+96}
C.eJj.prototype={
$1(d){var w=this
return w.a.bbI(d,w.b===d,w.c,w.d,new C.eJi(w.e,d),!D.ab8.q(0,d))},
$S:z+16}
C.eJi.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eIZ.prototype={
$1(d){this.b.$2(d,new C.eIs(this.a,d,this.c))
return null},
$S:z+15}
C.eIs.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bHh(u,new C.eIi(v,this.c,w),w)},
$S:0}
C.eIi.prototype={
$0(){return this.a.d8(new C.eIg(this.b,this.c))},
$S:0}
C.eIg.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eJ_.prototype={
$1(d){this.b.$2(d,new C.eIr(this.a,d))
return null},
$S:z+15}
C.eIr.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h6f(u,new C.eIh(v,w),w)},
$S:0}
C.eIh.prototype={
$0(){var w=this.a
return w.d8(new C.eIf(w,this.b))},
$S:0}
C.eIf.prototype={
$0(){return this.a.gdw().r=this.b},
$S:0}
C.eJ0.prototype={
$0(){var w=this.a
return w.m(new C.eIq(w))},
$S:0}
C.eIq.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eJ1.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bGu(w,v)}},
$S:0}
C.eJ2.prototype={
$0(){this.a.IL()
return null},
$S:0}
C.eJ3.prototype={
$0(){return this.a.a9L()},
$S:0}
C.eJ4.prototype={
$0(){var w=this.a,v=w.kg()
if(v!=null&&v.b===D.d1)w.d8(new C.eIp(v))},
$S:0}
C.eIp.prototype={
$0(){var w=this.a
w.f=A.h.D(w.f*1.25,0.08,1.8)
w.e=A.h.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eJ6.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eJ7.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FV(v,!0)
return null},
$S:0}
C.eJ8.prototype={
$0(){this.a.d8(new C.eIo(this.b))},
$S:0}
C.eIo.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eJ9.prototype={
$0(){this.a.d8(new C.eIm(this.b))},
$S:0}
C.eIm.prototype={
$0(){var w=this.a
return w.y=w.y===A.cL?A.bo:A.cL},
$S:0}
C.eJa.prototype={
$0(){this.a.d8(new C.eIl(this.b))},
$S:0}
C.eIl.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eJb.prototype={
$0(){this.a.d8(new C.eIk(this.b))},
$S:0}
C.eIk.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eES.prototype={
$1(d){return this.boH(d)},
boH(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d8(new C.eER(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:184}
C.eER.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eJE.prototype={
$0(){var w=this.a
return w.d8(new C.eJD(w,this.b))},
$S:0}
C.eJD.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eJF.prototype={
$0(){var w=this.a
return w.d8(new C.eJC(w,this.b))},
$S:0}
C.eJC.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eG3.prototype={
$0(){return this.a.d8(new C.eG2(this.b))},
$S:0}
C.eG2.prototype={
$0(){var w=this.a
return w.w=A.h.D(w.w-2,10,96)},
$S:0}
C.eG4.prototype={
$0(){return this.a.d8(new C.eG1(this.b))},
$S:0}
C.eG1.prototype={
$0(){var w=this.a
return w.w=A.h.D(w.w+2,10,96)},
$S:0}
C.eGB.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.auO,new C.eGA(),w),w.k("ak.E"))
return w},
$S:z+98}
C.eGA.prototype={
$1(d){var w=null
return B.Pp(B.d(d.b,w,w,w,w,w,w,A.m_,w,w,w),!0,48,w,d,x.fO)},
$S:z+99}
C.eJR.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:38}
C.eJQ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kf()?q:new C.eJO(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bp
else v=r.d?A.aT:A.cA
v=B.K(v,A.r,o?2:1)
u=r.d?A.ct:A.c
t=B.bS(0,C.hH0(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.p(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.o2,q,q,q),A.f,q,q,new B.o(A.b5,q,q,s,q,q,A.n),q,q,q,q,A.aok,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eJP(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:83}
C.eJP.prototype={
$0(){var w=this.a
return w.m(new C.eJK(w,this.b))},
$S:0}
C.eJK.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KX()},
$S:0}
C.eJO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eJL(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eJM(q,s))
q.aUV()}else if(r==="del"){q=t.a
q.m(new C.eJN(q,s))
q.aU0()}else if(r==="up")t.a.b6G(s,s-1)
else if(r==="down")t.a.b6G(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJL.prototype={
$1(d){var w=null,v=B.a([B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0O,w,w,w,w,new C.eJG(d),!1,w,w,w,w,w,w,w,D.fPy,w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0H,w,w,w,w,new C.eJH(d),!1,w,w,w,w,w,w,w,A.xM,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_V,w,w,w,w,new C.eJI(d),!1,w,w,w,w,w,w,w,D.fY3,w,w,w))
if(u<this.b.r.length-1)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c25,w,w,w,w,new C.eJJ(d),!1,w,w,w,w,w,w,w,D.fPm,w,w,w))
return B.bn(!0,B.x(v,A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eJG.prototype={
$0(){B.a6(this.a,!1).N("dup")
return null},
$S:0}
C.eJH.prototype={
$0(){B.a6(this.a,!1).N("del")
return null},
$S:0}
C.eJI.prototype={
$0(){B.a6(this.a,!1).N("up")
return null},
$S:0}
C.eJJ.prototype={
$0(){B.a6(this.a,!1).N("down")
return null},
$S:0}
C.eJM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJS.prototype={
$0(){return this.a.a9L()},
$S:0}
C.eFj.prototype={
$0(){var w=this.a
w.bae()
w.aCq(null)},
$S:0}
C.eFi.prototype={
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
s=B.a([B.bv(s,new B.bN(new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bk,A.la,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.u(s,new B.N(r,new C.eFh(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aE:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bN(new B.o(v,p,p,o,n,w,A.n),A.bk,new B.an(A.a0,p,A.ad,A.f,s,new B.bg("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:371}
C.eFh.prototype={
$1(d){var w=this
return w.a.bJN(d,w.b,w.c,w.d)},
$S:z+18}
C.eF6.prototype={
$0(){var w=this
if(w.b){w.a.Ok(w.c)
return}if(w.d){w.a.a9J(w.c)
return}if(w.e){w.a.aiu(w.c)
return}if(w.f)w.a.baN(w.c)},
$S:0}
C.eF7.prototype={
$0(){this.a.Ok(this.b)
return null},
$S:0}
C.eF8.prototype={
$0(){return this.a.a3w(this.b.a)},
$S:0}
C.eF9.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eF5(u,d,w.c,w.d))
v.Ip()
v.oL()
v.pS()},
$S:19}
C.eF5.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.h.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.h.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eFa.prototype={
$1(d){return this.a.akV(this.b.a,d)},
$S:2}
C.eFc.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hjd(w))u.a.Ok(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.baN(v)},
$S:0}
C.eFb.prototype={
$0(){return this.a.a3w(this.b.a)},
$S:0}
C.eFd.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eF4(w.b,d,w.c,w.d))
v.Ip()
v.oL()
v.pS()},
$S:19}
C.eF4.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.h.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.h.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.d1)v.w=A.h.D(v.w+u*0.15,10,120)},
$S:0}
C.eFe.prototype={
$1(d){var w=this.a
w.m(new C.eF3(this.b,d))
w.Ip()
w.oL()
w.pS()},
$S:213}
C.eF3.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.h.D(w.e*v,0.04,1.8)
w.f=A.h.D(w.f*v,0.04,1.8)
if(w.b===D.d1)w.w=A.h.D(w.w*v,10,120)},
$S:0}
C.eFf.prototype={
$0(){var w=this.a
w.m(new C.eF2(this.b))
w.Ip()
w.oL()
w.pS()},
$S:0}
C.eF2.prototype={
$0(){this.a.r=C.fRP()},
$S:0}
C.eFg.prototype={
$0(){return this.a.a3w(this.b.a)},
$S:0}
C.eHc.prototype={
$0(){var w=this.a
return w.m(new C.eHb(w))},
$S:0}
C.eHb.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eHd.prototype={
$1(d){return this.a.cJt(this.b.a,d)},
$S:2}
C.eGh.prototype={
$1(d){var w
this.a.d8(d)
w=this.b
if(w!=null)w.$0()},
$S:155}
C.eGi.prototype={
$1(d){return this.a.$1(new C.eGg(this.b,d))},
$S:6}
C.eGg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eGj.prototype={
$1(d){return this.a.$1(new C.eGf(this.b,d))},
$S:6}
C.eGf.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eGk.prototype={
$1(d){return this.a.$1(new C.eGe(this.b,d))},
$S:6}
C.eGe.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eGl.prototype={
$1(d){return this.a.$1(new C.eGd(this.b,d))},
$S:6}
C.eGd.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eGm.prototype={
$1(d){return this.a.$1(new C.eGc(this.b,d))},
$S:6}
C.eGc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eGn.prototype={
$1(d){return this.b.$1(new C.eGb(this.a,this.c))},
$S:9}
C.eGb.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eGo.prototype={
$1(d){return this.b.$1(new C.eGa(this.a,this.c))},
$S:9}
C.eGa.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eGp.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bp:A.cC
return B.az(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.K(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eG9(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:481}
C.eG9.prototype={
$0(){return this.a.$1(new C.eG6(this.b,this.c))},
$S:0}
C.eG6.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eGq.prototype={
$1(d){return this.a.$1(new C.eG8(this.b,d))},
$S:1738}
C.eG8.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eGr.prototype={
$1(d){var w=null
return B.az(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eG7(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:481}
C.eG7.prototype={
$0(){return this.a.$1(new C.eG5(this.b,this.c))},
$S:0}
C.eG5.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eGs.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).q4()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).ek()}v.a.auS()},
$S:0}
C.eGv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dH.az(0,k)
k=B.l(16)
v=B.l(16)
u=B.P(d).ax.a===A.dm?A.aY:A.ay
t=B.P(d).ax.a===A.dm?A.b3:A.aC
if(B.P(d).ax.a===A.dm)s=D.d6w
else{s=m.c
r=B.ap(s,A.b_,0.35+w*0.15)
r.toString
r=B.a([s,r],x.O)
s=r}r=B.K(A.c.j(0.3+w*0.2),A.r,1.2)
q=B.a([B.X(m.d,A.c,l,l,l,26)],x.p)
p=B.l(6)
o=m.c
n=B.K(o,A.r,1.2)
q.push(B.ao(2,B.p(l,B.X(A.vd,o,l,l,l,10),A.f,l,l,new B.o(A.c,l,n,p,l,l,A.n),l,l,l,l,A.nJ,l,l,l),l,l,l,2,l,l))
return B.aG(!1,A.a3,!0,l,B.aM(!1,k,!0,B.eE(new B.a5(48,48,new B.an(A.z,l,A.ad,A.t,q,l),l),l,new B.o(l,l,r,v,l,new B.a7(u,t,A.x,s,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.ai)},
$S:143}
C.eE0.prototype={
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
return B.aG(!1,A.a3,!0,p,B.aM(!1,o,!0,B.eE(B.x(B.a([B.e4(A.z,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.j2,A.K,p,p)],x.p),A.l,p,A.b9,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ay,A.aC,A.x,u,p,p),A.n),p,A.CM,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.ai)},
$S:143}
C.eI9.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.atX,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.eI7(d),w,w),B.bJ(A.rk,w,new C.eI8(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eI7.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eI8.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dbL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dH.az(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.ed.az(0,A.h.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.e6.az(0,h)
v=B.l(22)
t=B.ap(A.aL,A.d.gH(C.kn(i.a.c.w)?D.vq:K.nR),w*0.35)
t.toString
t=B.K(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gH(C.kn(i.a.c.w)?D.vq:K.nR).j(0.18+w*0.12),A.J,32+w*10),D.afY],s)
q=B.l(22)
p=x.O
o=B.ao(j,B.p(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bT(A.aY,0.9,A.x,j,0,B.a([A.d.gH(C.kn(i.a.c.w)?D.vq:K.nR).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.kn(i.a.c.w)?D.vq:K.nR).j(0.28+w*0.14)
p=B.p(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bT(A.z,0.5,A.x,j,0,B.a([m,A.d.gal(C.kn(i.a.c.w)?D.vq:K.nR).j(0.08),A.L],p),j,j),A.a6),j,n,j,j,j,j,j,n)
n=B.l(14)
m=i.a.c.w
l=C.kn(m)?D.vq:K.nR
s=B.a([new B.ab(0,A.G,A.d.gH(C.kn(m)?D.vq:K.nR).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.e4(A.z,B.p(j,B.X(C.kn(i.a.c.w)?A.ti:A.qV,A.c,j,j,j,22),A.f,j,j,new B.o(j,j,j,n,s,new B.a7(A.ay,A.aC,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.z,j,A.ad,A.t,l,j),A.T,B.d("PRESENTATION",j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kn(i.a.c.w)?D.vq:K.nR).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.H,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fE,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fH2,A.K,j,j),A.ax,B.d(i.gcEf(),j,j,j,j,j,j,D.fM5,A.K,j,j),A.aB],m)
p=i.a.c
if(p.z){p=p.gTn()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.u(s,B.a([B.d(p,j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kn(i.a.c.w)?D.vq:K.nR).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.af],m))}s.push(new C.KN(A.zq,"Download PDF","pdf",A.d9,i.JK(0),!1,j))
p=i.a.c
if(!p.z||p.gTn()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KN(A.jN,"Transfer to "+C.hGv(p==null?"":p),"transfer_hati",A.aV,i.JK(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JK(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KN(D.bT7,"Rename presentation","rename",A.cj,n,!1,j),A.am,new C.KN(A.aqf,"Duplicate","duplicate",A.b8,i.JK(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.u(s,B.a([A.P,new C.KN(A.ej,p,"delete",A.aA,i.JK(n),!0,j)],m))}s.push(A.ax)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JK(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JK(n)
s.push(B.dP(B.d3(B.bP(!1,E.aYj,j,j,!0,j,j,j,new C.dbK(d),j,B.fs(j,j,j,j,j,j,j,j,j,j,j,A.bP,j,j,j,A.az,j,D.bHS,j,j,j,j,j,A.jO,j,j)),n),new B.r(0,(1-p)*8)))
return B.e4(A.z,B.d3(B.aG(!1,A.a3,!0,j,B.p(j,B.bv(q,new B.an(A.a0,j,A.ad,A.t,B.a([o,new B.D(D.bH_,B.x(s,A.l,j,A.e,A.N,0,A.p),j)],m),j),A.aq),A.f,j,A.Yd,new B.o(A.av,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai),h),0.88+u*0.12,j,j)},
$S:45}
C.dbK.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dc8.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dc9.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dbI.prototype={
$1(d){var w=this.a
return w.m(new C.dbE(w))},
$S:23}
C.dbE.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dbJ.prototype={
$1(d){var w=this.a
return w.m(new C.dbD(w))},
$S:60}
C.dbD.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dbH.prototype={
$0(){var w=this.a
return w.m(new C.dbF(w))},
$S:0}
C.dbF.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dbG.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.eKP.prototype={
$0(){return $.bnH=!$.bnH},
$S:0}
C.eKF.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaY9())u.aA1()},
$S:0}
C.eKO.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eKG.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eKH.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.aA1()},
$S:0}
C.eKB.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eKC.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eKD.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eKE.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eKM.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.z,null,A.b1,A.t,w,null)},
$S:1739}
C.eKN.prototype={
$2(d,e){var w
if(e.gc8(e)===A.iu)return new B.d2(e,!1,d,null)
w=this.a
return w.cC9(w.e,d,e)},
$S:444}
C.eKI.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fE((1-v.gp(0))*1.5708)
return B.fA(A.z,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKJ.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k5((1-v.gp(0))*1.5708)
return B.fA(A.z,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKK.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fE(v.gp(0)*0.8)
w.k5(v.gp(0)*0.35)
return B.fA(A.z,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKL.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fE(-v.gp(0)*1.2)
return B.fA(A.a9,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKQ.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.ga_8().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.ga_8().x
t===$&&B.c()
return new C.b4a(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Fy(v.c,t,!0,new B.bg("cine"+u,x.W))},
$S:774}
C.eKS.prototype={
$1(d){var w=this.a
if(d.b.a>B.aE(this.b,A.c_,x.w).w.a.a*0.55)w.aA1()
else w.cqq()},
$S:60}
C.eKR.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fX1.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.u(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:443}
C.fXa.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.fX7(d),w,w),B.bP(!1,D.h4I,w,w,!0,w,w,w,new C.fX8(d,this.b,v),w,w),B.bJ(A.aYC,w,new C.fX9(d,v,this.c),w)],x.p),w,w,Q.uz,new B.a5(320,w,t,w),w,w,w,w,D.h6e,w)},
$S:18}
C.fX7.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fX8.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).N(null)
C.hjT(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fX9.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aSR(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aSg(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fX0.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cmi.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.u(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:664}
C.fX6.prototype={
$1(d){return d.aj()},
$S:z+20}
C.frD.prototype={
$1(d){return C.hjR(C.Xr(B.a1(d,x.N,x.z)),this.a)},
$S:z+100}
C.h5t.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.h5u.prototype={
$4(d,e,f,g){var w=A.ck.az(0,e.gp(0))
return B.d3(B.e4(A.z,D.hIz,0.94+w*0.06,null,null),w)},
$S:256}
C.h5v.prototype={
$1(d){var w=this
return new C.Xt(w.a,w.b,w.c,w.d,null)},
$S:z+101}
C.eKl.prototype={
$2(d,e){return d+e.r.length},
$S:z+14}
C.eKh.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eKk.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xu(u,this.b,w.gaRc(),v,null)},
$S:z+103}
C.eKi.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eKj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eKm.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eKn.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eKq.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eKr.prototype={
$0(){var w=this.a
return w.m(new C.eKp(w))},
$S:0}
C.eKp.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eKs.prototype={
$0(){var w=this.a
return w.m(new C.eKo(w))},
$S:0}
C.eKo.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eKt.prototype={
$1(d){return this.a.bOr(d,this.b)},
$S:z+104}
C.eKg.prototype={
$0(){var w=this.a
return w.m(new C.eKf(w,this.b))},
$S:0}
C.eKf.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eKu.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eKv.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eKw.prototype={
$2(d,e){return d+e.r.length},
$S:z+14}
C.eKx.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eKy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.T(D.fsF)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eDU())},
$S:0}
C.eDU.prototype={
$0(){},
$S:0}
C.eDW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.eDR.prototype={
$1(d){return this.a.m(new C.eDQ())},
$S:2}
C.eDQ.prototype={
$0(){},
$S:0}
C.eDS.prototype={
$1(d){return this.a.b2v()},
$S:2}
C.eDT.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eKA.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eKz(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eKz.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fR_.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.e8(new B.k7(this.c,new C.fQZ(),w,w,x.ex),this.b),v.b,w,-(u+200),w,0,u)},
$S:240}
C.fQZ.prototype={
$3(d,e,f){return new C.Fy(e,!1,!1,new B.bg(e.a,x.W))},
$S:z+106}
C.fR0.prototype={
$1(d){var w=null
return B.oU(!1,B.as(new C.byx(this.a,this.b,w),w,w,w),w,x.z)},
$S:288}
C.fR4.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmy(),$async$$0)
case 3:w=4
return B.b(B.bO(A.mg,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmy(),$async$$0)
case 5:s=$.aU.ap$.x.h(0,t.a)
r=s==null?null:s.gbf()
if(!(r instanceof B.qr))throw B.W("Could not draw the slide.")
u=r.lX(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1742}
C.fR5.prototype={
bpe(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hj(A.hf),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hS([J.eR(A.dI.gaT(r))],"image/png"))
t.toString
s=As.h9Z(t)
w=4
return B.b(new B.qA(s,"load",!1,x.ev).gH(0).dg(0,A.k3),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bpe(d)},
$S:1743}
C.fR1.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:159}
C.fR2.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h1(0)},
$S:159}
C.fR3.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.flE.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fDn,A.K,w,w)},
$S:1744}
C.flF.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.bv(v,B.kw(A.bs,w,A.dN,8,w,e===0?w:e,w),A.aq)},
$S:511}
C.esa.prototype={
$1(d){this.a.a0t()
return null},
$S:12}
C.es8.prototype={
$0(){return this.a.e=D.bCM},
$S:0}
C.es9.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bC
return this.b.e=w},
$S:0}
C.cqy.prototype={
$1(d){return A.o.dB(1,d.a)},
$S:z+107}
C.cqz.prototype={
$2(d,e){return(d|e)>>>0},
$S:66};(function aliases(){var w=C.aOF.prototype
w.bAr=w.t
w=C.aO9.prototype
w.bzV=w.t
w=C.aNT.prototype
w.bzD=w.t
w=C.aO8.prototype
w.bzU=w.t
w=C.aOD.prototype
w.bAp=w.t
w=C.aPX.prototype
w.bBU=w.t
w=C.aMO.prototype
w.byv=w.t
w=C.aOQ.prototype
w.bAC=w.t
w=C.aOR.prototype
w.bAD=w.t
w=C.b5S.prototype
w.bv_=w.aFA})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"it4","apy",108)
v(C.aLK.prototype,"gc9w","a_g",0)
var r
u(r=C.aA7.prototype,"gcDB","cDC",71)
v(r,"gcal","af_",0)
v(r=C.aA3.prototype,"gb0O","EI",3)
v(r,"gcai","caj",3)
v(r,"gaz6","yw",0)
v(r,"gaB9","K2",0)
v(r=C.aAU.prototype,"gc6S","PP",0)
v(r,"gcvE","cvF",3)
t(C,"itv","hZ0",109)
v(C.aGk.prototype,"gcdB","cdC",3)
s(C,"itD",0,null,["$4$paper$photo$request$template"],["fYr"],110,0)
s(C,"itC",0,null,["$5$doc$history$instruction$photo$template"],["bFJ"],111,0)
v(r=C.aGB.prototype,"gcek","JH",0)
v(r,"gbNU","XZ",0)
v(r,"gcen","afX",0)
v(r,"gcem","a0e",0)
v(r,"gb2a","EY",0)
v(C.aGE.prototype,"gces","a0g",0)
v(r=C.aI4.prototype,"gb2n","QR",0)
v(r,"gcvj","b6L",3)
v(r,"gcEZ","aDI",29)
v(r,"gbRQ","abI",0)
v(r,"gceT","Bc",0)
v(r=C.aK0.prototype,"gcp9","a1D",0)
v(r,"gcph","a1G",0)
v(r,"gbGG","aa6",0)
v(r,"gceX","ag8",0)
v(C.aK_.prototype,"gceY","ag9",0)
v(C.aDZ.prototype,"gbFF","a9U",0)
v(C.aCk.prototype,"gceZ","a0r",0)
w(C,"itN","irM",12)
w(C,"itL","iou",12)
w(C,"itM","iqF",12)
v(r=C.aGV.prototype,"gcIk","cIl",3)
v(r,"gctA","ctB",3)
u(r,"gF3","agT",7)
v(r,"gbLv","au0",3)
u(r,"gF4","b3K",7)
v(r,"gchf","agA",0)
v(r,"gcg6","agz",0)
v(r,"gc4N","ZC",0)
v(r,"gcjr","agU",0)
v(r,"gbNR","abf",0)
v(r,"gckl","a13",0)
v(r,"gckm","aha",0)
v(r,"gckT","ahh",0)
v(r,"gcjE","agX",0)
v(r,"gbS1","abM",0)
v(r,"gaUU","aUV",3)
v(r,"gaU_","aU0",3)
v(r,"gaPs","aPt",3)
v(r,"gaTZ","auS",3)
u(r,"gbFW","bFX",84)
v(r,"gaDd","b9Y",3)
v(r,"gcg8","cg9",3)
v(r,"gc2o","c2p",3)
v(r,"gbQk","bQl",3)
v(r=C.aGY.prototype,"gcH7","cH8",3)
v(r,"gcGK","cGL",3)
t(C,"itO","is2",2)
v(r=C.aGW.prototype,"gcf4","JM",0)
v(r,"gcxm","Sl",0)
v(r,"gcf1","JL",0)
v(r,"gcJE","a4a",0)
v(r,"gcl4","aho",0)
v(C.aGU.prototype,"gcf5","b2v",3)
v(r=C.aGX.prototype,"gbSS","abW",0)
u(r,"gcf2","cf3",105)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.oo,C.T9,C.bLw,C.bJK,C.cHN,C.cHL,C.bTN,C.bby,C.cHM,C.bIk,C.cqs,C.cqq,C.cqr,C.cqp,C.av5,C.cqo,C.bUO,C.oT,C.aHx,C.hb,C.yV,C.QT,C.oc,C.a9s,C.Ac,C.lG,C.p2,C.my,C.Ad,C.of,C.a9A,C.atq,C.b4b,C.erA,C.lD,C.Fz,C.eA,C.jk,C.Fp,C.yh,C.en,C.ll,C.hY,C.k3,C.a9B,C.agO,C.b4c,C.b5S,C.a4u])
u(B.jE,[C.cPS,C.c4S,C.fM9,C.cRo,C.cQL,C.fRI,C.cgK,C.fv9,C.fvb,C.e9P,C.e9N,C.esd,C.esc,C.fTe,C.fsL,C.fsM,C.ckx,C.cky,C.ckz,C.evS,C.f4q,C.f3O,C.f3N,C.f4R,C.f4o,C.f4h,C.f4A,C.f5g,C.fBa,C.fbA,C.fbz,C.fc2,C.erD,C.fWY,C.e51,C.h2X,C.fTB,C.cma,C.cm8,C.cmd,C.fU9,C.fUa,C.fUb,C.fUc,C.clV,C.clW,C.dRL,C.clS,C.fU8,C.fj0,C.e2K,C.clL,C.erj,C.fRx,C.eHz,C.eHY,C.eHV,C.eHU,C.eI4,C.eI3,C.eJz,C.eJy,C.eHO,C.eHN,C.eEj,C.eFv,C.eIw,C.eJR,C.eJQ,C.eFi,C.eGv,C.eE0,C.dbL,C.eKM,C.eKN,C.eKI,C.eKJ,C.eKK,C.eKL,C.eKQ,C.cmi,C.eKl,C.eKw,C.cqz])
u(B.ht,[C.cPT,C.cPU,C.bUP,C.fIX,C.c4R,C.c4U,C.h_j,C.fka,C.fk1,C.fkh,C.frE,C.frF,C.fMa,C.fM8,C.fZM,C.fIB,C.h_F,C.cRe,C.cRj,C.cRl,C.cRh,C.cRm,C.cRf,C.cRn,C.cRa,C.cR7,C.cR6,C.cRd,C.cQG,C.cQE,C.fRS,C.d92,C.fRJ,C.fRX,C.fv5,C.cgJ,C.cgM,C.fQI,C.fQJ,C.fLx,C.fLy,C.fRQ,C.fvj,C.fvd,C.fve,C.fva,C.fvc,C.fRK,C.fRN,C.fRO,C.fRM,C.h3e,C.e9O,C.fLB,C.fLC,C.fLF,C.fLG,C.fLJ,C.fLK,C.fRU,C.fRV,C.fxu,C.h4M,C.fte,C.h4X,C.eva,C.evb,C.evc,C.euT,C.ev4,C.ev5,C.ev7,C.ckw,C.cku,C.ckv,C.fRo,C.fRq,C.fRp,C.fsN,C.fsO,C.h5_,C.evX,C.evY,C.evP,C.evQ,C.evT,C.evU,C.h5f,C.f5h,C.f4H,C.f4r,C.f4E,C.f3J,C.f3K,C.f3L,C.f3P,C.f3Q,C.f56,C.f5d,C.f5f,C.f4Q,C.f4S,C.f4W,C.f4X,C.f4Y,C.f51,C.f4T,C.f4U,C.f40,C.f41,C.f42,C.f43,C.f44,C.f45,C.f46,C.f47,C.f48,C.f3m,C.f3n,C.f3o,C.f3p,C.f3r,C.f3s,C.f3V,C.f3W,C.f3X,C.f3Y,C.f3Z,C.f3w,C.f3x,C.f3y,C.f3z,C.f4g,C.f4z,C.fON,C.fOM,C.cm1,C.fB9,C.fWU,C.fWN,C.fWQ,C.fUE,C.fUF,C.fUG,C.fOU,C.fOT,C.fOS,C.fOQ,C.fsH,C.fsI,C.fsJ,C.h5r,C.fbC,C.fbD,C.fbw,C.fbq,C.fbW,C.fbX,C.fbZ,C.fc_,C.fbV,C.h5q,C.fbh,C.fAp,C.erC,C.fWW,C.fWX,C.fWZ,C.fWS,C.fWT,C.h4E,C.dua,C.dug,C.erB,C.fp_,C.fp1,C.fp0,C.foZ,C.fPY,C.fQ_,C.fr7,C.fWo,C.fWp,C.fWq,C.fWB,C.fWG,C.fWH,C.fWI,C.fWJ,C.fWK,C.fWL,C.fWM,C.fWr,C.fWs,C.fWt,C.fWu,C.fWv,C.fWw,C.fWx,C.fWy,C.fWz,C.fWA,C.fWC,C.fWD,C.fWE,C.fWF,C.fNO,C.fzI,C.fzH,C.fX4,C.e52,C.e50,C.faq,C.cgk,C.cgm,C.h2Z,C.djw,C.djy,C.h2Y,C.h2W,C.h5p,C.fTx,C.dj6,C.fLN,C.fLO,C.cm_,C.cm0,C.clZ,C.clP,C.clQ,C.clM,C.clN,C.clO,C.cmg,C.cmb,C.cm6,C.cm7,C.cm9,C.cmc,C.cme,C.fUd,C.clU,C.clX,C.clY,C.cm3,C.cm4,C.fXb,C.fWi,C.clT,C.clR,C.fU7,C.fCt,C.clK,C.f7V,C.fFA,C.eKc,C.eGC,C.eGD,C.eIc,C.eI0,C.eI1,C.eG_,C.eJY,C.eJZ,C.eK_,C.eFm,C.eHG,C.eHI,C.eHi,C.eHf,C.eGy,C.eGz,C.eHp,C.eFo,C.eHB,C.eHC,C.eHA,C.eHE,C.eHD,C.eHW,C.eHX,C.eHZ,C.eHS,C.eFH,C.eFE,C.eI5,C.eFw,C.eJX,C.eE2,C.eFz,C.eFy,C.eEL,C.eEQ,C.eEO,C.eEM,C.eK4,C.eK5,C.eK6,C.eK3,C.eJB,C.eJA,C.eJu,C.eJw,C.eJm,C.eJV,C.eJT,C.eEa,C.eE6,C.eGw,C.eEU,C.eEl,C.eEk,C.eEH,C.eEI,C.eFY,C.eF1,C.eEW,C.eF_,C.eF0,C.eHP,C.eJn,C.eJo,C.eJp,C.eJq,C.eFq,C.eFr,C.eFs,C.eGZ,C.eFU,C.eFK,C.eFL,C.eFT,C.eH8,C.eH9,C.eIW,C.eIY,C.eJh,C.eJj,C.eIZ,C.eJ_,C.eES,C.eGB,C.eGA,C.eJL,C.eFh,C.eF9,C.eFa,C.eFd,C.eFe,C.eHd,C.eGh,C.eGi,C.eGj,C.eGk,C.eGl,C.eGm,C.eGn,C.eGo,C.eGp,C.eGq,C.eGr,C.eI9,C.dbI,C.dbJ,C.eKS,C.fX1,C.fXa,C.fX0,C.fX6,C.frD,C.h5t,C.h5u,C.h5v,C.eKk,C.eKt,C.eDW,C.eDR,C.eDS,C.fR_,C.fQZ,C.fR0,C.fR5,C.fR1,C.fR2,C.flE,C.flF,C.esa,C.cqy])
u(B.iT,[C.cPV,C.fk6,C.fkb,C.fkc,C.fk7,C.fk8,C.fk9,C.fk_,C.fk0,C.fk2,C.fk3,C.fkg,C.fkf,C.fk5,C.fk4,C.fkd,C.fke,C.fkj,C.fkk,C.fki,C.cRg,C.cRk,C.cRi,C.cR8,C.cR9,C.cRb,C.cR4,C.cR5,C.cRc,C.cR3,C.cR2,C.cR1,C.cQv,C.cQu,C.cQx,C.cQF,C.cQy,C.cQw,C.cQA,C.cQB,C.cQC,C.cQz,C.cQD,C.cQH,C.cQI,C.cQJ,C.cQK,C.d91,C.d8Y,C.d8Z,C.d9_,C.d90,C.d93,C.d94,C.fLv,C.fLw,C.fLt,C.fLu,C.enr,C.enp,C.enq,C.ens,C.ent,C.fRL,C.e9M,C.fLz,C.fLA,C.fLD,C.fLE,C.fLH,C.fLI,C.fRT,C.fRW,C.fF8,C.fAJ,C.fW3,C.fW2,C.fW0,C.fW5,C.fW4,C.fW1,C.esb,C.fTD,C.fTC,C.ev9,C.ev8,C.euN,C.euJ,C.euU,C.euV,C.euW,C.euP,C.euQ,C.euR,C.euS,C.euO,C.euL,C.euM,C.ev1,C.ev2,C.ev0,C.ev3,C.ev_,C.euZ,C.euY,C.ev6,C.euX,C.euK,C.evW,C.evK,C.evL,C.evR,C.evM,C.evO,C.evN,C.evV,C.f49,C.f4x,C.f3T,C.f3U,C.f3R,C.f3S,C.f4D,C.f4C,C.f4B,C.f4G,C.f4F,C.f3I,C.f3M,C.f3H,C.f3G,C.f3D,C.f3F,C.f3E,C.f5e,C.f57,C.f55,C.f58,C.f54,C.f59,C.f53,C.f5a,C.f5b,C.f5c,C.f52,C.f4P,C.f4K,C.f4V,C.f4O,C.f4Z,C.f4N,C.f5_,C.f4M,C.f50,C.f4L,C.f4u,C.f4t,C.f4v,C.f4s,C.f4w,C.f4m,C.f4l,C.f4n,C.f4k,C.f4j,C.f4i,C.f3q,C.f3l,C.f3A,C.f3v,C.f3B,C.f3u,C.f3C,C.f3t,C.f4p,C.f4d,C.f4c,C.f4e,C.f4b,C.f4f,C.f4a,C.f4y,C.f4J,C.f4I,C.f4_,C.fWP,C.fWR,C.fWV,C.fOR,C.fRh,C.fRf,C.fRg,C.fbE,C.fbF,C.fbB,C.fbv,C.fbu,C.fbx,C.fby,C.fbk,C.fbl,C.fbn,C.fbo,C.fbp,C.fbm,C.fbr,C.fbS,C.fbT,C.fbR,C.fbU,C.fbQ,C.fbP,C.fbO,C.fbY,C.fbN,C.fbM,C.fbL,C.fc0,C.fbK,C.fc1,C.fbJ,C.fbI,C.fbs,C.fbt,C.fbH,C.fbG,C.fbd,C.fbe,C.fbf,C.fbg,C.fbc,C.fbi,C.fbj,C.du9,C.dub,C.due,C.duf,C.dud,C.duc,C.fPZ,C.fNP,C.cgl,C.cgn,C.djp,C.dju,C.djv,C.djt,C.djs,C.djx,C.djr,C.djq,C.djz,C.h2V,C.dqc,C.dqd,C.dqe,C.fLL,C.fLM,C.cmh,C.eDX,C.eDY,C.eDZ,C.eE_,C.fCr,C.fCs,C.e2M,C.e2L,C.dgj,C.dgi,C.eKe,C.eKd,C.eGE,C.eJk,C.eKa,C.eIa,C.eK0,C.eK1,C.eKb,C.eHj,C.eFk,C.eFl,C.eHH,C.eHh,C.eHe,C.eHg,C.eHk,C.eHl,C.eHm,C.eHn,C.eHo,C.eHq,C.eFp,C.eHt,C.eHu,C.eHv,C.eHw,C.eHx,C.eHy,C.eHs,C.eHF,C.eHT,C.eHR,C.eI_,C.eHr,C.eFF,C.eFG,C.eFI,C.eI2,C.eI6,C.eEh,C.eFD,C.eFB,C.eIe,C.eFx,C.eId,C.eFn,C.eG0,C.eJW,C.eJl,C.eEi,C.eEf,C.eE5,C.eE1,C.eE3,C.eFA,C.eEK,C.eEP,C.eEN,C.eEJ,C.eHQ,C.eK7,C.eJx,C.eJs,C.eJt,C.eJv,C.eGu,C.eGt,C.eJU,C.eE8,C.eE9,C.eEb,C.eEc,C.eEg,C.eE7,C.eIb,C.eK2,C.eGx,C.eET,C.eE4,C.eFZ,C.eEd,C.eEm,C.eEn,C.eEo,C.eEz,C.eEC,C.eED,C.eEE,C.eEF,C.eEG,C.eEp,C.eEq,C.eEr,C.eEs,C.eEt,C.eEu,C.eEv,C.eEw,C.eEx,C.eEy,C.eEA,C.eEB,C.eFX,C.eFW,C.eFV,C.eEe,C.eEX,C.eEV,C.eEY,C.eEZ,C.eFC,C.eHL,C.eHM,C.eHJ,C.eHK,C.eJr,C.eFu,C.eFt,C.eGY,C.eGX,C.eH_,C.eGW,C.eH0,C.eGV,C.eH1,C.eGU,C.eH2,C.eGT,C.eH3,C.eGS,C.eH4,C.eGR,C.eH5,C.eGQ,C.eGJ,C.eGK,C.eGL,C.eGI,C.eGM,C.eGH,C.eGN,C.eGG,C.eGO,C.eGF,C.eGP,C.eFQ,C.eFR,C.eFS,C.eFJ,C.eFM,C.eFN,C.eFO,C.eFP,C.eK8,C.eK9,C.eH7,C.eH6,C.eHa,C.eIx,C.eIy,C.eIz,C.eIK,C.eIV,C.eJ5,C.eJc,C.eJd,C.eJe,C.eJf,C.eJg,C.eIA,C.eIB,C.eIC,C.eID,C.eIE,C.eIF,C.eIG,C.eIH,C.eII,C.eIJ,C.eIL,C.eIM,C.eIN,C.eIO,C.eIP,C.eIQ,C.eIR,C.eIS,C.eIT,C.eIn,C.eIU,C.eIv,C.eIu,C.eIX,C.eIt,C.eIj,C.eJi,C.eIs,C.eIi,C.eIg,C.eIr,C.eIh,C.eIf,C.eJ0,C.eIq,C.eJ1,C.eJ2,C.eJ3,C.eJ4,C.eIp,C.eJ6,C.eJ7,C.eJ8,C.eIo,C.eJ9,C.eIm,C.eJa,C.eIl,C.eJb,C.eIk,C.eER,C.eJE,C.eJD,C.eJF,C.eJC,C.eG3,C.eG2,C.eG4,C.eG1,C.eJP,C.eJK,C.eJO,C.eJG,C.eJH,C.eJI,C.eJJ,C.eJM,C.eJN,C.eJS,C.eFj,C.eF6,C.eF7,C.eF8,C.eF5,C.eFc,C.eFb,C.eF4,C.eF3,C.eFf,C.eF2,C.eFg,C.eHc,C.eHb,C.eGg,C.eGf,C.eGe,C.eGd,C.eGc,C.eGb,C.eGa,C.eG9,C.eG6,C.eG8,C.eG7,C.eG5,C.eGs,C.eI7,C.eI8,C.dbK,C.dc8,C.dc9,C.dbE,C.dbD,C.dbH,C.dbF,C.dbG,C.eKP,C.eKF,C.eKO,C.eKG,C.eKH,C.eKB,C.eKC,C.eKD,C.eKE,C.eKR,C.fX7,C.fX8,C.fX9,C.eKh,C.eKi,C.eKj,C.eKm,C.eKn,C.eKq,C.eKr,C.eKp,C.eKs,C.eKo,C.eKg,C.eKf,C.eKu,C.eKv,C.eKx,C.eKy,C.eDV,C.eDU,C.eDQ,C.eDT,C.eKA,C.eKz,C.fR4,C.fR3,C.es8,C.es9])
t(C.aUb,B.M)
u(B.l8,[C.a5e,C.azy,C.vg,C.a8O,C.yi,C.hE,C.tS,C.Cd,C.t3,C.wC,C.atY,C.JL,C.atp,C.vl,C.mZ,C.hM,C.aac])
u(C.bTN,[C.cHO,C.bTO])
u(C.cqs,[C.cqw,C.av4])
t(C.cqv,C.cqq)
t(C.cqu,C.cqp)
t(C.cqx,C.cqu)
t(C.cqt,C.cqr)
t(C.cqn,C.cqo)
t(C.bd9,B.pl)
t(C.cAV,B.axE)
t(C.aa_,B.y2)
u(B.af,[C.a2s,C.a_9,C.a_7,C.a_o,C.asw,C.Xh,C.Xi,C.a1r,C.a1Y,C.a1X,C.aGv,C.a0l,C.Ov,C.a_T,C.a0d,C.aqq,C.aLp,C.Wy,C.aC_,C.a9i,C.P0,C.aBm,C.KN,C.a14,C.Xt,C.Xu,C.aGT,C.atu,C.a9j])
u(B.ah,[C.aLK,C.aA7,C.aA3,C.aAU,C.aGk,C.aGB,C.aGE,C.aI4,C.aK0,C.aK_,C.aOF,C.aDZ,C.aO9,C.aCk,C.bja,C.aNT,C.aPX,C.aO8,C.bgX,C.aOD,C.aOQ,C.aMO,C.bfI,C.aOR,C.aGW,C.bnG,C.aGU,C.aGX,C.bnp])
u(B.aw,[C.aA5,C.aeV,C.biQ,C.bmp,C.aeY,C.agE,C.b3N,C.bw6,C.b47,C.boX,C.buC,C.b21,C.b4a,C.af0,C.afh,C.b48,C.Fy,C.b24,C.bfY,C.QM,C.KT,C.bkJ,C.bkI,C.byx])
u(B.Ib,[C.bfp,C.bxv,C.aM6,C.bi9,C.bv1])
u(B.mt,[C.bfo,C.bbS,C.buZ,C.beX,C.biy,C.bkQ,C.bhD,C.biu,C.bib,C.bri,C.bd1,C.bcF,C.byt,C.bvr,C.buy,C.bhw,C.b45,C.btr,C.buv])
t(C.bnm,C.aOF)
t(C.bmI,C.aO9)
t(C.bmr,C.aNT)
t(C.bxY,C.aPX)
t(C.bmE,C.aO8)
t(C.bnk,C.aOD)
t(C.bAQ,C.aOQ)
t(C.aGV,C.bAQ)
t(C.bfJ,C.aMO)
t(C.aGY,C.aOR)
t(C.byj,B.jc)
t(C.aab,B.kP)
t(C.cqA,C.b5S)
t(C.ajX,C.a4u)
u(B.Z8,[C.aU4,C.aVw])
t(C.az7,C.aU4)
w(C.aOF,B.cf)
w(C.aO9,B.cf)
w(C.aNT,B.cf)
w(C.aO8,B.cf)
w(C.aOD,B.cf)
w(C.aPX,B.cf)
w(C.aMO,B.eP)
w(C.aOQ,B.cf)
v(C.bAQ,B.eG)
w(C.aOR,B.cf)})()
B.j1(b.typeUniverse,JSON.parse('{"aUN":{"hU":["aUN"]},"oo":{"aUN":[],"hU":["aUN"]},"aUb":{"M":["T9"],"M.E":"T9"},"bd9":{"pl":[]},"aa_":{"y2":[],"oM":[]},"a2s":{"af":[],"v":[]},"aLK":{"ah":["a2s"]},"a_9":{"af":[],"v":[]},"a_7":{"af":[],"v":[]},"aA7":{"ah":["a_9"]},"aA3":{"ah":["a_7"]},"aA5":{"aw":[],"v":[]},"a_o":{"af":[],"v":[]},"aAU":{"ah":["a_o"]},"asw":{"af":[],"v":[]},"aGk":{"ah":["asw"]},"aeV":{"aw":[],"v":[]},"biQ":{"aw":[],"v":[]},"aeY":{"aw":[],"v":[]},"agE":{"aw":[],"v":[]},"bmp":{"aw":[],"v":[]},"Xh":{"af":[],"v":[]},"aGB":{"ah":["Xh"]},"b3N":{"aw":[],"v":[]},"bfp":{"aC":[]},"bfo":{"aC":[]},"bxv":{"aC":[]},"bbS":{"aC":[]},"buZ":{"aC":[]},"Xi":{"af":[],"v":[]},"aGE":{"ah":["Xi"]},"beX":{"aC":[]},"a1r":{"af":[],"v":[]},"aI4":{"ah":["a1r"]},"biy":{"aC":[]},"a1Y":{"af":[],"v":[]},"a1X":{"af":[],"v":[]},"aGv":{"af":[],"v":[]},"a0l":{"af":[],"v":[]},"aK0":{"ah":["a1Y"]},"aK_":{"ah":["a1X"]},"bnm":{"ah":["aGv"]},"bkQ":{"aC":[]},"aDZ":{"ah":["a0l"]},"bw6":{"aw":[],"v":[]},"b47":{"aw":[],"v":[]},"boX":{"aw":[],"v":[]},"Ov":{"af":[],"v":[]},"a_T":{"af":[],"v":[]},"bmI":{"ah":["Ov"]},"buC":{"aw":[],"v":[]},"bhD":{"aC":[]},"b21":{"aw":[],"v":[]},"aCk":{"ah":["a_T"]},"a0d":{"af":[],"v":[]},"bja":{"ah":["a0d"]},"biu":{"aC":[]},"bib":{"aC":[]},"bri":{"aC":[]},"bd1":{"aC":[]},"bcF":{"aC":[]},"byt":{"aC":[]},"bvr":{"aC":[]},"buy":{"aC":[]},"bhw":{"aC":[]},"aqq":{"af":[],"v":[]},"b4a":{"aw":[],"v":[]},"bmr":{"ah":["aqq"]},"af0":{"aw":[],"v":[]},"afh":{"aw":[],"v":[]},"aLp":{"af":[],"v":[]},"Wy":{"af":[],"v":[]},"Fy":{"aw":[],"v":[]},"aC_":{"af":[],"v":[]},"a9i":{"af":[],"v":[]},"b48":{"aw":[],"v":[]},"b45":{"aC":[]},"bxY":{"ah":["aLp"]},"aM6":{"aC":[]},"bmE":{"ah":["Wy"]},"bgX":{"ah":["aC_"]},"bnk":{"ah":["a9i"]},"b24":{"aw":[],"v":[]},"bi9":{"aC":[]},"btr":{"aC":[]},"buv":{"aC":[]},"aBm":{"af":[],"v":[]},"KN":{"af":[],"v":[]},"a14":{"af":[],"v":[]},"KT":{"aw":[],"v":[]},"P0":{"af":[],"v":[]},"aGV":{"ah":["P0"],"eG":[]},"bfJ":{"ah":["aBm"]},"bfY":{"aw":[],"v":[]},"bfI":{"ah":["KN"]},"QM":{"aw":[],"v":[]},"aGY":{"ah":["a14"]},"bv1":{"aC":[]},"bkJ":{"aw":[],"v":[]},"bkI":{"aw":[],"v":[]},"Xt":{"af":[],"v":[]},"Xu":{"af":[],"v":[]},"aGT":{"af":[],"v":[]},"atu":{"af":[],"v":[]},"aGW":{"ah":["Xt"]},"bnG":{"ah":["Xu"]},"aGU":{"ah":["aGT"]},"byj":{"jc":[]},"aGX":{"ah":["atu"]},"byx":{"aw":[],"v":[]},"a9j":{"af":[],"v":[]},"bnp":{"ah":["a9j"]},"aab":{"kP":["fz<eX>"],"kB":["fz<eX>"]},"ajX":{"a4u":[]},"aU4":{"jn":[],"fm":[]},"az7":{"jn":[],"fm":[]},"aVw":{"jn":[],"fm":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("MI"),X:w("w5<qv>"),bz:w("t"),A:w("bq<n,ai<+(F,F,F,F)>>"),M:w("db<n>"),bo:w("jZ"),g7:w("Uv"),gc:w("aB<iP?>"),bq:w("aB<~>"),cc:w("C4"),fS:w("EM"),an:w("C5"),bm:w("O<T9>"),Y:w("O<a4C>"),f3:w("O<aUN>"),aK:w("O<nw>"),V:w("O<ab>"),O:w("O<t>"),fA:w("O<lY>"),d5:w("O<aB<bB<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dH>>"),m:w("O<aB<~>>"),aF:w("O<nE>"),cd:w("O<ai<hb>>"),ez:w("O<a9<n,aF>>"),gE:w("O<a9<n,n>>"),c7:w("O<a9<n,@>>"),fD:w("O<mW>"),h:w("O<hb>"),e9:w("O<Ac>"),k:w("O<oT>"),g:w("O<ll>"),E:w("O<hY>"),u:w("O<en>"),gB:w("O<vl>"),i:w("O<hM>"),aC:w("O<a9A>"),e8:w("O<Ad>"),e3:w("O<aF>"),dN:w("O<r>"),v:w("O<fZ>"),cR:w("O<ja>"),J:w("O<fJ>"),gx:w("O<pK<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(F,F)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),D:w("O<+(F,F,F,F)>"),S:w("O<cT>"),s:w("O<n>"),aS:w("O<jc>"),p:w("O<v>"),eR:w("O<fm>"),fT:w("O<bby>"),bx:w("O<aHx>"),gz:w("O<agO>"),x:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<r?>"),Z:w("O<G?>"),cA:w("O<ck>"),B:w("cx<ah<af>>"),gL:w("ai<oT>"),R:w("ai<hY>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bB<G,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<G,+icon3d,picture(n?,n?)>"),bR:w("N<hM,v>"),eC:w("N<of,n>"),cT:w("N<k3,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<G,qd>"),gh:w("N<mZ,jz<mZ>>"),w:w("iC"),ei:w("iP"),g2:w("rU"),fB:w("Fp"),dc:w("hb"),cO:w("a8O"),b6:w("Ac"),gX:w("a9s"),dt:w("lG"),ea:w("oT"),o:w("ll"),I:w("hY"),U:w("en"),fO:w("mZ"),ff:w("vl"),fP:w("hM"),Q:w("wC"),dO:w("atq"),fH:w("iX<t7>"),a:w("cu"),C:w("aF"),dw:w("av5"),di:w("aac"),_:w("eX"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FW"),dB:w("ds<r>"),bJ:w("ds<n>"),b:w("e2<n>"),N:w("n"),fw:w("qv"),bO:w("au"),K:w("bs<r>"),c:w("bs<F>"),F:w("dH"),W:w("bg<n>"),ac:w("bg<G>"),ex:w("k7<ll>"),cI:w("k7<n>"),cl:w("k7<F>"),b4:w("Y<lD>"),bt:w("Y<my>"),fR:w("Y<+(n,n)>"),co:w("ed<r>"),l:w("v"),b2:w("c4<~>"),ev:w("qA<e1>"),dT:w("bm<~>"),q:w("mf"),y:w("R"),gR:w("F"),z:w("@"),r:w("G"),at:w("be?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hY>?"),d:w("ai<@>?"),aP:w("iP?"),af:w("hY?"),go:w("b4c?"),a6:w("a9B?"),bZ:w("+bytes,dataUrl,fileName(dH,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dH?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3H=new B.bL(A.ay,null,null,H.atI,null)
D.b3Q=new B.d7(0,-0.15)
D.b3R=new B.d7(0.62,0)
D.b3W=new B.d7(-0.35,-0.45)
D.b46=new B.d7(0.9,-0.85)
D.b6h=new B.bf(H.V4,H.V4,A.fR,A.fR)
D.b6y=new B.ay(A.b8,1,A.r,-1)
D.bsX=new B.t(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b6K=new B.ay(D.bsX,1,A.r,-1)
D.b6V=new B.ay(A.aD,1.5,A.r,-1)
D.b7_=new B.ay(A.b8,1.6,A.r,-1)
D.b7f=new B.ay(A.aD,1.4,A.r,-1)
D.b8d=new B.aY(264,300,0,1/0)
D.b8D=new B.o(null,null,null,null,null,N.Is,A.a6)
D.cba=new B.a7(A.a5,A.a9,A.x,G.a6T,null,null)
D.b8L=new B.o(null,null,null,null,null,D.cba,A.a6)
D.afN=new B.o(A.av,null,null,A.ud,null,null,A.n)
D.bls=new B.t(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bsU=new B.t(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.daC=w([D.bls,D.bsU],x.O)
D.eGn=new B.bT(A.z,0.5,A.x,null,0,D.daC,null,null)
D.b93=new B.o(null,null,null,null,null,D.eGn,A.a6)
D.a_3=new B.t(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b7v=new B.bH(R.w5,A.a1,A.a1,A.a1)
D.b95=new B.o(D.a_3,null,D.b7v,null,null,null,A.n)
D.ccW=new B.a7(A.a5,A.a9,A.x,A.SG,null,null)
D.b9c=new B.o(null,null,null,null,null,D.ccW,A.a6)
D.ahu=new B.t(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b9f=new B.o(D.ahu,null,null,A.ru,null,null,A.n)
D.b9j=new B.o(A.k_,null,null,null,null,null,A.a6)
D.b9m=new B.o(P.aiM,null,H.afp,A.mJ,null,null,A.n)
D.FO=new B.o(A.dX,null,null,null,null,null,A.a6)
D.b9t=new B.o(null,null,null,null,null,E.xd,A.a6)
D.dg4=w([E.ajM,A.c6],x.O)
D.ccA=new B.a7(A.aY,A.b3,A.x,D.dg4,null,null)
D.b9x=new B.o(null,null,null,A.mJ,null,D.ccA,A.n)
D.drV=w([A.bp,A.dX,A.jG],x.O)
D.a4S=new B.a7(A.ay,A.aC,A.x,D.drV,null,null)
D.b9K=new B.o(null,null,null,null,null,D.a4S,A.n)
D.b9L=new B.o(D.ahu,null,null,A.lf,null,null,A.n)
D.cEB=w([A.dh,A.bp],x.O)
D.ccq=new B.a7(A.ay,A.aC,A.x,D.cEB,null,null)
D.b9P=new B.o(null,null,null,null,null,D.ccq,A.n)
D.bi7=new B.t(0.8,0.043137254901960784,0.07058823529411765,0.12549019607843137,A.q)
D.b6o=new B.bf(A.bJ,A.bJ,A.Kj,A.Kj)
D.b9Z=new B.o(D.bi7,null,null,D.b6o,null,null,A.n)
D.ba_=new B.o(null,null,null,null,null,G.vg,A.a6)
D.bal=new B.o(A.ajN,null,null,null,null,null,A.a6)
D.bmw=new B.t(0.5647058823529412,0,0,0,A.q)
D.afY=new B.ab(0,A.G,D.bmw,A.JX,28)
D.bcF=new B.aYZ()
D.bdd=new C.cAV()
D.bdq=new C.bd9()
D.ags=new B.cj(A.z,null,null,A.a4H,null)
D.bg6=new B.fi(null,null,null,null,null,E.nx,null,null,null,null)
D.be_=new B.cj(A.z,null,null,D.bg6,null)
D.bW8=new B.ae(A.e9,28,A.c,null,null,null)
D.bev=new B.cj(A.z,null,null,D.bW8,null)
D.bg3=new B.fi(2,null,null,null,null,A.c3,null,null,null,null)
D.beS=new B.cj(A.z,null,null,D.bg3,null)
D.bWt=new B.ae(A5.I8,40,A.bD,null,null,null)
D.beT=new B.cj(A.z,null,null,D.bWt,null)
D.bh_=new B.t(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bhe=new B.t(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bhH=new B.t(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bhS=new B.t(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.biz=new B.t(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.biQ=new B.t(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.biS=new B.t(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.MU=new B.t(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bjk=new B.t(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bjs=new B.t(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ahP=new B.t(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bki=new B.t(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.ble=new B.t(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ai5=new B.t(1,1,1,0.9725490196078431,A.q)
D.blC=new B.t(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.blU=new B.t(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.blX=new B.t(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bma=new B.t(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bmD=new B.t(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bnq=new B.t(1,0.9529411764705882,0.8745098039215686,0.6352941176470588,A.q)
D.bon=new B.t(1,1,0.996078431372549,0.9725490196078431,A.q)
D.ZM=new B.t(0.8509803921568627,0,0,0,A.q)
D.boz=new B.t(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.boH=new B.t(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ZO=new B.t(0.6,0,0,0,A.q)
D.aj6=new B.t(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bqt=new B.t(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.uw=new B.t(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bqY=new B.t(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.ajJ=new B.t(1,0.14901960784313725,0.18823529411764706,0.25882352941176473,A.q)
D.brv=new B.t(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.brW=new B.t(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ak3=new B.t(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.a_h=new B.t(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Cg=new B.t(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.NA=new B.t(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jH=new B.t(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aky=new B.t(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.wq=new B.t(1,0.9490196078431372,0.7568627450980392,0.3058823529411765,A.q)
D.a_s=new B.t(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bvX=new B.t(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bwu=new B.t(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bwK=new B.t(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.bxl=new B.t(1,0.11764705882352941,0.1450980392156863,0.21568627450980393,A.q)
D.a_Y=new B.t(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bxV=new B.t(1,0.23137254901960785,0.2,0.12549019607843137,A.q)
D.by2=new B.t(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.byF=new B.t(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.byZ=new B.hT(A.aT,!0,null,null)
D.fKc=new B.H(!0,A.aE,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hau=new B.B("Bio link",null,D.fKc,null,null,null,null,null,null,null,null,null)
D.beN=new B.cj(A.z,null,null,D.hau,null)
D.bzd=new B.hT(A.BR,!0,D.beN,null)
D.dUQ=new B.VU(A.aH,56,A0.PD,null,null)
D.fGK=new B.H(!0,A.bA,null,null,null,null,null,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTs=new B.B("No presentations yet",null,D.fGK,null,null,null,null,null,null,null,null,null)
D.fLf=new B.H(!0,A.cy,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQK=new B.B(y.K,null,D.fLf,null,A.K,null,null,null,null,null,null,null)
D.dar=w([D.dUQ,A.aB,D.fTs,A.am,D.fQK],x.p)
D.bzs=new B.fp(A.ah,A.e,A.i,A.l,null,A.p,null,0,D.dar,null)
D.O_=new C.a5e(0,"none")
D.alP=new C.a5e(1,"deflate")
D.alQ=new C.a5e(2,"bzip2")
D.bAb=new B.kI(0.165,0.84,0.44,1)
D.dgo=w([A.c9,A.dN,A.aD],x.O)
D.cbE=new B.a7(A.ay,A.aC,A.x,D.dgo,null,null)
D.b8I=new B.o(null,null,null,null,null,D.cbE,A.n)
D.c4P=new B.ae(A.eY,null,A.ab,null,null,null)
D.bfq=new B.cj(A.z,null,null,D.c4P,null)
D.bAL=new B.bN(D.b8I,A.bk,D.bfq,null)
D.bwc=new B.t(0.058823529411764705,1,1,1,A.q)
D.djZ=w([A.bw,A.rG,A.rG,D.bwc],x.O)
D.cWi=w([0,0.32,0.7,1],x.x)
D.ccg=new B.a7(A.ay,A.aC,A.x,D.djZ,D.cWi,null)
D.b8x=new B.o(null,null,null,null,null,D.ccg,A.n)
D.bAS=new B.bN(D.b8x,A.bk,null,null)
D.bC_=new B.mO(1,1,null,null,null,A.bs,null)
D.bC2=new B.mO(1,null,null,null,null,D.a_s,null)
D.bCw=new B.be(125e4)
D.bCC=new B.be(17e4)
D.bCM=new B.be(35964e8)
D.bCT=new B.be(55e4)
D.bCX=new B.be(68e4)
D.bDn=new B.ix(0,0,0,5)
D.bDC=new B.Q(0,16,16,0)
D.bDN=new B.Q(0,36,0,36)
D.bDV=new B.Q(0,54,0,0)
D.bE1=new B.Q(10,0,10,3)
D.bEc=new B.ix(10,16,10,10)
D.bEo=new B.Q(10,6,4,6)
D.bEr=new B.Q(10,8,10,6)
D.amO=new B.Q(11,8,11,11)
D.bEx=new B.Q(12,0,12,24)
D.bEK=new B.Q(12,12,12,4)
D.bEN=new B.Q(12,12,8,12)
D.bEO=new B.Q(12,14,12,10)
D.bF4=new B.Q(12,8,8,12)
D.bFu=new B.Q(14,14,14,0)
D.bFz=new B.Q(14,14,14,90)
D.bFX=new B.Q(16,10,16,16)
D.bFY=new B.Q(16,10,16,20)
D.anA=new B.Q(16,6,16,28)
D.bGv=new B.Q(18,0,18,10)
D.bGx=new B.Q(18,0,18,30)
D.bGz=new B.Q(18,10,18,12)
D.bGA=new B.Q(18,10,18,14)
D.bGQ=new B.Q(18,14,18,18)
D.bGV=new B.Q(18,16,14,18)
D.bH_=new B.Q(18,18,18,12)
D.bH5=new B.Q(18,26,18,12)
D.bHa=new B.Q(18,34,18,34)
D.bHb=new B.Q(18,4,18,14)
D.bHg=new B.Q(18,8,18,24)
D.bHA=new B.Q(20,16,14,4)
D.bHF=new B.Q(20,18,12,4)
D.bHK=new B.Q(20,20,12,20)
D.bHN=new B.Q(20,22,20,20)
D.bHS=new B.Q(20,6,20,6)
D.bI1=new B.Q(22,18,22,18)
D.bI9=new B.Q(22,24,22,0)
D.bIc=new B.Q(22,24,22,4)
D.bIk=new B.Q(22,60,22,22)
D.bIq=new B.Q(24,24,24,22)
D.bIA=new B.Q(26,10,60,10)
D.bIH=new B.Q(28,44,28,44)
D.bIY=new B.Q(32,44,32,44)
D.bJ5=new B.Q(38,30,38,20)
D.bJb=new B.Q(4,0,0,6)
D.bJn=new B.ix(4,4,4,4)
D.bJQ=new B.ix(6,5,6,5)
D.bJV=new B.Q(6,6,8,6)
D.bK5=new B.Q(8,14,8,14)
D.bK6=new B.Q(8,22,8,22)
D.bKe=new B.Q(8,6,12,6)
D.bKm=new B.Q(8,8,8,4)
D.aoz=new B.Q(9,9,9,6)
D.bKy=new B.ix(2.5,2.5,2.5,2.5)
D.bKz=new B.Q(10.5,0,10.5,0)
D.bKA=new B.Q(7,1.5,7,1.5)
D.d7i=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bKQ=new B.uT(null,null,D.d7i,A.ym)
D.d3V=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bKR=new B.uT(null,null,D.d3V,A.ym)
D.aY_=new B.H(!0,A.aE,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9M=new B.B("WORD DESIGN",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.bLw=new B.bz(1,A.bd,D.h9M,null)
D.h9o=new B.B("Slides database",null,A7.u_,null,null,null,null,null,null,null,null,null)
D.h6C=new B.B("Admin only \xb7 keep as many as you like",null,Y.aXq,null,null,null,null,null,null,null,null,null)
D.dB6=w([D.h9o,A.bF,D.h6C],x.p)
D.bzE=new B.fp(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dB6,null)
D.bLz=new B.bz(1,A.bd,D.bzE,null)
D.h0M=new B.B("NGMY logo",null,A.fF,null,null,null,null,null,null,null,null,null)
D.bLC=new B.bz(1,A.bd,D.h0M,null)
D.fHQ=new B.H(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbP=new B.B("TALK TO THE EDITOR",null,D.fHQ,null,null,null,null,null,null,null,null,null)
D.bLX=new B.bz(1,A.bd,D.hbP,null)
D.fVm=new B.B("Tell the AI what to change",null,A7.u_,null,null,null,null,null,null,null,null,null)
D.bMg=new B.bz(1,A.bd,D.fVm,null)
D.bNM=new B.ED(!0,"video/mp4")
D.fFX=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTi=new B.B("Move presentations between devices",null,D.fFX,null,null,null,!1,null,null,1,null,null)
D.bNR=new B.dx(A.dM,A.a5,A.f,D.fTi,null)
D.fUx=new B.B("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.bNT=new B.dx(A.dM,A.z,A.f,D.fUx,null)
D.bO8=new B.di(1,A.cn,D.bNT,null)
D.bRc=new B.a_(58612,"MaterialIcons",!1)
D.a31=new B.a_(60988,"MaterialIcons",!1)
D.bRB=new B.a_(61352,"MaterialIcons",!1)
D.aqj=new B.a_(61531,"MaterialIcons",!1)
D.bRT=new B.a_(61940,"MaterialIcons",!1)
D.bSO=new B.a_(63062,"MaterialIcons",!1)
D.bSV=new B.a_(63109,"MaterialIcons",!1)
D.bT7=new B.a_(63206,"MaterialIcons",!1)
D.aqW=new B.a_(63238,"MaterialIcons",!1)
D.bTq=new B.a_(63338,"MaterialIcons",!1)
D.a3F=new B.a_(63365,"MaterialIcons",!1)
D.a3G=new B.a_(63367,"MaterialIcons",!1)
D.a3H=new B.a_(63368,"MaterialIcons",!1)
D.ar5=new B.a_(63384,"MaterialIcons",!1)
D.bTH=new B.a_(63525,"MaterialIcons",!1)
D.bTL=new B.a_(63568,"MaterialIcons",!1)
D.bU6=new B.a_(983072,"MaterialIcons",!1)
D.bUx=new B.a_(983271,"MaterialIcons",!0)
D.asc=new B.a_(983965,"MaterialIcons",!1)
D.asd=new B.a_(983966,"MaterialIcons",!1)
D.bVv=new B.a_(984592,"MaterialIcons",!1)
D.bVL=new B.ae(A.uX,16,A.aE,null,null,null)
D.ass=new B.ae(A.oH,18,A.c,null,null,null)
D.bW9=new B.ae(A.D3,18,L.lJ,null,null,null)
D.bWP=new B.ae(A.jL,11,null,null,null,null)
D.bWZ=new B.ae(A.PJ,null,A.ew,null,null,null)
D.bXx=new B.ae(A.tj,18,A.aE,null,null,null)
D.bXD=new B.ae(A8.Dh,14,null,null,null,null)
D.bXE=new B.ae(A.ej,28,A.bY,null,null,null)
D.bXQ=new B.ae(A.qV,20,A.c,null,null,null)
D.bXX=new B.ae(A.zD,null,null,null,null,null)
D.bY1=new B.ae(A.jt,18,A.fK,null,null,null)
D.bY6=new B.ae(A.kc,null,null,null,null,null)
D.bSQ=new B.a_(63065,"MaterialIcons",!1)
D.bYK=new B.ae(D.bSQ,15,A.c,null,null,null)
D.bSW=new B.a_(63113,"MaterialIcons",!1)
D.bYQ=new B.ae(D.bSW,null,A.ab,null,null,null)
D.bZe=new B.ae(A.uW,22,A.bL,null,null,null)
D.bZz=new B.ae(A.tf,18,null,null,null,null)
D.bZF=new B.ae(A.Dp,12,A.c,null,null,null)
D.bV9=new B.a_(983687,"MaterialIcons",!1)
D.bZS=new B.ae(D.bV9,null,A.bp,null,null,null)
D.c_1=new B.ae(A.hd,null,A.bp,null,null,null)
D.c_l=new B.ae(A.pF,22,A.c,null,null,null)
D.c_p=new B.ae(A.cB,13,A.c,null,null,null)
D.c_v=new B.ae(A.ej,26,A.aA,null,null,null)
D.c_z=new B.ae(A.to,26,A.c,null,null,null)
D.Qp=new B.ae(A.jL,8,A.c,null,null,null)
D.c_U=new B.ae(A.oH,40,A.c,null,null,null)
D.c_V=new B.ae(A.bQy,null,null,null,null,null)
D.c_Z=new B.ae(A.v9,20,null,null,null,null)
D.bV8=new B.a_(983683,"MaterialIcons",!1)
D.c0a=new B.ae(D.bV8,null,A.b2,null,null,null)
D.c0b=new B.ae(A.jL,16,A.bp,null,null,null)
D.c0w=new B.ae(A.pD,null,null,null,null,null)
D.at2=new B.ae(A.ti,22,A.c,null,null,null)
D.c0C=new B.ae(A.e9,17,A.c,null,null,null)
D.at3=new B.ae(A.jL,9,A.c,null,null,null)
D.c0H=new B.ae(A.wR,null,null,null,null,null)
D.bQP=new B.a_(57744,"MaterialIcons",!1)
D.c0O=new B.ae(D.bQP,null,null,null,null,null)
D.c0R=new B.ae(A.wR,16,null,null,null,null)
D.bVD=new B.a_(985181,"MaterialIcons",!1)
D.Ij=new B.ae(D.bVD,null,null,null,null,null)
D.c12=new B.ae(A.kc,16,A.bL,null,null,null)
D.bV_=new B.a_(983615,"MaterialIcons",!1)
D.c14=new B.ae(D.bV_,12,A.c,null,null,null)
D.at9=new B.ae(A.zn,16,null,null,null,null)
D.c1c=new B.ae(A.e9,21,A.c,null,null,null)
D.c1h=new B.ae(A.hd,17,A.c,null,null,null)
D.c1i=new B.ae(A.uW,null,null,null,null,null)
D.c1A=new B.ae(A.a4j,20,A.aE,null,null,null)
D.c1P=new B.ae(A.oG,22,E.nx,null,null,null)
D.c1Y=new B.ae(A.qU,13,A.ab,null,null,null)
D.c20=new B.ae(A.arY,20,A.aE,null,null,null)
D.bQw=new B.a_(57495,"MaterialIcons",!1)
D.c25=new B.ae(D.bQw,null,null,null,null,null)
D.c29=new B.ae(A.oI,18,A.c,null,null,null)
D.c2w=new B.ae(A.vd,28,A.c,null,null,null)
D.c2K=new B.ae(D.aqW,null,A.aD,null,null,null)
D.c2L=new B.ae(A.qV,22,A.c,null,null,null)
D.ati=new B.ae(A.a2Y,16,null,null,null,null)
D.c3x=new B.ae(A.uW,32,A.c,null,null,null)
D.c4i=new B.ae(A.iW,22,A.c,null,null,null)
D.c4m=new B.ae(A.to,22,A.ab,null,null,null)
D.atz=new B.ae(A.uX,null,A.bV,null,null,null)
D.c5k=new B.ae(A.qO,18,null,null,null,null)
D.c5X=new B.ae(A.e9,18,A.bt,null,null,null)
D.c63=new B.ae(A.arT,null,null,null,null,null)
D.c6u=new B.e9(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aXO,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.fxv=new B.H(!0,A.bP,null,null,null,null,null,A.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6M=new B.e9(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fxv,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.c7c=new B.e9(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.dbH=w([A.dX,A.aD],x.O)
D.c9k=new B.a7(A.a5,A.a9,A.x,D.dbH,null,null)
D.c9w=new B.a7(A.aY,A.b3,A.Lv,A.aAK,null,null)
D.bhw=new B.t(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bmF=new B.t(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bqu=new B.t(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bk9=new B.t(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cWk=w([D.bhw,D.bmF,D.bqu,D.bk9],x.O)
D.c9R=new B.a7(A.ay,A.aC,A.x,D.cWk,A.IQ,null)
D.dBf=w([A.cP,A.bE,A.b8],x.O)
D.c9T=new B.a7(A.aY,A.b3,A.Lv,D.dBf,null,null)
D.dCT=w([A.bp,A.cj],x.O)
D.c9Y=new B.a7(A.a5,A.a9,A.x,D.dCT,null,null)
D.dxe=w([A.h_,A.d6,A.at],x.O)
D.ca_=new B.a7(A.ay,A.aC,A.x,D.dxe,null,null)
D.dic=w([A.cW,A.fq],x.O)
D.ca3=new B.a7(A.a5,A.a9,A.x,D.dic,null,null)
D.dB9=w([L.lJ,A.d6],x.O)
D.aum=new B.a7(A.a5,A.a9,A.x,D.dB9,null,null)
D.bns=new B.t(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dB5=w([D.bns,A.wv,A.c3],x.O)
D.ca7=new B.a7(A.a5,A.a9,A.x,D.dB5,null,null)
D.ddv=w([A.be,A.dn,A.ep],x.O)
D.ca8=new B.a7(A.ay,A.aC,A.x,D.ddv,null,null)
D.QG=new B.a7(A.a5,A.a9,A.x,A.J9,null,null)
D.bx7=new B.t(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cP7=w([D.bx7,A.c3,A.jI],x.O)
D.aut=new B.a7(A.ay,A.aC,A.x,D.cP7,null,null)
D.do6=w([A.ur,A.aF,D.Cg],x.O)
D.cbc=new B.a7(A.a5,A.a9,A.x,D.do6,null,null)
D.byG=new B.t(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bld=new B.t(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.brK=new B.t(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.dcy=w([D.byG,D.bld,D.brK],x.O)
D.auu=new B.a7(A.a5,A.a9,A.x,D.dcy,null,null)
D.bnu=new B.t(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.cdd=w([AF.alr,D.bnu],x.O)
D.cbl=new B.a7(A.aY,A.b3,A.x,D.cdd,null,null)
D.dao=w([A.nw,A.bD],x.O)
D.cbp=new B.a7(A.aY,A.b3,A.x,D.dao,null,null)
D.dtG=w([A.aD,A.dN],x.O)
D.cbv=new B.a7(A.a5,A.a9,A.x,D.dtG,null,null)
D.boE=new B.t(1,0.6901960784313725,0.47843137254901963,0.10196078431372549,A.q)
D.cdu=w([A.Zk,D.wq,D.boE],x.O)
D.cbD=new B.a7(A.aY,A.b3,A.Lv,D.cdu,null,null)
D.akg=new B.t(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aCv=w([D.akg,D.jH,D.MU],x.O)
D.cc1=new B.a7(A.ay,A.aC,A.x,D.aCv,null,null)
D.cP_=w([A.dA,A.dR],x.O)
D.ccb=new B.a7(A.aY,A.b3,A.x,D.cP_,null,null)
D.dqt=w([A.wi,A.C9],x.O)
D.ccY=new B.a7(A.a5,A.a9,A.x,D.dqt,null,null)
D.h2m=new B.B("Which Bio link?",null,A.cG,null,null,null,null,null,null,null,null,null)
D.cda=new B.qg(null,D.h2m,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.A0=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.r6=new C.mZ(0,"blank")
D.Up=new C.mZ(1,"title")
D.n9=new C.mZ(2,"titleContent")
D.ekj=new C.mZ(3,"twoColumn")
D.Eu=new C.mZ(4,"section")
D.ekk=new C.mZ(5,"comparison")
D.JH=new C.mZ(6,"flashcard")
D.JI=new C.mZ(7,"quiz")
D.JJ=new C.mZ(8,"worksheet")
D.auO=w([D.r6,D.Up,D.n9,D.ekj,D.Eu,D.ekk,D.JH,D.JI,D.JJ],B.at("O<mZ>"))
D.aDC=w([Av.Zt,A.dR],x.O)
D.l4=w([A.c3,A.bL,A.hM,A.i8,D.Cg],x.O)
D.dW6=new C.jk("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aDC,D.l4)
D.bxo=new B.t(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bp5=new B.t(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.daD=w([D.bxo,D.bp5],x.O)
D.dVY=new C.jk("confetti","Golden Confetti","Together we rise",D.daD,D.l4)
D.d7p=w([A.nn,A.Z_],x.O)
D.dVZ=new C.jk("crown","Crown of Glory","Built for our community",D.d7p,D.l4)
D.bl_=new B.t(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.boJ=new B.t(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.deX=w([D.bl_,D.boJ],x.O)
D.vi=w([A.bP,A.aS,A.c,A.bm,A.an],x.O)
D.dVT=new C.jk("aurora","Aurora Gala","A brighter future, together",D.deX,D.vi)
D.bqw=new B.t(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dqB=w([G.ah5,D.bqw],x.O)
D.dW9=new C.jk("champagne","Champagne Toast","Cheers to every member",D.dqB,D.l4)
D.dWa=new C.jk("diamonds","Diamond Rain","Every member is a jewel",A3.aEm,D.vi)
D.bi_=new B.t(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bo7=new B.t(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dwq=w([D.bi_,D.bo7],x.O)
D.dVO=new C.jk("starburst","Golden Starburst","Thank you!",D.dwq,D.l4)
D.cdk=w([A.fB,A.yB],x.O)
D.ahf=new B.t(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.Sg=w([A.po,A.ix,A.ww,A.pg,D.ahf],x.O)
D.dWh=new C.jk("balloons","Luxury Balloons","Let's celebrate",D.cdk,D.Sg)
D.d6A=w([A.Zg,A.w],x.O)
D.dW5=new C.jk("galaxy","Galaxy Spiral","The sky is not the limit",D.d6A,D.vi)
D.bv4=new B.t(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dmN=w([A.kz,D.bv4],x.O)
D.dW0=new C.jk("redcarpet","Red Carpet","Tonight we shine",D.dmN,D.l4)
D.bsr=new B.t(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bqg=new B.t(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.drA=w([D.bsr,D.bqg],x.O)
D.dVQ=new C.jk("coins","Gold Coin Rain","Every contribution counts",D.drA,D.l4)
D.dzm=w([A.dA,A.i7],x.O)
D.dVW=new C.jk("lanterns","Sky Lanterns","Lighting the way together",D.dzm,D.l4)
D.bmg=new B.t(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d4i=w([A.yD,D.bmg],x.O)
D.dVS=new C.jk("hearts","Floating Hearts","Made with love",D.d4i,D.Sg)
D.biI=new B.t(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bjH=new B.t(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dB3=w([D.biI,D.bjH],x.O)
D.dWg=new C.jk("petals","Rose Petals","Thank you, from our hearts",D.dB3,D.Sg)
D.bwa=new B.t(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dwO=w([A.ll,D.bwa],x.O)
D.dVN=new C.jk("butterflies","Golden Butterflies","New beginnings",D.dwO,D.l4)
D.brF=new B.t(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d5q=w([D.brF,A.w],x.O)
D.dW8=new C.jk("neon","Neon Night","Let's go!",D.d5q,D.vi)
D.bnK=new B.t(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dtU=w([A.Ng,D.bnK],x.O)
D.dWb=new C.jk("disco","Disco Ball","Party time",D.dtU,D.vi)
D.bsg=new B.t(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dtm=w([A.h_,D.bsg],x.O)
D.dVR=new C.jk("sunrise","Golden Sunrise","A new day for our community",D.dtm,D.l4)
D.dsX=w([A.rM,A.dR],x.O)
D.dWc=new C.jk("pearls","Ocean Pearls","Deep roots, bright future",D.dsX,D.vi)
D.bl6=new B.t(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dta=w([D.bl6,A.dR],x.O)
D.dWf=new C.jk("snow","Winter Gala","Warm wishes to all",D.dta,D.vi)
D.bh9=new B.t(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bit=new B.t(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dzS=w([D.bh9,D.bit],x.O)
D.dW4=new C.jk("laurel","Laurel Victory","We did it together",D.dzS,D.l4)
D.bgY=new B.t(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.boF=new B.t(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d3a=w([D.bgY,D.boF],x.O)
D.dWe=new C.jk("ribbons","Silk Ribbons","Elegance in every step",D.d3a,D.l4)
D.bpS=new B.t(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cOX=w([G.Cf,D.bpS],x.O)
D.dW1=new C.jk("kente","Kente Pride","Proud of our roots",D.cOX,D.l4)
D.bt7=new B.t(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bwz=new B.t(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dgN=w([D.bt7,D.bwz],x.O)
D.dVX=new C.jk("trophy","Trophy Shine","Winners together",D.dgN,D.l4)
D.dti=w([Aw.N0,A.w],x.O)
D.dVP=new C.jk("shooting","Shooting Stars","Make a wish",D.dti,D.vi)
D.bhj=new B.t(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.alc=new B.t(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dAa=w([D.bhj,D.alc],x.O)
D.dW2=new C.jk("bokeh","Golden Bokeh","Shine bright",D.dAa,D.l4)
D.bhJ=new B.t(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dnE=w([D.bhJ,A.w],x.O)
D.dVV=new C.jk("orbits","Golden Orbits","Always moving forward",D.dnE,D.l4)
D.bwb=new B.t(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.djQ=w([A.aiv,D.bwb],x.O)
D.dW_=new C.jk("flowers","Blooming Garden","Growing together",D.djQ,D.Sg)
D.bhu=new B.t(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bii=new B.t(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dyO=w([D.bhu,D.bii],x.O)
D.dVU=new C.jk("music","Music Party","Celebrate with us",D.dyO,D.vi)
D.bjl=new B.t(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bx0=new B.t(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d4x=w([D.bjl,D.bx0],x.O)
D.dWd=new C.jk("mandala","Royal Mandala","Harmony and unity",D.d4x,D.l4)
D.djW=w([G.Cf,D.alc],x.O)
D.dW7=new C.jk("sparklers","Golden Sparklers","Light up the night",D.djW,D.l4)
D.dW3=new C.jk("city","City Lights","The whole city celebrates",D.aDC,D.l4)
D.IC=w([D.dW6,D.dVY,D.dVZ,D.dVT,D.dW9,D.dWa,D.dVO,D.dWh,D.dW5,D.dW0,D.dVQ,D.dVW,D.dVS,D.dWg,D.dVN,D.dW8,D.dWb,D.dVR,D.dWc,D.dWf,D.dW4,D.dWe,D.dW1,D.dVX,D.dVP,D.dW2,D.dVV,D.dW_,D.dVU,D.dWd,D.dW7,D.dW3],B.at("O<jk>"))
D.eMx=new B.y("","No ring")
D.f22=new B.y("platinum","Platinum")
D.eZ1=new B.y("glow","Glow")
D.eQf=new B.y("double","Double line")
D.eP7=new B.y("framed","Gallery frame")
D.eM2=new B.y("rosegold","Rose gold")
D.eZR=new B.y("jewels","Jeweled")
D.eWs=new B.y("aurora","Aurora")
D.DK=w([D.eMx,A.Va,D.f22,D.eZ1,M.aSV,D.eQf,A.aST,D.eP7,D.eM2,D.eZR,D.eWs],x.L)
D.e_n=new C.hE(19,"goldFiligree")
D.NH=new B.t(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hPe=w([D.NH,A.aF,A.jI],x.O)
D.ki=new C.vg(0,"classic")
D.a8L=new C.hb("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.e_n,4294966259,4279378237,4292128567,D.ki)
D.e_o=new C.hE(20,"goldLaurel")
D.bwY=new B.t(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hPu=w([A.MM,A.iy,D.bwY],x.O)
D.a8M=new C.hb("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.e_o,4294966776,4282000405,4291404327,D.ki)
D.e_p=new C.hE(21,"goldCrest")
D.ahx=new B.t(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bx4=new B.t(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hPh=w([D.ahx,A.aF,D.bx4],x.O)
D.a8T=new C.hb("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.e_p,4294965484,4283053072,4292128567,D.ki)
D.e_q=new C.hE(22,"goldRibbon")
D.hP5=w([A.a_e,D.jH,A.iy],x.O)
D.a8A=new C.hb("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.e_q,4294967035,4279378237,4291404327,D.ki)
D.e_r=new C.hE(23,"goldBaroque")
D.aji=new B.t(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hPd=w([D.aji,A.aF,A.jI],x.O)
D.a8F=new C.hb("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.e_r,4294964964,4283053072,4292128567,D.ki)
D.e_s=new C.hE(24,"goldStar")
D.byy=new B.t(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hPn=w([D.byy,A.aF,D.jH],x.O)
D.a8Q=new C.hb("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.e_s,4294966518,4279378237,4292128567,D.ki)
D.cy0=w([D.a8L,D.a8M,D.a8T,D.a8A,D.a8F,D.a8Q],x.h)
D.e_t=new C.hE(25,"royalMaroon")
D.bnG=new B.t(1,0.9882352941176471,0.9607843137254902,0.9019607843137255,A.q)
D.YR=new B.t(1,0.47843137254901963,0.10588235294117647,0.13333333333333333,A.q)
D.Z2=new B.t(1,0.788235294117647,0.6352941176470588,0.22745098039215686,A.q)
D.hPP=w([D.bnG,D.YR,D.Z2],x.O)
D.Ay=new C.vg(11,"royal")
D.a8J=new C.hb("royal_maroon","Kifalme Nyekundu","Ukanda mwekundu juu wenye almasi \xb7 baa nyekundu \xb7 muhuri wa dhahabu.",D.e_t,4294768102,4281014802,4286192418,D.Ay)
D.e_u=new C.hE(26,"royalCream")
D.buZ=new B.t(1,0.984313725490196,0.9647058823529412,0.9176470588235294,A.q)
D.G0=new B.t(1,0.8509803921568627,0.6823529411764706,0.24705882352941178,A.q)
D.hPm=w([D.buZ,D.G0,D.YR],x.O)
D.a8D=new C.hb("royal_cream","Dhahabu na Krimu","Baa za dhahabu zinazong\u2019aa \xb7 muhuri wenye utepe.",D.e_u,4294702826,4281014802,4286192418,D.Ay)
D.e_v=new C.hE(27,"royalEmerald")
D.bil=new B.t(1,0.050980392156862744,0.20784313725490197,0.1568627450980392,A.q)
D.bh5=new B.t(1,0.9647058823529412,0.9254901960784314,0.8313725490196079,A.q)
D.hPK=w([D.bil,D.G0,D.bh5],x.O)
D.a8I=new C.hb("royal_emerald","Zumaridi na Dhahabu","Karatasi ya kijani kibichi \xb7 baa za dhahabu.",D.e_v,4279055656,4294372564,4293511014,D.Ay)
D.e_w=new C.hE(28,"royalNavy")
D.boy=new B.t(1,0.07058823529411765,0.12156862745098039,0.26666666666666666,A.q)
D.bup=new B.t(1,0.9529411764705882,0.9333333333333333,0.8784313725490196,A.q)
D.hPx=w([D.boy,D.G0,D.bup],x.O)
D.a8B=new C.hb("royal_navy","Bluu ya Usiku","Karatasi ya bluu ya usiku \xb7 baa za dhahabu.",D.e_w,4279377732,4294176480,4293511014,D.Ay)
D.e_x=new C.hE(29,"royalPlum")
D.bn8=new B.t(1,0.1803921568627451,0.06274509803921569,0.2196078431372549,A.q)
D.buR=new B.t(1,0.9686274509803922,0.9254901960784314,0.9568627450980393,A.q)
D.hPg=w([D.bn8,D.G0,D.buR],x.O)
D.a8K=new C.hb("royal_plum","Zambarau ya Kifalme","Karatasi ya zambarau \xb7 baa za dhahabu.",D.e_x,4281208888,4294438132,4293511014,D.Ay)
D.e_y=new C.hE(30,"royalOnyx")
D.bmk=new B.t(1,0.10196078431372549,0.09803921568627451,0.09019607843137255,A.q)
D.br2=new B.t(1,0.9607843137254902,0.9372549019607843,0.8901960784313725,A.q)
D.hPQ=w([D.bmk,D.G0,D.br2],x.O)
D.a8N=new C.hb("royal_onyx","Mkaa na Dhahabu","Karatasi nyeusi \xb7 baa za dhahabu.",D.e_y,4279900439,4294307811,4293511014,D.Ay)
D.e_z=new C.hE(31,"royalTeal")
D.bpk=new B.t(1,0.9725490196078431,0.984313725490196,0.9686274509803922,A.q)
D.bhg=new B.t(1,0.058823529411764705,0.3215686274509804,0.3411764705882353,A.q)
D.hPL=w([D.bpk,D.bhg,D.Z2],x.O)
D.a8W=new C.hb("royal_teal","Bahari ya Kifalme","Ukanda wa bahari juu wenye almasi \xb7 baa za bahari.",D.e_z,4294507511,4279510570,4279194199,D.Ay)
D.cyn=w([D.a8J,D.a8D,D.a8I,D.a8B,D.a8K,D.a8N,D.a8W],x.h)
D.c1q=new B.ae(G.apT,16,null,null,null,null)
D.bc2=new B.w5(A.b6,D.c1q,null,x.X)
D.bQY=new B.a_(58027,"MaterialIcons",!1)
D.bVR=new B.ae(D.bQY,16,null,null,null,null)
D.bc0=new B.w5(A.K,D.bVR,null,x.X)
D.bQZ=new B.a_(58030,"MaterialIcons",!1)
D.bZZ=new B.ae(D.bQZ,16,null,null,null,null)
D.bc3=new B.w5(A.e2,D.bZZ,null,x.X)
D.cEm=w([D.bc2,D.bc0,D.bc3],B.at("O<w5<qv>>"))
D.cMb=w([A.Cm,A.hJ],x.O)
D.cMc=w([A.be,A.bi,A.ep],x.O)
D.S5=w([A.bL,A.i8,A.hM,A.aF,A.pg],x.O)
D.cP2=w([A.c3,D.jH,D.MU],x.O)
D.cPA=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eJJ=new B.y(4278913286,4280030216)
D.eK0=new B.y(4279373061,4278518787)
D.eK7=new B.y(4279898630,4278847235)
D.dg8=w([D.eJJ,D.eK0,D.eK7],x.n)
D.dbp=w(["\u265b","\u269c","\u2726"],x.s)
D.e_l=new C.yh("Royal Onyx & Gold",D.dg8,4292128567,4294370209,4294965479,3874020544,D.dbp)
D.eJw=new B.y(4278326799,4278598442)
D.eJy=new B.y(4278395929,4278258953)
D.eJF=new B.y(4278599728,4278327826)
D.dzd=w([D.eJw,D.eJy,D.eJF],x.n)
D.d5i=w(["\u269c","\u2756","\u2727"],x.s)
D.e_i=new C.yh("Imperial Emerald",D.dzd,4293050997,4294699968,4294180856,3872254170,D.d5i)
D.eJz=new B.y(4278455076,4278918747)
D.eJE=new B.y(4278587439,4278322714)
D.eJS=new B.y(4279051376,4278455076)
D.dxa=w([D.eJz,D.eJE,D.eJS],x.n)
D.doq=w(["\u2654","\u2726","\u2748"],x.s)
D.e_c=new C.yh("Sapphire Crown",D.dxa,4291417834,4294967295,4294310143,3871986666,D.doq)
D.eK5=new B.y(4279894534,4283041554)
D.eKh=new B.y(4281008906,4279042307)
D.eKp=new B.y(4284221976,4279894534)
D.dDz=w([D.eK5,D.eKh,D.eKp],x.n)
D.d6J=w(["\u265b","\u2766","\u2726"],x.s)
D.e_e=new C.yh("Ruby Throne",D.dDz,4293378685,4294963145,4294964466,3874213833,D.d6J)
D.eK_=new B.y(4279371039,4281995100)
D.eK9=new B.y(4280092723,4278714896)
D.eKm=new B.y(4283045242,4279371039)
D.dzB=w([D.eK_,D.eK9,D.eKm],x.n)
D.dxA=w(["\u2655","\u2756","\u2727"],x.s)
D.e_j=new C.yh("Amethyst Palace",D.dzB,4293314984,4294963421,4294702591,3873229802,D.dxA)
D.eJB=new B.y(4278519045,4280032287)
D.eJT=new B.y(4279111184,4278321666)
D.eKe=new B.y(4280492839,4278716426)
D.dvS=w([D.eJB,D.eJT,D.eKe],x.n)
D.dmz=w(["\u2726","\u25c6","\u2742"],x.s)
D.e_g=new C.yh("Obsidian & Platinum",D.dvS,4293256418,4294967295,4294638330,3872378836,D.dmz)
D.eK6=new B.y(4279896588,4282194463)
D.eKf=new B.y(4280553487,4279043334)
D.eKn=new B.y(4283048488,4279896588)
D.dm_=w([D.eK6,D.eKf,D.eKn],x.n)
D.dBA=w(["\u2766","\u273f","\u2727"],x.s)
D.e_d=new C.yh("Rose Gold Velvet",D.dm_,4293440672,4294960345,4294964979,3874214602,D.dBA)
D.eJC=new B.y(4278520340,4279180595)
D.eJH=new B.y(4278718495,4278322443)
D.eK3=new B.y(4279510591,4278520340)
D.cVZ=w([D.eJC,D.eJH,D.eK3],x.n)
D.dnj=w(["\u269c","\u2736","\u2756"],x.s)
D.e_h=new C.yh("Midnight Brass",D.cVZ,4291405148,4293975208,4294439914,3872837564,D.dnj)
D.eKC=new B.y(4294703086,4293780428)
D.eKy=new B.y(4294307549,4293187253)
D.eKD=new B.y(4294966517,4293977807)
D.d97=w([D.eKC,D.eKy,D.eKD],x.n)
D.dnI=w(["\u269c","\u265b","\u2726"],x.s)
D.e_k=new C.yh("Ivory Marble & Gold",D.d97,4289760572,4286209048,4280951062,3863625518,D.dnI)
D.eJN=new B.y(4278978566,4280555024)
D.eK2=new B.y(4279504137,4278518530)
D.eKj=new B.y(4281211923,4278978566)
D.d6z=w([D.eJN,D.eK2,D.eKj],x.n)
D.dyn=w(["\u2742","\u2726","\u265c"],x.s)
D.e_f=new C.yh("Onyx & Copper",D.d6z,4291856987,4294365880,4294964718,3873885630,D.dyn)
D.cPI=w([D.e_l,D.e_i,D.e_c,D.e_e,D.e_j,D.e_g,D.e_d,D.e_h,D.e_k,D.e_f],B.at("O<yh>"))
D.cS8=w([A.aF,D.Cg,A.i8],x.O)
D.eSw=new B.y("Original",null)
D.eSG=new B.y("Wide 16:9",1.7777777777777777)
D.eV5=new B.y("Landscape 3:2",1.5)
D.eRX=new B.y("Photo 4:3",1.3333333333333333)
D.f5Y=new B.y("Portrait 3:4",0.75)
D.aAT=w([D.eSw,D.eSG,D.eV5,D.eRX,M.aSJ,D.f5Y],B.at("O<+(n,F?)>"))
D.aAU=w([A.i8,A.c4,A.ba,A.bh],x.O)
D.eVh=new B.y("","Original")
D.eXb=new B.y("circle","Circle")
D.f2R=new B.y("rounded","Rounded")
D.f3T=new B.y("triangle","Triangle")
D.eZh=new B.y("hexagon","Hexagon")
D.eXC=new B.y("diamond","Diamond")
D.eWr=new B.y("arch","Arch")
D.DR=w([D.eVh,D.eXb,D.f2R,D.f3T,D.eZh,D.eXC,D.eWr],x.L)
D.dVc=new C.lD("classic_blue","Classic Blue","Normal",A.bp,A.c,A.lm,A.dh,A.aL)
D.dVs=new C.lD("campus_green","Campus Green","Normal",A.b2,A.nu,A.uu,A.hk,A.cR)
D.dVj=new C.lD("warm_sand","Warm Sand","Normal",A.e3,A.hM,A.bL,A.ia,A.oj)
D.dVq=new C.lD("slate_minimal","Slate Minimal","Normal",A.by,A.aS,A.bm,A.a_,A.aL)
D.dVb=new C.lD("coral_fresh","Coral Fresh","Normal",A.c9,A.hX,A.qg,A.k1,A.un)
D.dVr=new C.lD("lavender_calm","Lavender Calm","Normal",A.b8,A.pl,A.on,A.mR,A.kw)
D.dVd=new C.lD("ocean_breeze","Ocean Breeze","Normal",A.fq,A.rV,A.we,A.rF,A.ol)
D.ako=new B.t(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dVo=new C.lD("berry_pop","Berry Pop","Normal",A.fe,D.ako,A.kO,G.a_V,A.Cn)
D.dVe=new C.lD("midnight_pro","Midnight Pro","Professional",A.aD,A.a_,A.dA,A.kO,A.cA)
D.dVn=new C.lD("executive_navy","Executive Navy","Professional",A.d9,A.ajz,A.dh,A.lk,A.bP)
D.dVl=new C.lD("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.bs,A.a_,A.aS,A.cA)
D.dVf=new C.lD("corporate_steel","Corporate Steel","Professional",A.oo,A.a_,A.mc,A.ft,A.bP)
D.dVi=new C.lD("gold_luxe","Gold Luxe","Luxury",A.mO,A.dW,A.pn,A.or,A.bL)
D.bsl=new B.t(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dVm=new C.lD("rose_gold_elite","Rose Gold Elite","Luxury",A.hJ,D.bsl,A.a_B,A.ix,A.pg)
D.dVp=new C.lD("platinum_night","Platinum Night","Luxury",A.cA,A.dR,A.bs,A.aS,A.bm)
D.dVt=new C.lD("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.qm,A.ff,A.qu,A.jY)
D.dVa=new C.lD("royal_purple","Royal Purple","Luxury",A.ns,A.ZA,A.kw,A.kO,A.ML)
D.dVk=new C.lD("neon_pitch","Neon Pitch","Bold",A.ba,A.dR,A.a_,A.b_,A.bm)
D.dVh=new C.lD("crimson_impact","Crimson Impact","Bold",A.bD,A.kz,A.eq,A.rW,A.eV)
D.dVg=new C.lD("sunset_gallery","Sunset Gallery","Bold",A.fL,A.un,A.k1,A.qg,A.mV)
D.IL=w([D.dVc,D.dVs,D.dVj,D.dVq,D.dVb,D.dVr,D.dVd,D.dVo,D.dVe,D.dVn,D.dVl,D.dVf,D.dVi,D.dVm,D.dVp,D.dVt,D.dVa,D.dVk,D.dVh,D.dVg],B.at("O<lD>"))
D.d2V=w([A.c3,D.jH],x.O)
D.dmg=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eWb=new B.y("Faces & people",D.dmg)
D.cSc=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eIl=new B.y("Ideas & work",D.cSc)
D.dbX=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eZm=new B.y("Nature",D.dbX)
D.dmp=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eSu=new B.y("Places & things",D.dmp)
D.dfF=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eWw=new B.y("Symbols",D.dfF)
D.d30=w([D.eWb,D.eIl,D.eZm,D.eSu,D.eWw],B.at("O<+(n,ai<n>)>"))
D.aiA=new B.t(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.bhz=new B.t(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d3n=w([A.c3,D.aiA,D.bhz],x.O)
D.bbi=new B.ab(0,A.G,A.G_,A.aMY,40)
D.baV=new B.ab(0,A.G,A.pi,A.et,8)
D.d3D=w([D.bbi,D.baV],x.V)
D.d4b=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aBh=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a62=w([A.i8,A.ep,A.bD,A.av,A.c9],x.O)
D.d5a=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aiQ=new B.t(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d5n=w([A.a_p,D.aiQ,A.a_p],x.O)
D.d5s=w([A.iy,D.jH,D.MU],x.O)
D.eSg=new B.y(A.b6,D.a3G)
D.eTJ=new B.y(A.K,D.a3F)
D.eNj=new B.y(A.e2,D.a3H)
D.d6t=w([D.eSg,D.eTJ,D.eNj],B.at("O<+(qv,a_)>"))
D.d6w=w([A.b8,A.aD],x.O)
D.e_E=new C.hE(36,"exactKijiji")
D.alB=new B.t(1,0.9647058823529412,0.9058823529411765,0.7686274509803922,A.q)
D.hPN=w([D.alB,D.YR,D.wq],x.O)
D.Ep=new C.vg(12,"exact")
D.a8C=new C.hb("exact_kijiji","Mkataba wa Ndoa \u2014 Kijiji","Wanandoa \xb7 wazee na nyumba \xb7 mikuki na ngoma.",D.e_E,4294371268,4280949264,4286192418,D.Ep)
D.e_F=new C.hE(37,"exactKifalme")
D.ahg=new B.t(1,0.0784313725490196,0.1411764705882353,0.30980392156862746,A.q)
D.hPj=w([D.alB,D.ahg,D.wq],x.O)
D.a8E=new C.hb("exact_kifalme","Mkataba wa Ndoa \u2014 Kifalme","Wanandoa \xb7 taji na bendera \xb7 mapazia ya bluu.",D.e_F,4294371268,4280949264,4279510095,D.Ep)
D.d7f=w([D.a8C,D.a8E],x.h)
D.d1=new C.JL(0,"text")
D.kj=new C.JL(1,"image")
D.eM=new C.JL(2,"shape")
D.Uo=new C.JL(3,"pdf")
D.lw=new C.JL(4,"signature")
D.a9g=new C.JL(5,"bio")
D.d7v=w([D.d1,D.kj,D.eM,D.Uo,D.lw,D.a9g],B.at("O<JL>"))
D.d7w=w([A.bo,A.cL],B.at("O<ID>"))
D.d8a=w(["School","Documents","Sign & present"],x.s)
D.bbo=new B.ab(0,A.G,A.al1,A.vE,28)
D.d8y=w([D.bbo],x.V)
D.d8S=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Sr=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aBI=w([A.i8,A.GQ,A.bm,A.c,A.po,A.aF],x.O)
D.eH7=new B.y(0,4289230878)
D.eUQ=new B.y(0.22,4294237318)
D.eV_=new B.y(0.42,4293048394)
D.f33=new B.y(0.78,4291402286)
D.eI2=new B.y(1,4287916053)
D.a6g=w([D.eH7,D.eUQ,D.eV_,D.f33,D.eI2],B.at("O<+(F,G)>"))
D.e_G=new C.hE(38,"exactCurtain")
D.btr=new B.t(1,0.0784313725490196,0.18823529411764706,0.49411764705882355,A.q)
D.byt=new B.t(1,0.8509803921568627,0.6901960784313725,0.2901960784313726,A.q)
D.bla=new B.t(1,0.9568627450980393,0.9019607843137255,0.7764705882352941,A.q)
D.hP6=w([D.btr,D.byt,D.bla],x.O)
D.a8O=new C.hb("photo_curtain","Pazia la Kifalme","Mapazia ya bluu \xb7 bendera \xb7 ngoma.",D.e_G,4279513214,4294176480,4294102634,D.Ep)
D.e_H=new C.hE(39,"exactVillage")
D.bqa=new B.t(1,0.9529411764705882,0.8666666666666667,0.7333333333333333,A.q)
D.bqA=new B.t(1,0.3568627450980392,0.16470588235294117,0.08627450980392157,A.q)
D.bn1=new B.t(1,0.7529411764705882,0.2235294117647059,0.16862745098039217,A.q)
D.hPT=w([D.bqa,D.bqA,D.bn1],x.O)
D.a8G=new C.hb("photo_village","Kijiji na Wanandoa","Wanandoa \xb7 mnazi na nyumba \xb7 kitenge.",D.e_H,4294172091,4281014802,4284164630,D.Ep)
D.e_J=new C.hE(40,"exactSunset")
D.bie=new B.t(1,0.22745098039215686,0.10196078431372549,0.06274509803921569,A.q)
D.btg=new B.t(1,0.8784313725490196,0.47843137254901963,0.16470588235294117,A.q)
D.bmr=new B.t(1,0.9490196078431372,0.7803921568627451,0.3607843137254902,A.q)
D.hPa=w([D.bie,D.btg,D.bmr],x.O)
D.a8V=new C.hb("photo_sunset","Machweo ya Savana","Machweo \xb7 njiwa \xb7 ramani ya Kongo \xb7 ngoma.",D.e_J,4294371784,4280949264,4294100828,D.Ep)
D.e_K=new C.hE(41,"exactRoses")
D.bh8=new B.t(1,0.9686274509803922,0.9411764705882353,0.8862745098039215,A.q)
D.hPU=w([D.bh8,D.ahg,D.Z2],x.O)
D.a8S=new C.hb("photo_roses","Waridi na Pete","Waridi nyeupe \xb7 pete za dhahabu \xb7 mpaka wa bluu.",D.e_K,4294439138,4280033848,4279510095,D.Ep)
D.das=w([D.a8O,D.a8G,D.a8V,D.a8S],x.h)
D.f5l=new B.y(0.1,0.08)
D.eZk=new B.y(0.3,0.05)
D.eMM=new B.y(0.55,0.1)
D.eRc=new B.y(0.8,0.06)
D.eUu=new B.y(0.92,0.16)
D.eTY=new B.y(0.2,0.2)
D.eRH=new B.y(0.7,0.22)
D.eXZ=new B.y(0.05,0.4)
D.eUX=new B.y(0.95,0.45)
D.eNz=new B.y(0.12,0.7)
D.ePT=new B.y(0.88,0.75)
D.eQ0=new B.y(0.4,0.9)
D.eKU=new B.y(0.65,0.93)
D.eQP=new B.y(0.25,0.97)
D.eSd=new B.y(0.85,0.9)
D.eOs=new B.y(0.5,0.04)
D.day=w([D.f5l,D.eZk,D.eMM,D.eRc,D.eUu,D.eTY,D.eRH,D.eXZ,D.eUX,D.eNz,D.ePT,D.eQ0,D.eKU,D.eQP,D.eSd,D.eOs],x.G)
D.daH=w([A.c,A.hJ,A.aH,A.aV],x.O)
D.elW=new C.k3("office_blue","Office Blue",A.bp,A.dh,A.aL,A.c,A.lm)
D.em6=new C.k3("campus_green","Campus Green",A.b2,A.hk,A.cR,A.nu,A.uu)
D.elX=new C.k3("sunset","Sunset",A.fL,A.k1,A.oj,A.hX,A.qg)
D.elY=new C.k3("midnight","Midnight",A.aD,A.kO,A.cA,A.a_,A.dA)
D.em8=new C.k3("classic","Classic",A.d6,A.dW,A.ma,A.hM,A.fZ)
D.em5=new C.k3("rose_gold","Rose Gold",A.hJ,A.yE,A.yD,A.ww,A.Cm)
D.elR=new C.k3("ocean_teal","Ocean Teal",A.fq,A.rF,A.ol,A.rV,A.we)
D.elQ=new C.k3("slate_pro","Slate Pro",A.by,A.a_,A.aL,A.aS,A.bm)
D.elP=new C.k3("neon_night","Neon Night",A.ba,A.b_,A.bm,A.dR,A.a_)
D.em0=new C.k3("lavender","Lavender",A.b8,A.mR,A.kw,A.pl,A.on)
D.em2=new C.k3("coral","Coral",A.c9,A.k1,A.un,A.hX,A.mV)
D.elS=new C.k3("forest","Forest",A.hK,A.ec,A.ct,A.mb,A.ew)
D.elT=new C.k3("berry","Berry",A.fe,G.a_V,A.Cn,D.ako,A.kO)
D.em_=new C.k3("sand","Sand",A.e3,A.ia,A.oj,A.hM,A.bL)
D.em4=new C.k3("ice","Ice",A.oo,A.Gl,A.aL,A.ok,A.ft)
D.elV=new C.k3("charcoal","Charcoal",A.an,A.aS,A.cA,A.bs,A.a_)
D.elO=new C.k3("mint","Mint",A.aV,A.fX,A.hk,A.mb,A.qu)
D.em3=new C.k3("crimson","Crimson",A.bD,A.nw,A.kz,A.GO,A.rW)
D.bkz=new B.t(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.elZ=new C.k3("gold","Gold",A.mO,A.wi,A.pn,D.bkz,A.or)
D.em1=new C.k3("aqua","Aqua",A.bU,A.yz,A.pj,A.qj,A.pp)
D.elU=new C.k3("plum","Plum",A.ns,A.yB,A.Cn,A.Gm,A.rQ)
D.em7=new C.k3("steel","Steel",A.d9,A.dh,A.bs,A.lm,A.lk)
D.a6j=w([D.elW,D.em6,D.elX,D.elY,D.em8,D.em5,D.elR,D.elQ,D.elP,D.em0,D.em2,D.elS,D.elT,D.em_,D.em4,D.elV,D.elO,D.em3,D.elZ,D.em1,D.elU,D.em7],B.at("O<k3>"))
D.db4=w([A.c3,A.jI],x.O)
D.Uq=new C.hM(10,"rotate3d")
D.JL=new C.hM(8,"flip")
D.aMq=new C.hM(19,"spiral")
D.r7=new C.hM(16,"bounce")
D.aMt=new C.hM(9,"flipVertical")
D.db5=w([D.Uq,D.JL,D.aMq,D.r7,D.aMt],x.i)
D.em=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.dc5=w([0,0.32,0.68,1],x.x)
D.na=new C.hM(6,"zoom")
D.vy=new C.hM(4,"slideUp")
D.vx=new C.hM(2,"slideLeft")
D.dcg=w([D.na,D.JL,D.vy,D.Uq,D.vx],x.i)
D.dcN=w([A.c4,A.hJ,A.ix,A.i8,A.c],x.O)
D.bbc=new B.ab(0,A.G,D.ZO,A.vE,30)
D.ddB=w([D.bbc],x.V)
D.exx=new B.r(0,-2.5)
D.exo=new B.r(-2.5,0)
D.evB=new B.r(2.5,0)
D.ddE=w([A.UE,A.a9H,A.aNB,A.a9G,D.exx,A.a9J,D.exo,D.evB],x.dN)
D.IU=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.de9=w([23,114,69,56,80,144],x.t)
D.deE=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.df5=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dgS=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.a96=new C.hE(2,"elegantNavy")
D.hPS=w([A.a_e,D.jH,A.c3],x.O)
D.a8U=new C.hb("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a96,4294967035,4279378237,4290283019,D.ki)
D.aM7=new C.hE(3,"elegantGold")
D.bgZ=new B.t(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bic=new B.t(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.hPb=w([D.bgZ,D.bic,D.aiA],x.O)
D.a8R=new C.hb("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aM7,4294966515,4281016592,4289102906,D.ki)
D.e_I=new C.hE(4,"elegantEmerald")
D.bjA=new B.t(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bkA=new B.t(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hPl=w([D.bjA,D.bkA,A.iy],x.O)
D.a8H=new C.hb("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.e_I,4294376440,4279122734,4291404327,D.ki)
D.e_L=new C.hE(5,"elegantBurgundy")
D.bp7=new B.t(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hPt=w([D.bp7,A.ahG,A.iy],x.O)
D.a8P=new C.hb("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.e_L,4294965238,4283043359,4291404327,D.ki)
D.e_M=new C.hE(6,"beadedPearl")
D.bqk=new B.t(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hPO=w([H.a_A,D.bqk,A.iy],x.O)
D.aLz=new C.hb("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.e_M,4294966774,4286209070,4291404327,D.ki)
D.e_N=new C.hE(7,"artDeco")
D.buY=new B.t(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.byd=new B.t(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hPJ=w([D.buY,D.byd,A.c3],x.O)
D.aLA=new C.hb("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.e_N,4294440434,4280228630,4290283019,D.ki)
D.e_O=new C.hE(8,"rosetteCorners")
D.bxd=new B.t(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bkU=new B.t(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bqd=new B.t(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hPk=w([D.bxd,D.bkU,D.bqd],x.O)
D.aLy=new C.hb("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.e_O,4294702831,4285218602,4291394365,D.ki)
D.e_P=new C.hE(9,"modernLedger")
D.hPi=w([A.c,D.jH,D.jH],x.O)
D.aLx=new C.hb("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.e_P,4294967295,4279378237,4279378237,D.ki)
D.SC=w([D.a8U,D.a8R,D.a8A,D.a8F,D.a8H,D.a8P,D.a8L,D.a8M,D.a8T,D.a8Q,D.a8J,D.a8D,D.a8I,D.a8B,D.a8K,D.a8N,D.a8W,D.a8O,D.a8G,D.a8V,D.a8S,D.a8C,D.a8E,D.aLz,D.aLA,D.aLy,D.aLx],x.h)
D.dgX=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bb=new C.vl(0,"rectangle")
D.eZ=new C.vl(1,"circle")
D.lx=new C.vl(6,"hexagon")
D.dhc=w([D.bb,D.eZ,D.lx],x.gB)
D.oX=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.akx=new B.t(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dhN=w([D.akx,A.ec],x.O)
D.di6=w(["exact_curtain","exact_curtain_notitle","exact_village","exact_village_notitle","exact_sunset","exact_sunset_notitle","exact_roses","exact_roses_notitle","exact_kijiji","exact_kijiji_notitle","exact_kifalme","exact_kifalme_notitle"],x.s)
D.eN2=new B.y("","Classic")
D.eL8=new B.y("caps","Bold caps")
D.eY1=new B.y("elegant","Elegant")
D.f3c=new B.y("shadow","Shadow")
D.eRA=new B.y("neon","Neon glow")
D.f0Q=new B.y("marker","Highlighter")
D.f3q=new B.y("stamp","Stamp")
D.eQr=new B.y("threed","3D")
D.eYx=new B.y("fire","Fire")
D.eZx=new B.y("ice","Ice")
D.eXa=new B.y("chalk","Chalk")
D.eXf=new B.y("comic","Comic")
D.f4I=new B.y("softglow","Soft glow")
D.f_C=new B.y("lowercase","Lowercase")
D.eXK=new B.y("double","Echo")
D.f4S=new B.y("whisper","Whisper")
D.aCF=w([D.eN2,D.eL8,D.eY1,D.f3c,D.eRA,M.aSU,D.f0Q,D.f3q,M.aSW,D.eQr,M.aSO,D.eYx,D.eZx,D.eXa,D.eXf,A.Va,Ay.aSX,D.f4I,D.f_C,D.eXK,D.f4S],x.L)
D.dj9=w([3,5,7,10,12,15],x.t)
D.dkL=w([A.c4,A.bL,A.c,A.ey,A.cP],x.O)
D.dLM=new C.tS(10,"cardWorld")
D.Em=new C.Cd(3,"rounded")
D.e2C=new C.lG("world","NGMY World",D.dLM,D.Em,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dLN=new C.tS(11,"cardSplit")
D.e2y=new C.lG("business","Business Wire",D.dLN,D.Em,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dLO=new C.tS(12,"cardBreaking")
D.e2L=new C.lG("breaking","Breaking Red",D.dLO,D.Em,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dLP=new C.tS(13,"cardFeature")
D.e2E=new C.lG("feature","Tech Feature",D.dLP,D.Em,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aL3=new C.tS(6,"circle")
D.aKY=new C.Cd(4,"circle")
D.e2I=new C.lG("parchment","Royal Circle",D.aL3,D.aKY,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.e2x=new C.lG("ocean","Blue Ocean",D.aL3,D.aKY,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dLS=new C.tS(7,"rail")
D.aKX=new C.Cd(1,"double")
D.e2z=new C.lG("forest","Green Leaf",D.dLS,D.aKX,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aL0=new C.tS(1,"sideBySide")
D.e2N=new C.lG("herald","NGMY Herald",D.aL0,D.Em,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aL_=new C.tS(0,"classic")
D.a8e=new C.Cd(9,"shadow")
D.e2M=new C.lG("daily","The Daily",D.aL_,D.a8e,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dLQ=new C.tS(2,"splash")
D.aKZ=new C.Cd(6,"cutCorner")
D.e2w=new C.lG("tabloid","Big Tabloid",D.dLQ,D.aKZ,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aL4=new C.tS(9,"minimal")
D.e2H=new C.lG("modern","Modern Digest",D.aL4,D.Em,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aL1=new C.tS(3,"magazine")
D.aKW=new C.Cd(0,"plain")
D.e2D=new C.lG("midnight","Midnight Edition",D.aL1,D.aKW,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dLT=new C.tS(8,"banner")
D.e2F=new C.lG("metro","Metro Wire",D.dLT,D.aKZ,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dLL=new C.Cd(8,"arch")
D.e2G=new C.lG("sunrise","Sunrise Post",D.aL1,D.dLL,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aL2=new C.tS(5,"scrapbook")
D.dLK=new C.Cd(5,"tape")
D.e2B=new C.lG("neon","Neon Beat",D.aL2,D.dLK,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dLR=new C.tS(4,"wrap")
D.e2O=new C.lG("gold","Golden Press",D.dLR,D.a8e,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.e2P=new C.lG("minimal","Paper White",D.aL4,D.a8e,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.e2A=new C.lG("gazette","Fresh Gazette",D.aL_,D.aKX,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.e2K=new C.lG("times","Classic Times",D.aL0,D.aKW,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.TV=new C.Cd(2,"polaroid")
D.e2J=new C.lG("scrapbook","Memory Scrapbook",D.aL2,D.TV,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a6B=w([D.e2C,D.e2y,D.e2L,D.e2E,D.e2I,D.e2x,D.e2z,D.e2N,D.e2M,D.e2w,D.e2H,D.e2D,D.e2F,D.e2G,D.e2B,D.e2O,D.e2P,D.e2A,D.e2K,D.e2J],B.at("O<lG>"))
D.dkY=w([0.45,1],x.x)
D.J_=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dln=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hKh=new C.p2("Original",0,1,1,0,0,0)
D.hKl=new C.p2("Black & white",0,1.1,0,0,0,0)
D.hK8=new C.p2("Noir",-0.05,1.55,0,0,0,0)
D.hKc=new C.p2("Sepia",0,1,0.25,0.9,0,0)
D.hKb=new C.p2("Vivid",0,1.15,1.6,0,0,0)
D.hK4=new C.p2("Pop",0,1.3,1.9,0,0,0)
D.hK6=new C.p2("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hKi=new C.p2("Matte",0,0.9,0.85,0,0,0.55)
D.hKd=new C.p2("Cool",0,1.05,1,-0.8,0,0)
D.hKk=new C.p2("Warm",0.03,1.05,1.1,0.8,0,0)
D.hK5=new C.p2("Golden hour",0.04,1,1.25,1,0,0)
D.hKa=new C.p2("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hKj=new C.p2("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hK9=new C.p2("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hKf=new C.p2("Retro",0,0.9,0.7,0.4,0,0.35)
D.hKe=new C.p2("Forest",0,1,1.2,-0.1,-0.45,0)
D.hKg=new C.p2("Rose",0,1,1.1,0.3,0.4,0)
D.hK7=new C.p2("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dlo=w([D.hKh,D.hKl,D.hK8,D.hKc,D.hKb,D.hK4,D.hK6,D.hKi,D.hKd,D.hKk,D.hK5,D.hKa,D.hKj,D.hK9,D.hKf,D.hKe,D.hKg,D.hK7],B.at("O<p2>"))
D.bgS=new B.t(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dlq=w([D.akx,A.ec,D.bgS],x.O)
D.eIe=new B.y(0.12,0.3)
D.eZI=new B.y(0.26,0.75)
D.eXY=new B.y(0.8,0.22)
D.f3C=new B.y(0.9,0.7)
D.f_B=new B.y(0.5,0.15)
D.f1L=new B.y(0.65,0.85)
D.eOX=new B.y(0.08,0.85)
D.dlH=w([D.eIe,D.eZI,D.eXY,D.f3C,D.f_B,D.f1L,D.eOX],x.G)
D.aCT=w([A.ba,A.c4,A.bh,A.be],x.O)
D.dmD=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dmR=w([A.c,A.ft,A.dy,A.wl],x.O)
D.bkP=new B.t(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dnV=w([D.bkP,D.aiQ],x.O)
D.dnX=w([A.ur,A.aF],x.O)
D.doc=w([0,0.25,0.75,1],x.x)
D.doe=w([A.yr,A.po],x.O)
D.dom=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. A member counts as contributed however their app login is linked to their registry record: the same email, the registry number, the linked app email set with the ID card, a granted ID card with the same phone, the app login the registrar writes into each contribution, or the mark the registrar puts on the member record (gave this much to this campaign). Instead of the ask, twice a day when the app opens (once before noon and once after noon), until the contribution is over, that person gets a Swahili orange pop-up, Hongera, with their name in a gold frame (MCHANGIAJI), the amount they contributed and what it was for.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","HOUSE CARE CARD DOWNLOAD AND REGISTRAR VIEW ONLY: in the Help Center, House and insurance, House Care, a member sees the very same House Care card as on the home screen (due date, status, name, price and agreement) with a white round download button that saves the card as a picture. The price and agreement line (for example 25 dollars a month and 1-year agreement) sits on the right of the name, as before, and is always shown whole (the name gives way first). An Authorized Registrar who opens another state with that state code sees Search, Rankings and a Members list marked view only, with a yellow View only banner: they can look but cannot enroll, edit, remove, manage cities, help mode or anything else there. Their registrar tools work only in their home state.","AUTHORIZED REGISTRAR STATE CODE POP-UP: when an Authorized Registrar changes to another state, a redesigned pop-up asks for that state Civic Registry code: a purple shield badge, the move shown as two chips (your state, arrow, the new state), a rounded code field with a key icon and a show or hide eye, a red line if the code is wrong, a reminder that registrar tools stay in the home state, and a big Verify and Change button with Cancel under it. Light and dark mode.","MENUS OPEN AT ONCE: a few seconds after the home screen opens, NGMY quietly loads every big menu in the background (Growth Income, the Vault Arcade, the Core Protocol and the Construction Lab, Studio tools like invoices and video, the Market Hub, Help Center, State Wallet, Menu Studio and more), one after another, from the copy already stored on the phone. So no menu shows a loading circle the first time it is opened after the app starts. It costs no data and needs no internet once the app was opened online before.","NGMY ADS ON THE LAB TVS: in Core Protocol, the Electronics Lab TVs, phones and screens (and the TVs in the Construction Lab houses and the city) play NGMY ads made like real TV commercials. There are 14 ads, one for each NGMY feature: Civic Registry, Jobs and Help, NGMY Store, Kiswahili School, Document Scanner, Invoices, Family Tree, Wallet, Game Center, Electronics Lab, Advisors, Construction Lab, Creator Hub and Business Cards. Each ad is ten seconds: a real looking phone turns in 3D in a lit studio and shows the feature working on its screen, then a 3D coin, card or medal spins, then the end card with the NGMY name and an Open NGMY button. On the big TV screen (tap a lab TV 3 times quickly) you can tap the picture to spin the phone or the coin, swipe left or right for the next or the previous ad (the ADS key on the remote opens all 14), and tap the small Learn more button on the right of the name bar at the bottom of the picture to see what the feature does and where to find it in NGMY, with a Watch again button. The X, the full screen button next to it and the remote always show above the TV picture (on phones and on computers too), with the name box under it. The full screen button makes the TV fill the whole screen, like NGMY Slides; in full screen the remote is hidden, and a double tap hides all the buttons and another double tap brings them back. Two channels changed name: channel 9 is now NGMY Civic Registry and channel 10 is NGMY Creator Hub.","LAB DEVICE BIG SCREENS: every device with a screen in the Electronics Lab opens a big screen with the same buttons: the TVs, the phones, the tablets, the Kindle, the MacBook, the iMac, the monitors, the projector, the car screen, the Vision Pro and the Apple Watch. At the top there is the X, the full screen button next to it and the name of the device, and under them a remote (on the TVs: channel minus, channel plus, TV, APPS and ADS; on the other devices: the previous ad, the next ad, HOME and ADS). These always show, on phones and on computers. The full screen button makes the screen fill the whole window like NGMY Slides; in full screen the remote is hidden, and a double tap hides all the buttons and another double tap brings them back. When an ad plays, a small Learn more button sits in the name bar under the picture (on a computer it is on the right of the app window bar), and tapping the ad spins the phone or the coin.","SPARK ADVENTURE AND LESSON BOX: channel 6 of the lab TVs, Spark Adventure, is a short 3D film: a real looking circuit board with a battery, a switch, a resistor, a capacitor, NGMY chips and a glass bulb. The switch closes, a glowing spark races along the gold track, the bulb lights up when it arrives, and the end card says Build it yourself in the NGMY Electronics Lab. In full screen on a phone, the X and the name at the top sit lower, below the phone clock. In a Construction Lab lesson room, tapping the red box that says Tap the red one to wire it twice quickly opens the wiring work straight away.","SMOOTH AND SHARP SCREENS: the little TV, phones and screens on the Electronics Lab board show the whole real ad (not just an icon), and every screen is crystal clear with no scan lines. The TVs, frames and screens in the Construction Lab rooms, the lessons and NGMY City show their ads from a picture that is made again about twenty times a second (a few times a second for small far ones), as sharp as the pixels of the phone where it shows, and reused in between, and up close all the patches of a big screen share that one picture. The words on the ads are laid out once and reused. So turning, zooming, going behind a TV or walking past screens stays smooth. Opening a lesson or a job in the Construction Lab is smooth from the first second too: the people (the X Bot, the Dancer and the Soldier) are made ready beforehand and kept as small files, so the phone no longer stops for a second at a time while their skin pictures and bodies are worked out, they are read as soon as the Construction Lab opens, and a screen growing as the camera glides in keeps the same picture size instead of a new one every frame. In a room the camera never goes out through a wall: after zooming in on something on a wall (like the red outlet) and turning, it stops at the wall and turns where it stands, so you see the other walls of the room, never the room from outside or the back of the TV.","ROOM MENU IN TWO LINES: in Construction Lab rooms, lessons and jobs the menu under the title is just two thin lines of small buttons that slide sideways. Line one has the room actions (see the whole room, look up at the ceiling, look all round, TV, tester, do the lesson). Line two has what fits the outlet being fixed (outlet lessons), then Look, Furniture, Walls, Floor, Ceiling, Doors, Learn and the doors to other rooms; in another mode it shows Look, that mode and its tools. Full screen is a small icon next to the search icon by the title.","NO MORE THUMPING: tapping a menu in a Construction Lab room (look up at the ceiling, see the whole room, walls, floor and the rest) no longer makes the screen jerk again and again. A TV ad in a room is drawn straight into the one picture the room keeps of it (it used to be made twice and copied), it is made again 12 times a second at most a million pixels, and after a slow moment the camera carries on gently instead of jumping.","SMOOTH SCROLLING IN SLIDES: the Your presentations list stops its card glow while you swipe up and down and each card is drawn on its own, the paper picker cards are drawn once, and an open document page no longer redraws when the timer ticks, so scrolling and opening documents is smooth.","NO MORE SHAKING: when a menu button in a room (look up at the ceiling, see the whole room and the others) moves the view to a spot past a wall, the camera now stops at the wall and comes to rest smoothly. Before, the camera and the wall pulled against each other every frame, so the zoom wobbled back and forth and the screen kept vibrating until you touched it.","HATI DOWNLOAD BUTTON: in NGMY Slides, the small download icon at the top of a document (Hati ya Kuhowa, Hati ya Kuhoweya, Malipo ya Awamu, Kiapo and the marriage papers) now downloads the proper PDF of the page, the same as the PDF button. For a normal presentation it still downloads a video, and while the video is made the page is drawn off the screen, so it never fills the phone zoomed in.","ROYAL HATI PAPERS: Hati ya Kuhowa, Hati ya Kuhoweya and Malipo ya Awamu have seven royal papers near the bottom of the paper picker: Kifalme Nyekundu (maroon band with gold diamonds), Dhahabu na Krimu (cream with shiny gold bars and a seal with a ribbon), Zumaridi na Dhahabu (dark emerald), Bluu ya Usiku (dark navy), Zambarau ya Kifalme (plum), Mkaa na Dhahabu (black and gold) and Bahari ya Kifalme (teal band). Each has coloured NIMETOWA and MASHAHIDI bars, round number coins, shaded rows, two witness cards, MWANDISHI with a gold seal and a footer bar with the state. Filling in, signing, AKUNA DENI, hiding the 4th item and moving names between Kuhowa and Kuhoweya work the same as on the other papers. On the dark papers a signature starts in light gold ink so it shows.","HATI PICTURE PAPERS: four papers near the bottom of the Hati paper picker are the owner own designs from one picture of four, used exactly as drawn (nothing redrawn): Pazia la Kifalme (blue curtains, the flag, drums), Kijiji na Wanandoa (the couple, a palm tree and a hut, kente border), Machweo ya Savana (sunset, acacia trees, golden doves, the Congo map, drums) and Waridi na Pete (white roses, gold rings, navy and gold frame). Only the changing words are written in on their own spots: the date, the opening paragraph, the section word, the four items, AKUNA DENI, the witness names and signatures, MWANDISHI, and on the curtain paper the state. The village, sunset and roses footers keep their own mottos. On Kijiji na Wanandoa the couple can also be painted with the family own faces (Couple picture AI).","PIN A HATI PAPER: in a Hati ya Kuhowa, Kuhoweya or Malipo ya Awamu document, tap the three dots next to Play. The menu (redesigned, with an icon and the current setting for each choice) ends with Pin this paper. A pinned paper comes first in the paper picker; up to 4 papers can be pinned, in the order they were pinned. To unpin, open a document on that paper, tap the three dots and choose Unpin this paper. Pins are kept on the phone and nothing is drawn on the paper itself.","EXACT HATI PAPERS: two papers at the bottom of the Hati paper picker are the owner own full-page designs used exactly as drawn, in their own A4 page shape: Mkataba wa Ndoa Kijiji (the couple with the spear, the elders and the hut, maroon and gold, spears and drums) and Mkataba wa Ndoa Kifalme (the couple with the staff, the crown and the flag, doves, carved figures, navy curtains and white roses). Only the changing words are written in by the app: the date, the opening paragraph, NIMETOWA (or NIMEPOKEYA CASH, MALIPO YALIYOSALIA), the four items, AKUNA DENI, the witness names and signatures on their lines, MWANDISHI and the state under EMO YA MBONDO. Hati ya Kuhowa keeps the design own gold title; Kuhoweya and Malipo write their own title in gold.","HATI COUPLE PICTURE (AI): on the two exact Hati papers the couple at the top is the default picture. Tap the three dots next to Play and choose Couple picture (AI): add a photo of the man and a photo of the woman, tap Make our picture, and the AI paints the same traditional picture (same clothes, pose and background) with their own faces and lays it into the paper. Put the original picture back returns the default couple.","CREATE INVOICE AND THE IRON TRIANGLE: in Create Invoice the fields are grouped in frames with an icon and a title (Invoice details, Your business, Bill to and more) in BOTH light mode and dark mode; in dark mode the frames are deep night purple with a purple edge and the fields are rounded with purple icons. The Iron Triangle (FAST, CHEAP, GOOD - pick any two) is a brushed steel plate the size and shape of a bank card: the triangle and its name on the left, the three switches on the right, and the result on a dark steel plate UNDER the card (not inside it); the green Quote Calc frame fits the card and the plate with no empty space. The Quote Calc window is only as tall as what is inside it (the Iron Triangle and the Price Calculator), so there is no empty space at the bottom; on a short screen it scrolls.","ALL THE NEMA OUTLETS IN THE CONSTRUCTION LAB: there is also the dual-function AFCI/GFCI outlet that the newer electrical code asks for in kitchens and laundry rooms (TEST and RESET buttons and a green light, wired on the LINE screws), and the lesson tiles now pair up two in every row. The slots and holes of every outlet stay visible from any side when you turn the view. 23 more outlets from the NEMA charts, each a lesson tile and a possible city job, each with its real face in the room, on the bench and in the framed house: the old 2-prong 1-15 (no ground), the 6-15 and 6-30 (240 volts, no neutral), the big 60 amp 14-60, the RV shore power 50 amp twist-lock, the twist-locks L5-20, L5-30, L6-20, L6-30, L14-20 and the old L2-20 with no ground, the 277 volt 7-15, 7-20 and 7-30 (brown hot and grey neutral), the three-phase Y 18-20 (three hots and a neutral), the three-phase 15-20, 15-30, 15-50 and 15-60 (black, red and blue hots and a ground, the third hot on screw Z), the three-phase twist-locks L15-30, L21-30 (five wires), L16-30 and L22-30 (480 volt brown, orange and yellow hots). The 1-15 and the 6-15 and 277 volt faces are white, the 18-20 grey, the rest dark.","MORE AMERICAN OUTLETS IN THE CONSTRUCTION LAB: besides the outlet, GFCI, split, 240 volt, isolated ground, dryer, range and washer outlets, there are lessons for the AFCI outlet (arc-fault, LINE screws), the tamper-resistant TR outlet (child shutters), the USB outlet, the 20 amp 5-20 outlet with the T slot, the outdoor weather-resistant GFCI under a bubble cover, the smart Wi-Fi outlet (needs the neutral), the electric car charger 14-50, the RV 30 amp TT-30 (120 volts only), the welder 6-50 (two hots and a ground) and the generator twist-lock L14-30. On the wiring bench the green ground screw on the strap is always visible from the front, and the room around the bench goes on behind the wall and is closed at both ends, so turning all the way round never shows black. Each is a tile on the Lessons page. Jobs in the city (and practice jobs) pick their second outlet from all of these, so every job can be a different kind of outlet, with the same boxes as before.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","HELPER GIFTS AND ROSTER: a member who is the first to contribute 3 times in a row earns a helper gift that the admin grants. The admin chooses how it is given: an NGMY store money card (a QR code the chosen store scans), or Cash App or Zelle with no store needed. For Cash App or Zelle the admin types the phone number the member should call or text and an optional note; the member then sees a green (Cash App) or purple (Zelle) gift pop-up with the amount, that number and Call and Text buttons every time they open the app, until they tap Received. The printed Civic Registry roster carries a light NGMY watermark behind it (between the earlier strong one and the too faint one).","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), home frames in two colours only (Neural Link and Core Protocol blue, Signal Grid and Vault Channel purple), Hub, Creator Toolkit, Core Protocol, NGMY Slides and the NGMY Advisors filter frames with colour: a soft sky blue or soft lavender wash (white at the top) with a thin edge and a soft shadow of the same colour, a whole row at a time (one row blue, the next row purple, never mixed tile by tile), the four NGMY Hub tiles all in one colour, NGMY Services in a solid purple frame, the NGMY badge at the top of home in light gold, pure white pages, NGMY Slides opening at once when you come back to it (no loading every time), Civic Registry words in a dark readable grey in light mode, a Create Invoice form grouped into framed sections with rounded fields and icons, and the Quote Calc Iron Triangle made of brushed steel (when a third of FAST, CHEAP, GOOD is turned on, one of the other two turns off at random, not in a fixed order), pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.aM0=new C.hE(10,"kenteSunset")
D.hP8=w([D.aji,A.kv,A.aF],x.O)
D.dYv=new C.hb("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aM0,4294964964,4282000405,4279983648,D.ki)
D.aM1=new C.hE(11,"indigoMudcloth")
D.bi5=new B.t(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hPq=w([D.bi5,A.aiN,A.iy],x.O)
D.dYD=new C.hb("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aM1,4294439140,4279903102,4279903102,D.ki)
D.aM2=new C.hE(12,"adinkraRoyal")
D.bxR=new B.t(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hPr=w([D.ahx,D.bxR,A.aF],x.O)
D.dYF=new C.hb("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aM2,4294965484,4285218591,4287322667,D.ki)
D.aM3=new C.hE(13,"nileLotus")
D.btw=new B.t(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bpt=new B.t(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hPw=w([D.btw,D.bpt,A.iy],x.O)
D.dYE=new C.hb("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aM3,4294244340,4279196764,4279196764,D.ki)
D.aM4=new C.hE(14,"shweshweIvory")
D.bne=new B.t(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.blK=new B.t(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.biH=new B.t(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hP9=w([D.bne,D.blK,D.biH],x.O)
D.dYA=new C.hb("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aM4,4294505710,4279970378,4291058750,D.ki)
D.tG=new C.hE(15,"certIvoryNavy")
D.hP7=w([D.NH,D.jH,A.iy],x.O)
D.aLB=new C.vg(1,"ringsNdoa")
D.dYx=new C.hb("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tG,4294966259,4279378237,4291404327,D.aLB)
D.a8Y=new C.vg(2,"coupleCards")
D.dYs=new C.hb("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tG,4294966259,4279378237,4291404327,D.a8Y)
D.Eq=new C.hE(18,"certIvoryNavyBar")
D.ahw=new B.t(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hPp=w([D.ahw,D.jH,A.iy],x.O)
D.aLC=new C.vg(3,"kuhoweshaForm")
D.dYq=new C.hb("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Eq,4294966519,4279378237,4291404327,D.aLC)
D.aj3=new B.t(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hPM=w([D.NH,D.aj3,A.iy],x.O)
D.a8Z=new C.vg(4,"mahariPande")
D.dYt=new C.hb("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tG,4294966259,4279904068,4291404327,D.a8Z)
D.aM5=new C.hE(16,"certIvoryGreen")
D.bmt=new B.t(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hPc=w([A.MM,D.bmt,A.iy],x.O)
D.aLD=new C.vg(5,"familiaMti")
D.dYz=new C.hb("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aM5,4294966776,4280241466,4291404327,D.aLD)
D.a9_=new C.vg(6,"ndoaSafi")
D.dYr=new C.hb("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Eq,4294966519,4279378237,4291404327,D.a9_)
D.brE=new B.t(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hPf=w([D.NH,A.iy,D.brE],x.O)
D.a90=new C.vg(7,"peteWide")
D.dYw=new C.hb("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tG,4294966259,4282001936,4291404327,D.a90)
D.dYG=new C.vg(8,"muhuriCrest")
D.dYp=new C.hb("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tG,4294966259,4279378237,4291404327,D.dYG)
D.hPs=w([D.ahw,D.aj3,A.iy],x.O)
D.dYH=new C.vg(9,"fomuWazi")
D.dYC=new C.hb("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Eq,4294966519,4279904068,4291404327,D.dYH)
D.aM6=new C.hE(17,"certIvoryRose")
D.bnk=new B.t(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hPv=w([D.bnk,D.ak3,A.iy],x.O)
D.a8X=new C.vg(10,"upendoOrnate")
D.dYy=new C.hb("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aM6,4294965493,4286200650,4291404327,D.a8X)
D.doJ=w([D.dYv,D.dYD,D.dYF,D.dYE,D.dYA,D.dYx,D.dYs,D.dYq,D.dYt,D.dYz,D.dYr,D.dYw,D.dYp,D.dYC,D.dYy],x.h)
D.en=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.JM=new C.wC(0,"emojis")
D.Ew=new C.wC(1,"pictures")
D.JN=new C.wC(2,"icons3d")
D.a9i=new C.wC(3,"animations")
D.Us=new C.wC(4,"videoMotion")
D.Ex=new C.wC(5,"luxe")
D.a6I=w([D.JM,D.Ew,D.JN,D.a9i,D.Us,D.Ex],B.at("O<wC>"))
D.f2o=new B.y(A.e9,"Looks")
D.eR4=new B.y(A.DA,"Light")
D.eR1=new B.y(A.lT,"Colour")
D.eOY=new B.y(A.wU,"Effects")
D.aqS=new B.a_(63112,"MaterialIcons",!1)
D.eLr=new B.y(D.aqS,"Crop")
D.dpf=w([D.f2o,D.eR4,D.eR1,D.eOY,D.eLr],x.f2)
D.dpZ=w([],x.E)
D.hPH=w([],x.L)
D.ePd=new B.y("Flashcard",D.JH)
D.eT8=new B.y("Quiz",D.JI)
D.eVc=new B.y("Worksheet",D.JJ)
D.eS8=new B.y("Notes",D.n9)
D.eTH=new B.y("Section",D.Eu)
D.dqH=w([D.ePd,D.eT8,D.eVc,D.eS8,D.eTH],B.at("O<+(n,mZ)>"))
D.dqL=w([D.aLz,D.aLA,D.aLy,D.aLx],x.h)
D.dqW=w([A.ix,A.po],x.O)
D.cd=new C.hM(0,"none")
D.dr=new C.hM(1,"fade")
D.JK=new C.hM(3,"slideRight")
D.aMs=new C.hM(5,"slideDown")
D.ekq=new C.hM(7,"zoomOut")
D.a9h=new C.hM(11,"cube")
D.ekl=new C.hM(12,"blur")
D.aMp=new C.hM(13,"dissolve")
D.ekm=new C.hM(14,"wipeLeft")
D.ekn=new C.hM(15,"wipeRight")
D.Ur=new C.hM(17,"push")
D.eko=new C.hM(18,"flash")
D.aMr=new C.hM(20,"swing")
D.ekp=new C.hM(21,"curtain")
D.T1=w([D.cd,D.dr,D.vx,D.JK,D.vy,D.aMs,D.na,D.ekq,D.JL,D.aMt,D.Uq,D.a9h,D.ekl,D.aMp,D.ekm,D.ekn,D.r7,D.Ur,D.eko,D.aMq,D.aMr,D.ekp],x.i)
D.dro=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.drs=w([A.rK,A.i8,A.c3],x.O)
D.eQl=new B.y(A.uZ,"Design")
D.f41=new B.y(D.ar5,"Word sizes")
D.f_j=new B.y(A.Dw,"Text")
D.bUm=new B.a_(983182,"MaterialIcons",!1)
D.f_o=new B.y(D.bUm,"Photo")
D.eKX=new B.y(A.l1,"Logo")
D.f5j=new B.y(A.Ih,"News")
D.dry=w([D.eQl,D.f41,D.f_j,D.f_o,D.eKX,D.f5j],x.f2)
D.drz=w(["golddust","sparkle","sheen"],x.s)
D.elN=new C.eA("upload_pdf",A5.I8,"Upload PDF")
D.ekX=new C.eA("sign_paper",A.If,"Sign Paper")
D.bTA=new B.a_(63438,"MaterialIcons",!1)
D.elJ=new C.eA("hd_photo",D.bTA,"HD Photo")
D.ekP=new C.eA("sharpen",E.a3m,"Sharpen")
D.ekZ=new C.eA("print",A5.I8,"Download PDF")
D.elq=new C.eA("rotate",D.aqS,"Rotate")
D.el7=new C.eA("text_box",A.Dw,"Text Box")
D.el9=new C.eA("picture",A.v4,"Picture")
D.el5=new C.eA("title",A.x4,"Title")
D.el1=new C.eA("subtitle",S.arE,"Subtitle")
D.elz=new C.eA("bullets",I.a3I,"Bullet List")
D.el2=new C.eA("numbered",A.Q0,"Numbered")
D.elC=new C.eA("quote",A8.Dh,"Quote")
D.ele=new C.eA("citation",A.oG,"Citation")
D.elF=new C.eA("date_stamp",Am.a3p,"Date Stamp")
D.els=new C.eA("page_number",A.x3,"Page #")
D.elw=new C.eA("header_bar",A.zN,"Header")
D.el8=new C.eA("footer_bar",Az.a4f,"Footer")
D.ekY=new C.eA("divider",A.tk,"Divider")
D.ekU=new C.eA("highlight",A.a3K,"Highlight")
D.ely=new C.eA("redact",A.tr,"Redact")
D.ell=new C.eA("callout",A.Da,"Callout")
D.elH=new C.eA("checkboxes",I.aqd,"Checklist")
D.eli=new C.eA("table",A.a4d,"Table")
D.elc=new C.eA("memo",I.a3X,"Memo")
D.elm=new C.eA("letter",A.I3,"Letter")
D.bTe=new B.a_(63259,"MaterialIcons",!0)
D.ekO=new C.eA("agenda",D.bTe,"Agenda")
D.el_=new C.eA("toc",AM.ari,"Contents")
D.bTw=new B.a_(63406,"MaterialIcons",!1)
D.elj=new C.eA("sig_line",D.bTw,"Sign Line")
D.ekH=new C.eA("initial_line",A.jb,"Initials")
D.ekK=new C.eA("approved",A.l1,"APPROVED")
D.elo=new C.eA("draft",A.pF,"DRAFT")
D.elu=new C.eA("confidential",A.jL,"Confidential")
D.elx=new C.eA("sticky",A.Qi,"Sticky Note")
D.elG=new C.eA("progress",A.arh,"Progress")
D.bUP=new B.a_(983507,"MaterialIcons",!1)
D.ekV=new C.eA("stars",D.bUP,"Star Rating")
D.ekF=new C.eA("equation",A.ar8,"Equation")
D.ekQ=new C.eA("timeline",A.a4e,"Timeline")
D.eld=new C.eA("two_col",A.a4g,"Two Columns")
D.ekS=new C.eA("compare",AE.a3t,"Compare")
D.ekD=new C.eA("duplicate_el",A.fO,"Duplicate")
D.elL=new C.eA("delete_el",A.ej,"Delete")
D.elB=new C.eA("bring_fwd",H.ar1,"Bring Front")
D.ekI=new C.eA("send_back",H.ar0,"Send Back")
D.eln=new C.eA("align_left",D.a3G,"Align L")
D.elt=new C.eA("align_center",D.a3F,"Align C")
D.elK=new C.eA("align_right",D.a3H,"Align R")
D.el6=new C.eA("word_count",A0.a32,"Word Count")
D.el3=new C.eA("link_text",A.hR,"Link")
D.elr=new C.eA("phone",A.iV,"Phone")
D.ekT=new C.eA("email",A.De,"Email")
D.elM=new C.eA("qr_placeholder",A.ju,"QR Placeholder")
D.ekN=new C.eA("rectangle",A9.th,"Rectangle")
D.elh=new C.eA("circle",A.py,"Circle")
D.ekJ=new C.eA("arrow",A.jt,"Arrow")
D.elA=new C.eA("line",A.tk,"Line")
D.ekW=new C.eA("triangle",A.a3r,"Triangle")
D.bTl=new B.a_(63318,"MaterialIcons",!1)
D.el0=new C.eA("grayscale",D.bTl,"Grayscale")
D.ela=new C.eA("brighten",I.aqx,"Brighten")
D.elf=new C.eA("flip_h",A.Dg,"Flip H")
D.bTs=new B.a_(63348,"MaterialIcons",!1)
D.elI=new C.eA("flip_v",D.bTs,"Flip V")
D.elv=new C.eA("cover_page",A.qP,"Cover Page")
D.ekG=new C.eA("invoice",A.h3,"Invoice")
D.ekR=new C.eA("resume",A.mj,"Resume")
D.el4=new C.eA("minutes",A.pA,"Minutes")
D.ekL=new C.eA("lab_report",A.Qe,"Lab Report")
D.ekM=new C.eA("rubric",A.qT,"Rubric")
D.elg=new C.eA("flashcard_tool",A4.Id,"Flashcard")
D.elD=new C.eA("quiz_tool",A.I9,"Quiz Block")
D.elk=new C.eA("worksheet_tool",Q.HJ,"Worksheet")
D.elp=new C.eA("outline_share",A.Ib,"Share Outline")
D.elE=new C.eA("export_json",D.aqj,"Export JSON")
D.ekE=new C.eA("new_slide",D.a31,"New Slide")
D.elb=new C.eA("present",A.qV,"Present")
D.ds6=w([D.elN,D.ekX,D.elJ,D.ekP,D.ekZ,D.elq,D.el7,D.el9,D.el5,D.el1,D.elz,D.el2,D.elC,D.ele,D.elF,D.els,D.elw,D.el8,D.ekY,D.ekU,D.ely,D.ell,D.elH,D.eli,D.elc,D.elm,D.ekO,D.el_,D.elj,D.ekH,D.ekK,D.elo,D.elu,D.elx,D.elG,D.ekV,D.ekF,D.ekQ,D.eld,D.ekS,D.ekD,D.elL,D.elB,D.ekI,D.eln,D.elt,D.elK,D.el6,D.el3,D.elr,D.ekT,D.elM,D.ekN,D.elh,D.ekJ,D.elA,D.ekW,D.el0,D.ela,D.elf,D.elI,D.elv,D.ekG,D.ekR,D.el4,D.ekL,D.ekM,D.elg,D.elD,D.elk,D.elp,D.elE,D.ekE,D.elb],B.at("O<eA>"))
D.dsh=w([A.cA,A.an],x.O)
D.eKt=new B.y(4286331629,4292552567)
D.eKg=new B.y(4280640491,4278630100)
D.eKB=new B.y(4294538006,4292943176)
D.eJD=new B.y(4278556265,4280640491)
D.dlU=w([D.eKt,D.eKg,D.eKB,D.eJD],x.n)
D.cIb=w([4294626325,4280472558,4294210230],x.t)
D.eky=new C.of("colorful","Colorful",A.lT,D.dlU,4294967295,3875536895,D.cIb,D.na)
D.eK4=new B.y(4279522093,4279657780)
D.eKk=new B.y(4281750292,4283268111)
D.eJG=new B.y(4278603323,4279203438)
D.eKl=new B.y(4282343954,4279599165)
D.cTt=w([D.eK4,D.eKk,D.eJG,D.eKl],x.n)
D.cHU=w([4288931381,4294829706,4287033260],x.t)
D.eku=new C.of("nature","Nature",A.Ig,D.cTt,4294442727,3874290891,D.cHU,D.dr)
D.eJZ=new B.y(4279369771,4283178389)
D.eJW=new B.y(4279179050,4286456526)
D.eKc=new B.y(4280163147,4290648157)
D.eJv=new B.y(4278322711,4285343961)
D.dbj=w([D.eJZ,D.eJW,D.eKc,D.eJv],x.n)
D.cI7=w([4294210230,4280472558,4289170426],x.t)
D.eks=new C.of("vibe","Vibe",A.Q3,D.dbj,4294967295,3874869502,D.cI7,D.vx)
D.eKx=new B.y(4290007817,4292552567)
D.eKr=new B.y(4286328082,4294286859)
D.eKw=new B.y(4288485197,4294538006)
D.eKq=new B.y(4285343961,4293675161)
D.cdQ=w([D.eKx,D.eKr,D.eKw,D.eKq],x.n)
D.cIc=w([4294829706,4294967295,4284999929],x.t)
D.ekt=new C.of("celebration","Celebration",A.kc,D.cdQ,4294967295,4009752557,D.cIc,D.r7)
D.eJU=new B.y(4279179050,4280171146)
D.eJY=new B.y(4279310375,4280232247)
D.eJM=new B.y(4278916151,4280172719)
D.eJV=new B.y(4279179050,4281549141)
D.d3g=w([D.eJU,D.eJY,D.eJM,D.eJV],x.n)
D.cHP=w([4281908728,4294626325,4287931320],x.t)
D.ekx=new C.of("professional","Professional",A.zt,D.d3g,4294967295,3872118241,D.cHP,D.Ur)
D.eJQ=new B.y(4278995566,4278413729)
D.eJI=new B.y(4278727492,4279137424)
D.eKd=new B.y(4280171146,4278751666)
D.eJR=new B.y(4278995566,4279590517)
D.cM3=w([D.eJQ,D.eJI,D.eKd,D.eJR],x.n)
D.cHS=w([4286436348,4284410580,4294829706],x.t)
D.ekz=new C.of("ocean","Ocean",I.a4i,D.cM3,4294967295,3873501950,D.cHS,D.vy)
D.eKs=new B.y(4286328082,4294538006)
D.eKu=new B.y(4286781507,4294677052)
D.eKo=new B.y(4283178389,4294197086)
D.eKv=new B.y(4288295954,4294688548)
D.d_s=w([D.eKs,D.eKu,D.eKo,D.eKv],x.n)
D.cId=w([4294829706,4294967295,4294747557],x.t)
D.ekA=new C.of("sunset","Sunset",A.Ql,D.d_s,4294967295,4009749973,D.cId,D.dr)
D.eKF=new B.y(4294967295,4294047225)
D.eKA=new B.y(4294507260,4294967295)
D.eKE=new B.y(4294967295,4293060848)
D.eKz=new B.y(4294507260,4294047225)
D.deK=w([D.eKF,D.eKA,D.eKE,D.eKz],x.n)
D.cHN=w([4280640491,4279179050,4287931320],x.t)
D.ekw=new C.of("minimal","Minimal",A9.th,D.deK,4279179050,4282865001,D.cHN,D.dr)
D.eJP=new B.y(4278979081,4280886564)
D.eK8=new B.y(4280031511,4278979081)
D.eJX=new B.y(4279308561,4281148438)
D.eJO=new B.y(4278979081,4280031511)
D.dum=w([D.eJP,D.eK8,D.eJX,D.eJO],x.n)
D.cI0=w([4292128567,4294829706,4289241758],x.t)
D.ekB=new C.of("elegant","Elegant",A.mo,D.dum,4294898631,3873957348,D.cI0,D.aMp)
D.eKa=new B.y(4280159034,4282058596)
D.eJL=new B.y(4278916151,4280163147)
D.eKi=new B.y(4281208933,4278916151)
D.eK1=new B.y(4279502891,4283178389)
D.dCi=w([D.eKa,D.eJL,D.eKi,D.eK1],x.n)
D.cI9=w([4294296657,4292128567,4291081725],x.t)
D.ekv=new C.of("royal","Royal Gold",A.iW,D.dCi,4294965222,3874084351,D.cI9,D.na)
D.eJA=new B.y(4278464302,4280163147)
D.eJK=new B.y(4278916151,4279455306)
D.eKb=new B.y(4280163147,4283040846)
D.eJx=new B.y(4278332450,4281413249)
D.dlt=w([D.eJA,D.eJK,D.eKb,D.eJx],x.n)
D.cHO=w([4281193663,4289170426,4294210230],x.t)
D.ekC=new C.of("aurora","Aurora Glow",A.e9,D.dlt,4293983738,3869766608,D.cHO,D.dr)
D.xi=w([D.eky,D.eku,D.eks,D.ekt,D.ekx,D.ekz,D.ekA,D.ekw,D.ekB,D.ekv,D.ekC],B.at("O<of>"))
D.bqW=new B.t(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dsR=w([A.rG,D.bqW,A.rG],x.O)
D.dt8=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dtd=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.dtv=w(["hati_kuhowa_","hati_kuhoweya_","hati_malipo_awamu_"],x.s)
D.f_b=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.ePV=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eUJ=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eGW=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eTk=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eRs=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eW0=new B.y("Surprise me","")
D.dtO=w([D.f_b,D.ePV,D.eUJ,D.eGW,D.eTk,D.eRs,D.eW0],x.L)
D.J5=w([D.a8U,D.a8R,D.a8A,D.a8F,D.a8H,D.a8P,D.a8L,D.a8M,D.a8T,D.a8Q,D.a8J,D.a8D,D.a8I,D.a8B,D.a8K,D.a8N,D.a8W,D.a8O,D.a8G,D.a8V,D.a8S,D.a8C,D.a8E],x.h)
D.biJ=new B.t(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bvy=new B.t(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.duC=w([A.c,D.biJ,D.bvy],x.O)
D.dw5=w(["mke","mume"],x.s)
D.dx0=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aLZ=new C.hE(0,"heritageGold")
D.bpb=new B.t(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.bpc=new B.t(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.q)
D.hPR=w([D.bpb,D.bpc,A.aF],x.O)
D.dYB=new C.hb("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aLZ,4294570461,4284234270,4292128567,D.ki)
D.aM_=new C.hE(1,"heritageCrimson")
D.bgO=new B.t(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bnh=new B.t(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bvj=new B.t(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hPo=w([D.bgO,D.bnh,D.bvj],x.O)
D.dYu=new C.hb("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aM_,4294635750,4285213214,4292912216,D.ki)
D.dx5=w([D.a8U,D.a8R,D.dYB,D.dYu,D.a8H,D.a8P],x.h)
D.e3S=new C.t3(1,"circuit")
D.e4k=new C.my("neural","Neural Link","Robotic",D.e3S,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.e3R=new C.t3(0,"grid")
D.e4h=new C.my("signal","Signal Grid","Robotic",D.e3R,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.e3X=new C.t3(2,"hexes")
D.e42=new C.my("core","Core Protocol","Robotic",D.e3X,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aMm=new C.t3(11,"diagonal")
D.e4d=new C.my("steel","Steel Tech","Robotic",D.aMm,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aMn=new C.t3(3,"rings")
D.e41=new C.my("vault","Vault Gold","Robotic",D.aMn,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.e3V=new C.t3(13,"leaves")
D.e44=new C.my("forest","Forest Morning","Nature",D.e3V,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aMo=new C.t3(5,"waves")
D.e4b=new C.my("ocean","Ocean Calm","Nature",D.aMo,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.e3Y=new C.t3(6,"sunset")
D.e4g=new C.my("sunset","Sunset Glow","Nature",D.e3Y,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.e3Z=new C.t3(7,"mountains")
D.e43=new C.my("mountain","Mountain Air","Nature",D.e3Z,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.e4_=new C.t3(8,"stars")
D.e4a=new C.my("night","Night Sky","Nature",D.e4_,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a9f=new C.t3(4,"orbs")
D.e48=new C.my("aurora","Aurora","Nature",D.a9f,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.e4i=new C.my("sand","Sand Dune","Nature",D.aMo,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.e40=new C.t3(9,"rays")
D.e47=new C.my("golden","Golden Hour","Warm",D.e40,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.e45=new C.my("royal","Royal Purple","Warm",D.aMm,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.e46=new C.my("rose","Rose Petal","Warm",D.a9f,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.e3U=new C.t3(12,"blocks")
D.e49=new C.my("electric","Electric Blue","Bold",D.e3U,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.e4j=new C.my("mint","Fresh Mint","Bold",D.a9f,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.e3W=new C.t3(14,"minimal")
D.e4f=new C.my("white","Clean White","Clean",D.e3W,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.e3T=new C.t3(10,"frame")
D.e4c=new C.my("midnight","Midnight Gold","Clean",D.e3T,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.e4e=new C.my("community","Community Green","Clean",D.aMn,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a7e=w([D.e4k,D.e4h,D.e42,D.e4d,D.e41,D.e44,D.e4b,D.e4g,D.e43,D.e4a,D.e48,D.e4i,D.e47,D.e45,D.e46,D.e49,D.e4j,D.e4f,D.e4c,D.e4e],B.at("O<my>"))
D.dxu=w([D.Cg,A.ur,A.i8,A.c3],x.O)
D.dxO=w([D.akg,D.jH],x.O)
D.dxZ=w(["pdf","docx","txt","md"],x.s)
D.f9y=new B.b3(-3,150,34)
D.f9z=new B.b3(-3,214,62)
D.f9A=new B.b3(-3,288,62)
D.dyT=w([D.f9y,D.f9z,D.f9A],B.at("O<+(F,F,F)>"))
D.dzo=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dA8=w(["Write","Design","Print & fold"],x.s)
D.kk=new C.vl(2,"triangle")
D.Ev=new C.vl(3,"arrow")
D.fw=new C.vl(4,"line")
D.kl=new C.vl(5,"parallelogram")
D.dAb=w([D.bb,D.eZ,D.kk,D.Ev,D.fw,D.kl,D.lx],x.gB)
D.eIu=new B.y(240,96)
D.eLj=new B.y(560,46)
D.dAi=w([D.eIu,D.eLj],x.G)
D.hQ3=new C.yi(0,"classic")
D.e_S=new C.oc("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aLZ,4294570461,4282000405,4284234270)
D.e03=new C.oc("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aM_,4294635750,4281999378,4285213214)
D.e_T=new C.oc("elegant_navy","Umoja Mzuri",y.s,D.a96,4294967035,4279378237,4290283019)
D.e05=new C.oc("elegant_gold","Umoja wa Dhahabu",y.Q,D.aM7,4294966515,4281016592,4289102906)
D.e07=new C.oc("kente_sunset","Kente ya Jua",y.H,D.aM0,4294964964,4282000405,4279983648)
D.e_Q=new C.oc("indigo_mudcloth","Nguo ya Indigo",y.n,D.aM1,4294439140,4279903102,4279903102)
D.e_V=new C.oc("adinkra_royal","Muhuri wa Adinkra",y.z,D.aM2,4294965484,4285218591,4287322667)
D.e0_=new C.oc("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aM3,4294244340,4279196764,4279196764)
D.e01=new C.oc("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aM4,4294505710,4279970378,4291058750)
D.hQ4=new C.yi(1,"ringsNdoa")
D.e_U=new C.oc("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tG,4294966259,4279378237,4291404327)
D.hQ6=new C.yi(2,"coupleCards")
D.e04=new C.oc("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tG,4294966259,4279378237,4291404327)
D.hQ7=new C.yi(3,"kuhoweshaForm")
D.e00=new C.oc("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Eq,4294966519,4279378237,4291404327)
D.hQ8=new C.yi(4,"mahariPande")
D.e_R=new C.oc("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tG,4294966259,4279904068,4291404327)
D.hQ9=new C.yi(5,"familiaMti")
D.e06=new C.oc("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aM5,4294966776,4280241466,4291404327)
D.hQa=new C.yi(6,"ndoaSafi")
D.e_Y=new C.oc("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Eq,4294966519,4279378237,4291404327)
D.hQb=new C.yi(7,"peteWide")
D.e_X=new C.oc("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tG,4294966259,4282001936,4291404327)
D.hQc=new C.yi(8,"muhuriCrest")
D.e_W=new C.oc("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tG,4294966259,4279378237,4291404327)
D.hQd=new C.yi(9,"fomuWazi")
D.e_Z=new C.oc("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Eq,4294966519,4279904068,4291404327)
D.hQ5=new C.yi(10,"upendoOrnate")
D.e02=new C.oc("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aM6,4294965493,4286200650,4291404327)
D.Ti=w([D.e_S,D.e03,D.e_T,D.e05,D.e07,D.e_Q,D.e_V,D.e0_,D.e01,D.e_U,D.e04,D.e00,D.e_R,D.e06,D.e_Y,D.e_X,D.e_W,D.e_Z,D.e02],B.at("O<oc>"))
D.Et=new C.atp(0,"landscape169")
D.r5=new C.atp(1,"portrait916")
D.dB7=w([D.Et,D.r5],B.at("O<atp>"))
D.aEE=w([A.i8,A.bL,A.cP,A.ix,A.c],x.O)
D.vq=w([A.c3,A.ia],x.O)
D.eHs=new B.y(1000,"M")
D.eMS=new B.y(900,"CM")
D.eLa=new B.y(500,"D")
D.eJq=new B.y(400,"CD")
D.eHt=new B.y(100,"C")
D.eMT=new B.y(90,"XC")
D.eLb=new B.y(50,"L")
D.eJr=new B.y(40,"XL")
D.eHA=new B.y(10,"X")
D.eN4=new B.y(9,"IX")
D.eLv=new B.y(5,"V")
D.eKW=new B.y(4,"IV")
D.eI7=new B.y(1,"I")
D.dBW=w([D.eHs,D.eMS,D.eLa,D.eJq,D.eHt,D.eMT,D.eLb,D.eJr,D.eHA,D.eN4,D.eLv,D.eKW,D.eI7],x.ek)
D.fd3=new B.b7(["open",A.jb,"Open & write","Keep writing this book"])
D.fdz=new B.b7(["print",A.v9,"Print as a book","Fold and staple it"])
D.dC6=w([D.fd3,D.fdz],B.at("O<+(n,a_,n,n)>"))
D.dCS=w([D.a9h,D.na,D.JL,D.Ur,D.dr,D.Uq],x.i)
D.f_X=new B.y(-1,"Small")
D.eHc=new B.y(0,"Normal")
D.eI4=new B.y(1,"Big")
D.eIL=new B.y(2,"Huge")
D.dDs=w([D.f_X,D.eHc,D.eI4,D.eIL],x.ek)
D.dDT=w([49,65,89,38,83,89],x.t)
D.dE_=w([A.ur,A.i8,A.c3],x.O)
D.dEu=w([D.dr,D.na,D.vx,D.a9h,D.JL,D.Ur],x.i)
D.e_A=new C.hE(32,"photoCurtain")
D.e_B=new C.hE(33,"photoVillage")
D.e_C=new C.hE(34,"photoSunset")
D.e_D=new C.hE(35,"photoRoses")
D.dH2=new B.cV([D.e_A,"photo_curtain",D.e_B,"photo_village",D.e_C,"photo_sunset",D.e_D,"photo_roses"],B.at("cV<hE,n>"))
D.aJX=new B.cV([0,D.O_,8,D.alP,12,D.alQ],B.at("cV<G,a5e>"))
D.eqC={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d3s=w([A.bL,O.GI],x.O)
D.dqr=w([A.b_,A.bp],x.O)
D.dkx=w([A.c4,A.aH,A.bt],x.O)
D.dC7=w([A.cA,A.by],x.O)
D.dck=w([A.ba,A.fe],x.O)
D.dnu=w([A.b8,A.fB],x.O)
D.bmR=new B.t(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dmL=w([D.bmR,A.po],x.O)
D.dgB=w([A.hv,A.yw],x.O)
D.dc6=w([A.bv,A.cj],x.O)
D.dHa=new B.bq(D.eqC,[D.d3s,T.auL,D.dqr,D.dkx,D.dC7,D.dck,D.dnu,D.dmL,D.dgB,D.dc6],B.at("bq<n,ai<t>>"))
D.epL={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a7S=new B.bq(D.epL,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bq<n,n>"))
D.a7Y=new B.bq(A.i2,[],B.at("bq<G,+icon3d,picture(n?,n?)>"))
D.dNo=new F.NZ(30,null)
D.dSD=new F.mW("Chapter 1","","","")
D.dAU=w([D.dSD],x.fD)
D.dSH=new F.rU("My Book","","",D.dAU,E.aLp)
D.dSF=new F.va("starry",null,null,null,null,"","","")
D.dSI=new F.rU("Dream Big","","",E.a6Q,D.dSF)
D.dSG=new F.va("story",null,null,null,null,"","","")
D.dSJ=new F.rU("Little Lion","","",E.a6Q,D.dSG)
D.dSE=new F.va("vintage",null,null,null,null,"","","")
D.dSK=new F.rU("Our Story","","",E.a6Q,D.dSE)
D.dVM=new C.Fp("","NGMY","","")
D.dYI=new C.a8O(0,"pinned")
D.dYJ=new C.a8O(1,"unpinned")
D.dYK=new C.a8O(2,"full")
D.e2v=new C.Ac("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ekr=new C.b4b(null,null,null,null)
D.em9=new C.atu(null)
D.emk=new C.atY(0,"smaller")
D.eml=new C.atY(1,"bigger")
D.aMD=new C.atY(2,"fit")
D.esB=new B.r(0,44)
D.eue=new B.r(3,6)
D.euy=new B.r(4,8)
D.eyK=new B.D(E.amG,S.agK,null)
D.eyO=new B.D(A.a1_,A.m6,null)
D.bW7=new B.ae(A.kd,16,A.bV,null,null,null)
D.eyS=new B.D(A.iS,D.bW7,null)
D.bgc=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.ez3=new B.D(A.OU,D.bgc,null)
D.c5V=new B.ae(A.cB,16,A.aE,null,null,null)
D.ez7=new B.D(A.eC,D.c5V,null)
D.fWP=new B.B("Play",null,A.o6,null,null,null,null,null,null,null,null,null)
D.dqI=w([Y.ata,A.vO,D.fWP],x.p)
D.fio=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dqI,null)
D.eza=new B.D(A.nH,D.fio,null)
D.bgl=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.foR=new B.a5(20,20,D.bgl,null)
D.ezh=new B.D(A.iS,D.foR,null)
D.h5j=new B.B("Seconds per slide",null,A.h6,null,null,null,null,null,null,null,null,null)
D.ezq=new B.D(A.bl,D.h5j,null)
D.eAL=new C.aac(2,"print")
D.eAO=new B.ja(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eCq=new B.hm("/Annot")
D.eCs=new B.hm("/URI")
D.eEH=new AH.aax(10,null)
D.c5P=new B.ae(A.e9,14,A.ey,null,null,null)
D.eF5=new B.cK(null,-2,-2,null,null,null,D.c5P,null)
D.d5R=w([A.a_a,A.L],x.O)
D.ccz=new B.a7(A.a5,A.a9,A.x,D.d5R,null,null)
D.b8A=new B.o(null,null,null,null,null,D.ccz,A.n)
D.bAH=new B.bN(D.b8A,A.bk,null,null)
D.eFi=new B.cK(0,0,null,0,8,null,D.bAH,null)
D.dvT=w([A.hM,A.mV,A.c9],x.O)
D.eFY=new B.bT(A.z,0.5,A.x,null,0,D.dvT,null,null)
D.eH8=new B.y(0,54)
D.eHe=new B.y(0,-54)
D.eHw=new B.y(106,52)
D.eID=new B.y(0.22,A.bp)
D.eLd=new B.y(52,100)
D.eLe=new B.y(52,1184)
D.eLg=new B.y(54,0)
D.eLE=new B.y(614,52)
D.eLJ=new B.y(650,72)
D.eLN=new B.y(668,100)
D.eLO=new B.y(668,1184)
D.eM7=new B.y(70,72)
D.eNo=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ePz=new B.y(0.5,A.hJ)
D.eZf=new B.y(0.78,A.aV)
D.f0i=new B.y(-54,0)
D.f7k=new B.b3("mume","UPANDE WA MUME",0.512)
D.f9S=new B.b3("mke","UPANDE WA MKE",0.09)
D.faJ=new B.b7([A.bh,0.22,0.7,2.6])
D.fbU=new B.b7([A.ba,0.36,1.2,1.3])
D.fd5=new B.b7([A.dN,0.28,0.2,0.4])
D.fdb=new B.b7([A.cF,0.05,0.3,0.35])
D.fdi=new B.b7([A.bv,0.28,0.9,0])
D.fds=new B.b7([A.aD,-0.25,-0.15,0.45])
D.fev=new B.b7([A.c4,0.42,1,4.1])
D.fi6=new B.abc(9)
D.bXe=new B.ae(A.Ih,28,A.bt,null,null,null)
D.h5Q=new B.B("NGMY News",null,A.dl,null,null,null,null,null,null,null,null,null)
D.bL6=new B.bz(1,A.bd,D.h5Q,null)
D.dzr=w([D.bXe,A.as,D.bL6],x.p)
D.fii=new B.c8(A.aM,A.e,A.i,A.l,null,A.p,null,0,D.dzr,null)
D.bXp=new B.ae(A.oG,16,A.c,null,null,null)
D.h7r=new B.B("Book",null,A.o4,null,null,null,null,null,null,null,null,null)
D.dDZ=w([D.bXp,A.e7,D.h7r],x.p)
D.fir=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dDZ,null)
D.c3i=new B.ae(A.jL,10,A.c,null,null,null)
D.fUN=new B.B("Pro",null,A.o2,null,null,null,null,null,null,null,null,null)
D.dqN=w([D.c3i,A.rd,D.fUN],x.p)
D.fiv=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dqN,null)
D.h5h=new B.B("Make a newspaper",null,A.Lg,null,null,null,null,null,null,null,null,null)
D.cdO=w([E.a4E,A.ae,D.h5h],x.p)
D.fiw=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.cdO,null)
D.c1H=new B.ae(A.kc,18,A.bL,null,null,null)
D.fX2=new B.B("Ending celebration",null,A.hu,null,null,null,null,null,null,null,null,null)
D.dyr=w([D.c1H,A.bn,D.fX2],x.p)
D.fiz=new B.c8(A.aM,A.e,A.i,A.l,null,A.p,null,0,D.dyr,null)
D.c34=new B.ae(A.jb,18,A.k1,null,null,null)
D.fzY=new B.H(!0,A.k1,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7K=new B.B("Write",null,D.fzY,null,null,null,null,null,null,null,null,null)
D.dey=w([D.c34,A.ae,D.h7K],x.p)
D.fiG=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dey,null)
D.fUL=new B.B("Download picture",null,A.o3,null,null,null,null,null,null,null,null,null)
D.bNV=new B.dx(A.dM,A.z,A.f,D.fUL,null)
D.bO6=new B.di(1,A.cn,D.bNV,null)
D.dre=w([N.at1,A.ae,D.bO6],x.p)
D.fiH=new B.c8(A.aM,A.b9,A.i,A.l,null,A.p,null,0,D.dre,null)
D.bZc=new B.ae(A.Ih,22,A.bt,null,null,null)
D.h3N=new B.B("NGMY NEWS",null,M.ac1,null,null,null,null,null,null,null,null,null)
D.d5d=w([D.bZc,A.ae,D.h3N],x.p)
D.fiR=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d5d,null)
D.fj2=new B.pL(!1,!1,null,S.Yz,null,A.c6,null,null,null)
D.ab8=new B.iW([D.cd,D.dr,D.vx,D.JK,D.vy,D.aMs],B.at("iW<hM>"))
D.esr={title:0,quote:1,closing:2,bio:3}
D.fky=new B.db(D.esr,4,x.M)
D.eq6={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.fkB=new B.db(D.eq6,5,x.M)
D.erG={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aba=new B.db(D.erG,8,x.M)
D.eqP={Design:0,Transitions:1,Insert:2}
D.fkJ=new B.db(D.eqP,3,x.M)
D.hQm=new B.iW([D.a9i],B.at("iW<wC>"))
D.eqY={float3d:0,drift:1,pulse:2}
D.fkN=new B.db(D.eqY,3,x.M)
D.aUi=new B.iW([D.JH,D.JI,D.JJ],B.at("iW<mZ>"))
D.eq4={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aUl=new B.db(D.eq4,14,x.M)
D.hQn=new B.db(A.i2,0,B.at("db<wC>"))
D.eqV={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Vs=new B.db(D.eqV,4,x.M)
D.epX={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aUo=new B.db(D.epX,30,x.M)
D.er3={circle:0,triangle:1,hexagon:2,diamond:3}
D.flf=new B.db(D.er3,4,x.M)
D.fnJ=new B.av(390,844)
D.foA=new B.a5(20,20,A.MG,null)
D.aVe=new B.a5(null,2.5,null,null)
D.bfS=new B.fi(2.4,null,null,null,null,D.wq,null,null,null,null)
D.foI=new B.a5(18,18,D.bfS,null)
D.c38=new B.ae(A.iW,19,A.c,null,null,null)
D.foW=new B.a5(38,38,D.c38,null)
D.c1e=new B.ae(A.zP,22,A.c,null,null,null)
D.foZ=new B.a5(40,40,D.c1e,null)
D.fpy=new B.hN(2,10,10,1.15,null)
D.aVn=new B.hN(2,16,14,0.62,null)
D.bIX=new B.Q(32,30,32,40)
D.bhV=new B.t(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bXb=new B.ae(A.qP,56,D.bhV,null,null,null)
D.akR=new B.t(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fC8=new B.H(!0,D.akR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0F=new B.B("Your books will live here.",null,D.fC8,null,A.K,null,null,null,null,null,null,null)
D.dhD=w([D.bXb,A.T,D.h0F],x.p)
D.bzD=new B.fp(A.ah,A.e,A.i,A.l,null,A.p,null,0,D.dhD,null)
D.ezo=new B.D(D.bIX,D.bzD,null)
D.fpU=new B.m9(D.ezo,null)
D.fPM=new B.B("The original couple picture is back.",null,null,null,null,null,null,null,null,null,null,null)
D.fq8=new B.b0(D.fPM,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0C=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new B.b0(D.h0C,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fZF=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new B.b0(D.fZF,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3R=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fqm=new B.b0(D.h3R,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4s=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fqC=new B.b0(D.h4s,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fYh=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fqP=new B.b0(D.fYh,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.hbM=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fr7=new B.b0(D.hbM,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h8M=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fri=new B.b0(D.h8M,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4B=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fs2=new B.b0(D.h4B,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fSV=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fsj=new B.b0(D.fSV,null,null,null,null,null,null,null,A.iG,null,null,null,null,A.nC,!1,null,null,null,A.t,null)
D.fUV=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fsB=new B.b0(D.fUV,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0h=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fsD=new B.b0(D.h0h,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_Y=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fsE=new B.b0(D.h_Y,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h6I=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fsF=new B.b0(D.h6I,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h9D=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new B.b0(D.h9D,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOT=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fsP=new B.b0(D.fOT,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fW5=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ftb=new B.b0(D.fW5,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.har=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new B.b0(D.har,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h9Y=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fth=new B.b0(D.h9Y,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fNN=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new B.b0(D.fNN,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5L=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fts=new B.b0(D.h5L,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h9w=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new B.b0(D.h9w,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h9m=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new B.b0(D.h9m,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fNE=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ftQ=new B.b0(D.fNE,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fRS=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fuh=new B.b0(D.fRS,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h8A=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fut=new B.b0(D.h8A,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fRE=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fuJ=new B.b0(D.fRE,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fSO=new B.B("Your couple picture is on the paper.",null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new B.b0(D.fSO,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bqz=new B.t(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d3K=w([A.ix,A.po,D.bqz,D.ahf,A.ix],x.O)
D.fv7=new B.h4(A.z,0,6.283185307179586,A.x,D.d3K,null,null)
D.ddF=w([A.bL,A.c3,A.i8,D.Cg,A.bL],x.O)
D.aVX=new B.h4(A.z,0,6.283185307179586,A.x,D.ddF,null,null)
D.dt6=w([A.c4,A.bh,A.ba,A.be,A.bt,A.c4],x.O)
D.fvc=new B.h4(A.z,0,6.283185307179586,A.x,D.dt6,null,null)
D.d67=w([A.qu,A.pp,A.on,A.ix,A.qu],x.O)
D.fvd=new B.h4(A.z,0,6.283185307179586,A.x,D.d67,null,null)
D.dBJ=w([A.bv,A.ba,A.bh,A.c4,A.bv],x.O)
D.fvf=new B.h4(A.z,0,6.283185307179586,A.x,D.dBJ,null,null)
D.blI=new B.t(1,0,1,0,A.q)
D.bqV=new B.t(1,0,1,1,A.q)
D.bnE=new B.t(1,0,0,1,A.q)
D.bjn=new B.t(1,1,0,1,A.q)
D.dxm=w([A.MX,A.ajs,D.blI,D.bqV,D.bnE,D.bjn,A.MX],x.O)
D.fvg=new B.h4(A.z,0,6.283185307179586,A.x,D.dxm,null,null)
D.fy3=new B.H(!0,A.bA,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.H(!0,A.oh,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWy=new B.H(!0,A.eV,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyB=new B.H(!0,E.nx,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBv=new B.H(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBR=new B.H(!0,A.ey,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDn=new B.H(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDy=new B.H(!0,A.k0,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDM=new B.tc(!0,A.K5,null,null,null,null,A.dE,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new B.H(!0,A.eV,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEZ=new B.H(!0,A.jI,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFm=new B.H(!0,A.aE,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAR=new B.ja(1,1,0.7568627450980392,0.027450980392156862)
D.fFq=new B.tc(!0,D.eAR,null,null,null,null,A.dE,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ajB=new B.t(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aXl=new B.H(!0,D.ajB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFy=new B.H(!0,D.akR,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFz=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXn=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGc=new B.tc(!0,A.pR,null,null,null,null,A.dE,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGu=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH2=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new B.H(!0,D.ajB,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ld=new B.H(!0,A.aE,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHC=new B.H(!0,A.c3,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new B.H(!0,A.bP,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI6=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a6n,null,null,null)
D.fI9=new B.H(!0,A.bY,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIr=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fID=new B.H(!0,A.dy,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJf=new B.H(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJq=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJH=new B.H(!0,A.ab,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY3=new B.H(!0,A.bV,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bx_=new B.t(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fLA=new B.H(!0,D.bx_,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY9=new B.H(!0,E.nx,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM5=new B.H(!0,A.bP,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM8=new B.H(!0,L.lJ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEu=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNp=new B.B("NEW",null,D.fEu,null,null,null,null,null,null,null,null,null)
D.fNH=new B.B("Hati ya Kuhowesha",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fOa=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fOz=new B.B("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fPk=new B.B("Big quote mark",null,A.jC,null,null,null,null,null,null,null,null,null)
D.fPm=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fPy=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fQ2=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fQ4=new B.B("How many slides?",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fQD=new B.B("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fA0=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR1=new B.B("Luxury FX",null,D.fA0,null,null,null,null,null,null,null,null,null)
D.fRn=new B.B("Font",null,A.u1,null,null,null,null,null,null,null,null,null)
D.fRy=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fRF=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fL4=new B.H(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRP=new B.B("Example  GA847",null,D.fL4,null,null,null,null,null,null,null,null,null)
D.fSe=new B.B("Design shapes",null,A.jC,null,null,null,null,null,null,null,null,null)
D.fSp=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fSu=new B.B("Non-stop (loop)",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fSI=new B.B("Hati ya Kuhoweya",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fT2=new B.B("Photo studio",null,A.fF,null,null,null,null,null,null,null,null,null)
D.fTx=new B.B("Add your picture",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fDN=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new B.B("Enter document code",null,D.fDN,null,A.K,null,null,null,null,null,null,null)
D.fTz=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fTE=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fB8=new B.H(!0,E.nx,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTZ=new B.B("Delete this book?",null,D.fB8,null,A.K,null,null,null,null,null,null,null)
D.fG1=new B.H(!0,E.nx,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUX=new B.B("Your library",null,D.fG1,null,null,null,null,null,null,null,null,null)
D.fV1=new B.B("Delete",null,A.aXe,null,null,null,null,null,null,null,null,null)
D.fV4=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,AC.Fd,null,null,null,null,null,null,null,null,null)
D.fVf=new B.B("Element flies in",null,A.aXr,null,null,null,null,null,null,null,null,null)
D.WA=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fVF=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fW2=new B.B("Cancel",null,E.aXC,null,null,null,null,null,null,null,null,null)
D.fW4=new B.B("The lines and circles that come with the design",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fJQ=new B.H(!0,A.h9,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWz=new B.B("DOCUMENT CODE",null,D.fJQ,null,null,null,null,null,null,null,null,null)
D.fXn=new B.B("Quotes",null,G.acG,null,null,null,null,null,null,null,null,null)
D.fD8=new B.H(!0,L.lJ,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXx=new B.B("Add a picture",null,D.fD8,null,null,null,null,null,null,null,null,null)
D.fXF=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Wd,null,A.K,null,null,null,null,null,null,null)
D.fXJ=new B.B("Look & feel",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fXO=new B.B("Rings",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fXU=new B.B("W",null,A.u1,null,null,null,null,null,null,null,null,null)
D.fY3=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fYn=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Wm,null,A.K,null,null,null,null,null,null,null)
D.fYp=new B.B("Write your book",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fZ9=new B.B("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fZr=new B.B("Malipo ya Awamu ya Mahari",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fDC=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZG=new B.B("Create with AI",null,D.fDC,null,A.K,null,null,null,null,null,null,null)
D.h_b=new B.B("Apply look",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fEk=new B.H(!0,A.ew,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0_=new B.B("Type your presentation below",null,D.fEk,null,A.K,null,null,null,null,null,null,null)
D.h02=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aYc,null,A.K,null,null,null,null,null,null,null)
D.h04=new B.B("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fyU=new B.H(!0,A.cs,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0b=new B.B("Done",null,D.fyU,null,null,null,null,null,null,null,null,null)
D.h0w=new B.B("Delete",null,A.o5,null,null,null,null,null,null,null,null,null)
D.h0H=new B.B("Hati ya Kiapo cha Uongozi",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fCr=new B.H(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1C=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fCr,null,A.K,null,null,null,null,null,null,null)
D.h1Z=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.h24=new B.B("Layout",null,A.Wq,null,null,null,null,null,null,null,null,null)
D.h2K=new B.B("Print",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h2T=new B.B("X",null,A.u1,null,null,null,null,null,null,null,null,null)
D.h3v=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Ae.B6,null,null,null,null,null,null,null,null,null)
D.h44=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.h4f=new B.B("Your couple picture",null,A7.u_,null,null,null,null,null,null,null,null,null)
D.h4h=new B.B("Put the original picture back",null,A.La,null,null,null,null,null,null,null,null,null)
D.h4k=new B.B("Hati ya Kuhowa",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h4m=new B.B("Choose a class template",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h4o=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h4v=new B.B("Download the newspaper picture",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4I=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.h4P=new B.B("Done",null,A.aY1,null,null,null,null,null,null,null,null,null)
D.h5_=new B.B("Ending celebration",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h50=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.h5f=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Ae.u0,null,null,null,null,null,null,null,null,null)
D.h6e=new B.B("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h6f=new B.B("What would you like to do?",null,D.aXl,null,null,null,null,null,null,null,null,null)
D.h6k=new B.B("Delete",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h6R=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.h6V=new B.B("Hati (Documents)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h77=new B.B("Done",null,A.lA,null,null,null,null,null,null,null,null,null)
D.fKV=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7b=new B.B("Delete presentation?",null,D.fKV,null,A.K,null,null,null,null,null,null,null)
D.h7v=new B.B("After the last slide it starts again from the first",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h7H=new B.B("\ud83c\udf33",null,A.Fc,null,A.K,null,null,null,null,null,null,null)
D.h7Z=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h85=new B.B("Transfer document",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.h8g=new B.B("Add to the slides",null,A.h6,null,null,null,null,null,null,null,null,null)
D.h8E=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fAE=new B.H(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8S=new B.B("Make a book",null,D.fAE,null,null,null,null,null,null,null,null,null)
D.h8W=new B.B("Books",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fD0=new B.H(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8Y=new B.B("Keep this page open until it finishes.",null,D.fD0,null,null,null,null,null,null,null,null,null)
D.h9_=new B.B("Making your video",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h94=new B.B("LANGUAGE",null,A_.u2,null,null,null,null,null,null,null,null,null)
D.h9a=new B.B("Use this ending",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h9i=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h9k=new B.B("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.h9C=new B.B("Delete from the database?",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h9E=new B.B("H",null,A.u1,null,null,null,null,null,null,null,null,null)
D.ha3=new B.B("NGMY Quotes",null,A.dl,null,null,null,null,null,null,null,null,null)
D.hax=new B.B("Cover",null,D.aY9,null,null,null,null,null,null,null,null,null)
D.haB=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.haC=new B.B("Each page becomes its own slide you can present",null,A.ht,null,null,null,null,null,null,null,null,null)
D.haY=new B.B("Y",null,A.u1,null,null,null,null,null,null,null,null,null)
D.hb9=new B.B("Crop the picture",null,A.lA,null,null,null,null,null,null,null,null,null)
D.hbg=new B.B("Edit text",null,A.L9,null,null,null,null,null,null,null,null,null)
D.hdB=B.dT("aa_")
D.hAt=new B.bg("slides-create-kiapo",x.W)
D.Fp=new C.azy(0,"none")
D.b1g=new C.azy(1,"zipCrypto")
D.b1h=new C.azy(2,"aes")
D.hDj=new F.QB("","",null)
D.hEr=new C.bfp(null)
D.fbS=new B.b7([470,108,842,255])
D.fc0=new B.b7([514,349,640,383])
D.fc9=new B.b7([644,349,800,383])
D.faO=new B.b7([128,517,918,690])
D.fbv=new B.b7([337,700,722,743])
D.faQ=new B.b7([132,748,476,783])
D.fcA=new B.b7([744,838,902,878])
D.fcP=new B.b7([906,842,946,874])
D.fbf=new B.b7([252,1262,557,1291])
D.fca=new B.b7([661,1250,859,1292])
D.fby=new B.b7([366,1395,704,1432])
D.faE=new B.b7([0,0,480,560])
D.cXc=w([803,840,879,916],x.x)
D.pO={mke:0,mume:1}
D.fbn=new B.b7([275,1052,374,1078])
D.fbo=new B.b7([275,1092,374,1118])
D.fbp=new B.b7([275,1131,374,1157])
D.dyP=w([D.fbn,D.fbo,D.fbp],x.D)
D.fcv=new B.b7([705,1052,800,1078])
D.fcw=new B.b7([705,1092,800,1118])
D.fcx=new B.b7([705,1131,800,1157])
D.dfc=w([D.fcv,D.fcw,D.fcx],x.D)
D.dI_=new B.bq(D.pO,[D.dyP,D.dfc],x.A)
D.fbJ=new B.b7([436,1046,499,1078])
D.fbK=new B.b7([436,1086,499,1118])
D.fbL=new B.b7([436,1125,499,1157])
D.d4g=w([D.fbJ,D.fbK,D.fbL],x.D)
D.fcM=new B.b7([863,1046,926,1078])
D.fcN=new B.b7([863,1086,926,1118])
D.fcO=new B.b7([863,1125,926,1157])
D.dr8=w([D.fcM,D.fcN,D.fcO],x.D)
D.dHY=new B.bq(D.pO,[D.d4g,D.dr8],x.A)
D.hEP=new C.QT("exact_kijiji",1054,1492,D.fbS,D.fc0,D.fc9,D.faO,D.fbv,D.faQ,D.fcA,D.fcP,D.fbf,D.fca,D.fby,D.faE,4294099278,4294701532,4280949264,4294099278,4294701011,4280949264,4294430790,4280949264,4280949264,4280949264,"goldserif","serif","serif","goldserif","serif","serif","serif","serif",A.K,26,22,41,23,21.5,22,15.5,18.5,31,190,695,690,136,D.cXc,!0,D.dI_,D.dHY,!1,"\u2014\u2014\u2014   {st}   \u2014\u2014\u2014")
D.fbs=new B.b7([310,108,836,200])
D.fbA=new B.b7([380,198,562,238])
D.fc5=new B.b7([564,198,765,238])
D.fbd=new B.b7([243,280,965,535])
D.fbt=new B.b7([325,617,885,665])
D.fbc=new B.b7([228,678,630,714])
D.fcG=new B.b7([846,736,1016,769])
D.faM=new B.b7([1020,733,1070,771])
D.fbh=new B.b7([256,1205,578,1235])
D.fcu=new B.b7([703,1200,948,1235])
D.fcI=new B.b7([850,25,1168,285])
D.cTh=w([752,811,864,917],x.x)
D.faV=new B.b7([178,1040,322,1070])
D.faW=new B.b7([178,1080,322,1110])
D.faX=new B.b7([178,1120,322,1150])
D.cLE=w([D.faV,D.faW,D.faX],x.D)
D.fcb=new B.b7([668,1040,812,1070])
D.fcc=new B.b7([668,1080,812,1110])
D.fcd=new B.b7([668,1120,812,1150])
D.dB8=w([D.fcb,D.fcc,D.fcd],x.D)
D.dI2=new B.bq(D.pO,[D.cLE,D.dB8],x.A)
D.fbP=new B.b7([468,1040,527,1070])
D.fbQ=new B.b7([468,1080,527,1110])
D.fbR=new B.b7([468,1120,527,1150])
D.dds=w([D.fbP,D.fbQ,D.fbR],x.D)
D.fcR=new B.b7([962,1040,1022,1070])
D.fcS=new B.b7([962,1080,1022,1110])
D.fcT=new B.b7([962,1120,1022,1150])
D.djr=w([D.fcR,D.fcS,D.fcT],x.D)
D.dHX=new B.bq(D.pO,[D.dds,D.djr],x.A)
D.hEQ=new C.QT("exact_village",1198,1312,D.fbs,D.fbA,D.fc5,D.fbd,D.fbt,D.fbc,D.fcG,D.faM,D.fbh,D.fcu,null,D.fcI,4284164630,4294701011,4280949264,4294701011,4280949264,4280949264,4294701011,4280949264,4280949264,4280949264,"serif","serif","","serif","","","","serif",A.b6,31,26,36,29,27,25,22,24,28,305,805,800,240,D.cTh,!1,D.dI2,D.dHX,!0,"")
D.fbq=new B.b7([285,115,955,200])
D.fbN=new B.b7([462,206,606,246])
D.fc8=new B.b7([608,206,800,246])
D.fb0=new B.b7([205,278,1028,538])
D.faZ=new B.b7([195,568,1040,620])
D.faS=new B.b7([163,636,640,672])
D.fcH=new B.b7([848,690,1012,727])
D.faL=new B.b7([1015,688,1065,728])
D.fbg=new B.b7([255,1203,582,1233])
D.fcz=new B.b7([723,1198,1017,1233])
D.fbz=new B.b7([370,1262,892,1302])
D.cSg=w([708,761,815,867],x.x)
D.fb8=new B.b7([220,1017,382,1052])
D.fb9=new B.b7([220,1065,382,1100])
D.fba=new B.b7([220,1112,382,1147])
D.dnL=w([D.fb8,D.fb9,D.fba],x.D)
D.fcr=new B.b7([703,1017,855,1052])
D.fcs=new B.b7([703,1065,855,1100])
D.fct=new B.b7([703,1112,855,1147])
D.dxy=w([D.fcr,D.fcs,D.fct],x.D)
D.dI7=new B.bq(D.pO,[D.dnL,D.dxy],x.A)
D.fc1=new B.b7([540,1015,602,1052])
D.fc2=new B.b7([540,1063,602,1100])
D.fc3=new B.b7([540,1110,602,1147])
D.dhp=w([D.fc1,D.fc2,D.fc3],x.D)
D.fd0=new B.b7([998,1015,1058,1052])
D.fd1=new B.b7([998,1063,1058,1100])
D.fd2=new B.b7([998,1110,1058,1147])
D.d9r=w([D.fd0,D.fd1,D.fd2],x.D)
D.dI6=new B.bq(D.pO,[D.dhp,D.d9r],x.A)
D.hER=new C.QT("exact_curtain",1198,1312,D.fbq,D.fbN,D.fc8,D.fb0,D.faZ,D.faS,D.fcH,D.faL,D.fbg,D.fcz,D.fbz,null,4294099278,4279509066,4280949264,4279509066,4294102634,4294176480,4294102634,4294176480,4294176480,4279509066,"goldserif","","","","","","","",A.b6,31,27,38,28,27,24,25,26,33,238,830,828,175,D.cSg,!1,D.dI7,D.dI6,!0,"EMO 'YA M'MBONDO \u2013 {st}")
D.fbm=new B.b7([262,195,932,266])
D.fbE=new B.b7([418,276,577,314])
D.fc6=new B.b7([579,276,785,314])
D.fb7=new B.b7([216,343,998,572])
D.fbI=new B.b7([425,583,775,624])
D.faU=new B.b7([173,636,545,670])
D.fcE=new B.b7([816,687,978,719])
D.fd_=new B.b7([980,684,1030,722])
D.fbl=new B.b7([260,1145,552,1174])
D.fcj=new B.b7([678,1140,948,1174])
D.cSf=w([703,748,794,839],x.x)
D.fb3=new B.b7([213,965,362,997])
D.fb1=new B.b7([213,1005,362,1037])
D.fb2=new B.b7([213,1045,362,1077])
D.d3p=w([D.fb3,D.fb1,D.fb2],x.D)
D.fcg=new B.b7([675,965,824,997])
D.fce=new B.b7([675,1005,824,1037])
D.fcf=new B.b7([675,1045,824,1077])
D.cWH=w([D.fcg,D.fce,D.fcf],x.D)
D.dI4=new B.bq(D.pO,[D.d3p,D.cWH],x.A)
D.fbX=new B.b7([511,965,570,997])
D.fbV=new B.b7([511,1005,570,1037])
D.fbW=new B.b7([511,1045,570,1077])
D.dgu=w([D.fbX,D.fbV,D.fbW],x.D)
D.fcW=new B.b7([966,965,1024,997])
D.fcU=new B.b7([966,1005,1024,1037])
D.fcV=new B.b7([966,1045,1024,1077])
D.d4s=w([D.fcW,D.fcU,D.fcV],x.D)
D.dI3=new B.bq(D.pO,[D.dgu,D.d4s],x.A)
D.hES=new C.QT("exact_roses",1198,1312,D.fbm,D.fbE,D.fc6,D.fb7,D.fbI,D.faU,D.fcE,D.fd_,D.fbl,D.fcj,null,null,4279510095,4294373857,4279510095,4294373857,4279510095,4279510095,4294103115,4279510095,4279510095,4280949264,"serif","","","serif","","","","serif",A.b6,30,26,34,27,26,23,22,24,28,248,792,795,185,D.cSf,!1,D.dI4,D.dI3,!0,"")
D.fbT=new B.b7([474,301,948,385])
D.fc4=new B.b7([560,386,684,419])
D.fcm=new B.b7([688,386,860,419])
D.faN=new B.b7([117,522,937,694])
D.fbx=new B.b7([358,714,701,756])
D.faP=new B.b7([129,761,440,793])
D.fcD=new B.b7([800,803,922,834])
D.fcB=new B.b7([756,801,793,836])
D.fbb=new B.b7([228,1258,568,1287])
D.fcl=new B.b7([680,1246,883,1288])
D.fbu=new B.b7([336,1395,722,1432])
D.faF=new B.b7([0,0,495,440])
D.cqs=w([819.5,857.5,892.5,927],x.x)
D.fbi=new B.b7([260,1058,362,1083])
D.fbj=new B.b7([260,1099,362,1124])
D.fbk=new B.b7([260,1141,362,1166])
D.duZ=w([D.fbi,D.fbj,D.fbk],x.D)
D.fcn=new B.b7([697,1058,799,1083])
D.fco=new B.b7([697,1099,799,1124])
D.fcp=new B.b7([697,1141,799,1166])
D.dtH=w([D.fcn,D.fco,D.fcp],x.D)
D.dI5=new B.bq(D.pO,[D.duZ,D.dtH],x.A)
D.fbF=new B.b7([423,1050,499,1083])
D.fbG=new B.b7([423,1091,499,1124])
D.fbH=new B.b7([423,1133,499,1166])
D.dlz=w([D.fbF,D.fbG,D.fbH],x.D)
D.fcJ=new B.b7([861,1050,936,1083])
D.fcK=new B.b7([861,1091,936,1124])
D.fcL=new B.b7([861,1133,936,1166])
D.dE6=w([D.fcJ,D.fcK,D.fcL],x.D)
D.dI0=new B.bq(D.pO,[D.dlz,D.dE6],x.A)
D.hET=new C.QT("exact_kifalme",1054,1492,D.fbT,D.fc4,D.fcm,D.faN,D.fbx,D.faP,D.fcD,D.fcB,D.fbb,D.fcl,D.fbu,D.faF,4294099278,4294099278,4280949264,4294099278,4294504926,4280949264,4294365002,4280949264,4294504926,4280949264,"goldserif","goldserif","serif","goldserif","","serif","serif","serif",A.K,25,22,40,23,21.5,19,15.5,18.5,31,182,742,745,128,D.cqs,!1,D.dI5,D.dI0,!1,"\u2014\u2014\u2014   {st}   \u2014\u2014\u2014")
D.fbw=new B.b7([350,188,892,262])
D.fbO=new B.b7([462,270,602,307])
D.fc7=new B.b7([604,270,780,307])
D.faY=new B.b7([182,328,1032,568])
D.fbM=new B.b7([440,598,800,645])
D.faT=new B.b7([163,651,548,686])
D.fcF=new B.b7([844,705,1000,741])
D.faK=new B.b7([1003,700,1050,742])
D.fbe=new B.b7([248,1165,582,1195])
D.fcy=new B.b7([720,1160,992,1195])
D.cSz=w([722,769,816,861],x.x)
D.fb6=new B.b7([215,990,368,1024])
D.fb4=new B.b7([215,1032,368,1066])
D.fb5=new B.b7([215,1072,368,1107])
D.dCc=w([D.fb6,D.fb4,D.fb5],x.D)
D.fck=new B.b7([678,990,828,1024])
D.fch=new B.b7([678,1032,828,1066])
D.fci=new B.b7([678,1072,828,1107])
D.cRo=w([D.fck,D.fch,D.fci],x.D)
D.dHZ=new B.bq(D.pO,[D.dCc,D.cRo],x.A)
D.fc_=new B.b7([513,990,570,1024])
D.fbY=new B.b7([513,1032,570,1066])
D.fbZ=new B.b7([513,1072,570,1107])
D.dbz=w([D.fc_,D.fbY,D.fbZ],x.D)
D.fcZ=new B.b7([973,990,1030,1024])
D.fcX=new B.b7([973,1032,1030,1066])
D.fcY=new B.b7([973,1072,1030,1107])
D.cxP=w([D.fcZ,D.fcX,D.fcY],x.D)
D.dI1=new B.bq(D.pO,[D.dbz,D.cxP],x.A)
D.hEU=new C.QT("exact_sunset",1198,1312,D.fbw,D.fbO,D.fc7,D.faY,D.fbM,D.faT,D.fcF,D.faK,D.fbe,D.fcy,null,null,4294099278,4279898632,4294372564,4294372564,4294372564,4280949264,4294103115,4280949264,4294372564,4280949264,"goldserif","","","serif","","","","serif",A.b6,29,27,37,27,27,24,24,25,28,236,822,818,172,D.cSz,!1,D.dHZ,D.dI1,!0,"")
D.hFF=new C.a0d(null)
D.hIx=new C.aeY(null)
D.hIz=new C.aGT(null)
D.hLk=new C.a1r(null)
D.hLs=new C.yV(!1,4292128567,4279708252,4280103785,4294176480,4293511014,4293313114,4279179834,4279179834,4282209680,4279179834,0,null,4287503140,!0,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!0)
D.hLt=new C.yV(!1,4293048394,4294436798,4294371784,4280949264,4287253010,4294100828,4294372564,4280949264,4291404906,4280947724,0,4280947724,null,!0,!1,null,!0,!0,!0,!0,4280949264,null,4280949264,3861517324,null,4294372564,4294372564,4280947724,4294100828,null,3861517324,!0,0.1,0.06,0.88,1.15,0.5,0.155,0.195,!0,"Umoja \u2022 Heshima \u2022 Familia",!0)
D.hLu=new C.yV(!1,4287257131,0,0,4281014802,4284164630,4284164630,4294701011,4294967295,4290288248,4284164630,0,4284164630,null,!0,!1,4283048978,!0,!1,!1,!1,null,4287257131,null,0,0,null,null,4284164630,4294701011,4284164630,null,!1,0.07,0.17,0.5,1,0.42,0.122,0.19,!0,"Pamoja Tujenge Familia Imara",!1)
D.hLv=new C.yV(!0,4291404346,4294966516,4294174414,4281014802,4286192418,4294701011,4294701011,4294967295,4292397230,4292128567,4286192418,4286192418,null,!1,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!1)
D.hLw=new C.yV(!0,4291404346,4294967292,4293128170,4279510570,4279194199,4294373857,4294373857,4294967295,4291221199,4279194199,4279194199,4279194199,null,!1,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!1)
D.hLx=new C.yV(!1,4291404346,3439328242,4294044120,4280033848,4279510095,4279510095,4294373857,4294967295,4292068774,4279510095,0,4279510095,null,!0,!1,null,!1,!1,!0,!1,null,null,4279510095,0,0,null,null,4279510095,4294373857,4279510095,null,!0,0.072,0.17,0.66,1.15,0.5,0.133,0.172,!0,"Kwa Maisha ya Pamoja",!1)
D.hLy=new C.yV(!1,4291404346,4294966775,4294241241,4281014802,4286192418,4286192418,4285404704,4281014802,4292397230,4286192418,0,null,4287503140,!0,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!1)
D.hLz=new C.yV(!1,4292128567,4279190324,4279521856,4294372564,4293511014,4293313114,4278921760,4278921760,4282350182,4278921760,0,null,4287503140,!0,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!0)
D.hLA=new C.yV(!1,4292456522,4279117152,4279776645,4294176480,4294102634,4294102634,4279509066,4279509066,4282736808,4279509066,0,null,null,!0,!1,null,!1,!1,!1,!0,null,null,null,4294239942,null,4281014802,4294102634,4278984280,4294102634,null,3641383498,!1,0.058,0.06,0.88,1.15,0.5,0.112,0.152,!0,null,!0)
D.hLB=new C.yV(!1,4292128567,4280492318,4281149989,4294307811,4293511014,4293313114,4279637268,4279637268,4283320124,4279637268,0,null,4287503140,!0,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!0)
D.hLC=new C.yV(!1,4292128567,4282194507,4283048284,4294438132,4293511014,4293313114,4281012021,4281012021,4285219712,4281012021,0,null,4287503140,!0,!0,null,!1,!1,!1,!0,null,null,null,null,null,null,null,null,null,null,null,!1,0.074,0.06,0.88,1.15,0.5,0.129,0.168,!1,null,!0)
D.hLL=new C.a1Y(null)
D.hMn=new C.bxv(null)})();(function staticFields(){$.hxb=null
$.hxc=null
$.hxd=null
$.hxe=null
$.he5=B.x0("_lastQuoRemDigits")
$.he6=B.x0("_lastQuoRemUsed")
$.azW=B.x0("_lastRemUsed")
$.he7=B.x0("_lastRem_nsh")
$.qE=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Cn=B.T(x.N,x.I)
$.cgL=!1
$.hsQ=null
$.Co=B.T(x.N,B.at("a9<n,n>"))
$.ih7=B.T(x.N,x.o)
$.fF9=function(){var w=x.N
return B.T(w,w)}()
$.hBm=null
$.hBn=null
$.i9l=B.T(x.N,x.F)
$.ij2=function(){var w=x.N
return B.T(w,w)}()
$.hCk=B.T(B.at("hE"),x.N)
$.hCy=B.T(B.at("hE"),x.F)
$.hAm=!1
$.bDa="q"
$.RG=0
$.Ds=B.T(x.N,B.at("ai<Ad>"))
$.hAK=!1
$.hfU=!1
$.hHG=null
$.icf=B.T(x.N,B.at("aB<n?>"))
$.Lp=""
$.hG=0
$.hu1=function(){var w=x.N
return B.T(w,w)}()
$.hu0=B.T(x.N,x.R)
$.hgf=!1
$.ahF=B.T(x.N,x.F)
$.hh9=0
$.hgj=B.T(x.N,x.R)
$.bnH=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iC1","DR",()=>C.bcU(0))
w($,"iC_","a4g",()=>C.bcU(1))
w($,"iC0","hLM",()=>C.bcU(2))
w($,"iBZ","hlq",()=>$.a4g().vL(0))
w($,"iBX","hLK",()=>C.bcU(1e4))
w($,"iBY","hLL",()=>B.F5(8))
w($,"ixI","hJF",()=>B.F5(0))
w($,"ixQ","hJJ",()=>B.F5(0))
w($,"ixP","hJI",()=>B.c3J(0))
w($,"iG3","hNX",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a7S.gdP(D.a7S),v=v.gae(v);v.C();){u=v.gP(v)
t.n(0,u.b,u.a)}return t})
w($,"iGr","bHO",()=>B.azc(A.Z))
w($,"iGw","bHP",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.ni(new C.fWo(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.ni(new C.fWp(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.ni(new C.fWq(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.ni(new C.fWB(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.ni(new C.fWG(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.ni(new C.fWH(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.ni(new C.fWI(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.ni(new C.fWJ(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.ni(new C.fWK(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.ni(new C.fWL(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.ni(new C.fWM(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.ni(new C.fWr(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.ni(new C.fWs(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.ni(new C.fWt(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.ni(new C.fWu(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.ni(new C.fWv(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.ni(new C.fWw(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.ni(new C.fWx(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.ni(new C.fWy(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.ni(new C.fWz(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.ni(new C.fWA(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.ni(new C.fWC(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.ni(new C.fWD(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.ni(new C.fWE(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.ni(new C.fWF(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.at("O<Fz>"))})
w($,"iG6","hNZ",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["0hnREn5s0X6rAwNaeFDqRXzmt5k="]=a.current})($__dart_deferred_initializers__);