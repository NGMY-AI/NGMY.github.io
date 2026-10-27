((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ae,V,A4,Af,Ag,A5,Ah,Ai,C={
t9(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fEQ(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
If(d){var w
if(d===0)return $.BZ()
if(d===1)return $.a0K()
if(d===2)return $.h8m()
if(Math.abs(d)<4294967296)return C.b6B(A.o.N(d))
w=C.hsR(d)
return w},
b6B(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t9(4,w)
return new C.nv(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t9(1,w)
return new C.nv(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.az(d,16)
v=C.t9(2,w)
return new C.nv(v===0?!1:s,w,v)}v=A.o.ak(A.o.gaho(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ak(d,65536)}v=C.t9(v,w)
return new C.nv(v===0?!1:s,w,v)},
hsR(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.R(B.dF("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BZ()
w=$.h8l()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kU(A.aG.gaO(w))
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
q=new C.nv(!1,r,4)
if(s<0)p=q.lW(0,-s)
else p=s>0?q.dQ(0,s):q
return p},
fER(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fWq(d,e,f,g){var w,v,u,t,s,r=A.o.ak(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dQ(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fo(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dQ(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fWl(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16)
if(A.o.F(f,16)===0)return C.fER(d,e,s,g)
w=e+s+1
C.fWq(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hsU(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dQ(1,r)-1,o=A.o.fo(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dQ(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fo(u,r)}w&2&&B.ah(g)
g[n]=o},
cz6(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hsS(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b6C(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}},
fWr(d,e,f,g,h,i){var w,v,u,t,s,r
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
hsT(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ee((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nv:function nv(d,e,f){this.a=d
this.b=e
this.c=f},
cz7:function cz7(){},
cz8:function cz8(){},
cz9:function cz9(d,e){this.a=d
this.b=e},
cza:function cza(d){this.a=d},
aOo:function aOo(d,e){this.a=d
this.b=e},
fMu(d,e,f){var w=new C.Q6(d,A.o.ak(Date.now(),1000),e)
w.Q=f
return w},
Q6:function Q6(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1V:function a1V(d,e){this.a=d
this.b=e},
bDK:function bDK(d){this.a=d
this.c=this.b=0},
hbz(){return new C.bCg()},
bCg:function bCg(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
crh:function crh(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hsz(d,e,f){var w,v,u,t,s
if(d.gai(d))return new Uint8Array(0)
w=new Uint8Array(B.cm(d.gcNH(d)))
v=f*2+2
u=C.fU5(C.fU7(),64)
t=new C.cc2(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cc3(e,1000,v)
s=new Uint8Array(v)
return A.aG.dt(s,0,t.cBE(w,0,s,0))},
crf:function crf(d,e){this.c=d
this.d=e},
auv:function auv(d,e){this.a=d
this.b=e},
cri:function cri(d,e,f,g){var _=this
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
b5i:function b5i(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
crg:function crg(){this.a=$},
fVR(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hbi(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bAR:function bAR(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fKf(d,e){e&=31
return(d&$.pE[e])<<e>>>0},
n2(d,e){e&=31
return(d>>>e|C.fKf(d,32-e))>>>0},
fU6(d){var w,v=new C.aqg()
if(B.iz(d))v.aGt(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fU7(){var w=C.fU6(0),v=new Uint8Array(4),u=x.S
u=new C.cc4(w,v,A.CE,5,B.bY(5,0,!1,u),B.bY(80,0,!1,u))
u.l7(0)
return u},
fU5(d,e){var w=new C.cc0(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cc_:function cc_(){},
cc3:function cc3(d,e,f){this.a=d
this.b=e
this.c=f},
cbY:function cbY(){},
aqf:function aqf(d){this.a=d},
cc2:function cc2(d){this.a=$
this.b=d
this.c=$},
cbZ:function cbZ(){},
cbX:function cbX(){},
aqg:function aqg(){this.b=this.a=$},
cc1:function cc1(){},
cc4:function cc4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cc0:function cc0(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cbW:function cbW(){},
cbV:function cbV(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bJG:function bJG(){},
bJH:function bJH(d){this.a=d},
hvL(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6R:function b6R(){},
bKz:function bKz(d,e){this.a=d
this.b=!1
this.c=e},
bKA:function bKA(){},
hEr(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
at9(d){var w=0,v=B.j(x.H),u
var $async$at9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eAn?2:4
break
case 2:w=5
return B.b(A.jR.fM("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$at9)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jR.fM("SystemChrome.setEnabledSystemUIOverlays",C.hEr(null),u),$async$at9)
case 6:case 3:return B.h(null,v)}})
return B.i($async$at9,v)},
atc:function atc(d,e){this.a=d
this.b=e},
a6r:function a6r(d){this.a=d},
fAS(d,e){return new C.aSG(e,d,null)},
aSG:function aSG(d,e,f){this.e=d
this.c=e
this.a=f},
axZ:function axZ(d,e,f,g,h){var _=this
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
hH_(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fbY(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
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
fbY:function fbY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
alb(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$alb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aeD("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$alb)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d5(s,x.f)
t=B.cz(t,new C.bUG(),t.$ti.k("G.E"),x.P)
r=B.z(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bUH())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alb,v)},
ald(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ald=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.alb(),$async$ald)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aU(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.Q(Date.now(),0,!1).a5().ab()
p=m.a
k=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nC("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$ald)
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
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.Q(Date.now(),0,!1).a5().ab()],t,q),null),$async$ald)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ald,v)},
bUI(d){return C.hgX(d)},
hgX(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bUI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aeD("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hB),$async$bUI)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.U9(B.a_(q,x.N,x.z))
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
return B.i($async$bUI,v)},
alc(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$alc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.alb(),$async$alc)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n3(r,new C.bUJ(d))
w=4
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.Q(Date.now(),0,!1).a5().ab()],x.N,x.z),null),$async$alc)
case 4:t=f
w=t?5:6
break
case 5:s=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aMr("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$alc)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alc,v)},
bUG:function bUG(){},
bUH:function bUH(){},
bUJ:function bUJ(d){this.a=d},
hQJ(d,e,f){return B.c2(A.K,null,new C.frk(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
frk:function frk(d,e,f){this.a=d
this.b=e
this.c=f},
ZY:function ZY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGh:function aGh(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eSf:function eSf(d,e){this.a=d
this.b=e},
eSj:function eSj(d){this.a=d},
eSk:function eSk(d){this.a=d},
eSl:function eSl(d,e,f){this.a=d
this.b=e
this.c=f},
eSg:function eSg(d){this.a=d},
eSh:function eSh(d){this.a=d},
eSi:function eSi(d,e){this.a=d
this.b=e},
eSa:function eSa(d){this.a=d},
eS8:function eS8(d){this.a=d},
eS9:function eS9(d){this.a=d},
eSb:function eSb(d){this.a=d},
eSc:function eSc(d){this.a=d},
eSp:function eSp(d,e){this.a=d
this.b=e},
eSo:function eSo(d,e){this.a=d
this.b=e},
eSe:function eSe(d,e,f){this.a=d
this.b=e
this.c=f},
eSd:function eSd(d,e,f){this.a=d
this.b=e
this.c=f},
eSm:function eSm(d,e){this.a=d
this.b=e},
eSn:function eSn(d,e){this.a=d
this.b=e},
eSs:function eSs(d){this.a=d},
eSt:function eSt(d,e){this.a=d
this.b=e},
eSr:function eSr(d,e){this.a=d
this.b=e},
eSq:function eSq(){},
fYN(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d5(w,x.f)
v=B.cz(v,new C.eZs(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a4<G.E>")
v=B.z(new B.a4(v,new C.eZt(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_W(d){return C.hIc(d)},
hIc(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_W=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.feb(n)
t=4
j=m
i=C
w=7
return B.b(B.a0v("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_W)
case 7:j.$1(i.fYN(f))
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
return B.b(B.ax(),$async$a_W)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fYN(B.aS(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.eZB(d),$async$a_W)
case 13:p=j.z(new i.a4(h,new g.fe9(f),o),o.k("G.E"))
A.d.b_(p,new C.fea())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_W,v)},
afc(d,e){return C.hQo(d,e)},
hQo(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$afc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b5(e,new C.fqS(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.al(n,null)
q=!1
t=4
w=7
return B.b(B.af4("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afc)
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
return B.b(B.ax(),$async$afc)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afc)
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
return B.i($async$afc,v)},
eZB(d){return C.hx8(d)},
hx8(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eZB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$eZB)
case 7:r=f
q=r.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kq(q,B.U(q).c)
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
return B.i($async$eZB,v)},
ae3(d,e){return C.hGS(d,e)},
hGS(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ae3=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$ae3)
case 6:s=g
r=B.aZ(x.N)
q=s.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fU(r,q)
J.cb(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("cl.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$ae3)
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
return B.b(C.a_W(d),$async$ae3)
case 8:n=g
J.n3(n,new C.fbE(e))
w=9
return B.b(C.afc(d,n),$async$ae3)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ae3,v)},
hQO(d,e){return B.a9(d,!1).cp(B.eD(new C.frG(e),!0,null,x.H))},
hsW(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.ea(w.d,new C.cAt())},
nV:function nV(d,e,f){this.a=d
this.b=e
this.c=f},
eZs:function eZs(){},
eZt:function eZt(){},
feb:function feb(d){this.a=d},
fe9:function fe9(d){this.a=d},
fea:function fea(){},
fqS:function fqS(){},
fbE:function fbE(d){this.a=d},
frG:function frG(d){this.a=d},
WK:function WK(d,e){this.c=d
this.a=e},
av2:function av2(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cAt:function cAt(){},
cAv:function cAv(d,e){this.a=d
this.b=e},
cAy:function cAy(d){this.a=d},
cAz:function cAz(d){this.a=d},
cAx:function cAx(){},
cAA:function cAA(d,e){this.a=d
this.b=e},
cAw:function cAw(d){this.a=d},
cAB:function cAB(){},
cAu:function cAu(d,e){this.a=d
this.b=e},
cAC:function cAC(){},
cAp:function cAp(d){this.a=d},
cAn:function cAn(d){this.a=d},
cAo:function cAo(d){this.a=d},
cAq:function cAq(d,e){this.a=d
this.b=e},
cAm:function cAm(d){this.a=d},
cAl:function cAl(d){this.a=d},
cAj:function cAj(d,e){this.a=d
this.b=e},
cAk:function cAk(d){this.a=d},
cAs:function cAs(){},
cAr:function cAr(d){this.a=d},
cAi:function cAi(d,e){this.a=d
this.b=e},
cAh:function cAh(d,e){this.a=d
this.b=e},
cAg:function cAg(d,e){this.a=d
this.b=e},
cAD:function cAD(d){this.a=d},
WI:function WI(d,e,f){this.c=d
this.d=e
this.a=f},
aCb:function aCb(d,e,f){this.a=d
this.b=e
this.c=f},
auZ:function auZ(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
czK:function czK(d){this.a=d},
czJ:function czJ(d){this.a=d},
czM:function czM(d,e,f){this.a=d
this.b=e
this.c=f},
czU:function czU(){},
czV:function czV(d){this.a=d},
czN:function czN(d,e,f){this.a=d
this.b=e
this.c=f},
czL:function czL(d,e){this.a=d
this.b=e},
czP:function czP(d,e){this.a=d
this.b=e},
czQ:function czQ(d,e){this.a=d
this.b=e},
czR:function czR(d,e){this.a=d
this.b=e},
czO:function czO(d){this.a=d},
czT:function czT(d){this.a=d},
czS:function czS(d,e){this.a=d
this.b=e},
cA_:function cA_(d){this.a=d},
czW:function czW(d,e){this.a=d
this.b=e},
czX:function czX(d,e){this.a=d
this.b=e},
czY:function czY(d,e){this.a=d
this.b=e},
czZ:function czZ(d,e){this.a=d
this.b=e},
av0:function av0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hKx(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eb(v,x.cK).by(new C.fiI(),x.H).eN(new C.fiJ())}}else if(s)C.h_c()}catch(t){}},
h_c(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eb(v,x.cK).eN(new C.f2O())}catch(u){}},
hKA(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fiI:function fiI(){},
fiJ:function fiJ(){},
f2O:function f2O(){},
h3H(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gL(A.a.e1(v,w,"").split(":"))},
h3E(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kJ)return null
return A.a.aY(w,14)},
fJ_(d){var w
if(d.b!==D.kJ)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aY(w,21)},
hL_(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h3I(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hKV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ae("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.ae("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ae("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kx(0,f)
t=x.N
u=B.cz(u,new C.fjI(),B.a2(u).k("G.E"),t)
s=B.z(u,B.a2(u).k("G.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kx(0,f),u=new B.Ie(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.PO(A.a.am(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.PO(A.a.aY(f,q)):p)+"\\.?$"
l=B.ae(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hKT(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("G.E"))
A.d.b_(q,new C.fjH())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aNo(w,u,s,0)}return w},
hKX(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a0q:$.hal(),s=x.N,r=B.T(s,s)
for(s=t.gdH(t),s=s.gah(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.m(0,w.b,u)}return r},
h3F(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f_s(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h3H(q)===e)return q}return null},
hKY(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aY(v,u)
return A.d.gL(D.F9).a},
hKZ(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ac0(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ac0(0,0,0)
v=C.f_s(b6,b0)
u=C.f_s(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hKX(b2,C.hKV(C.h3F(b2),v.r))
if(s.a!==0){u.r=C.hKT(C.h3F(b4),s)
t=s.a}}r=B.aZ(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h3H(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.ef(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f_s(b6,n)
i=C.f_s(b5,n)
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
a0=C.fJ_(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h3E(a8)===a0||C.fJ_(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pk(a1,new C.fjO(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iS
$.iS=a9+1
A.d.K(a1,new C.ey(""+1000*a6+"_"+a9,D.kJ,a2,a3,a4,a5,"",24,A.a3,A.bi,A.aA,4279310375,A.bf,d.at,D.bc,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cd,0,"","","","","",!1,0));++e}b5.f=new B.Q(Date.now(),0,!1)
return new B.ac0(k,t,e)},
hKU(d){var w=C.hKY(d)
if(d.w==="hati_kuhowa")return C.h31("",w)
return C.h30("",w)},
fjI:function fjI(){},
fjH:function fjH(){},
fjO:function fjO(d){this.a=d},
fZW(){var w=new B.Q(Date.now(),0,!1),v=new C.f1R()
return B.t(v.$1(B.bO(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fJ7(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fkG(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kJ&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h3V(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fkG(d)
w=B.bh(u)
if(w==null)return!C.fkG(d)
return new B.Q(Date.now(),0,!1).a5().cY(w.a5().bN(18e9))},
hLF(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.Q(Date.now(),0,!1).a5().ab()},
hkX(d){return A.a.i(d).toLowerCase()},
ank(d){return C.hkZ(d)},
hkZ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$ank=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$ank)
case 7:r=f
p=r.rn("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hP9(),B.U(o).k("J<1,n>")).bZ(0,new C.c4e())
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
return B.i($async$ank,v)},
anj(d,e){return C.hkY(d,e)},
hkY(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ank(d),$async$anj)
case 3:r=g
if(!J.cb(r,o)){w=1
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
anl(d,e){return C.hl_(d,e)},
hl_(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anl=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ank(d),$async$anl)
case 3:r=g
if(!J.hD(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$anl)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pM(r)),$async$anl)
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
return B.i($async$anl,v)},
Ts(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ts=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fCm&&!a5){w=1
break}t=4
w=7
return B.b(B.ax(),$async$Ts)
case 7:r=a7
q=B.aS(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aD(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jl(p),d=d.gah(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.U9(B.a_(f.a(n.b),e,a0)))}$.a5h=o}}t=2
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
return B.b(B.bX(),$async$Ts)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tp("civic_hati_kiapo_uongozi",null,A.ec),$async$Ts)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jl(f.a(J.q(l,"byState"))),e=e.gah(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.U9(B.a_(f.a(j.b),o,d)))}for(o=k,o=new B.cR(o,B.a2(o).k("cR<1,2>")).gah(0);o.C();){f=o.d
f.toString
i=f
h=$.a5h.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a5h.m(0,i.a,i.b)}w=20
return B.b(C.anm(),$async$Ts)
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
case 16:case 9:$.fCm=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ts,v)},
anm(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$anm=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$anm)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a5h,o=new B.cR(o,B.a2(o).k("cR<1,2>")).gah(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ac())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.al(r,null)),$async$anm)
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
return B.i($async$anm,v)},
aX7(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aX7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ts(!1),$async$aX7)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a5h.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.bys(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aX7,v)},
a5i(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a5i=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a5h.m(0,d,o)
$.fCm=!0
w=3
return B.b(C.anm(),$async$a5i)
case 3:w=4
return B.b(B.bX(),$async$a5i)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a5h,n=new B.cR(n,B.a2(n).k("cR<1,2>")).gah(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ac())}w=9
return B.b(B.nC("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.Q(Date.now(),0,!1).a5().ab()],e,x.z),null),$async$a5i)
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
return B.i($async$a5i,v)},
ann(d){var w=0,v=B.j(x.T),u,t,s
var $async$ann=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hR().a3l(A.ez),$async$ann)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f8(),$async$ann)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aX6(t,d),$async$ann)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ann,v)},
aX6(d,e){return C.hl0(d,e)},
hl0(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aX6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bX(),$async$aX6)
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
return B.b(p.w6(q,new Uint8Array(B.cm(d)),D.bnO),$async$aX6)
case 8:n=p.BA(q)
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
return B.i($async$aX6,v)},
J5(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.aA,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.cd,D.cO,l,m,n)},
f16(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.bf,!1,4279310375,A.aA,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a3,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eW,j,k,l)},
fGj(d,e,f,g,h,i,j,k){var w=C.cy(),v=A.k.E(i*0.0017,0.02,0.06)
return C.ei(h,!1,j,A.aA,"marriage_field_"+d+":"+A.k.a9(g,3),4280640491,i,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.cd,D.cO,g,e,f)},
f0F(d,e,f,g){return C.f16(0,0.002,D.fl,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fGk(d,e,f,g,h,i,j,k){var w=C.cy()
return C.ei(A.pB,!1,j,A.aA,"marriage_field_"+d+":"+A.k.a9(g,3),4280640491,i,A.bi,A.a3,"",h,w,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.cd,D.cO,g,e,f)},
fZV(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gL(A.a.e1(v,w,"").split(":"))},
bys(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.fZV(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kJ&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fIE(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.AE(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.fZV(m)
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
A.d.bm(a1.z,new C.fiG(a2))}else A.d.bm(a1.z,new C.fiH())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fkG(a0))a0.ax=a6.f.a5().ab()
return a0},
fIE(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fls(D.a1q),l=C.cy(),k=x.u,j=B.a([C.ei(A.bf,!1,s,A.aA,"marriage_locked_bg",r,24,A.bi,A.a3,"",1,C.cy(),m,"","",0,!1,"",0,D.bc,q,2,"",0,0,"",D.cd,D.l7,1,0,0)],k),i=B.a([],k)
i.push(C.J5("NGMY",A.L,236069181,52,A.bi,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.J5("TAREHE:",A.bf,o,16,A.bi,A.I,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fGj("tarehe",0.8059999999999999,0.026,0.18,A.bf,16,p,C.fZW()))
i.push(C.f0F(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.J5("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bi,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.J5("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cx,A.a3,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f16(0,0.002,D.fl,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fGk("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fGk("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fGk("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f16(268435456,0.175,D.bc,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.J5("VIDEO YA KIAPO",A.bf,o,10,A.bi,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ei(A.bf,!1,s,A.aA,"__kiapo_video__",r,24,A.bi,A.a3,"",0.131,C.cy(),t,"","",0,!1,"",0,D.bc,q,2,"",0,0,"",D.cd,D.l7,0.77,0.115,0.492))
i.push(C.J5("Rais Anayeapa:",A.bf,p,15,A.bi,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.J5("Jina:",A.bf,p,13,A.bi,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fGj("rais_jina",0.195,0.6930000000000001,0.62,A.bf,13,p,""))
i.push(C.f0F(0.195,0.7130000000000001,0.62,n))
i.push(C.J5("Sahihi:",A.bf,p,13,A.bi,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ei(A.bf,!1,s,A.aA,"marriage_sign_rais",0,24,A.bi,A.a3,"",0.07,C.cy(),t,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eW,0.38,0.21500000000000002,0.73))
i.push(C.f0F(0.21500000000000002,0.795,0.38,n))
i.push(C.J5("Tarehe:",A.bf,p,13,A.bi,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fGj("rais_tarehe",0.745,0.74,0.2,A.bf,12,p,C.fZW()))
i.push(C.f0F(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f16(0,0.032,D.bc,o,1,"state_box",0.72,0.14,0.875),C.J5("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bi,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qU(4294967035,t,0,0,j,l,D.pq,"","",u,D.db)
return C.AE(t,t,t,t,D.nF,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cy(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
aed(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aed=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.H(x.q).f.P(D.evc)
w=1
break}w=3
return B.b(C.Ts(!0),$async$aed)
case 3:w=4
return B.b(C.aX7(p),$async$aed)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h3V(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c2(D.b3R,null,new C.fdx(p),f,!0,!0,!1,A.l8,!1,!1,x.N),$async$aed)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ch(null,null,!0,null,new C.fdy(),f,null,!0,!0,x.y),$async$aed)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fIE(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.H(x.q).f
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fIE(p))
case 1:return B.h(u,v)}})
return B.i($async$aed,v)},
f1R:function f1R(){},
c4e:function c4e(){},
fiG:function fiG(d){this.a=d},
fiH:function fiH(){},
fdx:function fdx(d){this.a=d},
fdv:function fdv(d){this.a=d},
fdw:function fdw(d){this.a=d},
fdy:function fdy(){},
fdt:function fdt(d){this.a=d},
fdu:function fdu(d){this.a=d},
anS:function anS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB0:function aB0(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dYU:function dYU(d){this.a=d},
dYS:function dYS(d){this.a=d},
dYT:function dYT(d){this.a=d},
dYV:function dYV(d){this.a=d},
dYW:function dYW(d){this.a=d},
vQ(d,e,f,g,h,i,j,k,l,m,n){var w=C.cy()
return C.ei(e,!1,f,A.aA,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",j,D.bc,4280172719,2,d,0,0,"",D.cd,D.cO,l,m,n)},
fZz(d,e,f){var w=4291404327
return B.a([C.pD(0,f,D.eF,w,2,"ring_l",f,d-f*0.42,e),C.pD(0,f,D.eF,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f06(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pD(4294967288,f,D.eF,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pD(h,s,D.eF,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pD(h,f*0.46,D.eF,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pD(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.bf,!1,4279310375,A.aA,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a3,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eW,j,k,l)},
f05(d,e,f,g,h,i,j,k,l){var w=C.cy(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ei(h,!1,k,A.aA,i?u+A.k.a9(g,3)+":"+A.o.a9(j,1):u+A.k.a9(g,3),4280640491,j,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.bc,4280172719,2,l,0,0,"",D.cd,D.cO,g,e,f)},
bvV(d,e,f,g){return C.pD(0,0.002,D.fl,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fZy(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pD(0,0.036,D.bc,h,1.4,"banner_box_"+d,w,v,e),C.vQ(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h3G(){var w=new B.Q(Date.now(),0,!1),v=new C.fjN()
return B.t(v.$1(B.bO(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fZA(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vQ(r+".",A.bf,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f05("witness_"+d+"_"+r+"_name",q,g,p,A.bf,!0,16,j,"[Jina la Shahidi]"),C.bvV(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.vQ("Sahihi:",A.bf,j,15,A.a3,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ei(A.bf,!1,4279310375,A.aA,"marriage_sign_"+d+"_witness_"+r,0,24,A.bi,A.a3,"",0.05,C.cy(),null,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eW,s,t,g-0.004),C.bvV(t,g+0.044,s,w)],x.u)},
aeF(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cWG,D.c3p,D.cQa,D.cRR],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gah(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fFD(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fls(d.d),v=B.a([C.ei(A.bf,!1,4279310375,A.aA,"marriage_locked_bg",4280640491,24,A.bi,A.a3,"",1,C.cy(),w,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l7,1,0,0)],x.u)
A.d.v(v,C.hzo(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hzo(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vQ("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fZz(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fZz(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f06(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f06(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vQ("\ud83c\udf33",A.L,4279898632,22,A.a3,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pD(0,0.062,D.eF,b1,1.6,"crest_o",0.11,0.445,0.012),C.pD(0,0.046,D.eF,b1,1,"crest_i",0.084,0.458,0.02),C.vQ("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pD(0,0.002,D.fl,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pD(b9,0.016,D.kK,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pD(0,0.002,D.fl,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vQ("TAREHE:",A.bf,c0,20,A.I,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f05("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bf,!1,21,b9,C.h3G()),C.bvV(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vQ(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pD(c0,0.0026,D.bc,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pD(c3.e,0.138,D.bc,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cy()
c2.push(C.ei(A.bf,!1,b9,A.aA,"marriage_field_utangulizi:"+A.k.a9(0.82,3),b2,19,A.bi,A.cq,"",0.128,s,a9,"","",0,!1,"",0,D.bc,b3,2,c5,0,0,"",D.cd,D.cO,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pD(0,0.036,D.bc,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cy()
A.d.v(c2,B.a([s,C.ei(A.L,!1,c0,A.aA,"marriage_field_nimetowe_label:"+A.k.a9(r,3),b2,30,A.bi,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bc,b3,2,c7,0,0,"",D.cd,D.cO,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fZy(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vQ(c9,A.bf,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f05("mahari_"+p,0.132,k,m,A.bf,!1,16,b9,s)
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
d=B.a([new C.ey(""+1000*i+"_"+h,D.cO,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bi,A.aA,c0,A.bf,a9,D.bc,b2,b3,2,0,!1,s,0,D.cd,0,"","","","","",!1,0),j,new C.ey(""+1000*f+"_"+e,D.eW,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a3,A.bi,A.aA,b6,A.bf,a9,D.fl,0,b5,0.8,0,!1,g,0,D.cd,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.ey(""+1000*s+"_"+p,D.cO,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bi,A.aA,b7,A.dM,a9,D.bc,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*i+"_"+h,D.eW,a1,a2,0.046,0.025875,"",24,A.a3,A.bi,A.aA,b6,A.bf,a9,D.bc,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*g+"_"+f,D.cO,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bi,A.aA,b7,A.L,a9,D.bc,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cd,0,"","","","","",!1,0),new C.ey(""+1000*e+"_"+a3,D.eW,a0,k,a1+0.046-a0,l,"",24,A.a3,A.bi,A.aA,b6,A.bf,a9,D.bc,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cd,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fZy("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a1f||w===D.a1h||w===D.a1e||w===D.a1g){w=t-0.008
A.d.v(c2,C.f06(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f06(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pD(0,a4,D.bc,c0,1.3,"wit_table_border",0.82,0.09,t),C.pD(c0,a4,D.bc,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pD(0,0.0022,D.fl,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vQ("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vQ("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fZA("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fZA("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pD(0,0.11,D.bc,c0,1.2,"mw_box",0.82,0.09,t),C.vQ("MWANDISHI",A.bf,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vQ("Jina:",A.bf,b9,15,A.a3,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f05("mwandishi_jina",0.215,w,0.3116,A.bf,!0,15,b9,""),C.bvV(0.215,p,0.3116,b5),C.vQ("Sahihi:",A.bf,b9,15,A.a3,0.028,0,"mw_sl",0.09,0.5,w),C.ei(A.bf,!1,b6,A.aA,"marriage_sign_mwandishi",0,24,A.bi,A.a3,"",0.044,C.cy(),a9,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eW,0.3161999999999999,0.5738,s-0.044),C.bvV(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pD(0,0.032,D.bc,c0,1,"state_box",0.7,0.15,a8),C.vQ("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hKW(d){var w,v,u,t=null,s=B.aY(d.f),r=B.aY(d.r),q=C.fJh(d.d),p=new C.fjJ(s),o=new C.fjK(s),n=d.z,m=n===D.a1f||n===D.a1h||n===D.a1e||n===D.a1g,l=n===D.azQ||n===D.a1i||n===D.azR,k=B.bZ(0,B.fF(q,A.A,t,t,A.cm,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a1i?26:16
i.push(new C.fjM().$1$size(w))}if(n===D.azS)i.push(D.f7O)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hF,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aIx,p.$1$w(0.9),D.aIx,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_U,t,n,w,t,t,A.n),t,t,t,t,A.ae1,t,t,t))
i.push(A.ar)
i.push(new C.fjL(r).$1("NIMETOWE"))
i.push(A.h2)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.JT,new B.cC(A.b0,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d7,new B.bH(1,A.bo,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b8)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.W,t,A.b_,A.q,B.a([k,new B.C(A.acF,B.v(i,A.ag,t,A.e,A.j,0,A.p),t)],j),t)},
h30(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aeF(e,t)
if(r==null)r=A.d.gL(D.F9)
w=C.cy()
v=C.qU(r.e,t,0,0,C.fFD(r,0.165,y.O,D.cSp,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pq,"","",s,D.db)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.AE(t,t,t,t,D.nF,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h31(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aeF(e,t)
if(r==null)r=A.d.gL(D.F9)
w=C.cy()
v=C.qU(r.e,t,0,0,C.fFD(r,0.165,y.f,D.cOq,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pq,"","",s,D.db)
w=C.cy()
u=A.a.i(d)
if(u.length===0)u=t
return C.AE(t,t,t,t,D.nF,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bzM(d,e,f){var w=0,v=B.j(x.T),u
var $async$bzM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c2(A.K,null,new C.fv5(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzM,v)},
aee(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aee=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a4<1>")
p=B.z(new B.a4(i,new C.fdB(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.Jc,null,new C.fdC(p),d,!0,!0,!1,A.l8,!1,!1,x.N),$async$aee)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzM(d,"Hati ya Kuhowa",D.F9),$async$aee)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JI(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aee)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h30(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aee,v)},
aef(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aef=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a4<1>")
p=B.z(new B.a4(i,new C.fdF(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.Jc,null,new C.fdG(p),d,!0,!0,!1,A.l8,!1,!1,x.N),$async$aef)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzM(d,"Hati ya Kuhoweya",D.F9),$async$aef)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JI(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aef)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h31(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aef,v)},
aeg(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aeg=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a4<1>")
m=B.z(new B.a4(i,new C.fdJ(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.Jc,null,new C.fdK(m),d,!0,!0,!1,A.l8,!1,!1,x.N),$async$aeg)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzM(d,"Malipo ya Awamu ya Mahari",D.O8),$async$aeg)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JI(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aeg)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aeF(s,D.O8)
if(q==null)q=A.d.gL(D.O8)
n=C.cy()
p=C.qU(q.e,null,0,0,C.fFD(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cJL,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pq,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.db)
n=C.cy()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.AE(null,null,null,null,D.nF,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeg,v)},
wN:function wN(d,e){this.a=d
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
fjN:function fjN(){},
fjJ:function fjJ(d){this.a=d},
fjL:function fjL(d){this.a=d},
fjM:function fjM(){},
fjK:function fjK(d){this.a=d},
fv5:function fv5(d,e){this.a=d
this.b=e},
ab7:function ab7(d,e,f){this.c=d
this.d=e
this.a=f},
dQi:function dQi(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQg:function dQg(d,e){this.a=d
this.b=e},
aax:function aax(d,e,f){this.c=d
this.d=e
this.a=f},
fdB:function fdB(){},
fdC:function fdC(d){this.a=d},
fdz:function fdz(d){this.a=d},
fdA:function fdA(d){this.a=d},
fdF:function fdF(){},
fdG:function fdG(d){this.a=d},
fdD:function fdD(d){this.a=d},
fdE:function fdE(d){this.a=d},
fdJ:function fdJ(){},
fdK:function fdK(d){this.a=d},
fdH:function fdH(d){this.a=d},
fdI:function fdI(d){this.a=d},
J8(d,e,f,g,h,i,j,k,l,m){var w=C.cy()
return C.ei(e,!1,f,A.aA,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.cd,D.cO,k,l,m)},
BG(d,e,f,g,h,i,j,k,l){var w=C.cy()
return C.ei(A.bf,!1,4279310375,A.aA,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a3,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cd,D.eW,j,k,l)},
h_f(d,e,f){return C.BG(0,0.002,D.fl,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bw4(d,e,f,g,h){return B.a([C.BG(4294967288,0.032,D.bc,4291404327,1.15,"pill_"+d,g,f,e),C.J8(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fGo(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.BG(0,0.002,D.fl,g,1,"orn_l_"+t,u,d,v),C.BG(h,0.016,D.kK,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.BG(0,0.002,D.fl,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_j(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.J8(d,A.bf,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cy()
return B.a([v,C.ei(A.L,!1,j,A.aA,"marriage_field_"+e+":"+A.k.a9(t,3),4280640491,i,A.cx,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.cd,D.cO,t,u,g-0.002),C.h_f(u,g+0.018,t)],x.u)},
h_g(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.BG(h,0.028,D.bc,h,0,"chv_"+d,g,e,f),C.BG(w,0.024,D.kK,w,0,"chv_l_"+d,0.024,e-0.008,v),C.BG(w,0.024,D.kK,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.J8(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bw3(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.J8("Sahihi:",A.bf,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ei(A.bf,!1,4279310375,A.aA,"marriage_sign_"+d,0,24,A.bi,A.a3,"",0.032,C.cy(),null,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.cd,D.eW,v,w,f-0.006),C.h_f(w,f+0.016,v)],x.u)},
fJi(d){var w,v
for(w=0;w<19;++w){v=D.Ok[w]
if(v.a===d)return v}return null},
hNb(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aeF(A.a.aY(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aeF(A.a.aY(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aY(k,18)
w=C.aeF(u,D.O8)
v=w==null?l:w.d
if(v==null){w=C.aeF(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fJi(A.a.aY(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h04.a7(0)
$.h0h.a7(0)
t=C.fls(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fKm(d){var w=0,v=B.j(x.T),u
var $async$fKm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c2(A.K,null,new C.fwk(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fKm,v)},
wQ:function wQ(d,e){this.a=d
this.b=e},
ni:function ni(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bfP:function bfP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fwk:function fwk(){},
aba:function aba(d){this.a=d},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2T:function e2T(d){this.a=d},
e2S:function e2S(d,e){this.a=d
this.b=e},
acO:function acO(d,e,f){this.c=d
this.d=e
this.a=f},
fJh(d){return $.h0h.ce(0,d,new C.flu(d))},
fls(d){return $.h04.ce(0,d,new C.flt(d))},
fu(d){return B.fA0(d>>>16&255,d>>>8&255,d&255,255)},
hCq(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h1k(4294570461,4293910718,4284234270,u)
case 1:return C.h1k(4294635750,4293975240,t,4292912216)
case 2:w=C.eZH(s,4294505966,r)
C.bvP(w,14,16,p)
C.ki(w,8,9,464,836,u,1.2)
C.BC(w,2,2,1,1,u,10)
C.BC(w,478,2,-1,1,u,10)
C.BC(w,2,852,1,-1,u,10)
C.BC(w,478,852,-1,-1,u,10)
return w
case 3:return C.eZH(4294966515,4294373082,4289102906)
case 4:return C.hxj(C.eZH(4294376440,4293653998,4290287194))
case 5:w=C.eZH(4294965238,4294437098,4288444980)
C.bvP(w,14,16,4283043359)
C.ki(w,6,7,468,840,u,1)
C.ki(w,9,10,462,834,o,0.7)
return w
case 6:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,n,4294175448)
C.rd(v,n)
C.ki(v,24,24,432,806,4286209070,1)
C.a_7(v,12,12,468,12,o,3,20)
C.a_7(v,12,842,468,842,o,3,20)
C.a_7(v,12,12,12,842,o,3,20)
C.a_7(v,468,12,468,842,o,3,20)
return v
case 7:return C.hvs(4294440434,4293518297,4280228630,r)
case 8:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,m,4293911504)
C.rd(v,m)
C.ki(v,28,28,424,798,l,1)
C.f75(v,28,28,l,k)
C.f75(v,452,28,l,k)
C.f75(v,28,826,l,k)
C.f75(v,452,826,l,k)
return v
case 9:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,j,4294111986)
C.rd(v,j)
C.ki(v,18,18,444,818,4292401368,0.7)
B.iB(v,!0,C.fu(p),0,13,0,853)
return v
case 10:return C.hzb(i,4294173372)
case 11:return C.hAg(4294439140,4293449662)
case 12:return C.hvk(h,4294239432)
case 13:return C.hzH(4294244340,4293193448)
case 14:return C.hDY(4294505710,4293780694)
case 15:return C.eYI(4294966259,4294439138,o,p,q)
case 16:return C.eYI(4294966776,4294178544,o,g,g)
case 17:return C.eYI(4294965493,4294504170,o,4286200650,q)
case 18:return C.eYI(4294966519,4294373862,o,p,p)
case 19:return C.hym()
case 20:return C.hyn()
case 21:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,h,4293976768)
C.rd(v,h)
C.bvP(v,14,16,p)
B.iB(v,!0,C.fu(u),4,475,4,9)
B.iB(v,!0,C.fu(u),4,475,844,849)
B.iB(v,!0,C.fu(u),4,9,4,849)
B.iB(v,!0,C.fu(u),470,475,4,849)
C.a_7(v,10,12,470,12,u,2,16)
C.a_7(v,10,842,470,842,u,2,16)
C.a_7(v,10,12,10,842,u,2,18)
C.a_7(v,470,12,470,842,u,2,18)
C.BC(v,2,2,1,1,t,10)
C.BC(v,478,2,-1,1,t,10)
C.BC(v,2,852,1,-1,t,10)
C.BC(v,478,852,-1,-1,t,10)
C.ki(v,14,16,452,822,u,1.8)
return v
case 22:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,s,4294438872)
C.rd(v,s)
C.ki(v,14,16,452,822,o,2.2)
C.ki(v,22,24,436,806,o,1)
C.fHF(v,!1,!1,o,p,p,36,14,16)
C.ku(v,240,20,7,o,!0)
C.ku(v,240,834,7,o,!0)
C.ku(v,18,427,7,o,!0)
C.ku(v,462,427,7,o,!0)
return v
case 23:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,i,4293910712)
C.rd(v,i)
B.iB(v,!0,C.fu(u),0,479,0,20)
B.iB(v,!0,C.fu(u),0,479,834,853)
B.iB(v,!0,C.fu(u),0,20,0,853)
B.iB(v,!0,C.fu(u),460,479,0,853)
B.iB(v,!0,C.fu(f),5,474,5,9)
B.iB(v,!0,C.fu(f),5,474,844,848)
B.iB(v,!0,C.fu(f),5,9,5,848)
B.iB(v,!0,C.fu(f),470,474,5,848)
C.ki(v,28,28,424,798,f,1.4)
return v
case 24:v=B.he(q,q,A.c7,0,A.dW,854,q,0,3,q,A.c7,480,!1)
C.xF(v,e,4294174404)
C.rd(v,e)
C.bvP(v,14,16,p)
B.iB(v,!0,C.fu(u),3,476,3,8)
B.iB(v,!0,C.fu(u),3,476,845,850)
B.iB(v,!0,C.fu(u),3,8,3,850)
B.iB(v,!0,C.fu(u),471,476,3,850)
C.ki(v,9,10,462,834,t,1)
C.ki(v,14,16,452,822,u,1.8)
C.ku(v,240,8,4,u,!0)
C.ku(v,240,846,4,u,!0)
C.ku(v,8,427,4,u,!0)
C.ku(v,472,427,4,u,!0)
C.ku(v,8,8,3,t,!0)
C.ku(v,472,8,3,t,!0)
C.ku(v,8,846,3,t,!0)
C.ku(v,472,846,3,t,!0)
return v}},
xF(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.E(A.k.U(q*w+p*t),0,255)
u=A.o.E(A.k.U(o*w+n*t),0,255)
w=A.o.E(A.k.U(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kw(d,!1,A.d8,new B.Qp(s),r,A.cV,1,0,w-1,k,k);++k}},
rd(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eU()
n.dM(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dL(u,t,o)
if(s==null)s=new B.iw()
v=A.o.E(A.k.N(s.gb5(s))-3,0,255)
r=A.o.E(A.k.N(s.gbc())-3,0,255)
q=A.o.E(A.k.N(s.gbe(s))-2,0,255)
p=d.a
if(p!=null)p.jj(u,t,v,r,q,255)}},
ki(d,e,f,g,h,i,j){var w,v=null,u=C.fu(i),t=e+g
B.kw(d,!0,A.d8,u,v,A.cV,j,e,t,f,f)
w=f+h
B.kw(d,!0,A.d8,u,v,A.cV,j,e,t,w,w)
B.kw(d,!0,A.d8,u,v,A.cV,j,e,e,f,w)
B.kw(d,!0,A.d8,u,v,A.cV,j,t,t,f,w)},
BC(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.U(j*0.72),8,j-2)
B.kw(d,!0,A.d8,C.fu(i),u,A.cV,2,e,e+g*j,f,f)
B.kw(d,!0,A.d8,C.fu(i),u,A.cV,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kw(d,!0,A.d8,C.fu(i),u,A.cV,1,w,e+g*t,v,v)
B.kw(d,!0,A.d8,C.fu(i),u,A.cV,1,w,w,v,f+h*t)},
h1k(d,e,f,g){var w=null,v=B.he(w,w,A.c7,0,A.dW,854,w,0,3,w,A.c7,480,!1)
C.xF(v,d,e)
C.rd(v,d)
B.iB(v,!0,C.fu(f),0,479,0,28)
B.iB(v,!0,C.fu(f),0,479,826,853)
B.iB(v,!0,C.fu(f),0,28,0,853)
B.iB(v,!0,C.fu(f),452,479,0,853)
C.ki(v,5,5,470,844,g,1.1)
C.ki(v,28,28,424,798,g,1.6)
C.BC(v,2,2,1,1,g,11)
C.BC(v,478,2,-1,1,g,11)
C.BC(v,2,852,1,-1,g,11)
C.BC(v,478,852,-1,-1,g,11)
return v},
eZH(d,e,f){var w=null,v=B.he(w,w,A.c7,0,A.dW,854,w,0,3,w,A.c7,480,!1)
C.xF(v,d,e)
C.rd(v,d)
C.ki(v,14,16,452,822,f,1.6)
C.ki(v,20,22,440,810,f,0.8)
return v},
bvP(d,e,f,g){var w,v=C.fu(g)
B.iB(d,!0,v,0,479,0,f-1)
w=854-f
B.iB(d,!0,v,0,479,w,853);--w
B.iB(d,!0,v,0,e-1,f,w)
B.iB(d,!0,v,480-e,479,f,w)},
hxj(d){var w,v,u=4291404327
C.bvP(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.ku(d,w,8,3,u,!0)
C.ku(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.ku(d,7,v,3,u,!0)
C.ku(d,473,v,3,u,!0)}return d},
fa4(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j3(e,f),new B.j3(e+g*n,f),new B.j3(e,f+h*n)],t)
B.a_T(d,C.fu(m),s)
w=A.o.E(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j3(s,u),new B.j3(e+g*v,u),new B.j3(s,f+h*v)],t)
B.a_T(d,C.fu(k),t)
t=A.k.U(n*0.39)
C.ku(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.ku(d,e+g*t,f+h*3,4,k,!0)
C.ku(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.ku(d,e+g*t,f,5,k,!0)
C.ku(d,e,f+h*t,5,k,!0)}},
fHF(d,e,f,g,h,i,j,k,l){var w,v
C.fa4(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fa4(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fa4(d,k,v,1,-1,e,f,g,h,i,j)
C.fa4(d,w,v,-1,-1,e,f,g,h,i,j)},
a_7(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kQ(d,!0,A.d8,new B.qq(p),null,A.cV,j,r,q)}},
f9e(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kw(d,!0,A.d8,new B.qq(o),null,A.cV,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kw(d,!0,A.d8,new B.qq(o),null,A.cV,1.4,q,q,p,p+h*r)}},
hvs(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.he(o,o,A.c7,0,A.dW,854,o,0,3,o,A.c7,480,!1)
C.xF(n,d,e)
C.rd(n,d)
C.ki(n,20,20,440,814,f,1.2)
C.f9e(n,0,0,1,1,g)
C.f9e(n,480,0,-1,1,g)
C.f9e(n,0,854,1,-1,g)
C.f9e(n,480,854,-1,-1,g)
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
B.kw(n,!0,A.d8,new B.qq(p),o,A.cV,1.2,240,r,60,q)}return n},
f75(d,e,f,g,h){var w
C.fbZ(d,!0,C.fu(g),13,e,f)
C.fbZ(d,!0,C.fu(g),9,e,f)
w=B.a([new B.j3(e,f-4),new B.j3(e+4,f),new B.j3(e,f+4),new B.j3(e-4,f)],x.J)
B.a_T(d,C.fu(h),w)},
ku(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j3(e,v),new B.j3(u,f),new B.j3(e,t),new B.j3(s,f)],x.J)
if(i){B.a_T(d,C.fu(h),r)
return}B.kw(d,!0,A.d8,C.fu(h),w,A.cV,1,e,u,v,f)
B.kw(d,!0,A.d8,C.fu(h),w,A.cV,1,u,e,f,t)
B.kw(d,!0,A.d8,C.fu(h),w,A.cV,1,e,s,t,f)
B.kw(d,!0,A.d8,C.fu(h),w,A.cV,1,s,e,f,v)},
eYH(d,e,f,g,h,i,j){var w,v=B.a([new B.j3(e,f),new B.j3(e+g*28,f),new B.j3(e,f+h*28)],x.J)
B.a_T(d,C.fu(i),v)
v=e+g*14
w=f+h*14
C.ku(d,v,w,6,j,!0)
C.ku(d,v,w,3,i,!0)},
eYI(d,e,f,g,h){var w=null,v=B.he(w,w,A.c7,0,A.dW,854,w,0,3,w,A.c7,480,!1)
C.xF(v,d,e)
C.rd(v,d)
C.ki(v,18,18,444,818,f,2)
C.ki(v,26,26,428,802,f,0.9)
if(h!=null)B.iB(v,!0,C.fu(h),28,451,28,34)
C.eYH(v,18,18,1,1,g,f)
C.eYH(v,462,18,-1,1,g,f)
C.eYH(v,18,836,1,-1,g,f)
C.eYH(v,462,836,-1,-1,g,f)
return v},
hym(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.he(v,v,A.c7,0,A.dW,854,v,0,3,v,A.c7,480,!1)
C.xF(r,u,4294240980)
C.rd(r,u)
C.ki(r,10,12,460,830,t,3.2)
C.ki(r,18,20,444,814,s,1.2)
C.ki(r,24,26,432,802,t,1.8)
C.fHF(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.ku(r,w,16,3,t,!0)
C.ku(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.ku(r,16,w,3,t,!0)
C.ku(r,464,w,3,t,!0)}return r},
hyn(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.he(t,t,A.c7,0,A.dW,854,t,0,3,t,A.c7,480,!1)
C.xF(p,s,4294373080)
C.rd(p,s)
C.ki(p,16,18,448,818,r,2.4)
C.ki(p,24,26,432,802,4286209044,1)
w=new C.f_Y(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fHF(p,!1,!0,r,q,q,34,16,18)
return p},
bwv(d,e,f,g,h,i){B.iB(d,!0,C.fu(i),e,e+g,f,f+h)},
bxk(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.E(A.k.U(v*l+u*m),0,255)
j=A.o.E(A.k.U(t*l+s*m),0,255)
l=A.o.E(A.k.U(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kw(d,!1,A.d8,new B.Qp(i),null,A.cV,1,e,w,l,l)}},
hza(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.ak(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kw(d,!1,A.d8,new B.qq(r),null,A.cV,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.ak(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kw(d,!1,A.d8,new B.qq(r),null,A.cV,1,t,t,f,s);++q}},
hzb(d,e){var w,v,u=null,t=B.he(u,u,A.c7,0,A.dW,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hza(t,v,w,30,D.cD1,(A.o.ak(v,30)+A.o.ak(w,30)&1)===0)
C.bwv(t,44,44,392,766,d)
C.bxk(t,44,44,392,766,d,e)
C.rd(t,d)
C.ki(t,44,44,392,766,4292128567,2.2)
C.ki(t,50,50,380,754,4279898632,0.8)
return t},
hAf(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.ku(d,e,f,7,h,!0)
C.ku(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kw(d,!0,A.d8,C.fu(h),o,A.cV,1.6,w,u,v,t)
B.kw(d,!0,A.d8,C.fu(h),o,A.cV,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kw(d,!0,A.d8,new B.qq(p),o,A.cV,1.2,w,v,q,q)}break
default:B.kw(d,!0,A.d8,C.fu(h),o,A.cV,1.5,e-8,e+8,f,f)
B.kw(d,!0,A.d8,C.fu(h),o,A.cV,1.5,e,e,f-8,f+8)
B.kQ(d,!0,A.d8,C.fu(h),o,A.cV,2,e,f)}},
hAg(d,e){var w,v,u,t,s=null,r=B.he(s,s,A.c7,0,A.dW,854,s,0,3,s,A.c7,480,!1)
B.iB(r,!0,C.fu(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hAf(r,u,v,w,4292391514)}C.bwv(r,46,46,388,762,d)
C.bxk(r,46,46,388,762,d,e)
C.rd(r,d)
C.ki(r,46,46,388,762,4291404327,1.8)
return r},
fXS(d,e,f,g){C.fbZ(d,!0,C.fu(g),16,e,f)
C.fbZ(d,!0,C.fu(g),11,e,f)
C.ku(d,e,f,6,g,!0)
B.kw(d,!0,A.d8,C.fu(g),null,A.cV,1.3,e-14,e+14,f,f)
B.kw(d,!0,A.d8,C.fu(g),null,A.cV,1.3,e,e,f-14,f+14)},
hvk(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.he(v,v,A.c7,0,A.dW,854,v,0,3,v,A.c7,480,!1)
B.iB(s,!0,C.fu(4280948752),0,479,0,853)
B.iB(s,!0,C.fu(u),0,479,0,78)
B.iB(s,!0,C.fu(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fXS(s,w,39,t)
C.fXS(s,w,815,t)}C.bwv(s,38,92,404,670,d)
C.bxk(s,38,92,404,670,d,e)
C.rd(s,d)
C.ki(s,38,92,404,670,t,1.8)
C.ki(s,45,99,390,656,4287322667,0.8)
return s},
hzG(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j3(e,f),new B.j3(q-5,w),new B.j3(q,f-(18-Math.abs(r)*3)),new B.j3(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_T(d,new B.qq(o),p)}B.kQ(d,!0,A.d8,C.fu(4292128567),null,A.cV,3,e,f)},
hzH(d,e){var w,v,u,t,s=null,r=4279196764,q=B.he(s,s,A.c7,0,A.dW,854,s,0,3,s,A.c7,480,!1)
C.xF(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kw(q,!0,A.d8,new B.qq(v),s,A.cV,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kw(q,!0,A.d8,new B.qq(u),s,A.cV,1.1,v,v,0,853)}B.iB(q,!0,C.fu(r),0,479,0,70)
B.iB(q,!0,C.fu(r),0,479,798,853)
for(t=0;t<5;++t)C.hzG(q,70+t*85,48,4292128567)
C.bwv(q,48,78,384,712,d)
C.bxk(q,48,78,384,712,d,e)
C.rd(q,d)
C.ki(q,48,78,384,712,4291404327,1.6)
return q},
hDY(d,e){var w,v,u,t=null,s=4279970378,r=B.he(t,t,A.c7,0,A.dW,854,t,0,3,t,A.c7,480,!1)
B.iB(r,!0,C.fu(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.ku(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kQ(r,!0,A.d8,new B.qq(u),t,A.cV,1,v,w)}C.bwv(r,40,40,400,774,d)
C.bxk(r,40,40,400,774,d,e)
C.rd(r,d)
C.ki(r,40,40,400,774,4291058750,2)
C.ki(r,48,48,384,758,s,0.8)
return r},
kF:function kF(d,e){this.a=d
this.b=e},
flu:function flu(d){this.a=d},
flt:function flt(d){this.a=d},
f_Y:function f_Y(d){this.a=d},
fm7(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hA9(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fGh(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.o0(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aD(0,Af.aeB(A.a.am(d,s,r+1)),t)
v=x.f.b(w)?B.a_(w,x.N,x.z):t
return v}catch(u){return t}},
ad9(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ad9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uK(null,""),$async$ad9)
case 3:n=g
if(A.a.i(n).length===0)throw B.R("AI is not available right now. Please try again later.")
t=B.mL(n)
if(e==null)s=A.hc
else{r=C.hA9(e)
s=B.a([new B.Z7(A.cR.gcs().aG(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qi(t,d,s,E.DG),$async$ad9)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.R(q!=null&&B.Jy(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$ad9,v)},
byU(d){return C.hMS(d)},
hMS(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$byU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Q.al(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ad9(r,null),$async$byU)
case 7:q=f
p=C.fGh(q)
if(p==null){u=d
w=1
break}o=d.azb(p)
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
return B.i($async$byU,v)},
h0F(d){var w,v=F.fIA(d)
v=B.aJ(v,"book","newspaper")
if(F.a0b(d)!=="sw"){w=B.ae("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fq3(d,e,f,g){return C.hOJ(d,e,f,g)},
hOJ(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fq3=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fm7(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h43()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ad9('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h0F(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fq3)
case 3:r=m.fGh(i)
if(r==null)throw B.R(y.S)
q=new C.yB(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").azb(r)
t=q.r
if(t.length===0)throw B.R("The AI did not write a story. Try again.")
s=n+" "+A.d.aF(t," ")
if(F.a0b(s)!=="sw"){p=B.ae("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a0b(A.d.aF(t," "))==="sw"?C.byU(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fq3,v)},
byq(d,e,f,g,h){return C.hKv(d,e,f,g,h)},
hKv(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$byq=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aF(l,"\n")
l=C.h43()
k=A.Q.al(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ad9('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h0F(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$byq)
case 3:p=j.fGh(a0)
if(p==null)throw B.R(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.ct(o)){n=d.azb(B.a_(o,x.N,x.z))
m=A.Q.al(n.ac(),null)!==A.Q.al(d.ac(),null)}else{n=d
m=!1}w=m&&F.a0b(A.d.aF(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.byU(n),$async$byq)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a5V(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byq,v)},
a5V:function a5V(d,e,f){this.a=d
this.b=e
this.c=f},
hRl(d,e){return B.a9(d,!1).cp(B.eD(new C.fwv(e),!0,null,x.H))},
fwv:function fwv(d){this.a=d},
TY:function TY(d,e){this.c=d
this.a=e},
aBj:function aBj(d,e,f,g,h,i,j,k){var _=this
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
e6b:function e6b(d){this.a=d},
e6a:function e6a(){},
e6c:function e6c(d){this.a=d},
e69:function e69(d,e){this.a=d
this.b=e},
e6d:function e6d(){},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5V:function e5V(d){this.a=d},
e5W:function e5W(d,e){this.a=d
this.b=e},
e5X:function e5X(d){this.a=d},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
e5U:function e5U(d){this.a=d},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5M:function e5M(d){this.a=d},
e5N:function e5N(d){this.a=d},
e62:function e62(d){this.a=d},
e63:function e63(d){this.a=d},
e61:function e61(d){this.a=d},
e64:function e64(d,e){this.a=d
this.b=e},
e60:function e60(d,e){this.a=d
this.b=e},
e65:function e65(d){this.a=d},
e6_:function e6_(d){this.a=d},
e66:function e66(d){this.a=d},
e5Z:function e5Z(d){this.a=d},
e67:function e67(d,e){this.a=d
this.b=e},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e68:function e68(d){this.a=d},
e5L:function e5L(d,e){this.a=d
this.b=e},
fl4(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fl4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fZh){w=1
break}r=new C.fl5()
t=4
q=x.s
w=7
return B.b(B.iD(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fl4)
case 7:$.fZh=!0
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
return B.i($async$fl4,v)},
byL(d){return A.AL[B.lP(d)-1]+", "+A.nC[B.bB(d)-1]+" "+B.bO(d)+", "+B.bw(d)},
hD3(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d_z[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fIZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fn(d[w],B.ae("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a4(v,new C.fjn(),B.U(v).k("a4<1>")))
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
continue}o=new C.fjp(j,h)
n=new C.fjo(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ak(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iN(o.$1(l)))
j.a+=l}return u},
fG1(d,e){var w=new C.f_z()
return A.d.cG(e,0,new C.f_x(w))>=A.d.cG(d,0,new C.f_y(w))},
fWx(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
u.D(new B.b4(46,0))
w=d.a
u.D(new B.ao(w,0))
v=d.b
u.D(new B.ao(w,v-46))
u.D(new B.ao(w-46,v))
u.D(new B.ao(0,v))
u.D(new B.ao(0,46))
u.D(new B.bE())
return u},
yB:function yB(d,e,f,g,h,i,j,k,l,m){var _=this
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
c7U:function c7U(d){this.a=d},
c7S:function c7S(){},
c7T:function c7T(){},
rF:function rF(d,e){this.a=d
this.b=e},
Ar:function Ar(d,e){this.a=d
this.b=e},
l1:function l1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fl5:function fl5(){},
fjn:function fjn(){},
fjp:function fjp(d,e){this.a=d
this.b=e},
fjo:function fjo(d,e,f){this.a=d
this.b=e
this.c=f},
f_z:function f_z(){},
f_A:function f_A(){},
f_x:function f_x(d){this.a=d},
f_y:function f_y(d){this.a=d},
aYC:function aYC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c7V:function c7V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7W:function c7W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7X:function c7X(d){this.a=d},
b93:function b93(d){this.a=d},
b92:function b92(d,e){this.b=d
this.a=e},
bqn:function bqn(d){this.a=d},
b5A:function b5A(d,e){this.b=d
this.a=e},
bnU:function bnU(d,e){this.b=d
this.a=e},
h6_(d,e){return B.a9(d,!1).cp(B.eD(new C.fwA(e,null),!0,null,x.E))},
fwA:function fwA(d,e){this.a=d
this.b=e},
U1:function U1(d,e,f){this.c=d
this.d=e
this.a=f},
aBn:function aBn(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
e7u:function e7u(){},
e7v:function e7v(d){this.a=d},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7h:function e7h(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7p:function e7p(d,e){this.a=d
this.b=e},
e7m:function e7m(d){this.a=d},
e7n:function e7n(d,e,f){this.a=d
this.b=e
this.c=f},
e7j:function e7j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7q:function e7q(d,e){this.a=d
this.b=e},
e7l:function e7l(d,e){this.a=d
this.b=e},
e7r:function e7r(d){this.a=d},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7s:function e7s(d,e){this.a=d
this.b=e},
b8A:function b8A(d,e,f){this.b=d
this.c=e
this.a=f},
hRs(d){return B.a9(d,!1).cp(B.eD(new C.fwQ(),!0,null,x.I))},
bwg(d,e){var w,v,u,t,s,r,q=B.bY(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fHo(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fwQ:function fwQ(){},
Z0:function Z0(d){this.a=d},
o6:function o6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCG:function aCG(d,e,f,g,h,i,j,k,l){var _=this
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
_.b1=null
_.aZ=0.25
_.b8=null
_.bH=0.5
_.aQ=1
_.c4=_.bP=_.bg=0
_.cT=_.cQ=!1
_.c=_.a=null},
eEk:function eEk(d){this.a=d},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDK:function eDK(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d){this.a=d},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDu:function eDu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDG:function eDG(d,e,f){this.a=d
this.b=e
this.c=f},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e,f){this.a=d
this.b=e
this.c=f},
eDI:function eDI(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eCN:function eCN(d){this.a=d},
eCO:function eCO(d){this.a=d},
eCL:function eCL(){},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e){this.a=d
this.b=e},
eCR:function eCR(){},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCS:function eCS(d){this.a=d},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCT:function eCT(d){this.a=d},
eCH:function eCH(d,e){this.a=d
this.b=e},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEg:function eEg(d){this.a=d},
eEh:function eEh(d,e){this.a=d
this.b=e},
eEi:function eEi(){},
eEa:function eEa(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e){this.a=d
this.b=e},
eE7:function eE7(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE6:function eE6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEf:function eEf(d){this.a=d},
eE5:function eE5(d){this.a=d},
eDT:function eDT(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDN:function eDN(d,e){this.a=d
this.b=e},
eDV:function eDV(d){this.a=d},
eDY:function eDY(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eE_:function eE_(d){this.a=d},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eE2:function eE2(d){this.a=d},
eDP:function eDP(d){this.a=d},
eE3:function eE3(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e){this.a=d
this.b=e},
eE4:function eE4(d){this.a=d},
eDW:function eDW(d){this.a=d},
eDX:function eDX(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDz:function eDz(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDl:function eDl(d,e){this.a=d
this.b=e},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDb:function eDb(d){this.a=d},
eCp:function eCp(d){this.a=d},
eCq:function eCq(d){this.a=d},
eCr:function eCr(d){this.a=d},
eCs:function eCs(d){this.a=d},
eCt:function eCt(d){this.a=d},
eCo:function eCo(d){this.a=d},
eCu:function eCu(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD1:function eD1(d){this.a=d},
eCz:function eCz(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCy:function eCy(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCw:function eCw(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDk:function eDk(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDi:function eDi(d,e){this.a=d
this.b=e},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDj:function eDj(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDC:function eDC(d,e,f){this.a=d
this.b=e
this.c=f},
eDB:function eDB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eEj:function eEj(d){this.a=d},
bc6:function bc6(d,e){this.b=d
this.a=e},
hN2(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hN3(d,e){var w,v,u,t,s,r,q,p,o,n=B.ae("\\S+",!0,!1,!1,!1).kx(0,d),m=B.z(n,B.a2(n).k("G.E"))
if(m.length===0)return d
w=new B.f7("")
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
v=t.index+t[0].length}n=w.a=n+A.a.aY(d,v)
return n.charCodeAt(0)==0?n:n},
bwR(){var w=$.bvZ,v=$.OL
$.OL=v+1
return w+"_"+v},
i0(d,e,f,g,h,i,j){return C.ei(A.bf,!1,4279310375,A.aA,"",i,24,A.bi,A.a3,"",h,C.bwR(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cd,D.eW,g,e,f)},
ny(d,e,f,g){var w=f*9
return C.i0(D.eF,d-f/2,e-w/32,f,w/16,g,0)},
hwY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvZ
p=$.OL
$.OL=p+1
w.push(new C.ey(q+"_"+p,D.eW,0,r,1,0.0016,"",24,A.a3,A.bi,A.aA,k,A.bf,null,D.bc,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvZ
p=$.OL
$.OL=p+1
w.push(new C.ey(q+"_"+p,D.eW,o,0,0.004,1,"",24,A.a3,A.bi,A.aA,k,A.bf,null,D.bc,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.ny(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.ny(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i0(D.bc,0.08,0.08,0.5,0.003,v,0),C.i0(D.bc,0.58,0.08,0.004,0.06,v,0),C.i0(D.bc,0.58,0.14,0.34,0.003,v,0),C.i0(D.bc,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i0(D.bc,0.08,0.8,0.004,0.14,t,0),C.i0(D.bc,0.08,0.94,0.6,0.003,t,0),C.ny(0.58,0.08,0.05,e),C.ny(0.92,0.22,0.05,e),C.ny(0.08,0.8,0.05,f),C.ny(0.68,0.94,0.05,f),C.ny(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i0(D.kK,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i0(D.kK,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i0(D.kK,0.7,0.8,0.22,0.12,w|1140850688,0),C.i0(D.kK,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.ny(0.5,0.5,1.5,w|335544320),C.ny(0.5,0.5,1.15,w|402653184),C.ny(0.5,0.5,0.8,v|436207616),C.ny(0.95,0.05,0.4,v|855638016),C.ny(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.ny(0.85,0.08,0.7,w|1140850688),C.ny(0.1,0.35,0.5,v|855638016),C.ny(0.9,0.62,0.55,v|771751936),C.ny(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i0(D.bc,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i0(D.bc,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i0(D.bc,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i0(D.bc,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.ny(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.ny(0.5,0.2,0.65,(w|3422552064)>>>0),C.ny(0.5,0.2,0.95,w|855638016),C.i0(D.bc,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i0(D.bc,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i0(D.jp,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i0(D.jp,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i0(D.jp,0.15,0.86,0.6,0.14,1712265002,0),C.ny(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cEm[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvZ
l=$.OL
$.OL=l+1
w.push(new C.ey(m+"_"+l,D.eW,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a3,A.bi,A.aA,k,A.bf,null,D.eF,q,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0))}w.push(C.ny(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i0(D.jp,0.35,-0.1,0.3,0.62,w|855638016,0),C.i0(D.jp,0.05,-0.1,0.3,0.55,v,-0.5),C.i0(D.jp,0.65,-0.1,0.3,0.55,v,0.5),C.ny(0.5,0.04,0.45,w|1711276032)],x.u)
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
return B.a([C.i0(D.eF,0.62,0.02,0.5,0.16,v,0.6),C.i0(D.eF,0.78,0.12,0.4,0.12,u,0.9),C.i0(D.eF,-0.12,0.8,0.5,0.16,u,-0.6),C.i0(D.eF,-0.05,0.9,0.4,0.12,v,-0.9),C.ny(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i0(D.bc,0.09,0.12,0.16,0.006,e,0),C.i0(D.bc,0.05,0.03,0.9,0.001,w,0),C.i0(D.bc,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hJz(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvZ=j
$.OL=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fgL()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ei(A.bf,!1,n,A.aA,"ngmy_quote_background",m,24,A.bi,A.a3,"",1,C.bwR(),g,"","",0,!1,"",0,D.bc,l,2,"",0,0,"",D.cd,D.l7,1,0,0))
if(a9)A.d.v(q,C.hwY(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ae("[*~^]",!0,!1,!1,!1)
p=C.hN2(B.aJ(w,p,""))
o=A.a.t(w,B.ae("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fgK(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cx,A.a3))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a3))
if(a0!=null&&a0.length!==0)q.push(C.ei(A.bf,!1,n,A.aA,"ngmy_quote_logo",m,24,A.bi,A.a3,a1,a3*9/16,C.bwR(),a0,"","",0,!1,a2,0,D.bc,l,2,"",0,0,"",D.cd,D.l7,a3,a4,a5))
return C.qU(s,r,0,0,q,j+"_slide",D.pq,"","","",D.db)},
qT:function qT(d,e){this.a=d
this.b=e},
lO:function lO(d,e,f,g,h,i,j,k,l,m){var _=this
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
fgL:function fgL(){},
fgK:function fgK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hn7(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bh(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b5(u.a(w.h(d,"extras")),new C.c9g(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bQ()
w=w.h(d,"request")
return new C.yD(u,t,s,B.t(w==null?"":w))},
foq(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$foq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fZE){w=1
break}$.fZE=!0
t=4
w=7
return B.b(B.ax(),$async$foq)
case 7:r=e
q=B.aS(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aD(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jl(p),k=k.gah(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gT(h)
l=C.hn7(m)
if(l!=null)J.cb(n,l)}$.BD.ce(0,B.t(o.a),new C.fos(n))}C.fH4()
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
return B.i($async$foq,v)},
fH4(){var w,v=new B.Q(Date.now(),0,!1).bN(-12e8)
for(w=new B.dv($.BD,$.BD.r,$.BD.e);w.C();)J.n3(w.d,new C.f6i(v))
$.BD.bm($.BD,new C.f6j())},
aLc(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aLc=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aLc)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cR($.BD,B.a2($.BD).k("cR<1,2>")).gah(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gT(h)
g=o
J.cb(p,B.E(["at",g.a.a5().ab(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.Q.al(n,null)),$async$aLc)
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
return B.i($async$aLc,v)},
hNE(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fH4()
w=$.BD.ce(0,d,new C.fou())
v=Date.now()
u=B.z(e,B.a2(e).k("cl.E"))
J.p1(w,0,new C.yD(new B.Q(v,0,!1),f,u,g))
C.aLc()},
hNB(d){var w,v=$.BD.h(0,d)
if(v==null||J.cj(v))return
w=J.cA(v)
w.cu(v,0)
if(w.gai(v))$.BD.W(0,d)
C.aLc()},
yD:function yD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9g:function c9g(){},
fos:function fos(d){this.a=d},
f6i:function f6i(d){this.a=d},
f6j:function f6j(){},
fou:function fou(){},
hNG(d){return A.d.dI(D.uW,new C.fox(d),new C.foy())},
hn5(d){var w
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
hn4(d){var w
switch(d.a){case 0:w=D.agi
break
case 1:w=A.xb
break
case 2:w=A.ahn
break
case 3:w=I.afZ
break
case 4:w=A.agN
break
case 5:w=A.lu
break
default:w=null}return w},
hzN(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nz[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nz[w]
if(!B.dp(v.toLowerCase(),t,0))u=B.dp(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hn6(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Q.al(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hNC(d,e,f,g,h){var w=new B.J(D.uW,new C.fop(),x.eC).aF(0,", "),v=""+d,u=C.h3W(h),t=F.fi9(h),s=C.h0g(g),r=e.t(0,D.Gm)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Gn)?'- New slides get an "icon3d" from: '+A.d.aF(D.Nz,", ")+".\n":"",p=e.t(0,D.Bk)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hND(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.uW,new C.fot(),x.eC).aF(0,", "),p=new B.f7("")
if(e.t(0,D.Gm)){p.a=s
w=s}else w=""
if(e.t(0,D.Gn))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aF(D.Nz,", ")+".\n")
if(e.t(0,D.Bk))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h3W(d)
v=F.fi9(d)
u=C.h0g(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aeR(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.C0(a3,"{"),a5=J.fzB(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.JS(a3,a4,a5+1)
try{w=A.Q.aD(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cj(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b5(p.a(J.q(t,a2)),new C.fmp(),m).bZ(0,new C.fmq())
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
f=C.hzN(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c4(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cb(u,new C.a62(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.aa(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fj(u).b:q))
p=A.d.ba(D.uW,new C.fmr(r))?r:a7
o=C.f5x(J.q(w,"logo_frame"),D.AI)
n=C.f5x(J.q(w,"logo_ring"),D.AD)
m=C.f5x(J.q(w,"photo_frame"),D.AI)
l=C.f5x(J.q(w,"photo_ring"),D.AD)
return new C.aoF(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_I(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
h33(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Bl),f7=f6?C.htI():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eU()
v.dM(f7.w+1)
u=f7.a
t=B.bj(u.b,!0,x.dL)
A.d.fA(t,v)
s=u.c
s=new C.nm("luxe",u.a,A.lu,t,u.e,u.f,B.a([s,u.d,s],x.t),D.db)
w=s}if(w==null)w=C.hNG(f9.b)
r=g2.t(0,D.a1z)||f6
q=g2.t(0,D.Gm)
p=g2.t(0,D.Ps)
o=new C.fgP()
n=B.a([],x.g)
m=new C.fgS(o,w,r)
l=new C.fgR(o,r)
k=new C.fgQ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.ba(u,new C.fgO(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cFN[b8]
c0=D.cEP[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eqm.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eF,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eF,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eF,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.me,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pr,500,f2,f0))
c1.push(l.$8$fx$key(D.bc,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Pp
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eF,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kK,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bc,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Bi
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eF,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eF,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.me,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cx,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pr,500,f2,f0))
d3=D.md
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eF,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bc,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tp:D.cd
c1.push(new C.ey(b4,D.a1x,0.64,0.05,0.27,0.9,g1,24,A.a3,A.bi,A.aA,4279310375,A.bf,e4,D.bc,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.md
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eF,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eF,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.me,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pr,450,f2,f0))
c1.push(l.$8$fx$key(D.bc,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Pp
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eF,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eF,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
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
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.md}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.db,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hvj(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.d1D[A.o.F(b1,6)]:s
n.push(new C.lr(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.AE(e4,e4,e4,e4,D.Bh,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.am(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fjd(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fjd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Bk)
n=e.t(0,D.Gn)
if(!o&&!n){u=D.a0w
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fjg(o,s[r],n,$.hyA,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iD(t,x.e),$async$fjd)
case 3:q=m.aU(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.m(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fjd,v)},
fic(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fic=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hND(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aKz(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fic)
case 3:u=s.aKU(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fic,v)},
byr(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$byr=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aZ(x.N)
for(s=B.ef(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.hNE(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aeR(i,"colorful")
t=C.hNC(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aKz(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hc),$async$byr)
case 3:u=o.aKU(m,f,h,g,D.dFz,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byr,v)},
aKz(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aKz=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uK(null,""),$async$aKz)
case 3:n=i
if(A.a.i(n).length===0)throw B.R("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mL(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qi(t,d,g,null),$async$aKz)
case 7:q=i
p=q.b
if(p!=null){o=C.aeR(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.R(s!=null&&B.Jy(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aKz,v)},
aKU(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKU=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Bk)||e.t(0,D.Gn)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d7(e,x.Q)
t.W(0,D.Bk)}w=6
return B.b(C.fjd(d,t),$async$aKU)
case 6:s=k
w=4
break
case 5:s=D.a0w
case 4:t=d.c
w=A.d.ba(t,new C.f_u())?7:9
break
case 7:r=$.h4O
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aKU)
case 10:q=k
p=q!=null?A.Q.al(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h33(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hn6(new C.aoF(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("J<1,n>")
t=B.z(new B.J(m,new C.f_v(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jD<cl.E,n>")
t=B.z(new B.jD(e,new C.f_w(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.Ps)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKU,v)},
fJH(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aZ(x.Q)
for(v=0;v<6;++v){u=D.a_r[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
hRx(d){return B.c2(A.K,null,new C.fx1(),d,!0,!0,!0,null,!1,!1,x.I)},
huj(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cR.gcs().aG(d)},
hRw(d,e,f){return B.c2(A.K,null,new C.fx0(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fJI(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fJJ(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
f5x(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.ba(e,new C.f5y(w))?w:""},
h0g(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h4M(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aeR(a1==null?"":a1,a0),a3=C.aeR(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a4<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qE(new B.a4(r,new C.foz(t[p]),q))
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
g=B.z(new B.a4(k,new C.foA(),v),r)
A.d.b_(g,new C.foB())
if(g.length===0)continue
f=new C.foC(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hNX(d){var w=d.toLowerCase(),v=B.ae("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAV
v=B.ae("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dHu
v=B.ae("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dHv
return null},
h_R(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bt(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dE(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hNH(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.nF
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cO)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.h_R(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.h_R(n,i,v,u))if(n.w>10){f=h+1
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
hNF(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aeR(o,"colorful")
if(n==null)throw B.R("That earlier version could not be read.")
w=B.aZ(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_r[r]
if(q.b===s)w.K(0,q)}}v=C.fJI(e)
u=C.fJJ(e)
p=C.h33(n,D.a0w,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("J<1,n>")
o=B.z(new B.J(o,new C.fov(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jD<cl.E,n>")
o=B.z(new B.jD(w,new C.fow(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.Ps)
return p},
hRi(d,e,f){return B.c2(A.K,null,new C.fwc(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
htI(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eU()
s.dM(t)
w=D.ckt[s.aB(10)]
v=new C.e2h(s)
u=x.N
return new C.e2g(w,s.aB(4),J.fj(v.$1$2(D.cJX,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.cYG,2+s.aB(2),u),v.$1$2(D.cSz,2,u),v.$1$2(D.d0j,4,x.fP),t)},
hvj(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eU()
a1.dM(a5.w+a3*13)
w=new C.eX1(a4)
v=new C.eX3(a4,d)
u=new C.eX2(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cO){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aS(A.o.fG(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aS(A.o.fG(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eF,0.1+a1.af()*0.45,0.05+a1.af()*0.3,0.45,0.75,C.a_I(a0,52),"lux_spot",a5.vH(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bc,0,0,1,1,0,"lux_back",a5.vH(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bc,0,0,1,1,0,"lux_back2",a5.aBv(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.022,0.038,0.956,0.924,0,g,a5.vH(0,f),D.db,150,C.a_I(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.018,0.032,0.964,0.936,0,g,a5.vH(0,f),D.db,120,C.a_I(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.db,260,C.a_I(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bc,0,0,1,1,0,"lux_filigree",a5.vH(0,"filigree"),D.db,200))
break
default:a2.push(w.$10$anim$delay(D.bc,0.08,0.06,0.84,0.004,C.a_I(a0,208),"lux_rule",a5.aBv(0,"shimmer",r),D.to,150))
a2.push(w.$10$anim$delay(D.bc,0.08,0.936,0.84,0.004,C.a_I(a0,144),"lux_rule2","",D.Gk,220))}l=!A.d.ba(a2,new C.eX0())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vH(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vH(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_I(r,242)
j=a5.vH(0,"orbit")
i=s===D.bc?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pr,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eF,t-0.007,0.9495,0.014,0.025,C.a_I(r,242),"lux_g2",a5.vH(0,"orbit"),D.pr,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bc,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aS(A.o.fG(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.bc,0,0,1,1,0,"lux_velvet",a5.vH(0,"velvet")))},
nm:function nm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fox:function fox(d){this.a=d},
foy:function foy(){},
vj:function vj(d,e){this.a=d
this.b=e},
a62:function a62(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoF:function aoF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fop:function fop(){},
fot:function fot(){},
fmp:function fmp(){},
fmq:function fmq(){},
fmr:function fmr(d){this.a=d},
fgP:function fgP(){},
fgS:function fgS(d,e,f){this.a=d
this.b=e
this.c=f},
fgR:function fgR(d,e){this.a=d
this.b=e},
fgQ:function fgQ(d,e){this.a=d
this.b=e},
fgO:function fgO(d){this.a=d},
fjg:function fjg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fje:function fje(d){this.a=d},
fjf:function fjf(d){this.a=d},
f_u:function f_u(){},
f_v:function f_v(){},
f_w:function f_w(){},
fx1:function fx1(){},
Zw:function Zw(d){this.a=d},
aEB:function aEB(d,e,f,g,h){var _=this
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
eKe:function eKe(d,e,f){this.a=d
this.b=e
this.c=f},
eKf:function eKf(d,e){this.a=d
this.b=e},
eKc:function eKc(d,e){this.a=d
this.b=e},
eKd:function eKd(d,e){this.a=d
this.b=e},
eKb:function eKb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eK6:function eK6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eKa:function eKa(d,e){this.a=d
this.b=e},
eK5:function eK5(d,e){this.a=d
this.b=e},
eK9:function eK9(d,e){this.a=d
this.b=e},
eK4:function eK4(d,e){this.a=d
this.b=e},
eK7:function eK7(d){this.a=d},
eK8:function eK8(d,e){this.a=d
this.b=e},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJY:function eJY(d){this.a=d},
eJZ:function eJZ(d){this.a=d},
eK_:function eK_(d){this.a=d},
eK0:function eK0(d){this.a=d},
eJX:function eJX(d,e){this.a=d
this.b=e},
eK1:function eK1(d,e){this.a=d
this.b=e},
eKs:function eKs(d){this.a=d},
eKt:function eKt(d){this.a=d},
eKr:function eKr(d){this.a=d},
eKu:function eKu(d){this.a=d},
eKq:function eKq(d){this.a=d},
eKw:function eKw(d){this.a=d},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKx:function eKx(d){this.a=d},
eKo:function eKo(d,e){this.a=d
this.b=e},
eKy:function eKy(d){this.a=d},
eKn:function eKn(d){this.a=d},
eKz:function eKz(d){this.a=d},
eKm:function eKm(d,e){this.a=d
this.b=e},
eKA:function eKA(d){this.a=d},
eKl:function eKl(d,e){this.a=d
this.b=e},
eKB:function eKB(d){this.a=d},
eKk:function eKk(d){this.a=d},
eKC:function eKC(d,e){this.a=d
this.b=e},
eKj:function eKj(d,e){this.a=d
this.b=e},
eKD:function eKD(d){this.a=d},
eKv:function eKv(d){this.a=d},
eKi:function eKi(d,e){this.a=d
this.b=e},
eK2:function eK2(d,e,f){this.a=d
this.b=e
this.c=f},
eK3:function eK3(d,e,f){this.a=d
this.b=e
this.c=f},
eKh:function eKh(d,e){this.a=d
this.b=e},
eKg:function eKg(d,e){this.a=d
this.b=e},
fx0:function fx0(d,e){this.a=d
this.b=e},
Zv:function Zv(d,e,f){this.c=d
this.d=e
this.a=f},
aEA:function aEA(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eJO:function eJO(d){this.a=d},
eJP:function eJP(d){this.a=d},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJR:function eJR(d){this.a=d},
eJS:function eJS(d){this.a=d},
eJN:function eJN(d,e){this.a=d
this.b=e},
eJT:function eJT(d,e){this.a=d
this.b=e},
eJU:function eJU(d,e){this.a=d
this.b=e},
f5y:function f5y(d){this.a=d},
aZ_:function aZ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBc:function aBc(d,e,f){this.c=d
this.d=e
this.a=f},
bgH:function bgH(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
e2j:function e2j(d){this.a=d},
e2i:function e2i(){},
bej:function bej(d,e){this.b=d
this.a=e},
foz:function foz(d){this.a=d},
foA:function foA(){},
foB:function foB(){},
foC:function foC(d){this.a=d},
ape:function ape(d,e){this.a=d
this.b=e},
fov:function fov(){},
fow:function fow(){},
fwc:function fwc(d,e){this.a=d
this.b=e},
XT:function XT(d,e,f){this.c=d
this.d=e
this.a=f},
ayF:function ayF(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dby:function dby(d){this.a=d},
dbz:function dbz(d){this.a=d},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbD:function dbD(d){this.a=d},
dbE:function dbE(d,e){this.a=d
this.b=e},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbF:function dbF(d){this.a=d},
dbB:function dbB(d,e){this.a=d
this.b=e},
boZ:function boZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e2g:function e2g(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e2h:function e2h(d){this.a=d},
eX1:function eX1(d){this.a=d},
eX3:function eX3(d,e){this.a=d
this.b=e},
eX2:function eX2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eX0:function eX0(){},
aJ7:function aJ7(){},
fIx(d){var w,v,u
try{w=A.Q.aD(0,d,null)
if(x.f.b(w)){v=B.vb(B.a_(w,x.N,x.z))
return v}}catch(u){}return null},
aYW:function aYW(d,e,f){this.c=d
this.d=e
this.a=f},
bik:function bik(d,e){this.c=d
this.a=e},
hK1(d){return A.d.dI(D.Fr,new C.fhW(d),new C.fhX())},
hK2(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aY(t,6)
if(w.length===0)return null
v=new B.a4(D.Fr,new C.fhY(w),x.b4)
if(!v.gah(0).C())return null
u=v.gL(0)
return new C.ju("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kZ:function kZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fhW:function fhW(d){this.a=d},
fhX:function fhX(){},
fhY:function fhY(d){this.a=d},
mz(d,e,f,g,h){return new C.Dx(f,g,d)},
hww(d){var w=d.z,v=B.U(w).k("a4<1>")
w=B.z(new B.a4(w,new C.eZ0(),v),v.k("G.E"))
d.z=w
d.x=""},
dr(d,e){var w=$.IY
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
ds(d,e,f,g,h,i,j,k,l){return C.ei(A.bf,!1,4279310375,A.aA,"",d,24,A.bi,A.a3,"",e,"design_"+C.cy(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cd,D.eW,j,k,l)},
h2R(d,e){var w
C.hww(d)
w=A.d.dI($.bAo(),new C.ffM(e),new C.ffN())
$.IY=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.IY=""}d.z=B.bj(d.z,!0,x.F)},
Dx:function Dx(d,e,f){this.a=d
this.b=e
this.e=f},
eZ0:function eZ0(){},
fo0:function fo0(){},
fo1:function fo1(){},
fo2:function fo2(){},
fod:function fod(){},
foi:function foi(){},
foj:function foj(){},
fok:function fok(){},
fol:function fol(){},
fom:function fom(){},
fon:function fon(){},
foo:function foo(){},
fo3:function fo3(){},
fo4:function fo4(){},
fo5:function fo5(){},
fo6:function fo6(){},
fo7:function fo7(){},
fo8:function fo8(){},
fo9:function fo9(){},
foa:function foa(){},
fob:function fob(){},
foc:function foc(){},
foe:function foe(){},
fof:function fof(){},
fog:function fog(){},
foh:function foh(){},
ffM:function ffM(d){this.a=d},
ffN:function ffN(){},
iM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ei(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bc,4280172719,2,m,n,0,"",o,D.cO,p,q,r)},
BU(d,e,f,g,h,i,j,k,l){return C.ei(A.bf,!1,4279310375,A.aA,"",d,24,A.bi,A.a3,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cd,D.eW,j,k,l)},
bz8(){var w=new B.Q(Date.now(),0,!1)
return A.i5[B.bB(w)-1]+" "+B.bO(w)+", "+B.bw(w)},
ek:function ek(d,e,f){this.a=d
this.b=e
this.c=f},
bwB(d){return new B.iH((A.o.az(d,24)&255)/255,(A.o.az(d,16)&255)/255,(A.o.az(d,8)&255)/255,(d&255)/255)},
hBo(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.akv(A.cw.aG(A.d.gaj(d.split(","))))
return w}catch(v){return null}},
hBs(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f5k(),x.dv).aF(0,"\n")},
hBr(d){switch(d.a){case 2:return A.mU
case 1:case 5:return A.eAH
default:return A.QM}},
hBl(d){switch(d.a){case 2:return A.tW
case 1:case 5:return A.Sv
default:return A.a6e}},
hBp(d,e){var w,v=null,u=d.ay,t=A.o.az(u,24),s=A.o.az(d.ch,24),r=(t&255)===0?v:C.bwB(u),q=(s&255)===0?v:C.bwB(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n5(q,p,A.kp)
w=new B.p2(t,t,t,t)}switch(d.ax.a){case 1:return B.lg(v,v,v,new B.kn(r,w,v,A.a7r,v),v,v,v,v)
case 4:return u?new B.fI(v,v,v):B.wh(B.lg(v,v,q,v,p+0.4,v,v,v))
default:return B.lg(v,v,v,new B.kn(r,w,B.uQ(4),A.hu,v),v,v,v,v)}},
hBn(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eW?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hBl(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.hBs(d)
t=C.bwB(d.Q)
s=d.x.a>=700?A.ed:A.uq
r=d.y===A.cx?A.wO:A.aeS
q=d.z
p=new B.C3(w,l,l,B.f2(u,l,l,l,B.fY(l,t,1===q.a?A.aJv:A.aJu,l,l,l,l,l,l,A.dm,l,l,v,r,s,l,!0,l,l,l,l),C.hBr(d.as)))
break
case 1:case 4:o=C.hBo(d.at)
n=i===D.l7&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wh(B.f2(w,l,l,l,B.fY(l,A.qN,l,l,l,l,l,l,l,A.dm,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gt(o,n?A.a7n:A.SR,l,l)
break
case 3:w=new B.n5(A.GD,1,A.kp)
u=B.uQ(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lg(A.tW,B.f2(t,l,l,l,B.fY(l,D.dRR,l,l,l,l,l,l,l,A.dm,l,l,11,l,A.ed,l,!0,l,l,l,l),A.mU),l,new B.kn(E.aC_,new B.p2(w,w,w,w),u,A.hu,l),l,l,l,l)
break
case 2:p=C.hBp(d,e)
break
case 5:p=C.hBm(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fVK(-w,p)
w=i===D.cO
if(w){m=A.o.az(d.Q,24)&255
if(m<255)p=new B.apY(m/255,p)}if(w)return new F.vp(k,l,j,l,new B.Qw(new B.km(g,g,f,1/0),p))
if(i===D.kJ){i=new B.n5(A.GD,1,A.kp)
i=B.lg(A.tW,p,l,new B.kn(A.op,new B.p2(i,i,i,i),B.uQ(4),A.hu,l),l,l,D.bkI,l)}else i=p
return new F.vp(k,l,j,l,new B.fI(g,f,i))},
hBq(d,e,f,g){var w,v=null,u=C.bwB(d.e),t=d.f
t=B.a([F.fUo(t!=null?B.lg(v,v,v,new B.kn(v,v,v,A.hu,new B.aTu(E.Sw,A.a68,B.a([u,C.bwB(t)],x.cR),v)),v,v,v,v):B.lg(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f5j(f,g),B.U(w).k("J<1,f8>")))
return F.clK(t)},
fJL(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fJL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2i(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.UJ(A.v7,A.GA,D.blO,null,null,null,!1,null)
o=new B.AK(o,new C.foI(607,787,p,d))
o.L9(n,null)
r.push(o)}u=n.jD(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJL,v)},
hBm(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fIx(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gah_()
if(h==null)h=A.as1
j=B.rS(4279308564)
w=B.uQ(18)
v=new B.n5(B.rS(4287531653),3,A.kp)
u=i.length===0?"My links":i
u=B.a([B.wh(B.f2(u,m,m,m,B.fY(m,A.op,m,m,m,m,m,m,m,A.dm,m,m,12,m,A.ed,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wh(B.f2(A.a.i(l.c),m,m,m,D.eHy,m)))
u.push(new B.fI(m,8,m))
for(t=B.df(h,0,B.dK(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bV(t,t.gJ(0),s.k("bV<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rS(4280690220)
o=new B.a7g(8,8)
n=A.a.i(r.b)
u.push(new B.nn(D.beZ,new C.au7(new C.afT(q),B.lg(m,B.f2(n.length===0?A.a.i(r.c):n,m,m,m,D.eJH,A.mU),m,new B.kn(p,m,new B.agk(o,o,o,o),A.hu,m),m,m,D.bl7,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wh(B.f2(k,m,m,m,D.eJ0,m))
u.push(new C.au7(C.hbo(k),t))}return B.lg(m,B.y_(u,A.JB,A.l6),m,new B.kn(j,new B.p2(v,v,v,v),w,A.hu,m),m,m,D.bfP,m)},
f5k:function f5k(){},
f5j:function f5j(d,e){this.a=d
this.b=e},
foI:function foI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeE(d){var w,v
for(w=0;w<32;++w){v=D.Fi[w]
if(v.a===d)return v}return null},
fYk(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aG(A.a.aY(d,u+1))
return w}catch(v){return null}},
cQ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h5W(d,e){return B.a9(d,!1).cp(B.eD(new C.fuQ(e),!0,null,x.fB))},
h5V(d,e){return B.c2(A.K,null,new C.fuP(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iQ:function iQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Do:function Do(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LU:function LU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg3:function bg3(d,e,f){var _=this
_.d=d
_.e=$
_.bp$=e
_.a6$=f
_.c=_.a=null},
dM2:function dM2(d){this.a=d},
dM1:function dM1(d,e,f){this.a=d
this.b=e
this.c=f},
dM0:function dM0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnz:function bnz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJ1:function eJ1(d,e){this.a=d
this.b=e},
bbc:function bbc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWR:function aWR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3Q:function c3Q(){},
c3R:function c3R(d){this.a=d},
c3S:function c3S(d,e,f){this.a=d
this.b=e
this.c=f},
c3T:function c3T(d,e,f){this.a=d
this.b=e
this.c=f},
fuQ:function fuQ(d){this.a=d},
Xr:function Xr(d,e){this.c=d
this.a=e},
ax5:function ax5(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d12:function d12(d,e,f){this.a=d
this.b=e
this.c=f},
d17:function d17(d){this.a=d},
d18:function d18(d){this.a=d},
d16:function d16(d){this.a=d},
d19:function d19(d){this.a=d},
d15:function d15(d,e){this.a=d
this.b=e},
d1a:function d1a(d){this.a=d},
d14:function d14(d){this.a=d},
d1b:function d1b(d){this.a=d},
d13:function d13(d,e){this.a=d
this.b=e},
d1c:function d1c(d,e){this.a=d
this.b=e},
fuP:function fuP(d){this.a=d},
fuO:function fuO(d){this.a=d},
fuN:function fuN(d,e,f){this.a=d
this.b=e
this.c=f},
fuM:function fuM(d,e){this.a=d
this.b=e},
aIB:function aIB(){},
hRv(d){return B.c2(A.K,null,new C.fx_(),d,!0,!0,!0,null,!1,!1,x.N)},
fx_:function fx_(){},
XM:function XM(d){this.a=d},
bcG:function bcG(d){this.d=d
this.c=this.a=null},
d7y:function d7y(d){this.a=d},
d7z:function d7z(d,e){this.a=d
this.b=e},
d7A:function d7A(d){this.a=d},
hxW(d){var w,v=d.split("@")
if(v.length>1){w=B.c4(v[1],16)
if(w!=null)return B.aY(w)}return D.wg},
hLW(d){var w,v=A.d.gL(d.split("@"))
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
hLV(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hxW(d)
switch(q){case"shimmer":return B.nr(A.a6A,g,new C.fln(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bc3(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e5(A.A,B.d8(C.fAS(g,B.a39(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bbL(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.d8(B.eu(A.A,e*0.5,B.e5(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.di()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fl(e)
u.mf(Math.sin(e)*0.3)
return B.dP(B.fo(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.am(A.W,r,A.b_,A.q,B.a([B.e1(B.b2(r,r,r,new C.bkv(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.W,r,A.b_,A.q,B.a([B.e1(B.b2(r,r,r,new C.b6J(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.W,r,A.b_,A.q,B.a([B.e1(B.b2(r,r,r,new C.b6m(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.brj(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bom(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bnv(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.W,r,A.b_,A.q,B.a([g,B.e1(B.b2(r,r,r,new C.bb5(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.A,r,A.a9,A.h,B.a([B.bZ(0,B.e1(B.e5(A.A,B.bU(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bb),1.6+s*0.15,r,r),!0,r),0,0,0),B.eu(A.A,s*0.06,B.e5(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fln:function fln(d,e){this.a=d
this.b=e},
bc3:function bc3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbL:function bbL(d,e,f){this.b=d
this.c=e
this.a=f},
bkv:function bkv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6J:function b6J(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6m:function b6m(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brj:function brj(d,e,f){this.b=d
this.c=e
this.a=f},
bom:function bom(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnv:function bnv(d,e,f){this.b=d
this.c=e
this.a=f},
bb5:function bb5(d,e,f){this.b=d
this.d=e
this.a=f},
d0K:function d0K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wP:function wP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flq(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kJ},
hM0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.flr())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gL(B.aNo(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hM_(d,e){var w,v,u,t,s,r=d.db
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
d.e=A.k.E(s,0.06,u)}else{d.w=A.k.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.E(r*(d.w*0.001)+0.028,0.06,u)},
aeh(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeh=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a4<1>")
e=B.z(new B.a4(a4,new C.fdN(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(A.dA,null,new C.fdO(e),d,!0,!0,!1,A.l8,!1,!1,x.N),$async$aeh)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fKm(d),$async$aeh)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.JI(d,"Search states\u2026","",A.jN,"Choose state"),$async$aeh)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fJi(s)
if(p==null)p=A.d.gL(D.Ok)
f=C.cy()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cy()
m=p.e
l=C.fls(p.d)
k=x.u
j=B.a([C.ei(A.bf,!1,4279310375,A.aA,"marriage_locked_bg",4280640491,24,A.bi,A.a3,"",1,C.cy(),l,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l7,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.BG(i,0.016,D.kK,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.BG(0,0.058,D.eF,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.BG(0,0.058,D.eF,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.J8("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.J8("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a3,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fGo(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bw4("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_j("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_j("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_j("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_j("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bw4("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.BG(m,0.082,D.bc,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cy()
k.push(C.ei(A.bf,!1,i,A.aA,"marriage_field_utangulizi:"+A.k.a9(0.78,3),4280640491,9.5,A.bi,A.cq,"",0.074,g,null,"","",0,!1,"",0,D.bc,4280172719,2,y.O,0,0,"",D.cd,D.cO,0.78,0.11,0.388))
A.d.v(k,C.fGo(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bw4("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.h_g("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.h_g("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_j("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_j("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bw3("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bw3("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bw4("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.J8("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.J8("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bw3("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bw3("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bw4("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_j("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bw3("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_j("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fGo(0.22,0.83,0.56,4291404327,i),h)
h.push(C.J8("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.J8("Nakala ya Hati",A.L,4291404327,9,A.a3,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.AE(null,null,null,null,D.nF,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qU(m,null,0,0,j,n,D.pq,"","","Hati ya Ndoa",D.db)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeh,v)},
flr:function flr(){},
fdN:function fdN(){},
fdO:function fdO(d){this.a=d},
fdL:function fdL(d){this.a=d},
fdM:function fdM(d){this.a=d},
hAT(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hAS(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mi
case"lineThrough":return A.yn
default:return A.aA}},
ei(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ey(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h1i(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.O7[w]
if(v.b===u)return v}return D.db},
hxk(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cBR[w]
if(v.b===u)return v}return D.cO},
hDC(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cZf[w]
if(v.b===u)return v}return D.bc},
qU(d,e,f,g,h,i,j,k,l,m,n){return new C.lr(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fT8(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hze(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.h1i(d.h(0,"transition"))
q=B.aN(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aN(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d5(n,x.f)
n=B.cz(n,new C.c9d(),n.$ti.k("G.E"),x.F)
n=B.z(n,B.a2(n).k("G.E"))}return C.qU(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hze(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ak1[w]
if(v.b===u)return v}return D.md},
AE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.Q(Date.now(),0,!1):a4
return new C.hT(p,t,a1,h,i,w,a0==null?B.a([C.qU(4294967295,null,0,0,null,C.cy(),D.pq,"","","",D.db)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
U9(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hvz(a6.h(0,"aspectRatio"))
t=B.aN(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.k.N(t),1,120)
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
o=C.kk(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kk(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aN(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aN(a6.h(0,"signatureInkColor"))
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
else{f=J.b5(f,new C.c90(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b5(e,new C.c91(),x.N)
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
g=B.cz(g,new C.c92(),g.$ti.k("G.E"),x.bt)
g=B.z(g,B.a2(g).k("G.E"))}return C.AE(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qU(4294967295,a3,0,0,a3,C.cy(),D.pq,"","","",D.db)],x.g):g,v,p,o,s)},
kk(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hvz(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.d_1[w]
if(v.b===u)return v}return D.Bh},
cy(){var w=Date.now(),v=$.iS
$.iS=v+1
return""+1000*w+"_"+v},
c9u(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.Bi){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.aA,"",n,40,A.bi,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bc,m,2,o,0,0,"",D.cd,D.cO,0.84,0.08,0.3)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.aA,"",n,20,A.bi,A.cq,"",0.12,u,p,"","",0,!1,"",0,D.bc,m,2,"Click to add subtitle",0,0,"",D.cd,D.cO,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.aA,"",n,32,A.bi,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bc,m,2,o,0,0,"",D.cd,D.cO,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.bf,!0,f.e.l(),A.aA,"",n,20,A.bi,A.cq,"",0.68,u,p,"","",0,!1,"",0,D.bc,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cd,D.cO,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.aA,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bc,m,2,"Two Column Slide",0,0,"",D.cd,D.cO,0.88,0.06,0.06)
u=C.cy()
t=f.e
u=C.ei(A.bf,!0,t.l(),A.aA,"",n,18,A.bi,A.a3,"",0.7,u,p,"","",0,!1,"",0,D.bc,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cd,D.cO,0.42,0.06,0.22)
s=C.cy()
A.d.v(w,B.a([v,u,C.ei(A.bf,!0,t.l(),A.aA,"",n,18,A.bi,A.a3,"",0.7,s,p,"","",0,!1,"",0,D.bc,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cd,D.cO,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.K(d.z,C.ei(A.L,!1,4294967295,A.aA,"",n,42,A.bi,A.u,"",0.2,C.cy(),p,"","",0,!1,"",0,D.bc,m,2,"Section Header",0,0,"",D.cd,D.cO,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.aA,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bc,m,2,"Compare",0,0,"",D.cd,D.cO,0.88,0.06,0.06)
u=C.cy()
t=f.c
u=C.ei(A.bf,!1,l,A.aA,"",t.j(0.12).l(),24,A.bi,A.a3,"",0.68,u,p,"","",0,!1,"",0,D.bc,t.l(),2,"",0,0,"",D.cd,D.eW,0.42,0.06,0.22)
s=C.cy()
r=f.e
s=C.ei(A.bf,!1,r.l(),A.aA,"",n,20,A.bi,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bc,m,2,"Option A",0,0,"",D.cd,D.cO,0.38,0.08,0.26)
q=C.cy()
t=C.ei(A.bf,!1,l,A.aA,"",t.j(0.06).l(),24,A.bi,A.a3,"",0.68,q,p,"","",0,!1,"",0,D.bc,t.j(0.5).l(),2,"",0,0,"",D.cd,D.eW,0.42,0.52,0.22)
q=C.cy()
A.d.v(w,B.a([v,u,s,t,C.ei(A.bf,!1,r.l(),A.aA,"",n,20,A.bi,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bc,m,2,"Option B",0,0,"",D.cd,D.cO,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cy()
v=C.ei(A.L,!1,f.d.l(),A.aA,"",n,36,A.bi,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bc,m,2,"TERM / QUESTION",0,0,"",D.cd,D.cO,0.8,0.1,0.12)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.aA,"",n,22,A.bi,A.cq,"",0.35,u,p,"","",0,!1,"",0,D.bc,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cd,D.cO,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.aA,"",n,28,A.bi,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bc,m,2,"Quiz Question",0,0,"",D.cd,D.cO,0.88,0.06,0.06)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.bf,!1,f.e.l(),A.aA,"",n,20,A.bi,A.a3,"",0.62,u,p,"","",0,!1,"",0,D.bc,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cd,D.cO,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cy()
v=C.ei(A.bf,!1,f.d.l(),A.aA,"",n,26,A.bi,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bc,m,2,"Worksheet / Assignment",0,0,"",D.cd,D.cO,0.88,0.06,0.04)
u=C.cy()
A.d.v(w,B.a([v,C.ei(A.bf,!1,f.e.l(),A.aA,"",n,18,A.bi,A.a3,"",0.78,u,p,"","",0,!1,"",0,D.bc,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cd,D.cO,0.88,0.06,0.16)],x.u))
break}},
hng(d){return A.d.dI(D.a_8,new C.c9v(d),new C.c9w())},
hnd(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cb(v,C.U9(B.a_(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fCX(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.c9q(t)
for(w=J.aU(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bg<2>")
u=B.z(new B.bg(t,w),w.k("G.E"))
A.d.b_(u,new C.c9p())
return u},
fTb(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c9l()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
aoG(d){return C.hnb(d)},
hnb(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c9o()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0v(m),$async$aoG)
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
return B.b(B.ax(),$async$aoG)
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
case 11:o=l.$1($.fTa.h(0,m))
n=C.fCX(C.fCX(j,r),o)
if(n.length===0){u=C.fTb(C.fTb(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoG,v)},
c9k(d){return C.hna(d)},
hna(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c9k=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$c9k)
case 7:r=f
q=r.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kq(q,B.U(q).c)
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
return B.i($async$c9k,v)},
aZ1(d,e){return C.hnc(d,e)},
hnc(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aZ1=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aZ1)
case 6:s=g
q=s.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.aa(r)>500?J.JR(r,J.aa(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$aZ1)
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
return B.i($async$aZ1,v)},
Ua(d,e){return C.hne(d,e)},
hne(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ua=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.aa(a0)===0){w=1
break}p=$.fT9.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aoG(a3),$async$Ua)
case 5:p=a6
case 4:w=6
return B.b(C.c9k(a3),$async$Ua)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gT(m)
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
e=B.z(new B.a4(new B.bg(n,m),new C.c9r(o),l),l.k("G.E"))
A.d.b_(e,new C.c9s())
$.fT9.m(0,a0,e)
n=B.U(e).k("J<1,a1<n,@>>")
n=B.z(new B.J(e,new C.c9t(),n),n.k("ai.E"))
r=A.Q.al(n,null)
$.fTa.m(0,a0,r)
t=8
w=11
return B.b(B.af4(a0,r),$async$Ua)
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
return B.b(B.ax(),$async$Ua)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Ua)
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
return B.i($async$Ua,v)},
Hk:function Hk(d,e){this.a=d
this.b=e},
aoE:function aoE(d,e){this.a=d
this.b=e},
u9:function u9(d,e){this.a=d
this.b=e},
mb:function mb(d,e){this.a=d
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
c9e:function c9e(){},
c9f:function c9f(){},
c9d:function c9d(){},
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
c93:function c93(){},
c94:function c94(){},
c90:function c90(){},
c91:function c91(){},
c92:function c92(){},
ju:function ju(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9v:function c9v(d){this.a=d},
c9w:function c9w(){},
c9q:function c9q(d){this.a=d},
c9p:function c9p(){},
c9l:function c9l(){},
c9m:function c9m(){},
c9n:function c9n(){},
c9o:function c9o(){},
c9r:function c9r(d){this.a=d},
c9s:function c9s(){},
c9t:function c9t(){},
hMb(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fm_(e,v,d,B.aZ(w))
w.$1(new C.flW())
w.$1(new C.flX())
w.$1(new C.flY())
w.$1(new C.flZ())
return v},
fm_:function fm_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flW:function flW(){},
flX:function flX(){},
flY:function flY(){},
flZ:function flZ(){},
aYZ:function aYZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c99:function c99(d){this.a=d},
c98:function c98(){},
c9a:function c9a(){},
c9b:function c9b(d,e){this.a=d
this.b=e},
c9c:function c9c(d){this.a=d},
alU:function alU(d,e){this.c=d
this.a=e},
bfR:function bfR(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dz9:function dz9(){},
aIn:function aIn(){},
c9h(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c9h=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.H(x.q).f.P(D.ey4)
u=!1
w=1
break}u=B.kH(!1,d,t,!1,null,A.a1B,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9h,v)},
hn8(d){var w=A.d.bi(D.Fr,new C.c9i(d))
if(w<0)return!0
return w>=4},
hn9(d){var w=A.d.bi($.bAo(),new C.c9j(d))
if(w<0)return!0
return w>=5},
c9i:function c9i(d){this.a=d},
c9j:function c9j(d){this.a=d},
hNR(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xR()
$.pK().p8(t,new C.foP(s),!0)
u=B.a([B.CL(v,A.pu,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eI0,v,v,v),A.h,v,v,new B.o(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.nt,v,v,v),v,v,4,v,4,v))}return new B.am(A.W,v,A.b_,A.q,u,v)},
foP:function foP(d){this.a=d},
hNs(){return C.fJE()},
hKq(){return C.byo()},
hMs(){return C.fJv()},
aMu(d,e,f){var w=0,v=B.j(x.H),u
var $async$aMu=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fnU(d,f),$async$aMu)
case 5:w=1
break
case 4:if(d.e!=null)d.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aMu,v)},
fnU(d,e){var w=0,v=B.j(x.H),u
var $async$fnU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bwC
if(u==null)u=e+".pdf"
w=2
return B.b(B.c2(A.K,null,new C.fnV(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fnU)
case 2:return B.h(null,v)}})
return B.i($async$fnU,v)},
fnV:function fnV(d,e){this.a=d
this.b=e},
abd:function abd(d,e,f){this.c=d
this.d=e
this.a=f},
ect:function ect(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
abv:function abv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYY(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYX(g,m,f,d,e,h,l,k,j,o,i,null)},
h4a(d){return B.ck(new C.flV(d))},
fJG(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hNA(d){if(d===D.cd)return"None"
return C.fJG(d)},
bx7(d,e,f,g){return C.hDJ(d,e,f,g)},
hDJ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bx7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a9(d,!0)
if($.fGH&&t.oP())t.eD()
$.fGH=!0
s.a=null
w=3
return B.b(B.hN(A.bg,!0,"Animation preview",d,new C.f7E(s,e,g,f),null,A.eL,!0,x.H),$async$bx7)
case 3:s=s.a
if(s!=null)s.aa(0)
$.fGH=!1
case 1:return B.h(u,v)}})
return B.i($async$bx7,v)},
fxO(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fxO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bR,x.w).w.a.a*0.88,280,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fJG(f)+" Slide transition preview"
s=s?Ab.DL:A.ue
w=3
return B.b(C.bx7(d,s,new B.a5(t,t*0.56,B.bu(B.m(14),new C.aFZ(f,null),A.ao),null),r),$async$fxO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fxO,v)},
h3t(d,e,f){var w,v,u=null,t=A.co.av(0,A.k.E(e,0,1))
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
return B.fo(A.A,B.d8(f,t),u,w,!0)
case 9:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jz((1-t)*1.2)
return B.fo(A.A,B.d8(f,t),u,w,!0)
case 10:case 19:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.mf((1-t)*0.8)
v=0.6+t*0.4
w.ji(v,v,v,1)
return B.fo(A.A,B.d8(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d8(f,t),new B.u((1-t)*24,0))}},
bzV(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bzV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bR,x.w).w.a.a*0.88,300,440)
s=f===D.cd
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fJG(f)+" Element animation preview"
s=s?Ab.DL:A.ue
w=3
return B.b(C.bx7(d,s,new B.a5(t,t*0.62,B.bu(B.m(14),new C.awR(f,null),A.ao),null),r),$async$bzV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bzV,v)},
hNz(d){var w,v,u,t,s=$.adN.W(0,d)
if(s!=null){$.adN.m(0,d,s)
return s}w=A.cw.aG(A.a.aY(d,A.a.cP(d,",")+1))
$.adN.m(0,d,w)
v=$.fHt=$.fHt+w.length
u=B.a2($.adN).k("cu<1>")
for(;;){if(!(v>41943040&&$.adN.a>1))break
t=new B.cu($.adN,u).gah(0)
if(!t.C())B.b9(B.fz())
v-=$.adN.W(0,t.gT(0)).length
$.fHt=v}return w},
hNg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ae("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kx(0,d),j=B.z(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.am(d,r,o)
m=f.$1(e)
v.push(new B.em(n,l,l,A.cS,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QZ(s,A.u))
v.push(new B.em(n,l,l,A.cS,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QZ(t,A.u))
v.push(new B.em(n,l,l,A.cS,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QZ(u,A.cq))
v.push(new B.em(n,l,l,A.cS,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aY(d,r)
v.push(B.dl(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0u(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.D(new B.kz(e))
return m
case"rounded":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.ge8()*0.18
m.D(new B.iO(B.bC(e,new B.b1(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.D(new B.b4(e.gbO().a,e.b))
w=e.d
m.D(new B.ao(e.c,w))
m.D(new B.ao(e.a,w))
m.D(new B.bE())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aO(w.r,A.ap,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b4(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ao(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.bE())
return v
case"diamond":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.D(new B.b4(e.gbO().a,e.b))
m.D(new B.ao(e.c,e.gbO().b))
m.D(new B.ao(e.gbO().a,e.d))
m.D(new B.ao(e.a,e.gbO().b))
m.D(new B.bE())
return m
case"arch":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.b4(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.ao(w,p))
m.b5m(new B.u(t,p),new B.b1(s,s))
m.D(new B.ao(t,u))
m.D(new B.bE())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.D(new B.nH(e))
return m}},
fjv(d,e,f){return B.ck(new C.fjw(D.eqL.t(0,d),d,f,e))},
aYX:function aYX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c97:function c97(d){this.a=d},
c96:function c96(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c95:function c95(){},
aYU:function aYU(d,e){this.b=d
this.a=e},
flV:function flV(d){this.a=d},
flU:function flU(d,e){this.a=d
this.b=e},
f7E:function f7E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7C:function f7C(d){this.a=d},
f7D:function f7D(d,e){this.a=d
this.b=e},
aFZ:function aFZ(d,e){this.c=d
this.a=e},
bqQ:function bqQ(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eRl:function eRl(d,e,f){this.a=d
this.b=e
this.c=f},
aGB:function aGB(d,e){this.b=d
this.a=e},
Tc:function Tc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bg0:function bg0(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dKf:function dKf(d){this.a=d},
dKe:function dKe(d){this.a=d},
dKd:function dKd(d){this.a=d},
Hj:function Hj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9_:function c9_(d){this.a=d},
c8Z:function c8Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awR:function awR(d,e){this.c=d
this.a=e},
baA:function baA(){this.d=0
this.c=this.a=null},
cZi:function cZi(d){this.a=d},
cZh:function cZh(d){this.a=d},
a5L:function a5L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgF:function bgF(d,e){var _=this
_.d=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
e2_:function e2_(d,e,f){this.a=d
this.b=e
this.c=f},
aWU:function aWU(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bbJ:function bbJ(d,e,f){this.b=d
this.c=e
this.a=f},
bmv:function bmv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eGM:function eGM(){},
fjw:function fjw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bns:function bns(d,e,f){this.b=d
this.c=e
this.a=f},
aIA:function aIA(){},
aJ5:function aJ5(){},
aKq:function aKq(){},
fmV(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fmV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wp.c2().Kz(D.cXp,A.rS,!0),$async$fmV)
case 3:r=e
if(r==null||J.cj(r.a)){u=null
w=1
break}t=J.fj(r.a)
s=t.c
if(s==null)throw B.R("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.R("That file is too big. Use a file under 8 MB.")
u=C.hNa(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmV,v)},
hNa(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a63(d,new B.Z7(A.cR.gcs().aG(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hFj(e)
if(A.a.i(w).length===0)throw B.R("No readable words were found in that Word file.")
return new C.a63(d,null,w.length>6e4?A.a.am(w,0,6e4):w)}w=A.c1.Jn(0,e,!0)
if(A.a.i(w).length===0)throw B.R("That file is empty.")
return new C.a63(d,null,w.length>6e4?A.a.am(w,0,6e4):w)},
hFj(d){var w,v,u,t,s,r,q,p,o=null,n=new C.crg().cBp(B.qD(d,A.hN,o,o),o,o,!1).cD4(0,"word/document.xml")
if(n==null)return""
w=n.cKN()
v=A.c1.Jn(0,w==null?$.h6n():w,!0).split("</w:p>")
u=new B.f7("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ae("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kx(0,r)
p=A.a.i(B.cz(q,new C.fas(),B.a2(q).k("G.E"),t).fN(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a63:function a63(d,e,f){this.a=d
this.b=e
this.c=f},
fas:function fas(){},
hnf(d,e,f,g,h,i,j,k,l){return new C.Mk(l,e,d,g,f,i,h,j,k,null)},
Mk:function Mk(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBA:function aBA(d,e,f,g,h,i,j,k,l){var _=this
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
_.bp$=k
_.a6$=l
_.c=_.a=null},
eiH:function eiH(d){this.a=d},
eiF:function eiF(){},
eiG:function eiG(d){this.a=d},
ef4:function ef4(){},
ef5:function ef5(){},
ef6:function ef6(d,e){this.a=d
this.b=e},
egF:function egF(d){this.a=d},
egt:function egt(){},
egu:function egu(){},
ees:function ees(){},
ehN:function ehN(d){this.a=d},
eiD:function eiD(d,e){this.a=d
this.b=e},
egD:function egD(d,e){this.a=d
this.b=e},
eiq:function eiq(d){this.a=d},
eir:function eir(){},
eis:function eis(){},
eit:function eit(d){this.a=d},
eiu:function eiu(){},
edR:function edR(d){this.a=d},
eiE:function eiE(){},
efM:function efM(d,e){this.a=d
this.b=e},
edP:function edP(d){this.a=d},
edQ:function edQ(d){this.a=d},
eg8:function eg8(d){this.a=d},
eg9:function eg9(d,e,f){this.a=d
this.b=e
this.c=f},
ega:function ega(d){this.a=d},
efL:function efL(){},
efK:function efK(d){this.a=d},
efI:function efI(){},
efH:function efH(d){this.a=d},
efJ:function efJ(){},
ef0:function ef0(d){this.a=d},
ef1:function ef1(d){this.a=d},
efS:function efS(d){this.a=d},
efN:function efN(d){this.a=d},
efO:function efO(d){this.a=d},
efP:function efP(d){this.a=d},
efQ:function efQ(d){this.a=d},
efR:function efR(d){this.a=d},
efT:function efT(d,e){this.a=d
this.b=e},
edT:function edT(){},
edU:function edU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eg3:function eg3(){},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg1:function eg1(d,e,f){this.a=d
this.b=e
this.c=f},
eg2:function eg2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efW:function efW(d,e,f){this.a=d
this.b=e
this.c=f},
efX:function efX(d,e,f){this.a=d
this.b=e
this.c=f},
efY:function efY(d){this.a=d},
efZ:function efZ(d,e){this.a=d
this.b=e},
eg_:function eg_(d,e){this.a=d
this.b=e},
eg0:function eg0(d,e){this.a=d
this.b=e},
efV:function efV(d,e){this.a=d
this.b=e},
eg6:function eg6(d){this.a=d},
eg7:function eg7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eg5:function eg5(d){this.a=d},
ego:function ego(){},
egp:function egp(){},
egq:function egq(){},
egr:function egr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egl:function egl(d){this.a=d},
egn:function egn(){},
egm:function egm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
egj:function egj(d,e,f){this.a=d
this.b=e
this.c=f},
egk:function egk(d,e){this.a=d
this.b=e},
egs:function egs(){},
efU:function efU(d,e){this.a=d
this.b=e},
ee9:function ee9(){},
eea:function eea(d,e,f){this.a=d
this.b=e
this.c=f},
eeb:function eeb(d){this.a=d},
eec:function eec(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ee8:function ee8(d){this.a=d},
egy:function egy(d){this.a=d},
egx:function egx(d,e){this.a=d
this.b=e},
egw:function egw(d,e){this.a=d
this.b=e},
egv:function egv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egz:function egz(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ee7:function ee7(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
egH:function egH(d,e,f){this.a=d
this.b=e
this.c=f},
ee1:function ee1(d,e){this.a=d
this.b=e},
ee0:function ee0(d){this.a=d},
egG:function egG(d,e,f){this.a=d
this.b=e
this.c=f},
edS:function edS(d){this.a=d},
eet:function eet(){},
eio:function eio(d,e){this.a=d
this.b=e},
eip:function eip(d,e,f){this.a=d
this.b=e
this.c=f},
ehO:function ehO(d,e,f){this.a=d
this.b=e
this.c=f},
ecP:function ecP(d){this.a=d},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecz:function ecz(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
ee3:function ee3(d){this.a=d},
ee4:function ee4(d,e){this.a=d
this.b=e},
ee2:function ee2(d){this.a=d},
edg:function edg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
edh:function edh(d,e){this.a=d
this.b=e},
edl:function edl(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
edj:function edj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edk:function edk(d){this.a=d},
edi:function edi(){},
edf:function edf(d,e,f){this.a=d
this.b=e
this.c=f},
egi:function egi(d,e){this.a=d
this.b=e},
eix:function eix(d){this.a=d},
eiy:function eiy(d,e){this.a=d
this.b=e},
eiz:function eiz(d){this.a=d},
eiA:function eiA(d,e,f){this.a=d
this.b=e
this.c=f},
eiw:function eiw(d){this.a=d},
ei3:function ei3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ei2:function ei2(d,e,f){this.a=d
this.b=e
this.c=f},
ei1:function ei1(){},
ei0:function ei0(d,e,f){this.a=d
this.b=e
this.c=f},
ei_:function ei_(d,e){this.a=d
this.b=e},
ehX:function ehX(d,e,f){this.a=d
this.b=e
this.c=f},
ehV:function ehV(d){this.a=d},
ehW:function ehW(d){this.a=d},
ehZ:function ehZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehY:function ehY(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeW:function eeW(d,e){this.a=d
this.b=e},
ehP:function ehP(){},
ein:function ein(d,e){this.a=d
this.b=e},
eil:function eil(d){this.a=d},
eim:function eim(d){this.a=d},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecF:function ecF(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e,f){this.a=d
this.b=e
this.c=f},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecE:function ecE(d,e,f){this.a=d
this.b=e
this.c=f},
ecD:function ecD(d){this.a=d},
egE:function egE(d,e,f){this.a=d
this.b=e
this.c=f},
eiv:function eiv(d,e,f){this.a=d
this.b=e
this.c=f},
ef_:function ef_(d,e,f){this.a=d
this.b=e
this.c=f},
eeZ:function eeZ(){},
edp:function edp(d,e,f){this.a=d
this.b=e
this.c=f},
edq:function edq(d){this.a=d},
ecB:function ecB(d,e){this.a=d
this.b=e},
eer:function eer(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecT:function ecT(d){this.a=d},
ecU:function ecU(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e){this.a=d
this.b=e},
ecS:function ecS(d){this.a=d},
ed5:function ed5(d,e){this.a=d
this.b=e},
ecR:function ecR(d){this.a=d},
ed8:function ed8(d){this.a=d},
ed9:function ed9(d){this.a=d},
eda:function eda(d){this.a=d},
edb:function edb(d){this.a=d},
edc:function edc(d){this.a=d},
edd:function edd(){},
ede:function ede(){},
ecW:function ecW(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecY:function ecY(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ed_:function ed_(d){this.a=d},
ed0:function ed0(d){this.a=d},
ed1:function ed1(d){this.a=d},
ed2:function ed2(d){this.a=d},
ed3:function ed3(d){this.a=d},
ed4:function ed4(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed7:function ed7(d,e){this.a=d
this.b=e},
eeq:function eeq(d,e,f){this.a=d
this.b=e
this.c=f},
eep:function eep(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeo:function eeo(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e){this.a=d
this.b=e},
edt:function edt(d){this.a=d},
eds:function eds(d){this.a=d},
edr:function edr(d,e){this.a=d
this.b=e},
edu:function edu(d){this.a=d},
edv:function edv(d){this.a=d},
edw:function edw(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
egh:function egh(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
egf:function egf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egd:function egd(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
egb:function egb(){},
egc:function egc(){},
ehQ:function ehQ(){},
ehR:function ehR(d,e){this.a=d
this.b=e},
ehS:function ehS(){},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
edV:function edV(){},
edW:function edW(){},
edX:function edX(){},
ee_:function ee_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edZ:function edZ(d,e){this.a=d
this.b=e},
edY:function edY(d,e,f){this.a=d
this.b=e
this.c=f},
efq:function efq(d){this.a=d},
efp:function efp(){},
efr:function efr(d,e){this.a=d
this.b=e},
efs:function efs(d,e){this.a=d
this.b=e},
efo:function efo(d){this.a=d},
eft:function eft(d,e){this.a=d
this.b=e},
efn:function efn(d){this.a=d},
efu:function efu(d,e){this.a=d
this.b=e},
efm:function efm(d){this.a=d},
efv:function efv(d,e){this.a=d
this.b=e},
efl:function efl(d){this.a=d},
efw:function efw(d,e){this.a=d
this.b=e},
efk:function efk(d,e){this.a=d
this.b=e},
efx:function efx(d,e){this.a=d
this.b=e},
efj:function efj(d){this.a=d},
efy:function efy(d,e){this.a=d
this.b=e},
efi:function efi(d){this.a=d},
efb:function efb(d,e){this.a=d
this.b=e},
efc:function efc(d){this.a=d},
efd:function efd(d){this.a=d},
efa:function efa(d){this.a=d},
efe:function efe(d,e){this.a=d
this.b=e},
ef9:function ef9(d){this.a=d},
eff:function eff(d,e){this.a=d
this.b=e},
ef8:function ef8(d){this.a=d},
efg:function efg(d,e){this.a=d
this.b=e},
ef7:function ef7(d){this.a=d},
efh:function efh(d){this.a=d},
eej:function eej(d){this.a=d},
eek:function eek(d){this.a=d},
eem:function eem(d){this.a=d},
eee:function eee(d){this.a=d},
eed:function eed(d,e){this.a=d
this.b=e},
eef:function eef(d,e){this.a=d
this.b=e},
eeg:function eeg(d){this.a=d},
eeh:function eeh(d){this.a=d},
eei:function eei(d,e){this.a=d
this.b=e},
eel:function eel(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiC:function eiC(d){this.a=d},
efB:function efB(d,e){this.a=d
this.b=e},
efA:function efA(d,e){this.a=d
this.b=e},
efz:function efz(d,e){this.a=d
this.b=e},
efC:function efC(d){this.a=d},
efD:function efD(d){this.a=d},
eh_:function eh_(d,e){this.a=d
this.b=e},
eh0:function eh0(d){this.a=d},
eh1:function eh1(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehn:function ehn(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehH:function ehH(d){this.a=d},
ehI:function ehI(d){this.a=d},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d){this.a=d},
eh4:function eh4(d){this.a=d},
eh5:function eh5(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh8:function eh8(d){this.a=d},
eh9:function eh9(d){this.a=d},
eha:function eha(d){this.a=d},
ehb:function ehb(d){this.a=d},
ehd:function ehd(d){this.a=d},
ehe:function ehe(d){this.a=d},
ehf:function ehf(d){this.a=d},
ehg:function ehg(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehk:function ehk(d){this.a=d},
ehl:function ehl(d){this.a=d},
egQ:function egQ(d){this.a=d},
ehm:function ehm(d){this.a=d},
egY:function egY(d){this.a=d},
eho:function eho(d){this.a=d},
egX:function egX(d,e){this.a=d
this.b=e},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehq:function ehq(d,e){this.a=d
this.b=e},
egW:function egW(d,e,f){this.a=d
this.b=e
this.c=f},
egM:function egM(d,e){this.a=d
this.b=e},
egZ:function egZ(d){this.a=d},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehM:function ehM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehL:function ehL(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e,f){this.a=d
this.b=e
this.c=f},
egV:function egV(d,e,f){this.a=d
this.b=e
this.c=f},
egL:function egL(d,e,f){this.a=d
this.b=e
this.c=f},
egJ:function egJ(d,e){this.a=d
this.b=e},
ehs:function ehs(d,e){this.a=d
this.b=e},
egU:function egU(d,e){this.a=d
this.b=e},
egK:function egK(d,e){this.a=d
this.b=e},
egI:function egI(d,e){this.a=d
this.b=e},
eht:function eht(d){this.a=d},
egT:function egT(d){this.a=d},
ehu:function ehu(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d){this.a=d},
egS:function egS(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehB:function ehB(d,e){this.a=d
this.b=e},
egR:function egR(d){this.a=d},
ehC:function ehC(d,e){this.a=d
this.b=e},
egP:function egP(d){this.a=d},
ehD:function ehD(d,e){this.a=d
this.b=e},
egO:function egO(d){this.a=d},
ehE:function ehE(d,e){this.a=d
this.b=e},
egN:function egN(d){this.a=d},
edo:function edo(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
ei5:function ei5(d,e){this.a=d
this.b=e},
ei7:function ei7(d,e){this.a=d
this.b=e},
ei4:function ei4(d,e){this.a=d
this.b=e},
eew:function eew(d,e){this.a=d
this.b=e},
eev:function eev(d){this.a=d},
eex:function eex(d,e){this.a=d
this.b=e},
eeu:function eeu(d){this.a=d},
ef3:function ef3(){},
ef2:function ef2(){},
eij:function eij(d){this.a=d},
eii:function eii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eih:function eih(d,e){this.a=d
this.b=e},
eic:function eic(d,e){this.a=d
this.b=e},
eig:function eig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eid:function eid(d,e){this.a=d
this.b=e},
ei8:function ei8(d){this.a=d},
ei9:function ei9(d){this.a=d},
eia:function eia(d){this.a=d},
eib:function eib(d){this.a=d},
eie:function eie(d,e){this.a=d
this.b=e},
eif:function eif(d,e){this.a=d
this.b=e},
eik:function eik(d){this.a=d},
edO:function edO(d){this.a=d},
edN:function edN(d,e,f){this.a=d
this.b=e
this.c=f},
edM:function edM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edB:function edB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
edC:function edC(d,e){this.a=d
this.b=e},
edD:function edD(d,e){this.a=d
this.b=e},
edE:function edE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edA:function edA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edF:function edF(d,e){this.a=d
this.b=e},
edH:function edH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edG:function edG(d,e){this.a=d
this.b=e},
edI:function edI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edz:function edz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edJ:function edJ(d,e){this.a=d
this.b=e},
edy:function edy(d,e){this.a=d
this.b=e},
edK:function edK(d,e){this.a=d
this.b=e},
edx:function edx(d){this.a=d},
edL:function edL(d,e){this.a=d
this.b=e},
efF:function efF(d){this.a=d},
efE:function efE(d){this.a=d},
efG:function efG(d,e){this.a=d
this.b=e},
eeK:function eeK(d,e){this.a=d
this.b=e},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
eeM:function eeM(d,e){this.a=d
this.b=e},
eeI:function eeI(d,e){this.a=d
this.b=e},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeH:function eeH(d,e){this.a=d
this.b=e},
eeO:function eeO(d,e){this.a=d
this.b=e},
eeG:function eeG(d,e){this.a=d
this.b=e},
eeP:function eeP(d,e){this.a=d
this.b=e},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d,e,f){this.a=d
this.b=e
this.c=f},
eeE:function eeE(d,e){this.a=d
this.b=e},
eeR:function eeR(d,e,f){this.a=d
this.b=e
this.c=f},
eeD:function eeD(d,e){this.a=d
this.b=e},
eeS:function eeS(d,e){this.a=d
this.b=e},
eeC:function eeC(d,e,f){this.a=d
this.b=e
this.c=f},
eez:function eez(d,e){this.a=d
this.b=e},
eeT:function eeT(d,e){this.a=d
this.b=e},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeU:function eeU(d,e){this.a=d
this.b=e},
eeA:function eeA(d,e,f){this.a=d
this.b=e
this.c=f},
eey:function eey(d,e){this.a=d
this.b=e},
eeV:function eeV(d,e){this.a=d
this.b=e},
eeY:function eeY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecx:function ecx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egC:function egC(d,e){this.a=d
this.b=e},
egA:function egA(d){this.a=d},
egB:function egB(d,e){this.a=d
this.b=e},
acY:function acY(d,e,f){this.a=d
this.b=e
this.c=f},
awe:function awe(d,e){this.c=d
this.a=e},
b9n:function b9n(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b0$=e
_.c=_.a=null},
cVO:function cVO(d){this.a=d},
cVN:function cVN(d){this.a=d},
b9B:function b9B(d,e){this.c=d
this.a=e},
cW9:function cW9(d){this.a=d},
cWa:function cWa(d){this.a=d},
Ij:function Ij(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b9m:function b9m(){this.d=!1
this.c=this.a=null},
cVL:function cVL(d){this.a=d},
cVH:function cVH(d){this.a=d},
cVM:function cVM(d){this.a=d},
cVG:function cVG(d){this.a=d},
cVK:function cVK(d){this.a=d},
cVI:function cVI(d){this.a=d},
cVJ:function cVJ(d,e){this.a=d
this.b=e},
NY:function NY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
YD:function YD(d,e,f){this.c=d
this.d=e
this.a=f},
aBD:function aBD(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bp$=e
_.a6$=f
_.c=_.a=null},
ejh:function ejh(){},
ej7:function ej7(d){this.a=d},
ejg:function ejg(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej9:function ej9(d){this.a=d},
ej3:function ej3(d){this.a=d},
ej4:function ej4(d,e){this.a=d
this.b=e},
ej5:function ej5(d){this.a=d},
ej6:function ej6(d,e,f){this.a=d
this.b=e
this.c=f},
eje:function eje(){},
ejf:function ejf(d){this.a=d},
eja:function eja(d){this.a=d},
ejb:function ejb(d){this.a=d},
ejc:function ejc(d){this.a=d},
ejd:function ejd(d){this.a=d},
eji:function eji(d,e,f){this.a=d
this.b=e
this.c=f},
ejk:function ejk(d,e){this.a=d
this.b=e},
ejj:function ejj(d){this.a=d},
Iq:function Iq(d,e){this.c=d
this.a=e},
bnX:function bnX(d,e){this.b=d
this.a=e},
bed:function bed(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bec:function bec(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHi:function aHi(){},
aJk:function aJk(){},
btD:function btD(){},
aJl:function aJl(){},
foQ(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$foQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wp.c2().Kz(B.a(["pdf"],x.s),A.rS,!0),$async$foQ)
case 3:q=e
if(q==null||J.cj(q.a)){u=null
w=1
break}t=J.fj(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.blh(s,"data:application/pdf;base64,"+A.cR.gcs().aG(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$foQ,v)},
hNL(d){var w,v,u,t,s,r
try{w=B.jf(d,0,null)
v=B.ae("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c4(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ae("/Type\\s*/Page\\b",!0,!1,!1,!1).kx(0,w).gJ(0)
if(t>0){s=J.aNQ(t,1,200)
return s}}catch(r){}return 1},
foH(d){return C.hNK(d)},
hNK(d){var w=0,v=B.j(x.T),u
var $async$foH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$foH,v)},
bz7(d,e,f,g){return C.hNU(d,e,f,g)},
hNU(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bz7=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e3(b6,x.co).gah(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.h4L(b9,new B.as(r,q))
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
l=Math.max(B.lB(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.U(800*(i/j)),180,420)
$.W()
g=new B.rv()
f=B.FN(g,null)
a7=B.L()
a7.r=A.q1.gq(0)
f.aX(new B.a7(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b8.gq(b8)
b1.c=p*e
b1.d=A.bL
b1.e=A.ft
b1.b=A.ac
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
return B.b(a3.yp(800,h),$async$bz7)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hf(A.fO),$async$bz7)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f5(A.dD.gaO(a5))
a7=A.cR.gcs().aG(a7)
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
return B.i($async$bz7,v)},
aN3(d,e,f){return C.hNI(d,e,f)},
hNI(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aN3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aF:e
r.c=f==null?5.2:f
w=3
return B.b(B.afi(d,e,f,new C.foF(r,q),q,"Sign document"),$async$aN3)
case 3:if(!new B.e3(q,x.co).gah(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bz7(q,t,r.b,r.c),$async$aN3)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aZ0(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN3,v)},
hNS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fZ4(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fZ4(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aY(A.a.aS(A.o.fG(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.a9(q.c*100,2)+"%;top:"+A.k.a9(q.d*100,2)+"%;width:"+A.k.a9(q.e*100,2)+"%;height:"+A.k.a9(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aY(A.a.aS(A.o.fG(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l7&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fYJ(q.ay)+";border:2px solid "+C.fYJ(q.ch)+'"></div>'
break
case 5:l=C.fIx(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gah_()
if(p==null)p=A.as1
n=B.U(p)
k=n.k("pv<1>")
j=new B.pv(p,0,8,k)
j.FZ(p,0,8,n.c)
j=new B.bV(j,j.gJ(0),k.k("bV<ai.E>"))
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
fYJ(d){var w=A.o.az(d,24)
return"rgba("+(A.o.az(d,16)&255)+","+(A.o.az(d,8)&255)+","+(d&255)+","+A.k.a9((w&255)/255,3)+")"},
fZ4(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bz5(d,e){var w=0,v=B.j(x.H)
var $async$bz5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ch(null,null,!0,null,new C.foO(e,C.hNS(e),d),d,null,!0,!0,x.H),$async$bz5)
case 2:return B.h(null,v)}})
return B.i($async$bz5,v)},
bz6(){var w=0,v=B.j(x.T),u,t,s
var $async$bz6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fm(92,2400),$async$bz6)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.foH(s),$async$bz6)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bz6,v)},
aN4(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aN4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fJL(d),$async$aN4)
case 3:t=f
s=A.a.i(d.b)
r=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=X.fr_(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN4,v)},
fT7(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
aZ0:function aZ0(d,e,f){this.a=d
this.b=e
this.c=f},
foF:function foF(d,e){this.a=d
this.b=e},
foO:function foO(d,e,f){this.a=d
this.b=e
this.c=f},
foL:function foL(d){this.a=d},
foM:function foM(d,e,f){this.a=d
this.b=e
this.c=f},
foN:function foN(d,e,f){this.a=d
this.b=e
this.c=f},
hNJ(d){return C.kk(d.w)},
hNQ(d){var w,v,u,t
if(d.length===0||!A.d.ea(d,C.hPy()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xO(d){var w=A.a.i(d),v=B.ae("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.han()
if(w.b.test(u))return u
return null},
h4N(d,e,f){var w,v,u=C.hiW(d),t=$.oZ()
for(w=0;w<80;++w){v=u+A.a.aS(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aS(A.o.u(Date.now()%1000),3,"0")},
hNW(d){var w,v,u,t,s=B.aZ(x.N)
for(w=J.aU(d.a),v=new B.hK(w,d.b);v.C();){u=w.gT(w).y
t=C.xO(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
foD(d,e){var w,v=d.y,u=C.xO(v==null?"":v)
if(u!=null)return d.y=u
w=C.hNW(new B.a4(e,new C.foE(d),B.U(e).k("a4<1>")))
v=d.x
return d.y=C.h4N(v==null?"":v,null,w)},
hNV(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kk(w.w))return null
v=w.y
return C.xO(v==null?"":v)},
hnh(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fN(u)},
Ud(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Ud=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$Ud)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eV("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$Ud)
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
return B.i($async$Ud,v)},
Ue(d){return C.hni(d)},
hni(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Ue=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$Ue)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.ht("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.Q(Date.now(),0,!1).a5().ab()],x.N,x.z),!1,!1,A.cA,null),$async$Ue)
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
return B.i($async$Ue,v)},
a65(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a65=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bX(),$async$a65)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Ud(),$async$a65)
case 4:s=a6
r=C.xO(a2==null?"":a2)
if(r==null)r=a3!=null?C.h4N(a3,null,A.a3e):null
q=x.N
p=B.aZ(q)
for(o=J.dg(s),n=J.aU(o.ghQ(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xO(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdH(s),n=n.gah(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a_(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dG.aG(t)
g.m(0,"payload",A.cR.gcs().aG(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.Q(Date.now(),0,!1).a5().ab())
if(D.Qo.t(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xO(J.k(q==null?"":q))
if(f==null)f=C.fTc(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.Ue(s),$async$a65)
case 7:u=new B.aD1(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hnh()
n=r==null
d=n?C.fTc(p):r
q=B.T(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dG.aG(t)
q.m(0,"payload",A.cR.gcs().aG(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.Q(Date.now(),0,!1).a5().ab())
if(D.Qo.t(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.Ue(s),$async$a65)
case 8:u=new B.aD1(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a65,v)},
fTc(d){var w,v,u=$.oZ()
for(w=0;w<200;++w){v="SL"+A.a.aS(A.o.u(u.aB(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aS(A.o.u(Date.now()%1000),3,"0")},
aoI(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aoI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bX(),$async$aoI)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Ud(),$async$aoI)
case 6:t=f
s=J.a8(t)
r=s.gJ(t)
s.bm(t,new C.c9x(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Ue(t),$async$aoI)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aoI,v)},
aoH(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xO(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bX(),$async$aoH)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Ud(),$async$aoH)
case 6:t=o.jl(f),t=t.gah(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xO(J.k(q==null?"":q))===p){u=C.a64(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoH,v)},
a64(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a64=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bX(),$async$a64)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Ud(),$async$a64)
case 6:p=a1
o=J.a8(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a8(n)
k=B.aN(l.h(n,"usesRemaining"))
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
if(D.Qo.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aD(0,s,null)
if(m.b(r)){q=B.a_(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.al(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dS(B.a_(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.Q(Date.now(),0,!1).a5().ab())
o.m(p,g,l)}w=7
return B.b(C.Ue(p),$async$a64)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a64,v)},
hNP(d,e,f){var w,v=B.T(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.Q(Date.now(),0,!1).a5().ab())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.U(d).k("J<1,a1<n,@>>")
w=B.z(new B.J(d,new C.foK(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
foS(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.Q(Date.now(),0,!1).a5().ab())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ac())
return A.Q.al(w,null)}return A.Q.al(C.hNP(d==null?B.a([],x.D):d,f,g),null)},
foR(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$foR=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a65(h,d,e,f,g),$async$foR)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xO(e==null?"":e)
u=new B.aCP(s,t)
w=1
break}t=A.dG.aG(h)
t=A.jY.gcs().aG(t)
u=new B.aCP(C.xO(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$foR,v)},
fJN(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.aa(q)===0)return!1
if(J.cW(q,"NGMYSLIDESYNC2|"))return!0
if(J.cW(q,"NGMYSLIDECODE|"))return!0
if(J.cW(q,"NGMY_SL:"))return!0
if(J.eR(q,s)||J.eR(q,r))return!0
if(J.cW(q,"{"))try{w=A.Q.aD(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hNT(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fJN(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aY(v,u))
if(C.fJN(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aY(v,s))
if(C.fJN(t))return t}}return null},
foG(d){var w,v,u,t=A.a.i(d)
if(J.aa(t)===0||J.cW(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cW(t,"NGMY_SL:"))w=v.a(A.Q.aD(0,A.c1.c6(0,A.cw.aG(J.mm(t,8))),null))
else w=v.a(A.Q.aD(0,t,null))
v=C.hwV(w)
return v}catch(u){v=B.a([],x.D)
return v}},
af3(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$af3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aoH(t[1]),$async$af3)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.foG(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xO(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoH(r),$async$af3)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.foG(s)
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
return B.b(C.a64(t[1]),$async$af3)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.foG(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.foG(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$af3,v)},
hwV(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Qo.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fJK(C.U9(B.a_(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d5(u,x.f)
t=B.cz(t,new C.eZr(w),t.$ti.k("G.E"),x.I)
t=B.z(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fJK(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.m(0,"id",C.cy())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iS
$.iS=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.U9(B.a_(o,x.N,x.z))
if(e&&C.kk(p.w))p.Q=new B.Q(Date.now(),0,!1).a5().bN(144e8).ab()
return p},
byR(){var w=0,v=B.j(x.aT),u,t,s
var $async$byR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Fl(),$async$byR)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.af3(s),$async$byR)
case 4:t=e
u=J.cj(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byR,v)},
fx2(d){var w=0,v=B.j(x.T),u,t
var $async$fx2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hN(D.TN,!0,"Dismiss",d,new C.fx3(),new C.fx4(),A.DI,!0,x.N),$async$fx2)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.H(x.q).f.P(D.ewh)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fx2,v)},
hRy(d,e,f,g,h){return B.a9(d,!1).cp(B.eD(new C.fx5(h,e,g,f),!0,null,x.H))},
foE:function foE(d){this.a=d},
c9x:function c9x(d){this.a=d},
foK:function foK(){},
eZr:function eZr(d){this.a=d},
fx3:function fx3(){},
fx4:function fx4(){},
fx5:function fx5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ub:function Ub(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBB:function aBB(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eiO:function eiO(){},
eiK:function eiK(d,e){this.a=d
this.b=e},
eiN:function eiN(d,e){this.a=d
this.b=e},
eiL:function eiL(d){this.a=d},
eiM:function eiM(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiR:function eiR(d){this.a=d},
eiW:function eiW(d,e){this.a=d
this.b=e},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiI:function eiI(d,e){this.a=d
this.b=e},
Uc:function Uc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bh1:function bh1(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiY:function eiY(d){this.a=d},
eiZ:function eiZ(){},
ej_:function ej_(d){this.a=d},
ej0:function ej0(d,e){this.a=d
this.b=e},
aBy:function aBy(d){this.a=d},
aBz:function aBz(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ecr:function ecr(d){this.a=d},
ecq:function ecq(){},
ecs:function ecs(d){this.a=d},
ecn:function ecn(d){this.a=d},
ecm:function ecm(){},
eco:function eco(d){this.a=d},
ecp:function ecp(d){this.a=d},
bra:function bra(){},
aoJ:function aoJ(d){this.a=d},
aBC:function aBC(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ej2:function ej2(d){this.a=d},
ej1:function ej1(d){this.a=d},
hBV(){var w,v,u,t
for(v=0;v<4;++v){w=D.cNq[v]
try{if(A8.bSj(w)){u=w
return u}}catch(t){}}return null},
Pu(d,e){return C.hKB(d,e)},
hKB(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Pu=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hBV()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nF?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.q_(c6,!0)
b6.toString
p=B.a9(c6,!0)
b7=new B.co(null,x.A)
b8=A.d.gL(c3)
b9=$.av()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.nW(new C.fiY(c2,b7,o),!1,!1)
b6.lm(0,l)
b9=x.H
B.ch(null,A.d9,!1,null,new C.fiZ(n,m),c6,null,!0,!0,b9)
k=new C.fj2(b7)
j=new C.fj3()
i=null
t=4
b3=c2.a
h=Ag.aPj(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fzr(h,30)
e=B.a([],x.aK)
b3=x.z
i=A8.aU3(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.G0.xs(i,"dataavailable",new C.fj_(e))
d=new B.bP(new B.be($.bt,x.dT),x.b2)
A.G0.xs(i,"stop",new C.fj0(d))
J.afB(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Pu)
case 8:w=7
return B.b(c5.$1(d0),$async$Pu)
case 7:a0=d0
J.fzu(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afB(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afB(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Pu)
case 15:w=14
return B.b(c5.$1(d0),$async$Pu)
case 14:a0=d0
case 13:J.fzu(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.afB(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.Q(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fzu(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fr,null,b9),$async$Pu)
case 18:w=16
break
case 17:J.afB(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afB(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.nm),$async$Pu)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hE(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.mO(a7)
c0.download=B.t(J.aa(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.JO(b0)
J.lG(b0)
B.bN(A.nl,new C.fj1(a7),b9)
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
J.aNV(c3,0)
c3=n
c3.shI(b3)
J.aNV(c3,0)
c3=m
c3.shI(b3)
J.aNV(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pu,v)},
fiY:function fiY(d,e,f){this.a=d
this.b=e
this.c=f},
fiX:function fiX(){},
fiZ:function fiZ(d,e){this.a=d
this.b=e},
fj2:function fj2(d){this.a=d},
fj3:function fj3(){},
fj_:function fj_(d){this.a=d},
fj0:function fj0(d){this.a=d},
fj1:function fj1(d){this.a=d},
brm:function brm(d,e,f){this.c=d
this.d=e
this.a=f},
eTN:function eTN(){},
eTO:function eTO(){},
c9U(d){var w=0,v=B.j(x.at),u,t,s
var $async$c9U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoT(d,A.y6),$async$c9U)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bw(new B.Q(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9U,v)},
c9T(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5M:function a5M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgK:function bgK(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e2R:function e2R(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
a6D:function a6D(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a6E:function a6E(d,e){this.a=d
this.b=e},
b_F:function b_F(){},
cc5:function cc5(){},
cc6:function cc6(){},
cc7:function cc7(d,e,f,g,h,i,j,k,l){var _=this
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
hbo(d){return new C.afT(d)},
a0Z:function a0Z(){},
afT:function afT(d){this.a=d},
aOe:function aOe(){},
au7:function au7(d,e){this.d=d
this.b=e
this.a=null},
aPI:function aPI(d){this.b=d
this.a=null},
fe6(d,e){var w=0,v=B.j(x.H)
var $async$fe6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gwF().Ki(d,e),$async$fe6)
case 2:B.fr5()
return B.h(null,v)}})
return B.i($async$fe6,v)},
h24(d,e){return(A.qy[(d^e)&255]^A.o.az(d,8))>>>0},
fbZ(d,e,f,g,h,i){var w=C.hH_(d,A.d8,f,null,A.cV,g,h,i)
return w},
h3W(d){var w=F.h4E(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hiW(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.on.h(0,w)
if(v!=null)return v
for(u=A.on.gdH(A.on),u=u.gah(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ae("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.am(s,0,2)
return A.a.am(s+"XX",0,2)},
h43(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<32;++w)v+="- "+D.cJK[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bx4(d,e){return C.hDE(d,e)},
hDE(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bx4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hE([d],"application/pdf")
n=x.z
q=B.aRh(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cv(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eb(B.jN(o,"share",[p]),x.H),$async$bx4)
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
return B.i($async$bx4,v)},
fJE(){var w=0,v=B.j(x.y),u,t,s
var $async$fJE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f5l
s=$.bwC
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bx4(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJE,v)},
byo(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$byo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f5l
l=$.bwC
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.fZK()?3:4
break
case 3:w=5
return B.b(C.bx4(m,k),$async$byo)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bwD
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mO(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.JO(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$byo)
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
return B.i($async$byo,v)},
fJv(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fJv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bwD
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ld.tU(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fJv,v)},
fJM(d,e){var w=0,v=B.j(x.H),u,t
var $async$fJM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hE([d],"text/html"))
t.toString
u=window
u.toString
A.ld.tU(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fJM,v)},
aZC(d,e){var w=0,v=B.j(x.y),u
var $async$aZC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZE(d,e),$async$aZC)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZD(d),$async$aZC)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZC,v)}},D,Aj,H,Ak,N,W,P,Al,G,F,E,Q,X,Y,Z,Am,A6,K,A_,O,R,L,A7,An,A0,Ao,Ap,A8,A9,Aq,Aa,Ab,Ac,Ar,As,S,At,I,Au,Av,T,U,M,A1,A2,A3,Aw,Ad
J=c[1]
B=c[0]
A=c[2]
Ae=c[95]
V=c[182]
A4=c[132]
Af=c[48]
Ag=c[56]
A5=c[51]
Ah=c[101]
Ai=c[193]
C=a.updateHolder(c[4],C)
D=c[180]
Aj=c[27]
H=c[89]
Ak=c[35]
N=c[184]
W=c[181]
P=c[170]
Al=c[97]
G=c[151]
F=c[30]
E=c[183]
Q=c[103]
X=c[28]
Y=c[139]
Z=c[108]
Am=c[147]
A6=c[110]
K=c[185]
A_=c[59]
O=c[161]
R=c[73]
L=c[119]
A7=c[124]
An=c[187]
A0=c[93]
Ao=c[84]
Ap=c[87]
A8=c[52]
A9=c[157]
Aq=c[34]
Aa=c[71]
Ab=c[102]
Ac=c[192]
Ar=c[194]
As=c[191]
S=c[65]
At=c[188]
I=c[136]
Au=c[148]
Av=c[195]
T=c[46]
U=c[186]
M=c[168]
A1=c[190]
A2=c[189]
A3=c[55]
Aw=c[167]
Ad=c[64]
C.nv.prototype={
ue(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t9(t,v)
return new C.nv(t===0?!1:w,v,t)},
bFN(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BZ()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t9(w,u)
return new C.nv(r===0?!1:s,u,r)},
bGc(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BZ()
w=o-d
if(w<=0)return p.a?$.fL6():$.BZ()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t9(w,u)
q=new C.nv(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a0K())
return q},
dQ(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ak(e,16)
if(A.o.F(e,16)===0)return r.bFN(v)
u=w+v+1
t=new Uint16Array(u)
C.fWq(r.b,w,e,t)
w=r.a
s=C.t9(u,t)
return new C.nv(s===0?!1:w,t,s)},
lW(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ak(e,16)
u=A.o.F(e,16)
if(u===0)return n.bGc(v)
t=w-v
if(t<=0)return n.a?$.fL6():$.BZ()
s=n.b
r=new Uint16Array(t)
C.hsU(s,w,e,r)
w=n.a
q=C.t9(t,r)
p=new C.nv(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dQ(1,u)-1)!==0)return p.aE(0,$.a0K())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a0K())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cz6(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5J(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5J(t,e)
if(s===0)return $.BZ()
if(r===0)return t.a===e?t:t.ue(0)
w=s+1
v=new Uint16Array(w)
C.hsS(t.b,s,d.b,r,v)
u=C.t9(w,v)
return new C.nv(u===0?!1:e,v,u)},
G_(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BZ()
w=d.c
if(w===0)return t.a===e?t:t.ue(0)
v=new Uint16Array(s)
C.b6C(t.b,s,d.b,w,v)
u=C.t9(s,v)
return new C.nv(u===0?!1:e,v,u)},
bt3(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t9(r,u)
return new C.nv(!1,u,s)},
bt2(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t9(u,r)
return new C.nv(!1,r,v)},
bt4(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t9(p,m)
return new C.nv(s!==0,m,s)},
SV(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BZ()
w=t.a
if(w===e.a){if(w){w=$.a0K()
return t.G_(w,!0).bt4(e.G_(w,!0),!0).a5J(w,!0)}return t.bt3(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bt2(v.G_($.a0K(),!1),!1)},
ao(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5J(e,v)
if(C.cz6(u.b,t,e.b,w)>=0)return u.G_(e,v)
return e.G_(u,!v)},
aE(d,e){var w,v,u=this,t=u.c
if(t===0)return e.ue(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5J(e,v)
if(C.cz6(u.b,t,e.b,w)>=0)return u.G_(e,v)
return e.G_(u,!v)},
aN(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BZ()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fWr(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t9(w,t)
return new C.nv(q===0?!1:r,t,q)},
bFM(d){var w,v,u,t
if(this.c<d.c)return $.BZ()
this.aNs(d)
w=$.fEO.c2()-$.auR.c2()
v=C.fEQ($.fEN.c2(),$.auR.c2(),$.fEO.c2(),w)
u=C.t9(w,v)
t=new C.nv(!1,v,u)
return this.a!==d.a&&u>0?t.ue(0):t},
cfV(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aNs(d)
w=C.fEQ($.fEN.c2(),0,$.auR.c2(),$.auR.c2())
v=C.t9($.auR.c2(),w)
u=new C.nv(!1,w,v)
if($.fEP.c2()>0)u=u.lW(0,$.fEP.c2())
return t.a&&u.c>0?u.ue(0):u},
aNs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fWn&&d.c===$.fWp&&g.b===$.fWm&&d.b===$.fWo)return
w=d.b
v=d.c
u=16-A.o.gaho(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fWl(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fWl(g.b,f,u,r)}else{r=C.fEQ(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fER(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cz6(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b6C(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b6C(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hsT(p,r,i);--o
C.fWr(h,j,0,r,o,s)
if(r[i]<h){m=C.fER(j,s,o,n)
C.b6C(r,l,n,m,r)
while(--h,r[i]<h)C.b6C(r,l,n,m,r)}--i}$.fWm=g.b
$.fWn=f
$.fWo=w
$.fWp=v
$.fEN.b=r
$.fEO.b=l
$.auR.b=s
$.fEP.b=u},
gV(d){var w,v,u,t=new C.cz7(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cz8().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nv&&this.aI(0,e)===0},
ro(d,e){return this.aI(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u7(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaho(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.az(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cz9(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cza(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kU(A.aG.gaO(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.ue(0):r
while(v.c>1){u=$.h8k()
if(u.c===0)B.b9(D.aVJ)
t=v.cfV(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bFM(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dy(w,x.bJ).fN(0)},
$iaOY:1,
$ihw:1}
C.aOo.prototype={
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
cD4(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gaj(d){return A.d.gaj(this.a)},
gai(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gah(d){var w=this.a
return new J.jQ(w,w.length,B.U(w).k("jQ<1>"))}}
C.Q6.prototype={
cKN(){var w,v
if(this.as==null)this.b7F()
w=this.as
v=w==null?null:w.am2()
return v==null?null:v.ey()},
b7F(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.am2().ey()
this.as=new C.bJH(v)}},
gX(d){return this.at}}
C.a1V.prototype={
a3(){return"CompressionType."+this.b}}
C.bDK.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cl()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dQ(v,u)+(s.b&A.xH[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cl()}w=A.o.dQ(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fo(u,t)&A.xH[d])
s.c=t}return v}}
C.bCg.prototype={
cBo(d,e){var w,v,u,t,s,r=this,q=new C.bDK(d)
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
t=r.cef(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cei(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cef(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.d16[u])v=!1
if(t!==D.cHs[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cei(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bVJ()
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
u[w]=l}c9.fr=B.bY(6,$.h6r(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h6q()
u=x.an
c9.y=B.bY(6,v,!1,u)
c9.z=B.bY(6,v,!1,u)
c9.Q=B.bY(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bRn(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqM(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqM(d3)}while(a3===0||a3===1);++a5
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
b2=A.o.F(a8,16)
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
a3=c9.aqM(d3)
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
aqM(d){var w,v,u,t,s=this,r=s.ay
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
bRn(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bVJ(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.crh.prototype={
aE9(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bIQ(e)
if(q<0)return
e.c=q
if(e.aH()!==101010256)return
e.aT()
e.aT()
e.aT()
e.aT()
r.f=e.aH()
r.r=e.aH()
w=e.aT()
if(w>0)e.aEc(w,!1)
r.ceD(e)
q=r.r
v=r.f
u=e.aH_(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b5i()
s.cKM(0,u,e,f)
q.push(s)}},
ceD(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5m(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.rb()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.rb()
d.aT()
d.aT()
d.aH()
d.aH()
d.rb()
d.rb()
u=d.rb()
t=d.rb()
this.f=u
this.r=t
d.c=s},
bIQ(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a5m(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ajt(A.hN)
o.aIg(r.ey(),A.hN,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.crf.prototype={}
C.auv.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cri.prototype={
aE9(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aT()
o.b=e.aT()
w=D.ayo.h(0,e.aT())
o.c=w==null?D.Jv:w
o.d=e.aT()
o.e=e.aT()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aT()
u=e.aT()
o.x=e.akQ(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aMI:D.Cc
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.Cc&&u>2){w=o.y
w.toString
s=B.qD(w,A.hN,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aT()===39169){s.aT()
s.aT()
s.akQ(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aT()
o.at=D.aMJ
o.ax=new C.crf(r,q)
w=D.ayo.h(0,q)
o.c=w==null?D.Jv:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gJ(d){return this.bgS().length},
am2(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qD(new Uint8Array(0),A.hN,q,q)
w=r.at
if(w!==D.Cc)if(p.gJ(0)<=0)r.at=D.Cc
else{if(w===D.aMI){p=r.bE6(p)
r.Q=p}else if(w===D.aMJ){p=r.bDK(p)
r.Q=p}r.at=D.Cc}w=r.c
if(w===D.abE){v=p.c
u=B.dc()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.oJ.Au(p.ey(),!0,!1)
else{t=B.a6t(A.hN,r.w)
p=r.Q
p.toString
A.oJ.a1F(p,t,!0,!1)
u.b=t.Fy()}r.Q.c=v
return B.qD(u.b9(),A.hN,q,q)}else if(w===D.abF){s=B.a6t(A.hN,32768)
p=r.Q
v=p.c
C.hbz().cBo(p,s)
u=s.Fy()
r.Q.c=v
return B.qD(u,A.hN,q,q)}else return B.qD(p.ey(),A.hN,q,q)},
bgS(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b3G(d){var w=this.ch,v=C.If(C.h24(w[0].N(0),d))
w[0]=v
v=w[1].ao(0,v.SV(0,C.If(255)))
w[1]=v
w[1]=v.aN(0,C.If(134775813)).ao(0,C.If(1)).SV(0,C.If(4294967295))
w[2]=C.If(C.h24(w[2].N(0),w[1].lW(0,24).N(0)))},
aMT(){var w=(this.ch[2].SV(0,C.If(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bE6(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qD(new Uint8Array(0),A.hN,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b3G(u[v.c++]^r.aMT())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aMT()
r.b3G(s)
u&2&&B.ah(t)
t[w]=s}return B.qD(t,A.hN,q,q)},
bDK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gJ(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.hsz(k,w,v)
p=new Uint8Array(B.cm(A.aG.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cm(A.aG.dt(q,v,k)))
if(!C.fVR(A.aG.dt(q,k,k+2),u))throw B.R(B.fg("password error"))
k=new Uint8Array(16)
n=new C.bAR(k,new Uint8Array(16),p)
k=x.S
m=J.a3g(0,k)
m=n.r=new C.cbV(m)
m.c=!0
m.b=m.bgb(!0,new C.aqf(p))
if(m.c)m.d=B.bj(D.nE,!0,k)
else m.d=B.bj(D.xA,!0,k)
l=C.fU5(C.fU7(),64)
l.b9X(new C.aqf(o))
n.w=l
n.cKn(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fVR(k,m))throw B.R(B.fg("macs don't match"))
return B.qD(r,A.hN,null,null)}}
C.b5i.prototype={
cKM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aT()
e.aT()
e.aT()
e.aT()
e.aT()
e.aT()
e.aH()
n.w=e.aH()
n.x=e.aH()
w=e.aT()
v=e.aT()
u=e.aT()
n.y=e.aT()
e.aT()
n.Q=e.aH()
n.as=e.aH()
if(w>0)n.at=e.akQ(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qD(t,A.hN,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aT()
p=s.aT()
o=s.a5m(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rb()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rb()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rb()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akQ(u)
f.c=n.as
t=new C.cri(D.Jv,n,D.Cc,B.a([C.If(0),C.If(0),C.If(0)],x.f3))
n.ch=t
t.aE9(0,f,g)},
u(d){return this.at}}
C.crg.prototype={
cBp(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.crh(B.a([],x.fT))
this.a=g
g.aE9(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aOo(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Q6(o,A.o.ak(Date.now(),1000),0):C.fMu(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fMu(o,q.w,q)
if(k.as==null)k.b7F()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajt(A.hN)
j.aIg(o,A.hN,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.IV(!1).GA(i,0,h,!0)}}return v}}
C.bAR.prototype={
cKn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bn(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hbi(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dF("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dF("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bHg(u,0,w,0,o)}else{o===$&&B.c()
q.bEa(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.JE(w,0)
m.x=A.aG.dt(m.x,0,10)
w=m.w
l=w.a
l.l7(0)
w=w.d
w===$&&B.c()
l.Bn(0,w,0,w.length)
return f}}
C.cc_.prototype={}
C.cc3.prototype={}
C.cbY.prototype={}
C.aqf.prototype={}
C.cc2.prototype={
cBE(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ee(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b9X(new C.aqf(A.aG.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bIe(n.a,n.b,t,s,r)
r+=v}A.aG.ha(f,g,g+w,s)
return o.a.c},
bIe(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.R(B.dF("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bn(0,d,0,d.length)
v.Bn(0,f,0,4)
u=m.c
u===$&&B.c()
w.JE(u,0)
u=m.c
A.aG.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bn(0,s,0,s.length)
w.JE(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.cbZ.prototype={}
C.cbX.prototype={}
C.aqg.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aqg){v=this.a
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
w=A.o.ro(w,e.gbRE())
if(!w)e.gbRE()
return w},
aGt(d,e){this.a=0
this.b=d},
rq(d){return this.aGt(d,null)},
aH2(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.f7(""),u=w.a
u===$&&B.c()
w.aWL(v,u)
u=w.b
u===$&&B.c()
w.aWL(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aWL(d,e){var w,v=A.o.fG(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bo(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.cc1.prototype={
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
aly(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aYc(u,0)
v.c=0}v.a.aH2(1)},
Bn(d,e,f,g){var w=this.cd7(e,f,g)
f+=w
g-=w
w=this.cd8(e,f,g)
this.ccZ(e,f+w,g-w)},
JE(d,e){var w,v=this,u=C.fU6(v.a),t=u.a
t===$&&B.c()
t=C.fKf(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fKf(w,3)
v.cd2()
v.cd_(u)
v.apD()
v.c7k(d,e)
v.l7(0)
return 20},
aYc(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nF(A.aG.gaO(d),d.byteOffset,d.length).getUint32(e,A.i_===w.d)
if(w.w===16)w.apD()},
apD(){this.cKm()
this.w=0
A.d.hi(this.r,0,16,0)},
ccZ(d,e,f){while(f>0){this.aly(d[e]);++e;--f}},
cd8(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aYc(d,e)
e+=4
f-=4
w.aH2(4)
v+=4}return v},
cd7(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aly(d[e]);++e;--f;++v}return v},
cd2(){this.aly(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aly(0)}},
cd_(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.apD()
u=v.d
switch(u){case A.i_:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.CE:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.R(B.ba("Invalid endianness: "+u.u(0)))}},
c7k(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i_===this.d,s=0;s<w;++s){r=v[s]
q=J.nF(A.aG.gaO(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cc4.prototype={
cKm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cc0.prototype={
b9X(d){var w,v,u,t,s=this,r=s.a
r.l7(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bn(0,w,0,v)
w=s.d
w===$&&B.c()
r.JE(w,0)
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
s.b4P(s.d,u,54)
s.b4P(s.e,u,92)
u=s.d
r.Bn(0,u,0,u.length)},
JE(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.JE(s,w)
s=u.e
t.Bn(0,s,0,s.length)
v=t.JE(d,e)
s=u.e
A.aG.hi(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bn(0,s,0,s.length)
return v},
b4P(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cbW.prototype={}
C.cbV.prototype={
a03(d){return(D.nE[d&255]&255|(D.nE[d>>>8&255]&255)<<8|(D.nE[d>>>16&255]&255)<<16|D.nE[d>>>24&255]<<24)>>>0},
bgb(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.R(B.dF("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bY(4,0,!1,u)
switch(v){case 4:q=J.nF(A.aG.gaO(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a03((m>>>8|(m&$.pE[24])<<24)>>>0)^D.ckm[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nF(A.aG.gaO(e),e.byteOffset,w)
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
p=(p^f.a03((k>>>8|(k&$.pE[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a03((k>>>8|(k&$.pE[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nF(A.aG.gaO(e),e.byteOffset,w)
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
p=(p^f.a03((g>>>8|(g&$.pE[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a03(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.R(B.ba("Should never get here"))}return s},
bHg(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nF(A.aG.gaO(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e2[a8&255]^C.n2(D.e2[a9>>>8&255],24)^C.n2(D.e2[b0>>>16&255],16)^C.n2(D.e2[b1>>>24&255],8)^b6[w][0]
m=D.e2[a9&255]^C.n2(D.e2[b0>>>8&255],24)^C.n2(D.e2[b1>>>16&255],16)^C.n2(D.e2[a8>>>24&255],8)^b6[w][1]
l=D.e2[b0&255]^C.n2(D.e2[b1>>>8&255],24)^C.n2(D.e2[a8>>>16&255],16)^C.n2(D.e2[a9>>>24&255],8)^b6[w][2]
b1=D.e2[b1&255]^C.n2(D.e2[a8>>>8&255],24)^C.n2(D.e2[a9>>>16&255],16)^C.n2(D.e2[b0>>>24&255],8)^b6[w][3]
a7=D.nE[n&255]
b0=D.nE[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nE[l>>>8&255]
a9=D.nE[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nE[b1>>>8&255]
h=D.nE[n>>>16&255]
g=D.nE[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nE[l>>>24&255]
s=s[3]
a1=J.nF(A.aG.gaO(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nF(A.aG.gaO(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nF(A.aG.gaO(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nF(A.aG.gaO(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bEa(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nF(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nF(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nF(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nF(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e1[a6&255]^C.n2(D.e1[b0>>>8&255],24)^C.n2(D.e1[a5>>>16&255],16)^C.n2(D.e1[a4>>>24&255],8)^b5[a9][0]
o=D.e1[a4&255]^C.n2(D.e1[a6>>>8&255],24)^C.n2(D.e1[b0>>>16&255],16)^C.n2(D.e1[a5>>>24&255],8)^b5[a9][1]
n=D.e1[a5&255]^C.n2(D.e1[a4>>>8&255],24)^C.n2(D.e1[a6>>>16&255],16)^C.n2(D.e1[b0>>>24&255],8)^b5[a9][2]
b0=D.e1[b0&255]^C.n2(D.e1[a5>>>8&255],24)^C.n2(D.e1[a4>>>16&255],16)^C.n2(D.e1[a6>>>24&255],8)^b5[a9][3]
a4=D.xA[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xA[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xA[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xA[o>>>8&255]
i=D.xA[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xA[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nF(A.aG.gaO(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bJG.prototype={}
C.bJH.prototype={
gJ(d){var w=this.a.length
return w},
am2(){return B.qD(this.a,A.hN,null,null)}}
C.b6R.prototype={
u9(d){return C.hvL(d)}}
C.bKz.prototype={
cvW(d){if(this.b)throw B.R(B.ba("FontLoader is already loaded"))
this.c.push(d.by(new C.bKA(),x.E))},
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
return B.b(p.fe6(f,r),$async$mb)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mb,v)}}
C.atc.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6r.prototype={
A(d,e){if(e==null)return!1
if(J.bG(e)!==B.aX(this))return!1
return e instanceof C.a6r&&e.a===this.a},
gV(d){return B.bo(B.aX(this),B.w4(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aX(this)===D.fdg)return"["+(w+B.dY(this.a))+"]"
return"[ObjectKey "+(w+B.dY(this.a))+"]"}}
C.aSG.prototype={
bX(d){var w=new C.axZ(!0,this.e,null,new B.da(),B.cc())
w.bW()
w.scw(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxI(0,!0)
w=this.e
if(!w.A(0,e.ag)){e.ag=w
e.aCN()}}}
C.axZ.prototype={
sxI(d,e){return},
goM(){var w=this.a8$
return w!=null},
gkD(){var w=this.a8$
return w!=null},
L2(d){var w=d==null?B.fOP(null):d
w.sa2x(this.ag)
return w}}
C.ZY.prototype={
S(){return new C.aGh(B.aZ(x.N))},
cIE(d){return this.d.$1(d)},
cGt(){return this.e.$0()}}
C.aGh.prototype={
Z(){this.a0()
this.Nx()},
Nx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cGt(),$async$Nx)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eSf(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nx,v)},
X1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$X1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.eSj(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eSk(t))
w=3
return B.b(C.ald(p),$async$X1)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eSl(t,s,p))
w=4
return B.b(t.Nx(),$async$X1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$X1,v)},
a_4(d){return this.ch6(d)},
ch6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eSg(t))
s=J.q(d,"id")
w=3
return B.b(C.bUI(J.k(s==null?"":s)),$async$a_4)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eSh(t))
w=1
break}q=C.fJK(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cIE(B.a([q],x.D)),$async$a_4)
case 4:if(t.c==null){w=1
break}t.n(new C.eSi(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a_4,v)},
Nw(d,e){return this.bEz(0,e)},
bEz(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ch(null,null,!0,null,new C.eSa(q),r,null,!0,!0,x.y),$async$Nw)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eSb(t))
s=s.h(e,"id")
w=4
return B.b(C.alc(J.k(s==null?"":s)),$async$Nw)
case 4:if(t.c==null){w=1
break}t.n(new C.eSc(t))
w=5
return B.b(t.Nx(),$async$Nw)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nw,v)},
cv_(d){var w=B.bh(d),v=w==null?null:w.bQ()
if(v==null)return""
return A.i5[B.bB(v)-1]+" "+B.bO(v)},
aMK(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LU,A.n),w,e,w,w,w,w,w,e)},
aMJ(d){return this.aMK(d,44)},
b24(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LU:u,r=B.m(14),q=B.V(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.H9,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.H9,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.blQ,u,u,u)],p))}return B.D(B.aH(A.c5,B.dj(u,B.B(q,A.m,u,A.b7,A.j,0,u,u),u,u,A.ba,new B.o(u,u,u,r,u,s,A.n),A.hS,u,u,u,A.ws,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eSp(this,d),u,u,u,u,u,u,!1,A.ae),1)},
cbb(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.Us,n=B.m(18),m=p?A.d6:A.dv
m=B.H(m,A.r,p?1.8:1)
w=this.aMJ(A.pe)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aL1,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.d4,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aL3,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LU:q
u=p?q:B.H(A.b9,A.r,1.6)
r=p?D.bzM:q
return B.aH(q,B.dj(q,B.B(B.a([w,A.bd,t,B.dj(q,r,q,q,A.ba,new B.o(q,q,u,q,q,v,A.a6),A.fW,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.ba,new B.o(o,q,m,n,q,q,A.n),A.fW,q,q,A.da,A.bl,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eSe(this,p,d),q,q,q,q,q,q,!1,A.ae)},
ciB(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.cv_(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.dv,A.r,1)
v=r.aMJ(A.La)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aL1,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.d4,B.d(p+" slides"+t,q,q,q,q,q,q,D.aL3,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZP(A.hr,A.br,"Bring it back",r.r?q:new C.eSm(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.aZP(A.e7,A.cD,"Delete",r.r?q:new C.eSn(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.Us,q,w,o,q,q,A.n),q,q,q,A.da,D.bgo,q,q,q)},
aZP(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hq(B.aH(w,B.p(w,B.V(d,v?A.b9:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
apT(d,e,f){var w=null
return new B.C(D.bfq,B.v(B.a([B.V(d,A.b9,w,w,w,46),A.ab,B.d(e,w,w,w,w,w,w,D.eMN,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.eFB,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bR,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.b9,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aMK(A.xn,46),A.bd,D.bmz],t)
if(j.r)s.push(D.dQH)
s.push(B.aF(i,i,i,i,A.LE,i,i,i,new C.eSs(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.dv,A.r,1)
o=J.a8(h)
q=B.a([A.T,u,new B.C(D.biY,s,i),B.p(i,B.B(B.a([j.b24(0,A.wZ,"Save",j.a.c.length),j.b24(1,A.Lp,"Saved",o.gJ(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bi1,A.eh,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cD:A.br).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cD:A.br).j(0.4),A.r,1)
p=j.y
n=p?A.Lb:A.en
n=B.V(n,p?A.cD:A.br,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.aa,B.D(B.d(m,i,i,i,i,i,i,A.a4d,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bhY,A.iK,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eIX,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aH(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eLS,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eSt(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.apT(A.pe,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cbb(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dQh)
else if(j.e==null)s.push(j.apT(A.ag6,"Could not reach the database","Check the connection, then open this again."))
else if(o.gai(h))s.push(j.apT(A.ob,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gah(h);r.C();)s.push(j.ciB(r.gT(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.cl,B.cM(u,i,W.adl,i,i,A.ak,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbYb()
p=s?i:D.LU
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b3.j(0.4),A.cs,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wZ,m?A.j1:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.biA,B.aH(i,B.dj(i,B.B(B.a([k,A.a3D,new B.dm(1,A.cl,B.f_(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j1:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.eb),i)],t),A.m,i,A.b7,A.j,0,i,i),i,i,A.ba,new B.o(s,i,i,o,n,p,A.n),A.hS,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.T)
return B.p(i,B.bq(!0,B.v(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!1),A.h,i,new B.aW(0,1/0,0,w.a.b*0.9),D.aSU,i,i,i,i,i,i,i,i)}}
C.nV.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a5().ab()],x.N,x.z)}}
C.WK.prototype={
S(){return new C.av2(B.a([],x.k),B.fa(null,x.H))},
gdT(){return this.c}}
C.av2.prototype={
Z(){this.a0()
this.NE()},
NE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$NE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_W(t.a.c),$async$NE)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cAv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$NE,v)},
cou(d){var w,v,u,t=this
d.c=new B.Q(Date.now(),0,!1)
w=J.pL(t.d,new C.cAy(d))
v=w<0
if(v&&C.hsW(d))return t.f
u=t.d
if(v)J.p1(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fAI(new C.cAz(t),v)
return t.f=t.f.by(new C.cAA(t,d),v).eN(new C.cAB())},
Hk(d,e,f){return this.c4Y(0,e,f)},
aU8(d,e){return this.Hk(0,e,!1)},
c4Y(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a9(s,!1).cp(B.eD(new C.cAu(t,e),!1,null,x.H)),$async$Hk)
case 3:w=4
return B.b(t.f,$async$Hk)
case 4:w=5
return B.b(t.NE(),$async$Hk)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hk,v)},
aTq(d){var w=A.o.u(1000*Date.now()),v=d==null?D.ddl:d
this.Hk(0,new C.nV(w,v,new B.Q(Date.now(),0,!1)),!0)},
bXH(){return this.aTq(null)},
aaO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.cAC(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaO)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aTq(s)
case 1:return B.h(u,v)}})
return B.i($async$aaO,v)},
Hj(d,e){return this.bEr(0,e)},
bEr(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ch(null,null,!0,null,new C.cAp(e),s,null,!0,!0,x.y),$async$Hj)
case 3:if(g!==!0){w=1
break}t.n(new C.cAq(t,e))
w=4
return B.b(t.f,$async$Hj)
case 4:w=5
return B.b(C.ae3(t.a.c,e.a),$async$Hj)
case 5:w=6
return B.b(t.NE(),$async$Hj)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hj,v)},
C5(d){return this.bwM(d)},
bwM(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$C5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.cAl(d),r,!0,!0,!1,null,!1,!1,x.N),$async$C5)
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
return B.b(t.aU8(0,d),$async$C5)
case 9:w=5
break
case 7:w=10
return B.b(F.fKh(r,d.b,null),$async$C5)
case 10:w=5
break
case 8:w=11
return B.b(t.Hj(0,d),$async$C5)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C5,v)},
bRB(){var w,v,u=null,t=[D.ddo,D.ddm,D.ddn],s=new C.cAs(),r=B.m(26),q=x.V,p=B.a([new B.ab(0,A.G,A.dl.j(0.4),A.eQ,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b1(999,999)
n.push(B.p(u,new B.w(D.cZd[w],u,A.oB,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bv(v,v,v,v),u,u,A.n),u,u,u,u,A.nu,u,u,u))}return B.p(u,B.B(B.a([B.D(B.v(B.a([D.f8W,A.P,B.c9(A.bJ,n,A.bx,6,6),A.aO,B.aH(u,B.p(u,D.epg,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ab(0,A.G,A.x.j(0.2),A.cF,10)],q),u,A.n),u,u,u,u,V.adI,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cAr(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a5(130,110,new B.am(A.A,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bGW,A.n),u,u,u,u,D.bj7,u,u,u)},
bwK(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ab(0,A.G,A.x.j(0.5),A.cs,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.W,v,A.b_,A.q,B.a([B.f_(A.A,F.alL(d.b),A.h,A.bQ),D.dVy,B.an(v,B.aH(v,B.p(v,D.bAy,A.h,v,v,D.aTM,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cAg(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ao),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eD4,v,v,v)
w=u===1?"":"s"
return B.aH(v,B.v(B.a([new B.fD(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eJ6,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cAh(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cAi(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.C(H.aci,B.hq(B.aH(s,B.p(s,A.aiK,A.h,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b3.j(0.5),A.J,12)],x.V),E.uR,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbYW(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mx,s,s,s,!0,s,s,s,s,s,D.f9_,s,s,s,1,s,!0)
if(t.e)r=D.aWZ
else{w=t.bRB()
v=B.a([D.eWK,A.aa],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.aa(t.d),s,s,s,s,s,s,D.eCy,s,s,s),A.h,s,s,new B.o(D.b0f,s,s,u,s,s,A.n),s,s,s,s,A.E3,s,s,s))}r=B.a([new B.ns(Ad.VA,new B.lR(w,s),s),new B.ns(D.biu,new B.lR(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cj(t.d))r.push(D.euV)
else r.push(new B.ns(D.bi_,B.Nj(new B.o_(new C.cAD(t),J.aa(t.d),!0,!0,!0,0,B.rj(),s),D.euT),s))
r=B.uV(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.ak,!1,r)}return B.ce(q,D.b_b,r,s,!1,!1,s,s)}}
C.WI.prototype={
S(){return new C.auZ(B.a([],x.bx))},
Sb(d){return this.d.$1(d)}}
C.aCb.prototype={}
C.auZ.prototype={
aWN(d,e,f){var w=$.av(),v=new B.ap(new B.bc(d,A.b2,A.aM),w),u=this.gaU7()
v.aK(0,u)
w=new B.ap(new B.bc(e,A.b2,A.aM),w)
w.aK(0,u)
return new C.aCb(v,w,f)},
CU(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.aa(0)
v.x=B.cP(A.p3,new C.czK(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.av()
u=new B.ap(new B.bc(w.a,A.b2,A.aM),v)
t=m.gaU7()
u.aK(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.ap(new B.bc(w.b,A.b2,A.aM),v)
u.aK(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.ap(new B.bc(w.c,A.b2,A.aM),v)
u.aK(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ap(new B.bc(p.a,A.b2,A.aM),v)
o.aK(0,t)
n=new B.ap(new B.bc(p.b,A.b2,A.aM),v)
n.aK(0,t)
r.push(new C.aCb(o,n,p.c))}if(r.length===0)r.push(m.aWN("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.aa(0)
if(r.y){r.a.c.b=r.gos()
q=r.a
q.Sb(q.c)}q=r.d
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
t.push(new F.m7(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qJ(n,w,v,t,u)},
zN(){var w=0,v=B.j(x.H),u=this,t
var $async$zN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.aa(0)
u.y=!1
u.a.c.b=u.gos()
t=u.a
w=2
return B.b(t.Sb(t.c),$async$zN)
case 2:return B.h(null,v)}})
return B.i($async$zN,v)},
bYU(){this.n(new C.czJ(this))
this.CU()},
aT8(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.czM(w,d,v))
w.CU()},
bYV(d,e){var w=A.d.cu(this.w,e)
this.n(new C.czU())
this.CU()
$.aT.x1$.push(new C.czV(w))},
OM(d){return this.cb1(d)},
cb1(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kG(80,1400,A.ez),$async$OM)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$OM)
case 8:p=f
o=q.b.toLowerCase()
n=J.afx(o,".png")?"image/png":"image/jpeg"
r.n(new C.czN(d,n,p))
r.CU()
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
return B.i($async$OM,v)},
wN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h5J(r,t.gos()),$async$wN)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.czL(t,s))
t.CU()
case 1:return B.h(u,v)}})
return B.i($async$wN,v)},
cbj(d){var w,v=this,u=null,t=F.fie(d.c)
if(t==null)return new B.bI(A.a4,u,u,B.hh(D.btY,D.eZ1,new C.czP(v,d),u),u)
w=x.p
return new B.C(A.cM,new B.am(A.W,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fF(t,A.A,u,u,A.cm,A.bQ,!0,140,!1,u,1/0),A.ao),B.an(u,B.B(B.a([v.aZQ(A.kE,new C.czQ(v,d)),A.bp,v.aZQ(A.ct,new C.czR(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZQ(d,e){var w=null
return B.aD(!1,A.a1,!0,w,B.aI(!1,w,!0,new B.C(A.ho,B.V(d,A.c,w,w,w,18),w),A.cH,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aT,0,w,w,A.cH,w,w,A.ad)},
Hl(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zN(),$async$Hl)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fKh(s,t.gos(),new C.czT(t)),$async$Hl)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hl,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.C(A.qi,B.hh(D.byx,D.f3A,n.gatt(),B.fr(m,m,m,m,m,m,m,m,m,m,m,A.bH,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aiJ,m,m,m,new C.czW(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.TS,m,1,m,m,m,!1,m,!1,E.mx,m,m,m,!0,m,m,m,m,m,D.eZM,m,m,m,1,m,!0),j=Aq.aRs(O.kV,A.c,Aa.SZ,A.nz,D.f_s,n.gbYT()),i=B.m(18),h=n.gats(),g=B.a([new B.ab(0,A.G,A.x.j(0.4),A.j8,12)],x.V)
g=B.aH(m,B.p(m,new B.a5(92,142.1818181818182,B.f_(A.A,F.alL(n.gos()),A.h,A.dq),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.D(B.v(B.a([D.faq,A.av,B.d(F.fIO(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eOw,m,m,m),A.T,B.dq(E.ai_,E.aLK,h,B.bk(A.dl,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.TS,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nN,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.dd),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b1(16,16)
u=new B.ay(O.kV.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bxi,m,m,m,v===0?m:new C.czX(n,v),m,m,m,m,"Move up",A.c8)
r=i.length
q=B.aF(m,m,m,m,D.bDp,m,m,m,v===r-1?m:new C.czY(n,v),m,m,m,m,"Move down",A.c8)
r=r===1?m:new C.czZ(n,v)
p=new B.b1(12,12)
o=new B.b1(12,12)
g.push(B.p(m,B.v(B.a([new B.cC(A.b0,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eP1,m,m,m,m,m,m,m,m,m),A.b8,s,q,B.aF(m,m,m,m,B.V(A.e7,A.o3,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c8)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bv(p,p,p,p),A.dd),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.cbj(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bv(o,o,o,o),A.dd),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mx,m,new B.c1(u,u,u,u),new B.bv(w,w,w,w),m,m,A.n),m,m,new C.a6r(h),A.e0,D.bgD,m,m,m))}return B.nX(!0,B.ce(k,E.aaG,B.cM(g,m,D.bh4,m,m,A.ak,!1),m,!1,!1,j,m),new C.cA_(n),x.C)}}
C.av0.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cD:E.mx,q=B.m(16),p=B.m(16),o=s?A.aD.j(0.08):A.c.j(0.04)
s=s?A.aD.j(0.16):A.dl.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.fk,B.aD(!1,A.a1,!0,t,B.aI(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aKr,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.eo,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ad),t)}}
C.anS.prototype={
S(){return new C.aB0()}}
C.aB0.prototype={
Z(){this.a0()
this.XB()},
bq(d){this.bC(d)
if(d.c!=this.a.c)this.ZV()},
ZV(){var w=0,v=B.j(x.H),u=this,t
var $async$ZV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$ZV)
case 2:u.d=null
if(u.c!=null)u.n(new C.dYU(u))
w=3
return B.b(u.XB(),$async$ZV)
case 3:return B.h(null,v)}})
return B.i($async$ZV,v)},
XB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.aa(n)===0){w=1
break}t=4
if(J.cW(n,"http://")||J.cW(n,"https://")||J.cW(n,"data:")){o=B.Wl(B.cr(n,0,null),new B.NH(!0))
r.d=o}else{o=B.fg("unsupported video ref")
throw B.R(o)}w=7
return B.b(o.hW(0).cJ(0,A.p_),$async$XB)
case 7:if(r.c==null){w=1
break}r.d.rs(!1)
r.n(new C.dYS(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a6(m)
$.al.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dYT(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XB,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
c_R(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fT(0)
w.n(new C.dYV(w))}else{v.p7(0)
w.n(new C.dYW(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iY.j(0.92),D.IO.j(0.95)],x.O)
w=B.H(A.bT.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.ph,A.bT,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bU(B.au(B.v(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a3(A.ax,A.aC,A.w,m,o,o),A.n),A.bb)}if(p.f)return B.au(B.V(A.ahl,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aXJ
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f_(A.A,new B.a5(r,q,new B.zd(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.au(B.p(o,B.V(A.iM,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.N(w,w,w,w),o,o,o),o,o,o))}return B.aH(o,B.bu(n,new B.am(A.W,o,A.b_,A.q,m,o),A.ao),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_Q(),o,o,o,o,o,o,!1,A.ae)}}
C.wN.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jb.prototype={}
C.ab7.prototype={
B(d){return B.p9(new C.dQi(this,B.M(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aax.prototype={
B(d){var w,v,u=null,t=B.M(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iY.j(t?0.35:0.4),A.r,1),p=t?D.Jc:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.x.j(t?0.3:0.08),A.cs,14)],o),m=B.m(10),l=B.H(A.bT.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.x.j(0.14),A.dE,6)],o)
w=this.c
o=B.D(B.p(u,new B.fD(0.5625,C.hKW(w),u),A.ao,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ae9,u,u,u,u),1)
m=D.iY.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iY,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.a1,!0,u,B.aI(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.d4,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.b5C,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c1(new B.ay(m,1,A.r,-1),A.X,A.X,A.X),u,u,u,A.n),u,u,u,u,D.acx,u,u,u)],v),A.ag,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ad)}}
C.wQ.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.ni.prototype={}
C.bfP.prototype={
Uc(d){var w=null
return new B.bI(A.a4,w,w,B.Gj(A.A,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bwt(){return this.Uc(1)},
atZ(d){var w=null,v=B.m(8),u=B.H(A.hP,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a91,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hP,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hP,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b7,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a3,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atZ("TAARIFA ZA WANANDOA"),A.ar,w.bwt(),A.d4,w.Uc(0.9),A.d4,w.Uc(0.7),A.P,w.atZ("TAMKO LA MAKUBALIANO"),A.h2,w.Uc(1),A.d4,w.Uc(0.95),A.P,w.atZ("MASHAHIDI"),A.b8,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.aba.prototype={
B(d){return B.p9(new C.e2U(B.M(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acO.prototype={
B(d){var w,v,u,t,s,r=null,q=B.M(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.au.j(q?0.35:0.4),A.r,1),m=q?D.b5f:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.x.j(q?0.3:0.08),A.cs,14)],l),j=B.m(10),i=B.H(A.au.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.x.j(0.14),A.dE,6)],l)
w=this.c
v=C.fJi(w.a)
if(v==null)v=A.d.gL(D.Ok)
u=B.aY(v.f)
t=B.aY(v.r)
s=x.p
l=B.D(B.p(r,new B.fD(0.5625,new B.am(A.W,r,A.b_,A.q,B.a([B.bZ(0,B.fF(C.fJh(v.d),A.A,r,r,A.cm,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.adc,new C.bfP(v,u,t,r),r)],s),r),r),A.ao,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ae9,r,r,r,r),1)
j=A.au.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.Jd,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.a1,!0,r,B.aI(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.d4,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b_D,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c1(new B.ay(j,1,A.r,-1),A.X,A.X,A.X),r,r,r,A.n),r,r,r,r,D.acx,r,r,r)],s),A.ag,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ad)}}
C.kF.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5V.prototype={}
C.TY.prototype={
S(){var w=$.av()
return new C.aBj(new B.co(null,x.A),new B.ap(A.as,w),new B.ap(A.as,w),B.me(0,null,null),A.d.gL(D.a_l),D.dnE,B.a([],x.L),B.a([],x.gE))}}
C.aBj.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yB(C.fm7(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fl4().by(new C.e6b(v),w)
$.ty().jV(0,"assets/images/ngmy_logo.png").by(new C.e6c(v),w).eN(new C.e6d())},
p(){var w=this,v=w.e,u=$.av()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
aeC(d){var w=null,v=this.c
if(v!=null)v.H(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
HA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$HA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kG(88,1600,A.ez),$async$HA)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$HA)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h6_(m,p),$async$HA)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bzv(new B.pj(o,1),m),$async$HA)
case 10:if(r.c!=null)r.n(new C.e5O(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a6(k)
r.aeC("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$HA,v)},
UV(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h6_(s,q),$async$UV)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bzv(new B.pj(r,1),s),$async$UV)
case 4:if(t.c!=null)t.n(new C.e5K(t,r))
case 1:return B.h(u,v)}})
return B.i($async$UV,v)},
abx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.n(new C.e5V(q))
t=4
q.a.toString
p=C.hPk()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abx)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5W(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a6(i)
q.aeC(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5X(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abx,v)},
XN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.aa(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.n(new C.e5Q(q,i))
t=4
q.a.toString
p=C.hPj()
h=q.z
m=q.y
l=q.w
k=B.z(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XN)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e5R(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a6(g)
if(q.c!=null)q.n(new C.e5S(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5T(q))
$.aT.x1$.push(new C.e5U(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XN,v)},
c0y(d){this.n(new C.e5P(this,d))},
D8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.n(new C.e5M(q))
t=4
w=7
return B.b($.aT.gm5(),$async$D8)
case 7:w=8
return B.b(B.bN(A.no,null,x.H),$async$D8)
case 8:k=$.aT.ag$.x.h(0,q.d)
p=k==null?null:k.gb6()
if(!(p instanceof B.q2))throw B.R("The page is not ready yet.")
w=9
return B.b(p.lQ(1800/p.gX(0).a),$async$D8)
case 9:o=e
w=10
return B.b(o.hf(A.fO),$async$D8)
case 10:n=e
if(n==null)throw B.R("Could not make the picture.")
w=11
return B.b(A5.ae6(J.f5(A.dD.gaO(n)),"ngmy_news.png","image/png"),$async$D8)
case 11:m=e
q.aeC(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a6(i)
q.aeC(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e5N(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D8,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kG,a2,a2,a2,new C.e62(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.bz2,a2,a2,a2,new C.e63(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.oi,a2,a2,a2,a4?a1.gaV0():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zr,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.epp,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.x.j(0.6),A.eQ,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fD(0.7142857142857143,B.f_(A.A,new B.ep(new C.aYC(t,s,r,a1.x,a2),a1.d),A.h,A.dq),a2),A.h,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Rb,a2,a2,a2)
t=a1.as?a2:a1.gc0x()
t=B.a([B.D(B.dq(D.bzN,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bk(D.rr,a2,a2,a2,A.c,A.fR,a2,a2,new B.b6(B.m(14),N.vM),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.m(10),B.fF(r,A.A,a2,a2,A.cm,A.bQ,!1,48,!1,a2,48),A.ao)
A.d.v(t,B.a([A.aw,r,B.aF(a2,a2,a2,a2,D.bwC,a2,a2,a2,a1.as?a2:a1.gbD4(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Rb,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aOu("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cUi[o]
p.push(B.mN(a2,D.rr,new B.w(n.a,a2,A.ox,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hs,new C.e64(a1,n),a2,a2,N.vM,a2))}p=B.c9(A.bJ,p,A.bx,6,8)
m=a1.Q
m=B.c9(A.bJ,B.a([D.f98,A.bd,B.jS(a2,a2,a2,D.eVD,a2,new C.e65(a1),m==="en",a2,a2,a2,a2),A.aa,B.jS(a2,a2,a2,D.eVy,a2,new C.e66(a1),m==="sw",a2,a2,a2,a2)],w),A.r3,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Rb,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.df(D.a_l,0,B.dK(10,"count",x.S),j),h=i.$ti,i=new B.bV(i,i.gJ(0),h.k("bV<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aN2(g==null?h.a(g):g))}k=B.cM(k,a2,a2,a2,a2,A.b0,!1)
i=B.a([],w)
for(j=B.df(D.a_l,10,a2,j),h=j.$ti,j=new B.bV(j,j.gJ(0),h.k("bV<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aN2(g==null?h.a(g):g))}j=B.cM(i,a2,a2,a2,a2,A.b0,!1)
i=a1.as?a2:a1.gc0A()
h=B.m(18)
v=B.a([new B.ab(0,A.G,A.by.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cM,s,a2),t,A.ay,new B.C(A.cM,r,a2),q,A.P,p,A.T,m,A.ay,new B.C(A.cM,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aO,B.aH(a2,B.p(A.A,B.B(B.a([D.bzH,A.aa,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fS,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(a2,a2,a2,h,v,G.ta,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ae)],w)
if(a4){u=B.a([A.dX,B.B(B.a([D.d87,A.aw,D.bmS],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a4
q=e?A.b3.j(0.35):D.rr
p=new B.b1(16,16)
d=new B.ay(A.bG,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.w(f.b,a2,D.eMy,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h,a2,N.SN,new B.o(q,a2,new B.c1(d,d,d,d),new B.bv(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cM,A.iK,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cHQ[o]
t.push(B.mN(a2,D.rr,new B.w(a0,a2,A.Hk,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hs,new C.e67(a1,a0),a2,a2,N.vM,a2))}u.push(B.c9(A.bJ,t,A.bx,6,8))
u.push(A.T)
t=B.D(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aOu("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e68(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc0z()
u.push(B.B(B.a([t,A.aa,B.Gn(A.xs,s,B.nb(a2,A.b3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaV0()
u.push(B.dq(A.oi,D.f51,t,B.bk(A.dk,a2,a2,a2,a2,A.H7,a2,a2,new B.b6(B.m(16),A.X),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cM(v,a1.r,A.ad_,a2,a2,A.ak,!1)],w)
if(a1.as){u=A.x.j(0.55)
t=B.m(20)
s=B.H(E.jy.j(0.5),A.r,1)
v.push(B.bZ(0,B.ed(B.au(B.p(a2,B.B(B.a([E.a3E,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iB,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(E.zj,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bjp,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.ce(a3,A.zr,new B.am(A.W,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aOu(d){var w=null
return B.bn(w,new B.b3(4,B.m(14),A.X),w,A.eN,w,w,w,w,!0,w,w,w,w,w,w,D.rr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,R.Hf,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aN2(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aY(d.f),p=s?A.by:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.aY(d.x),t,t,t,5,t,A.lX,t,t,t,t),A.h2],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.aY(v).j(0.5),t,t,t,2,t,D.bfE,t,t,t,t))
w.push(A.d4)
w.push(new B.C(A.jH,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.aY(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aH(t,B.p(t,B.v(w,A.m,t,A.b7,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kx,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e5L(this,d),t,t,t,t,t,t,!1,A.ae)}}
C.yB.prototype={
b6U(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yB(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
czc(d){var w=null
return this.b6U(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
azb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c7U(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fn(g,B.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c7S(),B.U(w).k("J<1,n>")).bZ(0,new C.c7T())
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
return this.b6U(p,r,q,J.aa(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEi(d){return this.f}}
C.rF.prototype={
a3(){return"NewsLayout."+this.b}}
C.Ar.prototype={
a3(){return"NewsFrame."+this.b}}
C.l1.prototype={}
C.aYC.prototype={
qv(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aY(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aV2(d,e,f,g){return this.qv(d,e,null,1.25,f,A.bi,g)},
O7(d,e,f,g,h){return this.qv(d,e,f,1.25,g,A.bi,h)},
au4(d,e,f,g,h){return this.qv(d,e,null,f,g,A.bi,h)},
au3(d,e,f,g,h){return this.qv(d,e,f,g,0,A.bi,h)},
aV4(d,e,f,g,h){return this.qv(d,e,null,f,0,g,h)},
c0E(d,e,f,g,h,i){return this.qv(d,e,f,g,0,h,i)},
au2(d,e,f,g){return this.qv(d,e,null,f,0,A.bi,g)},
abA(d,e,f){return this.qv(d,e,null,f,0,A.bi,A.cK)},
aV3(d,e,f,g,h){return this.qv(d,e,f,g,0,h,A.cK)},
c0D(d,e,f,g){return this.qv(d,e,null,f,0,g,A.cK)},
c0C(d,e,f,g){return this.qv(d,e,f,g,0,A.bi,A.cK)},
abB(d,e,f,g,h,i){return this.qv(d,e,f,g,h,A.bi,i)},
aV1(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kN(new B.em(d,u,u,A.cS,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.cg,new B.jM(1),u,u,h,u,A.cf,u)
v.xY(g)
if(!v.b.a.c.gaAM())return w
w-=2}return j},
aby(d,e,f,g,h,i,j,k){return this.aV1(d,e,f,g,h,i,j,k,A.bi)},
aw7(d,e,f){var w=null,v=d==null?B.aY(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
aw6(d){return this.aw7(null,!1,d)},
aeq(d,e){return this.aw7(null,d,e)},
chL(d,e){return this.aw7(d,!1,e)},
gaXa(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaR0(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
N3(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aby(w.gaR0(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaR0(),v,g,A.a2,v,v,v,w.au3(u,t,f,1.02,A.O),e,v,v)},
aR5(d){return this.N3(d,A.L,null,2,78,30)},
a96(d,e,f,g,h){return this.N3(d,e,null,f,g,h)},
bRt(d,e,f,g,h){return this.N3(d,A.L,e,f,g,h)},
bRs(d,e,f){return this.N3(d,A.L,null,e,f,30)},
Q1(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.C(A.ky,B.d(s,u,g,A.a2,u,u,u,v.aV3(w,v.aV1(t,w,A.cK,d,g,h,15,1.2,A.cx),f,1.2,A.cx),e,u,u),u)},
b1L(d){return this.Q1(d,A.L,null,3,24)},
axA(d,e,f,g){return this.Q1(d,e,null,f,g)},
coY(d,e,f){return this.Q1(d,A.L,e,3,f)},
b1M(d,e){return this.Q1(d,e,null,3,24)},
coW(d,e){return this.Q1(d,A.L,null,3,e)},
coX(d,e,f){return this.Q1(d,e,null,3,f)},
anW(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.ir,B.d(u.toUpperCase(),v,v,v,v,v,v,w.O7("Roboto",12,d==null?B.aY(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.h,B.aY(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
M0(){return this.anW(null,!0)},
anV(d){return this.anW(null,d)},
bz2(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bF
return new B.C(A.i4,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.c0D(this.d.as,13.5,1.2,A.cx),e,w,w),w),w)},
uI(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.Q(Date.now(),0,!1),i=m.gaXa(),h=A.o.ak(j.bw(B.bW(B.bw(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hD3(Math.max(1,B.bw(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aV2(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aby(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aby(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aY(h.x)
h=h.ch?B.aY(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eH,l,l,l,m.abB(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.h,t,l,l,l,l,l,l,new B.N(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.byL(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hF,A.j,0,l,l),A.ar,m.aeq(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.h,B.aY(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.D(B.d(i,l,1,A.eH,l,l,l,m.au2(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.T,B.B(B.a([B.d(C.byL(j),l,l,l,l,l,l,m.O7(k,13,B.aY(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hF,A.j,0,l,l),A.P,m.chL(B.aY(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaXa()
v=B.d("NGMY",l,l,l,l,l,l,m.au4(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aY(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.x:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.aa,B.eu(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qv(k,r*0.72,o,1.05,-0.5,A.cx,A.u),l,l,l),A.h,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.N(t,s,t,s),l,l,l),l),A.b8,new B.dm(1,A.cl,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.abB(k,12.5,B.aY(h).j(0.85),1.3,1.2,A.O),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.h,B.aY(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hF,A.j,0,l,l)
t=m.aeq(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.au2(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.av,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aeq(!0,1.4),A.av,B.d(C.byL(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.aw6(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.au4(v,u,1,3,A.O),A.L,l,l),A.P,m.aeq(!0,1.2),A.av,B.B(B.a([B.d(C.byL(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hF,A.j,0,l,l),A.av,m.aw6(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aac(d){return this.uI(d,!1)},
abz(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aY(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.abB("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.h,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.N(v,u,v,u),w,w,w)},
c0B(d,e){return this.abz(d,null,e,null)},
aT0(d){var w=null,v=new B.Q(Date.now(),0,!1),u=A.o.F(B.dd(v),12)===0?12:A.o.F(B.dd(v),12),t=B.aY(this.d.w).j(0.75),s=this.au3("Roboto",15,t,1,A.cq),r=B.V(E.afv,t,w,w,w,18),q=A.a.am(A.nC[B.bB(v)-1],0,3),p=A.a.aS(A.o.u(B.fM(v)),2,"0"),o=B.dd(v)>=12?"PM":"AM"
return B.B(B.a([r,A.aa,B.d(q+" "+B.bO(v)+", "+B.bw(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.h,t.j(0.4),w,w,w,20,w,A.fA,w,w,w,1),B.V(d,t,w,w,w,19),A.aa,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
asY(){return this.aT0(A.m4)},
b_3(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.abB("Roboto",this.aby(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
awa(d,e,f){return this.b_3(d,e,f,30)},
axD(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bF
return new B.C(A.ug,B.d(v,w,e,A.a2,w,w,w,this.c0C("Roboto",f,B.aY(this.d.w).j(0.88),1.35),w,w,w),w)},
b1Q(d){return this.axD(d,3,22)},
cp8(d,e){return this.axD(d,e,22)},
rM(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fF(r,A.A,s,s,A.cm,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.FQ(D.bm5,w,s)
if(v==="sepia")w=new B.FQ(D.bm4,w,s)}else{r=this.d
v=r.w
u=B.aY(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.V(A.wT,B.aY(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bU(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.w,s,0,B.a([A.K,A.TO.j(0.38)],x.O),s,s),A.n),A.bb))
return new B.a5(d,e,new B.am(A.W,s,A.b_,A.q,v,s),s)},
pE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.aY(j),A.r,3)
j=B.H(B.aY(j),A.r,1)
return B.p(k,B.p(k,l.rM(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eh,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lZ,k,k,d)
case 2:w=B.a([new B.ab(0,A.G,A.x.j(0.35),D.dN_,14)],x.V)
v=l.rM(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eu(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.au(B.d(u,k,2,A.a2,k,k,k,l.aV3(j.as,13.5,D.b0Y,1.1,A.cx),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b3J,k,k,k,w,k,A.n),k,e,k,k,D.bh_,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.aY(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.rM(d-10,e-10),A.ao),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.aY(j.x),A.r,6)
j=B.aY(j.f)
v=t-10
return new B.a5(d,e,B.au(B.p(k,B.hO(l.rM(v,v),A.ao),A.h,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lZ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ab(0,A.G,A.x.j(0.3),D.dMQ,10)],x.V)
return B.eu(A.A,0.025,new B.a5(d,e,new B.am(A.W,k,A.a9,A.h,B.a([B.bZ(0,B.p(k,l.rM(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qk,k,k,k),0,0,0),B.an(k,B.eu(A.A,-0.6,B.p(k,k,A.h,A.bH.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.eu(A.A,-0.6,B.p(k,k,A.h,A.bH.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aY(j.x)
return new B.a5(d,e,B.b2(B.n6(l.rM(d,e),A.ao,D.fgO),new C.b92(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.rM(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bt(u));++n){m=new B.b1(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.c3,k,k,new B.bv(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cG(0,q,0,p,k,k,new B.cC(A.b0,A.qC,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.W,k,A.b_,A.q,w,k),A.h,A.ep,k,k,k,e,k,k,D.bln,k,k,d)
case 8:w=d/2
v=B.wd(A.h1,new B.b1(w,w))
j=B.H(B.aY(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.wd(A.hd,new B.b1(w,w)),l.rM(d-10,e-10),A.ao),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ab(0,A.G,A.x.j(0.35),A.fF,22)],x.V)
return B.p(k,l.rM(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a5(d,e,B.n6(l.rM(d,e),A.ao,D.fmp),k)
case 0:j=B.H(B.aY(j.w),A.r,2.4)
return B.p(k,l.rM(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eh,k,k,d)}},
aKG(d,e){return this.d.e===D.OX?A.bF:this.bz2(d,e)},
Ut(d){return this.aKG(d,A.L)},
gawW(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
awV(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.D(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aV4(v.Q,19,1.15,A.cx,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.O7("Roboto",12.5,B.aY(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.abA(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jB(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gc8z(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6T(d,e,f,g){return B.ck(new C.c7V(this,e,d,f,g))},
a6S(d){return this.a6T(d,22,!0,18)},
UE(d,e){return this.a6T(d,22,!0,e)},
aLI(d,e,f){return this.a6T(d,22,e,f)},
bB1(d,e,f){return this.a6T(d,e,!0,f)},
b4F(d,e,f,g){return B.ck(new C.c7W(this,e,d,g,!0,f))},
c7o(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aac(824),A.ay,k.aR5(824),k.b1L(824),A.P,k.M0(),A.ab,B.au(k.pE(824,360),j,j,j),k.Ut(824),A.ab,B.D(k.a6S(3),1)],x.p),A.ag,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aac(824),A.aO,new B.a5(j,350,B.B(B.a([new B.a5(440,j,B.v(B.a([k.a96(440,A.bf,3,62,26),k.axA(440,A.bf,2,20),A.b8,k.anW(B.aY(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.H8,B.v(B.a([k.pE(362,310),k.Ut(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.T,k.aw6(2),A.ab,B.D(k.a6S(3),1)],w),A.ag,j,A.e,A.j,0,A.p)
case 2:w=k.uI(824,!0)
v=B.aY(h.x)
u=h.ch
t=x.p
s=B.a([k.bRt(788,u?B.aY(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.coY(788,u?B.aY(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.h,v,j,j,j,j,j,j,A.zO,j,j,j)
u=B.a([B.au(k.pE(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.OX){h=A.x.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.au3(i,14,A.c,1.15,A.O),j,j,j),A.h,h,j,j,j,j,j,j,A.lr,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ab,v,A.ab,new B.am(A.W,j,A.a9,A.q,u,j),A.P,k.M0(),A.T,B.D(k.UE(2,21),1)],t),A.ag,j,A.e,A.j,0,A.p)
case 3:h=k.uI(824,!0)
w=k.pE(824,560)
v=B.a([A.K,A.x.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ab,new B.am(A.b1,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.N3(780,A.bf,A.c,3,74,30),A.h,j,j,new B.o(j,j,j,j,j,new B.a3(A.aX,A.b1,A.w,v,j,j),A.n),j,j,j,j,D.bjH,j,j,j),j,j,0,0,j,j)],u),j),k.b1M(824,A.bf),A.P,k.M0(),A.T,B.D(k.a6S(3),1)],u),A.ag,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aac(824),A.ay,k.aR5(824),k.b1L(824),A.P,k.M0(),A.ab,B.D(k.b4F(3,300,B.v(B.a([k.pE(300,300),k.Ut(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ag,j,A.e,A.j,0,A.p)
case 5:w=k.uI(824,!0)
v=x.p
u=B.v(B.a([k.a96(440,A.bf,3,62,26),k.axA(440,A.bf,2,20),A.b8,k.anV(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bu,new B.a5(j,400,B.B(B.a([new B.a5(440,j,u,j),A.aIv,new B.C(A.i4,k.pE(364,h.e===D.OX?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.UE(2,21),1)],v),A.ag,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aac(824),A.ab,k.bRs(824,2,70),k.coW(824,21),A.P,k.M0(),A.ab,B.D(k.b4F(3,340,B.au(k.pE(340,340),j,j,j),350),1)],x.p),A.ag,j,A.e,A.j,0,A.p)
case 7:w=k.uI(824,!0)
v=B.aY(h.x)
u=Date.now()
u=C.byL(new B.Q(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.O7(i,13,h.ch?B.aY(h.f):A.c,1.2,A.u),A.L,j,j),A.h,v,j,j,j,j,j,j,A.bl,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aV4(h.Q,24,1.15,A.cx,A.O),j,j,j))
v.push(A.b8)
if(k.gawW())v.push(k.awV(230,250))
return B.v(B.a([w,A.ay,B.D(B.B(B.a([new B.a5(230,j,B.v(v,A.ag,j,A.e,A.j,0,A.p),j),B.p(j,j,A.h,B.aY(h.w),j,j,j,j,j,A.acw,j,j,j,1.2),new B.a5(570,j,B.v(B.a([k.a96(570,A.bf,3,62,28),k.coX(570,A.bf,20),A.P,k.anV(!1),A.P,B.au(k.pE(570,330),j,j,j),k.Ut(570),A.T,B.D(k.aLI(2,!1,17),1)],t),A.ag,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ag,j,A.e,A.j,0,A.p)
case 8:w=k.uI(824,!0)
v=h.ch
u=v?B.aY(h.x):B.aY(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.O7(i,13,v?A.x:B.aY(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ab,B.p(j,B.v(B.a([t,A.ar,k.N3(788,A.bf,v?A.x:B.aY(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.h,u,j,j,j,j,j,j,D.bi2,j,j,j),k.b1M(824,A.bf),A.T,B.au(k.pE(824,310),j,j,j),k.Ut(824),A.P,k.M0(),A.T,B.D(k.a6S(3),1)],s),A.ag,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.uI(824,!0),A.aO,new B.am(A.W,j,A.a9,A.q,B.a([k.pE(824,430),B.an(18,k.c0B(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.awa(824,3,66),k.b1Q(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.asY(),A.ay,B.D(k.UE(2,18),1)],w),A.ag,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.uI(824,!0),A.bu,new B.a5(j,500,B.B(B.a([new B.a5(410,j,B.v(B.a([k.abz(k.c.b,B.aY(h).j(0.14),15,B.aY(h)),A.aO,k.b_3(410,4,58,28),k.axD(410,6,20),A.b8],w),A.F,j,A.e,A.j,0,A.p),j),V.aIw,k.pE(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.asY(),A.aO,B.D(k.UE(2,18),1)],w),A.ag,j,A.e,A.j,0,A.p)
case 12:w=k.uI(824,!0)
v=k.pE(824,420)
u=B.hg6(-0.25)
t=B.aY(h.x)
s=B.a([new B.ab(0,A.G,A.x.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aO,new B.am(A.W,j,A.a9,A.q,B.a([v,B.an(22,B.fo(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c0E(i,30,A.c,1,A.cx,A.u),j,j,j),A.h,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bjX,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.awa(824,3,62),k.b1Q(824),A.ab,B.p(j,j,A.h,B.aY(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.aT0(A.l2),A.ay,B.D(k.UE(2,18),1)],r),A.ag,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uI(824,!0)
u=h.w
t=x.p
w=B.a([k.pE(824,380),B.an(j,k.abz(w.b,B.aY(u).j(0.85),15,B.aY(h.f)),j,j,16,j,16,j)],t)
s=k.awa(824,2,60)
r=k.cp8(824,2)
p=k.asY()
o=B.D(k.aLI(2,!1,18),1)
n=B.H(B.aY(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aY(h).j(0.05)
return B.v(B.a([v,A.aO,new B.am(A.W,j,A.a9,A.q,w,j),A.aO,s,r,A.T,p,A.ay,o,A.ab,B.p(j,B.B(B.a([B.bu(B.m(14),k.rM(150,104),A.ao),A.nL,B.D(B.v(B.a([k.abz("RELATED",B.aY(h).j(0.14),12,B.aY(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.au2(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.R,0,A.p),1),B.V(A.eo,B.aY(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.ag,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.uI(824,!0),A.bu,k.a96(824,A.bf,3,62,30),k.axA(824,A.bf,2,22),A.T,k.anV(!1),A.T,B.au(k.pE(824,330),j,j,j),k.aKG(824,A.bf),A.aO,B.D(k.bB1(2,40,21),1)],x.p),A.ag,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.bU(s,new B.o(s,s,s,s,s,new B.a3(A.ax,A.aC,A.w,B.a([B.aY(p),B.aY(q.r)],x.O),s,s),A.n),A.bb),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b2(s,s,s,new C.b5A(B.aY(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.bkr,B.v(B.a([B.D(t.c7o(),1),A.P,B.p(s,s,A.h,B.aY(w),s,s,s,1.4,s,s,s,s,s,s),A.h2,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aV2(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.O7(r,11,B.aY(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hF,A.j,0,s,s)],o),A.ag,s,A.e,A.j,0,A.p),s))
v=B.aY(w)
n.push(B.bZ(0,B.e1(B.b2(s,s,s,new C.bnU(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.aY(p).j(0.75)
v=B.H(B.aY(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hO(B.fF(q,A.A,s,s,A.cm,A.bQ,!1,30,!1,s,30),A.ao))
else o.push(B.V(A.m4,B.aY(w),s,s,s,28))
o.push(A.aa)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.au4(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e1(B.d8(B.p(s,B.B(o,A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.blv,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jB(new B.am(A.W,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b93.prototype={
iJ(d){return C.fWx(d)},
jl(d){return!1}}
C.b92.prototype={
a4(d,e){var w,v=C.fWx(e)
$.W()
w=B.L()
w.r=this.b.gq(0)
w.b=A.ac
w.c=6
return d.aM(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.bqn.prototype={
iJ(d){var w,v,u,t,s,r,q,p,o=new B.eU()
o.dM(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
u.D(new B.b4(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ao(s,o.af()*14)
v.push(w)
r=u.f
if(r!=null)w.bx(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.ao(t,8))
w=d.b
r=w-8
u.D(new B.ao(t,r))
for(;t>0;t-=14){q=new B.ao(t,w-o.af()*14)
v.push(q)
p=u.f
if(p!=null)q.bx(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.ao(0,r))
u.D(new B.bE())
return u},
jl(d){return!1}}
C.b5A.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eU()
k.dM(7)
$.W()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.af()*0.07).gq(0)
q=k.af()
p=k.af()
o=k.af()
n=w.I()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.af()*u
p=k.af()*t
m=50+k.af()*90
w.sap(new B.bR(A.A,0.5,A.w,l,0,B.a([A.IP.j(0.13),A.K],v),l,l).au(0,B.bT(new B.u(q,p),m)))
n=w.I()
s.drawCircle(q,p,m,n)
n.delete()}w.sap(l)},
ar(d){return!1}}
C.bnU.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.ib(u,u,u,u,B.dl(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.cg,u,A.ek,A.cf)
s.f_()
w=d.a
J.bD(w.save())
w.translate(t/2,e.b*0.52)
d.iU(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbh(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.U1.prototype={
S(){return new C.aBn()}}
C.aBn.prototype={
Z(){var w=this
w.a0()
B.h2e(w.a.c,null).by(new C.e7u(),x.g7).by(new C.e7v(w),x.a)
w.a.toString},
gaJv(){var w=D.apX[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gau5(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJv()
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
q=A.k.E(v*p,q,p-q)-q
w=A.k.E(u*o,w,o-w)-w
return new B.a7(q,w,q+s,w+t)},
XP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.n(new C.e7h(r))
t=4
q=r.gau5()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.rv()
m=B.FN(n,null)
i=B.L()
i.Q=A.fM
m.AA(g,q,new B.a7(0,0,0+p,0+o),i)
w=7
return B.b(n.pO().yp(J.fMe(p),J.fMe(o)),$async$XP)
case 7:l=e
w=8
return B.b(l.hf(A.fO),$async$XP)
case 8:k=e
j=r.c
if(j!=null){j=B.a9(j,!1)
i=k
i.toString
j.M(J.f5(J.w7(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.n(new C.e7i(r))
r.c.H(x.q).f.P(D.exv)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XP,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kG,s,s,s,new C.e7o(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bK(!1,D.f7j,s,s,!0,s,s,t.y||r==null?s:t.gc0F(),s,s)],p),s,s,!0,!0,A.zr,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fb0,s,s,s,1,s,!0)
if(r==null)p=A.lL
else{w=B.D(new B.C(A.c4,B.au(new B.fD(t.gaJv(),B.ck(new C.e7p(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.kx,B.jS(s,s,s,new B.w(D.apX[u].a,s,E.aKe,s,s,s,s,s,s,s,s,s),s,new C.e7q(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bq(!0,B.v(B.a([new B.a5(s,40,B.cM(v,s,s,s,s,A.b0,!1),s),B.B(B.a([D.bAp,B.D(B.mg(s,s,s,6,1,new C.e7r(t),t.f),1),D.bA0],p),A.m,s,A.e,A.j,0,s,s),D.f4W,A.ar,B.bK(!1,D.f4H,s,s,!0,s,s,new C.e7s(t,d),s,s)],p),A.m,s,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!1),A.h,D.U0,s,s,s,s,s,s,D.bhn,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.ce(q,A.zr,p,s,!1,!1,s,s)}}
C.b8A.prototype={
a4(d,e){var w
$.W()
w=B.L()
w.Q=A.cm
return d.AA(this.b,this.c,new B.a7(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.Z0.prototype={
S(){var w=$.av(),v=x.A
return new C.aCG(new B.ap(A.as,w),new B.ap(new B.bc("NGMY",A.b2,A.aM),w),new B.co(null,v),new B.co(null,v),A.d.gL(D.a_S),"quote"+1000*Date.now(),B.a([],x.t),B.aZ(x.S),A.L)}}
C.o6.prototype={}
C.aCG.prototype={
gaRd(){var w,v,u=this
if(u.p1)w=new B.ws(1,u.p2,0.9,u.p3).iu().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eEk(w))},
p(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.ty().jV(0,"assets/images/ngmy_logo.png"),$async$Wz)
case 7:q=e
p=J.f5(J.w7(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bzv(new B.pj(p,1),o),$async$Wz)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eDc(r,p))
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
return B.i($async$Wz,v)},
Oa(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Oa=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kG(92,1800,A.ez),$async$Oa)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Oa)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bzv(new B.pj(p,1),n),$async$Oa)
case 9:if(r.c==null){w=1
break}r.n(new C.eDA(r,p))
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
return B.i($async$Oa,v)},
aZs(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aL=w.aA=w.aw=w.Y=w.b4=w.bf=w.y2=0
w.b1=null
w.aZ=0.25
w.b8=null
w.bH=0.5
w.aQ=1
w.c4=w.bP=w.bg=0
w.cT=w.cQ=!1},
aSL(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bwg(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cWC)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bwg(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bwg(C.fHo(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bwg(C.fHo(1-a0*0.5,n,n,n),w)}return a1?C.bwg(C.fHo(-1,255,255,255),w):w},
axI(){var w,v,u=B.ae("\\S+",!0,!1,!1,!1).kx(0,this.d.a.a),t=B.z(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yj(u,v,w)
this.dx.pv(new C.eDK(t),!0)
return t},
b0W(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.axI()
w=C.hN3(e.d.a.a,e.db)
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
return C.hJz(d,k,v,a0,j,e.gaRd(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cn2(){return this.b0W(null)},
C4(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$C4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gm5(),$async$C4)
case 3:w=4
return B.b(B.bN(A.eM,null,x.H),$async$C4)
case 4:w=5
return B.b($.aT.gm5(),$async$C4)
case 5:s=$.aT.ag$.x.h(0,t.r)
r=s==null?null:s.gb6()
if(!(r instanceof B.q2)){u=null
w=1
break}w=7
return B.b(r.lQ(1080/r.gX(0).a),$async$C4)
case 7:w=6
return B.b(e.hf(A.fO),$async$C4)
case 6:q=e
u=q==null?null:J.f5(A.dD.gaO(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$C4,v)},
a7I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eCW(q))
t=4
w=7
return B.b(q.C4(),$async$a7I)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cR.gcs().aG(p)
n=C.AE(null,null,null,null,D.nF,6,!1,null,null,null,null,null,C.cy(),null,!1,null,"NGMY Quote",null,null,B.a([q.b0W(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a9(l,!1).M(n)
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
if(q.c!=null)q.n(new C.eCX(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7I,v)},
zv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eCU(q))
t=4
w=7
return B.b($.aT.gm5(),$async$zv)
case 7:w=8
return B.b(B.bN(A.o6,null,x.H),$async$zv)
case 8:w=9
return B.b($.aT.gm5(),$async$zv)
case 9:k=$.aT.ag$.x.h(0,q.f)
p=k==null?null:k.gb6()
if(!(p instanceof B.q2))throw B.R("The picture is not ready yet.")
w=10
return B.b(p.lQ(1080/p.gX(0).a),$async$zv)
case 10:o=e
w=11
return B.b(o.hf(A.fO),$async$zv)
case 11:n=e
if(n==null)throw B.R("Could not make the picture.")
w=12
return B.b(A5.ae6(J.f5(A.dD.gaO(n)),"ngmy_quote.png","image/png"),$async$zv)
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
if(q.c!=null)q.n(new C.eCV(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zv,v)},
cat(){var w=this.p4
w.toString
return B.ck(new C.eDt(this,w))},
aVb(d,e){var w=null
return B.bn(w,w,w,w,w,D.eHl,w,w,!0,new B.b3(4,B.m(16),N.vM),w,w,w,w,w,D.rr,!0,w,w,w,w,new B.b3(4,B.m(16),D.aQB),w,w,w,w,w,w,w,w,A0.C2,e,w,w,w,w,w,w,w,D.eMp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wU(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b3,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aKZ,w,w,w))
return new B.C(D.bfj,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aVa(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.a1,!0,w,d,A.h,w,0,w,w,w,w,w,A.jm),A.h,w,w,new B.o(D.rr,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uN(d){return this.aVa(d,A.bC)},
nz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.ta:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j1,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j1,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aH(r,B.dj(r,B.B(s,A.m,r,A.e,A.R,0,r,r),r,r,A.ba,new B.o(w,r,u,v,r,p,A.n),A.hS,r,r,r,A.DP,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
adq(d,e,f){return this.nz(d,null,e,f)},
au9(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b3.j(0.28):A.c.j(0.05),t=g?A.ex:A.bG,s=x.p
v=B.a([B.dj(w,d,w,w,A.ba,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hS,w,e,w,new B.N(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aH(w,new B.a5(j,w,B.v(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aVe(d,e,f,g,h,i){return this.au9(d,e,f,g,h,5,i)},
jN(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eEt,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aH(u,D.dQl,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eDG(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aK6,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.W0,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asD(w).cAz(A.b3,A.bG,A.b3.j(0.2),A.c,D.eoM,4)
return new B.C(A.wr,B.v(B.a([s,B.a7W(B.mg(u,u,u,g,f,new C.eDH(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
afq(d,e,f,g,h,i){return this.jN(d,e,f,g,h,null,i)},
afQ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dv:B.aY(u)
r=d==u
q=r?A.c:A.b9
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.btA:o
n.push(B.aH(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c1(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eDJ(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.c9(A.bJ,n,A.bx,10,10)},
bF6(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_S
else{v=x.a8
w=B.z(new B.a4(D.a_S,new C.eCM(o),v),v.k("G.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aVb("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eCN(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4E,!0,A.a5,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aVb("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eCO(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.am,n,n,n,n)
t=o.wU("DESIGNS",A.t_)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.czX[q]
r.push(new B.C(A.kx,o.adq(p,o.x===p,new C.eCP(o,p)),n))}return B.v(B.a([v,A.T,u,t,B.ci(B.B(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.b0),A.ab,new B.a5(n,118,B.hH(n,new C.eCQ(o,w),w.length,n,n,A.b0,new C.eCR(),!1),n),A.P,o.aVa(B.v(B.a([B.ix(A.b3,n,n,A.ah,!0,new C.eCS(o),n,D.eXL,n,D.eUo,o.k3),B.ix(A.b3,n,n,A.ah,!0,new C.eCT(o),n,n,n,D.eRN,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acZ)],s),A.F,n,A.e,A.j,0,A.p)},
cve(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.axI()
if(a7.length===0)return a5.uN(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Hq,a6,a6,a6))
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
A.d.fm(m)
l=m.length!==0&&A.d.ea(m,new C.eE9(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eEg(a5)
j=new C.eEi()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Hq,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b1(11,11)
f=u.t(0,h)?A.b3.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ex:A.bG
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.am(w,a0,a0+e[0].length)
a0=B.ae("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a3
o.push(B.aH(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c1(d,d,d,d),new B.bv(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Ko,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eEa(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uN(B.c9(A.bJ,o,A.r3,6,6))
i=B.a([a5.nz("All words",K.ah0,!1,new C.eEb(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.adq("Sentence "+a3,!1,new C.eEc(a5,a7,v,a2)))
a2=a3}}i.push(a5.adq("Clear picks",!1,new C.eEd(a5)))
i=B.c9(A.bJ,i,A.bx,8,8)
g=a5.wU("SIZE OF THE PICKED WORDS",D.ags)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.d0I[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eEe(e,k)
f.push(a5.adq(a0.b,l===a4,e))}return B.v(B.a([q,A.T,o,A.T,i,g,B.c9(A.bJ,f,A.bx,8,8),A.T,a5.nz("Make every word normal",A.mJ,!1,new C.eEf(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cqz(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bmw,B.d(A.d.kZ(D.arA,new C.eDT(q)).b,p,p,p,p,p,p,D.eFW,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.ck(new C.eDU(q)),l=q.wU("HIGHLIGHT BEHIND THE WORDS",A.XO),k=q.p1?-1:q.k4
k=q.afQ(k,new C.eDV(q),D.cJF)
w=q.p1
v=w?A.c:A.b9
n=B.a([n,A.T,m,l,B.c9(A.bJ,B.a([k,B.aH(p,B.p(p,D.bww,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.eA6,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDY(q),p,p,p,p,p,p,!1,A.ae)],o),A.r3,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Hq,p,p,p)],o)
if(q.gaRd()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.afq("Colour",l,0,360,new C.eDZ(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.afq("Shade",k,0.15,0.9,new C.eE_(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jN("Strength",l,0.15,1,new C.eE0(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uN(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wU("LOOK",A.xg))
m=B.a([q.nz("Bold",I.agp,q.fy,new C.eE1(q)),q.nz("Italic",I.agq,q.go,new C.eE2(q))],o)
for(u=0;u<3;++u){l={}
k=D.cB2[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.ta:p
w=w?p:A.c.j(0.07)
s=new B.b1(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aH(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c1(r,r,r,r),new B.bv(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eE3(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.c9(A.bJ,m,A.r3,8,8))
n.push(q.wU("COLOUR",A.nx))
n.push(q.afQ(q.fx,new C.eE4(q),D.cTP))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Hq,p,p,p))
n.push(q.wU("SIZE AND PLACE",A.EI))
m=q.fr
m=q.jN("Text size",m,0.5,1.6,new C.eDW(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uN(B.v(B.a([m,q.jN("Up / down",l,0.12,0.5,new C.eDX(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cau(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b3.j(0.6),A.r,1.6)
u=B.a([A.b3.j(0.18),A.by.j(0.12)],x.O)
return B.aH(p,B.p(p,B.v(B.a([B.p(p,D.bBL,A.h,p,p,D.aTu,p,62,p,p,p,p,p,62),A.ay,D.eVw,A.ar,D.eZK],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.rr,p,v,w,p,new B.a3(A.a4,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.biz,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaVd(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.B(B.a([B.bu(B.m(12),new B.a5(46,62,B.fF(o,A.A,120,p,A.cm,A.bQ,!1,p,!1,p,p),p),A.ao),A.bd,B.D(B.v(B.a([D.eV6,A.P,B.c9(A.bJ,B.a([q.nz("Change",A.kE,!1,q.gaVd()),q.nz("Remove",A.e7,!1,new C.eDx(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cQC[t]
u.push(q.nz(s.b,s.a,q.at===t,new C.eDy(q,t)))}u=B.c9(A.bJ,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bVd(o)
break A}if(1===r){s=q.bUi()
break A}if(2===r){s=q.bB0()
break A}if(3===r){s=q.bH7()
break A}s=q.bD5()
break A}return B.v(B.a([v,A.ab,u,A.ay,s,A.T,new B.bI(A.a4,p,p,q.nz("Reset the whole picture",A.mJ,!1,new C.eDz(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bVd(d){var w=this,v=x.p
return B.v(B.a([B.c9(A.bJ,B.a([w.nz("Auto enhance",E.Xr,!1,new C.eDp(w)),w.nz("Make words easy to read",A.og,!1,new C.eDq(w))],v),A.bx,8,8),A.ay,B.ck(new C.eDr(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bUi(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jN("Exposure",n,-1.5,1.5,new C.eD3(o),0,A.k.a9(n,1))
w=o.RG
w=o.jN("Brightness",w,-0.5,0.5,new C.eD4(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jN("Contrast",v,0.4,2,new C.eD5(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jN("Fade",u,0,1,new C.eD6(o),0,""+A.k.U(u*100))
t=o.aA
t=o.jN("Spotlight",t,0,1,new C.eD7(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jN("Darken",s,0,0.85,new C.eD8(o),0,""+A.k.U(s*100))
r=o.b4
r=o.jN("Vignette",r,0,0.9,new C.eD9(o),0,""+A.k.U(r*100))
q=o.aC
q=o.jN("Shade behind words",q,0,0.85,new C.eDa(o),0,""+A.k.U(q*100))
p=o.aL
return o.uN(B.v(B.a([n,w,v,u,t,s,r,q,o.jN("Shade top & bottom",p,0,0.85,new C.eDb(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bB0(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jN("Colour strength",q,0,2.2,new C.eCp(s),1,""+A.k.U(q*100))
w=s.to
w=s.jN("Warmth",w,-1,1,new C.eCq(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jN("Tint",v,-1,1,new C.eCr(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uN(B.v(B.a([q,w,v,s.jN("Shift colours",u,-180,180,new C.eCs(s),0,""+A.k.U(u)+"\xb0"),new B.bI(A.a4,r,r,s.nz("Negative",D.brB,s.y1,new C.eCt(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wU("COLOUR WASH",A.Lk)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.aqm)
t=B.a([u,v,s.afQ(w,new C.eCu(s),q),A.P],t)
if(s.b1!=null){q=s.aZ
t.push(s.uN(s.afq("Wash strength",q,0,0.9,new C.eCv(s),""+A.k.U(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bH7(){var w,v,u,t,s,r=this,q=r.y2
q=r.jN("Blur",q,0,24,new C.eCY(r),0,A.o.u(A.k.U(q)))
w=r.bf
w=r.jN("Soft focus",w,0,1,new C.eCZ(r),0,""+A.k.U(w*100))
v=r.aw
u=x.p
v=r.uN(B.v(B.a([q,w,r.jN("Film grain",v,0,1,new C.eD_(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wU("LIGHT LEAK",H.agn)
q=r.b8
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.df(D.aqm,0,B.dK(8,"count",s),s))
u=B.a([v,w,r.afQ(q,new C.eD0(r),t),A.P],u)
if(r.b8!=null){q=r.bH
u.push(r.uN(r.afq("Leak strength",q,0,1,new C.eD1(r),""+A.k.U(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bD5(){var w,v,u,t,s=this,r=s.aQ
r=s.jN("Zoom",r,1,3,new C.eCz(s),1,""+A.k.U(r*100)+"%")
w=s.bg
w=s.jN("Left / right",w,-1,1,new C.eCA(s),0,""+A.k.U(w*100))
v=s.bP
v=s.jN("Up / down",v,-1,1,new C.eCB(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.v(B.a([s.uN(B.v(B.a([r,w,v,s.jN("Turn",u,-180,180,new C.eCC(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.c9(A.bJ,B.a([s.nz("Turn 90\xb0",D.bta,!1,new C.eCD(s)),s.nz("Flip sideways",A.Ew,s.cQ,new C.eCE(s)),s.nz("Flip upside down",A.Ew,s.cT,new C.eCF(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bXQ(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.v(B.a([D.eoY,A.T,D.eWQ,A.ay,B.aH(w,B.p(A.A,D.ep8,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.ta,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDs(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.rr,w,u,v,w,w,A.n),w,w,w,w,A.c4,w,w,w)},
bV5(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eDk(p),m=x.p,l=B.B(B.a([D.bmC,p.nz("Reset",A.mJ,!1,new C.eDg(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Hq,o,o,o),j=p.wU("SHAPE",A.ahu),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.AI[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aVe(n.$2(t,p.cy),62,u.b,s===t,new C.eDh(v,p),62))}}i=B.c9(A.bJ,i,A.bx,8,8)
v=p.wU("RING",A.rV)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.AD[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aVe(n.$2(p.cx,t),62,r.b,q===t,new C.eDi(s,p),62))}u=B.c9(A.bJ,u,A.bx,8,8)
s=p.CW
return B.v(B.a([l,A.av,k,j,i,v,u,A.ab,p.uN(p.jN("Size",s,0.12,0.4,new C.eDj(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aY5(d){return new B.a5(null,d,new B.fD(0.5625,B.ck(new C.eDD(this)),null),null)},
cpT(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.ta:q
t=new B.b1(14,14)
s=D.cSy[w]
r=v?A.c:A.az
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bH(1,A.bo,B.aH(A.c5,B.dj(q,B.v(B.a([r,A.d4,new B.pO(A.eb,A.A,A.h,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.ba,new B.o(q,q,q,new B.bv(t,t,t,t),q,u,A.n),D.bee,q,q,q,A.hC,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eDM(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bgl,A.lZ,q,q,q)},
aMd(){var w,v,u=this,t=null,s=u.cpT(),r=u.as
A:{if(0===r){w=u.bF6()
break A}if(1===r){w=u.cve()
break A}if(2===r){w=u.cqz()
break A}if(3===r){w=u.cau()
break A}if(4===r){w=u.bV5()
break A}w=u.bXQ()
break A}v=x.p
return B.bu(A.pQ,B.ed(B.v(B.a([s,B.D(B.cM(B.a([w],v),t,D.bho,t,t,A.ak,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.U0,!0),A.ao)},
aIt(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc15(),p=B.m(16)
q=B.D(B.aH(r,B.p(r,D.eph,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.b9,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbGJ()
w=B.m(16)
v=B.a([new B.ab(0,A.G,A.by.j(0.35),A.cs,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.etO)
else t.push(D.bvD)
t.push(A.aa)
t.push(D.bo7)
return B.p(r,B.B(B.a([q,A.aw,B.D(B.aH(r,B.p(r,B.B(t,A.m,r,A.b7,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.ta,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aSE,r,r,r,r,G.acN,r,r,r)},
aVc(){var w=null
return new B.C(U.VW,B.B(B.a([B.aF(w,w,w,w,A.m7,w,w,w,new C.eD2(this),w,w,w,w,w,w),D.fa1,A.b8,D.bDX],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.ce(w,A.zr,B.bq(!0,B.ck(new C.eEj(this)),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)}}
C.bc6.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eU()
m.dM(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.W()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gq(0)
r=B.L()
r.r=A.x.j(0.2*s).gq(0)
for(s=d.a,q=0;q<u;++q){p=m.af()*w
o=m.af()*v
n=((q&1)===0?t:r).I()
s.drawRect(B.c8(new B.a7(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.qT.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lO.prototype={}
C.yD.prototype={
ac(){var w=this
return B.E(["at",w.a.a5().ab(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nm.prototype={}
C.vj.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a62.prototype={}
C.aoF.prototype={}
C.Zw.prototype={
S(){return new C.aEB(new B.ap(A.as,$.av()),B.kb(!0,null,!0,!0,null,null,!1),D.dgo,B.a([],x.s),B.eN([D.Gm],x.Q))}}
C.aEB.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.f.p()
this.a2()},
Z7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Z7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B2(90,700,700,A.ez),$async$Z7)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Z7)
case 8:p=e
if(r.c!=null)r.n(new C.eKe(r,p,q))
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
return B.i($async$Z7,v)},
Za(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Za=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hR().aDS(78,n,1100,1100),$async$Za)
case 7:q=e
if(J.cj(q)){w=1
break}p=B.bj(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.aa(p)>=20){w=9
break}w=10
return B.b(o.f8(),$async$Za)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.cb(p,"data:"+k+";base64,"+A.cR.gcs().aG(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eKf(r,p))
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
return B.i($async$Za,v)},
b_2(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fF(A.cw.aG(A.d.gaj(d.split(","))),A.A,u,u,A.cm,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bcH},
bVb(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cl6(C.fjv(w,this.b_2(d),f),g)},
a9Y(d,e,f,g,h){var w=null,v=new C.eKc(f,e),u=new C.eKd(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b3.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.am(A.W,w,A.a9,A.h,B.a([B.au(B.V(f?A.Ap:A.L8,A.c2,w,w,w,26),w,w,w),D.dVm],x.p),w),w)
else p=this.bVb(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.a1,!0,s,B.aI(!1,r,!0,B.p(w,B.B(B.a([B.D(B.au(p,w,w,w),1),D.bvk],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.m_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKb(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ad)},
aSR(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bu(B.m(8),B.fF(A.cw.aG(A.d.gaj(h.split(","))),A.A,p,p,A.cm,A.bQ,!1,30,!1,p,30),A.ao)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.bm.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.el,p,p,p,20):q
n=B.a([n,A.aa,B.D(B.d(e,p,1,A.a2,p,p,p,A.a4J,p,p,p),1)],x.p)
if(f!=null)n.push(B.aH(p,D.YJ,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.a1,!0,u,B.aI(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lX,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ad)},
a6d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a6d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fmV(),$async$a6d)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eJV(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a6(n)
if(r.c!=null)r.n(new C.eJW(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6d,v)},
abJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abJ=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eJY(r))
w=1
break}if(r.x==null){m=B.ae("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eJZ(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eK_(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cb(p,h)}w=7
return B.b(C.fic(q,r.cx,j,new C.aZ_(r.z,r.Q,r.as,r.at),new C.eK0(r),i,m,p,k),$async$abJ)
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
if(p!=null)B.a9(p,!1).M(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a6(e)
if(r.c!=null)r.n(new C.eK1(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.et,g).w
g=B.aG(d,A.bR,g).w
w=B.au(B.p(h,h,A.h,h,h,new B.o(A.b9,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aH(h,B.p(h,D.bys,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bm.j(0.5),A.J,24)],v),D.bH5,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eKs(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.YJ,h,h,h,i.ax?h:new C.eKt(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbwa()
v=B.a([new B.ab(0,A.G,A.b3.j(0.45),A.J,10)],v)
s.push(B.hq(B.aD(!1,A.a1,!0,h,B.aI(!1,h,!0,B.p(h,B.V(i.e==null?A.uy:A.hq,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uR,A.a6),h,40,h,h,h,h,h,40),A.cH,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cH,h,h,A.ad),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bn(h,h,h,h,h,h,h,h,!0,new B.b3(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b3(4,B.m(16),D.aQ8),h,h,h,h,h,h,h,h,R.Hf,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.kx,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aKt,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eKu(i)
s=i.aSR(A.l3,q,r,i.gcaV(),s)
r=i.z
r=B.D(i.a9Y(new C.eKw(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ar,B.B(B.a([r,A.bp,B.D(i.a9Y(new C.eKx(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eKy(i)
s=i.aSR(A.uw,r,p,i.gcb2(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.a9Y(new C.eKz(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.ay,D.f_T,A.av,D.f2z,A.bu,u,A.P,D.f15,A.ay,v,A.bu,B.B(B.a([q,A.aw,B.D(B.v(B.a([s,A.ar,B.B(B.a([p,A.bp,B.D(i.a9Y(new C.eKA(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.f4c],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b6i,A.r,1)
w=C.aeE(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bI(A.a4,h,h,B.p(h,B.B(B.a([D.bzx,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eLb,h,h,h),B.aI(!1,h,!0,D.dQz,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eKB(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b0k,h,u,v,h,h,A.n),h,h,h,h,D.bg0,h,h,h),h)],t))}o.push(A.bu)
o.push(D.eSt)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cLG[m]
v=i.ch===l?A.b3:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.az:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bH(1,A.bo,new B.C(A.jH,B.aH(h,B.dj(A.A,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.ba,new B.o(v,h,new B.c1(k,k,k,k),h,h,h,A.a6),A.eL,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eKC(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bu)
o.push(D.f8m)
o.push(A.P)
o.push(B.ck(new C.eKD(i)))
o.push(A.bu)
o.push(D.eZb)
o.push(A.P)
w=B.a([i.b1J("auto","Let AI choose",A.dQ,A.NO)],t)
for(v=x.O,m=0;m<11;++m){j=D.uW[m]
u=j.d
w.push(i.b1J(j.a,j.b,j.c,B.a([B.aY(A.d.gL(u).a),B.aY(A.d.gL(u).b)],v)))}o.push(B.c9(A.bJ,w,A.bx,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.bm.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.ix(h,A.bm,h,h,h,new C.eKv(i),D.buM,D.f7E,h,D.eUA,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aJK,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gc19()
v=B.fh(h,h,A.b3,A.b3.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b6(B.m(18),A.X),h,h,h,h,h)
u=i.ax
t=u?D.etE:A.EZ
o.push(new B.a5(h,54,B.lh(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ow,h,h,h),w,v),h))
return new B.C(new B.N(0,0,0,f.f.d),B.p(h,B.bq(!0,B.ci(B.v(o,A.ag,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.un,h,h,A.ak),!0,!1,A.ah,!0,!1),A.h,h,new B.aW(0,680,0,g.a.b*0.92),D.a7h,h,h,h,h,h,h,h,h),h)},
bIb(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eK2(this,p,d)
if(d===D.Bl)return new C.aBc(p,o,q)
w=B.m(16)
v=p?E.uR:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.az:A.bG,A.r,1)
s=B.V(p?A.en:C.hn4(d),A.c,q,q,q,20)
r=C.hn5(d)
return B.aH(q,B.dj(q,B.v(B.a([s,A.av,B.f_(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.eb)],x.p),A.m,q,A.b7,A.j,0,A.p),q,q,A.ba,new B.o(u,q,t,w,q,v,A.n),A.hS,q,64,q,A.ho,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b1J(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.af:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a3(A.a4,A.a7,A.w,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aH(v,B.dj(v,B.B(B.a([w,L.H9,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a3,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.ba,new B.o(s,v,r,t,v,v,A.n),A.eL,v,v,v,L.ae2,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eKh(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Zv.prototype={
S(){return new C.aEA(new B.ap(A.as,$.av()))}}
C.aEA.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
abK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abK=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.aa(a0)<3){r.n(new C.eJO(r))
w=1
break}B.eH()
r.n(new C.eJP(r))
t=4
q=C.hNX(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ae("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hNH(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eJQ(r,q))
w=1
break}k=r.c
if(k!=null)B.a9(k,!1).M(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ae("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fH4()
f=$.BD.h(0,k.a)
o=f==null||J.cj(f)?null:J.fj(f)
if(o==null){r.n(new C.eJR(r))
w=1
break}n=C.hNF(o,r.a.c)
C.hNB(r.a.c.a)
$.fGm=!0
k=r.c
if(k!=null)B.a9(k,!1).M(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fJH(j)
h=C.fJI(r.a.c)
e=C.fJJ(r.a.c)
w=7
return B.b(C.byr(k,r.a.c.a,j,h,new C.eJS(r),i,e,a0),$async$abK)
case 7:m=a3
k=r.c
if(k!=null)B.a9(k,!1).M(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a6(a1)
if(r.c!=null)r.n(new C.eJT(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.et,i).w
i=B.aG(d,A.bR,i).w
w=B.au(B.p(j,j,A.h,j,j,new B.o(A.b9,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ahL,A.h,j,j,D.aSk,j,34,j,j,j,j,j,34),A.aw,D.bn9],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,R.aKa,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bn(j,j,j,j,j,j,j,j,!0,new B.b3(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b3(4,B.m(16),An.a6N),j,j,j,j,j,j,j,j,R.Hf,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aKt,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cIe[q]
o=A.c.j(0.06)
n=k.e?j:new C.eJU(k,p)
r.push(B.mN(j,o,new B.w(p,j,At.QX,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vM,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.T,B.c9(A.bJ,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ab,B.d(u,j,j,j,j,j,j,D.aJK,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc1a()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bm.j(0.5),A.f2.j(0.5)],x.O):D.ch9
o=B.a([new B.ab(0,A.G,A.bm.j(0.35),A.cs,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dQv:D.bz6
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.a1,!0,j,B.aI(!1,s,!0,B.es(B.B(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.ja,j,j,j)],v),A.m,j,A.b7,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a3(A.a4,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ad))
return new B.C(new B.N(0,0,0,h.f.d),B.p(j,B.bq(!0,B.ci(B.v(w,A.ag,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.un,j,j,A.ak),!0,!1,A.ah,!0,!1),A.h,j,new B.aW(0,680,0,i.a.b*0.85),D.a7h,j,j,j,j,j,j,j,j),j)}}
C.aZ_.prototype={}
C.aBc.prototype={
S(){return new C.bgH(null,null)}}
C.bgH.prototype={
gaua(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.p0,null,1,null,v)
w.cD(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gaua().p()
this.bqf()},
B(d){var w=null,v=this.a.d
return B.aH(w,B.c3(this.gaua(),new C.e2j(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.bej.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cND[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
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
C.ape.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.XT.prototype={
S(){return new C.ayF()}}
C.ayF.prototype={
gafN(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aeR(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzg(){var w=this.e
return w===$?this.e=C.fJH(this.a.c).t(0,D.Bl):w},
a60(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a60=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.dby(s))
u=3
r=A.d.kZ(D.uW,new C.dbz(s))
q=B.d7(C.fJH(s.a.c),x.Q)
l=q
J.hD(l,D.Bl)
p=l
if(s.gzg())J.cb(p,D.Bl)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzg()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fJI(i.c)
g=C.fJJ(s.a.c)
w=6
return B.b(C.byr(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a60)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aeR(q,s.gafN())
f=q==null?null:q.b
n=f==null?s.gafN():f
if(!J.y(n,r.a)&&!s.gzg())throw B.R("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a9(q,!1).M(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a6(d)
if(s.c!=null)s.n(new C.dbA(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a60,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aQ:A.aj,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dbD(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.V(A.ct,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uW[w]
u=o.gafN()
t=o.f?n:new C.dbE(o,v)
f.push(new C.boZ(v,u===v.a,t,n))}f=B.lK(1.25,f,3,10,10,n,A.dL,!0)
u=B.m(18)
t=o.gzg()?D.bJQ:n
if(o.gzg())s=n
else s=m?A.bj:A.bN
r=B.V(A.dQ,o.gzg()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzg()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzg()?A.af:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzg()
f=B.a([f,A.ay,B.p(n,B.B(B.a([r,A.aw,q,B.fEf(n,A.c,n,A.bH,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dbF(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acQ,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.eLt,n,n,n)],g))
f=B.ci(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.Kd,n,n,A.ak)
u=o.f?n:o.gbv9()
t=B.bk(A.K,n,n,n,n,n,A.ah,n,new B.b6(B.m(16),A.X),n,n,n)
s=B.m(16)
return B.bq(!0,B.p(n,B.v(B.a([new B.C(D.bj2,e,n),new B.dm(1,A.cl,f,n),new B.C(A.DV,new B.a5(1/0,50,B.bL(B.es(B.au(o.f?A.qW:D.f0k,n,n,n),n,new B.o(n,n,n,s,n,D.bIn,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rL,n,n,n,n),!0,!1,A.ah,!0,!0)}}
C.boZ.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.aY(s),B.aY(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.aY(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kQ,w,w,B.V(v.c,A.af,w,w,w,18),w),new B.bI(A.lf,w,w,B.d(v.b,w,w,w,w,w,w,D.eLr,w,w,w),w)],x.p)
if(q)v.push(D.aOg)
return B.aH(w,B.dj(w,new B.am(A.W,w,A.a9,A.q,v,w),w,w,A.ba,new B.o(w,w,p,t,s,new B.a3(A.ax,A.aC,A.w,r,w,w),A.n),A.eL,w,w,w,A.ck,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e2g.prototype={
aBv(d,e,f){return e+"@"+A.a.aS(A.o.fG(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vH(d,e){return this.aBv(0,e,null)}}
C.aJ7.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aYW.prototype={
B(d){var w,v,u=null,t=C.fIx(this.c)
if(t==null)w=D.bbt
else{w=B.aG(d,u,x.w).w.cA1(D.bfx,D.esT)
v=this.d
w=B.tX(B.e1(B.alE(!1,t,!1,v,!1,390),!v,u),w)}return B.f_(A.A,new B.a5(416,870,new C.bik(w,u),u),A.h,A.dq)}}
C.bik.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cYe[w]
u=new B.b1(3,3)
s.push(new B.cG(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajE,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cZk[w]
u=new B.b1(3,3)
s.push(new B.cG(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajE,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.bU(t,new B.o(t,t,t,B.m(64),D.cyM,D.bGO,A.n),A.bb),0,0,0))
s.push(B.bZ(3,B.bU(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.bb),3,3,3))
s.push(B.bZ(13,B.bu(B.m(51),B.ed(this.c,A.x,!0),A.ao),13,13,13))
u=B.m(20)
s.push(B.an(t,B.au(B.p(D.aOr,B.p(t,t,A.h,t,t,D.aSC,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bu(B.m(51),D.bcN,A.ao),!0,t),13,13,13))
s.push(B.an(22,B.e1(B.au(B.p(t,t,A.h,t,t,new B.o(A.af,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.W,t,A.a9,A.h,s,t)}}
C.kZ.prototype={
oO(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cy(),f=C.cy(),e=m.r
f=C.ei(A.L,!1,e.l(),A.aA,"",k,42,A.bi,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bc,j,2,"Your Presentation Title",0,0,"",D.me,D.cO,0.84,0.08,0.26)
w=C.cy()
v=m.w
w=C.ei(A.L,!1,v.l(),A.aA,"",k,20,A.bi,A.a3,"",0.12,w,l,"","",0,!1,"",0,D.bc,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.db,D.cO,0.76,0.12,0.56)
u=C.cy()
t=m.d
s=x.u
t=C.qU(i,l,0,0,B.a([f,w,C.ei(A.bf,!1,4279310375,A.aA,"",t.j(0.8).l(),24,A.bi,A.a3,"",0.006,u,l,"","",0,!1,"",0,D.fl,t.l(),3,"",0,0,"",D.cd,D.eW,0.3,0.35,0.72)],s),C.cy(),D.md,"","","Welcome",D.db)
u=C.cy()
u=C.ei(A.bf,!1,e.l(),A.aA,"",k,34,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bc,j,2,"Agenda",0,0,"",D.cd,D.cO,0.84,0.08,0.08)
w=C.cy()
w=C.qU(i,l,0,0,B.a([u,C.ei(A.bf,!0,v.l(),A.aA,"",k,22,A.bi,A.a3,"",0.6,w,l,"","",0,!1,"",0,D.bc,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tp,D.cO,0.8,0.1,0.26)],s),C.cy(),D.md,"","","Agenda",D.db)
u=C.cy()
u=C.ei(A.bf,!1,e.l(),A.aA,"",k,32,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bc,j,2,"Main Idea",0,0,"",D.cd,D.cO,0.84,0.08,0.08)
f=C.cy()
f=C.qU(i,l,0,0,B.a([u,C.ei(A.bf,!0,v.l(),A.aA,"",k,21,A.bi,A.a3,"",0.62,f,l,"","",0,!1,"",0,D.bc,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cd,D.cO,0.8,0.1,0.26)],s),C.cy(),D.md,"","","Key Point 1",D.db)
u=C.cy()
u=C.ei(A.bf,!1,e.l(),A.aA,"",k,30,A.bi,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bc,j,2,"Compare & Contrast",0,0,"",D.cd,D.cO,0.84,0.08,0.08)
r=C.cy()
r=C.ei(A.bf,!0,v.l(),A.aA,"",k,18,A.bi,A.a3,"",0.62,r,l,"","",0,!1,"",0,D.bc,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cO,0.4,0.08,0.24)
q=C.cy()
q=C.qU(i,l,0,0,B.a([u,r,C.ei(A.bf,!0,v.l(),A.aA,"",k,18,A.bi,A.a3,"",0.62,q,l,"","",0,!1,"",0,D.bc,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cd,D.cO,0.4,0.52,0.24)],s),C.cy(),D.md,"","","Key Point 2",D.db)
r=C.cy()
r=C.ei(A.L,!1,e.l(),A.aA,"",k,48,A.bi,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bc,j,2,h,0,0,"",D.db,D.cO,0.8,0.1,0.32)
e=C.cy()
p=C.AE(l,l,l,l,D.Bh,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qU(i,l,0,0,B.a([r,C.ei(A.L,!1,v.l(),A.aA,"",k,22,A.bi,A.a3,"",0.1,e,l,"","",0,!1,"",0,D.bc,j,2,"Questions?",0,0,"",D.cd,D.cO,0.7,0.15,0.58)],s),C.cy(),D.md,"","",h,D.db)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Dx.prototype={
bx(d){return this.e.$1(d)}}
C.ek.prototype={}
C.iQ.prototype={}
C.Do.prototype={
gaH1(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aeE(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1m(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Do(v,u,t,d==null?w.d:d)},
Ep(d){return this.a1m(null,d,null,null)},
aAh(d){return this.a1m(null,null,null,d)},
cA_(d,e){return this.a1m(d,e,null,null)},
b6L(d){return this.a1m(d,null,null,null)},
b6S(d){return this.a1m(null,null,d,null)}}
C.LU.prototype={
S(){return new C.bg3(new B.eL(0,$.av()),null,null)}}
C.bg3.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(new C.dM2(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.kp(0)
else v.d.sq(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.av()
w.O$=0
this.bpI()},
B(d){var w=C.aeE(this.a.c.a)
if(w==null)w=A.d.gL(D.Fi)
return B.ck(new C.dM1(this,w,C.fYk(this.a.c.d)))}}
C.bnz.prototype={
B(d){return B.nr(A.SE,this.e,new C.eJ1(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bbc.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOJ(d,e,v)
break
case"confetti":w.bBv(d,e,v)
break
case"crown":w.bD6(d,e,v)
break
case"aurora":w.bwe(d,e,v)
break
case"champagne":w.bzn(d,e,v)
break
case"diamonds":w.bFf(d,e,v)
break
case"starburst":w.cnH(d,e,v)
break
case"balloons":w.bws(d,e,v)
break
case"galaxy":w.bJS(d,e,v)
break
case"redcarpet":w.ceZ(d,e,v)
break
case"coins":w.bAT(d,e,v)
break
case"lanterns":w.bTR(d,e,v)
break
case"hearts":w.bRx(d,e,v)
break
case"petals":w.cam(d,e,v)
break
case"butterflies":w.byp(d,e,v)
break
case"neon":w.bXA(d,e,v)
break
case"disco":w.bFq(d,e,v)
break
case"sunrise":w.cpa(d,e,v)
break
case"pearls":w.c9q(d,e,v)
break
case"snow":w.cnp(d,e,v)
break
case"laurel":w.bTX(d,e,v)
break
case"ribbons":w.chs(d,e,v)
break
case"kente":w.bTG(d,e,v)
break
case"trophy":w.csH(d,e,v)
break
case"shooting":w.clh(d,e,v)
break
case"bokeh":w.bwJ(d,e,v)
break
case"orbits":w.c78(d,e,v)
break
case"flowers":w.bJa(d,e,v)
break
case"music":w.bXl(d,e,v)
break
case"mandala":w.bVN(d,e,v)
break
case"sparklers":w.cnx(d,e,v)
break
case"city":w.bAc(d,e,v)
break}},
qJ(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.L()
v.r=g.j(A.k.E(h,0,1)).gq(0)
v.a=A.n3
u=new B.aO(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.b4(w,s))
u.D(new B.cO(w,t,w+f,t))
u.D(new B.cO(w,t,w,t+f))
u.D(new B.cO(w,t,w-f,t))
u.D(new B.cO(w,t,w,s))
u.D(new B.bE())
d.aM(u,v)
d.ae(e,f*0.18,v)},
lg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cQ(q,v)*2.5)+C.cQ(q,u)*6.28)+1)/2
this.qJ(d,new B.u(C.cQ(q,t)*o,C.cQ(q,s)*n),m*(0.006+0.014*C.cQ(q,r))*(0.5+p),h,p*p)}},
aOJ(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lg(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bH,A.aZ],w),B.a([A.ie,A.by],w),B.a([A.ev,A.aY],w),B.a([A.c,A.au],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bt(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cQ(h,1))
f=g+c0*(C.cQ(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cQ(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.l4(new B.u(g,c1),new B.u(f,e),A.co.av(0,i/0.22))
a0.toString
$.W()
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.sap(new B.a3(A.a4,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).au(0,B.qW(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bL
a2=B.l4(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.I()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a2.r=A.c.gq(0)
a3=a2.I()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.co.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cQ(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gq(0)
a8.z=new B.hy(A.G,o)
a3=a8.I()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cQ(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cQ(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gq(0)
b9.c=u
b9.d=A.bL
b9.a=A.n3
a3=b9.I()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cQ(h,b1+120)>0.5)this.qJ(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bBv(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.L()
a0.sap(new B.a3(A.ax,A.aC,A.w,D.cTw,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).au(0,new B.a7(0,0,f,e)))
a1.aX(new B.a7(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cQ(u,1)))+C.cQ(u,2)*w,w)
s=C.cQ(u,3)
r=Math.sin(a3*(0.8+C.cQ(u,4))+u)
q=h*(0.012+0.012*C.cQ(u,5))
p=Math.cos(a3*(2+3*C.cQ(u,6))+u)
o=D.Ng[A.o.E(A.k.bt(C.cQ(u,7)*5),0,4)]
J.bD(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cQ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gq(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b4(d,0))
for(l=1;l<=8;++l){s=new B.ao(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.r=B.aY(n.r).gq(0)
t.b=A.ac
t.c=q*0.35
k=t.I()
t=m.e
f.drawPath((t==null?m.e=new B.cD(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cJ(A.J,q*1.8*A.k.E(t,0.15,1),q)
k=n.I()
f.drawRect(B.c8(t),k)
k.delete()}f.restore()}this.lg(a1,a2,a3,25,A.bH,30)},
bD6(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ap,a4,a4,n)
n.push(new B.b4(a5,a6))
o=p-0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.bH.j(0.22),D.b1U],v),a4,a4).au(0,B.bT(w,u)))
l=o.I()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cD(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ap,a4,a4,B.a([],r))
v=a6+j
i.D(new B.b4(a5,v))
u=j*0.3
s=a6+u
i.D(new B.ao(a5,s))
o=a6+j*0.6
i.D(new B.ao(a5+k*0.22,o))
i.D(new B.ao(a5+k*0.5,a6))
i.D(new B.ao(a5+k*0.78,o))
o=a5+k
i.D(new B.ao(o,s))
i.D(new B.ao(o,v))
i.D(new B.bE())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.L()
n.sap(new B.a3(A.aX,A.b1,A.w,D.cSt,a4,a4).au(0,new B.a7(a5,a6,o,v)))
a8.aM(i,n)
for(v=[D.e2S,D.dYh,D.eby],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gq(a0)
l=a1.I()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=A.af.gq(0)
l=a1.I()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.hO.gq(0)
l=g.I()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.uY(i),u=B.a([],x.X),o=new B.tG(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jK(y.M));--f
o.im()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cH([new B.G5(o,f),0,d*h,!0]),B.a([],r))
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.b=A.ac
f.c=g
f.e=A.ft
f.r=A.bH.gq(0)
l=f.I()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cD(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.qJ(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lg(a8,a9,b0,45,A.bH,40)},
bwe(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lg(a8,a9,b0,60,A.c,50)
w=[D.el3,D.ekM,D.ekH,D.elX]
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
if(e===0){d=new B.b4(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ao(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.b=A.ac
n.c=t
n.r=m.j(0.28).gq(0)
n.a=A.n3
n.z=new B.hy(A.G,s)
a2=n.I()
n=h.e
u.drawPath((n==null?h.e=new B.cD(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.b=A.ac
n.c=v
n.r=m.j(0.55).gq(0)
n.a=A.n3
n.z=new B.hy(A.G,v)
a2=n.I()
n=h.e
u.drawPath((n==null?h.e=new B.cD(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cQ(a4,1))+C.cQ(a4,2)*a3,a3)
r=C.cQ(a4,3)
q=Math.sin(b0+a4)
p=C.cQ(a4,4)
$.W()
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.wf.j(0.4+0.5*C.cQ(a4,5)).gq(0)
n.a=A.n3
a2=n.I()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bzn(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.L()
a0.sap(new B.bR(A.A,0.5,A.w,l,0,B.a([A.hy.j(0.25+0.1*h),D.U6],x.O),l,l).au(0,B.bT(new B.u(g,f),e)))
a1.ae(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ap,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b4(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ao(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bx(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.b=A.ac
a0.c=h
a0.r=D.Ng[A.o.F(w,4)].j(0.7).gq(0)
p=a0.I()
a0=u.e
g.drawPath((a0==null?u.e=new B.cD(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cQ(w,1)))+C.cQ(w,2)*o,o)
r=k*(0.1+0.8*C.cQ(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cQ(w,4))
if(n<f){this.qJ(a1,new B.u(r,n),m*2.4,A.bH,A.k.E(n/f,0,1))
continue}$.W()
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ac
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.zf.j(0.75).gq(0)
p=d.I()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gq(0)
p=t.I()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bFf(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lg(a9,b0,b1,30,A.kS,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cQ(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cQ(p,2))+C.cQ(p,3)*n,n)-o*2
l=C.cQ(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bD(v.save())
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
g.push(new B.b4(e,i))
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
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.sap(new B.a3(A.ax,A.aC,A.w,D.cOC,a5,a5).au(0,B.cJ(A.J,k*1.2,o)))
a2=g.I()
g=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cD(g)).a,a2)
a2.delete()
a3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3.b=A.ac
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
cnH(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aO(p.r,A.ap,null,null,o)
o.push(new B.b4(h,g))
p=s-q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.bH.j(r?0.12:0.07).gq(0)
m=p.I()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cD(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
u.b=A.ac
r=1-k
u.c=v*r
u.r=A.bH.j(r*0.6).gq(0)
m=u.I()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bt(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cQ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bc9.av(0,k)*(0.5+0.5*C.cQ(t,v)))
this.qJ(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cQ(t,3)),D.Ng[A.o.E(A.k.bt(C.cQ(t,4)*5),0,4)],u)}},
bws(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cQ(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cQ(o,2))+C.cQ(o,3)*m,m)
j=C.cQ(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqK[A.o.F(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b4(j,h))
for(e=1;e<=6;++e){d=new B.ao(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ac
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gq(0)
a1=d.I()
d=f.e
u.drawPath((d==null?f.e=new B.cD(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cJ(new B.u(j,k),n*2.3,l)
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.x,0.35)
d.toString
l.sap(new B.bR(D.aOu,0.9,A.w,a3,0,B.a([A.c,i,d],t),P.aqB,a3).au(0,a2))
a1=l.I()
u.drawOval(B.c8(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b4(j-d,h))
l.push(new B.ao(j+d,h))
l.push(new B.ao(j,k+n))
l.push(new B.bE())
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.x,0.3).gq(0)
a1=l.I()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cD(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cQ(o,11))+C.cQ(o,12)*m,m)
r=C.cQ(o,13)
J.bD(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cJ(A.J,t,v)
$.W()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=D.aqK[A.o.F(o,6)].j(0.85).gq(0)
a1=r.I()
u.drawRect(B.c8(s),a1)
a1.delete()
u.restore()}},
bJS(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lg(b1,b2,b3,50,A.c,70)
for(w=[D.elb,D.ekS,D.ekY],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).au(0,B.bT(new B.u(r,m),l)))
j=k.I()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cQ(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cQ(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bH,A.ex,g)
k.toString
d=C.cQ(i,3)
$.W()
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cQ(i,4)).gq(0)
a0.a=A.n3
j=a0.I()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.L()
a9.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.zf.j(0.55),D.aaI],u),a4,a4).au(0,B.bT(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bt(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cQ(a2,9)),a6*0.1*C.cQ(a2,8))
a5=B.l4(a3,a3.ao(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l4(a3,a5,0.6)
a6.toString
a8=B.L()
a8.sap(new B.a3(A.a4,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).au(0,B.qW(a3,a5)))
a8.c=a7*0.005
a8.d=A.bL
b1.bE(a6,a5,a8)}},
ceZ(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aO(o.r,A.ap,b5,b5,n)
n.push(new B.b4(q,u))
o=p-0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(new B.bR(A.A,0.5,A.w,b5,0,B.a([A.zf.j(0.28),D.aaI],w),b5,b5).au(0,B.bT(new B.u(q,u),t)))
o.a=A.n3
l=o.I()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cD(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.f_:A.f3)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b4(a5?0:b6,0))
b0.push(new B.ao(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cO(a9,k,a5?g:a1,b7))
b0.push(new B.ao(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a9.sap(new B.a3(A.a4,A.a7,A.w,a7,b5,b5).au(0,new B.a7(a6,0,a6+i,j)))
l=a9.I()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cD(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
b1.r=A.hy.gq(0)
b1.c=o
b1.d=A.bL
l=b1.I()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.b4(b6*0.42,w))
b2.D(new B.ao(b6*0.58,w))
b2.D(new B.ao(b6*0.8,b7))
b2.D(new B.ao(b6*0.2,b7))
b2.D(new B.bE())
v=B.L()
v.sap(D.bIh.au(0,new B.a7(0,w,0+b6,w+b7*0.22)))
b9.aM(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cQ(r,1))+C.cQ(r,2)*b3,b3)
u=C.cQ(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qJ(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cQ(r,4)),A.bH,0.3+0.7*((q+1)/2))}},
bAT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cQ(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cQ(t,2))+C.cQ(t,3)*r,r)-q
o=C.cQ(t,4)*i
n=Math.cos(f*(2+3*C.cQ(t,5))+t)
m=Math.abs(n)
l=B.cJ(new B.u(o,p),q,q*A.k.E(m,0.12,1))
$.W()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.sap(new B.a3(A.ax,A.aC,A.w,n>0?D.d1d:D.cmK,null,null).au(0,l))
k=q.I()
v.drawOval(B.c8(l),k)
k.delete()
q=-(s*0.22)
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.b=A.ac
j.c=Math.max(0.6,s*0.08)
j.r=D.b9G.gq(0)
k=j.I()
v.drawOval(B.c8(new B.a7(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qJ(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lg(d,e,f,30,A.bH,110)},
bTR(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lg(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cQ(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cQ(p,2))+C.cQ(p,3)*n,n)
l=C.cQ(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.sap(new B.bR(A.A,0.5,A.w,d,0,B.a([H.aaQ.j(0.45*k),D.a9M],u),d,d).au(0,B.bT(new B.u(l,m),j)))
g=h.I()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ap,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b4(l-i,e))
j.push(new B.ao(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ao(l+i,h))
j.push(new B.ao(l-i,h))
j.push(new B.bE())
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b22,A.c,0.2*k)
i.toString
j.sap(new B.a3(A.aX,A.b1,A.w,B.a([D.b6_,i],u),d,d).au(0,B.cJ(new B.u(l,m),o*1.4,o)))
g=j.I()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cD(j)).a,g)
g.delete()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gq(0)
g=j.I()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bRx(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cQ(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cQ(p,2))+C.cQ(p,3)*n,n)
l=C.cQ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bD(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aO(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b4(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p7(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p7(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cGg[A.o.F(p,5)]
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.x,0.25)
l.toString
m.sap(new B.bR(A.r6,0.5,A.w,d,0,B.a([A.c,f,l],u),H.ZR,d).au(0,B.bT(A.J,o*1.4)))
e=m.I()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cD(m)).a,e)
e.delete()
v.restore()}this.lg(a3,a4,a5,30,A.ie,130)},
cam(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cQ(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cQ(q,2))+C.cQ(q,3)*o,o)
m=C.cQ(q,4)
l=Math.sin(s+q*0.7)
J.bD(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cQ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b4(0,n))
l=n*0.2
m.push(new B.cO(p,l,0,p))
m.push(new B.cO(n,l,0,n))
m.push(new B.bE())
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.ch8:D.cPO
n.sap(new B.a3(A.a4,A.a7,A.w,m,i,i).au(0,B.bT(A.J,p)))
j=n.I()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cD(n)).a,j)
j.delete()
v.restore()}this.lg(d,e,a0,25,A.bH,140)},
byp(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lg(b0,b1,b2,40,A.bH,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cQ(r,1))
p=Math.sin(b2*(0.15+0.1*C.cQ(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cQ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bD(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bD(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b4(0,0))
a3.push(new B.p7(f,e,l,d,h,0))
a3.push(new B.p7(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a2.sap(new B.a3(A.a4,A.a7,A.w,i?D.cPy:D.cRZ,a6,a6).au(0,new B.a7(0,m,k,j)))
a5=a2.I()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cD(a2)).a,a5)
a5.delete()
a2=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a2.b=A.ac
a2.c=Math.max(0.6,o)
a2.r=D.zl.gq(0)
a5=a2.I()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cD(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=D.b95.gq(0)
p.c=q*0.1
p.d=A.bL
a5=p.I()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bXA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.c=v
q.r=D.arJ[t].j((1-s)*0.9).gq(0)
q.z=new B.hy(A.G,v)
p=r*0.3
p=B.bC(B.cJ(e,r,r*1.6),new B.b1(p,p))
o=q.I()
u.drawRRect(B.eZ(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cQ(m,1)*4)+m)))
k=D.arJ[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bC(new B.a7(j,i,j+w,i+l),new B.b1(v,v))
$.W()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gq(0)
j.z=new B.hy(A.a6B,p)
o=j.I()
u.drawRRect(B.eZ(i),o)
o.delete()}},
bFq(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cQ(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cQ(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bH,A.oL,A.dB][A.o.F(p,4)]
j=C.cQ(p,3)
$.W()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gq(0)
i.a=A.n3
i.z=new B.hy(A.G,r)
h=i.I()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.L()
t.r=A.az.gq(0)
t.c=1.2
a3.bE(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.L()
t.r=A.eC.gq(0)
a3.ae(v,u,t)
J.bD(q.save())
a1=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
a1.D(new B.kz(B.bT(v,u)))
a3.tk(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bv,A.c,0.4+0.6*((i+1)/2)).gq(0)
h=d.I()
q.drawRect(B.c8(new B.a7(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qJ(a3,v.ao(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cpa(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.av(0,A.k.E(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ap,h,h,q)
q.push(new B.b4(d,a0))
r=s-0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.bH.j(0.1).gq(0)
o=r.I()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cD(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.L()
a0.sap(new B.bR(A.A,0.5,A.w,h,0,B.a([D.aZA.j(0.6),D.a9M],x.O),h,h).au(0,B.bT(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.L()
d.sap(D.dWb.au(0,B.bT(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cQ(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gq(0)
i=B.cJ(new B.u(l,k),r,u)
o=j.I()
w.drawOval(B.c8(i),o)
o.delete()
i=B.cJ(new B.u(l+q,k-n),r,m)
o=j.I()
w.drawOval(B.c8(i),o)
o.delete()}this.lg(a2,a3,a4,20,A.hO,180)},
c9q(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ap,f,f,q)
q.push(new B.b4(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ao(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bx(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ao(e,d)
q.push(r)
o=p.f
if(o!=null)r.bx(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bx(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cE,A.iF,s/3).j(0.55).gq(0)
k=r.I()
r=p.e
w.drawPath((r==null?p.e=new B.cD(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cQ(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cQ(i,2))+C.cQ(i,3)*j,j)
n=C.cQ(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.sap(new B.bR(Al.pN,0.5,A.w,f,0,D.cUZ,f,f).au(0,B.bT(new B.u(n,g),h)))
k=t.I()
w.drawCircle(n,g,h,k)
k.delete()}this.lg(a1,a2,a3,25,A.c,190)},
cnp(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cQ(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cQ(r,2))+C.cQ(r,3)*p,p)
n=C.cQ(r,4)
m=Math.sin(t+r)
$.W()
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cQ(r,5)).gq(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bL
J.bD(v.save())
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
bTX(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dE(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bD(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cJ(new B.u(p,0),q,r)
$.W()
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.sap(D.bI3.au(0,new B.a7(0,o,n,m)))
e=f.I()
s.drawOval(B.c8(g),e)
e.delete()
s.restore()}}$.W()
a0=B.L()
a0.b=A.ac
a0.c=a2*0.003
a0.r=D.b2d.gq(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.qJ(a3,w.ao(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lg(a3,a4,a5,40,A.bH,210)},
chs(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hy,A.hO],a6),B.a([A.o_,A.ie],a6),B.a([A.aB,A.ex],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bV<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aO(l.r,A.ap,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b4(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ao(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dy(i,s),l=new B.bV(l,l.gJ(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ao(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bx(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bx(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sap(new B.a3(A.a4,A.a7,A.w,B.a([h,k[1],h],a6),H.arp,new B.m2(w)).au(0,new B.a7(0,0,v,u)))
l.r=A.c.j(0.85).gq(0)
a2=l.I()
l=j.e
t.drawPath((l==null?j.e=new B.cD(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lg(a8,a9,b0,40,A.c,220)},
bTG(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.ZU[a3].gq(0)
a4=a2.I()
s.drawRect(B.c8(new B.a7(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a5.r=D.ZU[A.o.F(a3+2,5)].gq(0)
a4=a5.I()
s.drawRect(B.c8(new B.a7(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cQ(a0,1))+C.cQ(a0,2)*a6,a6)
v=C.cQ(a0,3)
t=C.cQ(a0,4)
this.qJ(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.ZU[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
csH(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bH.j(0.06).gq(0)
o=p.I()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.D(new B.b4(v,a2))
w=a1+w
l.D(new B.ao(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.D(new B.cO(w,r,p,k))
w=a2+m*0.95
l.D(new B.ao(p,w))
p=n*0.3
j=a2+m
l.D(new B.ao(a1+p,j))
l.D(new B.ao(a1-p,j))
q=a1-q
l.D(new B.ao(q,w))
l.D(new B.ao(q,k))
l.D(new B.cO(v,r,v,a2))
l.D(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cJ(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ac
d.c=q
d.r=A.au.gq(0)
o=d.I()
u.drawArc.apply(u,[B.c8(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.L()
a1.sap(new B.a3(A.a4,A.a7,A.w,D.cX1,A.aqQ,null).au(0,new B.a7(v,a2,r,j)))
a4.aM(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.qJ(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bBw(a4,a5,a6,60)},
bBw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cQ(p,31))+C.cQ(p,32)*v,v)
n=C.cQ(p,33)
J.bD(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cJ(A.J,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=D.Ng[A.o.F(p,5)].gq(0)
m=n.I()
u.drawRect(B.c8(o),m)
m.delete()
u.restore()}},
clh(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lg(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cQ(o,1)*1.6
m=A.k.F(a2+C.cQ(o,2)*n,n)/n
l=e*(C.cQ(o*7+A.k.bt((a2+C.cQ(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.sap(new B.a3(A.a4,A.a7,A.w,B.a([A.c.j(0),A.bH],s),null,null).au(0,B.qW(new B.u(l,h),i)))
g.c=r
g.d=A.bL
f=g.I()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qJ(a0,i,p,A.c,1-m)}},
bwJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cQ(r,1))
p=A.k.F(C.cQ(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cQ(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.at7[l].j(n).gq(0)
m.a=A.n3
m.z=new B.hy(A.G,q*0.12)
k=m.I()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.b=A.ac
m.c=Math.max(0.6,q*0.05)
m.r=D.at7[l].j(n*1.4).gq(0)
k=m.I()
s.drawCircle(p,o,q,k)
k.delete()}},
c78(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bD(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cJ(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ac
o.c=u
o.r=A.bH.j(0.45).gq(0)
n=o.I()
w.drawOval(B.c8(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.hO.gq(0)
n=k.I()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.hy.j(0.4).gq(0)
k.z=new B.hy(A.G,r)
n=k.I()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lg(d,e,f,45,A.bH,270)},
bJa(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cQ(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cQ(o,2)*4,4)/4
j=A.eE.av(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cQ(o,3))*(j*i)
if(h<=0.5)continue
g=D.cMU[A.o.F(o,5)]
J.bD(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cJ(new B.u(0,l),i,j)
$.W()
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.sap(new B.a3(A.aX,A.b1,A.w,B.a([A.c,g],u),null,null).au(0,B.cJ(new B.u(0,l),f,h)))
a1=a0.I()
v.drawOval(B.c8(d),a1)
a1.delete()}$.W()
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.hy.gq(0)
a1=l.I()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lg(a5,a6,a7,30,A.hO,280)},
bXl(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bT(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.b=A.ac
j.c=v
j.r=D.apY[n].j((1-m)*0.8).gq(0)
i=j.I()
u.drawArc.apply(u,[B.c8(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cQ(g,1))+C.cQ(g,2)*h,h)
e=C.cQ(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cQ(g,4))
a0=D.apY[A.o.F(g,4)]
$.W()
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gq(0)
J.bD(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cJ(A.J,d,d*1.5)
i=a1.I()
u.drawOval(B.c8(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=a0.gq(0)
o.c=Math.max(1,d*0.18)
i=o.I()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=a0.gq(0)
o.c=Math.max(1,d*0.3)
i=o.I()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bVN(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bD(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ap,a3,a3,a0)
a0.push(new B.b4(0,i))
a0.push(new B.cO(h,m,0,g))
a0.push(new B.cO(j,m,0,i))
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.b=A.ac
d.c=t
d.r=B.aq(A.bH,A.oL,k).j(0.7).gq(0)
a2=d.I()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cD(d)).a,a2)
a2.delete()
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=A.hO.j(0.8).gq(0)
a2=d.I()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.L()
a5.sap(new B.bR(A.A,0.5,A.w,a3,0,B.a([A.hy.j(0.25),D.U6],x.O),a3,a3).au(0,B.bT(w,a4)))
a7.ae(w,a4,a5)
this.lg(a7,a8,a9,30,A.bH,300)},
cnx(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.bv.gq(0)
h.c=q
h.d=A.bL
g=h.I()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.sap(new B.bR(A.A,0.5,A.w,null,0,B.a([A.hO,A.hy.j(0.6),D.U6],o),null,null).au(0,B.bT(new B.u(j,i),p)))
g=l.I()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cQ(f,1)
d=A.k.F(b2+C.cQ(f,2)*e,e)/e
a0=A.k.bt((b2+C.cQ(f,2)*e)/e)
a1=C.cQ(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cQ(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hO,A.aZ,d).j(1-d).gq(0)
a6.c=Math.max(0.8,u)
a6.d=A.bL
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
bAc(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOJ(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cQ(n,1))
l=a8*(0.14+0.24*C.cQ(n,2))
k=a8-l
j=new B.a7(o,k,o+m,k+l)
$.W()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.sap(D.bJ1.au(0,j))
h=i.I()
r.drawRect(B.c8(j),h)
h.delete()
g=A.k.bt(m/q)
f=A.k.bt(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cQ(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=A.bH.j(0.85).gq(0)
h=a6.I()
r.drawRect(B.c8(new B.a7(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aWR.prototype={
B(d){var w,v=null,u=new C.c3Q(),t=new C.c3S(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiO,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c3R(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Fi[w]))
return B.c9(A.bJ,s,A.bx,12,10)}}
C.Xr.prototype={
S(){return new C.ax5()}}
C.ax5.prototype={
guO(){var w=this.d
return w===$?this.d=this.a.c:w},
gaVh(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ap(new B.bc(w.b,A.b2,A.aM),$.av())}return v},
gaub(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaH1()
v=$.av()
u.f!==$&&B.bJ()
t=u.f=new B.ap(new B.bc(w,A.b2,A.aM),v)}return t},
p(){var w=this.gaVh(0),v=$.av()
w.R$=v
w.O$=0
w=this.gaub()
w.R$=v
w.O$=0
this.a2()},
Y_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Y_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B2(90,700,700,A.ez),$async$Y_)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Y_)
case 8:p=e
o=q.b.toLowerCase()
n=J.afx(o,".png")?"image/png":"image/jpeg"
r.n(new C.d12(r,n,p))
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
return B.i($async$Y_,v)},
aVg(d){var w=null,v=A.c.j(0.07)
return B.bn(w,new B.b3(4,B.m(12),A.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aKy,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aeE(p.guO().a)
if(n==null)n=A.d.gL(D.Fi)
w=p.guO()
v=p.r
u=x.p
v=B.D(new B.am(A.W,o,A.a9,A.q,B.a([B.bZ(0,new C.LU(p.guO(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.an(o,B.Gn(A.m7,new C.d17(d),B.nb(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Gn(D.btH,new C.d18(p),B.nb(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aKs,o,o,o)
t=B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaVh(0),o,o,o,o,o,2,p.aVg("Big words"),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d19(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hg,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hy.j(0.6),A.r,1)
if(p.guO().d.length===0)q=D.bwZ
else{q=C.fYk(p.guO().d)
if(q==null)q=new Uint8Array(0)
q=B.hO(B.fF(q,A.A,o,o,A.cm,A.bQ,!1,o,!1,o,o),A.ao)}r=B.a([t,A.aa,B.aH(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc1b(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guO().d.length!==0)r.push(B.aF(o,o,o,o,D.YJ,o,o,o,new C.d1a(p),o,o,o,o,"Remove logo",o))
return B.ce(o,A.x,B.bq(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.T,B.B(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaub(),o,o,o,o,o,2,p.aVg("Line under it"),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d1b(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o),A.ab,B.dq(D.bvV,D.f9f,new C.d1c(p,d),B.bk(A.au,o,o,o,A.x,o,A.cc,o,new B.b6(B.m(14),A.X),o,o,o))],u),A.ag,o,A.e,A.R,0,A.p),A.h,o,o,D.aSM,o,o,o,o,A.DS,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),o,!1,!1,o,o)}}
C.aIB.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.XM.prototype={
S(){return new C.bcG(new B.ap(A.as,$.av()))}}
C.bcG.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.M(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aQ:A.aj,k=B.aG(d,A.bR,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.B(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.ct,l,o,o,o,o),o,o,o,new C.d7y(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cyf[w]
u=B.a([],g)
for(t=J.aU(v.b);t.C();){s=t.gT(t)
r=new B.b1(12,12)
q=new B.b1(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aI(!1,new B.bv(r,r,r,r),!0,B.p(A.A,new B.w(s,o,A.yr,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bv(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d7z(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hC,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ej(A.bJ,6,6,A.bx,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aN
e.push(B.B(B.a([B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.aa,B.bL(A.aLl,new C.d7A(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bq(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.cl,B.cM(e,o,o,o,o,A.ak,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aW(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rL,A.VD,o,o,o),!0,!1,A.ah,!0,!0)}}
C.bc3.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eU()
a2.dM(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.L()
u.z=A.ON
t=B.L()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.af()
l=a2.af()
k=a2.af()
j=0.8+a2.af()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.af()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.E(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gq(0)
d=u.I()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gq(0)
d=t.I()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.W()
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.r=e.gq(0)
a1.c=1
d=a1.I()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.I()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ar(d){return d.b!==this.b}}
C.bbL.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bC(new B.a7(0,0,0+a7.a,0+a7.b),A.kf),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.L()
a5.b=A.ac
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gq(0)
a5.z=A.lz
a6.aJ(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.D(new B.iO(a1))
v=new B.Kz(new B.tG(B.uY(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.im()
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
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.b=A.ac
j.d=A.bL
j.c=1.5+2*m/10
j.r=w.j(k).gq(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cH([v,i,h,!0]),B.a([],a5))
g=j.I()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cD(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cH([v,i,t,!0]),B.a([],a5))
g=j.I()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cD(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cH([v,0,h,!0]),B.a([],a5))
g=j.I()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cD(f)).a,g)
g.delete()}}a4.im()
e=u[a3].FE(n).a
$.W()
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=w.gq(0)
k.z=A0.mc
g=k.I()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gq(0)
g=d.I()
q.drawCircle(k,f,2,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.bkv.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eU()
e.dM(this.c)
w=a0.a*(0.2+e.af()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gajL()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aO(j.r,A.ap,f,f,i)
i.push(new B.b4(w,v))
j=l-k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.sap(B.aS_(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.j7
g=j.I()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cD(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b6J.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eU()
a0.dM(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.af()
l=a0.af()
k=Math.min(t,r)*(0.03+a0.af()*0.09)
j=a0.af()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.W()
e=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gq(0)
e.z=new B.hy(A.G,k*0.35)
d=e.I()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
e.b=A.ac
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gq(0)
d=e.I()
w.drawCircle(i,h,k,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.b6m.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eU()
a0.dM(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.af()-0.5)*0.1)
k=v*(0.06+a0.af()*0.05)
j=a0.af()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ap,null,null,h)
h.push(new B.b4(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ao(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.b=A.ac
i.c=r
i.d=A.bL
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gq(0)
i.z=new B.hy(A.G,u)
d=i.I()
i=g.e
t.drawPath((i==null?g.e=new B.cD(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.brj.prototype={
a4(d,e){var w,v,u=new B.a7(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sap(new B.bR(A.A,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.cF8,null).au(0,u))
d.aX(u,w)
w=u.cE(-3)
v=B.L()
v.b=A.ac
v.c=2
v.r=this.c.j(0.1+t).gq(0)
v.z=A.j7
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bom.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bt(d)*7,p=0;p<7;++p){o=new B.eU()
o.dM(q+p)
n=o.af()*w
m=o.af()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.af()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.W()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=j.gq(0)
i.c=1.4
i.d=A.bL
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
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gq(0)
g.z=new B.hy(A.G,k*0.3)
h=g.I()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.bnv.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a7(0,0,0+e.a,0+e.b)
$.W()
v=B.L()
v.a=A.n3
v.sap(new B.a3(A.ax,A.aC,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).au(0,w))
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bb5.prototype={
a4(d,e){var w,v,u,t,s,r=e.ge8(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.L()
w.b=A.ac
w.c=1.4
w.d=A.bL
v=this.d
w.r=v.j(0.55+q*0.35).gq(0)
u=B.L()
u.b=A.ac
u.c=4
u.r=v.j(0.12*q).gq(0)
u.z=A.qD
r=new C.d0K(this,r*0.16,d,u,w)
t=e.ge8()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.wP.prototype={}
C.Hk.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aoE.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.u9.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.mb.prototype={
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
u.m(0,"decoration",C.hAT(v.z))
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
n=B.z(new B.J(n,new C.c9e(),m),m.k("ai.E"))
return C.qU(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,a1<n,@>>")
n=B.z(new B.J(n,new C.c9f(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hT.prototype={
gb58(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gQx(){if(!C.kk(this.w))return!1
var w=this.gb58()
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
r=B.z(new B.J(r,new C.c93(),q),q.k("ai.E"))
return C.AE(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ac(){var w,v,u=this,t=B.T(x.N,x.z)
t.m(0,"id",u.a)
t.m(0,"name",u.b)
t.m(0,"themeId",u.c)
t.m(0,"aspectRatio",u.d.b)
t.m(0,"autoAdvanceSeconds",u.e)
t.m(0,"updatedAt",u.f.a5().ab())
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
w=B.z(new B.J(w,new C.c94(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.ju.prototype={}
C.aYZ.prototype={
B(d){return B.ck(new C.c99(this))}}
C.alU.prototype={
S(){return new C.bfR(null,null)}}
C.bfR.prototype={
gaVi(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.h7,null,1,null,v)
w.cD(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gaVi().p()
this.bpt()},
B(d){return B.c3(this.gaVi(),new C.dz9(),this.a.c)}}
C.aIn.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.abd.prototype={
Od(d,e,f,g){return this.bIS(d,e,f,g)},
bIS(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Od=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Od)
case 3:s=i
if(d.e==null){w=1
break}B.a9(d,!1).M(null)
t=d.H(x.q).f
t.P(B.b0(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ec,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Od,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.x.j(0.35),A.dn,24)],x.V),r=B.au(B.p(v,v,A.h,v,v,new B.o(A.b9,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dO,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ar,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a3,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a3,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d3)
n.push(B.B(B.a([B.D(new C.abv(A.hr,"Download",A.bT,new C.ect(w,d),!0,v),1),A.aw,B.D(new C.abv(A.uB,"Share",A.bk,new C.ecu(w,d),!1,v),1),A.aw,B.D(new C.abv(A.ha,"Safari",A.aW,new C.ecv(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ecw(d),v,v))
return B.bq(!0,new B.C(A.p5,B.v(B.a([B.p(v,B.v(n,A.ag,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iI,v,t,u,s,v,A.n),v,v,v,v,A.DX,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ah,!0,!0)}}
C.abv.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.a1,!0,v,B.aI(!1,u,!0,B.es(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.blm,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ad)}}
C.aYX.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anS(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.N(v,w,v,w)}else{v=6*w
u=new B.N(v,10*w,v,12*w)}t=i.c1c().ahW(1.35)
s=B.at2(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.buK(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bk,h,h,h,h,2,D.bEL,A.z,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.vg,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.ym,A.am,h,A.QP,h,h)
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
w=n?t.czN(B.aY(g.Q).j(0.45),A.cx):t
p=g.as
l=m?1:h
k=m?A.eH:A.BU
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.QG:s
$.W()
j=B.L()
j.b=A.ac
j.c=3*w
j.e=A.ft
j.r=A.aF.gq(0)
j=i.chv(p,t,k,j)
k=g.r
w=new B.am(A.W,h,A.a9,A.q,B.a([j,i.cht(k,t,l?A.QG:s)],x.p),h)}else w=i.chu(p,t,g.k2?A.QG:s,m)
v=new B.nd(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aH(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bSa()
case 3:return i.c9p()
case 2:return B.b2(h,h,h,new C.aYU(g,h),A.fa)
case 5:g=g.r
return new C.aYW(g,!i.e&&i.z==null,h)}},
c1c(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aY(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
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
e=B.a([new B.cL(D.a9K,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cL(l,A.J,6*v),new B.cL(l,A.J,16*v),new B.cL(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cz
w=A.aF
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mi
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cL(A.by,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.x,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cL(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cL(A.b6,new B.u(-3*v,0),0),new B.cL(A.aD,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cL(A.cP,A.J,8*v),new B.cL(A.aD,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=H.a8G
break
case"ice":v=o.d
e=B.a([new B.cL(A.aY,A.J,10*v),new B.cL(A.cE,A.J,22*v)],x.r)
k=A.O
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cL(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kA
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cH1[q]
u.push(new B.cL(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cL(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.L()
v=o.d
f.sap(D.bGt.au(0,new B.a7(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cL(A.IE,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.L()
v=o.d
f.sap(D.bGQ.au(0,new B.a7(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cL(l,A.J,14*o.d)],x.r)
w=l
k=A.a3
break
case"lowercase":h=2*o.d
w=l
k=A.cq
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cL(l.j(0.45),new B.u(u,u),0),new B.cL(l.j(0.2),new B.u(v,v),0)],x.r)
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
aw3(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eqo.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c97(h)
v=r.k2?C.hNg(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eH:A.BU
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VY(B.dl(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
chv(d,e,f,g){return this.aw3(d,e,f,!1,g)},
cht(d,e,f){return this.aw3(d,e,f,!1,null)},
chu(d,e,f,g){return this.aw3(d,e,f,g,null)},
buK(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a4}},
bSa(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.au(B.V(s.b===D.kJ?A.EU:A.Aa,A.az,t,t,t,32),t,t,t)}w=u.bxE(r)
if(s.b===D.kJ){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.cp,A.r,1),s,B.a([new B.ab(0,A.G,A.x.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.N(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aK9(r,!0)
return C.fjv(s.go,v,s.id)}return w},
aK9(d,e){var w,v,u,t
try{w=C.hNz(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.ck(new C.c96(this,w,v,e))
return u}catch(t){return D.a7W}},
bxE(d){return this.aK9(d,!1)},
c9p(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aXK
return C.hNR(v,w.db,w.dx)}}
C.aYU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.L(),f=this.b
g.r=B.aY(f.ay).gq(0)
w=B.L()
w.r=B.aY(f.ch).gq(0)
w.b=A.ac
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a7(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aX(s,g)
d.aX(s,w)
break
case 1:d.j3(s,g)
d.j3(s,w)
break
case 2:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.D(new B.b4(u/2,0))
r.D(new B.ao(u,t))
r.D(new B.ao(0,t))
r.D(new B.bE())
d.aM(r,g)
d.aM(r,w)
break
case 3:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.b4(0,h))
f=u*0.65
r.D(new B.ao(f,h))
r.D(new B.ao(f,t*0.2))
r.D(new B.ao(u,t*0.5))
r.D(new B.ao(f,t*0.8))
t*=0.55
r.D(new B.ao(f,t))
r.D(new B.ao(0,t))
r.D(new B.bE())
d.aM(r,g)
d.aM(r,w)
break
case 4:h=t/2
w.c=v+2
d.bE(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.D(new B.b4(q,0))
r.D(new B.ao(u,0))
r.D(new B.ao(u-q,t))
r.D(new B.ao(0,t))
r.D(new B.bE())
d.aM(r,g)
d.aM(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aO(h.r,A.ap,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b4(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ao(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.bE())
d.aM(r,g)
d.aM(r,w)
break}},
ar(d){return d.b!==this.b}}
C.aFZ.prototype={
S(){return new C.bqQ(null,null)}}
C.bqQ.prototype={
Z(){var w,v=this
v.a0()
w=B.bi(null,A.iq,null,1,null,v)
w.cD(0)
v.d!==$&&B.aQ()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.brI()},
aKk(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bU(B.au(B.d(d,w,w,w,w,w,w,A.dO,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a3(A.a4,A.a7,A.w,v,w,w),A.n),A.bb)},
buY(){var w,v=this,u=null,t=v.aKk("Slide A",A.bk),s=v.aKk("Slide B",A.aW)
if(v.a.c===D.cd)return new B.am(A.W,u,A.b_,A.q,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c3(w,new C.eRl(v,s,t),u)},
B(d){return this.buY()}}
C.aGB.prototype={
iJ(d){return new B.a7(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jl(d){return d.b!==this.b}}
C.Tc.prototype={
S(){return new C.bg0(null,null)}}
C.bg0.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bi(null,A.zz,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cd){w.sq(0,1)
return}B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dKf(u),x.a)},
bq(d){var w,v,u,t=this
t.bC(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sq(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cd)w.sq(0,1)
else B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dKe(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bpH()},
B(d){var w,v=this.a
if(v.c.dy===D.cd||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c3(w,new C.dKd(this),v.d)}}
C.Hj.prototype={
B(d){return B.ck(new C.c9_(this))}}
C.awR.prototype={
S(){return new C.baA()}}
C.baA.prototype={
Z(){this.a0()
if(this.a.c!==D.cd)B.bN(A.JL,new C.cZi(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cd)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.Tc(C.ei(A.bf,!1,4279310375,A.aA,"",4294538006,24,A.bi,A.a3,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bc,o,2,"",0,0,"",u,D.eW,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cj,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ei(A.bf,!1,4294967295,A.aA,"",4280640491,22,A.bi,A.a3,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bc,o,2,"Element flies in",0,0,"",q.a.c,D.cO,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.W,p,A.a9,A.q,B.a([w,B.an(32,new C.Tc(t,B.p(p,D.eX_,A.h,p,p,new B.o(s,p,B.H(A.b9,A.r,1),r,p,p,A.n),p,p,p,p,A.iL,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bU(n,D.aTk,A.bb)}}
C.a5L.prototype={
S(){return new C.bgF(null,null)}}
C.bgF.prototype={
gaVP(){var w=this.a
if(w.e)w=D.eqv.t(0,w.c)||D.aHK.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVP()){w=C.hLW(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bi(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cD(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bqd()},
B(d){var w,v=this,u=v.d
if(!v.gaVP()||u==null)return v.a.d
w=v.a
return B.c3(u,new C.e2_(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWU.prototype={
B(d){var w=null
return B.au(C.aYY(!0,w,!1,C.ei(A.L,!1,this.e.l(),A.aA,"",4280640491,this.f,A.bi,A.a3,"",0.2,"fx",w,"","",0,!1,"",0,D.bc,4280172719,2,"Aa",0,0,this.c,D.cd,D.cO,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bbJ.prototype={
iJ(d){return C.a0u(this.b,new B.a7(0,0,0+d.a,0+d.b).cE(-this.c))},
jl(d){return d.b!==this.b||d.c!==this.c}}
C.bmv.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a7(0,0,0+a1.a,0+a1.b).cE(-this.d),g=this.b,f=C.a0u(g,h),e=a1.ge8(),d=new C.eGM()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sap(D.aJe.au(0,h))
a0.aM(f,w)
g=C.a0u(g,h.cE(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b9s.gq(0)
a0.aM(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sap(D.eA3.au(0,h))
a0.aM(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gq(0)
g.z=new B.hy(A.G,e*0.04)
a0.aM(f,g)
g=d.$1(e*0.012)
g.r=A.c.gq(0)
a0.aM(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sap(D.eA1.au(0,h))
a0.aM(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gq(0)
a0.aM(f,w)
g=C.a0u(g,h.cE(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gq(0)
a0.aM(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b6.j(0.7).gq(0)
g.z=new B.hy(A.G,e*0.035)
a0.aM(f,g)
g=d.$1(e*0.016)
g.r=A.o1.gq(0)
a0.aM(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sap(D.ezX.au(0,h))
a0.aM(f,w)
w=C.a0u(g,h.cE(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_T.gq(0)
a0.aM(w,v)
g=C.a0u(g,h.cE(e*0.03))
v=d.$1(e*0.004)
v.r=D.b24.gq(0)
a0.aM(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sap(D.aJe.au(0,h))
a0.aM(f,g)
for(g=B.uY(f),w=B.a([],x.X),g=new B.tG(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jK(y.M));--q
g.im()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bt(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.im()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.im()
m=w[q].FE(p*n/o).a
l=D.cEu[A.o.F(n,4)]
$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=l.gq(0)
k=p.I()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gq(0)
k=i.I()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sap(D.eA5.au(0,h))
g.z=new B.hy(A.G,e*0.03)
a0.aM(f,g)
g=d.$1(e*0.018)
g.sap(D.eA2.au(0,h))
a0.aM(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gq(0)
a0.aM(f,w)
g=C.a0u(g,h.cE(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.na.gq(0)
a0.aM(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bns.prototype={
a4(d,e){d.EE(C.a0u(this.b,new B.a7(0,0,0+e.a,0+e.b).cE(-this.c)),A.x,e.ge8()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aIA.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aJ5.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aKq.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.a63.prototype={}
C.Mk.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aBA(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aZ(v),null,null)},
gdT(){return this.c},
gRS(){return this.r},
gRT(){return this.w},
gK9(){return this.x}}
C.aBA.prototype={
Z(){var w,v=this
v.a0()
$.aT.c_$.push(v)
C.foq()
$.h4O=new C.eiH(v)
w=B.bi(null,A.zx,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.H7()},
bq(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MV(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.H7()}},
iE(d){if(d===A.yJ||d===A.r8||d===A.r7||d===A.oH)this.rJ()},
p(){var w,v,u,t=this
$.aT.hv(t)
w=t.at
if(w!=null)w.aa(0)
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
v.O$=0}t.bqs()},
ga90(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gNe(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a9u(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQx())return!1
return!0},
jK(){return this.a9u(null)},
ag4(){var w=this.c
if(w==null)return
w.H(x.q).f.P(D.eyl)},
px(){if(!this.jK())return!1
this.ag4()
return!0},
ao0(d){var w,v,u,t,s,r=this
if(r.a9u(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h3V(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yW(){return this.ao0(null)},
H7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$H7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aoG(k),$async$H7)
case 3:j=e
w=4
return B.b(C.ank(k),$async$H7)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fCX(j,t.bUX())
w=t.ga90()?5:7
break
case 5:r=t.gNe()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aX7(r),$async$H7)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.ef4())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.ef5())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xO(m==null?"":m)!=null)continue
C.foD(n,s)
p=!0}t.n(new C.ef6(t,s))
if(p||s.length>J.aa(j))t.rJ()
case 1:return B.h(u,v)}})
return B.i($async$H7,v)},
bUX(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kk(w)&&w!==q}if(w)p.push(r)
return p},
cfX(d){var w,v=this,u=d.w
if(!C.kk(u)||u==="hati_kiapo_uongozi")return
v.a7S(d)
w=A.d.bi(v.d,new C.egF(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.Q(Date.now(),0,!1)}else A.d.ck(u,0,d.hs())
v.db=!1},
cal(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kk(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cfX(t)
s=u.d
w=B.U(s)
v=w.k("cU<1,hT>")
s=B.z(new B.cU(new B.a4(s,new C.egt(),w.k("a4<1>")),new C.egu(),v),v.k("G.E"))
return s},
MV(d){return this.bJe(d)},
rJ(){return this.MV(null)},
bJe(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cal()
w=3
return B.b(C.Ua(d==null?t.a.c:d,s),$async$MV)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.ao0(r)?4:5
break
case 4:w=6
return B.b(C.a5i(r),$async$MV)
case 6:q=r.x
p=A.a.i(q==null?t.gNe():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bi(t.d,new C.ees())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.ck(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MV,v)},
oB(){var w,v=this,u=v.at
if(u!=null)u.aa(0)
u=v.e
w=(u==null?null:C.kk(u.w))===!0?A.hS:A.lp
v.at=B.cP(w,new C.ehN(v))},
aVj(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acY(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a7(v.ay)},
csU(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acY(w.e.hs(),w.f,w.r))
w.n(new C.eiD(w,v.pop()))
w.oB()},
cf3(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acY(w.e.hs(),w.f,w.r))
w.n(new C.egD(w,v.pop()))
w.oB()},
nD(){var w,v,u=this
if(u.e==null)return
w=A.d.bi(u.d,new C.eiq(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.Q(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.Q(Date.now(),0,!1)},
VH(d){var w,v,u,t,s=this.gdk()
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
IK(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cU<1,n>")
t=B.d7(new B.cU(new B.a4(w,new C.eir(),v.k("a4<1>")),new C.eis(),u),u.k("G.E"))
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
if(n.b!==D.cO)continue
p=n.a
m=w.ce(0,p,new C.eit(n))
s.ce(0,p,new C.eiu())
p=m.a.a
o=n.r
if(p!==o)m.saU(0,o)}},
Gs(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.ba(u.d,new C.edR(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gNe()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hs())}u.nD()
u.oB()},
agp(d,e){var w,v,u,t,s=this
if(s.jK())return
w=s.VH(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kk(v.w))===!0
if(u){C.hM_(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hM0(t,w.d+w.f*0.5)}}s.Gs()
s.nD()
s.oB()
if(u&&s.c!=null)s.n(new C.eiE())},
ctY(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gs()
w.nD()
w.oB()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gpB(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hK2(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aY(p==null?v.e:p)
u=q.bSp(v)
t=q.bSo(v)
s=B.aY(v.e)
r=v.f
return new C.ju(o,"Class template",p,u,t,s,r==null?null:B.aY(r))}return C.hng(o)},
bSp(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cO)s=t.w>=28||A.o.E(A.o.ak(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.aY(t.Q)}return A.M},
bSo(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cO&&t.w<28)return B.aY(t.Q)}return A.aI},
aco(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga90()){w.c.H(x.q).f.P(D.ewY)
return}w.a7S(d)
w.aWv(C.bys(d))
return}if(C.c9T(v)){w.a7S(d)
w.aWv(d)
return}w.n(new C.efM(w,d))},
aoA(){var w,v,u,t,s,r,q=this
q.a_Z(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kk(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.edP(q))
if(r&&q.c!=null){u.toString
q.Ik(u,s)}return}q.rJ()
q.n(new C.edQ(q))},
aWu(d){this.a7S(d)
this.Yz(d,!0)},
a7S(d){if(!C.kk(d.w))return
C.foD(d,this.d)},
Yz(d,e){return this.c6l(d,e)},
aWv(d){return this.Yz(d,!1)},
c6l(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Yz=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bys(d)
if(e){r=s.x
q=A.a.i(r==null?t.gNe():r)
t.dy.W(0,q.toLowerCase())
C.anl(t.a.c,q)}r=s}else r=d
w=C.c9T(r.w)?3:4
break
case 3:w=5
return B.b(t.a7T(r),$async$Yz)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.ba(t.d,new C.eg8(l))
o=l.a.hs()
n=C.kk(o.w)&&C.hNb(o)
t.n(new C.eg9(t,o,p))
if(n){m=A.d.bi(t.d,new C.ega(o))
if(m>=0){t.d[m]=o.hs()
t.rJ()}}if(!t.a9u(l.a))t.WP()
r=!1
if(t.c!=null)if(!t.a9u(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.ao0(r)&&C.fkG(l.a)}else l=r
else l=r
if(l)t.c.H(x.q).f.P(D.exx)
case 1:return B.h(u,v)}})
return B.i($async$Yz,v)},
a7T(d){return this.bHw(d)},
bHw(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l2(r.c,A.y6),$async$a7T)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kH(!1,r,s.c,s.d,null,A.y6,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7T,v)},
nw(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c9T(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c9h(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nw,v)},
ac5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ac5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ch(null,null,!1,null,new C.efL(),s,null,!0,!0,x.H),$async$ac5)
case 3:if(t.c==null){w=1
break}t.aoA()
case 1:return B.h(u,v)}})
return B.i($async$ac5,v)},
ac4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ac4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ch(null,null,!1,null,new C.efI(),s,null,!0,!0,x.H),$async$ac4)
case 3:if(t.c==null){w=1
break}t.n(new C.efJ())
t.aoA()
case 1:return B.h(u,v)}})
return B.i($async$ac4,v)},
WP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ax(),$async$WP)
case 3:r=e
if(B.k6(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$WP)
case 4:s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.evB)
case 1:return B.h(u,v)}})
return B.i($async$WP,v)},
Ik(d,e){return this.cgn(d,e)},
cgn(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ik=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.aee(s,t.gDf(),t.gDe(),!0,e,t.d),$async$Ik)
case 9:w=4
break
case 6:w=10
return B.b(C.aef(s,t.gDf(),t.gDe(),!0,e,t.d),$async$Ik)
case 10:w=4
break
case 7:w=11
return B.b(C.aeg(s,t.gDf(),t.gDe(),!0,e,t.d),$async$Ik)
case 11:w=4
break
case 8:w=12
return B.b(C.aeh(s,t.gDf(),t.gDe(),!0,e,t.d),$async$Ik)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
bTV(){var w,v,u,t,s=this
if(!s.ga90()){s.c.H(x.q).f.P(D.evO)
return}w=s.gNe()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.aed(u,t,v,new C.ef0(s),new C.ef1(s),w)},
acp(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c2(A.dA,null,new C.efS(u),s,!0,!0,!1,A.l8,!1,!1,x.N),$async$acp)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aeh(s,u.gDf(),u.gDe(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.aee(s,u.gDf(),u.gDe(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.aef(s,u.gDf(),u.gDe(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aeg(s,u.gDf(),u.gDe(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bTV()
return B.h(null,v)}})
return B.i($async$acp,v)},
c5t(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aVj()
w=C.cy()
v=C.AE(t,t,t,t,D.Bh,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.efT(u,v))},
a7j(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a7j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hRx(s),$async$a7j)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.ea(q.r,new C.edT())
t.cZ(new C.edU(t,p,q,r))
s=t.c.H(x.q).f
o=r.r.length
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7j,v)},
aen(d,e,f,g){var w=null,v=g?A.dv:A.bN,u=B.H(g?A.b9:A.cp,A.r,1)
return B.hq(B.aH(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Yy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.px()){w=1
break}s=t.jo()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.eg3(),q),q.k("G.E"))}o=s!=null&&s.b===D.l7?B.a([s],x.u):p
if(o.length===0){t.c.H(x.q).f.P(D.exI)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.eg4(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yy,v)},
acG(){return this.c6k()},
c6k(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hRi(s,t.f+1,o),$async$acG)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kq(s,B.U(s).c)
p.a=A.d.bi(o.r,new C.eg6(q))
t.cZ(new C.eg7(p,t,o,q,r))
t.c.H(x.q).f.P(D.ey6)
case 1:return B.h(u,v)}})
return B.i($async$acG,v)},
acN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()||!t.yW()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a4<1>")
p=B.z(new B.a4(r,new C.ego(),q),q.k("G.E"))
if(p.length===0){t.c.H(x.q).f.P(D.evm)
w=1
break}o=new B.J(p,new C.egp(),B.U(p).k("J<1,O>")).fv(0,new C.egq())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ap(new B.bc(l,A.b2,A.aM),$.av()))}q=t.c
q.toString
w=3
return B.b(B.c2(A.K,null,new C.egr(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acN)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.av()
q.O$=0}if(t.c!=null)t.n(new C.egs())
case 1:return B.h(u,v)}})
return B.i($async$acN,v)},
acs(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$acs=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.h5V(s,new C.Do(r,q,p,o==null?"":o)),$async$acs)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.efU(m,n))
s=t.c.H(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aeE(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$acs,v)},
a7M(){return this.bGT()},
bGT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hRw(s,t.f+1,l),$async$a7M)
case 3:r=e
q=$.fGm
$.fGm=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.ee9())
t.c.H(x.q).f.P(D.evd)
w=1
break}if(!q){s=r.CW
s=C.h4M(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.eea(t,l,r))
t.c.H(x.q).f.P(D.eyA)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kq(s,B.U(s).c)
s=l.r
m.a=A.d.bi(s,new C.eeb(p))
o=s.length
t.cZ(new C.eec(m,t,l,p,r))
n=s.length-o
s=t.c.H(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7M,v)},
aMo(d,e){if(e){this.adg()
return}this.c5t(d,!1)},
bCH(){return this.aMo(null,!1)},
adg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.bX,null,new C.egy(t),r,!0,!0,!0,A.os,!1,!1,x.N),$async$adg)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.egz(t,C.hK1(s).oO()))
case 1:return B.h(u,v)}})
return B.i($async$adg,v)},
cZ(d){var w=this
if(w.px())return
w.Gs()
w.aVj()
w.n(d)
w.IK()
w.nD()
w.oB()},
a5Q(){this.cZ(new C.ecO(this,D.md))},
aNM(){var w=this.gdk()
if(w==null)return
this.cZ(new C.ee7(this,w))},
aMZ(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.ee5(this))},
aZm(d,e){if(this.e==null||d===e)return
this.cZ(new C.egH(this,d,e))},
Ms(d){return this.bEF(d)},
bEF(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ms=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gNe():s)
w=5
return B.b(C.anj(t.a.c,r),$async$Ms)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aoI(s)
w=6
return B.b(C.aZ1(t.a.c,s),$async$Ms)
case 6:if(t.c==null){w=1
break}t.n(new C.ee1(t,d))
w=7
return B.b(t.rJ(),$async$Ms)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ms,v)},
cgk(d,e){var w=this
if(d.z){w.ag4()
return}w.n(new C.egG(w,d,e))
w.oB()},
jo(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
UJ(d){return this.ch.ce(0,d.a,new C.edS(d))},
aqo(d){return this.CW.ce(0,d.a,new C.eet())},
a_Z(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.VH(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ag$.d.c
if(u!=null)u.jf()},
b1D(){return this.a_Z(!0)},
a_X(d){var w,v,u=this
if(u.px())return
if(!u.yW())return
w=u.VH(d)
if(w==null||w.b!==D.cO)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.UJ(w).saU(0,"")}u.n(new C.eio(u,d))
$.aT.x1$.push(new C.eip(u,d,w))},
b28(d){var w=this
if(d.b===D.cO&&!w.jK()&&w.yW()){w.a_X(d.a)
return}w.awt(d.a)},
awt(d){var w,v,u,t,s,r=this
if(r.jK())return
w=r.r
if(w!=null&&w!==d){v=r.VH(w)
if(v!=null&&v.b===D.cO){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.ehO(r,s,d))
if(s||d==null){t=$.aT.ag$.d.c
if(t!=null)t.jf()}},
aII(){this.cZ(new C.ecP(this))},
on(d){return this.bu1(d)},
bu1(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$on=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$on)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecM(t,d))
case 1:return B.h(u,v)}})
return B.i($async$on,v)},
TT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fm(78,1920),$async$TT)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ecC(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TT,v)},
TN(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(T.BP(t.a.c),$async$TN)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gai(s)){t.c.H(x.q).f.P(D.ez9)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c2(null,null,new C.ecz(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TN)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cZ(new C.ecA(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TN,v)},
apo(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.ba(w.gdk().z,new C.ee3(v))){w.c.H(x.q).f.P(D.eya)
return}if(w.w===v)w.a_Z(!0)
w.cZ(new C.ee4(w,v))},
bAZ(){var w=this.jo(),v=w==null
if((v?null:w.b)===D.eW)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cO)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aJp(d,e){var w=this,v=w.jo(),u=w.gdk(),t=w.e
if(t==null)return
w.cZ(new C.edg(w,v,d,e,t,u))},
bvB(d){return this.aJp(d,null)},
a67(d){return this.bvJ(d)},
bvJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a67=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a3d.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nw(),$async$a67)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jo()
if(s!=null){r=s.b
if(r===D.cO)t.bvB(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eW){r=d.c
t.aJp(r.j(0.88),r)}w=1
break}t.cZ(new C.edl(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a67,v)},
a66(d){return this.bvH(d)},
bvH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a66=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.nw(),$async$a66)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.edj(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a66,v)},
bvr(d){var w=this.gdk()
if(w==null)return
this.cZ(new C.edf(this,w,d))},
YE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hRs(r),$async$YE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nD()
t.n(new C.egi(t,s))
w=4
return B.b(t.rJ(),$async$YE)
case 4:if(t.c!=null)t.aco(s)
case 1:return B.h(u,v)}})
return B.i($async$YE,v)},
a7E(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_Z(!0)
t.nD()
s=t.c
s.toString
w=3
return B.b(C.Pu(s,q),$async$a7E)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.H(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7E,v)},
Cr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Cr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nD()
t=4
w=7
return B.b(C.aN4(m),$async$Cr)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aMu(o,q,m.b),$async$Cr)
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
return B.i($async$Cr,v)},
E2(d,e){return this.csn(d,e)},
csn(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$E2=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.px()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_Z(!0)
t.nD()
s=h.a=t.e.hs()}else{r=A.d.bi(t.d,new C.eix(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hL_(q?"":s)
o=C.h3I(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a4<1>")
n=B.z(new B.a4(s,new C.eiy(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.clY(n.length,o,s),$async$E2)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hKU(h.a)
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
return B.b(t.clX(n,o),$async$E2)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kZ(t.d,new C.eiz(s))
s=h.a.b
w=11
return B.b(t.clV(k.b,s),$async$E2)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hKZ(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.H(x.q).f.P(D.ezk)
w=1
break}w=12
return B.b(t.clW(j.a,s,o,j.c),$async$E2)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.eiA(h,t,i))
t.oB()
case 1:return B.h(u,v)}})
return B.i($async$E2,v)},
clY(d,e,f){var w=this.c
w.toString
return B.c2(A.K,null,new C.ei3(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
clX(d,e){var w=this.c
w.toString
return B.c2(A.K,null,new C.ei2(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
clV(d,e){var w=this.c
w.toString
return B.c2(A.K,null,new C.ehX(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
clW(d,e,f,g){var w=this.c
w.toString
return B.c2(A.K,null,new C.ehZ(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a94(){var w=null
return B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a95(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a3(A.ax,A.aC,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eJ7,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a3,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQX(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Rj,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aR_(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a3(A.ax,A.aC,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.a1,!0,w,B.aI(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.mX,w,w,w),A.d4,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a3,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.Ae,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eeX(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad)},
bRm(d,e,f,g,h,i){return this.aR_(d,e,f,!1,g,h,i)},
arI(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dO,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VZ,w,w,w)},
aQZ(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cc,w,new B.b6(B.m(14),A.X),w,w,w)
return B.bL(B.d(e,w,w,w,w,w,w,A.mW,w,w,w),new C.eeW(d,f),v)},
aQY(d,e){return this.aQZ(d,e,null)},
IB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oD(l,s.c,s.d),$async$IB)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aN("=",l.length)+"\n\n"
q=new B.f7(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gah(o.z),n=new B.hK(l,new C.ehP());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7P(l.charCodeAt(0)==0?l:l,r.b),$async$IB)
case 4:l=t.a
w=5
return B.b(B.oC(l.c,l.d),$async$IB)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IB,v)},
GO(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oD(q,s.c,s.d),$async$GO)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7P(A.Q.al(r.ac(),null),r.b+".json"),$async$GO)
case 4:q=t.a
w=5
return B.b(B.oC(q.c,q.d),$async$GO)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GO,v)},
b1r(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nD()
u.rJ()
w=u.c
w.toString
v=B.eD(new C.ein(u,t),!1,null,x.z)
B.a9(w,!1).cp(v)},
G1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$G1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$G1)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.foQ(),$async$G1)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hNL(s.a)
q=t.c
q.toString
w=5
return B.b(B.c2(A.aF,null,new C.ecH(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$G1)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.ecI(t,s))
w=1
break}if(p==="split")t.cZ(new C.ecJ(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$G1,v)},
LO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}w=3
return B.b(t.nw(),$async$LO)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aN3(s,null,null),$async$LO)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ecN(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LO,v)},
aZ9(d){var w=this.e
if(w==null||!C.kk(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKH(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aN3(s,t==null?null:B.aY(t),u)},
a5O(d){return this.btT(d)},
btT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yW()){s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.ezz)
w=1
break}w=3
return B.b(t.aKH(),$async$a5O)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ecE(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5O,v)},
ae0(d){return this.cf6(d)},
cf6(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yW()){s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.eyI)
w=1
break}w=3
return B.b(t.aKH(),$async$ae0)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.egE(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ae0,v)},
c2c(){var w,v,u=this
if(u.jK())return
w=new B.Q(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bw(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.crs()}},
crs(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.eiv(this,r,(A.o.az(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bRH(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.ef_(this,r,u.d))},
bW8(d){var w
if(this.jK())return!1
w=this.e
if((w==null?null:C.kk(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.flq(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kJ&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bW9(d){var w
if(this.jK())return!1
w=this.e
if((w==null?null:C.kk(w.w))!==!0)return!0
if(!this.yW())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.flq(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kJ&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LX(d){return this.bw8(d)},
bw8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yW()){s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.exy)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ann(p),$async$LX)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.H(x.q).f.P(D.eyc)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5i(r)
w=1
break}t.n(new C.edp(t,d,o))
t.nD()
$.aT.x1$.push(new C.edq(t))
case 1:return B.h(u,v)}})
return B.i($async$LX,v)},
TR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$TR)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bz6(),$async$TR)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ecB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TR,v)},
MG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$MG)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jo()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.foH(r),$async$MG)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.eer(s,q))
case 1:return B.h(u,v)}})
return B.i($async$MG,v)},
iC(d){this.cZ(new C.ecK(this,d))},
pm(d){return this.bvk(d)},
bvk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.px()){w=1
break}m=!D.aHM.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nw(),$async$pm)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.G1()
w=1
break A
case"sign_paper":t.LO()
w=1
break A
case"hd_photo":t.TR()
w=1
break A
case"sharpen":t.MG()
w=1
break A
case"print":t.Cr()
w=1
break A
case"rotate":s=t.jo()
if(s!=null)t.cZ(new C.ecT(s))
w=1
break A
case"text_box":t.aII()
w=1
break A
case"picture":t.TT()
w=1
break A
case"present":t.b1r()
w=1
break A
case"new_slide":t.a5Q()
w=1
break A
case"export_json":t.GO()
w=1
break A
case"outline_share":t.IB()
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
break A}t.cZ(new C.ecU(t,s))
w=1
break A
case"delete_el":t.apo()
w=1
break A
case"bring_fwd":s=t.jo()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ecV(t,s))
w=1
break A
case"send_back":s=t.jo()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ed5(t,s))
w=1
break A
case"align_left":s=t.jo()
if(s!=null)t.cZ(new C.ed8(s))
w=1
break A
case"align_center":s=t.jo()
if(s!=null)t.cZ(new C.ed9(s))
w=1
break A
case"align_right":s=t.jo()
if(s!=null)t.cZ(new C.eda(s))
w=1
break A
case"grayscale":case"brighten":t.MG()
w=1
break A
case"flip_h":s=t.jo()
if(s!=null)t.cZ(new C.edb(s))
w=1
break A
case"flip_v":s=t.jo()
if(s!=null)t.cZ(new C.edc(s))
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
case"arrow":t.on(D.Bj)
w=1
break A
case"line":case"divider":t.on(D.fl)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gah(r.z),p=new B.hK(q,new C.edd()),o=0;p.C();){n=A.a.fn(A.a.i(q.gT(0).r),B.ae("\\s+",!0,!1,!1,!1))
o+=new B.a4(n,new C.ede(),B.U(n).k("a4<1>")).gJ(0)}t.c.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cy()
t.iC(C.iM(A.L,!1,t.gpB().d.l(),A.aA,40,A.bi,A.u,0.18,q,"Presentation Title",0,D.me,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cy()
t.iC(C.iM(A.L,!1,t.gpB().e.l(),A.aA,22,A.bi,A.a3,0.12,q,"Subtitle goes here",0,D.db,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iC(C.iM(A.bf,!0,4279310375,A.aA,20,A.bi,A.a3,0.5,C.cy(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tp,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iC(C.iM(A.bf,!1,4279310375,A.aA,20,A.bi,A.a3,0.5,C.cy(),"1. First item\n2. Second item\n3. Third item",0,D.to,0.8,0.1,0.22))
w=1
break A
case"quote":t.iC(C.iM(A.L,!1,4279310375,A.aA,24,A.cx,A.a3,0.25,C.cy(),'"Insert meaningful quote here."',0,D.db,0.8,0.1,0.3))
w=1
break A
case"citation":t.iC(C.iM(A.bf,!1,4284773515,A.aA,14,A.bi,A.a3,0.1,C.cy(),"Author, Title (Year). Publisher.",0,D.tp,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iC(C.iM(A.dM,!1,4279310375,A.aA,14,A.bi,A.a3,0.08,C.cy(),C.bz8(),0,D.db,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iC(C.iM(A.dM,!1,4279310375,A.aA,13,A.bi,A.a3,0.06,C.cy(),"Page "+(t.f+1),0,D.db,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.ecW(t))
w=1
break A
case"footer_bar":t.cZ(new C.ecX(t))
w=1
break A
case"highlight":t.cZ(new C.ecY(t))
w=1
break A
case"redact":t.cZ(new C.ecZ(t))
w=1
break A
case"callout":t.cZ(new C.ed_(t))
w=1
break A
case"checkboxes":t.iC(C.iM(A.bf,!1,4279310375,A.aA,20,A.bi,A.a3,0.45,C.cy(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.db,0.8,0.1,0.2))
w=1
break A
case"table":t.iC(C.iM(A.bf,!1,4279310375,A.aA,16,A.bi,A.a3,0.55,C.cy(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.db,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.ed0(t))
w=1
break A
case"letter":t.iC(C.iM(A.bf,!1,4279179050,A.aA,17,A.bi,A.a3,0.82,C.cy(),C.bz8()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.db,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iC(C.iM(A.bf,!1,4279310375,A.aA,22,A.bi,A.O,0.76,C.cy(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tp,0.8,0.1,0.12))
w=1
break A
case"toc":t.iC(C.iM(A.bf,!1,4279310375,A.aA,18,A.bi,A.a3,0.76,C.cy(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.db,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iC(C.iM(A.bf,!1,4279310375,A.aA,16,A.bi,A.a3,0.08,C.cy(),"Signature: _________________________",0,D.db,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iC(C.iM(A.bf,!1,4279310375,A.aA,16,A.bi,A.a3,0.08,C.cy(),"Initials: ______",0,D.db,0.3,0.65,0.78))
w=1
break A
case"approved":t.iC(C.iM(A.L,!1,4278556265,A.aA,28,A.bi,A.u,0.12,C.cy(),"APPROVED",0,D.me,0.32,0.62,0.08))
w=1
break A
case"draft":t.iC(C.iM(A.L,!1,4292617766,A.aA,28,A.bi,A.u,0.12,C.cy(),"DRAFT",0,D.db,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iC(C.iM(A.L,!1,871318596,A.aA,36,A.bi,A.u,0.12,C.cy(),"CONFIDENTIAL",0,D.db,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.ed1(t))
w=1
break A
case"progress":t.cZ(new C.ed2(t))
w=1
break A
case"stars":t.iC(C.iM(A.L,!1,4279310375,A.aA,36,A.bi,A.a3,0.12,C.cy(),"\u2605\u2605\u2605\u2605\u2606",0,D.pr,0.8,0.1,0.4))
w=1
break A
case"equation":t.iC(C.iM(A.L,!1,4279310375,A.aA,32,A.bi,A.O,0.14,C.cy(),"y = mx + b",0,D.db,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iC(C.iM(A.L,!1,4279310375,A.aA,18,A.bi,A.a3,0.2,C.cy(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.to,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.ed3(t))
w=1
break A
case"compare":t.cZ(new C.ed4(t))
w=1
break A
case"link_text":t.iC(C.iM(A.bf,!1,4280640491,A.mi,16,A.bi,A.a3,0.1,C.cy(),"https://example.com",0,D.db,0.8,0.1,0.5))
w=1
break A
case"phone":t.iC(C.iM(A.bf,!1,4279310375,A.aA,18,A.bi,A.a3,0.1,C.cy(),"(555) 123-4567",0,D.db,0.8,0.1,0.5))
w=1
break A
case"email":t.iC(C.iM(A.bf,!1,4280640491,A.aA,18,A.bi,A.a3,0.1,C.cy(),"name@email.com",0,D.db,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.ed6(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cZ(new C.ed7(t,r))
w=1
break A
case"invoice":t.iC(C.iM(A.bf,!1,4279179050,A.aA,16,A.bi,A.a3,0.84,C.cy(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.db,0.8,0.1,0.08))
w=1
break A
case"resume":t.iC(C.iM(A.bf,!1,4279179050,A.aA,17,A.bi,A.a3,0.84,C.cy(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.db,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iC(C.iM(A.bf,!1,4279310375,A.aA,16,A.bi,A.a3,0.88,C.cy(),"MEETING MINUTES\nDate: "+C.bz8()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.db,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iC(C.iM(A.bf,!1,4279310375,A.aA,17,A.bi,A.a3,0.88,C.cy(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.db,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iC(C.iM(A.bf,!1,4279310375,A.aA,15,A.bi,A.a3,0.8,C.cy(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.db,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pm,v)},
clp(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eqs.t(0,this.z)},
clo(d){if(this.jo()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b2X(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cd,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hNA(d)
s=o?12:18
r=o?A.I:A.cK
if(o)if(e)q=f
else q=g?A.af:A.aj
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.N(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.LF,A.h,p,p,D.CB,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.hn,B.aH(p,new B.am(A.W,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bH8(d){var w,v=null,u=this.jo()
if(u==null)return A.bF
w=B.a([A.aa,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.aj,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.J(D.O7,new C.eeq(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
un(d){return this.bu0(d)},
bu0(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$un=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aHH.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nw(),$async$un)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecL(t,d))
case 1:return B.h(u,v)}})
return B.i($async$un,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.epA
w=h.e
if(w==null)return h.bxK()
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
p=B.aG(u,A.et,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bX:D.b1D
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQx()}else j=!1
if(j)k.push(new C.a5M(h.a.c,!1,h.e.gb58(),h.gc29(),g))
else if(s&&h.e!=null&&!h.jK()&&C.c9T(h.e.w)){j=h.a
k.push(new C.a5M(j.c,j.d,g,h.gc3i(),g))}if(s)k.push(h.bH4(w,t,r))
if(s&&h.jK()){w=t?A.fw:A.k4
j=B.m(14)
i=B.H(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.byI,A.aa,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fw,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zF,A.iK,g,g,g))}w=!n
if(w&&!h.jK())k.push(h.bX4(t,r))
if(w&&h.jK())k.push(h.cso(t))
if(r&&h.jo()!=null&&w&&!h.jK())k.push(h.bX0(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b0Y(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b0Y(t,!1),g))
i.push(B.D(new B.bI(A.aX,g,g,h.bz_(v,t,!s||p),g),1))
if(h.clp(r)&&u&&s&&!h.jK())i.push(h.c1Y(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jK()&&h.clo(!1))j.push(new B.a5(240,g,h.bJC(t),g))
k.push(B.D(B.B(j,A.ag,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bX1(t))
return B.ce(g,m,B.bq(!1,new B.am(A.W,g,A.a9,A.q,w,g),!0,!1,A.ah,!0,!0),g,!1,!1,g,!1)},
bxK(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.M(p).ax.a===A.H
p=w?A.bX:A.bN
v=r.a.e
u=r.c1d(A.bk,A.p8,new C.edt(r),r.gc5q(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.D(r.aIr(A.bk,A.hD,"Blank Presentation",new C.edu(r)),1),A.aw,B.D(r.aIr(A.aW,A.xd,"Class Template",new C.edv(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bu,s,A.mh,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.aj,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ab],t)
t=r.d
if(t.length===0)u.push(r.buN(w))
else{t=new B.hx(t,B.U(t).k("hx<1>"))
A.d.v(u,t.gdH(t).di(0,new C.edw(r,w),x.l))}return B.ce(q,p,B.bq(!1,B.cM(u,q,new B.N(18,12,18,v),q,q,A.ak,!1),!0,!1,A.ah,!0,!0),q,!1,!1,q,q)},
bFt(){this.n(new C.ee6(this))
var w=this.c
w.toString
if(B.aG(w,A.bR,x.w).w.a.a<900){w=$.aT.ag$.d.c
if(w!=null)w.jf()}},
acH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jo()==null){w=1
break}s=t.c
s.toString
s=B.M(s)
r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.egh(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acH)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acH,v)},
zS(d,e){return this.clL(d,e)},
clL(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zS=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hN(D.TN,!0,"Dismiss",j,new C.ehQ(),new C.ehR(d,e),A.io,!0,x.N),$async$zS)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ag4()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQx()){r.ag4()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aN4(d),$async$zS)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aMu(j,q,d.b),$async$zS)
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
return B.b(r.E2(d,!1),$async$zS)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hN(D.TN,!0,"Dismiss",j,new C.ehS(),new C.ehT(d),A.a1,!0,x.y),$async$zS)
case 20:if(g===!0)r.Ms(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adL("Rename presentation",d.b),$async$zS)
case 24:l=g
if(l!=null)r.cgk(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.m(0,"id",C.cy())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.ehU(r,k))
r.oB()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zS,v)},
aX9(d,e){var w=null
return B.bK(!1,D.f5j,w,w,!0,w,w,e,w,B.fr(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.at,w,A.lr,w,w,w,w,w,A.kb,w,w))},
buN(d){var w=this.fy
w===$&&B.c()
return B.c3(w,new C.ecQ(this,d),null)},
bDB(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.edV(),x.dv).bZ(0,new C.edW()),v=B.z(w,w.$ti.k("G.E"))
return new B.C(G.acr,this.aJ_(v,e,new C.edX(),f),null)},
aJ_(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eA)
t=e.j(g?0.14:0.1)
s=new B.b1(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.af:A.bt,n,n,n,10),A.ve],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cC(A.b0,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c1(r,r,r,r),new B.bv(s,s,s,s),n,n,A.n),n,n,n,n,A.nt,n,n,n))
A.d.v(l,u)}return B.f_(A.a4,B.B(l,A.m,n,A.e,A.R,0,n,n),A.h,A.eb)},
buL(d,e,f){return this.aJ_(d,e,null,f)},
bDD(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cXg
else if(v==="hati_kuhoweya")w=D.cKu
else{if(v==="hati_kiapo_uongozi")v=D.cy9
else v=C.kk(v)?D.cEO:A.NK
w=v}v=this.fy
v===$&&B.c()
return B.c3(v,new C.ee_(this,f,d,e,w),null)},
bX1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jo()
if(i==null||i.b!==D.cO)return A.bF
w=k.UJ(i)
v=k.aqo(i)
u=A.x.j(0.55)
t=x.p
s=B.bq(!1,new B.C(A.zI,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b8,B.bK(!1,D.f1h,j,j,!0,j,j,new C.efq(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ah,!0,!0)
r=d?A.aF:A.c
q=B.m(18)
p=B.H(A.bk.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h8,B.bU(new B.C(A.eN,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bk,j,j,j,j,2,D.bEt,A.z,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.vg,j,j,j,j,j,j,!1,"\u2022",j,new C.efr(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.ym,A.am,j,A.QP,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bb),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.D(B.ci(B.B(B.a([k.t6(G.KK,j,new C.efs(k,i),d),k.t6(G.X_,j,new C.eft(k,i),d),k.t6(I.agt,j,new C.efu(k,i),d),k.t6(I.XJ,j,new C.efv(k,i),d),k.t6(k.buJ(i.as),j,new C.efw(k,i),d),k.t6(D.ahB,j,new C.efx(k,i),d),k.t6(D.ahA,j,new C.efy(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.b0),1)
m=A.k.N(i.w)
return B.bZ(0,B.aD(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bg8,B.p(j,B.B(B.a([n,A.aa,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.aj,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d7],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.kZ,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ad),0,0,0)},
bX0(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jo()
if(m==null)return A.bF
w=m.b
v=w===D.cO
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aN],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.ab(0,A.G,A.x.j(0.12),A.cs,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b_D(A.j3,"Edit",new C.efb(o,m),d,!0))
if(w===D.l7)p.push(o.b_D(A.EL,"Shape & ring",new C.efc(o),d,!0))
p.push(o.t6(Ae.ES,"Format",new C.efd(o),d))
if(v)A.d.v(p,B.a([o.t6(G.KK,n,new C.efe(o,m),d),o.t6(D.ahB,n,new C.eff(o,m),d),o.t6(D.ahA,n,new C.efg(o,m),d)],q))
p.push(A.b8)
p.push(o.cjF(A.e7,n,o.gaMX(),d,!0))
p.push(o.t6(A.hq,"Done",new C.efh(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a3(A.a4,A.a7,A.w,t,n,n),A.n),n,n,n,A.DN,A.kZ,n,n,n)},
buJ(d){switch(d.a){case 2:return D.XG
case 1:case 5:return D.XI
default:return D.XH}},
bXR(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bf}},
aws(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aD
else if(h)w=A.c
else{v=g?A.af:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.F7:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eA,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qi,B.aD(!1,A.a1,!0,n,B.aI(!1,v,!1,B.es(new B.C(new B.N(q,8,q,8),B.B(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ad),n)},
t6(d,e,f,g){return this.aws(d,e,f,g,!1,!1)},
b_D(d,e,f,g,h){return this.aws(d,e,f,g,h,!1)},
cjF(d,e,f,g,h){return this.aws(d,e,f,g,!1,h)},
bH4(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mr],m)
w=B.H(e?A.aI:A.pY,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bk.j(e?0.18:0.1),A.cs,18)],x.V)
u=p.a0o(A.er,"Back",p.gbAJ(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d7,B.D(B.B(B.a([new B.dm(1,A.cl,t,o),A.aa,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c2:A.aj,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rC,o,A.e,A.j,0,A.cU,o),1)],q)
if(!p.jK()){u=p.a0o(A.uK,"Undo",p.ax.length===0?o:p.gcsT(),e)
A.d.v(r,B.a([u,p.a0o(D.bsl,"Redo",p.ay.length===0?o:p.gcf2(),e)],q))}r.push(p.a0o(A.wV,"PDF",new C.eej(p),e))
r.push(p.a0o(A.hr,"Download as video",new C.eek(p),e))
if(!p.jK())r.push(B.AS(o,o,B.V(A.nw,e?A.af:A.bt,o,o,o,o),new C.eel(p),A.J,new C.eem(p),A.ah,"More",x.N))
r.push(A.d7)
r.push(B.aD(!1,A.a1,!0,o,B.aI(!1,B.m(14),!0,B.es(D.dQC,o,new B.o(o,o,o,B.m(14),o,K.F7,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaxh(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ad))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a3(A.ax,A.aC,A.w,m,o,o),A.n),o,o,o,D.bg3,D.blb,o,o,o)},
cso(d){var w=this,v=null,u=B.m(18),t=d?A.aF.j(0.92):A.c.j(0.96),s=B.H(d?A.cJ:A.aJ,A.r,1)
return B.p(v,B.ci(B.B(B.a([w.ij(A.t5,"Print",new C.eiB(w),d),w.ij(A.wV,"Download PDF",new C.eiC(w),d),w.ij(A.pe,"Present",w.gaxh(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.b0),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zF,G.ae8,v,v,v)},
a0o(d,e,f,g){var w,v=null
if(f==null)w=g?A.b9:A.dr
else w=g?A.af:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c8)},
bX4(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aF.j(0.92):A.c.j(0.96)
u=B.H(d?A.cJ:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.J(p,new C.efB(r,d),t),t.k("ai.E"))
t.push(new B.C(W.adQ,new B.fk(new C.efC(r),q),q))
A.d.v(t,w?B.a([new B.C(S.up,r.aen(A.l_,"Ending celebration",r.gc5D(),d),q),new B.C(S.up,r.aen(A.EL,"Logo ring & frame",r.gc6i(),d),q)],x.p):A.fZ)
A.d.v(t,w?B.a([new B.C(S.up,r.aen(A.nx,"Look and feel",r.gc6j(),d),q),new B.C(S.up,r.aen(A.pi,"Edit this slide's text",r.gc6Q(),d),q)],x.p):A.fZ)
t.push(new B.C(S.up,B.hq(B.aH(q,B.p(q,D.ep4,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ab(0,A.G,O.kV.j(0.4),A.J,10)],x.V),D.ajy,A.n),q,34,q,q,A.ir,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.efD(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ci(B.B(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.blE,q,q,A.b0)
s=e?8:10
return B.p(q,B.v(B.a([t,B.ci(r.chr(d),A.q,q,A.z,q,new B.N(8,2,8,s),q,q,A.b0)],x.p),A.ag,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zF,q,q,q,q)},
chr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cRN[v]
u.a=null
s=u.a=t.b
w.push(e.ld(e.cj5(s),t.a,new C.eh_(u,e),a3,D.aHH.t(0,s)))}w.push(e.ij(A.kC,"Notes Slide",new C.eh0(e),a3))
w.push(e.ld(A.EK,"Quiz",new C.eh1(e),a3,!0))
w.push(e.ld(L.En,"Worksheet",new C.ehc(e),a3,!0))
w.push(e.ld(P.EO,"Flashcard",new C.ehn(e),a3,!0))
w.push(e.ld(A.Lw,"Lab Report",new C.ehy(e),a3,!0))
w.push(e.ld(A.x0,"Rubric",new C.ehF(e),a3,!0))
w.push(e.ld(A.oc,"Minutes",new C.ehG(e),a3,!0))
w.push(e.ld(A.pc,"Syllabus",new C.ehH(e),a3,!0))
w.push(e.ld(A.LA,"Timeline",new C.ehI(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cSY[v]
w.push(e.ld(r.b,r.c,new C.ehJ(e,r),a3,!D.aHM.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.ij(A.xg,a0,e.gaIH(),a3),e.ij(A.t2,"Picture",new C.eh2(e),a3),e.ij(A.xa,"Bio link",new C.eh3(e),a3),e.ij(A.Ye,"Table",new C.eh4(e),a3),e.ij(A.Lz,"Sticky",new C.eh5(e),a3),e.ij(A.uA,"Divider",new C.eh6(e),a3),e.ij(A.ET,"Header",new C.eh7(e),a3),e.ld(A2.Et,"Rectangle",new C.eh8(e),a3,!0),e.ld(A.rV,"Circle",new C.eh9(e),a3,!0),e.ld(A.Xx,"Triangle",new C.eha(e),a3,!0),e.ld(A.jl,"Arrow",new C.ehb(e),a3,!0),e.ld(D.bqP,"Parallelogram",new C.ehd(e),a3,!0),e.ld(D.btk,"Hexagon",new C.ehe(e),a3,!0),e.ld(A.uA,"Line",new C.ehf(e),a3,!0),e.ld(A.wV,"PDF",new C.ehg(e),a3,!0),e.ld(O.Ym,"Signature",new C.ehh(e),a3,!0),e.ij(A1.Al,"Quote",new C.ehi(e),a3),e.ij(D.X7,a1,new C.ehj(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bR,x.w).w
u=x.p
t=B.B(B.a([e.aJw("Wide 16:9",D.Bh,a3),e.aJw("Short 9:16",D.nF,a3),new B.C(A.hn,B.mN(D.bvq,d,D.eYU,d,new C.ehk(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bAY("This slide",!e.Q,a3,new C.ehl(e)),A.bp,e.aLH("All slides",e.Q,a3,new C.ehm(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bAZ()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a3,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.J(D.a_8,new C.eho(e),n),n.k("ai.E"))
n=B.ci(B.B(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b0)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cTL[v]
j=B.aY(k)
i=new B.ay(k===4294967295?A.dr:A.b9,1.5,A.r,-1)
l.push(new B.C(A.hn,B.aH(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c1(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ehp(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.ci(B.B(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b0)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bAo()
g=B.U(h).k("J<1,C>")
h=B.z(new B.J(h,new C.ehq(e,a3),g),g.k("ai.E"))
return new B.a5(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ar,p,A.P,o,A.av,n,A.P,m,A.av,l,A.P,j,A.av,B.ci(B.B(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b0),A.ar,e.bU1(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.jo()
w=e.c
w.toString
w=B.aG(w,A.bR,x.w).w
u=new C.egZ(e)
t=new C.ehK(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.O7,f.dy,new C.ehr(e,u,f),A.aW)
A.d.v(p,B.a([o,A.av,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.O7,q,new C.ehs(e,u),A.bk))
return new B.a5(w.a.a-20,d,B.v(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.ij(A.kC,w,new C.eht(e),a3),e.ij(A.t5,"Print deck",new C.ehu(e),a3),e.ld(D.afC,"Export JSON",new C.ehv(e),a3,!0),e.ij(A.fD,"Duplicate Slide",e.gaNL(),a3),e.ij(A.e7,a2,e.gaMY(),a3),e.cn3(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jo()
w=x.p
u=B.a([e.ij(D.X7,a1,new C.ehw(e),a3),e.ij(A.fD,"Duplicate",e.gaNL(),a3),e.ij(A.e7,a2,e.gaMY(),a3),e.ij(A.pe,"Present",e.gaxh(),a3),e.ij(A.At,a0,e.gaIH(),a3),e.ij(A.EH,"Fit Text",new C.ehx(e),a3),e.ij(A.wV,"Download PDF",new C.ehz(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ij(A.kE,"Transfer",new C.ehA(e),a3))
if(f!=null){w=B.a([A.aa,e.ij(G.KK,"Bold",new C.ehB(e,f),a3),e.ij(G.X_,"Italic",new C.ehC(e,f),a3),e.ij(G.afd,"Underline",new C.ehD(e,f),a3),e.ij(Aa.KL,"Bullets",new C.ehE(e,f),a3),e.bJl(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bH8(a3))
w.push(e.ij(D.bpw,"Delete",e.gaMX(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aJw(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nF
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4N,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d7,D.buC],v))
return new B.C(A.hn,B.jS(t,t,t,B.B(u,A.m,t,A.e,A.R,0,t,t),t,new C.edo(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cn3(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.b9:A.cp,A.r,1)
u=B.m(8)
t=B.V(A.El,d?A.az:A.aj,q,q,q,14)
s=B.aF(q,q,q,q,D.aiz,q,q,q,new C.ei6(r,p),q,q,q,q,q,A.c8)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bg,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.aip,q,q,q,new C.ei7(r,p),q,q,q,q,q,A.c8)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.E1,A.m_,q,q,q)},
cj5(d){switch(d.a){case 6:return P.EO
case 7:return A.EK
case 8:return L.En
case 4:return A.ET
default:return A.kC}},
bJl(d,e){var w=null,v=B.H(e?A.b9:A.cp,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aiz,w,w,w,new C.eew(this,d),w,w,w,w,w,A.c8),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bg,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.aip,w,w,w,new C.eex(this,d),w,w,w,w,w,A.c8)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wF,A.m_,w,w,w)},
bU1(d){var w=null
return B.AS(B.Cj(B.V(Ad.Xa,d?A.af:A.bt,w,w,w,16),w,w,D.f3_,w,w,w),w,w,new C.ef3(),A.J,this.gbvq(),A.ck,"Slide layout",x.fO)},
ld(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.H(g?A.dv:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dB:A.bk,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.LF,A.h,w,w,D.CB,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.hn,B.aD(!1,A.a1,!0,w,B.aI(!1,v,!0,B.es(new B.C(A.h8,B.v(B.a([new B.am(A.W,w,A.a9,A.h,q,w),A.d4,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bt,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad),w)},
ij(d,e,f,g){return this.ld(d,e,f,g,!1)},
b0Y(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ak:A.b0
v=B.hH(t,new C.eii(u,s,e,d),s.r.length,A.ck,t,w,new C.eij(e),!1)
s=d?A.aF:A.bN
w=B.a([],x.p)
if(e&&!u.jK())w.push(new B.C(A.ck,B.Gn(E.aiM,new C.eik(u),B.nb(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aIo,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
bz_(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nF?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.N(u,u,u,u),new B.bI(A.aX,v,v,new B.fD(w,B.aH(v,B.ck(new C.edN(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.edO(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
bz1(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kk(a9.w))===!0,b1=b0&&C.flq(b3),b2=b0&&b3.b===D.kJ&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jK())v=!b0||a7.bW9(b3)
else v=!1
if(!a7.jK())u=!b0||a7.bW8(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cj:A.bk
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fJ7(b3))o=a8
else if(p&&!a7.jK())o=a7.gc2b()
else o=a7.jK()?a8:new C.edB(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jJ
i=w&&C.fJ7(b3)&&a7.yW()?new C.edC(a7,b3):a8
h=v&&b3.b===D.cO?new C.edD(a7,b3):a8
g=u?new C.edE(a7,b3,b4,b5):a8
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
a2=w&&a7.yW()
a3=b3.b===D.cO
a4=a3?a7.UJ(b3):a8
a5=a3?a7.aqo(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bR,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.edF(a7,b3):a8
a3=v&&a3?new C.edG(a7,b3):a8
a6=C.aYY(q,a4,a1,b3,a5,a2,a3,new C.edH(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aH(a8,B.p(a8,D.bxn,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.edI(a7,b3,b4,b5),a8,a8,new C.edJ(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jK()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aH(a8,B.p(a8,D.by1,A.h,a8,a8,new B.o(A.eC,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbRG(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jK()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aH(a8,B.p(a8,D.bzz,A.h,a8,a8,new B.o(A.bT,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.edK(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cO)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bR,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.au(B.aH(a8,B.p(a8,D.fb5,A.h,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ab(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kz,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.edL(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aH(j,B.eu(A.A,f,new B.am(A.W,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLH(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bk:A.bG,A.r,1)
if(e)t=A.bk
else t=f?A.az:A.aj
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d7,B.p(r,D.LF,A.h,r,r,D.CB,r,12,r,r,r,r,r,12)],s))
return B.aH(r,B.p(r,B.B(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.fX,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
bAY(d,e,f,g){return this.aLH(d,e,f,g,!1)},
c1Y(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
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
t=f?A.vJ:l
if(f)s=new B.c1(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.X,A.X,A.X)
else s=l
r=f?B.a([new B.ab(0,A.G,A.x.j(0.12),A.qM,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.af:A.bt,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b8,m.aX9(e,new C.efF(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ar,B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b3(4,B.m(10),A.dd),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.efG(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.ag,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.N(12,w,12,v),l,l,l)},
aP0(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jo()
if(a2==null)return A.bF
w=new C.eeK(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dL:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b8,a0.aX9(a3,a0.gbFs())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.eZk,B.D(B.mg(a1,a1,a1,u,0.05,new C.eeL(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.f9G,B.D(B.mg(a1,a1,a1,t,0.05,new C.eeM(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cO
if(m)o.push(B.B(B.a([D.eTB,B.D(B.mg(a1,a1,a1,96,10,new C.eeN(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l7
if(l||n===D.kJ||n===D.Po)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.f3E,B.D(B.mg(a1,a1,a1,s,0,new C.eeO(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.faQ,B.D(B.mg(a1,a1,a1,r,0,new C.eeP(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.AI[j]
i.a=null
g=h.a
i.a=g
k.push(B.jS(a1,a1,a1,new B.w(h.b,a1,A.oz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eeQ(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c9(A.bJ,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.AD[j]
f.a=null
g=e.a
f.a=g
h.push(B.jS(a1,a1,a1,new B.w(e.b,a1,A.oz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eeR(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.c9(A.bJ,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.J(v,new C.eeS(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.c9(A.bJ,l,A.bx,6,6),A.ab,B.fUX(new C.eeT(w,a2),D.c9z,B.eN([a2.as],k),!0,a1,k)],p))}if(n===D.eW){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.J(v,new C.eeU(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c9(A.bJ,m,A.bx,0,6)],p))}o.push(A.ab)
o.push(B.dq(D.bzl,D.f5u,new C.eeV(a0,a5),B.bk(A.bO,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cM(o,a1,a1,q,a1,A.ak,a5)
if(a5)return d
q=a3?A.cJ:A.c
p=a4?A.vJ:a1
if(a4)o=new B.c1(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.X,A.X,A.X)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.x.j(0.12),A.qM,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.DO,a1,a1,a1)},
bJC(d){return this.aP0(d,!1,!1,null)},
c1d(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c3(p,new C.eeY(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eK_,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.D(B.v(B.a([w,A.bA,A.d4,r.buL(D.cCr,d,B.M(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.aa,B.dP(B.hq(B.aD(!1,A.a1,!0,q,B.aI(!1,q,!0,B.es(D.etZ,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.ab(0,A.G,A.bT.j(0.4),A.e9,8)],p),D.ajD,A.a6),q,q,q),A.cH,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ad),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.M(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aZM,D.b_7],v):B.a([A.c,A.k4],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.ab(0,A.G,d.j(s?0.18:0.1),A.cs,14)],p),new B.a3(A.ax,A.aC,A.w,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aIr(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c3(w,new C.ecx(this,g,d,e,f),null)},
adL(d,e){return this.cdr(d,e)},
cdr(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.av()
q=new B.ap(new B.bc(e,A.b2,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.ch(null,null,!0,null,new C.egC(d,q),p,null,!0,!0,x.N),$async$adL)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adL,v)},
Oe(d){var w=d.bQ()
return""+B.bB(w)+"/"+B.bO(w)+"/"+B.bw(w)}}
C.acY.prototype={}
C.awe.prototype={
S(){return new C.b9n(null,null)}}
C.b9n.prototype={
gcp7(){var w,v=this.a.c,u=v.f.bQ(),t=""+B.bB(u)+"/"+B.bO(u)+"/"+B.bw(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bi(u,A.p0,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bi(u,D.bey,u,1,u,v)
w.cm(0)
v.e!==$&&B.aQ()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bol()},
HD(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.av(0,new B.hF(w,v,A.co).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.C(D.bk2,B.c3(new B.h4(B.a([u,w],x.dS)),new C.cVO(this),v),v),v,v,v)}}
C.b9B.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.au(new B.C(D.bkj,B.aD(!1,A.a1,!0,w,B.p(w,B.bu(B.m(22),B.v(B.a([new B.C(D.bjw,B.v(B.a([B.p(w,D.by7,A.h,w,w,new B.o(A.aD.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.f7n,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eL8,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dX,D.bdC,B.B(B.a([B.D(B.bK(!1,D.eXJ,w,w,!0,w,w,new C.cW9(d),w,B.fr(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mB,w,A.nJ,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bj,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.f1A,w,w,!0,w,w,new C.cWa(d),w,B.fr(w,w,w,w,w,w,w,w,w,w,w,A.aD,w,w,w,w,w,A.mB,w,A.nJ,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ao),A.h,w,N.SN,new B.o(A.aF,w,u,v,D.cCK,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad),w),w,w,w)}}
C.Ij.prototype={
S(){return new C.b9m()}}
C.b9m.prototype={
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
return B.dP(B.d8(B.aH(o,B.w8(B.dj(o,B.B(B.a([r,A.aw,new B.dm(1,A.cl,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.fj:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b7,A.R,0,o,o),o,o,A.ba,new B.o(n,o,u,v,t,o,A.n),A.eL,o,o,o,A.p4,o,o,1/0),A.co,A.ji,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cVJ(p,d),new C.cVK(p),new C.cVL(p),new C.cVM(p),o,o,o,!1,A.ae),k),new B.u(0,(1-k)*16))}}
C.NY.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.a1,!0,t,B.aI(!1,s,!0,new B.C(A.eN,B.B(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a3(A.ax,A.aC,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.mX,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.eo,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ad)}}
C.YD.prototype={
S(){return new C.aBD(D.db,null,null)}}
C.aBD.prototype={
gWV(){var w,v=this,u=v.w
if(u===$){w=B.bi(null,D.be8,null,1,null,v)
v.w!==$&&B.bJ()
v.w=w
u=w}return u},
b1m(d){if(!this.a.c.ay)return
this.x=d
this.gWV().ie(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.at9(D.eAl)
C.hKx()
v.PD()},
p(){var w=this,v=w.f
if(v!=null)v.aa(0)
w.gWV().p()
v=w.z
if(v!=null)v.aa(0)
C.at9(D.eAm)
C.hKA()
w.bqt()},
crP(){B.j8()
this.n(new C.ejh())
var w=this.c.H(x.q).f
w.a2r()
if($.bh2)w.P(D.exd)},
PD(){var w,v=this,u=v.f
if(u!=null)u.aa(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cP(B.dB(0,0,0,0,0,A.o.E(C.fT7(u,w),1,120)),new C.ej7(v))},
cru(){var w,v=this
v.n(new C.ejg(v))
if(v.r)v.PD()
else{w=v.f
if(w!=null)w.aa(0)}},
gaQQ(){var w=this.a.c.db
return(w==null?"":w).length!==0},
clR(){var w=this,v=w.f
if(v!=null)v.aa(0)
w.n(new C.ej8(w))
v=w.z
if(v!=null)v.aa(0)
if(w.a.c.ch&&w.r)w.z=B.cP(A.nr,new C.ej9(w))},
ata(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.aa(0)
if(u.a.c.ch){u.n(new C.ej3(u))
u.PD()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQQ()){u.clR()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.ej4(u,A.o.F(w+1,s)))
u.b1m(w)
u.PD()}},
cc6(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.aa(0)
v.n(new C.ej5(v))
v.PD()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.ej6(v,w,t))
v.b1m(w)
v.PD()}},
cnf(d){var w,v=this,u=v.e
if(u===D.cd){u=v.d
u===$&&B.c()
return new B.nd(d,new B.cx(u,x.ac))}w=v.cng(u)
u=v.d
u===$&&B.c()
return B.qm(new B.nd(d,new B.cx(u,x.ac)),w,new C.eje(),A.ba,A.ba,new C.ejf(v))},
cng(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.beu
case 16:return A.kX
case 18:return A.no
default:return A.p2}},
cne(d,e,f){var w,v,u,t=null,s=B.cF(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.tx,A.J,w),w.k("bd<bF.T>")),t,!0)
case 3:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.PE,A.J,w),w.k("bd<bF.T>")),t,!0)
case 4:case 21:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.i8,A.J,w),w.k("bd<bF.T>")),t,!0)
case 5:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.tw,A.J,w),w.k("bd<bF.T>")),t,!0)
case 6:case 16:w=x.b
return B.io(A.A,new B.cX(s,!1,e,t),t,new B.bd(s,new B.bl(0.82,1,w),w.k("bd<bF.T>")))
case 7:w=x.b
return B.io(A.A,new B.cX(s,!1,e,t),t,new B.bd(s,new B.bl(1.18,1,w),w.k("bd<bF.T>")))
case 8:return B.c3(s,new C.eja(s),e)
case 9:return B.c3(s,new C.ejb(s),e)
case 10:return B.c3(s,new C.ejc(s),e)
case 11:return B.c3(s,new C.ejd(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.io(A.A,e,t,new B.bd(s,new B.bl(1.03,1,w),w.k("bd<bF.T>"))),t)
case 14:w=s.gq(0)
v=x.K
return B.jB(B.je(e,new B.bd(s,new B.bl(A.tx,A.J,v),v.k("bd<bF.T>")),t,!0),A.q,new C.bnX(w,t))
case 15:w=x.K
return B.je(e,new B.bd(s,new B.bl(A.PE,A.J,w),w.k("bd<bF.T>")),t,!0)
case 19:w=B.di()
w.mf((1-s.gq(0))*2)
v=s.gq(0)
u=s.gq(0)
w.ji(v,u,v,1)
return B.fo(A.A,B.d8(e,s.gq(0)),t,w,!0)
case 20:return B.eu(A.A,(1-s.gq(0))*0.2,new B.cX(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jB(new C.alU(B.c3(n.gWV(),new C.eji(n,v,w),m),m),A.q,m)}else{t=B.qY(new C.Hj(w,!0,!1,m))
l=B.aY(w.e)
u=n.cnf(B.ed(B.jB(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.fT7(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oB,m,m,m),A.bp,D.bAn],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.fL,m,m,m)
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
l.push(B.bZ(0,new C.LU(new C.Do(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nF?0.5625:1.7777777777777777
l.push(B.au(new B.fD(r,B.jB(B.tT(A.ah,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bh2){r=B.Gn(A.kG,new C.ejj(d),B.nb(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.bq(!0,B.B(B.a([r,A.aa,B.Gn(B.V(n.r?Ah.x8:A.iM,m,m,m,m,m),n.gcrt(),B.nb(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ah,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.bq(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hg,m,m,m),A.h,m,m,new B.o(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.fL,m,m,m),!0,!1,A.ah,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.bq(!0,B.aH(A.c5,B.p(A.kQ,$.bh2?A.bF:s,A.h,m,m,m,m,64,m,m,D.bfg,m,m,150),A.z,!1,m,n.gcrO(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ah,!0,!0),m,m,m,0,0,m))
return B.ce(m,A.x,B.aH(m,new B.am(A.W,m,A.b_,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ejk(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.Iq.prototype={
B(d){var w=null
return B.p(w,B.bq(!0,new B.C(E.adC,this.c,w),!0,!1,A.ah,!0,!1),A.h,w,w,D.aT3,w,w,w,w,w,w,w,w)}}
C.bnX.prototype={
iJ(d){return new B.a7(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jl(d){return d.b!==this.b}}
C.bed.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aPV
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.aB:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dj(r,B.au(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uR,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.ba,new B.o(s.f,r,u,w,r,r,A.n),A.hS,r,64,r,r,r,r,64)
return B.aH(r,new B.a5(78,r,B.v(B.a([w,A.ar,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aB:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bec.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d4d.h(0,p)
if(o==null)o=D.cT3
p=p==="none"
w=p?q:new B.a3(A.a4,A.a7,A.w,o,q,q)
p=p?A.cW.j(0.25):q
v=r.e
u=v?B.H(A.aB,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahM:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eh,q,q,52)
return B.aH(q,new B.a5(66,q,B.v(B.a([w,A.ar,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aB:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aHi.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.aJk.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btD.prototype={}
C.aJl.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aZ0.prototype={}
C.Ub.prototype={
S(){return new C.aBB()},
bbA(d){return this.e.$1(d)}}
C.aBB.prototype={
gb_J(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga81(){var w,v
if(this.d==="all")return B.bj(this.a.d,!0,x.I)
w=this.gb_J()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaKm(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_J()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb0X(){return A.d.cG(this.ga81(),0,new C.eiO())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Pe()},
Pe(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZC(s.c,s.f),$async$Pe)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eiK(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Pe,v)},
HF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga81()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.foD(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oD(o,q.c,q.f),$async$HF)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eD(new C.eiN(t,p),!1,null,x.H)
w=4
return B.b(B.a9(o,!1).cp(q),$async$HF)
case 4:q=t.a
w=5
return B.b(B.oC(q.c,q.f),$async$HF)
case 5:w=6
return B.b(t.Pe(),$async$HF)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HF,v)},
PB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hm(o,D.dHh,!0,"NgmySlidesTransferScan",x.N),$async$PB)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.eiL(t))
w=4
return B.b(C.af3(s),$async$PB)
case 4:r=e
t.n(new C.eiM(t))
o=J.a8(r)
if(o.gai(r)){o=t.c
if(o==null){w=1
break}o.H(x.q).f.P(D.ew6)
w=1
break}w=5
return B.b(t.a.bbA(r),$async$PB)
case 5:q=t.c
if(q==null){w=1
break}B.a9(q,!1).M(null)
q=t.c.H(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PB,v)},
HE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga81()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oD(s,r.c,r.f),$async$HE)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.foS(null,A.d.gL(n),s,t.a.f)}else q=C.foS(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.ae("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Fa(q,"ngmy_slides_"+p,!1),$async$HE)
case 4:o=e
s=t.a
w=5
return B.b(B.oC(s.c,s.f),$async$HE)
case 5:w=6
return B.b(t.Pe(),$async$HE)
case 6:s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$HE,v)},
a0z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.eiP(t))
w=3
return B.b(C.byR(),$async$a0z)
case 3:s=e
t.n(new C.eiQ(t))
if(s==null||J.cj(s)){w=1
break}w=4
return B.b(t.a.bbA(s),$async$a0z)
case 4:r=t.c
if(r==null){w=1
break}B.a9(r,!1).M(null)
r=t.c.H(x.q).f
q=J.a8(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.P(B.b0(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0z,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.d9:A.bN,k=o.ga81().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.w,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.ct,m?A.af:A.aj,n,n,n,n),n,n,n,new C.eiT(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yj],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ab(0,A.G,A.bk.j(0.35),A.eQ,24)],x.V)
u=B.an(n,B.V(A.p8,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bAT,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bnS],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hq(B.aH(A.c5,D.eu0,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc71(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.W,n,A.a9,A.h,s,n),A.ao,n,n,new B.o(n,n,n,w,v,D.YR,A.n),n,n,n,n,E.VM,n,n,1/0),A.dX,o.auc(m,"What to transfer"),A.ab,B.B(B.a([B.D(o.aT1(A.pe,m,new C.eiU(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aT1(D.bqI,m,new C.eiV(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d3,o.auc(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aF:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c4,n,n,n))}else A.d.v(v,new B.J(u,new C.eiW(o,m),B.U(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.mh)
w.push(o.auc(m,"Transfer options"))
w.push(A.ab)
w.push(B.B(B.a([B.D(o.ana(A.aY,k,!0,A.j6,m,o.r,o.gc1h(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aIs(A.jA,!0,A.iN,m,o.gciG(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.B(B.a([B.D(o.bti(A.aS,k,A.hr,m,o.r,o.gc1e(),"Download .json","Backup file"),1),A.aw,B.D(o.aIs(A.aZ,!0,As.xi,m,o.gcu8(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bk.j(0.28),A.r,1)
s=B.V(A.l1,A.bk.j(0.9),n,n,n,18)
r=o.gaKm()
q=o.gb0X()
p=o.gb0X()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.B(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.af:A.bt,n,n,n,n,n,n,n,n,12,n,n,A.a3,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bq(!0,B.v(B.a([new B.C(Ac.Kn,i,n),B.D(B.cM(w,n,D.biG,n,n,A.ak,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)],h)
if(o.f)j.push(B.p(n,U.T5,A.h,A.dy,n,n,n,n,n,n,n,n,n,n))
return B.ce(n,l,new B.am(A.W,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acU(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hQJ(s,t.d,t.e),$async$acU)
case 2:return B.h(null,v)}})
return B.i($async$acU,v)},
auc(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.aa,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.aj,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aT1(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aF:A.c
if(g)w=A.bk
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bk.j(0.2),A.cs,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bk,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.a1,!0,s,B.aI(!1,r,!0,B.es(new B.C(A.bC,B.v(B.a([t,A.T,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.aj,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ad)},
bDC(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aF:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bB1,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a3(A.a4,A.a7,A.w,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.en:A.rV
if(p)r=A.bk
else r=e?A.b9:A.dr
return new B.C(A.cM,B.aD(!1,A.a1,!0,q,B.aI(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eiJ(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ad),q)},
ana(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aF:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qk,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.aij,A.h,s,s,D.aSR,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d8(B.aD(!1,A.a1,!0,s,B.aI(!1,p,!0,B.es(new B.C(E.Vq,B.v(B.a([new B.am(A.W,s,A.a9,A.h,u,s),A.ab,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.aj,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ad),r)},
aIs(d,e,f,g,h,i,j){return this.ana(d,e,!1,f,g,!1,h,i,j)},
bti(d,e,f,g,h,i,j,k){return this.ana(d,e,!1,f,g,h,i,j,k)}}
C.Uc.prototype={
S(){return new C.bh1()}}
C.bh1.prototype={
Z(){this.a0()
this.abL()},
abL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.foS(null,A.d.gL(m),k,r.a.f):C.foS(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kk(A.d.gL(n).w))C.foD(A.d.gL(r.a.d),D.cRc)
n=r.a
m=n.c
n=C.hNQ(n.d)
w=7
return B.b(C.foR(p,C.hNV(r.a.d),n,m,q),$async$abL)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.eiX(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.eiY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.M(d).ax.a===A.H,h=i?A.d9:A.bN,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.eiZ())
v=B.aF(j,j,j,j,B.V(A.er,i?A.af:A.aj,j,j,j,18),j,j,j,new C.ej_(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yj],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dO,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.YR,A.n),j,j,j,j,E.VM,j,j,1/0)
q=B.m(24)
s=B.H(A.aY.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a46,A.L,j,j))
else if(k.d==null)r.push(D.dQd)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ab(0,A.G,A.aB.j(0.35),A.cs,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eYa,A.ar,B.aH(j,B.p(j,B.B(B.a([D.bCw,A.aw,B.d(m,j,j,j,j,j,j,D.eLv,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bGh,A.n),j,j,j,j,A_.ado,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ej0(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.f18,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pl(j,j,!1,l,j,!0,!0,j,!1,D.baD),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ht,A.L,j,j))
return B.ce(j,h,B.bq(!0,B.v(B.a([new B.C(Ac.Kn,v,j),B.D(B.ci(B.v(B.a([t,A.aO,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bId,A.n),j,j,j,j,A.rQ,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adH,j,j,A.ak),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),j,!1,!1,j,j)}}
C.aBy.prototype={
S(){return new C.aBz(new B.ap(A.as,$.av()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aBz.prototype={
Z(){var w=this
w.a0()
w.e.aK(0,new C.ecr(w))
$.aT.x1$.push(new C.ecs(w))},
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.p()
this.a2()},
aVl(){var w,v=this.c
v.toString
w=C.xO(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a9(v,!1).M(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.et,x.w).w,i=B.m(28),h=B.H(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bk.j(0.28),A.tv,36),D.a7q],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bya,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ab,D.eVx,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a3,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aTf,k,k,k,k,A.wE,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
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
t.push(new B.bH(1,A.bo,B.dj(A.A,new B.w(p,k,D.eFs,k,k,k,k,k,k,k,k,k),k,k,A.ba,new B.o(s,k,new B.c1(m,m,m,m),new B.bv(o,o,o,o),n,k,A.n),A.hS,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.H9)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.d8(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bF9,A.z,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.tK(B.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.An(5,k),new C.bra()],x.aS),k,k,A.aJC,k,5,k,1,k,k,!1,"\u2022",k,new C.ecn(l),k,new C.eco(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lE,k,k,k,k),0),0,0,0)],a1)
d=C.xO(w.a.a.toUpperCase())==null?k:l.gc1i()
return B.au(new B.C(new B.N(24,24,24,24+j.f.d),B.aD(!1,A.a1,!0,k,new B.d1(A9.Iq,B.p(k,B.bu(e,B.v(B.a([a0,new B.C(D.bja,B.v(B.a([new B.am(A.W,k,A.a9,A.q,g,k),A.T,D.eU_,A.bu,new B.a5(1/0,50,B.bL(D.f8c,d,B.bk(A.bk,A.bj,A.aj,k,A.c,k,k,k,new B.b6(B.m(16),A.X),k,k,k)),k),A.ar,B.bK(!1,A.n_,k,k,!0,k,k,new C.ecp(a2),k,B.fr(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ao),A.h,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ad),k),k,k,k)}}
C.bra.prototype={
nX(d,e){var w=e.a.toUpperCase()
return e.cA4(B.h2(A.bs,w.length),w)}}
C.aoJ.prototype={
S(){return new C.aBC(B.yk(A.JG,A.n7,A.td))}}
C.aBC.prototype={
p(){this.d.p()
this.a2()},
aVk(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iG(w,d)},
a7W(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fx2(s),$async$a7W)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aVk("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7W,v)},
c1g(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hNT(w[u])
if(t!=null){this.aVk(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uO,s,s,s,t.gbHD(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aF(s,s,s,s,B.V(q?A.t0:Ai.Lg,s,s,s,s,s),s,s,s,new C.ej2(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.f9n,s,s,s,1,s,!0)
r=B.yj(t.d,A.bQ,t.gc1f())
w=B.m(28)
w=B.au(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bk,A.r,3),w,B.a([new B.ab(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.ce(p,A.x,new B.am(A.W,s,A.b_,A.q,B.a([r,w,B.an(32,B.p(s,D.eZ8,A.h,s,s,new B.o(v,s,B.H(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iL,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.brm.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bwn,A.h,w,w,D.aT_,w,56,w,w,w,w,w,56),A.aO,D.f93,A.ar,new B.k5(this.c,new C.eTN(),w,w,x.cI),A.aO,new B.k5(this.d,new C.eTO(),w,w,x.cl),A.ab,D.f90],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A9.Iq,new B.o(A.aF,w,u,v,w,w,A.n),w,w,w,K.VT,D.bjN,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad)}}
C.a5M.prototype={
S(){return new C.bgK(A.bw)},
gd6(){return this.c}}
C.bgK.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.Y0()
w.d=B.dD(A.h7,new C.e2R(w))},
p(){var w=this.d
if(w!=null)w.aa(0)
this.a2()},
Y0(){return this.cf9()},
cf9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Y0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e2P(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bw(new B.Q(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c9U(p.c),$async$Y0)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.n(new C.e2Q(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Y0,v)},
bJt(d){var w,v,u=d.a,t=A.o.ak(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ak(u,6e7)%60
v=A.o.ak(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aS(A.o.u(w),2,"0")+"m "+A.a.aS(A.o.u(v),2,"0")+"s left"
return A.a.aS(A.o.u(w),2,"0")+":"+A.a.aS(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.ak(w,6e7)<30&&A.o.ak(w,36e8)<999?A.aD:A.bT
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.V(A.El,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bJt(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bfY,A.iK,r,r,1/0)}}
C.a6D.prototype={
mH(){var w,v,u,t=this
t.wk()
w=t.cx
v=t.c
w.bl_(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.pr(B.E(["/S",D.dTv,"/URI",new B.qV(B.UK(w.as),A.tz,!0)],x.N,u),u))}}
C.a6E.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_F.prototype={
bsp(d,e,f,g,h,i,j,k,l,m){var w=B.eN([D.dRO],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcDe(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jD(w,new C.cc5(),B.a2(w).k("jD<cl.E,I>")).fv(0,new C.cc6())},
azr(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.h0(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rR(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.j2(d.a,d.b))
s.m(0,"/Border",B.rR(D.bKf))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fS(t.gcDe()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pr(w,x.Y))}}
C.cc7.prototype={}
C.a0Z.prototype={}
C.afT.prototype={}
C.aOe.prototype={
fO(d){var w,v,u,t,s,r,q=this,p=null
q.kO(d)
q.Kv(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.baY(w)
u=x.N
t=x.Y
s=new C.cc7(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bsp(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pr(B.E(["/Type",D.dTt],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6D(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.au7.prototype={}
C.aPI.prototype={
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
u.JF(t)
u.QN(0)
u.of(0,v)
w.fO(d)
u.mK(0)}}}
var z=a.updateTypes(["aw<~>()","~(lr)","S(hT)","~()","S(ey)","S(nV)","S(lr)","~(hT)","S(ey,ey)","Iq(Y)","S(nm)","S(kZ)","aw<S>()","I(I,hT)","a1<n,@>(hT)","ak<yD>()","n(nm)","S(a62)","n(lr)","n(vj)","S(Dx)","I(hT,hT)","n(ey)","r(ey)","cG(ey)","r(hn)","~(hn)","ey(u9,O,O,O,O,I{fx:n,key:n,rotation:O})","ey(n,O,I)","I(nV,nV)","S(yD)","S(n,ak<yD>)","a1<n,@>(nV)","nm()","WK(Y)","ey(n,O,O,O,O,O{align:px,anim:hn,bullets:S,color:I?,delay:I,fx:n,key:n,style:Gi,weight:pQ})","ZY(Y)","ey(n,O,O,O,O{anim:hn,delay:I,fx:n,key:n})","aw<~>(nV)","S(m7)","WI(Y)","Zw(Y)","Zv(Y)","NO(Y)","XT(Y)","ey(u9,O,O,O,O,I,n,n{anim:hn,delay:I,rotation:O,stroke:I,strokeWidth:O})","ey(n,O,O,O,O,O,n,n,I)","ey(O,O,n,I{size:O})","r(qJ,O,O)","kZ()","nV(a1<@,@>)","~(u_)","Dx()","f8(ey)","r(iQ)","Xr(Y)","~(Do)","XM(Y)","I(ey,ey)","ey(ey)","a1<n,@>(ey)","ey(a1<@,@>)","lr(lr)","a1<n,@>(lr)","lr(a1<@,@>)","S(ju)","ju()","n(hT)","~(ak<nV>)","Q(ak<hT>)","Q(hT)","ak<hT>(n?)","aax(Y,I)","~(S(ey,ey))","aba(Y)","acO(Y,I)","x(lr,S)","TY(Y)","abd(Y)","U1(Y)","~(mb)","hT(hT)","O(ey)","Z0(Y)","YD(Y)","hT()","ak<DR>()","aw<~>(ak<hT>)","r(br<I,hT>)","C(ju)","C(Dx)","aw<~>(hn,~())","r(ak<hn>,hn?,~(hn),x)","S(lO)","ak<jd<mb>>(Y)","jd<mb>(mb)","hT(a1<@,@>)","Ub(Y)","ey(n,O,O,O,O,O,I{align:px,style:Gi,weight:pQ})","Uc(Y)","r(hT)","~(lI)","Hj(Y,lr,r?)","I(a6E)","aw<ak<a1<n,@>>?>()","n(n)","aw<yB>({paper:n?,photo:dz?,request:n,template!l1})","aw<a5V>({doc!yB,history:ak<+(n,n)>,instruction!n,photo:dz?,template!l1})","ab7(Y)"])
C.cz7.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:76}
C.cz8.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:86}
C.cz9.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaho(s):16;--w.c}w.b=A.o.dQ(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lW(v,t)
w.b=v-A.o.dQ(q,t)
w.a=t
return q},
$S:86}
C.cza.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bKA.prototype={
$1(d){return J.eO(A.dD.gaO(d),d.byteOffset,d.byteLength)},
$S:1663}
C.fbY.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iA(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iA(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iA(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iA(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1664}
C.bUG.prototype={
$1(d){return B.a_(d,x.N,x.z)},
$S:26}
C.bUH.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:39}
C.bUJ.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.frk.prototype={
$1(d){return new C.ZY(this.a,this.b,C.hOL(),null)},
$S:z+36}
C.eSf.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eSj.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eSk.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eSl.prototype={
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
C.eSg.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eSh.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eSi.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eSa.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hs,w,w,w)
return B.eq(B.a([B.bK(!1,D.eXF,w,w,!0,w,w,new C.eS8(d),w,w),B.bK(!1,D.eWO,w,w,!0,w,w,new C.eS9(d),w,w)],x.p),w,w,D.Us,v,w,w,w,w,D.f9E,w)},
$S:21}
C.eS8.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.eS9.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.eSb.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eSc.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eSp.prototype={
$0(){var w=this.a
return w.n(new C.eSo(w,this.b))},
$S:0}
C.eSo.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eSe.prototype={
$0(){var w=this.a
return w.n(new C.eSd(w,this.b,this.c))},
$S:0}
C.eSd.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.eSm.prototype={
$0(){return this.a.a_4(this.b)},
$S:0}
C.eSn.prototype={
$0(){return this.a.Nw(0,this.b)},
$S:0}
C.eSs.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.eSt.prototype={
$0(){var w=this.a
return w.n(new C.eSr(w,this.b))},
$S:0}
C.eSr.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eSq(),B.U(w).k("J<1,n>")))}},
$S:0}
C.eSq.prototype={
$1(d){return d.a},
$S:z+67}
C.eZs.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a_(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fQo(w.b(t.h(0,"doc"))?B.a_(w.a(t.h(0,"doc")),v,u):A.cu)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.nV(s,v,u==null?new B.Q(Date.now(),0,!1):u)},
$S:z+50}
C.eZt.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.feb.prototype={
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
C.fe9.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fea.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+29}
C.fqS.prototype={
$1(d){return d.ac()},
$S:z+32}
C.fbE.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.frG.prototype={
$1(d){return new C.WK(this.a,null)},
$S:z+34}
C.cAt.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cAv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cAy.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAz.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cAx())},
$S:11}
C.cAx.prototype={
$0(){},
$S:0}
C.cAA.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_W(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cA(s)
p=q.bi(s,new C.cAw(r))
if(p<0)q.ck(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.afc(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:330}
C.cAw.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAB.prototype={
$1(d){},
$S:29}
C.cAu.prototype={
$1(d){return new C.WI(this.b,this.a.gcot(),null)},
$S:z+40}
C.cAC.prototype={
$1(d){return D.ffI},
$S:z+43}
C.cAp.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.Uc,A.r,1),t=x.p
return B.au(B.aD(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bjz,B.v(B.a([B.p(w,D.bvr,A.h,w,w,new B.o(A.aD.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.eVV,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eKx,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dX,new B.C(A.p5,B.B(B.a([B.D(B.dV(D.f1a,new C.cAn(d),B.db(w,w,w,w,w,w,w,w,w,E.mx,w,w,A.cc,w,new B.b6(B.m(14),A.X),D.aQk,w,w,w,w)),1),A.aw,B.D(B.bL(D.f6C,new C.cAo(d),B.bk(A.bO,w,w,w,w,w,A.cc,w,new B.b6(B.m(14),A.X),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vN,new B.o(D.a8P,w,u,v,D.cGZ,w,A.n),w,w,w,K.VT,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad),w,w,w)},
$S:1665}
C.cAn.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.cAo.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.cAq.prototype={
$0(){return J.n3(this.a.d,new C.cAm(this.b))},
$S:0}
C.cAm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAl.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.Uc,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bAf,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajy,A.n),t,44,t,t,t,t,t,44),A.bd,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aLb,t,t,t),A.bA,D.f6y],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.d_H[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.av0(u[1],u[2],u[3],new C.cAj(v,d),!1,t))}q.push(A.ar)
q.push(D.bdF)
q.push(A.ar)
q.push(new C.av0(A.e7,"Delete book","Remove it from this device",new C.cAk(d),!0,t))
return B.bq(!0,B.p(t,B.v(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8P,t,r,s,t,t,A.n),t,t,t,A.rL,E.Vw,t,t,t),!0,!1,A.ah,!0,!0)},
$S:34}
C.cAj.prototype={
$0(){var w=this.a.a
B.a9(this.b,!1).M(w)
return null},
$S:0}
C.cAk.prototype={
$0(){B.a9(this.a,!1).M("delete")
return null},
$S:0}
C.cAs.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ab(0,A.G,A.x.j(0.45),A.aBq,12)],x.V)
return B.dP(B.eu(A.A,e,B.p(w,B.bu(B.m(4),new B.a5(62,95.81818181818181,B.f_(A.A,F.alL(d),A.h,A.dq),w),A.ao),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cAr.prototype={
$0(){return this.a.bXH()},
$S:0}
C.cAi.prototype={
$0(){return this.a.aU8(0,this.b)},
$S:0}
C.cAh.prototype={
$0(){return this.a.C5(this.b)},
$S:0}
C.cAg.prototype={
$0(){return this.a.C5(this.b)},
$S:0}
C.cAD.prototype={
$2(d,e){var w=this.a
return w.bwK(J.q(w.d,e))},
$S:42}
C.czK.prototype={
$0(){var w=this.a
if(w.c!=null)w.zN()},
$S:0}
C.czJ.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aWN("Page "+(v.length+1),"",""))},
$S:0}
C.czM.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.czU.prototype={
$0(){},
$S:0}
C.czV.prototype={
$1(d){var w=this.a,v=w.a,u=$.av()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.czN.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cR.gcs().aG(this.c)},
$S:0}
C.czL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.czP.prototype={
$0(){return this.a.OM(this.b)},
$S:0}
C.czQ.prototype={
$0(){return this.a.OM(this.b)},
$S:0}
C.czR.prototype={
$0(){var w=this.a
w.n(new C.czO(this.b))
w.CU()},
$S:0}
C.czO.prototype={
$0(){return this.a.c=""},
$S:0}
C.czT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.czS(w,d))
w.CU()},
$S:z+51}
C.czS.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cA_.prototype={
$2(d,e){if(d)this.a.zN()},
$S:118}
C.czW.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zN(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.H(x.q).f.P(D.eyC)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.czX.prototype={
$0(){return this.a.aT8(this.b,-1)},
$S:0}
C.czY.prototype={
$0(){return this.a.aT8(this.b,1)},
$S:0}
C.czZ.prototype={
$0(){return this.a.bYV(0,this.b)},
$S:0}
C.fiI.prototype={
$1(d){return C.h_c()},
$S:41}
C.fiJ.prototype={
$1(d){return null},
$S:29}
C.f2O.prototype={
$1(d){return null},
$S:29}
C.fjI.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:285}
C.fjH.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:236}
C.fjO.prototype={
$1(d){var w=this.a
return C.fJ_(d)===w||C.h3E(d)===w},
$S:z+4}
C.f1R.prototype={
$1(d){return A.a.aS(A.o.u(d),2,"0")},
$S:83}
C.c4e.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiG.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fiH.prototype={
$1(d){return C.flq(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fdx.prototype={
$1(d){var w=null
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f1J,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.F_,D.eXm,new C.fdv(d),B.bk(A.bT,w,w,w,A.x,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.uN,D.f2U,new C.fdw(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vK,w,w,w,w))],x.p),A.ag,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fdv.prototype={
$0(){B.a9(this.a,!1).M("continue")
return null},
$S:0}
C.fdw.prototype={
$0(){B.a9(this.a,!1).M("new")
return null},
$S:0}
C.fdy.prototype={
$1(d){var w=null
return B.eq(B.a([B.bK(!1,D.eTS,w,w,!0,w,w,new C.fdt(d),w,w),B.bL(D.f8H,new C.fdu(d),w)],x.p),w,w,w,D.fau,w,w,w,w,D.eTM,w)},
$S:21}
C.fdt.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.fdu.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dYU.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dYS.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dYT.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dYV.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dYW.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fjN.prototype={
$1(d){return A.a.aS(A.o.u(d),2,"0")},
$S:83}
C.fjJ.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a4,w,w,B.Gj(A.A,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1666}
C.fjL.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eLH,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:181}
C.fjM.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hP,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hP,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b7,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1667}
C.fjK.prototype={
$2$female$size(d,e){var w=null,v=d?D.aam:this.a,u=B.H(A.hP,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.A,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a91,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1668}
C.fv5.prototype={
$1(d){return new C.ab7(this.a,this.b,null)},
$S:z+108}
C.dQi.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.baX:A.Jg,q=B.H(D.iY.j(0.25),A.r,1),p=B.au(B.p(t,t,A.h,t,t,new B.o(A.bT.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aii,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.iY.j(0.35),A.e9,10)],x.V),D.bIR,A.n),t,t,t,t,A.JY,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.VI,B.v(B.a([p,A.ay,B.B(B.a([o,A.bd,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iY,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eL0,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.i7(!0,t,e,A.z,D.aIF,new C.dQh(w,this.c),v,D.adj,t,A.ak,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mn,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:115}
C.dQh.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aax(w,new C.dQg(this.b,w),null)},
$S:z+72}
C.dQg.prototype={
$0(){B.a9(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fdB.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fdC.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f4S,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.F_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdz(d),B.bk(D.iY,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rs,new C.fdA(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vK,w,w,w,w))],x.p),A.ag,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fdz.prototype={
$0(){B.a9(this.a,!1).M("continue")
return null},
$S:0}
C.fdA.prototype={
$0(){B.a9(this.a,!1).M("new")
return null},
$S:0}
C.fdF.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fdG.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eUO,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.F_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdD(d),B.bk(D.iY,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rs,new C.fdE(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vK,w,w,w,w))],x.p),A.ag,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fdD.prototype={
$0(){B.a9(this.a,!1).M("continue")
return null},
$S:0}
C.fdE.prototype={
$0(){B.a9(this.a,!1).M("new")
return null},
$S:0}
C.fdJ.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fdK.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f_G,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.F_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdH(d),B.bk(D.iY,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rs,new C.fdI(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vK,w,w,w,w))],x.p),A.ag,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fdH.prototype={
$0(){B.a9(this.a,!1).M("continue")
return null},
$S:0}
C.fdI.prototype={
$0(){B.a9(this.a,!1).M("new")
return null},
$S:0}
C.fwk.prototype={
$1(d){return D.fiW},
$S:z+74}
C.e2U.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b3X:A.Jg,s=B.H(A.au.j(0.25),A.r,1),r=B.au(B.p(v,v,A.h,v,v,new B.o(A.au.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bCs,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.bT.j(0.35),A.e9,10)],x.V),D.ajD,A.n),v,v,v,v,A.JY,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.VI,B.v(B.a([r,A.ay,B.B(B.a([q,A.bd,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.Jd,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eIB,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.i7(!0,v,e,A.z,D.aIF,new C.e2T(this.b),19,D.adj,v,A.ak,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mn,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.e2T.prototype={
$2(d,e){var w=D.Ok[e]
return new C.acO(w,new C.e2S(this.a,w),null)},
$S:z+75}
C.e2S.prototype={
$0(){B.a9(this.a,!1).M(this.b.a)
return null},
$S:0}
C.flu.prototype={
$0(){return B.fI2(C.hCq(this.a))},
$S:323}
C.flt.prototype={
$0(){var w=C.fJh(this.a)
return"data:image/png;base64,"+A.cR.gcs().aG(w)},
$S:22}
C.f_Y.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j3(d,e),new B.j3(w,e+v),new B.j3(d+f*14,e),new B.j3(w,e-v)],x.J)
B.a_T(this.a,C.fu(4291404327),v)},
$S:663}
C.fwv.prototype={
$1(d){return new C.TY(this.a,null)},
$S:z+77}
C.e6b.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e6a())},
$S:28}
C.e6a.prototype={
$0(){},
$S:0}
C.e6c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e69(w,d))},
$S:1670}
C.e69.prototype={
$0(){return this.a.x=J.f5(A.dD.gaO(this.b))},
$S:0}
C.e6d.prototype={
$1(d){},
$S:29}
C.e5O.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5K.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5V.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e5W.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.e0Z)},
$S:0}
C.e5X.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5Q.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.A("you",this.b))
w.f.bJ(0,A.c0)},
$S:0}
C.e5R.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.A("ai",v.a))},
$S:0}
C.e5S.prototype={
$0(){return this.a.ax.push(new B.A("ai",B.t(this.b)))},
$S:0}
C.e5T.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e5U.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dS,A.i3)}},
$S:8}
C.e5P.prototype={
$0(){var w=this.a,v=w.z,u=C.fm7(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.czc(C.fm7(t))},
$S:0}
C.e5M.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e5N.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e62.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.e63.prototype={
$0(){var w=this.a
return w.n(new C.e61(w))},
$S:0}
C.e61.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e64.prototype={
$0(){var w=this.a
return w.n(new C.e60(w,this.b))},
$S:0}
C.e60.prototype={
$0(){var w=this.b.b
this.a.e.saU(0,w)
return w},
$S:0}
C.e65.prototype={
$1(d){var w=this.a
return w.n(new C.e6_(w))},
$S:9}
C.e6_.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e66.prototype={
$1(d){var w=this.a
return w.n(new C.e5Z(w))},
$S:9}
C.e5Z.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e67.prototype={
$0(){var w=this.a
return w.n(new C.e5Y(w,this.b))},
$S:0}
C.e5Y.prototype={
$0(){var w=this.b
this.a.f.saU(0,w)
return w},
$S:0}
C.e68.prototype={
$1(d){return this.a.XN()},
$S:2}
C.e5L.prototype={
$0(){return this.a.c0y(this.b)},
$S:0}
C.c7U.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cK(w.h(0,d))):null},
$S:380}
C.c7S.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c7T.prototype={
$1(d){return d.length!==0},
$S:3}
C.fl5.prototype={
bfP(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bKz(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cvW($.ty().jV(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mb(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfP(d,e)},
$S:1671}
C.fjn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjp.prototype={
$1(d){var w=this.a.a
w=A.d.aF(A.d.dt(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:83}
C.fjo.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ib(t,t,t,t,B.dl(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pB,A.cg,t,A.ek,A.cf)
v=this.a
w.xY(v.b)
u=w.b.a.c
return u.gbh(u)<=v.a},
$S:60}
C.f_z.prototype={
$1(d){var w=A.a.fn(d,B.ae("\\s+",!0,!1,!1,!1))
return new B.a4(w,new C.f_A(),B.U(w).k("a4<1>")).gJ(0)},
$S:245}
C.f_A.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_x.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.f_y.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.c7V.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gawW()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,w-(f===t?r:0)))
o=C.fIZ(i,new B.F(!0,h,a6,k,a6,a6,q,A.cK,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fG1(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aF(n.gc8z(),"\n\n")
d=B.ib(a6,a6,a6,a6,B.dl(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.abA(k,q,1.28),j),A.pB,A.cg,a6,A.ek,A.cf)
d.xY(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbh(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aY(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fIZ(i,new B.F(!0,h,a6,k,a6,a6,q,A.cK,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fG1(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.abA(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.N(v,0,v,0),B.p(a6,a6,A.h,B.aY(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bH(1,A.bo,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.pB,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awV(s,j))
i.push(new B.a5(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:393}
C.c7W.prototype={
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
n=o.gawW()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aY(j.w)
d=B.a([new B.A(u,q),new B.A(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.A(r,p-(a0===s?m:0)))
l=C.fIZ(f,new B.F(!0,e,a5,i,a5,a5,h,A.cK,A.bi,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fG1(g.length===0?B.a([a6],n):g,l))break}a1=o.abA(i,h,1.28)
a2=new C.c7X(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.H8,new B.a5(v,a5,a4.f,a5),A.H8,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.blP,B.p(a5,a5,A.h,B.aY(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bH(1,A.bo,new B.w(l[2+a3],a5,a1,a5,A.pB,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awV(r,g))
f.push(new B.a5(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a5(a5,q,v,a5),A.ab,B.D(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:149}
C.c7X.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pB,w,w),w)},
$S:1672}
C.fwA.prototype={
$1(d){return new C.U1(this.a,this.b,null)},
$S:z+79}
C.e7u.prototype={
$1(d){return d.lT()},
$S:1673}
C.e7v.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e7t(w,d))},
$S:1674}
C.e7t.prototype={
$0(){var w=this.b
return this.a.d=w.gfe(w)},
$S:0}
C.e7h.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e7i.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e7o.prototype={
$0(){return B.a9(this.a,!1).eD()},
$S:0}
C.e7p.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.H(A.by,A.r,2.5)
return B.aH(w,B.p(w,B.b2(w,w,w,new C.b8A(u,v.gau5(),w),A.fa),A.h,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7m(v),new C.e7n(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ae)},
$S:33}
C.e7m.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:334}
C.e7n.prototype={
$1(d){var w=this.a
w.n(new C.e7j(w,d,this.b,this.c))},
$S:242}
C.e7j.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gau5()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e7q.prototype={
$1(d){var w=this.a
return w.n(new C.e7l(w,this.b))},
$S:9}
C.e7l.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7r.prototype={
$1(d){var w=this.a
return w.n(new C.e7k(w,d))},
$S:6}
C.e7k.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7s.prototype={
$0(){return B.a9(this.b,!1).M(this.a.a.c)},
$S:0}
C.fwQ.prototype={
$1(d){return D.flJ},
$S:z+83}
C.eEk.prototype={
$1(d){return this.a.Wz()},
$S:8}
C.eDc.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cR.gcs().aG(v)},
$S:0}
C.eDA.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eDK.prototype={
$1(d){return d>=this.a.length},
$S:60}
C.eCW.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eCX.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eCU.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eCV.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eDt.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eDu(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jB(B.qY(p>0.2?C.fAS(q,B.a39(p,p,A.w)):q),A.q,u)],x.p)
w=s.bf
if(w>0.02){v=B.a39(12,12,A.w)
p.push(B.jB(B.d8(B.qY(C.fAS(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b1
if(r!=null&&s.aZ>0)p.push(B.ed(u,B.aY(r).j(s.aZ),!0))
r=s.b8
if(r!=null&&s.bH>0){r=B.aY(r).j(s.bH)
w=s.b8
w.toString
p.push(B.bU(u,new B.o(u,u,u,u,u,new B.bR(D.aOE,1.15,A.w,u,0,B.a([r,B.aY(w).j(0)],x.O),u,u),A.n),A.bb))}r=s.aA
if(r>0)p.push(B.bU(u,new B.o(u,u,u,u,u,new B.bR(D.aOp,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bb))
r=s.aL
if(r>0)p.push(B.bU(u,new B.o(u,u,u,u,u,new B.a3(A.aX,A.b1,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aL)],x.O),D.cFF,u),A.n),A.bb))
if(s.aC>0){r=s.k1
p.push(B.an(u,B.bU(u,new B.o(u,u,u,u,u,new B.a3(A.aX,A.b1,A.w,B.a([A.x.j(0),A.x.j(s.aC),A.x.j(s.aC),A.x.j(0)],x.O),D.cPM,u),A.n),A.bb),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ed(u,A.x.j(r),!0))
r=s.b4
if(r>0)p.push(B.bU(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cN5,u),A.n),A.bb))
s=s.aw
if(s>0)p.push(B.b2(u,u,u,new C.bc6(s,u),A.at))
return new B.am(A.W,u,A.b_,A.q,p,u)},
$S:61}
C.eDu.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fF(r.b,A.A,q,q,A.cm,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aSL(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
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
return B.dP(B.e5(A.A,B.eu(A.A,l,B.fo(A.A,new B.FQ(new B.Aa(q,q,n,A.z4),p,q),q,B.v7(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eDG.prototype={
$0(){return this.a.n(new C.eDF(this.b,this.c))},
$S:0}
C.eDF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDH.prototype={
$1(d){return this.a.n(new C.eDE(this.b,d))},
$S:6}
C.eDE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDJ.prototype={
$0(){return this.a.n(new C.eDI(this.b,this.c))},
$S:0}
C.eDI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCM.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eCN.prototype={
$1(d){var w=this.a
return w.n(w.gcpR())},
$S:2}
C.eCO.prototype={
$1(d){return this.a.n(new C.eCL())},
$S:2}
C.eCL.prototype={
$0(){},
$S:0}
C.eCP.prototype={
$0(){var w=this.a
return w.n(new C.eCK(w,this.b))},
$S:0}
C.eCK.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eCR.prototype={
$2(d,e){return A.aw},
$S:35}
C.eCQ.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aY(v.e),B.aY(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.dj(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aY(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.ba,new B.o(w,w,q,s,w,new B.a3(A.aX,A.b1,A.w,r,w,w),A.n),A.hS,w,94,w,w,w,w,70)
return B.aH(w,new B.a5(70,w,B.v(B.a([r,A.h2,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eCJ(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:73}
C.eCJ.prototype={
$0(){var w=this.a
return w.n(new C.eCG(w,this.b))},
$S:0}
C.eCG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eCS.prototype={
$1(d){var w=this.a
return w.n(new C.eCI(w,d))},
$S:9}
C.eCI.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eCT.prototype={
$1(d){var w=this.a
return w.n(new C.eCH(w,d))},
$S:9}
C.eCH.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eE9.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:60}
C.eEg.prototype={
$1(d){var w=this.a
return w.n(new C.eEh(w,d))},
$S:27}
C.eEh.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ef(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eEi.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eEa.prototype={
$0(){var w=this.a
return w.n(new C.eE8(w,this.b))},
$S:0}
C.eE8.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eEb.prototype={
$0(){var w=this.a
return w.n(new C.eE7(w,this.b))},
$S:0}
C.eE7.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eEc.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eE6(v,w.b,w.c,w.d))},
$S:0}
C.eE6.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eEd.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqN(v))},
$S:0}
C.eEe.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eEf.prototype={
$0(){var w=this.a
return w.n(new C.eE5(w))},
$S:0}
C.eE5.prototype={
$0(){var w=this.a.db
return A.d.hi(w,0,w.length,0)},
$S:0}
C.eDT.prototype={
$1(d){return d.a===this.a.dy},
$S:224}
C.eDU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arA[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b1(9,9)
m=B.a([B.aY(v.w.e),B.aY(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.au9(new B.nK(new B.bv(n,n,n,n),A.ao,new B.kC(new B.o(j,j,j,j,j,new B.a3(A.a4,A.a7,A.w,m,j,j),A.n),A.bb,new C.aWU(l,B.aY(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eDS(r,v),2,i))}return B.c9(A.bJ,h,A.bx,7,7)},
$S:168}
C.eDS.prototype={
$0(){var w=this.b
return w.n(new C.eDN(this.a,w))},
$S:0}
C.eDN.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eDV.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:214}
C.eDY.prototype={
$0(){var w=this.a
return w.n(new C.eDR(w))},
$S:0}
C.eDR.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eDZ.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eE_.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eE0.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eE1.prototype={
$0(){var w=this.a
return w.n(new C.eDQ(w))},
$S:0}
C.eDQ.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eE2.prototype={
$0(){var w=this.a
return w.n(new C.eDP(w))},
$S:0}
C.eDP.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eE3.prototype={
$0(){var w=this.b
return w.n(new C.eDO(this.a,w))},
$S:0}
C.eDO.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eE4.prototype={
$1(d){return this.a.fx=d},
$S:214}
C.eDW.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eDX.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eDx.prototype={
$0(){var w=this.a
return w.n(new C.eDw(w))},
$S:0}
C.eDw.prototype={
$0(){var w=this.a
w.p4=null
w.aZs()},
$S:0}
C.eDy.prototype={
$0(){var w=this.a
return w.n(new C.eDv(w,this.b))},
$S:0}
C.eDv.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eDz.prototype={
$0(){var w=this.a
return w.n(w.gcgM())},
$S:0}
C.eDp.prototype={
$0(){var w=this.a
return w.n(new C.eDo(w))},
$S:0}
C.eDo.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eDq.prototype={
$0(){var w=this.a
return w.n(new C.eDn(w))},
$S:0}
C.eDn.prototype={
$0(){var w=this.a
w.aC=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eDr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cNr[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b1(9,9)
m.push(v.au9(new B.nK(new B.bv(p,p,p,p),A.ao,new B.a5(1/0,1/0,new B.FQ(new B.Aa(o,o,v.aSL(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.z4),B.fF(u,A.A,140,o,A.cm,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eDm(v,s),3,n))}return B.c9(A.bJ,m,A.bx,10,8)},
$S:168}
C.eDm.prototype={
$0(){var w=this.a
return w.n(new C.eDl(w,this.b))},
$S:0}
C.eDl.prototype={
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
C.eD3.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eD4.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eD5.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eD6.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eD7.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eD8.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eD9.prototype={
$1(d){return this.a.b4=d},
$S:6}
C.eDa.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eDb.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.eCp.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eCq.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eCr.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eCs.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eCt.prototype={
$0(){var w=this.a
return w.n(new C.eCo(w))},
$S:0}
C.eCo.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eCu.prototype={
$1(d){return this.a.b1=d},
$S:214}
C.eCv.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.eCY.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eCZ.prototype={
$1(d){return this.a.bf=d},
$S:6}
C.eD_.prototype={
$1(d){return this.a.aw=d},
$S:6}
C.eD0.prototype={
$1(d){return this.a.b8=d},
$S:214}
C.eD1.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.eCz.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.eCA.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.eCB.prototype={
$1(d){return this.a.bP=d},
$S:6}
C.eCC.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eCD.prototype={
$0(){var w=this.a
return w.n(new C.eCy(w))},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
return w.c4=A.k.F(w.c4+90+180,360)-180},
$S:0}
C.eCE.prototype={
$0(){var w=this.a
return w.n(new C.eCx(w))},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eCF.prototype={
$0(){var w=this.a
return w.n(new C.eCw(w))},
$S:0}
C.eCw.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eDs.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hRl(v,w.p4)},
$S:0}
C.eDk.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bbd:B.fF(v,A.A,w,w,A.cm,A.bQ,!1,w,!1,w,w)
return C.fjv(d.length===0?"rounded":d,u,e)},
$S:129}
C.eDg.prototype={
$0(){var w=this.a
return w.n(new C.eDf(w))},
$S:0}
C.eDf.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eDh.prototype={
$0(){var w=this.b
return w.n(new C.eDe(this.a,w))},
$S:0}
C.eDe.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eDi.prototype={
$0(){var w=this.b
return w.n(new C.eDd(this.a,w))},
$S:0}
C.eDd.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eDj.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:6}
C.eDD.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ab(-4,A.G,A.b3.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ep(n.cat(),n.r))
l.push(new C.Hj(n.cn2(),!1,!1,t))
o=B.bZ(0,B.bu(o,new B.ep(new B.am(A.W,t,A.b_,A.q,l,t),n.f),A.ao),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.W,t,A.a9,A.q,B.a([o,B.an(t,B.aH(A.c5,B.bU(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bb),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eDC(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eDC.prototype={
$1(d){var w=this.a
return w.n(new C.eDB(w,d,this.b,this.c))},
$S:18}
C.eDB.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eDM.prototype={
$0(){var w=this.a
return w.n(new C.eDL(w,this.b))},
$S:0}
C.eDL.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eD2.prototype={
$0(){var w=this.a.c
w.toString
return B.a9(w,!1).nh()},
$S:0}
C.eEj.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a5(Math.min(s*0.4,460),t,B.v(B.a([w.aVc(),B.D(B.au(w.aY5(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aMd(),1),w.aIt()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aVc(),new B.C(A.hC,B.au(s.aY5(u),t,t,t),t),B.D(s.aMd(),1),s.aIt()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:640}
C.fgL.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ei(k,!1,j,A.aA,"",4280640491,i,l,m,"",h,C.bwR(),null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.cd,D.cO,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bi,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,A.O)},
$S:z+98}
C.fgK.prototype={
$3(d,e,f){var w=this,v=C.bwR(),u=w.b?A.I:A.cq,t=w.c?A.cx:A.bi
return C.ei(w.d,!1,f,A.aA,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bc,4280172719,2,d,0,w.f,w.e,D.cd,D.cO,0.82,0.09,w.a)},
$S:z+28}
C.c9g.prototype={
$1(d){return B.t(d)},
$S:17}
C.fos.prototype={
$0(){return this.a},
$S:z+15}
C.f6i.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.f6j.prototype={
$2(d,e){return J.cj(e)},
$S:z+31}
C.fou.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fox.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.foy.prototype={
$0(){return A.d.gL(D.uW)},
$S:z+33}
C.fop.prototype={
$1(d){return d.a},
$S:z+16}
C.fot.prototype={
$1(d){return d.a},
$S:z+16}
C.fmp.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fmq.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmr.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fgP.prototype={
$0(){return C.cy()},
$S:22}
C.fgS.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cd,s=u?n:0
return C.ei(j,l,v,A.aA,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bc,4280172719,2,d,s,0,"",t,D.cO,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,null,0,"","",A.bi,A.a3)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,null,0,"",j,A.bi,A.a3)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,null,0,j,k,A.bi,A.a3)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bi,A.a3)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bi,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.db,!1,k,l,"",m,A.bi,A.a3)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,null,0,"",k,A.bi,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.db,!1,j,k,"",l,A.bi,A.a3)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,k,0,l,m,A.bi,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,k,l,m,"",n,A.bi,A.a3)},
$S:z+35}
C.fgR.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ei(A.bf,!1,4279310375,A.aA,"",i,24,A.bi,A.a3,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cd,D.eW,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fgQ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cd,t=v?j:0
return C.ei(A.bf,!1,4279310375,A.aA,"",4280640491,24,A.bi,A.a3,"",h,w,d,v?k:"",l,0,!1,"",0,D.bc,4280172719,2,"",t,0,"",u,D.l7,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pr,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fgO.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fjg.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h0f.ce(0,A.a.i(s.w).toLowerCase(),new C.fje(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ce(0,s.r,new C.fjf(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.br(t.e,new B.bkX(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1677}
C.fje.prototype={
$0(){return F.aKR(this.a.w)},
$S:180}
C.fjf.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bvL("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hs(2,w,A.c1,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:180}
C.f_u.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f_v.prototype={
$1(d){return d.a},
$S:z+18}
C.f_w.prototype={
$1(d){return d.b},
$S:z+19}
C.fx1.prototype={
$1(d){return D.fm6},
$S:z+41}
C.eKe.prototype={
$0(){return this.a.x=C.huj(this.b,this.c.b)},
$S:0}
C.eKf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eKc.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:433}
C.eKd.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:433}
C.eKb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c2(A.aF,null,new C.eK6(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.BM,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aY(s,7)
if(r.length===0){n.n(new C.eK7(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h5W(o,m.cA_(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eK8(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eK6.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eKa(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aXp,A.h,p,p,D.aSK,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.AD:D.AI,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fjv(v,i.b_2(h),u),p)))}t=B.lK(1,m,4,10,10,p,A.dL,!0)
if(!l)return B.bq(!0,new B.C(A6.zM,t,p),!0,!1,A.ah,!0,!0)
s=new C.eK9(i,d)
m=B.aG(d,A.bR,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Fi[e]
l.push(s.$2(r.a,r.b))}return B.bq(!0,new B.d1(new B.aW(0,1/0,0,m.a.b*0.85),B.ci(B.v(B.a([D.eZf,A.T,t,A.dX,D.epb,A.av,D.f85,A.T,B.lK(1.15,l,3,10,10,p,A.dL,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A6.zM,p,p,A.ak),p),!0,!1,A.ah,!0,!0)},
$S:34}
C.eKa.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b3.j(0.22):A.c.j(0.04),s=v?A.bB:A.dv
return B.aH(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.ho,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eK5(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1678}
C.eK5.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.eK9.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bH:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bu(w,d.length===0?B.p(v,D.aiO,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.LU(u.Ep(d),!0,!1,v),!0,v),A.ao),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aH(v,B.v(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bH:A.af,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eK4(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:129}
C.eK4.prototype={
$0(){B.a9(this.a,!1).M("finale:"+this.b)
return null},
$S:0}
C.eK7.prototype={
$0(){var w=this.a
return w.w=w.w.Ep("")},
$S:0}
C.eK8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eJV.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eJW.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eJY.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eJZ.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eK_.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eK0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJX(w,d))},
$S:2}
C.eJX.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eK1.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eKs.prototype={
$0(){return this.a.f.fw()},
$S:0}
C.eKt.prototype={
$0(){var w=this.a
return w.n(new C.eKr(w))},
$S:0}
C.eKr.prototype={
$0(){return this.a.e=null},
$S:0}
C.eKu.prototype={
$0(){var w=this.a
return w.n(new C.eKq(w))},
$S:0}
C.eKq.prototype={
$0(){return this.a.x=null},
$S:0}
C.eKw.prototype={
$1(d){var w=this.a
return w.n(new C.eKp(w,d))},
$S:31}
C.eKp.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eKx.prototype={
$1(d){var w=this.a
return w.n(new C.eKo(w,d))},
$S:31}
C.eKo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eKy.prototype={
$0(){var w=this.a
return w.n(new C.eKn(w))},
$S:0}
C.eKn.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eKz.prototype={
$1(d){var w=this.a
return w.n(new C.eKm(w,d))},
$S:31}
C.eKm.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eKA.prototype={
$1(d){var w=this.a
return w.n(new C.eKl(w,d))},
$S:31}
C.eKl.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eKB.prototype={
$0(){var w=this.a
return w.n(new C.eKk(w))},
$S:0}
C.eKk.prototype={
$0(){var w=this.a
return w.w=w.w.Ep("")},
$S:0}
C.eKC.prototype={
$0(){var w=this.a
return w.n(new C.eKj(w,this.b))},
$S:0}
C.eKj.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eKD.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bIb(D.a_r[v]),null))
return B.c9(A.bJ,t,A.bx,8,8)},
$S:168}
C.eKv.prototype={
$1(d){var w=this.a
return w.n(new C.eKi(w,d))},
$S:9}
C.eKi.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eK2.prototype={
$0(){var w=this.a
return w.n(new C.eK3(w,this.b,this.c))},
$S:0}
C.eK3.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eKh.prototype={
$0(){var w=this.a
return w.n(new C.eKg(w,this.b))},
$S:0}
C.eKg.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fx0.prototype={
$1(d){return new C.Zv(this.a,this.b,null)},
$S:z+42}
C.eJO.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eJP.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eJQ.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAV?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eJR.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eJS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eJN(w,d))},
$S:2}
C.eJN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJT.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eJU.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.am(w,0,w.length-1)
this.a.d.bJ(0,new B.bc(w,B.h2(A.bs,w.length),A.aM))},
$S:0}
C.f5y.prototype={
$1(d){return d.a===this.a},
$S:224}
C.e2j.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaua(),n=o.x
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
n=B.bZ(0,B.b2(q,q,q,new C.bej(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bZ(0,B.bKQ(B.eu(A.A,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a3(A.a4,A.a7,A.w,B.a([A.K,D.b2w.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.W,q,A.a9,A.q,B.a([n,o,B.au(B.v(B.a([B.V(p.a.c?A.en:A.lu,D.wg,q,q,q,20),A.av,B.f_(A.A,B.nr(A.jc,D.eTj,new C.e2i()),A.h,A.eb)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eQ9,A.h,q,q,new B.o(D.wg,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adY,q,q,q),q,q,q,4,4,q)],r),q),A.ao),A.h,q,q,new B.o(q,q,t,w,v,new B.a3(A.ax,A.aC,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.e2i.prototype={
$1(d){return D.bH4.au(0,d)},
$S:65}
C.foz.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.foA.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:224}
C.foB.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1679}
C.foC.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fov.prototype={
$1(d){return d.a},
$S:z+18}
C.fow.prototype={
$1(d){return d.b},
$S:z+19}
C.fwc.prototype={
$1(d){return new C.XT(this.a,this.b,null)},
$S:z+44}
C.dby.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dbz.prototype={
$1(d){return d.a===this.a.gafN()},
$S:z+10}
C.dbA.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dbD.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.dbE.prototype={
$0(){var w=this.a
return w.n(new C.dbC(w,this.b))},
$S:0}
C.dbC.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dbF.prototype={
$1(d){var w=this.a
return w.n(new C.dbB(w,d))},
$S:9}
C.dbB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2h.prototype={
$1$2(d,e,f){var w=B.bj(d,!0,f)
A.d.fA(w,this.a)
return B.df(w,0,B.dK(e,"count",x.S),B.U(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1680}
C.eX1.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ei(A.bf,!1,4279310375,A.aA,"",i,24,A.bi,A.a3,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eW,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cd,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eX3.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ei(A.L,!1,this.b.d,A.aA,"",4280640491,i,A.bi,A.cK,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bc,4280172719,2,d,l,0,"",D.me,D.cO,g,e,f)},
$S:z+46}
C.eX2.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vH(0,"twinkle")
w=t===D.bc?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.me,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eX0.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fhW.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fhX.prototype={
$0(){return A.d.gL(D.Fr)},
$S:z+49}
C.fhY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eZ0.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fo0.prototype={
$1(d){var w=2450411,v=4281908728
C.dr(d,C.ds(4280171146,1,0,D.bc,w,0,0.52,0,0))
C.dr(d,C.ds(v,1,0,D.bc,w,0,0.04,0.48,0))
C.dr(d,C.ds(4294047225,0.38,0,D.bc,w,0,0.48,0.52,0.62))
C.dr(d,C.ds(v,0.006,0,D.fl,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fo1.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dr(d,C.ds(4280172719,0.8,0,D.bc,w,0,0.36,0.58,0.1))
C.dr(d,C.ds(v,0.64,0,D.bc,w,0,0.28,0.64,0.18))
C.dr(d,C.ds(4282090230,0.44,0,D.bc,w,0,0.2,0.7,0.28))
C.dr(d,C.ds(v,0.006,0,D.fl,v,3,0.22,0.08,0.12))
C.dr(d,C.ds(u,0.004,0,D.fl,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fo2.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(4279080072,0.11,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(4279310375,0.11,0,D.bc,w,0,1,0,0.89))
C.dr(d,C.ds(856528008,0.72,0,D.jq,w,0,0.28,0.72,0.14))
C.dr(d,C.ds(1426953352,0.2,0,D.jq,w,0,0.2,0.78,0.22))
C.dr(d,C.ds(v,0.004,0,D.fl,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fod.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4279203438,0.55,0,D.jq,w,0,0.5,0.55,-0.05))
C.dr(d,C.ds(4280171146,0.5,0,D.jq,w,0,0.45,0.62,0.35))
C.dr(d,C.ds(4280640491,0.4,0.3,D.jp,w,0,0.35,0.68,0.55))
C.dr(d,C.ds(571438702,0.12,0,D.bc,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.foi.prototype={
$1(d){var w=4280472558
C.dr(d,C.ds(4279310375,0.75,-0.4,D.jp,2450411,0,0.75,-0.15,0.35))
C.dr(d,C.ds(w,0.55,0,D.bc,2450411,0,0.06,0.42,0.38))
C.dr(d,C.ds(w,0.006,0,D.fl,w,3,0.35,0.08,0.08))
C.dr(d,C.ds(2282478,0.12,0,D.bc,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.foj.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3423541034,0.48,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(v,0.12,-0.08,D.jq,w,0,1.1,-0.05,0.38))
C.dr(d,C.ds(858088427,0.35,0,D.bc,w,0,0.42,0.55,0.05))
C.dr(d,C.ds(v,0.006,0,D.fl,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fok.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.czd[w]
u=Date.now()
t=$.iS
$.iS=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eW,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a3,A.bi,A.aA,4279310375,A.bf,null,D.bc,v,4294967295,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fl,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fol.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lS,A.dB,w/3).l()
u=Date.now()
t=$.iS
$.iS=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eW,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a3,A.bi,A.aA,4279310375,A.bf,null,D.Bj,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fl,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fom.prototype={
$1(d){var w=4294967295
C.dr(d,C.ds(4280640491,1,0,D.bc,2450411,0,0.42,0,0))
C.dr(d,C.ds(4280110808,1.1,1.57,D.jp,2450411,0,0.18,0.35,-0.05))
C.dr(d,C.ds(w,0.006,0,D.fl,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fon.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dr(d,C.ds(w,0.1,0,D.bc,v,0,1,0,0))
C.dr(d,C.ds(u,0.012,0,D.bc,v,0,1,0,0.1))
C.dr(d,C.ds(u,0.006,0,D.fl,u,3,0.42,0.06,0.14))
C.dr(d,C.ds(403446057,0.68,0,D.jq,v,0,0.22,0.72,0.18))
C.dr(d,C.ds(w,0.1,0,D.bc,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.foo.prototype={
$1(d){var w=4278630100
C.dr(d,C.ds(4279310375,1.2,0.15,D.jq,2450411,0,0.55,-0.2,-0.1))
C.dr(d,C.ds(w,1.1,0.15,D.bc,2450411,0,0.08,0.15,-0.05))
C.dr(d,C.ds(1120295,0.18,0,D.bc,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fo3.prototype={
$1(d){var w=4292617766
C.dr(d,C.ds(4282714634,0.65,-0.2,D.jp,2450411,0,0.65,-0.1,0.45))
C.dr(d,C.ds(w,0.5,-0.15,D.jp,2450411,0,0.5,0.05,0.55))
C.dr(d,C.ds(w,0.006,0,D.fl,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fo4.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4278413729,0.35,3.14,D.jp,w,0,0.45,-0.05,0.7))
C.dr(d,C.ds(4278355143,0.3,3.14,D.jp,w,0,0.4,0.25,0.75))
C.dr(d,C.ds(4279150057,0.32,3.14,D.jp,w,0,0.5,0.55,0.72))
C.dr(d,C.ds(863884284,0.22,0,D.eF,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fo5.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dr(d,C.ds(w,0.14,0,D.bc,v,0,0.14,0.02,0.02))
C.dr(d,C.ds(2282478,0.14,0,D.bc,u,3,0.14,0.84,0.02))
C.dr(d,C.ds(w,0.28,0,D.jq,v,0,0.35,-0.08,0.78))
C.dr(d,C.ds(u,0.22,0.5,D.jp,v,0,0.3,0.72,0.78))
C.dr(d,C.ds(w,0.006,0,D.fl,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fo6.prototype={
$1(d){var w=4293571336,v=1156231944
C.dr(d,C.ds(1841431,0.92,0,D.bc,w,3,0.92,0.04,0.04))
C.dr(d,C.ds(v,0.15,0,D.jp,2450411,0,0.15,0.02,0.02))
C.dr(d,C.ds(v,0.15,3.14,D.jp,2450411,0,0.15,0.83,0.83))
C.dr(d,C.ds(w,0.004,0,D.fl,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fo7.prototype={
$1(d){var w=4279080072,v=2450411
C.dr(d,C.ds(w,0.14,0,D.kK,v,0,0.14,0.68,0.18))
C.dr(d,C.ds(4279548070,0.14,0,D.kK,v,0,0.14,0.78,0.28))
C.dr(d,C.ds(4281193663,0.14,0,D.kK,v,0,0.14,0.68,0.38))
C.dr(d,C.ds(4284410580,0.14,0,D.kK,v,0,0.14,0.78,0.48))
C.dr(d,C.ds(4279203438,0.14,0,D.kK,v,0,0.14,0.68,0.58))
C.dr(d,C.ds(w,0.006,0,D.fl,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fo8.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3708753706,0.42,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(v,0.06,-0.05,D.jq,w,0,1,0,0.38))
C.dr(d,C.ds(859356664,0.25,0,D.eF,w,0,0.25,0.7,0.08))
C.dr(d,C.ds(v,0.006,0,D.fl,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fo9.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lS,A.dB,w/3).l()
u=Date.now()
t=$.iS
$.iS=t+1
v=new C.ey("design_"+(""+1000*u+"_"+t),D.eW,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a3,A.bi,A.aA,4279310375,A.bf,null,D.Bj,v,2450411,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(4280172719,0.08,0,D.bc,2450411,0,1,0,0))
C.dr(d,C.ds(s,0.006,0,D.fl,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.foa.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iS
$.iS=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eW,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a3,A.bi,A.aA,s,A.bf,null,D.fl,t,t,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(s,0.75,0,D.bc,2450411,0,0.22,0.72,0.1))
C.dr(d,C.ds(872415231,0.16,0,D.bc,2450411,0,0.16,0.75,0.15))
C.dr(d,C.ds(s,0.006,0,D.fl,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fob.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dr(d,C.ds(4674921,0.9,0,D.bc,4287931320,2,0.9,0.05,0.05))
C.dr(d,C.ds(w,0.08,0,D.bc,v,0,0.08,0.03,0.03))
C.dr(d,C.ds(u,0.08,0,D.bc,v,0,0.08,0.89,0.03))
C.dr(d,C.ds(u,0.08,0,D.bc,v,0,0.08,0.03,0.89))
C.dr(d,C.ds(w,0.08,0,D.bc,v,0,0.08,0.89,0.89))
C.dr(d,C.ds(w,0.004,0,D.fl,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.foc.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iS
$.iS=t+1
t=new C.ey("design_"+(""+1000*u+"_"+t),D.eW,0.55,0.14+v,0.38,0.18,"",24,A.a3,A.bi,A.aA,r,A.bf,null,D.bc,4294967295,4280640491,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
u=$.IY
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dx,A.cC,w/2).l()
t=Date.now()
s=$.iS
$.iS=s+1
u=new C.ey("design_"+(""+1000*t+"_"+s),D.eW,0.57,0.16+v,0.06,0.14,"",24,A.a3,A.bi,A.aA,r,A.bf,null,D.bc,u,q,0,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(4280171146,1,0,D.bc,q,0,0.48,0,0))
C.dr(d,C.ds(4280172719,1.1,1.57,D.jp,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.foe.prototype={
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
C.fof.prototype={
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
C.fog.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dr(d,C.ds(4294047225,0.08,0,D.bc,t,2,0.1,0.02,0.06))
C.dr(d,C.ds(s,0.42,0,D.bc,2450411,0,0.36,0.58,0.18))
C.dr(d,C.ds(872415231,0.12,0,D.bc,2450411,0,0.28,0.62,0.24))
C.dr(d,C.ds(16777215,0.28,0,D.eF,s,4,0.32,0,0.72))
C.dr(d,C.ds(r,0.006,0,D.fl,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iS
$.iS=u+1
u=new C.ey("design_"+(""+1000*v+"_"+u),D.eW,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a3,A.bi,A.aA,4279310375,A.bf,null,D.eF,16777215,t,2,0,!1,"",0,D.cd,0,"","","","","",!1,0)
v=$.IY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.foh.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(3423541034,0.55,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(4009754623,0.56,0.45,D.jq,w,0,0.56,0.22,0.18))
C.dr(d,C.ds(3439329279,0.44,0.45,D.jq,w,0,0.44,0.28,0.24))
C.dr(d,C.ds(v,0.07,0,D.bc,w,0,0.22,0.34,0.62))
C.dr(d,C.ds(v,1,0,D.bc,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.ffM.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.ffN.prototype={
$0(){return A.d.gL($.bAo())},
$S:z+52}
C.f5k.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f5j.prototype={
$1(d){return C.hBn(d,this.a,this.b)},
$S:z+53}
C.foI.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.v7(1.0375,1.01875,1)
return new B.fI(v,u,new C.aPI(B.hrl(A.tW,C.hBq(w.c,w.d,v,u),t)))},
$S:435}
C.dM2.prototype={
$1(d){var w=d.a/1e6
this.a.d.sq(0,w)
return w},
$S:8}
C.dM1.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bU(w,new B.o(w,w,w,w,w,new B.bR(A.I5,1.2,A.w,w,0,u.d,w,w),A.n),A.bb),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jB(new B.am(A.W,w,A.b_,A.q,B.a([t,new B.ep(B.b2(w,w,w,new C.bbc(u.a,r,q,r),A.at),w),B.au(new B.k5(r,new C.dM0(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:444}
C.dM0.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.eE.av(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hO(B.fF(i,A.A,r,r,A.cm,A.bQ,!0,r,!1,r,r),A.ao),A.h,r,r,new B.o(r,r,r,r,u,new B.fN(A.A,0,6.283185307179586,A.w,t,r,new B.m2(e*0.8)),A.a6),r,w,r,r,new B.N(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bnz(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cL(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d8(B.dP(B.v(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a3(A.a4,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaH1(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a3,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.d8(B.e5(A.A,new B.C(new B.N(l,0,l,0),B.v(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eJ1.prototype={
$1(d){var w=this.b
return new B.a3(A.ax,A.aC,A.w,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).au(0,d)},
$S:65}
C.c3Q.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bH:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.hy.j(0.4),A.J,14)],x.V):v
w=B.dj(v,B.bu(B.m(12),d,A.ao),v,v,A.ba,new B.o(v,v,t,u,w,v,A.n),A.eL,v,72,v,v,v,v,v)
return B.aH(v,new B.a5(112,v,B.v(B.a([w,A.h2,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bH:A.af,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1681}
C.c3R.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Ep(""))},
$S:0}
C.c3S.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.LU(v.Ep(u),!0,!1,null),!0,null),d.b,new C.c3T(w,this.c,d),v.a===u)},
$S:z+54}
C.c3T.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h5W(u.b,t.c.Ep(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fuQ.prototype={
$1(d){return new C.Xr(this.a,null)},
$S:z+55}
C.d12.prototype={
$0(){var w=this.a
w.d=w.guO().b6L("data:"+this.b+";base64,"+A.cR.gcs().aG(this.c));++w.r},
$S:0}
C.d17.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.d18.prototype={
$0(){var w=this.a
return w.n(new C.d16(w))},
$S:0}
C.d16.prototype={
$0(){return this.a.r++},
$S:0}
C.d19.prototype={
$1(d){var w=this.a
return w.n(new C.d15(w,d))},
$S:2}
C.d15.prototype={
$0(){var w=this.a
return w.d=w.guO().aAh(this.b)},
$S:0}
C.d1a.prototype={
$0(){var w=this.a
return w.n(new C.d14(w))},
$S:0}
C.d14.prototype={
$0(){var w=this.a
return w.d=w.guO().b6L("")},
$S:0}
C.d1b.prototype={
$1(d){var w=this.a
return w.n(new C.d13(w,d))},
$S:2}
C.d13.prototype={
$0(){var w=this.a
return w.d=w.guO().b6S(this.b)},
$S:0}
C.d1c.prototype={
$0(){var w=this.a
w=w.guO().b6S(w.gaub().a.a)
B.a9(this.b,!1).M(w)
return null},
$S:0}
C.fuP.prototype={
$1(d){var w={}
w.a=this.a
return new B.ea(new C.fuO(w),null)},
$S:20}
C.fuO.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bq(!0,new B.d1(new B.aW(0,1/0,0,B.aG(d,A.bR,x.w).w.a.b*0.85),B.ci(B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.f5t,A.av,D.f5H,A.ay,new C.aWR(v.a,new C.fuN(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.ak),w),!0,!1,A.ah,!0,!1),A.h,w,w,D.aTg,w,w,w,w,A.K8,w,w,w)},
$S:158}
C.fuN.prototype={
$1(d){this.b.$1(new C.fuM(this.a,d))
B.a9(this.c,!1).M(d)},
$S:z+56}
C.fuM.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fx_.prototype={
$1(d){return D.fhR},
$S:z+57}
C.d7y.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.d7z.prototype={
$0(){var w=this.a.c
w.toString
B.a9(w,!1).M(this.b)
return null},
$S:0}
C.d7A.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a9(w,!1).M(v)}},
$S:0}
C.fln.prototype={
$1(d){var w=this.b
return new B.a3(A.ax,A.aC,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).au(0,d)},
$S:65}
C.d0K.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.b4(t+r*1.2,o))
u.D(new B.cO(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.cO(w,q+p,w,q+p*1.2))
u.D(new B.C2(B.bT(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aM(u,v.d)
s.aM(u,v.e)
p=B.L()
p.r=B.aq(v.a.d,A.c,0.6).gq(0)
s.ae(new B.u(w,o),2.2,p)},
$S:666}
C.flr.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+58}
C.fdN.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fdO.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wD,B.v(B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eQp,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.F_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fdL(d),B.bk(A.bT,w,w,w,A.c,w,A.cc,w,w,w,w,w)),A.T,B.ez(A.nz,D.Rs,new C.fdM(d),B.db(w,w,w,w,w,w,w,w,w,A.af,w,w,A.cc,w,w,Q.vK,w,w,w,w))],x.p),A.ag,w,A.e,A.R,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:34}
C.fdL.prototype={
$0(){B.a9(this.a,!1).M("continue")
return null},
$S:0}
C.fdM.prototype={
$0(){B.a9(this.a,!1).M("new")
return null},
$S:0}
C.c9e.prototype={
$1(d){return d.hs()},
$S:z+59}
C.c9f.prototype={
$1(d){return d.ac()},
$S:z+60}
C.c9d.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a_(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a3.gdC(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hxk(b2.h(0,"type"))
t=B.aN(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aN(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aN(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aN(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aN(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.atf[A.o.E(b4,0,8)]
m=D.cBS[A.o.E(w,0,1)]
l=C.hAS(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.aq9[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hDC(b2.h(0,"shape"))
g=B.aN(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aN(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
if(f==null)f=4280172719
e=B.aN(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aN(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aN(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.h1i(b2.h(0,"textTransition"))
a4=B.aN(b2.h(0,"textAnimDelayMs"))
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
b2=B.aN(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.ei(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.c93.prototype={
$1(d){return d.hs()},
$S:z+62}
C.c94.prototype={
$1(d){return d.ac()},
$S:z+63}
C.c90.prototype={
$1(d){return B.t(d)},
$S:17}
C.c91.prototype={
$1(d){return B.t(d)},
$S:17}
C.c92.prototype={
$1(d){return C.fT8(B.a_(d,x.N,x.z))},
$S:z+64}
C.c9v.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c9w.prototype={
$0(){return A.d.gL(D.a_8)},
$S:z+66}
C.c9q.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c9p.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c9l.prototype={
$1(d){return new B.J(d,new C.c9m(),B.U(d).k("J<1,Q>")).fv(0,new C.c9n())},
$S:z+69}
C.c9m.prototype={
$1(d){return d.f},
$S:z+70}
C.c9n.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:667}
C.c9o.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hnd(d)},
$S:z+71}
C.c9r.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.c9s.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c9t.prototype={
$1(d){return d.ac()},
$S:z+14}
C.fm_.prototype={
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
C.flW.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.flX.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.flY.prototype={
$2(d,e){var w
if(d.b===D.cO){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.flZ.prototype={
$2(d,e){return d.b===D.eW&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c99.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hMb(b2,b3),b5=B.a2(b4).k("bg<2>")
b5=B.cz(new B.bg(b4,b5),new C.c98(),b5.k("G.E"),x.N)
w=B.d7(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.oY.av(0,A.k.E(b1,0,1))
u=new C.c9a()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c9b(a9,b7.d)
r=new C.c9c(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jD.av(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kJ(A.k.E(1-k,0,1),B.dP(B.e5(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eW){a4=i.hs()
a4.ay=B.aq(B.aY(l.ay),B.aY(i.ay),v).l()
a4.ch=B.aq(B.aY(l.ch),B.aY(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l7&&l.at==i.at?r.$1(i):new B.am(A.W,a8,A.b_,A.q,B.a([new B.kJ(A.k.E(o,0,1),r.$1(l),a8),new B.kJ(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iy(B.vA(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cd)a7=D.me
p.push(s.$5(i.c,i.d,i.e,i.f,C.h3t(a7,a6,r.$1(i))))}}return B.bU(new B.am(A.W,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a3(A.a4,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.bb)},
$S:443}
C.c98.prototype={
$1(d){return d.a},
$S:z+22}
C.c9a.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aY(w)},
$S:z+76}
C.c9b.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1685}
C.c9c.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5L(v,C.aYY(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dz9.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e5(new B.d6(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c9i.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c9j.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.foP.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:286}
C.fnV.prototype={
$1(d){return new C.abd(this.a,this.b,null)},
$S:z+78}
C.ect.prototype={
$0(){return this.a.Od(this.b,C.hPv(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ecu.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Od(this.b,C.hPx(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ecv.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Od(this.b,C.hPw(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ecw.prototype={
$0(){X.h3d()
B.a9(this.a,!1).M(null)},
$S:0}
C.c97.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1686}
C.c96.prototype={
$2(d,e){var w,v=this,u=null,t=B.dI(d,A.n1),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.E(p*Math.max(B.lB(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dq
return B.fF(t,A.A,o,new C.c95(),A.cm,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1687}
C.c95.prototype={
$3(d,e,f){return D.a7W},
$S:223}
C.flV.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aY(r.e)
v=r.f
v.toString
v=new B.a3(A.ax,A.aC,A.w,B.a([w,B.aY(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aY(r.e):t
r=r.z
r=B.df(r,0,B.dK(6,"count",x.S),B.U(r).c)
u=r.$ti.k("J<ai.E,cG>")
r=B.z(new B.J(r,new C.flU(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bU(new B.am(A.W,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bb),A.ao)},
$S:1688}
C.flU.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYY(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f7E.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cP(r.b,new C.f7C(d))
w=B.aG(d,A.bR,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.ab(0,A.G,A.x.j(0.45),A.fF,28)],x.V)
s=x.p
return new B.cX(e,!1,B.au(B.aD(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.la,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.yt,q,q,!0,q,q,new C.f7D(p,d),q,B.fr(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.K7,q,new B.b6(B.m(12),A.X),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aW(0,w.a.a*0.94,0,1/0),new B.o(A.aF,q,u,v,t,q,A.n),q,q,q,A.fA,A.zQ,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ad),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.f7C.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a9(w,!0).oP())B.a9(w,!0).eD()},
$S:0}
C.f7D.prototype={
$0(){var w=this.a.a
if(w!=null)w.aa(0)
B.a9(this.b,!0).eD()},
$S:0}
C.eRl.prototype={
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
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jz(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fl(r*1.2)
s.jz(r*0.5)
return B.fo(A.A,B.d8(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fl(-r*1.4)
return B.fo(A.a7,B.d8(u.b,r),t,s,!0)
case 12:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(B.e5(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.jB(u.b,A.q,new C.aGB(r,t))],x.p),t)
case 15:return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.jB(u.b,A.q,new C.aGB(1-r,t))],x.p),t)
case 16:v=D.aWs.av(0,r)
return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.e5(A.A,B.d8(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(B.ed(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.di()
s.mf(r*6.28)
s.ji(r,r,r,1)
return B.fo(A.A,u.b,t,s,!0)
case 20:return B.eu(A.A,(r-0.5)*0.35,new B.am(A.W,t,A.b_,A.q,B.a([u.c,B.d8(u.b,r)],x.p),t),t)}},
$S:56}
C.dKf.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cm(0)}},
$S:11}
C.dKe.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cm(0)}},
$S:11}
C.dKd.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h3t(v,w,e)},
$S:56}
C.c9_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.aY(v.e)
t=v.f
t.toString
t=new B.a3(A.a4,A.a7,A.w,B.a([u,B.aY(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.aY(v.e):r
v=v.z
s=B.U(v).k("J<1,cG>")
q=B.z(new B.J(v,new C.c8Z(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bU(new B.am(A.W,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.bb)},
$S:443}
C.c8Z.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cd?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5L(m,new C.Tc(d,C.aYY(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cZi.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cZh(w))},
$S:11}
C.cZh.prototype={
$0(){return this.a.d++},
$S:0}
C.e2_.prototype={
$2(d,e){var w,v=null,u=A.o.ak(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aHK.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hLV(w,t,s,e)}switch(s.a.c){case"float3d":s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dZ(0,w*7,0,1)
s.fl(Math.sin(t)*0.32)
s.jz(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.ji(w,w,w,1)
return B.fo(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e5(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.d8(B.e5(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:56}
C.eGM.prototype={
$1(d){var w
$.W()
w=B.L()
w.b=A.ac
w.c=d
w.e=A.ft
return w},
$S:1689}
C.fjw.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ge8()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.bns(u,t,r),A.at))
w.push(B.n6(s.d,A.ao,new C.bbJ(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bmv(u,q,t,r),A.at))
return B.au(new B.a5(v.a,v.b,new B.am(A.W,r,A.b_,A.q,w,r),r),r,r,r)},
$S:246}
C.fas.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:285}
C.eiH.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.BP(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gai(s)){u=null
w=1
break}u=r.dI(s,new C.eiF(),new C.eiG(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1690}
C.eiF.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.eiG.prototype={
$0(){return J.fj(this.a)},
$S:1692}
C.ef4.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ef5.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ef6.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.egF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egt.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.egu.prototype={
$1(d){return d.hs()},
$S:z+81}
C.ees.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ehN.prototype={
$0(){this.a.rJ()},
$S:0}
C.eiD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.nD()
w.IK()},
$S:0}
C.egD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.nD()
w.IK()},
$S:0}
C.eiq.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eir.prototype={
$1(d){return d.b===D.cO},
$S:z+4}
C.eis.prototype={
$1(d){return d.a},
$S:z+22}
C.eit.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bc(w,A.b2,A.aM),$.av())},
$S:260}
C.eiu.prototype={
$0(){return B.kb(!0,null,!0,!0,null,null,!1)},
$S:671}
C.edR.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eiE.prototype={
$0(){},
$S:0}
C.efM.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()
w.IK()},
$S:0}
C.edP.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wz()},
$S:0}
C.edQ.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wz()},
$S:0}
C.eg8.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eg9.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()
w.IK()
w.z="Home"},
$S:0}
C.ega.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efL.prototype={
$1(d){var w=null
return B.eq(B.a([B.bK(!1,A.Rr,w,w,!0,w,w,new C.efK(d),w,w)],x.p),w,w,w,D.f73,w,w,w,w,D.eQP,w)},
$S:21}
C.efK.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.efI.prototype={
$1(d){var w=null
return B.eq(B.a([B.bK(!1,A.Rr,w,w,!0,w,w,new C.efH(d),w,w)],x.p),w,w,w,D.eUw,w,w,w,w,D.eSs,w)},
$S:21}
C.efH.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.efJ.prototype={
$0(){},
$S:0}
C.ef0.prototype={
$1(d){return this.a.aWu(C.bys(d))},
$S:z+7}
C.ef1.prototype={
$1(d){return this.a.aco(C.bys(d))},
$S:z+7}
C.efS.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.h,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f77,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.NY(A.uy,D.art,"HATI YA KUHOWA","Hati ya mahari",new C.efN(d),w),A.T,new C.NY(A.fY,D.cNs,"HATI YA KUHOWESHA","Hati ya kupokea",new C.efO(d),w),A.T,new C.NY(A.hU,D.cAb,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.efP(d),w),A.T,new C.NY(A.hV,D.cyB,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.efQ(d),w)],v)
if(this.a.ga90())A.d.v(u,B.a([A.T,new C.NY(A.iO,D.cjQ,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.efR(d),w)],v))
return B.bq(!0,B.ci(B.v(u,A.ag,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.wD,w,w,A.ak),!0,!1,A.ah,!0,!0)},
$S:34}
C.efN.prototype={
$0(){B.a9(this.a,!1).M("hati_kuhowa")
return null},
$S:0}
C.efO.prototype={
$0(){B.a9(this.a,!1).M("hati_kuhoweya")
return null},
$S:0}
C.efP.prototype={
$0(){B.a9(this.a,!1).M("marriage_agreement")
return null},
$S:0}
C.efQ.prototype={
$0(){B.a9(this.a,!1).M("hati_malipo_awamu")
return null},
$S:0}
C.efR.prototype={
$0(){B.a9(this.a,!1).M("hati_kiapo_uongozi")
return null},
$S:0}
C.efT.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()},
$S:0}
C.edT.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.edU.prototype={
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
C.eg3.prototype={
$1(d){return d.b===D.l7},
$S:z+4}
C.eg4.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.ea(new C.eg1(w,this.a,v),null)},
$S:20}
C.eg1.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eg2(p,o,a3,n),l=B.M(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aQ:A.aj,i=l?A.bj:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.B(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.ct,j,q,q,q,q),q,q,q,new C.efY(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.AI[w]
v.a=null
t=v.a=u.a
a1.push(new C.bed(t,u.b,p.a===t,i,k,new C.efZ(v,m),q))}a1=B.c9(A.bJ,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.AD[w]
s.a=null
t=s.a=r.a
u.push(new C.bec(t,r.b,p.b===t,k,j,new C.eg_(s,m),q))}return B.bq(!0,B.p(q,B.ci(B.v(B.a([d,A.aO,a0,A.T,a1,A.bu,v,A.T,B.c9(A.bJ,u,A.bx,12,12),A.bu,new B.a5(1/0,48,B.ez(D.bE3,D.f9o,new C.eg0(o,n),B.db(q,q,q,q,q,q,q,q,q,A.aB,q,q,q,q,new B.b6(B.m(16),A.X),D.aQR,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.ak),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rL,D.bij,q,q,q),!0,!1,A.ah,!0,!0)},
$S:110}
C.eg2.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.efW(w.a,d,e))
w.b.cZ(new C.efX(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1695}
C.efW.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.efX.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.efY.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.efZ.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eg_.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eg0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fm(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.efV(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efV.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eg6.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eg7.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.eg5(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.wz()},
$S:0}
C.eg5.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ego.prototype={
$1(d){return d.b===D.cO},
$S:z+4}
C.egp.prototype={
$1(d){return d.w},
$S:z+82}
C.egq.prototype={
$2(d,e){return d>e?d:e},
$S:93}
C.egr.prototype={
$1(d){var w=this,v=null,u=B.M(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aQ:A.aj,r=u?A.bj:A.aN,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bR,x.w).w,m=w.a,l=x.p,k=w.b
return B.bq(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bxY,A.h,v,v,D.aSc,v,38,v,v,v,v,v,38),A.bd,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.ct,s,v,v,v,v),v,v,v,new C.egl(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dm(1,A.cl,B.hH(v,new C.egm(m,k,w.c,s,w.d,t,r),k.length,A.hn,v,A.ak,new C.egn(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aW(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rL,A.VD,v,v,v),!0,!1,A.ah,!0,!0)},
$S:34}
C.egl.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.egn.prototype={
$2(d,e){return A.ab},
$S:35}
C.egm.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aB:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cq
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bB0,q,q,q,new C.egj(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bkw,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bn(q,new B.b3(4,B.m(16),A.X),q,A.eN,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b3(4,B.m(16),D.aQw),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.egk(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1696}
C.egj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hRv(k),$async$$0)
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
l.agp(k,m)
l.oB()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egk.prototype={
$1(d){var w=this.a
w.agp(this.b.a,d)
w.oB()},
$S:2}
C.egs.prototype={
$0(){},
$S:0}
C.efU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ee9.prototype={
$0(){},
$S:0}
C.eea.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h4M(this.b,w,!0)
w=this.a
w.r=null
w.wz()},
$S:0}
C.eeb.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eec.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.ee8(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.wz()},
$S:0}
C.ee8.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.egy.prototype={
$1(d){return B.p9(new C.egx(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.egx.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.adF,B.v(B.a([D.f4U,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.i7(!0,w,e,A.z,D.euy,new C.egw(this.a,this.b),20,A.rO,w,A.ak,!1),1)],v),A.ag,w,A.e,A.j,0,A.p)},
$S:445}
C.egw.prototype={
$2(d,e){var w=null,v=D.Fr[e],u=C.hn8(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fC,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.ep7,A.h,w,w,new B.o(A.e4.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nt,w,w,w)],m))
return B.aD(!1,A.a1,!0,w,B.aI(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b8,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a3(A.a4,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.egv(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad)},
$S:75}
C.egv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c9h(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a9(s,!1).M(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egz.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wz()},
$S:0}
C.ecO.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qU(4294967295,null,0,0,null,C.cy(),D.md,"","","",D.db),s=this.b
C.c9u(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Bi){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ee7.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.m(0,"id",C.cy())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iS
$.iS=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.fT8(q));++v.f},
$S:0}
C.ee5.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.egH.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ee1.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.ee0(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ee0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egG.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.Q(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.edS.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bc(w,A.b2,A.aM),$.av())},
$S:260}
C.eet.prototype={
$0(){return B.kb(!0,null,!0,!0,null,null,!1)},
$S:671}
C.eio.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eip.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aqo(w).fw()
v=u.UJ(w)
v.srp(B.h2(A.bs,v.a.a.length))},
$S:8}
C.ehO.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.VH(v)
if(u!=null&&u.b===D.cO)w.UJ(u).saU(0,u.r)}else w.w=null},
$S:0}
C.ecP.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.bf,!1,v.gpB().e.l(),A.aA,"",4280640491,24,A.bi,A.a3,"",0.22,w,null,"","",0,!1,"",0,D.bc,4280172719,2,"Tap to edit text",0,0,"",D.cd,D.cO,0.7,0.15,0.2)
A.d.K(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ecM.prototype={
$0(){var w=C.cy(),v=this.a,u=C.ei(A.bf,!1,4279310375,A.aA,"",v.gpB().c.j(0.25).l(),24,A.bi,A.a3,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpB().c.l(),2,"",0,0,"",D.cd,D.eW,0.25,0.3,0.3)
A.d.K(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ecC.prototype={
$0(){var w=C.ei(A.bf,!1,4279310375,A.aA,"",4280640491,24,A.bi,A.a3,"",0.55,C.cy(),this.b,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l7,0.6,0.2,0.18),v=this.a
A.d.K(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ecz.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bK0],x.p)
for(w=J.aU(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gah_().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bvK,r,r,r,r,new C.ecy(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bq(!0,B.cM(q,r,r,r,r,A.ak,!0),!0,!1,A.ah,!0,!0)},
$S:34}
C.ecy.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.ecA.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cy(),u=this.b,t=A.Q.al(u.ac(),null),s=C.ei(A.bf,!1,4279310375,A.aA,u.b,4280640491,24,A.bi,A.a3,"",0.86,v,null,"","",0,!1,"",0,D.bc,4280172719,2,t,0,0,"",D.cd,D.a1x,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdk().z,s)
t.r=s.a},
$S:0}
C.ee3.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ee4.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdk().z,new C.ee2(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.av()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.ee2.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.edg.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cO)s.Q=t.c.l()
else if(w===D.eW){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.edh(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.edh.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.edl.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.edm(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.edm.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.edj.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cO){s.Q=t.c
return}w=new C.edk(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.edk.prototype={
$1(d){var w,v,u
for(w=A.d.gah(d.z),v=new B.hK(w,new C.edi()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.edi.prototype={
$1(d){return d.b===D.cO},
$S:z+4}
C.edf.prototype={
$0(){return C.c9u(this.b,this.c,this.a.gpB())},
$S:0}
C.egi.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.eix.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eiy.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eiz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eiA.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bi(s,new C.eiw(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQx()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.wz()
t.IK()}},
$S:0}
C.eiw.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ei3.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a94(),s=w.b,r=u.a95(A.f4,A.kE,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bu,B.p(v,B.B(B.a([B.D(u.aQX(w.c,A.aj),1),new B.C(A.fs,B.p(v,D.bvQ,A.h,v,v,new B.o(A.f4.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aQX(s,A.f4),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a3(A.ax,A.aC,A.w,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bu,u.aR_(A.f4,d,D.brX,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bRm(A.aY,d,A.t1,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aQY(d,"Not now"))
return new C.Iq(B.v(p,A.ag,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.ei2.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Iq(B.v(B.a([v.a94(),A.P,v.a95(A.aY,D.brE,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.d1(new B.aW(0,1/0,0,B.aG(d,A.bR,x.w).w.a.b*0.42),B.hH(w,new C.ei0(v,u,d),u.length,w,w,A.ak,new C.ei1(),!0),w),A.ay,v.aQY(d,"Cancel")],x.p),A.ag,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.ei1.prototype={
$2(d,e){return A.T},
$S:35}
C.ei0.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.a1,!0,w,B.aI(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aii,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bH_,A.n),w,42,w,w,w,w,w,42),A.bd,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mX,w,w,w),A.d4,B.d("Updated "+this.a.Oe(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.eo,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ei_(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ad)},
$S:75}
C.ei_.prototype={
$0(){B.a9(this.a,!1).M(this.b.a)
return null},
$S:0}
C.ehX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a94()
t=t.a95(A.aZ,A.t8,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Iq(B.v(B.a([s,A.P,t,A.bu,B.B(B.a([B.D(B.dV(A.a4U,new C.ehV(d),B.db(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cc,u,new B.b6(B.m(14),A.X),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bL(D.eT_,new C.ehW(d),B.bk(A.f4,u,u,u,A.c,u,A.cc,u,new B.b6(B.m(14),A.X),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ag,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.ehV.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.ehW.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.ehZ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a94(),s=w.b,r=u.a95(A.aS,A.en,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.D(u.arI("Names",""+w.c),1),A.aa,B.D(u.arI("Fields",""+w.d),1),A.aa,B.D(u.arI("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bk,v,v,v,A.c,v,A.wt,v,new B.b6(B.m(14),A.X),v,v,v)
return new C.Iq(B.v(B.a([t,A.P,r,A.aO,p,A.bu,B.bL(B.d("Open "+s,v,v,v,v,v,v,A.mW,v,v,v),new C.ehY(d),o),A.T,u.aQZ(d,"Stay here",!1)],q),A.ag,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.ehY.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.eeX.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.eeW.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.ehP.prototype={
$1(d){return d.b===D.cO},
$S:z+4}
C.ein.prototype={
$1(d){var w=this.a,v=this.b
return new C.YD(A.d.dI(w.d,new C.eil(v),new C.eim(v)).hs(),w.f,null)},
$S:z+84}
C.eil.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eim.prototype={
$0(){return this.a},
$S:z+85}
C.ecH.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hg,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bxy,w,w,w,w,new C.ecF(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eR8,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.byH,w,w,w,w,new C.ecG(d),!1,w,w,w,w,w,D.fav,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.bq(!0,B.v(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ecF.prototype={
$0(){B.a9(this.a,!1).M("scroll")
return null},
$S:0}
C.ecG.prototype={
$0(){B.a9(this.a,!1).M("split")
return null},
$S:0}
C.ecI.prototype={
$0(){var w=this.b,v=w.c,u=C.ei(A.bf,!1,4279310375,A.aA,v,4280640491,24,A.bi,A.a3,"",0.84,C.cy(),w.b,"","",0,!1,"",0,D.bc,4280172719,2,v,0,0,"",D.cd,D.Po,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ecJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iS
$.iS=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iS
$.iS=k+1
m.push(new C.ey(""+1000*l+"_"+k,D.Po,0.04,0.06,0.92,0.88,v,24,A.a3,A.bi,A.aA,4279310375,A.bf,u,D.bc,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cd,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lr(""+1000*p+"_"+o,r+n,"",D.pq,4294967295,null,D.db,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ecN.prototype={
$0(){var w,v=C.cy(),u=this.a,t=u.e
t=(t==null?null:C.kk(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ei(A.bf,!1,4279310375,A.aA,t,4280640491,24,A.bi,A.a3,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.kJ,0.35,0.55,0.62)
A.d.K(u.gdk().z,w)
u.r=w.a},
$S:0}
C.ecE.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aZ9(o)
w=C.cy()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ei(A.bf,!1,4279310375,A.aA,"marriage_sign_placed_"+A.a.e1(v.db,"marriage_sign_",""),4280640491,24,A.bi,A.a3,"",r,w,o.a,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.kJ,s,u,t)
A.d.K(p.gdk().z,q)
A.d.bm(p.gdk().z,new C.ecD(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hLF(p)}},
$S:0}
C.ecD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.egE.prototype={
$0(){var w=this.a,v=this.b
w.aZ9(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eiv.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ef_.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.eeZ())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eeZ.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.edp.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.edq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rJ()},
$S:8}
C.ecB.prototype={
$0(){var w=C.ei(A.bf,!1,4279310375,A.aA,"HD Photo",4280640491,24,A.bi,A.a3,"",0.8,C.cy(),this.b,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.cd,D.l7,0.8,0.1,0.1),v=this.a
A.d.K(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eer.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ecK.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ecT.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ecU.prototype={
$0(){var w=this.b.hs(),v=C.cy(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ei(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ecV.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.ecS(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.ecS.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ed5.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.ecR(v))
if(u>0){A.d.cu(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.ecR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ed8.prototype={
$0(){return this.a.as=A.bf},
$S:0}
C.ed9.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eda.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.edb.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.edc.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.edd.prototype={
$1(d){return d.b===D.cO},
$S:z+4}
C.ede.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecW.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.K(v,C.BU(w.gpB().c.j(0.18).l(),0.1,u,D.bc,0,2,1,0,0))
u=w.gdk().z
v=C.cy()
A.d.K(u,C.iM(A.bf,!1,w.gpB().d.l(),A.aA,18,A.bi,A.I,0.07,v,"Document Header",0,D.db,0.9,0.05,0.02))},
$S:0}
C.ecX.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cy()
A.d.K(u,C.BU(v.gpB().c.j(0.12).l(),0.1,t,D.bc,0,2,1,0,0.9))
t=v.gdk().z
u=C.cy()
w=C.bz8()
A.d.K(t,C.iM(A.L,!1,v.gpB().e.l(),A.aA,12,A.bi,A.a3,0.06,u,"Footer \xb7 "+w,0,D.db,0.9,0.05,0.92))},
$S:0}
C.ecY.prototype={
$0(){A.d.K(this.a.gdk().z,C.BU(1727914055,0.12,C.cy(),D.bc,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ecZ.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdk().z,C.BU(w,0.08,C.cy(),D.bc,w,2,0.5,0.2,0.4))},
$S:0}
C.ed_.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cy()
A.d.K(v,C.BU(w.gpB().c.j(0.35).l(),0.12,u,D.Bj,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdk().z,C.iM(A.bf,!1,4279310375,A.aA,18,A.bi,A.a3,0.15,C.cy(),"Important note",0,D.pr,0.5,0.38,0.52))},
$S:0}
C.ed0.prototype={
$0(){var w=this.a
A.d.K(w.gdk().z,C.BU(4294507260,0.78,C.cy(),D.bc,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdk().z,C.iM(A.bf,!1,4279179050,A.aA,16,A.bi,A.a3,0.7,C.cy(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bz8()+"\n\nSubject:\n\nBody text\u2026",0,D.db,0.76,0.12,0.14))},
$S:0}
C.ed1.prototype={
$0(){var w=this.a
A.d.K(w.gdk().z,C.BU(4294897802,0.28,C.cy(),D.bc,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdk().z,C.iM(A.bf,!1,4285611794,A.aA,15,A.bi,A.a3,0.24,C.cy(),"Sticky note",0,D.aAK,0.26,0.64,0.14))},
$S:0}
C.ed2.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdk().z,C.BU(4293060848,0.04,C.cy(),D.bc,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdk().z,C.BU(w,0.04,C.cy(),D.bc,w,2,0.55,0.1,0.48))},
$S:0}
C.ed3.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.aA,18,A.bi,A.a3,0.62,C.cy(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Gk,0.42,0.06,0.18))
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.aA,18,A.bi,A.a3,0.62,C.cy(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.to,0.42,0.52,0.18))},
$S:0}
C.ed4.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdk().z,C.BU(858088427,0.62,C.cy(),D.bc,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdk().z,C.BU(856004201,0.62,C.cy(),D.bc,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.aA,20,A.bi,A.I,0.1,C.cy(),"Option A",0,D.db,0.36,0.08,0.2))
A.d.K(v.gdk().z,C.iM(A.bf,!1,w,A.aA,20,A.bi,A.I,0.1,C.cy(),"Option B",0,D.db,0.36,0.56,0.2))},
$S:0}
C.ed6.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdk().z,C.BU(4294967295,0.36,C.cy(),D.bc,w,2,0.24,0.38,0.28))
A.d.K(v.gdk().z,C.iM(A.L,!1,w,A.aA,14,A.bi,A.a3,0.12,C.cy(),"[ QR CODE ]",0,D.db,0.24,0.38,0.4))},
$S:0}
C.ed7.prototype={
$0(){return C.c9u(this.b,D.Pp,this.a.gpB())},
$S:0}
C.eeq.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a3c.t(0,d),t=this.a
return t.b2X(d,v===d,A.aW,this.c,new C.eep(t,u,d,w),u)},
$S:z+25}
C.eep.prototype={
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
C.bzV(r,new C.eeo(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeo.prototype={
$0(){return this.a.cZ(new C.een(this.b,this.c))},
$S:0}
C.een.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ecL.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qU(4294967295,null,0,0,null,C.cy(),D.md,"","","",D.db),s=this.b
C.c9u(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.Bi){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.edt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hRy(p,q.d,s,new C.eds(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rJ(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eds.prototype={
$1(d){return this.bfe(d)},
bfe(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.edr(t,d))
w=2
return B.b(t.rJ(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.edr.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.edu.prototype={
$0(){return this.a.bCH()},
$S:0}
C.edv.prototype={
$0(){return this.a.aMo("Class Presentation",!0)},
$S:0}
C.edw.prototype={
$1(d){return this.a.bDD(d.b,this.b,d.a)},
$S:z+88}
C.ee6.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bR,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.egh.prototype={
$1(d){return new B.C(new B.N(0,0,0,B.aG(d,A.et,x.w).w.f.d),new B.ea(new C.egg(this.a,this.b),null),null)},
$S:58}
C.egg.prototype={
$2(d,e){return B.p9(new C.egf(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1698}
C.egf.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aF:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.b9,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.T,r,new B.C(A.ad6,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b8,B.bK(!1,A.yt,v,v,!0,v,v,new C.egd(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cM(B.a([p.aP0(u,!0,!0,new C.ege(p,w.d))],q),e,D.bg9,v,v,A.ak,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.ko,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.egd.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.ege.prototype={
$0(){this.b.$1(new C.egb())
var w=this.a
if(w.c!=null)w.n(new C.egc())},
$S:0}
C.egb.prototype={
$0(){},
$S:0}
C.egc.prototype={
$0(){},
$S:0}
C.ehQ.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.ehR.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d8(B.e5(A.A,new C.awe(this.a,null),0.94+w*0.06,null,null),w)},
$S:446}
C.ehS.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.ehT.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d8(B.e5(A.A,new C.b9B(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:446}
C.ehU.prototype={
$0(){return A.d.ck(this.a.d,0,C.U9(this.b))},
$S:0}
C.ecQ.prototype={
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
t=B.p(p,B.V(A_.Xj,u?A.af:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.w,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.to(A.fp,B.p(p,B.v(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.aj,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a3(A.ax,A.aC,A.w,s,p,p),A.n),p,p,p,p,A.eq,p,p,1/0),14,!1),A.ao)},
$S:584}
C.edV.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.edW.prototype={
$1(d){return d.length!==0},
$S:3}
C.edX.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k8
else{w=B.ae("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.XS:A.A8}return w},
$S:674}
C.ee_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dJ.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aF.j(0.78)],s):B.a([A.c.j(0.92),A.mr.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.kk(v.w)?A.uy:A.pe,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a3(A.a4,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Oe(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Oe(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Oe(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Oe(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Oe(v.f)
r=k.bDB(n,A.d.gL(r),t)
return B.p(l,B.bu(j,new B.a5W(B.aD(!1,A.a1,!0,l,B.aI(!1,l,!0,B.p(l,B.dL(!1,A.K4,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.nw,t?A.az:A.bI,l,l,l,l),l,l,l,new C.edY(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a3(A.ax,A.aC,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.edZ(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ad),l),A.ao),A.h,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:90}
C.edZ.prototype={
$0(){return this.a.aco(this.b)},
$S:0}
C.edY.prototype={
$0(){return this.a.zS(this.b,this.c)},
$S:0}
C.efq.prototype={
$0(){var w=this.a
w.b1D()
w.n(new C.efp())},
$S:0}
C.efp.prototype={
$0(){},
$S:0}
C.efr.prototype={
$1(d){return this.a.agp(this.b.a,d)},
$S:2}
C.efs.prototype={
$0(){this.a.cZ(new C.efo(this.b))},
$S:0}
C.efo.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.eft.prototype={
$0(){this.a.cZ(new C.efn(this.b))},
$S:0}
C.efn.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bi:A.cx},
$S:0}
C.efu.prototype={
$0(){this.a.cZ(new C.efm(this.b))},
$S:0}
C.efm.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aA:A.mi},
$S:0}
C.efv.prototype={
$0(){this.a.cZ(new C.efl(this.b))},
$S:0}
C.efl.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.efw.prototype={
$0(){var w=this.a
w.cZ(new C.efk(w,this.b))},
$S:0}
C.efk.prototype={
$0(){var w=this.b
return w.as=this.a.bXR(w.as)},
$S:0}
C.efx.prototype={
$0(){return this.a.cZ(new C.efj(this.b))},
$S:0}
C.efj.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.efy.prototype={
$0(){return this.a.cZ(new C.efi(this.b))},
$S:0}
C.efi.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.efb.prototype={
$0(){return this.a.a_X(this.b.a)},
$S:0}
C.efc.prototype={
$0(){this.a.Yy()
return null},
$S:0}
C.efd.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bR,x.w).w.a.a<900)w.acH()
else w.n(new C.efa(w))},
$S:0}
C.efa.prototype={
$0(){return this.a.as=!0},
$S:0}
C.efe.prototype={
$0(){this.a.cZ(new C.ef9(this.b))},
$S:0}
C.ef9.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.eff.prototype={
$0(){return this.a.cZ(new C.ef8(this.b))},
$S:0}
C.ef8.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.efg.prototype={
$0(){return this.a.cZ(new C.ef7(this.b))},
$S:0}
C.ef7.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.efh.prototype={
$0(){return this.a.awt(null)},
$S:0}
C.eej.prototype={
$0(){this.a.Cr()
return null},
$S:0}
C.eek.prototype={
$0(){this.a.a7E()
return null},
$S:0}
C.eem.prototype={
$1(d){return this.bff(d)},
bff(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.IB(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c2(A.aF,null,new C.eee(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.eef(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.eeg(r))
s=s.c.H(x.q).f
s.P(B.b0(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.eeh(r))
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
return B.b(C.h5V(q,new C.Do(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.eei(r,p))
s=s.c.H(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aeE(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b0(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eee.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dQO],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bxF:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eed(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bq(!0,B.v(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.eed.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.eef.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eeg.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eeh.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eei.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eel.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yO(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yO(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yO(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aeE(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dVd,q,v,u,B.yO(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:126}
C.eiB.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bz5(w,v)}},
$S:0}
C.eiC.prototype={
$0(){this.a.Cr()
return null},
$S:0}
C.efB.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bGU:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aQ:A.bt
return new B.C(A.hn,B.aH(u,B.dj(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.ba,new B.o(w,u,u,r,u,q,A.n),A.eL,u,u,u,A.lr,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.efA(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:128}
C.efA.prototype={
$0(){var w=this.a
return w.n(new C.efz(w,this.b))},
$S:0}
C.efz.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.efC.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_D:E.ary
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbGS():t.gbD1()
return B.hq(B.aH(u,B.p(u,D.ahL,A.h,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a3(A.a4,A.a7,A.w,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1701}
C.efD.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hQO(v,w.a.c)},
$S:0}
C.eh_.prototype={
$0(){return this.b.un(this.a.a)},
$S:0}
C.eh0.prototype={
$0(){return this.a.un(D.md)},
$S:0}
C.eh1.prototype={
$0(){return this.a.un(D.Gi)},
$S:0}
C.ehc.prototype={
$0(){return this.a.un(D.Gj)},
$S:0}
C.ehn.prototype={
$0(){return this.a.un(D.Gh)},
$S:0}
C.ehy.prototype={
$0(){return this.a.pm("lab_report")},
$S:0}
C.ehF.prototype={
$0(){return this.a.pm("rubric")},
$S:0}
C.ehG.prototype={
$0(){return this.a.pm("minutes")},
$S:0}
C.ehH.prototype={
$0(){return this.a.pm("agenda")},
$S:0}
C.ehI.prototype={
$0(){return this.a.pm("timeline")},
$S:0}
C.ehJ.prototype={
$0(){return this.a.pm(this.b.a)},
$S:0}
C.eh2.prototype={
$0(){this.a.TT()
return null},
$S:0}
C.eh3.prototype={
$0(){this.a.TN()
return null},
$S:0}
C.eh4.prototype={
$0(){return this.a.pm("table")},
$S:0}
C.eh5.prototype={
$0(){return this.a.pm("sticky")},
$S:0}
C.eh6.prototype={
$0(){return this.a.pm("divider")},
$S:0}
C.eh7.prototype={
$0(){return this.a.pm("header_bar")},
$S:0}
C.eh8.prototype={
$0(){return this.a.on(D.bc)},
$S:0}
C.eh9.prototype={
$0(){return this.a.on(D.eF)},
$S:0}
C.eha.prototype={
$0(){return this.a.on(D.jp)},
$S:0}
C.ehb.prototype={
$0(){return this.a.on(D.Bj)},
$S:0}
C.ehd.prototype={
$0(){return this.a.on(D.jq)},
$S:0}
C.ehe.prototype={
$0(){return this.a.on(D.kK)},
$S:0}
C.ehf.prototype={
$0(){return this.a.on(D.fl)},
$S:0}
C.ehg.prototype={
$0(){this.a.G1()
return null},
$S:0}
C.ehh.prototype={
$0(){this.a.LO()
return null},
$S:0}
C.ehi.prototype={
$0(){return this.a.pm("quote")},
$S:0}
C.ehj.prototype={
$0(){return this.a.a5Q()},
$S:0}
C.ehk.prototype={
$0(){this.a.YE()
return null},
$S:0}
C.ehl.prototype={
$0(){var w=this.a
return w.n(new C.egQ(w))},
$S:0}
C.egQ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ehm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nw(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.egY(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eho.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jo()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a3d.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b9
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a3(A.a4,A.a7,A.w,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a3d.t(0,q))u.push(B.an(s,B.p(s,D.LF,A.h,s,s,D.CB,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.hn,B.aH(s,B.hq(new B.am(A.W,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.egX(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+89}
C.egX.prototype={
$0(){this.a.a67(this.b)
return null},
$S:0}
C.ehp.prototype={
$0(){this.a.a66(this.b)
return null},
$S:0}
C.ehq.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hn9(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.b9
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qU(4294967295,r,0,0,r,"preview_"+w,D.pq,"","","",D.db)
C.h2R(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h4a(s),A.ao),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ao)],w)
if(q)u.push(B.an(r,B.p(r,D.aij,A.h,r,r,D.CB,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.kx,B.aH(r,B.v(B.a([new B.am(A.W,r,A.a9,A.q,u,r),A.d4,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.aj,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.egW(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+90}
C.egW.prototype={
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
break}s.cZ(new C.egM(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egM.prototype={
$0(){return C.h2R(this.a,this.b.a)},
$S:0}
C.egZ.prototype={
bfg(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a3c.t(0,d)
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
$2(d,e){return this.bfg(d,e)},
$S:z+91}
C.ehK.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("J<1,r>")
v=B.z(new B.J(d,new C.ehM(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ci(B.B(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b0)},
$S:z+92}
C.ehM.prototype={
$1(d){var w=this
return w.a.b2X(d,w.b===d,w.c,w.d,new C.ehL(w.e,d),!D.a3c.t(0,d))},
$S:z+25}
C.ehL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ehr.prototype={
$1(d){this.b.$2(d,new C.egV(this.a,d,this.c))
return null},
$S:z+26}
C.egV.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bzV(u,new C.egL(v,this.c,w),w)},
$S:0}
C.egL.prototype={
$0(){return this.a.cZ(new C.egJ(this.b,this.c))},
$S:0}
C.egJ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ehs.prototype={
$1(d){this.b.$2(d,new C.egU(this.a,d))
return null},
$S:z+26}
C.egU.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fxO(u,new C.egK(v,w),w)},
$S:0}
C.egK.prototype={
$0(){var w=this.a
return w.cZ(new C.egI(w,this.b))},
$S:0}
C.egI.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.eht.prototype={
$0(){var w=this.a
return w.n(new C.egT(w))},
$S:0}
C.egT.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ehu.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bz5(w,v)}},
$S:0}
C.ehv.prototype={
$0(){this.a.GO()
return null},
$S:0}
C.ehw.prototype={
$0(){return this.a.a5Q()},
$S:0}
C.ehx.prototype={
$0(){var w=this.a,v=w.jo()
if(v!=null&&v.b===D.cO)w.cZ(new C.egS(v))},
$S:0}
C.egS.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.ehz.prototype={
$0(){this.a.Cr()
return null},
$S:0}
C.ehA.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.E2(v,!0)
return null},
$S:0}
C.ehB.prototype={
$0(){this.a.cZ(new C.egR(this.b))},
$S:0}
C.egR.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.ehC.prototype={
$0(){this.a.cZ(new C.egP(this.b))},
$S:0}
C.egP.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bi:A.cx},
$S:0}
C.ehD.prototype={
$0(){this.a.cZ(new C.egO(this.b))},
$S:0}
C.egO.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aA:A.mi},
$S:0}
C.ehE.prototype={
$0(){this.a.cZ(new C.egN(this.b))},
$S:0}
C.egN.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.edo.prototype={
$1(d){return this.bfd(d)},
bfd(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.cZ(new C.edn(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.edn.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ei6.prototype={
$0(){var w=this.a
return w.cZ(new C.ei5(w,this.b))},
$S:0}
C.ei5.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.ei7.prototype={
$0(){var w=this.a
return w.cZ(new C.ei4(w,this.b))},
$S:0}
C.ei4.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eew.prototype={
$0(){return this.a.cZ(new C.eev(this.b))},
$S:0}
C.eev.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eex.prototype={
$0(){return this.a.cZ(new C.eeu(this.b))},
$S:0}
C.eeu.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.ef3.prototype={
$1(d){var w=x.gh
w=B.z(new B.J(D.ak1,new C.ef2(),w),w.k("ai.E"))
return w},
$S:z+94}
C.ef2.prototype={
$1(d){var w=null
return B.yO(B.d(d.b,w,w,w,w,w,w,A.mZ,w,w,w),48,d,x.fO)},
$S:z+95}
C.eij.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:35}
C.eii.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jK()?q:new C.eig(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.b9:A.cp
v=B.H(v,A.r,o?2:1)
u=r.d?A.cJ:A.c
t=B.bZ(0,C.h4a(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aH(q,B.p(q,new B.am(A.W,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.mV,q,q,q),A.h,q,q,new B.o(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.adZ,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eih(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:73}
C.eih.prototype={
$0(){var w=this.a
return w.n(new C.eic(w,this.b))},
$S:0}
C.eic.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IK()},
$S:0}
C.eig.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c2(null,null,new C.eid(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.eie(q,s))
q.aNM()}else if(r==="del"){q=t.a
q.n(new C.eif(q,s))
q.aMZ()}else if(r==="up")t.a.aZm(s,s-1)
else if(r==="down")t.a.aZm(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eid.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bzi,w,w,w,w,new C.ei8(d),!1,w,w,w,w,w,w,w,D.eS0,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bzb,w,w,w,w,new C.ei9(d),!1,w,w,w,w,w,w,w,A.vo,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.byt,w,w,w,w,new C.eia(d),!1,w,w,w,w,w,w,w,D.eZt,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bAu,w,w,w,w,new C.eib(d),!1,w,w,w,w,w,w,w,D.eRQ,w,w,w))
return B.bq(!0,B.v(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ei8.prototype={
$0(){B.a9(this.a,!1).M("dup")
return null},
$S:0}
C.ei9.prototype={
$0(){B.a9(this.a,!1).M("del")
return null},
$S:0}
C.eia.prototype={
$0(){B.a9(this.a,!1).M("up")
return null},
$S:0}
C.eib.prototype={
$0(){B.a9(this.a,!1).M("down")
return null},
$S:0}
C.eie.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eif.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eik.prototype={
$0(){return this.a.a5Q()},
$S:0}
C.edO.prototype={
$0(){var w=this.a
w.b1D()
w.awt(null)},
$S:0}
C.edN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ab(0,A.G,A.x.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.aY(m.e)
v=m.f
v.toString
v=new B.a3(A.ax,A.aC,A.w,B.a([w,B.aY(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.aY(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.aY(m.e)
q=m.f
q.toString
q=new B.a3(A.ax,A.aC,A.w,B.a([r,B.aY(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,B.bU(A.kh,new B.o(m.f==null?B.aY(m.e):p,p,p,p,p,r,A.n),A.bb),A.ao)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.edM(this.a,e.b,e.d,q),B.U(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a3,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bU(new B.am(A.W,p,A.a9,A.h,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bb)},
$S:443}
C.edM.prototype={
$1(d){var w=this
return w.a.bz1(d,w.b,w.c,w.d)},
$S:z+23}
C.edB.prototype={
$0(){var w=this
if(w.b){w.a.LX(w.c)
return}if(w.d){w.a.a5O(w.c)
return}if(w.e){w.a.ae0(w.c)
return}if(w.f)w.a.b28(w.c)},
$S:0}
C.edC.prototype={
$0(){this.a.LX(this.b)
return null},
$S:0}
C.edD.prototype={
$0(){return this.a.a_X(this.b.a)},
$S:0}
C.edE.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.edA(u,d,w.c,w.d))
v.Gs()
v.nD()
v.oB()},
$S:18}
C.edA.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.edF.prototype={
$1(d){return this.a.agp(this.b.a,d)},
$S:2}
C.edH.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fJ7(w))u.a.LX(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b28(v)},
$S:0}
C.edG.prototype={
$0(){return this.a.a_X(this.b.a)},
$S:0}
C.edI.prototype={
$1(d){var w=this,v=w.a
v.n(new C.edz(w.b,d,w.c,w.d))
v.Gs()
v.nD()
v.oB()},
$S:18}
C.edz.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cO)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.edJ.prototype={
$1(d){var w=this.a
w.n(new C.edy(this.b,d))
w.Gs()
w.nD()
w.oB()},
$S:242}
C.edy.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cO)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.edK.prototype={
$0(){var w=this.a
w.n(new C.edx(this.b))
w.Gs()
w.nD()
w.oB()},
$S:0}
C.edx.prototype={
$0(){this.a.r=C.h3G()},
$S:0}
C.edL.prototype={
$0(){return this.a.a_X(this.b.a)},
$S:0}
C.efF.prototype={
$0(){var w=this.a
return w.n(new C.efE(w))},
$S:0}
C.efE.prototype={
$0(){return this.a.y=!1},
$S:0}
C.efG.prototype={
$1(d){return this.a.ctY(this.b.a,d)},
$S:2}
C.eeK.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.eeL.prototype={
$1(d){return this.a.$1(new C.eeJ(this.b,d))},
$S:6}
C.eeJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eeM.prototype={
$1(d){return this.a.$1(new C.eeI(this.b,d))},
$S:6}
C.eeI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eeN.prototype={
$1(d){return this.a.$1(new C.eeH(this.b,d))},
$S:6}
C.eeH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eeO.prototype={
$1(d){return this.a.$1(new C.eeG(this.b,d))},
$S:6}
C.eeG.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eeP.prototype={
$1(d){return this.a.$1(new C.eeF(this.b,d))},
$S:6}
C.eeF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eeQ.prototype={
$1(d){return this.b.$1(new C.eeE(this.a,this.c))},
$S:9}
C.eeE.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eeR.prototype={
$1(d){return this.b.$1(new C.eeD(this.a,this.c))},
$S:9}
C.eeD.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eeS.prototype={
$1(d){var w=null,v=this.b,u=B.aY(d),t=v.Q===d,s=t?A.bk:A.cW
return B.aH(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eeC(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:441}
C.eeC.prototype={
$0(){return this.a.$1(new C.eez(this.b,this.c))},
$S:0}
C.eez.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eeT.prototype={
$1(d){return this.a.$1(new C.eeB(this.b,d))},
$S:1702}
C.eeB.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.eeU.prototype={
$1(d){var w=null
return B.aH(w,B.p(w,w,A.h,w,w,new B.o(B.aY(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eeA(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:441}
C.eeA.prototype={
$0(){return this.a.$1(new C.eey(this.b,this.c))},
$S:0}
C.eey.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eeV.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a9(w,!1).oP()}else w=!1
if(w){w=v.a.c
w.toString
B.a9(w,!1).eD()}v.a.apo()},
$S:0}
C.eeY.prototype={
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
r.push(B.an(2,B.p(n,B.V(A.t8,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mE,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.a1,!0,n,B.aI(!1,m,!0,B.es(new B.a5(48,48,new B.am(A.A,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a3(A.ax,A.aC,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ad)},
$S:137}
C.ecx.prototype={
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
return B.aD(!1,A.a1,!0,p,B.aI(!1,o,!0,B.es(B.v(B.a([B.e5(A.A,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ab,B.d(q.e,p,p,p,p,p,p,A.jU,A.L,p,p)],x.p),A.m,p,A.b7,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a3(A.ax,A.aC,A.w,u,p,p),A.n),p,A.DT,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ad)},
$S:137}
C.egC.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aj9,A.z,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eq(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.egA(d),w,w),B.bL(A.pF,new C.egB(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:21}
C.egA.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.egB.prototype={
$0(){var w=this.b.a.a
B.a9(this.a,!1).M(w)
return null},
$S:0}
C.cVO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dJ.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.eE.av(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dS.av(0,i)
v=B.m(22)
t=B.aq(A.aI,A.d.gL(C.kk(j.a.c.w)?D.tg:M.mM),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gL(C.kk(j.a.c.w)?D.tg:M.mM).j(0.18+w*0.12),A.J,32+w*10),D.a7q],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.aX,0.9,A.w,k,0,B.a([A.d.gL(C.kk(j.a.c.w)?D.tg:M.mM).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kk(j.a.c.w)?D.tg:M.mM).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.w,k,0,B.a([m,A.d.gaj(C.kk(j.a.c.w)?D.tg:M.mM).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kk(m)?D.tg:M.mM
s=B.a([new B.ab(0,A.G,A.d.gL(C.kk(m)?D.tg:M.mM).j(0.45+w*0.2),A.cs,18)],s)
m=x.p
l=B.a([p,B.e5(A.A,B.p(k,B.V(C.kk(j.a.c.w)?A.uy:A.pe,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a3(A.ax,A.aC,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.A,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kk(j.a.c.w)?D.tg:M.mM).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h2,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eKv,A.L,k,k),A.av,B.d(j.gcp7(),k,k,k,k,k,k,D.eOZ,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQx()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kk(j.a.c.w)?D.tg:M.mM).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ab],m))}s.push(new C.Ij(A.wV,"Download PDF","pdf",A.d6,j.HD(0),!1,k))
p=j.a.c
if(!p.z||p.gQx()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ij(A.kE,"Transfer to "+C.h3I(p==null?"":p),"transfer_hati",A.aS,j.HD(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.HD(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ij(D.br0,"Rename presentation","rename",A.cb,n,!1,k),A.ar,new C.Ij(A.afy,"Duplicate","duplicate",A.b3,j.HD(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ij(A.e7,"Delete presentation","delete",A.aD,j.HD(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.HD(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.HD(n)
s.push(B.dP(B.d8(B.bK(!1,E.aLi,k,k,!0,k,k,new C.cVN(d),k,B.fr(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.at,k,D.bjf,k,k,k,k,k,A.kb,k,k)),n),new B.u(0,(1-p)*8)))
return B.e5(A.A,B.d8(B.aD(!1,A.a1,!0,k,B.p(k,B.bu(q,new B.am(A.W,k,A.a9,A.q,B.a([o,new B.C(D.bio,B.v(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ao),A.h,k,A.SM,new B.o(A.aF,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ad),i),0.88+u*0.12,k,k)},
$S:44}
C.cVN.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.cW9.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.cWa.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.cVL.prototype={
$1(d){var w=this.a
return w.n(new C.cVH(w))},
$S:23}
C.cVH.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cVM.prototype={
$1(d){var w=this.a
return w.n(new C.cVG(w))},
$S:53}
C.cVG.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cVK.prototype={
$0(){var w=this.a
return w.n(new C.cVI(w))},
$S:0}
C.cVI.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cVJ.prototype={
$0(){var w=this.a.a.e
B.a9(this.b,!1).M(w)
return null},
$S:0}
C.ejh.prototype={
$0(){return $.bh2=!$.bh2},
$S:0}
C.ej7.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQQ())u.ata()},
$S:0}
C.ejg.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ej8.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ej9.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ata()},
$S:0}
C.ej3.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.ej4.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ej5.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ej6.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eje.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.A,null,A.b_,A.q,w,null)},
$S:1703}
C.ejf.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hM)return new B.cX(e,!1,d,null)
w=this.a
return w.cne(w.e,d,e)},
$S:447}
C.eja.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fl((1-v.gq(0))*1.5708)
return B.fo(A.A,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.ejb.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jz((1-v.gq(0))*1.5708)
return B.fo(A.A,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.ejc.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fl(v.gq(0)*0.8)
w.jz(v.gq(0)*0.35)
return B.fo(A.A,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.ejd.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fl(-v.gq(0)*1.2)
return B.fo(A.a7,B.d8(e,v.gq(0)),null,w,!0)},
$S:44}
C.eji.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWV().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWV().x
t===$&&B.c()
return new C.aYZ(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Hj(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:656}
C.ejk.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bR,x.w).w.a.a*0.55)w.ata()
else w.cc6()},
$S:53}
C.ejj.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.foF.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:448}
C.foO.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eq(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.foL(d),w,w),B.bK(!1,D.f5c,w,w,!0,w,w,new C.foM(d,this.b,v),w,w),B.bL(A.aLy,new C.foN(d,v,this.c),w)],x.p),w,w,L.ru,new B.a5(320,w,t,w),w,w,w,w,D.f6x,w)},
$S:21}
C.foL.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.foM.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a9(u.a,!1).M(null)
C.fJM(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.foN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a9(u.a,!1).M(null)
t=u.b
w=2
return B.b(C.aN4(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aMu(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.foE.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c9x.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.foK.prototype={
$1(d){return d.ac()},
$S:z+14}
C.eZr.prototype={
$1(d){return C.fJK(C.U9(B.a_(d,x.N,x.z)),this.a)},
$S:z+96}
C.fx3.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.fx4.prototype={
$4(d,e,f,g){var w=A.co.av(0,e.gq(0))
return B.d8(B.e5(A.A,D.fiY,0.94+w*0.06,null,null),w)},
$S:446}
C.fx5.prototype={
$1(d){var w=this
return new C.Ub(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eiO.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eiK.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eiN.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Uc(u,this.b,w.gaKm(),v,null)},
$S:z+99}
C.eiL.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eiM.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eiP.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eiQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eiT.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.eiU.prototype={
$0(){var w=this.a
return w.n(new C.eiS(w))},
$S:0}
C.eiS.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eiV.prototype={
$0(){var w=this.a
return w.n(new C.eiR(w))},
$S:0}
C.eiR.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eiW.prototype={
$1(d){return this.a.bDC(d,this.b)},
$S:z+100}
C.eiJ.prototype={
$0(){var w=this.a
return w.n(new C.eiI(w,this.b))},
$S:0}
C.eiI.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eiX.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eiY.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eiZ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ej_.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.ej0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fE(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.H(x.q).f.P(D.exz)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecr.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ecq())},
$S:0}
C.ecq.prototype={
$0(){},
$S:0}
C.ecs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fw()},
$S:8}
C.ecn.prototype={
$1(d){return this.a.n(new C.ecm())},
$S:2}
C.ecm.prototype={
$0(){},
$S:0}
C.eco.prototype={
$1(d){return this.a.aVl()},
$S:2}
C.ecp.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.ej2.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ej1(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ej1.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fiY.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.ep(new B.k5(this.c,new C.fiX(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:206}
C.fiX.prototype={
$3(d,e,f){return new C.Hj(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fiZ.prototype={
$1(d){var w=null
return B.nX(!1,B.au(new C.brm(this.a,this.b,w),w,w,w),w,x.z)},
$S:266}
C.fj2.prototype={
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
C.fj3.prototype={
bfM(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hf(A.fO),$async$$1)
case 3:r=f
if(r==null)throw B.R("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hE([J.f5(A.dD.gaO(r))],"image/png"))
t.toString
s=Ak.fAQ(t)
w=4
return B.b(new B.py(s,"load",!1,x.ev).gL(0).cJ(0,A.ku),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bfM(d)},
$S:1707}
C.fj_.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.fj0.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fD(0)},
$S:141}
C.fj1.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eTN.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eHc,A.L,w,w)},
$S:1708}
C.eTO.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.m4(A.bj,w,A.dI,8,w,e===0?w:e,w),A.ao)},
$S:565}
C.e2R.prototype={
$1(d){this.a.Y0()
return null},
$S:14}
C.e2P.prototype={
$0(){return this.a.e=D.beo},
$S:0}
C.e2Q.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.cc5.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.cc6.prototype={
$2(d,e){return(d|e)>>>0},
$S:76};(function aliases(){var w=C.aJ7.prototype
w.bqf=w.p
w=C.aIB.prototype
w.bpI=w.p
w=C.aIn.prototype
w.bpt=w.p
w=C.aIA.prototype
w.bpH=w.p
w=C.aJ5.prototype
w.bqd=w.p
w=C.aKq.prototype
w.brI=w.p
w=C.aHi.prototype
w.bol=w.p
w=C.aJk.prototype
w.bqs=w.p
w=C.aJl.prototype
w.bqt=w.p
w=C.b_F.prototype
w.bl_=w.azr})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hOL","alb",104)
v(C.aGh.prototype,"gbYb","X1",0)
var r
u(r=C.av2.prototype,"gcot","cou",38)
v(r,"gbYW","aaO",0)
v(r=C.auZ.prototype,"gaU7","CU",3)
v(r,"gbYT","bYU",3)
v(r,"gats","wN",0)
v(r,"gatt","Hl",0)
t(C,"hP9","hkX",105)
v(C.aB0.prototype,"gc_Q","c_R",3)
s(C,"hPk",0,null,["$4$paper$photo$request$template"],["fq3"],106,0)
s(C,"hPj",0,null,["$5$doc$history$instruction$photo$template"],["byq"],107,0)
v(r=C.aBj.prototype,"gc0x","HA",0)
v(r,"gbD4","UV",0)
v(r,"gc0A","abx",0)
v(r,"gc0z","XN",0)
v(r,"gaV0","D8",0)
v(C.aBn.prototype,"gc0F","XP",0)
v(r=C.aCG.prototype,"gaVd","Oa",0)
v(r,"gcgM","aZs",3)
v(r,"gcpR","axI",86)
v(r,"gbGJ","a7I",0)
v(r,"gc15","zv",0)
v(r=C.aEB.prototype,"gcaV","Z7",0)
v(r,"gcb2","Za",0)
v(r,"gbwa","a6d",0)
v(r,"gc19","abJ",0)
v(C.aEA.prototype,"gc1a","abK",0)
v(C.ayF.prototype,"gbv9","a60",0)
v(C.ax5.prototype,"gc1b","Y_",0)
w(C,"hPx","hNs",12)
w(C,"hPv","hKq",12)
w(C,"hPw","hMs",12)
v(r=C.aBA.prototype,"gcsT","csU",3)
v(r,"gcf2","cf3",3)
u(r,"gDe","aco",7)
v(r,"gbAJ","aoA",3)
u(r,"gDf","aWu",7)
v(r,"gc3i","ac5",0)
v(r,"gc29","ac4",0)
v(r,"gc5q","acp",0)
v(r,"gbD1","a7j",0)
v(r,"gc6i","Yy",0)
v(r,"gc6j","acG",0)
v(r,"gc6Q","acN",0)
v(r,"gc5D","acs",0)
v(r,"gbGS","a7M",0)
v(r,"gaNL","aNM",3)
v(r,"gaMY","aMZ",3)
v(r,"gaIH","aII",3)
v(r,"gaMX","apo",3)
u(r,"gbvq","bvr",80)
v(r,"gaxh","b1r",3)
v(r,"gc2b","c2c",3)
v(r,"gbRG","bRH",3)
v(r,"gbFs","bFt",3)
v(r=C.aBD.prototype,"gcrO","crP",3)
v(r,"gcrt","cru",3)
t(C,"hPy","hNJ",2)
v(r=C.aBB.prototype,"gc1h","HF",0)
v(r,"gciG","PB",0)
v(r,"gc1e","HE",0)
v(r,"gcu8","a0z",0)
v(r,"gc71","acU",0)
v(C.aBz.prototype,"gc1i","aVl",3)
v(r=C.aBC.prototype,"gbHD","a7W",0)
u(r,"gc1f","c1g",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.nv,C.Q6,C.bDK,C.bCg,C.crh,C.crf,C.bJG,C.b5i,C.crg,C.bAR,C.cc_,C.cbY,C.cbZ,C.cbX,C.aqg,C.cbW,C.bKz,C.nV,C.aCb,C.jb,C.ni,C.a5V,C.yB,C.l1,C.o6,C.lO,C.yD,C.nm,C.a62,C.aoF,C.aZ_,C.e2g,C.kZ,C.Dx,C.ek,C.iQ,C.Do,C.wP,C.ey,C.lr,C.hT,C.ju,C.a63,C.acY,C.aZ0,C.b_F,C.a0Z])
u(B.kA,[C.cz7,C.bUH,C.fea,C.cAD,C.cA_,C.fjH,C.dQi,C.dQh,C.e2U,C.e2T,C.fl5,C.f_x,C.f_y,C.c7V,C.c7W,C.c7X,C.e7p,C.eDt,C.eCR,C.eCQ,C.eDU,C.eDr,C.eDk,C.eDD,C.eEj,C.f6j,C.eKa,C.eK9,C.eKD,C.e2j,C.foB,C.dM1,C.fuO,C.flr,C.c9p,C.c9n,C.c9s,C.flW,C.flX,C.flY,C.flZ,C.c99,C.c9a,C.dz9,C.c96,C.flV,C.eRl,C.dKd,C.c9_,C.e2_,C.fjw,C.eg1,C.egq,C.egn,C.egm,C.egx,C.egw,C.ei1,C.ei0,C.egg,C.egf,C.ecQ,C.ee_,C.egZ,C.eij,C.eii,C.edN,C.eeY,C.ecx,C.cVO,C.eje,C.ejf,C.eja,C.ejb,C.ejc,C.ejd,C.eji,C.c9x,C.eiO,C.eiZ,C.cc6])
u(B.i3,[C.cz8,C.cz9,C.bKA,C.fbY,C.bUG,C.bUJ,C.frk,C.eSj,C.eSa,C.eSq,C.eZs,C.eZt,C.feb,C.fe9,C.fqS,C.fbE,C.frG,C.cAt,C.cAy,C.cAA,C.cAw,C.cAB,C.cAu,C.cAC,C.cAp,C.cAm,C.cAl,C.cAs,C.czV,C.czT,C.fiI,C.fiJ,C.f2O,C.fjI,C.fjO,C.f1R,C.c4e,C.fiG,C.fiH,C.fdx,C.fdy,C.fjN,C.fjJ,C.fjL,C.fjM,C.fjK,C.fv5,C.fdB,C.fdC,C.fdF,C.fdG,C.fdJ,C.fdK,C.fwk,C.f_Y,C.fwv,C.e6b,C.e6c,C.e6d,C.e5U,C.e65,C.e66,C.e68,C.c7U,C.c7S,C.c7T,C.fjn,C.fjp,C.fjo,C.f_z,C.f_A,C.fwA,C.e7u,C.e7v,C.e7m,C.e7n,C.e7q,C.e7r,C.fwQ,C.eEk,C.eDK,C.eDu,C.eDH,C.eCM,C.eCN,C.eCO,C.eCS,C.eCT,C.eE9,C.eEg,C.eEi,C.eDT,C.eDV,C.eDZ,C.eE_,C.eE0,C.eE4,C.eDW,C.eDX,C.eD3,C.eD4,C.eD5,C.eD6,C.eD7,C.eD8,C.eD9,C.eDa,C.eDb,C.eCp,C.eCq,C.eCr,C.eCs,C.eCu,C.eCv,C.eCY,C.eCZ,C.eD_,C.eD0,C.eD1,C.eCz,C.eCA,C.eCB,C.eCC,C.eDj,C.eDC,C.fgL,C.fgK,C.c9g,C.f6i,C.fox,C.fop,C.fot,C.fmp,C.fmq,C.fmr,C.fgS,C.fgR,C.fgQ,C.fgO,C.f_u,C.f_v,C.f_w,C.fx1,C.eKc,C.eKd,C.eK6,C.eK0,C.eKw,C.eKx,C.eKz,C.eKA,C.eKv,C.fx0,C.eJS,C.f5y,C.e2i,C.foz,C.foA,C.foC,C.fov,C.fow,C.fwc,C.dbz,C.dbF,C.e2h,C.eX1,C.eX3,C.eX2,C.eX0,C.fhW,C.fhY,C.eZ0,C.fo0,C.fo1,C.fo2,C.fod,C.foi,C.foj,C.fok,C.fol,C.fom,C.fon,C.foo,C.fo3,C.fo4,C.fo5,C.fo6,C.fo7,C.fo8,C.fo9,C.foa,C.fob,C.foc,C.foe,C.fof,C.fog,C.foh,C.ffM,C.f5k,C.f5j,C.foI,C.dM2,C.dM0,C.eJ1,C.c3Q,C.c3S,C.fuQ,C.d19,C.d1b,C.fuP,C.fuN,C.fx_,C.fln,C.d0K,C.fdN,C.fdO,C.c9e,C.c9f,C.c9d,C.c93,C.c94,C.c90,C.c91,C.c92,C.c9v,C.c9q,C.c9l,C.c9m,C.c9o,C.c9r,C.c9t,C.fm_,C.c98,C.c9b,C.c9c,C.c9i,C.c9j,C.foP,C.fnV,C.c97,C.c95,C.flU,C.f7E,C.c8Z,C.eGM,C.fas,C.eiF,C.ef4,C.ef5,C.egF,C.egt,C.egu,C.ees,C.eiq,C.eir,C.eis,C.edR,C.eg8,C.ega,C.efL,C.efI,C.ef0,C.ef1,C.efS,C.edT,C.eg3,C.eg4,C.eg2,C.eg6,C.eg5,C.ego,C.egp,C.egr,C.egk,C.eeb,C.ee8,C.egy,C.ee0,C.eip,C.ecz,C.ee3,C.ee2,C.edh,C.edm,C.edk,C.edi,C.eix,C.eiy,C.eiz,C.eiw,C.ei3,C.ei2,C.ehX,C.ehZ,C.ehP,C.ein,C.eil,C.ecH,C.ecD,C.eeZ,C.edq,C.ecS,C.ecR,C.edd,C.ede,C.eeq,C.eds,C.edw,C.egh,C.ehQ,C.ehR,C.ehS,C.ehT,C.edV,C.edW,C.edX,C.efr,C.eem,C.eee,C.eel,C.efB,C.efC,C.eho,C.ehq,C.ehK,C.ehM,C.ehr,C.ehs,C.edo,C.ef3,C.ef2,C.eid,C.edM,C.edE,C.edF,C.edI,C.edJ,C.efG,C.eeK,C.eeL,C.eeM,C.eeN,C.eeO,C.eeP,C.eeQ,C.eeR,C.eeS,C.eeT,C.eeU,C.egC,C.cVL,C.cVM,C.ejk,C.foF,C.foO,C.foE,C.foK,C.eZr,C.fx3,C.fx4,C.fx5,C.eiN,C.eiW,C.ecs,C.ecn,C.eco,C.fiY,C.fiX,C.fiZ,C.fj3,C.fj_,C.fj0,C.eTN,C.eTO,C.e2R,C.cc5])
u(B.jm,[C.cza,C.eSf,C.eSk,C.eSl,C.eSg,C.eSh,C.eSi,C.eS8,C.eS9,C.eSb,C.eSc,C.eSp,C.eSo,C.eSe,C.eSd,C.eSm,C.eSn,C.eSs,C.eSt,C.eSr,C.cAv,C.cAz,C.cAx,C.cAn,C.cAo,C.cAq,C.cAj,C.cAk,C.cAr,C.cAi,C.cAh,C.cAg,C.czK,C.czJ,C.czM,C.czU,C.czN,C.czL,C.czP,C.czQ,C.czR,C.czO,C.czS,C.czW,C.czX,C.czY,C.czZ,C.fdv,C.fdw,C.fdt,C.fdu,C.dYU,C.dYS,C.dYT,C.dYV,C.dYW,C.dQg,C.fdz,C.fdA,C.fdD,C.fdE,C.fdH,C.fdI,C.e2S,C.flu,C.flt,C.e6a,C.e69,C.e5O,C.e5K,C.e5V,C.e5W,C.e5X,C.e5Q,C.e5R,C.e5S,C.e5T,C.e5P,C.e5M,C.e5N,C.e62,C.e63,C.e61,C.e64,C.e60,C.e6_,C.e5Z,C.e67,C.e5Y,C.e5L,C.e7t,C.e7h,C.e7i,C.e7o,C.e7j,C.e7l,C.e7k,C.e7s,C.eDc,C.eDA,C.eCW,C.eCX,C.eCU,C.eCV,C.eDG,C.eDF,C.eDE,C.eDJ,C.eDI,C.eCL,C.eCP,C.eCK,C.eCJ,C.eCG,C.eCI,C.eCH,C.eEh,C.eEa,C.eE8,C.eEb,C.eE7,C.eEc,C.eE6,C.eEd,C.eEe,C.eEf,C.eE5,C.eDS,C.eDN,C.eDY,C.eDR,C.eE1,C.eDQ,C.eE2,C.eDP,C.eE3,C.eDO,C.eDx,C.eDw,C.eDy,C.eDv,C.eDz,C.eDp,C.eDo,C.eDq,C.eDn,C.eDm,C.eDl,C.eCt,C.eCo,C.eCD,C.eCy,C.eCE,C.eCx,C.eCF,C.eCw,C.eDs,C.eDg,C.eDf,C.eDh,C.eDe,C.eDi,C.eDd,C.eDB,C.eDM,C.eDL,C.eD2,C.fos,C.fou,C.foy,C.fgP,C.fjg,C.fje,C.fjf,C.eKe,C.eKf,C.eKb,C.eK5,C.eK4,C.eK7,C.eK8,C.eJV,C.eJW,C.eJY,C.eJZ,C.eK_,C.eJX,C.eK1,C.eKs,C.eKt,C.eKr,C.eKu,C.eKq,C.eKp,C.eKo,C.eKy,C.eKn,C.eKm,C.eKl,C.eKB,C.eKk,C.eKC,C.eKj,C.eKi,C.eK2,C.eK3,C.eKh,C.eKg,C.eJO,C.eJP,C.eJQ,C.eJR,C.eJN,C.eJT,C.eJU,C.dby,C.dbA,C.dbD,C.dbE,C.dbC,C.dbB,C.fhX,C.ffN,C.c3R,C.c3T,C.d12,C.d17,C.d18,C.d16,C.d15,C.d1a,C.d14,C.d13,C.d1c,C.fuM,C.d7y,C.d7z,C.d7A,C.fdL,C.fdM,C.c9w,C.ect,C.ecu,C.ecv,C.ecw,C.f7C,C.f7D,C.dKf,C.dKe,C.cZi,C.cZh,C.eiH,C.eiG,C.ef6,C.ehN,C.eiD,C.egD,C.eit,C.eiu,C.eiE,C.efM,C.edP,C.edQ,C.eg9,C.efK,C.efH,C.efJ,C.efN,C.efO,C.efP,C.efQ,C.efR,C.efT,C.edU,C.efW,C.efX,C.efY,C.efZ,C.eg_,C.eg0,C.efV,C.eg7,C.egl,C.egj,C.egs,C.efU,C.ee9,C.eea,C.eec,C.egv,C.egz,C.ecO,C.ee7,C.ee5,C.egH,C.ee1,C.egG,C.edS,C.eet,C.eio,C.ehO,C.ecP,C.ecM,C.ecC,C.ecy,C.ecA,C.ee4,C.edg,C.edl,C.edj,C.edf,C.egi,C.eiA,C.ei_,C.ehV,C.ehW,C.ehY,C.eeX,C.eeW,C.eim,C.ecF,C.ecG,C.ecI,C.ecJ,C.ecN,C.ecE,C.egE,C.eiv,C.ef_,C.edp,C.ecB,C.eer,C.ecK,C.ecT,C.ecU,C.ecV,C.ed5,C.ed8,C.ed9,C.eda,C.edb,C.edc,C.ecW,C.ecX,C.ecY,C.ecZ,C.ed_,C.ed0,C.ed1,C.ed2,C.ed3,C.ed4,C.ed6,C.ed7,C.eep,C.eeo,C.een,C.ecL,C.edt,C.edr,C.edu,C.edv,C.ee6,C.egd,C.ege,C.egb,C.egc,C.ehU,C.edZ,C.edY,C.efq,C.efp,C.efs,C.efo,C.eft,C.efn,C.efu,C.efm,C.efv,C.efl,C.efw,C.efk,C.efx,C.efj,C.efy,C.efi,C.efb,C.efc,C.efd,C.efa,C.efe,C.ef9,C.eff,C.ef8,C.efg,C.ef7,C.efh,C.eej,C.eek,C.eed,C.eef,C.eeg,C.eeh,C.eei,C.eiB,C.eiC,C.efA,C.efz,C.efD,C.eh_,C.eh0,C.eh1,C.ehc,C.ehn,C.ehy,C.ehF,C.ehG,C.ehH,C.ehI,C.ehJ,C.eh2,C.eh3,C.eh4,C.eh5,C.eh6,C.eh7,C.eh8,C.eh9,C.eha,C.ehb,C.ehd,C.ehe,C.ehf,C.ehg,C.ehh,C.ehi,C.ehj,C.ehk,C.ehl,C.egQ,C.ehm,C.egY,C.egX,C.ehp,C.egW,C.egM,C.ehL,C.egV,C.egL,C.egJ,C.egU,C.egK,C.egI,C.eht,C.egT,C.ehu,C.ehv,C.ehw,C.ehx,C.egS,C.ehz,C.ehA,C.ehB,C.egR,C.ehC,C.egP,C.ehD,C.egO,C.ehE,C.egN,C.edn,C.ei6,C.ei5,C.ei7,C.ei4,C.eew,C.eev,C.eex,C.eeu,C.eih,C.eic,C.eig,C.ei8,C.ei9,C.eia,C.eib,C.eie,C.eif,C.eik,C.edO,C.edB,C.edC,C.edD,C.edA,C.edH,C.edG,C.edz,C.edy,C.edK,C.edx,C.edL,C.efF,C.efE,C.eeJ,C.eeI,C.eeH,C.eeG,C.eeF,C.eeE,C.eeD,C.eeC,C.eez,C.eeB,C.eeA,C.eey,C.eeV,C.egA,C.egB,C.cVN,C.cW9,C.cWa,C.cVH,C.cVG,C.cVK,C.cVI,C.cVJ,C.ejh,C.ej7,C.ejg,C.ej8,C.ej9,C.ej3,C.ej4,C.ej5,C.ej6,C.ejj,C.foL,C.foM,C.foN,C.eiK,C.eiL,C.eiM,C.eiP,C.eiQ,C.eiT,C.eiU,C.eiS,C.eiV,C.eiR,C.eiJ,C.eiI,C.eiX,C.eiY,C.ej_,C.ej0,C.ecr,C.ecq,C.ecm,C.ecp,C.ej2,C.ej1,C.fj2,C.fj1,C.e2P,C.e2Q])
t(C.aOo,B.G)
u(B.mi,[C.a1V,C.auv,C.atc,C.wN,C.wQ,C.kF,C.rF,C.Ar,C.qT,C.vj,C.ape,C.Hk,C.aoE,C.u9,C.mb,C.hn,C.a6E])
u(C.bJG,[C.cri,C.bJH])
u(C.cc_,[C.cc3,C.aqf])
t(C.cc2,C.cbY)
t(C.cc1,C.cbX)
t(C.cc4,C.cc1)
t(C.cc0,C.cbZ)
t(C.cbV,C.cbW)
t(C.b6R,B.om)
t(C.a6r,B.wA)
t(C.aSG,B.dC)
t(C.axZ,B.arA)
u(B.af,[C.ZY,C.WK,C.WI,C.anS,C.TY,C.U1,C.Z0,C.Zw,C.Zv,C.aBc,C.XT,C.LU,C.Xr,C.XM,C.alU,C.aFZ,C.Tc,C.awR,C.a5L,C.Mk,C.awe,C.Ij,C.YD,C.Ub,C.Uc,C.aBy,C.aoJ,C.a5M])
u(B.ag,[C.aGh,C.av2,C.auZ,C.aB0,C.aBj,C.aBn,C.aCG,C.aEB,C.aEA,C.aJ7,C.ayF,C.aIB,C.ax5,C.bcG,C.aIn,C.aKq,C.aIA,C.baA,C.aJ5,C.aJk,C.aHi,C.b9m,C.aJl,C.aBB,C.bh1,C.aBz,C.aBC,C.bgK])
u(B.at,[C.av0,C.ab7,C.aax,C.bfP,C.aba,C.acO,C.aYC,C.boZ,C.aYW,C.bik,C.bnz,C.aWR,C.aYZ,C.abd,C.abv,C.aYX,C.Hj,C.aWU,C.b9B,C.NY,C.Iq,C.bed,C.bec,C.brm])
u(B.FU,[C.b93,C.bqn,C.aGB,C.bbJ,C.bnX])
u(B.n8,[C.b92,C.b5A,C.bnU,C.b8A,C.bc6,C.bej,C.bbc,C.bc3,C.bbL,C.bkv,C.b6J,C.b6m,C.brj,C.bom,C.bnv,C.bb5,C.aYU,C.bmv,C.bns])
t(C.bgH,C.aJ7)
t(C.bg3,C.aIB)
t(C.bfR,C.aIn)
t(C.bqQ,C.aKq)
t(C.bg0,C.aIA)
t(C.bgF,C.aJ5)
t(C.btD,C.aJk)
t(C.aBA,C.btD)
t(C.b9n,C.aHi)
t(C.aBD,C.aJl)
t(C.bra,B.iJ)
t(C.a6D,B.kf)
t(C.cc7,C.b_F)
t(C.afT,C.a0Z)
u(B.VL,[C.aOe,C.aPI])
t(C.au7,C.aOe)
w(C.aJ7,B.c6)
w(C.aIB,B.c6)
w(C.aIn,B.c6)
w(C.aIA,B.c6)
w(C.aJ5,B.c6)
w(C.aKq,B.c6)
w(C.aHi,B.eJ)
w(C.aJk,B.c6)
v(C.btD,B.en)
w(C.aJl,B.c6)})()
B.kh(b.typeUniverse,JSON.parse('{"aOY":{"hw":["aOY"]},"nv":{"aOY":[],"hw":["aOY"]},"aOo":{"G":["Q6"],"G.E":"Q6"},"b6R":{"om":[]},"a6r":{"wA":[],"nP":[]},"aSG":{"dC":[],"cs":[],"r":[]},"axZ":{"aR":[],"d2":["aR"],"aP":[],"cq":[]},"ZY":{"af":[],"r":[]},"aGh":{"ag":["ZY"]},"WK":{"af":[],"r":[]},"WI":{"af":[],"r":[]},"av2":{"ag":["WK"]},"auZ":{"ag":["WI"]},"av0":{"at":[],"r":[]},"anS":{"af":[],"r":[]},"aB0":{"ag":["anS"]},"ab7":{"at":[],"r":[]},"aax":{"at":[],"r":[]},"aba":{"at":[],"r":[]},"acO":{"at":[],"r":[]},"bfP":{"at":[],"r":[]},"TY":{"af":[],"r":[]},"aBj":{"ag":["TY"]},"aYC":{"at":[],"r":[]},"b93":{"aA":[]},"b92":{"aA":[]},"bqn":{"aA":[]},"b5A":{"aA":[]},"bnU":{"aA":[]},"U1":{"af":[],"r":[]},"aBn":{"ag":["U1"]},"b8A":{"aA":[]},"Z0":{"af":[],"r":[]},"aCG":{"ag":["Z0"]},"bc6":{"aA":[]},"Zw":{"af":[],"r":[]},"Zv":{"af":[],"r":[]},"aBc":{"af":[],"r":[]},"XT":{"af":[],"r":[]},"aEB":{"ag":["Zw"]},"aEA":{"ag":["Zv"]},"bgH":{"ag":["aBc"]},"bej":{"aA":[]},"ayF":{"ag":["XT"]},"boZ":{"at":[],"r":[]},"aYW":{"at":[],"r":[]},"bik":{"at":[],"r":[]},"LU":{"af":[],"r":[]},"Xr":{"af":[],"r":[]},"bg3":{"ag":["LU"]},"bnz":{"at":[],"r":[]},"bbc":{"aA":[]},"aWR":{"at":[],"r":[]},"ax5":{"ag":["Xr"]},"XM":{"af":[],"r":[]},"bcG":{"ag":["XM"]},"bc3":{"aA":[]},"bbL":{"aA":[]},"bkv":{"aA":[]},"b6J":{"aA":[]},"b6m":{"aA":[]},"brj":{"aA":[]},"bom":{"aA":[]},"bnv":{"aA":[]},"bb5":{"aA":[]},"alU":{"af":[],"r":[]},"aYZ":{"at":[],"r":[]},"bfR":{"ag":["alU"]},"abd":{"at":[],"r":[]},"abv":{"at":[],"r":[]},"aFZ":{"af":[],"r":[]},"Tc":{"af":[],"r":[]},"Hj":{"at":[],"r":[]},"awR":{"af":[],"r":[]},"a5L":{"af":[],"r":[]},"aYX":{"at":[],"r":[]},"aYU":{"aA":[]},"bqQ":{"ag":["aFZ"]},"aGB":{"aA":[]},"bg0":{"ag":["Tc"]},"baA":{"ag":["awR"]},"bgF":{"ag":["a5L"]},"aWU":{"at":[],"r":[]},"bbJ":{"aA":[]},"bmv":{"aA":[]},"bns":{"aA":[]},"awe":{"af":[],"r":[]},"Ij":{"af":[],"r":[]},"YD":{"af":[],"r":[]},"Iq":{"at":[],"r":[]},"Mk":{"af":[],"r":[]},"aBA":{"ag":["Mk"],"en":[]},"b9n":{"ag":["awe"]},"b9B":{"at":[],"r":[]},"b9m":{"ag":["Ij"]},"NY":{"at":[],"r":[]},"aBD":{"ag":["YD"]},"bnX":{"aA":[]},"bed":{"at":[],"r":[]},"bec":{"at":[],"r":[]},"Ub":{"af":[],"r":[]},"Uc":{"af":[],"r":[]},"aBy":{"af":[],"r":[]},"aoJ":{"af":[],"r":[]},"aBB":{"ag":["Ub"]},"bh1":{"ag":["Uc"]},"aBz":{"ag":["aBy"]},"bra":{"iJ":[]},"aBC":{"ag":["aoJ"]},"brm":{"at":[],"r":[]},"a5M":{"af":[],"r":[]},"bgK":{"ag":["a5M"]},"a6D":{"kf":["fn<eE>"],"k2":["fn<eE>"]},"afT":{"a0Z":[]},"aOe":{"iU":[],"f8":[]},"au7":{"iU":[],"f8":[]},"aPI":{"iU":[],"f8":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.az
return{bu:w("Ka"),U:w("uR<px>"),bz:w("x"),M:w("f9<n>"),bo:w("jp"),g7:w("KG"),gc:w("aw<im?>"),bq:w("aw<~>"),cc:w("a2Z"),fS:w("CQ"),an:w("ajv"),bm:w("P<Q6>"),X:w("P<ag8>"),f3:w("P<aOY>"),aK:w("P<mP>"),V:w("P<ab>"),O:w("P<x>"),fA:w("P<lj>"),d5:w("P<aw<br<I,+icon3d,picture(n?,n?)>>>"),bH:w("P<aw<dz>>"),fG:w("P<aw<~>>"),aF:w("P<mV>"),cd:w("P<ak<jb>>"),ez:w("P<a1<n,aB>>"),d:w("P<a1<n,@>>"),B:w("P<m7>"),h:w("P<jb>"),gE:w("P<yB>"),k:w("P<nV>"),g:w("P<lr>"),D:w("P<hT>"),u:w("P<ey>"),m:w("P<u9>"),i:w("P<hn>"),aC:w("P<a62>"),o:w("P<yD>"),e3:w("P<aB>"),dN:w("P<u>"),v:w("P<hz>"),cR:w("P<iH>"),J:w("P<j3>"),gx:w("P<oF<n>>"),f2:w("P<+(a0,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(O,O)>"),ek:w("P<+(I,n)>"),n:w("P<+(I,I)>"),r:w("P<cL>"),s:w("P<n>"),aS:w("P<iJ>"),p:w("P<r>"),eR:w("P<f8>"),fT:w("P<b5i>"),bx:w("P<aCb>"),gz:w("P<acY>"),x:w("P<O>"),t:w("P<I>"),dS:w("P<aA?>"),bA:w("P<u?>"),Z:w("P<I?>"),cA:w("P<cg>"),A:w("co<ag<af>>"),gL:w("ak<nV>"),R:w("ak<hT>"),j:w("ak<@>"),bW:w("ak<I>"),e:w("br<I,+icon3d,picture(n?,n?)>"),P:w("a1<n,@>"),f:w("a1<@,@>"),gI:w("a1<I,+icon3d,picture(n?,n?)>"),bR:w("J<hn,r>"),eC:w("J<nm,n>"),cT:w("J<ju,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<I,pb>"),gh:w("J<mb,jd<mb>>"),w:w("iE"),ei:w("im"),g2:w("qJ"),fB:w("Do"),b6:w("yB"),gX:w("a5V"),dt:w("l1"),ea:w("nV"),bt:w("lr"),I:w("hT"),F:w("ey"),fO:w("mb"),ff:w("u9"),fP:w("hn"),Q:w("vj"),dO:w("aoF"),a:w("cp"),C:w("aB"),dw:w("aqg"),di:w("a6E"),Y:w("eE"),fz:w("+(n,n)"),dL:w("+(I,I)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DR"),dB:w("dy<u>"),bJ:w("dy<n>"),_:w("dW<n>"),N:w("n"),fw:w("px"),bO:w("ap"),K:w("bl<u>"),b:w("bl<O>"),E:w("dz"),W:w("cx<n>"),ac:w("cx<I>"),ex:w("k5<lr>"),cI:w("k5<n>"),cl:w("k5<O>"),b4:w("a4<kZ>"),a8:w("a4<lO>"),fR:w("a4<+(n,n)>"),co:w("e3<u>"),l:w("r"),b2:w("bP<~>"),ev:w("py<dR>"),dT:w("be<~>"),cQ:w("axZ"),q:w("mG"),y:w("S"),gR:w("O"),z:w("@"),S:w("I"),at:w("b8?"),gw:w("ak<a1<n,@>>?"),aT:w("ak<hT>?"),c:w("ak<@>?"),aP:w("im?"),af:w("hT?"),go:w("aZ0?"),a6:w("a63?"),cK:w("aB?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bE2=new B.ad(A.en,18,A.c,null,null,null)
D.aOg=new B.bI(A.ax,null,null,D.bE2,null)
D.aOp=new B.d6(0,-0.15)
D.aOr=new B.d6(0.62,0)
D.aOu=new B.d6(-0.35,-0.45)
D.aOE=new B.d6(0.9,-0.85)
D.aGs=new B.b1(30,30)
D.aPV=new B.bv(D.aGs,D.aGs,A.h1,A.h1)
D.aQ8=new B.ay(A.b3,1,A.r,-1)
D.b71=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aQk=new B.ay(D.b71,1,A.r,-1)
D.aQw=new B.ay(A.aB,1.5,A.r,-1)
D.aQB=new B.ay(A.b3,1.6,A.r,-1)
D.aQR=new B.ay(A.aB,1.4,A.r,-1)
D.aSc=new B.o(null,null,null,null,null,K.F7,A.a6)
D.bI2=new B.a3(A.a4,A.a7,A.w,G.a_D,null,null)
D.aSk=new B.o(null,null,null,null,null,D.bI2,A.a6)
D.a7h=new B.o(A.aF,null,null,A.pQ,null,null,A.n)
D.b1N=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b7_=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cEq=w([D.b1N,D.b7_],x.O)
D.dWz=new B.bR(A.A,0.5,A.w,null,0,D.cEq,null,null)
D.aSC=new B.o(null,null,null,null,null,D.dWz,A.a6)
D.U0=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aR4=new B.c1(N.vM,A.X,A.X,A.X)
D.aSE=new B.o(D.U0,null,D.aR4,null,null,null,A.n)
D.bJO=new B.a3(A.a4,A.a7,A.w,A.NO,null,null)
D.aSK=new B.o(null,null,null,null,null,D.bJO,A.a6)
D.a8B=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aSM=new B.o(D.a8B,null,null,A.r9,null,null,A.n)
D.aSR=new B.o(A.jC,null,null,null,null,null,A.a6)
D.aRa=new B.c1(A.yS,A.X,A.X,A.X)
D.aSU=new B.o(Y.a9v,null,D.aRa,A.mn,null,null,A.n)
D.CB=new B.o(A.e4,null,null,null,null,null,A.a6)
D.aT_=new B.o(null,null,null,null,null,E.uR,A.a6)
D.cIZ=w([E.aaa,A.bX],x.O)
D.bJp=new B.a3(A.aX,A.b1,A.w,D.cIZ,null,null)
D.aT3=new B.o(null,null,null,A.mn,null,D.bJp,A.n)
D.cSS=w([A.bk,A.e4,A.jA],x.O)
D.YR=new B.a3(A.ax,A.aC,A.w,D.cSS,null,null)
D.aTf=new B.o(null,null,null,null,null,D.YR,A.n)
D.aTg=new B.o(D.a8B,null,null,A.ko,null,null,A.n)
D.c9L=w([A.dx,A.bk],x.O)
D.bJg=new B.a3(A.ax,A.aC,A.w,D.c9L,null,null)
D.aTk=new B.o(null,null,null,null,null,D.bJg,A.n)
D.aTu=new B.o(null,null,null,null,null,G.ta,A.a6)
D.aTM=new B.o(A.aab,null,null,null,null,null,A.a6)
D.b2r=new B.x(0.5647058823529412,0,0,0,A.t)
D.a7q=new B.ab(0,A.G,D.b2r,A.PA,28)
D.aVJ=new B.aST()
D.aWs=new C.b6R()
D.a7W=new B.cw(A.A,null,null,A.YG,null)
D.aYQ=new B.fd(null,null,null,null,null,E.mx,null,null,null,null)
D.aWZ=new B.cw(A.A,null,null,D.aYQ,null)
D.btX=new B.ad(A.dQ,28,A.c,null,null,null)
D.aXp=new B.cw(A.A,null,null,D.btX,null)
D.aYN=new B.fd(2,null,null,null,null,A.bT,null,null,null,null)
D.aXJ=new B.cw(A.A,null,null,D.aYN,null)
D.buh=new B.ad(K.Lv,40,A.bO,null,null,null)
D.aXK=new B.cw(A.A,null,null,D.buh,null)
D.aZA=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aZM=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b_7=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b_b=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b_D=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_T=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_U=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.IO=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
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
D.TN=new B.x(0.8509803921568627,0,0,0,A.t)
D.b3R=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b3X=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9K=new B.x(0.6,0,0,0,A.t)
D.a9M=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b5f=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rr=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b5C=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b6_=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b6i=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aam=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.U6=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zl=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Jc=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iY=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aaI=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Uc=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b95=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b9s=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b9G=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Us=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.baD=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wg=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.baX=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bbd=new B.hv(A.b9,!0,null,null)
D.eNh=new B.F(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fan=new B.w("Bio link",null,D.eNh,null,null,null,null,null,null,null,null,null)
D.aXE=new B.cw(A.A,null,null,D.fan,null)
D.bbt=new B.hv(A.Tl,!0,D.aXE,null)
D.Jv=new C.a1V(0,"none")
D.abE=new C.a1V(1,"deflate")
D.abF=new C.a1V(2,"bzip2")
D.bc9=new B.k9(0.165,0.84,0.44,1)
D.cJh=w([A.cj,A.dI,A.aB],x.O)
D.bIw=new B.a3(A.ax,A.aC,A.w,D.cJh,null,null)
D.aSh=new B.o(null,null,null,null,null,D.bIw,A.n)
D.bCV=new B.ad(A.eO,null,A.af,null,null,null)
D.aYd=new B.cw(A.A,null,null,D.bCV,null)
D.bcH=new B.kC(D.aSh,A.bb,D.aYd,null)
D.b9i=new B.x(0.058823529411764705,1,1,1,A.t)
D.cMj=w([A.bG,A.q1,A.q1,D.b9i],x.O)
D.cqJ=w([0,0.32,0.7,1],x.x)
D.bJ5=new B.a3(A.ax,A.aC,A.w,D.cMj,D.cqJ,null)
D.aS5=new B.o(null,null,null,null,null,D.bJ5,A.n)
D.bcN=new B.kC(D.aS5,A.bb,null,null)
D.bdC=new B.m_(1,1,null,null,null,A.bj,null)
D.bdF=new B.m_(1,null,null,null,null,D.Uc,null)
D.be8=new B.b8(125e4)
D.bee=new B.b8(17e4)
D.beo=new B.b8(35964e8)
D.beu=new B.b8(55e4)
D.bey=new B.b8(68e4)
D.beZ=new B.i4(0,0,0,5)
D.bfg=new B.N(0,16,16,0)
D.bfj=new B.N(0,18,0,8)
D.bfq=new B.N(0,36,0,36)
D.bfx=new B.N(0,54,0,0)
D.bfE=new B.N(10,0,10,3)
D.bfP=new B.i4(10,16,10,10)
D.bfY=new B.N(10,6,10,0)
D.bg0=new B.N(10,6,4,6)
D.bg3=new B.N(10,8,10,6)
D.acx=new B.N(11,8,11,11)
D.bg8=new B.N(12,0,12,10)
D.bg9=new B.N(12,0,12,24)
D.bgl=new B.N(12,12,12,4)
D.bgo=new B.N(12,12,8,12)
D.bgD=new B.N(12,8,8,12)
D.bh_=new B.N(14,14,14,0)
D.bh4=new B.N(14,14,14,90)
D.bhn=new B.N(16,10,16,16)
D.bho=new B.N(16,10,16,20)
D.adj=new B.N(16,6,16,28)
D.bhY=new B.N(18,0,18,10)
D.bi_=new B.N(18,0,18,30)
D.bi1=new B.N(18,10,18,12)
D.bi2=new B.N(18,10,18,14)
D.bij=new B.N(18,16,14,18)
D.bio=new B.N(18,18,18,12)
D.biu=new B.N(18,26,18,12)
D.biz=new B.N(18,34,18,34)
D.biA=new B.N(18,4,18,14)
D.biG=new B.N(18,8,18,24)
D.biY=new B.N(20,16,14,4)
D.bj2=new B.N(20,18,12,4)
D.bj7=new B.N(20,20,12,20)
D.bja=new B.N(20,22,20,20)
D.bjf=new B.N(20,6,20,6)
D.bjp=new B.N(22,18,22,18)
D.bjw=new B.N(22,24,22,0)
D.bjz=new B.N(22,24,22,4)
D.bjH=new B.N(22,60,22,22)
D.bjN=new B.N(24,24,24,22)
D.bjX=new B.N(26,10,60,10)
D.bk2=new B.N(28,44,28,44)
D.bkj=new B.N(32,44,32,44)
D.bkr=new B.N(38,30,38,20)
D.bkw=new B.N(4,0,0,6)
D.bkI=new B.i4(4,4,4,4)
D.bl7=new B.i4(6,5,6,5)
D.blb=new B.N(6,6,8,6)
D.blm=new B.N(8,14,8,14)
D.bln=new B.N(8,22,8,22)
D.blv=new B.N(8,6,12,6)
D.blE=new B.N(8,8,8,4)
D.ae9=new B.N(9,9,9,6)
D.blO=new B.i4(2.5,2.5,2.5,2.5)
D.blP=new B.N(10.5,0,10.5,0)
D.blQ=new B.N(7,1.5,7,1.5)
D.cBI=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bm4=new B.Aa(null,null,D.cBI,A.z4)
D.cz0=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bm5=new B.Aa(null,null,D.cz0,A.z4)
D.aKZ=new B.F(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9M=new B.w("WORD DESIGN",null,D.aKZ,null,null,null,null,null,null,null,null,null)
D.bmw=new B.bH(1,A.bo,D.f9M,null)
D.f9r=new B.w("Slides database",null,A7.BV,null,null,null,null,null,null,null,null,null)
D.f6S=new B.w("Admin only \xb7 keep as many as you like",null,V.aKw,null,null,null,null,null,null,null,null,null)
D.d_0=w([D.f9r,A.bA,D.f6S],x.p)
D.bbS=new B.fm(A.ak,A.e,A.j,A.F,null,A.p,null,0,D.d_0,null)
D.bmz=new B.bH(1,A.bo,D.bbS,null)
D.f1O=new B.w("NGMY logo",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bmC=new B.bH(1,A.bo,D.f1O,null)
D.eLa=new B.F(!0,A.af,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbx=new B.w("TALK TO THE EDITOR",null,D.eLa,null,null,null,null,null,null,null,null,null)
D.bmS=new B.bH(1,A.bo,D.fbx,null)
D.eX5=new B.w("Tell the AI what to change",null,A7.BV,null,null,null,null,null,null,null,null,null)
D.bn9=new B.bH(1,A.bo,D.eX5,null)
D.bnO=new B.CH(!0,"video/mp4")
D.eJs=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVm=new B.w("Move presentations between devices",null,D.eJs,null,null,null,!1,null,null,1,null,null)
D.bnS=new B.pO(A.eb,A.a4,A.h,D.eVm,null)
D.eWo=new B.w("Edit in Slides",null,A.jU,null,null,null,null,null,null,null,null,null)
D.bnT=new B.pO(A.eb,A.A,A.h,D.eWo,null)
D.bo7=new B.dm(1,A.cl,D.bnT,null)
D.X7=new B.a0(60988,"MaterialIcons",!1)
D.bpw=new B.a0(61352,"MaterialIcons",!1)
D.afC=new B.a0(61531,"MaterialIcons",!1)
D.bqI=new B.a0(63062,"MaterialIcons",!1)
D.bqP=new B.a0(63109,"MaterialIcons",!1)
D.br0=new B.a0(63206,"MaterialIcons",!1)
D.agi=new B.a0(63238,"MaterialIcons",!1)
D.XG=new B.a0(63365,"MaterialIcons",!1)
D.XH=new B.a0(63367,"MaterialIcons",!1)
D.XI=new B.a0(63368,"MaterialIcons",!1)
D.ags=new B.a0(63384,"MaterialIcons",!1)
D.brB=new B.a0(63525,"MaterialIcons",!1)
D.brE=new B.a0(63568,"MaterialIcons",!1)
D.brX=new B.a0(983072,"MaterialIcons",!1)
D.bsl=new B.a0(983271,"MaterialIcons",!0)
D.bta=new B.a0(983924,"MaterialIcons",!1)
D.ahA=new B.a0(983965,"MaterialIcons",!1)
D.ahB=new B.a0(983966,"MaterialIcons",!1)
D.btk=new B.a0(984592,"MaterialIcons",!1)
D.btA=new B.ad(A.rY,16,A.az,null,null,null)
D.btH=new B.ad(A.m5,null,A.c,null,null,null)
D.ahL=new B.ad(A.pd,18,A.c,null,null,null)
D.btY=new B.ad(A.A7,18,O.kV,null,null,null)
D.buC=new B.ad(A.j4,11,null,null,null,null)
D.buM=new B.ad(A.Xp,null,A.el,null,null,null)
D.bvk=new B.ad(A.qn,18,A.az,null,null,null)
D.bvq=new B.ad(A1.Al,14,null,null,null,null)
D.bvr=new B.ad(A.e7,28,A.cD,null,null,null)
D.bvD=new B.ad(A.pe,20,A.c,null,null,null)
D.bvK=new B.ad(A.xa,null,null,null,null,null)
D.bvQ=new B.ad(A.jl,18,A.hm,null,null,null)
D.bvV=new B.ad(A.l_,null,null,null,null,null)
D.bwn=new B.ad(A.XX,28,A.c,null,null,null)
D.bqL=new B.a0(63065,"MaterialIcons",!1)
D.bww=new B.ad(D.bqL,15,A.c,null,null,null)
D.bqR=new B.a0(63113,"MaterialIcons",!1)
D.bwC=new B.ad(D.bqR,null,A.af,null,null,null)
D.bwZ=new B.ad(A.uw,22,A.bH,null,null,null)
D.bxi=new B.ad(A.wW,18,null,null,null,null)
D.bxn=new B.ad(A.EH,12,A.c,null,null,null)
D.bsX=new B.a0(983687,"MaterialIcons",!1)
D.bxy=new B.ad(D.bsX,null,A.bk,null,null,null)
D.bxF=new B.ad(A.hq,null,A.bk,null,null,null)
D.bxY=new B.ad(A.pi,22,A.c,null,null,null)
D.by1=new B.ad(A.ct,13,A.c,null,null,null)
D.by7=new B.ad(A.e7,26,A.aD,null,null,null)
D.bya=new B.ad(A.qr,26,A.c,null,null,null)
D.LF=new B.ad(A.j4,8,A.c,null,null,null)
D.bys=new B.ad(A.pd,40,A.c,null,null,null)
D.byt=new B.ad(A.bot,null,null,null,null,null)
D.byx=new B.ad(A.t5,20,null,null,null,null)
D.bsW=new B.a0(983683,"MaterialIcons",!1)
D.byH=new B.ad(D.bsW,null,A.aW,null,null,null)
D.byI=new B.ad(A.j4,16,A.bk,null,null,null)
D.bz2=new B.ad(A.uK,null,null,null,null,null)
D.aii=new B.ad(A.uy,22,A.c,null,null,null)
D.bz6=new B.ad(A.dQ,17,A.c,null,null,null)
D.aij=new B.ad(A.j4,9,A.c,null,null,null)
D.bzb=new B.ad(A.ut,null,null,null,null,null)
D.boK=new B.a0(57744,"MaterialIcons",!1)
D.bzi=new B.ad(D.boK,null,null,null,null,null)
D.bzl=new B.ad(A.ut,16,null,null,null,null)
D.btr=new B.a0(985181,"MaterialIcons",!1)
D.F_=new B.ad(D.btr,null,null,null,null,null)
D.bzx=new B.ad(A.l_,16,A.bH,null,null,null)
D.bsO=new B.a0(983615,"MaterialIcons",!1)
D.bzz=new B.ad(D.bsO,12,A.c,null,null,null)
D.aip=new B.ad(A.wS,16,null,null,null,null)
D.bzH=new B.ad(A.dQ,21,A.c,null,null,null)
D.bzM=new B.ad(A.hq,17,A.c,null,null,null)
D.bzN=new B.ad(A.uw,null,null,null,null,null)
D.bA0=new B.ad(A.Yk,20,A.az,null,null,null)
D.bAf=new B.ad(A.pc,22,E.mx,null,null,null)
D.bAn=new B.ad(A.qp,13,A.af,null,null,null)
D.bAp=new B.ad(A.ahp,20,A.az,null,null,null)
D.bor=new B.a0(57495,"MaterialIcons",!1)
D.bAu=new B.ad(D.bor,null,null,null,null,null)
D.bAy=new B.ad(A.nw,18,A.c,null,null,null)
D.bAT=new B.ad(A.t8,28,A.c,null,null,null)
D.bB0=new B.ad(D.agi,null,A.aB,null,null,null)
D.bB1=new B.ad(A.pe,22,A.c,null,null,null)
D.aiz=new B.ad(A.X3,16,null,null,null,null)
D.bBL=new B.ad(A.uw,32,A.c,null,null,null)
D.bCs=new B.ad(A.iO,22,A.c,null,null,null)
D.bCw=new B.ad(A.qr,22,A.af,null,null,null)
D.aiO=new B.ad(A.rY,null,A.c2,null,null,null)
D.bDp=new B.ad(A.ux,18,null,null,null,null)
D.bDX=new B.ad(A.dQ,18,A.cz,null,null,null)
D.YJ=new B.ad(A.ct,18,A.az,null,null,null)
D.bE3=new B.ad(A.ahi,null,null,null,null,null)
D.bEt=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aKO,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eu,!0,null,null,null,null)
D.eC8=new B.F(!0,A.bI,null,null,null,null,null,A.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEL=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eC8,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eu,!0,null,null,null,null)
D.bF9=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eu,!0,null,null,null,null)
D.cFj=w([A.e4,A.aB],x.O)
D.bGh=new B.a3(A.a4,A.a7,A.w,D.cFj,null,null)
D.bGt=new B.a3(A.aX,A.b1,A.RA,A.apP,null,null)
D.aZZ=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b2y=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b5g=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b0Q=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cqL=w([D.aZZ,D.b2y,D.b5g,D.b0Q],x.O)
D.bGO=new B.a3(A.ax,A.aC,A.w,D.cqL,A.Fw,null)
D.d_7=w([A.cP,A.by,A.b3],x.O)
D.bGQ=new B.a3(A.aX,A.b1,A.RA,D.d_7,null,null)
D.d0k=w([A.bk,A.cb],x.O)
D.bGU=new B.a3(A.a4,A.a7,A.w,D.d0k,null,null)
D.cWO=w([A.hz,A.dl,A.aZ],x.O)
D.bGW=new B.a3(A.ax,A.aC,A.w,D.cWO,null,null)
D.cKR=w([A.cY,A.f4],x.O)
D.bH_=new B.a3(A.a4,A.a7,A.w,D.cKR,null,null)
D.d_2=w([O.kV,A.dl],x.O)
D.ajy=new B.a3(A.a4,A.a7,A.w,D.d_2,null,null)
D.b34=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.d__=w([D.b34,D.wg,A.bT],x.O)
D.bH4=new B.a3(A.a4,A.a7,A.w,D.d__,null,null)
D.cGU=w([A.bh,A.dk,A.f2],x.O)
D.bH5=new B.a3(A.ax,A.aC,A.w,D.cGU,null,null)
D.LU=new B.a3(A.a4,A.a7,A.w,A.FI,null,null)
D.ba_=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cjV=w([D.ba_,A.bT,A.j0],x.O)
D.ajD=new B.a3(A.ax,A.aC,A.w,D.cjV,null,null)
D.cPH=w([A.w6,A.au,D.zl],x.O)
D.bI3=new B.a3(A.a4,A.a7,A.w,D.cPH,null,null)
D.baY=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b1C=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b68=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cG2=w([D.baY,D.b1C,D.b68],x.O)
D.ajE=new B.a3(A.a4,A.a7,A.w,D.cG2,null,null)
D.b35=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bK3=w([Ar.abp,D.b35],x.O)
D.bId=new B.a3(A.aX,A.b1,A.w,D.bK3,null,null)
D.cEe=w([A.mw,A.bO],x.O)
D.bIh=new B.a3(A.aX,A.b1,A.w,D.cEe,null,null)
D.cUc=w([A.aB,A.dI],x.O)
D.bIn=new B.a3(A.a4,A.a7,A.w,D.cUc,null,null)
D.aav=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.art=w([D.aav,D.iY,D.IO],x.O)
D.bIR=new B.a3(A.ax,A.aC,A.w,D.art,null,null)
D.cjN=w([A.du,A.dw],x.O)
D.bJ1=new B.a3(A.aX,A.b1,A.w,D.cjN,null,null)
D.cRB=w([A.u1,Au.D7],x.O)
D.bJQ=new B.a3(A.a4,A.a7,A.w,D.cRB,null,null)
D.f3f=new B.w("Which Bio link?",null,A.cr,null,null,null,null,null,null,null,null,null)
D.bK0=new B.ph(null,D.f3f,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xA=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a1q=new C.kF(2,"elegantNavy")
D.fpE=w([A.U4,D.iY,A.bT],x.O)
D.jo=new C.wN(0,"classic")
D.a1d=new C.jb("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a1q,4294967035,4279378237,4290283019,D.jo)
D.aAq=new C.kF(3,"elegantGold")
D.aZz=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b_n=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a9l=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fp6=w([D.aZz,D.b_n,D.a9l],x.O)
D.a1b=new C.jb("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aAq,4294966515,4281016592,4289102906,D.jo)
D.dkP=new C.kF(22,"goldRibbon")
D.fp2=w([A.U4,D.iY,A.hP],x.O)
D.a14=new C.jb("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dkP,4294967035,4279378237,4291404327,D.jo)
D.dkQ=new C.kF(23,"goldBaroque")
D.a9R=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fp8=w([D.a9R,A.au,A.j0],x.O)
D.a15=new C.jb("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dkQ,4294964964,4283053072,4292128567,D.jo)
D.dkS=new C.kF(4,"elegantEmerald")
D.b0q=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b1c=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fpe=w([D.b0q,D.b1c,A.hP],x.O)
D.a16=new C.jb("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dkS,4294376440,4279122734,4291404327,D.jo)
D.dkT=new C.kF(5,"elegantBurgundy")
D.b4l=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fpl=w([D.b4l,A.a8J,A.hP],x.O)
D.a19=new C.jb("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dkT,4294965238,4283043359,4291404327,D.jo)
D.dkM=new C.kF(19,"goldFiligree")
D.Ji=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fp9=w([D.Ji,A.au,A.j0],x.O)
D.a17=new C.jb("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dkM,4294966259,4279378237,4292128567,D.jo)
D.dkN=new C.kF(20,"goldLaurel")
D.b9Q=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fpm=w([A.II,A.hP,D.b9Q],x.O)
D.a18=new C.jb("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dkN,4294966776,4282000405,4291404327,D.jo)
D.dkO=new C.kF(21,"goldCrest")
D.a8D=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b9X=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fpb=w([D.a8D,A.au,D.b9X],x.O)
D.a1c=new C.jb("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dkO,4294965484,4283053072,4292128567,D.jo)
D.dkR=new C.kF(24,"goldStar")
D.baU=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fpf=w([D.baU,A.au,D.iY],x.O)
D.a1a=new C.jb("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dkR,4294966518,4279378237,4292128567,D.jo)
D.F9=w([D.a1d,D.a1b,D.a14,D.a15,D.a16,D.a19,D.a17,D.a18,D.a1c,D.a1a],x.h)
D.pq=new C.mb(0,"blank")
D.Pp=new C.mb(1,"title")
D.md=new C.mb(2,"titleContent")
D.dFr=new C.mb(3,"twoColumn")
D.Bi=new C.mb(4,"section")
D.dFs=new C.mb(5,"comparison")
D.Gh=new C.mb(6,"flashcard")
D.Gi=new C.mb(7,"quiz")
D.Gj=new C.mb(8,"worksheet")
D.ak1=w([D.pq,D.Pp,D.md,D.dFr,D.Bi,D.dFs,D.Gh,D.Gi,D.Gj],B.az("P<mb>"))
D.bKf=w([0,0,0],x.cA)
D.asn=w([Z.TE,A.dw],x.O)
D.ka=w([A.bT,A.bH,A.hO,A.hy,D.zl],x.O)
D.dgJ=new C.iQ("fireworks","Royal Fireworks","Thank you for celebrating with us",D.asn,D.ka)
D.ba7=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b4j=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cEr=w([D.ba7,D.b4j],x.O)
D.dgA=new C.iQ("confetti","Golden Confetti","Together we rise",D.cEr,D.ka)
D.cBN=w([A.n8,A.To],x.O)
D.dgB=new C.iQ("crown","Crown of Glory","Built for our community",D.cBN,D.ka)
D.b1s=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b3Z=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cI7=w([D.b1s,D.b3Z],x.O)
D.tc=w([A.bI,A.aN,A.c,A.aJ,A.aj],x.O)
D.dgv=new C.iQ("aurora","Aurora Gala","A brighter future, together",D.cI7,D.tc)
D.b5i=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cRH=w([G.a8n,D.b5i],x.O)
D.dgM=new C.iQ("champagne","Champagne Toast","Cheers to every member",D.cRH,D.ka)
D.dgN=new C.iQ("diamonds","Diamond Rain","Every member is a jewel",W.asW,D.tc)
D.b_f=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b3w=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cW8=w([D.b_f,D.b3w],x.O)
D.dgq=new C.iQ("starburst","Golden Starburst","Thank you!",D.cW8,D.ka)
D.bK8=w([A.eZ,A.wa],x.O)
D.a8u=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Nr=w([A.o_,A.ie,A.uc,A.oL,D.a8u],x.O)
D.dgU=new C.iQ("balloons","Luxury Balloons","Let's celebrate",D.bK8,D.Nr)
D.cB8=w([A.Tu,A.x],x.O)
D.dgI=new C.iQ("galaxy","Galaxy Spiral","The sky is not the limit",D.cB8,D.tc)
D.b8w=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cOz=w([A.k3,D.b8w],x.O)
D.dgD=new C.iQ("redcarpet","Red Carpet","Tonight we shine",D.cOz,D.ka)
D.b6F=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b56=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cSA=w([D.b6F,D.b56],x.O)
D.dgs=new C.iQ("coins","Gold Coin Rain","Every contribution counts",D.cSA,D.ka)
D.cYE=w([A.du,A.hv],x.O)
D.dgy=new C.iQ("lanterns","Sky Lanterns","Lighting the way together",D.cYE,D.ka)
D.b2h=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.czh=w([A.wc,D.b2h],x.O)
D.dgu=new C.iQ("hearts","Floating Hearts","Made with love",D.czh,D.Nr)
D.b_M=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b0w=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cZY=w([D.b_M,D.b0w],x.O)
D.dgT=new C.iQ("petals","Rose Petals","Thank you, from our hearts",D.cZY,D.Nr)
D.b9g=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cWs=w([A.k2,D.b9g],x.O)
D.dgp=new C.iQ("butterflies","Golden Butterflies","New beginnings",D.cWs,D.ka)
D.b66=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cA9=w([D.b66,A.x],x.O)
D.dgL=new C.iQ("neon","Neon Night","Let's go!",D.cA9,D.tc)
D.b3g=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cUm=w([A.J1,D.b3g],x.O)
D.dgO=new C.iQ("disco","Disco Ball","Party time",D.cUm,D.tc)
D.b6x=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cTW=w([A.hz,D.b6x],x.O)
D.dgt=new C.iQ("sunrise","Golden Sunrise","A new day for our community",D.cTW,D.ka)
D.cTA=w([A.q6,A.dw],x.O)
D.dgP=new C.iQ("pearls","Ocean Pearls","Deep roots, bright future",D.cTA,D.tc)
D.b1y=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cTN=w([D.b1y,A.dw],x.O)
D.dgS=new C.iQ("snow","Winter Gala","Warm wishes to all",D.cTN,D.tc)
D.aZI=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b_y=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cZ0=w([D.aZI,D.b_y],x.O)
D.dgH=new C.iQ("laurel","Laurel Victory","We did it together",D.cZ0,D.ka)
D.aZy=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b3V=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cyq=w([D.aZy,D.b3V],x.O)
D.dgR=new C.iQ("ribbons","Silk Ribbons","Elegance in every step",D.cyq,D.ka)
D.b4S=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cjK=w([G.zk,D.b4S],x.O)
D.dgE=new C.iQ("kente","Kente Pride","Proud of our roots",D.cjK,D.ka)
D.b79=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b9x=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cJB=w([D.b79,D.b9x],x.O)
D.dgz=new C.iQ("trophy","Trophy Shine","Winners together",D.cJB,D.ka)
D.cTT=w([Am.IU,A.x],x.O)
D.dgr=new C.iQ("shooting","Shooting Stars","Make a wish",D.cTT,D.tc)
D.aZP=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.abf=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cZe=w([D.aZP,D.abf],x.O)
D.dgF=new C.iQ("bokeh","Golden Bokeh","Shine bright",D.cZe,D.ka)
D.b_8=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cPl=w([D.b_8,A.x],x.O)
D.dgx=new C.iQ("orbits","Golden Orbits","Always moving forward",D.cPl,D.ka)
D.b9h=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cMc=w([A.a9j,D.b9h],x.O)
D.dgC=new C.iQ("flowers","Blooming Garden","Growing together",D.cMc,D.Nr)
D.aZX=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b_s=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cY9=w([D.aZX,D.b_s],x.O)
D.dgw=new C.iQ("music","Music Party","Celebrate with us",D.cY9,D.tc)
D.b0g=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b9T=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.czt=w([D.b0g,D.b9T],x.O)
D.dgQ=new C.iQ("mandala","Royal Mandala","Harmony and unity",D.czt,D.ka)
D.cMh=w([G.zk,D.abf],x.O)
D.dgK=new C.iQ("sparklers","Golden Sparklers","Light up the night",D.cMh,D.ka)
D.dgG=new C.iQ("city","City Lights","The whole city celebrates",D.asn,D.ka)
D.Fi=w([D.dgJ,D.dgA,D.dgB,D.dgv,D.dgM,D.dgN,D.dgq,D.dgU,D.dgI,D.dgD,D.dgs,D.dgy,D.dgu,D.dgT,D.dgp,D.dgL,D.dgO,D.dgt,D.dgP,D.dgS,D.dgH,D.dgR,D.dgE,D.dgz,D.dgr,D.dgF,D.dgx,D.dgC,D.dgw,D.dgQ,D.dgK,D.dgG],B.az("P<iQ>"))
D.e0j=new B.A("","No ring")
D.ee4=new B.A("platinum","Platinum")
D.ebm=new B.A("glow","Glow")
D.e3w=new B.A("double","Double line")
D.e2s=new B.A("framed","Gallery frame")
D.e_Z=new B.A("rosegold","Rose gold")
D.ec1=new B.A("jewels","Jeweled")
D.e8V=new B.A("aurora","Aurora")
D.AD=w([D.e0j,A.a2J,D.ee4,D.ebm,H.aGG,D.e3w,A.a2L,D.e2s,D.e_Z,D.ec1,D.e8V],x.L)
D.c3p=w([D.a17,D.a18,D.a1c,D.a14,D.a15,D.a1a],x.h)
D.bzU=new B.ad(G.afc,16,null,null,null,null)
D.aV4=new B.uR(A.bf,D.bzU,null,x.U)
D.boT=new B.a0(58027,"MaterialIcons",!1)
D.btG=new B.ad(D.boT,16,null,null,null,null)
D.aV2=new B.uR(A.L,D.btG,null,x.U)
D.boU=new B.a0(58030,"MaterialIcons",!1)
D.bxE=new B.ad(D.boU,16,null,null,null,null)
D.aV5=new B.uR(A.dM,D.bxE,null,x.U)
D.c9z=w([D.aV4,D.aV2,D.aV5],B.az("P<uR<px>>"))
D.ch8=w([A.zp,A.hw],x.O)
D.ch9=w([A.bh,A.bm,A.f2],x.O)
D.Ng=w([A.bH,A.hy,A.hO,A.au,A.oL],x.O)
D.cjQ=w([A.bT,D.iY,D.IO],x.O)
D.ckm=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dZ4=new B.A(4278913286,4280030216)
D.dZm=new B.A(4279373061,4278518787)
D.dZt=new B.A(4279898630,4278847235)
D.cJ2=w([D.dZ4,D.dZm,D.dZt],x.n)
D.cF5=w(["\u265b","\u269c","\u2726"],x.s)
D.dkK=new C.wP("Royal Onyx & Gold",D.cJ2,4292128567,4294370209,4294965479,3874020544,D.cF5)
D.dYS=new B.A(4278326799,4278598442)
D.dYU=new B.A(4278395929,4278258953)
D.dZ0=new B.A(4278599728,4278327826)
D.cYv=w([D.dYS,D.dYU,D.dZ0],x.n)
D.cA2=w(["\u269c","\u2756","\u2727"],x.s)
D.dkH=new C.wP("Imperial Emerald",D.cYv,4293050997,4294699968,4294180856,3872254170,D.cA2)
D.dYV=new B.A(4278455076,4278918747)
D.dZ_=new B.A(4278587439,4278322714)
D.dZd=new B.A(4279051376,4278455076)
D.cWK=w([D.dYV,D.dZ_,D.dZd],x.n)
D.cPW=w(["\u2654","\u2726","\u2748"],x.s)
D.dkB=new C.wP("Sapphire Crown",D.cWK,4291417834,4294967295,4294310143,3871986666,D.cPW)
D.dZr=new B.A(4279894534,4283041554)
D.dZD=new B.A(4281008906,4279042307)
D.dZL=new B.A(4284221976,4279894534)
D.d0N=w([D.dZr,D.dZD,D.dZL],x.n)
D.cBf=w(["\u265b","\u2766","\u2726"],x.s)
D.dkD=new C.wP("Ruby Throne",D.d0N,4293378685,4294963145,4294964466,3874213833,D.cBf)
D.dZl=new B.A(4279371039,4281995100)
D.dZv=new B.A(4280092723,4278714896)
D.dZI=new B.A(4283045242,4279371039)
D.cYR=w([D.dZl,D.dZv,D.dZI],x.n)
D.cX4=w(["\u2655","\u2756","\u2727"],x.s)
D.dkI=new C.wP("Amethyst Palace",D.cYR,4293314984,4294963421,4294702591,3873229802,D.cX4)
D.dYX=new B.A(4278519045,4280032287)
D.dZe=new B.A(4279111184,4278321666)
D.dZA=new B.A(4280492839,4278716426)
D.cVH=w([D.dYX,D.dZe,D.dZA],x.n)
D.cOm=w(["\u2726","\u25c6","\u2742"],x.s)
D.dkF=new C.wP("Obsidian & Platinum",D.cVH,4293256418,4294967295,4294638330,3872378836,D.cOm)
D.dZs=new B.A(4279896588,4282194463)
D.dZB=new B.A(4280553487,4279043334)
D.dZJ=new B.A(4283048488,4279896588)
D.cNT=w([D.dZs,D.dZB,D.dZJ],x.n)
D.d_k=w(["\u2766","\u273f","\u2727"],x.s)
D.dkC=new C.wP("Rose Gold Velvet",D.cNT,4293440672,4294960345,4294964979,3874214602,D.d_k)
D.dYY=new B.A(4278520340,4279180595)
D.dZ2=new B.A(4278718495,4278322443)
D.dZp=new B.A(4279510591,4278520340)
D.cqt=w([D.dYY,D.dZ2,D.dZp],x.n)
D.cP0=w(["\u269c","\u2736","\u2756"],x.s)
D.dkG=new C.wP("Midnight Brass",D.cqt,4291405148,4293975208,4294439914,3872837564,D.cP0)
D.dZY=new B.A(4294703086,4293780428)
D.dZU=new B.A(4294307549,4293187253)
D.dZZ=new B.A(4294966517,4293977807)
D.cDf=w([D.dZY,D.dZU,D.dZZ],x.n)
D.cPp=w(["\u269c","\u265b","\u2726"],x.s)
D.dkJ=new C.wP("Ivory Marble & Gold",D.cDf,4289760572,4286209048,4280951062,3863625518,D.cPp)
D.dZ8=new B.A(4278978566,4280555024)
D.dZo=new B.A(4279504137,4278518530)
D.dZF=new B.A(4281211923,4278978566)
D.cB7=w([D.dZ8,D.dZo,D.dZF],x.n)
D.cXM=w(["\u2742","\u2726","\u265c"],x.s)
D.dkE=new C.wP("Onyx & Copper",D.cB7,4291856987,4294365880,4294964718,3873885630,D.cXM)
D.ckt=w([D.dkK,D.dkH,D.dkB,D.dkD,D.dkI,D.dkF,D.dkC,D.dkG,D.dkJ,D.dkE],B.az("P<wP>"))
D.cmK=w([A.au,D.zl,A.hy],x.O)
D.e5t=new B.A("Original",null)
D.e5B=new B.A("Wide 16:9",1.7777777777777777)
D.e7J=new B.A("Landscape 3:2",1.5)
D.e4Y=new B.A("Photo 4:3",1.3333333333333333)
D.e6A=new B.A("Square",1)
D.ehu=new B.A("Portrait 3:4",0.75)
D.apX=w([D.e5t,D.e5B,D.e7J,D.e4Y,D.e6A,D.ehu],B.az("P<+(n,O?)>"))
D.apY=w([A.hy,A.bU,A.b6,A.bB],x.O)
D.e7T=new B.A("","Original")
D.e9D=new B.A("circle","Circle")
D.eeO=new B.A("rounded","Rounded")
D.efG=new B.A("triangle","Triangle")
D.ebA=new B.A("hexagon","Hexagon")
D.ea1=new B.A("diamond","Diamond")
D.e8U=new B.A("arch","Arch")
D.AI=w([D.e7T,D.e9D,D.eeO,D.efG,D.ebA,D.ea1,D.e8U],x.L)
D.dfQ=new C.kZ("classic_blue","Classic Blue","Normal",A.bk,A.c,A.k4,A.dx,A.aI)
D.dg5=new C.kZ("campus_green","Campus Green","Normal",A.aW,A.lQ,A.q4,A.fV,A.ew)
D.dfX=new C.kZ("warm_sand","Warm Sand","Normal",A.e_,A.hO,A.bH,A.j_,A.nc)
D.dg3=new C.kZ("slate_minimal","Slate Minimal","Normal",A.bt,A.aN,A.aJ,A.M,A.aI)
D.dfP=new C.kZ("coral_fresh","Coral Fresh","Normal",A.cj,A.ih,A.pZ,A.kt,A.rk)
D.dg4=new C.kZ("lavender_calm","Lavender Calm","Normal",A.b3,A.oN,A.zc,A.oQ,A.je)
D.dfR=new C.kZ("ocean_breeze","Ocean Breeze","Normal",A.f4,A.qa,A.rg,A.u3,A.nd)
D.aaB=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dg1=new C.kZ("berry_pop","Berry Pop","Normal",A.fc,D.aaB,A.k_,G.Ur,A.Dt)
D.dfS=new C.kZ("midnight_pro","Midnight Pro","Professional",A.aB,A.M,A.du,A.k_,A.cp)
D.dg0=new C.kZ("executive_navy","Executive Navy","Professional",A.d6,A.aa0,A.dx,A.kS,A.bI)
D.dfZ=new C.kZ("boardroom_charcoal","Boardroom Charcoal","Professional",A.aj,A.bj,A.M,A.aN,A.cp)
D.dfT=new C.kZ("corporate_steel","Corporate Steel","Professional",A.mt,A.M,A.lS,A.fe,A.bI)
D.dfW=new C.kZ("gold_luxe","Gold Luxe","Luxury",A.nY,A.dA,A.nZ,A.ll,A.bH)
D.b6A=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dg_=new C.kZ("rose_gold_elite","Rose Gold Elite","Luxury",A.hw,D.b6A,A.Uj,A.ie,A.oL)
D.dg2=new C.kZ("platinum_night","Platinum Night","Luxury",A.cp,A.dw,A.bj,A.aN,A.aJ)
D.dg6=new C.kZ("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.oR,A.eK,A.oX,A.jf)
D.dfO=new C.kZ("royal_purple","Royal Purple","Luxury",A.mu,A.TH,A.je,A.k_,A.Tk)
D.dfY=new C.kZ("neon_pitch","Neon Pitch","Bold",A.b6,A.dw,A.M,A.be,A.aJ)
D.dfV=new C.kZ("crimson_impact","Crimson Impact","Bold",A.bO,A.k3,A.f_,A.rB,A.fj)
D.dfU=new C.kZ("sunset_gallery","Sunset Gallery","Bold",A.fU,A.rk,A.kt,A.pZ,A.o0)
D.Fr=w([D.dfQ,D.dg5,D.dfX,D.dg3,D.dfP,D.dg4,D.dfR,D.dg1,D.dfS,D.dg0,D.dfZ,D.dfT,D.dfW,D.dg_,D.dg2,D.dg6,D.dfO,D.dfY,D.dfV,D.dfU],B.az("P<kZ>"))
D.cy9=w([A.bT,D.iY],x.O)
D.cO7=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e8H=new B.A("Faces & people",D.cO7)
D.cmO=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dY3=new B.A("Ideas & work",D.cmO)
D.cFx=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.ebF=new B.A("Nature",D.cFx)
D.cOf=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.e5r=new B.A("Places & things",D.cOf)
D.cIE=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.e8Z=new B.A("Symbols",D.cIE)
D.cyf=w([D.e8H,D.dY3,D.ebF,D.e5r,D.e8Z],B.az("P<+(n,ak<n>)>"))
D.b_1=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cyB=w([A.bT,D.a9l,D.b_1],x.O)
D.aUz=new B.ab(0,A.G,A.IE,A.aBc,40)
D.aUg=new B.ab(0,A.G,A.na,A.e9,8)
D.cyM=w([D.aUz,D.aUg],x.V)
D.czd=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aqm=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.ZU=w([A.hy,A.f2,A.bO,A.aF,A.cj],x.O)
D.czX=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9z=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cA7=w([A.Ub,D.a9z,A.Ub],x.O)
D.cAb=w([A.hP,D.iY,D.IO],x.O)
D.e5g=new B.A(A.bf,D.XH)
D.e6v=new B.A(A.L,D.XG)
D.e0W=new B.A(A.dM,D.XI)
D.cB2=w([D.e5g,D.e6v,D.e0W],B.az("P<+(px,a0)>"))
D.cO=new C.Hk(0,"text")
D.l7=new C.Hk(1,"image")
D.eW=new C.Hk(2,"shape")
D.Po=new C.Hk(3,"pdf")
D.kJ=new C.Hk(4,"signature")
D.a1x=new C.Hk(5,"bio")
D.cBR=w([D.cO,D.l7,D.eW,D.Po,D.kJ,D.a1x],B.az("P<Hk>"))
D.cBS=w([A.bi,A.cx],B.az("P<Gi>"))
D.cCr=w(["School","Documents","Sign & present"],x.s)
D.aUD=new B.ab(0,A.G,A.ab7,A.tv,28)
D.cCK=w([D.aUD],x.V)
D.cD1=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nz=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqK=w([A.hy,A.Ds,A.aJ,A.c,A.o_,A.au],x.O)
D.egV=new B.A(0.1,0.08)
D.ebD=new B.A(0.3,0.05)
D.e0t=new B.A(0.55,0.1)
D.e4k=new B.A(0.8,0.06)
D.e7c=new B.A(0.92,0.16)
D.e6K=new B.A(0.2,0.2)
D.e4L=new B.A(0.7,0.22)
D.eam=new B.A(0.05,0.4)
D.e7B=new B.A(0.95,0.45)
D.e18=new B.A(0.12,0.7)
D.e3a=new B.A(0.88,0.75)
D.e3i=new B.A(0.4,0.9)
D.e_b=new B.A(0.65,0.93)
D.e3Z=new B.A(0.25,0.97)
D.e5d=new B.A(0.85,0.9)
D.e1U=new B.A(0.5,0.04)
D.cEm=w([D.egV,D.ebD,D.e0t,D.e4k,D.e7c,D.e6K,D.e4L,D.eam,D.e7B,D.e18,D.e3a,D.e3i,D.e_b,D.e3Z,D.e5d,D.e1U],x.G)
D.cEu=w([A.c,A.hw,A.aY,A.aS],x.O)
D.dH3=new C.ju("office_blue","Office Blue",A.bk,A.dx,A.aI,A.c,A.k4)
D.dHe=new C.ju("campus_green","Campus Green",A.aW,A.fV,A.ew,A.lQ,A.q4)
D.dH4=new C.ju("sunset","Sunset",A.fU,A.kt,A.nc,A.ih,A.pZ)
D.dH5=new C.ju("midnight","Midnight",A.aB,A.k_,A.cp,A.M,A.du)
D.dHg=new C.ju("classic","Classic",A.dl,A.dA,A.lm,A.hO,A.h5)
D.dHd=new C.ju("rose_gold","Rose Gold",A.hw,A.wd,A.wc,A.uc,A.zp)
D.dGZ=new C.ju("ocean_teal","Ocean Teal",A.f4,A.u3,A.nd,A.qa,A.rg)
D.dGY=new C.ju("slate_pro","Slate Pro",A.bt,A.M,A.aI,A.aN,A.aJ)
D.dGX=new C.ju("neon_night","Neon Night",A.b6,A.be,A.aJ,A.dw,A.M)
D.dH8=new C.ju("lavender","Lavender",A.b3,A.oQ,A.je,A.oN,A.zc)
D.dHa=new C.ju("coral","Coral",A.cj,A.kt,A.rk,A.ih,A.o0)
D.dH_=new C.ju("forest","Forest",A.fx,A.eB,A.cJ,A.lR,A.el)
D.dH0=new C.ju("berry","Berry",A.fc,G.Ur,A.Dt,D.aaB,A.k_)
D.dH7=new C.ju("sand","Sand",A.e_,A.j_,A.nc,A.hO,A.bH)
D.dHc=new C.ju("ice","Ice",A.mt,A.J2,A.aI,A.mr,A.fe)
D.dH2=new C.ju("charcoal","Charcoal",A.aj,A.aN,A.cp,A.bj,A.M)
D.dGW=new C.ju("mint","Mint",A.aS,A.fq,A.fV,A.lR,A.oX)
D.dHb=new C.ju("crimson","Crimson",A.bO,A.mw,A.k3,A.Dq,A.rB)
D.b1b=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dH6=new C.ju("gold","Gold",A.nY,A.u1,A.nZ,D.b1b,A.ll)
D.dH9=new C.ju("aqua","Aqua",A.bM,A.Df,A.nW,A.oP,A.o1)
D.dH1=new C.ju("plum","Plum",A.mu,A.wa,A.Dt,A.D4,A.rv)
D.dHf=new C.ju("steel","Steel",A.d6,A.dx,A.bj,A.k4,A.kS)
D.a_8=w([D.dH3,D.dHe,D.dH4,D.dH5,D.dHg,D.dHd,D.dGZ,D.dGY,D.dGX,D.dH8,D.dHa,D.dH_,D.dH0,D.dH7,D.dHc,D.dH2,D.dGW,D.dHb,D.dH6,D.dH9,D.dH1,D.dHf],B.az("P<ju>"))
D.cEO=w([A.bT,A.j0],x.O)
D.Pq=new C.hn(10,"rotate3d")
D.Gl=new C.hn(8,"flip")
D.aAJ=new C.hn(19,"spiral")
D.pr=new C.hn(16,"bounce")
D.aAM=new C.hn(9,"flipVertical")
D.cEP=w([D.Pq,D.Gl,D.aAJ,D.pr,D.aAM],x.i)
D.e1=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cF8=w([0.62,1],x.x)
D.cFF=w([0,0.32,0.68,1],x.x)
D.me=new C.hn(6,"zoom")
D.tp=new C.hn(4,"slideUp")
D.to=new C.hn(2,"slideLeft")
D.cFN=w([D.me,D.Gl,D.tp,D.Pq,D.to],x.i)
D.cGg=w([A.bU,A.hw,A.ie,A.hy,A.c],x.O)
D.aUu=new B.ab(0,A.G,D.a9K,A.tv,30)
D.cGZ=w([D.aUu],x.V)
D.dPg=new B.u(0,-2.5)
D.dP5=new B.u(-2.5,0)
D.dNS=new B.u(2.5,0)
D.cH1=w([A.PG,A.a1U,A.aBF,A.a1T,D.dPg,H.aBB,D.dP5,D.dNS],x.dN)
D.Fx=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cHs=w([23,114,69,56,80,144],x.t)
D.cHQ=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cIe=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cJF=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cJK=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 14 apps inside the TV screen (NGMY Ads, Clock, Weather, Music, Photos, Arcade, News, School, Calculator, Calendar, Map, Camera, Snake, Stopwatch). The phone and tablet play NGMY ads on their own screens, and tapping a phone 3 times opens a big phone with the same apps. Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cJL=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bc=new C.u9(0,"rectangle")
D.eF=new C.u9(1,"circle")
D.kK=new C.u9(6,"hexagon")
D.cJX=w([D.bc,D.eF,D.kK],x.m)
D.nE=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aaH=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cKu=w([D.aaH,A.eB],x.O)
D.e0E=new B.A("","Classic")
D.e_o=new B.A("caps","Bold caps")
D.eap=new B.A("elegant","Elegant")
D.ef5=new B.A("shadow","Shadow")
D.e4F=new B.A("neon","Neon glow")
D.edL=new B.A("outline","Outline")
D.ed_=new B.A("marker","Highlighter")
D.efg=new B.A("stamp","Stamp")
D.eeJ=new B.A("retro","Retro")
D.e3H=new B.A("threed","3D")
D.eaU=new B.A("fire","Fire")
D.ebM=new B.A("ice","Ice")
D.e9C=new B.A("chalk","Chalk")
D.e9H=new B.A("comic","Comic")
D.efi=new B.A("sunset","Sunset")
D.egm=new B.A("softglow","Soft glow")
D.ecH=new B.A("lowercase","Lowercase")
D.ea8=new B.A("double","Echo")
D.egt=new B.A("whisper","Whisper")
D.arA=w([D.e0E,D.e_o,D.eap,D.ef5,D.e4F,D.edL,D.ed_,D.efg,D.eeJ,D.e3H,H.aGE,D.eaU,D.ebM,D.e9C,D.e9H,A.a2J,D.efi,D.egm,D.ecH,D.ea8,D.egt],x.L)
D.cLG=w([3,5,7,10,12,15],x.t)
D.cMU=w([A.bU,A.bH,A.c,A.ex,A.cP],x.O)
D.d7o=new C.rF(10,"cardWorld")
D.Ba=new C.Ar(3,"rounded")
D.dnL=new C.l1("world","NGMY World",D.d7o,D.Ba,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d7p=new C.rF(11,"cardSplit")
D.dnH=new C.l1("business","Business Wire",D.d7p,D.Ba,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d7q=new C.rF(12,"cardBreaking")
D.dnU=new C.l1("breaking","Breaking Red",D.d7q,D.Ba,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d7r=new C.rF(13,"cardFeature")
D.dnN=new C.l1("feature","Tech Feature",D.d7r,D.Ba,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.azh=new C.rF(6,"circle")
D.azb=new C.Ar(4,"circle")
D.dnR=new C.l1("parchment","Royal Circle",D.azh,D.azb,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dnG=new C.l1("ocean","Blue Ocean",D.azh,D.azb,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d7u=new C.rF(7,"rail")
D.aza=new C.Ar(1,"double")
D.dnI=new C.l1("forest","Green Leaf",D.d7u,D.aza,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aze=new C.rF(1,"sideBySide")
D.dnW=new C.l1("herald","NGMY Herald",D.aze,D.Ba,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.azd=new C.rF(0,"classic")
D.a0K=new C.Ar(9,"shadow")
D.dnV=new C.l1("daily","The Daily",D.azd,D.a0K,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d7s=new C.rF(2,"splash")
D.azc=new C.Ar(6,"cutCorner")
D.dnF=new C.l1("tabloid","Big Tabloid",D.d7s,D.azc,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.azi=new C.rF(9,"minimal")
D.dnQ=new C.l1("modern","Modern Digest",D.azi,D.Ba,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.azf=new C.rF(3,"magazine")
D.az9=new C.Ar(0,"plain")
D.dnM=new C.l1("midnight","Midnight Edition",D.azf,D.az9,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d7v=new C.rF(8,"banner")
D.dnO=new C.l1("metro","Metro Wire",D.d7v,D.azc,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d7n=new C.Ar(8,"arch")
D.dnP=new C.l1("sunrise","Sunrise Post",D.azf,D.d7n,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.azg=new C.rF(5,"scrapbook")
D.d7m=new C.Ar(5,"tape")
D.dnK=new C.l1("neon","Neon Beat",D.azg,D.d7m,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d7t=new C.rF(4,"wrap")
D.dnX=new C.l1("gold","Golden Press",D.d7t,D.a0K,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dnY=new C.l1("minimal","Paper White",D.azi,D.a0K,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dnJ=new C.l1("gazette","Fresh Gazette",D.azd,D.aza,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dnT=new C.l1("times","Classic Times",D.aze,D.az9,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.OX=new C.Ar(2,"polaroid")
D.dnS=new C.l1("scrapbook","Memory Scrapbook",D.azg,D.OX,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_l=w([D.dnL,D.dnH,D.dnU,D.dnN,D.dnR,D.dnG,D.dnI,D.dnW,D.dnV,D.dnF,D.dnQ,D.dnM,D.dnO,D.dnP,D.dnK,D.dnX,D.dnY,D.dnJ,D.dnT,D.dnS],B.az("P<l1>"))
D.cN5=w([0.45,1],x.x)
D.Fz=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cNq=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fkG=new C.o6("Original",0,1,1,0,0,0)
D.fkK=new C.o6("Black & white",0,1.1,0,0,0,0)
D.fkx=new C.o6("Noir",-0.05,1.55,0,0,0,0)
D.fkB=new C.o6("Sepia",0,1,0.25,0.9,0,0)
D.fkA=new C.o6("Vivid",0,1.15,1.6,0,0,0)
D.fkt=new C.o6("Pop",0,1.3,1.9,0,0,0)
D.fkv=new C.o6("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fkH=new C.o6("Matte",0,0.9,0.85,0,0,0.55)
D.fkC=new C.o6("Cool",0,1.05,1,-0.8,0,0)
D.fkJ=new C.o6("Warm",0.03,1.05,1.1,0.8,0,0)
D.fku=new C.o6("Golden hour",0.04,1,1.25,1,0,0)
D.fkz=new C.o6("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fkI=new C.o6("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fky=new C.o6("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fkE=new C.o6("Retro",0,0.9,0.7,0.4,0,0.35)
D.fkD=new C.o6("Forest",0,1,1.2,-0.1,-0.45,0)
D.fkF=new C.o6("Rose",0,1,1.1,0.3,0.4,0)
D.fkw=new C.o6("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cNr=w([D.fkG,D.fkK,D.fkx,D.fkB,D.fkA,D.fkt,D.fkv,D.fkH,D.fkC,D.fkJ,D.fku,D.fkz,D.fkI,D.fky,D.fkE,D.fkD,D.fkF,D.fkw],B.az("P<o6>"))
D.aZv=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cNs=w([D.aaH,A.eB,D.aZv],x.O)
D.dXX=new B.A(0.12,0.3)
D.ebW=new B.A(0.26,0.75)
D.eal=new B.A(0.8,0.22)
D.efq=new B.A(0.9,0.7)
D.ecG=new B.A(0.5,0.15)
D.edN=new B.A(0.65,0.85)
D.e2l=new B.A(0.08,0.85)
D.cND=w([D.dXX,D.ebW,D.eal,D.efq,D.ecG,D.edN,D.e2l],x.G)
D.arJ=w([A.b6,A.bU,A.bB,A.bh],x.O)
D.cOq=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cOC=w([A.c,A.fe,A.dB,A.u4],x.O)
D.b1m=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cPx=w([D.b1m,D.a9z],x.O)
D.cPy=w([A.w6,A.au],x.O)
D.cPM=w([0,0.25,0.75,1],x.x)
D.cPO=w([A.w2,A.o_],x.O)
D.aAj=new C.kF(10,"kenteSunset")
D.fp4=w([D.a9R,A.jx,A.au],x.O)
D.dj2=new C.jb("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aAj,4294964964,4282000405,4279983648,D.jo)
D.aAk=new C.kF(11,"indigoMudcloth")
D.b_j=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fpi=w([D.b_j,A.a9w,A.hP],x.O)
D.dja=new C.jb("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aAk,4294439140,4279903102,4279903102,D.jo)
D.aAl=new C.kF(12,"adinkraRoyal")
D.bau=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fpj=w([D.a8D,D.bau,A.au],x.O)
D.djc=new C.jb("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aAl,4294965484,4285218591,4287322667,D.jo)
D.aAm=new C.kF(13,"nileLotus")
D.b7l=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b4z=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fpo=w([D.b7l,D.b4z,A.hP],x.O)
D.djb=new C.jb("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aAm,4294244340,4279196764,4279196764,D.jo)
D.aAn=new C.kF(14,"shweshweIvory")
D.b2W=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b1Y=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b_L=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fp5=w([D.b2W,D.b1Y,D.b_L],x.O)
D.dj7=new C.jb("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aAn,4294505710,4279970378,4291058750,D.jo)
D.qI=new C.kF(15,"certIvoryNavy")
D.fp3=w([D.Ji,D.iY,A.hP],x.O)
D.azQ=new C.wN(1,"ringsNdoa")
D.dj4=new C.jb("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qI,4294966259,4279378237,4291404327,D.azQ)
D.a1f=new C.wN(2,"coupleCards")
D.dj_=new C.jb("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qI,4294966259,4279378237,4291404327,D.a1f)
D.Bd=new C.kF(18,"certIvoryNavyBar")
D.a8C=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fph=w([D.a8C,D.iY,A.hP],x.O)
D.azR=new C.wN(3,"kuhoweshaForm")
D.diY=new C.jb("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Bd,4294966519,4279378237,4291404327,D.azR)
D.a9I=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fpB=w([D.Ji,D.a9I,A.hP],x.O)
D.a1g=new C.wN(4,"mahariPande")
D.dj0=new C.jb("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qI,4294966259,4279904068,4291404327,D.a1g)
D.aAo=new C.kF(16,"certIvoryGreen")
D.b2q=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fp7=w([A.II,D.b2q,A.hP],x.O)
D.azS=new C.wN(5,"familiaMti")
D.dj6=new C.jb("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aAo,4294966776,4280241466,4291404327,D.azS)
D.a1h=new C.wN(6,"ndoaSafi")
D.diZ=new C.jb("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Bd,4294966519,4279378237,4291404327,D.a1h)
D.b65=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fpa=w([D.Ji,A.hP,D.b65],x.O)
D.a1i=new C.wN(7,"peteWide")
D.dj3=new C.jb("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qI,4294966259,4282001936,4291404327,D.a1i)
D.djd=new C.wN(8,"muhuriCrest")
D.diX=new C.jb("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qI,4294966259,4279378237,4291404327,D.djd)
D.fpk=w([D.a8C,D.a9I,A.hP],x.O)
D.dje=new C.wN(9,"fomuWazi")
D.dj9=new C.jb("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Bd,4294966519,4279904068,4291404327,D.dje)
D.aAp=new C.kF(17,"certIvoryRose")
D.b2Y=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fpn=w([D.b2Y,D.aam,A.hP],x.O)
D.a1e=new C.wN(10,"upendoOrnate")
D.dj5=new C.jb("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aAp,4294965493,4286200650,4291404327,D.a1e)
D.cQa=w([D.dj2,D.dja,D.djc,D.djb,D.dj7,D.dj4,D.dj_,D.diY,D.dj0,D.dj6,D.diZ,D.dj3,D.diX,D.dj9,D.dj5],x.h)
D.e2=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Gm=new C.vj(0,"emojis")
D.Bk=new C.vj(1,"pictures")
D.Gn=new C.vj(2,"icons3d")
D.a1z=new C.vj(3,"animations")
D.Ps=new C.vj(4,"videoMotion")
D.Bl=new C.vj(5,"luxe")
D.a_r=w([D.Gm,D.Bk,D.Gn,D.a1z,D.Ps,D.Bl],B.az("P<vj>"))
D.eem=new B.A(A.dQ,"Looks")
D.e4d=new B.A(A.xm,"Light")
D.e4a=new B.A(A.nx,"Colour")
D.e2m=new B.A(A.wX,"Effects")
D.agd=new B.a0(63112,"MaterialIcons",!1)
D.e_B=new B.A(D.agd,"Crop")
D.cQC=w([D.eem,D.e4d,D.e4a,D.e2m,D.e_B],x.f2)
D.cRc=w([],x.D)
D.fpy=w([],x.L)
D.e2x=new B.A("Flashcard",D.Gh)
D.e61=new B.A("Quiz",D.Gi)
D.e7O=new B.A("Worksheet",D.Gj)
D.e58=new B.A("Notes",D.md)
D.e6t=new B.A("Section",D.Bi)
D.cRN=w([D.e2x,D.e61,D.e7O,D.e58,D.e6t],B.az("P<+(n,mb)>"))
D.dkU=new C.kF(6,"beadedPearl")
D.b8G=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b58=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fpC=w([D.b8G,D.b58,A.hP],x.O)
D.azO=new C.jb("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dkU,4294966774,4286209070,4291404327,D.jo)
D.dkV=new C.kF(7,"artDeco")
D.b8r=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.baJ=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fpA=w([D.b8r,D.baJ,A.bT],x.O)
D.azP=new C.jb("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dkV,4294440434,4280228630,4290283019,D.jo)
D.dkW=new C.kF(8,"rosetteCorners")
D.ba2=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b1o=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b54=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fpd=w([D.ba2,D.b1o,D.b54],x.O)
D.azN=new C.jb("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dkW,4294702831,4285218602,4291394365,D.jo)
D.dkX=new C.kF(9,"modernLedger")
D.fpc=w([A.c,D.iY,D.iY],x.O)
D.azM=new C.jb("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dkX,4294967295,4279378237,4279378237,D.jo)
D.cRR=w([D.azO,D.azP,D.azN,D.azM],x.h)
D.cRZ=w([A.ie,A.o_],x.O)
D.cd=new C.hn(0,"none")
D.db=new C.hn(1,"fade")
D.Gk=new C.hn(3,"slideRight")
D.aAL=new C.hn(5,"slideDown")
D.dFy=new C.hn(7,"zoomOut")
D.a1y=new C.hn(11,"cube")
D.dFt=new C.hn(12,"blur")
D.aAI=new C.hn(13,"dissolve")
D.dFu=new C.hn(14,"wipeLeft")
D.dFv=new C.hn(15,"wipeRight")
D.Pr=new C.hn(17,"push")
D.dFw=new C.hn(18,"flash")
D.aAK=new C.hn(20,"swing")
D.dFx=new C.hn(21,"curtain")
D.O7=w([D.cd,D.db,D.to,D.Gk,D.tp,D.aAL,D.me,D.dFy,D.Gl,D.aAM,D.Pq,D.a1y,D.dFt,D.aAI,D.dFu,D.dFv,D.pr,D.Pr,D.dFw,D.aAJ,D.aAK,D.dFx],x.i)
D.O8=w([D.a1d,D.a1b,D.a14,D.a15,D.a16,D.a19,D.a17,D.a18,D.a1c,D.a1a,D.azO,D.azP,D.azN,D.azM],x.h)
D.cSp=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cSt=w([A.zf,A.hy,A.bT],x.O)
D.e3C=new B.A(A.t_,"Design")
D.efP=new B.A(D.ags,"Word sizes")
D.ecq=new B.A(A.At,"Text")
D.bsb=new B.a0(983182,"MaterialIcons",!1)
D.ecu=new B.A(D.bsb,"Photo")
D.e_d=new B.A(A.l3,"Logo")
D.egT=new B.A(A.EX,"News")
D.cSy=w([D.e3C,D.efP,D.ecq,D.ecu,D.e_d,D.egT],x.f2)
D.cSz=w(["golddust","sparkle","sheen"],x.s)
D.dGV=new C.ek("upload_pdf",K.Lv,"Upload PDF")
D.dG4=new C.ek("sign_paper",A.EU,"Sign Paper")
D.bru=new B.a0(63438,"MaterialIcons",!1)
D.dGR=new C.ek("hd_photo",D.bru,"HD Photo")
D.dFX=new C.ek("sharpen",E.Xr,"Sharpen")
D.dG6=new C.ek("print",K.Lv,"Download PDF")
D.dGy=new C.ek("rotate",D.agd,"Rotate")
D.dGf=new C.ek("text_box",A.At,"Text Box")
D.dGh=new C.ek("picture",A.t2,"Picture")
D.dGd=new C.ek("title",A.xg,"Title")
D.dG9=new C.ek("subtitle",U.ah2,"Subtitle")
D.dGH=new C.ek("bullets",I.XJ,"Bullet List")
D.dGa=new C.ek("numbered",A.Ll,"Numbered")
D.dGK=new C.ek("quote",A1.Al,"Quote")
D.dGm=new C.ek("citation",A.pc,"Citation")
D.dGN=new C.ek("date_stamp",Aw.Xw,"Date Stamp")
D.dGA=new C.ek("page_number",A.xf,"Page #")
D.dGE=new C.ek("header_bar",A.ET,"Header")
D.dGg=new C.ek("footer_bar",P.ahj,"Footer")
D.dG5=new C.ek("divider",A.uA,"Divider")
D.dG1=new C.ek("highlight",A.XO,"Highlight")
D.dGG=new C.ek("redact",A.xj,"Redact")
D.dGt=new C.ek("callout",A.Ah,"Callout")
D.dGP=new C.ek("checkboxes",I.afw,"Checklist")
D.dGq=new C.ek("table",A.Ye,"Table")
D.dGk=new C.ek("memo",I.Y_,"Memo")
D.dGu=new C.ek("letter",A.EF,"Letter")
D.br4=new B.a0(63259,"MaterialIcons",!0)
D.dFW=new C.ek("agenda",D.br4,"Agenda")
D.dG7=new C.ek("toc",Av.agG,"Contents")
D.brq=new B.a0(63406,"MaterialIcons",!1)
D.dGr=new C.ek("sig_line",D.brq,"Sign Line")
D.dFP=new C.ek("initial_line",A.j3,"Initials")
D.dFS=new C.ek("approved",A.l3,"APPROVED")
D.dGw=new C.ek("draft",A.pi,"DRAFT")
D.dGC=new C.ek("confidential",A.j4,"Confidential")
D.dGF=new C.ek("sticky",A.Lz,"Sticky Note")
D.dGO=new C.ek("progress",A.agF,"Progress")
D.bsG=new B.a0(983507,"MaterialIcons",!1)
D.dG2=new C.ek("stars",D.bsG,"Star Rating")
D.dFN=new C.ek("equation",A.agv,"Equation")
D.dFY=new C.ek("timeline",A.LA,"Timeline")
D.dGl=new C.ek("two_col",A.Yg,"Two Columns")
D.dG_=new C.ek("compare",A0.Xz,"Compare")
D.dFL=new C.ek("duplicate_el",A.fD,"Duplicate")
D.dGT=new C.ek("delete_el",A.e7,"Delete")
D.brl=new B.a0(63352,"MaterialIcons",!1)
D.dGJ=new C.ek("bring_fwd",D.brl,"Bring Front")
D.brk=new B.a0(63351,"MaterialIcons",!1)
D.dFQ=new C.ek("send_back",D.brk,"Send Back")
D.dGv=new C.ek("align_left",D.XH,"Align L")
D.dGB=new C.ek("align_center",D.XG,"Align C")
D.dGS=new C.ek("align_right",D.XI,"Align R")
D.dGe=new C.ek("word_count",A_.X8,"Word Count")
D.dGb=new C.ek("link_text",A.hb,"Link")
D.dGz=new C.ek("phone",A.iv,"Phone")
D.dG0=new C.ek("email",A.Aj,"Email")
D.dGU=new C.ek("qr_placeholder",A.j6,"QR Placeholder")
D.dFV=new C.ek("rectangle",A2.Et,"Rectangle")
D.dGp=new C.ek("circle",A.rV,"Circle")
D.dFR=new C.ek("arrow",A.jl,"Arrow")
D.dGI=new C.ek("line",A.uA,"Line")
D.dG3=new C.ek("triangle",A.Xx,"Triangle")
D.brc=new B.a0(63318,"MaterialIcons",!1)
D.dG8=new C.ek("grayscale",D.brc,"Grayscale")
D.dGi=new C.ek("brighten",I.afQ,"Brighten")
D.dGn=new C.ek("flip_h",A.Ew,"Flip H")
D.brj=new B.a0(63348,"MaterialIcons",!1)
D.dGQ=new C.ek("flip_v",D.brj,"Flip V")
D.dGD=new C.ek("cover_page",A.p8,"Cover Page")
D.dFO=new C.ek("invoice",A.fY,"Invoice")
D.dFZ=new C.ek("resume",A.m0,"Resume")
D.dGc=new C.ek("minutes",A.oc,"Minutes")
D.dFT=new C.ek("lab_report",A.Lw,"Lab Report")
D.dFU=new C.ek("rubric",A.x0,"Rubric")
D.dGo=new C.ek("flashcard_tool",P.EO,"Flashcard")
D.dGL=new C.ek("quiz_tool",A.EK,"Quiz Block")
D.dGs=new C.ek("worksheet_tool",L.En,"Worksheet")
D.dGx=new C.ek("outline_share",A.Lx,"Share Outline")
D.dGM=new C.ek("export_json",D.afC,"Export JSON")
D.dFM=new C.ek("new_slide",D.X7,"New Slide")
D.dGj=new C.ek("present",A.pe,"Present")
D.cSY=w([D.dGV,D.dG4,D.dGR,D.dFX,D.dG6,D.dGy,D.dGf,D.dGh,D.dGd,D.dG9,D.dGH,D.dGa,D.dGK,D.dGm,D.dGN,D.dGA,D.dGE,D.dGg,D.dG5,D.dG1,D.dGG,D.dGt,D.dGP,D.dGq,D.dGk,D.dGu,D.dFW,D.dG7,D.dGr,D.dFP,D.dFS,D.dGw,D.dGC,D.dGF,D.dGO,D.dG2,D.dFN,D.dFY,D.dGl,D.dG_,D.dFL,D.dGT,D.dGJ,D.dFQ,D.dGv,D.dGB,D.dGS,D.dGe,D.dGb,D.dGz,D.dG0,D.dGU,D.dFV,D.dGp,D.dFR,D.dGI,D.dG3,D.dG8,D.dGi,D.dGn,D.dGQ,D.dGD,D.dFO,D.dFZ,D.dGc,D.dFT,D.dFU,D.dGo,D.dGL,D.dGs,D.dGx,D.dGM,D.dFM,D.dGj],B.az("P<ek>"))
D.cT3=w([A.cp,A.aj],x.O)
D.dZP=new B.A(4286331629,4292552567)
D.dZC=new B.A(4280640491,4278630100)
D.dZX=new B.A(4294538006,4292943176)
D.dYZ=new B.A(4278556265,4280640491)
D.cNN=w([D.dZP,D.dZC,D.dZX,D.dYZ],x.n)
D.cdg=w([4294626325,4280472558,4294210230],x.t)
D.dFG=new C.nm("colorful","Colorful",A.nx,D.cNN,4294967295,3875536895,D.cdg,D.me)
D.dZq=new B.A(4279522093,4279657780)
D.dZG=new B.A(4281750292,4283268111)
D.dZ1=new B.A(4278603323,4279203438)
D.dZH=new B.A(4282343954,4279599165)
D.co_=w([D.dZq,D.dZG,D.dZ1,D.dZH],x.n)
D.ccZ=w([4288931381,4294829706,4287033260],x.t)
D.dFC=new C.nm("nature","Nature",A.EV,D.co_,4294442727,3874290891,D.ccZ,D.db)
D.dZk=new B.A(4279369771,4283178389)
D.dZh=new B.A(4279179050,4286456526)
D.dZy=new B.A(4280163147,4290648157)
D.dYR=new B.A(4278322711,4285343961)
D.cF0=w([D.dZk,D.dZh,D.dZy,D.dYR],x.n)
D.cdc=w([4294210230,4280472558,4289170426],x.t)
D.dFA=new C.nm("vibe","Vibe",A.XL,D.cF0,4294967295,3874869502,D.cdc,D.to)
D.dZT=new B.A(4290007817,4292552567)
D.dZN=new B.A(4286328082,4294286859)
D.dZS=new B.A(4288485197,4294538006)
D.dZM=new B.A(4285343961,4293675161)
D.bKy=w([D.dZT,D.dZN,D.dZS,D.dZM],x.n)
D.cdh=w([4294829706,4294967295,4284999929],x.t)
D.dFB=new C.nm("celebration","Celebration",A.l_,D.bKy,4294967295,4009752557,D.cdh,D.pr)
D.dZf=new B.A(4279179050,4280171146)
D.dZj=new B.A(4279310375,4280232247)
D.dZ7=new B.A(4278916151,4280172719)
D.dZg=new B.A(4279179050,4281549141)
D.cyu=w([D.dZf,D.dZj,D.dZ7,D.dZg],x.n)
D.ccU=w([4281908728,4294626325,4287931320],x.t)
D.dFF=new C.nm("professional","Professional",A.Af,D.cyu,4294967295,3872118241,D.ccU,D.Pr)
D.dZb=new B.A(4278995566,4278413729)
D.dZ3=new B.A(4278727492,4279137424)
D.dZz=new B.A(4280171146,4278751666)
D.dZc=new B.A(4278995566,4279590517)
D.ch1=w([D.dZb,D.dZ3,D.dZz,D.dZc],x.n)
D.ccX=w([4286436348,4284410580,4294829706],x.t)
D.dFH=new C.nm("ocean","Ocean",I.Yi,D.ch1,4294967295,3873501950,D.ccX,D.tp)
D.dZO=new B.A(4286328082,4294538006)
D.dZQ=new B.A(4286781507,4294677052)
D.dZK=new B.A(4283178389,4294197086)
D.dZR=new B.A(4288295954,4294688548)
D.cuJ=w([D.dZO,D.dZQ,D.dZK,D.dZR],x.n)
D.cdi=w([4294829706,4294967295,4294747557],x.t)
D.dFI=new C.nm("sunset","Sunset",A.LB,D.cuJ,4294967295,4009749973,D.cdi,D.db)
D.e_0=new B.A(4294967295,4294047225)
D.dZW=new B.A(4294507260,4294967295)
D.e__=new B.A(4294967295,4293060848)
D.dZV=new B.A(4294507260,4294047225)
D.cHW=w([D.e_0,D.dZW,D.e__,D.dZV],x.n)
D.ccS=w([4280640491,4279179050,4287931320],x.t)
D.dFE=new C.nm("minimal","Minimal",A2.Et,D.cHW,4279179050,4282865001,D.ccS,D.db)
D.dZa=new B.A(4278979081,4280886564)
D.dZu=new B.A(4280031511,4278979081)
D.dZi=new B.A(4279308561,4281148438)
D.dZ9=new B.A(4278979081,4280031511)
D.cUO=w([D.dZa,D.dZu,D.dZi,D.dZ9],x.n)
D.cd5=w([4292128567,4294829706,4289241758],x.t)
D.dFJ=new C.nm("elegant","Elegant",A.lu,D.cUO,4294898631,3873957348,D.cd5,D.aAI)
D.dZw=new B.A(4280159034,4282058596)
D.dZ6=new B.A(4278916151,4280163147)
D.dZE=new B.A(4281208933,4278916151)
D.dZn=new B.A(4279502891,4283178389)
D.d_R=w([D.dZw,D.dZ6,D.dZE,D.dZn],x.n)
D.cde=w([4294296657,4292128567,4291081725],x.t)
D.dFD=new C.nm("royal","Royal Gold",A.iO,D.d_R,4294965222,3874084351,D.cde,D.me)
D.dYW=new B.A(4278464302,4280163147)
D.dZ5=new B.A(4278916151,4279455306)
D.dZx=new B.A(4280163147,4283040846)
D.dYT=new B.A(4278332450,4281413249)
D.cNv=w([D.dYW,D.dZ5,D.dZx,D.dYT],x.n)
D.ccT=w([4281193663,4289170426,4294210230],x.t)
D.dFK=new C.nm("aurora","Aurora Glow",A.dQ,D.cNv,4293983738,3869766608,D.ccT,D.db)
D.uW=w([D.dFG,D.dFC,D.dFA,D.dFB,D.dFF,D.dFH,D.dFI,D.dFE,D.dFJ,D.dFD,D.dFK],B.az("P<nm>"))
D.b5A=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cTw=w([A.q1,D.b5A,A.q1],x.O)
D.cTL=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cTP=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eck=new B.A("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.e3c=new B.A("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.e7p=new B.A("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dX7=new B.A("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.e68=new B.A("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e4x=new B.A("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.e8x=new B.A("Surprise me","")
D.cUi=w([D.eck,D.e3c,D.e7p,D.dX7,D.e68,D.e4x,D.e8x],x.L)
D.b_N=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b8P=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cUZ=w([A.c,D.b_N,D.b8P],x.O)
D.cWC=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aAh=new C.kF(0,"heritageGold")
D.b4n=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b4o=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.fpD=w([D.b4n,D.b4o,A.au],x.O)
D.dj8=new C.jb("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aAh,4294570461,4284234270,4292128567,D.jo)
D.aAi=new C.kF(1,"heritageCrimson")
D.aZr=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b2X=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b8H=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fpg=w([D.aZr,D.b2X,D.b8H],x.O)
D.dj1=new C.jb("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aAi,4294635750,4285213214,4292912216,D.jo)
D.cWG=w([D.a1d,D.a1b,D.dj8,D.dj1,D.a16,D.a19],x.h)
D.dp0=new C.qT(1,"circuit")
D.dpt=new C.lO("neural","Neural Link","Robotic",D.dp0,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dp_=new C.qT(0,"grid")
D.dpq=new C.lO("signal","Signal Grid","Robotic",D.dp_,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dp5=new C.qT(2,"hexes")
D.dpb=new C.lO("core","Core Protocol","Robotic",D.dp5,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aAF=new C.qT(11,"diagonal")
D.dpm=new C.lO("steel","Steel Tech","Robotic",D.aAF,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aAG=new C.qT(3,"rings")
D.dpa=new C.lO("vault","Vault Gold","Robotic",D.aAG,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dp3=new C.qT(13,"leaves")
D.dpd=new C.lO("forest","Forest Morning","Nature",D.dp3,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aAH=new C.qT(5,"waves")
D.dpk=new C.lO("ocean","Ocean Calm","Nature",D.aAH,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dp6=new C.qT(6,"sunset")
D.dpp=new C.lO("sunset","Sunset Glow","Nature",D.dp6,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dp7=new C.qT(7,"mountains")
D.dpc=new C.lO("mountain","Mountain Air","Nature",D.dp7,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dp8=new C.qT(8,"stars")
D.dpj=new C.lO("night","Night Sky","Nature",D.dp8,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1w=new C.qT(4,"orbs")
D.dph=new C.lO("aurora","Aurora","Nature",D.a1w,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dpr=new C.lO("sand","Sand Dune","Nature",D.aAH,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dp9=new C.qT(9,"rays")
D.dpg=new C.lO("golden","Golden Hour","Warm",D.dp9,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dpe=new C.lO("royal","Royal Purple","Warm",D.aAF,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dpf=new C.lO("rose","Rose Petal","Warm",D.a1w,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dp2=new C.qT(12,"blocks")
D.dpi=new C.lO("electric","Electric Blue","Bold",D.dp2,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dps=new C.lO("mint","Fresh Mint","Bold",D.a1w,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dp4=new C.qT(14,"minimal")
D.dpo=new C.lO("white","Clean White","Clean",D.dp4,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dp1=new C.qT(10,"frame")
D.dpl=new C.lO("midnight","Midnight Gold","Clean",D.dp1,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dpn=new C.lO("community","Community Green","Clean",D.aAG,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_S=w([D.dpt,D.dpq,D.dpb,D.dpm,D.dpa,D.dpd,D.dpk,D.dpp,D.dpc,D.dpj,D.dph,D.dpr,D.dpg,D.dpe,D.dpf,D.dpi,D.dps,D.dpo,D.dpl,D.dpn],B.az("P<lO>"))
D.cX1=w([D.zl,A.w6,A.hy,A.bT],x.O)
D.cXg=w([D.aav,D.iY],x.O)
D.cXp=w(["pdf","docx","txt","md"],x.s)
D.ejX=new B.bz(-3,150,34)
D.ejY=new B.bz(-3,214,62)
D.ejZ=new B.bz(-3,288,62)
D.cYe=w([D.ejX,D.ejY,D.ejZ],B.az("P<+(O,O,O)>"))
D.cYG=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cZd=w(["Write","Design","Print & fold"],x.s)
D.jp=new C.u9(2,"triangle")
D.Bj=new C.u9(3,"arrow")
D.fl=new C.u9(4,"line")
D.jq=new C.u9(5,"parallelogram")
D.cZf=w([D.bc,D.eF,D.jp,D.Bj,D.fl,D.jq,D.kK],x.m)
D.dYa=new B.A(240,96)
D.e_u=new B.A(560,46)
D.cZk=w([D.dYa,D.e_u],x.G)
D.fpO=new C.wQ(0,"classic")
D.dl_=new C.ni("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aAh,4294570461,4282000405,4284234270)
D.dlb=new C.ni("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aAi,4294635750,4281999378,4285213214)
D.dl0=new C.ni("elegant_navy","Umoja Mzuri",y.s,D.a1q,4294967035,4279378237,4290283019)
D.dld=new C.ni("elegant_gold","Umoja wa Dhahabu",y.Q,D.aAq,4294966515,4281016592,4289102906)
D.dlf=new C.ni("kente_sunset","Kente ya Jua",y.H,D.aAj,4294964964,4282000405,4279983648)
D.dkY=new C.ni("indigo_mudcloth","Nguo ya Indigo",y.n,D.aAk,4294439140,4279903102,4279903102)
D.dl2=new C.ni("adinkra_royal","Muhuri wa Adinkra",y.z,D.aAl,4294965484,4285218591,4287322667)
D.dl7=new C.ni("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aAm,4294244340,4279196764,4279196764)
D.dl9=new C.ni("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aAn,4294505710,4279970378,4291058750)
D.fpP=new C.wQ(1,"ringsNdoa")
D.dl1=new C.ni("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qI,4294966259,4279378237,4291404327)
D.fpR=new C.wQ(2,"coupleCards")
D.dlc=new C.ni("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qI,4294966259,4279378237,4291404327)
D.fpS=new C.wQ(3,"kuhoweshaForm")
D.dl8=new C.ni("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Bd,4294966519,4279378237,4291404327)
D.fpT=new C.wQ(4,"mahariPande")
D.dkZ=new C.ni("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qI,4294966259,4279904068,4291404327)
D.fpU=new C.wQ(5,"familiaMti")
D.dle=new C.ni("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aAo,4294966776,4280241466,4291404327)
D.fpV=new C.wQ(6,"ndoaSafi")
D.dl5=new C.ni("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Bd,4294966519,4279378237,4291404327)
D.fpW=new C.wQ(7,"peteWide")
D.dl4=new C.ni("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qI,4294966259,4282001936,4291404327)
D.fpX=new C.wQ(8,"muhuriCrest")
D.dl3=new C.ni("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qI,4294966259,4279378237,4291404327)
D.fpY=new C.wQ(9,"fomuWazi")
D.dl6=new C.ni("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Bd,4294966519,4279904068,4291404327)
D.fpQ=new C.wQ(10,"upendoOrnate")
D.dla=new C.ni("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aAp,4294965493,4286200650,4291404327)
D.Ok=w([D.dl_,D.dlb,D.dl0,D.dld,D.dlf,D.dkY,D.dl2,D.dl7,D.dl9,D.dl1,D.dlc,D.dl8,D.dkZ,D.dle,D.dl5,D.dl4,D.dl3,D.dl6,D.dla],B.az("P<ni>"))
D.Bh=new C.aoE(0,"landscape169")
D.nF=new C.aoE(1,"portrait916")
D.d_1=w([D.Bh,D.nF],B.az("P<aoE>"))
D.at7=w([A.hy,A.bH,A.cP,A.ie,A.c],x.O)
D.tg=w([A.bT,A.j_],x.O)
D.dXs=new B.A(1000,"M")
D.e0v=new B.A(900,"CM")
D.e_p=new B.A(500,"D")
D.dYP=new B.A(400,"CD")
D.dXt=new B.A(100,"C")
D.e0w=new B.A(90,"XC")
D.e_q=new B.A(50,"L")
D.dYQ=new B.A(40,"XL")
D.dXx=new B.A(10,"X")
D.e0G=new B.A(9,"IX")
D.e_E=new B.A(5,"V")
D.e_c=new B.A(4,"IV")
D.dXS=new B.A(1,"I")
D.d_z=w([D.dXs,D.e0v,D.e_p,D.dYP,D.dXt,D.e0w,D.e_q,D.dYQ,D.dXx,D.e0G,D.e_E,D.e_c,D.dXS],x.ek)
D.ekQ=new B.cH(["open",A.j3,"Open & write","Keep writing this book"])
D.ele=new B.cH(["print",A.t5,"Print as a book","Fold and staple it"])
D.d_H=w([D.ekQ,D.ele],B.az("P<+(n,a0,n,n)>"))
D.d0j=w([D.a1y,D.me,D.Gl,D.Pr,D.db,D.Pq],x.i)
D.ecO=new B.A(-1,"Small")
D.dXg=new B.A(0,"Normal")
D.dXR=new B.A(1,"Big")
D.dYo=new B.A(2,"Huge")
D.d0I=w([D.ecO,D.dXg,D.dXR,D.dYo],x.ek)
D.d16=w([49,65,89,38,83,89],x.t)
D.d1d=w([A.w6,A.hy,A.bT],x.O)
D.d1D=w([D.db,D.me,D.to,D.a1y,D.Gl,D.Pr],x.i)
D.ayo=new B.dX([0,D.Jv,8,D.abE,12,D.abF],B.az("dX<I,a1V>"))
D.dKx={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b8A=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cyE=w([A.bH,D.b8A],x.O)
D.cRz=w([A.be,A.bk],x.O)
D.cMI=w([A.bU,A.aY,A.cz],x.O)
D.d_I=w([A.cp,A.bt],x.O)
D.cFQ=w([A.b6,A.fc],x.O)
D.cPc=w([A.b3,A.eZ],x.O)
D.b2J=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cOx=w([D.b2J,A.o_],x.O)
D.cJs=w([A.hl,A.u6],x.O)
D.cFG=w([A.br,A.cb],x.O)
D.d4d=new B.bs(D.dKx,[D.cyE,H.ajX,D.cRz,D.cMI,D.d_I,D.cFQ,D.cPc,D.cOx,D.cJs,D.cFG],B.az("bs<n,ak<x>>"))
D.dJL={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a0q=new B.bs(D.dJL,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bs<n,n>"))
D.a0w=new B.bs(A.iz,[],B.az("bs<I,+icon3d,picture(n?,n?)>"))
D.d87=new F.Lo(30,null)
D.ddh=new F.m7("Chapter 1","","","")
D.cZO=w([D.ddh],x.B)
D.ddl=new F.qJ("My Book","","",D.cZO,E.azD)
D.ddj=new F.u_("starry",null,null,null,null,"","","")
D.ddm=new F.qJ("Dream Big","","",E.a_B,D.ddj)
D.ddk=new F.u_("story",null,null,null,null,"","","")
D.ddn=new F.qJ("Little Lion","","",E.a_B,D.ddk)
D.ddi=new F.u_("vintage",null,null,null,null,"","","")
D.ddo=new F.qJ("Our Story","","",E.a_B,D.ddi)
D.dgo=new C.Do("","NGMY","","")
D.dnE=new C.yB("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dFz=new C.aZ_(null,null,null,null)
D.dHh=new C.aoJ(null)
D.dHu=new C.ape(0,"smaller")
D.dHv=new C.ape(1,"bigger")
D.aAV=new C.ape(2,"fit")
D.dMQ=new B.u(3,6)
D.dN_=new B.u(4,8)
D.dQd=new B.C(E.acq,U.a8b,null)
D.dQh=new B.C(A.Vc,A.lL,null)
D.btW=new B.ad(A.mJ,16,A.c2,null,null,null)
D.dQl=new B.C(A.kx,D.btW,null)
D.aYV=new B.fd(2.2,null,null,null,null,A.c,null,null,null,null)
D.dQv=new B.C(A.E0,D.aYV,null)
D.bDV=new B.ad(A.ct,16,A.az,null,null,null)
D.dQz=new B.C(A.eh,D.bDV,null)
D.eYm=new B.w("Play",null,A.oy,null,null,null,null,null,null,null,null,null)
D.cRO=w([V.aiq,A.qU,D.eYm],x.p)
D.ep2=new B.cC(A.b0,A.e,A.R,A.m,null,A.p,null,0,D.cRO,null)
D.dQC=new B.C(A.p4,D.ep2,null)
D.aZ3=new B.fd(2.4,null,null,null,null,null,null,null,null,null)
D.etU=new B.a5(20,20,D.aZ3,null)
D.dQH=new B.C(A.kx,D.etU,null)
D.f5K=new B.w("Seconds per slide",null,A.hg,null,null,null,null,null,null,null,null,null)
D.dQO=new B.C(A.bl,D.f5K,null)
D.dRO=new C.a6E(2,"print")
D.dRR=new B.iH(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dTt=new B.h0("/Annot")
D.dTv=new B.h0("/URI")
D.eT8=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dVd=new B.jd("share",48,D.eT8,null,B.az("jd<n>"))
D.bDQ=new B.ad(A.dQ,14,A.ex,null,null,null)
D.dVm=new B.cG(null,-2,-2,null,null,null,D.bDQ,null)
D.b5X=new B.x(0.3333333333333333,0,0,0,A.t)
D.cAu=w([D.b5X,A.K],x.O)
D.bJo=new B.a3(A.a4,A.a7,A.w,D.cAu,null,null)
D.aS8=new B.o(null,null,null,null,null,D.bJo,A.n)
D.bcE=new B.kC(D.aS8,A.bb,null,null)
D.dVy=new B.cG(0,0,null,0,8,null,D.bcE,null)
D.cVI=w([A.hO,A.o0,A.cj],x.O)
D.dWb=new B.bR(A.A,0.5,A.w,null,0,D.cVI,null,null)
D.dYh=new B.A(0.22,A.bk)
D.e0Z=new B.A("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.e2S=new B.A(0.5,A.hw)
D.eby=new B.A(0.78,A.aS)
D.ekH=new B.cH([A.bB,0.22,0.7,2.6])
D.ekM=new B.cH([A.b6,0.36,1.2,1.3])
D.ekS=new B.cH([A.dI,0.28,0.2,0.4])
D.ekY=new B.cH([A.cE,0.05,0.3,0.35])
D.el3=new B.cH([A.br,0.28,0.9,0])
D.elb=new B.cH([A.aB,-0.25,-0.15,0.45])
D.elX=new B.cH([A.bU,0.42,1,4.1])
D.eoM=new B.a7w(9)
D.bv1=new B.ad(A.EX,28,A.cz,null,null,null)
D.f6f=new B.w("NGMY News",null,A.dO,null,null,null,null,null,null,null,null,null)
D.bm9=new B.bH(1,A.bo,D.f6f,null)
D.cYJ=w([D.bv1,A.aw,D.bm9],x.p)
D.eoY=new B.cC(A.b0,A.e,A.j,A.m,null,A.p,null,0,D.cYJ,null)
D.bvc=new B.ad(A.pc,16,A.c,null,null,null)
D.f7A=new B.w("Book",null,A.qY,null,null,null,null,null,null,null,null,null)
D.d1c=w([D.bvc,A.eA,D.f7A],x.p)
D.ep4=new B.cC(A.b0,A.e,A.R,A.m,null,A.p,null,0,D.d1c,null)
D.bBw=new B.ad(A.j4,10,A.c,null,null,null)
D.eWC=new B.w("Pro",null,A.mV,null,null,null,null,null,null,null,null,null)
D.cRT=w([D.bBw,A.ve,D.eWC],x.p)
D.ep7=new B.cC(A.b0,A.e,A.R,A.m,null,A.p,null,0,D.cRT,null)
D.f5J=new B.w("Make a newspaper",null,Ap.Rf,null,null,null,null,null,null,null,null,null)
D.bKw=w([E.YD,A.aa,D.f5J],x.p)
D.ep8=new B.cC(A.b0,A.e,A.R,A.m,null,A.p,null,0,D.bKw,null)
D.bA7=new B.ad(A.l_,18,A.bH,null,null,null)
D.eYA=new B.w("Ending celebration",null,A.ja,null,null,null,null,null,null,null,null,null)
D.cXP=w([D.bA7,A.bp,D.eYA],x.p)
D.epb=new B.cC(A.b0,A.e,A.j,A.m,null,A.p,null,0,D.cXP,null)
D.bBi=new B.ad(A.j3,18,A.kt,null,null,null)
D.eEc=new B.F(!0,A.kt,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7Q=new B.w("Write",null,D.eEc,null,null,null,null,null,null,null,null,null)
D.cHL=w([D.bBi,A.aa,D.f7Q],x.p)
D.epg=new B.cC(A.b0,A.e,A.R,A.m,null,A.p,null,0,D.cHL,null)
D.eWB=new B.w("Download picture",null,A.pD,null,null,null,null,null,null,null,null,null)
D.bnV=new B.pO(A.eb,A.A,A.h,D.eWB,null)
D.bo5=new B.dm(1,A.cl,D.bnV,null)
D.cSe=w([K.aig,A.aa,D.bo5],x.p)
D.eph=new B.cC(A.b0,A.b7,A.j,A.m,null,A.p,null,0,D.cSe,null)
D.bwX=new B.ad(A.EX,22,A.cz,null,null,null)
D.f4t=new B.w("NGMY NEWS",null,H.a4b,null,null,null,null,null,null,null,null,null)
D.cA_=w([D.bwX,A.aa,D.f4t],x.p)
D.epp=new B.cC(A.b0,A.e,A.R,A.m,null,A.p,null,0,D.cA_,null)
D.epA=new B.oG(!1,!1,null,U.T5,null,A.bX,null,null,null)
D.a3c=new B.jE([D.cd,D.db,D.to,D.Gk,D.tp,D.aAL],B.az("jE<hn>"))
D.dLE={title:0,quote:1,closing:2,bio:3}
D.eqm=new B.f9(D.dLE,4,x.M)
D.dK1={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eqo=new B.f9(D.dK1,5,x.M)
D.dLb={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a3d=new B.f9(D.dLb,8,x.M)
D.dKF={Design:0,Transitions:1,Insert:2}
D.eqs=new B.f9(D.dKF,3,x.M)
D.fq5=new B.jE([D.a1z],B.az("jE<vj>"))
D.dKM={float3d:0,drift:1,pulse:2}
D.eqv=new B.f9(D.dKM,3,x.M)
D.aHH=new B.jE([D.Gh,D.Gi,D.Gj],B.az("jE<mb>"))
D.dJZ={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aHK=new B.f9(D.dJZ,14,x.M)
D.fq6=new B.f9(A.iz,0,B.az("f9<vj>"))
D.dKJ={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Qo=new B.f9(D.dKJ,4,x.M)
D.dJT={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aHM=new B.f9(D.dJT,30,x.M)
D.dKR={circle:0,triangle:1,hexagon:2,diamond:3}
D.eqL=new B.f9(D.dKR,4,x.M)
D.esT=new B.as(390,844)
D.etE=new B.a5(20,20,A4.IC,null)
D.aIx=new B.a5(null,2.5,null,null)
D.etO=new B.a5(18,18,A4.IC,null)
D.bBm=new B.ad(A.iO,19,A.c,null,null,null)
D.etZ=new B.a5(38,38,D.bBm,null)
D.bzJ=new B.ad(A.xn,22,A.c,null,null,null)
D.eu0=new B.a5(40,40,D.bzJ,null)
D.euy=new B.hJ(2,10,10,1.15,null)
D.aIF=new B.hJ(2,16,14,0.62,null)
D.euT=new Aj.b2T(170,20,16,0.52,null)
D.bki=new B.N(32,30,32,40)
D.b_c=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.buZ=new B.ad(A.p8,56,D.b_c,null,null,null)
D.ab_=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eG9=new B.F(!0,D.ab_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new B.w("Your books will live here.",null,D.eG9,null,A.L,null,null,null,null,null,null,null)
D.cKl=w([D.buZ,A.T,D.f1H],x.p)
D.bbR=new B.fm(A.ak,A.e,A.j,A.m,null,A.p,null,0,D.cKl,null)
D.dQM=new B.C(D.bki,D.bbR,null)
D.euV=new B.lR(D.dQM,null)
D.f1E=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.evc=new B.b_(D.f1E,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f_S=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.evd=new B.b_(D.f_S,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f4v=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.evm=new B.b_(D.f4v,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f5_=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.evB=new B.b_(D.f5_,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eZF=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.evO=new B.b_(D.eZF,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.fbu=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ew6=new B.b_(D.fbu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f8Q=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ewh=new B.b_(D.f8Q,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f57=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ewY=new B.b_(D.f57,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eV_=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.exd=new B.b_(D.eV_,null,null,null,null,null,null,null,A.ia,null,null,null,null,A.oZ,!1,null,null,null,A.q,null)
D.eWI=new B.w("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.exv=new B.b_(D.eWI,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f1m=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.exx=new B.b_(D.f1m,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f13=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.exy=new B.b_(D.f13,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f6X=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.exz=new B.b_(D.f6X,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRo=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.exI=new B.b_(D.eRo,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eXM=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ey4=new B.b_(D.eXM,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.fal=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ey6=new B.b_(D.fal,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f9Y=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eya=new B.b_(D.f9Y,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQu=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eyc=new B.b_(D.eQu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f6a=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eyl=new B.b_(D.f6a,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f9y=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eyA=new B.b_(D.f9y,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f9p=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eyC=new B.b_(D.f9p,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQm=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eyI=new B.b_(D.eQm,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eU2=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.ez9=new B.b_(D.eU2,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f8D=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ezk=new B.b_(D.f8D,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTR=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ezz=new B.b_(D.eTR,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b5k=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cyS=w([A.ie,A.o_,D.b5k,D.a8u,A.ie],x.O)
D.ezX=new B.fN(A.A,0,6.283185307179586,A.w,D.cyS,null,null)
D.cH2=w([A.bH,A.bT,A.hy,D.zl,A.bH],x.O)
D.aJe=new B.fN(A.A,0,6.283185307179586,A.w,D.cH2,null,null)
D.cTJ=w([A.bU,A.bB,A.b6,A.bh,A.cz,A.bU],x.O)
D.eA1=new B.fN(A.A,0,6.283185307179586,A.w,D.cTJ,null,null)
D.cAI=w([A.oX,A.o1,A.zc,A.ie,A.oX],x.O)
D.eA2=new B.fN(A.A,0,6.283185307179586,A.w,D.cAI,null,null)
D.cTD=w([A.aN,A.bI,A.aJ,A.aj,A.aN],x.O)
D.eA3=new B.fN(A.A,0,6.283185307179586,A.w,D.cTD,null,null)
D.d_q=w([A.br,A.b6,A.bB,A.bU,A.br],x.O)
D.eA5=new B.fN(A.A,0,6.283185307179586,A.w,D.d_q,null,null)
D.b5z=new B.x(1,0,1,1,A.t)
D.b0i=new B.x(1,1,0,1,A.t)
D.cWU=w([A.CX,A.a9X,H.a96,D.b5z,H.a9r,D.b0i,A.CX],x.O)
D.eA6=new B.fN(A.A,0,6.283185307179586,A.w,D.cWU,null,null)
D.eAl=new C.atc(2,"immersiveSticky")
D.eAm=new C.atc(3,"edgeToEdge")
D.eAn=new C.atc(4,"manual")
D.eCy=new B.F(!0,A.nV,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJK=new B.F(!0,A.fj,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD4=new B.F(!0,E.mx,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEt=new B.F(!0,A.af,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFs=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFB=new B.F(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFW=new B.F(!0,A.ex,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHc=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHl=new B.F(!0,A.j1,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHy=new B.r1(!0,A.GD,null,null,null,null,A.dm,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI0=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIB=new B.F(!0,A.j0,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new B.F(!0,A.az,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dRU=new B.iH(1,1,0.7568627450980392,0.027450980392156862)
D.eJ0=new B.r1(!0,D.dRU,null,null,null,null,A.dm,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa2=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aKr=new B.F(!0,D.aa2,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ6=new B.F(!0,D.ab_,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ7=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKt=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJH=new B.r1(!0,A.op,null,null,null,null,A.dm,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK_=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Rb=new B.F(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKv=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKx=new B.F(!0,D.aa2,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hq=new B.F(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL0=new B.F(!0,A.bT,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL8=new B.F(!0,A.bI,null,null,null,null,14,A.a3,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLb=new B.F(!0,A.bH,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLr=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ar3,null,null,null)
D.eLt=new B.F(!0,A.cD,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLv=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLH=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLS=new B.F(!0,A.dB,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMp=new B.F(!0,A.aQ,null,null,null,null,null,A.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMy=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMN=new B.F(!0,A.af,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL1=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL3=new B.F(!0,A.c2,null,null,null,null,11.5,A.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b9S=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eOw=new B.F(!0,D.b9S,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLb=new B.F(!0,E.mx,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOZ=new B.F(!0,A.bI,null,null,null,null,11,A.a3,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP1=new B.F(!0,O.kV,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eId=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new B.w("NEW",null,D.eId,null,null,null,null,null,null,null,null,null)
D.eQp=new B.w("Hati ya Kuhowesha",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eQP=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eR8=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eRN=new B.w("Big quote mark",null,A.iB,null,null,null,null,null,null,null,null,null)
D.eRQ=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eS0=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eSs=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eSt=new B.w("How many slides?",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eT_=new B.w("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eEf=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTj=new B.w("Luxury FX",null,D.eEf,null,null,null,null,null,null,null,null,null)
D.eTB=new B.w("Font",null,A.qZ,null,null,null,null,null,null,null,null,null)
D.eTM=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eTS=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eO3=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU_=new B.w("Example  GA847",null,D.eO3,null,null,null,null,null,null,null,null,null)
D.eUo=new B.w("Design shapes",null,A.iB,null,null,null,null,null,null,null,null,null)
D.eUw=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eUA=new B.w("Non-stop (loop)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eUO=new B.w("Hati ya Kuhoweya",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eV6=new B.w("Photo studio",null,A.fS,null,null,null,null,null,null,null,null,null)
D.eVw=new B.w("Add your picture",null,A.la,null,null,null,null,null,null,null,null,null)
D.eHz=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVx=new B.w("Enter document code",null,D.eHz,null,A.L,null,null,null,null,null,null,null)
D.eVy=new B.w("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.eVD=new B.w("English",null,null,null,null,null,null,null,null,null,null,null)
D.eFh=new B.F(!0,E.mx,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVV=new B.w("Delete this book?",null,D.eFh,null,A.L,null,null,null,null,null,null,null)
D.eJx=new B.F(!0,E.mx,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWK=new B.w("Your library",null,D.eJx,null,null,null,null,null,null,null,null,null)
D.eWO=new B.w("Delete",null,A.aKk,null,null,null,null,null,null,null,null,null)
D.eWQ=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ao.Ho,null,null,null,null,null,null,null,null,null)
D.eX_=new B.w("Element flies in",null,A.aKx,null,null,null,null,null,null,null,null,null)
D.Rs=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eXm=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eXF=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new B.w("Cancel",null,E.aKH,null,null,null,null,null,null,null,null,null)
D.eXL=new B.w("The lines and circles that come with the design",null,A.ht,null,null,null,null,null,null,null,null,null)
D.eMV=new B.F(!0,A.fJ,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYa=new B.w("DOCUMENT CODE",null,D.eMV,null,null,null,null,null,null,null,null,null)
D.eYU=new B.w("Quotes",null,G.a4N,null,null,null,null,null,null,null,null,null)
D.eH_=new B.F(!0,O.kV,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ1=new B.w("Add a picture",null,D.eH_,null,null,null,null,null,null,null,null,null)
D.eZ8=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,R.aKm,null,A.L,null,null,null,null,null,null,null)
D.eZb=new B.w("Look & feel",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eZf=new B.w("Rings",null,A.ja,null,null,null,null,null,null,null,null,null)
D.eZk=new B.w("W",null,A.qZ,null,null,null,null,null,null,null,null,null)
D.eZt=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eZK=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a4y,null,A.L,null,null,null,null,null,null,null)
D.eZM=new B.w("Write your book",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f_s=new B.w("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.f_G=new B.w("Malipo ya Awamu ya Mahari",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eHo=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_T=new B.w("Create with AI",null,D.eHo,null,A.L,null,null,null,null,null,null,null)
D.f0k=new B.w("Apply look",null,A.ja,null,null,null,null,null,null,null,null,null)
D.eI5=new B.F(!0,A.el,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f15=new B.w("Type your presentation below",null,D.eI5,null,A.L,null,null,null,null,null,null,null)
D.f18=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aLd,null,A.L,null,null,null,null,null,null,null)
D.f1a=new B.w("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eDj=new B.F(!0,A.cC,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1h=new B.w("Done",null,D.eDj,null,null,null,null,null,null,null,null,null)
D.f1A=new B.w("Delete",null,A.mW,null,null,null,null,null,null,null,null,null)
D.f1J=new B.w("Hati ya Kiapo cha Uongozi",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eGp=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2z=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.eGp,null,A.L,null,null,null,null,null,null,null)
D.f2U=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.f3_=new B.w("Layout",null,A.Rh,null,null,null,null,null,null,null,null,null)
D.f3A=new B.w("Print",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f3E=new B.w("X",null,A.qZ,null,null,null,null,null,null,null,null,null)
D.f4c=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.a4r,null,null,null,null,null,null,null,null,null)
D.f4H=new B.w("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new B.w("Hati ya Kuhowa",null,A.hh,null,null,null,null,null,null,null,null,null)
D.f4U=new B.w("Choose a class template",null,A.hh,null,null,null,null,null,null,null,null,null)
D.f4W=new B.w("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f51=new B.w("Download the newspaper picture",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f5c=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.f5j=new B.w("Done",null,A.aL0,null,null,null,null,null,null,null,null,null)
D.f5t=new B.w("Ending celebration",null,A.dO,null,null,null,null,null,null,null,null,null)
D.f5u=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.f5H=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a4f,null,null,null,null,null,null,null,null,null)
D.f6x=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.f6y=new B.w("What would you like to do?",null,D.aKr,null,null,null,null,null,null,null,null,null)
D.f6C=new B.w("Delete",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f73=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.f77=new B.w("Hati (Documents)",null,A.hh,null,null,null,null,null,null,null,null,null)
D.f7j=new B.w("Done",null,A.kO,null,null,null,null,null,null,null,null,null)
D.eNV=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7n=new B.w("Delete presentation?",null,D.eNV,null,A.L,null,null,null,null,null,null,null)
D.f7E=new B.w("After the last slide it starts again from the first",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f7O=new B.w("\ud83c\udf33",null,A.Hl,null,A.L,null,null,null,null,null,null,null)
D.f85=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f8c=new B.w("Transfer document",null,A.ow,null,null,null,null,null,null,null,null,null)
D.f8m=new B.w("Add to the slides",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f8H=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.f8W=new B.w("Make a book",null,I.aK0,null,null,null,null,null,null,null,null,null)
D.f9_=new B.w("Books",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eGV=new B.F(!0,A.aj,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f90=new B.w("Keep this page open until it finishes.",null,D.eGV,null,null,null,null,null,null,null,null,null)
D.f93=new B.w("Making your video",null,A.dO,null,null,null,null,null,null,null,null,null)
D.f98=new B.w("LANGUAGE",null,D.Rb,null,null,null,null,null,null,null,null,null)
D.f9f=new B.w("Use this ending",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f9n=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.f9o=new B.w("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.f9E=new B.w("Delete from the database?",null,A.la,null,null,null,null,null,null,null,null,null)
D.f9G=new B.w("H",null,A.qZ,null,null,null,null,null,null,null,null,null)
D.fa1=new B.w("NGMY Quotes",null,A.dO,null,null,null,null,null,null,null,null,null)
D.faq=new B.w("Cover",null,D.aLb,null,null,null,null,null,null,null,null,null)
D.fau=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fav=new B.w("Each page becomes its own slide you can present",null,A.ht,null,null,null,null,null,null,null,null,null)
D.faQ=new B.w("Y",null,A.qZ,null,null,null,null,null,null,null,null,null)
D.fb0=new B.w("Crop the picture",null,A.kO,null,null,null,null,null,null,null,null,null)
D.fb5=new B.w("Edit text",null,A.Hm,null,null,null,null,null,null,null,null,null)
D.fdg=B.dN("a6r")
D.Cc=new C.auv(0,"none")
D.aMI=new C.auv(1,"zipCrypto")
D.aMJ=new C.auv(2,"aes")
D.ffI=new F.NO("","",null)
D.fgO=new C.b93(null)
D.fhR=new C.XM(null)
D.fiW=new C.aba(null)
D.fiY=new C.aBy(null)
D.flJ=new C.Z0(null)
D.fm6=new C.Zw(null)
D.fmp=new C.bqn(null)})();(function staticFields(){$.fWm=null
$.fWn=null
$.fWo=null
$.fWp=null
$.fEN=B.uw("_lastQuoRemDigits")
$.fEO=B.uw("_lastQuoRemUsed")
$.auR=B.uw("_lastRemUsed")
$.fEP=B.uw("_lastRem_nsh")
$.pE=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a5h=B.T(x.N,x.I)
$.fCm=!1
$.h04=B.T(B.az("kF"),x.N)
$.h0h=B.T(B.az("kF"),x.E)
$.fZh=!1
$.bvZ="q"
$.OL=0
$.BD=B.T(x.N,B.az("ak<yD>"))
$.fZE=!1
$.fGm=!1
$.h4O=null
$.hyA=B.T(x.N,B.az("aw<n?>"))
$.IY=""
$.iS=0
$.fTa=function(){var w=x.N
return B.T(w,w)}()
$.fT9=B.T(x.N,x.R)
$.fGH=!1
$.adN=B.T(x.N,x.E)
$.fHt=0
$.bh2=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hXo","BZ",()=>C.b6B(0))
w($,"hXm","a0K",()=>C.b6B(1))
w($,"hXn","h8m",()=>C.b6B(2))
w($,"hXl","fL6",()=>$.a0K().ue(0))
w($,"hXj","h8k",()=>C.b6B(1e4))
w($,"hXk","h8l",()=>B.D6(8))
w($,"hTb","h6n",()=>B.D6(0))
w($,"hTj","h6r",()=>B.D6(0))
w($,"hTi","h6q",()=>B.bTC(0))
w($,"i01","hal",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a0q.gdH(D.a0q),v=v.gah(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"i0r","bAo",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mz(new C.fo0(),v,"biz_plan_blue","Business Plan",B.a([B.aY(u),B.aY(t)],h)),C.mz(new C.fo1(),v,"exec_summary","Executive",B.a([B.aY(s),B.aY(t)],h)),C.mz(new C.fo2(),v,"teal_corporate","Teal Corp",B.a([B.aY(r),B.aY(4279310375)],h)),C.mz(new C.fod(),q,"geometric_overlap","Geometric",B.a([B.aY(4279203438),B.aY(u)],h)),C.mz(new C.foi(),p,"midnight_cyan","Midnight Cyan",B.a([B.aY(o),B.aY(n)],h)),C.mz(new C.foj(),q,"diagonal_hero","Diagonal Hero",B.a([B.aY(m),B.aY(l)],h)),C.mz(new C.fok(),v,"swot_grid","SWOT Grid",B.a([B.aY(u),B.aY(4278556265)],h)),C.mz(new C.fol(),v,"layered_chevrons","Chevrons",B.a([B.aY(4280172719),B.aY(k)],h)),C.mz(new C.fom(),q,"split_triangle","Split Panel",B.a([B.aY(s),B.aY(t)],h)),C.mz(new C.fon(),v,"corporate_navy","Navy Pro",B.a([B.aY(4278982953),B.aY(4282090230)],h)),C.mz(new C.foo(),p,"cyan_slash","Cyan Slash",B.a([B.aY(o),B.aY(4278630100)],h)),C.mz(new C.fo3(),p,"crimson_impact","Crimson",B.a([B.aY(4282714634),B.aY(4292617766)],h)),C.mz(new C.fo4(),q,"ocean_waves","Ocean Waves",B.a([B.aY(4278413729),B.aY(4286436348)],h)),C.mz(new C.fo5(),p,"mono_geometric","Mono Geo",B.a([B.aY(o),B.aY(n)],h)),C.mz(new C.fo6(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aY(4280031511),B.aY(4293571336)],h)),C.mz(new C.fo7(),q,"hex_infographic","Hex Stack",B.a([B.aY(r),B.aY(4284410580)],h)),C.mz(new C.fo8(),q,"photo_banner","Photo Banner",B.a([B.aY(m),B.aY(4281908728)],h)),C.mz(new C.fo9(),v,"process_steps","Process",B.a([B.aY(s),B.aY(k)],h)),C.mz(new C.foa(),"Minimal","grid_modern","Grid Modern",B.a([B.aY(l),B.aY(t)],h)),C.mz(new C.fob(),"Luxury","platinum_frame","Platinum",B.a([B.aY(4282865001),B.aY(4293060848)],h)),C.mz(new C.foc(),v,"agenda_cards","Agenda Cards",B.a([B.aY(u),B.aY(4292602622)],h)),C.mz(new C.foe(),q,"headline_orange","Headline Orange",B.a([B.aY(j),B.aY(i)],h)),C.mz(new C.fof(),q,"infographic_teal","Infographic",B.a([B.aY(r),B.aY(j)],h)),C.mz(new C.fog(),q,"content_year","Year Feature",B.a([B.aY(j),B.aY(t)],h)),C.mz(new C.foh(),q,"photo_cta","Photo CTA",B.a([B.aY(m),B.aY(i)],h))],B.az("P<Dx>"))})
w($,"i04","han",()=>B.ae("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["Ug8EVhkOIeYW+4dVmef6sD2120I="]=a.current})($__dart_deferred_initializers__);