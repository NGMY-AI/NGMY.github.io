((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,V,A8,Am,An,C={
un(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hcq(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KL(d){var w
if(d===0)return $.DP()
if(d===1)return $.a47()
if(d===2)return $.hJn()
if(Math.abs(d)<4294967296)return C.bcs(A.o.M(d))
w=C.i3J(d)
return w},
bcs(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.un(4,w)
return new C.ol(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.un(1,w)
return new C.ol(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.un(2,w)
return new C.ol(v===0?!1:s,w,v)}v=A.o.aq(A.o.galF(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.un(v,w)
return new C.ol(v===0?!1:s,w,v)},
i3J(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dN("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DP()
w=$.hJm()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lq(A.aI.gaV(w))
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
q=new C.ol(!1,r,4)
if(s<0)p=q.mF(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hcr(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hvk(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hvf(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.F(f,16)===0)return C.hcr(d,e,s,g)
w=e+s+1
C.hvk(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i3M(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cP6(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i3K(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bct(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hvl(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.aq(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.aq(r,65536)}},
i3L(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
ol:function ol(d,e,f){this.a=d
this.b=e
this.c=f},
cP7:function cP7(){},
cP8:function cP8(){},
cP9:function cP9(d,e){this.a=d
this.b=e},
cPa:function cPa(d){this.a=d},
aTJ:function aTJ(d,e){this.a=d
this.b=e},
hkY(d,e,f){var w=new C.T2(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
T2:function T2(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a54:function a54(d,e){this.a=d
this.b=e},
bKW:function bKW(d){this.a=d
this.c=this.b=0},
hMK(){return new C.bJ9()},
bJ9:function bJ9(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cH5:function cH5(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i3p(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cf(d.gd30(d)))
v=f*2+2
u=C.ht0(C.ht2(),64)
t=new C.cpN(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cpO(e,1000,v)
s=new Uint8Array(v)
return A.aI.dt(s,0,t.cQP(w,0,s,0))},
cH3:function cH3(d,e){this.c=d
this.d=e},
azc:function azc(d,e){this.a=d
this.b=e},
cH6:function cH6(d,e,f,g){var _=this
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
bb7:function bb7(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cH4:function cH4(){this.a=$},
huP(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hMt(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHK:function bHK(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hiz(d,e){e&=31
return(d&$.qA[e])<<e>>>0},
nR(d,e){e&=31
return(d>>>e|C.hiz(d,32-e))>>>0},
ht1(d){var w,v=new C.auK()
if(B.iX(d))v.aMQ(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
ht2(){var w=C.ht1(0),v=new Uint8Array(4),u=x.S
u=new C.cpP(w,v,A.Ft,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.ir(0)
return u},
ht0(d,e){var w=new C.cpL(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cpK:function cpK(){},
cpO:function cpO(d,e,f){this.a=d
this.b=e
this.c=f},
cpI:function cpI(){},
auJ:function auJ(d){this.a=d},
cpN:function cpN(d){this.a=$
this.b=d
this.c=$},
cpJ:function cpJ(){},
cpH:function cpH(){},
auK:function auK(){this.b=this.a=$},
cpM:function cpM(){},
cpP:function cpP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpL:function cpL(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpG:function cpG(){},
cpF:function cpF(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bTb:function bTb(){},
bTc:function bTc(d){this.a=d},
cAc:function cAc(){},
bUd:function bUd(d,e){this.a=d
this.b=!1
this.c=e},
bUe:function bUe(){},
igf(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].v(0))
return u},
axO(d){var w=0,v=B.j(x.H),u
var $async$axO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fp4?2:4
break
case 2:w=5
return B.b(A.kG.h8("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axO)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kG.h8("SystemChrome.setEnabledSystemUIOverlays",C.igf(null),u),$async$axO)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axO,v)},
axR:function axR(d,e){this.a=d
this.b=e},
a9P:function a9P(d){this.a=d},
ij0(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fHA(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.j.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fHA:function fHA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ape(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ape=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aik("ngmy_menu_lib_v1_zzslides_index",A.bO),$async$ape)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cF(t,new C.c49(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c4a())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ape,v)},
apg(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$apg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ape(),$async$apg)
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
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n0("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.J(["deck",m.aj(),"savedAt",l],t,q),null),$async$apg)
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
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.J(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$apg)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apg,v)},
c4b(d){return C.hSy(d)},
hSy(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c4b=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aik("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ii),$async$c4b)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xl(B.a2(q,x.N,x.z))
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
return B.i($async$c4b,v)},
apf(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$apf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ape(),$async$apf)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nU(r,new C.c4c(d))
w=4
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.J(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$apf)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aRM("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$apf)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apf,v)},
c49:function c49(){},
c4a:function c4a(){},
c4c:function c4c(d){this.a=d},
itQ(d,e,f){return B.bU(A.L,null,new C.fYC(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fYC:function fYC(d,e,f){this.a=d
this.b=e
this.c=f},
a2k:function a2k(d,e,f,g){var _=this
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
fiN:function fiN(d,e){this.a=d
this.b=e},
fiR:function fiR(d){this.a=d},
fiS:function fiS(d){this.a=d},
fiT:function fiT(d,e,f){this.a=d
this.b=e
this.c=f},
fiO:function fiO(d){this.a=d},
fiP:function fiP(d){this.a=d},
fiQ:function fiQ(d,e){this.a=d
this.b=e},
fiI:function fiI(d){this.a=d},
fiG:function fiG(d){this.a=d},
fiH:function fiH(d){this.a=d},
fiJ:function fiJ(d){this.a=d},
fiK:function fiK(d){this.a=d},
fiX:function fiX(d,e){this.a=d
this.b=e},
fiW:function fiW(d,e){this.a=d
this.b=e},
fiM:function fiM(d,e,f){this.a=d
this.b=e
this.c=f},
fiL:function fiL(d,e,f){this.a=d
this.b=e
this.c=f},
fiU:function fiU(d,e){this.a=d
this.b=e},
fiV:function fiV(d,e){this.a=d
this.b=e},
fj_:function fj_(d){this.a=d},
fj0:function fj0(d,e){this.a=d
this.b=e},
fiZ:function fiZ(d,e){this.a=d
this.b=e},
fiY:function fiY(){},
hxP(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cF(v,new C.fqw(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fqx(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3j(d){return C.ikm(d)},
ikm(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3j=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fKN(n)
t=4
j=m
i=C
w=7
return B.b(B.a3U("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3j)
case 7:j.$1(i.hxP(f))
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
return B.b(B.aA(),$async$a3j)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hxP(B.aU(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fqF(d),$async$a3j)
case 13:p=j.C(new i.Y(h,new g.fKL(f),o),o.k("M.E"))
A.d.aZ(p,new C.fKM())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3j,v)},
aiV(d,e){return C.itu(d,e)},
itu(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fY4(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aiN("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiV)
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
return B.b(B.aA(),$async$aiV)
case 12:p=g
w=13
return B.b(p.aD("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiV)
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
return B.i($async$aiV,v)},
fqF(d){return C.i8n(d)},
i8n(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fqF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fqF)
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
return B.i($async$fqF,v)},
ahP(d,e){return C.iiT(d,e)},
iiT(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahP=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahP)
case 6:s=g
r=B.aR(x.N)
q=s.tV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fZ(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ci.E"))
w=7
return B.b(s.aD("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahP)
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
return B.b(C.a3j(d),$async$ahP)
case 8:n=g
J.nU(n,new C.fHe(e))
w=9
return B.b(C.aiV(d,n),$async$ahP)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahP,v)},
itV(d,e){return B.a6(d,!1).ce(B.ec(new C.fYY(e),!0,null,x.H))},
i3O(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cQu())},
oP:function oP(d,e,f){this.a=d
this.b=e
this.c=f},
fqw:function fqw(){},
fqx:function fqx(){},
fKN:function fKN(d){this.a=d},
fKL:function fKL(d){this.a=d},
fKM:function fKM(){},
fY4:function fY4(){},
fHe:function fHe(d){this.a=d},
fYY:function fYY(d){this.a=d},
a_2:function a_2(d,e){this.c=d
this.a=e},
azM:function azM(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQu:function cQu(){},
cQw:function cQw(d,e){this.a=d
this.b=e},
cQz:function cQz(d){this.a=d},
cQA:function cQA(d){this.a=d},
cQy:function cQy(){},
cQB:function cQB(d,e){this.a=d
this.b=e},
cQx:function cQx(d){this.a=d},
cQC:function cQC(){},
cQv:function cQv(d,e){this.a=d
this.b=e},
cQD:function cQD(){},
cQq:function cQq(d){this.a=d},
cQo:function cQo(d){this.a=d},
cQp:function cQp(d){this.a=d},
cQr:function cQr(d,e){this.a=d
this.b=e},
cQn:function cQn(d){this.a=d},
cQm:function cQm(d){this.a=d},
cQk:function cQk(d,e){this.a=d
this.b=e},
cQl:function cQl(d){this.a=d},
cQt:function cQt(){},
cQs:function cQs(d){this.a=d},
cQj:function cQj(d,e){this.a=d
this.b=e},
cQi:function cQi(d,e){this.a=d
this.b=e},
cQh:function cQh(d,e){this.a=d
this.b=e},
cQE:function cQE(d){this.a=d},
a_0:function a_0(d,e,f){this.c=d
this.d=e
this.a=f},
aH5:function aH5(d,e,f){this.a=d
this.b=e
this.c=f},
azI:function azI(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPL:function cPL(d){this.a=d},
cPK:function cPK(d){this.a=d},
cPN:function cPN(d,e,f){this.a=d
this.b=e
this.c=f},
cPV:function cPV(){},
cPW:function cPW(d){this.a=d},
cPO:function cPO(d,e,f){this.a=d
this.b=e
this.c=f},
cPM:function cPM(d,e){this.a=d
this.b=e},
cPQ:function cPQ(d,e){this.a=d
this.b=e},
cPR:function cPR(d,e){this.a=d
this.b=e},
cPS:function cPS(d,e){this.a=d
this.b=e},
cPP:function cPP(d){this.a=d},
cPU:function cPU(d){this.a=d},
cPT:function cPT(d,e){this.a=d
this.b=e},
cQ0:function cQ0(d){this.a=d},
cPX:function cPX(d,e){this.a=d
this.b=e},
cPY:function cPY(d,e){this.a=d
this.b=e},
cPZ:function cPZ(d,e){this.a=d
this.b=e},
cQ_:function cQ_(d,e){this.a=d
this.b=e},
azK:function azK(d,e,f,g,h,i){var _=this
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
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fPm(),x.H).eB(new C.fPn())}}else if(s)C.hzp()}catch(t){}},
hzp(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eB(new C.fuS())}catch(u){}},
imN(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fPm:function fPm(){},
fPn:function fPn(){},
fuS:function fuS(){},
hEj(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.eo(v,w,"").split(":"))},
hEg(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.ls)return null
return A.a.b2(w,14)},
hhd(d){var w
if(d.b!==D.ls)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
inc(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hEk(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
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
u=B.cF(u,new C.fQl(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kZ(0,f),u=new B.Gu(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SK(A.a.aB(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SK(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
in5(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fQk())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.I)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aSM(w,u,s,0)}return w},
in9(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a7s:$.hLy(),s=x.N,r=B.T(s,s)
for(s=t.gdP(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hEh(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
frB(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
if(C.hEj(q)===e)return q}return null},
ina(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b2(v,u)
return A.d.gH(D.Ic).a},
inb(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afC(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afC(0,0,0)
v=C.frB(b6,b0)
u=C.frB(b5,b0)
t=0
if(v!=null&&u!=null){s=C.in9(b2,C.in7(C.hEh(b2),v.r))
if(s.a!==0){u.r=C.in5(C.hEh(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.I)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.I)(o),++m){l=C.hEj(o[m])
if(l==null||l==="utangulizi")continue
r.I(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.frB(b6,n)
i=C.frB(b5,n)
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
a0=C.hhd(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.I)(a1),++a7){a8=a1[a7]
if(C.hEg(a8)===a0||C.hhd(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RT(a1,new C.fQr(a0),!0)
a1=f.z
a6=Date.now()
a9=$.je
$.je=a9+1
A.d.I(a1,new C.eR(""+1000*a6+"_"+a9,D.ls,a2,a3,a4,a5,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,d.at,D.bm,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cu,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afC(k,t,e)},
in6(d){var w=C.ina(d)
if(d.w==="hati_kuhowa")return C.hDE("",w)
return C.hDD("",w)},
fQl:function fQl(){},
fQk:function fQk(){},
fQr:function fQr(d){this.a=d},
hz6(){var w=new B.V(Date.now(),0,!1),v=new C.ftU()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hhm(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fRj(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.ls&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hEy(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fRj(d)
w=B.bh(u)
if(w==null)return!C.fRj(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bS(18e9))},
inT(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hWB(d){return A.a.i(d).toLowerCase()},
b1P(d){return C.hWC(d)},
hWC(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$b1P=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b1P)
case 7:r=f
p=r.tV("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.is4(),B.U(o).k("N<1,n>")).bY(0,new C.cg1())
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
return B.i($async$b1P,v)},
a8A(d,e){return C.hWD(d,e)},
hWD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8A=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b1P(d),$async$a8A)
case 3:r=g
if(!J.hc(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8A)
case 8:q=g
w=9
return B.b(q.aD("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q1(r)),$async$a8A)
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
return B.i($async$a8A,v)},
a8B(){var w=0,v=B.j(x.y),u,t
var $async$a8B=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a8B)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8B,v)},
hWE(d){var w=$.Cp.h(0,d)
w=w==null?null:J.t(w,"at")
return B.bh(w==null?"":w)},
hWF(d,e){var w,v,u,t=$.Cp.h(0,d)
if(t==null)return!1
w=J.a7(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hWE(d)
return u!=null&&!e.f.ca(u)},
hqX(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i4(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gR(w)
r=s.b
if(!v.b(r))continue
q=B.a2(r,u,t)
r=q.h(0,"at")
p=B.bh(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Cp.h(0,o)
s=s==null?null:J.t(s,"at")
n=B.bh(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbt())s=r===n.gbt()&&p.b>n.gcG()}if(s){s=$.Cp
r=p.aa().ag()
m=q.h(0,"id")
s.n(0,o,B.J(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
h9N(){var w=$.Co
return w.bq(w,new C.cg2())},
WI(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WI=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uE("civic_hati_kiapo_uongozi",null,A.ej),$async$WI)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a7(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a2(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Cp
i=new B.cc(j,B.a4(j).k("cc<1,2>")).aU(0,new C.cg4(k))
if(n.b(o.h(a2,"deletedByState")))C.hqX(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i4(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gR(o)
h=j.b
if(!n.b(h))continue
g=C.Xl(B.a2(h,m,l))
h=$.Co
j=j.a
f=J.kR(j)
e=h.h(0,f.v(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbt())h=a0===d.gbt()&&h.b<d.gcG()
else h=!0
h=!h}else h=!0
if(h)$.Co.n(0,f.v(j),g)}C.h9N()
$.hqW=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WJ(),$async$WI)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Co,o=new B.cc(o,B.a4(o).k("cc<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Cp,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],m,l),null),$async$WI)
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
return B.i($async$WI,v)},
OA(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$OA=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cg3&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$OA)
case 7:r=a4
q=B.aU(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aQ(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i4(p),g=g.gae(g),f=x.z;g.C();){n=g.gR(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xl(B.a2(i.a(n.b),h,f)))}$.Co=o}}m=B.aU(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.X.aQ(0,m,null)
if(x.f.b(l))C.hqX(l)}C.h9N()
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
return B.b(B.c9(),$async$OA)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WI(),$async$OA)
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
case 16:case 12:$.cg3=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OA,v)},
WJ(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WJ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WJ)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Co,o=new B.cc(o,B.a4(o).k("cc<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aD("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aw(r,null)),$async$WJ)
case 7:w=8
return B.b(s.aD("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.X.aw($.Cp,null)),$async$WJ)
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
return B.i($async$WJ,v)},
a8D(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8D=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.OA(!1),$async$a8D)
case 3:r=$.hqW
w=r==null||new B.V(Date.now(),0,!1).bD(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8B(),$async$a8D)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WI(),$async$a8D)
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
break}o=$.Co.h(0,p)
n=o==null?null:o.hQ()
if(n==null){u=null
w=1
break}u=C.bFg(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8D,v)},
cg5(d){var w=0,v=B.j(x.y),u,t
var $async$cg5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.OA(!1),$async$cg5)
case 3:t=A.a.i(d).toLowerCase()
u=$.Cp.am(0,t)&&$.Co.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cg5,v)},
a8C(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8C=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.OA(!1),$async$a8C)
case 3:o=$.Co.W(0,i)
n=$.Cp
m=new B.V(Date.now(),0,!1).aa().ag()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.J(["at",m,"id",l],k,k))
$.cg3=!0
w=4
return B.b(C.WJ(),$async$a8C)
case 4:w=5
return B.b(C.a8B(),$async$a8C)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Co,n=new B.cc(n,B.a4(n).k("cc<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Cp,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],k,x.z),null),$async$a8C)
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
return B.i($async$a8C,v)},
OB(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$OB=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8B(),$async$OB)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WI(),$async$OB)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Cp.h(0,a0)
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
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Co.n(0,a0,l)
C.h9N()
$.cg3=!0
w=11
return B.b(C.WJ(),$async$OB)
case 11:w=12
return B.b(C.a8B(),$async$OB)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Co,m=new B.cc(m,B.a4(m).k("cc<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Cp,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],d,x.z),null),$async$OB)
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
arG(d){var w=0,v=B.j(x.T),u,t,s
var $async$arG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i_().a6R(A.eQ),$async$arG)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$arG)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1Q(t,d),$async$arG)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arG,v)},
b1Q(d,e){return C.hWG(d,e)},
hWG(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1Q=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b1Q)
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
p=n.iB("media")
w=8
return B.b(p.xL(q,new Uint8Array(B.cf(d)),D.bMj),$async$b1Q)
case 8:n=p.Df(q)
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
return B.i($async$b1Q,v)},
Lz(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.eu(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,l,m,n)},
ftl(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.eu(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
he4(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.j.D(i*0.0017,0.02,0.06)
return C.eu(h,!1,j,A.aH,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cK,A.U,"",v,w,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.cu,D.d1,g,e,f)},
fsU(d,e,f,g){return C.ftl(0,0.002,D.fP,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
he5(d,e,f,g,h,i,j,k){var w=C.cE()
return C.eu(A.re,!1,j,A.aH,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bs,A.a8,"",h,w,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.cu,D.d1,g,e,f)},
hz5(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.eo(v,w,"").split(":"))},
bFg(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hz5(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.ls&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hgS(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Ct(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.I)(w),++n){m=w[n]
l=C.hz5(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.ls&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fPk(a2))}else A.d.bq(a1.z,new C.fPl())
A.d.I(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fRj(a0))a0.ax=a6.f.aa().ag()
return a0},
hgS(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fS6(D.a8t),l=C.cE(),k=x.u,j=B.a([C.eu(A.bp,!1,s,A.aH,"marriage_locked_bg",r,24,A.bs,A.a8,"",1,C.cE(),m,"","",0,!1,"",0,D.bm,q,2,"",0,0,"",D.cu,D.lT,1,0,0)],k),i=B.a([],k)
i.push(C.Lz("NGMY",A.K,236069181,52,A.bs,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lz("TAREHE:",A.bp,o,16,A.bs,A.I,A.j.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.he4("tarehe",0.8059999999999999,0.026,0.18,A.bp,16,p,C.hz6()))
i.push(C.fsU(0.8099999999999999,0.026+A.j.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lz("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bs,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lz("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cK,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.ftl(0,0.002,D.fP,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.he5("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.he5("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.he5("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.ftl(268435456,0.175,D.bm,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lz("VIDEO YA KIAPO",A.bp,o,10,A.bs,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eu(A.bp,!1,s,A.aH,"__kiapo_video__",r,24,A.bs,A.a8,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bm,q,2,"",0,0,"",D.cu,D.lT,0.77,0.115,0.492))
i.push(C.Lz("Rais Anayeapa:",A.bp,p,15,A.bs,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lz("Jina:",A.bp,p,13,A.bs,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.he4("rais_jina",0.195,0.6930000000000001,0.62,A.bp,13,p,""))
i.push(C.fsU(0.195,0.7130000000000001,0.62,n))
i.push(C.Lz("Sahihi:",A.bp,p,13,A.bs,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eu(A.bp,!1,s,A.aH,"marriage_sign_rais",0,24,A.bs,A.a8,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,0.38,0.21500000000000002,0.73))
i.push(C.fsU(0.21500000000000002,0.795,0.38,n))
i.push(C.Lz("Tarehe:",A.bp,p,13,A.bs,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.he4("rais_tarehe",0.745,0.74,0.2,A.bp,12,p,C.hz6()))
i.push(C.fsU(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.u(i,B.a([C.ftl(0,0.032,D.bm,o,1,"state_box",0.72,0.14,0.875),C.Lz("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bs,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.u(j,i)
v=C.t1(4294967035,t,0,0,j,l,D.r3,"","",u,D.ds)
return C.Ct(t,t,t,t,D.oU,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3i(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3i=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fjJ)
w=1
break}w=3
return B.b(C.OA(!0),$async$a3i)
case 3:w=4
return B.b(C.a8D(p),$async$a3i)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hEy(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bns,null,new C.fK9(p),f,!0,!0,!1,A.lU,!1,!1,x.N),$async$a3i)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fKa(),f,null,!0,!0,x.y),$async$a3i)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hgS(p))
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
return B.b(C.cg5(p),$async$a3i)
case 13:case 12:if(l){if(f.e!=null)f.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hgS(p))
case 1:return B.h(u,v)}})
return B.i($async$a3i,v)},
ftU:function ftU(){},
cg1:function cg1(){},
cg2:function cg2(){},
cg4:function cg4(d){this.a=d},
fPk:function fPk(d){this.a=d},
fPl:function fPl(){},
fK9:function fK9(d){this.a=d},
fK7:function fK7(d){this.a=d},
fK8:function fK8(d){this.a=d},
fKa:function fKa(){},
fK5:function fK5(d){this.a=d},
fK6:function fK6(d){this.a=d},
asa:function asa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFU:function aFU(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ems:function ems(d){this.a=d},
emq:function emq(d){this.a=d},
emr:function emr(d){this.a=d},
emt:function emt(d){this.a=d},
emu:function emu(d){this.a=d},
xc(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.eu(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",j,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,l,m,n)},
hyH(d,e,f){var w=4291404327
return B.a([C.qz(0,f,D.f2,w,2,"ring_l",f,d-f*0.42,e),C.qz(0,f,D.f2,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fsj(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qz(4294967288,f,D.f2,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qz(h,s,D.f2,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qz(h,f*0.46,D.f2,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qz(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.eu(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
fsi(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.j.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eu(h,!1,k,A.aH,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cK,A.U,"",v,w,null,"","",0,!1,"",0,D.bm,4280172719,2,l,0,0,"",D.cu,D.d1,g,e,f)},
bCD(d,e,f,g){return C.qz(0,0.002,D.fP,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hyG(d,e,f,g,h){var w=A.j.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qz(0,0.036,D.bm,h,1.4,"banner_box_"+d,w,v,e),C.xc(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hEi(){var w=new B.V(Date.now(),0,!1),v=new C.fQq()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hyI(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.xc(r+".",A.bp,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fsi("witness_"+d+"_"+r+"_name",q,g,p,A.bp,!0,16,j,"[Jina la Shahidi]"),C.bCD(q,g+A.j.D(0.0272,0.02,0.06),p,w),C.xc("Sahihi:",A.bp,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eu(A.bp,!1,4279310375,A.aH,"marriage_sign_"+d+"_witness_"+r,0,24,A.bs,A.a8,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,s,t,g-0.004),C.bCD(t,g+0.044,s,w)],x.u)},
aim(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.duG,D.cwc,D.dmu,D.dox],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.I)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hdg(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fS6(d.d),v=B.a([C.eu(A.bp,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cE(),w,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lT,1,0,0)],x.u)
A.d.u(v,C.ib1(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
ib1(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.xc("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.u(c2,C.hyH(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.u(c2,C.hyH(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.u(c2,C.fsj(0.16,0.018,0.052,!1,b9))
A.d.u(c2,C.fsj(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.xc("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.u(c2,B.a([C.qz(0,0.062,D.f2,b1,1.6,"crest_o",0.11,0.445,0.012),C.qz(0,0.046,D.f2,b1,1,"crest_i",0.084,0.458,0.02),C.xc("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.u(c2,B.a([C.qz(0,0.002,D.fP,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qz(b9,0.016,D.lt,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qz(0,0.002,D.fP,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.u(c2,B.a([C.xc("TAREHE:",A.bp,c0,20,A.I,A.j.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fsi("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bp,!1,21,b9,C.hEi()),C.bCD(0.814,0.026+A.j.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.xc(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qz(c0,0.0026,D.bm,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qz(c3.e,0.138,D.bm,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.eu(A.bp,!1,b9,A.aH,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bs,A.cE,"",0.128,s,a9,"","",0,!1,"",0,D.bm,b3,2,c5,0,0,"",D.cu,D.d1,0.82,0.09,t))
t+=c4
if(c8){r=A.j.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qz(0,0.036,D.bm,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.u(c2,B.a([s,C.eu(A.K,!1,c0,A.aH,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bs,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bm,b3,2,c7,0,0,"",D.cu,D.d1,r,q,t+0.00612)],c1))}else A.d.u(c2,C.hyG(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.xc(c9,A.bp,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.D(0.037399999999999996,0.02,0.06):A.j.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fsi("mahari_"+p,0.132,k,m,A.bp,!1,16,b9,s)
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
d=B.a([new C.eR(""+1000*i+"_"+h,D.d1,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bs,A.aH,c0,A.bp,a9,D.bm,b2,b3,2,0,!1,s,0,D.cu,0,"","","","","",!1,0),j,new C.eR(""+1000*f+"_"+e,D.fj,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bs,A.aH,b6,A.bp,a9,D.fP,0,b5,0.8,0,!1,g,0,D.cu,0,"","","","","",!1,0)],c1)
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
A.d.u(d,B.a([new C.eR(""+1000*s+"_"+p,D.d1,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bs,A.aH,b7,A.e4,a9,D.bm,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cu,0,"","","","","",!1,0),new C.eR(""+1000*i+"_"+h,D.fj,a1,a2,0.046,0.025875,"",24,A.a8,A.bs,A.aH,b6,A.bp,a9,D.bm,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cu,0,"","","","","",!1,0),new C.eR(""+1000*g+"_"+f,D.d1,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bs,A.aH,b7,A.K,a9,D.bm,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cu,0,"","","","","",!1,0),new C.eR(""+1000*e+"_"+a3,D.fj,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bs,A.aH,b6,A.bp,a9,D.bm,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cu,0,"","","","","",!1,0)],c1))}A.d.u(c2,d)
t+=0.04}t+=0.006
A.d.u(c2,C.hyG("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a8k||w===D.a8m||w===D.a8j||w===D.a8l){w=t-0.008
A.d.u(c2,C.fsj(0.21,w,0.044,!0,b0))
A.d.u(c2,C.fsj(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.u(c2,B.a([C.qz(0,a4,D.bm,c0,1.3,"wit_table_border",0.82,0.09,t),C.qz(c0,a4,D.bm,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qz(0,0.0022,D.fP,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.xc("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.xc("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.u(c2,C.hyI("mke",a6,0.106,a5,0.378,c0,b9))
A.d.u(c2,C.hyI("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.u(c2,B.a([C.qz(0,0.11,D.bm,c0,1.2,"mw_box",0.82,0.09,t),C.xc("MWANDISHI",A.bp,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.xc("Jina:",A.bp,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fsi("mwandishi_jina",0.215,w,0.3116,A.bp,!0,15,b9,""),C.bCD(0.215,p,0.3116,b5),C.xc("Sahihi:",A.bp,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.eu(A.bp,!1,b6,A.aH,"marriage_sign_mwandishi",0,24,A.bs,A.a8,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,0.3161999999999999,0.5738,s-0.044),C.bCD(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.u(c2,B.a([C.qz(0,0.032,D.bm,c0,1,"state_box",0.7,0.15,a8),C.xc("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
in8(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hhw(d.d),p=new C.fQm(s),o=new C.fQn(s),n=d.z,m=n===D.a8k||n===D.a8m||n===D.a8j||n===D.a8l,l=n===D.aKQ||n===D.a8n||n===D.aKR,k=B.bS(0,B.fU(q,A.A,t,t,A.ck,A.c0,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a8n?26:16
i.push(new C.fQp().$1$size(w))}if(n===D.aKS)i.push(D.h1f)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iX,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.m(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.l(4)
i.push(B.r(t,B.x(B.a([p.$0(),D.aUs,p.$1$w(0.9),D.aUs,p.$1$w(0.75)],j),A.l,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bhW,t,n,w,t,t,A.n),t,t,t,t,A.anA,t,t,t))
i.push(A.am)
i.push(new C.fQo(r).$1("NIMETOWE"))
i.push(A.fF)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.O5,new B.c8(A.aL,A.e,A.i,A.l,t,A.p,t,0,B.a([B.r(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.dh,new B.bz(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.u(i,v)
i.push(A.b1)
i.push(B.d(d.b,t,t,t,t,t,t,B.m(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(D.bDm,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hDD(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aim(e,t)
if(r==null)r=A.d.gH(D.Ic)
w=C.cE()
v=C.t1(r.e,t,0,0,C.hdg(r,0.165,y.O,D.dp8,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r3,"","",s,D.ds)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ct(t,t,t,t,D.oU,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hDE(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aim(e,t)
if(r==null)r=A.d.gH(D.Ic)
w=C.cE()
v=C.t1(r.e,t,0,0,C.hdg(r,0.165,y.f,D.dkp,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r3,"","",s,D.ds)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ct(t,t,t,t,D.oU,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGC(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h1x(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGC,v)},
ahX(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahX=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fKd(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nf,null,new C.fKe(p),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahX)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGC(d,"Hati ya Kuhowa",D.Ic),$async$ahX)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HH(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahX)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hDD(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahX,v)},
ahY(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahY=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fKh(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nf,null,new C.fKi(p),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahY)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGC(d,"Hati ya Kuhoweya",D.Ic),$async$ahY)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HH(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahY)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hDE(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahY,v)},
ahZ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahZ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fKl(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nf,null,new C.fKm(m),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahZ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGC(d,"Malipo ya Awamu ya Mahari",D.SD),$async$ahZ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HH(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahZ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aim(s,D.SD)
if(q==null)q=A.d.gH(D.SD)
n=C.cE()
p=C.t1(q.e,null,0,0,C.hdg(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.deM,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r3,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.ds)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Ct(null,null,null,null,D.oU,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahZ,v)},
yg:function yg(d,e){this.a=d
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
fQq:function fQq(){},
fQm:function fQm(d){this.a=d},
fQo:function fQo(d){this.a=d},
fQp:function fQp(){},
fQn:function fQn(d){this.a=d},
h1x:function h1x(d,e){this.a=d
this.b=e},
aeK:function aeK(d,e,f){this.c=d
this.d=e
this.a=f},
e8R:function e8R(d,e,f){this.a=d
this.b=e
this.c=f},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e8P:function e8P(d,e){this.a=d
this.b=e},
ae8:function ae8(d,e,f){this.c=d
this.d=e
this.a=f},
fKd:function fKd(){},
fKe:function fKe(d){this.a=d},
fKb:function fKb(d){this.a=d},
fKc:function fKc(d){this.a=d},
fKh:function fKh(){},
fKi:function fKi(d){this.a=d},
fKf:function fKf(d){this.a=d},
fKg:function fKg(d){this.a=d},
fKl:function fKl(){},
fKm:function fKm(d){this.a=d},
fKj:function fKj(d){this.a=d},
fKk:function fKk(d){this.a=d},
LC(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.eu(e,!1,f,A.aH,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,k,l,m)},
Dv(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.eu(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
hzs(d,e,f){return C.Dv(0,0.002,D.fP,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCO(d,e,f,g,h){return B.a([C.Dv(4294967288,0.032,D.bm,4291404327,1.15,"pill_"+d,g,f,e),C.LC(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
he9(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dv(0,0.002,D.fP,g,1,"orn_l_"+t,u,d,v),C.Dv(h,0.016,D.lt,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dv(0,0.002,D.fP,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2I(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.LC(d,A.bp,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.eu(A.K,!1,j,A.aH,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cK,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.cu,D.d1,t,u,g-0.002),C.hzs(u,g+0.018,t)],x.u)},
hzt(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dv(h,0.028,D.bm,h,0,"chv_"+d,g,e,f),C.Dv(w,0.024,D.lt,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dv(w,0.024,D.lt,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.LC(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCN(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.LC("Sahihi:",A.bp,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.eu(A.bp,!1,4279310375,A.aH,"marriage_sign_"+d,0,24,A.bs,A.a8,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.cu,D.fj,v,w,f-0.006),C.hzs(w,f+0.016,v)],x.u)},
hhx(d){var w,v
for(w=0;w<19;++w){v=D.SU[w]
if(v.a===d)return v}return null},
ipw(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aim(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aim(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.aim(u,D.SD)
v=w==null?l:w.d
if(v==null){w=C.aim(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hhx(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hAj.a8(0)
$.hAv.a8(0)
t=C.fS6(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.I)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hiH(d){var w=0,v=B.j(x.T),u
var $async$hiH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h34(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hiH,v)},
yj:function yj(d,e){this.a=d
this.b=e},
o9:function o9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blZ:function blZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h34:function h34(){},
aeN:function aeN(d){this.a=d},
ere:function ere(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
agt:function agt(d,e,f){this.c=d
this.d=e
this.a=f},
hhw(d){return $.hAv.c3(0,d,new C.fS8(d))},
fS6(d){return $.hAj.c3(0,d,new C.fS7(d))},
fI(d){return B.h7n(d>>>16&255,d>>>8&255,d&255,255)},
ief(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hBB(4294570461,4293910718,4284234270,u)
case 1:return C.hBB(4294635750,4293975240,t,4292912216)
case 2:w=C.fqQ(s,4294505966,r)
C.bCx(w,14,16,p)
C.kN(w,8,9,464,836,u,1.2)
C.Dr(w,2,2,1,1,u,10)
C.Dr(w,478,2,-1,1,u,10)
C.Dr(w,2,852,1,-1,u,10)
C.Dr(w,478,852,-1,-1,u,10)
return w
case 3:return C.fqQ(4294966515,4294373082,4289102906)
case 4:return C.i8J(C.fqQ(4294376440,4293653998,4290287194))
case 5:w=C.fqQ(4294965238,4294437098,4288444980)
C.bCx(w,14,16,4283043359)
C.kN(w,6,7,468,840,u,1)
C.kN(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,n,4294175448)
C.tl(v,n)
C.kN(v,24,24,432,806,4286209070,1)
C.a2v(v,12,12,468,12,o,3,20)
C.a2v(v,12,842,468,842,o,3,20)
C.a2v(v,12,12,12,842,o,3,20)
C.a2v(v,468,12,468,842,o,3,20)
return v
case 7:return C.i6t(4294440434,4293518297,4280228630,r)
case 8:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,m,4293911504)
C.tl(v,m)
C.kN(v,28,28,424,798,l,1)
C.fAv(v,28,28,l,k)
C.fAv(v,452,28,l,k)
C.fAv(v,28,826,l,k)
C.fAv(v,452,826,l,k)
return v
case 9:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,j,4294111986)
C.tl(v,j)
C.kN(v,18,18,444,818,4292401368,0.7)
B.iZ(v,!0,C.fI(p),0,13,0,853)
return v
case 10:return C.iaO(i,4294173372)
case 11:return C.ibZ(4294439140,4293449662)
case 12:return C.i6f(h,4294239432)
case 13:return C.ibo(4294244340,4293193448)
case 14:return C.ifL(4294505710,4293780694)
case 15:return C.fpA(4294966259,4294439138,o,p,q)
case 16:return C.fpA(4294966776,4294178544,o,g,g)
case 17:return C.fpA(4294965493,4294504170,o,4286200650,q)
case 18:return C.fpA(4294966519,4294373862,o,p,p)
case 19:return C.i9U()
case 20:return C.i9V()
case 21:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,h,4293976768)
C.tl(v,h)
C.bCx(v,14,16,p)
B.iZ(v,!0,C.fI(u),4,475,4,9)
B.iZ(v,!0,C.fI(u),4,475,844,849)
B.iZ(v,!0,C.fI(u),4,9,4,849)
B.iZ(v,!0,C.fI(u),470,475,4,849)
C.a2v(v,10,12,470,12,u,2,16)
C.a2v(v,10,842,470,842,u,2,16)
C.a2v(v,10,12,10,842,u,2,18)
C.a2v(v,470,12,470,842,u,2,18)
C.Dr(v,2,2,1,1,t,10)
C.Dr(v,478,2,-1,1,t,10)
C.Dr(v,2,852,1,-1,t,10)
C.Dr(v,478,852,-1,-1,t,10)
C.kN(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,s,4294438872)
C.tl(v,s)
C.kN(v,14,16,452,822,o,2.2)
C.kN(v,22,24,436,806,o,1)
C.hfA(v,!1,!1,o,p,p,36,14,16)
C.l3(v,240,20,7,o,!0)
C.l3(v,240,834,7,o,!0)
C.l3(v,18,427,7,o,!0)
C.l3(v,462,427,7,o,!0)
return v
case 23:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,i,4293910712)
C.tl(v,i)
B.iZ(v,!0,C.fI(u),0,479,0,20)
B.iZ(v,!0,C.fI(u),0,479,834,853)
B.iZ(v,!0,C.fI(u),0,20,0,853)
B.iZ(v,!0,C.fI(u),460,479,0,853)
B.iZ(v,!0,C.fI(f),5,474,5,9)
B.iZ(v,!0,C.fI(f),5,474,844,848)
B.iZ(v,!0,C.fI(f),5,9,5,848)
B.iZ(v,!0,C.fI(f),470,474,5,848)
C.kN(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hr(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.zb(v,e,4294174404)
C.tl(v,e)
C.bCx(v,14,16,p)
B.iZ(v,!0,C.fI(u),3,476,3,8)
B.iZ(v,!0,C.fI(u),3,476,845,850)
B.iZ(v,!0,C.fI(u),3,8,3,850)
B.iZ(v,!0,C.fI(u),471,476,3,850)
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
zb(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.l5(d,!1,A.dl,new B.MS(s),r,A.d6,1,0,w-1,k,k);++k}},
tl(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e2()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iw()
v=A.o.D(A.j.M(s.gb9(s))-3,0,255)
r=A.o.D(A.j.M(s.gbe())-3,0,255)
q=A.o.D(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kN(d,e,f,g,h,i,j){var w,v=null,u=C.fI(i),t=e+g
B.l5(d,!0,A.dl,u,v,A.d6,j,e,t,f,f)
w=f+h
B.l5(d,!0,A.dl,u,v,A.d6,j,e,t,w,w)
B.l5(d,!0,A.dl,u,v,A.d6,j,e,e,f,w)
B.l5(d,!0,A.dl,u,v,A.d6,j,t,t,f,w)},
Dr(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.j.V(j*0.72),8,j-2)
B.l5(d,!0,A.dl,C.fI(i),u,A.d6,2,e,e+g*j,f,f)
B.l5(d,!0,A.dl,C.fI(i),u,A.d6,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l5(d,!0,A.dl,C.fI(i),u,A.d6,1,w,e+g*t,v,v)
B.l5(d,!0,A.dl,C.fI(i),u,A.d6,1,w,w,v,f+h*t)},
hBB(d,e,f,g){var w=null,v=B.hr(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.zb(v,d,e)
C.tl(v,d)
B.iZ(v,!0,C.fI(f),0,479,0,28)
B.iZ(v,!0,C.fI(f),0,479,826,853)
B.iZ(v,!0,C.fI(f),0,28,0,853)
B.iZ(v,!0,C.fI(f),452,479,0,853)
C.kN(v,5,5,470,844,g,1.1)
C.kN(v,28,28,424,798,g,1.6)
C.Dr(v,2,2,1,1,g,11)
C.Dr(v,478,2,-1,1,g,11)
C.Dr(v,2,852,1,-1,g,11)
C.Dr(v,478,852,-1,-1,g,11)
return v},
fqQ(d,e,f){var w=null,v=B.hr(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.zb(v,d,e)
C.tl(v,d)
C.kN(v,14,16,452,822,f,1.6)
C.kN(v,20,22,440,810,f,0.8)
return v},
bCx(d,e,f,g){var w,v=C.fI(g)
B.iZ(d,!0,v,0,479,0,f-1)
w=854-f
B.iZ(d,!0,v,0,479,w,853);--w
B.iZ(d,!0,v,0,e-1,f,w)
B.iZ(d,!0,v,480-e,479,f,w)},
i8J(d){var w,v,u=4291404327
C.bCx(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l3(d,w,8,3,u,!0)
C.l3(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l3(d,7,v,3,u,!0)
C.l3(d,473,v,3,u,!0)}return d},
fDP(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ju(e,f),new B.ju(e+g*n,f),new B.ju(e,f+h*n)],t)
B.a3e(d,C.fI(m),s)
w=A.o.D(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ju(s,u),new B.ju(e+g*v,u),new B.ju(s,f+h*v)],t)
B.a3e(d,C.fI(k),t)
t=A.j.V(n*0.39)
C.l3(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l3(d,e+g*t,f+h*3,4,k,!0)
C.l3(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l3(d,e+g*t,f,5,k,!0)
C.l3(d,e,f+h*t,5,k,!0)}},
hfA(d,e,f,g,h,i,j,k,l){var w,v
C.fDP(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fDP(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fDP(d,k,v,1,-1,e,f,g,h,i,j)
C.fDP(d,w,v,-1,-1,e,f,g,h,i,j)},
a2v(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lo(d,!0,A.dl,new B.rv(p),null,A.d6,j,r,q)}},
fCG(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l5(d,!0,A.dl,new B.rv(o),null,A.d6,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l5(d,!0,A.dl,new B.rv(o),null,A.d6,1.4,q,q,p,p+h*r)}},
i6t(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hr(o,o,A.cc,0,A.eb,854,o,0,3,o,A.cc,480,!1)
C.zb(n,d,e)
C.tl(n,d)
C.kN(n,20,20,440,814,f,1.2)
C.fCG(n,0,0,1,1,g)
C.fCG(n,480,0,-1,1,g)
C.fCG(n,0,854,1,-1,g)
C.fCG(n,480,854,-1,-1,g)
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
B.l5(n,!0,A.dl,new B.rv(p),o,A.d6,1.2,240,r,60,q)}return n},
fAv(d,e,f,g,h){var w
C.fHB(d,!0,C.fI(g),13,e,f)
C.fHB(d,!0,C.fI(g),9,e,f)
w=B.a([new B.ju(e,f-4),new B.ju(e+4,f),new B.ju(e,f+4),new B.ju(e-4,f)],x.J)
B.a3e(d,C.fI(h),w)},
l3(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ju(e,v),new B.ju(u,f),new B.ju(e,t),new B.ju(s,f)],x.J)
if(i){B.a3e(d,C.fI(h),r)
return}B.l5(d,!0,A.dl,C.fI(h),w,A.d6,1,e,u,v,f)
B.l5(d,!0,A.dl,C.fI(h),w,A.d6,1,u,e,f,t)
B.l5(d,!0,A.dl,C.fI(h),w,A.d6,1,e,s,t,f)
B.l5(d,!0,A.dl,C.fI(h),w,A.d6,1,s,e,f,v)},
fpz(d,e,f,g,h,i,j){var w,v=B.a([new B.ju(e,f),new B.ju(e+g*28,f),new B.ju(e,f+h*28)],x.J)
B.a3e(d,C.fI(i),v)
v=e+g*14
w=f+h*14
C.l3(d,v,w,6,j,!0)
C.l3(d,v,w,3,i,!0)},
fpA(d,e,f,g,h){var w=null,v=B.hr(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.zb(v,d,e)
C.tl(v,d)
C.kN(v,18,18,444,818,f,2)
C.kN(v,26,26,428,802,f,0.9)
if(h!=null)B.iZ(v,!0,C.fI(h),28,451,28,34)
C.fpz(v,18,18,1,1,g,f)
C.fpz(v,462,18,-1,1,g,f)
C.fpz(v,18,836,1,-1,g,f)
C.fpz(v,462,836,-1,-1,g,f)
return v},
i9U(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hr(v,v,A.cc,0,A.eb,854,v,0,3,v,A.cc,480,!1)
C.zb(r,u,4294240980)
C.tl(r,u)
C.kN(r,10,12,460,830,t,3.2)
C.kN(r,18,20,444,814,s,1.2)
C.kN(r,24,26,432,802,t,1.8)
C.hfA(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l3(r,w,16,3,t,!0)
C.l3(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l3(r,16,w,3,t,!0)
C.l3(r,464,w,3,t,!0)}return r},
i9V(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hr(t,t,A.cc,0,A.eb,854,t,0,3,t,A.cc,480,!1)
C.zb(p,s,4294373080)
C.tl(p,s)
C.kN(p,16,18,448,818,r,2.4)
C.kN(p,24,26,432,802,4286209044,1)
w=new C.fsa(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hfA(p,!1,!0,r,q,q,34,16,18)
return p},
bDf(d,e,f,g,h,i){B.iZ(d,!0,C.fI(i),e,e+g,f,f+h)},
bE6(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.l5(d,!1,A.dl,new B.MS(i),null,A.d6,1,e,w,l,l)}},
iaN(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.aq(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l5(d,!1,A.dl,new B.rv(r),null,A.d6,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.aq(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l5(d,!1,A.dl,new B.rv(r),null,A.d6,1,t,t,f,s);++q}},
iaO(d,e){var w,v,u=null,t=B.hr(u,u,A.cc,0,A.eb,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.iaN(t,v,w,30,D.d6Q,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bDf(t,44,44,392,766,d)
C.bE6(t,44,44,392,766,d,e)
C.tl(t,d)
C.kN(t,44,44,392,766,4292128567,2.2)
C.kN(t,50,50,380,754,4279898632,0.8)
return t},
ibY(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l3(d,e,f,7,h,!0)
C.l3(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l5(d,!0,A.dl,C.fI(h),o,A.d6,1.6,w,u,v,t)
B.l5(d,!0,A.dl,C.fI(h),o,A.d6,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l5(d,!0,A.dl,new B.rv(p),o,A.d6,1.2,w,v,q,q)}break
default:B.l5(d,!0,A.dl,C.fI(h),o,A.d6,1.5,e-8,e+8,f,f)
B.l5(d,!0,A.dl,C.fI(h),o,A.d6,1.5,e,e,f-8,f+8)
B.lo(d,!0,A.dl,C.fI(h),o,A.d6,2,e,f)}},
ibZ(d,e){var w,v,u,t,s=null,r=B.hr(s,s,A.cc,0,A.eb,854,s,0,3,s,A.cc,480,!1)
B.iZ(r,!0,C.fI(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.ibY(r,u,v,w,4292391514)}C.bDf(r,46,46,388,762,d)
C.bE6(r,46,46,388,762,d,e)
C.tl(r,d)
C.kN(r,46,46,388,762,4291404327,1.8)
return r},
hwP(d,e,f,g){C.fHB(d,!0,C.fI(g),16,e,f)
C.fHB(d,!0,C.fI(g),11,e,f)
C.l3(d,e,f,6,g,!0)
B.l5(d,!0,A.dl,C.fI(g),null,A.d6,1.3,e-14,e+14,f,f)
B.l5(d,!0,A.dl,C.fI(g),null,A.d6,1.3,e,e,f-14,f+14)},
i6f(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hr(v,v,A.cc,0,A.eb,854,v,0,3,v,A.cc,480,!1)
B.iZ(s,!0,C.fI(4280948752),0,479,0,853)
B.iZ(s,!0,C.fI(u),0,479,0,78)
B.iZ(s,!0,C.fI(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hwP(s,w,39,t)
C.hwP(s,w,815,t)}C.bDf(s,38,92,404,670,d)
C.bE6(s,38,92,404,670,d,e)
C.tl(s,d)
C.kN(s,38,92,404,670,t,1.8)
C.kN(s,45,99,390,656,4287322667,0.8)
return s},
ibn(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ju(e,f),new B.ju(q-5,w),new B.ju(q,f-(18-Math.abs(r)*3)),new B.ju(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a3e(d,new B.rv(o),p)}B.lo(d,!0,A.dl,C.fI(4292128567),null,A.d6,3,e,f)},
ibo(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hr(s,s,A.cc,0,A.eb,854,s,0,3,s,A.cc,480,!1)
C.zb(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l5(q,!0,A.dl,new B.rv(v),s,A.d6,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l5(q,!0,A.dl,new B.rv(u),s,A.d6,1.1,v,v,0,853)}B.iZ(q,!0,C.fI(r),0,479,0,70)
B.iZ(q,!0,C.fI(r),0,479,798,853)
for(t=0;t<5;++t)C.ibn(q,70+t*85,48,4292128567)
C.bDf(q,48,78,384,712,d)
C.bE6(q,48,78,384,712,d,e)
C.tl(q,d)
C.kN(q,48,78,384,712,4291404327,1.6)
return q},
ifL(d,e){var w,v,u,t=null,s=4279970378,r=B.hr(t,t,A.cc,0,A.eb,854,t,0,3,t,A.cc,480,!1)
B.iZ(r,!0,C.fI(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l3(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lo(r,!0,A.dl,new B.rv(u),t,A.d6,1,v,w)}C.bDf(r,40,40,400,774,d)
C.bE6(r,40,40,400,774,d,e)
C.tl(r,d)
C.kN(r,40,40,400,774,4291058750,2)
C.kN(r,48,48,384,758,s,0.8)
return r},
ld:function ld(d,e){this.a=d
this.b=e},
fS8:function fS8(d){this.a=d},
fS7:function fS7(d){this.a=d},
fsa:function fsa(d){this.a=d},
fSR(d){var w
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
ibR(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
he2(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p7(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aQ(0,Ak.aij(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
agQ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vY(null,""),$async$agQ)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nm(n)
if(e==null)s=A.i5
else{r=C.ibR(e)
s=B.a([new B.a1s(A.cU.gcu().aO(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rj(t,d,s,"news",E.GJ),$async$agQ)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.M3(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agQ,v)},
bFK(d){return C.ipc(d)},
ipc(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agQ(r,null),$async$bFK)
case 7:q=f
p=C.he2(q)
if(p==null){u=d
w=1
break}o=d.aEU(p)
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
return B.i($async$bFK,v)},
hAP(d){var w,v=F.hgO(d)
v=B.aL(v,"book","newspaper")
if(F.a3z(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fWR(d,e,f,g){return C.ir5(d,e,f,g)},
ir5(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fWR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fSR(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hEH()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agQ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hAP(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fWR)
case 3:r=m.he2(i)
if(r==null)throw B.W(y.S)
q=new C.Ah(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEU(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aN(t," ")
if(F.a3z(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3z(A.d.aN(t," "))==="sw"?C.bFK(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWR,v)},
bFe(d,e,f,g,h){return C.imI(d,e,f,g,h)},
imI(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bFe=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aN(l,"\n")
l=C.hEH()
k=A.X.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agQ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hAP(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bFe)
case 3:p=j.he2(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aEU(B.a2(o,x.N,x.z))
m=A.X.aw(n.aj(),null)!==A.X.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3z(A.d.aN(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFK(n),$async$bFe)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9h(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFe,v)},
a9h:function a9h(d,e,f){this.a=d
this.b=e
this.c=f},
iuv(d,e){return B.a6(d,!1).ce(B.ec(new C.h3f(e),!0,null,x.H))},
h3f:function h3f(d){this.a=d},
Xb:function Xb(d,e){this.c=d
this.a=e},
aGa:function aGa(d,e,f,g,h,i,j,k){var _=this
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
eub:function eub(d){this.a=d},
eua:function eua(){},
euc:function euc(d){this.a=d},
eu9:function eu9(d,e){this.a=d
this.b=e},
eud:function eud(){},
etO:function etO(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
etW:function etW(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
etQ:function etQ(d,e){this.a=d
this.b=e},
etR:function etR(d,e){this.a=d
this.b=e},
etS:function etS(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
etP:function etP(d,e){this.a=d
this.b=e},
etM:function etM(d){this.a=d},
etN:function etN(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu4:function eu4(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
eu5:function eu5(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu6:function eu6(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu7:function eu7(d,e){this.a=d
this.b=e},
etY:function etY(d,e){this.a=d
this.b=e},
eu8:function eu8(d){this.a=d},
etL:function etL(d,e){this.a=d
this.b=e},
fRI(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fRI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hyo){w=1
break}r=new C.fRJ()
t=4
q=x.s
w=7
return B.b(B.iE(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fRI)
case 7:$.hyo=!0
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
return B.i($async$fRI,v)},
bFB(d){return A.Dy[B.mw(d)-1]+", "+A.oP[B.bM(d)-1]+" "+B.bV(d)+", "+B.bD(d)},
ieT(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dzp[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hhc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.u(h,new B.Y(v,new C.fQ0(),B.U(v).k("Y<1>")))
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
continue}o=new C.fQ2(j,h)
n=new C.fQ1(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j0(o.$1(l)))
j.a+=l}return u},
hdM(d,e){var w=new C.frJ()
return A.d.cF(e,0,new C.frH(w))>=A.d.cF(d,0,new C.frI(w))},
hvu(d){var w,v,u=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bu())
return u},
Ah:function Ah(d,e,f,g,h,i,j,k,l,m){var _=this
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
cjO:function cjO(d){this.a=d},
cjM:function cjM(){},
cjN:function cjN(){},
tR:function tR(d,e){this.a=d
this.b=e},
Ce:function Ce(d,e){this.a=d
this.b=e},
lz:function lz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fRJ:function fRJ(){},
fQ0:function fQ0(){},
fQ2:function fQ2(d,e){this.a=d
this.b=e},
fQ1:function fQ1(d,e,f){this.a=d
this.b=e
this.c=f},
frJ:function frJ(){},
frK:function frK(){},
frH:function frH(d){this.a=d},
frI:function frI(d){this.a=d},
b3l:function b3l(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjP:function cjP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjQ:function cjQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjR:function cjR(d){this.a=d},
bf_:function bf_(d){this.a=d},
beZ:function beZ(d,e){this.b=d
this.a=e},
bx1:function bx1(d){this.a=d},
bbq:function bbq(d,e){this.b=d
this.a=e},
buv:function buv(d,e){this.b=d
this.a=e},
hGO(d,e){return B.a6(d,!1).ce(B.ec(new C.h3i(e,null),!0,null,x.E))},
h3i:function h3i(d,e){this.a=d
this.b=e},
Xc:function Xc(d,e,f){this.c=d
this.d=e
this.a=f},
aGd:function aGd(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
euY:function euY(){},
euZ:function euZ(d){this.a=d},
euX:function euX(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
euM:function euM(d){this.a=d},
euS:function euS(d){this.a=d},
euT:function euT(d,e){this.a=d
this.b=e},
euQ:function euQ(d){this.a=d},
euR:function euR(d,e,f){this.a=d
this.b=e
this.c=f},
euN:function euN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euU:function euU(d,e){this.a=d
this.b=e},
euP:function euP(d,e){this.a=d
this.b=e},
euV:function euV(d){this.a=d},
euO:function euO(d,e){this.a=d
this.b=e},
euW:function euW(d,e){this.a=d
this.b=e},
bex:function bex(d,e,f){this.b=d
this.c=e
this.a=f},
iuB(d){return B.a6(d,!1).ce(B.ec(new C.h3y(),!0,null,x.I))},
bD_(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hff(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h3y:function h3y(){},
a1j:function a1j(d){this.a=d},
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
_.aH=_.aR=_.aL=_.aG=_.a0=_.bb=_.bn=_.y2=0
_.b8=null
_.b6=0.25
_.bf=null
_.bK=0.5
_.aP=1
_.c8=_.bH=_.bm=0
_.cP=_.c5=!1
_.c=_.a=null},
f3Y:function f3Y(d){this.a=d},
f2Q:function f2Q(d,e){this.a=d
this.b=e},
f3d:function f3d(d,e){this.a=d
this.b=e},
f3n:function f3n(d){this.a=d},
f2z:function f2z(d){this.a=d},
f2A:function f2A(d){this.a=d},
f2x:function f2x(d){this.a=d},
f2y:function f2y(d){this.a=d},
f36:function f36(d,e){this.a=d
this.b=e},
f37:function f37(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3j:function f3j(d,e,f){this.a=d
this.b=e
this.c=f},
f3i:function f3i(d,e){this.a=d
this.b=e},
f3k:function f3k(d,e){this.a=d
this.b=e},
f3h:function f3h(d,e){this.a=d
this.b=e},
f3m:function f3m(d,e,f){this.a=d
this.b=e
this.c=f},
f3l:function f3l(d,e){this.a=d
this.b=e},
f2p:function f2p(d){this.a=d},
f2q:function f2q(d){this.a=d},
f2r:function f2r(d){this.a=d},
f2o:function f2o(){},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2n:function f2n(d,e){this.a=d
this.b=e},
f2u:function f2u(){},
f2t:function f2t(d,e){this.a=d
this.b=e},
f2m:function f2m(d,e){this.a=d
this.b=e},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2v:function f2v(d){this.a=d},
f2l:function f2l(d,e){this.a=d
this.b=e},
f2w:function f2w(d){this.a=d},
f2k:function f2k(d,e){this.a=d
this.b=e},
f3N:function f3N(d,e){this.a=d
this.b=e},
f3U:function f3U(d){this.a=d},
f3V:function f3V(d,e){this.a=d
this.b=e},
f3W:function f3W(){},
f3O:function f3O(d,e){this.a=d
this.b=e},
f3M:function f3M(d,e){this.a=d
this.b=e},
f3P:function f3P(d,e){this.a=d
this.b=e},
f3L:function f3L(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3K:function f3K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3R:function f3R(d){this.a=d},
f3S:function f3S(d,e){this.a=d
this.b=e},
f3T:function f3T(d){this.a=d},
f3J:function f3J(d){this.a=d},
f3w:function f3w(d){this.a=d},
f3x:function f3x(d){this.a=d},
f3v:function f3v(d,e){this.a=d
this.b=e},
f3q:function f3q(d,e){this.a=d
this.b=e},
f3y:function f3y(d){this.a=d},
f3B:function f3B(d){this.a=d},
f3u:function f3u(d){this.a=d},
f3C:function f3C(d){this.a=d},
f3D:function f3D(d){this.a=d},
f3E:function f3E(d){this.a=d},
f3F:function f3F(d){this.a=d},
f3t:function f3t(d){this.a=d},
f3G:function f3G(d){this.a=d},
f3s:function f3s(d){this.a=d},
f3H:function f3H(d,e){this.a=d
this.b=e},
f3r:function f3r(d,e){this.a=d
this.b=e},
f3I:function f3I(d){this.a=d},
f3z:function f3z(d){this.a=d},
f3A:function f3A(d){this.a=d},
f3a:function f3a(d){this.a=d},
f39:function f39(d){this.a=d},
f3b:function f3b(d,e){this.a=d
this.b=e},
f38:function f38(d,e){this.a=d
this.b=e},
f3c:function f3c(d){this.a=d},
f32:function f32(d){this.a=d},
f31:function f31(d){this.a=d},
f33:function f33(d){this.a=d},
f30:function f30(d){this.a=d},
f34:function f34(d,e){this.a=d
this.b=e},
f3_:function f3_(d,e){this.a=d
this.b=e},
f2Z:function f2Z(d,e){this.a=d
this.b=e},
f2H:function f2H(d){this.a=d},
f2I:function f2I(d){this.a=d},
f2J:function f2J(d){this.a=d},
f2K:function f2K(d){this.a=d},
f2L:function f2L(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2N:function f2N(d){this.a=d},
f2O:function f2O(d){this.a=d},
f2P:function f2P(d){this.a=d},
f22:function f22(d){this.a=d},
f23:function f23(d){this.a=d},
f24:function f24(d){this.a=d},
f25:function f25(d){this.a=d},
f26:function f26(d){this.a=d},
f21:function f21(d){this.a=d},
f27:function f27(d){this.a=d},
f28:function f28(d){this.a=d},
f2B:function f2B(d){this.a=d},
f2C:function f2C(d){this.a=d},
f2D:function f2D(d){this.a=d},
f2E:function f2E(d){this.a=d},
f2F:function f2F(d){this.a=d},
f2c:function f2c(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2e:function f2e(d){this.a=d},
f2f:function f2f(d){this.a=d},
f2g:function f2g(d){this.a=d},
f2b:function f2b(d){this.a=d},
f2h:function f2h(d){this.a=d},
f2a:function f2a(d){this.a=d},
f2i:function f2i(d){this.a=d},
f29:function f29(d){this.a=d},
f35:function f35(d){this.a=d},
f2Y:function f2Y(d){this.a=d},
f2U:function f2U(d){this.a=d},
f2T:function f2T(d){this.a=d},
f2V:function f2V(d,e){this.a=d
this.b=e},
f2S:function f2S(d,e){this.a=d
this.b=e},
f2W:function f2W(d,e){this.a=d
this.b=e},
f2R:function f2R(d,e){this.a=d
this.b=e},
f2X:function f2X(d){this.a=d},
f3g:function f3g(d){this.a=d},
f3f:function f3f(d,e,f){this.a=d
this.b=e
this.c=f},
f3e:function f3e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3p:function f3p(d,e){this.a=d
this.b=e},
f3o:function f3o(d,e){this.a=d
this.b=e},
f2G:function f2G(d){this.a=d},
f3X:function f3X(d){this.a=d},
bi8:function bi8(d,e){this.b=d
this.a=e},
ipn(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ipo(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kZ(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
t=w.a+=A.a.aB(d,v,n)
p=m[r].b
p=A.a.aB(d,n,p.index+p[0].length)
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
bDB(){var w=$.bCH,v=$.RD
$.RD=v+1
return w+"_"+v},
io(d,e,f,g,h,i,j){return C.eu(A.bp,!1,4279310375,A.aH,"",i,24,A.bs,A.a8,"",h,C.bDB(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cu,D.fj,g,e,f)},
op(d,e,f,g){var w=f*9
return C.io(D.f2,d-f/2,e-w/32,f,w/16,g,0)},
i8c(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCH
o=$.RD
$.RD=o+1
w.push(new C.eR(p+"_"+o,D.fj,0,q,1,0.0016,"",24,A.a8,A.bs,A.aH,k,A.bp,null,D.bm,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCH
o=$.RD
$.RD=o+1
w.push(new C.eR(p+"_"+o,D.fj,n,0,0.004,1,"",24,A.a8,A.bs,A.aH,k,A.bp,null,D.bm,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}w.push(C.op(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.op(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.io(D.bm,0.08,0.08,0.5,0.003,v,0),C.io(D.bm,0.58,0.08,0.004,0.06,v,0),C.io(D.bm,0.58,0.14,0.34,0.003,v,0),C.io(D.bm,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.io(D.bm,0.08,0.8,0.004,0.14,t,0),C.io(D.bm,0.08,0.94,0.6,0.003,t,0),C.op(0.58,0.08,0.05,e),C.op(0.92,0.22,0.05,e),C.op(0.08,0.8,0.05,f),C.op(0.68,0.94,0.05,f),C.op(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.io(D.lt,0.62,0.04,0.34,0.2,w|855638016,0.2),C.io(D.lt,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.io(D.lt,0.7,0.8,0.22,0.12,w|1140850688,0),C.io(D.lt,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.op(0.5,0.5,1.5,w|335544320),C.op(0.5,0.5,1.15,w|402653184),C.op(0.5,0.5,0.8,v|436207616),C.op(0.95,0.05,0.4,v|855638016),C.op(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.op(0.85,0.08,0.7,w|1140850688),C.op(0.1,0.35,0.5,v|855638016),C.op(0.9,0.62,0.55,v|771751936),C.op(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.io(D.bm,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.io(D.bm,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.io(D.bm,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.io(D.bm,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.op(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.op(0.5,0.2,0.65,(w|3422552064)>>>0),C.op(0.5,0.2,0.95,w|855638016),C.io(D.bm,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.io(D.bm,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.io(D.ke,-0.1,0.78,0.7,0.2,w|1426063360,0),C.io(D.ke,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.io(D.ke,0.15,0.86,0.6,0.14,1712265002,0),C.op(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d8t[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCH
l=$.RD
$.RD=l+1
w.push(new C.eR(o+"_"+l,D.fj,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bs,A.aH,k,A.bp,null,D.f2,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}w.push(C.op(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.io(D.ke,0.35,-0.1,0.3,0.62,w|855638016,0),C.io(D.ke,0.05,-0.1,0.3,0.55,v,-0.5),C.io(D.ke,0.65,-0.1,0.3,0.55,v,0.5),C.op(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.io(D.bm,0.06,0.04,0.88,0.002,e,0),C.io(D.bm,0.06,0.96,0.88,0.002,e,0),C.io(D.bm,0.06,0.04,0.004,0.92,e,0),C.io(D.bm,0.936,0.04,0.004,0.92,e,0),C.io(D.bm,0.09,0.07,0.82,0.001,w,0),C.io(D.bm,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.io(D.kf,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.io(D.kf,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.io(D.kf,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.io(D.bm,0,0,0.3,0.09,w|1140850688,0),C.io(D.bm,0.7,0.9,0.3,0.1,v|1426063360,0),C.io(D.bm,0.82,0.04,0.12,0.07,w|771751936,0),C.io(D.bm,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.io(D.f2,0.62,0.02,0.5,0.16,v,0.6),C.io(D.f2,0.78,0.12,0.4,0.12,u,0.9),C.io(D.f2,-0.12,0.8,0.5,0.16,u,-0.6),C.io(D.f2,-0.05,0.9,0.4,0.12,v,-0.9),C.op(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.io(D.bm,0.09,0.12,0.16,0.006,e,0),C.io(D.bm,0.05,0.03,0.9,0.001,w,0),C.io(D.bm,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ilL(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCH=j
$.RD=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fNp()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eu(A.bp,!1,n,A.aH,"ngmy_quote_background",m,24,A.bs,A.a8,"",1,C.bDB(),g,"","",0,!1,"",0,D.bm,l,2,"",0,0,"",D.cu,D.lT,1,0,0))
if(a9)A.d.u(q,C.i8c(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ipn(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fNo(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cK,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.eu(A.bp,!1,n,A.aH,"ngmy_quote_logo",m,24,A.bs,A.a8,a1,a3*9/16,C.bDB(),a0,"","",0,!1,a2,0,D.bm,l,2,"",0,0,"",D.cu,D.lT,a3,a4,a5))
return C.t1(s,r,0,0,q,j+"_slide",D.r3,"","","",D.ds)},
t0:function t0(d,e){this.a=d
this.b=e},
mu:function mu(d,e,f,g,h,i,j,k,l,m){var _=this
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
fNp:function fNp(){},
fNo:function fNo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hYP(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.clj(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ai(u,t,s,B.w(w==null?"":w))},
fVd(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fVd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hyM){w=1
break}$.hyM=!0
t=4
w=7
return B.b(B.aA(),$async$fVd)
case 7:r=e
q=B.aU(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i4(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gR(h)
l=C.hYP(m)
if(l!=null)J.c5(n,l)}$.Ds.c3(0,B.w(o.a),new C.fVe(n))}C.heU()
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
return B.i($async$fVd,v)},
heU(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dq($.Ds,$.Ds.r,$.Ds.e);w.C();)J.nU(w.d,new C.fzM(v))
$.Ds.bq($.Ds,new C.fzN())},
aQl(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQl=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQl)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cc($.Ds,B.a4($.Ds).k("cc<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gR(h)
g=o
J.c5(p,B.J(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aD("String","ngmy_slides_ai_history_v1",A.X.aw(n,null)),$async$aQl)
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
return B.i($async$aQl,v)},
iq0(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.heU()
w=$.Ds.c3(0,d,new C.fVg())
v=Date.now()
u=B.C(e,B.a4(e).k("ci.E"))
J.n2(w,0,new C.Ai(new B.V(v,0,!1),f,u,g))
C.aQl()},
ipY(d){var w,v=$.Ds.h(0,d)
if(v==null||J.ct(v))return
w=J.cD(v)
w.cH(v,0)
if(w.gau(v))$.Ds.W(0,d)
C.aQl()},
Ai:function Ai(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clj:function clj(){},
fVe:function fVe(d){this.a=d},
fzM:function fzM(d){this.a=d},
fzN:function fzN(){},
fVg:function fVg(){},
iq2(d){return A.d.dL(D.x6,new C.fVj(d),new C.fVk())},
hYN(d){var w
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
hYM(d){var w
switch(d.a){case 0:w=D.aq9
break
case 1:w=A.zt
break
case 2:w=A.PZ
break
case 3:w=I.apQ
break
case 4:w=A.aqE
break
case 5:w=A.mn
break
default:w=null}return w},
ibt(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.S2[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.S2[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hYO(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.X.aw(B.J(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ipZ(d,e,f,g,h){var w=new B.N(D.x6,new C.fVc(),x.eC).aN(0,", "),v=""+d,u=C.hEz(h),t=F.fOO(h),s=C.hAt(g),r=e.q(0,D.Jw)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jx)?'- New slides get an "icon3d" from: '+A.d.aN(D.S2,", ")+".\n":"",p=e.q(0,D.E8)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iq_(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.x6,new C.fVf(),x.eC).aN(0,", "),p=new B.ff("")
if(e.q(0,D.Jw)){p.a=s
w=s}else w=""
if(e.q(0,D.Jx))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aN(D.S2,", ")+".\n")
if(e.q(0,D.E8))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hEz(d)
v=F.fOO(d)
u=C.hAt(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.v(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aiy(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DR(a3,"{"),a5=J.h6V(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mo(a3,a4,a5+1)
try{w=A.X.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fT9(),m).bY(0,new C.fTa())
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
f=C.ibt(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a9p(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fp(u).b:q))
p=A.d.aU(D.x6,new C.fTb(r))?r:a7
o=C.fz1(J.t(w,"logo_frame"),D.Du)
n=C.fz1(J.t(w,"logo_ring"),D.Do)
m=C.fz1(J.t(w,"photo_frame"),D.Du)
l=C.fz1(J.t(w,"photo_ring"),D.Do)
return new C.at4(q,p,u,o,n,m,l)}catch(a0){return a1}},
a34(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hDG(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.E9),f7=f6?C.i4A():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e2()
v.cY(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.oc("luxe",u.a,A.mn,t,u.e,u.f,B.a([s,u.d,s],x.t),D.ds)
w=s}if(w==null)w=C.iq2(f9.b)
r=g2.q(0,D.a8F)||f6
q=g2.q(0,D.Jw)
p=g2.q(0,D.U2)
o=new C.fNt()
n=B.a([],x.g)
m=new C.fNw(o,w,r)
l=new C.fNv(o,r)
k=new C.fNu(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aU(u,new C.fNs(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.da8[b8]
c0=D.d9_[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fe7.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.f2,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.f2,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f2,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.nd,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r4,500,f2,f0))
c1.push(l.$8$fx$key(D.bm,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.U_
break A}if("section"===d2){c1.push(l.$8$fx$key(D.f2,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lt,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bm,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.E6
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.f2,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f2,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.nd,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cK,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r4,500,f2,f0))
d3=D.nc
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.f2,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bm,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vp:D.cu
c1.push(new C.eR(b4,D.a8D,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bs,A.aH,4279310375,A.bp,e4,D.bm,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.nc
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.f2,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f2,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.nd,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r4,450,f2,f0))
c1.push(l.$8$fx$key(D.bm,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.U_
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.f2,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.f2,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bm,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bm,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aN(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ju,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.nc}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.ds,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i6e(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dBW[A.o.F(b1,6)]:s
n.push(new C.m3(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Ct(e4,e4,e4,e4,D.E5,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fPR(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fPR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.E8)
n=e.q(0,D.Jx)
if(!o&&!n){u=D.a7y
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fPU(o,s[r],n,$.iaa,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iE(t,x.e),$async$fPR)
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
return B.i($async$fPR,v)},
fOR(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fOR=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iq_(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPE(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fOR)
case 3:u=s.aQ_(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOR,v)},
bFf(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bFf=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.I(0,(q==null?r.a(q):q).b)}C.iq0(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aiy(i,"colorful")
t=C.ipZ(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPE(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i5),$async$bFf)
case 3:u=o.aQ_(m,f,h,g,D.egv,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFf,v)},
aPE(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPE=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vY(null,""),$async$aPE)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nm(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rj(t,d,g,"slides",null),$async$aPE)
case 7:q=i
p=q.b
if(p!=null){o=C.aiy(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.M3(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPE,v)},
aQ_(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aQ_=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.E8)||e.q(0,D.Jx)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d0(e,x.Q)
t.W(0,D.E8)}w=6
return B.b(C.fPR(d,t),$async$aQ_)
case 6:s=k
w=4
break
case 5:s=D.a7y
case 4:t=d.c
w=A.d.aU(t,new C.frD())?7:9
break
case 7:r=$.hFt
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dM(r,x.aP),$async$aQ_)
case 10:q=k
p=q!=null?A.X.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hDG(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hYO(new C.at4(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.frE(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("kb<ci.E,n>")
t=B.C(new B.kb(e,new C.frF(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.U2)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ_,v)},
hhW(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a6i[v]
if(A.d.q(t,u.b))w.I(0,u)}return w},
iuG(d){return B.bU(A.L,null,new C.h3K(),d,!0,!0,!0,null,!1,!1,x.I)},
i5d(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cU.gcu().aO(d)},
iuF(d,e,f){return B.bU(A.L,null,new C.h3J(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hhX(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hhY(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fz1(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aU(e,new C.fz2(w))?w:""},
hAt(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hFr(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aiy(a1==null?"":a1,a0),a3=C.aiy(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.I)(t),++p){o=B.nA(new B.Y(r,new C.fVl(t[p]),q))
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
g=B.C(new B.Y(k,new C.fVm(),v),r)
A.d.aZ(g,new C.fVn())
if(g.length===0)continue
f=new C.fVo(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.I)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
iqj(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aLS
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eio
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eip
return null},
hA4(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cC(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
iq3(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oU
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
if(C.hA4(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hA4(n,i,v,u))if(n.w>10){f=h+1
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
iq1(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aiy(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a6i[r]
if(q.b===s)w.I(0,q)}}v=C.hhX(e)
u=C.hhY(e)
p=C.hDG(n,D.a7y,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fVh(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("kb<ci.E,n>")
o=B.C(new B.kb(w,new C.fVi(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.U2)
return p},
ius(d,e,f){return B.bU(A.L,null,new C.h2X(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i4A(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e2()
s.cY(t)
w=D.cNV[s.az(10)]
v=new C.eqC(s)
u=x.N
return new C.eqB(w,s.az(4),J.fp(v.$1$2(D.df2,1,x.ff)),w.r[s.az(3)],v.$1$2(D.dwY,2+s.az(2),u),v.$1$2(D.dpj,2,u),v.$1$2(D.dAl,4,x.fP),t)},
i6e(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e2()
a1.cY(a5.w+a3*13)
w=new C.fnF(a4)
v=new C.fnH(a4,d)
u=new C.fnG(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.I)(a2),++q){p=a2[q]
if(p.b===D.d1){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.f2,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a34(a0,52),"lux_spot",a5.xg(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bm,0,0,1,1,0,"lux_back",a5.xg(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bm,0,0,1,1,0,"lux_back2",a5.aHs(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.022,0.038,0.956,0.924,0,g,a5.xg(0,f),D.ds,150,C.a34(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.018,0.032,0.964,0.936,0,g,a5.xg(0,f),D.ds,120,C.a34(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.ds,260,C.a34(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bm,0,0,1,1,0,"lux_filigree",a5.xg(0,"filigree"),D.ds,200))
break
default:a2.push(w.$10$anim$delay(D.bm,0.08,0.06,0.84,0.004,C.a34(a0,208),"lux_rule",a5.aHs(0,"shimmer",r),D.vo,150))
a2.push(w.$10$anim$delay(D.bm,0.08,0.936,0.84,0.004,C.a34(a0,144),"lux_rule2","",D.Ju,220))}l=!A.d.aU(a2,new C.fnE())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xg(0,"crest"),350))
else{o=a1.h2()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xg(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a34(r,242)
j=a5.xg(0,"orbit")
i=s===D.bm?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r4,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.f2,t-0.007,0.9495,0.014,0.025,C.a34(r,242),"lux_g2",a5.xg(0,"orbit"),D.r4,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){h=t[q]
a2.push(w.$8(D.bm,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bm,0,0,1,1,0,"lux_velvet",a5.xg(0,"velvet")))},
oc:function oc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fVj:function fVj(d){this.a=d},
fVk:function fVk(){},
wC:function wC(d,e){this.a=d
this.b=e},
a9p:function a9p(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
at4:function at4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fVc:function fVc(){},
fVf:function fVf(){},
fT9:function fT9(){},
fTa:function fTa(){},
fTb:function fTb(d){this.a=d},
fNt:function fNt(){},
fNw:function fNw(d,e,f){this.a=d
this.b=e
this.c=f},
fNv:function fNv(d,e){this.a=d
this.b=e},
fNu:function fNu(d,e){this.a=d
this.b=e},
fNs:function fNs(d){this.a=d},
fPU:function fPU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fPS:function fPS(d){this.a=d},
fPT:function fPT(d){this.a=d},
frD:function frD(){},
frE:function frE(){},
frF:function frF(){},
h3K:function h3K(){},
a1Q:function a1Q(d){this.a=d},
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
fak:function fak(d,e,f){this.a=d
this.b=e
this.c=f},
fal:function fal(d,e){this.a=d
this.b=e},
fai:function fai(d,e){this.a=d
this.b=e},
faj:function faj(d,e){this.a=d
this.b=e},
fah:function fah(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fac:function fac(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fag:function fag(d,e){this.a=d
this.b=e},
fab:function fab(d,e){this.a=d
this.b=e},
faf:function faf(d,e){this.a=d
this.b=e},
faa:function faa(d,e){this.a=d
this.b=e},
fad:function fad(d){this.a=d},
fae:function fae(d,e){this.a=d
this.b=e},
fa0:function fa0(d,e){this.a=d
this.b=e},
fa1:function fa1(d,e){this.a=d
this.b=e},
fa3:function fa3(d){this.a=d},
fa4:function fa4(d){this.a=d},
fa5:function fa5(d){this.a=d},
fa6:function fa6(d){this.a=d},
fa2:function fa2(d,e){this.a=d
this.b=e},
fa7:function fa7(d,e){this.a=d
this.b=e},
fay:function fay(d){this.a=d},
faz:function faz(d){this.a=d},
fax:function fax(d){this.a=d},
faA:function faA(d){this.a=d},
faw:function faw(d){this.a=d},
faC:function faC(d){this.a=d},
fav:function fav(d,e){this.a=d
this.b=e},
faD:function faD(d){this.a=d},
fau:function fau(d,e){this.a=d
this.b=e},
faE:function faE(d){this.a=d},
fat:function fat(d){this.a=d},
faF:function faF(d){this.a=d},
fas:function fas(d,e){this.a=d
this.b=e},
faG:function faG(d){this.a=d},
far:function far(d,e){this.a=d
this.b=e},
faH:function faH(d){this.a=d},
faq:function faq(d){this.a=d},
faI:function faI(d,e){this.a=d
this.b=e},
fap:function fap(d,e){this.a=d
this.b=e},
faJ:function faJ(d){this.a=d},
faB:function faB(d){this.a=d},
fao:function fao(d,e){this.a=d
this.b=e},
fa8:function fa8(d,e,f){this.a=d
this.b=e
this.c=f},
fa9:function fa9(d,e,f){this.a=d
this.b=e
this.c=f},
fan:function fan(d,e){this.a=d
this.b=e},
fam:function fam(d,e){this.a=d
this.b=e},
h3J:function h3J(d,e){this.a=d
this.b=e},
a1P:function a1P(d,e,f){this.c=d
this.d=e
this.a=f},
aJy:function aJy(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f9U:function f9U(d){this.a=d},
f9V:function f9V(d){this.a=d},
f9W:function f9W(d,e){this.a=d
this.b=e},
f9X:function f9X(d){this.a=d},
f9Y:function f9Y(d){this.a=d},
f9T:function f9T(d,e){this.a=d
this.b=e},
f9Z:function f9Z(d,e){this.a=d
this.b=e},
fa_:function fa_(d,e){this.a=d
this.b=e},
fz2:function fz2(d){this.a=d},
b3K:function b3K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aG4:function aG4(d,e,f){this.c=d
this.d=e
this.a=f},
bmX:function bmX(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqE:function eqE(d){this.a=d},
eqD:function eqD(){},
bkp:function bkp(d,e){this.b=d
this.a=e},
fVl:function fVl(d){this.a=d},
fVm:function fVm(){},
fVn:function fVn(){},
fVo:function fVo(d){this.a=d},
atC:function atC(d,e){this.a=d
this.b=e},
fVh:function fVh(){},
fVi:function fVi(){},
h2X:function h2X(d,e){this.a=d
this.b=e},
a0d:function a0d(d,e,f){this.c=d
this.d=e
this.a=f},
aDA:function aDA(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dto:function dto(d){this.a=d},
dtp:function dtp(d){this.a=d},
dtq:function dtq(d,e){this.a=d
this.b=e},
dtt:function dtt(d){this.a=d},
dtu:function dtu(d,e){this.a=d
this.b=e},
dts:function dts(d,e){this.a=d
this.b=e},
dtv:function dtv(d){this.a=d},
dtr:function dtr(d,e){this.a=d
this.b=e},
bvD:function bvD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eqB:function eqB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eqC:function eqC(d){this.a=d},
fnF:function fnF(d){this.a=d},
fnH:function fnH(d,e){this.a=d
this.b=e},
fnG:function fnG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnE:function fnE(){},
aOd:function aOd(){},
hgL(d){var w,v,u
try{w=A.X.aQ(0,d,null)
if(x.f.b(w)){v=B.wv(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b3G:function b3G(d,e,f){this.c=d
this.d=e
this.a=f},
box:function box(d,e){this.c=d
this.a=e},
ime(d){return A.d.dL(D.Iv,new C.fOA(d),new C.fOB())},
imf(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Iv,new C.fOC(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k2("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lw:function lw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fOA:function fOA(d){this.a=d},
fOB:function fOB(){},
fOC:function fOC(d){this.a=d},
nc(d,e,f,g,h){return new C.Fz(f,g,d)},
i7E(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fq_(),v),v.k("M.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.Lq
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.eu(A.bp,!1,4279310375,A.aH,"",d,24,A.bs,A.a8,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cu,D.fj,j,k,l)},
hDt(d,e){var w
C.i7E(d)
w=A.d.dL($.bHf(),new C.fMq(e),new C.fMr())
$.Lq=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lq=""}d.z=B.bq(d.z,!0,x.F)},
Fz:function Fz(d,e,f){this.a=d
this.b=e
this.e=f},
fq_:function fq_(){},
fUO:function fUO(){},
fUP:function fUP(){},
fUQ:function fUQ(){},
fV0:function fV0(){},
fV5:function fV5(){},
fV6:function fV6(){},
fV7:function fV7(){},
fV8:function fV8(){},
fV9:function fV9(){},
fVa:function fVa(){},
fVb:function fVb(){},
fUR:function fUR(){},
fUS:function fUS(){},
fUT:function fUT(){},
fUU:function fUU(){},
fUV:function fUV(){},
fUW:function fUW(){},
fUX:function fUX(){},
fUY:function fUY(){},
fUZ:function fUZ(){},
fV_:function fV_(){},
fV1:function fV1(){},
fV2:function fV2(){},
fV3:function fV3(){},
fV4:function fV4(){},
fMq:function fMq(d){this.a=d},
fMr:function fMr(){},
j8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eu(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bm,4280172719,2,m,n,0,"",o,D.d1,p,q,r)},
DJ(d,e,f,g,h,i,j,k,l){return C.eu(A.bp,!1,4279310375,A.aH,"",d,24,A.bs,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cu,D.fj,j,k,l)},
bG_(){var w=new B.V(Date.now(),0,!1)
return A.iU[B.bM(w)-1]+" "+B.bV(w)+", "+B.bD(w)},
ey:function ey(d,e,f){this.a=d
this.b=e
this.c=f},
bDl(d){return new B.j4((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
idc(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aoy(A.cM.aO(A.d.gal(d.split(","))))
return w}catch(v){return null}},
idg(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fyl(),x.dv).aN(0,"\n")},
idf(d){switch(d.a){case 2:return A.nX
case 1:case 5:return A.fpz
default:return A.Vr}},
id9(d){switch(d.a){case 2:return A.vX
case 1:case 5:return A.Xy
default:return A.adX}},
idd(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bDl(u),q=(s&255)===0?v:C.bDl(d.ch),p=A.j.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nW(q,p,A.la)
w=new B.q2(t,t,t,t)}switch(d.ax.a){case 1:return B.lT(v,v,v,new B.kW(r,w,v,A.afg,v),v,v,v,v)
case 4:return u?new B.fY(v,v,v):B.xH(B.lT(v,v,q,v,p+0.4,v,v,v))
default:return B.lT(v,v,v,new B.kW(r,w,B.w5(4),A.i9,v),v,v,v,v)}},
idb(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fj?0.4:12,g=A.j.D(d.e*e,h,e),f=A.j.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.id9(d.as)
v=A.j.D(d.w*(e/960),3,96)
u=C.idg(d)
t=C.bDl(d.Q)
s=d.x.a>=700?A.eB:A.wD
r=d.y===A.cK?A.z5:A.aoB
q=d.z
p=new B.DV(w,l,l,B.fe(u,l,l,l,B.hf(l,t,1===q.a?A.aVq:A.aVp,l,l,l,l,l,l,A.dH,l,l,v,r,s,l,!0,l,l,l,l),C.idf(d.as)))
break
case 1:case 4:o=C.idc(d.at)
n=i===D.lT&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xH(B.fe(w,l,l,l,B.hf(l,A.tA,l,l,l,l,l,l,l,A.dH,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IU(o,n?A.afc:A.XZ,l,l)
break
case 3:w=new B.nW(A.JR,1,A.la)
u=B.w5(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lT(A.vX,B.fe(t,l,l,l,B.hf(l,D.ewR,l,l,l,l,l,l,l,A.dH,l,l,11,l,A.eB,l,!0,l,l,l,l),A.nX),l,new B.kW(E.aNj,new B.q2(w,w,w,w),u,A.i9,l),l,l,l,l)
break
case 2:p=C.idd(d,e)
break
case 5:p=C.ida(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.huJ(-w,p)
w=i===D.d1
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.aur(m/255,p)}if(w)return new F.wH(k,l,j,l,new B.TH(new B.kV(g,g,f,1/0),p))
if(i===D.ls){i=new B.nW(A.JR,1,A.la)
i=B.lT(A.vX,p,l,new B.kW(A.pO,new B.q2(i,i,i,i),B.w5(4),A.i9,l),l,l,D.bHU,l)}else i=p
return new F.wH(k,l,j,l,new B.fY(g,f,i))},
ide(d,e,f,g){var w,v=null,u=C.bDl(d.e),t=d.f
t=B.a([F.htk(t!=null?B.lT(v,v,v,new B.kW(v,v,v,A.i9,new B.aZ9(E.XB,A.adT,B.a([u,C.bDl(t)],x.cR),v)),v,v,v,v):B.lT(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.u(t,new B.N(w,new C.fyk(f,g),B.U(w).k("N<1,fk>")))
return F.cAE(t)},
hi_(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hi_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5y(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){p=t[q]
o=new B.XY(A.xf,A.JO,D.bJ5,null,null,null,!1,null)
o=new B.Cy(o,new C.fVu(607,787,p,d))
o.Nk(n,null)
r.push(o)}u=n.jI(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hi_,v)},
ida(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hgL(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gald()
if(h==null)h=A.aCs
j=B.u4(4279308564)
w=B.w5(18)
v=new B.nW(B.u4(4287531653),3,A.la)
u=i.length===0?"My links":i
u=B.a([B.xH(B.fe(u,m,m,m,B.hf(m,A.pO,m,m,m,m,m,m,m,A.dH,m,m,12,m,A.eB,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xH(B.fe(A.a.i(l.c),m,m,m,D.fxl,m)))
u.push(new B.fY(m,8,m))
for(t=B.cX(h,0,B.dB(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gJ(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u4(4280690220)
o=new B.aaK(8,8)
n=A.a.i(r.b)
u.push(new B.od(D.bBU,new C.ayN(new C.ajJ(q),B.lT(m,B.fe(n.length===0?A.a.i(r.c):n,m,m,m,D.fzN,A.nX),m,new B.kW(p,m,new B.akc(o,o,o,o),A.i9,m),m,m,D.bIm,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xH(B.fe(k,m,m,m,D.fz0,m))
u.push(new C.ayN(C.hMz(k),t))}return B.lT(m,B.zA(u,A.NN,A.lS),m,new B.kW(j,new B.q2(v,v,v,v),w,A.i9,m),m,m,D.bCK,m)},
fyl:function fyl(){},
fyk:function fyk(d,e){this.a=d
this.b=e},
fVu:function fVu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ail(d){var w,v
for(w=0;w<32;++w){v=D.Il[w]
if(v.a===d)return v}return null},
hxm(d){var w,v,u=A.a.co(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cM.aO(A.a.b2(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hGK(d,e){return B.a6(d,!1).ce(B.ec(new C.h1h(e),!0,null,x.fB))},
hGJ(d,e){return B.bU(A.L,null,new C.h1g(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jd:function jd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fq:function Fq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ou:function Ou(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmi:function bmi(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
e45:function e45(d){this.a=d},
e44:function e44(d,e,f){this.a=d
this.b=e
this.c=f},
e43:function e43(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bu9:function bu9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f96:function f96(d,e){this.a=d
this.b=e},
bhd:function bhd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1z:function b1z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfD:function cfD(){},
cfE:function cfE(d){this.a=d},
cfF:function cfF(d,e,f){this.a=d
this.b=e
this.c=f},
cfG:function cfG(d,e,f){this.a=d
this.b=e
this.c=f},
h1h:function h1h(d){this.a=d},
a_L:function a_L(d,e){this.c=d
this.a=e},
aBW:function aBW(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
diC:function diC(d,e,f){this.a=d
this.b=e
this.c=f},
diH:function diH(d){this.a=d},
diI:function diI(d){this.a=d},
diG:function diG(d){this.a=d},
diJ:function diJ(d){this.a=d},
diF:function diF(d,e){this.a=d
this.b=e},
diK:function diK(d){this.a=d},
diE:function diE(d){this.a=d},
diL:function diL(d){this.a=d},
diD:function diD(d,e){this.a=d
this.b=e},
diM:function diM(d,e){this.a=d
this.b=e},
h1g:function h1g(d){this.a=d},
h1f:function h1f(d){this.a=d},
h1e:function h1e(d,e,f){this.a=d
this.b=e
this.c=f},
h1d:function h1d(d,e){this.a=d
this.b=e},
aNI:function aNI(){},
iuE(d){return B.bU(A.L,null,new C.h3I(),d,!0,!0,!0,null,!1,!1,x.N)},
h3I:function h3I(){},
a05:function a05(d){this.a=d},
biK:function biK(d){this.d=d
this.c=this.a=null},
dpq:function dpq(d){this.a=d},
dpr:function dpr(d,e){this.a=d
this.b=e},
dps:function dps(d){this.a=d},
i9m(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return A.wk},
ioc(d){var w=7000
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
iob(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i9m(d)
switch(q){case"shimmer":return B.oh(A.M_,g,new C.fS1(p,A.j.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bi4(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.e1(A.A,B.d3(F.bXE(g,new B.Ew(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.p(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bhM(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.D(0.55+s*0.45,0,1)
return B.d3(B.eH(A.A,e*0.5,B.e1(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n2(Math.sin(e)*0.3)
return B.dO(B.fB(A.A,g,r,u,!0),new B.p(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bqT(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bcA(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bcd(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.by_(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.buY(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bu5(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bh6(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bS(0,new B.du(!0,B.e1(A.A,new B.bN(new B.o(r,r,r,r,r,new B.bY(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bk,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eH(A.A,s*0.06,B.e1(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fS1:function fS1(d,e){this.a=d
this.b=e},
bi4:function bi4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhM:function bhM(d,e,f){this.b=d
this.c=e
this.a=f},
bqT:function bqT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcA:function bcA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcd:function bcd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
by_:function by_(d,e,f){this.b=d
this.c=e
this.a=f},
buY:function buY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bu5:function bu5(d,e,f){this.b=d
this.c=e
this.a=f},
bh6:function bh6(d,e,f){this.b=d
this.d=e
this.a=f},
dij:function dij(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yi:function yi(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fS4(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.ls},
ioh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fS5())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.I)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aSM(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
iog(d,e){var w,v,u,t,s,r=d.db
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
ai_(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ai_=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fKp(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dX,null,new C.fKq(e),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ai_)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hiH(d),$async$ai_)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.HH(d,"Search states\u2026","",A.kb,"Choose state"),$async$ai_)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hhx(s)
if(p==null)p=A.d.gH(D.SU)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fS6(p.d)
k=x.u
j=B.a([C.eu(A.bp,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cE(),l,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lT,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dv(i,0.016,D.lt,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dv(0,0.058,D.f2,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dv(0,0.058,D.f2,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.LC("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.LC("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.u(k,C.he9(0.2,0.154,0.6,4291404327,i))
A.d.u(k,C.bCO("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.u(k,C.a2I("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.u(k,C.a2I("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.u(k,C.a2I("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.u(k,C.a2I("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.u(k,C.bCO("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dv(m,0.082,D.bm,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.eu(A.bp,!1,i,A.aH,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bs,A.cE,"",0.074,g,null,"","",0,!1,"",0,D.bm,4280172719,2,y.O,0,0,"",D.cu,D.d1,0.78,0.11,0.388))
A.d.u(k,C.he9(0.22,0.47,0.56,4291404327,i))
A.d.u(k,C.bCO("MASHAHIDI",0.49,0.26,0.48,i))
A.d.u(k,C.hzt("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.u(k,C.hzt("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.u(k,C.a2I("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.u(k,C.a2I("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.u(k,C.bCN("witness_mume_1",0.11,0.596,0.37,i))
A.d.u(k,C.bCN("witness_mke_1",0.52,0.596,0.37,i))
A.d.u(k,C.bCO("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.LC("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.LC("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.u(k,C.bCN("mchumba_mume",0.11,0.7,0.37,i))
A.d.u(k,C.bCN("mchumba_mke",0.52,0.7,0.37,i))
A.d.u(k,C.bCO("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.u(k,C.a2I("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.u(k,C.bCN("witness_mume_2",0.38,0.784,0.26,i))
A.d.u(k,C.a2I("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.he9(0.22,0.83,0.56,4291404327,i),h)
h.push(C.LC("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.LC("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.u(k,h)
A.d.u(j,k)
a0.$1(C.Ct(null,null,null,null,D.oU,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.t1(m,null,0,0,j,n,D.r3,"","","Hati ya Ndoa",D.ds)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ai_,v)},
fS5:function fS5(){},
fKp:function fKp(){},
fKq:function fKq(d){this.a=d},
fKn:function fKn(d){this.a=d},
fKo:function fKo(d){this.a=d},
icB(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
icA(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.nh
case"lineThrough":return A.xp
default:return A.aH}},
eu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eR(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hBz(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.SC[w]
if(v.b===u)return v}return D.ds},
i8K(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d5t[w]
if(v.b===u)return v}return D.d1},
ifo(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dxL[w]
if(v.b===u)return v}return D.bm},
t1(d,e,f,g,h,i,j,k,l,m,n){return new C.m3(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hs5(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.iaS(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hBz(d.h(0,"transition"))
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
n=B.cF(n,new C.clg(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.t1(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
iaS(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.au_[w]
if(v.b===u)return v}return D.nc},
Ct(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.hT(p,t,a1,h,i,w,a0==null?B.a([C.t1(4294967295,null,0,0,null,C.cE(),D.r3,"","","",D.ds)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xl(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i6A(a6.h(0,"aspectRatio"))
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
o=C.kP(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kP(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b7(f,new C.cl3(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cl4(),x.N)
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
g=B.cF(g,new C.cl5(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Ct(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.t1(4294967295,a3,0,0,a3,C.cE(),D.r3,"","","",D.ds)],x.g):g,v,p,o,s)},
kP(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i6A(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dyE[w]
if(v.b===u)return v}return D.E5},
cE(){var w=Date.now(),v=$.je
$.je=v+1
return""+1000*w+"_"+v},
clx(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.E6){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.eu(A.K,!1,f.d.l(),A.aH,"",n,40,A.bs,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bm,m,2,o,0,0,"",D.cu,D.d1,0.84,0.08,0.3)
u=C.cE()
A.d.u(w,B.a([v,C.eu(A.K,!1,f.e.l(),A.aH,"",n,20,A.bs,A.cE,"",0.12,u,p,"","",0,!1,"",0,D.bm,m,2,"Click to add subtitle",0,0,"",D.cu,D.d1,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.eu(A.bp,!1,f.d.l(),A.aH,"",n,32,A.bs,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bm,m,2,o,0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
A.d.u(w,B.a([v,C.eu(A.bp,!0,f.e.l(),A.aH,"",n,20,A.bs,A.cE,"",0.68,u,p,"","",0,!1,"",0,D.bm,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cu,D.d1,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.eu(A.bp,!1,f.d.l(),A.aH,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bm,m,2,"Two Column Slide",0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.eu(A.bp,!0,t.l(),A.aH,"",n,18,A.bs,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bm,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cu,D.d1,0.42,0.06,0.22)
s=C.cE()
A.d.u(w,B.a([v,u,C.eu(A.bp,!0,t.l(),A.aH,"",n,18,A.bs,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bm,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cu,D.d1,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.I(d.z,C.eu(A.K,!1,4294967295,A.aH,"",n,42,A.bs,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bm,m,2,"Section Header",0,0,"",D.cu,D.d1,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.eu(A.bp,!1,f.d.l(),A.aH,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bm,m,2,"Compare",0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.eu(A.bp,!1,l,A.aH,"",t.j(0.12).l(),24,A.bs,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bm,t.l(),2,"",0,0,"",D.cu,D.fj,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.eu(A.bp,!1,r.l(),A.aH,"",n,20,A.bs,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bm,m,2,"Option A",0,0,"",D.cu,D.d1,0.38,0.08,0.26)
q=C.cE()
t=C.eu(A.bp,!1,l,A.aH,"",t.j(0.06).l(),24,A.bs,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bm,t.j(0.5).l(),2,"",0,0,"",D.cu,D.fj,0.42,0.52,0.22)
q=C.cE()
A.d.u(w,B.a([v,u,s,t,C.eu(A.bp,!1,r.l(),A.aH,"",n,20,A.bs,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bm,m,2,"Option B",0,0,"",D.cu,D.d1,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.eu(A.K,!1,f.d.l(),A.aH,"",n,36,A.bs,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bm,m,2,"TERM / QUESTION",0,0,"",D.cu,D.d1,0.8,0.1,0.12)
u=C.cE()
A.d.u(w,B.a([v,C.eu(A.K,!1,f.e.l(),A.aH,"",n,22,A.bs,A.cE,"",0.35,u,p,"","",0,!1,"",0,D.bm,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cu,D.d1,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.eu(A.bp,!1,f.d.l(),A.aH,"",n,28,A.bs,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bm,m,2,"Quiz Question",0,0,"",D.cu,D.d1,0.88,0.06,0.06)
u=C.cE()
A.d.u(w,B.a([v,C.eu(A.bp,!1,f.e.l(),A.aH,"",n,20,A.bs,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bm,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cu,D.d1,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.eu(A.bp,!1,f.d.l(),A.aH,"",n,26,A.bs,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bm,m,2,"Worksheet / Assignment",0,0,"",D.cu,D.d1,0.88,0.06,0.04)
u=C.cE()
A.d.u(w,B.a([v,C.eu(A.bp,!1,f.e.l(),A.aH,"",n,18,A.bs,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bm,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cu,D.d1,0.88,0.06,0.16)],x.u))
break}},
hYY(d){return A.d.dL(D.a5U,new C.cly(d),new C.clz())},
hYV(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c5(v,C.Xl(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
hao(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.clt(t)
for(w=J.aT(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.I)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.cls())
return u},
hs8(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.clo()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
at5(d){return C.hYT(d)},
hYT(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$at5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.clr()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3U(m),$async$at5)
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
return B.b(B.aA(),$async$at5)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aU(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hs7.h(0,m))
n=C.hao(C.hao(j,r),o)
if(n.length===0){u=C.hs8(C.hs8(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$at5,v)},
cln(d){return C.hYS(d)},
hYS(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cln=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cln)
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
return B.i($async$cln,v)},
b3M(d,e){return C.hYU(d,e)},
hYU(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3M=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3M)
case 6:s=g
q=s.tV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.I(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mn(r,J.ad(r)-500):r
w=7
return B.b(s.aD("StringList","ngmy_slides_deleted_"+p,o),$async$b3M)
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
return B.i($async$b3M,v)},
Xm(d,e){return C.hYW(d,e)},
hYW(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xm=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hs6.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.at5(a3),$async$Xm)
case 5:p=a6
case 4:w=6
return B.b(C.cln(a3),$async$Xm)
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
if(f<=g.gbt())k=f===g.gbt()&&k.b>g.gcG()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.clu(o),l),l.k("M.E"))
A.d.aZ(e,new C.clv())
$.hs6.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.clw(),n),n.k("ak.E"))
r=A.X.aw(n,null)
$.hs7.n(0,a0,r)
t=8
w=11
return B.b(B.aiN(a0,r),$async$Xm)
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
return B.b(B.aA(),$async$Xm)
case 16:q=a6
w=17
return B.b(q.aD("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xm)
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
return B.i($async$Xm,v)},
JO:function JO(d,e){this.a=d
this.b=e},
at3:function at3(d,e){this.a=d
this.b=e},
vl:function vl(d,e){this.a=d
this.b=e},
mV:function mV(d,e){this.a=d
this.b=e},
hI:function hI(d,e){this.a=d
this.b=e},
eR:function eR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
clh:function clh(){},
cli:function cli(){},
clg:function clg(){},
hT:function hT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cl6:function cl6(){},
cl7:function cl7(){},
cl3:function cl3(){},
cl4:function cl4(){},
cl5:function cl5(){},
k2:function k2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cly:function cly(d){this.a=d},
clz:function clz(){},
clt:function clt(d){this.a=d},
cls:function cls(){},
clo:function clo(){},
clp:function clp(){},
clq:function clq(){},
clr:function clr(){},
clu:function clu(d){this.a=d},
clv:function clv(){},
clw:function clw(){},
iou(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fSJ(e,v,d,B.aR(w))
w.$1(new C.fSF())
w.$1(new C.fSG())
w.$1(new C.fSH())
w.$1(new C.fSI())
return v},
fSJ:function fSJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSF:function fSF(){},
fSG:function fSG(){},
fSH:function fSH(){},
fSI:function fSI(){},
b3J:function b3J(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clc:function clc(d){this.a=d},
clb:function clb(){},
cld:function cld(){},
cle:function cle(d,e){this.a=d
this.b=e},
clf:function clf(d){this.a=d},
aq6:function aq6(d,e){this.c=d
this.a=e},
bm0:function bm0(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
dR_:function dR_(){},
aNr:function aNr(){},
clk(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$clk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fmI)
u=!1
w=1
break}u=B.lf(!1,d,t,!1,null,A.a8H,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clk,v)},
hYQ(d){var w=A.d.bj(D.Iv,new C.cll(d))
if(w<0)return!0
return w>=4},
hYR(d){var w=A.d.bj($.bHf(),new C.clm(d))
if(w<0)return!0
return w>=5},
cll:function cll(d){this.a=d},
clm:function clm(d){this.a=d},
iqd(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xw()
$.q_().pe(t,new C.fVB(s),!0)
u=B.a([B.C1(v,A.pP,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ap(v,B.r(v,B.d(e,v,v,v,v,v,v,D.fxO,v,v,v),A.f,v,v,new B.o(A.b6,v,v,w,v,v,A.n),v,v,v,v,A.n3,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fVB:function fVB(d){this.a=d},
ipP(){return C.hhT()},
imD(){return C.bFc()},
ioN(){return C.hhK()},
aRP(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fUH(d,f),$async$aRP)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRP,v)},
fUH(d,e){var w=0,v=B.j(x.H),u
var $async$fUH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bDm
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.L,null,new C.fUI(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fUH)
case 2:return B.h(null,v)}})
return B.i($async$fUH,v)},
fUI:function fUI(d,e){this.a=d
this.b=e},
aeQ:function aeQ(d,e,f){this.c=d
this.d=e
this.a=f},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eD_:function eD_(d,e){this.a=d
this.b=e},
eD0:function eD0(d){this.a=d},
af6:function af6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3I(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3H(g,m,f,d,e,h,l,k,j,o,i,null)},
hEP(d){return B.cr(new C.fSE(d))},
hhV(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ipX(d){if(d===D.cu)return"None"
return C.hhV(d)},
bDS(d,e,f,g){return C.ifv(d,e,f,g)},
ifv(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hes&&t.pZ())t.eA()
$.hes=!0
s.a=null
w=3
return B.b(B.hN(A.bq,!0,"Animation preview",d,new C.fB5(s,e,g,f),null,A.eG,!0,x.H),$async$bDS)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hes=!1
case 1:return B.h(u,v)}})
return B.i($async$bDS,v)},
h4w(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h4w=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.D(B.aF(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.cu
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hhV(f)+" Slide transition preview"
s=s?Ah.GN:A.qz
w=3
return B.b(C.bDS(d,s,new B.a5(t,t*0.56,B.bx(B.l(14),new C.aKY(f,null),A.aq),null),r),$async$h4w)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h4w,v)},
hE5(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.j.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dO(B.d3(f,t),new B.p((1-t)*48,0))
case 3:return B.dO(B.d3(f,t),new B.p(-(1-t)*48,0))
case 4:case 21:return B.dO(B.d3(f,t),new B.p(0,(1-t)*36))
case 5:return B.dO(B.d3(f,t),new B.p(0,-(1-t)*36))
case 6:case 16:return B.e1(A.A,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e1(A.A,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kn((1-t)*1.2)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n2((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dO(B.d3(f,t),new B.p((1-t)*24,0))}},
bGK(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.D(B.aF(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.cu
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hhV(f)+" Element animation preview"
s=s?Ah.GN:A.qz
w=3
return B.b(C.bDS(d,s,new B.a5(t,t*0.62,B.bx(B.l(14),new C.aBB(f,null),A.aq),null),r),$async$bGK)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGK,v)},
ipW(d){var w,v,u,t,s=$.ahr.W(0,d)
if(s!=null){$.ahr.n(0,d,s)
return s}w=A.cM.aO(A.a.b2(d,A.a.co(d,",")+1))
$.ahr.n(0,d,w)
v=$.hfk=$.hfk+w.length
u=B.a4($.ahr).k("cx<1>")
for(;;){if(!(v>41943040&&$.ahr.a>1))break
t=new B.cx($.ahr,u).gae(0)
if(!t.C())B.bj(B.fr())
v-=$.ahr.W(0,t.gR(0)).length
$.hfk=v}return w},
ipB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kZ(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.I)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aB(d,r,o)
m=f.$1(e)
v.push(new B.ep(n,l,l,A.cN,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TD(s,A.u))
v.push(new B.ep(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TD(t,A.u))
v.push(new B.ep(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TD(u,A.cE))
v.push(new B.ep(n,l,l,A.cN,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3T(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.jU(e))
return m
case"rounded":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.ja(B.bn(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbx().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bu())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aG(w.r,A.ai,n,n,m)
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
v.ab()}}v.E(new B.bu())
return v
case"diamond":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbx().a,e.b))
m.E(new B.aq(e.c,e.gbx().b))
m.E(new B.aq(e.gbx().a,e.d))
m.E(new B.aq(e.a,e.gbx().b))
m.E(new B.bu())
return m
case"arch":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdB(new B.p(t,p),new B.aN(s,s))
m.E(new B.aq(t,u))
m.E(new B.bu())
return m
default:m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.oA(e))
return m}},
fQ8(d,e,f){return B.cr(new C.fQ9(D.feP.q(0,d),d,f,e))},
b3H:function b3H(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cla:function cla(d){this.a=d},
cl9:function cl9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl8:function cl8(){},
b3E:function b3E(d,e){this.b=d
this.a=e},
fSE:function fSE(d){this.a=d},
fSD:function fSD(d,e){this.a=d
this.b=e},
fB5:function fB5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB3:function fB3(d){this.a=d},
fB4:function fB4(d,e){this.a=d
this.b=e},
aKY:function aKY(d,e){this.c=d
this.a=e},
bxu:function bxu(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fhH:function fhH(d,e,f){this.a=d
this.b=e
this.c=f},
aLF:function aLF(d,e){this.b=d
this.a=e},
Ws:function Ws(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bme:function bme(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e1P:function e1P(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1N:function e1N(d){this.a=d},
JN:function JN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cl2:function cl2(d){this.a=d},
cl1:function cl1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBB:function aBB(d,e){this.c=d
this.a=e},
bgx:function bgx(){this.d=0
this.c=this.a=null},
dfw:function dfw(d){this.a=d},
dfv:function dfv(d){this.a=d},
a97:function a97(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmV:function bmV(d,e){var _=this
_.d=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqk:function eqk(d,e,f){this.a=d
this.b=e
this.c=f},
b1C:function b1C(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhK:function bhK(d,e,f){this.b=d
this.c=e
this.a=f},
bsZ:function bsZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f6B:function f6B(){},
fQ9:function fQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bu2:function bu2(d,e,f){this.b=d
this.c=e
this.a=f},
aNH:function aNH(){},
aOb:function aOb(){},
aPv:function aPv(){},
fTF(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fTF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xS.cq().MJ(D.dvz,A.uK,!0),$async$fTF)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ipv(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTF,v)},
ipv(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a9q(d,new B.a1s(A.cU.gcu().aO(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.ihn(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a9q(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.ca.Lv(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a9q(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
ihn(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cH4().cQA(B.rM(d,A.iv,o,o),o,o,!1).cSv(0,"word/document.xml")
if(n==null)return""
w=n.d_F()
v=A.ca.Lv(0,w==null?$.hHg():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kZ(0,r)
p=A.a.i(B.cF(q,new C.fEd(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9q:function a9q(d,e,f){this.a=d
this.b=e
this.c=f},
fEd:function fEd(){},
hYX(d,e,f,g,h,i,j,k,l){return new C.P_(l,e,d,g,f,i,h,j,k,null)},
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
aGu:function aGu(d,e,f,g,h,i,j,k,l){var _=this
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
eJc:function eJc(d){this.a=d},
eJa:function eJa(){},
eJb:function eJb(d){this.a=d},
eFA:function eFA(){},
eFB:function eFB(){},
eFC:function eFC(d,e){this.a=d
this.b=e},
eHa:function eHa(d){this.a=d},
eGZ:function eGZ(){},
eH_:function eH_(){},
eEY:function eEY(){},
eIi:function eIi(d){this.a=d},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
eH8:function eH8(d,e){this.a=d
this.b=e},
eIW:function eIW(d){this.a=d},
eIX:function eIX(){},
eIY:function eIY(){},
eIZ:function eIZ(d){this.a=d},
eJ_:function eJ_(){},
eEm:function eEm(d){this.a=d},
eJ9:function eJ9(){},
eGh:function eGh(d,e){this.a=d
this.b=e},
eEk:function eEk(d){this.a=d},
eEl:function eEl(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGF:function eGF(d,e,f){this.a=d
this.b=e
this.c=f},
eGG:function eGG(d){this.a=d},
eGg:function eGg(){},
eGf:function eGf(d){this.a=d},
eGd:function eGd(){},
eGc:function eGc(d){this.a=d},
eGe:function eGe(){},
eFw:function eFw(d){this.a=d},
eFx:function eFx(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGo:function eGo(d,e){this.a=d
this.b=e},
eEo:function eEo(){},
eEp:function eEp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGz:function eGz(){},
eGA:function eGA(d,e){this.a=d
this.b=e},
eGx:function eGx(d,e,f){this.a=d
this.b=e
this.c=f},
eGy:function eGy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGr:function eGr(d,e,f){this.a=d
this.b=e
this.c=f},
eGs:function eGs(d,e,f){this.a=d
this.b=e
this.c=f},
eGt:function eGt(d){this.a=d},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGv:function eGv(d,e){this.a=d
this.b=e},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGC:function eGC(d){this.a=d},
eGD:function eGD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGB:function eGB(d){this.a=d},
eGU:function eGU(){},
eGV:function eGV(){},
eGW:function eGW(){},
eGX:function eGX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGR:function eGR(d){this.a=d},
eGT:function eGT(){},
eGS:function eGS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGP:function eGP(d,e,f){this.a=d
this.b=e
this.c=f},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eGY:function eGY(){},
eGp:function eGp(d,e){this.a=d
this.b=e},
eEF:function eEF(){},
eEG:function eEG(d,e,f){this.a=d
this.b=e
this.c=f},
eEH:function eEH(d){this.a=d},
eEI:function eEI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEE:function eEE(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH2:function eH2(d,e){this.a=d
this.b=e},
eH1:function eH1(d,e){this.a=d
this.b=e},
eH0:function eH0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH4:function eH4(d,e){this.a=d
this.b=e},
eDi:function eDi(d,e){this.a=d
this.b=e},
eED:function eED(d,e){this.a=d
this.b=e},
eEB:function eEB(d){this.a=d},
eHc:function eHc(d,e,f){this.a=d
this.b=e
this.c=f},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEw:function eEw(d){this.a=d},
eHb:function eHb(d,e,f){this.a=d
this.b=e
this.c=f},
eEn:function eEn(d){this.a=d},
eEZ:function eEZ(){},
eIU:function eIU(d,e){this.a=d
this.b=e},
eIV:function eIV(d,e,f){this.a=d
this.b=e
this.c=f},
eIj:function eIj(d,e,f){this.a=d
this.b=e
this.c=f},
eDj:function eDj(d){this.a=d},
eDg:function eDg(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e){this.a=d
this.b=e},
eD3:function eD3(d){this.a=d},
eD2:function eD2(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e){this.a=d
this.b=e},
eEz:function eEz(d){this.a=d},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEy:function eEy(d){this.a=d},
eDL:function eDL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d,e){this.a=d
this.b=e},
eDR:function eDR(d){this.a=d},
eDO:function eDO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDP:function eDP(d){this.a=d},
eDN:function eDN(){},
eDK:function eDK(d,e,f){this.a=d
this.b=e
this.c=f},
eGO:function eGO(d,e){this.a=d
this.b=e},
eJ2:function eJ2(d){this.a=d},
eJ3:function eJ3(d,e){this.a=d
this.b=e},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(d,e,f){this.a=d
this.b=e
this.c=f},
eJ1:function eJ1(d){this.a=d},
eIz:function eIz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIy:function eIy(d,e,f){this.a=d
this.b=e
this.c=f},
eIx:function eIx(){},
eIw:function eIw(d,e,f){this.a=d
this.b=e
this.c=f},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIs:function eIs(d,e,f){this.a=d
this.b=e
this.c=f},
eIq:function eIq(d){this.a=d},
eIr:function eIr(d){this.a=d},
eIu:function eIu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIt:function eIt(d){this.a=d},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFr:function eFr(d,e){this.a=d
this.b=e},
eIk:function eIk(){},
eIT:function eIT(d,e){this.a=d
this.b=e},
eIR:function eIR(d){this.a=d},
eIS:function eIS(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDd:function eDd(d,e,f){this.a=d
this.b=e
this.c=f},
eDh:function eDh(d,e){this.a=d
this.b=e},
eD8:function eD8(d,e,f){this.a=d
this.b=e
this.c=f},
eD7:function eD7(d){this.a=d},
eH9:function eH9(d,e,f){this.a=d
this.b=e
this.c=f},
eJ0:function eJ0(d,e,f){this.a=d
this.b=e
this.c=f},
eFv:function eFv(d,e,f){this.a=d
this.b=e
this.c=f},
eFu:function eFu(){},
eDU:function eDU(d,e,f){this.a=d
this.b=e
this.c=f},
eDV:function eDV(d){this.a=d},
eD5:function eD5(d,e){this.a=d
this.b=e},
eEX:function eEX(d,e){this.a=d
this.b=e},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDm:function eDm(d){this.a=d},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDl:function eDl(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDI:function eDI(){},
eDJ:function eDJ(){},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDv:function eDv(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDz:function eDz(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDC:function eDC(d,e){this.a=d
this.b=e},
eEW:function eEW(d,e,f){this.a=d
this.b=e
this.c=f},
eEV:function eEV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEU:function eEU(d,e,f){this.a=d
this.b=e
this.c=f},
eET:function eET(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eDX:function eDX(d){this.a=d},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d){this.a=d},
eE_:function eE_(d){this.a=d},
eE0:function eE0(){},
eE1:function eE1(d,e){this.a=d
this.b=e},
eEC:function eEC(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGJ:function eGJ(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGH:function eGH(){},
eGI:function eGI(){},
eIl:function eIl(){},
eIm:function eIm(d,e,f){this.a=d
this.b=e
this.c=f},
eIn:function eIn(){},
eIo:function eIo(d){this.a=d},
eIp:function eIp(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eEq:function eEq(){},
eEr:function eEr(){},
eEs:function eEs(){},
eEv:function eEv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEt:function eEt(d,e,f){this.a=d
this.b=e
this.c=f},
eFW:function eFW(d){this.a=d},
eFV:function eFV(){},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFU:function eFU(d){this.a=d},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eFT:function eFT(d){this.a=d},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFS:function eFS(d){this.a=d},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eG1:function eG1(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eG2:function eG2(d,e){this.a=d
this.b=e},
eFP:function eFP(d){this.a=d},
eG3:function eG3(d,e){this.a=d
this.b=e},
eFO:function eFO(d){this.a=d},
eFH:function eFH(d,e){this.a=d
this.b=e},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFG:function eFG(d){this.a=d},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFE:function eFE(d){this.a=d},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFD:function eFD(d){this.a=d},
eFN:function eFN(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eES:function eES(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEM:function eEM(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEO:function eEO(d,e){this.a=d
this.b=e},
eER:function eER(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d){this.a=d},
eHv:function eHv(d,e){this.a=d
this.b=e},
eHw:function eHw(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHI:function eHI(d){this.a=d},
eHT:function eHT(d){this.a=d},
eI3:function eI3(d){this.a=d},
eIa:function eIa(d){this.a=d},
eIb:function eIb(d){this.a=d},
eIc:function eIc(d){this.a=d},
eId:function eId(d){this.a=d},
eIe:function eIe(d,e){this.a=d
this.b=e},
eHy:function eHy(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHl:function eHl(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHV:function eHV(d,e){this.a=d
this.b=e},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHr:function eHr(d,e,f){this.a=d
this.b=e
this.c=f},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHu:function eHu(d){this.a=d},
eIf:function eIf(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIg:function eIg(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e,f){this.a=d
this.b=e
this.c=f},
eHq:function eHq(d,e,f){this.a=d
this.b=e
this.c=f},
eHg:function eHg(d,e,f){this.a=d
this.b=e
this.c=f},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e){this.a=d
this.b=e},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d){this.a=d},
eHo:function eHo(d){this.a=d},
eI_:function eI_(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI1:function eI1(d){this.a=d},
eI2:function eI2(d){this.a=d},
eHn:function eHn(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d,e){this.a=d
this.b=e},
eHm:function eHm(d){this.a=d},
eI7:function eI7(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eHj:function eHj(d){this.a=d},
eI9:function eI9(d,e){this.a=d
this.b=e},
eHi:function eHi(d){this.a=d},
eDT:function eDT(d,e,f){this.a=d
this.b=e
this.c=f},
eDS:function eDS(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eIB:function eIB(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
eIA:function eIA(d,e){this.a=d
this.b=e},
eF1:function eF1(d,e){this.a=d
this.b=e},
eF0:function eF0(d){this.a=d},
eF2:function eF2(d,e){this.a=d
this.b=e},
eF_:function eF_(d){this.a=d},
eFz:function eFz(){},
eFy:function eFy(){},
eIP:function eIP(d){this.a=d},
eIO:function eIO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIN:function eIN(d,e){this.a=d
this.b=e},
eII:function eII(d,e){this.a=d
this.b=e},
eIM:function eIM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIJ:function eIJ(d,e){this.a=d
this.b=e},
eIE:function eIE(d){this.a=d},
eIF:function eIF(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d){this.a=d},
eIK:function eIK(d,e){this.a=d
this.b=e},
eIL:function eIL(d,e){this.a=d
this.b=e},
eIQ:function eIQ(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEi:function eEi(d,e,f){this.a=d
this.b=e
this.c=f},
eEh:function eEh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE6:function eE6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE9:function eE9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE5:function eE5(d,e,f,g){var _=this
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
eEb:function eEb(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE4:function eE4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEe:function eEe(d,e){this.a=d
this.b=e},
eE3:function eE3(d,e){this.a=d
this.b=e},
eEf:function eEf(d,e){this.a=d
this.b=e},
eE2:function eE2(d){this.a=d},
eEg:function eEg(d,e){this.a=d
this.b=e},
eGa:function eGa(d){this.a=d},
eG9:function eG9(d){this.a=d},
eGb:function eGb(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFg:function eFg(d,e){this.a=d
this.b=e},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFh:function eFh(d,e){this.a=d
this.b=e},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFj:function eFj(d,e){this.a=d
this.b=e},
eFb:function eFb(d,e){this.a=d
this.b=e},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFa:function eFa(d,e){this.a=d
this.b=e},
eFl:function eFl(d,e,f){this.a=d
this.b=e
this.c=f},
eF9:function eF9(d,e){this.a=d
this.b=e},
eFm:function eFm(d,e,f){this.a=d
this.b=e
this.c=f},
eF8:function eF8(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e){this.a=d
this.b=e},
eF7:function eF7(d,e,f){this.a=d
this.b=e
this.c=f},
eF4:function eF4(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e){this.a=d
this.b=e},
eF6:function eF6(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eF5:function eF5(d,e,f){this.a=d
this.b=e
this.c=f},
eF3:function eF3(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFt:function eFt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eD1:function eD1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eH7:function eH7(d,e){this.a=d
this.b=e},
eH5:function eH5(d){this.a=d},
eH6:function eH6(d,e){this.a=d
this.b=e},
agD:function agD(d,e,f){this.a=d
this.b=e
this.c=f},
aAY:function aAY(d,e,f){this.c=d
this.e=e
this.a=f},
bfj:function bfj(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
daY:function daY(d){this.a=d},
daX:function daX(d){this.a=d},
bfy:function bfy(d,e){this.c=d
this.a=e},
dbl:function dbl(d){this.a=d},
dbm:function dbm(d){this.a=d},
KP:function KP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfi:function bfi(){this.d=!1
this.c=this.a=null},
daV:function daV(d){this.a=d},
daR:function daR(d){this.a=d},
daW:function daW(d){this.a=d},
daQ:function daQ(d){this.a=d},
daU:function daU(d){this.a=d},
daS:function daS(d){this.a=d},
daT:function daT(d,e){this.a=d
this.b=e},
QK:function QK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0X:function a0X(d,e,f){this.c=d
this.d=e
this.a=f},
aGx:function aGx(d,e,f){var _=this
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
eJN:function eJN(){},
eJD:function eJD(d){this.a=d},
eJM:function eJM(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJz:function eJz(d){this.a=d},
eJA:function eJA(d,e){this.a=d
this.b=e},
eJB:function eJB(d){this.a=d},
eJC:function eJC(d,e,f){this.a=d
this.b=e
this.c=f},
eJK:function eJK(){},
eJL:function eJL(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJJ:function eJJ(d){this.a=d},
eJO:function eJO(d,e,f){this.a=d
this.b=e
this.c=f},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJP:function eJP(d){this.a=d},
KV:function KV(d,e){this.c=d
this.a=e},
buy:function buy(d,e){this.b=d
this.a=e},
bki:function bki(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkh:function bkh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aMm:function aMm(){},
aOo:function aOo(){},
bAm:function bAm(){},
aOp:function aOp(){},
fVC(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fVC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xS.cq().MJ(B.a(["pdf"],x.s),A.uK,!0),$async$fVC)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fp(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.brF(s,"data:application/pdf;base64,"+A.cU.gcu().aO(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVC,v)},
iq7(d){var w,v,u,t,s,r
try{w=B.jM(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kZ(0,w).gJ(0)
if(t>0){s=J.ajl(t,1,200)
return s}}catch(r){}return 1},
fVt(d){return C.iq6(d)},
iq6(d){var w=0,v=B.j(x.T),u
var $async$fVt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVt,v)},
bFZ(d,e,f,g){return C.iqg(d,e,f,g)},
iqg(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFZ=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.D(b5.a,80,2400)
q=A.j.D(b5.b,80,2400)
p=B.hFq(b7,new B.av(r,q))
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
g=new B.q3(new B.pE())
f=B.zz(g,null)
a7=B.K()
a7.r=A.rB.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bw
b1.e=A.dT
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.I)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.p((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o3()
w=7
return B.b(a3.xH(800,h),$async$bFZ)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hr(A.hq),$async$bFZ)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eU(A.dS.gaV(a5))
a7=A.cU.gcu().aO(a7)
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
return B.i($async$bFZ,v)},
aSm(d,e,f){return C.iq4(d,e,f)},
iq4(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aSm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aj0(d,e,f,new C.fVr(r,q),q,"Sign document"),$async$aSm)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFZ(q,t,r.b,r.c),$async$aSm)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3L(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSm,v)},
iqe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hy9(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hy9(a0.b)+"</h1>\n"
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
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.lT&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hxL(q.ay)+";border:2px solid "+C.hxL(q.ch)+'"></div>'
break
case 5:l=C.hgL(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gald()
if(p==null)p=A.aCs
n=B.U(p)
k=n.k("ix<1>")
j=new B.ix(p,0,8,k)
j.n8(p,0,8,n.c)
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
hxL(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hy9(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFX(d,e){var w=0,v=B.j(x.H)
var $async$bFX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fVA(e,C.iqe(e),d),d,null,!0,!0,x.H),$async$bFX)
case 2:return B.h(null,v)}})
return B.i($async$bFX,v)},
bFY(){var w=0,v=B.j(x.T),u,t,s
var $async$bFY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.HA(92,2400),$async$bFY)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fVt(s),$async$bFY)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFY,v)},
aSn(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aSn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hi_(d),$async$aSn)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A2.fYc(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSn,v)},
hs4(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3L:function b3L(d,e,f){this.a=d
this.b=e
this.c=f},
fVr:function fVr(d,e){this.a=d
this.b=e},
fVA:function fVA(d,e,f){this.a=d
this.b=e
this.c=f},
fVx:function fVx(d){this.a=d},
fVy:function fVy(d,e,f){this.a=d
this.b=e
this.c=f},
fVz:function fVz(d,e,f){this.a=d
this.b=e
this.c=f},
iq5(d){return C.kP(d.w)},
iqc(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.ist()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zj(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hLA()
if(w.b.test(u))return u
return null},
hFs(d,e,f){var w,v,u=C.hUz(d),t=$.ov()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.v(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.v(Date.now()%1000),3,"0")},
iqi(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eI(w,d.b);v.C();){u=w.gR(w).y
t=C.zj(u==null?"":u)
if(t!=null)s.I(0,t)}return s},
fVp(d,e){var w,v=d.y,u=C.zj(v==null?"":v)
if(u!=null)return d.y=u
w=C.iqi(new B.Y(e,new C.fVq(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hFs(v==null?"":v,null,w)},
iqh(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kP(w.w))return null
v=w.y
return C.zj(v==null?"":v)},
hYZ(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.he(u)},
Xp(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xp)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bO),$async$Xp)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
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
return B.i($async$Xp,v)},
Xq(d){return C.hZ_(d)},
hZ_(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xq)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hM("ngmy_slides_transfer_qr_stashes_v1",B.J(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cP,null),$async$Xq)
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
return B.i($async$Xq,v)},
a9s(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9s=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a9s)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xp(),$async$a9s)
case 4:s=a6
r=C.zj(a2==null?"":a2)
if(r==null)r=a3!=null?C.hFs(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dp(s),n=J.aT(o.ghJ(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zj(J.k(k==null?"":k))
if(j!=null)p.I(0,j)}n=o.gdP(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dW.aO(t)
g.n(0,"payload",A.cU.gcu().aO(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.V2.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zj(J.k(q==null?"":q))
if(f==null)f=C.hs9(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xq(s),$async$a9s)
case 7:u=new B.aI_(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hYZ()
n=r==null
d=n?C.hs9(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dW.aO(t)
q.n(0,"payload",A.cU.gcu().aO(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.V2.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xq(s),$async$a9s)
case 8:u=new B.aI_(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9s,v)},
hs9(d){var w,v,u=$.ov()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.v(u.az(1000)),3,"0")
if(d.I(0,v))return v}return"SL"+A.a.b_(A.o.v(Date.now()%1000),3,"0")},
at7(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$at7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$at7)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xp(),$async$at7)
case 6:t=f
s=J.a7(t)
r=s.gJ(t)
s.bq(t,new C.clA(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xq(t),$async$at7)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$at7,v)},
at6(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$at6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zj(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$at6)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xp(),$async$at6)
case 6:t=o.i4(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zj(J.k(q==null?"":q))===p){u=C.a9r(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$at6,v)},
a9r(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9r=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$a9r)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xp(),$async$a9r)
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
try{s=A.ca.cJ(0,A.cM.aO(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.V2.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aQ(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.X.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dJ(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xq(p),$async$a9r)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9r,v)},
iqb(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fVw(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fVE(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.X.aw(w,null)}return A.X.aw(C.iqb(d==null?B.a([],x.D):d,f,g),null)},
fVD(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fVD=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9s(h,d,e,f,g),$async$fVD)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zj(e==null?"":e)
u=new B.aHM(s,t)
w=1
break}t=A.dW.aO(h)
t=A.kL.gcu().aO(t)
u=new B.aHM(C.zj(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVD,v)},
hi1(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eJ(q,s)||J.eJ(q,r))return!0
if(J.d5(q,"{"))try{w=A.X.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
iqf(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hi1(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hi1(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hi1(s))return s}}return null},
fVs(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.X.aQ(0,A.ca.cJ(0,A.cM.aO(J.nq(t,8))),null))
else w=v.a(A.X.aQ(0,t,null))
v=C.i88(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiM(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.at6(t[1]),$async$aiM)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVs(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zj(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.at6(r),$async$aiM)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVs(s)
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
return B.b(C.a9r(t[1]),$async$aiM)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVs(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fVs(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiM,v)},
i88(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.V2.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hhZ(C.Xl(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cF(t,new C.fqv(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hhZ(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
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
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xl(B.a2(o,x.N,x.z))
if(e&&C.kP(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bS(144e8).ag()
return p},
bFH(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hz(),$async$bFH)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiM(s),$async$bFH)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFH,v)},
h3L(d){var w=0,v=B.j(x.T),u,t
var $async$h3L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hN(D.Zk,!0,"Dismiss",d,new C.h3M(),new C.h3N(),A.GL,!0,x.N),$async$h3L)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fkP)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3L,v)},
iuH(d,e,f,g,h){return B.a6(d,!1).ce(B.ec(new C.h3O(h,e,g,f),!0,null,x.H))},
fVq:function fVq(d){this.a=d},
clA:function clA(d){this.a=d},
fVw:function fVw(){},
fqv:function fqv(d){this.a=d},
h3M:function h3M(){},
h3N:function h3N(){},
h3O:function h3O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xn:function Xn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGv:function aGv(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eJj:function eJj(){},
eJf:function eJf(d,e){this.a=d
this.b=e},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJg:function eJg(d){this.a=d},
eJh:function eJh(d){this.a=d},
eJk:function eJk(d){this.a=d},
eJl:function eJl(d){this.a=d},
eJo:function eJo(d){this.a=d},
eJp:function eJp(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJq:function eJq(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJr:function eJr(d,e){this.a=d
this.b=e},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJd:function eJd(d,e){this.a=d
this.b=e},
Xo:function Xo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bng:function bng(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJt:function eJt(d){this.a=d},
eJu:function eJu(){},
eJv:function eJv(d){this.a=d},
eJw:function eJw(d,e){this.a=d
this.b=e},
aGs:function aGs(d){this.a=d},
aGt:function aGt(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCW:function eCW(d){this.a=d},
eCV:function eCV(){},
eCX:function eCX(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCR:function eCR(){},
eCT:function eCT(d){this.a=d},
eCU:function eCU(d){this.a=d},
bxQ:function bxQ(){},
at8:function at8(d){this.a=d},
aGw:function aGw(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJy:function eJy(d){this.a=d},
eJx:function eJx(d){this.a=d},
idJ(){var w,v,u,t
for(v=0;v<4;++v){w=D.dj9[v]
try{if(Ae.c1D(w)){u=w
return u}}catch(t){}}return null},
So(d,e){return C.imO(d,e)},
imO(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$So=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.idJ()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oU?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qW(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eC(b8,b9)
n=new B.eC("Getting ready\u2026",b9)
m=new B.eC(0,b9)
l=B.pB(new C.fPC(c2,b7,o),!1,!1)
b6.m9(0,l)
b9=x.H
B.cg(null,A.bB,!1,null,new C.fPD(n,m),c6,null,!0,!0,b9)
k=new C.fPH(b7)
j=new C.fPI()
i=null
t=4
b3=c2.a
h=Al.aUE(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h6N(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZI(f,B.J(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Jb.za(i,"dataavailable",new C.fPE(e))
d=new B.c3(new B.bk($.bF,x.dT),x.b2)
A.Jb.za(i,"stop",new C.fPF(d))
J.ajq(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$So)
case 8:w=7
return B.b(c5.$1(d0),$async$So)
case 7:a0=d0
J.h6O(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajq(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajq(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$So)
case 15:w=14
return B.b(c5.$1(d0),$async$So)
case 14:a0=d0
case 13:J.h6O(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajq(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbt())b3=b3===b8.gbt()&&0<b8.gcG()
else b3=!0
if(!b3){w=17
break}J.h6O(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bO(A.fg,null,b9),$async$So)
case 18:w=16
break
case 17:J.ajq(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajq(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.oq),$async$So)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hO(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n4(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HO(b0)
J.lN(b0)
B.bO(A.qy,new C.fPG(a7),b9)
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
if(p.pZ())p.eA()
c3=o
b3=$.ax()
c3.sic(b3)
J.aTh(c3,0)
c3=n
c3.sic(b3)
J.aTh(c3,0)
c3=m
c3.sic(b3)
J.aTh(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$So,v)},
fPC:function fPC(d,e,f){this.a=d
this.b=e
this.c=f},
fPB:function fPB(){},
fPD:function fPD(d,e){this.a=d
this.b=e},
fPH:function fPH(d){this.a=d},
fPI:function fPI(){},
fPE:function fPE(d){this.a=d},
fPF:function fPF(d){this.a=d},
fPG:function fPG(d){this.a=d},
by3:function by3(d,e,f){this.c=d
this.d=e
this.a=f},
fkk:function fkk(){},
fkl:function fkl(){},
clW(d){var w=0,v=B.j(x.at),u,t,s
var $async$clW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.atg(d,A.Au),$async$clW)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bF
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clW,v)},
clV(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a98:function a98(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bn_:function bn_(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
erb:function erb(d){this.a=d},
er9:function er9(d){this.a=d},
era:function era(d,e){this.a=d
this.b=e},
aa1:function aa1(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oV$=k
_.oW$=l
_.oX$=m
_.o6$=n},
aa2:function aa2(d,e){this.a=d
this.b=e},
b5q:function b5q(){},
cpQ:function cpQ(){},
cpR:function cpR(){},
cpS:function cpS(d,e,f,g,h,i,j,k,l){var _=this
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
hMz(d){return new C.ajJ(d)},
a4l:function a4l(){},
ajJ:function ajJ(d){this.a=d},
aTB:function aTB(){},
ayN:function ayN(d,e){this.d=d
this.b=e
this.a=null},
aV2:function aV2(d){this.b=d
this.a=null},
bEB(d,e){var w=0,v=B.j(x.H),u
var $async$bEB=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().guh().Ms(d,e),$async$bEB)
case 2:u=B.fYl()
w=3
return B.b(u,$async$bEB)
case 3:return B.h(null,v)}})
return B.i($async$bEB,v)},
hCC(d,e){return(A.tl[(d^e)&255]^A.o.aI(d,8))>>>0},
fHB(d,e,f,g,h,i){var w=C.ij0(d,A.dl,f,null,A.d6,g,h,i)
return w},
hEz(d){var w=F.hFj(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hUz(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pK.h(0,w)
if(v!=null)return v
for(u=A.pK.gdP(A.pK),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hEH(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<78;++w)v+="- "+D.duV[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDP(d,e){return C.ifq(d,e)},
ifq(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hO([d],"application/pdf")
n=x.z
q=B.aWO(B.a([r],x.e3),e,B.J(["type","application/pdf"],n,n))
p=B.cv(B.J(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jR(o,"share",[p]),x.H),$async$bDP)
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
return B.i($async$bDP,v)},
hhT(){var w=0,v=B.j(x.y),u,t,s
var $async$hhT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fym
s=$.bDm
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDP(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hhT,v)},
bFc(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bFc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fym
l=$.bDm
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A2.hyU()?3:4
break
case 3:w=5
return B.b(C.bDP(m,k),$async$bFc)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bDn
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n4(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HO(q)
w=10
return B.b(B.bO(A.a3,null,x.H),$async$bFc)
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
return B.i($async$bFc,v)},
hhK(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hhK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bDn
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lZ.rn(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hhK,v)},
hi0(d,e){var w=0,v=B.j(x.H),u,t
var $async$hi0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.lZ.rn(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hi0,v)},
b4m(d,e){var w=0,v=B.j(x.y),u
var $async$b4m=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b4o(d,e),$async$b4m)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4n(d),$async$b4m)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4m,v)}},D,Q,Ao,A9,A0,A1,W,Ap,G,F,E,H,X,R,A2,A3,Aq,M,Ar,Aa,As,Ab,K,At,Au,Y,N,Z,O,A_,Av,Ac,Aw,P,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,T,U,AD,L,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Aj=c[209]
A7=c[75]
Ak=c[54]
Al=c[65]
V=c[226]
A8=c[58]
Am=c[152]
An=c[236]
C=a.updateHolder(c[5],C)
D=c[224]
Q=c[143]
Ao=c[42]
A9=c[228]
A0=c[225]
A1=c[237]
W=c[214]
Ap=c[135]
G=c[195]
F=c[35]
E=c[227]
H=c[97]
X=c[124]
R=c[154]
A2=c[32]
A3=c[183]
Aq=c[239]
M=c[163]
Ar=c[190]
Aa=c[107]
As=c[138]
Ab=c[119]
K=c[229]
At=c[240]
Au=c[134]
Y=c[68]
N=c[203]
Z=c[84]
O=c[165]
A_=c[116]
Av=c[126]
Ac=c[121]
Aw=c[231]
P=c[127]
Ad=c[145]
Ax=c[95]
Ae=c[59]
Af=c[199]
Ay=c[40]
Ag=c[82]
Az=c[161]
Ah=c[153]
Ai=c[235]
AA=c[238]
AB=c[234]
S=c[76]
AC=c[232]
I=c[180]
T=c[52]
U=c[230]
AD=c[241]
L=c[211]
A4=c[233]
A5=c[113]
A6=c[64]
C.ol.prototype={
vK(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.un(t,v)
return new C.ol(t===0?!1:w,v,t)},
bQ2(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DP()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.un(w,u)
return new C.ol(r===0?!1:s,u,r)},
bQz(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DP()
w=o-d
if(w<=0)return p.a?$.hjw():$.DP()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.un(w,u)
q=new C.ol(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a47())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dN("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.F(e,16)===0)return r.bQ2(v)
u=w+v+1
t=new Uint16Array(u)
C.hvk(r.b,w,e,t)
w=r.a
s=C.un(u,t)
return new C.ol(s===0?!1:w,t,s)},
mF(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dN("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQz(v)
t=w-v
if(t<=0)return n.a?$.hjw():$.DP()
s=n.b
r=new Uint16Array(t)
C.i3M(s,w,e,r)
w=n.a
q=C.un(t,r)
p=new C.ol(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a47())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a47())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cP6(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9o(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9o(t,e)
if(s===0)return $.DP()
if(r===0)return t.a===e?t:t.vK(0)
w=s+1
v=new Uint16Array(w)
C.i3K(t.b,s,d.b,r,v)
u=C.un(w,v)
return new C.ol(u===0?!1:e,v,u)},
HS(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DP()
w=d.c
if(w===0)return t.a===e?t:t.vK(0)
v=new Uint16Array(s)
C.bct(t.b,s,d.b,w,v)
u=C.un(s,v)
return new C.ol(u===0?!1:e,v,u)},
bCU(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.un(r,u)
return new C.ol(!1,u,s)},
bCT(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.un(u,r)
return new C.ol(!1,r,v)},
bCV(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.un(p,m)
return new C.ol(s!==0,m,s)},
VF(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DP()
w=t.a
if(w===e.a){if(w){w=$.a47()
return t.HS(w,!0).bCV(e.HS(w,!0),!0).a9o(w,!0)}return t.bCU(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCT(v.HS($.a47(),!1),!1)},
a2(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9o(e,v)
if(C.cP6(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vK(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9o(e,v)
if(C.cP6(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DP()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hvl(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.un(w,t)
return new C.ol(q===0?!1:r,t,q)},
bQ1(d){var w,v,u,t
if(this.c<d.c)return $.DP()
this.aU6(d)
w=$.hco.cq()-$.azA.cq()
v=C.hcq($.hcn.cq(),$.azA.cq(),$.hco.cq(),w)
u=C.un(w,v)
t=new C.ol(!1,v,u)
return this.a!==d.a&&u>0?t.vK(0):t},
ctx(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aU6(d)
w=C.hcq($.hcn.cq(),0,$.azA.cq(),$.azA.cq())
v=C.un($.azA.cq(),w)
u=new C.ol(!1,w,v)
if($.hcp.cq()>0)u=u.mF(0,$.hcp.cq())
return t.a&&u.c>0?u.vK(0):u},
aU6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hvh&&d.c===$.hvj&&g.b===$.hvg&&d.b===$.hvi)return
w=d.b
v=d.c
u=16-A.o.galF(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hvf(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hvf(g.b,f,u,r)}else{r=C.hcq(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hcr(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cP6(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bct(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bct(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i3L(p,r,i);--o
C.hvl(h,j,0,r,o,s)
if(r[i]<h){m=C.hcr(j,s,o,n)
C.bct(r,l,n,m,r)
while(--h,r[i]<h)C.bct(r,l,n,m,r)}--i}$.hvg=g.b
$.hvh=f
$.hvi=w
$.hvj=v
$.hcn.b=r
$.hco.b=l
$.azA.b=s
$.hcp.b=u},
gX(d){var w,v,u,t=new C.cP7(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cP8().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.ol&&this.aS(0,e)===0},
tW(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vD(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galF(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cP9(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cPa(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lq(A.aI.gaV(w)).getFloat64(0,!0)},
v(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.v(-r.b[0])
return A.o.v(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vK(0):r
while(v.c>1){u=$.hJl()
if(u.c===0)B.bj(D.bbR)
t=v.ctx(u).v(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQ1(u)}w.push(A.o.v(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaUk:1,
$ihQ:1}
C.aTJ.prototype={
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
cSv(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.km(w,w.length,B.U(w).k("km<1>"))}}
C.T2.prototype={
d_F(){var w,v
if(this.as==null)this.bg2()
w=this.as
v=w==null?null:w.aqS()
return v==null?null:v.eV()},
bg2(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqS().eV()
this.as=new C.bTc(v)}},
gZ(d){return this.at}}
C.a54.prototype={
a7(){return"CompressionType."+this.b}}
C.bKW.prototype={
eJ(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.A3[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.A3[d])
s.c=t}return v}}
C.bJ9.prototype={
cQz(d,e){var w,v,u,t,s,r=this,q=new C.bKW(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eJ(8)!==66||q.eJ(8)!==90||q.eJ(8)!==104)return!1
w=r.a=q.eJ(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crO(q)
if(t<0)return!1
if(t===0){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
s=r.crR(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
return!0}}return!0},
crO(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eJ(8)
if(t!==D.dBm[u])v=!1
if(t!==D.dc1[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crR(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eJ(1),d2=((d3.eJ(8)<<8|d3.eJ(8))<<8|d3.eJ(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6f()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eJ(3)
if(q<2||q>6)return-1
v=d3.eJ(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eJ(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c1(6,$.hHk(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eJ(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eJ(1)===0)break
i=d3.eJ(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hHj()
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
if(f<h)h=f}c9.c1t(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avY(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avY(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.aq(a8,16)
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
a3=c9.avY(d3)
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
c1=(c1<<8^D.IE[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IK[b9];++b9
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
if(b8===0){b8=D.IK[b9];++b9
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
if(b8===0){b8=D.IK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IK[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.IE[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.IE[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.IE[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.IE[c1>>>24&255^c7&255])>>>0
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
avY(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eJ(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eJ(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1t(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6f(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cH5.prototype={
aKh(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTG(e)
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
if(w>0)e.aKk(w,!1)
r.csb(e)
q=r.r
v=r.f
u=e.aNq(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.bb7()
s.d_E(0,u,e,f)
q.push(s)}},
csb(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a94(20,r)
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
bTG(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a94(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.anx(A.iv)
o.aOF(r.eV(),A.iv,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cH3.prototype={}
C.azc.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cH6.prototype={
aKh(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b4()
o.b=e.b4()
w=D.aJc.h(0,e.b4())
o.c=w==null?D.NH:w
o.d=e.b4()
o.e=e.b4()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b4()
u=e.b4()
o.x=e.apv(v)
o.y=e.hq(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b0u:D.F1
o.ay=f
o.Q=e.hq(t)
if(o.at!==D.F1&&u>2){w=o.y
w.toString
s=B.rM(w,A.iv,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b4()===39169){s.b4()
s.b4()
s.apv(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b4()
o.at=D.b0v
o.ax=new C.cH3(r,q)
w=D.aJc.h(0,q)
o.c=w==null?D.NH:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gJ(d){return this.bpM().length},
aqS(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rM(new Uint8Array(0),A.iv,q,q)
w=r.at
if(w!==D.F1)if(p.gJ(0)<=0)r.at=D.F1
else{if(w===D.b0u){p=r.bOk(p)
r.Q=p}else if(w===D.b0v){p=r.bNY(p)
r.Q=p}r.at=D.F1}w=r.c
if(w===D.al1){v=p.c
u=B.dk()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.q9.Cb(p.eV(),!0,!1)
else{t=B.a9R(A.iv,r.w)
p=r.Q
p.toString
A.q9.a59(p,t,!0,!1)
u.b=t.Hs()}r.Q.c=v
return B.rM(u.bl(),A.iv,q,q)}else if(w===D.al2){s=B.a9R(A.iv,32768)
p=r.Q
v=p.c
C.hMK().cQz(p,s)
u=s.Hs()
r.Q.c=v
return B.rM(u,A.iv,q,q)}else return B.rM(p.eV(),A.iv,q,q)},
bpM(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
v(d){return this.x},
bbR(d){var w=this.ch,v=C.KL(C.hCC(w[0].M(0),d))
w[0]=v
v=w[1].a2(0,v.VF(0,C.KL(255)))
w[1]=v
w[1]=v.aM(0,C.KL(134775813)).a2(0,C.KL(1)).VF(0,C.KL(4294967295))
w[2]=C.KL(C.hCC(w[2].M(0),w[1].mF(0,24).M(0)))},
aTv(){var w=(this.ch[2].VF(0,C.KL(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOk(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rM(new Uint8Array(0),A.iv,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbR(u[v.c++]^r.aTv())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTv()
r.bbR(s)
u&2&&B.aj(t)
t[w]=s}return B.rM(t,A.iv,q,q)},
bNY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hq(8).eV()
v=16}else if(k===2){w=d.hq(12).eV()
v=24}else{w=d.hq(16).eV()
v=32}u=d.hq(2).eV()
t=d.hq(d.gJ(0)-10)
s=d.hq(10)
r=t.eV()
k=this.ay
k.toString
q=C.i3p(k,w,v)
p=new Uint8Array(B.cf(A.aI.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cf(A.aI.dt(q,v,k)))
if(!C.huP(A.aI.dt(q,k,k+2),u))throw B.W(B.fn("password error"))
k=new Uint8Array(16)
n=new C.bHK(k,new Uint8Array(16),p)
k=x.S
m=J.a6A(0,k)
m=n.r=new C.cpF(m)
m.c=!0
m.b=m.bp2(!0,new C.auJ(p))
if(m.c)m.d=B.bq(D.oS,!0,k)
else m.d=B.bq(D.zR,!0,k)
l=C.ht0(C.ht2(),64)
l.bit(new C.auJ(o))
n.w=l
n.d_a(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.huP(k,m))throw B.W(B.fn("macs don't match"))
return B.rM(r,A.iv,null,null)}}
C.bb7.prototype={
d_E(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.apv(w)
if(v>0){t=e.hq(v).eV()
n.ax=t
if(v>=4){s=B.rM(t,A.iv,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b4()
p=s.b4()
o=s.a94(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tI()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tI()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tI()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apv(u)
f.c=n.as
t=new C.cH6(D.NH,n,D.F1,B.a([C.KL(0),C.KL(0),C.KL(0)],x.f3))
n.ch=t
t.aKh(0,f,g)},
v(d){return this.at}}
C.cH4.prototype={
cQA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cH5(B.a([],x.fT))
this.a=g
g.aKh(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTJ(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.T2(o,A.o.aq(Date.now(),1000),0):C.hkY(o,q.w,q)
v.I(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hkY(o,q.w,q)
if(k.as==null)k.bg2()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.anx(A.iv)
j.aOF(o,A.iv,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GY(!1).E4(i,0,h,!0)}}return v}}
C.bHK.prototype={
d_a(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D2(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hMt(u,m.a)
q=m.r
if(16>u.byteLength)B.bj(B.dN("Input buffer too short",null))
if(16>w.byteLength)B.bj(B.dN("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRS(u,0,w,0,o)}else{o===$&&B.c()
q.bOo(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LN(w,0)
m.x=A.aI.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.D2(0,w,0,w.length)
return f}}
C.cpK.prototype={}
C.cpO.prototype={}
C.cpI.prototype={}
C.auJ.prototype={}
C.cpN.prototype={
cQP(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bit(new C.auJ(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bT_(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bT_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dN("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D2(0,d,0,d.length)
v.D2(0,f,0,4)
u=m.c
u===$&&B.c()
w.LN(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D2(0,s,0,s.length)
w.LN(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpJ.prototype={}
C.cpH.prototype={}
C.auK.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auK){v=this.a
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
w=A.o.tW(w,e.gc1K())
if(!w)e.gc1K()
return w},
aMQ(d,e){this.a=0
this.b=d},
tZ(d){return this.aMQ(d,null)},
aNt(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
v(d){var w=this,v=new B.ff(""),u=w.a
u===$&&B.c()
w.b3u(v,u)
u=w.b
u===$&&B.c()
w.b3u(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3u(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.by(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cpM.prototype={
ir(d){var w,v=this
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
aql(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4X(u,0)
v.c=0}v.a.aNt(1)},
D2(d,e,f,g){var w=this.cqx(e,f,g)
f+=w
g-=w
w=this.cqy(e,f,g)
this.cqo(e,f+w,g-w)},
LN(d,e){var w,v=this,u=C.ht1(v.a),t=u.a
t===$&&B.c()
t=C.hiz(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hiz(w,3)
v.cqs()
v.cqp(u)
v.auM()
v.cky(d,e)
v.ir(0)
return 20},
b4X(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ox(A.aI.gaV(d),d.byteOffset,d.length).getUint32(e,A.iH===w.d)
if(w.w===16)w.auM()},
auM(){this.d_9()
this.w=0
A.d.hx(this.r,0,16,0)},
cqo(d,e,f){while(f>0){this.aql(d[e]);++e;--f}},
cqy(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4X(d,e)
e+=4
f-=4
w.aNt(4)
v+=4}return v},
cqx(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aql(d[e]);++e;--f;++v}return v},
cqs(){this.aql(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aql(0)}},
cqp(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auM()
u=v.d
switch(u){case A.iH:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Ft:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.v(0)))}},
cky(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iH===this.d,s=0;s<w;++s){r=v[s]
q=J.ox(A.aI.gaV(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cpP.prototype={
d_9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qA[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qA[30]
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
C.cpL.prototype={
bit(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D2(0,w,0,v)
w=s.d
w===$&&B.c()
r.LN(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hx(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.h9(w,0,u,s.d)
s.bd4(s.d,u,54)
s.bd4(s.e,u,92)
u=s.d
r.D2(0,u,0,u.length)},
LN(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LN(s,w)
s=u.e
t.D2(0,s,0,s.length)
v=t.LN(d,e)
s=u.e
A.aI.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D2(0,s,0,s.length)
return v},
bd4(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpG.prototype={}
C.cpF.prototype={
a3o(d){return(D.oS[d&255]&255|(D.oS[d>>>8&255]&255)<<8|(D.oS[d>>>16&255]&255)<<16|D.oS[d>>>24&255]<<24)>>>0},
bp2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dN("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.ox(A.aI.gaV(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3o((m>>>8|(m&$.qA[24])<<24)>>>0)^D.cNN[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ox(A.aI.gaV(e),e.byteOffset,w)
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
p=(p^f.a3o((k>>>8|(k&$.qA[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3o((k>>>8|(k&$.qA[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ox(A.aI.gaV(e),e.byteOffset,w)
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
p=(p^f.a3o((g>>>8|(g&$.qA[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3o(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRS(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ox(A.aI.gaV(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ep[a8&255]
u=D.ep[a9>>>8&255]
t=$.qA[8]
s=D.ep[b0>>>16&255]
r=$.qA[16]
q=D.ep[b1>>>24&255]
p=$.qA[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ep[a9&255]
s=D.ep[b0>>>8&255]
u=D.ep[b1>>>16&255]
v=D.ep[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ep[b0&255]
u=D.ep[b1>>>8&255]
s=D.ep[a8>>>16&255]
q=D.ep[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ep[b1&255]
a8=D.ep[a8>>>8&255]
a9=D.ep[a9>>>16&255]
b0=D.ep[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ep[n&255]
b0=D.ep[m>>>8&255]
a9=D.ep[l>>>16&255]
a8=D.ep[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ep[m&255]
b0=D.ep[l>>>8&255]
o=D.ep[b1>>>16&255]
s=D.ep[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ep[l&255]
o=D.ep[b1>>>8&255]
b0=D.ep[n>>>16&255]
u=D.ep[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ep[b1&255]
o=D.ep[n>>>8&255]
s=D.ep[m>>>16&255]
v=D.ep[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ep[a8&255]^C.nR(D.ep[a9>>>8&255],24)^C.nR(D.ep[b0>>>16&255],16)^C.nR(D.ep[b1>>>24&255],8)^b6[w][0]
m=D.ep[a9&255]^C.nR(D.ep[b0>>>8&255],24)^C.nR(D.ep[b1>>>16&255],16)^C.nR(D.ep[a8>>>24&255],8)^b6[w][1]
l=D.ep[b0&255]^C.nR(D.ep[b1>>>8&255],24)^C.nR(D.ep[a8>>>16&255],16)^C.nR(D.ep[a9>>>24&255],8)^b6[w][2]
b1=D.ep[b1&255]^C.nR(D.ep[a8>>>8&255],24)^C.nR(D.ep[a9>>>16&255],16)^C.nR(D.ep[b0>>>24&255],8)^b6[w][3]
a7=D.oS[n&255]
b0=D.oS[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oS[l>>>8&255]
a9=D.oS[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oS[b1>>>8&255]
h=D.oS[n>>>16&255]
g=D.oS[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oS[l>>>24&255]
s=s[3]
a1=J.ox(A.aI.gaV(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ox(A.aI.gaV(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ox(A.aI.gaV(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ox(A.aI.gaV(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOo(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ox(A.aI.gaV(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ox(A.aI.gaV(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ox(A.aI.gaV(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ox(A.aI.gaV(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.eo[a6&255]
v=D.eo[b0>>>8&255]
u=$.qA[8]
t=D.eo[a5>>>16&255]
s=$.qA[16]
r=D.eo[a4>>>24&255]
q=$.qA[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.eo[a4&255]
t=D.eo[a6>>>8&255]
v=D.eo[b0>>>16&255]
w=D.eo[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.eo[a5&255]
v=D.eo[a4>>>8&255]
t=D.eo[a6>>>16&255]
r=D.eo[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.eo[b0&255]
a5=D.eo[a5>>>8&255]
a4=D.eo[a4>>>16&255]
a6=D.eo[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.eo[p&255]
a6=D.eo[b0>>>8&255]
a4=D.eo[n>>>16&255]
a5=D.eo[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.eo[o&255]
a4=D.eo[p>>>8&255]
a7=D.eo[b0>>>16&255]
t=D.eo[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.eo[n&255]
a7=D.eo[o>>>8&255]
a5=D.eo[p>>>16&255]
v=D.eo[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.eo[b0&255]
a7=D.eo[n>>>8&255]
t=D.eo[o>>>16&255]
w=D.eo[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.eo[a6&255]^C.nR(D.eo[b0>>>8&255],24)^C.nR(D.eo[a5>>>16&255],16)^C.nR(D.eo[a4>>>24&255],8)^b5[a9][0]
o=D.eo[a4&255]^C.nR(D.eo[a6>>>8&255],24)^C.nR(D.eo[b0>>>16&255],16)^C.nR(D.eo[a5>>>24&255],8)^b5[a9][1]
n=D.eo[a5&255]^C.nR(D.eo[a4>>>8&255],24)^C.nR(D.eo[a6>>>16&255],16)^C.nR(D.eo[b0>>>24&255],8)^b5[a9][2]
b0=D.eo[b0&255]^C.nR(D.eo[a5>>>8&255],24)^C.nR(D.eo[a4>>>16&255],16)^C.nR(D.eo[a6>>>24&255],8)^b5[a9][3]
a4=D.zR[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zR[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zR[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zR[o>>>8&255]
i=D.zR[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zR[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ox(A.aI.gaV(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bTb.prototype={}
C.bTc.prototype={
gJ(d){var w=this.a.length
return w},
aqS(){return B.rM(this.a,A.iv,null,null)}}
C.cAc.prototype={
Np(d){var w=d.w,v=Math.max(1,A.j.cC(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abv(v,t+20,u+16,t,u,B.uy(d.x))},
nF(d){return!1}}
C.bUd.prototype={
cKC(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bUe(),x.E))},
mZ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mZ)
case 6:w=5
return B.b(p.bEB(f,r),$async$mZ)
case 5:case 3:t.length===s||(0,B.I)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mZ,v)}}
C.axR.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9P.prototype={
A(d,e){if(e==null)return!1
if(J.bW(e)!==B.b4(this))return!1
return e instanceof C.a9P&&e.a===this.a},
gX(d){return B.by(B.b4(this),B.xt(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
v(d){var w="<optimized out>#"
if(B.b4(this)===D.h78)return"["+(w+B.eb(this.a))+"]"
return"[ObjectKey "+(w+B.eb(this.a))+"]"}}
C.a2k.prototype={
S(){return new C.aLi(B.aR(x.N))},
cYh(d){return this.d.$1(d)},
cVY(){return this.e.$0()}}
C.aLi.prototype={
Y(){this.a4()
this.PP()},
PP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVY(),$async$PP)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fiN(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PP,v)},
a_0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fiR(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fiS(t))
w=3
return B.b(C.apg(p),$async$a_0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fiT(t,s,p))
w=4
return B.b(t.PP(),$async$a_0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_0,v)},
a2j(d){return this.cuJ(d)},
cuJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2j=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fiO(t))
s=J.t(d,"id")
w=3
return B.b(C.c4b(J.k(s==null?"":s)),$async$a2j)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fiP(t))
w=1
break}q=C.hhZ(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYh(B.a([q],x.D)),$async$a2j)
case 4:if(t.c==null){w=1
break}t.m(new C.fiQ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2j,v)},
PO(d,e){return this.bOQ(0,e)},
bOQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fiI(q),r,null,!0,!0,x.y),$async$PO)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fiJ(t))
s=s.h(e,"id")
w=4
return B.b(C.apf(J.k(s==null?"":s)),$async$PO)
case 4:if(t.c==null){w=1
break}t.m(new C.fiK(t))
w=5
return B.b(t.PP(),$async$PO)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PO,v)},
cJB(d){var w=B.bh(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iU[B.bM(v)-1]+" "+B.bV(v)},
aTm(d,e){var w=null,v=B.l(e*0.3)
return B.r(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Qk,A.n),w,e,w,w,w,w,w,e)},
aTl(d){return this.aTm(d,44)},
ba9(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Qk:u,r=B.l(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,A_.AP,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.u(q,B.a([A_.AP,B.r(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bJ7,u,u,u)],p))}return B.E(B.az(A.c3,B.cT(u,B.A(q,A.l,u,A.ba,A.i,0,u,u),u,u,A.b_,new B.o(u,u,u,r,u,s,A.n),A.h7,u,u,u,u,A.qF,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fiX(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cov(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d7.j(0.14):D.a_u,n=B.l(18),m=p?A.d7:A.dr
m=B.L(m,A.r,p?1.8:1)
w=this.aTl(A.qS)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aXd,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cQ,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aXf,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Qk:q
u=p?q:B.L(A.aT,A.r,1.6)
r=p?D.c_F:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bc,t,B.cT(q,r,q,q,A.b_,new B.o(q,q,u,q,q,v,A.a6),A.h1,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.i,0,q,q),q,q,A.b_,new B.o(o,q,m,n,q,q,A.n),A.h1,q,q,q,A.d9,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fiM(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwk(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJB(J.k(o==null?"":o))
o=B.l(18)
w=B.L(A.dr,A.r,1)
v=r.aTl(A.Ps)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aXd,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cQ,B.d(p+" slides"+t,q,q,q,q,q,q,D.aXf,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b6D(A.i3,A.bv,"Bring it back",r.r?q:new C.fiU(r,d))
return B.r(q,B.A(B.a([v,A.bc,t,p,A.bn,r.b6D(A.ek,A.bZ,"Delete",r.r?q:new C.fiV(r,d))],s),A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.a_u,q,w,o,q,q,A.n),q,q,q,A.d9,D.bDl,q,q,q)},
b6D(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.h9(B.az(w,B.r(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
av1(d,e,f){var w=null
return new B.D(D.bCj,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fDh,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fv5,A.K,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ce
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aF(d,A.c1,x.w).w
u=B.r(i,i,A.f,i,i,new B.o(A.aT,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTm(A.zE,46),A.bc,D.bK6],t)
if(j.r)s.push(D.evj)
s.push(B.aI(i,i,i,i,A.th,i,i,i,new C.fj_(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.L(A.dr,A.r,1)
o=J.a7(h)
q=B.a([A.W,u,new B.D(D.bG6,s,i),B.r(i,B.A(B.a([j.ba9(0,A.zj,"Save",j.a.c.length),j.ba9(1,A.PK,"Saved",o.gJ(h))],t),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bF7,A.eA,i,i,i)],t)
if(j.x!=null){u=(j.y?A.bZ:A.bv).j(0.12)
s=B.l(14)
r=B.L((j.y?A.bZ:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.Pw:A.ee
n=B.X(n,p?A.bZ:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.r(i,B.A(B.a([n,A.af,B.E(B.d(m,i,i,i,i,i,i,A.VG,i,i,i),1)],t),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bF3,A.hM,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fyX,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fCe,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fj0(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.av1(A.qS,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.I)(r),++l)s.push(j.cov(r[l]))
A.d.u(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.euQ)
else if(j.e==null)s.push(j.av1(A.a32,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.av1(A.oz,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwk(r.gR(r)))
A.d.u(u,s)}q.push(new B.dm(1,A.cq,B.cm(u,i,i,A0.amQ,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8R()
p=s?i:D.Qk
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b8.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.X(A.zj,m?A.jZ:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bFJ,B.az(i,B.cT(i,B.A(B.a([k,A.Vg,new B.dm(1,A.cq,B.ex(A.A,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.jZ:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e7),i)],t),A.l,i,A.ba,A.i,0,i,i),i,i,A.b_,new B.o(s,i,i,o,n,p,A.n),A.h7,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.W)
return B.r(i,B.bm(!0,B.x(q,A.l,i,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b8y,i,i,i,i,i,i,i,i)}}
C.oP.prototype={
aj(){return B.J(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.a_2.prototype={
S(){return new C.azM(B.a([],x.k),B.f4(null,x.H))},
ge3(){return this.c}}
C.azM.prototype={
Y(){this.a4()
this.PZ()},
PZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3j(t.a.c),$async$PZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQw(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PZ,v)},
cCE(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.oz(t.d,new C.cQz(d))
v=w<0
if(v&&C.i3O(d))return t.f
u=t.d
if(v)J.n2(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h87(new C.cQA(t),v)
return t.f=t.f.bG(new C.cQB(t,d),v).eB(new C.cQC())},
Jj(d,e,f){return this.ci1(0,e,f)},
b0n(d,e){return this.Jj(0,e,!1)},
ci1(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ce(B.ec(new C.cQv(t,e),!1,null,x.H)),$async$Jj)
case 3:w=4
return B.b(t.f,$async$Jj)
case 4:w=5
return B.b(t.PZ(),$async$Jj)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jj,v)},
b_D(d){var w=A.o.v(1000*Date.now()),v=d==null?D.dP4:d
this.Jj(0,new C.oP(w,v,new B.V(Date.now(),0,!1)),!0)},
c8i(){return this.b_D(null)},
aeJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQD(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_D(s)
case 1:return B.h(u,v)}})
return B.i($async$aeJ,v)},
Ji(d,e){return this.bOH(0,e)},
bOH(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ji=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cQq(e),s,null,!0,!0,x.y),$async$Ji)
case 3:if(g!==!0){w=1
break}t.m(new C.cQr(t,e))
w=4
return B.b(t.f,$async$Ji)
case 4:w=5
return B.b(C.ahP(t.a.c,e.a),$async$Ji)
case 5:w=6
return B.b(t.PZ(),$async$Ji)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ji,v)},
DQ(d){return this.bGL(d)},
bGL(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQm(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DQ)
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
return B.b(t.b0n(0,d),$async$DQ)
case 9:w=5
break
case 7:w=10
return B.b(F.hiB(r,d.b,null),$async$DQ)
case 10:w=5
break
case 8:w=11
return B.b(t.Ji(0,d),$async$DQ)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DQ,v)},
c1G(){var w,v,u,t,s=null,r=[D.dP7,D.dP5,D.dP6],q=new C.cQt(),p=B.l(26),o=x.V,n=B.a([new B.ab(0,A.G,A.d3.j(0.4),A.eR,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dxI[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.r(s,B.d(v,s,s,s,s,s,s,A.p4,s,s,s),A.f,s,s,new B.o(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.ov,s,s,s))}return B.r(s,B.A(B.a([B.E(B.x(B.a([D.h2q,A.T,B.bX(A.bH,l,A.bt,s,6,6),A.aO,B.az(s,B.r(s,D.fcg,A.f,s,s,new B.o(A.c,s,s,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,V.anf,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cQs(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c8i,A.n),s,s,s,s,D.bGg,s,s,s)},
bGJ(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.r(v,B.bx(B.l(6),new B.an(A.a0,v,A.b2,A.t,B.a([B.ex(A.A,F.apS(d.b),A.f,A.c0),D.eBl,B.ap(v,B.az(v,B.r(v,D.c0x,A.f,v,v,D.b9w,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQh(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fs9,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fJ(0.6470588235294118,s,v),A.T,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fz8,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cQi(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQj(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eQ(B.a([new B.D(Q.alL,B.h9(B.az(s,B.r(s,A.asI,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b8.j(0.5),A.J,12)],x.V),E.x2,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9G(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nB,s,s,s,!0,s,s,s,s,s,D.h2u,s,s,s,1,s,!0)
if(t.e)r=D.bda
else{w=t.c1G()
v=B.a([D.fOv,A.af],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.r(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.frC,s,s,s),A.f,s,s,new B.o(D.bio,s,s,u,s,s,A.n),s,s,s,s,A.yY,s,s,s))}r=B.a([new B.nI(A7.a0U,new B.m5(w,s),s),new B.nI(D.bFD,new B.m5(B.A(v,A.l,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.fjr)
else r.push(new B.nI(D.bF5,B.Q_(new B.oT(new C.cQE(t),J.ad(t.d),!0,!0,!0,0,B.tt(),s),D.bcp),s))
r=B.w9(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bh_,r,s,!1,!1,s,s)}}
C.a_0.prototype={
S(){return new C.azI(B.a([],x.bx))},
UV(d){return this.d.$1(d)}}
C.aH5.prototype={}
C.azI.prototype={
b3w(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b5,A.aP),w),u=this.gb0m()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b5,A.aP),w)
w.aW(0,u)
return new C.aH5(v,w,f)},
EE(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qD,new C.cPL(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a4()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b5,A.aP),v)
t=m.gb0m()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b5,A.aP),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b5,A.aP),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b5,A.aP),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b5,A.aP),v)
n.aW(0,t)
r.push(new C.aH5(o,n,p.c))}if(r.length===0)r.push(m.b3w("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpz()
q=r.a
q.UV(q.c)}q=r.d
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
s.P$=0}r.a3()},
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
t.push(new F.mS(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rR(n,w,v,t,u)},
Bq(){var w=0,v=B.j(x.H),u=this,t
var $async$Bq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpz()
t=u.a
w=2
return B.b(t.UV(t.c),$async$Bq)
case 2:return B.h(null,v)}})
return B.i($async$Bq,v)},
c9E(){this.m(new C.cPK(this))
this.EE()},
b_i(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPN(w,d,v))
w.EE()},
c9F(d,e){var w=A.d.cH(this.w,e)
this.m(new C.cPV())
this.EE()
$.aW.x1$.push(new C.cPW(w))},
Ri(d){return this.col(d)},
col(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ri=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().l9(80,1400,A.eQ),$async$Ri)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Ri)
case 8:p=f
o=q.b.toLowerCase()
n=J.ajm(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPO(d,n,p))
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
return B.i($async$Ri,v)},
yt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hGx(r,t.gpz()),$async$yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPM(t,s))
t.EE()
case 1:return B.h(u,v)}})
return B.i($async$yt,v)},
coD(d){var w,v=this,u=null,t=F.fOT(d.c)
if(t==null)return new B.bL(A.a7,u,u,B.hs(D.bUB,D.fR6,new C.cPQ(v,d),u),u)
w=x.p
return new B.D(A.cy,new B.an(A.a0,u,A.ad,A.t,B.a([B.bx(B.l(12),B.fU(t,A.A,u,u,A.ck,A.c0,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6E(A.jM,new C.cPR(v,d)),A.bn,v.b6E(A.cC,new C.cPS(v,d))],w),A.l,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6E(d,e){var w=null
return B.aH(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hN,B.X(d,A.c,w,w,w,18),w),A.cW,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.b6,0,w,w,A.cW,w,w,A.aj)},
JX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bq(),$async$JX)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hiB(s,t.gpz(),new C.cPU(t)),$async$JX)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JX,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eQ(B.a([new B.D(A.po,B.hs(D.bZm,D.fXk,m.gaAQ(),B.fv(l,l,l,l,l,l,l,l,l,l,l,A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aI(l,l,l,l,A.asH,l,l,l,new C.cPX(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Zq,l,1,l,l,l,!1,l,!1,E.nB,l,l,l,!0,l,l,l,l,l,D.fRZ,l,l,l,1,l,!0),i=Ay.aX_(N.lF,A.c,Ag.Y7,A.oL,D.fSJ,m.gc9D()),h=B.l(18),g=m.gayM(),f=B.a([new B.ab(0,A.G,A.w.j(0.4),A.iq,12)],x.V)
f=B.az(l,B.r(l,new B.a5(92,142.1818181818182,B.ex(A.A,F.apS(m.gpz()),A.f,A.dE),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.r(l,B.A(B.a([f,A.ew,B.E(B.x(B.a([D.h44,A.aw,B.d(F.hh1(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fFb,l,l,l),A.W,B.dh(E.arZ,l,E.aY1,g,B.bo(A.d3,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(E.Zq,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.p2,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.T,w,A.T,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fFK,l,l,l)
r=B.aI(l,l,l,l,D.bY_,l,l,l,v===0?l:new C.cPY(m,v),l,l,l,l,"Move up",A.ch)
q=h.length
p=B.aI(l,l,l,l,D.c3E,l,l,l,v===q-1?l:new C.cPZ(m,v),l,l,l,l,"Move down",A.ch)
q=q===1?l:new C.cQ_(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.r(l,B.x(B.a([new B.c8(A.aL,A.e,A.i,A.l,l,A.p,l,0,B.a([s,A.b1,r,p,B.aI(l,l,l,l,B.X(A.ek,A.pk,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ch)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e6(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dv),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cg,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.coD(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e6(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dv),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(E.nB,l,new B.bG(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9P(g),A.en,D.bDD,l,l,l))}return B.oQ(!0,B.c4(j,E.ajK,B.cm(f,l,l,D.bE7,l,l,A.ah,!1),l,!1,!1,i,l),new C.cQ0(m),x.C)}}
C.azK.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.bZ:E.nB,q=B.l(16),p=B.l(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d3.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eP,B.aH(!1,A.a3,!0,t,B.aP(!1,q,!0,B.r(t,B.A(B.a([B.r(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aWx,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eI,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.asa.prototype={
S(){return new C.aFU()}}
C.aFU.prototype={
Y(){this.a4()
this.a_K()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a28()},
a28(){var w=0,v=B.j(x.H),u=this,t
var $async$a28=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dM(t,x.H),$async$a28)
case 2:u.d=null
if(u.c!=null)u.m(new C.ems(u))
w=3
return B.b(u.a_K(),$async$a28)
case 3:return B.h(null,v)}})
return B.i($async$a28,v)},
a_K(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_K=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZG(B.cC(n,0,null),new B.Qm(!0))
r.d=o}else{o=B.fn("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iX(0).dg(0,A.qA),$async$a_K)
case 7:if(r.c==null){w=1
break}r.d.u0(!1)
r.m(new C.emq(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.emr(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_K,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccJ(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.emt(w))}else{v.qr(0)
w.m(new C.emu(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.l(8*n.d)
m=B.a([D.jC.j(0.92),D.Mz.j(0.95)],x.O)
w=B.L(A.c2.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qV,A.c2,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bN(new B.o(o,o,w,n,o,new B.a8(A.aA,A.aE,A.x,m,o,o),A.n),A.bk,B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.P,0,A.p),o,o,o),o)}if(p.f)return B.as(B.X(A.ara,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.be2
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([B.ex(A.A,new B.a5(r,q,new B.AR(s,o),o),A.t,A.c0)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.r(o,B.X(A.hn,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bx(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccI(),o,o,o,o,o,o,!1,A.a4)}}
C.yg.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jG.prototype={}
C.aeK.prototype={
B(d){return B.pj(new C.e8R(this,B.P(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.ae8.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.H,s=B.l(18),r=B.l(18),q=B.L(D.jC.j(t?0.35:0.4),A.r,1),p=t?D.Nf:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.l(10),l=B.L(A.c2.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dM,6)],o)
w=this.c
o=B.E(B.r(u,new B.fJ(0.5625,C.in8(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.anM,u,u,u,u),1)
m=D.jC.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jC,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aH(!1,A.a3,!0,u,B.aP(!1,s,!0,B.r(u,B.x(B.a([o,B.r(u,B.x(B.a([l,A.cQ,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aD:D.bpM,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.am1,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yj.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o9.prototype={}
C.blZ.prototype={
a_T(d){var w=null
return new B.bL(A.a7,w,w,B.C_(A.A,B.r(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cdc(){return this.a_T(1)},
azt(d){var w=null,v=B.l(8),u=B.L(A.ix,A.r,0.9)
return B.r(A.A,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ahk,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.r(v,v,A.f,v,v,new B.o(v,v,B.L(A.ix,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dO(B.r(v,v,A.f,v,v,new B.o(v,v,B.L(A.ix,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.p(-8.36,0))],u),A.l,v,A.ba,A.i,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azt("TAARIFA ZA WANANDOA"),A.am,w.cdc(),A.cQ,w.a_T(0.9),A.cQ,w.a_T(0.7),A.T,w.azt("TAMKO LA MAKUBALIANO"),A.fF,w.a_T(1),A.cQ,w.a_T(0.95),A.T,w.azt("MASHAHIDI"),A.b1,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.i,0,A.p)}}
C.aeN.prototype={
B(d){return B.pj(new C.ere(B.P(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.agt.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.H,p=B.l(18),o=B.l(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bpi:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.l(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dM,6)],l)
w=this.c
v=C.hhx(w.a)
if(v==null)v=A.d.gH(D.SU)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.r(r,new B.fJ(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bS(0,B.fU(C.hhw(v.d),A.A,r,r,A.ck,A.c0,!0,r,!1,r,r),0,0,0),new B.D(A.amF,new C.blZ(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.anM,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:A3.Ng,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aH(!1,A.a3,!0,r,B.aP(!1,p,!0,B.r(r,B.x(B.a([l,B.r(r,B.x(B.a([i,A.cQ,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aD:D.bhD,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.am1,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.ld.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9h.prototype={}
C.Xb.prototype={
S(){var w=$.ax()
return new C.aGa(new B.cw(null,x.A),new B.au(A.ax,w),new B.au(A.ax,w),B.mZ(0,null,null),A.d.gH(D.a6b),D.dZz,B.a([],x.L),B.a([],x.gE))}}
C.aGa.prototype={
Y(){var w,v=this
v.a4()
v.w=v.a.c
v.z=new C.Ah(C.fSR(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fRI().bG(new C.eub(v),w)
$.rm().jp(0,"assets/images/ngmy_logo.png").bG(new C.euc(v),w).eB(new C.eud())},
t(){var w=this,v=w.e,u=$.ax()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.t()
w.a3()},
afA(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().l9(88,1600,A.eQ),$async$JC)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JC)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hGO(m,p),$async$JC)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bGm(new B.qd(o,1),m),$async$JC)
case 10:if(r.c!=null)r.m(new C.etO(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ac(k)
r.afA("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JC,v)},
XL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hGO(s,q),$async$XL)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bGm(new B.qd(r,1),s),$async$XL)
case 4:if(t.c!=null)t.m(new C.etK(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XL,v)},
afB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etV(q))
t=4
q.a.toString
p=C.isf()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afB)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etW(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ac(i)
q.afA(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etX(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afB,v)},
a_Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_Y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.etQ(q,i))
t=4
q.a.toString
p=C.ise()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_Y)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etR(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ac(g)
if(q.c!=null)q.m(new C.etS(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etT(q))
$.aW.x1$.push(new C.etU(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_Y,v)},
cds(d){this.m(new C.etP(this,d))},
EV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etM(q))
t=4
w=7
return B.b($.aW.gmV(),$async$EV)
case 7:w=8
return B.b(B.bO(A.mZ,null,x.H),$async$EV)
case 8:k=$.aW.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qn))throw B.W("The page is not ready yet.")
w=9
return B.b(p.mg(1800/p.gZ(0).a),$async$EV)
case 9:o=e
w=10
return B.b(o.hr(A.hq),$async$EV)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.ahR(J.eU(A.dS.gaV(n)),"ngmy_news.png","image/png"),$async$EV)
case 11:m=e
q.afA(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
q.afA(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etN(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EV,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.lo,a2,a2,a2,new C.eu2(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bZU,a2,a2,a2,new C.eu3(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.oK,a2,a2,a2,a4?a1.gb1E():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eQ(v,a2,a2,!0,!0,A.Cb,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.fcr,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eR,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.r(a2,new B.fJ(0.7142857142857143,B.ex(A.A,new B.eo(new C.b3l(t,s,r,a1.x,a2),a1.d),A.f,A.dE),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tQ,a2,a2,a2)
t=a1.as?a2:a1.gcdr()
t=B.a([B.E(B.dh(D.c_G,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cg,a2,a2,a2),t,B.bo(D.ul,a2,a2,a2,A.c,A.hb,a2,a2,new B.b9(B.l(14),P.vZ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.l(10),B.fU(r,A.A,a2,a2,A.ck,A.c0,!1,48,!1,a2,48),A.aq)
A.d.u(t,B.a([A.av,r,B.aI(a2,a2,a2,a2,D.bXh,a2,a2,a2,a1.as?a2:a1.gbNi(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tQ,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVd("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.drv[o]
p.push(B.n3(a2,D.ul,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pV,a2,a2,a2),A.ht,new C.eu4(a1,n),a2,a2,P.vZ,a2))}p=B.bX(A.bH,p,A.bt,a2,6,8)
m=a1.Q
m=B.bX(A.bH,B.a([D.h2D,A.bc,B.jy(a2,a2,a2,D.fNc,a2,new C.eu5(a1),m==="en",a2,a2,a2,a2),A.af,B.jy(a2,a2,a2,D.fN7,a2,new C.eu6(a1),m==="sw",a2,a2,a2,a2)],w),A.vT,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tQ,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cX(D.a6b,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gJ(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTF(g==null?h.a(g):g))}k=B.cm(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cX(D.a6b,10,a2,j),h=j.$ti,j=new B.bR(j,j.gJ(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTF(g==null?h.a(g):g))}j=B.cm(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdu()
h=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cy,s,a2),t,A.aB,new B.D(A.cy,r,a2),q,A.T,p,A.W,m,A.aB,new B.D(A.cy,l,a2),new B.a5(a2,78,k,a2),A.T,new B.a5(a2,78,j,a2),A.aO,B.az(a2,B.r(A.A,B.A(B.a([D.c_A,A.af,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fG,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.v8,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e3,B.A(B.a([D.dJM,A.av,D.bKu],w),A.l,a2,A.e,A.i,0,a2,a2),A.T],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a7
q=e?A.b8.j(0.35):D.ul
p=new B.aN(16,16)
d=new B.ay(A.by,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.r(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fD0,a2,a2,a2),A.f,a2,A9.XT,new B.o(q,a2,new B.bG(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cy,A.hM,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dcv[o]
t.push(B.n3(a2,D.ul,B.d(a0,a2,a2,a2,a2,a2,a2,A.KP,a2,a2,a2),A.ht,new C.eu7(a1,a0),a2,a2,P.vZ,a2))}u.push(B.bX(A.bH,t,A.bt,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVd("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eu8(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdt()
u.push(B.A(B.a([t,A.af,B.IN(A.zI,s,B.o3(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.i,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1E()
u.push(B.dh(A.oK,a2,D.fZ3,t,B.bo(A.d2,a2,a2,a2,a2,A.Kw,a2,a2,new B.b9(B.l(16),A.a1),a2,a2,a2)))
A.d.u(v,u)}v=B.a([B.cm(v,a1.r,a2,A.amp,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.L(E.ks.j(0.5),A.r,1)
v.push(B.bS(0,B.e9(B.as(B.r(a2,B.A(B.a([E.aaX,A.ew,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jy,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.C2,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bGx,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.Cb,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aVd(d){var w=null
return B.bA(w,new B.b6(4,B.l(14),A.a1),w,A.f0,w,w,w,w,!0,w,w,w,w,w,w,D.ul,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Z.EL,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTF(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b0(d.f),p=s?A.bE:A.by
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.r(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kz,t,t,t,t),A.fF],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.r(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bCy,t,t,t,t))
w.push(A.cQ)
w.push(new B.D(A.jr,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.r(t,B.x(w,A.l,t,A.ba,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iQ,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.etL(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ah.prototype={
bfe(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ah(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOl(d){var w=null
return this.bfe(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.J(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjO(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjM(),B.U(w).k("N<1,n>")).bY(0,new C.cjN())
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
return this.bfe(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG7(d){return this.f}}
C.tR.prototype={
a7(){return"NewsLayout."+this.b}}
C.Ce.prototype={
a7(){return"NewsFrame."+this.b}}
C.lz.prototype={}
C.b3l.prototype={
rZ(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1G(d,e,f,g){return this.rZ(d,e,null,1.25,f,A.bs,g)},
QB(d,e,f,g,h){return this.rZ(d,e,f,1.25,g,A.bs,h)},
azz(d,e,f,g,h){return this.rZ(d,e,null,f,g,A.bs,h)},
azy(d,e,f,g,h){return this.rZ(d,e,f,g,0,A.bs,h)},
b1I(d,e,f,g,h){return this.rZ(d,e,null,f,0,g,h)},
cdy(d,e,f,g,h,i){return this.rZ(d,e,f,g,0,h,i)},
azx(d,e,f,g){return this.rZ(d,e,null,f,0,A.bs,g)},
afE(d,e,f){return this.rZ(d,e,null,f,0,A.bs,A.cZ)},
b1H(d,e,f,g,h){return this.rZ(d,e,f,g,0,h,A.cZ)},
cdx(d,e,f,g){return this.rZ(d,e,null,f,0,g,A.cZ)},
cdw(d,e,f,g){return this.rZ(d,e,f,g,0,A.bs,A.cZ)},
afF(d,e,f,g,h,i){return this.rZ(d,e,f,g,h,A.bs,i)},
b1F(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iK(new B.ep(d,u,u,A.cN,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jj(1),u,u,h,u,A.bY,u,A.ct)
v.o8(g)
if(!v.b.a.c.gaGF())return w
w-=2}return j},
afC(d,e,f,g,h,i,j,k){return this.b1F(d,e,f,g,h,i,j,k,A.bs)},
aBL(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.r(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.u(t,B.a([new B.a5(w,3,w,w),B.r(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
aBK(d){return this.aBL(null,!1,d)},
aiC(d,e){return this.aBL(null,d,e)},
cvr(d,e){return this.aBL(d,!1,e)},
gb3T(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXV(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pk(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afC(w.gaXV(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaXV(),v,g,A.a2,v,v,v,w.azy(u,t,f,1.02,A.U),e,v,v)},
aY_(d){return this.Pk(d,A.K,null,2,78,30)},
acS(d,e,f,g,h){return this.Pk(d,e,null,f,g,h)},
c1z(d,e,f,g,h){return this.Pk(d,A.K,e,f,g,h)},
c1y(d,e,f){return this.Pk(d,A.K,null,e,f,30)},
SB(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jG,B.d(s,u,g,A.a2,u,u,u,v.b1H(w,v.b1F(t,w,A.cZ,d,g,h,15,1.2,A.cK),f,1.2,A.cK),e,u,u),u)},
b9O(d){return this.SB(d,A.K,null,3,24)},
aDe(d,e,f,g){return this.SB(d,e,null,f,g)},
cD7(d,e,f){return this.SB(d,A.K,e,3,f)},
b9P(d,e){return this.SB(d,e,null,3,24)},
cD5(d,e){return this.SB(d,A.K,null,3,e)},
cD6(d,e,f){return this.SB(d,e,null,3,f)},
at3(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f5,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QB("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.r(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.r(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v)},
Of(){return this.at3(null,!0)},
at2(d){return this.at3(null,d)},
bJc(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.i0,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdx(this.d.as,13.5,1.2,A.cK),e,w,w),w),w)},
wb(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3T(),h=A.o.aq(j.bD(B.c_(B.bD(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.ieT(Math.max(1,B.bD(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1G(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afC(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afC(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.r(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eS,l,l,l,m.afF(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.l,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.T,B.A(B.a([B.d(C.bFB(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iX,A.i,0,l,l),A.am,m.aiC(!0,3)],s),A.l,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.r(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ew,B.E(B.d(i,l,1,A.eS,l,l,l,m.azx(v,u*0.9,1,A.U),l,l,l),1)],w),A.l,l,A.e,A.i,0,l,l),A.W,B.A(B.a([B.d(C.bFB(j),l,l,l,l,l,l,m.QB(k,13,B.b0(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iX,A.i,0,l,l),A.T,m.cvr(B.b0(h),3)],w),A.l,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb3T()
v=B.d("NGMY",l,l,l,l,l,l,m.azz(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.af,B.eH(A.A,-0.03,B.r(l,B.d("NEWS",l,l,l,l,l,l,m.rZ(k,r*0.72,o,1.05,-0.5,A.cK,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b1,new B.dm(1,A.cq,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afF(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.U),A.e4,l,l),l)],n),A.l,l,A.e,A.i,0,l,l),A.T,B.r(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iX,A.i,0,l,l)
t=m.aiC(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azx(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aiC(!0,1.4),A.aw,B.d(C.bFB(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBK(3)],h),A.l,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azz(v,u,1,3,A.U),A.K,l,l),A.T,m.aiC(!0,1.2),A.aw,B.A(B.a([B.d(C.bFB(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iX,A.i,0,l,l),A.aw,m.aBK(3)],h),A.l,l,A.e,A.i,0,A.p)}},
ae3(d){return this.wb(d,!1)},
afD(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.l(f)
return B.r(w,B.d(d,w,w,w,w,w,w,this.afF("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cdv(d,e){return this.afD(d,null,e,null)},
b_a(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.df(v),12)===0?12:A.o.F(B.df(v),12),t=B.b0(this.d.w).j(0.75),s=this.azy("Roboto",15,t,1,A.cE),r=B.X(E.apo,t,w,w,w,18),q=A.a.aB(A.oP[B.bM(v)-1],0,3),p=A.a.b_(A.o.v(B.fR(v)),2,"0"),o=B.df(v)>=12?"PM":"AM"
return B.A(B.a([r,A.af,B.d(q+" "+B.bV(v)+", "+B.bD(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.r(w,w,A.f,t.j(0.4),w,w,w,20,w,A.ha,w,w,w,1),B.X(d,t,w,w,w,19),A.af,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w)},
ayd(){return this.b_a(A.n6)},
b6R(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afF("Roboto",this.afC(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aBO(d,e,f){return this.b6R(d,e,f,30)},
aDh(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.rZ,B.d(v,w,e,A.a2,w,w,w,this.cdw("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9T(d){return this.aDh(d,3,22)},
cDi(d,e){return this.aDh(d,e,22)},
uk(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fU(r,A.A,s,s,A.ck,A.c0,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BM(D.bJo,w,s)
if(v==="sepia")w=new B.BM(D.bJn,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.r(s,B.as(B.X(A.zc,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bN(new B.o(s,s,s,s,s,new B.bY(A.A,0.95,A.x,s,0,B.a([A.L,A.Zm.j(0.38)],x.O),s,s),A.n),A.bk,s,s))
return new B.a5(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.r(j,B.r(j,k.uk(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.eA,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.mg,j,j,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.eqB,14)],x.V)
v=k.uk(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eH(A.A,-0.035,B.r(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b1H(i.as,13.5,D.bjm,1.1,A.cK),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(D.bnh,j,j,j,w,j,A.n),j,e,j,j,D.bE2,j,j,d),j)
case 3:w=B.l(30)
i=B.L(B.b0(i.x),A.r,5)
return B.r(j,B.bx(B.l(25),k.uk(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.as(B.r(j,B.hY(k.uk(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a6),j,t,j,j,A.mg,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ab(0,A.G,A.w.j(0.3),D.eqh,10)],x.V)
return B.eH(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bS(0,B.r(j,k.uk(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.t3,j,j,j),0,0,0),B.ap(j,B.eH(A.A,-0.6,B.r(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eH(A.A,-0.6,B.r(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b2(B.nX(k.uk(d,e),A.aq,D.hxM),new C.beZ(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.uk(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bh(s));++m){l=new B.aN(2,2)
n.push(B.r(j,j,A.f,j,j,new B.o(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c8(A.aL,A.qZ,A.i,A.l,j,A.p,j,0,n,j),j))}return B.r(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.eq,j,j,j,e,j,j,D.bIE,j,j,d)
case 8:w=d/2
v=B.xE(A.fQ,new B.aN(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.r(j,B.bx(B.xE(A.hV,new B.aN(w,w)),k.uk(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ab(0,A.G,A.w.j(0.35),A.h2,22)],x.V)
return B.r(j,k.uk(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nX(k.uk(d,e),A.aq,D.hFW),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.r(j,k.uk(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.eA,j,j,d)}},
aR9(d,e){return this.d.e===D.Tw?A.bM:this.bJc(d,e)},
Xh(d){return this.aR9(d,A.K)},
gaCy(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCx(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.L(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1I(v.Q,19,1.15,A.cK,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QB("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afE(v.as,13,1.25),n,n,n),1))
A.d.u(q,r)}return B.r(n,B.jo(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gclQ(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aay(d,e,f,g){return B.cr(new C.cjP(this,e,d,f,g))},
aax(d){return this.aay(d,22,!0,18)},
Xu(d,e){return this.aay(d,22,!0,e)},
aSf(d,e,f){return this.aay(d,22,e,f)},
bLc(d,e,f){return this.aay(d,e,!0,f)},
bcS(d,e,f,g){return B.cr(new C.cjQ(this,e,d,g,!0,f))},
ckD(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ae3(824),A.aB,k.aY_(824),k.b9O(824),A.T,k.Of(),A.ae,B.as(k.qY(824,360),j,j,j),k.Xh(824),A.ae,B.E(k.aax(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ae3(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acS(440,A.bp,3,62,26),k.aDe(440,A.bp,2,20),A.b1,k.at3(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Kx,B.x(B.a([k.qY(362,310),k.Xh(362)],w),A.l,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aBK(2),A.ae,B.E(k.aax(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.wb(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1z(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cD7(788,u?B.b0(h.f):A.c,22))
v=B.r(j,B.x(s,A.l,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Cy,j,j,j)
u=B.a([B.as(k.qY(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tw){h=A.w.j(0.65)
u.push(B.ap(0,B.r(j,B.d(s,j,2,A.a2,j,j,j,k.azy(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lL,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a0,j,A.ad,A.t,u,j),A.T,k.Of(),A.W,B.E(k.Xu(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.wb(824,!0)
w=k.qY(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b7,j,A.ad,A.t,B.a([w,B.ap(0,B.r(j,k.Pk(780,A.bp,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bGQ,j,j,j),j,j,0,0,j,j)],u),j),k.b9P(824,A.bp),A.T,k.Of(),A.W,B.E(k.aax(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ae3(824),A.aB,k.aY_(824),k.b9O(824),A.T,k.Of(),A.ae,B.E(k.bcS(3,300,B.x(B.a([k.qY(300,300),k.Xh(300)],h),A.l,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.wb(824,!0)
v=x.p
u=B.x(B.a([k.acS(440,A.bp,3,62,26),k.aDe(440,A.bp,2,20),A.b1,k.at2(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bA,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aUp,new B.D(A.i0,k.qY(364,h.e===D.Tw?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aB,B.E(k.Xu(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.ae3(824),A.ae,k.c1y(824,2,70),k.cD5(824,21),A.T,k.Of(),A.ae,B.E(k.bcS(3,340,B.as(k.qY(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.wb(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFB(new B.V(u,0,!1))
t=x.p
v=B.a([B.r(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QB(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1I(h.Q,24,1.15,A.cK,A.U),j,j,j))
v.push(A.b1)
if(k.gaCy())v.push(k.aCx(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.r(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.am_,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acS(570,A.bp,3,62,28),k.cD6(570,A.bp,20),A.T,k.at2(!1),A.T,B.as(k.qY(570,330),j,j,j),k.Xh(570),A.W,B.E(k.aSf(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.wb(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QB(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.r(j,B.x(B.a([t,A.am,k.Pk(788,A.bp,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bF8,j,j,j),k.b9P(824,A.bp),A.W,B.as(k.qY(824,310),j,j,j),k.Xh(824),A.T,k.Of(),A.W,B.E(k.aax(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.wb(824,!0),A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([k.qY(824,430),B.ap(18,k.cdv(k.c.b,17),j,j,18,j,j,j)],w),j),A.bA,k.aBO(824,3,66),k.b9T(824),A.ae,B.r(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.ayd(),A.aB,B.E(k.Xu(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.wb(824,!0),A.bA,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afD(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b6R(410,4,58,28),k.aDh(410,6,20),A.b1],w),A.E,j,A.e,A.i,0,A.p),j),V.aUq,k.qY(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aB,k.ayd(),A.aO,B.E(k.Xu(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.wb(824,!0)
v=k.qY(824,420)
u=B.hRJ(-0.25)
t=B.b0(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ap(22,B.fB(j,B.r(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdy(i,30,A.c,1,A.cK,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bH5,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bA,k.aBO(824,3,62),k.b9T(824),A.ae,B.r(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.b_a(A.lQ),A.aB,B.E(k.Xu(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.wb(824,!0)
u=h.w
t=x.p
w=B.a([k.qY(824,380),B.ap(j,k.afD(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBO(824,2,60)
r=k.cDi(824,2)
p=k.ayd()
o=B.E(k.aSf(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ad,A.t,w,j),A.aO,s,r,A.W,p,A.aB,o,A.ae,B.r(j,B.A(B.a([B.bx(B.l(14),k.uk(150,104),A.aq),A.p0,B.E(B.x(B.a([k.afD("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.T,B.d(q,j,2,A.a2,j,j,j,k.azx(i,19,1.15,A.I),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eI,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.wb(824,!0),A.bA,k.acS(824,A.bp,3,62,30),k.aDe(824,A.bp,2,22),A.W,k.at2(!1),A.W,B.as(k.qY(824,330),j,j,j),k.aR9(824,A.bp),A.aO,B.E(k.bLc(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,new B.bN(new B.o(s,s,s,s,s,new B.a8(A.aA,A.aE,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bk,s,s),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b2(s,s,s,new C.bbq(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bHC,B.x(B.a([B.E(t.ckD(),1),A.T,B.r(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fF,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1G(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QB(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iX,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bS(0,new B.du(!0,B.b2(s,s,s,new C.buv(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hY(B.fU(q,A.A,s,s,A.ck,A.c0,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n6,B.b0(w),s,s,s,28))
o.push(A.af)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azz(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.du(!0,B.d3(B.r(s,B.A(o,A.l,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bIN,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jo(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.bf_.prototype={
ju(d){return C.hvu(d)},
k9(d){return!1}}
C.beZ.prototype={
a5(d,e){var w,v=C.hvu(e)
$.S()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bx1.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e2()
o.cY(3)
w=$.S()
v=B.a([],x.v)
u=new B.aG(w.r,A.ai,null,null,v)
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
u.E(new B.bu())
return u},
k9(d){return!1}}
C.bbq.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e2()
o.cY(7)
$.S()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.p(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.p(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.bY(A.A,0.5,A.x,p,0,B.a([A.YL.j(0.13),A.L],v),p,p).aK(0,B.bZ(r,q)))
d.N(r,q,w)}w.sav(p)},
aE(d){return!1}}
C.buv.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fs(u,A.ct,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dD,A.bY)
s.e5()
w=d.c
J.bp(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.p(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.Xc.prototype={
S(){return new C.aGd()}}
C.aGd.prototype={
Y(){var w=this
w.a4()
B.fJ4(w.a.c,null).bG(new C.euY(),x.g7).bG(new C.euZ(w),x.a)
w.a.toString},
gaPW(){var w=D.aA5[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazA(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPW()
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
return new B.a1(q,w,q+s,w+t)},
a0_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.euL(r))
t=4
q=r.gazA()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.q3(new B.pE())
m=B.zz(n,null)
i=B.K()
i.z=A.hl
m.q4(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o3().xH(J.hkG(p),J.hkG(o)),$async$a0_)
case 7:l=e
w=8
return B.b(l.hr(A.hq),$async$a0_)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eU(J.w3(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.euM(r))
r.c.L(x.q).f.T(D.fm7)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0_,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.lo,s,s,s,new C.euS(d),s,s,s,s,s,s),p=x.p
q=B.eQ(B.a([B.bP(!1,D.h0G,s,s,!0,s,s,s,t.y||r==null?s:t.gcdz(),s,s)],p),s,s,!0,!0,A.Cb,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h4H,s,s,s,1,s,!0)
if(r==null)p=A.m3
else{w=B.E(new B.D(A.bS,B.as(new B.fJ(t.gaPW(),B.cr(new C.euT(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iQ,B.jy(s,s,s,B.d(D.aA5[u].a,s,s,s,s,s,s,A.abA,s,s,s),s,new C.euU(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.r(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cm(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.c0o,B.E(B.l_(s,s,s,6,1,new C.euV(t),t.f),1),D.c_Y],p),A.l,s,A.e,A.i,0,s,s),D.fYX,A.am,B.bP(!1,D.fYF,s,s,!0,s,s,s,new C.euW(t,d),s,s)],p),A.l,s,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.ZC,s,s,s,s,s,s,D.bEu,s,s,s)],p),A.l,s,A.e,A.i,0,A.p)}return B.c4(q,A.Cb,p,s,!1,!1,s,s)}}
C.bex.prototype={
a5(d,e){var w
$.S()
w=B.K()
w.z=A.ck
return d.q4(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1j.prototype={
S(){var w=$.ax(),v=x.A
return new C.aHD(new B.au(A.ax,w),new B.au(new B.ba("NGMY",A.b5,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6P),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oZ.prototype={}
C.aHD.prototype={
gaY8(){var w,v,u=this
if(u.p1)w=new B.rE(1,u.p2,0.9,u.p3).jd().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a4()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f3Y(w))},
t(){var w=this.d,v=$.ax()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a3()},
Zx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rm().jp(0,"assets/images/ngmy_logo.png"),$async$Zx)
case 7:q=e
p=J.eU(J.w3(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bGm(new B.qd(p,1),o),$async$Zx)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f2Q(r,p))
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
return B.i($async$Zx,v)},
QE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().l9(92,1800,A.eQ),$async$QE)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QE)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bGm(new B.qd(p,1),n),$async$QE)
case 9:if(r.c==null){w=1
break}r.m(new C.f3d(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ac(l)
n=r.c
if(n!=null)n.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QE,v)},
b6d(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a0=w.bb=w.bn=w.y2=0
w.b8=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c8=w.bH=w.bm=0
w.cP=w.c5=!1},
aZV(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bD_(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.duB)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bD_(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bD_(C.hff(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bD_(C.hff(1-a0*0.5,n,n,n),w)}return a1?C.bD_(C.hff(-1,255,255,255),w):w},
aDn(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kZ(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xF(u,v,w)
this.dx.pA(new C.f3n(t),!0)
return t},
b8N(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDn()
w=C.ipo(e.d.a.a,e.db)
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
return C.ilL(d,k,v,a0,j,e.gaY8(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAW(){return this.b8N(null)},
DP(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmV(),$async$DP)
case 3:w=4
return B.b(B.bO(A.eU,null,x.H),$async$DP)
case 4:w=5
return B.b($.aW.gmV(),$async$DP)
case 5:s=$.aW.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qn)){u=null
w=1
break}w=7
return B.b(r.mg(1080/r.gZ(0).a),$async$DP)
case 7:w=6
return B.b(e.hr(A.hq),$async$DP)
case 6:q=e
u=q==null?null:J.eU(A.dS.gaV(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DP,v)},
abs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2z(q))
t=4
w=7
return B.b(q.DP(),$async$abs)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cU.gcu().aO(p)
n=C.Ct(null,null,null,null,D.oU,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8N(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ac(j)
l=q.c
if(l!=null)l.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2A(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abs,v)},
B8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2x(q))
t=4
w=7
return B.b($.aW.gmV(),$async$B8)
case 7:w=8
return B.b(B.bO(A.n_,null,x.H),$async$B8)
case 8:w=9
return B.b($.aW.gmV(),$async$B8)
case 9:k=$.aW.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qn))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.mg(1080/p.gZ(0).a),$async$B8)
case 10:o=e
w=11
return B.b(o.hr(A.hq),$async$B8)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.ahR(J.eU(A.dS.gaV(n)),"ngmy_quote.png","image/png"),$async$B8)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.T(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
k=q.c
if(k!=null)k.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2y(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B8,v)},
cnM(){var w=this.p4
w.toString
return B.cr(new C.f36(this,w))},
b1P(d,e){var w=null
return B.bA(w,w,w,w,w,D.fx7,w,w,!0,new B.b6(4,B.l(16),P.vZ),w,w,w,w,w,D.ul,!0,w,w,w,w,new B.b6(4,B.l(16),D.b6d),w,w,w,w,w,w,w,w,Ad.ET,e,w,w,w,w,w,w,w,D.fCQ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yD(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.u(u,B.a([B.X(e,A.b8,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aXa,w,w,w))
return new B.D(H.alQ,B.A(u,A.l,w,A.e,A.i,0,w,w),w)},
b1O(d,e){var w=null,v=B.l(18),u=B.L(A.by,A.r,1)
return B.r(w,B.aH(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.iD),A.f,w,w,new B.o(D.ul,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wj(d){return this.b1O(d,A.bI)},
oz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.v8:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.L(f?A.L:A.by,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.u(s,B.a([B.X(e,q?A.c:A.jZ,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.jZ,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.P,0,r,r),r,r,A.b_,new B.o(w,r,u,v,r,p,A.n),A.h7,r,r,r,r,A.GS,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahy(d,e,f){return this.oz(d,null,e,f)},
azE(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eK:A.by,s=x.p
v=B.a([B.cT(w,d,w,w,A.b_,new B.o(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h7,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.u(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1S(d,e,f,g,h,i){return this.azE(d,e,f,g,h,5,i)},
kC(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aVX,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.euU,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f3j(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.r(u,B.d(j,u,u,u,u,u,u,A.VL,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a1l,u,u,u))
s=B.A(s,A.l,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.abs(w).cPH(A.b8,A.by,A.b8.j(0.2),A.c,D.fbG,4)
return new B.D(A.yH,B.x(B.a([s,B.Z3(B.l_(u,u,u,g,f,new C.f3k(this,h),A.j.D(e,f,g)),w)],t),A.l,u,A.e,A.i,0,A.p),u)},
ajB(d,e,f,g,h,i){return this.kC(d,e,f,g,h,null,i)},
ak_(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.I)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bUc:o
n.push(B.az(o,B.r(o,t,A.f,o,o,new B.o(s,o,new B.bG(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f3m(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bX(A.bH,n,A.bt,o,10,10)},
bPm(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6P
else{v=x.a8
w=B.C(new B.Y(D.a6P,new C.f2p(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1P("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f2q(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.abQ,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1P("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f2r(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yD("DESIGNS",A.uQ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d3c[q]
r.push(new B.D(A.iQ,o.ahy(p,o.x===p,new C.f2s(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.cb(B.A(r,A.l,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.ae,new B.a5(n,118,B.hS(n,new C.f2t(o,w),w.length,n,n,A.aL,new C.f2u(),!1),n),A.T,o.b1O(B.x(B.a([B.iU(A.b8,n,n,A.ag,!0,new C.f2v(o),n,D.fPD,n,D.fLO,o.k3),B.iU(A.b8,n,n,A.ag,!0,new C.f2w(o),n,n,n,D.fIW,o.k2)],s),A.l,n,A.e,A.i,0,A.p),A.amo)],s),A.E,n,A.e,A.i,0,A.p)},
cJT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDn()
if(a7.length===0)return a5.wj(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KW,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.I)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ci.E"))
A.d.fg(m)
l=m.length!==0&&A.d.cD(m,new C.f3N(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f3U(a5)
j=new C.f3W()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KW,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eK:A.by
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.r(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bG(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.OA,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f3O(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wj(B.bX(A.bH,o,A.vT,a6,6,6))
i=B.a([a5.oz("All words",K.aqU,!1,new C.f3P(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahy("Sentence "+a3,!1,new C.f3Q(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahy("Clear picks",!1,new C.f3R(a5)))
i=B.bX(A.bH,i,A.bt,a6,8,8)
g=a5.yD("SIZE OF THE PICKED WORDS",D.aqk)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dAW[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f3S(e,k)
f.push(a5.ahy(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bX(A.bH,f,A.bt,a6,8,8),A.W,a5.oz("Make every word normal",A.k9,!1,new C.f3T(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cEP(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bK3,B.d(A.d.fc(D.aBS,new C.f3w(q)).b,p,p,p,p,p,p,D.fvr,p,p,p)],o),A.l,p,A.e,A.i,0,p,p),m=B.cr(new C.f3x(q)),l=q.yD("HIGHLIGHT BEHIND THE WORDS",A.a3i),k=q.p1?-1:q.k4
k=q.ak_(k,new C.f3y(q),D.deH)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.W,m,l,B.bX(A.bH,B.a([k,B.az(p,B.r(p,D.bXb,A.f,p,p,new B.o(p,p,B.L(v,A.r,w?3:1),p,p,D.foO,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3B(q),p,p,p,p,p,p,!1,A.a4)],o),A.vT,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KW,p,p,p)],o)
if(q.gaY8()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajB("Colour",l,0,360,new C.f3C(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.u(m,B.a([l,q.ajB("Shade",k,0.15,0.9,new C.f3D(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kC("Strength",l,0.15,1,new C.f3E(q),1,""+A.j.V(l*100)+"%"))
A.d.u(n,B.a([A.W,q.wj(B.x(m,A.l,p,A.e,A.i,0,A.p))],o))}n.push(q.yD("LOOK",A.wV))
m=B.a([q.oz("Bold",I.aqi,q.fy,new C.f3F(q)),q.oz("Italic",I.aqj,q.go,new C.f3G(q))],o)
for(u=0;u<3;++u){l={}
k=D.d4t[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.v8:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.by,1,A.r,-1)
m.push(B.az(p,B.r(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bG(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3H(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bX(A.bH,m,A.vT,p,8,8))
n.push(q.yD("COLOUR",A.ml))
n.push(q.ak_(q.fx,new C.f3I(q),D.dqX))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KW,p,p,p))
n.push(q.yD("SIZE AND PLACE",A.HP))
m=q.fr
m=q.kC("Text size",m,0.5,1.6,new C.f3z(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.wj(B.x(B.a([m,q.kC("Up / down",l,0.12,0.5,new C.f3A(q),0.3,""+A.j.V(l*100))],o),A.l,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cnN(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bE.j(0.12)],x.O)
return B.az(q,B.r(q,B.x(B.a([B.r(q,D.c1S,A.f,q,q,D.b9a,q,62,q,q,q,q,q,62),A.aB,D.fN5,A.am,D.fRX],x.p),A.l,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(D.ul,q,v,w,q,new B.a8(A.a7,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bFI,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1R(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bx(B.l(12),new B.a5(46,62,B.fU(p,A.A,120,q,A.ck,A.c0,!1,q,!1,q,q),q),A.aq),A.bc,B.E(B.x(B.a([D.fMB,A.T,B.bX(A.bH,B.a([r.oz("Change",A.jM,!1,r.gb1R()),r.oz("Remove",A.ek,!1,new C.f3a(r))],w),A.bt,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.l,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dn0[t]
u.push(r.oz(s.b,s.a,r.at===t,new C.f3b(r,t)))}u=B.bX(A.bH,u,A.bt,q,8,8)
switch(r.at){case 0:s=r.c5J(p)
break
case 1:s=r.c4C()
break
case 2:s=r.bLb()
break
case 3:s=r.bRF()
break
default:s=r.bNj()
break}return B.x(B.a([v,A.ae,u,A.aB,s,A.W,new B.bL(A.a7,q,q,r.oz("Reset the whole picture",A.k9,!1,new C.f3c(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c5J(d){var w=this,v=x.p
return B.x(B.a([B.bX(A.bH,B.a([w.oz("Auto enhance",E.a2W,!1,new C.f32(w)),w.oz("Make words easy to read",A.pB,!1,new C.f33(w))],v),A.bt,null,8,8),A.aB,B.cr(new C.f34(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c4C(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kC("Exposure",n,-1.5,1.5,new C.f2H(o),0,A.j.ad(n,1))
w=o.RG
w=o.kC("Brightness",w,-0.5,0.5,new C.f2I(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kC("Contrast",v,0.4,2,new C.f2J(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kC("Fade",u,0,1,new C.f2K(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kC("Spotlight",t,0,1,new C.f2L(o),0,""+A.j.V(t*100))
s=o.a0
s=o.kC("Darken",s,0,0.85,new C.f2M(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kC("Vignette",r,0,0.9,new C.f2N(o),0,""+A.j.V(r*100))
q=o.aH
q=o.kC("Shade behind words",q,0,0.85,new C.f2O(o),0,""+A.j.V(q*100))
p=o.aR
return o.wj(B.x(B.a([n,w,v,u,t,s,r,q,o.kC("Shade top & bottom",p,0,0.85,new C.f2P(o),0,""+A.j.V(p*100))],x.p),A.l,null,A.e,A.i,0,A.p))},
bLb(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kC("Colour strength",q,0,2.2,new C.f22(s),1,""+A.j.V(q*100))
w=s.to
w=s.kC("Warmth",w,-1,1,new C.f23(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kC("Tint",v,-1,1,new C.f24(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.wj(B.x(B.a([q,w,v,s.kC("Shift colours",u,-180,180,new C.f25(s),0,""+A.j.V(u)+"\xb0"),new B.bL(A.a7,r,r,s.oz("Negative",D.bSa,s.y1,new C.f26(s)),r)],t),A.l,r,A.e,A.i,0,A.p))
v=s.yD("COLOUR WASH",A.PD)
w=s.b8
q=B.a([null],x.Z)
A.d.u(q,D.aAu)
t=B.a([u,v,s.ak_(w,new C.f27(s),q),A.T],t)
if(s.b8!=null){q=s.b6
t.push(s.wj(s.ajB("Wash strength",q,0,0.9,new C.f28(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bRF(){var w,v,u,t,s,r=this,q=r.y2
q=r.kC("Blur",q,0,24,new C.f2B(r),0,A.o.v(A.j.V(q)))
w=r.bn
w=r.kC("Soft focus",w,0,1,new C.f2C(r),0,""+A.j.V(w*100))
v=r.aG
u=x.p
v=r.wj(B.x(B.a([q,w,r.kC("Film grain",v,0,1,new C.f2D(r),0,""+A.j.V(v*100))],u),A.l,null,A.e,A.i,0,A.p))
w=r.yD("LIGHT LEAK",D.bRT)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.u(t,B.cX(D.aAu,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.ak_(q,new C.f2E(r),t),A.T],u)
if(r.bf!=null){q=r.bK
u.push(r.wj(r.ajB("Leak strength",q,0,1,new C.f2F(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bNj(){var w,v,u,t,s=this,r=s.aP
r=s.kC("Zoom",r,1,3,new C.f2c(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kC("Left / right",w,-1,1,new C.f2d(s),0,""+A.j.V(w*100))
v=s.bH
v=s.kC("Up / down",v,-1,1,new C.f2e(s),0,""+A.j.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.wj(B.x(B.a([r,w,v,s.kC("Turn",u,-180,180,new C.f2f(s),0,""+A.j.V(u)+"\xb0")],t),A.l,null,A.e,A.i,0,A.p)),A.W,B.bX(A.bH,B.a([s.oz("Turn 90\xb0",H.aro,!1,new C.f2g(s)),s.oz("Flip sideways",A.D_,s.c5,new C.f2h(s)),s.oz("Flip upside down",A.D_,s.cP,new C.f2i(s))],t),A.bt,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c8r(){var w=null,v=B.l(22),u=B.L(A.by,A.r,1)
return B.r(w,B.x(B.a([D.fbS,A.W,D.fOD,A.aB,B.az(w,B.r(A.A,D.fc5,A.f,w,w,new B.o(w,w,w,B.l(16),w,G.v8,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f35(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.ul,w,u,v,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
c5w(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f2Y(p),m=x.p,l=B.A(B.a([D.bK9,p.oz("Reset",A.k9,!1,new C.f2U(p))],m),A.l,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KW,o,o,o),j=p.yD("SHAPE",A.arj),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Du[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1S(n.$2(t,p.cy),62,u.b,s===t,new C.f2V(v,p),62))}}i=B.bX(A.bH,i,A.bt,o,8,8)
v=p.yD("RING",A.pt)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Do[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1S(n.$2(p.cx,t),62,r.b,q===t,new C.f2W(s,p),62))}u=B.bX(A.bH,u,A.bt,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.ae,p.wj(p.kC("Size",s,0.12,0.4,new C.f2X(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4R(d){return new B.a5(null,d,new B.fJ(0.5625,B.cr(new C.f3g(this)),null),null)},
cE2(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.L(A.by,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.v8:q
t=new B.aN(14,14)
s=D.dpi[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bb,B.az(A.c3,B.cT(q,B.x(B.a([r,A.cQ,new B.qM(A.e7,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.P,0,A.p),q,q,A.b_,new B.o(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bB8,q,q,q,q,A.hL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f3p(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.r(q,B.A(l,A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bDi,A.mg,q,q,q)},
aSO(){var w,v,u=this,t=null,s=u.cE2()
switch(u.as){case 0:w=u.bPm()
break
case 1:w=u.cJT()
break
case 2:w=u.cEP()
break
case 3:w=u.cnN()
break
case 4:w=u.c5w()
break
default:w=u.c8r()
break}v=x.p
return B.bx(A.u0,B.e9(B.x(B.a([s,B.E(B.cm(B.a([w],v),t,t,D.bEv,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.i,0,A.p),D.ZC,!0),A.aq)},
aOQ(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gce_(),p=B.l(16)
q=B.E(B.az(r,B.r(r,D.fch,A.f,r,r,new B.o(A.c.j(0.08),r,B.L(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRd()
w=B.l(16)
v=B.a([new B.ab(0,A.G,A.bE.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fii)
else t.push(D.bWh)
t.push(A.af)
t.push(D.bME)
return B.r(r,B.A(B.a([q,A.av,B.E(B.az(r,B.r(r,B.A(t,A.l,r,A.ba,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.v8,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.i,0,r,r),A.f,r,r,D.b8h,r,r,r,r,Av.a0K,r,r,r)},
b1Q(){var w=null
return new B.D(U.a1g,B.A(B.a([B.aI(w,w,w,w,A.n7,w,w,w,new C.f2G(this),w,w,w,w,w,w),D.h3B,A.b1,D.c4g],x.p),A.l,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.Cb,B.bm(!0,B.cr(new C.f3X(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bi8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e2()
n.cY(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
$.S()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.ar(new B.a1(s,p,s+1.1,p+1.1),o)}},
aE(d){return d.b!==this.b}}
C.t0.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mu.prototype={}
C.Ai.prototype={
aj(){var w=this
return B.J(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.oc.prototype={}
C.wC.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9p.prototype={}
C.at4.prototype={}
C.a1Q.prototype={
S(){return new C.aJz(new B.au(A.ax,$.ax()),B.kc(!0,null,!0,!0,null,null,!1),D.dS9,B.a([],x.s),B.es([D.Jw],x.Q))}}
C.aJz.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.f.t()
this.a3()},
a1l(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1l=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().CM(90,700,700,A.eQ),$async$a1l)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1l)
case 8:p=e
if(r.c!=null)r.m(new C.fak(r,p,q))
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
return B.i($async$a1l,v)},
a1o(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1o=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i_().aJX(78,n,1100,1100),$async$a1o)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1o)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cU.gcu().aO(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.fal(r,p))
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
return B.i($async$a1o,v)},
b6Q(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fU(A.cM.aO(A.d.gal(d.split(","))),A.A,u,u,A.ck,A.c0,!0,u,!1,u,u)
return w}catch(v){}return D.bzh},
c5D(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cA0(C.fQ8(w,this.b6Q(d),f),g)},
adN(d,e,f,g,h){var w=null,v=new C.fai(f,e),u=new C.faj(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.L(p?A.by:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.as(B.X(f?A.zv:A.Pr,A.bW,w,w,w,26),w,w,w),D.eB8],x.p),w),w)
else p=this.c5D(g,v.$1(h),u.$1(h),34)
return B.aH(!1,A.a3,!0,s,B.aP(!1,r,!0,B.r(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bVZ],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.n2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fah(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
b_0(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.l(8),B.fU(A.cM.aO(A.d.gal(h.split(","))),A.A,p,p,A.ck,A.c0,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.L(n?A.by:A.bd.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.af,B.E(B.d(e,p,1,A.a2,p,p,p,A.L2,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Qb,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.r(p,B.A(n,A.l,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kz,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9R(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9R=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fTF(),$async$a9R)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.fa0(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ac(n)
if(r.c!=null)r.m(new C.fa1(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9R,v)},
afN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afN=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.fa3(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.fa4(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.fa5(r))
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
return B.b(C.fOR(q,r.cx,j,new C.b3K(r.z,r.Q,r.as,r.at),new C.fa6(r),i,m,p,k),$async$afN)
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
n=B.ac(e)
if(r.c!=null)r.m(new C.fa7(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aF(d,A.eT,g).w
g=B.aF(d,A.c1,g).w
w=B.as(B.r(h,h,A.f,h,h,new B.o(A.aT,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.r(h,D.bZh,A.f,h,h,new B.o(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bd.j(0.5),A.J,24)],v),D.c8r,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fay(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,H.Qb,h,h,h,i.ax?h:new C.faz(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbG4()
v=B.a([new B.ab(0,A.G,A.b8.j(0.45),A.J,10)],v)
s.push(B.h9(B.aH(!1,A.a3,!0,h,B.aP(!1,h,!0,B.r(h,B.X(i.e==null?A.wL:A.hO,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.x2,A.a6),h,40,h,h,h,h,h,40),A.cW,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cW,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bA(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b5L),h,h,h,h,h,h,h,h,Z.EL,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iQ,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aWz,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.faA(i)
s=i.b_0(A.lm,q,r,i.gcoe(),s)
r=i.z
r=B.E(i.adN(new C.faC(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bn,B.E(i.adN(new C.faD(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.i,0,h,h)],t),A.l,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.faE(i)
s=i.b_0(A.uN,r,p,i.gcom(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adN(new C.faF(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fTf,A.aw,D.fWb,A.bA,u,A.T,D.fUz,A.aB,v,A.bA,B.A(B.a([q,A.av,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bn,B.E(i.adN(new C.faG(i),r,!0,n,o),1)],t),A.l,h,A.e,A.i,0,h,h)],t),A.l,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fY5],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.L(D.bqH,A.r,1)
w=C.ail(w)
w=w==null?h:w.b
A.d.u(o,B.a([A.W,new B.bL(A.a7,h,h,B.r(h,B.A(B.a([D.c_q,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fBr,h,h,h),B.aP(!1,h,!0,D.ev9,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.faH(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.biw,h,u,v,h,h,A.n),h,h,h,h,D.bCW,h,h,h),h)],t))}o.push(A.bA)
o.push(D.fJE)
o.push(A.T)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dgW[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.by,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.bz(1,A.bb,new B.D(A.jr,B.az(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b_,new B.o(v,h,new B.bG(k,k,k,k),h,h,h,A.a6),A.eG,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.faI(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.i,0,h,h))
o.push(A.bA)
o.push(D.h1P)
o.push(A.T)
o.push(B.cr(new C.faJ(i)))
o.push(A.bA)
o.push(D.fRi)
o.push(A.T)
w=B.a([i.b9M("auto","Let AI choose",A.ed,A.Sh)],t)
for(v=x.O,m=0;m<11;++m){j=D.x6[m]
u=j.d
w.push(i.b9M(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bX(A.bH,w,A.bt,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.l(16)
u=B.L(i.r?A.bd.j(0.5):A.by,A.r,1)
o.push(B.r(h,B.iU(h,A.bd,h,h,h,new C.faB(i),D.bVr,D.h13,h,D.fM3,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.u(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aVJ,h,h,h)],t))
o.push(A.bA)
w=i.ax?h:i.gce3()
v=B.fu(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fi8:A.I1
o.push(new B.a5(h,54,B.lU(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.mE,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.r(h,B.bm(!0,B.cb(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wx,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.af5,h,h,h,h,h,h,h,h),h)},
bSX(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.fa8(this,p,d)
if(d===D.E9)return new C.aG4(p,o,q)
w=B.l(16)
v=p?E.x2:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.by,A.r,1)
s=B.X(p?A.ee:C.hYM(d),A.c,q,q,q,20)
r=C.hYN(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.aw,B.ex(A.A,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e7)],x.p),A.l,q,A.ba,A.i,0,A.p),q,q,A.b_,new B.o(u,q,t,w,q,v,A.n),A.h7,q,64,q,q,A.hN,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9M(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.by
r=B.L(r,A.r,u?1.6:1)
w=B.r(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a7,A.aa,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,A_.AP,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,v,v),v,v,A.b_,new B.o(s,v,r,t,v,v,A.n),A.eG,v,v,v,v,O.anB,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fan(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1P.prototype={
S(){return new C.aJy(new B.au(A.ax,$.ax()))}}
C.aJy.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
afO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afO=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f9U(r))
w=1
break}B.eZ()
r.m(new C.f9V(r))
t=4
q=C.iqj(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.iq3(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f9W(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.heU()
f=$.Ds.h(0,k.a)
o=f==null||J.ct(f)?null:J.fp(f)
if(o==null){r.m(new C.f9X(r))
w=1
break}n=C.iq1(o,r.a.c)
C.ipY(r.a.c.a)
$.he7=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hhW(j)
h=C.hhX(r.a.c)
e=C.hhY(r.a.c)
w=7
return B.b(C.bFf(k,r.a.c.a,j,h,new C.f9Y(r),i,e,a0),$async$afO)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ac(a1)
if(r.c!=null)r.m(new C.f9Z(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aF(d,A.eT,i).w
i=B.aF(d,A.c1,i).w
w=B.as(B.r(j,j,A.f,j,j,new B.o(A.aT,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.r(j,D.arF,A.f,j,j,D.b7X,j,34,j,j,j,j,j,34),A.av,D.bKO],v),A.l,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Z.abw,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bA(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),Aw.aew),j,j,j,j,j,j,j,j,Z.EL,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aWz,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.dcX[q]
o=B.d(p,j,j,j,j,j,j,AC.VF,j,j,j)
n=A.c.j(0.06)
r.push(B.n3(j,n,o,j,k.e?j:new C.fa_(k,p),j,j,P.vZ,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.W,B.bX(A.bH,r,A.bt,j,8,8)],v)
u=k.r
if(u!=null)A.d.u(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aVJ,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gce4()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.bd.j(0.5),A.er.j(0.5)],x.O):D.cKp
o=B.a([new B.ab(0,A.G,A.bd.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ev5:D.c__
n=B.r(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aH(!1,A.a3,!0,j,B.aP(!1,s,!0,B.eB(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hv,j,j,j)],v),A.l,j,A.ba,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a7,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.r(j,B.bm(!0,B.cb(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wx,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.af5,j,j,j,j,j,j,j,j),j)}}
C.b3K.prototype={}
C.aG4.prototype={
S(){return new C.bmX(null,null)}}
C.bmX.prototype={
gazF(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qB,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazF().t()
this.bzQ()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c6(this.gazF(),new C.eqE(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bkp.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.djt[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.wk.j(0.25+s*0.6).gp(0)
d.N(new B.p(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.p(q-o,r),new B.p(q+o,r+0),p)
d.ah(new B.p(q,r-o),new B.p(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atC.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a0d.prototype={
S(){return new C.aDA()}}
C.aDA.prototype={
gajX(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aiy(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAR(){var w=this.e
return w===$?this.e=C.hhW(this.a.c).q(0,D.E9):w},
a9E(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9E=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dto(s))
u=3
r=A.d.fc(D.x6,new C.dtp(s))
q=B.d0(C.hhW(s.a.c),x.Q)
l=q
J.hc(l,D.E9)
p=l
if(s.gAR())J.c5(p,D.E9)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAR()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hhX(i.c)
g=C.hhY(s.a.c)
w=6
return B.b(C.bFf(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9E)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aiy(q,s.gajX())
f=q==null?null:q.b
n=f==null?s.gajX():f
if(!J.z(n,r.a)&&!s.gAR())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ac(d)
if(s.c!=null)s.m(new C.dtq(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9E,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.H,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.l(28),h=B.L(m?A.by:A.bi,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dtt(d)
e=B.A(B.a([f,B.aI(n,n,n,n,B.X(A.cC,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.x6[w]
u=o.gajX()
t=o.f?n:new C.dtu(o,v)
f.push(new C.bvD(v,u===v.a,t,n))}f=B.kZ(1.25,f,3,10,10,n,A.dZ,!0)
u=B.l(18)
t=o.gAR()?D.cbc:n
if(o.gAR())s=n
else s=m?A.br:A.cd
r=B.X(A.ed,o.gAR()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAR()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAR()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAR()
f=B.a([f,A.aB,B.r(n,B.A(B.a([r,A.av,q,B.b9n(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dtv(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,Q.amg,n,n,n)],g)
u=o.r
if(u!=null)A.d.u(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fBL,n,n,n)],g))
f=B.cb(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GZ,n,n,A.ah)
u=o.f?n:o.gbF3()
t=B.bo(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bm(!0,B.r(n,B.x(B.a([new B.D(D.bGb,e,n),new B.dm(1,A.cq,f,n),new B.D(A.GY,new B.a5(1/0,50,B.bJ(B.eB(B.as(o.f?A.tL:D.fTL,n,n,n),n,new B.o(n,n,n,s,n,D.c9M,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uB,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvD.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bL(A.ly,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lz,w,w,B.d(v.b,w,w,w,w,w,w,D.fBI,w,w,w),w)],x.p)
if(q)v.push(D.b2V)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b_,new B.o(w,w,p,t,s,new B.a8(A.aA,A.aE,A.x,r,w,w),A.n),A.eG,w,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eqB.prototype={
aHs(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xg(d,e){return this.aHs(0,e,null)}}
C.aOd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3G.prototype={
B(d){var w,v,u=null,t=C.hgL(this.c)
if(t==null)w=D.bxK
else{w=B.aF(d,u,x.w).w.cP9(D.bCr,D.fhi)
v=this.d
w=B.qc(new B.du(!v,B.apL(!1,t,!1,v,!1,390),u),w)}return B.ex(A.A,new B.a5(416,870,new C.box(w,u),u),A.f,A.dE)}}
C.box.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dwr[w]
u=new B.aN(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.r(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.atG,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dxR[w]
u=new B.aN(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.r(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.atG,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,new B.bN(new B.o(t,t,t,B.l(64),D.d1I,D.c89,A.n),A.bk,t,t),0,0,0))
s.push(B.bS(3,new B.bN(new B.o(A.w,t,t,B.l(61),t,t,A.n),A.bk,t,t),3,3,3))
s.push(B.bS(13,B.bx(B.l(51),B.e9(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ap(t,B.as(B.r(D.b35,B.r(t,t,A.f,t,t,D.b8f,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,new B.du(!0,B.bx(B.l(51),D.bzo,A.aq),t),13,13,13))
s.push(B.ap(22,new B.du(!0,B.as(B.r(t,t,A.f,t,t,new B.o(A.ab,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lw.prototype={
oL(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.eu(A.K,!1,e.l(),A.aH,"",k,42,A.bs,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bm,j,2,"Your Presentation Title",0,0,"",D.nd,D.d1,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.eu(A.K,!1,v.l(),A.aH,"",k,20,A.bs,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bm,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.ds,D.d1,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.t1(i,l,0,0,B.a([f,w,C.eu(A.bp,!1,4279310375,A.aH,"",t.j(0.8).l(),24,A.bs,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fP,t.l(),3,"",0,0,"",D.cu,D.fj,0.3,0.35,0.72)],s),C.cE(),D.nc,"","","Welcome",D.ds)
u=C.cE()
u=C.eu(A.bp,!1,e.l(),A.aH,"",k,34,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bm,j,2,"Agenda",0,0,"",D.cu,D.d1,0.84,0.08,0.08)
w=C.cE()
w=C.t1(i,l,0,0,B.a([u,C.eu(A.bp,!0,v.l(),A.aH,"",k,22,A.bs,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bm,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vp,D.d1,0.8,0.1,0.26)],s),C.cE(),D.nc,"","","Agenda",D.ds)
u=C.cE()
u=C.eu(A.bp,!1,e.l(),A.aH,"",k,32,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bm,j,2,"Main Idea",0,0,"",D.cu,D.d1,0.84,0.08,0.08)
f=C.cE()
f=C.t1(i,l,0,0,B.a([u,C.eu(A.bp,!0,v.l(),A.aH,"",k,21,A.bs,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bm,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cu,D.d1,0.8,0.1,0.26)],s),C.cE(),D.nc,"","","Key Point 1",D.ds)
u=C.cE()
u=C.eu(A.bp,!1,e.l(),A.aH,"",k,30,A.bs,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bm,j,2,"Compare & Contrast",0,0,"",D.cu,D.d1,0.84,0.08,0.08)
r=C.cE()
r=C.eu(A.bp,!0,v.l(),A.aH,"",k,18,A.bs,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bm,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cu,D.d1,0.4,0.08,0.24)
q=C.cE()
q=C.t1(i,l,0,0,B.a([u,r,C.eu(A.bp,!0,v.l(),A.aH,"",k,18,A.bs,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bm,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cu,D.d1,0.4,0.52,0.24)],s),C.cE(),D.nc,"","","Key Point 2",D.ds)
r=C.cE()
r=C.eu(A.K,!1,e.l(),A.aH,"",k,48,A.bs,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bm,j,2,h,0,0,"",D.ds,D.d1,0.8,0.1,0.32)
e=C.cE()
p=C.Ct(l,l,l,l,D.E5,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.t1(i,l,0,0,B.a([r,C.eu(A.K,!1,v.l(),A.aH,"",k,22,A.bs,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bm,j,2,"Questions?",0,0,"",D.cu,D.d1,0.7,0.15,0.58)],s),C.cE(),D.nc,"","",h,D.ds)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.I)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fz.prototype={
ak(d){return this.e.$1(d)}}
C.ey.prototype={}
C.jd.prototype={}
C.Fq.prototype={
gaNs(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ail(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4M(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fq(v,u,t,d==null?w.d:d)},
Gf(d){return this.a4M(null,d,null,null)},
aG6(d){return this.a4M(null,null,null,d)},
cP7(d,e){return this.a4M(d,e,null,null)},
bf6(d){return this.a4M(d,null,null,null)},
bfc(d){return this.a4M(null,null,d,null)}}
C.Ou.prototype={
S(){return new C.bmi(new B.eC(0,$.ax()),null,null)}}
C.bmi.prototype={
Y(){var w,v=this
v.a4()
w=v.q1(new C.e45(v))
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
this.bzj()},
B(d){var w=C.ail(this.a.c.a)
if(w==null)w=A.d.gH(D.Il)
return B.cr(new C.e44(this,w,C.hxm(this.a.c.d)))}}
C.bu9.prototype={
B(d){return B.oh(A.XJ,this.e,new C.f96(this,A.j.F(this.d*0.35,1.6)-0.3))}}
C.bhd.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVt(d,e,v)
break
case"confetti":w.bLF(d,e,v)
break
case"crown":w.bNk(d,e,v)
break
case"aurora":w.bG8(d,e,v)
break
case"champagne":w.bJx(d,e,v)
break
case"diamonds":w.bPv(d,e,v)
break
case"starburst":w.cBF(d,e,v)
break
case"balloons":w.bGm(d,e,v)
break
case"galaxy":w.bUR(d,e,v)
break
case"redcarpet":w.csz(d,e,v)
break
case"coins":w.bL3(d,e,v)
break
case"lanterns":w.c46(d,e,v)
break
case"hearts":w.c1C(d,e,v)
break
case"petals":w.cnE(d,e,v)
break
case"butterflies":w.bIu(d,e,v)
break
case"neon":w.c8b(d,e,v)
break
case"disco":w.bPG(d,e,v)
break
case"sunrise":w.cDk(d,e,v)
break
case"pearls":w.cmI(d,e,v)
break
case"snow":w.cBm(d,e,v)
break
case"laurel":w.c4c(d,e,v)
break
case"ribbons":w.cv4(d,e,v)
break
case"kente":w.c3V(d,e,v)
break
case"trophy":w.cH3(d,e,v)
break
case"shooting":w.cz6(d,e,v)
break
case"bokeh":w.bGI(d,e,v)
break
case"orbits":w.ckj(d,e,v)
break
case"flowers":w.bU4(d,e,v)
break
case"music":w.c7U(d,e,v)
break
case"mandala":w.c6j(d,e,v)
break
case"sparklers":w.cBt(d,e,v)
break
case"city":w.bKk(d,e,v)
break}},
tc(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.K()
v.r=g.j(A.j.D(h,0,1)).gp(0)
v.a=A.pa
u=new B.aG(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c7(w,t,w+f,t))
u.E(new B.c7(w,t,w,t+f))
u.E(new B.c7(w,t,w-f,t))
u.E(new B.c7(w,t,w,s))
u.E(new B.bu())
d.af(u,v)
d.N(e,f*0.18,v)},
m2(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.tc(d,new B.p(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVt(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m2(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.au],w),B.a([A.iw,A.bE],w),B.a([A.eF,A.aG],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bh(l/2.8)
j=A.j.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kw(new B.p(h,b8),new B.p(g,f),A.cw.aA(0,j/0.22))
d.toString
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.a7,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.t3(new B.p(h,b8),d)))
a0.c=o
a0.d=A.bw
a1=B.kw(new B.p(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hp(A.G,p)
c0.N(new B.p(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.p(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bw
b6.a=A.pa
c0.ah(new B.p(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.tc(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLF(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.K()
d.sav(new B.a8(A.aA,A.aE,A.x,D.dqA,B.a([A.j.D(h-0.15,0,1),A.j.D(h,0,1),A.j.D(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.RK[A.o.D(A.j.bh(C.cZ(u,7)*5),0,4)]
J.bp(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aG(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.S()
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.J,q*1.8*A.j.D(t,0.15,1),q),n)
g.restore()}this.m2(a0,a1,a2,25,A.bL,30)},
bNk(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.p(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aG(p.r,A.ai,a4,a4,o)
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
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bkC],v),a4,a4).aK(0,B.bZ(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aG($.S().r,A.ai,a4,a4,B.a([],s))
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
j.E(new B.bu())
i=A.j.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a8(A.b0,A.b7,A.x,D.dpc,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eLr,D.eEA,D.eV7],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(d)
a8.N(new B.p(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=A.ab.gp(0)
a8.N(new B.p(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.hA.gp(0)
a8.N(new B.p(a5+l*a1,a6+m),o,h)}}for(v=B.xP(j),u=B.a([],x.X),p=new B.rA(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bj(B.jK(y.M));--h
p.iy()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.b=A.a9
a2.c=m
a2.e=A.dT
a2.r=A.bL.gp(0)
a8.af(new B.aG(o,e,a4,new B.ce([new B.BV(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.F(b0*0.5,1)
this.tc(a8,new B.p(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m2(a8,a9,b0,45,A.bL,40)},
bG8(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m2(a6,a7,a8,60,A.c,50)
w=[D.f6W,D.f6D,D.f6w,D.f85]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aG(o.r,A.ai,null,null,j)
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
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.pa
o.y=new B.hp(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.pa
o.y=new B.hp(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.S()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.wj.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.pa
a6.N(new B.p(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJx(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.K()
e.sav(new B.bY(A.A,0.5,A.x,n,0,B.a([A.ib.j(0.25+0.1*j),D.ZQ],x.O),n,n).aK(0,B.bZ(new B.p(i,h),g)))
d.N(new B.p(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aG(g.r,A.ai,n,n,f)
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
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=j
f.r=D.RK[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.tc(d,new B.p(s,p),o*2.4,A.bL,A.j.D(p/i,0,1))
continue}$.S()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.ui.j(0.75).gp(0)
d.N(new B.p(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=A.c.j(0.8).gp(0)
d.N(new B.p(s-g,p-g),f,e)}},
bPv(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m2(b0,b1,b2,30,A.lf,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.j.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bp(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aG(h.r,A.ai,a6,a6,g)
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
a2=new B.bu()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.a8(A.aA,A.aE,A.x,D.dkD,a6,a6).aK(0,B.bs(A.J,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.p(e,i),new B.p(a0,i),a4)
b0.ah(new B.p(h,j),new B.p(0,a1),a4)
b0.ah(new B.p(d,j),new B.p(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.tc(b0,new B.p(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBF(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.p(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aG(p.r,A.ai,null,null,o)
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
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bL.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.j.bh(a0/2.4)
k=A.j.F(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.byI.aA(0,k)*(0.5+0.5*C.cZ(t,u)))
this.tc(d,new B.p(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.RK[A.o.D(A.j.bh(C.cZ(t,4)*5),0,4)],r)}},
bGm(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAW[A.o.F(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aG(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.S()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.p(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.bY(D.b3a,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.aAL,a1).aK(0,a0))
a5.bZ(a0,m)
m=B.a([],t)
h=new B.aG(h.r,A.ai,a1,a1,m)
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
i=new B.bu()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.bp(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.J,t,u)
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=D.aAW[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUR(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.p(a7,a8)
this.m2(b0,b1,b2,50,A.c,70)
for(w=[D.f74,D.f6J,D.f6P],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.p(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bZ(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.j.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cZ(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cZ(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bL,A.eK,i)
f.toString
e=C.cZ(k,3)
$.S()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.pa
b0.N(new B.p(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.K()
a8.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.ui.j(0.55),D.ajN],t),a3,a3).aK(0,B.bZ(a9,a7)))
b0.N(a9,a7,a8)
a0=A.j.F(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bh(b2/3.5)
a2=new B.p(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.kw(a2,a2.a2(0,new B.p(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kw(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.t3(a2,a4)))
a7.c=a6*0.005
a7.d=A.bw
b0.ah(a5,a4,a7)}},
csz(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aG(p.r,A.ai,b4,b4,o)
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
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,b4,0,B.a([A.ui.j(0.28),D.ajN],w),b4,b4).aK(0,B.bZ(new B.p(r,v),u)))
p.a=A.pa
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.em:A.et)
a8=$.S()
a9=B.a([],t)
n=new B.aG(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.c7(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bu()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a8.sav(new B.a8(A.a7,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b0.r=A.ib.gp(0)
b0.c=o
b0.d=A.bw
b8.ah(new B.p(a8,m),new B.p(a9,p),b0)}b1=new B.aG($.S().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bu())
v=B.K()
v.sav(D.c9H.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.tc(b8,new B.p(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bL,0.3+0.7*((p+1)/2))}},
bL3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.j.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.p(p,q),r,r*A.j.D(n,0.12,1))
$.S()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.sav(new B.a8(A.aA,A.aE,A.x,o>0?D.dBs:D.cQk,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.bvl.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.tc(d,new B.p(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m2(d,e,f,30,A.bL,110)},
c46(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m2(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.j.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.sav(new B.bY(A.A,0.5,A.x,e,0,B.a([As.yv.j(0.45*l),D.ail],v),e,e).aK(0,B.bZ(new B.p(m,n),k)))
a2.N(new B.p(m,n),k,i)
i=B.a([],r)
h=new B.aG(j.r,A.ai,e,e,i)
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
k=new B.bu()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=B.ar(D.bkT,A.c,0.2*l)
j.toString
k.sav(new B.a8(A.b0,A.b7,A.x,B.a([D.bqg,j],v),e,e).aK(0,B.bs(new B.p(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.c.j(l).gp(0)
a2.N(new B.p(m,n+p*0.55),p*0.12,k)}},
c1C(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.j.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bp(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aG(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.ko(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.ko(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bu()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.daE[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.bY(A.p8,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a5B,d).aK(0,B.bZ(A.J,o*1.4)))
a3.af(i,m)
u.restore()}this.m2(a3,a4,a5,30,A.iw,130)},
cnE(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.j.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bp(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aG(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.c7(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c7(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bu()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=(q&1)===0?D.cKo:D.dm0
n.sav(new B.a8(A.a7,A.aa,A.x,m,h,h).aK(0,B.bZ(A.J,p)))
d.af(k,n)
v.restore()}this.m2(d,a0,a1,25,A.bL,140)},
bIu(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m2(b1,b2,b3,40,A.bL,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b3*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bp(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bp(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aG(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.ko(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.ko(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bu()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.sav(new B.a8(A.a7,A.aa,A.x,h?D.dlI:D.doH,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.C4.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.buz.gp(0)
p.c=q*0.1
p.d=A.bw
b1.ah(new B.p(0,m*0.3),new B.p(0,q*0.4),p)
v.restore()}},
c8b(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.p(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=v
r.r=D.aC6[u].j((1-t)*0.9).gp(0)
r.y=new B.hp(A.G,v)
q=s*0.3
d.an(B.bn(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aC6[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bn(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=m.j(0.85).gp(0)
l.y=new B.hp(A.aek,q)
d.an(k,l)}},
bPG(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.p(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bL,A.ob,A.dn][A.o.F(q,4)]
k=C.cZ(q,3)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.75).gp(0)
j.a=A.pa
j.y=new B.hp(A.G,r)
a2.N(new B.p(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.p(d,0),new B.p(d,w-u),t)
t=B.K()
t.r=A.cY.gp(0)
a2.N(v,u,t)
t=a2.c
J.bp(t.save())
a0=new B.aG(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jU(B.bZ(v,u)))
a2.mT(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=B.ar(A.bj,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.tc(a2,v.a2(0,new B.p(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDk(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.j.D(a1/3,0,1))),e=new B.p(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aG(s.r,A.ai,k,k,r)
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
s=new B.bu()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.bL.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.K()
f.sav(new B.bY(A.A,0.5,A.x,k,0,B.a([D.bg7.j(0.6),D.ail],x.O),k,k).aK(0,B.bZ(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.eC0.aK(0,B.bZ(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.p(n,m),s,v),l)
d.bZ(B.bs(new B.p(n+r,m-p),s,o),l)}this.m2(d,a0,a1,20,A.hA,180)},
cmI(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aG(s.r,A.ai,h,h,r)
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
s=new B.bu()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.S()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=B.ar(A.cD,A.jj,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.j.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.sav(new B.bY(Ap.Bl,0.5,A.x,h,0,D.dsi,h,h).aK(0,B.bZ(new B.p(o,i),j)))
d.N(new B.p(o,i),j,u)}this.m2(d,a0,a1,25,A.c,190)},
cBm(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.j.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bw
J.bp(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.J,new B.p(0,o),l)
d.ah(new B.p(0,n),new B.p(m,k),l)
d.ah(new B.p(0,n),new B.p(j,k),l)}v.restore()}this.m2(d,e,a0,40,A.eF,200)},
c4c(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.p(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cC(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bp(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.p(o,0),p,q)
$.S()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.sav(D.c9u.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.S()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.blc.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.tc(a3,w.a2(0,new B.p(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m2(a3,a4,a5,40,A.bL,210)},
cv4(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.ib,A.hA],a4),B.a([A.pi,A.iw],a4),B.a([A.aF,A.eK],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bR<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aG(m.r,A.ai,null,null,l)
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
k.ab()}j.push(new B.p(f,e+d))}for(m=new B.ds(j,t),m=new B.bR(m,m.gJ(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bu()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.S()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=a5[n]
i=l[0]
m.sav(new B.a8(A.a7,A.aa,A.x,B.a([i,l[1],i],a4),A.n9,new B.mN(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m2(a6,a7,a8,40,A.c,220)},
c3V(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.j.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.j.bh(g/s),5)
a1=g+s
$.S()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3=Math.abs(a0)
a2.r=D.a5E[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=D.a5E[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.tc(b0,new B.p(u*a6,l-a7),a8*(0.01+0.012*t),D.a5E[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cH3(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.p(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=u
p.r=A.bL.j(0.06).gp(0)
a4.ah(w,new B.p(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.c7(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.c7(u,r,u,a2))
m.E(new B.bu())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.p(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cB(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a8(A.a7,A.aa,A.x,D.dv5,A.aB3,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.j.F(a6*0.6,1.4)
if(a0<1)this.tc(a4,new B.p(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLG(a4,a5,a6,60)},
bLG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bp(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.J,r*A.j.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=D.RK[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cz6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m2(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.j.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.j.bh((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.p(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.p(m+t*k,v+u*k)
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.bL],s),null,null).aK(0,B.t3(j,l)))
k.c=r
k.d=A.bw
d.ah(j,l,k)
this.tc(d,l,q,A.c,1-n)}},
bGI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.j.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=A.o.F(s,5)
n.r=D.aDU[m].j(o).gp(0)
n.a=A.pa
n.y=new B.hp(A.G,r*0.12)
d.N(new B.p(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aDU[m].j(o*1.4).gp(0)
d.N(new B.p(q,p),r,n)}},
ckj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bp(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.J,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=u
o.r=A.bL.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.p(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.hA.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.ib.j(0.4).gp(0)
o.y=new B.hp(A.G,r)
d.N(m,s,o)
w.restore()}this.m2(d,e,f,45,A.bL,270)},
bU4(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.p(m*a1,p)
break
case 1:l=new B.p(m*a1,q)
break
case 2:l=new B.p(r,m*a2)
break
default:l=new B.p(s,m*a2)
break}k=A.j.F(a6+C.cZ(o,2)*4,4)/4
j=A.e2.aA(0,A.j.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dix[A.o.F(o,5)]
J.bp(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.p(0,l),i,j)
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.b0,A.b7,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.p(0,l),f,h)))
a4.bZ(d,a0)}$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.ib.gp(0)
a4.N(A.J,h*0.3,l)
v.restore()}this.m2(a4,a5,a6,30,A.hA,280)},
c7U(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.F(t+n/4,1)
l=B.bZ(new B.p(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=u
j.r=D.aA6[n].j((1-m)*0.8).gp(0)
a4.cB(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.aA6[A.o.F(h,4)]
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(0)
J.bp(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.J,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.p(s,g),new B.p(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.p(s,p),new B.p(f+e*1.6,g-e*2),o)}}},
c6j(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.p(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bp(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aG(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c7(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c7(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=u
d.r=B.ar(A.bL,A.ob,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.hA.j(0.8).gp(0)
a7.N(new B.p(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.K()
a5.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.ib.j(0.25),D.ZQ],x.O),a3,a3).aK(0,B.bZ(w,a4)))
a7.N(w,a4,a5)
this.m2(a7,a8,a9,30,A.bL,300)},
cBt(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.p(j,i)
$.S()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.r=A.bj.gp(0)
g.c=q
g.d=A.bw
b1.ah(new B.p(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.bY(A.A,0.5,A.x,null,0,B.a([A.hA,A.ib.j(0.6),D.ZQ],o),null,null).aK(0,B.bZ(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.j.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.j.F(b3+C.cZ(f,2)*e,e)/e
a0=A.j.bh((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.p(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a7.r=B.ar(A.hA,A.au,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bw
a7.a=A.pa
b1.ah(new B.p(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.p(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.p(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m2(b1,b2,b3,35,A.bL,310)},
bKk(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVt(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.sav(D.caq.aK(0,k))
a7.ar(k,j)
i=A.j.bh(n/r)
h=A.j.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=A.bL.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b1z.prototype={
B(d){var w,v=null,u=new C.cfD(),t=new C.cfF(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.r(v,D.asN,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfE(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Il[w]))
return B.bX(A.bH,s,A.bt,v,12,10)}}
C.a_L.prototype={
S(){return new C.aBW()}}
C.aBW.prototype={
gwk(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1V(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b5,A.aP),$.ax())}return v},
gazG(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNs()
v=$.ax()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.ba(w,A.b5,A.aP),v)}return t},
t(){var w=this.gb1V(0),v=$.ax()
w.U$=v
w.P$=0
w=this.gazG()
w.U$=v
w.P$=0
this.a3()},
a0a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a0a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i_().CM(90,700,700,A.eQ),$async$a0a)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a0a)
case 8:p=e
o=q.b.toLowerCase()
n=J.ajm(o,".png")?"image/png":"image/jpeg"
r.m(new C.diC(r,n,p))
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
return B.i($async$a0a,v)},
b1U(d){var w=null,v=A.c.j(0.07)
return B.bA(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VS,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ail(p.gwk().a)
if(n==null)n=A.d.gH(D.Il)
w=p.gwk()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bS(0,new C.Ou(p.gwk(),!1,!0,new B.bt(w.a+v,x.W)),0,0,0),B.ap(o,B.IN(A.n7,new C.diH(d),B.o3(o,A.b6,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IN(A.arD,new C.diI(p),B.o3(o,A.b6,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aWy,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1V(0),o,o,o,o,o,2,p.b1U("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diJ(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.h4,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.ib.j(0.6),A.r,1)
if(p.gwk().d.length===0)q=D.bXF
else{q=C.hxm(p.gwk().d)
if(q==null)q=new Uint8Array(0)
q=B.hY(B.fU(q,A.A,o,o,A.ck,A.c0,!1,o,!1,o,o),A.aq)}r=B.a([t,A.af,B.az(o,B.r(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gce5(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwk().d.length!==0)r.push(B.aI(o,o,o,o,H.Qb,o,o,o,new C.diK(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.r(o,B.x(B.a([w,A.W,B.A(r,A.l,o,A.e,A.i,0,o,o),A.T,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazG(),o,o,o,o,o,2,p.b1U("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diL(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a5,o,A.ao,o,o,o,o),A.ae,B.dh(D.bWy,o,D.h2J,new C.diM(p,d),B.bo(A.aC,o,o,o,A.w,o,A.co,o,new B.b9(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.P,0,A.p),A.f,o,o,D.b8r,o,o,o,o,A.GV,o,o,o)],u),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNI.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a05.prototype={
S(){return new C.biK(new B.au(A.ax,$.ax()))}}
C.biK.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.H,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aF(d,A.c1,x.w).w,j=n?A.a_:A.c,i=B.l(28),h=B.L(n?A.by:A.bi,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cC,l,o,o,o,o),o,o,o,new C.dpq(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d18[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.cd
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.r(A.A,B.d(s,o,o,o,o,o,o,A.pY,o,o,o),A.f,o,o,new B.o(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dpr(this,s),o,o,o,o,o,o,o))}A.d.u(e,B.a([new B.D(A.hL,u,o),new B.D3(A.bH,6,6,A.bt,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.T)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.br:A.aS
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.af,B.bJ(A.aXz,o,new C.dps(this),o)],g),A.l,o,A.e,A.i,0,o,o))
e.push(A.T)
return B.bm(!0,B.r(o,B.x(B.a([f,new B.dm(1,A.cq,B.cm(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uB,A.a0X,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bi4.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e2()
a1.cY(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.K()
u.y=A.OD
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.az(4))+o)
i=A.j.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.p(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.p(l-d,h),new B.p(l+d,h+0),a0)
a2.ah(new B.p(l,h-d),new B.p(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bhM.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bn(new B.a1(0,0,0+a3.a,0+a3.b),A.jN),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mh
a2.an(f,a1)
a1=x.v
a0=new B.aG(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.ja(f))
v=new B.U2(new B.rA(B.xP(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.iy()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.j.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.d=A.bw
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.F(o-q*(1-n/10),t)
i=A.j.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aG(r,l,g,new B.ce([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aG(r,l,g,new B.ce([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aG(r,e.b,g,new B.ce([v,0,i,!0]),B.a([],a1)),k)}}a0.iy()
h=u[d].Di(o).a
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=w.gp(0)
l.y=Ad.ow
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bqT.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e2()
f.cY(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h2()?-0.1:1.1
v=e.b*v
u=new B.p(w,v)
t=e.gaoe()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aG(k.r,A.ai,g,g,j)
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
k=new B.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alW(u,t,j,g,A.x,g,g,0))
k.y=A.kV
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bcA.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e2()
e.cY(this.c*7+3)
for(w=this.d,v=a0.a,u=Math.abs(v),t=a0.b,s=Math.abs(t),r=this.b,q=r*0.8,p=r*2,o=0;o<16;++o){n=e.ai()
m=e.ai()
l=Math.min(u,s)*(0.03+e.ai()*0.09)
k=e.ai()*3.141592653589793*2
j=(n+Math.sin(r+k)*0.04)*v
i=(m+Math.cos(q+k)*0.05)*t
h=0.08+0.1*(0.5+0.5*Math.sin(p+k))
if((o&1)===0)g=w
else{f=B.ar(w,A.c,0.6)
f.toString
g=f}$.S()
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.r=g.j(h).gp(0)
f.y=new B.hp(A.G,l*0.35)
d.N(new B.p(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.p(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bcd.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e2()
e.cY(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aG(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=s
j.d=A.bw
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hp(A.G,u)
d.af(h,j)}},
aE(d){return d.b!==this.b}}
C.by_.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.bY(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d9m,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kV
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.buY.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bh(f)*7,q=0;q<7;++q){p=new B.e2()
p.cY(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.j.F(A.j.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=k.gp(0)
j.c=1.4
j.d=A.bw
d.ah(new B.p(o-l,n),new B.p(o+l,n+0),j)
i=l*1.4
d.ah(new B.p(o,n-i),new B.p(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.p(h,n-i),new B.p(g,n+i),j)
i=-l*0.45
d.ah(new B.p(h,n-i),new B.p(g,n+i),j)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hp(A.G,l*0.3)
d.N(new B.p(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.bu5.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.S()
v=B.K()
v.a=A.pa
v.sav(new B.a8(A.aA,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.D(u-0.15,0,1),A.j.D(u,0,1),A.j.D(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bh6.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.K()
w.b=A.a9
w.c=1.4
w.d=A.bw
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uI
r=new C.dij(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.p(t,t),1,1)
v=e.a-t
r.$3(new B.p(v,t),-1,1)
s=e.b-t
r.$3(new B.p(t,s),1,-1)
r.$3(new B.p(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.yi.prototype={}
C.JO.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.at3.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vl.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mV.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hI.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eR.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eu(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.icB(v.z))
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
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eR>")
n=B.C(new B.N(n,new C.clh(),m),m.k("ak.E"))
return C.t1(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.cli(),m),m.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hT.prototype={
gbdm(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gTc(){if(!C.kP(this.w))return!1
var w=this.gbdm()
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
r=B.C(new B.N(r,new C.cl6(),q),q.k("ak.E"))
return C.Ct(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.C(new B.N(w,new C.cl7(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k2.prototype={}
C.b3J.prototype={
B(d){return B.cr(new C.clc(this))}}
C.aq6.prototype={
S(){return new C.bm0(null,null)}}
C.bm0.prototype={
gb1W(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fL,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb1W().t()
this.bz1()},
B(d){return B.c6(this.gb1W(),new C.dR_(),this.a.c)}}
C.aNr.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aeQ.prototype={
QH(d,e,f,g){return this.bTI(d,e,f,g)},
bTI(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QH=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QH)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.T(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QH,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.as(B.r(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dq,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.u(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.dc)
n.push(B.A(B.a([B.E(new C.af6(A.i3,"Download",A.c2,new C.eCY(w,d),!0,v),1),A.av,B.E(new C.af6(A.uV,"Share",A.bo,new C.eCZ(w,d),!1,v),1),A.av,B.E(new C.af6(A.hQ,"Safari",A.b3,new C.eD_(w,d),!1,v),1)],m),A.l,v,A.e,A.i,0,v,v))
n.push(A.aB)
n.push(B.bP(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eD0(d),v,v))
return B.bm(!0,new B.D(A.qG,B.x(B.a([B.r(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.jm,v,t,u,s,v,A.n),v,v,v,v,A.H1,v,v,1/0)],m),A.l,v,A.e,A.P,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.af6.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aH(!1,A.a3,!0,v,B.aP(!1,u,!0,B.eB(B.x(B.a([p,A.T,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bID,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3H.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.asa(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.ce6().amg(1.35)
s=B.axI(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEE(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bo,h,h,h,h,2,D.c55,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bt("slide_tf_"+g.a,x.W),h,A.xq,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AQ,A.ao,h,A.Vu,h,h)
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
w=n?t.cOV(B.b0(g.Q).j(0.45),A.cK):t
p=g.as
l=m?1:h
k=m?A.eS:A.EJ
p=B.d(f,new B.bt("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Vl:s
$.S()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dT
j.r=A.as.gp(0)
j=i.cv7(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cv5(k,t,l?A.Vl:s)],x.p),h)}else w=i.cv6(p,t,g.k2?A.Vl:s,m)
v=new B.mr(w,new B.bt("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.c3,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c2j()
case 3:return i.cmH()
case 2:return B.b2(h,h,h,new C.b3E(g,h),A.fR)
case 5:g=g.r
return new C.b3G(g,!i.e&&i.z==null,h)}},
ce6(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k4
j=A.cK
break
case"shadow":v=o.d
e=B.a([new B.cU(D.aij,new B.p(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.J,6*v),new B.cU(l,A.J,16*v),new B.cU(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bl
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.nh
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bE,new B.p(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cU(v,new B.p(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cU(A.b9,new B.p(-3*v,0),0),new B.cU(A.ay,new B.p(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cI,A.J,8*v),new B.cU(A.ay,new B.p(0,-3*v),18*v)],x.r)
k=A.u
w=A.w7
break
case"ice":v=o.d
e=B.a([new B.cU(A.aG,A.J,10*v),new B.cU(A.cD,A.J,22*v)],x.r)
k=A.U
w=A.eF
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k4
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.dbu[q]
u.push(new B.cU(v,new B.p(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.p(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.K()
v=o.d
f.sav(D.c7Q.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.FD,new B.p(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.K()
v=o.d
f.sav(D.c8b.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.J,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cE
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.p(u,u),0),new B.cU(l.j(0.2),new B.p(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k4
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.m(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBH(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.fea.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cla(h)
v=r.k2?C.ipB(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eS:A.EJ
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Ze(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cv7(d,e,f,g){return this.aBH(d,e,f,!1,g)},
cv5(d,e,f){return this.aBH(d,e,f,!1,null)},
cv6(d,e,f,g){return this.aBH(d,e,f,g,null)},
bEE(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a7}},
c2j(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bM
return B.as(B.X(s.b===D.ls?A.HX:A.CQ,A.aD,t,t,t,32),t,t,t)}w=u.bHI(r)
if(s.b===D.ls){s=B.l(6)
v=2*u.d
return B.r(t,w,A.f,t,t,new B.o(A.c,t,B.L(A.cx,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dM,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQB(r,!0)
return C.fQ8(s.go,v,s.id)}return w},
aQB(d,e){var w,v,u,t
try{w=C.ipW(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cr(new C.cl9(this,w,v,e))
return u}catch(t){return D.afK}},
bHI(d){return this.aQB(d,!1)},
cmH(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.be3
return C.iqd(v,w.db,w.dx)}}
C.b3E.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.K(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.K()
w.r=B.b0(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a1(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.ar(s,g)
d.ar(s,w)
break
case 1:d.bZ(s,g)
d.bZ(s,w)
break
case 2:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
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
r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.p(0,h),new B.p(u,h),w)
break
case 5:q=u*0.22
r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aG(h.r,A.ai,i,i,f)
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
r.ab()}}r.E(new B.bu())
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aKY.prototype={
S(){return new C.bxu(null,null)}}
C.bxu.prototype={
Y(){var w,v=this
v.a4()
w=B.bl(null,A.hK,null,1,null,v)
w.cL(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBi()},
aQM(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bN(new B.o(w,w,w,B.l(8),w,new B.a8(A.a7,A.aa,A.x,v,w,w),A.n),A.bk,B.as(B.d(d,w,w,w,w,w,w,A.dq,w,w,w),w,w,w),w)},
bES(){var w,v=this,u=null,t=v.aQM("Slide A",A.bo),s=v.aQM("Slide B",A.b3)
if(v.a.c===D.cu)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.fhH(v,s,t),u)},
B(d){return this.bES()}}
C.aLF.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.j.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Ws.prototype={
S(){return new C.bme(null,null)}}
C.bme.prototype={
Y(){var w,v,u=this
u.a4()
w=B.bl(null,A.Cj,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cu){w.sp(0,1)
return}B.bO(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1P(u),x.a)},
bz(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cu)w.sp(0,1)
else B.bO(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1O(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzi()},
B(d){var w,v=this.a
if(v.c.dy===D.cu||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.e1N(this),v.d)}}
C.JN.prototype={
B(d){return B.cr(new C.cl2(this))}}
C.aBB.prototype={
S(){return new C.bgx()}}
C.bgx.prototype={
Y(){this.a4()
if(this.a.c!==D.cu)B.bO(A.NY,new C.dfw(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cu)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.v(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Ws(C.eu(A.bp,!1,4279310375,A.aH,"",4294538006,24,A.bs,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bm,o,2,"",0,0,"",u,D.fj,0.84,0.08,0.12),B.r(p,p,A.f,p,p,new B.o(A.c6,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bt("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.v(0)
n=q.d
t=C.eu(A.bp,!1,4294967295,A.aH,"",4280640491,22,A.bs,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bm,o,2,"Element flies in",0,0,"",q.a.c,D.d1,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ap(32,new C.Ws(t,B.r(p,D.fOO,A.f,p,p,new B.o(s,p,B.L(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jq,p,p,1/0),!0,1,new B.bt("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bN(D.b90,A.bk,n,p)}}
C.a97.prototype={
S(){return new C.bmV(null,null)}}
C.bmV.prototype={
gb2x(){var w=this.a
if(w.e)w=D.fen.q(0,w.c)||D.aTA.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a4()
if(v.gb2x()){w=C.ioc(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzO()},
B(d){var w,v=this,u=v.d
if(!v.gb2x()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.eqk(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1C.prototype={
B(d){var w=null
return B.as(C.b3I(!0,w,!1,C.eu(A.K,!1,this.e.l(),A.aH,"",4280640491,this.f,A.bs,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bm,4280172719,2,"Aa",0,0,this.c,D.cu,D.d1,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhK.prototype={
ju(d){return C.a3T(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsZ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3T(k,l),i=e.gdA(),h=new C.f6B()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aV8.aK(0,l))
d.af(j,w)
k=C.a3T(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bv5.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.foL.aK(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hp(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sav(D.foJ.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3T(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.b9.j(0.7).gp(0)
k.y=new B.hp(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pj.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.foE.aK(0,l))
d.af(j,w)
w=C.a3T(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bhU.gp(0)
d.af(w,v)
k=C.a3T(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bkW.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aV8.aK(0,l))
d.af(j,k)
for(k=B.xP(j),w=B.a([],x.X),k=new B.rA(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bj(B.jK(y.M));--r
k.iy()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.j.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iy()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iy()
n=w[r].Di(q*o/p).a
m=D.d8C[A.o.F(o,4)]
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.c.j(0.9).gp(0)
d.N(new B.p(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.foN.aK(0,l))
k.y=new B.hp(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.foK.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3T(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.pd.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bu2.prototype={
a5(d,e){d.Gu(C.a3T(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aNH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aOb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPv.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a9q.prototype={}
C.P_.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGu(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUz(){return this.r},
gUA(){return this.w},
gMi(){return this.x}}
C.aGu.prototype={
Y(){var w,v,u=this
u.a4()
$.aW.c1$.push(u)
C.fVd()
$.hFt=new C.eJc(u)
w=B.bl(null,A.Cg,null,1,null,u)
w.f2(0,!0)
u.fy!==$&&B.aQ()
u.fy=w
v=$.hew.h(0,u.a.c)
if(v!=null){w=B.C(v,x.I)
u.d=w
u.x=!1}u.J1()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Pb(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J1()}},
jm(d){if(d===A.Bn||d===A.u_||d===A.tZ||d===A.q6)this.ug()},
t(){var w,v,u,t=this
$.aW.hV(t)
if(!t.x){w=t.a.c
v=B.C(t.d,x.I)
$.hew.n(0,w,v)}w=t.at
if(w!=null)w.a1(0)
t.ug()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}t.bA0()},
gZ1(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPu(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adi(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTc())return!1
return!0},
kz(){return this.adi(null)},
ake(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.fmZ)},
qR(){if(!this.kz())return!1
this.ake()
return!0},
at8(d){var w,v,u,t,s,r=this
if(r.adi(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hEy(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Au(){return this.at8(null)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.at5(k),$async$J1)
case 3:j=e
w=4
return B.b(C.b1P(k),$async$J1)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.hao(j,t.c5m())
w=t.gZ1()?5:7
break
case 5:r=t.gPu()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8D(r),$async$J1)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.eFA())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.eFB())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.I)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zj(m==null?"":m)!=null)continue
C.fVp(n,s)
p=!0}t.m(new C.eFC(t,s))
l=B.C(s,x.I)
$.hew.n(0,k,l)
if(p||s.length>J.ad(j))t.ug()
case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
c5m(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kP(w)&&w!==q}if(w)p.push(r)
return p},
ctz(d){var w,v=this,u=d.w
if(!C.kP(u)||u==="hati_kiapo_uongozi")return
v.abC(d)
w=A.d.bj(v.d,new C.eHa(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hQ())
v.db=!1},
cnD(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kP(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctz(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hT>")
s=B.C(new B.cM(new B.Y(s,new C.eGZ(),w.k("Y<1>")),new C.eH_(),v),v.k("M.E"))
return s},
Pb(d){return this.bU8(d)},
ug(){return this.Pb(null)},
bU8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnD()
w=3
return B.b(C.Xm(d==null?t.a.c:d,s),$async$Pb)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.at8(r)?4:5
break
case 4:w=6
return B.b(C.OB(r),$async$Pb)
case 6:q=r.x
p=A.a.i(q==null?t.gPu():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eEY())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c9(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pb,v)},
pM(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kP(u.w))===!0?A.h7:A.lI
v.at=B.cy(w,new C.eIi(v))},
b1X(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agD(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cH(w,0)
A.d.a8(v.ay)},
cHl(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agD(w.e.hQ(),w.f,w.r))
w.m(new C.eJ8(w,v.pop()))
w.pM()},
csE(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agD(w.e.hQ(),w.f,w.r))
w.m(new C.eH8(w,v.pop()))
w.pM()},
oF(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIW(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yz(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yf(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.U$=$.ax()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KR(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d0(new B.cM(new B.Y(w,new C.eIX(),v.k("Y<1>")),new C.eIY(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
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
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.I)(v),++r){n=v[r]
if(n.b!==D.d1)continue
p=n.a
m=w.c3(0,p,new C.eIZ(n))
s.c3(0,p,new C.eJ_())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ik(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aU(u.d,new C.eEm(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPu()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hQ())}u.oF()
u.pM()},
akA(d,e){var w,v,u,t,s=this
if(s.kz())return
w=s.Yz(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kP(v.w))===!0
if(u){C.iog(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ioh(t,w.d+w.f*0.5)}}s.Ik()
s.oF()
s.pM()
if(u&&s.c!=null)s.m(new C.eJ9())},
cIt(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ik()
w.oF()
w.pM()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqV(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.imf(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2y(v)
t=q.c2x(v)
s=B.b0(v.e)
r=v.f
return new C.k2(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hYY(o)},
c2y(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(t.b===D.d1)s=t.w>=28||A.o.D(A.o.aq(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.a_},
c2x(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.d1&&t.w<28)return B.b0(t.Q)}return A.aM},
agx(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gZ1()){w.c.L(x.q).f.T(D.flz)
return}w.abC(d)
w.b3e(C.bFg(d))
return}if(C.clV(v)){w.abC(d)
w.b3e(d)
return}w.m(new C.eGh(w,d))},
atH(){var w,v,u,t,s,r,q=this
q.a3j(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kP(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eEk(q))
if(r&&q.c!=null){u.toString
q.Kn(u,s)}return}q.ug()
q.m(new C.eEl(q))},
b3d(d){this.abC(d)
this.a0N(d,!0)},
abC(d){if(!C.kP(d.w))return
C.fVp(d,this.d)},
a0N(d,e){return this.cjv(d,e)},
b3e(d){return this.a0N(d,!1)},
cjv(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0N=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bFg(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPu():r)
t.dy.W(0,q.toLowerCase())
C.a8A(t.a.c,q)}r=s}else r=d
w=C.clV(r.w)?3:4
break
case 3:w=5
return B.b(t.abD(r),$async$a0N)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aU(t.d,new C.eGE(l))
o=l.a.hQ()
n=C.kP(o.w)&&C.ipw(o)
t.m(new C.eGF(t,o,p))
if(n){m=A.d.bj(t.d,new C.eGG(o))
if(m>=0){t.d[m]=o.hQ()
t.ug()}}if(!t.adi(l.a))t.ZN()
r=!1
if(t.c!=null)if(!t.adi(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.at8(r)&&C.fRj(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.fm9)
case 1:return B.h(u,v)}})
return B.i($async$a0N,v)},
abD(d){return this.bS8(d)},
bS8(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lA(r.c,A.Au),$async$abD)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lf(!1,r,s.c,s.d,null,A.Au,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abD,v)},
ot(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ot=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.clV(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.clk(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ot,v)},
age(){var w=0,v=B.j(x.H),u,t=this,s
var $async$age=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGg(),s,null,!0,!0,x.H),$async$age)
case 3:if(t.c==null){w=1
break}t.atH()
case 1:return B.h(u,v)}})
return B.i($async$age,v)},
agd(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGd(),s,null,!0,!0,x.H),$async$agd)
case 3:if(t.c==null){w=1
break}t.m(new C.eGe())
t.atH()
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
ZN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$ZN)
case 3:r=e
if(B.k7(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aD("Bool","ngmy_marriage_hint_seen",!0),$async$ZN)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fk8)
case 1:return B.h(u,v)}})
return B.i($async$ZN,v)},
Kn(d,e){return this.ctZ(d,e)},
ctZ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kn=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahX(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kn)
case 9:w=4
break
case 6:w=10
return B.b(C.ahY(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kn)
case 10:w=4
break
case 7:w=11
return B.b(C.ahZ(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kn)
case 11:w=4
break
case 8:w=12
return B.b(C.ai_(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kn)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kn,v)},
Zn(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Zn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gZ1()){t.c.L(x.q).f.T(D.fkl)
w=1
break}s=t.gPu()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.HH(r,"Search states\u2026",s,A.kb,"Hati ya Kiapo: which state?"),$async$Zn)
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
C.a3i(p,o,r,p,new C.eFw(t),new C.eFx(t),s)
case 1:return B.h(u,v)}})
return B.i($async$Zn,v)},
agy(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dX,null,new C.eGn(u),s,!0,!0,!1,A.lU,!1,!1,x.N),$async$agy)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ai_(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahX(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahY(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahZ(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.Zn()
return B.h(null,v)}})
return B.i($async$agy,v)},
ciB(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1X()
w=C.cE()
v=C.Ct(t,t,t,t,D.E5,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eGo(u,v))},
ab_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ab_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iuG(s),$async$ab_)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eEo())
t.dc(new C.eEp(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ab_,v)},
aiz(d,e,f,g){var w=null,v=g?A.dr:A.cd,u=B.L(g?A.aT:A.cx,A.r,1)
return B.h9(B.az(w,B.r(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0M(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qR()){w=1
break}s=t.kd()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGz(),q),q.k("M.E"))}o=s!=null&&s.b===D.lT?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fml)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGA(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0M)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0M,v)},
agP(){return this.cju()},
cju(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ius(s,t.f+1,o),$async$agP)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jC(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eGC(q))
t.dc(new C.eGD(p,t,o,q,r))
t.c.L(x.q).f.T(D.fmK)
case 1:return B.h(u,v)}})
return B.i($async$agP,v)},
agW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()||!t.Au()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGU(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fjT)
w=1
break}o=new B.N(p,new C.eGV(),B.U(p).k("N<1,G>")).f1(0,new C.eGW())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.I)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b5,A.aP),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.L,null,new C.eGX(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agW)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.U$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.eGY())
case 1:return B.h(u,v)}})
return B.i($async$agW,v)},
agB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agB=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hGJ(s,new C.Fq(r,q,p,o==null?"":o)),$async$agB)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eGp(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ail(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agB,v)},
abw(){return this.bRq()},
bRq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iuF(s,t.f+1,l),$async$abw)
case 3:r=e
q=$.he7
$.he7=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eEF())
t.c.L(x.q).f.T(D.fjK)
w=1
break}if(!q){s=r.CW
s=C.hFr(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eEG(t,l,r))
t.c.L(x.q).f.T(D.fne)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jC(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eEH(p))
o=s.length
t.dc(new C.eEI(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abw,v)},
aT0(d,e){if(e){this.aho()
return}this.ciB(d,!1)},
bMV(){return this.aT0(null,!1)},
aho(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aho=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c4,null,new C.eH3(t),r,!0,!0,!0,A.pR,!1,!1,x.N),$async$aho)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eH4(t,C.ime(s).oL()))
case 1:return B.h(u,v)}})
return B.i($async$aho,v)},
dc(d){var w=this
if(w.qR())return
w.Ik()
w.b1X()
w.m(d)
w.KR()
w.oF()
w.pM()},
a9v(){this.dc(new C.eDi(this,D.nc))},
aUv(){var w=this.gdB()
if(w==null)return
this.dc(new C.eED(this,w))},
aTB(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eEB(this))},
b68(d,e){if(this.e==null||d===e)return
this.dc(new C.eHc(this,d,e))},
OI(d){return this.bOW(d)},
bOW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.L(x.q).f.T(D.fmg)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPu():s)
w=5
return B.b(C.a8C(r),$async$OI)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8A(t.a.c,r)
s=t.c
if(s!=null){s=s.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.at7(s)
w=6
return B.b(C.b3M(t.a.c,s),$async$OI)
case 6:if(t.c==null){w=1
break}t.m(new C.eEx(t,d))
w=7
return B.b(t.ug(),$async$OI)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OI,v)},
ctW(d,e){var w=this
if(d.z){w.ake()
return}w.m(new C.eHb(w,d,e))
w.pM()},
kd(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xz(d){return this.ch.c3(0,d.a,new C.eEn(d))},
avA(d){return this.CW.c3(0,d.a,new C.eEZ())},
a3j(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yz(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ap$.d.c
if(u!=null)u.js()},
b9G(){return this.a3j(!0)},
a3f(d){var w,v,u=this
if(u.qR())return
if(!u.Au())return
w=u.Yz(d)
if(w==null||w.b!==D.d1)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xz(w).sb1(0,"")}u.m(new C.eIU(u,d))
$.aW.x1$.push(new C.eIV(u,d,w))},
bae(d){var w=this
if(d.b===D.d1&&!w.kz()&&w.Au()){w.a3f(d.a)
return}w.aC6(d.a)},
aC6(d){var w,v,u,t,s,r=this
if(r.kz())return
w=r.r
if(w!=null&&w!==d){v=r.Yz(w)
if(v!=null&&v.b===D.d1){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eIj(r,s,d))
if(s||d==null){t=$.aW.ap$.d.c
if(t!=null)t.js()}},
aP5(){this.dc(new C.eDj(this))},
pt(d){return this.bDV(d)},
bDV(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$pt)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDg(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pt,v)},
WC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.HA(78,1920),$async$WC)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eD6(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WC,v)},
Ww(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ww=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(T.DE(t.a.c),$async$Ww)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.fnO)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eD3(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Ww)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.dc(new C.eD4(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Ww,v)},
auy(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aU(w.gdB().z,new C.eEz(v))){w.c.L(x.q).f.T(D.fmO)
return}if(w.w===v)w.a3j(!0)
w.dc(new C.eEA(w,v))},
bL9(){var w=this.kd(),v=w==null
if((v?null:w.b)===D.fj)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.d1)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPO(d,e){var w=this,v=w.kd(),u=w.gdB(),t=w.e
if(t==null)return
w.dc(new C.eDL(w,v,d,e,t,u))},
bFv(d){return this.aPO(d,null)},
a9L(d){return this.bFD(d)},
bFD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aay.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.ot(),$async$a9L)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kd()
if(s!=null){r=s.b
if(r===D.d1)t.bFv(s.w>=28||s.x.gdR(0)>=A.I.gdR(0)?d.d:d.e)
else if(r===D.fj){r=d.c
t.aPO(r.j(0.88),r)}w=1
break}t.dc(new C.eDQ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9L,v)},
a9K(d){return this.bFB(d)},
bFB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9K=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kd()
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
return B.b(t.ot(),$async$a9K)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDO(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9K,v)},
bFl(d){var w=this.gdB()
if(w==null)return
this.dc(new C.eDK(this,w,d))},
a0S(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iuB(r),$async$a0S)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oF()
t.m(new C.eGO(t,s))
w=4
return B.b(t.ug(),$async$a0S)
case 4:if(t.c!=null)t.agx(s)
case 1:return B.h(u,v)}})
return B.i($async$a0S,v)},
abn(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3j(!0)
t.oF()
s=t.c
s.toString
w=3
return B.b(C.So(s,q),$async$abn)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abn,v)},
Ea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ea=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oF()
t=4
w=7
return B.b(C.aSn(m),$async$Ea)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRP(o,q,m.b),$async$Ea)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ac(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ea,v)},
FR(d,e){return this.cGJ(d,e)},
cGJ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FR=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qR()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3j(!0)
t.oF()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eJ2(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.inc(q?"":s)
o=C.hEk(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eJ3(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czO(n.length,o,s),$async$FR)
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
return B.b(t.czN(n,o),$async$FR)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fc(t.d,new C.eJ4(s))
s=h.a.b
w=11
return B.b(t.czL(k.b,s),$async$FR)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.inb(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.fo_)
w=1
break}w=12
return B.b(t.czM(j.a,s,o,j.c),$async$FR)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eJ5(h,t,i))
t.pM()
case 1:return B.h(u,v)}})
return B.i($async$FR,v)},
czO(d,e,f){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIz(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czN(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIy(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czL(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIs(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czM(d,e,f,g){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIu(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acQ(){var w=null
return B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acR(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ar(d,A.c4,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.r(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.aA,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ew,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fz9,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXR(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.L(e.j(0.22),A.r,1)
return B.r(w,B.d(d,w,2,A.a2,w,w,w,A.W6,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXU(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a8(A.aA,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aH(!1,A.a3,!0,w,B.aP(!1,v,!0,B.r(w,B.A(B.a([B.r(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.ni,w,w,w),A.cQ,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.zh,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFs(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1s(d,e,f,g,h,i){return this.aXU(d,e,f,!1,g,h,i)},
awU(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.L(A.c.j(0.08),A.r,1)
return B.r(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dq,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a1j,w,w,w)},
aXT(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.co,w,new B.b9(B.l(14),A.a1),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.o0,w,w,w),w,new C.eFr(d,f),v)},
aXS(d,e){return this.aXT(d,e,null)},
KI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pA(l,s.c,s.d),$async$KI)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eI(l,new C.eIk());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abk(l.charCodeAt(0)==0?l:l,r.b),$async$KI)
case 4:l=t.a
w=5
return B.b(B.pz(l.c,l.d),$async$KI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KI,v)},
IG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pA(q,s.c,s.d),$async$IG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abk(A.X.aw(r.aj(),null),r.b+".json"),$async$IG)
case 4:q=t.a
w=5
return B.b(B.pz(q.c,q.d),$async$IG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IG,v)},
b9p(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oF()
u.ug()
w=u.c
w.toString
v=B.ec(new C.eIT(u,t),!1,null,x.z)
B.a6(w,!1).ce(v)},
HU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$HU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fVC(),$async$HU)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.iq7(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.as,null,new C.eDb(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HU)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eDc(t,s))
w=1
break}if(p==="split")t.dc(new C.eDd(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HU,v)},
O2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}w=3
return B.b(t.ot(),$async$O2)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aSm(s,null,null),$async$O2)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eDh(t,r))
case 1:return B.h(u,v)}})
return B.i($async$O2,v)},
b5V(d){var w=this.e
if(w==null||!C.kP(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRa(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aSm(s,t==null?null:B.b0(t),u)},
a9t(d){return this.bDM(d)},
bDM(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Au()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fof)
w=1
break}w=3
return B.b(t.aRa(),$async$a9t)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eD8(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9t,v)},
ai7(d){return this.csH(d)},
csH(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ai7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Au()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fnm)
w=1
break}w=3
return B.b(t.aRa(),$async$ai7)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eH9(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ai7,v)},
cff(){var w,v,u=this
if(u.kz())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFJ()}},
cFJ(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eJ0(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1N(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eFv(this,r,u.d))},
c6F(d){var w
if(this.kz())return!1
w=this.e
if((w==null?null:C.kP(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fS4(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c6G(d){var w
if(this.kz())return!1
w=this.e
if((w==null?null:C.kP(w.w))!==!0)return!0
if(!this.Au())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fS4(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
Oa(d){return this.bG2(d)},
bG2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Oa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Au()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fma)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arG(p),$async$Oa)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fmQ)
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
break}t.m(new C.eDU(t,d,o))
t.oF()
$.aW.x1$.push(new C.eDV(t))
case 1:return B.h(u,v)}})
return B.i($async$Oa,v)},
WA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$WA)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFY(),$async$WA)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eD5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WA,v)},
OX(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$OX)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kd()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fVt(r),$async$OX)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eEX(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OX,v)},
jk(d){this.dc(new C.eDe(this,d))},
qG(d){return this.bFe(d)},
bFe(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qR()){w=1
break}m=!D.aTD.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.ot(),$async$qG)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HU()
w=1
break A
case"sign_paper":t.O2()
w=1
break A
case"hd_photo":t.WA()
w=1
break A
case"sharpen":t.OX()
w=1
break A
case"print":t.Ea()
w=1
break A
case"rotate":s=t.kd()
if(s!=null)t.dc(new C.eDn(s))
w=1
break A
case"text_box":t.aP5()
w=1
break A
case"picture":t.WC()
w=1
break A
case"present":t.b9p()
w=1
break A
case"new_slide":t.a9v()
w=1
break A
case"export_json":t.IG()
w=1
break A
case"outline_share":t.KI()
w=1
break A
case"flashcard_tool":t.vT(D.Jr)
w=1
break A
case"quiz_tool":t.vT(D.Js)
w=1
break A
case"worksheet_tool":t.vT(D.Jt)
w=1
break A
case"duplicate_el":s=t.kd()
if(s==null){w=1
break A}t.dc(new C.eDo(t,s))
w=1
break A
case"delete_el":t.auy()
w=1
break A
case"bring_fwd":s=t.kd()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDp(t,s))
w=1
break A
case"send_back":s=t.kd()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDA(t,s))
w=1
break A
case"align_left":s=t.kd()
if(s!=null)t.dc(new C.eDD(s))
w=1
break A
case"align_center":s=t.kd()
if(s!=null)t.dc(new C.eDE(s))
w=1
break A
case"align_right":s=t.kd()
if(s!=null)t.dc(new C.eDF(s))
w=1
break A
case"grayscale":case"brighten":t.OX()
w=1
break A
case"flip_h":s=t.kd()
if(s!=null)t.dc(new C.eDG(s))
w=1
break A
case"flip_v":s=t.kd()
if(s!=null)t.dc(new C.eDH(s))
w=1
break A
case"rectangle":t.pt(D.bm)
w=1
break A
case"circle":t.pt(D.f2)
w=1
break A
case"triangle":t.pt(D.ke)
w=1
break A
case"arrow":t.pt(D.E7)
w=1
break A
case"line":case"divider":t.pt(D.fP)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eI(q,new C.eDI()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eDJ(),B.U(n).k("Y<1>")).gJ(0)}t.c.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.jk(C.j8(A.K,!1,t.gqV().d.l(),A.aH,40,A.bs,A.u,0.18,q,"Presentation Title",0,D.nd,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.jk(C.j8(A.K,!1,t.gqV().e.l(),A.aH,22,A.bs,A.a8,0.12,q,"Subtitle goes here",0,D.ds,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jk(C.j8(A.bp,!0,4279310375,A.aH,20,A.bs,A.a8,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vp,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jk(C.j8(A.bp,!1,4279310375,A.aH,20,A.bs,A.a8,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.vo,0.8,0.1,0.22))
w=1
break A
case"quote":t.jk(C.j8(A.K,!1,4279310375,A.aH,24,A.cK,A.a8,0.25,C.cE(),'"Insert meaningful quote here."',0,D.ds,0.8,0.1,0.3))
w=1
break A
case"citation":t.jk(C.j8(A.bp,!1,4284773515,A.aH,14,A.bs,A.a8,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.vp,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jk(C.j8(A.e4,!1,4279310375,A.aH,14,A.bs,A.a8,0.08,C.cE(),C.bG_(),0,D.ds,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jk(C.j8(A.e4,!1,4279310375,A.aH,13,A.bs,A.a8,0.06,C.cE(),"Page "+(t.f+1),0,D.ds,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eDq(t))
w=1
break A
case"footer_bar":t.dc(new C.eDr(t))
w=1
break A
case"highlight":t.dc(new C.eDs(t))
w=1
break A
case"redact":t.dc(new C.eDt(t))
w=1
break A
case"callout":t.dc(new C.eDu(t))
w=1
break A
case"checkboxes":t.jk(C.j8(A.bp,!1,4279310375,A.aH,20,A.bs,A.a8,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.ds,0.8,0.1,0.2))
w=1
break A
case"table":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.ds,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eDv(t))
w=1
break A
case"letter":t.jk(C.j8(A.bp,!1,4279179050,A.aH,17,A.bs,A.a8,0.82,C.cE(),C.bG_()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jk(C.j8(A.bp,!1,4279310375,A.aH,22,A.bs,A.U,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vp,0.8,0.1,0.12))
w=1
break A
case"toc":t.jk(C.j8(A.bp,!1,4279310375,A.aH,18,A.bs,A.a8,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.ds,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.08,C.cE(),"Signature: _________________________",0,D.ds,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.08,C.cE(),"Initials: ______",0,D.ds,0.3,0.65,0.78))
w=1
break A
case"approved":t.jk(C.j8(A.K,!1,4278556265,A.aH,28,A.bs,A.u,0.12,C.cE(),"APPROVED",0,D.nd,0.32,0.62,0.08))
w=1
break A
case"draft":t.jk(C.j8(A.K,!1,4292617766,A.aH,28,A.bs,A.u,0.12,C.cE(),"DRAFT",0,D.ds,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jk(C.j8(A.K,!1,871318596,A.aH,36,A.bs,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.ds,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eDw(t))
w=1
break A
case"progress":t.dc(new C.eDx(t))
w=1
break A
case"stars":t.jk(C.j8(A.K,!1,4279310375,A.aH,36,A.bs,A.a8,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.r4,0.8,0.1,0.4))
w=1
break A
case"equation":t.jk(C.j8(A.K,!1,4279310375,A.aH,32,A.bs,A.U,0.14,C.cE(),"y = mx + b",0,D.ds,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jk(C.j8(A.K,!1,4279310375,A.aH,18,A.bs,A.a8,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vo,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eDy(t))
w=1
break A
case"compare":t.dc(new C.eDz(t))
w=1
break A
case"link_text":t.jk(C.j8(A.bp,!1,4280640491,A.nh,16,A.bs,A.a8,0.1,C.cE(),"https://example.com",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"phone":t.jk(C.j8(A.bp,!1,4279310375,A.aH,18,A.bs,A.a8,0.1,C.cE(),"(555) 123-4567",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"email":t.jk(C.j8(A.bp,!1,4280640491,A.aH,18,A.bs,A.a8,0.1,C.cE(),"name@email.com",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eDB(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.dc(new C.eDC(t,r))
w=1
break A
case"invoice":t.jk(C.j8(A.bp,!1,4279179050,A.aH,16,A.bs,A.a8,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"resume":t.jk(C.j8(A.bp,!1,4279179050,A.aH,17,A.bs,A.a8,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jk(C.j8(A.bp,!1,4279310375,A.aH,16,A.bs,A.a8,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bG_()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.ds,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jk(C.j8(A.bp,!1,4279310375,A.aH,17,A.bs,A.a8,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.ds,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jk(C.j8(A.bp,!1,4279310375,A.aH,15,A.bs,A.a8,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.ds,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qG,v)},
czf(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fej.q(0,this.z)},
cze(d){if(this.kd()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bb7(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cu,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.by
u=B.L(u,A.r,o&&e?2:1)
t=C.ipX(d)
s=o?12:18
r=o?A.I:A.cZ
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.r(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.r(p,D.Q2,A.f,p,p,D.Fr,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fn,B.az(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRH(d){var w,v=null,u=this.kd()
if(u==null)return A.bM
w=B.a([A.af,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aD:A.an,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.u(w,new B.N(D.SC,new C.eEW(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.i,0,v,v)},
vT(d){return this.bDU(d)},
bDU(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aTx.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.ot(),$async$vT)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDf(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.fcD
w=h.e
if(w==null)return h.bHO()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aF(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aF(u,A.eT,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c4:D.bkf
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTc()}else j=!1
if(j)k.push(new C.a98(h.a.c,!1,h.e.gbdm(),h.gcfc(),g))
else if(s&&h.e!=null&&!h.kz()&&C.clV(h.e.w)){j=h.a
k.push(new C.a98(j.c,j.d,g,h.gcgl(),g))}if(s)k.push(h.bRC(w,t,r))
if(s&&h.kz()){w=t?A.fZ:A.lh
j=B.l(14)
i=B.L(A.bo.j(0.35),A.r,1)
k.push(B.r(g,B.A(B.a([D.bZz,A.af,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.fZ,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yK,A.hM,g,g,g))}w=!n
if(w&&!h.kz())k.push(h.c7D(t,r))
if(w&&h.kz())k.push(h.cGK(t))
if(r&&h.kd()!=null&&w&&!h.kz())k.push(h.c7y(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8P(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8P(t,!1),g))
i.push(B.E(new B.bL(A.b0,g,g,h.bJ9(v,t,!s||p),g),1))
if(h.czf(r)&&u&&s&&!h.kz())i.push(h.ceZ(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.i,0,A.p),1))
if(q&&!h.kz()&&h.cze(!1))j.push(new B.a5(240,g,h.bUx(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c7z(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHO(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.H
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f2(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.u4(0,!1)}p=w?A.c4:A.c
v=r.c
v.toString
v=B.aF(v,A.dN,x.w).w
u=r.a.e
t=x.p
s=B.a([r.ce7(A.bo,A.qN,new C.eDY(r),r.gciy(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.bA,B.A(B.a([B.E(r.asd(A.bo,A.i2,"Blank Presentation",new C.eDZ(r)),1),A.av,B.E(r.asd(A.b3,A.v2,"Class Template",new C.eE_(r)),1)],t),A.l,q,A.e,A.i,0,q,q)],t)
if(r.a.d&&r.gZ1()&&!A.d.aU(r.d,new C.eE0()))A.d.u(s,B.a([A.W,new B.mr(r.asd(A.c2,A.ja,"Create Hati ya Kiapo",r.gc4a()),D.htS)],t))
s.push(A.ng)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.m(q,q,w?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.ae)
t=r.d
if(t.length===0)s.push(r.bEH(w))
else{t=new B.i6(t,B.U(t).k("i6<1>"))
A.d.u(s,t.gdP(t).dN(0,new C.eE1(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cm(s,q,q,new B.R(18,v.r.b+12,18,u),q,q,A.ah,!1),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bPJ(){this.m(new C.eEC(this))
var w=this.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900){w=$.aW.ap$.d.c
if(w!=null)w.js()}},
agQ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kd()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGN(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$agQ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agQ,v)},
Bv(d,e){return this.czB(d,e)},
czB(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bv=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hN(D.Zk,!0,"Dismiss",j,new C.eIl(),new C.eIm(r,d,e),A.iO,!0,x.N),$async$Bv)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ake()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTc()){r.ake()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aSn(d),$async$Bv)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRP(j,q,d.b),$async$Bv)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ac(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FR(d,!1),$async$Bv)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hN(D.Zk,!0,"Dismiss",j,new C.eIn(),new C.eIo(d),A.a3,!0,x.y),$async$Bv)
case 20:if(g===!0)r.OI(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahS("Rename presentation",d.b),$async$Bv)
case 24:l=g
if(l!=null)r.ctW(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eIp(r,k))
r.pM()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bv,v)},
b3S(d,e){var w=null
return B.bP(!1,D.fZn,w,w,!0,w,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bo,w,w,w,A.az,w,A.lL,w,w,w,w,w,A.kD,w,w))},
bEH(d){var w,v=null
if(!d)return B.r(v,D.bxZ,A.f,v,v,B.a7w(A.aG,22),v,v,v,v,A.ey,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c6(w,new C.eDk(this,!0),v)},
bNP(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eEq(),x.dv).bY(0,new C.eEr()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.alV,this.aPo(v,e,new C.eEs(),f),null)},
aPo(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e8)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.u(q,B.a([B.X(p,g?A.ab:A.bx,n,n,n,10),A.rb],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.r(n,new B.c8(A.aL,A.e,A.P,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bG(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n3,n,n,n))
A.d.u(l,u)}return B.ex(A.a7,B.A(l,A.l,n,A.e,A.P,0,n,n),A.f,A.e7)},
bEF(d,e,f){return this.aPo(d,e,null,f)},
bNR(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dvo
else if(v==="hati_kuhoweya")w=D.dfB
else{if(v==="hati_kiapo_uongozi")v=D.d12
else v=C.kP(v)?D.d8Z:A.IG
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eEv(this,f,e,d,w),null)},
c7z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kd()
if(i==null||i.b!==D.d1)return A.bM
w=k.Xz(i)
v=k.avA(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cr,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b1,B.bP(!1,D.fUL,j,j,!0,j,j,j,new C.eFW(k),j,j)],t),A.l,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.l(18)
p=B.L(A.bo.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h9,new B.bN(new B.o(r,j,p,q,o,j,A.n),A.bk,new B.D(A.f0,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bo,j,j,j,j,2,D.c4O,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xq,j,j,j,j,j,j,!1,"\u2022",j,new C.eFX(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AQ,A.ao,j,A.Vu,j,j),j),j),j),1)
q=B.l(16)
p=d?A.br:A.c
o=B.L(d?A.aM:A.bi,A.r,1)
n=B.E(B.cb(B.A(B.a([k.uK(G.P3,j,new C.eFY(k,i),d),k.uK(G.a2r,j,new C.eFZ(k,i),d),k.uK(I.aql,j,new C.eG_(k,i),d),k.uK(I.a3f,j,new C.eG0(k,i),d),k.uK(k.bED(i.as),j,new C.eG1(k,i),d),k.uK(D.art,j,new C.eG2(k,i),d),k.uK(D.ars,j,new C.eG3(k,i),d)],t),A.l,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bS(0,B.aH(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.am3,B.r(j,B.A(B.a([n,A.af,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aD:A.an,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dh],t),A.l,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lM,j,j,j),j)],t),A.l,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7y(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kd()
if(m==null)return A.bM
w=m.b
v=w===D.d1
u=B.l(18)
t=x.O
t=d?B.a([A.br,A.a_],t):B.a([A.c,A.aS],t)
s=B.L(d?A.aM:A.bi,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7q(A.j9,"Edit",new C.eFH(o,m),d,!0))
if(w===D.lT)p.push(o.b7q(A.HS,"Shape & ring",new C.eFI(o),d,!0))
p.push(o.uK(A.De,"Format",new C.eFJ(o),d))
if(v)A.d.u(p,B.a([o.uK(G.P3,n,new C.eFK(o,m),d),o.uK(D.art,n,new C.eFL(o,m),d),o.uK(D.ars,n,new C.eFM(o,m),d)],q))
p.push(A.b1)
p.push(o.cxs(A.ek,n,o.gaTz(),d,!0))
p.push(o.uK(A.hO,"Done",new C.eFN(o),d))
return B.r(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a7,A.aa,A.x,t,n,n),A.n),n,n,n,A.Co,A.lM,n,n,n)},
bED(d){switch(d.a){case 2:return D.a3c
case 1:case 5:return D.a3e
default:return D.a3d}},
c8t(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e4
default:return A.bp}},
aC4(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.l(12)
u=B.l(12)
t=h?K.Ia:n
if(h)s=n
else s=g?A.c.j(0.06):A.cd
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.u(o,B.a([A.e8,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.po,B.aH(!1,A.a3,!0,n,B.aP(!1,v,!1,B.eB(new B.D(new B.R(q,8,q,8),B.A(o,A.l,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uK(d,e,f,g){return this.aC4(d,e,f,g,!1,!1)},
b7q(d,e,f,g,h){return this.aC4(d,e,f,g,h,!1)},
cxs(d,e,f,g,h){return this.aC4(d,e,f,g,!1,h)},
bRC(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.l(20),m=x.O
m=e?B.a([A.br,A.a_],m):B.a([A.c,A.oh],m)
w=B.L(e?A.aM:A.no,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bo.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.a3K(A.eM,"Back",p.gbKU(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.m(o,o,e?A.c:A.a_,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dh,B.E(B.A(B.a([new B.dm(1,A.cq,t,o),A.af,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.m(o,o,e?A.bW:A.an,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uu,o,A.e,A.i,0,A.d5,o),1)],q)
if(!p.kz()){u=p.a3K(A.pA,"Undo",p.ax.length===0?o:p.gcHk(),e)
A.d.u(r,B.a([u,p.a3K(D.bSY,"Redo",p.ay.length===0?o:p.gcsD(),e)],q))}r.push(p.a3K(A.zf,"PDF",new C.eEP(p),e))
r.push(p.a3K(A.i3,"Download as video",new C.eEQ(p),e))
if(!p.kz())r.push(B.CG(o,o,B.X(A.oD,e?A.ab:A.bx,o,o,o,o),new C.eER(p),A.J,new C.eES(p),A.ag,"More",x.N))
r.push(A.dh)
r.push(B.aH(!1,A.a3,!0,o,B.aP(!1,B.l(14),!0,B.eB(D.evc,o,new B.o(o,o,o,B.l(14),o,K.Ia,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCU(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.r(o,B.A(r,A.l,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.aA,A.aE,A.x,m,o,o),A.n),o,o,o,D.bCZ,D.bIr,o,o,o)},
cGK(d){var w=this,v=null,u=B.l(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cl:A.bi,A.r,1)
return B.r(v,B.cb(B.A(B.a([w.j5(A.v_,"Print",new C.eJ6(w),d),w.j5(A.zf,"Download PDF",new C.eJ7(w),d),w.j5(A.qS,"Present",w.gaCU(),d)],x.p),A.l,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yK,G.anI,v,v,v)},
a3K(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dx
else w=g?A.ab:A.aM
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ch)},
c7D(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cl:A.bi,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eG6(r,d),t),t.k("ak.E"))
t.push(new B.D(A0.ann,new B.fh(new C.eG7(r),q),q))
A.d.u(t,w?B.a([new B.D(S.wA,r.aiz(A.k8,"Ending celebration",r.gciL(),d),q),new B.D(S.wA,r.aiz(A.HS,"Logo ring & frame",r.gcjs(),d),q)],x.p):A.f7)
A.d.u(t,w?B.a([new B.D(S.wA,r.aiz(A.ml,"Look and feel",r.gcjt(),d),q),new B.D(S.wA,r.aiz(A.pD,"Edit this slide's text",r.gck_(),d),q)],x.p):A.f7)
t.push(new B.D(S.wA,B.h9(B.az(q,B.r(q,D.fc0,A.f,q,q,new B.o(q,q,q,B.l(999),B.a([new B.ab(0,A.G,N.lF.j(0.4),A.J,10)],x.V),D.atA,A.n),q,34,q,q,A.f5,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eG8(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cb(B.A(t,A.l,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bIV,q,q,A.aL)
s=e?8:10
return B.r(q,B.x(B.a([t,B.cb(r.cv3(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yK,q,q,q,q)},
cv3(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dot[v]
u.a=null
s=u.a=t.b
w.push(e.m_(e.cwP(s),t.a,new C.eHv(u,e),a3,D.aTx.q(0,s)))}w.push(e.j5(A.kX,"Notes Slide",new C.eHw(e),a3))
w.push(e.m_(A.HR,"Quiz",new C.eHx(e),a3,!0))
w.push(e.m_(O.Hs,"Worksheet",new C.eHI(e),a3,!0))
w.push(e.m_(W.HU,"Flashcard",new C.eHT(e),a3,!0))
w.push(e.m_(A.PT,"Lab Report",new C.eI3(e),a3,!0))
w.push(e.m_(A.qQ,"Rubric",new C.eIa(e),a3,!0))
w.push(e.m_(A.pv,"Minutes",new C.eIb(e),a3,!0))
w.push(e.m_(A.oC,"Syllabus",new C.eIc(e),a3,!0))
w.push(e.m_(A.a3N,"Timeline",new C.eId(e),a3,!0))
return B.A(w,A.l,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dpQ[v]
w.push(e.m_(r.b,r.c,new C.eIe(e,r),a3,!D.aTD.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wV,a0,e.gaP4(),a3),e.j5(A.uU,"Picture",new C.eHy(e),a3),e.j5(A.zs,"Bio link",new C.eHz(e),a3),e.j5(A.a3M,"Table",new C.eHA(e),a3),e.j5(A.PX,"Sticky",new C.eHB(e),a3),e.j5(A.tb,"Divider",new C.eHC(e),a3),e.j5(A.zC,"Header",new C.eHD(e),a3),e.m_(A5.t9,"Rectangle",new C.eHE(e),a3,!0),e.m_(A.pt,"Circle",new C.eHF(e),a3,!0),e.m_(A.a30,"Triangle",new C.eHG(e),a3,!0),e.m_(A.jI,"Arrow",new C.eHH(e),a3,!0),e.m_(D.bRo,"Parallelogram",new C.eHJ(e),a3,!0),e.m_(D.bTV,"Hexagon",new C.eHK(e),a3,!0),e.m_(A.tb,"Line",new C.eHL(e),a3,!0),e.m_(A.zf,"PDF",new C.eHM(e),a3,!0),e.m_(N.a3W,"Signature",new C.eHN(e),a3,!0),e.j5(A4.D0,"Quote",new C.eHO(e),a3),e.j5(D.a2z,a1,new C.eHP(e),a3)],x.p),A.l,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPX("Wide 16:9",D.E5,a3),e.aPX("Short 9:16",D.oU,a3),new B.D(A.fn,B.n3(D.bW4,d,D.fQX,d,new C.eHQ(e),d,d,d,d),d)],u),A.l,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bL8("This slide",!e.Q,a3,new C.eHR(e)),A.bn,e.aSe("All slides",e.Q,a3,new C.eHS(e),!0)],u),A.l,d,A.e,A.i,0,d,d)
p=e.bL9()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bW:A.bN,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5U,new C.eHU(e),n),n.k("ak.E"))
n=B.cb(B.A(n,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dqS[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dx:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fn,B.az(d,B.r(d,d,A.f,d,d,new B.o(j,d,new B.bG(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHV(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cb(B.A(l,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bHf()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHW(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.T,q,A.am,p,A.T,o,A.aw,n,A.T,m,A.aw,l,A.T,j,A.aw,B.cb(B.A(h,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4h(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.kd()
w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=new C.eHu(e)
t=new C.eIf(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.SC,f.dy,new C.eHX(e,u,f),A.b3)
A.d.u(p,B.a([o,A.aw,n,A.T,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.SC,q,new C.eHY(e,u),A.bo))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.kX,w,new C.eHZ(e),a3),e.j5(A.v_,"Print deck",new C.eI_(e),a3),e.m_(D.apv,"Export JSON",new C.eI0(e),a3,!0),e.j5(A.fO,"Duplicate Slide",e.gaUu(),a3),e.j5(A.ek,a2,e.gaTA(),a3),e.cAX(a3)],x.p),A.l,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kd()
w=x.p
u=B.a([e.j5(D.a2z,a1,new C.eI1(e),a3),e.j5(A.fO,"Duplicate",e.gaUu(),a3),e.j5(A.ek,a2,e.gaTA(),a3),e.j5(A.qS,"Present",e.gaCU(),a3),e.j5(A.Dc,a0,e.gaP4(),a3),e.j5(A.D6,"Fit Text",new C.eI2(e),a3),e.j5(A.zf,"Download PDF",new C.eI4(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jM,"Transfer",new C.eI5(e),a3))
if(f!=null){w=B.a([A.af,e.j5(G.P3,"Bold",new C.eI6(e,f),a3),e.j5(G.a2r,"Italic",new C.eI7(e,f),a3),e.j5(G.ap6,"Underline",new C.eI8(e,f),a3),e.j5(Ag.P4,"Bullets",new C.eI9(e,f),a3),e.bUg(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bRH(a3))
w.push(e.j5(D.bQ6,"Delete",e.gaTz(),a3))
A.d.u(u,w)}return B.A(u,A.l,d,A.e,A.i,0,d,d)}},
aPX(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oU
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abZ,t,t,t)],v)
if(w)A.d.u(u,B.a([A.dh,D.bVg],v))
return new B.D(A.fn,B.jy(t,t,t,B.A(u,A.l,t,A.e,A.P,0,t,t),t,new C.eDT(this,w,e),s===e,A.bo.j(0.25),t,t,t),t)},
cAX(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aT:A.cx,A.r,1)
u=B.l(8)
t=B.X(A.Hq,d?A.aD:A.an,q,q,q,14)
s=B.aI(q,q,q,q,D.asw,q,q,q,new C.eIC(r,p),q,q,q,q,q,A.ch)
return B.r(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bq,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.asn,q,q,q,new C.eID(r,p),q,q,q,q,q,A.ch)],x.p),A.l,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.H6,A.n2,q,q,q)},
cwP(d){switch(d.a){case 6:return W.HU
case 7:return A.HR
case 8:return O.Hs
case 4:return A.zC
default:return A.kX}},
bUg(d,e){var w=null,v=B.L(e?A.aT:A.cx,A.r,1),u=B.l(8),t=B.aI(w,w,w,w,D.asw,w,w,w,new C.eF1(this,d),w,w,w,w,w,A.ch),s=A.j.M(d.w)
return B.r(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bq,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.asn,w,w,w,new C.eF2(this,d),w,w,w,w,w,A.ch)],x.p),A.l,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uH,A.n2,w,w,w)},
c4h(d){var w=null
return B.CG(B.E9(B.X(A7.a2C,d?A.ab:A.bx,w,w,w,16),w,w,D.fWF,w,w,w),w,w,new C.eFz(),A.J,this.gbFk(),A.cp,"Slide layout",x.fO)},
m_(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.cd,s=B.L(g?A.dr:A.bi,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dn:A.bo,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.r(w,D.Q2,A.f,w,w,D.Fr,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fn,B.aH(!1,A.a3,!0,w,B.aP(!1,v,!0,B.eB(new B.D(A.h9,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cQ,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aR:A.bx,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.m_(d,e,f,g,!1)},
b8P(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hS(t,new C.eIO(u,s,e,d),s.r.length,A.cp,t,w,new C.eIP(e),!1)
s=d?A.as:A.cd
w=B.a([],x.p)
if(e&&!u.kz())w.push(new B.D(A.cp,B.IN(E.asL,new C.eIQ(u),B.o3(t,A.bo,t,t,t,t,t,t,t,t,t,t,E.aUi,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.r(t,B.x(w,A.l,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJ9(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oU?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bL(A.b0,v,v,new B.fJ(w,B.az(v,B.cr(new C.eEi(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eEj(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJb(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kP(a9.w))===!0,b1=b0&&C.fS4(b3),b2=b0&&b3.b===D.ls&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.kz())v=!b0||a7.c6G(b3)
else v=!1
if(!a7.kz())u=!b0||a7.c6F(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c6:A.bo
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hhm(b3))o=a8
else if(p&&!a7.kz())o=a7.gcfe()
else o=a7.kz()?a8:new C.eE6(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c3:A.iR
i=w&&C.hhm(b3)&&a7.Au()?new C.eE7(a7,b3):a8
h=v&&b3.b===D.d1?new C.eE8(a7,b3):a8
g=u?new C.eE9(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bd
else e=q?A.c2:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c2.j(0.08)
else a0=b3.b===D.ls?A.L:a8
if(b1){a1=a7.kz()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c2.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aF(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Au()
a3=b3.b===D.d1
a4=a3?a7.Xz(b3):a8
a5=a3?a7.avA(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aF(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eEa(a7,b3):a8
a3=v&&a3?new C.eEb(a7,b3):a8
a6=C.b3I(q,a4,a1,b3,a5,a2,a3,new C.eEc(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.r(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ap(-4,B.az(a8,B.r(a8,D.bY5,A.f,a8,a8,new B.o(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEd(a7,b3,b4,b5),a8,a8,new C.eEe(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kz()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.az(a8,B.r(a8,D.bYN,A.f,a8,a8,new B.o(A.cY,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1M(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kz()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.az(a8,B.r(a8,D.c_s,A.f,a8,a8,new B.o(A.c2,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEf(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.d1)if(a7.w!==a9){e=a7.c
e.toString
e=B.aF(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.as(B.az(a8,B.r(a8,D.h4O,A.f,a8,a8,new B.o(A.bo,a8,a8,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lj,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEg(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.az(j,B.eH(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bt("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSe(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bo.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.L(e?A.bo:A.by,A.r,1)
if(e)t=A.bo
else t=f?A.aD:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.u(t,B.a([A.dh,B.r(r,D.Q2,A.f,r,r,D.Fr,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.r(r,B.A(t,A.l,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.hi,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bL8(d,e,f,g){return this.aSe(d,e,f,g,!1)},
ceZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b5,A.aP),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aS
t=f?A.xW:l
if(f)s=new B.bG(new B.ay(e?A.by:A.bi,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.ty,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.ab:A.bx,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b1,m.b3S(e,new C.eGa(m))],q),A.l,l,A.e,A.i,0,l,l)
o=B.m(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bW:A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.r(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(10),A.dv),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eGb(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVO(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kd()
if(a2==null)return A.bM
w=new C.eFf(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.D(1-a2.c,0.06,1)
t=A.j.D(1-a2.d,0.06,1)
s=A.j.D(1-a2.e,0.01,1)
r=A.j.D(1-a2.f,0.01,1)
q=a5?A.dZ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b1,a0.b3S(a3,a0.gbPI())],p),A.l,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fRt,B.E(B.l_(a1,a1,a1,u,0.05,new C.eFg(w,a2),A.j.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.h3b,B.E(B.l_(a1,a1,a1,t,0.05,new C.eFh(w,a2),A.j.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.d1
if(m)o.push(B.A(B.a([D.fKX,B.E(B.l_(a1,a1,a1,96,10,new C.eFi(w,a2),A.j.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.i,0,a1,a1))
l=n===D.lT
if(l||n===D.ls||n===D.TZ)A.d.u(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fXt,B.E(B.l_(a1,a1,a1,s,0,new C.eFj(w,a2),A.j.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.h4v,B.E(B.l_(a1,a1,a1,r,0,new C.eFk(w,a2),A.j.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Du[j]
i.a=null
g=h.a
i.a=g
k.push(B.jy(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pX,a1,a1,a1),a1,new C.eFl(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bX(A.bH,k,A.bt,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Do[j]
f.a=null
g=e.a
f.a=g
h.push(B.jy(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pX,a1,a1,a1),a1,new C.eFm(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.u(o,B.a([A.T,l,A.am,k,A.T,i,A.am,B.bX(A.bH,h,A.bt,a1,6,6)],p))}o.push(A.T)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eFn(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.u(o,B.a([m,A.am,B.bX(A.bH,l,A.bt,a1,6,6),A.ae,B.htS(new C.eFo(w,a2),D.cCx,B.es([a2.as],k),!0,a1,k)],p))}if(n===D.fj){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eFp(w,a2),m),m.k("ak.E"))
A.d.u(o,B.a([n,B.bX(A.bH,m,A.bt,a1,0,6)],p))}o.push(A.ae)
o.push(B.dh(D.c_e,a1,D.fZz,new C.eFq(a0,a5),B.bo(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cm(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cl:A.c
p=a4?A.xW:a1
if(a4)o=new B.bG(new B.ay(a3?A.by:A.bi,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.r(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.ty,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Cp,a1,a1,a1)},
bUx(d){return this.aVO(d,!1,!1,null)},
ce7(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c6(q,new C.eFt(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fA4,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bc,B.E(B.x(B.a([w,A.bG,A.cQ,s.bEF(D.d69,d,B.P(v).ax.a===A.H)],u),A.E,r,A.e,A.i,0,A.p),1)],u)
q=x.V
A.d.u(v,B.a([A.af,B.dO(B.h9(B.aH(!1,A.a3,!0,r,B.aP(!1,r,!0,B.eB(D.fiu,r,new B.o(r,r,B.L(A.c.j(0.55),A.r,1.3),r,B.a([new B.ab(0,A.G,A.c2.j(0.4),A.ev,8)],q),D.atF,A.a6),r,r,r),A.cW,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj),r,"Documents (Hati)",r,r),A.J)],u))
t=B.A(v,A.l,r,A.e,A.i,0,r,r)
w=s.c
w.toString
if(B.P(w).ax.a!==A.H)q=B.a7w(A.bg,20)
else{w=B.l(20)
v=B.a([D.bgl,D.bgO],x.O)
u=B.L(d.j(0.45),A.r,1.2)
q=new B.o(r,r,u,w,B.a([new B.ab(0,A.G,d.j(0.18),A.cz,14)],q),new B.a8(A.aA,A.aE,A.x,v,r,r),A.n)}return B.r(r,t,A.f,r,r,q,r,r,r,r,A.bV,r,r,r)},
asd(d,e,f,g){var w,v,u=null,t=this.c
t.toString
if(B.P(t).ax.a===A.dm){t=B.l(22)
w=A.a.q(f,"Kiapo")
v=B.a7w(w?A.bg:A.aG,22)
w=w?A.bg:A.aG
return B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.eB(B.x(B.a([new B.VO(w,48,e,u,u),A.ae,B.d(f,u,u,u,u,u,u,D.frB,A.K,u,u)],x.p),A.l,u,A.ba,A.i,0,A.p),u,v,u,A.Cx,1/0),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}t=this.fy
t===$&&B.c()
return B.c6(t,new C.eD1(this,g,d,e,f),u)},
ahS(d,e){return this.cqR(d,e)},
cqR(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b5,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eH7(d,q),p,null,!0,!0,x.N),$async$ahS)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahS,v)},
QI(d){var w=d.bT()
return""+B.bM(w)+"/"+B.bV(w)+"/"+B.bD(w)}}
C.agD.prototype={}
C.aAY.prototype={
S(){return new C.bfj(null,null)}}
C.bfj.prototype={
gcDh(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bM(u)+"/"+B.bV(u)+"/"+B.bD(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a4()
w=B.bl(u,A.qB,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bBt,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxU()},
JF(d){var w=0.12+d*0.09,v=A.j.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hR(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bHd,B.c6(new B.ha(B.a([u,w],x.dS)),new C.daY(this),v),v),v,v,v)}}
C.bfy.prototype={
B(d){var w=null,v=B.l(22),u=B.L(A.aM,A.r,1),t=x.p
return B.as(new B.D(D.bHu,B.aH(!1,A.a3,!0,w,B.r(w,B.bx(B.l(22),B.x(B.a([new B.D(D.bGF,B.x(B.a([B.r(w,D.bYT,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.h0K,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fBn,A.K,w,w)],t),A.l,w,A.e,A.i,0,A.p),w),A.e3,D.bAw,B.A(B.a([B.E(B.bP(!1,D.fPB,w,w,!0,w,w,w,new C.dbl(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bN,w,w,w,w,w,A.nH,w,A.oZ,w,w,w,w,w,w)),1),B.r(w,w,A.f,A.br,w,w,w,48,w,w,w,w,w,1),B.E(B.bP(!1,D.fV5,w,w,!0,w,w,w,new C.dbm(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nH,w,A.oZ,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.i,0,w,w)],t),A.l,w,A.e,A.P,0,A.p),A.aq),A.f,w,A9.XT,new B.o(A.as,w,u,v,D.d6x,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KP.prototype={
S(){return new C.bfi()}}
C.bfi.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.l(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ab(0,A.G,m.j(0.08),A.dM,8)],t)
s=m.j(l?0.16:0.14)
r=B.l(9)
q=p.a
r=B.r(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dO(B.d3(B.az(o,B.uM(B.cT(o,B.A(B.a([r,A.av,new B.dm(1,A.cq,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.eX:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.ba,A.P,0,o,o),o,o,A.b_,new B.o(n,o,u,v,t,o,A.n),A.eG,o,o,o,o,A.nI,o,o,1/0),A.cw,A.jp,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.daT(p,d),new C.daU(p),new C.daV(p),new C.daW(p),o,o,o,!1,A.a4),k),new B.p(0,(1-k)*16))}}
C.QK.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aH(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.f0,B.A(B.a([B.r(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.aA,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ew,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.ni,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0X.prototype={
S(){return new C.aGx(D.ds,null,null)}}
C.aGx.prototype={
gZU(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bB2,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b9i(d){if(!this.a.c.ay)return
this.x=d
this.gZU().iA(0,0)},
Y(){var w,v=this
v.a4()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axO(D.fp2)
C.imK()
v.Sb()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZU().t()
v=w.z
if(v!=null)v.a1(0)
C.axO(D.fp3)
C.imN()
w.bA1()},
cG7(){B.k_()
this.m(new C.eJN())
var w=this.c.L(x.q).f
w.a5Y()
if($.bnh)w.T(D.flQ)},
Sb(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dw(0,0,0,0,0,A.o.D(C.hs4(u,w),1,120)),new C.eJD(v))},
cFL(){var w,v=this
v.m(new C.eJM(v))
if(v.r)v.Sb()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXK(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czH(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJE(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lJ,new C.eJF(w))},
azH(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eJz(u))
u.Sb()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXK()){u.czH()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eJA(u,A.o.F(w+1,s)))
u.b9i(w)
u.Sb()}},
cpv(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJB(v))
v.Sb()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJC(v,w,t))
v.b9i(w)
v.Sb()}},
cBc(d){var w,v=this,u=v.e
if(u===D.cu){u=v.d
u===$&&B.c()
return new B.mr(d,new B.bt(u,x.ac))}w=v.cBd(u)
u=v.d
u===$&&B.c()
return B.oB(new B.mr(d,new B.bt(u,x.ac)),w,new C.eJK(),A.b_,A.b_,new C.eJL(v))},
cBd(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bBp
case 16:return A.iP
case 18:return A.mZ
default:return A.md}},
cBb(d,e,f){var w,v,u,t=null,s=B.cG(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d2(s,!1,e,t)
case 2:case 17:w=x.K
return B.jL(e,new B.bg(s,new B.br(A.tz,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 3:w=x.K
return B.jL(e,new B.bg(s,new B.br(A.Uc,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jL(e,new B.bg(s,new B.br(A.hs,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 5:w=x.K
return B.jL(e,new B.bg(s,new B.br(A.tx,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 6:case 16:w=x.b
return B.ij(A.A,new B.d2(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bQ.T>")))
case 7:w=x.b
return B.ij(A.A,new B.d2(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bQ.T>")))
case 8:return B.c6(s,new C.eJG(s),e)
case 9:return B.c6(s,new C.eJH(s),e)
case 10:return B.c6(s,new C.eJI(s),e)
case 11:return B.c6(s,new C.eJJ(s),e)
case 12:w=x.b
return new B.d2(s,!1,B.ij(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bQ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jo(B.jL(e,new B.bg(s,new B.br(A.tz,A.J,v),v.k("bg<bQ.T>")),t,!0),A.t,new C.buy(w,t))
case 15:w=x.K
return B.jL(e,new B.bg(s,new B.br(A.Uc,A.J,w),w.k("bg<bQ.T>")),t,!0)
case 19:w=B.dr()
w.n2((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fB(A.A,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eH(A.A,(1-s.gp(0))*0.2,new B.d2(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jo(new C.aq6(B.c6(n.gZU(),new C.eJO(n,v,w),m),m),A.t,m)}else{t=B.r5(new C.JN(w,!0,!1,m))
l=B.b0(w.e)
u=n.cBc(B.e9(B.jo(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.r(m,B.A(B.a([B.d(n.r?"Auto "+C.hs4(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p4,m,m,m),A.bn,D.c0l],k),A.l,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.b6,m,m,l,m,m,A.n),m,m,m,m,A.hj,m,m,m)
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
l.push(B.bS(0,new C.Ou(new C.Fq(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oU?0.5625:1.7777777777777777
l.push(B.as(new B.fJ(r,B.jo(B.v5(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bnh){r=B.IN(A.lo,new C.eJP(d),B.o3(m,A.b6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.af,B.IN(B.X(n.r?Am.uZ:A.hn,m,m,m,m,m),n.gcFK(),B.o3(m,A.b6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ap(16,B.bm(!0,B.r(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h4,m,m,m),A.f,m,m,new B.o(A.b6,m,m,r,m,m,A.n),m,m,m,m,A.hj,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.u(l,k)}l.push(B.ap(m,B.bm(!0,B.az(A.c3,B.r(A.ly,$.bnh?A.bM:s,A.f,m,m,m,m,64,m,m,D.bC8,m,m,150),A.y,!1,m,n.gcG6(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.az(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJQ(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KV.prototype={
B(d){var w=null
return B.r(w,B.bm(!0,new B.D(E.an7,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b8J,w,w,w,w,w,w,w,w)}}
C.buy.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.j.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bki.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b5v
break
default:w=B.l(6)
break}v=s.e
u=B.L(v?A.aF:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cT(r,B.as(B.r(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.x2,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b_,new B.o(s.f,r,u,w,r,r,A.n),A.h7,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aF:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bkh.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dEB.h(0,p)
if(o==null)o=D.dq_
p=p==="none"
w=p?q:new B.a8(A.a7,A.aa,A.x,o,q,q)
p=p?A.cA.j(0.25):q
v=r.e
u=v?B.L(A.aF,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.arH:q
w=B.r(q,B.r(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eA,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aF:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aMm.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aOo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAm.prototype={}
C.aOp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3L.prototype={}
C.Xn.prototype={
S(){return new C.aGv()},
bk4(d){return this.e.$1(d)}}
C.aGv.prototype={
gb7w(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabL(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7w()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQO(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7w()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8O(){return A.d.cF(this.gabL(),0,new C.eJj())},
Y(){var w,v=this
v.a4()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RM()},
RM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4m(s.c,s.f),$async$RM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eJf(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RM,v)},
JH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabL()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.I)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fVp(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pA(o,q.c,q.f),$async$JH)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ec(new C.eJi(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ce(q),$async$JH)
case 4:q=t.a
w=5
return B.b(B.pz(q.c,q.f),$async$JH)
case 5:w=6
return B.b(t.RM(),$async$JH)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JH,v)},
S9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hC(o,D.eid,!0,"NgmySlidesTransferScan",x.N),$async$S9)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eJg(t))
w=4
return B.b(C.aiM(s),$async$S9)
case 4:r=e
t.m(new C.eJh(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.fkE)
w=1
break}w=5
return B.b(t.a.bk4(r),$async$S9)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S9,v)},
JG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabL()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pA(s,r.c,r.f),$async$JG)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fVE(null,A.d.gH(n),s,t.a.f)}else q=C.fVE(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hm(q,"ngmy_slides_"+p,!1),$async$JG)
case 4:o=e
s=t.a
w=5
return B.b(B.pz(s.c,s.f),$async$JG)
case 5:w=6
return B.b(t.RM(),$async$JG)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JG,v)},
a3V(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eJk(t))
w=3
return B.b(C.bFH(),$async$a3V)
case 3:s=e
t.m(new C.eJl(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bk4(s),$async$a3V)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3V,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.H,l=m?A.bB:A.cd,k=o.gabL().length!==0,j=B.ap(n,B.r(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bY(A.A,0.5,A.x,n,0,B.a([A.bo.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cC,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eJo(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tJ],h),A.l,n,A.e,A.i,0,n,n)
w=B.l(24)
v=B.a([new B.ab(0,A.G,A.bo.j(0.35),A.eR,24)],x.V)
u=B.ap(n,B.X(A.qN,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.r(n,D.c0U,A.f,n,n,new B.o(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ew,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bMn],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.l,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.h9(B.az(A.c3,D.fix,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gckb(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.r(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a4r,A.n),n,n,n,n,E.a17,n,n,1/0),A.e3,o.azI(m,"What to transfer"),A.ae,B.A(B.a([B.E(o.b_b(A.qS,m,new C.eJp(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.b_b(D.bRh,m,new C.eJq(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.dc,o.azI(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.l(16)
s=B.L(m?A.by:A.bi,A.r,1)
v.push(B.r(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aD:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bS,n,n,n))}else A.d.u(v,new B.N(u,new C.eJr(o,m),B.U(u).k("N<1,v>")))
A.d.u(w,v)}w.push(A.ng)
w.push(o.azI(m,"Transfer options"))
w.push(A.ae)
w.push(B.A(B.a([B.E(o.asf(A.aG,k,!0,A.jL,m,o.r,o.gceb(),"Scan on another device","Show QR"),1),A.av,B.E(o.aOP(A.jX,!0,A.js,m,o.gcwo(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.A(B.a([B.E(o.bD8(A.aV,k,A.i3,m,o.r,o.gce8(),"Download .json","Backup file"),1),A.av,B.E(o.aOP(A.au,!0,AB.zB,m,o.gcIE(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.i,0,n,n))
if(k){v=A.bo.j(m?0.12:0.08)
u=B.l(16)
t=B.L(A.bo.j(0.28),A.r,1)
s=B.X(A.lP,A.bo.j(0.9),n,n,n,18)
r=o.gaQO()
q=o.gb8O()
p=o.gb8O()===1?"":"s"
A.d.u(w,B.a([A.bA,B.r(n,B.A(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.ab:A.bx,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bI,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Oz,i,n),B.E(B.cm(w,n,n,D.bFN,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.r(n,U.Yd,A.f,A.e_,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
ah2(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.itQ(s,t.d,t.e),$async$ah2)
case 2:return B.h(null,v)}})
return B.i($async$ah2,v)},
azI(d,e){var w=null,v=B.r(w,w,A.f,w,w,new B.o(A.bo,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.af,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aD:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w)},
b_b(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.as:A.c
if(g)w=A.bo
else w=e?A.by:A.bi
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bo.j(0.2),A.cz,14)],x.V):s
u=A.bo.j(g?0.2:0.1)
t=B.l(12)
t=B.r(s,B.X(d,A.bo,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aH(!1,A.a3,!0,s,B.aP(!1,r,!0,B.eB(new B.D(A.bI,B.x(B.a([t,A.W,u,A.bG,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNQ(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.as:A.c,m=B.l(16)
if(p)w=A.bo
else w=e?A.by:A.bi
w=B.L(w,A.r,p?2:1)
v=B.r(q,D.c16,A.f,q,q,new B.o(q,q,q,B.l(12),q,new B.a8(A.a7,A.aa,A.x,B.a([A.bo,A.bo.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ee:A.pt
if(p)r=A.bo
else r=e?A.aT:A.dx
return new B.D(A.cy,B.aH(!1,A.a3,!0,q,B.aP(!1,o,!0,B.r(q,B.A(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bI,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eJe(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
asf(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.by:A.bi
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.r(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.t3,s,s,s)],t)
if(i)u.push(B.ap(s,B.r(s,D.ash,A.f,s,s,D.b8v,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aH(!1,A.a3,!0,s,B.aP(!1,p,!0,B.eB(new B.D(E.a0M,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.ae,v,A.bG,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOP(d,e,f,g,h,i,j){return this.asf(d,e,!1,f,g,!1,h,i,j)},
bD8(d,e,f,g,h,i,j,k){return this.asf(d,e,!1,f,g,h,i,j,k)}}
C.Xo.prototype={
S(){return new C.bng()}}
C.bng.prototype={
Y(){this.a4()
this.afP()},
afP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fVE(null,A.d.gH(m),k,r.a.f):C.fVE(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kP(A.d.gH(n).w))C.fVp(A.d.gH(r.a.d),D.dnJ)
n=r.a
m=n.c
n=C.iqc(n.d)
w=7
return B.b(C.fVD(p,C.iqh(r.a.d),n,m,q),$async$afP)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eJs(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJt(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afP,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.H,h=i?A.bB:A.cd,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cF(k.a.d,0,new C.eJu())
v=B.aI(j,j,j,j,B.X(A.eM,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eJv(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tJ],u),A.l,j,A.e,A.i,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dq,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.r(j,B.x(B.a([r,A.T,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a4r,A.n),j,j,j,j,E.a17,j,j,1/0)
q=B.l(24)
s=B.L(A.aG.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.VB,A.K,j,j))
else if(k.d==null)r.push(D.euM)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ab(0,A.G,A.aF.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.u(p,B.a([D.fQ7,A.am,B.az(j,B.r(j,B.A(B.a([D.c2G,A.av,B.d(m,j,j,j,j,j,j,D.fBN,j,j,j)],u),A.l,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c7E,A.n),j,j,j,j,Y.amT,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eJw(k,d),j,j,j,j,j,j,!1,A.a4),A.T,D.fUC,A.aB],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.L(A.by,A.r,1)
l=k.d
l.toString
p.push(B.r(j,B.qf(j,j,!1,l,j,!0,!0,j,!1,D.bwA),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.u(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hu,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Oz,v,j),B.E(B.cb(B.x(B.a([t,A.aO,B.r(j,B.x(r,A.l,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c9D,A.n),j,j,j,j,A.uG,j,j,1/0)],u),A.l,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.anc,j,j,A.ah),1)],u),A.l,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGs.prototype={
S(){return new C.aGt(new B.au(A.ax,$.ax()),B.kc(!0,null,!0,!0,null,null,!1))}}
C.aGt.prototype={
Y(){var w=this
w.a4()
w.e.aW(0,new C.eCW(w))
$.aW.x1$.push(new C.eCX(w))},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.e.t()
this.a3()},
b1Z(){var w,v=this.c
v.toString
w=C.zj(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aF(a2,A.eT,x.w).w,i=B.l(28),h=B.L(A.bo.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bo.j(0.28),A.vv,36),D.aff],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.r(k,B.x(B.a([B.r(k,D.bYX,A.f,k,k,new B.o(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fN6,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.i,0,A.p),A.f,k,k,D.b8W,k,k,k,k,A.wy,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.a_
o=new B.aN(14,14)
if(q)n=A.bo
else n=r?A.bo.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bo.j(0.28),A.J,12)],g):k
t.push(new B.bz(1,A.bb,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fuW,k,k,k),k,k,A.b_,new B.o(s,k,new B.bG(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h7,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A_.AP)
A.d.u(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.i,0,k,k),B.bS(0,B.d3(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c5w,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.v_(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Ca(5,k),new C.bxQ()],x.aS),k,k,A.aVw,k,5,k,1,k,k,!1,"\u2022",k,new C.eCS(l),k,new C.eCT(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mA,k,k,k,k),0),0,0,0)],a1)
d=C.zj(w.a.a.toUpperCase())==null?k:l.gcec()
return B.as(new B.D(new B.R(24,24,24,24+j.f.d),B.aH(!1,A.a3,!0,k,new B.cP(Af.M5,B.r(k,B.bx(e,B.x(B.a([a0,new B.D(D.bGi,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.W,D.fLo,A.bA,new B.a5(1/0,50,B.bJ(D.h1E,k,d,B.bo(A.bo,A.br,A.an,k,A.c,k,k,k,new B.b9(B.l(16),A.a1),k,k,k)),k),A.am,B.bP(!1,A.o2,k,k,!0,k,k,k,new C.eCU(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bN,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.i,0,A.p),k)],a1),A.l,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.o(A.bB,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxQ.prototype={
p_(d,e){var w=e.a.toUpperCase()
return e.cPc(B.hk(A.bC,w.length),w)}}
C.at8.prototype={
S(){return new C.aGw(B.A_(A.NS,A.o9,A.vc))}}
C.aGw.prototype={
t(){this.d.t()
this.a3()},
b1Y(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j3(w,d)},
abG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h3L(s),$async$abG)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1Y("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abG,v)},
cea(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=C.iqf(w[u])
if(t!=null){this.b1Y(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.wY,s,s,s,t.gbSf(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eQ(B.a([r,B.aI(s,s,s,s,B.X(q?A.uR:An.PA,s,s,s,s,s),s,s,s,new C.eJy(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bB,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h2R,s,s,s,1,s,!0)
r=B.zZ(t.d,A.c0,t.gce9())
w=B.l(28)
w=B.as(B.r(s,s,A.f,s,s,new B.o(s,s,B.L(A.bo,A.r,3),w,B.a([new B.ab(2,A.G,A.bo.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ap(32,B.r(s,D.fRe,A.f,s,s,new B.o(v,s,B.L(A.bo.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jq,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.by3.prototype={
B(d){var w=null,v=B.l(24),u=B.L(A.aM,A.r,1)
return B.aH(!1,A.a3,!0,w,B.r(w,B.x(B.a([B.r(w,H.arW,A.f,w,w,D.b8F,w,56,w,w,w,w,w,56),A.aO,D.h2y,A.am,new B.k6(this.c,new C.fkk(),w,w,x.cI),A.aO,new B.k6(this.d,new C.fkl(),w,w,x.cl),A.ae,D.h2w],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,Af.M5,new B.o(A.as,w,u,v,w,w,A.n),w,w,w,K.a1d,D.bGW,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a98.prototype={
S(){return new C.bn_(A.bF)},
gd1(){return this.c}}
C.bn_.prototype={
Y(){var w=this
w.a4()
if(w.a.d)return
w.a0b()
w.d=B.dg(A.fL,new C.erb(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a0b(){return this.csK()},
csK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.er9(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.clW(p.c),$async$a0b)
case 6:r=e
q.a=r==null?A.bF:r
case 4:if(t.c==null){w=1
break}t.m(new C.era(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0b,v)},
bUo(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.v(w),2,"0")+"m "+A.a.b_(A.o.v(v),2,"0")+"s left"
return A.a.b_(A.o.v(w),2,"0")+":"+A.a.b_(A.o.v(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ay:A.c2
w=v.j(0.14)
u=B.l(14)
t=B.L(v.j(0.55),A.r,1)
return B.r(r,B.A(B.a([B.X(A.Hq,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bUo(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A1.alZ,A.hM,r,r,1/0)}}
C.aa1.prototype={
nx(){var w,v,u,t=this
t.y_()
w=t.cx
v=t.c
w.buo(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.ql(B.J(["/S",D.eyv,"/URI",new B.t2(B.XZ(w.as),A.vy,!0)],x.N,u),u))}}
C.aa2.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b5q.prototype={
bC7(d,e,f,g,h,i,j,k,l,m){var w=B.es([D.ewO],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSG(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.kb(w,new C.cpQ(),B.a4(w).k("kb<ci.E,H>")).f1(0,new C.cpR())},
aFd(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hi(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u3(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jt(d.a,d.b))
s.n(0,"/Border",B.u3(H.au1))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h7(t.gcSG()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.ql(w,x.Y))}}
C.cpS.prototype={}
C.a4l.prototype={}
C.ajJ.prototype={}
C.aTB.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lC(d)
q.MF(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjp(w)
u=x.N
t=x.Y
s=new C.cpS(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bC7(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.ql(B.J(["/Type",D.eyt],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.aa1(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.I(0,r)
v.dx.push(r)}}
C.ayN.prototype={}
C.aV2.prototype={
fV(d){var w,v,u,t,s=this
s.lC(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ej(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LO(t)
u.Tr(0)
u.po(0,v)
w.fV(d)
u.nA(0)}}}
var z=a.updateTypes(["aB<~>()","~(m3)","Q(hT)","~()","Q(eR)","Q(oP)","Q(m3)","~(hT)","Q(eR,eR)","KV(Z)","Q(oc)","Q(lw)","aB<Q>()","H(H,hT)","ai<Ai>()","n(oc)","Q(a9p)","n(m3)","n(wC)","Q(Fz)","H(hT,hT)","a9<n,@>(hT)","n(eR)","v(eR)","cK(eR)","v(hI)","~(hI)","eR(n,G,G,G,G,G{align:qq,anim:hI,bullets:Q,color:H?,delay:H,fx:n,key:n,style:IG,weight:o0})","eR(n,G,G,G,G,G,H{align:qq,style:IG,weight:o0})","eR(n,G,H)","~(ai<oP>)","Q(Ai)","Q(n,ai<Ai>)","H(oP,oP)","oc()","a9<n,@>(oP)","a2k(Z)","eR(vl,G,G,G,G,H{fx:n,key:n,rotation:G})","eR(n,G,G,G,G{anim:hI,delay:H,fx:n,key:n})","a_2(Z)","aB<~>(oP)","Q(mS)","a1Q(Z)","a1P(Z)","a_0(Z)","a0d(Z)","eR(vl,G,G,G,G,H,n,n{anim:hI,delay:H,rotation:G,stroke:H,strokeWidth:G})","eR(n,G,G,G,G,G,n,n,H)","eR(G,G,n,H{size:G})","Qz(Z)","lw()","v(rR,G,G)","oP(a9<@,@>)","Fz()","fk(eR)","v(jd)","a_L(Z)","~(Fq)","a05(Z)","H(eR,eR)","eR(eR)","a9<n,@>(eR)","eR(a9<@,@>)","m3(m3)","a9<n,@>(m3)","m3(a9<@,@>)","Q(k2)","k2()","~(vb)","n(hT)","V(ai<hT>)","V(hT)","Q(n,hT)","aeK(Z)","~(Q(eR,eR))","ae8(Z,H)","aeN(Z)","u(m3,Q)","agt(Z,H)","aeQ(Z)","Xb(Z)","~(mV)","hT(hT)","G(eR)","Xc(Z)","a0X(Z)","hT()","a1j(Z)","aB<~>(ai<hT>)","v(bB<H,hT>)","D(k2)","D(Fz)","aB<~>(hI,~())","v(ai<hI>,hI?,~(hI),u)","ai<FW>()","ai<jI<mV>>(Z)","jI<mV>(mV)","hT(a9<@,@>)","Xn(Z)","Q(mu)","Xo(Z)","v(hT)","~(mm)","JN(Z,m3,v?)","H(aa2)","aB<ai<a9<n,@>>?>()","n(n)","aB<Ah>({paper:n?,photo:dL?,request:n,template!lz})","aB<a9h>({doc!Ah,history:ai<+(n,n)>,instruction!n,photo:dL?,template!lz})","ai<hT>(n?)"])
C.cP7.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:59}
C.cP8.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:71}
C.cP9.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galF(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mF(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:71}
C.cPa.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bUe.prototype={
$1(d){return J.eF(A.dS.gaV(d),d.byteOffset,d.byteLength)},
$S:1694}
C.fHA.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iY(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iY(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iY(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iY(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1695}
C.c49.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:31}
C.c4a.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:43}
C.c4c.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fYC.prototype={
$1(d){return new C.a2k(this.a,this.b,C.ir7(),null)},
$S:z+36}
C.fiN.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fiR.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fiS.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fiT.prototype={
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
C.fiO.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fiP.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fiQ.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fiI.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.ht,w,w,w)
return B.eg(B.a([B.bP(!1,E.aXG,w,w,!0,w,w,w,new C.fiG(d),w,w),B.bP(!1,D.fOA,w,w,!0,w,w,w,new C.fiH(d),w,w)],x.p),w,w,D.a_u,v,w,w,w,w,D.h39,w)},
$S:18}
C.fiG.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fiH.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fiJ.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fiK.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fiX.prototype={
$0(){var w=this.a
return w.m(new C.fiW(w,this.b))},
$S:0}
C.fiW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fiM.prototype={
$0(){var w=this.a
return w.m(new C.fiL(w,this.b,this.c))},
$S:0}
C.fiL.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.I(0,v)},
$S:0}
C.fiU.prototype={
$0(){return this.a.a2j(this.b)},
$S:0}
C.fiV.prototype={
$0(){return this.a.PO(0,this.b)},
$S:0}
C.fj_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fj0.prototype={
$0(){var w=this.a
return w.m(new C.fiZ(w,this.b))},
$S:0}
C.fiZ.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.u(0,new B.N(w,new C.fiY(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fiY.prototype={
$1(d){return d.a},
$S:z+69}
C.fqw.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hpc(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cF)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.oP(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+52}
C.fqx.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fKN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.I)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbt())q=n===o.gbt()&&p.b>o.gcG()}if(q)v.n(0,s,t)}},
$S:z+30}
C.fKL.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fKM.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+33}
C.fY4.prototype={
$1(d){return d.aj()},
$S:z+35}
C.fHe.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fYY.prototype={
$1(d){return new C.a_2(this.a,null)},
$S:z+39}
C.cQu.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+41}
C.cQw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQz.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQy())},
$S:11}
C.cQy.prototype={
$0(){},
$S:0}
C.cQB.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3j(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bj(s,new C.cQx(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiV(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:278}
C.cQx.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQC.prototype={
$1(d){},
$S:28}
C.cQv.prototype={
$1(d){return new C.a_0(this.b,this.a.gcCD(),null)},
$S:z+44}
C.cQD.prototype={
$1(d){return D.hwE},
$S:z+49}
C.cQq.prototype={
$1(d){var w=null,v=B.l(24),u=B.L(D.a_0,A.r,1),t=x.p
return B.as(B.aH(!1,A.a3,!0,w,B.r(w,B.x(B.a([new B.D(D.bGI,B.x(B.a([B.r(w,D.bW5,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fNx,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fAF,A.K,w,w)],t),A.l,w,A.e,A.i,0,A.p),w),A.e3,new B.D(A.qG,B.A(B.a([B.E(B.dU(D.fUE,new C.cQo(d),B.di(w,w,w,w,w,w,w,w,w,E.nB,w,w,A.co,w,new B.b9(B.l(14),A.a1),D.b5X,w,w,w,w)),1),A.av,B.E(B.bJ(D.h_T,w,new C.cQp(d),B.bo(A.bD,w,w,w,w,w,A.co,w,new B.b9(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.i,0,w,w),w)],t),A.l,w,A.e,A.P,0,A.p),A.f,w,A.xZ,new B.o(D.ah2,w,u,v,D.dbr,w,A.n),w,w,w,K.a1d,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1696}
C.cQo.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cQp.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cQr.prototype={
$0(){return J.nU(this.a.d,new C.cQn(this.b))},
$S:0}
C.cQn.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQm.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.L(D.a_0,A.r,1),q=x.p
q=B.a([B.A(B.a([B.r(t,D.c0c,A.f,t,t,new B.o(t,t,t,B.l(14),t,D.atA,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aXl,t,t,t),A.bG,D.h_O],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.l,t,A.e,A.i,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dzA[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azK(u[1],u[2],u[3],new C.cQk(v,d),!1,t))}q.push(A.am)
q.push(D.bAz)
q.push(A.am)
q.push(new C.azK(A.ek,"Delete book","Remove it from this device",new C.cQl(d),!0,t))
return B.bm(!0,B.r(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.ah2,t,r,s,t,t,A.n),t,t,t,A.uB,A.GW,t,t,t),!0,!1,A.ag,!0,!0)},
$S:25}
C.cQk.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cQl.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cQt.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aMy,12)],x.V)
return B.dO(B.eH(A.A,e,B.r(w,B.bx(B.l(4),new B.a5(62,95.81818181818181,B.ex(A.A,F.apS(d),A.f,A.dE),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.p(f,0))},
$S:z+51}
C.cQs.prototype={
$0(){return this.a.c8i()},
$S:0}
C.cQj.prototype={
$0(){return this.a.b0n(0,this.b)},
$S:0}
C.cQi.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQh.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQE.prototype={
$2(d,e){var w=this.a
return w.bGJ(J.t(w.d,e))},
$S:42}
C.cPL.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bq()},
$S:0}
C.cPK.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3w("Page "+(v.length+1),"",""))},
$S:0}
C.cPN.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPV.prototype={
$0(){},
$S:0}
C.cPW.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cPO.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cU.gcu().aO(this.c)},
$S:0}
C.cPM.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPQ.prototype={
$0(){return this.a.Ri(this.b)},
$S:0}
C.cPR.prototype={
$0(){return this.a.Ri(this.b)},
$S:0}
C.cPS.prototype={
$0(){var w=this.a
w.m(new C.cPP(this.b))
w.EE()},
$S:0}
C.cPP.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPT(w,d))
w.EE()},
$S:z+68}
C.cPT.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQ0.prototype={
$2(d,e){if(d)this.a.Bq()},
$S:128}
C.cPX.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bq(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fng)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cPY.prototype={
$0(){return this.a.b_i(this.b,-1)},
$S:0}
C.cPZ.prototype={
$0(){return this.a.b_i(this.b,1)},
$S:0}
C.cQ_.prototype={
$0(){return this.a.c9F(0,this.b)},
$S:0}
C.fPm.prototype={
$1(d){return C.hzp()},
$S:44}
C.fPn.prototype={
$1(d){return null},
$S:28}
C.fuS.prototype={
$1(d){return null},
$S:28}
C.fQl.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:288}
C.fQk.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:232}
C.fQr.prototype={
$1(d){var w=this.a
return C.hhd(d)===w||C.hEg(d)===w},
$S:z+4}
C.ftU.prototype={
$1(d){return A.a.b_(A.o.v(d),2,"0")},
$S:78}
C.cg1.prototype={
$1(d){return d.length!==0},
$S:3}
C.cg2.prototype={
$2(d,e){return C.hWF(d,e)},
$S:z+72}
C.cg4.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.t(t,"at")
v=B.bh(J.k(w==null?"":w))}else v=null
w=J.t(d.b,"at")
u=B.bh(w==null?"":w)
if(u!=null)w=v==null||u.ca(v)
else w=!1
return w},
$S:1697}
C.fPk.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fPl.prototype={
$1(d){return C.fS4(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fK9.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fVg,A.T,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,D.fPd,new C.fK7(d),B.bo(A.c2,w,w,w,A.w,w,A.co,w,w,w,w,w)),A.W,B.en(A.v6,D.fWy,new C.fK8(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,R.xX,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fK7.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fK8.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fKa.prototype={
$1(d){var w=null
return B.eg(B.a([B.bP(!1,D.fLe,w,w,!0,w,w,w,new C.fK5(d),w,w),B.bJ(D.h2c,w,new C.fK6(d),w)],x.p),w,w,w,D.h48,w,w,w,w,D.fL7,w)},
$S:18}
C.fK5.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fK6.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ems.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.emq.prototype={
$0(){return this.a.e=!0},
$S:0}
C.emr.prototype={
$0(){return this.a.f=!0},
$S:0}
C.emt.prototype={
$0(){return this.a.r=!1},
$S:0}
C.emu.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fQq.prototype={
$1(d){return A.a.b_(A.o.v(d),2,"0")},
$S:78}
C.fQm.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a7,w,w,B.C_(A.A,B.r(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1698}
C.fQo.prototype={
$1(d){var w=null,v=B.l(3)
return B.r(A.A,B.d(d,w,w,w,w,w,w,D.fC2,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:133}
C.fQp.prototype={
$1$size(d){var w=null
return B.A(B.a([B.r(w,w,A.f,w,w,new B.o(w,w,B.L(A.ix,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dO(B.r(w,w,A.f,w,w,new B.o(w,w,B.L(A.ix,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.p(-d*0.38,0))],x.p),A.l,w,A.ba,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1699}
C.fQn.prototype={
$2$female$size(d,e){var w=null,v=d?D.aji:this.a,u=B.L(A.ix,A.r,1),t=e*0.32,s=B.ap(w,B.r(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.r(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ap(e*0.06,B.r(w,w,A.f,w,w,new B.o(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ahk,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1700}
C.h1x.prototype={
$1(d){return new C.aeK(this.a,this.b,null)},
$S:z+73}
C.e8R.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bxb:A.Nk,q=B.L(D.jC.j(0.25),A.r,1),p=B.as(B.r(t,t,A.f,t,t,new B.o(A.c2.j(0.45),t,t,B.l(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.l(15)
o=B.r(t,D.asg,A.f,t,t,new B.o(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.jC.j(0.35),A.ev,10)],x.V),D.cag,A.n),t,t,t,t,A.yL,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.r(t,B.x(B.a([new B.D(Q.a13,B.x(B.a([p,A.aB,B.A(B.a([o,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.m(t,t,s?A.c:D.jC,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fBc,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.l,t,A.e,A.i,0,t,t)],u),A.l,t,A.e,A.i,0,A.p),t),B.E(B.is(!0,t,e,A.y,D.aUA,new C.e8Q(w,this.c),v,D.amN,t,A.ah,!1),1)],u),A.l,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mJ,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:118}
C.e8Q.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ae8(w,new C.e8P(this.b,w),null)},
$S:z+75}
C.e8P.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fKd.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fKe.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fYT,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKb(d),B.bo(D.jC,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.W,B.en(A.oL,D.Wc,new C.fKc(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,R.xX,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fKb.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKc.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fKh.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fKi.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fMh,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKf(d),B.bo(D.jC,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.W,B.en(A.oL,D.Wc,new C.fKg(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,R.xX,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fKf.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKg.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fKl.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fKm.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fT0,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKj(d),B.bo(D.jC,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.W,B.en(A.oL,D.Wc,new C.fKk(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,R.xX,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fKj.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKk.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h34.prototype={
$1(d){return D.hBL},
$S:z+76}
C.ere.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bnz:A.Nk,s=B.L(A.aC.j(0.25),A.r,1),r=B.as(B.r(v,v,A.f,v,v,new B.o(A.aC.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.r(v,D.c2C,A.f,v,v,new B.o(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.c2.j(0.35),A.ev,10)],x.V),D.atF,A.n),v,v,v,v,A.yL,v,v,v)
w=x.p
return B.r(v,B.x(B.a([new B.D(Q.a13,B.x(B.a([r,A.aB,B.A(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:A3.Ng,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fyz,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.l,v,A.e,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),v),B.E(B.is(!0,v,e,A.y,D.aUA,new C.erd(this.b),19,D.amN,v,A.ah,!1),1)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mJ,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.erd.prototype={
$2(d,e){var w=D.SU[e]
return new C.agt(w,new C.erc(this.a,w),null)},
$S:z+78}
C.erc.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fS8.prototype={
$0(){return B.hg5(C.ief(this.a))},
$S:345}
C.fS7.prototype={
$0(){var w=C.hhw(this.a)
return"data:image/png;base64,"+A.cU.gcu().aO(w)},
$S:23}
C.fsa.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ju(d,e),new B.ju(w,e+v),new B.ju(d+f*14,e),new B.ju(w,e-v)],x.J)
B.a3e(this.a,C.fI(4291404327),v)},
$S:677}
C.h3f.prototype={
$1(d){return new C.Xb(this.a,null)},
$S:z+80}
C.eub.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eua())},
$S:29}
C.eua.prototype={
$0(){},
$S:0}
C.euc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eu9(w,d))},
$S:1702}
C.eu9.prototype={
$0(){return this.a.x=J.eU(A.dS.gaV(this.b))},
$S:0}
C.eud.prototype={
$1(d){},
$S:28}
C.etO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etK.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etV.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etW.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eJd)},
$S:0}
C.etX.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etQ.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cf)},
$S:0}
C.etR.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.etS.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.etT.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etU.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iz)}},
$S:8}
C.etP.prototype={
$0(){var w=this.a,v=w.z,u=C.fSR(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOl(C.fSR(t))},
$S:0}
C.etM.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.etN.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eu2.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.eu3.prototype={
$0(){var w=this.a
return w.m(new C.eu1(w))},
$S:0}
C.eu1.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eu4.prototype={
$0(){var w=this.a
return w.m(new C.eu0(w,this.b))},
$S:0}
C.eu0.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.eu5.prototype={
$1(d){var w=this.a
return w.m(new C.eu_(w))},
$S:9}
C.eu_.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eu6.prototype={
$1(d){var w=this.a
return w.m(new C.etZ(w))},
$S:9}
C.etZ.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eu7.prototype={
$0(){var w=this.a
return w.m(new C.etY(w,this.b))},
$S:0}
C.etY.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.eu8.prototype={
$1(d){return this.a.a_Y()},
$S:2}
C.etL.prototype={
$0(){return this.a.cds(this.b)},
$S:0}
C.cjO.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:346}
C.cjM.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.cjN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRJ.prototype={
boG(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bUd(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.I)(e),++t){s=e[t]
r.cKC($.rm().jp(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mZ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boG(d,e)},
$S:1703}
C.fQ0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQ2.prototype={
$1(d){var w=this.a.a
w=A.d.aN(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fQ1.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fs(t,A.ct,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.re,A.bX,t,A.dD,A.bY)
v=this.a
w.o8(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.frJ.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.frK(),B.U(w).k("Y<1>")).gJ(0)},
$S:260}
C.frK.prototype={
$1(d){return d.length!==0},
$S:3}
C.frH.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:224}
C.frI.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:224}
C.cjP.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCy()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hhc(i,new B.F(!0,h,a6,k,a6,a6,q,A.cZ,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hdM(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aN(n.gclQ(),"\n\n")
d=B.fs(a6,A.ct,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afE(k,q,1.28),j),A.re,A.bX,a6,A.dD,A.bY)
d.o8(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hhc(i,new B.F(!0,h,a6,k,a6,a6,q,A.cZ,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hdM(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afE(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.r(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bb,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.re,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCx(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.u(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:402}
C.cjQ.prototype={
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
n=o.gaCy()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hhc(f,new B.F(!0,e,a5,i,a5,a5,h,A.cZ,A.bs,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hdM(g.length===0?B.a([a6],n):g,l))break}a1=o.afE(i,h,1.28)
a2=new C.cjR(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kx,new B.a5(v,a5,a4.f,a5),A.Kx,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bJ6,B.r(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bb,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.re,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCx(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.u(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.ae,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.l,a5,A.e,A.i,0,A.p)},
$S:148}
C.cjR.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.re,w,w),w)},
$S:678}
C.h3i.prototype={
$1(d){return new C.Xc(this.a,this.b,null)},
$S:z+84}
C.euY.prototype={
$1(d){return d.ld()},
$S:1705}
C.euZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euX(w,d))},
$S:1706}
C.euX.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.euL.prototype={
$0(){return this.a.y=!0},
$S:0}
C.euM.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euS.prototype={
$0(){return B.a6(this.a,!1).eA()},
$S:0}
C.euT.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bE,A.r,2.5)
return B.az(w,B.r(w,B.b2(w,w,w,new C.bex(u,v.gazA(),w),A.fR),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euQ(v),new C.euR(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.euQ.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:246}
C.euR.prototype={
$1(d){var w=this.a
w.m(new C.euN(w,d,this.b,this.c))},
$S:233}
C.euN.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.D(s.x*r.d,1,6)
w=s.gazA()
r=r.a
v=t.c
u=t.d
s.r=A.j.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.euU.prototype={
$1(d){var w=this.a
return w.m(new C.euP(w,this.b))},
$S:9}
C.euP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euV.prototype={
$1(d){var w=this.a
return w.m(new C.euO(w,d))},
$S:6}
C.euO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euW.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h3y.prototype={
$1(d){return D.hEy},
$S:z+87}
C.f3Y.prototype={
$1(d){return this.a.Zx()},
$S:8}
C.f2Q.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cU.gcu().aO(v)},
$S:0}
C.f3d.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f3n.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f2z.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2A.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2x.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2y.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f36.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f37(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jo(B.r5(q>0.2?F.bXE(r,new B.Ew(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jo(B.d3(B.r5(F.bXE(s.$1(!0),new B.Ew(12,12,A.x))),w*0.75),A.t,v))
s=t.b8
if(s!=null&&t.b6>0)q.push(B.e9(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b3l,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bk,v,v))}s=t.aL
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b34,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bk,v,v))
s=t.aR
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.a8(A.b0,A.b7,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d9Y,v),A.n),A.bk,v,v))
if(t.aH>0){s=t.k1
q.push(B.ap(v,new B.bN(new B.o(v,v,v,v,v,new B.a8(A.b0,A.b7,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.dlZ,v),A.n),A.bk,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.e9(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(new B.bN(new B.o(v,v,v,v,v,new B.bY(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.diK,v),A.n),A.bk,v,v))
t=t.aG
if(t>0)q.push(B.b2(v,v,v,new C.bi8(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:67}
C.f37.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fU(r.b,A.A,q,q,A.ck,A.c0,!0,q,!1,q,q),o=r.a,n=o.aZV(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bm
v=o.aP
u=v-1
t=o.bH
s=o.c5?-1:1
return B.dO(B.e1(A.A,B.eH(A.A,l,B.fB(A.A,new B.BM(new B.uV(q,q,n,A.ya),p,q),q,B.wp(s,o.cP?-1:1,1),!0),q),v*w,q,q),new B.p(-m*r.d*u/2,-t*r.c*u/2))},
$S:493}
C.f3j.prototype={
$0(){return this.a.m(new C.f3i(this.b,this.c))},
$S:0}
C.f3i.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3k.prototype={
$1(d){return this.a.m(new C.f3h(this.b,d))},
$S:6}
C.f3h.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3m.prototype={
$0(){return this.a.m(new C.f3l(this.b,this.c))},
$S:0}
C.f3l.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2p.prototype={
$1(d){return d.c===this.a.x},
$S:z+99}
C.f2q.prototype={
$1(d){var w=this.a
return w.m(w.gcE0())},
$S:2}
C.f2r.prototype={
$1(d){return this.a.m(new C.f2o())},
$S:2}
C.f2o.prototype={
$0(){},
$S:0}
C.f2s.prototype={
$0(){var w=this.a
return w.m(new C.f2n(w,this.b))},
$S:0}
C.f2n.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f2u.prototype={
$2(d,e){return A.av},
$S:37}
C.f2t.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.by
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b_,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b7,A.x,r,w,w),A.n),A.h7,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fF,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2m(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.f2m.prototype={
$0(){var w=this.a
return w.m(new C.f2j(w,this.b))},
$S:0}
C.f2j.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f2v.prototype={
$1(d){var w=this.a
return w.m(new C.f2l(w,d))},
$S:9}
C.f2l.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f2w.prototype={
$1(d){var w=this.a
return w.m(new C.f2k(w,d))},
$S:9}
C.f2k.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f3N.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f3U.prototype={
$1(d){var w=this.a
return w.m(new C.f3V(w,d))},
$S:32}
C.f3V.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f3W.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:172}
C.f3O.prototype={
$0(){var w=this.a
return w.m(new C.f3M(w,this.b))},
$S:0}
C.f3M.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.I(0,v)},
$S:0}
C.f3P.prototype={
$0(){var w=this.a
return w.m(new C.f3L(w,this.b))},
$S:0}
C.f3L.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.u(0,u)},
$S:0}
C.f3Q.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f3K(v,w.b,w.c,w.d))},
$S:0}
C.f3K.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.u(0,w)},
$S:0}
C.f3R.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gti(v))},
$S:0}
C.f3S.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f3T.prototype={
$0(){var w=this.a
return w.m(new C.f3J(w))},
$S:0}
C.f3J.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.f3w.prototype={
$1(d){return d.a===this.a.dy},
$S:218}
C.f3x.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aBS[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azE(new B.ns(new B.be(n,n,n,n),A.aq,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.a7,A.aa,A.x,m,j,j),A.n),A.bk,new C.b1C(l,B.b0(k==null?v.w.x:k),A.j.D(w,12,26),j),j),j),u,q.b,o===p,new C.f3v(r,v),2,i))}return B.bX(A.bH,h,A.bt,j,7,7)},
$S:177}
C.f3v.prototype={
$0(){var w=this.b
return w.m(new C.f3q(this.a,w))},
$S:0}
C.f3q.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f3y.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:156}
C.f3B.prototype={
$0(){var w=this.a
return w.m(new C.f3u(w))},
$S:0}
C.f3u.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f3C.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f3D.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f3E.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f3F.prototype={
$0(){var w=this.a
return w.m(new C.f3t(w))},
$S:0}
C.f3t.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f3G.prototype={
$0(){var w=this.a
return w.m(new C.f3s(w))},
$S:0}
C.f3s.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f3H.prototype={
$0(){var w=this.b
return w.m(new C.f3r(this.a,w))},
$S:0}
C.f3r.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f3I.prototype={
$1(d){return this.a.fx=d},
$S:156}
C.f3z.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f3A.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f3a.prototype={
$0(){var w=this.a
return w.m(new C.f39(w))},
$S:0}
C.f39.prototype={
$0(){var w=this.a
w.p4=null
w.b6d()},
$S:0}
C.f3b.prototype={
$0(){var w=this.a
return w.m(new C.f38(w,this.b))},
$S:0}
C.f38.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f3c.prototype={
$0(){var w=this.a
return w.m(w.gcun())},
$S:0}
C.f32.prototype={
$0(){var w=this.a
return w.m(new C.f31(w))},
$S:0}
C.f31.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f33.prototype={
$0(){var w=this.a
return w.m(new C.f30(w))},
$S:0}
C.f30.prototype={
$0(){var w=this.a
w.aH=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f34.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dja[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azE(new B.ns(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BM(new B.uV(o,o,v.aZV(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.ya),B.fU(u,A.A,140,o,A.ck,A.c0,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f3_(v,s),3,n))}return B.bX(A.bH,m,A.bt,o,10,8)},
$S:177}
C.f3_.prototype={
$0(){var w=this.a
return w.m(new C.f2Z(w,this.b))},
$S:0}
C.f2Z.prototype={
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
C.f2H.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f2I.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f2J.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f2K.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f2L.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f2M.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f2N.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f2O.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f2P.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f22.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f23.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f24.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f25.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f26.prototype={
$0(){var w=this.a
return w.m(new C.f21(w))},
$S:0}
C.f21.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f27.prototype={
$1(d){return this.a.b8=d},
$S:156}
C.f28.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f2B.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f2C.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f2D.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f2E.prototype={
$1(d){return this.a.bf=d},
$S:156}
C.f2F.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f2c.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f2d.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f2e.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f2f.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f2g.prototype={
$0(){var w=this.a
return w.m(new C.f2b(w))},
$S:0}
C.f2b.prototype={
$0(){var w=this.a
return w.c8=A.j.F(w.c8+90+180,360)-180},
$S:0}
C.f2h.prototype={
$0(){var w=this.a
return w.m(new C.f2a(w))},
$S:0}
C.f2a.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f2i.prototype={
$0(){var w=this.a
return w.m(new C.f29(w))},
$S:0}
C.f29.prototype={
$0(){var w=this.a
return w.cP=!w.cP},
$S:0}
C.f35.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iuv(v,w.p4)},
$S:0}
C.f2Y.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bxv:B.fU(v,A.A,w,w,A.ck,A.c0,!1,w,!1,w,w)
return C.fQ8(d.length===0?"rounded":d,u,e)},
$S:122}
C.f2U.prototype={
$0(){var w=this.a
return w.m(new C.f2T(w))},
$S:0}
C.f2T.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f2V.prototype={
$0(){var w=this.b
return w.m(new C.f2S(this.a,w))},
$S:0}
C.f2S.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f2W.prototype={
$0(){var w=this.b
return w.m(new C.f2R(this.a,w))},
$S:0}
C.f2R.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f2X.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.D(w.ay,0,1-d)
w.ch=A.j.D(w.ch,0,0.95)},
$S:6}
C.f3g.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ab(-4,A.G,A.b8.j(0.35),A.J,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eo(n.cnM(),n.r))
l.push(new C.JN(n.cAW(),!1,!1,t))
o=B.bS(0,B.bx(o,new B.eo(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.r(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ap(t,B.az(A.c3,new B.bN(new B.o(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bk,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f3f(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:178}
C.f3f.prototype={
$1(d){var w=this.a
return w.m(new C.f3e(w,d,this.b,this.c))},
$S:19}
C.f3e.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f3p.prototype={
$0(){var w=this.a
return w.m(new C.f3o(w,this.b))},
$S:0}
C.f3o.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f2G.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f3X.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1Q(),B.E(B.as(w.b4R(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSO(),1),w.aOQ()],v),A.l,t,A.e,A.i,0,A.p),1)],v),A.l,t,A.e,A.i,0,t,t)}u=A.j.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1Q(),new B.D(A.hL,B.as(s.b4R(u),t,t,t),t),B.E(s.aSO(),1),s.aOQ()],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:667}
C.fNp.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eu(k,!1,j,A.aH,"",4280640491,i,l,m,"",h,C.bDB(),null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.cu,D.d1,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bs,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,A.U)},
$S:z+28}
C.fNo.prototype={
$3(d,e,f){var w=this,v=C.bDB(),u=w.b?A.I:A.cE,t=w.c?A.cK:A.bs
return C.eu(w.d,!1,f,A.aH,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bm,4280172719,2,d,0,w.f,w.e,D.cu,D.d1,0.82,0.09,w.a)},
$S:z+29}
C.clj.prototype={
$1(d){return B.w(d)},
$S:17}
C.fVe.prototype={
$0(){return this.a},
$S:z+14}
C.fzM.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+31}
C.fzN.prototype={
$2(d,e){return J.ct(e)},
$S:z+32}
C.fVg.prototype={
$0(){return B.a([],x.o)},
$S:z+14}
C.fVj.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fVk.prototype={
$0(){return A.d.gH(D.x6)},
$S:z+34}
C.fVc.prototype={
$1(d){return d.a},
$S:z+15}
C.fVf.prototype={
$1(d){return d.a},
$S:z+15}
C.fT9.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fTa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fTb.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fNt.prototype={
$0(){return C.cE()},
$S:23}
C.fNw.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cu,s=u?n:0
return C.eu(j,l,v,A.aH,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bm,4280172719,2,d,s,0,"",t,D.d1,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,"","",A.bs,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,"",j,A.bs,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,j,k,A.bs,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bs,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bs,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.ds,!1,k,l,"",m,A.bs,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,!1,null,0,"",k,A.bs,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,j,k,"",l,A.bs,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,!1,k,0,l,m,A.bs,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,k,l,m,"",n,A.bs,A.a8)},
$S:z+27}
C.fNv.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eu(A.bp,!1,4279310375,A.aH,"",i,24,A.bs,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cu,D.fj,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+37}
C.fNu.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cu,t=v?j:0
return C.eu(A.bp,!1,4279310375,A.aH,"",4280640491,24,A.bs,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bm,4280172719,2,"",t,0,"",u,D.lT,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r4,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+38}
C.fNs.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.fPU.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hAs.c3(0,A.a.i(s.w).toLowerCase(),new C.fPS(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fPT(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.brj(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fPS.prototype={
$0(){return F.aPX(this.a.w)},
$S:200}
C.fPT.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCt("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hE(2,w,A.ca,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:200}
C.frD.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.frE.prototype={
$1(d){return d.a},
$S:z+17}
C.frF.prototype={
$1(d){return d.b},
$S:z+18}
C.h3K.prototype={
$1(d){return D.hFj},
$S:z+42}
C.fak.prototype={
$0(){return this.a.x=C.i5d(this.b,this.c.b)},
$S:0}
C.fal.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.fai.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:444}
C.faj.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:444}
C.fah.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.as,null,new C.fac(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kh,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.fad(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hGK(o,m.cP7(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.fae(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.fac.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.fag(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.r(p,D.bdG,A.f,p,p,D.b8o,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Do:D.Du,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fQ8(v,i.b6Q(h),u),p)))}t=B.kZ(1,m,4,10,10,p,A.dZ,!0)
if(!l)return B.bm(!0,new B.D(Ab.yS,t,p),!0,!1,A.ag,!0,!0)
s=new C.faf(i,d)
m=B.aF(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Il[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,m.a.b*0.85),B.cb(B.x(B.a([D.fRn,A.W,t,A.e3,D.fc8,A.aw,D.h1x,A.W,B.kZ(1.15,l,3,10,10,p,A.dZ,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yS,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:25}
C.fag.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bg:A.dr
return B.az(w,B.r(w,e,A.f,w,w,new B.o(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hN,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.fab(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1710}
C.fab.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.faf.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bL:A.by
r=B.L(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.r(v,B.bx(w,d.length===0?B.r(v,D.asN,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.du(!0,new C.Ou(u.Gf(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bL:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.faa(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:122}
C.faa.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.fad.prototype={
$0(){var w=this.a
return w.w=w.w.Gf("")},
$S:0}
C.fae.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fa0.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.fa1.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.fa3.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.fa4.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.fa5.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.fa6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fa2(w,d))},
$S:2}
C.fa2.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.fa7.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.fay.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.faz.prototype={
$0(){var w=this.a
return w.m(new C.fax(w))},
$S:0}
C.fax.prototype={
$0(){return this.a.e=null},
$S:0}
C.faA.prototype={
$0(){var w=this.a
return w.m(new C.faw(w))},
$S:0}
C.faw.prototype={
$0(){return this.a.x=null},
$S:0}
C.faC.prototype={
$1(d){var w=this.a
return w.m(new C.fav(w,d))},
$S:35}
C.fav.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.faD.prototype={
$1(d){var w=this.a
return w.m(new C.fau(w,d))},
$S:35}
C.fau.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.faE.prototype={
$0(){var w=this.a
return w.m(new C.fat(w))},
$S:0}
C.fat.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.faF.prototype={
$1(d){var w=this.a
return w.m(new C.fas(w,d))},
$S:35}
C.fas.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.faG.prototype={
$1(d){var w=this.a
return w.m(new C.far(w,d))},
$S:35}
C.far.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.faH.prototype={
$0(){var w=this.a
return w.m(new C.faq(w))},
$S:0}
C.faq.prototype={
$0(){var w=this.a
return w.w=w.w.Gf("")},
$S:0}
C.faI.prototype={
$0(){var w=this.a
return w.m(new C.fap(w,this.b))},
$S:0}
C.fap.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.faJ.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSX(D.a6i[v]),null))
return B.bX(A.bH,t,A.bt,null,8,8)},
$S:177}
C.faB.prototype={
$1(d){var w=this.a
return w.m(new C.fao(w,d))},
$S:9}
C.fao.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.fa8.prototype={
$0(){var w=this.a
return w.m(new C.fa9(w,this.b,this.c))},
$S:0}
C.fa9.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.I(0,w)},
$S:0}
C.fan.prototype={
$0(){var w=this.a
return w.m(new C.fam(w,this.b))},
$S:0}
C.fam.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h3J.prototype={
$1(d){return new C.a1P(this.a,this.b,null)},
$S:z+43}
C.f9U.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f9V.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f9W.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aLS?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f9X.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f9Y.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9T(w,d))},
$S:2}
C.f9T.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f9Z.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.fa_.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hk(A.bC,w.length),A.aP))},
$S:0}
C.fz2.prototype={
$1(d){return d.a===this.a},
$S:218}
C.eqE.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazF(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d3o:D.dlG
t=A.wk.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=A.wk.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bS(0,B.b2(q,q,q,new C.bkp(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bS(0,B.bUu(B.eH(A.A,0.5,B.r(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a7,A.aa,A.x,B.a([A.L,D.blC.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.p(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.r(q,B.bx(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ee:A.mn,A.wk,q,q,q,20),A.aw,B.ex(A.A,B.oh(A.jT,D.fKB,new C.eqD()),A.f,A.e7)],r),A.l,q,A.e,A.P,0,A.p),q,q,q),B.ap(q,B.r(q,D.fH_,A.f,q,q,new B.o(A.wk,q,q,B.l(6),q,q,A.n),q,q,q,q,O.anw,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.aA,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:86}
C.eqD.prototype={
$1(d){return D.c8q.aK(0,d)},
$S:70}
C.fVl.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fVm.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:218}
C.fVn.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1711}
C.fVo.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:13}
C.fVh.prototype={
$1(d){return d.a},
$S:z+17}
C.fVi.prototype={
$1(d){return d.b},
$S:z+18}
C.h2X.prototype={
$1(d){return new C.a0d(this.a,this.b,null)},
$S:z+45}
C.dto.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dtp.prototype={
$1(d){return d.a===this.a.gajX()},
$S:z+10}
C.dtq.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dtt.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dtu.prototype={
$0(){var w=this.a
return w.m(new C.dts(w,this.b))},
$S:0}
C.dts.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dtv.prototype={
$1(d){var w=this.a
return w.m(new C.dtr(w,d))},
$S:9}
C.dtr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqC.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cX(w,0,B.dB(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1712}
C.fnF.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eu(A.bp,!1,4279310375,A.aH,"",i,24,A.bs,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fj,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cu,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+46}
C.fnH.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eu(A.K,!1,this.b.d,A.aH,"",4280640491,i,A.bs,A.cZ,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bm,4280172719,2,d,l,0,"",D.nd,D.d1,g,e,f)},
$S:z+47}
C.fnG.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xg(0,"twinkle")
w=t===D.bm?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.nd,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+48}
C.fnE.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fOA.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fOB.prototype={
$0(){return A.d.gH(D.Iv)},
$S:z+50}
C.fOC.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fq_.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fUO.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bm,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bm,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bm,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fP,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUP.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bm,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bm,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bm,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fP,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fP,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUQ.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bm,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.kf,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.kf,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fP,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fV0.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.kf,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.kf,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.ke,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bm,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fV5.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.ke,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bm,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fP,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bm,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fV6.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.kf,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bm,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fP,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fV7.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d2f[w]
u=Date.now()
t=$.je
$.je=t+1
v=new C.eR("design_"+(""+1000*u+"_"+t),D.fj,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.bm,v,4294967295,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lq
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fP,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fV8.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mW,A.dn,w/3).l()
u=Date.now()
t=$.je
$.je=t+1
v=new C.eR("design_"+(""+1000*u+"_"+t),D.fj,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.E7,v,2450411,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lq
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fP,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fV9.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bm,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.ke,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fP,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVa.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bm,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bm,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fP,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.kf,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bm,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVb.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.kf,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bm,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bm,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUR.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.ke,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.ke,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fP,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fUS.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.ke,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.ke,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.ke,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.f2,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fUT.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bm,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bm,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.kf,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.ke,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fP,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fUU.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bm,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.ke,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.ke,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fP,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fUV.prototype={
$1(d){var w=4279080072,v=2450411
C.dz(d,C.dA(w,0.14,0,D.lt,v,0,0.14,0.68,0.18))
C.dz(d,C.dA(4279548070,0.14,0,D.lt,v,0,0.14,0.78,0.28))
C.dz(d,C.dA(4281193663,0.14,0,D.lt,v,0,0.14,0.68,0.38))
C.dz(d,C.dA(4284410580,0.14,0,D.lt,v,0,0.14,0.78,0.48))
C.dz(d,C.dA(4279203438,0.14,0,D.lt,v,0,0.14,0.68,0.58))
C.dz(d,C.dA(w,0.006,0,D.fP,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUW.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.kf,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.f2,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fP,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUX.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mW,A.dn,w/3).l()
u=Date.now()
t=$.je
$.je=t+1
v=new C.eR("design_"+(""+1000*u+"_"+t),D.fj,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.E7,v,2450411,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lq
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bm,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fP,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUY.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.je
$.je=u+1
u=new C.eR("design_"+(""+1000*v+"_"+u),D.fj,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bs,A.aH,s,A.bp,null,D.fP,t,t,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lq
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bm,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bm,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fP,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUZ.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bm,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bm,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bm,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bm,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bm,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fP,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fV_.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.je
$.je=t+1
t=new C.eR("design_"+(""+1000*u+"_"+t),D.fj,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bs,A.aH,r,A.bp,null,D.bm,4294967295,4280640491,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lq
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.db,A.cm,w/2).l()
t=Date.now()
s=$.je
$.je=s+1
u=new C.eR("design_"+(""+1000*t+"_"+s),D.fj,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bs,A.aH,r,A.bp,null,D.bm,u,q,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lq
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bm,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.ke,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fV1.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.kf,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.kf,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.kf,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.kf,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bm,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.f2,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fV2.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bm,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.f2,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.f2,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.f2,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.kf,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fV3.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bm,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bm,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bm,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.f2,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fP,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.je
$.je=u+1
u=new C.eR("design_"+(""+1000*v+"_"+u),D.fj,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bs,A.aH,4279310375,A.bp,null,D.f2,16777215,t,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lq
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fV4.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.kf,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.kf,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bm,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bm,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fMq.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fMr.prototype={
$0(){return A.d.gH($.bHf())},
$S:z+53}
C.fyl.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fyk.prototype={
$1(d){return C.idb(d,this.a,this.b)},
$S:z+54}
C.fVu.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wp(1.0375,1.01875,1)
return new B.fY(v,u,new C.aV2(B.i2a(A.vX,C.ide(w.c,w.d,v,u),t)))},
$S:447}
C.e45.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.e44.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.jo(new B.an(A.a0,w,A.b2,A.t,B.a([new B.bN(new B.o(w,w,w,w,w,new B.bY(A.Fk,1.2,A.x,w,0,u.d,w,w),A.n),A.bk,w,w),new B.eo(B.b2(w,w,w,new C.bhd(u.a,s,r,s),A.az),w),B.as(new B.k6(s,new C.e43(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:326}
C.e43.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e2.aA(0,A.j.D(e/1.4,0,1)),p=A.j.D(e/0.9,0,1),o=A.j.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.u(j,B.a([B.r(r,B.hY(B.fU(i,A.A,r,r,A.ck,A.c0,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.h1(A.A,0,6.283185307179586,A.x,t,r,new B.mN(e*0.8)),A.a6),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bu9(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.J,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dO(B.x(B.a([B.r(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a7,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNs(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.P,0,A.p),new B.p(0,(1-o)*m*0.03)),o))
return B.d3(B.e1(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.l,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:103}
C.f96.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aE,A.x,this.a.c,B.a([0,A.j.D(w-0.1,0,1),A.j.D(w,0,1),A.j.D(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:70}
C.cfD.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bL:A.by
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.ib.j(0.4),A.J,14)],x.V):v
w=B.cT(v,B.bx(B.l(12),d,A.aq),v,v,A.b_,new B.o(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fF,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bL:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1713}
C.cfE.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gf(""))},
$S:0}
C.cfF.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.du(!0,new C.Ou(v.Gf(u),!0,!1,null),null),d.b,new C.cfG(w,this.c,d),v.a===u)},
$S:z+55}
C.cfG.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hGK(u.b,t.c.Gf(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h1h.prototype={
$1(d){return new C.a_L(this.a,null)},
$S:z+56}
C.diC.prototype={
$0(){var w=this.a
w.d=w.gwk().bf6("data:"+this.b+";base64,"+A.cU.gcu().aO(this.c));++w.r},
$S:0}
C.diH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.diI.prototype={
$0(){var w=this.a
return w.m(new C.diG(w))},
$S:0}
C.diG.prototype={
$0(){return this.a.r++},
$S:0}
C.diJ.prototype={
$1(d){var w=this.a
return w.m(new C.diF(w,d))},
$S:2}
C.diF.prototype={
$0(){var w=this.a
return w.d=w.gwk().aG6(this.b)},
$S:0}
C.diK.prototype={
$0(){var w=this.a
return w.m(new C.diE(w))},
$S:0}
C.diE.prototype={
$0(){var w=this.a
return w.d=w.gwk().bf6("")},
$S:0}
C.diL.prototype={
$1(d){var w=this.a
return w.m(new C.diD(w,d))},
$S:2}
C.diD.prototype={
$0(){var w=this.a
return w.d=w.gwk().bfc(this.b)},
$S:0}
C.diM.prototype={
$0(){var w=this.a
w=w.gwk().bfc(w.gazG().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h1g.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h1f(w),null)},
$S:20}
C.h1f.prototype={
$2(d,e){var w=null,v=this.a
return B.r(w,B.bm(!0,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.85),B.cb(B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fZy,A.aw,D.fZO,A.aB,new C.b1z(v.a,new C.h1e(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b8X,w,w,w,w,A.Oj,w,w,w)},
$S:173}
C.h1e.prototype={
$1(d){this.b.$1(new C.h1d(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+57}
C.h1d.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h3I.prototype={
$1(d){return D.hyU},
$S:z+58}
C.dpq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dpr.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dps.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fS1.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.D(w-0.12,0,1),A.j.D(w,0,1),A.j.D(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:70}
C.dij.prototype={
$3(d,e,f){var w,v=this,u=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c7(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c7(w,q+p,w,q+p*1.2))
u.E(new B.DU(B.bZ(new B.p(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.p(w,o),2.2,p)},
$S:455}
C.fS5.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+59}
C.fKp.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fKq.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yV,B.x(B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fHh,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I2,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKn(d),B.bo(A.c2,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.W,B.en(A.oL,D.Wc,new C.fKo(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,R.xX,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fKn.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fKo.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.clh.prototype={
$1(d){return d.hQ()},
$S:z+60}
C.cli.prototype={
$1(d){return d.aj()},
$S:z+61}
C.clg.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.j.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.j.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.j.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i8K(b2.h(0,"type"))
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
n=A.aE0[A.o.D(b4,0,8)]
m=D.d5u[A.o.D(w,0,1)]
l=C.icA(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.aAj[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ifo(b2.h(0,"shape"))
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
a3=C.hBz(b2.h(0,"textTransition"))
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
return C.eu(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+62}
C.cl6.prototype={
$1(d){return d.hQ()},
$S:z+63}
C.cl7.prototype={
$1(d){return d.aj()},
$S:z+64}
C.cl3.prototype={
$1(d){return B.w(d)},
$S:17}
C.cl4.prototype={
$1(d){return B.w(d)},
$S:17}
C.cl5.prototype={
$1(d){return C.hs5(B.a2(d,x.N,x.z))},
$S:z+65}
C.cly.prototype={
$1(d){return d.a===this.a},
$S:z+66}
C.clz.prototype={
$0(){return A.d.gH(D.a5U)},
$S:z+67}
C.clt.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.cls.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.clo.prototype={
$1(d){return new B.N(d,new C.clp(),B.U(d).k("N<1,V>")).f1(0,new C.clq())},
$S:z+70}
C.clp.prototype={
$1(d){return d.f},
$S:z+71}
C.clq.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:682}
C.clr.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hYV(d)},
$S:z+109}
C.clu.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.clv.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.clw.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fSJ.prototype={
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
C.fSF.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fSG.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fSH.prototype={
$2(d,e){var w
if(d.b===D.d1){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fSI.prototype={
$2(d,e){return d.b===D.fj&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.clc.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.iou(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cF(new B.b8(b4,b5),new C.clb(),b5.k("M.E"),x.N)
w=B.d0(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qx.aA(0,A.j.D(b1,0,1))
u=new C.cld()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cle(a9,b7.d)
r=new C.clf(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.I)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jE.aA(0,A.j.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kJ(A.j.D(1-k,0,1),B.dO(B.e1(A.A,r.$1(l),1-k*0.06,a8,a8),new B.p(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.I)(b2),++m){i=b2[m]
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
if(a2===D.fj){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lT&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kJ(A.j.D(o,0,1),r.$1(l),a8),new B.kJ(A.j.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iV(B.wT(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cu)a7=D.nd
p.push(s.$5(i.c,i.d,i.e,i.f,C.hE5(a7,a6,r.$1(i))))}}return new B.bN(new B.o(a8,a8,a8,a8,a8,new B.a8(A.a7,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bk,new B.an(A.a0,a8,A.ad,A.t,p,a8),a8)},
$S:456}
C.clb.prototype={
$1(d){return d.a},
$S:z+22}
C.cld.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+77}
C.cle.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1717}
C.clf.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a97(v,C.b3I(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dR_.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e1(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cll.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.clm.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fVB.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:290}
C.fUI.prototype={
$1(d){return new C.aeQ(this.a,this.b,null)},
$S:z+79}
C.eCY.prototype={
$0(){return this.a.QH(this.b,C.isq(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QH(this.b,C.iss(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eD_.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QH(this.b,C.isr(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eD0.prototype={
$0(){A2.hDQ()
B.a6(this.a,!1).O(null)},
$S:0}
C.cla.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1718}
C.cl9.prototype={
$2(d,e){var w,v=this,u=null,t=B.dP(d,A.o5),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.D(p*Math.max(B.jk(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c0:A.dE
return B.fU(t,A.A,o,new C.cl8(),A.ck,w,!0,u,!1,new B.bt("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1719}
C.cl8.prototype={
$3(d,e,f){return D.afK},
$S:236}
C.fSE.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.aA,A.aE,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cX(r,0,B.dB(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fSD(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,new B.bN(new B.o(v,t,t,t,t,w,A.n),A.bk,new B.an(A.a0,t,A.ad,A.t,r,t),t),A.aq)},
$S:1720}
C.fSD.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3I(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fB5.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fB3(d))
w=B.aF(d,A.c1,x.w).w
v=B.l(22)
u=B.L(A.by,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.h2,28)],x.V)
s=x.p
return new B.d2(e,!1,B.as(B.aH(!1,A.a3,!0,q,B.r(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jP,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bP(!1,A.B3,q,q,!0,q,q,q,new C.fB4(p,d),q,B.fv(q,q,A.bo,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ct,q,new B.b9(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.i,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.as,q,u,v,t,q,A.n),q,q,q,A.ha,A.H0,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:271}
C.fB3.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pZ())B.a6(w,!0).eA()},
$S:0}
C.fB4.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eA()},
$S:0}
C.fhH.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dO(u.b,new B.p((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dO(u.b,new B.p(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dO(u.b,new B.p(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dO(u.b,new B.p(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fB(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kn(r*3.14159)
return B.fB(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.kn(r*0.5)
return B.fB(A.A,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fB(A.aa,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(B.e1(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aLF(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aLF(1-r,t))],x.p),t)
case 16:v=A1.Y6.aA(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(B.e9(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n2(r*6.28)
s.k5(r,r,r,1)
return B.fB(A.A,u.b,t,s,!0)
case 20:return B.eH(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:66}
C.e1P.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.e1O.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.e1N.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hE5(v,w,e)},
$S:66}
C.cl2.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a7,A.aa,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cK>")
q=B.C(new B.N(v,new C.cl1(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bN(new B.o(t,r,r,r,r,u,A.n),A.bk,new B.an(A.a0,r,A.ad,A.f,q,r),r)},
$S:456}
C.cl1.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cu?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a97(m,new C.Ws(d,C.b3I(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dfw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dfv(w))},
$S:11}
C.dfv.prototype={
$0(){return this.a.d++},
$S:0}
C.eqk.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aTA.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.iob(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ej(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.kn(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fB(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.e1(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.p(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e1(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:66}
C.f6B.prototype={
$1(d){var w
$.S()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dT
return w},
$S:1721}
C.fQ9.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdA()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.bu2(u,t,r),A.az))
w.push(B.nX(s.d,A.aq,new C.bhK(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bsZ(u,q,t,r),A.az))
return B.as(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:223}
C.fEd.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:288}
C.eJc.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.DE(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dL(s,new C.eJa(),new C.eJb(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1722}
C.eJa.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:198}
C.eJb.prototype={
$0(){return J.fp(this.a)},
$S:1724}
C.eFA.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFB.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFC.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eHa.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGZ.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eH_.prototype={
$1(d){return d.hQ()},
$S:z+82}
C.eEY.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eIi.prototype={
$0(){this.a.ug()},
$S:0}
C.eJ8.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KR()},
$S:0}
C.eH8.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KR()},
$S:0}
C.eIW.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIX.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eIY.prototype={
$1(d){return d.a},
$S:z+22}
C.eIZ.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.ax())},
$S:245}
C.eJ_.prototype={
$0(){return B.kc(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eEm.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eJ9.prototype={
$0(){},
$S:0}
C.eGh.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()
w.KR()},
$S:0}
C.eEk.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yf()},
$S:0}
C.eEl.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yf()},
$S:0}
C.eGE.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eGF.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()
w.KR()
w.z="Home"},
$S:0}
C.eGG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGg.prototype={
$1(d){var w=null
return B.eg(B.a([B.bP(!1,A.Wb,w,w,!0,w,w,w,new C.eGf(d),w,w)],x.p),w,w,w,D.h0p,w,w,w,w,D.fHL,w)},
$S:18}
C.eGf.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGd.prototype={
$1(d){var w=null
return B.eg(B.a([B.bP(!1,A.Wb,w,w,!0,w,w,w,new C.eGc(d),w,w)],x.p),w,w,w,D.fLZ,w,w,w,w,D.fJC,w)},
$S:18}
C.eGc.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGe.prototype={
$0(){},
$S:0}
C.eFw.prototype={
$1(d){return this.a.b3d(C.bFg(d))},
$S:z+7}
C.eFx.prototype={
$1(d){return this.a.agx(C.bFg(d))},
$S:z+7}
C.eGn.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.r(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.h0t,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bA,new C.QK(A.wL,D.aBI,"HATI YA KUHOWA","Hati ya mahari",new C.eGi(d),w),A.W,new C.QK(A.ho,D.djc,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eGj(d),w),A.W,new C.QK(A.hP,D.d3t,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eGk(d),w),A.W,new C.QK(A.ik,D.d1u,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eGl(d),w)],v)
if(this.a.gZ1())A.d.u(u,B.a([A.W,new C.QK(A.ja,D.cNf,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eGm(d),w)],v))
return B.bm(!0,B.cb(B.x(u,A.al,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yV,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:25}
C.eGi.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eGj.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eGk.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eGl.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eGm.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eGo.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()},
$S:0}
C.eEo.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eEp.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.u(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nw(r,v.f+1,q);++v.f
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
C.eGz.prototype={
$1(d){return d.b===D.lT},
$S:z+4}
C.eGA.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eGx(w,this.a,v),null)},
$S:20}
C.eGx.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eGy(p,o,a3,n),l=B.P(a2).ax.a===A.H,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.br:A.cd,h=l?A.a_:A.c,g=B.l(28),f=B.L(l?A.by:A.bi,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aI(q,q,q,q,B.X(A.cC,j,q,q,q,q),q,q,q,new C.eGt(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Du[w]
v.a=null
t=v.a=u.a
a1.push(new C.bki(t,u.b,p.a===t,i,k,new C.eGu(v,m),q))}a1=B.bX(A.bH,a1,A.bt,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Do[w]
s.a=null
t=s.a=r.a
u.push(new C.bkh(t,r.b,p.b===t,k,j,new C.eGv(s,m),q))}return B.bm(!0,B.r(q,B.cb(B.x(B.a([d,A.aO,a0,A.W,a1,A.bA,v,A.W,B.bX(A.bH,u,A.bt,q,12,12),A.bA,new B.a5(1/0,48,B.en(D.c4n,D.h2T,new C.eGw(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aF,q,q,q,q,new B.b9(B.l(16),A.a1),D.b6t,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uB,D.bFs,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eGy.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eGr(w.a,d,e))
w.b.dc(new C.eGs(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1727}
C.eGr.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eGs.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eGt.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGu.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eGv.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eGw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.HA(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eGq(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGq.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eGC.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGD.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eGB(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yf()},
$S:0}
C.eGB.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGU.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eGV.prototype={
$1(d){return d.w},
$S:z+83}
C.eGW.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eGX.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.H,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.br:A.aS,q=u?A.a_:A.c,p=B.l(28),o=B.L(u?A.by:A.bi,A.r,1),n=B.aF(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.r(v,B.x(B.a([B.A(B.a([B.r(v,D.bYJ,A.f,v,v,D.b7P,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aI(v,v,v,v,B.X(A.cC,s,v,v,v,v),v,v,v,new C.eGR(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.i,0,v,v),A.aB,new B.dm(1,A.cq,B.hS(v,new C.eGS(m,k,w.c,s,w.d,t,r),k.length,A.fn,v,A.ah,new C.eGT(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uB,A.a0X,v,v,v),!0,!1,A.ag,!0,!0)},
$S:25}
C.eGR.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGT.prototype={
$2(d,e){return A.ae},
$S:37}
C.eGS.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aF:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cE
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.c15,q,q,q,new C.eGP(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bHI,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bA(q,new B.b6(4,B.l(16),A.a1),q,A.f0,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b68),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGQ(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:687}
C.eGP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iuE(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oc(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hk(A.bC,o+s.length),A.aP))
l.akA(k,m)
l.pM()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGQ.prototype={
$1(d){var w=this.a
w.akA(this.b.a,d)
w.pM()},
$S:2}
C.eGY.prototype={
$0(){},
$S:0}
C.eGp.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEF.prototype={
$0(){},
$S:0}
C.eEG.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hFr(this.b,w,!0)
w=this.a
w.r=null
w.yf()},
$S:0}
C.eEH.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEI.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eEE(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yf()},
$S:0}
C.eEE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eH3.prototype={
$1(d){return B.pj(new C.eH2(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:132}
C.eH2.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.an9,B.x(B.a([D.fYV,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.is(!0,w,e,A.y,D.fj5,new C.eH1(this.a,this.b),20,A.uF,w,A.ah,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:459}
C.eH1.prototype={
$2(d,e){var w=null,v=D.Iv[e],u=C.hYQ(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.r(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fN,w,w,w)],m)
if(u)A.d.u(n,B.a([A.bn,B.r(w,D.fc4,A.f,w,w,new B.o(A.dO.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n3,w,w,w)],m))
return B.aH(!1,A.a3,!0,w,B.aP(!1,t,!0,B.r(w,B.x(B.a([B.A(n,A.l,w,A.e,A.i,0,w,w),A.b1,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a7,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH0(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eH0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.clk(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH4.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()},
$S:0}
C.eDi.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t1(4294967295,null,0,0,null,C.cE(),D.nc,"","","",D.ds),s=this.b
C.clx(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.E6){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eED.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.je
$.je=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hs5(q));++v.f},
$S:0}
C.eEB.prototype={
$0(){var w=this.a
A.d.cH(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eHc.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cH(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eEx.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.eEw(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eEw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHb.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eEn.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.ax())},
$S:245}
C.eEZ.prototype={
$0(){return B.kc(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eIU.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIV.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avA(w).fW()
v=u.Xz(w)
v.stY(B.hk(A.bC,v.a.a.length))},
$S:8}
C.eIj.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yz(v)
if(u!=null&&u.b===D.d1)w.Xz(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eDj.prototype={
$0(){var w=C.cE(),v=this.a,u=C.eu(A.bp,!1,v.gqV().e.l(),A.aH,"",4280640491,24,A.bs,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bm,4280172719,2,"Tap to edit text",0,0,"",D.cu,D.d1,0.7,0.15,0.2)
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eDg.prototype={
$0(){var w=C.cE(),v=this.a,u=C.eu(A.bp,!1,4279310375,A.aH,"",v.gqV().c.j(0.25).l(),24,A.bs,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqV().c.l(),2,"",0,0,"",D.cu,D.fj,0.25,0.3,0.3)
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eD6.prototype={
$0(){var w=C.eu(A.bp,!1,4279310375,A.aH,"",4280640491,24,A.bs,A.a8,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lT,0.6,0.2,0.18),v=this.a
A.d.I(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eD3.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.cbp],x.p)
for(w=J.aT(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gald().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dH(!1,r,r,r,!0,r,r,r,!0,r,r,D.bWo,r,r,r,r,new C.eD2(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cm(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:25}
C.eD2.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eD4.prototype={
$0(){var w=A.j.D(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.aw(u.aj(),null),s=C.eu(A.bp,!1,4279310375,A.aH,u.b,4280640491,24,A.bs,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bm,4280172719,2,t,0,0,"",D.cu,D.a8D,w,0.5-w/2,0.07)
t=this.a
A.d.I(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eEz.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eEA.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gdB().z,new C.eEy(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eEy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDL.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.d1)s.Q=t.c.l()
else if(w===D.fj){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDM(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.I)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDM.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDQ.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDR(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.I)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDR.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDO.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.d1){s.Q=t.c
return}w=new C.eDP(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.I)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDP.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eI(w,new C.eDN()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDN.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eDK.prototype={
$0(){return C.clx(this.b,this.c,this.a.gqV())},
$S:0}
C.eGO.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eJ2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJ3.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eJ4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJ5.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bj(s,new C.eJ1(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTc()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yf()
t.KR()}},
$S:0}
C.eJ1.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eIz.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acQ(),s=w.b,r=u.acR(A.fr,A.jM,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.T,r,A.bA,B.r(v,B.A(B.a([B.E(u.aXR(w.c,A.an),1),new B.D(A.fM,B.r(v,D.bWt,A.f,v,v,new B.o(A.fr.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aXR(s,A.fr),1)],n),A.l,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.aA,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bI,v,v,v),A.bA,u.aXU(A.fr,d,D.bSz,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.u(p,B.a([A.W,u.c1s(A.aG,d,A.uS,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXS(d,"Not now"))
return new C.KV(B.x(p,A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eIy.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KV(B.x(B.a([v.acQ(),A.T,v.acR(A.aG,D.bSe,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.42),B.hS(w,new C.eIw(v,u,d),u.length,w,w,A.ah,new C.eIx(),!0),w),A.aB,v.aXS(d,"Cancel")],x.p),A.al,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eIx.prototype={
$2(d,e){return A.W},
$S:37}
C.eIw.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aH(!1,A.a3,!0,w,B.aP(!1,u,!0,B.r(w,B.A(B.a([B.r(w,D.asg,A.f,w,w,new B.o(w,w,w,B.l(12),w,D.c8m,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ni,w,w,w),A.cQ,B.d("Updated "+this.a.QI(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIv(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eIv.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eIs.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acQ()
t=t.acR(A.au,A.v4,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KV(B.x(B.a([s,A.T,t,A.bA,B.A(B.a([B.E(B.dU(A.ac7,new C.eIq(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.co,u,new B.b9(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.av,B.E(B.bJ(D.fKc,u,new C.eIr(d),B.bo(A.fr,u,u,u,A.c,u,A.co,u,new B.b9(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eIq.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eIr.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eIu.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acQ(),s=w.b,r=u.acR(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awU("Names",""+w.c),1),A.af,B.E(u.awU("Fields",""+w.d),1),A.af,B.E(u.awU("Signatures",""+w.e),1)],q),A.l,v,A.e,A.i,0,v,v),o=B.bo(A.bo,v,v,v,A.c,v,A.yI,v,new B.b9(B.l(14),A.a1),v,v,v)
return new C.KV(B.x(B.a([t,A.T,r,A.aO,p,A.bA,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.o0,v,v,v),v,new C.eIt(d),o),A.W,u.aXT(d,"Stay here",!1)],q),A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eIt.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eFs.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eFr.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eIk.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eIT.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0X(A.d.dL(w.d,new C.eIR(v),new C.eIS(v)).hQ(),w.f,null)},
$S:z+85}
C.eIR.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIS.prototype={
$0(){return this.a},
$S:z+86}
C.eDb.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bI,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h4,w,w,w),w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYh,w,w,w,w,new C.eD9(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fIa,w,w,w)],x.p)
if(v>1)t.push(B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZy,w,w,w,w,new C.eDa(d),!1,w,w,w,w,w,D.h49,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eD9.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eDa.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eDc.prototype={
$0(){var w=this.b,v=w.c,u=C.eu(A.bp,!1,4279310375,A.aH,v,4280640491,24,A.bs,A.a8,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bm,4280172719,2,v,0,0,"",D.cu,D.TZ,0.88,0.06,0.08)
v=this.a
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eDd.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.je
$.je=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.je
$.je=k+1
m.push(new C.eR(""+1000*l+"_"+k,D.TZ,0.04,0.06,0.92,0.88,v,24,A.a8,A.bs,A.aH,4279310375,A.bp,u,D.bm,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cu,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.m3(""+1000*p+"_"+o,r+n,"",D.r3,4294967295,null,D.ds,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eDh.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kP(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eu(A.bp,!1,4279310375,A.aH,t,4280640491,24,A.bs,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.ls,0.35,0.55,0.62)
A.d.I(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eD8.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5V(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eu(A.bp,!1,4279310375,A.aH,"marriage_sign_placed_"+A.a.eo(v.db,"marriage_sign_",""),4280640491,24,A.bs,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.ls,s,u,t)
A.d.I(p.gdB().z,q)
A.d.bq(p.gdB().z,new C.eD7(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.inT(p)}},
$S:0}
C.eD7.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eH9.prototype={
$0(){var w=this.a,v=this.b
w.b5V(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eJ0.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eFv.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bq(r.z,new C.eFu())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eFu.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDU.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDV.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ug()},
$S:8}
C.eD5.prototype={
$0(){var w=C.eu(A.bp,!1,4279310375,A.aH,"HD Photo",4280640491,24,A.bs,A.a8,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.cu,D.lT,0.8,0.1,0.1),v=this.a
A.d.I(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEX.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eDe.prototype={
$0(){var w=this.a,v=this.b
A.d.I(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eDn.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eDo.prototype={
$0(){var w=this.b.hQ(),v=C.cE(),u=A.j.D(w.c+0.04,0,0.92),t=A.j.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eu(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.I(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eDp.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eDm(v))
if(u>=0&&u<w.length-1){A.d.cH(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eDm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDA.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eDl(v))
if(u>0){A.d.cH(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eDl.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDD.prototype={
$0(){return this.a.as=A.bp},
$S:0}
C.eDE.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eDF.prototype={
$0(){return this.a.as=A.e4},
$S:0}
C.eDG.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eDH.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eDI.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eDJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDq.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.I(v,C.DJ(w.gqV().c.j(0.18).l(),0.1,u,D.bm,0,2,1,0,0))
u=w.gdB().z
v=C.cE()
A.d.I(u,C.j8(A.bp,!1,w.gqV().d.l(),A.aH,18,A.bs,A.I,0.07,v,"Document Header",0,D.ds,0.9,0.05,0.02))},
$S:0}
C.eDr.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cE()
A.d.I(u,C.DJ(v.gqV().c.j(0.12).l(),0.1,t,D.bm,0,2,1,0,0.9))
t=v.gdB().z
u=C.cE()
w=C.bG_()
A.d.I(t,C.j8(A.K,!1,v.gqV().e.l(),A.aH,12,A.bs,A.a8,0.06,u,"Footer \xb7 "+w,0,D.ds,0.9,0.05,0.92))},
$S:0}
C.eDs.prototype={
$0(){A.d.I(this.a.gdB().z,C.DJ(1727914055,0.12,C.cE(),D.bm,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eDt.prototype={
$0(){var w=4279310375
A.d.I(this.a.gdB().z,C.DJ(w,0.08,C.cE(),D.bm,w,2,0.5,0.2,0.4))},
$S:0}
C.eDu.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.I(v,C.DJ(w.gqV().c.j(0.35).l(),0.12,u,D.E7,4280640491,2,0.2,0.15,0.55))
A.d.I(w.gdB().z,C.j8(A.bp,!1,4279310375,A.aH,18,A.bs,A.a8,0.15,C.cE(),"Important note",0,D.r4,0.5,0.38,0.52))},
$S:0}
C.eDv.prototype={
$0(){var w=this.a
A.d.I(w.gdB().z,C.DJ(4294507260,0.78,C.cE(),D.bm,4291548641,1.5,0.84,0.08,0.1))
A.d.I(w.gdB().z,C.j8(A.bp,!1,4279179050,A.aH,16,A.bs,A.a8,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bG_()+"\n\nSubject:\n\nBody text\u2026",0,D.ds,0.76,0.12,0.14))},
$S:0}
C.eDw.prototype={
$0(){var w=this.a
A.d.I(w.gdB().z,C.DJ(4294897802,0.28,C.cE(),D.bm,4294626325,2,0.3,0.62,0.12))
A.d.I(w.gdB().z,C.j8(A.bp,!1,4285611794,A.aH,15,A.bs,A.a8,0.24,C.cE(),"Sticky note",0,D.aLG,0.26,0.64,0.14))},
$S:0}
C.eDx.prototype={
$0(){var w=4280640491,v=this.a
A.d.I(v.gdB().z,C.DJ(4293060848,0.04,C.cE(),D.bm,4291548641,2,0.8,0.1,0.48))
A.d.I(v.gdB().z,C.DJ(w,0.04,C.cE(),D.bm,w,2,0.55,0.1,0.48))},
$S:0}
C.eDy.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,18,A.bs,A.a8,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ju,0.42,0.06,0.18))
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,18,A.bs,A.a8,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vo,0.42,0.52,0.18))},
$S:0}
C.eDz.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.DJ(858088427,0.62,C.cE(),D.bm,4280640491,2,0.42,0.05,0.18))
A.d.I(v.gdB().z,C.DJ(856004201,0.62,C.cE(),D.bm,4278556265,2,0.42,0.53,0.18))
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,20,A.bs,A.I,0.1,C.cE(),"Option A",0,D.ds,0.36,0.08,0.2))
A.d.I(v.gdB().z,C.j8(A.bp,!1,w,A.aH,20,A.bs,A.I,0.1,C.cE(),"Option B",0,D.ds,0.36,0.56,0.2))},
$S:0}
C.eDB.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.DJ(4294967295,0.36,C.cE(),D.bm,w,2,0.24,0.38,0.28))
A.d.I(v.gdB().z,C.j8(A.K,!1,w,A.aH,14,A.bs,A.a8,0.12,C.cE(),"[ QR CODE ]",0,D.ds,0.24,0.38,0.4))},
$S:0}
C.eDC.prototype={
$0(){return C.clx(this.b,D.U_,this.a.gqV())},
$S:0}
C.eEW.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.aaw.q(0,d),t=this.a
return t.bb7(d,v===d,A.b3,this.c,new C.eEV(t,u,d,w),u)},
$S:z+25}
C.eEV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGK(r,new C.eEU(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEU.prototype={
$0(){return this.a.dc(new C.eET(this.b,this.c))},
$S:0}
C.eET.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eDf.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t1(4294967295,null,0,0,null,C.cE(),D.nc,"","","",D.ds),s=this.b
C.clx(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.E6){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iuH(p,q.d,s,new C.eDX(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ug(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDX.prototype={
$1(d){return this.bo6(d)},
bo6(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDW(t,d))
w=2
return B.b(t.ug(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+88}
C.eDW.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eDZ.prototype={
$0(){return this.a.bMV()},
$S:0}
C.eE_.prototype={
$0(){return this.a.aT0("Class Presentation",!0)},
$S:0}
C.eE0.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eE1.prototype={
$1(d){return this.a.bNR(d.b,this.b,d.a)},
$S:z+89}
C.eEC.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGN.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aF(d,A.eT,x.w).w.f.d),new B.dY(new C.eGM(this.a,this.b),null),null)},
$S:64}
C.eGM.prototype={
$2(d,e){return B.pj(new C.eGL(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:602}
C.eGL.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.by:A.bi,A.r,1),r=B.r(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.r(v,B.x(B.a([A.W,r,new B.D(A.amy,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b1,B.bP(!1,A.B3,v,v,!0,v,v,v,new C.eGJ(w.c),v,v)],q),A.l,v,A.e,A.i,0,v,v),v),B.E(B.cm(B.a([p.aVO(u,!0,!0,new C.eGK(p,w.d))],q),e,v,D.bD4,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.l9,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eGJ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGK.prototype={
$0(){this.b.$1(new C.eGH())
var w=this.a
if(w.c!=null)w.m(new C.eGI())},
$S:0}
C.eGH.prototype={
$0(){},
$S:0}
C.eGI.prototype={
$0(){},
$S:0}
C.eIl.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.eIm.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.aAY(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:247}
C.eIn.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.eIo.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.bfy(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:247}
C.eIp.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xl(this.b))},
$S:0}
C.eDk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.aA(0,o)
o=B.l(22)
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.qg.j(0.75)],t)
r=B.L(A.aZ.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.aZ.j(0.35+q),A.ci.j(0.18),A.L],t)
q=B.L(A.aZ.j(0.45+q),A.r,1)
t=B.r(p,B.X(Y.Pi,u?A.ab:A.a_,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bY(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.uD(A.fk,B.r(p,B.x(B.a([t,A.aB,q,A.am,B.d(y.K,p,p,p,p,p,p,B.m(p,p,u?A.aD:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.aA,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.ey,p,p,1/0),14,!1),A.aq)},
$S:302}
C.eEq.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eEr.prototype={
$1(d){return d.length!==0},
$S:3}
C.eEs.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.ka
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a3m:A.CO}return w},
$S:689}
C.eEv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=m.b
v=A.dG.aA(0,A.j.F(j+w*0.12,1))
j=m.c
u=j?l:new B.o(l,l,l,B.l(20),A.IC,l,A.n)
t=B.l(20)
s=m.d
r=B.l(20)
if(j)q=B.a([A.c.j(0.1+v*0.04),A.as.j(0.78)],x.O)
else{q=(A.o.aq(w,1)&1)===0
p=B.ar(A.c,q?A.aG:A.bg,0.1)
p.toString
o=B.ar(A.c,q?A.aG:A.bg,0.24)
o.toString
o=B.a([p,o],x.O)
q=o}p=!j
if(p)o=B.VP((A.o.aq(w,1)&1)===0?A.aG:A.bg,!0)[0].j(0.75)
else o=A.d.gH(m.e).j(0.34+v*0.22)
o=B.L(o,A.r,p?1.5:1.25)
n=B.l(10)
if(j)w=m.e
else{w=(A.o.aq(w,1)&1)===0
p=B.VP(w?A.aG:A.bg,!0)[0]
p=B.a([p,B.VP(w?A.aG:A.bg,!0)[1]],x.O)
w=p}w=B.r(l,B.X(C.kP(s.w)?A.wL:A.qS,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,n,l,new B.a8(A.a7,A.aa,A.x,w,l,l),A.n),l,36,l,l,l,l,l,52)
p=s.b
p=B.d(p.toUpperCase(),l,l,l,l,l,l,B.m(l,l,j?A.c:A.a_,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=s.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QI(s.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QI(s.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QI(s.f)
else if(n==="hati_kiapo_uongozi"){n=s.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QI(s.f)}else n=""+s.r.length+" slides \u2022 Updated "+k.QI(s.f)
n=k.bNP(n,A.d.gH(m.e),j)
return B.r(l,B.bx(t,new B.a9i(B.aH(!1,A.a3,!0,l,B.aP(!1,l,!0,B.r(l,B.dH(!1,A.GR,l,l,!0,l,l,l,!0,l,l,w,l,l,l,l,l,!1,l,l,l,l,l,n,l,p,l,B.aI(l,l,l,l,B.X(A.oD,j?A.aD:A.bN,l,l,l,l),l,l,l,new C.eEt(k,s,j),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,o,r,l,new B.a8(A.aA,A.aE,A.x,q,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eEu(k,s),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,u,l,l,l,A.kx,l,l,l,l)},
$S:86}
C.eEu.prototype={
$0(){return this.a.agx(this.b)},
$S:0}
C.eEt.prototype={
$0(){return this.a.Bv(this.b,this.c)},
$S:0}
C.eFW.prototype={
$0(){var w=this.a
w.b9G()
w.m(new C.eFV())},
$S:0}
C.eFV.prototype={
$0(){},
$S:0}
C.eFX.prototype={
$1(d){return this.a.akA(this.b.a,d)},
$S:2}
C.eFY.prototype={
$0(){this.a.dc(new C.eFU(this.b))},
$S:0}
C.eFU.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eFZ.prototype={
$0(){this.a.dc(new C.eFT(this.b))},
$S:0}
C.eFT.prototype={
$0(){var w=this.a
return w.y=w.y===A.cK?A.bs:A.cK},
$S:0}
C.eG_.prototype={
$0(){this.a.dc(new C.eFS(this.b))},
$S:0}
C.eFS.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.nh},
$S:0}
C.eG0.prototype={
$0(){this.a.dc(new C.eFR(this.b))},
$S:0}
C.eFR.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eG1.prototype={
$0(){var w=this.a
w.dc(new C.eFQ(w,this.b))},
$S:0}
C.eFQ.prototype={
$0(){var w=this.b
return w.as=this.a.c8t(w.as)},
$S:0}
C.eG2.prototype={
$0(){return this.a.dc(new C.eFP(this.b))},
$S:0}
C.eFP.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eG3.prototype={
$0(){return this.a.dc(new C.eFO(this.b))},
$S:0}
C.eFO.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eFH.prototype={
$0(){return this.a.a3f(this.b.a)},
$S:0}
C.eFI.prototype={
$0(){this.a.a0M()
return null},
$S:0}
C.eFJ.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aF(v,A.c1,x.w).w.a.a<900)w.agQ()
else w.m(new C.eFG(w))},
$S:0}
C.eFG.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eFK.prototype={
$0(){this.a.dc(new C.eFF(this.b))},
$S:0}
C.eFF.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eFL.prototype={
$0(){return this.a.dc(new C.eFE(this.b))},
$S:0}
C.eFE.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eFM.prototype={
$0(){return this.a.dc(new C.eFD(this.b))},
$S:0}
C.eFD.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eFN.prototype={
$0(){return this.a.aC6(null)},
$S:0}
C.eEP.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eEQ.prototype={
$0(){this.a.abn()
return null},
$S:0}
C.eES.prototype={
$1(d){return this.bo7(d)},
bo7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KI(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.as,null,new C.eEK(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eEL(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEM(r))
s=s.c.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEN(r))
s=s.c.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hGJ(q,new C.Fq(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eEO(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ail(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:98}
C.eEK.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.evt],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dk,p,p,p)
q=u.e===s?D.bYq:p
o.push(B.dH(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eEJ(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eEJ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eEL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEM.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEN.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEO.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eER.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.At(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.At(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.At(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ail(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eB_,q,v,u,B.At(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.eJ6.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFX(w,v)}},
$S:0}
C.eJ7.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eG6.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c8g:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.cd
if(s)v=A.c
else v=this.b?A.aR:A.bx
return new B.D(A.fn,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b_,new B.o(w,u,u,r,u,q,A.n),A.eG,u,u,u,u,A.lL,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eG5(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:140}
C.eG5.prototype={
$0(){var w=this.a
return w.m(new C.eG4(w,this.b))},
$S:0}
C.eG4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eG7.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a6t:E.aBO
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRp():t.gbNf()
return B.h9(B.az(u,B.r(u,D.arF,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a7,A.aa,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1731}
C.eG8.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.itV(v,w.a.c)},
$S:0}
C.eHv.prototype={
$0(){return this.b.vT(this.a.a)},
$S:0}
C.eHw.prototype={
$0(){return this.a.vT(D.nc)},
$S:0}
C.eHx.prototype={
$0(){return this.a.vT(D.Js)},
$S:0}
C.eHI.prototype={
$0(){return this.a.vT(D.Jt)},
$S:0}
C.eHT.prototype={
$0(){return this.a.vT(D.Jr)},
$S:0}
C.eI3.prototype={
$0(){return this.a.qG("lab_report")},
$S:0}
C.eIa.prototype={
$0(){return this.a.qG("rubric")},
$S:0}
C.eIb.prototype={
$0(){return this.a.qG("minutes")},
$S:0}
C.eIc.prototype={
$0(){return this.a.qG("agenda")},
$S:0}
C.eId.prototype={
$0(){return this.a.qG("timeline")},
$S:0}
C.eIe.prototype={
$0(){return this.a.qG(this.b.a)},
$S:0}
C.eHy.prototype={
$0(){this.a.WC()
return null},
$S:0}
C.eHz.prototype={
$0(){this.a.Ww()
return null},
$S:0}
C.eHA.prototype={
$0(){return this.a.qG("table")},
$S:0}
C.eHB.prototype={
$0(){return this.a.qG("sticky")},
$S:0}
C.eHC.prototype={
$0(){return this.a.qG("divider")},
$S:0}
C.eHD.prototype={
$0(){return this.a.qG("header_bar")},
$S:0}
C.eHE.prototype={
$0(){return this.a.pt(D.bm)},
$S:0}
C.eHF.prototype={
$0(){return this.a.pt(D.f2)},
$S:0}
C.eHG.prototype={
$0(){return this.a.pt(D.ke)},
$S:0}
C.eHH.prototype={
$0(){return this.a.pt(D.E7)},
$S:0}
C.eHJ.prototype={
$0(){return this.a.pt(D.kf)},
$S:0}
C.eHK.prototype={
$0(){return this.a.pt(D.lt)},
$S:0}
C.eHL.prototype={
$0(){return this.a.pt(D.fP)},
$S:0}
C.eHM.prototype={
$0(){this.a.HU()
return null},
$S:0}
C.eHN.prototype={
$0(){this.a.O2()
return null},
$S:0}
C.eHO.prototype={
$0(){return this.a.qG("quote")},
$S:0}
C.eHP.prototype={
$0(){return this.a.a9v()},
$S:0}
C.eHQ.prototype={
$0(){this.a.a0S()
return null},
$S:0}
C.eHR.prototype={
$0(){var w=this.a
return w.m(new C.eHl(w))},
$S:0}
C.eHl.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.ot(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eHt(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHt.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHU.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kd()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aay.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.r(s,s,A.f,s,s,new B.o(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a8(A.a7,A.aa,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.aay.q(0,q))u.push(B.ap(s,B.r(s,D.Q2,A.f,s,s,D.Fr,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fn,B.az(s,B.h9(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eHs(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+90}
C.eHs.prototype={
$0(){this.a.a9L(this.b)
return null},
$S:0}
C.eHV.prototype={
$0(){this.a.a9K(this.b)
return null},
$S:0}
C.eHW.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hYR(d),p=this.a,o=B.l(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bo:A.aT
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.t1(4294967295,r,0,0,r,"preview_"+w,D.r3,"","","",D.ds)
C.hDt(s,w)
w=x.p
u=B.a([B.bx(o,B.r(r,B.bx(t,C.hEP(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.r(r,D.ash,A.f,r,r,D.Fr,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iQ,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cQ,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aD:A.an,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eHr(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+91}
C.eHr.prototype={
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
return B.b(s.ot(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.dc(new C.eHh(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHh.prototype={
$0(){return C.hDt(this.a,this.b.a)},
$S:0}
C.eHu.prototype={
bo8(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.aaw.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bo8(d,e)},
$S:z+92}
C.eIf.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eIh(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cb(B.A(v,A.l,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+93}
C.eIh.prototype={
$1(d){var w=this
return w.a.bb7(d,w.b===d,w.c,w.d,new C.eIg(w.e,d),!D.aaw.q(0,d))},
$S:z+25}
C.eIg.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHX.prototype={
$1(d){this.b.$2(d,new C.eHq(this.a,d,this.c))
return null},
$S:z+26}
C.eHq.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGK(u,new C.eHg(v,this.c,w),w)},
$S:0}
C.eHg.prototype={
$0(){return this.a.dc(new C.eHe(this.b,this.c))},
$S:0}
C.eHe.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eHY.prototype={
$1(d){this.b.$2(d,new C.eHp(this.a,d))
return null},
$S:z+26}
C.eHp.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h4w(u,new C.eHf(v,w),w)},
$S:0}
C.eHf.prototype={
$0(){var w=this.a
return w.dc(new C.eHd(w,this.b))},
$S:0}
C.eHd.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eHZ.prototype={
$0(){var w=this.a
return w.m(new C.eHo(w))},
$S:0}
C.eHo.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eI_.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFX(w,v)}},
$S:0}
C.eI0.prototype={
$0(){this.a.IG()
return null},
$S:0}
C.eI1.prototype={
$0(){return this.a.a9v()},
$S:0}
C.eI2.prototype={
$0(){var w=this.a,v=w.kd()
if(v!=null&&v.b===D.d1)w.dc(new C.eHn(v))},
$S:0}
C.eHn.prototype={
$0(){var w=this.a
w.f=A.j.D(w.f*1.25,0.08,1.8)
w.e=A.j.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eI4.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eI5.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FR(v,!0)
return null},
$S:0}
C.eI6.prototype={
$0(){this.a.dc(new C.eHm(this.b))},
$S:0}
C.eHm.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eI7.prototype={
$0(){this.a.dc(new C.eHk(this.b))},
$S:0}
C.eHk.prototype={
$0(){var w=this.a
return w.y=w.y===A.cK?A.bs:A.cK},
$S:0}
C.eI8.prototype={
$0(){this.a.dc(new C.eHj(this.b))},
$S:0}
C.eHj.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.nh},
$S:0}
C.eI9.prototype={
$0(){this.a.dc(new C.eHi(this.b))},
$S:0}
C.eHi.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDT.prototype={
$1(d){return this.bo5(d)},
bo5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.dc(new C.eDS(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:189}
C.eDS.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eIC.prototype={
$0(){var w=this.a
return w.dc(new C.eIB(w,this.b))},
$S:0}
C.eIB.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eID.prototype={
$0(){var w=this.a
return w.dc(new C.eIA(w,this.b))},
$S:0}
C.eIA.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eF1.prototype={
$0(){return this.a.dc(new C.eF0(this.b))},
$S:0}
C.eF0.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eF2.prototype={
$0(){return this.a.dc(new C.eF_(this.b))},
$S:0}
C.eF_.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eFz.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.au_,new C.eFy(),w),w.k("ak.E"))
return w},
$S:z+95}
C.eFy.prototype={
$1(d){var w=null
return B.At(B.d(d.b,w,w,w,w,w,w,A.lX,w,w,w),48,d,x.fO)},
$S:z+96}
C.eIP.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:37}
C.eIO.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kz()?q:new C.eIM(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bo
else v=r.d?A.aT:A.cx
v=B.L(v,A.r,o?2:1)
u=r.d?A.cl:A.c
t=B.bS(0,C.hEP(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.r(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ap(4,B.r(q,B.d(""+(e+1),q,q,q,q,q,q,A.nY,q,q,q),A.f,q,q,new B.o(A.b6,q,q,s,q,q,A.n),q,q,q,q,A.anx,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIN(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:82}
C.eIN.prototype={
$0(){var w=this.a
return w.m(new C.eII(w,this.b))},
$S:0}
C.eII.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KR()},
$S:0}
C.eIM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eIJ(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eIK(q,s))
q.aUv()}else if(r==="del"){q=t.a
q.m(new C.eIL(q,s))
q.aTB()}else if(r==="up")t.a.b68(s,s-1)
else if(r==="down")t.a.b68(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIJ.prototype={
$1(d){var w=null,v=B.a([B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_b,w,w,w,w,new C.eIE(d),!1,w,w,w,w,w,w,w,D.fJ9,w,w,w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_4,w,w,w,w,new C.eIF(d),!1,w,w,w,w,w,w,w,A.xy,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZi,w,w,w,w,new C.eIG(d),!1,w,w,w,w,w,w,w,D.fRD,w,w,w))
if(u<this.b.r.length-1)v.push(B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0t,w,w,w,w,new C.eIH(d),!1,w,w,w,w,w,w,w,D.fIY,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eIE.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eIF.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eIG.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eIH.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eIK.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIL.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIQ.prototype={
$0(){return this.a.a9v()},
$S:0}
C.eEj.prototype={
$0(){var w=this.a
w.b9G()
w.aC6(null)},
$S:0}
C.eEi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.l(4),n=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.aA,A.aE,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.l(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.aA,A.aE,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,new B.bN(new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bk,A.l3,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.u(s,new B.N(r,new C.eEh(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aD:A.bN,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bN(new B.o(v,p,p,o,n,w,A.n),A.bk,new B.an(A.a0,p,A.ad,A.f,s,new B.bt("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:456}
C.eEh.prototype={
$1(d){var w=this
return w.a.bJb(d,w.b,w.c,w.d)},
$S:z+23}
C.eE6.prototype={
$0(){var w=this
if(w.b){w.a.Oa(w.c)
return}if(w.d){w.a.a9t(w.c)
return}if(w.e){w.a.ai7(w.c)
return}if(w.f)w.a.bae(w.c)},
$S:0}
C.eE7.prototype={
$0(){this.a.Oa(this.b)
return null},
$S:0}
C.eE8.prototype={
$0(){return this.a.a3f(this.b.a)},
$S:0}
C.eE9.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eE5(u,d,w.c,w.d))
v.Ik()
v.oF()
v.pM()},
$S:19}
C.eE5.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eEa.prototype={
$1(d){return this.a.akA(this.b.a,d)},
$S:2}
C.eEc.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hhm(w))u.a.Oa(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bae(v)},
$S:0}
C.eEb.prototype={
$0(){return this.a.a3f(this.b.a)},
$S:0}
C.eEd.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eE4(w.b,d,w.c,w.d))
v.Ik()
v.oF()
v.pM()},
$S:19}
C.eE4.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.d1)v.w=A.j.D(v.w+u*0.15,10,120)},
$S:0}
C.eEe.prototype={
$1(d){var w=this.a
w.m(new C.eE3(this.b,d))
w.Ik()
w.oF()
w.pM()},
$S:233}
C.eE3.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.D(w.e*v,0.04,1.8)
w.f=A.j.D(w.f*v,0.04,1.8)
if(w.b===D.d1)w.w=A.j.D(w.w*v,10,120)},
$S:0}
C.eEf.prototype={
$0(){var w=this.a
w.m(new C.eE2(this.b))
w.Ik()
w.oF()
w.pM()},
$S:0}
C.eE2.prototype={
$0(){this.a.r=C.hEi()},
$S:0}
C.eEg.prototype={
$0(){return this.a.a3f(this.b.a)},
$S:0}
C.eGa.prototype={
$0(){var w=this.a
return w.m(new C.eG9(w))},
$S:0}
C.eG9.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eGb.prototype={
$1(d){return this.a.cIt(this.b.a,d)},
$S:2}
C.eFf.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:176}
C.eFg.prototype={
$1(d){return this.a.$1(new C.eFe(this.b,d))},
$S:6}
C.eFe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFh.prototype={
$1(d){return this.a.$1(new C.eFd(this.b,d))},
$S:6}
C.eFd.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eFi.prototype={
$1(d){return this.a.$1(new C.eFc(this.b,d))},
$S:6}
C.eFc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eFj.prototype={
$1(d){return this.a.$1(new C.eFb(this.b,d))},
$S:6}
C.eFb.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eFk.prototype={
$1(d){return this.a.$1(new C.eFa(this.b,d))},
$S:6}
C.eFa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFl.prototype={
$1(d){return this.b.$1(new C.eF9(this.a,this.c))},
$S:9}
C.eF9.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eFm.prototype={
$1(d){return this.b.$1(new C.eF8(this.a,this.c))},
$S:9}
C.eF8.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eFn.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bo:A.cA
return B.az(w,B.r(w,w,A.f,w,w,new B.o(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eF7(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:453}
C.eF7.prototype={
$0(){return this.a.$1(new C.eF4(this.b,this.c))},
$S:0}
C.eF4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eFo.prototype={
$1(d){return this.a.$1(new C.eF6(this.b,d))},
$S:1732}
C.eF6.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eFp.prototype={
$1(d){var w=null
return B.az(w,B.r(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eF5(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:453}
C.eF5.prototype={
$0(){return this.a.$1(new C.eF3(this.b,this.c))},
$S:0}
C.eF3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eFq.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pZ()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eA()}v.a.auy()},
$S:0}
C.eFt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dG.aA(0,k)
k=B.l(16)
v=B.l(16)
u=B.P(d).ax.a===A.dm?A.b0:A.aA
t=B.P(d).ax.a===A.dm?A.b7:A.aE
if(B.P(d).ax.a===A.dm)s=D.d4w
else{s=m.c
r=B.ar(s,A.aZ,0.35+w*0.15)
r.toString
r=B.a([s,r],x.O)
s=r}r=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
q=B.a([B.X(m.d,A.c,l,l,l,26)],x.p)
p=B.l(6)
o=m.c
n=B.L(o,A.r,1.2)
q.push(B.ap(2,B.r(l,B.X(A.v4,o,l,l,l,10),A.f,l,l,new B.o(A.c,l,n,p,l,l,A.n),l,l,l,l,A.nK,l,l,l),l,l,l,2,l,l))
return B.aH(!1,A.a3,!0,l,B.aP(!1,k,!0,B.eB(new B.a5(48,48,new B.an(A.A,l,A.ad,A.t,q,l),l),l,new B.o(l,l,r,v,l,new B.a8(u,t,A.x,s,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.aj)},
$S:138}
C.eD1.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.aA(0,o)
o=B.l(22)
v=B.l(22)
u=q.c
t=B.ar(u,A.aZ,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aH(!1,A.a3,!0,p,B.aP(!1,o,!0,B.eB(B.x(B.a([B.e1(A.A,B.r(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j0,A.K,p,p)],x.p),A.l,p,A.ba,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.aA,A.aE,A.x,u,p,p),A.n),p,A.Cx,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:138}
C.eH7.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.ata,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.eH5(d),w,w),B.bJ(A.rg,w,new C.eH6(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eH5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eH6.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.daY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dG.aA(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.e2.aA(0,A.j.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.dK.aA(0,h)
v=B.l(22)
t=B.ar(A.aM,A.d.gH(C.kP(i.a.c.w)?D.vh:L.nO),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gH(C.kP(i.a.c.w)?D.vh:L.nO).j(0.18+w*0.12),A.J,32+w*10),D.aff],s)
q=B.l(22)
p=x.O
o=B.ap(j,B.r(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bY(A.b0,0.9,A.x,j,0,B.a([A.d.gH(C.kP(i.a.c.w)?D.vh:L.nO).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.kP(i.a.c.w)?D.vh:L.nO).j(0.28+w*0.14)
p=B.r(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bY(A.A,0.5,A.x,j,0,B.a([m,A.d.gal(C.kP(i.a.c.w)?D.vh:L.nO).j(0.08),A.L],p),j,j),A.a6),j,n,j,j,j,j,j,n)
n=B.l(14)
m=i.a.c.w
l=C.kP(m)?D.vh:L.nO
s=B.a([new B.ab(0,A.G,A.d.gH(C.kP(m)?D.vh:L.nO).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.e1(A.A,B.r(j,B.X(C.kP(i.a.c.w)?A.wL:A.qS,A.c,j,j,j,22),A.f,j,j,new B.o(j,j,j,n,s,new B.a8(A.aA,A.aE,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.A,j,A.ad,A.t,l,j),A.W,B.d("PRESENTATION",j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kP(i.a.c.w)?D.vh:L.nO).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.I,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fF,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fAD,A.K,j,j),A.aw,B.d(i.gcDh(),j,j,j,j,j,j,D.fFH,A.K,j,j),A.aB],m)
p=i.a.c
if(p.z){p=p.gTc()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.u(s,B.a([B.d(p,j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kP(i.a.c.w)?D.vh:L.nO).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.ae],m))}s.push(new C.KP(A.zf,"Download PDF","pdf",A.d7,i.JF(0),!1,j))
p=i.a.c
if(!p.z||p.gTc()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KP(A.jM,"Transfer to "+C.hEk(p==null?"":p),"transfer_hati",A.aV,i.JF(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JF(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KP(D.bRB,"Rename presentation","rename",A.ci,n,!1,j),A.am,new C.KP(A.apr,"Duplicate","duplicate",A.b8,i.JF(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.u(s,B.a([A.T,new C.KP(A.ek,p,"delete",A.ay,i.JF(n),!0,j)],m))}s.push(A.aw)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JF(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JF(n)
s.push(B.dO(B.d3(B.bP(!1,E.aXw,j,j,!0,j,j,j,new C.daX(d),j,B.fv(j,j,j,j,j,j,j,j,j,j,j,A.bN,j,j,j,A.az,j,D.bGn,j,j,j,j,j,A.kD,j,j)),n),new B.p(0,(1-p)*8)))
return B.e1(A.A,B.d3(B.aH(!1,A.a3,!0,j,B.r(j,B.bx(q,new B.an(A.a0,j,A.ad,A.t,B.a([o,new B.D(D.bFx,B.x(s,A.l,j,A.e,A.P,0,A.p),j)],m),j),A.aq),A.f,j,A.XS,new B.o(A.as,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj),h),0.88+u*0.12,j,j)},
$S:45}
C.daX.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dbl.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dbm.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.daV.prototype={
$1(d){var w=this.a
return w.m(new C.daR(w))},
$S:22}
C.daR.prototype={
$0(){return this.a.d=!0},
$S:0}
C.daW.prototype={
$1(d){var w=this.a
return w.m(new C.daQ(w))},
$S:65}
C.daQ.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daU.prototype={
$0(){var w=this.a
return w.m(new C.daS(w))},
$S:0}
C.daS.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daT.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eJN.prototype={
$0(){return $.bnh=!$.bnh},
$S:0}
C.eJD.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXK())u.azH()},
$S:0}
C.eJM.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJE.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJF.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azH()},
$S:0}
C.eJz.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eJA.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJB.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJC.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJK.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1733}
C.eJL.prototype={
$2(d,e){var w
if(e.gc4(e)===A.iu)return new B.d2(e,!1,d,null)
w=this.a
return w.cBb(w.e,d,e)},
$S:460}
C.eJG.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJH.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kn((1-v.gp(0))*1.5708)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJI.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.kn(v.gp(0)*0.35)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJJ.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fB(A.aa,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJO.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZU().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZU().x
t===$&&B.c()
return new C.b3J(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JN(v.c,t,!0,new B.bt("cine"+u,x.W))},
$S:670}
C.eJQ.prototype={
$1(d){var w=this.a
if(d.b.a>B.aF(this.b,A.c1,x.w).w.a.a*0.55)w.azH()
else w.cpv()},
$S:65}
C.eJP.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fVr.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.u(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:461}
C.fVA.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.fVx(d),w,w),B.bP(!1,D.fZg,w,w,!0,w,w,w,new C.fVy(d,this.b,v),w,w),B.bJ(A.aXP,w,new C.fVz(d,v,this.c),w)],x.p),w,w,O.uo,new B.a5(320,w,t,w),w,w,w,w,D.h_N,w)},
$S:18}
C.fVx.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fVy.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hi0(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVz.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aSn(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRP(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVq.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.clA.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:544}
C.fVw.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fqv.prototype={
$1(d){return C.hhZ(C.Xl(B.a2(d,x.N,x.z)),this.a)},
$S:z+97}
C.h3M.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:87}
C.h3N.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,D.hBN,0.94+w*0.06,null,null),w)},
$S:247}
C.h3O.prototype={
$1(d){var w=this
return new C.Xn(w.a,w.b,w.c,w.d,null)},
$S:z+98}
C.eJj.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJf.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJi.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xo(u,this.b,w.gaQO(),v,null)},
$S:z+100}
C.eJg.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJh.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJk.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJo.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJp.prototype={
$0(){var w=this.a
return w.m(new C.eJn(w))},
$S:0}
C.eJn.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eJq.prototype={
$0(){var w=this.a
return w.m(new C.eJm(w))},
$S:0}
C.eJm.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eJr.prototype={
$1(d){return this.a.bNQ(d,this.b)},
$S:z+101}
C.eJe.prototype={
$0(){var w=this.a
return w.m(new C.eJd(w,this.b))},
$S:0}
C.eJd.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eJs.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eJt.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eJu.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJv.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fH(new B.fy(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.fmb)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCW.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCV())},
$S:0}
C.eCV.prototype={
$0(){},
$S:0}
C.eCX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.eCS.prototype={
$1(d){return this.a.m(new C.eCR())},
$S:2}
C.eCR.prototype={
$0(){},
$S:0}
C.eCT.prototype={
$1(d){return this.a.b1Z()},
$S:2}
C.eCU.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJy.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJx(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJx.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fPC.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.eo(new B.k6(this.c,new C.fPB(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.fPB.prototype={
$3(d,e,f){return new C.JN(e,!1,!1,new B.bt(e.a,x.W))},
$S:z+103}
C.fPD.prototype={
$1(d){var w=null
return B.oQ(!1,B.as(new C.by3(this.a,this.b,w),w,w,w),w,x.z)},
$S:323}
C.fPH.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmV(),$async$$0)
case 3:w=4
return B.b(B.bO(A.md,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmV(),$async$$0)
case 5:s=$.aW.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qn))throw B.W("Could not draw the slide.")
u=r.mg(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1736}
C.fPI.prototype={
boD(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.hq),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eU(A.dS.gaV(r))],"image/png"))
t.toString
s=Ao.h8h(t)
w=4
return B.b(new B.qv(s,"load",!1,x.ev).gH(0).dg(0,A.k_),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boD(d)},
$S:1737}
C.fPE.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:157}
C.fPF.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:157}
C.fPG.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fkk.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fwX,A.K,w,w)},
$S:1738}
C.fkl.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.bx(v,B.ks(A.br,w,A.dP,8,w,e===0?w:e,w),A.aq)},
$S:575}
C.erb.prototype={
$1(d){this.a.a0b()
return null},
$S:12}
C.er9.prototype={
$0(){return this.a.e=D.bBi},
$S:0}
C.era.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bF
return this.b.e=w},
$S:0}
C.cpQ.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+104}
C.cpR.prototype={
$2(d,e){return(d|e)>>>0},
$S:59};(function aliases(){var w=C.aOd.prototype
w.bzQ=w.t
w=C.aNI.prototype
w.bzj=w.t
w=C.aNr.prototype
w.bz1=w.t
w=C.aNH.prototype
w.bzi=w.t
w=C.aOb.prototype
w.bzO=w.t
w=C.aPv.prototype
w.bBi=w.t
w=C.aMm.prototype
w.bxU=w.t
w=C.aOo.prototype
w.bA0=w.t
w=C.aOp.prototype
w.bA1=w.t
w=C.b5q.prototype
w.buo=w.aFd})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ir7","ape",105)
v(C.aLi.prototype,"gc8R","a_0",0)
var r
u(r=C.azM.prototype,"gcCD","cCE",40)
v(r,"gc9G","aeJ",0)
v(r=C.azI.prototype,"gb0m","EE",3)
v(r,"gc9D","c9E",3)
v(r,"gayM","yt",0)
v(r,"gaAQ","JX",0)
t(C,"is4","hWB",106)
v(C.aFU.prototype,"gccI","ccJ",3)
s(C,"isf",0,null,["$4$paper$photo$request$template"],["fWR"],107,0)
s(C,"ise",0,null,["$5$doc$history$instruction$photo$template"],["bFe"],108,0)
v(r=C.aGa.prototype,"gcdr","JC",0)
v(r,"gbNi","XL",0)
v(r,"gcdu","afB",0)
v(r,"gcdt","a_Y",0)
v(r,"gb1E","EV",0)
v(C.aGd.prototype,"gcdz","a0_",0)
v(r=C.aHD.prototype,"gb1R","QE",0)
v(r,"gcun","b6d",3)
v(r,"gcE0","aDn",94)
v(r,"gbRd","abs",0)
v(r,"gce_","B8",0)
v(r=C.aJz.prototype,"gcoe","a1l",0)
v(r,"gcom","a1o",0)
v(r,"gbG4","a9R",0)
v(r,"gce3","afN",0)
v(C.aJy.prototype,"gce4","afO",0)
v(C.aDA.prototype,"gbF3","a9E",0)
v(C.aBW.prototype,"gce5","a0a",0)
w(C,"iss","ipP",12)
w(C,"isq","imD",12)
w(C,"isr","ioN",12)
v(r=C.aGu.prototype,"gcHk","cHl",3)
v(r,"gcsD","csE",3)
u(r,"gF0","agx",7)
v(r,"gbKU","atH",3)
u(r,"gF1","b3d",7)
v(r,"gcgl","age",0)
v(r,"gcfc","agd",0)
v(r,"gc4a","Zn",0)
v(r,"gciy","agy",0)
v(r,"gbNf","ab_",0)
v(r,"gcjs","a0M",0)
v(r,"gcjt","agP",0)
v(r,"gck_","agW",0)
v(r,"gciL","agB",0)
v(r,"gbRp","abw",0)
v(r,"gaUu","aUv",3)
v(r,"gaTA","aTB",3)
v(r,"gaP4","aP5",3)
v(r,"gaTz","auy",3)
u(r,"gbFk","bFl",81)
v(r,"gaCU","b9p",3)
v(r,"gcfe","cff",3)
v(r,"gc1M","c1N",3)
v(r,"gbPI","bPJ",3)
v(r=C.aGx.prototype,"gcG6","cG7",3)
v(r,"gcFK","cFL",3)
t(C,"ist","iq5",2)
v(r=C.aGv.prototype,"gceb","JH",0)
v(r,"gcwo","S9",0)
v(r,"gce8","JG",0)
v(r,"gcIE","a3V",0)
v(r,"gckb","ah2",0)
v(C.aGt.prototype,"gcec","b1Z",3)
v(r=C.aGw.prototype,"gbSf","abG",0)
u(r,"gce9","cea",102)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.ol,C.T2,C.bKW,C.bJ9,C.cH5,C.cH3,C.bTb,C.bb7,C.cH4,C.bHK,C.cpK,C.cpI,C.cpJ,C.cpH,C.auK,C.cpG,C.bUd,C.oP,C.aH5,C.jG,C.o9,C.a9h,C.Ah,C.lz,C.oZ,C.mu,C.Ai,C.oc,C.a9p,C.at4,C.b3K,C.eqB,C.lw,C.Fz,C.ey,C.jd,C.Fq,C.yi,C.eR,C.m3,C.hT,C.k2,C.a9q,C.agD,C.b3L,C.b5q,C.a4l])
u(B.jz,[C.cP7,C.c4a,C.fKM,C.cQE,C.cQ0,C.fQk,C.cg2,C.e8R,C.e8Q,C.ere,C.erd,C.fRJ,C.frH,C.frI,C.cjP,C.cjQ,C.cjR,C.euT,C.f36,C.f2u,C.f2t,C.f3x,C.f34,C.f2Y,C.f3g,C.f3X,C.fzN,C.fag,C.faf,C.faJ,C.eqE,C.fVn,C.e44,C.h1f,C.fS5,C.cls,C.clq,C.clv,C.fSF,C.fSG,C.fSH,C.fSI,C.clc,C.cld,C.dR_,C.cl9,C.fSE,C.fhH,C.e1N,C.cl2,C.eqk,C.fQ9,C.eGx,C.eGW,C.eGT,C.eGS,C.eH2,C.eH1,C.eIx,C.eIw,C.eGM,C.eGL,C.eDk,C.eEv,C.eHu,C.eIP,C.eIO,C.eEi,C.eFt,C.eD1,C.daY,C.eJK,C.eJL,C.eJG,C.eJH,C.eJI,C.eJJ,C.eJO,C.clA,C.eJj,C.eJu,C.cpR])
u(B.hx,[C.cP8,C.cP9,C.bUe,C.fHA,C.c49,C.c4c,C.fYC,C.fiR,C.fiI,C.fiY,C.fqw,C.fqx,C.fKN,C.fKL,C.fY4,C.fHe,C.fYY,C.cQu,C.cQz,C.cQB,C.cQx,C.cQC,C.cQv,C.cQD,C.cQq,C.cQn,C.cQm,C.cQt,C.cPW,C.cPU,C.fPm,C.fPn,C.fuS,C.fQl,C.fQr,C.ftU,C.cg1,C.cg4,C.fPk,C.fPl,C.fK9,C.fKa,C.fQq,C.fQm,C.fQo,C.fQp,C.fQn,C.h1x,C.fKd,C.fKe,C.fKh,C.fKi,C.fKl,C.fKm,C.h34,C.fsa,C.h3f,C.eub,C.euc,C.eud,C.etU,C.eu5,C.eu6,C.eu8,C.cjO,C.cjM,C.cjN,C.fQ0,C.fQ2,C.fQ1,C.frJ,C.frK,C.h3i,C.euY,C.euZ,C.euQ,C.euR,C.euU,C.euV,C.h3y,C.f3Y,C.f3n,C.f37,C.f3k,C.f2p,C.f2q,C.f2r,C.f2v,C.f2w,C.f3N,C.f3U,C.f3W,C.f3w,C.f3y,C.f3C,C.f3D,C.f3E,C.f3I,C.f3z,C.f3A,C.f2H,C.f2I,C.f2J,C.f2K,C.f2L,C.f2M,C.f2N,C.f2O,C.f2P,C.f22,C.f23,C.f24,C.f25,C.f27,C.f28,C.f2B,C.f2C,C.f2D,C.f2E,C.f2F,C.f2c,C.f2d,C.f2e,C.f2f,C.f2X,C.f3f,C.fNp,C.fNo,C.clj,C.fzM,C.fVj,C.fVc,C.fVf,C.fT9,C.fTa,C.fTb,C.fNw,C.fNv,C.fNu,C.fNs,C.frD,C.frE,C.frF,C.h3K,C.fai,C.faj,C.fac,C.fa6,C.faC,C.faD,C.faF,C.faG,C.faB,C.h3J,C.f9Y,C.fz2,C.eqD,C.fVl,C.fVm,C.fVo,C.fVh,C.fVi,C.h2X,C.dtp,C.dtv,C.eqC,C.fnF,C.fnH,C.fnG,C.fnE,C.fOA,C.fOC,C.fq_,C.fUO,C.fUP,C.fUQ,C.fV0,C.fV5,C.fV6,C.fV7,C.fV8,C.fV9,C.fVa,C.fVb,C.fUR,C.fUS,C.fUT,C.fUU,C.fUV,C.fUW,C.fUX,C.fUY,C.fUZ,C.fV_,C.fV1,C.fV2,C.fV3,C.fV4,C.fMq,C.fyl,C.fyk,C.fVu,C.e45,C.e43,C.f96,C.cfD,C.cfF,C.h1h,C.diJ,C.diL,C.h1g,C.h1e,C.h3I,C.fS1,C.dij,C.fKp,C.fKq,C.clh,C.cli,C.clg,C.cl6,C.cl7,C.cl3,C.cl4,C.cl5,C.cly,C.clt,C.clo,C.clp,C.clr,C.clu,C.clw,C.fSJ,C.clb,C.cle,C.clf,C.cll,C.clm,C.fVB,C.fUI,C.cla,C.cl8,C.fSD,C.fB5,C.cl1,C.f6B,C.fEd,C.eJa,C.eFA,C.eFB,C.eHa,C.eGZ,C.eH_,C.eEY,C.eIW,C.eIX,C.eIY,C.eEm,C.eGE,C.eGG,C.eGg,C.eGd,C.eFw,C.eFx,C.eGn,C.eEo,C.eGz,C.eGA,C.eGy,C.eGC,C.eGB,C.eGU,C.eGV,C.eGX,C.eGQ,C.eEH,C.eEE,C.eH3,C.eEw,C.eIV,C.eD3,C.eEz,C.eEy,C.eDM,C.eDR,C.eDP,C.eDN,C.eJ2,C.eJ3,C.eJ4,C.eJ1,C.eIz,C.eIy,C.eIs,C.eIu,C.eIk,C.eIT,C.eIR,C.eDb,C.eD7,C.eFu,C.eDV,C.eDm,C.eDl,C.eDI,C.eDJ,C.eEW,C.eDX,C.eE0,C.eE1,C.eGN,C.eIl,C.eIm,C.eIn,C.eIo,C.eEq,C.eEr,C.eEs,C.eFX,C.eES,C.eEK,C.eER,C.eG6,C.eG7,C.eHU,C.eHW,C.eIf,C.eIh,C.eHX,C.eHY,C.eDT,C.eFz,C.eFy,C.eIJ,C.eEh,C.eE9,C.eEa,C.eEd,C.eEe,C.eGb,C.eFf,C.eFg,C.eFh,C.eFi,C.eFj,C.eFk,C.eFl,C.eFm,C.eFn,C.eFo,C.eFp,C.eH7,C.daV,C.daW,C.eJQ,C.fVr,C.fVA,C.fVq,C.fVw,C.fqv,C.h3M,C.h3N,C.h3O,C.eJi,C.eJr,C.eCX,C.eCS,C.eCT,C.fPC,C.fPB,C.fPD,C.fPI,C.fPE,C.fPF,C.fkk,C.fkl,C.erb,C.cpQ])
u(B.iN,[C.cPa,C.fiN,C.fiS,C.fiT,C.fiO,C.fiP,C.fiQ,C.fiG,C.fiH,C.fiJ,C.fiK,C.fiX,C.fiW,C.fiM,C.fiL,C.fiU,C.fiV,C.fj_,C.fj0,C.fiZ,C.cQw,C.cQA,C.cQy,C.cQo,C.cQp,C.cQr,C.cQk,C.cQl,C.cQs,C.cQj,C.cQi,C.cQh,C.cPL,C.cPK,C.cPN,C.cPV,C.cPO,C.cPM,C.cPQ,C.cPR,C.cPS,C.cPP,C.cPT,C.cPX,C.cPY,C.cPZ,C.cQ_,C.fK7,C.fK8,C.fK5,C.fK6,C.ems,C.emq,C.emr,C.emt,C.emu,C.e8P,C.fKb,C.fKc,C.fKf,C.fKg,C.fKj,C.fKk,C.erc,C.fS8,C.fS7,C.eua,C.eu9,C.etO,C.etK,C.etV,C.etW,C.etX,C.etQ,C.etR,C.etS,C.etT,C.etP,C.etM,C.etN,C.eu2,C.eu3,C.eu1,C.eu4,C.eu0,C.eu_,C.etZ,C.eu7,C.etY,C.etL,C.euX,C.euL,C.euM,C.euS,C.euN,C.euP,C.euO,C.euW,C.f2Q,C.f3d,C.f2z,C.f2A,C.f2x,C.f2y,C.f3j,C.f3i,C.f3h,C.f3m,C.f3l,C.f2o,C.f2s,C.f2n,C.f2m,C.f2j,C.f2l,C.f2k,C.f3V,C.f3O,C.f3M,C.f3P,C.f3L,C.f3Q,C.f3K,C.f3R,C.f3S,C.f3T,C.f3J,C.f3v,C.f3q,C.f3B,C.f3u,C.f3F,C.f3t,C.f3G,C.f3s,C.f3H,C.f3r,C.f3a,C.f39,C.f3b,C.f38,C.f3c,C.f32,C.f31,C.f33,C.f30,C.f3_,C.f2Z,C.f26,C.f21,C.f2g,C.f2b,C.f2h,C.f2a,C.f2i,C.f29,C.f35,C.f2U,C.f2T,C.f2V,C.f2S,C.f2W,C.f2R,C.f3e,C.f3p,C.f3o,C.f2G,C.fVe,C.fVg,C.fVk,C.fNt,C.fPU,C.fPS,C.fPT,C.fak,C.fal,C.fah,C.fab,C.faa,C.fad,C.fae,C.fa0,C.fa1,C.fa3,C.fa4,C.fa5,C.fa2,C.fa7,C.fay,C.faz,C.fax,C.faA,C.faw,C.fav,C.fau,C.faE,C.fat,C.fas,C.far,C.faH,C.faq,C.faI,C.fap,C.fao,C.fa8,C.fa9,C.fan,C.fam,C.f9U,C.f9V,C.f9W,C.f9X,C.f9T,C.f9Z,C.fa_,C.dto,C.dtq,C.dtt,C.dtu,C.dts,C.dtr,C.fOB,C.fMr,C.cfE,C.cfG,C.diC,C.diH,C.diI,C.diG,C.diF,C.diK,C.diE,C.diD,C.diM,C.h1d,C.dpq,C.dpr,C.dps,C.fKn,C.fKo,C.clz,C.eCY,C.eCZ,C.eD_,C.eD0,C.fB3,C.fB4,C.e1P,C.e1O,C.dfw,C.dfv,C.eJc,C.eJb,C.eFC,C.eIi,C.eJ8,C.eH8,C.eIZ,C.eJ_,C.eJ9,C.eGh,C.eEk,C.eEl,C.eGF,C.eGf,C.eGc,C.eGe,C.eGi,C.eGj,C.eGk,C.eGl,C.eGm,C.eGo,C.eEp,C.eGr,C.eGs,C.eGt,C.eGu,C.eGv,C.eGw,C.eGq,C.eGD,C.eGR,C.eGP,C.eGY,C.eGp,C.eEF,C.eEG,C.eEI,C.eH0,C.eH4,C.eDi,C.eED,C.eEB,C.eHc,C.eEx,C.eHb,C.eEn,C.eEZ,C.eIU,C.eIj,C.eDj,C.eDg,C.eD6,C.eD2,C.eD4,C.eEA,C.eDL,C.eDQ,C.eDO,C.eDK,C.eGO,C.eJ5,C.eIv,C.eIq,C.eIr,C.eIt,C.eFs,C.eFr,C.eIS,C.eD9,C.eDa,C.eDc,C.eDd,C.eDh,C.eD8,C.eH9,C.eJ0,C.eFv,C.eDU,C.eD5,C.eEX,C.eDe,C.eDn,C.eDo,C.eDp,C.eDA,C.eDD,C.eDE,C.eDF,C.eDG,C.eDH,C.eDq,C.eDr,C.eDs,C.eDt,C.eDu,C.eDv,C.eDw,C.eDx,C.eDy,C.eDz,C.eDB,C.eDC,C.eEV,C.eEU,C.eET,C.eDf,C.eDY,C.eDW,C.eDZ,C.eE_,C.eEC,C.eGJ,C.eGK,C.eGH,C.eGI,C.eIp,C.eEu,C.eEt,C.eFW,C.eFV,C.eFY,C.eFU,C.eFZ,C.eFT,C.eG_,C.eFS,C.eG0,C.eFR,C.eG1,C.eFQ,C.eG2,C.eFP,C.eG3,C.eFO,C.eFH,C.eFI,C.eFJ,C.eFG,C.eFK,C.eFF,C.eFL,C.eFE,C.eFM,C.eFD,C.eFN,C.eEP,C.eEQ,C.eEJ,C.eEL,C.eEM,C.eEN,C.eEO,C.eJ6,C.eJ7,C.eG5,C.eG4,C.eG8,C.eHv,C.eHw,C.eHx,C.eHI,C.eHT,C.eI3,C.eIa,C.eIb,C.eIc,C.eId,C.eIe,C.eHy,C.eHz,C.eHA,C.eHB,C.eHC,C.eHD,C.eHE,C.eHF,C.eHG,C.eHH,C.eHJ,C.eHK,C.eHL,C.eHM,C.eHN,C.eHO,C.eHP,C.eHQ,C.eHR,C.eHl,C.eHS,C.eHt,C.eHs,C.eHV,C.eHr,C.eHh,C.eIg,C.eHq,C.eHg,C.eHe,C.eHp,C.eHf,C.eHd,C.eHZ,C.eHo,C.eI_,C.eI0,C.eI1,C.eI2,C.eHn,C.eI4,C.eI5,C.eI6,C.eHm,C.eI7,C.eHk,C.eI8,C.eHj,C.eI9,C.eHi,C.eDS,C.eIC,C.eIB,C.eID,C.eIA,C.eF1,C.eF0,C.eF2,C.eF_,C.eIN,C.eII,C.eIM,C.eIE,C.eIF,C.eIG,C.eIH,C.eIK,C.eIL,C.eIQ,C.eEj,C.eE6,C.eE7,C.eE8,C.eE5,C.eEc,C.eEb,C.eE4,C.eE3,C.eEf,C.eE2,C.eEg,C.eGa,C.eG9,C.eFe,C.eFd,C.eFc,C.eFb,C.eFa,C.eF9,C.eF8,C.eF7,C.eF4,C.eF6,C.eF5,C.eF3,C.eFq,C.eH5,C.eH6,C.daX,C.dbl,C.dbm,C.daR,C.daQ,C.daU,C.daS,C.daT,C.eJN,C.eJD,C.eJM,C.eJE,C.eJF,C.eJz,C.eJA,C.eJB,C.eJC,C.eJP,C.fVx,C.fVy,C.fVz,C.eJf,C.eJg,C.eJh,C.eJk,C.eJl,C.eJo,C.eJp,C.eJn,C.eJq,C.eJm,C.eJe,C.eJd,C.eJs,C.eJt,C.eJv,C.eJw,C.eCW,C.eCV,C.eCR,C.eCU,C.eJy,C.eJx,C.fPH,C.fPG,C.er9,C.era])
t(C.aTJ,B.M)
u(B.lF,[C.a54,C.azc,C.axR,C.yg,C.yj,C.ld,C.tR,C.Ce,C.t0,C.wC,C.atC,C.JO,C.at3,C.vl,C.mV,C.hI,C.aa2])
u(C.bTb,[C.cH6,C.bTc])
u(C.cpK,[C.cpO,C.auJ])
t(C.cpN,C.cpI)
t(C.cpM,C.cpH)
t(C.cpP,C.cpM)
t(C.cpL,C.cpJ)
t(C.cpF,C.cpG)
t(C.cAc,B.axj)
t(C.a9P,B.y2)
u(B.af,[C.a2k,C.a_2,C.a_0,C.asa,C.Xb,C.Xc,C.a1j,C.a1Q,C.a1P,C.aG4,C.a0d,C.Ou,C.a_L,C.a05,C.aq6,C.aKY,C.Ws,C.aBB,C.a97,C.P_,C.aAY,C.KP,C.a0X,C.Xn,C.Xo,C.aGs,C.at8,C.a98])
u(B.ah,[C.aLi,C.azM,C.azI,C.aFU,C.aGa,C.aGd,C.aHD,C.aJz,C.aJy,C.aOd,C.aDA,C.aNI,C.aBW,C.biK,C.aNr,C.aPv,C.aNH,C.bgx,C.aOb,C.aOo,C.aMm,C.bfi,C.aOp,C.aGv,C.bng,C.aGt,C.aGw,C.bn_])
u(B.aw,[C.azK,C.aeK,C.ae8,C.blZ,C.aeN,C.agt,C.b3l,C.bvD,C.b3G,C.box,C.bu9,C.b1z,C.b3J,C.aeQ,C.af6,C.b3H,C.JN,C.b1C,C.bfy,C.QK,C.KV,C.bki,C.bkh,C.by3])
u(B.Id,[C.bf_,C.bx1,C.aLF,C.bhK,C.buy])
u(B.mo,[C.beZ,C.bbq,C.buv,C.bex,C.bi8,C.bkp,C.bhd,C.bi4,C.bhM,C.bqT,C.bcA,C.bcd,C.by_,C.buY,C.bu5,C.bh6,C.b3E,C.bsZ,C.bu2])
t(C.bmX,C.aOd)
t(C.bmi,C.aNI)
t(C.bm0,C.aNr)
t(C.bxu,C.aPv)
t(C.bme,C.aNH)
t(C.bmV,C.aOb)
t(C.bAm,C.aOo)
t(C.aGu,C.bAm)
t(C.bfj,C.aMm)
t(C.aGx,C.aOp)
t(C.bxQ,B.j6)
t(C.aa1,B.kK)
t(C.cpS,C.b5q)
t(C.ajJ,C.a4l)
u(B.Z1,[C.aTB,C.aV2])
t(C.ayN,C.aTB)
w(C.aOd,B.cd)
w(C.aNI,B.cd)
w(C.aNr,B.cd)
w(C.aNH,B.cd)
w(C.aOb,B.cd)
w(C.aPv,B.cd)
w(C.aMm,B.eO)
w(C.aOo,B.cd)
v(C.bAm,B.eD)
w(C.aOp,B.cd)})()
B.iW(b.typeUniverse,JSON.parse('{"aUk":{"hQ":["aUk"]},"ol":{"aUk":[],"hQ":["aUk"]},"aTJ":{"M":["T2"],"M.E":"T2"},"a9P":{"y2":[],"oI":[]},"a2k":{"af":[],"v":[]},"aLi":{"ah":["a2k"]},"a_2":{"af":[],"v":[]},"a_0":{"af":[],"v":[]},"azM":{"ah":["a_2"]},"azI":{"ah":["a_0"]},"azK":{"aw":[],"v":[]},"asa":{"af":[],"v":[]},"aFU":{"ah":["asa"]},"aeK":{"aw":[],"v":[]},"ae8":{"aw":[],"v":[]},"aeN":{"aw":[],"v":[]},"agt":{"aw":[],"v":[]},"blZ":{"aw":[],"v":[]},"Xb":{"af":[],"v":[]},"aGa":{"ah":["Xb"]},"b3l":{"aw":[],"v":[]},"bf_":{"aC":[]},"beZ":{"aC":[]},"bx1":{"aC":[]},"bbq":{"aC":[]},"buv":{"aC":[]},"Xc":{"af":[],"v":[]},"aGd":{"ah":["Xc"]},"bex":{"aC":[]},"a1j":{"af":[],"v":[]},"aHD":{"ah":["a1j"]},"bi8":{"aC":[]},"a1Q":{"af":[],"v":[]},"a1P":{"af":[],"v":[]},"aG4":{"af":[],"v":[]},"a0d":{"af":[],"v":[]},"aJz":{"ah":["a1Q"]},"aJy":{"ah":["a1P"]},"bmX":{"ah":["aG4"]},"bkp":{"aC":[]},"aDA":{"ah":["a0d"]},"bvD":{"aw":[],"v":[]},"b3G":{"aw":[],"v":[]},"box":{"aw":[],"v":[]},"Ou":{"af":[],"v":[]},"a_L":{"af":[],"v":[]},"bmi":{"ah":["Ou"]},"bu9":{"aw":[],"v":[]},"bhd":{"aC":[]},"b1z":{"aw":[],"v":[]},"aBW":{"ah":["a_L"]},"a05":{"af":[],"v":[]},"biK":{"ah":["a05"]},"bi4":{"aC":[]},"bhM":{"aC":[]},"bqT":{"aC":[]},"bcA":{"aC":[]},"bcd":{"aC":[]},"by_":{"aC":[]},"buY":{"aC":[]},"bu5":{"aC":[]},"bh6":{"aC":[]},"aq6":{"af":[],"v":[]},"b3J":{"aw":[],"v":[]},"bm0":{"ah":["aq6"]},"aeQ":{"aw":[],"v":[]},"af6":{"aw":[],"v":[]},"aKY":{"af":[],"v":[]},"Ws":{"af":[],"v":[]},"JN":{"aw":[],"v":[]},"aBB":{"af":[],"v":[]},"a97":{"af":[],"v":[]},"b3H":{"aw":[],"v":[]},"b3E":{"aC":[]},"bxu":{"ah":["aKY"]},"aLF":{"aC":[]},"bme":{"ah":["Ws"]},"bgx":{"ah":["aBB"]},"bmV":{"ah":["a97"]},"b1C":{"aw":[],"v":[]},"bhK":{"aC":[]},"bsZ":{"aC":[]},"bu2":{"aC":[]},"aAY":{"af":[],"v":[]},"KP":{"af":[],"v":[]},"a0X":{"af":[],"v":[]},"KV":{"aw":[],"v":[]},"P_":{"af":[],"v":[]},"aGu":{"ah":["P_"],"eD":[]},"bfj":{"ah":["aAY"]},"bfy":{"aw":[],"v":[]},"bfi":{"ah":["KP"]},"QK":{"aw":[],"v":[]},"aGx":{"ah":["a0X"]},"buy":{"aC":[]},"bki":{"aw":[],"v":[]},"bkh":{"aw":[],"v":[]},"Xn":{"af":[],"v":[]},"Xo":{"af":[],"v":[]},"aGs":{"af":[],"v":[]},"at8":{"af":[],"v":[]},"aGv":{"ah":["Xn"]},"bng":{"ah":["Xo"]},"aGt":{"ah":["aGs"]},"bxQ":{"j6":[]},"aGw":{"ah":["at8"]},"by3":{"aw":[],"v":[]},"a98":{"af":[],"v":[]},"bn_":{"ah":["a98"]},"aa1":{"kK":["fA<eX>"],"ky":["fA<eX>"]},"ajJ":{"a4l":[]},"aTB":{"ji":[],"fk":[]},"ayN":{"ji":[],"fk":[]},"aV2":{"ji":[],"fk":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("MH"),U:w("w6<qq>"),bz:w("u"),M:w("db<n>"),bo:w("jX"),g7:w("Up"),gc:w("aB<iI?>"),bq:w("aB<~>"),cc:w("C6"),fS:w("EM"),an:w("IY"),bm:w("O<T2>"),X:w("O<T5>"),f3:w("O<aUk>"),aK:w("O<nr>"),V:w("O<ab>"),O:w("O<u>"),fA:w("O<lV>"),d5:w("O<aB<bB<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dL>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jG>>"),ez:w("O<a9<n,aE>>"),d:w("O<a9<n,@>>"),B:w("O<mS>"),h:w("O<jG>"),gE:w("O<Ah>"),k:w("O<oP>"),g:w("O<m3>"),D:w("O<hT>"),u:w("O<eR>"),m:w("O<vl>"),i:w("O<hI>"),aC:w("O<a9p>"),o:w("O<Ai>"),e3:w("O<aE>"),dN:w("O<p>"),v:w("O<fW>"),cR:w("O<j4>"),J:w("O<ju>"),gx:w("O<pF<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(G,G)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j6>"),p:w("O<v>"),eR:w("O<fk>"),fT:w("O<bb7>"),bx:w("O<aH5>"),gz:w("O<agD>"),x:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<p?>"),Z:w("O<H?>"),cA:w("O<ck>"),A:w("cw<ah<af>>"),gL:w("ai<oP>"),R:w("ai<hT>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bB<H,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<H,+icon3d,picture(n?,n?)>"),bR:w("N<hI,v>"),eC:w("N<oc,n>"),cT:w("N<k2,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,q8>"),gh:w("N<mV,jI<mV>>"),w:w("iF"),ei:w("iI"),g2:w("rR"),fB:w("Fq"),b6:w("Ah"),gX:w("a9h"),dt:w("lz"),ea:w("oP"),bt:w("m3"),I:w("hT"),F:w("eR"),fO:w("mV"),ff:w("vl"),fP:w("hI"),Q:w("wC"),dO:w("at4"),a:w("cu"),C:w("aE"),dw:w("auK"),di:w("aa2"),Y:w("eX"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FW"),dB:w("ds<p>"),bJ:w("ds<n>"),_:w("e0<n>"),N:w("n"),fw:w("qq"),bO:w("au"),K:w("br<p>"),b:w("br<G>"),E:w("dL"),W:w("bt<n>"),ac:w("bt<H>"),ex:w("k6<m3>"),cI:w("k6<n>"),cl:w("k6<G>"),b4:w("Y<lw>"),a8:w("Y<mu>"),fR:w("Y<+(n,n)>"),co:w("ea<p>"),l:w("v"),b2:w("c3<~>"),ev:w("qv<e_>"),dT:w("bk<~>"),q:w("mC"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hT>?"),c:w("ai<@>?"),aP:w("iI?"),af:w("hT?"),go:w("b3L?"),a6:w("a9q?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dL,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dL?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2V=new B.bL(A.aA,null,null,H.asW,null)
D.b34=new B.da(0,-0.15)
D.b35=new B.da(0.62,0)
D.b3a=new B.da(-0.35,-0.45)
D.b3l=new B.da(0.9,-0.85)
D.b5v=new B.be(H.UF,H.UF,A.fQ,A.fQ)
D.b5L=new B.ay(A.b8,1,A.r,-1)
D.brH=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b5X=new B.ay(D.brH,1,A.r,-1)
D.b68=new B.ay(A.aF,1.5,A.r,-1)
D.b6d=new B.ay(A.b8,1.6,A.r,-1)
D.b6t=new B.ay(A.aF,1.4,A.r,-1)
D.b7P=new B.o(null,null,null,null,null,K.Ia,A.a6)
D.c9s=new B.a8(A.a7,A.aa,A.x,G.a6t,null,null)
D.b7X=new B.o(null,null,null,null,null,D.c9s,A.a6)
D.af5=new B.o(A.as,null,null,A.u0,null,null,A.n)
D.bkt=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.brE=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d8x=w([D.bkt,D.brE],x.O)
D.eCo=new B.bY(A.A,0.5,A.x,null,0,D.d8x,null,null)
D.b8f=new B.o(null,null,null,null,null,D.eCo,A.a6)
D.ZC=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b6J=new B.bG(P.vZ,A.a1,A.a1,A.a1)
D.b8h=new B.o(D.ZC,null,D.b6J,null,null,null,A.n)
D.cba=new B.a8(A.a7,A.aa,A.x,A.Sh,null,null)
D.b8o=new B.o(null,null,null,null,null,D.cba,A.a6)
D.agI=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b8r=new B.o(D.agI,null,null,A.rq,null,null,A.n)
D.b8v=new B.o(A.jY,null,null,null,null,null,A.a6)
D.b8y=new B.o(A3.ai_,null,H.aeH,A.mJ,null,null,A.n)
D.Fr=new B.o(A.dO,null,null,null,null,null,A.a6)
D.b8F=new B.o(null,null,null,null,null,E.x2,A.a6)
D.ddV=w([E.aj_,A.c4],x.O)
D.caO=new B.a8(A.b0,A.b7,A.x,D.ddV,null,null)
D.b8J=new B.o(null,null,null,A.mJ,null,D.caO,A.n)
D.dpF=w([A.bo,A.dO,A.jX],x.O)
D.a4r=new B.a8(A.aA,A.aE,A.x,D.dpF,null,null)
D.b8W=new B.o(null,null,null,null,null,D.a4r,A.n)
D.b8X=new B.o(D.agI,null,null,A.l9,null,null,A.n)
D.cCO=w([A.db,A.bo],x.O)
D.caF=new B.a8(A.aA,A.aE,A.x,D.cCO,null,null)
D.b90=new B.o(null,null,null,null,null,D.caF,A.n)
D.b9a=new B.o(null,null,null,null,null,G.v8,A.a6)
D.b9w=new B.o(A.aj0,null,null,null,null,null,A.a6)
D.blw=new B.u(0.5647058823529412,0,0,0,A.q)
D.aff=new B.ab(0,A.G,D.blw,A.JH,28)
D.bbR=new B.aYx()
D.bcp=new C.cAc()
D.afK=new B.cj(A.A,null,null,A.a4g,null)
D.bfg=new B.fl(null,null,null,null,null,E.nB,null,null,null,null)
D.bda=new B.cj(A.A,null,null,D.bfg,null)
D.bUA=new B.ae(A.ed,28,A.c,null,null,null)
D.bdG=new B.cj(A.A,null,null,D.bUA,null)
D.bfd=new B.fl(2,null,null,null,null,A.c2,null,null,null,null)
D.be2=new B.cj(A.A,null,null,D.bfd,null)
D.bUV=new B.ae(K.PR,40,A.bD,null,null,null)
D.be3=new B.cj(A.A,null,null,D.bUV,null)
D.bg7=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bgl=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bgO=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bh_=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bhD=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bhU=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bhW=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mz=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bio=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.biw=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ah2=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bjm=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bkf=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ahk=new B.u(1,1,1,0.9725490196078431,A.q)
D.bkC=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bkT=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bkW=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.blc=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.blC=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bnh=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Zk=new B.u(0.8509803921568627,0,0,0,A.q)
D.bns=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bnz=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.aij=new B.u(0.6,0,0,0,A.q)
D.ail=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bpi=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.ul=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bpM=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bqg=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bqH=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aji=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.ZQ=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.C4=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Nf=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jC=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ajN=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.a_0=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.buz=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bv5=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bvl=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_u=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bwA=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.bxb=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bxv=new B.hP(A.aT,!0,null,null)
D.fDO=new B.F(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h41=new B.B("Bio link",null,D.fDO,null,null,null,null,null,null,null,null,null)
D.bdY=new B.cj(A.A,null,null,D.h41,null)
D.bxK=new B.hP(A.BJ,!0,D.bdY,null)
D.dRd=new B.VO(A.aG,56,Y.Pi,null,null)
D.fAk=new B.F(!0,A.bB,null,null,null,null,null,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN0=new B.B("No presentations yet",null,D.fAk,null,null,null,null,null,null,null,null,null)
D.fER=new B.F(!0,A.cB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKk=new B.B(y.K,null,D.fER,null,A.K,null,null,null,null,null,null,null)
D.d8n=w([D.dRd,A.aB,D.fN0,A.am,D.fKk],x.p)
D.bxZ=new B.fm(A.ah,A.e,A.i,A.l,null,A.p,null,0,D.d8n,null)
D.NH=new C.a54(0,"none")
D.al1=new C.a54(1,"deflate")
D.al2=new C.a54(2,"bzip2")
D.byI=new B.kE(0.165,0.84,0.44,1)
D.dee=w([A.c6,A.dP,A.aF],x.O)
D.c9U=new B.a8(A.aA,A.aE,A.x,D.dee,null,null)
D.b7U=new B.o(null,null,null,null,null,D.c9U,A.n)
D.c38=new B.ae(A.f1,null,A.ab,null,null,null)
D.beB=new B.cj(A.A,null,null,D.c38,null)
D.bzh=new B.bN(D.b7U,A.bk,D.beB,null)
D.buP=new B.u(0.058823529411764705,1,1,1,A.q)
D.dhJ=w([A.by,A.rB,A.rB,D.buP],x.O)
D.cUr=w([0,0.32,0.7,1],x.x)
D.cav=new B.a8(A.aA,A.aE,A.x,D.dhJ,D.cUr,null)
D.b7J=new B.o(null,null,null,null,null,D.cav,A.n)
D.bzo=new B.bN(D.b7J,A.bk,null,null)
D.bAw=new B.mK(1,1,null,null,null,A.br,null)
D.bAz=new B.mK(1,null,null,null,null,D.a_0,null)
D.bB2=new B.bd(125e4)
D.bB8=new B.bd(17e4)
D.bBi=new B.bd(35964e8)
D.bBp=new B.bd(55e4)
D.bBt=new B.bd(68e4)
D.bBU=new B.iq(0,0,0,5)
D.bC8=new B.R(0,16,16,0)
D.bCj=new B.R(0,36,0,36)
D.bCr=new B.R(0,54,0,0)
D.bCy=new B.R(10,0,10,3)
D.bCK=new B.iq(10,16,10,10)
D.bCW=new B.R(10,6,4,6)
D.bCZ=new B.R(10,8,10,6)
D.am1=new B.R(11,8,11,11)
D.bD4=new B.R(12,0,12,24)
D.bDi=new B.R(12,12,12,4)
D.bDl=new B.R(12,12,8,12)
D.bDm=new B.R(12,14,12,10)
D.bDD=new B.R(12,8,8,12)
D.bE2=new B.R(14,14,14,0)
D.bE7=new B.R(14,14,14,90)
D.bEu=new B.R(16,10,16,16)
D.bEv=new B.R(16,10,16,20)
D.amN=new B.R(16,6,16,28)
D.bF3=new B.R(18,0,18,10)
D.bF5=new B.R(18,0,18,30)
D.bF7=new B.R(18,10,18,12)
D.bF8=new B.R(18,10,18,14)
D.bFs=new B.R(18,16,14,18)
D.bFx=new B.R(18,18,18,12)
D.bFD=new B.R(18,26,18,12)
D.bFI=new B.R(18,34,18,34)
D.bFJ=new B.R(18,4,18,14)
D.bFN=new B.R(18,8,18,24)
D.bG6=new B.R(20,16,14,4)
D.bGb=new B.R(20,18,12,4)
D.bGg=new B.R(20,20,12,20)
D.bGi=new B.R(20,22,20,20)
D.bGn=new B.R(20,6,20,6)
D.bGx=new B.R(22,18,22,18)
D.bGF=new B.R(22,24,22,0)
D.bGI=new B.R(22,24,22,4)
D.bGQ=new B.R(22,60,22,22)
D.bGW=new B.R(24,24,24,22)
D.bH5=new B.R(26,10,60,10)
D.bHd=new B.R(28,44,28,44)
D.bHu=new B.R(32,44,32,44)
D.bHC=new B.R(38,30,38,20)
D.bHI=new B.R(4,0,0,6)
D.bHU=new B.iq(4,4,4,4)
D.bIm=new B.iq(6,5,6,5)
D.bIr=new B.R(6,6,8,6)
D.bID=new B.R(8,14,8,14)
D.bIE=new B.R(8,22,8,22)
D.bIN=new B.R(8,6,12,6)
D.bIV=new B.R(8,8,8,4)
D.anM=new B.R(9,9,9,6)
D.bJ5=new B.iq(2.5,2.5,2.5,2.5)
D.bJ6=new B.R(10.5,0,10.5,0)
D.bJ7=new B.R(7,1.5,7,1.5)
D.d5h=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bJn=new B.uV(null,null,D.d5h,A.ya)
D.d2_=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bJo=new B.uV(null,null,D.d2_,A.ya)
D.aXa=new B.F(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3j=new B.B("WORD DESIGN",null,D.aXa,null,null,null,null,null,null,null,null,null)
D.bK3=new B.bz(1,A.bb,D.h3j,null)
D.h2X=new B.B("Slides database",null,Ac.vH,null,null,null,null,null,null,null,null,null)
D.h0a=new B.B("Admin only \xb7 keep as many as you like",null,V.aWC,null,null,null,null,null,null,null,null,null)
D.dyD=w([D.h2X,A.bG,D.h0a],x.p)
D.bya=new B.fm(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dyD,null)
D.bK6=new B.bz(1,A.bb,D.bya,null)
D.fVl=new B.B("NGMY logo",null,A.fG,null,null,null,null,null,null,null,null,null)
D.bK9=new B.bz(1,A.bb,D.fVl,null)
D.fBq=new B.F(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5m=new B.B("TALK TO THE EDITOR",null,D.fBq,null,null,null,null,null,null,null,null,null)
D.bKu=new B.bz(1,A.bb,D.h5m,null)
D.fOV=new B.B("Tell the AI what to change",null,Ac.vH,null,null,null,null,null,null,null,null,null)
D.bKO=new B.bz(1,A.bb,D.fOV,null)
D.bMj=new B.EB(!0,"video/mp4")
D.fzx=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMR=new B.B("Move presentations between devices",null,D.fzx,null,null,null,!1,null,null,1,null,null)
D.bMn=new B.qM(A.e7,A.a7,A.f,D.fMR,null)
D.fO5=new B.B("Edit in Slides",null,A.j0,null,null,null,null,null,null,null,null,null)
D.bMo=new B.qM(A.e7,A.A,A.f,D.fO5,null)
D.bME=new B.dm(1,A.cq,D.bMo,null)
D.a2z=new B.a_(60988,"MaterialIcons",!1)
D.bQ6=new B.a_(61352,"MaterialIcons",!1)
D.apv=new B.a_(61531,"MaterialIcons",!1)
D.bRh=new B.a_(63062,"MaterialIcons",!1)
D.bRo=new B.a_(63109,"MaterialIcons",!1)
D.bRB=new B.a_(63206,"MaterialIcons",!1)
D.aq9=new B.a_(63238,"MaterialIcons",!1)
D.bRT=new B.a_(63338,"MaterialIcons",!1)
D.a3c=new B.a_(63365,"MaterialIcons",!1)
D.a3d=new B.a_(63367,"MaterialIcons",!1)
D.a3e=new B.a_(63368,"MaterialIcons",!1)
D.aqk=new B.a_(63384,"MaterialIcons",!1)
D.bSa=new B.a_(63525,"MaterialIcons",!1)
D.bSe=new B.a_(63568,"MaterialIcons",!1)
D.bSz=new B.a_(983072,"MaterialIcons",!1)
D.bSY=new B.a_(983271,"MaterialIcons",!0)
D.ars=new B.a_(983965,"MaterialIcons",!1)
D.art=new B.a_(983966,"MaterialIcons",!1)
D.bTV=new B.a_(984592,"MaterialIcons",!1)
D.bUc=new B.ae(A.uO,16,A.aD,null,null,null)
D.arF=new B.ae(A.py,18,A.c,null,null,null)
D.bUB=new B.ae(A.CN,18,N.lF,null,null,null)
D.bVg=new B.ae(A.jJ,11,null,null,null,null)
D.bVr=new B.ae(A.a2T,null,A.es,null,null,null)
D.bVZ=new B.ae(A.ta,18,A.aD,null,null,null)
D.bW4=new B.ae(A4.D0,14,null,null,null,null)
D.bW5=new B.ae(A.ek,28,A.bZ,null,null,null)
D.bWh=new B.ae(A.qS,20,A.c,null,null,null)
D.bWo=new B.ae(A.zs,null,null,null,null,null)
D.bWt=new B.ae(A.jI,18,A.h_,null,null,null)
D.bWy=new B.ae(A.k8,null,null,null,null,null)
D.bRj=new B.a_(63065,"MaterialIcons",!1)
D.bXb=new B.ae(D.bRj,15,A.c,null,null,null)
D.bRp=new B.a_(63113,"MaterialIcons",!1)
D.bXh=new B.ae(D.bRp,null,A.ab,null,null,null)
D.bXF=new B.ae(A.uN,22,A.bL,null,null,null)
D.bY_=new B.ae(A.t6,18,null,null,null,null)
D.bY5=new B.ae(A.D6,12,A.c,null,null,null)
D.bTz=new B.a_(983687,"MaterialIcons",!1)
D.bYh=new B.ae(D.bTz,null,A.bo,null,null,null)
D.bYq=new B.ae(A.hO,null,A.bo,null,null,null)
D.bYJ=new B.ae(A.pD,22,A.c,null,null,null)
D.bYN=new B.ae(A.cC,13,A.c,null,null,null)
D.bYT=new B.ae(A.ek,26,A.ay,null,null,null)
D.bYX=new B.ae(A.td,26,A.c,null,null,null)
D.Q2=new B.ae(A.jJ,8,A.c,null,null,null)
D.bZh=new B.ae(A.py,40,A.c,null,null,null)
D.bZi=new B.ae(A.bP3,null,null,null,null,null)
D.bZm=new B.ae(A.v_,20,null,null,null,null)
D.bTy=new B.a_(983683,"MaterialIcons",!1)
D.bZy=new B.ae(D.bTy,null,A.b3,null,null,null)
D.bZz=new B.ae(A.jJ,16,A.bo,null,null,null)
D.bZU=new B.ae(A.pA,null,null,null,null,null)
D.asg=new B.ae(A.wL,22,A.c,null,null,null)
D.c__=new B.ae(A.ed,17,A.c,null,null,null)
D.ash=new B.ae(A.jJ,9,A.c,null,null,null)
D.c_4=new B.ae(A.wH,null,null,null,null,null)
D.bPk=new B.a_(57744,"MaterialIcons",!1)
D.c_b=new B.ae(D.bPk,null,null,null,null,null)
D.c_e=new B.ae(A.wH,16,null,null,null,null)
D.bU3=new B.a_(985181,"MaterialIcons",!1)
D.I2=new B.ae(D.bU3,null,null,null,null,null)
D.c_q=new B.ae(A.k8,16,A.bL,null,null,null)
D.bTp=new B.a_(983615,"MaterialIcons",!1)
D.c_s=new B.ae(D.bTp,12,A.c,null,null,null)
D.asn=new B.ae(A.zb,16,null,null,null,null)
D.c_A=new B.ae(A.ed,21,A.c,null,null,null)
D.c_F=new B.ae(A.hO,17,A.c,null,null,null)
D.c_G=new B.ae(A.uN,null,null,null,null,null)
D.c_Y=new B.ae(A.a3T,20,A.aD,null,null,null)
D.c0c=new B.ae(A.oC,22,E.nB,null,null,null)
D.c0l=new B.ae(A.qR,13,A.ab,null,null,null)
D.c0o=new B.ae(A.ard,20,A.aD,null,null,null)
D.bP1=new B.a_(57495,"MaterialIcons",!1)
D.c0t=new B.ae(D.bP1,null,null,null,null,null)
D.c0x=new B.ae(A.oD,18,A.c,null,null,null)
D.c0U=new B.ae(A.v4,28,A.c,null,null,null)
D.c15=new B.ae(D.aq9,null,A.aF,null,null,null)
D.c16=new B.ae(A.qS,22,A.c,null,null,null)
D.asw=new B.ae(A.a2v,16,null,null,null,null)
D.c1S=new B.ae(A.uN,32,A.c,null,null,null)
D.c2C=new B.ae(A.ja,22,A.c,null,null,null)
D.c2G=new B.ae(A.td,22,A.ab,null,null,null)
D.asN=new B.ae(A.uO,null,A.bW,null,null,null)
D.c3E=new B.ae(A.qM,18,null,null,null,null)
D.c4g=new B.ae(A.ed,18,A.bl,null,null,null)
D.c4n=new B.ae(A.ar8,null,null,null,null,null)
D.c4O=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aWZ,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eO,!0,null,null,null,null)
D.fr4=new B.F(!0,A.bN,null,null,null,null,null,A.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c55=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fr4,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eO,!0,null,null,null,null)
D.c5w=new B.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eO,!0,null,null,null,null)
D.d9A=w([A.dO,A.aF],x.O)
D.c7E=new B.a8(A.a7,A.aa,A.x,D.d9A,null,null)
D.c7Q=new B.a8(A.b0,A.b7,A.Wj,A.azX,null,null)
D.bgD=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.blE=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bpj=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bjd=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cUt=w([D.bgD,D.blE,D.bpj,D.bjd],x.O)
D.c89=new B.a8(A.aA,A.aE,A.x,D.cUt,A.IA,null)
D.dyL=w([A.cI,A.bE,A.b8],x.O)
D.c8b=new B.a8(A.b0,A.b7,A.Wj,D.dyL,null,null)
D.dAm=w([A.bo,A.ci],x.O)
D.c8g=new B.a8(A.a7,A.aa,A.x,D.dAm,null,null)
D.duQ=w([A.fB,A.d3,A.au],x.O)
D.c8i=new B.a8(A.aA,A.aE,A.x,D.duQ,null,null)
D.dg_=w([A.cJ,A.fr],x.O)
D.c8m=new B.a8(A.a7,A.aa,A.x,D.dg_,null,null)
D.dyF=w([N.lF,A.d3],x.O)
D.atA=new B.a8(A.a7,A.aa,A.x,D.dyF,null,null)
D.bmm=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dyC=w([D.bmm,A.wk,A.c2],x.O)
D.c8q=new B.a8(A.a7,A.aa,A.x,D.dyC,null,null)
D.dbl=w([A.b4,A.d2,A.er],x.O)
D.c8r=new B.a8(A.aA,A.aE,A.x,D.dbl,null,null)
D.Qk=new B.a8(A.a7,A.aa,A.x,A.IT,null,null)
D.bvJ=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cNk=w([D.bvJ,A.c2,A.jD],x.O)
D.atF=new B.a8(A.aA,A.aE,A.x,D.cNk,null,null)
D.dlS=w([A.uf,A.aC,D.C4],x.O)
D.c9u=new B.a8(A.a7,A.aa,A.x,D.dlS,null,null)
D.bxc=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bke=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bqv=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.daq=w([D.bxc,D.bke,D.bqv],x.O)
D.atG=new B.a8(A.a7,A.aa,A.x,D.daq,null,null)
D.bmo=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.cbt=w([AA.akH,D.bmo],x.O)
D.c9D=new B.a8(A.b0,A.b7,A.x,D.cbt,null,null)
D.d8k=w([A.mT,A.bD],x.O)
D.c9H=new B.a8(A.b0,A.b7,A.x,D.d8k,null,null)
D.dro=w([A.aF,A.dP],x.O)
D.c9M=new B.a8(A.a7,A.aa,A.x,D.dro,null,null)
D.ajv=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aBI=w([D.ajv,D.jC,D.Mz],x.O)
D.cag=new B.a8(A.aA,A.aE,A.x,D.aBI,null,null)
D.cNc=w([A.dB,A.dF],x.O)
D.caq=new B.a8(A.b0,A.b7,A.x,D.cNc,null,null)
D.doe=w([A.yc,A.yl],x.O)
D.cbc=new B.a8(A.a7,A.aa,A.x,D.doe,null,null)
D.fWX=new B.B("Which Bio link?",null,A.cG,null,null,null,null,null,null,null,null,null)
D.cbp=new B.qb(null,D.fWX,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zR=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a8t=new C.ld(2,"elegantNavy")
D.hJf=w([A.ZN,D.jC,A.c2],x.O)
D.kd=new C.yg(0,"classic")
D.a8i=new C.jG("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a8t,4294967035,4279378237,4290283019,D.kd)
D.aLm=new C.ld(3,"elegantGold")
D.bg6=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bhj=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ahO=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hII=w([D.bg6,D.bhj,D.ahO],x.O)
D.a8g=new C.jG("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aLm,4294966515,4281016592,4289102906,D.kd)
D.dWL=new C.ld(22,"goldRibbon")
D.hIE=w([A.ZN,D.jC,A.ix],x.O)
D.a89=new C.jG("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dWL,4294967035,4279378237,4291404327,D.kd)
D.dWM=new C.ld(23,"goldBaroque")
D.aiy=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hIK=w([D.aiy,A.aC,A.jD],x.O)
D.a8a=new C.jG("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dWM,4294964964,4283053072,4292128567,D.kd)
D.dWO=new C.ld(4,"elegantEmerald")
D.biE=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bjE=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hIQ=w([D.biE,D.bjE,A.ix],x.O)
D.a8b=new C.jG("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dWO,4294376440,4279122734,4291404327,D.kd)
D.dWP=new C.ld(5,"elegantBurgundy")
D.bo_=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hIX=w([D.bo_,A.agU,A.ix],x.O)
D.a8e=new C.jG("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dWP,4294965238,4283043359,4291404327,D.kd)
D.dWI=new C.ld(19,"goldFiligree")
D.Nn=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hIL=w([D.Nn,A.aC,A.jD],x.O)
D.a8c=new C.jG("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dWI,4294966259,4279378237,4292128567,D.kd)
D.dWJ=new C.ld(20,"goldLaurel")
D.bvz=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hIY=w([A.Mr,A.ix,D.bvz],x.O)
D.a8d=new C.jG("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dWJ,4294966776,4282000405,4291404327,D.kd)
D.dWK=new C.ld(21,"goldCrest")
D.agL=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bvG=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hIN=w([D.agL,A.aC,D.bvG],x.O)
D.a8h=new C.jG("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dWK,4294965484,4283053072,4292128567,D.kd)
D.dWN=new C.ld(24,"goldStar")
D.bx3=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hIR=w([D.bx3,A.aC,D.jC],x.O)
D.a8f=new C.jG("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dWN,4294966518,4279378237,4292128567,D.kd)
D.Ic=w([D.a8i,D.a8g,D.a89,D.a8a,D.a8b,D.a8e,D.a8c,D.a8d,D.a8h,D.a8f],x.h)
D.r3=new C.mV(0,"blank")
D.U_=new C.mV(1,"title")
D.nc=new C.mV(2,"titleContent")
D.egn=new C.mV(3,"twoColumn")
D.E6=new C.mV(4,"section")
D.ego=new C.mV(5,"comparison")
D.Jr=new C.mV(6,"flashcard")
D.Js=new C.mV(7,"quiz")
D.Jt=new C.mV(8,"worksheet")
D.au_=w([D.r3,D.U_,D.nc,D.egn,D.E6,D.ego,D.Jr,D.Js,D.Jt],B.at("O<mV>"))
D.aCR=w([Aq.Z1,A.dF],x.O)
D.kZ=w([A.c2,A.bL,A.hA,A.ib,D.C4],x.O)
D.dSu=new C.jd("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aCR,D.kZ)
D.bvX=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bnY=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d8y=w([D.bvX,D.bnY],x.O)
D.dSl=new C.jd("confetti","Golden Confetti","Together we rise",D.d8y,D.kZ)
D.d5n=w([A.oa,A.YC],x.O)
D.dSm=new C.jd("crown","Crown of Glory","Built for our community",D.d5n,D.kZ)
D.bk2=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bnB=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.dcO=w([D.bk2,D.bnB],x.O)
D.va=w([A.bN,A.aS,A.c,A.bi,A.an],x.O)
D.dSg=new C.jd("aurora","Aurora Gala","A brighter future, together",D.dcO,D.va)
D.bpl=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.don=w([G.agl,D.bpl],x.O)
D.dSx=new C.jd("champagne","Champagne Toast","Cheers to every member",D.don,D.kZ)
D.dSy=new C.jd("diamonds","Diamond Rain","Every member is a jewel",A0.aDB,D.va)
D.bh7=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bn0=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.du1=w([D.bh7,D.bn0],x.O)
D.dSb=new C.jd("starburst","Golden Starburst","Thank you!",D.du1,D.kZ)
D.cbA=w([A.fq,A.yp],x.O)
D.agv=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RV=w([A.pi,A.iw,A.wl,A.ob,D.agv],x.O)
D.dSF=new C.jd("balloons","Luxury Balloons","Let's celebrate",D.cbA,D.RV)
D.d4A=w([A.YQ,A.w],x.O)
D.dSt=new C.jd("galaxy","Galaxy Spiral","The sky is not the limit",D.d4A,D.va)
D.btH=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dkz=w([A.ku,D.btH],x.O)
D.dSo=new C.jd("redcarpet","Red Carpet","Tonight we shine",D.dkz,D.kZ)
D.brb=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bp5=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dpk=w([D.brb,D.bp5],x.O)
D.dSd=new C.jd("coins","Gold Coin Rain","Every contribution counts",D.dpk,D.kZ)
D.dwW=w([A.dB,A.ia],x.O)
D.dSj=new C.jd("lanterns","Sky Lanterns","Lighting the way together",D.dwW,D.kZ)
D.bli=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d2l=w([A.yr,D.bli],x.O)
D.dSf=new C.jd("hearts","Floating Hearts","Made with love",D.d2l,D.RV)
D.bhM=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.biL=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dyA=w([D.bhM,D.biL],x.O)
D.dSE=new C.jd("petals","Rose Petals","Thank you, from our hearts",D.dyA,D.RV)
D.buN=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.duo=w([A.lg,D.buN],x.O)
D.dSa=new C.jd("butterflies","Golden Butterflies","New beginnings",D.duo,D.kZ)
D.bqq=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d3r=w([D.bqq,A.w],x.O)
D.dSw=new C.jd("neon","Neon Night","Let's go!",D.d3r,D.va)
D.bmD=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.drB=w([A.MW,D.bmD],x.O)
D.dSz=new C.jd("disco","Disco Ball","Party time",D.drB,D.va)
D.br0=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dr5=w([A.fB,D.br0],x.O)
D.dSe=new C.jd("sunrise","Golden Sunrise","A new day for our community",D.dr5,D.kZ)
D.dqG=w([A.rH,A.dF],x.O)
D.dSA=new C.jd("pearls","Ocean Pearls","Deep roots, bright future",D.dqG,D.va)
D.bk8=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dqU=w([D.bk8,A.dF],x.O)
D.dSD=new C.jd("snow","Winter Gala","Warm wishes to all",D.dqU,D.va)
D.bgf=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bhy=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dxr=w([D.bgf,D.bhy],x.O)
D.dSs=new C.jd("laurel","Laurel Victory","We did it together",D.dxr,D.kZ)
D.bg5=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bnx=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d1i=w([D.bg5,D.bnx],x.O)
D.dSC=new C.jd("ribbons","Silk Ribbons","Elegance in every step",D.d1i,D.kZ)
D.boJ=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cN9=w([G.C3,D.boJ],x.O)
D.dSp=new C.jd("kente","Kente Pride","Proud of our roots",D.cN9,D.kZ)
D.brS=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bva=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.deC=w([D.brS,D.bva],x.O)
D.dSk=new C.jd("trophy","Trophy Shine","Winners together",D.deC,D.kZ)
D.dr1=w([Ar.MG,A.w],x.O)
D.dSc=new C.jd("shooting","Shooting Stars","Make a wish",D.dr1,D.va)
D.bgp=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.aks=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dxK=w([D.bgp,D.aks],x.O)
D.dSq=new C.jd("bokeh","Golden Bokeh","Shine bright",D.dxK,D.kZ)
D.bgQ=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dlq=w([D.bgQ,A.w],x.O)
D.dSi=new C.jd("orbits","Golden Orbits","Always moving forward",D.dlq,D.kZ)
D.buO=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dhB=w([A.ahJ,D.buO],x.O)
D.dSn=new C.jd("flowers","Blooming Garden","Growing together",D.dhB,D.RV)
D.bgB=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bho=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dwn=w([D.bgB,D.bho],x.O)
D.dSh=new C.jd("music","Music Party","Celebrate with us",D.dwn,D.va)
D.bip=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bvC=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d2z=w([D.bip,D.bvC],x.O)
D.dSB=new C.jd("mandala","Royal Mandala","Harmony and unity",D.d2z,D.kZ)
D.dhH=w([G.C3,D.aks],x.O)
D.dSv=new C.jd("sparklers","Golden Sparklers","Light up the night",D.dhH,D.kZ)
D.dSr=new C.jd("city","City Lights","The whole city celebrates",D.aCR,D.kZ)
D.Il=w([D.dSu,D.dSl,D.dSm,D.dSg,D.dSx,D.dSy,D.dSb,D.dSF,D.dSt,D.dSo,D.dSd,D.dSj,D.dSf,D.dSE,D.dSa,D.dSw,D.dSz,D.dSe,D.dSA,D.dSD,D.dSs,D.dSC,D.dSp,D.dSk,D.dSc,D.dSq,D.dSi,D.dSn,D.dSh,D.dSB,D.dSv,D.dSr],B.at("O<jd>"))
D.eIm=new B.y("","No ring")
D.eYR=new B.y("platinum","Platinum")
D.eUT=new B.y("glow","Glow")
D.eM6=new B.y("double","Double line")
D.eL_=new B.y("framed","Gallery frame")
D.eHT=new B.y("rosegold","Rose gold")
D.eVI=new B.y("jewels","Jeweled")
D.eSj=new B.y("aurora","Aurora")
D.Do=w([D.eIm,A.UL,D.eYR,D.eUT,M.aS9,D.eM6,A.aS7,D.eL_,D.eHT,D.eVI,D.eSj],x.L)
D.cwc=w([D.a8c,D.a8d,D.a8h,D.a89,D.a8a,D.a8f],x.h)
D.c_O=new B.ae(G.ap5,16,null,null,null,null)
D.bbe=new B.w6(A.bp,D.c_O,null,x.U)
D.bPt=new B.a_(58027,"MaterialIcons",!1)
D.bUi=new B.ae(D.bPt,16,null,null,null,null)
D.bbc=new B.w6(A.K,D.bUi,null,x.U)
D.bPu=new B.a_(58030,"MaterialIcons",!1)
D.bYo=new B.ae(D.bPu,16,null,null,null,null)
D.bbf=new B.w6(A.e4,D.bYo,null,x.U)
D.cCx=w([D.bbe,D.bbc,D.bbf],B.at("O<w6<qq>>"))
D.cKo=w([A.C8,A.hI],x.O)
D.cKp=w([A.b4,A.bd,A.er],x.O)
D.RK=w([A.bL,A.ib,A.hA,A.aC,A.ob],x.O)
D.cNf=w([A.c2,D.jC,D.Mz],x.O)
D.cNN=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eFG=new B.y(4278913286,4280030216)
D.eFY=new B.y(4279373061,4278518787)
D.eG4=new B.y(4279898630,4278847235)
D.ddZ=w([D.eFG,D.eFY,D.eG4],x.n)
D.d9j=w(["\u265b","\u269c","\u2726"],x.s)
D.dWG=new C.yi("Royal Onyx & Gold",D.ddZ,4292128567,4294370209,4294965479,3874020544,D.d9j)
D.eFt=new B.y(4278326799,4278598442)
D.eFv=new B.y(4278395929,4278258953)
D.eFC=new B.y(4278599728,4278327826)
D.dwN=w([D.eFt,D.eFv,D.eFC],x.n)
D.d3j=w(["\u269c","\u2756","\u2727"],x.s)
D.dWD=new C.yi("Imperial Emerald",D.dwN,4293050997,4294699968,4294180856,3872254170,D.d3j)
D.eFw=new B.y(4278455076,4278918747)
D.eFB=new B.y(4278587439,4278322714)
D.eFP=new B.y(4279051376,4278455076)
D.duM=w([D.eFw,D.eFB,D.eFP],x.n)
D.dmb=w(["\u2654","\u2726","\u2748"],x.s)
D.dWx=new C.yi("Sapphire Crown",D.duM,4291417834,4294967295,4294310143,3871986666,D.dmb)
D.eG2=new B.y(4279894534,4283041554)
D.eGe=new B.y(4281008906,4279042307)
D.eGm=new B.y(4284221976,4279894534)
D.dB2=w([D.eG2,D.eGe,D.eGm],x.n)
D.d4J=w(["\u265b","\u2766","\u2726"],x.s)
D.dWz=new C.yi("Ruby Throne",D.dB2,4293378685,4294963145,4294964466,3874213833,D.d4J)
D.eFX=new B.y(4279371039,4281995100)
D.eG6=new B.y(4280092723,4278714896)
D.eGj=new B.y(4283045242,4279371039)
D.dxa=w([D.eFX,D.eG6,D.eGj],x.n)
D.dva=w(["\u2655","\u2756","\u2727"],x.s)
D.dWE=new C.yi("Amethyst Palace",D.dxa,4293314984,4294963421,4294702591,3873229802,D.dva)
D.eFy=new B.y(4278519045,4280032287)
D.eFQ=new B.y(4279111184,4278321666)
D.eGb=new B.y(4280492839,4278716426)
D.dtv=w([D.eFy,D.eFQ,D.eGb],x.n)
D.dkl=w(["\u2726","\u25c6","\u2742"],x.s)
D.dWB=new C.yi("Obsidian & Platinum",D.dtv,4293256418,4294967295,4294638330,3872378836,D.dkl)
D.eG3=new B.y(4279896588,4282194463)
D.eGc=new B.y(4280553487,4279043334)
D.eGk=new B.y(4283048488,4279896588)
D.djK=w([D.eG3,D.eGc,D.eGk],x.n)
D.dz4=w(["\u2766","\u273f","\u2727"],x.s)
D.dWy=new C.yi("Rose Gold Velvet",D.djK,4293440672,4294960345,4294964979,3874214602,D.dz4)
D.eFz=new B.y(4278520340,4279180595)
D.eFE=new B.y(4278718495,4278322443)
D.eG0=new B.y(4279510591,4278520340)
D.cU7=w([D.eFz,D.eFE,D.eG0],x.n)
D.dl6=w(["\u269c","\u2736","\u2756"],x.s)
D.dWC=new C.yi("Midnight Brass",D.cU7,4291405148,4293975208,4294439914,3872837564,D.dl6)
D.eGz=new B.y(4294703086,4293780428)
D.eGv=new B.y(4294307549,4293187253)
D.eGA=new B.y(4294966517,4293977807)
D.d75=w([D.eGz,D.eGv,D.eGA],x.n)
D.dlu=w(["\u269c","\u265b","\u2726"],x.s)
D.dWF=new C.yi("Ivory Marble & Gold",D.d75,4289760572,4286209048,4280951062,3863625518,D.dlu)
D.eFK=new B.y(4278978566,4280555024)
D.eG_=new B.y(4279504137,4278518530)
D.eGg=new B.y(4281211923,4278978566)
D.d4z=w([D.eFK,D.eG_,D.eGg],x.n)
D.dvY=w(["\u2742","\u2726","\u265c"],x.s)
D.dWA=new C.yi("Onyx & Copper",D.d4z,4291856987,4294365880,4294964718,3873885630,D.dvY)
D.cNV=w([D.dWG,D.dWD,D.dWx,D.dWz,D.dWE,D.dWB,D.dWy,D.dWC,D.dWF,D.dWA],B.at("O<yi>"))
D.cQk=w([A.aC,D.C4,A.ib],x.O)
D.eOm=new B.y("Original",null)
D.eOw=new B.y("Wide 16:9",1.7777777777777777)
D.eQU=new B.y("Landscape 3:2",1.5)
D.eNN=new B.y("Photo 4:3",1.3333333333333333)
D.f1L=new B.y("Portrait 3:4",0.75)
D.aA5=w([D.eOm,D.eOw,D.eQU,D.eNN,M.aRY,D.f1L],B.at("O<+(n,G?)>"))
D.aA6=w([A.ib,A.bT,A.b9,A.bg],x.O)
D.eR5=new B.y("","Original")
D.eT2=new B.y("circle","Circle")
D.eZF=new B.y("rounded","Rounded")
D.f_F=new B.y("triangle","Triangle")
D.eV9=new B.y("hexagon","Hexagon")
D.eTt=new B.y("diamond","Diamond")
D.eSi=new B.y("arch","Arch")
D.Du=w([D.eR5,D.eT2,D.eZF,D.f_F,D.eV9,D.eTt,D.eSi],x.L)
D.dRA=new C.lw("classic_blue","Classic Blue","Normal",A.bo,A.c,A.lh,A.db,A.aM)
D.dRQ=new C.lw("campus_green","Campus Green","Normal",A.b3,A.ny,A.uh,A.hh,A.cT)
D.dRH=new C.lw("warm_sand","Warm Sand","Normal",A.e0,A.hA,A.bL,A.id,A.og)
D.dRO=new C.lw("slate_minimal","Slate Minimal","Normal",A.bx,A.aS,A.bi,A.a_,A.aM)
D.dRz=new C.lw("coral_fresh","Coral Fresh","Normal",A.c6,A.hZ,A.qc,A.kv,A.ua)
D.dRP=new C.lw("lavender_calm","Lavender Calm","Normal",A.b8,A.qf,A.qh,A.nv,A.kq)
D.dRB=new C.lw("ocean_breeze","Ocean Breeze","Normal",A.fr,A.rP,A.u6,A.uc,A.oi)
D.ajD=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dRM=new C.lw("berry_pop","Berry Pop","Normal",A.fe,D.ajD,A.kO,G.a_r,A.C9)
D.dRC=new C.lw("midnight_pro","Midnight Pro","Professional",A.aF,A.a_,A.dB,A.kO,A.cx)
D.dRL=new C.lw("executive_navy","Executive Navy","Professional",A.d7,A.aiO,A.db,A.lf,A.bN)
D.dRJ=new C.lw("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.br,A.a_,A.aS,A.cx)
D.dRD=new C.lw("corporate_steel","Corporate Steel","Professional",A.ok,A.a_,A.mW,A.fK,A.bN)
D.dRG=new C.lw("gold_luxe","Gold Luxe","Luxury",A.mO,A.dX,A.ph,A.m6,A.bL)
D.br5=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dRK=new C.lw("rose_gold_elite","Rose Gold Elite","Luxury",A.hI,D.br5,A.a_8,A.iw,A.ob)
D.dRN=new C.lw("platinum_night","Platinum Night","Luxury",A.cx,A.dF,A.br,A.aS,A.bi)
D.dRR=new C.lw("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.qk,A.eY,A.qt,A.jV)
D.dRy=new C.lw("royal_purple","Royal Purple","Luxury",A.nu,A.Z8,A.kq,A.kO,A.Mq)
D.dRI=new C.lw("neon_pitch","Neon Pitch","Bold",A.b9,A.dF,A.a_,A.aZ,A.bi)
D.dRF=new C.lw("crimson_impact","Crimson Impact","Bold",A.bD,A.ku,A.em,A.rQ,A.eX)
D.dRE=new C.lw("sunset_gallery","Sunset Gallery","Bold",A.fs,A.ua,A.kv,A.qc,A.mU)
D.Iv=w([D.dRA,D.dRQ,D.dRH,D.dRO,D.dRz,D.dRP,D.dRB,D.dRM,D.dRC,D.dRL,D.dRJ,D.dRD,D.dRG,D.dRK,D.dRN,D.dRR,D.dRy,D.dRI,D.dRF,D.dRE],B.at("O<lw>"))
D.d12=w([A.c2,D.jC],x.O)
D.dk3=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eS2=new B.y("Faces & people",D.dk3)
D.cQo=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eEi=new B.y("Ideas & work",D.cQo)
D.d9P=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eVe=new B.y("Nature",D.d9P)
D.dkc=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eOk=new B.y("Places & things",D.dkc)
D.ddw=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eSn=new B.y("Symbols",D.ddw)
D.d18=w([D.eS2,D.eEi,D.eVe,D.eOk,D.eSn],B.at("O<+(n,ai<n>)>"))
D.bgG=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d1u=w([A.c2,D.ahO,D.bgG],x.O)
D.bau=new B.ab(0,A.G,A.FD,A.aMc,40)
D.ba5=new B.ab(0,A.G,A.pd,A.ev,8)
D.d1I=w([D.bau,D.ba5],x.V)
D.d2f=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aAu=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a5E=w([A.ib,A.er,A.bD,A.as,A.c6],x.O)
D.d3c=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ai3=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d3o=w([A.ZY,D.ai3,A.ZY],x.O)
D.d3t=w([A.ix,D.jC,D.Mz],x.O)
D.eO6=new B.y(A.bp,D.a3d)
D.ePz=new B.y(A.K,D.a3c)
D.eJ8=new B.y(A.e4,D.a3e)
D.d4t=w([D.eO6,D.ePz,D.eJ8],B.at("O<+(qq,a_)>"))
D.d4w=w([A.b8,A.aF],x.O)
D.d1=new C.JO(0,"text")
D.lT=new C.JO(1,"image")
D.fj=new C.JO(2,"shape")
D.TZ=new C.JO(3,"pdf")
D.ls=new C.JO(4,"signature")
D.a8D=new C.JO(5,"bio")
D.d5t=w([D.d1,D.lT,D.fj,D.TZ,D.ls,D.a8D],B.at("O<JO>"))
D.d5u=w([A.bs,A.cK],B.at("O<IG>"))
D.d69=w(["School","Documents","Sign & present"],x.s)
D.baA=new B.ab(0,A.G,A.akh,A.vv,28)
D.d6x=w([D.baA],x.V)
D.d6Q=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.S2=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAW=w([A.ib,A.Gv,A.bi,A.c,A.pi,A.aC],x.O)
D.f18=new B.y(0.1,0.08)
D.eVc=new B.y(0.3,0.05)
D.eIB=new B.y(0.55,0.1)
D.eN2=new B.y(0.8,0.06)
D.eQk=new B.y(0.92,0.16)
D.ePO=new B.y(0.2,0.2)
D.eNx=new B.y(0.7,0.22)
D.eTQ=new B.y(0.05,0.4)
D.eQM=new B.y(0.95,0.45)
D.eJo=new B.y(0.12,0.7)
D.eLL=new B.y(0.88,0.75)
D.eLT=new B.y(0.4,0.9)
D.eGR=new B.y(0.65,0.93)
D.eMG=new B.y(0.25,0.97)
D.eO3=new B.y(0.85,0.9)
D.eKj=new B.y(0.5,0.04)
D.d8t=w([D.f18,D.eVc,D.eIB,D.eN2,D.eQk,D.ePO,D.eNx,D.eTQ,D.eQM,D.eJo,D.eLL,D.eLT,D.eGR,D.eMG,D.eO3,D.eKj],x.G)
D.d8C=w([A.c,A.hI,A.aG,A.aV],x.O)
D.ei_=new C.k2("office_blue","Office Blue",A.bo,A.db,A.aM,A.c,A.lh)
D.eia=new C.k2("campus_green","Campus Green",A.b3,A.hh,A.cT,A.ny,A.uh)
D.ei0=new C.k2("sunset","Sunset",A.fs,A.kv,A.og,A.hZ,A.qc)
D.ei1=new C.k2("midnight","Midnight",A.aF,A.kO,A.cx,A.a_,A.dB)
D.eic=new C.k2("classic","Classic",A.d3,A.dX,A.m7,A.hA,A.fA)
D.ei9=new C.k2("rose_gold","Rose Gold",A.hI,A.ys,A.yr,A.wl,A.C8)
D.ehV=new C.k2("ocean_teal","Ocean Teal",A.fr,A.uc,A.oi,A.rP,A.u6)
D.ehU=new C.k2("slate_pro","Slate Pro",A.bx,A.a_,A.aM,A.aS,A.bi)
D.ehT=new C.k2("neon_night","Neon Night",A.b9,A.aZ,A.bi,A.dF,A.a_)
D.ei4=new C.k2("lavender","Lavender",A.b8,A.nv,A.kq,A.qf,A.qh)
D.ei6=new C.k2("coral","Coral",A.c6,A.kv,A.ua,A.hZ,A.mU)
D.ehW=new C.k2("forest","Forest",A.hy,A.ea,A.cl,A.m8,A.es)
D.ehX=new C.k2("berry","Berry",A.fe,G.a_r,A.C9,D.ajD,A.kO)
D.ei3=new C.k2("sand","Sand",A.e0,A.id,A.og,A.hA,A.bL)
D.ei8=new C.k2("ice","Ice",A.ok,A.G_,A.aM,A.oh,A.fK)
D.ehZ=new C.k2("charcoal","Charcoal",A.an,A.aS,A.cx,A.br,A.a_)
D.ehS=new C.k2("mint","Mint",A.aV,A.fY,A.hh,A.m8,A.qt)
D.ei7=new C.k2("crimson","Crimson",A.bD,A.mT,A.ku,A.Gt,A.rQ)
D.bjD=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.ei2=new C.k2("gold","Gold",A.mO,A.yc,A.ph,D.bjD,A.m6)
D.ei5=new C.k2("aqua","Aqua",A.bU,A.Gd,A.pe,A.qg,A.pj)
D.ehY=new C.k2("plum","Plum",A.nu,A.yp,A.C9,A.G0,A.rL)
D.eib=new C.k2("steel","Steel",A.d7,A.db,A.br,A.lh,A.lf)
D.a5U=w([D.ei_,D.eia,D.ei0,D.ei1,D.eic,D.ei9,D.ehV,D.ehU,D.ehT,D.ei4,D.ei6,D.ehW,D.ehX,D.ei3,D.ei8,D.ehZ,D.ehS,D.ei7,D.ei2,D.ei5,D.ehY,D.eib],B.at("O<k2>"))
D.d8Z=w([A.c2,A.jD],x.O)
D.U0=new C.hI(10,"rotate3d")
D.Jv=new C.hI(8,"flip")
D.aLF=new C.hI(19,"spiral")
D.r4=new C.hI(16,"bounce")
D.aLI=new C.hI(9,"flipVertical")
D.d9_=w([D.U0,D.Jv,D.aLF,D.r4,D.aLI],x.i)
D.eo=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d9m=w([0.62,1],x.x)
D.d9Y=w([0,0.32,0.68,1],x.x)
D.nd=new C.hI(6,"zoom")
D.vp=new C.hI(4,"slideUp")
D.vo=new C.hI(2,"slideLeft")
D.da8=w([D.nd,D.Jv,D.vp,D.U0,D.vo],x.i)
D.daE=w([A.bT,A.hI,A.iw,A.ib,A.c],x.O)
D.bao=new B.ab(0,A.G,D.aij,A.vv,30)
D.dbr=w([D.bao],x.V)
D.etA=new B.p(0,-2.5)
D.etr=new B.p(-2.5,0)
D.erE=new B.p(2.5,0)
D.dbu=w([A.Ue,A.a93,A.aMQ,A.a92,D.etA,A.a95,D.etr,D.erE],x.dN)
D.IE=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.dc1=w([23,114,69,56,80,144],x.t)
D.dcv=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.dcX=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.deH=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.deM=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bm=new C.vl(0,"rectangle")
D.f2=new C.vl(1,"circle")
D.lt=new C.vl(6,"hexagon")
D.df2=w([D.bm,D.f2,D.lt],x.m)
D.oS=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ajM=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dfB=w([D.ajM,A.ea],x.O)
D.eIS=new B.y("","Classic")
D.eH5=new B.y("caps","Bold caps")
D.eTT=new B.y("elegant","Elegant")
D.eZZ=new B.y("shadow","Shadow")
D.eNq=new B.y("neon","Neon glow")
D.eXF=new B.y("marker","Highlighter")
D.f_c=new B.y("stamp","Stamp")
D.eMi=new B.y("threed","3D")
D.eUp=new B.y("fire","Fire")
D.eVo=new B.y("ice","Ice")
D.eT1=new B.y("chalk","Chalk")
D.eT6=new B.y("comic","Comic")
D.f0u=new B.y("softglow","Soft glow")
D.eWr=new B.y("lowercase","Lowercase")
D.eTB=new B.y("double","Echo")
D.f0D=new B.y("whisper","Whisper")
D.aBS=w([D.eIS,D.eH5,D.eTT,D.eZZ,D.eNq,M.aS8,D.eXF,D.f_c,M.aSa,D.eMi,M.aS2,D.eUp,D.eVo,D.eT1,D.eT6,A.UL,At.aSb,D.f0u,D.eWr,D.eTB,D.f0D],x.L)
D.dgW=w([3,5,7,10,12,15],x.t)
D.dix=w([A.bT,A.bL,A.c,A.eK,A.cI],x.O)
D.dJ2=new C.tR(10,"cardWorld")
D.E_=new C.Ce(3,"rounded")
D.dZG=new C.lz("world","NGMY World",D.dJ2,D.E_,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dJ3=new C.tR(11,"cardSplit")
D.dZC=new C.lz("business","Business Wire",D.dJ3,D.E_,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dJ4=new C.tR(12,"cardBreaking")
D.dZP=new C.lz("breaking","Breaking Red",D.dJ4,D.E_,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dJ5=new C.tR(13,"cardFeature")
D.dZI=new C.lz("feature","Tech Feature",D.dJ5,D.E_,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aKi=new C.tR(6,"circle")
D.aKc=new C.Ce(4,"circle")
D.dZM=new C.lz("parchment","Royal Circle",D.aKi,D.aKc,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dZB=new C.lz("ocean","Blue Ocean",D.aKi,D.aKc,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dJ8=new C.tR(7,"rail")
D.aKb=new C.Ce(1,"double")
D.dZD=new C.lz("forest","Green Leaf",D.dJ8,D.aKb,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aKf=new C.tR(1,"sideBySide")
D.dZR=new C.lz("herald","NGMY Herald",D.aKf,D.E_,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aKe=new C.tR(0,"classic")
D.a7P=new C.Ce(9,"shadow")
D.dZQ=new C.lz("daily","The Daily",D.aKe,D.a7P,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dJ6=new C.tR(2,"splash")
D.aKd=new C.Ce(6,"cutCorner")
D.dZA=new C.lz("tabloid","Big Tabloid",D.dJ6,D.aKd,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aKj=new C.tR(9,"minimal")
D.dZL=new C.lz("modern","Modern Digest",D.aKj,D.E_,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aKg=new C.tR(3,"magazine")
D.aKa=new C.Ce(0,"plain")
D.dZH=new C.lz("midnight","Midnight Edition",D.aKg,D.aKa,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dJ9=new C.tR(8,"banner")
D.dZJ=new C.lz("metro","Metro Wire",D.dJ9,D.aKd,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dJ1=new C.Ce(8,"arch")
D.dZK=new C.lz("sunrise","Sunrise Post",D.aKg,D.dJ1,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aKh=new C.tR(5,"scrapbook")
D.dJ0=new C.Ce(5,"tape")
D.dZF=new C.lz("neon","Neon Beat",D.aKh,D.dJ0,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dJ7=new C.tR(4,"wrap")
D.dZS=new C.lz("gold","Golden Press",D.dJ7,D.a7P,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dZT=new C.lz("minimal","Paper White",D.aKj,D.a7P,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dZE=new C.lz("gazette","Fresh Gazette",D.aKe,D.aKb,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dZO=new C.lz("times","Classic Times",D.aKf,D.aKa,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tw=new C.Ce(2,"polaroid")
D.dZN=new C.lz("scrapbook","Memory Scrapbook",D.aKh,D.Tw,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a6b=w([D.dZG,D.dZC,D.dZP,D.dZI,D.dZM,D.dZB,D.dZD,D.dZR,D.dZQ,D.dZA,D.dZL,D.dZH,D.dZJ,D.dZK,D.dZF,D.dZS,D.dZT,D.dZE,D.dZO,D.dZN],B.at("O<lz>"))
D.diK=w([0.45,1],x.x)
D.IK=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dj9=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hDv=new C.oZ("Original",0,1,1,0,0,0)
D.hDz=new C.oZ("Black & white",0,1.1,0,0,0,0)
D.hDm=new C.oZ("Noir",-0.05,1.55,0,0,0,0)
D.hDq=new C.oZ("Sepia",0,1,0.25,0.9,0,0)
D.hDp=new C.oZ("Vivid",0,1.15,1.6,0,0,0)
D.hDi=new C.oZ("Pop",0,1.3,1.9,0,0,0)
D.hDk=new C.oZ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hDw=new C.oZ("Matte",0,0.9,0.85,0,0,0.55)
D.hDr=new C.oZ("Cool",0,1.05,1,-0.8,0,0)
D.hDy=new C.oZ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hDj=new C.oZ("Golden hour",0.04,1,1.25,1,0,0)
D.hDo=new C.oZ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hDx=new C.oZ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hDn=new C.oZ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hDt=new C.oZ("Retro",0,0.9,0.7,0.4,0,0.35)
D.hDs=new C.oZ("Forest",0,1,1.2,-0.1,-0.45,0)
D.hDu=new C.oZ("Rose",0,1,1.1,0.3,0.4,0)
D.hDl=new C.oZ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dja=w([D.hDv,D.hDz,D.hDm,D.hDq,D.hDp,D.hDi,D.hDk,D.hDw,D.hDr,D.hDy,D.hDj,D.hDo,D.hDx,D.hDn,D.hDt,D.hDs,D.hDu,D.hDl],B.at("O<oZ>"))
D.bg0=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.djc=w([D.ajM,A.ea,D.bg0],x.O)
D.eEb=new B.y(0.12,0.3)
D.eVz=new B.y(0.26,0.75)
D.eTP=new B.y(0.8,0.22)
D.f_o=new B.y(0.9,0.7)
D.eWq=new B.y(0.5,0.15)
D.eYz=new B.y(0.65,0.85)
D.eKQ=new B.y(0.08,0.85)
D.djt=w([D.eEb,D.eVz,D.eTP,D.f_o,D.eWq,D.eYz,D.eKQ],x.G)
D.aC6=w([A.b9,A.bT,A.bg,A.b4],x.O)
D.dkp=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dkD=w([A.c,A.fK,A.dn,A.wa],x.O)
D.bjT=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dlG=w([D.bjT,D.ai3],x.O)
D.dlI=w([A.uf,A.aC],x.O)
D.dlZ=w([0,0.25,0.75,1],x.x)
D.dm0=w([A.yg,A.pi],x.O)
D.aLf=new C.ld(10,"kenteSunset")
D.hIG=w([D.aiy,A.ko,A.aC],x.O)
D.dUT=new C.jG("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aLf,4294964964,4282000405,4279983648,D.kd)
D.aLg=new C.ld(11,"indigoMudcloth")
D.bhd=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hIU=w([D.bhd,A.ai0,A.ix],x.O)
D.dV0=new C.jG("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aLg,4294439140,4279903102,4279903102,D.kd)
D.aLh=new C.ld(12,"adinkraRoyal")
D.bwp=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hIV=w([D.agL,D.bwp,A.aC],x.O)
D.dV2=new C.jG("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aLh,4294965484,4285218591,4287322667,D.kd)
D.aLi=new C.ld(13,"nileLotus")
D.bsd=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.boj=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hJ_=w([D.bsd,D.boj,A.ix],x.O)
D.dV1=new C.jG("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLi,4294244340,4279196764,4279196764,D.kd)
D.aLj=new C.ld(14,"shweshweIvory")
D.bma=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bkK=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bhL=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hIH=w([D.bma,D.bkK,D.bhL],x.O)
D.dUY=new C.jG("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLj,4294505710,4279970378,4291058750,D.kd)
D.tt=new C.ld(15,"certIvoryNavy")
D.hIF=w([D.Nn,D.jC,A.ix],x.O)
D.aKQ=new C.yg(1,"ringsNdoa")
D.dUV=new C.jG("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tt,4294966259,4279378237,4291404327,D.aKQ)
D.a8k=new C.yg(2,"coupleCards")
D.dUQ=new C.jG("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tt,4294966259,4279378237,4291404327,D.a8k)
D.E2=new C.ld(18,"certIvoryNavyBar")
D.agK=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hIT=w([D.agK,D.jC,A.ix],x.O)
D.aKR=new C.yg(3,"kuhoweshaForm")
D.dUO=new C.jG("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.E2,4294966519,4279378237,4291404327,D.aKR)
D.aih=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hJc=w([D.Nn,D.aih,A.ix],x.O)
D.a8l=new C.yg(4,"mahariPande")
D.dUR=new C.jG("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tt,4294966259,4279904068,4291404327,D.a8l)
D.aLk=new C.ld(16,"certIvoryGreen")
D.blt=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hIJ=w([A.Mr,D.blt,A.ix],x.O)
D.aKS=new C.yg(5,"familiaMti")
D.dUX=new C.jG("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aLk,4294966776,4280241466,4291404327,D.aKS)
D.a8m=new C.yg(6,"ndoaSafi")
D.dUP=new C.jG("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.E2,4294966519,4279378237,4291404327,D.a8m)
D.bqp=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hIM=w([D.Nn,A.ix,D.bqp],x.O)
D.a8n=new C.yg(7,"peteWide")
D.dUU=new C.jG("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tt,4294966259,4282001936,4291404327,D.a8n)
D.dV3=new C.yg(8,"muhuriCrest")
D.dUN=new C.jG("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tt,4294966259,4279378237,4291404327,D.dV3)
D.hIW=w([D.agK,D.aih,A.ix],x.O)
D.dV4=new C.yg(9,"fomuWazi")
D.dV_=new C.jG("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.E2,4294966519,4279904068,4291404327,D.dV4)
D.aLl=new C.ld(17,"certIvoryRose")
D.bmf=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hIZ=w([D.bmf,D.aji,A.ix],x.O)
D.a8j=new C.yg(10,"upendoOrnate")
D.dUW=new C.jG("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aLl,4294965493,4286200650,4291404327,D.a8j)
D.dmu=w([D.dUT,D.dV0,D.dV2,D.dV1,D.dUY,D.dUV,D.dUQ,D.dUO,D.dUR,D.dUX,D.dUP,D.dUU,D.dUN,D.dV_,D.dUW],x.h)
D.ep=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jw=new C.wC(0,"emojis")
D.E8=new C.wC(1,"pictures")
D.Jx=new C.wC(2,"icons3d")
D.a8F=new C.wC(3,"animations")
D.U2=new C.wC(4,"videoMotion")
D.E9=new C.wC(5,"luxe")
D.a6i=w([D.Jw,D.E8,D.Jx,D.a8F,D.U2,D.E9],B.at("O<wC>"))
D.eZc=new B.y(A.ed,"Looks")
D.eMW=new B.y(A.Dg,"Light")
D.eMT=new B.y(A.ml,"Colour")
D.eKR=new B.y(A.wJ,"Effects")
D.aq4=new B.a_(63112,"MaterialIcons",!1)
D.eHl=new B.y(D.aq4,"Crop")
D.dn0=w([D.eZc,D.eMW,D.eMT,D.eKR,D.eHl],x.f2)
D.dnJ=w([],x.D)
D.hJ9=w([],x.L)
D.eL4=new B.y("Flashcard",D.Jr)
D.eOZ=new B.y("Quiz",D.Js)
D.eR0=new B.y("Worksheet",D.Jt)
D.eNZ=new B.y("Notes",D.nc)
D.ePx=new B.y("Section",D.E6)
D.dot=w([D.eL4,D.eOZ,D.eR0,D.eNZ,D.ePx],B.at("O<+(n,mV)>"))
D.dWQ=new C.ld(6,"beadedPearl")
D.bp9=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hJd=w([H.a_7,D.bp9,A.ix],x.O)
D.aKO=new C.jG("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dWQ,4294966774,4286209070,4291404327,D.kd)
D.dWR=new C.ld(7,"artDeco")
D.btB=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bwK=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hJb=w([D.btB,D.bwK,A.c2],x.O)
D.aKP=new C.jG("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dWR,4294440434,4280228630,4290283019,D.kd)
D.dWS=new C.ld(8,"rosetteCorners")
D.bvP=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bjY=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bp2=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hIP=w([D.bvP,D.bjY,D.bp2],x.O)
D.aKN=new C.jG("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dWS,4294702831,4285218602,4291394365,D.kd)
D.dWT=new C.ld(9,"modernLedger")
D.hIO=w([A.c,D.jC,D.jC],x.O)
D.aKM=new C.jG("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dWT,4294967295,4279378237,4279378237,D.kd)
D.dox=w([D.aKO,D.aKP,D.aKN,D.aKM],x.h)
D.doH=w([A.iw,A.pi],x.O)
D.cu=new C.hI(0,"none")
D.ds=new C.hI(1,"fade")
D.Ju=new C.hI(3,"slideRight")
D.aLH=new C.hI(5,"slideDown")
D.egu=new C.hI(7,"zoomOut")
D.a8E=new C.hI(11,"cube")
D.egp=new C.hI(12,"blur")
D.aLE=new C.hI(13,"dissolve")
D.egq=new C.hI(14,"wipeLeft")
D.egr=new C.hI(15,"wipeRight")
D.U1=new C.hI(17,"push")
D.egs=new C.hI(18,"flash")
D.aLG=new C.hI(20,"swing")
D.egt=new C.hI(21,"curtain")
D.SC=w([D.cu,D.ds,D.vo,D.Ju,D.vp,D.aLH,D.nd,D.egu,D.Jv,D.aLI,D.U0,D.a8E,D.egp,D.aLE,D.egq,D.egr,D.r4,D.U1,D.egs,D.aLF,D.aLG,D.egt],x.i)
D.SD=w([D.a8i,D.a8g,D.a89,D.a8a,D.a8b,D.a8e,D.a8c,D.a8d,D.a8h,D.a8f,D.aKO,D.aKP,D.aKN,D.aKM],x.h)
D.dp8=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dpc=w([A.ui,A.ib,A.c2],x.O)
D.eMc=new B.y(A.uQ,"Design")
D.f_O=new B.y(D.aqk,"Word sizes")
D.eW9=new B.y(A.Dc,"Text")
D.bSO=new B.a_(983182,"MaterialIcons",!1)
D.eWe=new B.y(D.bSO,"Photo")
D.eGU=new B.y(A.lm,"Logo")
D.f16=new B.y(A.I_,"News")
D.dpi=w([D.eMc,D.f_O,D.eW9,D.eWe,D.eGU,D.f16],x.f2)
D.dpj=w(["golddust","sparkle","sheen"],x.s)
D.ehR=new C.ey("upload_pdf",K.PR,"Upload PDF")
D.eh0=new C.ey("sign_paper",A.HX,"Sign Paper")
D.bS3=new B.a_(63438,"MaterialIcons",!1)
D.ehN=new C.ey("hd_photo",D.bS3,"HD Photo")
D.egT=new C.ey("sharpen",E.a2W,"Sharpen")
D.eh2=new C.ey("print",K.PR,"Download PDF")
D.ehu=new C.ey("rotate",D.aq4,"Rotate")
D.ehb=new C.ey("text_box",A.Dc,"Text Box")
D.ehd=new C.ey("picture",A.uU,"Picture")
D.eh9=new C.ey("title",A.wV,"Title")
D.eh5=new C.ey("subtitle",U.aqV,"Subtitle")
D.ehD=new C.ey("bullets",I.a3f,"Bullet List")
D.eh6=new C.ey("numbered",A.PE,"Numbered")
D.ehG=new C.ey("quote",A4.D0,"Quote")
D.ehi=new C.ey("citation",A.oC,"Citation")
D.ehJ=new C.ey("date_stamp",Aj.a2Z,"Date Stamp")
D.ehw=new C.ey("page_number",A.wU,"Page #")
D.ehA=new C.ey("header_bar",A.zC,"Header")
D.ehc=new C.ey("footer_bar",Au.a3O,"Footer")
D.eh1=new C.ey("divider",A.tb,"Divider")
D.egY=new C.ey("highlight",A.a3i,"Highlight")
D.ehC=new C.ey("redact",A.v5,"Redact")
D.ehp=new C.ey("callout",A.CU,"Callout")
D.ehL=new C.ey("checkboxes",I.app,"Checklist")
D.ehm=new C.ey("table",A.a3M,"Table")
D.ehg=new C.ey("memo",I.a3v,"Memo")
D.ehq=new C.ey("letter",A.HM,"Letter")
D.bRH=new B.a_(63259,"MaterialIcons",!0)
D.egS=new C.ey("agenda",D.bRH,"Agenda")
D.eh3=new C.ey("toc",AD.aqx,"Contents")
D.bS_=new B.a_(63406,"MaterialIcons",!1)
D.ehn=new C.ey("sig_line",D.bS_,"Sign Line")
D.egL=new C.ey("initial_line",A.j9,"Initials")
D.egO=new C.ey("approved",A.lm,"APPROVED")
D.ehs=new C.ey("draft",A.pD,"DRAFT")
D.ehy=new C.ey("confidential",A.jJ,"Confidential")
D.ehB=new C.ey("sticky",A.PX,"Sticky Note")
D.ehK=new C.ey("progress",A.aqw,"Progress")
D.bTe=new B.a_(983507,"MaterialIcons",!1)
D.egZ=new C.ey("stars",D.bTe,"Star Rating")
D.egJ=new C.ey("equation",A.aqm,"Equation")
D.egU=new C.ey("timeline",A.a3N,"Timeline")
D.ehh=new C.ey("two_col",A.a3P,"Two Columns")
D.egW=new C.ey("compare",Az.a33,"Compare")
D.egH=new C.ey("duplicate_el",A.fO,"Duplicate")
D.ehP=new C.ey("delete_el",A.ek,"Delete")
D.ehF=new C.ey("bring_fwd",H.aqg,"Bring Front")
D.egM=new C.ey("send_back",H.aqf,"Send Back")
D.ehr=new C.ey("align_left",D.a3d,"Align L")
D.ehx=new C.ey("align_center",D.a3c,"Align C")
D.ehO=new C.ey("align_right",D.a3e,"Align R")
D.eha=new C.ey("word_count",Y.a2A,"Word Count")
D.eh7=new C.ey("link_text",A.hR,"Link")
D.ehv=new C.ey("phone",A.iT,"Phone")
D.egX=new C.ey("email",A.CY,"Email")
D.ehQ=new C.ey("qr_placeholder",A.jL,"QR Placeholder")
D.egR=new C.ey("rectangle",A5.t9,"Rectangle")
D.ehl=new C.ey("circle",A.pt,"Circle")
D.egN=new C.ey("arrow",A.jI,"Arrow")
D.ehE=new C.ey("line",A.tb,"Line")
D.eh_=new C.ey("triangle",A.a30,"Triangle")
D.bRO=new B.a_(63318,"MaterialIcons",!1)
D.eh4=new C.ey("grayscale",D.bRO,"Grayscale")
D.ehe=new C.ey("brighten",I.apJ,"Brighten")
D.ehj=new C.ey("flip_h",A.D_,"Flip H")
D.bRV=new B.a_(63348,"MaterialIcons",!1)
D.ehM=new C.ey("flip_v",D.bRV,"Flip V")
D.ehz=new C.ey("cover_page",A.qN,"Cover Page")
D.egK=new C.ey("invoice",A.ho,"Invoice")
D.egV=new C.ey("resume",A.mj,"Resume")
D.eh8=new C.ey("minutes",A.pv,"Minutes")
D.egP=new C.ey("lab_report",A.PT,"Lab Report")
D.egQ=new C.ey("rubric",A.qQ,"Rubric")
D.ehk=new C.ey("flashcard_tool",W.HU,"Flashcard")
D.ehH=new C.ey("quiz_tool",A.HR,"Quiz Block")
D.eho=new C.ey("worksheet_tool",O.Hs,"Worksheet")
D.eht=new C.ey("outline_share",A.PV,"Share Outline")
D.ehI=new C.ey("export_json",D.apv,"Export JSON")
D.egI=new C.ey("new_slide",D.a2z,"New Slide")
D.ehf=new C.ey("present",A.qS,"Present")
D.dpQ=w([D.ehR,D.eh0,D.ehN,D.egT,D.eh2,D.ehu,D.ehb,D.ehd,D.eh9,D.eh5,D.ehD,D.eh6,D.ehG,D.ehi,D.ehJ,D.ehw,D.ehA,D.ehc,D.eh1,D.egY,D.ehC,D.ehp,D.ehL,D.ehm,D.ehg,D.ehq,D.egS,D.eh3,D.ehn,D.egL,D.egO,D.ehs,D.ehy,D.ehB,D.ehK,D.egZ,D.egJ,D.egU,D.ehh,D.egW,D.egH,D.ehP,D.ehF,D.egM,D.ehr,D.ehx,D.ehO,D.eha,D.eh7,D.ehv,D.egX,D.ehQ,D.egR,D.ehl,D.egN,D.ehE,D.eh_,D.eh4,D.ehe,D.ehj,D.ehM,D.ehz,D.egK,D.egV,D.eh8,D.egP,D.egQ,D.ehk,D.ehH,D.eho,D.eht,D.ehI,D.egI,D.ehf],B.at("O<ey>"))
D.dq_=w([A.cx,A.an],x.O)
D.eGq=new B.y(4286331629,4292552567)
D.eGd=new B.y(4280640491,4278630100)
D.eGy=new B.y(4294538006,4292943176)
D.eFA=new B.y(4278556265,4280640491)
D.djF=w([D.eGq,D.eGd,D.eGy,D.eFA],x.n)
D.cGo=w([4294626325,4280472558,4294210230],x.t)
D.egC=new C.oc("colorful","Colorful",A.ml,D.djF,4294967295,3875536895,D.cGo,D.nd)
D.eG1=new B.y(4279522093,4279657780)
D.eGh=new B.y(4281750292,4283268111)
D.eFD=new B.y(4278603323,4279203438)
D.eGi=new B.y(4282343954,4279599165)
D.cRC=w([D.eG1,D.eGh,D.eFD,D.eGi],x.n)
D.cG6=w([4288931381,4294829706,4287033260],x.t)
D.egy=new C.oc("nature","Nature",A.HY,D.cRC,4294442727,3874290891,D.cG6,D.ds)
D.eFW=new B.y(4279369771,4283178389)
D.eFT=new B.y(4279179050,4286456526)
D.eG9=new B.y(4280163147,4290648157)
D.eFs=new B.y(4278322711,4285343961)
D.d9d=w([D.eFW,D.eFT,D.eG9,D.eFs],x.n)
D.cGk=w([4294210230,4280472558,4289170426],x.t)
D.egw=new C.oc("vibe","Vibe",A.PI,D.d9d,4294967295,3874869502,D.cGk,D.vo)
D.eGu=new B.y(4290007817,4292552567)
D.eGo=new B.y(4286328082,4294286859)
D.eGt=new B.y(4288485197,4294538006)
D.eGn=new B.y(4285343961,4293675161)
D.cc4=w([D.eGu,D.eGo,D.eGt,D.eGn],x.n)
D.cGp=w([4294829706,4294967295,4284999929],x.t)
D.egx=new C.oc("celebration","Celebration",A.k8,D.cc4,4294967295,4009752557,D.cGp,D.r4)
D.eFR=new B.y(4279179050,4280171146)
D.eFV=new B.y(4279310375,4280232247)
D.eFJ=new B.y(4278916151,4280172719)
D.eFS=new B.y(4279179050,4281549141)
D.d1n=w([D.eFR,D.eFV,D.eFJ,D.eFS],x.n)
D.cG1=w([4281908728,4294626325,4287931320],x.t)
D.egB=new C.oc("professional","Professional",A.zi,D.d1n,4294967295,3872118241,D.cG1,D.U1)
D.eFN=new B.y(4278995566,4278413729)
D.eFF=new B.y(4278727492,4279137424)
D.eGa=new B.y(4280171146,4278751666)
D.eFO=new B.y(4278995566,4279590517)
D.cKg=w([D.eFN,D.eFF,D.eGa,D.eFO],x.n)
D.cG4=w([4286436348,4284410580,4294829706],x.t)
D.egD=new C.oc("ocean","Ocean",I.a3R,D.cKg,4294967295,3873501950,D.cG4,D.vp)
D.eGp=new B.y(4286328082,4294538006)
D.eGr=new B.y(4286781507,4294677052)
D.eGl=new B.y(4283178389,4294197086)
D.eGs=new B.y(4288295954,4294688548)
D.cYz=w([D.eGp,D.eGr,D.eGl,D.eGs],x.n)
D.cGq=w([4294829706,4294967295,4294747557],x.t)
D.egE=new C.oc("sunset","Sunset",A.Q_,D.cYz,4294967295,4009749973,D.cGq,D.ds)
D.eGC=new B.y(4294967295,4294047225)
D.eGx=new B.y(4294507260,4294967295)
D.eGB=new B.y(4294967295,4293060848)
D.eGw=new B.y(4294507260,4294047225)
D.dcB=w([D.eGC,D.eGx,D.eGB,D.eGw],x.n)
D.cG_=w([4280640491,4279179050,4287931320],x.t)
D.egA=new C.oc("minimal","Minimal",A5.t9,D.dcB,4279179050,4282865001,D.cG_,D.ds)
D.eFM=new B.y(4278979081,4280886564)
D.eG5=new B.y(4280031511,4278979081)
D.eFU=new B.y(4279308561,4281148438)
D.eFL=new B.y(4278979081,4280031511)
D.ds3=w([D.eFM,D.eG5,D.eFU,D.eFL],x.n)
D.cGd=w([4292128567,4294829706,4289241758],x.t)
D.egF=new C.oc("elegant","Elegant",A.mn,D.ds3,4294898631,3873957348,D.cGd,D.aLE)
D.eG7=new B.y(4280159034,4282058596)
D.eFI=new B.y(4278916151,4280163147)
D.eGf=new B.y(4281208933,4278916151)
D.eFZ=new B.y(4279502891,4283178389)
D.dzL=w([D.eG7,D.eFI,D.eGf,D.eFZ],x.n)
D.cGm=w([4294296657,4292128567,4291081725],x.t)
D.egz=new C.oc("royal","Royal Gold",A.ja,D.dzL,4294965222,3874084351,D.cGm,D.nd)
D.eFx=new B.y(4278464302,4280163147)
D.eFH=new B.y(4278916151,4279455306)
D.eG8=new B.y(4280163147,4283040846)
D.eFu=new B.y(4278332450,4281413249)
D.djf=w([D.eFx,D.eFH,D.eG8,D.eFu],x.n)
D.cG0=w([4281193663,4289170426,4294210230],x.t)
D.egG=new C.oc("aurora","Aurora Glow",A.ed,D.djf,4293983738,3869766608,D.cG0,D.ds)
D.x6=w([D.egC,D.egy,D.egw,D.egx,D.egB,D.egD,D.egE,D.egA,D.egF,D.egz,D.egG],B.at("O<oc>"))
D.bpK=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dqA=w([A.rB,D.bpK,A.rB],x.O)
D.dqS=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dqX=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eW1=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eLN=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eQz=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eCX=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ePa=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eNi=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eRS=new B.y("Surprise me","")
D.drv=w([D.eW1,D.eLN,D.eQz,D.eCX,D.ePa,D.eNi,D.eRS],x.L)
D.bhN=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bua=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dsi=w([A.c,D.bhN,D.bua],x.O)
D.duB=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aLd=new C.ld(0,"heritageGold")
D.bo3=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hJe=w([D.bo3,A1.ait,A.aC],x.O)
D.dUZ=new C.jG("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aLd,4294570461,4284234270,4292128567,D.kd)
D.aLe=new C.ld(1,"heritageCrimson")
D.bfX=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bmc=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.btW=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hIS=w([D.bfX,D.bmc,D.btW],x.O)
D.dUS=new C.jG("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aLe,4294635750,4285213214,4292912216,D.kd)
D.duG=w([D.a8i,D.a8g,D.dUZ,D.dUS,D.a8b,D.a8e],x.h)
D.duV=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. A member counts as contributed however their app login is linked to their registry record: the same email, the registry number, the linked app email set with the ID card, a granted ID card with the same phone, the app login the registrar writes into each contribution, or the mark the registrar puts on the member record (gave this much to this campaign). Instead of the ask, twice a day when the app opens (once before noon and once after noon), until the contribution is over, that person gets a Swahili orange pop-up, Hongera, with their name in a gold frame (MCHANGIAJI), the amount they contributed and what it was for.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","ALL THE NEMA OUTLETS IN THE CONSTRUCTION LAB: 23 more outlets from the NEMA charts, each a lesson tile and a possible city job, each with its real face in the room, on the bench and in the framed house: the old 2-prong 1-15 (no ground), the 6-15 and 6-30 (240 volts, no neutral), the big 60 amp 14-60, the RV shore power 50 amp twist-lock, the twist-locks L5-20, L5-30, L6-20, L6-30, L14-20 and the old L2-20 with no ground, the 277 volt 7-15, 7-20 and 7-30 (brown hot and grey neutral), the three-phase Y 18-20 (three hots and a neutral), the three-phase 15-20, 15-30, 15-50 and 15-60 (black, red and blue hots and a ground, the third hot on screw Z), the three-phase twist-locks L15-30, L21-30 (five wires), L16-30 and L22-30 (480 volt brown, orange and yellow hots). The 1-15 and the 6-15 and 277 volt faces are white, the 18-20 grey, the rest dark.","MORE AMERICAN OUTLETS IN THE CONSTRUCTION LAB: besides the outlet, GFCI, split, 240 volt, isolated ground, dryer, range and washer outlets, there are lessons for the AFCI outlet (arc-fault, LINE screws), the tamper-resistant TR outlet (child shutters), the USB outlet, the 20 amp 5-20 outlet with the T slot, the outdoor weather-resistant GFCI under a bubble cover, the smart Wi-Fi outlet (needs the neutral), the electric car charger 14-50, the RV 30 amp TT-30 (120 volts only), the welder 6-50 (two hots and a ground) and the generator twist-lock L14-30. On the wiring bench the green ground screw on the strap is always visible from the front, and the room around the bench goes on behind the wall and is closed at both ends, so turning all the way round never shows black. Each is a tile on the Lessons page. Jobs in the city (and practice jobs) pick their second outlet from all of these, so every job can be a different kind of outlet, with the same boxes as before.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","HELPER GIFTS AND ROSTER: a member who is the first to contribute 3 times in a row earns a helper gift that the admin grants. The admin chooses how it is given: an NGMY store money card (a QR code the chosen store scans), or Cash App or Zelle with no store needed. For Cash App or Zelle the admin types the phone number the member should call or text and an optional note; the member then sees a green (Cash App) or purple (Zelle) gift pop-up with the amount, that number and Call and Text buttons every time they open the app, until they tap Received. The printed Civic Registry roster carries a light NGMY watermark behind it (between the earlier strong one and the too faint one).","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), home frames in two colours only (Neural Link and Core Protocol blue, Signal Grid and Vault Channel purple), Hub, Creator Toolkit, Core Protocol, NGMY Slides and the NGMY Advisors filter frames with colour: a soft sky blue or soft lavender wash (white at the top) with a thin edge and a soft shadow of the same colour, a whole row at a time (one row blue, the next row purple, never mixed tile by tile), the four NGMY Hub tiles all in one colour, NGMY Services in a solid purple frame, the NGMY badge at the top of home in light gold, pure white pages, NGMY Slides opening at once when you come back to it (no loading every time), Civic Registry words in a dark readable grey in light mode, a Create Invoice form grouped into framed sections with rounded fields and icons, and the Quote Calc Iron Triangle made of brushed steel (when a third of FAST, CHEAP, GOOD is turned on, one of the other two turns off at random, not in a fixed order), pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.e_W=new C.t0(1,"circuit")
D.e0o=new C.mu("neural","Neural Link","Robotic",D.e_W,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.e_V=new C.t0(0,"grid")
D.e0l=new C.mu("signal","Signal Grid","Robotic",D.e_V,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.e00=new C.t0(2,"hexes")
D.e06=new C.mu("core","Core Protocol","Robotic",D.e00,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aLB=new C.t0(11,"diagonal")
D.e0h=new C.mu("steel","Steel Tech","Robotic",D.aLB,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aLC=new C.t0(3,"rings")
D.e05=new C.mu("vault","Vault Gold","Robotic",D.aLC,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.e_Z=new C.t0(13,"leaves")
D.e08=new C.mu("forest","Forest Morning","Nature",D.e_Z,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aLD=new C.t0(5,"waves")
D.e0f=new C.mu("ocean","Ocean Calm","Nature",D.aLD,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.e01=new C.t0(6,"sunset")
D.e0k=new C.mu("sunset","Sunset Glow","Nature",D.e01,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.e02=new C.t0(7,"mountains")
D.e07=new C.mu("mountain","Mountain Air","Nature",D.e02,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.e03=new C.t0(8,"stars")
D.e0e=new C.mu("night","Night Sky","Nature",D.e03,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a8C=new C.t0(4,"orbs")
D.e0c=new C.mu("aurora","Aurora","Nature",D.a8C,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.e0m=new C.mu("sand","Sand Dune","Nature",D.aLD,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.e04=new C.t0(9,"rays")
D.e0b=new C.mu("golden","Golden Hour","Warm",D.e04,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.e09=new C.mu("royal","Royal Purple","Warm",D.aLB,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.e0a=new C.mu("rose","Rose Petal","Warm",D.a8C,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.e_Y=new C.t0(12,"blocks")
D.e0d=new C.mu("electric","Electric Blue","Bold",D.e_Y,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.e0n=new C.mu("mint","Fresh Mint","Bold",D.a8C,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.e0_=new C.t0(14,"minimal")
D.e0j=new C.mu("white","Clean White","Clean",D.e0_,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.e_X=new C.t0(10,"frame")
D.e0g=new C.mu("midnight","Midnight Gold","Clean",D.e_X,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.e0i=new C.mu("community","Community Green","Clean",D.aLC,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6P=w([D.e0o,D.e0l,D.e06,D.e0h,D.e05,D.e08,D.e0f,D.e0k,D.e07,D.e0e,D.e0c,D.e0m,D.e0b,D.e09,D.e0a,D.e0d,D.e0n,D.e0j,D.e0g,D.e0i],B.at("O<mu>"))
D.dv5=w([D.C4,A.uf,A.ib,A.c2],x.O)
D.dvo=w([D.ajv,D.jC],x.O)
D.dvz=w(["pdf","docx","txt","md"],x.s)
D.f5n=new B.b5(-3,150,34)
D.f5o=new B.b5(-3,214,62)
D.f5p=new B.b5(-3,288,62)
D.dwr=w([D.f5n,D.f5o,D.f5p],B.at("O<+(G,G,G)>"))
D.dwY=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dxI=w(["Write","Design","Print & fold"],x.s)
D.ke=new C.vl(2,"triangle")
D.E7=new C.vl(3,"arrow")
D.fP=new C.vl(4,"line")
D.kf=new C.vl(5,"parallelogram")
D.dxL=w([D.bm,D.f2,D.ke,D.E7,D.fP,D.kf,D.lt],x.m)
D.eEr=new B.y(240,96)
D.eHd=new B.y(560,46)
D.dxR=w([D.eEr,D.eHd],x.G)
D.hJp=new C.yj(0,"classic")
D.dWW=new C.o9("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aLd,4294570461,4282000405,4284234270)
D.dX7=new C.o9("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aLe,4294635750,4281999378,4285213214)
D.dWX=new C.o9("elegant_navy","Umoja Mzuri",y.s,D.a8t,4294967035,4279378237,4290283019)
D.dX9=new C.o9("elegant_gold","Umoja wa Dhahabu",y.Q,D.aLm,4294966515,4281016592,4289102906)
D.dXb=new C.o9("kente_sunset","Kente ya Jua",y.H,D.aLf,4294964964,4282000405,4279983648)
D.dWU=new C.o9("indigo_mudcloth","Nguo ya Indigo",y.n,D.aLg,4294439140,4279903102,4279903102)
D.dWZ=new C.o9("adinkra_royal","Muhuri wa Adinkra",y.z,D.aLh,4294965484,4285218591,4287322667)
D.dX3=new C.o9("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLi,4294244340,4279196764,4279196764)
D.dX5=new C.o9("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLj,4294505710,4279970378,4291058750)
D.hJq=new C.yj(1,"ringsNdoa")
D.dWY=new C.o9("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tt,4294966259,4279378237,4291404327)
D.hJs=new C.yj(2,"coupleCards")
D.dX8=new C.o9("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tt,4294966259,4279378237,4291404327)
D.hJt=new C.yj(3,"kuhoweshaForm")
D.dX4=new C.o9("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.E2,4294966519,4279378237,4291404327)
D.hJu=new C.yj(4,"mahariPande")
D.dWV=new C.o9("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tt,4294966259,4279904068,4291404327)
D.hJv=new C.yj(5,"familiaMti")
D.dXa=new C.o9("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aLk,4294966776,4280241466,4291404327)
D.hJw=new C.yj(6,"ndoaSafi")
D.dX1=new C.o9("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.E2,4294966519,4279378237,4291404327)
D.hJx=new C.yj(7,"peteWide")
D.dX0=new C.o9("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tt,4294966259,4282001936,4291404327)
D.hJy=new C.yj(8,"muhuriCrest")
D.dX_=new C.o9("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tt,4294966259,4279378237,4291404327)
D.hJz=new C.yj(9,"fomuWazi")
D.dX2=new C.o9("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.E2,4294966519,4279904068,4291404327)
D.hJr=new C.yj(10,"upendoOrnate")
D.dX6=new C.o9("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aLl,4294965493,4286200650,4291404327)
D.SU=w([D.dWW,D.dX7,D.dWX,D.dX9,D.dXb,D.dWU,D.dWZ,D.dX3,D.dX5,D.dWY,D.dX8,D.dX4,D.dWV,D.dXa,D.dX1,D.dX0,D.dX_,D.dX2,D.dX6],B.at("O<o9>"))
D.E5=new C.at3(0,"landscape169")
D.oU=new C.at3(1,"portrait916")
D.dyE=w([D.E5,D.oU],B.at("O<at3>"))
D.aDU=w([A.ib,A.bL,A.cI,A.iw,A.c],x.O)
D.vh=w([A.c2,A.id],x.O)
D.eDr=new B.y(1000,"M")
D.eIH=new B.y(900,"CM")
D.eH7=new B.y(500,"D")
D.eFn=new B.y(400,"CD")
D.eDs=new B.y(100,"C")
D.eII=new B.y(90,"XC")
D.eH8=new B.y(50,"L")
D.eFo=new B.y(40,"XL")
D.eDy=new B.y(10,"X")
D.eIU=new B.y(9,"IX")
D.eHp=new B.y(5,"V")
D.eGT=new B.y(4,"IV")
D.eE4=new B.y(1,"I")
D.dzp=w([D.eDr,D.eIH,D.eH7,D.eFn,D.eDs,D.eII,D.eH8,D.eFo,D.eDy,D.eIU,D.eHp,D.eGT,D.eE4],x.ek)
D.f6H=new B.ce(["open",A.j9,"Open & write","Keep writing this book"])
D.f7a=new B.ce(["print",A.v_,"Print as a book","Fold and staple it"])
D.dzA=w([D.f6H,D.f7a],B.at("O<+(n,a_,n,n)>"))
D.dAl=w([D.a8E,D.nd,D.Jv,D.U1,D.ds,D.U0],x.i)
D.eWM=new B.y(-1,"Small")
D.eDc=new B.y(0,"Normal")
D.eE1=new B.y(1,"Big")
D.eEI=new B.y(2,"Huge")
D.dAW=w([D.eWM,D.eDc,D.eE1,D.eEI],x.ek)
D.dBm=w([49,65,89,38,83,89],x.t)
D.dBs=w([A.uf,A.ib,A.c2],x.O)
D.dBW=w([D.ds,D.nd,D.vo,D.a8E,D.Jv,D.U1],x.i)
D.aJc=new B.d_([0,D.NH,8,D.al1,12,D.al2],B.at("d_<H,a54>"))
D.emI={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d1y=w([A.bL,H.ak6],x.O)
D.dob=w([A.aZ,A.bo],x.O)
D.dih=w([A.bT,A.aG,A.bl],x.O)
D.dzB=w([A.cx,A.bx],x.O)
D.dac=w([A.b9,A.fe],x.O)
D.dlh=w([A.b8,A.fq],x.O)
D.blQ=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dkx=w([D.blQ,A.pi],x.O)
D.deq=w([A.hw,A.ym],x.O)
D.d9Z=w([A.bv,A.ci],x.O)
D.dEB=new B.bv(D.emI,[D.d1y,Q.atX,D.dob,D.dih,D.dzB,D.dac,D.dlh,D.dkx,D.deq,D.d9Z],B.at("bv<n,ai<u>>"))
D.elP={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a7s=new B.bv(D.elP,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bv<n,n>"))
D.a7y=new B.bv(A.i6,[],B.at("bv<H,+icon3d,picture(n?,n?)>"))
D.dJM=new F.NY(30,null)
D.dP0=new F.mS("Chapter 1","","","")
D.dyq=w([D.dP0],x.B)
D.dP4=new F.rR("My Book","","",D.dyq,E.aKE)
D.dP2=new F.vb("starry",null,null,null,null,"","","")
D.dP5=new F.rR("Dream Big","","",E.a6q,D.dP2)
D.dP3=new F.vb("story",null,null,null,null,"","","")
D.dP6=new F.rR("Little Lion","","",E.a6q,D.dP3)
D.dP1=new F.vb("vintage",null,null,null,null,"","","")
D.dP7=new F.rR("Our Story","","",E.a6q,D.dP1)
D.dS9=new C.Fq("","NGMY","","")
D.dZz=new C.Ah("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.egv=new C.b3K(null,null,null,null)
D.eid=new C.at8(null)
D.eio=new C.atC(0,"smaller")
D.eip=new C.atC(1,"bigger")
D.aLS=new C.atC(2,"fit")
D.eqh=new B.p(3,6)
D.eqB=new B.p(4,8)
D.euM=new B.D(E.alU,U.ag1,null)
D.euQ=new B.D(A.a0w,A.m3,null)
D.bUz=new B.ae(A.k9,16,A.bW,null,null,null)
D.euU=new B.D(A.iQ,D.bUz,null)
D.bfl=new B.fl(2.2,null,null,null,null,A.c,null,null,null,null)
D.ev5=new B.D(A.H5,D.bfl,null)
D.c4e=new B.ae(A.cC,16,A.aD,null,null,null)
D.ev9=new B.D(A.eA,D.c4e,null)
D.fQn=new B.B("Play",null,A.o1,null,null,null,null,null,null,null,null,null)
D.dou=w([V.aso,A.vE,D.fQn],x.p)
D.fbY=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dou,null)
D.evc=new B.D(A.nI,D.fbY,null)
D.bfu=new B.fl(2.4,null,null,null,null,null,null,null,null,null)
D.fip=new B.a5(20,20,D.bfu,null)
D.evj=new B.D(A.iQ,D.fip,null)
D.fZS=new B.B("Seconds per slide",null,A.h4,null,null,null,null,null,null,null,null,null)
D.evt=new B.D(A.bh,D.fZS,null)
D.ewO=new C.aa2(2,"print")
D.ewR=new B.j4(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eyt=new B.hi("/Annot")
D.eyv=new B.hi("/URI")
D.fKj=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eB_=new B.jI("share",48,D.fKj,null,B.at("jI<n>"))
D.c48=new B.ae(A.ed,14,A.eK,null,null,null)
D.eB8=new B.cK(null,-2,-2,null,null,null,D.c48,null)
D.d3R=w([A.ZJ,A.L],x.O)
D.caN=new B.a8(A.a7,A.aa,A.x,D.d3R,null,null)
D.b7M=new B.o(null,null,null,null,null,D.caN,A.n)
D.bzd=new B.bN(D.b7M,A.bk,null,null)
D.eBl=new B.cK(0,0,null,0,8,null,D.bzd,null)
D.dtw=w([A.hA,A.mU,A.c6],x.O)
D.eC0=new B.bY(A.A,0.5,A.x,null,0,D.dtw,null,null)
D.eEA=new B.y(0.22,A.bo)
D.eJd=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eLr=new B.y(0.5,A.hI)
D.eV7=new B.y(0.78,A.aV)
D.f6w=new B.ce([A.bg,0.22,0.7,2.6])
D.f6D=new B.ce([A.b9,0.36,1.2,1.3])
D.f6J=new B.ce([A.dP,0.28,0.2,0.4])
D.f6P=new B.ce([A.cD,0.05,0.3,0.35])
D.f6W=new B.ce([A.bv,0.28,0.9,0])
D.f74=new B.ce([A.aF,-0.25,-0.15,0.45])
D.f85=new B.ce([A.bT,0.42,1,4.1])
D.fbG=new B.ab1(9)
D.bVG=new B.ae(A.I_,28,A.bl,null,null,null)
D.h_p=new B.B("NGMY News",null,A.dq,null,null,null,null,null,null,null,null,null)
D.bJE=new B.bz(1,A.bb,D.h_p,null)
D.dx0=w([D.bVG,A.av,D.bJE],x.p)
D.fbS=new B.c8(A.aL,A.e,A.i,A.l,null,A.p,null,0,D.dx0,null)
D.bVR=new B.ae(A.oC,16,A.c,null,null,null)
D.h1_=new B.B("Book",null,A.o_,null,null,null,null,null,null,null,null,null)
D.dBr=w([D.bVR,A.e8,D.h1_],x.p)
D.fc0=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dBr,null)
D.c1E=new B.ae(A.jJ,10,A.c,null,null,null)
D.fOl=new B.B("Pro",null,A.nY,null,null,null,null,null,null,null,null,null)
D.doz=w([D.c1E,A.rb,D.fOl],x.p)
D.fc4=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.doz,null)
D.fZQ=new B.B("Make a newspaper",null,A.W1,null,null,null,null,null,null,null,null,null)
D.cc2=w([E.a4d,A.af,D.fZQ],x.p)
D.fc5=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.cc2,null)
D.c04=new B.ae(A.k8,18,A.bL,null,null,null)
D.fQB=new B.B("Ending celebration",null,A.hv,null,null,null,null,null,null,null,null,null)
D.dw0=w([D.c04,A.bn,D.fQB],x.p)
D.fc8=new B.c8(A.aL,A.e,A.i,A.l,null,A.p,null,0,D.dw0,null)
D.c1p=new B.ae(A.j9,18,A.kv,null,null,null)
D.ftw=new B.F(!0,A.kv,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1i=new B.B("Write",null,D.ftw,null,null,null,null,null,null,null,null,null)
D.dcp=w([D.c1p,A.af,D.h1i],x.p)
D.fcg=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dcp,null)
D.fOj=new B.B("Download picture",null,A.nZ,null,null,null,null,null,null,null,null,null)
D.bMq=new B.qM(A.e7,A.A,A.f,D.fOj,null)
D.bMC=new B.dm(1,A.cq,D.bMq,null)
D.doZ=w([K.asf,A.af,D.bMC],x.p)
D.fch=new B.c8(A.aL,A.ba,A.i,A.l,null,A.p,null,0,D.doZ,null)
D.bXD=new B.ae(A.I_,22,A.bl,null,null,null)
D.fYn=new B.B("NGMY NEWS",null,M.abo,null,null,null,null,null,null,null,null,null)
D.d3f=w([D.bXD,A.af,D.fYn],x.p)
D.fcr=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.d3f,null)
D.fcD=new B.pG(!1,!1,null,U.Yd,null,A.c4,null,null,null)
D.aaw=new B.iQ([D.cu,D.ds,D.vo,D.Ju,D.vp,D.aLH],B.at("iQ<hI>"))
D.eov={title:0,quote:1,closing:2,bio:3}
D.fe7=new B.db(D.eov,4,x.M)
D.ema={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.fea=new B.db(D.ema,5,x.M)
D.enL={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aay=new B.db(D.enL,8,x.M)
D.emV={Design:0,Transitions:1,Insert:2}
D.fej=new B.db(D.emV,3,x.M)
D.hJI=new B.iQ([D.a8F],B.at("iQ<wC>"))
D.en3={float3d:0,drift:1,pulse:2}
D.fen=new B.db(D.en3,3,x.M)
D.aTx=new B.iQ([D.Jr,D.Js,D.Jt],B.at("iQ<mV>"))
D.em8={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aTA=new B.db(D.em8,14,x.M)
D.hJJ=new B.db(A.i6,0,B.at("db<wC>"))
D.en0={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.V2=new B.db(D.en0,4,x.M)
D.em0={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aTD=new B.db(D.em0,30,x.M)
D.en9={circle:0,triangle:1,hexagon:2,diamond:3}
D.feP=new B.db(D.en9,4,x.M)
D.fhi=new B.av(390,844)
D.fi8=new B.a5(20,20,A.Ml,null)
D.aUs=new B.a5(null,2.5,null,null)
D.fii=new B.a5(18,18,A.Ml,null)
D.c1t=new B.ae(A.ja,19,A.c,null,null,null)
D.fiu=new B.a5(38,38,D.c1t,null)
D.c_C=new B.ae(A.zE,22,A.c,null,null,null)
D.fix=new B.a5(40,40,D.c_C,null)
D.fj5=new B.hJ(2,10,10,1.15,null)
D.aUA=new B.hJ(2,16,14,0.62,null)
D.bHt=new B.R(32,30,32,40)
D.bh2=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bVD=new B.ae(A.qN,56,D.bh2,null,null,null)
D.ak5=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fvJ=new B.F(!0,D.ak5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVe=new B.B("Your books will live here.",null,D.fvJ,null,A.K,null,null,null,null,null,null,null)
D.dfr=w([D.bVD,A.W,D.fVe],x.p)
D.by9=new B.fm(A.ah,A.e,A.i,A.l,null,A.p,null,0,D.dfr,null)
D.evr=new B.D(D.bHt,D.by9,null)
D.fjr=new B.m5(D.evr,null)
D.fVb=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.b1(D.fVb,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fTe=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new B.b1(D.fTe,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fYr=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new B.b1(D.fYr,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fZ0=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new B.b1(D.fZ0,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fRR=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fkl=new B.b1(D.fRR,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5j=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fkE=new B.b1(D.h5j,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2k=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fkP=new B.b1(D.h2k,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fZ9=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.flz=new B.b1(D.fZ9,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMt=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.flQ=new B.b1(D.fMt,null,null,null,null,null,null,null,A.j_,null,null,null,null,A.or,!1,null,null,null,A.t,null)
D.fOt=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new B.b1(D.fOt,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fUR=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fm9=new B.b1(D.fUR,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fUx=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fma=new B.b1(D.fUx,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0g=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fmb=new B.b1(D.h0g,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3a=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fmg=new B.b1(D.h3a,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIu=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fml=new B.b1(D.fIu,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPE=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fmI=new B.b1(D.fPE,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3Z=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fmK=new B.b1(D.h3Z,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3v=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new B.b1(D.h3v,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fHn=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fmQ=new B.b1(D.fHn,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_k=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fmZ=new B.b1(D.h_k,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h33=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fne=new B.b1(D.h33,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2V=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fng=new B.b1(D.h2V,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fHe=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fnm=new B.b1(D.fHe,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fLr=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fnO=new B.b1(D.fLr,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h28=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new B.b1(D.h28,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fLd=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fof=new B.b1(D.fLd,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bpo=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d1P=w([A.iw,A.pi,D.bpo,D.agv,A.iw],x.O)
D.foE=new B.h1(A.A,0,6.283185307179586,A.x,D.d1P,null,null)
D.dbv=w([A.bL,A.c2,A.ib,D.C4,A.bL],x.O)
D.aV8=new B.h1(A.A,0,6.283185307179586,A.x,D.dbv,null,null)
D.dqQ=w([A.bT,A.bg,A.b9,A.b4,A.bl,A.bT],x.O)
D.foJ=new B.h1(A.A,0,6.283185307179586,A.x,D.dqQ,null,null)
D.d47=w([A.qt,A.pj,A.qh,A.iw,A.qt],x.O)
D.foK=new B.h1(A.A,0,6.283185307179586,A.x,D.d47,null,null)
D.dqK=w([A.aS,A.bN,A.bi,A.an,A.aS],x.O)
D.foL=new B.h1(A.A,0,6.283185307179586,A.x,D.dqK,null,null)
D.dzc=w([A.bv,A.b9,A.bg,A.bT,A.bv],x.O)
D.foN=new B.h1(A.A,0,6.283185307179586,A.x,D.dzc,null,null)
D.bkI=new B.u(1,0,1,0,A.q)
D.bpJ=new B.u(1,0,1,1,A.q)
D.bmy=new B.u(1,0,0,1,A.q)
D.bir=new B.u(1,1,0,1,A.q)
D.duY=w([A.MC,A.Zy,D.bkI,D.bpJ,D.bmy,D.bir,A.MC],x.O)
D.foO=new B.h1(A.A,0,6.283185307179586,A.x,D.duY,null,null)
D.fp2=new C.axR(2,"immersiveSticky")
D.fp3=new C.axR(3,"edgeToEdge")
D.fp4=new C.axR(4,"manual")
D.frB=new B.F(!0,A.bB,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new B.F(!0,A.oe,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVJ=new B.F(!0,A.eX,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new B.F(!0,E.nB,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuW=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv5=new B.F(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvr=new B.F(!0,A.eK,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwX=new B.F(!0,A.bN,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new B.F(!0,A.jZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new B.ta(!0,A.JR,null,null,null,null,A.dH,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new B.F(!0,A.jD,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyX=new B.F(!0,A.aD,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewU=new B.j4(1,1,0.7568627450980392,0.027450980392156862)
D.fz0=new B.ta(!0,D.ewU,null,null,null,null,A.dH,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aiQ=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aWx=new B.F(!0,D.aiQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz8=new B.F(!0,D.ak5,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz9=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWz=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new B.ta(!0,A.pO,null,null,null,null,A.dH,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA4=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAD=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAF=new B.F(!0,D.aiQ,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KW=new B.F(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBc=new B.F(!0,A.c2,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBn=new B.F(!0,A.bN,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBr=new B.F(!0,A.bL,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5Y,null,null,null)
D.fBL=new B.F(!0,A.bZ,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC2=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new B.F(!0,A.dn,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCQ=new B.F(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD0=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDh=new B.F(!0,A.ab,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXd=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXf=new B.F(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bvB=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fFb=new B.F(!0,D.bvB,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXl=new B.F(!0,E.nB,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFH=new B.F(!0,A.bN,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFK=new B.F(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH_=new B.B("NEW",null,D.fy3,null,null,null,null,null,null,null,null,null)
D.fHh=new B.B("Hati ya Kuhowesha",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fHL=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fIa=new B.B("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fIW=new B.B("Big quote mark",null,A.jy,null,null,null,null,null,null,null,null,null)
D.fIY=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fJC=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fJE=new B.B("How many slides?",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fKc=new B.B("Transfer",null,A.cg,null,null,null,null,null,null,null,null,null)
D.ftz=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKB=new B.B("Luxury FX",null,D.ftz,null,null,null,null,null,null,null,null,null)
D.fKX=new B.B("Font",null,A.tP,null,null,null,null,null,null,null,null,null)
D.fL7=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fLe=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fEG=new B.F(!0,A.bN,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLo=new B.B("Example  GA847",null,D.fEG,null,null,null,null,null,null,null,null,null)
D.fLO=new B.B("Design shapes",null,A.jy,null,null,null,null,null,null,null,null,null)
D.fLZ=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fM3=new B.B("Non-stop (loop)",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fMh=new B.B("Hati ya Kuhoweya",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fMB=new B.B("Photo studio",null,A.fG,null,null,null,null,null,null,null,null,null)
D.fN5=new B.B("Add your picture",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fxm=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN6=new B.B("Enter document code",null,D.fxm,null,A.K,null,null,null,null,null,null,null)
D.fN7=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fNc=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fuJ=new B.F(!0,E.nB,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNx=new B.B("Delete this book?",null,D.fuJ,null,A.K,null,null,null,null,null,null,null)
D.fzC=new B.F(!0,E.nB,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOv=new B.B("Your library",null,D.fzC,null,null,null,null,null,null,null,null,null)
D.fOA=new B.B("Delete",null,A.aWp,null,null,null,null,null,null,null,null,null)
D.fOD=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.EQ,null,null,null,null,null,null,null,null,null)
D.fOO=new B.B("Element flies in",null,A.aWD,null,null,null,null,null,null,null,null,null)
D.Wc=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fPd=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fPB=new B.B("Cancel",null,E.aWO,null,null,null,null,null,null,null,null,null)
D.fPD=new B.B("The lines and circles that come with the design",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fDq=new B.F(!0,A.hB,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ7=new B.B("DOCUMENT CODE",null,D.fDq,null,null,null,null,null,null,null,null,null)
D.fQX=new B.B("Quotes",null,G.abZ,null,null,null,null,null,null,null,null,null)
D.fwJ=new B.F(!0,N.lF,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR6=new B.B("Add a picture",null,D.fwJ,null,null,null,null,null,null,null,null,null)
D.fRe=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.VP,null,A.K,null,null,null,null,null,null,null)
D.fRi=new B.B("Look & feel",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fRn=new B.B("Rings",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fRt=new B.B("W",null,A.tP,null,null,null,null,null,null,null,null,null)
D.fRD=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fRX=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VZ,null,A.K,null,null,null,null,null,null,null)
D.fRZ=new B.B("Write your book",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fSJ=new B.B("Add page",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fT0=new B.B("Malipo ya Awamu ya Mahari",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fxb=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTf=new B.B("Create with AI",null,D.fxb,null,A.K,null,null,null,null,null,null,null)
D.fTL=new B.B("Apply look",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fxT=new B.F(!0,A.es,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUz=new B.B("Type your presentation below",null,D.fxT,null,A.K,null,null,null,null,null,null,null)
D.fUC=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aXp,null,A.K,null,null,null,null,null,null,null)
D.fUE=new B.B("Keep it",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fss=new B.F(!0,A.cm,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUL=new B.B("Done",null,D.fss,null,null,null,null,null,null,null,null,null)
D.fV5=new B.B("Delete",null,A.o0,null,null,null,null,null,null,null,null,null)
D.fVg=new B.B("Hati ya Kiapo cha Uongozi",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fw1=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWb=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fw1,null,A.K,null,null,null,null,null,null,null)
D.fWy=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fWF=new B.B("Layout",null,A.W3,null,null,null,null,null,null,null,null,null)
D.fXk=new B.B("Print",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fXt=new B.B("X",null,A.tP,null,null,null,null,null,null,null,null,null)
D.fY5=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.xs,null,null,null,null,null,null,null,null,null)
D.fYF=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fYT=new B.B("Hati ya Kuhowa",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fYV=new B.B("Choose a class template",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fYX=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fZ3=new B.B("Download the newspaper picture",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fZg=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fZn=new B.B("Done",null,A.aXc,null,null,null,null,null,null,null,null,null)
D.fZy=new B.B("Ending celebration",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fZz=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fZO=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.tO,null,null,null,null,null,null,null,null,null)
D.h_N=new B.B("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h_O=new B.B("What would you like to do?",null,D.aWx,null,null,null,null,null,null,null,null,null)
D.h_T=new B.B("Delete",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h0p=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.h0t=new B.B("Hati (Documents)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h0G=new B.B("Done",null,A.lw,null,null,null,null,null,null,null,null,null)
D.fEv=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0K=new B.B("Delete presentation?",null,D.fEv,null,A.K,null,null,null,null,null,null,null)
D.h13=new B.B("After the last slide it starts again from the first",null,A.hu,null,null,null,null,null,null,null,null,null)
D.h1f=new B.B("\ud83c\udf33",null,A.EP,null,A.K,null,null,null,null,null,null,null)
D.h1x=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.h1E=new B.B("Transfer document",null,A.mE,null,null,null,null,null,null,null,null,null)
D.h1P=new B.B("Add to the slides",null,A.h4,null,null,null,null,null,null,null,null,null)
D.h2c=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fud=new B.F(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2q=new B.B("Make a book",null,D.fud,null,null,null,null,null,null,null,null,null)
D.h2u=new B.B("Books",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fwB=new B.F(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2w=new B.B("Keep this page open until it finishes.",null,D.fwB,null,null,null,null,null,null,null,null,null)
D.h2y=new B.B("Making your video",null,A.dq,null,null,null,null,null,null,null,null,null)
D.h2D=new B.B("LANGUAGE",null,X.tQ,null,null,null,null,null,null,null,null,null)
D.h2J=new B.B("Use this ending",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h2R=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2T=new B.B("Upload a different logo",null,A.cg,null,null,null,null,null,null,null,null,null)
D.h39=new B.B("Delete from the database?",null,A.jP,null,null,null,null,null,null,null,null,null)
D.h3b=new B.B("H",null,A.tP,null,null,null,null,null,null,null,null,null)
D.h3B=new B.B("NGMY Quotes",null,A.dq,null,null,null,null,null,null,null,null,null)
D.h44=new B.B("Cover",null,D.aXl,null,null,null,null,null,null,null,null,null)
D.h48=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h49=new B.B("Each page becomes its own slide you can present",null,A.hu,null,null,null,null,null,null,null,null,null)
D.h4v=new B.B("Y",null,A.tP,null,null,null,null,null,null,null,null,null)
D.h4H=new B.B("Crop the picture",null,A.lw,null,null,null,null,null,null,null,null,null)
D.h4O=new B.B("Edit text",null,A.KT,null,null,null,null,null,null,null,null,null)
D.h78=B.dR("a9P")
D.htS=new B.bt("slides-create-kiapo",x.W)
D.F1=new C.azc(0,"none")
D.b0u=new C.azc(1,"zipCrypto")
D.b0v=new C.azc(2,"aes")
D.hwE=new F.Qz("","",null)
D.hxM=new C.bf_(null)
D.hyU=new C.a05(null)
D.hBL=new C.aeN(null)
D.hBN=new C.aGs(null)
D.hEy=new C.a1j(null)
D.hFj=new C.a1Q(null)
D.hFW=new C.bx1(null)})();(function staticFields(){$.hvg=null
$.hvh=null
$.hvi=null
$.hvj=null
$.hcn=B.x0("_lastQuoRemDigits")
$.hco=B.x0("_lastQuoRemUsed")
$.azA=B.x0("_lastRemUsed")
$.hcp=B.x0("_lastRem_nsh")
$.qA=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Co=B.T(x.N,x.I)
$.cg3=!1
$.hqW=null
$.Cp=B.T(x.N,B.at("a9<n,n>"))
$.hAj=B.T(B.at("ld"),x.N)
$.hAv=B.T(B.at("ld"),x.E)
$.hyo=!1
$.bCH="q"
$.RD=0
$.Ds=B.T(x.N,B.at("ai<Ai>"))
$.hyM=!1
$.he7=!1
$.hFt=null
$.iaa=B.T(x.N,B.at("aB<n?>"))
$.Lq=""
$.je=0
$.hs7=function(){var w=x.N
return B.T(w,w)}()
$.hs6=B.T(x.N,x.R)
$.hes=!1
$.ahr=B.T(x.N,x.E)
$.hfk=0
$.hew=B.T(x.N,x.R)
$.bnh=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iAO","DP",()=>C.bcs(0))
w($,"iAM","a47",()=>C.bcs(1))
w($,"iAN","hJn",()=>C.bcs(2))
w($,"iAL","hjw",()=>$.a47().vK(0))
w($,"iAJ","hJl",()=>C.bcs(1e4))
w($,"iAK","hJm",()=>B.F6(8))
w($,"iwu","hHg",()=>B.F6(0))
w($,"iwC","hHk",()=>B.F6(0))
w($,"iwB","hHj",()=>B.c32(0))
w($,"iEP","hLy",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a7s.gdP(D.a7s),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iFg","bHf",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nc(new C.fUO(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nc(new C.fUP(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fUQ(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nc(new C.fV0(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nc(new C.fV5(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fV6(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nc(new C.fV7(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nc(new C.fV8(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nc(new C.fV9(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fVa(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nc(new C.fVb(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nc(new C.fUR(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nc(new C.fUS(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nc(new C.fUT(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fUU(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nc(new C.fUV(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nc(new C.fUW(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nc(new C.fUX(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nc(new C.fUY(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nc(new C.fUZ(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nc(new C.fV_(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nc(new C.fV1(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nc(new C.fV2(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nc(new C.fV3(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nc(new C.fV4(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.at("O<Fz>"))})
w($,"iES","hLA",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["LinNnRwxS60G+STX7OL59RmtS7o="]=a.current})($__dart_deferred_initializers__);