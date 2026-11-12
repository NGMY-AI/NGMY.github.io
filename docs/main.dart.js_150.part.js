((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,V,A8,Am,An,C={
ud(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h9o(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Kt(d){var w
if(d===0)return $.DC()
if(d===1)return $.a3G()
if(d===2)return $.hFV()
if(Math.abs(d)<4294967296)return C.bbJ(A.o.M(d))
w=C.i07(d)
return w},
bbJ(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ud(4,w)
return new C.od(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ud(1,w)
return new C.od(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aJ(d,16)
v=C.ud(2,w)
return new C.od(v===0?!1:s,w,v)}v=A.o.aq(A.o.galo(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.ud(v,w)
return new C.od(v===0?!1:s,w,v)},
i07(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dK("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DC()
w=$.hFU()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.ln(A.aH.gaU(w))
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
q=new C.od(!1,r,4)
if(s<0)p=q.mD(0,-s)
else p=s>0?q.dX(0,s):q
return p},
h9p(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hs3(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hrZ(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.E(f,16)===0)return C.h9p(d,e,s,g)
w=e+s+1
C.hs3(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i0a(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cNW(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i08(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbK(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aJ(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aJ(v,16)&1)}},
hs4(d,e,f,g,h,i){var w,v,u,t,s,r
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
i09(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ec((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
od:function od(d,e,f){this.a=d
this.b=e
this.c=f},
cNX:function cNX(){},
cNY:function cNY(){},
cNZ:function cNZ(d,e){this.a=d
this.b=e},
cO_:function cO_(d){this.a=d},
aT2:function aT2(d,e){this.a=d
this.b=e},
hhM(d,e,f){var w=new C.SF(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
SF:function SF(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4C:function a4C(d,e){this.a=d
this.b=e},
bK_:function bK_(d){this.a=d
this.c=this.b=0},
hJf(){return new C.bIi()},
bIi:function bIi(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cFW:function cFW(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i_O(d,e,f){var w,v,u,t,s
if(d.gav(d))return new Uint8Array(0)
w=new Uint8Array(B.cb(d.gd2g(d)))
v=f*2+2
u=C.hpL(C.hpN(),64)
t=new C.coD(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.coE(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cQ5(w,0,s,0))},
cFU:function cFU(d,e){this.c=d
this.d=e},
ayC:function ayC(d,e){this.a=d
this.b=e},
cFX:function cFX(d,e,f,g){var _=this
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
bap:function bap(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cFV:function cFV(){this.a=$},
hry(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hIZ(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bGS:function bGS(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hfo(d,e){e&=31
return(d&$.qr[e])<<e>>>0},
nI(d,e){e&=31
return(d>>>e|C.hfo(d,32-e))>>>0},
hpM(d){var w,v=new C.au9()
if(B.iR(d))v.aMo(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hpN(){var w=C.hpM(0),v=new Uint8Array(4),u=x.S
u=new C.coF(w,v,A.Fh,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.jY(0)
return u},
hpL(d,e){var w=new C.coB(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
coA:function coA(){},
coE:function coE(d,e,f){this.a=d
this.b=e
this.c=f},
coy:function coy(){},
au8:function au8(d){this.a=d},
coD:function coD(d){this.a=$
this.b=d
this.c=$},
coz:function coz(){},
cox:function cox(){},
au9:function au9(){this.b=this.a=$},
coC:function coC(){},
coF:function coF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
coB:function coB(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cow:function cow(){},
cov:function cov(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSe:function bSe(){},
bSf:function bSf(d){this.a=d},
i38(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bbZ:function bbZ(){},
cz2:function cz2(){},
bTg:function bTg(d,e){this.a=d
this.b=!1
this.c=e},
bTh:function bTh(){},
ick(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axd(d){var w=0,v=B.j(x.H),u
var $async$axd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fk9?2:4
break
case 2:w=5
return B.b(A.kB.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axd)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kB.h7("SystemChrome.setEnabledSystemUIOverlays",C.ick(null),u),$async$axd)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axd,v)},
axg:function axg(d,e){this.a=d
this.b=e},
a9h:function a9h(d){this.a=d},
ieX(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fF0(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fF0:function fF0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoE(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ahO("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$aoE)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cE(t,new C.c3d(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3e())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoE,v)},
aoG(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoE(),$async$aoG)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aX(j);r.C();){q=r.gR(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).ab().af()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nH("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.ak(),"savedAt",l],t,q),null),$async$aoG)
case 7:if(!f){w=5
break}s.n(0,p,B.H(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.nH("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).ab().af()],t,q),null),$async$aoG)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoG,v)},
c3f(d){return C.hP_(d)},
hP_(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3f=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ahO("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.i8),$async$c3f)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.WW(B.a3(q,x.N,x.z))
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
return B.i($async$c3f,v)},
aoF(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoE(),$async$aoF)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nL(r,new C.c3g(d))
w=4
return B.b(B.nH("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).ab().af()],x.N,x.z),null),$async$aoF)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aR0("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoF)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoF,v)},
c3d:function c3d(){},
c3e:function c3e(){},
c3g:function c3g(d){this.a=d},
ip5(d,e,f){return B.bT(A.L,null,new C.fVQ(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fVQ:function fVQ(d,e,f){this.a=d
this.b=e
this.c=f},
a1W:function a1W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKE:function aKE(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fgP:function fgP(d,e){this.a=d
this.b=e},
fgT:function fgT(d){this.a=d},
fgU:function fgU(d){this.a=d},
fgV:function fgV(d,e,f){this.a=d
this.b=e
this.c=f},
fgQ:function fgQ(d){this.a=d},
fgR:function fgR(d){this.a=d},
fgS:function fgS(d,e){this.a=d
this.b=e},
fgK:function fgK(d){this.a=d},
fgI:function fgI(d){this.a=d},
fgJ:function fgJ(d){this.a=d},
fgL:function fgL(d){this.a=d},
fgM:function fgM(d){this.a=d},
fgZ:function fgZ(d,e){this.a=d
this.b=e},
fgY:function fgY(d,e){this.a=d
this.b=e},
fgO:function fgO(d,e,f){this.a=d
this.b=e
this.c=f},
fgN:function fgN(d,e,f){this.a=d
this.b=e
this.c=f},
fgW:function fgW(d,e){this.a=d
this.b=e},
fgX:function fgX(d,e){this.a=d
this.b=e},
fh1:function fh1(d){this.a=d},
fh2:function fh2(d,e){this.a=d
this.b=e},
fh0:function fh0(d,e){this.a=d
this.b=e},
fh_:function fh_(){},
huv(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aS(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cE(v,new C.foh(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.foi(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2U(d){return C.igh(d)},
igh(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2U=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fIa(n)
t=4
j=m
i=C
w=7
return B.b(B.a3t("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2U)
case 7:j.$1(i.huv(f))
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
return B.b(B.az(),$async$a2U)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.huv(B.aT(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.foq(d),$async$a2U)
case 13:p=j.C(new i.Y(h,new g.fI8(f),o),o.k("M.E"))
A.d.aZ(p,new C.fI9())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2U,v)},
aio(d,e){return C.ioM(d,e)},
ioM(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aio=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fVk(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.az(n,null)
q=!1
t=4
w=7
return B.b(B.aig("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aio)
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
return B.b(B.az(),$async$aio)
case 12:p=g
w=13
return B.b(p.aB("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aio)
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
return B.i($async$aio,v)},
foq(d){return C.i4y(d)},
i4y(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$foq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$foq)
case 7:r=f
q=r.tP("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jw(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aS(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$foq,v)},
ahg(d,e){return C.ieP(d,e)},
ieP(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahg=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ahg)
case 6:s=g
r=B.aS(x.N)
q=s.tP("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.c8(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("co.E"))
w=7
return B.b(s.aB("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahg)
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
return B.b(C.a2U(d),$async$ahg)
case 8:n=g
J.nL(n,new C.fEF(e))
w=9
return B.b(C.aio(d,n),$async$ahg)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahg,v)},
ipa(d,e){return B.a6(d,!1).cd(B.eb(new C.fWb(e),!0,null,x.H))},
i0c(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cM(w.d,new C.cPj())},
oG:function oG(d,e,f){this.a=d
this.b=e
this.c=f},
foh:function foh(){},
foi:function foi(){},
fIa:function fIa(d){this.a=d},
fI8:function fI8(d){this.a=d},
fI9:function fI9(){},
fVk:function fVk(){},
fEF:function fEF(d){this.a=d},
fWb:function fWb(d){this.a=d},
ZD:function ZD(d,e){this.c=d
this.a=e},
aza:function aza(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cPj:function cPj(){},
cPl:function cPl(d,e){this.a=d
this.b=e},
cPo:function cPo(d){this.a=d},
cPp:function cPp(d){this.a=d},
cPn:function cPn(){},
cPq:function cPq(d,e){this.a=d
this.b=e},
cPm:function cPm(d){this.a=d},
cPr:function cPr(){},
cPk:function cPk(d,e){this.a=d
this.b=e},
cPs:function cPs(){},
cPf:function cPf(d){this.a=d},
cPd:function cPd(d){this.a=d},
cPe:function cPe(d){this.a=d},
cPg:function cPg(d,e){this.a=d
this.b=e},
cPc:function cPc(d){this.a=d},
cPb:function cPb(d){this.a=d},
cP9:function cP9(d,e){this.a=d
this.b=e},
cPa:function cPa(d){this.a=d},
cPi:function cPi(){},
cPh:function cPh(d){this.a=d},
cP8:function cP8(d,e){this.a=d
this.b=e},
cP7:function cP7(d,e){this.a=d
this.b=e},
cP6:function cP6(d,e){this.a=d
this.b=e},
cPt:function cPt(d){this.a=d},
ZB:function ZB(d,e,f){this.c=d
this.d=e
this.a=f},
aGt:function aGt(d,e,f){this.a=d
this.b=e
this.c=f},
az6:function az6(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cOA:function cOA(d){this.a=d},
cOz:function cOz(d){this.a=d},
cOC:function cOC(d,e,f){this.a=d
this.b=e
this.c=f},
cOK:function cOK(){},
cOL:function cOL(d){this.a=d},
cOD:function cOD(d,e,f){this.a=d
this.b=e
this.c=f},
cOB:function cOB(d,e){this.a=d
this.b=e},
cOF:function cOF(d,e){this.a=d
this.b=e},
cOG:function cOG(d,e){this.a=d
this.b=e},
cOH:function cOH(d,e){this.a=d
this.b=e},
cOE:function cOE(d){this.a=d},
cOJ:function cOJ(d){this.a=d},
cOI:function cOI(d,e){this.a=d
this.b=e},
cOQ:function cOQ(d){this.a=d},
cOM:function cOM(d,e){this.a=d
this.b=e},
cON:function cON(d,e){this.a=d
this.b=e},
cOO:function cOO(d,e){this.a=d
this.b=e},
cOP:function cOP(d,e){this.a=d
this.b=e},
az8:function az8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
iiE(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bJ(new C.fMI(),x.H).eM(new C.fMJ())}}else if(s)C.hw4()}catch(t){}},
hw4(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.fsB())}catch(u){}},
iiH(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fMI:function fMI(){},
fMJ:function fMJ(){},
fsB:function fsB(){},
hAV(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.el(v,w,"").split(":"))},
hAS(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lq)return null
return A.a.b2(w,14)},
he2(d){var w
if(d.b!==D.lq)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ij6(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hAW(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ij1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fNH(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.U(t,t)
for(u=v.kY(0,f),u=new B.Gf(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Sn(A.a.aA(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Sn(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cC(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ij_(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fNG())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aS2(w,u,s,0)}return w},
ij3(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6z:$.hI3(),s=x.N,r=B.U(s,s)
for(s=t.gdR(t),s=s.gag(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hAT(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fpk(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hAV(q)===e)return q}return null},
ij4(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I2).a},
ij5(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.af2(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.af2(0,0,0)
v=C.fpk(b6,b0)
u=C.fpk(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ij3(b2,C.ij1(C.hAT(b2),v.r))
if(s.a!==0){u.r=C.ij_(C.hAT(b4),s)
t=s.a}}r=B.aS(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hAV(o[m])
if(l==null||l==="utangulizi")continue
r.I(0,l)}for(q=B.dX(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fpk(b6,n)
i=C.fpk(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.he2(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hAS(a8)===a0||C.he2(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RM(a1,new C.fNN(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j9
$.j9=a9+1
A.d.I(a1,new C.eN(""+1000*a6+"_"+a9,D.lq,a2,a3,a4,a5,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,d.at,D.bj,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cp,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.af2(k,t,e)},
ij0(d){var w=C.ij4(d)
if(d.w==="hati_kuhowa")return C.hAf("",w)
return C.hAe("",w)},
fNH:function fNH(){},
fNG:function fNG(){},
fNN:function fNN(d){this.a=d},
hvM(){var w=new B.V(Date.now(),0,!1),v=new C.frC()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bB(w)},
heb(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fOF(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lq&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hB9(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fOF(d)
w=B.bj(u)
if(w==null)return!C.fOF(d)
return new B.V(Date.now(),0,!1).ab().d3(w.ab().bR(18e9))},
ijM(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).ab().af()},
hT2(d){return A.a.i(d).toLowerCase()},
ar2(d){return C.hT4(d)},
hT4(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$ar2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ar2)
case 7:r=f
p=r.tP("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.inn(),B.T(o).k("N<1,m>")).bZ(0,new C.ceZ())
o=B.d4(o,o.$ti.k("M.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aS(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ar2,v)},
ar1(d,e){return C.hT3(d,e)},
hT3(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ar1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ar2(d),$async$ar1)
case 3:r=g
if(!J.c8(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$ar1)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pU(r)),$async$ar1)
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
return B.i($async$ar1,v)},
ar3(d,e){return C.hT5(d,e)},
hT5(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ar3=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ar2(d),$async$ar3)
case 3:r=g
if(!J.hq(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$ar3)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pU(r)),$async$ar3)
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
return B.i($async$ar3,v)},
Wj(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wj=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h6M&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Wj)
case 7:r=a7
q=B.aT(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aS(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jp(p),d=d.gag(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aJ(o,J.k(n.a),C.WW(B.a3(f.a(n.b),e,a0)))}$.a85=o}}t=2
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
return B.b(B.c7(),$async$Wj)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.ut("civic_hati_kiapo_uongozi",null,A.eh),$async$Wj)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jp(f.a(J.t(l,"byState"))),e=e.gag(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aJ(k,J.k(j.a),C.WW(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.cs(o,B.a4(o).k("cs<1,2>")).gag(0);o.C();){f=o.d
f.toString
i=f
h=$.a85.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcD()
else f=!0
f=!f}else f=!0
if(f)$.a85.n(0,i.a,i.b)}w=20
return B.b(C.ar4(),$async$Wj)
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
case 16:case 9:$.h6M=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wj,v)},
ar4(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$ar4=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ar4)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a85,o=new B.cs(o,B.a4(o).k("cs<1,2>")).gag(0);o.C();){n=o.d
n.toString
q=n
J.aJ(r,q.a,q.b.ak())}w=7
return B.b(s.aB("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.az(r,null)),$async$ar4)
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
return B.i($async$ar4,v)},
b17(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b17=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wj(!1),$async$b17)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a85.h(0,t)
r=s==null?null:s.hQ()
if(r==null){u=null
w=1
break}u=C.bEr(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b17,v)},
a86(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a86=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hQ()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a85.n(0,d,o)
$.h6M=!0
w=3
return B.b(C.ar4(),$async$a86)
case 3:w=4
return B.b(B.c7(),$async$a86)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a85,n=new B.cs(n,B.a4(n).k("cs<1,2>")).gag(0);n.C();){l=n.d
l.toString
q=l
J.aJ(r,q.a,q.b.ak())}w=9
return B.b(B.nH("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).ab().af()],e,x.z),null),$async$a86)
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
return B.i($async$a86,v)},
ar5(d){var w=0,v=B.j(x.T),u,t,s
var $async$ar5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a6D(A.eN),$async$ar5)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$ar5)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b16(t,d),$async$ar5)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ar5,v)},
b16(d,e){return C.hT6(d,e)},
hT6(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b16=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c7(),$async$b16)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f_().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iy("media")
w=8
return B.b(p.xE(q,new Uint8Array(B.cb(d)),D.bKd),$async$b16)
case 8:n=p.D7(q)
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
return B.i($async$b16,v)},
Lg(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cp,D.cX,l,m,n)},
fr3(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cp,D.fg,j,k,l)},
hb1(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.k.F(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.k.ad(g,3),4280640491,i,A.cF,A.V,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cp,D.cX,g,e,f)},
fqC(d,e,f,g){return C.fr3(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hb2(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r5,!1,j,A.aG,"marriage_field_"+d+":"+A.k.ad(g,3),4280640491,i,A.bq,A.a8,"",h,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cp,D.cX,g,e,f)},
hvL(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.el(v,w,"").split(":"))},
bEr(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gH(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.hvL(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lq&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hdH(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cg(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hvL(m)
if(l!=null&&r.an(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lq&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fMG(a2))}else A.d.bt(a1.z,new C.fMH())
A.d.I(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fOF(a0))a0.ax=a6.f.ab().af()
return a0},
hdH(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fPs(D.a7z),l=C.cD(),k=x.u,j=B.a([C.er(A.bk,!1,s,A.aG,"marriage_locked_bg",r,24,A.bq,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cp,D.lR,1,0,0)],k),i=B.a([],k)
i.push(C.Lg("NGMY",A.K,236069181,52,A.bq,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lg("TAREHE:",A.bk,o,16,A.bq,A.H,A.k.F(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hb1("tarehe",0.8059999999999999,0.026,0.18,A.bk,16,p,C.hvM()))
i.push(C.fqC(0.8099999999999999,0.026+A.k.F(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lg("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bq,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lg("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cF,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fr3(0,0.002,D.fH,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hb2("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hb2("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hb2("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fr3(268435456,0.175,D.bj,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lg("VIDEO YA KIAPO",A.bk,o,10,A.bq,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bk,!1,s,A.aG,"__kiapo_video__",r,24,A.bq,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cp,D.lR,0.77,0.115,0.492))
i.push(C.Lg("Rais Anayeapa:",A.bk,p,15,A.bq,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lg("Jina:",A.bk,p,13,A.bq,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hb1("rais_jina",0.195,0.6930000000000001,0.62,A.bk,13,p,""))
i.push(C.fqC(0.195,0.7130000000000001,0.62,n))
i.push(C.Lg("Sahihi:",A.bk,p,13,A.bq,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bk,!1,s,A.aG,"marriage_sign_rais",0,24,A.bq,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cp,D.fg,0.38,0.21500000000000002,0.73))
i.push(C.fqC(0.21500000000000002,0.795,0.38,n))
i.push(C.Lg("Tarehe:",A.bk,p,13,A.bq,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hb1("rais_tarehe",0.745,0.74,0.2,A.bk,12,p,C.hvM()))
i.push(C.fqC(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fr3(0,0.032,D.bj,o,1,"state_box",0.72,0.14,0.875),C.Lg("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bq,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rT(4294967035,t,0,0,j,l,D.qV,"","",u,D.dk)
return C.Cg(t,t,t,t,D.oK,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
aho(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aho=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.U(D.feU)
w=1
break}w=3
return B.b(C.Wj(!0),$async$aho)
case 3:w=4
return B.b(C.b17(p),$async$aho)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hB9(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.blG,null,new C.fHx(p),f,!0,!0,!1,A.lS,!1,!1,x.N),$async$aho)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fHy(),f,null,!0,!0,x.y),$async$aho)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hdH(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hdH(p))
case 1:return B.h(u,v)}})
return B.i($async$aho,v)},
frC:function frC(){},
ceZ:function ceZ(){},
fMG:function fMG(d){this.a=d},
fMH:function fMH(){},
fHx:function fHx(d){this.a=d},
fHv:function fHv(d){this.a=d},
fHw:function fHw(d){this.a=d},
fHy:function fHy(){},
fHt:function fHt(d){this.a=d},
fHu:function fHu(d){this.a=d},
arA:function arA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFh:function aFh(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ekE:function ekE(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekD:function ekD(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekG:function ekG(d){this.a=d},
x_(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",j,D.bj,4280172719,2,d,0,0,"",D.cp,D.cX,l,m,n)},
hvm(d,e,f){var w=4291404327
return B.a([C.qq(0,f,D.eX,w,2,"ring_l",f,d-f*0.42,e),C.qq(0,f,D.eX,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fq1(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qq(4294967288,f,D.eX,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qq(h,s,D.eX,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qq(h,f*0.46,D.eX,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qq(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cp,D.fg,j,k,l)},
fq0(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.k.F(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.k.ad(g,3)+":"+A.o.ad(j,1):u+A.k.ad(g,3),4280640491,j,A.cF,A.V,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,l,0,0,"",D.cp,D.cX,g,e,f)},
bBO(d,e,f,g){return C.qq(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hvl(d,e,f,g,h){var w=A.k.F(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qq(0,0.036,D.bj,h,1.4,"banner_box_"+d,w,v,e),C.x_(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hAU(){var w=new B.V(Date.now(),0,!1),v=new C.fNM()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bB(w)},
hvn(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x_(r+".",A.bk,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fq0("witness_"+d+"_"+r+"_name",q,g,p,A.bk,!0,16,j,"[Jina la Shahidi]"),C.bBO(q,g+A.k.F(0.0272,0.02,0.06),p,w),C.x_("Sahihi:",A.bk,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bq,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cp,D.fg,s,t,g-0.004),C.bBO(t,g+0.044,s,w)],x.u)},
ahQ(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.drv,D.ctR,D.djm,D.dln],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gag(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hae(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fPs(d.d),v=B.a([C.er(A.bk,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cp,D.lR,1,0,0)],x.u)
A.d.v(v,C.i76(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i76(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x_("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hvm(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hvm(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fq1(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fq1(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x_("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qq(0,0.062,D.eX,b1,1.6,"crest_o",0.11,0.445,0.012),C.qq(0,0.046,D.eX,b1,1,"crest_i",0.084,0.458,0.02),C.x_("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qq(0,0.002,D.fH,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qq(b9,0.016,D.lr,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qq(0,0.002,D.fH,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x_("TAREHE:",A.bk,c0,20,A.H,A.k.F(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fq0("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bk,!1,21,b9,C.hAU()),C.bBO(0.814,0.026+A.k.F(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x_(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qq(c0,0.0026,D.bj,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qq(c3.e,0.138,D.bj,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bk,!1,b9,A.aG,"marriage_field_utangulizi:"+A.k.ad(0.82,3),b2,19,A.bq,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bj,b3,2,c5,0,0,"",D.cp,D.cX,0.82,0.09,t))
t+=c4
if(c8){r=A.k.F(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qq(0,0.036,D.bj,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.k.ad(r,3),b2,30,A.bq,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bj,b3,2,c7,0,0,"",D.cp,D.cX,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hvl(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x_(c9,A.bk,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.F(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.F(0.037399999999999996,0.02,0.06):A.k.F(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fq0("mahari_"+p,0.132,k,m,A.bk,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j9
$.j9=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j9
$.j9=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eN(""+1000*i+"_"+h,D.cX,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bq,A.aG,c0,A.bk,a9,D.bj,b2,b3,2,0,!1,s,0,D.cp,0,"","","","","",!1,0),j,new C.eN(""+1000*f+"_"+e,D.fg,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bq,A.aG,b6,A.bk,a9,D.fH,0,b5,0.8,0,!1,g,0,D.cp,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j9
$.j9=p+1
i=Date.now()
h=$.j9
$.j9=h+1
g=Date.now()
f=$.j9
$.j9=f+1
e=Date.now()
a3=$.j9
$.j9=a3+1
A.d.v(d,B.a([new C.eN(""+1000*s+"_"+p,D.cX,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bq,A.aG,b7,A.dX,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cp,0,"","","","","",!1,0),new C.eN(""+1000*i+"_"+h,D.fg,a1,a2,0.046,0.025875,"",24,A.a8,A.bq,A.aG,b6,A.bk,a9,D.bj,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cp,0,"","","","","",!1,0),new C.eN(""+1000*g+"_"+f,D.cX,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bq,A.aG,b7,A.K,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cp,0,"","","","","",!1,0),new C.eN(""+1000*e+"_"+a3,D.fg,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bq,A.aG,b6,A.bk,a9,D.bj,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cp,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hvl("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7q||w===D.a7s||w===D.a7p||w===D.a7r){w=t-0.008
A.d.v(c2,C.fq1(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fq1(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qq(0,a4,D.bj,c0,1.3,"wit_table_border",0.82,0.09,t),C.qq(c0,a4,D.bj,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qq(0,0.0022,D.fH,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x_("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x_("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hvn("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hvn("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qq(0,0.11,D.bj,c0,1.2,"mw_box",0.82,0.09,t),C.x_("MWANDISHI",A.bk,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x_("Jina:",A.bk,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fq0("mwandishi_jina",0.215,w,0.3116,A.bk,!0,15,b9,""),C.bBO(0.215,p,0.3116,b5),C.x_("Sahihi:",A.bk,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bk,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bq,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cp,D.fg,0.3161999999999999,0.5738,s-0.044),C.bBO(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qq(0,0.032,D.bj,c0,1,"state_box",0.7,0.15,a8),C.x_("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ij2(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hel(d.d),p=new C.fNI(s),o=new C.fNJ(s),n=d.z,m=n===D.a7q||n===D.a7s||n===D.a7p||n===D.a7r,l=n===D.aJE||n===D.a7t||n===D.aJF,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.bZ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7t?26:16
i.push(new C.fNL().$1$size(w))}if(n===D.aJG)i.push(D.fWL)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iR,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.an)
n=B.L(r,A.r,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aTc,p.$1$w(0.9),D.aTc,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bgd,t,n,w,t,t,A.n),t,t,t,t,A.amE,t,t,t))
i.push(A.an)
i.push(new C.fNK(r).$1("NIMETOWE"))
i.push(A.fK)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NM,new B.c6(A.aL,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.dd,new B.by(1,A.bc,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b4,A.t,B.a([k,new B.D(A.alf,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hAe(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahQ(e,t)
if(r==null)r=A.d.gH(D.I2)
w=C.cD()
v=C.rT(r.e,t,0,0,C.hae(r,0.165,y.O,D.dlZ,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qV,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cg(t,t,t,t,D.oK,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hAf(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahQ(e,t)
if(r==null)r=A.d.gH(D.I2)
w=C.cD()
v=C.rT(r.e,t,0,0,C.hae(r,0.165,y.f,D.dhl,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qV,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cg(t,t,t,t,D.oK,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFK(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.fZE(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFK,v)},
ahp(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahp=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fHB(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MT,null,new C.fHC(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahp)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFK(d,"Hati ya Kuhowa",D.I2),$async$ahp)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LW(d,"Tafuta jimbo\u2026","",A.kv,"Chagua jimbo"),$async$ahp)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hAe(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahp,v)},
ahq(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahq=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fHF(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MT,null,new C.fHG(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahq)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFK(d,"Hati ya Kuhoweya",D.I2),$async$ahq)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LW(d,"Tafuta jimbo\u2026","",A.kv,"Chagua jimbo"),$async$ahq)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hAf(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahq,v)},
ahr(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahr=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fHJ(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MT,null,new C.fHK(m),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahr)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFK(d,"Malipo ya Awamu ya Mahari",D.Sj),$async$ahr)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LW(d,"Tafuta jimbo\u2026","",A.kv,"Chagua jimbo"),$async$ahr)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahQ(s,D.Sj)
if(q==null)q=A.d.gH(D.Sj)
n=C.cD()
p=C.rT(q.e,null,0,0,C.hae(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dbU,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qV,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dk)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cg(null,null,null,null,D.oK,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahr,v)},
y3:function y3(d,e){this.a=d
this.b=e},
jz:function jz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fNM:function fNM(){},
fNI:function fNI(d){this.a=d},
fNK:function fNK(d){this.a=d},
fNL:function fNL(){},
fNJ:function fNJ(d){this.a=d},
fZE:function fZE(d,e){this.a=d
this.b=e},
aeb:function aeb(d,e,f){this.c=d
this.d=e
this.a=f},
e79:function e79(d,e,f){this.a=d
this.b=e
this.c=f},
e78:function e78(d,e){this.a=d
this.b=e},
e77:function e77(d,e){this.a=d
this.b=e},
adA:function adA(d,e,f){this.c=d
this.d=e
this.a=f},
fHB:function fHB(){},
fHC:function fHC(d){this.a=d},
fHz:function fHz(d){this.a=d},
fHA:function fHA(d){this.a=d},
fHF:function fHF(){},
fHG:function fHG(d){this.a=d},
fHD:function fHD(d){this.a=d},
fHE:function fHE(d){this.a=d},
fHJ:function fHJ(){},
fHK:function fHK(d){this.a=d},
fHH:function fHH(d){this.a=d},
fHI:function fHI(d){this.a=d},
Lj(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cp,D.cX,k,l,m)},
Di(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cp,D.fg,j,k,l)},
hw7(d,e,f){return C.Di(0,0.002,D.fH,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bBZ(d,e,f,g,h){return B.a([C.Di(4294967288,0.032,D.bj,4291404327,1.15,"pill_"+d,g,f,e),C.Lj(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hb6(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Di(0,0.002,D.fH,g,1,"orn_l_"+t,u,d,v),C.Di(h,0.016,D.lr,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Di(0,0.002,D.fH,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2j(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lj(d,A.bk,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.k.ad(t,3),4280640491,i,A.cF,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cp,D.cX,t,u,g-0.002),C.hw7(u,g+0.018,t)],x.u)},
hw8(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Di(h,0.028,D.bj,h,0,"chv_"+d,g,e,f),C.Di(w,0.024,D.lr,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Di(w,0.024,D.lr,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lj(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bBY(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lj("Sahihi:",A.bk,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bq,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cp,D.fg,v,w,f-0.006),C.hw7(w,f+0.016,v)],x.u)},
hem(d){var w,v
for(w=0;w<19;++w){v=D.Sz[w]
if(v.a===d)return v}return null},
ill(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahQ(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahQ(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ahQ(u,D.Sj)
v=w==null?l:w.d
if(v==null){w=C.ahQ(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hem(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hwX.a9(0)
$.hx8.a9(0)
t=C.fPs(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hfw(d){var w=0,v=B.j(x.T),u
var $async$hfw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h06(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfw,v)},
y6:function y6(d,e){this.a=d
this.b=e},
o_:function o_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bld:function bld(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h06:function h06(){},
aee:function aee(d){this.a=d},
epq:function epq(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
epo:function epo(d,e){this.a=d
this.b=e},
afU:function afU(d,e,f){this.c=d
this.d=e
this.a=f},
hel(d){return $.hx8.c3(0,d,new C.fPu(d))},
fPs(d){return $.hwX.c3(0,d,new C.fPt(d))},
fE(d){return B.h4l(d>>>16&255,d>>>8&255,d&255,255)},
iak(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hye(4294570461,4293910718,4284234270,u)
case 1:return C.hye(4294635750,4293975240,t,4292912216)
case 2:w=C.foz(s,4294505966,r)
C.bBI(w,14,16,p)
C.kH(w,8,9,464,836,u,1.2)
C.De(w,2,2,1,1,u,10)
C.De(w,478,2,-1,1,u,10)
C.De(w,2,852,1,-1,u,10)
C.De(w,478,852,-1,-1,u,10)
return w
case 3:return C.foz(4294966515,4294373082,4289102906)
case 4:return C.i4Q(C.foz(4294376440,4293653998,4290287194))
case 5:w=C.foz(4294965238,4294437098,4288444980)
C.bBI(w,14,16,4283043359)
C.kH(w,6,7,468,840,u,1)
C.kH(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,n,4294175448)
C.td(v,n)
C.kH(v,24,24,432,806,4286209070,1)
C.a26(v,12,12,468,12,o,3,20)
C.a26(v,12,842,468,842,o,3,20)
C.a26(v,12,12,12,842,o,3,20)
C.a26(v,468,12,468,842,o,3,20)
return v
case 7:return C.i2N(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,m,4293911504)
C.td(v,m)
C.kH(v,28,28,424,798,l,1)
C.fyb(v,28,28,l,k)
C.fyb(v,452,28,l,k)
C.fyb(v,28,826,l,k)
C.fyb(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,j,4294111986)
C.td(v,j)
C.kH(v,18,18,444,818,4292401368,0.7)
B.iT(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i6T(i,4294173372)
case 11:return C.i82(4294439140,4293449662)
case 12:return C.i2E(h,4294239432)
case 13:return C.i7t(4294244340,4293193448)
case 14:return C.ibS(4294505710,4293780694)
case 15:return C.fnt(4294966259,4294439138,o,p,q)
case 16:return C.fnt(4294966776,4294178544,o,g,g)
case 17:return C.fnt(4294965493,4294504170,o,4286200650,q)
case 18:return C.fnt(4294966519,4294373862,o,p,p)
case 19:return C.i5Z()
case 20:return C.i6_()
case 21:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,h,4293976768)
C.td(v,h)
C.bBI(v,14,16,p)
B.iT(v,!0,C.fE(u),4,475,4,9)
B.iT(v,!0,C.fE(u),4,475,844,849)
B.iT(v,!0,C.fE(u),4,9,4,849)
B.iT(v,!0,C.fE(u),470,475,4,849)
C.a26(v,10,12,470,12,u,2,16)
C.a26(v,10,842,470,842,u,2,16)
C.a26(v,10,12,10,842,u,2,18)
C.a26(v,470,12,470,842,u,2,18)
C.De(v,2,2,1,1,t,10)
C.De(v,478,2,-1,1,t,10)
C.De(v,2,852,1,-1,t,10)
C.De(v,478,852,-1,-1,t,10)
C.kH(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,s,4294438872)
C.td(v,s)
C.kH(v,14,16,452,822,o,2.2)
C.kH(v,22,24,436,806,o,1)
C.hcu(v,!1,!1,o,p,p,36,14,16)
C.kW(v,240,20,7,o,!0)
C.kW(v,240,834,7,o,!0)
C.kW(v,18,427,7,o,!0)
C.kW(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,i,4293910712)
C.td(v,i)
B.iT(v,!0,C.fE(u),0,479,0,20)
B.iT(v,!0,C.fE(u),0,479,834,853)
B.iT(v,!0,C.fE(u),0,20,0,853)
B.iT(v,!0,C.fE(u),460,479,0,853)
B.iT(v,!0,C.fE(f),5,474,5,9)
B.iT(v,!0,C.fE(f),5,474,844,848)
B.iT(v,!0,C.fE(f),5,9,5,848)
B.iT(v,!0,C.fE(f),470,474,5,848)
C.kH(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yY(v,e,4294174404)
C.td(v,e)
C.bBI(v,14,16,p)
B.iT(v,!0,C.fE(u),3,476,3,8)
B.iT(v,!0,C.fE(u),3,476,845,850)
B.iT(v,!0,C.fE(u),3,8,3,850)
B.iT(v,!0,C.fE(u),471,476,3,850)
C.kH(v,9,10,462,834,t,1)
C.kH(v,14,16,452,822,u,1.8)
C.kW(v,240,8,4,u,!0)
C.kW(v,240,846,4,u,!0)
C.kW(v,8,427,4,u,!0)
C.kW(v,472,427,4,u,!0)
C.kW(v,8,8,3,t,!0)
C.kW(v,472,8,3,t,!0)
C.kW(v,8,846,3,t,!0)
C.kW(v,472,846,3,t,!0)
return v}},
yY(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.F(A.k.V(q*w+p*t),0,255)
u=A.o.F(A.k.V(o*w+n*t),0,255)
w=A.o.F(A.k.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kY(d,!1,A.di,new B.Mz(s),r,A.d1,1,0,w-1,k,k);++k}},
td(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e4()
n.d_(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.ir()
v=A.o.F(A.k.M(s.gb8(s))-3,0,255)
r=A.o.F(A.k.M(s.gbe())-3,0,255)
q=A.o.F(A.k.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kH(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.kY(d,!0,A.di,u,v,A.d1,j,e,t,f,f)
w=f+h
B.kY(d,!0,A.di,u,v,A.d1,j,e,t,w,w)
B.kY(d,!0,A.di,u,v,A.d1,j,e,e,f,w)
B.kY(d,!0,A.di,u,v,A.d1,j,t,t,f,w)},
De(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.F(A.k.V(j*0.72),8,j-2)
B.kY(d,!0,A.di,C.fE(i),u,A.d1,2,e,e+g*j,f,f)
B.kY(d,!0,A.di,C.fE(i),u,A.d1,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kY(d,!0,A.di,C.fE(i),u,A.d1,1,w,e+g*t,v,v)
B.kY(d,!0,A.di,C.fE(i),u,A.d1,1,w,w,v,f+h*t)},
hye(d,e,f,g){var w=null,v=B.hn(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.yY(v,d,e)
C.td(v,d)
B.iT(v,!0,C.fE(f),0,479,0,28)
B.iT(v,!0,C.fE(f),0,479,826,853)
B.iT(v,!0,C.fE(f),0,28,0,853)
B.iT(v,!0,C.fE(f),452,479,0,853)
C.kH(v,5,5,470,844,g,1.1)
C.kH(v,28,28,424,798,g,1.6)
C.De(v,2,2,1,1,g,11)
C.De(v,478,2,-1,1,g,11)
C.De(v,2,852,1,-1,g,11)
C.De(v,478,852,-1,-1,g,11)
return v},
foz(d,e,f){var w=null,v=B.hn(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.yY(v,d,e)
C.td(v,d)
C.kH(v,14,16,452,822,f,1.6)
C.kH(v,20,22,440,810,f,0.8)
return v},
bBI(d,e,f,g){var w,v=C.fE(g)
B.iT(d,!0,v,0,479,0,f-1)
w=854-f
B.iT(d,!0,v,0,479,w,853);--w
B.iT(d,!0,v,0,e-1,f,w)
B.iT(d,!0,v,480-e,479,f,w)},
i4Q(d){var w,v,u=4291404327
C.bBI(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kW(d,w,8,3,u,!0)
C.kW(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kW(d,7,v,3,u,!0)
C.kW(d,473,v,3,u,!0)}return d},
fBo(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jo(e,f),new B.jo(e+g*n,f),new B.jo(e,f+h*n)],t)
B.a2Q(d,C.fE(m),s)
w=A.o.F(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jo(s,u),new B.jo(e+g*v,u),new B.jo(s,f+h*v)],t)
B.a2Q(d,C.fE(k),t)
t=A.k.V(n*0.39)
C.kW(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kW(d,e+g*t,f+h*3,4,k,!0)
C.kW(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kW(d,e+g*t,f,5,k,!0)
C.kW(d,e,f+h*t,5,k,!0)}},
hcu(d,e,f,g,h,i,j,k,l){var w,v
C.fBo(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fBo(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fBo(d,k,v,1,-1,e,f,g,h,i,j)
C.fBo(d,w,v,-1,-1,e,f,g,h,i,j)},
a26(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ll(d,!0,A.di,new B.rn(p),null,A.d1,j,r,q)}},
fAk(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kY(d,!0,A.di,new B.rn(o),null,A.d1,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kY(d,!0,A.di,new B.rn(o),null,A.d1,1.4,q,q,p,p+h*r)}},
i2N(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cb,0,A.e3,854,o,0,3,o,A.cb,480,!1)
C.yY(n,d,e)
C.td(n,d)
C.kH(n,20,20,440,814,f,1.2)
C.fAk(n,0,0,1,1,g)
C.fAk(n,480,0,-1,1,g)
C.fAk(n,0,854,1,-1,g)
C.fAk(n,480,854,-1,-1,g)
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
B.kY(n,!0,A.di,new B.rn(p),o,A.d1,1.2,240,r,60,q)}return n},
fyb(d,e,f,g,h){var w
C.fF1(d,!0,C.fE(g),13,e,f)
C.fF1(d,!0,C.fE(g),9,e,f)
w=B.a([new B.jo(e,f-4),new B.jo(e+4,f),new B.jo(e,f+4),new B.jo(e-4,f)],x.J)
B.a2Q(d,C.fE(h),w)},
kW(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jo(e,v),new B.jo(u,f),new B.jo(e,t),new B.jo(s,f)],x.J)
if(i){B.a2Q(d,C.fE(h),r)
return}B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,e,u,v,f)
B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,u,e,f,t)
B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,e,s,t,f)
B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,s,e,f,v)},
fns(d,e,f,g,h,i,j){var w,v=B.a([new B.jo(e,f),new B.jo(e+g*28,f),new B.jo(e,f+h*28)],x.J)
B.a2Q(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kW(d,v,w,6,j,!0)
C.kW(d,v,w,3,i,!0)},
fnt(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.yY(v,d,e)
C.td(v,d)
C.kH(v,18,18,444,818,f,2)
C.kH(v,26,26,428,802,f,0.9)
if(h!=null)B.iT(v,!0,C.fE(h),28,451,28,34)
C.fns(v,18,18,1,1,g,f)
C.fns(v,462,18,-1,1,g,f)
C.fns(v,18,836,1,-1,g,f)
C.fns(v,462,836,-1,-1,g,f)
return v},
i5Z(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cb,0,A.e3,854,v,0,3,v,A.cb,480,!1)
C.yY(r,u,4294240980)
C.td(r,u)
C.kH(r,10,12,460,830,t,3.2)
C.kH(r,18,20,444,814,s,1.2)
C.kH(r,24,26,432,802,t,1.8)
C.hcu(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kW(r,w,16,3,t,!0)
C.kW(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kW(r,16,w,3,t,!0)
C.kW(r,464,w,3,t,!0)}return r},
i6_(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cb,0,A.e3,854,t,0,3,t,A.cb,480,!1)
C.yY(p,s,4294373080)
C.td(p,s)
C.kH(p,16,18,448,818,r,2.4)
C.kH(p,24,26,432,802,4286209044,1)
w=new C.fpT(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hcu(p,!1,!0,r,q,q,34,16,18)
return p},
bCp(d,e,f,g,h,i){B.iT(d,!0,C.fE(i),e,e+g,f,f+h)},
bDg(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.F(A.k.V(v*l+u*m),0,255)
j=A.o.F(A.k.V(t*l+s*m),0,255)
l=A.o.F(A.k.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kY(d,!1,A.di,new B.Mz(i),null,A.d1,1,e,w,l,l)}},
i6S(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.aq(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kY(d,!1,A.di,new B.rn(r),null,A.d1,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.aq(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kY(d,!1,A.di,new B.rn(r),null,A.d1,1,t,t,f,s);++q}},
i6T(d,e){var w,v,u=null,t=B.hn(u,u,A.cb,0,A.e3,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i6S(t,v,w,30,D.d47,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bCp(t,44,44,392,766,d)
C.bDg(t,44,44,392,766,d,e)
C.td(t,d)
C.kH(t,44,44,392,766,4292128567,2.2)
C.kH(t,50,50,380,754,4279898632,0.8)
return t},
i81(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kW(d,e,f,7,h,!0)
C.kW(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.6,w,u,v,t)
B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kY(d,!0,A.di,new B.rn(p),o,A.d1,1.2,w,v,q,q)}break
default:B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.5,e-8,e+8,f,f)
B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.5,e,e,f-8,f+8)
B.ll(d,!0,A.di,C.fE(h),o,A.d1,2,e,f)}},
i82(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cb,0,A.e3,854,s,0,3,s,A.cb,480,!1)
B.iT(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i81(r,u,v,w,4292391514)}C.bCp(r,46,46,388,762,d)
C.bDg(r,46,46,388,762,d,e)
C.td(r,d)
C.kH(r,46,46,388,762,4291404327,1.8)
return r},
htv(d,e,f,g){C.fF1(d,!0,C.fE(g),16,e,f)
C.fF1(d,!0,C.fE(g),11,e,f)
C.kW(d,e,f,6,g,!0)
B.kY(d,!0,A.di,C.fE(g),null,A.d1,1.3,e-14,e+14,f,f)
B.kY(d,!0,A.di,C.fE(g),null,A.d1,1.3,e,e,f-14,f+14)},
i2E(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cb,0,A.e3,854,v,0,3,v,A.cb,480,!1)
B.iT(s,!0,C.fE(4280948752),0,479,0,853)
B.iT(s,!0,C.fE(u),0,479,0,78)
B.iT(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.htv(s,w,39,t)
C.htv(s,w,815,t)}C.bCp(s,38,92,404,670,d)
C.bDg(s,38,92,404,670,d,e)
C.td(s,d)
C.kH(s,38,92,404,670,t,1.8)
C.kH(s,45,99,390,656,4287322667,0.8)
return s},
i7s(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jo(e,f),new B.jo(q-5,w),new B.jo(q,f-(18-Math.abs(r)*3)),new B.jo(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2Q(d,new B.rn(o),p)}B.ll(d,!0,A.di,C.fE(4292128567),null,A.d1,3,e,f)},
i7t(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cb,0,A.e3,854,s,0,3,s,A.cb,480,!1)
C.yY(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kY(q,!0,A.di,new B.rn(v),s,A.d1,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kY(q,!0,A.di,new B.rn(u),s,A.d1,1.1,v,v,0,853)}B.iT(q,!0,C.fE(r),0,479,0,70)
B.iT(q,!0,C.fE(r),0,479,798,853)
for(t=0;t<5;++t)C.i7s(q,70+t*85,48,4292128567)
C.bCp(q,48,78,384,712,d)
C.bDg(q,48,78,384,712,d,e)
C.td(q,d)
C.kH(q,48,78,384,712,4291404327,1.6)
return q},
ibS(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cb,0,A.e3,854,t,0,3,t,A.cb,480,!1)
B.iT(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kW(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ll(r,!0,A.di,new B.rn(u),t,A.d1,1,v,w)}C.bCp(r,40,40,400,774,d)
C.bDg(r,40,40,400,774,d,e)
C.td(r,d)
C.kH(r,40,40,400,774,4291058750,2)
C.kH(r,48,48,384,758,s,0.8)
return r},
l8:function l8(d,e){this.a=d
this.b=e},
fPu:function fPu(d){this.a=d},
fPt:function fPt(d){this.a=d},
fpT:function fpT(d){this.a=d},
fQ7(d){var w
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
i7W(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hb_(d){var w,v,u,t=null,s=A.a.cp(d,"{"),r=A.a.oZ(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aS(0,Ak.ahM(A.a.aA(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agg(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$agg)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nh(n)
if(e==null)s=A.hW
else{r=C.i7W(e)
s=B.a([new B.a13(A.cO.gcu().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rc(t,d,s,"news",E.Gw),$async$agg)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LK(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
bEV(d){return C.il1(d)},
il1(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bEV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.az(d.ak(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agg(r,null),$async$bEV)
case 7:q=f
p=C.hb_(q)
if(p==null){u=d
w=1
break}o=d.aEu(p)
if(o.r.length===0||A.d.aO(o.r," ").length<A.d.aO(d.r," ").length*0.5){u=d
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
return B.i($async$bEV,v)},
hxs(d){var w,v=F.hdD(d)
v=B.aL(v,"book","newspaper")
if(F.a39(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fU6(d,e,f,g){return C.imV(d,e,f,g)},
imV(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fU6=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fQ7(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hBi()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agg('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hxs(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fU6)
case 3:r=m.hb_(i)
if(r==null)throw B.W(y.S)
q=new C.A3(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEu(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a39(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a39(A.d.aO(t," "))==="sw"?C.bEV(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fU6,v)},
bEp(d,e,f,g,h){return C.iiC(d,e,f,g,h)},
iiC(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEp=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hBi()
k=A.Y.az(d.ak(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agg('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hxs(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEp)
case 3:p=j.hb_(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aEu(B.a3(o,x.N,x.z))
m=A.Y.az(n.ak(),null)!==A.Y.az(d.ak(),null)}else{n=d
m=!1}w=m&&F.a39(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bEV(n),$async$bEp)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8K(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEp,v)},
a8K:function a8K(d,e,f){this.a=d
this.b=e
this.c=f},
ipJ(d,e){return B.a6(d,!1).cd(B.eb(new C.h0h(e),!0,null,x.H))},
h0h:function h0h(d){this.a=d},
WM:function WM(d,e){this.c=d
this.a=e},
aFy:function aFy(d,e,f,g,h,i,j,k){var _=this
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
esn:function esn(d){this.a=d},
esm:function esm(){},
eso:function eso(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
esp:function esp(){},
es_:function es_(d,e){this.a=d
this.b=e},
erW:function erW(d,e){this.a=d
this.b=e},
es6:function es6(d){this.a=d},
es7:function es7(d,e){this.a=d
this.b=e},
es8:function es8(d){this.a=d},
es1:function es1(d,e){this.a=d
this.b=e},
es2:function es2(d,e){this.a=d
this.b=e},
es3:function es3(d,e){this.a=d
this.b=e},
es4:function es4(d){this.a=d},
es5:function es5(d){this.a=d},
es0:function es0(d,e){this.a=d
this.b=e},
erY:function erY(d){this.a=d},
erZ:function erZ(d){this.a=d},
ese:function ese(d){this.a=d},
esf:function esf(d){this.a=d},
esd:function esd(d){this.a=d},
esg:function esg(d,e){this.a=d
this.b=e},
esc:function esc(d,e){this.a=d
this.b=e},
esh:function esh(d){this.a=d},
esb:function esb(d){this.a=d},
esi:function esi(d){this.a=d},
esa:function esa(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
es9:function es9(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
erX:function erX(d,e){this.a=d
this.b=e},
fP3(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fP3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hv4){w=1
break}r=new C.fP4()
t=4
q=x.s
w=7
return B.b(B.iJ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fP3)
case 7:$.hv4=!0
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
return B.i($async$fP3,v)},
bEM(d){return A.Dj[B.mn(d)-1]+", "+A.oG[B.bK(d)-1]+" "+B.bV(d)+", "+B.bB(d)},
iaZ(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dw3[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
he1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fNm(),B.T(v).k("Y<1>")))
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
continue}o=new C.fNo(j,h)
n=new C.fNn(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j5(o.$1(l)))
j.a+=l}return u},
haJ(d,e){var w=new C.fps()
return A.d.cH(e,0,new C.fpq(w))>=A.d.cH(d,0,new C.fpr(w))},
hsa(d){var w,v,u=new B.aE($.S().r,A.ah,null,null,B.a([],x.v))
u.D(new B.aY(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bt())
return u},
A3:function A3(d,e,f,g,h,i,j,k,l,m){var _=this
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
ciE:function ciE(d){this.a=d},
ciC:function ciC(){},
ciD:function ciD(){},
tI:function tI(d,e){this.a=d
this.b=e},
C2:function C2(d,e){this.a=d
this.b=e},
lv:function lv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fP4:function fP4(){},
fNm:function fNm(){},
fNo:function fNo(d,e){this.a=d
this.b=e},
fNn:function fNn(d,e,f){this.a=d
this.b=e
this.c=f},
fps:function fps(){},
fpt:function fpt(){},
fpq:function fpq(d){this.a=d},
fpr:function fpr(d){this.a=d},
b2C:function b2C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ciF:function ciF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciG:function ciG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ciH:function ciH(d){this.a=d},
bef:function bef(d){this.a=d},
bee:function bee(d,e){this.b=d
this.a=e},
bwd:function bwd(d){this.a=d},
baI:function baI(d,e){this.b=d
this.a=e},
btH:function btH(d,e){this.b=d
this.a=e},
hDm(d,e){return B.a6(d,!1).cd(B.eb(new C.h0k(e,null),!0,null,x.E))},
h0k:function h0k(d,e){this.a=d
this.b=e},
WN:function WN(d,e,f){this.c=d
this.d=e
this.a=f},
aFB:function aFB(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
et9:function et9(){},
eta:function eta(d){this.a=d},
et8:function et8(d,e){this.a=d
this.b=e},
esX:function esX(d){this.a=d},
esY:function esY(d){this.a=d},
et3:function et3(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
et1:function et1(d){this.a=d},
et2:function et2(d,e,f){this.a=d
this.b=e
this.c=f},
esZ:function esZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et5:function et5(d,e){this.a=d
this.b=e},
et0:function et0(d,e){this.a=d
this.b=e},
et6:function et6(d){this.a=d},
et_:function et_(d,e){this.a=d
this.b=e},
et7:function et7(d,e){this.a=d
this.b=e},
bdN:function bdN(d,e,f){this.b=d
this.c=e
this.a=f},
ipP(d){return B.a6(d,!1).cd(B.eb(new C.h0A(),!0,null,x.I))},
bCa(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hcb(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h0A:function h0A(){},
a0V:function a0V(d){this.a=d},
oQ:function oQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aH_:function aH_(d,e,f,g,h,i,j,k,l){var _=this
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
_.aI=_.aQ=_.aL=_.aH=_.a_=_.bb=_.bn=_.y2=0
_.b7=null
_.b6=0.25
_.bf=null
_.bI=0.5
_.aP=1
_.c9=_.bF=_.bm=0
_.cO=_.c6=!1
_.c=_.a=null},
f20:function f20(d){this.a=d},
f0T:function f0T(d,e){this.a=d
this.b=e},
f1g:function f1g(d,e){this.a=d
this.b=e},
f1q:function f1q(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0A:function f0A(d){this.a=d},
f0B:function f0B(d){this.a=d},
f19:function f19(d,e){this.a=d
this.b=e},
f1a:function f1a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1m:function f1m(d,e,f){this.a=d
this.b=e
this.c=f},
f1l:function f1l(d,e){this.a=d
this.b=e},
f1n:function f1n(d,e){this.a=d
this.b=e},
f1k:function f1k(d,e){this.a=d
this.b=e},
f1p:function f1p(d,e,f){this.a=d
this.b=e
this.c=f},
f1o:function f1o(d,e){this.a=d
this.b=e},
f0s:function f0s(d){this.a=d},
f0t:function f0t(d){this.a=d},
f0u:function f0u(d){this.a=d},
f0r:function f0r(){},
f0v:function f0v(d,e){this.a=d
this.b=e},
f0q:function f0q(d,e){this.a=d
this.b=e},
f0x:function f0x(){},
f0w:function f0w(d,e){this.a=d
this.b=e},
f0p:function f0p(d,e){this.a=d
this.b=e},
f0m:function f0m(d,e){this.a=d
this.b=e},
f0y:function f0y(d){this.a=d},
f0o:function f0o(d,e){this.a=d
this.b=e},
f0z:function f0z(d){this.a=d},
f0n:function f0n(d,e){this.a=d
this.b=e},
f1Q:function f1Q(d,e){this.a=d
this.b=e},
f1X:function f1X(d){this.a=d},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f1Z:function f1Z(){},
f1R:function f1R(d,e){this.a=d
this.b=e},
f1P:function f1P(d,e){this.a=d
this.b=e},
f1S:function f1S(d,e){this.a=d
this.b=e},
f1O:function f1O(d,e){this.a=d
this.b=e},
f1T:function f1T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1N:function f1N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1U:function f1U(d){this.a=d},
f1V:function f1V(d,e){this.a=d
this.b=e},
f1W:function f1W(d){this.a=d},
f1M:function f1M(d){this.a=d},
f1z:function f1z(d){this.a=d},
f1A:function f1A(d){this.a=d},
f1y:function f1y(d,e){this.a=d
this.b=e},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1B:function f1B(d){this.a=d},
f1E:function f1E(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1F:function f1F(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1H:function f1H(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1v:function f1v(d){this.a=d},
f1K:function f1K(d,e){this.a=d
this.b=e},
f1u:function f1u(d,e){this.a=d
this.b=e},
f1L:function f1L(d){this.a=d},
f1C:function f1C(d){this.a=d},
f1D:function f1D(d){this.a=d},
f1d:function f1d(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1e:function f1e(d,e){this.a=d
this.b=e},
f1b:function f1b(d,e){this.a=d
this.b=e},
f1f:function f1f(d){this.a=d},
f15:function f15(d){this.a=d},
f14:function f14(d){this.a=d},
f16:function f16(d){this.a=d},
f13:function f13(d){this.a=d},
f17:function f17(d,e){this.a=d
this.b=e},
f12:function f12(d,e){this.a=d
this.b=e},
f11:function f11(d,e){this.a=d
this.b=e},
f0K:function f0K(d){this.a=d},
f0L:function f0L(d){this.a=d},
f0M:function f0M(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0O:function f0O(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0R:function f0R(d){this.a=d},
f0S:function f0S(d){this.a=d},
f05:function f05(d){this.a=d},
f06:function f06(d){this.a=d},
f07:function f07(d){this.a=d},
f08:function f08(d){this.a=d},
f09:function f09(d){this.a=d},
f04:function f04(d){this.a=d},
f0a:function f0a(d){this.a=d},
f0b:function f0b(d){this.a=d},
f0E:function f0E(d){this.a=d},
f0F:function f0F(d){this.a=d},
f0G:function f0G(d){this.a=d},
f0H:function f0H(d){this.a=d},
f0I:function f0I(d){this.a=d},
f0f:function f0f(d){this.a=d},
f0g:function f0g(d){this.a=d},
f0h:function f0h(d){this.a=d},
f0i:function f0i(d){this.a=d},
f0j:function f0j(d){this.a=d},
f0e:function f0e(d){this.a=d},
f0k:function f0k(d){this.a=d},
f0d:function f0d(d){this.a=d},
f0l:function f0l(d){this.a=d},
f0c:function f0c(d){this.a=d},
f18:function f18(d){this.a=d},
f10:function f10(d){this.a=d},
f0X:function f0X(d){this.a=d},
f0W:function f0W(d){this.a=d},
f0Y:function f0Y(d,e){this.a=d
this.b=e},
f0V:function f0V(d,e){this.a=d
this.b=e},
f0Z:function f0Z(d,e){this.a=d
this.b=e},
f0U:function f0U(d,e){this.a=d
this.b=e},
f1_:function f1_(d){this.a=d},
f1j:function f1j(d){this.a=d},
f1i:function f1i(d,e,f){this.a=d
this.b=e
this.c=f},
f1h:function f1h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1s:function f1s(d,e){this.a=d
this.b=e},
f1r:function f1r(d,e){this.a=d
this.b=e},
f0J:function f0J(d){this.a=d},
f2_:function f2_(d){this.a=d},
bho:function bho(d,e){this.b=d
this.a=e},
ilc(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ild(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b2(d,v)
return n.charCodeAt(0)==0?n:n},
bCL(){var w=$.bBS,v=$.Rh
$.Rh=v+1
return w+"_"+v},
ih(d,e,f,g,h,i,j){return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bq,A.a8,"",h,C.bCL(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cp,D.fg,g,e,f)},
og(d,e,f,g){var w=f*9
return C.ih(D.eX,d-f/2,e-w/32,f,w/16,g,0)},
i4n(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bBS
o=$.Rh
$.Rh=o+1
w.push(new C.eN(p+"_"+o,D.fg,0,q,1,0.0016,"",24,A.a8,A.bq,A.aG,k,A.bk,null,D.bj,s,s,0,0,!1,"",0,D.cp,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bBS
o=$.Rh
$.Rh=o+1
w.push(new C.eN(p+"_"+o,D.fg,n,0,0.004,1,"",24,A.a8,A.bq,A.aG,k,A.bk,null,D.bj,s,s,0,0,!1,"",0,D.cp,0,"","","","","",!1,0))}w.push(C.og(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.og(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ih(D.bj,0.08,0.08,0.5,0.003,v,0),C.ih(D.bj,0.58,0.08,0.004,0.06,v,0),C.ih(D.bj,0.58,0.14,0.34,0.003,v,0),C.ih(D.bj,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ih(D.bj,0.08,0.8,0.004,0.14,t,0),C.ih(D.bj,0.08,0.94,0.6,0.003,t,0),C.og(0.58,0.08,0.05,e),C.og(0.92,0.22,0.05,e),C.og(0.08,0.8,0.05,f),C.og(0.68,0.94,0.05,f),C.og(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ih(D.lr,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ih(D.lr,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ih(D.lr,0.7,0.8,0.22,0.12,w|1140850688,0),C.ih(D.lr,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.og(0.5,0.5,1.5,w|335544320),C.og(0.5,0.5,1.15,w|402653184),C.og(0.5,0.5,0.8,v|436207616),C.og(0.95,0.05,0.4,v|855638016),C.og(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.og(0.85,0.08,0.7,w|1140850688),C.og(0.1,0.35,0.5,v|855638016),C.og(0.9,0.62,0.55,v|771751936),C.og(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ih(D.bj,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ih(D.bj,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ih(D.bj,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ih(D.bj,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.og(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.og(0.5,0.2,0.65,(w|3422552064)>>>0),C.og(0.5,0.2,0.95,w|855638016),C.ih(D.bj,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ih(D.bj,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ih(D.kb,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ih(D.kb,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ih(D.kb,0.15,0.86,0.6,0.14,1712265002,0),C.og(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d5G[m]
u=A.o.E(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bBS
l=$.Rh
$.Rh=l+1
w.push(new C.eN(o+"_"+l,D.fg,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bq,A.aG,k,A.bk,null,D.eX,s,s,0,0,!1,"",0,D.cp,0,"","","","","",!1,0))}w.push(C.og(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ih(D.kb,0.35,-0.1,0.3,0.62,w|855638016,0),C.ih(D.kb,0.05,-0.1,0.3,0.55,v,-0.5),C.ih(D.kb,0.65,-0.1,0.3,0.55,v,0.5),C.og(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ih(D.bj,0.06,0.04,0.88,0.002,e,0),C.ih(D.bj,0.06,0.96,0.88,0.002,e,0),C.ih(D.bj,0.06,0.04,0.004,0.92,e,0),C.ih(D.bj,0.936,0.04,0.004,0.92,e,0),C.ih(D.bj,0.09,0.07,0.82,0.001,w,0),C.ih(D.bj,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ih(D.kc,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ih(D.kc,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ih(D.kc,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ih(D.bj,0,0,0.3,0.09,w|1140850688,0),C.ih(D.bj,0.7,0.9,0.3,0.1,v|1426063360,0),C.ih(D.bj,0.82,0.04,0.12,0.07,w|771751936,0),C.ih(D.bj,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ih(D.eX,0.62,0.02,0.5,0.16,v,0.6),C.ih(D.eX,0.78,0.12,0.4,0.12,u,0.9),C.ih(D.eX,-0.12,0.8,0.5,0.16,u,-0.6),C.ih(D.eX,-0.05,0.9,0.4,0.12,v,-0.9),C.og(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ih(D.bj,0.09,0.12,0.16,0.006,e,0),C.ih(D.bj,0.05,0.03,0.9,0.001,w,0),C.ih(D.bj,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ihF(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bBS=j
$.Rh=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fKL()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bk,!1,n,A.aG,"ngmy_quote_background",m,24,A.bq,A.a8,"",1,C.bCL(),g,"","",0,!1,"",0,D.bj,l,2,"",0,0,"",D.cp,D.lR,1,0,0))
if(a9)A.d.v(q,C.i4n(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.F(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ilc(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fKK(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.F(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bk,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bq,A.a8,a1,a3*9/16,C.bCL(),a0,"","",0,!1,a2,0,D.bj,l,2,"",0,0,"",D.cp,D.lR,a3,a4,a5))
return C.rT(s,r,0,0,q,j+"_slide",D.qV,"","","",D.dk)},
rS:function rS(d,e){this.a=d
this.b=e},
ml:function ml(d,e,f,g,h,i,j,k,l,m){var _=this
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
fKL:function fKL(){},
fKK:function fKK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hVf(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.ck9(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.A4(u,t,s,B.w(w==null?"":w))},
fSt(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fSt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hvr){w=1
break}$.hvr=!0
t=4
w=7
return B.b(B.az(),$async$fSt)
case 7:r=e
q=B.aT(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aS(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jp(p),k=k.gag(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aX(j.a(o.b));h.C();){m=h.gR(h)
l=C.hVf(m)
if(l!=null)J.c8(n,l)}$.Df.c3(0,B.w(o.a),new C.fSu(n))}C.hbQ()
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
return B.i($async$fSt,v)},
hbQ(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Df,$.Df.r,$.Df.e);w.C();)J.nL(w.d,new C.fxs(v))
$.Df.bt($.Df,new C.fxt())},
aPE(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPE=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPE)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cs($.Df,B.a4($.Df).k("cs<1,2>")).gag(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aX(q.b);h.C();){o=h.gR(h)
g=o
J.c8(p,B.H(["at",g.a.ab().af(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aJ(r,i,p)}n=r
w=7
return B.b(s.aB("String","ngmy_slides_ai_history_v1",A.Y.az(n,null)),$async$aPE)
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
return B.i($async$aPE,v)},
ilQ(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hbQ()
w=$.Df.c3(0,d,new C.fSw())
v=Date.now()
u=B.C(e,B.a4(e).k("co.E"))
J.pT(w,0,new C.A4(new B.V(v,0,!1),f,u,g))
C.aPE()},
ilN(d){var w,v=$.Df.h(0,d)
if(v==null||J.cq(v))return
w=J.cC(v)
w.cA(v,0)
if(w.gav(v))$.Df.W(0,d)
C.aPE()},
A4:function A4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck9:function ck9(){},
fSu:function fSu(d){this.a=d},
fxs:function fxs(d){this.a=d},
fxt:function fxt(){},
fSw:function fSw(){},
ilS(d){return A.d.dO(D.wT,new C.fSz(d),new C.fSA())},
hVd(d){var w
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
hVc(d){var w
switch(d.a){case 0:w=D.apf
break
case 1:w=A.ze
break
case 2:w=A.PF
break
case 3:w=I.aoV
break
case 4:w=A.apL
break
case 5:w=A.mg
break
default:w=null}return w},
i7y(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RJ[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RJ[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hVe(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
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
o.push(q)}return A.Y.az(B.H(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ilO(d,e,f,g,h){var w=new B.N(D.wT,new C.fSs(),x.eC).aO(0,", "),v=""+d,u=C.hBa(h),t=F.fM9(h),s=C.hx6(g),r=e.q(0,D.Jd)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Je)?'- New slides get an "icon3d" from: '+A.d.aO(D.RJ,", ")+".\n":"",p=e.q(0,D.DU)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ilP(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wT,new C.fSv(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Jd)){p.a=s
w=s}else w=""
if(e.q(0,D.Je))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RJ,", ")+".\n")
if(e.q(0,D.DU))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hBa(d)
v=F.fM9(d)
u=C.hx6(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ai1(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DE(a3,"{"),a5=J.h3T(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.M4(a3,a4,a5+1)
try{w=A.Y.aS(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cq(v))return a1
u=B.a([],x.aC)
for(o=J.aX(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fQq(),m).bZ(0,new C.fQr())
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
f=C.i7y(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c8(u,new C.a8S(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.aW(D.wT,new C.fQs(r))?r:a7
o=C.fwI(J.t(w,"logo_frame"),D.Df)
n=C.fwI(J.t(w,"logo_ring"),D.D8)
m=C.fwI(J.t(w,"photo_frame"),D.Df)
l=C.fwI(J.t(w,"photo_ring"),D.D8)
return new C.asu(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2H(d,e){return(A.o.F(e,0,255)<<24|d&16777215)>>>0},
hAh(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DV),f7=f6?C.i0Z():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.d_(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o3("luxe",u.a,A.mg,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dk)
w=s}if(w==null)w=C.ilS(f9.b)
r=g2.q(0,D.a7L)||f6
q=g2.q(0,D.Jd)
p=g2.q(0,D.TI)
o=new C.fKP()
n=B.a([],x.g)
m=new C.fKS(o,w,r)
l=new C.fKR(o,r)
k=new C.fKQ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aW(u,new C.fKO(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.d7m[b8]
c0=D.d6c[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f9h.q(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eX,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.F(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eX,0.7,-0.25,0.46,0.82,(A.o.F(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,-0.08,0.68,0.24,0.43,(A.o.F(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n2,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qW,500,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TF
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eX,0.64,0.46,0.42,0.75,(A.o.F(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lr,0.78,0.1,0.18,0.32,(A.o.F(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bj,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DS
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eX,-0.12,-0.2,0.36,0.64,(A.o.F(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,0.82,0.66,0.26,0.46,(A.o.F(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n2,(A.o.F(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cF,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qW,500,f2,f0))
d3=D.n1
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eX,0.58,0.04,0.44,0.8,(A.o.F(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bj,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vd:D.cp
c1.push(new C.eN(b4,D.a7J,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bq,A.aG,4279310375,A.bk,e4,D.bj,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n1
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eX,-0.15,-0.3,0.5,0.9,(A.o.F(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,0.78,0.62,0.3,0.54,(A.o.F(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n2,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qW,450,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TF
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eX,b4,0.52,0.3,0.54,(A.o.F(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eX,b4,-0.18,0.26,0.46,(A.o.F(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bj,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bj,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jb,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n1}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dk,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i2D(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dyx[A.o.E(b1,6)]:s
n.push(new C.lY(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cg(e4,e4,e4,e4,D.DR,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aA(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fNc(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fNc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DU)
n=e.q(0,D.Je)
if(!o&&!n){u=D.a6G
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fNf(o,s[r],n,$.i6f,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$fNc)
case 3:q=m.aX(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNc,v)},
fMc(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fMc=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ilP(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aOY(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fMc)
case 3:u=s.aPj(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMc,v)},
bEq(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEq=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aS(x.N)
for(s=B.dX(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.I(0,(q==null?r.a(q):q).b)}C.ilQ(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ai1(i,"colorful")
t=C.ilO(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aOY(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hW),$async$bEq)
case 3:u=o.aPj(m,f,h,g,D.ec2,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEq,v)},
aOY(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aOY=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$aOY)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nh(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rc(t,d,g,"slides",null),$async$aOY)
case 7:q=i
p=q.b
if(p!=null){o=C.ai1(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LK(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aOY,v)},
aPj(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPj=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DU)||e.q(0,D.Je)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DU)}w=6
return B.b(C.fNc(d,t),$async$aPj)
case 6:s=k
w=4
break
case 5:s=D.a6G
case 4:t=d.c
w=A.d.aW(t,new C.fpm())?7:9
break
case 7:r=$.hC2
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aPj)
case 10:q=k
p=q!=null?A.Y.az(q.ak(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hAh(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hVe(new C.asu(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("N<1,m>")
t=B.C(new B.N(m,new C.fpn(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k5<co.E,m>")
t=B.C(new B.k5(e,new C.fpo(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TI)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPj,v)},
heL(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aS(x.Q)
for(v=0;v<6;++v){u=D.a5q[v]
if(A.d.q(t,u.b))w.I(0,u)}return w},
ipU(d){return B.bT(A.L,null,new C.h0M(),d,!0,!0,!0,null,!1,!1,x.I)},
i1C(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cO.gcu().aM(d)},
ipT(d,e,f){return B.bT(A.L,null,new C.h0L(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
heM(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
heN(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fwI(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aW(e,new C.fwJ(w))?w:""},
hx6(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hC0(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ai1(a1==null?"":a1,a0),a3=C.ai1(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nv(new B.Y(r,new C.fSB(t[p]),q))
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
g=B.C(new B.Y(k,new C.fSC(),v),r)
A.d.aZ(g,new C.fSD())
if(g.length===0)continue
f=new C.fSE(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
im8(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aKG
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.edW
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.edX
return null},
hwJ(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.cJ(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ilT(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.F(a1,0,d-1)]],x.g)
w=a0.d===D.oK
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cX)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.F(m*0.85,10,120)
break
case 1:j=A.k.F(m*1.15,10,120)
if(C.hwJ(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hwJ(n,i,v,u))if(n.w>10){f=h+1
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
ilR(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ai1(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aS(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5q[r]
if(q.b===s)w.I(0,q)}}v=C.heM(e)
u=C.heN(e)
p=C.hAh(n,D.a6G,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("N<1,m>")
o=B.C(new B.N(o,new C.fSx(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k5<co.E,m>")
o=B.C(new B.k5(w,new C.fSy(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TI)
return p},
ipG(d,e,f){return B.bT(A.L,null,new C.h_Z(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i0Z(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.d_(t)
w=D.cLp[s.aw(10)]
v=new C.eoO(s)
u=x.N
return new C.eoN(w,s.aw(4),J.fq(v.$1$2(D.dc8,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dtH,2+s.aw(2),u),v.$1$2(D.dm9,2,u),v.$1$2(D.dwY,4,x.fP),t)},
i2D(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.d_(a5.w+a3*13)
w=new C.flH(a4)
v=new C.flJ(a4,d)
u=new C.flI(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cX){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.c4(a2,0,w.$8(D.eX,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a2H(a0,52),"lux_spot",a5.x9(0,"spotlight")))
else A.d.c4(a2,0,w.$8(D.bj,0,0,1,1,0,"lux_back",a5.x9(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c4(a2,1,w.$8(D.bj,0,0,1,1,0,"lux_back2",a5.aH2(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.022,0.038,0.956,0.924,0,g,a5.x9(0,f),D.dk,150,C.a2H(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.018,0.032,0.964,0.936,0,g,a5.x9(0,f),D.dk,120,C.a2H(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dk,260,C.a2H(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bj,0,0,1,1,0,"lux_filigree",a5.x9(0,"filigree"),D.dk,200))
break
default:a2.push(w.$10$anim$delay(D.bj,0.08,0.06,0.84,0.004,C.a2H(a0,208),"lux_rule",a5.aH2(0,"shimmer",r),D.vc,150))
a2.push(w.$10$anim$delay(D.bj,0.08,0.936,0.84,0.004,C.a2H(a0,144),"lux_rule2","",D.Jb,220))}l=!A.d.aW(a2,new C.flG())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.x9(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.x9(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2H(r,242)
j=a5.x9(0,"orbit")
i=s===D.bj?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qW,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eX,t-0.007,0.9495,0.014,0.025,C.a2H(r,242),"lux_g2",a5.x9(0,"orbit"),D.qW,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bj,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bj,0,0,1,1,0,"lux_velvet",a5.x9(0,"velvet")))},
o3:function o3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fSz:function fSz(d){this.a=d},
fSA:function fSA(){},
wp:function wp(d,e){this.a=d
this.b=e},
a8S:function a8S(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asu:function asu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fSs:function fSs(){},
fSv:function fSv(){},
fQq:function fQq(){},
fQr:function fQr(){},
fQs:function fQs(d){this.a=d},
fKP:function fKP(){},
fKS:function fKS(d,e,f){this.a=d
this.b=e
this.c=f},
fKR:function fKR(d,e){this.a=d
this.b=e},
fKQ:function fKQ(d,e){this.a=d
this.b=e},
fKO:function fKO(d){this.a=d},
fNf:function fNf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fNd:function fNd(d){this.a=d},
fNe:function fNe(d){this.a=d},
fpm:function fpm(){},
fpn:function fpn(){},
fpo:function fpo(){},
h0M:function h0M(){},
a1r:function a1r(d){this.a=d},
aIV:function aIV(d,e,f,g,h){var _=this
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
f8n:function f8n(d,e,f){this.a=d
this.b=e
this.c=f},
f8o:function f8o(d,e){this.a=d
this.b=e},
f8l:function f8l(d,e){this.a=d
this.b=e},
f8m:function f8m(d,e){this.a=d
this.b=e},
f8k:function f8k(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f8f:function f8f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8j:function f8j(d,e){this.a=d
this.b=e},
f8e:function f8e(d,e){this.a=d
this.b=e},
f8i:function f8i(d,e){this.a=d
this.b=e},
f8d:function f8d(d,e){this.a=d
this.b=e},
f8g:function f8g(d){this.a=d},
f8h:function f8h(d,e){this.a=d
this.b=e},
f83:function f83(d,e){this.a=d
this.b=e},
f84:function f84(d,e){this.a=d
this.b=e},
f86:function f86(d){this.a=d},
f87:function f87(d){this.a=d},
f88:function f88(d){this.a=d},
f89:function f89(d){this.a=d},
f85:function f85(d,e){this.a=d
this.b=e},
f8a:function f8a(d,e){this.a=d
this.b=e},
f8B:function f8B(d){this.a=d},
f8C:function f8C(d){this.a=d},
f8A:function f8A(d){this.a=d},
f8D:function f8D(d){this.a=d},
f8z:function f8z(d){this.a=d},
f8F:function f8F(d){this.a=d},
f8y:function f8y(d,e){this.a=d
this.b=e},
f8G:function f8G(d){this.a=d},
f8x:function f8x(d,e){this.a=d
this.b=e},
f8H:function f8H(d){this.a=d},
f8w:function f8w(d){this.a=d},
f8I:function f8I(d){this.a=d},
f8v:function f8v(d,e){this.a=d
this.b=e},
f8J:function f8J(d){this.a=d},
f8u:function f8u(d,e){this.a=d
this.b=e},
f8K:function f8K(d){this.a=d},
f8t:function f8t(d){this.a=d},
f8L:function f8L(d,e){this.a=d
this.b=e},
f8s:function f8s(d,e){this.a=d
this.b=e},
f8M:function f8M(d){this.a=d},
f8E:function f8E(d){this.a=d},
f8r:function f8r(d,e){this.a=d
this.b=e},
f8b:function f8b(d,e,f){this.a=d
this.b=e
this.c=f},
f8c:function f8c(d,e,f){this.a=d
this.b=e
this.c=f},
f8q:function f8q(d,e){this.a=d
this.b=e},
f8p:function f8p(d,e){this.a=d
this.b=e},
h0L:function h0L(d,e){this.a=d
this.b=e},
a1q:function a1q(d,e,f){this.c=d
this.d=e
this.a=f},
aIU:function aIU(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f7X:function f7X(d){this.a=d},
f7Y:function f7Y(d){this.a=d},
f7Z:function f7Z(d,e){this.a=d
this.b=e},
f8_:function f8_(d){this.a=d},
f80:function f80(d){this.a=d},
f7W:function f7W(d,e){this.a=d
this.b=e},
f81:function f81(d,e){this.a=d
this.b=e},
f82:function f82(d,e){this.a=d
this.b=e},
fwJ:function fwJ(d){this.a=d},
b30:function b30(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFs:function aFs(d,e,f){this.c=d
this.d=e
this.a=f},
bm9:function bm9(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
eoQ:function eoQ(d){this.a=d},
eoP:function eoP(){},
bjG:function bjG(d,e){this.b=d
this.a=e},
fSB:function fSB(d){this.a=d},
fSC:function fSC(){},
fSD:function fSD(){},
fSE:function fSE(d){this.a=d},
at1:function at1(d,e){this.a=d
this.b=e},
fSx:function fSx(){},
fSy:function fSy(){},
h_Z:function h_Z(d,e){this.a=d
this.b=e},
a_O:function a_O(d,e,f){this.c=d
this.d=e
this.a=f},
aCY:function aCY(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
ds3:function ds3(d){this.a=d},
ds4:function ds4(d){this.a=d},
ds5:function ds5(d,e){this.a=d
this.b=e},
ds8:function ds8(d){this.a=d},
ds9:function ds9(d,e){this.a=d
this.b=e},
ds7:function ds7(d,e){this.a=d
this.b=e},
dsa:function dsa(d){this.a=d},
ds6:function ds6(d,e){this.a=d
this.b=e},
buP:function buP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eoN:function eoN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eoO:function eoO(d){this.a=d},
flH:function flH(d){this.a=d},
flJ:function flJ(d,e){this.a=d
this.b=e},
flI:function flI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flG:function flG(){},
aNx:function aNx(){},
hdA(d){var w,v,u
try{w=A.Y.aS(0,d,null)
if(x.f.b(w)){v=B.wi(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b2X:function b2X(d,e,f){this.c=d
this.d=e
this.a=f},
bnK:function bnK(d,e){this.c=d
this.a=e},
ii8(d){return A.d.dO(D.Ik,new C.fLW(d),new C.fLX())},
ii9(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Ik,new C.fLY(w),x.b4)
if(!v.gag(0).C())return null
u=v.gH(0)
return new C.jW("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
ls:function ls(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fLW:function fLW(d){this.a=d},
fLX:function fLX(){},
fLY:function fLY(d){this.a=d},
n7(d,e,f,g,h){return new C.Fk(f,g,d)},
i3T(d){var w=d.z,v=B.T(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fnM(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.L8
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c4(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bk,!1,4279310375,A.aG,"",d,24,A.bq,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cp,D.fg,j,k,l)},
hA4(d,e){var w
C.i3T(d)
w=A.d.dO($.bGo(),new C.fJM(e),new C.fJN())
$.L8=w.a
d.x=w.a;++d.y
try{w.ai(d)}finally{$.L8=""}d.z=B.bo(d.z,!0,x.F)},
Fk:function Fk(d,e,f){this.a=d
this.b=e
this.e=f},
fnM:function fnM(){},
fS3:function fS3(){},
fS4:function fS4(){},
fS5:function fS5(){},
fSg:function fSg(){},
fSl:function fSl(){},
fSm:function fSm(){},
fSn:function fSn(){},
fSo:function fSo(){},
fSp:function fSp(){},
fSq:function fSq(){},
fSr:function fSr(){},
fS6:function fS6(){},
fS7:function fS7(){},
fS8:function fS8(){},
fS9:function fS9(){},
fSa:function fSa(){},
fSb:function fSb(){},
fSc:function fSc(){},
fSd:function fSd(){},
fSe:function fSe(){},
fSf:function fSf(){},
fSh:function fSh(){},
fSi:function fSi(){},
fSj:function fSj(){},
fSk:function fSk(){},
fJM:function fJM(d){this.a=d},
fJN:function fJN(){},
j3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bj,4280172719,2,m,n,0,"",o,D.cX,p,q,r)},
Dw(d,e,f,g,h,i,j,k,l){return C.er(A.bk,!1,4279310375,A.aG,"",d,24,A.bq,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cp,D.fg,j,k,l)},
bF9(){var w=new B.V(Date.now(),0,!1)
return A.iO[B.bK(w)-1]+" "+B.bV(w)+", "+B.bB(w)},
ev:function ev(d,e,f){this.a=d
this.b=e
this.c=f},
bCv(d){return new B.iY((A.o.aJ(d,24)&255)/255,(A.o.aJ(d,16)&255)/255,(A.o.aJ(d,8)&255)/255,(d&255)/255)},
i9g(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anY(A.cG.aM(A.d.gal(d.split(","))))
return w}catch(v){return null}},
i9k(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fw1(),x.dv).aO(0,"\n")},
i9j(d){switch(d.a){case 2:return A.nO
case 1:case 5:return A.fkE
default:return A.V5}},
i9d(d){switch(d.a){case 2:return A.vK
case 1:case 5:return A.X6
default:return A.ad2}},
i9h(d,e){var w,v=null,u=d.ay,t=A.o.aJ(u,24),s=A.o.aJ(d.ch,24),r=(t&255)===0?v:C.bCv(u),q=(s&255)===0?v:C.bCv(d.ch),p=A.k.F(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nN(q,p,A.l6)
w=new B.pV(t,t,t,t)}switch(d.ax.a){case 1:return B.lN(v,v,v,new B.kO(r,w,v,A.aem,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xv(B.lN(v,v,q,v,p+0.4,v,v,v))
default:return B.lN(v,v,v,new B.kO(r,w,B.vT(4),A.i_,v),v,v,v,v)}},
i9f(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fg?0.4:12,g=A.k.F(d.e*e,h,e),f=A.k.F(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i9d(d.as)
v=A.k.F(d.w*(e/960),3,96)
u=C.i9k(d)
t=C.bCv(d.Q)
s=d.x.a>=700?A.ez:A.wo
r=d.y===A.cF?A.yV:A.anE
q=d.z
p=new B.DI(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aU9:A.aU8,l,l,l,l,l,l,A.dz,l,l,v,r,s,l,!0,l,l,l,l),C.i9j(d.as)))
break
case 1:case 4:o=C.i9g(d.at)
n=i===D.lR&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xv(B.fc(w,l,l,l,B.ha(l,A.th,l,l,l,l,l,l,l,A.dz,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IC(o,n?A.aei:A.Xu,l,l)
break
case 3:w=new B.nN(A.Jy,1,A.l6)
u=B.vT(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lN(A.vK,B.fc(t,l,l,l,B.ha(l,D.esn,l,l,l,l,l,l,l,A.dz,l,l,11,l,A.ez,l,!0,l,l,l,l),A.nO),l,new B.kO(E.aM7,new B.pV(w,w,w,w),u,A.i_,l),l,l,l,l)
break
case 2:p=C.i9h(d,e)
break
case 5:p=C.i9e(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hrs(-w,p)
w=i===D.cX
if(w){m=A.o.aJ(d.Q,24)&255
if(m<255)p=new B.atR(m/255,p)}if(w)return new F.wu(k,l,j,l,new B.Tj(new B.kN(g,g,f,1/0),p))
if(i===D.lq){i=new B.nN(A.Jy,1,A.l6)
i=B.lN(A.vK,p,l,new B.kO(A.pE,new B.pV(i,i,i,i),B.vT(4),A.i_,l),l,l,D.bFN,l)}else i=p
return new F.wu(k,l,j,l,new B.fV(g,f,i))},
i9i(d,e,f,g){var w,v=null,u=C.bCv(d.e),t=d.f
t=B.a([F.hq2(t!=null?B.lN(v,v,v,new B.kO(v,v,v,A.i_,new B.aYt(E.X8,A.acX,B.a([u,C.bCv(t)],x.cR),v)),v,v,v,v):B.lN(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fw0(f,g),B.T(w).k("N<1,fi>")))
return F.czu(t)},
heP(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$heP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a55(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.Xy(A.x1,A.Jv,D.bH0,null,null,null,!1,null)
o=new B.Cl(o,new C.fSK(607,787,p,d))
o.Ne(n,null)
r.push(o)}u=n.jG(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$heP,v)},
i9e(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hdA(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gakY()
if(h==null)h=A.aBr
j=B.tV(4279308564)
w=B.vT(18)
v=new B.nN(B.tV(4287531653),3,A.l6)
u=i.length===0?"My links":i
u=B.a([B.xv(B.fc(u,m,m,m,B.ha(m,A.pE,m,m,m,m,m,m,m,A.dz,m,m,12,m,A.ez,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xv(B.fc(A.a.i(l.c),m,m,m,D.fsi,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bO(t,t.gJ(0),s.k("bO<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tV(4280690220)
o=new B.aac(8,8)
n=A.a.i(r.b)
u.push(new B.o4(D.bzS,new C.ayc(new C.aj9(q),B.lN(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fuH,A.nO),m,new B.kO(p,m,new B.ajC(o,o,o,o),A.i_,m),m,m,D.bGf,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xv(B.fc(k,m,m,m,D.ftV,m))
u.push(new C.ayc(C.hJ4(k),t))}return B.lN(m,B.zm(u,A.Nt,A.lQ),m,new B.kO(j,new B.pV(v,v,v,v),w,A.i_,m),m,m,D.bAJ,m)},
fw1:function fw1(){},
fw0:function fw0(d,e){this.a=d
this.b=e},
fSK:function fSK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahP(d){var w,v
for(w=0;w<32;++w){v=D.Ib[w]
if(v.a===d)return v}return null},
hu2(d){var w,v,u=A.a.cp(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aM(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hDi(d,e){return B.a6(d,!1).cd(B.eb(new C.fZo(e),!0,null,x.fB))},
hDh(d,e){return B.bT(A.L,null,new C.fZn(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j8:function j8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fb:function Fb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ob:function Ob(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blv:function blv(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.aa$=f
_.c=_.a=null},
e2o:function e2o(d){this.a=d},
e2n:function e2n(d,e,f){this.a=d
this.b=e
this.c=f},
e2m:function e2m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btl:function btl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f79:function f79(d,e){this.a=d
this.b=e},
bgt:function bgt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0R:function b0R(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceA:function ceA(){},
ceB:function ceB(d){this.a=d},
ceC:function ceC(d,e,f){this.a=d
this.b=e
this.c=f},
ceD:function ceD(d,e,f){this.a=d
this.b=e
this.c=f},
fZo:function fZo(d){this.a=d},
a_l:function a_l(d,e){this.c=d
this.a=e},
aBk:function aBk(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dhh:function dhh(d,e,f){this.a=d
this.b=e
this.c=f},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d){this.a=d},
dhl:function dhl(d){this.a=d},
dho:function dho(d){this.a=d},
dhk:function dhk(d,e){this.a=d
this.b=e},
dhp:function dhp(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhi:function dhi(d,e){this.a=d
this.b=e},
dhr:function dhr(d,e){this.a=d
this.b=e},
fZn:function fZn(d){this.a=d},
fZm:function fZm(d){this.a=d},
fZl:function fZl(d,e,f){this.a=d
this.b=e
this.c=f},
fZk:function fZk(d,e){this.a=d
this.b=e},
aN1:function aN1(){},
ipS(d){return B.bT(A.L,null,new C.h0K(),d,!0,!0,!0,null,!1,!1,x.N)},
h0K:function h0K(){},
a_G:function a_G(d){this.a=d},
bi_:function bi_(d){this.d=d
this.c=this.a=null},
do5:function do5(d){this.a=d},
do6:function do6(d,e){this.a=d
this.b=e},
do7:function do7(d){this.a=d},
i5u(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.yk},
ik3(d){var w=7000
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
ik2(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i5u(d)
switch(q){case"shimmer":return B.o8(A.LE,g,new C.fPn(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bhk(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.ed(A.A,B.da(F.bWI(g,new B.Ej(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.q(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bh1(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.F(0.55+s*0.45,0,1)
return B.da(B.eK(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fK(e)
u.mZ(Math.sin(e)*0.3)
return B.dO(B.fw(A.A,g,r,u,!0),new B.q(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b4,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bq5(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b4,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbR(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b4,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbu(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bxb(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bu9(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bth(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bgm(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ac,A.f,B.a([B.bR(0,new B.dx(!0,B.ed(A.A,B.c3(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bi),1.6+s*0.15,r,r),r),0,0,0),B.eK(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fPn:function fPn(d,e){this.a=d
this.b=e},
bhk:function bhk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bh1:function bh1(d,e,f){this.b=d
this.c=e
this.a=f},
bq5:function bq5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbR:function bbR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbu:function bbu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxb:function bxb(d,e,f){this.b=d
this.c=e
this.a=f},
bu9:function bu9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bth:function bth(d,e,f){this.b=d
this.c=e
this.a=f},
bgm:function bgm(d,e,f){this.b=d
this.d=e
this.a=f},
dgZ:function dgZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
y5:function y5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fPq(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lq},
ik8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fPr())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aS2(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ik7(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d0(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d0(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.F(s,0.06,u)}else{d.w=A.k.F((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.F(r*(d.w*0.001)+0.028,0.06,u)},
ahs(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahs=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fHN(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dR,null,new C.fHO(e),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahs)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hfw(d),$async$ahs)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LW(d,"Search states\u2026","",A.kv,"Choose state"),$async$ahs)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hem(s)
if(p==null)p=A.d.gH(D.Sz)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fPs(p.d)
k=x.u
j=B.a([C.er(A.bk,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cp,D.lR,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Di(i,0.016,D.lr,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Di(0,0.058,D.eX,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Di(0,0.058,D.eX,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lj("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lj("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hb6(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bBZ("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2j("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2j("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2j("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2j("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bBZ("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Di(m,0.082,D.bj,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bk,!1,i,A.aG,"marriage_field_utangulizi:"+A.k.ad(0.78,3),4280640491,9.5,A.bq,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bj,4280172719,2,y.O,0,0,"",D.cp,D.cX,0.78,0.11,0.388))
A.d.v(k,C.hb6(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bBZ("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hw8("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hw8("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2j("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2j("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bBY("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bBY("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bBZ("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lj("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lj("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bBY("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bBY("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bBZ("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2j("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bBY("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2j("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hb6(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lj("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lj("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cg(null,null,null,null,D.oK,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rT(m,null,0,0,j,n,D.qV,"","","Hati ya Ndoa",D.dk)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahs,v)},
fPr:function fPr(){},
fHN:function fHN(){},
fHO:function fHO(d){this.a=d},
fHL:function fHL(d){this.a=d},
fHM:function fHM(d){this.a=d},
i8F(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i8E(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.n7
case"lineThrough":return A.xa
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eN(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hyc(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Si[w]
if(v.b===u)return v}return D.dk},
i4R(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d2L[w]
if(v.b===u)return v}return D.cX},
ibv(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.duq[w]
if(v.b===u)return v}return D.bj},
rT(d,e,f,g,h,i,j,k,l,m,n){return new C.lY(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hoQ(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i6X(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.M(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.M(s)
r=C.hyc(d.h(0,"transition"))
q=B.aK(d.h(0,"durationSeconds"))
q=q==null?m:A.k.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aK(d.h(0,"designRevision"))
o=o==null?m:A.k.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dd(n,x.f)
n=B.cE(n,new C.ck6(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rT(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i6X(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.at0[w]
if(v.b===u)return v}return D.n1},
Cg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rT(4294967295,null,0,0,null,C.cD(),D.qV,"","","",D.dk)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
WW(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i2U(a6.h(0,"aspectRatio"))
t=B.aK(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.F(A.k.M(t),1,120)
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
o=C.kJ(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kJ(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aK(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aK(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b7(f,new C.cjU(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cjV(),x.N)
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
else{g=J.dd(g,x.f)
g=B.cE(g,new C.cjW(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cg(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rT(4294967295,a3,0,0,a3,C.cD(),D.qV,"","","",D.dk)],x.g):g,v,p,o,s)},
kJ(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i2U(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dvj[w]
if(v.b===u)return v}return D.DR},
cD(){var w=Date.now(),v=$.j9
$.j9=v+1
return""+1000*w+"_"+v},
ckn(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.DS){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bq,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cp,D.cX,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bq,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bj,m,2,"Click to add subtitle",0,0,"",D.cp,D.cX,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,32,A.bq,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cp,D.cX,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!0,f.e.l(),A.aG,"",n,20,A.bq,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bj,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cp,D.cX,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Two Column Slide",0,0,"",D.cp,D.cX,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bk,!0,t.l(),A.aG,"",n,18,A.bq,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bj,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cp,D.cX,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bk,!0,t.l(),A.aG,"",n,18,A.bq,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bj,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cp,D.cX,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.I(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bq,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bj,m,2,"Section Header",0,0,"",D.cp,D.cX,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Compare",0,0,"",D.cp,D.cX,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bk,!1,l,A.aG,"",t.j(0.12).l(),24,A.bq,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bj,t.l(),2,"",0,0,"",D.cp,D.fg,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bk,!1,r.l(),A.aG,"",n,20,A.bq,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bj,m,2,"Option A",0,0,"",D.cp,D.cX,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bk,!1,l,A.aG,"",t.j(0.06).l(),24,A.bq,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bj,t.j(0.5).l(),2,"",0,0,"",D.cp,D.fg,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bk,!1,r.l(),A.aG,"",n,20,A.bq,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bj,m,2,"Option B",0,0,"",D.cp,D.cX,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bq,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bj,m,2,"TERM / QUESTION",0,0,"",D.cp,D.cX,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bq,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bj,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cp,D.cX,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,28,A.bq,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bj,m,2,"Quiz Question",0,0,"",D.cp,D.cX,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!1,f.e.l(),A.aG,"",n,20,A.bq,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bj,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cp,D.cX,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,26,A.bq,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bj,m,2,"Worksheet / Assignment",0,0,"",D.cp,D.cX,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!1,f.e.l(),A.aG,"",n,18,A.bq,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bj,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cp,D.cX,0.88,0.06,0.16)],x.u))
break}},
hVo(d){return A.d.dO(D.a52,new C.cko(d),new C.ckp())},
hVl(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aS(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aX(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c8(v,C.WW(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h7n(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.ckj(t)
for(w=J.aX(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.cki())
return u},
hoT(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cke()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asv(d){return C.hVj(d)},
hVj(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ckh()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3t(m),$async$asv)
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
return B.b(B.az(),$async$asv)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hoS.h(0,m))
n=C.h7n(C.h7n(j,r),o)
if(n.length===0){u=C.hoT(C.hoT(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asv,v)},
ckd(d){return C.hVi(d)},
hVi(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckd=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ckd)
case 7:r=f
q=r.tP("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jw(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aS(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ckd,v)},
b32(d,e){return C.hVk(d,e)},
hVk(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b32=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b32)
case 6:s=g
q=s.tP("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.I(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.M3(r,J.ad(r)-500):r
w=7
return B.b(s.aB("StringList","ngmy_slides_deleted_"+p,o),$async$b32)
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
return B.i($async$b32,v)},
WX(d,e){return C.hVm(d,e)},
hVm(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$WX=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hoR.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asv(a3),$async$WX)
case 5:p=a6
case 4:w=6
return B.b(C.ckd(a3),$async$WX)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aX(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbs())k=f===g.gbs()&&k.b>g.gcD()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.ckk(o),l),l.k("M.E"))
A.d.aZ(e,new C.ckl())
$.hoR.n(0,a0,e)
n=B.T(e).k("N<1,a8<m,@>>")
n=B.C(new B.N(e,new C.ckm(),n),n.k("ak.E"))
r=A.Y.az(n,null)
$.hoS.n(0,a0,r)
t=8
w=11
return B.b(B.aig(a0,r),$async$WX)
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
return B.b(B.az(),$async$WX)
case 16:q=a6
w=17
return B.b(q.aB("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$WX)
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
return B.i($async$WX,v)},
Jw:function Jw(d,e){this.a=d
this.b=e},
ast:function ast(d,e){this.a=d
this.b=e},
v7:function v7(d,e){this.a=d
this.b=e},
mP:function mP(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eN:function eN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lY:function lY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ck7:function ck7(){},
ck8:function ck8(){},
ck6:function ck6(){},
i3:function i3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cjX:function cjX(){},
cjY:function cjY(){},
cjU:function cjU(){},
cjV:function cjV(){},
cjW:function cjW(){},
jW:function jW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cko:function cko(d){this.a=d},
ckp:function ckp(){},
ckj:function ckj(d){this.a=d},
cki:function cki(){},
cke:function cke(){},
ckf:function ckf(){},
ckg:function ckg(){},
ckh:function ckh(){},
ckk:function ckk(d){this.a=d},
ckl:function ckl(){},
ckm:function ckm(){},
ikj(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fQ_(e,v,d,B.aS(w))
w.$1(new C.fPW())
w.$1(new C.fPX())
w.$1(new C.fPY())
w.$1(new C.fPZ())
return v},
fQ_:function fQ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPW:function fPW(){},
fPX:function fPX(){},
fPY:function fPY(){},
fPZ:function fPZ(){},
b3_:function b3_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ck2:function ck2(d){this.a=d},
ck1:function ck1(){},
ck3:function ck3(){},
ck4:function ck4(d,e){this.a=d
this.b=e},
ck5:function ck5(d){this.a=d},
apv:function apv(d,e){this.c=d
this.a=e},
blf:function blf(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
dPx:function dPx(){},
aMN:function aMN(){},
cka(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cka=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fhQ)
u=!1
w=1
break}u=B.la(!1,d,t,!1,null,A.a7N,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cka,v)},
hVg(d){var w=A.d.bj(D.Ik,new C.ckb(d))
if(w<0)return!0
return w>=4},
hVh(d){var w=A.d.bj($.bGo(),new C.ckc(d))
if(w<0)return!0
return w>=5},
ckb:function ckb(d){this.a=d},
ckc:function ckc(d){this.a=d},
im2(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xj()
$.pQ().p9(t,new C.fSR(s),!0)
u=B.a([B.BQ(v,A.pF,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ap(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fsL,v,v,v),A.f,v,v,new B.o(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.mR,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b4,A.t,u,v)},
fSR:function fSR(d){this.a=d},
ilE(){return C.heI()},
iix(){return C.bEn()},
ikC(){return C.hez()},
aR3(d,e,f){var w=0,v=B.j(x.H),u
var $async$aR3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fRX(d,f),$async$aR3)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aR3,v)},
fRX(d,e){var w=0,v=B.j(x.H),u
var $async$fRX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCw
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fRY(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fRX)
case 2:return B.h(null,v)}})
return B.i($async$fRX,v)},
fRY:function fRY(d,e){this.a=d
this.b=e},
aeh:function aeh(d,e,f){this.c=d
this.d=e
this.a=f},
eB9:function eB9(d,e){this.a=d
this.b=e},
eBa:function eBa(d,e){this.a=d
this.b=e},
eBb:function eBb(d,e){this.a=d
this.b=e},
eBc:function eBc(d){this.a=d},
aey:function aey(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b2Z(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b2Y(g,m,f,d,e,h,l,k,j,o,i,null)},
hBp(d){return B.cr(new C.fPV(d))},
heK(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ilM(d){if(d===D.cp)return"None"
return C.heK(d)},
bD1(d,e,f,g){return C.ibC(d,e,f,g)},
ibC(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bD1=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hbp&&t.pV())t.eO()
$.hbp=!0
s.a=null
w=3
return B.b(B.hZ(A.bl,!0,"Animation preview",d,new C.fyL(s,e,g,f),null,A.eJ,!0,x.H),$async$bD1)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hbp=!1
case 1:return B.h(u,v)}})
return B.i($async$bD1,v)},
h1y(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h1y=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.F(B.aH(d,A.c_,x.w).w.a.a*0.88,280,440)
s=f===D.cp
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.heK(f)+" Slide transition preview"
s=s?Ah.GA:A.uj
w=3
return B.b(C.bD1(d,s,new B.a5(t,t*0.56,B.bx(B.n(14),new C.aKj(f,null),A.aq),null),r),$async$h1y)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h1y,v)},
hAH(d,e,f){var w,v,u=null,t=A.cw.aE(0,A.k.F(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dO(B.da(f,t),new B.q((1-t)*48,0))
case 3:return B.dO(B.da(f,t),new B.q(-(1-t)*48,0))
case 4:case 21:return B.dO(B.da(f,t),new B.q(0,(1-t)*36))
case 5:return B.dO(B.da(f,t),new B.q(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.da(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.da(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fK((1-t)*1.2)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kl((1-t)*1.2)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mZ((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dO(B.da(f,t),new B.q((1-t)*24,0))}},
bFT(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bFT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.F(B.aH(d,A.c_,x.w).w.a.a*0.88,300,440)
s=f===D.cp
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.heK(f)+" Element animation preview"
s=s?Ah.GA:A.uj
w=3
return B.b(C.bD1(d,s,new B.a5(t,t*0.62,B.bx(B.n(14),new C.aB_(f,null),A.aq),null),r),$async$bFT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bFT,v)},
ilL(d){var w,v,u,t,s=$.agV.W(0,d)
if(s!=null){$.agV.n(0,d,s)
return s}w=A.cG.aM(A.a.b2(d,A.a.cp(d,",")+1))
$.agV.n(0,d,w)
v=$.hcg=$.hcg+w.length
u=B.a4($.agV).k("cx<1>")
for(;;){if(!(v>41943040&&$.agV.a>1))break
t=new B.cx($.agV,u).gag(0)
if(!t.C())B.bi(B.fp())
v-=$.agV.W(0,t.gR(0)).length
$.hcg=v}return w},
ilq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aA(d,r,o)
m=f.$1(e)
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Tv(s,A.u))
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Tv(t,A.u))
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Tv(u,A.cC))
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3s(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aE($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.jN(e))
return m
case"rounded":m=new B.aE($.S().r,A.ah,n,n,B.a([],m))
w=e.gdz()*0.18
m.D(new B.iU(B.br(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aE($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.aY(e.gbK().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bt())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aE(w.r,A.ah,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aY(p,o)
m.push(p)
o=v.f
if(o!=null)p.ai(o)
v.a8()}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.ai(o)
v.a8()}}v.D(new B.bt())
return v
case"diamond":m=new B.aE($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.aY(e.gbK().a,e.b))
m.D(new B.aq(e.c,e.gbK().b))
m.D(new B.aq(e.gbK().a,e.d))
m.D(new B.aq(e.a,e.gbK().b))
m.D(new B.bt())
return m
case"arch":m=new B.aE($.S().r,A.ah,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aY(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bd4(new B.q(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bt())
return m
default:m=new B.aE($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.or(e))
return m}},
fNu(d,e,f){return B.cr(new C.fNv(D.fa_.q(0,d),d,f,e))},
b2Y:function b2Y(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ck0:function ck0(d){this.a=d},
ck_:function ck_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjZ:function cjZ(){},
b2V:function b2V(d,e){this.b=d
this.a=e},
fPV:function fPV(d){this.a=d},
fPU:function fPU(d,e){this.a=d
this.b=e},
fyL:function fyL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyJ:function fyJ(d){this.a=d},
fyK:function fyK(d,e){this.a=d
this.b=e},
aKj:function aKj(d,e){this.c=d
this.a=e},
bwG:function bwG(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
ffJ:function ffJ(d,e,f){this.a=d
this.b=e
this.c=f},
aL0:function aL0(d,e){this.b=d
this.a=e},
W3:function W3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blr:function blr(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
e07:function e07(d){this.a=d},
e06:function e06(d){this.a=d},
e05:function e05(d){this.a=d},
Jv:function Jv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cjT:function cjT(d){this.a=d},
cjS:function cjS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB_:function aB_(d,e){this.c=d
this.a=e},
bfN:function bfN(){this.d=0
this.c=this.a=null},
dec:function dec(d){this.a=d},
deb:function deb(d){this.a=d},
a8A:function a8A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm7:function bm7(d,e){var _=this
_.d=null
_.bx$=d
_.aa$=e
_.c=_.a=null},
eow:function eow(d,e,f){this.a=d
this.b=e
this.c=f},
b0U:function b0U(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bh_:function bh_(d,e,f){this.b=d
this.c=e
this.a=f},
bsb:function bsb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f4E:function f4E(){},
fNv:function fNv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bte:function bte(d,e,f){this.b=d
this.c=e
this.a=f},
aN0:function aN0(){},
aNv:function aNv(){},
aOP:function aOP(){},
fQW(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fQW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xH.co().MD(D.dsj,A.uy,!0),$async$fQW)
case 3:r=e
if(r==null||J.cq(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ilk(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQW,v)},
ilk(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a8T(d,new B.a13(A.cO.gcu().aM(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.idl(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8T(d,null,w.length>6e4?A.a.aA(w,0,6e4):w)}w=A.c9.Ln(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8T(d,null,w.length>6e4?A.a.aA(w,0,6e4):w)},
idl(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cFV().cPR(B.rD(d,A.io,o,o),o,o,!1).cRM(0,"word/document.xml")
if(n==null)return""
w=n.cZV()
v=A.c9.Ln(0,w==null?$.hDO():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fBN(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8T:function a8T(d,e,f){this.a=d
this.b=e
this.c=f},
fBN:function fBN(){},
hVn(d,e,f,g,h,i,j,k,l){return new C.OF(l,e,d,g,f,i,h,j,k,null)},
OF:function OF(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFS:function aFS(d,e,f,g,h,i,j,k,l){var _=this
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
_.aa$=l
_.c=_.a=null},
eHn:function eHn(d){this.a=d},
eHl:function eHl(){},
eHm:function eHm(d){this.a=d},
eDL:function eDL(){},
eDM:function eDM(){},
eDN:function eDN(d,e){this.a=d
this.b=e},
eFl:function eFl(d){this.a=d},
eF9:function eF9(){},
eFa:function eFa(){},
eD8:function eD8(){},
eGt:function eGt(d){this.a=d},
eHj:function eHj(d,e){this.a=d
this.b=e},
eFj:function eFj(d,e){this.a=d
this.b=e},
eH6:function eH6(d){this.a=d},
eH7:function eH7(){},
eH8:function eH8(){},
eH9:function eH9(d){this.a=d},
eHa:function eHa(){},
eCx:function eCx(d){this.a=d},
eHk:function eHk(){},
eEs:function eEs(d,e){this.a=d
this.b=e},
eCv:function eCv(d){this.a=d},
eCw:function eCw(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d,e,f){this.a=d
this.b=e
this.c=f},
eER:function eER(d){this.a=d},
eEr:function eEr(){},
eEq:function eEq(d){this.a=d},
eEo:function eEo(){},
eEn:function eEn(d){this.a=d},
eEp:function eEp(){},
eDH:function eDH(d){this.a=d},
eDI:function eDI(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEt:function eEt(d){this.a=d},
eEu:function eEu(d){this.a=d},
eEv:function eEv(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEz:function eEz(d,e){this.a=d
this.b=e},
eCz:function eCz(){},
eCA:function eCA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEK:function eEK(){},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEI:function eEI(d,e,f){this.a=d
this.b=e
this.c=f},
eEJ:function eEJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEC:function eEC(d,e,f){this.a=d
this.b=e
this.c=f},
eED:function eED(d,e,f){this.a=d
this.b=e
this.c=f},
eEE:function eEE(d){this.a=d},
eEF:function eEF(d,e){this.a=d
this.b=e},
eEG:function eEG(d,e){this.a=d
this.b=e},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEN:function eEN(d){this.a=d},
eEO:function eEO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEM:function eEM(d){this.a=d},
eF4:function eF4(){},
eF5:function eF5(){},
eF6:function eF6(){},
eF7:function eF7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF1:function eF1(d){this.a=d},
eF3:function eF3(){},
eF2:function eF2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eF_:function eF_(d,e,f){this.a=d
this.b=e
this.c=f},
eF0:function eF0(d,e){this.a=d
this.b=e},
eF8:function eF8(){},
eEA:function eEA(d,e){this.a=d
this.b=e},
eCQ:function eCQ(){},
eCR:function eCR(d,e,f){this.a=d
this.b=e
this.c=f},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCP:function eCP(d){this.a=d},
eFe:function eFe(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFb:function eFb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFf:function eFf(d,e){this.a=d
this.b=e},
eBu:function eBu(d,e){this.a=d
this.b=e},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eFn:function eFn(d,e,f){this.a=d
this.b=e
this.c=f},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCH:function eCH(d){this.a=d},
eFm:function eFm(d,e,f){this.a=d
this.b=e
this.c=f},
eCy:function eCy(d){this.a=d},
eD9:function eD9(){},
eH4:function eH4(d,e){this.a=d
this.b=e},
eH5:function eH5(d,e,f){this.a=d
this.b=e
this.c=f},
eGu:function eGu(d,e,f){this.a=d
this.b=e
this.c=f},
eBv:function eBv(d){this.a=d},
eBs:function eBs(d,e){this.a=d
this.b=e},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBf:function eBf(d){this.a=d},
eBe:function eBe(d,e){this.a=d
this.b=e},
eBg:function eBg(d,e){this.a=d
this.b=e},
eCK:function eCK(d){this.a=d},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d){this.a=d},
eBX:function eBX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eBY:function eBY(d,e){this.a=d
this.b=e},
eC1:function eC1(d,e){this.a=d
this.b=e},
eC2:function eC2(d){this.a=d},
eC_:function eC_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eC0:function eC0(d){this.a=d},
eBZ:function eBZ(){},
eBW:function eBW(d,e,f){this.a=d
this.b=e
this.c=f},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d,e,f){this.a=d
this.b=e
this.c=f},
eHc:function eHc(d){this.a=d},
eGK:function eGK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGJ:function eGJ(d,e,f){this.a=d
this.b=e
this.c=f},
eGI:function eGI(){},
eGH:function eGH(d,e,f){this.a=d
this.b=e
this.c=f},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGD:function eGD(d,e,f){this.a=d
this.b=e
this.c=f},
eGB:function eGB(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGF:function eGF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGE:function eGE(d){this.a=d},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDC:function eDC(d,e){this.a=d
this.b=e},
eGv:function eGv(){},
eH3:function eH3(d,e){this.a=d
this.b=e},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBl:function eBl(d){this.a=d},
eBm:function eBm(d){this.a=d},
eBo:function eBo(d,e){this.a=d
this.b=e},
eBp:function eBp(d,e,f){this.a=d
this.b=e
this.c=f},
eBt:function eBt(d,e){this.a=d
this.b=e},
eBk:function eBk(d,e,f){this.a=d
this.b=e
this.c=f},
eBj:function eBj(d){this.a=d},
eFk:function eFk(d,e,f){this.a=d
this.b=e
this.c=f},
eHb:function eHb(d,e,f){this.a=d
this.b=e
this.c=f},
eDG:function eDG(d,e,f){this.a=d
this.b=e
this.c=f},
eDF:function eDF(){},
eC5:function eC5(d,e,f){this.a=d
this.b=e
this.c=f},
eC6:function eC6(d){this.a=d},
eBh:function eBh(d,e){this.a=d
this.b=e},
eD7:function eD7(d,e){this.a=d
this.b=e},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBz:function eBz(d){this.a=d},
eBA:function eBA(d,e){this.a=d
this.b=e},
eBB:function eBB(d,e){this.a=d
this.b=e},
eBy:function eBy(d){this.a=d},
eBM:function eBM(d,e){this.a=d
this.b=e},
eBx:function eBx(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBS:function eBS(d){this.a=d},
eBT:function eBT(d){this.a=d},
eBU:function eBU(){},
eBV:function eBV(){},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBF:function eBF(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eBK:function eBK(d){this.a=d},
eBL:function eBL(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBO:function eBO(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e,f){this.a=d
this.b=e
this.c=f},
eD5:function eD5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eD4:function eD4(d,e,f){this.a=d
this.b=e
this.c=f},
eD3:function eD3(d,e){this.a=d
this.b=e},
eBr:function eBr(d,e){this.a=d
this.b=e},
eC9:function eC9(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC7:function eC7(d,e){this.a=d
this.b=e},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d,e){this.a=d
this.b=e},
eCN:function eCN(d){this.a=d},
eEY:function eEY(d,e){this.a=d
this.b=e},
eEX:function eEX(d,e){this.a=d
this.b=e},
eEW:function eEW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEU:function eEU(d){this.a=d},
eEV:function eEV(d,e){this.a=d
this.b=e},
eES:function eES(){},
eET:function eET(){},
eGw:function eGw(){},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGy:function eGy(){},
eGz:function eGz(d){this.a=d},
eGA:function eGA(d,e){this.a=d
this.b=e},
eBw:function eBw(d,e){this.a=d
this.b=e},
eCB:function eCB(){},
eCC:function eCC(){},
eCD:function eCD(){},
eCG:function eCG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCF:function eCF(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e,f){this.a=d
this.b=e
this.c=f},
eE6:function eE6(d){this.a=d},
eE5:function eE5(){},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE4:function eE4(d){this.a=d},
eE9:function eE9(d,e){this.a=d
this.b=e},
eE3:function eE3(d){this.a=d},
eEa:function eEa(d,e){this.a=d
this.b=e},
eE2:function eE2(d){this.a=d},
eEb:function eEb(d,e){this.a=d
this.b=e},
eE1:function eE1(d){this.a=d},
eEc:function eEc(d,e){this.a=d
this.b=e},
eE0:function eE0(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d){this.a=d},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDT:function eDT(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d){this.a=d},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDP:function eDP(d){this.a=d},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDO:function eDO(d){this.a=d},
eDY:function eDY(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD2:function eD2(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCU:function eCU(d,e){this.a=d
this.b=e},
eCW:function eCW(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eD1:function eD1(d){this.a=d},
eHh:function eHh(d){this.a=d},
eHi:function eHi(d){this.a=d},
eEh:function eEh(d,e){this.a=d
this.b=e},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEf:function eEf(d,e){this.a=d
this.b=e},
eEi:function eEi(d){this.a=d},
eEj:function eEj(d){this.a=d},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFH:function eFH(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFT:function eFT(d){this.a=d},
eG3:function eG3(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFP:function eFP(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eFR:function eFR(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFU:function eFU(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG_:function eG_(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG1:function eG1(d){this.a=d},
eFw:function eFw(d){this.a=d},
eG2:function eG2(d){this.a=d},
eFE:function eFE(d){this.a=d},
eG4:function eG4(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e){this.a=d
this.b=e},
eG6:function eG6(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e,f){this.a=d
this.b=e
this.c=f},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGr:function eGr(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e,f){this.a=d
this.b=e
this.c=f},
eFB:function eFB(d,e,f){this.a=d
this.b=e
this.c=f},
eFr:function eFr(d,e,f){this.a=d
this.b=e
this.c=f},
eFp:function eFp(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eFz:function eFz(d){this.a=d},
eGa:function eGa(d){this.a=d},
eGb:function eGb(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d){this.a=d},
eFy:function eFy(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGh:function eGh(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eGi:function eGi(d,e){this.a=d
this.b=e},
eFv:function eFv(d){this.a=d},
eGj:function eGj(d,e){this.a=d
this.b=e},
eFu:function eFu(d){this.a=d},
eGk:function eGk(d,e){this.a=d
this.b=e},
eFt:function eFt(d){this.a=d},
eC4:function eC4(d,e,f){this.a=d
this.b=e
this.c=f},
eC3:function eC3(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDb:function eDb(d){this.a=d},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDa:function eDa(d){this.a=d},
eDK:function eDK(){},
eDJ:function eDJ(){},
eH_:function eH_(d){this.a=d},
eGZ:function eGZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGY:function eGY(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e){this.a=d
this.b=e},
eGX:function eGX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGP:function eGP(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGV:function eGV(d,e){this.a=d
this.b=e},
eGW:function eGW(d,e){this.a=d
this.b=e},
eH0:function eH0(d){this.a=d},
eCu:function eCu(d){this.a=d},
eCt:function eCt(d,e,f){this.a=d
this.b=e
this.c=f},
eCs:function eCs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCh:function eCh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCi:function eCi(d,e){this.a=d
this.b=e},
eCj:function eCj(d,e){this.a=d
this.b=e},
eCk:function eCk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCg:function eCg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCn:function eCn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCm:function eCm(d,e){this.a=d
this.b=e},
eCo:function eCo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCf:function eCf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCe:function eCe(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCd:function eCd(d){this.a=d},
eCr:function eCr(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
eEk:function eEk(d){this.a=d},
eEm:function eEm(d,e){this.a=d
this.b=e},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDu:function eDu(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDw:function eDw(d,e,f){this.a=d
this.b=e
this.c=f},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDx:function eDx(d,e,f){this.a=d
this.b=e
this.c=f},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDi:function eDi(d,e,f){this.a=d
this.b=e
this.c=f},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDg:function eDg(d,e,f){this.a=d
this.b=e
this.c=f},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBd:function eBd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFg:function eFg(d){this.a=d},
eFh:function eFh(d,e){this.a=d
this.b=e},
ag3:function ag3(d,e,f){this.a=d
this.b=e
this.c=f},
aAm:function aAm(d,e){this.c=d
this.a=e},
bez:function bez(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
d9I:function d9I(d){this.a=d},
d9H:function d9H(d){this.a=d},
beO:function beO(d,e){this.c=d
this.a=e},
da5:function da5(d){this.a=d},
da6:function da6(d){this.a=d},
Kx:function Kx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bey:function bey(){this.d=!1
this.c=this.a=null},
d9F:function d9F(d){this.a=d},
d9B:function d9B(d){this.a=d},
d9G:function d9G(d){this.a=d},
d9A:function d9A(d){this.a=d},
d9E:function d9E(d){this.a=d},
d9C:function d9C(d){this.a=d},
d9D:function d9D(d,e){this.a=d
this.b=e},
Qo:function Qo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0x:function a0x(d,e,f){this.c=d
this.d=e
this.a=f},
aFV:function aFV(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bx$=e
_.aa$=f
_.c=_.a=null},
eHY:function eHY(){},
eHO:function eHO(d){this.a=d},
eHX:function eHX(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d,e,f){this.a=d
this.b=e
this.c=f},
eHV:function eHV(){},
eHW:function eHW(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHZ:function eHZ(d,e,f){this.a=d
this.b=e
this.c=f},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI_:function eI_(d){this.a=d},
KD:function KD(d,e){this.c=d
this.a=e},
btK:function btK(d,e){this.b=d
this.a=e},
bjz:function bjz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjy:function bjy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLI:function aLI(){},
aNI:function aNI(){},
bzy:function bzy(){},
aNJ:function aNJ(){},
fSS(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fSS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xH.co().MD(B.a(["pdf"],x.s),A.uy,!0),$async$fSS)
case 3:q=e
if(q==null||J.cq(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqS(s,"data:application/pdf;base64,"+A.cO.gcu().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSS,v)},
ilX(d){var w,v,u,t,s,r
try{w=B.jF(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cC(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.F(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gJ(0)
if(t>0){s=J.aSv(t,1,200)
return s}}catch(r){}return 1},
fSJ(d){return C.ilW(d)},
ilW(d){var w=0,v=B.j(x.T),u
var $async$fSJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSJ,v)},
bF8(d,e,f,g){return C.im5(d,e,f,g)},
im5(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bF8=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b4,x.co).gag(0).C()){u=null
w=1
break}t=4
r=A.k.F(b5.a,80,2400)
q=A.k.F(b5.b,80,2400)
p=B.hC_(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.je(a9),b0)
b0=n
a9=k.b
n=Math.min(B.je(b0),a9)
a9=m
b0=k.a
m=Math.max(B.je(a9),b0)
b0=l
a9=k.b
l=Math.max(B.je(b0),a9)}o=A.k.F(o-0.04,0,1)
n=A.k.F(n-0.04,0,1)
m=A.k.F(m+0.04,0,1)
l=A.k.F(l+0.04,0,1)
j=A.k.F(m-o,0.12,1)
i=A.k.F(l-n,0.12,1)
h=A.o.F(A.k.V(800*(i/j)),180,420)
$.S()
g=new B.pW(new B.pv())
f=B.zl(g,null)
a7=B.K()
a7.r=A.rs.gp(0)
f.au(new B.a2(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bA
b1.e=A.dS
b1.b=A.aa
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.q((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.nZ()
w=7
return B.b(a3.xA(800,h),$async$bF8)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.he),$async$bF8)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dM.gaU(a5))
a7=A.cO.gcu().aM(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b3=s.pop()
a6=B.ab(b3)
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
return B.i($async$bF8,v)},
aRC(d,e,f){return C.ilU(d,e,f)},
ilU(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiu(d,e,f,new C.fSH(r,q),q,"Sign document"),$async$aRC)
case 3:if(!new B.e9(q,x.co).gag(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bF8(q,t,r.b,r.c),$async$aRC)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b31(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRC,v)},
im3(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.huQ(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.huQ(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ad(q.c*100,2)+"%;top:"+A.k.ad(q.d*100,2)+"%;width:"+A.k.ad(q.e*100,2)+"%;height:"+A.k.ad(q.f*100,2)+'%">'
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
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lR&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hur(q.ay)+";border:2px solid "+C.hur(q.ch)+'"></div>'
break
case 5:l=C.hdA(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gakY()
if(p==null)p=A.aBr
n=B.T(p)
k=n.k("it<1>")
j=new B.it(p,0,8,k)
j.n4(p,0,8,n.c)
j=new B.bO(j,j.gJ(0),k.k("bO<ak.E>"))
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
hur(d){var w=A.o.aJ(d,24)
return"rgba("+(A.o.aJ(d,16)&255)+","+(A.o.aJ(d,8)&255)+","+(d&255)+","+A.k.ad((w&255)/255,3)+")"},
huQ(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bF6(d,e){var w=0,v=B.j(x.H)
var $async$bF6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fSQ(e,C.im3(e),d),d,null,!0,!0,x.H),$async$bF6)
case 2:return B.h(null,v)}})
return B.i($async$bF6,v)},
bF7(){var w=0,v=B.j(x.T),u,t,s
var $async$bF7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hm(92,2400),$async$bF7)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fSJ(s),$async$bF7)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF7,v)},
aRD(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.heP(d),$async$aRD)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fVs(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRD,v)},
hoP(d,e){var w
if(e<0||e>=d.r.length)return A.o.F(d.e,1,120)
w=d.r[e].w
return A.o.F(w>0?w:d.e,1,120)},
b31:function b31(d,e,f){this.a=d
this.b=e
this.c=f},
fSH:function fSH(d,e){this.a=d
this.b=e},
fSQ:function fSQ(d,e,f){this.a=d
this.b=e
this.c=f},
fSN:function fSN(d){this.a=d},
fSO:function fSO(d,e,f){this.a=d
this.b=e
this.c=f},
fSP:function fSP(d,e,f){this.a=d
this.b=e
this.c=f},
ilV(d){return C.kJ(d.w)},
im1(d){var w,v,u,t
if(d.length===0||!A.d.cM(d,C.inM()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
z6(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hI5()
if(w.b.test(u))return u
return null},
hC1(d,e,f){var w,v,u=C.hR0(d),t=$.oo()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
im7(d){var w,v,u,t,s=B.aS(x.N)
for(w=J.aX(d.a),v=new B.eA(w,d.b);v.C();){u=w.gR(w).y
t=C.z6(u==null?"":u)
if(t!=null)s.I(0,t)}return s},
fSF(d,e){var w,v=d.y,u=C.z6(v==null?"":v)
if(u!=null)return d.y=u
w=C.im7(new B.Y(e,new C.fSG(d),B.T(e).k("Y<1>")))
v=d.x
return d.y=C.hC1(v==null?"":v,null,w)},
im6(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kJ(w.w))return null
v=w.y
return C.z6(v==null?"":v)},
hVp(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.he(u)},
X_(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$X_)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$X_)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a3(q,x.N,x.z)
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
return B.i($async$X_,v)},
X0(d){return C.hVq(d)},
hVq(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$X0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$X0)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.H(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).ab().af()],x.N,x.z),!1,!1,A.cK,null),$async$X0)
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
return B.i($async$X0,v)},
a8V(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8V=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$a8V)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.X_(),$async$a8V)
case 4:s=a6
r=C.z6(a2==null?"":a2)
if(r==null)r=a3!=null?C.hC1(a3,null,A.M):null
q=x.N
p=B.aS(q)
for(o=J.dm(s),n=J.aX(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.z6(J.k(k==null?"":k))
if(j!=null)p.I(0,j)}n=o.gdR(s),n=n.gag(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dQ.aM(t)
g.n(0,"payload",A.cO.gcu().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).ab().af())
if(D.UH.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.z6(J.k(q==null?"":q))
if(f==null)f=C.hoU(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.X0(s),$async$a8V)
case 7:u=new B.aHm(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hVp()
n=r==null
d=n?C.hoU(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dQ.aM(t)
q.n(0,"payload",A.cO.gcu().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).ab().af())
if(D.UH.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.X0(s),$async$a8V)
case 8:u=new B.aHm(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8V,v)},
hoU(d){var w,v,u=$.oo()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.aw(1000)),3,"0")
if(d.I(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asx(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$asx)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.X_(),$async$asx)
case 6:t=f
s=J.a7(t)
r=s.gJ(t)
s.bt(t,new C.ckq(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.X0(t),$async$asx)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asx,v)},
asw(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.z6(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$asw)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.X_(),$async$asw)
case 6:t=o.jp(f),t=t.gag(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.z6(J.k(q==null?"":q))===p){u=C.a8U(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asw,v)},
a8U(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8U=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$a8U)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.X_(),$async$a8U)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aK(l.h(n,"usesRemaining"))
j=k==null?null:A.k.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.c9.cF(0,A.cG.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UH.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aS(0,s,null)
if(m.b(r)){q=B.a3(r,x.N,x.z)
J.aJ(q,"sharedByAdmin",!0)
s=A.Y.az(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dL(B.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).ab().af())
o.n(p,g,l)}w=7
return B.b(C.X0(p),$async$a8U)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8U,v)},
im0(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).ab().af())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("N<1,a8<m,@>>")
w=B.C(new B.N(d,new C.fSM(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fSU(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).ab().af())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ak())
return A.Y.az(w,null)}return A.Y.az(C.im0(d==null?B.a([],x.D):d,f,g),null)},
fST(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fST=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8V(h,d,e,f,g),$async$fST)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.z6(e==null?"":e)
u=new B.aH8(s,t)
w=1
break}t=A.dQ.aM(h)
t=A.kI.gcu().aM(t)
u=new B.aH8(C.z6(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fST,v)},
heR(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d2(q,"{"))try{w=A.Y.aS(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
im4(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.heR(u))return u
t=A.a.cp(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.heR(s))return s}r=A.a.cp(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.heR(s))return s}}return null},
fSI(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.Y.aS(0,A.c9.cF(0,A.cG.aM(J.nl(t,8))),null))
else w=v.a(A.Y.aS(0,t,null))
v=C.i4j(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aif(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aif=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asw(t[1]),$async$aif)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSI(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.z6(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asw(r),$async$aif)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSI(s)
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
return B.b(C.a8U(t[1]),$async$aif)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSI(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fSI(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aif,v)},
i4j(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UH.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.heO(C.WW(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cE(t,new C.fog(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
heO(d,e){var w,v,u,t,s,r,q,p,o=d.ak()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aX(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j9
$.j9=q+1
J.aJ(s,"id",""+1000*r+"_"+q)}}p=C.WW(B.a3(o,x.N,x.z))
if(e&&C.kJ(p.w))p.Q=new B.V(Date.now(),0,!1).ab().bR(144e8).af()
return p},
bES(){var w=0,v=B.j(x.aT),u,t,s
var $async$bES=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hl(),$async$bES)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aif(s),$async$bES)
case 4:t=e
u=J.cq(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bES,v)},
h0N(d){var w=0,v=B.j(x.T),u,t
var $async$h0N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.YH,!0,"Dismiss",d,new C.h0O(),new C.h0P(),A.Gy,!0,x.N),$async$h0N)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.ffZ)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0N,v)},
ipV(d,e,f,g,h){return B.a6(d,!1).cd(B.eb(new C.h0Q(h,e,g,f),!0,null,x.H))},
fSG:function fSG(d){this.a=d},
ckq:function ckq(d){this.a=d},
fSM:function fSM(){},
fog:function fog(d){this.a=d},
h0O:function h0O(){},
h0P:function h0P(){},
h0Q:function h0Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WY:function WY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFT:function aFT(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eHu:function eHu(){},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d){this.a=d},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHy:function eHy(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
WZ:function WZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmt:function bmt(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHE:function eHE(d){this.a=d},
eHF:function eHF(){},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d,e){this.a=d
this.b=e},
aFQ:function aFQ(d){this.a=d},
aFR:function aFR(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eB7:function eB7(d){this.a=d},
eB6:function eB6(){},
eB8:function eB8(d){this.a=d},
eB3:function eB3(d){this.a=d},
eB2:function eB2(){},
eB4:function eB4(d){this.a=d},
eB5:function eB5(d){this.a=d},
bx1:function bx1(){},
asy:function asy(d){this.a=d},
aFU:function aFU(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHJ:function eHJ(d){this.a=d},
eHI:function eHI(d){this.a=d},
i9N(){var w,v,u,t
for(v=0;v<4;++v){w=D.dgb[v]
try{if(Ae.c0H(w)){u=w
return u}}catch(t){}}return null},
S2(d,e){return C.iiI(d,e)},
iiI(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$S2=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i9N()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oK?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qP(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.ez(b8,b9)
n=new B.ez("Getting ready\u2026",b9)
m=new B.ez(0,b9)
l=B.ps(new C.fMY(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.cf(null,A.df,!1,null,new C.fMZ(n,m),c6,null,!0,!0,b9)
k=new C.fN2(b7)
j=new C.fN3()
i=null
t=4
b3=c2.a
h=Al.aTY(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h3L(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZ0(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.IU.z3(i,"dataavailable",new C.fN_(e))
d=new B.c2(new B.bk($.bD,x.dT),x.b2)
A.IU.z3(i,"stop",new C.fN0(d))
J.aiS(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$S2)
case 8:w=7
return B.b(c5.$1(d0),$async$S2)
case 7:a0=d0
J.h3M(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aiS(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aiS(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$S2)
case 15:w=14
return B.b(c5.$1(d0),$async$S2)
case 14:a0=d0
case 13:J.h3M(g,a0,0,0,c2.a,c2.b)
a3=A.o.F(a2.w>0?a2.w:c7.e,1,120)
J.aiS(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcD()
else b3=!0
if(!b3){w=17
break}J.h3M(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fe,null,b9),$async$S2)
case 18:w=16
break
case 17:J.aiS(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aiS(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.df(0,A.oj),$async$S2)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n_(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Hz(b0)
J.lH(b0)
B.bQ(A.qn,new C.fN1(a7),b9)
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
J.lH(l)
if(p.pV())p.eO()
c3=o
b3=$.aw()
c3.sib(b3)
J.aSz(c3,0)
c3=n
c3.sib(b3)
J.aSz(c3,0)
c3=m
c3.sib(b3)
J.aSz(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$S2,v)},
fMY:function fMY(d,e,f){this.a=d
this.b=e
this.c=f},
fMX:function fMX(){},
fMZ:function fMZ(d,e){this.a=d
this.b=e},
fN2:function fN2(d){this.a=d},
fN3:function fN3(){},
fN_:function fN_(d){this.a=d},
fN0:function fN0(d){this.a=d},
fN1:function fN1(d){this.a=d},
bxf:function bxf(d,e,f){this.c=d
this.d=e
this.a=f},
fim:function fim(){},
fin:function fin(){},
ckM(d){var w=0,v=B.j(x.at),u,t,s
var $async$ckM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asG(d,A.Ag),$async$ckM)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bE(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bD
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckM,v)},
ckL(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8B:function a8B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmc:function bmc(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
epn:function epn(d){this.a=d},
epl:function epl(d){this.a=d},
epm:function epm(d,e){this.a=d
this.b=e},
a9u:function a9u(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oQ$=k
_.oR$=l
_.oS$=m
_.o1$=n},
a9v:function a9v(d,e){this.a=d
this.b=e},
b4H:function b4H(){},
coG:function coG(){},
coH:function coH(){},
coI:function coI(d,e,f,g,h,i,j,k,l){var _=this
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
hJ4(d){return new C.aj9(d)},
a3U:function a3U(){},
aj9:function aj9(d){this.a=d},
aST:function aST(){},
ayc:function ayc(d,e){this.d=d
this.b=e
this.a=null},
aUm:function aUm(d){this.b=d
this.a=null},
bDM(d,e){var w=0,v=B.j(x.H),u
var $async$bDM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gu9().Mk(d,e),$async$bDM)
case 2:u=B.fVz()
w=3
return B.b(u,$async$bDM)
case 3:return B.h(null,v)}})
return B.i($async$bDM,v)},
hzd(d,e){return(A.t3[(d^e)&255]^A.o.aJ(d,8))>>>0},
fF1(d,e,f,g,h,i){var w=C.ieX(d,A.di,f,null,A.d1,g,h,i)
return w},
hBa(d){var w=F.hBT(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hR0(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pA.h(0,w)
if(v!=null)return v
for(u=A.pA.gdR(A.pA),u=u.gag(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aA(s,0,2)
return A.a.aA(s+"XX",0,2)},
hBi(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<55;++w)v+="- "+D.dwy[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bCZ(d,e){return C.ibx(d,e)},
ibx(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCZ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aW8(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cv(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jK(o,"share",[p]),x.H),$async$bCZ)
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
return B.i($async$bCZ,v)},
heI(){var w=0,v=B.j(x.y),u,t,s
var $async$heI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fw2
s=$.bCw
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bCZ(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$heI,v)},
bEn(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fw2
l=$.bCw
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hvz()?3:4
break
case 3:w=5
return B.b(C.bCZ(m,k),$async$bEn)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCx
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n_(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Hz(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bEn)
case 10:J.lH(q)
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
return B.i($async$bEn,v)},
hez(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hez=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCx
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lW.ri(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hez,v)},
heQ(d,e){var w=0,v=B.j(x.H),u,t
var $async$heQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lW.ri(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$heQ,v)},
b3D(d,e){var w=0,v=B.j(x.y),u
var $async$b3D=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3F(d,e),$async$b3D)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3E(d),$async$b3D)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3D,v)}},D,O,Ao,A9,A_,Aa,W,Ap,G,F,E,H,X,R,A0,A1,Aq,M,Ar,A2,As,At,Ab,K,Au,Av,A3,N,Y,P,Z,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,AD,T,U,L,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Aj=c[203]
A7=c[73]
Ak=c[53]
Al=c[64]
V=c[220]
A8=c[57]
Am=c[147]
An=c[231]
C=a.updateHolder(c[5],C)
D=c[218]
O=c[139]
Ao=c[41]
A9=c[222]
A_=c[219]
Aa=c[232]
W=c[208]
Ap=c[132]
G=c[187]
F=c[35]
E=c[221]
H=c[95]
X=c[121]
R=c[149]
A0=c[32]
A1=c[177]
Aq=c[234]
M=c[157]
Ar=c[184]
A2=c[105]
As=c[134]
At=c[227]
Ab=c[116]
K=c[223]
Au=c[235]
Av=c[131]
A3=c[67]
N=c[197]
Y=c[82]
P=c[159]
Z=c[114]
Ac=c[118]
Aw=c[225]
Q=c[123]
Ad=c[141]
Ax=c[93]
Ae=c[58]
Af=c[193]
Ay=c[40]
Ag=c[80]
Az=c[156]
Ah=c[148]
Ai=c[230]
AA=c[233]
AB=c[229]
S=c[74]
AC=c[226]
I=c[174]
AD=c[236]
T=c[51]
U=c[224]
L=c[205]
A4=c[228]
A5=c[111]
A6=c[63]
C.od.prototype={
vD(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ud(t,v)
return new C.od(t===0?!1:w,v,t)},
bPp(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DC()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ud(w,u)
return new C.od(r===0?!1:s,u,r)},
bPW(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DC()
w=o-d
if(w<=0)return p.a?$.hgl():$.DC()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ud(w,u)
q=new C.od(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aK(0,$.a3G())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dK("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.E(e,16)===0)return r.bPp(v)
u=w+v+1
t=new Uint16Array(u)
C.hs3(r.b,w,e,t)
w=r.a
s=C.ud(u,t)
return new C.od(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dK("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.E(e,16)
if(u===0)return n.bPW(v)
t=w-v
if(t<=0)return n.a?$.hgl():$.DC()
s=n.b
r=new Uint16Array(t)
C.i0a(s,w,e,r)
w=n.a
q=C.ud(t,r)
p=new C.od(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aK(0,$.a3G())
for(o=0;o<v;++o)if(s[o]!==0)return p.aK(0,$.a3G())}return p},
aR(d,e){var w,v=this.a
if(v===e.a){w=C.cNW(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a98(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a98(t,e)
if(s===0)return $.DC()
if(r===0)return t.a===e?t:t.vD(0)
w=s+1
v=new Uint16Array(w)
C.i08(t.b,s,d.b,r,v)
u=C.ud(w,v)
return new C.od(u===0?!1:e,v,u)},
HL(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DC()
w=d.c
if(w===0)return t.a===e?t:t.vD(0)
v=new Uint16Array(s)
C.bbK(t.b,s,d.b,w,v)
u=C.ud(s,v)
return new C.od(u===0?!1:e,v,u)},
bCk(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ud(r,u)
return new C.od(!1,u,s)},
bCj(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ud(u,r)
return new C.od(!1,r,v)},
bCl(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ud(p,m)
return new C.od(s!==0,m,s)},
Vy(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DC()
w=t.a
if(w===e.a){if(w){w=$.a3G()
return t.HL(w,!0).bCl(e.HL(w,!0),!0).a98(w,!0)}return t.bCk(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCj(v.HL($.a3G(),!1),!1)},
a6(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a98(e,v)
if(C.cNW(u.b,t,e.b,w)>=0)return u.HL(e,v)
return e.HL(u,!v)},
aK(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vD(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a98(e,v)
if(C.cNW(u.b,t,e.b,w)>=0)return u.HL(e,v)
return e.HL(u,!v)},
aN(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DC()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hs4(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ud(w,t)
return new C.od(q===0?!1:r,t,q)},
bPo(d){var w,v,u,t
if(this.c<d.c)return $.DC()
this.aTD(d)
w=$.h9m.co()-$.ayZ.co()
v=C.h9o($.h9l.co(),$.ayZ.co(),$.h9m.co(),w)
u=C.ud(w,v)
t=new C.od(!1,v,u)
return this.a!==d.a&&u>0?t.vD(0):t},
csM(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aTD(d)
w=C.h9o($.h9l.co(),0,$.ayZ.co(),$.ayZ.co())
v=C.ud($.ayZ.co(),w)
u=new C.od(!1,w,v)
if($.h9n.co()>0)u=u.mD(0,$.h9n.co())
return t.a&&u.c>0?u.vD(0):u},
aTD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hs0&&d.c===$.hs2&&g.b===$.hs_&&d.b===$.hs1)return
w=d.b
v=d.c
u=16-A.o.galo(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hrZ(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hrZ(g.b,f,u,r)}else{r=C.h9o(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h9p(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cNW(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbK(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbK(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i09(p,r,i);--o
C.hs4(h,j,0,r,o,s)
if(r[i]<h){m=C.h9p(j,s,o,n)
C.bbK(r,l,n,m,r)
while(--h,r[i]<h)C.bbK(r,l,n,m,r)}--i}$.hs_=g.b
$.hs0=f
$.hs1=w
$.hs2=v
$.h9l.b=r
$.h9m.b=l
$.ayZ.b=s
$.h9n.b=u},
gX(d){var w,v,u,t=new C.cNX(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cNY().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.od&&this.aR(0,e)===0},
tQ(d,e){return this.aR(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vw(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galo(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aJ(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cNZ(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cO_(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.ln(A.aH.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vD(0):r
while(v.c>1){u=$.hFT()
if(u.c===0)B.bi(D.ba7)
t=v.csM(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPo(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaTE:1,
$ihM:1}
C.aT2.prototype={
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
cRM(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gav(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gag(d){var w=this.a
return new J.kg(w,w.length,B.T(w).k("kg<1>"))}}
C.SF.prototype={
cZV(){var w,v
if(this.as==null)this.bfv()
w=this.as
v=w==null?null:w.aqy()
return v==null?null:v.eV()},
bfv(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqy().eV()
this.as=new C.bSf(v)}},
gZ(d){return this.at}}
C.a4C.prototype={
a7(){return"CompressionType."+this.b}}
C.bK_.prototype={
eG(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zQ[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zQ[d])
s.c=t}return v}}
C.bIi.prototype={
cPQ(d,e){var w,v,u,t,s,r=this,q=new C.bK_(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eG(8)!==66||q.eG(8)!==90||q.eG(8)!==104)return!1
w=r.a=q.eG(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cr3(q)
if(t<0)return!1
if(t===0){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
s=r.cr6(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
return!0}}return!0},
cr3(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eG(8)
if(t!==D.dxY[u])v=!1
if(t!==D.d9c[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cr6(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eG(1),d2=((d3.eG(8)<<8|d3.eG(8))<<8|d3.eG(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c5x()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eG(3)
if(q<2||q>6)return-1
v=d3.eG(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eG(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.bZ(6,$.hDS(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eG(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eG(1)===0)break
i=d3.eG(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hDR()
u=x.an
c9.y=B.bZ(6,v,!1,u)
c9.z=B.bZ(6,v,!1,u)
c9.Q=B.bZ(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c0N(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avC(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avC(d3)}while(a3===0||a3===1);++a5
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
a3=c9.avC(d3)
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
c1=(c1<<8^D.Iq[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Iu[b9];++b9
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
if(b8===0){b8=D.Iu[b9];++b9
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
if(b8===0){b8=D.Iu[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Iu[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Iu[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Iq[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Iq[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Iq[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Iq[c1>>>24&255^c7&255])>>>0
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
avC(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eG(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eG(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c0N(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c5x(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cFW.prototype={
aJQ(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bT_(e)
if(q<0)return
e.c=q
if(e.aT()!==101010256)return
e.b3()
e.b3()
e.b3()
e.b3()
r.f=e.aT()
r.r=e.aT()
w=e.b3()
if(w>0)e.aJT(w,!1)
r.crr(e)
q=r.r
v=r.f
u=e.aMZ(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.bap()
s.cZU(0,u,e,f)
q.push(s)}},
crr(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8P(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tB()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tB()
d.b3()
d.b3()
d.aT()
d.aT()
d.tB()
d.tB()
u=d.tB()
t=d.tB()
this.f=u
this.r=t
d.c=s},
bT_(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8P(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.amW(A.io)
o.aOd(r.eV(),A.io,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cFU.prototype={}
C.ayC.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cFX.prototype={
aJQ(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aI8.h(0,e.b3())
o.c=w==null?D.Nn:w
o.d=e.b3()
o.e=e.b3()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b3()
u=e.b3()
o.x=e.apb(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_1:D.ER
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.ER&&u>2){w=o.y
w.toString
s=B.rD(w,A.io,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b3()===39169){s.b3()
s.b3()
s.apb(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b3()
o.at=D.b_2
o.ax=new C.cFU(r,q)
w=D.aI8.h(0,q)
o.c=w==null?D.Nn:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gJ(d){return this.bpf().length},
aqy(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rD(new Uint8Array(0),A.io,q,q)
w=r.at
if(w!==D.ER)if(p.gJ(0)<=0)r.at=D.ER
else{if(w===D.b_1){p=r.bNH(p)
r.Q=p}else if(w===D.b_2){p=r.bNk(p)
r.Q=p}r.at=D.ER}w=r.c
if(w===D.ak7){v=p.c
u=B.dj()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.pZ.C2(p.eV(),!0,!1)
else{t=B.a9j(A.io,r.w)
p=r.Q
p.toString
A.pZ.a4W(p,t,!0,!1)
u.b=t.Hj()}r.Q.c=v
return B.rD(u.bl(),A.io,q,q)}else if(w===D.ak8){s=B.a9j(A.io,32768)
p=r.Q
v=p.c
C.hJf().cPQ(p,s)
u=s.Hj()
r.Q.c=v
return B.rD(u,A.io,q,q)}else return B.rD(p.eV(),A.io,q,q)},
bpf(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbk(d){var w=this.ch,v=C.Kt(C.hzd(w[0].M(0),d))
w[0]=v
v=w[1].a6(0,v.Vy(0,C.Kt(255)))
w[1]=v
w[1]=v.aN(0,C.Kt(134775813)).a6(0,C.Kt(1)).Vy(0,C.Kt(4294967295))
w[2]=C.Kt(C.hzd(w[2].M(0),w[1].mD(0,24).M(0)))},
aT1(){var w=(this.ch[2].Vy(0,C.Kt(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bNH(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rD(new Uint8Array(0),A.io,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbk(u[v.c++]^r.aT1())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aT1()
r.bbk(s)
u&2&&B.aj(t)
t[w]=s}return B.rD(t,A.io,q,q)},
bNk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gJ(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i_O(k,w,v)
p=new Uint8Array(B.cb(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.cb(A.aH.ds(q,v,k)))
if(!C.hry(A.aH.ds(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bGS(k,new Uint8Array(16),p)
k=x.S
m=J.a67(0,k)
m=n.r=new C.cov(m)
m.c=!0
m.b=m.bow(!0,new C.au8(p))
if(m.c)m.d=B.bo(D.oI,!0,k)
else m.d=B.bo(D.zD,!0,k)
l=C.hpL(C.hpN(),64)
l.bhV(new C.au8(o))
n.w=l
n.cZr(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hry(k,m))throw B.W(B.fl("macs don't match"))
return B.rD(r,A.io,null,null)}}
C.bap.prototype={
cZU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b3()
e.b3()
e.b3()
e.b3()
e.b3()
e.b3()
e.aT()
n.w=e.aT()
n.x=e.aT()
w=e.b3()
v=e.b3()
u=e.b3()
n.y=e.b3()
e.b3()
n.Q=e.aT()
n.as=e.aT()
if(w>0)n.at=e.apb(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rD(t,A.io,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b3()
p=s.b3()
o=s.a8P(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tB()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tB()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tB()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apb(u)
f.c=n.as
t=new C.cFX(D.Nn,n,D.ER,B.a([C.Kt(0),C.Kt(0),C.Kt(0)],x.f3))
n.ch=t
t.aJQ(0,f,g)},
u(d){return this.at}}
C.cFV.prototype={
cPR(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cFW(B.a([],x.fT))
this.a=g
g.aJQ(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aT2(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SF(o,A.o.aq(Date.now(),1000),0):C.hhM(o,q.w,q)
v.I(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hhM(o,q.w,q)
if(k.as==null)k.bfv()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.amW(A.io)
j.aOd(o,A.io,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GJ(!1).DY(i,0,h,!0)}}return v}}
C.bGS.prototype={
cZr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CU(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hIZ(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dK("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dK("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRe(u,0,w,0,o)}else{o===$&&B.c()
q.bNL(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LF(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.jY(0)
w=w.d
w===$&&B.c()
l.CU(0,w,0,w.length)
return f}}
C.coA.prototype={}
C.coE.prototype={}
C.coy.prototype={}
C.au8.prototype={}
C.coD.prototype={
cQ5(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ec(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bhV(new C.au8(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSl(n.a,n.b,t,s,r)
r+=v}A.aH.h9(f,g,g+w,s)
return o.a.c},
bSl(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dK("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CU(0,d,0,d.length)
v.CU(0,f,0,4)
u=m.c
u===$&&B.c()
w.LF(u,0)
u=m.c
A.aH.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CU(0,s,0,s.length)
w.LF(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.coz.prototype={}
C.cox.prototype={}
C.au9.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.au9){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tQ(d,e){var w=this.a
w===$&&B.c()
w=A.o.tQ(w,e.gc13())
if(!w)e.gc13()
return w},
aMo(d,e){this.a=0
this.b=d},
tT(d){return this.aMo(d,null)},
aN1(d){var w,v=this,u=v.b
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
w.b2Z(v,u)
u=w.b
u===$&&B.c()
w.b2Z(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b2Z(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bw(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.coC.prototype={
jY(d){var w,v=this
v.a.tT(0)
v.c=0
A.aH.hy(v.b,0,4,0)
v.w=0
w=v.r
A.d.hy(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aq1(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4q(u,0)
v.c=0}v.a.aN1(1)},
CU(d,e,f,g){var w=this.cpN(e,f,g)
f+=w
g-=w
w=this.cpO(e,f,g)
this.cpE(e,f+w,g-w)},
LF(d,e){var w,v=this,u=C.hpM(v.a),t=u.a
t===$&&B.c()
t=C.hfo(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hfo(w,3)
v.cpI()
v.cpF(u)
v.auq()
v.cjO(d,e)
v.jY(0)
return 20},
b4q(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oq(A.aH.gaU(d),d.byteOffset,d.length).getUint32(e,A.iy===w.d)
if(w.w===16)w.auq()},
auq(){this.cZq()
this.w=0
A.d.hy(this.r,0,16,0)},
cpE(d,e,f){while(f>0){this.aq1(d[e]);++e;--f}},
cpO(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4q(d,e)
e+=4
f-=4
w.aN1(4)
v+=4}return v},
cpN(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aq1(d[e]);++e;--f;++v}return v},
cpI(){this.aq1(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aq1(0)}},
cpF(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auq()
u=v.d
switch(u){case A.iy:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fh:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
cjO(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iy===this.d,s=0;s<w;++s){r=v[s]
q=J.oq(A.aH.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdd(d){return this.f}}
C.coF.prototype={
cZq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qr[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qr[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qr[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qr[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qr[30]
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
C.coB.prototype={
bhV(d){var w,v,u,t,s=this,r=s.a
r.jY(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CU(0,w,0,v)
w=s.d
w===$&&B.c()
r.LF(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.hy(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.h9(w,0,u,s.d)
s.bcy(s.d,u,54)
s.bcy(s.e,u,92)
u=s.d
r.CU(0,u,0,u.length)},
LF(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LF(s,w)
s=u.e
t.CU(0,s,0,s.length)
v=t.LF(d,e)
s=u.e
A.aH.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CU(0,s,0,s.length)
return v},
bcy(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cow.prototype={}
C.cov.prototype={
a3a(d){return(D.oI[d&255]&255|(D.oI[d>>>8&255]&255)<<8|(D.oI[d>>>16&255]&255)<<16|D.oI[d>>>24&255]<<24)>>>0},
bow(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dK("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e2(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.oq(A.aH.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3a((m>>>8|(m&$.qr[24])<<24)>>>0)^D.cLh[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.oq(A.aH.gaU(e),e.byteOffset,w)
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
p=(p^f.a3a((k>>>8|(k&$.qr[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3a((k>>>8|(k&$.qr[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.oq(A.aH.gaU(e),e.byteOffset,w)
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
p=(p^f.a3a((g>>>8|(g&$.qr[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3a(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRe(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oq(A.aH.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ek[a8&255]
u=D.ek[a9>>>8&255]
t=$.qr[8]
s=D.ek[b0>>>16&255]
r=$.qr[16]
q=D.ek[b1>>>24&255]
p=$.qr[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ek[a9&255]
s=D.ek[b0>>>8&255]
u=D.ek[b1>>>16&255]
v=D.ek[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ek[b0&255]
u=D.ek[b1>>>8&255]
s=D.ek[a8>>>16&255]
q=D.ek[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ek[b1&255]
a8=D.ek[a8>>>8&255]
a9=D.ek[a9>>>16&255]
b0=D.ek[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ek[n&255]
b0=D.ek[m>>>8&255]
a9=D.ek[l>>>16&255]
a8=D.ek[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ek[m&255]
b0=D.ek[l>>>8&255]
o=D.ek[b1>>>16&255]
s=D.ek[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ek[l&255]
o=D.ek[b1>>>8&255]
b0=D.ek[n>>>16&255]
u=D.ek[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ek[b1&255]
o=D.ek[n>>>8&255]
s=D.ek[m>>>16&255]
v=D.ek[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ek[a8&255]^C.nI(D.ek[a9>>>8&255],24)^C.nI(D.ek[b0>>>16&255],16)^C.nI(D.ek[b1>>>24&255],8)^b6[w][0]
m=D.ek[a9&255]^C.nI(D.ek[b0>>>8&255],24)^C.nI(D.ek[b1>>>16&255],16)^C.nI(D.ek[a8>>>24&255],8)^b6[w][1]
l=D.ek[b0&255]^C.nI(D.ek[b1>>>8&255],24)^C.nI(D.ek[a8>>>16&255],16)^C.nI(D.ek[a9>>>24&255],8)^b6[w][2]
b1=D.ek[b1&255]^C.nI(D.ek[a8>>>8&255],24)^C.nI(D.ek[a9>>>16&255],16)^C.nI(D.ek[b0>>>24&255],8)^b6[w][3]
a7=D.oI[n&255]
b0=D.oI[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oI[l>>>8&255]
a9=D.oI[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oI[b1>>>8&255]
h=D.oI[n>>>16&255]
g=D.oI[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oI[l>>>24&255]
s=s[3]
a1=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bNL(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ej[a6&255]
v=D.ej[b0>>>8&255]
u=$.qr[8]
t=D.ej[a5>>>16&255]
s=$.qr[16]
r=D.ej[a4>>>24&255]
q=$.qr[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ej[a4&255]
t=D.ej[a6>>>8&255]
v=D.ej[b0>>>16&255]
w=D.ej[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ej[a5&255]
v=D.ej[a4>>>8&255]
t=D.ej[a6>>>16&255]
r=D.ej[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ej[b0&255]
a5=D.ej[a5>>>8&255]
a4=D.ej[a4>>>16&255]
a6=D.ej[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ej[p&255]
a6=D.ej[b0>>>8&255]
a4=D.ej[n>>>16&255]
a5=D.ej[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ej[o&255]
a4=D.ej[p>>>8&255]
a7=D.ej[b0>>>16&255]
t=D.ej[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ej[n&255]
a7=D.ej[o>>>8&255]
a5=D.ej[p>>>16&255]
v=D.ej[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ej[b0&255]
a7=D.ej[n>>>8&255]
t=D.ej[o>>>16&255]
w=D.ej[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ej[a6&255]^C.nI(D.ej[b0>>>8&255],24)^C.nI(D.ej[a5>>>16&255],16)^C.nI(D.ej[a4>>>24&255],8)^b5[a9][0]
o=D.ej[a4&255]^C.nI(D.ej[a6>>>8&255],24)^C.nI(D.ej[b0>>>16&255],16)^C.nI(D.ej[a5>>>24&255],8)^b5[a9][1]
n=D.ej[a5&255]^C.nI(D.ej[a4>>>8&255],24)^C.nI(D.ej[a6>>>16&255],16)^C.nI(D.ej[b0>>>24&255],8)^b5[a9][2]
b0=D.ej[b0&255]^C.nI(D.ej[a5>>>8&255],24)^C.nI(D.ej[a4>>>16&255],16)^C.nI(D.ej[a6>>>24&255],8)^b5[a9][3]
a4=D.zD[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zD[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zD[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zD[o>>>8&255]
i=D.zD[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zD[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.oq(A.aH.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSe.prototype={}
C.bSf.prototype={
gJ(d){var w=this.a.length
return w},
aqy(){return B.rD(this.a,A.io,null,null)}}
C.bbZ.prototype={
vx(d){return C.i38(d)}}
C.cz2.prototype={
Nj(d){var w=d.w,v=Math.max(1,A.k.cJ(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aaY(v,t+20,u+16,t,u,B.un(d.x))},
nC(d){return!1}}
C.bTg.prototype={
cJS(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bJ(new C.bTh(),x.E))},
mV(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mV)
case 6:w=5
return B.b(p.bDM(f,r),$async$mV)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mV,v)}}
C.axg.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9h.prototype={
A(d,e){if(e==null)return!1
if(J.bU(e)!==B.b2(this))return!1
return e instanceof C.a9h&&e.a===this.a},
gX(d){return B.bw(B.b2(this),B.xg(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h1F)return"["+(w+B.ea(this.a))+"]"
return"[ObjectKey "+(w+B.ea(this.a))+"]"}}
C.a1W.prototype={
S(){return new C.aKE(B.aS(x.N))},
cXy(d){return this.d.$1(d)},
cVe(){return this.e.$0()}}
C.aKE.prototype={
Y(){this.a3()
this.PJ()},
PJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVe(),$async$PJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fgP(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
ZR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fgT(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fgU(t))
w=3
return B.b(C.aoG(p),$async$ZR)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fgV(t,s,p))
w=4
return B.b(t.PJ(),$async$ZR)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZR,v)},
a25(d){return this.ctZ(d)},
ctZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a25=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fgQ(t))
s=J.t(d,"id")
w=3
return B.b(C.c3f(J.k(s==null?"":s)),$async$a25)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fgR(t))
w=1
break}q=C.heO(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cXy(B.a([q],x.D)),$async$a25)
case 4:if(t.c==null){w=1
break}t.m(new C.fgS(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a25,v)},
PI(d,e){return this.bOc(0,e)},
bOc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.fgK(q),r,null,!0,!0,x.y),$async$PI)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fgL(t))
s=s.h(e,"id")
w=4
return B.b(C.aoF(J.k(s==null?"":s)),$async$PI)
case 4:if(t.c==null){w=1
break}t.m(new C.fgM(t))
w=5
return B.b(t.PJ(),$async$PI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
cIR(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iO[B.bK(v)-1]+" "+B.bV(v)},
aST(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Q0,A.n),w,e,w,w,w,w,w,e)},
aSS(d){return this.aST(d,44)},
b9D(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q0:u,r=B.n(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,Z.Eu,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([Z.Eu,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bH2,u,u,u)],p))}return B.E(B.aA(A.c5,B.cV(u,B.A(q,A.m,u,A.ba,A.i,0,u,u),u,u,A.b6,new B.o(u,u,u,r,u,s,A.n),A.h8,u,u,u,u,A.rL,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fgZ(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cnL(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.ZL,n=B.n(18),m=p?A.d5:A.dt
m=B.L(m,A.r,p?1.8:1)
w=this.aSS(A.qI)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aVU,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aVW,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Q0:q
u=p?q:B.L(A.aW,A.r,1.6)
r=p?D.bYv:q
return B.aA(q,B.cV(q,B.A(B.a([w,A.be,t,B.cV(q,r,q,q,A.b6,new B.o(q,q,u,q,q,v,A.a7),A.fS,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b6,new B.o(o,q,m,n,q,q,A.n),A.fS,q,q,q,A.d3,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fgO(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cvB(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cIR(J.k(o==null?"":o))
o=B.n(18)
w=B.L(A.dt,A.r,1)
v=r.aSS(A.P6)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aVU,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aVW,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b66(A.hV,A.bw,"Bring it back",r.r?q:new C.fgW(r,d))
return B.p(q,B.A(B.a([v,A.be,t,p,A.bn,r.b66(A.ef,A.c0,"Delete",r.r?q:new C.fgX(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.ZL,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBi,q,q,q)},
b66(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.p(w,B.X(d,v?A.aW:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auG(d,e,f){var w=null
return new B.D(D.bAi,B.x(B.a([B.X(d,A.aW,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fy3,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fq6,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cc
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.c_,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aW,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aST(A.zp,46),A.be,D.bI3],t)
if(j.r)s.push(D.eqQ)
s.push(B.aG(i,i,i,i,A.t_,i,i,i,new C.fh1(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.L(A.dt,A.r,1)
o=J.a7(h)
q=B.a([A.X,u,new B.D(D.bE_,s,i),B.p(i,B.A(B.a([j.b9D(0,A.z6,"Save",j.a.c.length),j.b9D(1,A.Pp,"Saved",o.gJ(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bD0,A.ey,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bw).j(0.12)
s=B.n(14)
r=B.L((j.y?A.c0:A.bw).j(0.4),A.r,1)
p=j.y
n=p?A.Pa:A.ea
n=B.X(n,p?A.c0:A.bw,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vm,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bCX,A.iu,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.ftR,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fx2,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fh2(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.m,i,A.e,A.i,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auG(A.qI,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.cnL(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eqm)
else if(j.e==null)s.push(j.auG(A.a2d,"Could not reach the database","Check the connection, then open this again."))
else if(o.gav(h))s.push(j.auG(A.pl,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gag(h);r.C();)s.push(j.cvB(r.gR(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.co,B.cj(u,i,i,A_.alW,i,i,A.ai,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc87()
p=s?i:D.Q0
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b8.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.z6,m?A.jV:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bDC,B.aA(i,B.cV(i,B.A(B.a([k,A.aa3,new B.dp(1,A.co,B.eH(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jV:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e5),i)],t),A.m,i,A.ba,A.i,0,i,i),i,i,A.b6,new B.o(s,i,i,o,n,p,A.n),A.h8,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b71,i,i,i,i,i,i,i,i)}}
C.oG.prototype={
ak(){return B.H(["id",this.a,"doc",this.b.ak(),"updatedAt",this.c.ab().af()],x.N,x.z)}}
C.ZD.prototype={
S(){return new C.aza(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.aza.prototype={
Y(){this.a3()
this.PT()},
PT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2U(t.a.c),$async$PT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cPl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
cBU(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qA(t.d,new C.cPo(d))
v=w<0
if(v&&C.i0c(d))return t.f
u=t.d
if(v)J.pT(u,0,d)
else J.aJ(u,w,d)
v=x.a
B.h55(new C.cPp(t),v)
return t.f=t.f.bJ(new C.cPq(t,d),v).eM(new C.cPr())},
J9(d,e,f){return this.chi(0,e,f)},
b_U(d,e){return this.J9(0,e,!1)},
chi(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$J9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cd(B.eb(new C.cPk(t,e),!1,null,x.H)),$async$J9)
case 3:w=4
return B.b(t.f,$async$J9)
case 4:w=5
return B.b(t.PT(),$async$J9)
case 5:case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
b_8(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dKH:d
this.J9(0,new C.oG(w,v,new B.V(Date.now(),0,!1)),!0)},
c7A(){return this.b_8(null)},
aeu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPs(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeu)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_8(s)
case 1:return B.h(u,v)}})
return B.i($async$aeu,v)},
J8(d,e){return this.bO3(0,e)},
bO3(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cPf(e),s,null,!0,!0,x.y),$async$J8)
case 3:if(g!==!0){w=1
break}t.m(new C.cPg(t,e))
w=4
return B.b(t.f,$async$J8)
case 4:w=5
return B.b(C.ahg(t.a.c,e.a),$async$J8)
case 5:w=6
return B.b(t.PT(),$async$J8)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J8,v)},
DI(d){return this.bGb(d)},
bGb(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPb(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DI)
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
return B.b(t.b_U(0,d),$async$DI)
case 9:w=5
break
case 7:w=10
return B.b(F.hfq(r,d.b,null),$async$DI)
case 10:w=5
break
case 8:w=11
return B.b(t.J8(0,d),$async$DI)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DI,v)},
c1_(){var w,v,u,t,s=null,r=[D.dKK,D.dKI,D.dKJ],q=new C.cPi(),p=B.n(26),o=x.V,n=B.a([new B.ac(0,A.G,A.d2.j(0.4),A.eY,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dun[w]
u=A.c.j(0.18)
t=new B.aP(999,999)
l.push(B.p(s,B.d(v,s,s,s,s,s,s,A.oW,s,s,s),A.f,s,s,new B.o(u,s,s,new B.bg(t,t,t,t),s,s,A.n),s,s,s,s,A.on,s,s,s))}return B.p(s,B.A(B.a([B.E(B.x(B.a([D.fXW,A.P,B.bW(A.bH,l,A.bt,s,6,6),A.aR,B.aA(s,B.p(s,D.f7q,A.f,s,s,new B.o(A.c,s,s,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,V.amk,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPh(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ac,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.m,s,A.e,A.i,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c5Z,A.n),s,s,s,s,D.bE9,s,s,s)},
bG9(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.p(v,B.bx(B.n(6),new B.an(A.a0,v,A.b4,A.t,B.a([B.eH(A.A,F.aph(d.b),A.f,A.bZ),D.ewR,B.ap(v,B.aA(v,B.p(v,D.bZl,A.f,v,v,D.b7Z,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cP6(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fnd,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fu2,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cP7(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cP8(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.D(O.akR,B.hb(B.aA(s,B.p(s,A.arK,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b8.j(0.5),A.I,12)],x.V),E.wP,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc8X(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nr,s,s,s,!0,s,s,s,s,s,D.fY_,s,s,s,1,s,!0)
if(t.e)r=D.bbs
else{w=t.c1_()
v=B.a([D.fJ8,A.ae],r)
if(J.cI(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fmE,s,s,s),A.f,s,s,new B.o(D.bgG,s,s,u,s,s,A.n),s,s,s,s,A.yM,s,s,s))}r=B.a([new B.o9(A7.a06,new B.mq(w,s),s),new B.o9(D.bDw,new B.mq(B.A(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.cq(t.d))r.push(D.feC)
else r.push(new B.o9(D.bCZ,B.PE(new B.oK(new C.cPt(t),J.ad(t.d),!0,!0,!0,0,B.tk(),s),D.baG),s))
r=B.vX(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ai,!1,r)}return B.c5(q,D.bfh,r,s,!1,!1,s,s)}}
C.ZB.prototype={
S(){return new C.az6(B.a([],x.bx))},
UO(d){return this.d.$1(d)}}
C.aGt.prototype={}
C.az6.prototype={
b30(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b5,A.aP),w),u=this.gb_T()
v.aV(0,u)
w=new B.au(new B.ba(e,A.b5,A.aP),w)
w.aV(0,u)
return new C.aGt(v,w,f)},
Ex(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cz(A.qs,new C.cOA(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b5,A.aP),v)
t=m.gb_T()
u.aV(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b5,A.aP),v)
u.aV(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b5,A.aP),v)
u.aV(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b5,A.aP),v)
o.aV(0,t)
n=new B.au(new B.ba(p.b,A.b5,A.aP),v)
n.aV(0,t)
r.push(new C.aGt(o,n,p.c))}if(r.length===0)r.push(m.b30("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpu()
q=r.a
q.UO(q.c)}q=r.d
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
gpu(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.J)(s),++q){p=s[q]
t.push(new F.mL(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rI(n,w,v,t,u)},
Bi(){var w=0,v=B.j(x.H),u=this,t
var $async$Bi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpu()
t=u.a
w=2
return B.b(t.UO(t.c),$async$Bi)
case 2:return B.h(null,v)}})
return B.i($async$Bi,v)},
c8V(){this.m(new C.cOz(this))
this.Ex()},
aZO(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cOC(w,d,v))
w.Ex()},
c8W(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cOK())
this.Ex()
$.aV.x1$.push(new C.cOL(w))},
Rb(d){return this.cnB(d)},
cnB(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rb=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l8(80,1400,A.eN),$async$Rb)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rb)
case 8:p=f
o=q.b.toLowerCase()
n=J.aiO(o,".png")?"image/png":"image/jpeg"
r.m(new C.cOD(d,n,p))
r.Ex()
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
return B.i($async$Rb,v)},
ym(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ym=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hD5(r,t.gpu()),$async$ym)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cOB(t,s))
t.Ex()
case 1:return B.h(u,v)}})
return B.i($async$ym,v)},
cnT(d){var w,v=this,u=null,t=F.fMe(d.c)
if(t==null)return new B.bL(A.a6,u,u,B.ho(D.bSt,D.fLH,new C.cOF(v,d),u),u)
w=x.p
return new B.D(A.cv,new B.an(A.a0,u,A.ac,A.t,B.a([B.bx(B.n(12),B.fR(t,A.A,u,u,A.cj,A.bZ,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b67(A.jJ,new C.cOG(v,d)),A.bn,v.b67(A.cz,new C.cOH(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b67(d,e){var w=null
return B.aI(!1,A.a3,!0,w,B.aO(!1,w,!0,new B.D(A.hT,B.X(d,A.c,w,w,w,18),w),A.cQ,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aT,0,w,w,A.cQ,w,w,A.aj)},
JM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bi(),$async$JM)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hfq(s,t.gpu(),new C.cOJ(t)),$async$JM)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eF(B.a([new B.D(A.qt,B.ho(D.bXe,D.fRS,m.gaAq(),B.fu(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.arJ,l,l,l,new C.cOM(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.YO,l,1,l,l,l,!1,l,!1,E.nr,l,l,l,!0,l,l,l,l,l,D.fMy,l,l,l,1,l,!0),i=Ay.aWk(N.lF,A.c,Ag.XB,A.oC,D.fNi,m.gc8U()),h=B.n(18),g=m.gayo(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j7,12)],x.V)
f=B.aA(l,B.p(l,new B.a5(92,142.1818181818182,B.eH(A.A,F.aph(m.gpu()),A.f,A.dC),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.p(l,B.A(B.a([f,A.ev,B.E(B.x(B.a([D.fZA,A.aw,B.d(F.hdR(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fzT,l,l,l),A.X,B.dh(E.ar1,E.aWH,g,B.bn(A.d2,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(E.YO,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),g,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,A.oU,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),w,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aC,g,A.P,w,A.P,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),f,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aP(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fAq,l,l,l)
r=B.aG(l,l,l,l,D.bVS,l,l,l,v===0?l:new C.cON(m,v),l,l,l,l,"Move up",A.ce)
q=h.length
p=B.aG(l,l,l,l,D.c1m,l,l,l,v===q-1?l:new C.cOO(m,v),l,l,l,l,"Move down",A.ce)
q=q===1?l:new C.cOP(m,v)
o=new B.aP(12,12)
n=new B.aP(12,12)
f.push(B.p(l,B.x(B.a([new B.c6(A.aL,A.e,A.i,A.m,l,A.p,l,0,B.a([s,A.b3,r,p,B.aG(l,l,l,l,B.X(A.ef,A.pc,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ce)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bg(o,o,o,o),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,A.cg,!0,A.a5,l,A.ao,l,l,l,l),A.an,m.cnT(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bg(n,n,n,n),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.m,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(E.nr,l,new B.bG(u,u,u,u),new B.bg(w,w,w,w),l,l,A.n),l,l,new C.a9h(g),A.ei,D.bBy,l,l,l))}return B.oH(!0,B.c5(j,E.aiO,B.cj(f,l,l,D.bC1,l,l,A.ai,!1),l,!1,!1,i,l),new C.cOQ(m),x.C)}}
C.az8.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nr,q=B.n(16),p=B.n(16),o=s?A.ax.j(0.08):A.c.j(0.04)
s=s?A.ax.j(0.16):A.d2.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eK,B.aI(!1,A.a3,!0,t,B.aO(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aVg,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eG,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arA.prototype={
S(){return new C.aFh()}}
C.aFh.prototype={
Y(){this.a3()
this.a_w()},
by(d){this.bH(d)
if(d.c!=this.a.c)this.a1V()},
a1V(){var w=0,v=B.j(x.H),u=this,t
var $async$a1V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a1V)
case 2:u.d=null
if(u.c!=null)u.m(new C.ekE(u))
w=3
return B.b(u.a_w(),$async$a1V)
case 3:return B.h(null,v)}})
return B.i($async$a1V,v)},
a_w(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_w=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.Zg(B.cF(n,0,null),new B.Q0(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iU(0).df(0,A.qp),$async$a_w)
case 7:if(r.c==null){w=1
break}r.d.tV(!1)
r.m(new C.ekC(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ekD(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_w,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
cc0(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.ekF(w))}else{v.qn(0)
w.m(new C.ekG(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bL
n=B.n(8*n.d)
m=B.a([D.jy.j(0.92),D.Mc.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qL,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.O,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bi)}if(p.f)return B.at(B.X(A.aqg,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcl
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eH(A.A,new B.a5(r,q,new B.AD(s,o),o),A.t,A.bZ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.hs,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a7),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.bx(n,new B.an(A.a0,o,A.b4,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcc_(),o,o,o,o,o,o,!1,A.a4)}}
C.y3.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jz.prototype={}
C.aeb.prototype={
B(d){return B.pa(new C.e79(this,B.R(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adA.prototype={
B(d){var w,v,u=null,t=B.R(d).ax.a===A.J,s=B.n(18),r=B.n(18),q=B.L(D.jy.j(t?0.35:0.4),A.r,1),p=t?D.MT:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.n(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dF,6)],o)
w=this.c
o=B.E(B.p(u,new B.fF(0.5625,C.ij2(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.amP,u,u,u,u),1)
m=D.jy.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jy,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aI(!1,A.a3,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.bnW,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.al7,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.y6.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o_.prototype={}
C.bld.prototype={
a_F(d){var w=null
return new B.bL(A.a6,w,w,B.BO(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ccu(){return this.a_F(1)},
az4(d){var w=null,v=B.n(8),u=B.L(A.iq,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ago,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.L(A.iq,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dO(B.p(v,v,A.f,v,v,new B.o(v,v,B.L(A.iq,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.q(-8.36,0))],u),A.m,v,A.ba,A.i,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.an,w.az4("TAARIFA ZA WANANDOA"),A.an,w.ccu(),A.cU,w.a_F(0.9),A.cU,w.a_F(0.7),A.P,w.az4("TAMKO LA MAKUBALIANO"),A.fK,w.a_F(1),A.cU,w.a_F(0.95),A.P,w.az4("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.aee.prototype={
B(d){return B.pa(new C.epq(B.R(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.afU.prototype={
B(d){var w,v,u,t,s,r=null,q=B.R(d).ax.a===A.J,p=B.n(18),o=B.n(18),n=B.L(A.aB.j(q?0.35:0.4),A.r,1),m=q?D.bns:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.n(10),i=B.L(A.aB.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dF,6)],l)
w=this.c
v=C.hem(w.a)
if(v==null)v=A.d.gH(D.Sz)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fF(0.5625,new B.an(A.a0,r,A.b4,A.t,B.a([B.bR(0,B.fR(C.hel(v.d),A.A,r,r,A.cj,A.bZ,!0,r,!1,r,r),0,0,0),new B.D(A.alM,new C.bld(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.amP,r,r,r,r),1)
j=A.aB.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.MU,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aI(!1,A.a3,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bfV,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.al7,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.l8.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8K.prototype={}
C.WM.prototype={
S(){var w=$.aw()
return new C.aFy(new B.cw(null,x.A),new B.au(A.au,w),new B.au(A.au,w),B.mT(0,null,null),A.d.gH(D.a5j),D.dV6,B.a([],x.L),B.a([],x.gE))}}
C.aFy.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.A3(C.fQ7(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fP3().bJ(new C.esn(v),w)
$.re().jn(0,"assets/images/ngmy_logo.png").bJ(new C.eso(v),w).eM(new C.esp())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a2()},
afk(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
Jr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l8(88,1600,A.eN),$async$Jr)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Jr)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hDm(m,p),$async$Jr)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFw(new B.q5(o,1),m),$async$Jr)
case 10:if(r.c!=null)r.m(new C.es_(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afk("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jr,v)},
XE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hDm(s,q),$async$XE)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFw(new B.q5(r,1),s),$async$XE)
case 4:if(t.c!=null)t.m(new C.erW(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XE,v)},
afl(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.es6(q))
t=4
q.a.toString
p=C.iny()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afl)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.es7(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afk(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.es8(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afl,v)},
a_K(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_K=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.es1(q,i))
t=4
q.a.toString
p=C.inx()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_K)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.es2(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.es3(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.es4(q))
$.aV.x1$.push(new C.es5(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_K,v)},
ccK(d){this.m(new C.es0(this,d))},
EP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.erY(q))
t=4
w=7
return B.b($.aV.gmR(),$async$EP)
case 7:w=8
return B.b(B.bQ(A.mM,null,x.H),$async$EP)
case 8:k=$.aV.ao$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qf))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$EP)
case 9:o=e
w=10
return B.b(o.hs(A.he),$async$EP)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.ahi(J.eQ(A.dM.gaU(n)),"ngmy_news.png","image/png"),$async$EP)
case 11:m=e
q.afk(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afk(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.erZ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EP,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.lm,a2,a2,a2,new C.ese(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bXK,a2,a2,a2,new C.esf(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oB,a2,a2,a2,a4?a1.gb18():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.BU,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f7B,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eY,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fF(0.7142857142857143,B.eH(A.A,new B.em(new C.b2C(t,s,r,a1.x,a2),a1.d),A.f,A.dC),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.ty,a2,a2,a2)
t=a1.as?a2:a1.gccJ()
t=B.a([B.E(B.dh(D.bYw,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cg,a2,a2,a2),t,B.bn(D.u5,a2,a2,a2,A.c,A.h3,a2,a2,new B.b9(B.n(14),Q.vM),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.n(10),B.fR(r,A.A,a2,a2,A.cj,A.bZ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aG(a2,a2,a2,a2,D.bV9,a2,a2,a2,a1.as?a2:a1.gbMF(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.ty,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aUJ("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ab,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dh,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.doj[o]
p.push(B.mZ(a2,D.u5,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pL,a2,a2,a2),A.hh,new C.esg(a1,n),a2,a2,Q.vM,a2))}p=B.bW(A.bH,p,A.bt,a2,6,8)
m=a1.Q
m=B.bW(A.bH,B.a([D.fY8,A.be,B.js(a2,a2,a2,D.fHP,a2,new C.esh(a1),m==="en",a2,a2,a2,a2),A.ae,B.js(a2,a2,a2,D.fHK,a2,new C.esi(a1),m==="sw",a2,a2,a2,a2)],w),A.vG,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.ty,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5j,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bO(i,i.gJ(0),h.k("bO<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTb(g==null?h.a(g):g))}k=B.cj(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5j,10,a2,j),h=j.$ti,j=new B.bO(j,j.gJ(0),h.k("bO<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTb(g==null?h.a(g):g))}j=B.cj(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gccM()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bF.j(0.4),A.I,18)],v)
v=B.a([u,A.aC,new B.D(A.cv,s,a2),t,A.aC,new B.D(A.cv,r,a2),q,A.P,p,A.X,m,A.aC,new B.D(A.cv,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aR,B.aA(a2,B.p(A.A,B.A(B.a([D.bYq,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fC,a2,a2,a2)],w),A.m,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uW,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dV,B.A(B.a([D.dFo,A.at,D.bIp],w),A.m,a2,A.e,A.i,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a9:A.a6
q=e?A.b8.j(0.35):D.u5
p=new B.aP(16,16)
d=new B.ay(A.bB,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.p(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fxO,a2,a2,a2),A.f,a2,A9.Xq,new B.o(q,a2,new B.bG(d,d,d,d),new B.bg(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cv,A.iu,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d9G[o]
t.push(B.mZ(a2,D.u5,B.d(a0,a2,a2,a2,a2,a2,a2,A.Kt,a2,a2,a2),A.hh,new C.esj(a1,a0),a2,a2,Q.vM,a2))}u.push(B.bW(A.bH,t,A.bt,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aUJ("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.esk(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ab,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dh,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gccL()
u.push(B.A(B.a([t,A.ae,B.Iv(A.zt,s,B.nU(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aC)
t=a1.as?a2:a1.gb18()
u.push(B.dh(A.oB,D.fTy,t,B.bn(A.cV,a2,a2,a2,a2,A.Kd,a2,a2,new B.b9(B.n(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cj(v,a1.r,a2,A.alx,a2,a2,A.ai,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.L(E.kn.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.p(a2,B.A(B.a([E.aa4,A.ev,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jt,a2,a2,a2)],w),A.m,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(E.BJ,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bEr,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c5(a3,A.BU,new B.an(A.a0,a2,A.ac,A.t,v,a2),a2,!1,!1,a2,a2)},
aUJ(d){var w=null
return B.bs(w,new B.b6(4,B.n(14),A.a1),w,A.eV,w,w,w,w,!0,w,w,w,w,w,w,D.u5,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.Ey,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTb(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bF:A.bB
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.ks,t,t,t,t),A.fK],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bAx,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jE,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.p(t,B.x(w,A.m,t,A.ba,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iK,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.erX(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.A3.prototype={
beI(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.A3(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cNB(d){var w=null
return this.beI(w,w,w,w,w,d,w,w,w,w)},
ak(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ciE(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aX(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ciC(),B.T(w).k("N<1,m>")).bZ(0,new C.ciD())
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
return this.beI(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG1(d){return this.f}}
C.tI.prototype={
a7(){return"NewsLayout."+this.b}}
C.C2.prototype={
a7(){return"NewsFrame."+this.b}}
C.lv.prototype={}
C.b2C.prototype={
rT(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1a(d,e,f,g){return this.rT(d,e,null,1.25,f,A.bq,g)},
Qu(d,e,f,g,h){return this.rT(d,e,f,1.25,g,A.bq,h)},
aza(d,e,f,g,h){return this.rT(d,e,null,f,g,A.bq,h)},
az9(d,e,f,g,h){return this.rT(d,e,f,g,0,A.bq,h)},
b1c(d,e,f,g,h){return this.rT(d,e,null,f,0,g,h)},
ccQ(d,e,f,g,h,i){return this.rT(d,e,f,g,0,h,i)},
az8(d,e,f,g){return this.rT(d,e,null,f,0,A.bq,g)},
afo(d,e,f){return this.rT(d,e,null,f,0,A.bq,A.cT)},
b1b(d,e,f,g,h){return this.rT(d,e,f,g,0,h,A.cT)},
ccP(d,e,f,g){return this.rT(d,e,null,f,0,g,A.cT)},
ccO(d,e,f,g){return this.rT(d,e,f,g,0,A.bq,A.cT)},
afp(d,e,f,g,h,i){return this.rT(d,e,f,g,h,A.bq,i)},
b19(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iF(new B.en(d,u,u,A.cH,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bW,new B.jd(1),u,u,h,u,A.bX,u,A.ct)
v.o3(g)
if(!v.b.a.c.gaGf())return w
w-=2}return j},
afm(d,e,f,g,h,i,j,k){return this.b19(d,e,f,g,h,i,j,k,A.bq)},
aBl(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aBk(d){return this.aBl(null,!1,d)},
ail(d,e){return this.aBl(null,d,e)},
cuI(d,e){return this.aBl(d,!1,e)},
gb3n(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXq(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pe(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afm(w.gaXq(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXq(),v,g,A.a2,v,v,v,w.az9(u,t,f,1.02,A.V),e,v,v)},
aXv(d){return this.Pe(d,A.K,null,2,78,30)},
acD(d,e,f,g,h){return this.Pe(d,e,null,f,g,h)},
c0T(d,e,f,g,h){return this.Pe(d,A.K,e,f,g,h)},
c0S(d,e,f){return this.Pe(d,A.K,null,e,f,30)},
Su(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bL
w=v.d.as
return new B.D(A.jD,B.d(s,u,g,A.a2,u,u,u,v.b1b(w,v.b19(t,w,A.cT,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b9h(d){return this.Su(d,A.K,null,3,24)},
aCP(d,e,f,g){return this.Su(d,e,null,f,g)},
cCn(d,e,f){return this.Su(d,A.K,e,3,f)},
b9i(d,e){return this.Su(d,e,null,3,24)},
cCl(d,e){return this.Su(d,A.K,null,3,e)},
cCm(d,e,f){return this.Su(d,e,null,3,f)},
asI(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f1,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qu("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
O9(){return this.asI(null,!0)},
asH(d){return this.asI(null,d)},
bIC(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bL
return new B.D(A.i9,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.ccP(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
w4(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3n(),h=A.o.aq(j.bE(B.c1(B.bB(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.iaZ(Math.max(1,B.bB(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1a(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afm(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afm(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eO,l,l,l,m.afp(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bEM(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iR,A.i,0,l,l),A.an,m.ail(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ev,B.E(B.d(i,l,1,A.eO,l,l,l,m.az8(v,u*0.9,1,A.V),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.X,B.A(B.a([B.d(C.bEM(j),l,l,l,l,l,l,m.Qu(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iR,A.i,0,l,l),A.P,m.cuI(B.b0(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb3n()
v=B.d("NGMY",l,l,l,l,l,l,m.aza(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eK(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rT(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.dp(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afp(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.dX,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l)
t=m.ail(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.az8(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.ail(!0,1.4),A.aw,B.d(C.bEM(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBk(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aza(v,u,1,3,A.V),A.K,l,l),A.P,m.ail(!0,1.2),A.aw,B.A(B.a([B.d(C.bEM(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l),A.aw,m.aBk(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adP(d){return this.w4(d,!1)},
afn(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afp("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
ccN(d,e){return this.afn(d,null,e,null)},
aZG(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.E(B.dg(v),12)===0?12:A.o.E(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.az9("Roboto",15,t,1,A.cC),r=B.X(E.aor,t,w,w,w,18),q=A.a.aA(A.oG[B.bK(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bV(v)+", "+B.bB(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h1,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
axR(){return this.aZG(A.mX)},
b6k(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afp("Roboto",this.afm(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBo(d,e,f){return this.b6k(d,e,f,30)},
aCS(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bL
return new B.D(A.wa,B.d(v,w,e,A.a2,w,w,w,this.ccO("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9m(d){return this.aCS(d,3,22)},
cCy(d,e){return this.aCS(d,e,22)},
ud(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.bZ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BA(D.bHj,w,s)
if(v==="sepia")w=new B.BA(D.bHi,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.z1,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.L,A.YJ.j(0.38)],x.O),s,s),A.n),A.bi))
return new B.a5(d,e,new B.an(A.a0,s,A.b4,A.t,v,s),s)},
qU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.p(j,B.p(j,k.ud(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.ey,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.md,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.em5,14)],x.V)
v=k.ud(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eK(A.A,-0.035,B.p(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1b(i.as,13.5,D.bhF,1.1,A.cF),A.K,j,j),j,j,j),1)],x.p),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(D.blv,j,j,j,w,j,A.n),j,e,j,j,D.bBX,j,j,d),j)
case 3:w=B.n(30)
i=B.L(B.b0(i.x),A.r,5)
return B.p(j,B.bx(B.n(25),k.ud(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.at(B.p(j,B.hR(k.ud(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a7),j,t,j,j,A.md,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.elM,10)],x.V)
return B.eK(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ac,A.f,B.a([B.bR(0,B.p(j,k.ud(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rP,j,j,j),0,0,0),B.ap(j,B.eK(A.A,-0.6,B.p(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eK(A.A,-0.6,B.p(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b4(B.nO(k.ud(d,e),A.aq,D.hrC),new C.bee(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ud(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.k.bh(s));++m){l=new B.aP(2,2)
n.push(B.p(j,j,A.f,j,j,new B.o(A.bP,j,j,new B.bg(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c6(A.aL,A.qQ,A.i,A.m,j,A.p,j,0,n,j),j))}return B.p(j,new B.an(A.a0,j,A.b4,A.t,w,j),A.f,A.em,j,j,j,e,j,j,D.bGx,j,j,d)
case 8:w=d/2
v=B.xr(A.fI,new B.aP(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.p(j,B.bx(B.xr(A.hM,new B.aP(w,w)),k.ud(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h2,22)],x.V)
return B.p(j,k.ud(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bU,j,j,d)
case 10:return new B.a5(d,e,B.nO(k.ud(d,e),A.aq,D.hzm),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.p(j,k.ud(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.ey,j,j,d)}},
aQJ(d,e){return this.d.e===D.Tb?A.bL:this.bIC(d,e)},
Xa(d){return this.aQJ(d,A.K)},
gaC8(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aC7(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1c(v.Q,19,1.15,A.cF,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qu("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afo(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.ji(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gcl5(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aai(d,e,f,g){return B.cr(new C.ciF(this,e,d,f,g))},
aah(d){return this.aai(d,22,!0,18)},
Xn(d,e){return this.aai(d,22,!0,e)},
aRM(d,e,f){return this.aai(d,22,e,f)},
bKB(d,e,f){return this.aai(d,e,!0,f)},
bcl(d,e,f,g){return B.cr(new C.ciG(this,e,d,g,!0,f))},
cjT(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adP(824),A.aC,k.aXv(824),k.b9h(824),A.P,k.O9(),A.af,B.at(k.qU(824,360),j,j,j),k.Xa(824),A.af,B.E(k.aah(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adP(824),A.aR,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acD(440,A.bk,3,62,26),k.aCP(440,A.bk,2,20),A.b3,k.asI(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Ke,B.x(B.a([k.qU(362,310),k.Xa(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.X,k.aBk(2),A.af,B.E(k.aah(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.w4(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c0T(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cCn(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Ce,j,j,j)
u=B.a([B.at(k.qU(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tb){h=A.w.j(0.65)
u.push(B.ap(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.az9(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ac,A.t,u,j),A.P,k.O9(),A.X,B.E(k.Xn(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.w4(824,!0)
w=k.qU(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b7,j,A.ac,A.t,B.a([w,B.ap(0,B.p(j,k.Pe(780,A.bk,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b1,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bEK,j,j,j),j,j,0,0,j,j)],u),j),k.b9i(824,A.bk),A.P,k.O9(),A.X,B.E(k.aah(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adP(824),A.aC,k.aXv(824),k.b9h(824),A.P,k.O9(),A.af,B.E(k.bcl(3,300,B.x(B.a([k.qU(300,300),k.Xa(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.w4(824,!0)
v=x.p
u=B.x(B.a([k.acD(440,A.bk,3,62,26),k.aCP(440,A.bk,2,20),A.b3,k.asH(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.by,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aT9,new B.D(A.i9,k.qU(364,h.e===D.Tb?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aC,B.E(k.Xn(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adP(824),A.af,k.c0S(824,2,70),k.cCl(824,21),A.P,k.O9(),A.af,B.E(k.bcl(3,340,B.at(k.qU(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.w4(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bEM(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qu(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aC],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1c(h.Q,24,1.15,A.cF,A.V),j,j,j))
v.push(A.b3)
if(k.gaC8())v.push(k.aC7(230,250))
return B.x(B.a([w,A.aC,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.al5,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acD(570,A.bk,3,62,28),k.cCm(570,A.bk,20),A.P,k.asH(!1),A.P,B.at(k.qU(570,330),j,j,j),k.Xa(570),A.X,B.E(k.aRM(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.w4(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qu(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.p(j,B.x(B.a([t,A.an,k.Pe(788,A.bk,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bD1,j,j,j),k.b9i(824,A.bk),A.X,B.at(k.qU(824,310),j,j,j),k.Xa(824),A.P,k.O9(),A.X,B.E(k.aah(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w4(824,!0),A.aR,new B.an(A.a0,j,A.ac,A.t,B.a([k.qU(824,430),B.ap(18,k.ccN(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.aBo(824,3,66),k.b9m(824),A.af,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.axR(),A.aC,B.E(k.Xn(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w4(824,!0),A.by,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afn(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6k(410,4,58,28),k.aCS(410,6,20),A.b3],w),A.E,j,A.e,A.i,0,A.p),j),V.aTa,k.qU(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aC,k.axR(),A.aR,B.E(k.Xn(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.w4(824,!0)
v=k.qU(824,420)
u=B.hOa(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ac,A.t,B.a([v,B.ap(22,B.fw(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.ccQ(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bF_,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.aBo(824,3,62),k.b9m(824),A.af,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.aZG(A.lO),A.aC,B.E(k.Xn(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w4(824,!0)
u=h.w
t=x.p
w=B.a([k.qU(824,380),B.ap(j,k.afn(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBo(824,2,60)
r=k.cCy(824,2)
p=k.axR()
o=B.E(k.aRM(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ac,A.t,w,j),A.aR,s,r,A.X,p,A.aC,o,A.af,B.p(j,B.A(B.a([B.bx(B.n(14),k.ud(150,104),A.aq),A.oR,B.E(B.x(B.a([k.afn("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.az8(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.O,0,A.p),1),B.X(A.eG,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.w4(824,!0),A.by,k.acD(824,A.bk,3,62,30),k.aCP(824,A.bk,2,22),A.X,k.asH(!1),A.X,B.at(k.qU(824,330),j,j,j),k.aQJ(824,A.bk),A.aR,B.E(k.bKB(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.o(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bi),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.baI(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bFw,B.x(B.a([B.E(t.cjT(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fK,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1a(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qu(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iR,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dx(!0,B.b4(s,s,s,new C.btH(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hR(B.fR(q,A.A,s,s,A.cj,A.bZ,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mX,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aza(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.dx(!0,B.da(B.p(s,B.A(o,A.m,s,A.e,A.O,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bGG,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.ji(new B.an(A.a0,s,A.ac,A.t,n,s),A.t,s),s)}}
C.bef.prototype={
js(d){return C.hsa(d)},
k9(d){return!1}}
C.bee.prototype={
a4(d,e){var w,v=C.hsa(e)
$.S()
w=B.K()
w.r=this.b.gp(0)
w.b=A.aa
w.c=6
return d.ae(v,w)},
aC(d){return!d.b.A(0,this.b)}}
C.bwd.prototype={
js(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.d_(3)
w=$.S()
v=B.a([],x.v)
u=new B.aE(w.r,A.ah,null,null,v)
u.D(new B.aY(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.ai(r)
u.a8()}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.ai(p)
u.a8()}u.D(new B.aq(0,r))
u.D(new B.bt())
return u},
k9(d){return!1}}
C.baI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e4()
o.d_(7)
$.S()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.aj()*0.07).gp(0)
d.N(new B.q(o.aj()*u,o.aj()*t),0.4+o.aj()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.q(o.aj()*u,o.aj()*t)
q=50+o.aj()*90
w.sar(new B.c_(A.A,0.5,A.x,p,0,B.a([A.Yd.j(0.13),A.L],v),p,p).aG(0,B.bX(r,q)))
d.N(r,q,w)}w.sar(p)},
aC(d){return!1}}
C.btH.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fv(u,A.ct,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bW,u,A.dD,A.bX)
s.ef()
w=d.c
J.bq(w.save())
w.translate(t/2,e.b*0.52)
d.ir(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.q(-v/2,-t.gba(t)/2))
w.restore()},
aC(d){return!d.b.A(0,this.b)}}
C.WN.prototype={
S(){return new C.aFB()}}
C.aFB.prototype={
Y(){var w=this
w.a3()
B.fGt(w.a.c,null).bJ(new C.et9(),x.g7).bJ(new C.eta(w),x.a)
w.a.toString},
gaPv(){var w=D.az4[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazb(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPv()
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
q=A.k.F(v*p,q,p-q)-q
w=A.k.F(u*o,w,o-w)-w
return new B.a2(q,w,q+s,w+t)},
a_M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.esX(r))
t=4
q=r.gazb()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.pW(new B.pv())
m=B.zl(n,null)
i=B.K()
i.z=A.hc
m.q0(g,q,new B.a2(0,0,0+p,0+o),i)
w=7
return B.b(n.nZ().xA(J.hhu(p),J.hhu(o)),$async$a_M)
case 7:l=e
w=8
return B.b(l.hs(A.he),$async$a_M)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eQ(J.vQ(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.esY(r))
r.c.L(x.q).f.U(D.fhg)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_M,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.lm,s,s,s,new C.et3(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bM(!1,D.fWb,s,s,!0,s,s,s,t.y||r==null?s:t.gccR(),s,s)],p),s,s,!0,!0,A.BU,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h_d,s,s,s,1,s,!0)
if(r==null)p=A.m0
else{w=B.E(new B.D(A.bR,B.at(new B.fF(t.gaPv(),B.cr(new C.et4(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iK,B.js(s,s,s,B.d(D.az4[u].a,s,s,s,s,s,s,A.aaH,s,s,s),s,new C.et5(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cj(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZc,B.E(B.kT(s,s,s,6,1,new C.et6(t),t.f),1),D.bYN],p),A.m,s,A.e,A.i,0,s,s),D.fTr,A.an,B.bM(!1,D.fT9,s,s,!0,s,s,s,new C.et7(t,d),s,s)],p),A.m,s,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.YZ,s,s,s,s,s,s,D.bCn,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c5(q,A.BU,p,s,!1,!1,s,s)}}
C.bdN.prototype={
a4(d,e){var w
$.S()
w=B.K()
w.z=A.cj
return d.q0(this.b,this.c,new B.a2(0,0,0+e.a,0+e.b),w)},
aC(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0V.prototype={
S(){var w=$.aw(),v=x.A
return new C.aH_(new B.au(A.au,w),new B.au(new B.ba("NGMY",A.b5,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a5V),"quote"+1000*Date.now(),B.a([],x.t),B.aS(x.S),A.K)}}
C.oQ.prototype={}
C.aH_.prototype={
gaXE(){var w,v,u=this
if(u.p1)w=new B.w5(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.F(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.f20(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Zn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.re().jn(0,"assets/images/ngmy_logo.png"),$async$Zn)
case 7:q=e
p=J.eQ(J.vQ(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFw(new B.q5(p,1),o),$async$Zn)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f0T(r,p))
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
return B.i($async$Zn,v)},
Qx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l8(92,1800,A.eN),$async$Qx)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Qx)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFw(new B.q5(p,1),n),$async$Qx)
case 9:if(r.c==null){w=1
break}r.m(new C.f1g(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qx,v)},
b5H(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aI=w.aQ=w.aL=w.aH=w.a_=w.bb=w.bn=w.y2=0
w.b7=null
w.b6=0.25
w.bf=null
w.bI=0.5
w.aP=1
w.c9=w.bF=w.bm=0
w.cO=w.c6=!1},
aZq(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCa(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.drq)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCa(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCa(C.hcb(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCa(C.hcb(1-a0*0.5,n,n,n),w)}return a1?C.bCa(C.hcb(-1,255,255,255),w):w},
aCY(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xy(u,v,w)
this.dx.pv(new C.f1q(t),!0)
return t},
b8g(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aCY()
w=C.ild(e.d.a.a,e.db)
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
return C.ihF(d,k,v,a0,j,e.gaXE(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAb(){return this.b8g(null)},
DH(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmR(),$async$DH)
case 3:w=4
return B.b(B.bQ(A.eS,null,x.H),$async$DH)
case 4:w=5
return B.b($.aV.gmR(),$async$DH)
case 5:s=$.aV.ao$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qf)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DH)
case 7:w=6
return B.b(e.hs(A.he),$async$DH)
case 6:q=e
u=q==null?null:J.eQ(A.dM.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DH,v)},
abc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0C(q))
t=4
w=7
return B.b(q.DH(),$async$abc)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cO.gcu().aM(p)
n=C.Cg(null,null,null,null,D.oK,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8g(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f0D(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abc,v)},
B0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0A(q))
t=4
w=7
return B.b($.aV.gmR(),$async$B0)
case 7:w=8
return B.b(B.bQ(A.nw,null,x.H),$async$B0)
case 8:w=9
return B.b($.aV.gmR(),$async$B0)
case 9:k=$.aV.ao$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qf))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B0)
case 10:o=e
w=11
return B.b(o.hs(A.he),$async$B0)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.ahi(J.eQ(A.dM.gaU(n)),"ngmy_quote.png","image/png"),$async$B0)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f0B(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B0,v)},
cn1(){var w=this.p4
w.toString
return B.cr(new C.f19(this,w))},
b1j(d,e){var w=null
return B.bs(w,w,w,w,w,D.fs4,w,w,!0,new B.b6(4,B.n(16),Q.vM),w,w,w,w,w,D.u5,!0,w,w,w,w,new B.b6(4,B.n(16),D.b4H),w,w,w,w,w,w,w,w,Ad.EG,e,w,w,w,w,w,w,w,D.fxE,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yw(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b8,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aVS,w,w,w))
return new B.D(H.akW,B.A(u,A.m,w,A.e,A.i,0,w,w),w)},
b1i(d,e){var w=null,v=B.n(18),u=B.L(A.bB,A.r,1)
return B.p(w,B.aI(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k8),A.f,w,w,new B.o(D.u5,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wb(d){return this.b1i(d,A.bE)},
ov(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uW:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.L(f?A.L:A.bB,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jV,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jV,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cV(r,B.A(s,A.m,r,A.e,A.O,0,r,r),r,r,A.b6,new B.o(w,r,u,v,r,p,A.n),A.h8,r,r,r,r,A.GG,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahi(d,e,f){return this.ov(d,null,e,f)},
azf(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eI:A.bB,s=x.p
v=B.a([B.cV(w,d,w,w,A.b6,new B.o(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h8,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a5(j,w,B.x(v,A.m,w,A.e,A.O,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1m(d,e,f,g,h,i){return this.azf(d,e,f,g,h,5,i)},
kz(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aUF,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.eqq,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1m(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aUU,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a0y,u,u,u))
s=B.A(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.awH(w).cOY(A.b8,A.bB,A.b8.j(0.2),A.c,D.f6R,4)
return new B.D(A.yw,B.x(B.a([s,B.aaU(B.kT(u,u,u,g,f,new C.f1n(this,h),A.k.F(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
ajl(d,e,f,g,h,i){return this.kz(d,e,f,g,h,null,i)},
ajK(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dt:B.b0(u)
r=d==u
q=r?A.c:A.aW
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bS4:o
n.push(B.aA(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bG(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f1p(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bH,n,A.bt,o,10,10)},
bOJ(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5V
else{v=x.a8
w=B.C(new B.Y(D.a5V,new C.f0s(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b1j("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f0t(o),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.ab_,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b1j("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f0u(o),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.dh,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yw("DESIGNS",A.uG)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d0y[q]
r.push(new B.D(A.iK,o.ahi(p,o.x===p,new C.f0v(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.cg(B.A(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hN(n,new C.f0w(o,w),w.length,n,n,A.aL,new C.f0x(),!1),n),A.P,o.b1i(B.x(B.a([B.iO(A.b8,n,n,A.ag,!0,new C.f0y(o),n,D.fKg,n,D.fGr,o.k3),B.iO(A.b8,n,n,A.ag,!0,new C.f0z(o),n,n,n,D.fDC,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.alw)],s),A.E,n,A.e,A.i,0,A.p)},
cJ8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aCY()
if(a7.length===0)return a5.wb(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KC,a6,a6,a6))
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
m=B.C(u,B.a4(u).k("co.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cM(m,new C.f1Q(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f1X(a5)
j=new C.f1Z()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KC,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eI:A.bB
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aA(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.p(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bG(d,d,d,d),new B.bg(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Oh,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f1R(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wb(B.bW(A.bH,o,A.vG,a6,6,6))
i=B.a([a5.ov("All words",K.aq_,!1,new C.f1S(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahi("Sentence "+a3,!1,new C.f1T(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahi("Clear picks",!1,new C.f1U(a5)))
i=B.bW(A.bH,i,A.bt,a6,8,8)
g=a5.yw("SIZE OF THE PICKED WORDS",D.apr)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dxx[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f1V(e,k)
f.push(a5.ahi(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bW(A.bH,f,A.bt,a6,8,8),A.X,a5.ov("Make every word normal",A.k5,!1,new C.f1W(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cE4(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bI0,B.d(A.d.fe(D.aAT,new C.f1z(q)).b,p,p,p,p,p,p,D.fqs,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cr(new C.f1A(q)),l=q.yw("HIGHLIGHT BEHIND THE WORDS",A.a2s),k=q.p1?-1:q.k4
k=q.ajK(k,new C.f1B(q),D.dbP)
w=q.p1
v=w?A.c:A.aW
n=B.a([n,A.X,m,l,B.bW(A.bH,B.a([k,B.aA(p,B.p(p,D.bV3,A.f,p,p,new B.o(p,p,B.L(v,A.r,w?3:1),p,p,D.fjT,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f1E(q),p,p,p,p,p,p,!1,A.a4)],o),A.vG,p,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KC,p,p,p)],o)
if(q.gaXE()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajl("Colour",l,0,360,new C.f1F(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajl("Shade",k,0.15,0.9,new C.f1G(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kz("Strength",l,0.15,1,new C.f1H(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.wb(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.yw("LOOK",A.wJ))
m=B.a([q.ov("Bold",I.app,q.fy,new C.f1I(q)),q.ov("Italic",I.apq,q.go,new C.f1J(q))],o)
for(u=0;u<3;++u){l={}
k=D.d1M[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uW:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bB,1,A.r,-1)
m.push(B.aA(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bG(r,r,r,r),new B.bg(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f1K(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bH,m,A.vG,p,8,8))
n.push(q.yw("COLOUR",A.mf))
n.push(q.ajK(q.fx,new C.f1L(q),D.dnK))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KC,p,p,p))
n.push(q.yw("SIZE AND PLACE",A.HF))
m=q.fr
m=q.kz("Text size",m,0.5,1.6,new C.f1C(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.wb(B.x(B.a([m,q.kz("Up / down",l,0.12,0.5,new C.f1D(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cn2(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.n(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bF.j(0.12)],x.O)
return B.aA(q,B.p(q,B.x(B.a([B.p(q,D.c_G,A.f,q,q,D.b7E,q,62,q,q,q,q,q,62),A.aC,D.fHI,A.an,D.fMw],x.p),A.m,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(D.u5,q,v,w,q,new B.a9(A.a6,A.a9,A.x,u,q,q),A.n),q,q,q,q,D.bDB,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1l(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bx(B.n(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.cj,A.bZ,!1,q,!1,q,q),q),A.aq),A.be,B.E(B.x(B.a([D.fHe,A.P,B.bW(A.bH,B.a([r.ov("Change",A.jJ,!1,r.gb1l()),r.ov("Remove",A.ef,!1,new C.f1d(r))],w),A.bt,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.m,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.djU[t]
u.push(r.ov(s.b,s.a,r.at===t,new C.f1e(r,t)))}u=B.bW(A.bH,u,A.bt,q,8,8)
switch(r.at){case 0:s=r.c50(p)
break
case 1:s=r.c3W()
break
case 2:s=r.bKA()
break
case 3:s=r.bR1()
break
default:s=r.bMG()
break}return B.x(B.a([v,A.af,u,A.aC,s,A.X,new B.bL(A.a6,q,q,r.ov("Reset the whole picture",A.k5,!1,new C.f1f(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c50(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bH,B.a([w.ov("Auto enhance",E.a25,!1,new C.f15(w)),w.ov("Make words easy to read",A.pr,!1,new C.f16(w))],v),A.bt,null,8,8),A.aC,B.cr(new C.f17(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c3W(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kz("Exposure",n,-1.5,1.5,new C.f0K(o),0,A.k.ad(n,1))
w=o.RG
w=o.kz("Brightness",w,-0.5,0.5,new C.f0L(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kz("Contrast",v,0.4,2,new C.f0M(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kz("Fade",u,0,1,new C.f0N(o),0,""+A.k.V(u*100))
t=o.aL
t=o.kz("Spotlight",t,0,1,new C.f0O(o),0,""+A.k.V(t*100))
s=o.a_
s=o.kz("Darken",s,0,0.85,new C.f0P(o),0,""+A.k.V(s*100))
r=o.bb
r=o.kz("Vignette",r,0,0.9,new C.f0Q(o),0,""+A.k.V(r*100))
q=o.aI
q=o.kz("Shade behind words",q,0,0.85,new C.f0R(o),0,""+A.k.V(q*100))
p=o.aQ
return o.wb(B.x(B.a([n,w,v,u,t,s,r,q,o.kz("Shade top & bottom",p,0,0.85,new C.f0S(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bKA(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kz("Colour strength",q,0,2.2,new C.f05(s),1,""+A.k.V(q*100))
w=s.to
w=s.kz("Warmth",w,-1,1,new C.f06(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kz("Tint",v,-1,1,new C.f07(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.wb(B.x(B.a([q,w,v,s.kz("Shift colours",u,-180,180,new C.f08(s),0,""+A.k.V(u)+"\xb0"),new B.bL(A.a6,r,r,s.ov("Negative",D.bQ2,s.y1,new C.f09(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.yw("COLOUR WASH",A.Ph)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azt)
t=B.a([u,v,s.ajK(w,new C.f0a(s),q),A.P],t)
if(s.b7!=null){q=s.b6
t.push(s.wb(s.ajl("Wash strength",q,0,0.9,new C.f0b(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bR1(){var w,v,u,t,s,r=this,q=r.y2
q=r.kz("Blur",q,0,24,new C.f0E(r),0,A.o.u(A.k.V(q)))
w=r.bn
w=r.kz("Soft focus",w,0,1,new C.f0F(r),0,""+A.k.V(w*100))
v=r.aH
u=x.p
v=r.wb(B.x(B.a([q,w,r.kz("Film grain",v,0,1,new C.f0G(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.yw("LIGHT LEAK",D.bPL)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azt,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajK(q,new C.f0H(r),t),A.P],u)
if(r.bf!=null){q=r.bI
u.push(r.wb(r.ajl("Leak strength",q,0,1,new C.f0I(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bMG(){var w,v,u,t,s=this,r=s.aP
r=s.kz("Zoom",r,1,3,new C.f0f(s),1,""+A.k.V(r*100)+"%")
w=s.bm
w=s.kz("Left / right",w,-1,1,new C.f0g(s),0,""+A.k.V(w*100))
v=s.bF
v=s.kz("Up / down",v,-1,1,new C.f0h(s),0,""+A.k.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.wb(B.x(B.a([r,w,v,s.kz("Turn",u,-180,180,new C.f0i(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.X,B.bW(A.bH,B.a([s.ov("Turn 90\xb0",H.aqs,!1,new C.f0j(s)),s.ov("Flip sideways",A.CJ,s.c6,new C.f0k(s)),s.ov("Flip upside down",A.CJ,s.cO,new C.f0l(s))],t),A.bt,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c7J(){var w=null,v=B.n(22),u=B.L(A.bB,A.r,1)
return B.p(w,B.x(B.a([D.f72,A.X,D.fJh,A.aC,B.aA(w,B.p(A.A,D.f7g,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uW,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f18(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.u5,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c4O(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f10(p),m=x.p,l=B.A(B.a([D.bI6,p.ov("Reset",A.k5,!1,new C.f0X(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KC,o,o,o),j=p.yw("SHAPE",A.aqp),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Df[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1m(n.$2(t,p.cy),62,u.b,s===t,new C.f0Y(v,p),62))}}i=B.bW(A.bH,i,A.bt,o,8,8)
v=p.yw("RING",A.pj)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.D8[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1m(n.$2(p.cx,t),62,r.b,q===t,new C.f0Z(s,p),62))}u=B.bW(A.bH,u,A.bt,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.af,p.wb(p.kz("Size",s,0.12,0.4,new C.f1_(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4k(d){return new B.a5(null,d,new B.fF(0.5625,B.cr(new C.f1j(this)),null),null)},
cDi(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.L(A.bB,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uW:q
t=new B.aP(14,14)
s=D.dm8[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.by(1,A.bc,B.aA(A.c5,B.cV(q,B.x(B.a([r,A.cU,new B.qF(A.e5,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.m,q,A.e,A.O,0,A.p),q,q,A.b6,new B.o(q,q,q,new B.bg(t,t,t,t),q,u,A.n),D.bz6,q,q,q,q,A.hE,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1s(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.A(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bBf,A.md,q,q,q)},
aSk(){var w,v,u=this,t=null,s=u.cDi()
switch(u.as){case 0:w=u.bOJ()
break
case 1:w=u.cJ8()
break
case 2:w=u.cE4()
break
case 3:w=u.cn2()
break
case 4:w=u.c4O()
break
default:w=u.c7J()
break}v=x.p
return B.bx(A.tK,B.e8(B.x(B.a([s,B.E(B.cj(B.a([w],v),t,t,D.bCo,t,t,A.ai,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.YZ,!0),A.aq)},
aOp(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdh(),p=B.n(16)
q=B.E(B.aA(r,B.p(r,D.f7r,A.f,r,r,new B.o(A.c.j(0.08),r,B.L(A.aW,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbQA()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bF.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fdt)
else t.push(D.bU9)
t.push(A.ae)
t.push(D.bKx)
return B.p(r,B.A(B.a([q,A.at,B.E(B.aA(r,B.p(r,B.A(t,A.m,r,A.ba,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uW,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b6L,r,r,r,r,G.alm,r,r,r)},
b1k(){var w=null
return new B.D(U.a0t,B.A(B.a([B.aG(w,w,w,w,A.mZ,w,w,w,new C.f0J(this),w,w,w,w,w,w),D.fZ6,A.b3,D.c2_],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c5(w,A.BU,B.bm(!0,B.cr(new C.f2_(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bho.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e4()
n.d_(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.S()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.aj()*w
p=n.aj()*v
o=(q&1)===0?t:r
d.au(new B.a2(s,p,s+1.1,p+1.1),o)}},
aC(d){return d.b!==this.b}}
C.rS.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.ml.prototype={}
C.A4.prototype={
ak(){var w=this
return B.H(["at",w.a.ab().af(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o3.prototype={}
C.wp.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a8S.prototype={}
C.asu.prototype={}
C.a1r.prototype={
S(){return new C.aIV(new B.au(A.au,$.aw()),B.k6(!0,null,!0,!0,null,null,!1),D.dNL,B.a([],x.s),B.ey([D.Jd],x.Q))}}
C.aIV.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a2()},
a17(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a17=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().CD(90,700,700,A.eN),$async$a17)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a17)
case 8:p=e
if(r.c!=null)r.m(new C.f8n(r,p,q))
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
return B.i($async$a17,v)},
a1a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aJv(78,n,1100,1100),$async$a1a)
case 7:q=e
if(J.cq(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aX(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1a)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.c8(p,"data:"+k+";base64,"+A.cO.gcu().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f8o(r,p))
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
return B.i($async$a1a,v)},
b6j(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cG.aM(A.d.gal(d.split(","))),A.A,u,u,A.cj,A.bZ,!0,u,!1,u,u)
return w}catch(v){}return D.bxg},
c4V(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cyR(C.fNu(w,this.b6j(d),f),g)},
ady(d,e,f,g,h){var w=null,v=new C.f8l(f,e),u=new C.f8m(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.L(p?A.bB:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ac,A.f,B.a([B.at(B.X(f?A.zf:A.P5,A.bV,w,w,w,26),w,w,w),D.ewF],x.p),w),w)
else p=this.c4V(g,v.$1(h),u.$1(h),34)
return B.aI(!1,A.a3,!0,s,B.aO(!1,r,!0,B.p(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bTR],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8k(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZw(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.n(8),B.fR(A.cG.aM(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bZ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.L(n?A.bB:A.bg.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KI,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.PS,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aI(!1,A.a3,!0,u,B.aO(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.ks,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9B(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9B=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fQW(),$async$a9B)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f83(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f84(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9B,v)},
afx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afx=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f86(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f87(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f88(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c8(p,h)}w=7
return B.b(C.fMc(q,r.cx,j,new C.b30(r.z,r.Q,r.as,r.at),new C.f89(r),i,m,p,k),$async$afx)
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
n=B.ab(e)
if(r.c!=null)r.m(new C.f8a(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eP,g).w
g=B.aH(d,A.c_,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aW,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.p(h,D.bX9,A.f,h,h,new B.o(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bg.j(0.5),A.I,24)],v),D.c68,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8B(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.PS,h,h,h,i.ax?h:new C.f8C(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbFv()
v=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.I,10)],v)
s.push(B.hb(B.aI(!1,A.a3,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.wx:A.hF,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wP,A.a7),h,40,h,h,h,h,h,40),A.cQ,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cQ,h,h,A.aj),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.O,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.n(16),D.b4e),h,h,h,h,h,h,h,h,Y.Ey,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iK,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ab,h,h,h,h,h,h,h,h,h,h,h,D.aVi,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f8D(i)
s=i.aZw(A.lk,q,r,i.gcnu(),s)
r=i.z
r=B.E(i.ady(new C.f8F(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.an,B.A(B.a([r,A.bn,B.E(i.ady(new C.f8G(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f8H(i)
s=i.aZw(A.uB,r,p,i.gcnC(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.ady(new C.f8I(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aC,D.fNQ,A.aw,D.fQJ,A.by,u,A.P,D.fP6,A.aC,v,A.by,B.A(B.a([q,A.at,B.E(B.x(B.a([s,A.an,B.A(B.a([p,A.bn,B.E(i.ady(new C.f8J(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.an,D.fSB],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.L(D.boN,A.r,1)
w=C.ahP(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bL(A.a6,h,h,B.p(h,B.A(B.a([D.bYg,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fwg,h,h,h),B.aO(!1,h,!0,D.eqG,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f8K(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.O,0,h,h),A.f,h,h,new B.o(D.bgO,h,u,v,h,h,A.n),h,h,h,h,D.bAV,h,h,h),h)],t))}o.push(A.by)
o.push(D.fEl)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.de1[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bB,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.by(1,A.bc,new B.D(A.jE,B.aA(h,B.cV(A.A,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b6,new B.o(v,h,new B.bG(k,k,k,k),h,h,h,A.a7),A.eJ,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8L(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.by)
o.push(D.fXk)
o.push(A.P)
o.push(B.cr(new C.f8M(i)))
o.push(A.by)
o.push(D.fLT)
o.push(A.P)
w=B.a([i.b9f("auto","Let AI choose",A.e9,A.RY)],t)
for(v=x.O,m=0;m<11;++m){j=D.wT[m]
u=j.d
w.push(i.b9f(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bW(A.bH,w,A.bt,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.L(i.r?A.bg.j(0.5):A.bB,A.r,1)
o.push(B.p(h,B.iO(h,A.bg,h,h,h,new C.f8E(i),D.bTj,D.fWz,h,D.fGI,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aC,B.d(w,h,h,h,h,h,h,D.aUq,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gcdl()
v=B.fr(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.n(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fdj:A.HS
o.push(new B.a5(h,54,B.lO(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nS,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cg(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wk,h,h,A.ai),!0,!1,A.ag,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.aeb,h,h,h,h,h,h,h,h),h)},
bSi(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f8b(this,p,d)
if(d===D.DV)return new C.aFs(p,o,q)
w=B.n(16)
v=p?E.wP:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bB,A.r,1)
s=B.X(p?A.ea:C.hVc(d),A.c,q,q,q,20)
r=C.hVd(d)
return B.aA(q,B.cV(q,B.x(B.a([s,A.aw,B.eH(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e5)],x.p),A.m,q,A.ba,A.i,0,A.p),q,q,A.b6,new B.o(u,q,t,w,q,v,A.n),A.h8,q,64,q,q,A.hT,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9f(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bB
r=B.L(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a6,A.a9,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cV(v,B.A(B.a([w,Z.Eu,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.O,0,v,v),v,v,A.b6,new B.o(s,v,r,t,v,v,A.n),A.eJ,v,v,v,v,P.amF,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8q(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1q.prototype={
S(){return new C.aIU(new B.au(A.au,$.aw()))}}
C.aIU.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
afy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afy=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f7X(r))
w=1
break}B.eW()
r.m(new C.f7Y(r))
t=4
q=C.im8(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ilT(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f7Z(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hbQ()
f=$.Df.h(0,k.a)
o=f==null||J.cq(f)?null:J.fq(f)
if(o==null){r.m(new C.f8_(r))
w=1
break}n=C.ilR(o,r.a.c)
C.ilN(r.a.c.a)
$.hb4=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.heL(j)
h=C.heM(r.a.c)
e=C.heN(r.a.c)
w=7
return B.b(C.bEq(k,r.a.c.a,j,h,new C.f80(r),i,e,a0),$async$afy)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f81(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afy,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eP,i).w
i=B.aH(d,A.c_,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aW,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.aqJ,A.f,j,j,D.b6q,j,34,j,j,j,j,j,34),A.at,D.bIJ],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaE,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.n(16),Aw.adC),j,j,j,j,j,j,j,j,Y.Ey,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,D.aVi,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.da8[q]
o=B.d(p,j,j,j,j,j,j,AC.Vl,j,j,j)
n=A.c.j(0.06)
r.push(B.mZ(j,n,o,j,k.e?j:new C.f82(k,p),j,j,Q.vM,j))}w=B.a([w,A.aC,u,A.an,t,A.aC,s,A.X,B.bW(A.bH,r,A.bt,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUq,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gcdm()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bg.j(0.5),A.en.j(0.5)],x.O):D.cHV
o=B.a([new B.ac(0,A.G,A.bg.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.eqC:D.bXQ
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aI(!1,A.a3,!0,j,B.aO(!1,s,!0,B.eI(B.A(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hz,j,j,j)],v),A.m,j,A.ba,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a6,A.a9,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cg(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wk,j,j,A.ai),!0,!1,A.ag,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.aeb,j,j,j,j,j,j,j,j),j)}}
C.b30.prototype={}
C.aFs.prototype={
S(){return new C.bm9(null,null)}}
C.bm9.prototype={
gazg(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qq,null,1,null,v)
w.cP(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazg().t()
this.bzh()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazg(),new C.eoQ(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bjG.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dgt[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=D.yk.j(0.25+s*0.6).gp(0)
d.N(new B.q(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.q(q-o,r),new B.q(q+o,r+0),p)
d.ah(new B.q(q,r-o),new B.q(q+0,r+o),p)}}},
aC(d){return d.b!==this.b}}
C.at1.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a_O.prototype={
S(){return new C.aCY()}}
C.aCY.prototype={
gajH(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ai1(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAK(){var w=this.e
return w===$?this.e=C.heL(this.a.c).q(0,D.DV):w},
a9o(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9o=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.ds3(s))
u=3
r=A.d.fe(D.wT,new C.ds4(s))
q=B.d4(C.heL(s.a.c),x.Q)
l=q
J.hq(l,D.DV)
p=l
if(s.gAK())J.c8(p,D.DV)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAK()?" with Luxury FX":""
i=s.a
h=i.d
i=C.heM(i.c)
g=C.heN(s.a.c)
w=6
return B.b(C.bEq(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9o)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ai1(q,s.gajH())
f=q==null?null:q.b
n=f==null?s.gajH():f
if(!J.z(n,r.a)&&!s.gAK())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.ds5(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9o,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.c:A.R,k=m?A.aS:A.am,j=m?A.R:A.c,i=B.n(28),h=B.L(m?A.bB:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.ds8(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wT[w]
u=o.gajH()
t=o.f?n:new C.ds9(o,v)
f.push(new C.buP(v,u===v.a,t,n))}f=B.kS(1.25,f,3,10,10,n,A.dU,!0)
u=B.n(18)
t=o.gAK()?D.c8W:n
if(o.gAK())s=n
else s=m?A.bp:A.bO
r=B.X(A.e9,o.gAK()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAK()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAK()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAK()
f=B.a([f,A.aC,B.p(n,B.A(B.a([r,A.at,q,B.b8F(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dsa(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,O.alo,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fwA,n,n,n)],g))
f=B.cg(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GN,n,n,A.ai)
u=o.f?n:o.gbEu()
t=B.bn(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.n(16),A.a1),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bE4,e,n),new B.dp(1,A.co,f,n),new B.D(A.GM,new B.a5(1/0,50,B.bH(B.eI(B.at(o.f?A.ts:D.fOj,n,n,n),n,new B.o(n,n,n,s,n,D.c7u,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.O,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.up,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.buP.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bL(A.lx,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bL(A.ly,w,w,B.d(v.b,w,w,w,w,w,w,D.fwx,w,w,w),w)],x.p)
if(q)v.push(D.b1q)
return B.aA(w,B.cV(w,new B.an(A.a0,w,A.ac,A.t,v,w),w,w,A.b6,new B.o(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eJ,w,w,w,w,A.cl,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eoN.prototype={
aH2(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
x9(d,e){return this.aH2(0,e,null)}}
C.aNx.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.b2X.prototype={
B(d){var w,v,u=null,t=C.hdA(this.c)
if(t==null)w=D.bvJ
else{w=B.aH(d,u,x.w).w.cOp(D.bAq,D.fct)
v=this.d
w=B.q4(new B.dx(!v,B.apa(!1,t,!1,v,!1,390),u),w)}return B.eH(A.A,new B.a5(416,870,new C.bnK(w,u),u),A.f,A.dC)}}
C.bnK.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dtb[w]
u=new B.aP(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.asG,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dux[w]
u=new B.aP(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.asG,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.o(t,t,t,B.n(64),D.d_4,D.c5Q,A.n),A.bi),0,0,0))
s.push(B.bR(3,B.c3(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bi),3,3,3))
s.push(B.bR(13,B.bx(B.n(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ap(t,B.at(B.p(D.b1B,B.p(t,t,A.f,t,t,D.b6J,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dx(!0,B.bx(B.n(51),D.bxm,A.aq),t),13,13,13))
s.push(B.ap(22,new B.dx(!0,B.at(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ac,A.f,s,t)}}
C.ls.prototype={
pU(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bq,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bj,j,2,"Your Presentation Title",0,0,"",D.n2,D.cX,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bq,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bj,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dk,D.cX,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rT(i,l,0,0,B.a([f,w,C.er(A.bk,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bq,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fH,t.l(),3,"",0,0,"",D.cp,D.fg,0.3,0.35,0.72)],s),C.cD(),D.n1,"","","Welcome",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,34,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Agenda",0,0,"",D.cp,D.cX,0.84,0.08,0.08)
w=C.cD()
w=C.rT(i,l,0,0,B.a([u,C.er(A.bk,!0,v.l(),A.aG,"",k,22,A.bq,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bj,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vd,D.cX,0.8,0.1,0.26)],s),C.cD(),D.n1,"","","Agenda",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,32,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Main Idea",0,0,"",D.cp,D.cX,0.84,0.08,0.08)
f=C.cD()
f=C.rT(i,l,0,0,B.a([u,C.er(A.bk,!0,v.l(),A.aG,"",k,21,A.bq,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bj,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cp,D.cX,0.8,0.1,0.26)],s),C.cD(),D.n1,"","","Key Point 1",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,30,A.bq,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bj,j,2,"Compare & Contrast",0,0,"",D.cp,D.cX,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bk,!0,v.l(),A.aG,"",k,18,A.bq,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bj,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cp,D.cX,0.4,0.08,0.24)
q=C.cD()
q=C.rT(i,l,0,0,B.a([u,r,C.er(A.bk,!0,v.l(),A.aG,"",k,18,A.bq,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bj,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cp,D.cX,0.4,0.52,0.24)],s),C.cD(),D.n1,"","","Key Point 2",D.dk)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bq,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bj,j,2,h,0,0,"",D.dk,D.cX,0.8,0.1,0.32)
e=C.cD()
p=C.Cg(l,l,l,l,D.DR,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rT(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bq,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bj,j,2,"Questions?",0,0,"",D.cp,D.cX,0.7,0.15,0.58)],s),C.cD(),D.n1,"","",h,D.dk)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fk.prototype={
ai(d){return this.e.$1(d)}}
C.ev.prototype={}
C.j8.prototype={}
C.Fb.prototype={
gaN0(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahP(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4y(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fb(v,u,t,d==null?w.d:d)},
G9(d){return this.a4y(null,d,null,null)},
aFI(d){return this.a4y(null,null,null,d)},
cOn(d,e){return this.a4y(d,e,null,null)},
beA(d){return this.a4y(d,null,null,null)},
beG(d){return this.a4y(null,null,d,null)}}
C.Ob.prototype={
S(){return new C.blv(new B.ez(0,$.aw()),null,null)}}
C.blv.prototype={
Y(){var w,v=this
v.a3()
w=v.pY(new C.e2o(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.aw()
w.P$=0
this.byL()},
B(d){var w=C.ahP(this.a.c.a)
if(w==null)w=A.d.gH(D.Ib)
return B.cr(new C.e2n(this,w,C.hu2(this.a.c.d)))}}
C.btl.prototype={
B(d){return B.o8(A.Xg,this.e,new C.f79(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bgt.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aUZ(d,e,v)
break
case"confetti":w.bL3(d,e,v)
break
case"crown":w.bMH(d,e,v)
break
case"aurora":w.bFz(d,e,v)
break
case"champagne":w.bIX(d,e,v)
break
case"diamonds":w.bOS(d,e,v)
break
case"starburst":w.cAV(d,e,v)
break
case"balloons":w.bFN(d,e,v)
break
case"galaxy":w.bUa(d,e,v)
break
case"redcarpet":w.crO(d,e,v)
break
case"coins":w.bKs(d,e,v)
break
case"lanterns":w.c3q(d,e,v)
break
case"hearts":w.c0W(d,e,v)
break
case"petals":w.cmU(d,e,v)
break
case"butterflies":w.bHV(d,e,v)
break
case"neon":w.c7t(d,e,v)
break
case"disco":w.bP2(d,e,v)
break
case"sunrise":w.cCA(d,e,v)
break
case"pearls":w.clX(d,e,v)
break
case"snow":w.cAC(d,e,v)
break
case"laurel":w.c3w(d,e,v)
break
case"ribbons":w.cuk(d,e,v)
break
case"kente":w.c3e(d,e,v)
break
case"trophy":w.cGj(d,e,v)
break
case"shooting":w.cym(d,e,v)
break
case"bokeh":w.bG8(d,e,v)
break
case"orbits":w.cjz(d,e,v)
break
case"flowers":w.bTo(d,e,v)
break
case"music":w.c7b(d,e,v)
break
case"mandala":w.c5B(d,e,v)
break
case"sparklers":w.cAJ(d,e,v)
break
case"city":w.bJJ(d,e,v)
break}},
t6(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.K()
v.r=g.j(A.k.F(h,0,1)).gp(0)
v.a=A.p2
u=new B.aE(w.r,A.ah,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aY(w,s))
u.D(new B.c4(w,t,w+f,t))
u.D(new B.c4(w,t,w,t+f))
u.D(new B.c4(w,t,w-f,t))
u.D(new B.c4(w,t,w,s))
u.D(new B.bt())
d.ae(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t6(d,new B.q(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aUZ(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.ay],w),B.a([A.ip,A.bF],w),B.a([A.eC,A.aJ],w),B.a([A.c,A.aB],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.k.bh(l/2.8)
j=A.k.E(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.E(i,4))]
if(j<0.22){d=B.kD(new B.q(h,b8),new B.q(g,f),A.cw.aE(0,j/0.22))
d.toString
$.S()
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.sar(new B.a9(A.a6,A.a9,A.x,B.a([e[0].j(0),e[0]],w),null,null).aG(0,B.rV(new B.q(h,b8),d)))
a0.c=o
a0.d=A.bA
a1=B.kD(new B.q(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aE(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.k.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hl(A.G,p)
c0.N(new B.q(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.q(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bA
b6.a=A.p2
c0.ah(new B.q(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t6(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bL3(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.k.E(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.K()
d.sar(new B.a9(A.aA,A.aF,A.x,D.dnp,B.a([A.k.F(h-0.15,0,1),A.k.F(h,0,1),A.k.F(h+0.15,0,1)],x.x),null).aG(0,new B.a2(0,0,g,f)))
a0.au(new B.a2(0,0,g,f),d)
d=Math.max(4,A.k.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.k.E(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.Rp[A.o.F(A.k.bh(C.cY(u,7)*5),0,4)]
J.bq(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aE(e.r,A.ah,null,null,t)
e=-q*2
t.push(new B.aY(e,0))
m.a8()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ai(r)
m.a8()}e=$.S()
t=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t.r=B.b0(n.r).gp(0)
t.b=A.aa
t.c=q*0.35
a0.ae(m,t)}else a0.au(B.bJ(A.I,q*1.8*A.k.F(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bMH(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.q(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aE(p.r,A.ah,a4,a4,o)
o.push(new B.aY(a5,a6))
n.a8()
p=q-0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=q+0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ai(o)
n.a8()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.biU],v),a4,a4).aG(0,B.bX(w,u)))
a8.ae(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aE($.S().r,A.ah,a4,a4,B.a([],s))
v=a6+k
j.D(new B.aY(a5,v))
u=k*0.3
t=a6+u
j.D(new B.aq(a5,t))
p=a6+k*0.6
j.D(new B.aq(a5+l*0.22,p))
j.D(new B.aq(a5+l*0.5,a6))
j.D(new B.aq(a5+l*0.78,p))
p=a5+l
j.D(new B.aq(p,t))
j.D(new B.aq(p,v))
j.D(new B.bt())
i=A.k.F(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sar(new B.a9(A.b1,A.b7,A.x,D.dm2,a4,a4).aG(0,new B.a2(a5,a6,p,v)))
a8.ae(j,o)
for(v=[D.eGX,D.eA6,D.eQC],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.r=d.gp(d)
a8.N(new B.q(e,o),m,a0)
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.r=A.ad.gp(0)
a8.N(new B.q(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.Q,A.N,A.T,A.U,A.S)
h.r=A.i4.gp(0)
a8.N(new B.q(a5+l*a1,a6+m),o,h)}}for(v=B.xD(j),u=B.a([],x.X),p=new B.rs(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jD(y.M));--h
p.ik()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a2.b=A.aa
a2.c=m
a2.e=A.dS
a2.r=A.bN.gp(0)
a8.ae(new B.aE(o,e,a4,new B.cu([new B.BJ(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.k.E(b0*0.5,1)
this.t6(a8,new B.q(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bFz(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f2h,D.f2_,D.f1T,D.f3g]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aE(o.r,A.ah,null,null,j)
for(o=a4*m,h=a8*l,g=h*1.4,f=0;f<=s;f+=r){e=f/a3
d=o+Math.sin(e*4+h+k)*a5*0.07+Math.sin(e*9-g+k)*a5*0.025
if(f===0){e=new B.aY(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ai(a0)
i.a8()}else{e=new B.aq(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ai(a0)
i.a8()}}$.S()
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.b=A.aa
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p2
o.y=new B.hl(A.G,u)
a6.ae(i,o)
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.b=A.aa
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p2
o.y=new B.hl(A.G,t)
a6.ae(i,o)}for(v=Math.max(4,A.k.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.k.E(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.S()
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=A.w6.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p2
a6.N(new B.q(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bIX(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.K()
e.sar(new B.c_(A.A,0.5,A.x,n,0,B.a([A.i1.j(0.25+0.1*j),D.Za],x.O),n,n).aG(0,B.bX(new B.q(i,h),g)))
d.N(new B.q(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aE(g.r,A.ah,n,n,f)
g=v?0:m
e=l*(0.05+w*0.07)
f.push(new B.aY(g,e))
u.a8()
for(t=1;t<=20;++t){g=t/20*m
s=v?g*0.45:m-g*0.45
g=new B.aq(s,e+t*k*0.012+Math.sin(t*0.8+i+w)*k*0.02)
f.push(g)
r=u.f
if(r!=null)g.ai(r)
u.a8()}g=$.S()
f=new B.ao(A.Q,A.N,A.T,A.U,A.S)
f.b=A.aa
f.c=j
f.r=D.Rp[A.o.E(w,4)].j(0.7).gp(0)
d.ae(u,f)}for(j=Math.max(4,A.k.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.k.E(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t6(d,new B.q(s,p),o*2.4,A.bN,A.k.F(p/i,0,1))
continue}$.S()
g=new B.ao(A.Q,A.N,A.T,A.U,A.S)
g.b=A.aa
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u3.j(0.75).gp(0)
d.N(new B.q(s,p),o,g)
g=o*0.35
e=new B.ao(A.Q,A.N,A.T,A.U,A.S)
e.r=A.c.j(0.8).gp(0)
d.N(new B.q(s-g,p-g),f,e)}},
bOS(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.lb,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.k.E(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bq(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aE(h.r,A.ah,a6,a6,g)
h=-o
e=h*0.5
g.push(new B.aY(e,i))
f.a8()
h*=0.28
j*=0.6
d=new B.aq(h,j)
g.push(d)
a0=f.f
if(a0!=null)d.ai(a0)
f.a8()
d=o*0.28
a0=new B.aq(d,j)
g.push(a0)
a1=f.f
if(a1!=null)a0.ai(a1)
f.a8()
a0=o*0.5
a1=new B.aq(a0,i)
g.push(a1)
a2=f.f
if(a2!=null)a1.ai(a2)
f.a8()
a1=k*0.6
a2=new B.aq(0,a1)
g.push(a2)
a3=f.f
if(a3!=null)a2.ai(a3)
f.a8()
a2=new B.bt()
g.push(a2)
g=f.f
if(g!=null)a2.ai(g)
f.a8()
g=new B.ao(A.Q,A.N,A.T,A.U,A.S)
g.sar(new B.a9(A.aA,A.aF,A.x,D.dhy,a6,a6).aG(0,B.bJ(A.I,k*1.2,o)))
b0.ae(f,g)
a4=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a4.b=A.aa
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.q(e,i),new B.q(a0,i),a4)
b0.ah(new B.q(h,j),new B.q(0,a1),a4)
b0.ah(new B.q(d,j),new B.q(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t6(b0,new B.q(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cAV(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.q(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aE(p.r,A.ah,null,null,o)
o.push(new B.aY(h,g))
n.a8()
p=s-q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=s+q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ai(o)
n.a8()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.ae(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.Q,A.N,A.T,A.U,A.S)
u.b=A.aa
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.k.bh(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(v=Math.max(4,A.k.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bwI.aE(0,k)*(0.5+0.5*C.cY(t,u)))
this.t6(d,new B.q(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Rp[A.o.F(A.k.bh(C.cY(t,4)*5),0,4)],r)}},
bFN(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.k.E(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.azV[A.o.E(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aE(i.r,A.ah,a1,a1,h)
i=l+o*1.15
h.push(new B.aY(k,i))
g.a8()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ai(d)
g.a8()}h=$.S()
e=new B.ao(A.Q,A.N,A.T,A.U,A.S)
e.b=A.aa
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.ae(g,e)
a0=B.bJ(new B.q(k,l),o*2.3,m)
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
e=B.ar(j,A.w,0.35)
e.toString
m.sar(new B.c_(D.b1E,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.azL,a1).aG(0,a0))
a5.bY(a0,m)
m=B.a([],t)
h=new B.aE(h.r,A.ah,a1,a1,m)
e=o*0.12
m.push(new B.aY(k-e,i))
h.a8()
i=new B.aq(k+e,i)
m.push(i)
e=h.f
if(e!=null)i.ai(e)
h.a8()
i=new B.aq(k,l+o)
m.push(i)
e=h.f
if(e!=null)i.ai(e)
h.a8()
i=new B.bt()
m.push(i)
m=h.f
if(m!=null)i.ai(m)
h.a8()
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.ae(h,m)}for(w=Math.max(4,A.k.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.k.E(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.bq(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bJ(A.I,t,u)
$.S()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=D.azV[A.o.E(p,6)].j(0.85).gp(0)
a5.au(s,q)
a3.restore()}},
bUa(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.q(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f2p,D.f25,D.f2b],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.q(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aG(0,B.bX(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.k.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.E(k,3)
i=C.cY(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cY(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bN,A.eI,i)
f.toString
e=C.cY(k,3)
$.S()
d=new B.ao(A.Q,A.N,A.T,A.U,A.S)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p2
b0.N(new B.q(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.K()
a8.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.u3.j(0.55),D.aiR],t),a3,a3).aG(0,B.bX(a9,a7)))
b0.N(a9,a7,a8)
a0=A.k.E(b2,3.5)/3.5
if(a0<0.25){a1=A.k.bh(b2/3.5)
a2=new B.q(a4*(0.1+0.5*C.cY(a1,9)),a5*0.1*C.cY(a1,8))
a4=B.kD(a2,a2.a6(0,new B.q(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kD(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sar(new B.a9(A.a6,A.a9,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aG(0,B.rV(a2,a4)))
a7.c=a6*0.005
a7.d=A.bA
b0.ah(a5,a4,a7)}},
crO(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aE(p.r,A.ah,b4,b4,o)
o.push(new B.aY(r,v))
n.a8()
p=q-0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=q+0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ai(o)
n.a8()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.sar(new B.c_(A.A,0.5,A.x,b4,0,B.a([A.u3.j(0.28),D.aiR],w),b4,b4).aG(0,B.bX(new B.q(r,v),u)))
p.a=A.p2
b8.ae(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.eo:A.ep)
a8=$.S()
a9=B.a([],t)
n=new B.aE(a8.r,A.ah,b4,b4,a9)
a9.push(new B.aY(a4?0:b5,0))
n.a8()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ai(b0)
n.a8()
a8=a4?i:a1
a8=new B.c4(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ai(b0)
n.a8()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ai(b0)
n.a8()
a8=new B.bt()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ai(a9)
n.a8()
a8=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a8.sar(new B.a9(A.a6,A.a9,A.x,a6,b4,b4).aG(0,new B.a2(a5,0,a5+j,k)))
b8.ae(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b0.r=A.i1.gp(0)
b0.c=o
b0.d=A.bA
b8.ah(new B.q(a8,m),new B.q(a9,p),b0)}b1=new B.aE($.S().r,A.ah,b4,b4,B.a([],t))
w=b6*0.78
b1.D(new B.aY(b5*0.42,w))
b1.D(new B.aq(b5*0.58,w))
b1.D(new B.aq(b5*0.8,b6))
b1.D(new B.aq(b5*0.2,b6))
b1.D(new B.bt())
v=B.K()
v.sar(D.c7n.aG(0,new B.a2(0,w,0+b5,w+b6*0.22)))
b8.ae(b1,v)
for(w=Math.max(4,A.k.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.k.E(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t6(b8,new B.q(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bKs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.k.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.k.E(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bJ(new B.q(p,q),r,r*A.k.F(n,0.12,1))
$.S()
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.sar(new B.a9(A.aA,A.aF,A.x,o>0?D.dy3:D.cNN,null,null).aG(0,m))
d.bY(m,r)
r=-(t*0.22)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.b=A.aa
l.c=Math.max(0.6,t*0.08)
l.r=D.btn.gp(0)
d.bY(new B.a2(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t6(d,new B.q(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c3q(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.k.E(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i.sar(new B.c_(A.A,0.5,A.x,e,0,B.a([As.yh.j(0.45*l),D.ahp],v),e,e).aG(0,B.bX(new B.q(m,n),k)))
a2.N(new B.q(m,n),k,i)
i=B.a([],r)
h=new B.aE(j.r,A.ah,e,e,i)
j=p*0.5
k=p*0.7
g=n-k
i.push(new B.aY(m-j,g))
h.a8()
j=new B.aq(m+j,g)
i.push(j)
g=h.f
if(g!=null)j.ai(g)
h.a8()
j=p*0.38
k=n+k
g=new B.aq(m+j,k)
i.push(g)
f=h.f
if(f!=null)g.ai(f)
h.a8()
k=new B.aq(m-j,k)
i.push(k)
j=h.f
if(j!=null)k.ai(j)
h.a8()
k=new B.bt()
i.push(k)
j=h.f
if(j!=null)k.ai(j)
h.a8()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j=B.ar(D.bj8,A.c,0.2*l)
j.toString
k.sar(new B.a9(A.b1,A.b7,A.x,B.a([D.boo,j],v),e,e).aG(0,B.bJ(new B.q(m,n),p*1.4,p)))
a2.ae(h,k)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=A.c.j(l).gp(0)
a2.N(new B.q(m,n+p*0.55),p*0.12,k)}},
c0W(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bq(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aE(m.r,A.ah,d,d,l)
m=o*0.9
l.push(new B.aY(0,m))
i.a8()
k=-o
h=k*0.2
g=k*1.6
k=new B.kP(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ai(f)
i.a8()
m=new B.kP(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ai(k)
i.a8()
m=new B.bt()
l.push(m)
l=i.f
if(l!=null)m.ai(l)
i.a8()
e=D.d7S[A.o.E(p,5)]
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l=B.ar(e,A.w,0.25)
l.toString
m.sar(new B.c_(A.tH,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a4K,d).aG(0,B.bX(A.I,o*1.4)))
a3.ae(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.ip,130)},
cmU(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.k.E(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bq(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aE(n.r,A.ah,h,h,m)
n=-p
m.push(new B.aY(0,n))
k.a8()
l=n*0.2
j=new B.c4(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ai(i)
k.a8()
n=new B.c4(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ai(l)
k.a8()
n=new B.bt()
m.push(n)
m=k.f
if(m!=null)n.ai(m)
k.a8()
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m=(q&1)===0?D.cHU:D.diV
n.sar(new B.a9(A.a6,A.a9,A.x,m,h,h).aG(0,B.bX(A.I,p)))
d.ae(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bHV(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bq(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bq(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aE(a3.r,A.ah,a7,a7,a4)
a4.push(new B.aY(0,0))
a5.a8()
a3=new B.kP(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ai(a6)
a5.a8()
a3=new B.kP(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ai(a6)
a5.a8()
a3=new B.bt()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ai(a4)
a5.a8()
a3=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a3.sar(new B.a9(A.a6,A.a9,A.x,h?D.diE:D.dlw,a7,a7).aG(0,new B.a2(0,m,k,j)))
b1.ae(a5,a3)
a3=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a3.b=A.aa
a3.c=Math.max(0.6,i)
a3.r=D.BM.gp(0)
b1.ae(a5,a3)
v.restore()}$.S()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=D.bsC.gp(0)
p.c=q*0.1
p.d=A.bA
b1.ah(new B.q(0,m*0.3),new B.q(0,q*0.4),p)
v.restore()}},
c7t(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.q(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.k.E(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.b=A.aa
r.c=v
r.r=D.aB5[u].j((1-t)*0.9).gp(0)
r.y=new B.hl(A.G,v)
q=s*0.3
d.ap(B.br(B.bJ(g,s,s*1.6),new B.aP(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aB5[A.o.E(o,4)]
l=o*p+j
k=i-n
k=B.br(new B.a2(l,k,l+w,k+n),new B.aP(v,v))
$.S()
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=m.j(0.85).gp(0)
l.y=new B.hl(A.adq,q)
d.ap(k,l)}},
bP2(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.q(d,w)
u=a1*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o1,A.dw][A.o.E(q,4)]
k=C.cY(q,3)
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.r=l.j(0.75).gp(0)
j.a=A.p2
j.y=new B.hl(A.G,r)
a2.N(new B.q(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.q(d,0),new B.q(d,w-u),t)
t=B.K()
t.r=A.dj.gp(0)
a2.N(v,u,t)
t=a2.c
J.bq(t.save())
a0=new B.aE(a0.r,A.ah,null,null,B.a([],x.v))
a0.D(new B.jN(B.bX(v,u)))
a2.mP(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.k.E(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ao(A.Q,A.N,A.T,A.U,A.S)
e.r=B.ar(A.bo,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.au(new B.a2(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t6(a2,v.a6(0,new B.q(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cCA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aE(0,A.k.F(a1/3,0,1))),e=new B.q(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aE(s.r,A.ah,k,k,r)
r.push(new B.aY(g,f))
q.a8()
s=t-0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ai(p)
q.a8()
s=t+0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ai(p)
q.a8()
s=new B.bt()
r.push(s)
r=q.f
if(r!=null)s.ai(r)
q.a8()
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=A.bN.j(0.1).gp(0)
d.ae(q,s)}g=h*0.5
$.S()
f=B.K()
f.sar(new B.c_(A.A,0.5,A.x,k,0,B.a([D.ber.j(0.6),D.ahp],x.O),k,k).aG(0,B.bX(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sar(D.exv.aG(0,B.bX(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.k.E(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.c.j(0.18).gp(0)
d.bY(B.bJ(new B.q(n,m),s,v),l)
d.bY(B.bJ(new B.q(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i4,180)},
clX(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aE(s.r,A.ah,h,h,r)
r.push(new B.aY(0,f))
q.a8()
for(s=f*(0.72+t*0.07),p=a1*(1+t*0.3),o=0;o<=w;o+=v){n=new B.aq(o,s+Math.sin(o/g*6+p+t)*e*0.03)
r.push(n)
m=q.f
if(m!=null)n.ai(m)
q.a8()}s=new B.aq(g,f)
r.push(s)
p=q.f
if(p!=null)s.ai(p)
q.a8()
s=new B.bt()
r.push(s)
r=q.f
if(r!=null)s.ai(r)
q.a8()
$.S()
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=B.ar(A.cy,A.jf,t/3).j(0.55).gp(0)
d.ae(q,s)}for(w=Math.max(4,A.k.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.k.E(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ao(A.Q,A.N,A.T,A.U,A.S)
u.sar(new B.c_(Ap.xF,0.5,A.x,h,0,D.dp7,h,h).aG(0,B.bX(new B.q(o,i),j)))
d.N(new B.q(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cAC(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.k.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bA
J.bq(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.I,new B.q(0,o),l)
d.ah(new B.q(0,n),new B.q(m,k),l)
d.ah(new B.q(0,n),new B.q(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eC,200)},
c3w(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.q(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.k.F(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.k.cJ(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bq(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bJ(new B.q(o,0),p,q)
$.S()
e=new B.ao(A.Q,A.N,A.T,A.U,A.S)
e.sar(D.c7a.aG(0,new B.a2(0,n,m,l)))
a3.bY(f,e)
r.restore()}}$.S()
a0=B.K()
a0.b=A.aa
a0.c=a2*0.003
a0.r=D.bjr.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t6(a3,w.a6(0,new B.q(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cuk(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i1,A.i4],a4),B.a([A.p9,A.ip],a4),B.a([A.aE,A.eI],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bO<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aE(m.r,A.ah,null,null,l)
j=B.a([],o)
for(m=n*0.2,i=a2*(0.3+m),m=a8*(0.8+m),h=0;h<=40;++h){g=h/40
f=g*a1
e=i+Math.sin(g*5+m+n)*a3*0.1
d=a3*(0.03+0.03*(0.5+0.5*Math.sin(g*7+q+n)))
g=e-d
if(h===0){g=new B.aY(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ai(a0)
k.a8()}else{g=new B.aq(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ai(a0)
k.a8()}j.push(new B.q(f,e+d))}for(m=new B.ds(j,t),m=new B.bO(m,m.gJ(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ai(g)
k.a8()}m=new B.bt()
l.push(m)
l=k.f
if(l!=null)m.ai(l)
k.a8()
$.S()
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l=a5[n]
i=l[0]
m.sar(new B.a9(A.a6,A.a9,A.x,B.a([i,l[1],i],a4),At.zK,new B.mF(w)).aG(0,new B.a2(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.ae(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3e(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.k.E(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.E(A.k.bh(g/s),5)
a1=g+s
$.S()
a2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a3=Math.abs(a0)
a2.r=D.a4O[a3].gp(0)
b0.au(new B.a2(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a4.r=D.a4O[A.o.E(a3+2,5)].gp(0)
b0.au(new B.a2(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.k.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.k.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t6(b0,new B.q(u*a6,l-a7),a8*(0.01+0.012*t),D.a4O[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGj(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.q(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.q(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aE($.S().r,A.ah,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.D(new B.aY(u,a2))
v=a1+v
m.D(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.D(new B.c4(v,r,p,l))
v=a2+n*0.95
m.D(new B.aq(p,v))
p=o*0.3
k=a2+n
m.D(new B.aq(a1+p,k))
m.D(new B.aq(a1-p,k))
q=a1-q
m.D(new B.aq(q,v))
m.D(new B.aq(q,l))
m.D(new B.c4(u,r,u,a2))
m.D(new B.bt())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bJ(new B.q(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.Q,A.N,A.T,A.U,A.S)
d.b=A.aa
d.c=p
d.r=A.aB.gp(0)
a4.cN(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sar(new B.a9(A.a6,A.a9,A.x,D.drS,A.aA2,null).aG(0,new B.a2(u,a2,r,k)))
a4.ae(m,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.t6(a4,new B.q(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bL4(a4,a5,a6,60)},
bL4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.k.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bq(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bJ(A.I,r*A.k.F(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.r=D.Rp[A.o.E(p,5)].gp(0)
d.au(o,n)
u.restore()}},
cym(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.k.E(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.k.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.q(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.q(m+t*k,v+u*k)
$.S()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.sar(new B.a9(A.a6,A.a9,A.x,B.a([A.c.j(0),A.bN],s),null,null).aG(0,B.rV(j,l)))
k.c=r
k.d=A.bA
d.ah(j,l,k)
this.t6(d,l,q,A.c,1-n)}},
bG8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.k.E(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.k.E(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m=A.o.E(s,5)
n.r=D.aCQ[m].j(o).gp(0)
n.a=A.p2
n.y=new B.hl(A.G,r*0.12)
d.N(new B.q(q,p),r,n)
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.b=A.aa
n.c=Math.max(0.6,r*0.05)
n.r=D.aCQ[m].j(o*1.4).gp(0)
d.N(new B.q(q,p),r,n)}},
cjz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bq(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bJ(A.I,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.b=A.aa
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bY(p,o)
n=f*(0.9+q*0.25)+q
m=new B.q(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=A.i4.gp(0)
d.N(m,t,o)
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=A.i1.j(0.4).gp(0)
o.y=new B.hl(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bTo(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.k.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.q(m*a1,p)
break
case 1:l=new B.q(m*a1,q)
break
case 2:l=new B.q(r,m*a2)
break
default:l=new B.q(s,m*a2)
break}k=A.k.E(a6+C.cY(o,2)*4,4)/4
j=A.ew.aE(0,A.k.F(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dfz[A.o.E(o,5)]
J.bq(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bJ(new B.q(0,l),i,j)
$.S()
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.sar(new B.a9(A.b1,A.b7,A.x,B.a([A.c,g],u),null,null).aG(0,B.bJ(new B.q(0,l),f,h)))
a4.bY(d,a0)}$.S()
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.i1.gp(0)
a4.N(A.I,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i4,280)},
c7b(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bX(new B.q(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.b=A.aa
j.c=u
j.r=D.az5[n].j((1-m)*0.8).gp(0)
a4.cN(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.k.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.k.E(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.az5[A.o.E(h,4)]
$.S()
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.r=d.gp(0)
J.bq(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bY(B.bJ(A.I,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.q(s,g),new B.q(s,p),o)
if((h&1)===0){o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.q(s,p),new B.q(f+e*1.6,g-e*2),o)}}},
c5B(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.q(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bq(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aE(d.r,A.ah,a3,a3,a0)
a0.push(new B.aY(0,i))
a1.a8()
d=new B.c4(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ai(a2)
a1.a8()
d=new B.c4(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ai(a0)
a1.a8()
d=new B.ao(A.Q,A.N,A.T,A.U,A.S)
d.b=A.aa
d.c=u
d.r=B.ar(A.bN,A.o1,m).j(0.7).gp(0)
a7.ae(a1,d)
d=new B.ao(A.Q,A.N,A.T,A.U,A.S)
d.r=A.i4.j(0.8).gp(0)
a7.N(new B.q(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.K()
a5.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.i1.j(0.25),D.Za],x.O),a3,a3).aG(0,B.bX(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cAJ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.q(j,i)
$.S()
g=new B.ao(A.Q,A.N,A.T,A.U,A.S)
g.r=A.bo.gp(0)
g.c=q
g.d=A.bA
b1.ah(new B.q(l,a9),h,g)
g=new B.ao(A.Q,A.N,A.T,A.U,A.S)
g.sar(new B.c_(A.A,0.5,A.x,null,0,B.a([A.i4,A.i1.j(0.6),D.Za],o),null,null).aG(0,B.bX(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.k.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.E(b3+C.cY(f,2)*e,e)/e
a0=A.k.bh((b3+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cY(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.q(a4,a5)
a7=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a7.r=B.ar(A.i4,A.ay,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bA
a7.a=A.p2
b1.ah(new B.q(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.q(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.q(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bJJ(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aUZ(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a2(p,l,p+n,l+m)
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.sar(D.c87.aG(0,k))
a7.au(k,j)
i=A.k.bh(n/r)
h=A.k.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a4.r=A.bN.j(0.85).gp(0)
a7.au(new B.a2(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aC(d){return d.b!==this.b||d.d!==this.d}}
C.b0R.prototype={
B(d){var w,v=null,u=new C.ceA(),t=new C.ceC(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.arP,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ceB(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ib[w]))
return B.bW(A.bH,s,A.bt,v,12,10)}}
C.a_l.prototype={
S(){return new C.aBk()}}
C.aBk.prototype={
gwc(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1p(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b5,A.aP),$.aw())}return v},
gazh(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaN0()
v=$.aw()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.ba(w,A.b5,A.aP),v)}return t},
t(){var w=this.gb1p(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gazh()
w.T$=v
w.P$=0
this.a2()},
a_X(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_X=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().CD(90,700,700,A.eN),$async$a_X)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a_X)
case 8:p=e
o=q.b.toLowerCase()
n=J.aiO(o,".png")?"image/png":"image/jpeg"
r.m(new C.dhh(r,n,p))
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
return B.i($async$a_X,v)},
b1o(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b6(4,B.n(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Vw,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahP(p.gwc().a)
if(n==null)n=A.d.gH(D.Ib)
w=p.gwc()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ac,A.t,B.a([B.bR(0,new C.Ob(p.gwc(),!1,!0,new B.bP(w.a+v,x.W)),0,0,0),B.ap(o,B.Iv(A.mZ,new C.dhm(d),B.nU(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.Iv(A.aqH,new C.dhn(p),B.nU(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVh,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gb1p(0),o,o,o,o,o,2,p.b1o("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dho(p),o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,A.fW,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i1.j(0.6),A.r,1)
if(p.gwc().d.length===0)q=D.bVx
else{q=C.hu2(p.gwc().d)
if(q==null)q=new Uint8Array(0)
q=B.hR(B.fR(q,A.A,o,o,A.cj,A.bZ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdn(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwc().d.length!==0)r.push(B.aG(o,o,o,o,H.PS,o,o,o,new C.dhp(p),o,o,o,o,"Remove logo",o))
return B.c5(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.X,B.A(r,A.m,o,A.e,A.i,0,o,o),A.P,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gazh(),o,o,o,o,o,2,p.b1o("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhq(p),o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,A.dh,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bUr,D.fYf,new C.dhr(p,d),B.bn(A.aB,o,o,o,A.w,o,A.cn,o,new B.b9(B.n(14),A.a1),o,o,o))],u),A.al,o,A.e,A.O,0,A.p),A.f,o,o,D.b6V,o,o,o,o,A.GJ,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aN1.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.a_G.prototype={
S(){return new C.bi_(new B.au(A.au,$.aw()))}}
C.bi_.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.R(d).ax.a===A.J,m=n?A.c:A.R,l=n?A.aS:A.am,k=B.aH(d,A.c_,x.w).w,j=n?A.R:A.c,i=B.n(28),h=B.L(n?A.bB:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.do5(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cZw[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aX(v.b);v.C();){s=v.gR(v)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aO(!1,new B.bg(r,r,r,r),!0,B.p(A.A,B.d(s,o,o,o,o,o,o,A.pO,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bg(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.do6(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hE,u,o),new B.CR(A.bH,6,6,A.bt,t,o)],g))}e.push(A.aC)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aQ
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b6(4,B.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bH(A.aWf,o,new C.do7(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dp(1,A.co,B.cj(e,o,o,o,o,o,A.ai,!0),o)],g),A.E,o,A.e,A.O,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.up,A.a09,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhk.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e4()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.K()
u.y=A.H1
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.aj()
m=a1.aj()
l=a1.aj()
k=0.8+a1.aj()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.k.E(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.q(l,h)
if(a1.aj()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.k.F(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.q(l-d,h),new B.q(l+d,h+0),a0)
a2.ah(new B.q(l,h-d),new B.q(l+0,h+d),a0)}}},
aC(d){return d.b!==this.b}}
C.bh1.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.br(new B.a2(0,0,0+a3.a,0+a3.b),A.jK),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.K()
a1.b=A.aa
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mS
a2.ap(f,a1)
a1=x.v
a0=new B.aE(a0.r,A.ah,g,g,B.a([],a1))
a0.D(new B.iU(f))
v=new B.TF(new B.rs(B.xD(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.ik()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.k.E(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.b=A.aa
k.d=A.bA
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.k.E(o-q*(1-n/10),t)
i=A.k.E(o-q*(1-l),t)
l=e.b
if(j<=i)a2.ae(new B.aE(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.ae(new B.aE(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.ae(new B.aE(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.ik()
h=u[d].Hp(o).a
$.S()
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=w.gp(0)
l.y=Ad.oo
a2.N(h,5,l)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aC(d){return d.b!==this.b}}
C.bq5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e4()
f.d_(this.c)
w=e.a*(0.2+f.aj()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.q(w,v)
t=e.ganW()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aE(k.r,A.ah,g,g,j)
j.push(new B.aY(w,v))
i.a8()
k=m-l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ai(h)
i.a8()
k=m+l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ai(h)
i.a8()
k=new B.bt()
j.push(k)
j=i.f
if(j!=null)k.ai(j)
i.a8()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j=B.a([s.j(0.16),s.j(0)],r)
k.sar(new B.all(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.ae(i,k)}},
aC(d){return d.b!==this.b}}
C.bbR.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c*7+3)
for(w=this.d,v=a0.a,u=Math.abs(v),t=a0.b,s=Math.abs(t),r=this.b,q=r*0.8,p=r*2,o=0;o<16;++o){n=e.aj()
m=e.aj()
l=Math.min(u,s)*(0.03+e.aj()*0.09)
k=e.aj()*3.141592653589793*2
j=(n+Math.sin(r+k)*0.04)*v
i=(m+Math.cos(q+k)*0.05)*t
h=0.08+0.1*(0.5+0.5*Math.sin(p+k))
if((o&1)===0)g=w
else{f=B.ar(w,A.c,0.6)
f.toString
g=f}$.S()
f=new B.ao(A.Q,A.N,A.T,A.U,A.S)
f.r=g.j(h).gp(0)
f.y=new B.hl(A.G,l*0.35)
d.N(new B.q(j,i),l,f)
f=new B.ao(A.Q,A.N,A.T,A.U,A.S)
f.b=A.aa
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.q(j,i),l,f)}},
aC(d){return d.b!==this.b}}
C.bbu.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.aj()-0.5)*0.1)
l=v*(0.06+e.aj()*0.05)
k=e.aj()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aE(j.r,A.ah,null,null,i)
i.push(new B.aY(0,m))
h.a8()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ai(f)
h.a8()}$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.b=A.aa
j.c=s
j.d=A.bA
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hl(A.G,u)
d.ae(h,j)}},
aC(d){return d.b!==this.b}}
C.bxb.prototype={
a4(d,e){var w,v,u=new B.a2(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sar(new B.c_(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d6A,null).aG(0,u))
d.au(u,w)
w=u.cr(-3)
v=B.K()
v.b=A.aa
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.au(w,v)},
aC(d){return d.b!==this.b}}
C.bu9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.k.bh(f)*7,q=0;q<7;++q){p=new B.e4()
p.d_(r+q)
o=p.aj()*w
n=p.aj()*u
m=Math.sin(A.k.E(A.k.E(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.aj()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.r=k.gp(0)
j.c=1.4
j.d=A.bA
d.ah(new B.q(o-l,n),new B.q(o+l,n+0),j)
i=l*1.4
d.ah(new B.q(o,n-i),new B.q(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.q(h,n-i),new B.q(g,n+i),j)
i=-l*0.45
d.ah(new B.q(h,n-i),new B.q(g,n+i),j)
i=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hl(A.G,l*0.3)
d.N(new B.q(o,n),l*0.35,i)}},
aC(d){return d.b!==this.b}}
C.bth.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a2(0,0,0+e.a,0+e.b)
$.S()
v=B.K()
v.a=A.p2
v.sar(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.k.F(u-0.15,0,1),A.k.F(u,0,1),A.k.F(u+0.15,0,1)],x.x),null).aG(0,w))
d.au(w,v)},
aC(d){return d.b!==this.b}}
C.bgm.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdz(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.K()
w.b=A.aa
w.c=1.4
w.d=A.bA
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.aa
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uw
r=new C.dgZ(this,r*0.16,d,u,w)
t=e.gdz()*0.045
r.$3(new B.q(t,t),1,1)
v=e.a-t
r.$3(new B.q(v,t),-1,1)
s=e.b-t
r.$3(new B.q(t,s),1,-1)
r.$3(new B.q(v,s),-1,-1)},
aC(d){return d.b!==this.b}}
C.y5.prototype={}
C.Jw.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.ast.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.v7.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mP.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eN.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ak(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdQ(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.i8F(v.z))
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
C.lY.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,eN>")
n=B.C(new B.N(n,new C.ck7(),m),m.k("ak.E"))
return C.rT(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ak(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,a8<m,@>>")
n=B.C(new B.N(n,new C.ck8(),m),m.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i3.prototype={
gbcQ(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gT4(){if(!C.kJ(this.w))return!1
var w=this.gbcQ()
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
q=B.T(r).k("N<1,lY>")
r=B.C(new B.N(r,new C.cjX(),q),q.k("ak.E"))
return C.Cg(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ak(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.ab().af())
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
v=B.T(w).k("N<1,a8<m,@>>")
w=B.C(new B.N(w,new C.cjY(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jW.prototype={}
C.b3_.prototype={
B(d){return B.cr(new C.ck2(this))}}
C.apv.prototype={
S(){return new C.blf(null,null)}}
C.blf.prototype={
gb1q(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fF,null,1,null,v)
w.cP(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb1q().t()
this.byv()},
B(d){return B.c9(this.gb1q(),new C.dPx(),this.a.c)}}
C.aMN.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aeh.prototype={
QA(d,e,f,g){return this.bT1(d,e,f,g)},
bT1(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QA=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QA)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QA,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.du,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aW,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dg,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d6)
n.push(B.A(B.a([B.E(new C.aey(A.hV,"Download",A.c4,new C.eB9(w,d),!0,v),1),A.at,B.E(new C.aey(A.uL,"Share",A.bm,new C.eBa(w,d),!1,v),1),A.at,B.E(new C.aey(A.hH,"Safari",A.b2,new C.eBb(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aC)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eBc(d),v,v))
return B.bm(!0,new B.D(A.qv,B.x(B.a([B.p(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.ji,v,t,u,s,v,A.n),v,v,v,v,A.GQ,v,v,1/0)],m),A.m,v,A.e,A.O,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aey.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aI(!1,A.a3,!0,v,B.aO(!1,u,!0,B.eI(B.x(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.O,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bGw,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b2Y.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arA(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.cdo().am_(1.35)
s=B.ax7(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bE4(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.w,A.bm,h,h,h,h,2,D.c2P,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bP("slide_tf_"+g.a,x.W),h,A.xb,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ab,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AB,A.ao,h,A.V8,h,h)
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
w=n?t.cOa(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eO:A.Ew
p=B.d(f,new B.bP("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V_:s
$.S()
j=B.K()
j.b=A.aa
j.c=3*w
j.e=A.dS
j.r=A.av.gp(0)
j=i.cun(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ac,A.t,B.a([j,i.cul(k,t,l?A.V_:s)],x.p),h)}else w=i.cum(p,t,g.k2?A.V_:s,m)
v=new B.mH(w,new B.bP("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c1D()
case 3:return i.clW()
case 2:return B.b4(h,h,h,new C.b2V(g,h),A.fJ)
case 5:g=g.r
return new C.b2X(g,!i.e&&i.z==null,h)}},
cdo(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k1
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cT(D.ahn,new B.q(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cT(l,A.I,6*v),new B.cT(l,A.I,16*v),new B.cT(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.br
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.n7
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cT(A.bF,new B.q(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cT(v,new B.q(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cT(A.bb,new B.q(-3*v,0),0),new B.cT(A.ax,new B.q(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cT(A.cJ,A.I,8*v),new B.cT(A.ax,new B.q(0,-3*v),18*v)],x.r)
k=A.u
w=A2.xX
break
case"ice":v=o.d
e=B.a([new B.cT(A.aJ,A.I,10*v),new B.cT(A.cy,A.I,22*v)],x.r)
k=A.V
w=A.eC
break
case"chalk":h=o.d
e=B.a([new B.cT(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.k1
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d8H[q]
u.push(new B.cT(v,new B.q(p.a*t,p.b*t),0))}u.push(new B.cT(v,new B.q(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.K()
v=o.d
f.sar(D.c5x.aG(0,new B.a2(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cT(A.M1,new B.q(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.K()
v=o.d
f.sar(D.c5S.aG(0,new B.a2(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cT(l,A.I,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cC
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cT(l.j(0.45),new B.q(u,u),0),new B.cT(l.j(0.2),new B.q(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k1
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBh(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f9k.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ck0(h)
v=r.k2?C.ilq(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eO:A.Ew
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.YP(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cun(d,e,f,g){return this.aBh(d,e,f,!1,g)},
cul(d,e,f){return this.aBh(d,e,f,!1,null)},
cum(d,e,f,g){return this.aBh(d,e,f,g,null)},
bE4(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a9
default:return A.a6}},
c1D(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bL
return B.at(B.X(s.b===D.lq?A.HN:A.Cv,A.aD,t,t,t,32),t,t,t)}w=u.bH8(r)
if(s.b===D.lq){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.L(A.cr,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dF,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQa(r,!0)
return C.fNu(s.go,v,s.id)}return w},
aQa(d,e){var w,v,u,t
try{w=C.ilL(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cr(new C.ck_(this,w,v,e))
return u}catch(t){return D.aeQ}},
bH8(d){return this.aQa(d,!1)},
clW(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcm
return C.im2(v,w.db,w.dx)}}
C.b2V.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.K(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.K()
w.r=B.b0(f.ch).gp(0)
w.b=A.aa
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a2(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.au(s,g)
d.au(s,w)
break
case 1:d.bY(s,g)
d.bY(s,w)
break
case 2:r=new B.aE(h.r,A.ah,i,i,B.a([],x.v))
r.D(new B.aY(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.ae(r,g)
d.ae(r,w)
break
case 3:r=new B.aE(h.r,A.ah,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.aY(0,h))
f=u*0.65
r.D(new B.aq(f,h))
r.D(new B.aq(f,t*0.2))
r.D(new B.aq(u,t*0.5))
r.D(new B.aq(f,t*0.8))
t*=0.55
r.D(new B.aq(f,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.ae(r,g)
d.ae(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.q(0,h),new B.q(u,h),w)
break
case 5:q=u*0.22
r=new B.aE(h.r,A.ah,i,i,B.a([],x.v))
r.D(new B.aY(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.ae(r,g)
d.ae(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aE(h.r,A.ah,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aY(k,j)
f.push(h)
v=r.f
if(v!=null)h.ai(v)
r.a8()}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.ai(v)
r.a8()}}r.D(new B.bt())
d.ae(r,g)
d.ae(r,w)
break}},
aC(d){return d.b!==this.b}}
C.aKj.prototype={
S(){return new C.bwG(null,null)}}
C.bwG.prototype={
Y(){var w,v=this
v.a3()
w=B.bl(null,A.hD,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bAK()},
aQl(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.dg,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a6,A.a9,A.x,v,w,w),A.n),A.bi)},
bEi(){var w,v=this,u=null,t=v.aQl("Slide A",A.bm),s=v.aQl("Slide B",A.b2)
if(v.a.c===D.cp)return new B.an(A.a0,u,A.b4,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.ffJ(v,s,t),u)},
B(d){return this.bEi()}}
C.aL0.prototype={
js(d){return new B.a2(0,0,0+d.a*A.k.F(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.W3.prototype={
S(){return new C.blr(null,null)}}
C.blr.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bl(null,A.C1,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cp){w.sp(0,1)
return}B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e07(u),x.a)},
by(d){var w,v,u,t=this
t.bH(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cp)w.sp(0,1)
else B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e06(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.byK()},
B(d){var w,v=this.a
if(v.c.dy===D.cp||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e05(this),v.d)}}
C.Jv.prototype={
B(d){return B.cr(new C.cjT(this))}}
C.aB_.prototype={
S(){return new C.bfN()}}
C.bfN.prototype={
Y(){this.a3()
if(this.a.c!==D.cp)B.bQ(A.NE,new C.dec(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cp)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.W3(C.er(A.bk,!1,4279310375,A.aG,"",4294538006,24,A.bq,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bj,o,2,"",0,0,"",u,D.fg,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cf,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bP("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bk,!1,4294967295,A.aG,"",4280640491,22,A.bq,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bj,o,2,"Element flies in",0,0,"",q.a.c,D.cX,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.a0,p,A.ac,A.t,B.a([w,B.ap(32,new C.W3(t,B.p(p,D.fJt,A.f,p,p,new B.o(s,p,B.L(A.aW,A.r,1),r,p,p,A.n),p,p,p,p,A.jm,p,p,1/0),!0,1,new B.bP("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7u,A.bi)}}
C.a8A.prototype={
S(){return new C.bm7(null,null)}}
C.bm7.prototype={
gb21(){var w=this.a
if(w.e)w=D.f9w.q(0,w.c)||D.aSm.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb21()){w=C.ik3(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dv(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzf()},
B(d){var w,v=this,u=v.d
if(!v.gb21()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.eow(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b0U.prototype={
B(d){var w=null
return B.at(C.b2Z(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bq,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bj,4280172719,2,"Aa",0,0,this.c,D.cp,D.cX,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bh_.prototype={
js(d){return C.a3s(this.b,new B.a2(0,0,0+d.a,0+d.b).cr(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a2(0,0,0+e.a,0+e.b).cr(-this.d),k=this.b,j=C.a3s(k,l),i=e.gdz(),h=new C.f4E()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sar(D.aTS.aG(0,l))
d.ae(j,w)
k=C.a3s(k,l.cr(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bt7.gp(0)
d.ae(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sar(D.fjQ.aG(0,l))
d.ae(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hl(A.G,i*0.04)
d.ae(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.ae(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sar(D.fjO.aG(0,l))
d.ae(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.ae(j,w)
k=C.a3s(k,l.cr(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.ae(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.bb.j(0.7).gp(0)
k.y=new B.hl(A.G,i*0.035)
d.ae(j,k)
k=h.$1(i*0.016)
k.r=A.pa.gp(0)
d.ae(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sar(D.fjJ.aG(0,l))
d.ae(j,w)
w=C.a3s(k,l.cr(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgb.gp(0)
d.ae(w,v)
k=C.a3s(k,l.cr(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjb.gp(0)
d.ae(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sar(D.aTS.aG(0,l))
d.ae(j,k)
for(k=B.xD(j),w=B.a([],x.X),k=new B.rs(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jD(y.M));--r
k.ik()
q=w[r].b
q===$&&B.c()
p=A.o.F(A.k.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.ik()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.ik()
n=w[r].Hp(q*o/p).a
m=D.d5P[A.o.E(o,4)]
$.S()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.c.j(0.9).gp(0)
d.N(new B.q(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sar(D.fjS.aG(0,l))
k.y=new B.hl(A.G,i*0.03)
d.ae(j,k)
k=h.$1(i*0.018)
k.sar(D.fjP.aG(0,l))
d.ae(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.ae(j,w)
k=C.a3s(k,l.cr(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.o6.gp(0)
d.ae(k,w)
break}},
aC(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bte.prototype={
a4(d,e){d.Gn(C.a3s(this.b,new B.a2(0,0,0+e.a,0+e.b).cr(-this.c)),A.w,e.gdz()*0.05,!1)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.aN0.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aNv.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aOP.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.a8T.prototype={}
C.OF.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aFS(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aS(v),null,null)},
ge3(){return this.c},
gUs(){return this.r},
gUt(){return this.w},
gMa(){return this.x}}
C.aFS.prototype={
Y(){var w,v=this
v.a3()
$.aV.c1$.push(v)
C.fSt()
$.hC2=new C.eHn(v)
w=B.bl(null,A.BZ,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IU()},
by(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P5(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IU()}},
jk(d){if(d===A.B4||d===A.tJ||d===A.tI||d===A.pW)this.u8()},
t(){var w,v,u,t=this
$.aV.hV(t)
w=t.at
if(w!=null)w.a1(0)
t.u8()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bzs()},
gacx(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPo(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ad2(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gT4())return!1
return!0},
kw(){return this.ad2(null)},
ajZ(){var w=this.c
if(w==null)return
w.L(x.q).f.U(D.fi6)},
qN(){if(!this.kw())return!1
this.ajZ()
return!0},
asN(d){var w,v,u,t,s,r=this
if(r.ad2(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hB9(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ao(){return this.asN(null)},
IU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asv(k),$async$IU)
case 3:j=e
w=4
return B.b(C.ar2(k),$async$IU)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h7n(j,t.c4E())
w=t.gacx()?5:7
break
case 5:r=t.gPo()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b17(r),$async$IU)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eDL())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c4(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eDM())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.z6(m==null?"":m)!=null)continue
C.fSF(n,s)
p=!0}t.m(new C.eDN(t,s))
if(p||s.length>J.ad(j))t.u8()
case 1:return B.h(u,v)}})
return B.i($async$IU,v)},
c4E(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kJ(w)&&w!==q}if(w)p.push(r)
return p},
csO(d){var w,v=this,u=d.w
if(!C.kJ(u)||u==="hati_kiapo_uongozi")return
v.abm(d)
w=A.d.bj(v.d,new C.eFl(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c4(u,0,d.hQ())
v.db=!1},
cmT(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kJ(s)&&s!=="hati_kiapo_uongozi"}if(s)u.csO(t)
s=u.d
w=B.T(s)
v=w.k("cM<1,i3>")
s=B.C(new B.cM(new B.Y(s,new C.eF9(),w.k("Y<1>")),new C.eFa(),v),v.k("M.E"))
return s},
P5(d){return this.bTs(d)},
u8(){return this.P5(null)},
bTs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cmT()
w=3
return B.b(C.WX(d==null?t.a.c:d,s),$async$P5)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.asN(r)?4:5
break
case 4:w=6
return B.b(C.a86(r),$async$P5)
case 6:q=r.x
p=A.a.i(q==null?t.gPo():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eD8())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c4(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
pH(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kJ(u.w))===!0?A.h8:A.lH
v.at=B.cz(w,new C.eGt(v))},
b1r(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.ag3(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cGB(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.ag3(w.e.hQ(),w.f,w.r))
w.m(new C.eHj(w,v.pop()))
w.pH()},
crT(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.ag3(w.e.hQ(),w.f,w.r))
w.m(new C.eFj(w,v.pop()))
w.pH()},
oA(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eH6(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Ys(d){var w,v,u,t,s=this.gdA()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
y7(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a9(0)},
KG(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdA()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cM<1,m>")
t=B.d4(new B.cM(new B.Y(w,new C.eH7(),v.k("Y<1>")),new C.eH8(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cX)continue
p=n.a
m=w.c3(0,p,new C.eH9(n))
s.c3(0,p,new C.eHa())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Id(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aW(u.d,new C.eCx(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPo()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c4(u.d,0,u.e.hQ())}u.oA()
u.pH()},
akk(d,e){var w,v,u,t,s=this
if(s.kw())return
w=s.Ys(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kJ(v.w))===!0
if(u){C.ik7(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdA()
if(t!=null)C.ik8(t,w.d+w.f*0.5)}}s.Id()
s.oA()
s.pH()
if(u&&s.c!=null)s.m(new C.eHk())},
cHJ(d,e){var w=this,v=w.gdA()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Id()
w.oA()
w.pH()},
gdA(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.F(this.f,0,w.length-1)]},
gqR(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ii9(o)
if(w!=null)return w
v=q.gdA()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c1S(v)
t=q.c1R(v)
s=B.b0(v.e)
r=v.f
return new C.jW(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hVo(o)},
c1S(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cX)s=t.w>=28||A.o.F(A.o.aq(t.x.a,100)-1,0,8)>=A.o.F(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.R},
c1R(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cX&&t.w<28)return B.b0(t.Q)}return A.aM},
agh(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacx()){w.c.L(x.q).f.U(D.fgI)
return}w.abm(d)
w.b2J(C.bEr(d))
return}if(C.ckL(v)){w.abm(d)
w.b2J(d)
return}w.m(new C.eEs(w,d))},
atl(){var w,v,u,t,s,r,q=this
q.a35(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kJ(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eCv(q))
if(r&&q.c!=null){u.toString
q.Kc(u,s)}return}q.u8()
q.m(new C.eCw(q))},
b2I(d){this.abm(d)
this.a0z(d,!0)},
abm(d){if(!C.kJ(d.w))return
C.fSF(d,this.d)},
a0z(d,e){return this.ciL(d,e)},
b2J(d){return this.a0z(d,!1)},
ciL(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEr(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPo():r)
t.dy.W(0,q.toLowerCase())
C.ar3(t.a.c,q)}r=s}else r=d
w=C.ckL(r.w)?3:4
break
case 3:w=5
return B.b(t.abn(r),$async$a0z)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aW(t.d,new C.eEP(l))
o=l.a.hQ()
n=C.kJ(o.w)&&C.ill(o)
t.m(new C.eEQ(t,o,p))
if(n){m=A.d.bj(t.d,new C.eER(o))
if(m>=0){t.d[m]=o.hQ()
t.u8()}}if(!t.ad2(l.a))t.ZD()
r=!1
if(t.c!=null)if(!t.ad2(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.asN(r)&&C.fOF(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.U(D.fhi)
case 1:return B.h(u,v)}})
return B.i($async$a0z,v)},
abn(d){return this.bRv(d)},
bRv(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lw(r.c,A.Ag),$async$abn)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.la(!1,r,s.c,s.d,null,A.Ag,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abn,v)},
oo(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ckL(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cka(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oo,v)},
afZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eEr(),s,null,!0,!0,x.H),$async$afZ)
case 3:if(t.c==null){w=1
break}t.atl()
case 1:return B.h(u,v)}})
return B.i($async$afZ,v)},
afY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eEo(),s,null,!0,!0,x.H),$async$afY)
case 3:if(t.c==null){w=1
break}t.m(new C.eEp())
t.atl()
case 1:return B.h(u,v)}})
return B.i($async$afY,v)},
ZD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ZD)
case 3:r=e
if(B.k0(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aB("Bool","ngmy_marriage_hint_seen",!0),$async$ZD)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffi)
case 1:return B.h(u,v)}})
return B.i($async$ZD,v)},
Kc(d,e){return this.ctd(d,e)},
ctd(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kc=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahp(s,t.gEW(),t.gEV(),!0,e,t.d),$async$Kc)
case 9:w=4
break
case 6:w=10
return B.b(C.ahq(s,t.gEW(),t.gEV(),!0,e,t.d),$async$Kc)
case 10:w=4
break
case 7:w=11
return B.b(C.ahr(s,t.gEW(),t.gEV(),!0,e,t.d),$async$Kc)
case 11:w=4
break
case 8:w=12
return B.b(C.ahs(s,t.gEW(),t.gEV(),!0,e,t.d),$async$Kc)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kc,v)},
c3u(){var w,v,u,t,s=this
if(!s.gacx()){s.c.L(x.q).f.U(D.ffv)
return}w=s.gPo()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.aho(u,t,v,new C.eDH(s),new C.eDI(s),w)},
agi(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dR,null,new C.eEy(u),s,!0,!0,!1,A.lS,!1,!1,x.N),$async$agi)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahs(s,u.gEW(),u.gEV(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahp(s,u.gEW(),u.gEV(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahq(s,u.gEW(),u.gEV(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahr(s,u.gEW(),u.gEV(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c3u()
return B.h(null,v)}})
return B.i($async$agi,v)},
chR(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1r()
w=C.cD()
v=C.Cg(t,t,t,t,D.DR,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eEz(u,v))},
aaK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qN()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ipU(s),$async$aaK)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cM(q.r,new C.eCz())
t.d9(new C.eCA(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaK,v)},
aii(d,e,f,g){var w=null,v=g?A.dt:A.bO,u=B.L(g?A.aW:A.cr,A.r,1)
return B.hb(B.aA(w,B.p(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qN()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eEK(),q),q.k("M.E"))}o=s!=null&&s.b===D.lR?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.U(D.fht)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eEL(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0y)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0y,v)},
agz(){return this.ciK()},
ciK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qN()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ipG(s,t.f+1,o),$async$agz)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jw(s,B.T(s).c)
p.a=A.d.bj(o.r,new C.eEN(q))
t.d9(new C.eEO(p,t,o,q,r))
t.c.L(x.q).f.U(D.fhS)
case 1:return B.h(u,v)}})
return B.i($async$agz,v)},
agG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qN()||!t.Ao()){w=1
break}s=t.gdA()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eF4(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.U(D.ff3)
w=1
break}o=new B.N(p,new C.eF5(),B.T(p).k("N<1,I>")).f1(0,new C.eF6())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b5,A.aP),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eF7(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agG)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eF8())
case 1:return B.h(u,v)}})
return B.i($async$agG,v)},
agl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qN()){w=1
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
return B.b(C.hDh(s,new C.Fb(r,q,p,o==null?"":o)),$async$agl)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d9(new C.eEA(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahP(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agl,v)},
abg(){return this.bQN()},
bQN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qN()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ipT(s,t.f+1,l),$async$abg)
case 3:r=e
q=$.hb4
$.hb4=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d9(new C.eCQ())
t.c.L(x.q).f.U(D.feV)
w=1
break}if(!q){s=r.CW
s=C.hC0(l,s==null?"":s,!1)}else s=!1
if(s){t.d9(new C.eCR(t,l,r))
t.c.L(x.q).f.U(D.fil)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jw(s,B.T(s).c)
s=l.r
m.a=A.d.bj(s,new C.eCS(p))
o=s.length
t.d9(new C.eCT(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abg,v)},
aSx(d,e){if(e){this.ah8()
return}this.chR(d,!1)},
bMh(){return this.aSx(null,!1)},
ah8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c3,null,new C.eFe(t),r,!0,!0,!0,A.pH,!1,!1,x.N),$async$ah8)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFf(t,C.ii8(s).pU()))
case 1:return B.h(u,v)}})
return B.i($async$ah8,v)},
d9(d){var w=this
if(w.qN())return
w.Id()
w.b1r()
w.m(d)
w.KG()
w.oA()
w.pH()},
a9f(){this.d9(new C.eBu(this,D.n1))},
aU1(){var w=this.gdA()
if(w==null)return
this.d9(new C.eCO(this,w))},
aT7(){var w=this.e
if(w==null||w.r.length<=1)return
this.d9(new C.eCM(this))},
b5C(d,e){if(this.e==null||d===e)return
this.d9(new C.eFn(this,d,e))},
OC(d){return this.bOi(d)},
bOi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPo():s)
w=5
return B.b(C.ar1(t.a.c,r),$async$OC)
case 5:t.dy.I(0,r.toLowerCase())
case 4:s=d.a
C.asx(s)
w=6
return B.b(C.b32(t.a.c,s),$async$OC)
case 6:if(t.c==null){w=1
break}t.m(new C.eCI(t,d))
w=7
return B.b(t.u8(),$async$OC)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
cta(d,e){var w=this
if(d.z){w.ajZ()
return}w.m(new C.eFm(w,d,e))
w.pH()},
kc(){var w,v,u,t,s,r=this.gdA()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xs(d){return this.ch.c3(0,d.a,new C.eCy(d))},
avd(d){return this.CW.c3(0,d.a,new C.eD9())},
a35(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Ys(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.ao$.d.c
if(u!=null)u.jq()},
b99(){return this.a35(!0)},
a31(d){var w,v,u=this
if(u.qN())return
if(!u.Ao())return
w=u.Ys(d)
if(w==null||w.b!==D.cX)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xs(w).sb1(0,"")}u.m(new C.eH4(u,d))
$.aV.x1$.push(new C.eH5(u,d,w))},
b9I(d){var w=this
if(d.b===D.cX&&!w.kw()&&w.Ao()){w.a31(d.a)
return}w.aBH(d.a)},
aBH(d){var w,v,u,t,s,r=this
if(r.kw())return
w=r.r
if(w!=null&&w!==d){v=r.Ys(w)
if(v!=null&&v.b===D.cX){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eGu(r,s,d))
if(s||d==null){t=$.aV.ao$.d.c
if(t!=null)t.jq()}},
aOF(){this.d9(new C.eBv(this))},
po(d){return this.bDl(d)},
bDl(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$po=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oo(),$async$po)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eBs(t,d))
case 1:return B.h(u,v)}})
return B.i($async$po,v)},
Wv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hm(78,1920),$async$Wv)
case 3:s=e
if(s==null||t.gdA()==null){w=1
break}t.d9(new C.eBi(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wv,v)},
Wp(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdA()==null){w=1
break}w=3
return B.b(T.Dr(t.a.c),$async$Wp)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gav(s)){t.c.L(x.q).f.U(D.fiV)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eBf(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wp)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdA()==null){w=1
break}t.d9(new C.eBg(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wp,v)},
auc(){var w=this,v=w.r
if(v==null||w.gdA()==null)return
if(A.d.aW(w.gdA().z,new C.eCK(v))){w.c.L(x.q).f.U(D.fhW)
return}if(w.w===v)w.a35(!0)
w.d9(new C.eCL(w,v))},
bKy(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fg)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cX)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPn(d,e){var w=this,v=w.kc(),u=w.gdA(),t=w.e
if(t==null)return
w.d9(new C.eBX(w,v,d,e,t,u))},
bEW(d){return this.aPn(d,null)},
a9v(d){return this.bF3(d)},
bF3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9v=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9E.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oo(),$async$a9v)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cX)t.bEW(s.w>=28||s.x.gdQ(0)>=A.H.gdQ(0)?d.d:d.e)
else if(r===D.fg){r=d.c
t.aPn(r.j(0.88),r)}w=1
break}t.d9(new C.eC1(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9v,v)},
a9u(d){return this.bF1(d)},
bF1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kc()
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
return B.b(t.oo(),$async$a9u)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eC_(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9u,v)},
bEM(d){var w=this.gdA()
if(w==null)return
this.d9(new C.eBW(this,w,d))},
a0E(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ipP(r),$async$a0E)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oA()
t.m(new C.eEZ(t,s))
w=4
return B.b(t.u8(),$async$a0E)
case 4:if(t.c!=null)t.agh(s)
case 1:return B.h(u,v)}})
return B.i($async$a0E,v)},
ab7(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ab7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a35(!0)
t.oA()
s=t.c
s.toString
w=3
return B.b(C.S2(s,q),$async$ab7)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ab7,v)},
E3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oA()
t=4
w=7
return B.b(C.aRD(m),$async$E3)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aR3(o,q,m.b),$async$E3)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E3,v)},
FL(d,e){return this.cFZ(d,e)},
cFZ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FL=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qN()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a35(!0)
t.oA()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eHd(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.ij6(q?"":s)
o=C.hAW(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eHe(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cz3(n.length,o,s),$async$FL)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ij0(h.a)
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
return B.b(t.cz2(n,o),$async$FL)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fe(t.d,new C.eHf(s))
s=h.a.b
w=11
return B.b(t.cz0(k.b,s),$async$FL)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.ij5(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.U(D.fj6)
w=1
break}w=12
return B.b(t.cz1(j.a,s,o,j.c),$async$FL)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eHg(h,t,i))
t.pH()
case 1:return B.h(u,v)}})
return B.i($async$FL,v)},
cz3(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGK(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cz2(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGJ(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cz0(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGD(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cz1(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGF(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acB(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acC(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.du,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ev,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fu3,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXm(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.L(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.VK,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aXp(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aI(!1,A.a3,!0,w,B.aO(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.na,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.z5,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDD(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c0M(d,e,f,g,h,i){return this.aXp(d,e,f,!1,g,h,i)},
awy(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.L(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dg,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a0w,w,w,w)},
aXo(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cn,w,new B.b9(B.n(14),A.a1),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.nR,w,w,w),w,new C.eDC(d,f),v)},
aXn(d,e){return this.aXo(d,e,null)},
Kx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pr(l,s.c,s.d),$async$Kx)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aN("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gag(o.z),n=new B.eA(l,new C.eGv());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaN(l.charCodeAt(0)==0?l:l,r.b),$async$Kx)
case 4:l=t.a
w=5
return B.b(B.pq(l.c,l.d),$async$Kx)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kx,v)},
Iz(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Iz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pr(q,s.c,s.d),$async$Iz)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaN(A.Y.az(r.ak(),null),r.b+".json"),$async$Iz)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.d),$async$Iz)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Iz,v)},
b8T(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oA()
u.u8()
w=u.c
w.toString
v=B.eb(new C.eH3(u,t),!1,null,x.z)
B.a6(w,!1).cd(v)},
HN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oo(),$async$HN)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fSS(),$async$HN)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ilX(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.av,null,new C.eBn(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HN)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d9(new C.eBo(t,s))
w=1
break}if(p==="split")t.d9(new C.eBp(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HN,v)},
NX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qN()){w=1
break}w=3
return B.b(t.oo(),$async$NX)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRC(s,null,null),$async$NX)
case 4:r=e
if(r==null||t.gdA()==null){w=1
break}t.d9(new C.eBt(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NX,v)},
b5o(d){var w=this.e
if(w==null||!C.kJ(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aQK(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRC(s,t==null?null:B.b0(t),u)},
a9d(d){return this.bDc(d)},
bDc(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qN()){w=1
break}if(!t.Ao()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fjl)
w=1
break}w=3
return B.b(t.aQK(),$async$a9d)
case 3:r=f
if(r==null||t.gdA()==null){w=1
break}t.d9(new C.eBk(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9d,v)},
ahS(d){return this.crW(d)},
crW(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qN()){w=1
break}if(!t.Ao()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fit)
w=1
break}w=3
return B.b(t.aQK(),$async$ahS)
case 3:r=f
if(r==null||t.gdA()==null){w=1
break}t.d9(new C.eFk(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahS,v)},
cex(){var w,v,u=this
if(u.kw())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bE(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cEZ()}},
cEZ(){var w,v,u,t,s,r=this.gdA()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d9(new C.eHb(this,r,(A.o.aJ(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c16(){var w,v,u,t,s,r=this.gdA()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d9(new C.eDG(this,r,u.d))},
c5X(d){var w
if(this.kw())return!1
w=this.e
if((w==null?null:C.kJ(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fPq(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lq&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c5Y(d){var w
if(this.kw())return!1
w=this.e
if((w==null?null:C.kJ(w.w))!==!0)return!0
if(!this.Ao())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fPq(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lq&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O4(d){return this.bFt(d)},
bFt(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qN()){w=1
break}if(!t.Ao()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fhj)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ar5(p),$async$O4)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.U(D.fhY)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a86(r)
w=1
break}t.m(new C.eC5(t,d,o))
t.oA()
$.aV.x1$.push(new C.eC6(t))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
Wt(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oo(),$async$Wt)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bF7(),$async$Wt)
case 4:s=e
if(s==null||t.gdA()==null){w=1
break}t.d9(new C.eBh(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wt,v)},
OR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oo(),$async$OR)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fSJ(r),$async$OR)
case 4:q=e
if(q==null){w=1
break}t.d9(new C.eD7(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
ji(d){this.d9(new C.eBq(this,d))},
qC(d){return this.bEF(d)},
bEF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qN()){w=1
break}m=!D.aSp.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oo(),$async$qC)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HN()
w=1
break A
case"sign_paper":t.NX()
w=1
break A
case"hd_photo":t.Wt()
w=1
break A
case"sharpen":t.OR()
w=1
break A
case"print":t.E3()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.d9(new C.eBz(s))
w=1
break A
case"text_box":t.aOF()
w=1
break A
case"picture":t.Wv()
w=1
break A
case"present":t.b8T()
w=1
break A
case"new_slide":t.a9f()
w=1
break A
case"export_json":t.Iz()
w=1
break A
case"outline_share":t.Kx()
w=1
break A
case"flashcard_tool":t.vM(D.J8)
w=1
break A
case"quiz_tool":t.vM(D.J9)
w=1
break A
case"worksheet_tool":t.vM(D.Ja)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.d9(new C.eBA(t,s))
w=1
break A
case"delete_el":t.auc()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdA()==null){w=1
break A}t.d9(new C.eBB(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdA()==null){w=1
break A}t.d9(new C.eBM(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.d9(new C.eBP(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.d9(new C.eBQ(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.d9(new C.eBR(s))
w=1
break A
case"grayscale":case"brighten":t.OR()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.d9(new C.eBS(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.d9(new C.eBT(s))
w=1
break A
case"rectangle":t.po(D.bj)
w=1
break A
case"circle":t.po(D.eX)
w=1
break A
case"triangle":t.po(D.kb)
w=1
break A
case"arrow":t.po(D.DT)
w=1
break A
case"line":case"divider":t.po(D.fH)
w=1
break A
case"word_count":r=t.gdA()
if(r==null){w=1
break A}for(q=A.d.gag(r.z),p=new B.eA(q,new C.eBU()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eBV(),B.T(n).k("Y<1>")).gJ(0)}t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.ji(C.j3(A.K,!1,t.gqR().d.l(),A.aG,40,A.bq,A.u,0.18,q,"Presentation Title",0,D.n2,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.ji(C.j3(A.K,!1,t.gqR().e.l(),A.aG,22,A.bq,A.a8,0.12,q,"Subtitle goes here",0,D.dk,0.8,0.1,0.48))
w=1
break A
case"bullets":t.ji(C.j3(A.bk,!0,4279310375,A.aG,20,A.bq,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vd,0.8,0.1,0.22))
w=1
break A
case"numbered":t.ji(C.j3(A.bk,!1,4279310375,A.aG,20,A.bq,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.vc,0.8,0.1,0.22))
w=1
break A
case"quote":t.ji(C.j3(A.K,!1,4279310375,A.aG,24,A.cF,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dk,0.8,0.1,0.3))
w=1
break A
case"citation":t.ji(C.j3(A.bk,!1,4284773515,A.aG,14,A.bq,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.vd,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.ji(C.j3(A.dX,!1,4279310375,A.aG,14,A.bq,A.a8,0.08,C.cD(),C.bF9(),0,D.dk,0.24,0.72,0.04))
w=1
break A
case"page_number":t.ji(C.j3(A.dX,!1,4279310375,A.aG,13,A.bq,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dk,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d9(new C.eBC(t))
w=1
break A
case"footer_bar":t.d9(new C.eBD(t))
w=1
break A
case"highlight":t.d9(new C.eBE(t))
w=1
break A
case"redact":t.d9(new C.eBF(t))
w=1
break A
case"callout":t.d9(new C.eBG(t))
w=1
break A
case"checkboxes":t.ji(C.j3(A.bk,!1,4279310375,A.aG,20,A.bq,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dk,0.8,0.1,0.2))
w=1
break A
case"table":t.ji(C.j3(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dk,0.8,0.1,0.18))
w=1
break A
case"memo":t.d9(new C.eBH(t))
w=1
break A
case"letter":t.ji(C.j3(A.bk,!1,4279179050,A.aG,17,A.bq,A.a8,0.82,C.cD(),C.bF9()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"agenda":t.ji(C.j3(A.bk,!1,4279310375,A.aG,22,A.bq,A.V,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vd,0.8,0.1,0.12))
w=1
break A
case"toc":t.ji(C.j3(A.bk,!1,4279310375,A.aG,18,A.bq,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dk,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.ji(C.j3(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dk,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.ji(C.j3(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.08,C.cD(),"Initials: ______",0,D.dk,0.3,0.65,0.78))
w=1
break A
case"approved":t.ji(C.j3(A.K,!1,4278556265,A.aG,28,A.bq,A.u,0.12,C.cD(),"APPROVED",0,D.n2,0.32,0.62,0.08))
w=1
break A
case"draft":t.ji(C.j3(A.K,!1,4292617766,A.aG,28,A.bq,A.u,0.12,C.cD(),"DRAFT",0,D.dk,0.32,0.62,0.08))
w=1
break A
case"confidential":t.ji(C.j3(A.K,!1,871318596,A.aG,36,A.bq,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dk,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d9(new C.eBI(t))
w=1
break A
case"progress":t.d9(new C.eBJ(t))
w=1
break A
case"stars":t.ji(C.j3(A.K,!1,4279310375,A.aG,36,A.bq,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qW,0.8,0.1,0.4))
w=1
break A
case"equation":t.ji(C.j3(A.K,!1,4279310375,A.aG,32,A.bq,A.V,0.14,C.cD(),"y = mx + b",0,D.dk,0.8,0.1,0.38))
w=1
break A
case"timeline":t.ji(C.j3(A.K,!1,4279310375,A.aG,18,A.bq,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vc,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d9(new C.eBK(t))
w=1
break A
case"compare":t.d9(new C.eBL(t))
w=1
break A
case"link_text":t.ji(C.j3(A.bk,!1,4280640491,A.n7,16,A.bq,A.a8,0.1,C.cD(),"https://example.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"phone":t.ji(C.j3(A.bk,!1,4279310375,A.aG,18,A.bq,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"email":t.ji(C.j3(A.bk,!1,4280640491,A.aG,18,A.bq,A.a8,0.1,C.cD(),"name@email.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d9(new C.eBN(t))
w=1
break A
case"cover_page":r=t.gdA()
if(r==null){w=1
break A}t.d9(new C.eBO(t,r))
w=1
break A
case"invoice":t.ji(C.j3(A.bk,!1,4279179050,A.aG,16,A.bq,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"resume":t.ji(C.j3(A.bk,!1,4279179050,A.aG,17,A.bq,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"minutes":t.ji(C.j3(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bF9()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.ji(C.j3(A.bk,!1,4279310375,A.aG,17,A.bq,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"rubric":t.ji(C.j3(A.bk,!1,4279310375,A.aG,15,A.bq,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dk,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qC,v)},
cyv(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f9s.q(0,this.z)},
cyu(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
baB(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cp,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bB
u=B.L(u,A.r,o&&e?2:1)
t=C.ilM(d)
s=o?12:18
r=o?A.H:A.cT
if(o)if(e)q=f
else q=g?A.ad:A.am
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.p(p,D.PJ,A.f,p,p,D.Ff,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aA(p,new B.an(A.a0,p,A.ac,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bR3(d){var w,v=null,u=this.kc()
if(u==null)return A.bL
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.am,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.N(D.Si,new C.eD6(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.i,0,v,v)},
vM(d){return this.bDk(d)},
bDk(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSj.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oo(),$async$vM)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eBr(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f7N
w=h.e
if(w==null)return h.bHe()
v=h.gdA()
v.toString
u=h.c
u.toString
t=B.R(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aH(u,A.c_,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eP,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.biy
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gT4()}else j=!1
if(j)k.push(new C.a8B(h.a.c,!1,h.e.gbcQ(),h.gceu(),g))
else if(s&&h.e!=null&&!h.kw()&&C.ckL(h.e.w)){j=h.a
k.push(new C.a8B(j.c,j.d,g,h.gcfD(),g))}if(s)k.push(h.bQZ(w,t,r))
if(s&&h.kw()){w=t?A.fQ:A.kO
j=B.n(14)
i=B.L(A.bm.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bXp,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fQ,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yy,A.iu,g,g,g))}w=!n
if(w&&!h.kw())k.push(h.c6V(t,r))
if(w&&h.kw())k.push(h.cG_(t))
if(r&&h.kc()!=null&&w&&!h.kw())k.push(h.c6Q(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8i(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8i(t,!1),g))
i.push(B.E(new B.bL(A.b1,g,g,h.bIz(v,t,!s||p),g),1))
if(h.cyv(r)&&u&&s&&!h.kw())i.push(h.ceg(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kw()&&h.cyu(!1))j.push(new B.a5(240,g,h.bTR(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c6R(t))
return B.c5(g,m,B.bm(!1,new B.an(A.a0,g,A.ac,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHe(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.R(p).ax.a===A.J
p=w?A.c3:A.bO
v=r.a.e
u=r.cdp(A.bm,A.qC,new C.eC9(r),r.gchO(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOn(A.bm,A.hU,"Blank Presentation",new C.eCa(r)),1),A.at,B.E(r.aOn(A.b2,A.uQ,"Class Template",new C.eCb(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.by,s,A.n6,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bE7(w))
else{t=new B.i1(t,B.T(t).k("i1<1>"))
A.d.v(u,t.gdR(t).dK(0,new C.eCc(r,w),x.l))}return B.c5(q,p,B.bm(!1,B.cj(u,q,q,new B.Q(18,12,18,v),q,q,A.ai,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bP5(){this.m(new C.eCN(this))
var w=this.c
w.toString
if(B.aH(w,A.c_,x.w).w.a.a<900){w=$.aV.ao$.d.c
if(w!=null)w.jq()}},
agA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.R(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eEY(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agA)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agA,v)},
Bn(d,e){return this.cyR(d,e)},
cyR(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bn=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.YH,!0,"Dismiss",j,new C.eGw(),new C.eGx(d,e),A.iH,!0,x.N),$async$Bn)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajZ()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gT4()){r.ajZ()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRD(d),$async$Bn)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aR3(j,q,d.b),$async$Bn)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FL(d,!1),$async$Bn)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.YH,!0,"Dismiss",j,new C.eGy(),new C.eGz(d),A.a3,!0,x.y),$async$Bn)
case 20:if(g===!0)r.OC(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahC("Rename presentation",d.b),$async$Bn)
case 24:l=g
if(l!=null)r.cta(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ak()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eGA(r,k))
r.pH()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bn,v)},
b3m(d,e){var w=null
return B.bM(!1,D.fTS,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bm,w,w,w,A.az,w,A.lJ,w,w,w,w,w,A.ky,w,w))},
bE7(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBw(this,d),null)},
bNb(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eCB(),x.dv).bZ(0,new C.eCC()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.al0,this.aOY(v,e,new C.eCD(),f),null)},
aOY(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e1)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bu,n,n,n,10),A.r2],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.p(n,new B.c6(A.aL,A.e,A.O,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bG(r,r,r,r),new B.bg(s,s,s,s),n,n,A.n),n,n,n,n,A.mR,n,n,n))
A.d.v(l,u)}return B.eH(A.a6,B.A(l,A.m,n,A.e,A.O,0,n,n),A.f,A.e5)},
bE5(d,e,f){return this.aOY(d,e,null,f)},
bNd(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.ds9
else if(v==="hati_kuhoweya")w=D.dcH
else{if(v==="hati_kiapo_uongozi")v=D.cZq
else v=C.kJ(v)?D.d6b:A.RU
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eCG(this,f,d,e,w),null)},
c6R(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cX)return A.bL
w=k.Xs(i)
v=k.avd(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.C8,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bM(!1,D.fPi,j,j,!0,j,j,j,new C.eE6(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.av:A.c
q=B.n(18)
p=B.L(A.bm.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hb,B.c3(new B.D(A.eV,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),w,A.bm,j,j,j,j,2,D.c2x,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xb,j,j,j,j,j,j,!1,"\u2022",j,new C.eE7(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.R,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AB,A.ao,j,A.V8,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bi),j),1)
q=B.n(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.cg(B.A(B.a([k.uC(G.OJ,j,new C.eE8(k,i),d),k.uC(G.a1E,j,new C.eE9(k,i),d),k.uC(I.aps,j,new C.eEa(k,i),d),k.uC(I.a2p,j,new C.eEb(k,i),d),k.uC(k.bE3(i.as),j,new C.eEc(k,i),d),k.uC(D.aqx,j,new C.eEd(k,i),d),k.uC(D.aqw,j,new C.eEe(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.k.M(i.w)
return B.bR(0,B.aI(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.al9,B.p(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.am,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dd],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lK,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c6Q(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bL
w=m.b
v=w===D.cX
u=B.n(18)
t=x.O
t=d?B.a([A.bp,A.R],t):B.a([A.c,A.aQ],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b6U(A.j2,"Edit",new C.eDS(o,m),d,!0))
if(w===D.lR)p.push(o.b6U(A.HI,"Shape & ring",new C.eDT(o),d,!0))
p.push(o.uC(A.CZ,"Format",new C.eDU(o),d))
if(v)A.d.v(p,B.a([o.uC(G.OJ,n,new C.eDV(o,m),d),o.uC(D.aqx,n,new C.eDW(o,m),d),o.uC(D.aqw,n,new C.eDX(o,m),d)],q))
p.push(A.b3)
p.push(o.cwI(A.ef,n,o.gaT5(),d,!0))
p.push(o.uC(A.hF,"Done",new C.eDY(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a6,A.a9,A.x,t,n,n),A.n),n,n,n,A.C7,A.lK,n,n,n)},
bE3(d){switch(d.a){case 2:return D.a2m
case 1:case 5:return D.a2o
default:return D.a2n}},
c7L(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dX
default:return A.bk}},
aBF(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ax
else if(h)w=A.c
else{v=g?A.ad:A.aM
w=v}v=B.n(12)
u=B.n(12)
t=h?K.I0:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e1,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qt,B.aI(!1,A.a3,!0,n,B.aO(!1,v,!1,B.eI(new B.D(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.O,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uC(d,e,f,g){return this.aBF(d,e,f,g,!1,!1)},
b6U(d,e,f,g,h){return this.aBF(d,e,f,g,h,!1)},
cwI(d,e,f,g,h){return this.aBF(d,e,f,g,!1,h)},
bQZ(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bp,A.R],m):B.a([A.c,A.ni],m)
w=B.L(e?A.aM:A.o4,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bm.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3w(A.eM,"Back",p.gbKi(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.R,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dd,B.E(B.A(B.a([new B.dp(1,A.co,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bV:A.am,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uf,o,A.e,A.i,0,A.d0,o),1)],q)
if(!p.kw()){u=p.a3w(A.pq,"Undo",p.ax.length===0?o:p.gcGA(),e)
A.d.v(r,B.a([u,p.a3w(D.bQQ,"Redo",p.ay.length===0?o:p.gcrS(),e)],q))}r.push(p.a3w(A.z3,"PDF",new C.eD_(p),e))
r.push(p.a3w(A.hV,"Download as video",new C.eD0(p),e))
if(!p.kw())r.push(B.Ct(o,o,B.X(A.ou,e?A.ad:A.bu,o,o,o,o),new C.eD1(p),A.I,new C.eD2(p),A.ag,"More",x.N))
r.push(A.dd)
r.push(B.aI(!1,A.a3,!0,o,B.aO(!1,B.n(14),!0,B.eI(D.eqJ,o,new B.o(o,o,o,B.n(14),o,K.I0,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCu(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.p(o,B.A(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bAY,D.bGk,o,o,o)},
cG_(d){var w=this,v=null,u=B.n(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.L(d?A.cs:A.aO,A.r,1)
return B.p(v,B.cg(B.A(B.a([w.j4(A.uO,"Print",new C.eHh(w),d),w.j4(A.z3,"Download PDF",new C.eHi(w),d),w.j4(A.qI,"Present",w.gaCu(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yy,G.amM,v,v,v)},
a3w(d,e,f,g){var w,v=null
if(f==null)w=g?A.aW:A.dq
else w=g?A.ad:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c6V(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.L(d?A.cs:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eEh(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.amr,new B.ff(new C.eEi(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wm,r.aii(A.ku,"Ending celebration",r.gci0(),d),q),new B.D(S.wm,r.aii(A.HI,"Logo ring & frame",r.gciI(),d),q)],x.p):A.f4)
A.d.v(t,w?B.a([new B.D(S.wm,r.aii(A.mf,"Look and feel",r.gciJ(),d),q),new B.D(S.wm,r.aii(A.pt,"Edit this slide's text",r.gcjf(),d),q)],x.p):A.f4)
t.push(new B.D(S.wm,B.hb(B.aA(q,B.p(q,D.f7b,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,N.lF.j(0.4),A.I,10)],x.V),D.asA,A.n),q,34,q,q,A.f1,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eEj(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cg(B.A(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bGP,q,q,A.aL)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cg(r.cuj(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yy,q,q,q,q)},
cuj(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dlj[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cw5(s),t.a,new C.eFG(u,e),a3,D.aSj.q(0,s)))}w.push(e.j4(A.li,"Notes Slide",new C.eFH(e),a3))
w.push(e.lY(A.HH,"Quiz",new C.eFI(e),a3,!0))
w.push(e.lY(P.Hj,"Worksheet",new C.eFT(e),a3,!0))
w.push(e.lY(W.HK,"Flashcard",new C.eG3(e),a3,!0))
w.push(e.lY(A.Pz,"Lab Report",new C.eGe(e),a3,!0))
w.push(e.lY(A.qF,"Rubric",new C.eGl(e),a3,!0))
w.push(e.lY(A.pm,"Minutes",new C.eGm(e),a3,!0))
w.push(e.lY(A.ot,"Syllabus",new C.eGn(e),a3,!0))
w.push(e.lY(A.a2W,"Timeline",new C.eGo(e),a3,!0))
return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dmF[v]
w.push(e.lY(r.b,r.c,new C.eGp(e,r),a3,!D.aSp.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j4(A.wJ,a0,e.gaOE(),a3),e.j4(A.uK,"Picture",new C.eFJ(e),a3),e.j4(A.zd,"Bio link",new C.eFK(e),a3),e.j4(A.a2V,"Table",new C.eFL(e),a3),e.j4(A.PD,"Sticky",new C.eFM(e),a3),e.j4(A.rU,"Divider",new C.eFN(e),a3),e.j4(A.zm,"Header",new C.eFO(e),a3),e.lY(A5.rS,"Rectangle",new C.eFP(e),a3,!0),e.lY(A.pj,"Circle",new C.eFQ(e),a3,!0),e.lY(A.a2c,"Triangle",new C.eFR(e),a3,!0),e.lY(A.jF,"Arrow",new C.eFS(e),a3,!0),e.lY(D.bPh,"Parallelogram",new C.eFU(e),a3,!0),e.lY(D.bRN,"Hexagon",new C.eFV(e),a3,!0),e.lY(A.rU,"Line",new C.eFW(e),a3,!0),e.lY(A.z3,"PDF",new C.eFX(e),a3,!0),e.lY(N.a34,"Signature",new C.eFY(e),a3,!0),e.j4(A4.CK,"Quote",new C.eFZ(e),a3),e.j4(D.a1M,a1,new C.eG_(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.c_,x.w).w
u=x.p
t=B.A(B.a([e.aPw("Wide 16:9",D.DR,a3),e.aPw("Short 9:16",D.oK,a3),new B.D(A.fz,B.mZ(D.bTX,d,D.fLy,d,new C.eG0(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bKx("This slide",!e.Q,a3,new C.eG1(e)),A.bn,e.aRL("All slides",e.Q,a3,new C.eG2(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bKy()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bV:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a52,new C.eG4(e),n),n.k("ak.E"))
n=B.cg(B.A(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dnG[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.aW,1.5,A.r,-1)
l.push(new B.D(A.fz,B.aA(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bG(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eG5(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cg(B.A(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGo()
g=B.T(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eG6(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.P,q,A.an,p,A.P,o,A.aw,n,A.P,m,A.aw,l,A.P,j,A.aw,B.cg(B.A(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.an,e.c3B(a3)],u),A.E,d,A.e,A.O,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aH(w,A.c_,x.w).w
u=new C.eFF(e)
t=new C.eGq(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Si,f.dy,new C.eG7(e,u,f),A.b2)
A.d.v(p,B.a([o,A.aw,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdA()
q=q==null?d:q.r
p.push(t.$4(D.Si,q,new C.eG8(e,u),A.bm))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.O,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j4(A.li,w,new C.eG9(e),a3),e.j4(A.uO,"Print deck",new C.eGa(e),a3),e.lY(D.aoy,"Export JSON",new C.eGb(e),a3,!0),e.j4(A.fU,"Duplicate Slide",e.gaU0(),a3),e.j4(A.ef,a2,e.gaT6(),a3),e.cAc(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j4(D.a1M,a1,new C.eGc(e),a3),e.j4(A.fU,"Duplicate",e.gaU0(),a3),e.j4(A.ef,a2,e.gaT6(),a3),e.j4(A.qI,"Present",e.gaCu(),a3),e.j4(A.CX,a0,e.gaOE(),a3),e.j4(A.CP,"Fit Text",new C.eGd(e),a3),e.j4(A.z3,"Download PDF",new C.eGf(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j4(A.jJ,"Transfer",new C.eGg(e),a3))
if(f!=null){w=B.a([A.ae,e.j4(G.OJ,"Bold",new C.eGh(e,f),a3),e.j4(G.a1E,"Italic",new C.eGi(e,f),a3),e.j4(G.ao9,"Underline",new C.eGj(e,f),a3),e.j4(Ag.OK,"Bullets",new C.eGk(e,f),a3),e.bTA(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bR3(a3))
w.push(e.j4(D.bNZ,"Delete",e.gaT5(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.i,0,d,d)}},
aPw(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oK
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.ab8,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dd,D.bT8],v))
return new B.D(A.fz,B.js(t,t,t,B.A(u,A.m,t,A.e,A.O,0,t,t),t,new C.eC4(this,w,e),s===e,A.bm.j(0.25),t,t,t),t)},
cAc(d){var w,v,u,t,s,r=this,q=null,p=r.gdA()
if(p==null)return A.bL
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aW:A.cr,A.r,1)
u=B.n(8)
t=B.X(A.Hh,d?A.aD:A.am,q,q,q,14)
s=B.aG(q,q,q,q,D.arz,q,q,q,new C.eGN(r,p),q,q,q,q,q,A.ce)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bl,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arq,q,q,q,new C.eGO(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.O,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.GV,A.mQ,q,q,q)},
cw5(d){switch(d.a){case 6:return W.HK
case 7:return A.HH
case 8:return P.Hj
case 4:return A.zm
default:return A.li}},
bTA(d,e){var w=null,v=B.L(e?A.aW:A.cr,A.r,1),u=B.n(8),t=B.aG(w,w,w,w,D.arz,w,w,w,new C.eDc(this,d),w,w,w,w,w,A.ce),s=A.k.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bl,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arq,w,w,w,new C.eDd(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.O,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uv,A.mQ,w,w,w)},
c3B(d){var w=null
return B.Ct(B.DX(B.X(A7.a1P,d?A.ad:A.bu,w,w,w,16),w,w,D.fRd,w,w,w),w,w,new C.eDK(),A.I,this.gbEL(),A.cl,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dt:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dw:A.bm,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.p(w,D.PJ,A.f,w,w,D.Ff,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aI(!1,A.a3,!0,w,B.aO(!1,v,!0,B.eI(new B.D(A.hb,B.x(B.a([new B.an(A.a0,w,A.ac,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bu,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.O,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j4(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8i(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ai:A.aL
v=B.hN(t,new C.eGZ(u,s,e,d),s.r.length,A.cl,t,w,new C.eH_(e),!1)
s=d?A.av:A.bO
w=B.a([],x.p)
if(e&&!u.kw())w.push(new B.D(A.cl,B.Iv(E.arN,new C.eH0(u),B.nU(t,A.bm,t,t,t,t,t,t,t,t,t,t,E.aT2,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bIz(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oK?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bL(A.b1,v,v,new B.fF(w,B.aA(v,B.cr(new C.eCt(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eCu(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bIB(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kJ(a9.w))===!0,b1=b0&&C.fPq(b3),b2=b0&&b3.b===D.lq&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kw())v=!b0||a7.c5Y(b3)
else v=!1
if(!a7.kw())u=!b0||a7.c5X(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cf:A.bm
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.heb(b3))o=a8
else if(p&&!a7.kw())o=a7.gcew()
else o=a7.kw()?a8:new C.eCh(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iL
i=w&&C.heb(b3)&&a7.Ao()?new C.eCi(a7,b3):a8
h=v&&b3.b===D.cX?new C.eCj(a7,b3):a8
g=u?new C.eCk(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bg
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.lq?A.L:a8
if(b1){a1=a7.kw()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.c_,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ao()
a3=b3.b===D.cX
a4=a3?a7.Xs(b3):a8
a5=a3?a7.avd(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.c_,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eCl(a7,b3):a8
a3=v&&a3?new C.eCm(a7,b3):a8
a6=C.b2Z(q,a4,a1,b3,a5,a2,a3,new C.eCn(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ap(-4,B.aA(a8,B.p(a8,D.bVY,A.f,a8,a8,new B.o(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCo(a7,b3,b4,b5),a8,a8,new C.eCp(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kw()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bWF,A.f,a8,a8,new B.o(A.dj,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc15(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kw()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bYi,A.f,a8,a8,new B.o(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCq(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cX)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.c_,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.p(a8,D.h_k,A.f,a8,a8,new B.o(A.bm,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lf,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCr(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eK(A.A,f,new B.an(A.a0,a8,A.ac,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bP("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aRL(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bm.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.L(e?A.bm:A.bB,A.r,1)
if(e)t=A.bm
else t=f?A.aD:A.am
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dd,B.p(r,D.PJ,A.f,r,r,D.Ff,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.p(r,B.A(t,A.m,r,A.e,A.O,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bKx(d,e,f,g){return this.aRL(d,e,f,g,!1)},
ceg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b5,A.aP),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aQ
t=f?A.xI:l
if(f)s=new B.bG(new B.ay(e?A.bB:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tg,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bu,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3m(e,new C.eEl(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bV:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.an,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(10),A.dn),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eEm(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aVj(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bL
w=new C.eDq(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.F(1-a2.c,0.06,1)
t=A.k.F(1-a2.d,0.06,1)
s=A.k.F(1-a2.e,0.01,1)
r=A.k.F(1-a2.f,0.01,1)
q=a5?A.dU:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.R,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3m(a3,a0.gbP4())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fM3,B.E(B.kT(a1,a1,a1,u,0.05,new C.eDr(w,a2),A.k.F(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.fYH,B.E(B.kT(a1,a1,a1,t,0.05,new C.eDs(w,a2),A.k.F(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cX
if(m)o.push(B.A(B.a([D.fFA,B.E(B.kT(a1,a1,a1,96,10,new C.eDt(w,a2),A.k.F(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lR
if(l||n===D.lq||n===D.TE)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fS0,B.E(B.kT(a1,a1,a1,s,0,new C.eDu(w,a2),A.k.F(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.h_1,B.E(B.kT(a1,a1,a1,r,0,new C.eDv(w,a2),A.k.F(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Df[j]
i.a=null
g=h.a
i.a=g
k.push(B.js(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pN,a1,a1,a1),a1,new C.eDw(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bH,k,A.bt,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.D8[j]
f.a=null
g=e.a
f.a=g
h.push(B.js(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pN,a1,a1,a1),a1,new C.eDx(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.an,k,A.P,i,A.an,B.bW(A.bH,h,A.bt,a1,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eDy(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bW(A.bH,l,A.bt,a1,6,6),A.af,B.hqB(new C.eDz(w,a2),D.cA9,B.ey([a2.as],k),!0,a1,k)],p))}if(n===D.fg){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eDA(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bH,m,A.bt,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bY4,D.fU3,new C.eDB(a0,a5),B.bn(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cj(o,a1,a1,a1,q,a1,A.ai,a5)
if(a5)return d
q=a3?A.cs:A.c
p=a4?A.xI:a1
if(a4)o=new B.bG(new B.ay(a3?A.bB:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tg,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GE,a1,a1,a1)},
bTR(d){return this.aVj(d,!1,!1,null)},
cdp(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eDE(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fuY,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bG,A.cU,r.bE5(D.d3q,d,B.R(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dO(B.hb(B.aI(!1,A.a3,!0,q,B.aO(!1,q,!0,B.eI(D.fdF,q,new B.o(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c4.j(0.4),A.er,8)],p),D.asF,A.a7),q,q,q),A.cQ,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.A(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.R(w).ax.a===A.J
w=B.n(20)
v=x.O
v=s?B.a([D.beE,D.bf6],v):B.a([A.c,A.kO],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bU,q,q,q)},
aOn(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBd(this,g,d,e,f),null)},
ahC(d,e){return this.cq6(d,e)},
cq6(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b5,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eFi(d,q),p,null,!0,!0,x.N),$async$ahC)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahC,v)},
QB(d){var w=d.bT()
return""+B.bK(w)+"/"+B.bV(w)+"/"+B.bB(w)}}
C.ag3.prototype={}
C.aAm.prototype={
S(){return new C.bez(null,null)}}
C.bez.prototype={
gcCx(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bK(u)+"/"+B.bV(u)+"/"+B.bB(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bl(u,A.qq,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bzr,u,1,u,v)
w.cq(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxn()},
Ju(d){var w=0.12+d*0.09,v=A.k.F(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aE(0,new B.hU(w,v,A.cw).aE(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bF7,B.c9(new B.h4(B.a([u,w],x.dS)),new C.d9I(this),v),v),v,v,v)}}
C.beO.prototype={
B(d){var w=null,v=B.n(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bFo,B.aI(!1,A.a3,!0,w,B.p(w,B.bx(B.n(22),B.x(B.a([new B.D(D.bEz,B.x(B.a([B.p(w,D.bWL,A.f,w,w,new B.o(A.ax.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fWf,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fwc,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dV,D.byu,B.A(B.a([B.E(B.bM(!1,D.fKe,w,w,!0,w,w,w,new C.da5(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.ny,w,A.oP,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fPD,w,w,!0,w,w,w,new C.da6(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.ax,w,w,w,w,w,A.ny,w,A.oP,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.O,0,A.p),A.aq),A.f,w,A9.Xq,new B.o(A.av,w,u,v,D.d3P,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.Kx.prototype={
S(){return new C.bey()}}
C.bey.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dF,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dO(B.da(B.aA(o,B.vS(B.cV(o,B.A(B.a([r,A.at,new B.dp(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eQ:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.ba,A.O,0,o,o),o,o,A.b6,new B.o(n,o,u,v,t,o,A.n),A.eJ,o,o,o,o,A.nz,o,o,1/0),A.cw,A.jl,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d9D(p,d),new C.d9E(p),new C.d9F(p),new C.d9G(p),o,o,o,!1,A.a4),k),new B.q(0,(1-k)*16))}}
C.Qo.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aI(!1,A.a3,!0,t,B.aO(!1,s,!0,new B.D(A.eV,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ev,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.na,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eG,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0x.prototype={
S(){return new C.aFV(D.dk,null,null)}}
C.aFV.prototype={
gZK(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bz0,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b8M(d){if(!this.a.c.ay)return
this.x=d
this.gZK().ix(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.F(w.d,0,w.c.r.length-1)
C.axd(D.fk7)
C.iiE()
v.S4()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZK().t()
v=w.z
if(v!=null)v.a1(0)
C.axd(D.fk8)
C.iiH()
w.bzt()},
cFn(){B.jT()
this.m(new C.eHY())
var w=this.c.L(x.q).f
w.a5K()
if($.bmu)w.U(D.fgZ)},
S4(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cz(B.dv(0,0,0,0,0,A.o.F(C.hoP(u,w),1,120)),new C.eHO(v))},
cF0(){var w,v=this
v.m(new C.eHX(v))
if(v.r)v.S4()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXf(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cyX(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eHP(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cz(A.lI,new C.eHQ(w))},
azi(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eHK(u))
u.S4()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXf()){u.cyX()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eHL(u,A.o.E(w+1,s)))
u.b8M(w)
u.S4()}},
coL(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eHM(v))
v.S4()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eHN(v,w,t))
v.b8M(w)
v.S4()}},
cAs(d){var w,v=this,u=v.e
if(u===D.cp){u=v.d
u===$&&B.c()
return new B.mH(d,new B.bP(u,x.ac))}w=v.cAt(u)
u=v.d
u===$&&B.c()
return B.p4(new B.mH(d,new B.bP(u,x.ac)),w,new C.eHV(),A.b6,A.b6,new C.eHW(v))},
cAt(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bzn
case 16:return A.iJ
case 18:return A.mM
default:return A.ma}},
cAr(d,e,f){var w,v,u,t=null,s=B.cJ(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jE(e,new B.bf(s,new B.bp(A.vm,A.I,w),w.k("bf<bN.T>")),t,!0)
case 3:w=x.K
return B.jE(e,new B.bf(s,new B.bp(A.TS,A.I,w),w.k("bf<bN.T>")),t,!0)
case 4:case 21:w=x.K
return B.jE(e,new B.bf(s,new B.bp(A.ih,A.I,w),w.k("bf<bN.T>")),t,!0)
case 5:w=x.K
return B.jE(e,new B.bf(s,new B.bp(A.tf,A.I,w),w.k("bf<bN.T>")),t,!0)
case 6:case 16:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bN.T>")))
case 7:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bN.T>")))
case 8:return B.c9(s,new C.eHR(s),e)
case 9:return B.c9(s,new C.eHS(s),e)
case 10:return B.c9(s,new C.eHT(s),e)
case 11:return B.c9(s,new C.eHU(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.is(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bN.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.ji(B.jE(e,new B.bf(s,new B.bp(A.vm,A.I,v),v.k("bf<bN.T>")),t,!0),A.t,new C.btK(w,t))
case 15:w=x.K
return B.jE(e,new B.bf(s,new B.bp(A.TS,A.I,w),w.k("bf<bN.T>")),t,!0)
case 19:w=B.dr()
w.mZ((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fw(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eK(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.ji(new C.apv(B.c9(n.gZK(),new C.eHZ(n,v,w),m),m),A.t,m)}else{t=B.rZ(new C.Jv(w,!0,!1,m))
l=B.b0(w.e)
u=n.cAs(B.e8(B.ji(t,A.t,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.hoP(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oW,m,m,m),A.bn,D.bZ9],k),A.m,m,A.e,A.O,0,m,m),A.f,m,m,new B.o(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.ha,m,m,m)
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
l.push(B.bR(0,new C.Ob(new C.Fb(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oK?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.ji(B.uS(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmu){r=B.Iv(A.lm,new C.eI_(d),B.nU(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.Iv(B.X(n.r?Am.uN:A.hs,m,m,m,m,m),n.gcF_(),B.nU(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ap(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fW,m,m,m),A.f,m,m,new B.o(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.ha,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.aA(A.c5,B.p(A.lx,$.bmu?A.bL:s,A.f,m,m,m,m,64,m,m,D.bA7,m,m,150),A.y,!1,m,n.gcFm(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c5(m,A.w,B.aA(m,new B.an(A.a0,m,A.b4,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eI0(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KD.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.amd,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7c,w,w,w,w,w,w,w,w)}}
C.btK.prototype={
js(d){return new B.a2(0,0,0+d.a*A.k.F(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjz.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.n(999)
break
case"rounded":w=B.n(18)
break
case"arch":w=D.b3Z
break
default:w=B.n(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.n(999)
else{t=B.n(q==="rounded"?9:3)
q=t}w=B.cV(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.wP,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b6,new B.o(s.f,r,u,w,r,r,A.n),A.h8,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a5(78,r,B.x(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjy.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dBb.h(0,p)
if(o==null)o=D.dmP
p=p==="none"
w=p?q:new B.a9(A.a6,A.a9,A.x,o,q,q)
p=p?A.d_.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aqL:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a7),q,52,q,q,A.ey,q,q,52)
return B.aA(q,new B.a5(66,q,B.x(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aLI.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a5(0,w.gdG())
w.b9$=null
w.a2()}}
C.aNI.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzy.prototype={}
C.aNJ.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.b31.prototype={}
C.WY.prototype={
S(){return new C.aFT()},
bjx(d){return this.e.$1(d)}}
C.aFT.prototype={
gb7_(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabv(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb7_()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQn(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7_()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8h(){return A.d.cH(this.gabv(),0,new C.eHu())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RE()},
RE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3D(s.c,s.f),$async$RE)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eHq(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RE,v)},
Jw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabv()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fSF(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pr(o,q.c,q.f),$async$Jw)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eb(new C.eHt(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cd(q),$async$Jw)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.f),$async$Jw)
case 5:w=6
return B.b(t.RE(),$async$Jw)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jw,v)},
S2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.edL,!0,"NgmySlidesTransferScan",x.N),$async$S2)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eHr(t))
w=4
return B.b(C.aif(s),$async$S2)
case 4:r=e
t.m(new C.eHs(t))
o=J.a7(r)
if(o.gav(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.U(D.ffO)
w=1
break}w=5
return B.b(t.a.bjx(r),$async$S2)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S2,v)},
Jv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabv()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pr(s,r.c,r.f),$async$Jv)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fSU(null,A.d.gH(n),s,t.a.f)}else q=C.fSU(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.H8(q,"ngmy_slides_"+p,!1),$async$Jv)
case 4:o=e
s=t.a
w=5
return B.b(B.pq(s.c,s.f),$async$Jv)
case 5:w=6
return B.b(t.RE(),$async$Jv)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jv,v)},
a3H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eHv(t))
w=3
return B.b(C.bES(),$async$a3H)
case 3:s=e
t.m(new C.eHw(t))
if(s==null||J.cq(s)){w=1
break}w=4
return B.b(t.a.bjx(s),$async$a3H)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3H,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.df:A.bO,k=o.gabv().length!==0,j=B.ap(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bm.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ad:A.am,n,n,n,n),n,n,n,new C.eHz(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.R,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.AA],h),A.m,n,A.e,A.i,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bm.j(0.35),A.eY,24)],x.V)
u=B.ap(n,B.X(A.qC,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.A(B.a([B.p(n,D.bZI,A.f,n,n,new B.o(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ev,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bKh],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hb(B.aA(A.c5,D.fdH,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcjr(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a0,n,A.ac,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a3A,A.n),n,n,n,n,E.a0k,n,n,1/0),A.dV,o.azj(m,"What to transfer"),A.af,B.A(B.a([B.E(o.aZH(A.qI,m,new C.eHA(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aZH(D.bPa,m,new C.eHB(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d6,o.azj(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.n(16)
s=B.L(m?A.bB:A.aO,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.am,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.N(u,new C.eHC(o,m),B.T(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.n6)
w.push(o.azj(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.arV(A.aJ,k,!0,A.jI,m,o.r,o.gcdt(),"Scan on another device","Show QR"),1),A.at,B.E(o.aOo(A.ko,!0,A.jn,m,o.gcvF(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bCz(A.aY,k,A.hV,m,o.r,o.gcdq(),"Download .json","Backup file"),1),A.at,B.E(o.aOo(A.ay,!0,AB.zl,m,o.gcHU(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bm.j(m?0.12:0.08)
u=B.n(16)
t=B.L(A.bm.j(0.28),A.r,1)
s=B.X(A.lN,A.bm.j(0.9),n,n,n,18)
r=o.gaQn()
q=o.gb8h()
p=o.gb8h()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.A(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bu,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bE,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Og,i,n),B.E(B.cj(w,n,n,D.bDH,n,n,A.ai,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,U.XH,A.f,A.dN,n,n,n,n,n,n,n,n,n,n))
return B.c5(n,l,new B.an(A.a0,n,A.ac,A.t,j,n),n,!1,!1,n,n)},
agN(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ip5(s,t.d,t.e),$async$agN)
case 2:return B.h(null,v)}})
return B.i($async$agN,v)},
azj(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bm,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.am,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aZH(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.av:A.c
if(g)w=A.bm
else w=e?A.bB:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bm.j(0.2),A.cA,14)],x.V):s
u=A.bm.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bm,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cl,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.R,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aI(!1,A.a3,!0,s,B.aO(!1,r,!0,B.eI(new B.D(A.bE,B.x(B.a([t,A.X,u,A.bG,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNc(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.av:A.c,m=B.n(16)
if(p)w=A.bm
else w=e?A.bB:A.aO
w=B.L(w,A.r,p?2:1)
v=B.p(q,D.bZU,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a6,A.a9,A.x,B.a([A.bm,A.bm.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.R,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ea:A.pj
if(p)r=A.bm
else r=e?A.aW:A.dq
return new B.D(A.cv,B.aI(!1,A.a3,!0,q,B.aO(!1,o,!0,B.p(q,B.A(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bE,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eHp(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
arV(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bB:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rP,s,s,s)],t)
if(i)u.push(B.ap(s,B.p(s,D.ark,A.f,s,s,D.b6Z,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.R,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aI(!1,A.a3,!0,s,B.aO(!1,p,!0,B.eI(new B.D(E.a_Y,B.x(B.a([new B.an(A.a0,s,A.ac,A.f,u,s),A.af,v,A.bG,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOo(d,e,f,g,h,i,j){return this.arV(d,e,!1,f,g,!1,h,i,j)},
bCz(d,e,f,g,h,i,j,k){return this.arV(d,e,!1,f,g,h,i,j,k)}}
C.WZ.prototype={
S(){return new C.bmt()}}
C.bmt.prototype={
Y(){this.a3()
this.afz()},
afz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fSU(null,A.d.gH(m),k,r.a.f):C.fSU(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kJ(A.d.gH(n).w))C.fSF(A.d.gH(r.a.d),D.dkB)
n=r.a
m=n.c
n=C.im1(n.d)
w=7
return B.b(C.fST(p,C.im6(r.a.d),n,m,q),$async$afz)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eHD(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afz,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.R(d).ax.a===A.J,h=i?A.df:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cH(k.a.d,0,new C.eHF())
v=B.aG(j,j,j,j,B.X(A.eM,i?A.ad:A.am,j,j,j,18),j,j,j,new C.eHG(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.R,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.AA],u),A.m,j,A.e,A.i,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dg,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a3A,A.n),j,j,j,j,E.a0k,j,j,1/0)
q=B.n(24)
s=B.L(A.aJ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vg,A.K,j,j))
else if(k.d==null)r.push(D.eqi)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fKI,A.an,B.aA(j,B.p(j,B.A(B.a([D.c0r,A.at,B.d(m,j,j,j,j,j,j,D.fwC,j,j,j)],u),A.m,j,A.e,A.O,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c5m,A.n),j,j,j,j,A3.alZ,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eHH(k,d),j,j,j,j,j,j,!1,A.a4),A.P,D.fP9,A.aC],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.L(A.bB,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.q7(j,j,!1,l,j,!0,!0,j,!1,D.buA),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cl,j,j,j))
A.d.v(r,p)}r.push(A.aC)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hy,A.K,j,j))
return B.c5(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Og,v,j),B.E(B.cg(B.x(B.a([t,A.aR,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c7j,A.n),j,j,j,j,A.uu,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.ami,j,j,A.ai),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aFQ.prototype={
S(){return new C.aFR(new B.au(A.au,$.aw()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aFR.prototype={
Y(){var w=this
w.a3()
w.e.aV(0,new C.eB7(w))
$.aV.x1$.push(new C.eB8(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a2()},
b1t(){var w,v=this.c
v.toString
w=C.z6(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eP,x.w).w,i=B.n(28),h=B.L(A.bm.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bm.j(0.28),A.vj,36),D.ael],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bWP,A.f,k,k,new B.o(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fHJ,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b7p,k,k,k,k,A.yJ,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gea()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.R
o=new B.aP(14,14)
if(q)n=A.bm
else n=r?A.bm.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bm.j(0.28),A.I,12)],g):k
t.push(new B.by(1,A.bc,B.cV(A.A,B.d(p,k,k,k,k,k,k,D.fpX,k,k,k),k,k,A.b6,new B.o(s,k,new B.bG(m,m,m,m),new B.bg(o,o,o,o),n,k,A.n),A.h8,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.Eu)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.i,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c3f,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uM(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BZ(5,k),new C.bx1()],x.aS),k,k,A.aUf,k,5,k,1,k,k,!1,"\u2022",k,new C.eB3(l),k,new C.eB4(l),k,!1,k,k,!1,k,!0,k,A.ab,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mt,k,k,k,k),0),0,0,0)],a1)
d=C.z6(w.a.a.toUpperCase())==null?k:l.gcdu()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aI(!1,A.a3,!0,k,new B.cR(Af.LJ,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bEc,B.x(B.a([new B.an(A.a0,k,A.ac,A.t,g,k),A.X,D.fG1,A.by,new B.a5(1/0,50,B.bH(D.fX9,k,d,B.bn(A.bm,A.bp,A.am,k,A.c,k,k,k,new B.b9(B.n(16),A.a1),k,k,k)),k),A.an,B.bM(!1,A.nU,k,k,!0,k,k,k,new C.eB5(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.O,0,A.p),A.aq),A.f,k,k,new B.o(A.df,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bx1.prototype={
oV(d,e){var w=e.a.toUpperCase()
return e.cOs(B.hg(A.bz,w.length),w)}}
C.asy.prototype={
S(){return new C.aFU(B.zM(A.Ny,A.o_,A.v_))}}
C.aFU.prototype={
t(){this.d.t()
this.a2()},
b1s(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iX(w,d)},
abq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h0N(s),$async$abq)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1s("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abq,v)},
cds(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.im4(w[u])
if(t!=null){this.b1s(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wL,s,s,s,t.gbRC(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aG(s,s,s,s,B.X(q?A.uH:An.Pe,s,s,s,s,s),s,s,s,new C.eHJ(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.df,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fYn,s,s,s,1,s,!0)
r=B.zL(t.d,A.bZ,t.gcdr())
w=B.n(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.L(A.bm,A.r,3),w,B.a([new B.ac(2,A.G,A.bm.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c5(p,A.w,new B.an(A.a0,s,A.b4,A.t,B.a([r,w,B.ap(32,B.p(s,D.fLP,A.f,s,s,new B.o(v,s,B.L(A.bm.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jm,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxf.prototype={
B(d){var w=null,v=B.n(24),u=B.L(A.aM,A.r,1)
return B.aI(!1,A.a3,!0,w,B.p(w,B.x(B.a([B.p(w,H.ar_,A.f,w,w,D.b78,w,56,w,w,w,w,w,56),A.aR,D.fY3,A.an,new B.k_(this.c,new C.fim(),w,w,x.cI),A.aR,new B.k_(this.d,new C.fin(),w,w,x.cl),A.af,D.fY1],x.p),A.m,w,A.e,A.O,0,A.p),A.f,w,Af.LJ,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,K.a0q,D.bEQ,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8B.prototype={
S(){return new C.bmc(A.bD)},
gd1(){return this.c}}
C.bmc.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a_Y()
w.d=B.de(A.fF,new C.epn(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
a_Y(){return this.crZ()},
crZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.epl(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bE(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ckM(p.c),$async$a_Y)
case 6:r=e
q.a=r==null?A.bD:r
case 4:if(t.c==null){w=1
break}t.m(new C.epm(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_Y,v)},
bTI(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bL
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ax:A.c4
w=v.j(0.14)
u=B.n(14)
t=B.L(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.X(A.Hh,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bTI(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,Aa.al4,A.iu,r,r,1/0)}}
C.a9u.prototype={
nu(){var w,v,u,t=this
t.xS()
w=t.cx
v=t.c
w.btS(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qd(B.H(["/S",D.eu1,"/URI",new B.rU(B.Xz(w.as),A.vn,!0)],x.N,u),u))}}
C.a9v.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b4H.prototype={
bBy(d,e,f,g,h,i,j,k,l,m){var w=B.ey([D.esk],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcRX(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k5(w,new C.coG(),B.a4(w).k("k5<co.E,F>")).f1(0,new C.coH())},
aEO(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tU(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jn(d.a,d.b))
s.n(0,"/Border",B.tU(H.at2))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h2(t.gcRX()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qd(w,x.Y))}}
C.coI.prototype={}
C.a3U.prototype={}
C.aj9.prototype={}
C.aST.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.My(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.biS(w)
u=x.N
t=x.Y
s=new C.coI(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bBy(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qd(B.H(["/Type",D.eu_],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9u(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.I(0,r)
v.dx.push(r)}}
C.ayc.prototype={}
C.aUm.prototype={
fV(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.eg(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LG(t)
u.Tj(0)
u.pj(0,v)
w.fV(d)
u.nx(0)}}}
var z=a.updateTypes(["aB<~>()","~(lY)","P(i3)","~()","P(eN)","P(oG)","P(lY)","~(i3)","P(eN,eN)","KD(Z)","P(o3)","P(ls)","aB<P>()","F(F,i3)","a8<m,@>(i3)","ai<A4>()","m(o3)","P(a8S)","m(lY)","m(wp)","P(Fk)","F(i3,i3)","m(eN)","v(eN)","cL(eN)","v(hF)","~(hF)","eN(v7,I,I,I,I,F{fx:m,key:m,rotation:I})","eN(m,I,F)","F(oG,oG)","P(A4)","P(m,ai<A4>)","a8<m,@>(oG)","o3()","ZD(Z)","eN(m,I,I,I,I,I{align:qi,anim:hF,bullets:P,color:F?,delay:F,fx:m,key:m,style:Ip,weight:nR})","a1W(Z)","eN(m,I,I,I,I{anim:hF,delay:F,fx:m,key:m})","aB<~>(oG)","P(mL)","ZB(Z)","a1r(Z)","a1q(Z)","Qd(Z)","a_O(Z)","eN(v7,I,I,I,I,F,m,m{anim:hF,delay:F,rotation:I,stroke:F,strokeWidth:I})","eN(m,I,I,I,I,I,m,m,F)","eN(I,I,m,F{size:I})","v(rI,I,I)","ls()","oG(a8<@,@>)","~(uY)","Fk()","fi(eN)","v(j8)","a_l(Z)","~(Fb)","a_G(Z)","F(eN,eN)","eN(eN)","a8<m,@>(eN)","eN(a8<@,@>)","lY(lY)","a8<m,@>(lY)","lY(a8<@,@>)","P(jW)","jW()","m(i3)","~(ai<oG>)","V(ai<i3>)","V(i3)","ai<i3>(m?)","adA(Z,F)","~(P(eN,eN))","aee(Z)","afU(Z,F)","u(lY,P)","WM(Z)","aeh(Z)","WN(Z)","~(mP)","i3(i3)","I(eN)","a0V(Z)","a0x(Z)","i3()","ai<FH>()","aB<~>(ai<i3>)","v(bA<F,i3>)","D(jW)","D(Fk)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(ml)","ai<jB<mP>>(Z)","jB<mP>(mP)","i3(a8<@,@>)","WY(Z)","eN(m,I,I,I,I,I,F{align:qi,style:Ip,weight:nR})","WZ(Z)","v(i3)","~(me)","Jv(Z,lY,v?)","F(a9v)","aB<ai<a8<m,@>>?>()","m(m)","aB<A3>({paper:m?,photo:dJ?,request:m,template!lv})","aB<a8K>({doc!A3,history:ai<+(m,m)>,instruction!m,photo:dJ?,template!lv})","aeb(Z)"])
C.cNX.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:60}
C.cNY.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:69}
C.cNZ.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galo(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mD(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:69}
C.cO_.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTh.prototype={
$1(d){return J.eD(A.dM.gaU(d),d.byteOffset,d.byteLength)},
$S:1689}
C.fF0.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iS(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iS(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iS(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iS(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1690}
C.c3d.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:28}
C.c3e.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aR(v,J.k(w==null?"":w))},
$S:42}
C.c3g.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fVQ.prototype={
$1(d){return new C.a1W(this.a,this.b,C.imX(),null)},
$S:z+36}
C.fgP.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fgT.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fgU.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fgV.prototype={
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
C.fgQ.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fgR.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fgS.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fgK.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hh,w,w,w)
return B.eg(B.a([B.bM(!1,E.aWm,w,w,!0,w,w,w,new C.fgI(d),w,w),B.bM(!1,D.fJe,w,w,!0,w,w,w,new C.fgJ(d),w,w)],x.p),w,w,D.ZL,v,w,w,w,w,D.fYG,w)},
$S:18}
C.fgI.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fgJ.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fgL.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fgM.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fgZ.prototype={
$0(){var w=this.a
return w.m(new C.fgY(w,this.b))},
$S:0}
C.fgY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fgO.prototype={
$0(){var w=this.a
return w.m(new C.fgN(w,this.b,this.c))},
$S:0}
C.fgN.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.I(0,v)},
$S:0}
C.fgW.prototype={
$0(){return this.a.a25(this.b)},
$S:0}
C.fgX.prototype={
$0(){return this.a.PI(0,this.b)},
$S:0}
C.fh1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fh2.prototype={
$0(){var w=this.a
return w.m(new C.fh0(w,this.b))},
$S:0}
C.fh0.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fh_(),B.T(w).k("N<1,m>")))}},
$S:0}
C.fh_.prototype={
$1(d){return d.a},
$S:z+67}
C.foh.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hm0(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oG(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.foi.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fIa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcD()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fI8.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fI9.prototype={
$2(d,e){return e.c.aR(0,d.c)},
$S:z+29}
C.fVk.prototype={
$1(d){return d.ak()},
$S:z+32}
C.fEF.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fWb.prototype={
$1(d){return new C.ZD(this.a,null)},
$S:z+34}
C.cPj.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cPl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPo.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cPn())},
$S:12}
C.cPn.prototype={
$0(){},
$S:0}
C.cPq.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2U(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cPm(r))
if(p<0)q.c4(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aio(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:289}
C.cPm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPr.prototype={
$1(d){},
$S:32}
C.cPk.prototype={
$1(d){return new C.ZB(this.b,this.a.gcBT(),null)},
$S:z+40}
C.cPs.prototype={
$1(d){return D.hqu},
$S:z+43}
C.cPf.prototype={
$1(d){var w=null,v=B.n(24),u=B.L(D.Zj,A.r,1),t=x.p
return B.at(B.aI(!1,A.a3,!0,w,B.p(w,B.x(B.a([new B.D(D.bEC,B.x(B.a([B.p(w,D.bTY,A.f,w,w,new B.o(A.ax.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fI9,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fvx,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dV,new B.D(A.qv,B.A(B.a([B.E(B.dT(D.fPb,new C.cPd(d),B.di(w,w,w,w,w,w,w,w,w,E.nr,w,w,A.cn,w,new B.b9(B.n(14),A.a1),D.b4q,w,w,w,w)),1),A.at,B.E(B.bH(D.fVo,w,new C.cPe(d),B.bn(A.bC,w,w,w,w,w,A.cn,w,new B.b9(B.n(14),A.a1),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.O,0,A.p),A.f,w,A.xL,new B.o(D.ag8,w,u,v,D.d8E,w,A.n),w,w,w,K.a0q,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1691}
C.cPd.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPe.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPg.prototype={
$0(){return J.nL(this.a.d,new C.cPc(this.b))},
$S:0}
C.cPc.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPb.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.L(D.Zj,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bZ1,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.asA,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aW1,t,t,t),A.bG,D.fVj],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aC],q)
for(w=0;w<2;++w){v={}
u=D.dwe[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.az8(u[1],u[2],u[3],new C.cP9(v,d),!1,t))}q.push(A.an)
q.push(D.byx)
q.push(A.an)
q.push(new C.az8(A.ef,"Delete book","Remove it from this device",new C.cPa(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.O,0,A.p),A.f,t,t,new B.o(D.ag8,t,r,s,t,t,A.n),t,t,t,A.up,E.a03,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cP9.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPa.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cPi.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLl,12)],x.V)
return B.dO(B.eK(A.A,e,B.p(w,B.bx(B.n(4),new B.a5(62,95.81818181818181,B.eH(A.A,F.aph(d),A.f,A.dC),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.q(f,0))},
$S:z+48}
C.cPh.prototype={
$0(){return this.a.c7A()},
$S:0}
C.cP8.prototype={
$0(){return this.a.b_U(0,this.b)},
$S:0}
C.cP7.prototype={
$0(){return this.a.DI(this.b)},
$S:0}
C.cP6.prototype={
$0(){return this.a.DI(this.b)},
$S:0}
C.cPt.prototype={
$2(d,e){var w=this.a
return w.bG9(J.t(w.d,e))},
$S:41}
C.cOA.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bi()},
$S:0}
C.cOz.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b30("Page "+(v.length+1),"",""))},
$S:0}
C.cOC.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cOK.prototype={
$0(){},
$S:0}
C.cOL.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cOD.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cO.gcu().aM(this.c)},
$S:0}
C.cOB.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOF.prototype={
$0(){return this.a.Rb(this.b)},
$S:0}
C.cOG.prototype={
$0(){return this.a.Rb(this.b)},
$S:0}
C.cOH.prototype={
$0(){var w=this.a
w.m(new C.cOE(this.b))
w.Ex()},
$S:0}
C.cOE.prototype={
$0(){return this.a.c=""},
$S:0}
C.cOJ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cOI(w,d))
w.Ex()},
$S:z+51}
C.cOI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOQ.prototype={
$2(d,e){if(d)this.a.Bi()},
$S:131}
C.cOM.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bi(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.U(D.fin)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cON.prototype={
$0(){return this.a.aZO(this.b,-1)},
$S:0}
C.cOO.prototype={
$0(){return this.a.aZO(this.b,1)},
$S:0}
C.cOP.prototype={
$0(){return this.a.c8W(0,this.b)},
$S:0}
C.fMI.prototype={
$1(d){return C.hw4()},
$S:44}
C.fMJ.prototype={
$1(d){return null},
$S:32}
C.fsB.prototype={
$1(d){return null},
$S:32}
C.fNH.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:324}
C.fNG.prototype={
$2(d,e){return A.o.aR(e.length,d.length)},
$S:242}
C.fNN.prototype={
$1(d){var w=this.a
return C.he2(d)===w||C.hAS(d)===w},
$S:z+4}
C.frC.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:77}
C.ceZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fMG.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fMH.prototype={
$1(d){return C.fPq(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fHx.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fPO,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HT,D.fJS,new C.fHv(d),B.bn(A.c4,w,w,w,A.w,w,A.cn,w,w,w,w,w)),A.X,B.es(A.uU,D.fR7,new C.fHw(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHv.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHw.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHy.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,D.fFS,w,w,!0,w,w,w,new C.fHt(d),w,w),B.bH(D.fXH,w,new C.fHu(d),w)],x.p),w,w,w,D.fZE,w,w,w,w,D.fFL,w)},
$S:18}
C.fHt.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fHu.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ekE.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ekC.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ekD.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ekF.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ekG.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fNM.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:77}
C.fNI.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a6,w,w,B.BO(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1692}
C.fNK.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fwR,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:132}
C.fNL.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.iq,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dO(B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.iq,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.q(-d*0.38,0))],x.p),A.m,w,A.ba,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1693}
C.fNJ.prototype={
$2$female$size(d,e){var w=null,v=d?D.aik:this.a,u=B.L(A.iq,A.r,1),t=e*0.32,s=B.ap(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ac,A.t,B.a([s,B.ap(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ago,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1694}
C.fZE.prototype={
$1(d){return new C.aeb(this.a,this.b,null)},
$S:z+108}
C.e79.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bv9:A.MY,q=B.L(D.jy.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c4.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.arj,A.f,t,t,new B.o(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jy.j(0.35),A.er,10)],x.V),D.c7X,A.n),t,t,t,t,A.yz,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(O.a0g,B.x(B.a([p,A.aC,B.A(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jy,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fw2,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.il(!0,t,e,A.y,D.aTj,new C.e78(w,this.c),v,D.alT,t,A.ai,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mz,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:117}
C.e78.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adA(w,new C.e77(this.b,w),null)},
$S:z+72}
C.e77.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fHB.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fHC.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fTn,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HT,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHz(d),B.bn(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oC,D.VQ,new C.fHA(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHz.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHA.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHF.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fHG.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fGW,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HT,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHD(d),B.bn(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oC,D.VQ,new C.fHE(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHD.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHE.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHJ.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fHK.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fNA,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HT,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHH(d),B.bn(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oC,D.VQ,new C.fHI(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHH.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHI.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h06.prototype={
$1(d){return D.hvH},
$S:z+74}
C.epq.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.blN:A.MY,s=B.L(A.aB.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aB.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.c0o,A.f,v,v,new B.o(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c4.j(0.35),A.er,10)],x.V),D.asF,A.n),v,v,v,v,A.yz,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(O.a0g,B.x(B.a([r,A.aC,B.A(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.MU,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.ftt,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.il(!0,v,e,A.y,D.aTj,new C.epp(this.b),19,D.alT,v,A.ai,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mz,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.epp.prototype={
$2(d,e){var w=D.Sz[e]
return new C.afU(w,new C.epo(this.a,w),null)},
$S:z+75}
C.epo.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fPu.prototype={
$0(){return B.hcZ(C.iak(this.a))},
$S:338}
C.fPt.prototype={
$0(){var w=C.hel(this.a)
return"data:image/png;base64,"+A.cO.gcu().aM(w)},
$S:22}
C.fpT.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jo(d,e),new B.jo(w,e+v),new B.jo(d+f*14,e),new B.jo(w,e-v)],x.J)
B.a2Q(this.a,C.fE(4291404327),v)},
$S:696}
C.h0h.prototype={
$1(d){return new C.WM(this.a,null)},
$S:z+77}
C.esn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esm())},
$S:29}
C.esm.prototype={
$0(){},
$S:0}
C.eso.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esl(w,d))},
$S:1696}
C.esl.prototype={
$0(){return this.a.x=J.eQ(A.dM.gaU(this.b))},
$S:0}
C.esp.prototype={
$1(d){},
$S:32}
C.es_.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.es6.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.es7.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eEK)},
$S:0}
C.es8.prototype={
$0(){return this.a.as=!1},
$S:0}
C.es1.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cd)},
$S:0}
C.es2.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.es3.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.es4.prototype={
$0(){return this.a.as=!1},
$S:0}
C.es5.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dW,A.iI)}},
$S:7}
C.es0.prototype={
$0(){var w=this.a,v=w.z,u=C.fQ7(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cNB(C.fQ7(t))},
$S:0}
C.erY.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.erZ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ese.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.esf.prototype={
$0(){var w=this.a
return w.m(new C.esd(w))},
$S:0}
C.esd.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.esg.prototype={
$0(){var w=this.a
return w.m(new C.esc(w,this.b))},
$S:0}
C.esc.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.esh.prototype={
$1(d){var w=this.a
return w.m(new C.esb(w))},
$S:9}
C.esb.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.esi.prototype={
$1(d){var w=this.a
return w.m(new C.esa(w))},
$S:9}
C.esa.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.esj.prototype={
$0(){var w=this.a
return w.m(new C.es9(w,this.b))},
$S:0}
C.es9.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.esk.prototype={
$1(d){return this.a.a_K()},
$S:2}
C.erX.prototype={
$0(){return this.a.ccK(this.b)},
$S:0}
C.ciE.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:340}
C.ciC.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ciD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fP4.prototype={
bo9(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTg(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cJS($.re().jn(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mV(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bo9(d,e)},
$S:1697}
C.fNm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fNo.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.ds(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:77}
C.fNn.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fv(t,A.ct,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r5,A.bW,t,A.dD,A.bX)
v=this.a
w.o3(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fps.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fpt(),B.T(w).k("Y<1>")).gJ(0)},
$S:250}
C.fpt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpq.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:240}
C.fpr.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:240}
C.ciF.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaC8()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.he1(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.haJ(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gcl5(),"\n\n")
d=B.fv(a6,A.ct,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afo(k,q,1.28),j),A.r5,A.bW,a6,A.dD,A.bX)
d.o3(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.he1(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.haJ(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afo(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.bc,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r5,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aC7(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:440}
C.ciG.prototype={
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
n=o.gaC8()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.he1(f,new B.G(!0,e,a5,i,a5,a5,h,A.cT,A.bq,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.haJ(g.length===0?B.a([a6],n):g,l))break}a1=o.afo(i,h,1.28)
a2=new C.ciH(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ke,new B.a5(v,a5,a4.f,a5),A.Ke,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bH1,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.bc,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aC7(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:153}
C.ciH.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r5,w,w),w)},
$S:1698}
C.h0k.prototype={
$1(d){return new C.WN(this.a,this.b,null)},
$S:z+79}
C.et9.prototype={
$1(d){return d.lb()},
$S:1699}
C.eta.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.et8(w,d))},
$S:1700}
C.et8.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.esX.prototype={
$0(){return this.a.y=!0},
$S:0}
C.esY.prototype={
$0(){return this.a.y=!1},
$S:0}
C.et3.prototype={
$0(){return B.a6(this.a,!1).eO()},
$S:0}
C.et4.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bF,A.r,2.5)
return B.aA(w,B.p(w,B.b4(w,w,w,new C.bdN(u,v.gazb(),w),A.fJ),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.et1(v),new C.et2(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.et1.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:255}
C.et2.prototype={
$1(d){var w=this.a
w.m(new C.esZ(w,d,this.b,this.c))},
$S:219}
C.esZ.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.F(s.x*r.d,1,6)
w=s.gazb()
r=r.a
v=t.c
u=t.d
s.r=A.k.F(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.F(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.et5.prototype={
$1(d){var w=this.a
return w.m(new C.et0(w,this.b))},
$S:9}
C.et0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.et6.prototype={
$1(d){var w=this.a
return w.m(new C.et_(w,d))},
$S:6}
C.et_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.et7.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h0A.prototype={
$1(d){return D.hyu},
$S:z+83}
C.f20.prototype={
$1(d){return this.a.Zn()},
$S:7}
C.f0T.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cO.gcu().aM(v)},
$S:0}
C.f1g.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f1q.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f0C.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0D.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f0A.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0B.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f19.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f1a(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.ji(B.rZ(q>0.2?F.bWI(r,new B.Ej(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.ji(B.da(B.rZ(F.bWI(s.$1(!0),new B.Ej(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bI>0){s=B.b0(s).j(t.bI)
w=t.bf
w.toString
q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c_(D.b1O,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bi))}s=t.aL
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c_(D.b1z,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi))
s=t.aQ
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.a9(A.b1,A.b7,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aQ)],x.O),D.d7c,v),A.n),A.bi))
if(t.aI>0){s=t.k1
q.push(B.ap(v,B.c3(v,new B.o(v,v,v,v,v,new B.a9(A.b1,A.b7,A.x,B.a([A.w.j(0),A.w.j(t.aI),A.w.j(t.aI),A.w.j(0)],x.O),D.diT,v),A.n),A.bi),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c_(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dfL,v),A.n),A.bi))
t=t.aH
if(t>0)q.push(B.b4(v,v,v,new C.bho(t,v),A.az))
return new B.an(A.a0,v,A.b4,A.t,q,v)},
$S:68}
C.f1a.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.bZ,!0,q,!1,q,q),o=r.a,n=o.aZq(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
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
t=o.bF
s=o.c6?-1:1
return B.dO(B.ed(A.A,B.eK(A.A,l,B.fw(A.A,new B.BA(new B.uH(q,q,n,A.xW),p,q),q,B.wc(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.q(-m*r.d*u/2,-t*r.c*u/2))},
$S:655}
C.f1m.prototype={
$0(){return this.a.m(new C.f1l(this.b,this.c))},
$S:0}
C.f1l.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1n.prototype={
$1(d){return this.a.m(new C.f1k(this.b,d))},
$S:6}
C.f1k.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1p.prototype={
$0(){return this.a.m(new C.f1o(this.b,this.c))},
$S:0}
C.f1o.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0s.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f0t.prototype={
$1(d){var w=this.a
return w.m(w.gcDg())},
$S:2}
C.f0u.prototype={
$1(d){return this.a.m(new C.f0r())},
$S:2}
C.f0r.prototype={
$0(){},
$S:0}
C.f0v.prototype={
$0(){var w=this.a
return w.m(new C.f0q(w,this.b))},
$S:0}
C.f0q.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f0x.prototype={
$2(d,e){return A.at},
$S:37}
C.f0w.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bB
q=B.L(q,A.r,t?2.5:1)
r=B.cV(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b6,new B.o(w,w,q,s,w,new B.a9(A.b1,A.b7,A.x,r,w,w),A.n),A.h8,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a5(70,w,B.x(B.a([r,A.fK,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0p(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f0p.prototype={
$0(){var w=this.a
return w.m(new C.f0m(w,this.b))},
$S:0}
C.f0m.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0y.prototype={
$1(d){var w=this.a
return w.m(new C.f0o(w,d))},
$S:9}
C.f0o.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f0z.prototype={
$1(d){var w=this.a
return w.m(new C.f0n(w,d))},
$S:9}
C.f0n.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f1Q.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f1X.prototype={
$1(d){var w=this.a
return w.m(new C.f1Y(w,d))},
$S:31}
C.f1Y.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dX(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f1Z.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:173}
C.f1R.prototype={
$0(){var w=this.a
return w.m(new C.f1P(w,this.b))},
$S:0}
C.f1P.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.I(0,v)},
$S:0}
C.f1S.prototype={
$0(){var w=this.a
return w.m(new C.f1O(w,this.b))},
$S:0}
C.f1O.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f1T.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f1N(v,w.b,w.c,w.d))},
$S:0}
C.f1N.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f1U.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtb(v))},
$S:0}
C.f1V.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f1W.prototype={
$0(){var w=this.a
return w.m(new C.f1M(w))},
$S:0}
C.f1M.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f1z.prototype={
$1(d){return d.a===this.a.dy},
$S:236}
C.f1A.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aAT[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azf(new B.nn(new B.bg(n,n,n,n),A.aq,new B.l3(new B.o(j,j,j,j,j,new B.a9(A.a6,A.a9,A.x,m,j,j),A.n),A.bi,new C.b0U(l,B.b0(k==null?v.w.x:k),A.k.F(w,12,26),j),j),j),u,q.b,o===p,new C.f1y(r,v),2,i))}return B.bW(A.bH,h,A.bt,j,7,7)},
$S:171}
C.f1y.prototype={
$0(){var w=this.b
return w.m(new C.f1t(this.a,w))},
$S:0}
C.f1t.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f1B.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:150}
C.f1E.prototype={
$0(){var w=this.a
return w.m(new C.f1x(w))},
$S:0}
C.f1x.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f1F.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f1G.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f1H.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f1I.prototype={
$0(){var w=this.a
return w.m(new C.f1w(w))},
$S:0}
C.f1w.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f1J.prototype={
$0(){var w=this.a
return w.m(new C.f1v(w))},
$S:0}
C.f1v.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f1K.prototype={
$0(){var w=this.b
return w.m(new C.f1u(this.a,w))},
$S:0}
C.f1u.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f1L.prototype={
$1(d){return this.a.fx=d},
$S:150}
C.f1C.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f1D.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f1d.prototype={
$0(){var w=this.a
return w.m(new C.f1c(w))},
$S:0}
C.f1c.prototype={
$0(){var w=this.a
w.p4=null
w.b5H()},
$S:0}
C.f1e.prototype={
$0(){var w=this.a
return w.m(new C.f1b(w,this.b))},
$S:0}
C.f1b.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f1f.prototype={
$0(){var w=this.a
return w.m(w.gctD())},
$S:0}
C.f15.prototype={
$0(){var w=this.a
return w.m(new C.f14(w))},
$S:0}
C.f14.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f16.prototype={
$0(){var w=this.a
return w.m(new C.f13(w))},
$S:0}
C.f13.prototype={
$0(){var w=this.a
w.aI=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f17.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dgc[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.azf(new B.nn(new B.bg(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BA(new B.uH(o,o,v.aZq(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xW),B.fR(u,A.A,140,o,A.cj,A.bZ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f12(v,s),3,n))}return B.bW(A.bH,m,A.bt,o,10,8)},
$S:171}
C.f12.prototype={
$0(){var w=this.a
return w.m(new C.f11(w,this.b))},
$S:0}
C.f11.prototype={
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
C.f0K.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f0L.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f0M.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f0N.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f0O.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f0P.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f0Q.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f0R.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.f0S.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.f05.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f06.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f07.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f08.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f09.prototype={
$0(){var w=this.a
return w.m(new C.f04(w))},
$S:0}
C.f04.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f0a.prototype={
$1(d){return this.a.b7=d},
$S:150}
C.f0b.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f0E.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f0F.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f0G.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f0H.prototype={
$1(d){return this.a.bf=d},
$S:150}
C.f0I.prototype={
$1(d){return this.a.bI=d},
$S:6}
C.f0f.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f0g.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f0h.prototype={
$1(d){return this.a.bF=d},
$S:6}
C.f0i.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f0j.prototype={
$0(){var w=this.a
return w.m(new C.f0e(w))},
$S:0}
C.f0e.prototype={
$0(){var w=this.a
return w.c9=A.k.E(w.c9+90+180,360)-180},
$S:0}
C.f0k.prototype={
$0(){var w=this.a
return w.m(new C.f0d(w))},
$S:0}
C.f0d.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f0l.prototype={
$0(){var w=this.a
return w.m(new C.f0c(w))},
$S:0}
C.f0c.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f18.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ipJ(v,w.p4)},
$S:0}
C.f10.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bvu:B.fR(v,A.A,w,w,A.cj,A.bZ,!1,w,!1,w,w)
return C.fNu(d.length===0?"rounded":d,u,e)},
$S:126}
C.f0X.prototype={
$0(){var w=this.a
return w.m(new C.f0W(w))},
$S:0}
C.f0W.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f0Y.prototype={
$0(){var w=this.b
return w.m(new C.f0V(this.a,w))},
$S:0}
C.f0V.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f0Z.prototype={
$0(){var w=this.b
return w.m(new C.f0U(this.a,w))},
$S:0}
C.f0U.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f1_.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.F(w.ay,0,1-d)
w.ch=A.k.F(w.ch,0,0.95)},
$S:6}
C.f1j.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b8.j(0.35),A.I,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cn1(),n.r))
l.push(new C.Jv(n.cAb(),!1,!1,t))
o=B.bR(0,B.bx(o,new B.em(new B.an(A.a0,t,A.b4,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.a0,t,A.ac,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.o(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f1i(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:214}
C.f1i.prototype={
$1(d){var w=this.a
return w.m(new C.f1h(w,d,this.b,this.c))},
$S:19}
C.f1h.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.F(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.F(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f1s.prototype={
$0(){var w=this.a
return w.m(new C.f1r(w,this.b))},
$S:0}
C.f1r.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f0J.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f2_.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1k(),B.E(B.at(w.b4k(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSk(),1),w.aOp()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.k.F(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1k(),new B.D(A.hE,B.at(s.b4k(u),t,t,t),t),B.E(s.aSk(),1),s.aOp()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:558}
C.fKL.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bCL(),null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cp,D.cX,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bq,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,A.V)},
$S:z+98}
C.fKK.prototype={
$3(d,e,f){var w=this,v=C.bCL(),u=w.b?A.H:A.cC,t=w.c?A.cF:A.bq
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bj,4280172719,2,d,0,w.f,w.e,D.cp,D.cX,0.82,0.09,w.a)},
$S:z+28}
C.ck9.prototype={
$1(d){return B.w(d)},
$S:17}
C.fSu.prototype={
$0(){return this.a},
$S:z+15}
C.fxs.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fxt.prototype={
$2(d,e){return J.cq(e)},
$S:z+31}
C.fSw.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fSz.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fSA.prototype={
$0(){return A.d.gH(D.wT)},
$S:z+33}
C.fSs.prototype={
$1(d){return d.a},
$S:z+16}
C.fSv.prototype={
$1(d){return d.a},
$S:z+16}
C.fQq.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fQr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQs.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fKP.prototype={
$0(){return C.cD()},
$S:22}
C.fKS.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cp,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bj,4280172719,2,d,s,0,"",t,D.cX,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,"","",A.bq,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,"",j,A.bq,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,j,k,A.bq,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bq,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bq,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dk,!1,k,l,"",m,A.bq,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,!1,null,0,"",k,A.bq,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,j,k,"",l,A.bq,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,!1,k,0,l,m,A.bq,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,k,l,m,"",n,A.bq,A.a8)},
$S:z+35}
C.fKR.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bq,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cp,D.fg,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fKQ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cp,t=v?j:0
return C.er(A.bk,!1,4279310375,A.aG,"",4280640491,24,A.bq,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bj,4280172719,2,"",t,0,"",u,D.lR,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qW,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fKO.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fNf.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hx5.c3(0,A.a.i(s.w).toLowerCase(),new C.fNd(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fNe(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.bqw(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1703}
C.fNd.prototype={
$0(){return F.aPg(this.a.w)},
$S:179}
C.fNe.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBE("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:179}
C.fpm.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fpn.prototype={
$1(d){return d.a},
$S:z+18}
C.fpo.prototype={
$1(d){return d.b},
$S:z+19}
C.h0M.prototype={
$1(d){return D.hyK},
$S:z+41}
C.f8n.prototype={
$0(){return this.a.x=C.i1C(this.b,this.c.b)},
$S:0}
C.f8o.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f8l.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:407}
C.f8m.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:407}
C.f8k.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.av,null,new C.f8f(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.ke,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f8g(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hDi(o,m.cOn(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f8h(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f8f.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f8j(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bbY,A.f,p,p,D.b6S,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.D8:D.Df,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fNu(v,i.b6j(h),u),p)))}t=B.kS(1,m,4,10,10,p,A.dU,!0)
if(!l)return B.bm(!0,new B.D(Ab.yG,t,p),!0,!1,A.ag,!0,!0)
s=new C.f8i(i,d)
m=B.aH(d,A.c_,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ib[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cR(new B.aZ(0,1/0,0,m.a.b*0.85),B.cg(B.x(B.a([D.fLY,A.X,t,A.dV,D.f7j,A.aw,D.fX2,A.X,B.kS(1.15,l,3,10,10,p,A.dU,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yG,p,p,A.ai),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.f8j.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bs:A.dt
return B.aA(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hT,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f8e(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1704}
C.f8e.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f8i.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bN:A.bB
r=B.L(r,A.r,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.arP,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dx(!0,new C.Ob(u.G9(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8d(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:126}
C.f8d.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f8g.prototype={
$0(){var w=this.a
return w.w=w.w.G9("")},
$S:0}
C.f8h.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f83.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f84.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f86.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f87.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f88.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f89.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f85(w,d))},
$S:2}
C.f85.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f8a.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f8B.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.f8C.prototype={
$0(){var w=this.a
return w.m(new C.f8A(w))},
$S:0}
C.f8A.prototype={
$0(){return this.a.e=null},
$S:0}
C.f8D.prototype={
$0(){var w=this.a
return w.m(new C.f8z(w))},
$S:0}
C.f8z.prototype={
$0(){return this.a.x=null},
$S:0}
C.f8F.prototype={
$1(d){var w=this.a
return w.m(new C.f8y(w,d))},
$S:35}
C.f8y.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f8G.prototype={
$1(d){var w=this.a
return w.m(new C.f8x(w,d))},
$S:35}
C.f8x.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8H.prototype={
$0(){var w=this.a
return w.m(new C.f8w(w))},
$S:0}
C.f8w.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f8I.prototype={
$1(d){var w=this.a
return w.m(new C.f8v(w,d))},
$S:35}
C.f8v.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f8J.prototype={
$1(d){var w=this.a
return w.m(new C.f8u(w,d))},
$S:35}
C.f8u.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f8K.prototype={
$0(){var w=this.a
return w.m(new C.f8t(w))},
$S:0}
C.f8t.prototype={
$0(){var w=this.a
return w.w=w.w.G9("")},
$S:0}
C.f8L.prototype={
$0(){var w=this.a
return w.m(new C.f8s(w,this.b))},
$S:0}
C.f8s.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f8M.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSi(D.a5q[v]),null))
return B.bW(A.bH,t,A.bt,null,8,8)},
$S:171}
C.f8E.prototype={
$1(d){var w=this.a
return w.m(new C.f8r(w,d))},
$S:9}
C.f8r.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f8b.prototype={
$0(){var w=this.a
return w.m(new C.f8c(w,this.b,this.c))},
$S:0}
C.f8c.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.I(0,w)},
$S:0}
C.f8q.prototype={
$0(){var w=this.a
return w.m(new C.f8p(w,this.b))},
$S:0}
C.f8p.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h0L.prototype={
$1(d){return new C.a1q(this.a,this.b,null)},
$S:z+42}
C.f7X.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f7Y.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f7Z.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aKG?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f8_.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f80.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f7W(w,d))},
$S:2}
C.f7W.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f81.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f82.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aA(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bz,w.length),A.aP))},
$S:0}
C.fwJ.prototype={
$1(d){return d.a===this.a},
$S:236}
C.eoQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazg(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.d0J:D.diC
t=D.yk.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yk.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bR(0,B.b4(q,q,q,new C.bjG(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bTx(B.eK(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a6,A.a9,A.x,B.a([A.L,D.bjR.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.q(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a0,q,A.ac,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ea:A.mg,D.yk,q,q,q,20),A.aw,B.eH(A.A,B.o8(A.jQ,D.fFf,new C.eoP()),A.f,A.e5)],r),A.m,q,A.e,A.O,0,A.p),q,q,q),B.ap(q,B.p(q,D.fBH,A.f,q,q,new B.o(D.yk,q,q,B.n(6),q,q,A.n),q,q,q,q,P.amA,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:99}
C.eoP.prototype={
$1(d){return D.c67.aG(0,d)},
$S:73}
C.fSB.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fSC.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:236}
C.fSD.prototype={
$2(d,e){return A.o.aR(e.a.length,d.a.length)},
$S:1705}
C.fSE.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fSx.prototype={
$1(d){return d.a},
$S:z+18}
C.fSy.prototype={
$1(d){return d.b},
$S:z+19}
C.h_Z.prototype={
$1(d){return new C.a_O(this.a,this.b,null)},
$S:z+44}
C.ds3.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ds4.prototype={
$1(d){return d.a===this.a.gajH()},
$S:z+10}
C.ds5.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.ds8.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ds9.prototype={
$0(){var w=this.a
return w.m(new C.ds7(w,this.b))},
$S:0}
C.ds7.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dsa.prototype={
$1(d){var w=this.a
return w.m(new C.ds6(w,d))},
$S:9}
C.ds6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eoO.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.T(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1706}
C.flH.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bq,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fg,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cp,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.flJ.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bq,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bj,4280172719,2,d,l,0,"",D.n2,D.cX,g,e,f)},
$S:z+46}
C.flI.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.x9(0,"twinkle")
w=t===D.bj?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n2,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.flG.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fLW.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fLX.prototype={
$0(){return A.d.gH(D.Ik)},
$S:z+49}
C.fLY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fnM.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fS3.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bj,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bj,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fS4.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bj,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bj,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bj,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fH,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fS5.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bj,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kc,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kc,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fH,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSg.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kc,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kc,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.kb,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bj,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSl.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.kb,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bj,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bj,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSm.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kc,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bj,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSn.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d_C[w]
u=Date.now()
t=$.j9
$.j9=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.bj,v,4294967295,2,0,!1,"",0,D.cp,0,"","","","","",!1,0)
u=$.L8
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSo.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mJ,A.dw,w/3).l()
u=Date.now()
t=$.j9
$.j9=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.DT,v,2450411,0,0,!1,"",0,D.cp,0,"","","","","",!1,0)
u=$.L8
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSp.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bj,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.kb,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fH,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSq.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bj,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fH,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kc,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSr.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kc,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bj,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bj,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fS6.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.kb,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.kb,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fS7.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.kb,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.kb,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.kb,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eX,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fS8.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bj,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bj,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kc,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.kb,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fS9.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bj,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.kb,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.kb,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fH,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fSa.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lr,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lr,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lr,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lr,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lr,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSb.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kc,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eX,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSc.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mJ,A.dw,w/3).l()
u=Date.now()
t=$.j9
$.j9=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.DT,v,2450411,0,0,!1,"",0,D.cp,0,"","","","","",!1,0)
u=$.L8
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bj,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSd.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j9
$.j9=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.fg,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bq,A.aG,s,A.bk,null,D.fH,t,t,0,0,!1,"",0,D.cp,0,"","","","","",!1,0)
v=$.L8
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bj,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bj,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSe.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bj,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bj,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bj,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bj,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bj,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fH,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fSf.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j9
$.j9=t+1
t=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bq,A.aG,r,A.bk,null,D.bj,4294967295,4280640491,2,0,!1,"",0,D.cp,0,"","","","","",!1,0)
u=$.L8
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,t)
u=B.ar(A.d9,A.cq,w/2).l()
t=Date.now()
s=$.j9
$.j9=s+1
u=new C.eN("design_"+(""+1000*t+"_"+s),D.fg,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bq,A.aG,r,A.bk,null,D.bj,u,q,0,0,!1,"",0,D.cp,0,"","","","","",!1,0)
v=$.L8
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bj,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.kb,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSh.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kc,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kc,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kc,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kc,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bj,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eX,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSi.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bj,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eX,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eX,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eX,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kc,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSj.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bj,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bj,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bj,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eX,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fH,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j9
$.j9=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.fg,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.eX,16777215,t,2,0,!1,"",0,D.cp,0,"","","","","",!1,0)
v=$.L8
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fSk.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kc,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kc,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bj,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fJM.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fJN.prototype={
$0(){return A.d.gH($.bGo())},
$S:z+52}
C.fw1.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fw0.prototype={
$1(d){return C.i9f(d,this.a,this.b)},
$S:z+53}
C.fSK.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wc(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUm(B.hZB(A.vK,C.i9i(w.c,w.d,v,u),t)))},
$S:406}
C.e2o.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e2n.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.o(w,w,w,w,w,new B.c_(A.Ln,1.2,A.x,w,0,u.d,w,w),A.n),A.bi),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.ji(new B.an(A.a0,w,A.b4,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgt(u.a,r,q,r),A.az),w),B.at(new B.k_(r,new C.e2m(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:312}
C.e2m.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.aE(0,A.k.F(e/1.4,0,1)),p=A.k.F(e/0.9,0,1),o=A.k.F((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hR(B.fR(i,A.A,r,r,A.cj,A.bZ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mF(e*0.8)),A.a7),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btl(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cT(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dO(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a6,A.a9,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaN0(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.O,0,A.p),new B.q(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.O,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f79.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.k.F(w-0.1,0,1),A.k.F(w,0,1),A.k.F(w+0.1,0,1),1],x.x),null).aG(0,d)},
$S:73}
C.ceA.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bN:A.bB
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i1.j(0.4),A.I,14)],x.V):v
w=B.cV(v,B.bx(B.n(12),d,A.aq),v,v,A.b6,new B.o(v,v,t,u,w,v,A.n),A.eJ,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a5(112,v,B.x(B.a([w,A.fK,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1707}
C.ceB.prototype={
$0(){var w=this.a
return w.d.$1(w.c.G9(""))},
$S:0}
C.ceC.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dx(!0,new C.Ob(v.G9(u),!0,!1,null),null),d.b,new C.ceD(w,this.c,d),v.a===u)},
$S:z+54}
C.ceD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hDi(u.b,t.c.G9(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fZo.prototype={
$1(d){return new C.a_l(this.a,null)},
$S:z+55}
C.dhh.prototype={
$0(){var w=this.a
w.d=w.gwc().beA("data:"+this.b+";base64,"+A.cO.gcu().aM(this.c));++w.r},
$S:0}
C.dhm.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhn.prototype={
$0(){var w=this.a
return w.m(new C.dhl(w))},
$S:0}
C.dhl.prototype={
$0(){return this.a.r++},
$S:0}
C.dho.prototype={
$1(d){var w=this.a
return w.m(new C.dhk(w,d))},
$S:2}
C.dhk.prototype={
$0(){var w=this.a
return w.d=w.gwc().aFI(this.b)},
$S:0}
C.dhp.prototype={
$0(){var w=this.a
return w.m(new C.dhj(w))},
$S:0}
C.dhj.prototype={
$0(){var w=this.a
return w.d=w.gwc().beA("")},
$S:0}
C.dhq.prototype={
$1(d){var w=this.a
return w.m(new C.dhi(w,d))},
$S:2}
C.dhi.prototype={
$0(){var w=this.a
return w.d=w.gwc().beG(this.b)},
$S:0}
C.dhr.prototype={
$0(){var w=this.a
w=w.gwc().beG(w.gazh().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fZn.prototype={
$1(d){var w={}
w.a=this.a
return new B.e_(new C.fZm(w),null)},
$S:21}
C.fZm.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cR(new B.aZ(0,1/0,0,B.aH(d,A.c_,x.w).w.a.b*0.85),B.cg(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aC,D.fU2,A.aw,D.fUi,A.aC,new C.b0R(v.a,new C.fZl(v,e,d),!0,w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ai),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7q,w,w,w,w,A.O0,w,w,w)},
$S:169}
C.fZl.prototype={
$1(d){this.b.$1(new C.fZk(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fZk.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h0K.prototype={
$1(d){return D.hsI},
$S:z+57}
C.do5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.do6.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.do7.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fPn.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.k.F(w-0.12,0,1),A.k.F(w,0,1),A.k.F(w+0.12,0,1)],x.x),null).aG(0,d)},
$S:73}
C.dgZ.prototype={
$3(d,e,f){var w,v=this,u=new B.aE($.S().r,A.ah,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aY(t+r*1.2,o))
u.D(new B.c4(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c4(w,q+p,w,q+p*1.2))
u.D(new B.DH(B.bX(new B.q(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.ae(u,v.d)
s.ae(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.q(w,o),2.2,p)},
$S:398}
C.fPr.prototype={
$2(d,e){return A.k.aR(d.c,e.c)},
$S:z+58}
C.fHN.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fHO.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fBZ,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HT,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHL(d),B.bn(A.c4,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oC,D.VQ,new C.fHM(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHL.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHM.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ck7.prototype={
$1(d){return d.hQ()},
$S:z+59}
C.ck8.prototype={
$1(d){return d.ak()},
$S:z+60}
C.ck6.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a3(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.M(b3)
if(b4==null)b4=A.a8.gdQ(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.M(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i4R(b2.h(0,"type"))
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
n=A.aCX[A.o.F(b4,0,8)]
m=D.d2M[A.o.F(w,0,1)]
l=C.i8E(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.M(k)
if(k==null)k=4279310375
j=A.azi[A.o.F(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ibv(b2.h(0,"shape"))
g=B.aK(b2.h(0,"fillColor"))
g=g==null?b1:A.k.M(g)
if(g==null)g=4280640491
f=B.aK(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.M(f)
if(f==null)f=4280172719
e=B.aK(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aK(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aK(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.M(a2)
if(a2==null)a2=0
a3=C.hyc(b2.h(0,"textTransition"))
a4=B.aK(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.k.M(a4)
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
b2=B.aK(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.M(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cjX.prototype={
$1(d){return d.hQ()},
$S:z+62}
C.cjY.prototype={
$1(d){return d.ak()},
$S:z+63}
C.cjU.prototype={
$1(d){return B.w(d)},
$S:17}
C.cjV.prototype={
$1(d){return B.w(d)},
$S:17}
C.cjW.prototype={
$1(d){return C.hoQ(B.a3(d,x.N,x.z))},
$S:z+64}
C.cko.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ckp.prototype={
$0(){return A.d.gH(D.a52)},
$S:z+66}
C.ckj.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.cki.prototype={
$2(d,e){return e.f.aR(0,d.f)},
$S:z+21}
C.cke.prototype={
$1(d){return new B.N(d,new C.ckf(),B.T(d).k("N<1,V>")).f1(0,new C.ckg())},
$S:z+69}
C.ckf.prototype={
$1(d){return d.f},
$S:z+70}
C.ckg.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:685}
C.ckh.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hVl(d)},
$S:z+71}
C.ckk.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.ckl.prototype={
$2(d,e){return e.f.aR(0,d.f)},
$S:z+21}
C.ckm.prototype={
$1(d){return d.ak()},
$S:z+14}
C.fQ_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.an(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.I(0,j)
break}}}},
$S:z+73}
C.fPW.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fPX.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fPY.prototype={
$2(d,e){var w
if(d.b===D.cX){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fPZ.prototype={
$2(d,e){return d.b===D.fg&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ck2.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ikj(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cE(new B.b8(b4,b5),new C.ck1(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qm.aE(0,A.k.F(b1,0,1))
u=new C.ck3()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ck4(a9,b7.d)
r=new C.ck5(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jW.aE(0,A.k.F(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kE(A.k.F(1-k,0,1),B.dO(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.q(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fg){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lR&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b4,A.t,B.a([new B.kE(A.k.F(o,0,1),r.$1(l),a8),new B.kE(A.k.F(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iP(B.wG(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.F((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cp)a7=D.n2
p.push(s.$5(i.c,i.d,i.e,i.f,C.hAH(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ac,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a6,A.a9,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi)},
$S:397}
C.ck1.prototype={
$1(d){return d.a},
$S:z+22}
C.ck3.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ck4.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1711}
C.ck5.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8A(v,C.b2Z(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dPx.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.ckb.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ckc.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fSR.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:314}
C.fRY.prototype={
$1(d){return new C.aeh(this.a,this.b,null)},
$S:z+78}
C.eB9.prototype={
$0(){return this.a.QA(this.b,C.inJ(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eBa.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QA(this.b,C.inL(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eBb.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QA(this.b,C.inK(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eBc.prototype={
$0(){A0.hAr()
B.a6(this.a,!1).O(null)},
$S:0}
C.ck0.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1712}
C.ck_.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nW),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.F(p*Math.max(B.je(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bZ:A.dC
return B.fR(t,A.A,o,new C.cjZ(),A.cj,w,!0,u,!1,new B.bP("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1713}
C.cjZ.prototype={
$3(d,e,f){return D.aeQ},
$S:221}
C.fPV.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dA(6,"count",x.S),B.T(r).c)
u=r.$ti.k("N<ak.E,cL>")
r=B.C(new B.N(r,new C.fPU(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c3(new B.an(A.a0,t,A.ac,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bi),A.aq)},
$S:1714}
C.fPU.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b2Z(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fyL.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cz(r.b,new C.fyJ(d))
w=B.aH(d,A.c_,x.w).w
v=B.n(22)
u=B.L(A.bB,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h2,28)],x.V)
s=x.p
return new B.d_(e,!1,B.at(B.aI(!1,A.a3,!0,q,B.p(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kh,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bM(!1,A.AN,q,q,!0,q,q,q,new C.fyK(p,d),q,B.fu(q,q,A.bm,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ca,q,new B.b9(B.n(12),A.a1),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aC,r.d],s),A.m,q,A.e,A.O,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.h1,A.GP,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:260}
C.fyJ.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pV())B.a6(w,!0).eO()},
$S:0}
C.fyK.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eO()},
$S:0}
C.ffJ.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dO(u.b,new B.q((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dO(u.b,new B.q(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dO(u.b,new B.q(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dO(u.b,new B.q(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fK(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kl(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fK(r*1.2)
s.kl(r*0.5)
return B.fw(A.A,B.da(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fK(-r*1.4)
return B.fw(A.a9,B.da(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ji(u.b,A.t,new C.aL0(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ji(u.b,A.t,new C.aL0(1-r,t))],x.p),t)
case 16:v=D.baT.aE(0,r)
return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.mZ(r*6.28)
s.k5(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eK(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:65}
C.e07.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.e06.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.e05.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hAH(v,w,e)},
$S:65}
C.cjT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a6,A.a9,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.T(v).k("N<1,cL>")
q=B.C(new B.N(v,new C.cjS(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ac,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bi)},
$S:397}
C.cjS.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cp?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8A(m,new C.W3(d,C.b2Z(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dec.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.deb(w))},
$S:12}
C.deb.prototype={
$0(){return this.a.d++},
$S:0}
C.eow.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSm.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ik2(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eg(0,w*7,0,1)
s.fK(Math.sin(t)*0.32)
s.kl(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fw(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.q(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:65}
C.f4E.prototype={
$1(d){var w
$.S()
w=B.K()
w.b=A.aa
w.c=d
w.e=A.dS
return w},
$S:1715}
C.fNv.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdz()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bte(u,t,r),A.az))
w.push(B.nO(s.d,A.aq,new C.bh_(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsb(u,q,t,r),A.az))
return B.at(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b4,A.t,w,r),r),r,r,r)},
$S:203}
C.fBN.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:324}
C.eHn.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.Dr(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gav(s)){u=null
w=1
break}u=r.dO(s,new C.eHl(),new C.eHm(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1716}
C.eHl.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:191}
C.eHm.prototype={
$0(){return J.fq(this.a)},
$S:1718}
C.eDL.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDM.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDN.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eFl.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eF9.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eFa.prototype={
$1(d){return d.hQ()},
$S:z+81}
C.eD8.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGt.prototype={
$0(){this.a.u8()},
$S:0}
C.eHj.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.F(v.b,0,u.r.length-1)
w.r=v.c
w.oA()
w.KG()},
$S:0}
C.eFj.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.F(v.b,0,u.r.length-1)
w.r=v.c
w.oA()
w.KG()},
$S:0}
C.eH6.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eH7.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eH8.prototype={
$1(d){return d.a},
$S:z+22}
C.eH9.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.aw())},
$S:269}
C.eHa.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:658}
C.eCx.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHk.prototype={
$0(){},
$S:0}
C.eEs.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y7()
w.KG()},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.y7()},
$S:0}
C.eCw.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.y7()},
$S:0}
C.eEP.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eEQ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y7()
w.KG()
w.z="Home"},
$S:0}
C.eER.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEr.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VP,w,w,!0,w,w,w,new C.eEq(d),w,w)],x.p),w,w,w,D.fVV,w,w,w,w,D.fCs,w)},
$S:18}
C.eEq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEo.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VP,w,w,!0,w,w,w,new C.eEn(d),w,w)],x.p),w,w,w,D.fGD,w,w,w,w,D.fEj,w)},
$S:18}
C.eEn.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEp.prototype={
$0(){},
$S:0}
C.eDH.prototype={
$1(d){return this.a.b2I(C.bEr(d))},
$S:z+7}
C.eDI.prototype={
$1(d){return this.a.agh(C.bEr(d))},
$S:z+7}
C.eEy.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aW,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fVZ,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Qo(A.wx,D.aAI,"HATI YA KUHOWA","Hati ya mahari",new C.eEt(d),w),A.X,new C.Qo(A.ht,D.dge,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eEu(d),w),A.X,new C.Qo(A.hG,D.d0O,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eEv(d),w),A.X,new C.Qo(A.ib,D.cZS,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eEw(d),w)],v)
if(this.a.gacx())A.d.v(u,B.a([A.X,new C.Qo(A.jo,D.cKK,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eEx(d),w)],v))
return B.bm(!0,B.cg(B.x(u,A.al,w,A.e,A.O,0,A.p),A.t,w,A.y,w,E.yI,w,w,A.ai),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEt.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eEu.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eEv.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eEw.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eEx.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eEz.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y7()},
$S:0}
C.eCz.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eCA.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nt(r,v.f+1,q);++v.f
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
C.eEK.prototype={
$1(d){return d.b===D.lR},
$S:z+4}
C.eEL.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e_(new C.eEI(w,this.a,v),null)},
$S:21}
C.eEI.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eEJ(p,o,a3,n),l=B.R(a2).ax.a===A.J,k=l?A.c:A.R,j=l?A.aS:A.am,i=l?A.bp:A.bO,h=l?A.R:A.c,g=B.n(28),f=B.L(l?A.bB:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eEE(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Df[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjz(t,u.b,p.a===t,i,k,new C.eEF(v,m),q))}a1=B.bW(A.bH,a1,A.bt,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.D8[w]
s.a=null
t=s.a=r.a
u.push(new C.bjy(t,r.b,p.b===t,k,j,new C.eEG(s,m),q))}return B.bm(!0,B.p(q,B.cg(B.x(B.a([d,A.aR,a0,A.X,a1,A.by,v,A.X,B.bW(A.bH,u,A.bt,q,12,12),A.by,new B.a5(1/0,48,B.es(D.c26,D.fYp,new C.eEH(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.n(16),A.a1),D.b4X,q,q,q,q)),q)],e),A.E,q,A.e,A.O,0,A.p),A.t,q,A.y,q,q,q,q,A.ai),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.up,D.bDl,q,q,q),!0,!1,A.ag,!0,!0)},
$S:85}
C.eEJ.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eEC(w.a,d,e))
w.b.d9(new C.eED(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1721}
C.eEC.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eED.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eEE.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEF.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eEG.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eEH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hm(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d9(new C.eEB(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEB.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eEN.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEO.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eEM(t.d))
u=A.o.F(s.a,0,v.length)
s.a=u
s=t.e
A.d.nt(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.F(s.f,0,v.length-1)
s.r=null
s.y7()},
$S:0}
C.eEM.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eF4.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eF5.prototype={
$1(d){return d.w},
$S:z+82}
C.eF6.prototype={
$2(d,e){return d>e?d:e},
$S:80}
C.eF7.prototype={
$1(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.c:A.R,s=u?A.aS:A.am,r=u?A.bp:A.aQ,q=u?A.R:A.c,p=B.n(28),o=B.L(u?A.bB:A.aO,A.r,1),n=B.aH(d,A.c_,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.A(B.a([B.p(v,D.bWB,A.f,v,v,D.b6i,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eF1(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aC,new B.dp(1,A.co,B.hN(v,new C.eF2(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ai,new C.eF3(),!0),v)],l),A.E,v,A.e,A.O,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.up,A.a09,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eF1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eF3.prototype={
$2(d,e){return A.af},
$S:37}
C.eF2.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.bZT,q,q,q,new C.eF_(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bFB,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b6(4,B.n(16),A.a1),q,A.eV,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.n(16),D.b4C),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eF0(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ab,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:652}
C.eF_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ipS(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.o7(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bz,o+s.length),A.aP))
l.akk(k,m)
l.pH()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eF0.prototype={
$1(d){var w=this.a
w.akk(this.b.a,d)
w.pH()},
$S:2}
C.eF8.prototype={
$0(){},
$S:0}
C.eEA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eCQ.prototype={
$0(){},
$S:0}
C.eCR.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hC0(this.b,w,!0)
w=this.a
w.r=null
w.y7()},
$S:0}
C.eCS.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eCT.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eCP(t.d))
u=A.o.F(s.a,0,v.length)
s.a=u
s=t.e
A.d.nt(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.F(s.f,0,v.length-1)
s.r=null
s.y7()},
$S:0}
C.eCP.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFe.prototype={
$1(d){return B.pa(new C.eFd(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:140}
C.eFd.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amg,B.x(B.a([D.fTp,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.il(!0,w,e,A.y,D.feg,new C.eFc(this.a,this.b),20,A.us,w,A.ai,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:395}
C.eFc.prototype={
$2(d,e){var w=null,v=D.Ik[e],u=C.hVg(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fT,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.f7f,A.f,w,w,new B.o(A.dH.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.mR,w,w,w)],m))
return B.aI(!1,A.a3,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.A(n,A.m,w,A.e,A.i,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a6,A.a9,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFb(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:79}
C.eFb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cka(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFf.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y7()},
$S:0}
C.eBu.prototype={
$0(){var w,v=this.a,u=v.gqR(),t=C.rT(4294967295,null,0,0,null,C.cD(),D.n1,"","","",D.dk),s=this.b
C.ckn(t,s,u)
w=v.gdA()
if(w!=null&&s!==D.DS){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eCO.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ak()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aX(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j9
$.j9=r+1
J.aJ(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c4(v.e.r,v.f+1,C.hoQ(q));++v.f},
$S:0}
C.eCM.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.F(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eFn.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c4(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eCI.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eCH(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eCH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFm.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eCy.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.aw())},
$S:269}
C.eD9.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:658}
C.eH4.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eH5.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avd(w).fW()
v=u.Xs(w)
v.stS(B.hg(A.bz,v.a.a.length))},
$S:7}
C.eGu.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Ys(v)
if(u!=null&&u.b===D.cX)w.Xs(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eBv.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bk,!1,v.gqR().e.l(),A.aG,"",4280640491,24,A.bq,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bj,4280172719,2,"Tap to edit text",0,0,"",D.cp,D.cX,0.7,0.15,0.2)
A.d.I(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eBs.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bk,!1,4279310375,A.aG,"",v.gqR().c.j(0.25).l(),24,A.bq,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqR().c.l(),2,"",0,0,"",D.cp,D.fg,0.25,0.3,0.3)
A.d.I(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eBi.prototype={
$0(){var w=C.er(A.bk,!1,4279310375,A.aG,"",4280640491,24,A.bq,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cp,D.lR,0.6,0.2,0.18),v=this.a
A.d.I(v.gdA().z,w)
v.r=w.a},
$S:0}
C.eBf.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c96],x.p)
for(w=J.aX(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gakY().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dF(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUg,r,r,r,r,new C.eBe(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cj(q,r,r,r,r,r,A.ai,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBe.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eBg.prototype={
$0(){var w=A.k.F(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.az(u.ak(),null),s=C.er(A.bk,!1,4279310375,A.aG,u.b,4280640491,24,A.bq,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bj,4280172719,2,t,0,0,"",D.cp,D.a7J,w,0.5-w/2,0.07)
t=this.a
A.d.I(t.gdA().z,s)
t.r=s.a},
$S:0}
C.eCK.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eCL.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdA().z,new C.eCJ(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eCJ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eBX.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cX)s.Q=t.c.l()
else if(w===D.fg){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eBY(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eBY.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eC1.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eC2(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdA()
if(t!=null)v.$1(t)}},
$S:0}
C.eC2.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eC_.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cX){s.Q=t.c
return}w=new C.eC0(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eC0.prototype={
$1(d){var w,v,u
for(w=A.d.gag(d.z),v=new B.eA(w,new C.eBZ()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eBZ.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eBW.prototype={
$0(){return C.ckn(this.b,this.c,this.a.gqR())},
$S:0}
C.eEZ.prototype={
$0(){return A.d.c4(this.a.d,0,this.b)},
$S:0}
C.eHd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHe.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eHf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHg.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c4(s,0,v.b)
else{w=A.d.bj(s,new C.eHc(v))
if(w>=0)t.d[w]=v.b}if(v.a.gT4()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.y7()
t.KG()}},
$S:0}
C.eHc.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eGK.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acB(),s=w.b,r=u.acC(A.fn,A.jJ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.by,B.p(v,B.A(B.a([B.E(u.aXm(w.c,A.am),1),new B.D(A.fG,B.p(v,D.bUm,A.f,v,v,new B.o(A.fn.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXm(s,A.fn),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bE,v,v,v),A.by,u.aXp(A.fn,d,D.bQr,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c0M(A.aJ,d,A.uI,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aC)
p.push(u.aXn(d,"Not now"))
return new C.KD(B.x(p,A.al,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eGJ.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KD(B.x(B.a([v.acB(),A.P,v.acC(A.aJ,D.bQ6,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cR(new B.aZ(0,1/0,0,B.aH(d,A.c_,x.w).w.a.b*0.42),B.hN(w,new C.eGH(v,u,d),u.length,w,w,A.ai,new C.eGI(),!0),w),A.aC,v.aXn(d,"Cancel")],x.p),A.al,w,A.e,A.O,0,A.p),w)},
$S:z+9}
C.eGI.prototype={
$2(d,e){return A.X},
$S:37}
C.eGH.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aI(!1,A.a3,!0,w,B.aO(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.arj,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.c62,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.na,w,w,w),A.cU,B.d("Updated "+this.a.QB(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eG,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGG(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:79}
C.eGG.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eGD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acB()
t=t.acC(A.ay,A.uS,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KD(B.x(B.a([s,A.P,t,A.by,B.A(B.a([B.E(B.dT(A.abg,new C.eGB(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cn,u,new B.b9(B.n(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.at,B.E(B.bH(D.fEU,u,new C.eGC(d),B.bn(A.fn,u,u,u,A.c,u,A.cn,u,new B.b9(B.n(14),A.a1),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.O,0,A.p),u)},
$S:z+9}
C.eGB.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eGC.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eGF.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acB(),s=w.b,r=u.acC(A.aY,A.ea,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awy("Names",""+w.c),1),A.ae,B.E(u.awy("Fields",""+w.d),1),A.ae,B.E(u.awy("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bn(A.bm,v,v,v,A.c,v,A.yx,v,new B.b9(B.n(14),A.a1),v,v,v)
return new C.KD(B.x(B.a([t,A.P,r,A.aR,p,A.by,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.nR,v,v,v),v,new C.eGE(d),o),A.X,u.aXo(d,"Stay here",!1)],q),A.al,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eGE.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eDD.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDC.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eGv.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eH3.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0x(A.d.dO(w.d,new C.eH1(v),new C.eH2(v)).hQ(),w.f,null)},
$S:z+84}
C.eH1.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eH2.prototype={
$0(){return this.a},
$S:z+85}
C.eBn.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bE,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fW,w,w,w),w),B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bW9,w,w,w,w,new C.eBl(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fCR,w,w,w)],x.p)
if(v>1)t.push(B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXo,w,w,w,w,new C.eBm(d),!1,w,w,w,w,w,D.fZF,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dh,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBl.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eBm.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eBo.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bk,!1,4279310375,A.aG,v,4280640491,24,A.bq,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bj,4280172719,2,v,0,0,"",D.cp,D.TE,0.88,0.06,0.08)
v=this.a
A.d.I(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eBp.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j9
$.j9=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j9
$.j9=k+1
m.push(new C.eN(""+1000*l+"_"+k,D.TE,0.04,0.06,0.92,0.88,v,24,A.a8,A.bq,A.aG,4279310375,A.bk,u,D.bj,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cp,0,"","","","","",!1,0))
A.d.c4(j.e.r,i+q-1,new C.lY(""+1000*p+"_"+o,r+n,"",D.qV,4294967295,null,D.dk,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eBt.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kJ(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bk,!1,4279310375,A.aG,t,4280640491,24,A.bq,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cp,D.lq,0.35,0.55,0.62)
A.d.I(u.gdA().z,w)
u.r=w.a},
$S:0}
C.eBk.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5o(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.el(v.db,"marriage_sign_",""),4280640491,24,A.bq,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cp,D.lq,s,u,t)
A.d.I(p.gdA().z,q)
A.d.bt(p.gdA().z,new C.eBj(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ijM(p)}},
$S:0}
C.eBj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFk.prototype={
$0(){var w=this.a,v=this.b
w.b5o(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eHb.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eDG.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eDF())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eDF.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eC5.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eC6.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.u8()},
$S:7}
C.eBh.prototype={
$0(){var w=C.er(A.bk,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bq,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cp,D.lR,0.8,0.1,0.1),v=this.a
A.d.I(v.gdA().z,w)
v.r=w.a},
$S:0}
C.eD7.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBq.prototype={
$0(){var w=this.a,v=this.b
A.d.I(w.gdA().z,v)
w.r=v.a},
$S:0}
C.eBz.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eBA.prototype={
$0(){var w=this.b.hQ(),v=C.cD(),u=A.k.F(w.c+0.04,0,0.92),t=A.k.F(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.I(t.gdA().z,f)
t.r=f.a},
$S:0}
C.eBB.prototype={
$0(){var w=this.a.gdA().z,v=this.b,u=A.d.bj(w,new C.eBy(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c4(w,u+1,v)}},
$S:0}
C.eBy.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eBM.prototype={
$0(){var w=this.a.gdA().z,v=this.b,u=A.d.bj(w,new C.eBx(v))
if(u>0){A.d.cA(w,u)
A.d.c4(w,u-1,v)}},
$S:0}
C.eBx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eBP.prototype={
$0(){return this.a.as=A.bk},
$S:0}
C.eBQ.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eBR.prototype={
$0(){return this.a.as=A.dX},
$S:0}
C.eBS.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eBT.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eBU.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eBV.prototype={
$1(d){return d.length!==0},
$S:3}
C.eBC.prototype={
$0(){var w=this.a,v=w.gdA().z,u=C.cD()
A.d.I(v,C.Dw(w.gqR().c.j(0.18).l(),0.1,u,D.bj,0,2,1,0,0))
u=w.gdA().z
v=C.cD()
A.d.I(u,C.j3(A.bk,!1,w.gqR().d.l(),A.aG,18,A.bq,A.H,0.07,v,"Document Header",0,D.dk,0.9,0.05,0.02))},
$S:0}
C.eBD.prototype={
$0(){var w,v=this.a,u=v.gdA().z,t=C.cD()
A.d.I(u,C.Dw(v.gqR().c.j(0.12).l(),0.1,t,D.bj,0,2,1,0,0.9))
t=v.gdA().z
u=C.cD()
w=C.bF9()
A.d.I(t,C.j3(A.K,!1,v.gqR().e.l(),A.aG,12,A.bq,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dk,0.9,0.05,0.92))},
$S:0}
C.eBE.prototype={
$0(){A.d.I(this.a.gdA().z,C.Dw(1727914055,0.12,C.cD(),D.bj,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eBF.prototype={
$0(){var w=4279310375
A.d.I(this.a.gdA().z,C.Dw(w,0.08,C.cD(),D.bj,w,2,0.5,0.2,0.4))},
$S:0}
C.eBG.prototype={
$0(){var w=this.a,v=w.gdA().z,u=C.cD()
A.d.I(v,C.Dw(w.gqR().c.j(0.35).l(),0.12,u,D.DT,4280640491,2,0.2,0.15,0.55))
A.d.I(w.gdA().z,C.j3(A.bk,!1,4279310375,A.aG,18,A.bq,A.a8,0.15,C.cD(),"Important note",0,D.qW,0.5,0.38,0.52))},
$S:0}
C.eBH.prototype={
$0(){var w=this.a
A.d.I(w.gdA().z,C.Dw(4294507260,0.78,C.cD(),D.bj,4291548641,1.5,0.84,0.08,0.1))
A.d.I(w.gdA().z,C.j3(A.bk,!1,4279179050,A.aG,16,A.bq,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bF9()+"\n\nSubject:\n\nBody text\u2026",0,D.dk,0.76,0.12,0.14))},
$S:0}
C.eBI.prototype={
$0(){var w=this.a
A.d.I(w.gdA().z,C.Dw(4294897802,0.28,C.cD(),D.bj,4294626325,2,0.3,0.62,0.12))
A.d.I(w.gdA().z,C.j3(A.bk,!1,4285611794,A.aG,15,A.bq,A.a8,0.24,C.cD(),"Sticky note",0,D.aKu,0.26,0.64,0.14))},
$S:0}
C.eBJ.prototype={
$0(){var w=4280640491,v=this.a
A.d.I(v.gdA().z,C.Dw(4293060848,0.04,C.cD(),D.bj,4291548641,2,0.8,0.1,0.48))
A.d.I(v.gdA().z,C.Dw(w,0.04,C.cD(),D.bj,w,2,0.55,0.1,0.48))},
$S:0}
C.eBK.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdA().z,C.j3(A.bk,!1,w,A.aG,18,A.bq,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jb,0.42,0.06,0.18))
A.d.I(v.gdA().z,C.j3(A.bk,!1,w,A.aG,18,A.bq,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vc,0.42,0.52,0.18))},
$S:0}
C.eBL.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdA().z,C.Dw(858088427,0.62,C.cD(),D.bj,4280640491,2,0.42,0.05,0.18))
A.d.I(v.gdA().z,C.Dw(856004201,0.62,C.cD(),D.bj,4278556265,2,0.42,0.53,0.18))
A.d.I(v.gdA().z,C.j3(A.bk,!1,w,A.aG,20,A.bq,A.H,0.1,C.cD(),"Option A",0,D.dk,0.36,0.08,0.2))
A.d.I(v.gdA().z,C.j3(A.bk,!1,w,A.aG,20,A.bq,A.H,0.1,C.cD(),"Option B",0,D.dk,0.36,0.56,0.2))},
$S:0}
C.eBN.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdA().z,C.Dw(4294967295,0.36,C.cD(),D.bj,w,2,0.24,0.38,0.28))
A.d.I(v.gdA().z,C.j3(A.K,!1,w,A.aG,14,A.bq,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dk,0.24,0.38,0.4))},
$S:0}
C.eBO.prototype={
$0(){return C.ckn(this.b,D.TF,this.a.gqR())},
$S:0}
C.eD6.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9C.q(0,d),t=this.a
return t.baB(d,v===d,A.b2,this.c,new C.eD5(t,u,d,w),u)},
$S:z+25}
C.eD5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oo(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bFT(r,new C.eD4(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eD4.prototype={
$0(){return this.a.d9(new C.eD3(this.b,this.c))},
$S:0}
C.eD3.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eBr.prototype={
$0(){var w,v=this.a,u=v.gqR(),t=C.rT(4294967295,null,0,0,null,C.cD(),D.n1,"","","",D.dk),s=this.b
C.ckn(t,s,u)
w=v.gdA()
if(w!=null&&s!==D.DS){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eC9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ipV(p,q.d,s,new C.eC8(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.u8(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eC8.prototype={
$1(d){return this.bnA(d)},
bnA(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eC7(t,d))
w=2
return B.b(t.u8(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eC7.prototype={
$0(){var w,v,u
for(w=J.aX(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c4(v.d,0,u)}},
$S:0}
C.eCa.prototype={
$0(){return this.a.bMh()},
$S:0}
C.eCb.prototype={
$0(){return this.a.aSx("Class Presentation",!0)},
$S:0}
C.eCc.prototype={
$1(d){return this.a.bNd(d.b,this.b,d.a)},
$S:z+88}
C.eCN.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.c_,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eEY.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eP,x.w).w.f.d),new B.e_(new C.eEX(this.a,this.b),null),null)},
$S:61}
C.eEX.prototype={
$2(d,e){return B.pa(new C.eEW(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:548}
C.eEW.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.L(u?A.bB:A.aO,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aW,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.X,r,new B.D(A.alG,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.R,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bM(!1,A.AN,v,v,!0,v,v,v,new C.eEU(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cj(B.a([p.aVj(u,!0,!0,new C.eEV(p,w.d))],q),e,v,D.bB2,v,v,A.ai,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.l5,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.eEU.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEV.prototype={
$0(){this.b.$1(new C.eES())
var w=this.a
if(w.c!=null)w.m(new C.eET())},
$S:0}
C.eES.prototype={
$0(){},
$S:0}
C.eET.prototype={
$0(){},
$S:0}
C.eGw.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:97}
C.eGx.prototype={
$4(d,e,f,g){var w=A.cw.aE(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAm(this.a,null),0.94+w*0.06,null,null),w)},
$S:394}
C.eGy.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:97}
C.eGz.prototype={
$4(d,e,f,g){var w=A.cw.aE(0,e.gp(0))
return B.da(B.ed(A.A,new C.beO(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:394}
C.eGA.prototype={
$0(){return A.d.c4(this.a.d,0,C.WW(this.b))},
$S:0}
C.eBw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.aE(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.q5.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.p(p,B.X(A3.a1Y,u?A.ad:A.R,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.R,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.us(A.fh,B.p(p,B.x(B.a([t,A.aC,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.am,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:299}
C.eCB.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eCC.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCD.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k6
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2w:A.Ct}return w},
$S:644}
C.eCG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dy.aE(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.ni.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kJ(v.w)?A.wx:A.qI,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a6,A.a9,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.R,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QB(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QB(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QB(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QB(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QB(v.f)
r=k.bNb(n,A.d.gH(r),t)
return B.p(l,B.bx(j,new B.a8L(B.aI(!1,A.a3,!0,l,B.aO(!1,l,!0,B.p(l,B.dF(!1,A.NY,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ou,t?A.aD:A.bM,l,l,l,l),l,l,l,new C.eCE(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eCF(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:99}
C.eCF.prototype={
$0(){return this.a.agh(this.b)},
$S:0}
C.eCE.prototype={
$0(){return this.a.Bn(this.b,this.c)},
$S:0}
C.eE6.prototype={
$0(){var w=this.a
w.b99()
w.m(new C.eE5())},
$S:0}
C.eE5.prototype={
$0(){},
$S:0}
C.eE7.prototype={
$1(d){return this.a.akk(this.b.a,d)},
$S:2}
C.eE8.prototype={
$0(){this.a.d9(new C.eE4(this.b))},
$S:0}
C.eE4.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eE9.prototype={
$0(){this.a.d9(new C.eE3(this.b))},
$S:0}
C.eE3.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bq:A.cF},
$S:0}
C.eEa.prototype={
$0(){this.a.d9(new C.eE2(this.b))},
$S:0}
C.eE2.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.n7},
$S:0}
C.eEb.prototype={
$0(){this.a.d9(new C.eE1(this.b))},
$S:0}
C.eE1.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eEc.prototype={
$0(){var w=this.a
w.d9(new C.eE0(w,this.b))},
$S:0}
C.eE0.prototype={
$0(){var w=this.b
return w.as=this.a.c7L(w.as)},
$S:0}
C.eEd.prototype={
$0(){return this.a.d9(new C.eE_(this.b))},
$S:0}
C.eE_.prototype={
$0(){var w=this.a
return w.w=A.k.F(w.w+2,10,96)},
$S:0}
C.eEe.prototype={
$0(){return this.a.d9(new C.eDZ(this.b))},
$S:0}
C.eDZ.prototype={
$0(){var w=this.a
return w.w=A.k.F(w.w-2,10,96)},
$S:0}
C.eDS.prototype={
$0(){return this.a.a31(this.b.a)},
$S:0}
C.eDT.prototype={
$0(){this.a.a0y()
return null},
$S:0}
C.eDU.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.c_,x.w).w.a.a<900)w.agA()
else w.m(new C.eDR(w))},
$S:0}
C.eDR.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eDV.prototype={
$0(){this.a.d9(new C.eDQ(this.b))},
$S:0}
C.eDQ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eDW.prototype={
$0(){return this.a.d9(new C.eDP(this.b))},
$S:0}
C.eDP.prototype={
$0(){var w=this.a
return w.w=A.k.F(w.w+2,10,96)},
$S:0}
C.eDX.prototype={
$0(){return this.a.d9(new C.eDO(this.b))},
$S:0}
C.eDO.prototype={
$0(){var w=this.a
return w.w=A.k.F(w.w-2,10,96)},
$S:0}
C.eDY.prototype={
$0(){return this.a.aBH(null)},
$S:0}
C.eD_.prototype={
$0(){this.a.E3()
return null},
$S:0}
C.eD0.prototype={
$0(){this.a.ab7()
return null},
$S:0}
C.eD2.prototype={
$1(d){return this.bnB(d)},
bnB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kx(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.av,null,new C.eCV(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d9(new C.eCW(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d9(new C.eCX(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d9(new C.eCY(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hDh(q,new C.Fb(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d9(new C.eCZ(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahP(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.eCV.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.er_],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dh,p,p,p)
q=u.e===s?D.bWi:p
o.push(B.dF(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eCU(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.m,p,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eCU.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eCW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eD1.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Af(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Af(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Af(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahP(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eww,q,v,u,B.Af(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:137}
C.eHh.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bF6(w,v)}},
$S:0}
C.eHi.prototype={
$0(){this.a.E3()
return null},
$S:0}
C.eEh.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.c5X:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bu
return new B.D(A.fz,B.aA(u,B.cV(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b6,new B.o(w,u,u,r,u,q,A.n),A.eJ,u,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eEg(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:135}
C.eEg.prototype={
$0(){var w=this.a
return w.m(new C.eEf(w,this.b))},
$S:0}
C.eEf.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eEi.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5B:E.aAP
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbQM():t.gbMC()
return B.hb(B.aA(u,B.p(u,D.aqJ,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.I,10)],x.V),new B.a9(A.a6,A.a9,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1726}
C.eEj.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ipa(v,w.a.c)},
$S:0}
C.eFG.prototype={
$0(){return this.b.vM(this.a.a)},
$S:0}
C.eFH.prototype={
$0(){return this.a.vM(D.n1)},
$S:0}
C.eFI.prototype={
$0(){return this.a.vM(D.J9)},
$S:0}
C.eFT.prototype={
$0(){return this.a.vM(D.Ja)},
$S:0}
C.eG3.prototype={
$0(){return this.a.vM(D.J8)},
$S:0}
C.eGe.prototype={
$0(){return this.a.qC("lab_report")},
$S:0}
C.eGl.prototype={
$0(){return this.a.qC("rubric")},
$S:0}
C.eGm.prototype={
$0(){return this.a.qC("minutes")},
$S:0}
C.eGn.prototype={
$0(){return this.a.qC("agenda")},
$S:0}
C.eGo.prototype={
$0(){return this.a.qC("timeline")},
$S:0}
C.eGp.prototype={
$0(){return this.a.qC(this.b.a)},
$S:0}
C.eFJ.prototype={
$0(){this.a.Wv()
return null},
$S:0}
C.eFK.prototype={
$0(){this.a.Wp()
return null},
$S:0}
C.eFL.prototype={
$0(){return this.a.qC("table")},
$S:0}
C.eFM.prototype={
$0(){return this.a.qC("sticky")},
$S:0}
C.eFN.prototype={
$0(){return this.a.qC("divider")},
$S:0}
C.eFO.prototype={
$0(){return this.a.qC("header_bar")},
$S:0}
C.eFP.prototype={
$0(){return this.a.po(D.bj)},
$S:0}
C.eFQ.prototype={
$0(){return this.a.po(D.eX)},
$S:0}
C.eFR.prototype={
$0(){return this.a.po(D.kb)},
$S:0}
C.eFS.prototype={
$0(){return this.a.po(D.DT)},
$S:0}
C.eFU.prototype={
$0(){return this.a.po(D.kc)},
$S:0}
C.eFV.prototype={
$0(){return this.a.po(D.lr)},
$S:0}
C.eFW.prototype={
$0(){return this.a.po(D.fH)},
$S:0}
C.eFX.prototype={
$0(){this.a.HN()
return null},
$S:0}
C.eFY.prototype={
$0(){this.a.NX()
return null},
$S:0}
C.eFZ.prototype={
$0(){return this.a.qC("quote")},
$S:0}
C.eG_.prototype={
$0(){return this.a.a9f()},
$S:0}
C.eG0.prototype={
$0(){this.a.a0E()
return null},
$S:0}
C.eG1.prototype={
$0(){var w=this.a
return w.m(new C.eFw(w))},
$S:0}
C.eFw.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eG2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oo(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eFE(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFE.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eG4.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9E.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aW
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.a9,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9E.q(0,q))u.push(B.ap(s,B.p(s,D.PJ,A.f,s,s,D.Ff,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aA(s,B.hb(new B.an(A.a0,s,A.ac,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFD(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eFD.prototype={
$0(){this.a.a9v(this.b)
return null},
$S:0}
C.eG5.prototype={
$0(){this.a.a9u(this.b)
return null},
$S:0}
C.eG6.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hVh(d),p=this.a,o=B.n(8),n=p.gdA()
n=n==null?r:n.x
w=d.a
n=n===w?A.bm:A.aW
v=p.gdA()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rT(4294967295,r,0,0,r,"preview_"+w,D.qV,"","","",D.dk)
C.hA4(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hBp(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.p(r,D.ark,A.f,r,r,D.Ff,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iK,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ac,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.am,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFC(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eFC.prototype={
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
return B.b(s.oo(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d9(new C.eFs(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFs.prototype={
$0(){return C.hA4(this.a,this.b.a)},
$S:0}
C.eFF.prototype={
bnC(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9C.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oo(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bnC(d,e)},
$S:z+91}
C.eGq.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eGs(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cg(B.A(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eGs.prototype={
$1(d){var w=this
return w.a.baB(d,w.b===d,w.c,w.d,new C.eGr(w.e,d),!D.a9C.q(0,d))},
$S:z+25}
C.eGr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eG7.prototype={
$1(d){this.b.$2(d,new C.eFB(this.a,d,this.c))
return null},
$S:z+26}
C.eFB.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bFT(u,new C.eFr(v,this.c,w),w)},
$S:0}
C.eFr.prototype={
$0(){return this.a.d9(new C.eFp(this.b,this.c))},
$S:0}
C.eFp.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eG8.prototype={
$1(d){this.b.$2(d,new C.eFA(this.a,d))
return null},
$S:z+26}
C.eFA.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h1y(u,new C.eFq(v,w),w)},
$S:0}
C.eFq.prototype={
$0(){var w=this.a
return w.d9(new C.eFo(w,this.b))},
$S:0}
C.eFo.prototype={
$0(){return this.a.gdA().r=this.b},
$S:0}
C.eG9.prototype={
$0(){var w=this.a
return w.m(new C.eFz(w))},
$S:0}
C.eFz.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eGa.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bF6(w,v)}},
$S:0}
C.eGb.prototype={
$0(){this.a.Iz()
return null},
$S:0}
C.eGc.prototype={
$0(){return this.a.a9f()},
$S:0}
C.eGd.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cX)w.d9(new C.eFy(v))},
$S:0}
C.eFy.prototype={
$0(){var w=this.a
w.f=A.k.F(w.f*1.25,0.08,1.8)
w.e=A.k.F(w.e*1.1,0.08,1.8)},
$S:0}
C.eGf.prototype={
$0(){this.a.E3()
return null},
$S:0}
C.eGg.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FL(v,!0)
return null},
$S:0}
C.eGh.prototype={
$0(){this.a.d9(new C.eFx(this.b))},
$S:0}
C.eFx.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eGi.prototype={
$0(){this.a.d9(new C.eFv(this.b))},
$S:0}
C.eFv.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bq:A.cF},
$S:0}
C.eGj.prototype={
$0(){this.a.d9(new C.eFu(this.b))},
$S:0}
C.eFu.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.n7},
$S:0}
C.eGk.prototype={
$0(){this.a.d9(new C.eFt(this.b))},
$S:0}
C.eFt.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eC4.prototype={
$1(d){return this.bnz(d)},
bnz(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oo(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d9(new C.eC3(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:187}
C.eC3.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eGN.prototype={
$0(){var w=this.a
return w.d9(new C.eGM(w,this.b))},
$S:0}
C.eGM.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.F(u-1,1,120)},
$S:0}
C.eGO.prototype={
$0(){var w=this.a
return w.d9(new C.eGL(w,this.b))},
$S:0}
C.eGL.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.F(u+1,1,120)},
$S:0}
C.eDc.prototype={
$0(){return this.a.d9(new C.eDb(this.b))},
$S:0}
C.eDb.prototype={
$0(){var w=this.a
return w.w=A.k.F(w.w-2,10,96)},
$S:0}
C.eDd.prototype={
$0(){return this.a.d9(new C.eDa(this.b))},
$S:0}
C.eDa.prototype={
$0(){var w=this.a
return w.w=A.k.F(w.w+2,10,96)},
$S:0}
C.eDK.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.at0,new C.eDJ(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eDJ.prototype={
$1(d){var w=null
return B.Af(B.d(d.b,w,w,w,w,w,w,A.lU,w,w,w),48,d,x.fO)},
$S:z+95}
C.eH_.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:37}
C.eGZ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kw()?q:new C.eGX(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bm
else v=r.d?A.aW:A.cr
v=B.L(v,A.r,o?2:1)
u=r.d?A.cs:A.c
t=B.bR(0,C.hBp(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aA(q,B.p(q,new B.an(A.a0,q,A.ac,A.t,B.a([t,B.ap(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nP,q,q,q),A.f,q,q,new B.o(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.amB,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eGY(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eGY.prototype={
$0(){var w=this.a
return w.m(new C.eGT(w,this.b))},
$S:0}
C.eGT.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KG()},
$S:0}
C.eGX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eGU(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eGV(q,s))
q.aU1()}else if(r==="del"){q=t.a
q.m(new C.eGW(q,s))
q.aT7()}else if(r==="up")t.a.b5C(s,s-1)
else if(r==="down")t.a.b5C(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGU.prototype={
$1(d){var w=null,v=B.a([B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY1,w,w,w,w,new C.eGP(d),!1,w,w,w,w,w,w,w,D.fDR,w,w,w),B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXV,w,w,w,w,new C.eGQ(d),!1,w,w,w,w,w,w,w,A.xk,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXa,w,w,w,w,new C.eGR(d),!1,w,w,w,w,w,w,w,D.fMd,w,w,w))
if(u<this.b.r.length-1)v.push(B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZh,w,w,w,w,new C.eGS(d),!1,w,w,w,w,w,w,w,D.fDF,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGP.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eGQ.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eGR.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eGS.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eGV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eGW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eH0.prototype={
$0(){return this.a.a9f()},
$S:0}
C.eCu.prototype={
$0(){var w=this.a
w.b99()
w.aBH(null)},
$S:0}
C.eCt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.du,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.aA,A.aF,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c3(A.kC,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bi),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eCs(this.a,e.b,e.d,q),B.T(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ac,A.f,s,new B.bP("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bi)},
$S:397}
C.eCs.prototype={
$1(d){var w=this
return w.a.bIB(d,w.b,w.c,w.d)},
$S:z+23}
C.eCh.prototype={
$0(){var w=this
if(w.b){w.a.O4(w.c)
return}if(w.d){w.a.a9d(w.c)
return}if(w.e){w.a.ahS(w.c)
return}if(w.f)w.a.b9I(w.c)},
$S:0}
C.eCi.prototype={
$0(){this.a.O4(this.b)
return null},
$S:0}
C.eCj.prototype={
$0(){return this.a.a31(this.b.a)},
$S:0}
C.eCk.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eCg(u,d,w.c,w.d))
v.Id()
v.oA()
v.pH()},
$S:19}
C.eCg.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.F(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.F(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eCl.prototype={
$1(d){return this.a.akk(this.b.a,d)},
$S:2}
C.eCn.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.heb(w))u.a.O4(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b9I(v)},
$S:0}
C.eCm.prototype={
$0(){return this.a.a31(this.b.a)},
$S:0}
C.eCo.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eCf(w.b,d,w.c,w.d))
v.Id()
v.oA()
v.pH()},
$S:19}
C.eCf.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.F(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.F(v.f+u/w.d,0.04,1.8)
if(v.b===D.cX)v.w=A.k.F(v.w+u*0.15,10,120)},
$S:0}
C.eCp.prototype={
$1(d){var w=this.a
w.m(new C.eCe(this.b,d))
w.Id()
w.oA()
w.pH()},
$S:219}
C.eCe.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.F(w.e*v,0.04,1.8)
w.f=A.k.F(w.f*v,0.04,1.8)
if(w.b===D.cX)w.w=A.k.F(w.w*v,10,120)},
$S:0}
C.eCq.prototype={
$0(){var w=this.a
w.m(new C.eCd(this.b))
w.Id()
w.oA()
w.pH()},
$S:0}
C.eCd.prototype={
$0(){this.a.r=C.hAU()},
$S:0}
C.eCr.prototype={
$0(){return this.a.a31(this.b.a)},
$S:0}
C.eEl.prototype={
$0(){var w=this.a
return w.m(new C.eEk(w))},
$S:0}
C.eEk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eEm.prototype={
$1(d){return this.a.cHJ(this.b.a,d)},
$S:2}
C.eDq.prototype={
$1(d){var w
this.a.d9(d)
w=this.b
if(w!=null)w.$0()},
$S:168}
C.eDr.prototype={
$1(d){return this.a.$1(new C.eDp(this.b,d))},
$S:6}
C.eDp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDs.prototype={
$1(d){return this.a.$1(new C.eDo(this.b,d))},
$S:6}
C.eDo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDt.prototype={
$1(d){return this.a.$1(new C.eDn(this.b,d))},
$S:6}
C.eDn.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDu.prototype={
$1(d){return this.a.$1(new C.eDm(this.b,d))},
$S:6}
C.eDm.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eDv.prototype={
$1(d){return this.a.$1(new C.eDl(this.b,d))},
$S:6}
C.eDl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDw.prototype={
$1(d){return this.b.$1(new C.eDk(this.a,this.c))},
$S:9}
C.eDk.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eDx.prototype={
$1(d){return this.b.$1(new C.eDj(this.a,this.c))},
$S:9}
C.eDj.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDy.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bm:A.d_
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDi(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:399}
C.eDi.prototype={
$0(){return this.a.$1(new C.eDf(this.b,this.c))},
$S:0}
C.eDf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eDz.prototype={
$1(d){return this.a.$1(new C.eDh(this.b,d))},
$S:1727}
C.eDh.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eDA.prototype={
$1(d){var w=null
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDg(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:399}
C.eDg.prototype={
$0(){return this.a.$1(new C.eDe(this.b,this.c))},
$S:0}
C.eDe.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eDB.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pV()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eO()}v.a.auc()},
$S:0}
C.eDE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dy.aE(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.ar(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.p(n,B.X(A.uS,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nB,n,n,n),n,n,n,2,n,n))
return B.aI(!1,A.a3,!0,n,B.aO(!1,m,!0,B.eI(new B.a5(48,48,new B.an(A.A,n,A.ac,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:143}
C.eBd.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.aE(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aI(!1,A.a3,!0,p,B.aO(!1,o,!0,B.eI(B.x(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.ja,A.K,p,p)],x.p),A.m,p,A.ba,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GK,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:143}
C.eFi.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.asa,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.eFg(d),w,w),B.bH(A.r7,w,new C.eFh(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eFg.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFh.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d9I.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dy.aE(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.aE(0,A.k.F(v,0,1))
i=i.x
i===$&&B.c()
i=A.dW.aE(0,i)
v=B.n(22)
t=B.ar(A.aM,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nF),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nF).j(0.18+w*0.12),A.I,32+w*10),D.ael],s)
q=B.n(22)
p=x.O
o=B.ap(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b1,0.9,A.x,k,0,B.a([A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nF).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nF).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kJ(j.a.c.w)?D.v4:L.nF).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kJ(m)?D.v4:L.nF
s=B.a([new B.ac(0,A.G,A.d.gH(C.kJ(m)?D.v4:L.nF).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kJ(j.a.c.w)?A.wx:A.qI,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ac,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nF).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fK,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fvv,A.K,k,k),A.aw,B.d(j.gcCx(),k,k,k,k,k,k,D.fAn,A.K,k,k),A.aC],m)
p=j.a.c
if(p.z){p=p.gT4()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nF).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.Kx(A.z3,"Download PDF","pdf",A.d5,j.Ju(0),!1,k))
p=j.a.c
if(!p.z||p.gT4()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Kx(A.jJ,"Transfer to "+C.hAW(p==null?"":p),"transfer_hati",A.aY,j.Ju(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Ju(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Kx(D.bPu,"Rename presentation","rename",A.ch,n,!1,k),A.an,new C.Kx(A.aou,"Duplicate","duplicate",A.b8,j.Ju(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Kx(A.ef,"Delete presentation","delete",A.ax,j.Ju(p),!0,k))
s.push(A.aw)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Ju(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Ju(n)
s.push(B.dO(B.da(B.bM(!1,E.aWc,k,k,!0,k,k,k,new C.d9H(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.az,k,D.bEh,k,k,k,k,k,A.ky,k,k)),n),new B.q(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aI(!1,A.a3,!0,k,B.p(k,B.bx(q,new B.an(A.a0,k,A.ac,A.t,B.a([o,new B.D(D.bDq,B.x(s,A.m,k,A.e,A.O,0,A.p),k)],m),k),A.aq),A.f,k,A.Xp,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.d9H.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.da5.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.da6.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d9F.prototype={
$1(d){var w=this.a
return w.m(new C.d9B(w))},
$S:23}
C.d9B.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d9G.prototype={
$1(d){var w=this.a
return w.m(new C.d9A(w))},
$S:72}
C.d9A.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9E.prototype={
$0(){var w=this.a
return w.m(new C.d9C(w))},
$S:0}
C.d9C.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9D.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eHY.prototype={
$0(){return $.bmu=!$.bmu},
$S:0}
C.eHO.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXf())u.azi()},
$S:0}
C.eHX.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eHP.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eHQ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azi()},
$S:0}
C.eHK.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eHL.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eHM.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eHN.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.eHV.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b4,A.t,w,null)},
$S:1728}
C.eHW.prototype={
$2(d,e){var w
if(e.gc5(e)===A.im)return new B.d_(e,!1,d,null)
w=this.a
return w.cAr(w.e,d,e)},
$S:393}
C.eHR.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fK((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eHS.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kl((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eHT.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fK(v.gp(0)*0.8)
w.kl(v.gp(0)*0.35)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eHU.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fK(-v.gp(0)*1.2)
return B.fw(A.a9,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eHZ.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZK().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZK().x
t===$&&B.c()
return new C.b3_(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Jv(v.c,t,!0,new B.bP("cine"+u,x.W))},
$S:733}
C.eI0.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.c_,x.w).w.a.a*0.55)w.azi()
else w.coL()},
$S:72}
C.eI_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fSH.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:392}
C.fSQ.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.fSN(d),w,w),B.bM(!1,D.fTL,w,w,!0,w,w,w,new C.fSO(d,this.b,v),w,w),B.bH(A.aWu,w,new C.fSP(d,v,this.c),w)],x.p),w,w,P.u9,new B.a5(320,w,t,w),w,w,w,w,D.fVi,w)},
$S:18}
C.fSN.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fSO.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.heQ(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fSP.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRD(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aR3(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fSG.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ckq.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:606}
C.fSM.prototype={
$1(d){return d.ak()},
$S:z+14}
C.fog.prototype={
$1(d){return C.heO(C.WW(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h0O.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:97}
C.h0P.prototype={
$4(d,e,f,g){var w=A.cw.aE(0,e.gp(0))
return B.da(B.ed(A.A,D.hvJ,0.94+w*0.06,null,null),w)},
$S:394}
C.h0Q.prototype={
$1(d){var w=this
return new C.WY(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eHu.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHt.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.WZ(u,this.b,w.gaQn(),v,null)},
$S:z+99}
C.eHr.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHv.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHz.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHA.prototype={
$0(){var w=this.a
return w.m(new C.eHy(w))},
$S:0}
C.eHy.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eHB.prototype={
$0(){var w=this.a
return w.m(new C.eHx(w))},
$S:0}
C.eHx.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eHC.prototype={
$1(d){return this.a.bNc(d,this.b)},
$S:z+100}
C.eHp.prototype={
$0(){var w=this.a
return w.m(new C.eHo(w,this.b))},
$S:0}
C.eHo.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eHD.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eHE.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eHF.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHG.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.U(D.fhk)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eB7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eB6())},
$S:0}
C.eB6.prototype={
$0(){},
$S:0}
C.eB8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eB3.prototype={
$1(d){return this.a.m(new C.eB2())},
$S:2}
C.eB2.prototype={
$0(){},
$S:0}
C.eB4.prototype={
$1(d){return this.a.b1t()},
$S:2}
C.eB5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qr(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHI(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHI.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fMY.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k_(this.c,new C.fMX(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:204}
C.fMX.prototype={
$3(d,e,f){return new C.Jv(e,!1,!1,new B.bP(e.a,x.W))},
$S:z+102}
C.fMZ.prototype={
$1(d){var w=null
return B.oH(!1,B.at(new C.bxf(this.a,this.b,w),w,w,w),w,x.z)},
$S:323}
C.fN2.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmR(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.ma,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmR(),$async$$0)
case 5:s=$.aV.ao$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qf))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1731}
C.fN3.prototype={
bo6(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.he),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eQ(A.dM.gaU(r))],"image/png"))
t.toString
s=Ao.h5f(t)
w=4
return B.b(new B.qm(s,"load",!1,x.ev).gH(0).df(0,A.jX),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bo6(d)},
$S:1732}
C.fN_.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:152}
C.fN0.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:152}
C.fN1.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fim.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.frU,A.K,w,w)},
$S:1733}
C.fin.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bx(v,B.kl(A.bp,w,A.dJ,8,w,e===0?w:e,w),A.aq)},
$S:572}
C.epn.prototype={
$1(d){this.a.a_Y()
return null},
$S:11}
C.epl.prototype={
$0(){return this.a.e=D.bzg},
$S:0}
C.epm.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bD
return this.b.e=w},
$S:0}
C.coG.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.coH.prototype={
$2(d,e){return(d|e)>>>0},
$S:60};(function aliases(){var w=C.aNx.prototype
w.bzh=w.t
w=C.aN1.prototype
w.byL=w.t
w=C.aMN.prototype
w.byv=w.t
w=C.aN0.prototype
w.byK=w.t
w=C.aNv.prototype
w.bzf=w.t
w=C.aOP.prototype
w.bAK=w.t
w=C.aLI.prototype
w.bxn=w.t
w=C.aNI.prototype
w.bzs=w.t
w=C.aNJ.prototype
w.bzt=w.t
w=C.b4H.prototype
w.btS=w.aEO})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"imX","aoE",104)
v(C.aKE.prototype,"gc87","ZR",0)
var r
u(r=C.aza.prototype,"gcBT","cBU",38)
v(r,"gc8X","aeu",0)
v(r=C.az6.prototype,"gb_T","Ex",3)
v(r,"gc8U","c8V",3)
v(r,"gayo","ym",0)
v(r,"gaAq","JM",0)
t(C,"inn","hT2",105)
v(C.aFh.prototype,"gcc_","cc0",3)
s(C,"iny",0,null,["$4$paper$photo$request$template"],["fU6"],106,0)
s(C,"inx",0,null,["$5$doc$history$instruction$photo$template"],["bEp"],107,0)
v(r=C.aFy.prototype,"gccJ","Jr",0)
v(r,"gbMF","XE",0)
v(r,"gccM","afl",0)
v(r,"gccL","a_K",0)
v(r,"gb18","EP",0)
v(C.aFB.prototype,"gccR","a_M",0)
v(r=C.aH_.prototype,"gb1l","Qx",0)
v(r,"gctD","b5H",3)
v(r,"gcDg","aCY",86)
v(r,"gbQA","abc",0)
v(r,"gcdh","B0",0)
v(r=C.aIV.prototype,"gcnu","a17",0)
v(r,"gcnC","a1a",0)
v(r,"gbFv","a9B",0)
v(r,"gcdl","afx",0)
v(C.aIU.prototype,"gcdm","afy",0)
v(C.aCY.prototype,"gbEu","a9o",0)
v(C.aBk.prototype,"gcdn","a_X",0)
w(C,"inL","ilE",12)
w(C,"inJ","iix",12)
w(C,"inK","ikC",12)
v(r=C.aFS.prototype,"gcGA","cGB",3)
v(r,"gcrS","crT",3)
u(r,"gEV","agh",7)
v(r,"gbKi","atl",3)
u(r,"gEW","b2I",7)
v(r,"gcfD","afZ",0)
v(r,"gceu","afY",0)
v(r,"gchO","agi",0)
v(r,"gbMC","aaK",0)
v(r,"gciI","a0y",0)
v(r,"gciJ","agz",0)
v(r,"gcjf","agG",0)
v(r,"gci0","agl",0)
v(r,"gbQM","abg",0)
v(r,"gaU0","aU1",3)
v(r,"gaT6","aT7",3)
v(r,"gaOE","aOF",3)
v(r,"gaT5","auc",3)
u(r,"gbEL","bEM",80)
v(r,"gaCu","b8T",3)
v(r,"gcew","cex",3)
v(r,"gc15","c16",3)
v(r,"gbP4","bP5",3)
v(r=C.aFV.prototype,"gcFm","cFn",3)
v(r,"gcF_","cF0",3)
t(C,"inM","ilV",2)
v(r=C.aFT.prototype,"gcdt","Jw",0)
v(r,"gcvF","S2",0)
v(r,"gcdq","Jv",0)
v(r,"gcHU","a3H",0)
v(r,"gcjr","agN",0)
v(C.aFR.prototype,"gcdu","b1t",3)
v(r=C.aFU.prototype,"gbRC","abq",0)
u(r,"gcdr","cds",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.od,C.SF,C.bK_,C.bIi,C.cFW,C.cFU,C.bSe,C.bap,C.cFV,C.bGS,C.coA,C.coy,C.coz,C.cox,C.au9,C.cow,C.bTg,C.oG,C.aGt,C.jz,C.o_,C.a8K,C.A3,C.lv,C.oQ,C.ml,C.A4,C.o3,C.a8S,C.asu,C.b30,C.eoN,C.ls,C.Fk,C.ev,C.j8,C.Fb,C.y5,C.eN,C.lY,C.i3,C.jW,C.a8T,C.ag3,C.b31,C.b4H,C.a3U])
u(B.jt,[C.cNX,C.c3e,C.fI9,C.cPt,C.cOQ,C.fNG,C.e79,C.e78,C.epq,C.epp,C.fP4,C.fpq,C.fpr,C.ciF,C.ciG,C.ciH,C.et4,C.f19,C.f0x,C.f0w,C.f1A,C.f17,C.f10,C.f1j,C.f2_,C.fxt,C.f8j,C.f8i,C.f8M,C.eoQ,C.fSD,C.e2n,C.fZm,C.fPr,C.cki,C.ckg,C.ckl,C.fPW,C.fPX,C.fPY,C.fPZ,C.ck2,C.ck3,C.dPx,C.ck_,C.fPV,C.ffJ,C.e05,C.cjT,C.eow,C.fNv,C.eEI,C.eF6,C.eF3,C.eF2,C.eFd,C.eFc,C.eGI,C.eGH,C.eEX,C.eEW,C.eBw,C.eCG,C.eFF,C.eH_,C.eGZ,C.eCt,C.eDE,C.eBd,C.d9I,C.eHV,C.eHW,C.eHR,C.eHS,C.eHT,C.eHU,C.eHZ,C.ckq,C.eHu,C.eHF,C.coH])
u(B.hu,[C.cNY,C.cNZ,C.bTh,C.fF0,C.c3d,C.c3g,C.fVQ,C.fgT,C.fgK,C.fh_,C.foh,C.foi,C.fIa,C.fI8,C.fVk,C.fEF,C.fWb,C.cPj,C.cPo,C.cPq,C.cPm,C.cPr,C.cPk,C.cPs,C.cPf,C.cPc,C.cPb,C.cPi,C.cOL,C.cOJ,C.fMI,C.fMJ,C.fsB,C.fNH,C.fNN,C.frC,C.ceZ,C.fMG,C.fMH,C.fHx,C.fHy,C.fNM,C.fNI,C.fNK,C.fNL,C.fNJ,C.fZE,C.fHB,C.fHC,C.fHF,C.fHG,C.fHJ,C.fHK,C.h06,C.fpT,C.h0h,C.esn,C.eso,C.esp,C.es5,C.esh,C.esi,C.esk,C.ciE,C.ciC,C.ciD,C.fNm,C.fNo,C.fNn,C.fps,C.fpt,C.h0k,C.et9,C.eta,C.et1,C.et2,C.et5,C.et6,C.h0A,C.f20,C.f1q,C.f1a,C.f1n,C.f0s,C.f0t,C.f0u,C.f0y,C.f0z,C.f1Q,C.f1X,C.f1Z,C.f1z,C.f1B,C.f1F,C.f1G,C.f1H,C.f1L,C.f1C,C.f1D,C.f0K,C.f0L,C.f0M,C.f0N,C.f0O,C.f0P,C.f0Q,C.f0R,C.f0S,C.f05,C.f06,C.f07,C.f08,C.f0a,C.f0b,C.f0E,C.f0F,C.f0G,C.f0H,C.f0I,C.f0f,C.f0g,C.f0h,C.f0i,C.f1_,C.f1i,C.fKL,C.fKK,C.ck9,C.fxs,C.fSz,C.fSs,C.fSv,C.fQq,C.fQr,C.fQs,C.fKS,C.fKR,C.fKQ,C.fKO,C.fpm,C.fpn,C.fpo,C.h0M,C.f8l,C.f8m,C.f8f,C.f89,C.f8F,C.f8G,C.f8I,C.f8J,C.f8E,C.h0L,C.f80,C.fwJ,C.eoP,C.fSB,C.fSC,C.fSE,C.fSx,C.fSy,C.h_Z,C.ds4,C.dsa,C.eoO,C.flH,C.flJ,C.flI,C.flG,C.fLW,C.fLY,C.fnM,C.fS3,C.fS4,C.fS5,C.fSg,C.fSl,C.fSm,C.fSn,C.fSo,C.fSp,C.fSq,C.fSr,C.fS6,C.fS7,C.fS8,C.fS9,C.fSa,C.fSb,C.fSc,C.fSd,C.fSe,C.fSf,C.fSh,C.fSi,C.fSj,C.fSk,C.fJM,C.fw1,C.fw0,C.fSK,C.e2o,C.e2m,C.f79,C.ceA,C.ceC,C.fZo,C.dho,C.dhq,C.fZn,C.fZl,C.h0K,C.fPn,C.dgZ,C.fHN,C.fHO,C.ck7,C.ck8,C.ck6,C.cjX,C.cjY,C.cjU,C.cjV,C.cjW,C.cko,C.ckj,C.cke,C.ckf,C.ckh,C.ckk,C.ckm,C.fQ_,C.ck1,C.ck4,C.ck5,C.ckb,C.ckc,C.fSR,C.fRY,C.ck0,C.cjZ,C.fPU,C.fyL,C.cjS,C.f4E,C.fBN,C.eHl,C.eDL,C.eDM,C.eFl,C.eF9,C.eFa,C.eD8,C.eH6,C.eH7,C.eH8,C.eCx,C.eEP,C.eER,C.eEr,C.eEo,C.eDH,C.eDI,C.eEy,C.eCz,C.eEK,C.eEL,C.eEJ,C.eEN,C.eEM,C.eF4,C.eF5,C.eF7,C.eF0,C.eCS,C.eCP,C.eFe,C.eCH,C.eH5,C.eBf,C.eCK,C.eCJ,C.eBY,C.eC2,C.eC0,C.eBZ,C.eHd,C.eHe,C.eHf,C.eHc,C.eGK,C.eGJ,C.eGD,C.eGF,C.eGv,C.eH3,C.eH1,C.eBn,C.eBj,C.eDF,C.eC6,C.eBy,C.eBx,C.eBU,C.eBV,C.eD6,C.eC8,C.eCc,C.eEY,C.eGw,C.eGx,C.eGy,C.eGz,C.eCB,C.eCC,C.eCD,C.eE7,C.eD2,C.eCV,C.eD1,C.eEh,C.eEi,C.eG4,C.eG6,C.eGq,C.eGs,C.eG7,C.eG8,C.eC4,C.eDK,C.eDJ,C.eGU,C.eCs,C.eCk,C.eCl,C.eCo,C.eCp,C.eEm,C.eDq,C.eDr,C.eDs,C.eDt,C.eDu,C.eDv,C.eDw,C.eDx,C.eDy,C.eDz,C.eDA,C.eFi,C.d9F,C.d9G,C.eI0,C.fSH,C.fSQ,C.fSG,C.fSM,C.fog,C.h0O,C.h0P,C.h0Q,C.eHt,C.eHC,C.eB8,C.eB3,C.eB4,C.fMY,C.fMX,C.fMZ,C.fN3,C.fN_,C.fN0,C.fim,C.fin,C.epn,C.coG])
u(B.iG,[C.cO_,C.fgP,C.fgU,C.fgV,C.fgQ,C.fgR,C.fgS,C.fgI,C.fgJ,C.fgL,C.fgM,C.fgZ,C.fgY,C.fgO,C.fgN,C.fgW,C.fgX,C.fh1,C.fh2,C.fh0,C.cPl,C.cPp,C.cPn,C.cPd,C.cPe,C.cPg,C.cP9,C.cPa,C.cPh,C.cP8,C.cP7,C.cP6,C.cOA,C.cOz,C.cOC,C.cOK,C.cOD,C.cOB,C.cOF,C.cOG,C.cOH,C.cOE,C.cOI,C.cOM,C.cON,C.cOO,C.cOP,C.fHv,C.fHw,C.fHt,C.fHu,C.ekE,C.ekC,C.ekD,C.ekF,C.ekG,C.e77,C.fHz,C.fHA,C.fHD,C.fHE,C.fHH,C.fHI,C.epo,C.fPu,C.fPt,C.esm,C.esl,C.es_,C.erW,C.es6,C.es7,C.es8,C.es1,C.es2,C.es3,C.es4,C.es0,C.erY,C.erZ,C.ese,C.esf,C.esd,C.esg,C.esc,C.esb,C.esa,C.esj,C.es9,C.erX,C.et8,C.esX,C.esY,C.et3,C.esZ,C.et0,C.et_,C.et7,C.f0T,C.f1g,C.f0C,C.f0D,C.f0A,C.f0B,C.f1m,C.f1l,C.f1k,C.f1p,C.f1o,C.f0r,C.f0v,C.f0q,C.f0p,C.f0m,C.f0o,C.f0n,C.f1Y,C.f1R,C.f1P,C.f1S,C.f1O,C.f1T,C.f1N,C.f1U,C.f1V,C.f1W,C.f1M,C.f1y,C.f1t,C.f1E,C.f1x,C.f1I,C.f1w,C.f1J,C.f1v,C.f1K,C.f1u,C.f1d,C.f1c,C.f1e,C.f1b,C.f1f,C.f15,C.f14,C.f16,C.f13,C.f12,C.f11,C.f09,C.f04,C.f0j,C.f0e,C.f0k,C.f0d,C.f0l,C.f0c,C.f18,C.f0X,C.f0W,C.f0Y,C.f0V,C.f0Z,C.f0U,C.f1h,C.f1s,C.f1r,C.f0J,C.fSu,C.fSw,C.fSA,C.fKP,C.fNf,C.fNd,C.fNe,C.f8n,C.f8o,C.f8k,C.f8e,C.f8d,C.f8g,C.f8h,C.f83,C.f84,C.f86,C.f87,C.f88,C.f85,C.f8a,C.f8B,C.f8C,C.f8A,C.f8D,C.f8z,C.f8y,C.f8x,C.f8H,C.f8w,C.f8v,C.f8u,C.f8K,C.f8t,C.f8L,C.f8s,C.f8r,C.f8b,C.f8c,C.f8q,C.f8p,C.f7X,C.f7Y,C.f7Z,C.f8_,C.f7W,C.f81,C.f82,C.ds3,C.ds5,C.ds8,C.ds9,C.ds7,C.ds6,C.fLX,C.fJN,C.ceB,C.ceD,C.dhh,C.dhm,C.dhn,C.dhl,C.dhk,C.dhp,C.dhj,C.dhi,C.dhr,C.fZk,C.do5,C.do6,C.do7,C.fHL,C.fHM,C.ckp,C.eB9,C.eBa,C.eBb,C.eBc,C.fyJ,C.fyK,C.e07,C.e06,C.dec,C.deb,C.eHn,C.eHm,C.eDN,C.eGt,C.eHj,C.eFj,C.eH9,C.eHa,C.eHk,C.eEs,C.eCv,C.eCw,C.eEQ,C.eEq,C.eEn,C.eEp,C.eEt,C.eEu,C.eEv,C.eEw,C.eEx,C.eEz,C.eCA,C.eEC,C.eED,C.eEE,C.eEF,C.eEG,C.eEH,C.eEB,C.eEO,C.eF1,C.eF_,C.eF8,C.eEA,C.eCQ,C.eCR,C.eCT,C.eFb,C.eFf,C.eBu,C.eCO,C.eCM,C.eFn,C.eCI,C.eFm,C.eCy,C.eD9,C.eH4,C.eGu,C.eBv,C.eBs,C.eBi,C.eBe,C.eBg,C.eCL,C.eBX,C.eC1,C.eC_,C.eBW,C.eEZ,C.eHg,C.eGG,C.eGB,C.eGC,C.eGE,C.eDD,C.eDC,C.eH2,C.eBl,C.eBm,C.eBo,C.eBp,C.eBt,C.eBk,C.eFk,C.eHb,C.eDG,C.eC5,C.eBh,C.eD7,C.eBq,C.eBz,C.eBA,C.eBB,C.eBM,C.eBP,C.eBQ,C.eBR,C.eBS,C.eBT,C.eBC,C.eBD,C.eBE,C.eBF,C.eBG,C.eBH,C.eBI,C.eBJ,C.eBK,C.eBL,C.eBN,C.eBO,C.eD5,C.eD4,C.eD3,C.eBr,C.eC9,C.eC7,C.eCa,C.eCb,C.eCN,C.eEU,C.eEV,C.eES,C.eET,C.eGA,C.eCF,C.eCE,C.eE6,C.eE5,C.eE8,C.eE4,C.eE9,C.eE3,C.eEa,C.eE2,C.eEb,C.eE1,C.eEc,C.eE0,C.eEd,C.eE_,C.eEe,C.eDZ,C.eDS,C.eDT,C.eDU,C.eDR,C.eDV,C.eDQ,C.eDW,C.eDP,C.eDX,C.eDO,C.eDY,C.eD_,C.eD0,C.eCU,C.eCW,C.eCX,C.eCY,C.eCZ,C.eHh,C.eHi,C.eEg,C.eEf,C.eEj,C.eFG,C.eFH,C.eFI,C.eFT,C.eG3,C.eGe,C.eGl,C.eGm,C.eGn,C.eGo,C.eGp,C.eFJ,C.eFK,C.eFL,C.eFM,C.eFN,C.eFO,C.eFP,C.eFQ,C.eFR,C.eFS,C.eFU,C.eFV,C.eFW,C.eFX,C.eFY,C.eFZ,C.eG_,C.eG0,C.eG1,C.eFw,C.eG2,C.eFE,C.eFD,C.eG5,C.eFC,C.eFs,C.eGr,C.eFB,C.eFr,C.eFp,C.eFA,C.eFq,C.eFo,C.eG9,C.eFz,C.eGa,C.eGb,C.eGc,C.eGd,C.eFy,C.eGf,C.eGg,C.eGh,C.eFx,C.eGi,C.eFv,C.eGj,C.eFu,C.eGk,C.eFt,C.eC3,C.eGN,C.eGM,C.eGO,C.eGL,C.eDc,C.eDb,C.eDd,C.eDa,C.eGY,C.eGT,C.eGX,C.eGP,C.eGQ,C.eGR,C.eGS,C.eGV,C.eGW,C.eH0,C.eCu,C.eCh,C.eCi,C.eCj,C.eCg,C.eCn,C.eCm,C.eCf,C.eCe,C.eCq,C.eCd,C.eCr,C.eEl,C.eEk,C.eDp,C.eDo,C.eDn,C.eDm,C.eDl,C.eDk,C.eDj,C.eDi,C.eDf,C.eDh,C.eDg,C.eDe,C.eDB,C.eFg,C.eFh,C.d9H,C.da5,C.da6,C.d9B,C.d9A,C.d9E,C.d9C,C.d9D,C.eHY,C.eHO,C.eHX,C.eHP,C.eHQ,C.eHK,C.eHL,C.eHM,C.eHN,C.eI_,C.fSN,C.fSO,C.fSP,C.eHq,C.eHr,C.eHs,C.eHv,C.eHw,C.eHz,C.eHA,C.eHy,C.eHB,C.eHx,C.eHp,C.eHo,C.eHD,C.eHE,C.eHG,C.eHH,C.eB7,C.eB6,C.eB2,C.eB5,C.eHJ,C.eHI,C.fN2,C.fN1,C.epl,C.epm])
t(C.aT2,B.M)
u(B.lB,[C.a4C,C.ayC,C.axg,C.y3,C.y6,C.l8,C.tI,C.C2,C.rS,C.wp,C.at1,C.Jw,C.ast,C.v7,C.mP,C.hF,C.a9v])
u(C.bSe,[C.cFX,C.bSf])
u(C.coA,[C.coE,C.au8])
t(C.coD,C.coy)
t(C.coC,C.cox)
t(C.coF,C.coC)
t(C.coB,C.coz)
t(C.cov,C.cow)
t(C.bbZ,B.p8)
t(C.cz2,B.awJ)
t(C.a9h,B.xR)
u(B.af,[C.a1W,C.ZD,C.ZB,C.arA,C.WM,C.WN,C.a0V,C.a1r,C.a1q,C.aFs,C.a_O,C.Ob,C.a_l,C.a_G,C.apv,C.aKj,C.W3,C.aB_,C.a8A,C.OF,C.aAm,C.Kx,C.a0x,C.WY,C.WZ,C.aFQ,C.asy,C.a8B])
u(B.ah,[C.aKE,C.aza,C.az6,C.aFh,C.aFy,C.aFB,C.aH_,C.aIV,C.aIU,C.aNx,C.aCY,C.aN1,C.aBk,C.bi_,C.aMN,C.aOP,C.aN0,C.bfN,C.aNv,C.aNI,C.aLI,C.bey,C.aNJ,C.aFT,C.bmt,C.aFR,C.aFU,C.bmc])
u(B.ax,[C.az8,C.aeb,C.adA,C.bld,C.aee,C.afU,C.b2C,C.buP,C.b2X,C.bnK,C.btl,C.b0R,C.b3_,C.aeh,C.aey,C.b2Y,C.Jv,C.b0U,C.beO,C.Qo,C.KD,C.bjz,C.bjy,C.bxf])
u(B.HY,[C.bef,C.bwd,C.aL0,C.bh_,C.btK])
u(B.mg,[C.bee,C.baI,C.btH,C.bdN,C.bho,C.bjG,C.bgt,C.bhk,C.bh1,C.bq5,C.bbR,C.bbu,C.bxb,C.bu9,C.bth,C.bgm,C.b2V,C.bsb,C.bte])
t(C.bm9,C.aNx)
t(C.blv,C.aN1)
t(C.blf,C.aMN)
t(C.bwG,C.aOP)
t(C.blr,C.aN0)
t(C.bm7,C.aNv)
t(C.bzy,C.aNI)
t(C.aFS,C.bzy)
t(C.bez,C.aLI)
t(C.aFV,C.aNJ)
t(C.bx1,B.j_)
t(C.a9u,B.kF)
t(C.coI,C.b4H)
t(C.aj9,C.a3U)
u(B.YD,[C.aST,C.aUm])
t(C.ayc,C.aST)
w(C.aNx,B.cd)
w(C.aN1,B.cd)
w(C.aMN,B.cd)
w(C.aN0,B.cd)
w(C.aNv,B.cd)
w(C.aOP,B.cd)
w(C.aLI,B.eO)
w(C.aNI,B.cd)
v(C.bzy,B.eB)
w(C.aNJ,B.cd)})()
B.j0(b.typeUniverse,JSON.parse('{"aTE":{"hM":["aTE"]},"od":{"aTE":[],"hM":["aTE"]},"aT2":{"M":["SF"],"M.E":"SF"},"bbZ":{"p8":[]},"a9h":{"xR":[],"oz":[]},"a1W":{"af":[],"v":[]},"aKE":{"ah":["a1W"]},"ZD":{"af":[],"v":[]},"ZB":{"af":[],"v":[]},"aza":{"ah":["ZD"]},"az6":{"ah":["ZB"]},"az8":{"ax":[],"v":[]},"arA":{"af":[],"v":[]},"aFh":{"ah":["arA"]},"aeb":{"ax":[],"v":[]},"adA":{"ax":[],"v":[]},"aee":{"ax":[],"v":[]},"afU":{"ax":[],"v":[]},"bld":{"ax":[],"v":[]},"WM":{"af":[],"v":[]},"aFy":{"ah":["WM"]},"b2C":{"ax":[],"v":[]},"bef":{"aC":[]},"bee":{"aC":[]},"bwd":{"aC":[]},"baI":{"aC":[]},"btH":{"aC":[]},"WN":{"af":[],"v":[]},"aFB":{"ah":["WN"]},"bdN":{"aC":[]},"a0V":{"af":[],"v":[]},"aH_":{"ah":["a0V"]},"bho":{"aC":[]},"a1r":{"af":[],"v":[]},"a1q":{"af":[],"v":[]},"aFs":{"af":[],"v":[]},"a_O":{"af":[],"v":[]},"aIV":{"ah":["a1r"]},"aIU":{"ah":["a1q"]},"bm9":{"ah":["aFs"]},"bjG":{"aC":[]},"aCY":{"ah":["a_O"]},"buP":{"ax":[],"v":[]},"b2X":{"ax":[],"v":[]},"bnK":{"ax":[],"v":[]},"Ob":{"af":[],"v":[]},"a_l":{"af":[],"v":[]},"blv":{"ah":["Ob"]},"btl":{"ax":[],"v":[]},"bgt":{"aC":[]},"b0R":{"ax":[],"v":[]},"aBk":{"ah":["a_l"]},"a_G":{"af":[],"v":[]},"bi_":{"ah":["a_G"]},"bhk":{"aC":[]},"bh1":{"aC":[]},"bq5":{"aC":[]},"bbR":{"aC":[]},"bbu":{"aC":[]},"bxb":{"aC":[]},"bu9":{"aC":[]},"bth":{"aC":[]},"bgm":{"aC":[]},"apv":{"af":[],"v":[]},"b3_":{"ax":[],"v":[]},"blf":{"ah":["apv"]},"aeh":{"ax":[],"v":[]},"aey":{"ax":[],"v":[]},"aKj":{"af":[],"v":[]},"W3":{"af":[],"v":[]},"Jv":{"ax":[],"v":[]},"aB_":{"af":[],"v":[]},"a8A":{"af":[],"v":[]},"b2Y":{"ax":[],"v":[]},"b2V":{"aC":[]},"bwG":{"ah":["aKj"]},"aL0":{"aC":[]},"blr":{"ah":["W3"]},"bfN":{"ah":["aB_"]},"bm7":{"ah":["a8A"]},"b0U":{"ax":[],"v":[]},"bh_":{"aC":[]},"bsb":{"aC":[]},"bte":{"aC":[]},"aAm":{"af":[],"v":[]},"Kx":{"af":[],"v":[]},"a0x":{"af":[],"v":[]},"KD":{"ax":[],"v":[]},"OF":{"af":[],"v":[]},"aFS":{"ah":["OF"],"eB":[]},"bez":{"ah":["aAm"]},"beO":{"ax":[],"v":[]},"bey":{"ah":["Kx"]},"Qo":{"ax":[],"v":[]},"aFV":{"ah":["a0x"]},"btK":{"aC":[]},"bjz":{"ax":[],"v":[]},"bjy":{"ax":[],"v":[]},"WY":{"af":[],"v":[]},"WZ":{"af":[],"v":[]},"aFQ":{"af":[],"v":[]},"asy":{"af":[],"v":[]},"aFT":{"ah":["WY"]},"bmt":{"ah":["WZ"]},"aFR":{"ah":["aFQ"]},"bx1":{"j_":[]},"aFU":{"ah":["asy"]},"bxf":{"ax":[],"v":[]},"a8B":{"af":[],"v":[]},"bmc":{"ah":["a8B"]},"a9u":{"kF":["ft<eU>"],"kr":["ft<eU>"]},"aj9":{"a3U":[]},"aST":{"jc":[],"fi":[]},"ayc":{"jc":[],"fi":[]},"aUm":{"jc":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mo"),U:w("vU<qi>"),bz:w("u"),M:w("df<m>"),bo:w("jQ"),g7:w("U1"),gc:w("aB<iD?>"),bq:w("aB<~>"),cc:w("BV"),fS:w("Ey"),an:w("IG"),bm:w("O<SF>"),X:w("O<SI>"),f3:w("O<aTE>"),aK:w("O<nm>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lP>"),d5:w("O<aB<bA<F,+icon3d,picture(m?,m?)>>>"),bH:w("O<aB<dJ>>"),fG:w("O<aB<~>>"),aF:w("O<nu>"),cd:w("O<ai<jz>>"),ez:w("O<a8<m,aF>>"),d:w("O<a8<m,@>>"),B:w("O<mL>"),h:w("O<jz>"),gE:w("O<A3>"),k:w("O<oG>"),g:w("O<lY>"),D:w("O<i3>"),u:w("O<eN>"),m:w("O<v7>"),i:w("O<hF>"),aC:w("O<a8S>"),o:w("O<A4>"),e3:w("O<aF>"),dN:w("O<q>"),v:w("O<fT>"),cR:w("O<iY>"),J:w("O<jo>"),gx:w("O<pw<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(I,I)>"),ek:w("O<+(F,m)>"),n:w("O<+(F,F)>"),r:w("O<cT>"),s:w("O<m>"),aS:w("O<j_>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<bap>"),bx:w("O<aGt>"),gz:w("O<ag3>"),x:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),bA:w("O<q?>"),Z:w("O<F?>"),cA:w("O<ch>"),A:w("cw<ah<af>>"),gL:w("ai<oG>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<F>"),e:w("bA<F,+icon3d,picture(m?,m?)>"),P:w("a8<m,@>"),f:w("a8<@,@>"),gI:w("a8<F,+icon3d,picture(m?,m?)>"),bR:w("N<hF,v>"),eC:w("N<o3,m>"),cT:w("N<jW,D>"),dv:w("N<m,m>"),f0:w("N<m,v>"),gN:w("N<F,q0>"),gh:w("N<mP,jB<mP>>"),w:w("iA"),ei:w("iD"),g2:w("rI"),fB:w("Fb"),b6:w("A3"),gX:w("a8K"),dt:w("lv"),ea:w("oG"),bt:w("lY"),I:w("i3"),F:w("eN"),fO:w("mP"),ff:w("v7"),fP:w("hF"),Q:w("wp"),dO:w("asu"),a:w("ct"),C:w("aF"),dw:w("au9"),di:w("a9v"),Y:w("eU"),fz:w("+(m,m)"),dL:w("+(F,F)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("FH"),dB:w("ds<q>"),bJ:w("ds<m>"),_:w("dZ<m>"),N:w("m"),fw:w("qi"),bO:w("au"),K:w("bp<q>"),b:w("bp<I>"),E:w("dJ"),W:w("bP<m>"),ac:w("bP<F>"),ex:w("k_<lY>"),cI:w("k_<m>"),cl:w("k_<I>"),b4:w("Y<ls>"),a8:w("Y<ml>"),fR:w("Y<+(m,m)>"),co:w("e9<q>"),l:w("v"),b2:w("c2<~>"),ev:w("qm<dY>"),dT:w("bk<~>"),q:w("mu"),y:w("P"),gR:w("I"),z:w("@"),S:w("F"),at:w("bd?"),gw:w("ai<a8<m,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iD?"),af:w("i3?"),go:w("b31?"),a6:w("a8T?"),cK:w("aF?"),bZ:w("+bytes,dataUrl,fileName(dJ,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dJ?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1q=new B.bL(A.aA,null,null,H.arW,null)
D.b1z=new B.d9(0,-0.15)
D.b1B=new B.d9(0.62,0)
D.b1E=new B.d9(-0.35,-0.45)
D.b1O=new B.d9(0.9,-0.85)
D.b3Z=new B.bg(H.Uk,H.Uk,A.fI,A.fI)
D.b4e=new B.ay(A.b8,1,A.r,-1)
D.bpN=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4q=new B.ay(D.bpN,1,A.r,-1)
D.b4C=new B.ay(A.aE,1.5,A.r,-1)
D.b4H=new B.ay(A.b8,1.6,A.r,-1)
D.b4X=new B.ay(A.aE,1.4,A.r,-1)
D.b6i=new B.o(null,null,null,null,null,K.I0,A.a7)
D.c78=new B.a9(A.a6,A.a9,A.x,G.a5B,null,null)
D.b6q=new B.o(null,null,null,null,null,D.c78,A.a7)
D.aeb=new B.o(A.av,null,null,A.tK,null,null,A.n)
D.biL=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bpK=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d5K=w([D.biL,D.bpK],x.O)
D.exV=new B.c_(A.A,0.5,A.x,null,0,D.d5K,null,null)
D.b6J=new B.o(null,null,null,null,null,D.exV,A.a7)
D.YZ=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5c=new B.bG(Q.vM,A.a1,A.a1,A.a1)
D.b6L=new B.o(D.YZ,null,D.b5c,null,null,null,A.n)
D.c8U=new B.a9(A.a6,A.a9,A.x,A.RY,null,null)
D.b6S=new B.o(null,null,null,null,null,D.c8U,A.a7)
D.afO=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b6V=new B.o(D.afO,null,null,A.ri,null,null,A.n)
D.b6Z=new B.o(A.jB,null,null,null,null,null,A.a7)
D.b71=new B.o(A1.ah3,null,H.adN,A.mz,null,null,A.n)
D.Ff=new B.o(A.dH,null,null,null,null,null,A.a7)
D.b78=new B.o(null,null,null,null,null,E.wP,A.a7)
D.db2=w([E.ai4,A.c3],x.O)
D.c8v=new B.a9(A.b1,A.b7,A.x,D.db2,null,null)
D.b7c=new B.o(null,null,null,A.mz,null,D.c8v,A.n)
D.dmv=w([A.bm,A.dH,A.ko],x.O)
D.a3A=new B.a9(A.aA,A.aF,A.x,D.dmv,null,null)
D.b7p=new B.o(null,null,null,null,null,D.a3A,A.n)
D.b7q=new B.o(D.afO,null,null,A.l5,null,null,A.n)
D.cAo=w([A.d9,A.bm],x.O)
D.c8m=new B.a9(A.aA,A.aF,A.x,D.cAo,null,null)
D.b7u=new B.o(null,null,null,null,null,D.c8m,A.n)
D.b7E=new B.o(null,null,null,null,null,G.uW,A.a7)
D.b7Z=new B.o(A.ai6,null,null,null,null,null,A.a7)
D.bjL=new B.u(0.5647058823529412,0,0,0,A.q)
D.ael=new B.ac(0,A.G,D.bjL,A.Jo,28)
D.ba7=new B.aXR()
D.baG=new C.cz2()
D.baT=new C.bbZ()
D.aeQ=new B.cc(A.A,null,null,A.a3p,null)
D.bdA=new B.fk(null,null,null,null,null,E.nr,null,null,null,null)
D.bbs=new B.cc(A.A,null,null,D.bdA,null)
D.bSs=new B.ae(A.e9,28,A.c,null,null,null)
D.bbY=new B.cc(A.A,null,null,D.bSs,null)
D.bdx=new B.fk(2,null,null,null,null,A.c4,null,null,null,null)
D.bcl=new B.cc(A.A,null,null,D.bdx,null)
D.bSM=new B.ae(K.Pw,40,A.bC,null,null,null)
D.bcm=new B.cc(A.A,null,null,D.bSM,null)
D.ber=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.beE=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bf6=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfh=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bfV=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgb=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgd=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mc=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bgG=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bgO=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ag8=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bhF=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.biy=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ago=new B.u(1,1,1,0.9725490196078431,A.q)
D.biU=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bj8=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjb=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjr=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjR=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.blv=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YH=new B.u(0.8509803921568627,0,0,0,A.q)
D.blG=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.blN=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahn=new B.u(0.6,0,0,0,A.q)
D.ahp=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bns=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.u5=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bnW=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.boo=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.boN=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aik=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Za=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BM=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.MT=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jy=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aiR=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zj=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bsC=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bt7=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.btn=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.ZL=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.buA=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yk=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bv9=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bvu=new B.hL(A.aW,!0,null,null)
D.fyz=new B.G(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZx=new B.B("Bio link",null,D.fyz,null,null,null,null,null,null,null,null,null)
D.bcf=new B.cc(A.A,null,null,D.fZx,null)
D.bvJ=new B.hL(A.Bp,!0,D.bcf,null)
D.Nn=new C.a4C(0,"none")
D.ak7=new C.a4C(1,"deflate")
D.ak8=new C.a4C(2,"bzip2")
D.bwI=new B.ky(0.165,0.84,0.44,1)
D.dbm=w([A.cf,A.dJ,A.aE],x.O)
D.c7D=new B.a9(A.aA,A.aF,A.x,D.dbm,null,null)
D.b6n=new B.o(null,null,null,null,null,D.c7D,A.n)
D.c0S=new B.ae(A.f3,null,A.ad,null,null,null)
D.bcV=new B.cc(A.A,null,null,D.c0S,null)
D.bxg=new B.l3(D.b6n,A.bi,D.bcV,null)
D.bsR=new B.u(0.058823529411764705,1,1,1,A.q)
D.deN=w([A.bB,A.rs,A.rs,D.bsR],x.O)
D.cRS=w([0,0.32,0.7,1],x.x)
D.c8c=new B.a9(A.aA,A.aF,A.x,D.deN,D.cRS,null)
D.b6c=new B.o(null,null,null,null,null,D.c8c,A.n)
D.bxm=new B.l3(D.b6c,A.bi,null,null)
D.byu=new B.mC(1,1,null,null,null,A.bp,null)
D.byx=new B.mC(1,null,null,null,null,D.Zj,null)
D.bz0=new B.bd(125e4)
D.bz6=new B.bd(17e4)
D.bzg=new B.bd(35964e8)
D.bzn=new B.bd(55e4)
D.bzr=new B.bd(68e4)
D.bzS=new B.ij(0,0,0,5)
D.bA7=new B.Q(0,16,16,0)
D.bAi=new B.Q(0,36,0,36)
D.bAq=new B.Q(0,54,0,0)
D.bAx=new B.Q(10,0,10,3)
D.bAJ=new B.ij(10,16,10,10)
D.bAV=new B.Q(10,6,4,6)
D.bAY=new B.Q(10,8,10,6)
D.al7=new B.Q(11,8,11,11)
D.bB2=new B.Q(12,0,12,24)
D.bBf=new B.Q(12,12,12,4)
D.bBi=new B.Q(12,12,8,12)
D.bBy=new B.Q(12,8,8,12)
D.bBX=new B.Q(14,14,14,0)
D.bC1=new B.Q(14,14,14,90)
D.bCn=new B.Q(16,10,16,16)
D.bCo=new B.Q(16,10,16,20)
D.alT=new B.Q(16,6,16,28)
D.bCX=new B.Q(18,0,18,10)
D.bCZ=new B.Q(18,0,18,30)
D.bD0=new B.Q(18,10,18,12)
D.bD1=new B.Q(18,10,18,14)
D.bDl=new B.Q(18,16,14,18)
D.bDq=new B.Q(18,18,18,12)
D.bDw=new B.Q(18,26,18,12)
D.bDB=new B.Q(18,34,18,34)
D.bDC=new B.Q(18,4,18,14)
D.bDH=new B.Q(18,8,18,24)
D.bE_=new B.Q(20,16,14,4)
D.bE4=new B.Q(20,18,12,4)
D.bE9=new B.Q(20,20,12,20)
D.bEc=new B.Q(20,22,20,20)
D.bEh=new B.Q(20,6,20,6)
D.bEr=new B.Q(22,18,22,18)
D.bEz=new B.Q(22,24,22,0)
D.bEC=new B.Q(22,24,22,4)
D.bEK=new B.Q(22,60,22,22)
D.bEQ=new B.Q(24,24,24,22)
D.bF_=new B.Q(26,10,60,10)
D.bF7=new B.Q(28,44,28,44)
D.bFo=new B.Q(32,44,32,44)
D.bFw=new B.Q(38,30,38,20)
D.bFB=new B.Q(4,0,0,6)
D.bFN=new B.ij(4,4,4,4)
D.bGf=new B.ij(6,5,6,5)
D.bGk=new B.Q(6,6,8,6)
D.bGw=new B.Q(8,14,8,14)
D.bGx=new B.Q(8,22,8,22)
D.bGG=new B.Q(8,6,12,6)
D.bGP=new B.Q(8,8,8,4)
D.amP=new B.Q(9,9,9,6)
D.bH0=new B.ij(2.5,2.5,2.5,2.5)
D.bH1=new B.Q(10.5,0,10.5,0)
D.bH2=new B.Q(7,1.5,7,1.5)
D.d2z=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHi=new B.uH(null,null,D.d2z,A.xW)
D.d_m=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bHj=new B.uH(null,null,D.d_m,A.xW)
D.aVS=new B.G(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYP=new B.B("WORD DESIGN",null,D.aVS,null,null,null,null,null,null,null,null,null)
D.bI0=new B.by(1,A.bc,D.fYP,null)
D.fYt=new B.B("Slides database",null,Ac.tv,null,null,null,null,null,null,null,null,null)
D.fVG=new B.B("Admin only \xb7 keep as many as you like",null,V.aVl,null,null,null,null,null,null,null,null,null)
D.dvi=w([D.fYt,A.bG,D.fVG],x.p)
D.bw9=new B.fj(A.ai,A.e,A.i,A.E,null,A.p,null,0,D.dvi,null)
D.bI3=new B.by(1,A.bc,D.bw9,null)
D.fPT=new B.B("NGMY logo",null,A.fC,null,null,null,null,null,null,null,null,null)
D.bI6=new B.by(1,A.bc,D.fPT,null)
D.fwf=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_T=new B.B("TALK TO THE EDITOR",null,D.fwf,null,null,null,null,null,null,null,null,null)
D.bIp=new B.by(1,A.bc,D.h_T,null)
D.fJz=new B.B("Tell the AI what to change",null,Ac.tv,null,null,null,null,null,null,null,null,null)
D.bIJ=new B.by(1,A.bc,D.fJz,null)
D.bKd=new B.Eo(!0,"video/mp4")
D.fur=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHu=new B.B("Move presentations between devices",null,D.fur,null,null,null,!1,null,null,1,null,null)
D.bKh=new B.qF(A.e5,A.a6,A.f,D.fHu,null)
D.fIJ=new B.B("Edit in Slides",null,A.ja,null,null,null,null,null,null,null,null,null)
D.bKi=new B.qF(A.e5,A.A,A.f,D.fIJ,null)
D.bKx=new B.dp(1,A.co,D.bKi,null)
D.a1M=new B.a0(60988,"MaterialIcons",!1)
D.bNZ=new B.a0(61352,"MaterialIcons",!1)
D.aoy=new B.a0(61531,"MaterialIcons",!1)
D.bPa=new B.a0(63062,"MaterialIcons",!1)
D.bPh=new B.a0(63109,"MaterialIcons",!1)
D.bPu=new B.a0(63206,"MaterialIcons",!1)
D.apf=new B.a0(63238,"MaterialIcons",!1)
D.bPL=new B.a0(63338,"MaterialIcons",!1)
D.a2m=new B.a0(63365,"MaterialIcons",!1)
D.a2n=new B.a0(63367,"MaterialIcons",!1)
D.a2o=new B.a0(63368,"MaterialIcons",!1)
D.apr=new B.a0(63384,"MaterialIcons",!1)
D.bQ2=new B.a0(63525,"MaterialIcons",!1)
D.bQ6=new B.a0(63568,"MaterialIcons",!1)
D.bQr=new B.a0(983072,"MaterialIcons",!1)
D.bQQ=new B.a0(983271,"MaterialIcons",!0)
D.aqw=new B.a0(983965,"MaterialIcons",!1)
D.aqx=new B.a0(983966,"MaterialIcons",!1)
D.bRN=new B.a0(984592,"MaterialIcons",!1)
D.bS4=new B.ae(A.uD,16,A.aD,null,null,null)
D.aqJ=new B.ae(A.po,18,A.c,null,null,null)
D.bSt=new B.ae(A.Cs,18,N.lF,null,null,null)
D.bT8=new B.ae(A.jG,11,null,null,null,null)
D.bTj=new B.ae(A.a22,null,A.et,null,null,null)
D.bTR=new B.ae(A.rT,18,A.aD,null,null,null)
D.bTX=new B.ae(A4.CK,14,null,null,null,null)
D.bTY=new B.ae(A.ef,28,A.c0,null,null,null)
D.bU9=new B.ae(A.qI,20,A.c,null,null,null)
D.bUg=new B.ae(A.zd,null,null,null,null,null)
D.bUm=new B.ae(A.jF,18,A.hm,null,null,null)
D.bUr=new B.ae(A.ku,null,null,null,null,null)
D.bPc=new B.a0(63065,"MaterialIcons",!1)
D.bV3=new B.ae(D.bPc,15,A.c,null,null,null)
D.bPi=new B.a0(63113,"MaterialIcons",!1)
D.bV9=new B.ae(D.bPi,null,A.ad,null,null,null)
D.bVx=new B.ae(A.uB,22,A.bN,null,null,null)
D.bVS=new B.ae(A.rQ,18,null,null,null,null)
D.bVY=new B.ae(A.CP,12,A.c,null,null,null)
D.bRp=new B.a0(983687,"MaterialIcons",!1)
D.bW9=new B.ae(D.bRp,null,A.bm,null,null,null)
D.bWi=new B.ae(A.hF,null,A.bm,null,null,null)
D.bWB=new B.ae(A.pt,22,A.c,null,null,null)
D.bWF=new B.ae(A.cz,13,A.c,null,null,null)
D.bWL=new B.ae(A.ef,26,A.ax,null,null,null)
D.bWP=new B.ae(A.rW,26,A.c,null,null,null)
D.PJ=new B.ae(A.jG,8,A.c,null,null,null)
D.bX9=new B.ae(A.po,40,A.c,null,null,null)
D.bXa=new B.ae(A.bMW,null,null,null,null,null)
D.bXe=new B.ae(A.uO,20,null,null,null,null)
D.bRo=new B.a0(983683,"MaterialIcons",!1)
D.bXo=new B.ae(D.bRo,null,A.b2,null,null,null)
D.bXp=new B.ae(A.jG,16,A.bm,null,null,null)
D.bXK=new B.ae(A.pq,null,null,null,null,null)
D.arj=new B.ae(A.wx,22,A.c,null,null,null)
D.bXQ=new B.ae(A.e9,17,A.c,null,null,null)
D.ark=new B.ae(A.jG,9,A.c,null,null,null)
D.bXV=new B.ae(A.ws,null,null,null,null,null)
D.bNc=new B.a0(57744,"MaterialIcons",!1)
D.bY1=new B.ae(D.bNc,null,null,null,null,null)
D.bY4=new B.ae(A.ws,16,null,null,null,null)
D.bRW=new B.a0(985181,"MaterialIcons",!1)
D.HT=new B.ae(D.bRW,null,null,null,null,null)
D.bYg=new B.ae(A.ku,16,A.bN,null,null,null)
D.bRh=new B.a0(983615,"MaterialIcons",!1)
D.bYi=new B.ae(D.bRh,12,A.c,null,null,null)
D.arq=new B.ae(A.z0,16,null,null,null,null)
D.bYq=new B.ae(A.e9,21,A.c,null,null,null)
D.bYv=new B.ae(A.hF,17,A.c,null,null,null)
D.bYw=new B.ae(A.uB,null,null,null,null,null)
D.bYN=new B.ae(A.a31,20,A.aD,null,null,null)
D.bZ1=new B.ae(A.ot,22,E.nr,null,null,null)
D.bZ9=new B.ae(A.qH,13,A.ad,null,null,null)
D.bZc=new B.ae(A.aqj,20,A.aD,null,null,null)
D.bMU=new B.a0(57495,"MaterialIcons",!1)
D.bZh=new B.ae(D.bMU,null,null,null,null,null)
D.bZl=new B.ae(A.ou,18,A.c,null,null,null)
D.bZI=new B.ae(A.uS,28,A.c,null,null,null)
D.bZT=new B.ae(D.apf,null,A.aE,null,null,null)
D.bZU=new B.ae(A.qI,22,A.c,null,null,null)
D.arz=new B.ae(A.a1I,16,null,null,null,null)
D.c_G=new B.ae(A.uB,32,A.c,null,null,null)
D.c0o=new B.ae(A.jo,22,A.c,null,null,null)
D.c0r=new B.ae(A.rW,22,A.ad,null,null,null)
D.arP=new B.ae(A.uD,null,A.bV,null,null,null)
D.c1m=new B.ae(A.qB,18,null,null,null,null)
D.c2_=new B.ae(A.e9,18,A.br,null,null,null)
D.c26=new B.ae(A.aqe,null,null,null,null,null)
D.c2x=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aVG,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eH,!0,null,null,null,null)
D.fm8=new B.G(!0,A.bM,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c2P=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fm8,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eH,!0,null,null,null,null)
D.c3f=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eH,!0,null,null,null,null)
D.d6O=w([A.dH,A.aE],x.O)
D.c5m=new B.a9(A.a6,A.a9,A.x,D.d6O,null,null)
D.c5x=new B.a9(A.b1,A.b7,A.VX,A.ayW,null,null)
D.beW=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bjT=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bnt=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bhw=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cRU=w([D.beW,D.bjT,D.bnt,D.bhw],x.O)
D.c5Q=new B.a9(A.aA,A.aF,A.x,D.cRU,A.Io,null)
D.dvr=w([A.cJ,A.bF,A.b8],x.O)
D.c5S=new B.a9(A.b1,A.b7,A.VX,D.dvr,null,null)
D.dwZ=w([A.bm,A.ch],x.O)
D.c5X=new B.a9(A.a6,A.a9,A.x,D.dwZ,null,null)
D.drE=w([A.hR,A.d2,A.ay],x.O)
D.c5Z=new B.a9(A.aA,A.aF,A.x,D.drE,null,null)
D.dd7=w([A.cS,A.fn],x.O)
D.c62=new B.a9(A.a6,A.a9,A.x,D.dd7,null,null)
D.dvk=w([N.lF,A.d2],x.O)
D.asA=new B.a9(A.a6,A.a9,A.x,D.dvk,null,null)
D.bkB=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dvh=w([D.bkB,D.yk,A.c4],x.O)
D.c67=new B.a9(A.a6,A.a9,A.x,D.dvh,null,null)
D.d8z=w([A.b9,A.cV,A.en],x.O)
D.c68=new B.a9(A.aA,A.aF,A.x,D.d8z,null,null)
D.Q0=new B.a9(A.a6,A.a9,A.x,A.IC,null,null)
D.btL=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cKP=w([D.btL,A.c4,A.jA],x.O)
D.asF=new B.a9(A.aA,A.aF,A.x,D.cKP,null,null)
D.diN=w([A.u_,A.aB,D.BM],x.O)
D.c7a=new B.a9(A.a6,A.a9,A.x,D.diN,null,null)
D.bva=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bix=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.boB=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d7E=w([D.bva,D.bix,D.boB],x.O)
D.asG=new B.a9(A.a6,A.a9,A.x,D.d7E,null,null)
D.bkD=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9a=w([AA.ajK,D.bkD],x.O)
D.c7j=new B.a9(A.b1,A.b7,A.x,D.c9a,null,null)
D.d5y=w([A.np,A.bC],x.O)
D.c7n=new B.a9(A.b1,A.b7,A.x,D.d5y,null,null)
D.doc=w([A.aE,A.dJ],x.O)
D.c7u=new B.a9(A.a6,A.a9,A.x,D.doc,null,null)
D.aiy=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAI=w([D.aiy,D.jy,D.Mc],x.O)
D.c7X=new B.a9(A.aA,A.aF,A.x,D.aAI,null,null)
D.cKH=w([A.dx,A.dI],x.O)
D.c87=new B.a9(A.b1,A.b7,A.x,D.cKH,null,null)
D.dl5=w([A.xZ,A.BE],x.O)
D.c8W=new B.a9(A.a6,A.a9,A.x,D.dl5,null,null)
D.fRu=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c96=new B.q3(null,D.fRu,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zD=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7z=new C.l8(2,"elegantNavy")
D.hCC=w([A.Z8,D.jy,A.c4],x.O)
D.ka=new C.y3(0,"classic")
D.a7o=new C.jz("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7z,4294967035,4279378237,4290283019,D.ka)
D.aKa=new C.l8(3,"elegantGold")
D.beq=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bfB=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.agT=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hC4=w([D.beq,D.bfB,D.agT],x.O)
D.a7m=new C.jz("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKa,4294966515,4281016592,4289102906,D.ka)
D.dSi=new C.l8(22,"goldRibbon")
D.hC0=w([A.Z8,D.jy,A.iq],x.O)
D.a7f=new C.jz("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dSi,4294967035,4279378237,4291404327,D.ka)
D.dSj=new C.l8(23,"goldBaroque")
D.ahC=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hC6=w([D.ahC,A.aB,A.jA],x.O)
D.a7g=new C.jz("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dSj,4294964964,4283053072,4292128567,D.ka)
D.dSl=new C.l8(4,"elegantEmerald")
D.bgW=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bhW=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hCc=w([D.bgW,D.bhW,A.iq],x.O)
D.a7h=new C.jz("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dSl,4294376440,4279122734,4291404327,D.ka)
D.dSm=new C.l8(5,"elegantBurgundy")
D.bmd=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hCj=w([D.bmd,A.ag_,A.iq],x.O)
D.a7k=new C.jz("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dSm,4294965238,4283043359,4291404327,D.ka)
D.dSf=new C.l8(19,"goldFiligree")
D.N0=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hC7=w([D.N0,A.aB,A.jA],x.O)
D.a7i=new C.jz("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dSf,4294966259,4279378237,4292128567,D.ka)
D.dSg=new C.l8(20,"goldLaurel")
D.btB=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hCk=w([A.M5,A.iq,D.btB],x.O)
D.a7j=new C.jz("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dSg,4294966776,4282000405,4291404327,D.ka)
D.dSh=new C.l8(21,"goldCrest")
D.afR=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.btI=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hC9=w([D.afR,A.aB,D.btI],x.O)
D.a7n=new C.jz("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dSh,4294965484,4283053072,4292128567,D.ka)
D.dSk=new C.l8(24,"goldStar")
D.bv1=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hCd=w([D.bv1,A.aB,D.jy],x.O)
D.a7l=new C.jz("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dSk,4294966518,4279378237,4292128567,D.ka)
D.I2=w([D.a7o,D.a7m,D.a7f,D.a7g,D.a7h,D.a7k,D.a7i,D.a7j,D.a7n,D.a7l],x.h)
D.qV=new C.mP(0,"blank")
D.TF=new C.mP(1,"title")
D.n1=new C.mP(2,"titleContent")
D.ebV=new C.mP(3,"twoColumn")
D.DS=new C.mP(4,"section")
D.ebW=new C.mP(5,"comparison")
D.J8=new C.mP(6,"flashcard")
D.J9=new C.mP(7,"quiz")
D.Ja=new C.mP(8,"worksheet")
D.at0=w([D.qV,D.TF,D.n1,D.ebV,D.DS,D.ebW,D.J8,D.J9,D.Ja],B.as("O<mP>"))
D.aBP=w([Aq.Yt,A.dI],x.O)
D.kX=w([A.c4,A.bN,A.i4,A.i1,D.BM],x.O)
D.dO5=new C.j8("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aBP,D.kX)
D.btY=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmb=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d5L=w([D.btY,D.bmb],x.O)
D.dNX=new C.j8("confetti","Golden Confetti","Together we rise",D.d5L,D.kX)
D.d2F=w([A.o0,A.Y4],x.O)
D.dNY=new C.j8("crown","Crown of Glory","Built for our community",D.d2F,D.kX)
D.bik=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.blP=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.da_=w([D.bik,D.blP],x.O)
D.uY=w([A.bM,A.aQ,A.c,A.aO,A.am],x.O)
D.dNS=new C.j8("aurora","Aurora Gala","A brighter future, together",D.da_,D.uY)
D.bnv=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dld=w([G.afr,D.bnv],x.O)
D.dO8=new C.j8("champagne","Champagne Toast","Cheers to every member",D.dld,D.kX)
D.dO9=new C.j8("diamonds","Diamond Rain","Every member is a jewel",A_.aCz,D.uY)
D.bfp=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blf=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dqS=w([D.bfp,D.blf],x.O)
D.dNN=new C.j8("starburst","Golden Starburst","Thank you!",D.dqS,D.kX)
D.c9h=w([A.fj,A.yb],x.O)
D.afB=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RA=w([A.p9,A.ip,A.w7,A.o1,D.afB],x.O)
D.dOg=new C.j8("balloons","Luxury Balloons","Let's celebrate",D.c9h,D.RA)
D.d1S=w([A.Yi,A.w],x.O)
D.dO4=new C.j8("galaxy","Galaxy Spiral","The sky is not the limit",D.d1S,D.uY)
D.brM=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dhv=w([A.jU,D.brM],x.O)
D.dO_=new C.j8("redcarpet","Red Carpet","Tonight we shine",D.dhv,D.kX)
D.bpi=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnf=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dma=w([D.bpi,D.bnf],x.O)
D.dNP=new C.j8("coins","Gold Coin Rain","Every contribution counts",D.dma,D.kX)
D.dtF=w([A.dx,A.i0],x.O)
D.dNV=new C.j8("lanterns","Sky Lanterns","Lighting the way together",D.dtF,D.kX)
D.bjx=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d_I=w([A.yd,D.bjx],x.O)
D.dNR=new C.j8("hearts","Floating Hearts","Made with love",D.d_I,D.RA)
D.bg3=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bh2=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dvf=w([D.bg3,D.bh2],x.O)
D.dOf=new C.j8("petals","Rose Petals","Thank you, from our hearts",D.dvf,D.RA)
D.bsP=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.drd=w([A.ld,D.bsP],x.O)
D.dNM=new C.j8("butterflies","Golden Butterflies","New beginnings",D.drd,D.kX)
D.box=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d0M=w([D.box,A.w],x.O)
D.dO7=new C.j8("neon","Neon Night","Let's go!",D.d0M,D.uY)
D.bkT=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.doo=w([A.MA,D.bkT],x.O)
D.dOa=new C.j8("disco","Disco Ball","Party time",D.doo,D.uY)
D.bp7=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dnT=w([A.hR,D.bp7],x.O)
D.dNQ=new C.j8("sunrise","Golden Sunrise","A new day for our community",D.dnT,D.kX)
D.dnu=w([A.q7,A.dI],x.O)
D.dOb=new C.j8("pearls","Ocean Pearls","Deep roots, bright future",D.dnu,D.uY)
D.bir=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dnI=w([D.bir,A.dI],x.O)
D.dOe=new C.j8("snow","Winter Gala","Warm wishes to all",D.dnI,D.uY)
D.bez=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bfP=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.du6=w([D.bez,D.bfP],x.O)
D.dO3=new C.j8("laurel","Laurel Victory","We did it together",D.du6,D.kX)
D.bep=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.blL=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cZH=w([D.bep,D.blL],x.O)
D.dOd=new C.j8("ribbons","Silk Ribbons","Elegance in every step",D.cZH,D.kX)
D.bmW=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cKE=w([G.BL,D.bmW],x.O)
D.dO0=new C.j8("kente","Kente Pride","Proud of our roots",D.cKE,D.kX)
D.bpX=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.btc=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dbK=w([D.bpX,D.btc],x.O)
D.dNW=new C.j8("trophy","Trophy Shine","Winners together",D.dbK,D.kX)
D.dnP=w([Ar.Mk,A.w],x.O)
D.dNO=new C.j8("shooting","Shooting Stars","Make a wish",D.dnP,D.uY)
D.beI=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajv=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dup=w([D.beI,D.ajv],x.O)
D.dO1=new C.j8("bokeh","Golden Bokeh","Shine bright",D.dup,D.kX)
D.bf8=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dim=w([D.bf8,A.w],x.O)
D.dNU=new C.j8("orbits","Golden Orbits","Always moving forward",D.dim,D.kX)
D.bsQ=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.deF=w([A.agO,D.bsQ],x.O)
D.dNZ=new C.j8("flowers","Blooming Garden","Growing together",D.deF,D.RA)
D.beU=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bfG=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dt6=w([D.beU,D.bfG],x.O)
D.dNT=new C.j8("music","Music Party","Celebrate with us",D.dt6,D.uY)
D.bgH=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.btE=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d_W=w([D.bgH,D.btE],x.O)
D.dOc=new C.j8("mandala","Royal Mandala","Harmony and unity",D.d_W,D.kX)
D.deL=w([G.BL,D.ajv],x.O)
D.dO6=new C.j8("sparklers","Golden Sparklers","Light up the night",D.deL,D.kX)
D.dO2=new C.j8("city","City Lights","The whole city celebrates",D.aBP,D.kX)
D.Ib=w([D.dO5,D.dNX,D.dNY,D.dNS,D.dO8,D.dO9,D.dNN,D.dOg,D.dO4,D.dO_,D.dNP,D.dNV,D.dNR,D.dOf,D.dNM,D.dO7,D.dOa,D.dNQ,D.dOb,D.dOe,D.dO3,D.dOd,D.dO0,D.dNW,D.dNO,D.dO1,D.dNU,D.dNZ,D.dNT,D.dOc,D.dO6,D.dO2],B.as("O<j8>"))
D.eDT=new B.y("","No ring")
D.eUk=new B.y("platinum","Platinum")
D.eQn=new B.y("glow","Glow")
D.eHC=new B.y("double","Double line")
D.eGv=new B.y("framed","Gallery frame")
D.eDp=new B.y("rosegold","Rose gold")
D.eRc=new B.y("jewels","Jeweled")
D.eNN=new B.y("aurora","Aurora")
D.D8=w([D.eDT,A.Uq,D.eUk,D.eQn,M.aQX,D.eHC,A.aQV,D.eGv,D.eDp,D.eRc,D.eNN],x.L)
D.ctR=w([D.a7i,D.a7j,D.a7n,D.a7f,D.a7g,D.a7l],x.h)
D.bYE=new B.ae(G.ao8,16,null,null,null,null)
D.b9v=new B.vU(A.bk,D.bYE,null,x.U)
D.bNl=new B.a0(58027,"MaterialIcons",!1)
D.bSa=new B.ae(D.bNl,16,null,null,null,null)
D.b9t=new B.vU(A.K,D.bSa,null,x.U)
D.bNm=new B.a0(58030,"MaterialIcons",!1)
D.bWg=new B.ae(D.bNm,16,null,null,null,null)
D.b9w=new B.vU(A.dX,D.bWg,null,x.U)
D.cA9=w([D.b9v,D.b9t,D.b9w],B.as("O<vU<qi>>"))
D.cHU=w([A.BR,A.hB],x.O)
D.cHV=w([A.b9,A.bg,A.en],x.O)
D.Rp=w([A.bN,A.i1,A.i4,A.aB,A.o1],x.O)
D.cKK=w([A.c4,D.jy,D.Mc],x.O)
D.cLh=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eBc=new B.y(4278913286,4280030216)
D.eBu=new B.y(4279373061,4278518787)
D.eBB=new B.y(4279898630,4278847235)
D.db6=w([D.eBc,D.eBu,D.eBB],x.n)
D.d6x=w(["\u265b","\u269c","\u2726"],x.s)
D.dSd=new C.y5("Royal Onyx & Gold",D.db6,4292128567,4294370209,4294965479,3874020544,D.d6x)
D.eB_=new B.y(4278326799,4278598442)
D.eB1=new B.y(4278395929,4278258953)
D.eB8=new B.y(4278599728,4278327826)
D.dtw=w([D.eB_,D.eB1,D.eB8],x.n)
D.d0E=w(["\u269c","\u2756","\u2727"],x.s)
D.dSa=new C.y5("Imperial Emerald",D.dtw,4293050997,4294699968,4294180856,3872254170,D.d0E)
D.eB2=new B.y(4278455076,4278918747)
D.eB7=new B.y(4278587439,4278322714)
D.eBl=new B.y(4279051376,4278455076)
D.drA=w([D.eB2,D.eB7,D.eBl],x.n)
D.dj5=w(["\u2654","\u2726","\u2748"],x.s)
D.dS4=new C.y5("Sapphire Crown",D.drA,4291417834,4294967295,4294310143,3871986666,D.dj5)
D.eBz=new B.y(4279894534,4283041554)
D.eBL=new B.y(4281008906,4279042307)
D.eBT=new B.y(4284221976,4279894534)
D.dxE=w([D.eBz,D.eBL,D.eBT],x.n)
D.d20=w(["\u265b","\u2766","\u2726"],x.s)
D.dS6=new C.y5("Ruby Throne",D.dxE,4293378685,4294963145,4294964466,3874213833,D.d20)
D.eBt=new B.y(4279371039,4281995100)
D.eBD=new B.y(4280092723,4278714896)
D.eBQ=new B.y(4283045242,4279371039)
D.dtT=w([D.eBt,D.eBD,D.eBQ],x.n)
D.drX=w(["\u2655","\u2756","\u2727"],x.s)
D.dSb=new C.y5("Amethyst Palace",D.dtT,4293314984,4294963421,4294702591,3873229802,D.drX)
D.eB4=new B.y(4278519045,4280032287)
D.eBm=new B.y(4279111184,4278321666)
D.eBI=new B.y(4280492839,4278716426)
D.dqk=w([D.eB4,D.eBm,D.eBI],x.n)
D.dhh=w(["\u2726","\u25c6","\u2742"],x.s)
D.dS8=new C.y5("Obsidian & Platinum",D.dqk,4293256418,4294967295,4294638330,3872378836,D.dhh)
D.eBA=new B.y(4279896588,4282194463)
D.eBJ=new B.y(4280553487,4279043334)
D.eBR=new B.y(4283048488,4279896588)
D.dgK=w([D.eBA,D.eBJ,D.eBR],x.n)
D.dvJ=w(["\u2766","\u273f","\u2727"],x.s)
D.dS5=new C.y5("Rose Gold Velvet",D.dgK,4293440672,4294960345,4294964979,3874214602,D.dvJ)
D.eB5=new B.y(4278520340,4279180595)
D.eBa=new B.y(4278718495,4278322443)
D.eBx=new B.y(4279510591,4278520340)
D.cRA=w([D.eB5,D.eBa,D.eBx],x.n)
D.di_=w(["\u269c","\u2736","\u2756"],x.s)
D.dS9=new C.y5("Midnight Brass",D.cRA,4291405148,4293975208,4294439914,3872837564,D.di_)
D.eC5=new B.y(4294703086,4293780428)
D.eC1=new B.y(4294307549,4293187253)
D.eC6=new B.y(4294966517,4293977807)
D.d4m=w([D.eC5,D.eC1,D.eC6],x.n)
D.diq=w(["\u269c","\u265b","\u2726"],x.s)
D.dSc=new C.y5("Ivory Marble & Gold",D.d4m,4289760572,4286209048,4280951062,3863625518,D.diq)
D.eBg=new B.y(4278978566,4280555024)
D.eBw=new B.y(4279504137,4278518530)
D.eBN=new B.y(4281211923,4278978566)
D.d1R=w([D.eBg,D.eBw,D.eBN],x.n)
D.dsH=w(["\u2742","\u2726","\u265c"],x.s)
D.dS7=new C.y5("Onyx & Copper",D.d1R,4291856987,4294365880,4294964718,3873885630,D.dsH)
D.cLp=w([D.dSd,D.dSa,D.dS4,D.dS6,D.dSb,D.dS8,D.dS5,D.dS9,D.dSc,D.dS7],B.as("O<y5>"))
D.cNN=w([A.aB,D.BM,A.i1],x.O)
D.eJS=new B.y("Original",null)
D.eK1=new B.y("Wide 16:9",1.7777777777777777)
D.eMp=new B.y("Landscape 3:2",1.5)
D.eJi=new B.y("Photo 4:3",1.3333333333333333)
D.eYe=new B.y("Portrait 3:4",0.75)
D.az4=w([D.eJS,D.eK1,D.eMp,D.eJi,M.aQL,D.eYe],B.as("O<+(m,I?)>"))
D.az5=w([A.i1,A.c1,A.bb,A.bs],x.O)
D.eMB=new B.y("","Original")
D.eOw=new B.y("circle","Circle")
D.eV8=new B.y("rounded","Rounded")
D.eW8=new B.y("triangle","Triangle")
D.eQE=new B.y("hexagon","Hexagon")
D.eOX=new B.y("diamond","Diamond")
D.eNM=new B.y("arch","Arch")
D.Df=w([D.eMB,D.eOw,D.eV8,D.eW8,D.eQE,D.eOX,D.eNM],x.L)
D.dNb=new C.ls("classic_blue","Classic Blue","Normal",A.bm,A.c,A.kO,A.d9,A.aM)
D.dNr=new C.ls("campus_green","Campus Green","Normal",A.b2,A.nn,A.u2,A.h7,A.ed)
D.dNi=new C.ls("warm_sand","Warm Sand","Normal",A.e0,A.i4,A.bN,A.ir,A.o8)
D.dNp=new C.ls("slate_minimal","Slate Minimal","Normal",A.bu,A.aQ,A.aO,A.R,A.aM)
D.dNa=new C.ls("coral_fresh","Coral Fresh","Normal",A.cf,A.i2,A.q1,A.kq,A.tV)
D.dNq=new C.ls("lavender_calm","Lavender Calm","Normal",A.b8,A.q4,A.y6,A.oe,A.jx)
D.dNc=new C.ls("ocean_breeze","Ocean Breeze","Normal",A.fn,A.rC,A.tR,A.tX,A.o9)
D.aiG=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dNn=new C.ls("berry_pop","Berry Pop","Normal",A.fb,D.aiG,A.kK,G.ZI,A.BS)
D.dNd=new C.ls("midnight_pro","Midnight Pro","Professional",A.aE,A.R,A.dx,A.kK,A.cr)
D.dNm=new C.ls("executive_navy","Executive Navy","Professional",A.d5,A.ahS,A.d9,A.lb,A.bM)
D.dNk=new C.ls("boardroom_charcoal","Boardroom Charcoal","Professional",A.am,A.bp,A.R,A.aQ,A.cr)
D.dNe=new C.ls("corporate_steel","Corporate Steel","Professional",A.ob,A.R,A.mJ,A.fq,A.bM)
D.dNh=new C.ls("gold_luxe","Gold Luxe","Luxury",A.m2,A.dR,A.p8,A.m3,A.bN)
D.bpc=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dNl=new C.ls("rose_gold_elite","Rose Gold Elite","Luxury",A.hB,D.bpc,A.Zq,A.ip,A.o1)
D.dNo=new C.ls("platinum_night","Platinum Night","Luxury",A.cr,A.dI,A.bp,A.aQ,A.aO)
D.dNs=new C.ls("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qa,A.fc,A.qi,A.jS)
D.dN9=new C.ls("royal_purple","Royal Purple","Luxury",A.nl,A.Yy,A.jx,A.kK,A.M4)
D.dNj=new C.ls("neon_pitch","Neon Pitch","Bold",A.bb,A.dI,A.R,A.b0,A.aO)
D.dNg=new C.ls("crimson_impact","Crimson Impact","Bold",A.bC,A.jU,A.eo,A.rD,A.eQ)
D.dNf=new C.ls("sunset_gallery","Sunset Gallery","Bold",A.fx,A.tV,A.kq,A.q1,A.mH)
D.Ik=w([D.dNb,D.dNr,D.dNi,D.dNp,D.dNa,D.dNq,D.dNc,D.dNn,D.dNd,D.dNm,D.dNk,D.dNe,D.dNh,D.dNl,D.dNo,D.dNs,D.dN9,D.dNj,D.dNg,D.dNf],B.as("O<ls>"))
D.cZq=w([A.c4,D.jy],x.O)
D.dh1=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eNx=new B.y("Faces & people",D.dh1)
D.cNR=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ezP=new B.y("Ideas & work",D.cNR)
D.d72=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eQJ=new B.y("Nature",D.d72)
D.dha=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eJQ=new B.y("Places & things",D.dha)
D.daE=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eNR=new B.y("Symbols",D.daE)
D.cZw=w([D.eNx,D.ezP,D.eQJ,D.eJQ,D.eNR],B.as("O<+(m,ai<m>)>"))
D.beZ=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cZS=w([A.c4,D.agT,D.beZ],x.O)
D.b8P=new B.ac(0,A.G,A.M1,A.aL0,40)
D.b8v=new B.ac(0,A.G,A.o6,A.er,8)
D.d_4=w([D.b8P,D.b8v],x.V)
D.d_C=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azt=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a4O=w([A.i1,A.en,A.bC,A.av,A.cf],x.O)
D.d0y=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ah7=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d0J=w([A.Zh,D.ah7,A.Zh],x.O)
D.d0O=w([A.iq,D.jy,D.Mc],x.O)
D.eJC=new B.y(A.bk,D.a2n)
D.eL4=new B.y(A.K,D.a2m)
D.eEF=new B.y(A.dX,D.a2o)
D.d1M=w([D.eJC,D.eL4,D.eEF],B.as("O<+(qi,a0)>"))
D.cX=new C.Jw(0,"text")
D.lR=new C.Jw(1,"image")
D.fg=new C.Jw(2,"shape")
D.TE=new C.Jw(3,"pdf")
D.lq=new C.Jw(4,"signature")
D.a7J=new C.Jw(5,"bio")
D.d2L=w([D.cX,D.lR,D.fg,D.TE,D.lq,D.a7J],B.as("O<Jw>"))
D.d2M=w([A.bq,A.cF],B.as("O<Ip>"))
D.d3q=w(["School","Documents","Sign & present"],x.s)
D.b8U=new B.ac(0,A.G,A.ajk,A.vj,28)
D.d3P=w([D.b8U],x.V)
D.d47=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RJ=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.azV=w([A.i1,A.Gi,A.aO,A.c,A.p9,A.aB],x.O)
D.eXD=new B.y(0.1,0.08)
D.eQH=new B.y(0.3,0.05)
D.eE7=new B.y(0.55,0.1)
D.eIy=new B.y(0.8,0.06)
D.eLQ=new B.y(0.92,0.16)
D.eLj=new B.y(0.2,0.2)
D.eJ2=new B.y(0.7,0.22)
D.ePj=new B.y(0.05,0.4)
D.eMh=new B.y(0.95,0.45)
D.eEV=new B.y(0.12,0.7)
D.eHg=new B.y(0.88,0.75)
D.eHo=new B.y(0.4,0.9)
D.eCn=new B.y(0.65,0.93)
D.eIb=new B.y(0.25,0.97)
D.eJz=new B.y(0.85,0.9)
D.eFP=new B.y(0.5,0.04)
D.d5G=w([D.eXD,D.eQH,D.eE7,D.eIy,D.eLQ,D.eLj,D.eJ2,D.ePj,D.eMh,D.eEV,D.eHg,D.eHo,D.eCn,D.eIb,D.eJz,D.eFP],x.G)
D.d5P=w([A.c,A.hB,A.aJ,A.aY],x.O)
D.edx=new C.jW("office_blue","Office Blue",A.bm,A.d9,A.aM,A.c,A.kO)
D.edI=new C.jW("campus_green","Campus Green",A.b2,A.h7,A.ed,A.nn,A.u2)
D.edy=new C.jW("sunset","Sunset",A.fx,A.kq,A.o8,A.i2,A.q1)
D.edz=new C.jW("midnight","Midnight",A.aE,A.kK,A.cr,A.R,A.dx)
D.edK=new C.jW("classic","Classic",A.d2,A.dR,A.m4,A.i4,A.fY)
D.edH=new C.jW("rose_gold","Rose Gold",A.hB,A.ye,A.yd,A.w7,A.BR)
D.eds=new C.jW("ocean_teal","Ocean Teal",A.fn,A.tX,A.o9,A.rC,A.tR)
D.edr=new C.jW("slate_pro","Slate Pro",A.bu,A.R,A.aM,A.aQ,A.aO)
D.edq=new C.jW("neon_night","Neon Night",A.bb,A.b0,A.aO,A.dI,A.R)
D.edC=new C.jW("lavender","Lavender",A.b8,A.oe,A.jx,A.q4,A.y6)
D.edE=new C.jW("coral","Coral",A.cf,A.kq,A.tV,A.i2,A.mH)
D.edt=new C.jW("forest","Forest",A.hl,A.e_,A.cs,A.m5,A.et)
D.edu=new C.jW("berry","Berry",A.fb,G.ZI,A.BS,D.aiG,A.kK)
D.edB=new C.jW("sand","Sand",A.e0,A.ir,A.o8,A.i4,A.bN)
D.edG=new C.jW("ice","Ice",A.ob,A.FS,A.aM,A.ni,A.fq)
D.edw=new C.jW("charcoal","Charcoal",A.am,A.aQ,A.cr,A.bp,A.R)
D.edp=new C.jW("mint","Mint",A.aY,A.fP,A.h7,A.m5,A.qi)
D.edF=new C.jW("crimson","Crimson",A.bC,A.np,A.jU,A.Gg,A.rD)
D.bhV=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.edA=new C.jW("gold","Gold",A.m2,A.xZ,A.p8,D.bhV,A.m3)
D.edD=new C.jW("aqua","Aqua",A.bT,A.G3,A.p5,A.q5,A.pa)
D.edv=new C.jW("plum","Plum",A.nl,A.yb,A.BS,A.FT,A.ry)
D.edJ=new C.jW("steel","Steel",A.d5,A.d9,A.bp,A.kO,A.lb)
D.a52=w([D.edx,D.edI,D.edy,D.edz,D.edK,D.edH,D.eds,D.edr,D.edq,D.edC,D.edE,D.edt,D.edu,D.edB,D.edG,D.edw,D.edp,D.edF,D.edA,D.edD,D.edv,D.edJ],B.as("O<jW>"))
D.d6b=w([A.c4,A.jA],x.O)
D.TG=new C.hF(10,"rotate3d")
D.Jc=new C.hF(8,"flip")
D.aKt=new C.hF(19,"spiral")
D.qW=new C.hF(16,"bounce")
D.aKw=new C.hF(9,"flipVertical")
D.d6c=w([D.TG,D.Jc,D.aKt,D.qW,D.aKw],x.i)
D.ej=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d6A=w([0.62,1],x.x)
D.d7c=w([0,0.32,0.68,1],x.x)
D.n2=new C.hF(6,"zoom")
D.vd=new C.hF(4,"slideUp")
D.vc=new C.hF(2,"slideLeft")
D.d7m=w([D.n2,D.Jc,D.vd,D.TG,D.vc],x.i)
D.d7S=w([A.c1,A.hB,A.ip,A.i1,A.c],x.O)
D.b8K=new B.ac(0,A.G,D.ahn,A.vj,30)
D.d8E=w([D.b8K],x.V)
D.ep5=new B.q(0,-2.5)
D.eoW=new B.q(-2.5,0)
D.en7=new B.q(2.5,0)
D.d8H=w([A.TU,A.a8a,A.aLE,A.a89,D.ep5,O.aLA,D.eoW,D.en7],x.dN)
D.Iq=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d9c=w([23,114,69,56,80,144],x.t)
D.d9G=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.da8=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dbP=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dbU=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bj=new C.v7(0,"rectangle")
D.eX=new C.v7(1,"circle")
D.lr=new C.v7(6,"hexagon")
D.dc8=w([D.bj,D.eX,D.lr],x.m)
D.oI=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aiQ=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dcH=w([D.aiQ,A.e_],x.O)
D.eEo=new B.y("","Classic")
D.eCC=new B.y("caps","Bold caps")
D.ePm=new B.y("elegant","Elegant")
D.eVs=new B.y("shadow","Shadow")
D.eIW=new B.y("neon","Neon glow")
D.eT8=new B.y("marker","Highlighter")
D.eVG=new B.y("stamp","Stamp")
D.eHO=new B.y("threed","3D")
D.ePT=new B.y("fire","Fire")
D.eQT=new B.y("ice","Ice")
D.eOv=new B.y("chalk","Chalk")
D.eOA=new B.y("comic","Comic")
D.eWY=new B.y("softglow","Soft glow")
D.eRW=new B.y("lowercase","Lowercase")
D.eP4=new B.y("double","Echo")
D.eX7=new B.y("whisper","Whisper")
D.aAT=w([D.eEo,D.eCC,D.ePm,D.eVs,D.eIW,M.aQW,D.eT8,D.eVG,M.aQY,D.eHO,M.aQQ,D.ePT,D.eQT,D.eOv,D.eOA,A.Uq,Au.aQZ,D.eWY,D.eRW,D.eP4,D.eX7],x.L)
D.de1=w([3,5,7,10,12,15],x.t)
D.dfz=w([A.c1,A.bN,A.c,A.eI,A.cJ],x.O)
D.dEF=new C.tI(10,"cardWorld")
D.DL=new C.C2(3,"rounded")
D.dVd=new C.lv("world","NGMY World",D.dEF,D.DL,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dEG=new C.tI(11,"cardSplit")
D.dV9=new C.lv("business","Business Wire",D.dEG,D.DL,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dEH=new C.tI(12,"cardBreaking")
D.dVm=new C.lv("breaking","Breaking Red",D.dEH,D.DL,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dEI=new C.tI(13,"cardFeature")
D.dVf=new C.lv("feature","Tech Feature",D.dEI,D.DL,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJ6=new C.tI(6,"circle")
D.aJ0=new C.C2(4,"circle")
D.dVj=new C.lv("parchment","Royal Circle",D.aJ6,D.aJ0,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dV8=new C.lv("ocean","Blue Ocean",D.aJ6,D.aJ0,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dEL=new C.tI(7,"rail")
D.aJ_=new C.C2(1,"double")
D.dVa=new C.lv("forest","Green Leaf",D.dEL,D.aJ_,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJ3=new C.tI(1,"sideBySide")
D.dVo=new C.lv("herald","NGMY Herald",D.aJ3,D.DL,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJ2=new C.tI(0,"classic")
D.a6V=new C.C2(9,"shadow")
D.dVn=new C.lv("daily","The Daily",D.aJ2,D.a6V,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dEJ=new C.tI(2,"splash")
D.aJ1=new C.C2(6,"cutCorner")
D.dV7=new C.lv("tabloid","Big Tabloid",D.dEJ,D.aJ1,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJ7=new C.tI(9,"minimal")
D.dVi=new C.lv("modern","Modern Digest",D.aJ7,D.DL,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJ4=new C.tI(3,"magazine")
D.aIZ=new C.C2(0,"plain")
D.dVe=new C.lv("midnight","Midnight Edition",D.aJ4,D.aIZ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dEM=new C.tI(8,"banner")
D.dVg=new C.lv("metro","Metro Wire",D.dEM,D.aJ1,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dEE=new C.C2(8,"arch")
D.dVh=new C.lv("sunrise","Sunrise Post",D.aJ4,D.dEE,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJ5=new C.tI(5,"scrapbook")
D.dED=new C.C2(5,"tape")
D.dVc=new C.lv("neon","Neon Beat",D.aJ5,D.dED,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dEK=new C.tI(4,"wrap")
D.dVp=new C.lv("gold","Golden Press",D.dEK,D.a6V,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dVq=new C.lv("minimal","Paper White",D.aJ7,D.a6V,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dVb=new C.lv("gazette","Fresh Gazette",D.aJ2,D.aJ_,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dVl=new C.lv("times","Classic Times",D.aJ3,D.aIZ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tb=new C.C2(2,"polaroid")
D.dVk=new C.lv("scrapbook","Memory Scrapbook",D.aJ5,D.Tb,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5j=w([D.dVd,D.dV9,D.dVm,D.dVf,D.dVj,D.dV8,D.dVa,D.dVo,D.dVn,D.dV7,D.dVi,D.dVe,D.dVg,D.dVh,D.dVc,D.dVp,D.dVq,D.dVb,D.dVl,D.dVk],B.as("O<lv>"))
D.dfL=w([0.45,1],x.x)
D.Iu=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dgb=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hxr=new C.oQ("Original",0,1,1,0,0,0)
D.hxv=new C.oQ("Black & white",0,1.1,0,0,0,0)
D.hxi=new C.oQ("Noir",-0.05,1.55,0,0,0,0)
D.hxm=new C.oQ("Sepia",0,1,0.25,0.9,0,0)
D.hxl=new C.oQ("Vivid",0,1.15,1.6,0,0,0)
D.hxe=new C.oQ("Pop",0,1.3,1.9,0,0,0)
D.hxg=new C.oQ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hxs=new C.oQ("Matte",0,0.9,0.85,0,0,0.55)
D.hxn=new C.oQ("Cool",0,1.05,1,-0.8,0,0)
D.hxu=new C.oQ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hxf=new C.oQ("Golden hour",0.04,1,1.25,1,0,0)
D.hxk=new C.oQ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hxt=new C.oQ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hxj=new C.oQ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hxp=new C.oQ("Retro",0,0.9,0.7,0.4,0,0.35)
D.hxo=new C.oQ("Forest",0,1,1.2,-0.1,-0.45,0)
D.hxq=new C.oQ("Rose",0,1,1.1,0.3,0.4,0)
D.hxh=new C.oQ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dgc=w([D.hxr,D.hxv,D.hxi,D.hxm,D.hxl,D.hxe,D.hxg,D.hxs,D.hxn,D.hxu,D.hxf,D.hxk,D.hxt,D.hxj,D.hxp,D.hxo,D.hxq,D.hxh],B.as("O<oQ>"))
D.bek=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dge=w([D.aiQ,A.e_,D.bek],x.O)
D.ezI=new B.y(0.12,0.3)
D.eR3=new B.y(0.26,0.75)
D.ePi=new B.y(0.8,0.22)
D.eVS=new B.y(0.9,0.7)
D.eRV=new B.y(0.5,0.15)
D.eU2=new B.y(0.65,0.85)
D.eGl=new B.y(0.08,0.85)
D.dgt=w([D.ezI,D.eR3,D.ePi,D.eVS,D.eRV,D.eU2,D.eGl],x.G)
D.aB5=w([A.bb,A.c1,A.bs,A.b9],x.O)
D.dhl=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dhy=w([A.c,A.fq,A.dw,A.vX],x.O)
D.bia=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.diC=w([D.bia,D.ah7],x.O)
D.diE=w([A.u_,A.aB],x.O)
D.diT=w([0,0.25,0.75,1],x.x)
D.diV=w([A.y2,A.p9],x.O)
D.aK3=new C.l8(10,"kenteSunset")
D.hC2=w([D.ahC,A.kl,A.aB],x.O)
D.dQq=new C.jz("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aK3,4294964964,4282000405,4279983648,D.ka)
D.aK4=new C.l8(11,"indigoMudcloth")
D.bfv=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hCg=w([D.bfv,A.ah4,A.iq],x.O)
D.dQy=new C.jz("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aK4,4294439140,4279903102,4279903102,D.ka)
D.aK5=new C.l8(12,"adinkraRoyal")
D.bup=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hCh=w([D.afR,D.bup,A.aB],x.O)
D.dQA=new C.jz("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aK5,4294965484,4285218591,4287322667,D.ka)
D.aK6=new C.l8(13,"nileLotus")
D.bqi=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bmx=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hCm=w([D.bqi,D.bmx,A.iq],x.O)
D.dQz=new C.jz("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aK6,4294244340,4279196764,4279196764,D.ka)
D.aK7=new C.l8(14,"shweshweIvory")
D.bkp=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bj0=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bg2=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hC3=w([D.bkp,D.bj0,D.bg2],x.O)
D.dQv=new C.jz("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aK7,4294505710,4279970378,4291058750,D.ka)
D.tb=new C.l8(15,"certIvoryNavy")
D.hC1=w([D.N0,D.jy,A.iq],x.O)
D.aJE=new C.y3(1,"ringsNdoa")
D.dQs=new C.jz("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tb,4294966259,4279378237,4291404327,D.aJE)
D.a7q=new C.y3(2,"coupleCards")
D.dQn=new C.jz("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tb,4294966259,4279378237,4291404327,D.a7q)
D.DO=new C.l8(18,"certIvoryNavyBar")
D.afQ=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hCf=w([D.afQ,D.jy,A.iq],x.O)
D.aJF=new C.y3(3,"kuhoweshaForm")
D.dQl=new C.jz("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DO,4294966519,4279378237,4291404327,D.aJF)
D.ahl=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hCz=w([D.N0,D.ahl,A.iq],x.O)
D.a7r=new C.y3(4,"mahariPande")
D.dQo=new C.jz("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tb,4294966259,4279904068,4291404327,D.a7r)
D.aK8=new C.l8(16,"certIvoryGreen")
D.bjI=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hC5=w([A.M5,D.bjI,A.iq],x.O)
D.aJG=new C.y3(5,"familiaMti")
D.dQu=new C.jz("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aK8,4294966776,4280241466,4291404327,D.aJG)
D.a7s=new C.y3(6,"ndoaSafi")
D.dQm=new C.jz("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DO,4294966519,4279378237,4291404327,D.a7s)
D.bow=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hC8=w([D.N0,A.iq,D.bow],x.O)
D.a7t=new C.y3(7,"peteWide")
D.dQr=new C.jz("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tb,4294966259,4282001936,4291404327,D.a7t)
D.dQB=new C.y3(8,"muhuriCrest")
D.dQk=new C.jz("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tb,4294966259,4279378237,4291404327,D.dQB)
D.hCi=w([D.afQ,D.ahl,A.iq],x.O)
D.dQC=new C.y3(9,"fomuWazi")
D.dQx=new C.jz("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DO,4294966519,4279904068,4291404327,D.dQC)
D.aK9=new C.l8(17,"certIvoryRose")
D.bku=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hCl=w([D.bku,D.aik,A.iq],x.O)
D.a7p=new C.y3(10,"upendoOrnate")
D.dQt=new C.jz("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aK9,4294965493,4286200650,4291404327,D.a7p)
D.djm=w([D.dQq,D.dQy,D.dQA,D.dQz,D.dQv,D.dQs,D.dQn,D.dQl,D.dQo,D.dQu,D.dQm,D.dQr,D.dQk,D.dQx,D.dQt],x.h)
D.ek=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jd=new C.wp(0,"emojis")
D.DU=new C.wp(1,"pictures")
D.Je=new C.wp(2,"icons3d")
D.a7L=new C.wp(3,"animations")
D.TI=new C.wp(4,"videoMotion")
D.DV=new C.wp(5,"luxe")
D.a5q=w([D.Jd,D.DU,D.Je,D.a7L,D.TI,D.DV],B.as("O<wp>"))
D.eUG=new B.y(A.e9,"Looks")
D.eIr=new B.y(A.D0,"Light")
D.eIo=new B.y(A.mf,"Colour")
D.eGm=new B.y(A.wv,"Effects")
D.apa=new B.a0(63112,"MaterialIcons",!1)
D.eCS=new B.y(D.apa,"Crop")
D.djU=w([D.eUG,D.eIr,D.eIo,D.eGm,D.eCS],x.f2)
D.dkB=w([],x.D)
D.hCw=w([],x.L)
D.eGA=new B.y("Flashcard",D.J8)
D.eKu=new B.y("Quiz",D.J9)
D.eMw=new B.y("Worksheet",D.Ja)
D.eJu=new B.y("Notes",D.n1)
D.eL2=new B.y("Section",D.DS)
D.dlj=w([D.eGA,D.eKu,D.eMw,D.eJu,D.eL2],B.as("O<+(m,mP)>"))
D.dSn=new C.l8(6,"beadedPearl")
D.bnj=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hCA=w([H.Zp,D.bnj,A.iq],x.O)
D.aJC=new C.jz("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dSn,4294966774,4286209070,4291404327,D.ka)
D.dSo=new C.l8(7,"artDeco")
D.brG=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.buJ=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hCy=w([D.brG,D.buJ,A.c4],x.O)
D.aJD=new C.jz("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dSo,4294440434,4280228630,4290283019,D.ka)
D.dSp=new C.l8(8,"rosetteCorners")
D.btR=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bif=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bnd=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hCb=w([D.btR,D.bif,D.bnd],x.O)
D.aJB=new C.jz("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dSp,4294702831,4285218602,4291394365,D.ka)
D.dSq=new C.l8(9,"modernLedger")
D.hCa=w([A.c,D.jy,D.jy],x.O)
D.aJA=new C.jz("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dSq,4294967295,4279378237,4279378237,D.ka)
D.dln=w([D.aJC,D.aJD,D.aJB,D.aJA],x.h)
D.dlw=w([A.ip,A.p9],x.O)
D.cp=new C.hF(0,"none")
D.dk=new C.hF(1,"fade")
D.Jb=new C.hF(3,"slideRight")
D.aKv=new C.hF(5,"slideDown")
D.ec1=new C.hF(7,"zoomOut")
D.a7K=new C.hF(11,"cube")
D.ebX=new C.hF(12,"blur")
D.aKs=new C.hF(13,"dissolve")
D.ebY=new C.hF(14,"wipeLeft")
D.ebZ=new C.hF(15,"wipeRight")
D.TH=new C.hF(17,"push")
D.ec_=new C.hF(18,"flash")
D.aKu=new C.hF(20,"swing")
D.ec0=new C.hF(21,"curtain")
D.Si=w([D.cp,D.dk,D.vc,D.Jb,D.vd,D.aKv,D.n2,D.ec1,D.Jc,D.aKw,D.TG,D.a7K,D.ebX,D.aKs,D.ebY,D.ebZ,D.qW,D.TH,D.ec_,D.aKt,D.aKu,D.ec0],x.i)
D.Sj=w([D.a7o,D.a7m,D.a7f,D.a7g,D.a7h,D.a7k,D.a7i,D.a7j,D.a7n,D.a7l,D.aJC,D.aJD,D.aJB,D.aJA],x.h)
D.dlZ=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dm2=w([A.u3,A.i1,A.c4],x.O)
D.eHI=new B.y(A.uG,"Design")
D.eWh=new B.y(D.apr,"Word sizes")
D.eRE=new B.y(A.CX,"Text")
D.bQG=new B.a0(983182,"MaterialIcons",!1)
D.eRJ=new B.y(D.bQG,"Photo")
D.eCq=new B.y(A.lk,"Logo")
D.eXB=new B.y(A.HQ,"News")
D.dm8=w([D.eHI,D.eWh,D.eRE,D.eRJ,D.eCq,D.eXB],x.f2)
D.dm9=w(["golddust","sparkle","sheen"],x.s)
D.edo=new C.ev("upload_pdf",K.Pw,"Upload PDF")
D.ecy=new C.ev("sign_paper",A.HN,"Sign Paper")
D.bPW=new B.a0(63438,"MaterialIcons",!1)
D.edk=new C.ev("hd_photo",D.bPW,"HD Photo")
D.ecq=new C.ev("sharpen",E.a25,"Sharpen")
D.ecA=new C.ev("print",K.Pw,"Download PDF")
D.ed1=new C.ev("rotate",D.apa,"Rotate")
D.ecJ=new C.ev("text_box",A.CX,"Text Box")
D.ecL=new C.ev("picture",A.uK,"Picture")
D.ecH=new C.ev("title",A.wJ,"Title")
D.ecD=new C.ev("subtitle",U.aq0,"Subtitle")
D.eda=new C.ev("bullets",I.a2p,"Bullet List")
D.ecE=new C.ev("numbered",A.Pi,"Numbered")
D.edd=new C.ev("quote",A4.CK,"Quote")
D.ecQ=new C.ev("citation",A.ot,"Citation")
D.edg=new C.ev("date_stamp",Aj.a2a,"Date Stamp")
D.ed3=new C.ev("page_number",A.zk,"Page #")
D.ed7=new C.ev("header_bar",A.zm,"Header")
D.ecK=new C.ev("footer_bar",Av.a2X,"Footer")
D.ecz=new C.ev("divider",A.rU,"Divider")
D.ecv=new C.ev("highlight",A.a2s,"Highlight")
D.ed9=new C.ev("redact",A.uT,"Redact")
D.ecX=new C.ev("callout",A.CB,"Callout")
D.edi=new C.ev("checkboxes",I.aos,"Checklist")
D.ecU=new C.ev("table",A.a2V,"Table")
D.ecO=new C.ev("memo",I.a2F,"Memo")
D.ecY=new C.ev("letter",A.HC,"Letter")
D.bPz=new B.a0(63259,"MaterialIcons",!0)
D.ecp=new C.ev("agenda",D.bPz,"Agenda")
D.ecB=new C.ev("toc",AD.apE,"Contents")
D.bPS=new B.a0(63406,"MaterialIcons",!1)
D.ecV=new C.ev("sig_line",D.bPS,"Sign Line")
D.eci=new C.ev("initial_line",A.j2,"Initials")
D.ecl=new C.ev("approved",A.lk,"APPROVED")
D.ed_=new C.ev("draft",A.pt,"DRAFT")
D.ed5=new C.ev("confidential",A.jG,"Confidential")
D.ed8=new C.ev("sticky",A.PD,"Sticky Note")
D.edh=new C.ev("progress",A.apD,"Progress")
D.bR6=new B.a0(983507,"MaterialIcons",!1)
D.ecw=new C.ev("stars",D.bR6,"Star Rating")
D.ecg=new C.ev("equation",A.apt,"Equation")
D.ecr=new C.ev("timeline",A.a2W,"Timeline")
D.ecP=new C.ev("two_col",A.a2Y,"Two Columns")
D.ect=new C.ev("compare",Az.a2e,"Compare")
D.ece=new C.ev("duplicate_el",A.fU,"Duplicate")
D.edm=new C.ev("delete_el",A.ef,"Delete")
D.edc=new C.ev("bring_fwd",H.apn,"Bring Front")
D.ecj=new C.ev("send_back",H.apm,"Send Back")
D.ecZ=new C.ev("align_left",D.a2n,"Align L")
D.ed4=new C.ev("align_center",D.a2m,"Align C")
D.edl=new C.ev("align_right",D.a2o,"Align R")
D.ecI=new C.ev("word_count",A3.a1N,"Word Count")
D.ecF=new C.ev("link_text",A.hI,"Link")
D.ed2=new C.ev("phone",A.j3,"Phone")
D.ecu=new C.ev("email",A.CG,"Email")
D.edn=new C.ev("qr_placeholder",A.jI,"QR Placeholder")
D.eco=new C.ev("rectangle",A5.rS,"Rectangle")
D.ecT=new C.ev("circle",A.pj,"Circle")
D.eck=new C.ev("arrow",A.jF,"Arrow")
D.edb=new C.ev("line",A.rU,"Line")
D.ecx=new C.ev("triangle",A.a2c,"Triangle")
D.bPG=new B.a0(63318,"MaterialIcons",!1)
D.ecC=new C.ev("grayscale",D.bPG,"Grayscale")
D.ecM=new C.ev("brighten",I.aoN,"Brighten")
D.ecR=new C.ev("flip_h",A.CJ,"Flip H")
D.bPN=new B.a0(63348,"MaterialIcons",!1)
D.edj=new C.ev("flip_v",D.bPN,"Flip V")
D.ed6=new C.ev("cover_page",A.qC,"Cover Page")
D.ech=new C.ev("invoice",A.ht,"Invoice")
D.ecs=new C.ev("resume",A.mT,"Resume")
D.ecG=new C.ev("minutes",A.pm,"Minutes")
D.ecm=new C.ev("lab_report",A.Pz,"Lab Report")
D.ecn=new C.ev("rubric",A.qF,"Rubric")
D.ecS=new C.ev("flashcard_tool",W.HK,"Flashcard")
D.ede=new C.ev("quiz_tool",A.HH,"Quiz Block")
D.ecW=new C.ev("worksheet_tool",P.Hj,"Worksheet")
D.ed0=new C.ev("outline_share",A.PB,"Share Outline")
D.edf=new C.ev("export_json",D.aoy,"Export JSON")
D.ecf=new C.ev("new_slide",D.a1M,"New Slide")
D.ecN=new C.ev("present",A.qI,"Present")
D.dmF=w([D.edo,D.ecy,D.edk,D.ecq,D.ecA,D.ed1,D.ecJ,D.ecL,D.ecH,D.ecD,D.eda,D.ecE,D.edd,D.ecQ,D.edg,D.ed3,D.ed7,D.ecK,D.ecz,D.ecv,D.ed9,D.ecX,D.edi,D.ecU,D.ecO,D.ecY,D.ecp,D.ecB,D.ecV,D.eci,D.ecl,D.ed_,D.ed5,D.ed8,D.edh,D.ecw,D.ecg,D.ecr,D.ecP,D.ect,D.ece,D.edm,D.edc,D.ecj,D.ecZ,D.ed4,D.edl,D.ecI,D.ecF,D.ed2,D.ecu,D.edn,D.eco,D.ecT,D.eck,D.edb,D.ecx,D.ecC,D.ecM,D.ecR,D.edj,D.ed6,D.ech,D.ecs,D.ecG,D.ecm,D.ecn,D.ecS,D.ede,D.ecW,D.ed0,D.edf,D.ecf,D.ecN],B.as("O<ev>"))
D.dmP=w([A.cr,A.am],x.O)
D.eBX=new B.y(4286331629,4292552567)
D.eBK=new B.y(4280640491,4278630100)
D.eC4=new B.y(4294538006,4292943176)
D.eB6=new B.y(4278556265,4280640491)
D.dgF=w([D.eBX,D.eBK,D.eC4,D.eB6],x.n)
D.cDW=w([4294626325,4280472558,4294210230],x.t)
D.ec9=new C.o3("colorful","Colorful",A.mf,D.dgF,4294967295,3875536895,D.cDW,D.n2)
D.eBy=new B.y(4279522093,4279657780)
D.eBO=new B.y(4281750292,4283268111)
D.eB9=new B.y(4278603323,4279203438)
D.eBP=new B.y(4282343954,4279599165)
D.cP4=w([D.eBy,D.eBO,D.eB9,D.eBP],x.n)
D.cDE=w([4288931381,4294829706,4287033260],x.t)
D.ec5=new C.o3("nature","Nature",A.HO,D.cP4,4294442727,3874290891,D.cDE,D.dk)
D.eBs=new B.y(4279369771,4283178389)
D.eBp=new B.y(4279179050,4286456526)
D.eBG=new B.y(4280163147,4290648157)
D.eAZ=new B.y(4278322711,4285343961)
D.d6r=w([D.eBs,D.eBp,D.eBG,D.eAZ],x.n)
D.cDS=w([4294210230,4280472558,4289170426],x.t)
D.ec3=new C.o3("vibe","Vibe",A.Pm,D.d6r,4294967295,3874869502,D.cDS,D.vc)
D.eC0=new B.y(4290007817,4292552567)
D.eBV=new B.y(4286328082,4294286859)
D.eC_=new B.y(4288485197,4294538006)
D.eBU=new B.y(4285343961,4293675161)
D.c9K=w([D.eC0,D.eBV,D.eC_,D.eBU],x.n)
D.cDX=w([4294829706,4294967295,4284999929],x.t)
D.ec4=new C.o3("celebration","Celebration",A.ku,D.c9K,4294967295,4009752557,D.cDX,D.qW)
D.eBn=new B.y(4279179050,4280171146)
D.eBr=new B.y(4279310375,4280232247)
D.eBf=new B.y(4278916151,4280172719)
D.eBo=new B.y(4279179050,4281549141)
D.cZL=w([D.eBn,D.eBr,D.eBf,D.eBo],x.n)
D.cDz=w([4281908728,4294626325,4287931320],x.t)
D.ec8=new C.o3("professional","Professional",A.Cz,D.cZL,4294967295,3872118241,D.cDz,D.TH)
D.eBj=new B.y(4278995566,4278413729)
D.eBb=new B.y(4278727492,4279137424)
D.eBH=new B.y(4280171146,4278751666)
D.eBk=new B.y(4278995566,4279590517)
D.cHM=w([D.eBj,D.eBb,D.eBH,D.eBk],x.n)
D.cDC=w([4286436348,4284410580,4294829706],x.t)
D.eca=new C.o3("ocean","Ocean",I.a3_,D.cHM,4294967295,3873501950,D.cDC,D.vd)
D.eBW=new B.y(4286328082,4294538006)
D.eBY=new B.y(4286781507,4294677052)
D.eBS=new B.y(4283178389,4294197086)
D.eBZ=new B.y(4288295954,4294688548)
D.cVY=w([D.eBW,D.eBY,D.eBS,D.eBZ],x.n)
D.cDY=w([4294829706,4294967295,4294747557],x.t)
D.ecb=new C.o3("sunset","Sunset",A.PG,D.cVY,4294967295,4009749973,D.cDY,D.dk)
D.eC8=new B.y(4294967295,4294047225)
D.eC3=new B.y(4294507260,4294967295)
D.eC7=new B.y(4294967295,4293060848)
D.eC2=new B.y(4294507260,4294047225)
D.d9M=w([D.eC8,D.eC3,D.eC7,D.eC2],x.n)
D.cDx=w([4280640491,4279179050,4287931320],x.t)
D.ec7=new C.o3("minimal","Minimal",A5.rS,D.d9M,4279179050,4282865001,D.cDx,D.dk)
D.eBi=new B.y(4278979081,4280886564)
D.eBC=new B.y(4280031511,4278979081)
D.eBq=new B.y(4279308561,4281148438)
D.eBh=new B.y(4278979081,4280031511)
D.doS=w([D.eBi,D.eBC,D.eBq,D.eBh],x.n)
D.cDL=w([4292128567,4294829706,4289241758],x.t)
D.ecc=new C.o3("elegant","Elegant",A.mg,D.doS,4294898631,3873957348,D.cDL,D.aKs)
D.eBE=new B.y(4280159034,4282058596)
D.eBe=new B.y(4278916151,4280163147)
D.eBM=new B.y(4281208933,4278916151)
D.eBv=new B.y(4279502891,4283178389)
D.dwo=w([D.eBE,D.eBe,D.eBM,D.eBv],x.n)
D.cDU=w([4294296657,4292128567,4291081725],x.t)
D.ec6=new C.o3("royal","Royal Gold",A.jo,D.dwo,4294965222,3874084351,D.cDU,D.n2)
D.eB3=new B.y(4278464302,4280163147)
D.eBd=new B.y(4278916151,4279455306)
D.eBF=new B.y(4280163147,4283040846)
D.eB0=new B.y(4278332450,4281413249)
D.dgh=w([D.eB3,D.eBd,D.eBF,D.eB0],x.n)
D.cDy=w([4281193663,4289170426,4294210230],x.t)
D.ecd=new C.o3("aurora","Aurora Glow",A.e9,D.dgh,4293983738,3869766608,D.cDy,D.dk)
D.wT=w([D.ec9,D.ec5,D.ec3,D.ec4,D.ec8,D.eca,D.ecb,D.ec7,D.ecc,D.ec6,D.ecd],B.as("O<o3>"))
D.bnU=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dnp=w([A.rs,D.bnU,A.rs],x.O)
D.dnG=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dnK=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eRw=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eHi=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eM4=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eyt=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eKG=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eIO=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eNm=new B.y("Surprise me","")
D.doj=w([D.eRw,D.eHi,D.eM4,D.eyt,D.eKG,D.eIO,D.eNm],x.L)
D.bg4=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsf=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dp7=w([A.c,D.bg4,D.bsf],x.O)
D.drq=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aK1=new C.l8(0,"heritageGold")
D.bmh=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hCB=w([D.bmh,Aa.ahx,A.aB],x.O)
D.dQw=new C.jz("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aK1,4294570461,4284234270,4292128567,D.ka)
D.aK2=new C.l8(1,"heritageCrimson")
D.beg=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bkr=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bs1=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hCe=w([D.beg,D.bkr,D.bs1],x.O)
D.dQp=new C.jz("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aK2,4294635750,4285213214,4292912216,D.ka)
D.drv=w([D.a7o,D.a7m,D.dQw,D.dQp,D.a7h,D.a7k],x.h)
D.dWt=new C.rS(1,"circuit")
D.dWW=new C.ml("neural","Neural Link","Robotic",D.dWt,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dWs=new C.rS(0,"grid")
D.dWT=new C.ml("signal","Signal Grid","Robotic",D.dWs,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dWy=new C.rS(2,"hexes")
D.dWE=new C.ml("core","Core Protocol","Robotic",D.dWy,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKp=new C.rS(11,"diagonal")
D.dWP=new C.ml("steel","Steel Tech","Robotic",D.aKp,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKq=new C.rS(3,"rings")
D.dWD=new C.ml("vault","Vault Gold","Robotic",D.aKq,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dWw=new C.rS(13,"leaves")
D.dWG=new C.ml("forest","Forest Morning","Nature",D.dWw,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKr=new C.rS(5,"waves")
D.dWN=new C.ml("ocean","Ocean Calm","Nature",D.aKr,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dWz=new C.rS(6,"sunset")
D.dWS=new C.ml("sunset","Sunset Glow","Nature",D.dWz,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dWA=new C.rS(7,"mountains")
D.dWF=new C.ml("mountain","Mountain Air","Nature",D.dWA,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dWB=new C.rS(8,"stars")
D.dWM=new C.ml("night","Night Sky","Nature",D.dWB,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7I=new C.rS(4,"orbs")
D.dWK=new C.ml("aurora","Aurora","Nature",D.a7I,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dWU=new C.ml("sand","Sand Dune","Nature",D.aKr,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dWC=new C.rS(9,"rays")
D.dWJ=new C.ml("golden","Golden Hour","Warm",D.dWC,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dWH=new C.ml("royal","Royal Purple","Warm",D.aKp,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dWI=new C.ml("rose","Rose Petal","Warm",D.a7I,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dWv=new C.rS(12,"blocks")
D.dWL=new C.ml("electric","Electric Blue","Bold",D.dWv,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dWV=new C.ml("mint","Fresh Mint","Bold",D.a7I,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dWx=new C.rS(14,"minimal")
D.dWR=new C.ml("white","Clean White","Clean",D.dWx,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dWu=new C.rS(10,"frame")
D.dWO=new C.ml("midnight","Midnight Gold","Clean",D.dWu,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dWQ=new C.ml("community","Community Green","Clean",D.aKq,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5V=w([D.dWW,D.dWT,D.dWE,D.dWP,D.dWD,D.dWG,D.dWN,D.dWS,D.dWF,D.dWM,D.dWK,D.dWU,D.dWJ,D.dWH,D.dWI,D.dWL,D.dWV,D.dWR,D.dWO,D.dWQ],B.as("O<ml>"))
D.drS=w([D.BM,A.u_,A.i1,A.c4],x.O)
D.ds9=w([D.aiy,D.jy],x.O)
D.dsj=w(["pdf","docx","txt","md"],x.s)
D.f0N=new B.b5(-3,150,34)
D.f0O=new B.b5(-3,214,62)
D.f0P=new B.b5(-3,288,62)
D.dtb=w([D.f0N,D.f0O,D.f0P],B.as("O<+(I,I,I)>"))
D.dtH=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dun=w(["Write","Design","Print & fold"],x.s)
D.kb=new C.v7(2,"triangle")
D.DT=new C.v7(3,"arrow")
D.fH=new C.v7(4,"line")
D.kc=new C.v7(5,"parallelogram")
D.duq=w([D.bj,D.eX,D.kb,D.DT,D.fH,D.kc,D.lr],x.m)
D.ezY=new B.y(240,96)
D.eCK=new B.y(560,46)
D.dux=w([D.ezY,D.eCK],x.G)
D.hCM=new C.y6(0,"classic")
D.dSt=new C.o_("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aK1,4294570461,4282000405,4284234270)
D.dSF=new C.o_("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aK2,4294635750,4281999378,4285213214)
D.dSu=new C.o_("elegant_navy","Umoja Mzuri",y.s,D.a7z,4294967035,4279378237,4290283019)
D.dSH=new C.o_("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKa,4294966515,4281016592,4289102906)
D.dSJ=new C.o_("kente_sunset","Kente ya Jua",y.H,D.aK3,4294964964,4282000405,4279983648)
D.dSr=new C.o_("indigo_mudcloth","Nguo ya Indigo",y.n,D.aK4,4294439140,4279903102,4279903102)
D.dSw=new C.o_("adinkra_royal","Muhuri wa Adinkra",y.z,D.aK5,4294965484,4285218591,4287322667)
D.dSB=new C.o_("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aK6,4294244340,4279196764,4279196764)
D.dSD=new C.o_("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aK7,4294505710,4279970378,4291058750)
D.hCN=new C.y6(1,"ringsNdoa")
D.dSv=new C.o_("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tb,4294966259,4279378237,4291404327)
D.hCP=new C.y6(2,"coupleCards")
D.dSG=new C.o_("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tb,4294966259,4279378237,4291404327)
D.hCQ=new C.y6(3,"kuhoweshaForm")
D.dSC=new C.o_("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DO,4294966519,4279378237,4291404327)
D.hCR=new C.y6(4,"mahariPande")
D.dSs=new C.o_("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tb,4294966259,4279904068,4291404327)
D.hCS=new C.y6(5,"familiaMti")
D.dSI=new C.o_("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aK8,4294966776,4280241466,4291404327)
D.hCT=new C.y6(6,"ndoaSafi")
D.dSz=new C.o_("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DO,4294966519,4279378237,4291404327)
D.hCU=new C.y6(7,"peteWide")
D.dSy=new C.o_("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tb,4294966259,4282001936,4291404327)
D.hCV=new C.y6(8,"muhuriCrest")
D.dSx=new C.o_("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tb,4294966259,4279378237,4291404327)
D.hCW=new C.y6(9,"fomuWazi")
D.dSA=new C.o_("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DO,4294966519,4279904068,4291404327)
D.hCO=new C.y6(10,"upendoOrnate")
D.dSE=new C.o_("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aK9,4294965493,4286200650,4291404327)
D.Sz=w([D.dSt,D.dSF,D.dSu,D.dSH,D.dSJ,D.dSr,D.dSw,D.dSB,D.dSD,D.dSv,D.dSG,D.dSC,D.dSs,D.dSI,D.dSz,D.dSy,D.dSx,D.dSA,D.dSE],B.as("O<o_>"))
D.DR=new C.ast(0,"landscape169")
D.oK=new C.ast(1,"portrait916")
D.dvj=w([D.DR,D.oK],B.as("O<ast>"))
D.aCQ=w([A.i1,A.bN,A.cJ,A.ip,A.c],x.O)
D.v4=w([A.c4,A.ir],x.O)
D.eyY=new B.y(1000,"M")
D.eEd=new B.y(900,"CM")
D.eCE=new B.y(500,"D")
D.eAU=new B.y(400,"CD")
D.eyZ=new B.y(100,"C")
D.eEe=new B.y(90,"XC")
D.eCF=new B.y(50,"L")
D.eAV=new B.y(40,"XL")
D.ez4=new B.y(10,"X")
D.eEq=new B.y(9,"IX")
D.eCW=new B.y(5,"V")
D.eCp=new B.y(4,"IV")
D.ezB=new B.y(1,"I")
D.dw3=w([D.eyY,D.eEd,D.eCE,D.eAU,D.eyZ,D.eEe,D.eCF,D.eAV,D.ez4,D.eEq,D.eCW,D.eCp,D.ezB],x.ek)
D.f23=new B.cu(["open",A.j2,"Open & write","Keep writing this book"])
D.f2u=new B.cu(["print",A.uO,"Print as a book","Fold and staple it"])
D.dwe=w([D.f23,D.f2u],B.as("O<+(m,a0,m,m)>"))
D.dwy=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dwY=w([D.a7K,D.n2,D.Jc,D.TH,D.dk,D.TG],x.i)
D.eSg=new B.y(-1,"Small")
D.eyJ=new B.y(0,"Normal")
D.ezy=new B.y(1,"Big")
D.eAe=new B.y(2,"Huge")
D.dxx=w([D.eSg,D.eyJ,D.ezy,D.eAe],x.ek)
D.dxY=w([49,65,89,38,83,89],x.t)
D.dy3=w([A.u_,A.i1,A.c4],x.O)
D.dyx=w([D.dk,D.n2,D.vc,D.a7K,D.Jc,D.TH],x.i)
D.aI8=new B.d3([0,D.Nn,8,D.ak7,12,D.ak8],B.as("d3<F,a4C>"))
D.eia={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.brS=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cZW=w([A.bN,D.brS],x.O)
D.dl3=w([A.b0,A.bm],x.O)
D.dfl=w([A.c1,A.aJ,A.br],x.O)
D.dwf=w([A.cr,A.bu],x.O)
D.d7q=w([A.bb,A.fb],x.O)
D.dic=w([A.b8,A.fj],x.O)
D.bk4=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dht=w([D.bk4,A.p9],x.O)
D.dby=w([A.hi,A.y8],x.O)
D.d7d=w([A.bw,A.ch],x.O)
D.dBb=new B.bv(D.eia,[D.cZW,O.asY,D.dl3,D.dfl,D.dwf,D.d7q,D.dic,D.dht,D.dby,D.d7d],B.as("bv<m,ai<u>>"))
D.ehm={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6z=new B.bv(D.ehm,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bv<m,m>"))
D.a6G=new B.bv(A.hX,[],B.as("bv<F,+icon3d,picture(m?,m?)>"))
D.dFo=new F.NF(30,null)
D.dKD=new F.mL("Chapter 1","","","")
D.dv5=w([D.dKD],x.B)
D.dKH=new F.rI("My Book","","",D.dv5,E.aJs)
D.dKF=new F.uY("starry",null,null,null,null,"","","")
D.dKI=new F.rI("Dream Big","","",E.a5y,D.dKF)
D.dKG=new F.uY("story",null,null,null,null,"","","")
D.dKJ=new F.rI("Little Lion","","",E.a5y,D.dKG)
D.dKE=new F.uY("vintage",null,null,null,null,"","","")
D.dKK=new F.rI("Our Story","","",E.a5y,D.dKE)
D.dNL=new C.Fb("","NGMY","","")
D.dV6=new C.A3("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ec2=new C.b30(null,null,null,null)
D.edL=new C.asy(null)
D.edW=new C.at1(0,"smaller")
D.edX=new C.at1(1,"bigger")
D.aKG=new C.at1(2,"fit")
D.elM=new B.q(3,6)
D.em5=new B.q(4,8)
D.eqi=new B.D(E.al_,U.af7,null)
D.eqm=new B.D(A.a_J,A.m0,null)
D.bSr=new B.ae(A.k5,16,A.bV,null,null,null)
D.eqq=new B.D(A.iK,D.bSr,null)
D.bdF=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.eqC=new B.D(A.GU,D.bdF,null)
D.c1Y=new B.ae(A.cz,16,A.aD,null,null,null)
D.eqG=new B.D(A.ey,D.c1Y,null)
D.fKZ=new B.B("Play",null,A.nT,null,null,null,null,null,null,null,null,null)
D.dlk=w([V.arr,A.tq,D.fKZ],x.p)
D.f78=new B.c6(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.dlk,null)
D.eqJ=new B.D(A.nz,D.f78,null)
D.bdO=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.fdA=new B.a5(20,20,D.bdO,null)
D.eqQ=new B.D(A.iK,D.fdA,null)
D.fUm=new B.B("Seconds per slide",null,A.fW,null,null,null,null,null,null,null,null,null)
D.er_=new B.D(A.bh,D.fUm,null)
D.esk=new C.a9v(2,"print")
D.esn=new B.iY(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eu_=new B.he("/Annot")
D.eu1=new B.he("/URI")
D.fF1=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eww=new B.jB("share",48,D.fF1,null,B.as("jB<m>"))
D.c1R=new B.ae(A.e9,14,A.eI,null,null,null)
D.ewF=new B.cL(null,-2,-2,null,null,null,D.c1R,null)
D.d1b=w([H.ai5,A.L],x.O)
D.c8u=new B.a9(A.a6,A.a9,A.x,D.d1b,null,null)
D.b6f=new B.o(null,null,null,null,null,D.c8u,A.n)
D.bxd=new B.l3(D.b6f,A.bi,null,null)
D.ewR=new B.cL(0,0,null,0,8,null,D.bxd,null)
D.dql=w([A.i4,A.mH,A.cf],x.O)
D.exv=new B.c_(A.A,0.5,A.x,null,0,D.dql,null,null)
D.eA6=new B.y(0.22,A.bm)
D.eEK=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eGX=new B.y(0.5,A.hB)
D.eQC=new B.y(0.78,A.aY)
D.f1T=new B.cu([A.bs,0.22,0.7,2.6])
D.f2_=new B.cu([A.bb,0.36,1.2,1.3])
D.f25=new B.cu([A.dJ,0.28,0.2,0.4])
D.f2b=new B.cu([A.cy,0.05,0.3,0.35])
D.f2h=new B.cu([A.bw,0.28,0.9,0])
D.f2p=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f3g=new B.cu([A.c1,0.42,1,4.1])
D.f6R=new B.aau(9)
D.bTy=new B.ae(A.HQ,28,A.br,null,null,null)
D.fUV=new B.B("NGMY News",null,A.dg,null,null,null,null,null,null,null,null,null)
D.bHz=new B.by(1,A.bc,D.fUV,null)
D.dtK=w([D.bTy,A.at,D.bHz],x.p)
D.f72=new B.c6(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dtK,null)
D.bTJ=new B.ae(A.ot,16,A.c,null,null,null)
D.fWv=new B.B("Book",null,A.oT,null,null,null,null,null,null,null,null,null)
D.dy2=w([D.bTJ,A.e1,D.fWv],x.p)
D.f7b=new B.c6(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.dy2,null)
D.c_r=new B.ae(A.jG,10,A.c,null,null,null)
D.fIZ=new B.B("Pro",null,A.nP,null,null,null,null,null,null,null,null,null)
D.dlp=w([D.c_r,A.r2,D.fIZ],x.p)
D.f7f=new B.c6(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.dlp,null)
D.fUk=new B.B("Make a newspaper",null,A.VF,null,null,null,null,null,null,null,null,null)
D.c9I=w([E.a3m,A.ae,D.fUk],x.p)
D.f7g=new B.c6(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.c9I,null)
D.bYU=new B.ae(A.ku,18,A.bN,null,null,null)
D.fLc=new B.B("Ending celebration",null,A.hz,null,null,null,null,null,null,null,null,null)
D.dsK=w([D.bYU,A.bn,D.fLc],x.p)
D.f7j=new B.c6(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dsK,null)
D.c_d=new B.ae(A.j2,18,A.kq,null,null,null)
D.foA=new B.G(!0,A.kq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWO=new B.B("Write",null,D.foA,null,null,null,null,null,null,null,null,null)
D.d9A=w([D.c_d,A.ae,D.fWO],x.p)
D.f7q=new B.c6(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.d9A,null)
D.fIX=new B.B("Download picture",null,A.nQ,null,null,null,null,null,null,null,null,null)
D.bKk=new B.qF(A.e5,A.A,A.f,D.fIX,null)
D.bKv=new B.dp(1,A.co,D.bKk,null)
D.dlO=w([K.ari,A.ae,D.bKv],x.p)
D.f7r=new B.c6(A.aL,A.ba,A.i,A.m,null,A.p,null,0,D.dlO,null)
D.bVv=new B.ae(A.HQ,22,A.br,null,null,null)
D.fST=new B.B("NGMY NEWS",null,M.aaw,null,null,null,null,null,null,null,null,null)
D.d0B=w([D.bVv,A.ae,D.fST],x.p)
D.f7B=new B.c6(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.d0B,null)
D.f7N=new B.px(!1,!1,null,U.XH,null,A.c3,null,null,null)
D.a9C=new B.iK([D.cp,D.dk,D.vc,D.Jb,D.vd,D.aKv],B.as("iK<hF>"))
D.ejY={title:0,quote:1,closing:2,bio:3}
D.f9h=new B.df(D.ejY,4,x.M)
D.ehH={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f9k=new B.df(D.ehH,5,x.M)
D.ejd={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9E=new B.df(D.ejd,8,x.M)
D.ein={Design:0,Transitions:1,Insert:2}
D.f9s=new B.df(D.ein,3,x.M)
D.hD4=new B.iK([D.a7L],B.as("iK<wp>"))
D.eiw={float3d:0,drift:1,pulse:2}
D.f9w=new B.df(D.eiw,3,x.M)
D.aSj=new B.iK([D.J8,D.J9,D.Ja],B.as("iK<mP>"))
D.ehF={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSm=new B.df(D.ehF,14,x.M)
D.hD5=new B.df(A.hX,0,B.as("df<wp>"))
D.eit={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UH=new B.df(D.eit,4,x.M)
D.ehy={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSp=new B.df(D.ehy,30,x.M)
D.eiC={circle:0,triangle:1,hexagon:2,diamond:3}
D.fa_=new B.df(D.eiC,4,x.M)
D.fct=new B.av(390,844)
D.fdj=new B.a5(20,20,A.LZ,null)
D.aTc=new B.a5(null,2.5,null,null)
D.fdt=new B.a5(18,18,A.LZ,null)
D.c_h=new B.ae(A.jo,19,A.c,null,null,null)
D.fdF=new B.a5(38,38,D.c_h,null)
D.bYs=new B.ae(A.zp,22,A.c,null,null,null)
D.fdH=new B.a5(40,40,D.bYs,null)
D.feg=new B.hG(2,10,10,1.15,null)
D.aTj=new B.hG(2,16,14,0.62,null)
D.bFn=new B.Q(32,30,32,40)
D.bfk=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bTv=new B.ae(A.qC,56,D.bfk,null,null,null)
D.aj9=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fqI=new B.G(!0,D.aj9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPM=new B.B("Your books will live here.",null,D.fqI,null,A.K,null,null,null,null,null,null,null)
D.dcx=w([D.bTv,A.X,D.fPM],x.p)
D.bw8=new B.fj(A.ai,A.e,A.i,A.m,null,A.p,null,0,D.dcx,null)
D.eqY=new B.D(D.bFn,D.bw8,null)
D.feC=new B.mq(D.eqY,null)
D.fPJ=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.feU=new B.b1(D.fPJ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fNP=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.feV=new B.b1(D.fNP,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fSX=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ff3=new B.b1(D.fSX,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTv=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ffi=new B.b1(D.fTv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fMq=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new B.b1(D.fMq,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_Q=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffO=new B.b1(D.h_Q,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXQ=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ffZ=new B.b1(D.fXQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTE=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new B.b1(D.fTE,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fH7=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fgZ=new B.b1(D.fH7,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qo,!1,null,null,null,A.t,null)
D.fJ6=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fhg=new B.b1(D.fJ6,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPo=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhi=new B.b1(D.fPo,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fP4=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhj=new B.b1(D.fP4,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVM=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fhk=new B.b1(D.fVM,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDa=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fht=new B.b1(D.fDa,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fKh=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fhQ=new B.b1(D.fKh,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZu=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new B.b1(D.fZu,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZ0=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fhW=new B.b1(D.fZ0,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fC4=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new B.b1(D.fC4,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUQ=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fi6=new B.b1(D.fUQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYA=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fil=new B.b1(D.fYA,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYr=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fin=new B.b1(D.fYr,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fBW=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fit=new B.b1(D.fBW,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fG4=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiV=new B.b1(D.fG4,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXD=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fj6=new B.b1(D.fXD,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fFR=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new B.b1(D.fFR,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bny=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_b=w([A.ip,A.p9,D.bny,D.afB,A.ip],x.O)
D.fjJ=new B.fY(A.A,0,6.283185307179586,A.x,D.d_b,null,null)
D.d8I=w([A.bN,A.c4,A.i1,D.BM,A.bN],x.O)
D.aTS=new B.fY(A.A,0,6.283185307179586,A.x,D.d8I,null,null)
D.dnE=w([A.c1,A.bs,A.bb,A.b9,A.br,A.c1],x.O)
D.fjO=new B.fY(A.A,0,6.283185307179586,A.x,D.dnE,null,null)
D.d1q=w([A.qi,A.pa,A.y6,A.ip,A.qi],x.O)
D.fjP=new B.fY(A.A,0,6.283185307179586,A.x,D.d1q,null,null)
D.dny=w([A.aQ,A.bM,A.aO,A.am,A.aQ],x.O)
D.fjQ=new B.fY(A.A,0,6.283185307179586,A.x,D.dny,null,null)
D.dvR=w([A.bw,A.bb,A.bs,A.c1,A.bw],x.O)
D.fjS=new B.fY(A.A,0,6.283185307179586,A.x,D.dvR,null,null)
D.bj_=new B.u(1,0,1,0,A.q)
D.bnT=new B.u(1,0,1,1,A.q)
D.bkO=new B.u(1,0,0,1,A.q)
D.bgJ=new B.u(1,1,0,1,A.q)
D.drK=w([A.Mg,A.ahM,D.bj_,D.bnT,D.bkO,D.bgJ,A.Mg],x.O)
D.fjT=new B.fY(A.A,0,6.283185307179586,A.x,D.drK,null,null)
D.fk7=new C.axg(2,"immersiveSticky")
D.fk8=new C.axg(3,"edgeToEdge")
D.fk9=new C.axg(4,"manual")
D.fmE=new B.G(!0,A.o5,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUq=new B.G(!0,A.eQ,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnd=new B.G(!0,E.nr,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new B.G(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqs=new B.G(!0,A.eI,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frU=new B.G(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new B.G(!0,A.jV,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsi=new B.t2(!0,A.Jy,null,null,null,null,A.dz,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftt=new B.G(!0,A.jA,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftR=new B.G(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esq=new B.iY(1,1,0.7568627450980392,0.027450980392156862)
D.ftV=new B.t2(!0,D.esq,null,null,null,null,A.dz,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ahU=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVg=new B.G(!0,D.ahU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new B.G(!0,D.aj9,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVi=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuH=new B.t2(!0,A.pE,null,null,null,null,A.dz,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuY=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvv=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvx=new B.G(!0,D.ahU,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KC=new B.G(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw2=new B.G(!0,A.c4,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwc=new B.G(!0,A.bM,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new B.G(!0,A.bN,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwx=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a55,null,null,null)
D.fwA=new B.G(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwC=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new B.G(!0,A.dw,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxE=new B.G(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVU=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVW=new B.G(!0,A.bV,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.btD=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fzT=new B.G(!0,D.btD,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW1=new B.G(!0,E.nr,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAn=new B.G(!0,A.bM,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAq=new B.G(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft_=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBH=new B.B("NEW",null,D.ft_,null,null,null,null,null,null,null,null,null)
D.fBZ=new B.B("Hati ya Kuhowesha",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fCs=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new B.B("Scrollable PDF on this slide",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fDC=new B.B("Big quote mark",null,A.jt,null,null,null,null,null,null,null,null,null)
D.fDF=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fDR=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fEj=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new B.B("How many slides?",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fEU=new B.B("Transfer",null,A.cg,null,null,null,null,null,null,null,null,null)
D.foD=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFf=new B.B("Luxury FX",null,D.foD,null,null,null,null,null,null,null,null,null)
D.fFA=new B.B("Font",null,A.tx,null,null,null,null,null,null,null,null,null)
D.fFL=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fFS=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new B.G(!0,A.bM,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG1=new B.B("Example  GA847",null,D.fzp,null,null,null,null,null,null,null,null,null)
D.fGr=new B.B("Design shapes",null,A.jt,null,null,null,null,null,null,null,null,null)
D.fGD=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fGI=new B.B("Non-stop (loop)",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fGW=new B.B("Hati ya Kuhoweya",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fHe=new B.B("Photo studio",null,A.fC,null,null,null,null,null,null,null,null,null)
D.fHI=new B.B("Add your picture",null,A.kh,null,null,null,null,null,null,null,null,null)
D.fsj=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.B("Enter document code",null,D.fsj,null,A.K,null,null,null,null,null,null,null)
D.fHK=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new B.G(!0,E.nr,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI9=new B.B("Delete this book?",null,D.fpL,null,A.K,null,null,null,null,null,null,null)
D.fuw=new B.G(!0,E.nr,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ8=new B.B("Your library",null,D.fuw,null,null,null,null,null,null,null,null,null)
D.fJe=new B.B("Delete",null,A.aV9,null,null,null,null,null,null,null,null,null)
D.fJh=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.Kz,null,null,null,null,null,null,null,null,null)
D.fJt=new B.B("Element flies in",null,A.aVm,null,null,null,null,null,null,null,null,null)
D.VQ=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fJS=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fKe=new B.B("Cancel",null,E.aVw,null,null,null,null,null,null,null,null,null)
D.fKg=new B.B("The lines and circles that come with the design",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fyc=new B.G(!0,A.ho,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKI=new B.B("DOCUMENT CODE",null,D.fyc,null,null,null,null,null,null,null,null,null)
D.fLy=new B.B("Quotes",null,G.ab8,null,null,null,null,null,null,null,null,null)
D.frG=new B.G(!0,N.lF,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLH=new B.B("Add a picture",null,D.frG,null,null,null,null,null,null,null,null,null)
D.fLP=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vt,null,A.K,null,null,null,null,null,null,null)
D.fLT=new B.B("Look & feel",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fLY=new B.B("Rings",null,A.hz,null,null,null,null,null,null,null,null,null)
D.fM3=new B.B("W",null,A.tx,null,null,null,null,null,null,null,null,null)
D.fMd=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fMw=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VC,null,A.K,null,null,null,null,null,null,null)
D.fMy=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fNi=new B.B("Add page",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fNA=new B.B("Malipo ya Awamu ya Mahari",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fs8=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new B.B("Create with AI",null,D.fs8,null,A.K,null,null,null,null,null,null,null)
D.fOj=new B.B("Apply look",null,A.hz,null,null,null,null,null,null,null,null,null)
D.fsQ=new B.G(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP6=new B.B("Type your presentation below",null,D.fsQ,null,A.K,null,null,null,null,null,null,null)
D.fP9=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aW5,null,A.K,null,null,null,null,null,null,null)
D.fPb=new B.B("Keep it",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fnw=new B.G(!0,A.cq,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPi=new B.B("Done",null,D.fnw,null,null,null,null,null,null,null,null,null)
D.fPD=new B.B("Delete",null,A.nR,null,null,null,null,null,null,null,null,null)
D.fPO=new B.B("Hati ya Kiapo cha Uongozi",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fr_=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQJ=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fr_,null,A.K,null,null,null,null,null,null,null)
D.fR7=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fRd=new B.B("Layout",null,A.VH,null,null,null,null,null,null,null,null,null)
D.fRS=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fS0=new B.B("X",null,A.tx,null,null,null,null,null,null,null,null,null)
D.fSB=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A2.ED,null,null,null,null,null,null,null,null,null)
D.fT9=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fTn=new B.B("Hati ya Kuhowa",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fTp=new B.B("Choose a class template",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fTr=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fTy=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTL=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fTS=new B.B("Done",null,A.aVT,null,null,null,null,null,null,null,null,null)
D.fU2=new B.B("Ending celebration",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fU3=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fUi=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A2.tw,null,null,null,null,null,null,null,null,null)
D.fVi=new B.B("Export presentation",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fVj=new B.B("What would you like to do?",null,D.aVg,null,null,null,null,null,null,null,null,null)
D.fVo=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fVV=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fVZ=new B.B("Hati (Documents)",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fWb=new B.B("Done",null,A.lv,null,null,null,null,null,null,null,null,null)
D.fze=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWf=new B.B("Delete presentation?",null,D.fze,null,A.K,null,null,null,null,null,null,null)
D.fWz=new B.B("After the last slide it starts again from the first",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fWL=new B.B("\ud83c\udf33",null,A.EC,null,A.K,null,null,null,null,null,null,null)
D.fX2=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fX9=new B.B("Transfer document",null,A.nS,null,null,null,null,null,null,null,null,null)
D.fXk=new B.B("Add to the slides",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fXH=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fXW=new B.B("Make a book",null,I.aUL,null,null,null,null,null,null,null,null,null)
D.fY_=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.frz=new B.G(!0,A.am,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY1=new B.B("Keep this page open until it finishes.",null,D.frz,null,null,null,null,null,null,null,null,null)
D.fY3=new B.B("Making your video",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fY8=new B.B("LANGUAGE",null,X.ty,null,null,null,null,null,null,null,null,null)
D.fYf=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fYn=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYp=new B.B("Upload a different logo",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fYG=new B.B("Delete from the database?",null,A.kh,null,null,null,null,null,null,null,null,null)
D.fYH=new B.B("H",null,A.tx,null,null,null,null,null,null,null,null,null)
D.fZ6=new B.B("NGMY Quotes",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fZA=new B.B("Cover",null,D.aW1,null,null,null,null,null,null,null,null,null)
D.fZE=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fZF=new B.B("Each page becomes its own slide you can present",null,A.hy,null,null,null,null,null,null,null,null,null)
D.h_1=new B.B("Y",null,A.tx,null,null,null,null,null,null,null,null,null)
D.h_d=new B.B("Crop the picture",null,A.lv,null,null,null,null,null,null,null,null,null)
D.h_k=new B.B("Edit text",null,A.Kx,null,null,null,null,null,null,null,null,null)
D.h1F=B.dQ("a9h")
D.ER=new C.ayC(0,"none")
D.b_1=new C.ayC(1,"zipCrypto")
D.b_2=new C.ayC(2,"aes")
D.hqu=new F.Qd("","",null)
D.hrC=new C.bef(null)
D.hsI=new C.a_G(null)
D.hvH=new C.aee(null)
D.hvJ=new C.aFQ(null)
D.hyu=new C.a0V(null)
D.hyK=new C.a1r(null)
D.hzm=new C.bwd(null)})();(function staticFields(){$.hs_=null
$.hs0=null
$.hs1=null
$.hs2=null
$.h9l=B.wO("_lastQuoRemDigits")
$.h9m=B.wO("_lastQuoRemUsed")
$.ayZ=B.wO("_lastRemUsed")
$.h9n=B.wO("_lastRem_nsh")
$.qr=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a85=B.U(x.N,x.I)
$.h6M=!1
$.hwX=B.U(B.as("l8"),x.N)
$.hx8=B.U(B.as("l8"),x.E)
$.hv4=!1
$.bBS="q"
$.Rh=0
$.Df=B.U(x.N,B.as("ai<A4>"))
$.hvr=!1
$.hb4=!1
$.hC2=null
$.i6f=B.U(x.N,B.as("aB<m?>"))
$.L8=""
$.j9=0
$.hoS=function(){var w=x.N
return B.U(w,w)}()
$.hoR=B.U(x.N,x.R)
$.hbp=!1
$.agV=B.U(x.N,x.E)
$.hcg=0
$.bmu=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iw_","DC",()=>C.bbJ(0))
w($,"ivY","a3G",()=>C.bbJ(1))
w($,"ivZ","hFV",()=>C.bbJ(2))
w($,"ivX","hgl",()=>$.a3G().vD(0))
w($,"ivV","hFT",()=>C.bbJ(1e4))
w($,"ivW","hFU",()=>B.ES(8))
w($,"irG","hDO",()=>B.ES(0))
w($,"irO","hDS",()=>B.ES(0))
w($,"irN","hDR",()=>B.c26(0))
w($,"izX","hI3",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a6z.gdR(D.a6z),v=v.gag(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iAo","bGo",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n7(new C.fS3(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.n7(new C.fS4(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.n7(new C.fS5(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.n7(new C.fSg(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.n7(new C.fSl(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.n7(new C.fSm(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.n7(new C.fSn(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.n7(new C.fSo(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.n7(new C.fSp(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.n7(new C.fSq(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.n7(new C.fSr(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.n7(new C.fS6(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.n7(new C.fS7(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.n7(new C.fS8(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.n7(new C.fS9(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.n7(new C.fSa(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.n7(new C.fSb(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.n7(new C.fSc(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.n7(new C.fSd(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.n7(new C.fSe(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.n7(new C.fSf(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.n7(new C.fSh(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.n7(new C.fSi(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.n7(new C.fSj(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.n7(new C.fSk(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Fk>"))})
w($,"iA_","hI5",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["Ay26VOM7JC+sdItTr+9BJpdP7WU="]=a.current})($__dart_deferred_initializers__);