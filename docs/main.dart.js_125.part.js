((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,V,A4,Ae,Af,A5,Ag,Ah,C={
t7(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fEx(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Id(d){var w
if(d===0)return $.BX()
if(d===1)return $.a0I()
if(d===2)return $.h83()
if(Math.abs(d)<4294967296)return C.b6u(A.o.N(d))
w=C.hsy(d)
return w},
b6u(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t7(4,w)
return new C.nu(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t7(1,w)
return new C.nu(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.az(d,16)
v=C.t7(2,w)
return new C.nu(v===0?!1:s,w,v)}v=A.o.ak(A.o.gahj(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ak(d,65536)}v=C.t7(v,w)
return new C.nu(v===0?!1:s,w,v)},
hsy(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.R(B.dF("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BX()
w=$.h82()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kS(A.aG.gaN(w))
v.$flags&2&&B.ah(v,13)
v.setFloat64(0,d,!0)
v=w[7]
t=w[6]
s=(v<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new C.nu(!1,r,4)
if(s<0)p=q.lW(0,-s)
else p=s>0?q.dP(0,s):q
return p},
fEy(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fW7(d,e,f,g){var w,v,u,t,s,r=A.o.ak(f,16),q=A.o.G(f,16),p=16-q,o=A.o.dP(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fn(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dP(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fW2(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16)
if(A.o.G(f,16)===0)return C.fEy(d,e,s,g)
w=e+s+1
C.fW7(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hsB(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16),r=A.o.G(f,16),q=16-r,p=A.o.dP(1,r)-1,o=A.o.fn(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dP(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fn(u,r)}w&2&&B.ah(g)
g[n]=o},
cyY(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hsz(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b6v(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}},
fW8(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=t&65535
v=A.o.ak(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=r&65535
v=A.o.ak(r,65536)}},
hsA(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nu:function nu(d,e,f){this.a=d
this.b=e
this.c=f},
cyZ:function cyZ(){},
cz_:function cz_(){},
cz0:function cz0(d,e){this.a=d
this.b=e},
cz1:function cz1(d){this.a=d},
aOk:function aOk(d,e){this.a=d
this.b=e},
fMb(d,e,f){var w=new C.Q4(d,A.o.ak(Date.now(),1000),e)
w.Q=f
return w},
Q4:function Q4(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1T:function a1T(d,e){this.a=d
this.b=e},
bDC:function bDC(d){this.a=d
this.c=this.b=0},
hbg(){return new C.bC8()},
bC8:function bC8(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cra:function cra(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hsg(d,e,f){var w,v,u,t,s
if(d.gai(d))return new Uint8Array(0)
w=new Uint8Array(B.cm(d.gcNv(d)))
v=f*2+2
u=C.fTN(C.fTP(),64)
t=new C.cbV(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cbW(e,1000,v)
s=new Uint8Array(v)
return A.aG.dt(s,0,t.cBt(w,0,s,0))},
cr8:function cr8(d,e){this.c=d
this.d=e},
aut:function aut(d,e){this.a=d
this.b=e},
crb:function crb(d,e,f,g){var _=this
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
b5d:function b5d(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cr9:function cr9(){this.a=$},
fVy(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hb_(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bAJ:function bAJ(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fJX(d,e){e&=31
return(d&$.pE[e])<<e>>>0},
n1(d,e){e&=31
return(d>>>e|C.fJX(d,32-e))>>>0},
fTO(d){var w,v=new C.aqe()
if(B.iz(d))v.aGm(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fTP(){var w=C.fTO(0),v=new Uint8Array(4),u=x.S
u=new C.cbX(w,v,A.CD,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.l7(0)
return u},
fTN(d,e){var w=new C.cbT(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cbS:function cbS(){},
cbW:function cbW(d,e,f){this.a=d
this.b=e
this.c=f},
cbQ:function cbQ(){},
aqd:function aqd(d){this.a=d},
cbV:function cbV(d){this.a=$
this.b=d
this.c=$},
cbR:function cbR(){},
cbP:function cbP(){},
aqe:function aqe(){this.b=this.a=$},
cbU:function cbU(){},
cbX:function cbX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cbT:function cbT(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cbO:function cbO(){},
cbN:function cbN(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bJy:function bJy(){},
bJz:function bJz(d){this.a=d},
hvs(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6K:function b6K(){},
cla:function cla(){},
bKr:function bKr(d,e){this.a=d
this.b=!1
this.c=e},
bKs:function bKs(){},
hE2(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
at7(d){var w=0,v=B.j(x.H),u
var $async$at7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eA9?2:4
break
case 2:w=5
return B.b(A.jR.fM("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$at7)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jR.fM("SystemChrome.setEnabledSystemUIOverlays",C.hE2(null),u),$async$at7)
case 6:case 3:return B.h(null,v)}})
return B.i($async$at7,v)},
ata:function ata(d,e){this.a=d
this.b=e},
a6p:function a6p(d){this.a=d},
fAz(d,e){return new C.aSC(e,d,null)},
aSC:function aSC(d,e,f){this.e=d
this.c=e
this.a=f},
axW:function axW(d,e,f,g,h){var _=this
_.ad=d
_.ag=e
_.a8$=f
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
hGB(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fbG(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bw(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fbG:function fbG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
al9(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$al9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aeC("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$al9)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d5(s,x.f)
t=B.cz(t,new C.bUy(),t.$ti.k("G.E"),x.P)
r=B.z(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.bUz())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al9,v)},
alb(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$alb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.al9(),$async$alb)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.Q(Date.now(),0,!1).a4().ab()
p=m.a
k=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nC("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$alb)
case 7:if(!f){w=5
break}s.m(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bg<2>")
s=B.z(new B.bg(s,r),r.k("G.E"))
w=10
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],t,q),null),$async$alb)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alb,v)},
bUA(d){return C.hgE(d)},
hgE(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bUA=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aeC("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hB),$async$bUA)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.U8(B.a_(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a6(m)
$.al.$1("[admin slides vault] load "+d+": "+B.t(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bUA,v)},
ala(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ala=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.al9(),$async$ala)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n2(r,new C.bUB(d))
w=4
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),null),$async$ala)
case 4:t=f
w=t?5:6
break
case 5:s=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aMn("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$ala)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ala,v)},
bUy:function bUy(){},
bUz:function bUz(){},
bUB:function bUB(d){this.a=d},
hQi(d,e,f){return B.c2(A.K,null,new C.fr1(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fr1:function fr1(d,e,f){this.a=d
this.b=e
this.c=f},
ZW:function ZW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGe:function aGe(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eRZ:function eRZ(d,e){this.a=d
this.b=e},
eS2:function eS2(d){this.a=d},
eS3:function eS3(d){this.a=d},
eS4:function eS4(d,e,f){this.a=d
this.b=e
this.c=f},
eS_:function eS_(d){this.a=d},
eS0:function eS0(d){this.a=d},
eS1:function eS1(d,e){this.a=d
this.b=e},
eRU:function eRU(d){this.a=d},
eRS:function eRS(d){this.a=d},
eRT:function eRT(d){this.a=d},
eRV:function eRV(d){this.a=d},
eRW:function eRW(d){this.a=d},
eS8:function eS8(d,e){this.a=d
this.b=e},
eS7:function eS7(d,e){this.a=d
this.b=e},
eRY:function eRY(d,e,f){this.a=d
this.b=e
this.c=f},
eRX:function eRX(d,e,f){this.a=d
this.b=e
this.c=f},
eS5:function eS5(d,e){this.a=d
this.b=e},
eS6:function eS6(d,e){this.a=d
this.b=e},
eSb:function eSb(d){this.a=d},
eSc:function eSc(d,e){this.a=d
this.b=e},
eSa:function eSa(d,e){this.a=d
this.b=e},
eS9:function eS9(){},
fYu(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aE(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d5(w,x.f)
v=B.cz(v,new C.eZb(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a4<G.E>")
v=B.z(new B.a4(v,new C.eZc(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_U(d){return C.hHN(d)},
hHN(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_U=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fdT(n)
t=4
j=m
i=C
w=7
return B.b(B.a0t("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_U)
case 7:j.$1(i.fYu(f))
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
return B.b(B.ax(),$async$a_U)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fYu(B.aS(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bg<2>")
o=p.k("a4<G.E>")
j=B
i=B
h=new B.bg(n,p)
g=C
w=13
return B.b(C.eZk(d),$async$a_U)
case 13:p=j.z(new i.a4(h,new g.fdR(f),o),o.k("G.E"))
A.d.aZ(p,new C.fdS())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_U,v)},
afb(d,e){return C.hPY(d,e)},
hPY(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$afb=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b4(e,new C.fqz(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.R.al(n,null)
q=!1
t=4
w=7
return B.b(B.af3("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afb)
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
return B.b(B.ax(),$async$afb)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afb)
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
return B.i($async$afb,v)},
eZk(d){return C.hwN(d)},
hwN(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eZk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$eZk)
case 7:r=f
q=r.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.ko(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aZ(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$eZk,v)},
ae2(d,e){return C.hGt(d,e)},
hGt(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ae2=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$ae2)
case 6:s=g
r=B.aZ(x.N)
q=s.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fU(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("cl.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$ae2)
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
return B.b(C.a_U(d),$async$ae2)
case 8:n=g
J.n2(n,new C.fbm(e))
w=9
return B.b(C.afb(d,n),$async$ae2)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ae2,v)},
hQn(d,e){return B.a8(d,!1).cp(B.eD(new C.frn(e),!0,null,x.H))},
hsD(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e9(w.d,new C.cAk())},
nV:function nV(d,e,f){this.a=d
this.b=e
this.c=f},
eZb:function eZb(){},
eZc:function eZc(){},
fdT:function fdT(d){this.a=d},
fdR:function fdR(d){this.a=d},
fdS:function fdS(){},
fqz:function fqz(){},
fbm:function fbm(d){this.a=d},
frn:function frn(d){this.a=d},
WI:function WI(d,e){this.c=d
this.a=e},
av_:function av_(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cAk:function cAk(){},
cAm:function cAm(d,e){this.a=d
this.b=e},
cAp:function cAp(d){this.a=d},
cAq:function cAq(d){this.a=d},
cAo:function cAo(){},
cAr:function cAr(d,e){this.a=d
this.b=e},
cAn:function cAn(d){this.a=d},
cAs:function cAs(){},
cAl:function cAl(d,e){this.a=d
this.b=e},
cAt:function cAt(){},
cAg:function cAg(d){this.a=d},
cAe:function cAe(d){this.a=d},
cAf:function cAf(d){this.a=d},
cAh:function cAh(d,e){this.a=d
this.b=e},
cAd:function cAd(d){this.a=d},
cAc:function cAc(d){this.a=d},
cAa:function cAa(d,e){this.a=d
this.b=e},
cAb:function cAb(d){this.a=d},
cAj:function cAj(){},
cAi:function cAi(d){this.a=d},
cA9:function cA9(d,e){this.a=d
this.b=e},
cA8:function cA8(d,e){this.a=d
this.b=e},
cA7:function cA7(d,e){this.a=d
this.b=e},
cAu:function cAu(d){this.a=d},
WG:function WG(d,e,f){this.c=d
this.d=e
this.a=f},
aC8:function aC8(d,e,f){this.a=d
this.b=e
this.c=f},
auW:function auW(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
czB:function czB(d){this.a=d},
czA:function czA(d){this.a=d},
czD:function czD(d,e,f){this.a=d
this.b=e
this.c=f},
czL:function czL(){},
czM:function czM(d){this.a=d},
czE:function czE(d,e,f){this.a=d
this.b=e
this.c=f},
czC:function czC(d,e){this.a=d
this.b=e},
czG:function czG(d,e){this.a=d
this.b=e},
czH:function czH(d,e){this.a=d
this.b=e},
czI:function czI(d,e){this.a=d
this.b=e},
czF:function czF(d){this.a=d},
czK:function czK(d){this.a=d},
czJ:function czJ(d,e){this.a=d
this.b=e},
czR:function czR(d){this.a=d},
czN:function czN(d,e){this.a=d
this.b=e},
czO:function czO(d,e){this.a=d
this.b=e},
czP:function czP(d,e){this.a=d
this.b=e},
czQ:function czQ(d,e){this.a=d
this.b=e},
auY:function auY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hK7(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bx(new C.fip(),x.H).eN(new C.fiq())}}else if(s)C.fZU()}catch(t){}},
fZU(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eN(new C.f2x())}catch(u){}},
hKa(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fip:function fip(){},
fiq:function fiq(){},
f2x:function f2x(){},
h3o(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gL(A.a.e1(v,w,"").split(":"))},
h3l(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kJ)return null
return A.a.aX(w,14)},
fIH(d){var w
if(d.b!==D.kJ)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aX(w,21)},
hKA(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h3p(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hKv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ae("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.ae("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ae("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kx(0,f)
t=x.N
u=B.cz(u,new C.fjp(),B.a2(u).k("G.E"),t)
s=B.z(u,B.a2(u).k("G.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kx(0,f),u=new B.Ic(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.PM(A.a.am(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.PM(A.a.aX(f,q)):p)+"\\.?$"
l=B.ae(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hKt(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("G.E"))
A.d.aZ(q,new C.fjo())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aNk(w,u,s,0)}return w},
hKx(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a0o:$.ha2(),s=x.N,r=B.T(s,s)
for(s=t.gdH(t),s=s.gah(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.m(0,w.b,u)}return r},
h3m(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f_b(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h3o(q)===e)return q}return null},
hKy(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aX(v,u)
return A.d.gL(D.F8).a},
hKz(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ac_(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ac_(0,0,0)
v=C.f_b(b6,b0)
u=C.f_b(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hKx(b2,C.hKv(C.h3m(b2),v.r))
if(s.a!==0){u.r=C.hKt(C.h3m(b4),s)
t=s.a}}r=B.aZ(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h3o(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.ef(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f_b(b6,n)
i=C.f_b(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gL(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fIH(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h3l(a8)===a0||C.fIH(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Ph(a1,new C.fjv(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iS
$.iS=a9+1
A.d.K(a1,new C.ey(""+1000*a6+"_"+a9,D.kJ,a2,a3,a4,a5,"",24,A.a4,A.bi,A.az,4279310375,A.bf,d.at,D.bc,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cd,0,"","","","","",!1,0));++e}b5.f=new B.Q(Date.now(),0,!1)
return new B.ac_(k,t,e)},
hKu(d){var w=C.hKy(d)
if(d.w==="hati_kuhowa")return C.h2J("",w)
return C.h2I("",w)},
fjp:function fjp(){},
fjo:function fjo(){},
fjv:function fjv(d){this.a=d},
fZD(){var w=new B.Q(Date.now(),0,!1),v=new C.f1A()
return B.t(v.$1(B.bO(w)))+"/"+B.t(v.$1(B.bC(w)))+"/"+B.bw(w)},
fIP(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fkn(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kJ&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h3C(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fkn(d)
w=B.bh(u)
if(w==null)return!C.fkn(d)
return new B.Q(Date.now(),0,!1).a4().cY(w.a4().bN(18e9))},
hLf(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.Q(Date.now(),0,!1).a4().ab()},
hkE(d){return A.a.i(d).toLowerCase()},
ani(d){return C.hkG(d)},
hkG(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$ani=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$ani)
case 7:r=f
p=r.rn("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hOK(),B.U(o).k("J<1,n>")).bZ(0,new C.c46())
o=B.d7(o,o.$ti.k("G.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aZ(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ani,v)},
anh(d,e){return C.hkF(d,e)},
hkF(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anh=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ani(d),$async$anh)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$anh)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pM(r)),$async$anh)
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
return B.i($async$anh,v)},
anj(d,e){return C.hkH(d,e)},
hkH(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ani(d),$async$anj)
case 3:r=g
if(!J.hD(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$anj)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pM(r)),$async$anj)
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
return B.i($async$anj,v)},
Tr(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Tr=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fC3&&!a5){w=1
break}t=4
w=7
return B.b(B.ax(),$async$Tr)
case 7:r=a7
q=B.aS(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aE(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jk(p),d=d.gah(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.U8(B.a_(f.a(n.b),e,a0)))}$.a5f=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a6(a2)
$.al.$1("[kiapo] local load: "+B.t(m))
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
return B.b(B.bY(),$async$Tr)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tn("civic_hati_kiapo_uongozi",null,A.ec),$async$Tr)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jk(f.a(J.q(l,"byState"))),e=e.gah(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.U8(B.a_(f.a(j.b),o,d)))}for(o=k,o=new B.cQ(o,B.a2(o).k("cQ<1,2>")).gah(0);o.C();){f=o.d
f.toString
i=f
h=$.a5f.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a5f.m(0,i.a,i.b)}w=20
return B.b(C.ank(),$async$Tr)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a6(a3)
$.al.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fC3=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tr,v)},
ank(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$ank=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$ank)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a5f,o=new B.cQ(o,B.a2(o).k("cQ<1,2>")).gah(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ac())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.al(r,null)),$async$ank)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a6(l)
$.al.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ank,v)},
aX3(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aX3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Tr(!1),$async$aX3)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a5f.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.byk(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aX3,v)},
a5g(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a5g=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.Q(Date.now(),0,!1)
o=a1.hs()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a5f.m(0,d,o)
$.fC3=!0
w=3
return B.b(C.ank(),$async$a5g)
case 3:w=4
return B.b(B.bY(),$async$a5g)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a5f,n=new B.cQ(n,B.a2(n).k("cQ<1,2>")).gah(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ac())}w=9
return B.b(B.nC("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.Q(Date.now(),0,!1).a4().ab()],e,x.z),null),$async$a5g)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a6(a0)
$.al.$1("[kiapo] cloud save: "+B.t(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a5g,v)},
anl(d){var w=0,v=B.j(x.T),u,t,s
var $async$anl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hR().a3j(A.ey),$async$anl)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f7(),$async$anl)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aX2(t,d),$async$anl)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anl,v)},
aX2(d,e){return C.hkI(d,e)},
hkI(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aX2=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bY(),$async$aX2)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ae("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eM().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hV("media")
w=8
return B.b(p.w6(q,new Uint8Array(B.cm(d)),D.bnN),$async$aX2)
case 8:n=p.Bz(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a6(k)
$.al.$1("[kiapo] video upload: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aX2,v)},
J3(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.cd,D.cN,l,m,n)},
f0Q(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eV,j,k,l)},
fG0(d,e,f,g,h,i,j,k){var w=C.cy(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ei(h,!1,j,A.az,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.cd,D.cN,g,e,f)},
f0o(d,e,f,g){return C.f0Q(0,0.002,D.fk,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fG1(d,e,f,g,h,i,j,k){var w=C.cy()
return C.ei(A.pA,!1,j,A.az,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bi,A.a4,"",h,w,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.cd,D.cN,g,e,f)},
fZC(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gL(A.a.e1(v,w,"").split(":"))},
byk(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.fZC(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kJ&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fIl(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.AD(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.fZC(m)
if(l!=null&&r.an(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kJ&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bm(a1.z,new C.fin(a2))}else A.d.bm(a1.z,new C.fio())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fkn(a0))a0.ax=a6.f.a4().ab()
return a0},
fIl(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fl9(D.a1o),l=C.cy(),k=x.u,j=B.a([C.ei(A.bf,!1,s,A.az,"marriage_locked_bg",r,24,A.bi,A.a4,"",1,C.cy(),m,"","",0,!1,"",0,D.bc,q,2,"",0,0,"",D.cd,D.l5,1,0,0)],k),i=B.a([],k)
i.push(C.J3("NGMY",A.L,236069181,52,A.bi,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.J3("TAREHE:",A.bf,o,16,A.bi,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fG0("tarehe",0.8059999999999999,0.026,0.18,A.bf,16,p,C.fZD()))
i.push(C.f0o(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.J3("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bi,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.J3("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cx,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f0Q(0,0.002,D.fk,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fG1("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fG1("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fG1("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f0Q(268435456,0.175,D.bc,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.J3("VIDEO YA KIAPO",A.bf,o,10,A.bi,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ei(A.bf,!1,s,A.az,"__kiapo_video__",r,24,A.bi,A.a4,"",0.131,C.cy(),t,"","",0,!1,"",0,D.bc,q,2,"",0,0,"",D.cd,D.l5,0.77,0.115,0.492))
i.push(C.J3("Rais Anayeapa:",A.bf,p,15,A.bi,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.J3("Jina:",A.bf,p,13,A.bi,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fG0("rais_jina",0.195,0.6930000000000001,0.62,A.bf,13,p,""))
i.push(C.f0o(0.195,0.7130000000000001,0.62,n))
i.push(C.J3("Sahihi:",A.bf,p,13,A.bi,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ei(A.bf,!1,s,A.az,"marriage_sign_rais",0,24,A.bi,A.a4,"",0.07,C.cy(),t,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eV,0.38,0.21500000000000002,0.73))
i.push(C.f0o(0.21500000000000002,0.795,0.38,n))
i.push(C.J3("Tarehe:",A.bf,p,13,A.bi,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fG0("rais_tarehe",0.745,0.74,0.2,A.bf,12,p,C.fZD()))
i.push(C.f0o(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f0Q(0,0.032,D.bc,o,1,"state_box",0.72,0.14,0.875),C.J3("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bi,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qT(4294967035,t,0,0,j,l,D.pp,"","",u,D.db)
return C.AD(t,t,t,t,D.nE,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cy(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
aec(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aec=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.H(x.q).f.P(D.euZ)
w=1
break}w=3
return B.b(C.Tr(!0),$async$aec)
case 3:w=4
return B.b(C.aX3(p),$async$aec)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h3C(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c2(D.b3R,null,new C.fdf(p),f,!0,!0,!1,A.l6,!1,!1,x.N),$async$aec)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fdg(),f,null,!0,!0,x.y),$async$aec)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fIl(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.H(x.q).f
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fIl(p))
case 1:return B.h(u,v)}})
return B.i($async$aec,v)},
f1A:function f1A(){},
c46:function c46(){},
fin:function fin(d){this.a=d},
fio:function fio(){},
fdf:function fdf(d){this.a=d},
fdd:function fdd(d){this.a=d},
fde:function fde(d){this.a=d},
fdg:function fdg(){},
fdb:function fdb(d){this.a=d},
fdc:function fdc(d){this.a=d},
anQ:function anQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAY:function aAY(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dYE:function dYE(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYD:function dYD(d){this.a=d},
dYF:function dYF(d){this.a=d},
dYG:function dYG(d){this.a=d},
vN(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",j,D.bc,4280172719,2,d,0,0,"",D.cd,D.cN,l,m,n)},
fZg(d,e,f){var w=4291404327
return B.a([C.pD(0,f,D.eF,w,2,"ring_l",f,d-f*0.42,e),C.pD(0,f,D.eF,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f_Q(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pD(4294967288,f,D.eF,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pD(h,s,D.eF,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pD(h,f*0.46,D.eF,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pD(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eV,j,k,l)},
f_P(d,e,f,g,h,i,j,k,l){var w=C.cy(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ei(h,!1,k,A.az,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.bc,4280172719,2,l,0,0,"",D.cd,D.cN,g,e,f)},
bvM(d,e,f,g){return C.pD(0,0.002,D.fk,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fZf(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pD(0,0.036,D.bc,h,1.4,"banner_box_"+d,w,v,e),C.vN(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h3n(){var w=new B.Q(Date.now(),0,!1),v=new C.fju()
return B.t(v.$1(B.bO(w)))+"/"+B.t(v.$1(B.bC(w)))+"/"+B.bw(w)},
fZh(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vN(r+".",A.bf,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f_P("witness_"+d+"_"+r+"_name",q,g,p,A.bf,!0,16,j,"[Jina la Shahidi]"),C.bvM(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vN("Sahihi:",A.bf,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ei(A.bf,!1,4279310375,A.az,"marriage_sign_"+d+"_witness_"+r,0,24,A.bi,A.a4,"",0.05,C.cy(),null,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eV,s,t,g-0.004),C.bvM(t,g+0.044,s,w)],x.u)},
aeE(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cWG,D.c3r,D.cQa,D.cRR],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gah(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fFk(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fl9(d.d),v=B.a([C.ei(A.bf,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cy(),w,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l5,1,0,0)],x.u)
A.d.v(v,C.hz2(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hz2(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vN("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fZg(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fZg(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f_Q(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f_Q(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vN("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pD(0,0.062,D.eF,b1,1.6,"crest_o",0.11,0.445,0.012),C.pD(0,0.046,D.eF,b1,1,"crest_i",0.084,0.458,0.02),C.vN("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pD(0,0.002,D.fk,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pD(b9,0.016,D.kK,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pD(0,0.002,D.fk,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vN("TAREHE:",A.bf,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f_P("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bf,!1,21,b9,C.h3n()),C.bvM(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vN(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pD(c0,0.0026,D.bc,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pD(c3.e,0.138,D.bc,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cy()
c2.push(C.ei(A.bf,!1,b9,A.az,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bi,A.cq,"",0.128,s,a9,"","",0,!1,"",0,D.bc,b3,2,c5,0,0,"",D.cd,D.cN,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pD(0,0.036,D.bc,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cy()
A.d.v(c2,B.a([s,C.ei(A.L,!1,c0,A.az,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bi,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bc,b3,2,c7,0,0,"",D.cd,D.cN,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fZf(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vN(c9,A.bf,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f_P("mahari_"+p,0.132,k,m,A.bf,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iS
$.iS=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iS
$.iS=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.ey(""+1000*i+"_"+h,D.cN,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bi,A.az,c0,A.bf,a9,D.bc,b2,b3,2,0,!1,s,0,D.cd,0,"","","","","",!1,0),j,new C.ey(""+1000*f+"_"+e,D.eV,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bi,A.az,b6,A.bf,a9,D.fk,0,b5,0.8,0,!1,g,0,D.cd,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iS
$.iS=p+1
i=Date.now()
h=$.iS
$.iS=h+1
g=Date.now()
f=$.iS
$.iS=f+1
e=Date.now()
a3=$.iS
$.iS=a3+1
A.d.v(d,B.a([new C.ey(""+1000*s+"_"+p,D.cN,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bi,A.az,b7,A.dM,a9,D.bc,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*i+"_"+h,D.eV,a1,a2,0.046,0.025875,"",24,A.a4,A.bi,A.az,b6,A.bf,a9,D.bc,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*g+"_"+f,D.cN,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bi,A.az,b7,A.L,a9,D.bc,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*e+"_"+a3,D.eV,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bi,A.az,b6,A.bf,a9,D.bc,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cd,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fZf("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a1d||w===D.a1f||w===D.a1c||w===D.a1e){w=t-0.008
A.d.v(c2,C.f_Q(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f_Q(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pD(0,a4,D.bc,c0,1.3,"wit_table_border",0.82,0.09,t),C.pD(c0,a4,D.bc,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pD(0,0.0022,D.fk,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vN("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vN("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fZh("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fZh("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pD(0,0.11,D.bc,c0,1.2,"mw_box",0.82,0.09,t),C.vN("MWANDISHI",A.bf,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vN("Jina:",A.bf,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f_P("mwandishi_jina",0.215,w,0.3116,A.bf,!0,15,b9,""),C.bvM(0.215,p,0.3116,b5),C.vN("Sahihi:",A.bf,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.ei(A.bf,!1,b6,A.az,"marriage_sign_mwandishi",0,24,A.bi,A.a4,"",0.044,C.cy(),a9,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eV,0.3161999999999999,0.5738,s-0.044),C.bvM(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pD(0,0.032,D.bc,c0,1,"state_box",0.7,0.15,a8),C.vN("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hKw(d){var w,v,u,t=null,s=B.aY(d.f),r=B.aY(d.r),q=C.fIZ(d.d),p=new C.fjq(s),o=new C.fjr(s),n=d.z,m=n===D.a1d||n===D.a1f||n===D.a1c||n===D.a1e,l=n===D.azP||n===D.a1g||n===D.azQ,k=B.bX(0,B.fF(q,A.A,t,t,A.cl,A.bP,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a1g?26:16
i.push(new C.fjt().$1$size(w))}if(n===D.azR)i.push(D.f7x)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hF,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aIw,p.$1$w(0.9),D.aIw,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_U,t,n,w,t,t,A.n),t,t,t,t,A.ae2,t,t,t))
i.push(A.ar)
i.push(new C.fjs(r).$1("NIMETOWE"))
i.push(A.h1)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.JR,new B.cC(A.b0,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d5,new B.bH(1,A.br,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b8)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.W,t,A.b_,A.q,B.a([k,new B.C(A.acF,B.v(i,A.ag,t,A.e,A.j,0,A.p),t)],j),t)},
h2I(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aeE(e,t)
if(r==null)r=A.d.gL(D.F8)
w=C.cy()
v=C.qT(r.e,t,0,0,C.fFk(r,0.165,y.O,D.cSp,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pp,"","",s,D.db)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.AD(t,t,t,t,D.nE,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h2J(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aeE(e,t)
if(r==null)r=A.d.gL(D.F8)
w=C.cy()
v=C.qT(r.e,t,0,0,C.fFk(r,0.165,y.f,D.cOq,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pp,"","",s,D.db)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.AD(t,t,t,t,D.nE,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bzE(d,e,f){var w=0,v=B.j(x.T),u
var $async$bzE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c2(A.K,null,new C.fuN(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzE,v)},
aed(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aed=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a4<1>")
p=B.z(new B.a4(i,new C.fdj(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.Ja,null,new C.fdk(p),d,!0,!0,!1,A.l6,!1,!1,x.N),$async$aed)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzE(d,"Hati ya Kuhowa",D.F8),$async$aed)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JG(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aed)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h2I(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aed,v)},
aee(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aee=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a4<1>")
p=B.z(new B.a4(i,new C.fdn(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.Ja,null,new C.fdo(p),d,!0,!0,!1,A.l6,!1,!1,x.N),$async$aee)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzE(d,"Hati ya Kuhoweya",D.F8),$async$aee)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JG(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aee)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h2J(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aee,v)},
aef(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aef=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a4<1>")
m=B.z(new B.a4(i,new C.fdr(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.Ja,null,new C.fds(m),d,!0,!0,!1,A.l6,!1,!1,x.N),$async$aef)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzE(d,"Malipo ya Awamu ya Mahari",D.O5),$async$aef)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JG(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aef)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aeE(s,D.O5)
if(q==null)q=A.d.gL(D.O5)
n=C.cy()
p=C.qT(q.e,null,0,0,C.fFk(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cJK,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pp,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.db)
n=C.cy()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.AD(null,null,null,null,D.nE,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aef,v)},
wL:function wL(d,e){this.a=d
this.b=e},
jb:function jb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fju:function fju(){},
fjq:function fjq(d){this.a=d},
fjs:function fjs(d){this.a=d},
fjt:function fjt(){},
fjr:function fjr(d){this.a=d},
fuN:function fuN(d,e){this.a=d
this.b=e},
ab6:function ab6(d,e,f){this.c=d
this.d=e
this.a=f},
dQ2:function dQ2(d,e,f){this.a=d
this.b=e
this.c=f},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
aaw:function aaw(d,e,f){this.c=d
this.d=e
this.a=f},
fdj:function fdj(){},
fdk:function fdk(d){this.a=d},
fdh:function fdh(d){this.a=d},
fdi:function fdi(d){this.a=d},
fdn:function fdn(){},
fdo:function fdo(d){this.a=d},
fdl:function fdl(d){this.a=d},
fdm:function fdm(d){this.a=d},
fdr:function fdr(){},
fds:function fds(d){this.a=d},
fdp:function fdp(d){this.a=d},
fdq:function fdq(d){this.a=d},
J6(d,e,f,g,h,i,j,k,l,m){var w=C.cy()
return C.ei(e,!1,f,A.az,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.cd,D.cN,k,l,m)},
BF(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eV,j,k,l)},
fZX(d,e,f){return C.BF(0,0.002,D.fk,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvW(d,e,f,g,h){return B.a([C.BF(4294967288,0.032,D.bc,4291404327,1.15,"pill_"+d,g,f,e),C.J6(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fG5(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.BF(0,0.002,D.fk,g,1,"orn_l_"+t,u,d,v),C.BF(h,0.016,D.kK,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.BF(0,0.002,D.fk,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_h(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.J6(d,A.bf,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cy()
return B.a([v,C.ei(A.L,!1,j,A.az,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cx,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.cd,D.cN,t,u,g-0.002),C.fZX(u,g+0.018,t)],x.u)},
fZY(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.BF(h,0.028,D.bc,h,0,"chv_"+d,g,e,f),C.BF(w,0.024,D.kK,w,0,"chv_l_"+d,0.024,e-0.008,v),C.BF(w,0.024,D.kK,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.J6(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvV(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.J6("Sahihi:",A.bf,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ei(A.bf,!1,4279310375,A.az,"marriage_sign_"+d,0,24,A.bi,A.a4,"",0.032,C.cy(),null,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eV,v,w,f-0.006),C.fZX(w,f+0.016,v)],x.u)},
fJ_(d){var w,v
for(w=0;w<19;++w){v=D.Oh[w]
if(v.a===d)return v}return null},
hMM(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aeE(A.a.aX(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aeE(A.a.aX(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aX(k,18)
w=C.aeE(u,D.O5)
v=w==null?l:w.d
if(v==null){w=C.aeE(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fJ_(A.a.aX(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h_M.a7(0)
$.h_Z.a7(0)
t=C.fl9(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fK3(d){var w=0,v=B.j(x.T),u
var $async$fK3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c2(A.K,null,new C.fw1(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fK3,v)},
wO:function wO(d,e){this.a=d
this.b=e},
nh:function nh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bfI:function bfI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fw1:function fw1(){},
ab9:function ab9(d){this.a=d},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2D:function e2D(d){this.a=d},
e2C:function e2C(d,e){this.a=d
this.b=e},
acN:function acN(d,e,f){this.c=d
this.d=e
this.a=f},
fIZ(d){return $.h_Z.ce(0,d,new C.flb(d))},
fl9(d){return $.h_M.ce(0,d,new C.fla(d))},
fu(d){return B.fzI(d>>>16&255,d>>>8&255,d&255,255)},
hC3(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h11(4294570461,4293910718,4284234270,u)
case 1:return C.h11(4294635750,4293975240,t,4292912216)
case 2:w=C.eZq(s,4294505966,r)
C.bvG(w,14,16,p)
C.kg(w,8,9,464,836,u,1.2)
C.BB(w,2,2,1,1,u,10)
C.BB(w,478,2,-1,1,u,10)
C.BB(w,2,852,1,-1,u,10)
C.BB(w,478,852,-1,-1,u,10)
return w
case 3:return C.eZq(4294966515,4294373082,4289102906)
case 4:return C.hwY(C.eZq(4294376440,4293653998,4290287194))
case 5:w=C.eZq(4294965238,4294437098,4288444980)
C.bvG(w,14,16,4283043359)
C.kg(w,6,7,468,840,u,1)
C.kg(w,9,10,462,834,o,0.7)
return w
case 6:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,n,4294175448)
C.rc(v,n)
C.kg(v,24,24,432,806,4286209070,1)
C.a_5(v,12,12,468,12,o,3,20)
C.a_5(v,12,842,468,842,o,3,20)
C.a_5(v,12,12,12,842,o,3,20)
C.a_5(v,468,12,468,842,o,3,20)
return v
case 7:return C.hv9(4294440434,4293518297,4280228630,r)
case 8:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,m,4293911504)
C.rc(v,m)
C.kg(v,28,28,424,798,l,1)
C.f6P(v,28,28,l,k)
C.f6P(v,452,28,l,k)
C.f6P(v,28,826,l,k)
C.f6P(v,452,826,l,k)
return v
case 9:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,j,4294111986)
C.rc(v,j)
C.kg(v,18,18,444,818,4292401368,0.7)
B.iB(v,!0,C.fu(p),0,13,0,853)
return v
case 10:return C.hyQ(i,4294173372)
case 11:return C.hzU(4294439140,4293449662)
case 12:return C.hv1(h,4294239432)
case 13:return C.hzl(4294244340,4293193448)
case 14:return C.hDB(4294505710,4293780694)
case 15:return C.eYr(4294966259,4294439138,o,p,q)
case 16:return C.eYr(4294966776,4294178544,o,g,g)
case 17:return C.eYr(4294965493,4294504170,o,4286200650,q)
case 18:return C.eYr(4294966519,4294373862,o,p,p)
case 19:return C.hy0()
case 20:return C.hy1()
case 21:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,h,4293976768)
C.rc(v,h)
C.bvG(v,14,16,p)
B.iB(v,!0,C.fu(u),4,475,4,9)
B.iB(v,!0,C.fu(u),4,475,844,849)
B.iB(v,!0,C.fu(u),4,9,4,849)
B.iB(v,!0,C.fu(u),470,475,4,849)
C.a_5(v,10,12,470,12,u,2,16)
C.a_5(v,10,842,470,842,u,2,16)
C.a_5(v,10,12,10,842,u,2,18)
C.a_5(v,470,12,470,842,u,2,18)
C.BB(v,2,2,1,1,t,10)
C.BB(v,478,2,-1,1,t,10)
C.BB(v,2,852,1,-1,t,10)
C.BB(v,478,852,-1,-1,t,10)
C.kg(v,14,16,452,822,u,1.8)
return v
case 22:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,s,4294438872)
C.rc(v,s)
C.kg(v,14,16,452,822,o,2.2)
C.kg(v,22,24,436,806,o,1)
C.fHm(v,!1,!1,o,p,p,36,14,16)
C.kt(v,240,20,7,o,!0)
C.kt(v,240,834,7,o,!0)
C.kt(v,18,427,7,o,!0)
C.kt(v,462,427,7,o,!0)
return v
case 23:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,i,4293910712)
C.rc(v,i)
B.iB(v,!0,C.fu(u),0,479,0,20)
B.iB(v,!0,C.fu(u),0,479,834,853)
B.iB(v,!0,C.fu(u),0,20,0,853)
B.iB(v,!0,C.fu(u),460,479,0,853)
B.iB(v,!0,C.fu(f),5,474,5,9)
B.iB(v,!0,C.fu(f),5,474,844,848)
B.iB(v,!0,C.fu(f),5,9,5,848)
B.iB(v,!0,C.fu(f),470,474,5,848)
C.kg(v,28,28,424,798,f,1.4)
return v
case 24:v=B.he(q,q,A.c7,0,A.dV,854,q,0,3,q,A.c7,480,!1)
C.xD(v,e,4294174404)
C.rc(v,e)
C.bvG(v,14,16,p)
B.iB(v,!0,C.fu(u),3,476,3,8)
B.iB(v,!0,C.fu(u),3,476,845,850)
B.iB(v,!0,C.fu(u),3,8,3,850)
B.iB(v,!0,C.fu(u),471,476,3,850)
C.kg(v,9,10,462,834,t,1)
C.kg(v,14,16,452,822,u,1.8)
C.kt(v,240,8,4,u,!0)
C.kt(v,240,846,4,u,!0)
C.kt(v,8,427,4,u,!0)
C.kt(v,472,427,4,u,!0)
C.kt(v,8,8,3,t,!0)
C.kt(v,472,8,3,t,!0)
C.kt(v,8,846,3,t,!0)
C.kt(v,472,846,3,t,!0)
return v}},
xD(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.k.U(q*w+p*t),0,255)
u=A.o.D(A.k.U(o*w+n*t),0,255)
w=A.o.D(A.k.U(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kv(d,!1,A.d7,new B.Qn(s),r,A.cU,1,0,w-1,k,k);++k}},
rc(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eX()
n.dQ(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dL(u,t,o)
if(s==null)s=new B.iw()
v=A.o.D(A.k.N(s.gb5(s))-3,0,255)
r=A.o.D(A.k.N(s.gbc())-3,0,255)
q=A.o.D(A.k.N(s.gbe(s))-2,0,255)
p=d.a
if(p!=null)p.jj(u,t,v,r,q,255)}},
kg(d,e,f,g,h,i,j){var w,v=null,u=C.fu(i),t=e+g
B.kv(d,!0,A.d7,u,v,A.cU,j,e,t,f,f)
w=f+h
B.kv(d,!0,A.d7,u,v,A.cU,j,e,t,w,w)
B.kv(d,!0,A.d7,u,v,A.cU,j,e,e,f,w)
B.kv(d,!0,A.d7,u,v,A.cU,j,t,t,f,w)},
BB(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kv(d,!0,A.d7,C.fu(i),u,A.cU,2,e,e+g*j,f,f)
B.kv(d,!0,A.d7,C.fu(i),u,A.cU,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kv(d,!0,A.d7,C.fu(i),u,A.cU,1,w,e+g*t,v,v)
B.kv(d,!0,A.d7,C.fu(i),u,A.cU,1,w,w,v,f+h*t)},
h11(d,e,f,g){var w=null,v=B.he(w,w,A.c7,0,A.dV,854,w,0,3,w,A.c7,480,!1)
C.xD(v,d,e)
C.rc(v,d)
B.iB(v,!0,C.fu(f),0,479,0,28)
B.iB(v,!0,C.fu(f),0,479,826,853)
B.iB(v,!0,C.fu(f),0,28,0,853)
B.iB(v,!0,C.fu(f),452,479,0,853)
C.kg(v,5,5,470,844,g,1.1)
C.kg(v,28,28,424,798,g,1.6)
C.BB(v,2,2,1,1,g,11)
C.BB(v,478,2,-1,1,g,11)
C.BB(v,2,852,1,-1,g,11)
C.BB(v,478,852,-1,-1,g,11)
return v},
eZq(d,e,f){var w=null,v=B.he(w,w,A.c7,0,A.dV,854,w,0,3,w,A.c7,480,!1)
C.xD(v,d,e)
C.rc(v,d)
C.kg(v,14,16,452,822,f,1.6)
C.kg(v,20,22,440,810,f,0.8)
return v},
bvG(d,e,f,g){var w,v=C.fu(g)
B.iB(d,!0,v,0,479,0,f-1)
w=854-f
B.iB(d,!0,v,0,479,w,853);--w
B.iB(d,!0,v,0,e-1,f,w)
B.iB(d,!0,v,480-e,479,f,w)},
hwY(d){var w,v,u=4291404327
C.bvG(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kt(d,w,8,3,u,!0)
C.kt(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kt(d,7,v,3,u,!0)
C.kt(d,473,v,3,u,!0)}return d},
f9N(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j3(e,f),new B.j3(e+g*n,f),new B.j3(e,f+h*n)],t)
B.a_R(d,C.fu(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j3(s,u),new B.j3(e+g*v,u),new B.j3(s,f+h*v)],t)
B.a_R(d,C.fu(k),t)
t=A.k.U(n*0.39)
C.kt(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kt(d,e+g*t,f+h*3,4,k,!0)
C.kt(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kt(d,e+g*t,f,5,k,!0)
C.kt(d,e,f+h*t,5,k,!0)}},
fHm(d,e,f,g,h,i,j,k,l){var w,v
C.f9N(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f9N(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f9N(d,k,v,1,-1,e,f,g,h,i,j)
C.f9N(d,w,v,-1,-1,e,f,g,h,i,j)},
a_5(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kO(d,!0,A.d7,new B.qq(p),null,A.cU,j,r,q)}},
f8X(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kv(d,!0,A.d7,new B.qq(o),null,A.cU,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kv(d,!0,A.d7,new B.qq(o),null,A.cU,1.4,q,q,p,p+h*r)}},
hv9(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.he(o,o,A.c7,0,A.dV,854,o,0,3,o,A.c7,480,!1)
C.xD(n,d,e)
C.rc(n,d)
C.kg(n,20,20,440,814,f,1.2)
C.f8X(n,0,0,1,1,g)
C.f8X(n,480,0,-1,1,g)
C.f8X(n,0,854,1,-1,g)
C.f8X(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.k.U(240+24*r)
q=A.k.U(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kv(n,!0,A.d7,new B.qq(p),o,A.cU,1.2,240,r,60,q)}return n},
f6P(d,e,f,g,h){var w
C.fbH(d,!0,C.fu(g),13,e,f)
C.fbH(d,!0,C.fu(g),9,e,f)
w=B.a([new B.j3(e,f-4),new B.j3(e+4,f),new B.j3(e,f+4),new B.j3(e-4,f)],x.J)
B.a_R(d,C.fu(h),w)},
kt(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j3(e,v),new B.j3(u,f),new B.j3(e,t),new B.j3(s,f)],x.J)
if(i){B.a_R(d,C.fu(h),r)
return}B.kv(d,!0,A.d7,C.fu(h),w,A.cU,1,e,u,v,f)
B.kv(d,!0,A.d7,C.fu(h),w,A.cU,1,u,e,f,t)
B.kv(d,!0,A.d7,C.fu(h),w,A.cU,1,e,s,t,f)
B.kv(d,!0,A.d7,C.fu(h),w,A.cU,1,s,e,f,v)},
eYq(d,e,f,g,h,i,j){var w,v=B.a([new B.j3(e,f),new B.j3(e+g*28,f),new B.j3(e,f+h*28)],x.J)
B.a_R(d,C.fu(i),v)
v=e+g*14
w=f+h*14
C.kt(d,v,w,6,j,!0)
C.kt(d,v,w,3,i,!0)},
eYr(d,e,f,g,h){var w=null,v=B.he(w,w,A.c7,0,A.dV,854,w,0,3,w,A.c7,480,!1)
C.xD(v,d,e)
C.rc(v,d)
C.kg(v,18,18,444,818,f,2)
C.kg(v,26,26,428,802,f,0.9)
if(h!=null)B.iB(v,!0,C.fu(h),28,451,28,34)
C.eYq(v,18,18,1,1,g,f)
C.eYq(v,462,18,-1,1,g,f)
C.eYq(v,18,836,1,-1,g,f)
C.eYq(v,462,836,-1,-1,g,f)
return v},
hy0(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.he(v,v,A.c7,0,A.dV,854,v,0,3,v,A.c7,480,!1)
C.xD(r,u,4294240980)
C.rc(r,u)
C.kg(r,10,12,460,830,t,3.2)
C.kg(r,18,20,444,814,s,1.2)
C.kg(r,24,26,432,802,t,1.8)
C.fHm(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kt(r,w,16,3,t,!0)
C.kt(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kt(r,16,w,3,t,!0)
C.kt(r,464,w,3,t,!0)}return r},
hy1(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.he(t,t,A.c7,0,A.dV,854,t,0,3,t,A.c7,480,!1)
C.xD(p,s,4294373080)
C.rc(p,s)
C.kg(p,16,18,448,818,r,2.4)
C.kg(p,24,26,432,802,4286209044,1)
w=new C.f_H(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fHm(p,!1,!0,r,q,q,34,16,18)
return p},
bwm(d,e,f,g,h,i){B.iB(d,!0,C.fu(i),e,e+g,f,f+h)},
bxc(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.k.U(v*l+u*m),0,255)
j=A.o.D(A.k.U(t*l+s*m),0,255)
l=A.o.D(A.k.U(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kv(d,!1,A.d7,new B.Qn(i),null,A.cU,1,e,w,l,l)}},
hyP(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.G(A.o.ak(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kv(d,!1,A.d7,new B.qq(r),null,A.cU,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.G(A.o.ak(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kv(d,!1,A.d7,new B.qq(r),null,A.cU,1,t,t,f,s);++q}},
hyQ(d,e){var w,v,u=null,t=B.he(u,u,A.c7,0,A.dV,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hyP(t,v,w,30,D.cD1,(A.o.ak(v,30)+A.o.ak(w,30)&1)===0)
C.bwm(t,44,44,392,766,d)
C.bxc(t,44,44,392,766,d,e)
C.rc(t,d)
C.kg(t,44,44,392,766,4292128567,2.2)
C.kg(t,50,50,380,754,4279898632,0.8)
return t},
hzT(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.G(g,4)){case 0:C.kt(d,e,f,7,h,!0)
C.kt(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kv(d,!0,A.d7,C.fu(h),o,A.cU,1.6,w,u,v,t)
B.kv(d,!0,A.d7,C.fu(h),o,A.cU,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kv(d,!0,A.d7,new B.qq(p),o,A.cU,1.2,w,v,q,q)}break
default:B.kv(d,!0,A.d7,C.fu(h),o,A.cU,1.5,e-8,e+8,f,f)
B.kv(d,!0,A.d7,C.fu(h),o,A.cU,1.5,e,e,f-8,f+8)
B.kO(d,!0,A.d7,C.fu(h),o,A.cU,2,e,f)}},
hzU(d,e){var w,v,u,t,s=null,r=B.he(s,s,A.c7,0,A.dV,854,s,0,3,s,A.c7,480,!1)
B.iB(r,!0,C.fu(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hzT(r,u,v,w,4292391514)}C.bwm(r,46,46,388,762,d)
C.bxc(r,46,46,388,762,d,e)
C.rc(r,d)
C.kg(r,46,46,388,762,4291404327,1.8)
return r},
fXz(d,e,f,g){C.fbH(d,!0,C.fu(g),16,e,f)
C.fbH(d,!0,C.fu(g),11,e,f)
C.kt(d,e,f,6,g,!0)
B.kv(d,!0,A.d7,C.fu(g),null,A.cU,1.3,e-14,e+14,f,f)
B.kv(d,!0,A.d7,C.fu(g),null,A.cU,1.3,e,e,f-14,f+14)},
hv1(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.he(v,v,A.c7,0,A.dV,854,v,0,3,v,A.c7,480,!1)
B.iB(s,!0,C.fu(4280948752),0,479,0,853)
B.iB(s,!0,C.fu(u),0,479,0,78)
B.iB(s,!0,C.fu(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fXz(s,w,39,t)
C.fXz(s,w,815,t)}C.bwm(s,38,92,404,670,d)
C.bxc(s,38,92,404,670,d,e)
C.rc(s,d)
C.kg(s,38,92,404,670,t,1.8)
C.kg(s,45,99,390,656,4287322667,0.8)
return s},
hzk(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j3(e,f),new B.j3(q-5,w),new B.j3(q,f-(18-Math.abs(r)*3)),new B.j3(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_R(d,new B.qq(o),p)}B.kO(d,!0,A.d7,C.fu(4292128567),null,A.cU,3,e,f)},
hzl(d,e){var w,v,u,t,s=null,r=4279196764,q=B.he(s,s,A.c7,0,A.dV,854,s,0,3,s,A.c7,480,!1)
C.xD(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kv(q,!0,A.d7,new B.qq(v),s,A.cU,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kv(q,!0,A.d7,new B.qq(u),s,A.cU,1.1,v,v,0,853)}B.iB(q,!0,C.fu(r),0,479,0,70)
B.iB(q,!0,C.fu(r),0,479,798,853)
for(t=0;t<5;++t)C.hzk(q,70+t*85,48,4292128567)
C.bwm(q,48,78,384,712,d)
C.bxc(q,48,78,384,712,d,e)
C.rc(q,d)
C.kg(q,48,78,384,712,4291404327,1.6)
return q},
hDB(d,e){var w,v,u,t=null,s=4279970378,r=B.he(t,t,A.c7,0,A.dV,854,t,0,3,t,A.c7,480,!1)
B.iB(r,!0,C.fu(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kt(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kO(r,!0,A.d7,new B.qq(u),t,A.cU,1,v,w)}C.bwm(r,40,40,400,774,d)
C.bxc(r,40,40,400,774,d,e)
C.rc(r,d)
C.kg(r,40,40,400,774,4291058750,2)
C.kg(r,48,48,384,758,s,0.8)
return r},
kE:function kE(d,e){this.a=d
this.b=e},
flb:function flb(d){this.a=d},
fla:function fla(d){this.a=d},
f_H:function f_H(d){this.a=d},
flP(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hzN(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fFZ(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.o0(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aE(0,Ae.aeA(A.a.am(d,s,r+1)),t)
v=x.f.b(w)?B.a_(w,x.N,x.z):t
return v}catch(u){return t}},
ad8(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ad8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uG(null,""),$async$ad8)
case 3:n=g
if(A.a.i(n).length===0)throw B.R("AI is not available right now. Please try again later.")
t=B.mJ(n)
if(e==null)s=A.hc
else{r=C.hzN(e)
s=B.a([new B.Z5(A.cP.gcs().aG(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qi(t,d,s,E.DE),$async$ad8)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.R(q!=null&&B.Jw(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$ad8,v)},
byM(d){return C.hMs(d)},
hMs(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$byM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.al(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ad8(r,null),$async$byM)
case 7:q=f
p=C.fFZ(q)
if(p==null){u=d
w=1
break}o=d.az3(p)
if(o.r.length===0||A.d.aF(o.r," ").length<A.d.aF(d.r," ").length*0.5){u=d
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
return B.i($async$byM,v)},
h0m(d){var w,v=F.fIh(d)
v=B.aJ(v,"book","newspaper")
if(F.a09(d)!=="sw"){w=B.ae("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fpL(d,e,f,g){return C.hOj(d,e,f,g)},
hOj(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fpL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.flP(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h3L()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ad8('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h0m(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fpL)
case 3:r=m.fFZ(i)
if(r==null)throw B.R(y.S)
q=new C.yz(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").az3(r)
t=q.r
if(t.length===0)throw B.R("The AI did not write a story. Try again.")
s=n+" "+A.d.aF(t," ")
if(F.a09(s)!=="sw"){p=B.ae("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a09(A.d.aF(t," "))==="sw"?C.byM(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fpL,v)},
byi(d,e,f,g,h){return C.hK5(d,e,f,g,h)},
hK5(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$byi=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aF(l,"\n")
l=C.h3L()
k=A.R.al(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ad8('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h0m(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$byi)
case 3:p=j.fFZ(a0)
if(p==null)throw B.R(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.ct(o)){n=d.az3(B.a_(o,x.N,x.z))
m=A.R.al(n.ac(),null)!==A.R.al(d.ac(),null)}else{n=d
m=!1}w=m&&F.a09(A.d.aF(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.byM(n),$async$byi)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a5T(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byi,v)},
a5T:function a5T(d,e,f){this.a=d
this.b=e
this.c=f},
hQV(d,e){return B.a8(d,!1).cp(B.eD(new C.fwc(e),!0,null,x.H))},
fwc:function fwc(d){this.a=d},
TX:function TX(d,e){this.c=d
this.a=e},
aBg:function aBg(d,e,f,g,h,i,j,k){var _=this
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
e5W:function e5W(d){this.a=d},
e5V:function e5V(){},
e5X:function e5X(d){this.a=d},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5Y:function e5Y(){},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5H:function e5H(d){this.a=d},
e5A:function e5A(d,e){this.a=d
this.b=e},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5C:function e5C(d,e){this.a=d
this.b=e},
e5D:function e5D(d){this.a=d},
e5E:function e5E(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5w:function e5w(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5M:function e5M(d){this.a=d},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5R:function e5R(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
e5v:function e5v(d,e){this.a=d
this.b=e},
fkM(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fkM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fYZ){w=1
break}r=new C.fkN()
t=4
q=x.s
w=7
return B.b(B.iD(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fkM)
case 7:$.fYZ=!0
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
return B.i($async$fkM,v)},
byD(d){return A.AJ[B.m9(d)-1]+", "+A.ok[B.bC(d)-1]+" "+B.bO(d)+", "+B.bw(d)},
hCH(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d_w[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fIG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fm(d[w],B.ae("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a4(v,new C.fj4(),B.U(v).k("a4<1>")))
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
continue}o=new C.fj6(j,h)
n=new C.fj5(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ak(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iN(o.$1(l)))
j.a+=l}return u},
fFJ(d,e){var w=new C.f_i()
return A.d.cG(e,0,new C.f_g(w))>=A.d.cG(d,0,new C.f_h(w))},
fWe(d){var w,v,u=new B.aQ($.Y().r,A.aq,null,null,B.a([],x.v))
u.E(new B.b5(46,0))
w=d.a
u.E(new B.ao(w,0))
v=d.b
u.E(new B.ao(w,v-46))
u.E(new B.ao(w-46,v))
u.E(new B.ao(0,v))
u.E(new B.ao(0,46))
u.E(new B.bE())
return u},
yz:function yz(d,e,f,g,h,i,j,k,l,m){var _=this
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
c7M:function c7M(d){this.a=d},
c7K:function c7K(){},
c7L:function c7L(){},
rE:function rE(d,e){this.a=d
this.b=e},
Ap:function Ap(d,e){this.a=d
this.b=e},
l_:function l_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fkN:function fkN(){},
fj4:function fj4(){},
fj6:function fj6(d,e){this.a=d
this.b=e},
fj5:function fj5(d,e,f){this.a=d
this.b=e
this.c=f},
f_i:function f_i(){},
f_j:function f_j(){},
f_g:function f_g(d){this.a=d},
f_h:function f_h(d){this.a=d},
aYy:function aYy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c7N:function c7N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7O:function c7O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7P:function c7P(d){this.a=d},
b8X:function b8X(d){this.a=d},
b8W:function b8W(d,e){this.b=d
this.a=e},
bqf:function bqf(d){this.a=d},
b5v:function b5v(d,e){this.b=d
this.a=e},
bnM:function bnM(d,e){this.b=d
this.a=e},
h5H(d,e){return B.a8(d,!1).cp(B.eD(new C.fwh(e,null),!0,null,x.E))},
fwh:function fwh(d,e){this.a=d
this.b=e},
U0:function U0(d,e,f){this.c=d
this.d=e
this.a=f},
aBk:function aBk(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
e7e:function e7e(){},
e7f:function e7f(d){this.a=d},
e7d:function e7d(d,e){this.a=d
this.b=e},
e71:function e71(d){this.a=d},
e72:function e72(d){this.a=d},
e78:function e78(d){this.a=d},
e79:function e79(d,e){this.a=d
this.b=e},
e76:function e76(d){this.a=d},
e77:function e77(d,e,f){this.a=d
this.b=e
this.c=f},
e73:function e73(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7a:function e7a(d,e){this.a=d
this.b=e},
e75:function e75(d,e){this.a=d
this.b=e},
e7b:function e7b(d){this.a=d},
e74:function e74(d,e){this.a=d
this.b=e},
e7c:function e7c(d,e){this.a=d
this.b=e},
b8t:function b8t(d,e,f){this.b=d
this.c=e
this.a=f},
hR1(d){return B.a8(d,!1).cp(B.eD(new C.fwx(),!0,null,x.I))},
bw7(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fH5(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fwx:function fwx(){},
YZ:function YZ(d){this.a=d},
o6:function o6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCD:function aCD(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aL=_.aA=_.aw=_.Y=_.b4=_.bf=_.y2=0
_.b0=null
_.aY=0.25
_.b8=null
_.bH=0.5
_.aQ=1
_.c4=_.bP=_.bg=0
_.cT=_.cQ=!1
_.c=_.a=null},
eE3:function eE3(d){this.a=d},
eCW:function eCW(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDt:function eDt(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDd:function eDd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDp:function eDp(d,e,f){this.a=d
this.b=e
this.c=f},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e,f){this.a=d
this.b=e
this.c=f},
eDr:function eDr(d,e){this.a=d
this.b=e},
eCv:function eCv(d){this.a=d},
eCw:function eCw(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCu:function eCu(){},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCA:function eCA(){},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCs:function eCs(d,e){this.a=d
this.b=e},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCC:function eCC(d){this.a=d},
eCq:function eCq(d,e){this.a=d
this.b=e},
eDT:function eDT(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eE0:function eE0(d,e){this.a=d
this.b=e},
eE1:function eE1(){},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDW:function eDW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDQ:function eDQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDX:function eDX(d){this.a=d},
eDY:function eDY(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d){this.a=d},
eDP:function eDP(d){this.a=d},
eDC:function eDC(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDE:function eDE(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDA:function eDA(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d){this.a=d},
eDL:function eDL(d){this.a=d},
eDz:function eDz(d){this.a=d},
eDM:function eDM(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDN:function eDN(d,e){this.a=d
this.b=e},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDO:function eDO(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDi:function eDi(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD9:function eD9(d){this.a=d},
eD6:function eD6(d){this.a=d},
eDa:function eDa(d,e){this.a=d
this.b=e},
eD5:function eD5(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e){this.a=d
this.b=e},
eCN:function eCN(d){this.a=d},
eCO:function eCO(d){this.a=d},
eCP:function eCP(d){this.a=d},
eCQ:function eCQ(d){this.a=d},
eCR:function eCR(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d){this.a=d},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d){this.a=d},
eC7:function eC7(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCe:function eCe(d){this.a=d},
eCH:function eCH(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCK:function eCK(d){this.a=d},
eCL:function eCL(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCm:function eCm(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCn:function eCn(d){this.a=d},
eCg:function eCg(d){this.a=d},
eCo:function eCo(d){this.a=d},
eCf:function eCf(d){this.a=d},
eDb:function eDb(d){this.a=d},
eD3:function eD3(d){this.a=d},
eD_:function eD_(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD0:function eD0(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e){this.a=d
this.b=e},
eD1:function eD1(d,e){this.a=d
this.b=e},
eCX:function eCX(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDl:function eDl(d,e,f){this.a=d
this.b=e
this.c=f},
eDk:function eDk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDu:function eDu(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eE2:function eE2(d){this.a=d},
bc_:function bc_(d,e){this.b=d
this.a=e},
hMD(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hME(d,e){var w,v,u,t,s,r,q,p,o,n=B.ae("\\S+",!0,!1,!1,!1).kx(0,d),m=B.z(n,B.a2(n).k("G.E"))
if(m.length===0)return d
w=new B.f5("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.am(d,v,n)
p=m[r].b
p=A.a.am(d,n,p.index+p[0].length)
n=B.ae("[*~^]",!0,!1,!1,!1)
o=B.aJ(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.aX(d,v)
return n.charCodeAt(0)==0?n:n},
bwI(){var w=$.bvQ,v=$.OI
$.OI=v+1
return w+"_"+v},
i0(d,e,f,g,h,i,j){return C.ei(A.bf,!1,4279310375,A.az,"",i,24,A.bi,A.a4,"",h,C.bwI(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cd,D.eV,g,e,f)},
nx(d,e,f,g){var w=f*9
return C.i0(D.eF,d-f/2,e-w/32,f,w/16,g,0)},
hwC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvQ
p=$.OI
$.OI=p+1
w.push(new C.ey(q+"_"+p,D.eV,0,r,1,0.0016,"",24,A.a4,A.bi,A.az,k,A.bf,null,D.bc,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvQ
p=$.OI
$.OI=p+1
w.push(new C.ey(q+"_"+p,D.eV,o,0,0.004,1,"",24,A.a4,A.bi,A.az,k,A.bf,null,D.bc,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.nx(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nx(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i0(D.bc,0.08,0.08,0.5,0.003,v,0),C.i0(D.bc,0.58,0.08,0.004,0.06,v,0),C.i0(D.bc,0.58,0.14,0.34,0.003,v,0),C.i0(D.bc,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i0(D.bc,0.08,0.8,0.004,0.14,t,0),C.i0(D.bc,0.08,0.94,0.6,0.003,t,0),C.nx(0.58,0.08,0.05,e),C.nx(0.92,0.22,0.05,e),C.nx(0.08,0.8,0.05,f),C.nx(0.68,0.94,0.05,f),C.nx(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i0(D.kK,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i0(D.kK,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i0(D.kK,0.7,0.8,0.22,0.12,w|1140850688,0),C.i0(D.kK,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nx(0.5,0.5,1.5,w|335544320),C.nx(0.5,0.5,1.15,w|402653184),C.nx(0.5,0.5,0.8,v|436207616),C.nx(0.95,0.05,0.4,v|855638016),C.nx(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nx(0.85,0.08,0.7,w|1140850688),C.nx(0.1,0.35,0.5,v|855638016),C.nx(0.9,0.62,0.55,v|771751936),C.nx(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i0(D.bc,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i0(D.bc,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i0(D.bc,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i0(D.bc,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nx(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nx(0.5,0.2,0.65,(w|3422552064)>>>0),C.nx(0.5,0.2,0.95,w|855638016),C.i0(D.bc,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i0(D.bc,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i0(D.jp,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i0(D.jp,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i0(D.jp,0.15,0.86,0.6,0.14,1712265002,0),C.nx(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cEm[n]
u=A.o.G(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvQ
l=$.OI
$.OI=l+1
w.push(new C.ey(m+"_"+l,D.eV,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bi,A.az,k,A.bf,null,D.eF,q,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.nx(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i0(D.jp,0.35,-0.1,0.3,0.62,w|855638016,0),C.i0(D.jp,0.05,-0.1,0.3,0.55,v,-0.5),C.i0(D.jp,0.65,-0.1,0.3,0.55,v,0.5),C.nx(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i0(D.bc,0.06,0.04,0.88,0.002,e,0),C.i0(D.bc,0.06,0.96,0.88,0.002,e,0),C.i0(D.bc,0.06,0.04,0.004,0.92,e,0),C.i0(D.bc,0.936,0.04,0.004,0.92,e,0),C.i0(D.bc,0.09,0.07,0.82,0.001,w,0),C.i0(D.bc,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i0(D.jq,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i0(D.jq,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i0(D.jq,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i0(D.bc,0,0,0.3,0.09,w|1140850688,0),C.i0(D.bc,0.7,0.9,0.3,0.1,v|1426063360,0),C.i0(D.bc,0.82,0.04,0.12,0.07,w|771751936,0),C.i0(D.bc,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i0(D.eF,0.62,0.02,0.5,0.16,v,0.6),C.i0(D.eF,0.78,0.12,0.4,0.12,u,0.9),C.i0(D.eF,-0.12,0.8,0.5,0.16,u,-0.6),C.i0(D.eF,-0.05,0.9,0.4,0.12,v,-0.9),C.nx(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i0(D.bc,0.09,0.12,0.16,0.006,e,0),C.i0(D.bc,0.05,0.03,0.9,0.001,w,0),C.i0(D.bc,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hJ9(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvQ=j
$.OI=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fgs()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ei(A.bf,!1,n,A.az,"ngmy_quote_background",m,24,A.bi,A.a4,"",1,C.bwI(),g,"","",0,!1,"",0,D.bc,l,2,"",0,0,"",D.cd,D.l5,1,0,0))
if(a9)A.d.v(q,C.hwC(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ae("[*~^]",!0,!1,!1,!1)
p=C.hMD(B.aJ(w,p,""))
o=A.a.t(w,B.ae("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fgr(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cx,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.ei(A.bf,!1,n,A.az,"ngmy_quote_logo",m,24,A.bi,A.a4,a1,a3*9/16,C.bwI(),a0,"","",0,!1,a2,0,D.bc,l,2,"",0,0,"",D.cd,D.l5,a3,a4,a5))
return C.qT(s,r,0,0,q,j+"_slide",D.pp,"","","",D.db)},
qS:function qS(d,e){this.a=d
this.b=e},
lN:function lN(d,e,f,g,h,i,j,k,l,m){var _=this
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
fgs:function fgs(){},
fgr:function fgr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hmP(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b4(u.a(w.h(d,"extras")),new C.c98(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bQ()
w=w.h(d,"request")
return new C.yB(u,t,s,B.t(w==null?"":w))},
fo7(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fo7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fZl){w=1
break}$.fZl=!0
t=4
w=7
return B.b(B.ax(),$async$fo7)
case 7:r=e
q=B.aS(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aE(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jk(p),k=k.gah(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hmP(m)
if(l!=null)J.ch(n,l)}$.BC.ce(0,B.t(o.a),new C.fo8(n))}C.fGM()
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
return B.i($async$fo7,v)},
fGM(){var w,v=new B.Q(Date.now(),0,!1).bN(-12e8)
for(w=new B.dv($.BC,$.BC.r,$.BC.e);w.C();)J.n2(w.d,new C.f61(v))
$.BC.bm($.BC,new C.f62())},
aL8(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aL8=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aL8)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cQ($.BC,B.a2($.BC).k("cQ<1,2>")).gah(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.ch(p,B.E(["at",g.a.a4().ab(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.R.al(n,null)),$async$aL8)
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
return B.i($async$aL8,v)},
hNe(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fGM()
w=$.BC.ce(0,d,new C.foa())
v=Date.now()
u=B.z(e,B.a2(e).k("cl.E"))
J.p1(w,0,new C.yB(new B.Q(v,0,!1),f,u,g))
C.aL8()},
hNb(d){var w,v=$.BC.h(0,d)
if(v==null||J.cj(v))return
w=J.cA(v)
w.cu(v,0)
if(w.gai(v))$.BC.W(0,d)
C.aL8()},
yB:function yB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c98:function c98(){},
fo8:function fo8(d){this.a=d},
f61:function f61(d){this.a=d},
f62:function f62(){},
foa:function foa(){},
hNg(d){return A.d.dI(D.uY,new C.fod(d),new C.foe())},
hmN(d){var w
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
hmM(d){var w
switch(d.a){case 0:w=D.agj
break
case 1:w=A.xa
break
case 2:w=A.aho
break
case 3:w=I.ag_
break
case 4:w=A.agO
break
case 5:w=A.lv
break
default:w=null}return w},
hzq(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nx[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nx[w]
if(!B.dp(v.toLowerCase(),t,0))u=B.dp(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hmO(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=B.T(u,t)
q.m(0,"kind",r.a)
q.m(0,"title",r.b)
q.m(0,"subtitle",r.c)
q.m(0,"bullets",r.d)
q.m(0,"notes",r.e)
q.m(0,"emoji",r.f)
q.m(0,"icon3d",r.r)
q.m(0,"image_query",r.w)
p=r.x
if(p>0)q.m(0,"picture",p)
o.push(q)}return A.R.al(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hNc(d,e,f,g,h){var w=new B.J(D.uY,new C.fo6(),x.eC).aF(0,", "),v=""+d,u=C.h3D(h),t=F.fhR(h),s=C.h_Y(g),r=e.t(0,D.Gm)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Gn)?'- New slides get an "icon3d" from: '+A.d.aF(D.Nx,", ")+".\n":"",p=e.t(0,D.Bi)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hNd(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.uY,new C.fo9(),x.eC).aF(0,", "),p=new B.f5("")
if(e.t(0,D.Gm)){p.a=s
w=s}else w=""
if(e.t(0,D.Gn))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aF(D.Nx,", ")+".\n")
if(e.t(0,D.Bi))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h3D(d)
v=F.fhR(d)
u=C.h_Y(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aeQ(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BZ(a3,"{"),a5=J.fzi(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.JQ(a3,a4,a5+1)
try{w=A.R.aE(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cj(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b4(p.a(J.q(t,a2)),new C.fm6(),m).bZ(0,new C.fm7())
k=B.z(l,l.$ti.k("G.E"))}else k=B.a([],n)
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
f=C.hzq(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c4(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a60(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.aa(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fj(u).b:q))
p=A.d.ba(D.uY,new C.fm8(r))?r:a7
o=C.f5g(J.q(w,"logo_frame"),D.AG)
n=C.f5g(J.q(w,"logo_ring"),D.AB)
m=C.f5g(J.q(w,"photo_frame"),D.AG)
l=C.f5g(J.q(w,"photo_ring"),D.AB)
return new C.aoD(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_G(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h2L(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Bj),f7=f6?C.htp():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eX()
v.dQ(f7.w+1)
u=f7.a
t=B.bj(u.b,!0,x.dL)
A.d.fw(t,v)
s=u.c
s=new C.nl("luxe",u.a,A.lv,t,u.e,u.f,B.a([s,u.d,s],x.t),D.db)
w=s}if(w==null)w=C.hNg(f9.b)
r=g2.t(0,D.a1x)||f6
q=g2.t(0,D.Gm)
p=g2.t(0,D.Pp)
o=new C.fgw()
n=B.a([],x.g)
m=new C.fgz(o,w,r)
l=new C.fgy(o,r)
k=new C.fgx(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.ba(u,new C.fgv(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.G(b1,a3.length)]
b4=A.o.G(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.G(b1,5)
b9=D.cFO[b8]
c0=D.cEP[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eqa.t(0,b2.a)){c7=b0+1
c5=g8[A.o.G(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eF,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eF,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eF,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mc,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pq,500,f2,f0))
c1.push(l.$8$fx$key(D.bc,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Pm
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eF,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kK,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bc,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Bg
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eF,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eF,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mc,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cx,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pq,500,f2,f0))
d3=D.mb
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eF,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bc,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tn:D.cd
c1.push(new C.ey(b4,D.a1v,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bi,A.az,4279310375,A.bf,e4,D.bc,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mb
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eF,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eF,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mc,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pq,450,f2,f0))
c1.push(l.$8$fx$key(D.bc,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Pm
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eF,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eF,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bc,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bc,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aF(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Gk,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mb}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.db,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hv0(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.G(b1,b8.length)]}else b8=r?D.d1z[A.o.G(b1,6)]:s
n.push(new C.lr(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.AD(e4,e4,e4,e4,D.Bf,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.am(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fiV(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fiV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Bi)
n=e.t(0,D.Gn)
if(!o&&!n){u=D.a0u
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fiY(o,s[r],n,$.hye,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iD(t,x.e),$async$fiV)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.m(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fiV,v)},
fhU(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fhU=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hNd(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aKv(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fhU)
case 3:u=s.aKQ(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fhU,v)},
byj(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$byj=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aZ(x.N)
for(s=B.ef(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.hNe(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aeQ(i,"colorful")
t=C.hNc(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aKv(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hc),$async$byj)
case 3:u=o.aKQ(m,f,h,g,D.dFp,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byj,v)},
aKv(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aKv=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uG(null,""),$async$aKv)
case 3:n=i
if(A.a.i(n).length===0)throw B.R("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mJ(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qi(t,d,g,null),$async$aKv)
case 7:q=i
p=q.b
if(p!=null){o=C.aeQ(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.R(s!=null&&B.Jw(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aKv,v)},
aKQ(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKQ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Bi)||e.t(0,D.Gn)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d7(e,x.Q)
t.W(0,D.Bi)}w=6
return B.b(C.fiV(d,t),$async$aKQ)
case 6:s=k
w=4
break
case 5:s=D.a0u
case 4:t=d.c
w=A.d.ba(t,new C.f_d())?7:9
break
case 7:r=$.h4v
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aKQ)
case 10:q=k
p=q!=null?A.R.al(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h2L(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hmO(new C.aoD(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("J<1,n>")
t=B.z(new B.J(m,new C.f_e(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jC<cl.E,n>")
t=B.z(new B.jC(e,new C.f_f(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.Pp)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKQ,v)},
fJo(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aZ(x.Q)
for(v=0;v<6;++v){u=D.a_p[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
hR6(d){return B.c2(A.K,null,new C.fwJ(),d,!0,!0,!0,null,!1,!1,x.I)},
hu0(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcs().aG(d)},
hR5(d,e,f){return B.c2(A.K,null,new C.fwI(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fJp(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fJq(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
f5g(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.ba(e,new C.f5h(w))?w:""},
h_Y(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h4t(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aeQ(a1==null?"":a1,a0),a3=C.aeQ(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.U
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.U(r).k("a4<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qE(new B.a4(r,new C.fof(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("G.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.A(m.b,l.b),new B.A(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.A(j[h],i[h]))
k.push(new B.A(m.e,l.e))
g=B.z(new B.a4(k,new C.fog(),v),r)
A.d.aZ(g,new C.foh())
if(g.length===0)continue
f=new C.foi(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hNx(d){var w=d.toLowerCase(),v=B.ae("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAU
v=B.ae("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dHk
v=B.ae("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dHl
return null},
h_y(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bw(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hNh(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nE
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cN)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.h_y(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.h_y(n,i,v,u))if(n.w>10){f=h+1
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
hNf(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aeQ(o,"colorful")
if(n==null)throw B.R("That earlier version could not be read.")
w=B.aZ(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_p[r]
if(q.b===s)w.K(0,q)}}v=C.fJp(e)
u=C.fJq(e)
p=C.h2L(n,D.a0u,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("J<1,n>")
o=B.z(new B.J(o,new C.fob(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jC<cl.E,n>")
o=B.z(new B.jC(w,new C.foc(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.Pp)
return p},
hQS(d,e,f){return B.c2(A.K,null,new C.fvU(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
htp(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eX()
s.dQ(t)
w=D.ckv[s.aB(10)]
v=new C.e21(s)
u=x.N
return new C.e20(w,s.aB(4),J.fj(v.$1$2(D.cJW,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.cYF,2+s.aB(2),u),v.$1$2(D.cSz,2,u),v.$1$2(D.d0f,4,x.fP),t)},
hv0(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eX()
a1.dQ(a5.w+a3*13)
w=new C.eWL(a4)
v=new C.eWN(a4,d)
u=new C.eWM(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cN){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.G(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eF,0.1+a1.ae()*0.45,0.05+a1.ae()*0.3,0.45,0.75,C.a_G(a0,52),"lux_spot",a5.vH(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bc,0,0,1,1,0,"lux_back",a5.vH(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bc,0,0,1,1,0,"lux_back2",a5.aBo(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.022,0.038,0.956,0.924,0,g,a5.vH(0,f),D.db,150,C.a_G(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.018,0.032,0.964,0.936,0,g,a5.vH(0,f),D.db,120,C.a_G(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.db,260,C.a_G(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bc,0,0,1,1,0,"lux_filigree",a5.vH(0,"filigree"),D.db,200))
break
default:a2.push(w.$10$anim$delay(D.bc,0.08,0.06,0.84,0.004,C.a_G(a0,208),"lux_rule",a5.aBo(0,"shimmer",r),D.tm,150))
a2.push(w.$10$anim$delay(D.bc,0.08,0.936,0.84,0.004,C.a_G(a0,144),"lux_rule2","",D.Gk,220))}l=!A.d.ba(a2,new C.eWK())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vH(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vH(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_G(r,242)
j=a5.vH(0,"orbit")
i=s===D.bc?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pq,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eF,t-0.007,0.9495,0.014,0.025,C.a_G(r,242),"lux_g2",a5.vH(0,"orbit"),D.pq,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bc,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fF(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.bc,0,0,1,1,0,"lux_velvet",a5.vH(0,"velvet")))},
nl:function nl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fod:function fod(d){this.a=d},
foe:function foe(){},
vf:function vf(d,e){this.a=d
this.b=e},
a60:function a60(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoD:function aoD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fo6:function fo6(){},
fo9:function fo9(){},
fm6:function fm6(){},
fm7:function fm7(){},
fm8:function fm8(d){this.a=d},
fgw:function fgw(){},
fgz:function fgz(d,e,f){this.a=d
this.b=e
this.c=f},
fgy:function fgy(d,e){this.a=d
this.b=e},
fgx:function fgx(d,e){this.a=d
this.b=e},
fgv:function fgv(d){this.a=d},
fiY:function fiY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiW:function fiW(d){this.a=d},
fiX:function fiX(d){this.a=d},
f_d:function f_d(){},
f_e:function f_e(){},
f_f:function f_f(){},
fwJ:function fwJ(){},
Zu:function Zu(d){this.a=d},
aEy:function aEy(d,e,f,g,h){var _=this
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
eJY:function eJY(d,e,f){this.a=d
this.b=e
this.c=f},
eJZ:function eJZ(d,e){this.a=d
this.b=e},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJX:function eJX(d,e){this.a=d
this.b=e},
eJV:function eJV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eJQ:function eJQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eJU:function eJU(d,e){this.a=d
this.b=e},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJT:function eJT(d,e){this.a=d
this.b=e},
eJO:function eJO(d,e){this.a=d
this.b=e},
eJR:function eJR(d){this.a=d},
eJS:function eJS(d,e){this.a=d
this.b=e},
eJE:function eJE(d,e){this.a=d
this.b=e},
eJF:function eJF(d,e){this.a=d
this.b=e},
eJH:function eJH(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJJ:function eJJ(d){this.a=d},
eJK:function eJK(d){this.a=d},
eJG:function eJG(d,e){this.a=d
this.b=e},
eJL:function eJL(d,e){this.a=d
this.b=e},
eKb:function eKb(d){this.a=d},
eKc:function eKc(d){this.a=d},
eKa:function eKa(d){this.a=d},
eKd:function eKd(d){this.a=d},
eK9:function eK9(d){this.a=d},
eKf:function eKf(d){this.a=d},
eK8:function eK8(d,e){this.a=d
this.b=e},
eKg:function eKg(d){this.a=d},
eK7:function eK7(d,e){this.a=d
this.b=e},
eKh:function eKh(d){this.a=d},
eK6:function eK6(d){this.a=d},
eKi:function eKi(d){this.a=d},
eK5:function eK5(d,e){this.a=d
this.b=e},
eKj:function eKj(d){this.a=d},
eK4:function eK4(d,e){this.a=d
this.b=e},
eKk:function eKk(d){this.a=d},
eK3:function eK3(d){this.a=d},
eKl:function eKl(d,e){this.a=d
this.b=e},
eK2:function eK2(d,e){this.a=d
this.b=e},
eKm:function eKm(d){this.a=d},
eKe:function eKe(d){this.a=d},
eK1:function eK1(d,e){this.a=d
this.b=e},
eJM:function eJM(d,e,f){this.a=d
this.b=e
this.c=f},
eJN:function eJN(d,e,f){this.a=d
this.b=e
this.c=f},
eK0:function eK0(d,e){this.a=d
this.b=e},
eK_:function eK_(d,e){this.a=d
this.b=e},
fwI:function fwI(d,e){this.a=d
this.b=e},
Zt:function Zt(d,e,f){this.c=d
this.d=e
this.a=f},
aEx:function aEx(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eJx:function eJx(d){this.a=d},
eJy:function eJy(d){this.a=d},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJA:function eJA(d){this.a=d},
eJB:function eJB(d){this.a=d},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJD:function eJD(d,e){this.a=d
this.b=e},
f5h:function f5h(d){this.a=d},
aYW:function aYW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB9:function aB9(d,e,f){this.c=d
this.d=e
this.a=f},
bgA:function bgA(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
e23:function e23(d){this.a=d},
e22:function e22(){},
bec:function bec(d,e){this.b=d
this.a=e},
fof:function fof(d){this.a=d},
fog:function fog(){},
foh:function foh(){},
foi:function foi(d){this.a=d},
apc:function apc(d,e){this.a=d
this.b=e},
fob:function fob(){},
foc:function foc(){},
fvU:function fvU(d,e){this.a=d
this.b=e},
XR:function XR(d,e,f){this.c=d
this.d=e
this.a=f},
ayC:function ayC(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dbp:function dbp(d){this.a=d},
dbq:function dbq(d){this.a=d},
dbr:function dbr(d,e){this.a=d
this.b=e},
dbu:function dbu(d){this.a=d},
dbv:function dbv(d,e){this.a=d
this.b=e},
dbt:function dbt(d,e){this.a=d
this.b=e},
dbw:function dbw(d){this.a=d},
dbs:function dbs(d,e){this.a=d
this.b=e},
boR:function boR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e20:function e20(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e21:function e21(d){this.a=d},
eWL:function eWL(d){this.a=d},
eWN:function eWN(d,e){this.a=d
this.b=e},
eWM:function eWM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWK:function eWK(){},
aJ3:function aJ3(){},
fIe(d){var w,v,u
try{w=A.R.aE(0,d,null)
if(x.f.b(w)){v=B.v7(B.a_(w,x.N,x.z))
return v}}catch(u){}return null},
aYS:function aYS(d,e,f){this.c=d
this.d=e
this.a=f},
bid:function bid(d,e){this.c=d
this.a=e},
hJC(d){return A.d.dI(D.Fq,new C.fhD(d),new C.fhE())},
hJD(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aX(t,6)
if(w.length===0)return null
v=new B.a4(D.Fq,new C.fhF(w),x.b4)
if(!v.gah(0).C())return null
u=v.gL(0)
return new C.jt("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kX:function kX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fhD:function fhD(d){this.a=d},
fhE:function fhE(){},
fhF:function fhF(d){this.a=d},
mx(d,e,f,g,h){return new C.Dv(f,g,d)},
hwa(d){var w=d.z,v=B.U(w).k("a4<1>")
w=B.z(new B.a4(w,new C.eYK(),v),v.k("G.E"))
d.z=w
d.x=""},
dr(d,e){var w=$.IW
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
ds(d,e,f,g,h,i,j,k,l){return C.ei(A.bf,!1,4279310375,A.az,"",d,24,A.bi,A.a4,"",e,"design_"+C.cy(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cd,D.eV,j,k,l)},
h2y(d,e){var w
C.hwa(d)
w=A.d.dI($.bAg(),new C.fft(e),new C.ffu())
$.IW=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.IW=""}d.z=B.bj(d.z,!0,x.F)},
Dv:function Dv(d,e,f){this.a=d
this.b=e
this.e=f},
eYK:function eYK(){},
fnI:function fnI(){},
fnJ:function fnJ(){},
fnK:function fnK(){},
fnV:function fnV(){},
fo_:function fo_(){},
fo0:function fo0(){},
fo1:function fo1(){},
fo2:function fo2(){},
fo3:function fo3(){},
fo4:function fo4(){},
fo5:function fo5(){},
fnL:function fnL(){},
fnM:function fnM(){},
fnN:function fnN(){},
fnO:function fnO(){},
fnP:function fnP(){},
fnQ:function fnQ(){},
fnR:function fnR(){},
fnS:function fnS(){},
fnT:function fnT(){},
fnU:function fnU(){},
fnW:function fnW(){},
fnX:function fnX(){},
fnY:function fnY(){},
fnZ:function fnZ(){},
fft:function fft(d){this.a=d},
ffu:function ffu(){},
iM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ei(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bc,4280172719,2,m,n,0,"",o,D.cN,p,q,r)},
BS(d,e,f,g,h,i,j,k,l){return C.ei(A.bf,!1,4279310375,A.az,"",d,24,A.bi,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cd,D.eV,j,k,l)},
bz0(){var w=new B.Q(Date.now(),0,!1)
return A.i3[B.bC(w)-1]+" "+B.bO(w)+", "+B.bw(w)},
ek:function ek(d,e,f){this.a=d
this.b=e
this.c=f},
bws(d){return new B.iH((A.o.az(d,24)&255)/255,(A.o.az(d,16)&255)/255,(A.o.az(d,8)&255)/255,(d&255)/255)},
hB1(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.akt(A.cw.aG(A.d.gaj(d.split(","))))
return w}catch(v){return null}},
hB5(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f53(),x.dv).aF(0,"\n")},
hB4(d){switch(d.a){case 2:return A.mU
case 1:case 5:return A.eAt
default:return A.QJ}},
hAZ(d){switch(d.a){case 2:return A.tX
case 1:case 5:return A.Sq
default:return A.a6d}},
hB2(d,e){var w,v=null,u=d.ay,t=A.o.az(u,24),s=A.o.az(d.ch,24),r=(t&255)===0?v:C.bws(u),q=(s&255)===0?v:C.bws(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n4(q,p,A.kn)
w=new B.p2(t,t,t,t)}switch(d.ax.a){case 1:return B.lf(v,v,v,new B.kl(r,w,v,A.a7r,v),v,v,v,v)
case 4:return u?new B.fI(v,v,v):B.we(B.lf(v,v,q,v,p+0.4,v,v,v))
default:return B.lf(v,v,v,new B.kl(r,w,B.uM(4),A.hu,v),v,v,v,v)}},
hB0(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eV?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hAZ(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hB5(d)
t=C.bws(d.Q)
s=d.x.a>=700?A.ed:A.us
r=d.y===A.cx?A.wN:A.aeT
q=d.z
p=new B.C1(w,l,l,B.f1(u,l,l,l,B.fY(l,t,1===q.a?A.aJu:A.aJt,l,l,l,l,l,l,A.dm,l,l,v,r,s,l,!0,l,l,l,l),C.hB4(d.as)))
break
case 1:case 4:o=C.hB1(d.at)
n=i===D.l5&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.we(B.f1(w,l,l,l,B.fY(l,A.qM,l,l,l,l,l,l,l,A.dm,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gr(o,n?A.a7n:A.SM,l,l)
break
case 3:w=new B.n4(A.GD,1,A.kn)
u=B.uM(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lf(A.tX,B.f1(t,l,l,l,B.fY(l,D.dRF,l,l,l,l,l,l,l,A.dm,l,l,11,l,A.ed,l,!0,l,l,l,l),A.mU),l,new B.kl(E.aBZ,new B.p2(w,w,w,w),u,A.hu,l),l,l,l,l)
break
case 2:p=C.hB2(d,e)
break
case 5:p=C.hB_(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fVr(-w,p)
w=i===D.cN
if(w){m=A.o.az(d.Q,24)&255
if(m<255)p=new B.apW(m/255,p)}if(w)return new F.vm(k,l,j,l,new B.Qu(new B.kk(g,g,f,1/0),p))
if(i===D.kJ){i=new B.n4(A.GD,1,A.kn)
i=B.lf(A.tX,p,l,new B.kl(A.op,new B.p2(i,i,i,i),B.uM(4),A.hu,l),l,l,D.bkH,l)}else i=p
return new F.vm(k,l,j,l,new B.fI(g,f,i))},
hB3(d,e,f,g){var w,v=null,u=C.bws(d.e),t=d.f
t=B.a([F.fU5(t!=null?B.lf(v,v,v,new B.kl(v,v,v,A.hu,new B.aTq(E.Sr,A.a67,B.a([u,C.bws(t)],x.cR),v)),v,v,v,v):B.lf(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f52(f,g),B.U(w).k("J<1,f6>")))
return F.clD(t)},
fJs(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fJs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2g(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.UI(A.v9,A.GA,D.blN,null,null,null,!1,null)
o=new B.AJ(o,new C.foo(607,787,p,d))
o.L5(n,null)
r.push(o)}u=n.jD(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJs,v)},
hB_(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fIe(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagV()
if(h==null)h=A.as0
j=B.rQ(4279308564)
w=B.uM(18)
v=new B.n4(B.rQ(4287531653),3,A.kn)
u=i.length===0?"My links":i
u=B.a([B.we(B.f1(u,m,m,m,B.fY(m,A.op,m,m,m,m,m,m,m,A.dm,m,m,12,m,A.ed,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.we(B.f1(A.a.i(l.c),m,m,m,D.eHi,m)))
u.push(new B.fI(m,8,m))
for(t=B.df(h,0,B.dK(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bU(t,t.gJ(0),s.k("bU<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rQ(4280690220)
o=new B.a7e(8,8)
n=A.a.i(r.b)
u.push(new B.nm(D.beY,new C.au5(new C.afR(q),B.lf(m,B.f1(n.length===0?A.a.i(r.c):n,m,m,m,D.eJr,A.mU),m,new B.kl(p,m,new B.agi(o,o,o,o),A.hu,m),m,m,D.bl6,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.we(B.f1(k,m,m,m,D.eIL,m))
u.push(new C.au5(C.hb5(k),t))}return B.lf(m,B.xY(u,A.Jz,A.l4),m,new B.kl(j,new B.p2(v,v,v,v),w,A.hu,m),m,m,D.bfO,m)},
f53:function f53(){},
f52:function f52(d,e){this.a=d
this.b=e},
foo:function foo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeD(d){var w,v
for(w=0;w<32;++w){v=D.Fh[w]
if(v.a===d)return v}return null},
fY1(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aG(A.a.aX(d,u+1))
return w}catch(v){return null}},
cP(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h5D(d,e){return B.a8(d,!1).cp(B.eD(new C.fux(e),!0,null,x.fB))},
h5C(d,e){return B.c2(A.K,null,new C.fuw(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iQ:function iQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dm:function Dm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LR:function LR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfX:function bfX(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
dLN:function dLN(d){this.a=d},
dLM:function dLM(d,e,f){this.a=d
this.b=e
this.c=f},
dLL:function dLL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnr:function bnr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIL:function eIL(d,e){this.a=d
this.b=e},
bb5:function bb5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWN:function aWN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3I:function c3I(){},
c3J:function c3J(d){this.a=d},
c3K:function c3K(d,e,f){this.a=d
this.b=e
this.c=f},
c3L:function c3L(d,e,f){this.a=d
this.b=e
this.c=f},
fux:function fux(d){this.a=d},
Xp:function Xp(d,e){this.c=d
this.a=e},
ax2:function ax2(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d0U:function d0U(d,e,f){this.a=d
this.b=e
this.c=f},
d0Z:function d0Z(d){this.a=d},
d1_:function d1_(d){this.a=d},
d0Y:function d0Y(d){this.a=d},
d10:function d10(d){this.a=d},
d0X:function d0X(d,e){this.a=d
this.b=e},
d11:function d11(d){this.a=d},
d0W:function d0W(d){this.a=d},
d12:function d12(d){this.a=d},
d0V:function d0V(d,e){this.a=d
this.b=e},
d13:function d13(d,e){this.a=d
this.b=e},
fuw:function fuw(d){this.a=d},
fuv:function fuv(d){this.a=d},
fuu:function fuu(d,e,f){this.a=d
this.b=e
this.c=f},
fut:function fut(d,e){this.a=d
this.b=e},
aIx:function aIx(){},
hR4(d){return B.c2(A.K,null,new C.fwH(),d,!0,!0,!0,null,!1,!1,x.N)},
fwH:function fwH(){},
XK:function XK(d){this.a=d},
bcz:function bcz(d){this.d=d
this.c=this.a=null},
d7p:function d7p(d){this.a=d},
d7q:function d7q(d,e){this.a=d
this.b=e},
d7r:function d7r(d){this.a=d},
hxA(d){var w,v=d.split("@")
if(v.length>1){w=B.c4(v[1],16)
if(w!=null)return B.aY(w)}return D.wg},
hLw(d){var w,v=A.d.gL(d.split("@"))
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
hLv(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hxA(d)
switch(q){case"shimmer":return B.nq(A.a6z,g,new C.fl4(p,A.k.G(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bbX(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e5(A.A,B.d8(C.fAz(g,B.a37(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bbE(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d8(B.et(A.A,e*0.5,B.e5(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.di()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fl(e)
u.mf(Math.sin(e)*0.3)
return B.dP(B.fp(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.am(A.W,r,A.b_,A.q,B.a([B.e1(B.b2(r,r,r,new C.bko(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.W,r,A.b_,A.q,B.a([B.e1(B.b2(r,r,r,new C.b6C(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.W,r,A.b_,A.q,B.a([B.e1(B.b2(r,r,r,new C.b6f(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.brb(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.boe(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bnn(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.baZ(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.A,r,A.a9,A.h,B.a([B.bX(0,B.e1(B.e5(A.A,B.bT(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bb),1.6+s*0.15,r,r),!0,r),0,0,0),B.et(A.A,s*0.06,B.e5(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fl4:function fl4(d,e){this.a=d
this.b=e},
bbX:function bbX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbE:function bbE(d,e,f){this.b=d
this.c=e
this.a=f},
bko:function bko(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6C:function b6C(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6f:function b6f(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brb:function brb(d,e,f){this.b=d
this.c=e
this.a=f},
boe:function boe(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnn:function bnn(d,e,f){this.b=d
this.c=e
this.a=f},
baZ:function baZ(d,e,f){this.b=d
this.d=e
this.a=f},
d0B:function d0B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wN:function wN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fl7(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kJ},
hLB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fl8())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gL(B.aNk(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hLA(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d9(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d9(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
aeg(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeg=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a4<1>")
e=B.z(new B.a4(a4,new C.fdv(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(A.dz,null,new C.fdw(e),d,!0,!0,!1,A.l6,!1,!1,x.N),$async$aeg)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fK3(d),$async$aeg)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.JG(d,"Search states\u2026","",A.jN,"Choose state"),$async$aeg)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fJ_(s)
if(p==null)p=A.d.gL(D.Oh)
f=C.cy()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cy()
m=p.e
l=C.fl9(p.d)
k=x.u
j=B.a([C.ei(A.bf,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cy(),l,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l5,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.BF(i,0.016,D.kK,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.BF(0,0.058,D.eF,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.BF(0,0.058,D.eF,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.J6("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.J6("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fG5(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvW("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_h("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_h("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_h("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_h("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvW("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.BF(m,0.082,D.bc,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cy()
k.push(C.ei(A.bf,!1,i,A.az,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bi,A.cq,"",0.074,g,null,"","",0,!1,"",0,D.bc,4280172719,2,y.O,0,0,"",D.cd,D.cN,0.78,0.11,0.388))
A.d.v(k,C.fG5(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvW("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fZY("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fZY("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_h("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_h("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvV("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvV("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvW("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.J6("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.J6("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvV("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvV("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvW("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_h("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvV("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_h("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fG5(0.22,0.83,0.56,4291404327,i),h)
h.push(C.J6("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.J6("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.AD(null,null,null,null,D.nE,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qT(m,null,0,0,j,n,D.pp,"","","Hati ya Ndoa",D.db)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeg,v)},
fl8:function fl8(){},
fdv:function fdv(){},
fdw:function fdw(d){this.a=d},
fdt:function fdt(d){this.a=d},
fdu:function fdu(d){this.a=d},
hAw(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hAv(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mg
case"lineThrough":return A.ym
default:return A.az}},
ei(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ey(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h1_(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.O4[w]
if(v.b===u)return v}return D.db},
hwZ(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cBR[w]
if(v.b===u)return v}return D.cN},
hDf(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cZe[w]
if(v.b===u)return v}return D.bc},
qT(d,e,f,g,h,i,j,k,l,m,n){return new C.lr(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fSQ(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hyT(d.h(0,"layout"))
t=B.aR(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aR(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.h1_(d.h(0,"transition"))
q=B.aR(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aR(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d5(n,x.f)
n=B.cz(n,new C.c95(),n.$ti.k("G.E"),x.F)
n=B.z(n,B.a2(n).k("G.E"))}return C.qT(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hyT(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ak0[w]
if(v.b===u)return v}return D.mb},
AD(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.Q(Date.now(),0,!1):a4
return new C.hT(p,t,a1,h,i,w,a0==null?B.a([C.qT(4294967295,null,0,0,null,C.cy(),D.pp,"","","",D.db)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
U8(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hvg(a6.h(0,"aspectRatio"))
t=B.aR(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bh(J.k(s==null?"":s))
if(s==null)s=new B.Q(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.ki(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ki(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aR(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aR(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.N(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b4(f,new C.c8T(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b4(e,new C.c8U(),x.N)
e=B.z(e,e.$ti.k("ai.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.d5(g,x.f)
g=B.cz(g,new C.c8V(),g.$ti.k("G.E"),x.bt)
g=B.z(g,B.a2(g).k("G.E"))}return C.AD(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qT(4294967295,a3,0,0,a3,C.cy(),D.pp,"","","",D.db)],x.g):g,v,p,o,s)},
ki(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hvg(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cZZ[w]
if(v.b===u)return v}return D.Bf},
cy(){var w=Date.now(),v=$.iS
$.iS=v+1
return""+1000*w+"_"+v},
c9m(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.Bg){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,40,A.bi,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bc,m,2,o,0,0,"",D.cd,D.cN,0.84,0.08,0.3)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,20,A.bi,A.cq,"",0.12,u,p,"","",0,!1,"",0,D.bc,m,2,"Click to add subtitle",0,0,"",D.cd,D.cN,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,32,A.bi,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bc,m,2,o,0,0,"",D.cd,D.cN,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.bf,!0,f.e.l(),A.az,"",n,20,A.bi,A.cq,"",0.68,u,p,"","",0,!1,"",0,D.bc,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cd,D.cN,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bc,m,2,"Two Column Slide",0,0,"",D.cd,D.cN,0.88,0.06,0.06)
u=C.cy()
t=f.e
u=C.ei(A.bf,!0,t.l(),A.az,"",n,18,A.bi,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.bc,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cd,D.cN,0.42,0.06,0.22)
s=C.cy()
A.d.v(w,B.a([v,u,C.ei(A.bf,!0,t.l(),A.az,"",n,18,A.bi,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.bc,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cd,D.cN,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.K(d.z,C.ei(A.L,!1,4294967295,A.az,"",n,42,A.bi,A.u,"",0.2,C.cy(),p,"","",0,!1,"",0,D.bc,m,2,"Section Header",0,0,"",D.cd,D.cN,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bc,m,2,"Compare",0,0,"",D.cd,D.cN,0.88,0.06,0.06)
u=C.cy()
t=f.c
u=C.ei(A.bf,!1,l,A.az,"",t.j(0.12).l(),24,A.bi,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.bc,t.l(),2,"",0,0,"",D.cd,D.eV,0.42,0.06,0.22)
s=C.cy()
r=f.e
s=C.ei(A.bf,!1,r.l(),A.az,"",n,20,A.bi,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bc,m,2,"Option A",0,0,"",D.cd,D.cN,0.38,0.08,0.26)
q=C.cy()
t=C.ei(A.bf,!1,l,A.az,"",t.j(0.06).l(),24,A.bi,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.bc,t.j(0.5).l(),2,"",0,0,"",D.cd,D.eV,0.42,0.52,0.22)
q=C.cy()
A.d.v(w,B.a([v,u,s,t,C.ei(A.bf,!1,r.l(),A.az,"",n,20,A.bi,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bc,m,2,"Option B",0,0,"",D.cd,D.cN,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,36,A.bi,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bc,m,2,"TERM / QUESTION",0,0,"",D.cd,D.cN,0.8,0.1,0.12)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,22,A.bi,A.cq,"",0.35,u,p,"","",0,!1,"",0,D.bc,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cd,D.cN,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,28,A.bi,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bc,m,2,"Quiz Question",0,0,"",D.cd,D.cN,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.bf,!1,f.e.l(),A.az,"",n,20,A.bi,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.bc,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cd,D.cN,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,26,A.bi,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bc,m,2,"Worksheet / Assignment",0,0,"",D.cd,D.cN,0.88,0.06,0.04)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.bf,!1,f.e.l(),A.az,"",n,18,A.bi,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.bc,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cd,D.cN,0.88,0.06,0.16)],x.u))
break}},
hmY(d){return A.d.dI(D.a_6,new C.c9n(d),new C.c9o())},
hmV(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aE(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ch(v,C.U8(B.a_(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fCE(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.c9i(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bg<2>")
u=B.z(new B.bg(t,w),w.k("G.E"))
A.d.aZ(u,new C.c9h())
return u},
fST(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c9d()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
aoE(d){return C.hmT(d)},
hmT(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c9g()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0t(m),$async$aoE)
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
return B.b(B.ax(),$async$aoE)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aS(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.fSS.h(0,m))
n=C.fCE(C.fCE(j,r),o)
if(n.length===0){u=C.fST(C.fST(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoE,v)},
c9c(d){return C.hmS(d)},
hmS(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c9c=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$c9c)
case 7:r=f
q=r.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.ko(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aZ(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c9c,v)},
aYY(d,e){return C.hmU(d,e)},
hmU(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYY=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aYY)
case 6:s=g
q=s.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.aa(r)>500?J.JP(r,J.aa(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$aYY)
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
return B.i($async$aYY,v)},
U9(d,e){return C.hmW(d,e)},
hmW(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$U9=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.aa(a0)===0){w=1
break}p=$.fSR.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aoE(a3),$async$U9)
case 5:p=a6
case 4:w=6
return B.b(C.c9c(a3),$async$U9)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.m(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.m(0,l,i)}m=n.$ti.k("bg<2>")
l=m.k("a4<G.E>")
e=B.z(new B.a4(new B.bg(n,m),new C.c9j(o),l),l.k("G.E"))
A.d.aZ(e,new C.c9k())
$.fSR.m(0,a0,e)
n=B.U(e).k("J<1,a1<n,@>>")
n=B.z(new B.J(e,new C.c9l(),n),n.k("ai.E"))
r=A.R.al(n,null)
$.fSS.m(0,a0,r)
t=8
w=11
return B.b(B.af3(a0,r),$async$U9)
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
return B.b(B.ax(),$async$U9)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$U9)
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
return B.i($async$U9,v)},
Hi:function Hi(d,e){this.a=d
this.b=e},
aoC:function aoC(d,e){this.a=d
this.b=e},
u5:function u5(d,e){this.a=d
this.b=e},
m7:function m7(d,e){this.a=d
this.b=e},
hn:function hn(d,e){this.a=d
this.b=e},
ey:function ey(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lr:function lr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c96:function c96(){},
c97:function c97(){},
c95:function c95(){},
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
c8W:function c8W(){},
c8X:function c8X(){},
c8T:function c8T(){},
c8U:function c8U(){},
c8V:function c8V(){},
jt:function jt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9n:function c9n(d){this.a=d},
c9o:function c9o(){},
c9i:function c9i(d){this.a=d},
c9h:function c9h(){},
c9d:function c9d(){},
c9e:function c9e(){},
c9f:function c9f(){},
c9g:function c9g(){},
c9j:function c9j(d){this.a=d},
c9k:function c9k(){},
c9l:function c9l(){},
hLM(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.flH(e,v,d,B.aZ(w))
w.$1(new C.flD())
w.$1(new C.flE())
w.$1(new C.flF())
w.$1(new C.flG())
return v},
flH:function flH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flD:function flD(){},
flE:function flE(){},
flF:function flF(){},
flG:function flG(){},
aYV:function aYV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c91:function c91(d){this.a=d},
c90:function c90(){},
c92:function c92(){},
c93:function c93(d,e){this.a=d
this.b=e},
c94:function c94(d){this.a=d},
alS:function alS(d,e){this.c=d
this.a=e},
bfK:function bfK(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dz0:function dz0(){},
aIj:function aIj(){},
c99(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c99=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.H(x.q).f.P(D.exR)
u=!1
w=1
break}u=B.kG(!1,d,t,!1,null,A.a1z,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c99,v)},
hmQ(d){var w=A.d.bi(D.Fq,new C.c9a(d))
if(w<0)return!0
return w>=4},
hmR(d){var w=A.d.bi($.bAg(),new C.c9b(d))
if(w<0)return!0
return w>=5},
c9a:function c9a(d){this.a=d},
c9b:function c9b(d){this.a=d},
hNr(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xO()
$.pK().p8(t,new C.fow(s),!0)
u=B.a([B.CJ(v,A.pt,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eHL,v,v,v),A.h,v,v,new B.o(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.nt,v,v,v),v,v,4,v,4,v))}return new B.am(A.W,v,A.b_,A.q,u,v)},
fow:function fow(d){this.a=d},
hN2(){return C.fJl()},
hK0(){return C.byg()},
hM2(){return C.fJc()},
aMq(d,e,f){var w=0,v=B.j(x.H),u
var $async$aMq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fnB(d,f),$async$aMq)
case 5:w=1
break
case 4:if(d.e!=null)d.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aMq,v)},
fnB(d,e){var w=0,v=B.j(x.H),u
var $async$fnB=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bwt
if(u==null)u=e+".pdf"
w=2
return B.b(B.c2(A.K,null,new C.fnC(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fnB)
case 2:return B.h(null,v)}})
return B.i($async$fnB,v)},
fnC:function fnC(d,e){this.a=d
this.b=e},
abc:function abc(d,e,f){this.c=d
this.d=e
this.a=f},
ecd:function ecd(d,e){this.a=d
this.b=e},
ece:function ece(d,e){this.a=d
this.b=e},
ecf:function ecf(d,e){this.a=d
this.b=e},
ecg:function ecg(d){this.a=d},
abu:function abu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYU(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYT(g,m,f,d,e,h,l,k,j,o,i,null)},
h3S(d){return B.ck(new C.flC(d))},
fJn(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hNa(d){if(d===D.cd)return"None"
return C.fJn(d)},
bwZ(d,e,f,g){return C.hDm(d,e,f,g)},
hDm(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bwZ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a8(d,!0)
if($.fGo&&t.oP())t.eD()
$.fGo=!0
s.a=null
w=3
return B.b(B.hN(A.bg,!0,"Animation preview",d,new C.f7n(s,e,g,f),null,A.eK,!0,x.H),$async$bwZ)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fGo=!1
case 1:return B.h(u,v)}})
return B.i($async$bwZ,v)},
fxv(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fxv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bR,x.w).w.a.a*0.88,280,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fJn(f)+" Slide transition preview"
s=s?Ab.DJ:A.ug
w=3
return B.b(C.bwZ(d,s,new B.a5(t,t*0.56,B.bu(B.m(14),new C.aFW(f,null),A.ao),null),r),$async$fxv)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fxv,v)},
h3a(d,e,f){var w,v,u=null,t=A.co.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d8(f,t)
case 2:case 17:return B.dP(B.d8(f,t),new B.u((1-t)*48,0))
case 3:return B.dP(B.d8(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d8(f,t),new B.u(0,(1-t)*36))
case 5:return B.dP(B.d8(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e5(A.A,B.d8(f,t),0.5+t*0.5,u,u)
case 7:return B.e5(A.A,B.d8(f,t),1.4-t*0.4,u,u)
case 8:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fl((1-t)*1.2)
return B.fp(A.A,B.d8(f,t),u,w,!0)
case 9:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jz((1-t)*1.2)
return B.fp(A.A,B.d8(f,t),u,w,!0)
case 10:case 19:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.mf((1-t)*0.8)
v=0.6+t*0.4
w.ji(v,v,v,1)
return B.fp(A.A,B.d8(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d8(f,t),new B.u((1-t)*24,0))}},
bzN(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bzN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bR,x.w).w.a.a*0.88,300,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fJn(f)+" Element animation preview"
s=s?Ab.DJ:A.ug
w=3
return B.b(C.bwZ(d,s,new B.a5(t,t*0.62,B.bu(B.m(14),new C.awO(f,null),A.ao),null),r),$async$bzN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bzN,v)},
hN9(d){var w,v,u,t,s=$.adM.W(0,d)
if(s!=null){$.adM.m(0,d,s)
return s}w=A.cw.aG(A.a.aX(d,A.a.cP(d,",")+1))
$.adM.m(0,d,w)
v=$.fHa=$.fHa+w.length
u=B.a2($.adM).k("cu<1>")
for(;;){if(!(v>41943040&&$.adM.a>1))break
t=new B.cu($.adM,u).gah(0)
if(!t.C())B.b9(B.fz())
v-=$.adM.W(0,t.gT(0)).length
$.fHa=v}return w},
hMR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ae("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kx(0,d),j=B.z(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.am(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cW,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QW(s,A.u))
v.push(new B.es(n,l,l,A.cW,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QW(t,A.u))
v.push(new B.es(n,l,l,A.cW,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QW(u,A.cq))
v.push(new B.es(n,l,l,A.cW,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aX(d,r)
v.push(B.dl(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0s(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aQ($.Y().r,A.aq,n,n,B.a([],m))
m.E(new B.ky(e))
return m
case"rounded":m=new B.aQ($.Y().r,A.aq,n,n,B.a([],m))
w=e.ge8()*0.18
m.E(new B.iO(B.bF(e,new B.b1(w,w))))
return m
case"triangle":m=new B.aQ($.Y().r,A.aq,n,n,B.a([],m))
m.E(new B.b5(e.gbO().a,e.b))
w=e.d
m.E(new B.ao(e.c,w))
m.E(new B.ao(e.a,w))
m.E(new B.bE())
return m
case"hexagon":w=$.Y()
m=B.a([],m)
v=new B.aQ(w.r,A.aq,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ao(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.E(new B.bE())
return v
case"diamond":m=new B.aQ($.Y().r,A.aq,n,n,B.a([],m))
m.E(new B.b5(e.gbO().a,e.b))
m.E(new B.ao(e.c,e.gbO().b))
m.E(new B.ao(e.gbO().a,e.d))
m.E(new B.ao(e.a,e.gbO().b))
m.E(new B.bE())
return m
case"arch":m=new B.aQ($.Y().r,A.aq,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ao(w,p))
m.b5e(new B.u(t,p),new B.b1(s,s))
m.E(new B.ao(t,u))
m.E(new B.bE())
return m
default:m=new B.aQ($.Y().r,A.aq,n,n,B.a([],m))
m.E(new B.nH(e))
return m}},
fjc(d,e,f){return B.ck(new C.fjd(D.eqz.t(0,d),d,f,e))},
aYT:function aYT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c9_:function c9_(d){this.a=d},
c8Z:function c8Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8Y:function c8Y(){},
aYQ:function aYQ(d,e){this.b=d
this.a=e},
flC:function flC(d){this.a=d},
flB:function flB(d,e){this.a=d
this.b=e},
f7n:function f7n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7l:function f7l(d){this.a=d},
f7m:function f7m(d,e){this.a=d
this.b=e},
aFW:function aFW(d,e){this.c=d
this.a=e},
bqI:function bqI(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eR4:function eR4(d,e,f){this.a=d
this.b=e
this.c=f},
aGy:function aGy(d,e){this.b=d
this.a=e},
Tb:function Tb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfU:function bfU(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dK_:function dK_(d){this.a=d},
dJZ:function dJZ(d){this.a=d},
dJY:function dJY(d){this.a=d},
Hh:function Hh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8S:function c8S(d){this.a=d},
c8R:function c8R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awO:function awO(d,e){this.c=d
this.a=e},
bat:function bat(){this.d=0
this.c=this.a=null},
cZ9:function cZ9(d){this.a=d},
cZ8:function cZ8(d){this.a=d},
a5J:function a5J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgy:function bgy(d,e){var _=this
_.d=null
_.bq$=d
_.a6$=e
_.c=_.a=null},
e1K:function e1K(d,e,f){this.a=d
this.b=e
this.c=f},
aWQ:function aWQ(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bbC:function bbC(d,e,f){this.b=d
this.c=e
this.a=f},
bmn:function bmn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eGv:function eGv(){},
fjd:function fjd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnk:function bnk(d,e,f){this.b=d
this.c=e
this.a=f},
aIw:function aIw(){},
aJ1:function aJ1(){},
aKm:function aKm(){},
fmC(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fmC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wn.c2().Kv(D.cXp,A.rQ,!0),$async$fmC)
case 3:r=e
if(r==null||J.cj(r.a)){u=null
w=1
break}t=J.fj(r.a)
s=t.c
if(s==null)throw B.R("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.R("That file is too big. Use a file under 8 MB.")
u=C.hML(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmC,v)},
hML(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a61(d,new B.Z5(A.cP.gcs().aG(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hEV(e)
if(A.a.i(w).length===0)throw B.R("No readable words were found in that Word file.")
return new C.a61(d,null,w.length>6e4?A.a.am(w,0,6e4):w)}w=A.c1.Jk(0,e,!0)
if(A.a.i(w).length===0)throw B.R("That file is empty.")
return new C.a61(d,null,w.length>6e4?A.a.am(w,0,6e4):w)},
hEV(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cr9().cBe(B.qD(d,A.hN,o,o),o,o,!1).cCU(0,"word/document.xml")
if(n==null)return""
w=n.cKB()
v=A.c1.Jk(0,w==null?$.h64():w,!0).split("</w:p>")
u=new B.f5("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ae("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kx(0,r)
p=A.a.i(B.cz(q,new C.faa(),B.a2(q).k("G.E"),t).fN(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a61:function a61(d,e,f){this.a=d
this.b=e
this.c=f},
faa:function faa(){},
hmX(d,e,f,g,h,i,j,k,l){return new C.Mh(l,e,d,g,f,i,h,j,k,null)},
Mh:function Mh(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBx:function aBx(d,e,f,g,h,i,j,k,l){var _=this
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
_.a6$=l
_.c=_.a=null},
eir:function eir(d){this.a=d},
eip:function eip(){},
eiq:function eiq(d){this.a=d},
eeP:function eeP(){},
eeQ:function eeQ(){},
eeR:function eeR(d,e){this.a=d
this.b=e},
egp:function egp(d){this.a=d},
egd:function egd(){},
ege:function ege(){},
eec:function eec(){},
ehx:function ehx(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
egn:function egn(d,e){this.a=d
this.b=e},
eia:function eia(d){this.a=d},
eib:function eib(){},
eic:function eic(){},
eid:function eid(d){this.a=d},
eie:function eie(){},
edB:function edB(d){this.a=d},
eio:function eio(){},
efw:function efw(d,e){this.a=d
this.b=e},
edz:function edz(d){this.a=d},
edA:function edA(d){this.a=d},
efT:function efT(d){this.a=d},
efU:function efU(d,e,f){this.a=d
this.b=e
this.c=f},
efV:function efV(d){this.a=d},
efv:function efv(){},
efu:function efu(d){this.a=d},
efs:function efs(){},
efr:function efr(d){this.a=d},
eft:function eft(){},
eeL:function eeL(d){this.a=d},
eeM:function eeM(d){this.a=d},
efC:function efC(d){this.a=d},
efx:function efx(d){this.a=d},
efy:function efy(d){this.a=d},
efz:function efz(d){this.a=d},
efA:function efA(d){this.a=d},
efB:function efB(d){this.a=d},
efD:function efD(d,e){this.a=d
this.b=e},
edD:function edD(){},
edE:function edE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efO:function efO(){},
efP:function efP(d,e){this.a=d
this.b=e},
efM:function efM(d,e,f){this.a=d
this.b=e
this.c=f},
efN:function efN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efG:function efG(d,e,f){this.a=d
this.b=e
this.c=f},
efH:function efH(d,e,f){this.a=d
this.b=e
this.c=f},
efI:function efI(d){this.a=d},
efJ:function efJ(d,e){this.a=d
this.b=e},
efK:function efK(d,e){this.a=d
this.b=e},
efL:function efL(d,e){this.a=d
this.b=e},
efF:function efF(d,e){this.a=d
this.b=e},
efR:function efR(d){this.a=d},
efS:function efS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efQ:function efQ(d){this.a=d},
eg8:function eg8(){},
eg9:function eg9(){},
ega:function ega(){},
egb:function egb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eg5:function eg5(d){this.a=d},
eg7:function eg7(){},
eg6:function eg6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eg3:function eg3(d,e,f){this.a=d
this.b=e
this.c=f},
eg4:function eg4(d,e){this.a=d
this.b=e},
egc:function egc(){},
efE:function efE(d,e){this.a=d
this.b=e},
edU:function edU(){},
edV:function edV(d,e,f){this.a=d
this.b=e
this.c=f},
edW:function edW(d){this.a=d},
edX:function edX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edT:function edT(d){this.a=d},
egi:function egi(d){this.a=d},
egh:function egh(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
egf:function egf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egj:function egj(d,e){this.a=d
this.b=e},
ecy:function ecy(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
edQ:function edQ(d){this.a=d},
egr:function egr(d,e,f){this.a=d
this.b=e
this.c=f},
edM:function edM(d,e){this.a=d
this.b=e},
edL:function edL(d){this.a=d},
egq:function egq(d,e,f){this.a=d
this.b=e
this.c=f},
edC:function edC(d){this.a=d},
eed:function eed(){},
ei8:function ei8(d,e){this.a=d
this.b=e},
ei9:function ei9(d,e,f){this.a=d
this.b=e
this.c=f},
ehy:function ehy(d,e,f){this.a=d
this.b=e
this.c=f},
ecz:function ecz(d){this.a=d},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecm:function ecm(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
eci:function eci(d,e){this.a=d
this.b=e},
eck:function eck(d,e){this.a=d
this.b=e},
edO:function edO(d){this.a=d},
edP:function edP(d,e){this.a=d
this.b=e},
edN:function edN(d){this.a=d},
ed0:function ed0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed5:function ed5(d,e){this.a=d
this.b=e},
ed6:function ed6(d){this.a=d},
ed3:function ed3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ed4:function ed4(d){this.a=d},
ed2:function ed2(){},
ed_:function ed_(d,e,f){this.a=d
this.b=e
this.c=f},
eg2:function eg2(d,e){this.a=d
this.b=e},
eih:function eih(d){this.a=d},
eii:function eii(d,e){this.a=d
this.b=e},
eij:function eij(d){this.a=d},
eik:function eik(d,e,f){this.a=d
this.b=e
this.c=f},
eig:function eig(d){this.a=d},
ehO:function ehO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehN:function ehN(d,e,f){this.a=d
this.b=e
this.c=f},
ehM:function ehM(){},
ehL:function ehL(d,e,f){this.a=d
this.b=e
this.c=f},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehH:function ehH(d,e,f){this.a=d
this.b=e
this.c=f},
ehF:function ehF(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehJ:function ehJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehI:function ehI(d){this.a=d},
eeH:function eeH(d,e){this.a=d
this.b=e},
eeG:function eeG(d,e){this.a=d
this.b=e},
ehz:function ehz(){},
ei7:function ei7(d,e){this.a=d
this.b=e},
ei5:function ei5(d){this.a=d},
ei6:function ei6(d){this.a=d},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecp:function ecp(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecs:function ecs(d,e){this.a=d
this.b=e},
ect:function ect(d,e,f){this.a=d
this.b=e
this.c=f},
ecx:function ecx(d,e){this.a=d
this.b=e},
eco:function eco(d,e,f){this.a=d
this.b=e
this.c=f},
ecn:function ecn(d){this.a=d},
ego:function ego(d,e,f){this.a=d
this.b=e
this.c=f},
eif:function eif(d,e,f){this.a=d
this.b=e
this.c=f},
eeK:function eeK(d,e,f){this.a=d
this.b=e
this.c=f},
eeJ:function eeJ(){},
ed9:function ed9(d,e,f){this.a=d
this.b=e
this.c=f},
eda:function eda(d){this.a=d},
ecl:function ecl(d,e){this.a=d
this.b=e},
eeb:function eeb(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ecB:function ecB(d){this.a=d},
ecT:function ecT(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecY:function ecY(){},
ecZ:function ecZ(){},
ecG:function ecG(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecK:function ecK(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecN:function ecN(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecP:function ecP(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecS:function ecS(d,e){this.a=d
this.b=e},
eea:function eea(d,e,f){this.a=d
this.b=e
this.c=f},
ee9:function ee9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee8:function ee8(d,e,f){this.a=d
this.b=e
this.c=f},
ee7:function ee7(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
edd:function edd(d){this.a=d},
edc:function edc(d){this.a=d},
edb:function edb(d,e){this.a=d
this.b=e},
ede:function ede(d){this.a=d},
edf:function edf(d){this.a=d},
edg:function edg(d,e){this.a=d
this.b=e},
edR:function edR(d){this.a=d},
eg1:function eg1(d,e){this.a=d
this.b=e},
eg0:function eg0(d,e){this.a=d
this.b=e},
eg_:function eg_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efY:function efY(d){this.a=d},
efZ:function efZ(d,e){this.a=d
this.b=e},
efW:function efW(){},
efX:function efX(){},
ehA:function ehA(){},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehC:function ehC(){},
ehD:function ehD(d){this.a=d},
ehE:function ehE(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
edF:function edF(){},
edG:function edG(){},
edH:function edH(){},
edK:function edK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edJ:function edJ(d,e){this.a=d
this.b=e},
edI:function edI(d,e,f){this.a=d
this.b=e
this.c=f},
efa:function efa(d){this.a=d},
ef9:function ef9(){},
efb:function efb(d,e){this.a=d
this.b=e},
efc:function efc(d,e){this.a=d
this.b=e},
ef8:function ef8(d){this.a=d},
efd:function efd(d,e){this.a=d
this.b=e},
ef7:function ef7(d){this.a=d},
efe:function efe(d,e){this.a=d
this.b=e},
ef6:function ef6(d){this.a=d},
eff:function eff(d,e){this.a=d
this.b=e},
ef5:function ef5(d){this.a=d},
efg:function efg(d,e){this.a=d
this.b=e},
ef4:function ef4(d,e){this.a=d
this.b=e},
efh:function efh(d,e){this.a=d
this.b=e},
ef3:function ef3(d){this.a=d},
efi:function efi(d,e){this.a=d
this.b=e},
ef2:function ef2(d){this.a=d},
eeW:function eeW(d,e){this.a=d
this.b=e},
eeX:function eeX(d){this.a=d},
eeY:function eeY(d){this.a=d},
eeV:function eeV(d){this.a=d},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
eeU:function eeU(d){this.a=d},
ef_:function ef_(d,e){this.a=d
this.b=e},
eeT:function eeT(d){this.a=d},
ef0:function ef0(d,e){this.a=d
this.b=e},
eeS:function eeS(d){this.a=d},
ef1:function ef1(d){this.a=d},
ee3:function ee3(d){this.a=d},
ee4:function ee4(d){this.a=d},
ee6:function ee6(d){this.a=d},
edZ:function edZ(d){this.a=d},
edY:function edY(d,e){this.a=d
this.b=e},
ee_:function ee_(d,e){this.a=d
this.b=e},
ee0:function ee0(d){this.a=d},
ee1:function ee1(d){this.a=d},
ee2:function ee2(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
eil:function eil(d){this.a=d},
eim:function eim(d){this.a=d},
efl:function efl(d,e){this.a=d
this.b=e},
efk:function efk(d,e){this.a=d
this.b=e},
efj:function efj(d,e){this.a=d
this.b=e},
efm:function efm(d){this.a=d},
efn:function efn(d){this.a=d},
egK:function egK(d,e){this.a=d
this.b=e},
egL:function egL(d){this.a=d},
egM:function egM(d){this.a=d},
egX:function egX(d){this.a=d},
eh7:function eh7(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehp:function ehp(d){this.a=d},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d){this.a=d},
ehs:function ehs(d){this.a=d},
eht:function eht(d,e){this.a=d
this.b=e},
egN:function egN(d){this.a=d},
egO:function egO(d){this.a=d},
egP:function egP(d){this.a=d},
egQ:function egQ(d){this.a=d},
egR:function egR(d){this.a=d},
egS:function egS(d){this.a=d},
egT:function egT(d){this.a=d},
egU:function egU(d){this.a=d},
egV:function egV(d){this.a=d},
egW:function egW(d){this.a=d},
egY:function egY(d){this.a=d},
egZ:function egZ(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh0:function eh0(d){this.a=d},
eh1:function eh1(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d){this.a=d},
eh4:function eh4(d){this.a=d},
eh5:function eh5(d){this.a=d},
egA:function egA(d){this.a=d},
eh6:function eh6(d){this.a=d},
egI:function egI(d){this.a=d},
eh8:function eh8(d){this.a=d},
egH:function egH(d,e){this.a=d
this.b=e},
eh9:function eh9(d,e){this.a=d
this.b=e},
eha:function eha(d,e){this.a=d
this.b=e},
egG:function egG(d,e,f){this.a=d
this.b=e
this.c=f},
egw:function egw(d,e){this.a=d
this.b=e},
egJ:function egJ(d){this.a=d},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehw:function ehw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehb:function ehb(d,e,f){this.a=d
this.b=e
this.c=f},
egF:function egF(d,e,f){this.a=d
this.b=e
this.c=f},
egv:function egv(d,e,f){this.a=d
this.b=e
this.c=f},
egt:function egt(d,e){this.a=d
this.b=e},
ehc:function ehc(d,e){this.a=d
this.b=e},
egE:function egE(d,e){this.a=d
this.b=e},
egu:function egu(d,e){this.a=d
this.b=e},
egs:function egs(d,e){this.a=d
this.b=e},
ehd:function ehd(d){this.a=d},
egD:function egD(d){this.a=d},
ehe:function ehe(d){this.a=d},
ehf:function ehf(d){this.a=d},
ehg:function ehg(d){this.a=d},
ehh:function ehh(d){this.a=d},
egC:function egC(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehk:function ehk(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
egB:function egB(d){this.a=d},
ehm:function ehm(d,e){this.a=d
this.b=e},
egz:function egz(d){this.a=d},
ehn:function ehn(d,e){this.a=d
this.b=e},
egy:function egy(d){this.a=d},
eho:function eho(d,e){this.a=d
this.b=e},
egx:function egx(d){this.a=d},
ed8:function ed8(d,e,f){this.a=d
this.b=e
this.c=f},
ed7:function ed7(d,e){this.a=d
this.b=e},
ehR:function ehR(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d,e){this.a=d
this.b=e},
ehS:function ehS(d,e){this.a=d
this.b=e},
ehP:function ehP(d,e){this.a=d
this.b=e},
eeg:function eeg(d,e){this.a=d
this.b=e},
eef:function eef(d){this.a=d},
eeh:function eeh(d,e){this.a=d
this.b=e},
eee:function eee(d){this.a=d},
eeO:function eeO(){},
eeN:function eeN(){},
ei3:function ei3(d){this.a=d},
ei2:function ei2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ei1:function ei1(d,e){this.a=d
this.b=e},
ehX:function ehX(d,e){this.a=d
this.b=e},
ei0:function ei0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehY:function ehY(d,e){this.a=d
this.b=e},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d){this.a=d},
ehV:function ehV(d){this.a=d},
ehW:function ehW(d){this.a=d},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
ei_:function ei_(d,e){this.a=d
this.b=e},
ei4:function ei4(d){this.a=d},
edy:function edy(d){this.a=d},
edx:function edx(d,e,f){this.a=d
this.b=e
this.c=f},
edw:function edw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edl:function edl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
edm:function edm(d,e){this.a=d
this.b=e},
edn:function edn(d,e){this.a=d
this.b=e},
edo:function edo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edk:function edk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edp:function edp(d,e){this.a=d
this.b=e},
edr:function edr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edq:function edq(d,e){this.a=d
this.b=e},
eds:function eds(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edj:function edj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edt:function edt(d,e){this.a=d
this.b=e},
edi:function edi(d,e){this.a=d
this.b=e},
edu:function edu(d,e){this.a=d
this.b=e},
edh:function edh(d){this.a=d},
edv:function edv(d,e){this.a=d
this.b=e},
efp:function efp(d){this.a=d},
efo:function efo(d){this.a=d},
efq:function efq(d,e){this.a=d
this.b=e},
eeu:function eeu(d,e){this.a=d
this.b=e},
eev:function eev(d,e){this.a=d
this.b=e},
eet:function eet(d,e){this.a=d
this.b=e},
eew:function eew(d,e){this.a=d
this.b=e},
ees:function ees(d,e){this.a=d
this.b=e},
eex:function eex(d,e){this.a=d
this.b=e},
eer:function eer(d,e){this.a=d
this.b=e},
eey:function eey(d,e){this.a=d
this.b=e},
eeq:function eeq(d,e){this.a=d
this.b=e},
eez:function eez(d,e){this.a=d
this.b=e},
eep:function eep(d,e){this.a=d
this.b=e},
eeA:function eeA(d,e,f){this.a=d
this.b=e
this.c=f},
eeo:function eeo(d,e){this.a=d
this.b=e},
eeB:function eeB(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d,e){this.a=d
this.b=e},
eeC:function eeC(d,e){this.a=d
this.b=e},
eem:function eem(d,e,f){this.a=d
this.b=e
this.c=f},
eej:function eej(d,e){this.a=d
this.b=e},
eeD:function eeD(d,e){this.a=d
this.b=e},
eel:function eel(d,e){this.a=d
this.b=e},
eeE:function eeE(d,e){this.a=d
this.b=e},
eek:function eek(d,e,f){this.a=d
this.b=e
this.c=f},
eei:function eei(d,e){this.a=d
this.b=e},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeI:function eeI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ech:function ech(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egm:function egm(d,e){this.a=d
this.b=e},
egk:function egk(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
acX:function acX(d,e,f){this.a=d
this.b=e
this.c=f},
awb:function awb(d,e){this.c=d
this.a=e},
b9g:function b9g(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
cVF:function cVF(d){this.a=d},
cVE:function cVE(d){this.a=d},
b9u:function b9u(d,e){this.c=d
this.a=e},
cW0:function cW0(d){this.a=d},
cW1:function cW1(d){this.a=d},
Ih:function Ih(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b9f:function b9f(){this.d=!1
this.c=this.a=null},
cVC:function cVC(d){this.a=d},
cVy:function cVy(d){this.a=d},
cVD:function cVD(d){this.a=d},
cVx:function cVx(d){this.a=d},
cVB:function cVB(d){this.a=d},
cVz:function cVz(d){this.a=d},
cVA:function cVA(d,e){this.a=d
this.b=e},
NV:function NV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
YB:function YB(d,e,f){this.c=d
this.d=e
this.a=f},
aBA:function aBA(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a6$=f
_.c=_.a=null},
ej1:function ej1(){},
eiS:function eiS(d){this.a=d},
ej0:function ej0(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiO:function eiO(d){this.a=d},
eiP:function eiP(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiR:function eiR(d,e,f){this.a=d
this.b=e
this.c=f},
eiZ:function eiZ(){},
ej_:function ej_(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiW:function eiW(d){this.a=d},
eiX:function eiX(d){this.a=d},
eiY:function eiY(d){this.a=d},
ej2:function ej2(d,e,f){this.a=d
this.b=e
this.c=f},
ej4:function ej4(d,e){this.a=d
this.b=e},
ej3:function ej3(d){this.a=d},
Io:function Io(d,e){this.c=d
this.a=e},
bnP:function bnP(d,e){this.b=d
this.a=e},
be6:function be6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
be5:function be5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHe:function aHe(){},
aJg:function aJg(){},
btu:function btu(){},
aJh:function aJh(){},
fox(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fox=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wn.c2().Kv(B.a(["pdf"],x.s),A.rQ,!0),$async$fox)
case 3:q=e
if(q==null||J.cj(q.a)){u=null
w=1
break}t=J.fj(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bl9(s,"data:application/pdf;base64,"+A.cP.gcs().aG(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fox,v)},
hNl(d){var w,v,u,t,s,r
try{w=B.jf(d,0,null)
v=B.ae("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c4(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ae("/Type\\s*/Page\\b",!0,!1,!1,!1).kx(0,w).gJ(0)
if(t>0){s=J.aNM(t,1,200)
return s}}catch(r){}return 1},
fon(d){return C.hNk(d)},
hNk(d){var w=0,v=B.j(x.T),u
var $async$fon=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fon,v)},
bz_(d,e,f,g){return C.hNu(d,e,f,g)},
hNu(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bz_=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e3(b6,x.co).gah(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h4s(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lB(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lB(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lB(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lB(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.Y()
g=new B.ru()
f=B.FL(g,null)
a7=B.L()
a7.r=A.q0.gq(0)
f.b2(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b8.gq(b8)
b1.c=p*e
b1.d=A.bN
b1.e=A.fs
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.I()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pO()
w=7
return B.b(a3.yp(800,h),$async$bz_)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hf(A.fN),$async$bz_)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f3(A.dD.gaN(a5))
a7=A.cP.gcs().aG(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a6(b5)
$.al.$1("[slides signature] "+B.t(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bz_,v)},
aN_(d,e,f){return C.hNi(d,e,f)},
hNi(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aN_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aF:e
r.c=f==null?5.2:f
w=3
return B.b(B.afh(d,e,f,new C.fol(r,q),q,"Sign document"),$async$aN_)
case 3:if(!new B.e3(q,x.co).gah(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bz_(q,t,r.b,r.c),$async$aN_)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYX(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN_,v)},
hNs(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fYM(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fYM(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aX(A.a.aT(A.o.fF(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aX(A.a.aT(A.o.fF(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l5&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fYq(q.ay)+";border:2px solid "+C.fYq(q.ch)+'"></div>'
break
case 5:l=C.fIe(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gagV()
if(p==null)p=A.as0
n=B.U(p)
k=n.k("pv<1>")
j=new B.pv(p,0,8,k)
j.FW(p,0,8,n.c)
j=new B.bU(j,j.gJ(0),k.k("bU<ai.E>"))
k=k.k("ai.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
p=B.aJ(p,'"',e)
n=B.aJ(i,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aJ(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
fYq(d){var w=A.o.az(d,24)
return"rgba("+(A.o.az(d,16)&255)+","+(A.o.az(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
fYM(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
byY(d,e){var w=0,v=B.j(x.H)
var $async$byY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fov(e,C.hNs(e),d),d,null,!0,!0,x.H),$async$byY)
case 2:return B.h(null,v)}})
return B.i($async$byY,v)},
byZ(){var w=0,v=B.j(x.T),u,t,s
var $async$byZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fk(92,2400),$async$byZ)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fon(s),$async$byZ)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byZ,v)},
aN0(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aN0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fJs(d),$async$aN0)
case 3:t=f
s=A.a.i(d.b)
r=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=X.fqH(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN0,v)},
fSP(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYX:function aYX(d,e,f){this.a=d
this.b=e
this.c=f},
fol:function fol(d,e){this.a=d
this.b=e},
fov:function fov(d,e,f){this.a=d
this.b=e
this.c=f},
fos:function fos(d){this.a=d},
fot:function fot(d,e,f){this.a=d
this.b=e
this.c=f},
fou:function fou(d,e,f){this.a=d
this.b=e
this.c=f},
hNj(d){return C.ki(d.w)},
hNq(d){var w,v,u,t
if(d.length===0||!A.d.e9(d,C.hP8()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xL(d){var w=A.a.i(d),v=B.ae("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.ha4()
if(w.b.test(u))return u
return null},
h4u(d,e,f){var w,v,u=C.hiD(d),t=$.oZ()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hNw(d){var w,v,u,t,s=B.aZ(x.N)
for(w=J.aV(d.a),v=new B.hK(w,d.b);v.C();){u=w.gT(w).y
t=C.xL(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
foj(d,e){var w,v=d.y,u=C.xL(v==null?"":v)
if(u!=null)return d.y=u
w=C.hNw(new B.a4(e,new C.fok(d),B.U(e).k("a4<1>")))
v=d.x
return d.y=C.h4u(v==null?"":v,null,w)},
hNv(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.ki(w.w))return null
v=w.y
return C.xL(v==null?"":v)},
hmZ(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fN(u)},
Uc(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Uc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$Uc)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eU("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$Uc)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a_(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a6(m)
$.al.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Uc,v)},
Ud(d){return C.hn_(d)},
hn_(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Ud=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$Ud)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.ht("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,A.cz,null),$async$Ud)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a6(p)
$.al.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ud,v)},
a63(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a63=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$a63)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Uc(),$async$a63)
case 4:s=a6
r=C.xL(a2==null?"":a2)
if(r==null)r=a3!=null?C.h4u(a3,null,A.a3c):null
q=x.N
p=B.aZ(q)
for(o=J.dg(s),n=J.aV(o.ghQ(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xL(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdH(s),n=n.gah(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a_(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dG.aG(t)
g.m(0,"payload",A.cP.gcs().aG(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(D.Ql.t(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xL(J.k(q==null?"":q))
if(f==null)f=C.fSU(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.Ud(s),$async$a63)
case 7:u=new B.aCZ(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hmZ()
n=r==null
d=n?C.fSU(p):r
q=B.T(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dG.aG(t)
q.m(0,"payload",A.cP.gcs().aG(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.Q(Date.now(),0,!1).a4().ab())
if(D.Ql.t(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.Ud(s),$async$a63)
case 8:u=new B.aCZ(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a63,v)},
fSU(d){var w,v,u=$.oZ()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aoG(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aoG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$aoG)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Uc(),$async$aoG)
case 6:t=f
s=J.a7(t)
r=s.gJ(t)
s.bm(t,new C.c9p(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Ud(t),$async$aoG)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aoG,v)},
aoF(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xL(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$aoF)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Uc(),$async$aoF)
case 6:t=o.jk(f),t=t.gah(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xL(J.k(q==null?"":q))===p){u=C.a62(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoF,v)},
a62(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a62=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$a62)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Uc(),$async$a62)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aR(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=A.c1.c6(0,A.cw.aG(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Ql.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aE(0,s,null)
if(m.b(r)){q=B.a_(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.R.al(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dS(B.a_(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.Q(Date.now(),0,!1).a4().ab())
o.m(p,g,l)}w=7
return B.b(C.Ud(p),$async$a62)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a62,v)},
hNp(d,e,f){var w,v=B.T(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.U(d).k("J<1,a1<n,@>>")
w=B.z(new B.J(d,new C.foq(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
foz(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ac())
return A.R.al(w,null)}return A.R.al(C.hNp(d==null?B.a([],x.D):d,f,g),null)},
foy(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$foy=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a63(h,d,e,f,g),$async$foy)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xL(e==null?"":e)
u=new B.aCM(s,t)
w=1
break}t=A.dG.aG(h)
t=A.jY.gcs().aG(t)
u=new B.aCM(C.xL(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$foy,v)},
fJu(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.aa(q)===0)return!1
if(J.cV(q,"NGMYSLIDESYNC2|"))return!0
if(J.cV(q,"NGMYSLIDECODE|"))return!0
if(J.cV(q,"NGMY_SL:"))return!0
if(J.eR(q,s)||J.eR(q,r))return!0
if(J.cV(q,"{"))try{w=A.R.aE(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hNt(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fJu(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aX(v,u))
if(C.fJu(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aX(v,s))
if(C.fJu(t))return t}}return null},
fom(d){var w,v,u,t=A.a.i(d)
if(J.aa(t)===0||J.cV(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cV(t,"NGMY_SL:"))w=v.a(A.R.aE(0,A.c1.c6(0,A.cw.aG(J.mj(t,8))),null))
else w=v.a(A.R.aE(0,t,null))
v=C.hwz(w)
return v}catch(u){v=B.a([],x.D)
return v}},
af2(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$af2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aoF(t[1]),$async$af2)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fom(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xL(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoF(r),$async$af2)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fom(s)
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
return B.b(C.a62(t[1]),$async$af2)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fom(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fom(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$af2,v)},
hwz(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Ql.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fJr(C.U8(B.a_(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d5(u,x.f)
t=B.cz(t,new C.eZa(w),t.$ti.k("G.E"),x.I)
t=B.z(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fJr(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.m(0,"id",C.cy())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iS
$.iS=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.U8(B.a_(o,x.N,x.z))
if(e&&C.ki(p.w))p.Q=new B.Q(Date.now(),0,!1).a4().bN(144e8).ab()
return p},
byJ(){var w=0,v=B.j(x.aT),u,t,s
var $async$byJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Fj(),$async$byJ)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.af2(s),$async$byJ)
case 4:t=e
u=J.cj(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byJ,v)},
fwK(d){var w=0,v=B.j(x.T),u,t
var $async$fwK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hN(D.TJ,!0,"Dismiss",d,new C.fwL(),new C.fwM(),A.DG,!0,x.N),$async$fwK)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.H(x.q).f.P(D.ew3)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fwK,v)},
hR7(d,e,f,g,h){return B.a8(d,!1).cp(B.eD(new C.fwN(h,e,g,f),!0,null,x.H))},
fok:function fok(d){this.a=d},
c9p:function c9p(d){this.a=d},
foq:function foq(){},
eZa:function eZa(d){this.a=d},
fwL:function fwL(){},
fwM:function fwM(){},
fwN:function fwN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ua:function Ua(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBy:function aBy(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eiy:function eiy(){},
eiu:function eiu(d,e){this.a=d
this.b=e},
eix:function eix(d,e){this.a=d
this.b=e},
eiv:function eiv(d){this.a=d},
eiw:function eiw(d){this.a=d},
eiz:function eiz(d){this.a=d},
eiA:function eiA(d){this.a=d},
eiD:function eiD(d){this.a=d},
eiE:function eiE(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiG:function eiG(d,e){this.a=d
this.b=e},
eit:function eit(d,e){this.a=d
this.b=e},
eis:function eis(d,e){this.a=d
this.b=e},
Ub:function Ub(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgV:function bgV(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eiH:function eiH(d,e){this.a=d
this.b=e},
eiI:function eiI(d){this.a=d},
eiJ:function eiJ(){},
eiK:function eiK(d){this.a=d},
eiL:function eiL(d,e){this.a=d
this.b=e},
aBv:function aBv(d){this.a=d},
aBw:function aBw(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ecb:function ecb(d){this.a=d},
eca:function eca(){},
ecc:function ecc(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec6:function ec6(){},
ec8:function ec8(d){this.a=d},
ec9:function ec9(d){this.a=d},
br2:function br2(){},
aoH:function aoH(d){this.a=d},
aBz:function aBz(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eiN:function eiN(d){this.a=d},
eiM:function eiM(d){this.a=d},
hBy(){var w,v,u,t
for(v=0;v<4;++v){w=D.cNq[v]
try{if(A8.bSb(w)){u=w
return u}}catch(t){}}return null},
Ps(d,e){return C.hKb(d,e)},
hKb(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Ps=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hBy()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nE?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.G(b4,2)
c2.b=b5-A.o.G(b5,2)
b6=B.q_(c6,!0)
b6.toString
p=B.a8(c6,!0)
b7=new B.co(null,x.A)
b8=A.d.gL(c3)
b9=$.av()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.nW(new C.fiF(c2,b7,o),!1,!1)
b6.lm(0,l)
b9=x.H
B.cg(null,A.d8,!1,null,new C.fiG(n,m),c6,null,!0,!0,b9)
k=new C.fiK(b7)
j=new C.fiL()
i=null
t=4
b3=c2.a
h=Af.aPf(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fz8(h,30)
e=B.a([],x.aK)
b3=x.z
i=A8.aU_(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.G0.xs(i,"dataavailable",new C.fiH(e))
d=new B.bP(new B.be($.bt,x.dT),x.b2)
A.G0.xs(i,"stop",new C.fiI(d))
J.afz(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Ps)
case 8:w=7
return B.b(c5.$1(d0),$async$Ps)
case 7:a0=d0
J.fzb(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afz(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afz(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Ps)
case 15:w=14
return B.b(c5.$1(d0),$async$Ps)
case 14:a0=d0
case 13:J.fzb(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afz(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.Q(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fzb(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fp,null,b9),$async$Ps)
case 18:w=16
break
case 17:J.afz(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afz(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.nm),$async$Ps)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hE(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.mN(a7)
c0.download=B.t(J.aa(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.JM(b0)
J.lG(b0)
B.bN(A.nl,new C.fiJ(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a6(c4)
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
J.lG(l)
if(p.oP())p.eD()
c3=o
b3=$.av()
c3.shI(b3)
J.aNR(c3,0)
c3=n
c3.shI(b3)
J.aNR(c3,0)
c3=m
c3.shI(b3)
J.aNR(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ps,v)},
fiF:function fiF(d,e,f){this.a=d
this.b=e
this.c=f},
fiE:function fiE(){},
fiG:function fiG(d,e){this.a=d
this.b=e},
fiK:function fiK(d){this.a=d},
fiL:function fiL(){},
fiH:function fiH(d){this.a=d},
fiI:function fiI(d){this.a=d},
fiJ:function fiJ(d){this.a=d},
bre:function bre(d,e,f){this.c=d
this.d=e
this.a=f},
eTw:function eTw(){},
eTx:function eTx(){},
c9M(d){var w=0,v=B.j(x.at),u,t,s
var $async$c9M=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoR(d,A.y5),$async$c9M)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.Q(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9M,v)},
c9L(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5K:function a5K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgD:function bgD(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e2B:function e2B(d){this.a=d},
e2z:function e2z(d){this.a=d},
e2A:function e2A(d,e){this.a=d
this.b=e},
a6B:function a6B(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nR$=k
_.nS$=l
_.nT$=m
_.nf$=n},
a6C:function a6C(d,e){this.a=d
this.b=e},
b_B:function b_B(){},
cbY:function cbY(){},
cbZ:function cbZ(){},
cc_:function cc_(d,e,f,g,h,i,j,k,l){var _=this
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
hb5(d){return new C.afR(d)},
a0X:function a0X(){},
afR:function afR(d){this.a=d},
aOa:function aOa(){},
au5:function au5(d,e){this.d=d
this.b=e
this.a=null},
aPE:function aPE(d){this.b=d
this.a=null},
fdP(d,e){var w=0,v=B.j(x.H)
var $async$fdP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.Y().gwF().Ke(d,e),$async$fdP)
case 2:B.fqN()
return B.h(null,v)}})
return B.i($async$fdP,v)},
h1M(d,e){return(A.qy[(d^e)&255]^A.o.az(d,8))>>>0},
fbH(d,e,f,g,h,i){var w=C.hGB(d,A.d7,f,null,A.cU,g,h,i)
return w},
h3D(d){var w=F.h4l(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hiD(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.on.h(0,w)
if(v!=null)return v
for(u=A.on.gdH(A.on),u=u.gah(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ae("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.am(s,0,2)
return A.a.am(s+"XX",0,2)},
h3L(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<32;++w)v+="- "+D.bTf[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwW(d,e){return C.hDh(d,e)},
hDh(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwW=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hE([d],"application/pdf")
n=x.z
q=B.aRd(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cv(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jL(o,"share",[p]),x.H),$async$bwW)
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
return B.i($async$bwW,v)},
fJl(){var w=0,v=B.j(x.y),u,t,s
var $async$fJl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f54
s=$.bwt
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwW(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJl,v)},
byg(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$byg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f54
l=$.bwt
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.fZr()?3:4
break
case 3:w=5
return B.b(C.bwW(m,k),$async$byg)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bwu
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mN(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.JM(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$byg)
case 10:J.lG(q)
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
return B.i($async$byg,v)},
fJc(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fJc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bwu
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lb.tU(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fJc,v)},
fJt(d,e){var w=0,v=B.j(x.H),u,t
var $async$fJt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hE([d],"text/html"))
t.toString
u=window
u.toString
A.lb.tU(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fJt,v)},
aZy(d,e){var w=0,v=B.j(x.y),u
var $async$aZy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZA(d,e),$async$aZy)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZz(d),$async$aZy)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZy,v)}},D,H,Ai,N,W,P,Aj,G,F,E,Q,X,Y,Z,Ak,A6,K,A_,O,R,L,A7,Al,A0,Am,An,A8,A9,Ao,Aa,Ab,Ac,Ap,Aq,S,Ar,I,Ad,As,At,T,U,M,A1,A2,A3,Au,Av
J=c[1]
B=c[0]
A=c[2]
V=c[180]
A4=c[130]
Ae=c[47]
Af=c[55]
A5=c[50]
Ag=c[101]
Ah=c[191]
C=a.updateHolder(c[4],C)
D=c[178]
H=c[88]
Ai=c[34]
N=c[182]
W=c[179]
P=c[168]
Aj=c[96]
G=c[149]
F=c[29]
E=c[181]
Q=c[103]
X=c[27]
Y=c[137]
Z=c[108]
Ak=c[145]
A6=c[109]
K=c[183]
A_=c[58]
O=c[159]
R=c[72]
L=c[117]
A7=c[122]
Al=c[185]
A0=c[92]
Am=c[83]
An=c[86]
A8=c[51]
A9=c[155]
Ao=c[33]
Aa=c[70]
Ab=c[102]
Ac=c[190]
Ap=c[192]
Aq=c[189]
S=c[64]
Ar=c[186]
I=c[134]
Ad=c[63]
As=c[146]
At=c[193]
T=c[45]
U=c[184]
M=c[166]
A1=c[188]
A2=c[187]
A3=c[54]
Au=c[165]
Av=c[94]
C.nu.prototype={
ue(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t7(t,v)
return new C.nu(t===0?!1:w,v,t)},
bFD(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BX()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t7(w,u)
return new C.nu(r===0?!1:s,u,r)},
bG2(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BX()
w=o-d
if(w<=0)return p.a?$.fKO():$.BX()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t7(w,u)
q=new C.nu(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aD(0,$.a0I())
return q},
dP(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ak(e,16)
if(A.o.G(e,16)===0)return r.bFD(v)
u=w+v+1
t=new Uint16Array(u)
C.fW7(r.b,w,e,t)
w=r.a
s=C.t7(u,t)
return new C.nu(s===0?!1:w,t,s)},
lW(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ak(e,16)
u=A.o.G(e,16)
if(u===0)return n.bG2(v)
t=w-v
if(t<=0)return n.a?$.fKO():$.BX()
s=n.b
r=new Uint16Array(t)
C.hsB(s,w,e,r)
w=n.a
q=C.t7(t,r)
p=new C.nu(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dP(1,u)-1)!==0)return p.aD(0,$.a0I())
for(o=0;o<v;++o)if(s[o]!==0)return p.aD(0,$.a0I())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cyY(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5H(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5H(t,e)
if(s===0)return $.BX()
if(r===0)return t.a===e?t:t.ue(0)
w=s+1
v=new Uint16Array(w)
C.hsz(t.b,s,d.b,r,v)
u=C.t7(w,v)
return new C.nu(u===0?!1:e,v,u)},
FX(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BX()
w=d.c
if(w===0)return t.a===e?t:t.ue(0)
v=new Uint16Array(s)
C.b6v(t.b,s,d.b,w,v)
u=C.t7(s,v)
return new C.nu(u===0?!1:e,v,u)},
bsV(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t7(r,u)
return new C.nu(!1,u,s)},
bsU(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t7(u,r)
return new C.nu(!1,r,v)},
bsW(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t7(p,m)
return new C.nu(s!==0,m,s)},
SS(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BX()
w=t.a
if(w===e.a){if(w){w=$.a0I()
return t.FX(w,!0).bsW(e.FX(w,!0),!0).a5H(w,!0)}return t.bsV(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bsU(v.FX($.a0I(),!1),!1)},
ao(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5H(e,v)
if(C.cyY(u.b,t,e.b,w)>=0)return u.FX(e,v)
return e.FX(u,!v)},
aD(d,e){var w,v,u=this,t=u.c
if(t===0)return e.ue(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5H(e,v)
if(C.cyY(u.b,t,e.b,w)>=0)return u.FX(e,v)
return e.FX(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BX()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fW8(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t7(w,t)
return new C.nu(q===0?!1:r,t,q)},
bFC(d){var w,v,u,t
if(this.c<d.c)return $.BX()
this.aNm(d)
w=$.fEv.c2()-$.auO.c2()
v=C.fEx($.fEu.c2(),$.auO.c2(),$.fEv.c2(),w)
u=C.t7(w,v)
t=new C.nu(!1,v,u)
return this.a!==d.a&&u>0?t.ue(0):t},
cfK(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aNm(d)
w=C.fEx($.fEu.c2(),0,$.auO.c2(),$.auO.c2())
v=C.t7($.auO.c2(),w)
u=new C.nu(!1,w,v)
if($.fEw.c2()>0)u=u.lW(0,$.fEw.c2())
return t.a&&u.c>0?u.ue(0):u},
aNm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fW4&&d.c===$.fW6&&g.b===$.fW3&&d.b===$.fW5)return
w=d.b
v=d.c
u=16-A.o.gahj(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fW2(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fW2(g.b,f,u,r)}else{r=C.fEx(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fEy(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cyY(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b6v(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b6v(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hsA(p,r,i);--o
C.fW8(h,j,0,r,o,s)
if(r[i]<h){m=C.fEy(j,s,o,n)
C.b6v(r,l,n,m,r)
while(--h,r[i]<h)C.b6v(r,l,n,m,r)}--i}$.fW3=g.b
$.fW4=f
$.fW5=w
$.fW6=v
$.fEu.b=r
$.fEv.b=l
$.auO.b=s
$.fEw.b=u},
gV(d){var w,v,u,t=new C.cyZ(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cz_().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nu&&this.aI(0,e)===0},
ro(d,e){return this.aI(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u7(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gahj(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.az(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cz0(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cz1(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kS(A.aG.gaN(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.ue(0):r
while(v.c>1){u=$.h81()
if(u.c===0)B.b9(D.aVI)
t=v.cfK(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bFC(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dy(w,x.bJ).fN(0)},
$iaOU:1,
$ihw:1}
C.aOk.prototype={
K(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.m(0,u,w.length-1)},
gJ(d){return this.a.length},
h(d,e){return this.a[e]},
m(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.m(0,f.a,e)},
cCU(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gaj(d){return A.d.gaj(this.a)},
gai(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gah(d){var w=this.a
return new J.jO(w,w.length,B.U(w).k("jO<1>"))}}
C.Q4.prototype={
cKB(){var w,v
if(this.as==null)this.b7x()
w=this.as
v=w==null?null:w.alW()
return v==null?null:v.ey()},
b7x(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.alW().ey()
this.as=new C.bJz(v)}},
gX(d){return this.at}}
C.a1T.prototype={
a3(){return"CompressionType."+this.b}}
C.bDC.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cl()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dP(v,u)+(s.b&A.xG[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cl()}w=A.o.dP(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fn(u,t)&A.xG[d])
s.c=t}return v}}
C.bC8.prototype={
cBd(d,e){var w,v,u,t,s,r=this,q=new C.bDC(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.em(8)!==66||q.em(8)!==90||q.em(8)!==104)return!1
w=r.a=q.em(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.ce4(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.ce7(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
ce4(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.d12[u])v=!1
if(t!==D.cHs[u])w=!1
if(!w&&!v)return-1}return v?0:2},
ce7(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bVz()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.em(3)
if(q<2||q>6)return-1
v=d3.em(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.em(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.ah(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.ah(u)
u[w]=l}c9.fr=B.bZ(6,$.h68(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h67()
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
if(f<h)h=f}c9.bRd(v[j],u[j],o[j],n[j],h,g,r)
v=c9.as
v.$flags&2&&B.ah(v)
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
a3=c9.aqE(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqE(d3)}while(a3===0||a3===1);++a5
v=c9.e
v===$&&B.c()
a7=v[c9.f[c9.r[0]]]
v=c9.at
u=v[a7]
v.$flags&2&&B.ah(v)
v[a7]=u+a5
for(v=c9.b;a5>0;){if(a4>=d)return-1
v===$&&B.c()
v.$flags&2&&B.ah(v)
v[a4]=a7;++a4;--a5}continue}else{if(a4>=d)return-1
a8=a3-1
v=c9.r
u=c9.f
if(a8<16){a9=v[0]
a7=u[a9+a8]
for(v=u.$flags|0;a8>3;){b0=a9+a8
o=b0-1
n=u[o]
v&2&&B.ah(u)
u[b0]=n
n=b0-2
u[o]=u[n]
o=b0-3
u[n]=u[o]
u[o]=u[b0-4]
a8-=4}while(a8>0){o=a9+a8
n=u[o-1]
v&2&&B.ah(u)
u[o]=n;--a8}v&2&&B.ah(u)
u[a9]=a7}else{b1=A.o.ak(a8,16)
b2=A.o.G(a8,16)
a9=v[b1]+b2
a7=u[a9]
for(o=u.$flags|0;n=v[b1],a9>n;a9=b3){b3=a9-1
n=u[b3]
o&2&&B.ah(u)
u[a9]=n}v.$flags&2&&B.ah(v)
v[b1]=n+1
while(b1>0){v[b1]=v[b1]-1
n=v[b1];--b1
b4=u[v[b1]+16-1]
o&2&&B.ah(u)
u[n]=b4}v[0]=v[0]-1
n=v[0]
o&2&&B.ah(u)
u[n]=a7
if(v[0]===0)for(a0=4095,a1=15;a1>=0;--a1){for(a2=15;a2>=0;--a2){u[a0]=u[v[a1]+a2];--a0}v[a1]=a0+1}}v=c9.at
u=c9.e
u===$&&B.c()
o=u[a7]
n=v[o]
v.$flags&2&&B.ah(v)
v[o]=n+1
n=c9.b
n===$&&B.c()
u=u[a7]
n.$flags&2&&B.ah(n)
n[a4]=u;++a4
a3=c9.aqE(d3)
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
u.$flags&2&&B.ah(u)
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
d4.bD(c3)
c1=(c1<<8^D.Fx[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Fz[b9];++b9
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
if(b8===0){b8=D.Fz[b9];++b9
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
if(b8===0){b8=D.Fz[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Fz[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Fz[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bD(c3)
c1=c1<<8^D.Fx[c1>>>24&255^v];--c2}d4.bD(c3)
c1=(c1<<8^D.Fx[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bD(c7)
c1=(c1<<8^D.Fx[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bD(c7)
c1=(c1<<8^D.Fx[c1>>>24&255^c7&255])>>>0
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
aqE(d){var w,v,u,t,s=this,r=s.ay
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
t=d.em(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.em(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bRd(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
for(w=f.$flags|0,v=h,u=0;v<=i;++v)for(t=0;t<j;++t)if(g[t]===v){w&2&&B.ah(f)
f[u]=t;++u}for(w=e.$flags|0,v=0;v<23;++v){w&2&&B.ah(e)
e[v]=0}for(v=0;v<j;++v){s=g[v]+1
r=e[s]
w&2&&B.ah(e)
e[s]=r+1}for(v=1;v<23;++v){s=e[v]
r=e[v-1]
w&2&&B.ah(e)
e[v]=s+r}for(s=d.$flags|0,v=0;v<23;++v){s&2&&B.ah(d)
d[v]=0}for(v=h,q=0;v<=i;v=p){p=v+1
q+=e[p]-e[v]
s&2&&B.ah(d)
d[v]=q-1
q=q<<1>>>0}for(v=h+1;v<=i;++v){s=d[v-1]
r=e[v]
w&2&&B.ah(e)
e[v]=(s+1<<1>>>0)-r}},
bVz(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cra.prototype={
aE2(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bIG(e)
if(q<0)return
e.c=q
if(e.aH()!==101010256)return
e.aS()
e.aS()
e.aS()
e.aS()
r.f=e.aH()
r.r=e.aH()
w=e.aS()
if(w>0)e.aE5(w,!1)
r.ces(e)
q=r.r
v=r.f
u=e.aGT(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b5d()
s.cKA(0,u,e,f)
q.push(s)}},
ces(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5k(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.rb()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.rb()
d.aS()
d.aS()
d.aH()
d.aH()
d.rb()
d.rb()
u=d.rb()
t=d.rb()
this.f=u
this.r=t
d.c=s},
bIG(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a5k(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ajr(A.hN)
o.aI9(r.ey(),A.hN,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cr8.prototype={}
C.aut.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.crb.prototype={
aE2(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aS()
o.b=e.aS()
w=D.ayn.h(0,e.aS())
o.c=w==null?D.Jt:w
o.d=e.aS()
o.e=e.aS()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aS()
u=e.aS()
o.x=e.akJ(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aMJ:D.Cb
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.Cb&&u>2){w=o.y
w.toString
s=B.qD(w,A.hN,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aS()===39169){s.aS()
s.aS()
s.akJ(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aS()
o.at=D.aMK
o.ax=new C.cr8(r,q)
w=D.ayn.h(0,q)
o.c=w==null?D.Jt:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gJ(d){return this.bgK().length},
alW(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qD(new Uint8Array(0),A.hN,q,q)
w=r.at
if(w!==D.Cb)if(p.gJ(0)<=0)r.at=D.Cb
else{if(w===D.aMJ){p=r.bDX(p)
r.Q=p}else if(w===D.aMK){p=r.bDA(p)
r.Q=p}r.at=D.Cb}w=r.c
if(w===D.abF){v=p.c
u=B.dc()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.oJ.At(p.ey(),!0,!1)
else{t=B.a6r(A.hN,r.w)
p=r.Q
p.toString
A.oJ.a1C(p,t,!0,!1)
u.b=t.Fw()}r.Q.c=v
return B.qD(u.b9(),A.hN,q,q)}else if(w===D.abG){s=B.a6r(A.hN,32768)
p=r.Q
v=p.c
C.hbg().cBd(p,s)
u=s.Fw()
r.Q.c=v
return B.qD(u,A.hN,q,q)}else return B.qD(p.ey(),A.hN,q,q)},
bgK(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b3y(d){var w=this.ch,v=C.Id(C.h1M(w[0].N(0),d))
w[0]=v
v=w[1].ao(0,v.SS(0,C.Id(255)))
w[1]=v
w[1]=v.aM(0,C.Id(134775813)).ao(0,C.Id(1)).SS(0,C.Id(4294967295))
w[2]=C.Id(C.h1M(w[2].N(0),w[1].lW(0,24).N(0)))},
aMN(){var w=(this.ch[2].SS(0,C.Id(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bDX(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qD(new Uint8Array(0),A.hN,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b3y(u[v.c++]^r.aMN())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aMN()
r.b3y(s)
u&2&&B.ah(t)
t[w]=s}return B.qD(t,A.hN,q,q)},
bDA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gJ(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.hsg(k,w,v)
p=new Uint8Array(B.cm(A.aG.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cm(A.aG.dt(q,v,k)))
if(!C.fVy(A.aG.dt(q,k,k+2),u))throw B.R(B.fg("password error"))
k=new Uint8Array(16)
n=new C.bAJ(k,new Uint8Array(16),p)
k=x.S
m=J.a3e(0,k)
m=n.r=new C.cbN(m)
m.c=!0
m.b=m.bg3(!0,new C.aqd(p))
if(m.c)m.d=B.bj(D.nD,!0,k)
else m.d=B.bj(D.xz,!0,k)
l=C.fTN(C.fTP(),64)
l.b9P(new C.aqd(o))
n.w=l
n.cKb(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fVy(k,m))throw B.R(B.fg("macs don't match"))
return B.qD(r,A.hN,null,null)}}
C.b5d.prototype={
cKA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aS()
e.aS()
e.aS()
e.aS()
e.aS()
e.aS()
e.aH()
n.w=e.aH()
n.x=e.aH()
w=e.aS()
v=e.aS()
u=e.aS()
n.y=e.aS()
e.aS()
n.Q=e.aH()
n.as=e.aH()
if(w>0)n.at=e.akJ(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qD(t,A.hN,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aS()
p=s.aS()
o=s.a5k(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rb()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rb()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rb()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akJ(u)
f.c=n.as
t=new C.crb(D.Jt,n,D.Cb,B.a([C.Id(0),C.Id(0),C.Id(0)],x.f3))
n.ch=t
t.aE2(0,f,g)},
u(d){return this.at}}
C.cr9.prototype={
cBe(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cra(B.a([],x.fT))
this.a=g
g.aE2(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aOk(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Q4(o,A.o.ak(Date.now(),1000),0):C.fMb(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fMb(o,q.w,q)
if(k.as==null)k.b7x()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajr(A.hN)
j.aI9(o,A.hN,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.IT(!1).Gx(i,0,h,!0)}}return v}}
C.bAJ.prototype={
cKb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bm(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hb_(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dF("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dF("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bH6(u,0,w,0,o)}else{o===$&&B.c()
q.bE0(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.JB(w,0)
m.x=A.aG.dt(m.x,0,10)
w=m.w
l=w.a
l.l7(0)
w=w.d
w===$&&B.c()
l.Bm(0,w,0,w.length)
return f}}
C.cbS.prototype={}
C.cbW.prototype={}
C.cbQ.prototype={}
C.aqd.prototype={}
C.cbV.prototype={
cBt(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b9P(new C.aqd(A.aG.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bI4(n.a,n.b,t,s,r)
r+=v}A.aG.ha(f,g,g+w,s)
return o.a.c},
bI4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.R(B.dF("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bm(0,d,0,d.length)
v.Bm(0,f,0,4)
u=m.c
u===$&&B.c()
w.JB(u,0)
u=m.c
A.aG.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bm(0,s,0,s.length)
w.JB(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.cbR.prototype={}
C.cbP.prototype={}
C.aqe.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aqe){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
ro(d,e){var w=this.a
w===$&&B.c()
w=A.o.ro(w,e.gbRu())
if(!w)e.gbRu()
return w},
aGm(d,e){this.a=0
this.b=d},
rq(d){return this.aGm(d,null)},
aGW(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.f5(""),u=w.a
u===$&&B.c()
w.aWE(v,u)
u=w.b
u===$&&B.c()
w.aWE(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aWE(d,e){var w,v=A.o.fF(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bo(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.cbU.prototype={
l7(d){var w,v=this
v.a.rq(0)
v.c=0
A.aG.hi(v.b,0,4,0)
v.w=0
w=v.r
A.d.hi(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
alq(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aY5(u,0)
v.c=0}v.a.aGW(1)},
Bm(d,e,f,g){var w=this.ccX(e,f,g)
f+=w
g-=w
w=this.ccY(e,f,g)
this.ccO(e,f+w,g-w)},
JB(d,e){var w,v=this,u=C.fTO(v.a),t=u.a
t===$&&B.c()
t=C.fJX(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fJX(w,3)
v.ccS()
v.ccP(u)
v.apv()
v.c79(d,e)
v.l7(0)
return 20},
aY5(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nF(A.aG.gaN(d),d.byteOffset,d.length).getUint32(e,A.i_===w.d)
if(w.w===16)w.apv()},
apv(){this.cKa()
this.w=0
A.d.hi(this.r,0,16,0)},
ccO(d,e,f){while(f>0){this.alq(d[e]);++e;--f}},
ccY(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aY5(d,e)
e+=4
f-=4
w.aGW(4)
v+=4}return v},
ccX(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.alq(d[e]);++e;--f;++v}return v},
ccS(){this.alq(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.alq(0)}},
ccP(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.apv()
u=v.d
switch(u){case A.i_:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.CD:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.R(B.ba("Invalid endianness: "+u.u(0)))}},
c79(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i_===this.d,s=0;s<w;++s){r=v[s]
q=J.nF(A.aG.gaN(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cbX.prototype={
cKa(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pE[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pE[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pE[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pE[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pE[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pE[30]
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
C.cbT.prototype={
b9P(d){var w,v,u,t,s=this,r=s.a
r.l7(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bm(0,w,0,v)
w=s.d
w===$&&B.c()
r.JB(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hi(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.ha(w,0,u,s.d)
s.b4H(s.d,u,54)
s.b4H(s.e,u,92)
u=s.d
r.Bm(0,u,0,u.length)},
JB(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.JB(s,w)
s=u.e
t.Bm(0,s,0,s.length)
v=t.JB(d,e)
s=u.e
A.aG.hi(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bm(0,s,0,s.length)
return v},
b4H(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cbO.prototype={}
C.cbN.prototype={
a00(d){return(D.nD[d&255]&255|(D.nD[d>>>8&255]&255)<<8|(D.nD[d>>>16&255]&255)<<16|D.nD[d>>>24&255]<<24)>>>0},
bg3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.R(B.dF("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.nF(A.aG.gaN(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a00((m>>>8|(m&$.pE[24])<<24)>>>0)^D.cko[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nF(A.aG.gaN(e),e.byteOffset,w)
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
p=(p^f.a00((k>>>8|(k&$.pE[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a00((k>>>8|(k&$.pE[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nF(A.aG.gaN(e),e.byteOffset,w)
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
p=(p^f.a00((g>>>8|(g&$.pE[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a00(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.R(B.ba("Should never get here"))}return s},
bH6(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nF(A.aG.gaN(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e2[a8&255]
u=D.e2[a9>>>8&255]
t=$.pE[8]
s=D.e2[b0>>>16&255]
r=$.pE[16]
q=D.e2[b1>>>24&255]
p=$.pE[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e2[a9&255]
s=D.e2[b0>>>8&255]
u=D.e2[b1>>>16&255]
v=D.e2[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e2[b0&255]
u=D.e2[b1>>>8&255]
s=D.e2[a8>>>16&255]
q=D.e2[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e2[b1&255]
a8=D.e2[a8>>>8&255]
a9=D.e2[a9>>>16&255]
b0=D.e2[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e2[n&255]
b0=D.e2[m>>>8&255]
a9=D.e2[l>>>16&255]
a8=D.e2[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e2[m&255]
b0=D.e2[l>>>8&255]
o=D.e2[b1>>>16&255]
s=D.e2[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e2[l&255]
o=D.e2[b1>>>8&255]
b0=D.e2[n>>>16&255]
u=D.e2[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e2[b1&255]
o=D.e2[n>>>8&255]
s=D.e2[m>>>16&255]
v=D.e2[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e2[a8&255]^C.n1(D.e2[a9>>>8&255],24)^C.n1(D.e2[b0>>>16&255],16)^C.n1(D.e2[b1>>>24&255],8)^b6[w][0]
m=D.e2[a9&255]^C.n1(D.e2[b0>>>8&255],24)^C.n1(D.e2[b1>>>16&255],16)^C.n1(D.e2[a8>>>24&255],8)^b6[w][1]
l=D.e2[b0&255]^C.n1(D.e2[b1>>>8&255],24)^C.n1(D.e2[a8>>>16&255],16)^C.n1(D.e2[a9>>>24&255],8)^b6[w][2]
b1=D.e2[b1&255]^C.n1(D.e2[a8>>>8&255],24)^C.n1(D.e2[a9>>>16&255],16)^C.n1(D.e2[b0>>>24&255],8)^b6[w][3]
a7=D.nD[n&255]
b0=D.nD[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nD[l>>>8&255]
a9=D.nD[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nD[b1>>>8&255]
h=D.nD[n>>>16&255]
g=D.nD[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nD[l>>>24&255]
s=s[3]
a1=J.nF(A.aG.gaN(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nF(A.aG.gaN(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nF(A.aG.gaN(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nF(A.aG.gaN(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bE0(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nF(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nF(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nF(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nF(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e1[a6&255]
v=D.e1[b0>>>8&255]
u=$.pE[8]
t=D.e1[a5>>>16&255]
s=$.pE[16]
r=D.e1[a4>>>24&255]
q=$.pE[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e1[a4&255]
t=D.e1[a6>>>8&255]
v=D.e1[b0>>>16&255]
w=D.e1[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e1[a5&255]
v=D.e1[a4>>>8&255]
t=D.e1[a6>>>16&255]
r=D.e1[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e1[b0&255]
a5=D.e1[a5>>>8&255]
a4=D.e1[a4>>>16&255]
a6=D.e1[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e1[p&255]
a6=D.e1[b0>>>8&255]
a4=D.e1[n>>>16&255]
a5=D.e1[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e1[o&255]
a4=D.e1[p>>>8&255]
a7=D.e1[b0>>>16&255]
t=D.e1[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e1[n&255]
a7=D.e1[o>>>8&255]
a5=D.e1[p>>>16&255]
v=D.e1[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e1[b0&255]
a7=D.e1[n>>>8&255]
t=D.e1[o>>>16&255]
w=D.e1[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e1[a6&255]^C.n1(D.e1[b0>>>8&255],24)^C.n1(D.e1[a5>>>16&255],16)^C.n1(D.e1[a4>>>24&255],8)^b5[a9][0]
o=D.e1[a4&255]^C.n1(D.e1[a6>>>8&255],24)^C.n1(D.e1[b0>>>16&255],16)^C.n1(D.e1[a5>>>24&255],8)^b5[a9][1]
n=D.e1[a5&255]^C.n1(D.e1[a4>>>8&255],24)^C.n1(D.e1[a6>>>16&255],16)^C.n1(D.e1[b0>>>24&255],8)^b5[a9][2]
b0=D.e1[b0&255]^C.n1(D.e1[a5>>>8&255],24)^C.n1(D.e1[a4>>>16&255],16)^C.n1(D.e1[a6>>>24&255],8)^b5[a9][3]
a4=D.xz[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xz[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xz[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xz[o>>>8&255]
i=D.xz[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xz[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nF(A.aG.gaN(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bJy.prototype={}
C.bJz.prototype={
gJ(d){var w=this.a.length
return w},
alW(){return B.qD(this.a,A.hN,null,null)}}
C.b6K.prototype={
u9(d){return C.hvs(d)}}
C.cla.prototype={
L9(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7Z(v,t+20,u+16,t,u,B.tj(d.x))},
mR(d){return!1}}
C.bKr.prototype={
cvL(d){if(this.b)throw B.R(B.ba("FontLoader is already loaded"))
this.c.push(d.bx(new C.bKs(),x.E))},
mb(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.R(B.ba("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mb)
case 6:w=5
return B.b(p.fdP(f,r),$async$mb)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mb,v)}}
C.ata.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6p.prototype={
A(d,e){if(e==null)return!1
if(J.bG(e)!==B.aW(this))return!1
return e instanceof C.a6p&&e.a===this.a},
gV(d){return B.bo(B.aW(this),B.w1(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aW(this)===D.fd_)return"["+(w+B.dY(this.a))+"]"
return"[ObjectKey "+(w+B.dY(this.a))+"]"}}
C.aSC.prototype={
bX(d){var w=new C.axW(!0,this.e,null,new B.da(),B.cb())
w.bW()
w.scw(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxI(0,!0)
w=this.e
if(!w.A(0,e.ag)){e.ag=w
e.aCG()}}}
C.axW.prototype={
sxI(d,e){return},
goM(){var w=this.a8$
return w!=null},
gkD(){var w=this.a8$
return w!=null},
KZ(d){var w=d==null?B.fOw(null):d
w.sa2u(this.ag)
return w}}
C.ZW.prototype={
S(){return new C.aGe(B.aZ(x.N))},
cIt(d){return this.d.$1(d)},
cGi(){return this.e.$0()}}
C.aGe.prototype={
Z(){this.a0()
this.Nu()},
Nu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cGi(),$async$Nu)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eRZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nu,v)},
WZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.eS2(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eS3(t))
w=3
return B.b(C.alb(p),$async$WZ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eS4(t,s,p))
w=4
return B.b(t.Nu(),$async$WZ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WZ,v)},
a_1(d){return this.cgW(d)},
cgW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eS_(t))
s=J.q(d,"id")
w=3
return B.b(C.bUA(J.k(s==null?"":s)),$async$a_1)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eS0(t))
w=1
break}q=C.fJr(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cIt(B.a([q],x.D)),$async$a_1)
case 4:if(t.c==null){w=1
break}t.n(new C.eS1(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a_1,v)},
Nt(d,e){return this.bEp(0,e)},
bEp(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eRU(q),r,null,!0,!0,x.y),$async$Nt)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eRV(t))
s=s.h(e,"id")
w=4
return B.b(C.ala(J.k(s==null?"":s)),$async$Nt)
case 4:if(t.c==null){w=1
break}t.n(new C.eRW(t))
w=5
return B.b(t.Nu(),$async$Nt)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nt,v)},
cuP(d){var w=B.bh(d),v=w==null?null:w.bQ()
if(v==null)return""
return A.i3[B.bC(v)-1]+" "+B.bO(v)},
aME(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LS,A.n),w,e,w,w,w,w,w,e)},
aMD(d){return this.aME(d,44)},
b1X(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LS:u,r=B.m(14),q=B.V(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.Ha,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Ha,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aP,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.blP,u,u,u)],p))}return B.D(B.aH(A.c5,B.dj(u,B.B(q,A.m,u,A.b6,A.j,0,u,u),u,u,A.b9,new B.o(u,u,u,r,u,s,A.n),A.hS,u,u,u,A.ws,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eS8(this,d),u,u,u,u,u,u,!1,A.ad),1)},
cb0(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.da.j(0.14):D.Up,n=B.m(18),m=p?A.da:A.dw
m=B.H(m,A.r,p?1.8:1)
w=this.aMD(A.pd)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aL2,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.d6,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aL4,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LS:q
u=p?q:B.H(A.ba,A.r,1.6)
r=p?D.bzL:q
return B.aH(q,B.dj(q,B.B(B.a([w,A.bd,t,B.dj(q,r,q,q,A.b9,new B.o(q,q,u,q,q,v,A.a6),A.fV,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b9,new B.o(o,q,m,n,q,q,A.n),A.fV,q,q,A.d9,A.bl,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRY(this,p,d),q,q,q,q,q,q,!1,A.ad)},
ciq(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cuP(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.dw,A.r,1)
v=r.aMD(A.L8)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aL2,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.d6,B.d(p+" slides"+t,q,q,q,q,q,q,D.aL4,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZI(A.hq,A.bq,"Bring it back",r.r?q:new C.eS5(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bo,r.aZI(A.e6,A.cF,"Delete",r.r?q:new C.eS6(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.Up,q,w,o,q,q,A.n),q,q,q,A.d9,D.bgn,q,q,q)},
aZI(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hq(B.aH(w,B.p(w,B.V(d,v?A.ba:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ad),w,f,w,w)},
apL(d,e,f){var w=null
return new B.C(D.bfp,B.v(B.a([B.V(d,A.ba,w,w,w,46),A.ab,B.d(e,w,w,w,w,w,w,D.eMx,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.eFl,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bR,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.ba,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aME(A.xm,46),A.bd,D.bmy],t)
if(j.r)s.push(D.dQv)
s.push(B.aF(i,i,i,i,A.LC,i,i,i,new C.eSb(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.dw,A.r,1)
o=J.a7(h)
q=B.a([A.T,u,new B.C(D.biX,s,i),B.p(i,B.B(B.a([j.b1X(0,A.wY,"Save",j.a.c.length),j.b1X(1,A.Ln,"Saved",o.gJ(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bi0,A.eh,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cF:A.bq).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cF:A.bq).j(0.4),A.r,1)
p=j.y
n=p?A.L9:A.el
n=B.V(n,p?A.cF:A.bq,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.aa,B.D(B.d(m,i,i,i,i,i,i,A.a4b,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bhX,A.iK,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eIH,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aH(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eLC,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eSc(j,v),i,i,i,i,i,i,!1,A.ad))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.apL(A.pd,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cb0(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dQ5)
else if(j.e==null)s.push(j.apL(A.ag7,"Could not reach the database","Check the connection, then open this again."))
else if(o.gai(h))s.push(j.apL(A.oa,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gah(h);r.C();)s.push(j.ciq(r.gT(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.ci,B.cL(u,i,W.adm,i,i,A.ak,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbY1()
p=s?i:D.LS
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b3.j(0.4),A.cs,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wY,m?A.j1:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.biz,B.aH(i,B.dj(i,B.B(B.a([k,A.a3B,new B.dm(1,A.ci,B.eZ(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j1:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.eb),i)],t),A.m,i,A.b6,A.j,0,i,i),i,i,A.b9,new B.o(s,i,i,o,n,p,A.n),A.hS,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ad),i))}else q.push(A.T)
return B.p(i,B.bq(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.aj,!0,!1),A.h,i,new B.aX(0,1/0,0,w.a.b*0.9),D.aST,i,i,i,i,i,i,i,i)}}
C.nV.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a4().ab()],x.N,x.z)}}
C.WI.prototype={
S(){return new C.av_(B.a([],x.k),B.f9(null,x.H))},
gdT(){return this.c}}
C.av_.prototype={
Z(){this.a0()
this.NB()},
NB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$NB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_U(t.a.c),$async$NB)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cAm(t,s))
case 1:return B.h(u,v)}})
return B.i($async$NB,v)},
coj(d){var w,v,u,t=this
d.c=new B.Q(Date.now(),0,!1)
w=J.pL(t.d,new C.cAp(d))
v=w<0
if(v&&C.hsD(d))return t.f
u=t.d
if(v)J.p1(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fAp(new C.cAq(t),v)
return t.f=t.f.bx(new C.cAr(t,d),v).eN(new C.cAs())},
Hh(d,e,f){return this.c4N(0,e,f)},
aU2(d,e){return this.Hh(0,e,!1)},
c4N(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a8(s,!1).cp(B.eD(new C.cAl(t,e),!1,null,x.H)),$async$Hh)
case 3:w=4
return B.b(t.f,$async$Hh)
case 4:w=5
return B.b(t.NB(),$async$Hh)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hh,v)},
aTk(d){var w=A.o.u(1000*Date.now()),v=d==null?D.ddb:d
this.Hh(0,new C.nV(w,v,new B.Q(Date.now(),0,!1)),!0)},
bXx(){return this.aTk(null)},
aaM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.cAt(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aTk(s)
case 1:return B.h(u,v)}})
return B.i($async$aaM,v)},
Hg(d,e){return this.bEh(0,e)},
bEh(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cAg(e),s,null,!0,!0,x.y),$async$Hg)
case 3:if(g!==!0){w=1
break}t.n(new C.cAh(t,e))
w=4
return B.b(t.f,$async$Hg)
case 4:w=5
return B.b(C.ae2(t.a.c,e.a),$async$Hg)
case 5:w=6
return B.b(t.NB(),$async$Hg)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hg,v)},
C4(d){return this.bwD(d)},
bwD(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$C4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.cAc(d),r,!0,!0,!1,null,!1,!1,x.N),$async$C4)
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
return B.b(t.aU2(0,d),$async$C4)
case 9:w=5
break
case 7:w=10
return B.b(F.fJZ(r,d.b,null),$async$C4)
case 10:w=5
break
case 8:w=11
return B.b(t.Hg(0,d),$async$C4)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C4,v)},
bRr(){var w,v,u=null,t=[D.dde,D.ddc,D.ddd],s=new C.cAj(),r=B.m(26),q=x.V,p=B.a([new B.ab(0,A.G,A.dl.j(0.4),A.eP,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b1(999,999)
n.push(B.p(u,new B.w(D.cZc[w],u,A.oB,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bv(v,v,v,v),u,u,A.n),u,u,u,u,A.nu,u,u,u))}return B.p(u,B.B(B.a([B.D(B.v(B.a([D.f8F,A.P,B.c8(A.bJ,n,A.bx,6,6),A.aO,B.aH(u,B.p(u,D.ep4,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ab(0,A.G,A.x.j(0.2),A.cA,10)],q),u,A.n),u,u,u,u,V.adJ,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cAi(this),u,u,u,u,u,u,!1,A.ad)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a5(130,110,new B.am(A.A,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bGV,A.n),u,u,u,u,D.bj6,u,u,u)},
bwB(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ab(0,A.G,A.x.j(0.5),A.cs,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.W,v,A.b_,A.q,B.a([B.eZ(A.A,F.alJ(d.b),A.h,A.bP),D.dVm,B.an(v,B.aH(v,B.p(v,D.bAx,A.h,v,v,D.aTL,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cA7(this,d),v,v,v,v,v,v,!1,A.ad),v,v,v,4,4,v)],r),v),A.ao),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eCP,v,v,v)
w=u===1?"":"s"
return B.aH(v,B.v(B.a([new B.fD(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eIR,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cA8(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cA9(this,d),v,v,v,v,v,v,!1,A.ad)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.C(H.acj,B.hq(B.aH(s,B.p(s,A.aiL,A.h,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b3.j(0.5),A.J,12)],x.V),E.uT,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbYM(),s,s,s,s,s,s,!1,A.ad),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mv,s,s,s,!0,s,s,s,s,s,D.f8J,s,s,s,1,s,!0)
if(t.e)r=D.aWZ
else{w=t.bRr()
v=B.a([D.eWt,A.aa],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.aa(t.d),s,s,s,s,s,s,D.eCi,s,s,s),A.h,s,s,new B.o(D.b0f,s,s,u,s,s,A.n),s,s,s,s,A.E2,s,s,s))}r=B.a([new B.nr(Ad.Vy,new B.lP(w,s),s),new B.nr(D.bit,new B.lP(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cj(t.d))r.push(D.euH)
else r.push(new B.nr(D.bhZ,B.Ng(new B.o_(new C.cAu(t),J.aa(t.d),!0,!0,!0,0,B.ri(),s),D.aWg),s))
r=B.uR(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.ak,!1,r)}return B.cd(q,D.b_b,r,s,!1,!1,s,s)}}
C.WG.prototype={
S(){return new C.auW(B.a([],x.bx))},
S8(d){return this.d.$1(d)}}
C.aC8.prototype={}
C.auW.prototype={
aWG(d,e,f){var w=$.av(),v=new B.ap(new B.bc(d,A.b2,A.aM),w),u=this.gaU1()
v.aJ(0,u)
w=new B.ap(new B.bc(e,A.b2,A.aM),w)
w.aJ(0,u)
return new C.aC8(v,w,f)},
CT(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cO(A.p3,new C.czB(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.av()
u=new B.ap(new B.bc(w.a,A.b2,A.aM),v)
t=m.gaU1()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ap(new B.bc(w.b,A.b2,A.aM),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ap(new B.bc(w.c,A.b2,A.aM),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ap(new B.bc(p.a,A.b2,A.aM),v)
o.aJ(0,t)
n=new B.ap(new B.bc(p.b,A.b2,A.aM),v)
n.aJ(0,t)
r.push(new C.aC8(o,n,p.c))}if(r.length===0)r.push(m.aWG("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.gos()
q=r.a
q.S8(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.av()
q.O$=0
q=r.e
q===$&&B.c()
q.R$=w
q.O$=0
q=r.f
q===$&&B.c()
q.R$=w
q.O$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.R$=w
s.O$=0
s=t.b
s.R$=w
s.O$=0}r.a2()},
gos(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.m3(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qI(n,w,v,t,u)},
zM(){var w=0,v=B.j(x.H),u=this,t
var $async$zM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.gos()
t=u.a
w=2
return B.b(t.S8(t.c),$async$zM)
case 2:return B.h(null,v)}})
return B.i($async$zM,v)},
bYK(){this.n(new C.czA(this))
this.CT()},
aT2(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.czD(w,d,v))
w.CT()},
bYL(d,e){var w=A.d.cu(this.w,e)
this.n(new C.czL())
this.CT()
$.aT.x1$.push(new C.czM(w))},
OJ(d){return this.caR(d)},
caR(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OJ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kG(80,1400,A.ey),$async$OJ)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$OJ)
case 8:p=f
o=q.b.toLowerCase()
n=J.afv(o,".png")?"image/png":"image/jpeg"
r.n(new C.czE(d,n,p))
r.CT()
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
return B.i($async$OJ,v)},
wN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h5q(r,t.gos()),$async$wN)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.czC(t,s))
t.CT()
case 1:return B.h(u,v)}})
return B.i($async$wN,v)},
cb8(d){var w,v=this,u=null,t=F.fhW(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hh(D.btX,D.eYL,new C.czG(v,d),u),u)
w=x.p
return new B.C(A.cL,new B.am(A.W,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fF(t,A.A,u,u,A.cl,A.bP,!0,140,!1,u,1/0),A.ao),B.an(u,B.B(B.a([v.aZJ(A.kE,new C.czH(v,d)),A.bo,v.aZJ(A.ct,new C.czI(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZJ(d,e){var w=null
return B.aD(!1,A.a1,!0,w,B.aI(!1,w,!0,new B.C(A.hn,B.V(d,A.c,w,w,w,18),w),A.cH,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aT,0,w,w,A.cH,w,w,A.ac)},
Hi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zM(),$async$Hi)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fJZ(s,t.gos(),new C.czK(t)),$async$Hi)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hi,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.C(A.qh,B.hh(D.byw,D.f3j,n.gatl(),B.fo(m,m,m,m,m,m,m,m,m,m,m,A.bH,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aiK,m,m,m,new C.czN(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.TO,m,1,m,m,m,!1,m,!1,E.mv,m,m,m,!0,m,m,m,m,m,D.eZw,m,m,m,1,m,!0),j=Ao.aRo(O.kV,A.c,Aa.SU,A.nz,D.f_d,n.gbYJ()),i=B.m(18),h=n.gatk(),g=B.a([new B.ab(0,A.G,A.x.j(0.4),A.j8,12)],x.V)
g=B.aH(m,B.p(m,new B.a5(92,142.1818181818182,B.eZ(A.A,F.alJ(n.gos()),A.h,A.dq),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ad)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.D(B.v(B.a([D.fa9,A.av,B.d(F.fIv(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eOg,m,m,m),A.T,B.dq(E.ai0,E.aLL,h,B.bk(A.dl,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.TO,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nM,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b1(16,16)
u=new B.ay(O.kV.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bxh,m,m,m,v===0?m:new C.czO(n,v),m,m,m,m,"Move up",A.c8)
r=i.length
q=B.aF(m,m,m,m,D.bDp,m,m,m,v===r-1?m:new C.czP(n,v),m,m,m,m,"Move down",A.c8)
r=r===1?m:new C.czQ(n,v)
p=new B.b1(12,12)
o=new B.b1(12,12)
g.push(B.p(m,B.v(B.a([new B.cC(A.b0,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eOL,m,m,m,m,m,m,m,m,m),A.b8,s,q,B.aF(m,m,m,m,B.V(A.e6,A.o2,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c8)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bv(p,p,p,p),A.dd),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.cb8(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bv(o,o,o,o),A.dd),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mv,m,new B.c1(u,u,u,u),new B.bv(w,w,w,w),m,m,A.n),m,m,new C.a6p(h),A.e0,D.bgB,m,m,m))}return B.nX(!0,B.cd(k,E.aaH,B.cL(g,m,D.bh2,m,m,A.ak,!1),m,!1,!1,j,m),new C.czR(n),x.C)}}
C.auY.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cF:E.mv,q=B.m(16),p=B.m(16),o=s?A.aE.j(0.08):A.c.j(0.04)
s=s?A.aE.j(0.16):A.dl.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.fq,B.aD(!1,A.a1,!0,t,B.aI(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aKr,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.em,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anQ.prototype={
S(){return new C.aAY()}}
C.aAY.prototype={
Z(){this.a0()
this.Xy()},
bp(d){this.bC(d)
if(d.c!=this.a.c)this.ZS()},
ZS(){var w=0,v=B.j(x.H),u=this,t
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$ZS)
case 2:u.d=null
if(u.c!=null)u.n(new C.dYE(u))
w=3
return B.b(u.Xy(),$async$ZS)
case 3:return B.h(null,v)}})
return B.i($async$ZS,v)},
Xy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.aa(n)===0){w=1
break}t=4
if(J.cV(n,"http://")||J.cV(n,"https://")||J.cV(n,"data:")){o=B.Wj(B.cr(n,0,null),new B.NE(!0))
r.d=o}else{o=B.fg("unsupported video ref")
throw B.R(o)}w=7
return B.b(o.hW(0).cJ(0,A.p_),$async$Xy)
case 7:if(r.c==null){w=1
break}r.d.rs(!1)
r.n(new C.dYC(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a6(m)
$.al.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dYD(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xy,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
c_G(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fT(0)
w.n(new C.dYF(w))}else{v.p7(0)
w.n(new C.dYG(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iY.j(0.92),D.IN.j(0.95)],x.O)
w=B.H(A.bT.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pg,A.bT,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bT(B.au(B.v(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a3(A.aw,A.aC,A.w,m,o,o),A.n),A.bb)}if(p.f)return B.au(B.V(A.ahm,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aXI
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eZ(A.A,new B.a5(r,q,new B.zb(s,o),o),A.q,A.bP)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.au(B.p(o,B.V(A.iM,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.N(w,w,w,w),o,o,o),o,o,o))}return B.aH(o,B.bu(n,new B.am(A.W,o,A.b_,A.q,m,o),A.ao),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_F(),o,o,o,o,o,o,!1,A.ad)}}
C.wL.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jb.prototype={}
C.ab6.prototype={
B(d){return B.p9(new C.dQ2(this,B.M(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aaw.prototype={
B(d){var w,v,u=null,t=B.M(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iY.j(t?0.35:0.4),A.r,1),p=t?D.Ja:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.x.j(t?0.3:0.08),A.cs,14)],o),m=B.m(10),l=B.H(A.bT.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.x.j(0.14),A.dE,6)],o)
w=this.c
o=B.D(B.p(u,new B.fD(0.5625,C.hKw(w),u),A.ao,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aea,u,u,u,u),1)
m=D.iY.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iY,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.a1,!0,u,B.aI(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.d6,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.b5C,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c1(new B.ay(m,1,A.r,-1),A.X,A.X,A.X),u,u,u,A.n),u,u,u,u,D.acx,u,u,u)],v),A.ag,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)}}
C.wO.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nh.prototype={}
C.bfI.prototype={
U9(d){var w=null
return new B.bI(A.a3,w,w,B.Gh(A.A,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bwk(){return this.U9(1)},
atR(d){var w=null,v=B.m(8),u=B.H(A.hP,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a91,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hP,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hP,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b6,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atR("TAARIFA ZA WANANDOA"),A.ar,w.bwk(),A.d6,w.U9(0.9),A.d6,w.U9(0.7),A.P,w.atR("TAMKO LA MAKUBALIANO"),A.h1,w.U9(1),A.d6,w.U9(0.95),A.P,w.atR("MASHAHIDI"),A.b8,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ab9.prototype={
B(d){return B.p9(new C.e2E(B.M(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acN.prototype={
B(d){var w,v,u,t,s,r=null,q=B.M(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.au.j(q?0.35:0.4),A.r,1),m=q?D.b5f:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.x.j(q?0.3:0.08),A.cs,14)],l),j=B.m(10),i=B.H(A.au.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.x.j(0.14),A.dE,6)],l)
w=this.c
v=C.fJ_(w.a)
if(v==null)v=A.d.gL(D.Oh)
u=B.aY(v.f)
t=B.aY(v.r)
s=x.p
l=B.D(B.p(r,new B.fD(0.5625,new B.am(A.W,r,A.b_,A.q,B.a([B.bX(0,B.fF(C.fIZ(v.d),A.A,r,r,A.cl,A.bP,!0,r,!1,r,r),0,0,0),new B.C(A.add,new C.bfI(v,u,t,r),r)],s),r),r),A.ao,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aea,r,r,r,r),1)
j=A.au.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.Jb,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.a1,!0,r,B.aI(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.d6,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b_D,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c1(new B.ay(j,1,A.r,-1),A.X,A.X,A.X),r,r,r,A.n),r,r,r,r,D.acx,r,r,r)],s),A.ag,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
C.kE.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5T.prototype={}
C.TX.prototype={
S(){var w=$.av()
return new C.aBg(new B.co(null,x.A),new B.ap(A.as,w),new B.ap(A.as,w),B.mb(0,null,null),A.d.gL(D.a_j),D.dnu,B.a([],x.L),B.a([],x.gE))}}
C.aBg.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yz(C.flP(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fkM().bx(new C.e5W(v),w)
$.tv().jV(0,"assets/images/ngmy_logo.png").bx(new C.e5X(v),w).eN(new C.e5Y())},
p(){var w=this,v=w.e,u=$.av()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
aey(d){var w=null,v=this.c
if(v!=null)v.H(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Hx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Hx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kG(88,1600,A.ey),$async$Hx)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Hx)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h5H(m,p),$async$Hx)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bzn(new B.pj(o,1),m),$async$Hx)
case 10:if(r.c!=null)r.n(new C.e5y(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a6(k)
r.aey("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hx,v)},
US(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$US=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h5H(s,q),$async$US)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bzn(new B.pj(r,1),s),$async$US)
case 4:if(t.c!=null)t.n(new C.e5u(t,r))
case 1:return B.h(u,v)}})
return B.i($async$US,v)},
abt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.n(new C.e5F(q))
t=4
q.a.toString
p=C.hOV()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abt)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5G(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a6(i)
q.aey(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5H(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abt,v)},
XK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.aa(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.n(new C.e5A(q,i))
t=4
q.a.toString
p=C.hOU()
h=q.z
m=q.y
l=q.w
k=B.z(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XK)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5B(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a6(g)
if(q.c!=null)q.n(new C.e5C(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5D(q))
$.aT.x1$.push(new C.e5E(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XK,v)},
c0n(d){this.n(new C.e5z(this,d))},
D7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.n(new C.e5w(q))
t=4
w=7
return B.b($.aT.gm5(),$async$D7)
case 7:w=8
return B.b(B.bN(A.no,null,x.H),$async$D7)
case 8:k=$.aT.ag$.x.h(0,q.d)
p=k==null?null:k.gb6()
if(!(p instanceof B.q2))throw B.R("The page is not ready yet.")
w=9
return B.b(p.lQ(1800/p.gX(0).a),$async$D7)
case 9:o=e
w=10
return B.b(o.hf(A.fN),$async$D7)
case 10:n=e
if(n==null)throw B.R("Could not make the picture.")
w=11
return B.b(A5.ae5(J.f3(A.dD.gaN(n)),"ngmy_news.png","image/png"),$async$D7)
case 11:m=e
q.aey(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a6(i)
q.aey(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5x(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D7,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kG,a2,a2,a2,new C.e5N(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.bz1,a2,a2,a2,new C.e5O(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.oh,a2,a2,a2,a4?a1.gaUU():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zq,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.epd,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.x.j(0.6),A.eP,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fD(0.7142857142857143,B.eZ(A.A,new B.en(new C.aYy(t,s,r,a1.x,a2),a1.d),A.h,A.dq),a2),A.h,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.R6,a2,a2,a2)
t=a1.as?a2:a1.gc0m()
t=B.a([B.D(B.dq(D.bzM,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bk(D.ro,a2,a2,a2,A.c,A.fQ,a2,a2,new B.b6(B.m(14),N.vN),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.m(10),B.fF(r,A.A,a2,a2,A.cl,A.bP,!1,48,!1,a2,48),A.ao)
A.d.v(t,B.a([A.ax,r,B.aF(a2,a2,a2,a2,D.bwB,a2,a2,a2,a1.as?a2:a1.gbCV(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.R6,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aOo("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.ah,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cUi[o]
p.push(B.mL(a2,D.ro,new B.w(n.a,a2,A.ox,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hs,new C.e5P(a1,n),a2,a2,N.vN,a2))}p=B.c8(A.bJ,p,A.bx,6,8)
m=a1.Q
m=B.c8(A.bJ,B.a([D.f8S,A.bd,B.jQ(a2,a2,a2,D.eVm,a2,new C.e5Q(a1),m==="en",a2,a2,a2,a2),A.aa,B.jQ(a2,a2,a2,D.eVh,a2,new C.e5R(a1),m==="sw",a2,a2,a2,a2)],w),A.r1,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.R6,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.df(D.a_j,0,B.dK(10,"count",x.S),j),h=i.$ti,i=new B.bU(i,i.gJ(0),h.k("bU<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aMX(g==null?h.a(g):g))}k=B.cL(k,a2,a2,a2,a2,A.b0,!1)
i=B.a([],w)
for(j=B.df(D.a_j,10,a2,j),h=j.$ti,j=new B.bU(j,j.gJ(0),h.k("bU<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aMX(g==null?h.a(g):g))}j=B.cL(i,a2,a2,a2,a2,A.b0,!1)
i=a1.as?a2:a1.gc0p()
h=B.m(18)
v=B.a([new B.ab(0,A.G,A.by.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cL,s,a2),t,A.ay,new B.C(A.cL,r,a2),q,A.P,p,A.T,m,A.ay,new B.C(A.cL,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aO,B.aH(a2,B.p(A.A,B.B(B.a([D.bzG,A.aa,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fR,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.h,a2,a2,new B.o(a2,a2,a2,h,v,G.t8,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ad)],w)
if(a4){u=B.a([A.dW,B.B(B.a([D.d83,A.ax,D.bmR],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b3.j(0.35):D.ro
p=new B.b1(16,16)
d=new B.ay(A.bG,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.w(f.b,a2,D.eMi,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h,a2,N.SI,new B.o(q,a2,new B.c1(d,d,d,d),new B.bv(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cL,A.iK,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cHQ[o]
t.push(B.mL(a2,D.ro,new B.w(a0,a2,A.Hl,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hs,new C.e5S(a1,a0),a2,a2,N.vN,a2))}u.push(B.c8(A.bJ,t,A.bx,6,8))
u.push(A.T)
t=B.D(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aOo("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.ah,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e5T(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc0o()
u.push(B.B(B.a([t,A.aa,B.Gl(A.xr,s,B.na(a2,A.b3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaUU()
u.push(B.dq(A.oh,D.f4L,t,B.bk(A.dk,a2,a2,a2,a2,A.H8,a2,a2,new B.b6(B.m(16),A.X),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cL(v,a1.r,A.ad0,a2,a2,A.ak,!1)],w)
if(a1.as){u=A.x.j(0.55)
t=B.m(20)
s=B.H(E.jy.j(0.5),A.r,1)
v.push(B.bX(0,B.ec(B.au(B.p(a2,B.B(B.a([E.a3C,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iC,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.h,a2,a2,new B.o(E.zi,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bjo,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cd(a3,A.zq,new B.am(A.W,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aOo(d){var w=null
return B.bn(w,new B.b3(4,B.m(14),A.X),w,A.eM,w,w,w,w,!0,w,w,w,w,w,w,D.ro,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,R.Hg,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aMX(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aY(d.f),p=s?A.by:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.aY(d.x),t,t,t,5,t,A.lo,t,t,t,t),A.h1],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.aY(v).j(0.5),t,t,t,2,t,D.bfD,t,t,t,t))
w.push(A.d6)
w.push(new B.C(A.jH,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.aY(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aH(t,B.p(t,B.v(w,A.m,t,A.b6,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kx,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e5v(this,d),t,t,t,t,t,t,!1,A.ad)}}
C.yz.prototype={
b6M(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yz(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cz1(d){var w=null
return this.b6M(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
az3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c7M(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fm(g,B.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c7K(),B.U(w).k("J<1,n>")).bZ(0,new C.c7L())
t=B.z(w,w.$ti.k("G.E"))}else t=k
w=h.$1("paper")
w=J.aa(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.aa(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.aa(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b6M(p,r,q,J.aa(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEg(d){return this.f}}
C.rE.prototype={
a3(){return"NewsLayout."+this.b}}
C.Ap.prototype={
a3(){return"NewsFrame."+this.b}}
C.l_.prototype={}
C.aYy.prototype={
qv(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aY(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aUW(d,e,f,g){return this.qv(d,e,null,1.25,f,A.bi,g)},
O4(d,e,f,g,h){return this.qv(d,e,f,1.25,g,A.bi,h)},
atX(d,e,f,g,h){return this.qv(d,e,null,f,g,A.bi,h)},
atW(d,e,f,g,h){return this.qv(d,e,f,g,0,A.bi,h)},
aUY(d,e,f,g,h){return this.qv(d,e,null,f,0,g,h)},
c0t(d,e,f,g,h,i){return this.qv(d,e,f,g,0,h,i)},
atV(d,e,f,g){return this.qv(d,e,null,f,0,A.bi,g)},
abw(d,e,f){return this.qv(d,e,null,f,0,A.bi,A.cJ)},
aUX(d,e,f,g,h){return this.qv(d,e,f,g,0,h,A.cJ)},
c0s(d,e,f,g){return this.qv(d,e,null,f,0,g,A.cJ)},
c0r(d,e,f,g){return this.qv(d,e,f,g,0,A.bi,A.cJ)},
abx(d,e,f,g,h,i){return this.qv(d,e,f,g,h,A.bi,i)},
aUV(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.l3(new B.es(d,u,u,A.cW,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.cm,new B.k4(1),u,u,h,u,A.cj,u)
v.xY(g)
if(!v.b.a.c.gaAF())return w
w-=2}return j},
abu(d,e,f,g,h,i,j,k){return this.aUV(d,e,f,g,h,i,j,k,A.bi)},
aw_(d,e,f){var w=null,v=d==null?B.aY(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
avZ(d){return this.aw_(null,!1,d)},
aem(d,e){return this.aw_(null,d,e)},
chA(d,e){return this.aw_(d,!1,e)},
gaX3(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaQV(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
N0(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.abu(w.gaQV(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaQV(),v,g,A.a2,v,v,v,w.atW(u,t,f,1.02,A.O),e,v,v)},
aR_(d){return this.N0(d,A.L,null,2,78,30)},
a94(d,e,f,g,h){return this.N0(d,e,null,f,g,h)},
bRj(d,e,f,g,h){return this.N0(d,A.L,e,f,g,h)},
bRi(d,e,f){return this.N0(d,A.L,null,e,f,30)},
PZ(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.C(A.ky,B.d(s,u,g,A.a2,u,u,u,v.aUX(w,v.aUV(t,w,A.cJ,d,g,h,15,1.2,A.cx),f,1.2,A.cx),e,u,u),u)},
b1D(d){return this.PZ(d,A.L,null,3,24)},
axs(d,e,f,g){return this.PZ(d,e,null,f,g)},
coN(d,e,f){return this.PZ(d,A.L,e,3,f)},
b1E(d,e){return this.PZ(d,e,null,3,24)},
coL(d,e){return this.PZ(d,A.L,null,3,e)},
coM(d,e,f){return this.PZ(d,e,null,3,f)},
anO(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.is,B.d(u.toUpperCase(),v,v,v,v,v,v,w.O4("Roboto",12,d==null?B.aY(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
LY(){return this.anO(null,!0)},
anN(d){return this.anO(null,d)},
byU(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bF
return new B.C(A.ir,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.c0s(this.d.as,13.5,1.2,A.cx),e,w,w),w),w)},
uI(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.Q(Date.now(),0,!1),i=m.gaX3(),h=A.o.ak(j.bv(B.bW(B.bw(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hCH(Math.max(1,B.bw(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aUW(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.abu(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.abu(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aY(h.x)
h=h.ch?B.aY(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eH,l,l,l,m.abx(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.h,t,l,l,l,l,l,l,new B.N(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.byD(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hF,A.j,0,l,l),A.ar,m.aem(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.h,B.aY(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.D(B.d(i,l,1,A.eH,l,l,l,m.atV(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.T,B.B(B.a([B.d(C.byD(j),l,l,l,l,l,l,m.O4(k,13,B.aY(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hF,A.j,0,l,l),A.P,m.chA(B.aY(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaX3()
v=B.d("NGMY",l,l,l,l,l,l,m.atX(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aY(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.x:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.aa,B.et(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qv(k,r*0.72,o,1.05,-0.5,A.cx,A.u),l,l,l),A.h,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.N(t,s,t,s),l,l,l),l),A.b8,new B.dm(1,A.ci,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.abx(k,12.5,B.aY(h).j(0.85),1.3,1.2,A.O),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.h,B.aY(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hF,A.j,0,l,l)
t=m.aem(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.atV(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.av,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aem(!0,1.4),A.av,B.d(C.byD(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.avZ(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.atX(v,u,1,3,A.O),A.L,l,l),A.P,m.aem(!0,1.2),A.av,B.B(B.a([B.d(C.byD(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hF,A.j,0,l,l),A.av,m.avZ(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aaa(d){return this.uI(d,!1)},
abv(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aY(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.abx("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.h,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.N(v,u,v,u),w,w,w)},
c0q(d,e){return this.abv(d,null,e,null)},
aSV(d){var w=null,v=new B.Q(Date.now(),0,!1),u=A.o.G(B.dd(v),12)===0?12:A.o.G(B.dd(v),12),t=B.aY(this.d.w).j(0.75),s=this.atW("Roboto",15,t,1,A.cq),r=B.V(E.afw,t,w,w,w,18),q=A.a.am(A.ok[B.bC(v)-1],0,3),p=A.a.aT(A.o.u(B.fM(v)),2,"0"),o=B.dd(v)>=12?"PM":"AM"
return B.B(B.a([r,A.aa,B.d(q+" "+B.bO(v)+", "+B.bw(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.h,t.j(0.4),w,w,w,20,w,A.fA,w,w,w,1),B.V(d,t,w,w,w,19),A.aa,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
asQ(){return this.aSV(A.m3)},
aZX(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.abx("Roboto",this.abu(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aw2(d,e,f){return this.aZX(d,e,f,30)},
axv(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bF
return new B.C(A.ui,B.d(v,w,e,A.a2,w,w,w,this.c0r("Roboto",f,B.aY(this.d.w).j(0.88),1.35),w,w,w),w)},
b1I(d){return this.axv(d,3,22)},
coY(d,e){return this.axv(d,e,22)},
rM(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fF(r,A.A,s,s,A.cl,A.bP,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.FO(D.bm4,w,s)
if(v==="sepia")w=new B.FO(D.bm3,w,s)}else{r=this.d
v=r.w
u=B.aY(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.V(A.wS,B.aY(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bT(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.w,s,0,B.a([A.K,A.TK.j(0.38)],x.O),s,s),A.n),A.bb))
return new B.a5(d,e,new B.am(A.W,s,A.b_,A.q,v,s),s)},
pE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.aY(j),A.r,3)
j=B.H(B.aY(j),A.r,1)
return B.p(k,B.p(k,l.rM(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eh,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lY,k,k,d)
case 2:w=B.a([new B.ab(0,A.G,A.x.j(0.35),D.dMQ,14)],x.V)
v=l.rM(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.et(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.au(B.d(u,k,2,A.a2,k,k,k,l.aUX(j.as,13.5,D.b0Y,1.1,A.cx),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b3J,k,k,k,w,k,A.n),k,e,k,k,D.bgY,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.aY(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.rM(d-10,e-10),A.ao),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.aY(j.x),A.r,6)
j=B.aY(j.f)
v=t-10
return new B.a5(d,e,B.au(B.p(k,B.hO(l.rM(v,v),A.ao),A.h,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lY,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ab(0,A.G,A.x.j(0.3),D.dMG,10)],x.V)
return B.et(A.A,0.025,new B.a5(d,e,new B.am(A.W,k,A.a9,A.h,B.a([B.bX(0,B.p(k,l.rM(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qk,k,k,k),0,0,0),B.an(k,B.et(A.A,-0.6,B.p(k,k,A.h,A.bH.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.et(A.A,-0.6,B.p(k,k,A.h,A.bH.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aY(j.x)
return new B.a5(d,e,B.b2(B.n5(l.rM(d,e),A.ao,D.fgx),new C.b8W(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.rM(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bw(u));++n){m=new B.b1(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.c4,k,k,new B.bv(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cG(0,q,0,p,k,k,new B.cC(A.b0,A.qC,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.W,k,A.b_,A.q,w,k),A.h,A.eo,k,k,k,e,k,k,D.blm,k,k,d)
case 8:w=d/2
v=B.wa(A.h0,new B.b1(w,w))
j=B.H(B.aY(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.wa(A.hr,new B.b1(w,w)),l.rM(d-10,e-10),A.ao),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ab(0,A.G,A.x.j(0.35),A.fF,22)],x.V)
return B.p(k,l.rM(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a5(d,e,B.n5(l.rM(d,e),A.ao,D.fm8),k)
case 0:j=B.H(B.aY(j.w),A.r,2.4)
return B.p(k,l.rM(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eh,k,k,d)}},
aKA(d,e){return this.d.e===D.OU?A.bF:this.byU(d,e)},
Uq(d){return this.aKA(d,A.L)},
gawO(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
awN(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.H(B.aY(v.w),A.r,1.6)
t=v.x
s=B.aY(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aUY(v.Q,19,1.15,A.cx,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.O4("Roboto",12.5,B.aY(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.abw(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jA(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gc8o(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6R(d,e,f,g){return B.ck(new C.c7N(this,e,d,f,g))},
a6Q(d){return this.a6R(d,22,!0,18)},
UB(d,e){return this.a6R(d,22,!0,e)},
aLC(d,e,f){return this.a6R(d,22,e,f)},
bAS(d,e,f){return this.a6R(d,e,!0,f)},
b4x(d,e,f,g){return B.ck(new C.c7O(this,e,d,g,!0,f))},
c7d(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aaa(824),A.ay,k.aR_(824),k.b1D(824),A.P,k.LY(),A.ab,B.au(k.pE(824,360),j,j,j),k.Uq(824),A.ab,B.D(k.a6Q(3),1)],x.p),A.ag,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aaa(824),A.aO,new B.a5(j,350,B.B(B.a([new B.a5(440,j,B.v(B.a([k.a94(440,A.bf,3,62,26),k.axs(440,A.bf,2,20),A.b8,k.anO(B.aY(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.H9,B.v(B.a([k.pE(362,310),k.Uq(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.T,k.avZ(2),A.ab,B.D(k.a6Q(3),1)],w),A.ag,j,A.e,A.j,0,A.p)
case 2:w=k.uI(824,!0)
v=B.aY(h.x)
u=h.ch
t=x.p
s=B.a([k.bRj(788,u?B.aY(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.coN(788,u?B.aY(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.h,v,j,j,j,j,j,j,A.zM,j,j,j)
u=B.a([B.au(k.pE(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.OU){h=A.x.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.atW(i,14,A.c,1.15,A.O),j,j,j),A.h,h,j,j,j,j,j,j,A.lq,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ab,v,A.ab,new B.am(A.W,j,A.a9,A.q,u,j),A.P,k.LY(),A.T,B.D(k.UB(2,21),1)],t),A.ag,j,A.e,A.j,0,A.p)
case 3:h=k.uI(824,!0)
w=k.pE(824,560)
v=B.a([A.K,A.x.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ab,new B.am(A.b1,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.N0(780,A.bf,A.c,3,74,30),A.h,j,j,new B.o(j,j,j,j,j,new B.a3(A.aY,A.b1,A.w,v,j,j),A.n),j,j,j,j,D.bjG,j,j,j),j,j,0,0,j,j)],u),j),k.b1E(824,A.bf),A.P,k.LY(),A.T,B.D(k.a6Q(3),1)],u),A.ag,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aaa(824),A.ay,k.aR_(824),k.b1D(824),A.P,k.LY(),A.ab,B.D(k.b4x(3,300,B.v(B.a([k.pE(300,300),k.Uq(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ag,j,A.e,A.j,0,A.p)
case 5:w=k.uI(824,!0)
v=x.p
u=B.v(B.a([k.a94(440,A.bf,3,62,26),k.axs(440,A.bf,2,20),A.b8,k.anN(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bu,new B.a5(j,400,B.B(B.a([new B.a5(440,j,u,j),A.aIu,new B.C(A.ir,k.pE(364,h.e===D.OU?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.UB(2,21),1)],v),A.ag,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aaa(824),A.ab,k.bRi(824,2,70),k.coL(824,21),A.P,k.LY(),A.ab,B.D(k.b4x(3,340,B.au(k.pE(340,340),j,j,j),350),1)],x.p),A.ag,j,A.e,A.j,0,A.p)
case 7:w=k.uI(824,!0)
v=B.aY(h.x)
u=Date.now()
u=C.byD(new B.Q(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.O4(i,13,h.ch?B.aY(h.f):A.c,1.2,A.u),A.L,j,j),A.h,v,j,j,j,j,j,j,A.bl,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aUY(h.Q,24,1.15,A.cx,A.O),j,j,j))
v.push(A.b8)
if(k.gawO())v.push(k.awN(230,250))
return B.v(B.a([w,A.ay,B.D(B.B(B.a([new B.a5(230,j,B.v(v,A.ag,j,A.e,A.j,0,A.p),j),B.p(j,j,A.h,B.aY(h.w),j,j,j,j,j,A.Vg,j,j,j,1.2),new B.a5(570,j,B.v(B.a([k.a94(570,A.bf,3,62,28),k.coM(570,A.bf,20),A.P,k.anN(!1),A.P,B.au(k.pE(570,330),j,j,j),k.Uq(570),A.T,B.D(k.aLC(2,!1,17),1)],t),A.ag,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ag,j,A.e,A.j,0,A.p)
case 8:w=k.uI(824,!0)
v=h.ch
u=v?B.aY(h.x):B.aY(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.O4(i,13,v?A.x:B.aY(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ab,B.p(j,B.v(B.a([t,A.ar,k.N0(788,A.bf,v?A.x:B.aY(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.h,u,j,j,j,j,j,j,D.bi1,j,j,j),k.b1E(824,A.bf),A.T,B.au(k.pE(824,310),j,j,j),k.Uq(824),A.P,k.LY(),A.T,B.D(k.a6Q(3),1)],s),A.ag,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.uI(824,!0),A.aO,new B.am(A.W,j,A.a9,A.q,B.a([k.pE(824,430),B.an(18,k.c0q(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.aw2(824,3,66),k.b1I(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.asQ(),A.ay,B.D(k.UB(2,18),1)],w),A.ag,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.uI(824,!0),A.bu,new B.a5(j,500,B.B(B.a([new B.a5(410,j,B.v(B.a([k.abv(k.c.b,B.aY(h).j(0.14),15,B.aY(h)),A.aO,k.aZX(410,4,58,28),k.axv(410,6,20),A.b8],w),A.F,j,A.e,A.j,0,A.p),j),V.aIv,k.pE(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.asQ(),A.aO,B.D(k.UB(2,18),1)],w),A.ag,j,A.e,A.j,0,A.p)
case 12:w=k.uI(824,!0)
v=k.pE(824,420)
u=B.hfO(-0.25)
t=B.aY(h.x)
s=B.a([new B.ab(0,A.G,A.x.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aO,new B.am(A.W,j,A.a9,A.q,B.a([v,B.an(22,B.fp(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c0t(i,30,A.c,1,A.cx,A.u),j,j,j),A.h,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bjW,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.aw2(824,3,62),k.b1I(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.aSV(A.l0),A.ay,B.D(k.UB(2,18),1)],r),A.ag,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uI(824,!0)
u=h.w
t=x.p
w=B.a([k.pE(824,380),B.an(j,k.abv(w.b,B.aY(u).j(0.85),15,B.aY(h.f)),j,j,16,j,16,j)],t)
s=k.aw2(824,2,60)
r=k.coY(824,2)
p=k.asQ()
o=B.D(k.aLC(2,!1,18),1)
n=B.H(B.aY(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aY(h).j(0.05)
return B.v(B.a([v,A.aO,new B.am(A.W,j,A.a9,A.q,w,j),A.aO,s,r,A.T,p,A.ay,o,A.ab,B.p(j,B.B(B.a([B.bu(B.m(14),k.rM(150,104),A.ao),A.nK,B.D(B.v(B.a([k.abv("RELATED",B.aY(h).j(0.14),12,B.aY(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.atV(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.V(A.em,B.aY(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.ag,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.uI(824,!0),A.bu,k.a94(824,A.bf,3,62,30),k.axs(824,A.bf,2,22),A.T,k.anN(!1),A.T,B.au(k.pE(824,330),j,j,j),k.aKA(824,A.bf),A.aO,B.D(k.bAS(2,40,21),1)],x.p),A.ag,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bX(0,B.bT(s,new B.o(s,s,s,s,s,new B.a3(A.aw,A.aC,A.w,B.a([B.aY(p),B.aY(q.r)],x.O),s,s),A.n),A.bb),0,0,0)],o)
if(q.ax)n.push(B.bX(0,B.b2(s,s,s,new C.b5v(B.aY(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.bkq,B.v(B.a([B.D(t.c7d(),1),A.P,B.p(s,s,A.h,B.aY(w),s,s,s,1.4,s,s,s,s,s,s),A.h1,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aUW(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.O4(r,11,B.aY(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hF,A.j,0,s,s)],o),A.ag,s,A.e,A.j,0,A.p),s))
v=B.aY(w)
n.push(B.bX(0,B.e1(B.b2(s,s,s,new C.bnM(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.aY(p).j(0.75)
v=B.H(B.aY(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hO(B.fF(q,A.A,s,s,A.cl,A.bP,!1,30,!1,s,30),A.ao))
else o.push(B.V(A.m3,B.aY(w),s,s,s,28))
o.push(A.aa)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.atX(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e1(B.d8(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.blu,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jA(new B.am(A.W,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b8X.prototype={
iH(d){return C.fWe(d)},
jl(d){return!1}}
C.b8W.prototype={
a5(d,e){var w,v=C.fWe(e)
$.Y()
w=B.L()
w.r=this.b.gq(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.bqf.prototype={
iH(d){var w,v,u,t,s,r,q,p,o=new B.eX()
o.dQ(3)
w=$.Y()
v=B.a([],x.v)
u=new B.aQ(w.r,A.aq,null,null,v)
u.E(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ao(s,o.ae()*14)
v.push(w)
r=u.f
if(r!=null)w.by(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ao(t,8))
w=d.b
r=w-8
u.E(new B.ao(t,r))
for(;t>0;t-=14){q=new B.ao(t,w-o.ae()*14)
v.push(q)
p=u.f
if(p!=null)q.by(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ao(0,r))
u.E(new B.bE())
return u},
jl(d){return!1}}
C.b5v.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eX()
k.dQ(7)
$.Y()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ae()*0.07).gq(0)
q=k.ae()
p=k.ae()
o=k.ae()
n=w.I()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ae()*u
p=k.ae()*t
m=50+k.ae()*90
w.sap(new B.bR(A.A,0.5,A.w,l,0,B.a([A.IO.j(0.13),A.K],v),l,l).au(0,B.bV(new B.u(q,p),m)))
n=w.I()
s.drawCircle(q,p,m,n)
n.delete()}w.sap(l)},
ar(d){return!1}}
C.bnM.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.io(u,u,u,u,B.dl(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.cm,u,A.en,A.cj)
s.fe()
w=d.a
J.bB(w.save())
w.translate(t/2,e.b*0.52)
d.iT(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbh(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.U0.prototype={
S(){return new C.aBk()}}
C.aBk.prototype={
Z(){var w=this
w.a0()
B.h1W(w.a.c,null).bx(new C.e7e(),x.g7).bx(new C.e7f(w),x.a)
w.a.toString},
gaJp(){var w=D.apW[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gatY(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJp()
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
XM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.n(new C.e71(r))
t=4
q=r.gatY()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.Y()
n=new B.ru()
m=B.FL(n,null)
i=B.L()
i.Q=A.fL
m.Az(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pO().yp(J.fLW(p),J.fLW(o)),$async$XM)
case 7:l=e
w=8
return B.b(l.hf(A.fN),$async$XM)
case 8:k=e
j=r.c
if(j!=null){j=B.a8(j,!1)
i=k
i.toString
j.M(J.f3(J.w4(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.n(new C.e72(r))
r.c.H(x.q).f.P(D.exh)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XM,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kG,s,s,s,new C.e78(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bK(!1,D.f72,s,s,!0,s,s,t.y||r==null?s:t.gc0u(),s,s)],p),s,s,!0,!0,A.zq,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.faL,s,s,s,1,s,!0)
if(r==null)p=A.lM
else{w=B.D(new B.C(A.c3,B.au(new B.fD(t.gaJp(),B.ck(new C.e79(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.kx,B.jQ(s,s,s,new B.w(D.apW[u].a,s,E.aKe,s,s,s,s,s,s,s,s,s),s,new C.e7a(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bq(!0,B.v(B.a([new B.a5(s,40,B.cL(v,s,s,s,s,A.b0,!1),s),B.B(B.a([D.bAo,B.D(B.md(s,s,s,6,1,new C.e7b(t),t.f),1),D.bA_],p),A.m,s,A.e,A.j,0,s,s),D.f4F,A.ar,B.bK(!1,D.f4q,s,s,!0,s,s,new C.e7c(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.aj,!0,!1),A.h,D.TY,s,s,s,s,s,s,D.bhl,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cd(q,A.zq,p,s,!1,!1,s,s)}}
C.b8t.prototype={
a5(d,e){var w
$.Y()
w=B.L()
w.Q=A.cl
return d.Az(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.YZ.prototype={
S(){var w=$.av(),v=x.A
return new C.aCD(new B.ap(A.as,w),new B.ap(new B.bc("NGMY",A.b2,A.aM),w),new B.co(null,v),new B.co(null,v),A.d.gL(D.a_Q),"quote"+1000*Date.now(),B.a([],x.t),B.aZ(x.S),A.L)}}
C.o6.prototype={}
C.aCD.prototype={
gaR7(){var w,v,u=this
if(u.p1)w=new B.wq(1,u.p2,0.9,u.p3).it().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eE3(w))},
p(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Ww(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ww=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tv().jV(0,"assets/images/ngmy_logo.png"),$async$Ww)
case 7:q=e
p=J.f3(J.w4(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bzn(new B.pj(p,1),o),$async$Ww)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eCW(r,p))
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
return B.i($async$Ww,v)},
O7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kG(92,1800,A.ey),$async$O7)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$O7)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bzn(new B.pj(p,1),n),$async$O7)
case 9:if(r.c==null){w=1
break}r.n(new C.eDj(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a6(l)
n=r.c
if(n!=null)n.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$O7,v)},
aZl(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aL=w.aA=w.aw=w.Y=w.b4=w.bf=w.y2=0
w.b0=null
w.aY=0.25
w.b8=null
w.bH=0.5
w.aQ=1
w.c4=w.bP=w.bg=0
w.cT=w.cQ=!1},
aSF(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bw7(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cWC)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bw7(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bw7(C.fH5(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bw7(C.fH5(1-a0*0.5,n,n,n),w)}return a1?C.bw7(C.fH5(-1,255,255,255),w):w},
axA(){var w,v,u=B.ae("\\S+",!0,!1,!1,!1).kx(0,this.d.a.a),t=B.z(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yj(u,v,w)
this.dx.pv(new C.eDt(t),!0)
return t},
b0P(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.axA()
w=C.hME(e.d.a.a,e.db)
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
return C.hJ9(d,k,v,a0,j,e.gaR7(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cmR(){return this.b0P(null)},
C3(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$C3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gm5(),$async$C3)
case 3:w=4
return B.b(B.bN(A.eL,null,x.H),$async$C3)
case 4:w=5
return B.b($.aT.gm5(),$async$C3)
case 5:s=$.aT.ag$.x.h(0,t.r)
r=s==null?null:s.gb6()
if(!(r instanceof B.q2)){u=null
w=1
break}w=7
return B.b(r.lQ(1080/r.gX(0).a),$async$C3)
case 7:w=6
return B.b(e.hf(A.fN),$async$C3)
case 6:q=e
u=q==null?null:J.f3(A.dD.gaN(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$C3,v)},
a7G(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eCF(q))
t=4
w=7
return B.b(q.C3(),$async$a7G)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcs().aG(p)
n=C.AD(null,null,null,null,D.nE,6,!1,null,null,null,null,null,C.cy(),null,!1,null,"NGMY Quote",null,null,B.a([q.b0P(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a8(l,!1).M(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a6(j)
l=q.c
if(l!=null)l.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eCG(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7G,v)},
zu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eCD(q))
t=4
w=7
return B.b($.aT.gm5(),$async$zu)
case 7:w=8
return B.b(B.bN(A.o5,null,x.H),$async$zu)
case 8:w=9
return B.b($.aT.gm5(),$async$zu)
case 9:k=$.aT.ag$.x.h(0,q.f)
p=k==null?null:k.gb6()
if(!(p instanceof B.q2))throw B.R("The picture is not ready yet.")
w=10
return B.b(p.lQ(1080/p.gX(0).a),$async$zu)
case 10:o=e
w=11
return B.b(o.hf(A.fN),$async$zu)
case 11:n=e
if(n==null)throw B.R("Could not make the picture.")
w=12
return B.b(A5.ae5(J.f3(A.dD.gaN(n)),"ngmy_quote.png","image/png"),$async$zu)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.H(x.q).f
k.P(B.b0(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a6(i)
k=q.c
if(k!=null)k.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eCE(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zu,v)},
cai(){var w=this.p4
w.toString
return B.ck(new C.eDc(this,w))},
aV4(d,e){var w=null
return B.bn(w,w,w,w,w,D.eH5,w,w,!0,new B.b3(4,B.m(16),N.vN),w,w,w,w,w,D.ro,!0,w,w,w,w,new B.b3(4,B.m(16),D.aQB),w,w,w,w,w,w,w,w,A0.C0,e,w,w,w,w,w,w,w,D.eM9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wU(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b3,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aL_,w,w,w))
return new B.C(D.bfi,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aV3(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.a1,!0,w,d,A.h,w,0,w,w,w,w,w,A.jm),A.h,w,w,new B.o(D.ro,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uN(d){return this.aV3(d,A.bB)},
nz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t8:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j1,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j1,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aH(r,B.dj(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.b9,new B.o(w,r,u,v,r,p,A.n),A.hS,r,r,r,A.DN,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ad)},
adm(d,e,f){return this.nz(d,null,e,f)},
au1(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b3.j(0.28):A.c.j(0.05),t=g?A.ew:A.bG,s=x.p
v=B.a([B.dj(w,d,w,w,A.b9,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hS,w,e,w,new B.N(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aH(w,new B.a5(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ad)},
aV7(d,e,f,g,h,i){return this.au1(d,e,f,g,h,5,i)},
jN(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eEd,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aH(u,D.dQ9,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eDp(this,h,i),u,u,u,u,u,u,!1,A.ad))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aK6,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VZ,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asB(w).cAo(A.b3,A.bG,A.b3.j(0.2),A.c,D.eoz,4)
return new B.C(A.wr,B.v(B.a([s,B.a7V(B.md(u,u,u,g,f,new C.eDq(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
afl(d,e,f,g,h,i){return this.jN(d,e,f,g,h,null,i)},
afL(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dw:B.aY(u)
r=d==u
q=r?A.c:A.ba
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.btz:o
n.push(B.aH(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c1(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eDs(this,e,u),o,o,o,o,o,o,!1,A.ad))}return B.c8(A.bJ,n,A.bx,10,10)},
bEX(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_Q
else{v=x.a8
w=B.z(new B.a4(D.a_Q,new C.eCv(o),v),v.k("G.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aV4("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ah,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eCw(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4C,!0,A.a5,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aV4("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ah,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eCx(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.am,n,n,n,n)
t=o.wU("DESIGNS",A.rY)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.czX[q]
r.push(new B.C(A.kx,o.adm(p,o.x===p,new C.eCy(o,p)),n))}return B.v(B.a([v,A.T,u,t,B.ci(B.B(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.b0),A.ab,new B.a5(n,118,B.hH(n,new C.eCz(o,w),w.length,n,n,A.b0,new C.eCA(),!1),n),A.P,o.aV3(B.v(B.a([B.ix(A.b3,n,n,A.aj,!0,new C.eCB(o),n,D.eXu,n,D.eU7,o.k3),B.ix(A.b3,n,n,A.aj,!0,new C.eCC(o),n,n,n,D.eRw,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ad_)],s),A.F,n,A.e,A.j,0,A.p)},
cv3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.axA()
if(a7.length===0)return a5.uN(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Hr,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ae('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.am(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gaj(v)+1
u=a5.dx
m=B.z(u,B.a2(u).k("cl.E"))
A.d.fz(m)
l=m.length!==0&&A.d.e9(m,new C.eDT(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eE_(a5)
j=new C.eE1()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Hr,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b1(11,11)
f=u.t(0,h)?A.b3.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ew:A.bG
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.am(w,a0,a0+e[0].length)
a0=B.ae("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aH(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c1(d,d,d,d),new B.bv(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Km,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eDU(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ad))}o=a5.uN(B.c8(A.bJ,o,A.r1,6,6))
i=B.a([a5.nz("All words",K.ah1,!1,new C.eDV(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.adm("Sentence "+a3,!1,new C.eDW(a5,a7,v,a2)))
a2=a3}}i.push(a5.adm("Clear picks",!1,new C.eDX(a5)))
i=B.c8(A.bJ,i,A.bx,8,8)
g=a5.wU("SIZE OF THE PICKED WORDS",D.agt)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.d0E[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eDY(e,k)
f.push(a5.adm(a0.b,l===a4,e))}return B.v(B.a([q,A.T,o,A.T,i,g,B.c8(A.bJ,f,A.bx,8,8),A.T,a5.nz("Make every word normal",A.mI,!1,new C.eDZ(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cqo(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bmv,B.d(A.d.kZ(D.arz,new C.eDC(q)).b,p,p,p,p,p,p,D.eFG,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.ck(new C.eDD(q)),l=q.wU("HIGHLIGHT BEHIND THE WORDS",A.XM),k=q.p1?-1:q.k4
k=q.afL(k,new C.eDE(q),D.cJF)
w=q.p1
v=w?A.c:A.ba
n=B.a([n,A.T,m,l,B.c8(A.bJ,B.a([k,B.aH(p,B.p(p,D.bwv,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.ezT,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDH(q),p,p,p,p,p,p,!1,A.ad)],o),A.r1,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Hr,p,p,p)],o)
if(q.gaR7()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.afl("Colour",l,0,360,new C.eDI(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.afl("Shade",k,0.15,0.9,new C.eDJ(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jN("Strength",l,0.15,1,new C.eDK(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uN(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wU("LOOK",A.xf))
m=B.a([q.nz("Bold",I.agq,q.fy,new C.eDL(q)),q.nz("Italic",I.agr,q.go,new C.eDM(q))],o)
for(u=0;u<3;++u){l={}
k=D.cB2[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t8:p
w=w?p:A.c.j(0.07)
s=new B.b1(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aH(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c1(r,r,r,r),new B.bv(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDN(l,q),p,p,p,p,p,p,!1,A.ad))}n.push(B.c8(A.bJ,m,A.r1,8,8))
n.push(q.wU("COLOUR",A.nx))
n.push(q.afL(q.fx,new C.eDO(q),D.cTP))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Hr,p,p,p))
n.push(q.wU("SIZE AND PLACE",A.EH))
m=q.fr
m=q.jN("Text size",m,0.5,1.6,new C.eDF(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uN(B.v(B.a([m,q.jN("Up / down",l,0.12,0.5,new C.eDG(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
caj(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b3.j(0.6),A.r,1.6)
u=B.a([A.b3.j(0.18),A.by.j(0.12)],x.O)
return B.aH(p,B.p(p,B.v(B.a([B.p(p,D.bBL,A.h,p,p,D.aTt,p,62,p,p,p,p,p,62),A.ay,D.eVf,A.ar,D.eZu],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.ro,p,v,w,p,new B.a3(A.a3,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.biy,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaV6(),p,p,p,p,p,p,!1,A.ad)}w=x.p
v=B.B(B.a([B.bu(B.m(12),new B.a5(46,62,B.fF(o,A.A,120,p,A.cl,A.bP,!1,p,!1,p,p),p),A.ao),A.bd,B.D(B.v(B.a([D.eUQ,A.P,B.c8(A.bJ,B.a([q.nz("Change",A.kE,!1,q.gaV6()),q.nz("Remove",A.e6,!1,new C.eDg(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cQC[t]
u.push(q.nz(s.b,s.a,q.at===t,new C.eDh(q,t)))}u=B.c8(A.bJ,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bV3(o)
break A}if(1===r){s=q.bU8()
break A}if(2===r){s=q.bAR()
break A}if(3===r){s=q.bGY()
break A}s=q.bCW()
break A}return B.v(B.a([v,A.ab,u,A.ay,s,A.T,new B.bI(A.a3,p,p,q.nz("Reset the whole picture",A.mI,!1,new C.eDi(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bV3(d){var w=this,v=x.p
return B.v(B.a([B.c8(A.bJ,B.a([w.nz("Auto enhance",E.Xp,!1,new C.eD8(w)),w.nz("Make words easy to read",A.of,!1,new C.eD9(w))],v),A.bx,8,8),A.ay,B.ck(new C.eDa(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bU8(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jN("Exposure",n,-1.5,1.5,new C.eCN(o),0,A.k.aa(n,1))
w=o.RG
w=o.jN("Brightness",w,-0.5,0.5,new C.eCO(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jN("Contrast",v,0.4,2,new C.eCP(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jN("Fade",u,0,1,new C.eCQ(o),0,""+A.k.U(u*100))
t=o.aA
t=o.jN("Spotlight",t,0,1,new C.eCR(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jN("Darken",s,0,0.85,new C.eCS(o),0,""+A.k.U(s*100))
r=o.b4
r=o.jN("Vignette",r,0,0.9,new C.eCT(o),0,""+A.k.U(r*100))
q=o.aC
q=o.jN("Shade behind words",q,0,0.85,new C.eCU(o),0,""+A.k.U(q*100))
p=o.aL
return o.uN(B.v(B.a([n,w,v,u,t,s,r,q,o.jN("Shade top & bottom",p,0,0.85,new C.eCV(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bAR(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jN("Colour strength",q,0,2.2,new C.eC8(s),1,""+A.k.U(q*100))
w=s.to
w=s.jN("Warmth",w,-1,1,new C.eC9(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jN("Tint",v,-1,1,new C.eCa(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uN(B.v(B.a([q,w,v,s.jN("Shift colours",u,-180,180,new C.eCb(s),0,""+A.k.U(u)+"\xb0"),new B.bI(A.a3,r,r,s.nz("Negative",D.brA,s.y1,new C.eCc(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wU("COLOUR WASH",A.Li)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.aql)
t=B.a([u,v,s.afL(w,new C.eCd(s),q),A.P],t)
if(s.b0!=null){q=s.aY
t.push(s.uN(s.afl("Wash strength",q,0,0.9,new C.eCe(s),""+A.k.U(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bGY(){var w,v,u,t,s,r=this,q=r.y2
q=r.jN("Blur",q,0,24,new C.eCH(r),0,A.o.u(A.k.U(q)))
w=r.bf
w=r.jN("Soft focus",w,0,1,new C.eCI(r),0,""+A.k.U(w*100))
v=r.aw
u=x.p
v=r.uN(B.v(B.a([q,w,r.jN("Film grain",v,0,1,new C.eCJ(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wU("LIGHT LEAK",H.ago)
q=r.b8
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.df(D.aql,0,B.dK(8,"count",s),s))
u=B.a([v,w,r.afL(q,new C.eCK(r),t),A.P],u)
if(r.b8!=null){q=r.bH
u.push(r.uN(r.afl("Leak strength",q,0,1,new C.eCL(r),""+A.k.U(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bCW(){var w,v,u,t,s=this,r=s.aQ
r=s.jN("Zoom",r,1,3,new C.eCi(s),1,""+A.k.U(r*100)+"%")
w=s.bg
w=s.jN("Left / right",w,-1,1,new C.eCj(s),0,""+A.k.U(w*100))
v=s.bP
v=s.jN("Up / down",v,-1,1,new C.eCk(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.v(B.a([s.uN(B.v(B.a([r,w,v,s.jN("Turn",u,-180,180,new C.eCl(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.c8(A.bJ,B.a([s.nz("Turn 90\xb0",D.bt9,!1,new C.eCm(s)),s.nz("Flip sideways",A.Ev,s.cQ,new C.eCn(s)),s.nz("Flip upside down",A.Ev,s.cT,new C.eCo(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bXG(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.v(B.a([D.eoL,A.T,D.eWz,A.ay,B.aH(w,B.p(A.A,D.eoW,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t8,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDb(this),w,w,w,w,w,w,!1,A.ad)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.ro,w,u,v,w,w,A.n),w,w,w,w,A.c3,w,w,w)},
bUW(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eD3(p),m=x.p,l=B.B(B.a([D.bmB,p.nz("Reset",A.mI,!1,new C.eD_(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Hr,o,o,o),j=p.wU("SHAPE",A.ahv),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.AG[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aV7(n.$2(t,p.cy),62,u.b,s===t,new C.eD0(v,p),62))}}i=B.c8(A.bJ,i,A.bx,8,8)
v=p.wU("RING",A.rT)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.AB[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aV7(n.$2(p.cx,t),62,r.b,q===t,new C.eD1(s,p),62))}u=B.c8(A.bJ,u,A.bx,8,8)
s=p.CW
return B.v(B.a([l,A.av,k,j,i,v,u,A.ab,p.uN(p.jN("Size",s,0.12,0.4,new C.eD2(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aXZ(d){return new B.a5(null,d,new B.fD(0.5625,B.ck(new C.eDm(this)),null),null)},
cpI(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t8:q
t=new B.b1(14,14)
s=D.cSy[w]
r=v?A.c:A.aA
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bH(1,A.br,B.aH(A.c5,B.dj(q,B.v(B.a([r,A.d6,new B.pO(A.eb,A.A,A.h,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.b9,new B.o(q,q,q,new B.bv(t,t,t,t),q,u,A.n),D.bed,q,q,q,A.hC,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eDv(this,w),q,q,q,q,q,q,!1,A.ad),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bgk,A.lY,q,q,q)},
aM7(){var w,v,u=this,t=null,s=u.cpI(),r=u.as
A:{if(0===r){w=u.bEX()
break A}if(1===r){w=u.cv3()
break A}if(2===r){w=u.cqo()
break A}if(3===r){w=u.caj()
break A}if(4===r){w=u.bUW()
break A}w=u.bXG()
break A}v=x.p
return B.bu(A.pP,B.ec(B.v(B.a([s,B.D(B.cL(B.a([w],v),t,D.bhm,t,t,A.ak,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.TY,!0),A.ao)},
aIn(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc0V(),p=B.m(16)
q=B.D(B.aH(r,B.p(r,D.ep5,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.ba,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ad),1)
p=s.Q?r:s.gbGz()
w=B.m(16)
v=B.a([new B.ab(0,A.G,A.by.j(0.35),A.cs,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.etC)
else t.push(D.bvC)
t.push(A.aa)
t.push(D.bo6)
return B.p(r,B.B(B.a([q,A.ax,B.D(B.aH(r,B.p(r,B.B(t,A.m,r,A.b6,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t8,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ad),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aSD,r,r,r,r,G.acO,r,r,r)},
aV5(){var w=null
return new B.C(U.VU,B.B(B.a([B.aF(w,w,w,w,A.m6,w,w,w,new C.eCM(this),w,w,w,w,w,w),D.f9L,A.b8,D.bDX],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cd(w,A.zq,B.bq(!0,B.ck(new C.eE2(this)),!0,!1,A.aj,!0,!0),w,!1,!1,w,w)}}
C.bc_.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eX()
m.dQ(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.Y()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gq(0)
r=B.L()
r.r=A.x.j(0.2*s).gq(0)
for(s=d.a,q=0;q<u;++q){p=m.ae()*w
o=m.ae()*v
n=((q&1)===0?t:r).I()
s.drawRect(B.c9(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.qS.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lN.prototype={}
C.yB.prototype={
ac(){var w=this
return B.E(["at",w.a.a4().ab(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nl.prototype={}
C.vf.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a60.prototype={}
C.aoD.prototype={}
C.Zu.prototype={
S(){return new C.aEy(new B.ap(A.as,$.av()),B.k9(!0,null,!0,!0,null,null,!1),D.dge,B.a([],x.s),B.eN([D.Gm],x.Q))}}
C.aEy.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.f.p()
this.a2()},
Z4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Z4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B1(90,700,700,A.ey),$async$Z4)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Z4)
case 8:p=e
if(r.c!=null)r.n(new C.eJY(r,p,q))
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
return B.i($async$Z4,v)},
Z7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Z7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hR().aDL(78,n,1100,1100),$async$Z7)
case 7:q=e
if(J.cj(q)){w=1
break}p=B.bj(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.aa(p)>=20){w=9
break}w=10
return B.b(o.f7(),$async$Z7)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cP.gcs().aG(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eJZ(r,p))
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
return B.i($async$Z7,v)},
aZW(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fF(A.cw.aG(A.d.gaj(d.split(","))),A.A,u,u,A.cl,A.bP,!0,u,!1,u,u)
return w}catch(v){}return D.bcG},
bV1(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.ckZ(C.fjc(w,this.aZW(d),f),g)},
a9W(d,e,f,g,h){var w=null,v=new C.eJW(f,e),u=new C.eJX(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b3.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.am(A.W,w,A.a9,A.h,B.a([B.au(B.V(f?A.An:A.L6,A.c2,w,w,w,26),w,w,w),D.dVa],x.p),w),w)
else p=this.bV1(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.a1,!0,s,B.aI(!1,r,!0,B.p(w,B.B(B.a([B.D(B.au(p,w,w,w),1),D.bvj],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.lZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJV(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
aSL(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bu(B.m(8),B.fF(A.cw.aG(A.d.gaj(h.split(","))),A.A,p,p,A.cl,A.bP,!1,30,!1,p,30),A.ao)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.bm.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eu,p,p,p,20):q
n=B.a([n,A.aa,B.D(B.d(e,p,1,A.a2,p,p,p,A.a4H,p,p,p),1)],x.p)
if(f!=null)n.push(B.aH(p,D.YH,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ad))
return B.aD(!1,A.a1,!0,u,B.aI(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lo,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ac)},
a6b(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a6b=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fmC(),$async$a6b)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eJE(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a6(n)
if(r.c!=null)r.n(new C.eJF(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6b,v)},
abF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abF=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eJH(r))
w=1
break}if(r.x==null){m=B.ae("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eJI(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eJJ(r))
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
return B.b(C.fhU(q,r.cx,j,new C.aYW(r.z,r.Q,r.as,r.at),new C.eJK(r),i,m,p,k),$async$abF)
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
if(p!=null)B.a8(p,!1).M(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a6(e)
if(r.c!=null)r.n(new C.eJL(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.es,g).w
g=B.aG(d,A.bR,g).w
w=B.au(B.p(h,h,A.h,h,h,new B.o(A.ba,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aH(h,B.p(h,D.byr,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bm.j(0.5),A.J,24)],v),D.bH4,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eKb(i),h,h,h,h,h,h,!1,A.ad),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.YH,h,h,h,i.ax?h:new C.eKc(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbw1()
v=B.a([new B.ab(0,A.G,A.b3.j(0.45),A.J,10)],v)
s.push(B.hq(B.aD(!1,A.a1,!0,h,B.aI(!1,h,!0,B.p(h,B.V(i.e==null?A.uA:A.hp,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uT,A.a6),h,40,h,h,h,h,h,40),A.cH,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cH,h,h,A.ac),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bn(h,h,h,h,h,h,h,h,!0,new B.b3(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b3(4,B.m(16),D.aQ8),h,h,h,h,h,h,h,h,R.Hg,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.kx,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ah,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aKt,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eKd(i)
s=i.aSL(A.l1,q,r,i.gcaK(),s)
r=i.z
r=B.D(i.a9W(new C.eKf(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ar,B.B(B.a([r,A.bo,B.D(i.a9W(new C.eKg(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eKh(i)
s=i.aSL(A.uy,r,p,i.gcaS(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.a9W(new C.eKi(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.ay,D.f_D,A.av,D.f2i,A.bu,u,A.P,D.f0Q,A.ay,v,A.bu,B.B(B.a([q,A.ax,B.D(B.v(B.a([s,A.ar,B.B(B.a([p,A.bo,B.D(i.a9W(new C.eKj(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.f3W],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b6i,A.r,1)
w=C.aeD(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bzw,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eKV,h,h,h),B.aI(!1,h,!0,D.dQn,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eKk(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.h,h,h,new B.o(D.b0k,h,u,v,h,h,A.n),h,h,h,h,D.bg_,h,h,h),h)],t))}o.push(A.bu)
o.push(D.eSc)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cLF[m]
v=i.ch===l?A.b3:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bH(1,A.br,new B.C(A.jH,B.aH(h,B.dj(A.A,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b9,new B.o(v,h,new B.c1(k,k,k,k),h,h,h,A.a6),A.eK,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eKl(i,l),h,h,h,h,h,h,!1,A.ad),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bu)
o.push(D.f85)
o.push(A.P)
o.push(B.ck(new C.eKm(i)))
o.push(A.bu)
o.push(D.eYV)
o.push(A.P)
w=B.a([i.b1B("auto","Let AI choose",A.dP,A.NL)],t)
for(v=x.O,m=0;m<11;++m){j=D.uY[m]
u=j.d
w.push(i.b1B(j.a,j.b,j.c,B.a([B.aY(A.d.gL(u).a),B.aY(A.d.gL(u).b)],v)))}o.push(B.c8(A.bJ,w,A.bx,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.bm.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.ix(h,A.bm,h,h,h,new C.eKe(i),D.buL,D.f7n,h,D.eUj,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aJK,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gc0Z()
v=B.fh(h,h,A.b3,A.b3.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b6(B.m(18),A.X),h,h,h,h,h)
u=i.ax
t=u?D.ets:A.EY
o.push(new B.a5(h,54,B.lg(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ow,h,h,h),w,v),h))
return new B.C(new B.N(0,0,0,f.f.d),B.p(h,B.bq(!0,B.ci(B.v(o,A.ag,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.up,h,h,A.ak),!0,!1,A.aj,!0,!1),A.h,h,new B.aX(0,680,0,g.a.b*0.92),D.a7h,h,h,h,h,h,h,h,h),h)},
bI1(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eJM(this,p,d)
if(d===D.Bj)return new C.aB9(p,o,q)
w=B.m(16)
v=p?E.uT:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bG,A.r,1)
s=B.V(p?A.el:C.hmM(d),A.c,q,q,q,20)
r=C.hmN(d)
return B.aH(q,B.dj(q,B.v(B.a([s,A.av,B.eZ(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.eb)],x.p),A.m,q,A.b6,A.j,0,A.p),q,q,A.b9,new B.o(u,q,t,w,q,v,A.n),A.hS,q,64,q,A.hn,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ad)},
b1B(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.af:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a3(A.a3,A.a7,A.w,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aH(v,B.dj(v,B.B(B.a([w,L.Ha,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.b9,new B.o(s,v,r,t,v,v,A.n),A.eK,v,v,v,L.ae3,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eK0(this,d),v,v,v,v,v,v,!1,A.ad)}}
C.Zt.prototype={
S(){return new C.aEx(new B.ap(A.as,$.av()))}}
C.aEx.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
abG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abG=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.aa(a0)<3){r.n(new C.eJx(r))
w=1
break}B.eH()
r.n(new C.eJy(r))
t=4
q=C.hNx(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ae("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hNh(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eJz(r,q))
w=1
break}k=r.c
if(k!=null)B.a8(k,!1).M(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ae("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fGM()
f=$.BC.h(0,k.a)
o=f==null||J.cj(f)?null:J.fj(f)
if(o==null){r.n(new C.eJA(r))
w=1
break}n=C.hNf(o,r.a.c)
C.hNb(r.a.c.a)
$.fG3=!0
k=r.c
if(k!=null)B.a8(k,!1).M(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fJo(j)
h=C.fJp(r.a.c)
e=C.fJq(r.a.c)
w=7
return B.b(C.byj(k,r.a.c.a,j,h,new C.eJB(r),i,e,a0),$async$abG)
case 7:m=a3
k=r.c
if(k!=null)B.a8(k,!1).M(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a6(a1)
if(r.c!=null)r.n(new C.eJC(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.es,i).w
i=B.aG(d,A.bR,i).w
w=B.au(B.p(j,j,A.h,j,j,new B.o(A.ba,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ahM,A.h,j,j,D.aSj,j,34,j,j,j,j,j,34),A.ax,D.bn8],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,R.aKa,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bn(j,j,j,j,j,j,j,j,!0,new B.b3(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b3(4,B.m(16),Al.a6N),j,j,j,j,j,j,j,j,R.Hg,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ah,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aKt,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cIe[q]
o=A.c.j(0.06)
n=k.e?j:new C.eJD(k,p)
r.push(B.mL(j,o,new B.w(p,j,Ar.QU,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vN,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.T,B.c8(A.bJ,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ab,B.d(u,j,j,j,j,j,j,D.aJK,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc1_()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bm.j(0.5),A.fb.j(0.5)],x.O):D.chb
o=B.a([new B.ab(0,A.G,A.bm.j(0.35),A.cs,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dQj:D.bz5
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.a1,!0,j,B.aI(!1,s,!0,B.eq(B.B(B.a([n,A.ax,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.ja,j,j,j)],v),A.m,j,A.b6,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a3(A.a3,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ac))
return new B.C(new B.N(0,0,0,h.f.d),B.p(j,B.bq(!0,B.ci(B.v(w,A.ag,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.up,j,j,A.ak),!0,!1,A.aj,!0,!1),A.h,j,new B.aX(0,680,0,i.a.b*0.85),D.a7h,j,j,j,j,j,j,j,j),j)}}
C.aYW.prototype={}
C.aB9.prototype={
S(){return new C.bgA(null,null)}}
C.bgA.prototype={
gau2(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.p0,null,1,null,v)
w.cF(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gau2().p()
this.bq6()},
B(d){var w=null,v=this.a.d
return B.aH(w,B.c3(this.gau2(),new C.e23(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ad)}}
C.bec.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cND[s]
p=q.a*v
q=q.b*u
$.Y()
o=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=D.wg.j(0.25+r*0.6).gq(0)
n=o.I()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.I()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.I()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
ar(d){return d.b!==this.b}}
C.apc.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.XR.prototype={
S(){return new C.ayC()}}
C.ayC.prototype={
gafI(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aeQ(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzf(){var w=this.e
return w===$?this.e=C.fJo(this.a.c).t(0,D.Bj):w},
a5Z(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5Z=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.dbp(s))
u=3
r=A.d.kZ(D.uY,new C.dbq(s))
q=B.d7(C.fJo(s.a.c),x.Q)
l=q
J.hD(l,D.Bj)
p=l
if(s.gzf())J.ch(p,D.Bj)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzf()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fJp(i.c)
g=C.fJq(s.a.c)
w=6
return B.b(C.byj(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5Z)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aeQ(q,s.gafI())
f=q==null?null:q.b
n=f==null?s.gafI():f
if(!J.y(n,r.a)&&!s.gzf())throw B.R("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a8(q,!1).M(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a6(d)
if(s.c!=null)s.n(new C.dbr(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5Z,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aP:A.ai,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dbu(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.V(A.ct,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uY[w]
u=o.gafI()
t=o.f?n:new C.dbv(o,v)
f.push(new C.boR(v,u===v.a,t,n))}f=B.lj(1.25,f,3,10,10,n,A.dL,!0)
u=B.m(18)
t=o.gzf()?D.bJR:n
if(o.gzf())s=n
else s=m?A.bj:A.bM
r=B.V(A.dP,o.gzf()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzf()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzf()?A.af:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzf()
f=B.a([f,A.ay,B.p(n,B.B(B.a([r,A.ax,q,B.fDX(n,A.c,n,A.bH,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dbw(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acR,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.eLc,n,n,n)],g))
f=B.ci(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.Kb,n,n,A.ak)
u=o.f?n:o.gbv0()
t=B.bk(A.K,n,n,n,n,n,A.aj,n,new B.b6(B.m(16),A.X),n,n,n)
s=B.m(16)
return B.bq(!0,B.p(n,B.v(B.a([new B.C(D.bj1,e,n),new B.dm(1,A.ci,f,n),new B.C(A.DU,new B.a5(1/0,50,B.bL(B.eq(B.au(o.f?A.qU:D.f04,n,n,n),n,new B.o(n,n,n,s,n,D.bIn,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rI,n,n,n,n),!0,!1,A.aj,!0,!0)}}
C.boR.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.aY(s),B.aY(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.aY(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kQ,w,w,B.V(v.c,A.af,w,w,w,18),w),new B.bI(A.ld,w,w,B.d(v.b,w,w,w,w,w,w,D.eLa,w,w,w),w)],x.p)
if(q)v.push(D.aOh)
return B.aH(w,B.dj(w,new B.am(A.W,w,A.a9,A.q,v,w),w,w,A.b9,new B.o(w,w,p,t,s,new B.a3(A.aw,A.aC,A.w,r,w,w),A.n),A.eK,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ad)}}
C.e20.prototype={
aBo(d,e,f){return e+"@"+A.a.aT(A.o.fF(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vH(d,e){return this.aBo(0,e,null)}}
C.aJ3.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.aYS.prototype={
B(d){var w,v,u=null,t=C.fIe(this.c)
if(t==null)w=D.bbs
else{w=B.aG(d,u,x.w).w.czR(D.bfw,D.esH)
v=this.d
w=B.tT(B.e1(B.alC(!1,t,!1,v,!1,390),!v,u),w)}return B.eZ(A.A,new B.a5(416,870,new C.bid(w,u),u),A.h,A.dq)}}
C.bid.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cYd[w]
u=new B.b1(3,3)
s.push(new B.cG(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajF,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cZj[w]
u=new B.b1(3,3)
s.push(new B.cG(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajF,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bX(0,B.bT(t,new B.o(t,t,t,B.m(64),D.cyN,D.bGN,A.n),A.bb),0,0,0))
s.push(B.bX(3,B.bT(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.bb),3,3,3))
s.push(B.bX(13,B.bu(B.m(51),B.ec(this.c,A.x,!0),A.ao),13,13,13))
u=B.m(20)
s.push(B.an(t,B.au(B.p(D.aOs,B.p(t,t,A.h,t,t,D.aSB,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bX(13,B.e1(B.bu(B.m(51),D.bcM,A.ao),!0,t),13,13,13))
s.push(B.an(22,B.e1(B.au(B.p(t,t,A.h,t,t,new B.o(A.af,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.W,t,A.a9,A.h,s,t)}}
C.kX.prototype={
oO(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cy(),f=C.cy(),e=m.r
f=C.ei(A.L,!1,e.l(),A.az,"",k,42,A.bi,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bc,j,2,"Your Presentation Title",0,0,"",D.mc,D.cN,0.84,0.08,0.26)
w=C.cy()
v=m.w
w=C.ei(A.L,!1,v.l(),A.az,"",k,20,A.bi,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.bc,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.db,D.cN,0.76,0.12,0.56)
u=C.cy()
t=m.d
s=x.u
t=C.qT(i,l,0,0,B.a([f,w,C.ei(A.bf,!1,4279310375,A.az,"",t.j(0.8).l(),24,A.bi,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fk,t.l(),3,"",0,0,"",D.cd,D.eV,0.3,0.35,0.72)],s),C.cy(),D.mb,"","","Welcome",D.db)
u=C.cy()
u=C.ei(A.bf,!1,e.l(),A.az,"",k,34,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bc,j,2,"Agenda",0,0,"",D.cd,D.cN,0.84,0.08,0.08)
w=C.cy()
w=C.qT(i,l,0,0,B.a([u,C.ei(A.bf,!0,v.l(),A.az,"",k,22,A.bi,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.bc,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tn,D.cN,0.8,0.1,0.26)],s),C.cy(),D.mb,"","","Agenda",D.db)
u=C.cy()
u=C.ei(A.bf,!1,e.l(),A.az,"",k,32,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bc,j,2,"Main Idea",0,0,"",D.cd,D.cN,0.84,0.08,0.08)
f=C.cy()
f=C.qT(i,l,0,0,B.a([u,C.ei(A.bf,!0,v.l(),A.az,"",k,21,A.bi,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.bc,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cd,D.cN,0.8,0.1,0.26)],s),C.cy(),D.mb,"","","Key Point 1",D.db)
u=C.cy()
u=C.ei(A.bf,!1,e.l(),A.az,"",k,30,A.bi,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bc,j,2,"Compare & Contrast",0,0,"",D.cd,D.cN,0.84,0.08,0.08)
r=C.cy()
r=C.ei(A.bf,!0,v.l(),A.az,"",k,18,A.bi,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.bc,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cN,0.4,0.08,0.24)
q=C.cy()
q=C.qT(i,l,0,0,B.a([u,r,C.ei(A.bf,!0,v.l(),A.az,"",k,18,A.bi,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.bc,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cN,0.4,0.52,0.24)],s),C.cy(),D.mb,"","","Key Point 2",D.db)
r=C.cy()
r=C.ei(A.L,!1,e.l(),A.az,"",k,48,A.bi,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bc,j,2,h,0,0,"",D.db,D.cN,0.8,0.1,0.32)
e=C.cy()
p=C.AD(l,l,l,l,D.Bf,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qT(i,l,0,0,B.a([r,C.ei(A.L,!1,v.l(),A.az,"",k,22,A.bi,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.bc,j,2,"Questions?",0,0,"",D.cd,D.cN,0.7,0.15,0.58)],s),C.cy(),D.mb,"","",h,D.db)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Dv.prototype={
by(d){return this.e.$1(d)}}
C.ek.prototype={}
C.iQ.prototype={}
C.Dm.prototype={
gaGV(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aeD(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1j(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Dm(v,u,t,d==null?w.d:d)},
En(d){return this.a1j(null,d,null,null)},
aAa(d){return this.a1j(null,null,null,d)},
czP(d,e){return this.a1j(d,e,null,null)},
b6D(d){return this.a1j(d,null,null,null)},
b6K(d){return this.a1j(null,null,d,null)}}
C.LR.prototype={
S(){return new C.bfX(new B.eL(0,$.av()),null,null)}}
C.bfX.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(new C.dLN(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.kp(0)
else v.d.sq(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.av()
w.O$=0
this.bpz()},
B(d){var w=C.aeD(this.a.c.a)
if(w==null)w=A.d.gL(D.Fh)
return B.ck(new C.dLM(this,w,C.fY1(this.a.c.d)))}}
C.bnr.prototype={
B(d){return B.nq(A.Sz,this.e,new C.eIL(this,A.k.G(this.d*0.35,1.6)-0.3))}}
C.bb5.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOD(d,e,v)
break
case"confetti":w.bBl(d,e,v)
break
case"crown":w.bCX(d,e,v)
break
case"aurora":w.bw5(d,e,v)
break
case"champagne":w.bzd(d,e,v)
break
case"diamonds":w.bF5(d,e,v)
break
case"starburst":w.cnw(d,e,v)
break
case"balloons":w.bwj(d,e,v)
break
case"galaxy":w.bJI(d,e,v)
break
case"redcarpet":w.ceO(d,e,v)
break
case"coins":w.bAJ(d,e,v)
break
case"lanterns":w.bTH(d,e,v)
break
case"hearts":w.bRn(d,e,v)
break
case"petals":w.cab(d,e,v)
break
case"butterflies":w.byg(d,e,v)
break
case"neon":w.bXq(d,e,v)
break
case"disco":w.bFg(d,e,v)
break
case"sunrise":w.cp_(d,e,v)
break
case"pearls":w.c9f(d,e,v)
break
case"snow":w.cnd(d,e,v)
break
case"laurel":w.bTN(d,e,v)
break
case"ribbons":w.chh(d,e,v)
break
case"kente":w.bTw(d,e,v)
break
case"trophy":w.csw(d,e,v)
break
case"shooting":w.cl6(d,e,v)
break
case"bokeh":w.bwA(d,e,v)
break
case"orbits":w.c6Y(d,e,v)
break
case"flowers":w.bJ0(d,e,v)
break
case"music":w.bXb(d,e,v)
break
case"mandala":w.bVD(d,e,v)
break
case"sparklers":w.cnm(d,e,v)
break
case"city":w.bA2(d,e,v)
break}},
qJ(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.Y()
v=B.L()
v.r=g.j(A.k.D(h,0,1)).gq(0)
v.a=A.n3
u=new B.aQ(w.r,A.aq,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.d0(w,t,w+f,t))
u.E(new B.d0(w,t,w,t+f))
u.E(new B.d0(w,t,w-f,t))
u.E(new B.d0(w,t,w,s))
u.E(new B.bE())
d.aO(u,v)
d.af(e,f*0.18,v)},
lg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cP(q,v)*2.5)+C.cP(q,u)*6.28)+1)/2
this.qJ(d,new B.u(C.cP(q,t)*o,C.cP(q,s)*n),m*(0.006+0.014*C.cP(q,r))*(0.5+p),h,p*p)}},
aOD(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lg(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bH,A.aZ],w),B.a([A.id,A.by],w),B.a([A.ev,A.aX],w),B.a([A.c,A.au],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bw(k/2.8)
i=A.k.G(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cP(h,1))
f=g+c0*(C.cP(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cP(h,3))
d=v[Math.abs(A.o.G(h,4))]
if(i<0.22){a0=B.l2(new B.u(g,c1),new B.u(f,e),A.co.av(0,i/0.22))
a0.toString
$.Y()
a1=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.sap(new B.a3(A.a3,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).au(0,B.qV(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bN
a2=B.l2(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.I()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a2.r=A.c.gq(0)
a3=a2.I()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.co.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cP(h,4)
if(a5<0.15){a4=1-a5/0.15
$.Y()
a8=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gq(0)
a8.z=new B.hy(A.G,o)
a3=a8.I()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cP(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cP(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.Y()
b9=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gq(0)
b9.c=u
b9.d=A.bN
b9.a=A.n3
a3=b9.I()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cP(h,b1+120)>0.5)this.qJ(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bBl(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.G(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.Y(),a0=B.L()
a0.sap(new B.a3(A.aw,A.aC,A.w,D.cTw,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).au(0,new B.a9(0,0,f,e)))
a1.b2(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.G(a3*(h*(0.08+0.12*C.cP(u,1)))+C.cP(u,2)*w,w)
s=C.cP(u,3)
r=Math.sin(a3*(0.8+C.cP(u,4))+u)
q=h*(0.012+0.012*C.cP(u,5))
p=Math.cos(a3*(2+3*C.cP(u,6))+u)
o=D.Ne[A.o.D(A.k.bw(C.cP(u,7)*5),0,4)]
J.bB(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cP(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gq(0)
if(A.o.G(u,5)===0){t=B.a([],v)
m=new B.aQ(d.r,A.aq,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ao(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.by(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.Y()
t=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.r=B.aY(n.r).gq(0)
t.b=A.ae
t.c=q*0.35
k=t.I()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cN(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.I()
f.drawRect(B.c9(t),k)
k.delete()}f.restore()}this.lg(a1,a2,a3,25,A.bH,30)},
bCX(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.Y()
n=B.a([],r)
m=new B.aQ(o.r,A.aq,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.bH.j(0.22),D.b1U],v),a4,a4).au(0,B.bV(w,u)))
l=o.I()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aQ($.Y().r,A.aq,a4,a4,B.a([],r))
v=a6+j
i.E(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.E(new B.ao(a5,s))
o=a6+j*0.6
i.E(new B.ao(a5+k*0.22,o))
i.E(new B.ao(a5+k*0.5,a6))
i.E(new B.ao(a5+k*0.78,o))
o=a5+k
i.E(new B.ao(o,s))
i.E(new B.ao(o,v))
i.E(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.L()
n.sap(new B.a3(A.aY,A.b1,A.w,D.cSt,a4,a4).au(0,new B.a9(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.e2F,D.dY4,D.ebl],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gq(a0)
l=a1.I()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=A.af.gq(0)
l=a1.I()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.hO.gq(0)
l=g.I()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wl(i),u=B.a([],x.X),o=new B.uU(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jJ(y.M));--f
o.j1()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aQ(n,v.b,a4,new B.cH([new B.G3(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fs
f.r=A.bH.gq(0)
l=f.I()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.G(b0*0.5,1)
this.qJ(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lg(a8,a9,b0,45,A.bH,40)},
bw5(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lg(a8,a9,b0,60,A.c,50)
w=[D.ekR,D.ekz,D.eku,D.elK]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.Y()
i=B.a([],p)
h=new B.aQ(n.r,A.aq,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ao(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.Y()
n=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gq(0)
n.a=A.n3
n.z=new B.hy(A.G,s)
a2=n.I()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gq(0)
n.a=A.n3
n.z=new B.hy(A.G,v)
a2=n.I()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.G(t*(0.05+0.06*C.cP(a4,1))+C.cP(a4,2)*a3,a3)
r=C.cP(a4,3)
q=Math.sin(b0+a4)
p=C.cP(a4,4)
$.Y()
n=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.wf.j(0.4+0.5*C.cP(a4,5)).gq(0)
n.a=A.n3
a2=n.I()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bzd(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.Y(),a0=B.L()
a0.sap(new B.bR(A.A,0.5,A.w,l,0,B.a([A.hy.j(0.25+0.1*h),D.U3],x.O),l,l).au(0,B.bV(new B.u(g,f),e)))
a1.af(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aQ(d.r,A.aq,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ao(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.by(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.Y()
a0=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Ne[A.o.G(w,4)].j(0.7).gq(0)
p=a0.I()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.G(a3*(i*(0.07+0.12*C.cP(w,1)))+C.cP(w,2)*o,o)
r=k*(0.1+0.8*C.cP(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cP(w,4))
if(n<f){this.qJ(a1,new B.u(r,n),m*2.4,A.bH,A.k.D(n/f,0,1))
continue}$.Y()
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.ze.j(0.75).gq(0)
p=d.I()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gq(0)
p=t.I()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bF5(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lg(a9,b0,b1,30,A.kS,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cP(p,1))
n=a7+o*4
m=A.k.G(t*(0.04+0.06*C.cP(p,2))+C.cP(p,3)*n,n)-o*2
l=C.cP(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bB(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.Y()
g=B.a([],q)
f=new B.aQ(h.r,A.aq,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b5(e,i))
h*=0.28
j*=0.6
g.push(new B.ao(h,j))
d=o*0.28
g.push(new B.ao(d,j))
a0=o*0.5
g.push(new B.ao(a0,i))
a1=k*0.6
g.push(new B.ao(0,a1))
g.push(new B.bE())
g=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
g.sap(new B.a3(A.aw,A.aC,A.w,D.cOC,a5,a5).au(0,B.cN(A.J,k*1.2,o)))
a2=g.I()
g=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
a2.delete()
a3=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a3.b=A.ae
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gq(0)
a2=a3.I()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.I()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.I()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.qJ(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cnw(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.Y()
o=B.a([],v)
n=new B.aQ(p.r,A.aq,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.bH.j(r?0.12:0.07).gq(0)
m=p.I()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.G(a0+l*0.6,1.8)/1.8
$.Y()
u=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bH.j(r*0.6).gq(0)
m=u.I()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bw(a0/2.4)
k=A.k.G(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cP(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bc8.av(0,k)*(0.5+0.5*C.cP(t,v)))
this.qJ(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cP(t,3)),D.Ne[A.o.D(A.k.bw(C.cP(t,4)*5),0,4)],u)}},
bwj(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cP(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.G(q*(0.05+0.05*C.cP(o,2))+C.cP(o,3)*m,m)
j=C.cP(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqJ[A.o.G(o,6)]
h=$.Y()
g=B.a([],s)
f=new B.aQ(h.r,A.aq,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ao(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.by(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.Y()
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gq(0)
a1=d.I()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cN(new B.u(j,k),n*2.3,l)
l=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.x,0.35)
d.toString
l.sap(new B.bR(D.aOv,0.9,A.w,a3,0,B.a([A.c,i,d],t),P.aqA,a3).au(0,a2))
a1=l.I()
u.drawOval(B.c9(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aQ(g.r,A.aq,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ao(j+d,h))
l.push(new B.ao(j,k+n))
l.push(new B.bE())
l=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.x,0.3).gq(0)
a1=l.I()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.G(q*(0.1+0.1*C.cP(o,11))+C.cP(o,12)*m,m)
r=C.cP(o,13)
J.bB(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cN(A.J,t,v)
$.Y()
r=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=D.aqJ[A.o.G(o,6)].j(0.85).gq(0)
a1=r.I()
u.drawRect(B.c9(s),a1)
a1.delete()
u.restore()}},
bJI(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lg(b1,b2,b3,50,A.c,70)
for(w=[D.ekZ,D.ekF,D.ekL],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.Y()
k=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).au(0,B.bV(new B.u(r,m),l)))
j=k.I()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.G(i,3)
g=C.cP(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cP(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bH,A.ew,g)
k.toString
d=C.cP(i,3)
$.Y()
a0=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cP(i,4)).gq(0)
a0.a=A.n3
j=a0.I()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.Y()
a9=B.L()
a9.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.ze.j(0.55),D.aaJ],u),a4,a4).au(0,B.bV(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.G(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bw(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cP(a2,9)),a6*0.1*C.cP(a2,8))
a5=B.l2(a3,a3.ao(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l2(a3,a5,0.6)
a6.toString
a8=B.L()
a8.sap(new B.a3(A.a3,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).au(0,B.qV(a3,a5)))
a8.c=a7*0.005
a8.d=A.bN
b1.bE(a6,a5,a8)}},
ceO(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.Y()
n=B.a([],s)
m=new B.aQ(o.r,A.aq,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(new B.bR(A.A,0.5,A.w,b5,0,B.a([A.ze.j(0.28),D.aaJ],w),b5,b5).au(0,B.bV(new B.u(q,u),t)))
o.a=A.n3
l=o.I()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.f1:A.f2)
a9=$.Y()
b0=B.a([],s)
m=new B.aQ(a9.r,A.aq,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ao(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.d0(a9,k,a5?g:a1,b7))
b0.push(new B.ao(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a9.sap(new B.a3(A.a3,A.a7,A.w,a7,b5,b5).au(0,new B.a9(a6,0,a6+i,j)))
l=a9.I()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
b1.r=A.hy.gq(0)
b1.c=o
b1.d=A.bN
l=b1.I()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aQ($.Y().r,A.aq,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ao(b6*0.58,w))
b2.E(new B.ao(b6*0.8,b7))
b2.E(new B.ao(b6*0.2,b7))
b2.E(new B.bE())
v=B.L()
v.sap(D.bIh.au(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.G(b7*(0.05+0.07*C.cP(r,1))+C.cP(r,2)*b3,b3)
u=C.cP(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qJ(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cP(r,4)),A.bH,0.3+0.7*((q+1)/2))}},
bAJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cP(t,1))
r=h+s*4
q=s*2
p=A.k.G(u*(0.12+0.12*C.cP(t,2))+C.cP(t,3)*r,r)-q
o=C.cP(t,4)*i
n=Math.cos(f*(2+3*C.cP(t,5))+t)
m=Math.abs(n)
l=B.cN(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.Y()
q=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.sap(new B.a3(A.aw,A.aC,A.w,n>0?D.d19:D.cmM,null,null).au(0,l))
k=q.I()
v.drawOval(B.c9(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.b9G.gq(0)
k=j.I()
v.drawOval(B.c9(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qJ(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lg(d,e,f,30,A.bH,110)},
bTH(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lg(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cP(p,1))
n=a1+o*4
m=a1+o*2-A.k.G(t*(0.03+0.04*C.cP(p,2))+C.cP(p,3)*n,n)
l=C.cP(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.Y()
h=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.sap(new B.bR(A.A,0.5,A.w,d,0,B.a([H.aaR.j(0.45*k),D.a9M],u),d,d).au(0,B.bV(new B.u(l,m),j)))
g=h.I()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aQ(i.r,A.aq,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ao(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ao(l+i,h))
j.push(new B.ao(l-i,h))
j.push(new B.bE())
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b22,A.c,0.2*k)
i.toString
j.sap(new B.a3(A.aY,A.b1,A.w,B.a([D.b6_,i],u),d,d).au(0,B.cN(new B.u(l,m),o*1.4,o)))
g=j.I()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gq(0)
g=j.I()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bRn(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cP(p,1))
n=a1+o*4
m=A.k.G(s*(0.05+0.06*C.cP(p,2))+C.cP(p,3)*n,n)
l=C.cP(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bB(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.Y()
l=B.a([],t)
i=new B.aQ(m.r,A.aq,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p7(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p7(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cGh[A.o.G(p,5)]
m=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.x,0.25)
l.toString
m.sap(new B.bR(A.tY,0.5,A.w,d,0,B.a([A.c,f,l],u),H.ZP,d).au(0,B.bV(A.J,o*1.4)))
e=m.I()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lg(a3,a4,a5,30,A.id,130)},
cab(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cP(q,1))
o=g+p*4
n=A.k.G(t*(0.05+0.06*C.cP(q,2))+C.cP(q,3)*o,o)
m=C.cP(q,4)
l=Math.sin(s+q*0.7)
J.bB(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cP(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.Y()
m=B.a([],u)
k=new B.aQ(n.r,A.aq,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.d0(p,l,0,p))
m.push(new B.d0(n,l,0,n))
m.push(new B.bE())
n=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cha:D.cPO
n.sap(new B.a3(A.a3,A.a7,A.w,m,i,i).au(0,B.bV(A.J,p)))
j=n.I()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lg(d,e,a0,25,A.bH,140)},
byg(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lg(b0,b1,b2,40,A.bH,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cP(r,1))
p=Math.sin(b2*(0.15+0.1*C.cP(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cP(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bB(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bB(v.save())
v.scale(a1*n,1)
a2=$.Y()
a3=B.a([],u)
a4=new B.aQ(a2.r,A.aq,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.p7(f,e,l,d,h,0))
a3.push(new B.p7(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a2.sap(new B.a3(A.a3,A.a7,A.w,i?D.cPy:D.cRZ,a6,a6).au(0,new B.a9(0,m,k,j)))
a5=a2.I()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.zk.gq(0)
a5=a2.I()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.Y()
p=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=D.b95.gq(0)
p.c=q*0.1
p.d=A.bN
a5=p.I()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bXq(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.G(w+t/4,1)
r=f*(0.2+0.7*s)
$.Y()
q=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.arI[t].j((1-s)*0.9).gq(0)
q.z=new B.hy(A.G,v)
p=r*0.3
p=B.bF(B.cN(e,r,r*1.6),new B.b1(p,p))
o=q.I()
u.drawRRect(B.f7(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cP(m,1)*4)+m)))
k=D.arI[A.o.G(m,4)]
j=m*n+h
i=g-l
i=B.bF(new B.a9(j,i,j+w,i+l),new B.b1(v,v))
$.Y()
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gq(0)
j.z=new B.hy(A.a6A,p)
o=j.I()
u.drawRRect(B.f7(i),o)
o.delete()}},
bFg(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cP(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cP(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bH,A.oL,A.dB][A.o.G(p,4)]
j=C.cP(p,3)
$.Y()
i=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gq(0)
i.a=A.n3
i.z=new B.hy(A.G,r)
h=i.I()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.Y()
t=B.L()
t.r=A.aA.gq(0)
t.c=1.2
a3.bE(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.L()
t.r=A.eB.gq(0)
a3.af(v,u,t)
J.bB(q.save())
a1=new B.aQ(a1.r,A.aq,null,null,B.a([],x.v))
a1.E(new B.ky(B.bV(v,u)))
a3.tk(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.G(a1,g)
i=Math.sin(e*1.7+l+s)
$.Y()
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bv,A.c,0.4+0.6*((i+1)/2)).gq(0)
h=d.I()
q.drawRect(B.c9(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qJ(a3,v.ao(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cp_(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.Y()
q=B.a([],u)
p=new B.aQ(r.r,A.aq,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.bH.j(0.1).gq(0)
o=r.I()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.Y()
a0=B.L()
a0.sap(new B.bR(A.A,0.5,A.w,h,0,B.a([D.aZA.j(0.6),D.a9M],x.O),h,h).au(0,B.bV(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.L()
d.sap(D.dW_.au(0,B.bV(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.G(d*(1+t*0.3)+C.cP(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gq(0)
i=B.cN(new B.u(l,k),r,u)
o=j.I()
w.drawOval(B.c9(i),o)
o.delete()
i=B.cN(new B.u(l+q,k-n),r,m)
o=j.I()
w.drawOval(B.c9(i),o)
o.delete()}this.lg(a2,a3,a4,20,A.hO,180)},
c9f(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.Y()
q=B.a([],t)
p=new B.aQ(r.r,A.aq,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ao(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.by(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ao(e,d)
q.push(r)
o=p.f
if(o!=null)r.by(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.Y()
r=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cD,A.ic,s/3).j(0.55).gq(0)
k=r.I()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cP(i,1))
g=d-A.k.G(u*(0.04+0.05*C.cP(i,2))+C.cP(i,3)*j,j)
n=C.cP(i,4)*e+Math.sin(a3+i)*a0*0.02
$.Y()
t=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.sap(new B.bR(Aj.pM,0.5,A.w,f,0,D.cUZ,f,f).au(0,B.bV(new B.u(n,g),h)))
k=t.I()
w.drawCircle(n,g,h,k)
k.delete()}this.lg(a1,a2,a3,25,A.c,190)},
cnd(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cP(r,1))
p=f+q*4
o=A.k.G(u*(0.03+0.05*C.cP(r,2))+C.cP(r,3)*p,p)
n=C.cP(r,4)
m=Math.sin(t+r)
$.Y()
l=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cP(r,5)).gq(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bN
J.bB(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.I()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.I()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.I()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lg(d,a0,a1,40,A.ev,200)},
bTN(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dF(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bB(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cN(new B.u(p,0),q,r)
$.Y()
f=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.sap(D.bI3.au(0,new B.a9(0,o,n,m)))
e=f.I()
s.drawOval(B.c9(g),e)
e.delete()
s.restore()}}$.Y()
a0=B.L()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b2d.gq(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.qJ(a3,w.ao(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lg(a3,a4,a5,40,A.bH,210)},
chh(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hy,A.hO],a6),B.a([A.nZ,A.id],a6),B.a([A.aB,A.ew],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bU<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.Y()
k=B.a([],o)
j=new B.aQ(l.r,A.aq,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ao(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dy(i,s),l=new B.bU(l,l.gJ(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ao(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.by(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.Y()
l=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sap(new B.a3(A.a3,A.a7,A.w,B.a([h,k[1],h],a6),H.aro,new B.mr(w)).au(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gq(0)
a2=l.I()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lg(a8,a9,b0,40,A.c,220)},
bTw(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.G(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.G(A.k.bw(g/t),5)
a1=g+t
$.Y()
a2=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.ZS[a3].gq(0)
a4=a2.I()
s.drawRect(B.c9(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a5.r=D.ZS[A.o.G(a3+2,5)].gq(0)
a4=a5.I()
s.drawRect(B.c9(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.G(n*(0.04+0.05*C.cP(a0,1))+C.cP(a0,2)*a6,a6)
v=C.cP(a0,3)
t=C.cP(a0,4)
this.qJ(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.ZS[A.o.G(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
csw(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.Y()
p=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bH.j(0.06).gq(0)
o=p.I()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aQ($.Y().r,A.aq,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ao(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.d0(w,r,p,k))
w=a2+m*0.95
l.E(new B.ao(p,w))
p=n*0.3
j=a2+m
l.E(new B.ao(a1+p,j))
l.E(new B.ao(a1-p,j))
q=a1-q
l.E(new B.ao(q,w))
l.E(new B.ao(q,k))
l.E(new B.d0(v,r,v,a2))
l.E(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cN(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.au.gq(0)
o=d.I()
u.drawArc.apply(u,[B.c9(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.L()
a1.sap(new B.a3(A.a3,A.a7,A.w,D.cX1,A.aqP,null).au(0,new B.a9(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.G(a6*0.6,1.4)
if(a0<1)this.qJ(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bBm(a4,a5,a6,60)},
bBm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.G(k*(0.1+0.1*C.cP(p,31))+C.cP(p,32)*v,v)
n=C.cP(p,33)
J.bB(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cN(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.Y()
n=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=D.Ne[A.o.G(p,5)].gq(0)
m=n.I()
u.drawRect(B.c9(o),m)
m.delete()
u.restore()}},
cl6(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lg(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cP(o,1)*1.6
m=A.k.G(a2+C.cP(o,2)*n,n)/n
l=e*(C.cP(o*7+A.k.bw((a2+C.cP(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.Y()
g=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
g.sap(new B.a3(A.a3,A.a7,A.w,B.a([A.c.j(0),A.bH],s),null,null).au(0,B.qV(new B.u(l,h),i)))
g.c=r
g.d=A.bN
f=g.I()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qJ(a0,i,p,A.c,1-m)}},
bwA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cP(r,1))
p=A.k.G(C.cP(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.G(C.cP(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.Y()
m=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
l=A.o.G(r,5)
m.r=D.at6[l].j(n).gq(0)
m.a=A.n3
m.z=new B.hy(A.G,q*0.12)
k=m.I()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.at6[l].j(n*1.4).gq(0)
k=m.I()
s.drawCircle(p,o,q,k)
k.delete()}},
c6Y(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bB(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cN(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.Y()
o=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bH.j(0.45).gq(0)
n=o.I()
w.drawOval(B.c9(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.hO.gq(0)
n=k.I()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.hy.j(0.4).gq(0)
k.z=new B.hy(A.G,r)
n=k.I()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lg(d,e,f,45,A.bH,270)},
bJ0(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.G(o,4)
m=C.cP(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.G(a7+C.cP(o,2)*4,4)/4
j=A.eE.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cP(o,3))*(j*i)
if(h<=0.5)continue
g=D.cMU[A.o.G(o,5)]
J.bB(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cN(new B.u(0,l),i,j)
$.Y()
a0=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.sap(new B.a3(A.aY,A.b1,A.w,B.a([A.c,g],u),null,null).au(0,B.cN(new B.u(0,l),f,h)))
a1=a0.I()
v.drawOval(B.c9(d),a1)
a1.delete()}$.Y()
l=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.hy.gq(0)
a1=l.I()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lg(a5,a6,a7,30,A.hO,280)},
bXb(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.G(t+n/4,1)
l=B.bV(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.Y()
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.apX[n].j((1-m)*0.8).gq(0)
i=j.I()
u.drawArc.apply(u,[B.c9(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.G(v*(0.06+0.06*C.cP(g,1))+C.cP(g,2)*h,h)
e=C.cP(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cP(g,4))
a0=D.apX[A.o.G(g,4)]
$.Y()
a1=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gq(0)
J.bB(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cN(A.J,d,d*1.5)
i=a1.I()
u.drawOval(B.c9(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=a0.gq(0)
o.c=Math.max(1,d*0.18)
i=o.I()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=a0.gq(0)
o.c=Math.max(1,d*0.3)
i=o.I()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bVD(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bB(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.Y()
a0=B.a([],s)
a1=new B.aQ(d.r,A.aq,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.d0(h,m,0,g))
a0.push(new B.d0(j,m,0,i))
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bH,A.oL,k).j(0.7).gq(0)
a2=d.I()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=A.hO.j(0.8).gq(0)
a2=d.I()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.Y()
a5=B.L()
a5.sap(new B.bR(A.A,0.5,A.w,a3,0,B.a([A.hy.j(0.25),D.U3],x.O),a3,a3).au(0,B.bV(w,a4)))
a7.af(w,a4,a5)
this.lg(a7,a8,a9,30,A.bH,300)},
cnm(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.Y()
h=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.bv.gq(0)
h.c=q
h.d=A.bN
g=h.I()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.sap(new B.bR(A.A,0.5,A.w,null,0,B.a([A.hO,A.hy.j(0.6),D.U3],o),null,null).au(0,B.bV(new B.u(j,i),p)))
g=l.I()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cP(f,1)
d=A.k.G(b2+C.cP(f,2)*e,e)/e
a0=A.k.bw((b2+C.cP(f,2)*e)/e)
a1=C.cP(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cP(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hO,A.aZ,d).j(1-d).gq(0)
a6.c=Math.max(0.8,u)
a6.d=A.bN
a6.a=A.n3
g=a6.I()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.I()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.I()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lg(b0,b1,b2,35,A.bH,310)},
bA2(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOD(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cP(n,1))
l=a8*(0.14+0.24*C.cP(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.Y()
i=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.sap(D.bJ2.au(0,j))
h=i.I()
r.drawRect(B.c9(j),h)
h.delete()
g=A.k.bw(m/q)
f=A.k.bw(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cP(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.Y()
a6=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=A.bH.j(0.85).gq(0)
h=a6.I()
r.drawRect(B.c9(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aWN.prototype={
B(d){var w,v=null,u=new C.c3I(),t=new C.c3K(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiP,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c3J(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Fh[w]))
return B.c8(A.bJ,s,A.bx,12,10)}}
C.Xp.prototype={
S(){return new C.ax2()}}
C.ax2.prototype={
guO(){var w=this.d
return w===$?this.d=this.a.c:w},
gaVa(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ap(new B.bc(w.b,A.b2,A.aM),$.av())}return v},
gau3(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaGV()
v=$.av()
u.f!==$&&B.bJ()
t=u.f=new B.ap(new B.bc(w,A.b2,A.aM),v)}return t},
p(){var w=this.gaVa(0),v=$.av()
w.R$=v
w.O$=0
w=this.gau3()
w.R$=v
w.O$=0
this.a2()},
XX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$XX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B1(90,700,700,A.ey),$async$XX)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$XX)
case 8:p=e
o=q.b.toLowerCase()
n=J.afv(o,".png")?"image/png":"image/jpeg"
r.n(new C.d0U(r,n,p))
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
return B.i($async$XX,v)},
aV9(d){var w=null,v=A.c.j(0.07)
return B.bn(w,new B.b3(4,B.m(12),A.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aKy,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aeD(p.guO().a)
if(n==null)n=A.d.gL(D.Fh)
w=p.guO()
v=p.r
u=x.p
v=B.D(new B.am(A.W,o,A.a9,A.q,B.a([B.bX(0,new C.LR(p.guO(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.an(o,B.Gl(A.m6,new C.d0Z(d),B.na(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Gl(D.btG,new C.d1_(p),B.na(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aKs,o,o,o)
t=B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaVa(0),o,o,o,o,o,2,p.aV9("Big words"),A.z,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d10(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hf,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hy.j(0.6),A.r,1)
if(p.guO().d.length===0)q=D.bwY
else{q=C.fY1(p.guO().d)
if(q==null)q=new Uint8Array(0)
q=B.hO(B.fF(q,A.A,o,o,A.cl,A.bP,!1,o,!1,o,o),A.ao)}r=B.a([t,A.aa,B.aH(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc10(),o,o,o,o,o,o,!1,A.ad)],u)
if(p.guO().d.length!==0)r.push(B.aF(o,o,o,o,D.YH,o,o,o,new C.d11(p),o,o,o,o,"Remove logo",o))
return B.cd(o,A.x,B.bq(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.T,B.B(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gau3(),o,o,o,o,o,2,p.aV9("Line under it"),A.z,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d12(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o),A.ab,B.dq(D.bvU,D.f8Z,new C.d13(p,d),B.bk(A.au,o,o,o,A.x,o,A.cc,o,new B.b6(B.m(14),A.X),o,o,o))],u),A.ag,o,A.e,A.Q,0,A.p),A.h,o,o,D.aSL,o,o,o,o,A.DQ,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0),o,!1,!1,o,o)}}
C.aIx.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.XK.prototype={
S(){return new C.bcz(new B.ap(A.as,$.av()))}}
C.bcz.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.M(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aP:A.ai,k=B.aG(d,A.bR,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.B(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.ct,l,o,o,o,o),o,o,o,new C.d7p(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cyg[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.b1(12,12)
q=new B.b1(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aI(!1,new B.bv(r,r,r,r),!0,B.p(A.A,new B.w(s,o,A.yq,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bv(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d7q(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hC,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Eh(A.bJ,6,6,A.bx,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aN
e.push(B.B(B.a([B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.aa,B.bL(A.aLm,new C.d7r(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bq(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.ci,B.cL(e,o,o,o,o,A.ak,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.h,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rI,A.VB,o,o,o),!0,!1,A.aj,!0,!0)}}
C.bbX.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eX()
a2.dQ(this.c)
w=this.b
v=w/6.283185307179586
$.Y()
u=B.L()
u.z=A.OK
t=B.L()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ae()
l=a2.ae()
k=a2.ae()
j=0.8+a2.ae()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.G(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ae()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gq(0)
d=u.I()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gq(0)
d=t.I()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.Y()
a1=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=e.gq(0)
a1.c=1
d=a1.I()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.I()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ar(d){return d.b!==this.b}}
C.bbE.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bF(new B.a9(0,0,0+a7.a,0+a7.b),A.kd),a2=this.b,a3=Math.sin(a2*2),a4=$.Y(),a5=B.L()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gq(0)
a5.z=A.lA
a6.aK(a1,a5)
a5=x.v
a4=new B.aQ(a4.r,A.aq,a0,a0,B.a([],a5))
a4.E(new B.iO(a1))
v=new B.QP(new B.uU(B.wl(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.j1()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.G(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.Y()
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bN
j.c=1.5+2*m/10
j.r=w.j(k).gq(0)
i=A.k.G(n-p*(1-m/10),t)
h=A.k.G(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aQ(r,k,a0,new B.cH([v,i,h,!0]),B.a([],a5))
g=j.I()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aQ(r,k,a0,new B.cH([v,i,t,!0]),B.a([],a5))
g=j.I()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aQ(r,a2.b,a0,new B.cH([v,0,h,!0]),B.a([],a5))
g=j.I()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.j1()
e=u[a3].Le(n).a
$.Y()
k=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=w.gq(0)
k.z=A0.mQ
g=k.I()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gq(0)
g=d.I()
q.drawCircle(k,f,2,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.bko.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eX()
e.dQ(this.c)
w=a0.a*(0.2+e.ae()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gajF()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.Y()
i=B.a([],n)
h=new B.aQ(j.r,A.aq,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.sap(B.aRW(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.j7
g=j.I()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b6C.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eX()
a0.dQ(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ae()
l=a0.ae()
k=Math.min(t,r)*(0.03+a0.ae()*0.09)
j=a0.ae()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.Y()
e=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gq(0)
e.z=new B.hy(A.G,k*0.35)
d=e.I()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gq(0)
d=e.I()
w.drawCircle(i,h,k,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.b6f.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eX()
a0.dQ(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ae()-0.5)*0.1)
k=v*(0.06+a0.ae()*0.05)
j=a0.ae()*3.141592653589793*2
i=$.Y()
h=B.a([],n)
g=new B.aQ(i.r,A.aq,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ao(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.by(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.Y()
i=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bN
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gq(0)
i.z=new B.hy(A.G,u)
d=i.I()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.brb.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.Y()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sap(new B.bR(A.A,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.cF8,null).au(0,u))
d.b2(u,w)
w=u.cD(-3)
v=B.L()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gq(0)
v.z=A.j7
d.b2(w,v)},
ar(d){return d.b!==this.b}}
C.boe.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bw(d)*7,p=0;p<7;++p){o=new B.eX()
o.dQ(q+p)
n=o.ae()*w
m=o.ae()*u
l=Math.sin(A.k.G(A.k.G(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ae()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.Y()
i=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=j.gq(0)
i.c=1.4
i.d=A.bN
h=i.I()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.I()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.I()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.I()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gq(0)
g.z=new B.hy(A.G,k*0.3)
h=g.I()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.bnn.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.Y()
v=B.L()
v.a=A.n3
v.sap(new B.a3(A.aw,A.aC,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).au(0,w))
d.b2(w,v)},
ar(d){return d.b!==this.b}}
C.baZ.prototype={
a5(d,e){var w,v,u,t,s,r=e.ge8(),q=0.55+0.45*Math.sin(this.b)
$.Y()
w=B.L()
w.b=A.ae
w.c=1.4
w.d=A.bN
v=this.d
w.r=v.j(0.55+q*0.35).gq(0)
u=B.L()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gq(0)
u.z=A.qD
r=new C.d0B(this,r*0.16,d,u,w)
t=e.ge8()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.wN.prototype={}
C.Hi.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aoC.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.u5.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m7.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hn.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.ey.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ei(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ac(){var w,v=this,u=B.T(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"type",v.b.b)
u.m(0,"x",v.c)
u.m(0,"y",v.d)
u.m(0,"w",v.e)
u.m(0,"h",v.f)
u.m(0,"text",v.r)
u.m(0,"fontSize",v.w)
u.m(0,"fontWeight",v.x.gdC(0))
u.m(0,"fontStyle",v.y.a)
u.m(0,"decoration",C.hAw(v.z))
u.m(0,"color",v.Q)
u.m(0,"align",v.as.a)
u.m(0,"imageRef",v.at)
u.m(0,"shape",v.ax.b)
u.m(0,"fillColor",v.ay)
u.m(0,"strokeColor",v.ch)
u.m(0,"strokeWidth",v.CW)
u.m(0,"rotation",v.cx)
u.m(0,"bulletList",v.cy)
u.m(0,"fileName",v.db)
u.m(0,"pdfPage",v.dx)
u.m(0,"textTransition",v.dy.b)
u.m(0,"textAnimDelayMs",v.fr)
w=v.fx
if(w.length!==0)u.m(0,"morphKey",w)
w=v.fy
if(w.length!==0)u.m(0,"loopFx",w)
w=v.go
if(w.length!==0)u.m(0,"frame",w)
w=v.id
if(w.length!==0)u.m(0,"ring",w)
w=v.k1
if(w.length!==0)u.m(0,"textFx",w)
if(v.k2)u.m(0,"rich",!0)
w=v.k3
if(w!==0)u.m(0,"textBg",w)
return u}}
C.lr.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,ey>")
n=B.z(new B.J(n,new C.c96(),m),m.k("ai.E"))
return C.qT(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,a1<n,@>>")
n=B.z(new B.J(n,new C.c97(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hT.prototype={
gb50(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gQu(){if(!C.ki(this.w))return!1
var w=this.gb50()
if(w==null)return!1
return new B.Q(Date.now(),0,!1).cY(w.bQ())},
hs(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
if(a3==null)a3=null
else a3=B.z(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.z(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.U(r).k("J<1,lr>")
r=B.z(new B.J(r,new C.c8W(),q),q.k("ai.E"))
return C.AD(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ac(){var w,v,u=this,t=B.T(x.N,x.z)
t.m(0,"id",u.a)
t.m(0,"name",u.b)
t.m(0,"themeId",u.c)
t.m(0,"aspectRatio",u.d.b)
t.m(0,"autoAdvanceSeconds",u.e)
t.m(0,"updatedAt",u.f.a4().ab())
w=u.w
if(w!=null)t.m(0,"deckKind",w)
w=u.x
if(w!=null)t.m(0,"marriageState",w)
w=u.y
if(w!=null&&A.a.i(w).length!==0)t.m(0,"transferClaimCode",w)
if(u.z)t.m(0,"transferReceived",!0)
w=u.Q
if(w!=null&&A.a.i(w).length!==0)t.m(0,"adminShareEditUntil",w)
w=u.as
if(w!=null)t.m(0,"signatureStrokeWidth",w)
w=u.at
if(w!=null)t.m(0,"signatureInkColor",w)
w=u.ax
if(w!=null&&A.a.i(w).length!==0)t.m(0,"kiapoSignedAt",w)
if(u.ay)t.m(0,"cinematic",!0)
if(u.ch)t.m(0,"loop",!0)
w=u.CW
if((w==null?"":w).length!==0)t.m(0,"aiOutlineJson",w)
w=u.cx
if(w!=null)t.m(0,"aiSlideIds",w)
w=u.cy
if(w!=null)t.m(0,"aiExtras",w)
w=u.db
if((w==null?"":w).length!==0)t.m(0,"finaleStyle",w)
w=u.dx
if(w!=null)t.m(0,"finaleTitle",w)
w=u.dy
if(w!=null)t.m(0,"finaleSubtitle",w)
w=u.fr
if((w==null?"":w).length!==0)t.m(0,"finaleLogo",w)
w=u.r
v=B.U(w).k("J<1,a1<n,@>>")
w=B.z(new B.J(w,new C.c8X(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.jt.prototype={}
C.aYV.prototype={
B(d){return B.ck(new C.c91(this))}}
C.alS.prototype={
S(){return new C.bfK(null,null)}}
C.bfK.prototype={
gaVb(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.h7,null,1,null,v)
w.cF(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gaVb().p()
this.bpk()},
B(d){return B.c3(this.gaVb(),new C.dz0(),this.a.c)}}
C.aIj.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.abc.prototype={
Oa(d,e,f,g){return this.bII(d,e,f,g)},
bII(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Oa=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Oa)
case 3:s=i
if(d.e==null){w=1
break}B.a8(d,!1).M(null)
t=d.H(x.q).f
t.P(B.b0(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ec,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Oa,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.x.j(0.35),A.dn,24)],x.V),r=B.au(B.p(v,v,A.h,v,v,new B.o(A.ba,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dQ,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ar,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d3)
n.push(B.B(B.a([B.D(new C.abu(A.hq,"Download",A.bT,new C.ecd(w,d),!0,v),1),A.ax,B.D(new C.abu(A.uD,"Share",A.bk,new C.ece(w,d),!1,v),1),A.ax,B.D(new C.abu(A.ha,"Safari",A.aW,new C.ecf(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ecg(d),v,v))
return B.bq(!0,new B.C(A.p4,B.v(B.a([B.p(v,B.v(n,A.ag,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iI,v,t,u,s,v,A.n),v,v,v,v,A.DW,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.aj,!0,!0)}}
C.abu.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.a1,!0,v,B.aI(!1,u,!0,B.eq(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bll,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.aYT.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anQ(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.N(v,w,v,w)}else{v=6*w
u=new B.N(v,10*w,v,12*w)}t=i.c11().ahQ(1.35)
s=B.at0(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.buB(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bk,h,h,h,h,2,D.bEL,A.z,!0,h,!0,h,!1,i.x,A.ah,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.vi,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yl,A.am,h,A.QM,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.t(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gV(v)
w=n?t.czC(B.aY(g.Q).j(0.45),A.cx):t
p=g.as
l=m?1:h
k=m?A.eH:A.BR
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.QD:s
$.Y()
j=B.L()
j.b=A.ae
j.c=3*w
j.e=A.fs
j.r=A.aF.gq(0)
j=i.chk(p,t,k,j)
k=g.r
w=new B.am(A.W,h,A.a9,A.q,B.a([j,i.chi(k,t,l?A.QD:s)],x.p),h)}else w=i.chj(p,t,g.k2?A.QD:s,m)
v=new B.nc(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aH(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ad)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bS0()
case 3:return i.c9e()
case 2:return B.b2(h,h,h,new C.aYQ(g,h),A.f9)
case 5:g=g.r
return new C.aYS(g,!i.e&&i.z==null,h)}},
c11(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aY(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kA
j=A.cx
break
case"shadow":v=o.d
e=B.a([new B.cK(D.a9K,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cK(l,A.J,6*v),new B.cK(l,A.J,16*v),new B.cK(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cE
w=A.aF
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mg
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cK(A.by,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.x,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cK(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cK(A.b7,new B.u(-3*v,0),0),new B.cK(A.aE,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cK(A.cQ,A.J,8*v),new B.cK(A.aE,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=H.a8G
break
case"ice":v=o.d
e=B.a([new B.cK(A.aX,A.J,10*v),new B.cK(A.cD,A.J,22*v)],x.r)
k=A.O
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cK(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kA
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cH1[q]
u.push(new B.cK(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cK(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.Y()
f=B.L()
v=o.d
f.sap(D.bGs.au(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cK(A.IE,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.Y()
f=B.L()
v=o.d
f.sap(D.bGP.au(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cK(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cq
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cK(l.j(0.45),new B.u(u,u),0),new B.cK(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kA
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.aY(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
avW(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eqc.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c9_(h)
v=r.k2?C.hMR(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eH:A.BR
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VW(B.dl(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
chk(d,e,f,g){return this.avW(d,e,f,!1,g)},
chi(d,e,f){return this.avW(d,e,f,!1,null)},
chj(d,e,f,g){return this.avW(d,e,f,g,null)},
buB(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bS0(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.au(B.V(s.b===D.kJ?A.ET:A.A8,A.aA,t,t,t,32),t,t,t)}w=u.bxv(r)
if(s.b===D.kJ){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.cp,A.r,1),s,B.a([new B.ab(0,A.G,A.x.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.N(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aK3(r,!0)
return C.fjc(s.go,v,s.id)}return w},
aK3(d,e){var w,v,u,t
try{w=C.hN9(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.ck(new C.c8Z(this,w,v,e))
return u}catch(t){return D.a7W}},
bxv(d){return this.aK3(d,!1)},
c9e(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aXJ
return C.hNr(v,w.db,w.dx)}}
C.aYQ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Y(),g=B.L(),f=this.b
g.r=B.aY(f.ay).gq(0)
w=B.L()
w.r=B.aY(f.ch).gq(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.b2(s,g)
d.b2(s,w)
break
case 1:d.j3(s,g)
d.j3(s,w)
break
case 2:r=new B.aQ(h.r,A.aq,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ao(u,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aO(r,g)
d.aO(r,w)
break
case 3:r=new B.aQ(h.r,A.aq,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.b5(0,h))
f=u*0.65
r.E(new B.ao(f,h))
r.E(new B.ao(f,t*0.2))
r.E(new B.ao(u,t*0.5))
r.E(new B.ao(f,t*0.8))
t*=0.55
r.E(new B.ao(f,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aO(r,g)
d.aO(r,w)
break
case 4:h=t/2
w.c=v+2
d.bE(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aQ(h.r,A.aq,i,i,B.a([],x.v))
r.E(new B.b5(q,0))
r.E(new B.ao(u,0))
r.E(new B.ao(u-q,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aO(r,g)
d.aO(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aQ(h.r,A.aq,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ao(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.E(new B.bE())
d.aO(r,g)
d.aO(r,w)
break}},
ar(d){return d.b!==this.b}}
C.aFW.prototype={
S(){return new C.bqI(null,null)}}
C.bqI.prototype={
Z(){var w,v=this
v.a0()
w=B.bi(null,A.iq,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.brz()},
aKe(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bT(B.au(B.d(d,w,w,w,w,w,w,A.dQ,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a3(A.a3,A.a7,A.w,v,w,w),A.n),A.bb)},
buP(){var w,v=this,u=null,t=v.aKe("Slide A",A.bk),s=v.aKe("Slide B",A.aW)
if(v.a.c===D.cd)return new B.am(A.W,u,A.b_,A.q,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c3(w,new C.eR4(v,s,t),u)},
B(d){return this.buP()}}
C.aGy.prototype={
iH(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jl(d){return d.b!==this.b}}
C.Tb.prototype={
S(){return new C.bfU(null,null)}}
C.bfU.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bi(null,A.zy,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cd){w.sq(0,1)
return}B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dK_(u),x.a)},
bp(d){var w,v,u,t=this
t.bC(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sq(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cd)w.sq(0,1)
else B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJZ(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bpy()},
B(d){var w,v=this.a
if(v.c.dy===D.cd||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c3(w,new C.dJY(this),v.d)}}
C.Hh.prototype={
B(d){return B.ck(new C.c8S(this))}}
C.awO.prototype={
S(){return new C.bat()}}
C.bat.prototype={
Z(){this.a0()
if(this.a.c!==D.cd)B.bN(A.JJ,new C.cZ9(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cd)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.Tb(C.ei(A.bf,!1,4279310375,A.az,"",4294538006,24,A.bi,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bc,o,2,"",0,0,"",u,D.eV,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.ck,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ei(A.bf,!1,4294967295,A.az,"",4280640491,22,A.bi,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bc,o,2,"Element flies in",0,0,"",q.a.c,D.cN,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.W,p,A.a9,A.q,B.a([w,B.an(32,new C.Tb(t,B.p(p,D.eWJ,A.h,p,p,new B.o(s,p,B.H(A.ba,A.r,1),r,p,p,A.n),p,p,p,p,A.iL,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bT(n,D.aTj,A.bb)}}
C.a5J.prototype={
S(){return new C.bgy(null,null)}}
C.bgy.prototype={
gaVI(){var w=this.a
if(w.e)w=D.eqj.t(0,w.c)||D.aHJ.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVI()){w=C.hLw(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bi(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bq4()},
B(d){var w,v=this,u=v.d
if(!v.gaVI()||u==null)return v.a.d
w=v.a
return B.c3(u,new C.e1K(v,u,A.o.G(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWQ.prototype={
B(d){var w=null
return B.au(C.aYU(!0,w,!1,C.ei(A.L,!1,this.e.l(),A.az,"",4280640491,this.f,A.bi,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.bc,4280172719,2,"Aa",0,0,this.c,D.cd,D.cN,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bbC.prototype={
iH(d){return C.a0s(this.b,new B.a9(0,0,0+d.a,0+d.b).cD(-this.c))},
jl(d){return d.b!==this.b||d.c!==this.c}}
C.bmn.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0s(g,h),e=a1.ge8(),d=new C.eGv()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sap(D.aJd.au(0,h))
a0.aO(f,w)
g=C.a0s(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b9s.gq(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sap(D.ezQ.au(0,h))
a0.aO(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gq(0)
g.z=new B.hy(A.G,e*0.04)
a0.aO(f,g)
g=d.$1(e*0.012)
g.r=A.c.gq(0)
a0.aO(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sap(D.ezO.au(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gq(0)
a0.aO(f,w)
g=C.a0s(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gq(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gq(0)
g.z=new B.hy(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.o0.gq(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sap(D.ezJ.au(0,h))
a0.aO(f,w)
w=C.a0s(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_T.gq(0)
a0.aO(w,v)
g=C.a0s(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b24.gq(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sap(D.aJd.au(0,h))
a0.aO(f,g)
for(g=B.wl(f),w=B.a([],x.X),g=new B.uU(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jJ(y.M));--q
g.j1()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bw(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.j1()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.j1()
m=w[q].Le(p*n/o).a
l=D.cEu[A.o.G(n,4)]
$.Y()
p=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=l.gq(0)
k=p.I()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gq(0)
k=i.I()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sap(D.ezS.au(0,h))
g.z=new B.hy(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.sap(D.ezP.au(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gq(0)
a0.aO(f,w)
g=C.a0s(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.na.gq(0)
a0.aO(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bnk.prototype={
a5(d,e){d.EC(C.a0s(this.b,new B.a9(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.ge8()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aIw.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.aJ1.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.aKm.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.a61.prototype={}
C.Mh.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aBx(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aZ(v),null,null)},
gdT(){return this.c},
gRP(){return this.r},
gRQ(){return this.w},
gK6(){return this.x}}
C.aBx.prototype={
Z(){var w,v=this
v.a0()
$.aT.c_$.push(v)
C.fo7()
$.h4v=new C.eir(v)
w=B.bi(null,A.zw,null,1,null,v)
w.f1(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.H4()},
bp(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MS(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.H4()}},
iP(d){if(d===A.yH||d===A.r5||d===A.r4||d===A.oH)this.rJ()},
p(){var w,v,u,t=this
$.aT.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rJ()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.av()
v.O$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bI(0)
v.fU()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.av()
v.O$=0}t.bqj()},
ga8Z(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gNb(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a9s(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQu())return!1
return!0},
jK(){return this.a9s(null)},
ag_(){var w=this.c
if(w==null)return
w.H(x.q).f.P(D.ey7)},
px(){if(!this.jK())return!1
this.ag_()
return!0},
anT(d){var w,v,u,t,s,r=this
if(r.a9s(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h3C(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yV(){return this.anT(null)},
H4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$H4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aoE(k),$async$H4)
case 3:j=e
w=4
return B.b(C.ani(k),$async$H4)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fCE(j,t.bUN())
w=t.ga8Z()?5:7
break
case 5:r=t.gNb()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aX3(r),$async$H4)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.eeP())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.eeQ())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xL(m==null?"":m)!=null)continue
C.foj(n,s)
p=!0}t.n(new C.eeR(t,s))
if(p||s.length>J.aa(j))t.rJ()
case 1:return B.h(u,v)}})
return B.i($async$H4,v)},
bUN(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ki(w)&&w!==q}if(w)p.push(r)
return p},
cfM(d){var w,v=this,u=d.w
if(!C.ki(u)||u==="hati_kiapo_uongozi")return
v.a7Q(d)
w=A.d.bi(v.d,new C.egp(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.Q(Date.now(),0,!1)}else A.d.ck(u,0,d.hs())
v.db=!1},
caa(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ki(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cfM(t)
s=u.d
w=B.U(s)
v=w.k("cT<1,hT>")
s=B.z(new B.cT(new B.a4(s,new C.egd(),w.k("a4<1>")),new C.ege(),v),v.k("G.E"))
return s},
MS(d){return this.bJ4(d)},
rJ(){return this.MS(null)},
bJ4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.caa()
w=3
return B.b(C.U9(d==null?t.a.c:d,s),$async$MS)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anT(r)?4:5
break
case 4:w=6
return B.b(C.a5g(r),$async$MS)
case 6:q=r.x
p=A.a.i(q==null?t.gNb():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bi(t.d,new C.eec())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.ck(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MS,v)},
oB(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.ki(u.w))===!0?A.hS:A.ln
v.at=B.cO(w,new C.ehx(v))},
aVc(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acX(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a7(v.ay)},
csJ(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acX(w.e.hs(),w.f,w.r))
w.n(new C.ein(w,v.pop()))
w.oB()},
ceT(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acX(w.e.hs(),w.f,w.r))
w.n(new C.egn(w,v.pop()))
w.oB()},
nD(){var w,v,u=this
if(u.e==null)return
w=A.d.bi(u.d,new C.eia(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.Q(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.Q(Date.now(),0,!1)},
VE(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wz(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.R$=$.av()
u.O$=0}w.a7(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bI(0)
u.fU()}w.a7(0)},
IH(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cT<1,n>")
t=B.d7(new B.cT(new B.a4(w,new C.eib(),v.k("a4<1>")),new C.eic(),u),u.k("G.E"))
w=this.ch
v=B.a2(w).k("cu<1>")
v=B.z(new B.cu(w,v),v.k("G.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.av()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bI(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cN)continue
p=n.a
m=w.ce(0,p,new C.eid(n))
s.ce(0,p,new C.eie())
p=m.a.a
o=n.r
if(p!==o)m.saU(0,o)}},
Gp(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.ba(u.d,new C.edB(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gNb()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hs())}u.nD()
u.oB()},
agk(d,e){var w,v,u,t,s=this
if(s.jK())return
w=s.VE(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ki(v.w))===!0
if(u){C.hLA(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hLB(t,w.d+w.f*0.5)}}s.Gp()
s.nD()
s.oB()
if(u&&s.c!=null)s.n(new C.eio())},
ctN(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gp()
w.nD()
w.oB()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpB(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hJD(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aY(p==null?v.e:p)
u=q.bSf(v)
t=q.bSe(v)
s=B.aY(v.e)
r=v.f
return new C.jt(o,"Class template",p,u,t,s,r==null?null:B.aY(r))}return C.hmY(o)},
bSf(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cN)s=t.w>=28||A.o.D(A.o.ak(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.aY(t.Q)}return A.M},
bSe(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cN&&t.w<28)return B.aY(t.Q)}return A.aI},
ack(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8Z()){w.c.H(x.q).f.P(D.ewK)
return}w.a7Q(d)
w.aWo(C.byk(d))
return}if(C.c9L(v)){w.a7Q(d)
w.aWo(d)
return}w.n(new C.efw(w,d))},
aos(){var w,v,u,t,s,r,q=this
q.a_W(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ki(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.edz(q))
if(r&&q.c!=null){u.toString
q.Ih(u,s)}return}q.rJ()
q.n(new C.edA(q))},
aWn(d){this.a7Q(d)
this.Yw(d,!0)},
a7Q(d){if(!C.ki(d.w))return
C.foj(d,this.d)},
Yw(d,e){return this.c6a(d,e)},
aWo(d){return this.Yw(d,!1)},
c6a(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Yw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.byk(d)
if(e){r=s.x
q=A.a.i(r==null?t.gNb():r)
t.dy.W(0,q.toLowerCase())
C.anj(t.a.c,q)}r=s}else r=d
w=C.c9L(r.w)?3:4
break
case 3:w=5
return B.b(t.a7R(r),$async$Yw)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.ba(t.d,new C.efT(l))
o=l.a.hs()
n=C.ki(o.w)&&C.hMM(o)
t.n(new C.efU(t,o,p))
if(n){m=A.d.bi(t.d,new C.efV(o))
if(m>=0){t.d[m]=o.hs()
t.rJ()}}if(!t.a9s(l.a))t.WM()
r=!1
if(t.c!=null)if(!t.a9s(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anT(r)&&C.fkn(l.a)}else l=r
else l=r
if(l)t.c.H(x.q).f.P(D.exj)
case 1:return B.h(u,v)}})
return B.i($async$Yw,v)},
a7R(d){return this.bHm(d)},
bHm(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l0(r.c,A.y5),$async$a7R)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kG(!1,r,s.c,s.d,null,A.y5,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7R,v)},
nw(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c9L(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c99(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nw,v)},
ac1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ac1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.efv(),s,null,!0,!0,x.H),$async$ac1)
case 3:if(t.c==null){w=1
break}t.aos()
case 1:return B.h(u,v)}})
return B.i($async$ac1,v)},
ac0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ac0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.efs(),s,null,!0,!0,x.H),$async$ac0)
case 3:if(t.c==null){w=1
break}t.n(new C.eft())
t.aos()
case 1:return B.h(u,v)}})
return B.i($async$ac0,v)},
WM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ax(),$async$WM)
case 3:r=e
if(B.ks(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$WM)
case 4:s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.evn)
case 1:return B.h(u,v)}})
return B.i($async$WM,v)},
Ih(d,e){return this.cgc(d,e)},
cgc(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ih=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.aed(s,t.gDe(),t.gDd(),!0,e,t.d),$async$Ih)
case 9:w=4
break
case 6:w=10
return B.b(C.aee(s,t.gDe(),t.gDd(),!0,e,t.d),$async$Ih)
case 10:w=4
break
case 7:w=11
return B.b(C.aef(s,t.gDe(),t.gDd(),!0,e,t.d),$async$Ih)
case 11:w=4
break
case 8:w=12
return B.b(C.aeg(s,t.gDe(),t.gDd(),!0,e,t.d),$async$Ih)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ih,v)},
bTL(){var w,v,u,t,s=this
if(!s.ga8Z()){s.c.H(x.q).f.P(D.evA)
return}w=s.gNb()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.aec(u,t,v,new C.eeL(s),new C.eeM(s),w)},
acl(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c2(A.dz,null,new C.efC(u),s,!0,!0,!1,A.l6,!1,!1,x.N),$async$acl)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aeg(s,u.gDe(),u.gDd(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.aed(s,u.gDe(),u.gDd(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.aee(s,u.gDe(),u.gDd(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aef(s,u.gDe(),u.gDd(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bTL()
return B.h(null,v)}})
return B.i($async$acl,v)},
c5i(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aVc()
w=C.cy()
v=C.AD(t,t,t,t,D.Bf,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.efD(u,v))},
a7h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a7h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hR6(s),$async$a7h)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e9(q.r,new C.edD())
t.cZ(new C.edE(t,p,q,r))
s=t.c.H(x.q).f
o=r.r.length
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7h,v)},
aej(d,e,f,g){var w=null,v=g?A.dw:A.bM,u=B.H(g?A.ba:A.cp,A.r,1)
return B.hq(B.aH(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ad),w,e,w,w)},
Yv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.px()){w=1
break}s=t.jo()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.efO(),q),q.k("G.E"))}o=s!=null&&s.b===D.l5?B.a([s],x.u):p
if(o.length===0){t.c.H(x.q).f.P(D.exu)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.efP(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yv)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yv,v)},
acC(){return this.c69()},
c69(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hQS(s,t.f+1,o),$async$acC)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.ko(s,B.U(s).c)
p.a=A.d.bi(o.r,new C.efR(q))
t.cZ(new C.efS(p,t,o,q,r))
t.c.H(x.q).f.P(D.exT)
case 1:return B.h(u,v)}})
return B.i($async$acC,v)},
acJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()||!t.yV()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.eg8(),q),q.k("G.E"))
if(p.length===0){t.c.H(x.q).f.P(D.ev8)
w=1
break}o=new B.J(p,new C.eg9(),B.U(p).k("J<1,O>")).ft(0,new C.ega())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ap(new B.bc(l,A.b2,A.aM),$.av()))}q=t.c
q.toString
w=3
return B.b(B.c2(A.K,null,new C.egb(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acJ)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.av()
q.O$=0}if(t.c!=null)t.n(new C.egc())
case 1:return B.h(u,v)}})
return B.i($async$acJ,v)},
aco(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aco=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.px()){w=1
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
return B.b(C.h5C(s,new C.Dm(r,q,p,o==null?"":o)),$async$aco)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.efE(m,n))
s=t.c.H(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aeD(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aco,v)},
a7K(){return this.bGJ()},
bGJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hR5(s,t.f+1,l),$async$a7K)
case 3:r=e
q=$.fG3
$.fG3=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.edU())
t.c.H(x.q).f.P(D.ev_)
w=1
break}if(!q){s=r.CW
s=C.h4t(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.edV(t,l,r))
t.c.H(x.q).f.P(D.eym)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.ko(s,B.U(s).c)
s=l.r
m.a=A.d.bi(s,new C.edW(p))
o=s.length
t.cZ(new C.edX(m,t,l,p,r))
n=s.length-o
s=t.c.H(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7K,v)},
aMi(d,e){if(e){this.adb()
return}this.c5i(d,!1)},
bCx(){return this.aMi(null,!1)},
adb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.bX,null,new C.egi(t),r,!0,!0,!0,A.os,!1,!1,x.N),$async$adb)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.egj(t,C.hJC(s).oO()))
case 1:return B.h(u,v)}})
return B.i($async$adb,v)},
cZ(d){var w=this
if(w.px())return
w.Gp()
w.aVc()
w.n(d)
w.IH()
w.nD()
w.oB()},
a5O(){this.cZ(new C.ecy(this,D.mb))},
aNG(){var w=this.gdk()
if(w==null)return
this.cZ(new C.edS(this,w))},
aMT(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.edQ(this))},
aZf(d,e){if(this.e==null||d===e)return
this.cZ(new C.egr(this,d,e))},
Mp(d){return this.bEv(d)},
bEv(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gNb():s)
w=5
return B.b(C.anh(t.a.c,r),$async$Mp)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aoG(s)
w=6
return B.b(C.aYY(t.a.c,s),$async$Mp)
case 6:if(t.c==null){w=1
break}t.n(new C.edM(t,d))
w=7
return B.b(t.rJ(),$async$Mp)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Mp,v)},
cg9(d,e){var w=this
if(d.z){w.ag_()
return}w.n(new C.egq(w,d,e))
w.oB()},
jo(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
UG(d){return this.ch.ce(0,d.a,new C.edC(d))},
aqg(d){return this.CW.ce(0,d.a,new C.eed())},
a_W(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.VE(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ag$.d.c
if(u!=null)u.jf()},
b1v(){return this.a_W(!0)},
a_U(d){var w,v,u=this
if(u.px())return
if(!u.yV())return
w=u.VE(d)
if(w==null||w.b!==D.cN)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.UG(w).saU(0,"")}u.n(new C.ei8(u,d))
$.aT.x1$.push(new C.ei9(u,d,w))},
b20(d){var w=this
if(d.b===D.cN&&!w.jK()&&w.yV()){w.a_U(d.a)
return}w.awl(d.a)},
awl(d){var w,v,u,t,s,r=this
if(r.jK())return
w=r.r
if(w!=null&&w!==d){v=r.VE(w)
if(v!=null&&v.b===D.cN){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.ehy(r,s,d))
if(s||d==null){t=$.aT.ag$.d.c
if(t!=null)t.jf()}},
aIC(){this.cZ(new C.ecz(this))},
on(d){return this.btT(d)},
btT(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$on=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$on)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecw(t,d))
case 1:return B.h(u,v)}})
return B.i($async$on,v)},
TQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fk(78,1920),$async$TQ)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ecm(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TQ,v)},
TK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(T.BN(t.a.c),$async$TK)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gai(s)){t.c.H(x.q).f.P(D.eyW)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c2(null,null,new C.ecj(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TK)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cZ(new C.eck(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TK,v)},
apg(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.ba(w.gdk().z,new C.edO(v))){w.c.H(x.q).f.P(D.exX)
return}if(w.w===v)w.a_W(!0)
w.cZ(new C.edP(w,v))},
bAP(){var w=this.jo(),v=w==null
if((v?null:w.b)===D.eV)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cN)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aJj(d,e){var w=this,v=w.jo(),u=w.gdk(),t=w.e
if(t==null)return
w.cZ(new C.ed0(w,v,d,e,t,u))},
bvs(d){return this.aJj(d,null)},
a65(d){return this.bvA(d)},
bvA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a65=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a3b.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nw(),$async$a65)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jo()
if(s!=null){r=s.b
if(r===D.cN)t.bvs(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eV){r=d.c
t.aJj(r.j(0.88),r)}w=1
break}t.cZ(new C.ed5(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a65,v)},
a64(d){return this.bvy(d)},
bvy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a64=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jo()
r=t.gdk()
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
return B.b(t.nw(),$async$a64)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ed3(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a64,v)},
bvi(d){var w=this.gdk()
if(w==null)return
this.cZ(new C.ed_(this,w,d))},
YB(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hR1(r),$async$YB)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nD()
t.n(new C.eg2(t,s))
w=4
return B.b(t.rJ(),$async$YB)
case 4:if(t.c!=null)t.ack(s)
case 1:return B.h(u,v)}})
return B.i($async$YB,v)},
a7C(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_W(!0)
t.nD()
s=t.c
s.toString
w=3
return B.b(C.Ps(s,q),$async$a7C)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.H(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7C,v)},
Cq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Cq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nD()
t=4
w=7
return B.b(C.aN0(m),$async$Cq)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aMq(o,q,m.b),$async$Cq)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a6(l)
o=r.c
if(o==null){w=1
break}o.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Cq,v)},
E0(d,e){return this.csc(d,e)},
csc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$E0=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.px()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_W(!0)
t.nD()
s=h.a=t.e.hs()}else{r=A.d.bi(t.d,new C.eih(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hKA(q?"":s)
o=C.h3p(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a4<1>")
n=B.z(new B.a4(s,new C.eii(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.clM(n.length,o,s),$async$E0)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hKu(h.a)
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
return B.b(t.clL(n,o),$async$E0)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kZ(t.d,new C.eij(s))
s=h.a.b
w=11
return B.b(t.clJ(k.b,s),$async$E0)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hKz(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.H(x.q).f.P(D.ez6)
w=1
break}w=12
return B.b(t.clK(j.a,s,o,j.c),$async$E0)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.eik(h,t,i))
t.oB()
case 1:return B.h(u,v)}})
return B.i($async$E0,v)},
clM(d,e,f){var w=this.c
w.toString
return B.c2(A.K,null,new C.ehO(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
clL(d,e){var w=this.c
w.toString
return B.c2(A.K,null,new C.ehN(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
clJ(d,e){var w=this.c
w.toString
return B.c2(A.K,null,new C.ehH(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
clK(d,e,f,g){var w=this.c
w.toString
return B.c2(A.K,null,new C.ehJ(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a92(){var w=null
return B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a93(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a3(A.aw,A.aC,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eIS,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQR(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Re,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aQU(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a3(A.aw,A.aC,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.a1,!0,w,B.aI(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.mX,w,w,w),A.d6,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.Ac,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eeH(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
bRc(d,e,f,g,h,i){return this.aQU(d,e,f,!1,g,h,i)},
arA(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dQ,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VX,w,w,w)},
aQT(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cc,w,new B.b6(B.m(14),A.X),w,w,w)
return B.bL(B.d(e,w,w,w,w,w,w,A.mW,w,w,w),new C.eeG(d,f),v)},
aQS(d,e){return this.aQT(d,e,null)},
Iy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oD(l,s.c,s.d),$async$Iy)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.f5(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gah(o.z),n=new B.hK(l,new C.ehz());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7O(l.charCodeAt(0)==0?l:l,r.b),$async$Iy)
case 4:l=t.a
w=5
return B.b(B.oC(l.c,l.d),$async$Iy)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
GL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oD(q,s.c,s.d),$async$GL)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7O(A.R.al(r.ac(),null),r.b+".json"),$async$GL)
case 4:q=t.a
w=5
return B.b(B.oC(q.c,q.d),$async$GL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GL,v)},
b1j(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nD()
u.rJ()
w=u.c
w.toString
v=B.eD(new C.ei7(u,t),!1,null,x.z)
B.a8(w,!1).cp(v)},
FZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$FZ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fox(),$async$FZ)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hNl(s.a)
q=t.c
q.toString
w=5
return B.b(B.c2(A.aF,null,new C.ecr(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FZ)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.ecs(t,s))
w=1
break}if(p==="split")t.cZ(new C.ect(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FZ,v)},
LL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}w=3
return B.b(t.nw(),$async$LL)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aN_(s,null,null),$async$LL)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ecx(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LL,v)},
aZ2(d){var w=this.e
if(w==null||!C.ki(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKB(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aN_(s,t==null?null:B.aY(t),u)},
a5M(d){return this.btK(d)},
btK(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5M=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yV()){s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.ezl)
w=1
break}w=3
return B.b(t.aKB(),$async$a5M)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.eco(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5M,v)},
adX(d){return this.ceW(d)},
ceW(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yV()){s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.eyu)
w=1
break}w=3
return B.b(t.aKB(),$async$adX)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ego(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adX,v)},
c21(){var w,v,u=this
if(u.jK())return
w=new B.Q(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.crh()}},
crh(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.eif(this,r,(A.o.az(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bRx(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.eeK(this,r,u.d))},
bVZ(d){var w
if(this.jK())return!1
w=this.e
if((w==null?null:C.ki(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fl7(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kJ&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bW_(d){var w
if(this.jK())return!1
w=this.e
if((w==null?null:C.ki(w.w))!==!0)return!0
if(!this.yV())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fl7(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kJ&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LU(d){return this.bw_(d)},
bw_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yV()){s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.exk)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.anl(p),$async$LU)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.H(x.q).f.P(D.exZ)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5g(r)
w=1
break}t.n(new C.ed9(t,d,o))
t.nD()
$.aT.x1$.push(new C.eda(t))
case 1:return B.h(u,v)}})
return B.i($async$LU,v)},
TO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$TO)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.byZ(),$async$TO)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ecl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TO,v)},
MD(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$MD)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jo()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fon(r),$async$MD)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.eeb(s,q))
case 1:return B.h(u,v)}})
return B.i($async$MD,v)},
iB(d){this.cZ(new C.ecu(this,d))},
pm(d){return this.bvb(d)},
bvb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.px()){w=1
break}m=!D.aHL.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nw(),$async$pm)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FZ()
w=1
break A
case"sign_paper":t.LL()
w=1
break A
case"hd_photo":t.TO()
w=1
break A
case"sharpen":t.MD()
w=1
break A
case"print":t.Cq()
w=1
break A
case"rotate":s=t.jo()
if(s!=null)t.cZ(new C.ecD(s))
w=1
break A
case"text_box":t.aIC()
w=1
break A
case"picture":t.TQ()
w=1
break A
case"present":t.b1j()
w=1
break A
case"new_slide":t.a5O()
w=1
break A
case"export_json":t.GL()
w=1
break A
case"outline_share":t.Iy()
w=1
break A
case"flashcard_tool":t.un(D.Gh)
w=1
break A
case"quiz_tool":t.un(D.Gi)
w=1
break A
case"worksheet_tool":t.un(D.Gj)
w=1
break A
case"duplicate_el":s=t.jo()
if(s==null){w=1
break A}t.cZ(new C.ecE(t,s))
w=1
break A
case"delete_el":t.apg()
w=1
break A
case"bring_fwd":s=t.jo()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecF(t,s))
w=1
break A
case"send_back":s=t.jo()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecQ(t,s))
w=1
break A
case"align_left":s=t.jo()
if(s!=null)t.cZ(new C.ecT(s))
w=1
break A
case"align_center":s=t.jo()
if(s!=null)t.cZ(new C.ecU(s))
w=1
break A
case"align_right":s=t.jo()
if(s!=null)t.cZ(new C.ecV(s))
w=1
break A
case"grayscale":case"brighten":t.MD()
w=1
break A
case"flip_h":s=t.jo()
if(s!=null)t.cZ(new C.ecW(s))
w=1
break A
case"flip_v":s=t.jo()
if(s!=null)t.cZ(new C.ecX(s))
w=1
break A
case"rectangle":t.on(D.bc)
w=1
break A
case"circle":t.on(D.eF)
w=1
break A
case"triangle":t.on(D.jp)
w=1
break A
case"arrow":t.on(D.Bh)
w=1
break A
case"line":case"divider":t.on(D.fk)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gah(r.z),p=new B.hK(q,new C.ecY()),o=0;p.C();){n=A.a.fm(A.a.i(q.gT(0).r),B.ae("\\s+",!0,!1,!1,!1))
o+=new B.a4(n,new C.ecZ(),B.U(n).k("a4<1>")).gJ(0)}t.c.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cy()
t.iB(C.iM(A.L,!1,t.gpB().d.l(),A.az,40,A.bi,A.u,0.18,q,"Presentation Title",0,D.mc,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cy()
t.iB(C.iM(A.L,!1,t.gpB().e.l(),A.az,22,A.bi,A.a4,0.12,q,"Subtitle goes here",0,D.db,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iB(C.iM(A.bf,!0,4279310375,A.az,20,A.bi,A.a4,0.5,C.cy(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tn,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iB(C.iM(A.bf,!1,4279310375,A.az,20,A.bi,A.a4,0.5,C.cy(),"1. First item\n2. Second item\n3. Third item",0,D.tm,0.8,0.1,0.22))
w=1
break A
case"quote":t.iB(C.iM(A.L,!1,4279310375,A.az,24,A.cx,A.a4,0.25,C.cy(),'"Insert meaningful quote here."',0,D.db,0.8,0.1,0.3))
w=1
break A
case"citation":t.iB(C.iM(A.bf,!1,4284773515,A.az,14,A.bi,A.a4,0.1,C.cy(),"Author, Title (Year). Publisher.",0,D.tn,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iB(C.iM(A.dM,!1,4279310375,A.az,14,A.bi,A.a4,0.08,C.cy(),C.bz0(),0,D.db,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iB(C.iM(A.dM,!1,4279310375,A.az,13,A.bi,A.a4,0.06,C.cy(),"Page "+(t.f+1),0,D.db,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.ecG(t))
w=1
break A
case"footer_bar":t.cZ(new C.ecH(t))
w=1
break A
case"highlight":t.cZ(new C.ecI(t))
w=1
break A
case"redact":t.cZ(new C.ecJ(t))
w=1
break A
case"callout":t.cZ(new C.ecK(t))
w=1
break A
case"checkboxes":t.iB(C.iM(A.bf,!1,4279310375,A.az,20,A.bi,A.a4,0.45,C.cy(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.db,0.8,0.1,0.2))
w=1
break A
case"table":t.iB(C.iM(A.bf,!1,4279310375,A.az,16,A.bi,A.a4,0.55,C.cy(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.db,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.ecL(t))
w=1
break A
case"letter":t.iB(C.iM(A.bf,!1,4279179050,A.az,17,A.bi,A.a4,0.82,C.cy(),C.bz0()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.db,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iB(C.iM(A.bf,!1,4279310375,A.az,22,A.bi,A.O,0.76,C.cy(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tn,0.8,0.1,0.12))
w=1
break A
case"toc":t.iB(C.iM(A.bf,!1,4279310375,A.az,18,A.bi,A.a4,0.76,C.cy(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.db,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iB(C.iM(A.bf,!1,4279310375,A.az,16,A.bi,A.a4,0.08,C.cy(),"Signature: _________________________",0,D.db,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iB(C.iM(A.bf,!1,4279310375,A.az,16,A.bi,A.a4,0.08,C.cy(),"Initials: ______",0,D.db,0.3,0.65,0.78))
w=1
break A
case"approved":t.iB(C.iM(A.L,!1,4278556265,A.az,28,A.bi,A.u,0.12,C.cy(),"APPROVED",0,D.mc,0.32,0.62,0.08))
w=1
break A
case"draft":t.iB(C.iM(A.L,!1,4292617766,A.az,28,A.bi,A.u,0.12,C.cy(),"DRAFT",0,D.db,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iB(C.iM(A.L,!1,871318596,A.az,36,A.bi,A.u,0.12,C.cy(),"CONFIDENTIAL",0,D.db,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.ecM(t))
w=1
break A
case"progress":t.cZ(new C.ecN(t))
w=1
break A
case"stars":t.iB(C.iM(A.L,!1,4279310375,A.az,36,A.bi,A.a4,0.12,C.cy(),"\u2605\u2605\u2605\u2605\u2606",0,D.pq,0.8,0.1,0.4))
w=1
break A
case"equation":t.iB(C.iM(A.L,!1,4279310375,A.az,32,A.bi,A.O,0.14,C.cy(),"y = mx + b",0,D.db,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iB(C.iM(A.L,!1,4279310375,A.az,18,A.bi,A.a4,0.2,C.cy(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tm,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.ecO(t))
w=1
break A
case"compare":t.cZ(new C.ecP(t))
w=1
break A
case"link_text":t.iB(C.iM(A.bf,!1,4280640491,A.mg,16,A.bi,A.a4,0.1,C.cy(),"https://example.com",0,D.db,0.8,0.1,0.5))
w=1
break A
case"phone":t.iB(C.iM(A.bf,!1,4279310375,A.az,18,A.bi,A.a4,0.1,C.cy(),"(555) 123-4567",0,D.db,0.8,0.1,0.5))
w=1
break A
case"email":t.iB(C.iM(A.bf,!1,4280640491,A.az,18,A.bi,A.a4,0.1,C.cy(),"name@email.com",0,D.db,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.ecR(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cZ(new C.ecS(t,r))
w=1
break A
case"invoice":t.iB(C.iM(A.bf,!1,4279179050,A.az,16,A.bi,A.a4,0.84,C.cy(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.db,0.8,0.1,0.08))
w=1
break A
case"resume":t.iB(C.iM(A.bf,!1,4279179050,A.az,17,A.bi,A.a4,0.84,C.cy(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.db,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iB(C.iM(A.bf,!1,4279310375,A.az,16,A.bi,A.a4,0.88,C.cy(),"MEETING MINUTES\nDate: "+C.bz0()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.db,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iB(C.iM(A.bf,!1,4279310375,A.az,17,A.bi,A.a4,0.88,C.cy(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.db,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iB(C.iM(A.bf,!1,4279310375,A.az,15,A.bi,A.a4,0.8,C.cy(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.db,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pm,v)},
cle(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eqg.t(0,this.z)},
cld(d){if(this.jo()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b2P(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cd,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hNa(d)
s=o?12:18
r=o?A.I:A.cJ
if(o)if(e)q=f
else q=g?A.af:A.ai
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.N(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.LD,A.h,p,p,D.CA,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.hm,B.aH(p,new B.am(A.W,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ad),p)},
bGZ(d){var w,v=null,u=this.jo()
if(u==null)return A.bF
w=B.a([A.aa,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ai,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.v(w,new B.J(D.O4,new C.eea(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
un(d){return this.btS(d)},
btS(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$un=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aHG.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nw(),$async$un)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecv(t,d))
case 1:return B.h(u,v)}})
return B.i($async$un,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.epo
w=h.e
if(w==null)return h.bxB()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.M(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bR,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.es,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bX:D.b1D
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQu()}else j=!1
if(j)k.push(new C.a5K(h.a.c,!1,h.e.gb50(),h.gc1Z(),g))
else if(s&&h.e!=null&&!h.jK()&&C.c9L(h.e.w)){j=h.a
k.push(new C.a5K(j.c,j.d,g,h.gc37(),g))}if(s)k.push(h.bGV(w,t,r))
if(s&&h.jK()){w=t?A.fw:A.k2
j=B.m(14)
i=B.H(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.byH,A.aa,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fw,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zE,A.iK,g,g,g))}w=!n
if(w&&!h.jK())k.push(h.bWV(t,r))
if(w&&h.jK())k.push(h.csd(t))
if(r&&h.jo()!=null&&w&&!h.jK())k.push(h.bWR(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b0R(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b0R(t,!1),g))
i.push(B.D(new B.bI(A.aY,g,g,h.byR(v,t,!s||p),g),1))
if(h.cle(r)&&u&&s&&!h.jK())i.push(h.c1N(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jK()&&h.cld(!1))j.push(new B.a5(240,g,h.bJs(t),g))
k.push(B.D(B.B(j,A.ag,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bWS(t))
return B.cd(g,m,B.bq(!1,new B.am(A.W,g,A.a9,A.q,w,g),!0,!1,A.aj,!0,!0),g,!1,!1,g,!1)},
bxB(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.M(p).ax.a===A.H
p=w?A.bX:A.bM
v=r.a.e
u=r.c12(A.bk,A.p7,new C.edd(r),r.gc5f(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.D(r.aIl(A.bk,A.hD,"Blank Presentation",new C.ede(r)),1),A.ax,B.D(r.aIl(A.aW,A.xc,"Class Template",new C.edf(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bu,s,A.mf,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ab],t)
t=r.d
if(t.length===0)u.push(r.buE(w))
else{t=new B.hx(t,B.U(t).k("hx<1>"))
A.d.v(u,t.gdH(t).di(0,new C.edg(r,w),x.l))}return B.cd(q,p,B.bq(!1,B.cL(u,q,new B.N(18,12,18,v),q,q,A.ak,!1),!0,!1,A.aj,!0,!0),q,!1,!1,q,q)},
bFj(){this.n(new C.edR(this))
var w=this.c
w.toString
if(B.aG(w,A.bR,x.w).w.a.a<900){w=$.aT.ag$.d.c
if(w!=null)w.jf()}},
acD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jo()==null){w=1
break}s=t.c
s.toString
s=B.M(s)
r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.eg1(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acD,v)},
zR(d,e){return this.clz(d,e)},
clz(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hN(D.TJ,!0,"Dismiss",j,new C.ehA(),new C.ehB(d,e),A.io,!0,x.N),$async$zR)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ag_()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQu()){r.ag_()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aN0(d),$async$zR)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aMq(j,q,d.b),$async$zR)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a6(i)
j=r.c
if(j==null){w=1
break}j.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.E0(d,!1),$async$zR)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hN(D.TJ,!0,"Dismiss",j,new C.ehC(),new C.ehD(d),A.a1,!0,x.y),$async$zR)
case 20:if(g===!0)r.Mp(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adH("Rename presentation",d.b),$async$zR)
case 24:l=g
if(l!=null)r.cg9(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.m(0,"id",C.cy())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.ehE(r,k))
r.oB()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zR,v)},
aX2(d,e){var w=null
return B.bK(!1,D.f52,w,w,!0,w,w,e,w,B.fo(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.at,w,A.lq,w,w,w,w,w,A.k9,w,w))},
buE(d){var w=this.fy
w===$&&B.c()
return B.c3(w,new C.ecA(this,d),null)},
bDr(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.edF(),x.dv).bZ(0,new C.edG()),v=B.z(w,w.$ti.k("G.E"))
return new B.C(G.acs,this.aIU(v,e,new C.edH(),f),null)},
aIU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ez)
t=e.j(g?0.14:0.1)
s=new B.b1(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.af:A.bt,n,n,n,10),A.vg],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cC(A.b0,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c1(r,r,r,r),new B.bv(s,s,s,s),n,n,A.n),n,n,n,n,A.nt,n,n,n))
A.d.v(l,u)}return B.eZ(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.h,A.eb)},
buC(d,e,f){return this.aIU(d,e,null,f)},
bDt(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cXg
else if(v==="hati_kuhoweya")w=D.cKt
else{if(v==="hati_kiapo_uongozi")v=D.cya
else v=C.ki(v)?D.cEO:A.NH
w=v}v=this.fy
v===$&&B.c()
return B.c3(v,new C.edK(this,f,d,e,w),null)},
bWS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jo()
if(i==null||i.b!==D.cN)return A.bF
w=k.UG(i)
v=k.aqg(i)
u=A.x.j(0.55)
t=x.p
s=B.bq(!1,new B.C(A.zH,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b8,B.bK(!1,D.f11,j,j,!0,j,j,new C.efa(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.aj,!0,!0)
r=d?A.aF:A.c
q=B.m(18)
p=B.H(A.bk.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h8,B.bT(new B.C(A.eM,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bk,j,j,j,j,2,D.bEt,A.z,!0,j,!0,j,!0,v,A.ah,j,j,j,j,j,A.vi,j,j,j,j,j,j,!1,"\u2022",j,new C.efb(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yl,A.am,j,A.QM,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bb),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.D(B.ci(B.B(B.a([k.t6(G.KI,j,new C.efc(k,i),d),k.t6(G.WY,j,new C.efd(k,i),d),k.t6(I.agu,j,new C.efe(k,i),d),k.t6(I.XH,j,new C.eff(k,i),d),k.t6(k.buA(i.as),j,new C.efg(k,i),d),k.t6(D.ahC,j,new C.efh(k,i),d),k.t6(D.ahB,j,new C.efi(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.b0),1)
m=A.k.N(i.w)
return B.bX(0,B.aD(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bg7,B.p(j,B.B(B.a([n,A.aa,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ai,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d5],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ls,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ac),0,0,0)},
bWR(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jo()
if(m==null)return A.bF
w=m.b
v=w===D.cN
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aN],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.ab(0,A.G,A.x.j(0.12),A.cs,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b_w(A.j3,"Edit",new C.eeW(o,m),d,!0))
if(w===D.l5)p.push(o.b_w(A.EK,"Shape & ring",new C.eeX(o),d,!0))
p.push(o.t6(Av.ER,"Format",new C.eeY(o),d))
if(v)A.d.v(p,B.a([o.t6(G.KI,n,new C.eeZ(o,m),d),o.t6(D.ahC,n,new C.ef_(o,m),d),o.t6(D.ahB,n,new C.ef0(o,m),d)],q))
p.push(A.b8)
p.push(o.cju(A.e6,n,o.gaMR(),d,!0))
p.push(o.t6(A.hp,"Done",new C.ef1(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a3(A.a3,A.a7,A.w,t,n,n),A.n),n,n,n,A.DL,A.ls,n,n,n)},
buA(d){switch(d.a){case 2:return D.XE
case 1:case 5:return D.XG
default:return D.XF}},
bXH(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bf}},
awk(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aE
else if(h)w=A.c
else{v=g?A.af:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.F6:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ez,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qh,B.aD(!1,A.a1,!0,n,B.aI(!1,v,!1,B.eq(new B.C(new B.N(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ac),n)},
t6(d,e,f,g){return this.awk(d,e,f,g,!1,!1)},
b_w(d,e,f,g,h){return this.awk(d,e,f,g,h,!1)},
cju(d,e,f,g,h){return this.awk(d,e,f,g,!1,h)},
bGV(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mp],m)
w=B.H(e?A.aI:A.pX,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bk.j(e?0.18:0.1),A.cs,18)],x.V)
u=p.a0l(A.eq,"Back",p.gbAz(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d5,B.D(B.B(B.a([new B.dm(1,A.ci,t,o),A.aa,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c2:A.ai,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rz,o,A.e,A.j,0,A.cT,o),1)],q)
if(!p.jK()){u=p.a0l(A.uM,"Undo",p.ax.length===0?o:p.gcsI(),e)
A.d.v(r,B.a([u,p.a0l(D.bsk,"Redo",p.ay.length===0?o:p.gceS(),e)],q))}r.push(p.a0l(A.wU,"PDF",new C.ee3(p),e))
r.push(p.a0l(A.hq,"Download as video",new C.ee4(p),e))
if(!p.jK())r.push(B.AR(o,o,B.V(A.nw,e?A.af:A.bt,o,o,o,o),new C.ee5(p),A.J,new C.ee6(p),A.aj,"More",x.N))
r.push(A.d5)
r.push(B.aD(!1,A.a1,!0,o,B.aI(!1,B.m(14),!0,B.eq(D.dQq,o,new B.o(o,o,o,B.m(14),o,K.F6,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gax9(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a3(A.aw,A.aC,A.w,m,o,o),A.n),o,o,o,D.bg2,D.bla,o,o,o)},
csd(d){var w=this,v=null,u=B.m(18),t=d?A.aF.j(0.92):A.c.j(0.96),s=B.H(d?A.cK:A.aJ,A.r,1)
return B.p(v,B.ci(B.B(B.a([w.ij(A.t3,"Print",new C.eil(w),d),w.ij(A.wU,"Download PDF",new C.eim(w),d),w.ij(A.pd,"Present",w.gax9(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.b0),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zE,G.ae9,v,v,v)},
a0l(d,e,f,g){var w,v=null
if(f==null)w=g?A.ba:A.dr
else w=g?A.af:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c8)},
bWV(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aF.j(0.92):A.c.j(0.96)
u=B.H(d?A.cK:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.J(p,new C.efl(r,d),t),t.k("ai.E"))
t.push(new B.C(W.adR,new B.fk(new C.efm(r),q),q))
A.d.v(t,w?B.a([new B.C(S.ur,r.aej(A.kZ,"Ending celebration",r.gc5s(),d),q),new B.C(S.ur,r.aej(A.EK,"Logo ring & frame",r.gc67(),d),q)],x.p):A.fY)
A.d.v(t,w?B.a([new B.C(S.ur,r.aej(A.nx,"Look and feel",r.gc68(),d),q),new B.C(S.ur,r.aej(A.ph,"Edit this slide's text",r.gc6F(),d),q)],x.p):A.fY)
t.push(new B.C(S.ur,B.hq(B.aH(q,B.p(q,D.eoS,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ab(0,A.G,O.kV.j(0.4),A.J,10)],x.V),D.ajz,A.n),q,34,q,q,A.is,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.efn(r),q,q,q,q,q,q,!1,A.ad),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ci(B.B(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.blD,q,q,A.b0)
s=e?8:10
return B.p(q,B.v(B.a([t,B.ci(r.chg(d),A.q,q,A.z,q,new B.N(8,2,8,s),q,q,A.b0)],x.p),A.ag,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zE,q,q,q,q)},
chg(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cRN[v]
u.a=null
s=u.a=t.b
w.push(e.ld(e.ciV(s),t.a,new C.egK(u,e),a3,D.aHG.t(0,s)))}w.push(e.ij(A.kC,"Notes Slide",new C.egL(e),a3))
w.push(e.ld(A.EJ,"Quiz",new C.egM(e),a3,!0))
w.push(e.ld(L.Em,"Worksheet",new C.egX(e),a3,!0))
w.push(e.ld(P.EN,"Flashcard",new C.eh7(e),a3,!0))
w.push(e.ld(A.Lu,"Lab Report",new C.ehi(e),a3,!0))
w.push(e.ld(A.x_,"Rubric",new C.ehp(e),a3,!0))
w.push(e.ld(A.ob,"Minutes",new C.ehq(e),a3,!0))
w.push(e.ld(A.pb,"Syllabus",new C.ehr(e),a3,!0))
w.push(e.ld(A.Ly,"Timeline",new C.ehs(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cSY[v]
w.push(e.ld(r.b,r.c,new C.eht(e,r),a3,!D.aHL.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.ij(A.xf,a0,e.gaIB(),a3),e.ij(A.t0,"Picture",new C.egN(e),a3),e.ij(A.x9,"Bio link",new C.egO(e),a3),e.ij(A.Yc,"Table",new C.egP(e),a3),e.ij(A.Lx,"Sticky",new C.egQ(e),a3),e.ij(A.uC,"Divider",new C.egR(e),a3),e.ij(A.ES,"Header",new C.egS(e),a3),e.ld(A2.Es,"Rectangle",new C.egT(e),a3,!0),e.ld(A.rT,"Circle",new C.egU(e),a3,!0),e.ld(A.Xv,"Triangle",new C.egV(e),a3,!0),e.ld(A.jl,"Arrow",new C.egW(e),a3,!0),e.ld(D.bqO,"Parallelogram",new C.egY(e),a3,!0),e.ld(D.btj,"Hexagon",new C.egZ(e),a3,!0),e.ld(A.uC,"Line",new C.eh_(e),a3,!0),e.ld(A.wU,"PDF",new C.eh0(e),a3,!0),e.ld(O.Yk,"Signature",new C.eh1(e),a3,!0),e.ij(A1.Aj,"Quote",new C.eh2(e),a3),e.ij(D.X5,a1,new C.eh3(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bR,x.w).w
u=x.p
t=B.B(B.a([e.aJq("Wide 16:9",D.Bf,a3),e.aJq("Short 9:16",D.nE,a3),new B.C(A.hm,B.mL(D.bvp,d,D.eYD,d,new C.eh4(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bAO("This slide",!e.Q,a3,new C.eh5(e)),A.bo,e.aLB("All slides",e.Q,a3,new C.eh6(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bAP()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.J(D.a_6,new C.eh8(e),n),n.k("ai.E"))
n=B.ci(B.B(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b0)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cTL[v]
j=B.aY(k)
i=new B.ay(k===4294967295?A.dr:A.ba,1.5,A.r,-1)
l.push(new B.C(A.hm,B.aH(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c1(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eh9(e,k),d,d,d,d,d,d,!1,A.ad),d))}l=B.ci(B.B(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b0)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bAg()
g=B.U(h).k("J<1,C>")
h=B.z(new B.J(h,new C.eha(e,a3),g),g.k("ai.E"))
return new B.a5(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ar,p,A.P,o,A.av,n,A.P,m,A.av,l,A.P,j,A.av,B.ci(B.B(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b0),A.ar,e.bTS(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jo()
w=e.c
w.toString
w=B.aG(w,A.bR,x.w).w
u=new C.egJ(e)
t=new C.ehu(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.O4,f.dy,new C.ehb(e,u,f),A.aW)
A.d.v(p,B.a([o,A.av,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.O4,q,new C.ehc(e,u),A.bk))
return new B.a5(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.ij(A.kC,w,new C.ehd(e),a3),e.ij(A.t3,"Print deck",new C.ehe(e),a3),e.ld(D.afD,"Export JSON",new C.ehf(e),a3,!0),e.ij(A.fD,"Duplicate Slide",e.gaNF(),a3),e.ij(A.e6,a2,e.gaMS(),a3),e.cmS(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jo()
w=x.p
u=B.a([e.ij(D.X5,a1,new C.ehg(e),a3),e.ij(A.fD,"Duplicate",e.gaNF(),a3),e.ij(A.e6,a2,e.gaMS(),a3),e.ij(A.pd,"Present",e.gax9(),a3),e.ij(A.Ar,a0,e.gaIB(),a3),e.ij(A.EG,"Fit Text",new C.ehh(e),a3),e.ij(A.wU,"Download PDF",new C.ehj(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ij(A.kE,"Transfer",new C.ehk(e),a3))
if(f!=null){w=B.a([A.aa,e.ij(G.KI,"Bold",new C.ehl(e,f),a3),e.ij(G.WY,"Italic",new C.ehm(e,f),a3),e.ij(G.afe,"Underline",new C.ehn(e,f),a3),e.ij(Aa.KJ,"Bullets",new C.eho(e,f),a3),e.bJb(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bGZ(a3))
w.push(e.ij(D.bpv,"Delete",e.gaMR(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aJq(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nE
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4L,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d5,D.buB],v))
return new B.C(A.hm,B.jQ(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.ed8(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cmS(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.ba:A.cp,A.r,1)
u=B.m(8)
t=B.V(A.Ek,d?A.aA:A.ai,q,q,q,14)
s=B.aF(q,q,q,q,D.aiA,q,q,q,new C.ehR(r,p),q,q,q,q,q,A.c8)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bg,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.aiq,q,q,q,new C.ehS(r,p),q,q,q,q,q,A.c8)],x.p),A.m,q,A.e,A.Q,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.E0,A.lZ,q,q,q)},
ciV(d){switch(d.a){case 6:return P.EN
case 7:return A.EJ
case 8:return L.Em
case 4:return A.ES
default:return A.kC}},
bJb(d,e){var w=null,v=B.H(e?A.ba:A.cp,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aiA,w,w,w,new C.eeg(this,d),w,w,w,w,w,A.c8),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bg,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.aiq,w,w,w,new C.eeh(this,d),w,w,w,w,w,A.c8)],x.p),A.m,w,A.e,A.Q,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.rO,A.lZ,w,w,w)},
bTS(d){var w=null
return B.AR(B.Ch(B.V(Ad.X8,d?A.af:A.bt,w,w,w,16),w,w,D.f2J,w,w,w),w,w,new C.eeO(),A.J,this.gbvh(),A.ch,"Slide layout",x.fO)},
ld(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.H(g?A.dw:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dB:A.bk,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.LD,A.h,w,w,D.CA,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.hm,B.aD(!1,A.a1,!0,w,B.aI(!1,v,!0,B.eq(new B.C(A.h8,B.v(B.a([new B.am(A.W,w,A.a9,A.h,q,w),A.d6,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aP:A.bt,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w)},
ij(d,e,f,g){return this.ld(d,e,f,g,!1)},
b0R(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ak:A.b0
v=B.hH(t,new C.ei2(u,s,e,d),s.r.length,A.ch,t,w,new C.ei3(e),!1)
s=d?A.aF:A.bM
w=B.a([],x.p)
if(e&&!u.jK())w.push(new B.C(A.ch,B.Gl(E.aiN,new C.ei4(u),B.na(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aIn,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
byR(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nE?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.N(u,u,u,u),new B.bI(A.aY,v,v,new B.fD(w,B.aH(v,B.ck(new C.edx(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.edy(this),v,v,v,v,v,v,!1,A.ad),v),v),v)},
byT(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ki(a9.w))===!0,b1=b0&&C.fl7(b3),b2=b0&&b3.b===D.kJ&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jK())v=!b0||a7.bW_(b3)
else v=!1
if(!a7.jK())u=!b0||a7.bVZ(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.ck:A.bk
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fIP(b3))o=a8
else if(p&&!a7.jK())o=a7.gc20()
else o=a7.jK()?a8:new C.edl(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jJ
i=w&&C.fIP(b3)&&a7.yV()?new C.edm(a7,b3):a8
h=v&&b3.b===D.cN?new C.edn(a7,b3):a8
g=u?new C.edo(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bm
else e=q?A.bT:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bT.j(0.08)
else a0=b3.b===D.kJ?A.K:a8
if(b1){a1=a7.jK()?"":"Tap to sign"
a1=B.au(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bT.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bR,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yV()
a3=b3.b===D.cN
a4=a3?a7.UG(b3):a8
a5=a3?a7.aqg(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bR,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.edp(a7,b3):a8
a3=v&&a3?new C.edq(a7,b3):a8
a6=C.aYU(q,a4,a1,b3,a5,a2,a3,new C.edr(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aH(a8,B.p(a8,D.bxm,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eds(a7,b3,b4,b5),a8,a8,new C.edt(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jK()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aH(a8,B.p(a8,D.by0,A.h,a8,a8,new B.o(A.eB,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbRw(),a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jK()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aH(a8,B.p(a8,D.bzy,A.h,a8,a8,new B.o(A.bT,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.edu(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cN)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bR,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.au(B.aH(a8,B.p(a8,D.faQ,A.h,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ab(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kz,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.edv(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aH(j,B.et(A.A,f,new B.am(A.W,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ad),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLB(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bk:A.bG,A.r,1)
if(e)t=A.bk
else t=f?A.aA:A.ai
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d5,B.p(r,D.LD,A.h,r,r,D.CA,r,12,r,r,r,r,r,12)],s))
return B.aH(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.fW,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ad)},
bAO(d,e,f,g){return this.aLB(d,e,f,g,!1)},
c1N(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.av()
v.O$=0}v=d.c
w.m(0,k,new B.ap(new B.bc(v,A.b2,A.aM),$.av()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aF:A.aN
t=f?A.vK:l
if(f)s=new B.c1(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.X,A.X,A.X)
else s=l
r=f?B.a([new B.ab(0,A.G,A.x.j(0.12),A.tv,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.af:A.bt,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b8,m.aX2(e,new C.efp(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ar,B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b3(4,B.m(10),A.dd),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ah,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.efq(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.ag,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.N(12,w,12,v),l,l,l)},
aOV(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jo()
if(a2==null)return A.bF
w=new C.eeu(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dL:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b8,a0.aX2(a3,a0.gbFi())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.eZ3,B.D(B.md(a1,a1,a1,u,0.05,new C.eev(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.f9p,B.D(B.md(a1,a1,a1,t,0.05,new C.eew(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cN
if(m)o.push(B.B(B.a([D.eTk,B.D(B.md(a1,a1,a1,96,10,new C.eex(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l5
if(l||n===D.kJ||n===D.Pl)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.f3n,B.D(B.md(a1,a1,a1,s,0,new C.eey(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.faA,B.D(B.md(a1,a1,a1,r,0,new C.eez(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.AG[j]
i.a=null
g=h.a
i.a=g
k.push(B.jQ(a1,a1,a1,new B.w(h.b,a1,A.oz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eeA(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c8(A.bJ,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.AB[j]
f.a=null
g=e.a
f.a=g
h.push(B.jQ(a1,a1,a1,new B.w(e.b,a1,A.oz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eeB(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.c8(A.bJ,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.J(v,new C.eeC(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.c8(A.bJ,l,A.bx,6,6),A.ab,B.fUE(new C.eeD(w,a2),D.c9B,B.eN([a2.as],k),!0,a1,k)],p))}if(n===D.eV){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.J(v,new C.eeE(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c8(A.bJ,m,A.bx,0,6)],p))}o.push(A.ab)
o.push(B.dq(D.bzk,D.f5d,new C.eeF(a0,a5),B.bk(A.bQ,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cL(o,a1,a1,q,a1,A.ak,a5)
if(a5)return d
q=a3?A.cK:A.c
p=a4?A.vK:a1
if(a4)o=new B.c1(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.X,A.X,A.X)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.x.j(0.12),A.tv,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.DM,a1,a1,a1)},
bJs(d){return this.aOV(d,!1,!1,null)},
c12(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c3(p,new C.eeI(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eJK,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.D(B.v(B.a([w,A.bA,A.d6,r.buC(D.cCr,d,B.M(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.aa,B.dP(B.hq(B.aD(!1,A.a1,!0,q,B.aI(!1,q,!0,B.eq(D.etN,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.ab(0,A.G,A.bT.j(0.4),A.e9,8)],p),D.ajE,A.a6),q,q,q),A.cH,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.M(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aZM,D.b_7],v):B.a([A.c,A.k2],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.ab(0,A.G,d.j(s?0.18:0.1),A.cs,14)],p),new B.a3(A.aw,A.aC,A.w,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aIl(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c3(w,new C.ech(this,g,d,e,f),null)},
adH(d,e){return this.cdg(d,e)},
cdg(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.av()
q=new B.ap(new B.bc(e,A.b2,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.egm(d,q),p,null,!0,!0,x.N),$async$adH)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adH,v)},
Ob(d){var w=d.bQ()
return""+B.bC(w)+"/"+B.bO(w)+"/"+B.bw(w)}}
C.acX.prototype={}
C.awb.prototype={
S(){return new C.b9g(null,null)}}
C.b9g.prototype={
gcoX(){var w,v=this.a.c,u=v.f.bQ(),t=""+B.bC(u)+"/"+B.bO(u)+"/"+B.bw(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bi(u,A.p0,u,1,u,v)
w.f1(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bi(u,D.bex,u,1,u,v)
w.cm(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.boc()},
HA(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.av(0,new B.hF(w,v,A.co).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.C(D.bk1,B.c3(new B.h4(B.a([u,w],x.dS)),new C.cVF(this),v),v),v,v,v)}}
C.b9u.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.au(new B.C(D.bki,B.aD(!1,A.a1,!0,w,B.p(w,B.bu(B.m(22),B.v(B.a([new B.C(D.bjv,B.v(B.a([B.p(w,D.by6,A.h,w,w,new B.o(A.aE.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.f76,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eKS,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bdB,B.B(B.a([B.D(B.bK(!1,D.eXs,w,w,!0,w,w,new C.cW0(d),w,B.fo(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mA,w,A.nI,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bj,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.f1k,w,w,!0,w,w,new C.cW1(d),w,B.fo(w,w,w,w,w,w,w,w,w,w,w,A.aE,w,w,w,w,w,A.mA,w,A.nI,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.ao),A.h,w,N.SI,new B.o(A.aF,w,u,v,D.cCK,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.Ih.prototype={
S(){return new C.b9f()}}
C.b9f.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.H(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ab(0,A.G,m.j(0.08),A.dE,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.V(q.c,m,o,o,o,18),A.h,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.d8(B.aH(o,B.w5(B.dj(o,B.B(B.a([r,A.ax,new B.dm(1,A.ci,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.fj:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b6,A.Q,0,o,o),o,o,A.b9,new B.o(n,o,u,v,t,o,A.n),A.eK,o,o,o,A.qi,o,o,1/0),A.co,A.ji,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cVA(p,d),new C.cVB(p),new C.cVC(p),new C.cVD(p),o,o,o,!1,A.ad),k),new B.u(0,(1-k)*16))}}
C.NV.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.a1,!0,t,B.aI(!1,s,!0,new B.C(A.eM,B.B(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a3(A.aw,A.aC,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.mX,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.em,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ac)}}
C.YB.prototype={
S(){return new C.aBA(D.db,null,null)}}
C.aBA.prototype={
gWS(){var w,v=this,u=v.w
if(u===$){w=B.bi(null,D.be7,null,1,null,v)
v.w!==$&&B.bJ()
v.w=w
u=w}return u},
b1e(d){if(!this.a.c.ay)return
this.x=d
this.gWS().ie(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.at7(D.eA7)
C.hK7()
v.PA()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWS().p()
v=w.z
if(v!=null)v.a9(0)
C.at7(D.eA8)
C.hKa()
w.bqk()},
crE(){B.j8()
this.n(new C.ej1())
var w=this.c.H(x.q).f
w.a2o()
if($.bgW)w.P(D.ex_)},
PA(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cO(B.dB(0,0,0,0,0,A.o.D(C.fSP(u,w),1,120)),new C.eiS(v))},
crj(){var w,v=this
v.n(new C.ej0(v))
if(v.r)v.PA()
else{w=v.f
if(w!=null)w.a9(0)}},
gaQK(){var w=this.a.c.db
return(w==null?"":w).length!==0},
clF(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.eiT(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cO(A.nr,new C.eiU(w))},
at2(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.eiO(u))
u.PA()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQK()){u.clF()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.eiP(u,A.o.G(w+1,s)))
u.b1e(w)
u.PA()}},
cbW(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.eiQ(v))
v.PA()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.eiR(v,w,t))
v.b1e(w)
v.PA()}},
cn3(d){var w,v=this,u=v.e
if(u===D.cd){u=v.d
u===$&&B.c()
return new B.nc(d,new B.cx(u,x.ac))}w=v.cn4(u)
u=v.d
u===$&&B.c()
return B.qm(new B.nc(d,new B.cx(u,x.ac)),w,new C.eiZ(),A.b9,A.b9,new C.ej_(v))},
cn4(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bet
case 16:return A.kX
case 18:return A.no
default:return A.p2}},
cn2(d,e,f){var w,v,u,t=null,s=B.cF(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cW(s,!1,e,t)
case 2:case 17:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.tw,A.J,w),w.k("bd<bD.T>")),t,!0)
case 3:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.PB,A.J,w),w.k("bd<bD.T>")),t,!0)
case 4:case 21:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.i6,A.J,w),w.k("bd<bD.T>")),t,!0)
case 5:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.tu,A.J,w),w.k("bd<bD.T>")),t,!0)
case 6:case 16:w=x.b
return B.im(A.A,new B.cW(s,!1,e,t),t,new B.bd(s,new B.bl(0.82,1,w),w.k("bd<bD.T>")))
case 7:w=x.b
return B.im(A.A,new B.cW(s,!1,e,t),t,new B.bd(s,new B.bl(1.18,1,w),w.k("bd<bD.T>")))
case 8:return B.c3(s,new C.eiV(s),e)
case 9:return B.c3(s,new C.eiW(s),e)
case 10:return B.c3(s,new C.eiX(s),e)
case 11:return B.c3(s,new C.eiY(s),e)
case 12:w=x.b
return new B.cW(s,!1,B.im(A.A,e,t,new B.bd(s,new B.bl(1.03,1,w),w.k("bd<bD.T>"))),t)
case 14:w=s.gq(0)
v=x.K
return B.jA(B.je(e,new B.bd(s,new B.bl(A.tw,A.J,v),v.k("bd<bD.T>")),t,!0),A.q,new C.bnP(w,t))
case 15:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.PB,A.J,w),w.k("bd<bD.T>")),t,!0)
case 19:w=B.di()
w.mf((1-s.gq(0))*2)
v=s.gq(0)
u=s.gq(0)
w.ji(v,u,v,1)
return B.fp(A.A,B.d8(e,s.gq(0)),t,w,!0)
case 20:return B.et(A.A,(1-s.gq(0))*0.2,new B.cW(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jA(new C.alS(B.c3(n.gWS(),new C.ej2(n,v,w),m),m),A.q,m)}else{t=B.qX(new C.Hh(w,!0,!1,m))
l=B.aY(w.e)
u=n.cn3(B.ec(B.jA(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.fSP(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oB,m,m,m),A.bo,D.bAm],k),A.m,m,A.e,A.Q,0,m,m),A.h,m,m,new B.o(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.fK,m,m,m)
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
l.push(B.bX(0,new C.LR(new C.Dm(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nE?0.5625:1.7777777777777777
l.push(B.au(new B.fD(r,B.jA(B.tP(A.aj,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgW){r=B.Gl(A.kG,new C.ej3(d),B.na(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.bq(!0,B.B(B.a([r,A.aa,B.Gl(B.V(n.r?Ag.x7:A.iM,m,m,m,m,m),n.gcri(),B.na(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.aj,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.bq(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hf,m,m,m),A.h,m,m,new B.o(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.fK,m,m,m),!0,!1,A.aj,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.bq(!0,B.aH(A.c5,B.p(A.kQ,$.bgW?A.bF:s,A.h,m,m,m,m,64,m,m,D.bff,m,m,150),A.z,!1,m,n.gcrD(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ad),!0,!1,A.aj,!0,!0),m,m,m,0,0,m))
return B.cd(m,A.x,B.aH(m,new B.am(A.W,m,A.b_,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ej4(n,d),m,m,m,!1,A.ad),m,!1,!1,m,m)}}
C.Io.prototype={
B(d){var w=null
return B.p(w,B.bq(!0,new B.C(E.adD,this.c,w),!0,!1,A.aj,!0,!1),A.h,w,w,D.aT2,w,w,w,w,w,w,w,w)}}
C.bnP.prototype={
iH(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jl(d){return d.b!==this.b}}
C.be6.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aPV
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.aB:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dj(r,B.au(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uT,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b9,new B.o(s.f,r,u,w,r,r,A.n),A.hS,r,64,r,r,r,r,64)
return B.aH(r,new B.a5(78,r,B.v(B.a([w,A.ar,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aB:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ad)}}
C.be5.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d49.h(0,p)
if(o==null)o=D.cT3
p=p==="none"
w=p?q:new B.a3(A.a3,A.a7,A.w,o,q,q)
p=p?A.cV.j(0.25):q
v=r.e
u=v?B.H(A.aB,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahN:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eh,q,q,52)
return B.aH(q,new B.a5(66,q,B.v(B.a([w,A.ar,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aB:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ad)}}
C.aHe.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b_$
if(v!=null)v.a1(0,w.gdB())
w.b_$=null
w.a2()}}
C.aJg.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.btu.prototype={}
C.aJh.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.aYX.prototype={}
C.Ua.prototype={
S(){return new C.aBy()},
bbs(d){return this.e.$1(d)}}
C.aBy.prototype={
gb_C(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga8_(){var w,v
if(this.d==="all")return B.bj(this.a.d,!0,x.I)
w=this.gb_C()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaKg(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_C()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb0Q(){return A.d.cG(this.ga8_(),0,new C.eiy())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Pb()},
Pb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZy(s.c,s.f),$async$Pb)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eiu(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Pb,v)},
HC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga8_()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.foj(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oD(o,q.c,q.f),$async$HC)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eD(new C.eix(t,p),!1,null,x.H)
w=4
return B.b(B.a8(o,!1).cp(q),$async$HC)
case 4:q=t.a
w=5
return B.b(B.oC(q.c,q.f),$async$HC)
case 5:w=6
return B.b(t.Pb(),$async$HC)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HC,v)},
Py(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Py=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hm(o,D.dH7,!0,"NgmySlidesTransferScan",x.N),$async$Py)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.eiv(t))
w=4
return B.b(C.af2(s),$async$Py)
case 4:r=e
t.n(new C.eiw(t))
o=J.a7(r)
if(o.gai(r)){o=t.c
if(o==null){w=1
break}o.H(x.q).f.P(D.evT)
w=1
break}w=5
return B.b(t.a.bbs(r),$async$Py)
case 5:q=t.c
if(q==null){w=1
break}B.a8(q,!1).M(null)
q=t.c.H(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Py,v)},
HB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga8_()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oD(s,r.c,r.f),$async$HB)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.foz(null,A.d.gL(n),s,t.a.f)}else q=C.foz(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.ae("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.F8(q,"ngmy_slides_"+p,!1),$async$HB)
case 4:o=e
s=t.a
w=5
return B.b(B.oC(s.c,s.f),$async$HB)
case 5:w=6
return B.b(t.Pb(),$async$HB)
case 6:s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$HB,v)},
a0w(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.eiz(t))
w=3
return B.b(C.byJ(),$async$a0w)
case 3:s=e
t.n(new C.eiA(t))
if(s==null||J.cj(s)){w=1
break}w=4
return B.b(t.a.bbs(s),$async$a0w)
case 4:r=t.c
if(r==null){w=1
break}B.a8(r,!1).M(null)
r=t.c.H(x.q).f
q=J.a7(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0w,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.d8:A.bM,k=o.ga8_().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.w,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.ct,m?A.af:A.ai,n,n,n,n),n,n,n,new C.eiD(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yi],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ab(0,A.G,A.bk.j(0.35),A.eP,24)],x.V)
u=B.an(n,B.V(A.p7,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bAS,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bnR],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hq(B.aH(A.c5,D.etP,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc6R(),n,n,n,n,n,n,!1,A.ad),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.W,n,A.a9,A.h,s,n),A.ao,n,n,new B.o(n,n,n,w,v,D.YP,A.n),n,n,n,n,E.VK,n,n,1/0),A.dW,o.au4(m,"What to transfer"),A.ab,B.B(B.a([B.D(o.aSW(A.pd,m,new C.eiE(o),o.d==="one","Pick a single deck","One presentation"),1),A.ax,B.D(o.aSW(D.bqH,m,new C.eiF(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d3,o.au4(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aF:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c3,n,n,n))}else A.d.v(v,new B.J(u,new C.eiG(o,m),B.U(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.mf)
w.push(o.au4(m,"Transfer options"))
w.push(A.ab)
w.push(B.B(B.a([B.D(o.an2(A.aX,k,!0,A.j6,m,o.r,o.gc16(),"Scan on another device","Show QR"),1),A.ax,B.D(o.aIm(A.jA,!0,A.iN,m,o.gciv(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.B(B.a([B.D(o.bt9(A.aS,k,A.hq,m,o.r,o.gc13(),"Download .json","Backup file"),1),A.ax,B.D(o.aIm(A.aZ,!0,Aq.xh,m,o.gctY(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bk.j(0.28),A.r,1)
s=B.V(A.l_,A.bk.j(0.9),n,n,n,18)
r=o.gaKg()
q=o.gb0Q()
p=o.gb0Q()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.B(B.a([s,A.ax,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.af:A.bt,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bq(!0,B.v(B.a([new B.C(Ac.Kl,i,n),B.D(B.cL(w,n,D.biF,n,n,A.ak,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0)],h)
if(o.f)j.push(B.p(n,U.T0,A.h,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cd(n,l,new B.am(A.W,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acQ(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hQi(s,t.d,t.e),$async$acQ)
case 2:return B.h(null,v)}})
return B.i($async$acQ,v)},
au4(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.aa,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ai,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aSW(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aF:A.c
if(g)w=A.bk
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bk.j(0.2),A.cs,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bk,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.a1,!0,s,B.aI(!1,r,!0,B.eq(new B.C(A.bB,B.v(B.a([t,A.T,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac)},
bDs(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aF:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bB0,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a3(A.a3,A.a7,A.w,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.el:A.rT
if(p)r=A.bk
else r=e?A.ba:A.dr
return new B.C(A.cL,B.aD(!1,A.a1,!0,q,B.aI(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eit(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q)},
an2(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aF:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qk,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.aik,A.h,s,s,D.aSQ,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d8(B.aD(!1,A.a1,!0,s,B.aI(!1,p,!0,B.eq(new B.C(E.Vo,B.v(B.a([new B.am(A.W,s,A.a9,A.h,u,s),A.ab,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac),r)},
aIm(d,e,f,g,h,i,j){return this.an2(d,e,!1,f,g,!1,h,i,j)},
bt9(d,e,f,g,h,i,j,k){return this.an2(d,e,!1,f,g,h,i,j,k)}}
C.Ub.prototype={
S(){return new C.bgV()}}
C.bgV.prototype={
Z(){this.a0()
this.abH()},
abH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.foz(null,A.d.gL(m),k,r.a.f):C.foz(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ki(A.d.gL(n).w))C.foj(A.d.gL(r.a.d),D.cRc)
n=r.a
m=n.c
n=C.hNq(n.d)
w=7
return B.b(C.foy(p,C.hNv(r.a.d),n,m,q),$async$abH)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.eiH(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.eiI(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.M(d).ax.a===A.H,h=i?A.d8:A.bM,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.eiJ())
v=B.aF(j,j,j,j,B.V(A.eq,i?A.af:A.ai,j,j,j,18),j,j,j,new C.eiK(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yi],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dQ,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.YP,A.n),j,j,j,j,E.VK,j,j,1/0)
q=B.m(24)
s=B.H(A.aX.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a44,A.L,j,j))
else if(k.d==null)r.push(D.dQ1)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ab(0,A.G,A.aB.j(0.35),A.cs,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eXU,A.ar,B.aH(j,B.p(j,B.B(B.a([D.bCw,A.ax,B.d(m,j,j,j,j,j,j,D.eLe,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bGh,A.n),j,j,j,j,A_.adp,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eiL(k,d),j,j,j,j,j,j,!1,A.ad),A.P,D.f0T,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pl(j,j,!1,l,j,!0,!0,j,!1,D.baD),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ht,A.L,j,j))
return B.cd(j,h,B.bq(!0,B.v(B.a([new B.C(Ac.Kl,v,j),B.D(B.ci(B.v(B.a([t,A.aO,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bId,A.n),j,j,j,j,A.rN,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adI,j,j,A.ak),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0),j,!1,!1,j,j)}}
C.aBv.prototype={
S(){return new C.aBw(new B.ap(A.as,$.av()),B.k9(!0,null,!0,!0,null,null,!1))}}
C.aBw.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.ecb(w))
$.aT.x1$.push(new C.ecc(w))},
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.p()
this.a2()},
aVe(){var w,v=this.c
v.toString
w=C.xL(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a8(v,!1).M(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.es,x.w).w,i=B.m(28),h=B.H(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bk.j(0.28),A.tt,36),D.a7q],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.by9,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ab,D.eVg,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aTe,k,k,k,k,A.wE,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.ax)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge0()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aF:A.M
o=new B.b1(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aI
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bH(1,A.br,B.dj(A.A,new B.w(p,k,D.eFc,k,k,k,k,k,k,k,k,k),k,k,A.b9,new B.o(s,k,new B.c1(m,m,m,m),new B.bv(o,o,o,o),n,k,A.n),A.hS,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Ha)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bX(0,B.d8(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bF9,A.z,!0,k,!0,k,!1,v,A.ah,k,k,B.a([new B.tG(B.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Al(5,k),new C.br2()],x.aS),k,k,A.aJB,k,5,k,1,k,k,!1,"\u2022",k,new C.ec7(l),k,new C.ec8(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lF,k,k,k,k),0),0,0,0)],a1)
d=C.xL(w.a.a.toUpperCase())==null?k:l.gc17()
return B.au(new B.C(new B.N(24,24,24,24+j.f.d),B.aD(!1,A.a1,!0,k,new B.d2(A9.Iq,B.p(k,B.bu(e,B.v(B.a([a0,new B.C(D.bj9,B.v(B.a([new B.am(A.W,k,A.a9,A.q,g,k),A.T,D.eTJ,A.bu,new B.a5(1/0,50,B.bL(D.f7W,d,B.bk(A.bk,A.bj,A.ai,k,A.c,k,k,k,new B.b6(B.m(16),A.X),k,k,k)),k),A.ar,B.bK(!1,A.n_,k,k,!0,k,k,new C.ec9(a2),k,B.fo(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.ao),A.h,k,k,new B.o(A.d8,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.br2.prototype={
nX(d,e){var w=e.a.toUpperCase()
return e.czU(B.h2(A.bs,w.length),w)}}
C.aoH.prototype={
S(){return new C.aBz(B.yi(A.JE,A.n7,A.tb))}}
C.aBz.prototype={
p(){this.d.p()
this.a2()},
aVd(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iG(w,d)},
a7U(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fwK(s),$async$a7U)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aVd("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7U,v)},
c15(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hNt(w[u])
if(t!=null){this.aVd(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uQ,s,s,s,t.gbHt(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aF(s,s,s,s,B.V(q?A.rZ:Ah.Le,s,s,s,s,s),s,s,s,new C.eiN(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d8,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.f96,s,s,s,1,s,!0)
r=B.yh(t.d,A.bP,t.gc14())
w=B.m(28)
w=B.au(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bk,A.r,3),w,B.a([new B.ab(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.cd(p,A.x,new B.am(A.W,s,A.b_,A.q,B.a([r,w,B.an(32,B.p(s,D.eYS,A.h,s,s,new B.o(v,s,B.H(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iL,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bre.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bwm,A.h,w,w,D.aSZ,w,56,w,w,w,w,w,56),A.aO,D.f8N,A.ar,new B.k3(this.c,new C.eTw(),w,w,x.cI),A.aO,new B.k3(this.d,new C.eTx(),w,w,x.cl),A.ab,D.f8K],x.p),A.m,w,A.e,A.Q,0,A.p),A.h,w,A9.Iq,new B.o(A.aF,w,u,v,w,w,A.n),w,w,w,K.VR,D.bjM,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)}}
C.a5K.prototype={
S(){return new C.bgD(A.bw)},
gd6(){return this.c}}
C.bgD.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XY()
w.d=B.dD(A.h7,new C.e2B(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XY(){return this.ceZ()},
ceZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e2z(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.Q(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c9M(p.c),$async$XY)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.n(new C.e2A(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XY,v)},
bJj(d){var w,v,u=d.a,t=A.o.ak(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ak(u,6e7)%60
v=A.o.ak(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.ak(w,6e7)<30&&A.o.ak(w,36e8)<999?A.aE:A.bT
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.V(A.Ek,v,r,r,r,20),A.ax,B.D(B.d("Marriage document session \xb7 "+s.bJj(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bfX,A.iK,r,r,1/0)}}
C.a6B.prototype={
mH(){var w,v,u,t=this
t.wk()
w=t.cx
v=t.c
w.bkS(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.pr(B.E(["/S",D.dTj,"/URI",new B.qU(B.UJ(w.as),A.ty,!0)],x.N,u),u))}}
C.a6C.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_B.prototype={
bsg(d,e,f,g,h,i,j,k,l,m){var w=B.eN([D.dRC],x.di)
this.w!==$&&B.aO()
this.w=w},
gcD3(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jC(w,new C.cbY(),B.a2(w).k("jC<cl.E,I>")).ft(0,new C.cbZ())},
azj(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.h0(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rP(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.j2(d.a,d.b))
s.m(0,"/Border",B.rP(D.bKg))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fR(t.gcD3()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pr(w,x.Y))}}
C.cc_.prototype={}
C.a0X.prototype={}
C.afR.prototype={}
C.aOa.prototype={
fO(d){var w,v,u,t,s,r,q=this,p=null
q.kO(d)
q.Kr(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.baQ(w)
u=x.N
t=x.Y
s=new C.cc_(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bsg(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pr(B.E(["/Type",D.dTh],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6B(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.au5.prototype={}
C.aPE.prototype={
fO(d){var w,v,u,t,s=this
s.kO(d)
w=s.b
if(w!=null){v=B.di()
u=s.a
v.dZ(u.a,u.b,0,1)
u=d.b
u.hR()
t=s.a
t.toString
u.JC(t)
u.QK(0)
u.of(0,v)
w.fO(d)
u.mK(0)}}}
var z=a.updateTypes(["aw<~>()","~(lr)","S(hT)","~()","S(ey)","S(nV)","S(lr)","~(hT)","S(ey,ey)","Io(X)","S(nl)","S(kX)","aw<S>()","I(I,hT)","a1<n,@>(hT)","ak<yB>()","n(nl)","S(a60)","n(lr)","n(vf)","S(Dv)","I(hT,hT)","n(ey)","r(ey)","cG(ey)","r(hn)","~(hn)","ey(u5,O,O,O,O,I{fx:n,key:n,rotation:O})","ey(n,O,I)","I(nV,nV)","S(yB)","S(n,ak<yB>)","a1<n,@>(nV)","nl()","WI(X)","ey(n,O,O,O,O,O{align:px,anim:hn,bullets:S,color:I?,delay:I,fx:n,key:n,style:Gg,weight:pQ})","ZW(X)","ey(n,O,O,O,O{anim:hn,delay:I,fx:n,key:n})","aw<~>(nV)","S(m3)","WG(X)","Zu(X)","Zt(X)","NL(X)","XR(X)","ey(u5,O,O,O,O,I,n,n{anim:hn,delay:I,rotation:O,stroke:I,strokeWidth:O})","ey(n,O,O,O,O,O,n,n,I)","ey(O,O,n,I{size:O})","r(qI,O,O)","kX()","nV(a1<@,@>)","~(tW)","Dv()","f6(ey)","r(iQ)","Xp(X)","~(Dm)","XK(X)","I(ey,ey)","ey(ey)","a1<n,@>(ey)","ey(a1<@,@>)","lr(lr)","a1<n,@>(lr)","lr(a1<@,@>)","S(jt)","jt()","n(hT)","~(ak<nV>)","Q(ak<hT>)","Q(hT)","ak<hT>(n?)","aaw(X,I)","~(S(ey,ey))","ab9(X)","acN(X,I)","x(lr,S)","TX(X)","abc(X)","U0(X)","~(m7)","hT(hT)","O(ey)","YZ(X)","YB(X)","hT()","ak<DP>()","aw<~>(ak<hT>)","r(br<I,hT>)","C(jt)","C(Dv)","aw<~>(hn,~())","r(ak<hn>,hn?,~(hn),x)","S(lN)","ak<jd<m7>>(X)","jd<m7>(m7)","hT(a1<@,@>)","Ua(X)","ey(n,O,O,O,O,O,I{align:px,style:Gg,weight:pQ})","Ub(X)","r(hT)","~(lI)","Hh(X,lr,r?)","I(a6C)","aw<ak<a1<n,@>>?>()","n(n)","aw<yz>({paper:n?,photo:dz?,request:n,template!l_})","aw<a5T>({doc!yz,history:ak<+(n,n)>,instruction!n,photo:dz?,template!l_})","ab6(X)"])
C.cyZ.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cz_.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:85}
C.cz0.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gahj(s):16;--w.c}w.b=A.o.dP(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lW(v,t)
w.b=v-A.o.dP(q,t)
w.a=t
return q},
$S:85}
C.cz1.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bKs.prototype={
$1(d){return J.eO(A.dD.gaN(d),d.byteOffset,d.byteLength)},
$S:1663}
C.fbG.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iA(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iA(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iA(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iA(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1664}
C.bUy.prototype={
$1(d){return B.a_(d,x.N,x.z)},
$S:26}
C.bUz.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:41}
C.bUB.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fr1.prototype={
$1(d){return new C.ZW(this.a,this.b,C.hOl(),null)},
$S:z+36}
C.eRZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eS2.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eS3.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eS4.prototype={
$0(){var w,v,u=this.a
u.r=!1
w=this.b
v=this.c.length
if(w===v){v=w===1?"":"s"
u.x="Saved "+w+" presentation"+v+" to the database."
u.y=!1
u.d.a7(0)
u.w=1}else if(w===0){u.x="Could not save. Check the connection and try again."
u.y=!0}else{u.x="Saved "+w+" of "+v+". Try the rest again."
u.y=!0}},
$S:0}
C.eS_.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eS0.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eS1.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eRU.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hs,w,w,w)
return B.eo(B.a([B.bK(!1,D.eXo,w,w,!0,w,w,new C.eRS(d),w,w),B.bK(!1,D.eWx,w,w,!0,w,w,new C.eRT(d),w,w)],x.p),w,w,D.Up,v,w,w,w,w,D.f9n,w)},
$S:20}
C.eRS.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eRT.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eRV.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eRW.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eS8.prototype={
$0(){var w=this.a
return w.n(new C.eS7(w,this.b))},
$S:0}
C.eS7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRY.prototype={
$0(){var w=this.a
return w.n(new C.eRX(w,this.b,this.c))},
$S:0}
C.eRX.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.eS5.prototype={
$0(){return this.a.a_1(this.b)},
$S:0}
C.eS6.prototype={
$0(){return this.a.Nt(0,this.b)},
$S:0}
C.eSb.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eSc.prototype={
$0(){var w=this.a
return w.n(new C.eSa(w,this.b))},
$S:0}
C.eSa.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eS9(),B.U(w).k("J<1,n>")))}},
$S:0}
C.eS9.prototype={
$1(d){return d.a},
$S:z+67}
C.eZb.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a_(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fQ5(w.b(t.h(0,"doc"))?B.a_(w.a(t.h(0,"doc")),v,u):A.cu)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.nV(s,v,u==null?new B.Q(Date.now(),0,!1):u)},
$S:z+50}
C.eZc.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fdT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcA()}if(q)v.m(0,s,t)}},
$S:z+68}
C.fdR.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fdS.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+29}
C.fqz.prototype={
$1(d){return d.ac()},
$S:z+32}
C.fbm.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.frn.prototype={
$1(d){return new C.WI(this.a,null)},
$S:z+34}
C.cAk.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cAm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cAp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAq.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cAo())},
$S:11}
C.cAo.prototype={
$0(){},
$S:0}
C.cAr.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_U(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cA(s)
p=q.bi(s,new C.cAn(r))
if(p<0)q.ck(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.afb(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:266}
C.cAn.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAs.prototype={
$1(d){},
$S:30}
C.cAl.prototype={
$1(d){return new C.WG(this.b,this.a.gcoi(),null)},
$S:z+40}
C.cAt.prototype={
$1(d){return D.ffr},
$S:z+43}
C.cAg.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.U9,A.r,1),t=x.p
return B.au(B.aD(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bjy,B.v(B.a([B.p(w,D.bvq,A.h,w,w,new B.o(A.aE.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.eVE,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eKh,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.C(A.p4,B.B(B.a([B.D(B.dV(D.f0V,new C.cAe(d),B.db(w,w,w,w,w,w,w,w,w,E.mv,w,w,A.cc,w,new B.b6(B.m(14),A.X),D.aQk,w,w,w,w)),1),A.ax,B.D(B.bL(D.f6l,new C.cAf(d),B.bk(A.bQ,w,w,w,w,w,A.cc,w,new B.b6(B.m(14),A.X),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.h,w,A.vO,new B.o(D.a8P,w,u,v,D.cGZ,w,A.n),w,w,w,K.VR,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
$S:1665}
C.cAe.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.cAf.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cAh.prototype={
$0(){return J.n2(this.a.d,new C.cAd(this.b))},
$S:0}
C.cAd.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAc.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.U9,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bAe,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajz,A.n),t,44,t,t,t,t,t,44),A.bd,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aLc,t,t,t),A.bA,D.f6h],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.d_D[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auY(u[1],u[2],u[3],new C.cAa(v,d),!1,t))}q.push(A.ar)
q.push(D.bdE)
q.push(A.ar)
q.push(new C.auY(A.e6,"Delete book","Remove it from this device",new C.cAb(d),!0,t))
return B.bq(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.h,t,t,new B.o(D.a8P,t,r,s,t,t,A.n),t,t,t,A.rI,E.Vu,t,t,t),!0,!1,A.aj,!0,!0)},
$S:34}
C.cAa.prototype={
$0(){var w=this.a.a
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.cAb.prototype={
$0(){B.a8(this.a,!1).M("delete")
return null},
$S:0}
C.cAj.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ab(0,A.G,A.x.j(0.45),A.aBp,12)],x.V)
return B.dP(B.et(A.A,e,B.p(w,B.bu(B.m(4),new B.a5(62,95.81818181818181,B.eZ(A.A,F.alJ(d),A.h,A.dq),w),A.ao),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cAi.prototype={
$0(){return this.a.bXx()},
$S:0}
C.cA9.prototype={
$0(){return this.a.aU2(0,this.b)},
$S:0}
C.cA8.prototype={
$0(){return this.a.C4(this.b)},
$S:0}
C.cA7.prototype={
$0(){return this.a.C4(this.b)},
$S:0}
C.cAu.prototype={
$2(d,e){var w=this.a
return w.bwB(J.q(w.d,e))},
$S:40}
C.czB.prototype={
$0(){var w=this.a
if(w.c!=null)w.zM()},
$S:0}
C.czA.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aWG("Page "+(v.length+1),"",""))},
$S:0}
C.czD.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.czL.prototype={
$0(){},
$S:0}
C.czM.prototype={
$1(d){var w=this.a,v=w.a,u=$.av()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.czE.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcs().aG(this.c)},
$S:0}
C.czC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.czG.prototype={
$0(){return this.a.OJ(this.b)},
$S:0}
C.czH.prototype={
$0(){return this.a.OJ(this.b)},
$S:0}
C.czI.prototype={
$0(){var w=this.a
w.n(new C.czF(this.b))
w.CT()},
$S:0}
C.czF.prototype={
$0(){return this.a.c=""},
$S:0}
C.czK.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.czJ(w,d))
w.CT()},
$S:z+51}
C.czJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.czR.prototype={
$2(d,e){if(d)this.a.zM()},
$S:114}
C.czN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zM(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.H(x.q).f.P(D.eyo)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.czO.prototype={
$0(){return this.a.aT2(this.b,-1)},
$S:0}
C.czP.prototype={
$0(){return this.a.aT2(this.b,1)},
$S:0}
C.czQ.prototype={
$0(){return this.a.bYL(0,this.b)},
$S:0}
C.fip.prototype={
$1(d){return C.fZU()},
$S:42}
C.fiq.prototype={
$1(d){return null},
$S:30}
C.f2x.prototype={
$1(d){return null},
$S:30}
C.fjp.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:271}
C.fjo.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:265}
C.fjv.prototype={
$1(d){var w=this.a
return C.fIH(d)===w||C.h3l(d)===w},
$S:z+4}
C.f1A.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:82}
C.c46.prototype={
$1(d){return d.length!==0},
$S:3}
C.fin.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fio.prototype={
$1(d){return C.fl7(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fdf.prototype={
$1(d){var w=null
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f1t,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.EZ,D.eX5,new C.fdd(d),B.bk(A.bT,w,w,w,A.x,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.uP,D.f2D,new C.fde(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vL,w,w,w,w))],x.p),A.ag,w,A.e,A.Q,0,A.p),w),!0,!1,A.aj,!0,!0)},
$S:34}
C.fdd.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fde.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fdg.prototype={
$1(d){var w=null
return B.eo(B.a([B.bK(!1,D.eTB,w,w,!0,w,w,new C.fdb(d),w,w),B.bL(D.f8q,new C.fdc(d),w)],x.p),w,w,w,D.fad,w,w,w,w,D.eTv,w)},
$S:20}
C.fdb.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.fdc.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dYE.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dYC.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dYD.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dYF.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dYG.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fju.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:82}
C.fjq.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Gh(A.A,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1666}
C.fjs.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eLr,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:177}
C.fjt.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hP,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hP,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b6,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1667}
C.fjr.prototype={
$2$female$size(d,e){var w=null,v=d?D.aam:this.a,u=B.H(A.hP,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.A,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a91,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1668}
C.fuN.prototype={
$1(d){return new C.ab6(this.a,this.b,null)},
$S:z+108}
C.dQ2.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.baW:A.Je,q=B.H(D.iY.j(0.25),A.r,1),p=B.au(B.p(t,t,A.h,t,t,new B.o(A.bT.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aij,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.iY.j(0.35),A.e9,10)],x.V),D.bIS,A.n),t,t,t,t,A.JW,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.VG,B.v(B.a([p,A.ay,B.B(B.a([o,A.bd,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iY,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eKK,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ih(!0,t,e,A.z,D.aIE,new C.dQ1(w,this.c),v,D.adk,t,A.ak,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.ml,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.dQ1.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aaw(w,new C.dQ0(this.b,w),null)},
$S:z+72}
C.dQ0.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fdj.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fdk.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f4B,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.EZ,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdh(d),B.bk(D.iY,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rn,new C.fdi(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vL,w,w,w,w))],x.p),A.ag,w,A.e,A.Q,0,A.p),w),!0,!1,A.aj,!0,!0)},
$S:34}
C.fdh.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fdi.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fdn.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fdo.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eUx,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.EZ,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdl(d),B.bk(D.iY,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rn,new C.fdm(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vL,w,w,w,w))],x.p),A.ag,w,A.e,A.Q,0,A.p),w),!0,!1,A.aj,!0,!0)},
$S:34}
C.fdl.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fdm.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fdr.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fds.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f_q,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.EZ,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdp(d),B.bk(D.iY,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rn,new C.fdq(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vL,w,w,w,w))],x.p),A.ag,w,A.e,A.Q,0,A.p),w),!0,!1,A.aj,!0,!0)},
$S:34}
C.fdp.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fdq.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fw1.prototype={
$1(d){return D.fiF},
$S:z+74}
C.e2E.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b3X:A.Je,s=B.H(A.au.j(0.25),A.r,1),r=B.au(B.p(v,v,A.h,v,v,new B.o(A.au.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bCs,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.bT.j(0.35),A.e9,10)],x.V),D.ajE,A.n),v,v,v,v,A.JW,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.VG,B.v(B.a([r,A.ay,B.B(B.a([q,A.bd,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.Jb,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eIl,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ih(!0,v,e,A.z,D.aIE,new C.e2D(this.b),19,D.adk,v,A.ak,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.ml,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.e2D.prototype={
$2(d,e){var w=D.Oh[e]
return new C.acN(w,new C.e2C(this.a,w),null)},
$S:z+75}
C.e2C.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.flb.prototype={
$0(){return B.fHK(C.hC3(this.a))},
$S:336}
C.fla.prototype={
$0(){var w=C.fIZ(this.a)
return"data:image/png;base64,"+A.cP.gcs().aG(w)},
$S:22}
C.f_H.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j3(d,e),new B.j3(w,e+v),new B.j3(d+f*14,e),new B.j3(w,e-v)],x.J)
B.a_R(this.a,C.fu(4291404327),v)},
$S:539}
C.fwc.prototype={
$1(d){return new C.TX(this.a,null)},
$S:z+77}
C.e5W.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5V())},
$S:28}
C.e5V.prototype={
$0(){},
$S:0}
C.e5X.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5U(w,d))},
$S:1670}
C.e5U.prototype={
$0(){return this.a.x=J.f3(A.dD.gaN(this.b))},
$S:0}
C.e5Y.prototype={
$1(d){},
$S:30}
C.e5y.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5u.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5F.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e5G.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.e0M)},
$S:0}
C.e5H.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5A.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.A("you",this.b))
w.f.bJ(0,A.c0)},
$S:0}
C.e5B.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.A("ai",v.a))},
$S:0}
C.e5C.prototype={
$0(){return this.a.ax.push(new B.A("ai",B.t(this.b)))},
$S:0}
C.e5D.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5E.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dS,A.i2)}},
$S:8}
C.e5z.prototype={
$0(){var w=this.a,v=w.z,u=C.flP(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cz1(C.flP(t))},
$S:0}
C.e5w.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e5x.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5N.prototype={
$0(){return B.a8(this.a,!1).nh()},
$S:0}
C.e5O.prototype={
$0(){var w=this.a
return w.n(new C.e5M(w))},
$S:0}
C.e5M.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e5P.prototype={
$0(){var w=this.a
return w.n(new C.e5L(w,this.b))},
$S:0}
C.e5L.prototype={
$0(){var w=this.b.b
this.a.e.saU(0,w)
return w},
$S:0}
C.e5Q.prototype={
$1(d){var w=this.a
return w.n(new C.e5K(w))},
$S:9}
C.e5K.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e5R.prototype={
$1(d){var w=this.a
return w.n(new C.e5J(w))},
$S:9}
C.e5J.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e5S.prototype={
$0(){var w=this.a
return w.n(new C.e5I(w,this.b))},
$S:0}
C.e5I.prototype={
$0(){var w=this.b
this.a.f.saU(0,w)
return w},
$S:0}
C.e5T.prototype={
$1(d){return this.a.XK()},
$S:2}
C.e5v.prototype={
$0(){return this.a.c0n(this.b)},
$S:0}
C.c7M.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cJ(w.h(0,d))):null},
$S:390}
C.c7K.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.c7L.prototype={
$1(d){return d.length!==0},
$S:3}
C.fkN.prototype={
bfH(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bKr(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cvL($.tv().jV(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mb(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfH(d,e)},
$S:1671}
C.fj4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fj6.prototype={
$1(d){var w=this.a.a
w=A.d.aF(A.d.dt(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:82}
C.fj5.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.io(t,t,t,t,B.dl(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pA,A.cm,t,A.en,A.cj)
v=this.a
w.xY(v.b)
u=w.b.a.c
return u.gbh(u)<=v.a},
$S:58}
C.f_i.prototype={
$1(d){var w=A.a.fm(d,B.ae("\\s+",!0,!1,!1,!1))
return new B.a4(w,new C.f_j(),B.U(w).k("a4<1>")).gJ(0)},
$S:235}
C.f_j.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_g.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:208}
C.f_h.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:208}
C.c7N.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gawO()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,w-(f===t?r:0)))
o=C.fIG(i,new B.F(!0,h,a6,k,a6,a6,q,A.cJ,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fFJ(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aF(n.gc8o(),"\n\n")
d=B.io(a6,a6,a6,a6,B.dl(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.abw(k,q,1.28),j),A.pA,A.cm,a6,A.en,A.cj)
d.xY(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbh(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fIG(i,new B.F(!0,h,a6,k,a6,a6,q,A.cJ,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fFJ(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.abw(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.N(v,0,v,0),B.p(a6,a6,A.h,B.aY(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bH(1,A.br,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.pA,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awN(s,j))
i.push(new B.a5(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:409}
C.c7O.prototype={
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
n=o.gawO()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aY(j.w)
d=B.a([new B.A(u,q),new B.A(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.A(r,p-(a0===s?m:0)))
l=C.fIG(f,new B.F(!0,e,a5,i,a5,a5,h,A.cJ,A.bi,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fFJ(g.length===0?B.a([a6],n):g,l))break}a1=o.abw(i,h,1.28)
a2=new C.c7P(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.H9,new B.a5(v,a5,a4.f,a5),A.H9,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.blO,B.p(a5,a5,A.h,B.aY(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bH(1,A.br,new B.w(l[2+a3],a5,a1,a5,A.pA,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awN(r,g))
f.push(new B.a5(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a5(a5,q,v,a5),A.ab,B.D(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:145}
C.c7P.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pA,w,w),w)},
$S:1672}
C.fwh.prototype={
$1(d){return new C.U0(this.a,this.b,null)},
$S:z+79}
C.e7e.prototype={
$1(d){return d.lT()},
$S:1673}
C.e7f.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e7d(w,d))},
$S:1674}
C.e7d.prototype={
$0(){var w=this.b
return this.a.d=w.gfd(w)},
$S:0}
C.e71.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e72.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e78.prototype={
$0(){return B.a8(this.a,!1).eD()},
$S:0}
C.e79.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.H(A.by,A.r,2.5)
return B.aH(w,B.p(w,B.b2(w,w,w,new C.b8t(u,v.gatY(),w),A.f9),A.h,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e76(v),new C.e77(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ad)},
$S:33}
C.e76.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:305}
C.e77.prototype={
$1(d){var w=this.a
w.n(new C.e73(w,d,this.b,this.c))},
$S:237}
C.e73.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gatY()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e7a.prototype={
$1(d){var w=this.a
return w.n(new C.e75(w,this.b))},
$S:9}
C.e75.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7b.prototype={
$1(d){var w=this.a
return w.n(new C.e74(w,d))},
$S:6}
C.e74.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7c.prototype={
$0(){return B.a8(this.b,!1).M(this.a.a.c)},
$S:0}
C.fwx.prototype={
$1(d){return D.fls},
$S:z+83}
C.eE3.prototype={
$1(d){return this.a.Ww()},
$S:8}
C.eCW.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcs().aG(v)},
$S:0}
C.eDj.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eDt.prototype={
$1(d){return d>=this.a.length},
$S:58}
C.eCF.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eCG.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eCD.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eCE.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eDc.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eDd(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jA(B.qX(p>0.2?C.fAz(q,B.a37(p,p,A.w)):q),A.q,u)],x.p)
w=s.bf
if(w>0.02){v=B.a37(12,12,A.w)
p.push(B.jA(B.d8(B.qX(C.fAz(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b0
if(r!=null&&s.aY>0)p.push(B.ec(u,B.aY(r).j(s.aY),!0))
r=s.b8
if(r!=null&&s.bH>0){r=B.aY(r).j(s.bH)
w=s.b8
w.toString
p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(D.aOF,1.15,A.w,u,0,B.a([r,B.aY(w).j(0)],x.O),u,u),A.n),A.bb))}r=s.aA
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(D.aOq,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bb))
r=s.aL
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.a3(A.aY,A.b1,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aL)],x.O),D.cFG,u),A.n),A.bb))
if(s.aC>0){r=s.k1
p.push(B.an(u,B.bT(u,new B.o(u,u,u,u,u,new B.a3(A.aY,A.b1,A.w,B.a([A.x.j(0),A.x.j(s.aC),A.x.j(s.aC),A.x.j(0)],x.O),D.cPM,u),A.n),A.bb),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.x.j(r),!0))
r=s.b4
if(r>0)p.push(B.bT(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cN5,u),A.n),A.bb))
s=s.aw
if(s>0)p.push(B.b2(u,u,u,new C.bc_(s,u),A.at))
return new B.am(A.W,u,A.b_,A.q,p,u)},
$S:61}
C.eDd.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fF(r.b,A.A,q,q,A.cl,A.bP,!0,q,!1,q,q),o=r.a,n=o.aSF(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bg
v=o.aQ
u=v-1
t=o.bP
s=o.cQ?-1:1
return B.dP(B.e5(A.A,B.et(A.A,l,B.fp(A.A,new B.FO(new B.A8(q,q,n,A.z2),p,q),q,B.v3(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:664}
C.eDp.prototype={
$0(){return this.a.n(new C.eDo(this.b,this.c))},
$S:0}
C.eDo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDq.prototype={
$1(d){return this.a.n(new C.eDn(this.b,d))},
$S:6}
C.eDn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDs.prototype={
$0(){return this.a.n(new C.eDr(this.b,this.c))},
$S:0}
C.eDr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCv.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eCw.prototype={
$1(d){var w=this.a
return w.n(w.gcpG())},
$S:2}
C.eCx.prototype={
$1(d){return this.a.n(new C.eCu())},
$S:2}
C.eCu.prototype={
$0(){},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
return w.n(new C.eCt(w,this.b))},
$S:0}
C.eCt.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eCA.prototype={
$2(d,e){return A.ax},
$S:36}
C.eCz.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aY(v.e),B.aY(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.dj(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aY(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b9,new B.o(w,w,q,s,w,new B.a3(A.aY,A.b1,A.w,r,w,w),A.n),A.hS,w,94,w,w,w,w,70)
return B.aH(w,new B.a5(70,w,B.v(B.a([r,A.h1,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eCs(u,v),w,w,w,w,w,w,!1,A.ad)},
$S:75}
C.eCs.prototype={
$0(){var w=this.a
return w.n(new C.eCp(w,this.b))},
$S:0}
C.eCp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eCB.prototype={
$1(d){var w=this.a
return w.n(new C.eCr(w,d))},
$S:9}
C.eCr.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eCC.prototype={
$1(d){var w=this.a
return w.n(new C.eCq(w,d))},
$S:9}
C.eCq.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eDT.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:58}
C.eE_.prototype={
$1(d){var w=this.a
return w.n(new C.eE0(w,d))},
$S:27}
C.eE0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ef(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eE1.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:259}
C.eDU.prototype={
$0(){var w=this.a
return w.n(new C.eDS(w,this.b))},
$S:0}
C.eDS.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eDV.prototype={
$0(){var w=this.a
return w.n(new C.eDR(w,this.b))},
$S:0}
C.eDR.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eDW.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eDQ(v,w.b,w.c,w.d))},
$S:0}
C.eDQ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eDX.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqN(v))},
$S:0}
C.eDY.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eDZ.prototype={
$0(){var w=this.a
return w.n(new C.eDP(w))},
$S:0}
C.eDP.prototype={
$0(){var w=this.a.db
return A.d.hi(w,0,w.length,0)},
$S:0}
C.eDC.prototype={
$1(d){return d.a===this.a.dy},
$S:229}
C.eDD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arz[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b1(9,9)
m=B.a([B.aY(v.w.e),B.aY(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.au1(new B.nK(new B.bv(n,n,n,n),A.ao,new B.kB(new B.o(j,j,j,j,j,new B.a3(A.a3,A.a7,A.w,m,j,j),A.n),A.bb,new C.aWQ(l,B.aY(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eDB(r,v),2,i))}return B.c8(A.bJ,h,A.bx,7,7)},
$S:159}
C.eDB.prototype={
$0(){var w=this.b
return w.n(new C.eDw(this.a,w))},
$S:0}
C.eDw.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eDE.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:205}
C.eDH.prototype={
$0(){var w=this.a
return w.n(new C.eDA(w))},
$S:0}
C.eDA.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eDI.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eDJ.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eDK.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eDL.prototype={
$0(){var w=this.a
return w.n(new C.eDz(w))},
$S:0}
C.eDz.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eDM.prototype={
$0(){var w=this.a
return w.n(new C.eDy(w))},
$S:0}
C.eDy.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eDN.prototype={
$0(){var w=this.b
return w.n(new C.eDx(this.a,w))},
$S:0}
C.eDx.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDO.prototype={
$1(d){return this.a.fx=d},
$S:205}
C.eDF.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eDG.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eDg.prototype={
$0(){var w=this.a
return w.n(new C.eDf(w))},
$S:0}
C.eDf.prototype={
$0(){var w=this.a
w.p4=null
w.aZl()},
$S:0}
C.eDh.prototype={
$0(){var w=this.a
return w.n(new C.eDe(w,this.b))},
$S:0}
C.eDe.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eDi.prototype={
$0(){var w=this.a
return w.n(w.gcgB())},
$S:0}
C.eD8.prototype={
$0(){var w=this.a
return w.n(new C.eD7(w))},
$S:0}
C.eD7.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eD9.prototype={
$0(){var w=this.a
return w.n(new C.eD6(w))},
$S:0}
C.eD6.prototype={
$0(){var w=this.a
w.aC=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eDa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cNr[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b1(9,9)
m.push(v.au1(new B.nK(new B.bv(p,p,p,p),A.ao,new B.a5(1/0,1/0,new B.FO(new B.A8(o,o,v.aSF(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.z2),B.fF(u,A.A,140,o,A.cl,A.bP,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eD5(v,s),3,n))}return B.c8(A.bJ,m,A.bx,10,8)},
$S:159}
C.eD5.prototype={
$0(){var w=this.a
return w.n(new C.eD4(w,this.b))},
$S:0}
C.eD4.prototype={
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
C.eCN.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eCO.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eCP.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eCQ.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eCR.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eCS.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eCT.prototype={
$1(d){return this.a.b4=d},
$S:6}
C.eCU.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eCV.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.eC8.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eC9.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eCa.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eCb.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eCc.prototype={
$0(){var w=this.a
return w.n(new C.eC7(w))},
$S:0}
C.eC7.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eCd.prototype={
$1(d){return this.a.b0=d},
$S:205}
C.eCe.prototype={
$1(d){return this.a.aY=d},
$S:6}
C.eCH.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eCI.prototype={
$1(d){return this.a.bf=d},
$S:6}
C.eCJ.prototype={
$1(d){return this.a.aw=d},
$S:6}
C.eCK.prototype={
$1(d){return this.a.b8=d},
$S:205}
C.eCL.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.eCi.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.eCj.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.eCk.prototype={
$1(d){return this.a.bP=d},
$S:6}
C.eCl.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eCm.prototype={
$0(){var w=this.a
return w.n(new C.eCh(w))},
$S:0}
C.eCh.prototype={
$0(){var w=this.a
return w.c4=A.k.G(w.c4+90+180,360)-180},
$S:0}
C.eCn.prototype={
$0(){var w=this.a
return w.n(new C.eCg(w))},
$S:0}
C.eCg.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eCo.prototype={
$0(){var w=this.a
return w.n(new C.eCf(w))},
$S:0}
C.eCf.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eDb.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hQV(v,w.p4)},
$S:0}
C.eD3.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bbc:B.fF(v,A.A,w,w,A.cl,A.bP,!1,w,!1,w,w)
return C.fjc(d.length===0?"rounded":d,u,e)},
$S:128}
C.eD_.prototype={
$0(){var w=this.a
return w.n(new C.eCZ(w))},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eD0.prototype={
$0(){var w=this.b
return w.n(new C.eCY(this.a,w))},
$S:0}
C.eCY.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eD1.prototype={
$0(){var w=this.b
return w.n(new C.eCX(this.a,w))},
$S:0}
C.eCX.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eD2.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eDm.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ab(-4,A.G,A.b3.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.cai(),n.r))
l.push(new C.Hh(n.cmR(),!1,!1,t))
o=B.bX(0,B.bu(o,new B.en(new B.am(A.W,t,A.b_,A.q,l,t),n.f),A.ao),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.W,t,A.a9,A.q,B.a([o,B.an(t,B.aH(A.c5,B.bT(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bb),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eDl(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ad),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:203}
C.eDl.prototype={
$1(d){var w=this.a
return w.n(new C.eDk(w,d,this.b,this.c))},
$S:18}
C.eDk.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eDv.prototype={
$0(){var w=this.a
return w.n(new C.eDu(w,this.b))},
$S:0}
C.eDu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eCM.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).nh()},
$S:0}
C.eE2.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a5(Math.min(s*0.4,460),t,B.v(B.a([w.aV5(),B.D(B.au(w.aXZ(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aM7(),1),w.aIn()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aV5(),new B.C(A.hC,B.au(s.aXZ(u),t,t,t),t),B.D(s.aM7(),1),s.aIn()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:617}
C.fgs.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ei(k,!1,j,A.az,"",4280640491,i,l,m,"",h,C.bwI(),null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.cd,D.cN,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bi,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,A.O)},
$S:z+98}
C.fgr.prototype={
$3(d,e,f){var w=this,v=C.bwI(),u=w.b?A.I:A.cq,t=w.c?A.cx:A.bi
return C.ei(w.d,!1,f,A.az,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bc,4280172719,2,d,0,w.f,w.e,D.cd,D.cN,0.82,0.09,w.a)},
$S:z+28}
C.c98.prototype={
$1(d){return B.t(d)},
$S:17}
C.fo8.prototype={
$0(){return this.a},
$S:z+15}
C.f61.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.f62.prototype={
$2(d,e){return J.cj(e)},
$S:z+31}
C.foa.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fod.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.foe.prototype={
$0(){return A.d.gL(D.uY)},
$S:z+33}
C.fo6.prototype={
$1(d){return d.a},
$S:z+16}
C.fo9.prototype={
$1(d){return d.a},
$S:z+16}
C.fm6.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fm7.prototype={
$1(d){return d.length!==0},
$S:3}
C.fm8.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fgw.prototype={
$0(){return C.cy()},
$S:22}
C.fgz.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cd,s=u?n:0
return C.ei(j,l,v,A.az,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bc,4280172719,2,d,s,0,"",t,D.cN,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,null,0,"","",A.bi,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,null,0,"",j,A.bi,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,null,0,j,k,A.bi,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bi,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bi,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.db,!1,k,l,"",m,A.bi,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,null,0,"",k,A.bi,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,j,k,"",l,A.bi,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,k,0,l,m,A.bi,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,k,l,m,"",n,A.bi,A.a4)},
$S:z+35}
C.fgy.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ei(A.bf,!1,4279310375,A.az,"",i,24,A.bi,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cd,D.eV,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fgx.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cd,t=v?j:0
return C.ei(A.bf,!1,4279310375,A.az,"",4280640491,24,A.bi,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.bc,4280172719,2,"",t,0,"",u,D.l5,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pq,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fgv.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fiY.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h_X.ce(0,A.a.i(s.w).toLowerCase(),new C.fiW(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ce(0,s.r,new C.fiX(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.br(t.e,new B.bkP(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1677}
C.fiW.prototype={
$0(){return F.aKN(this.a.w)},
$S:183}
C.fiX.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bvC("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hs(2,w,A.c1,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:183}
C.f_d.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f_e.prototype={
$1(d){return d.a},
$S:z+18}
C.f_f.prototype={
$1(d){return d.b},
$S:z+19}
C.fwJ.prototype={
$1(d){return D.flQ},
$S:z+41}
C.eJY.prototype={
$0(){return this.a.x=C.hu0(this.b,this.c.b)},
$S:0}
C.eJZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eJW.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:440}
C.eJX.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:440}
C.eJV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c2(A.aF,null,new C.eJQ(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.GU,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aX(s,7)
if(r.length===0){n.n(new C.eJR(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h5D(o,m.czP(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eJS(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJQ.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eJU(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aXo,A.h,p,p,D.aSJ,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.AB:D.AG,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fjc(v,i.aZW(h),u),p)))}t=B.lj(1,m,4,10,10,p,A.dL,!0)
if(!l)return B.bq(!0,new B.C(A6.DR,t,p),!0,!1,A.aj,!0,!0)
s=new C.eJT(i,d)
m=B.aG(d,A.bR,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Fh[e]
l.push(s.$2(r.a,r.b))}return B.bq(!0,new B.d2(new B.aX(0,1/0,0,m.a.b*0.85),B.ci(B.v(B.a([D.eYZ,A.T,t,A.dW,D.eoZ,A.av,D.f7P,A.T,B.lj(1.15,l,3,10,10,p,A.dL,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A6.DR,p,p,A.ak),p),!0,!1,A.aj,!0,!0)},
$S:34}
C.eJU.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b3.j(0.22):A.c.j(0.04),s=v?A.bC:A.dw
return B.aH(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hn,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eJP(this.b,d),w,w,w,w,w,w,!1,A.ad)},
$S:1678}
C.eJP.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eJT.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bH:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bu(w,d.length===0?B.p(v,D.aiP,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.LR(u.En(d),!0,!1,v),!0,v),A.ao),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aH(v,B.v(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bH:A.af,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eJO(this.b,d),v,v,v,v,v,v,!1,A.ad)},
$S:128}
C.eJO.prototype={
$0(){B.a8(this.a,!1).M("finale:"+this.b)
return null},
$S:0}
C.eJR.prototype={
$0(){var w=this.a
return w.w=w.w.En("")},
$S:0}
C.eJS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eJE.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eJF.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eJH.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eJI.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eJJ.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eJK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJG(w,d))},
$S:2}
C.eJG.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eJL.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eKb.prototype={
$0(){return this.a.f.fu()},
$S:0}
C.eKc.prototype={
$0(){var w=this.a
return w.n(new C.eKa(w))},
$S:0}
C.eKa.prototype={
$0(){return this.a.e=null},
$S:0}
C.eKd.prototype={
$0(){var w=this.a
return w.n(new C.eK9(w))},
$S:0}
C.eK9.prototype={
$0(){return this.a.x=null},
$S:0}
C.eKf.prototype={
$1(d){var w=this.a
return w.n(new C.eK8(w,d))},
$S:32}
C.eK8.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eKg.prototype={
$1(d){var w=this.a
return w.n(new C.eK7(w,d))},
$S:32}
C.eK7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eKh.prototype={
$0(){var w=this.a
return w.n(new C.eK6(w))},
$S:0}
C.eK6.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eKi.prototype={
$1(d){var w=this.a
return w.n(new C.eK5(w,d))},
$S:32}
C.eK5.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eKj.prototype={
$1(d){var w=this.a
return w.n(new C.eK4(w,d))},
$S:32}
C.eK4.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eKk.prototype={
$0(){var w=this.a
return w.n(new C.eK3(w))},
$S:0}
C.eK3.prototype={
$0(){var w=this.a
return w.w=w.w.En("")},
$S:0}
C.eKl.prototype={
$0(){var w=this.a
return w.n(new C.eK2(w,this.b))},
$S:0}
C.eK2.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eKm.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bI1(D.a_p[v]),null))
return B.c8(A.bJ,t,A.bx,8,8)},
$S:159}
C.eKe.prototype={
$1(d){var w=this.a
return w.n(new C.eK1(w,d))},
$S:9}
C.eK1.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJM.prototype={
$0(){var w=this.a
return w.n(new C.eJN(w,this.b,this.c))},
$S:0}
C.eJN.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eK0.prototype={
$0(){var w=this.a
return w.n(new C.eK_(w,this.b))},
$S:0}
C.eK_.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fwI.prototype={
$1(d){return new C.Zt(this.a,this.b,null)},
$S:z+42}
C.eJx.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eJy.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eJz.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAU?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eJA.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eJB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJw(w,d))},
$S:2}
C.eJw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJC.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eJD.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.am(w,0,w.length-1)
this.a.d.bJ(0,new B.bc(w,B.h2(A.bs,w.length),A.aM))},
$S:0}
C.f5h.prototype={
$1(d){return d.a===this.a},
$S:229}
C.e23.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gau2(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cA7:D.cPx
t=D.wg.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.wg.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bX(0,B.b2(q,q,q,new C.bec(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bX(0,B.bKI(B.et(A.A,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a3(A.a3,A.a7,A.w,B.a([A.K,D.b2w.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.W,q,A.a9,A.q,B.a([n,o,B.au(B.v(B.a([B.V(p.a.c?A.el:A.lv,D.wg,q,q,q,20),A.av,B.eZ(A.A,B.nq(A.jc,D.eT2,new C.e22()),A.h,A.eb)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.an(q,B.p(q,D.ePT,A.h,q,q,new B.o(D.wg,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adZ,q,q,q),q,q,q,4,4,q)],r),q),A.ao),A.h,q,q,new B.o(q,q,t,w,v,new B.a3(A.aw,A.aC,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.e22.prototype={
$1(d){return D.bH3.au(0,d)},
$S:66}
C.fof.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fog.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:229}
C.foh.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1679}
C.foi.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:14}
C.fob.prototype={
$1(d){return d.a},
$S:z+18}
C.foc.prototype={
$1(d){return d.b},
$S:z+19}
C.fvU.prototype={
$1(d){return new C.XR(this.a,this.b,null)},
$S:z+44}
C.dbp.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dbq.prototype={
$1(d){return d.a===this.a.gafI()},
$S:z+10}
C.dbr.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dbu.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.dbv.prototype={
$0(){var w=this.a
return w.n(new C.dbt(w,this.b))},
$S:0}
C.dbt.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dbw.prototype={
$1(d){var w=this.a
return w.n(new C.dbs(w,d))},
$S:9}
C.dbs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e21.prototype={
$1$2(d,e,f){var w=B.bj(d,!0,f)
A.d.fw(w,this.a)
return B.df(w,0,B.dK(e,"count",x.S),B.U(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1680}
C.eWL.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ei(A.bf,!1,4279310375,A.az,"",i,24,A.bi,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eV,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cd,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eWN.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ei(A.L,!1,this.b.d,A.az,"",4280640491,i,A.bi,A.cJ,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bc,4280172719,2,d,l,0,"",D.mc,D.cN,g,e,f)},
$S:z+46}
C.eWM.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vH(0,"twinkle")
w=t===D.bc?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mc,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eWK.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fhD.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fhE.prototype={
$0(){return A.d.gL(D.Fq)},
$S:z+49}
C.fhF.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eYK.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fnI.prototype={
$1(d){var w=2450411,v=4281908728
C.dr(d,C.ds(4280171146,1,0,D.bc,w,0,0.52,0,0))
C.dr(d,C.ds(v,1,0,D.bc,w,0,0.04,0.48,0))
C.dr(d,C.ds(4294047225,0.38,0,D.bc,w,0,0.48,0.52,0.62))
C.dr(d,C.ds(v,0.006,0,D.fk,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnJ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dr(d,C.ds(4280172719,0.8,0,D.bc,w,0,0.36,0.58,0.1))
C.dr(d,C.ds(v,0.64,0,D.bc,w,0,0.28,0.64,0.18))
C.dr(d,C.ds(4282090230,0.44,0,D.bc,w,0,0.2,0.7,0.28))
C.dr(d,C.ds(v,0.006,0,D.fk,v,3,0.22,0.08,0.12))
C.dr(d,C.ds(u,0.004,0,D.fk,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fnK.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(4279080072,0.11,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(4279310375,0.11,0,D.bc,w,0,1,0,0.89))
C.dr(d,C.ds(856528008,0.72,0,D.jq,w,0,0.28,0.72,0.14))
C.dr(d,C.ds(1426953352,0.2,0,D.jq,w,0,0.2,0.78,0.22))
C.dr(d,C.ds(v,0.004,0,D.fk,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fnV.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4279203438,0.55,0,D.jq,w,0,0.5,0.55,-0.05))
C.dr(d,C.ds(4280171146,0.5,0,D.jq,w,0,0.45,0.62,0.35))
C.dr(d,C.ds(4280640491,0.4,0.3,D.jp,w,0,0.35,0.68,0.55))
C.dr(d,C.ds(571438702,0.12,0,D.bc,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fo_.prototype={
$1(d){var w=4280472558
C.dr(d,C.ds(4279310375,0.75,-0.4,D.jp,2450411,0,0.75,-0.15,0.35))
C.dr(d,C.ds(w,0.55,0,D.bc,2450411,0,0.06,0.42,0.38))
C.dr(d,C.ds(w,0.006,0,D.fk,w,3,0.35,0.08,0.08))
C.dr(d,C.ds(2282478,0.12,0,D.bc,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fo0.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3423541034,0.48,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(v,0.12,-0.08,D.jq,w,0,1.1,-0.05,0.38))
C.dr(d,C.ds(858088427,0.35,0,D.bc,w,0,0.42,0.55,0.05))
C.dr(d,C.ds(v,0.006,0,D.fk,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fo1.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.czd[w]
u=Date.now()
t=$.iS
$.iS=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eV,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bi,A.az,4279310375,A.bf,null,D.bc,v,4294967295,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IW
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fk,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fo2.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lT,A.dB,w/3).l()
u=Date.now()
t=$.iS
$.iS=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eV,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bi,A.az,4279310375,A.bf,null,D.Bh,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IW
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fk,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fo3.prototype={
$1(d){var w=4294967295
C.dr(d,C.ds(4280640491,1,0,D.bc,2450411,0,0.42,0,0))
C.dr(d,C.ds(4280110808,1.1,1.57,D.jp,2450411,0,0.18,0.35,-0.05))
C.dr(d,C.ds(w,0.006,0,D.fk,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fo4.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dr(d,C.ds(w,0.1,0,D.bc,v,0,1,0,0))
C.dr(d,C.ds(u,0.012,0,D.bc,v,0,1,0,0.1))
C.dr(d,C.ds(u,0.006,0,D.fk,u,3,0.42,0.06,0.14))
C.dr(d,C.ds(403446057,0.68,0,D.jq,v,0,0.22,0.72,0.18))
C.dr(d,C.ds(w,0.1,0,D.bc,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fo5.prototype={
$1(d){var w=4278630100
C.dr(d,C.ds(4279310375,1.2,0.15,D.jq,2450411,0,0.55,-0.2,-0.1))
C.dr(d,C.ds(w,1.1,0.15,D.bc,2450411,0,0.08,0.15,-0.05))
C.dr(d,C.ds(1120295,0.18,0,D.bc,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnL.prototype={
$1(d){var w=4292617766
C.dr(d,C.ds(4282714634,0.65,-0.2,D.jp,2450411,0,0.65,-0.1,0.45))
C.dr(d,C.ds(w,0.5,-0.15,D.jp,2450411,0,0.5,0.05,0.55))
C.dr(d,C.ds(w,0.006,0,D.fk,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fnM.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4278413729,0.35,3.14,D.jp,w,0,0.45,-0.05,0.7))
C.dr(d,C.ds(4278355143,0.3,3.14,D.jp,w,0,0.4,0.25,0.75))
C.dr(d,C.ds(4279150057,0.32,3.14,D.jp,w,0,0.5,0.55,0.72))
C.dr(d,C.ds(863884284,0.22,0,D.eF,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fnN.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dr(d,C.ds(w,0.14,0,D.bc,v,0,0.14,0.02,0.02))
C.dr(d,C.ds(2282478,0.14,0,D.bc,u,3,0.14,0.84,0.02))
C.dr(d,C.ds(w,0.28,0,D.jq,v,0,0.35,-0.08,0.78))
C.dr(d,C.ds(u,0.22,0.5,D.jp,v,0,0.3,0.72,0.78))
C.dr(d,C.ds(w,0.006,0,D.fk,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fnO.prototype={
$1(d){var w=4293571336,v=1156231944
C.dr(d,C.ds(1841431,0.92,0,D.bc,w,3,0.92,0.04,0.04))
C.dr(d,C.ds(v,0.15,0,D.jp,2450411,0,0.15,0.02,0.02))
C.dr(d,C.ds(v,0.15,3.14,D.jp,2450411,0,0.15,0.83,0.83))
C.dr(d,C.ds(w,0.004,0,D.fk,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fnP.prototype={
$1(d){var w=4279080072,v=2450411
C.dr(d,C.ds(w,0.14,0,D.kK,v,0,0.14,0.68,0.18))
C.dr(d,C.ds(4279548070,0.14,0,D.kK,v,0,0.14,0.78,0.28))
C.dr(d,C.ds(4281193663,0.14,0,D.kK,v,0,0.14,0.68,0.38))
C.dr(d,C.ds(4284410580,0.14,0,D.kK,v,0,0.14,0.78,0.48))
C.dr(d,C.ds(4279203438,0.14,0,D.kK,v,0,0.14,0.68,0.58))
C.dr(d,C.ds(w,0.006,0,D.fk,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fnQ.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3708753706,0.42,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(v,0.06,-0.05,D.jq,w,0,1,0,0.38))
C.dr(d,C.ds(859356664,0.25,0,D.eF,w,0,0.25,0.7,0.08))
C.dr(d,C.ds(v,0.006,0,D.fk,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fnR.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lT,A.dB,w/3).l()
u=Date.now()
t=$.iS
$.iS=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eV,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bi,A.az,4279310375,A.bf,null,D.Bh,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IW
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(4280172719,0.08,0,D.bc,2450411,0,1,0,0))
C.dr(d,C.ds(s,0.006,0,D.fk,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fnS.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iS
$.iS=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eV,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bi,A.az,s,A.bf,null,D.fk,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IW
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(s,0.75,0,D.bc,2450411,0,0.22,0.72,0.1))
C.dr(d,C.ds(872415231,0.16,0,D.bc,2450411,0,0.16,0.75,0.15))
C.dr(d,C.ds(s,0.006,0,D.fk,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnT.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dr(d,C.ds(4674921,0.9,0,D.bc,4287931320,2,0.9,0.05,0.05))
C.dr(d,C.ds(w,0.08,0,D.bc,v,0,0.08,0.03,0.03))
C.dr(d,C.ds(u,0.08,0,D.bc,v,0,0.08,0.89,0.03))
C.dr(d,C.ds(u,0.08,0,D.bc,v,0,0.08,0.03,0.89))
C.dr(d,C.ds(w,0.08,0,D.bc,v,0,0.08,0.89,0.89))
C.dr(d,C.ds(w,0.004,0,D.fk,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fnU.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iS
$.iS=t+1
t=new C.ey("design_"+(""+1000*u+"_"+t),D.eV,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bi,A.az,r,A.bf,null,D.bc,4294967295,4280640491,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IW
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dv,A.cC,w/2).l()
t=Date.now()
s=$.iS
$.iS=s+1
u=new C.ey("design_"+(""+1000*t+"_"+s),D.eV,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bi,A.az,r,A.bf,null,D.bc,u,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IW
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(4280171146,1,0,D.bc,q,0,0.48,0,0))
C.dr(d,C.ds(4280172719,1.1,1.57,D.jp,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fnW.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(870995980,0.55,0.45,D.jq,w,0,0.55,-0.12,-0.08))
C.dr(d,C.ds(856996006,0.45,0.45,D.jq,w,0,0.45,0.62,-0.05))
C.dr(d,C.ds(16777215,0.38,0.45,D.jq,4293548044,5,0.38,0.52,0.12))
C.dr(d,C.ds(585783308,0.3,0.45,D.jq,w,0,0.3,0.56,0.16))
C.dr(d,C.ds(4279548070,0.06,0,D.bc,w,0,0.16,0.38,0.04))
C.dr(d,C.ds(1156208652,0.28,0,D.eF,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fnX.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dr(d,C.ds(w,1,0,D.bc,v,0,0.07,0,0))
C.dr(d,C.ds(u,0.1,0,D.bc,t,1,0.46,0.48,0.14))
C.dr(d,C.ds(u,0.1,0,D.bc,t,1,0.46,0.48,0.28))
C.dr(d,C.ds(u,0.1,0,D.bc,t,1,0.46,0.48,0.42))
C.dr(d,C.ds(s,0.08,0,D.eF,v,0,0.08,0.5,0.16))
C.dr(d,C.ds(w,0.08,0,D.eF,v,0,0.08,0.5,0.3))
C.dr(d,C.ds(4279548070,0.08,0,D.eF,v,0,0.08,0.5,0.44))
C.dr(d,C.ds(16777215,0.32,0.45,D.jq,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fnY.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dr(d,C.ds(4294047225,0.08,0,D.bc,t,2,0.1,0.02,0.06))
C.dr(d,C.ds(s,0.42,0,D.bc,2450411,0,0.36,0.58,0.18))
C.dr(d,C.ds(872415231,0.12,0,D.bc,2450411,0,0.28,0.62,0.24))
C.dr(d,C.ds(16777215,0.28,0,D.eF,s,4,0.32,0,0.72))
C.dr(d,C.ds(r,0.006,0,D.fk,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iS
$.iS=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eV,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bi,A.az,4279310375,A.bf,null,D.eF,16777215,t,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IW
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fnZ.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(3423541034,0.55,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(4009754623,0.56,0.45,D.jq,w,0,0.56,0.22,0.18))
C.dr(d,C.ds(3439329279,0.44,0.45,D.jq,w,0,0.44,0.28,0.24))
C.dr(d,C.ds(v,0.07,0,D.bc,w,0,0.22,0.34,0.62))
C.dr(d,C.ds(v,1,0,D.bc,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fft.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.ffu.prototype={
$0(){return A.d.gL($.bAg())},
$S:z+52}
C.f53.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.f52.prototype={
$1(d){return C.hB0(d,this.a,this.b)},
$S:z+53}
C.foo.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.v3(1.0375,1.01875,1)
return new B.fI(v,u,new C.aPE(B.hr2(A.tX,C.hB3(w.c,w.d,v,u),t)))},
$S:441}
C.dLN.prototype={
$1(d){var w=d.a/1e6
this.a.d.sq(0,w)
return w},
$S:8}
C.dLM.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bT(w,new B.o(w,w,w,w,w,new B.bR(A.I5,1.2,A.w,w,0,u.d,w,w),A.n),A.bb),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jA(new B.am(A.W,w,A.b_,A.q,B.a([t,new B.en(B.b2(w,w,w,new C.bb5(u.a,r,q,r),A.at),w),B.au(new B.k3(r,new C.dLL(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:436}
C.dLL.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.eE.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hO(B.fF(i,A.A,r,r,A.cl,A.bP,!0,r,!1,r,r),A.ao),A.h,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.w,t,r,new B.mr(e*0.8)),A.a6),r,w,r,r,new B.N(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bnr(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cK(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d8(B.dP(B.v(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a3(A.a3,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaGV(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.d8(B.e5(A.A,new B.C(new B.N(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eIL.prototype={
$1(d){var w=this.b
return new B.a3(A.aw,A.aC,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).au(0,d)},
$S:66}
C.c3I.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bH:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.hy.j(0.4),A.J,14)],x.V):v
w=B.dj(v,B.bu(B.m(12),d,A.ao),v,v,A.b9,new B.o(v,v,t,u,w,v,A.n),A.eK,v,72,v,v,v,v,v)
return B.aH(v,new B.a5(112,v,B.v(B.a([w,A.h1,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bH:A.af,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ad)},
$S:1681}
C.c3J.prototype={
$0(){var w=this.a
return w.d.$1(w.c.En(""))},
$S:0}
C.c3K.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.LR(v.En(u),!0,!1,null),!0,null),d.b,new C.c3L(w,this.c,d),v.a===u)},
$S:z+54}
C.c3L.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h5D(u.b,t.c.En(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fux.prototype={
$1(d){return new C.Xp(this.a,null)},
$S:z+55}
C.d0U.prototype={
$0(){var w=this.a
w.d=w.guO().b6D("data:"+this.b+";base64,"+A.cP.gcs().aG(this.c));++w.r},
$S:0}
C.d0Z.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.d1_.prototype={
$0(){var w=this.a
return w.n(new C.d0Y(w))},
$S:0}
C.d0Y.prototype={
$0(){return this.a.r++},
$S:0}
C.d10.prototype={
$1(d){var w=this.a
return w.n(new C.d0X(w,d))},
$S:2}
C.d0X.prototype={
$0(){var w=this.a
return w.d=w.guO().aAa(this.b)},
$S:0}
C.d11.prototype={
$0(){var w=this.a
return w.n(new C.d0W(w))},
$S:0}
C.d0W.prototype={
$0(){var w=this.a
return w.d=w.guO().b6D("")},
$S:0}
C.d12.prototype={
$1(d){var w=this.a
return w.n(new C.d0V(w,d))},
$S:2}
C.d0V.prototype={
$0(){var w=this.a
return w.d=w.guO().b6K(this.b)},
$S:0}
C.d13.prototype={
$0(){var w=this.a
w=w.guO().b6K(w.gau3().a.a)
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.fuw.prototype={
$1(d){var w={}
w.a=this.a
return new B.ed(new C.fuv(w),null)},
$S:21}
C.fuv.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bq(!0,new B.d2(new B.aX(0,1/0,0,B.aG(d,A.bR,x.w).w.a.b*0.85),B.ci(B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.f5c,A.av,D.f5q,A.ay,new C.aWN(v.a,new C.fuu(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,w,w,w,A.ak),w),!0,!1,A.aj,!0,!1),A.h,w,w,D.aTf,w,w,w,w,A.K6,w,w,w)},
$S:163}
C.fuu.prototype={
$1(d){this.b.$1(new C.fut(this.a,d))
B.a8(this.c,!1).M(d)},
$S:z+56}
C.fut.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fwH.prototype={
$1(d){return D.fhA},
$S:z+57}
C.d7p.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.d7q.prototype={
$0(){var w=this.a.c
w.toString
B.a8(w,!1).M(this.b)
return null},
$S:0}
C.d7r.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a8(w,!1).M(v)}},
$S:0}
C.fl4.prototype={
$1(d){var w=this.b
return new B.a3(A.aw,A.aC,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).au(0,d)},
$S:66}
C.d0B.prototype={
$3(d,e,f){var w,v=this,u=new B.aQ($.Y().r,A.aq,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.d0(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.d0(w,q+p,w,q+p*1.2))
u.E(new B.C0(B.bV(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.L()
p.r=B.aq(v.a.d,A.c,0.6).gq(0)
s.af(new B.u(w,o),2.2,p)},
$S:1682}
C.fl8.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+58}
C.fdv.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fdw.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eQ8,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.EZ,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdt(d),B.bk(A.bT,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rn,new C.fdu(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vL,w,w,w,w))],x.p),A.ag,w,A.e,A.Q,0,A.p),w),!0,!1,A.aj,!0,!0)},
$S:34}
C.fdt.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fdu.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.c96.prototype={
$1(d){return d.hs()},
$S:z+59}
C.c97.prototype={
$1(d){return d.ac()},
$S:z+60}
C.c95.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a_(b5,x.N,x.z),b3=B.aR(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a4.gdC(0)
b3=B.aR(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aR(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hwZ(b2.h(0,"type"))
t=B.aR(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aR(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aR(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aR(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aR(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.ate[A.o.D(b4,0,8)]
m=D.cBS[A.o.D(w,0,1)]
l=C.hAv(b2.h(0,"decoration"))
k=B.aR(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.aq8[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hDf(b2.h(0,"shape"))
g=B.aR(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aR(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
if(f==null)f=4280172719
e=B.aR(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aR(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aR(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.h1_(b2.h(0,"textTransition"))
a4=B.aR(b2.h(0,"textAnimDelayMs"))
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
b0=J.y(b2.h(0,"rich"),!0)
b2=B.aR(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.ei(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.c8W.prototype={
$1(d){return d.hs()},
$S:z+62}
C.c8X.prototype={
$1(d){return d.ac()},
$S:z+63}
C.c8T.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8U.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8V.prototype={
$1(d){return C.fSQ(B.a_(d,x.N,x.z))},
$S:z+64}
C.c9n.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c9o.prototype={
$0(){return A.d.gL(D.a_6)},
$S:z+66}
C.c9i.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c9h.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c9d.prototype={
$1(d){return new B.J(d,new C.c9e(),B.U(d).k("J<1,Q>")).ft(0,new C.c9f())},
$S:z+69}
C.c9e.prototype={
$1(d){return d.f},
$S:z+70}
C.c9f.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:537}
C.c9g.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hmV(d)},
$S:z+71}
C.c9j.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.c9k.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c9l.prototype={
$1(d){return d.ac()},
$S:z+14}
C.flH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.an(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.K(0,j)
break}}}},
$S:z+73}
C.flD.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.flE.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.flF.prototype={
$2(d,e){var w
if(d.b===D.cN){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.flG.prototype={
$2(d,e){return d.b===D.eV&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c91.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hLM(b2,b3),b5=B.a2(b4).k("bg<2>")
b5=B.cz(new B.bg(b4,b5),new C.c90(),b5.k("G.E"),x.N)
w=B.d7(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.oY.av(0,A.k.D(b1,0,1))
u=new C.c92()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c93(a9,b7.d)
r=new C.c94(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jD.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kI(A.k.D(1-k,0,1),B.dP(B.e5(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eV){a4=i.hs()
a4.ay=B.aq(B.aY(l.ay),B.aY(i.ay),v).l()
a4.ch=B.aq(B.aY(l.ch),B.aY(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l5&&l.at==i.at?r.$1(i):new B.am(A.W,a8,A.b_,A.q,B.a([new B.kI(A.k.D(o,0,1),r.$1(l),a8),new B.kI(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iy(B.vx(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cd)a7=D.mc
p.push(s.$5(i.c,i.d,i.e,i.f,C.h3a(a7,a6,r.$1(i))))}}return B.bT(new B.am(A.W,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a3(A.a3,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.bb)},
$S:449}
C.c90.prototype={
$1(d){return d.a},
$S:z+22}
C.c92.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aY(w)},
$S:z+76}
C.c93.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1685}
C.c94.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5J(v,C.aYU(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dz0.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e5(new B.d6(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c9a.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c9b.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fow.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:272}
C.fnC.prototype={
$1(d){return new C.abc(this.a,this.b,null)},
$S:z+78}
C.ecd.prototype={
$0(){return this.a.Oa(this.b,C.hP5(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ece.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Oa(this.b,C.hP7(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ecf.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Oa(this.b,C.hP6(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ecg.prototype={
$0(){X.h2V()
B.a8(this.a,!1).M(null)},
$S:0}
C.c9_.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1686}
C.c8Z.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.n1),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lB(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bP:A.dq
return B.fF(t,A.A,o,new C.c8Y(),A.cl,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1687}
C.c8Y.prototype={
$3(d,e,f){return D.a7W},
$S:219}
C.flC.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aY(r.e)
v=r.f
v.toString
v=new B.a3(A.aw,A.aC,A.w,B.a([w,B.aY(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aY(r.e):t
r=r.z
r=B.df(r,0,B.dK(6,"count",x.S),B.U(r).c)
u=r.$ti.k("J<ai.E,cG>")
r=B.z(new B.J(r,new C.flB(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bT(new B.am(A.W,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bb),A.ao)},
$S:1688}
C.flB.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYU(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f7n.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cO(r.b,new C.f7l(d))
w=B.aG(d,A.bR,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.ab(0,A.G,A.x.j(0.45),A.fF,28)],x.V)
s=x.p
return new B.cW(e,!1,B.au(B.aD(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.l8,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.yr,q,q,!0,q,q,new C.f7m(p,d),q,B.fo(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.K5,q,new B.b6(B.m(12),A.X),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.h,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.aF,q,u,v,t,q,A.n),q,q,q,A.fA,A.zO,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:250}
C.f7l.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a8(w,!0).oP())B.a8(w,!0).eD()},
$S:0}
C.f7m.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a8(this.b,!0).eD()},
$S:0}
C.eR4.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.dP(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.dP(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.dP(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.dP(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.e5(A.A,B.d8(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.e5(A.A,B.d8(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fl(r*3.14159)
return B.fp(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jz(r*3.14159)
return B.fp(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fl(r*1.2)
s.jz(r*0.5)
return B.fp(A.A,B.d8(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fl(-r*1.4)
return B.fp(A.a7,B.d8(u.b,r),t,s,!0)
case 12:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(B.e5(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.jA(u.b,A.q,new C.aGy(r,t))],x.p),t)
case 15:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.jA(u.b,A.q,new C.aGy(1-r,t))],x.p),t)
case 16:v=D.aWs.av(0,r)
return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.e5(A.A,B.d8(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.di()
s.mf(r*6.28)
s.ji(r,r,r,1)
return B.fp(A.A,u.b,t,s,!0)
case 20:return B.et(A.A,(r-0.5)*0.35,new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(u.b,r)],x.p),t),t)}},
$S:57}
C.dK_.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cm(0)}},
$S:11}
C.dJZ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cm(0)}},
$S:11}
C.dJY.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h3a(v,w,e)},
$S:57}
C.c8S.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.aY(v.e)
t=v.f
t.toString
t=new B.a3(A.a3,A.a7,A.w,B.a([u,B.aY(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.aY(v.e):r
v=v.z
s=B.U(v).k("J<1,cG>")
q=B.z(new B.J(v,new C.c8R(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bT(new B.am(A.W,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.bb)},
$S:449}
C.c8R.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cd?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5J(m,new C.Tb(d,C.aYU(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cZ9.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cZ8(w))},
$S:11}
C.cZ8.prototype={
$0(){return this.a.d++},
$S:0}
C.e1K.prototype={
$2(d,e){var w,v=null,u=A.o.ak(this.b.e.a,1000),t=A.o.G(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aHJ.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hLv(w,t,s,e)}switch(s.a.c){case"float3d":s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dZ(0,w*7,0,1)
s.fl(Math.sin(t)*0.32)
s.jz(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.ji(w,w,w,1)
return B.fp(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e5(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.d8(B.e5(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:57}
C.eGv.prototype={
$1(d){var w
$.Y()
w=B.L()
w.b=A.ae
w.c=d
w.e=A.fs
return w},
$S:1689}
C.fjd.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ge8()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.bnk(u,t,r),A.at))
w.push(B.n5(s.d,A.ao,new C.bbC(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bmn(u,q,t,r),A.at))
return B.au(new B.a5(v.a,v.b,new B.am(A.W,r,A.b_,A.q,w,r),r),r,r,r)},
$S:238}
C.faa.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:271}
C.eir.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.BN(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gai(s)){u=null
w=1
break}u=r.dI(s,new C.eip(),new C.eiq(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1690}
C.eip.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:198}
C.eiq.prototype={
$0(){return J.fj(this.a)},
$S:1692}
C.eeP.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eeQ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eeR.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.egp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egd.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ege.prototype={
$1(d){return d.hs()},
$S:z+81}
C.eec.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ehx.prototype={
$0(){this.a.rJ()},
$S:0}
C.ein.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nD()
w.IH()},
$S:0}
C.egn.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nD()
w.IH()},
$S:0}
C.eia.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eib.prototype={
$1(d){return d.b===D.cN},
$S:z+4}
C.eic.prototype={
$1(d){return d.a},
$S:z+22}
C.eid.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bc(w,A.b2,A.aM),$.av())},
$S:255}
C.eie.prototype={
$0(){return B.k9(!0,null,!0,!0,null,null,!1)},
$S:536}
C.edB.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eio.prototype={
$0(){},
$S:0}
C.efw.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()
w.IH()},
$S:0}
C.edz.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wz()},
$S:0}
C.edA.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wz()},
$S:0}
C.efT.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.efU.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()
w.IH()
w.z="Home"},
$S:0}
C.efV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efv.prototype={
$1(d){var w=null
return B.eo(B.a([B.bK(!1,A.Rm,w,w,!0,w,w,new C.efu(d),w,w)],x.p),w,w,w,D.f6N,w,w,w,w,D.eQy,w)},
$S:20}
C.efu.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efs.prototype={
$1(d){var w=null
return B.eo(B.a([B.bK(!1,A.Rm,w,w,!0,w,w,new C.efr(d),w,w)],x.p),w,w,w,D.eUf,w,w,w,w,D.eSb,w)},
$S:20}
C.efr.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eft.prototype={
$0(){},
$S:0}
C.eeL.prototype={
$1(d){return this.a.aWn(C.byk(d))},
$S:z+7}
C.eeM.prototype={
$1(d){return this.a.ack(C.byk(d))},
$S:z+7}
C.efC.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f6R,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.NV(A.uA,D.ars,"HATI YA KUHOWA","Hati ya mahari",new C.efx(d),w),A.T,new C.NV(A.fX,D.cNs,"HATI YA KUHOWESHA","Hati ya kupokea",new C.efy(d),w),A.T,new C.NV(A.hU,D.cAb,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.efz(d),w),A.T,new C.NV(A.hV,D.cyC,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.efA(d),w)],v)
if(this.a.ga8Z())A.d.v(u,B.a([A.T,new C.NV(A.iO,D.cjS,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.efB(d),w)],v))
return B.bq(!0,B.ci(B.v(u,A.ag,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,E.wD,w,w,A.ak),!0,!1,A.aj,!0,!0)},
$S:34}
C.efx.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhowa")
return null},
$S:0}
C.efy.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhoweya")
return null},
$S:0}
C.efz.prototype={
$0(){B.a8(this.a,!1).M("marriage_agreement")
return null},
$S:0}
C.efA.prototype={
$0(){B.a8(this.a,!1).M("hati_malipo_awamu")
return null},
$S:0}
C.efB.prototype={
$0(){B.a8(this.a,!1).M("hati_kiapo_uongozi")
return null},
$S:0}
C.efD.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()},
$S:0}
C.edD.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.edE.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a7(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mG(r,v.f+1,q);++v.f
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
C.efO.prototype={
$1(d){return d.b===D.l5},
$S:z+4}
C.efP.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.ed(new C.efM(w,this.a,v),null)},
$S:21}
C.efM.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.efN(p,o,a3,n),l=B.M(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aP:A.ai,i=l?A.bj:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.B(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.ct,j,q,q,q,q),q,q,q,new C.efI(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.AG[w]
v.a=null
t=v.a=u.a
a1.push(new C.be6(t,u.b,p.a===t,i,k,new C.efJ(v,m),q))}a1=B.c8(A.bJ,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.AB[w]
s.a=null
t=s.a=r.a
u.push(new C.be5(t,r.b,p.b===t,k,j,new C.efK(s,m),q))}return B.bq(!0,B.p(q,B.ci(B.v(B.a([d,A.aO,a0,A.T,a1,A.bu,v,A.T,B.c8(A.bJ,u,A.bx,12,12),A.bu,new B.a5(1/0,48,B.ez(D.bE3,D.f97,new C.efL(o,n),B.db(q,q,q,q,q,q,q,q,q,A.aB,q,q,q,q,new B.b6(B.m(16),A.X),D.aQR,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.z,q,q,q,q,A.ak),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rI,D.bii,q,q,q),!0,!1,A.aj,!0,!0)},
$S:117}
C.efN.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.efG(w.a,d,e))
w.b.cZ(new C.efH(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1695}
C.efG.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.efH.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.efI.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efJ.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.efK.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.efL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fk(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.efF(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efF.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.efR.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.efS.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.efQ(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wz()},
$S:0}
C.efQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eg8.prototype={
$1(d){return d.b===D.cN},
$S:z+4}
C.eg9.prototype={
$1(d){return d.w},
$S:z+82}
C.ega.prototype={
$2(d,e){return d>e?d:e},
$S:94}
C.egb.prototype={
$1(d){var w=this,v=null,u=B.M(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aP:A.ai,r=u?A.bj:A.aN,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bR,x.w).w,m=w.a,l=x.p,k=w.b
return B.bq(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bxX,A.h,v,v,D.aSb,v,38,v,v,v,v,v,38),A.bd,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.ct,s,v,v,v,v),v,v,v,new C.eg5(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dm(1,A.ci,B.hH(v,new C.eg6(m,k,w.c,s,w.d,t,r),k.length,A.hm,v,A.ak,new C.eg7(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.h,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rI,A.VB,v,v,v),!0,!1,A.aj,!0,!0)},
$S:34}
C.eg5.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eg7.prototype={
$2(d,e){return A.ab},
$S:36}
C.eg6.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aB:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cq
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bB_,q,q,q,new C.eg3(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bkv,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bn(q,new B.b3(4,B.m(16),A.X),q,A.eM,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b3(4,B.m(16),D.aQw),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ah,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eg4(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1696}
C.eg3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hR4(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o7(q.a,o,n,s)
r.bJ(0,new B.bc(m,B.h2(A.bs,o+s.length),A.aM))
l.agk(k,m)
l.oB()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eg4.prototype={
$1(d){var w=this.a
w.agk(this.b.a,d)
w.oB()},
$S:2}
C.egc.prototype={
$0(){},
$S:0}
C.efE.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.edU.prototype={
$0(){},
$S:0}
C.edV.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h4t(this.b,w,!0)
w=this.a
w.r=null
w.wz()},
$S:0}
C.edW.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.edX.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.edT(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wz()},
$S:0}
C.edT.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.egi.prototype={
$1(d){return B.p9(new C.egh(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:126}
C.egh.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.adG,B.v(B.a([D.f4D,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ih(!0,w,e,A.z,D.eum,new C.egg(this.a,this.b),20,A.rL,w,A.ak,!1),1)],v),A.ag,w,A.e,A.j,0,A.p)},
$S:450}
C.egg.prototype={
$2(d,e){var w=null,v=D.Fq[e],u=C.hmQ(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fC,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bo,B.p(w,D.eoV,A.h,w,w,new B.o(A.e4.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nt,w,w,w)],m))
return B.aD(!1,A.a1,!0,w,B.aI(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b8,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a3(A.a3,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.egf(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:76}
C.egf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c99(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a8(s,!1).M(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egj.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()},
$S:0}
C.ecy.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qT(4294967295,null,0,0,null,C.cy(),D.mb,"","","",D.db),s=this.b
C.c9m(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Bg){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.edS.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.m(0,"id",C.cy())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iS
$.iS=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.fSQ(q));++v.f},
$S:0}
C.edQ.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.egr.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.edM.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.edL(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.edL.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egq.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.Q(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.edC.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bc(w,A.b2,A.aM),$.av())},
$S:255}
C.eed.prototype={
$0(){return B.k9(!0,null,!0,!0,null,null,!1)},
$S:536}
C.ei8.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ei9.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aqg(w).fu()
v=u.UG(w)
v.srp(B.h2(A.bs,v.a.a.length))},
$S:8}
C.ehy.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.VE(v)
if(u!=null&&u.b===D.cN)w.UG(u).saU(0,u.r)}else w.w=null},
$S:0}
C.ecz.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.bf,!1,v.gpB().e.l(),A.az,"",4280640491,24,A.bi,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.bc,4280172719,2,"Tap to edit text",0,0,"",D.cd,D.cN,0.7,0.15,0.2)
A.d.K(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ecw.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.bf,!1,4279310375,A.az,"",v.gpB().c.j(0.25).l(),24,A.bi,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpB().c.l(),2,"",0,0,"",D.cd,D.eV,0.25,0.3,0.3)
A.d.K(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ecm.prototype={
$0(){var w=C.ei(A.bf,!1,4279310375,A.az,"",4280640491,24,A.bi,A.a4,"",0.55,C.cy(),this.b,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l5,0.6,0.2,0.18),v=this.a
A.d.K(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ecj.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bK1],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagV().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bvJ,r,r,r,r,new C.eci(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bq(!0,B.cL(q,r,r,r,r,A.ak,!0),!0,!1,A.aj,!0,!0)},
$S:34}
C.eci.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eck.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cy(),u=this.b,t=A.R.al(u.ac(),null),s=C.ei(A.bf,!1,4279310375,A.az,u.b,4280640491,24,A.bi,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.bc,4280172719,2,t,0,0,"",D.cd,D.a1v,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdk().z,s)
t.r=s.a},
$S:0}
C.edO.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.edP.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdk().z,new C.edN(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.av()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.edN.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ed0.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cN)s.Q=t.c.l()
else if(w===D.eV){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ed1(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ed1.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ed5.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ed6(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ed6.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ed3.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cN){s.Q=t.c
return}w=new C.ed4(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ed4.prototype={
$1(d){var w,v,u
for(w=A.d.gah(d.z),v=new B.hK(w,new C.ed2()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ed2.prototype={
$1(d){return d.b===D.cN},
$S:z+4}
C.ed_.prototype={
$0(){return C.c9m(this.b,this.c,this.a.gpB())},
$S:0}
C.eg2.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.eih.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eii.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eij.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eik.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bi(s,new C.eig(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQu()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.wz()
t.IH()}},
$S:0}
C.eig.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ehO.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a92(),s=w.b,r=u.a93(A.f3,A.kE,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bu,B.p(v,B.B(B.a([B.D(u.aQR(w.c,A.ai),1),new B.C(A.fr,B.p(v,D.bvP,A.h,v,v,new B.o(A.f3.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aQR(s,A.f3),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a3(A.aw,A.aC,A.w,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bu,u.aQU(A.f3,d,D.brW,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bRc(A.aX,d,A.t_,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aQS(d,"Not now"))
return new C.Io(B.v(p,A.ag,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ehN.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Io(B.v(B.a([v.a92(),A.P,v.a93(A.aX,D.brD,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.d2(new B.aX(0,1/0,0,B.aG(d,A.bR,x.w).w.a.b*0.42),B.hH(w,new C.ehL(v,u,d),u.length,w,w,A.ak,new C.ehM(),!0),w),A.ay,v.aQS(d,"Cancel")],x.p),A.ag,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.ehM.prototype={
$2(d,e){return A.T},
$S:36}
C.ehL.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.a1,!0,w,B.aI(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aij,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bGZ,A.n),w,42,w,w,w,w,w,42),A.bd,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mX,w,w,w),A.d6,B.d("Updated "+this.a.Ob(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.em,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ehK(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:76}
C.ehK.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.ehH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a92()
t=t.a93(A.aZ,A.t6,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Io(B.v(B.a([s,A.P,t,A.bu,B.B(B.a([B.D(B.dV(A.a4T,new C.ehF(d),B.db(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cc,u,new B.b6(B.m(14),A.X),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.ax,B.D(B.bL(D.eSJ,new C.ehG(d),B.bk(A.f3,u,u,u,A.c,u,A.cc,u,new B.b6(B.m(14),A.X),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ag,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.ehF.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.ehG.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.ehJ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a92(),s=w.b,r=u.a93(A.aS,A.el,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.D(u.arA("Names",""+w.c),1),A.aa,B.D(u.arA("Fields",""+w.d),1),A.aa,B.D(u.arA("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bk,v,v,v,A.c,v,A.wt,v,new B.b6(B.m(14),A.X),v,v,v)
return new C.Io(B.v(B.a([t,A.P,r,A.aO,p,A.bu,B.bL(B.d("Open "+s,v,v,v,v,v,v,A.mW,v,v,v),new C.ehI(d),o),A.T,u.aQT(d,"Stay here",!1)],q),A.ag,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ehI.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eeH.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eeG.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.ehz.prototype={
$1(d){return d.b===D.cN},
$S:z+4}
C.ei7.prototype={
$1(d){var w=this.a,v=this.b
return new C.YB(A.d.dI(w.d,new C.ei5(v),new C.ei6(v)).hs(),w.f,null)},
$S:z+84}
C.ei5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ei6.prototype={
$0(){return this.a},
$S:z+85}
C.ecr.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hf,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bxx,w,w,w,w,new C.ecp(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eQS,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.byG,w,w,w,w,new C.ecq(d),!1,w,w,w,w,w,D.fae,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.bq(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.aj,!0,!0)},
$S:34}
C.ecp.prototype={
$0(){B.a8(this.a,!1).M("scroll")
return null},
$S:0}
C.ecq.prototype={
$0(){B.a8(this.a,!1).M("split")
return null},
$S:0}
C.ecs.prototype={
$0(){var w=this.b,v=w.c,u=C.ei(A.bf,!1,4279310375,A.az,v,4280640491,24,A.bi,A.a4,"",0.84,C.cy(),w.b,"","",0,!1,"",0,D.bc,4280172719,2,v,0,0,"",D.cd,D.Pl,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ect.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iS
$.iS=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iS
$.iS=k+1
m.push(new C.ey(""+1000*l+"_"+k,D.Pl,0.04,0.06,0.92,0.88,v,24,A.a4,A.bi,A.az,4279310375,A.bf,u,D.bc,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cd,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lr(""+1000*p+"_"+o,r+n,"",D.pp,4294967295,null,D.db,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ecx.prototype={
$0(){var w,v=C.cy(),u=this.a,t=u.e
t=(t==null?null:C.ki(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ei(A.bf,!1,4279310375,A.az,t,4280640491,24,A.bi,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.kJ,0.35,0.55,0.62)
A.d.K(u.gdk().z,w)
u.r=w.a},
$S:0}
C.eco.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aZ2(o)
w=C.cy()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ei(A.bf,!1,4279310375,A.az,"marriage_sign_placed_"+A.a.e1(v.db,"marriage_sign_",""),4280640491,24,A.bi,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.kJ,s,u,t)
A.d.K(p.gdk().z,q)
A.d.bm(p.gdk().z,new C.ecn(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hLf(p)}},
$S:0}
C.ecn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ego.prototype={
$0(){var w=this.a,v=this.b
w.aZ2(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eif.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eeK.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.eeJ())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eeJ.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ed9.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eda.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rJ()},
$S:8}
C.ecl.prototype={
$0(){var w=C.ei(A.bf,!1,4279310375,A.az,"HD Photo",4280640491,24,A.bi,A.a4,"",0.8,C.cy(),this.b,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l5,0.8,0.1,0.1),v=this.a
A.d.K(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eeb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ecu.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ecD.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ecE.prototype={
$0(){var w=this.b.hs(),v=C.cy(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ei(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ecF.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.ecC(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.ecC.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ecQ.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.ecB(v))
if(u>0){A.d.cu(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.ecB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ecT.prototype={
$0(){return this.a.as=A.bf},
$S:0}
C.ecU.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ecV.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.ecW.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ecX.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ecY.prototype={
$1(d){return d.b===D.cN},
$S:z+4}
C.ecZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecG.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.K(v,C.BS(w.gpB().c.j(0.18).l(),0.1,u,D.bc,0,2,1,0,0))
u=w.gdk().z
v=C.cy()
A.d.K(u,C.iM(A.bf,!1,w.gpB().d.l(),A.az,18,A.bi,A.I,0.07,v,"Document Header",0,D.db,0.9,0.05,0.02))},
$S:0}
C.ecH.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cy()
A.d.K(u,C.BS(v.gpB().c.j(0.12).l(),0.1,t,D.bc,0,2,1,0,0.9))
t=v.gdk().z
u=C.cy()
w=C.bz0()
A.d.K(t,C.iM(A.L,!1,v.gpB().e.l(),A.az,12,A.bi,A.a4,0.06,u,"Footer \xb7 "+w,0,D.db,0.9,0.05,0.92))},
$S:0}
C.ecI.prototype={
$0(){A.d.K(this.a.gdk().z,C.BS(1727914055,0.12,C.cy(),D.bc,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ecJ.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdk().z,C.BS(w,0.08,C.cy(),D.bc,w,2,0.5,0.2,0.4))},
$S:0}
C.ecK.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.K(v,C.BS(w.gpB().c.j(0.35).l(),0.12,u,D.Bh,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdk().z,C.iM(A.bf,!1,4279310375,A.az,18,A.bi,A.a4,0.15,C.cy(),"Important note",0,D.pq,0.5,0.38,0.52))},
$S:0}
C.ecL.prototype={
$0(){var w=this.a
A.d.K(w.gdk().z,C.BS(4294507260,0.78,C.cy(),D.bc,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdk().z,C.iM(A.bf,!1,4279179050,A.az,16,A.bi,A.a4,0.7,C.cy(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bz0()+"\n\nSubject:\n\nBody text\u2026",0,D.db,0.76,0.12,0.14))},
$S:0}
C.ecM.prototype={
$0(){var w=this.a
A.d.K(w.gdk().z,C.BS(4294897802,0.28,C.cy(),D.bc,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdk().z,C.iM(A.bf,!1,4285611794,A.az,15,A.bi,A.a4,0.24,C.cy(),"Sticky note",0,D.aAJ,0.26,0.64,0.14))},
$S:0}
C.ecN.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdk().z,C.BS(4293060848,0.04,C.cy(),D.bc,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdk().z,C.BS(w,0.04,C.cy(),D.bc,w,2,0.55,0.1,0.48))},
$S:0}
C.ecO.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.az,18,A.bi,A.a4,0.62,C.cy(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Gk,0.42,0.06,0.18))
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.az,18,A.bi,A.a4,0.62,C.cy(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tm,0.42,0.52,0.18))},
$S:0}
C.ecP.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdk().z,C.BS(858088427,0.62,C.cy(),D.bc,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdk().z,C.BS(856004201,0.62,C.cy(),D.bc,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.az,20,A.bi,A.I,0.1,C.cy(),"Option A",0,D.db,0.36,0.08,0.2))
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.az,20,A.bi,A.I,0.1,C.cy(),"Option B",0,D.db,0.36,0.56,0.2))},
$S:0}
C.ecR.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdk().z,C.BS(4294967295,0.36,C.cy(),D.bc,w,2,0.24,0.38,0.28))
A.d.K(v.gdk().z,C.iM(A.L,!1,w,A.az,14,A.bi,A.a4,0.12,C.cy(),"[ QR CODE ]",0,D.db,0.24,0.38,0.4))},
$S:0}
C.ecS.prototype={
$0(){return C.c9m(this.b,D.Pm,this.a.gpB())},
$S:0}
C.eea.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a3a.t(0,d),t=this.a
return t.b2P(d,v===d,A.aW,this.c,new C.ee9(t,u,d,w),u)},
$S:z+25}
C.ee9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nw(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bzN(r,new C.ee8(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ee8.prototype={
$0(){return this.a.cZ(new C.ee7(this.b,this.c))},
$S:0}
C.ee7.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ecv.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qT(4294967295,null,0,0,null,C.cy(),D.mb,"","","",D.db),s=this.b
C.c9m(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Bg){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.edd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hR7(p,q.d,s,new C.edc(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rJ(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edc.prototype={
$1(d){return this.bf6(d)},
bf6(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.edb(t,d))
w=2
return B.b(t.rJ(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.edb.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.ede.prototype={
$0(){return this.a.bCx()},
$S:0}
C.edf.prototype={
$0(){return this.a.aMi("Class Presentation",!0)},
$S:0}
C.edg.prototype={
$1(d){return this.a.bDt(d.b,this.b,d.a)},
$S:z+88}
C.edR.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bR,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eg1.prototype={
$1(d){return new B.C(new B.N(0,0,0,B.aG(d,A.es,x.w).w.f.d),new B.ed(new C.eg0(this.a,this.b),null),null)},
$S:59}
C.eg0.prototype={
$2(d,e){return B.p9(new C.eg_(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1698}
C.eg_.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aF:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.ba,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.T,r,new B.C(A.ad7,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b8,B.bK(!1,A.yr,v,v,!0,v,v,new C.efY(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cL(B.a([p.aOV(u,!0,!0,new C.efZ(p,w.d))],q),e,D.bg8,v,v,A.ak,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.km,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.efY.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.efZ.prototype={
$0(){this.b.$1(new C.efW())
var w=this.a
if(w.c!=null)w.n(new C.efX())},
$S:0}
C.efW.prototype={
$0(){},
$S:0}
C.efX.prototype={
$0(){},
$S:0}
C.ehA.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:93}
C.ehB.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d8(B.e5(A.A,new C.awb(this.a,null),0.94+w*0.06,null,null),w)},
$S:451}
C.ehC.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:93}
C.ehD.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d8(B.e5(A.A,new C.b9u(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:451}
C.ehE.prototype={
$0(){return A.d.ck(this.a.d,0,C.U8(this.b))},
$S:0}
C.ecA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dJ.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aF.j(0.72)],t):B.a([A.c.j(0.88),A.oP.j(0.75)],t)
r=B.H(A.be.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.be.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.H(A.be.j(0.45+q),A.r,1)
t=B.p(p,B.V(A_.Xh,u?A.af:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.w,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.tm(A.fn,B.p(p,B.v(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ai,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a3(A.aw,A.aC,A.w,s,p,p),A.n),p,p,p,p,A.ep,p,p,1/0),14,!1),A.ao)},
$S:600}
C.edF.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.edG.prototype={
$1(d){return d.length!==0},
$S:3}
C.edH.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k6
else{w=B.ae("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.XQ:A.A6}return w},
$S:535}
C.edK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dJ.av(0,A.k.G(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aF.j(0.78)],s):B.a([A.c.j(0.92),A.mp.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.ki(v.w)?A.uA:A.pd,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a3(A.a3,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Ob(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Ob(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Ob(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Ob(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Ob(v.f)
r=k.bDr(n,A.d.gL(r),t)
return B.p(l,B.bu(j,new B.a5U(B.aD(!1,A.a1,!0,l,B.aI(!1,l,!0,B.p(l,B.dL(!1,A.K2,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.nw,t?A.aA:A.bI,l,l,l,l),l,l,l,new C.edI(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a3(A.aw,A.aC,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.edJ(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ac),l),A.ao),A.h,l,l,l,l,l,l,A.d9,l,l,l,l)},
$S:95}
C.edJ.prototype={
$0(){return this.a.ack(this.b)},
$S:0}
C.edI.prototype={
$0(){return this.a.zR(this.b,this.c)},
$S:0}
C.efa.prototype={
$0(){var w=this.a
w.b1v()
w.n(new C.ef9())},
$S:0}
C.ef9.prototype={
$0(){},
$S:0}
C.efb.prototype={
$1(d){return this.a.agk(this.b.a,d)},
$S:2}
C.efc.prototype={
$0(){this.a.cZ(new C.ef8(this.b))},
$S:0}
C.ef8.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.efd.prototype={
$0(){this.a.cZ(new C.ef7(this.b))},
$S:0}
C.ef7.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bi:A.cx},
$S:0}
C.efe.prototype={
$0(){this.a.cZ(new C.ef6(this.b))},
$S:0}
C.ef6.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mg},
$S:0}
C.eff.prototype={
$0(){this.a.cZ(new C.ef5(this.b))},
$S:0}
C.ef5.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.efg.prototype={
$0(){var w=this.a
w.cZ(new C.ef4(w,this.b))},
$S:0}
C.ef4.prototype={
$0(){var w=this.b
return w.as=this.a.bXH(w.as)},
$S:0}
C.efh.prototype={
$0(){return this.a.cZ(new C.ef3(this.b))},
$S:0}
C.ef3.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.efi.prototype={
$0(){return this.a.cZ(new C.ef2(this.b))},
$S:0}
C.ef2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eeW.prototype={
$0(){return this.a.a_U(this.b.a)},
$S:0}
C.eeX.prototype={
$0(){this.a.Yv()
return null},
$S:0}
C.eeY.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bR,x.w).w.a.a<900)w.acD()
else w.n(new C.eeV(w))},
$S:0}
C.eeV.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eeZ.prototype={
$0(){this.a.cZ(new C.eeU(this.b))},
$S:0}
C.eeU.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.ef_.prototype={
$0(){return this.a.cZ(new C.eeT(this.b))},
$S:0}
C.eeT.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ef0.prototype={
$0(){return this.a.cZ(new C.eeS(this.b))},
$S:0}
C.eeS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ef1.prototype={
$0(){return this.a.awl(null)},
$S:0}
C.ee3.prototype={
$0(){this.a.Cq()
return null},
$S:0}
C.ee4.prototype={
$0(){this.a.a7C()
return null},
$S:0}
C.ee6.prototype={
$1(d){return this.bf7(d)},
bf7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Iy(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c2(A.aF,null,new C.edZ(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.ee_(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.ee0(r))
s=s.c.H(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.ee1(r))
s=s.c.H(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h5C(q,new C.Dm(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.ee2(r,p))
s=s.c.H(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aeD(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:92}
C.edZ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dQC],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bxE:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.edY(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bq(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.aj,!0,!0)},
$S:34}
C.edY.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.ee_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ee0.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ee1.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ee2.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ee5.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yM(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yM(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yM(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aeD(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dV1,q,v,u,B.yM(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.eil.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byY(w,v)}},
$S:0}
C.eim.prototype={
$0(){this.a.Cq()
return null},
$S:0}
C.efl.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bGT:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aP:A.bt
return new B.C(A.hm,B.aH(u,B.dj(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b9,new B.o(w,u,u,r,u,q,A.n),A.eK,u,u,u,A.lq,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.efk(t,d),u,u,u,u,u,u,!1,A.ad),u)},
$S:137}
C.efk.prototype={
$0(){var w=this.a
return w.n(new C.efj(w,this.b))},
$S:0}
C.efj.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.efm.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_B:E.arx
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbGI():t.gbCS()
return B.hq(B.aH(u,B.p(u,D.ahM,A.h,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a3(A.a3,A.a7,A.w,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ad),u,s,u,u)},
$S:1701}
C.efn.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hQn(v,w.a.c)},
$S:0}
C.egK.prototype={
$0(){return this.b.un(this.a.a)},
$S:0}
C.egL.prototype={
$0(){return this.a.un(D.mb)},
$S:0}
C.egM.prototype={
$0(){return this.a.un(D.Gi)},
$S:0}
C.egX.prototype={
$0(){return this.a.un(D.Gj)},
$S:0}
C.eh7.prototype={
$0(){return this.a.un(D.Gh)},
$S:0}
C.ehi.prototype={
$0(){return this.a.pm("lab_report")},
$S:0}
C.ehp.prototype={
$0(){return this.a.pm("rubric")},
$S:0}
C.ehq.prototype={
$0(){return this.a.pm("minutes")},
$S:0}
C.ehr.prototype={
$0(){return this.a.pm("agenda")},
$S:0}
C.ehs.prototype={
$0(){return this.a.pm("timeline")},
$S:0}
C.eht.prototype={
$0(){return this.a.pm(this.b.a)},
$S:0}
C.egN.prototype={
$0(){this.a.TQ()
return null},
$S:0}
C.egO.prototype={
$0(){this.a.TK()
return null},
$S:0}
C.egP.prototype={
$0(){return this.a.pm("table")},
$S:0}
C.egQ.prototype={
$0(){return this.a.pm("sticky")},
$S:0}
C.egR.prototype={
$0(){return this.a.pm("divider")},
$S:0}
C.egS.prototype={
$0(){return this.a.pm("header_bar")},
$S:0}
C.egT.prototype={
$0(){return this.a.on(D.bc)},
$S:0}
C.egU.prototype={
$0(){return this.a.on(D.eF)},
$S:0}
C.egV.prototype={
$0(){return this.a.on(D.jp)},
$S:0}
C.egW.prototype={
$0(){return this.a.on(D.Bh)},
$S:0}
C.egY.prototype={
$0(){return this.a.on(D.jq)},
$S:0}
C.egZ.prototype={
$0(){return this.a.on(D.kK)},
$S:0}
C.eh_.prototype={
$0(){return this.a.on(D.fk)},
$S:0}
C.eh0.prototype={
$0(){this.a.FZ()
return null},
$S:0}
C.eh1.prototype={
$0(){this.a.LL()
return null},
$S:0}
C.eh2.prototype={
$0(){return this.a.pm("quote")},
$S:0}
C.eh3.prototype={
$0(){return this.a.a5O()},
$S:0}
C.eh4.prototype={
$0(){this.a.YB()
return null},
$S:0}
C.eh5.prototype={
$0(){var w=this.a
return w.n(new C.egA(w))},
$S:0}
C.egA.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eh6.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nw(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.egI(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egI.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eh8.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jo()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a3b.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.ba
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a3(A.a3,A.a7,A.w,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a3b.t(0,q))u.push(B.an(s,B.p(s,D.LD,A.h,s,s,D.CA,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.hm,B.aH(s,B.hq(new B.am(A.W,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.egH(r,d),s,s,s,s,s,s,!1,A.ad),s)},
$S:z+89}
C.egH.prototype={
$0(){this.a.a65(this.b)
return null},
$S:0}
C.eh9.prototype={
$0(){this.a.a64(this.b)
return null},
$S:0}
C.eha.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hmR(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.ba
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qT(4294967295,r,0,0,r,"preview_"+w,D.pp,"","","",D.db)
C.h2y(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h3S(s),A.ao),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ao)],w)
if(q)u.push(B.an(r,B.p(r,D.aik,A.h,r,r,D.CA,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.kx,B.aH(r,B.v(B.a([new B.am(A.W,r,A.a9,A.q,u,r),A.d6,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ai,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.egG(p,q,d),r,r,r,r,r,r,!1,A.ad),r)},
$S:z+90}
C.egG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdk()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.nw(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cZ(new C.egw(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egw.prototype={
$0(){return C.h2y(this.a,this.b.a)},
$S:0}
C.egJ.prototype={
bf8(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a3a.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nw(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bf8(d,e)},
$S:z+91}
C.ehu.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("J<1,r>")
v=B.z(new B.J(d,new C.ehw(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ci(B.B(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b0)},
$S:z+92}
C.ehw.prototype={
$1(d){var w=this
return w.a.b2P(d,w.b===d,w.c,w.d,new C.ehv(w.e,d),!D.a3a.t(0,d))},
$S:z+25}
C.ehv.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ehb.prototype={
$1(d){this.b.$2(d,new C.egF(this.a,d,this.c))
return null},
$S:z+26}
C.egF.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bzN(u,new C.egv(v,this.c,w),w)},
$S:0}
C.egv.prototype={
$0(){return this.a.cZ(new C.egt(this.b,this.c))},
$S:0}
C.egt.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ehc.prototype={
$1(d){this.b.$2(d,new C.egE(this.a,d))
return null},
$S:z+26}
C.egE.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fxv(u,new C.egu(v,w),w)},
$S:0}
C.egu.prototype={
$0(){var w=this.a
return w.cZ(new C.egs(w,this.b))},
$S:0}
C.egs.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.ehd.prototype={
$0(){var w=this.a
return w.n(new C.egD(w))},
$S:0}
C.egD.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ehe.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byY(w,v)}},
$S:0}
C.ehf.prototype={
$0(){this.a.GL()
return null},
$S:0}
C.ehg.prototype={
$0(){return this.a.a5O()},
$S:0}
C.ehh.prototype={
$0(){var w=this.a,v=w.jo()
if(v!=null&&v.b===D.cN)w.cZ(new C.egC(v))},
$S:0}
C.egC.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.ehj.prototype={
$0(){this.a.Cq()
return null},
$S:0}
C.ehk.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.E0(v,!0)
return null},
$S:0}
C.ehl.prototype={
$0(){this.a.cZ(new C.egB(this.b))},
$S:0}
C.egB.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.ehm.prototype={
$0(){this.a.cZ(new C.egz(this.b))},
$S:0}
C.egz.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bi:A.cx},
$S:0}
C.ehn.prototype={
$0(){this.a.cZ(new C.egy(this.b))},
$S:0}
C.egy.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mg},
$S:0}
C.eho.prototype={
$0(){this.a.cZ(new C.egx(this.b))},
$S:0}
C.egx.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ed8.prototype={
$1(d){return this.bf5(d)},
bf5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nw(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cZ(new C.ed7(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:184}
C.ed7.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ehR.prototype={
$0(){var w=this.a
return w.cZ(new C.ehQ(w,this.b))},
$S:0}
C.ehQ.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.ehS.prototype={
$0(){var w=this.a
return w.cZ(new C.ehP(w,this.b))},
$S:0}
C.ehP.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eeg.prototype={
$0(){return this.a.cZ(new C.eef(this.b))},
$S:0}
C.eef.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eeh.prototype={
$0(){return this.a.cZ(new C.eee(this.b))},
$S:0}
C.eee.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eeO.prototype={
$1(d){var w=x.gh
w=B.z(new B.J(D.ak0,new C.eeN(),w),w.k("ai.E"))
return w},
$S:z+94}
C.eeN.prototype={
$1(d){var w=null
return B.yM(B.d(d.b,w,w,w,w,w,w,A.mZ,w,w,w),48,d,x.fO)},
$S:z+95}
C.ei3.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.ei2.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jK()?q:new C.ei0(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.ba:A.cp
v=B.H(v,A.r,o?2:1)
u=r.d?A.cK:A.c
t=B.bX(0,C.h3S(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aH(q,B.p(q,new B.am(A.W,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.mV,q,q,q),A.h,q,q,new B.o(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.ae_,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ei1(p,e),q,q,q,q,q,q,!1,A.ad)},
$S:75}
C.ei1.prototype={
$0(){var w=this.a
return w.n(new C.ehX(w,this.b))},
$S:0}
C.ehX.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IH()},
$S:0}
C.ei0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c2(null,null,new C.ehY(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.ehZ(q,s))
q.aNG()}else if(r==="del"){q=t.a
q.n(new C.ei_(q,s))
q.aMT()}else if(r==="up")t.a.aZf(s,s-1)
else if(r==="down")t.a.aZf(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehY.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bzh,w,w,w,w,new C.ehT(d),!1,w,w,w,w,w,w,w,D.eRK,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bza,w,w,w,w,new C.ehU(d),!1,w,w,w,w,w,w,w,A.vp,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bys,w,w,w,w,new C.ehV(d),!1,w,w,w,w,w,w,w,D.eZc,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bAt,w,w,w,w,new C.ehW(d),!1,w,w,w,w,w,w,w,D.eRz,w,w,w))
return B.bq(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.aj,!0,!0)},
$S:34}
C.ehT.prototype={
$0(){B.a8(this.a,!1).M("dup")
return null},
$S:0}
C.ehU.prototype={
$0(){B.a8(this.a,!1).M("del")
return null},
$S:0}
C.ehV.prototype={
$0(){B.a8(this.a,!1).M("up")
return null},
$S:0}
C.ehW.prototype={
$0(){B.a8(this.a,!1).M("down")
return null},
$S:0}
C.ehZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ei_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ei4.prototype={
$0(){return this.a.a5O()},
$S:0}
C.edy.prototype={
$0(){var w=this.a
w.b1v()
w.awl(null)},
$S:0}
C.edx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ab(0,A.G,A.x.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.aY(m.e)
v=m.f
v.toString
v=new B.a3(A.aw,A.aC,A.w,B.a([w,B.aY(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.aY(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.aY(m.e)
q=m.f
q.toString
q=new B.a3(A.aw,A.aC,A.w,B.a([r,B.aY(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,B.bT(A.kf,new B.o(m.f==null?B.aY(m.e):p,p,p,p,p,r,A.n),A.bb),A.ao)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.edw(this.a,e.b,e.d,q),B.U(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bT(new B.am(A.W,p,A.a9,A.h,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bb)},
$S:449}
C.edw.prototype={
$1(d){var w=this
return w.a.byT(d,w.b,w.c,w.d)},
$S:z+23}
C.edl.prototype={
$0(){var w=this
if(w.b){w.a.LU(w.c)
return}if(w.d){w.a.a5M(w.c)
return}if(w.e){w.a.adX(w.c)
return}if(w.f)w.a.b20(w.c)},
$S:0}
C.edm.prototype={
$0(){this.a.LU(this.b)
return null},
$S:0}
C.edn.prototype={
$0(){return this.a.a_U(this.b.a)},
$S:0}
C.edo.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.edk(u,d,w.c,w.d))
v.Gp()
v.nD()
v.oB()},
$S:18}
C.edk.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.edp.prototype={
$1(d){return this.a.agk(this.b.a,d)},
$S:2}
C.edr.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fIP(w))u.a.LU(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b20(v)},
$S:0}
C.edq.prototype={
$0(){return this.a.a_U(this.b.a)},
$S:0}
C.eds.prototype={
$1(d){var w=this,v=w.a
v.n(new C.edj(w.b,d,w.c,w.d))
v.Gp()
v.nD()
v.oB()},
$S:18}
C.edj.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cN)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.edt.prototype={
$1(d){var w=this.a
w.n(new C.edi(this.b,d))
w.Gp()
w.nD()
w.oB()},
$S:237}
C.edi.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cN)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.edu.prototype={
$0(){var w=this.a
w.n(new C.edh(this.b))
w.Gp()
w.nD()
w.oB()},
$S:0}
C.edh.prototype={
$0(){this.a.r=C.h3n()},
$S:0}
C.edv.prototype={
$0(){return this.a.a_U(this.b.a)},
$S:0}
C.efp.prototype={
$0(){var w=this.a
return w.n(new C.efo(w))},
$S:0}
C.efo.prototype={
$0(){return this.a.y=!1},
$S:0}
C.efq.prototype={
$1(d){return this.a.ctN(this.b.a,d)},
$S:2}
C.eeu.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:172}
C.eev.prototype={
$1(d){return this.a.$1(new C.eet(this.b,d))},
$S:6}
C.eet.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eew.prototype={
$1(d){return this.a.$1(new C.ees(this.b,d))},
$S:6}
C.ees.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eex.prototype={
$1(d){return this.a.$1(new C.eer(this.b,d))},
$S:6}
C.eer.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eey.prototype={
$1(d){return this.a.$1(new C.eeq(this.b,d))},
$S:6}
C.eeq.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eez.prototype={
$1(d){return this.a.$1(new C.eep(this.b,d))},
$S:6}
C.eep.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eeA.prototype={
$1(d){return this.b.$1(new C.eeo(this.a,this.c))},
$S:9}
C.eeo.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eeB.prototype={
$1(d){return this.b.$1(new C.een(this.a,this.c))},
$S:9}
C.een.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eeC.prototype={
$1(d){var w=null,v=this.b,u=B.aY(d),t=v.Q===d,s=t?A.bk:A.cV
return B.aH(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eem(this.a,v,d),w,w,w,w,w,w,!1,A.ad)},
$S:448}
C.eem.prototype={
$0(){return this.a.$1(new C.eej(this.b,this.c))},
$S:0}
C.eej.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eeD.prototype={
$1(d){return this.a.$1(new C.eel(this.b,d))},
$S:1702}
C.eel.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.eeE.prototype={
$1(d){var w=null
return B.aH(w,B.p(w,w,A.h,w,w,new B.o(B.aY(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eek(this.a,this.b,d),w,w,w,w,w,w,!1,A.ad)},
$S:448}
C.eek.prototype={
$0(){return this.a.$1(new C.eei(this.b,this.c))},
$S:0}
C.eei.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eeF.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a8(w,!1).oP()}else w=!1
if(w){w=v.a.c
w.toString
B.a8(w,!1).eD()}v.a.apg()},
$S:0}
C.eeI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dJ.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.be,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.t6,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mD,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.a1,!0,n,B.aI(!1,m,!0,B.eq(new B.a5(48,48,new B.am(A.A,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a3(A.aw,A.aC,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ac)},
$S:139}
C.ech.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dJ.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.be,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.a1,!0,p,B.aI(!1,o,!0,B.eq(B.v(B.a([B.e5(A.A,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ab,B.d(q.e,p,p,p,p,p,p,A.jU,A.L,p,p)],x.p),A.m,p,A.b6,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a3(A.aw,A.aC,A.w,u,p,p),A.n),p,A.DS,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ac)},
$S:139}
C.egm.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aja,A.z,!0,w,!0,w,!1,w,A.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eo(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.egk(d),w,w),B.bL(A.pE,new C.egl(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.egk.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.egl.prototype={
$0(){var w=this.b.a.a
B.a8(this.a,!1).M(w)
return null},
$S:0}
C.cVF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dJ.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.eE.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dS.av(0,i)
v=B.m(22)
t=B.aq(A.aI,A.d.gL(C.ki(j.a.c.w)?D.te:M.mL),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gL(C.ki(j.a.c.w)?D.te:M.mL).j(0.18+w*0.12),A.J,32+w*10),D.a7q],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.aY,0.9,A.w,k,0,B.a([A.d.gL(C.ki(j.a.c.w)?D.te:M.mL).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.ki(j.a.c.w)?D.te:M.mL).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.w,k,0,B.a([m,A.d.gaj(C.ki(j.a.c.w)?D.te:M.mL).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ki(m)?D.te:M.mL
s=B.a([new B.ab(0,A.G,A.d.gL(C.ki(m)?D.te:M.mL).j(0.45+w*0.2),A.cs,18)],s)
m=x.p
l=B.a([p,B.e5(A.A,B.p(k,B.V(C.ki(j.a.c.w)?A.uA:A.pd,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a3(A.aw,A.aC,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.A,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ki(j.a.c.w)?D.te:M.mL).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h1,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eKf,A.L,k,k),A.av,B.d(j.gcoX(),k,k,k,k,k,k,D.eOI,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQu()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ki(j.a.c.w)?D.te:M.mL).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ab],m))}s.push(new C.Ih(A.wU,"Download PDF","pdf",A.da,j.HA(0),!1,k))
p=j.a.c
if(!p.z||p.gQu()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ih(A.kE,"Transfer to "+C.h3p(p==null?"":p),"transfer_hati",A.aS,j.HA(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.HA(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ih(D.br_,"Rename presentation","rename",A.cb,n,!1,k),A.ar,new C.Ih(A.afz,"Duplicate","duplicate",A.b3,j.HA(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ih(A.e6,"Delete presentation","delete",A.aE,j.HA(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.HA(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.HA(n)
s.push(B.dP(B.d8(B.bK(!1,E.aLj,k,k,!0,k,k,new C.cVE(d),k,B.fo(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.at,k,D.bje,k,k,k,k,k,A.k9,k,k)),n),new B.u(0,(1-p)*8)))
return B.e5(A.A,B.d8(B.aD(!1,A.a1,!0,k,B.p(k,B.bu(q,new B.am(A.W,k,A.a9,A.q,B.a([o,new B.C(D.bin,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.ao),A.h,k,A.SH,new B.o(A.aF,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
$S:44}
C.cVE.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.cW0.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.cW1.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cVC.prototype={
$1(d){var w=this.a
return w.n(new C.cVy(w))},
$S:23}
C.cVy.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cVD.prototype={
$1(d){var w=this.a
return w.n(new C.cVx(w))},
$S:51}
C.cVx.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cVB.prototype={
$0(){var w=this.a
return w.n(new C.cVz(w))},
$S:0}
C.cVz.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cVA.prototype={
$0(){var w=this.a.a.e
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.ej1.prototype={
$0(){return $.bgW=!$.bgW},
$S:0}
C.eiS.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQK())u.at2()},
$S:0}
C.ej0.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eiT.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eiU.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.at2()},
$S:0}
C.eiO.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.eiP.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eiQ.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eiR.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.G(w-1+v,v)},
$S:0}
C.eiZ.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.A,null,A.b_,A.q,w,null)},
$S:1703}
C.ej_.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hM)return new B.cW(e,!1,d,null)
w=this.a
return w.cn2(w.e,d,e)},
$S:452}
C.eiV.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fl((1-v.gq(0))*1.5708)
return B.fp(A.A,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiW.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jz((1-v.gq(0))*1.5708)
return B.fp(A.A,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiX.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fl(v.gq(0)*0.8)
w.jz(v.gq(0)*0.35)
return B.fp(A.A,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.eiY.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fl(-v.gq(0)*1.2)
return B.fp(A.a7,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.ej2.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWS().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWS().x
t===$&&B.c()
return new C.aYV(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Hh(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:548}
C.ej4.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bR,x.w).w.a.a*0.55)w.at2()
else w.cbW()},
$S:51}
C.ej3.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fol.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:453}
C.fov.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eo(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.fos(d),w,w),B.bK(!1,D.f4W,w,w,!0,w,w,new C.fot(d,this.b,v),w,w),B.bL(A.aLz,new C.fou(d,v,this.c),w)],x.p),w,w,L.rr,new B.a5(320,w,t,w),w,w,w,w,D.f6g,w)},
$S:20}
C.fos.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fot.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
C.fJt(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fou.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
t=u.b
w=2
return B.b(C.aN0(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aMq(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fok.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c9p.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:631}
C.foq.prototype={
$1(d){return d.ac()},
$S:z+14}
C.eZa.prototype={
$1(d){return C.fJr(C.U8(B.a_(d,x.N,x.z)),this.a)},
$S:z+96}
C.fwL.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:93}
C.fwM.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d8(B.e5(A.A,D.fiH,0.94+w*0.06,null,null),w)},
$S:451}
C.fwN.prototype={
$1(d){var w=this
return new C.Ua(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eiy.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eiu.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eix.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Ub(u,this.b,w.gaKg(),v,null)},
$S:z+99}
C.eiv.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eiw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eiz.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eiA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eiD.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eiE.prototype={
$0(){var w=this.a
return w.n(new C.eiC(w))},
$S:0}
C.eiC.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eiF.prototype={
$0(){var w=this.a
return w.n(new C.eiB(w))},
$S:0}
C.eiB.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eiG.prototype={
$1(d){return this.a.bDs(d,this.b)},
$S:z+100}
C.eit.prototype={
$0(){var w=this.a
return w.n(new C.eis(w,this.b))},
$S:0}
C.eis.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eiH.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eiI.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eiJ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eiK.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eiL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fE(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.H(x.q).f.P(D.exl)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecb.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.eca())},
$S:0}
C.eca.prototype={
$0(){},
$S:0}
C.ecc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fu()},
$S:8}
C.ec7.prototype={
$1(d){return this.a.n(new C.ec6())},
$S:2}
C.ec6.prototype={
$0(){},
$S:0}
C.ec8.prototype={
$1(d){return this.a.aVe()},
$S:2}
C.ec9.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eiN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.eiM(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eiM.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fiF.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.en(new B.k3(this.c,new C.fiE(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:215}
C.fiE.prototype={
$3(d,e,f){return new C.Hh(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fiG.prototype={
$1(d){var w=null
return B.nX(!1,B.au(new C.bre(this.a,this.b,w),w,w,w),w,x.z)},
$S:313}
C.fiK.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gm5(),$async$$0)
case 3:w=4
return B.b(B.bN(A.p2,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gm5(),$async$$0)
case 5:s=$.aT.ag$.x.h(0,t.a)
r=s==null?null:s.gb6()
if(!(r instanceof B.q2))throw B.R("Could not draw the slide.")
u=r.lQ(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1706}
C.fiL.prototype={
bfE(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hf(A.fN),$async$$1)
case 3:r=f
if(r==null)throw B.R("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hE([J.f3(A.dD.gaN(r))],"image/png"))
t.toString
s=Ai.fAx(t)
w=4
return B.b(new B.py(s,"load",!1,x.ev).gL(0).cJ(0,A.ku),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bfE(d)},
$S:1707}
C.fiH.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:142}
C.fiI.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fC(0)},
$S:142}
C.fiJ.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eTw.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eGX,A.L,w,w)},
$S:1708}
C.eTx.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.mt(A.bj,w,A.dI,8,w,e===0?w:e,w),A.ao)},
$S:612}
C.e2B.prototype={
$1(d){this.a.XY()
return null},
$S:13}
C.e2z.prototype={
$0(){return this.a.e=D.ben},
$S:0}
C.e2A.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.cbY.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.cbZ.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aJ3.prototype
w.bq6=w.p
w=C.aIx.prototype
w.bpz=w.p
w=C.aIj.prototype
w.bpk=w.p
w=C.aIw.prototype
w.bpy=w.p
w=C.aJ1.prototype
w.bq4=w.p
w=C.aKm.prototype
w.brz=w.p
w=C.aHe.prototype
w.boc=w.p
w=C.aJg.prototype
w.bqj=w.p
w=C.aJh.prototype
w.bqk=w.p
w=C.b_B.prototype
w.bkS=w.azj})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hOl","al9",104)
v(C.aGe.prototype,"gbY1","WZ",0)
var r
u(r=C.av_.prototype,"gcoi","coj",38)
v(r,"gbYM","aaM",0)
v(r=C.auW.prototype,"gaU1","CT",3)
v(r,"gbYJ","bYK",3)
v(r,"gatk","wN",0)
v(r,"gatl","Hi",0)
t(C,"hOK","hkE",105)
v(C.aAY.prototype,"gc_F","c_G",3)
s(C,"hOV",0,null,["$4$paper$photo$request$template"],["fpL"],106,0)
s(C,"hOU",0,null,["$5$doc$history$instruction$photo$template"],["byi"],107,0)
v(r=C.aBg.prototype,"gc0m","Hx",0)
v(r,"gbCV","US",0)
v(r,"gc0p","abt",0)
v(r,"gc0o","XK",0)
v(r,"gaUU","D7",0)
v(C.aBk.prototype,"gc0u","XM",0)
v(r=C.aCD.prototype,"gaV6","O7",0)
v(r,"gcgB","aZl",3)
v(r,"gcpG","axA",86)
v(r,"gbGz","a7G",0)
v(r,"gc0V","zu",0)
v(r=C.aEy.prototype,"gcaK","Z4",0)
v(r,"gcaS","Z7",0)
v(r,"gbw1","a6b",0)
v(r,"gc0Z","abF",0)
v(C.aEx.prototype,"gc1_","abG",0)
v(C.ayC.prototype,"gbv0","a5Z",0)
v(C.ax2.prototype,"gc10","XX",0)
w(C,"hP7","hN2",12)
w(C,"hP5","hK0",12)
w(C,"hP6","hM2",12)
v(r=C.aBx.prototype,"gcsI","csJ",3)
v(r,"gceS","ceT",3)
u(r,"gDd","ack",7)
v(r,"gbAz","aos",3)
u(r,"gDe","aWn",7)
v(r,"gc37","ac1",0)
v(r,"gc1Z","ac0",0)
v(r,"gc5f","acl",0)
v(r,"gbCS","a7h",0)
v(r,"gc67","Yv",0)
v(r,"gc68","acC",0)
v(r,"gc6F","acJ",0)
v(r,"gc5s","aco",0)
v(r,"gbGI","a7K",0)
v(r,"gaNF","aNG",3)
v(r,"gaMS","aMT",3)
v(r,"gaIB","aIC",3)
v(r,"gaMR","apg",3)
u(r,"gbvh","bvi",80)
v(r,"gax9","b1j",3)
v(r,"gc20","c21",3)
v(r,"gbRw","bRx",3)
v(r,"gbFi","bFj",3)
v(r=C.aBA.prototype,"gcrD","crE",3)
v(r,"gcri","crj",3)
t(C,"hP8","hNj",2)
v(r=C.aBy.prototype,"gc16","HC",0)
v(r,"gciv","Py",0)
v(r,"gc13","HB",0)
v(r,"gctY","a0w",0)
v(r,"gc6R","acQ",0)
v(C.aBw.prototype,"gc17","aVe",3)
v(r=C.aBz.prototype,"gbHt","a7U",0)
u(r,"gc14","c15",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.nu,C.Q4,C.bDC,C.bC8,C.cra,C.cr8,C.bJy,C.b5d,C.cr9,C.bAJ,C.cbS,C.cbQ,C.cbR,C.cbP,C.aqe,C.cbO,C.bKr,C.nV,C.aC8,C.jb,C.nh,C.a5T,C.yz,C.l_,C.o6,C.lN,C.yB,C.nl,C.a60,C.aoD,C.aYW,C.e20,C.kX,C.Dv,C.ek,C.iQ,C.Dm,C.wN,C.ey,C.lr,C.hT,C.jt,C.a61,C.acX,C.aYX,C.b_B,C.a0X])
u(B.kz,[C.cyZ,C.bUz,C.fdS,C.cAu,C.czR,C.fjo,C.dQ2,C.dQ1,C.e2E,C.e2D,C.fkN,C.f_g,C.f_h,C.c7N,C.c7O,C.c7P,C.e79,C.eDc,C.eCA,C.eCz,C.eDD,C.eDa,C.eD3,C.eDm,C.eE2,C.f62,C.eJU,C.eJT,C.eKm,C.e23,C.foh,C.dLM,C.fuv,C.fl8,C.c9h,C.c9f,C.c9k,C.flD,C.flE,C.flF,C.flG,C.c91,C.c92,C.dz0,C.c8Z,C.flC,C.eR4,C.dJY,C.c8S,C.e1K,C.fjd,C.efM,C.ega,C.eg7,C.eg6,C.egh,C.egg,C.ehM,C.ehL,C.eg0,C.eg_,C.ecA,C.edK,C.egJ,C.ei3,C.ei2,C.edx,C.eeI,C.ech,C.cVF,C.eiZ,C.ej_,C.eiV,C.eiW,C.eiX,C.eiY,C.ej2,C.c9p,C.eiy,C.eiJ,C.cbZ])
u(B.i3,[C.cz_,C.cz0,C.bKs,C.fbG,C.bUy,C.bUB,C.fr1,C.eS2,C.eRU,C.eS9,C.eZb,C.eZc,C.fdT,C.fdR,C.fqz,C.fbm,C.frn,C.cAk,C.cAp,C.cAr,C.cAn,C.cAs,C.cAl,C.cAt,C.cAg,C.cAd,C.cAc,C.cAj,C.czM,C.czK,C.fip,C.fiq,C.f2x,C.fjp,C.fjv,C.f1A,C.c46,C.fin,C.fio,C.fdf,C.fdg,C.fju,C.fjq,C.fjs,C.fjt,C.fjr,C.fuN,C.fdj,C.fdk,C.fdn,C.fdo,C.fdr,C.fds,C.fw1,C.f_H,C.fwc,C.e5W,C.e5X,C.e5Y,C.e5E,C.e5Q,C.e5R,C.e5T,C.c7M,C.c7K,C.c7L,C.fj4,C.fj6,C.fj5,C.f_i,C.f_j,C.fwh,C.e7e,C.e7f,C.e76,C.e77,C.e7a,C.e7b,C.fwx,C.eE3,C.eDt,C.eDd,C.eDq,C.eCv,C.eCw,C.eCx,C.eCB,C.eCC,C.eDT,C.eE_,C.eE1,C.eDC,C.eDE,C.eDI,C.eDJ,C.eDK,C.eDO,C.eDF,C.eDG,C.eCN,C.eCO,C.eCP,C.eCQ,C.eCR,C.eCS,C.eCT,C.eCU,C.eCV,C.eC8,C.eC9,C.eCa,C.eCb,C.eCd,C.eCe,C.eCH,C.eCI,C.eCJ,C.eCK,C.eCL,C.eCi,C.eCj,C.eCk,C.eCl,C.eD2,C.eDl,C.fgs,C.fgr,C.c98,C.f61,C.fod,C.fo6,C.fo9,C.fm6,C.fm7,C.fm8,C.fgz,C.fgy,C.fgx,C.fgv,C.f_d,C.f_e,C.f_f,C.fwJ,C.eJW,C.eJX,C.eJQ,C.eJK,C.eKf,C.eKg,C.eKi,C.eKj,C.eKe,C.fwI,C.eJB,C.f5h,C.e22,C.fof,C.fog,C.foi,C.fob,C.foc,C.fvU,C.dbq,C.dbw,C.e21,C.eWL,C.eWN,C.eWM,C.eWK,C.fhD,C.fhF,C.eYK,C.fnI,C.fnJ,C.fnK,C.fnV,C.fo_,C.fo0,C.fo1,C.fo2,C.fo3,C.fo4,C.fo5,C.fnL,C.fnM,C.fnN,C.fnO,C.fnP,C.fnQ,C.fnR,C.fnS,C.fnT,C.fnU,C.fnW,C.fnX,C.fnY,C.fnZ,C.fft,C.f53,C.f52,C.foo,C.dLN,C.dLL,C.eIL,C.c3I,C.c3K,C.fux,C.d10,C.d12,C.fuw,C.fuu,C.fwH,C.fl4,C.d0B,C.fdv,C.fdw,C.c96,C.c97,C.c95,C.c8W,C.c8X,C.c8T,C.c8U,C.c8V,C.c9n,C.c9i,C.c9d,C.c9e,C.c9g,C.c9j,C.c9l,C.flH,C.c90,C.c93,C.c94,C.c9a,C.c9b,C.fow,C.fnC,C.c9_,C.c8Y,C.flB,C.f7n,C.c8R,C.eGv,C.faa,C.eip,C.eeP,C.eeQ,C.egp,C.egd,C.ege,C.eec,C.eia,C.eib,C.eic,C.edB,C.efT,C.efV,C.efv,C.efs,C.eeL,C.eeM,C.efC,C.edD,C.efO,C.efP,C.efN,C.efR,C.efQ,C.eg8,C.eg9,C.egb,C.eg4,C.edW,C.edT,C.egi,C.edL,C.ei9,C.ecj,C.edO,C.edN,C.ed1,C.ed6,C.ed4,C.ed2,C.eih,C.eii,C.eij,C.eig,C.ehO,C.ehN,C.ehH,C.ehJ,C.ehz,C.ei7,C.ei5,C.ecr,C.ecn,C.eeJ,C.eda,C.ecC,C.ecB,C.ecY,C.ecZ,C.eea,C.edc,C.edg,C.eg1,C.ehA,C.ehB,C.ehC,C.ehD,C.edF,C.edG,C.edH,C.efb,C.ee6,C.edZ,C.ee5,C.efl,C.efm,C.eh8,C.eha,C.ehu,C.ehw,C.ehb,C.ehc,C.ed8,C.eeO,C.eeN,C.ehY,C.edw,C.edo,C.edp,C.eds,C.edt,C.efq,C.eeu,C.eev,C.eew,C.eex,C.eey,C.eez,C.eeA,C.eeB,C.eeC,C.eeD,C.eeE,C.egm,C.cVC,C.cVD,C.ej4,C.fol,C.fov,C.fok,C.foq,C.eZa,C.fwL,C.fwM,C.fwN,C.eix,C.eiG,C.ecc,C.ec7,C.ec8,C.fiF,C.fiE,C.fiG,C.fiL,C.fiH,C.fiI,C.eTw,C.eTx,C.e2B,C.cbY])
u(B.jl,[C.cz1,C.eRZ,C.eS3,C.eS4,C.eS_,C.eS0,C.eS1,C.eRS,C.eRT,C.eRV,C.eRW,C.eS8,C.eS7,C.eRY,C.eRX,C.eS5,C.eS6,C.eSb,C.eSc,C.eSa,C.cAm,C.cAq,C.cAo,C.cAe,C.cAf,C.cAh,C.cAa,C.cAb,C.cAi,C.cA9,C.cA8,C.cA7,C.czB,C.czA,C.czD,C.czL,C.czE,C.czC,C.czG,C.czH,C.czI,C.czF,C.czJ,C.czN,C.czO,C.czP,C.czQ,C.fdd,C.fde,C.fdb,C.fdc,C.dYE,C.dYC,C.dYD,C.dYF,C.dYG,C.dQ0,C.fdh,C.fdi,C.fdl,C.fdm,C.fdp,C.fdq,C.e2C,C.flb,C.fla,C.e5V,C.e5U,C.e5y,C.e5u,C.e5F,C.e5G,C.e5H,C.e5A,C.e5B,C.e5C,C.e5D,C.e5z,C.e5w,C.e5x,C.e5N,C.e5O,C.e5M,C.e5P,C.e5L,C.e5K,C.e5J,C.e5S,C.e5I,C.e5v,C.e7d,C.e71,C.e72,C.e78,C.e73,C.e75,C.e74,C.e7c,C.eCW,C.eDj,C.eCF,C.eCG,C.eCD,C.eCE,C.eDp,C.eDo,C.eDn,C.eDs,C.eDr,C.eCu,C.eCy,C.eCt,C.eCs,C.eCp,C.eCr,C.eCq,C.eE0,C.eDU,C.eDS,C.eDV,C.eDR,C.eDW,C.eDQ,C.eDX,C.eDY,C.eDZ,C.eDP,C.eDB,C.eDw,C.eDH,C.eDA,C.eDL,C.eDz,C.eDM,C.eDy,C.eDN,C.eDx,C.eDg,C.eDf,C.eDh,C.eDe,C.eDi,C.eD8,C.eD7,C.eD9,C.eD6,C.eD5,C.eD4,C.eCc,C.eC7,C.eCm,C.eCh,C.eCn,C.eCg,C.eCo,C.eCf,C.eDb,C.eD_,C.eCZ,C.eD0,C.eCY,C.eD1,C.eCX,C.eDk,C.eDv,C.eDu,C.eCM,C.fo8,C.foa,C.foe,C.fgw,C.fiY,C.fiW,C.fiX,C.eJY,C.eJZ,C.eJV,C.eJP,C.eJO,C.eJR,C.eJS,C.eJE,C.eJF,C.eJH,C.eJI,C.eJJ,C.eJG,C.eJL,C.eKb,C.eKc,C.eKa,C.eKd,C.eK9,C.eK8,C.eK7,C.eKh,C.eK6,C.eK5,C.eK4,C.eKk,C.eK3,C.eKl,C.eK2,C.eK1,C.eJM,C.eJN,C.eK0,C.eK_,C.eJx,C.eJy,C.eJz,C.eJA,C.eJw,C.eJC,C.eJD,C.dbp,C.dbr,C.dbu,C.dbv,C.dbt,C.dbs,C.fhE,C.ffu,C.c3J,C.c3L,C.d0U,C.d0Z,C.d1_,C.d0Y,C.d0X,C.d11,C.d0W,C.d0V,C.d13,C.fut,C.d7p,C.d7q,C.d7r,C.fdt,C.fdu,C.c9o,C.ecd,C.ece,C.ecf,C.ecg,C.f7l,C.f7m,C.dK_,C.dJZ,C.cZ9,C.cZ8,C.eir,C.eiq,C.eeR,C.ehx,C.ein,C.egn,C.eid,C.eie,C.eio,C.efw,C.edz,C.edA,C.efU,C.efu,C.efr,C.eft,C.efx,C.efy,C.efz,C.efA,C.efB,C.efD,C.edE,C.efG,C.efH,C.efI,C.efJ,C.efK,C.efL,C.efF,C.efS,C.eg5,C.eg3,C.egc,C.efE,C.edU,C.edV,C.edX,C.egf,C.egj,C.ecy,C.edS,C.edQ,C.egr,C.edM,C.egq,C.edC,C.eed,C.ei8,C.ehy,C.ecz,C.ecw,C.ecm,C.eci,C.eck,C.edP,C.ed0,C.ed5,C.ed3,C.ed_,C.eg2,C.eik,C.ehK,C.ehF,C.ehG,C.ehI,C.eeH,C.eeG,C.ei6,C.ecp,C.ecq,C.ecs,C.ect,C.ecx,C.eco,C.ego,C.eif,C.eeK,C.ed9,C.ecl,C.eeb,C.ecu,C.ecD,C.ecE,C.ecF,C.ecQ,C.ecT,C.ecU,C.ecV,C.ecW,C.ecX,C.ecG,C.ecH,C.ecI,C.ecJ,C.ecK,C.ecL,C.ecM,C.ecN,C.ecO,C.ecP,C.ecR,C.ecS,C.ee9,C.ee8,C.ee7,C.ecv,C.edd,C.edb,C.ede,C.edf,C.edR,C.efY,C.efZ,C.efW,C.efX,C.ehE,C.edJ,C.edI,C.efa,C.ef9,C.efc,C.ef8,C.efd,C.ef7,C.efe,C.ef6,C.eff,C.ef5,C.efg,C.ef4,C.efh,C.ef3,C.efi,C.ef2,C.eeW,C.eeX,C.eeY,C.eeV,C.eeZ,C.eeU,C.ef_,C.eeT,C.ef0,C.eeS,C.ef1,C.ee3,C.ee4,C.edY,C.ee_,C.ee0,C.ee1,C.ee2,C.eil,C.eim,C.efk,C.efj,C.efn,C.egK,C.egL,C.egM,C.egX,C.eh7,C.ehi,C.ehp,C.ehq,C.ehr,C.ehs,C.eht,C.egN,C.egO,C.egP,C.egQ,C.egR,C.egS,C.egT,C.egU,C.egV,C.egW,C.egY,C.egZ,C.eh_,C.eh0,C.eh1,C.eh2,C.eh3,C.eh4,C.eh5,C.egA,C.eh6,C.egI,C.egH,C.eh9,C.egG,C.egw,C.ehv,C.egF,C.egv,C.egt,C.egE,C.egu,C.egs,C.ehd,C.egD,C.ehe,C.ehf,C.ehg,C.ehh,C.egC,C.ehj,C.ehk,C.ehl,C.egB,C.ehm,C.egz,C.ehn,C.egy,C.eho,C.egx,C.ed7,C.ehR,C.ehQ,C.ehS,C.ehP,C.eeg,C.eef,C.eeh,C.eee,C.ei1,C.ehX,C.ei0,C.ehT,C.ehU,C.ehV,C.ehW,C.ehZ,C.ei_,C.ei4,C.edy,C.edl,C.edm,C.edn,C.edk,C.edr,C.edq,C.edj,C.edi,C.edu,C.edh,C.edv,C.efp,C.efo,C.eet,C.ees,C.eer,C.eeq,C.eep,C.eeo,C.een,C.eem,C.eej,C.eel,C.eek,C.eei,C.eeF,C.egk,C.egl,C.cVE,C.cW0,C.cW1,C.cVy,C.cVx,C.cVB,C.cVz,C.cVA,C.ej1,C.eiS,C.ej0,C.eiT,C.eiU,C.eiO,C.eiP,C.eiQ,C.eiR,C.ej3,C.fos,C.fot,C.fou,C.eiu,C.eiv,C.eiw,C.eiz,C.eiA,C.eiD,C.eiE,C.eiC,C.eiF,C.eiB,C.eit,C.eis,C.eiH,C.eiI,C.eiK,C.eiL,C.ecb,C.eca,C.ec6,C.ec9,C.eiN,C.eiM,C.fiK,C.fiJ,C.e2z,C.e2A])
t(C.aOk,B.G)
u(B.mf,[C.a1T,C.aut,C.ata,C.wL,C.wO,C.kE,C.rE,C.Ap,C.qS,C.vf,C.apc,C.Hi,C.aoC,C.u5,C.m7,C.hn,C.a6C])
u(C.bJy,[C.crb,C.bJz])
u(C.cbS,[C.cbW,C.aqd])
t(C.cbV,C.cbQ)
t(C.cbU,C.cbP)
t(C.cbX,C.cbU)
t(C.cbT,C.cbR)
t(C.cbN,C.cbO)
t(C.b6K,B.om)
t(C.cla,B.asD)
t(C.a6p,B.wy)
t(C.aSC,B.dC)
t(C.axW,B.ary)
u(B.af,[C.ZW,C.WI,C.WG,C.anQ,C.TX,C.U0,C.YZ,C.Zu,C.Zt,C.aB9,C.XR,C.LR,C.Xp,C.XK,C.alS,C.aFW,C.Tb,C.awO,C.a5J,C.Mh,C.awb,C.Ih,C.YB,C.Ua,C.Ub,C.aBv,C.aoH,C.a5K])
u(B.ag,[C.aGe,C.av_,C.auW,C.aAY,C.aBg,C.aBk,C.aCD,C.aEy,C.aEx,C.aJ3,C.ayC,C.aIx,C.ax2,C.bcz,C.aIj,C.aKm,C.aIw,C.bat,C.aJ1,C.aJg,C.aHe,C.b9f,C.aJh,C.aBy,C.bgV,C.aBw,C.aBz,C.bgD])
u(B.at,[C.auY,C.ab6,C.aaw,C.bfI,C.ab9,C.acN,C.aYy,C.boR,C.aYS,C.bid,C.bnr,C.aWN,C.aYV,C.abc,C.abu,C.aYT,C.Hh,C.aWQ,C.b9u,C.NV,C.Io,C.be6,C.be5,C.bre])
u(B.FS,[C.b8X,C.bqf,C.aGy,C.bbC,C.bnP])
u(B.n7,[C.b8W,C.b5v,C.bnM,C.b8t,C.bc_,C.bec,C.bb5,C.bbX,C.bbE,C.bko,C.b6C,C.b6f,C.brb,C.boe,C.bnn,C.baZ,C.aYQ,C.bmn,C.bnk])
t(C.bgA,C.aJ3)
t(C.bfX,C.aIx)
t(C.bfK,C.aIj)
t(C.bqI,C.aKm)
t(C.bfU,C.aIw)
t(C.bgy,C.aJ1)
t(C.btu,C.aJg)
t(C.aBx,C.btu)
t(C.b9g,C.aHe)
t(C.aBA,C.aJh)
t(C.br2,B.iJ)
t(C.a6B,B.kd)
t(C.cc_,C.b_B)
t(C.afR,C.a0X)
u(B.VJ,[C.aOa,C.aPE])
t(C.au5,C.aOa)
w(C.aJ3,B.c7)
w(C.aIx,B.c7)
w(C.aIj,B.c7)
w(C.aIw,B.c7)
w(C.aJ1,B.c7)
w(C.aKm,B.c7)
w(C.aHe,B.eJ)
w(C.aJg,B.c7)
v(C.btu,B.ev)
w(C.aJh,B.c7)})()
B.kf(b.typeUniverse,JSON.parse('{"aOU":{"hw":["aOU"]},"nu":{"aOU":[],"hw":["aOU"]},"aOk":{"G":["Q4"],"G.E":"Q4"},"b6K":{"om":[]},"a6p":{"wy":[],"nP":[]},"aSC":{"dC":[],"cs":[],"r":[]},"axW":{"aP":[],"d1":["aP"],"aN":[],"cq":[]},"ZW":{"af":[],"r":[]},"aGe":{"ag":["ZW"]},"WI":{"af":[],"r":[]},"WG":{"af":[],"r":[]},"av_":{"ag":["WI"]},"auW":{"ag":["WG"]},"auY":{"at":[],"r":[]},"anQ":{"af":[],"r":[]},"aAY":{"ag":["anQ"]},"ab6":{"at":[],"r":[]},"aaw":{"at":[],"r":[]},"ab9":{"at":[],"r":[]},"acN":{"at":[],"r":[]},"bfI":{"at":[],"r":[]},"TX":{"af":[],"r":[]},"aBg":{"ag":["TX"]},"aYy":{"at":[],"r":[]},"b8X":{"aA":[]},"b8W":{"aA":[]},"bqf":{"aA":[]},"b5v":{"aA":[]},"bnM":{"aA":[]},"U0":{"af":[],"r":[]},"aBk":{"ag":["U0"]},"b8t":{"aA":[]},"YZ":{"af":[],"r":[]},"aCD":{"ag":["YZ"]},"bc_":{"aA":[]},"Zu":{"af":[],"r":[]},"Zt":{"af":[],"r":[]},"aB9":{"af":[],"r":[]},"XR":{"af":[],"r":[]},"aEy":{"ag":["Zu"]},"aEx":{"ag":["Zt"]},"bgA":{"ag":["aB9"]},"bec":{"aA":[]},"ayC":{"ag":["XR"]},"boR":{"at":[],"r":[]},"aYS":{"at":[],"r":[]},"bid":{"at":[],"r":[]},"LR":{"af":[],"r":[]},"Xp":{"af":[],"r":[]},"bfX":{"ag":["LR"]},"bnr":{"at":[],"r":[]},"bb5":{"aA":[]},"aWN":{"at":[],"r":[]},"ax2":{"ag":["Xp"]},"XK":{"af":[],"r":[]},"bcz":{"ag":["XK"]},"bbX":{"aA":[]},"bbE":{"aA":[]},"bko":{"aA":[]},"b6C":{"aA":[]},"b6f":{"aA":[]},"brb":{"aA":[]},"boe":{"aA":[]},"bnn":{"aA":[]},"baZ":{"aA":[]},"alS":{"af":[],"r":[]},"aYV":{"at":[],"r":[]},"bfK":{"ag":["alS"]},"abc":{"at":[],"r":[]},"abu":{"at":[],"r":[]},"aFW":{"af":[],"r":[]},"Tb":{"af":[],"r":[]},"Hh":{"at":[],"r":[]},"awO":{"af":[],"r":[]},"a5J":{"af":[],"r":[]},"aYT":{"at":[],"r":[]},"aYQ":{"aA":[]},"bqI":{"ag":["aFW"]},"aGy":{"aA":[]},"bfU":{"ag":["Tb"]},"bat":{"ag":["awO"]},"bgy":{"ag":["a5J"]},"aWQ":{"at":[],"r":[]},"bbC":{"aA":[]},"bmn":{"aA":[]},"bnk":{"aA":[]},"awb":{"af":[],"r":[]},"Ih":{"af":[],"r":[]},"YB":{"af":[],"r":[]},"Io":{"at":[],"r":[]},"Mh":{"af":[],"r":[]},"aBx":{"ag":["Mh"],"ev":[]},"b9g":{"ag":["awb"]},"b9u":{"at":[],"r":[]},"b9f":{"ag":["Ih"]},"NV":{"at":[],"r":[]},"aBA":{"ag":["YB"]},"bnP":{"aA":[]},"be6":{"at":[],"r":[]},"be5":{"at":[],"r":[]},"Ua":{"af":[],"r":[]},"Ub":{"af":[],"r":[]},"aBv":{"af":[],"r":[]},"aoH":{"af":[],"r":[]},"aBy":{"ag":["Ua"]},"bgV":{"ag":["Ub"]},"aBw":{"ag":["aBv"]},"br2":{"iJ":[]},"aBz":{"ag":["aoH"]},"bre":{"at":[],"r":[]},"a5K":{"af":[],"r":[]},"bgD":{"ag":["a5K"]},"a6B":{"kd":["fn<eE>"],"k0":["fn<eE>"]},"afR":{"a0X":[]},"aOa":{"iU":[],"f6":[]},"au5":{"iU":[],"f6":[]},"aPE":{"iU":[],"f6":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.az
return{bu:w("K8"),U:w("uN<px>"),bz:w("x"),M:w("f8<n>"),bo:w("jo"),g7:w("KD"),gc:w("aw<il?>"),bq:w("aw<~>"),cc:w("a2X"),fS:w("CO"),an:w("ajt"),bm:w("P<Q4>"),X:w("P<ag6>"),f3:w("P<aOU>"),aK:w("P<mO>"),V:w("P<ab>"),O:w("P<x>"),fA:w("P<li>"),d5:w("P<aw<br<I,+icon3d,picture(n?,n?)>>>"),bH:w("P<aw<dz>>"),fG:w("P<aw<~>>"),aF:w("P<mU>"),cd:w("P<ak<jb>>"),ez:w("P<a1<n,aB>>"),d:w("P<a1<n,@>>"),B:w("P<m3>"),h:w("P<jb>"),gE:w("P<yz>"),k:w("P<nV>"),g:w("P<lr>"),D:w("P<hT>"),u:w("P<ey>"),m:w("P<u5>"),i:w("P<hn>"),aC:w("P<a60>"),o:w("P<yB>"),e3:w("P<aB>"),dN:w("P<u>"),v:w("P<hz>"),cR:w("P<iH>"),J:w("P<j3>"),gx:w("P<oF<n>>"),f2:w("P<+(a0,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(O,O)>"),ek:w("P<+(I,n)>"),n:w("P<+(I,I)>"),r:w("P<cK>"),s:w("P<n>"),aS:w("P<iJ>"),p:w("P<r>"),eR:w("P<f6>"),fT:w("P<b5d>"),bx:w("P<aC8>"),gz:w("P<acX>"),x:w("P<O>"),t:w("P<I>"),dS:w("P<aA?>"),bA:w("P<u?>"),Z:w("P<I?>"),cA:w("P<cf>"),A:w("co<ag<af>>"),gL:w("ak<nV>"),R:w("ak<hT>"),j:w("ak<@>"),bW:w("ak<I>"),e:w("br<I,+icon3d,picture(n?,n?)>"),P:w("a1<n,@>"),f:w("a1<@,@>"),gI:w("a1<I,+icon3d,picture(n?,n?)>"),bR:w("J<hn,r>"),eC:w("J<nl,n>"),cT:w("J<jt,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<I,pb>"),gh:w("J<m7,jd<m7>>"),w:w("iE"),ei:w("il"),g2:w("qI"),fB:w("Dm"),b6:w("yz"),gX:w("a5T"),dt:w("l_"),ea:w("nV"),bt:w("lr"),I:w("hT"),F:w("ey"),fO:w("m7"),ff:w("u5"),fP:w("hn"),Q:w("vf"),dO:w("aoD"),a:w("cp"),C:w("aB"),dw:w("aqe"),di:w("a6C"),Y:w("eE"),fz:w("+(n,n)"),dL:w("+(I,I)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DP"),dB:w("dy<u>"),bJ:w("dy<n>"),_:w("dW<n>"),N:w("n"),fw:w("px"),bO:w("ap"),K:w("bl<u>"),b:w("bl<O>"),E:w("dz"),W:w("cx<n>"),ac:w("cx<I>"),ex:w("k3<lr>"),cI:w("k3<n>"),cl:w("k3<O>"),b4:w("a4<kX>"),a8:w("a4<lN>"),fR:w("a4<+(n,n)>"),co:w("e3<u>"),l:w("r"),b2:w("bP<~>"),ev:w("py<dR>"),dT:w("be<~>"),cQ:w("axW"),q:w("mE"),y:w("S"),gR:w("O"),z:w("@"),S:w("I"),at:w("b8?"),gw:w("ak<a1<n,@>>?"),aT:w("ak<hT>?"),c:w("ak<@>?"),aP:w("il?"),af:w("hT?"),go:w("aYX?"),a6:w("a61?"),cK:w("aB?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bE2=new B.ad(A.el,18,A.c,null,null,null)
D.aOh=new B.bI(A.aw,null,null,D.bE2,null)
D.aOq=new B.d6(0,-0.15)
D.aOs=new B.d6(0.62,0)
D.aOv=new B.d6(-0.35,-0.45)
D.aOF=new B.d6(0.9,-0.85)
D.aGr=new B.b1(30,30)
D.aPV=new B.bv(D.aGr,D.aGr,A.h0,A.h0)
D.aQ8=new B.ay(A.b3,1,A.r,-1)
D.b71=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aQk=new B.ay(D.b71,1,A.r,-1)
D.aQw=new B.ay(A.aB,1.5,A.r,-1)
D.aQB=new B.ay(A.b3,1.6,A.r,-1)
D.aQR=new B.ay(A.aB,1.4,A.r,-1)
D.aSb=new B.o(null,null,null,null,null,K.F6,A.a6)
D.bI2=new B.a3(A.a3,A.a7,A.w,G.a_B,null,null)
D.aSj=new B.o(null,null,null,null,null,D.bI2,A.a6)
D.a7h=new B.o(A.aF,null,null,A.pP,null,null,A.n)
D.b1N=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b7_=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cEq=w([D.b1N,D.b7_],x.O)
D.dWm=new B.bR(A.A,0.5,A.w,null,0,D.cEq,null,null)
D.aSB=new B.o(null,null,null,null,null,D.dWm,A.a6)
D.TY=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aR4=new B.c1(N.vN,A.X,A.X,A.X)
D.aSD=new B.o(D.TY,null,D.aR4,null,null,null,A.n)
D.bJP=new B.a3(A.a3,A.a7,A.w,A.NL,null,null)
D.aSJ=new B.o(null,null,null,null,null,D.bJP,A.a6)
D.a8B=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aSL=new B.o(D.a8B,null,null,A.r6,null,null,A.n)
D.aSQ=new B.o(A.jC,null,null,null,null,null,A.a6)
D.aRa=new B.c1(A.yQ,A.X,A.X,A.X)
D.aST=new B.o(Y.a9v,null,D.aRa,A.ml,null,null,A.n)
D.CA=new B.o(A.e4,null,null,null,null,null,A.a6)
D.aSZ=new B.o(null,null,null,null,null,E.uT,A.a6)
D.cIZ=w([E.aaa,A.bX],x.O)
D.bJq=new B.a3(A.aY,A.b1,A.w,D.cIZ,null,null)
D.aT2=new B.o(null,null,null,A.ml,null,D.bJq,A.n)
D.cSS=w([A.bk,A.e4,A.jA],x.O)
D.YP=new B.a3(A.aw,A.aC,A.w,D.cSS,null,null)
D.aTe=new B.o(null,null,null,null,null,D.YP,A.n)
D.aTf=new B.o(D.a8B,null,null,A.km,null,null,A.n)
D.c9N=w([A.dv,A.bk],x.O)
D.bJh=new B.a3(A.aw,A.aC,A.w,D.c9N,null,null)
D.aTj=new B.o(null,null,null,null,null,D.bJh,A.n)
D.aTt=new B.o(null,null,null,null,null,G.t8,A.a6)
D.aTL=new B.o(A.aab,null,null,null,null,null,A.a6)
D.b2r=new B.x(0.5647058823529412,0,0,0,A.t)
D.a7q=new B.ab(0,A.G,D.b2r,A.Px,28)
D.aVI=new B.aSP()
D.aWg=new C.cla()
D.aWs=new C.b6K()
D.a7W=new B.cw(A.A,null,null,A.YE,null)
D.aYQ=new B.fd(null,null,null,null,null,E.mv,null,null,null,null)
D.aWZ=new B.cw(A.A,null,null,D.aYQ,null)
D.btW=new B.ad(A.dP,28,A.c,null,null,null)
D.aXo=new B.cw(A.A,null,null,D.btW,null)
D.aYN=new B.fd(2,null,null,null,null,A.bT,null,null,null,null)
D.aXI=new B.cw(A.A,null,null,D.aYN,null)
D.bug=new B.ad(K.Lt,40,A.bQ,null,null,null)
D.aXJ=new B.cw(A.A,null,null,D.bug,null)
D.aZA=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aZM=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b_7=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b_b=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b_D=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_T=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_U=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.IN=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b0f=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b0k=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8P=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0Y=new B.x(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b1D=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a91=new B.x(1,1,1,0.9725490196078431,A.t)
D.b1U=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b22=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b24=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b2d=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b2w=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b3J=new B.x(1,1,0.996078431372549,0.9725490196078431,A.t)
D.TJ=new B.x(0.8509803921568627,0,0,0,A.t)
D.b3R=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b3X=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9K=new B.x(0.6,0,0,0,A.t)
D.a9M=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b5f=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.ro=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b5C=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b6_=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b6i=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aam=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.U3=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zk=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Ja=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iY=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aaJ=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.U9=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b95=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b9s=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b9G=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Up=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.baD=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wg=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.baW=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bbc=new B.hv(A.ba,!0,null,null)
D.eN1=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa6=new B.w("Bio link",null,D.eN1,null,null,null,null,null,null,null,null,null)
D.aXD=new B.cw(A.A,null,null,D.fa6,null)
D.bbs=new B.hv(A.Th,!0,D.aXD,null)
D.Jt=new C.a1T(0,"none")
D.abF=new C.a1T(1,"deflate")
D.abG=new C.a1T(2,"bzip2")
D.bc8=new B.k7(0.165,0.84,0.44,1)
D.cJh=w([A.ck,A.dI,A.aB],x.O)
D.bIw=new B.a3(A.aw,A.aC,A.w,D.cJh,null,null)
D.aSg=new B.o(null,null,null,null,null,D.bIw,A.n)
D.bCV=new B.ad(A.eN,null,A.af,null,null,null)
D.aYd=new B.cw(A.A,null,null,D.bCV,null)
D.bcG=new B.kB(D.aSg,A.bb,D.aYd,null)
D.b9i=new B.x(0.058823529411764705,1,1,1,A.t)
D.cMj=w([A.bG,A.q0,A.q0,D.b9i],x.O)
D.cqK=w([0,0.32,0.7,1],x.x)
D.bJ6=new B.a3(A.aw,A.aC,A.w,D.cMj,D.cqK,null)
D.aS4=new B.o(null,null,null,null,null,D.bJ6,A.n)
D.bcM=new B.kB(D.aS4,A.bb,null,null)
D.bdB=new B.lY(1,1,null,null,null,A.bj,null)
D.bdE=new B.lY(1,null,null,null,null,D.U9,null)
D.be7=new B.b8(125e4)
D.bed=new B.b8(17e4)
D.ben=new B.b8(35964e8)
D.bet=new B.b8(55e4)
D.bex=new B.b8(68e4)
D.beY=new B.i4(0,0,0,5)
D.bff=new B.N(0,16,16,0)
D.bfi=new B.N(0,18,0,8)
D.bfp=new B.N(0,36,0,36)
D.bfw=new B.N(0,54,0,0)
D.bfD=new B.N(10,0,10,3)
D.bfO=new B.i4(10,16,10,10)
D.bfX=new B.N(10,6,10,0)
D.bg_=new B.N(10,6,4,6)
D.bg2=new B.N(10,8,10,6)
D.acx=new B.N(11,8,11,11)
D.bg7=new B.N(12,0,12,10)
D.bg8=new B.N(12,0,12,24)
D.bgk=new B.N(12,12,12,4)
D.bgn=new B.N(12,12,8,12)
D.bgB=new B.N(12,8,8,12)
D.bgY=new B.N(14,14,14,0)
D.bh2=new B.N(14,14,14,90)
D.bhl=new B.N(16,10,16,16)
D.bhm=new B.N(16,10,16,20)
D.adk=new B.N(16,6,16,28)
D.bhX=new B.N(18,0,18,10)
D.bhZ=new B.N(18,0,18,30)
D.bi0=new B.N(18,10,18,12)
D.bi1=new B.N(18,10,18,14)
D.bii=new B.N(18,16,14,18)
D.bin=new B.N(18,18,18,12)
D.bit=new B.N(18,26,18,12)
D.biy=new B.N(18,34,18,34)
D.biz=new B.N(18,4,18,14)
D.biF=new B.N(18,8,18,24)
D.biX=new B.N(20,16,14,4)
D.bj1=new B.N(20,18,12,4)
D.bj6=new B.N(20,20,12,20)
D.bj9=new B.N(20,22,20,20)
D.bje=new B.N(20,6,20,6)
D.bjo=new B.N(22,18,22,18)
D.bjv=new B.N(22,24,22,0)
D.bjy=new B.N(22,24,22,4)
D.bjG=new B.N(22,60,22,22)
D.bjM=new B.N(24,24,24,22)
D.bjW=new B.N(26,10,60,10)
D.bk1=new B.N(28,44,28,44)
D.bki=new B.N(32,44,32,44)
D.bkq=new B.N(38,30,38,20)
D.bkv=new B.N(4,0,0,6)
D.bkH=new B.i4(4,4,4,4)
D.bl6=new B.i4(6,5,6,5)
D.bla=new B.N(6,6,8,6)
D.bll=new B.N(8,14,8,14)
D.blm=new B.N(8,22,8,22)
D.blu=new B.N(8,6,12,6)
D.blD=new B.N(8,8,8,4)
D.aea=new B.N(9,9,9,6)
D.blN=new B.i4(2.5,2.5,2.5,2.5)
D.blO=new B.N(10.5,0,10.5,0)
D.blP=new B.N(7,1.5,7,1.5)
D.cBI=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bm3=new B.A8(null,null,D.cBI,A.z2)
D.cz0=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bm4=new B.A8(null,null,D.cz0,A.z2)
D.aL_=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9v=new B.w("WORD DESIGN",null,D.aL_,null,null,null,null,null,null,null,null,null)
D.bmv=new B.bH(1,A.br,D.f9v,null)
D.f9a=new B.w("Slides database",null,A7.BS,null,null,null,null,null,null,null,null,null)
D.f6B=new B.w("Admin only \xb7 keep as many as you like",null,V.aKw,null,null,null,null,null,null,null,null,null)
D.cZY=w([D.f9a,A.bA,D.f6B],x.p)
D.bbR=new B.fm(A.ak,A.e,A.j,A.F,null,A.p,null,0,D.cZY,null)
D.bmy=new B.bH(1,A.br,D.bbR,null)
D.f1y=new B.w("NGMY logo",null,A.fR,null,null,null,null,null,null,null,null,null)
D.bmB=new B.bH(1,A.br,D.f1y,null)
D.eKU=new B.F(!0,A.af,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new B.w("TALK TO THE EDITOR",null,D.eKU,null,null,null,null,null,null,null,null,null)
D.bmR=new B.bH(1,A.br,D.fbg,null)
D.eWP=new B.w("Tell the AI what to change",null,A7.BS,null,null,null,null,null,null,null,null,null)
D.bn8=new B.bH(1,A.br,D.eWP,null)
D.bnN=new B.CF(!0,"video/mp4")
D.eJc=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV5=new B.w("Move presentations between devices",null,D.eJc,null,null,null,!1,null,null,1,null,null)
D.bnR=new B.pO(A.eb,A.a3,A.h,D.eV5,null)
D.eW7=new B.w("Edit in Slides",null,A.jU,null,null,null,null,null,null,null,null,null)
D.bnS=new B.pO(A.eb,A.A,A.h,D.eW7,null)
D.bo6=new B.dm(1,A.ci,D.bnS,null)
D.X5=new B.a0(60988,"MaterialIcons",!1)
D.bpv=new B.a0(61352,"MaterialIcons",!1)
D.afD=new B.a0(61531,"MaterialIcons",!1)
D.bqH=new B.a0(63062,"MaterialIcons",!1)
D.bqO=new B.a0(63109,"MaterialIcons",!1)
D.br_=new B.a0(63206,"MaterialIcons",!1)
D.agj=new B.a0(63238,"MaterialIcons",!1)
D.XE=new B.a0(63365,"MaterialIcons",!1)
D.XF=new B.a0(63367,"MaterialIcons",!1)
D.XG=new B.a0(63368,"MaterialIcons",!1)
D.agt=new B.a0(63384,"MaterialIcons",!1)
D.brA=new B.a0(63525,"MaterialIcons",!1)
D.brD=new B.a0(63568,"MaterialIcons",!1)
D.brW=new B.a0(983072,"MaterialIcons",!1)
D.bsk=new B.a0(983271,"MaterialIcons",!0)
D.bt9=new B.a0(983924,"MaterialIcons",!1)
D.ahB=new B.a0(983965,"MaterialIcons",!1)
D.ahC=new B.a0(983966,"MaterialIcons",!1)
D.btj=new B.a0(984592,"MaterialIcons",!1)
D.btz=new B.ad(A.rW,16,A.aA,null,null,null)
D.btG=new B.ad(A.m4,null,A.c,null,null,null)
D.ahM=new B.ad(A.pc,18,A.c,null,null,null)
D.btX=new B.ad(A.A5,18,O.kV,null,null,null)
D.buB=new B.ad(A.j4,11,null,null,null,null)
D.buL=new B.ad(A.Xn,null,A.eu,null,null,null)
D.bvj=new B.ad(A.qn,18,A.aA,null,null,null)
D.bvp=new B.ad(A1.Aj,14,null,null,null,null)
D.bvq=new B.ad(A.e6,28,A.cF,null,null,null)
D.bvC=new B.ad(A.pd,20,A.c,null,null,null)
D.bvJ=new B.ad(A.x9,null,null,null,null,null)
D.bvP=new B.ad(A.jl,18,A.hl,null,null,null)
D.bvU=new B.ad(A.kZ,null,null,null,null,null)
D.bwm=new B.ad(A.XV,28,A.c,null,null,null)
D.bqK=new B.a0(63065,"MaterialIcons",!1)
D.bwv=new B.ad(D.bqK,15,A.c,null,null,null)
D.bqQ=new B.a0(63113,"MaterialIcons",!1)
D.bwB=new B.ad(D.bqQ,null,A.af,null,null,null)
D.bwY=new B.ad(A.uy,22,A.bH,null,null,null)
D.bxh=new B.ad(A.wV,18,null,null,null,null)
D.bxm=new B.ad(A.EG,12,A.c,null,null,null)
D.bsW=new B.a0(983687,"MaterialIcons",!1)
D.bxx=new B.ad(D.bsW,null,A.bk,null,null,null)
D.bxE=new B.ad(A.hp,null,A.bk,null,null,null)
D.bxX=new B.ad(A.ph,22,A.c,null,null,null)
D.by0=new B.ad(A.ct,13,A.c,null,null,null)
D.by6=new B.ad(A.e6,26,A.aE,null,null,null)
D.by9=new B.ad(A.qr,26,A.c,null,null,null)
D.LD=new B.ad(A.j4,8,A.c,null,null,null)
D.byr=new B.ad(A.pc,40,A.c,null,null,null)
D.bys=new B.ad(A.bos,null,null,null,null,null)
D.byw=new B.ad(A.t3,20,null,null,null,null)
D.bsV=new B.a0(983683,"MaterialIcons",!1)
D.byG=new B.ad(D.bsV,null,A.aW,null,null,null)
D.byH=new B.ad(A.j4,16,A.bk,null,null,null)
D.bz1=new B.ad(A.uM,null,null,null,null,null)
D.aij=new B.ad(A.uA,22,A.c,null,null,null)
D.bz5=new B.ad(A.dP,17,A.c,null,null,null)
D.aik=new B.ad(A.j4,9,A.c,null,null,null)
D.bza=new B.ad(A.uv,null,null,null,null,null)
D.boJ=new B.a0(57744,"MaterialIcons",!1)
D.bzh=new B.ad(D.boJ,null,null,null,null,null)
D.bzk=new B.ad(A.uv,16,null,null,null,null)
D.btq=new B.a0(985181,"MaterialIcons",!1)
D.EZ=new B.ad(D.btq,null,null,null,null,null)
D.bzw=new B.ad(A.kZ,16,A.bH,null,null,null)
D.bsN=new B.a0(983615,"MaterialIcons",!1)
D.bzy=new B.ad(D.bsN,12,A.c,null,null,null)
D.aiq=new B.ad(A.wR,16,null,null,null,null)
D.bzG=new B.ad(A.dP,21,A.c,null,null,null)
D.bzL=new B.ad(A.hp,17,A.c,null,null,null)
D.bzM=new B.ad(A.uy,null,null,null,null,null)
D.bA_=new B.ad(A.Yi,20,A.aA,null,null,null)
D.bAe=new B.ad(A.pb,22,E.mv,null,null,null)
D.bAm=new B.ad(A.qp,13,A.af,null,null,null)
D.bAo=new B.ad(A.ahq,20,A.aA,null,null,null)
D.boq=new B.a0(57495,"MaterialIcons",!1)
D.bAt=new B.ad(D.boq,null,null,null,null,null)
D.bAx=new B.ad(A.nw,18,A.c,null,null,null)
D.bAS=new B.ad(A.t6,28,A.c,null,null,null)
D.bB_=new B.ad(D.agj,null,A.aB,null,null,null)
D.bB0=new B.ad(A.pd,22,A.c,null,null,null)
D.aiA=new B.ad(A.X1,16,null,null,null,null)
D.bBL=new B.ad(A.uy,32,A.c,null,null,null)
D.bCs=new B.ad(A.iO,22,A.c,null,null,null)
D.bCw=new B.ad(A.qr,22,A.af,null,null,null)
D.aiP=new B.ad(A.rW,null,A.c2,null,null,null)
D.bDp=new B.ad(A.uz,18,null,null,null,null)
D.bDX=new B.ad(A.dP,18,A.cE,null,null,null)
D.YH=new B.ad(A.ct,18,A.aA,null,null,null)
D.bE3=new B.ad(A.ahj,null,null,null,null,null)
D.bEt=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aKP,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.eBT=new B.F(!0,A.bI,null,null,null,null,null,A.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEL=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eBT,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.bF9=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.et,!0,null,null,null,null)
D.cFj=w([A.e4,A.aB],x.O)
D.bGh=new B.a3(A.a3,A.a7,A.w,D.cFj,null,null)
D.bGs=new B.a3(A.aY,A.b1,A.Rv,A.apO,null,null)
D.aZZ=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b2y=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b5g=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b0Q=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cqM=w([D.aZZ,D.b2y,D.b5g,D.b0Q],x.O)
D.bGN=new B.a3(A.aw,A.aC,A.w,D.cqM,A.Fv,null)
D.d_4=w([A.cQ,A.by,A.b3],x.O)
D.bGP=new B.a3(A.aY,A.b1,A.Rv,D.d_4,null,null)
D.d0g=w([A.bk,A.cb],x.O)
D.bGT=new B.a3(A.a3,A.a7,A.w,D.d0g,null,null)
D.cWO=w([A.hz,A.dl,A.aZ],x.O)
D.bGV=new B.a3(A.aw,A.aC,A.w,D.cWO,null,null)
D.cKQ=w([A.cY,A.f3],x.O)
D.bGZ=new B.a3(A.a3,A.a7,A.w,D.cKQ,null,null)
D.d__=w([O.kV,A.dl],x.O)
D.ajz=new B.a3(A.a3,A.a7,A.w,D.d__,null,null)
D.b34=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cZX=w([D.b34,D.wg,A.bT],x.O)
D.bH3=new B.a3(A.a3,A.a7,A.w,D.cZX,null,null)
D.cGU=w([A.bh,A.dk,A.fb],x.O)
D.bH4=new B.a3(A.aw,A.aC,A.w,D.cGU,null,null)
D.LS=new B.a3(A.a3,A.a7,A.w,A.FI,null,null)
D.ba_=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cjX=w([D.ba_,A.bT,A.j0],x.O)
D.ajE=new B.a3(A.aw,A.aC,A.w,D.cjX,null,null)
D.cPH=w([A.w6,A.au,D.zk],x.O)
D.bI3=new B.a3(A.a3,A.a7,A.w,D.cPH,null,null)
D.baX=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b1C=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b68=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cG3=w([D.baX,D.b1C,D.b68],x.O)
D.ajF=new B.a3(A.a3,A.a7,A.w,D.cG3,null,null)
D.b35=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bK4=w([Ap.abq,D.b35],x.O)
D.bId=new B.a3(A.aY,A.b1,A.w,D.bK4,null,null)
D.cEe=w([A.mu,A.bQ],x.O)
D.bIh=new B.a3(A.aY,A.b1,A.w,D.cEe,null,null)
D.cUc=w([A.aB,A.dI],x.O)
D.bIn=new B.a3(A.a3,A.a7,A.w,D.cUc,null,null)
D.aav=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.ars=w([D.aav,D.iY,D.IN],x.O)
D.bIS=new B.a3(A.aw,A.aC,A.w,D.ars,null,null)
D.cjP=w([A.ds,A.dA],x.O)
D.bJ2=new B.a3(A.aY,A.b1,A.w,D.cjP,null,null)
D.cRB=w([A.u3,As.D6],x.O)
D.bJR=new B.a3(A.a3,A.a7,A.w,D.cRB,null,null)
D.f2Z=new B.w("Which Bio link?",null,A.cr,null,null,null,null,null,null,null,null,null)
D.bK1=new B.ph(null,D.f2Z,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xz=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a1o=new C.kE(2,"elegantNavy")
D.fpn=w([A.U1,D.iY,A.bT],x.O)
D.jo=new C.wL(0,"classic")
D.a1b=new C.jb("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a1o,4294967035,4279378237,4290283019,D.jo)
D.aAp=new C.kE(3,"elegantGold")
D.aZz=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b_n=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a9l=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.foQ=w([D.aZz,D.b_n,D.a9l],x.O)
D.a19=new C.jb("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aAp,4294966515,4281016592,4289102906,D.jo)
D.dkF=new C.kE(22,"goldRibbon")
D.foM=w([A.U1,D.iY,A.hP],x.O)
D.a12=new C.jb("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dkF,4294967035,4279378237,4291404327,D.jo)
D.dkG=new C.kE(23,"goldBaroque")
D.a9R=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.foS=w([D.a9R,A.au,A.j0],x.O)
D.a13=new C.jb("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dkG,4294964964,4283053072,4292128567,D.jo)
D.dkI=new C.kE(4,"elegantEmerald")
D.b0q=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b1c=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.foY=w([D.b0q,D.b1c,A.hP],x.O)
D.a14=new C.jb("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dkI,4294376440,4279122734,4291404327,D.jo)
D.dkJ=new C.kE(5,"elegantBurgundy")
D.b4l=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fp4=w([D.b4l,A.a8J,A.hP],x.O)
D.a17=new C.jb("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dkJ,4294965238,4283043359,4291404327,D.jo)
D.dkC=new C.kE(19,"goldFiligree")
D.Jg=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.foT=w([D.Jg,A.au,A.j0],x.O)
D.a15=new C.jb("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dkC,4294966259,4279378237,4292128567,D.jo)
D.dkD=new C.kE(20,"goldLaurel")
D.b9Q=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fp5=w([A.IH,A.hP,D.b9Q],x.O)
D.a16=new C.jb("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dkD,4294966776,4282000405,4291404327,D.jo)
D.dkE=new C.kE(21,"goldCrest")
D.a8D=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b9X=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.foV=w([D.a8D,A.au,D.b9X],x.O)
D.a1a=new C.jb("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dkE,4294965484,4283053072,4292128567,D.jo)
D.dkH=new C.kE(24,"goldStar")
D.baT=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.foZ=w([D.baT,A.au,D.iY],x.O)
D.a18=new C.jb("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dkH,4294966518,4279378237,4292128567,D.jo)
D.F8=w([D.a1b,D.a19,D.a12,D.a13,D.a14,D.a17,D.a15,D.a16,D.a1a,D.a18],x.h)
D.pp=new C.m7(0,"blank")
D.Pm=new C.m7(1,"title")
D.mb=new C.m7(2,"titleContent")
D.dFh=new C.m7(3,"twoColumn")
D.Bg=new C.m7(4,"section")
D.dFi=new C.m7(5,"comparison")
D.Gh=new C.m7(6,"flashcard")
D.Gi=new C.m7(7,"quiz")
D.Gj=new C.m7(8,"worksheet")
D.ak0=w([D.pp,D.Pm,D.mb,D.dFh,D.Bg,D.dFi,D.Gh,D.Gi,D.Gj],B.az("P<m7>"))
D.bKg=w([0,0,0],x.cA)
D.bTf=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps (NGMY Ads, Clock, Weather, Music, Photos, Arcade, News, School). The phone and tablet play NGMY ads on their own screens, and tapping a phone 3 times opens a big phone with the same apps. Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.asm=w([Z.TA,A.dA],x.O)
D.k8=w([A.bT,A.bH,A.hO,A.hy,D.zk],x.O)
D.dgz=new C.iQ("fireworks","Royal Fireworks","Thank you for celebrating with us",D.asm,D.k8)
D.ba7=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b4j=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cEr=w([D.ba7,D.b4j],x.O)
D.dgq=new C.iQ("confetti","Golden Confetti","Together we rise",D.cEr,D.k8)
D.cBN=w([A.n8,A.Tk],x.O)
D.dgr=new C.iQ("crown","Crown of Glory","Built for our community",D.cBN,D.k8)
D.b1s=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b3Z=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cI7=w([D.b1s,D.b3Z],x.O)
D.t9=w([A.bI,A.aN,A.c,A.aJ,A.ai],x.O)
D.dgl=new C.iQ("aurora","Aurora Gala","A brighter future, together",D.cI7,D.t9)
D.b5i=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cRH=w([G.a8n,D.b5i],x.O)
D.dgC=new C.iQ("champagne","Champagne Toast","Cheers to every member",D.cRH,D.k8)
D.dgD=new C.iQ("diamonds","Diamond Rain","Every member is a jewel",W.asV,D.t9)
D.b_f=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b3w=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cW8=w([D.b_f,D.b3w],x.O)
D.dgg=new C.iQ("starburst","Golden Starburst","Thank you!",D.cW8,D.k8)
D.bK9=w([A.f0,A.wa],x.O)
D.a8u=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Np=w([A.nZ,A.id,A.ue,A.oL,D.a8u],x.O)
D.dgK=new C.iQ("balloons","Luxury Balloons","Let's celebrate",D.bK9,D.Np)
D.cB8=w([A.Tq,A.x],x.O)
D.dgy=new C.iQ("galaxy","Galaxy Spiral","The sky is not the limit",D.cB8,D.t9)
D.b8w=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cOz=w([A.k1,D.b8w],x.O)
D.dgt=new C.iQ("redcarpet","Red Carpet","Tonight we shine",D.cOz,D.k8)
D.b6F=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b56=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cSA=w([D.b6F,D.b56],x.O)
D.dgi=new C.iQ("coins","Gold Coin Rain","Every contribution counts",D.cSA,D.k8)
D.cYD=w([A.ds,A.hv],x.O)
D.dgo=new C.iQ("lanterns","Sky Lanterns","Lighting the way together",D.cYD,D.k8)
D.b2h=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.czh=w([A.wc,D.b2h],x.O)
D.dgk=new C.iQ("hearts","Floating Hearts","Made with love",D.czh,D.Np)
D.b_M=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b0w=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cZV=w([D.b_M,D.b0w],x.O)
D.dgJ=new C.iQ("petals","Rose Petals","Thank you, from our hearts",D.cZV,D.Np)
D.b9g=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cWs=w([A.ks,D.b9g],x.O)
D.dgf=new C.iQ("butterflies","Golden Butterflies","New beginnings",D.cWs,D.k8)
D.b66=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cA9=w([D.b66,A.x],x.O)
D.dgB=new C.iQ("neon","Neon Night","Let's go!",D.cA9,D.t9)
D.b3g=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cUm=w([A.J0,D.b3g],x.O)
D.dgE=new C.iQ("disco","Disco Ball","Party time",D.cUm,D.t9)
D.b6x=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cTW=w([A.hz,D.b6x],x.O)
D.dgj=new C.iQ("sunrise","Golden Sunrise","A new day for our community",D.cTW,D.k8)
D.cTA=w([A.q5,A.dA],x.O)
D.dgF=new C.iQ("pearls","Ocean Pearls","Deep roots, bright future",D.cTA,D.t9)
D.b1y=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cTN=w([D.b1y,A.dA],x.O)
D.dgI=new C.iQ("snow","Winter Gala","Warm wishes to all",D.cTN,D.t9)
D.aZI=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b_y=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cZ_=w([D.aZI,D.b_y],x.O)
D.dgx=new C.iQ("laurel","Laurel Victory","We did it together",D.cZ_,D.k8)
D.aZy=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b3V=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cyr=w([D.aZy,D.b3V],x.O)
D.dgH=new C.iQ("ribbons","Silk Ribbons","Elegance in every step",D.cyr,D.k8)
D.b4S=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cjM=w([G.zj,D.b4S],x.O)
D.dgu=new C.iQ("kente","Kente Pride","Proud of our roots",D.cjM,D.k8)
D.b79=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b9x=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cJB=w([D.b79,D.b9x],x.O)
D.dgp=new C.iQ("trophy","Trophy Shine","Winners together",D.cJB,D.k8)
D.cTT=w([Ak.IT,A.x],x.O)
D.dgh=new C.iQ("shooting","Shooting Stars","Make a wish",D.cTT,D.t9)
D.aZP=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.abg=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cZd=w([D.aZP,D.abg],x.O)
D.dgv=new C.iQ("bokeh","Golden Bokeh","Shine bright",D.cZd,D.k8)
D.b_8=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cPl=w([D.b_8,A.x],x.O)
D.dgn=new C.iQ("orbits","Golden Orbits","Always moving forward",D.cPl,D.k8)
D.b9h=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cMc=w([A.a9j,D.b9h],x.O)
D.dgs=new C.iQ("flowers","Blooming Garden","Growing together",D.cMc,D.Np)
D.aZX=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b_s=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cY8=w([D.aZX,D.b_s],x.O)
D.dgm=new C.iQ("music","Music Party","Celebrate with us",D.cY8,D.t9)
D.b0g=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b9T=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.czt=w([D.b0g,D.b9T],x.O)
D.dgG=new C.iQ("mandala","Royal Mandala","Harmony and unity",D.czt,D.k8)
D.cMh=w([G.zj,D.abg],x.O)
D.dgA=new C.iQ("sparklers","Golden Sparklers","Light up the night",D.cMh,D.k8)
D.dgw=new C.iQ("city","City Lights","The whole city celebrates",D.asm,D.k8)
D.Fh=w([D.dgz,D.dgq,D.dgr,D.dgl,D.dgC,D.dgD,D.dgg,D.dgK,D.dgy,D.dgt,D.dgi,D.dgo,D.dgk,D.dgJ,D.dgf,D.dgB,D.dgE,D.dgj,D.dgF,D.dgI,D.dgx,D.dgH,D.dgu,D.dgp,D.dgh,D.dgv,D.dgn,D.dgs,D.dgm,D.dgG,D.dgA,D.dgw],B.az("P<iQ>"))
D.e06=new B.A("","No ring")
D.edS=new B.A("platinum","Platinum")
D.eb9=new B.A("glow","Glow")
D.e3j=new B.A("double","Double line")
D.e2f=new B.A("framed","Gallery frame")
D.e_M=new B.A("rosegold","Rose gold")
D.ebP=new B.A("jewels","Jeweled")
D.e8I=new B.A("aurora","Aurora")
D.AB=w([D.e06,A.a2H,D.edS,D.eb9,H.aGF,D.e3j,A.a2J,D.e2f,D.e_M,D.ebP,D.e8I],x.L)
D.c3r=w([D.a15,D.a16,D.a1a,D.a12,D.a13,D.a18],x.h)
D.bzT=new B.ad(G.afd,16,null,null,null,null)
D.aV3=new B.uN(A.bf,D.bzT,null,x.U)
D.boS=new B.a0(58027,"MaterialIcons",!1)
D.btF=new B.ad(D.boS,16,null,null,null,null)
D.aV1=new B.uN(A.L,D.btF,null,x.U)
D.boT=new B.a0(58030,"MaterialIcons",!1)
D.bxD=new B.ad(D.boT,16,null,null,null,null)
D.aV4=new B.uN(A.dM,D.bxD,null,x.U)
D.c9B=w([D.aV3,D.aV1,D.aV4],B.az("P<uN<px>>"))
D.cha=w([A.zo,A.hw],x.O)
D.chb=w([A.bh,A.bm,A.fb],x.O)
D.Ne=w([A.bH,A.hy,A.hO,A.au,A.oL],x.O)
D.cjS=w([A.bT,D.iY,D.IN],x.O)
D.cko=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dYS=new B.A(4278913286,4280030216)
D.dZ9=new B.A(4279373061,4278518787)
D.dZg=new B.A(4279898630,4278847235)
D.cJ2=w([D.dYS,D.dZ9,D.dZg],x.n)
D.cF5=w(["\u265b","\u269c","\u2726"],x.s)
D.dkA=new C.wN("Royal Onyx & Gold",D.cJ2,4292128567,4294370209,4294965479,3874020544,D.cF5)
D.dYF=new B.A(4278326799,4278598442)
D.dYH=new B.A(4278395929,4278258953)
D.dYO=new B.A(4278599728,4278327826)
D.cYu=w([D.dYF,D.dYH,D.dYO],x.n)
D.cA2=w(["\u269c","\u2756","\u2727"],x.s)
D.dkx=new C.wN("Imperial Emerald",D.cYu,4293050997,4294699968,4294180856,3872254170,D.cA2)
D.dYI=new B.A(4278455076,4278918747)
D.dYN=new B.A(4278587439,4278322714)
D.dZ0=new B.A(4279051376,4278455076)
D.cWK=w([D.dYI,D.dYN,D.dZ0],x.n)
D.cPW=w(["\u2654","\u2726","\u2748"],x.s)
D.dkr=new C.wN("Sapphire Crown",D.cWK,4291417834,4294967295,4294310143,3871986666,D.cPW)
D.dZe=new B.A(4279894534,4283041554)
D.dZq=new B.A(4281008906,4279042307)
D.dZy=new B.A(4284221976,4279894534)
D.d0J=w([D.dZe,D.dZq,D.dZy],x.n)
D.cBf=w(["\u265b","\u2766","\u2726"],x.s)
D.dkt=new C.wN("Ruby Throne",D.d0J,4293378685,4294963145,4294964466,3874213833,D.cBf)
D.dZ8=new B.A(4279371039,4281995100)
D.dZi=new B.A(4280092723,4278714896)
D.dZv=new B.A(4283045242,4279371039)
D.cYQ=w([D.dZ8,D.dZi,D.dZv],x.n)
D.cX4=w(["\u2655","\u2756","\u2727"],x.s)
D.dky=new C.wN("Amethyst Palace",D.cYQ,4293314984,4294963421,4294702591,3873229802,D.cX4)
D.dYK=new B.A(4278519045,4280032287)
D.dZ1=new B.A(4279111184,4278321666)
D.dZn=new B.A(4280492839,4278716426)
D.cVH=w([D.dYK,D.dZ1,D.dZn],x.n)
D.cOm=w(["\u2726","\u25c6","\u2742"],x.s)
D.dkv=new C.wN("Obsidian & Platinum",D.cVH,4293256418,4294967295,4294638330,3872378836,D.cOm)
D.dZf=new B.A(4279896588,4282194463)
D.dZo=new B.A(4280553487,4279043334)
D.dZw=new B.A(4283048488,4279896588)
D.cNT=w([D.dZf,D.dZo,D.dZw],x.n)
D.d_h=w(["\u2766","\u273f","\u2727"],x.s)
D.dks=new C.wN("Rose Gold Velvet",D.cNT,4293440672,4294960345,4294964979,3874214602,D.d_h)
D.dYL=new B.A(4278520340,4279180595)
D.dYQ=new B.A(4278718495,4278322443)
D.dZc=new B.A(4279510591,4278520340)
D.cqv=w([D.dYL,D.dYQ,D.dZc],x.n)
D.cP0=w(["\u269c","\u2736","\u2756"],x.s)
D.dkw=new C.wN("Midnight Brass",D.cqv,4291405148,4293975208,4294439914,3872837564,D.cP0)
D.dZL=new B.A(4294703086,4293780428)
D.dZH=new B.A(4294307549,4293187253)
D.dZM=new B.A(4294966517,4293977807)
D.cDf=w([D.dZL,D.dZH,D.dZM],x.n)
D.cPp=w(["\u269c","\u265b","\u2726"],x.s)
D.dkz=new C.wN("Ivory Marble & Gold",D.cDf,4289760572,4286209048,4280951062,3863625518,D.cPp)
D.dYW=new B.A(4278978566,4280555024)
D.dZb=new B.A(4279504137,4278518530)
D.dZs=new B.A(4281211923,4278978566)
D.cB7=w([D.dYW,D.dZb,D.dZs],x.n)
D.cXM=w(["\u2742","\u2726","\u265c"],x.s)
D.dku=new C.wN("Onyx & Copper",D.cB7,4291856987,4294365880,4294964718,3873885630,D.cXM)
D.ckv=w([D.dkA,D.dkx,D.dkr,D.dkt,D.dky,D.dkv,D.dks,D.dkw,D.dkz,D.dku],B.az("P<wN>"))
D.cmM=w([A.au,D.zk,A.hy],x.O)
D.e5g=new B.A("Original",null)
D.e5o=new B.A("Wide 16:9",1.7777777777777777)
D.e7w=new B.A("Landscape 3:2",1.5)
D.e4L=new B.A("Photo 4:3",1.3333333333333333)
D.e6n=new B.A("Square",1)
D.ehh=new B.A("Portrait 3:4",0.75)
D.apW=w([D.e5g,D.e5o,D.e7w,D.e4L,D.e6n,D.ehh],B.az("P<+(n,O?)>"))
D.apX=w([A.hy,A.bU,A.b7,A.bC],x.O)
D.e7G=new B.A("","Original")
D.e9q=new B.A("circle","Circle")
D.eeB=new B.A("rounded","Rounded")
D.eft=new B.A("triangle","Triangle")
D.ebn=new B.A("hexagon","Hexagon")
D.e9P=new B.A("diamond","Diamond")
D.e8H=new B.A("arch","Arch")
D.AG=w([D.e7G,D.e9q,D.eeB,D.eft,D.ebn,D.e9P,D.e8H],x.L)
D.dfG=new C.kX("classic_blue","Classic Blue","Normal",A.bk,A.c,A.k2,A.dv,A.aI)
D.dfW=new C.kX("campus_green","Campus Green","Normal",A.aW,A.lR,A.q3,A.fU,A.eC)
D.dfN=new C.kX("warm_sand","Warm Sand","Normal",A.e_,A.hO,A.bH,A.j_,A.nc)
D.dfU=new C.kX("slate_minimal","Slate Minimal","Normal",A.bt,A.aN,A.aJ,A.M,A.aI)
D.dfF=new C.kX("coral_fresh","Coral Fresh","Normal",A.ck,A.ig,A.pY,A.kt,A.rh)
D.dfV=new C.kX("lavender_calm","Lavender Calm","Normal",A.b3,A.oN,A.zb,A.oQ,A.je)
D.dfH=new C.kX("ocean_breeze","Ocean Breeze","Normal",A.f3,A.q9,A.rd,A.u5,A.nd)
D.aaC=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dfS=new C.kX("berry_pop","Berry Pop","Normal",A.fc,D.aaC,A.kq,G.Uo,A.Dr)
D.dfI=new C.kX("midnight_pro","Midnight Pro","Professional",A.aB,A.M,A.ds,A.kq,A.cp)
D.dfR=new C.kX("executive_navy","Executive Navy","Professional",A.da,A.aa0,A.dv,A.kS,A.bI)
D.dfP=new C.kX("boardroom_charcoal","Boardroom Charcoal","Professional",A.ai,A.bj,A.M,A.aN,A.cp)
D.dfJ=new C.kX("corporate_steel","Corporate Steel","Professional",A.mr,A.M,A.lT,A.fe,A.bI)
D.dfM=new C.kX("gold_luxe","Gold Luxe","Luxury",A.nX,A.dz,A.nY,A.lj,A.bH)
D.b6A=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dfQ=new C.kX("rose_gold_elite","Rose Gold Elite","Luxury",A.hw,D.b6A,A.Ug,A.id,A.oL)
D.dfT=new C.kX("platinum_night","Platinum Night","Luxury",A.cp,A.dA,A.bj,A.aN,A.aJ)
D.dfX=new C.kX("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.oR,A.eT,A.oX,A.jf)
D.dfE=new C.kX("royal_purple","Royal Purple","Luxury",A.ms,A.TD,A.je,A.kq,A.Tf)
D.dfO=new C.kX("neon_pitch","Neon Pitch","Bold",A.b7,A.dA,A.M,A.be,A.aJ)
D.dfL=new C.kX("crimson_impact","Crimson Impact","Bold",A.bQ,A.k1,A.f1,A.ry,A.fj)
D.dfK=new C.kX("sunset_gallery","Sunset Gallery","Bold",A.fT,A.rh,A.kt,A.pY,A.o_)
D.Fq=w([D.dfG,D.dfW,D.dfN,D.dfU,D.dfF,D.dfV,D.dfH,D.dfS,D.dfI,D.dfR,D.dfP,D.dfJ,D.dfM,D.dfQ,D.dfT,D.dfX,D.dfE,D.dfO,D.dfL,D.dfK],B.az("P<kX>"))
D.cya=w([A.bT,D.iY],x.O)
D.cO7=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e8u=new B.A("Faces & people",D.cO7)
D.cmQ=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dXR=new B.A("Ideas & work",D.cmQ)
D.cFy=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.ebs=new B.A("Nature",D.cFy)
D.cOf=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.e5e=new B.A("Places & things",D.cOf)
D.cIE=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.e8M=new B.A("Symbols",D.cIE)
D.cyg=w([D.e8u,D.dXR,D.ebs,D.e5e,D.e8M],B.az("P<+(n,ak<n>)>"))
D.b_1=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cyC=w([A.bT,D.a9l,D.b_1],x.O)
D.aUy=new B.ab(0,A.G,A.IE,A.aBb,40)
D.aUf=new B.ab(0,A.G,A.na,A.e9,8)
D.cyN=w([D.aUy,D.aUf],x.V)
D.czd=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aql=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.ZS=w([A.hy,A.fb,A.bQ,A.aF,A.ck],x.O)
D.czX=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9z=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cA7=w([A.U8,D.a9z,A.U8],x.O)
D.cAb=w([A.hP,D.iY,D.IN],x.O)
D.e53=new B.A(A.bf,D.XF)
D.e6i=new B.A(A.L,D.XE)
D.e0J=new B.A(A.dM,D.XG)
D.cB2=w([D.e53,D.e6i,D.e0J],B.az("P<+(px,a0)>"))
D.cN=new C.Hi(0,"text")
D.l5=new C.Hi(1,"image")
D.eV=new C.Hi(2,"shape")
D.Pl=new C.Hi(3,"pdf")
D.kJ=new C.Hi(4,"signature")
D.a1v=new C.Hi(5,"bio")
D.cBR=w([D.cN,D.l5,D.eV,D.Pl,D.kJ,D.a1v],B.az("P<Hi>"))
D.cBS=w([A.bi,A.cx],B.az("P<Gg>"))
D.cCr=w(["School","Documents","Sign & present"],x.s)
D.aUC=new B.ab(0,A.G,A.ab8,A.tt,28)
D.cCK=w([D.aUC],x.V)
D.cD1=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nx=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqJ=w([A.hy,A.Dq,A.aJ,A.c,A.nZ,A.au],x.O)
D.egI=new B.A(0.1,0.08)
D.ebq=new B.A(0.3,0.05)
D.e0g=new B.A(0.55,0.1)
D.e47=new B.A(0.8,0.06)
D.e7_=new B.A(0.92,0.16)
D.e6x=new B.A(0.2,0.2)
D.e4y=new B.A(0.7,0.22)
D.ea9=new B.A(0.05,0.4)
D.e7o=new B.A(0.95,0.45)
D.e0W=new B.A(0.12,0.7)
D.e2Y=new B.A(0.88,0.75)
D.e35=new B.A(0.4,0.9)
D.dZZ=new B.A(0.65,0.93)
D.e3M=new B.A(0.25,0.97)
D.e50=new B.A(0.85,0.9)
D.e1H=new B.A(0.5,0.04)
D.cEm=w([D.egI,D.ebq,D.e0g,D.e47,D.e7_,D.e6x,D.e4y,D.ea9,D.e7o,D.e0W,D.e2Y,D.e35,D.dZZ,D.e3M,D.e50,D.e1H],x.G)
D.cEu=w([A.c,A.hw,A.aX,A.aS],x.O)
D.dGU=new C.jt("office_blue","Office Blue",A.bk,A.dv,A.aI,A.c,A.k2)
D.dH4=new C.jt("campus_green","Campus Green",A.aW,A.fU,A.eC,A.lR,A.q3)
D.dGV=new C.jt("sunset","Sunset",A.fT,A.kt,A.nc,A.ig,A.pY)
D.dGW=new C.jt("midnight","Midnight",A.aB,A.kq,A.cp,A.M,A.ds)
D.dH6=new C.jt("classic","Classic",A.dl,A.dz,A.lk,A.hO,A.h4)
D.dH3=new C.jt("rose_gold","Rose Gold",A.hw,A.wd,A.wc,A.ue,A.zo)
D.dGP=new C.jt("ocean_teal","Ocean Teal",A.f3,A.u5,A.nd,A.q9,A.rd)
D.dGO=new C.jt("slate_pro","Slate Pro",A.bt,A.M,A.aI,A.aN,A.aJ)
D.dGN=new C.jt("neon_night","Neon Night",A.b7,A.be,A.aJ,A.dA,A.M)
D.dGZ=new C.jt("lavender","Lavender",A.b3,A.oQ,A.je,A.oN,A.zb)
D.dH0=new C.jt("coral","Coral",A.ck,A.kt,A.rh,A.ig,A.o_)
D.dGQ=new C.jt("forest","Forest",A.fx,A.eA,A.cK,A.lS,A.eu)
D.dGR=new C.jt("berry","Berry",A.fc,G.Uo,A.Dr,D.aaC,A.kq)
D.dGY=new C.jt("sand","Sand",A.e_,A.j_,A.nc,A.hO,A.bH)
D.dH2=new C.jt("ice","Ice",A.mr,A.J1,A.aI,A.mp,A.fe)
D.dGT=new C.jt("charcoal","Charcoal",A.ai,A.aN,A.cp,A.bj,A.M)
D.dGM=new C.jt("mint","Mint",A.aS,A.fo,A.fU,A.lS,A.oX)
D.dH1=new C.jt("crimson","Crimson",A.bQ,A.mu,A.k1,A.Do,A.ry)
D.b1b=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dGX=new C.jt("gold","Gold",A.nX,A.u3,A.nY,D.b1b,A.lj)
D.dH_=new C.jt("aqua","Aqua",A.bL,A.Dd,A.nV,A.oP,A.o0)
D.dGS=new C.jt("plum","Plum",A.ms,A.wa,A.Dr,A.D3,A.rs)
D.dH5=new C.jt("steel","Steel",A.da,A.dv,A.bj,A.k2,A.kS)
D.a_6=w([D.dGU,D.dH4,D.dGV,D.dGW,D.dH6,D.dH3,D.dGP,D.dGO,D.dGN,D.dGZ,D.dH0,D.dGQ,D.dGR,D.dGY,D.dH2,D.dGT,D.dGM,D.dH1,D.dGX,D.dH_,D.dGS,D.dH5],B.az("P<jt>"))
D.cEO=w([A.bT,A.j0],x.O)
D.Pn=new C.hn(10,"rotate3d")
D.Gl=new C.hn(8,"flip")
D.aAI=new C.hn(19,"spiral")
D.pq=new C.hn(16,"bounce")
D.aAL=new C.hn(9,"flipVertical")
D.cEP=w([D.Pn,D.Gl,D.aAI,D.pq,D.aAL],x.i)
D.e1=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cF8=w([0.62,1],x.x)
D.cFG=w([0,0.32,0.68,1],x.x)
D.mc=new C.hn(6,"zoom")
D.tn=new C.hn(4,"slideUp")
D.tm=new C.hn(2,"slideLeft")
D.cFO=w([D.mc,D.Gl,D.tn,D.Pn,D.tm],x.i)
D.cGh=w([A.bU,A.hw,A.id,A.hy,A.c],x.O)
D.aUt=new B.ab(0,A.G,D.a9K,A.tt,30)
D.cGZ=w([D.aUt],x.V)
D.dP4=new B.u(0,-2.5)
D.dOU=new B.u(-2.5,0)
D.dNH=new B.u(2.5,0)
D.cH1=w([A.PD,A.a1S,A.aBE,A.a1R,D.dP4,H.aBA,D.dOU,D.dNH],x.dN)
D.Fx=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cHs=w([23,114,69,56,80,144],x.t)
D.cHQ=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cIe=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cJF=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cJK=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bc=new C.u5(0,"rectangle")
D.eF=new C.u5(1,"circle")
D.kK=new C.u5(6,"hexagon")
D.cJW=w([D.bc,D.eF,D.kK],x.m)
D.nD=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aaI=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cKt=w([D.aaI,A.eA],x.O)
D.e0r=new B.A("","Classic")
D.e_b=new B.A("caps","Bold caps")
D.eac=new B.A("elegant","Elegant")
D.eeT=new B.A("shadow","Shadow")
D.e4s=new B.A("neon","Neon glow")
D.edy=new B.A("outline","Outline")
D.ecN=new B.A("marker","Highlighter")
D.ef3=new B.A("stamp","Stamp")
D.eew=new B.A("retro","Retro")
D.e3u=new B.A("threed","3D")
D.eaH=new B.A("fire","Fire")
D.ebz=new B.A("ice","Ice")
D.e9p=new B.A("chalk","Chalk")
D.e9u=new B.A("comic","Comic")
D.ef5=new B.A("sunset","Sunset")
D.eg9=new B.A("softglow","Soft glow")
D.ecu=new B.A("lowercase","Lowercase")
D.e9W=new B.A("double","Echo")
D.egg=new B.A("whisper","Whisper")
D.arz=w([D.e0r,D.e_b,D.eac,D.eeT,D.e4s,D.edy,D.ecN,D.ef3,D.eew,D.e3u,H.aGD,D.eaH,D.ebz,D.e9p,D.e9u,A.a2H,D.ef5,D.eg9,D.ecu,D.e9W,D.egg],x.L)
D.cLF=w([3,5,7,10,12,15],x.t)
D.cMU=w([A.bU,A.bH,A.c,A.ew,A.cQ],x.O)
D.d7k=new C.rE(10,"cardWorld")
D.B8=new C.Ap(3,"rounded")
D.dnB=new C.l_("world","NGMY World",D.d7k,D.B8,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d7l=new C.rE(11,"cardSplit")
D.dnx=new C.l_("business","Business Wire",D.d7l,D.B8,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d7m=new C.rE(12,"cardBreaking")
D.dnK=new C.l_("breaking","Breaking Red",D.d7m,D.B8,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d7n=new C.rE(13,"cardFeature")
D.dnD=new C.l_("feature","Tech Feature",D.d7n,D.B8,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.azg=new C.rE(6,"circle")
D.aza=new C.Ap(4,"circle")
D.dnH=new C.l_("parchment","Royal Circle",D.azg,D.aza,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dnw=new C.l_("ocean","Blue Ocean",D.azg,D.aza,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d7q=new C.rE(7,"rail")
D.az9=new C.Ap(1,"double")
D.dny=new C.l_("forest","Green Leaf",D.d7q,D.az9,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.azd=new C.rE(1,"sideBySide")
D.dnM=new C.l_("herald","NGMY Herald",D.azd,D.B8,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.azc=new C.rE(0,"classic")
D.a0I=new C.Ap(9,"shadow")
D.dnL=new C.l_("daily","The Daily",D.azc,D.a0I,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d7o=new C.rE(2,"splash")
D.azb=new C.Ap(6,"cutCorner")
D.dnv=new C.l_("tabloid","Big Tabloid",D.d7o,D.azb,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.azh=new C.rE(9,"minimal")
D.dnG=new C.l_("modern","Modern Digest",D.azh,D.B8,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aze=new C.rE(3,"magazine")
D.az8=new C.Ap(0,"plain")
D.dnC=new C.l_("midnight","Midnight Edition",D.aze,D.az8,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d7r=new C.rE(8,"banner")
D.dnE=new C.l_("metro","Metro Wire",D.d7r,D.azb,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d7j=new C.Ap(8,"arch")
D.dnF=new C.l_("sunrise","Sunrise Post",D.aze,D.d7j,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.azf=new C.rE(5,"scrapbook")
D.d7i=new C.Ap(5,"tape")
D.dnA=new C.l_("neon","Neon Beat",D.azf,D.d7i,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d7p=new C.rE(4,"wrap")
D.dnN=new C.l_("gold","Golden Press",D.d7p,D.a0I,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dnO=new C.l_("minimal","Paper White",D.azh,D.a0I,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dnz=new C.l_("gazette","Fresh Gazette",D.azc,D.az9,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dnJ=new C.l_("times","Classic Times",D.azd,D.az8,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.OU=new C.Ap(2,"polaroid")
D.dnI=new C.l_("scrapbook","Memory Scrapbook",D.azf,D.OU,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_j=w([D.dnB,D.dnx,D.dnK,D.dnD,D.dnH,D.dnw,D.dny,D.dnM,D.dnL,D.dnv,D.dnG,D.dnC,D.dnE,D.dnF,D.dnA,D.dnN,D.dnO,D.dnz,D.dnJ,D.dnI],B.az("P<l_>"))
D.cN5=w([0.45,1],x.x)
D.Fz=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cNq=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fkp=new C.o6("Original",0,1,1,0,0,0)
D.fkt=new C.o6("Black & white",0,1.1,0,0,0,0)
D.fkg=new C.o6("Noir",-0.05,1.55,0,0,0,0)
D.fkk=new C.o6("Sepia",0,1,0.25,0.9,0,0)
D.fkj=new C.o6("Vivid",0,1.15,1.6,0,0,0)
D.fkc=new C.o6("Pop",0,1.3,1.9,0,0,0)
D.fke=new C.o6("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fkq=new C.o6("Matte",0,0.9,0.85,0,0,0.55)
D.fkl=new C.o6("Cool",0,1.05,1,-0.8,0,0)
D.fks=new C.o6("Warm",0.03,1.05,1.1,0.8,0,0)
D.fkd=new C.o6("Golden hour",0.04,1,1.25,1,0,0)
D.fki=new C.o6("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fkr=new C.o6("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fkh=new C.o6("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fkn=new C.o6("Retro",0,0.9,0.7,0.4,0,0.35)
D.fkm=new C.o6("Forest",0,1,1.2,-0.1,-0.45,0)
D.fko=new C.o6("Rose",0,1,1.1,0.3,0.4,0)
D.fkf=new C.o6("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cNr=w([D.fkp,D.fkt,D.fkg,D.fkk,D.fkj,D.fkc,D.fke,D.fkq,D.fkl,D.fks,D.fkd,D.fki,D.fkr,D.fkh,D.fkn,D.fkm,D.fko,D.fkf],B.az("P<o6>"))
D.aZv=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cNs=w([D.aaI,A.eA,D.aZv],x.O)
D.dXK=new B.A(0.12,0.3)
D.ebJ=new B.A(0.26,0.75)
D.ea8=new B.A(0.8,0.22)
D.efd=new B.A(0.9,0.7)
D.ect=new B.A(0.5,0.15)
D.edA=new B.A(0.65,0.85)
D.e28=new B.A(0.08,0.85)
D.cND=w([D.dXK,D.ebJ,D.ea8,D.efd,D.ect,D.edA,D.e28],x.G)
D.arI=w([A.b7,A.bU,A.bC,A.bh],x.O)
D.cOq=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cOC=w([A.c,A.fe,A.dB,A.u6],x.O)
D.b1m=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cPx=w([D.b1m,D.a9z],x.O)
D.cPy=w([A.w6,A.au],x.O)
D.cPM=w([0,0.25,0.75,1],x.x)
D.cPO=w([A.w2,A.nZ],x.O)
D.aAi=new C.kE(10,"kenteSunset")
D.foO=w([D.a9R,A.jx,A.au],x.O)
D.diT=new C.jb("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aAi,4294964964,4282000405,4279983648,D.jo)
D.aAj=new C.kE(11,"indigoMudcloth")
D.b_j=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fp1=w([D.b_j,A.a9w,A.hP],x.O)
D.dj0=new C.jb("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aAj,4294439140,4279903102,4279903102,D.jo)
D.aAk=new C.kE(12,"adinkraRoyal")
D.bau=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fp2=w([D.a8D,D.bau,A.au],x.O)
D.dj2=new C.jb("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aAk,4294965484,4285218591,4287322667,D.jo)
D.aAl=new C.kE(13,"nileLotus")
D.b7l=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b4z=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fp7=w([D.b7l,D.b4z,A.hP],x.O)
D.dj1=new C.jb("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aAl,4294244340,4279196764,4279196764,D.jo)
D.aAm=new C.kE(14,"shweshweIvory")
D.b2W=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b1Y=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b_L=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.foP=w([D.b2W,D.b1Y,D.b_L],x.O)
D.diY=new C.jb("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aAm,4294505710,4279970378,4291058750,D.jo)
D.qI=new C.kE(15,"certIvoryNavy")
D.foN=w([D.Jg,D.iY,A.hP],x.O)
D.azP=new C.wL(1,"ringsNdoa")
D.diV=new C.jb("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qI,4294966259,4279378237,4291404327,D.azP)
D.a1d=new C.wL(2,"coupleCards")
D.diQ=new C.jb("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qI,4294966259,4279378237,4291404327,D.a1d)
D.Bb=new C.kE(18,"certIvoryNavyBar")
D.a8C=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fp0=w([D.a8C,D.iY,A.hP],x.O)
D.azQ=new C.wL(3,"kuhoweshaForm")
D.diO=new C.jb("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Bb,4294966519,4279378237,4291404327,D.azQ)
D.a9I=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fpk=w([D.Jg,D.a9I,A.hP],x.O)
D.a1e=new C.wL(4,"mahariPande")
D.diR=new C.jb("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qI,4294966259,4279904068,4291404327,D.a1e)
D.aAn=new C.kE(16,"certIvoryGreen")
D.b2q=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.foR=w([A.IH,D.b2q,A.hP],x.O)
D.azR=new C.wL(5,"familiaMti")
D.diX=new C.jb("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aAn,4294966776,4280241466,4291404327,D.azR)
D.a1f=new C.wL(6,"ndoaSafi")
D.diP=new C.jb("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Bb,4294966519,4279378237,4291404327,D.a1f)
D.b65=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.foU=w([D.Jg,A.hP,D.b65],x.O)
D.a1g=new C.wL(7,"peteWide")
D.diU=new C.jb("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qI,4294966259,4282001936,4291404327,D.a1g)
D.dj3=new C.wL(8,"muhuriCrest")
D.diN=new C.jb("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qI,4294966259,4279378237,4291404327,D.dj3)
D.fp3=w([D.a8C,D.a9I,A.hP],x.O)
D.dj4=new C.wL(9,"fomuWazi")
D.dj_=new C.jb("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Bb,4294966519,4279904068,4291404327,D.dj4)
D.aAo=new C.kE(17,"certIvoryRose")
D.b2Y=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fp6=w([D.b2Y,D.aam,A.hP],x.O)
D.a1c=new C.wL(10,"upendoOrnate")
D.diW=new C.jb("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aAo,4294965493,4286200650,4291404327,D.a1c)
D.cQa=w([D.diT,D.dj0,D.dj2,D.dj1,D.diY,D.diV,D.diQ,D.diO,D.diR,D.diX,D.diP,D.diU,D.diN,D.dj_,D.diW],x.h)
D.e2=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Gm=new C.vf(0,"emojis")
D.Bi=new C.vf(1,"pictures")
D.Gn=new C.vf(2,"icons3d")
D.a1x=new C.vf(3,"animations")
D.Pp=new C.vf(4,"videoMotion")
D.Bj=new C.vf(5,"luxe")
D.a_p=w([D.Gm,D.Bi,D.Gn,D.a1x,D.Pp,D.Bj],B.az("P<vf>"))
D.ee9=new B.A(A.dP,"Looks")
D.e40=new B.A(A.xl,"Light")
D.e3Y=new B.A(A.nx,"Colour")
D.e29=new B.A(A.wW,"Effects")
D.age=new B.a0(63112,"MaterialIcons",!1)
D.e_o=new B.A(D.age,"Crop")
D.cQC=w([D.ee9,D.e40,D.e3Y,D.e29,D.e_o],x.f2)
D.cRc=w([],x.D)
D.fph=w([],x.L)
D.e2k=new B.A("Flashcard",D.Gh)
D.e5P=new B.A("Quiz",D.Gi)
D.e7B=new B.A("Worksheet",D.Gj)
D.e4W=new B.A("Notes",D.mb)
D.e6g=new B.A("Section",D.Bg)
D.cRN=w([D.e2k,D.e5P,D.e7B,D.e4W,D.e6g],B.az("P<+(n,m7)>"))
D.dkK=new C.kE(6,"beadedPearl")
D.b8G=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b58=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fpl=w([D.b8G,D.b58,A.hP],x.O)
D.azN=new C.jb("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dkK,4294966774,4286209070,4291404327,D.jo)
D.dkL=new C.kE(7,"artDeco")
D.b8r=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.baJ=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fpj=w([D.b8r,D.baJ,A.bT],x.O)
D.azO=new C.jb("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dkL,4294440434,4280228630,4290283019,D.jo)
D.dkM=new C.kE(8,"rosetteCorners")
D.ba2=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b1o=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b54=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.foX=w([D.ba2,D.b1o,D.b54],x.O)
D.azM=new C.jb("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dkM,4294702831,4285218602,4291394365,D.jo)
D.dkN=new C.kE(9,"modernLedger")
D.foW=w([A.c,D.iY,D.iY],x.O)
D.azL=new C.jb("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dkN,4294967295,4279378237,4279378237,D.jo)
D.cRR=w([D.azN,D.azO,D.azM,D.azL],x.h)
D.cRZ=w([A.id,A.nZ],x.O)
D.cd=new C.hn(0,"none")
D.db=new C.hn(1,"fade")
D.Gk=new C.hn(3,"slideRight")
D.aAK=new C.hn(5,"slideDown")
D.dFo=new C.hn(7,"zoomOut")
D.a1w=new C.hn(11,"cube")
D.dFj=new C.hn(12,"blur")
D.aAH=new C.hn(13,"dissolve")
D.dFk=new C.hn(14,"wipeLeft")
D.dFl=new C.hn(15,"wipeRight")
D.Po=new C.hn(17,"push")
D.dFm=new C.hn(18,"flash")
D.aAJ=new C.hn(20,"swing")
D.dFn=new C.hn(21,"curtain")
D.O4=w([D.cd,D.db,D.tm,D.Gk,D.tn,D.aAK,D.mc,D.dFo,D.Gl,D.aAL,D.Pn,D.a1w,D.dFj,D.aAH,D.dFk,D.dFl,D.pq,D.Po,D.dFm,D.aAI,D.aAJ,D.dFn],x.i)
D.O5=w([D.a1b,D.a19,D.a12,D.a13,D.a14,D.a17,D.a15,D.a16,D.a1a,D.a18,D.azN,D.azO,D.azM,D.azL],x.h)
D.cSp=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cSt=w([A.ze,A.hy,A.bT],x.O)
D.e3p=new B.A(A.rY,"Design")
D.efC=new B.A(D.agt,"Word sizes")
D.ecd=new B.A(A.Ar,"Text")
D.bsa=new B.a0(983182,"MaterialIcons",!1)
D.ech=new B.A(D.bsa,"Photo")
D.e_0=new B.A(A.l1,"Logo")
D.egG=new B.A(A.EW,"News")
D.cSy=w([D.e3p,D.efC,D.ecd,D.ech,D.e_0,D.egG],x.f2)
D.cSz=w(["golddust","sparkle","sheen"],x.s)
D.dGL=new C.ek("upload_pdf",K.Lt,"Upload PDF")
D.dFV=new C.ek("sign_paper",A.ET,"Sign Paper")
D.brt=new B.a0(63438,"MaterialIcons",!1)
D.dGH=new C.ek("hd_photo",D.brt,"HD Photo")
D.dFN=new C.ek("sharpen",E.Xp,"Sharpen")
D.dFX=new C.ek("print",K.Lt,"Download PDF")
D.dGo=new C.ek("rotate",D.age,"Rotate")
D.dG5=new C.ek("text_box",A.Ar,"Text Box")
D.dG7=new C.ek("picture",A.t0,"Picture")
D.dG3=new C.ek("title",A.xf,"Title")
D.dG_=new C.ek("subtitle",U.ah3,"Subtitle")
D.dGx=new C.ek("bullets",I.XH,"Bullet List")
D.dG0=new C.ek("numbered",A.Lj,"Numbered")
D.dGA=new C.ek("quote",A1.Aj,"Quote")
D.dGc=new C.ek("citation",A.pb,"Citation")
D.dGD=new C.ek("date_stamp",Au.Xu,"Date Stamp")
D.dGq=new C.ek("page_number",A.xe,"Page #")
D.dGu=new C.ek("header_bar",A.ES,"Header")
D.dG6=new C.ek("footer_bar",P.ahk,"Footer")
D.dFW=new C.ek("divider",A.uC,"Divider")
D.dFS=new C.ek("highlight",A.XM,"Highlight")
D.dGw=new C.ek("redact",A.xi,"Redact")
D.dGj=new C.ek("callout",A.Af,"Callout")
D.dGF=new C.ek("checkboxes",I.afx,"Checklist")
D.dGg=new C.ek("table",A.Yc,"Table")
D.dGa=new C.ek("memo",I.XY,"Memo")
D.dGk=new C.ek("letter",A.EE,"Letter")
D.br3=new B.a0(63259,"MaterialIcons",!0)
D.dFM=new C.ek("agenda",D.br3,"Agenda")
D.dFY=new C.ek("toc",At.agH,"Contents")
D.brp=new B.a0(63406,"MaterialIcons",!1)
D.dGh=new C.ek("sig_line",D.brp,"Sign Line")
D.dFF=new C.ek("initial_line",A.j3,"Initials")
D.dFI=new C.ek("approved",A.l1,"APPROVED")
D.dGm=new C.ek("draft",A.ph,"DRAFT")
D.dGs=new C.ek("confidential",A.j4,"Confidential")
D.dGv=new C.ek("sticky",A.Lx,"Sticky Note")
D.dGE=new C.ek("progress",A.agG,"Progress")
D.bsF=new B.a0(983507,"MaterialIcons",!1)
D.dFT=new C.ek("stars",D.bsF,"Star Rating")
D.dFD=new C.ek("equation",A.agw,"Equation")
D.dFO=new C.ek("timeline",A.Ly,"Timeline")
D.dGb=new C.ek("two_col",A.Ye,"Two Columns")
D.dFQ=new C.ek("compare",A0.Xx,"Compare")
D.dFB=new C.ek("duplicate_el",A.fD,"Duplicate")
D.dGJ=new C.ek("delete_el",A.e6,"Delete")
D.brk=new B.a0(63352,"MaterialIcons",!1)
D.dGz=new C.ek("bring_fwd",D.brk,"Bring Front")
D.brj=new B.a0(63351,"MaterialIcons",!1)
D.dFG=new C.ek("send_back",D.brj,"Send Back")
D.dGl=new C.ek("align_left",D.XF,"Align L")
D.dGr=new C.ek("align_center",D.XE,"Align C")
D.dGI=new C.ek("align_right",D.XG,"Align R")
D.dG4=new C.ek("word_count",A_.X6,"Word Count")
D.dG1=new C.ek("link_text",A.hb,"Link")
D.dGp=new C.ek("phone",A.iw,"Phone")
D.dFR=new C.ek("email",A.Ah,"Email")
D.dGK=new C.ek("qr_placeholder",A.j6,"QR Placeholder")
D.dFL=new C.ek("rectangle",A2.Es,"Rectangle")
D.dGf=new C.ek("circle",A.rT,"Circle")
D.dFH=new C.ek("arrow",A.jl,"Arrow")
D.dGy=new C.ek("line",A.uC,"Line")
D.dFU=new C.ek("triangle",A.Xv,"Triangle")
D.brb=new B.a0(63318,"MaterialIcons",!1)
D.dFZ=new C.ek("grayscale",D.brb,"Grayscale")
D.dG8=new C.ek("brighten",I.afR,"Brighten")
D.dGd=new C.ek("flip_h",A.Ev,"Flip H")
D.bri=new B.a0(63348,"MaterialIcons",!1)
D.dGG=new C.ek("flip_v",D.bri,"Flip V")
D.dGt=new C.ek("cover_page",A.p7,"Cover Page")
D.dFE=new C.ek("invoice",A.fX,"Invoice")
D.dFP=new C.ek("resume",A.m_,"Resume")
D.dG2=new C.ek("minutes",A.ob,"Minutes")
D.dFJ=new C.ek("lab_report",A.Lu,"Lab Report")
D.dFK=new C.ek("rubric",A.x_,"Rubric")
D.dGe=new C.ek("flashcard_tool",P.EN,"Flashcard")
D.dGB=new C.ek("quiz_tool",A.EJ,"Quiz Block")
D.dGi=new C.ek("worksheet_tool",L.Em,"Worksheet")
D.dGn=new C.ek("outline_share",A.Lv,"Share Outline")
D.dGC=new C.ek("export_json",D.afD,"Export JSON")
D.dFC=new C.ek("new_slide",D.X5,"New Slide")
D.dG9=new C.ek("present",A.pd,"Present")
D.cSY=w([D.dGL,D.dFV,D.dGH,D.dFN,D.dFX,D.dGo,D.dG5,D.dG7,D.dG3,D.dG_,D.dGx,D.dG0,D.dGA,D.dGc,D.dGD,D.dGq,D.dGu,D.dG6,D.dFW,D.dFS,D.dGw,D.dGj,D.dGF,D.dGg,D.dGa,D.dGk,D.dFM,D.dFY,D.dGh,D.dFF,D.dFI,D.dGm,D.dGs,D.dGv,D.dGE,D.dFT,D.dFD,D.dFO,D.dGb,D.dFQ,D.dFB,D.dGJ,D.dGz,D.dFG,D.dGl,D.dGr,D.dGI,D.dG4,D.dG1,D.dGp,D.dFR,D.dGK,D.dFL,D.dGf,D.dFH,D.dGy,D.dFU,D.dFZ,D.dG8,D.dGd,D.dGG,D.dGt,D.dFE,D.dFP,D.dG2,D.dFJ,D.dFK,D.dGe,D.dGB,D.dGi,D.dGn,D.dGC,D.dFC,D.dG9],B.az("P<ek>"))
D.cT3=w([A.cp,A.ai],x.O)
D.dZC=new B.A(4286331629,4292552567)
D.dZp=new B.A(4280640491,4278630100)
D.dZK=new B.A(4294538006,4292943176)
D.dYM=new B.A(4278556265,4280640491)
D.cNN=w([D.dZC,D.dZp,D.dZK,D.dYM],x.n)
D.cdi=w([4294626325,4280472558,4294210230],x.t)
D.dFw=new C.nl("colorful","Colorful",A.nx,D.cNN,4294967295,3875536895,D.cdi,D.mc)
D.dZd=new B.A(4279522093,4279657780)
D.dZt=new B.A(4281750292,4283268111)
D.dYP=new B.A(4278603323,4279203438)
D.dZu=new B.A(4282343954,4279599165)
D.co1=w([D.dZd,D.dZt,D.dYP,D.dZu],x.n)
D.cd0=w([4288931381,4294829706,4287033260],x.t)
D.dFs=new C.nl("nature","Nature",A.EU,D.co1,4294442727,3874290891,D.cd0,D.db)
D.dZ7=new B.A(4279369771,4283178389)
D.dZ4=new B.A(4279179050,4286456526)
D.dZl=new B.A(4280163147,4290648157)
D.dYE=new B.A(4278322711,4285343961)
D.cF0=w([D.dZ7,D.dZ4,D.dZl,D.dYE],x.n)
D.cde=w([4294210230,4280472558,4289170426],x.t)
D.dFq=new C.nl("vibe","Vibe",A.XJ,D.cF0,4294967295,3874869502,D.cde,D.tm)
D.dZG=new B.A(4290007817,4292552567)
D.dZA=new B.A(4286328082,4294286859)
D.dZF=new B.A(4288485197,4294538006)
D.dZz=new B.A(4285343961,4293675161)
D.bKz=w([D.dZG,D.dZA,D.dZF,D.dZz],x.n)
D.cdj=w([4294829706,4294967295,4284999929],x.t)
D.dFr=new C.nl("celebration","Celebration",A.kZ,D.bKz,4294967295,4009752557,D.cdj,D.pq)
D.dZ2=new B.A(4279179050,4280171146)
D.dZ6=new B.A(4279310375,4280232247)
D.dYV=new B.A(4278916151,4280172719)
D.dZ3=new B.A(4279179050,4281549141)
D.cyv=w([D.dZ2,D.dZ6,D.dYV,D.dZ3],x.n)
D.ccW=w([4281908728,4294626325,4287931320],x.t)
D.dFv=new C.nl("professional","Professional",A.Ad,D.cyv,4294967295,3872118241,D.ccW,D.Po)
D.dYZ=new B.A(4278995566,4278413729)
D.dYR=new B.A(4278727492,4279137424)
D.dZm=new B.A(4280171146,4278751666)
D.dZ_=new B.A(4278995566,4279590517)
D.ch3=w([D.dYZ,D.dYR,D.dZm,D.dZ_],x.n)
D.ccZ=w([4286436348,4284410580,4294829706],x.t)
D.dFx=new C.nl("ocean","Ocean",I.Yg,D.ch3,4294967295,3873501950,D.ccZ,D.tn)
D.dZB=new B.A(4286328082,4294538006)
D.dZD=new B.A(4286781507,4294677052)
D.dZx=new B.A(4283178389,4294197086)
D.dZE=new B.A(4288295954,4294688548)
D.cuK=w([D.dZB,D.dZD,D.dZx,D.dZE],x.n)
D.cdk=w([4294829706,4294967295,4294747557],x.t)
D.dFy=new C.nl("sunset","Sunset",A.Lz,D.cuK,4294967295,4009749973,D.cdk,D.db)
D.dZO=new B.A(4294967295,4294047225)
D.dZJ=new B.A(4294507260,4294967295)
D.dZN=new B.A(4294967295,4293060848)
D.dZI=new B.A(4294507260,4294047225)
D.cHW=w([D.dZO,D.dZJ,D.dZN,D.dZI],x.n)
D.ccU=w([4280640491,4279179050,4287931320],x.t)
D.dFu=new C.nl("minimal","Minimal",A2.Es,D.cHW,4279179050,4282865001,D.ccU,D.db)
D.dYY=new B.A(4278979081,4280886564)
D.dZh=new B.A(4280031511,4278979081)
D.dZ5=new B.A(4279308561,4281148438)
D.dYX=new B.A(4278979081,4280031511)
D.cUO=w([D.dYY,D.dZh,D.dZ5,D.dYX],x.n)
D.cd7=w([4292128567,4294829706,4289241758],x.t)
D.dFz=new C.nl("elegant","Elegant",A.lv,D.cUO,4294898631,3873957348,D.cd7,D.aAH)
D.dZj=new B.A(4280159034,4282058596)
D.dYU=new B.A(4278916151,4280163147)
D.dZr=new B.A(4281208933,4278916151)
D.dZa=new B.A(4279502891,4283178389)
D.d_N=w([D.dZj,D.dYU,D.dZr,D.dZa],x.n)
D.cdg=w([4294296657,4292128567,4291081725],x.t)
D.dFt=new C.nl("royal","Royal Gold",A.iO,D.d_N,4294965222,3874084351,D.cdg,D.mc)
D.dYJ=new B.A(4278464302,4280163147)
D.dYT=new B.A(4278916151,4279455306)
D.dZk=new B.A(4280163147,4283040846)
D.dYG=new B.A(4278332450,4281413249)
D.cNv=w([D.dYJ,D.dYT,D.dZk,D.dYG],x.n)
D.ccV=w([4281193663,4289170426,4294210230],x.t)
D.dFA=new C.nl("aurora","Aurora Glow",A.dP,D.cNv,4293983738,3869766608,D.ccV,D.db)
D.uY=w([D.dFw,D.dFs,D.dFq,D.dFr,D.dFv,D.dFx,D.dFy,D.dFu,D.dFz,D.dFt,D.dFA],B.az("P<nl>"))
D.b5A=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cTw=w([A.q0,D.b5A,A.q0],x.O)
D.cTL=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cTP=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.ec7=new B.A("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.e3_=new B.A("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.e7c=new B.A("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dWV=new B.A("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.e5W=new B.A("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e4k=new B.A("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.e8k=new B.A("Surprise me","")
D.cUi=w([D.ec7,D.e3_,D.e7c,D.dWV,D.e5W,D.e4k,D.e8k],x.L)
D.b_N=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b8P=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cUZ=w([A.c,D.b_N,D.b8P],x.O)
D.cWC=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aAg=new C.kE(0,"heritageGold")
D.b4n=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b4o=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.fpm=w([D.b4n,D.b4o,A.au],x.O)
D.diZ=new C.jb("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aAg,4294570461,4284234270,4292128567,D.jo)
D.aAh=new C.kE(1,"heritageCrimson")
D.aZr=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b2X=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b8H=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fp_=w([D.aZr,D.b2X,D.b8H],x.O)
D.diS=new C.jb("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aAh,4294635750,4285213214,4292912216,D.jo)
D.cWG=w([D.a1b,D.a19,D.diZ,D.diS,D.a14,D.a17],x.h)
D.doR=new C.qS(1,"circuit")
D.dpj=new C.lN("neural","Neural Link","Robotic",D.doR,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.doQ=new C.qS(0,"grid")
D.dpg=new C.lN("signal","Signal Grid","Robotic",D.doQ,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.doW=new C.qS(2,"hexes")
D.dp1=new C.lN("core","Core Protocol","Robotic",D.doW,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aAE=new C.qS(11,"diagonal")
D.dpc=new C.lN("steel","Steel Tech","Robotic",D.aAE,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aAF=new C.qS(3,"rings")
D.dp0=new C.lN("vault","Vault Gold","Robotic",D.aAF,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.doU=new C.qS(13,"leaves")
D.dp3=new C.lN("forest","Forest Morning","Nature",D.doU,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aAG=new C.qS(5,"waves")
D.dpa=new C.lN("ocean","Ocean Calm","Nature",D.aAG,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.doX=new C.qS(6,"sunset")
D.dpf=new C.lN("sunset","Sunset Glow","Nature",D.doX,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.doY=new C.qS(7,"mountains")
D.dp2=new C.lN("mountain","Mountain Air","Nature",D.doY,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.doZ=new C.qS(8,"stars")
D.dp9=new C.lN("night","Night Sky","Nature",D.doZ,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1u=new C.qS(4,"orbs")
D.dp7=new C.lN("aurora","Aurora","Nature",D.a1u,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dph=new C.lN("sand","Sand Dune","Nature",D.aAG,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dp_=new C.qS(9,"rays")
D.dp6=new C.lN("golden","Golden Hour","Warm",D.dp_,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dp4=new C.lN("royal","Royal Purple","Warm",D.aAE,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dp5=new C.lN("rose","Rose Petal","Warm",D.a1u,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.doT=new C.qS(12,"blocks")
D.dp8=new C.lN("electric","Electric Blue","Bold",D.doT,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dpi=new C.lN("mint","Fresh Mint","Bold",D.a1u,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.doV=new C.qS(14,"minimal")
D.dpe=new C.lN("white","Clean White","Clean",D.doV,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.doS=new C.qS(10,"frame")
D.dpb=new C.lN("midnight","Midnight Gold","Clean",D.doS,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dpd=new C.lN("community","Community Green","Clean",D.aAF,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_Q=w([D.dpj,D.dpg,D.dp1,D.dpc,D.dp0,D.dp3,D.dpa,D.dpf,D.dp2,D.dp9,D.dp7,D.dph,D.dp6,D.dp4,D.dp5,D.dp8,D.dpi,D.dpe,D.dpb,D.dpd],B.az("P<lN>"))
D.cX1=w([D.zk,A.w6,A.hy,A.bT],x.O)
D.cXg=w([D.aav,D.iY],x.O)
D.cXp=w(["pdf","docx","txt","md"],x.s)
D.ejK=new B.bz(-3,150,34)
D.ejL=new B.bz(-3,214,62)
D.ejM=new B.bz(-3,288,62)
D.cYd=w([D.ejK,D.ejL,D.ejM],B.az("P<+(O,O,O)>"))
D.cYF=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cZc=w(["Write","Design","Print & fold"],x.s)
D.jp=new C.u5(2,"triangle")
D.Bh=new C.u5(3,"arrow")
D.fk=new C.u5(4,"line")
D.jq=new C.u5(5,"parallelogram")
D.cZe=w([D.bc,D.eF,D.jp,D.Bh,D.fk,D.jq,D.kK],x.m)
D.dXY=new B.A(240,96)
D.e_h=new B.A(560,46)
D.cZj=w([D.dXY,D.e_h],x.G)
D.fpx=new C.wO(0,"classic")
D.dkQ=new C.nh("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aAg,4294570461,4282000405,4284234270)
D.dl1=new C.nh("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aAh,4294635750,4281999378,4285213214)
D.dkR=new C.nh("elegant_navy","Umoja Mzuri",y.s,D.a1o,4294967035,4279378237,4290283019)
D.dl3=new C.nh("elegant_gold","Umoja wa Dhahabu",y.Q,D.aAp,4294966515,4281016592,4289102906)
D.dl5=new C.nh("kente_sunset","Kente ya Jua",y.H,D.aAi,4294964964,4282000405,4279983648)
D.dkO=new C.nh("indigo_mudcloth","Nguo ya Indigo",y.n,D.aAj,4294439140,4279903102,4279903102)
D.dkT=new C.nh("adinkra_royal","Muhuri wa Adinkra",y.z,D.aAk,4294965484,4285218591,4287322667)
D.dkY=new C.nh("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aAl,4294244340,4279196764,4279196764)
D.dl_=new C.nh("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aAm,4294505710,4279970378,4291058750)
D.fpy=new C.wO(1,"ringsNdoa")
D.dkS=new C.nh("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qI,4294966259,4279378237,4291404327)
D.fpA=new C.wO(2,"coupleCards")
D.dl2=new C.nh("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qI,4294966259,4279378237,4291404327)
D.fpB=new C.wO(3,"kuhoweshaForm")
D.dkZ=new C.nh("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Bb,4294966519,4279378237,4291404327)
D.fpC=new C.wO(4,"mahariPande")
D.dkP=new C.nh("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qI,4294966259,4279904068,4291404327)
D.fpD=new C.wO(5,"familiaMti")
D.dl4=new C.nh("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aAn,4294966776,4280241466,4291404327)
D.fpE=new C.wO(6,"ndoaSafi")
D.dkW=new C.nh("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Bb,4294966519,4279378237,4291404327)
D.fpF=new C.wO(7,"peteWide")
D.dkV=new C.nh("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qI,4294966259,4282001936,4291404327)
D.fpG=new C.wO(8,"muhuriCrest")
D.dkU=new C.nh("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qI,4294966259,4279378237,4291404327)
D.fpH=new C.wO(9,"fomuWazi")
D.dkX=new C.nh("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Bb,4294966519,4279904068,4291404327)
D.fpz=new C.wO(10,"upendoOrnate")
D.dl0=new C.nh("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aAo,4294965493,4286200650,4291404327)
D.Oh=w([D.dkQ,D.dl1,D.dkR,D.dl3,D.dl5,D.dkO,D.dkT,D.dkY,D.dl_,D.dkS,D.dl2,D.dkZ,D.dkP,D.dl4,D.dkW,D.dkV,D.dkU,D.dkX,D.dl0],B.az("P<nh>"))
D.Bf=new C.aoC(0,"landscape169")
D.nE=new C.aoC(1,"portrait916")
D.cZZ=w([D.Bf,D.nE],B.az("P<aoC>"))
D.at6=w([A.hy,A.bH,A.cQ,A.id,A.c],x.O)
D.te=w([A.bT,A.j_],x.O)
D.dXf=new B.A(1000,"M")
D.e0i=new B.A(900,"CM")
D.e_c=new B.A(500,"D")
D.dYC=new B.A(400,"CD")
D.dXg=new B.A(100,"C")
D.e0j=new B.A(90,"XC")
D.e_d=new B.A(50,"L")
D.dYD=new B.A(40,"XL")
D.dXk=new B.A(10,"X")
D.e0t=new B.A(9,"IX")
D.e_r=new B.A(5,"V")
D.e__=new B.A(4,"IV")
D.dXF=new B.A(1,"I")
D.d_w=w([D.dXf,D.e0i,D.e_c,D.dYC,D.dXg,D.e0j,D.e_d,D.dYD,D.dXk,D.e0t,D.e_r,D.e__,D.dXF],x.ek)
D.ekD=new B.cH(["open",A.j3,"Open & write","Keep writing this book"])
D.el1=new B.cH(["print",A.t3,"Print as a book","Fold and staple it"])
D.d_D=w([D.ekD,D.el1],B.az("P<+(n,a0,n,n)>"))
D.d0f=w([D.a1w,D.mc,D.Gl,D.Po,D.db,D.Pn],x.i)
D.ecB=new B.A(-1,"Small")
D.dX3=new B.A(0,"Normal")
D.dXE=new B.A(1,"Big")
D.dYb=new B.A(2,"Huge")
D.d0E=w([D.ecB,D.dX3,D.dXE,D.dYb],x.ek)
D.d12=w([49,65,89,38,83,89],x.t)
D.d19=w([A.w6,A.hy,A.bT],x.O)
D.d1z=w([D.db,D.mc,D.tm,D.a1w,D.Gl,D.Po],x.i)
D.ayn=new B.dX([0,D.Jt,8,D.abF,12,D.abG],B.az("dX<I,a1T>"))
D.dKn={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b8A=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cyF=w([A.bH,D.b8A],x.O)
D.cRz=w([A.be,A.bk],x.O)
D.cMI=w([A.bU,A.aX,A.cE],x.O)
D.d_E=w([A.cp,A.bt],x.O)
D.cFR=w([A.b7,A.fc],x.O)
D.cPc=w([A.b3,A.f0],x.O)
D.b2J=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cOx=w([D.b2J,A.nZ],x.O)
D.cJs=w([A.hk,A.u8],x.O)
D.cFH=w([A.bq,A.cb],x.O)
D.d49=new B.bs(D.dKn,[D.cyF,H.ajX,D.cRz,D.cMI,D.d_E,D.cFR,D.cPc,D.cOx,D.cJs,D.cFH],B.az("bs<n,ak<x>>"))
D.dJB={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a0o=new B.bs(D.dJB,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bs<n,n>"))
D.a0u=new B.bs(A.iA,[],B.az("bs<I,+icon3d,picture(n?,n?)>"))
D.d83=new F.Ll(30,null)
D.dd7=new F.m3("Chapter 1","","","")
D.cZM=w([D.dd7],x.B)
D.ddb=new F.qI("My Book","","",D.cZM,E.azC)
D.dd9=new F.tW("starry",null,null,null,null,"","","")
D.ddc=new F.qI("Dream Big","","",E.a_z,D.dd9)
D.dda=new F.tW("story",null,null,null,null,"","","")
D.ddd=new F.qI("Little Lion","","",E.a_z,D.dda)
D.dd8=new F.tW("vintage",null,null,null,null,"","","")
D.dde=new F.qI("Our Story","","",E.a_z,D.dd8)
D.dge=new C.Dm("","NGMY","","")
D.dnu=new C.yz("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dFp=new C.aYW(null,null,null,null)
D.dH7=new C.aoH(null)
D.dHk=new C.apc(0,"smaller")
D.dHl=new C.apc(1,"bigger")
D.aAU=new C.apc(2,"fit")
D.dMG=new B.u(3,6)
D.dMQ=new B.u(4,8)
D.dQ1=new B.C(E.acr,U.a8b,null)
D.dQ5=new B.C(A.V9,A.lM,null)
D.btV=new B.ad(A.mI,16,A.c2,null,null,null)
D.dQ9=new B.C(A.kx,D.btV,null)
D.aYV=new B.fd(2.2,null,null,null,null,A.c,null,null,null,null)
D.dQj=new B.C(A.E_,D.aYV,null)
D.bDV=new B.ad(A.ct,16,A.aA,null,null,null)
D.dQn=new B.C(A.eh,D.bDV,null)
D.eY5=new B.w("Play",null,A.oy,null,null,null,null,null,null,null,null,null)
D.cRO=w([V.air,A.tG,D.eY5],x.p)
D.eoQ=new B.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.cRO,null)
D.dQq=new B.C(A.qi,D.eoQ,null)
D.aZ3=new B.fd(2.4,null,null,null,null,null,null,null,null,null)
D.etI=new B.a5(20,20,D.aZ3,null)
D.dQv=new B.C(A.kx,D.etI,null)
D.f5t=new B.w("Seconds per slide",null,A.hf,null,null,null,null,null,null,null,null,null)
D.dQC=new B.C(A.bl,D.f5t,null)
D.dRC=new C.a6C(2,"print")
D.dRF=new B.iH(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dTh=new B.h0("/Annot")
D.dTj=new B.h0("/URI")
D.eSS=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dV1=new B.jd("share",48,D.eSS,null,B.az("jd<n>"))
D.bDQ=new B.ad(A.dP,14,A.ew,null,null,null)
D.dVa=new B.cG(null,-2,-2,null,null,null,D.bDQ,null)
D.b5X=new B.x(0.3333333333333333,0,0,0,A.t)
D.cAu=w([D.b5X,A.K],x.O)
D.bJp=new B.a3(A.a3,A.a7,A.w,D.cAu,null,null)
D.aS7=new B.o(null,null,null,null,null,D.bJp,A.n)
D.bcD=new B.kB(D.aS7,A.bb,null,null)
D.dVm=new B.cG(0,0,null,0,8,null,D.bcD,null)
D.cVI=w([A.hO,A.o_,A.ck],x.O)
D.dW_=new B.bR(A.A,0.5,A.w,null,0,D.cVI,null,null)
D.dY4=new B.A(0.22,A.bk)
D.e0M=new B.A("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.e2F=new B.A(0.5,A.hw)
D.ebl=new B.A(0.78,A.aS)
D.eku=new B.cH([A.bC,0.22,0.7,2.6])
D.ekz=new B.cH([A.b7,0.36,1.2,1.3])
D.ekF=new B.cH([A.dI,0.28,0.2,0.4])
D.ekL=new B.cH([A.cD,0.05,0.3,0.35])
D.ekR=new B.cH([A.bq,0.28,0.9,0])
D.ekZ=new B.cH([A.aB,-0.25,-0.15,0.45])
D.elK=new B.cH([A.bU,0.42,1,4.1])
D.eoz=new B.a7u(9)
D.bv0=new B.ad(A.EW,28,A.cE,null,null,null)
D.f5Z=new B.w("NGMY News",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.bm8=new B.bH(1,A.br,D.f5Z,null)
D.cYI=w([D.bv0,A.ax,D.bm8],x.p)
D.eoL=new B.cC(A.b0,A.e,A.j,A.m,null,A.p,null,0,D.cYI,null)
D.bvb=new B.ad(A.pb,16,A.c,null,null,null)
D.f7j=new B.w("Book",null,A.qW,null,null,null,null,null,null,null,null,null)
D.d18=w([D.bvb,A.ez,D.f7j],x.p)
D.eoS=new B.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.d18,null)
D.bBv=new B.ad(A.j4,10,A.c,null,null,null)
D.eWl=new B.w("Pro",null,A.mV,null,null,null,null,null,null,null,null,null)
D.cRT=w([D.bBv,A.vg,D.eWl],x.p)
D.eoV=new B.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.cRT,null)
D.f5s=new B.w("Make a newspaper",null,An.Ra,null,null,null,null,null,null,null,null,null)
D.bKx=w([E.YB,A.aa,D.f5s],x.p)
D.eoW=new B.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.bKx,null)
D.bA6=new B.ad(A.kZ,18,A.bH,null,null,null)
D.eYj=new B.w("Ending celebration",null,A.ja,null,null,null,null,null,null,null,null,null)
D.cXO=w([D.bA6,A.bo,D.eYj],x.p)
D.eoZ=new B.cC(A.b0,A.e,A.j,A.m,null,A.p,null,0,D.cXO,null)
D.bBh=new B.ad(A.j3,18,A.kt,null,null,null)
D.eDW=new B.F(!0,A.kt,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7z=new B.w("Write",null,D.eDW,null,null,null,null,null,null,null,null,null)
D.cHL=w([D.bBh,A.aa,D.f7z],x.p)
D.ep4=new B.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.cHL,null)
D.eWk=new B.w("Download picture",null,A.pC,null,null,null,null,null,null,null,null,null)
D.bnU=new B.pO(A.eb,A.A,A.h,D.eWk,null)
D.bo4=new B.dm(1,A.ci,D.bnU,null)
D.cSe=w([K.aih,A.aa,D.bo4],x.p)
D.ep5=new B.cC(A.b0,A.b6,A.j,A.m,null,A.p,null,0,D.cSe,null)
D.bwW=new B.ad(A.EW,22,A.cE,null,null,null)
D.f4c=new B.w("NGMY NEWS",null,H.a49,null,null,null,null,null,null,null,null,null)
D.cA_=w([D.bwW,A.aa,D.f4c],x.p)
D.epd=new B.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.cA_,null)
D.epo=new B.oG(!1,!1,null,U.T0,null,A.bX,null,null,null)
D.a3a=new B.jD([D.cd,D.db,D.tm,D.Gk,D.tn,D.aAK],B.az("jD<hn>"))
D.dLu={title:0,quote:1,closing:2,bio:3}
D.eqa=new B.f8(D.dLu,4,x.M)
D.dJS={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eqc=new B.f8(D.dJS,5,x.M)
D.dL1={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a3b=new B.f8(D.dL1,8,x.M)
D.dKv={Design:0,Transitions:1,Insert:2}
D.eqg=new B.f8(D.dKv,3,x.M)
D.fpP=new B.jD([D.a1x],B.az("jD<vf>"))
D.dKC={float3d:0,drift:1,pulse:2}
D.eqj=new B.f8(D.dKC,3,x.M)
D.aHG=new B.jD([D.Gh,D.Gi,D.Gj],B.az("jD<m7>"))
D.dJP={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aHJ=new B.f8(D.dJP,14,x.M)
D.fpQ=new B.f8(A.iA,0,B.az("f8<vf>"))
D.dKz={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Ql=new B.f8(D.dKz,4,x.M)
D.dJJ={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aHL=new B.f8(D.dJJ,30,x.M)
D.dKH={circle:0,triangle:1,hexagon:2,diamond:3}
D.eqz=new B.f8(D.dKH,4,x.M)
D.esH=new B.ar(390,844)
D.ets=new B.a5(20,20,A4.IC,null)
D.aIw=new B.a5(null,2.5,null,null)
D.etC=new B.a5(18,18,A4.IC,null)
D.bBl=new B.ad(A.iO,19,A.c,null,null,null)
D.etN=new B.a5(38,38,D.bBl,null)
D.bzI=new B.ad(A.xm,22,A.c,null,null,null)
D.etP=new B.a5(40,40,D.bzI,null)
D.eum=new B.hJ(2,10,10,1.15,null)
D.aIE=new B.hJ(2,16,14,0.62,null)
D.bkh=new B.N(32,30,32,40)
D.b_c=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.buY=new B.ad(A.p7,56,D.b_c,null,null,null)
D.ab0=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eFU=new B.F(!0,D.ab0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1r=new B.w("Your books will live here.",null,D.eFU,null,A.L,null,null,null,null,null,null,null)
D.cKk=w([D.buY,A.T,D.f1r],x.p)
D.bbQ=new B.fm(A.ak,A.e,A.j,A.m,null,A.p,null,0,D.cKk,null)
D.dQA=new B.C(D.bkh,D.bbQ,null)
D.euH=new B.lP(D.dQA,null)
D.f1o=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.euZ=new B.b_(D.f1o,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f_C=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ev_=new B.b_(D.f_C,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4e=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ev8=new B.b_(D.f4e,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4J=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.evn=new B.b_(D.f4J,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eZp=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.evA=new B.b_(D.eZp,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.fbd=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.evT=new B.b_(D.fbd,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f8z=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ew3=new B.b_(D.f8z,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4R=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ewK=new B.b_(D.f4R,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUJ=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.ex_=new B.b_(D.eUJ,null,null,null,null,null,null,null,A.i8,null,null,null,null,A.oZ,!1,null,null,null,A.q,null)
D.eWr=new B.w("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.exh=new B.b_(D.eWr,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f16=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.exj=new B.b_(D.f16,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f0O=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.exk=new B.b_(D.f0O,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f6G=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.exl=new B.b_(D.f6G,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eR7=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.exu=new B.b_(D.eR7,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eXv=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.exR=new B.b_(D.eXv,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.fa4=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.exT=new B.b_(D.fa4,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f9H=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.exX=new B.b_(D.f9H,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQd=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.exZ=new B.b_(D.eQd,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f5U=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ey7=new B.b_(D.f5U,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f9h=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eym=new B.b_(D.f9h,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f98=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eyo=new B.b_(D.f98,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQ5=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eyu=new B.b_(D.eQ5,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTM=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eyW=new B.b_(D.eTM,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f8m=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ez6=new B.b_(D.f8m,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTA=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ezl=new B.b_(D.eTA,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b5k=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cyT=w([A.id,A.nZ,D.b5k,D.a8u,A.id],x.O)
D.ezJ=new B.fS(A.A,0,6.283185307179586,A.w,D.cyT,null,null)
D.cH2=w([A.bH,A.bT,A.hy,D.zk,A.bH],x.O)
D.aJd=new B.fS(A.A,0,6.283185307179586,A.w,D.cH2,null,null)
D.cTJ=w([A.bU,A.bC,A.b7,A.bh,A.cE,A.bU],x.O)
D.ezO=new B.fS(A.A,0,6.283185307179586,A.w,D.cTJ,null,null)
D.cAI=w([A.oX,A.o0,A.zb,A.id,A.oX],x.O)
D.ezP=new B.fS(A.A,0,6.283185307179586,A.w,D.cAI,null,null)
D.cTD=w([A.aN,A.bI,A.aJ,A.ai,A.aN],x.O)
D.ezQ=new B.fS(A.A,0,6.283185307179586,A.w,D.cTD,null,null)
D.d_n=w([A.bq,A.b7,A.bC,A.bU,A.bq],x.O)
D.ezS=new B.fS(A.A,0,6.283185307179586,A.w,D.d_n,null,null)
D.b5z=new B.x(1,0,1,1,A.t)
D.b0i=new B.x(1,1,0,1,A.t)
D.cWU=w([A.CW,A.a9X,H.a96,D.b5z,H.a9r,D.b0i,A.CW],x.O)
D.ezT=new B.fS(A.A,0,6.283185307179586,A.w,D.cWU,null,null)
D.eA7=new C.ata(2,"immersiveSticky")
D.eA8=new C.ata(3,"edgeToEdge")
D.eA9=new C.ata(4,"manual")
D.eCi=new B.F(!0,A.nU,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJK=new B.F(!0,A.fj,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCP=new B.F(!0,E.mv,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEd=new B.F(!0,A.af,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFc=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFl=new B.F(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFG=new B.F(!0,A.ew,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGX=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH5=new B.F(!0,A.j1,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHi=new B.r0(!0,A.GD,null,null,null,null,A.dm,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHL=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIl=new B.F(!0,A.j0,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIH=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dRI=new B.iH(1,1,0.7568627450980392,0.027450980392156862)
D.eIL=new B.r0(!0,D.dRI,null,null,null,null,A.dm,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa2=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aKr=new B.F(!0,D.aa2,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIR=new B.F(!0,D.ab0,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIS=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKt=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJr=new B.r0(!0,A.op,null,null,null,null,A.dm,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJK=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.R6=new B.F(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKf=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKh=new B.F(!0,D.aa2,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hr=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKK=new B.F(!0,A.bT,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKS=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKV=new B.F(!0,A.bH,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLa=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ar2,null,null,null)
D.eLc=new B.F(!0,A.cF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLe=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLr=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLC=new B.F(!0,A.dB,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM9=new B.F(!0,A.aP,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMi=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMx=new B.F(!0,A.af,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL2=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL4=new B.F(!0,A.c2,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b9S=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eOg=new B.F(!0,D.b9S,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLc=new B.F(!0,E.mv,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOI=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOL=new B.F(!0,O.kV,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHY=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePT=new B.w("NEW",null,D.eHY,null,null,null,null,null,null,null,null,null)
D.eQ8=new B.w("Hati ya Kuhowesha",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eQy=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eQS=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eRw=new B.w("Big quote mark",null,A.iC,null,null,null,null,null,null,null,null,null)
D.eRz=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eRK=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eSb=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eSc=new B.w("How many slides?",null,A.hf,null,null,null,null,null,null,null,null,null)
D.eSJ=new B.w("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eDZ=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT2=new B.w("Luxury FX",null,D.eDZ,null,null,null,null,null,null,null,null,null)
D.eTk=new B.w("Font",null,A.qX,null,null,null,null,null,null,null,null,null)
D.eTv=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eTB=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eNO=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTJ=new B.w("Example  GA847",null,D.eNO,null,null,null,null,null,null,null,null,null)
D.eU7=new B.w("Design shapes",null,A.iC,null,null,null,null,null,null,null,null,null)
D.eUf=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eUj=new B.w("Non-stop (loop)",null,A.hf,null,null,null,null,null,null,null,null,null)
D.eUx=new B.w("Hati ya Kuhoweya",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eUQ=new B.w("Photo studio",null,A.fR,null,null,null,null,null,null,null,null,null)
D.eVf=new B.w("Add your picture",null,A.l8,null,null,null,null,null,null,null,null,null)
D.eHj=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVg=new B.w("Enter document code",null,D.eHj,null,A.L,null,null,null,null,null,null,null)
D.eVh=new B.w("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.eVm=new B.w("English",null,null,null,null,null,null,null,null,null,null,null)
D.eF1=new B.F(!0,E.mv,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVE=new B.w("Delete this book?",null,D.eF1,null,A.L,null,null,null,null,null,null,null)
D.eJh=new B.F(!0,E.mv,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWt=new B.w("Your library",null,D.eJh,null,null,null,null,null,null,null,null,null)
D.eWx=new B.w("Delete",null,A.aKk,null,null,null,null,null,null,null,null,null)
D.eWz=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Am.Hp,null,null,null,null,null,null,null,null,null)
D.eWJ=new B.w("Element flies in",null,A.aKx,null,null,null,null,null,null,null,null,null)
D.Rn=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eX5=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eXo=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eXs=new B.w("Cancel",null,E.aKJ,null,null,null,null,null,null,null,null,null)
D.eXu=new B.w("The lines and circles that come with the design",null,A.ht,null,null,null,null,null,null,null,null,null)
D.eMF=new B.F(!0,A.h6,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new B.w("DOCUMENT CODE",null,D.eMF,null,null,null,null,null,null,null,null,null)
D.eYD=new B.w("Quotes",null,G.a4L,null,null,null,null,null,null,null,null,null)
D.eGK=new B.F(!0,O.kV,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYL=new B.w("Add a picture",null,D.eGK,null,null,null,null,null,null,null,null,null)
D.eYS=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,R.aKm,null,A.L,null,null,null,null,null,null,null)
D.eYV=new B.w("Look & feel",null,A.hf,null,null,null,null,null,null,null,null,null)
D.eYZ=new B.w("Rings",null,A.ja,null,null,null,null,null,null,null,null,null)
D.eZ3=new B.w("W",null,A.qX,null,null,null,null,null,null,null,null,null)
D.eZc=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eZu=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a4w,null,A.L,null,null,null,null,null,null,null)
D.eZw=new B.w("Write your book",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f_d=new B.w("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.f_q=new B.w("Malipo ya Awamu ya Mahari",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eH8=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new B.w("Create with AI",null,D.eH8,null,A.L,null,null,null,null,null,null,null)
D.f04=new B.w("Apply look",null,A.ja,null,null,null,null,null,null,null,null,null)
D.eHQ=new B.F(!0,A.eu,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new B.w("Type your presentation below",null,D.eHQ,null,A.L,null,null,null,null,null,null,null)
D.f0T=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aLe,null,A.L,null,null,null,null,null,null,null)
D.f0V=new B.w("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eD2=new B.F(!0,A.cC,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f11=new B.w("Done",null,D.eD2,null,null,null,null,null,null,null,null,null)
D.f1k=new B.w("Delete",null,A.mW,null,null,null,null,null,null,null,null,null)
D.f1t=new B.w("Hati ya Kiapo cha Uongozi",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eG9=new B.F(!0,A.aP,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2i=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.eG9,null,A.L,null,null,null,null,null,null,null)
D.f2D=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.f2J=new B.w("Layout",null,A.Rc,null,null,null,null,null,null,null,null,null)
D.f3j=new B.w("Print",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f3n=new B.w("X",null,A.qX,null,null,null,null,null,null,null,null,null)
D.f3W=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.a4q,null,null,null,null,null,null,null,null,null)
D.f4q=new B.w("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.f4B=new B.w("Hati ya Kuhowa",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f4D=new B.w("Choose a class template",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f4F=new B.w("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f4L=new B.w("Download the newspaper picture",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f4W=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.f52=new B.w("Done",null,A.aL1,null,null,null,null,null,null,null,null,null)
D.f5c=new B.w("Ending celebration",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f5d=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.f5q=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a4d,null,null,null,null,null,null,null,null,null)
D.f6g=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.f6h=new B.w("What would you like to do?",null,D.aKr,null,null,null,null,null,null,null,null,null)
D.f6l=new B.w("Delete",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f6N=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new B.w("Hati (Documents)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f72=new B.w("Done",null,A.kO,null,null,null,null,null,null,null,null,null)
D.eNF=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f76=new B.w("Delete presentation?",null,D.eNF,null,A.L,null,null,null,null,null,null,null)
D.f7n=new B.w("After the last slide it starts again from the first",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f7x=new B.w("\ud83c\udf33",null,A.Hm,null,A.L,null,null,null,null,null,null,null)
D.f7P=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f7W=new B.w("Transfer document",null,A.ow,null,null,null,null,null,null,null,null,null)
D.f85=new B.w("Add to the slides",null,A.hf,null,null,null,null,null,null,null,null,null)
D.f8q=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.f8F=new B.w("Make a book",null,I.aK0,null,null,null,null,null,null,null,null,null)
D.f8J=new B.w("Books",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eGF=new B.F(!0,A.ai,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8K=new B.w("Keep this page open until it finishes.",null,D.eGF,null,null,null,null,null,null,null,null,null)
D.f8N=new B.w("Making your video",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f8S=new B.w("LANGUAGE",null,D.R6,null,null,null,null,null,null,null,null,null)
D.f8Z=new B.w("Use this ending",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f96=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.f97=new B.w("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.f9n=new B.w("Delete from the database?",null,A.l8,null,null,null,null,null,null,null,null,null)
D.f9p=new B.w("H",null,A.qX,null,null,null,null,null,null,null,null,null)
D.f9L=new B.w("NGMY Quotes",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.fa9=new B.w("Cover",null,D.aLc,null,null,null,null,null,null,null,null,null)
D.fad=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fae=new B.w("Each page becomes its own slide you can present",null,A.ht,null,null,null,null,null,null,null,null,null)
D.faA=new B.w("Y",null,A.qX,null,null,null,null,null,null,null,null,null)
D.faL=new B.w("Crop the picture",null,A.kO,null,null,null,null,null,null,null,null,null)
D.faQ=new B.w("Edit text",null,A.Hn,null,null,null,null,null,null,null,null,null)
D.fd_=B.dN("a6p")
D.Cb=new C.aut(0,"none")
D.aMJ=new C.aut(1,"zipCrypto")
D.aMK=new C.aut(2,"aes")
D.ffr=new F.NL("","",null)
D.fgx=new C.b8X(null)
D.fhA=new C.XK(null)
D.fiF=new C.ab9(null)
D.fiH=new C.aBv(null)
D.fls=new C.YZ(null)
D.flQ=new C.Zu(null)
D.fm8=new C.bqf(null)})();(function staticFields(){$.fW3=null
$.fW4=null
$.fW5=null
$.fW6=null
$.fEu=B.us("_lastQuoRemDigits")
$.fEv=B.us("_lastQuoRemUsed")
$.auO=B.us("_lastRemUsed")
$.fEw=B.us("_lastRem_nsh")
$.pE=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a5f=B.T(x.N,x.I)
$.fC3=!1
$.h_M=B.T(B.az("kE"),x.N)
$.h_Z=B.T(B.az("kE"),x.E)
$.fYZ=!1
$.bvQ="q"
$.OI=0
$.BC=B.T(x.N,B.az("ak<yB>"))
$.fZl=!1
$.fG3=!1
$.h4v=null
$.hye=B.T(x.N,B.az("aw<n?>"))
$.IW=""
$.iS=0
$.fSS=function(){var w=x.N
return B.T(w,w)}()
$.fSR=B.T(x.N,x.R)
$.fGo=!1
$.adM=B.T(x.N,x.E)
$.fHa=0
$.bgW=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hWX","BX",()=>C.b6u(0))
w($,"hWV","a0I",()=>C.b6u(1))
w($,"hWW","h83",()=>C.b6u(2))
w($,"hWU","fKO",()=>$.a0I().ue(0))
w($,"hWS","h81",()=>C.b6u(1e4))
w($,"hWT","h82",()=>B.D4(8))
w($,"hSK","h64",()=>B.D4(0))
w($,"hSS","h68",()=>B.D4(0))
w($,"hSR","h67",()=>B.bTu(0))
w($,"i_A","ha2",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a0o.gdH(D.a0o),v=v.gah(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"i0_","bAg",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mx(new C.fnI(),v,"biz_plan_blue","Business Plan",B.a([B.aY(u),B.aY(t)],h)),C.mx(new C.fnJ(),v,"exec_summary","Executive",B.a([B.aY(s),B.aY(t)],h)),C.mx(new C.fnK(),v,"teal_corporate","Teal Corp",B.a([B.aY(r),B.aY(4279310375)],h)),C.mx(new C.fnV(),q,"geometric_overlap","Geometric",B.a([B.aY(4279203438),B.aY(u)],h)),C.mx(new C.fo_(),p,"midnight_cyan","Midnight Cyan",B.a([B.aY(o),B.aY(n)],h)),C.mx(new C.fo0(),q,"diagonal_hero","Diagonal Hero",B.a([B.aY(m),B.aY(l)],h)),C.mx(new C.fo1(),v,"swot_grid","SWOT Grid",B.a([B.aY(u),B.aY(4278556265)],h)),C.mx(new C.fo2(),v,"layered_chevrons","Chevrons",B.a([B.aY(4280172719),B.aY(k)],h)),C.mx(new C.fo3(),q,"split_triangle","Split Panel",B.a([B.aY(s),B.aY(t)],h)),C.mx(new C.fo4(),v,"corporate_navy","Navy Pro",B.a([B.aY(4278982953),B.aY(4282090230)],h)),C.mx(new C.fo5(),p,"cyan_slash","Cyan Slash",B.a([B.aY(o),B.aY(4278630100)],h)),C.mx(new C.fnL(),p,"crimson_impact","Crimson",B.a([B.aY(4282714634),B.aY(4292617766)],h)),C.mx(new C.fnM(),q,"ocean_waves","Ocean Waves",B.a([B.aY(4278413729),B.aY(4286436348)],h)),C.mx(new C.fnN(),p,"mono_geometric","Mono Geo",B.a([B.aY(o),B.aY(n)],h)),C.mx(new C.fnO(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aY(4280031511),B.aY(4293571336)],h)),C.mx(new C.fnP(),q,"hex_infographic","Hex Stack",B.a([B.aY(r),B.aY(4284410580)],h)),C.mx(new C.fnQ(),q,"photo_banner","Photo Banner",B.a([B.aY(m),B.aY(4281908728)],h)),C.mx(new C.fnR(),v,"process_steps","Process",B.a([B.aY(s),B.aY(k)],h)),C.mx(new C.fnS(),"Minimal","grid_modern","Grid Modern",B.a([B.aY(l),B.aY(t)],h)),C.mx(new C.fnT(),"Luxury","platinum_frame","Platinum",B.a([B.aY(4282865001),B.aY(4293060848)],h)),C.mx(new C.fnU(),v,"agenda_cards","Agenda Cards",B.a([B.aY(u),B.aY(4292602622)],h)),C.mx(new C.fnW(),q,"headline_orange","Headline Orange",B.a([B.aY(j),B.aY(i)],h)),C.mx(new C.fnX(),q,"infographic_teal","Infographic",B.a([B.aY(r),B.aY(j)],h)),C.mx(new C.fnY(),q,"content_year","Year Feature",B.a([B.aY(j),B.aY(t)],h)),C.mx(new C.fnZ(),q,"photo_cta","Photo CTA",B.a([B.aY(m),B.aY(i)],h))],B.az("P<Dv>"))})
w($,"i_D","ha4",()=>B.ae("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["pbfeIbBbOzyCMzqRK85U0oiFUJs="]=a.current})($__dart_deferred_initializers__);