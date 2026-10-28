((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tC(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fSd(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jf(d){var w
if(d===0)return $.CF()
if(d===1)return $.a1W()
if(d===2)return $.hm8()
if(Math.abs(d)<4294967296)return C.b8C(A.o.N(d))
w=C.hGL(d)
return w},
b8C(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tC(4,w)
return new C.nP(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tC(1,w)
return new C.nP(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tC(2,w)
return new C.nP(v===0?!1:s,w,v)}v=A.o.an(A.o.gajf(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tC(v,w)
return new C.nP(v===0?!1:s,w,v)},
hGL(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CF()
w=$.hm7()
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
if(s<0)p=q.mk(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fSe(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
h93(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fC(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
h8Z(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fSe(d,e,s,g)
w=e+s+1
C.h93(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hGO(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fC(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fC(u,r)}w&2&&B.aj(g)
g[n]=o},
cD9(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hGM(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b8D(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h94(d,e,f,g,h,i){var w,v,u,t,s,r
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
hGN(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e3((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nP:function nP(d,e,f){this.a=d
this.b=e
this.c=f},
cDa:function cDa(){},
cDb:function cDb(){},
cDc:function cDc(d,e){this.a=d
this.b=e},
cDd:function cDd(d){this.a=d},
aQb:function aQb(d,e){this.a=d
this.b=e},
fZZ(d,e,f){var w=new C.Rc(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rc:function Rc(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a36:function a36(d,e){this.a=d
this.b=e},
bGh:function bGh(d){this.a=d
this.c=this.b=0},
hpl(){return new C.bEE()},
bEE:function bEE(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cvk:function cvk(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hGt(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcU4(d)))
v=f*2+2
u=C.h6H(C.h6J(),64)
t=new C.cfj(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cfk(e,1000,v)
s=new Uint8Array(v)
return A.aG.dq(s,0,t.cHB(w,0,s,0))},
cvi:function cvi(d,e){this.c=d
this.d=e},
aw1:function aw1(d,e){this.a=d
this.b=e},
cvl:function cvl(d,e,f,g){var _=this
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
b7j:function b7j(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cvj:function cvj(){this.a=$},
h8t(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hp4(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDe:function bDe(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fXL(d,e){e&=31
return(d&$.q_[e])<<e>>>0},
nn(d,e){e&=31
return(d>>>e|C.fXL(d,32-e))>>>0},
h6I(d){var w,v=new C.arJ()
if(B.iF(d))v.aJ3(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h6J(){var w=C.h6I(0),v=new Uint8Array(4),u=x.S
u=new C.cfl(w,v,A.DF,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lu(0)
return u},
h6H(d,e){var w=new C.cfh(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cfg:function cfg(){},
cfk:function cfk(d,e,f){this.a=d
this.b=e
this.c=f},
cfe:function cfe(){},
arI:function arI(d){this.a=d},
cfj:function cfj(d){this.a=$
this.b=d
this.c=$},
cff:function cff(){},
cfd:function cfd(){},
arJ:function arJ(){this.b=this.a=$},
cfi:function cfi(){},
cfl:function cfl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cfh:function cfh(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cfc:function cfc(){},
cfb:function cfb(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bMo:function bMo(){},
bMp:function bMp(d){this.a=d},
hJG(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8S:function b8S(){},
cpi:function cpi(){},
bNh:function bNh(d,e){this.a=d
this.b=!1
this.c=e},
bNi:function bNi(){},
hSx(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
auF(d){var w=0,v=B.j(x.H),u
var $async$auF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eSu?2:4
break
case 2:w=5
return B.b(A.k2.fV("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$auF)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k2.fV("SystemChrome.setEnabledSystemUIOverlays",C.hSx(null),u),$async$auF)
case 6:case 3:return B.h(null,v)}})
return B.i($async$auF,v)},
auI:function auI(d,e){this.a=d
this.b=e},
a7I:function a7I(d){this.a=d},
fOc(d,e){return new C.aUE(e,d,null)},
aUE:function aUE(d,e,f){this.e=d
this.c=e
this.a=f},
azz:function azz(d,e,f,g,h){var _=this
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
hV8(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fon(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bu(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fon:function fon(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
amB(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$amB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ag4("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$amB)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cD(t,new C.bXU(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bXV())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amB,v)},
amD(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amB(),$async$amD)
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
return B.b(B.nm("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$amD)
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
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$amD)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amD,v)},
bXW(d){return C.huM(d)},
huM(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bXW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ag4("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hJ),$async$bXW)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vj(B.a1(q,x.N,x.z))
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
return B.i($async$bXW,v)},
amC(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amB(),$async$amC)
case 3:r=f
if(r==null){u=!1
w=1
break}J.no(r,new C.bXX(d))
w=4
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$amC)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOc("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$amC)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amC,v)},
bXU:function bXU(){},
bXV:function bXV(){},
bXX:function bXX(d){this.a=d},
i44(d,e,f){return B.bV(A.K,null,new C.fE9(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fE9:function fE9(d,e,f){this.a=d
this.b=e
this.c=f},
a09:function a09(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHY:function aHY(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f2y:function f2y(d,e){this.a=d
this.b=e},
f2C:function f2C(d){this.a=d},
f2D:function f2D(d){this.a=d},
f2E:function f2E(d,e,f){this.a=d
this.b=e
this.c=f},
f2z:function f2z(d){this.a=d},
f2A:function f2A(d){this.a=d},
f2B:function f2B(d,e){this.a=d
this.b=e},
f2t:function f2t(d){this.a=d},
f2r:function f2r(d){this.a=d},
f2s:function f2s(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2v:function f2v(d){this.a=d},
f2I:function f2I(d,e){this.a=d
this.b=e},
f2H:function f2H(d,e){this.a=d
this.b=e},
f2x:function f2x(d,e,f){this.a=d
this.b=e
this.c=f},
f2w:function f2w(d,e,f){this.a=d
this.b=e
this.c=f},
f2F:function f2F(d,e){this.a=d
this.b=e},
f2G:function f2G(d,e){this.a=d
this.b=e},
f2L:function f2L(d){this.a=d},
f2M:function f2M(d,e){this.a=d
this.b=e},
f2K:function f2K(d,e){this.a=d
this.b=e},
f2J:function f2J(){},
hbs(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cD(v,new C.f9L(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a2<J.E>")
v=B.B(new B.a2(v,new C.f9M(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a17(d){return C.hWo(d)},
hWo(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a17=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fqU(n)
t=4
j=m
i=C
w=7
return B.b(B.a1H("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a17)
case 7:j.$1(i.hbs(f))
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
return B.b(B.az(),$async$a17)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hbs(B.aT(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.f9U(d),$async$a17)
case 13:p=j.B(new i.a2(h,new g.fqS(f),o),o.k("J.E"))
A.d.b_(p,new C.fqT())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a17,v)},
agE(d,e){return C.i3K(d,e)},
i3K(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agE=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fDE(),x.P)
n=B.B(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agw("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agE)
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
return B.b(B.az(),$async$agE)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agE)
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
return B.i($async$agE,v)},
f9U(d){return C.hL4(d)},
hL4(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f9U=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$f9U)
case 7:r=f
q=r.rX("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
return B.i($async$f9U,v)},
aft(d,e){return C.hV0(d,e)},
hV0(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aft=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aft)
case 6:s=g
r=B.aX(x.N)
q=s.rX("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a3(q).k("co.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$aft)
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
return B.b(C.a17(d),$async$aft)
case 8:n=g
J.no(n,new C.fo3(e))
w=9
return B.b(C.agE(d,n),$async$aft)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aft,v)},
i49(d,e){return B.a6(d,!1).c8(B.e8(new C.fEv(e),!0,null,x.H))},
hGQ(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.da(w.d,new C.cEw())},
of:function of(d,e,f){this.a=d
this.b=e
this.c=f},
f9L:function f9L(){},
f9M:function f9M(){},
fqU:function fqU(d){this.a=d},
fqS:function fqS(d){this.a=d},
fqT:function fqT(){},
fDE:function fDE(){},
fo3:function fo3(d){this.a=d},
fEv:function fEv(d){this.a=d},
XX:function XX(d,e){this.c=d
this.a=e},
awz:function awz(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cEw:function cEw(){},
cEy:function cEy(d,e){this.a=d
this.b=e},
cEB:function cEB(d){this.a=d},
cEC:function cEC(d){this.a=d},
cEA:function cEA(){},
cED:function cED(d,e){this.a=d
this.b=e},
cEz:function cEz(d){this.a=d},
cEE:function cEE(){},
cEx:function cEx(d,e){this.a=d
this.b=e},
cEF:function cEF(){},
cEs:function cEs(d){this.a=d},
cEq:function cEq(d){this.a=d},
cEr:function cEr(d){this.a=d},
cEt:function cEt(d,e){this.a=d
this.b=e},
cEp:function cEp(d){this.a=d},
cEo:function cEo(d){this.a=d},
cEm:function cEm(d,e){this.a=d
this.b=e},
cEn:function cEn(d){this.a=d},
cEv:function cEv(){},
cEu:function cEu(d){this.a=d},
cEl:function cEl(d,e){this.a=d
this.b=e},
cEk:function cEk(d,e){this.a=d
this.b=e},
cEj:function cEj(d,e){this.a=d
this.b=e},
cEG:function cEG(d){this.a=d},
XV:function XV(d,e,f){this.c=d
this.d=e
this.a=f},
aDR:function aDR(d,e,f){this.a=d
this.b=e
this.c=f},
awv:function awv(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cDN:function cDN(d){this.a=d},
cDM:function cDM(d){this.a=d},
cDP:function cDP(d,e,f){this.a=d
this.b=e
this.c=f},
cDX:function cDX(){},
cDY:function cDY(d){this.a=d},
cDQ:function cDQ(d,e,f){this.a=d
this.b=e
this.c=f},
cDO:function cDO(d,e){this.a=d
this.b=e},
cDS:function cDS(d,e){this.a=d
this.b=e},
cDT:function cDT(d,e){this.a=d
this.b=e},
cDU:function cDU(d,e){this.a=d
this.b=e},
cDR:function cDR(d){this.a=d},
cDW:function cDW(d){this.a=d},
cDV:function cDV(d,e){this.a=d
this.b=e},
cE2:function cE2(d){this.a=d},
cDZ:function cDZ(d,e){this.a=d
this.b=e},
cE_:function cE_(d,e){this.a=d
this.b=e},
cE0:function cE0(d,e){this.a=d
this.b=e},
cE1:function cE1(d,e){this.a=d
this.b=e},
awx:function awx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hYJ(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eh(v,x.cK).bz(new C.fvq(),x.H).eU(new C.fvr())}}else if(s)C.hcV()}catch(t){}},
hcV(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eh(v,x.cK).eU(new C.fe9())}catch(u){}},
hYM(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fvq:function fvq(){},
fvr:function fvr(){},
fe9:function fe9(){},
hhs(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e9(v,w,"").split(":"))},
hhp(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kS)return null
return A.a.b0(w,14)},
fWv(d){var w
if(d.b!==D.kS)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b0(w,21)},
hZb(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hht(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hZ6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kS(0,f)
t=x.N
u=B.cD(u,new C.fwp(),B.a3(u).k("J.E"),t)
s=B.B(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kS(0,f),u=new B.Je(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QU(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QU(A.a.b0(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hZ4(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.B(new B.cu(e,r),r.k("J.E"))
A.d.b_(q,new C.fwo())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPb(w,u,s,0)}return w},
hZ8(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a32:$.ho8(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gae(s);s.C();){w=s.gS(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hhq(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
faN(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hhs(q)===e)return q}return null},
hZ9(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b0(v,u)
return A.d.gL(D.Gk).a},
hZa(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ado(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ado(0,0,0)
v=C.faN(b6,b0)
u=C.faN(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hZ8(b2,C.hZ6(C.hhq(b2),v.r))
if(s.a!==0){u.r=C.hZ4(C.hhq(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hhs(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.ec(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.faN(b6,n)
i=C.faN(b5,n)
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
a0=C.fWv(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hhp(a8)===a0||C.fWv(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Qu(a1,new C.fwv(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iY
$.iY=a9+1
A.d.K(a1,new C.eI(""+1000*a6+"_"+a9,D.kS,a2,a3,a4,a5,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ci,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.ado(k,t,e)},
hZ5(d){var w=C.hZ9(d)
if(d.w==="hati_kuhowa")return C.hgN("",w)
return C.hgM("",w)},
fwp:function fwp(){},
fwo:function fwo(){},
fwv:function fwv(d){this.a=d},
hcE(){var w=new B.S(Date.now(),0,!1),v=new C.fdc()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bz(w)},
fWD(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fxn(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kS&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hhG(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fxn(d)
w=B.bi(u)
if(w==null)return!C.fxn(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bP(18e9))},
hZR(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hyN(d){return A.a.i(d).toLowerCase()},
aoK(d){return C.hyP(d)},
hyP(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aoK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aoK)
case 7:r=f
p=r.rX("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i2o(),B.U(o).k("K<1,n>")).c_(0,new C.c7t())
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
return B.i($async$aoK,v)},
aoJ(d,e){return C.hyO(d,e)},
hyO(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoJ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoK(d),$async$aoJ)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoJ)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q9(r)),$async$aoJ)
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
return B.i($async$aoJ,v)},
aoL(d,e){return C.hyQ(d,e)},
hyQ(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoL=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoK(d),$async$aoL)
case 3:r=g
if(!J.hC(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoL)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q9(r)),$async$aoL)
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
return B.i($async$aoL,v)},
UB(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UB=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fPH&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$UB)
case 7:r=a7
q=B.aT(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.js(p),d=d.gae(d),a0=x.z;d.C();){n=d.gS(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vj(B.a1(f.a(n.b),e,a0)))}$.a6x=o}}t=2
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
return B.b(B.c3(),$async$UB)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tP("civic_hati_kiapo_uongozi",null,A.ed),$async$UB)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.js(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gS(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vj(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a6x.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcw()
else f=!0
f=!f}else f=!0
if(f)$.a6x.n(0,i.a,i.b)}w=20
return B.b(C.aoM(),$async$UB)
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
case 16:case 9:$.fPH=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UB,v)},
aoM(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aoM=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aoM)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6x,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aoM)
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
return B.i($async$aoM,v)},
aZ5(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZ5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UB(!1),$async$aZ5)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6x.h(0,t)
r=s==null?null:s.hB()
if(r==null){u=null
w=1
break}u=C.bAL(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZ5,v)},
a6y(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6y=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6x.n(0,d,o)
$.fPH=!0
w=3
return B.b(C.aoM(),$async$a6y)
case 3:w=4
return B.b(B.c3(),$async$a6y)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6x,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.nm("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6y)
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
return B.i($async$a6y,v)},
aoN(d){var w=0,v=B.j(x.T),u,t,s
var $async$aoN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a4V(A.eG),$async$aoN)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fg(),$async$aoN)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZ4(t,d),$async$aoN)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoN,v)},
aZ4(d,e){return C.hyR(d,e)},
hyR(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZ4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZ4)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eX().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i6("media")
w=8
return B.b(p.wG(q,new Uint8Array(B.ce(d)),D.bxa),$async$aZ4)
case 8:n=p.Cg(q)
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
return B.i($async$aZ4,v)},
K5(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.ci,D.cQ,l,m,n)},
fcs(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ci,D.f_,j,k,l)},
fTI(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eo(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.ci,D.cQ,g,e,f)},
fc0(d,e,f,g){return C.fcs(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fTJ(d,e,f,g,h,i,j,k){var w=C.cC()
return C.eo(A.qc,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a5,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.ci,D.cQ,g,e,f)},
hcD(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e9(v,w,"").split(":"))},
bAL(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hcD(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kS&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hB()}h=C.fW9(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bh(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hcD(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kS&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.fvo(a2))}else A.d.bn(a1.z,new C.fvp())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fxn(a0))a0.ax=a6.f.a6().ac()
return a0},
fW9(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fya(D.a43),l=C.cC(),k=x.u,j=B.a([C.eo(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a5,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.ci,D.lo,1,0,0)],k),i=B.a([],k)
i.push(C.K5("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.K5("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fTI("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hcE()))
i.push(C.fc0(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.K5("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.K5("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fcs(0,0.002,D.fp,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fTJ("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fTJ("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fTJ("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fcs(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.K5("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eo(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a5,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.ci,D.lo,0.77,0.115,0.492))
i.push(C.K5("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.K5("Jina:",A.bg,p,13,A.bl,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fTI("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fc0(0.195,0.7130000000000001,0.62,n))
i.push(C.K5("Sahihi:",A.bg,p,13,A.bl,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eo(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a5,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ci,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.fc0(0.21500000000000002,0.795,0.38,n))
i.push(C.K5("Tarehe:",A.bg,p,13,A.bl,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fTI("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hcE()))
i.push(C.fc0(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fcs(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.K5("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rm(4294967035,t,0,0,j,l,D.q1,"","",u,D.dd)
return C.Bh(t,t,t,t,D.o4,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afF(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eNj)
w=1
break}w=3
return B.b(C.UB(!0),$async$afF)
case 3:w=4
return B.b(C.aZ5(p),$async$afF)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hhG(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.bby,null,new C.fqf(p),f,!0,!0,!1,A.lp,!1,!1,x.N),$async$afF)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fqg(),f,null,!0,!0,x.y),$async$afF)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fW9(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fW9(p))
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
fdc:function fdc(){},
c7t:function c7t(){},
fvo:function fvo(d){this.a=d},
fvp:function fvp(){},
fqf:function fqf(d){this.a=d},
fqd:function fqd(d){this.a=d},
fqe:function fqe(d){this.a=d},
fqg:function fqg(){},
fqb:function fqb(d){this.a=d},
fqc:function fqc(d){this.a=d},
aph:function aph(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCD:function aCD(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e6u:function e6u(d){this.a=d},
e6s:function e6s(d){this.a=d},
e6t:function e6t(d){this.a=d},
e6v:function e6v(d){this.a=d},
e6w:function e6w(d){this.a=d},
wj(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.ci,D.cQ,l,m,n)},
hch(d,e,f){var w=4291404327
return B.a([C.pZ(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pZ(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fbr(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pZ(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pZ(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pZ(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pZ(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ci,D.f_,j,k,l)},
fbq(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eo(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.ci,D.cQ,g,e,f)},
bya(d,e,f,g){return C.pZ(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hcg(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pZ(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wj(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hhr(){var w=new B.S(Date.now(),0,!1),v=new C.fwu()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bz(w)},
hci(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wj(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fbq("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bya(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wj("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a5,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ci,D.f_,s,t,g-0.004),C.bya(t,g+0.044,s,w)],x.u)},
ag6(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d8H,D.cf9,D.d1F,D.d3u],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gS(0)
if(u.a===d)return u}return null},
fT0(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fya(d.d),v=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ci,D.lo,1,0,0)],x.u)
A.d.v(v,C.hNu(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hNu(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wj("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hch(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hch(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fbr(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fbr(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wj("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pZ(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pZ(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wj("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pZ(0,0.002,D.fp,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pZ(b9,0.016,D.kT,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pZ(0,0.002,D.fp,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wj("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fbq("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hhr()),C.bya(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wj(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pZ(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pZ(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.eo(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.ci,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pZ(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.eo(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.ci,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hcg(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wj(c9,A.bg,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fbq("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iY
$.iY=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iY
$.iY=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eI(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.ci,0,"","","","","",!1,0),j,new C.eI(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.fp,0,b5,0.8,0,!1,g,0,D.ci,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iY
$.iY=p+1
i=Date.now()
h=$.iY
$.iY=h+1
g=Date.now()
f=$.iY
$.iY=f+1
e=Date.now()
a3=$.iY
$.iY=a3+1
A.d.v(d,B.a([new C.eI(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dL,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ci,0,"","","","","",!1,0),new C.eI(""+1000*i+"_"+h,D.f_,a1,a2,0.046,0.025875,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ci,0,"","","","","",!1,0),new C.eI(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ci,0,"","","","","",!1,0),new C.eI(""+1000*e+"_"+a3,D.f_,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ci,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hcg("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3T||w===D.a3V||w===D.a3S||w===D.a3U){w=t-0.008
A.d.v(c2,C.fbr(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fbr(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pZ(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pZ(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pZ(0,0.0022,D.fp,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wj("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wj("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hci("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hci("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pZ(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wj("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wj("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fbq("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bya(0.215,p,0.3116,b5),C.wj("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.eo(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a5,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ci,D.f_,0.3161999999999999,0.5738,s-0.044),C.bya(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pZ(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wj("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hZ7(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fWN(d.d),p=new C.fwq(s),o=new C.fwr(s),n=d.z,m=n===D.a3T||n===D.a3V||n===D.a3S||n===D.a3U,l=n===D.aE2||n===D.a3W||n===D.aE3,k=B.bZ(0,B.fL(q,A.A,t,t,A.ck,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3W?26:16
i.push(new C.fwt().$1$size(w))}if(n===D.aE4)i.push(D.frw)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hB,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aN5,p.$1$w(0.9),D.aN5,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b76,t,n,w,t,t,A.n),t,t,t,t,A.ahL,t,t,t))
i.push(A.an)
i.push(new C.fws(r).$1("NIMETOWE"))
i.push(A.h_)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Ls,new B.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d9,new B.bD(1,A.bi,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b5)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.r,B.a([k,new B.C(A.agj,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hgM(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ag6(e,t)
if(r==null)r=A.d.gL(D.Gk)
w=C.cC()
v=C.rm(r.e,t,0,0,C.fT0(r,0.165,y.O,D.d43,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q1,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bh(t,t,t,t,D.o4,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hgN(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ag6(e,t)
if(r==null)r=A.d.gL(D.Gk)
w=C.cC()
v=C.rm(r.e,t,0,0,C.fT0(r,0.165,y.f,D.d_R,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q1,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bh(t,t,t,t,D.o4,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bC7(d,e,f){var w=0,v=B.j(x.T),u
var $async$bC7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.K,null,new C.fHX(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC7,v)},
afG(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afG=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fqj(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KG,null,new C.fqk(p),d,!0,!0,!1,A.lp,!1,!1,x.N),$async$afG)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bC7(d,"Hati ya Kuhowa",D.Gk),$async$afG)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KJ(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$afG)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hgM(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afG,v)},
afH(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afH=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fqn(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KG,null,new C.fqo(p),d,!0,!0,!1,A.lp,!1,!1,x.N),$async$afH)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bC7(d,"Hati ya Kuhoweya",D.Gk),$async$afH)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KJ(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$afH)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hgN(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afH,v)},
afI(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afI=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fqr(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KG,null,new C.fqs(m),d,!0,!0,!1,A.lp,!1,!1,x.N),$async$afI)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bC7(d,"Malipo ya Awamu ya Mahari",D.PU),$async$afI)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KJ(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$afI)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ag6(s,D.PU)
if(q==null)q=A.d.gL(D.PU)
n=C.cC()
p=C.rm(q.e,null,0,0,C.fT0(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cW0,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q1,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bh(null,null,null,null,D.o4,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afI,v)},
xg:function xg(d,e){this.a=d
this.b=e},
ji:function ji(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fwu:function fwu(){},
fwq:function fwq(d){this.a=d},
fws:function fws(d){this.a=d},
fwt:function fwt(){},
fwr:function fwr(d){this.a=d},
fHX:function fHX(d,e){this.a=d
this.b=e},
acu:function acu(d,e,f){this.c=d
this.d=e
this.a=f},
dWm:function dWm(d,e,f){this.a=d
this.b=e
this.c=f},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWk:function dWk(d,e){this.a=d
this.b=e},
abU:function abU(d,e,f){this.c=d
this.d=e
this.a=f},
fqj:function fqj(){},
fqk:function fqk(d){this.a=d},
fqh:function fqh(d){this.a=d},
fqi:function fqi(d){this.a=d},
fqn:function fqn(){},
fqo:function fqo(d){this.a=d},
fql:function fql(d){this.a=d},
fqm:function fqm(d){this.a=d},
fqr:function fqr(){},
fqs:function fqs(d){this.a=d},
fqp:function fqp(d){this.a=d},
fqq:function fqq(d){this.a=d},
K8(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.eo(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.ci,D.cQ,k,l,m)},
Ck(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ci,D.f_,j,k,l)},
hcY(d,e,f){return C.Ck(0,0.002,D.fp,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
byk(d,e,f,g,h){return B.a([C.Ck(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.K8(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fTN(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Ck(0,0.002,D.fp,g,1,"orn_l_"+t,u,d,v),C.Ck(h,0.016,D.kT,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Ck(0,0.002,D.fp,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0v(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.K8(d,A.bg,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.eo(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.P,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.ci,D.cQ,t,u,g-0.002),C.hcY(u,g+0.018,t)],x.u)},
hcZ(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Ck(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Ck(w,0.024,D.kT,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Ck(w,0.024,D.kT,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.K8(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
byj(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.K8("Sahihi:",A.bg,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a5,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ci,D.f_,v,w,f-0.006),C.hcY(w,f+0.016,v)],x.u)},
fWO(d){var w,v
for(w=0;w<19;++w){v=D.Q6[w]
if(v.a===d)return v}return null},
i0o(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ag6(A.a.b0(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ag6(A.a.b0(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b0(k,18)
w=C.ag6(u,D.PU)
v=w==null?l:w.d
if(v==null){w=C.ag6(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fWO(A.a.b0(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hdN.a9(0)
$.he_.a9(0)
t=C.fya(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fXS(d){var w=0,v=B.j(x.T),u
var $async$fXS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.K,null,new C.fJp(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXS,v)},
xj:function xj(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhV:function bhV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fJp:function fJp(){},
acx:function acx(d){this.a=d},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ebI:function ebI(d){this.a=d},
ebH:function ebH(d,e){this.a=d
this.b=e},
aec:function aec(d,e,f){this.c=d
this.d=e
this.a=f},
fWN(d){return $.he_.cg(0,d,new C.fyc(d))},
fya(d){return $.hdN.cg(0,d,new C.fyb(d))},
fy(d){return B.fNg(d>>>16&255,d>>>8&255,d&255,255)},
hQw(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hf4(4294570461,4293910718,4284234270,u)
case 1:return C.hf4(4294635750,4293975240,t,4292912216)
case 2:w=C.fa1(s,4294505966,r)
C.by4(w,14,16,p)
C.kr(w,8,9,464,836,u,1.2)
C.Cg(w,2,2,1,1,u,10)
C.Cg(w,478,2,-1,1,u,10)
C.Cg(w,2,852,1,-1,u,10)
C.Cg(w,478,852,-1,-1,u,10)
return w
case 3:return C.fa1(4294966515,4294373082,4289102906)
case 4:return C.hLj(C.fa1(4294376440,4293653998,4290287194))
case 5:w=C.fa1(4294965238,4294437098,4288444980)
C.by4(w,14,16,4283043359)
C.kr(w,6,7,468,840,u,1)
C.kr(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,n,4294175448)
C.rG(v,n)
C.kr(v,24,24,432,806,4286209070,1)
C.a0j(v,12,12,468,12,o,3,20)
C.a0j(v,12,842,468,842,o,3,20)
C.a0j(v,12,12,12,842,o,3,20)
C.a0j(v,468,12,468,842,o,3,20)
return v
case 7:return C.hJm(4294440434,4293518297,4280228630,r)
case 8:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,m,4293911504)
C.rG(v,m)
C.kr(v,28,28,424,798,l,1)
C.fiM(v,28,28,l,k)
C.fiM(v,452,28,l,k)
C.fiM(v,28,826,l,k)
C.fiM(v,452,826,l,k)
return v
case 9:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,j,4294111986)
C.rG(v,j)
C.kr(v,18,18,444,818,4292401368,0.7)
B.iH(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hNg(i,4294173372)
case 11:return C.hOl(4294439140,4293449662)
case 12:return C.hJe(h,4294239432)
case 13:return C.hNN(4294244340,4293193448)
case 14:return C.hS4(4294505710,4293780694)
case 15:return C.f91(4294966259,4294439138,o,p,q)
case 16:return C.f91(4294966776,4294178544,o,g,g)
case 17:return C.f91(4294965493,4294504170,o,4286200650,q)
case 18:return C.f91(4294966519,4294373862,o,p,p)
case 19:return C.hMo()
case 20:return C.hMp()
case 21:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,h,4293976768)
C.rG(v,h)
C.by4(v,14,16,p)
B.iH(v,!0,C.fy(u),4,475,4,9)
B.iH(v,!0,C.fy(u),4,475,844,849)
B.iH(v,!0,C.fy(u),4,9,4,849)
B.iH(v,!0,C.fy(u),470,475,4,849)
C.a0j(v,10,12,470,12,u,2,16)
C.a0j(v,10,842,470,842,u,2,16)
C.a0j(v,10,12,10,842,u,2,18)
C.a0j(v,470,12,470,842,u,2,18)
C.Cg(v,2,2,1,1,t,10)
C.Cg(v,478,2,-1,1,t,10)
C.Cg(v,2,852,1,-1,t,10)
C.Cg(v,478,852,-1,-1,t,10)
C.kr(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,s,4294438872)
C.rG(v,s)
C.kr(v,14,16,452,822,o,2.2)
C.kr(v,22,24,436,806,o,1)
C.fV4(v,!1,!1,o,p,p,36,14,16)
C.kG(v,240,20,7,o,!0)
C.kG(v,240,834,7,o,!0)
C.kG(v,18,427,7,o,!0)
C.kG(v,462,427,7,o,!0)
return v
case 23:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,i,4293910712)
C.rG(v,i)
B.iH(v,!0,C.fy(u),0,479,0,20)
B.iH(v,!0,C.fy(u),0,479,834,853)
B.iH(v,!0,C.fy(u),0,20,0,853)
B.iH(v,!0,C.fy(u),460,479,0,853)
B.iH(v,!0,C.fy(f),5,474,5,9)
B.iH(v,!0,C.fy(f),5,474,844,848)
B.iH(v,!0,C.fy(f),5,9,5,848)
B.iH(v,!0,C.fy(f),470,474,5,848)
C.kr(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y9(v,e,4294174404)
C.rG(v,e)
C.by4(v,14,16,p)
B.iH(v,!0,C.fy(u),3,476,3,8)
B.iH(v,!0,C.fy(u),3,476,845,850)
B.iH(v,!0,C.fy(u),3,8,3,850)
B.iH(v,!0,C.fy(u),471,476,3,850)
C.kr(v,9,10,462,834,t,1)
C.kr(v,14,16,452,822,u,1.8)
C.kG(v,240,8,4,u,!0)
C.kG(v,240,846,4,u,!0)
C.kG(v,8,427,4,u,!0)
C.kG(v,472,427,4,u,!0)
C.kG(v,8,8,3,t,!0)
C.kG(v,472,8,3,t,!0)
C.kG(v,8,846,3,t,!0)
C.kG(v,472,846,3,t,!0)
return v}},
y9(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kI(d,!1,A.da,new B.Rw(s),r,A.cW,1,0,w-1,k,k);++k}},
rG(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eJ()
n.dB(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iC()
v=A.o.D(A.k.N(s.gb4(s))-3,0,255)
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gba(s))-2,0,255)
p=d.a
if(p!=null)p.jE(u,t,v,r,q,255)}},
kr(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kI(d,!0,A.da,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kI(d,!0,A.da,u,v,A.cW,j,e,t,w,w)
B.kI(d,!0,A.da,u,v,A.cW,j,e,e,f,w)
B.kI(d,!0,A.da,u,v,A.cW,j,t,t,f,w)},
Cg(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kI(d,!0,A.da,C.fy(i),u,A.cW,2,e,e+g*j,f,f)
B.kI(d,!0,A.da,C.fy(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kI(d,!0,A.da,C.fy(i),u,A.cW,1,w,e+g*t,v,v)
B.kI(d,!0,A.da,C.fy(i),u,A.cW,1,w,w,v,f+h*t)},
hf4(d,e,f,g){var w=null,v=B.hl(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.y9(v,d,e)
C.rG(v,d)
B.iH(v,!0,C.fy(f),0,479,0,28)
B.iH(v,!0,C.fy(f),0,479,826,853)
B.iH(v,!0,C.fy(f),0,28,0,853)
B.iH(v,!0,C.fy(f),452,479,0,853)
C.kr(v,5,5,470,844,g,1.1)
C.kr(v,28,28,424,798,g,1.6)
C.Cg(v,2,2,1,1,g,11)
C.Cg(v,478,2,-1,1,g,11)
C.Cg(v,2,852,1,-1,g,11)
C.Cg(v,478,852,-1,-1,g,11)
return v},
fa1(d,e,f){var w=null,v=B.hl(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.y9(v,d,e)
C.rG(v,d)
C.kr(v,14,16,452,822,f,1.6)
C.kr(v,20,22,440,810,f,0.8)
return v},
by4(d,e,f,g){var w,v=C.fy(g)
B.iH(d,!0,v,0,479,0,f-1)
w=854-f
B.iH(d,!0,v,0,479,w,853);--w
B.iH(d,!0,v,0,e-1,f,w)
B.iH(d,!0,v,480-e,479,f,w)},
hLj(d){var w,v,u=4291404327
C.by4(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kG(d,w,8,3,u,!0)
C.kG(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kG(d,7,v,3,u,!0)
C.kG(d,473,v,3,u,!0)}return d},
flL(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ja(e,f),new B.ja(e+g*n,f),new B.ja(e,f+h*n)],t)
B.a14(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ja(s,u),new B.ja(e+g*v,u),new B.ja(s,f+h*v)],t)
B.a14(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kG(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kG(d,e+g*t,f+h*3,4,k,!0)
C.kG(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kG(d,e+g*t,f,5,k,!0)
C.kG(d,e,f+h*t,5,k,!0)}},
fV4(d,e,f,g,h,i,j,k,l){var w,v
C.flL(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.flL(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.flL(d,k,v,1,-1,e,f,g,h,i,j)
C.flL(d,w,v,-1,-1,e,f,g,h,i,j)},
a0j(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l_(d,!0,A.da,new B.qT(p),null,A.cW,j,r,q)}},
fkU(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kI(d,!0,A.da,new B.qT(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kI(d,!0,A.da,new B.qT(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hJm(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hl(o,o,A.c7,0,A.e0,854,o,0,3,o,A.c7,480,!1)
C.y9(n,d,e)
C.rG(n,d)
C.kr(n,20,20,440,814,f,1.2)
C.fkU(n,0,0,1,1,g)
C.fkU(n,480,0,-1,1,g)
C.fkU(n,0,854,1,-1,g)
C.fkU(n,480,854,-1,-1,g)
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
B.kI(n,!0,A.da,new B.qT(p),o,A.cW,1.2,240,r,60,q)}return n},
fiM(d,e,f,g,h){var w
C.foo(d,!0,C.fy(g),13,e,f)
C.foo(d,!0,C.fy(g),9,e,f)
w=B.a([new B.ja(e,f-4),new B.ja(e+4,f),new B.ja(e,f+4),new B.ja(e-4,f)],x.J)
B.a14(d,C.fy(h),w)},
kG(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ja(e,v),new B.ja(u,f),new B.ja(e,t),new B.ja(s,f)],x.J)
if(i){B.a14(d,C.fy(h),r)
return}B.kI(d,!0,A.da,C.fy(h),w,A.cW,1,e,u,v,f)
B.kI(d,!0,A.da,C.fy(h),w,A.cW,1,u,e,f,t)
B.kI(d,!0,A.da,C.fy(h),w,A.cW,1,e,s,t,f)
B.kI(d,!0,A.da,C.fy(h),w,A.cW,1,s,e,f,v)},
f90(d,e,f,g,h,i,j){var w,v=B.a([new B.ja(e,f),new B.ja(e+g*28,f),new B.ja(e,f+h*28)],x.J)
B.a14(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kG(d,v,w,6,j,!0)
C.kG(d,v,w,3,i,!0)},
f91(d,e,f,g,h){var w=null,v=B.hl(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.y9(v,d,e)
C.rG(v,d)
C.kr(v,18,18,444,818,f,2)
C.kr(v,26,26,428,802,f,0.9)
if(h!=null)B.iH(v,!0,C.fy(h),28,451,28,34)
C.f90(v,18,18,1,1,g,f)
C.f90(v,462,18,-1,1,g,f)
C.f90(v,18,836,1,-1,g,f)
C.f90(v,462,836,-1,-1,g,f)
return v},
hMo(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hl(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
C.y9(r,u,4294240980)
C.rG(r,u)
C.kr(r,10,12,460,830,t,3.2)
C.kr(r,18,20,444,814,s,1.2)
C.kr(r,24,26,432,802,t,1.8)
C.fV4(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kG(r,w,16,3,t,!0)
C.kG(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kG(r,16,w,3,t,!0)
C.kG(r,464,w,3,t,!0)}return r},
hMp(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hl(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
C.y9(p,s,4294373080)
C.rG(p,s)
C.kr(p,16,18,448,818,r,2.4)
C.kr(p,24,26,432,802,4286209044,1)
w=new C.fbi(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fV4(p,!1,!0,r,q,q,34,16,18)
return p},
byL(d,e,f,g,h,i){B.iH(d,!0,C.fy(i),e,e+g,f,f+h)},
bzA(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kI(d,!1,A.da,new B.Rw(i),null,A.cW,1,e,w,l,l)}},
hNf(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kI(d,!1,A.da,new B.qT(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
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
B.kI(d,!1,A.da,new B.qT(r),null,A.cW,1,t,t,f,s);++q}},
hNg(d,e){var w,v,u=null,t=B.hl(u,u,A.c7,0,A.e0,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hNf(t,v,w,30,D.cP4,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.byL(t,44,44,392,766,d)
C.bzA(t,44,44,392,766,d,e)
C.rG(t,d)
C.kr(t,44,44,392,766,4292128567,2.2)
C.kr(t,50,50,380,754,4279898632,0.8)
return t},
hOk(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kG(d,e,f,7,h,!0)
C.kG(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kI(d,!0,A.da,C.fy(h),o,A.cW,1.6,w,u,v,t)
B.kI(d,!0,A.da,C.fy(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kI(d,!0,A.da,new B.qT(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kI(d,!0,A.da,C.fy(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kI(d,!0,A.da,C.fy(h),o,A.cW,1.5,e,e,f-8,f+8)
B.l_(d,!0,A.da,C.fy(h),o,A.cW,2,e,f)}},
hOl(d,e){var w,v,u,t,s=null,r=B.hl(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
B.iH(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hOk(r,u,v,w,4292391514)}C.byL(r,46,46,388,762,d)
C.bzA(r,46,46,388,762,d,e)
C.rG(r,d)
C.kr(r,46,46,388,762,4291404327,1.8)
return r},
hav(d,e,f,g){C.foo(d,!0,C.fy(g),16,e,f)
C.foo(d,!0,C.fy(g),11,e,f)
C.kG(d,e,f,6,g,!0)
B.kI(d,!0,A.da,C.fy(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kI(d,!0,A.da,C.fy(g),null,A.cW,1.3,e,e,f-14,f+14)},
hJe(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hl(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
B.iH(s,!0,C.fy(4280948752),0,479,0,853)
B.iH(s,!0,C.fy(u),0,479,0,78)
B.iH(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hav(s,w,39,t)
C.hav(s,w,815,t)}C.byL(s,38,92,404,670,d)
C.bzA(s,38,92,404,670,d,e)
C.rG(s,d)
C.kr(s,38,92,404,670,t,1.8)
C.kr(s,45,99,390,656,4287322667,0.8)
return s},
hNM(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ja(e,f),new B.ja(q-5,w),new B.ja(q,f-(18-Math.abs(r)*3)),new B.ja(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a14(d,new B.qT(o),p)}B.l_(d,!0,A.da,C.fy(4292128567),null,A.cW,3,e,f)},
hNN(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hl(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
C.y9(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kI(q,!0,A.da,new B.qT(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kI(q,!0,A.da,new B.qT(u),s,A.cW,1.1,v,v,0,853)}B.iH(q,!0,C.fy(r),0,479,0,70)
B.iH(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hNM(q,70+t*85,48,4292128567)
C.byL(q,48,78,384,712,d)
C.bzA(q,48,78,384,712,d,e)
C.rG(q,d)
C.kr(q,48,78,384,712,4291404327,1.6)
return q},
hS4(d,e){var w,v,u,t=null,s=4279970378,r=B.hl(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
B.iH(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kG(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l_(r,!0,A.da,new B.qT(u),t,A.cW,1,v,w)}C.byL(r,40,40,400,774,d)
C.bzA(r,40,40,400,774,d,e)
C.rG(r,d)
C.kr(r,40,40,400,774,4291058750,2)
C.kr(r,48,48,384,758,s,0.8)
return r},
kP:function kP(d,e){this.a=d
this.b=e},
fyc:function fyc(d){this.a=d},
fyb:function fyb(d){this.a=d},
fbi:function fbi(d){this.a=d},
fyQ(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hOe(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fTG(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oq(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.ag2(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aey(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aey=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v8(null,""),$async$aey)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n1(n)
if(e==null)s=A.hl
else{r=C.hOe(e)
s=B.a([new B.a_k(A.cS.gcv().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qJ(t,d,s,E.ES),$async$aey)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.Ky(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
bBe(d){return C.i04(d)},
i04(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBe=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aey(r,null),$async$bBe)
case 7:q=f
p=C.fTG(q)
if(p==null){u=d
w=1
break}o=d.aBx(p)
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
return B.i($async$bBe,v)},
heo(d){var w,v=F.fW5(d)
v=B.aK(v,"book","newspaper")
if(F.a1n(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fCL(d,e,f,g){return C.i1W(d,e,f,g)},
i1W(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fCL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fyQ(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hhP()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aey('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.heo(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fCL)
case 3:r=m.fTG(i)
if(r==null)throw B.V(y.S)
q=new C.z9(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBx(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1n(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1n(A.d.aI(t," "))==="sw"?C.bBe(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fCL,v)},
bAJ(d,e,f,g,h){return C.hYH(d,e,f,g,h)},
hYH(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bAJ=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fK(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hhP()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aey('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.heo(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bAJ)
case 3:p=j.fTG(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBx(B.a1(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1n(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBe(n),$async$bAJ)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7b(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAJ,v)},
a7b:function a7b(d,e,f){this.a=d
this.b=e
this.c=f},
i4I(d,e){return B.a6(d,!1).c8(B.e8(new C.fJA(e),!0,null,x.H))},
fJA:function fJA(d){this.a=d},
V6:function V6(d,e){this.c=d
this.a=e},
aCW:function aCW(d,e,f,g,h,i,j,k){var _=this
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
ef0:function ef0(d){this.a=d},
ef_:function ef_(){},
ef1:function ef1(d){this.a=d},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
ef2:function ef2(){},
eeD:function eeD(d,e){this.a=d
this.b=e},
eez:function eez(d,e){this.a=d
this.b=e},
eeK:function eeK(d){this.a=d},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeM:function eeM(d){this.a=d},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeG:function eeG(d,e){this.a=d
this.b=e},
eeH:function eeH(d,e){this.a=d
this.b=e},
eeI:function eeI(d){this.a=d},
eeJ:function eeJ(d){this.a=d},
eeE:function eeE(d,e){this.a=d
this.b=e},
eeB:function eeB(d){this.a=d},
eeC:function eeC(d){this.a=d},
eeS:function eeS(d){this.a=d},
eeT:function eeT(d){this.a=d},
eeR:function eeR(d){this.a=d},
eeU:function eeU(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d,e){this.a=d
this.b=e},
eeV:function eeV(d){this.a=d},
eeP:function eeP(d){this.a=d},
eeW:function eeW(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeY:function eeY(d){this.a=d},
eeA:function eeA(d,e){this.a=d
this.b=e},
fxM(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fxM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hc_){w=1
break}r=new C.fxN()
t=4
q=x.s
w=7
return B.b(B.iJ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fxM)
case 7:$.hc_=!0
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
return B.i($async$fxM,v)},
bB5(d){return A.GG[B.mu(d)-1]+", "+A.oM[B.bG(d)-1]+" "+B.bQ(d)+", "+B.bz(d)},
hRa(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dcM[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fWu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fB(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fw4(),B.U(v).k("a2<1>")))
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
continue}o=new C.fw6(j,h)
n=new C.fw5(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iT(o.$1(l)))
j.a+=l}return u},
fTp(d,e){var w=new C.faU()
return A.d.cI(e,0,new C.faS(w))>=A.d.cI(d,0,new C.faT(w))},
h9a(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
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
z9:function z9(d,e,f,g,h,i,j,k,l,m){var _=this
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
cba:function cba(d){this.a=d},
cb8:function cb8(){},
cb9:function cb9(){},
t7:function t7(d,e){this.a=d
this.b=e},
B4:function B4(d,e){this.a=d
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
fxN:function fxN(){},
fw4:function fw4(){},
fw6:function fw6(d,e){this.a=d
this.b=e},
fw5:function fw5(d,e,f){this.a=d
this.b=e
this.c=f},
faU:function faU(){},
faV:function faV(){},
faS:function faS(d){this.a=d},
faT:function faT(d){this.a=d},
b_B:function b_B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cbb:function cbb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbc:function cbc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cbd:function cbd(d){this.a=d},
bb6:function bb6(d){this.a=d},
bb5:function bb5(d,e){this.b=d
this.a=e},
bsB:function bsB(d){this.a=d},
b7B:function b7B(d,e){this.b=d
this.a=e},
bq6:function bq6(d,e){this.b=d
this.a=e},
hjJ(d,e){return B.a6(d,!1).c8(B.e8(new C.fJD(e,null),!0,null,x.E))},
fJD:function fJD(d,e){this.a=d
this.b=e},
V9:function V9(d,e,f){this.c=d
this.d=e
this.a=f},
aD_:function aD_(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
egb:function egb(){},
egc:function egc(d){this.a=d},
ega:function ega(d,e){this.a=d
this.b=e},
efZ:function efZ(d){this.a=d},
eg_:function eg_(d){this.a=d},
eg5:function eg5(d){this.a=d},
eg6:function eg6(d,e){this.a=d
this.b=e},
eg3:function eg3(d){this.a=d},
eg4:function eg4(d,e,f){this.a=d
this.b=e
this.c=f},
eg0:function eg0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eg7:function eg7(d,e){this.a=d
this.b=e},
eg2:function eg2(d,e){this.a=d
this.b=e},
eg8:function eg8(d){this.a=d},
eg1:function eg1(d,e){this.a=d
this.b=e},
eg9:function eg9(d,e){this.a=d
this.b=e},
baD:function baD(d,e,f){this.b=d
this.c=e
this.a=f},
i4O(d){return B.a6(d,!1).c8(B.e8(new C.fJT(),!0,null,x.I))},
byw(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fUO(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fJT:function fJT(){},
a_d:function a_d(d){this.a=d},
or:function or(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEm:function aEm(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aO=_.aE=_.az=_.Z=_.b5=_.bh=_.y2=0
_.b3=null
_.b1=0.25
_.be=null
_.bL=0.5
_.aR=1
_.c7=_.bT=_.bj=0
_.cX=_.cU=!1
_.c=_.a=null},
ePq:function ePq(d){this.a=d},
eOi:function eOi(d,e){this.a=d
this.b=e},
eOG:function eOG(d,e){this.a=d
this.b=e},
eOQ:function eOQ(d){this.a=d},
eO1:function eO1(d){this.a=d},
eO2:function eO2(d){this.a=d},
eO_:function eO_(d){this.a=d},
eO0:function eO0(d){this.a=d},
eOz:function eOz(d,e){this.a=d
this.b=e},
eOA:function eOA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOM:function eOM(d,e,f){this.a=d
this.b=e
this.c=f},
eOL:function eOL(d,e){this.a=d
this.b=e},
eON:function eON(d,e){this.a=d
this.b=e},
eOK:function eOK(d,e){this.a=d
this.b=e},
eOP:function eOP(d,e,f){this.a=d
this.b=e
this.c=f},
eOO:function eOO(d,e){this.a=d
this.b=e},
eNS:function eNS(d){this.a=d},
eNT:function eNT(d){this.a=d},
eNU:function eNU(d){this.a=d},
eNR:function eNR(){},
eNV:function eNV(d,e){this.a=d
this.b=e},
eNQ:function eNQ(d,e){this.a=d
this.b=e},
eNX:function eNX(){},
eNW:function eNW(d,e){this.a=d
this.b=e},
eNP:function eNP(d,e){this.a=d
this.b=e},
eNM:function eNM(d,e){this.a=d
this.b=e},
eNY:function eNY(d){this.a=d},
eNO:function eNO(d,e){this.a=d
this.b=e},
eNZ:function eNZ(d){this.a=d},
eNN:function eNN(d,e){this.a=d
this.b=e},
ePf:function ePf(d,e){this.a=d
this.b=e},
ePm:function ePm(d){this.a=d},
ePn:function ePn(d,e){this.a=d
this.b=e},
ePo:function ePo(){},
ePg:function ePg(d,e){this.a=d
this.b=e},
ePe:function ePe(d,e){this.a=d
this.b=e},
ePh:function ePh(d,e){this.a=d
this.b=e},
ePd:function ePd(d,e){this.a=d
this.b=e},
ePi:function ePi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ePc:function ePc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ePj:function ePj(d){this.a=d},
ePk:function ePk(d,e){this.a=d
this.b=e},
ePl:function ePl(d){this.a=d},
ePb:function ePb(d){this.a=d},
eOZ:function eOZ(d){this.a=d},
eP_:function eP_(d){this.a=d},
eOY:function eOY(d,e){this.a=d
this.b=e},
eOT:function eOT(d,e){this.a=d
this.b=e},
eP0:function eP0(d){this.a=d},
eP3:function eP3(d){this.a=d},
eOX:function eOX(d){this.a=d},
eP4:function eP4(d){this.a=d},
eP5:function eP5(d){this.a=d},
eP6:function eP6(d){this.a=d},
eP7:function eP7(d){this.a=d},
eOW:function eOW(d){this.a=d},
eP8:function eP8(d){this.a=d},
eOV:function eOV(d){this.a=d},
eP9:function eP9(d,e){this.a=d
this.b=e},
eOU:function eOU(d,e){this.a=d
this.b=e},
ePa:function ePa(d){this.a=d},
eP1:function eP1(d){this.a=d},
eP2:function eP2(d){this.a=d},
eOD:function eOD(d){this.a=d},
eOC:function eOC(d){this.a=d},
eOE:function eOE(d,e){this.a=d
this.b=e},
eOB:function eOB(d,e){this.a=d
this.b=e},
eOF:function eOF(d){this.a=d},
eOv:function eOv(d){this.a=d},
eOu:function eOu(d){this.a=d},
eOw:function eOw(d){this.a=d},
eOt:function eOt(d){this.a=d},
eOx:function eOx(d,e){this.a=d
this.b=e},
eOs:function eOs(d,e){this.a=d
this.b=e},
eOr:function eOr(d,e){this.a=d
this.b=e},
eO9:function eO9(d){this.a=d},
eOa:function eOa(d){this.a=d},
eOb:function eOb(d){this.a=d},
eOc:function eOc(d){this.a=d},
eOd:function eOd(d){this.a=d},
eOe:function eOe(d){this.a=d},
eOf:function eOf(d){this.a=d},
eOg:function eOg(d){this.a=d},
eOh:function eOh(d){this.a=d},
eNv:function eNv(d){this.a=d},
eNw:function eNw(d){this.a=d},
eNx:function eNx(d){this.a=d},
eNy:function eNy(d){this.a=d},
eNz:function eNz(d){this.a=d},
eNu:function eNu(d){this.a=d},
eNA:function eNA(d){this.a=d},
eNB:function eNB(d){this.a=d},
eO3:function eO3(d){this.a=d},
eO4:function eO4(d){this.a=d},
eO5:function eO5(d){this.a=d},
eO6:function eO6(d){this.a=d},
eO7:function eO7(d){this.a=d},
eNF:function eNF(d){this.a=d},
eNG:function eNG(d){this.a=d},
eNH:function eNH(d){this.a=d},
eNI:function eNI(d){this.a=d},
eNJ:function eNJ(d){this.a=d},
eNE:function eNE(d){this.a=d},
eNK:function eNK(d){this.a=d},
eND:function eND(d){this.a=d},
eNL:function eNL(d){this.a=d},
eNC:function eNC(d){this.a=d},
eOy:function eOy(d){this.a=d},
eOq:function eOq(d){this.a=d},
eOm:function eOm(d){this.a=d},
eOl:function eOl(d){this.a=d},
eOn:function eOn(d,e){this.a=d
this.b=e},
eOk:function eOk(d,e){this.a=d
this.b=e},
eOo:function eOo(d,e){this.a=d
this.b=e},
eOj:function eOj(d,e){this.a=d
this.b=e},
eOp:function eOp(d){this.a=d},
eOJ:function eOJ(d){this.a=d},
eOI:function eOI(d,e,f){this.a=d
this.b=e
this.c=f},
eOH:function eOH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOS:function eOS(d,e){this.a=d
this.b=e},
eOR:function eOR(d,e){this.a=d
this.b=e},
eO8:function eO8(d){this.a=d},
ePp:function ePp(d){this.a=d},
bea:function bea(d,e){this.b=d
this.a=e},
i0f(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i0g(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kS(0,d),m=B.B(n,B.a3(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b0(d,v)
return n.charCodeAt(0)==0?n:n},
bz6(){var w=$.bye,v=$.PQ
$.PQ=v+1
return w+"_"+v},
i7(d,e,f,g,h,i,j){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,C.bz6(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ci,D.f_,g,e,f)},
nS(d,e,f,g){var w=f*9
return C.i7(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hKU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bye
p=$.PQ
$.PQ=p+1
w.push(new C.eI(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.ci,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bye
p=$.PQ
$.PQ=p+1
w.push(new C.eI(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.ci,0,"","","","","",!1,0))}w.push(C.nS(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nS(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i7(D.be,0.08,0.08,0.5,0.003,v,0),C.i7(D.be,0.58,0.08,0.004,0.06,v,0),C.i7(D.be,0.58,0.14,0.34,0.003,v,0),C.i7(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i7(D.be,0.08,0.8,0.004,0.14,t,0),C.i7(D.be,0.08,0.94,0.6,0.003,t,0),C.nS(0.58,0.08,0.05,e),C.nS(0.92,0.22,0.05,e),C.nS(0.08,0.8,0.05,f),C.nS(0.68,0.94,0.05,f),C.nS(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i7(D.kT,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i7(D.kT,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i7(D.kT,0.7,0.8,0.22,0.12,w|1140850688,0),C.i7(D.kT,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nS(0.5,0.5,1.5,w|335544320),C.nS(0.5,0.5,1.15,w|402653184),C.nS(0.5,0.5,0.8,v|436207616),C.nS(0.95,0.05,0.4,v|855638016),C.nS(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nS(0.85,0.08,0.7,w|1140850688),C.nS(0.1,0.35,0.5,v|855638016),C.nS(0.9,0.62,0.55,v|771751936),C.nS(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i7(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i7(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i7(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i7(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nS(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nS(0.5,0.2,0.65,(w|3422552064)>>>0),C.nS(0.5,0.2,0.95,w|855638016),C.i7(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i7(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i7(D.jE,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i7(D.jE,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i7(D.jE,0.15,0.86,0.6,0.14,1712265002,0),C.nS(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cQr[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bye
l=$.PQ
$.PQ=l+1
w.push(new C.eI(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.ci,0,"","","","","",!1,0))}w.push(C.nS(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i7(D.jE,0.35,-0.1,0.3,0.62,w|855638016,0),C.i7(D.jE,0.05,-0.1,0.3,0.55,v,-0.5),C.i7(D.jE,0.65,-0.1,0.3,0.55,v,0.5),C.nS(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i7(D.be,0.06,0.04,0.88,0.002,e,0),C.i7(D.be,0.06,0.96,0.88,0.002,e,0),C.i7(D.be,0.06,0.04,0.004,0.92,e,0),C.i7(D.be,0.936,0.04,0.004,0.92,e,0),C.i7(D.be,0.09,0.07,0.82,0.001,w,0),C.i7(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i7(D.jF,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i7(D.jF,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i7(D.jF,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i7(D.be,0,0,0.3,0.09,w|1140850688,0),C.i7(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i7(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i7(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i7(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i7(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i7(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i7(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nS(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i7(D.be,0.09,0.12,0.16,0.006,e,0),C.i7(D.be,0.05,0.03,0.9,0.001,w,0),C.i7(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hXL(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bye=j
$.PQ=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.ftt()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a5,"",1,C.bz6(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.ci,D.lo,1,0,0))
if(a9)A.d.v(q,C.hKU(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i0f(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fts(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a5,a1,a3*9/16,C.bz6(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.ci,D.lo,a3,a4,a5))
return C.rm(s,r,0,0,q,j+"_slide",D.q1,"","","",D.dd)},
rl:function rl(d,e){this.a=d
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
ftt:function ftt(){},
fts:function fts(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hB0(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ccx(),x.N)
s=B.B(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.zb(u,t,s,B.t(w==null?"":w))},
fB8(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fB8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hcm){w=1
break}$.hcm=!0
t=4
w=7
return B.b(B.az(),$async$fB8)
case 7:r=e
q=B.aT(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.js(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gS(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gS(h)
l=C.hB0(m)
if(l!=null)J.ch(n,l)}$.Ch.cg(0,B.t(o.a),new C.fB9(n))}C.fUu()
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
return B.i($async$fB8,v)},
fUu(){var w,v=new B.S(Date.now(),0,!1).bP(-12e8)
for(w=new B.dt($.Ch,$.Ch.r,$.Ch.e);w.C();)J.no(w.d,new C.fhZ(v))
$.Ch.bn($.Ch,new C.fi_())},
aMW(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMW=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aMW)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Ch,B.a3($.Ch).k("cK<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gS(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMW)
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
return B.i($async$aMW,v)},
i0R(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fUu()
w=$.Ch.cg(0,d,new C.fBb())
v=Date.now()
u=B.B(e,B.a3(e).k("co.E"))
J.pp(w,0,new C.zb(new B.S(v,0,!1),f,u,g))
C.aMW()},
i0O(d){var w,v=$.Ch.h(0,d)
if(v==null||J.cl(v))return
w=J.cE(v)
w.cA(v,0)
if(w.gam(v))$.Ch.W(0,d)
C.aMW()},
zb:function zb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccx:function ccx(){},
fB9:function fB9(d){this.a=d},
fhZ:function fhZ(d){this.a=d},
fi_:function fi_(){},
fBb:function fBb(){},
i0T(d){return A.d.dL(D.vM,new C.fBe(d),new C.fBf())},
hAZ(d){var w
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
hAY(d){var w
switch(d.a){case 0:w=D.ak9
break
case 1:w=A.y2
break
case 2:w=A.alh
break
case 3:w=I.ajN
break
case 4:w=A.akF
break
case 5:w=A.lM
break
default:w=null}return w},
hNS(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Pj[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Pj[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hB_(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i0P(d,e,f,g,h){var w=new B.K(D.vM,new C.fB7(),x.eC).aI(0,", "),v=""+d,u=C.hhH(h),t=F.fuS(h),s=C.hdY(g),r=e.t(0,D.HB)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HC)?'- New slides get an "icon3d" from: '+A.d.aI(D.Pj,", ")+".\n":"",p=e.t(0,D.Cm)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i0Q(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vM,new C.fBa(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.HB)){p.a=s
w=s}else w=""
if(e.t(0,D.HC))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Pj,", ")+".\n")
if(e.t(0,D.Cm))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hhH(d)
v=F.fuS(d)
u=C.hdY(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agi(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CI(a3,"{"),a5=J.fMR(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KS(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cl(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gS(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fz7(),m).c_(0,new C.fz8())
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
f=C.hNS(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7j(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b7(D.vM,new C.fz9(r))?r:a7
o=C.fhd(J.q(w,"logo_frame"),D.BM)
n=C.fhd(J.q(w,"logo_ring"),D.BH)
m=C.fhd(J.q(w,"photo_frame"),D.BM)
l=C.fhd(J.q(w,"photo_ring"),D.BH)
return new C.aq6(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0U(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hgP(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Cn),f7=f6?C.hHC():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eJ()
v.dB(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.ft(t,v)
s=u.c
s=new C.nG("luxe",u.a,A.lM,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i0T(f9.b)
r=g2.t(0,D.a4c)||f6
q=g2.t(0,D.HB)
p=g2.t(0,D.Rf)
o=new C.ftx()
n=B.a([],x.g)
m=new C.ftA(o,w,r)
l=new C.ftz(o,r)
k=new C.fty(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b7(u,new C.ftw(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cRY[b8]
c0=D.cQU[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eIt.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eI,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eI,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mx,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q2,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Rc
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kT,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ck
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mx,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q2,500,f2,f0))
d3=D.mw
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.u7:D.ci
c1.push(new C.eI(b4,D.a4a,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mw
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mx,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q2,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Rc
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eI,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eI,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.be,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.be,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Hz,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mw}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hJd(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.df0[A.o.F(b1,6)]:s
n.push(new C.lD(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bh(e4,e4,e4,e4,D.Cj,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fvV(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fvV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cm)
n=e.t(0,D.HC)
if(!o&&!n){u=D.a39
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fvY(o,s[r],n,$.hMD,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$fvV)
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
return B.i($async$fvV,v)},
fuV(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fuV=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i0Q(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMg(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fuV)
case 3:u=s.aMC(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fuV,v)},
bAK(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bAK=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ec(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.i0R(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agi(i,"colorful")
t=C.i0P(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMg(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hl),$async$bAK)
case 3:u=o.aMC(m,f,h,g,D.dT9,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAK,v)},
aMg(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMg=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v8(null,""),$async$aMg)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n1(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qJ(t,d,g,null),$async$aMg)
case 7:q=i
p=q.b
if(p!=null){o=C.agi(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.Ky(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMg,v)},
aMC(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMC=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cm)||e.t(0,D.HC)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.Cm)}w=6
return B.b(C.fvV(d,t),$async$aMC)
case 6:s=k
w=4
break
case 5:s=D.a39
case 4:t=d.c
w=A.d.b7(t,new C.faP())?7:9
break
case 7:r=$.hiz
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aMC)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hgP(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hB_(new C.aq6(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.B(new B.K(m,new C.faQ(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jK<co.E,n>")
t=B.B(new B.jK(e,new C.faR(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rf)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMC,v)},
fXc(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a20[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
i4T(d){return B.bV(A.K,null,new C.fK4(),d,!0,!0,!0,null,!1,!1,x.I)},
hId(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcv().aJ(d)},
i4S(d,e,f){return B.bV(A.K,null,new C.fK3(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fXd(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fXe(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fhd(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b7(e,new C.fhe(w))?w:""},
hdY(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hix(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agi(a1==null?"":a1,a0),a3=C.agi(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r7(new B.a2(r,new C.fBg(t[p]),q))
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
g=B.B(new B.a2(k,new C.fBh(),v),r)
A.d.b_(g,new C.fBi())
if(g.length===0)continue
f=new C.fBj(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i19(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aF8
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dV4
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dV5
return null},
hdz(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bu(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i0U(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.o4
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
if(C.hdz(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hdz(n,i,v,u))if(n.w>10){f=h+1
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
i0S(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agi(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a20[r]
if(q.b===s)w.K(0,q)}}v=C.fXd(e)
u=C.fXe(e)
p=C.hgP(n,D.a39,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fBc(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jK<co.E,n>")
o=B.B(new B.jK(w,new C.fBd(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rf)
return p},
i4F(d,e,f){return B.bV(A.K,null,new C.fJh(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hHC(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eJ()
s.dB(t)
w=D.cwf[s.aB(10)]
v=new C.eb6(s)
u=x.N
return new C.eb5(w,s.aB(4),J.fo(v.$1$2(D.cWc,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.daK,2+s.aB(2),u),v.$1$2(D.d4d,2,u),v.$1$2(D.ddA,4,x.fP),t)},
hJd(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eJ()
a1.dB(a5.w+a3*13)
w=new C.f7k(a4)
v=new C.f7m(a4,d)
u=new C.f7l(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fR(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fR(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0U(a0,52),"lux_spot",a5.wg(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wg(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aDW(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wg(0,f),D.dd,150,C.a0U(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wg(0,f),D.dd,120,C.a0U(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a0U(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wg(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0U(a0,208),"lux_rule",a5.aDW(0,"shimmer",r),D.u6,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0U(a0,144),"lux_rule2","",D.Hz,220))}l=!A.d.b7(a2,new C.f7j())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wg(0,"crest"),350))
else{o=a1.ha()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wg(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0U(r,242)
j=a5.wg(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q2,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0U(r,242),"lux_g2",a5.wg(0,"orbit"),D.q2,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fR(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wg(0,"velvet")))},
nG:function nG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fBe:function fBe(d){this.a=d},
fBf:function fBf(){},
vL:function vL(d,e){this.a=d
this.b=e},
a7j:function a7j(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aq6:function aq6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fB7:function fB7(){},
fBa:function fBa(){},
fz7:function fz7(){},
fz8:function fz8(){},
fz9:function fz9(d){this.a=d},
ftx:function ftx(){},
ftA:function ftA(d,e,f){this.a=d
this.b=e
this.c=f},
ftz:function ftz(d,e){this.a=d
this.b=e},
fty:function fty(d,e){this.a=d
this.b=e},
ftw:function ftw(d){this.a=d},
fvY:function fvY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fvW:function fvW(d){this.a=d},
fvX:function fvX(d){this.a=d},
faP:function faP(){},
faQ:function faQ(){},
faR:function faR(){},
fK4:function fK4(){},
a_I:function a_I(d){this.a=d},
aGg:function aGg(d,e,f,g,h){var _=this
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
eVr:function eVr(d,e,f){this.a=d
this.b=e
this.c=f},
eVs:function eVs(d,e){this.a=d
this.b=e},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVq:function eVq(d,e){this.a=d
this.b=e},
eVo:function eVo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eVj:function eVj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eVn:function eVn(d,e){this.a=d
this.b=e},
eVi:function eVi(d,e){this.a=d
this.b=e},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d,e){this.a=d
this.b=e},
eV7:function eV7(d,e){this.a=d
this.b=e},
eV8:function eV8(d,e){this.a=d
this.b=e},
eVa:function eVa(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVc:function eVc(d){this.a=d},
eVd:function eVd(d){this.a=d},
eV9:function eV9(d,e){this.a=d
this.b=e},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVF:function eVF(d){this.a=d},
eVG:function eVG(d){this.a=d},
eVE:function eVE(d){this.a=d},
eVH:function eVH(d){this.a=d},
eVD:function eVD(d){this.a=d},
eVJ:function eVJ(d){this.a=d},
eVC:function eVC(d,e){this.a=d
this.b=e},
eVK:function eVK(d){this.a=d},
eVB:function eVB(d,e){this.a=d
this.b=e},
eVL:function eVL(d){this.a=d},
eVA:function eVA(d){this.a=d},
eVM:function eVM(d){this.a=d},
eVz:function eVz(d,e){this.a=d
this.b=e},
eVN:function eVN(d){this.a=d},
eVy:function eVy(d,e){this.a=d
this.b=e},
eVO:function eVO(d){this.a=d},
eVx:function eVx(d){this.a=d},
eVP:function eVP(d,e){this.a=d
this.b=e},
eVw:function eVw(d,e){this.a=d
this.b=e},
eVQ:function eVQ(d){this.a=d},
eVI:function eVI(d){this.a=d},
eVv:function eVv(d,e){this.a=d
this.b=e},
eVf:function eVf(d,e,f){this.a=d
this.b=e
this.c=f},
eVg:function eVg(d,e,f){this.a=d
this.b=e
this.c=f},
eVu:function eVu(d,e){this.a=d
this.b=e},
eVt:function eVt(d,e){this.a=d
this.b=e},
fK3:function fK3(d,e){this.a=d
this.b=e},
a_H:function a_H(d,e,f){this.c=d
this.d=e
this.a=f},
aGf:function aGf(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eV0:function eV0(d){this.a=d},
eV1:function eV1(d){this.a=d},
eV2:function eV2(d,e){this.a=d
this.b=e},
eV3:function eV3(d){this.a=d},
eV4:function eV4(d){this.a=d},
eV_:function eV_(d,e){this.a=d
this.b=e},
eV5:function eV5(d,e){this.a=d
this.b=e},
eV6:function eV6(d,e){this.a=d
this.b=e},
fhe:function fhe(d){this.a=d},
b_Z:function b_Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCP:function aCP(d,e,f){this.c=d
this.d=e
this.a=f},
biQ:function biQ(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
eb8:function eb8(d){this.a=d},
eb7:function eb7(){},
bgn:function bgn(d,e){this.b=d
this.a=e},
fBg:function fBg(d){this.a=d},
fBh:function fBh(){},
fBi:function fBi(){},
fBj:function fBj(d){this.a=d},
aqG:function aqG(d,e){this.a=d
this.b=e},
fBc:function fBc(){},
fBd:function fBd(){},
fJh:function fJh(d,e){this.a=d
this.b=e},
Z5:function Z5(d,e,f){this.c=d
this.d=e
this.a=f},
aAg:function aAg(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dgG:function dgG(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgI:function dgI(d,e){this.a=d
this.b=e},
dgL:function dgL(d){this.a=d},
dgM:function dgM(d,e){this.a=d
this.b=e},
dgK:function dgK(d,e){this.a=d
this.b=e},
dgN:function dgN(d){this.a=d},
dgJ:function dgJ(d,e){this.a=d
this.b=e},
brc:function brc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eb5:function eb5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eb6:function eb6(d){this.a=d},
f7k:function f7k(d){this.a=d},
f7m:function f7m(d,e){this.a=d
this.b=e},
f7l:function f7l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7j:function f7j(){},
aKP:function aKP(){},
fW2(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vD(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_V:function b_V(d,e,f){this.c=d
this.d=e
this.a=f},
bkt:function bkt(d,e){this.c=d
this.a=e},
hYd(d){return A.d.dL(D.GD,new C.fuE(d),new C.fuF())},
hYe(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b0(t,6)
if(w.length===0)return null
v=new B.a2(D.GD,new C.fuG(w),x.b4)
if(!v.gae(0).C())return null
u=v.gL(0)
return new C.jB("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
la:function la(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fuE:function fuE(d){this.a=d},
fuF:function fuF(){},
fuG:function fuG(d){this.a=d},
mQ(d,e,f,g,h){return new C.Ej(f,g,d)},
hKr(d){var w=d.z,v=B.U(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f9k(),v),v.k("J.E"))
d.z=w
d.x=""},
dv(d,e){var w=$.JY
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dw(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ci,D.f_,j,k,l)},
hgC(d,e){var w
C.hKr(d)
w=A.d.dL($.bCL(),new C.fsu(e),new C.fsv())
$.JY=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JY=""}d.z=B.bl(d.z,!0,x.F)},
Ej:function Ej(d,e,f){this.a=d
this.b=e
this.e=f},
f9k:function f9k(){},
fAJ:function fAJ(){},
fAK:function fAK(){},
fAL:function fAL(){},
fAW:function fAW(){},
fB0:function fB0(){},
fB1:function fB1(){},
fB2:function fB2(){},
fB3:function fB3(){},
fB4:function fB4(){},
fB5:function fB5(){},
fB6:function fB6(){},
fAM:function fAM(){},
fAN:function fAN(){},
fAO:function fAO(){},
fAP:function fAP(){},
fAQ:function fAQ(){},
fAR:function fAR(){},
fAS:function fAS(){},
fAT:function fAT(){},
fAU:function fAU(){},
fAV:function fAV(){},
fAX:function fAX(){},
fAY:function fAY(){},
fAZ:function fAZ(){},
fB_:function fB_(){},
fsu:function fsu(d){this.a=d},
fsv:function fsv(){},
iS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eo(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cz(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ci,D.f_,j,k,l)},
bBt(){var w=new B.S(Date.now(),0,!1)
return A.ic[B.bG(w)-1]+" "+B.bQ(w)+", "+B.bz(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
byR(d){return new B.iN((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hPu(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alV(A.cE.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hPy(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fgN(),x.dv).aI(0,"\n")},
hPx(d){switch(d.a){case 2:return A.nm
case 1:case 5:return A.eSO
default:return A.SF}},
hPr(d){switch(d.a){case 2:return A.uH
case 1:case 5:return A.Uv
default:return A.a8Y}},
hPv(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.byR(u),q=(s&255)===0?v:C.byR(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nq(q,p,A.kA)
w=new B.pq(t,t,t,t)}switch(d.ax.a){case 1:return B.ls(v,v,v,new B.ky(r,w,v,A.aab,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wK(B.ls(v,v,q,v,p+0.4,v,v,v))
default:return B.ls(v,v,v,new B.ky(r,w,B.vg(4),A.hE,v),v,v,v,v)}},
hPt(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hPr(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hPy(d)
t=C.byR(d.Q)
s=d.x.a>=700?A.ej:A.vi
r=d.y===A.cD?A.xF:A.aiE
q=d.z
p=new B.CL(w,l,l,B.fa(u,l,l,l,B.h2(l,t,1===q.a?A.aO3:A.aO2,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hPx(d.as)))
break
case 1:case 4:o=C.hPu(d.at)
n=i===D.lo&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wK(B.fa(w,l,l,l,B.h2(l,A.ro,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hp(o,n?A.aa7:A.US,l,l)
break
case 3:w=new B.nq(A.HS,1,A.kA)
u=B.vg(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ls(A.uH,B.fa(t,l,l,l,B.h2(l,D.e6h,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ej,l,!0,l,l,l,l),A.nm),l,new B.ky(E.aGr,new B.pq(w,w,w,w),u,A.hE,l),l,l,l,l)
break
case 2:p=C.hPv(d,e)
break
case 5:p=C.hPs(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h8m(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.arr(m/255,p)}if(w)return new F.vR(k,l,j,l,new B.RD(new B.kx(g,g,f,1/0),p))
if(i===D.kS){i=new B.nq(A.HS,1,A.kA)
i=B.ls(A.uH,p,l,new B.ky(A.oT,new B.pq(i,i,i,i),B.vg(4),A.hE,l),l,l,D.btH,l)}else i=p
return new F.vR(k,l,j,l,new B.fO(g,f,i))},
hPw(d,e,f,g){var w,v=null,u=C.byR(d.e),t=d.f
t=B.a([F.h7_(t!=null?B.ls(v,v,v,new B.ky(v,v,v,A.hE,new B.aVs(E.Uw,A.a8S,B.a([u,C.byR(t)],x.cR),v)),v,v,v,v):B.ls(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fgM(f,g),B.U(w).k("K<1,fe>")))
return F.cpL(t)},
fXg(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fXg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3u(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.VT(A.vY,A.HP,D.buP,null,null,null,!1,null)
o=new B.Bn(o,new C.fBp(607,787,p,d))
o.Mc(n,null)
r.push(o)}u=n.jY(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXg,v)},
hPs(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fW2(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaiQ()
if(h==null)h=A.aw5
j=B.tk(4279308564)
w=B.vg(18)
v=new B.nq(B.tk(4287531653),3,A.kA)
u=i.length===0?"My links":i
u=B.a([B.wK(B.fa(u,m,m,m,B.h2(m,A.oT,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ej,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wK(B.fa(A.a.i(l.c),m,m,m,D.eZV,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tk(4280690220)
o=new B.a8A(8,8)
n=A.a.i(r.b)
u.push(new B.nH(D.bo1,new C.avD(new C.ahm(q),B.ls(m,B.fa(n.length===0?A.a.i(r.c):n,m,m,m,D.f1d,A.nm),m,new B.ky(p,m,new B.ahN(o,o,o,o),A.hE,m),m,m,D.bu7,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wK(B.fa(k,m,m,m,D.f0s,m))
u.push(new C.avD(C.hpa(k),t))}return B.ls(m,B.yw(u,A.La,A.lm),m,new B.ky(j,new B.pq(v,v,v,v),w,A.hE,m),m,m,D.boS,m)},
fgN:function fgN(){},
fgM:function fgM(d,e){this.a=d
this.b=e},
fBp:function fBp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag5(d){var w,v
for(w=0;w<32;++w){v=D.Gt[w]
if(v.a===d)return v}return null},
hb_(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cE.aJ(A.a.b0(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hjF(d,e){return B.a6(d,!1).c8(B.e8(new C.fHH(e),!0,null,x.fB))},
hjE(d,e){return B.bV(A.K,null,new C.fHG(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iW:function iW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ea:function Ea(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
MZ:function MZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bic:function bic(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a8$=f
_.c=_.a=null},
dS6:function dS6(d){this.a=d},
dS5:function dS5(d,e,f){this.a=d
this.b=e
this.c=f},
dS4:function dS4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpM:function bpM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eUe:function eUe(d,e){this.a=d
this.b=e},
bdg:function bdg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYP:function aYP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c74:function c74(){},
c75:function c75(d){this.a=d},
c76:function c76(d,e,f){this.a=d
this.b=e
this.c=f},
c77:function c77(d,e,f){this.a=d
this.b=e
this.c=f},
fHH:function fHH(d){this.a=d},
YE:function YE(d,e){this.c=d
this.a=e},
ayE:function ayE(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d5T:function d5T(d,e,f){this.a=d
this.b=e
this.c=f},
d5Y:function d5Y(d){this.a=d},
d5Z:function d5Z(d){this.a=d},
d5X:function d5X(d){this.a=d},
d6_:function d6_(d){this.a=d},
d5W:function d5W(d,e){this.a=d
this.b=e},
d60:function d60(d){this.a=d},
d5V:function d5V(d){this.a=d},
d61:function d61(d){this.a=d},
d5U:function d5U(d,e){this.a=d
this.b=e},
d62:function d62(d,e){this.a=d
this.b=e},
fHG:function fHG(d){this.a=d},
fHF:function fHF(d){this.a=d},
fHE:function fHE(d,e,f){this.a=d
this.b=e
this.c=f},
fHD:function fHD(d,e){this.a=d
this.b=e},
aKi:function aKi(){},
i4R(d){return B.bV(A.K,null,new C.fK2(),d,!0,!0,!0,null,!1,!1,x.N)},
fK2:function fK2(){},
YZ:function YZ(d){this.a=d},
beK:function beK(d){this.d=d
this.c=this.a=null},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcH:function dcH(d){this.a=d},
hLW(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.x7},
i_8(d){var w,v=A.d.gL(d.split("@"))
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
i_7(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hLW(d)
switch(q){case"shimmer":return B.nL(A.a9j,g,new C.fy5(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.be7(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dT(B.eb(A.A,B.dc(C.fOc(g,B.a4n(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdP(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eD(A.A,e*0.5,B.eb(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dm()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fz(e)
u.mE(Math.sin(e)*0.3)
return B.dT(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.bmE(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8K(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8n(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.btx(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqz(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bpI(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bd9(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.eb(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bS(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eD(A.A,s*0.06,B.eb(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fy5:function fy5(d,e){this.a=d
this.b=e},
be7:function be7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdP:function bdP(d,e,f){this.b=d
this.c=e
this.a=f},
bmE:function bmE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8K:function b8K(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8n:function b8n(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btx:function btx(d,e,f){this.b=d
this.c=e
this.a=f},
bqz:function bqz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpI:function bpI(d,e,f){this.b=d
this.c=e
this.a=f},
bd9:function bd9(d,e,f){this.b=d
this.d=e
this.a=f},
d5A:function d5A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xi:function xi(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fy8(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kS},
i_d(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fy9())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aPb(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i_c(d,e){var w,v,u,t,s,r=d.db
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
afJ(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afJ=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fqv(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dG,null,new C.fqw(e),d,!0,!0,!1,A.lp,!1,!1,x.N),$async$afJ)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fXS(d),$async$afJ)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KJ(d,"Search states\u2026","",A.jZ,"Choose state"),$async$afJ)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fWO(s)
if(p==null)p=A.d.gL(D.Q6)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fya(p.d)
k=x.u
j=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ci,D.lo,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Ck(i,0.016,D.kT,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Ck(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Ck(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.K8("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.K8("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fTN(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.byk("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0v("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0v("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0v("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0v("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.byk("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Ck(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.eo(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.ci,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fTN(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.byk("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hcZ("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hcZ("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0v("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0v("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.byj("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.byj("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.byk("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.K8("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.K8("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.byj("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.byj("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.byk("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0v("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.byj("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0v("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fTN(0.22,0.83,0.56,4291404327,i),h)
h.push(C.K8("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.K8("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bh(null,null,null,null,D.o4,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rm(m,null,0,0,j,n,D.q1,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afJ,v)},
fy9:function fy9(){},
fqv:function fqv(){},
fqw:function fqw(d){this.a=d},
fqt:function fqt(d){this.a=d},
fqu:function fqu(d){this.a=d},
hOX(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hOW(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mC
case"lineThrough":return A.zj
default:return A.aD}},
eo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eI(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hf2(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.PT[w]
if(v.b===u)return v}return D.dd},
hLk(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cNR[w]
if(v.b===u)return v}return D.cQ},
hRJ(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dbm[w]
if(v.b===u)return v}return D.be},
rm(d,e,f,g,h,i,j,k,l,m,n){return new C.lD(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h5K(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hNk(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hf2(d.h(0,"transition"))
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
n=B.cD(n,new C.ccu(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a3(n).k("J.E"))}return C.rm(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hNk(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.anY[w]
if(v.b===u)return v}return D.mw},
Bh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hZ(p,t,a1,h,i,w,a0==null?B.a([C.rm(4294967295,null,0,0,null,C.cC(),D.q1,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vj(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hJt(a6.h(0,"aspectRatio"))
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
o=C.kt(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kt(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cch(),x.N)
f=B.B(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cci(),x.N)
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
g=B.cD(g,new C.ccj(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a3(g).k("J.E"))}return C.Bh(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rm(4294967295,a3,0,0,a3,C.cC(),D.q1,"","","",D.dd)],x.g):g,v,p,o,s)},
kt(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hJt(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dcc[w]
if(v.b===u)return v}return D.Cj},
cC(){var w=Date.now(),v=$.iY
$.iY=v+1
return""+1000*w+"_"+v},
ccL(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Ck){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.ci,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.ci,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.ci,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ci,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.ci,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ci,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ci,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.K(d.z,C.eo(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.ci,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.ci,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.eo(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.ci,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.ci,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.eo(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.ci,D.f_,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.ci,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.ci,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,22,A.bl,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ci,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.ci,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bl,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ci,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.ci,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bl,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ci,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hB9(d){return A.d.dL(D.a1F,new C.ccM(d),new C.ccN())},
hB6(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gS(t)
if(!q.b(u))continue
try{J.ch(v,C.Vj(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fQj(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ccH(t)
for(w=J.aV(d);w.C();)s.$1(w.gS(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b_(u,new C.ccG())
return u},
h5N(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ccC()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aq7(d){return C.hB4(d)},
hB4(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ccF()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1H(m),$async$aq7)
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
return B.b(B.az(),$async$aq7)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.h5M.h(0,m))
n=C.fQj(C.fQj(j,r),o)
if(n.length===0){u=C.h5N(C.h5N(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aq7,v)},
ccB(d){return C.hB3(d)},
hB3(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ccB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ccB)
case 7:r=f
q=r.rX("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
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
return B.i($async$ccB,v)},
b00(d,e){return C.hB5(d,e)},
hB5(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b00=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b00)
case 6:s=g
q=s.rX("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.KR(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b00)
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
return B.i($async$b00,v)},
Vk(d,e){return C.hB7(d,e)},
hB7(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vk=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h5L.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aq7(a3),$async$Vk)
case 5:p=a6
case 4:w=6
return B.b(C.ccB(a3),$async$Vk)
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
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcw()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a2<J.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.ccI(o),l),l.k("J.E"))
A.d.b_(e,new C.ccJ())
$.h5L.n(0,a0,e)
n=B.U(e).k("K<1,a4<n,@>>")
n=B.B(new B.K(e,new C.ccK(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h5M.n(0,a0,r)
t=8
w=11
return B.b(B.agw(a0,r),$async$Vk)
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
return B.b(B.az(),$async$Vk)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vk)
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
return B.i($async$Vk,v)},
Ii:function Ii(d,e){this.a=d
this.b=e},
aq5:function aq5(d,e){this.a=d
this.b=e},
uw:function uw(d,e){this.a=d
this.b=e},
mr:function mr(d,e){this.a=d
this.b=e},
hw:function hw(d,e){this.a=d
this.b=e},
eI:function eI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ccv:function ccv(){},
ccw:function ccw(){},
ccu:function ccu(){},
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
cck:function cck(){},
ccl:function ccl(){},
cch:function cch(){},
cci:function cci(){},
ccj:function ccj(){},
jB:function jB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ccM:function ccM(d){this.a=d},
ccN:function ccN(){},
ccH:function ccH(d){this.a=d},
ccG:function ccG(){},
ccC:function ccC(){},
ccD:function ccD(){},
ccE:function ccE(){},
ccF:function ccF(){},
ccI:function ccI(d){this.a=d},
ccJ:function ccJ(){},
ccK:function ccK(){},
i_o(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fyI(e,v,d,B.aX(w))
w.$1(new C.fyE())
w.$1(new C.fyF())
w.$1(new C.fyG())
w.$1(new C.fyH())
return v},
fyI:function fyI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyE:function fyE(){},
fyF:function fyF(){},
fyG:function fyG(){},
fyH:function fyH(){},
b_Y:function b_Y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccq:function ccq(d){this.a=d},
ccp:function ccp(){},
ccr:function ccr(){},
ccs:function ccs(d,e){this.a=d
this.b=e},
cct:function cct(d){this.a=d},
anj:function anj(d,e){this.c=d
this.a=e},
bhX:function bhX(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dEj:function dEj(){},
aK3:function aK3(){},
ccy(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ccy=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eQb)
u=!1
w=1
break}u=B.kR(!1,d,t,!1,null,A.a4e,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ccy,v)},
hB1(d){var w=A.d.bd(D.GD,new C.ccz(d))
if(w<0)return!0
return w>=4},
hB2(d){var w=A.d.bd($.bCL(),new C.ccA(d))
if(w<0)return!0
return w>=5},
ccz:function ccz(d){this.a=d},
ccA:function ccA(d){this.a=d},
i13(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yl()
$.q5().pH(t,new C.fBw(s),!0)
u=B.a([B.Dw(v,A.q5,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f_o,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.n7,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.r,u,v)},
fBw:function fBw(d){this.a=d},
i0F(){return C.fX9()},
hYC(){return C.bAH()},
i_F(){return C.fX0()},
aOf(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOf=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fAC(d,f),$async$aOf)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOf,v)},
fAC(d,e){var w=0,v=B.j(x.H),u
var $async$fAC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.byS
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.K,null,new C.fAD(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fAC)
case 2:return B.h(null,v)}})
return B.i($async$fAC,v)},
fAD:function fAD(d,e){this.a=d
this.b=e},
acA:function acA(d,e,f){this.c=d
this.d=e
this.a=f},
enc:function enc(d,e){this.a=d
this.b=e},
end:function end(d,e){this.a=d
this.b=e},
ene:function ene(d,e){this.a=d
this.b=e},
enf:function enf(d){this.a=d},
acS:function acS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_X(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_W(g,m,f,d,e,h,l,k,j,o,i,null)},
hhW(d){return B.cp(new C.fyD(d))},
fXb(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i0N(d){if(d===D.ci)return"None"
return C.fXb(d)},
bzn(d,e,f,g){return C.hRQ(d,e,f,g)},
hRQ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bzn=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fU5&&t.pn())t.eI()
$.fU5=!0
s.a=null
w=3
return B.b(B.hR(A.bh,!0,"Animation preview",d,new C.fjk(s,e,g,f),null,A.eE,!0,x.H),$async$bzn)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fU5=!1
case 1:return B.h(u,v)}})
return B.i($async$bzn,v)},
fKR(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fKR=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,280,440)
s=f===D.ci
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fXb(f)+" Slide transition preview"
s=s?Af.EW:A.v2
w=3
return B.b(C.bzn(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aHF(f,null),A.aq),null),r),$async$fKR)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fKR,v)},
hhe(d,e,f){var w,v,u=null,t=A.cs.aw(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dT(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dT(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dT(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dT(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.eb(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.eb(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dm()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fz((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dm()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.jT((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dm()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mE((1-t)*0.8)
v=0.6+t*0.4
w.jD(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dT(B.dc(f,t),new B.u((1-t)*24,0))}},
bCg(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,300,440)
s=f===D.ci
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fXb(f)+" Element animation preview"
s=s?Af.EW:A.v2
w=3
return B.b(C.bzn(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayo(f,null),A.aq),null),r),$async$bCg)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCg,v)},
i0M(d){var w,v,u,t,s=$.afb.W(0,d)
if(s!=null){$.afb.n(0,d,s)
return s}w=A.cE.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
$.afb.n(0,d,w)
v=$.fUT=$.fUT+w.length
u=B.a3($.afb).k("cu<1>")
for(;;){if(!(v>41943040&&$.afb.a>1))break
t=new B.cu($.afb,u).gae(0)
if(!t.C())B.ba(B.fA())
v-=$.afb.W(0,t.gS(0)).length
$.fUT=v}return w},
i0t(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kS(0,d),j=B.B(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Sc(s,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Sc(t,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Sc(u,A.cv))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b0(d,r)
v.push(B.dn(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1G(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.kf(e))
return m
case"rounded":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.geb()*0.18
m.E(new B.iU(B.bA(e,new B.aW(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbR().a,e.b))
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
m.E(new B.b5(e.gbR().a,e.b))
m.E(new B.ap(e.c,e.gbR().b))
m.E(new B.ap(e.gbR().a,e.d))
m.E(new B.ap(e.a,e.gbR().b))
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
m.b8B(new B.u(t,p),new B.aW(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.o_(e))
return m}},
fwc(d,e,f){return B.cp(new C.fwd(D.eIS.t(0,d),d,f,e))},
b_W:function b_W(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cco:function cco(d){this.a=d},
ccn:function ccn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccm:function ccm(){},
b_T:function b_T(d,e){this.b=d
this.a=e},
fyD:function fyD(d){this.a=d},
fyC:function fyC(d,e){this.a=d
this.b=e},
fjk:function fjk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fji:function fji(d){this.a=d},
fjj:function fjj(d,e){this.a=d
this.b=e},
aHF:function aHF(d,e){this.c=d
this.a=e},
bt3:function bt3(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f1E:function f1E(d,e,f){this.a=d
this.b=e
this.c=f},
aIh:function aIh(d,e){this.b=d
this.a=e},
Ul:function Ul(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bi9:function bi9(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dQj:function dQj(d){this.a=d},
dQi:function dQi(d){this.a=d},
dQh:function dQh(d){this.a=d},
Ih:function Ih(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccg:function ccg(d){this.a=d},
ccf:function ccf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayo:function ayo(d,e){this.c=d
this.a=e},
bcD:function bcD(){this.d=0
this.c=this.a=null},
d2P:function d2P(d){this.a=d},
d2O:function d2O(d){this.a=d},
a71:function a71(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biO:function biO(d,e){var _=this
_.d=null
_.bq$=d
_.a8$=e
_.c=_.a=null},
eaP:function eaP(d,e,f){this.a=d
this.b=e
this.c=f},
aYS:function aYS(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bdN:function bdN(d,e,f){this.b=d
this.c=e
this.a=f},
boF:function boF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eRS:function eRS(){},
fwd:function fwd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpF:function bpF(d,e,f){this.b=d
this.c=e
this.a=f},
aKh:function aKh(){},
aKN:function aKN(){},
aM7:function aM7(){},
fzD(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fzD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wT.c5().LC(D.d9s,A.tB,!0),$async$fzD)
case 3:r=e
if(r==null||J.cl(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i0n(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fzD,v)},
i0n(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7k(d,new B.a_k(A.cS.gcv().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hTr(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7k(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c5.Kp(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7k(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hTr(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cvj().cHm(B.r6(d,A.hT,o,o),o,o,!1).cJ4(0,"word/document.xml")
if(n==null)return""
w=n.cR5()
v=A.c5.Kp(0,w==null?$.hk9():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kS(0,r)
p=A.a.i(B.cD(q,new C.fm9(),B.a3(q).k("J.E"),t).fW(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7k:function a7k(d,e,f){this.a=d
this.b=e
this.c=f},
fm9:function fm9(){},
hB8(d,e,f,g,h,i,j,k,l){return new C.Nq(l,e,d,g,f,i,h,j,k,null)},
Nq:function Nq(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDf:function aDf(d,e,f,g,h,i,j,k,l){var _=this
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
etq:function etq(d){this.a=d},
eto:function eto(){},
etp:function etp(d){this.a=d},
epO:function epO(){},
epP:function epP(){},
epQ:function epQ(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
erc:function erc(){},
erd:function erd(){},
epb:function epb(){},
esw:function esw(d){this.a=d},
etm:function etm(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
et9:function et9(d){this.a=d},
eta:function eta(){},
etb:function etb(){},
etc:function etc(d){this.a=d},
etd:function etd(){},
eoA:function eoA(d){this.a=d},
etn:function etn(){},
eqv:function eqv(d,e){this.a=d
this.b=e},
eoy:function eoy(d){this.a=d},
eoz:function eoz(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqT:function eqT(d,e,f){this.a=d
this.b=e
this.c=f},
eqU:function eqU(d){this.a=d},
equ:function equ(){},
eqt:function eqt(d){this.a=d},
eqr:function eqr(){},
eqq:function eqq(d){this.a=d},
eqs:function eqs(){},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
eoC:function eoC(){},
eoD:function eoD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqN:function eqN(){},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqL:function eqL(d,e,f){this.a=d
this.b=e
this.c=f},
eqM:function eqM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqF:function eqF(d,e,f){this.a=d
this.b=e
this.c=f},
eqG:function eqG(d,e,f){this.a=d
this.b=e
this.c=f},
eqH:function eqH(d){this.a=d},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e){this.a=d
this.b=e},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d){this.a=d},
eqR:function eqR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqP:function eqP(d){this.a=d},
er7:function er7(){},
er8:function er8(){},
er9:function er9(){},
era:function era(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er4:function er4(d){this.a=d},
er6:function er6(){},
er5:function er5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
er2:function er2(d,e,f){this.a=d
this.b=e
this.c=f},
er3:function er3(d,e){this.a=d
this.b=e},
erb:function erb(){},
eqD:function eqD(d,e){this.a=d
this.b=e},
eoT:function eoT(){},
eoU:function eoU(d,e,f){this.a=d
this.b=e
this.c=f},
eoV:function eoV(d){this.a=d},
eoW:function eoW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eoS:function eoS(d){this.a=d},
erh:function erh(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
ere:function ere(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eri:function eri(d,e){this.a=d
this.b=e},
enx:function enx(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoP:function eoP(d){this.a=d},
erq:function erq(d,e,f){this.a=d
this.b=e
this.c=f},
eoL:function eoL(d,e){this.a=d
this.b=e},
eoK:function eoK(d){this.a=d},
erp:function erp(d,e,f){this.a=d
this.b=e
this.c=f},
eoB:function eoB(d){this.a=d},
epc:function epc(){},
et7:function et7(d,e){this.a=d
this.b=e},
et8:function et8(d,e,f){this.a=d
this.b=e
this.c=f},
esx:function esx(d,e,f){this.a=d
this.b=e
this.c=f},
eny:function eny(d){this.a=d},
env:function env(d,e){this.a=d
this.b=e},
enl:function enl(d,e){this.a=d
this.b=e},
eni:function eni(d){this.a=d},
enh:function enh(d,e){this.a=d
this.b=e},
enj:function enj(d,e){this.a=d
this.b=e},
eoN:function eoN(d){this.a=d},
eoO:function eoO(d,e){this.a=d
this.b=e},
eoM:function eoM(d){this.a=d},
eo_:function eo_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eo0:function eo0(d,e){this.a=d
this.b=e},
eo4:function eo4(d,e){this.a=d
this.b=e},
eo5:function eo5(d){this.a=d},
eo2:function eo2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eo3:function eo3(d){this.a=d},
eo1:function eo1(){},
enZ:function enZ(d,e,f){this.a=d
this.b=e
this.c=f},
er1:function er1(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
eth:function eth(d,e){this.a=d
this.b=e},
eti:function eti(d){this.a=d},
etj:function etj(d,e,f){this.a=d
this.b=e
this.c=f},
etf:function etf(d){this.a=d},
esN:function esN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esM:function esM(d,e,f){this.a=d
this.b=e
this.c=f},
esL:function esL(){},
esK:function esK(d,e,f){this.a=d
this.b=e
this.c=f},
esJ:function esJ(d,e){this.a=d
this.b=e},
esG:function esG(d,e,f){this.a=d
this.b=e
this.c=f},
esE:function esE(d){this.a=d},
esF:function esF(d){this.a=d},
esI:function esI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esH:function esH(d){this.a=d},
epG:function epG(d,e){this.a=d
this.b=e},
epF:function epF(d,e){this.a=d
this.b=e},
esy:function esy(){},
et6:function et6(d,e){this.a=d
this.b=e},
et4:function et4(d){this.a=d},
et5:function et5(d){this.a=d},
enq:function enq(d,e){this.a=d
this.b=e},
eno:function eno(d){this.a=d},
enp:function enp(d){this.a=d},
enr:function enr(d,e){this.a=d
this.b=e},
ens:function ens(d,e,f){this.a=d
this.b=e
this.c=f},
enw:function enw(d,e){this.a=d
this.b=e},
enn:function enn(d,e,f){this.a=d
this.b=e
this.c=f},
enm:function enm(d){this.a=d},
ern:function ern(d,e,f){this.a=d
this.b=e
this.c=f},
ete:function ete(d,e,f){this.a=d
this.b=e
this.c=f},
epJ:function epJ(d,e,f){this.a=d
this.b=e
this.c=f},
epI:function epI(){},
eo8:function eo8(d,e,f){this.a=d
this.b=e
this.c=f},
eo9:function eo9(d){this.a=d},
enk:function enk(d,e){this.a=d
this.b=e},
epa:function epa(d,e){this.a=d
this.b=e},
ent:function ent(d,e){this.a=d
this.b=e},
enC:function enC(d){this.a=d},
enD:function enD(d,e){this.a=d
this.b=e},
enE:function enE(d,e){this.a=d
this.b=e},
enB:function enB(d){this.a=d},
enP:function enP(d,e){this.a=d
this.b=e},
enA:function enA(d){this.a=d},
enS:function enS(d){this.a=d},
enT:function enT(d){this.a=d},
enU:function enU(d){this.a=d},
enV:function enV(d){this.a=d},
enW:function enW(d){this.a=d},
enX:function enX(){},
enY:function enY(){},
enF:function enF(d){this.a=d},
enG:function enG(d){this.a=d},
enH:function enH(d){this.a=d},
enI:function enI(d){this.a=d},
enJ:function enJ(d){this.a=d},
enK:function enK(d){this.a=d},
enL:function enL(d){this.a=d},
enM:function enM(d){this.a=d},
enN:function enN(d){this.a=d},
enO:function enO(d){this.a=d},
enQ:function enQ(d){this.a=d},
enR:function enR(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e,f){this.a=d
this.b=e
this.c=f},
ep8:function ep8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ep7:function ep7(d,e,f){this.a=d
this.b=e
this.c=f},
ep6:function ep6(d,e){this.a=d
this.b=e},
enu:function enu(d,e){this.a=d
this.b=e},
eoc:function eoc(d){this.a=d},
eob:function eob(d){this.a=d},
eoa:function eoa(d,e){this.a=d
this.b=e},
eod:function eod(d){this.a=d},
eoe:function eoe(d){this.a=d},
eof:function eof(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
er_:function er_(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqV:function eqV(){},
eqW:function eqW(){},
esz:function esz(){},
esA:function esA(d,e){this.a=d
this.b=e},
esB:function esB(){},
esC:function esC(d){this.a=d},
esD:function esD(d,e){this.a=d
this.b=e},
enz:function enz(d,e){this.a=d
this.b=e},
eoE:function eoE(){},
eoF:function eoF(){},
eoG:function eoG(){},
eoJ:function eoJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoH:function eoH(d,e,f){this.a=d
this.b=e
this.c=f},
eq9:function eq9(d){this.a=d},
eq8:function eq8(){},
eqa:function eqa(d,e){this.a=d
this.b=e},
eqb:function eqb(d,e){this.a=d
this.b=e},
eq7:function eq7(d){this.a=d},
eqc:function eqc(d,e){this.a=d
this.b=e},
eq6:function eq6(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
eq5:function eq5(d){this.a=d},
eqe:function eqe(d,e){this.a=d
this.b=e},
eq4:function eq4(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
eq3:function eq3(d,e){this.a=d
this.b=e},
eqg:function eqg(d,e){this.a=d
this.b=e},
eq2:function eq2(d){this.a=d},
eqh:function eqh(d,e){this.a=d
this.b=e},
eq1:function eq1(d){this.a=d},
epV:function epV(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epX:function epX(d){this.a=d},
epU:function epU(d){this.a=d},
epY:function epY(d,e){this.a=d
this.b=e},
epT:function epT(d){this.a=d},
epZ:function epZ(d,e){this.a=d
this.b=e},
epS:function epS(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
epR:function epR(d){this.a=d},
eq0:function eq0(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep5:function ep5(d){this.a=d},
eoY:function eoY(d){this.a=d},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
ep_:function ep_(d){this.a=d},
ep0:function ep0(d){this.a=d},
ep1:function ep1(d,e){this.a=d
this.b=e},
ep4:function ep4(d){this.a=d},
etk:function etk(d){this.a=d},
etl:function etl(d){this.a=d},
eqk:function eqk(d,e){this.a=d
this.b=e},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqi:function eqi(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
eqm:function eqm(d){this.a=d},
erJ:function erJ(d,e){this.a=d
this.b=e},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erW:function erW(d){this.a=d},
es6:function es6(d){this.a=d},
esh:function esh(d){this.a=d},
eso:function eso(d){this.a=d},
esp:function esp(d){this.a=d},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
ess:function ess(d,e){this.a=d
this.b=e},
erM:function erM(d){this.a=d},
erN:function erN(d){this.a=d},
erO:function erO(d){this.a=d},
erP:function erP(d){this.a=d},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
erT:function erT(d){this.a=d},
erU:function erU(d){this.a=d},
erV:function erV(d){this.a=d},
erX:function erX(d){this.a=d},
erY:function erY(d){this.a=d},
erZ:function erZ(d){this.a=d},
es_:function es_(d){this.a=d},
es0:function es0(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
erz:function erz(d){this.a=d},
es5:function es5(d){this.a=d},
erH:function erH(d){this.a=d},
es7:function es7(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
es8:function es8(d,e){this.a=d
this.b=e},
es9:function es9(d,e){this.a=d
this.b=e},
erF:function erF(d,e,f){this.a=d
this.b=e
this.c=f},
erv:function erv(d,e){this.a=d
this.b=e},
erI:function erI(d){this.a=d},
est:function est(d,e){this.a=d
this.b=e},
esv:function esv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esu:function esu(d,e){this.a=d
this.b=e},
esa:function esa(d,e,f){this.a=d
this.b=e
this.c=f},
erE:function erE(d,e,f){this.a=d
this.b=e
this.c=f},
eru:function eru(d,e,f){this.a=d
this.b=e
this.c=f},
ers:function ers(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
erD:function erD(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
err:function err(d,e){this.a=d
this.b=e},
esc:function esc(d){this.a=d},
erC:function erC(d){this.a=d},
esd:function esd(d){this.a=d},
ese:function ese(d){this.a=d},
esf:function esf(d){this.a=d},
esg:function esg(d){this.a=d},
erB:function erB(d){this.a=d},
esi:function esi(d){this.a=d},
esj:function esj(d){this.a=d},
esk:function esk(d,e){this.a=d
this.b=e},
erA:function erA(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
ery:function ery(d){this.a=d},
esm:function esm(d,e){this.a=d
this.b=e},
erx:function erx(d){this.a=d},
esn:function esn(d,e){this.a=d
this.b=e},
erw:function erw(d){this.a=d},
eo7:function eo7(d,e,f){this.a=d
this.b=e
this.c=f},
eo6:function eo6(d,e){this.a=d
this.b=e},
esQ:function esQ(d,e){this.a=d
this.b=e},
esP:function esP(d,e){this.a=d
this.b=e},
esR:function esR(d,e){this.a=d
this.b=e},
esO:function esO(d,e){this.a=d
this.b=e},
epf:function epf(d,e){this.a=d
this.b=e},
epe:function epe(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
epd:function epd(d){this.a=d},
epN:function epN(){},
epM:function epM(){},
et2:function et2(d){this.a=d},
et1:function et1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et0:function et0(d,e){this.a=d
this.b=e},
esW:function esW(d,e){this.a=d
this.b=e},
et_:function et_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esX:function esX(d,e){this.a=d
this.b=e},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
esU:function esU(d){this.a=d},
esV:function esV(d){this.a=d},
esY:function esY(d,e){this.a=d
this.b=e},
esZ:function esZ(d,e){this.a=d
this.b=e},
et3:function et3(d){this.a=d},
eox:function eox(d){this.a=d},
eow:function eow(d,e,f){this.a=d
this.b=e
this.c=f},
eov:function eov(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eok:function eok(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eol:function eol(d,e){this.a=d
this.b=e},
eom:function eom(d,e){this.a=d
this.b=e},
eon:function eon(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoj:function eoj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoo:function eoo(d,e){this.a=d
this.b=e},
eoq:function eoq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eop:function eop(d,e){this.a=d
this.b=e},
eor:function eor(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoi:function eoi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eos:function eos(d,e){this.a=d
this.b=e},
eoh:function eoh(d,e){this.a=d
this.b=e},
eot:function eot(d,e){this.a=d
this.b=e},
eog:function eog(d){this.a=d},
eou:function eou(d,e){this.a=d
this.b=e},
eqo:function eqo(d){this.a=d},
eqn:function eqn(d){this.a=d},
eqp:function eqp(d,e){this.a=d
this.b=e},
ept:function ept(d,e){this.a=d
this.b=e},
epu:function epu(d,e){this.a=d
this.b=e},
eps:function eps(d,e){this.a=d
this.b=e},
epv:function epv(d,e){this.a=d
this.b=e},
epr:function epr(d,e){this.a=d
this.b=e},
epw:function epw(d,e){this.a=d
this.b=e},
epq:function epq(d,e){this.a=d
this.b=e},
epx:function epx(d,e){this.a=d
this.b=e},
epp:function epp(d,e){this.a=d
this.b=e},
epy:function epy(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
epz:function epz(d,e,f){this.a=d
this.b=e
this.c=f},
epn:function epn(d,e){this.a=d
this.b=e},
epA:function epA(d,e,f){this.a=d
this.b=e
this.c=f},
epm:function epm(d,e){this.a=d
this.b=e},
epB:function epB(d,e){this.a=d
this.b=e},
epl:function epl(d,e,f){this.a=d
this.b=e
this.c=f},
epi:function epi(d,e){this.a=d
this.b=e},
epC:function epC(d,e){this.a=d
this.b=e},
epk:function epk(d,e){this.a=d
this.b=e},
epD:function epD(d,e){this.a=d
this.b=e},
epj:function epj(d,e,f){this.a=d
this.b=e
this.c=f},
eph:function eph(d,e){this.a=d
this.b=e},
epE:function epE(d,e){this.a=d
this.b=e},
epH:function epH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eng:function eng(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erl:function erl(d,e){this.a=d
this.b=e},
erj:function erj(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
aem:function aem(d,e,f){this.a=d
this.b=e
this.c=f},
axL:function axL(d,e){this.c=d
this.a=e},
bbq:function bbq(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cZR:function cZR(d){this.a=d},
cZQ:function cZQ(d){this.a=d},
bbE:function bbE(d,e){this.c=d
this.a=e},
d_c:function d_c(d){this.a=d},
d_d:function d_d(d){this.a=d},
Jj:function Jj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbp:function bbp(){this.d=!1
this.c=this.a=null},
cZO:function cZO(d){this.a=d},
cZK:function cZK(d){this.a=d},
cZP:function cZP(d){this.a=d},
cZJ:function cZJ(d){this.a=d},
cZN:function cZN(d){this.a=d},
cZL:function cZL(d){this.a=d},
cZM:function cZM(d,e){this.a=d
this.b=e},
P2:function P2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ZQ:function ZQ(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(d,e,f){var _=this
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
eu0:function eu0(){},
etR:function etR(d){this.a=d},
eu_:function eu_(d){this.a=d},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
etN:function etN(d){this.a=d},
etO:function etO(d,e){this.a=d
this.b=e},
etP:function etP(d){this.a=d},
etQ:function etQ(d,e,f){this.a=d
this.b=e
this.c=f},
etY:function etY(){},
etZ:function etZ(d){this.a=d},
etU:function etU(d){this.a=d},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
eu1:function eu1(d,e,f){this.a=d
this.b=e
this.c=f},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu2:function eu2(d){this.a=d},
Jq:function Jq(d,e){this.c=d
this.a=e},
bq9:function bq9(d,e){this.b=d
this.a=e},
bgh:function bgh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgg:function bgg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIZ:function aIZ(){},
aL0:function aL0(){},
bvS:function bvS(){},
aL1:function aL1(){},
fBx(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fBx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wT.c5().LC(B.a(["pdf"],x.s),A.tB,!0),$async$fBx)
case 3:q=e
if(q==null||J.cl(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bnq(s,"data:application/pdf;base64,"+A.cS.gcv().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBx,v)},
i0Y(d){var w,v,u,t,s,r
try{w=B.jm(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kS(0,w).gM(0)
if(t>0){s=J.aPD(t,1,200)
return s}}catch(r){}return 1},
fBo(d){return C.i0X(d)},
i0X(d){var w=0,v=B.j(x.T),u
var $async$fBo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBo,v)},
bBs(d,e,f,g){return C.i16(d,e,f,g)},
i16(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bBs=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e7(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hiw(b9,new B.at(r,q))
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
g=new B.qS()
f=B.D0(g,null)
a7=B.M()
a7.r=A.qB.gp(0)
f.aX(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.M()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fz
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
b2.delete()}a0=a2}a3=g.pu()
w=7
return B.b(a3.z3(800,h),$async$bBs)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hq(A.fX),$async$bBs)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eR(A.dD.gaM(a5))
a7=A.cS.gcv().aJ(a7)
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
return B.i($async$bBs,v)},
aOQ(d,e,f){return C.i0V(d,e,f)},
i0V(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.agK(d,e,f,new C.fBm(r,q),q,"Sign document"),$async$aOQ)
case 3:if(!new B.e7(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bBs(q,t,r.b,r.c),$async$aOQ)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0_(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOQ,v)},
i14(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hbM(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hbM(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b0(A.a.aT(A.o.fR(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b0(A.a.aT(A.o.fR(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lo&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hbo(q.ay)+";border:2px solid "+C.hbo(q.ch)+'"></div>'
break
case 5:l=C.fW2(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaiQ()
if(p==null)p=A.aw5
n=B.U(p)
k=n.k("pR<1>")
j=new B.pR(p,0,8,k)
j.GS(p,0,8,n.c)
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
hbo(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hbM(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bBq(d,e){var w=0,v=B.j(x.H)
var $async$bBq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fBv(e,C.i14(e),d),d,null,!0,!0,x.H),$async$bBq)
case 2:return B.h(null,v)}})
return B.i($async$bBq,v)},
bBr(){var w=0,v=B.j(x.T),u,t,s
var $async$bBr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Ge(92,2400),$async$bBr)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fBo(s),$async$bBr)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBr,v)},
aOR(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fXg(d),$async$aOR)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Z.fDM(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOR,v)},
h5J(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0_:function b0_(d,e,f){this.a=d
this.b=e
this.c=f},
fBm:function fBm(d,e){this.a=d
this.b=e},
fBv:function fBv(d,e,f){this.a=d
this.b=e
this.c=f},
fBs:function fBs(d){this.a=d},
fBt:function fBt(d,e,f){this.a=d
this.b=e
this.c=f},
fBu:function fBu(d,e,f){this.a=d
this.b=e
this.c=f},
i0W(d){return C.kt(d.w)},
i12(d){var w,v,u,t
if(d.length===0||!A.d.da(d,C.i2N()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yj(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hoa()
if(w.b.test(u))return u
return null},
hiy(d,e,f){var w,v,u=C.hwL(d),t=$.pl()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i18(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fh(w,d.b);v.C();){u=w.gS(w).y
t=C.yj(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
fBk(d,e){var w,v=d.y,u=C.yj(v==null?"":v)
if(u!=null)return d.y=u
w=C.i18(new B.a2(e,new C.fBl(d),B.U(e).k("a2<1>")))
v=d.x
return d.y=C.hiy(v==null?"":v,null,w)},
i17(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kt(w.w))return null
v=w.y
return C.yj(v==null?"":v)},
hBa(){var w,v=$.pl(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fW(u)},
Vn(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Vn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$Vn)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f2("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$Vn)
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
return B.i($async$Vn,v)},
Vo(d){return C.hBb(d)},
hBb(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Vo=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$Vo)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hB("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cG,null),$async$Vo)
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
return B.i($async$Vo,v)},
a7m(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7m=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7m)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Vn(),$async$a7m)
case 4:s=a6
r=C.yj(a2==null?"":a2)
if(r==null)r=a3!=null?C.hiy(a3,null,A.If):null
q=x.N
p=B.aX(q)
for(o=J.dk(s),n=J.aV(o.gi0(s)),m=x.f;n.C();){l=n.gS(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yj(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdK(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gS(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cS.gcv().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sh.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yj(J.k(q==null?"":q))
if(f==null)f=C.h5O(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Vo(s),$async$a7m)
case 7:u=new B.aEI(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hBa()
n=r==null
d=n?C.h5O(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcv().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sh.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Vo(s),$async$a7m)
case 8:u=new B.aEI(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7m,v)},
h5O(d){var w,v,u=$.pl()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aq9(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aq9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aq9)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Vn(),$async$aq9)
case 6:t=f
s=J.a5(t)
r=s.gM(t)
s.bn(t,new C.ccO(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.Vo(t),$async$aq9)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aq9,v)},
aq8(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aq8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yj(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aq8)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Vn(),$async$aq8)
case 6:t=o.js(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gS(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yj(J.k(q==null?"":q))===p){u=C.a7l(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aq8,v)},
a7l(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7l=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7l)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Vn(),$async$a7l)
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
try{s=A.c5.ca(0,A.cE.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Sh.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dV(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.Vo(p),$async$a7l)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7l,v)},
i11(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a4<n,@>>")
w=B.B(new B.K(d,new C.fBr(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fBz(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i11(d==null?B.a([],x.D):d,f,g),null)},
fBy(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fBy=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7m(h,d,e,f,g),$async$fBy)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yj(e==null?"":e)
u=new B.aEv(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.k7.gcv().aJ(t)
u=new B.aEv(C.yj(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBy,v)},
fXi(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d_(q,"NGMYSLIDESYNC2|"))return!0
if(J.d_(q,"NGMYSLIDECODE|"))return!0
if(J.d_(q,"NGMY_SL:"))return!0
if(J.f_(q,s)||J.f_(q,r))return!0
if(J.d_(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
i15(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fXi(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b0(v,u))
if(C.fXi(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b0(v,s))
if(C.fXi(t))return t}}return null},
fBn(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c5.ca(0,A.cE.aJ(J.mC(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hKR(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agv(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aq8(t[1]),$async$agv)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fBn(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yj(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aq8(r),$async$agv)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fBn(s)
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
return B.b(C.a7l(t[1]),$async$agv)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fBn(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fBn(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agv,v)},
hKR(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sh.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fXf(C.Vj(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cD(t,new C.f9K(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
fXf(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gS(u)
if(t.b(s)){r=Date.now()
q=$.iY
$.iY=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vj(B.a1(o,x.N,x.z))
if(e&&C.kt(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bP(144e8).ac()
return p},
bBb(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gd(),$async$bBb)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agv(s),$async$bBb)
case 4:t=e
u=J.cl(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBb,v)},
fK5(d){var w=0,v=B.j(x.T),u,t
var $async$fK5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.W0,!0,"Dismiss",d,new C.fK6(),new C.fK7(),A.EU,!0,x.N),$async$fK5)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eOo)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fK5,v)},
i4U(d,e,f,g,h){return B.a6(d,!1).c8(B.e8(new C.fK8(h,e,g,f),!0,null,x.H))},
fBl:function fBl(d){this.a=d},
ccO:function ccO(d){this.a=d},
fBr:function fBr(){},
f9K:function f9K(d){this.a=d},
fK6:function fK6(){},
fK7:function fK7(){},
fK8:function fK8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vl:function Vl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDg:function aDg(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
etx:function etx(){},
ett:function ett(d,e){this.a=d
this.b=e},
etw:function etw(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
etv:function etv(d){this.a=d},
ety:function ety(d){this.a=d},
etz:function etz(d){this.a=d},
etC:function etC(d){this.a=d},
etD:function etD(d){this.a=d},
etB:function etB(d){this.a=d},
etE:function etE(d){this.a=d},
etA:function etA(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
etr:function etr(d,e){this.a=d
this.b=e},
Vm:function Vm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bj9:function bj9(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
etG:function etG(d,e){this.a=d
this.b=e},
etH:function etH(d){this.a=d},
etI:function etI(){},
etJ:function etJ(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
aDd:function aDd(d){this.a=d},
aDe:function aDe(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ena:function ena(d){this.a=d},
en9:function en9(){},
enb:function enb(d){this.a=d},
en6:function en6(d){this.a=d},
en5:function en5(){},
en7:function en7(d){this.a=d},
en8:function en8(d){this.a=d},
bto:function bto(){},
aqa:function aqa(d){this.a=d},
aDh:function aDh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
etM:function etM(d){this.a=d},
etL:function etL(d){this.a=d},
hQ0(){var w,v,u,t
for(v=0;v<4;++v){w=D.cZQ[v]
try{if(Ac.bVr(w)){u=w
return u}}catch(t){}}return null},
QA(d,e){return C.hYN(d,e)},
hYN(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QA=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hQ0()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.o4?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qq(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eP(b8,b9)
n=new B.eP("Getting ready\u2026",b9)
m=new B.eP(0,b9)
l=B.og(new C.fvG(c2,b7,o),!1,!1)
b6.lK(0,l)
b9=x.H
B.ca(null,A.db,!1,null,new C.fvH(n,m),c6,null,!0,!0,b9)
k=new C.fvL(b7)
j=new C.fvM()
i=null
t=4
b3=c2.a
h=Aj.aR7(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fMI(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aW1(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hf.y5(i,"dataavailable",new C.fvI(e))
d=new B.bW(new B.bg($.bx,x.dT),x.b2)
A.Hf.y5(i,"stop",new C.fvJ(d))
J.ah4(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QA)
case 8:w=7
return B.b(c5.$1(d0),$async$QA)
case 7:a0=d0
J.fMK(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ah4(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ah4(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QA)
case 15:w=14
return B.b(c5.$1(d0),$async$QA)
case 14:a0=d0
case 13:J.fMK(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ah4(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bP(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcw()
else b3=!0
if(!b3){w=17
break}J.fMK(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fw,null,b9),$async$QA)
case 18:w=16
break
case 17:J.ah4(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ah4(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nO),$async$QA)
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
J.KO(b0)
J.lS(b0)
B.bN(A.nN,new C.fvK(a7),b9)
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
if(p.pn())p.eI()
c3=o
b3=$.aw()
c3.shS(b3)
J.aPH(c3,0)
c3=n
c3.shS(b3)
J.aPH(c3,0)
c3=m
c3.shS(b3)
J.aPH(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QA,v)},
fvG:function fvG(d,e,f){this.a=d
this.b=e
this.c=f},
fvF:function fvF(){},
fvH:function fvH(d,e){this.a=d
this.b=e},
fvL:function fvL(d){this.a=d},
fvM:function fvM(){},
fvI:function fvI(d){this.a=d},
fvJ:function fvJ(d){this.a=d},
fvK:function fvK(d){this.a=d},
btA:function btA(d,e,f){this.c=d
this.d=e
this.a=f},
f45:function f45(){},
f46:function f46(){},
cda(d){var w=0,v=B.j(x.at),u,t,s
var $async$cda=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqk(d,A.z_),$async$cda)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.by(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cda,v)},
cd9(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a72:function a72(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biT:function biT(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ebG:function ebG(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebF:function ebF(d,e){this.a=d
this.b=e},
a7V:function a7V(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.of$=k
_.og$=l
_.oh$=m
_.nE$=n},
a7W:function a7W(d,e){this.a=d
this.b=e},
b1D:function b1D(){},
cfm:function cfm(){},
cfn:function cfn(){},
cfo:function cfo(d,e,f,g,h,i,j,k,l){var _=this
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
hpa(d){return new C.ahm(d)},
a28:function a28(){},
ahm:function ahm(d){this.a=d},
aQ1:function aQ1(){},
avD:function avD(d,e){this.d=d
this.b=e
this.a=null},
aRw:function aRw(d){this.b=d
this.a=null},
fqP(d,e){var w=0,v=B.j(x.H)
var $async$fqP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxg().Ll(d,e),$async$fqP)
case 2:B.fDS()
return B.h(null,v)}})
return B.i($async$fqP,v)},
hfQ(d,e){return(A.r9[(d^e)&255]^A.o.aA(d,8))>>>0},
foo(d,e,f,g,h,i){var w=C.hV8(d,A.da,f,null,A.cW,g,h,i)
return w},
hhH(d){var w=F.hip(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hwL(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oQ.h(0,w)
if(v!=null)return v
for(u=A.oQ.gdK(A.oQ),u=u.gae(u);u.C();){t=u.gS(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hhP(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<37;++w)v+="- "+D.cTw[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bzk(d,e){return C.hRL(d,e)},
hRL(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzk=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hM([d],"application/pdf")
n=x.z
q=B.aTa(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cA(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jV(o,"share",[p]),x.H),$async$bzk)
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
return B.i($async$bzk,v)},
fX9(){var w=0,v=B.j(x.y),u,t,s
var $async$fX9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fgO
s=$.byS
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bzk(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fX9,v)},
bAH(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bAH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fgO
l=$.byS
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hcs()?3:4
break
case 3:w=5
return B.b(C.bzk(m,k),$async$bAH)
case 5:if(e){u=!0
w=1
break}case 4:r=$.byT
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
J.KO(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bAH)
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
return B.i($async$bAH,v)},
fX0(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fX0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.byT
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ls.ut(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fX0,v)},
fXh(d,e){var w=0,v=B.j(x.H),u,t
var $async$fXh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hM([d],"text/html"))
t.toString
u=window
u.toString
A.ls.ut(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fXh,v)},
b0A(d,e){var w=0,v=B.j(x.y),u
var $async$b0A=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b0C(d,e),$async$b0A)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b0B(d),$async$b0A)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0A,v)}},D,N,H,Am,A8,Y,V,An,G,F,E,Ao,W,Q,Z,A_,Ap,Aq,A9,K,Ar,A0,O,X,Aa,L,Ab,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,AA,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[191]
A5=c[66]
Ai=c[49]
A6=c[156]
Aj=c[57]
U=c[206]
A7=c[52]
Ak=c[132]
Al=c[216]
C=a.updateHolder(c[4],C)
D=c[204]
N=c[89]
H=c[120]
Am=c[36]
A8=c[208]
Y=c[205]
V=c[194]
An=c[112]
G=c[175]
F=c[31]
E=c[207]
Ao=c[96]
W=c[116]
Q=c[134]
Z=c[29]
A_=c[163]
Ap=c[218]
Aq=c[171]
A9=c[137]
K=c[209]
Ar=c[111]
A0=c[60]
O=c[185]
X=c[75]
Aa=c[113]
L=c[144]
Ab=c[101]
As=c[211]
P=c[105]
A1=c[123]
At=c[86]
Au=c[118]
Ac=c[53]
Ad=c[181]
Av=c[35]
Ae=c[73]
Af=c[133]
Ag=c[215]
Aw=c[217]
Ax=c[214]
R=c[67]
Ay=c[212]
I=c[160]
Az=c[172]
AA=c[219]
S=c[47]
T=c[210]
M=c[192]
A2=c[213]
A3=c[99]
A4=c[56]
C.nP.prototype={
uN(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tC(t,v)
return new C.nP(t===0?!1:w,v,t)},
bJM(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CF()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tC(w,u)
return new C.nP(r===0?!1:s,u,r)},
bKg(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CF()
w=o-d
if(w<=0)return p.a?$.fYC():$.CF()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tC(w,u)
q=new C.nP(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1W())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bJM(v)
u=w+v+1
t=new Uint16Array(u)
C.h93(r.b,w,e,t)
w=r.a
s=C.tC(u,t)
return new C.nP(s===0?!1:w,t,s)},
mk(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bKg(v)
t=w-v
if(t<=0)return n.a?$.fYC():$.CF()
s=n.b
r=new Uint16Array(t)
C.hGO(s,w,e,r)
w=n.a
q=C.tC(t,r)
p=new C.nP(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1W())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1W())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cD9(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7j(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7j(t,e)
if(s===0)return $.CF()
if(r===0)return t.a===e?t:t.uN(0)
w=s+1
v=new Uint16Array(w)
C.hGM(t.b,s,d.b,r,v)
u=C.tC(w,v)
return new C.nP(u===0?!1:e,v,u)},
GT(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CF()
w=d.c
if(w===0)return t.a===e?t:t.uN(0)
v=new Uint16Array(s)
C.b8D(t.b,s,d.b,w,v)
u=C.tC(s,v)
return new C.nP(u===0?!1:e,v,u)},
bwR(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tC(r,u)
return new C.nP(!1,u,s)},
bwQ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tC(u,r)
return new C.nP(!1,r,v)},
bwS(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tC(p,m)
return new C.nP(s!==0,m,s)},
Ua(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CF()
w=t.a
if(w===e.a){if(w){w=$.a1W()
return t.GT(w,!0).bwS(e.GT(w,!0),!0).a7j(w,!0)}return t.bwR(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bwQ(v.GT($.a1W(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7j(e,v)
if(C.cD9(u.b,t,e.b,w)>=0)return u.GT(e,v)
return e.GT(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uN(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7j(e,v)
if(C.cD9(u.b,t,e.b,w)>=0)return u.GT(e,v)
return e.GT(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CF()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h94(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tC(w,t)
return new C.nP(q===0?!1:r,t,q)},
bJL(d){var w,v,u,t
if(this.c<d.c)return $.CF()
this.aQ7(d)
w=$.fSb.c5()-$.awn.c5()
v=C.fSd($.fSa.c5(),$.awn.c5(),$.fSb.c5(),w)
u=C.tC(w,v)
t=new C.nP(!1,v,u)
return this.a!==d.a&&u>0?t.uN(0):t},
clf(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQ7(d)
w=C.fSd($.fSa.c5(),0,$.awn.c5(),$.awn.c5())
v=C.tC($.awn.c5(),w)
u=new C.nP(!1,w,v)
if($.fSc.c5()>0)u=u.mk(0,$.fSc.c5())
return t.a&&u.c>0?u.uN(0):u},
aQ7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h90&&d.c===$.h92&&g.b===$.h9_&&d.b===$.h91)return
w=d.b
v=d.c
u=16-A.o.gajf(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h8Z(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h8Z(g.b,f,u,r)}else{r=C.fSd(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fSe(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cD9(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b8D(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b8D(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hGN(p,r,i);--o
C.h94(h,j,0,r,o,s)
if(r[i]<h){m=C.fSe(j,s,o,n)
C.b8D(r,l,n,m,r)
while(--h,r[i]<h)C.b8D(r,l,n,m,r)}--i}$.h9_=g.b
$.h90=f
$.h91=w
$.h92=v
$.fSa.b=r
$.fSb.b=l
$.awn.b=s
$.fSc.b=u},
gX(d){var w,v,u,t=new C.cDa(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cDb().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nP&&this.aL(0,e)===0},
rY(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uH(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajf(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cDc(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cDd(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l5(A.aG.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uN(0):r
while(v.c>1){u=$.hm6()
if(u.c===0)B.ba(D.b1B)
t=v.clf(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bJL(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).fW(0)},
$iaQL:1,
$ihF:1}
C.aQb.prototype={
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
cJ4(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.jY(w,w.length,B.U(w).k("jY<1>"))}}
C.Rc.prototype={
cR5(){var w,v
if(this.as==null)this.bb_()
w=this.as
v=w==null?null:w.anZ()
return v==null?null:v.eD()},
bb_(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.anZ().eD()
this.as=new C.bMp(v)}},
gY(d){return this.at}}
C.a36.prototype={
a4(){return"CompressionType."+this.b}}
C.bGh.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yz[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fC(u,t)&A.yz[d])
s.c=t}return v}}
C.bEE.prototype={
cHl(d,e){var w,v,u,t,s,r=this,q=new C.bGh(d)
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
t=r.cjx(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.cjA(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
cjx(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.det[u])v=!1
if(t!==D.cTG[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cjA(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c_5()
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
u[w]=l}c9.fr=B.c2(6,$.hkd(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hkc()
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
if(f<h)h=f}c9.bVD(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asN(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asN(d3)}while(a3===0||a3===1);++a5
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
a3=c9.asN(d3)
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
c1=(c1<<8^D.GK[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GM[b9];++b9
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
if(b8===0){b8=D.GM[b9];++b9
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
if(b8===0){b8=D.GM[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GM[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GM[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bG(c3)
c1=c1<<8^D.GK[c1>>>24&255^v];--c2}d4.bG(c3)
c1=(c1<<8^D.GK[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bG(c7)
c1=(c1<<8^D.GK[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bG(c7)
c1=(c1<<8^D.GK[c1>>>24&255^c7&255])>>>0
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
asN(d){var w,v,u,t,s=this,r=s.ay
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
bVD(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c_5(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cvk.prototype={
aGB(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bMZ(e)
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
if(w>0)e.aGE(w,!1)
r.cjV(e)
q=r.r
v=r.f
u=e.aJC(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7j()
s.cR4(0,u,e,f)
q.push(s)}},
cjV(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6X(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rM()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rM()
d.aU()
d.aU()
d.aK()
d.aK()
d.rM()
d.rM()
u=d.rM()
t=d.rM()
this.f=u
this.r=t
d.c=s},
bMZ(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6X(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akU(A.hT)
o.aKT(r.eD(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cvi.prototype={}
C.aw1.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cvl.prototype={
aGB(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCx.h(0,e.aU())
o.c=w==null?D.L4:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amM(v)
o.y=e.hc(u).eD()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aSH:D.De
o.ay=f
o.Q=e.hc(t)
if(o.at!==D.De&&u>2){w=o.y
w.toString
s=B.r6(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amM(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aSI
o.ax=new C.cvi(r,q)
w=D.aCx.h(0,q)
o.c=w==null?D.L4:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkw().length},
anZ(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r6(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.De)if(p.gM(0)<=0)r.at=D.De
else{if(w===D.aSH){p=r.bI5(p)
r.Q=p}else if(w===D.aSI){p=r.bHJ(p)
r.Q=p}r.at=D.De}w=r.c
if(w===D.aff){v=p.c
u=B.dg()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pe.B9(p.eD(),!0,!1)
else{t=B.a7K(A.hT,r.w)
p=r.Q
p.toString
A.pe.a3a(p,t,!0,!1)
u.b=t.Gs()}r.Q.c=v
return B.r6(u.bf(),A.hT,q,q)}else if(w===D.afg){s=B.a7K(A.hT,32768)
p=r.Q
v=p.c
C.hpl().cHl(p,s)
u=s.Gs()
r.Q.c=v
return B.r6(u,A.hT,q,q)}else return B.r6(p.eD(),A.hT,q,q)},
bkw(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eD()},
u(d){return this.x},
b6V(d){var w=this.ch,v=C.Jf(C.hfQ(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Ua(0,C.Jf(255)))
w[1]=v
w[1]=v.aF(0,C.Jf(134775813)).ad(0,C.Jf(1)).Ua(0,C.Jf(4294967295))
w[2]=C.Jf(C.hfQ(w[2].N(0),w[1].mk(0,24).N(0)))},
aPx(){var w=(this.ch[2].Ua(0,C.Jf(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bI5(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r6(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b6V(u[v.c++]^r.aPx())}t=r.Q.eD()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPx()
r.b6V(s)
u&2&&B.aj(t)
t[w]=s}return B.r6(t,A.hT,q,q)},
bHJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hc(8).eD()
v=16}else if(k===2){w=d.hc(12).eD()
v=24}else{w=d.hc(16).eD()
v=32}u=d.hc(2).eD()
t=d.hc(d.gM(0)-10)
s=d.hc(10)
r=t.eD()
k=this.ay
k.toString
q=C.hGt(k,w,v)
p=new Uint8Array(B.ce(A.aG.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aG.dq(q,v,k)))
if(!C.h8t(A.aG.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bDe(k,new Uint8Array(16),p)
k=x.S
m=J.a4v(0,k)
m=n.r=new C.cfb(m)
m.c=!0
m.b=m.bjP(!0,new C.arI(p))
if(m.c)m.d=B.bl(D.o1,!0,k)
else m.d=B.bl(D.ys,!0,k)
l=C.h6H(C.h6J(),64)
l.bdk(new C.arI(o))
n.w=l
n.cQD(r,0,r.length)
k=s.eD()
m=n.x
m===$&&B.c()
if(!C.h8t(k,m))throw B.V(B.fl("macs don't match"))
return B.r6(r,A.hT,null,null)}}
C.b7j.prototype={
cR4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amM(w)
if(v>0){t=e.hc(v).eD()
n.ax=t
if(v>=4){s=B.r6(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6X(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rM()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rM()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rM()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amM(u)
f.c=n.as
t=new C.cvl(D.L4,n,D.De,B.a([C.Jf(0),C.Jf(0),C.Jf(0)],x.f3))
n.ch=t
t.aGB(0,f,g)},
u(d){return this.at}}
C.cvj.prototype={
cHm(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cvk(B.a([],x.fT))
this.a=g
g.aGB(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQb(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rc(o,A.o.an(Date.now(),1000),0):C.fZZ(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fZZ(o,q.w,q)
if(k.as==null)k.bb_()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akU(A.hT)
j.aKT(o,A.hT,h,h)}i=j==null?h:j.eD()
if(i!=null)new B.FC(!1).D6(i,0,h,!0)}}return v}}
C.bDe.prototype={
cQD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.C3(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hp4(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bLm(u,0,w,0,o)}else{o===$&&B.c()
q.bI9(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KG(w,0)
m.x=A.aG.dq(m.x,0,10)
w=m.w
l=w.a
l.lu(0)
w=w.d
w===$&&B.c()
l.C3(0,w,0,w.length)
return f}}
C.cfg.prototype={}
C.cfk.prototype={}
C.cfe.prototype={}
C.arI.prototype={}
C.cfj.prototype={
cHB(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e3(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdk(new C.arI(A.aG.fK(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bMk(n.a,n.b,t,s,r)
r+=v}A.aG.he(f,g,g+w,s)
return o.a.c},
bMk(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.C3(0,d,0,d.length)
v.C3(0,f,0,4)
u=m.c
u===$&&B.c()
w.KG(u,0)
u=m.c
A.aG.he(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.C3(0,s,0,s.length)
w.KG(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cff.prototype={}
C.cfd.prototype={}
C.arJ.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arJ){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rY(d,e){var w=this.a
w===$&&B.c()
w=A.o.rY(w,e.gbVU())
if(!w)e.gbVU()
return w},
aJ3(d,e){this.a=0
this.b=d},
t1(d){return this.aJ3(d,null)},
aJF(d){var w,v=this,u=v.b
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
w.aZN(v,u)
u=w.b
u===$&&B.c()
w.aZN(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aZN(d,e){var w,v=A.o.fR(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cfi.prototype={
lu(d){var w,v=this
v.a.t1(0)
v.c=0
A.aG.fZ(v.b,0,4,0)
v.w=0
w=v.r
A.d.fZ(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
ant(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b0h(u,0)
v.c=0}v.a.aJF(1)},
C3(d,e,f,g){var w=this.cio(e,f,g)
f+=w
g-=w
w=this.cip(e,f,g)
this.cif(e,f+w,g-w)},
KG(d,e){var w,v=this,u=C.h6I(v.a),t=u.a
t===$&&B.c()
t=C.fXL(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fXL(w,3)
v.cij()
v.cig(u)
v.arD()
v.cct(d,e)
v.lu(0)
return 20},
b0h(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nZ(A.aG.gaM(d),d.byteOffset,d.length).getUint32(e,A.i5===w.d)
if(w.w===16)w.arD()},
arD(){this.cQC()
this.w=0
A.d.fZ(this.r,0,16,0)},
cif(d,e,f){while(f>0){this.ant(d[e]);++e;--f}},
cip(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b0h(d,e)
e+=4
f-=4
w.aJF(4)
v+=4}return v},
cio(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ant(d[e]);++e;--f;++v}return v},
cij(){this.ant(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ant(0)}},
cig(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arD()
u=v.d
switch(u){case A.i5:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DF:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cct(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i5===this.d,s=0;s<w;++s){r=v[s]
q=J.nZ(A.aG.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cfl.prototype={
cQC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q_[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q_[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q_[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q_[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q_[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q_[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q_[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q_[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q_[30]
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
C.cfh.prototype={
bdk(d){var w,v,u,t,s=this,r=s.a
r.lu(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.C3(0,w,0,v)
w=s.d
w===$&&B.c()
r.KG(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.he(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.fZ(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.he(w,0,u,s.d)
s.b83(s.d,u,54)
s.b83(s.e,u,92)
u=s.d
r.C3(0,u,0,u.length)},
KG(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KG(s,w)
s=u.e
t.C3(0,s,0,s.length)
v=t.KG(d,e)
s=u.e
A.aG.fZ(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.C3(0,s,0,s.length)
return v},
b83(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cfc.prototype={}
C.cfb.prototype={
a1x(d){return(D.o1[d&255]&255|(D.o1[d>>>8&255]&255)<<8|(D.o1[d>>>16&255]&255)<<16|D.o1[d>>>24&255]<<24)>>>0},
bjP(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
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
for(r=1;r<=10;++r){p=(p^f.a1x((m>>>8|(m&$.q_[24])<<24)>>>0)^D.cw7[r-1])>>>0
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
p=(p^f.a1x((k>>>8|(k&$.q_[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1x((k>>>8|(k&$.q_[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a1x((g>>>8|(g&$.q_[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1x(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bLm(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nZ(A.aG.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e7[a8&255]
u=D.e7[a9>>>8&255]
t=$.q_[8]
s=D.e7[b0>>>16&255]
r=$.q_[16]
q=D.e7[b1>>>24&255]
p=$.q_[24]
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
a7=D.o1[n&255]
b0=D.o1[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o1[l>>>8&255]
a9=D.o1[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o1[b1>>>8&255]
h=D.o1[n>>>16&255]
g=D.o1[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o1[l>>>24&255]
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
bI9(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e6[a6&255]
v=D.e6[b0>>>8&255]
u=$.q_[8]
t=D.e6[a5>>>16&255]
s=$.q_[16]
r=D.e6[a4>>>24&255]
q=$.q_[24]
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
a4=D.ys[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.ys[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.ys[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.ys[o>>>8&255]
i=D.ys[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.ys[b0&255]
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
C.bMo.prototype={}
C.bMp.prototype={
gM(d){var w=this.a.length
return w},
anZ(){return B.r6(this.a,A.hT,null,null)}}
C.b8S.prototype={
uJ(d){return C.hJG(d)}}
C.cpi.prototype={
Mg(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9l(v,t+20,u+16,t,u,B.tL(d.x))},
nf(d){return!1}}
C.bNh.prototype={
cBG(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bNi(),x.E))},
mA(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mA)
case 6:w=5
return B.b(p.fqP(f,r),$async$mA)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mA,v)}}
C.auI.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7I.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7I&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wy(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fxa)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aUE.prototype={
c0(d){var w=new C.azz(!0,this.e,null,new B.de(),B.ci())
w.bZ()
w.scC(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syn(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFd()}}}
C.azz.prototype={
syn(d,e){return},
gpj(){var w=this.ab$
return w!=null},
gl_(){var w=this.ab$
return w!=null},
M5(d){var w=d==null?B.h1o(null):d
w.sa44(this.ak)
return w}}
C.a09.prototype={
U(){return new C.aHY(B.aX(x.N))},
cOO(d){return this.d.$1(d)},
cMB(){return this.e.$0()}}
C.aHY.prototype={
a_(){this.a1()
this.OE()},
OE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cMB(),$async$OE)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f2y(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OE,v)},
Yk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f2C(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f2D(t))
w=3
return B.b(C.amD(p),$async$Yk)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f2E(t,s,p))
w=4
return B.b(t.OE(),$async$Yk)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yk,v)},
a0v(d){return this.cmu(d)},
cmu(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0v=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f2z(t))
s=J.q(d,"id")
w=3
return B.b(C.bXW(J.k(s==null?"":s)),$async$a0v)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f2A(t))
w=1
break}q=C.fXf(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cOO(B.a([q],x.D)),$async$a0v)
case 4:if(t.c==null){w=1
break}t.m(new C.f2B(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0v,v)},
OD(d,e){return this.bIy(0,e)},
bIy(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f2t(q),r,null,!0,!0,x.y),$async$OD)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f2u(t))
s=s.h(e,"id")
w=4
return B.b(C.amC(J.k(s==null?"":s)),$async$OD)
case 4:if(t.c==null){w=1
break}t.m(new C.f2v(t))
w=5
return B.b(t.OE(),$async$OD)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OD,v)},
cAJ(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ic[B.bG(v)-1]+" "+B.bQ(v)},
aPo(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.ND,A.n),w,e,w,w,w,w,w,e)},
aPn(d){return this.aPo(d,44)},
b5h(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.ND:u,r=B.m(14),q=B.X(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Is,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Is,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.buR,u,u,u)],p))}return B.E(B.aE(A.c3,B.dh(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.v5,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f2I(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cgm(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.WV,n=B.m(18),m=p?A.d6:A.dp
m=B.I(m,A.q,p?1.8:1)
w=this.aPn(A.pQ)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aPF,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cX,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aPH,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.ND:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bKA:q
return B.aE(q,B.dh(q,B.A(B.a([w,A.bf,t,B.dh(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.dc,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f2x(this,p,d),q,q,q,q,q,q,!1,A.a8)},
co0(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cAJ(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dp,A.q,1)
v=r.aPn(A.MQ)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aPF,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cX,B.d(p+" slides"+t,q,q,q,q,q,q,D.aPH,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b1W(A.hA,A.bt,"Bring it back",r.r?q:new C.f2F(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b1W(A.e5,A.cg,"Delete",r.r?q:new C.f2G(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.WV,q,w,o,q,q,A.n),q,q,q,A.dc,D.bpp,q,q,q)},
b1W(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aE(w,B.p(w,B.X(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
arT(d,e,f){var w=null
return new B.C(D.bot,B.v(B.a([B.X(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f4i,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eXT,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bT,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPo(A.yf,46),A.bf,D.bvH],t)
if(j.r)s.push(D.e4M)
s.push(B.aH(i,i,i,i,A.No,i,i,i,new C.f2L(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dp,A.q,1)
o=J.a5(h)
q=B.a([A.S,u,new B.C(D.brW,s,i),B.p(i,B.A(B.a([j.b5h(0,A.xP,"Save",j.a.c.length),j.b5h(1,A.N4,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.br_,A.eo,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cg:A.bt).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cg:A.bt).j(0.4),A.q,1)
p=j.y
n=p?A.MR:A.ee
n=B.X(n,p?A.cg:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a6K,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bqW,A.ix,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f0o,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f3p,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f2M(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.arT(A.pQ,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cgm(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e4k)
else if(j.e==null)s.push(j.arT(A.ajX,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.arT(A.oA,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.co0(r.gS(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cl,B.cB(u,i,Y.ah3,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc1z()
p=s?i:D.ND
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cw,18)],x.V)
u=u.a
m=u===0
k=B.X(A.xP,m?A.ja:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bry,B.aE(i,B.dh(i,B.A(B.a([k,A.a6d,new B.dq(1,A.cl,B.f3(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.ja:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bn(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aZz,i,i,i,i,i,i,i,i)}}
C.of.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.XX.prototype={
U(){return new C.awz(B.a([],x.k),B.f7(null,x.H))},
gdX(){return this.c}}
C.awz.prototype={
a_(){this.a1()
this.OM()},
OM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a17(t.a.c),$async$OM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cEy(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OM,v)},
cu4(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q8(t.d,new C.cEB(d))
v=w<0
if(v&&C.hGQ(d))return t.f
u=t.d
if(v)J.pp(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fO_(new C.cEC(t),v)
return t.f=t.f.bz(new C.cED(t,d),v).eU(new C.cEE())},
Id(d,e,f){return this.ca0(0,e,f)},
aWV(d,e){return this.Id(0,e,!1)},
ca0(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Id=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).c8(B.e8(new C.cEx(t,e),!1,null,x.H)),$async$Id)
case 3:w=4
return B.b(t.f,$async$Id)
case 4:w=5
return B.b(t.OM(),$async$Id)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Id,v)},
aWb(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dqV:d
this.Id(0,new C.of(w,v,new B.S(Date.now(),0,!1)),!0)},
c14(){return this.aWb(null)},
act(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$act=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.cEF(),r,!1,!1,!0,null,!1,!1,x.g2),$async$act)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWb(s)
case 1:return B.h(u,v)}})
return B.i($async$act,v)},
Ic(d,e){return this.bIq(0,e)},
bIq(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ic=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cEs(e),s,null,!0,!0,x.y),$async$Ic)
case 3:if(g!==!0){w=1
break}t.m(new C.cEt(t,e))
w=4
return B.b(t.f,$async$Ic)
case 4:w=5
return B.b(C.aft(t.a.c,e.a),$async$Ic)
case 5:w=6
return B.b(t.OM(),$async$Ic)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ic,v)},
CP(d){return this.bAE(d)},
bAE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.cEo(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CP)
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
return B.b(t.aWV(0,d),$async$CP)
case 9:w=5
break
case 7:w=10
return B.b(F.fXN(r,d.b,null),$async$CP)
case 10:w=5
break
case 8:w=11
return B.b(t.Ic(0,d),$async$CP)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CP,v)},
bVR(){var w,v,u=null,t=[D.dqY,D.dqW,D.dqX],s=new C.cEv(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aW(999,999)
n.push(B.p(u,new B.x(D.dbj[w],u,A.od,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bq(v,v,v,v),u,u,A.n),u,u,u,u,A.nU,u,u,u))}return B.p(u,B.A(B.a([B.E(B.v(B.a([D.fsH,A.O,B.bY(A.bz,n,A.br,6,6),A.aQ,B.aE(u,B.p(u,D.eH1,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahr,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cEu(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bSz,A.n),u,u,u,u,D.bs5,u,u,u)},
bAC(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cw,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b_,A.r,B.a([B.f3(A.A,F.ana(d.b),A.f,A.bQ),D.eae,B.ao(v,B.aE(v,B.p(v,D.bLm,A.f,v,v,D.b_u,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cEj(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eVh,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f0z,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cEk(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cEl(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eG(B.a([new B.C(H.afW,B.hp(B.aE(s,B.p(s,A.amH,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vG,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc2k(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mW,s,s,s,!0,s,s,s,s,s,D.fsL,s,s,s,1,s,!0)
if(t.e)r=D.b2S
else{w=t.bVR()
v=B.a([D.feD,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eUJ,s,s,s),A.f,s,s,new B.o(D.b7v,s,s,u,s,s,A.n),s,s,s,s,A.xx,s,s,s))}r=B.a([new B.nM(A5.Y1,new B.m4(w,s),s),new B.nM(D.brs,new B.m4(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cl(t.d))r.push(D.eN1)
else r.push(new B.nM(D.bqY,B.Oo(new B.ok(new C.cEG(t),J.ad(t.d),!0,!0,!0,0,B.rN(),s),D.b29),s))
r=B.vl(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b6j,r,s,!1,!1,s,s)}}
C.XV.prototype={
U(){return new C.awv(B.a([],x.bx))},
Tq(d){return this.d.$1(d)}}
C.aDR.prototype={}
C.awv.prototype={
aZP(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b3,A.aN),w),u=this.gaWU()
v.aN(0,u)
w=new B.ar(new B.bb(e,A.b3,A.aN),w)
w.aN(0,u)
return new C.aDR(v,w,f)},
DF(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pE,new C.cDN(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b3,A.aN),v)
t=m.gaWU()
u.aN(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.ar(new B.bb(w.b,A.b3,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.ar(new B.bb(w.c,A.b3,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b3,A.aN),v)
o.aN(0,t)
n=new B.ar(new B.bb(p.b,A.b3,A.aN),v)
n.aN(0,t)
r.push(new C.aDR(o,n,p.c))}if(r.length===0)r.push(m.aZP("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.goU()
q=r.a
q.Tq(q.c)}q=r.d
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
goU(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mn(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rb(n,w,v,t,u)},
As(){var w=0,v=B.j(x.H),u=this,t
var $async$As=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.goU()
t=u.a
w=2
return B.b(t.Tq(t.c),$async$As)
case 2:return B.h(null,v)}})
return B.i($async$As,v)},
c2i(){this.m(new C.cDM(this))
this.DF()},
aVT(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cDP(w,d,v))
w.DF()},
c2j(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cDX())
this.DF()
$.aU.x1$.push(new C.cDY(w))},
PW(d){return this.cgc(d)},
cgc(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(80,1400,A.eG),$async$PW)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fg(),$async$PW)
case 8:p=f
o=q.b.toLowerCase()
n=J.ah_(o,".png")?"image/png":"image/jpeg"
r.m(new C.cDQ(d,n,p))
r.DF()
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
return B.i($async$PW,v)},
xo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hjs(r,t.goU()),$async$xo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cDO(t,s))
t.DF()
case 1:return B.h(u,v)}})
return B.i($async$xo,v)},
cgu(d){var w,v=this,u=null,t=F.fuX(d.c)
if(t==null)return new B.bH(A.a3,u,u,B.hc(D.bEJ,D.fh3,new C.cDS(v,d),u),u)
w=x.p
return new B.C(A.cH,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.ck,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b1X(A.kN,new C.cDT(v,d)),A.bp,v.b1X(A.cA,new C.cDU(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b1X(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.C(A.hx,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Ie(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ie=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.As(),$async$Ie)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fXN(s,t.goU(),new C.cDW(t)),$async$Ie)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ie,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eG(B.a([new B.C(A.qQ,B.hc(D.bJl,D.fmZ,n.gavx(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.amG,m,m,m,new C.cDZ(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.W6,m,1,m,m,m,!1,m,!1,E.mW,m,m,m,!0,m,m,m,m,m,D.fhV,m,m,m,1,m,!0),j=Av.aTl(O.l8,A.c,Ae.V_,A.nY,D.fiG,n.gc2h()),i=B.m(18),h=n.gavw(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f3(A.A,F.ana(n.goU()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eB,B.E(B.v(B.a([D.fue,A.at,B.d(F.fWj(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f61,m,m,m),A.S,B.dp(E.alY,E.aQq,h,B.bk(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.W6,m,m,i,m,m,A.n),m,m,m,m,A.bj,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oc,!0,A.a4,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.O,w,A.O,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aW(16,16)
u=new B.aA(O.l8.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bI5,m,m,m,v===0?m:new C.cE_(n,v),m,m,m,m,"Move up",A.c8)
r=i.length
q=B.aH(m,m,m,m,D.bOj,m,m,m,v===r-1?m:new C.cE0(n,v),m,m,m,m,"Move down",A.c8)
r=r===1?m:new C.cE1(n,v)
p=new B.aW(12,12)
o=new B.aW(12,12)
g.push(B.p(m,B.v(B.a([new B.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f6z,m,m,m,m,m,m,m,m,m),A.b5,s,q,B.aH(m,m,m,m,B.X(A.e5,A.ot,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c8)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a4,m,A.am,m,m,m,m),A.an,n.cgu(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mW,m,new B.bP(u,u,u,u),new B.bq(w,w,w,w),m,m,A.n),m,m,new C.a7I(h),A.e4,D.bpE,m,m,m))}return B.oh(!0,B.c8(k,E.ae6,B.cB(g,m,D.bq3,m,m,A.ah,!1),m,!1,!1,j,m),new C.cE2(n),x.C)}}
C.awx.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cg:E.mW,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aP1,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.aph.prototype={
U(){return new C.aCD()}}
C.aCD.prototype={
a_(){this.a1()
this.YX()},
br(d){this.bF(d)
if(d.c!=this.a.c)this.a0k()},
a0k(){var w=0,v=B.j(x.H),u=this,t
var $async$a0k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0k)
case 2:u.d=null
if(u.c!=null)u.m(new C.e6u(u))
w=3
return B.b(u.YX(),$async$a0k)
case 3:return B.h(null,v)}})
return B.i($async$a0k,v)},
YX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.Xx(B.cw(n,0,null),new B.OM(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.i7(0).cM(0,A.pA),$async$YX)
case 7:if(r.c==null){w=1
break}r.d.t3(!1)
r.m(new C.e6s(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e6t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YX,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c4U(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h1(0)
w.m(new C.e6v(w))}else{v.pG(0)
w.m(new C.e6w(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j7.j(0.92),D.Kb.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.pT,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.X(A.alf,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b3H
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f3(A.A,new B.a7(r,q,new B.zL(s,o),o),A.r,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iV,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b_,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc4T(),o,o,o,o,o,o,!1,A.a8)}}
C.xg.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.ji.prototype={}
C.acu.prototype={
B(d){return B.oK(new C.dWm(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.abU.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j7.j(t?0.35:0.4),A.q,1),p=t?D.KG:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cw,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.hZ7(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ahV,u,u,u,u),1)
m=D.j7.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j7,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cX,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bdr,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.aA(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agb,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xj.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nC.prototype={}
C.bhV.prototype={
Z5(d){var w=null
return new B.bH(A.a3,w,w,B.Du(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c5l(){return this.Z5(1)},
awb(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ac7,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dT(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.awb("TAARIFA ZA WANANDOA"),A.an,w.c5l(),A.cX,w.Z5(0.9),A.cX,w.Z5(0.7),A.O,w.awb("TAMKO LA MAKUBALIANO"),A.h_,w.Z5(1),A.cX,w.Z5(0.95),A.O,w.awb("MASHAHIDI"),A.b5,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acx.prototype={
B(d){return B.oK(new C.ebJ(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aec.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bd1:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cw,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.fWO(w.a)
if(v==null)v=A.d.gL(D.Q6)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b_,A.r,B.a([B.bZ(0,B.fL(C.fWN(v.d),A.A,r,r,A.ck,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.agV,new C.bhV(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ahV,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.KH,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cX,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b6P,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.aA(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agb,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kP.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7b.prototype={}
C.V6.prototype={
U(){var w=$.aw()
return new C.aCW(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mw(0,null,null),A.d.gL(D.a1U),D.dBe,B.a([],x.L),B.a([],x.gE))}}
C.aCW.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z9(C.fyQ(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fxM().bz(new C.ef0(v),w)
$.qM().jt(0,"assets/images/ngmy_logo.png").bz(new C.ef1(v),w).eU(new C.ef2())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
agm(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
Iz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Iz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(88,1600,A.eG),$async$Iz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fg(),$async$Iz)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hjJ(m,p),$async$Iz)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bBQ(new B.pD(o,1),m),$async$Iz)
case 10:if(r.c!=null)r.m(new C.eeD(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agm("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Iz,v)},
Wc(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hjJ(s,q),$async$Wc)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bBQ(new B.pD(r,1),s),$async$Wc)
case 4:if(t.c!=null)t.m(new C.eez(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wc,v)},
adi(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eeK(q))
t=4
q.a.toString
p=C.i2z()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adi)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eeL(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agm(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eeM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adi,v)},
Za(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Za=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eeF(q,i))
t=4
q.a.toString
p=C.i2y()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Za)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eeG(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.eeH(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eeI(q))
$.aU.x1$.push(new C.eeJ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Za,v)},
c5B(d){this.m(new C.eeE(this,d))},
DZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eeB(q))
t=4
w=7
return B.b($.aU.gmu(),$async$DZ)
case 7:w=8
return B.b(B.bN(A.n1,null,x.H),$async$DZ)
case 8:k=$.aU.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pO))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lT(1800/p.gY(0).a),$async$DZ)
case 9:o=e
w=10
return B.b(o.hq(A.fX),$async$DZ)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.afw(J.eR(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$DZ)
case 11:m=e
q.agm(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agm(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eeC(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DZ,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kP,a2,a2,a2,new C.eeS(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bJR,a2,a2,a2,new C.eeT(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oI,a2,a2,a2,a4?a1.gaY2():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eG(v,a2,a2,!0,!0,A.Aw,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eHa,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f3(A.A,new B.ev(new C.b_B(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Ta,a2,a2,a2)
t=a1.as?a2:a1.gc5A()
t=B.a([B.E(B.dp(D.bKB,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bk(D.t9,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uJ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.ck,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bHo,a2,a2,a2,a1.as?a2:a1.gbH3(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Ta,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aR9("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a4,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d66[o]
p.push(B.mE(a2,D.t9,new B.x(n.a,a2,A.p2,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.eeU(a1,n),a2,a2,P.uJ,a2))}p=B.bY(A.bz,p,A.br,6,8)
m=a1.Q
m=B.bY(A.bz,B.a([D.fsU,A.bf,B.jI(a2,a2,a2,D.fdt,a2,new C.eeV(a1),m==="en",a2,a2,a2,a2),A.ab,B.jI(a2,a2,a2,D.fdo,a2,new C.eeW(a1),m==="sw",a2,a2,a2,a2)],w),A.rI,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Ta,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a1U,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aPH(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a1U,10,a2,j),h=j.$ti,j=new B.bR(j,j.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aPH(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc5D()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.C(A.cH,s,a2),t,A.aA,new B.C(A.cH,r,a2),q,A.O,p,A.S,m,A.aA,new B.C(A.cH,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aQ,B.aE(a2,B.p(A.A,B.A(B.a([D.bKv,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tU,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dlN,A.av,D.bw_],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.t9
p=new B.aW(16,16)
d=new B.aA(A.bF,1,A.q,-1)
u.push(new B.bH(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f44,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.UO,new B.o(q,a2,new B.bP(d,d,d,d),new B.bq(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cH,A.ix,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cU5[o]
t.push(B.mE(a2,D.t9,new B.x(a0,a2,A.IC,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.eeX(a1,a0),a2,a2,P.uJ,a2))}u.push(B.bY(A.bz,t,A.br,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aR9("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eeY(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a4,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc5C()
u.push(B.A(B.a([t,A.ab,B.Hj(A.yk,s,B.nw(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaY2()
u.push(B.dp(A.oI,D.fox,t,B.bk(A.cZ,a2,a2,a2,a2,A.Iq,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.agH,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jN.j(0.5),A.q,1)
v.push(B.bZ(0,B.ek(B.av(B.p(a2,B.A(B.a([E.a6e,A.eB,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iG,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.An,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bsm,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.Aw,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aR9(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.t9,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.Iy,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPH(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.lb,t,t,t,t),A.h_],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.boH,t,t,t,t))
w.push(A.cX)
w.push(new B.C(A.jf,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jd,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eeA(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.z9.prototype={
baa(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z9(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cF7(d){var w=null
return this.baa(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cba(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gS(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fB(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.cb8(),B.U(w).k("K<1,n>")).c_(0,new C.cb9())
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
return this.baa(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gF9(d){return this.f}}
C.t7.prototype={
a4(){return"NewsLayout."+this.b}}
C.B4.prototype={
a4(){return"NewsFrame."+this.b}}
C.ld.prototype={}
C.b_B.prototype={
r4(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aY4(d,e,f,g){return this.r4(d,e,null,1.25,f,A.bl,g)},
Ph(d,e,f,g,h){return this.r4(d,e,f,1.25,g,A.bl,h)},
awh(d,e,f,g,h){return this.r4(d,e,null,f,g,A.bl,h)},
awg(d,e,f,g,h){return this.r4(d,e,f,g,0,A.bl,h)},
aY6(d,e,f,g,h){return this.r4(d,e,null,f,0,g,h)},
c5H(d,e,f,g,h,i){return this.r4(d,e,f,g,0,h,i)},
awf(d,e,f,g){return this.r4(d,e,null,f,0,A.bl,g)},
adl(d,e,f){return this.r4(d,e,null,f,0,A.bl,A.cN)},
aY5(d,e,f,g,h){return this.r4(d,e,f,g,0,h,A.cN)},
c5G(d,e,f,g){return this.r4(d,e,null,f,0,g,A.cN)},
c5F(d,e,f,g){return this.r4(d,e,f,g,0,A.bl,A.cN)},
adm(d,e,f,g,h,i){return this.r4(d,e,f,g,h,A.bl,i)},
aY3(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kq(new B.ep(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.cc,new B.jo(1),u,u,h,u,A.ca,u)
v.Bx(g)
if(!v.b.a.c.gaDa())return w
w-=2}return j},
adj(d,e,f,g,h,i,j,k){return this.aY3(d,e,f,g,h,i,j,k,A.bl)},
ayn(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
aym(d){return this.ayn(null,!1,d)},
aga(d,e){return this.ayn(null,d,e)},
cn9(d,e){return this.ayn(d,!1,e)},
gb_c(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaTJ(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
O9(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adj(w.gaTJ(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaTJ(),v,g,A.a2,v,v,v,w.awg(u,t,f,1.02,A.P),e,v,v)},
aTO(d){return this.O9(d,A.L,null,2,78,30)},
aaL(d,e,f,g,h){return this.O9(d,e,null,f,g,h)},
bVJ(d,e,f,g,h){return this.O9(d,A.L,e,f,g,h)},
bVI(d,e,f){return this.O9(d,A.L,null,e,f,30)},
Rd(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kh,B.d(s,u,g,A.a2,u,u,u,v.aY5(w,v.aY3(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b4Y(d){return this.Rd(d,A.L,null,3,24)},
azR(d,e,f,g){return this.Rd(d,e,null,f,g)},
cuy(d,e,f){return this.Rd(d,A.L,e,3,f)},
b4Z(d,e){return this.Rd(d,e,null,3,24)},
cuw(d,e){return this.Rd(d,A.L,null,3,e)},
cux(d,e,f){return this.Rd(d,e,null,3,f)},
apV(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.fU,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Ph("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
N6(){return this.apV(null,!0)},
apU(d){return this.apV(null,d)},
bCY(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.ib,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c5G(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vf(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_c(),h=A.o.an(j.by(B.c1(B.bz(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hRa(Math.max(1,B.bz(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aY4(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adj(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adj(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.adm(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.A(B.a([B.d(C.bB5(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hB,A.j,0,l,l),A.an,m.aga(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eB,B.E(B.d(i,l,1,A.eC,l,l,l,m.awf(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bB5(j),l,l,l,l,l,l,m.Ph(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hB,A.j,0,l,l),A.O,m.cn9(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_c()
v=B.d("NGMY",l,l,l,l,l,l,m.awh(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eD(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.r4(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b5,new B.dq(1,A.cl,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adm(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dL,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l)
t=m.aga(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awf(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.aga(!0,1.4),A.at,B.d(C.bB5(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.aym(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awh(v,u,1,3,A.P),A.L,l,l),A.O,m.aga(!0,1.2),A.at,B.A(B.a([B.d(C.bB5(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l),A.at,m.aym(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abS(d){return this.vf(d,!1)},
adk(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adm("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c5E(d,e){return this.adk(d,null,e,null)},
aVL(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.di(v),12)===0?12:A.o.F(B.di(v),12),t=B.b0(this.d.w).j(0.75),s=this.awg("Roboto",15,t,1,A.cv),r=B.X(E.ajj,t,w,w,w,18),q=A.a.ap(A.oM[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.di(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bz(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
av_(){return this.aVL(A.mn)},
b2a(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adm("Roboto",this.adj(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayq(d,e,f){return this.b2a(d,e,f,30)},
azU(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.v4,B.d(v,w,e,A.a2,w,w,w,this.c5F("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b52(d){return this.azU(d,3,22)},
cuJ(d,e){return this.azU(d,e,22)},
tl(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.ck,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.D2(D.bv7,w,s)
if(v==="sepia")w=new B.D2(D.bv6,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xK,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bS(A.A,0.95,A.x,s,0,B.a([A.K,A.W2.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b_,A.r,v,s),s)},
qa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tl(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eo,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lJ,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e0R,14)],x.V)
v=l.tl(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eD(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aY5(j.as,13.5,D.b8j,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bbq,k,k,k,w,k,A.n),k,e,k,k,D.bpZ,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tl(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hS(l.tl(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lJ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e0H,10)],x.V)
return B.eD(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tl(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qT,k,k,k),0,0,0),B.ao(k,B.eD(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eD(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nr(l.tl(d,e),A.aq,D.fMt),new C.bb5(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tl(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bu(u));++n){m=new B.aW(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bR,k,k,new B.bq(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cn(A.aO,A.pX,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.r,w,k),A.f,A.e9,k,k,k,e,k,k,D.buo,k,k,d)
case 8:w=d/2
v=B.wG(A.hd,new B.aW(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wG(A.hC,new B.aW(w,w)),l.tl(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.tl(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a7(d,e,B.nr(l.tl(d,e),A.aq,D.fSv),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tl(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eo,k,k,d)}},
aNj(d,e){return this.d.e===D.QK?A.bH:this.bCY(d,e)},
VL(d){return this.aNj(d,A.L)},
gazb(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aza(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aY6(v.Q,19,1.15,A.cD,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Ph("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adl(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jt(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bj,n,n,d)},
gcdK(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8u(d,e,f,g){return B.cp(new C.cbb(this,e,d,f,g))},
a8t(d){return this.a8u(d,22,!0,18)},
VW(d,e){return this.a8u(d,22,!0,e)},
aOl(d,e,f){return this.a8u(d,22,e,f)},
bEZ(d,e,f){return this.a8u(d,e,!0,f)},
b7U(d,e,f,g){return B.cp(new C.cbc(this,e,d,g,!0,f))},
ccy(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abS(824),A.aA,k.aTO(824),k.b4Y(824),A.O,k.N6(),A.ac,B.av(k.qa(824,360),j,j,j),k.VL(824),A.ac,B.E(k.a8t(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abS(824),A.aQ,new B.a7(j,350,B.A(B.a([new B.a7(440,j,B.v(B.a([k.aaL(440,A.bg,3,62,26),k.azR(440,A.bg,2,20),A.b5,k.apV(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Ir,B.v(B.a([k.qa(362,310),k.VL(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.aym(2),A.ac,B.E(k.a8t(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vf(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bVJ(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cuy(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AT,j,j,j)
u=B.a([B.av(k.qa(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QK){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awg(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lH,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.N6(),A.S,B.E(k.VW(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vf(824,!0)
w=k.qa(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.O9(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bsF,j,j,j),j,j,0,0,j,j)],u),j),k.b4Z(824,A.bg),A.O,k.N6(),A.S,B.E(k.a8t(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abS(824),A.aA,k.aTO(824),k.b4Y(824),A.O,k.N6(),A.ac,B.E(k.b7U(3,300,B.v(B.a([k.qa(300,300),k.VL(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vf(824,!0)
v=x.p
u=B.v(B.a([k.aaL(440,A.bg,3,62,26),k.azR(440,A.bg,2,20),A.b5,k.apU(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bx,new B.a7(j,400,B.A(B.a([new B.a7(440,j,u,j),A.aN3,new B.C(A.ib,k.qa(364,h.e===D.QK?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.VW(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abS(824),A.ac,k.bVI(824,2,70),k.cuw(824,21),A.O,k.N6(),A.ac,B.E(k.b7U(3,340,B.av(k.qa(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vf(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bB5(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Ph(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bj,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aY6(h.Q,24,1.15,A.cD,A.P),j,j,j))
v.push(A.b5)
if(k.gazb())v.push(k.aza(230,250))
return B.v(B.a([w,A.aA,B.E(B.A(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ag9,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaL(570,A.bg,3,62,28),k.cux(570,A.bg,20),A.O,k.apU(!1),A.O,B.av(k.qa(570,330),j,j,j),k.VL(570),A.S,B.E(k.aOl(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vf(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Ph(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.an,k.O9(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.br0,j,j,j),k.b4Z(824,A.bg),A.S,B.av(k.qa(824,310),j,j,j),k.VL(824),A.O,k.N6(),A.S,B.E(k.a8t(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vf(824,!0),A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([k.qa(824,430),B.ao(18,k.c5E(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.ayq(824,3,66),k.b52(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.av_(),A.aA,B.E(k.VW(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vf(824,!0),A.bx,new B.a7(j,500,B.A(B.a([new B.a7(410,j,B.v(B.a([k.adk(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b2a(410,4,58,28),k.azU(410,6,20),A.b5],w),A.F,j,A.e,A.j,0,A.p),j),U.aN4,k.qa(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.av_(),A.aQ,B.E(k.VW(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vf(824,!0)
v=k.qa(824,420)
u=B.htW(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c5H(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bsV,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.ayq(824,3,62),k.b52(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aVL(A.li),A.aA,B.E(k.VW(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vf(824,!0)
u=h.w
t=x.p
w=B.a([k.qa(824,380),B.ao(j,k.adk(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayq(824,2,60)
r=k.cuJ(824,2)
p=k.av_()
o=B.E(k.aOl(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aQ,new B.an(A.W,j,A.aa,A.r,w,j),A.aQ,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.tl(150,104),A.aq),A.oa,B.E(B.v(B.a([k.adk("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.awf(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bj,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vf(824,!0),A.bx,k.aaL(824,A.bg,3,62,30),k.azR(824,A.bg,2,22),A.S,k.apU(!1),A.S,B.av(k.qa(824,330),j,j,j),k.aNj(824,A.bg),A.aQ,B.E(k.bEZ(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b7B(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.btq,B.v(B.a([B.E(t.ccy(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h_,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aY4(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Ph(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hB,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bq6(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fL(q,A.A,s,s,A.ck,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mn,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awh(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.buw,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jt(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bb6.prototype={
iZ(d){return C.h9a(d)},
jG(d){return!1}}
C.bb5.prototype={
a5(d,e){var w,v=C.h9a(e)
$.W()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aP(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.bsB.prototype={
iZ(d){var w,v,u,t,s,r,q,p,o=new B.eJ()
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
jG(d){return!1}}
C.b7B.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eJ()
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
w.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.Kc.j(0.13),A.K],v),l,l).av(0,B.bT(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
ar(d){return!1}}
C.bq6.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.i1(u,u,u,u,B.dn(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.cc,u,A.eh,A.ca)
s.eH()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.iX(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.V9.prototype={
U(){return new C.aD_()}}
C.aD_.prototype={
a_(){var w=this
w.a1()
B.fVG(w.a.c,null).bz(new C.egb(),x.g7).bz(new C.egc(w),x.a)
w.a.toString},
gaM8(){var w=D.atX[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawi(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaM8()
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
Zc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.efZ(r))
t=4
q=r.gawi()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qS()
m=B.D0(n,null)
i=B.M()
i.Q=A.fV
m.w9(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pu().z3(J.fZJ(p),J.fZJ(o)),$async$Zc)
case 7:l=e
w=8
return B.b(l.hq(A.fX),$async$Zc)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eR(J.vc(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eg_(r))
r.c.I(x.q).f.R(D.ePC)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zc,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kP,s,s,s,new C.eg5(d),s,s,s,s,s,s),p=x.p
q=B.eG(B.a([B.bK(!1,D.fr_,s,s,!0,s,s,t.y||r==null?s:t.gc5I(),s,s)],p),s,s,!0,!0,A.Aw,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fuR,s,s,s,1,s,!0)
if(r==null)p=A.lz
else{w=B.E(new B.C(A.bV,B.av(new B.fG(t.gaM8(),B.cp(new C.eg6(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jd,B.jI(s,s,s,new B.x(D.atX[u].a,s,E.aOR,s,s,s,s,s,s,s,s,s),s,new C.eg7(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bn(!0,B.v(B.a([new B.a7(s,40,B.cB(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bLd,B.E(B.kW(s,s,s,6,1,new C.eg8(t),t.f),1),D.bKQ],p),A.m,s,A.e,A.j,0,s,s),D.foq,A.an,B.bK(!1,D.foa,s,s,!0,s,s,new C.eg9(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Wg,s,s,s,s,s,s,D.bqm,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.Aw,p,s,!1,!1,s,s)}}
C.baD.prototype={
a5(d,e){var w
$.W()
w=B.M()
w.Q=A.ck
return d.w9(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_d.prototype={
U(){var w=$.aw(),v=x.A
return new C.aEm(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b3,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a2r),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.or.prototype={}
C.aEm.prototype={
gaTW(){var w,v,u=this
if(u.p1)w=new B.wW(1,u.p2,0.9,u.p3).iH().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.ePq(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
XS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qM().jt(0,"assets/images/ngmy_logo.png"),$async$XS)
case 7:q=e
p=J.eR(J.vc(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bBQ(new B.pD(p,1),o),$async$XS)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eOi(r,p))
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
return B.i($async$XS,v)},
Pk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(92,1800,A.eG),$async$Pk)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fg(),$async$Pk)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bBQ(new B.pD(p,1),n),$async$Pk)
case 9:if(r.c==null){w=1
break}r.m(new C.eOG(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pk,v)},
b1y(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aO=w.aE=w.az=w.Z=w.b5=w.bh=w.y2=0
w.b3=null
w.b1=0.25
w.be=null
w.bL=0.5
w.aR=1
w.c7=w.bT=w.bj=0
w.cX=w.cU=!1},
aVv(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.byw(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d8D)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.byw(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.byw(C.fUO(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.byw(C.fUO(1-a0*0.5,n,n,n),w)}return a1?C.byw(C.fUO(-1,255,255,255),w):w},
aA_(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kS(0,this.d.a.a),t=B.B(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yX(u,v,w)
this.dx.oV(new C.eOQ(t),!0)
return t},
b43(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aA_()
w=C.i0g(e.d.a.a,e.db)
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
return C.hXL(d,k,v,a0,j,e.gaTW(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
csu(){return this.b43(null)},
CO(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmu(),$async$CO)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CO)
case 4:w=5
return B.b($.aU.gmu(),$async$CO)
case 5:s=$.aU.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pO)){u=null
w=1
break}w=7
return B.b(r.lT(1080/r.gY(0).a),$async$CO)
case 7:w=6
return B.b(e.hq(A.fX),$async$CO)
case 6:q=e
u=q==null?null:J.eR(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CO,v)},
a9l(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9l=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eO1(q))
t=4
w=7
return B.b(q.CO(),$async$a9l)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcv().aJ(p)
n=C.Bh(null,null,null,null,D.o4,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b43(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eO2(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9l,v)},
Aa(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Aa=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eO_(q))
t=4
w=7
return B.b($.aU.gmu(),$async$Aa)
case 7:w=8
return B.b(B.bN(A.ow,null,x.H),$async$Aa)
case 8:w=9
return B.b($.aU.gmu(),$async$Aa)
case 9:k=$.aU.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pO))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lT(1080/p.gY(0).a),$async$Aa)
case 10:o=e
w=11
return B.b(o.hq(A.fX),$async$Aa)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.afw(J.eR(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Aa)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.R(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eO0(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Aa,v)},
cfE(){var w=this.p4
w.toString
return B.cp(new C.eOz(this,w))},
aYd(d,e){var w=null
return B.br(w,w,w,w,w,D.eZH,w,w,!0,new B.b4(4,B.m(16),P.uJ),w,w,w,w,w,D.t9,!0,w,w,w,w,new B.b4(4,B.m(16),D.aXd),w,w,w,w,w,w,w,w,A1.D3,e,w,w,w,w,w,w,w,D.f3W,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xy(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPC,w,w,w))
return new B.C(D.bol,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aYc(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jA),A.f,w,w,new B.o(D.t9,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vl(d){return this.aYc(d,A.bC)},
nY(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tU:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.ja,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.ja,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dh(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.EZ,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
afa(d,e,f){return this.nY(d,null,e,f)},
awm(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.ez:A.bF,s=x.p
v=B.a([B.dh(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYg(d,e,f,g,h,i){return this.awm(d,e,f,g,h,5,i)},
kb(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.eWL,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e4o,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eOM(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aOH,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Yr,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.au7(w).cGu(A.b7,A.bF,A.b7.j(0.2),A.c,D.eGv,4)
return new B.C(A.xj,B.v(B.a([s,B.a9h(B.kW(u,u,u,g,f,new C.eON(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aha(d,e,f,g,h,i){return this.kb(d,e,f,g,h,null,i)},
ahC(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dp:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.aA(q,r?3:1,A.q,-1)
t=t?D.bEl:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eOP(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bY(A.bz,n,A.br,10,10)},
bJ5(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2r
else{v=x.a8
w=B.B(new B.a2(D.a2r,new C.eNS(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYd("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eNT(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7b,!0,A.a4,n,A.am,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYd("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eNU(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dl,!0,A.a4,n,A.am,n,n,n,n)
t=o.xy("DESIGNS",A.tI)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cLQ[q]
r.push(new B.C(A.jd,o.afa(p,o.x===p,new C.eNV(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hH(n,new C.eNW(o,w),w.length,n,n,A.aO,new C.eNX(),!1),n),A.O,o.aYc(B.v(B.a([B.iD(A.b7,n,n,A.af,!0,new C.eNY(o),n,D.ffI,n,D.fcd,o.k3),B.iD(A.b7,n,n,A.af,!0,new C.eNZ(o),n,n,n,D.f9u,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.agG)],s),A.F,n,A.e,A.j,0,A.p)},
cAZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aA_()
if(a7.length===0)return a5.vl(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.IK,a6,a6,a6))
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
m=B.B(u,B.a3(u).k("co.E"))
A.d.fi(m)
l=m.length!==0&&A.d.da(m,new C.ePf(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.ePm(a5)
j=new C.ePo()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.IK,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aW(11,11)
f=u.t(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ez:A.bF
d=new B.aA(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bq(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.M0,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.ePg(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vl(B.bY(A.bz,o,A.rI,6,6))
i=B.a([a5.nY("All words",K.akW,!1,new C.ePh(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afa("Sentence "+a3,!1,new C.ePi(a5,a7,v,a2)))
a2=a3}}i.push(a5.afa("Clear picks",!1,new C.ePj(a5)))
i=B.bY(A.bz,i,A.br,8,8)
g=a5.xy("SIZE OF THE PICKED WORDS",D.akl)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.de3[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.ePk(e,k)
f.push(a5.afa(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bY(A.bz,f,A.br,8,8),A.S,a5.nY("Make every word normal",A.lh,!1,new C.ePl(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cwc(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bvE,B.d(A.d.iD(D.avD,new C.eOZ(q)).b,p,p,p,p,p,p,D.eYd,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eP_(q)),l=q.xy("HIGHLIGHT BEHIND THE WORDS",A.a_k),k=q.p1?-1:q.k4
k=q.ahC(k,new C.eP0(q),D.cVX)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bY(A.bz,B.a([k,B.aE(p,B.p(p,D.bHi,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eSd,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eP3(q),p,p,p,p,p,p,!1,A.a8)],o),A.rI,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.IK,p,p,p)],o)
if(q.gaTW()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aha("Colour",l,0,360,new C.eP4(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aha("Shade",k,0.15,0.9,new C.eP5(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kb("Strength",l,0.15,1,new C.eP6(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vl(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xy("LOOK",A.y8))
m=B.a([q.nY("Bold",I.akj,q.fy,new C.eP7(q)),q.nY("Italic",I.akk,q.go,new C.eP8(q))],o)
for(u=0;u<3;++u){l={}
k=D.cN_[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tU:p
w=w?p:A.c.j(0.07)
s=new B.aW(14,14)
r=new B.aA(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bq(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eP9(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bY(A.bz,m,A.rI,8,8))
n.push(q.xy("COLOUR",A.na))
n.push(q.ahC(q.fx,new C.ePa(q),D.d5C))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.IK,p,p,p))
n.push(q.xy("SIZE AND PLACE",A.FV))
m=q.fr
m=q.kb("Text size",m,0.5,1.6,new C.eP1(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vl(B.v(B.a([m,q.kb("Up / down",l,0.12,0.5,new C.eP2(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cfF(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bMD,A.f,p,p,D.b_b,p,62,p,p,p,p,p,62),A.aA,D.fdm,A.an,D.fhT],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.t9,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.brx,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYf(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.ck,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.E(B.v(B.a([D.fcX,A.O,B.bY(A.bz,B.a([q.nY("Change",A.kN,!1,q.gaYf()),q.nY("Remove",A.e5,!1,new C.eOD(q))],w),A.br,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d2a[t]
u.push(q.nY(s.b,s.a,q.at===t,new C.eOE(q,t)))}u=B.bY(A.bz,u,A.br,8,8)
r=q.at
A:{if(0===r){s=q.bZA(o)
break A}if(1===r){s=q.bYD()
break A}if(2===r){s=q.bEY()
break A}if(3===r){s=q.bLd()
break A}s=q.bH4()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bH(A.a3,p,p,q.nY("Reset the whole picture",A.lh,!1,new C.eOF(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bZA(d){var w=this,v=x.p
return B.v(B.a([B.bY(A.bz,B.a([w.nY("Auto enhance",E.ZZ,!1,new C.eOv(w)),w.nY("Make words easy to read",A.oF,!1,new C.eOw(w))],v),A.br,8,8),A.aA,B.cp(new C.eOx(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bYD(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kb("Exposure",n,-1.5,1.5,new C.eO9(o),0,A.k.aa(n,1))
w=o.RG
w=o.kb("Brightness",w,-0.5,0.5,new C.eOa(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kb("Contrast",v,0.4,2,new C.eOb(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kb("Fade",u,0,1,new C.eOc(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kb("Spotlight",t,0,1,new C.eOd(o),0,""+A.k.V(t*100))
s=o.Z
s=o.kb("Darken",s,0,0.85,new C.eOe(o),0,""+A.k.V(s*100))
r=o.b5
r=o.kb("Vignette",r,0,0.9,new C.eOf(o),0,""+A.k.V(r*100))
q=o.aH
q=o.kb("Shade behind words",q,0,0.85,new C.eOg(o),0,""+A.k.V(q*100))
p=o.aO
return o.vl(B.v(B.a([n,w,v,u,t,s,r,q,o.kb("Shade top & bottom",p,0,0.85,new C.eOh(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bEY(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kb("Colour strength",q,0,2.2,new C.eNv(s),1,""+A.k.V(q*100))
w=s.to
w=s.kb("Warmth",w,-1,1,new C.eNw(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kb("Tint",v,-1,1,new C.eNx(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vl(B.v(B.a([q,w,v,s.kb("Shift colours",u,-180,180,new C.eNy(s),0,""+A.k.V(u)+"\xb0"),new B.bH(A.a3,r,r,s.nY("Negative",D.bCl,s.y1,new C.eNz(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xy("COLOUR WASH",A.N_)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.aum)
t=B.a([u,v,s.ahC(w,new C.eNA(s),q),A.O],t)
if(s.b3!=null){q=s.b1
t.push(s.vl(s.aha("Wash strength",q,0,0.9,new C.eNB(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLd(){var w,v,u,t,s,r=this,q=r.y2
q=r.kb("Blur",q,0,24,new C.eO3(r),0,A.o.u(A.k.V(q)))
w=r.bh
w=r.kb("Soft focus",w,0,1,new C.eO4(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vl(B.v(B.a([q,w,r.kb("Film grain",v,0,1,new C.eO5(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xy("LIGHT LEAK",H.akf)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.aum,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahC(q,new C.eO6(r),t),A.O],u)
if(r.be!=null){q=r.bL
u.push(r.vl(r.aha("Leak strength",q,0,1,new C.eO7(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bH4(){var w,v,u,t,s=this,r=s.aR
r=s.kb("Zoom",r,1,3,new C.eNF(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.kb("Left / right",w,-1,1,new C.eNG(s),0,""+A.k.V(w*100))
v=s.bT
v=s.kb("Up / down",v,-1,1,new C.eNH(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.v(B.a([s.vl(B.v(B.a([r,w,v,s.kb("Turn",u,-180,180,new C.eNI(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bY(A.bz,B.a([s.nY("Turn 90\xb0",N.alt,!1,new C.eNJ(s)),s.nY("Flip sideways",A.FJ,s.cU,new C.eNK(s)),s.nY("Flip upside down",A.FJ,s.cX,new C.eNL(s))],t),A.br,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c1d(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eGH,A.S,D.feK,A.aA,B.aE(w,B.p(A.A,D.eGU,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tU,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eOy(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.t9,w,u,v,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
bZs(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eOq(p),m=x.p,l=B.A(B.a([D.bvK,p.nY("Reset",A.lh,!1,new C.eOm(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.IK,o,o,o),j=p.xy("SHAPE",A.alp),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BM[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYg(n.$2(t,p.cy),62,u.b,s===t,new C.eOn(v,p),62))}}i=B.bY(A.bz,i,A.br,8,8)
v=p.xy("RING",A.qV)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BH[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYg(n.$2(p.cx,t),62,r.b,q===t,new C.eOo(s,p),62))}u=B.bY(A.bz,u,A.br,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vl(p.kb("Size",s,0.12,0.4,new C.eOp(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0a(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eOJ(this)),null),null)},
cvu(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tU:q
t=new B.aW(14,14)
s=D.d4c[w]
r=v?A.c:A.az
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bi,B.aE(A.c3,B.dh(q,B.v(B.a([r,A.cX,new B.qd(A.eg,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bq(t,t,t,t),q,u,A.n),D.bnh,q,q,q,A.hK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eOS(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bpm,A.lJ,q,q,q)},
aOR(){var w,v,u=this,t=null,s=u.cvu(),r=u.as
A:{if(0===r){w=u.bJ5()
break A}if(1===r){w=u.cAZ()
break A}if(2===r){w=u.cwc()
break A}if(3===r){w=u.cfF()
break A}if(4===r){w=u.bZs()
break A}w=u.c1d()
break A}v=x.p
return B.bw(A.rO,B.ek(B.v(B.a([s,B.E(B.cB(B.a([w],v),t,D.bqn,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Wg,!0),A.aq)},
aL5(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc68(),p=B.m(16)
q=B.E(B.aE(r,B.p(r,D.eH2,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbKO()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cw,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eLW)
else t.push(D.bGo)
t.push(A.ab)
t.push(D.bxu)
return B.p(r,B.A(B.a([q,A.av,B.E(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tU,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZj,r,r,r,r,G.agt,r,r,r)},
aYe(){var w=null
return new B.C(T.Yn,B.A(B.a([B.aH(w,w,w,w,A.mr,w,w,w,new C.eO8(this),w,w,w,w,w,w),D.ftO,A.b5,D.bOV],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.Aw,B.bn(!0,B.cp(new C.ePp(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bea.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eJ()
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
C.rl.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.m1.prototype={}
C.zb.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nG.prototype={}
C.vL.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7j.prototype={}
C.aq6.prototype={}
C.a_I.prototype={
U(){return new C.aGg(new B.ar(A.as,$.aw()),B.kk(!0,null,!0,!0,null,null,!1),D.dtZ,B.a([],x.s),B.et([D.HB],x.Q))}}
C.aGg.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_x(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_x=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BJ(90,700,700,A.eG),$async$a_x)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fg(),$async$a_x)
case 8:p=e
if(r.c!=null)r.m(new C.eVr(r,p,q))
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
return B.i($async$a_x,v)},
a_A(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_A=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aGj(78,n,1100,1100),$async$a_A)
case 7:q=e
if(J.cl(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gS(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fg(),$async$a_A)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cS.gcv().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eVs(r,p))
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
return B.i($async$a_A,v)},
b29(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cE.aJ(A.d.gal(d.split(","))),A.A,u,u,A.ck,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.blz},
bZy(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cp6(C.fwc(w,this.b29(d),f),g)},
abD(d,e,f,g,h){var w=null,v=new C.eVp(f,e),u=new C.eVq(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.Br:A.MP,A.c_,w,w,w,26),w,w,w),D.ea2],x.p),w),w)
else p=this.bZy(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.A(B.a([B.E(B.av(p,w,w,w),1),D.bG5],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVo(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVB(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cE.aJ(A.d.gal(h.split(","))),A.A,p,p,A.ck,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Tm,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a0e,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lb,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a7O(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7O=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fzD(),$async$a7O)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eV7(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eV8(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7O,v)},
adu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adu=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eVa(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eVb(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eVc(r))
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
return B.b(C.fuV(q,r.cx,j,new C.b_Z(r.z,r.Q,r.as,r.at),new C.eVd(r),i,m,p,k),$async$adu)
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
if(r.c!=null)r.m(new C.eVe(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bT,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bJg,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bSJ,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eVF(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0e,h,h,h,i.ax?h:new C.eVG(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbA0()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hp(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vr:A.hz,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vG,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aWL),h,h,h,h,h,h,h,h,X.Iy,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jd,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aP3,!0,A.a4,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eVH(i)
s=i.aVB(A.lj,q,r,i.gcg5(),s)
r=i.z
r=B.E(i.abD(new C.eVJ(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.an,B.A(B.a([r,A.bp,B.E(i.abD(new C.eVK(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eVL(i)
s=i.aVB(A.vo,r,p,i.gcgd(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.E(i.abD(new C.eVM(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.aA,D.fj8,A.at,D.flW,A.bx,u,A.O,D.fko,A.aA,v,A.bx,B.A(B.a([q,A.av,B.E(B.v(B.a([s,A.an,B.A(B.a([p,A.bp,B.E(i.abD(new C.eVN(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fnD],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bed,A.q,1)
w=C.ag5(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bH(A.a3,h,h,B.p(h,B.A(B.a([D.bKl,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f2H,h,h,h),B.aL(!1,h,!0,D.e4E,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eVO(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b7A,h,u,v,h,h,A.n),h,h,h,h,D.bp3,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fab)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cXY[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.aA(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bD(1,A.bi,new B.C(A.jf,B.aE(h,B.dh(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eVP(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bx)
o.push(D.fs5)
o.push(A.O)
o.push(B.cp(new C.eVQ(i)))
o.push(A.bx)
o.push(D.fhf)
o.push(A.O)
w=B.a([i.b4W("auto","Let AI choose",A.dW,A.Py)],t)
for(v=x.O,m=0;m<11;++m){j=D.vM[m]
u=j.d
w.push(i.b4W(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.bY(A.bz,w,A.br,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iD(h,A.bo,h,h,h,new C.eVI(i),D.bFx,D.frl,h,D.fcq,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aOi,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gc6c()
v=B.fm(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eLM:A.G8
o.push(new B.a7(h,54,B.lt(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p1,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vg,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aa0,h,h,h,h,h,h,h,h),h)},
bMh(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eVf(this,p,d)
if(d===D.Cn)return new C.aCP(p,o,q)
w=B.m(16)
v=p?E.vG:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.X(p?A.ee:C.hAY(d),A.c,q,q,q,20)
r=C.hAZ(d)
return B.aE(q,B.dh(q,B.v(B.a([s,A.at,B.f3(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b4W(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dh(v,B.A(B.a([w,L.Is,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ahM,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eVu(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_H.prototype={
U(){return new C.aGf(new B.ar(A.as,$.aw()))}}
C.aGf.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
adv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adv=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eV0(r))
w=1
break}B.eT()
r.m(new C.eV1(r))
t=4
q=C.i19(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i0U(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eV2(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fUu()
f=$.Ch.h(0,k.a)
o=f==null||J.cl(f)?null:J.fo(f)
if(o==null){r.m(new C.eV3(r))
w=1
break}n=C.i0S(o,r.a.c)
C.i0O(r.a.c.a)
$.fTL=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fXc(j)
h=C.fXd(r.a.c)
e=C.fXe(r.a.c)
w=7
return B.b(C.bAK(k,r.a.c.a,j,h,new C.eV4(r),i,e,a0),$async$adv)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eV5(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adv,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bT,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.alI,A.f,j,j,D.aYZ,j,34,j,j,j,j,j,34),A.av,D.bwj],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aOL,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.a9w),j,j,j,j,j,j,j,j,X.Iy,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aP3,!0,A.a4,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cUu[q]
o=A.c.j(0.06)
n=k.e?j:new C.eV6(k,p)
r.push(B.mE(j,o,new B.x(p,j,Ay.ST,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uJ,j))}w=B.a([w,A.aA,u,A.an,t,A.aA,s,A.S,B.bY(A.bz,r,A.br,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aOi,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc6d()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.f6.j(0.5)],x.O):D.csU
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cw,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e4A:D.bJV
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eA(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i4,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vg,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aa0,j,j,j,j,j,j,j,j),j)}}
C.b_Z.prototype={}
C.aCP.prototype={
U(){return new C.biQ(null,null)}}
C.biQ.prototype={
gawn(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pC,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gawn().q()
this.btY()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawn(),new C.eb8(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgn.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d_3[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.x7.j(0.25+r*0.6).gp(0)
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
C.aqG.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Z5.prototype={
U(){return new C.aAg()}}
C.aAg.prototype={
gahz(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agi(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzW(){var w=this.e
return w===$?this.e=C.fXc(this.a.c).t(0,D.Cn):w},
a7B(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7B=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dgG(s))
u=3
r=A.d.iD(D.vM,new C.dgH(s))
q=B.db(C.fXc(s.a.c),x.Q)
l=q
J.hC(l,D.Cn)
p=l
if(s.gzW())J.ch(p,D.Cn)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzW()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fXd(i.c)
g=C.fXe(s.a.c)
w=6
return B.b(C.bAK(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7B)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agi(q,s.gahz())
f=q==null?null:q.b
n=f==null?s.gahz():f
if(!J.z(n,r.a)&&!s.gzW())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dgI(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7B,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dgL(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.X(A.cA,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vM[w]
u=o.gahz()
t=o.f?n:new C.dgM(o,v)
f.push(new C.brc(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzW()?D.bVs:n
if(o.gzW())s=n
else s=m?A.bm:A.bM
r=B.X(A.dW,o.gzW()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzW()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzW()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzW()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.auD(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dgN(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agw,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f3_,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.F6,n,n,A.ah)
u=o.f?n:o.gbz_()
t=B.bk(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bn(!0,B.p(n,B.v(B.a([new B.C(D.bs0,e,n),new B.dq(1,A.cl,f,n),new B.C(A.F5,new B.a7(1/0,50,B.bJ(B.eA(B.av(o.f?A.ry:D.fjB,n,n,n),n,new B.o(n,n,n,s,n,D.bU1,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tt,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brc.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bH(A.l3,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bH(A.lu,w,w,B.d(v.b,w,w,w,w,w,w,D.f2Y,w,w,w),w)],x.p)
if(q)v.push(D.aUR)
return B.aE(w,B.dh(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.eb5.prototype={
aDW(d,e,f){return e+"@"+A.a.aT(A.o.fR(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wg(d,e){return this.aDW(0,e,null)}}
C.aKP.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.b_V.prototype={
B(d){var w,v,u=null,t=C.fW2(this.c)
if(t==null)w=D.bkl
else{w=B.aI(d,u,x.w).w.cFX(D.boA,D.eL0)
v=this.d
w=B.uj(B.e1(B.an3(!1,t,!1,v,!1,390),!v,u),w)}return B.f3(A.A,new B.a7(416,870,new C.bkt(w,u),u),A.f,A.du)}}
C.bkt.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dag[w]
u=new B.aW(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anC,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dbr[w]
u=new B.aW(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anC,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cKD,D.bSr,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.ek(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aV2,B.p(t,t,A.f,t,t,D.aZh,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.blF,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.la.prototype={
pm(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.eo(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mx,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.eo(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rm(i,l,0,0,B.a([f,w,C.eo(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fp,t.l(),3,"",0,0,"",D.ci,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mw,"","","Welcome",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.ci,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rm(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.u7,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mw,"","","Agenda",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.ci,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rm(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ci,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mw,"","","Key Point 1",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.ci,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ci,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rm(i,l,0,0,B.a([u,r,C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ci,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mw,"","","Key Point 2",D.dd)
r=C.cC()
r=C.eo(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Bh(l,l,l,l,D.Cj,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rm(i,l,0,0,B.a([r,C.eo(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.ci,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mw,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Ej.prototype={
bx(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iW.prototype={}
C.Ea.prototype={
gaJE(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ag5(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2R(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ea(v,u,t,d==null?w.d:d)},
Fh(d){return this.a2R(null,d,null,null)},
aCF(d){return this.a2R(null,null,null,d)},
cFV(d,e){return this.a2R(d,e,null,null)},
ba1(d){return this.a2R(d,null,null,null)},
ba8(d){return this.a2R(null,null,d,null)}}
C.MZ.prototype={
U(){return new C.bic(new B.eP(0,$.aw()),null,null)}}
C.bic.prototype={
a_(){var w,v=this
v.a1()
w=v.qk(new C.dS6(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.j2(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.aw()
w.P$=0
this.btq()},
B(d){var w=C.ag5(this.a.c.a)
if(w==null)w=A.d.gL(D.Gt)
return B.cp(new C.dS5(this,w,C.hb_(this.a.c.d)))}}
C.bpM.prototype={
B(d){return B.nL(A.UE,this.e,new C.eUe(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bdg.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRo(d,e,v)
break
case"confetti":w.bFt(d,e,v)
break
case"crown":w.bH5(d,e,v)
break
case"aurora":w.bA4(d,e,v)
break
case"champagne":w.bDi(d,e,v)
break
case"diamonds":w.bJe(d,e,v)
break
case"starburst":w.ctb(d,e,v)
break
case"balloons":w.bAi(d,e,v)
break
case"galaxy":w.bO1(d,e,v)
break
case"redcarpet":w.cki(d,e,v)
break
case"coins":w.bEQ(d,e,v)
break
case"lanterns":w.bY8(d,e,v)
break
case"hearts":w.bVN(d,e,v)
break
case"petals":w.cfx(d,e,v)
break
case"butterflies":w.bCj(d,e,v)
break
case"neon":w.c0Y(d,e,v)
break
case"disco":w.bJp(d,e,v)
break
case"sunrise":w.cuL(d,e,v)
break
case"pearls":w.ceB(d,e,v)
break
case"snow":w.csR(d,e,v)
break
case"laurel":w.bYe(d,e,v)
break
case"ribbons":w.cmQ(d,e,v)
break
case"kente":w.bXX(d,e,v)
break
case"trophy":w.cyn(d,e,v)
break
case"shooting":w.cqI(d,e,v)
break
case"bokeh":w.bAB(d,e,v)
break
case"orbits":w.ccf(d,e,v)
break
case"flowers":w.bNj(d,e,v)
break
case"music":w.c0I(d,e,v)
break
case"mandala":w.c_9(d,e,v)
break
case"sparklers":w.ct_(d,e,v)
break
case"city":w.bE7(d,e,v)
break}},
rj(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nv
u=new B.aO(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cS(w,t,w+f,t))
u.E(new B.cS(w,t,w,t+f))
u.E(new B.cS(w,t,w-f,t))
u.E(new B.cS(w,t,w,s))
u.E(new B.bF())
d.aP(u,v)
d.af(e,f*0.18,v)},
lE(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.rj(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aRo(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lE(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.io,A.bA],w),B.a([A.et,A.aS],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bu(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.lg(new B.u(g,c1),new B.u(f,e),A.cs.aw(0,i/0.22))
a0.toString
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.ro(new B.u(g,c1),a0)))
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
a6=A.cs.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cT(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.ht(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cT(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cT(h,b1+60))
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
b9.a=A.nv
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.rj(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bFt(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.M()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d5h,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aX(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.P_[A.o.D(A.k.bu(C.cT(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cT(u,8)*2)+u)*180/3.141592653589793,0,0)
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
f.drawPath((t==null?m.e=new B.cF(m.gbK().a.snapshot()):t).a,k)
k.delete()}else{t=B.cm(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c0(t),k)
k.delete()}f.restore()}this.lE(a1,a2,a3,25,A.bK,30)},
bH5(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b9l],v),a4,a4).av(0,B.bT(w,u)))
l=o.H()
o=m.gbK().a.snapshot()
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
n.saq(new B.a8(A.b0,A.b6,A.x,D.d47,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.ej6,D.ed9,D.es9],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
l.delete()}}for(v=B.wR(i),u=B.a([],x.X),o=new B.vo(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jS(y.M));--f
o.jl()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cH([new B.H0(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fz
f.r=A.bK.gp(0)
l=f.H()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rj(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lE(a8,a9,b0,45,A.bK,40)},
bA4(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lE(a8,a9,b0,60,A.c,50)
w=[D.eCp,D.eC7,D.eC1,D.eDn]
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
n.a=A.nv
n.z=new B.ht(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nv
n.z=new B.ht(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.x6.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nv
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDi(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.M()
a0.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.hG.j(0.25+0.1*h),D.Wq],x.O),l,l).av(0,B.bT(new B.u(g,f),e)))
a1.af(new B.u(g,f),e,a0)
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
a0.r=D.P_[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.rj(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Ai.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bJe(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lE(a9,b0,b1,30,A.l5,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cT(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cT(p,2))+C.cT(p,3)*n,n)-o*2
l=C.cT(p,4)*a6+Math.sin(s+p)*a8*0.02
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
g.saq(new B.a8(A.ax,A.aC,A.x,D.d02,a5,a5).av(0,B.cm(A.J,k*1.2,o)))
a2=g.H()
g=f.gbK().a.snapshot()
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
if(a4>0.85)this.rj(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
ctb(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
r=n.gbK().a.snapshot()
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
m.delete()}j=A.k.bu(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bl1.aw(0,k)*(0.5+0.5*C.cT(t,v)))
this.rj(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.P_[A.o.D(A.k.bu(C.cT(t,4)*5),0,4)],u)}},
bAi(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.auL[A.o.F(o,6)]
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
u.drawPath((d==null?f.e=new B.cF(f.gbK().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cm(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bS(D.aV5,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.auC,a3).av(0,a2))
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
l=g.gbK().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cm(A.J,t,v)
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.auL[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c0(s),a1)
a1.delete()
u.restore()}},
bO1(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lE(b1,b2,b3,50,A.c,70)
for(w=[D.eCx,D.eCd,D.eCj],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
g=C.cT(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cT(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bK,A.ez,g)
k.toString
d=C.cT(i,3)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cT(i,4)).gp(0)
a0.a=A.nv
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.M()
a9.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.Ai.j(0.55),D.ae8],u),a4,a4).av(0,B.bT(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bu(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.lg(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lg(a3,a5,0.6)
a6.toString
a8=B.M()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.ro(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
cki(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o.saq(new B.bS(A.A,0.5,A.x,b5,0,B.a([A.Ai.j(0.28),D.ae8],w),b5,b5).av(0,B.bT(new B.u(q,u),t)))
o.a=A.nv
l=o.H()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.er:A.eM)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cS(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbK().a.snapshot()
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
v.saq(D.bTW.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rj(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bEQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.cm(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.deA:D.cyw,null,null).av(0,l))
k=q.H()
v.drawOval(B.c0(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bib.gp(0)
k=j.H()
v.drawOval(B.c0(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rj(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lE(d,e,f,30,A.bK,110)},
bY8(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lE(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bS(A.A,0.5,A.x,d,0,B.a([W.WD.j(0.45*k),D.acY],u),d,d).av(0,B.bT(new B.u(l,m),j)))
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
i=B.aq(D.b9w,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b0,A.b6,A.x,B.a([D.bdR,i],u),d,d).av(0,B.cm(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bVN(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cT(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)
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
l.push(new B.pu(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pu(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cSs[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bS(A.rL,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1n,d).av(0,B.bT(A.J,o*1.4)))
e=m.H()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lE(a3,a4,a5,30,A.io,130)},
cfx(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cT(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cT(q,2))+C.cT(q,3)*o,o)
m=C.cT(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cT(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cS(p,l,0,p))
m.push(new B.cS(n,l,0,n))
m.push(new B.bF())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.csT:D.d1g
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bT(A.J,p)))
j=n.H()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lE(d,e,a0,25,A.bK,140)},
bCj(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lE(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cT(r,1))
p=Math.sin(b2*(0.15+0.1*C.cT(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cT(r,3))+r*1.3)
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
a3.push(new B.pu(f,e,l,d,h,0))
a3.push(new B.pu(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d10:D.d3C,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Ap.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bhu.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c0Y(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.avN[t].j((1-s)*0.9).gp(0)
q.z=new B.ht(A.G,v)
p=r*0.3
p=B.bA(B.cm(e,r,r*1.6),new B.aW(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.avN[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bA(new B.a9(j,i,j+w,i+l),new B.aW(v,v))
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.ht(A.a9k,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bJp(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.mM,A.dw][A.o.F(p,4)]
j=C.cT(p,3)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nv
i.z=new B.ht(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.M()
t.r=A.az.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dA.gp(0)
a3.af(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.kf(B.bT(v,u)))
a3.qh(0,a1)
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
this.rj(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cuL(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cs.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
r=p.gbK().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.M()
a0.saq(new B.bS(A.A,0.5,A.x,h,0,B.a([D.b5E.j(0.6),D.acY],x.O),h,h).av(0,B.bT(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.M()
d.saq(D.eaT.av(0,B.bT(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
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
o.delete()}this.lE(a2,a3,a4,20,A.hU,180)},
ceB(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r.r=B.aq(A.cy,A.j5,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bS(An.pa,0.5,A.x,f,0,D.d6R,f,f).av(0,B.bT(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lE(a1,a2,a3,25,A.c,190)},
csR(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cT(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cT(r,2))+C.cT(r,3)*p,p)
n=C.cT(r,4)
m=Math.sin(t+r)
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cT(r,5)).gp(0)
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
h.delete()}v.restore()}this.lE(d,a0,a1,40,A.et,200)},
bYe(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f.saq(D.bTJ.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c0(g),e)
e.delete()
s.restore()}}$.W()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b9K.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rj(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lE(a3,a4,a5,40,A.bK,210)},
cmQ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hG,A.hU],a6),B.a([A.op,A.io],a6),B.a([A.aE,A.ez],a6)]
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dx(i,s),l=new B.bR(l,l.gM(0),r);l.C();){h=l.d
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
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avr,new B.mi(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lE(a8,a9,b0,40,A.c,220)},
bXX(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bu(g/t),5)
a1=g+t
$.W()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1q[a3].gp(0)
a4=a2.H()
s.drawRect(B.c0(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1q[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c0(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.rj(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1q[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cyn(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
l.E(new B.cS(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cS(v,r,v,a2))
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
a1.saq(new B.a8(A.a3,A.a7,A.x,D.d93,A.auS,null).av(0,new B.a9(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rj(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bFu(a4,a5,a6,60)},
bFu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cm(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.P_[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c0(o),m)
m.delete()
u.restore()}},
cqI(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lE(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.F(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bu((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).av(0,B.ro(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rj(a0,i,p,A.c,1-m)}},
bAB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.F(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.axf[l].j(n).gp(0)
m.a=A.nv
m.z=new B.ht(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axf[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ccf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
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
k.z=new B.ht(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lE(d,e,f,45,A.bK,270)},
bNj(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cT(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cT(o,2)*4,4)/4
j=A.ev.aw(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cT(o,3))*(j*i)
if(h<=0.5)continue
g=D.cZi[A.o.F(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cm(new B.u(0,l),i,j)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b0,A.b6,A.x,B.a([A.c,g],u),null,null).av(0,B.cm(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c0(d),a1)
a1.delete()}$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hG.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lE(a5,a6,a7,30,A.hU,280)},
c0I(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bT(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.atY[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c0(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.atY[A.o.F(g,4)]
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
c_9(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a0.push(new B.cS(h,m,0,g))
a0.push(new B.cS(j,m,0,i))
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bK,A.mM,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbK().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hU.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.M()
a5.saq(new B.bS(A.A,0.5,A.x,a3,0,B.a([A.hG.j(0.25),D.Wq],x.O),a3,a3).av(0,B.bT(w,a4)))
a7.af(w,a4,a5)
this.lE(a7,a8,a9,30,A.bK,300)},
ct_(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
l.saq(new B.bS(A.A,0.5,A.x,null,0,B.a([A.hU,A.hG.j(0.6),D.Wq],o),null,null).av(0,B.bT(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cT(f,1)
d=A.k.F(b2+C.cT(f,2)*e,e)/e
a0=A.k.bu((b2+C.cT(f,2)*e)/e)
a1=C.cT(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cT(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hU,A.aH,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.nv
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
g.delete()}}}this.lE(b0,b1,b2,35,A.bK,310)},
bE7(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRo(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bUE.av(0,j))
h=i.H()
r.drawRect(B.c0(j),h)
h.delete()
g=A.k.bu(m/q)
f=A.k.bu(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c0(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aYP.prototype={
B(d){var w,v=null,u=new C.c74(),t=new C.c76(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.amL,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c75(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gt[w]))
return B.bY(A.bz,s,A.br,12,10)}}
C.YE.prototype={
U(){return new C.ayE()}}
C.ayE.prototype={
gvm(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYj(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b3,A.aN),$.aw())}return v},
gawo(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJE()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b3,A.aN),v)}return t},
q(){var w=this.gaYj(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gawo()
w.T$=v
w.P$=0
this.a2()},
Zn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BJ(90,700,700,A.eG),$async$Zn)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fg(),$async$Zn)
case 8:p=e
o=q.b.toLowerCase()
n=J.ah_(o,".png")?"image/png":"image/jpeg"
r.m(new C.d5T(r,n,p))
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
return B.i($async$Zn,v)},
aYi(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aP8,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ag5(p.gvm().a)
if(n==null)n=A.d.gL(D.Gt)
w=p.gvm()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.MZ(p.gvm(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hj(A.mr,new C.d5Y(d),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hj(D.bEs,new C.d5Z(p),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aP2,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYj(0),o,o,o,o,o,2,p.aYi("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d6_(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ho,!0,A.a4,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hG.j(0.6),A.q,1)
if(p.gvm().d.length===0)q=D.bHM
else{q=C.hb_(p.gvm().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fL(q,A.A,o,o,A.ck,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6e(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvm().d.length!==0)r.push(B.aH(o,o,o,o,D.a0e,o,o,o,new C.d60(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bn(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawo(),o,o,o,o,o,2,p.aYi("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d61(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dl,!0,A.a4,o,A.am,o,o,o,o),A.ac,B.dp(D.bGG,D.ft0,new C.d62(p,d),B.bk(A.aw,o,o,o,A.w,o,A.ch,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZs,o,o,o,o,A.F2,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKi.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.YZ.prototype={
U(){return new C.beK(new B.ar(A.as,$.aw()))}}
C.beK.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bT,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cA,l,o,o,o,o),o,o,o,new C.dcF(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cK3[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gS(t)
r=new B.aW(12,12)
q=new B.aW(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aL(!1,new B.bq(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uv,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bq(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dcG(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hK,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.BU(A.bz,6,6,A.br,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aPZ,new C.dcH(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bn(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cl,B.cB(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tt,A.Y4,o,o,o),!0,!1,A.af,!0,!0)}}
C.be7.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eJ()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.M()
u.z=A.QA
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
C.bdP.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bA(new B.a9(0,0,0+a7.a,0+a7.b),A.kq),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.ln
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iU(a1))
v=new B.RY(new B.vo(B.wR(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.jl()
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
if(i<=h){k=new B.aO(r,k,a0,new B.cH([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cH([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cH([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jl()
e=u[a3].Ml(n).a
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mv
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
C.bmE.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eJ()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.ha()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galG()*1.4
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
j.saq(B.aTU(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jk
g=j.H()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b8K.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eJ()
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
e.z=new B.ht(A.G,k*0.35)
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
C.b8n.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eJ()
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
i.z=new B.ht(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.btx.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.M()
t=(0.5+0.5*t)*0.12
w.saq(new B.bS(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cRf,null).av(0,u))
d.aX(u,w)
w=u.cF(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jk
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bqz.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bu(d)*7,p=0;p<7;++p){o=new B.eJ()
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
g.z=new B.ht(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.bpI.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.M()
v.a=A.nv
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bd9.prototype={
a5(d,e){var w,v,u,t,s,r=e.geb(),q=0.55+0.45*Math.sin(this.b)
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
u.z=A.re
r=new C.d5A(this,r*0.16,d,u,w)
t=e.geb()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.xi.prototype={}
C.Ii.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aq5.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uw.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mr.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hw.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eI.prototype={
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
u.n(0,"fontWeight",v.x.gdI(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hOX(v.z))
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
hB(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,eI>")
n=B.B(new B.K(n,new C.ccv(),m),m.k("ak.E"))
return C.rm(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a4<n,@>>")
n=B.B(new B.K(n,new C.ccw(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hZ.prototype={
gb8n(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRL(){if(!C.kt(this.w))return!1
var w=this.gb8n()
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
r=B.B(new B.K(r,new C.cck(),q),q.k("ak.E"))
return C.Bh(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.B(new B.K(w,new C.ccl(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jB.prototype={}
C.b_Y.prototype={
B(d){return B.cp(new C.ccq(this))}}
C.anj.prototype={
U(){return new C.bhX(null,null)}}
C.bhX.prototype={
gaYk(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fT,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaYk().q()
this.bta()},
B(d){return B.c6(this.gaYk(),new C.dEj(),this.a.c)}}
C.aK3.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.acA.prototype={
Pn(d,e,f,g){return this.bN0(d,e,f,g)},
bN0(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pn=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pn)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pn,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.ds,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.E(new C.acS(A.hA,"Download",A.bY,new C.enc(w,d),!0,v),1),A.av,B.E(new C.acS(A.vt,"Share",A.bk,new C.end(w,d),!1,v),1),A.av,B.E(new C.acS(A.hj,"Safari",A.aZ,new C.ene(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.enf(d),v,v))
return B.bn(!0,new B.C(A.pF,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.F9,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.acS.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eA(B.v(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bun,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b_W.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aph(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c6f().ajQ(1.35)
s=B.aux(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.byA(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bk,h,h,h,h,2,D.bPI,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.w5,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zi,A.am,h,A.SI,h,h)
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
w=n?t.cFI(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eC:A.CU
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Sz:s
$.W()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fz
j.r=A.aB.gp(0)
j=i.cmT(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cmR(k,t,l?A.Sz:s)],x.p),h)}else w=i.cmS(p,t,g.k2?A.Sz:s,m)
v=new B.nb(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c3,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bH(r,h,h,q,h),h)
case 1:case 4:return i.bWr()
case 3:return i.ceA()
case 2:return B.b3(h,h,h,new C.b_T(g,h),A.f0)
case 5:g=g.r
return new C.b_V(g,!i.e&&i.z==null,h)}},
c6f(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jV
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.acW,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cj
w=A.aB
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mC
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cP(A.bA,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cP(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cP(A.b8,new B.u(-3*v,0),0),new B.cP(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cP(A.ct,A.J,8*v),new B.cP(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.Vv
break
case"ice":v=o.d
e=B.a([new B.cP(A.aS,A.J,10*v),new B.cP(A.cy,A.J,22*v)],x.r)
k=A.P
w=A.et
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jV
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cTc[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.M()
v=o.d
f.saq(D.bS8.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.K0,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.M()
v=o.d
f.saq(D.bSt.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cP(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cP(l.j(0.45),new B.u(u,u),0),new B.cP(l.j(0.2),new B.u(v,v),0)],x.r)
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
ayj(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eIv.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cco(h)
v=r.k2?C.i0t(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.CU
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.X9(B.dn(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cmT(d,e,f,g){return this.ayj(d,e,f,!1,g)},
cmR(d,e,f){return this.ayj(d,e,f,!1,null)},
cmS(d,e,f,g){return this.ayj(d,e,f,g,null)},
byA(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bWr(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.X(s.b===D.kS?A.G3:A.Bd,A.az,t,t,t,32),t,t,t)}w=u.bBx(r)
if(s.b===D.kS){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cp,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aMN(r,!0)
return C.fwc(s.go,v,s.id)}return w},
aMN(d,e){var w,v,u,t
try{w=C.i0M(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.ccn(this,w,v,e))
return u}catch(t){return D.aaG}},
bBx(d){return this.aMN(d,!1)},
ceA(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b3I
return C.i13(v,w.db,w.dx)}}
C.b_T.prototype={
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
switch(f.ax.a){case 0:d.aX(s,g)
d.aX(s,w)
break
case 1:d.hM(s,g)
d.hM(s,w)
break
case 2:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aP(r,g)
d.aP(r,w)
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
d.aP(r,g)
d.aP(r,w)
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
d.aP(r,g)
d.aP(r,w)
break}},
ar(d){return d.b!==this.b}}
C.aHF.prototype={
U(){return new C.bt3(null,null)}}
C.bt3.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ia,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvq()},
aMY(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.ds,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
byO(){var w,v=this,u=null,t=v.aMY("Slide A",A.bk),s=v.aMY("Slide B",A.aZ)
if(v.a.c===D.ci)return new B.an(A.W,u,A.b_,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f1E(v,s,t),u)},
B(d){return this.byO()}}
C.aIh.prototype={
iZ(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jG(d){return d.b!==this.b}}
C.Ul.prototype={
U(){return new C.bi9(null,null)}}
C.bi9.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AE,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ci){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dQj(u),x.a)},
br(d){var w,v,u,t=this
t.bF(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ci)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dQi(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.btp()},
B(d){var w,v=this.a
if(v.c.dy===D.ci||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dQh(this),v.d)}}
C.Ih.prototype={
B(d){return B.cp(new C.ccg(this))}}
C.ayo.prototype={
U(){return new C.bcD()}}
C.bcD.prototype={
a_(){this.a1()
if(this.a.c!==D.ci)B.bN(A.Lk,new C.d2P(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ci)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Ul(C.eo(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cd,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eo(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Ul(t,B.p(p,D.feV,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.je,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.b_1,A.bd)}}
C.a71.prototype={
U(){return new C.biO(null,null)}}
C.biO.prototype={
gaYR(){var w=this.a
if(w.e)w=D.eIC.t(0,w.c)||D.aMg.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaYR()){w=C.i_8(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.btW()},
B(d){var w,v=this,u=v.d
if(!v.gaYR()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.eaP(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYS.prototype={
B(d){var w=null
return B.av(C.b_X(!0,w,!1,C.eo(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.ci,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bdN.prototype={
iZ(d){return C.a1G(this.b,new B.a9(0,0,0+d.a,0+d.b).cF(-this.c))},
jG(d){return d.b!==this.b||d.c!==this.c}}
C.boF.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cF(-this.d),g=this.b,f=C.a1G(g,h),e=a1.geb(),d=new C.eRS()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aNN.av(0,h))
a0.aP(f,w)
g=C.a1G(g,h.cF(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bhY.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eSa.av(0,h))
a0.aP(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.ht(A.G,e*0.04)
a0.aP(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aP(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eS8.av(0,h))
a0.aP(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a1G(g,h.cF(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aP(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.ht(A.G,e*0.035)
a0.aP(f,g)
g=d.$1(e*0.016)
g.r=A.or.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eS3.av(0,h))
a0.aP(f,w)
w=C.a1G(g,h.cF(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b75.gp(0)
a0.aP(w,v)
g=C.a1G(g,h.cF(e*0.03))
v=d.$1(e*0.004)
v.r=D.b9z.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aNN.av(0,h))
a0.aP(f,g)
for(g=B.wR(f),w=B.a([],x.X),g=new B.vo(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jS(y.M));--q
g.jl()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bu(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jl()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jl()
m=w[q].Ml(p*n/o).a
l=D.cQy[A.o.F(n,4)]
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
g.saq(D.eSc.av(0,h))
g.z=new B.ht(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.saq(D.eS9.av(0,h))
a0.aP(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a1G(g,h.cF(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nB.gp(0)
a0.aP(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bpF.prototype={
a5(d,e){d.Fw(C.a1G(this.b,new B.a9(0,0,0+e.a,0+e.b).cF(-this.c)),A.w,e.geb()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aKh.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aKN.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aM7.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.a7k.prototype={}
C.Nq.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aDf(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
gdX(){return this.c},
gT3(){return this.r},
gT4(){return this.w},
gLc(){return this.x}}
C.aDf.prototype={
a_(){var w,v=this
v.a1()
$.aU.c2$.push(v)
C.fB8()
$.hiz=new C.etq(v)
w=B.bj(null,A.AC,null,1,null,v)
w.fa(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.I0()},
br(d){var w,v,u=this
u.bF(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.O0(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.I0()}},
iT(d){if(d===A.zJ||d===A.rN||d===A.rM||d===A.pb)this.ti()},
q(){var w,v,u,t=this
$.aU.hE(t)
w=t.at
if(w!=null)w.a7(0)
t.ti()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bM(0)
v.h2()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bu9()},
gaaF(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOk(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ab8(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRL())return!1
return!0},
k8(){return this.ab8(null)},
ahR(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.eQs)},
q3(){if(!this.k8())return!1
this.ahR()
return!0},
aq_(d){var w,v,u,t,s,r=this
if(r.ab8(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hhG(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zB(){return this.aq_(null)},
I0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$I0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aq7(k),$async$I0)
case 3:j=e
w=4
return B.b(C.aoK(k),$async$I0)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fQj(j,t.bZj())
w=t.gaaF()?5:7
break
case 5:r=t.gOk()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZ5(r),$async$I0)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.epO())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.epP())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yj(m==null?"":m)!=null)continue
C.fBk(n,s)
p=!0}t.m(new C.epQ(t,s))
if(p||s.length>J.ad(j))t.ti()
case 1:return B.h(u,v)}})
return B.i($async$I0,v)},
bZj(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kt(w)&&w!==q}if(w)p.push(r)
return p},
clh(d){var w,v=this,u=d.w
if(!C.kt(u)||u==="hati_kiapo_uongozi")return
v.a9v(d)
w=A.d.bd(v.d,new C.ero(d))
u=v.d
if(w>=0){u[w]=d.hB()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hB())
v.db=!1},
cfw(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kt(s)&&s!=="hati_kiapo_uongozi"}if(s)u.clh(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,hZ>")
s=B.B(new B.cQ(new B.a2(s,new C.erc(),w.k("a2<1>")),new C.erd(),v),v.k("J.E"))
return s},
O0(d){return this.bNn(d)},
ti(){return this.O0(null)},
bNn(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cfw()
w=3
return B.b(C.Vk(d==null?t.a.c:d,s),$async$O0)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aq_(r)?4:5
break
case 4:w=6
return B.b(C.a6y(r),$async$O0)
case 6:q=r.x
p=A.a.i(q==null?t.gOk():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bd(t.d,new C.epb())
q=t.d
if(o>=0)q[o]=r.hB()
else A.d.ck(q,0,r.hB())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O0,v)},
p8(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kt(u.w))===!0?A.hX:A.lG
v.at=B.cM(w,new C.esw(v))},
aYl(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aem(u.hB(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cyB(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aem(w.e.hB(),w.f,w.r))
w.m(new C.etm(w,v.pop()))
w.p8()},
ckn(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aem(w.e.hB(),w.f,w.r))
w.m(new C.erm(w,v.pop()))
w.p8()},
o1(){var w,v,u=this
if(u.e==null)return
w=A.d.bd(u.d,new C.et9(u))
if(w>=0){u.d[w]=u.e.hB()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
X_(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xa(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bM(0)
u.h2()}w.a9(0)},
JJ(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.db(new B.cQ(new B.a2(w,new C.eta(),v.k("a2<1>")),new C.etb(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.B(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bM(0)
p.h2()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.etc(n))
s.cg(0,p,new C.etd())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hm(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b7(u.d,new C.eoA(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOk()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hB())}u.o1()
u.p8()},
aic(d,e){var w,v,u,t,s=this
if(s.k8())return
w=s.X_(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kt(v.w))===!0
if(u){C.i_c(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i_d(t,w.d+w.f*0.5)}}s.Hm()
s.o1()
s.p8()
if(u&&s.c!=null)s.m(new C.etn())},
czF(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hm()
w.o1()
w.p8()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gq7(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hYe(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bWG(v)
t=q.bWF(v)
s=B.b0(v.e)
r=v.f
return new C.jB(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hB9(o)},
bWG(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bWF(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
ae9(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaF()){w.c.I(x.q).f.R(D.eP4)
return}w.a9v(d)
w.aZx(C.bAL(d))
return}if(C.cd9(v)){w.a9v(d)
w.aZx(d)
return}w.m(new C.eqv(w,d))},
aqy(){var w,v,u,t,s,r,q=this
q.a1r(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kt(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eoy(q))
if(r&&q.c!=null){u.toString
q.Jj(u,s)}return}q.ti()
q.m(new C.eoz(q))},
aZw(d){this.a9v(d)
this.ZY(d,!0)},
a9v(d){if(!C.kt(d.w))return
C.fBk(d,this.d)},
ZY(d,e){return this.cbr(d,e)},
aZx(d){return this.ZY(d,!1)},
cbr(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bAL(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOk():r)
t.dy.W(0,q.toLowerCase())
C.aoL(t.a.c,q)}r=s}else r=d
w=C.cd9(r.w)?3:4
break
case 3:w=5
return B.b(t.a9w(r),$async$ZY)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b7(t.d,new C.eqS(l))
o=l.a.hB()
n=C.kt(o.w)&&C.i0o(o)
t.m(new C.eqT(t,o,p))
if(n){m=A.d.bd(t.d,new C.eqU(o))
if(m>=0){t.d[m]=o.hB()
t.ti()}}if(!t.ab8(l.a))t.Y7()
r=!1
if(t.c!=null)if(!t.ab8(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aq_(r)&&C.fxn(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.ePE)
case 1:return B.h(u,v)}})
return B.i($async$ZY,v)},
a9w(d){return this.bLC(d)},
bLC(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.le(r.c,A.z_),$async$a9w)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kR(!1,r,s.c,s.d,null,A.z_,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9w,v)},
nU(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cd9(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ccy(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nU,v)},
adR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.equ(),s,null,!0,!0,x.H),$async$adR)
case 3:if(t.c==null){w=1
break}t.aqy()
case 1:return B.h(u,v)}})
return B.i($async$adR,v)},
adQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.eqr(),s,null,!0,!0,x.H),$async$adQ)
case 3:if(t.c==null){w=1
break}t.m(new C.eqs())
t.aqy()
case 1:return B.h(u,v)}})
return B.i($async$adQ,v)},
Y7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Y7)
case 3:r=e
if(B.kd(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Y7)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eNI)
case 1:return B.h(u,v)}})
return B.i($async$Y7,v)},
Jj(d,e){return this.clI(d,e)},
clI(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jj=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afG(s,t.gE5(),t.gE4(),!0,e,t.d),$async$Jj)
case 9:w=4
break
case 6:w=10
return B.b(C.afH(s,t.gE5(),t.gE4(),!0,e,t.d),$async$Jj)
case 10:w=4
break
case 7:w=11
return B.b(C.afI(s,t.gE5(),t.gE4(),!0,e,t.d),$async$Jj)
case 11:w=4
break
case 8:w=12
return B.b(C.afJ(s,t.gE5(),t.gE4(),!0,e,t.d),$async$Jj)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jj,v)},
bYc(){var w,v,u,t,s=this
if(!s.gaaF()){s.c.I(x.q).f.R(D.eNV)
return}w=s.gOk()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afF(u,t,v,new C.epK(s),new C.epL(s),w)},
aea(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aea=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dG,null,new C.eqB(u),s,!0,!0,!1,A.lp,!1,!1,x.N),$async$aea)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afJ(s,u.gE5(),u.gE4(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afG(s,u.gE5(),u.gE4(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.afH(s,u.gE5(),u.gE4(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afI(s,u.gE5(),u.gE4(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bYc()
return B.h(null,v)}})
return B.i($async$aea,v)},
cay(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYl()
w=C.cC()
v=C.Bh(t,t,t,t,D.Cj,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eqC(u,v))},
a8X(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.q3()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i4T(s),$async$a8X)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.da(q.r,new C.eoC())
t.d2(new C.eoD(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8X,v)},
ag7(d,e,f,g){var w=null,v=g?A.dp:A.bM,u=B.I(g?A.b2:A.cp,A.q,1)
return B.hp(B.aE(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
ZX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.q3()){w=1
break}s=t.jJ()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eqN(),q),q.k("J.E"))}o=s!=null&&s.b===D.lo?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.ePP)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.eqO(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$ZX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZX,v)},
aer(){return this.cbq()},
cbq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aer=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.q3()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i4F(s,t.f+1,o),$async$aer)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kB(s,B.U(s).c)
p.a=A.d.bd(o.r,new C.eqQ(q))
t.d2(new C.eqR(p,t,o,q,r))
t.c.I(x.q).f.R(D.eQd)
case 1:return B.h(u,v)}})
return B.i($async$aer,v)},
aey(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aey=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.q3()||!t.zB()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.er7(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eNt)
w=1
break}o=new B.K(p,new C.er8(),B.U(p).k("K<1,N>")).fo(0,new C.er9())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b3,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.K,null,new C.era(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aey)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.erb())
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
aed(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aed=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.q3()){w=1
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
return B.b(C.hjE(s,new C.Ea(r,q,p,o==null?"":o)),$async$aed)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d2(new C.eqD(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ag5(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aed,v)},
a9p(){return this.bKZ()},
bKZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.q3()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i4S(s,t.f+1,l),$async$a9p)
case 3:r=e
q=$.fTL
$.fTL=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d2(new C.eoT())
t.c.I(x.q).f.R(D.eNk)
w=1
break}if(!q){s=r.CW
s=C.hix(l,s==null?"":s,!1)}else s=!1
if(s){t.d2(new C.eoU(t,l,r))
t.c.I(x.q).f.R(D.eQH)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kB(s,B.U(s).c)
s=l.r
m.a=A.d.bd(s,new C.eoV(p))
o=s.length
t.d2(new C.eoW(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9p,v)},
aP2(d,e){if(e){this.af0()
return}this.cay(d,!1)},
bGG(){return this.aP2(null,!1)},
af0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.bX,null,new C.erh(t),r,!0,!0,!0,A.oW,!1,!1,x.N),$async$af0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eri(t,C.hYd(s).pm()))
case 1:return B.h(u,v)}})
return B.i($async$af0,v)},
d2(d){var w=this
if(w.q3())return
w.Hm()
w.aYl()
w.m(d)
w.JJ()
w.o1()
w.p8()},
a7q(){this.d2(new C.enx(this,D.mw))},
aQr(){var w=this.gdr()
if(w==null)return
this.d2(new C.eoR(this,w))},
aPD(){var w=this.e
if(w==null||w.r.length<=1)return
this.d2(new C.eoP(this))},
b1s(d,e){if(this.e==null||d===e)return
this.d2(new C.erq(this,d,e))},
Ny(d){return this.bIE(d)},
bIE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ny=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOk():s)
w=5
return B.b(C.aoJ(t.a.c,r),$async$Ny)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aq9(s)
w=6
return B.b(C.b00(t.a.c,s),$async$Ny)
case 6:if(t.c==null){w=1
break}t.m(new C.eoL(t,d))
w=7
return B.b(t.ti(),$async$Ny)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ny,v)},
clF(d,e){var w=this
if(d.z){w.ahR()
return}w.m(new C.erp(w,d,e))
w.p8()},
jJ(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
W0(d){return this.ch.cg(0,d.a,new C.eoB(d))},
aso(d){return this.CW.cg(0,d.a,new C.epc())},
a1r(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.X_(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ak$.d.c
if(u!=null)u.jz()},
b4Q(){return this.a1r(!0)},
a1p(d){var w,v,u=this
if(u.q3())return
if(!u.zB())return
w=u.X_(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.W0(w).saV(0,"")}u.m(new C.et7(u,d))
$.aU.x1$.push(new C.et8(u,d,w))},
b5l(d){var w=this
if(d.b===D.cQ&&!w.k8()&&w.zB()){w.a1p(d.a)
return}w.ayJ(d.a)},
ayJ(d){var w,v,u,t,s,r=this
if(r.k8())return
w=r.r
if(w!=null&&w!==d){v=r.X_(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.esx(r,s,d))
if(s||d==null){t=$.aU.ak$.d.c
if(t!=null)t.jz()}},
aLl(){this.d2(new C.eny(this))},
oO(d){return this.bxR(d)},
bxR(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$oO)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d2(new C.env(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oO,v)},
V9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Ge(78,1920),$async$V9)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d2(new C.enl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V9,v)},
V3(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$V3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.Cu(t.a.c),$async$V3)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gam(s)){t.c.I(x.q).f.R(D.eRg)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.eni(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$V3)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d2(new C.enj(t,q))
case 1:return B.h(u,v)}})
return B.i($async$V3,v)},
aro(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b7(w.gdr().z,new C.eoN(v))){w.c.I(x.q).f.R(D.eQh)
return}if(w.w===v)w.a1r(!0)
w.d2(new C.eoO(w,v))},
bEW(){var w=this.jJ(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aM2(d,e){var w=this,v=w.jJ(),u=w.gdr(),t=w.e
if(t==null)return
w.d2(new C.eo_(w,v,d,e,t,u))},
bzr(d){return this.aM2(d,null)},
a7I(d){return this.bzz(d)},
bzz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5P.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nU(),$async$a7I)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jJ()
if(s!=null){r=s.b
if(r===D.cQ)t.bzr(s.w>=28||s.x.gdI(0)>=A.H.gdI(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aM2(r.j(0.88),r)}w=1
break}t.d2(new C.eo4(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
a7H(d){return this.bzx(d)},
bzx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jJ()
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
return B.b(t.nU(),$async$a7H)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.eo2(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7H,v)},
bzh(d){var w=this.gdr()
if(w==null)return
this.d2(new C.enZ(this,w,d))},
a_2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i4O(r),$async$a_2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.o1()
t.m(new C.er1(t,s))
w=4
return B.b(t.ti(),$async$a_2)
case 4:if(t.c!=null)t.ae9(s)
case 1:return B.h(u,v)}})
return B.i($async$a_2,v)},
a9h(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1r(!0)
t.o1()
s=t.c
s.toString
w=3
return B.b(C.QA(s,q),$async$a9h)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9h,v)},
Dc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.o1()
t=4
w=7
return B.b(C.aOR(m),$async$Dc)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOf(o,q,m.b),$async$Dc)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dc,v)},
ET(d,e){return this.cy4(d,e)},
cy4(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ET=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.q3()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1r(!0)
t.o1()
s=h.a=t.e.hB()}else{r=A.d.bd(t.d,new C.etg(d))
s=h.a=r>=0?t.d[r].hB():d.hB()}s=s.w
q=s==null
p=C.hZb(q?"":s)
o=C.hht(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a2<1>")
n=B.B(new B.a2(s,new C.eth(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.crp(n.length,o,s),$async$ET)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hZ5(h.a)
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
return B.b(t.cro(n,o),$async$ET)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iD(t.d,new C.eti(s))
s=h.a.b
w=11
return B.b(t.crm(k.b,s),$async$ET)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hB()
case 5:j=C.hZa(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eRr)
w=1
break}w=12
return B.b(t.crn(j.a,s,o,j.c),$async$ET)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.etj(h,t,i))
t.p8()
case 1:return B.h(u,v)}})
return B.i($async$ET,v)},
crp(d,e,f){var w=this.c
w.toString
return B.bV(A.K,null,new C.esN(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cro(d,e){var w=this.c
w.toString
return B.bV(A.K,null,new C.esM(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
crm(d,e){var w=this.c
w.toString
return B.bV(A.K,null,new C.esG(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
crn(d,e,f,g){var w=this.c
w.toString
return B.bV(A.K,null,new C.esI(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaJ(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaK(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eB,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f0A,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aTF(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Tk,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aTI(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nq,w,w,w),A.cX,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bg,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.epG(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bVC(d,e,f,g,h,i){return this.aTI(d,e,f,!1,g,h,i)},
atJ(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.ds,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Yp,w,w,w)},
aTH(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.ch,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.no,w,w,w),new C.epF(d,f),v)},
aTG(d,e){return this.aTH(d,e,null)},
JA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p_(l,s.c,s.d),$async$JA)
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
for(l=A.d.gae(o.z),n=new B.fh(l,new C.esy());n.C();){m=l.gS(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9a(l.charCodeAt(0)==0?l:l,r.b),$async$JA)
case 4:l=t.a
w=5
return B.b(B.oZ(l.c,l.d),$async$JA)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JA,v)},
HH(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p_(q,s.c,s.d),$async$HH)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9a(A.R.ao(r.ag(),null),r.b+".json"),$async$HH)
case 4:q=t.a
w=5
return B.b(B.oZ(q.c,q.d),$async$HH)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HH,v)},
b4A(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.o1()
u.ti()
w=u.c
w.toString
v=B.e8(new C.et6(u,t),!1,null,x.z)
B.a6(w,!1).c8(v)},
GV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$GV)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fBx(),$async$GV)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i0Y(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.aB,null,new C.enq(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GV)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d2(new C.enr(t,s))
w=1
break}if(p==="split")t.d2(new C.ens(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GV,v)},
MU(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.q3()){w=1
break}w=3
return B.b(t.nU(),$async$MU)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOQ(s,null,null),$async$MU)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d2(new C.enw(t,r))
case 1:return B.h(u,v)}})
return B.i($async$MU,v)},
b1f(d){var w=this.e
if(w==null||!C.kt(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNk(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOQ(s,t==null?null:B.b0(t),u)},
a7o(d){return this.bxI(d)},
bxI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.q3()){w=1
break}if(!t.zB()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eRG)
w=1
break}w=3
return B.b(t.aNk(),$async$a7o)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d2(new C.enn(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7o,v)},
afL(d){return this.ckq(d)},
ckq(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.q3()){w=1
break}if(!t.zB()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eQP)
w=1
break}w=3
return B.b(t.aNk(),$async$afL)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d2(new C.ern(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afL,v)},
c7f(){var w,v,u=this
if(u.k8())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cx6()}},
cx6(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d2(new C.ete(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bVX(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d2(new C.epJ(this,r,u.d))},
c_v(d){var w
if(this.k8())return!1
w=this.e
if((w==null?null:C.kt(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fy8(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c_w(d){var w
if(this.k8())return!1
w=this.e
if((w==null?null:C.kt(w.w))!==!0)return!0
if(!this.zB())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fy8(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
N2(d){return this.bzZ(d)},
bzZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$N2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.q3()){w=1
break}if(!t.zB()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.ePF)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aoN(p),$async$N2)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eQj)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6y(r)
w=1
break}t.m(new C.eo8(t,d,o))
t.o1()
$.aU.x1$.push(new C.eo9(t))
case 1:return B.h(u,v)}})
return B.i($async$N2,v)},
V7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$V7)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bBr(),$async$V7)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d2(new C.enk(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V7,v)},
NM(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$NM)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jJ()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fBo(r),$async$NM)
case 4:q=e
if(q==null){w=1
break}t.d2(new C.epa(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NM,v)},
iP(d){this.d2(new C.ent(this,d))},
pU(d){return this.bza(d)},
bza(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.q3()){w=1
break}m=!D.aMj.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nU(),$async$pU)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.GV()
w=1
break A
case"sign_paper":t.MU()
w=1
break A
case"hd_photo":t.V7()
w=1
break A
case"sharpen":t.NM()
w=1
break A
case"print":t.Dc()
w=1
break A
case"rotate":s=t.jJ()
if(s!=null)t.d2(new C.enC(s))
w=1
break A
case"text_box":t.aLl()
w=1
break A
case"picture":t.V9()
w=1
break A
case"present":t.b4A()
w=1
break A
case"new_slide":t.a7q()
w=1
break A
case"export_json":t.HH()
w=1
break A
case"outline_share":t.JA()
w=1
break A
case"flashcard_tool":t.uW(D.Hw)
w=1
break A
case"quiz_tool":t.uW(D.Hx)
w=1
break A
case"worksheet_tool":t.uW(D.Hy)
w=1
break A
case"duplicate_el":s=t.jJ()
if(s==null){w=1
break A}t.d2(new C.enD(t,s))
w=1
break A
case"delete_el":t.aro()
w=1
break A
case"bring_fwd":s=t.jJ()
if(s==null||t.gdr()==null){w=1
break A}t.d2(new C.enE(t,s))
w=1
break A
case"send_back":s=t.jJ()
if(s==null||t.gdr()==null){w=1
break A}t.d2(new C.enP(t,s))
w=1
break A
case"align_left":s=t.jJ()
if(s!=null)t.d2(new C.enS(s))
w=1
break A
case"align_center":s=t.jJ()
if(s!=null)t.d2(new C.enT(s))
w=1
break A
case"align_right":s=t.jJ()
if(s!=null)t.d2(new C.enU(s))
w=1
break A
case"grayscale":case"brighten":t.NM()
w=1
break A
case"flip_h":s=t.jJ()
if(s!=null)t.d2(new C.enV(s))
w=1
break A
case"flip_v":s=t.jJ()
if(s!=null)t.d2(new C.enW(s))
w=1
break A
case"rectangle":t.oO(D.be)
w=1
break A
case"circle":t.oO(D.eI)
w=1
break A
case"triangle":t.oO(D.jE)
w=1
break A
case"arrow":t.oO(D.Cl)
w=1
break A
case"line":case"divider":t.oO(D.fp)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.fh(q,new C.enX()),o=0;p.C();){n=A.a.fB(A.a.i(q.gS(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.enY(),B.U(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iP(C.iS(A.L,!1,t.gq7().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mx,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iP(C.iS(A.L,!1,t.gq7().e.l(),A.aD,22,A.bl,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iP(C.iS(A.bg,!0,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.u7,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iP(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.u6,0.8,0.1,0.22))
w=1
break A
case"quote":t.iP(C.iS(A.L,!1,4279310375,A.aD,24,A.cD,A.a5,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iP(C.iS(A.bg,!1,4284773515,A.aD,14,A.bl,A.a5,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.u7,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iP(C.iS(A.dL,!1,4279310375,A.aD,14,A.bl,A.a5,0.08,C.cC(),C.bBt(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iP(C.iS(A.dL,!1,4279310375,A.aD,13,A.bl,A.a5,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d2(new C.enF(t))
w=1
break A
case"footer_bar":t.d2(new C.enG(t))
w=1
break A
case"highlight":t.d2(new C.enH(t))
w=1
break A
case"redact":t.d2(new C.enI(t))
w=1
break A
case"callout":t.d2(new C.enJ(t))
w=1
break A
case"checkboxes":t.iP(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iP(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d2(new C.enK(t))
w=1
break A
case"letter":t.iP(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.82,C.cC(),C.bBt()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iP(C.iS(A.bg,!1,4279310375,A.aD,22,A.bl,A.P,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.u7,0.8,0.1,0.12))
w=1
break A
case"toc":t.iP(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iP(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iP(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iP(C.iS(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mx,0.32,0.62,0.08))
w=1
break A
case"draft":t.iP(C.iS(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iP(C.iS(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d2(new C.enL(t))
w=1
break A
case"progress":t.d2(new C.enM(t))
w=1
break A
case"stars":t.iP(C.iS(A.L,!1,4279310375,A.aD,36,A.bl,A.a5,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q2,0.8,0.1,0.4))
w=1
break A
case"equation":t.iP(C.iS(A.L,!1,4279310375,A.aD,32,A.bl,A.P,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iP(C.iS(A.L,!1,4279310375,A.aD,18,A.bl,A.a5,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.u6,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d2(new C.enN(t))
w=1
break A
case"compare":t.d2(new C.enO(t))
w=1
break A
case"link_text":t.iP(C.iS(A.bg,!1,4280640491,A.mC,16,A.bl,A.a5,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iP(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iP(C.iS(A.bg,!1,4280640491,A.aD,18,A.bl,A.a5,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d2(new C.enQ(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d2(new C.enR(t,r))
w=1
break A
case"invoice":t.iP(C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iP(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iP(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bBt()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iP(C.iS(A.bg,!1,4279310375,A.aD,17,A.bl,A.a5,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iP(C.iS(A.bg,!1,4279310375,A.aD,15,A.bl,A.a5,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pU,v)},
cqR(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eIz.t(0,this.z)},
cqQ(d){if(this.jJ()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b6b(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ci,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i0N(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Np,A.f,p,p,D.DD,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fx,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLe(d){var w,v=null,u=this.jJ()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.PT,new C.ep9(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uW(d){return this.bxQ(d)},
bxQ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMd.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nU(),$async$uW)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.enu(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eHl
w=h.e
if(w==null)return h.bBD()
v=h.gdr()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bT,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eD,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bX:D.b92
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRL()}else j=!1
if(j)k.push(new C.a72(h.a.c,!1,h.e.gb8n(),h.gc7c(),g))
else if(s&&h.e!=null&&!h.k8()&&C.cd9(h.e.w)){j=h.a
k.push(new C.a72(j.c,j.d,g,h.gc8l(),g))}if(s)k.push(h.bLa(w,t,r))
if(s&&h.k8()){w=t?A.fm:A.ke
j=B.m(14)
i=B.I(A.bk.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bJw,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AJ,A.ix,g,g,g))}w=!n
if(w&&!h.k8())k.push(h.c0r(t,r))
if(w&&h.k8())k.push(h.cy5(t))
if(r&&h.jJ()!=null&&w&&!h.k8())k.push(h.c0n(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b45(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b45(t,!1),g))
i.push(B.E(new B.bH(A.b0,g,g,h.bCV(v,t,!s||p),g),1))
if(h.cqR(r)&&u&&s&&!h.k8())i.push(h.c70(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.k8()&&h.cqQ(!1))j.push(new B.a7(240,g,h.bNL(t),g))
k.push(B.E(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c0o(t))
return B.c8(g,m,B.bn(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bBD(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bX:A.bM
v=r.a.e
u=r.c6g(A.bk,A.pJ,new C.eoc(r),r.gcav(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aL3(A.bk,A.hy,"Blank Presentation",new C.eod(r)),1),A.av,B.E(r.aL3(A.aZ,A.y5,"Class Template",new C.eoe(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bx,s,A.mB,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.byD(w))
else{t=new B.hX(t,B.U(t).k("hX<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.eof(r,w),x.l))}return B.c8(q,p,B.bn(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bJs(){this.m(new C.eoQ(this))
var w=this.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900){w=$.aU.ak$.d.c
if(w!=null)w.jz()}},
aes(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aes=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jJ()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.er0(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aes)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aes,v)},
Ax(d,e){return this.crc(d,e)},
crc(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Ax=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.W0,!0,"Dismiss",j,new C.esz(),new C.esA(d,e),A.iv,!0,x.N),$async$Ax)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahR()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRL()){r.ahR()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOR(d),$async$Ax)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOf(j,q,d.b),$async$Ax)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.ET(d,!1),$async$Ax)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hR(D.W0,!0,"Dismiss",j,new C.esB(),new C.esC(d),A.a1,!0,x.y),$async$Ax)
case 20:if(g===!0)r.Ny(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afv("Rename presentation",d.b),$async$Ax)
case 24:l=g
if(l!=null)r.clF(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.esD(r,k))
r.p8()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ax,v)},
b_b(d,e){var w=null
return B.bK(!1,D.foQ,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.au,w,A.lH,w,w,w,w,w,A.km,w,w))},
byD(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.enz(this,d),null)},
bHA(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.eoE(),x.dv).c_(0,new C.eoF()),v=B.B(w,w.$ti.k("J.E"))
return new B.C(G.ag3,this.aLD(v,e,new C.eoG(),f),null)},
aLD(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aW(6,6)
r=new B.aA(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bu,n,n,n,10),A.q9],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cn(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bq(s,s,s,s),n,n,A.n),n,n,n,n,A.n7,n,n,n))
A.d.v(l,u)}return B.f3(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
byB(d,e,f){return this.aLD(d,e,null,f)},
bHC(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d9j
else if(v==="hati_kuhoweya")w=D.cWK
else{if(v==="hati_kiapo_uongozi")v=D.cJY
else v=C.kt(v)?D.cQT:A.Pu
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eoJ(this,f,d,e,w),null)},
c0o(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jJ()
if(i==null||i.b!==D.cQ)return A.bH
w=k.W0(i)
v=k.aso(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.C(A.AM,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b5,B.bK(!1,D.fkA,j,j,!0,j,j,new C.eq9(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bk.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.C(A.h6,B.c_(new B.C(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bk,j,j,j,j,2,D.bPq,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.w5,j,j,j,j,j,j,!1,"\u2022",j,new C.eqa(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zi,A.am,j,A.SI,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.A(B.a([k.tH(G.Mo,j,new C.eqb(k,i),d),k.tH(G.Zz,j,new C.eqc(k,i),d),k.tH(I.akm,j,new C.eqd(k,i),d),k.tH(I.a_f,j,new C.eqe(k,i),d),k.tH(k.byz(i.as),j,new C.eqf(k,i),d),k.tH(D.aly,j,new C.eqg(k,i),d),k.tH(D.alx,j,new C.eqh(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(N.agc,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d9],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ld,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c0n(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jJ()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cw,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b2K(A.jg,"Edit",new C.epV(o,m),d,!0))
if(w===D.lo)p.push(o.b2K(A.FY,"Shape & ring",new C.epW(o),d,!0))
p.push(o.tH(A.Bw,"Format",new C.epX(o),d))
if(v)A.d.v(p,B.a([o.tH(G.Mo,n,new C.epY(o,m),d),o.tH(D.aly,n,new C.epZ(o,m),d),o.tH(D.alx,n,new C.eq_(o,m),d)],q))
p.push(A.b5)
p.push(o.cp5(A.e5,n,o.gaPB(),d,!0))
p.push(o.tH(A.hz,"Done",new C.eq0(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AK,A.ld,n,n,n)},
byz(d){switch(d.a){case 2:return D.a_c
case 1:case 5:return D.a_e
default:return D.a_d}},
c1e(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dL
default:return A.bg}},
ayI(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gi:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qQ,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eA(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tH(d,e,f,g){return this.ayI(d,e,f,g,!1,!1)},
b2K(d,e,f,g,h){return this.ayI(d,e,f,g,h,!1)},
cp5(d,e,f,g,h){return this.ayI(d,e,f,g,!1,h)},
bLa(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mO],m)
w=B.I(e?A.aK:A.pg,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cw,18)],x.V)
u=p.a1S(A.eA,"Back",p.gbEG(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d9,B.E(B.A(B.a([new B.dq(1,A.cl,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tj,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.k8()){u=p.a1S(A.r3,"Undo",p.ax.length===0?o:p.gcyA(),e)
A.d.v(r,B.a([u,p.a1S(D.bD6,"Redo",p.ay.length===0?o:p.gckm(),e)],q))}r.push(p.a1S(A.xM,"PDF",new C.ep2(p),e))
r.push(p.a1S(A.hA,"Download as video",new C.ep3(p),e))
if(!p.k8())r.push(B.Bv(o,o,B.X(A.nW,e?A.ad:A.bu,o,o,o,o),new C.ep4(p),A.J,new C.ep5(p),A.af,"More",x.N))
r.push(A.d9)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eA(D.e4H,o,new B.o(o,o,o,B.m(14),o,K.Gi,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazx(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bp6,D.buc,o,o,o)},
cy5(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.ix(A.tO,"Print",new C.etk(w),d),w.ix(A.xM,"Download PDF",new C.etl(w),d),w.ix(A.pQ,"Present",w.gazx(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AJ,G.ahT,v,v,v)},
a1S(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dn
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c8)},
c0r(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.eqk(r,d),t),t.k("ak.E"))
t.push(new B.C(Y.ahy,new B.fi(new C.eql(r),q),q))
A.d.v(t,w?B.a([new B.C(R.vh,r.ag7(A.le,"Ending celebration",r.gcaI(),d),q),new B.C(R.vh,r.ag7(A.FY,"Logo ring & frame",r.gcbo(),d),q)],x.p):A.h9)
A.d.v(t,w?B.a([new B.C(R.vh,r.ag7(A.na,"Look and feel",r.gcbp(),d),q),new B.C(R.vh,r.ag7(A.oH,"Edit this slide's text",r.gcbW(),d),q)],x.p):A.h9)
t.push(new B.C(R.vh,B.hp(B.aE(q,B.p(q,D.eGP,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.l8.j(0.4),A.J,10)],x.V),D.anw,A.n),q,34,q,q,A.fU,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eqm(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.buF,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cmP(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AJ,q,q,q,q)},
cmP(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d3q[v]
u.a=null
s=u.a=t.b
w.push(e.lB(e.cov(s),t.a,new C.erJ(u,e),a3,D.aMd.t(0,s)))}w.push(e.ix(A.kL,"Notes Slide",new C.erK(e),a3))
w.push(e.lB(A.FX,"Quiz",new C.erL(e),a3,!0))
w.push(e.lB(L.FA,"Worksheet",new C.erW(e),a3,!0))
w.push(e.lB(V.G_,"Flashcard",new C.es6(e),a3,!0))
w.push(e.lB(A.Nf,"Lab Report",new C.esh(e),a3,!0))
w.push(e.lB(A.xS,"Rubric",new C.eso(e),a3,!0))
w.push(e.lB(A.oB,"Minutes",new C.esp(e),a3,!0))
w.push(e.lB(A.pO,"Syllabus",new C.esq(e),a3,!0))
w.push(e.lB(A.Nj,"Timeline",new C.esr(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d4D[v]
w.push(e.lB(r.b,r.c,new C.ess(e,r),a3,!D.aMj.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ix(A.y8,a0,e.gaLk(),a3),e.ix(A.tL,"Picture",new C.erM(e),a3),e.ix(A.y1,"Bio link",new C.erN(e),a3),e.ix(A.a_J,"Table",new C.erO(e),a3),e.ix(A.Ni,"Sticky",new C.erP(e),a3),e.ix(A.tK,"Divider",new C.erQ(e),a3),e.ix(A.Bx,"Header",new C.erR(e),a3),e.lB(A3.vq,"Rectangle",new C.erS(e),a3,!0),e.lB(A.qV,"Circle",new C.erT(e),a3,!0),e.lB(A.a_4,"Triangle",new C.erU(e),a3,!0),e.lB(A.iU,"Arrow",new C.erV(e),a3,!0),e.lB(D.bBB,"Parallelogram",new C.erX(e),a3,!0),e.lB(D.bE3,"Hexagon",new C.erY(e),a3,!0),e.lB(A.tK,"Line",new C.erZ(e),a3,!0),e.lB(A.xM,"PDF",new C.es_(e),a3,!0),e.lB(O.a_S,"Signature",new C.es0(e),a3,!0),e.ix(A2.Bn,"Quote",new C.es1(e),a3),e.ix(D.ZH,a1,new C.es2(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=x.p
t=B.A(B.a([e.aM9("Wide 16:9",D.Cj,a3),e.aM9("Short 9:16",D.o4,a3),new B.C(A.fx,B.mE(D.bGb,d,D.fgW,d,new C.es3(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bEV("This slide",!e.Q,a3,new C.es4(e)),A.bp,e.aOk("All slides",e.Q,a3,new C.es5(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bEW()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1F,new C.es7(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d5y[v]
j=B.b0(k)
i=new B.aA(k===4294967295?A.dn:A.b2,1.5,A.q,-1)
l.push(new B.C(A.fx,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.es8(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bCL()
g=B.U(h).k("K<1,C>")
h=B.B(new B.K(h,new C.es9(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.O,q,A.an,p,A.O,o,A.at,n,A.O,m,A.at,l,A.O,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.an,e.bYj(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jJ()
w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=new C.erI(e)
t=new C.est(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.PT,f.dy,new C.esa(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.PT,q,new C.esb(e,u),A.bk))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ix(A.kL,w,new C.esc(e),a3),e.ix(A.tO,"Print deck",new C.esd(e),a3),e.lB(D.ajq,"Export JSON",new C.ese(e),a3,!0),e.ix(A.fL,"Duplicate Slide",e.gaQq(),a3),e.ix(A.e5,a2,e.gaPC(),a3),e.csv(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jJ()
w=x.p
u=B.a([e.ix(D.ZH,a1,new C.esf(e),a3),e.ix(A.fL,"Duplicate",e.gaQq(),a3),e.ix(A.e5,a2,e.gaPC(),a3),e.ix(A.pQ,"Present",e.gazx(),a3),e.ix(A.Bv,a0,e.gaLk(),a3),e.ix(A.Bq,"Fit Text",new C.esg(e),a3),e.ix(A.xM,"Download PDF",new C.esi(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ix(A.kN,"Transfer",new C.esj(e),a3))
if(f!=null){w=B.a([A.ab,e.ix(G.Mo,"Bold",new C.esk(e,f),a3),e.ix(G.Zz,"Italic",new C.esl(e,f),a3),e.ix(G.aj1,"Underline",new C.esm(e,f),a3),e.ix(Ae.Mp,"Bullets",new C.esn(e,f),a3),e.bNu(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLe(a3))
w.push(e.ix(D.bAf,"Delete",e.gaPB(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aM9(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o4
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7j,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d9,D.bFn],v))
return new B.C(A.fx,B.jI(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.eo7(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
csv(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cp,A.q,1)
u=B.m(8)
t=B.X(A.Fy,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amw,q,q,q,new C.esQ(r,p),q,q,q,q,q,A.c8)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amn,q,q,q,new C.esR(r,p),q,q,q,q,q,A.c8)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fe,A.mj,q,q,q)},
cov(d){switch(d.a){case 6:return V.G_
case 7:return A.FX
case 8:return L.FA
case 4:return A.Bx
default:return A.kL}},
bNu(d,e){var w=null,v=B.I(e?A.b2:A.cp,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amw,w,w,w,new C.epf(this,d),w,w,w,w,w,A.c8),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amn,w,w,w,new C.epg(this,d),w,w,w,w,w,A.c8)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xv,A.mj,w,w,w)},
bYj(d){var w=null
return B.Bv(B.D_(B.X(A5.ZK,d?A.ad:A.bu,w,w,w,16),w,w,D.fmn,w,w,w),w,w,new C.epN(),A.J,this.gbzg(),A.cm,"Slide layout",x.fO)},
lB(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dp:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dw:A.bk,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Np,A.f,w,w,D.DD,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fx,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eA(new B.C(A.h6,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cX,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bu,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
ix(d,e,f,g){return this.lB(d,e,f,g,!1)},
b45(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hH(t,new C.et1(u,s,e,d),s.r.length,A.cm,t,w,new C.et2(e),!1)
s=d?A.aB:A.bM
w=B.a([],x.p)
if(e&&!u.k8())w.push(new B.C(A.cm,B.Hj(E.amJ,new C.et3(u),B.nw(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aMX,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bCV(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o4?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bH(A.b0,v,v,new B.fG(w,B.aE(v,B.cp(new C.eow(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eox(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bCX(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kt(a9.w))===!0,b1=b0&&C.fy8(b3),b2=b0&&b3.b===D.kS&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.k8())v=!b0||a7.c_w(b3)
else v=!1
if(!a7.k8())u=!b0||a7.c_v(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cd:A.bk
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fWD(b3))o=a8
else if(p&&!a7.k8())o=a7.gc7e()
else o=a7.k8()?a8:new C.eok(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c3:A.jx
i=w&&C.fWD(b3)&&a7.zB()?new C.eol(a7,b3):a8
h=v&&b3.b===D.cQ?new C.eom(a7,b3):a8
g=u?new C.eon(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.kS?A.K:a8
if(b1){a1=a7.k8()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bT,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zB()
a3=b3.b===D.cQ
a4=a3?a7.W0(b3):a8
a5=a3?a7.aso(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bT,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eoo(a7,b3):a8
a3=v&&a3?new C.eop(a7,b3):a8
a6=C.b_X(q,a4,a1,b3,a5,a2,a3,new C.eoq(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bIb,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eor(a7,b3,b4,b5),a8,a8,new C.eos(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.k8()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bIQ,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbVW(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.k8()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bKn,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eot(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bT,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fuX,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kJ,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eou(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eD(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOk(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bk:A.bF,A.q,1)
if(e)t=A.bk
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d9,B.p(r,D.Np,A.f,r,r,D.DD,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bEV(d,e,f,g){return this.aOk(d,e,f,g,!1)},
c70(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b3,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aB:A.aP
t=f?A.ww:l
if(f)s=new B.bP(new B.aA(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rn,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bu,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b5,m.b_b(e,new C.eqo(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.an,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eqp(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aRH(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jJ()
if(a2==null)return A.bH
w=new C.ept(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b5,a0.b_b(a3,a0.gbJr())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fhq,B.E(B.kW(a1,a1,a1,u,0.05,new C.epu(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.ftq,B.E(B.kW(a1,a1,a1,t,0.05,new C.epv(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fbp,B.E(B.kW(a1,a1,a1,96,10,new C.epw(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lo
if(l||n===D.kS||n===D.Rb)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fn3,B.E(B.kW(a1,a1,a1,s,0,new C.epx(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fuG,B.E(B.kW(a1,a1,a1,r,0,new C.epy(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BM[j]
i.a=null
g=h.a
i.a=g
k.push(B.jI(a1,a1,a1,new B.x(h.b,a1,A.qe,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.epz(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bY(A.bz,k,A.br,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BH[j]
f.a=null
g=e.a
f.a=g
h.push(B.jI(a1,a1,a1,new B.x(e.b,a1,A.qe,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.epA(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.an,k,A.O,i,A.an,B.bY(A.bz,h,A.br,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.epB(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bY(A.bz,l,A.br,6,6),A.ac,B.h7y(new C.epC(w,a2),D.clj,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.epD(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bY(A.bz,m,A.br,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bK9,D.fp0,new C.epE(a0,a5),B.bk(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.ww:a1
if(a4)o=new B.bP(new B.aA(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rn,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EY,a1,a1,a1)},
bNL(d){return this.aRH(d,!1,!1,null)},
c6g(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.epH(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f1u,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.E(B.v(B.a([w,A.bB,A.cX,r.byB(D.cOs,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dT(B.hp(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eA(D.eM6,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.ek,8)],p),D.anB,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b5Q,D.b6d],v):B.a([A.c,A.ke],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cw,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aL3(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eng(this,g,d,e,f),null)},
afv(d,e){return this.ciI(d,e)},
ciI(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b3,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.erl(d,q),p,null,!0,!0,x.N),$async$afv)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afv,v)},
Po(d){var w=d.bS()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.bz(w)}}
C.aem.prototype={}
C.axL.prototype={
U(){return new C.bbq(null,null)}}
C.bbq.prototype={
gcuI(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.bz(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pC,u,1,u,v)
w.fa(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bnB,u,1,u,v)
w.cq(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bs2()},
IC(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cs.aw(0,new B.hN(w,v,A.cs).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.bt1,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cZR(this),v),v),v,v,v)}}
C.bbE.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.C(D.bti,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.C(D.bsu,B.v(B.a([B.p(w,D.bIW,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fr4,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f2E,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bmF,B.A(B.a([B.E(B.bK(!1,D.ffG,w,w,!0,w,w,new C.d_c(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n4,w,A.o8,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fkV,w,w,!0,w,w,new C.d_d(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n4,w,A.o8,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.UO,new B.o(A.aB,w,u,v,D.cOM,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jj.prototype={
U(){return new C.bbp()}}
C.bbp.prototype={
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
return B.dT(B.dc(B.aE(o,B.ve(B.dh(o,B.A(B.a([r,A.av,new B.dq(1,A.cl,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.nS,o,o,1/0),A.cs,A.jb,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cZM(p,d),new C.cZN(p),new C.cZO(p),new C.cZP(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.P2.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eB,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nq,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.ZQ.prototype={
U(){return new C.aDi(D.dd,null,null)}}
C.aDi.prototype={
gYd(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bnb,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b4v(d){if(!this.a.c.ay)return
this.x=d
this.gYd().it(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.auF(D.eSs)
C.hYJ()
v.QN()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYd().q()
v=w.z
if(v!=null)v.a7(0)
C.auF(D.eSt)
C.hYM()
w.bua()},
cxt(){B.jf()
this.m(new C.eu0())
var w=this.c.I(x.q).f
w.a3Z()
if($.bja)w.R(D.ePk)},
QN(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h5J(u,w),1,120)),new C.etR(v))},
cx8(){var w,v=this
v.m(new C.eu_(v))
if(v.r)v.QN()
else{w=v.f
if(w!=null)w.a7(0)}},
gaTy(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cri(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.etS(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.la,new C.etT(w))},
avd(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.etN(u))
u.QN()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTy()){u.cri()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.etO(u,A.o.F(w+1,s)))
u.b4v(w)
u.QN()}},
chm(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.etP(v))
v.QN()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.etQ(v,w,t))
v.b4v(w)
v.QN()}},
csH(d){var w,v=this,u=v.e
if(u===D.ci){u=v.d
u===$&&B.c()
return new B.nb(d,new B.cx(u,x.ac))}w=v.csI(u)
u=v.d
u===$&&B.c()
return B.qa(new B.nb(d,new B.cx(u,x.ac)),w,new C.etY(),A.bc,A.bc,new C.etZ(v))},
csI(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bnx
case 16:return A.kg
case 18:return A.n1
default:return A.n2}},
csG(d,e,f){var w,v,u,t=null,s=B.cJ(A.cs,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cY(s,!1,e,t)
case 2:case 17:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.uf,A.J,w),w.k("bf<bI.T>")),t,!0)
case 3:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.Rr,A.J,w),w.k("bf<bI.T>")),t,!0)
case 4:case 21:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.ig,A.J,w),w.k("bf<bI.T>")),t,!0)
case 5:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.ue,A.J,w),w.k("bf<bI.T>")),t,!0)
case 6:case 16:w=x.b
return B.ij(A.A,new B.cY(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bI.T>")))
case 7:w=x.b
return B.ij(A.A,new B.cY(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bI.T>")))
case 8:return B.c6(s,new C.etU(s),e)
case 9:return B.c6(s,new C.etV(s),e)
case 10:return B.c6(s,new C.etW(s),e)
case 11:return B.c6(s,new C.etX(s),e)
case 12:w=x.b
return new B.cY(s,!1,B.ij(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bI.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jt(B.jl(e,new B.bf(s,new B.bo(A.uf,A.J,v),v.k("bf<bI.T>")),t,!0),A.r,new C.bq9(w,t))
case 15:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.Rr,A.J,w),w.k("bf<bI.T>")),t,!0)
case 19:w=B.dm()
w.mE((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jD(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eD(A.A,(1-s.gp(0))*0.2,new B.cY(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jt(new C.anj(B.c6(n.gYd(),new C.eu1(n,v,w),m),m),A.r,m)}else{t=B.rq(new C.Ih(w,!0,!1,m))
l=B.b0(w.e)
u=n.csH(B.ek(B.jt(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h5J(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.od,m,m,m),A.bp,D.bLb],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.MZ(new C.Ea(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o4?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jt(B.uf(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bja){r=B.Hj(A.kP,new C.eu2(d),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bn(!0,B.A(B.a([r,A.ab,B.Hj(B.X(n.r?Ak.y_:A.iV,m,m,m,m,m),n.gcx7(),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ho,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bn(!0,B.aE(A.c3,B.p(A.l3,$.bja?A.bH:s,A.f,m,m,m,m,64,m,m,D.boi,m,m,150),A.y,!1,m,n.gcxs(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eu3(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jq.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.C(E.ahk,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZK,w,w,w,w,w,w,w,w)}}
C.bq9.prototype={
iZ(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jG(d){return d.b!==this.b}}
C.bgh.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aWx
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dh(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vG,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgg.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dhD.h(0,p)
if(o==null)o=D.d4M
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.alK:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eo,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aIZ.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aL0.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.bvS.prototype={}
C.aL1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.b0_.prototype={}
C.Vl.prototype={
U(){return new C.aDg()},
bf_(d){return this.e.$1(d)}}
C.aDg.prototype={
gb2Q(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9F(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb2Q()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaN_(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb2Q()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb44(){return A.d.cI(this.ga9F(),0,new C.etx())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Qo()},
Qo(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b0A(s.c,s.f),$async$Qo)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ett(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qo,v)},
IE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9F()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fBk(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p_(o,q.c,q.f),$async$IE)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.etw(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).c8(q),$async$IE)
case 4:q=t.a
w=5
return B.b(B.oZ(q.c,q.f),$async$IE)
case 5:w=6
return B.b(t.Qo(),$async$IE)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
QL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hv(o,D.dUS,!0,"NgmySlidesTransferScan",x.N),$async$QL)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.etu(t))
w=4
return B.b(C.agv(s),$async$QL)
case 4:r=e
t.m(new C.etv(t))
o=J.a5(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eOd)
w=1
break}w=5
return B.b(t.a.bf_(r),$async$QL)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QL,v)},
ID(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ID=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9F()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p_(s,r.c,r.f),$async$ID)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fBz(null,A.d.gL(n),s,t.a.f)}else q=C.fBz(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.G2(q,"ngmy_slides_"+p,!1),$async$ID)
case 4:o=e
s=t.a
w=5
return B.b(B.oZ(s.c,s.f),$async$ID)
case 5:w=6
return B.b(t.Qo(),$async$ID)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ID,v)},
a22(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a22=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ety(t))
w=3
return B.b(C.bBb(),$async$a22)
case 3:s=e
t.m(new C.etz(t))
if(s==null||J.cl(s)){w=1
break}w=4
return B.b(t.a.bf_(s),$async$a22)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a5(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a22,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.db:A.bM,k=o.ga9F().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bS(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cA,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.etC(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zf],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.X(A.pJ,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bLH,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eB,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bxe],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aE(A.c3,D.eM8,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcc7(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0m,A.n),n,n,n,n,E.Yd,n,n,1/0),A.e1,o.awp(m,"What to transfer"),A.ac,B.A(B.a([B.E(o.aVM(A.pQ,m,new C.etD(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aVM(D.bBt,m,new C.etE(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awp(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bV,n,n,n))}else A.d.v(v,new B.K(u,new C.etF(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mB)
w.push(o.awp(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.E(o.ap9(A.aS,k,!0,A.jj,m,o.r,o.gc6k(),"Scan on another device","Show QR"),1),A.av,B.E(o.aL4(A.jO,!0,A.iW,m,o.gco5(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.E(o.bx5(A.aV,k,A.hA,m,o.r,o.gc6h(),"Download .json","Backup file"),1),A.av,B.E(o.aL4(A.aH,!0,Ax.ya,m,o.gczQ(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bk.j(0.28),A.q,1)
s=B.X(A.lg,A.bk.j(0.9),n,n,n,18)
r=o.gaN_()
q=o.gb44()
p=o.gb44()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.A(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bu,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bn(!0,B.v(B.a([new B.C(Ag.M_,i,n),B.E(B.cB(w,n,D.brE,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.V6,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeF(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i44(s,t.d,t.e),$async$aeF)
case 2:return B.h(null,v)}})
return B.i($async$aeF,v)},
awp(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aVM(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bk
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cw,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eA(new B.C(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bHB(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bLS,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qV
if(p)r=A.bk
else r=e?A.b2:A.dn
return new B.C(A.cH,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ets(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
ap9(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qT,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amh,A.f,s,s,D.aZw,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eA(new B.C(E.XU,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aL4(d,e,f,g,h,i,j){return this.ap9(d,e,!1,f,g,!1,h,i,j)},
bx5(d,e,f,g,h,i,j,k){return this.ap9(d,e,!1,f,g,h,i,j,k)}}
C.Vm.prototype={
U(){return new C.bj9()}}
C.bj9.prototype={
a_(){this.a1()
this.adw()},
adw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fBz(null,A.d.gL(m),k,r.a.f):C.fBz(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kt(A.d.gL(n).w))C.fBk(A.d.gL(r.a.d),D.d2N)
n=r.a
m=n.c
n=C.i12(n.d)
w=7
return B.b(C.fBy(p,C.i17(r.a.d),n,m,q),$async$adw)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.etG(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.etH(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adw,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.db:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.etI())
v=B.aH(j,j,j,j,B.X(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.etJ(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zf],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.ds,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0m,A.n),j,j,j,j,E.Yd,j,j,1/0)
q=B.m(24)
s=B.I(A.aS.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6H,A.L,j,j))
else if(k.d==null)r.push(D.e4g)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cw,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fg8,A.an,B.aE(j,B.p(j,B.A(B.a([D.bNp,A.av,B.d(m,j,j,j,j,j,j,D.f31,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bRX,A.n),j,j,j,j,A0.ah6,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.etK(k,d),j,j,j,j,j,j,!1,A.a8),A.O,D.fkr,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pF(j,j,!1,l,j,!0,!0,j,!1,D.bjj),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hp,A.L,j,j))
return B.c8(j,h,B.bn(!0,B.v(B.a([new B.C(Ag.M_,v,j),B.E(B.cd(B.v(B.a([t,A.aQ,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bTS,A.n),j,j,j,j,A.ty,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahp,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDd.prototype={
U(){return new C.aDe(new B.ar(A.as,$.aw()),B.kk(!0,null,!0,!0,null,null,!1))}}
C.aDe.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.ena(w))
$.aU.x1$.push(new C.enb(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYn(){var w,v=this.c
v.toString
w=C.yj(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bk.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.ud,36),D.aaa],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bIZ,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fdn,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aZX,k,k,k,k,A.xu,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge6()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aW(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aK
m=new B.aA(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bi,B.dh(A.A,new B.x(p,k,D.eXJ,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bP(m,m,m,m),new B.bq(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Is)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bQ8,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u6(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.B_(5,k),new C.bto()],x.aS),k,k,A.aOa,k,5,k,1,k,k,!1,"\u2022",k,new C.en6(l),k,new C.en7(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.lY,k,k,k,k),0),0,0,0)],a1)
d=C.yj(w.a.a.toUpperCase())==null?k:l.gc6l()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cV(Ad.JM,B.p(k,B.bw(e,B.v(B.a([a0,new B.C(D.bs8,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fbO,A.bx,new B.a7(1/0,50,B.bJ(D.frV,d,B.bk(A.bk,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.an,B.bK(!1,A.nr,k,k,!0,k,k,new C.en8(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bto.prototype={
om(d,e){var w=e.a.toUpperCase()
return e.cG_(B.h8(A.bv,w.length),w)}}
C.aqa.prototype={
U(){return new C.aDh(B.yT(A.Lf,A.ny,A.tX))}}
C.aDh.prototype={
q(){this.d.q()
this.a2()},
aYm(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iM(w,d)},
a9z(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fK5(s),$async$a9z)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYm("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9z,v)},
c6j(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i15(w[u])
if(t!=null){this.aYm(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vD,s,s,s,t.gbLJ(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eG(B.a([r,B.aH(s,s,s,s,B.X(q?A.qZ:Al.MW,s,s,s,s,s),s,s,s,new C.etM(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.ft8,s,s,s,1,s,!0)
r=B.yS(t.d,A.bQ,t.gc6i())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bk,A.q,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b_,A.r,B.a([r,w,B.ao(32,B.p(s,D.fhb,A.f,s,s,new B.o(v,s,B.I(A.bk.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.je,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.btA.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bH9,A.f,w,w,D.aZG,w,56,w,w,w,w,w,56),A.aQ,D.fsP,A.an,new B.kc(this.c,new C.f45(),w,w,x.cI),A.aQ,new B.kc(this.d,new C.f46(),w,w,x.cl),A.ac,D.fsM],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.JM,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.Yk,D.bsL,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a72.prototype={
U(){return new C.biT(A.bw)},
gdd(){return this.c}}
C.biT.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Zo()
w.d=B.du(A.fT,new C.ebG(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
Zo(){return this.ckt()},
ckt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ebE(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cda(p.c),$async$Zo)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.m(new C.ebF(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Zo,v)},
bNC(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bY
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.A(B.a([B.X(A.Fy,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bNC(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ag7,A.ix,r,r,1/0)}}
C.a7V.prototype={
n5(){var w,v,u,t=this
t.wT()
w=t.cx
v=t.c
w.boH(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pM(B.F(["/S",D.e7W,"/URI",new B.rn(B.VU(w.as),A.ug,!0)],x.N,u),u))}}
C.a7W.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b1D.prototype={
bw9(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e6e],x.di)
this.w!==$&&B.aP()
this.w=w},
gcJg(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jK(w,new C.cfm(),B.a3(w).k("jK<co.E,H>")).fo(0,new C.cfn())},
aBP(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tj(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j9(d.a,d.b))
s.n(0,"/Border",B.tj(N.ao_))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcJg()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pM(w,x.Y))}}
C.cfo.prototype={}
C.a28.prototype={}
C.ahm.prototype={}
C.aQ1.prototype={
fX(d){var w,v,u,t,s,r,q=this,p=null
q.lc(d)
q.Ly(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bem(w)
u=x.N
t=x.Y
s=new C.cfo(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bw9(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pM(B.F(["/Type",D.e7U],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7V(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.avD.prototype={}
C.aRw.prototype={
fX(d){var w,v,u,t,s=this
s.lc(d)
w=s.b
if(w!=null){v=B.dm()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.i1()
t=s.a
t.toString
u.KH(t)
u.S0(0)
u.oH(0,v)
w.fX(d)
u.n8(0)}}}
var z=a.updateTypes(["ay<~>()","~(lD)","R(hZ)","~()","R(eI)","R(of)","R(lD)","~(hZ)","R(eI,eI)","Jq(Y)","R(nG)","R(la)","ay<R>()","H(H,hZ)","a4<n,@>(hZ)","ai<zb>()","n(nG)","R(a7j)","n(lD)","n(vL)","R(Ej)","H(hZ,hZ)","n(eI)","r(eI)","cL(eI)","r(hw)","~(hw)","eI(uw,N,N,N,N,H{fx:n,key:n,rotation:N})","eI(n,N,H)","H(of,of)","R(zb)","R(n,ai<zb>)","a4<n,@>(of)","nG()","XX(Y)","eI(n,N,N,N,N,N{align:pT,anim:hw,bullets:R,color:H?,delay:H,fx:n,key:n,style:He,weight:qf})","a09(Y)","eI(n,N,N,N,N{anim:hw,delay:H,fx:n,key:n})","ay<~>(of)","R(mn)","XV(Y)","a_I(Y)","a_H(Y)","OT(Y)","Z5(Y)","eI(uw,N,N,N,N,H,n,n{anim:hw,delay:H,rotation:N,stroke:H,strokeWidth:N})","eI(n,N,N,N,N,N,n,n,H)","eI(N,N,n,H{size:N})","r(rb,N,N)","la()","of(a4<@,@>)","~(um)","Ej()","fe(eI)","r(iW)","YE(Y)","~(Ea)","YZ(Y)","H(eI,eI)","eI(eI)","a4<n,@>(eI)","eI(a4<@,@>)","lD(lD)","a4<n,@>(lD)","lD(a4<@,@>)","R(jB)","jB()","n(hZ)","~(ai<of>)","S(ai<hZ>)","S(hZ)","ai<hZ>(n?)","abU(Y,H)","~(R(eI,eI))","acx(Y)","aec(Y,H)","w(lD,R)","V6(Y)","acA(Y)","V9(Y)","~(mr)","hZ(hZ)","N(eI)","a_d(Y)","ZQ(Y)","hZ()","ai<EF>()","ay<~>(ai<hZ>)","r(bv<H,hZ>)","C(jB)","C(Ej)","ay<~>(hw,~())","r(ai<hw>,hw?,~(hw),w)","R(m1)","ai<jk<mr>>(Y)","jk<mr>(mr)","hZ(a4<@,@>)","Vl(Y)","eI(n,N,N,N,N,N,H{align:pT,style:He,weight:qf})","Vm(Y)","r(hZ)","~(lV)","Ih(Y,lD,r?)","H(a7W)","ay<ai<a4<n,@>>?>()","n(n)","ay<z9>({paper:n?,photo:dD?,request:n,template!ld})","ay<a7b>({doc!z9,history:ai<+(n,n)>,instruction!n,photo:dD?,template!ld})","acu(Y)"])
C.cDa.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:78}
C.cDb.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:76}
C.cDc.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajf(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mk(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:76}
C.cDd.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bNi.prototype={
$1(d){return J.eY(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fon.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iG(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iG(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iG(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iG(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bXU.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:26}
C.bXV.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bXX.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fE9.prototype={
$1(d){return new C.a09(this.a,this.b,C.i1Y(),null)},
$S:z+36}
C.f2y.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f2C.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f2D.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f2E.prototype={
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
C.f2z.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f2A.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f2B.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f2t.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hD,w,w,w)
return B.ej(B.a([B.bK(!1,D.ffC,w,w,!0,w,w,new C.f2r(d),w,w),B.bK(!1,D.feI,w,w,!0,w,w,new C.f2s(d),w,w)],x.p),w,w,D.WV,v,w,w,w,w,D.ftp,w)},
$S:19}
C.f2r.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f2s.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f2u.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f2v.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f2I.prototype={
$0(){var w=this.a
return w.m(new C.f2H(w,this.b))},
$S:0}
C.f2H.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f2x.prototype={
$0(){var w=this.a
return w.m(new C.f2w(w,this.b,this.c))},
$S:0}
C.f2w.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.f2F.prototype={
$0(){return this.a.a0v(this.b)},
$S:0}
C.f2G.prototype={
$0(){return this.a.OD(0,this.b)},
$S:0}
C.f2L.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f2M.prototype={
$0(){var w=this.a
return w.m(new C.f2K(w,this.b))},
$S:0}
C.f2K.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f2J(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f2J.prototype={
$1(d){return d.a},
$S:z+67}
C.f9L.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h2Y(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.of(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f9M.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fqU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcw()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fqS.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fqT.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fDE.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fo3.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fEv.prototype={
$1(d){return new C.XX(this.a,null)},
$S:z+34}
C.cEw.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cEy.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cEB.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEA())},
$S:11}
C.cEA.prototype={
$0(){},
$S:0}
C.cED.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a17(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bd(s,new C.cEz(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agE(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:282}
C.cEz.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEE.prototype={
$1(d){},
$S:30}
C.cEx.prototype={
$1(d){return new C.XV(this.b,this.a.gcu3(),null)},
$S:z+40}
C.cEF.prototype={
$1(d){return D.fLn},
$S:z+43}
C.cEs.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WB,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bsx,B.v(B.a([B.p(w,D.bGc,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fdM,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f23,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.C(A.pF,B.A(B.a([B.E(B.dW(D.fkt,new C.cEq(d),B.df(w,w,w,w,w,w,w,w,w,E.mW,w,w,A.ch,w,new B.b7(B.m(14),A.Y),D.aWX,w,w,w,w)),1),A.av,B.E(B.bJ(D.fqf,new C.cEr(d),B.bk(A.bI,w,w,w,w,w,A.ch,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wz,new B.o(D.abU,w,u,v,D.cT9,w,A.n),w,w,w,K.Yk,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cEq.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cEr.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cEt.prototype={
$0(){return J.no(this.a.d,new C.cEp(this.b))},
$S:0}
C.cEp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEo.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WB,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bL4,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anw,A.n),t,44,t,t,t,t,t,44),A.bf,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aPP,t,t,t),A.bB,D.fqc],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dcW[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awx(u[1],u[2],u[3],new C.cEm(v,d),!1,t))}q.push(A.an)
q.push(D.bmI)
q.push(A.an)
q.push(new C.awx(A.e5,"Delete book","Remove it from this device",new C.cEn(d),!0,t))
return B.bn(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abU,t,r,s,t,t,A.n),t,t,t,A.tt,Ao.LL,t,t,t),!0,!1,A.af,!0,!0)},
$S:28}
C.cEm.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cEn.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cEv.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aFJ,12)],x.V)
return B.dT(B.eD(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f3(A.A,F.ana(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cEu.prototype={
$0(){return this.a.c14()},
$S:0}
C.cEl.prototype={
$0(){return this.a.aWV(0,this.b)},
$S:0}
C.cEk.prototype={
$0(){return this.a.CP(this.b)},
$S:0}
C.cEj.prototype={
$0(){return this.a.CP(this.b)},
$S:0}
C.cEG.prototype={
$2(d,e){var w=this.a
return w.bAC(J.q(w.d,e))},
$S:40}
C.cDN.prototype={
$0(){var w=this.a
if(w.c!=null)w.As()},
$S:0}
C.cDM.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aZP("Page "+(v.length+1),"",""))},
$S:0}
C.cDP.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cDX.prototype={
$0(){},
$S:0}
C.cDY.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:8}
C.cDQ.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c)},
$S:0}
C.cDO.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDS.prototype={
$0(){return this.a.PW(this.b)},
$S:0}
C.cDT.prototype={
$0(){return this.a.PW(this.b)},
$S:0}
C.cDU.prototype={
$0(){var w=this.a
w.m(new C.cDR(this.b))
w.DF()},
$S:0}
C.cDR.prototype={
$0(){return this.a.c=""},
$S:0}
C.cDW.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cDV(w,d))
w.DF()},
$S:z+51}
C.cDV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cE2.prototype={
$2(d,e){if(d)this.a.As()},
$S:124}
C.cDZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.As(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eQJ)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cE_.prototype={
$0(){return this.a.aVT(this.b,-1)},
$S:0}
C.cE0.prototype={
$0(){return this.a.aVT(this.b,1)},
$S:0}
C.cE1.prototype={
$0(){return this.a.c2j(0,this.b)},
$S:0}
C.fvq.prototype={
$1(d){return C.hcV()},
$S:44}
C.fvr.prototype={
$1(d){return null},
$S:30}
C.fe9.prototype={
$1(d){return null},
$S:30}
C.fwp.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:300}
C.fwo.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:235}
C.fwv.prototype={
$1(d){var w=this.a
return C.fWv(d)===w||C.hhp(d)===w},
$S:z+4}
C.fdc.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:73}
C.c7t.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvo.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fvp.prototype={
$1(d){return C.fy8(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fqf.prototype={
$1(d){var w=null
return B.bn(!0,new B.C(E.xt,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fl3,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.G9,D.ffj,new C.fqd(d),B.bk(A.bY,w,w,w,A.w,w,A.ch,w,w,w,w,w)),A.S,B.ex(A.vC,D.fmh,new C.fqe(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ch,w,w,Q.wx,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fqd.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fqe.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fqg.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,D.fbG,w,w,!0,w,w,new C.fqb(d),w,w),B.bJ(D.fss,new C.fqc(d),w)],x.p),w,w,w,D.fui,w,w,w,w,D.fbA,w)},
$S:19}
C.fqb.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fqc.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e6u.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e6s.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e6t.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e6v.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e6w.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fwu.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:73}
C.fwq.prototype={
$2$h$w(d,e){var w=null
return new B.bH(A.a3,w,w,B.Du(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fws.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f3e,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:184}
C.fwt.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dT(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fwr.prototype={
$2$female$size(d,e){var w=null,v=d?D.adJ:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ac7,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fHX.prototype={
$1(d){return new C.acu(this.a,this.b,null)},
$S:z+108}
C.dWm.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bjO:A.KK,q=B.I(D.j7.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amg,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j7.j(0.35),A.ek,10)],x.V),D.bUt,A.n),t,t,t,t,A.Lz,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Y9,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j7,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f2w,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.id(!0,t,e,A.y,D.aNd,new C.dWl(w,this.c),v,D.ah1,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m2,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:110}
C.dWl.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abU(w,new C.dWk(this.b,w),null)},
$S:z+72}
C.dWk.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fqj.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fqk.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xt,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fom,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.G9,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fqh(d),B.bk(D.j7,w,w,w,A.c,w,A.ch,w,w,w,w,w)),A.S,B.ex(A.nY,D.Tq,new C.fqi(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ch,w,w,Q.wx,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fqh.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fqi.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fqn.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fqo.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xt,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fcE,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.G9,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fql(d),B.bk(D.j7,w,w,w,A.c,w,A.ch,w,w,w,w,w)),A.S,B.ex(A.nY,D.Tq,new C.fqm(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ch,w,w,Q.wx,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fql.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fqm.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fqr.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fqs.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xt,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fiU,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.G9,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fqp(d),B.bk(D.j7,w,w,w,A.c,w,A.ch,w,w,w,w,w)),A.S,B.ex(A.nY,D.Tq,new C.fqq(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ch,w,w,Q.wx,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fqp.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fqq.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJp.prototype={
$1(d){return D.fP9},
$S:z+74}
C.ebJ.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bbF:A.KK,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bNl,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.ek,10)],x.V),D.anB,A.n),v,v,v,v,A.Lz,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Y9,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.KH,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f00,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.id(!0,v,e,A.y,D.aNd,new C.ebI(this.b),19,D.ah1,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m2,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.ebI.prototype={
$2(d,e){var w=D.Q6[e]
return new C.aec(w,new C.ebH(this.a,w),null)},
$S:z+75}
C.ebH.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fyc.prototype={
$0(){return B.fVu(C.hQw(this.a))},
$S:281}
C.fyb.prototype={
$0(){var w=C.fWN(this.a)
return"data:image/png;base64,"+A.cS.gcv().aJ(w)},
$S:22}
C.fbi.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ja(d,e),new B.ja(w,e+v),new B.ja(d+f*14,e),new B.ja(w,e-v)],x.J)
B.a14(this.a,C.fy(4291404327),v)},
$S:664}
C.fJA.prototype={
$1(d){return new C.V6(this.a,null)},
$S:z+77}
C.ef0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ef_())},
$S:29}
C.ef_.prototype={
$0(){},
$S:0}
C.ef1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eeZ(w,d))},
$S:1673}
C.eeZ.prototype={
$0(){return this.a.x=J.eR(A.dD.gaM(this.b))},
$S:0}
C.ef2.prototype={
$1(d){},
$S:30}
C.eeD.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eez.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eeK.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eeL.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eh4)},
$S:0}
C.eeM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eeF.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bO(0,A.c4)},
$S:0}
C.eeG.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eeH.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.eeI.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eeJ.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m5(v,A.dV,A.i9)}},
$S:8}
C.eeE.prototype={
$0(){var w=this.a,v=w.z,u=C.fyQ(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cF7(C.fyQ(t))},
$S:0}
C.eeB.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eeC.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eeS.prototype={
$0(){return B.a6(this.a,!1).lN()},
$S:0}
C.eeT.prototype={
$0(){var w=this.a
return w.m(new C.eeR(w))},
$S:0}
C.eeR.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eeU.prototype={
$0(){var w=this.a
return w.m(new C.eeQ(w,this.b))},
$S:0}
C.eeQ.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.eeV.prototype={
$1(d){var w=this.a
return w.m(new C.eeP(w))},
$S:9}
C.eeP.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eeW.prototype={
$1(d){var w=this.a
return w.m(new C.eeO(w))},
$S:9}
C.eeO.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eeX.prototype={
$0(){var w=this.a
return w.m(new C.eeN(w,this.b))},
$S:0}
C.eeN.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.eeY.prototype={
$1(d){return this.a.Za()},
$S:2}
C.eeA.prototype={
$0(){return this.a.c5B(this.b)},
$S:0}
C.cba.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:330}
C.cb8.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cb9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxN.prototype={
bjs(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bNh(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cBG($.qM().jt(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mA(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjs(d,e)},
$S:1674}
C.fw4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fw6.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:73}
C.fw5.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.i1(t,t,t,t,B.dn(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qc,A.cc,t,A.eh,A.ca)
v=this.a
w.Bx(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:32}
C.faU.prototype={
$1(d){var w=A.a.fB(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.faV(),B.U(w).k("a2<1>")).gM(0)},
$S:249}
C.faV.prototype={
$1(d){return d.length!==0},
$S:3}
C.faS.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:228}
C.faT.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:228}
C.cbb.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazb()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fWu(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fTp(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcdK(),"\n\n")
d=B.i1(a6,a6,a6,a6,B.dn(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adl(k,q,1.28),j),A.qc,A.cc,a6,A.eh,A.ca)
d.Bx(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fWu(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fTp(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adl(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bi,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qc,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aza(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:365}
C.cbc.prototype={
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
n=o.gazb()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fWu(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fTp(g.length===0?B.a([a6],n):g,l))break}a1=o.adl(i,h,1.28)
a2=new C.cbd(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ir,new B.a7(v,a5,a4.f,a5),A.Ir,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.buQ,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bi,new B.x(l[2+a3],a5,a1,a5,A.qc,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aza(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:154}
C.cbd.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qc,w,w),w)},
$S:1675}
C.fJD.prototype={
$1(d){return new C.V9(this.a,this.b,null)},
$S:z+79}
C.egb.prototype={
$1(d){return d.lV()},
$S:1676}
C.egc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ega(w,d))},
$S:1677}
C.ega.prototype={
$0(){var w=this.b
return this.a.d=w.gfn(w)},
$S:0}
C.efZ.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eg_.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eg5.prototype={
$0(){return B.a6(this.a,!1).eI()},
$S:0}
C.eg6.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.baD(u,v.gawi(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eg3(v),new C.eg4(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.eg3.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:255}
C.eg4.prototype={
$1(d){var w=this.a
w.m(new C.eg0(w,d,this.b,this.c))},
$S:207}
C.eg0.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawi()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eg7.prototype={
$1(d){var w=this.a
return w.m(new C.eg2(w,this.b))},
$S:9}
C.eg2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eg8.prototype={
$1(d){var w=this.a
return w.m(new C.eg1(w,d))},
$S:6}
C.eg1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eg9.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fJT.prototype={
$1(d){return D.fRX},
$S:z+83}
C.ePq.prototype={
$1(d){return this.a.XS()},
$S:8}
C.eOi.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcv().aJ(v)},
$S:0}
C.eOG.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eOQ.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.eO1.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eO2.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eO_.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eO0.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eOz.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eOA(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jt(B.rq(p>0.2?C.fOc(q,B.a4n(p,p,A.x)):q),A.r,u)],x.p)
w=s.bh
if(w>0.02){v=B.a4n(12,12,A.x)
p.push(B.jt(B.dc(B.rq(C.fOc(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b1>0)p.push(B.ek(u,B.b0(r).j(s.b1),!0))
r=s.be
if(r!=null&&s.bL>0){r=B.b0(r).j(s.bL)
w=s.be
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(D.aVf,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(D.aV0,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aO
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aO)],x.O),D.cRP,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d1e,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ek(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cZu,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bea(s,u),A.au))
return new B.an(A.W,u,A.b_,A.r,p,u)},
$S:63}
C.eOA.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.ck,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aVv(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bj
v=o.aR
u=v-1
t=o.bT
s=o.cU?-1:1
return B.dT(B.eb(A.A,B.eD(A.A,l,B.fs(A.A,new B.D2(new B.yz(q,q,n,A.A4),p,q),q,B.vy(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eOM.prototype={
$0(){return this.a.m(new C.eOL(this.b,this.c))},
$S:0}
C.eOL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eON.prototype={
$1(d){return this.a.m(new C.eOK(this.b,d))},
$S:6}
C.eOK.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eOP.prototype={
$0(){return this.a.m(new C.eOO(this.b,this.c))},
$S:0}
C.eOO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eNS.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eNT.prototype={
$1(d){var w=this.a
return w.m(w.gcvs())},
$S:2}
C.eNU.prototype={
$1(d){return this.a.m(new C.eNR())},
$S:2}
C.eNR.prototype={
$0(){},
$S:0}
C.eNV.prototype={
$0(){var w=this.a
return w.m(new C.eNQ(w,this.b))},
$S:0}
C.eNQ.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eNX.prototype={
$2(d,e){return A.av},
$S:36}
C.eNW.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dh(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b6,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.h_,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eNP(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:75}
C.eNP.prototype={
$0(){var w=this.a
return w.m(new C.eNM(w,this.b))},
$S:0}
C.eNM.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eNY.prototype={
$1(d){var w=this.a
return w.m(new C.eNO(w,d))},
$S:9}
C.eNO.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eNZ.prototype={
$1(d){var w=this.a
return w.m(new C.eNN(w,d))},
$S:9}
C.eNN.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.ePf.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:32}
C.ePm.prototype={
$1(d){var w=this.a
return w.m(new C.ePn(w,d))},
$S:27}
C.ePn.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ec(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.ePo.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:263}
C.ePg.prototype={
$0(){var w=this.a
return w.m(new C.ePe(w,this.b))},
$S:0}
C.ePe.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.ePh.prototype={
$0(){var w=this.a
return w.m(new C.ePd(w,this.b))},
$S:0}
C.ePd.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.ePi.prototype={
$0(){var w=this,v=w.a
return v.m(new C.ePc(v,w.b,w.c,w.d))},
$S:0}
C.ePc.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.ePj.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grn(v))},
$S:0}
C.ePk.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.ePl.prototype={
$0(){var w=this.a
return w.m(new C.ePb(w))},
$S:0}
C.ePb.prototype={
$0(){var w=this.a.db
return A.d.fZ(w,0,w.length,0)},
$S:0}
C.eOZ.prototype={
$1(d){return d.a===this.a.dy},
$S:226}
C.eP_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avD[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aW(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awm(new B.n5(new B.bq(n,n,n,n),A.aq,new B.kM(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYS(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eOY(r,v),2,i))}return B.bY(A.bz,h,A.br,7,7)},
$S:171}
C.eOY.prototype={
$0(){var w=this.b
return w.m(new C.eOT(this.a,w))},
$S:0}
C.eOT.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eP0.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:264}
C.eP3.prototype={
$0(){var w=this.a
return w.m(new C.eOX(w))},
$S:0}
C.eOX.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eP4.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eP5.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eP6.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eP7.prototype={
$0(){var w=this.a
return w.m(new C.eOW(w))},
$S:0}
C.eOW.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eP8.prototype={
$0(){var w=this.a
return w.m(new C.eOV(w))},
$S:0}
C.eOV.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eP9.prototype={
$0(){var w=this.b
return w.m(new C.eOU(this.a,w))},
$S:0}
C.eOU.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ePa.prototype={
$1(d){return this.a.fx=d},
$S:264}
C.eP1.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eP2.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eOD.prototype={
$0(){var w=this.a
return w.m(new C.eOC(w))},
$S:0}
C.eOC.prototype={
$0(){var w=this.a
w.p4=null
w.b1y()},
$S:0}
C.eOE.prototype={
$0(){var w=this.a
return w.m(new C.eOB(w,this.b))},
$S:0}
C.eOB.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eOF.prototype={
$0(){var w=this.a
return w.m(w.gcm6())},
$S:0}
C.eOv.prototype={
$0(){var w=this.a
return w.m(new C.eOu(w))},
$S:0}
C.eOu.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eOw.prototype={
$0(){var w=this.a
return w.m(new C.eOt(w))},
$S:0}
C.eOt.prototype={
$0(){var w=this.a
w.aH=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eOx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cZR[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aW(9,9)
m.push(v.awm(new B.n5(new B.bq(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.D2(new B.yz(o,o,v.aVv(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.A4),B.fL(u,A.A,140,o,A.ck,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eOs(v,s),3,n))}return B.bY(A.bz,m,A.br,10,8)},
$S:171}
C.eOs.prototype={
$0(){var w=this.a
return w.m(new C.eOr(w,this.b))},
$S:0}
C.eOr.prototype={
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
C.eO9.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eOa.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eOb.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eOc.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eOd.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eOe.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eOf.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eOg.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.eOh.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eNv.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eNw.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eNx.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eNy.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eNz.prototype={
$0(){var w=this.a
return w.m(new C.eNu(w))},
$S:0}
C.eNu.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eNA.prototype={
$1(d){return this.a.b3=d},
$S:264}
C.eNB.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eO3.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eO4.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eO5.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eO6.prototype={
$1(d){return this.a.be=d},
$S:264}
C.eO7.prototype={
$1(d){return this.a.bL=d},
$S:6}
C.eNF.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eNG.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eNH.prototype={
$1(d){return this.a.bT=d},
$S:6}
C.eNI.prototype={
$1(d){return this.a.c7=d},
$S:6}
C.eNJ.prototype={
$0(){var w=this.a
return w.m(new C.eNE(w))},
$S:0}
C.eNE.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.eNK.prototype={
$0(){var w=this.a
return w.m(new C.eND(w))},
$S:0}
C.eND.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.eNL.prototype={
$0(){var w=this.a
return w.m(new C.eNC(w))},
$S:0}
C.eNC.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eOy.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i4I(v,w.p4)},
$S:0}
C.eOq.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bk5:B.fL(v,A.A,w,w,A.ck,A.bQ,!1,w,!1,w,w)
return C.fwc(d.length===0?"rounded":d,u,e)},
$S:130}
C.eOm.prototype={
$0(){var w=this.a
return w.m(new C.eOl(w))},
$S:0}
C.eOl.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eOn.prototype={
$0(){var w=this.b
return w.m(new C.eOk(this.a,w))},
$S:0}
C.eOk.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eOo.prototype={
$0(){var w=this.b
return w.m(new C.eOj(this.a,w))},
$S:0}
C.eOj.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eOp.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eOJ.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cfE(),n.r))
l.push(new C.Ih(n.csu(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b_,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c3,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eOI(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:223}
C.eOI.prototype={
$1(d){var w=this.a
return w.m(new C.eOH(w,d,this.b,this.c))},
$S:18}
C.eOH.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eOS.prototype={
$0(){var w=this.a
return w.m(new C.eOR(w,this.b))},
$S:0}
C.eOR.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eO8.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lN()},
$S:0}
C.ePp.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYe(),B.E(B.av(w.b0a(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aOR(),1),w.aL5()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYe(),new B.C(A.hK,B.av(s.b0a(u),t,t,t),t),B.E(s.aOR(),1),s.aL5()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:658}
C.ftt.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eo(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bz6(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.ci,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.P)},
$S:z+98}
C.fts.prototype={
$3(d,e,f){var w=this,v=C.bz6(),u=w.b?A.H:A.cv,t=w.c?A.cD:A.bl
return C.eo(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.ci,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.ccx.prototype={
$1(d){return B.t(d)},
$S:17}
C.fB9.prototype={
$0(){return this.a},
$S:z+15}
C.fhZ.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fi_.prototype={
$2(d,e){return J.cl(e)},
$S:z+31}
C.fBb.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fBe.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fBf.prototype={
$0(){return A.d.gL(D.vM)},
$S:z+33}
C.fB7.prototype={
$1(d){return d.a},
$S:z+16}
C.fBa.prototype={
$1(d){return d.a},
$S:z+16}
C.fz7.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fz8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fz9.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ftx.prototype={
$0(){return C.cC()},
$S:22}
C.ftA.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ci,s=u?n:0
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
C.ftz.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ci,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fty.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ci,t=v?j:0
return C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lo,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q2,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.ftw.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fvY.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hdX.cg(0,A.a.i(s.w).toLowerCase(),new C.fvW(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fvX(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bn5(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fvW.prototype={
$0(){return F.aMy(this.a.w)},
$S:187}
C.fvX.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.by0("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.c5,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:187}
C.faP.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.faQ.prototype={
$1(d){return d.a},
$S:z+18}
C.faR.prototype={
$1(d){return d.b},
$S:z+19}
C.fK4.prototype={
$1(d){return D.fSc},
$S:z+41}
C.eVr.prototype={
$0(){return this.a.x=C.hId(this.b,this.c.b)},
$S:0}
C.eVs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eVp.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:422}
C.eVq.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:422}
C.eVo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.aB,null,new C.eVj(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kY,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b0(s,7)
if(r.length===0){n.m(new C.eVk(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hjF(o,m.cFV(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eVl(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eVj.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eVn(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b3l,A.f,p,p,D.aZq,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BH:D.BM,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fwc(v,i.b29(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bn(!0,new B.C(A9.AR,t,p),!0,!1,A.af,!0,!0)
s=new C.eVm(i,d)
m=B.aI(d,A.bT,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gt[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cV(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fhk,A.S,t,A.e1,D.eGX,A.at,D.frO,A.S,B.lX(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.AR,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:28}
C.eVn.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.by:A.dp
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hx,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eVi(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eVi.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eVm.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.amL,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.MZ(u.Fh(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eVh(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:130}
C.eVh.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eVk.prototype={
$0(){var w=this.a
return w.w=w.w.Fh("")},
$S:0}
C.eVl.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eV7.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eV8.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eVa.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eVb.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eVc.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eVd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eV9(w,d))},
$S:2}
C.eV9.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eVe.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eVF.prototype={
$0(){return this.a.f.fH()},
$S:0}
C.eVG.prototype={
$0(){var w=this.a
return w.m(new C.eVE(w))},
$S:0}
C.eVE.prototype={
$0(){return this.a.e=null},
$S:0}
C.eVH.prototype={
$0(){var w=this.a
return w.m(new C.eVD(w))},
$S:0}
C.eVD.prototype={
$0(){return this.a.x=null},
$S:0}
C.eVJ.prototype={
$1(d){var w=this.a
return w.m(new C.eVC(w,d))},
$S:34}
C.eVC.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eVK.prototype={
$1(d){var w=this.a
return w.m(new C.eVB(w,d))},
$S:34}
C.eVB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eVL.prototype={
$0(){var w=this.a
return w.m(new C.eVA(w))},
$S:0}
C.eVA.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eVM.prototype={
$1(d){var w=this.a
return w.m(new C.eVz(w,d))},
$S:34}
C.eVz.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eVN.prototype={
$1(d){var w=this.a
return w.m(new C.eVy(w,d))},
$S:34}
C.eVy.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eVO.prototype={
$0(){var w=this.a
return w.m(new C.eVx(w))},
$S:0}
C.eVx.prototype={
$0(){var w=this.a
return w.w=w.w.Fh("")},
$S:0}
C.eVP.prototype={
$0(){var w=this.a
return w.m(new C.eVw(w,this.b))},
$S:0}
C.eVw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eVQ.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bMh(D.a20[v]),null))
return B.bY(A.bz,t,A.br,8,8)},
$S:171}
C.eVI.prototype={
$1(d){var w=this.a
return w.m(new C.eVv(w,d))},
$S:9}
C.eVv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eVf.prototype={
$0(){var w=this.a
return w.m(new C.eVg(w,this.b,this.c))},
$S:0}
C.eVg.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eVu.prototype={
$0(){var w=this.a
return w.m(new C.eVt(w,this.b))},
$S:0}
C.eVt.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fK3.prototype={
$1(d){return new C.a_H(this.a,this.b,null)},
$S:z+42}
C.eV0.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eV1.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eV2.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aF8?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eV3.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eV4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eV_(w,d))},
$S:2}
C.eV_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eV5.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eV6.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.h8(A.bv,w.length),A.aN))},
$S:0}
C.fhe.prototype={
$1(d){return d.a===this.a},
$S:226}
C.eb8.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawn(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cM0:D.d1_
t=D.x7.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.x7.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bgn(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bNy(B.eD(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.ba4.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ee:A.lM,D.x7,q,q,q,20),A.at,B.f3(A.A,B.nL(A.jo,D.fb3,new C.eb7()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f7L,A.f,q,q,new B.o(D.x7,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ahH,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.eb7.prototype={
$1(d){return D.bSI.av(0,d)},
$S:66}
C.fBg.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fBh.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:226}
C.fBi.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fBj.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fBc.prototype={
$1(d){return d.a},
$S:z+18}
C.fBd.prototype={
$1(d){return d.b},
$S:z+19}
C.fJh.prototype={
$1(d){return new C.Z5(this.a,this.b,null)},
$S:z+44}
C.dgG.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dgH.prototype={
$1(d){return d.a===this.a.gahz()},
$S:z+10}
C.dgI.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dgL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgM.prototype={
$0(){var w=this.a
return w.m(new C.dgK(w,this.b))},
$S:0}
C.dgK.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgN.prototype={
$1(d){var w=this.a
return w.m(new C.dgJ(w,d))},
$S:9}
C.dgJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eb6.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.ft(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dG(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f7k.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ci,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f7m.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eo(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mx,D.cQ,g,e,f)},
$S:z+46}
C.f7l.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wg(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mx,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f7j.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fuE.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fuF.prototype={
$0(){return A.d.gL(D.GD)},
$S:z+49}
C.fuG.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f9k.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fAJ.prototype={
$1(d){var w=2450411,v=4281908728
C.dv(d,C.dw(4280171146,1,0,D.be,w,0,0.52,0,0))
C.dv(d,C.dw(v,1,0,D.be,w,0,0.04,0.48,0))
C.dv(d,C.dw(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.dv(d,C.dw(v,0.006,0,D.fp,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAK.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dv(d,C.dw(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.dv(d,C.dw(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.dv(d,C.dw(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.dv(d,C.dw(v,0.006,0,D.fp,v,3,0.22,0.08,0.12))
C.dv(d,C.dw(u,0.004,0,D.fp,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fAL.prototype={
$1(d){var w=2450411,v=4279548070
C.dv(d,C.dw(4279080072,0.11,0,D.be,w,0,1,0,0))
C.dv(d,C.dw(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.dv(d,C.dw(856528008,0.72,0,D.jF,w,0,0.28,0.72,0.14))
C.dv(d,C.dw(1426953352,0.2,0,D.jF,w,0,0.2,0.78,0.22))
C.dv(d,C.dw(v,0.004,0,D.fp,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAW.prototype={
$1(d){var w=2450411
C.dv(d,C.dw(4279203438,0.55,0,D.jF,w,0,0.5,0.55,-0.05))
C.dv(d,C.dw(4280171146,0.5,0,D.jF,w,0,0.45,0.62,0.35))
C.dv(d,C.dw(4280640491,0.4,0.3,D.jE,w,0,0.35,0.68,0.55))
C.dv(d,C.dw(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fB0.prototype={
$1(d){var w=4280472558
C.dv(d,C.dw(4279310375,0.75,-0.4,D.jE,2450411,0,0.75,-0.15,0.35))
C.dv(d,C.dw(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.dv(d,C.dw(w,0.006,0,D.fp,w,3,0.35,0.08,0.08))
C.dv(d,C.dw(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fB1.prototype={
$1(d){var w=2450411,v=4280640491
C.dv(d,C.dw(3423541034,0.48,0,D.be,w,0,1,0,0))
C.dv(d,C.dw(v,0.12,-0.08,D.jF,w,0,1.1,-0.05,0.38))
C.dv(d,C.dw(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.dv(d,C.dw(v,0.006,0,D.fp,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fB2.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cL4[w]
u=Date.now()
t=$.iY
$.iY=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.ci,0,"","","","","",!1,0)
u=$.JY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dv(d,C.dw(s,0.006,0,D.fp,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fB3.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mc,A.dw,w/3).l()
u=Date.now()
t=$.iY
$.iY=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cl,v,2450411,0,0,!1,"",0,D.ci,0,"","","","","",!1,0)
u=$.JY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dv(d,C.dw(s,0.006,0,D.fp,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fB4.prototype={
$1(d){var w=4294967295
C.dv(d,C.dw(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.dv(d,C.dw(4280110808,1.1,1.57,D.jE,2450411,0,0.18,0.35,-0.05))
C.dv(d,C.dw(w,0.006,0,D.fp,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fB5.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dv(d,C.dw(w,0.1,0,D.be,v,0,1,0,0))
C.dv(d,C.dw(u,0.012,0,D.be,v,0,1,0,0.1))
C.dv(d,C.dw(u,0.006,0,D.fp,u,3,0.42,0.06,0.14))
C.dv(d,C.dw(403446057,0.68,0,D.jF,v,0,0.22,0.72,0.18))
C.dv(d,C.dw(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fB6.prototype={
$1(d){var w=4278630100
C.dv(d,C.dw(4279310375,1.2,0.15,D.jF,2450411,0,0.55,-0.2,-0.1))
C.dv(d,C.dw(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.dv(d,C.dw(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAM.prototype={
$1(d){var w=4292617766
C.dv(d,C.dw(4282714634,0.65,-0.2,D.jE,2450411,0,0.65,-0.1,0.45))
C.dv(d,C.dw(w,0.5,-0.15,D.jE,2450411,0,0.5,0.05,0.55))
C.dv(d,C.dw(w,0.006,0,D.fp,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fAN.prototype={
$1(d){var w=2450411
C.dv(d,C.dw(4278413729,0.35,3.14,D.jE,w,0,0.45,-0.05,0.7))
C.dv(d,C.dw(4278355143,0.3,3.14,D.jE,w,0,0.4,0.25,0.75))
C.dv(d,C.dw(4279150057,0.32,3.14,D.jE,w,0,0.5,0.55,0.72))
C.dv(d,C.dw(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fAO.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dv(d,C.dw(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.dv(d,C.dw(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.dv(d,C.dw(w,0.28,0,D.jF,v,0,0.35,-0.08,0.78))
C.dv(d,C.dw(u,0.22,0.5,D.jE,v,0,0.3,0.72,0.78))
C.dv(d,C.dw(w,0.006,0,D.fp,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fAP.prototype={
$1(d){var w=4293571336,v=1156231944
C.dv(d,C.dw(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.dv(d,C.dw(v,0.15,0,D.jE,2450411,0,0.15,0.02,0.02))
C.dv(d,C.dw(v,0.15,3.14,D.jE,2450411,0,0.15,0.83,0.83))
C.dv(d,C.dw(w,0.004,0,D.fp,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fAQ.prototype={
$1(d){var w=4279080072,v=2450411
C.dv(d,C.dw(w,0.14,0,D.kT,v,0,0.14,0.68,0.18))
C.dv(d,C.dw(4279548070,0.14,0,D.kT,v,0,0.14,0.78,0.28))
C.dv(d,C.dw(4281193663,0.14,0,D.kT,v,0,0.14,0.68,0.38))
C.dv(d,C.dw(4284410580,0.14,0,D.kT,v,0,0.14,0.78,0.48))
C.dv(d,C.dw(4279203438,0.14,0,D.kT,v,0,0.14,0.68,0.58))
C.dv(d,C.dw(w,0.006,0,D.fp,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAR.prototype={
$1(d){var w=2450411,v=4280640491
C.dv(d,C.dw(3708753706,0.42,0,D.be,w,0,1,0,0))
C.dv(d,C.dw(v,0.06,-0.05,D.jF,w,0,1,0,0.38))
C.dv(d,C.dw(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.dv(d,C.dw(v,0.006,0,D.fp,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fAS.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mc,A.dw,w/3).l()
u=Date.now()
t=$.iY
$.iY=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cl,v,2450411,0,0,!1,"",0,D.ci,0,"","","","","",!1,0)
u=$.JY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dv(d,C.dw(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.dv(d,C.dw(s,0.006,0,D.fp,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fAT.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iY
$.iY=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bl,A.aD,s,A.bg,null,D.fp,t,t,0,0,!1,"",0,D.ci,0,"","","","","",!1,0)
v=$.JY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dv(d,C.dw(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.dv(d,C.dw(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.dv(d,C.dw(s,0.006,0,D.fp,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAU.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dv(d,C.dw(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.dv(d,C.dw(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.dv(d,C.dw(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.dv(d,C.dw(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.dv(d,C.dw(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.dv(d,C.dw(w,0.004,0,D.fp,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fAV.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iY
$.iY=t+1
t=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.ci,0,"","","","","",!1,0)
u=$.JY
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dq,A.cr,w/2).l()
t=Date.now()
s=$.iY
$.iY=s+1
u=new C.eI("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.ci,0,"","","","","",!1,0)
v=$.JY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dv(d,C.dw(4280171146,1,0,D.be,q,0,0.48,0,0))
C.dv(d,C.dw(4280172719,1.1,1.57,D.jE,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fAX.prototype={
$1(d){var w=2450411
C.dv(d,C.dw(870995980,0.55,0.45,D.jF,w,0,0.55,-0.12,-0.08))
C.dv(d,C.dw(856996006,0.45,0.45,D.jF,w,0,0.45,0.62,-0.05))
C.dv(d,C.dw(16777215,0.38,0.45,D.jF,4293548044,5,0.38,0.52,0.12))
C.dv(d,C.dw(585783308,0.3,0.45,D.jF,w,0,0.3,0.56,0.16))
C.dv(d,C.dw(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.dv(d,C.dw(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAY.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dv(d,C.dw(w,1,0,D.be,v,0,0.07,0,0))
C.dv(d,C.dw(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.dv(d,C.dw(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.dv(d,C.dw(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.dv(d,C.dw(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.dv(d,C.dw(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.dv(d,C.dw(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.dv(d,C.dw(16777215,0.32,0.45,D.jF,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAZ.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dv(d,C.dw(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.dv(d,C.dw(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.dv(d,C.dw(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.dv(d,C.dw(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.dv(d,C.dw(r,0.006,0,D.fp,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iY
$.iY=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.ci,0,"","","","","",!1,0)
v=$.JY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fB_.prototype={
$1(d){var w=2450411,v=4279548070
C.dv(d,C.dw(3423541034,0.55,0,D.be,w,0,1,0,0))
C.dv(d,C.dw(4009754623,0.56,0.45,D.jF,w,0,0.56,0.22,0.18))
C.dv(d,C.dw(3439329279,0.44,0.45,D.jF,w,0,0.44,0.28,0.24))
C.dv(d,C.dw(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.dv(d,C.dw(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fsu.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fsv.prototype={
$0(){return A.d.gL($.bCL())},
$S:z+52}
C.fgN.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fgM.prototype={
$1(d){return C.hPt(d,this.a,this.b)},
$S:z+53}
C.fBp.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vy(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRw(B.hFf(A.uH,C.hPw(w.c,w.d,v,u),t)))},
$S:425}
C.dS6.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dS5.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bS(A.Jr,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jt(new B.an(A.W,w,A.b_,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdg(u.a,r,q,r),A.au),w),B.av(new B.kc(r,new C.dS4(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:418}
C.dS4.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hS(B.fL(i,A.A,r,r,A.ck,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mi(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bpM(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dT(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJE(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.eb(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.eUe.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:66}
C.c74.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hG.j(0.4),A.J,14)],x.V):v
w=B.dh(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.h_,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c75.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fh(""))},
$S:0}
C.c76.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.MZ(v.Fh(u),!0,!1,null),!0,null),d.b,new C.c77(w,this.c,d),v.a===u)},
$S:z+54}
C.c77.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hjF(u.b,t.c.Fh(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHH.prototype={
$1(d){return new C.YE(this.a,null)},
$S:z+55}
C.d5T.prototype={
$0(){var w=this.a
w.d=w.gvm().ba1("data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c));++w.r},
$S:0}
C.d5Y.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d5Z.prototype={
$0(){var w=this.a
return w.m(new C.d5X(w))},
$S:0}
C.d5X.prototype={
$0(){return this.a.r++},
$S:0}
C.d6_.prototype={
$1(d){var w=this.a
return w.m(new C.d5W(w,d))},
$S:2}
C.d5W.prototype={
$0(){var w=this.a
return w.d=w.gvm().aCF(this.b)},
$S:0}
C.d60.prototype={
$0(){var w=this.a
return w.m(new C.d5V(w))},
$S:0}
C.d5V.prototype={
$0(){var w=this.a
return w.d=w.gvm().ba1("")},
$S:0}
C.d61.prototype={
$1(d){var w=this.a
return w.m(new C.d5U(w,d))},
$S:2}
C.d5U.prototype={
$0(){var w=this.a
return w.d=w.gvm().ba8(this.b)},
$S:0}
C.d62.prototype={
$0(){var w=this.a
w=w.gvm().ba8(w.gawo().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fHG.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fHF(w),null)},
$S:20}
C.fHF.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cV(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fp_,A.at,D.fpf,A.aA,new C.aYP(v.a,new C.fHE(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZY,w,w,w,w,A.LJ,w,w,w)},
$S:186}
C.fHE.prototype={
$1(d){this.b.$1(new C.fHD(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fHD.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fK2.prototype={
$1(d){return D.fNA},
$S:z+57}
C.dcF.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dcG.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dcH.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fy5.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:66}
C.d5A.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cS(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cS(w,q+p,w,q+p*1.2))
u.E(new B.CK(B.bT(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aP(u,v.d)
s.aP(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.u(w,o),2.2,p)},
$S:668}
C.fy9.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fqv.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fqw.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xt,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.f80,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.G9,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fqt(d),B.bk(A.bY,w,w,w,A.c,w,A.ch,w,w,w,w,w)),A.S,B.ex(A.nY,D.Tq,new C.fqu(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ch,w,w,Q.wx,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fqt.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fqu.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ccv.prototype={
$1(d){return d.hB()},
$S:z+59}
C.ccw.prototype={
$1(d){return d.ag()},
$S:z+60}
C.ccu.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdI(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hLk(b2.h(0,"type"))
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
n=A.axn[A.o.D(b4,0,8)]
m=D.cNS[A.o.D(w,0,1)]
l=C.hOW(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.au9[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hRJ(b2.h(0,"shape"))
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
a3=C.hf2(b2.h(0,"textTransition"))
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
C.cck.prototype={
$1(d){return d.hB()},
$S:z+62}
C.ccl.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cch.prototype={
$1(d){return B.t(d)},
$S:17}
C.cci.prototype={
$1(d){return B.t(d)},
$S:17}
C.ccj.prototype={
$1(d){return C.h5K(B.a1(d,x.N,x.z))},
$S:z+64}
C.ccM.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ccN.prototype={
$0(){return A.d.gL(D.a1F)},
$S:z+66}
C.ccH.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hB())},
$S:z+7}
C.ccG.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ccC.prototype={
$1(d){return new B.K(d,new C.ccD(),B.U(d).k("K<1,S>")).fo(0,new C.ccE())},
$S:z+69}
C.ccD.prototype={
$1(d){return d.f},
$S:z+70}
C.ccE.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:669}
C.ccF.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hB6(d)},
$S:z+71}
C.ccI.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ccJ.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ccK.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fyI.prototype={
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
C.fyE.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fyF.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fyG.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fyH.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ccq.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i_o(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.ccp(),b5.k("J.E"),x.N)
w=B.db(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.py.aw(0,A.k.D(b1,0,1))
u=new C.ccr()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ccs(a9,b7.d)
r=new C.cct(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jR.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kC(A.k.D(1-k,0,1),B.dT(B.eb(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f_){a4=i.hB()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lo&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.r,B.a([new B.kC(A.k.D(o,0,1),r.$1(l),a8),new B.kC(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iE(B.w2(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ci)a7=D.mx
p.push(s.$5(i.c,i.d,i.e,i.f,C.hhe(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:438}
C.ccp.prototype={
$1(d){return d.a},
$S:z+22}
C.ccr.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ccs.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cct.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a71(v,C.b_X(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dEj.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.eb(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ccz.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ccA.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fBw.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:299}
C.fAD.prototype={
$1(d){return new C.acA(this.a,this.b,null)},
$S:z+78}
C.enc.prototype={
$0(){return this.a.Pn(this.b,C.i2K(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.end.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pn(this.b,C.i2M(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ene.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pn(this.b,C.i2L(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.enf.prototype={
$0(){Z.hgZ()
B.a6(this.a,!1).O(null)},
$S:0}
C.cco.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.ccn.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.nt),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lM(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.du
return B.fL(t,A.A,o,new C.ccm(),A.ck,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.ccm.prototype={
$3(d,e,f){return D.aaG},
$S:203}
C.fyD.prototype={
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
r=B.B(new B.K(r,new C.fyC(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fyC.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_X(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fjk.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fji(d))
w=B.aI(d,A.bT,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cY(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kZ,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zr,q,q,!0,q,q,new C.fjj(p,d),q,B.fv(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F_,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fJ,A.F8,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:251}
C.fji.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pn())B.a6(w,!0).eI()},
$S:0}
C.fjj.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a6(this.b,!0).eI()},
$S:0}
C.f1E.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dT(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dT(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dT(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dT(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fz(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.jT(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fz(r*1.2)
s.jT(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fz(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(B.eb(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aIh(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aIh(1-r,t))],x.p),t)
case 16:v=D.b2l.aw(0,r)
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(B.ek(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dm()
s.mE(r*6.28)
s.jD(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eD(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:58}
C.dQj.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dQi.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dQh.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hhe(v,w,e)},
$S:58}
C.ccg.prototype={
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
q=B.B(new B.K(v,new C.ccf(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:438}
C.ccf.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ci?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a71(m,new C.Ul(d,C.b_X(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d2P.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d2O(w))},
$S:11}
C.d2O.prototype={
$0(){return this.a.d++},
$S:0}
C.eaP.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aMg.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i_7(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.fz(Math.sin(t)*0.32)
s.jT(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jD(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dT(B.eb(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.eb(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.eRS.prototype={
$1(d){var w
$.W()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fz
return w},
$S:1693}
C.fwd.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.geb()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bpF(u,t,r),A.au))
w.push(B.nr(s.d,A.aq,new C.bdN(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.boF(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b_,A.r,w,r),r),r,r,r)},
$S:259}
C.fm9.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:300}
C.etq.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cu(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.eto(),new C.etp(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.eto.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:191}
C.etp.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.epO.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.epP.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.epQ.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ero.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.erc.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.erd.prototype={
$1(d){return d.hB()},
$S:z+81}
C.epb.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esw.prototype={
$0(){this.a.ti()},
$S:0}
C.etm.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o1()
w.JJ()},
$S:0}
C.erm.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o1()
w.JJ()},
$S:0}
C.et9.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eta.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.etb.prototype={
$1(d){return d.a},
$S:z+22}
C.etc.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:265}
C.etd.prototype={
$0(){return B.kk(!0,null,!0,!0,null,null,!1)},
$S:673}
C.eoA.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.etn.prototype={
$0(){},
$S:0}
C.eqv.prototype={
$0(){var w=this.a
w.e=this.b.hB()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xa()
w.JJ()},
$S:0}
C.eoy.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xa()},
$S:0}
C.eoz.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xa()},
$S:0}
C.eqS.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eqT.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xa()
w.JJ()
w.z="Home"},
$S:0}
C.eqU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.equ.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.Tp,w,w,!0,w,w,new C.eqt(d),w,w)],x.p),w,w,w,D.fqJ,w,w,w,w,D.f8t,w)},
$S:19}
C.eqt.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqr.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.Tp,w,w,!0,w,w,new C.eqq(d),w,w)],x.p),w,w,w,D.fcm,w,w,w,w,D.fa9,w)},
$S:19}
C.eqq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqs.prototype={
$0(){},
$S:0}
C.epK.prototype={
$1(d){return this.a.aZw(C.bAL(d))},
$S:z+7}
C.epL.prototype={
$1(d){return this.a.ae9(C.bAL(d))},
$S:z+7}
C.eqB.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fqN,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.P2(A.vr,D.avv,"HATI YA KUHOWA","Hati ya mahari",new C.eqw(d),w),A.S,new C.P2(A.h8,D.cZS,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eqx(d),w),A.S,new C.P2(A.hZ,D.cM6,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eqy(d),w),A.S,new C.P2(A.hL,D.cKr,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eqz(d),w)],v)
if(this.a.gaaF())A.d.v(u,B.a([A.S,new C.P2(A.iX,D.cvA,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eqA(d),w)],v))
return B.bn(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xt,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:28}
C.eqw.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eqx.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eqy.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eqz.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eqA.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eqC.prototype={
$0(){var w=this.a
w.e=this.b.hB()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xa()},
$S:0}
C.eoC.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eoD.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.n4(r,v.f+1,q);++v.f
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
C.eqN.prototype={
$1(d){return d.b===D.lo},
$S:z+4}
C.eqO.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e0(new C.eqL(w,this.a,v),null)},
$S:20}
C.eqL.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eqM(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cA,j,q,q,q,q),q,q,q,new C.eqH(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BM[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgh(t,u.b,p.a===t,i,k,new C.eqI(v,m),q))}a1=B.bY(A.bz,a1,A.br,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BH[w]
s.a=null
t=s.a=r.a
u.push(new C.bgg(t,r.b,p.b===t,k,j,new C.eqJ(s,m),q))}return B.bn(!0,B.p(q,B.cd(B.v(B.a([d,A.aQ,a0,A.S,a1,A.bx,v,A.S,B.bY(A.bz,u,A.br,12,12),A.bx,new B.a7(1/0,48,B.ex(D.bP0,D.ft9,new C.eqK(o,n),B.df(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXt,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tt,D.brh,q,q,q),!0,!1,A.af,!0,!0)},
$S:84}
C.eqM.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eqF(w.a,d,e))
w.b.d2(new C.eqG(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eqF.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eqG.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eqH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqI.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eqJ.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eqK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Ge(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d2(new C.eqE(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqE.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eqQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqR.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eqP(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n4(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xa()},
$S:0}
C.eqP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.er7.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.er8.prototype={
$1(d){return d.w},
$S:z+82}
C.er9.prototype={
$2(d,e){return d>e?d:e},
$S:86}
C.era.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bT,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bIM,A.f,v,v,D.aYR,v,38,v,v,v,v,v,38),A.bf,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cA,s,v,v,v,v),v,v,v,new C.er4(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dq(1,A.cl,B.hH(v,new C.er5(m,k,w.c,s,w.d,t,r),k.length,A.fx,v,A.ah,new C.er6(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tt,A.Y4,v,v,v),!0,!1,A.af,!0,!0)},
$S:28}
C.er4.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.er6.prototype={
$2(d,e){return A.ac},
$S:36}
C.er5.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bLR,q,q,q,new C.er2(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.btv,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aX8),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.er3(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.er2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i4R(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geu()?p.a:q.a.length
n=p.geu()?p.b:q.a.length
m=A.a.ox(q.a,o,n,s)
r.bO(0,new B.bb(m,B.h8(A.bv,o+s.length),A.aN))
l.aic(k,m)
l.p8()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.er3.prototype={
$1(d){var w=this.a
w.aic(this.b.a,d)
w.p8()},
$S:2}
C.erb.prototype={
$0(){},
$S:0}
C.eqD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eoT.prototype={
$0(){},
$S:0}
C.eoU.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hix(this.b,w,!0)
w=this.a
w.r=null
w.xa()},
$S:0}
C.eoV.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eoW.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eoS(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n4(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xa()},
$S:0}
C.eoS.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.erh.prototype={
$1(d){return B.oK(new C.erg(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:131}
C.erg.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.ahn,B.v(B.a([D.foo,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.id(!0,w,e,A.y,D.eMH,new C.erf(this.a,this.b),20,A.tw,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:441}
C.erf.prototype={
$2(d,e){var w=null,v=D.GD[e],u=C.hB1(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eGT,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n7,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b5,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ere(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:74}
C.ere.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ccy(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eri.prototype={
$0(){var w=this.a
w.e=this.b.hB()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xa()},
$S:0}
C.enx.prototype={
$0(){var w,v=this.a,u=v.gq7(),t=C.rm(4294967295,null,0,0,null,C.cC(),D.mw,"","","",D.dd),s=this.b
C.ccL(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Ck){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eoR.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gS(v)
if(u.b(t)){s=Date.now()
r=$.iY
$.iY=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h5K(q));++v.f},
$S:0}
C.eoP.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.erq.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eoL.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eoK(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eoK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.erp.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eoB.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:265}
C.epc.prototype={
$0(){return B.kk(!0,null,!0,!0,null,null,!1)},
$S:673}
C.et7.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.et8.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aso(w).fH()
v=u.W0(w)
v.st0(B.h8(A.bv,v.a.a.length))},
$S:8}
C.esx.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.X_(v)
if(u!=null&&u.b===D.cQ)w.W0(u).saV(0,u.r)}else w.w=null},
$S:0}
C.eny.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,v.gq7().e.l(),A.aD,"",4280640491,24,A.bl,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.ci,D.cQ,0.7,0.15,0.2)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.env.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,4279310375,A.aD,"",v.gq7().c.j(0.25).l(),24,A.bl,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gq7().c.l(),2,"",0,0,"",D.ci,D.f_,0.25,0.3,0.3)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.enl.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ci,D.lo,0.6,0.2,0.18),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eni.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bVD],x.p)
for(w=J.aV(this.a);w.C();){v=w.gS(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaiQ().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bGv,r,r,r,r,new C.enh(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.cB(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:28}
C.enh.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.enj.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ag(),null),s=C.eo(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.ci,D.a4a,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdr().z,s)
t.r=s.a},
$S:0}
C.eoN.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eoO.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdr().z,new C.eoM(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eoM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eo_.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eo0(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eo0.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eo4.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eo5(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.eo5.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eo2.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.eo3(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eo3.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.fh(w,new C.eo1()),u=this.a;v.C();)w.gS(0).Q=u},
$S:z+1}
C.eo1.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.enZ.prototype={
$0(){return C.ccL(this.b,this.c,this.a.gq7())},
$S:0}
C.er1.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.etg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eth.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eti.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etj.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bd(s,new C.etf(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRL()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hB()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xa()
t.JJ()}},
$S:0}
C.etf.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.esN.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaJ(),s=w.b,r=u.aaK(A.f8,A.kN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.bx,B.p(v,B.A(B.a([B.E(u.aTF(w.c,A.ak),1),new B.C(A.fo,B.p(v,D.bGB,A.f,v,v,new B.o(A.f8.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aTF(s,A.f8),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bx,u.aTI(A.f8,d,D.bCJ,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bVC(A.aS,d,A.tJ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aTG(d,"Not now"))
return new C.Jq(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.esM.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jq(B.v(B.a([v.aaJ(),A.O,v.aaK(A.aS,D.bCo,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cV(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.42),B.hH(w,new C.esK(v,u,d),u.length,w,w,A.ah,new C.esL(),!0),w),A.aA,v.aTG(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.esL.prototype={
$2(d,e){return A.S},
$S:36}
C.esK.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.amg,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bSD,A.n),w,42,w,w,w,w,w,42),A.bf,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nq,w,w,w),A.cX,B.d("Updated "+this.a.Po(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esJ(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:74}
C.esJ.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.esG.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaJ()
t=t.aaK(A.aH,A.tS,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jq(B.v(B.a([s,A.O,t,A.bx,B.A(B.a([B.E(B.dW(A.a7r,new C.esE(d),B.df(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ch,u,new B.b7(B.m(14),A.Y),new B.aA(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bJ(D.faJ,new C.esF(d),B.bk(A.f8,u,u,u,A.c,u,A.ch,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.esE.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.esF.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.esI.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaJ(),s=w.b,r=u.aaK(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.atJ("Names",""+w.c),1),A.ab,B.E(u.atJ("Fields",""+w.d),1),A.ab,B.E(u.atJ("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bk,v,v,v,A.c,v,A.xk,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jq(B.v(B.a([t,A.O,r,A.aQ,p,A.bx,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.no,v,v,v),new C.esH(d),o),A.S,u.aTH(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.esH.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.epG.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.epF.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.esy.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.et6.prototype={
$1(d){var w=this.a,v=this.b
return new C.ZQ(A.d.dL(w.d,new C.et4(v),new C.et5(v)).hB(),w.f,null)},
$S:z+84}
C.et4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.et5.prototype={
$0(){return this.a},
$S:z+85}
C.enq.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ho,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIm,w,w,w,w,new C.eno(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f8N,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJv,w,w,w,w,new C.enp(d),!1,w,w,w,w,w,D.fuj,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dl,w,w,w),w,w,w))
return B.bn(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.eno.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.enp.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.enr.prototype={
$0(){var w=this.b,v=w.c,u=C.eo(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a5,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.ci,D.Rb,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.ens.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iY
$.iY=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iY
$.iY=k+1
m.push(new C.eI(""+1000*l+"_"+k,D.Rb,0.04,0.06,0.92,0.88,v,24,A.a5,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ci,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lD(""+1000*p+"_"+o,r+n,"",D.q1,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.enw.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kt(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eo(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ci,D.kS,0.35,0.55,0.62)
A.d.K(u.gdr().z,w)
u.r=w.a},
$S:0}
C.enn.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1f(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.e9(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ci,D.kS,s,u,t)
A.d.K(p.gdr().z,q)
A.d.bn(p.gdr().z,new C.enm(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hZR(p)}},
$S:0}
C.enm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ern.prototype={
$0(){var w=this.a,v=this.b
w.b1f(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ete.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.epJ.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.epI())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.epI.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eo8.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eo9.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ti()},
$S:8}
C.enk.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a5,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ci,D.lo,0.8,0.1,0.1),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.epa.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ent.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdr().z,v)
w.r=v.a},
$S:0}
C.enC.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.enD.prototype={
$0(){var w=this.b.hB(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eo(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdr().z,f)
t.r=f.a},
$S:0}
C.enE.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.enB(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.enB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.enP.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.enA(v))
if(u>0){A.d.cA(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.enA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.enS.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.enT.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.enU.prototype={
$0(){return this.a.as=A.dL},
$S:0}
C.enV.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.enW.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.enX.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.enY.prototype={
$1(d){return d.length!==0},
$S:3}
C.enF.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.K(v,C.Cz(w.gq7().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdr().z
v=C.cC()
A.d.K(u,C.iS(A.bg,!1,w.gq7().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.enG.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cC()
A.d.K(u,C.Cz(v.gq7().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdr().z
u=C.cC()
w=C.bBt()
A.d.K(t,C.iS(A.L,!1,v.gq7().e.l(),A.aD,12,A.bl,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.enH.prototype={
$0(){A.d.K(this.a.gdr().z,C.Cz(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.enI.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdr().z,C.Cz(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.enJ.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.K(v,C.Cz(w.gq7().c.j(0.35).l(),0.12,u,D.Cl,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdr().z,C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.15,C.cC(),"Important note",0,D.q2,0.5,0.38,0.52))},
$S:0}
C.enK.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.Cz(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdr().z,C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bBt()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.enL.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.Cz(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdr().z,C.iS(A.bg,!1,4285611794,A.aD,15,A.bl,A.a5,0.24,C.cC(),"Sticky note",0,D.aEY,0.26,0.64,0.14))},
$S:0}
C.enM.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdr().z,C.Cz(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdr().z,C.Cz(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.enN.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Hz,0.42,0.06,0.18))
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.u6,0.42,0.52,0.18))},
$S:0}
C.enO.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.Cz(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdr().z,C.Cz(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.enQ.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.Cz(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.K(v.gdr().z,C.iS(A.L,!1,w,A.aD,14,A.bl,A.a5,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.enR.prototype={
$0(){return C.ccL(this.b,D.Rc,this.a.gq7())},
$S:0}
C.ep9.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5O.t(0,d),t=this.a
return t.b6b(d,v===d,A.aZ,this.c,new C.ep8(t,u,d,w),u)},
$S:z+25}
C.ep8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nU(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bCg(r,new C.ep7(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ep7.prototype={
$0(){return this.a.d2(new C.ep6(this.b,this.c))},
$S:0}
C.ep6.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.enu.prototype={
$0(){var w,v=this.a,u=v.gq7(),t=C.rm(4294967295,null,0,0,null,C.cC(),D.mw,"","","",D.dd),s=this.b
C.ccL(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Ck){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eoc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i4U(p,q.d,s,new C.eob(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ti(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eob.prototype={
$1(d){return this.biS(d)},
biS(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eoa(t,d))
w=2
return B.b(t.ti(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eoa.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gS(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eod.prototype={
$0(){return this.a.bGG()},
$S:0}
C.eoe.prototype={
$0(){return this.a.aP2("Class Presentation",!0)},
$S:0}
C.eof.prototype={
$1(d){return this.a.bHC(d.b,this.b,d.a)},
$S:z+88}
C.eoQ.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.er0.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e0(new C.er_(this.a,this.b),null),null)},
$S:60}
C.er_.prototype={
$2(d,e){return B.oK(new C.eqZ(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.eqZ.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.agP,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b5,B.bK(!1,A.zr,v,v,!0,v,v,new C.eqX(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cB(B.a([p.aRH(u,!0,!0,new C.eqY(p,w.d))],q),e,D.bpa,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kz,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.eqX.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqY.prototype={
$0(){this.b.$1(new C.eqV())
var w=this.a
if(w.c!=null)w.m(new C.eqW())},
$S:0}
C.eqV.prototype={
$0(){},
$S:0}
C.eqW.prototype={
$0(){},
$S:0}
C.esz.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:94}
C.esA.prototype={
$4(d,e,f,g){var w=A.cs.aw(0,e.gp(0))
return B.dc(B.eb(A.A,new C.axL(this.a,null),0.94+w*0.06,null,null),w)},
$S:442}
C.esB.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:94}
C.esC.prototype={
$4(d,e,f,g){var w=A.cs.aw(0,e.gp(0))
return B.dc(B.eb(A.A,new C.bbE(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:442}
C.esD.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vj(this.b))},
$S:0}
C.enz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.pk.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c9.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.X(A0.ZT,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bS(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tO(A.ft,B.p(p,B.v(B.a([t,A.aA,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:326}
C.eoE.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eoF.prototype={
$1(d){return d.length!==0},
$S:3}
C.eoG.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kj
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_o:A.Bb}return w},
$S:677}
C.eoJ.prototype={
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
s=t?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.78)],s):B.a([A.c.j(0.92),A.mO.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kt(v.w)?A.vr:A.pQ,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Po(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Po(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Po(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Po(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Po(v.f)
r=k.bHA(n,A.d.gL(r),t)
return B.p(l,B.bw(j,new B.a7c(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.LG,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.nW,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.eoH(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eoI(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.dc,l,l,l,l)},
$S:95}
C.eoI.prototype={
$0(){return this.a.ae9(this.b)},
$S:0}
C.eoH.prototype={
$0(){return this.a.Ax(this.b,this.c)},
$S:0}
C.eq9.prototype={
$0(){var w=this.a
w.b4Q()
w.m(new C.eq8())},
$S:0}
C.eq8.prototype={
$0(){},
$S:0}
C.eqa.prototype={
$1(d){return this.a.aic(this.b.a,d)},
$S:2}
C.eqb.prototype={
$0(){this.a.d2(new C.eq7(this.b))},
$S:0}
C.eq7.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.eqc.prototype={
$0(){this.a.d2(new C.eq6(this.b))},
$S:0}
C.eq6.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.eqd.prototype={
$0(){this.a.d2(new C.eq5(this.b))},
$S:0}
C.eq5.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mC},
$S:0}
C.eqe.prototype={
$0(){this.a.d2(new C.eq4(this.b))},
$S:0}
C.eq4.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eqf.prototype={
$0(){var w=this.a
w.d2(new C.eq3(w,this.b))},
$S:0}
C.eq3.prototype={
$0(){var w=this.b
return w.as=this.a.c1e(w.as)},
$S:0}
C.eqg.prototype={
$0(){return this.a.d2(new C.eq2(this.b))},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eqh.prototype={
$0(){return this.a.d2(new C.eq1(this.b))},
$S:0}
C.eq1.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.epV.prototype={
$0(){return this.a.a1p(this.b.a)},
$S:0}
C.epW.prototype={
$0(){this.a.ZX()
return null},
$S:0}
C.epX.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bT,x.w).w.a.a<900)w.aes()
else w.m(new C.epU(w))},
$S:0}
C.epU.prototype={
$0(){return this.a.as=!0},
$S:0}
C.epY.prototype={
$0(){this.a.d2(new C.epT(this.b))},
$S:0}
C.epT.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.epZ.prototype={
$0(){return this.a.d2(new C.epS(this.b))},
$S:0}
C.epS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eq_.prototype={
$0(){return this.a.d2(new C.epR(this.b))},
$S:0}
C.epR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eq0.prototype={
$0(){return this.a.ayJ(null)},
$S:0}
C.ep2.prototype={
$0(){this.a.Dc()
return null},
$S:0}
C.ep3.prototype={
$0(){this.a.a9h()
return null},
$S:0}
C.ep5.prototype={
$1(d){return this.biT(d)},
biT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JA(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bV(A.aB,null,new C.eoY(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d2(new C.eoZ(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.ep_(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.ep0(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hjE(q,new C.Ea(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d2(new C.ep1(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ag5(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:90}
C.eoY.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e4U],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bIt:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eoX(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dl,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.eoX.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eoZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ep_.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ep0.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ep1.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ep4.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zm(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zm(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zm(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ag5(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e9U,q,v,u,B.zm(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:137}
C.etk.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBq(w,v)}},
$S:0}
C.etl.prototype={
$0(){this.a.Dc()
return null},
$S:0}
C.eqk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bSx:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aR:A.bu
return new B.C(A.fx,B.aE(u,B.dh(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eqj(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:132}
C.eqj.prototype={
$0(){var w=this.a
return w.m(new C.eqi(w,this.b))},
$S:0}
C.eqi.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eql.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2b:E.avB
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbKY():t.gbH0()
return B.hp(B.aE(u,B.p(u,D.alI,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.eqm.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i49(v,w.a.c)},
$S:0}
C.erJ.prototype={
$0(){return this.b.uW(this.a.a)},
$S:0}
C.erK.prototype={
$0(){return this.a.uW(D.mw)},
$S:0}
C.erL.prototype={
$0(){return this.a.uW(D.Hx)},
$S:0}
C.erW.prototype={
$0(){return this.a.uW(D.Hy)},
$S:0}
C.es6.prototype={
$0(){return this.a.uW(D.Hw)},
$S:0}
C.esh.prototype={
$0(){return this.a.pU("lab_report")},
$S:0}
C.eso.prototype={
$0(){return this.a.pU("rubric")},
$S:0}
C.esp.prototype={
$0(){return this.a.pU("minutes")},
$S:0}
C.esq.prototype={
$0(){return this.a.pU("agenda")},
$S:0}
C.esr.prototype={
$0(){return this.a.pU("timeline")},
$S:0}
C.ess.prototype={
$0(){return this.a.pU(this.b.a)},
$S:0}
C.erM.prototype={
$0(){this.a.V9()
return null},
$S:0}
C.erN.prototype={
$0(){this.a.V3()
return null},
$S:0}
C.erO.prototype={
$0(){return this.a.pU("table")},
$S:0}
C.erP.prototype={
$0(){return this.a.pU("sticky")},
$S:0}
C.erQ.prototype={
$0(){return this.a.pU("divider")},
$S:0}
C.erR.prototype={
$0(){return this.a.pU("header_bar")},
$S:0}
C.erS.prototype={
$0(){return this.a.oO(D.be)},
$S:0}
C.erT.prototype={
$0(){return this.a.oO(D.eI)},
$S:0}
C.erU.prototype={
$0(){return this.a.oO(D.jE)},
$S:0}
C.erV.prototype={
$0(){return this.a.oO(D.Cl)},
$S:0}
C.erX.prototype={
$0(){return this.a.oO(D.jF)},
$S:0}
C.erY.prototype={
$0(){return this.a.oO(D.kT)},
$S:0}
C.erZ.prototype={
$0(){return this.a.oO(D.fp)},
$S:0}
C.es_.prototype={
$0(){this.a.GV()
return null},
$S:0}
C.es0.prototype={
$0(){this.a.MU()
return null},
$S:0}
C.es1.prototype={
$0(){return this.a.pU("quote")},
$S:0}
C.es2.prototype={
$0(){return this.a.a7q()},
$S:0}
C.es3.prototype={
$0(){this.a.a_2()
return null},
$S:0}
C.es4.prototype={
$0(){var w=this.a
return w.m(new C.erz(w))},
$S:0}
C.erz.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.es5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nU(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.erH(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erH.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.es7.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jJ()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5P.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5P.t(0,q))u.push(B.ao(s,B.p(s,D.Np,A.f,s,s,D.DD,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fx,B.aE(s,B.hp(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.erG(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.erG.prototype={
$0(){this.a.a7I(this.b)
return null},
$S:0}
C.es8.prototype={
$0(){this.a.a7H(this.b)
return null},
$S:0}
C.es9.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hB2(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.b2
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rm(4294967295,r,0,0,r,"preview_"+w,D.q1,"","","",D.dd)
C.hgC(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hhW(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amh,A.f,r,r,D.DD,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jd,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cX,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.erF(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.erF.prototype={
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
return B.b(s.nU(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d2(new C.erv(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erv.prototype={
$0(){return C.hgC(this.a,this.b.a)},
$S:0}
C.erI.prototype={
biU(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5O.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nU(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.biU(d,e)},
$S:z+91}
C.est.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.B(new B.K(d,new C.esv(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.esv.prototype={
$1(d){var w=this
return w.a.b6b(d,w.b===d,w.c,w.d,new C.esu(w.e,d),!D.a5O.t(0,d))},
$S:z+25}
C.esu.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.esa.prototype={
$1(d){this.b.$2(d,new C.erE(this.a,d,this.c))
return null},
$S:z+26}
C.erE.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCg(u,new C.eru(v,this.c,w),w)},
$S:0}
C.eru.prototype={
$0(){return this.a.d2(new C.ers(this.b,this.c))},
$S:0}
C.ers.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.esb.prototype={
$1(d){this.b.$2(d,new C.erD(this.a,d))
return null},
$S:z+26}
C.erD.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fKR(u,new C.ert(v,w),w)},
$S:0}
C.ert.prototype={
$0(){var w=this.a
return w.d2(new C.err(w,this.b))},
$S:0}
C.err.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.esc.prototype={
$0(){var w=this.a
return w.m(new C.erC(w))},
$S:0}
C.erC.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.esd.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBq(w,v)}},
$S:0}
C.ese.prototype={
$0(){this.a.HH()
return null},
$S:0}
C.esf.prototype={
$0(){return this.a.a7q()},
$S:0}
C.esg.prototype={
$0(){var w=this.a,v=w.jJ()
if(v!=null&&v.b===D.cQ)w.d2(new C.erB(v))},
$S:0}
C.erB.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.esi.prototype={
$0(){this.a.Dc()
return null},
$S:0}
C.esj.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.ET(v,!0)
return null},
$S:0}
C.esk.prototype={
$0(){this.a.d2(new C.erA(this.b))},
$S:0}
C.erA.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.esl.prototype={
$0(){this.a.d2(new C.ery(this.b))},
$S:0}
C.ery.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.esm.prototype={
$0(){this.a.d2(new C.erx(this.b))},
$S:0}
C.erx.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mC},
$S:0}
C.esn.prototype={
$0(){this.a.d2(new C.erw(this.b))},
$S:0}
C.erw.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eo7.prototype={
$1(d){return this.biR(d)},
biR(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nU(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d2(new C.eo6(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:188}
C.eo6.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.esQ.prototype={
$0(){var w=this.a
return w.d2(new C.esP(w,this.b))},
$S:0}
C.esP.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.esR.prototype={
$0(){var w=this.a
return w.d2(new C.esO(w,this.b))},
$S:0}
C.esO.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.epf.prototype={
$0(){return this.a.d2(new C.epe(this.b))},
$S:0}
C.epe.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.epg.prototype={
$0(){return this.a.d2(new C.epd(this.b))},
$S:0}
C.epd.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epN.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.anY,new C.epM(),w),w.k("ak.E"))
return w},
$S:z+94}
C.epM.prototype={
$1(d){var w=null
return B.zm(B.d(d.b,w,w,w,w,w,w,A.mF,w,w,w),48,d,x.fO)},
$S:z+95}
C.et2.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.et1.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.k8()?q:new C.et_(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.b2:A.cp
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bZ(0,C.hhW(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nn,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ahI,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.et0(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:75}
C.et0.prototype={
$0(){var w=this.a
return w.m(new C.esW(w,this.b))},
$S:0}
C.esW.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JJ()},
$S:0}
C.et_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.esX(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.esY(q,s))
q.aQr()}else if(r==="del"){q=t.a
q.m(new C.esZ(q,s))
q.aPD()}else if(r==="up")t.a.b1s(s,s-1)
else if(r==="down")t.a.b1s(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esX.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bK6,w,w,w,w,new C.esS(d),!1,w,w,w,w,w,w,w,D.f9I,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bK_,w,w,w,w,new C.esT(d),!1,w,w,w,w,w,w,w,A.wa,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJh,w,w,w,w,new C.esU(d),!1,w,w,w,w,w,w,w,D.fhA,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bLi,w,w,w,w,new C.esV(d),!1,w,w,w,w,w,w,w,D.f9x,w,w,w))
return B.bn(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.esS.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.esT.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.esU.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.esV.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.esY.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.et3.prototype={
$0(){return this.a.a7q()},
$S:0}
C.eox.prototype={
$0(){var w=this.a
w.b4Q()
w.ayJ(null)},
$S:0}
C.eow.prototype={
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
s=B.a([B.bw(s,B.c_(A.ks,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.eov(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:438}
C.eov.prototype={
$1(d){var w=this
return w.a.bCX(d,w.b,w.c,w.d)},
$S:z+23}
C.eok.prototype={
$0(){var w=this
if(w.b){w.a.N2(w.c)
return}if(w.d){w.a.a7o(w.c)
return}if(w.e){w.a.afL(w.c)
return}if(w.f)w.a.b5l(w.c)},
$S:0}
C.eol.prototype={
$0(){this.a.N2(this.b)
return null},
$S:0}
C.eom.prototype={
$0(){return this.a.a1p(this.b.a)},
$S:0}
C.eon.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eoj(u,d,w.c,w.d))
v.Hm()
v.o1()
v.p8()},
$S:18}
C.eoj.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eoo.prototype={
$1(d){return this.a.aic(this.b.a,d)},
$S:2}
C.eoq.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fWD(w))u.a.N2(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5l(v)},
$S:0}
C.eop.prototype={
$0(){return this.a.a1p(this.b.a)},
$S:0}
C.eor.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eoi(w.b,d,w.c,w.d))
v.Hm()
v.o1()
v.p8()},
$S:18}
C.eoi.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eos.prototype={
$1(d){var w=this.a
w.m(new C.eoh(this.b,d))
w.Hm()
w.o1()
w.p8()},
$S:207}
C.eoh.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eot.prototype={
$0(){var w=this.a
w.m(new C.eog(this.b))
w.Hm()
w.o1()
w.p8()},
$S:0}
C.eog.prototype={
$0(){this.a.r=C.hhr()},
$S:0}
C.eou.prototype={
$0(){return this.a.a1p(this.b.a)},
$S:0}
C.eqo.prototype={
$0(){var w=this.a
return w.m(new C.eqn(w))},
$S:0}
C.eqn.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eqp.prototype={
$1(d){return this.a.czF(this.b.a,d)},
$S:2}
C.ept.prototype={
$1(d){var w
this.a.d2(d)
w=this.b
if(w!=null)w.$0()},
$S:169}
C.epu.prototype={
$1(d){return this.a.$1(new C.eps(this.b,d))},
$S:6}
C.eps.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.epv.prototype={
$1(d){return this.a.$1(new C.epr(this.b,d))},
$S:6}
C.epr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.epw.prototype={
$1(d){return this.a.$1(new C.epq(this.b,d))},
$S:6}
C.epq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.epx.prototype={
$1(d){return this.a.$1(new C.epp(this.b,d))},
$S:6}
C.epp.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.epy.prototype={
$1(d){return this.a.$1(new C.epo(this.b,d))},
$S:6}
C.epo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.epz.prototype={
$1(d){return this.b.$1(new C.epn(this.a,this.c))},
$S:9}
C.epn.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.epA.prototype={
$1(d){return this.b.$1(new C.epm(this.a,this.c))},
$S:9}
C.epm.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.epB.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bk:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.epl(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:434}
C.epl.prototype={
$0(){return this.a.$1(new C.epi(this.b,this.c))},
$S:0}
C.epi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.epC.prototype={
$1(d){return this.a.$1(new C.epk(this.b,d))},
$S:1705}
C.epk.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.epD.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.epj(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:434}
C.epj.prototype={
$0(){return this.a.$1(new C.eph(this.b,this.c))},
$S:0}
C.eph.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.epE.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pn()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eI()}v.a.aro()},
$S:0}
C.epH.prototype={
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
r.push(B.ao(2,B.p(n,B.X(A.tS,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.n6,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eA(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:126}
C.eng.prototype={
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
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eA(B.v(B.a([B.eb(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j1,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.F3,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:126}
C.erl.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.an7,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.am,w,w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.erj(d),w,w),B.bJ(A.p4,new C.erk(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.erj.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.erk.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.cZR.prototype={
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
i=A.dV.aw(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.kt(j.a.c.w)?D.u_:M.nf),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gL(C.kt(j.a.c.w)?D.u_:M.nf).j(0.18+w*0.12),A.J,32+w*10),D.aaa],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.b0,0.9,A.x,k,0,B.a([A.d.gL(C.kt(j.a.c.w)?D.u_:M.nf).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kt(j.a.c.w)?D.u_:M.nf).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kt(j.a.c.w)?D.u_:M.nf).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kt(m)?D.u_:M.nf
s=B.a([new B.ac(0,A.G,A.d.gL(C.kt(m)?D.u_:M.nf).j(0.45+w*0.2),A.cw,18)],s)
m=x.p
l=B.a([p,B.eb(A.A,B.p(k,B.X(C.kt(j.a.c.w)?A.vr:A.pQ,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kt(j.a.c.w)?D.u_:M.nf).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h_,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f21,A.L,k,k),A.at,B.d(j.gcuI(),k,k,k,k,k,k,D.f6w,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRL()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kt(j.a.c.w)?D.u_:M.nf).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jj(A.xM,"Download PDF","pdf",A.d6,j.IC(0),!1,k))
p=j.a.c
if(!p.z||p.gRL()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jj(A.kN,"Transfer to "+C.hht(p==null?"":p),"transfer_hati",A.aV,j.IC(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IC(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jj(D.bBM,"Rename presentation","rename",A.c9,n,!1,k),A.an,new C.Jj(A.ajm,"Duplicate","duplicate",A.b7,j.IC(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jj(A.e5,"Delete presentation","delete",A.ay,j.IC(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IC(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IC(n)
s.push(B.dT(B.dc(B.bK(!1,E.aPW,k,k,!0,k,k,new C.cZQ(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.bsd,k,k,k,k,k,A.km,k,k)),n),new B.u(0,(1-p)*8)))
return B.eb(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.C(D.brm,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.UN,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.cZQ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d_c.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d_d.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cZO.prototype={
$1(d){var w=this.a
return w.m(new C.cZK(w))},
$S:23}
C.cZK.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cZP.prototype={
$1(d){var w=this.a
return w.m(new C.cZJ(w))},
$S:51}
C.cZJ.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZN.prototype={
$0(){var w=this.a
return w.m(new C.cZL(w))},
$S:0}
C.cZL.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZM.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eu0.prototype={
$0(){return $.bja=!$.bja},
$S:0}
C.etR.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTy())u.avd()},
$S:0}
C.eu_.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.etS.prototype={
$0(){return this.a.y=!0},
$S:0}
C.etT.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avd()},
$S:0}
C.etN.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.etO.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.etP.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etQ.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.etY.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.r,w,null)},
$S:1706}
C.etZ.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cY(e,!1,d,null)
w=this.a
return w.csG(w.e,d,e)},
$S:443}
C.etU.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fz((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.etV.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jT((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.etW.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fz(v.gp(0)*0.8)
w.jT(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.etX.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fz(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.eu1.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYd().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYd().x
t===$&&B.c()
return new C.b_Y(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ih(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:657}
C.eu3.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bT,x.w).w.a.a*0.55)w.avd()
else w.chm()},
$S:51}
C.eu2.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fBm.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:444}
C.fBv.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fBs(d),w,w),B.bK(!1,D.foJ,w,w,!0,w,w,new C.fBt(d,this.b,v),w,w),B.bJ(A.aQc,new C.fBu(d,v,this.c),w)],x.p),w,w,L.tb,new B.a7(320,w,t,w),w,w,w,w,D.fqb,w)},
$S:19}
C.fBs.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fBt.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.fXh(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fBu.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aOR(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOf(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fBl.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ccO.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fBr.prototype={
$1(d){return d.ag()},
$S:z+14}
C.f9K.prototype={
$1(d){return C.fXf(C.Vj(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fK6.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:94}
C.fK7.prototype={
$4(d,e,f,g){var w=A.cs.aw(0,e.gp(0))
return B.dc(B.eb(A.A,D.fPb,0.94+w*0.06,null,null),w)},
$S:442}
C.fK8.prototype={
$1(d){var w=this
return new C.Vl(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.etx.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ett.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.etw.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vm(u,this.b,w.gaN_(),v,null)},
$S:z+99}
C.etu.prototype={
$0(){return this.a.f=!0},
$S:0}
C.etv.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ety.prototype={
$0(){return this.a.f=!0},
$S:0}
C.etz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.etC.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etD.prototype={
$0(){var w=this.a
return w.m(new C.etB(w))},
$S:0}
C.etB.prototype={
$0(){return this.a.d="one"},
$S:0}
C.etE.prototype={
$0(){var w=this.a
return w.m(new C.etA(w))},
$S:0}
C.etA.prototype={
$0(){return this.a.d="all"},
$S:0}
C.etF.prototype={
$1(d){return this.a.bHB(d,this.b)},
$S:z+100}
C.ets.prototype={
$0(){var w=this.a
return w.m(new C.etr(w,this.b))},
$S:0}
C.etr.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.etG.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.etH.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.etI.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.etJ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.ePG)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ena.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.en9())},
$S:0}
C.en9.prototype={
$0(){},
$S:0}
C.enb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fH()},
$S:8}
C.en6.prototype={
$1(d){return this.a.m(new C.en5())},
$S:2}
C.en5.prototype={
$0(){},
$S:0}
C.en7.prototype={
$1(d){return this.a.aYn()},
$S:2}
C.en8.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etM.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pK(),$async$$0)
case 2:if(t.c!=null)t.m(new C.etL(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.etL.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fvG.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.kc(this.c,new C.fvF(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:231}
C.fvF.prototype={
$3(d,e,f){return new C.Ih(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fvH.prototype={
$1(d){var w=null
return B.oh(!1,B.av(new C.btA(this.a,this.b,w),w,w,w),w,x.z)},
$S:309}
C.fvL.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmu(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n2,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmu(),$async$$0)
case 5:s=$.aU.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pO))throw B.V("Could not draw the slide.")
u=r.lT(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fvM.prototype={
bjp(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hq(A.fX),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hM([J.eR(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fOa(t)
w=4
return B.b(new B.pU(s,"load",!1,x.ev).gL(0).cM(0,A.ju),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bjp(d)},
$S:1710}
C.fvI.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:147}
C.fvJ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fO(0)},
$S:147}
C.fvK.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f45.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eZy,A.L,w,w)},
$S:1711}
C.f46.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m_(A.bm,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.ebG.prototype={
$1(d){this.a.Zo()
return null},
$S:12}
C.ebE.prototype={
$0(){return this.a.e=D.bnr},
$S:0}
C.ebF.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.cfm.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cfn.prototype={
$2(d,e){return(d|e)>>>0},
$S:78};(function aliases(){var w=C.aKP.prototype
w.btY=w.q
w=C.aKi.prototype
w.btq=w.q
w=C.aK3.prototype
w.bta=w.q
w=C.aKh.prototype
w.btp=w.q
w=C.aKN.prototype
w.btW=w.q
w=C.aM7.prototype
w.bvq=w.q
w=C.aIZ.prototype
w.bs2=w.q
w=C.aL0.prototype
w.bu9=w.q
w=C.aL1.prototype
w.bua=w.q
w=C.b1D.prototype
w.boH=w.aBP})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i1Y","amB",104)
v(C.aHY.prototype,"gc1z","Yk",0)
var r
u(r=C.awz.prototype,"gcu3","cu4",38)
v(r,"gc2k","act",0)
v(r=C.awv.prototype,"gaWU","DF",3)
v(r,"gc2h","c2i",3)
v(r,"gavw","xo",0)
v(r,"gavx","Ie",0)
t(C,"i2o","hyN",105)
v(C.aCD.prototype,"gc4T","c4U",3)
s(C,"i2z",0,null,["$4$paper$photo$request$template"],["fCL"],106,0)
s(C,"i2y",0,null,["$5$doc$history$instruction$photo$template"],["bAJ"],107,0)
v(r=C.aCW.prototype,"gc5A","Iz",0)
v(r,"gbH3","Wc",0)
v(r,"gc5D","adi",0)
v(r,"gc5C","Za",0)
v(r,"gaY2","DZ",0)
v(C.aD_.prototype,"gc5I","Zc",0)
v(r=C.aEm.prototype,"gaYf","Pk",0)
v(r,"gcm6","b1y",3)
v(r,"gcvs","aA_",86)
v(r,"gbKO","a9l",0)
v(r,"gc68","Aa",0)
v(r=C.aGg.prototype,"gcg5","a_x",0)
v(r,"gcgd","a_A",0)
v(r,"gbA0","a7O",0)
v(r,"gc6c","adu",0)
v(C.aGf.prototype,"gc6d","adv",0)
v(C.aAg.prototype,"gbz_","a7B",0)
v(C.ayE.prototype,"gc6e","Zn",0)
w(C,"i2M","i0F",12)
w(C,"i2K","hYC",12)
w(C,"i2L","i_F",12)
v(r=C.aDf.prototype,"gcyA","cyB",3)
v(r,"gckm","ckn",3)
u(r,"gE4","ae9",7)
v(r,"gbEG","aqy",3)
u(r,"gE5","aZw",7)
v(r,"gc8l","adR",0)
v(r,"gc7c","adQ",0)
v(r,"gcav","aea",0)
v(r,"gbH0","a8X",0)
v(r,"gcbo","ZX",0)
v(r,"gcbp","aer",0)
v(r,"gcbW","aey",0)
v(r,"gcaI","aed",0)
v(r,"gbKY","a9p",0)
v(r,"gaQq","aQr",3)
v(r,"gaPC","aPD",3)
v(r,"gaLk","aLl",3)
v(r,"gaPB","aro",3)
u(r,"gbzg","bzh",80)
v(r,"gazx","b4A",3)
v(r,"gc7e","c7f",3)
v(r,"gbVW","bVX",3)
v(r,"gbJr","bJs",3)
v(r=C.aDi.prototype,"gcxs","cxt",3)
v(r,"gcx7","cx8",3)
t(C,"i2N","i0W",2)
v(r=C.aDg.prototype,"gc6k","IE",0)
v(r,"gco5","QL",0)
v(r,"gc6h","ID",0)
v(r,"gczQ","a22",0)
v(r,"gcc7","aeF",0)
v(C.aDe.prototype,"gc6l","aYn",3)
v(r=C.aDh.prototype,"gbLJ","a9z",0)
u(r,"gc6i","c6j",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nP,C.Rc,C.bGh,C.bEE,C.cvk,C.cvi,C.bMo,C.b7j,C.cvj,C.bDe,C.cfg,C.cfe,C.cff,C.cfd,C.arJ,C.cfc,C.bNh,C.of,C.aDR,C.ji,C.nC,C.a7b,C.z9,C.ld,C.or,C.m1,C.zb,C.nG,C.a7j,C.aq6,C.b_Z,C.eb5,C.la,C.Ej,C.eu,C.iW,C.Ea,C.xi,C.eI,C.lD,C.hZ,C.jB,C.a7k,C.aem,C.b0_,C.b1D,C.a28])
u(B.kg,[C.cDa,C.bXV,C.fqT,C.cEG,C.cE2,C.fwo,C.dWm,C.dWl,C.ebJ,C.ebI,C.fxN,C.faS,C.faT,C.cbb,C.cbc,C.cbd,C.eg6,C.eOz,C.eNX,C.eNW,C.eP_,C.eOx,C.eOq,C.eOJ,C.ePp,C.fi_,C.eVn,C.eVm,C.eVQ,C.eb8,C.fBi,C.dS5,C.fHF,C.fy9,C.ccG,C.ccE,C.ccJ,C.fyE,C.fyF,C.fyG,C.fyH,C.ccq,C.ccr,C.dEj,C.ccn,C.fyD,C.f1E,C.dQh,C.ccg,C.eaP,C.fwd,C.eqL,C.er9,C.er6,C.er5,C.erg,C.erf,C.esL,C.esK,C.er_,C.eqZ,C.enz,C.eoJ,C.erI,C.et2,C.et1,C.eow,C.epH,C.eng,C.cZR,C.etY,C.etZ,C.etU,C.etV,C.etW,C.etX,C.eu1,C.ccO,C.etx,C.etI,C.cfn])
u(B.hT,[C.cDb,C.cDc,C.bNi,C.fon,C.bXU,C.bXX,C.fE9,C.f2C,C.f2t,C.f2J,C.f9L,C.f9M,C.fqU,C.fqS,C.fDE,C.fo3,C.fEv,C.cEw,C.cEB,C.cED,C.cEz,C.cEE,C.cEx,C.cEF,C.cEs,C.cEp,C.cEo,C.cEv,C.cDY,C.cDW,C.fvq,C.fvr,C.fe9,C.fwp,C.fwv,C.fdc,C.c7t,C.fvo,C.fvp,C.fqf,C.fqg,C.fwu,C.fwq,C.fws,C.fwt,C.fwr,C.fHX,C.fqj,C.fqk,C.fqn,C.fqo,C.fqr,C.fqs,C.fJp,C.fbi,C.fJA,C.ef0,C.ef1,C.ef2,C.eeJ,C.eeV,C.eeW,C.eeY,C.cba,C.cb8,C.cb9,C.fw4,C.fw6,C.fw5,C.faU,C.faV,C.fJD,C.egb,C.egc,C.eg3,C.eg4,C.eg7,C.eg8,C.fJT,C.ePq,C.eOQ,C.eOA,C.eON,C.eNS,C.eNT,C.eNU,C.eNY,C.eNZ,C.ePf,C.ePm,C.ePo,C.eOZ,C.eP0,C.eP4,C.eP5,C.eP6,C.ePa,C.eP1,C.eP2,C.eO9,C.eOa,C.eOb,C.eOc,C.eOd,C.eOe,C.eOf,C.eOg,C.eOh,C.eNv,C.eNw,C.eNx,C.eNy,C.eNA,C.eNB,C.eO3,C.eO4,C.eO5,C.eO6,C.eO7,C.eNF,C.eNG,C.eNH,C.eNI,C.eOp,C.eOI,C.ftt,C.fts,C.ccx,C.fhZ,C.fBe,C.fB7,C.fBa,C.fz7,C.fz8,C.fz9,C.ftA,C.ftz,C.fty,C.ftw,C.faP,C.faQ,C.faR,C.fK4,C.eVp,C.eVq,C.eVj,C.eVd,C.eVJ,C.eVK,C.eVM,C.eVN,C.eVI,C.fK3,C.eV4,C.fhe,C.eb7,C.fBg,C.fBh,C.fBj,C.fBc,C.fBd,C.fJh,C.dgH,C.dgN,C.eb6,C.f7k,C.f7m,C.f7l,C.f7j,C.fuE,C.fuG,C.f9k,C.fAJ,C.fAK,C.fAL,C.fAW,C.fB0,C.fB1,C.fB2,C.fB3,C.fB4,C.fB5,C.fB6,C.fAM,C.fAN,C.fAO,C.fAP,C.fAQ,C.fAR,C.fAS,C.fAT,C.fAU,C.fAV,C.fAX,C.fAY,C.fAZ,C.fB_,C.fsu,C.fgN,C.fgM,C.fBp,C.dS6,C.dS4,C.eUe,C.c74,C.c76,C.fHH,C.d6_,C.d61,C.fHG,C.fHE,C.fK2,C.fy5,C.d5A,C.fqv,C.fqw,C.ccv,C.ccw,C.ccu,C.cck,C.ccl,C.cch,C.cci,C.ccj,C.ccM,C.ccH,C.ccC,C.ccD,C.ccF,C.ccI,C.ccK,C.fyI,C.ccp,C.ccs,C.cct,C.ccz,C.ccA,C.fBw,C.fAD,C.cco,C.ccm,C.fyC,C.fjk,C.ccf,C.eRS,C.fm9,C.eto,C.epO,C.epP,C.ero,C.erc,C.erd,C.epb,C.et9,C.eta,C.etb,C.eoA,C.eqS,C.eqU,C.equ,C.eqr,C.epK,C.epL,C.eqB,C.eoC,C.eqN,C.eqO,C.eqM,C.eqQ,C.eqP,C.er7,C.er8,C.era,C.er3,C.eoV,C.eoS,C.erh,C.eoK,C.et8,C.eni,C.eoN,C.eoM,C.eo0,C.eo5,C.eo3,C.eo1,C.etg,C.eth,C.eti,C.etf,C.esN,C.esM,C.esG,C.esI,C.esy,C.et6,C.et4,C.enq,C.enm,C.epI,C.eo9,C.enB,C.enA,C.enX,C.enY,C.ep9,C.eob,C.eof,C.er0,C.esz,C.esA,C.esB,C.esC,C.eoE,C.eoF,C.eoG,C.eqa,C.ep5,C.eoY,C.ep4,C.eqk,C.eql,C.es7,C.es9,C.est,C.esv,C.esa,C.esb,C.eo7,C.epN,C.epM,C.esX,C.eov,C.eon,C.eoo,C.eor,C.eos,C.eqp,C.ept,C.epu,C.epv,C.epw,C.epx,C.epy,C.epz,C.epA,C.epB,C.epC,C.epD,C.erl,C.cZO,C.cZP,C.eu3,C.fBm,C.fBv,C.fBl,C.fBr,C.f9K,C.fK6,C.fK7,C.fK8,C.etw,C.etF,C.enb,C.en6,C.en7,C.fvG,C.fvF,C.fvH,C.fvM,C.fvI,C.fvJ,C.f45,C.f46,C.ebG,C.cfm])
u(B.j4,[C.cDd,C.f2y,C.f2D,C.f2E,C.f2z,C.f2A,C.f2B,C.f2r,C.f2s,C.f2u,C.f2v,C.f2I,C.f2H,C.f2x,C.f2w,C.f2F,C.f2G,C.f2L,C.f2M,C.f2K,C.cEy,C.cEC,C.cEA,C.cEq,C.cEr,C.cEt,C.cEm,C.cEn,C.cEu,C.cEl,C.cEk,C.cEj,C.cDN,C.cDM,C.cDP,C.cDX,C.cDQ,C.cDO,C.cDS,C.cDT,C.cDU,C.cDR,C.cDV,C.cDZ,C.cE_,C.cE0,C.cE1,C.fqd,C.fqe,C.fqb,C.fqc,C.e6u,C.e6s,C.e6t,C.e6v,C.e6w,C.dWk,C.fqh,C.fqi,C.fql,C.fqm,C.fqp,C.fqq,C.ebH,C.fyc,C.fyb,C.ef_,C.eeZ,C.eeD,C.eez,C.eeK,C.eeL,C.eeM,C.eeF,C.eeG,C.eeH,C.eeI,C.eeE,C.eeB,C.eeC,C.eeS,C.eeT,C.eeR,C.eeU,C.eeQ,C.eeP,C.eeO,C.eeX,C.eeN,C.eeA,C.ega,C.efZ,C.eg_,C.eg5,C.eg0,C.eg2,C.eg1,C.eg9,C.eOi,C.eOG,C.eO1,C.eO2,C.eO_,C.eO0,C.eOM,C.eOL,C.eOK,C.eOP,C.eOO,C.eNR,C.eNV,C.eNQ,C.eNP,C.eNM,C.eNO,C.eNN,C.ePn,C.ePg,C.ePe,C.ePh,C.ePd,C.ePi,C.ePc,C.ePj,C.ePk,C.ePl,C.ePb,C.eOY,C.eOT,C.eP3,C.eOX,C.eP7,C.eOW,C.eP8,C.eOV,C.eP9,C.eOU,C.eOD,C.eOC,C.eOE,C.eOB,C.eOF,C.eOv,C.eOu,C.eOw,C.eOt,C.eOs,C.eOr,C.eNz,C.eNu,C.eNJ,C.eNE,C.eNK,C.eND,C.eNL,C.eNC,C.eOy,C.eOm,C.eOl,C.eOn,C.eOk,C.eOo,C.eOj,C.eOH,C.eOS,C.eOR,C.eO8,C.fB9,C.fBb,C.fBf,C.ftx,C.fvY,C.fvW,C.fvX,C.eVr,C.eVs,C.eVo,C.eVi,C.eVh,C.eVk,C.eVl,C.eV7,C.eV8,C.eVa,C.eVb,C.eVc,C.eV9,C.eVe,C.eVF,C.eVG,C.eVE,C.eVH,C.eVD,C.eVC,C.eVB,C.eVL,C.eVA,C.eVz,C.eVy,C.eVO,C.eVx,C.eVP,C.eVw,C.eVv,C.eVf,C.eVg,C.eVu,C.eVt,C.eV0,C.eV1,C.eV2,C.eV3,C.eV_,C.eV5,C.eV6,C.dgG,C.dgI,C.dgL,C.dgM,C.dgK,C.dgJ,C.fuF,C.fsv,C.c75,C.c77,C.d5T,C.d5Y,C.d5Z,C.d5X,C.d5W,C.d60,C.d5V,C.d5U,C.d62,C.fHD,C.dcF,C.dcG,C.dcH,C.fqt,C.fqu,C.ccN,C.enc,C.end,C.ene,C.enf,C.fji,C.fjj,C.dQj,C.dQi,C.d2P,C.d2O,C.etq,C.etp,C.epQ,C.esw,C.etm,C.erm,C.etc,C.etd,C.etn,C.eqv,C.eoy,C.eoz,C.eqT,C.eqt,C.eqq,C.eqs,C.eqw,C.eqx,C.eqy,C.eqz,C.eqA,C.eqC,C.eoD,C.eqF,C.eqG,C.eqH,C.eqI,C.eqJ,C.eqK,C.eqE,C.eqR,C.er4,C.er2,C.erb,C.eqD,C.eoT,C.eoU,C.eoW,C.ere,C.eri,C.enx,C.eoR,C.eoP,C.erq,C.eoL,C.erp,C.eoB,C.epc,C.et7,C.esx,C.eny,C.env,C.enl,C.enh,C.enj,C.eoO,C.eo_,C.eo4,C.eo2,C.enZ,C.er1,C.etj,C.esJ,C.esE,C.esF,C.esH,C.epG,C.epF,C.et5,C.eno,C.enp,C.enr,C.ens,C.enw,C.enn,C.ern,C.ete,C.epJ,C.eo8,C.enk,C.epa,C.ent,C.enC,C.enD,C.enE,C.enP,C.enS,C.enT,C.enU,C.enV,C.enW,C.enF,C.enG,C.enH,C.enI,C.enJ,C.enK,C.enL,C.enM,C.enN,C.enO,C.enQ,C.enR,C.ep8,C.ep7,C.ep6,C.enu,C.eoc,C.eoa,C.eod,C.eoe,C.eoQ,C.eqX,C.eqY,C.eqV,C.eqW,C.esD,C.eoI,C.eoH,C.eq9,C.eq8,C.eqb,C.eq7,C.eqc,C.eq6,C.eqd,C.eq5,C.eqe,C.eq4,C.eqf,C.eq3,C.eqg,C.eq2,C.eqh,C.eq1,C.epV,C.epW,C.epX,C.epU,C.epY,C.epT,C.epZ,C.epS,C.eq_,C.epR,C.eq0,C.ep2,C.ep3,C.eoX,C.eoZ,C.ep_,C.ep0,C.ep1,C.etk,C.etl,C.eqj,C.eqi,C.eqm,C.erJ,C.erK,C.erL,C.erW,C.es6,C.esh,C.eso,C.esp,C.esq,C.esr,C.ess,C.erM,C.erN,C.erO,C.erP,C.erQ,C.erR,C.erS,C.erT,C.erU,C.erV,C.erX,C.erY,C.erZ,C.es_,C.es0,C.es1,C.es2,C.es3,C.es4,C.erz,C.es5,C.erH,C.erG,C.es8,C.erF,C.erv,C.esu,C.erE,C.eru,C.ers,C.erD,C.ert,C.err,C.esc,C.erC,C.esd,C.ese,C.esf,C.esg,C.erB,C.esi,C.esj,C.esk,C.erA,C.esl,C.ery,C.esm,C.erx,C.esn,C.erw,C.eo6,C.esQ,C.esP,C.esR,C.esO,C.epf,C.epe,C.epg,C.epd,C.et0,C.esW,C.et_,C.esS,C.esT,C.esU,C.esV,C.esY,C.esZ,C.et3,C.eox,C.eok,C.eol,C.eom,C.eoj,C.eoq,C.eop,C.eoi,C.eoh,C.eot,C.eog,C.eou,C.eqo,C.eqn,C.eps,C.epr,C.epq,C.epp,C.epo,C.epn,C.epm,C.epl,C.epi,C.epk,C.epj,C.eph,C.epE,C.erj,C.erk,C.cZQ,C.d_c,C.d_d,C.cZK,C.cZJ,C.cZN,C.cZL,C.cZM,C.eu0,C.etR,C.eu_,C.etS,C.etT,C.etN,C.etO,C.etP,C.etQ,C.eu2,C.fBs,C.fBt,C.fBu,C.ett,C.etu,C.etv,C.ety,C.etz,C.etC,C.etD,C.etB,C.etE,C.etA,C.ets,C.etr,C.etG,C.etH,C.etJ,C.etK,C.ena,C.en9,C.en5,C.en8,C.etM,C.etL,C.fvL,C.fvK,C.ebE,C.ebF])
t(C.aQb,B.J)
u(B.m6,[C.a36,C.aw1,C.auI,C.xg,C.xj,C.kP,C.t7,C.B4,C.rl,C.vL,C.aqG,C.Ii,C.aq5,C.uw,C.mr,C.hw,C.a7W])
u(C.bMo,[C.cvl,C.bMp])
u(C.cfg,[C.cfk,C.arI])
t(C.cfj,C.cfe)
t(C.cfi,C.cfd)
t(C.cfl,C.cfi)
t(C.cfh,C.cff)
t(C.cfb,C.cfc)
t(C.b8S,B.oI)
t(C.cpi,B.au9)
t(C.a7I,B.x3)
t(C.aUE,B.dG)
t(C.azz,B.at2)
u(B.ag,[C.a09,C.XX,C.XV,C.aph,C.V6,C.V9,C.a_d,C.a_I,C.a_H,C.aCP,C.Z5,C.MZ,C.YE,C.YZ,C.anj,C.aHF,C.Ul,C.ayo,C.a71,C.Nq,C.axL,C.Jj,C.ZQ,C.Vl,C.Vm,C.aDd,C.aqa,C.a72])
u(B.ah,[C.aHY,C.awz,C.awv,C.aCD,C.aCW,C.aD_,C.aEm,C.aGg,C.aGf,C.aKP,C.aAg,C.aKi,C.ayE,C.beK,C.aK3,C.aM7,C.aKh,C.bcD,C.aKN,C.aL0,C.aIZ,C.bbp,C.aL1,C.aDg,C.bj9,C.aDe,C.aDh,C.biT])
u(B.au,[C.awx,C.acu,C.abU,C.bhV,C.acx,C.aec,C.b_B,C.brc,C.b_V,C.bkt,C.bpM,C.aYP,C.b_Y,C.acA,C.acS,C.b_W,C.Ih,C.aYS,C.bbE,C.P2,C.Jq,C.bgh,C.bgg,C.btA])
u(B.GO,[C.bb6,C.bsB,C.aIh,C.bdN,C.bq9])
u(B.mJ,[C.bb5,C.b7B,C.bq6,C.baD,C.bea,C.bgn,C.bdg,C.be7,C.bdP,C.bmE,C.b8K,C.b8n,C.btx,C.bqz,C.bpI,C.bd9,C.b_T,C.boF,C.bpF])
t(C.biQ,C.aKP)
t(C.bic,C.aKi)
t(C.bhX,C.aK3)
t(C.bt3,C.aM7)
t(C.bi9,C.aKh)
t(C.biO,C.aKN)
t(C.bvS,C.aL0)
t(C.aDf,C.bvS)
t(C.bbq,C.aIZ)
t(C.aDi,C.aL1)
t(C.bto,B.iP)
t(C.a7V,B.ko)
t(C.cfo,C.b1D)
t(C.ahm,C.a28)
u(B.WX,[C.aQ1,C.aRw])
t(C.avD,C.aQ1)
w(C.aKP,B.c9)
w(C.aKi,B.c9)
w(C.aK3,B.c9)
w(C.aKh,B.c9)
w(C.aKN,B.c9)
w(C.aM7,B.c9)
w(C.aIZ,B.eV)
w(C.aL0,B.c9)
v(C.bvS,B.ey)
w(C.aL1,B.c9)})()
B.jU(b.typeUniverse,JSON.parse('{"aQL":{"hF":["aQL"]},"nP":{"aQL":[],"hF":["aQL"]},"aQb":{"J":["Rc"],"J.E":"Rc"},"b8S":{"oI":[]},"a7I":{"x3":[],"o8":[]},"aUE":{"dG":[],"cz":[],"r":[]},"azz":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a09":{"ag":[],"r":[]},"aHY":{"ah":["a09"]},"XX":{"ag":[],"r":[]},"XV":{"ag":[],"r":[]},"awz":{"ah":["XX"]},"awv":{"ah":["XV"]},"awx":{"au":[],"r":[]},"aph":{"ag":[],"r":[]},"aCD":{"ah":["aph"]},"acu":{"au":[],"r":[]},"abU":{"au":[],"r":[]},"acx":{"au":[],"r":[]},"aec":{"au":[],"r":[]},"bhV":{"au":[],"r":[]},"V6":{"ag":[],"r":[]},"aCW":{"ah":["V6"]},"b_B":{"au":[],"r":[]},"bb6":{"aB":[]},"bb5":{"aB":[]},"bsB":{"aB":[]},"b7B":{"aB":[]},"bq6":{"aB":[]},"V9":{"ag":[],"r":[]},"aD_":{"ah":["V9"]},"baD":{"aB":[]},"a_d":{"ag":[],"r":[]},"aEm":{"ah":["a_d"]},"bea":{"aB":[]},"a_I":{"ag":[],"r":[]},"a_H":{"ag":[],"r":[]},"aCP":{"ag":[],"r":[]},"Z5":{"ag":[],"r":[]},"aGg":{"ah":["a_I"]},"aGf":{"ah":["a_H"]},"biQ":{"ah":["aCP"]},"bgn":{"aB":[]},"aAg":{"ah":["Z5"]},"brc":{"au":[],"r":[]},"b_V":{"au":[],"r":[]},"bkt":{"au":[],"r":[]},"MZ":{"ag":[],"r":[]},"YE":{"ag":[],"r":[]},"bic":{"ah":["MZ"]},"bpM":{"au":[],"r":[]},"bdg":{"aB":[]},"aYP":{"au":[],"r":[]},"ayE":{"ah":["YE"]},"YZ":{"ag":[],"r":[]},"beK":{"ah":["YZ"]},"be7":{"aB":[]},"bdP":{"aB":[]},"bmE":{"aB":[]},"b8K":{"aB":[]},"b8n":{"aB":[]},"btx":{"aB":[]},"bqz":{"aB":[]},"bpI":{"aB":[]},"bd9":{"aB":[]},"anj":{"ag":[],"r":[]},"b_Y":{"au":[],"r":[]},"bhX":{"ah":["anj"]},"acA":{"au":[],"r":[]},"acS":{"au":[],"r":[]},"aHF":{"ag":[],"r":[]},"Ul":{"ag":[],"r":[]},"Ih":{"au":[],"r":[]},"ayo":{"ag":[],"r":[]},"a71":{"ag":[],"r":[]},"b_W":{"au":[],"r":[]},"b_T":{"aB":[]},"bt3":{"ah":["aHF"]},"aIh":{"aB":[]},"bi9":{"ah":["Ul"]},"bcD":{"ah":["ayo"]},"biO":{"ah":["a71"]},"aYS":{"au":[],"r":[]},"bdN":{"aB":[]},"boF":{"aB":[]},"bpF":{"aB":[]},"axL":{"ag":[],"r":[]},"Jj":{"ag":[],"r":[]},"ZQ":{"ag":[],"r":[]},"Jq":{"au":[],"r":[]},"Nq":{"ag":[],"r":[]},"aDf":{"ah":["Nq"],"ey":[]},"bbq":{"ah":["axL"]},"bbE":{"au":[],"r":[]},"bbp":{"ah":["Jj"]},"P2":{"au":[],"r":[]},"aDi":{"ah":["ZQ"]},"bq9":{"aB":[]},"bgh":{"au":[],"r":[]},"bgg":{"au":[],"r":[]},"Vl":{"ag":[],"r":[]},"Vm":{"ag":[],"r":[]},"aDd":{"ag":[],"r":[]},"aqa":{"ag":[],"r":[]},"aDg":{"ah":["Vl"]},"bj9":{"ah":["Vm"]},"aDe":{"ah":["aDd"]},"bto":{"iP":[]},"aDh":{"ah":["aqa"]},"btA":{"au":[],"r":[]},"a72":{"ag":[],"r":[]},"biT":{"ah":["a72"]},"a7V":{"ko":["fr<eN>"],"k9":["fr<eN>"]},"ahm":{"a28":[]},"aQ1":{"j_":[],"fe":[]},"avD":{"j_":[],"fe":[]},"aRw":{"j_":[],"fe":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lb"),U:w("vh<pT>"),bz:w("w"),M:w("eK<n>"),bo:w("jv"),g7:w("LH"),gc:w("ay<it?>"),bq:w("ay<~>"),cc:w("LU"),fS:w("DB"),an:w("Hu"),bm:w("O<Rc>"),X:w("O<a2g>"),f3:w("O<aQL>"),aK:w("O<n4>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lv>"),d5:w("O<ay<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<ay<dD>>"),fG:w("O<ay<~>>"),aF:w("O<na>"),cd:w("O<ai<ji>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mn>"),h:w("O<ji>"),gE:w("O<z9>"),k:w("O<of>"),g:w("O<lD>"),D:w("O<hZ>"),u:w("O<eI>"),m:w("O<uw>"),i:w("O<hw>"),aC:w("O<a7j>"),o:w("O<zb>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hn>"),cR:w("O<iN>"),J:w("O<ja>"),gx:w("O<p1<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cP>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),eR:w("O<fe>"),fT:w("O<b7j>"),bx:w("O<aDR>"),gz:w("O<aem>"),x:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<of>"),R:w("ai<hZ>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("K<hw,r>"),eC:w("K<nG,n>"),cT:w("K<jB,C>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,pw>"),gh:w("K<mr,jk<mr>>"),w:w("iz"),ei:w("it"),g2:w("rb"),fB:w("Ea"),b6:w("z9"),gX:w("a7b"),dt:w("ld"),ea:w("of"),bt:w("lD"),I:w("hZ"),F:w("eI"),fO:w("mr"),ff:w("uw"),fP:w("hw"),Q:w("vL"),dO:w("aq6"),a:w("cq"),C:w("aC"),dw:w("arJ"),di:w("a7W"),Y:w("eN"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EF"),dB:w("dx<u>"),bJ:w("dx<n>"),_:w("e_<n>"),N:w("n"),fw:w("pT"),bO:w("ar"),K:w("bo<u>"),b:w("bo<N>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kc<lD>"),cI:w("kc<n>"),cl:w("kc<N>"),b4:w("a2<la>"),a8:w("a2<m1>"),fR:w("a2<+(n,n)>"),co:w("e7<u>"),l:w("r"),b2:w("bW<~>"),ev:w("pU<dX>"),dT:w("bg<~>"),cQ:w("azz"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a4<n,@>>?"),aT:w("ai<hZ>?"),c:w("ai<@>?"),aP:w("it?"),af:w("hZ?"),go:w("b0_?"),a6:w("a7k?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUR=new B.bH(A.ax,null,null,N.amS,null)
D.aV0=new B.da(0,-0.15)
D.aV2=new B.da(0.62,0)
D.aV5=new B.da(-0.35,-0.45)
D.aVf=new B.da(0.9,-0.85)
D.aKV=new B.aW(30,30)
D.aWx=new B.bq(D.aKV,D.aKV,A.hd,A.hd)
D.aWL=new B.aA(A.b7,1,A.q,-1)
D.bf5=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aWX=new B.aA(D.bf5,1,A.q,-1)
D.aX8=new B.aA(A.aE,1.5,A.q,-1)
D.aXd=new B.aA(A.b7,1.6,A.q,-1)
D.aXt=new B.aA(A.aE,1.4,A.q,-1)
D.aYR=new B.o(null,null,null,null,null,K.Gi,A.a6)
D.bTH=new B.a8(A.a3,A.a7,A.x,G.a2b,null,null)
D.aYZ=new B.o(null,null,null,null,null,D.bTH,A.a6)
D.aa0=new B.o(A.aB,null,null,A.rO,null,null,A.n)
D.b9d=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bf2=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cQv=w([D.b9d,D.bf2],x.O)
D.ebi=new B.bS(A.A,0.5,A.x,null,0,D.cQv,null,null)
D.aZh=new B.o(null,null,null,null,null,D.ebi,A.a6)
D.Wg=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aXJ=new B.bP(P.uJ,A.Y,A.Y,A.Y)
D.aZj=new B.o(D.Wg,null,D.aXJ,null,null,null,A.n)
D.bVq=new B.a8(A.a3,A.a7,A.x,A.Py,null,null)
D.aZq=new B.o(null,null,null,null,null,D.bVq,A.a6)
D.abz=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZs=new B.o(D.abz,null,null,A.qq,null,null,A.n)
D.aZw=new B.o(A.kd,null,null,null,null,null,A.a6)
D.aXQ=new B.bP(A.zS,A.Y,A.Y,A.Y)
D.aZz=new B.o(A_.acF,null,D.aXQ,A.m2,null,null,A.n)
D.DD=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aZG=new B.o(null,null,null,null,null,E.vG,A.a6)
D.cVg=w([E.adx,A.bX],x.O)
D.bV1=new B.a8(A.b0,A.b6,A.x,D.cVg,null,null)
D.aZK=new B.o(null,null,null,A.m2,null,D.bV1,A.n)
D.d4x=w([A.bk,A.dS,A.jO],x.O)
D.a0m=new B.a8(A.ax,A.aC,A.x,D.d4x,null,null)
D.aZX=new B.o(null,null,null,null,null,D.a0m,A.n)
D.aZY=new B.o(D.abz,null,null,A.kz,null,null,A.n)
D.clv=w([A.dq,A.bk],x.O)
D.bUU=new B.a8(A.ax,A.aC,A.x,D.clv,null,null)
D.b_1=new B.o(null,null,null,null,null,D.bUU,A.n)
D.b_b=new B.o(null,null,null,null,null,G.tU,A.a6)
D.b_u=new B.o(A.adz,null,null,null,null,null,A.a6)
D.ba_=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaa=new B.ac(0,A.G,D.ba_,A.Rn,28)
D.b1B=new B.aUR()
D.b29=new C.cpi()
D.b2l=new C.b8S()
D.aaG=new B.cr(A.A,null,null,A.a0b,null)
D.b4S=new B.fj(null,null,null,null,null,E.mW,null,null,null,null)
D.b2S=new B.cr(A.A,null,null,D.b4S,null)
D.bEI=new B.ae(A.dW,28,A.c,null,null,null)
D.b3l=new B.cr(A.A,null,null,D.bEI,null)
D.b4P=new B.fj(2,null,null,null,null,A.bY,null,null,null,null)
D.b3H=new B.cr(A.A,null,null,D.b4P,null)
D.bF1=new B.ae(K.Nc,40,A.bI,null,null,null)
D.b3I=new B.cr(A.A,null,null,D.bF1,null)
D.b5E=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b5Q=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b6d=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b6j=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b6P=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b75=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b76=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Kb=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7v=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b7A=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abU=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b8j=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b92=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.ac7=new B.w(1,1,1,0.9725490196078431,A.t)
D.b9l=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9w=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b9z=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b9K=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.ba4=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bbq=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.W0=new B.w(0.8509803921568627,0,0,0,A.t)
D.bby=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bbF=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.acW=new B.w(0.6,0,0,0,A.t)
D.acY=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bd1=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.t9=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bdr=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bdR=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bed=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adJ=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Wq=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Ap=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KG=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j7=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.ae8=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WB=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bhu=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bhY=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bib=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.WV=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bjj=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.x7=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bjO=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bk5=new B.hE(A.b2,!0,null,null)
D.f4M=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fub=new B.x("Bio link",null,D.f4M,null,null,null,null,null,null,null,null,null)
D.b3B=new B.cr(A.A,null,null,D.fub,null)
D.bkl=new B.hE(A.Vn,!0,D.b3B,null)
D.L4=new C.a36(0,"none")
D.aff=new C.a36(1,"deflate")
D.afg=new C.a36(2,"bzip2")
D.bl1=new B.ki(0.165,0.84,0.44,1)
D.cVz=w([A.cd,A.dO,A.aE],x.O)
D.bUa=new B.a8(A.ax,A.aC,A.x,D.cVz,null,null)
D.aYW=new B.o(null,null,null,null,null,D.bUa,A.n)
D.bNO=new B.ae(A.eR,null,A.ad,null,null,null)
D.b4c=new B.cr(A.A,null,null,D.bNO,null)
D.blz=new B.kM(D.aYW,A.bd,D.b4c,null)
D.bhK=new B.w(0.058823529411764705,1,1,1,A.t)
D.cYD=w([A.bF,A.qB,A.qB,D.bhK],x.O)
D.cCx=w([0,0.32,0.7,1],x.x)
D.bUJ=new B.a8(A.ax,A.aC,A.x,D.cYD,D.cCx,null)
D.aYL=new B.o(null,null,null,null,null,D.bUJ,A.n)
D.blF=new B.kM(D.aYL,A.bd,null,null)
D.bmF=new B.mf(1,1,null,null,null,A.bm,null)
D.bmI=new B.mf(1,null,null,null,null,D.WB,null)
D.bnb=new B.b9(125e4)
D.bnh=new B.b9(17e4)
D.bnr=new B.b9(35964e8)
D.bnx=new B.b9(55e4)
D.bnB=new B.b9(68e4)
D.bo1=new B.ia(0,0,0,5)
D.boi=new B.Q(0,16,16,0)
D.bol=new B.Q(0,18,0,8)
D.bot=new B.Q(0,36,0,36)
D.boA=new B.Q(0,54,0,0)
D.boH=new B.Q(10,0,10,3)
D.boS=new B.ia(10,16,10,10)
D.bp3=new B.Q(10,6,4,6)
D.bp6=new B.Q(10,8,10,6)
D.agb=new B.Q(11,8,11,11)
D.bpa=new B.Q(12,0,12,24)
D.bpm=new B.Q(12,12,12,4)
D.bpp=new B.Q(12,12,8,12)
D.bpE=new B.Q(12,8,8,12)
D.bpZ=new B.Q(14,14,14,0)
D.bq3=new B.Q(14,14,14,90)
D.bqm=new B.Q(16,10,16,16)
D.bqn=new B.Q(16,10,16,20)
D.ah1=new B.Q(16,6,16,28)
D.bqW=new B.Q(18,0,18,10)
D.bqY=new B.Q(18,0,18,30)
D.br_=new B.Q(18,10,18,12)
D.br0=new B.Q(18,10,18,14)
D.brh=new B.Q(18,16,14,18)
D.brm=new B.Q(18,18,18,12)
D.brs=new B.Q(18,26,18,12)
D.brx=new B.Q(18,34,18,34)
D.bry=new B.Q(18,4,18,14)
D.brE=new B.Q(18,8,18,24)
D.brW=new B.Q(20,16,14,4)
D.bs0=new B.Q(20,18,12,4)
D.bs5=new B.Q(20,20,12,20)
D.bs8=new B.Q(20,22,20,20)
D.bsd=new B.Q(20,6,20,6)
D.bsm=new B.Q(22,18,22,18)
D.bsu=new B.Q(22,24,22,0)
D.bsx=new B.Q(22,24,22,4)
D.bsF=new B.Q(22,60,22,22)
D.bsL=new B.Q(24,24,24,22)
D.bsV=new B.Q(26,10,60,10)
D.bt1=new B.Q(28,44,28,44)
D.bti=new B.Q(32,44,32,44)
D.btq=new B.Q(38,30,38,20)
D.btv=new B.Q(4,0,0,6)
D.btH=new B.ia(4,4,4,4)
D.bu7=new B.ia(6,5,6,5)
D.buc=new B.Q(6,6,8,6)
D.bun=new B.Q(8,14,8,14)
D.buo=new B.Q(8,22,8,22)
D.buw=new B.Q(8,6,12,6)
D.buF=new B.Q(8,8,8,4)
D.ahV=new B.Q(9,9,9,6)
D.buP=new B.ia(2.5,2.5,2.5,2.5)
D.buQ=new B.Q(10.5,0,10.5,0)
D.buR=new B.Q(7,1.5,7,1.5)
D.cNI=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bv6=new B.yz(null,null,D.cNI,A.A4)
D.cKS=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bv7=new B.yz(null,null,D.cKS,A.A4)
D.aPC=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftw=new B.x("WORD DESIGN",null,D.aPC,null,null,null,null,null,null,null,null,null)
D.bvE=new B.bD(1,A.bi,D.ftw,null)
D.ftc=new B.x("Slides database",null,Ab.rA,null,null,null,null,null,null,null,null,null)
D.fqw=new B.x("Admin only \xb7 keep as many as you like",null,U.aP6,null,null,null,null,null,null,null,null,null)
D.dcb=w([D.ftc,A.bB,D.fqw],x.p)
D.bkK=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.dcb,null)
D.bvH=new B.bD(1,A.bi,D.bkK,null)
D.fl8=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bvK=new B.bD(1,A.bi,D.fl8,null)
D.f2G=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvr=new B.x("TALK TO THE EDITOR",null,D.f2G,null,null,null,null,null,null,null,null,null)
D.bw_=new B.bD(1,A.bi,D.fvr,null)
D.ff1=new B.x("Tell the AI what to change",null,Ab.rA,null,null,null,null,null,null,null,null,null)
D.bwj=new B.bD(1,A.bi,D.ff1,null)
D.bxa=new B.Dp(!0,"video/mp4")
D.f0Y=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdc=new B.x("Move presentations between devices",null,D.f0Y,null,null,null,!1,null,null,1,null,null)
D.bxe=new B.qd(A.eg,A.a3,A.f,D.fdc,null)
D.feg=new B.x("Edit in Slides",null,A.j1,null,null,null,null,null,null,null,null,null)
D.bxf=new B.qd(A.eg,A.A,A.f,D.feg,null)
D.bxu=new B.dq(1,A.cl,D.bxf,null)
D.ZH=new B.a0(60988,"MaterialIcons",!1)
D.bAf=new B.a0(61352,"MaterialIcons",!1)
D.ajq=new B.a0(61531,"MaterialIcons",!1)
D.bBt=new B.a0(63062,"MaterialIcons",!1)
D.bBB=new B.a0(63109,"MaterialIcons",!1)
D.bBM=new B.a0(63206,"MaterialIcons",!1)
D.ak9=new B.a0(63238,"MaterialIcons",!1)
D.a_c=new B.a0(63365,"MaterialIcons",!1)
D.a_d=new B.a0(63367,"MaterialIcons",!1)
D.a_e=new B.a0(63368,"MaterialIcons",!1)
D.akl=new B.a0(63384,"MaterialIcons",!1)
D.bCl=new B.a0(63525,"MaterialIcons",!1)
D.bCo=new B.a0(63568,"MaterialIcons",!1)
D.bCJ=new B.a0(983072,"MaterialIcons",!1)
D.bD6=new B.a0(983271,"MaterialIcons",!0)
D.alx=new B.a0(983965,"MaterialIcons",!1)
D.aly=new B.a0(983966,"MaterialIcons",!1)
D.bE3=new B.a0(984592,"MaterialIcons",!1)
D.bEl=new B.ae(A.tG,16,A.az,null,null,null)
D.bEs=new B.ae(A.mo,null,A.c,null,null,null)
D.alI=new B.ae(A.pP,18,A.c,null,null,null)
D.bEJ=new B.ae(A.Ba,18,O.l8,null,null,null)
D.bFn=new B.ae(A.jh,11,null,null,null,null)
D.bFx=new B.ae(A.ZX,null,A.es,null,null,null)
D.bG5=new B.ae(A.qY,18,A.az,null,null,null)
D.bGb=new B.ae(A2.Bn,14,null,null,null,null)
D.bGc=new B.ae(A.e5,28,A.cg,null,null,null)
D.bGo=new B.ae(A.pQ,20,A.c,null,null,null)
D.bGv=new B.ae(A.y1,null,null,null,null,null)
D.bGB=new B.ae(A.iU,18,A.hv,null,null,null)
D.bGG=new B.ae(A.le,null,null,null,null,null)
D.bH9=new B.ae(A.a_s,28,A.c,null,null,null)
D.bBw=new B.a0(63065,"MaterialIcons",!1)
D.bHi=new B.ae(D.bBw,15,A.c,null,null,null)
D.bBC=new B.a0(63113,"MaterialIcons",!1)
D.bHo=new B.ae(D.bBC,null,A.ad,null,null,null)
D.bHM=new B.ae(A.vo,22,A.bK,null,null,null)
D.bI5=new B.ae(A.vp,18,null,null,null,null)
D.bIb=new B.ae(A.Bq,12,A.c,null,null,null)
D.bDG=new B.a0(983687,"MaterialIcons",!1)
D.bIm=new B.ae(D.bDG,null,A.bk,null,null,null)
D.bIt=new B.ae(A.hz,null,A.bk,null,null,null)
D.bIM=new B.ae(A.oH,22,A.c,null,null,null)
D.bIQ=new B.ae(A.cA,13,A.c,null,null,null)
D.bIW=new B.ae(A.e5,26,A.ay,null,null,null)
D.bIZ=new B.ae(A.r2,26,A.c,null,null,null)
D.Np=new B.ae(A.jh,8,A.c,null,null,null)
D.bJg=new B.ae(A.pP,40,A.c,null,null,null)
D.bJh=new B.ae(A.bzc,null,null,null,null,null)
D.bJl=new B.ae(A.tO,20,null,null,null,null)
D.bDF=new B.a0(983683,"MaterialIcons",!1)
D.bJv=new B.ae(D.bDF,null,A.aZ,null,null,null)
D.bJw=new B.ae(A.jh,16,A.bk,null,null,null)
D.bJR=new B.ae(A.r3,null,null,null,null,null)
D.amg=new B.ae(A.vr,22,A.c,null,null,null)
D.bJV=new B.ae(A.dW,17,A.c,null,null,null)
D.amh=new B.ae(A.jh,9,A.c,null,null,null)
D.bK_=new B.ae(A.vl,null,null,null,null,null)
D.bzt=new B.a0(57744,"MaterialIcons",!1)
D.bK6=new B.ae(D.bzt,null,null,null,null,null)
D.bK9=new B.ae(A.vl,16,null,null,null,null)
D.bEc=new B.a0(985181,"MaterialIcons",!1)
D.G9=new B.ae(D.bEc,null,null,null,null,null)
D.bKl=new B.ae(A.le,16,A.bK,null,null,null)
D.bDy=new B.a0(983615,"MaterialIcons",!1)
D.bKn=new B.ae(D.bDy,12,A.c,null,null,null)
D.amn=new B.ae(A.xJ,16,null,null,null,null)
D.bKv=new B.ae(A.dW,21,A.c,null,null,null)
D.bKA=new B.ae(A.hz,17,A.c,null,null,null)
D.bKB=new B.ae(A.vo,null,null,null,null,null)
D.bKQ=new B.ae(A.a_Q,20,A.az,null,null,null)
D.bL4=new B.ae(A.pO,22,E.mW,null,null,null)
D.bLb=new B.ae(A.pN,13,A.ad,null,null,null)
D.bLd=new B.ae(A.alj,20,A.az,null,null,null)
D.bza=new B.a0(57495,"MaterialIcons",!1)
D.bLi=new B.ae(D.bza,null,null,null,null,null)
D.bLm=new B.ae(A.nW,18,A.c,null,null,null)
D.bLH=new B.ae(A.tS,28,A.c,null,null,null)
D.bLR=new B.ae(D.ak9,null,A.aE,null,null,null)
D.bLS=new B.ae(A.pQ,22,A.c,null,null,null)
D.amw=new B.ae(A.ZD,16,null,null,null,null)
D.bMD=new B.ae(A.vo,32,A.c,null,null,null)
D.bNl=new B.ae(A.iX,22,A.c,null,null,null)
D.bNp=new B.ae(A.r2,22,A.ad,null,null,null)
D.amL=new B.ae(A.tG,null,A.c_,null,null,null)
D.bOj=new B.ae(A.tF,18,null,null,null,null)
D.bOV=new B.ae(A.dW,18,A.cj,null,null,null)
D.a0e=new B.ae(A.cA,18,A.az,null,null,null)
D.bP0=new B.ae(A.ald,null,null,null,null,null)
D.bPq=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aPp,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.eUg=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bPI=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eUg,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.bQ8=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.cRt=w([A.dS,A.aE],x.O)
D.bRX=new B.a8(A.a3,A.a7,A.x,D.cRt,null,null)
D.bS8=new B.a8(A.b0,A.b6,A.Tx,A.atP,null,null)
D.b63=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.ba7=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bd2=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b8b=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cCz=w([D.b63,D.ba7,D.bd2,D.b8b],x.O)
D.bSr=new B.a8(A.ax,A.aC,A.x,D.cCz,A.GJ,null)
D.dci=w([A.ct,A.bA,A.b7],x.O)
D.bSt=new B.a8(A.b0,A.b6,A.Tx,D.dci,null,null)
D.ddB=w([A.bk,A.c9],x.O)
D.bSx=new B.a8(A.a3,A.a7,A.x,D.ddB,null,null)
D.d8Q=w([A.hu,A.d8,A.aH],x.O)
D.bSz=new B.a8(A.ax,A.aC,A.x,D.d8Q,null,null)
D.cX8=w([A.d_,A.f8],x.O)
D.bSD=new B.a8(A.a3,A.a7,A.x,D.cX8,null,null)
D.dcd=w([O.l8,A.d8],x.O)
D.anw=new B.a8(A.a3,A.a7,A.x,D.dcd,null,null)
D.baG=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dca=w([D.baG,D.x7,A.bY],x.O)
D.bSI=new B.a8(A.a3,A.a7,A.x,D.dca,null,null)
D.cT4=w([A.b4,A.cZ,A.f6],x.O)
D.bSJ=new B.a8(A.ax,A.aC,A.x,D.cT4,null,null)
D.ND=new B.a8(A.a3,A.a7,A.x,A.GX,null,null)
D.biy=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cvF=w([D.biy,A.bY,A.j9],x.O)
D.anB=new B.a8(A.ax,A.aC,A.x,D.cvF,null,null)
D.d19=w([A.wV,A.aw,D.Ap],x.O)
D.bTJ=new B.a8(A.a3,A.a7,A.x,D.d19,null,null)
D.bjP=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b91=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.be3=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cSe=w([D.bjP,D.b91,D.be3],x.O)
D.anC=new B.a8(A.a3,A.a7,A.x,D.cSe,null,null)
D.baI=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bVG=w([Aw.aeX,D.baI],x.O)
D.bTS=new B.a8(A.b0,A.b6,A.x,D.bVG,null,null)
D.cQj=w([A.mU,A.bI],x.O)
D.bTW=new B.a8(A.b0,A.b6,A.x,D.cQj,null,null)
D.d60=w([A.aE,A.dO],x.O)
D.bU1=new B.a8(A.a3,A.a7,A.x,D.d60,null,null)
D.adV=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avv=w([D.adV,D.j7,D.Kb],x.O)
D.bUt=new B.a8(A.ax,A.aC,A.x,D.avv,null,null)
D.cvx=w([A.dv,A.dK],x.O)
D.bUE=new B.a8(A.b0,A.b6,A.x,D.cvx,null,null)
D.d3e=w([A.uP,Az.Ef],x.O)
D.bVs=new B.a8(A.a3,A.a7,A.x,D.d3e,null,null)
D.fmD=new B.x("Which Bio link?",null,A.cx,null,null,null,null,null,null,null,null,null)
D.bVD=new B.pC(null,D.fmD,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.ys=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a43=new C.kP(2,"elegantNavy")
D.fVP=w([A.Wo,D.j7,A.bY],x.O)
D.jD=new C.xg(0,"classic")
D.a3R=new C.ji("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a43,4294967035,4279378237,4290283019,D.jD)
D.aEE=new C.kP(3,"elegantGold")
D.b5D=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b6y=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acv=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fVh=w([D.b5D,D.b6y,D.acv],x.O)
D.a3P=new C.ji("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aEE,4294966515,4281016592,4289102906,D.jD)
D.dyp=new C.kP(22,"goldRibbon")
D.fVd=w([A.Wo,D.j7,A.hV],x.O)
D.a3I=new C.ji("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dyp,4294967035,4279378237,4291404327,D.jD)
D.dyq=new C.kP(23,"goldBaroque")
D.ad6=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fVj=w([D.ad6,A.aw,A.j9],x.O)
D.a3J=new C.ji("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dyq,4294964964,4283053072,4292128567,D.jD)
D.dys=new C.kP(4,"elegantEmerald")
D.b7G=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b8y=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fVp=w([D.b7G,D.b8y,A.hV],x.O)
D.a3K=new C.ji("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dys,4294376440,4279122734,4291404327,D.jD)
D.dyt=new C.kP(5,"elegantBurgundy")
D.bc3=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fVw=w([D.bc3,A.abM,A.hV],x.O)
D.a3N=new C.ji("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dyt,4294965238,4283043359,4291404327,D.jD)
D.dym=new C.kP(19,"goldFiligree")
D.KN=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fVk=w([D.KN,A.aw,A.j9],x.O)
D.a3L=new C.ji("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dym,4294966259,4279378237,4292128567,D.jD)
D.dyn=new C.kP(20,"goldLaurel")
D.bio=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fVx=w([A.K4,A.hV,D.bio],x.O)
D.a3M=new C.ji("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dyn,4294966776,4282000405,4291404327,D.jD)
D.dyo=new C.kP(21,"goldCrest")
D.abC=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.biv=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fVm=w([D.abC,A.aw,D.biv],x.O)
D.a3Q=new C.ji("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dyo,4294965484,4283053072,4292128567,D.jD)
D.dyr=new C.kP(24,"goldStar")
D.bjI=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fVq=w([D.bjI,A.aw,D.j7],x.O)
D.a3O=new C.ji("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dyr,4294966518,4279378237,4292128567,D.jD)
D.Gk=w([D.a3R,D.a3P,D.a3I,D.a3J,D.a3K,D.a3N,D.a3L,D.a3M,D.a3Q,D.a3O],x.h)
D.q1=new C.mr(0,"blank")
D.Rc=new C.mr(1,"title")
D.mw=new C.mr(2,"titleContent")
D.dT1=new C.mr(3,"twoColumn")
D.Ck=new C.mr(4,"section")
D.dT2=new C.mr(5,"comparison")
D.Hw=new C.mr(6,"flashcard")
D.Hx=new C.mr(7,"quiz")
D.Hy=new C.mr(8,"worksheet")
D.anY=w([D.q1,D.Rc,D.mw,D.dT1,D.Ck,D.dT2,D.Hw,D.Hx,D.Hy],B.ax("O<mr>"))
D.awu=w([Ap.VL,A.dK],x.O)
D.kl=w([A.bY,A.bK,A.hU,A.hG,D.Ap],x.O)
D.duj=new C.iW("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awu,D.kl)
D.biH=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bc1=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cQw=w([D.biH,D.bc1],x.O)
D.dua=new C.iW("confetti","Golden Confetti","Together we rise",D.cQw,D.kl)
D.cNN=w([A.nz,A.Vq],x.O)
D.dub=new C.iW("crown","Crown of Glory","Built for our community",D.cNN,D.kl)
D.b8T=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bbH=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cUn=w([D.b8T,D.bbH],x.O)
D.tW=w([A.bJ,A.aP,A.c,A.aL,A.ak],x.O)
D.du5=new C.iW("aurora","Aurora Gala","A brighter future, together",D.cUn,D.tW)
D.bd4=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d3k=w([G.abf,D.bd4],x.O)
D.dum=new C.iW("champagne","Champagne Toast","Cheers to every member",D.d3k,D.kl)
D.dun=new C.iW("diamonds","Diamond Rain","Every member is a jewel",Y.ax4,D.tW)
D.b6p=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bbc=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d89=w([D.b6p,D.bbc],x.O)
D.du0=new C.iW("starburst","Golden Starburst","Thank you!",D.d89,D.kl)
D.bVM=w([A.f7,A.x_],x.O)
D.abo=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Pb=w([A.op,A.io,A.v0,A.mM,D.abo],x.O)
D.duu=new C.iW("balloons","Luxury Balloons","Let's celebrate",D.bVM,D.Pb)
D.cN5=w([A.Vz,A.w],x.O)
D.dui=new C.iW("galaxy","Galaxy Spiral","The sky is not the limit",D.cN5,D.tW)
D.bgO=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d0_=w([A.kc,D.bgO],x.O)
D.dud=new C.iW("redcarpet","Red Carpet","Tonight we shine",D.d0_,D.kl)
D.beG=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bcS=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d4e=w([D.beG,D.bcS],x.O)
D.du2=new C.iW("coins","Gold Coin Rain","Every contribution counts",D.d4e,D.kl)
D.daI=w([A.dv,A.hF],x.O)
D.du8=new C.iW("lanterns","Sky Lanterns","Lighting the way together",D.daI,D.kl)
D.b9O=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cL8=w([A.x1,D.b9O],x.O)
D.du4=new C.iW("hearts","Floating Hearts","Made with love",D.cL8,D.Pb)
D.b6Z=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b7M=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dc8=w([D.b6Z,D.b7M],x.O)
D.dut=new C.iW("petals","Rose Petals","Thank you, from our hearts",D.dc8,D.Pb)
D.bhI=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d8t=w([A.l7,D.bhI],x.O)
D.du_=new C.iW("butterflies","Golden Butterflies","New beginnings",D.d8t,D.kl)
D.be0=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cM3=w([D.be0,A.w],x.O)
D.dul=new C.iW("neon","Neon Night","Let's go!",D.cM3,D.tW)
D.baV=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d6a=w([A.Ks,D.baV],x.O)
D.duo=new C.iW("disco","Disco Ball","Party time",D.d6a,D.tW)
D.bey=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d5J=w([A.hu,D.bey],x.O)
D.du3=new C.iW("sunrise","Golden Sunrise","A new day for our community",D.d5J,D.kl)
D.d5m=w([A.qF,A.dK],x.O)
D.dup=new C.iW("pearls","Ocean Pearls","Deep roots, bright future",D.d5m,D.tW)
D.b8Y=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d5A=w([D.b8Y,A.dK],x.O)
D.dus=new C.iW("snow","Winter Gala","Warm wishes to all",D.d5A,D.tW)
D.b5M=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b6J=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.db5=w([D.b5M,D.b6J],x.O)
D.duh=new C.iW("laurel","Laurel Victory","We did it together",D.db5,D.kl)
D.b5C=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bbD=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cKg=w([D.b5C,D.bbD],x.O)
D.dur=new C.iW("ribbons","Silk Ribbons","Elegance in every step",D.cKg,D.kl)
D.bcC=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cvu=w([G.Ao,D.bcC],x.O)
D.due=new C.iW("kente","Kente Pride","Proud of our roots",D.cvu,D.kl)
D.bfe=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bi1=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cVT=w([D.bfe,D.bi1],x.O)
D.du9=new C.iW("trophy","Trophy Shine","Winners together",D.cVT,D.kl)
D.d5G=w([Aq.Kh,A.w],x.O)
D.du1=new C.iW("shooting","Shooting Stars","Make a wish",D.d5G,D.tW)
D.b5T=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aeK=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dbl=w([D.b5T,D.aeK],x.O)
D.duf=new C.iW("bokeh","Golden Bokeh","Shine bright",D.dbl,D.kl)
D.b6e=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d0O=w([D.b6e,A.w],x.O)
D.du7=new C.iW("orbits","Golden Orbits","Always moving forward",D.d0O,D.kl)
D.bhJ=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cYw=w([A.acr,D.bhJ],x.O)
D.duc=new C.iW("flowers","Blooming Garden","Growing together",D.cYw,D.Pb)
D.b61=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b6D=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dab=w([D.b61,D.b6D],x.O)
D.du6=new C.iW("music","Music Party","Celebrate with us",D.dab,D.tW)
D.b7w=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bir=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cLk=w([D.b7w,D.bir],x.O)
D.duq=new C.iW("mandala","Royal Mandala","Harmony and unity",D.cLk,D.kl)
D.cYB=w([G.Ao,D.aeK],x.O)
D.duk=new C.iW("sparklers","Golden Sparklers","Light up the night",D.cYB,D.kl)
D.dug=new C.iW("city","City Lights","The whole city celebrates",D.awu,D.kl)
D.Gt=w([D.duj,D.dua,D.dub,D.du5,D.dum,D.dun,D.du0,D.duu,D.dui,D.dud,D.du2,D.du8,D.du4,D.dut,D.du_,D.dul,D.duo,D.du3,D.dup,D.dus,D.duh,D.dur,D.due,D.du9,D.du1,D.duf,D.du7,D.duc,D.du6,D.duq,D.duk,D.dug],B.ax("O<iW>"))
D.egn=new B.y("","No ring")
D.euZ=new B.y("platinum","Platinum")
D.erY=new B.y("glow","Glow")
D.ejL=new B.y("double","Double line")
D.eiG=new B.y("framed","Gallery frame")
D.eg0=new B.y("rosegold","Rose gold")
D.esI=new B.y("jewels","Jeweled")
D.epr=new B.y("aurora","Aurora")
D.BH=w([D.egn,A.a5j,D.euZ,D.erY,H.aL9,D.ejL,A.a5l,D.eiG,D.eg0,D.esI,D.epr],x.L)
D.cf9=w([D.a3L,D.a3M,D.a3Q,D.a3I,D.a3J,D.a3O],x.h)
D.bKJ=new B.ae(G.aj0,16,null,null,null,null)
D.b0X=new B.vh(A.bg,D.bKJ,null,x.U)
D.bzC=new B.a0(58027,"MaterialIcons",!1)
D.bEr=new B.ae(D.bzC,16,null,null,null,null)
D.b0V=new B.vh(A.L,D.bEr,null,x.U)
D.bzD=new B.a0(58030,"MaterialIcons",!1)
D.bIs=new B.ae(D.bzD,16,null,null,null,null)
D.b0Y=new B.vh(A.dL,D.bIs,null,x.U)
D.clj=w([D.b0X,D.b0V,D.b0Y],B.ax("O<vh<pT>>"))
D.csT=w([A.At,A.hf],x.O)
D.csU=w([A.b4,A.bo,A.f6],x.O)
D.P_=w([A.bK,A.hG,A.hU,A.aw,A.mM],x.O)
D.cvA=w([A.bY,D.j7,D.Kb],x.O)
D.cw7=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ee0=new B.y(4278913286,4280030216)
D.eei=new B.y(4279373061,4278518787)
D.eep=new B.y(4279898630,4278847235)
D.cVk=w([D.ee0,D.eei,D.eep],x.n)
D.cRc=w(["\u265b","\u269c","\u2726"],x.s)
D.dyk=new C.xi("Royal Onyx & Gold",D.cVk,4292128567,4294370209,4294965479,3874020544,D.cRc)
D.edO=new B.y(4278326799,4278598442)
D.edQ=new B.y(4278395929,4278258953)
D.edX=new B.y(4278599728,4278327826)
D.daz=w([D.edO,D.edQ,D.edX],x.n)
D.cLW=w(["\u269c","\u2756","\u2727"],x.s)
D.dyh=new C.xi("Imperial Emerald",D.daz,4293050997,4294699968,4294180856,3872254170,D.cLW)
D.edR=new B.y(4278455076,4278918747)
D.edW=new B.y(4278587439,4278322714)
D.ee9=new B.y(4279051376,4278455076)
D.d8M=w([D.edR,D.edW,D.ee9],x.n)
D.d1p=w(["\u2654","\u2726","\u2748"],x.s)
D.dyb=new C.xi("Sapphire Crown",D.d8M,4291417834,4294967295,4294310143,3871986666,D.d1p)
D.een=new B.y(4279894534,4283041554)
D.eez=new B.y(4281008906,4279042307)
D.eeH=new B.y(4284221976,4279894534)
D.de9=w([D.een,D.eez,D.eeH],x.n)
D.cNe=w(["\u265b","\u2766","\u2726"],x.s)
D.dyd=new C.xi("Ruby Throne",D.de9,4293378685,4294963145,4294964466,3874213833,D.cNe)
D.eeh=new B.y(4279371039,4281995100)
D.eer=new B.y(4280092723,4278714896)
D.eeE=new B.y(4283045242,4279371039)
D.daV=w([D.eeh,D.eer,D.eeE],x.n)
D.d97=w(["\u2655","\u2756","\u2727"],x.s)
D.dyi=new C.xi("Amethyst Palace",D.daV,4293314984,4294963421,4294702591,3873229802,D.d97)
D.edT=new B.y(4278519045,4280032287)
D.eea=new B.y(4279111184,4278321666)
D.eew=new B.y(4280492839,4278716426)
D.d7H=w([D.edT,D.eea,D.eew],x.n)
D.d_N=w(["\u2726","\u25c6","\u2742"],x.s)
D.dyf=new C.xi("Obsidian & Platinum",D.d7H,4293256418,4294967295,4294638330,3872378836,D.d_N)
D.eeo=new B.y(4279896588,4282194463)
D.eex=new B.y(4280553487,4279043334)
D.eeF=new B.y(4283048488,4279896588)
D.d_i=w([D.eeo,D.eex,D.eeF],x.n)
D.dcw=w(["\u2766","\u273f","\u2727"],x.s)
D.dyc=new C.xi("Rose Gold Velvet",D.d_i,4293440672,4294960345,4294964979,3874214602,D.dcw)
D.edU=new B.y(4278520340,4279180595)
D.edZ=new B.y(4278718495,4278322443)
D.eel=new B.y(4279510591,4278520340)
D.cCh=w([D.edU,D.edZ,D.eel],x.n)
D.d0s=w(["\u269c","\u2736","\u2756"],x.s)
D.dyg=new C.xi("Midnight Brass",D.cCh,4291405148,4293975208,4294439914,3872837564,D.d0s)
D.eeU=new B.y(4294703086,4293780428)
D.eeQ=new B.y(4294307549,4293187253)
D.eeV=new B.y(4294966517,4293977807)
D.cPi=w([D.eeU,D.eeQ,D.eeV],x.n)
D.d0R=w(["\u269c","\u265b","\u2726"],x.s)
D.dyj=new C.xi("Ivory Marble & Gold",D.cPi,4289760572,4286209048,4280951062,3863625518,D.d0R)
D.ee4=new B.y(4278978566,4280555024)
D.eek=new B.y(4279504137,4278518530)
D.eeB=new B.y(4281211923,4278978566)
D.cN4=w([D.ee4,D.eek,D.eeB],x.n)
D.d9P=w(["\u2742","\u2726","\u265c"],x.s)
D.dye=new C.xi("Onyx & Copper",D.cN4,4291856987,4294365880,4294964718,3873885630,D.d9P)
D.cwf=w([D.dyk,D.dyh,D.dyb,D.dyd,D.dyi,D.dyf,D.dyc,D.dyg,D.dyj,D.dye],B.ax("O<xi>"))
D.cyw=w([A.aw,D.Ap,A.hG],x.O)
D.elR=new B.y("Original",null)
D.elZ=new B.y("Wide 16:9",1.7777777777777777)
D.eoc=new B.y("Landscape 3:2",1.5)
D.elk=new B.y("Photo 4:3",1.3333333333333333)
D.en1=new B.y("Square",1)
D.eyy=new B.y("Portrait 3:4",0.75)
D.atX=w([D.elR,D.elZ,D.eoc,D.elk,D.en1,D.eyy],B.ax("O<+(n,N?)>"))
D.atY=w([A.hG,A.bU,A.b8,A.by],x.O)
D.eom=new B.y("","Original")
D.eqa=new B.y("circle","Circle")
D.evJ=new B.y("rounded","Rounded")
D.ewD=new B.y("triangle","Triangle")
D.esb=new B.y("hexagon","Hexagon")
D.eqz=new B.y("diamond","Diamond")
D.epq=new B.y("arch","Arch")
D.BM=w([D.eom,D.eqa,D.evJ,D.ewD,D.esb,D.eqz,D.epq],x.L)
D.dtp=new C.la("classic_blue","Classic Blue","Normal",A.bk,A.c,A.ke,A.dq,A.aK)
D.dtF=new C.la("campus_green","Campus Green","Normal",A.aZ,A.mS,A.t5,A.h4,A.eu)
D.dtw=new C.la("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.it,A.nD)
D.dtD=new C.la("slate_minimal","Slate Minimal","Normal",A.bu,A.aP,A.aL,A.M,A.aK)
D.dto=new C.la("coral_fresh","Coral Fresh","Normal",A.cd,A.iq,A.qx,A.jQ,A.t_)
D.dtE=new C.la("lavender_calm","Lavender Calm","Normal",A.b7,A.pi,A.Ae,A.pl,A.jq)
D.dtq=new C.la("ocean_breeze","Ocean Breeze","Normal",A.f8,A.qJ,A.rV,A.uR,A.nE)
D.ae0=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dtB=new C.la("berry_pop","Berry Pop","Normal",A.fh,D.ae0,A.k9,G.WT,A.EE)
D.dtr=new C.la("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dv,A.k9,A.cp)
D.dtA=new C.la("executive_navy","Executive Navy","Professional",A.d6,A.adl,A.dq,A.l5,A.bJ)
D.dty=new C.la("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cp)
D.dts=new C.la("corporate_steel","Corporate Steel","Professional",A.mQ,A.M,A.mc,A.fi,A.bJ)
D.dtv=new C.la("gold_luxe","Gold Luxe","Luxury",A.nF,A.dG,A.oo,A.lB,A.bK)
D.beC=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dtz=new C.la("rose_gold_elite","Rose Gold Elite","Luxury",A.hf,D.beC,A.WJ,A.io,A.mM)
D.dtC=new C.la("platinum_night","Platinum Night","Luxury",A.cp,A.dK,A.bm,A.aP,A.aL)
D.dtG=new C.la("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.po,A.eX,A.pw,A.jr)
D.dtn=new C.la("royal_purple","Royal Purple","Luxury",A.mR,A.VS,A.jq,A.k9,A.K3)
D.dtx=new C.la("neon_pitch","Neon Pitch","Bold",A.b8,A.dK,A.M,A.b1,A.aL)
D.dtu=new C.la("crimson_impact","Crimson Impact","Bold",A.bI,A.kc,A.er,A.tg,A.f3)
D.dtt=new C.la("sunset_gallery","Sunset Gallery","Bold",A.fD,A.t_,A.jQ,A.qx,A.oq)
D.GD=w([D.dtp,D.dtF,D.dtw,D.dtD,D.dto,D.dtE,D.dtq,D.dtB,D.dtr,D.dtA,D.dty,D.dts,D.dtv,D.dtz,D.dtC,D.dtG,D.dtn,D.dtx,D.dtu,D.dtt],B.ax("O<la>"))
D.cJY=w([A.bY,D.j7],x.O)
D.d_y=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.epc=new B.y("Faces & people",D.d_y)
D.cyA=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ecU=new B.y("Ideas & work",D.cyA)
D.cRH=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.esg=new B.y("Nature",D.cRH)
D.d_G=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.elP=new B.y("Places & things",D.d_G)
D.cUV=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.epv=new B.y("Symbols",D.cUV)
D.cK3=w([D.epc,D.ecU,D.esg,D.elP,D.epv],B.ax("O<+(n,ai<n>)>"))
D.b66=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cKr=w([A.bY,D.acv,D.b66],x.O)
D.b0i=new B.ac(0,A.G,A.K0,A.aFt,40)
D.b0_=new B.ac(0,A.G,A.nB,A.ek,8)
D.cKD=w([D.b0i,D.b0_],x.V)
D.cL4=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aum=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1q=w([A.hG,A.f6,A.bI,A.aB,A.cd],x.O)
D.cLQ=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acJ=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cM0=w([A.Wy,D.acJ,A.Wy],x.O)
D.cM6=w([A.hV,D.j7,D.Kb],x.O)
D.elD=new B.y(A.bg,D.a_d)
D.emX=new B.y(A.L,D.a_c)
D.eh_=new B.y(A.dL,D.a_e)
D.cN_=w([D.elD,D.emX,D.eh_],B.ax("O<+(pT,a0)>"))
D.cQ=new C.Ii(0,"text")
D.lo=new C.Ii(1,"image")
D.f_=new C.Ii(2,"shape")
D.Rb=new C.Ii(3,"pdf")
D.kS=new C.Ii(4,"signature")
D.a4a=new C.Ii(5,"bio")
D.cNR=w([D.cQ,D.lo,D.f_,D.Rb,D.kS,D.a4a],B.ax("O<Ii>"))
D.cNS=w([A.bl,A.cD],B.ax("O<He>"))
D.cOs=w(["School","Documents","Sign & present"],x.s)
D.b0n=new B.ac(0,A.G,A.aeA,A.ud,28)
D.cOM=w([D.b0n],x.V)
D.cP4=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Pj=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.auL=w([A.hG,A.ED,A.aL,A.c,A.op,A.aw],x.O)
D.exW=new B.y(0.1,0.08)
D.ese=new B.y(0.3,0.05)
D.egx=new B.y(0.55,0.1)
D.ekD=new B.y(0.8,0.06)
D.enG=new B.y(0.92,0.16)
D.enb=new B.y(0.2,0.2)
D.el5=new B.y(0.7,0.22)
D.eqW=new B.y(0.05,0.4)
D.eo4=new B.y(0.95,0.45)
D.ehe=new B.y(0.12,0.7)
D.ejp=new B.y(0.88,0.75)
D.ejx=new B.y(0.4,0.9)
D.ef9=new B.y(0.65,0.93)
D.ekf=new B.y(0.25,0.97)
D.elA=new B.y(0.85,0.9)
D.ei3=new B.y(0.5,0.04)
D.cQr=w([D.exW,D.ese,D.egx,D.ekD,D.enG,D.enb,D.el5,D.eqW,D.eo4,D.ehe,D.ejp,D.ejx,D.ef9,D.ekf,D.elA,D.ei3],x.G)
D.cQy=w([A.c,A.hf,A.aS,A.aV],x.O)
D.dUE=new C.jB("office_blue","Office Blue",A.bk,A.dq,A.aK,A.c,A.ke)
D.dUP=new C.jB("campus_green","Campus Green",A.aZ,A.h4,A.eu,A.mS,A.t5)
D.dUF=new C.jB("sunset","Sunset",A.fD,A.jQ,A.nD,A.iq,A.qx)
D.dUG=new C.jB("midnight","Midnight",A.aE,A.k9,A.cp,A.M,A.dv)
D.dUR=new C.jB("classic","Classic",A.d8,A.dG,A.lC,A.hU,A.h2)
D.dUO=new C.jB("rose_gold","Rose Gold",A.hf,A.x2,A.x1,A.v0,A.At)
D.dUz=new C.jB("ocean_teal","Ocean Teal",A.f8,A.uR,A.nE,A.qJ,A.rV)
D.dUy=new C.jB("slate_pro","Slate Pro",A.bu,A.M,A.aK,A.aP,A.aL)
D.dUx=new C.jB("neon_night","Neon Night",A.b8,A.b1,A.aL,A.dK,A.M)
D.dUJ=new C.jB("lavender","Lavender",A.b7,A.pl,A.jq,A.pi,A.Ae)
D.dUL=new C.jB("coral","Coral",A.cd,A.jQ,A.t_,A.iq,A.oq)
D.dUA=new C.jB("forest","Forest",A.hg,A.e3,A.cC,A.lD,A.es)
D.dUB=new C.jB("berry","Berry",A.fh,G.WT,A.EE,D.ae0,A.k9)
D.dUI=new C.jB("sand","Sand",A.dT,A.it,A.nD,A.hU,A.bK)
D.dUN=new C.jB("ice","Ice",A.mQ,A.Kt,A.aK,A.mO,A.fi)
D.dUD=new C.jB("charcoal","Charcoal",A.ak,A.aP,A.cp,A.bm,A.M)
D.dUw=new C.jB("mint","Mint",A.aV,A.fu,A.h4,A.lD,A.pw)
D.dUM=new C.jB("crimson","Crimson",A.bI,A.mU,A.kc,A.EB,A.tg)
D.b8x=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dUH=new C.jB("gold","Gold",A.nF,A.uP,A.oo,D.b8x,A.lB)
D.dUK=new C.jB("aqua","Aqua",A.bN,A.Ep,A.om,A.pk,A.or)
D.dUC=new C.jB("plum","Plum",A.mR,A.x_,A.EE,A.Eb,A.qI)
D.dUQ=new C.jB("steel","Steel",A.d6,A.dq,A.bm,A.ke,A.l5)
D.a1F=w([D.dUE,D.dUP,D.dUF,D.dUG,D.dUR,D.dUO,D.dUz,D.dUy,D.dUx,D.dUJ,D.dUL,D.dUA,D.dUB,D.dUI,D.dUN,D.dUD,D.dUw,D.dUM,D.dUH,D.dUK,D.dUC,D.dUQ],B.ax("O<jB>"))
D.cQT=w([A.bY,A.j9],x.O)
D.Rd=new C.hw(10,"rotate3d")
D.HA=new C.hw(8,"flip")
D.aEX=new C.hw(19,"spiral")
D.q2=new C.hw(16,"bounce")
D.aF_=new C.hw(9,"flipVertical")
D.cQU=w([D.Rd,D.HA,D.aEX,D.q2,D.aF_],x.i)
D.e6=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cRf=w([0.62,1],x.x)
D.cRP=w([0,0.32,0.68,1],x.x)
D.mx=new C.hw(6,"zoom")
D.u7=new C.hw(4,"slideUp")
D.u6=new C.hw(2,"slideLeft")
D.cRY=w([D.mx,D.HA,D.u7,D.Rd,D.u6],x.i)
D.cSs=w([A.bU,A.hf,A.io,A.hG,A.c],x.O)
D.b0d=new B.ac(0,A.G,D.acW,A.ud,30)
D.cT9=w([D.b0d],x.V)
D.e3c=new B.u(0,-2.5)
D.e32=new B.u(-2.5,0)
D.e1L=new B.u(2.5,0)
D.cTc=w([A.Rt,A.a4x,A.aFZ,A.a4w,D.e3c,H.aFV,D.e32,D.e1L],x.dN)
D.GK=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cTw=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cTG=w([23,114,69,56,80,144],x.t)
D.cU5=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cUu=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cVX=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cW0=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uw(0,"rectangle")
D.eI=new C.uw(1,"circle")
D.kT=new C.uw(6,"hexagon")
D.cWc=w([D.be,D.eI,D.kT],x.m)
D.o1=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ae7=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cWK=w([D.ae7,A.e3],x.O)
D.egI=new B.y("","Classic")
D.efn=new B.y("caps","Bold caps")
D.eqZ=new B.y("elegant","Elegant")
D.ew1=new B.y("shadow","Shadow")
D.ekZ=new B.y("neon","Neon glow")
D.euF=new B.y("outline","Outline")
D.etR=new B.y("marker","Highlighter")
D.ewc=new B.y("stamp","Stamp")
D.evE=new B.y("retro","Retro")
D.ejX=new B.y("threed","3D")
D.eru=new B.y("fire","Fire")
D.esq=new B.y("ice","Ice")
D.eq9=new B.y("chalk","Chalk")
D.eqe=new B.y("comic","Comic")
D.ewe=new B.y("sunset","Sunset")
D.exl=new B.y("softglow","Soft glow")
D.etp=new B.y("lowercase","Lowercase")
D.eqG=new B.y("double","Echo")
D.exu=new B.y("whisper","Whisper")
D.avD=w([D.egI,D.efn,D.eqZ,D.ew1,D.ekZ,D.euF,D.etR,D.ewc,D.evE,D.ejX,H.aL7,D.eru,D.esq,D.eq9,D.eqe,A.a5j,D.ewe,D.exl,D.etp,D.eqG,D.exu],x.L)
D.cXY=w([3,5,7,10,12,15],x.t)
D.cZi=w([A.bU,A.bK,A.c,A.ez,A.ct],x.O)
D.dl3=new C.t7(10,"cardWorld")
D.Cc=new C.B4(3,"rounded")
D.dBl=new C.ld("world","NGMY World",D.dl3,D.Cc,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dl4=new C.t7(11,"cardSplit")
D.dBh=new C.ld("business","Business Wire",D.dl4,D.Cc,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dl5=new C.t7(12,"cardBreaking")
D.dBu=new C.ld("breaking","Breaking Red",D.dl5,D.Cc,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dl6=new C.t7(13,"cardFeature")
D.dBn=new C.ld("feature","Tech Feature",D.dl6,D.Cc,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDt=new C.t7(6,"circle")
D.aDn=new C.B4(4,"circle")
D.dBr=new C.ld("parchment","Royal Circle",D.aDt,D.aDn,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dBg=new C.ld("ocean","Blue Ocean",D.aDt,D.aDn,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dl9=new C.t7(7,"rail")
D.aDm=new C.B4(1,"double")
D.dBi=new C.ld("forest","Green Leaf",D.dl9,D.aDm,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDq=new C.t7(1,"sideBySide")
D.dBw=new C.ld("herald","NGMY Herald",D.aDq,D.Cc,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aDp=new C.t7(0,"classic")
D.a3n=new C.B4(9,"shadow")
D.dBv=new C.ld("daily","The Daily",D.aDp,D.a3n,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dl7=new C.t7(2,"splash")
D.aDo=new C.B4(6,"cutCorner")
D.dBf=new C.ld("tabloid","Big Tabloid",D.dl7,D.aDo,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDu=new C.t7(9,"minimal")
D.dBq=new C.ld("modern","Modern Digest",D.aDu,D.Cc,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDr=new C.t7(3,"magazine")
D.aDl=new C.B4(0,"plain")
D.dBm=new C.ld("midnight","Midnight Edition",D.aDr,D.aDl,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dla=new C.t7(8,"banner")
D.dBo=new C.ld("metro","Metro Wire",D.dla,D.aDo,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dl2=new C.B4(8,"arch")
D.dBp=new C.ld("sunrise","Sunrise Post",D.aDr,D.dl2,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDs=new C.t7(5,"scrapbook")
D.dl1=new C.B4(5,"tape")
D.dBk=new C.ld("neon","Neon Beat",D.aDs,D.dl1,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dl8=new C.t7(4,"wrap")
D.dBx=new C.ld("gold","Golden Press",D.dl8,D.a3n,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dBy=new C.ld("minimal","Paper White",D.aDu,D.a3n,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dBj=new C.ld("gazette","Fresh Gazette",D.aDp,D.aDm,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dBt=new C.ld("times","Classic Times",D.aDq,D.aDl,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QK=new C.B4(2,"polaroid")
D.dBs=new C.ld("scrapbook","Memory Scrapbook",D.aDs,D.QK,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1U=w([D.dBl,D.dBh,D.dBu,D.dBn,D.dBr,D.dBg,D.dBi,D.dBw,D.dBv,D.dBf,D.dBq,D.dBm,D.dBo,D.dBp,D.dBk,D.dBx,D.dBy,D.dBj,D.dBt,D.dBs],B.ax("O<ld>"))
D.cZu=w([0.45,1],x.x)
D.GM=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cZQ=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fQU=new C.or("Original",0,1,1,0,0,0)
D.fQY=new C.or("Black & white",0,1.1,0,0,0,0)
D.fQL=new C.or("Noir",-0.05,1.55,0,0,0,0)
D.fQP=new C.or("Sepia",0,1,0.25,0.9,0,0)
D.fQO=new C.or("Vivid",0,1.15,1.6,0,0,0)
D.fQH=new C.or("Pop",0,1.3,1.9,0,0,0)
D.fQJ=new C.or("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fQV=new C.or("Matte",0,0.9,0.85,0,0,0.55)
D.fQQ=new C.or("Cool",0,1.05,1,-0.8,0,0)
D.fQX=new C.or("Warm",0.03,1.05,1.1,0.8,0,0)
D.fQI=new C.or("Golden hour",0.04,1,1.25,1,0,0)
D.fQN=new C.or("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fQW=new C.or("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fQM=new C.or("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fQS=new C.or("Retro",0,0.9,0.7,0.4,0,0.35)
D.fQR=new C.or("Forest",0,1,1.2,-0.1,-0.45,0)
D.fQT=new C.or("Rose",0,1,1.1,0.3,0.4,0)
D.fQK=new C.or("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cZR=w([D.fQU,D.fQY,D.fQL,D.fQP,D.fQO,D.fQH,D.fQJ,D.fQV,D.fQQ,D.fQX,D.fQI,D.fQN,D.fQW,D.fQM,D.fQS,D.fQR,D.fQT,D.fQK],B.ax("O<or>"))
D.b5y=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cZS=w([D.ae7,A.e3,D.b5y],x.O)
D.ecN=new B.y(0.12,0.3)
D.esB=new B.y(0.26,0.75)
D.eqV=new B.y(0.8,0.22)
D.ewm=new B.y(0.9,0.7)
D.eto=new B.y(0.5,0.15)
D.euH=new B.y(0.65,0.85)
D.eix=new B.y(0.08,0.85)
D.d_3=w([D.ecN,D.esB,D.eqV,D.ewm,D.eto,D.euH,D.eix],x.G)
D.avN=w([A.b8,A.bU,A.by,A.b4],x.O)
D.d_R=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d02=w([A.c,A.fi,A.dw,A.uS],x.O)
D.b8K=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d1_=w([D.b8K,D.acJ],x.O)
D.d10=w([A.wV,A.aw],x.O)
D.d1e=w([0,0.25,0.75,1],x.x)
D.d1g=w([A.wR,A.op],x.O)
D.aEx=new C.kP(10,"kenteSunset")
D.fVf=w([D.ad6,A.jM,A.aw],x.O)
D.dwD=new C.ji("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aEx,4294964964,4282000405,4279983648,D.jD)
D.aEy=new C.kP(11,"indigoMudcloth")
D.b6u=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fVt=w([D.b6u,A.acG,A.hV],x.O)
D.dwL=new C.ji("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aEy,4294439140,4279903102,4279903102,D.jD)
D.aEz=new C.kP(12,"adinkraRoyal")
D.bj9=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fVu=w([D.abC,D.bj9,A.aw],x.O)
D.dwN=new C.ji("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aEz,4294965484,4285218591,4287322667,D.jD)
D.aEA=new C.kP(13,"nileLotus")
D.bfu=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bch=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fVz=w([D.bfu,D.bch,A.hV],x.O)
D.dwM=new C.ji("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEA,4294244340,4279196764,4279196764,D.jD)
D.aEB=new C.kP(14,"shweshweIvory")
D.baw=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b9p=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b6Y=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fVg=w([D.baw,D.b9p,D.b6Y],x.O)
D.dwI=new C.ji("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEB,4294505710,4279970378,4291058750,D.jD)
D.rj=new C.kP(15,"certIvoryNavy")
D.fVe=w([D.KN,D.j7,A.hV],x.O)
D.aE2=new C.xg(1,"ringsNdoa")
D.dwF=new C.ji("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rj,4294966259,4279378237,4291404327,D.aE2)
D.a3T=new C.xg(2,"coupleCards")
D.dwA=new C.ji("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rj,4294966259,4279378237,4291404327,D.a3T)
D.Cf=new C.kP(18,"certIvoryNavyBar")
D.abB=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fVs=w([D.abB,D.j7,A.hV],x.O)
D.aE3=new C.xg(3,"kuhoweshaForm")
D.dwy=new C.ji("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cf,4294966519,4279378237,4291404327,D.aE3)
D.acU=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fVM=w([D.KN,D.acU,A.hV],x.O)
D.a3U=new C.xg(4,"mahariPande")
D.dwB=new C.ji("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rj,4294966259,4279904068,4291404327,D.a3U)
D.aEC=new C.kP(16,"certIvoryGreen")
D.b9Y=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fVi=w([A.K4,D.b9Y,A.hV],x.O)
D.aE4=new C.xg(5,"familiaMti")
D.dwH=new C.ji("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEC,4294966776,4280241466,4291404327,D.aE4)
D.a3V=new C.xg(6,"ndoaSafi")
D.dwz=new C.ji("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cf,4294966519,4279378237,4291404327,D.a3V)
D.be_=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fVl=w([D.KN,A.hV,D.be_],x.O)
D.a3W=new C.xg(7,"peteWide")
D.dwE=new C.ji("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rj,4294966259,4282001936,4291404327,D.a3W)
D.dwO=new C.xg(8,"muhuriCrest")
D.dwx=new C.ji("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rj,4294966259,4279378237,4291404327,D.dwO)
D.fVv=w([D.abB,D.acU,A.hV],x.O)
D.dwP=new C.xg(9,"fomuWazi")
D.dwK=new C.ji("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cf,4294966519,4279904068,4291404327,D.dwP)
D.aED=new C.kP(17,"certIvoryRose")
D.baA=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fVy=w([D.baA,D.adJ,A.hV],x.O)
D.a3S=new C.xg(10,"upendoOrnate")
D.dwG=new C.ji("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aED,4294965493,4286200650,4291404327,D.a3S)
D.d1F=w([D.dwD,D.dwL,D.dwN,D.dwM,D.dwI,D.dwF,D.dwA,D.dwy,D.dwB,D.dwH,D.dwz,D.dwE,D.dwx,D.dwK,D.dwG],x.h)
D.e7=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HB=new C.vL(0,"emojis")
D.Cm=new C.vL(1,"pictures")
D.HC=new C.vL(2,"icons3d")
D.a4c=new C.vL(3,"animations")
D.Rf=new C.vL(4,"videoMotion")
D.Cn=new C.vL(5,"luxe")
D.a20=w([D.HB,D.Cm,D.HC,D.a4c,D.Rf,D.Cn],B.ax("O<vL>"))
D.evh=new B.y(A.dW,"Looks")
D.ekw=new B.y(A.ye,"Light")
D.eks=new B.y(A.na,"Colour")
D.eiy=new B.y(A.xO,"Effects")
D.ak4=new B.a0(63112,"MaterialIcons",!1)
D.efA=new B.y(D.ak4,"Crop")
D.d2a=w([D.evh,D.ekw,D.eks,D.eiy,D.efA],x.f2)
D.d2N=w([],x.D)
D.fVJ=w([],x.L)
D.eiL=new B.y("Flashcard",D.Hw)
D.emq=new B.y("Quiz",D.Hx)
D.eoh=new B.y("Worksheet",D.Hy)
D.elv=new B.y("Notes",D.mw)
D.emV=new B.y("Section",D.Ck)
D.d3q=w([D.eiL,D.emq,D.eoh,D.elv,D.emV],B.ax("O<+(n,mr)>"))
D.dyu=new C.kP(6,"beadedPearl")
D.bcV=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fVN=w([N.WH,D.bcV,A.hV],x.O)
D.aE0=new C.ji("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dyu,4294966774,4286209070,4291404327,D.jD)
D.dyv=new C.kP(7,"artDeco")
D.bgI=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bjq=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fVL=w([D.bgI,D.bjq,A.bY],x.O)
D.aE1=new C.ji("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dyv,4294440434,4280228630,4290283019,D.jD)
D.dyw=new C.kP(8,"rosetteCorners")
D.biB=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b8O=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bcQ=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fVo=w([D.biB,D.b8O,D.bcQ],x.O)
D.aE_=new C.ji("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dyw,4294702831,4285218602,4291394365,D.jD)
D.dyx=new C.kP(9,"modernLedger")
D.fVn=w([A.c,D.j7,D.j7],x.O)
D.aDZ=new C.ji("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dyx,4294967295,4279378237,4279378237,D.jD)
D.d3u=w([D.aE0,D.aE1,D.aE_,D.aDZ],x.h)
D.d3C=w([A.io,A.op],x.O)
D.ci=new C.hw(0,"none")
D.dd=new C.hw(1,"fade")
D.Hz=new C.hw(3,"slideRight")
D.aEZ=new C.hw(5,"slideDown")
D.dT8=new C.hw(7,"zoomOut")
D.a4b=new C.hw(11,"cube")
D.dT3=new C.hw(12,"blur")
D.aEW=new C.hw(13,"dissolve")
D.dT4=new C.hw(14,"wipeLeft")
D.dT5=new C.hw(15,"wipeRight")
D.Re=new C.hw(17,"push")
D.dT6=new C.hw(18,"flash")
D.aEY=new C.hw(20,"swing")
D.dT7=new C.hw(21,"curtain")
D.PT=w([D.ci,D.dd,D.u6,D.Hz,D.u7,D.aEZ,D.mx,D.dT8,D.HA,D.aF_,D.Rd,D.a4b,D.dT3,D.aEW,D.dT4,D.dT5,D.q2,D.Re,D.dT6,D.aEX,D.aEY,D.dT7],x.i)
D.PU=w([D.a3R,D.a3P,D.a3I,D.a3J,D.a3K,D.a3N,D.a3L,D.a3M,D.a3Q,D.a3O,D.aE0,D.aE1,D.aE_,D.aDZ],x.h)
D.d43=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d47=w([A.Ai,A.hG,A.bY],x.O)
D.ejR=new B.y(A.tI,"Design")
D.ewM=new B.y(D.akl,"Word sizes")
D.et8=new B.y(A.Bv,"Text")
D.bCY=new B.a0(983182,"MaterialIcons",!1)
D.etc=new B.y(D.bCY,"Photo")
D.efc=new B.y(A.lj,"Logo")
D.exU=new B.y(A.G6,"News")
D.d4c=w([D.ejR,D.ewM,D.et8,D.etc,D.efc,D.exU],x.f2)
D.d4d=w(["golddust","sparkle","sheen"],x.s)
D.dUv=new C.eu("upload_pdf",K.Nc,"Upload PDF")
D.dTF=new C.eu("sign_paper",A.G3,"Sign Paper")
D.bCe=new B.a0(63438,"MaterialIcons",!1)
D.dUr=new C.eu("hd_photo",D.bCe,"HD Photo")
D.dTx=new C.eu("sharpen",E.ZZ,"Sharpen")
D.dTH=new C.eu("print",K.Nc,"Download PDF")
D.dU8=new C.eu("rotate",D.ak4,"Rotate")
D.dTQ=new C.eu("text_box",A.Bv,"Text Box")
D.dTS=new C.eu("picture",A.tL,"Picture")
D.dTO=new C.eu("title",A.y8,"Title")
D.dTK=new C.eu("subtitle",T.akY,"Subtitle")
D.dUh=new C.eu("bullets",I.a_f,"Bullet List")
D.dTL=new C.eu("numbered",A.N0,"Numbered")
D.dUk=new C.eu("quote",A2.Bn,"Quote")
D.dTX=new C.eu("citation",A.pO,"Citation")
D.dUn=new C.eu("date_stamp",Ah.a_3,"Date Stamp")
D.dUa=new C.eu("page_number",A.y7,"Page #")
D.dUe=new C.eu("header_bar",A.Bx,"Header")
D.dTR=new C.eu("footer_bar",Ar.a_L,"Footer")
D.dTG=new C.eu("divider",A.tK,"Divider")
D.dTC=new C.eu("highlight",A.a_k,"Highlight")
D.dUg=new C.eu("redact",A.yb,"Redact")
D.dU3=new C.eu("callout",A.Bj,"Callout")
D.dUp=new C.eu("checkboxes",I.ajk,"Checklist")
D.dU0=new C.eu("table",A.a_J,"Table")
D.dTV=new C.eu("memo",I.a_v,"Memo")
D.dU4=new C.eu("letter",A.FT,"Letter")
D.bBR=new B.a0(63259,"MaterialIcons",!0)
D.dTw=new C.eu("agenda",D.bBR,"Agenda")
D.dTI=new C.eu("toc",AA.aky,"Contents")
D.bCa=new B.a0(63406,"MaterialIcons",!1)
D.dU1=new C.eu("sig_line",D.bCa,"Sign Line")
D.dTp=new C.eu("initial_line",A.jg,"Initials")
D.dTs=new C.eu("approved",A.lj,"APPROVED")
D.dU6=new C.eu("draft",A.oH,"DRAFT")
D.dUc=new C.eu("confidential",A.jh,"Confidential")
D.dUf=new C.eu("sticky",A.Ni,"Sticky Note")
D.dUo=new C.eu("progress",A.akx,"Progress")
D.bDq=new B.a0(983507,"MaterialIcons",!1)
D.dTD=new C.eu("stars",D.bDq,"Star Rating")
D.dTn=new C.eu("equation",A.ako,"Equation")
D.dTy=new C.eu("timeline",A.Nj,"Timeline")
D.dTW=new C.eu("two_col",A.a_M,"Two Columns")
D.dTA=new C.eu("compare",A1.a_6,"Compare")
D.dTl=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dUt=new C.eu("delete_el",A.e5,"Delete")
D.dUj=new C.eu("bring_fwd",N.akh,"Bring Front")
D.dTq=new C.eu("send_back",N.akg,"Send Back")
D.dU5=new C.eu("align_left",D.a_d,"Align L")
D.dUb=new C.eu("align_center",D.a_c,"Align C")
D.dUs=new C.eu("align_right",D.a_e,"Align R")
D.dTP=new C.eu("word_count",A0.ZI,"Word Count")
D.dTM=new C.eu("link_text",A.hk,"Link")
D.dU9=new C.eu("phone",A.iA,"Phone")
D.dTB=new C.eu("email",A.Bl,"Email")
D.dUu=new C.eu("qr_placeholder",A.jj,"QR Placeholder")
D.dTv=new C.eu("rectangle",A3.vq,"Rectangle")
D.dU_=new C.eu("circle",A.qV,"Circle")
D.dTr=new C.eu("arrow",A.iU,"Arrow")
D.dUi=new C.eu("line",A.tK,"Line")
D.dTE=new C.eu("triangle",A.a_4,"Triangle")
D.bBZ=new B.a0(63318,"MaterialIcons",!1)
D.dTJ=new C.eu("grayscale",D.bBZ,"Grayscale")
D.dTT=new C.eu("brighten",I.ajE,"Brighten")
D.dTY=new C.eu("flip_h",A.FJ,"Flip H")
D.bC5=new B.a0(63348,"MaterialIcons",!1)
D.dUq=new C.eu("flip_v",D.bC5,"Flip V")
D.dUd=new C.eu("cover_page",A.pJ,"Cover Page")
D.dTo=new C.eu("invoice",A.h8,"Invoice")
D.dTz=new C.eu("resume",A.mk,"Resume")
D.dTN=new C.eu("minutes",A.oB,"Minutes")
D.dTt=new C.eu("lab_report",A.Nf,"Lab Report")
D.dTu=new C.eu("rubric",A.xS,"Rubric")
D.dTZ=new C.eu("flashcard_tool",V.G_,"Flashcard")
D.dUl=new C.eu("quiz_tool",A.FX,"Quiz Block")
D.dU2=new C.eu("worksheet_tool",L.FA,"Worksheet")
D.dU7=new C.eu("outline_share",A.Ng,"Share Outline")
D.dUm=new C.eu("export_json",D.ajq,"Export JSON")
D.dTm=new C.eu("new_slide",D.ZH,"New Slide")
D.dTU=new C.eu("present",A.pQ,"Present")
D.d4D=w([D.dUv,D.dTF,D.dUr,D.dTx,D.dTH,D.dU8,D.dTQ,D.dTS,D.dTO,D.dTK,D.dUh,D.dTL,D.dUk,D.dTX,D.dUn,D.dUa,D.dUe,D.dTR,D.dTG,D.dTC,D.dUg,D.dU3,D.dUp,D.dU0,D.dTV,D.dU4,D.dTw,D.dTI,D.dU1,D.dTp,D.dTs,D.dU6,D.dUc,D.dUf,D.dUo,D.dTD,D.dTn,D.dTy,D.dTW,D.dTA,D.dTl,D.dUt,D.dUj,D.dTq,D.dU5,D.dUb,D.dUs,D.dTP,D.dTM,D.dU9,D.dTB,D.dUu,D.dTv,D.dU_,D.dTr,D.dUi,D.dTE,D.dTJ,D.dTT,D.dTY,D.dUq,D.dUd,D.dTo,D.dTz,D.dTN,D.dTt,D.dTu,D.dTZ,D.dUl,D.dU2,D.dU7,D.dUm,D.dTm,D.dTU],B.ax("O<eu>"))
D.d4M=w([A.cp,A.ak],x.O)
D.eeL=new B.y(4286331629,4292552567)
D.eey=new B.y(4280640491,4278630100)
D.eeT=new B.y(4294538006,4292943176)
D.edV=new B.y(4278556265,4280640491)
D.d_d=w([D.eeL,D.eey,D.eeT,D.edV],x.n)
D.cp0=w([4294626325,4280472558,4294210230],x.t)
D.dTg=new C.nG("colorful","Colorful",A.na,D.d_d,4294967295,3875536895,D.cp0,D.mx)
D.eem=new B.y(4279522093,4279657780)
D.eeC=new B.y(4281750292,4283268111)
D.edY=new B.y(4278603323,4279203438)
D.eeD=new B.y(4282343954,4279599165)
D.czN=w([D.eem,D.eeC,D.edY,D.eeD],x.n)
D.coJ=w([4288931381,4294829706,4287033260],x.t)
D.dTc=new C.nG("nature","Nature",A.G4,D.czN,4294442727,3874290891,D.coJ,D.dd)
D.eeg=new B.y(4279369771,4283178389)
D.eed=new B.y(4279179050,4286456526)
D.eeu=new B.y(4280163147,4290648157)
D.edN=new B.y(4278322711,4285343961)
D.cR7=w([D.eeg,D.eed,D.eeu,D.edN],x.n)
D.coX=w([4294210230,4280472558,4289170426],x.t)
D.dTa=new C.nG("vibe","Vibe",A.a_i,D.cR7,4294967295,3874869502,D.coX,D.u6)
D.eeP=new B.y(4290007817,4292552567)
D.eeJ=new B.y(4286328082,4294286859)
D.eeO=new B.y(4288485197,4294538006)
D.eeI=new B.y(4285343961,4293675161)
D.bWb=w([D.eeP,D.eeJ,D.eeO,D.eeI],x.n)
D.cp1=w([4294829706,4294967295,4284999929],x.t)
D.dTb=new C.nG("celebration","Celebration",A.le,D.bWb,4294967295,4009752557,D.cp1,D.q2)
D.eeb=new B.y(4279179050,4280171146)
D.eef=new B.y(4279310375,4280232247)
D.ee3=new B.y(4278916151,4280172719)
D.eec=new B.y(4279179050,4281549141)
D.cKk=w([D.eeb,D.eef,D.ee3,D.eec],x.n)
D.coE=w([4281908728,4294626325,4287931320],x.t)
D.dTf=new C.nG("professional","Professional",A.Bh,D.cKk,4294967295,3872118241,D.coE,D.Re)
D.ee7=new B.y(4278995566,4278413729)
D.ee_=new B.y(4278727492,4279137424)
D.eev=new B.y(4280171146,4278751666)
D.ee8=new B.y(4278995566,4279590517)
D.csM=w([D.ee7,D.ee_,D.eev,D.ee8],x.n)
D.coH=w([4286436348,4284410580,4294829706],x.t)
D.dTh=new C.nG("ocean","Ocean",I.a_O,D.csM,4294967295,3873501950,D.coH,D.u7)
D.eeK=new B.y(4286328082,4294538006)
D.eeM=new B.y(4286781507,4294677052)
D.eeG=new B.y(4283178389,4294197086)
D.eeN=new B.y(4288295954,4294688548)
D.cGx=w([D.eeK,D.eeM,D.eeG,D.eeN],x.n)
D.cp2=w([4294829706,4294967295,4294747557],x.t)
D.dTi=new C.nG("sunset","Sunset",A.Nl,D.cGx,4294967295,4009749973,D.cp2,D.dd)
D.eeX=new B.y(4294967295,4294047225)
D.eeS=new B.y(4294507260,4294967295)
D.eeW=new B.y(4294967295,4293060848)
D.eeR=new B.y(4294507260,4294047225)
D.cUb=w([D.eeX,D.eeS,D.eeW,D.eeR],x.n)
D.coC=w([4280640491,4279179050,4287931320],x.t)
D.dTe=new C.nG("minimal","Minimal",A3.vq,D.cUb,4279179050,4282865001,D.coC,D.dd)
D.ee6=new B.y(4278979081,4280886564)
D.eeq=new B.y(4280031511,4278979081)
D.eee=new B.y(4279308561,4281148438)
D.ee5=new B.y(4278979081,4280031511)
D.d6F=w([D.ee6,D.eeq,D.eee,D.ee5],x.n)
D.coQ=w([4292128567,4294829706,4289241758],x.t)
D.dTj=new C.nG("elegant","Elegant",A.lM,D.d6F,4294898631,3873957348,D.coQ,D.aEW)
D.ees=new B.y(4280159034,4282058596)
D.ee2=new B.y(4278916151,4280163147)
D.eeA=new B.y(4281208933,4278916151)
D.eej=new B.y(4279502891,4283178389)
D.dd5=w([D.ees,D.ee2,D.eeA,D.eej],x.n)
D.coZ=w([4294296657,4292128567,4291081725],x.t)
D.dTd=new C.nG("royal","Royal Gold",A.iX,D.dd5,4294965222,3874084351,D.coZ,D.mx)
D.edS=new B.y(4278464302,4280163147)
D.ee1=new B.y(4278916151,4279455306)
D.eet=new B.y(4280163147,4283040846)
D.edP=new B.y(4278332450,4281413249)
D.cZV=w([D.edS,D.ee1,D.eet,D.edP],x.n)
D.coD=w([4281193663,4289170426,4294210230],x.t)
D.dTk=new C.nG("aurora","Aurora Glow",A.dW,D.cZV,4293983738,3869766608,D.coD,D.dd)
D.vM=w([D.dTg,D.dTc,D.dTa,D.dTb,D.dTf,D.dTh,D.dTi,D.dTe,D.dTj,D.dTd,D.dTk],B.ax("O<nG>"))
D.bdp=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d5h=w([A.qB,D.bdp,A.qB],x.O)
D.d5y=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d5C=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.et0=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.ejr=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.enT=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ebS=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.emA=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ekR=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.ep1=new B.y("Surprise me","")
D.d66=w([D.et0,D.ejr,D.enT,D.ebS,D.emA,D.ekR,D.ep1],x.L)
D.b7_=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bha=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d6R=w([A.c,D.b7_,D.bha],x.O)
D.d8D=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aEv=new C.kP(0,"heritageGold")
D.bc6=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fVO=w([D.bc6,W.ad3,A.aw],x.O)
D.dwJ=new C.ji("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aEv,4294570461,4284234270,4292128567,D.jD)
D.aEw=new C.kP(1,"heritageCrimson")
D.b5u=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bax=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bh0=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fVr=w([D.b5u,D.bax,D.bh0],x.O)
D.dwC=new C.ji("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aEw,4294635750,4285213214,4292912216,D.jD)
D.d8H=w([D.a3R,D.a3P,D.dwJ,D.dwC,D.a3K,D.a3N],x.h)
D.dCB=new C.rl(1,"circuit")
D.dD3=new C.m1("neural","Neural Link","Robotic",D.dCB,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dCA=new C.rl(0,"grid")
D.dD0=new C.m1("signal","Signal Grid","Robotic",D.dCA,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dCG=new C.rl(2,"hexes")
D.dCM=new C.m1("core","Core Protocol","Robotic",D.dCG,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aET=new C.rl(11,"diagonal")
D.dCX=new C.m1("steel","Steel Tech","Robotic",D.aET,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aEU=new C.rl(3,"rings")
D.dCL=new C.m1("vault","Vault Gold","Robotic",D.aEU,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dCE=new C.rl(13,"leaves")
D.dCO=new C.m1("forest","Forest Morning","Nature",D.dCE,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aEV=new C.rl(5,"waves")
D.dCV=new C.m1("ocean","Ocean Calm","Nature",D.aEV,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dCH=new C.rl(6,"sunset")
D.dD_=new C.m1("sunset","Sunset Glow","Nature",D.dCH,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dCI=new C.rl(7,"mountains")
D.dCN=new C.m1("mountain","Mountain Air","Nature",D.dCI,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dCJ=new C.rl(8,"stars")
D.dCU=new C.m1("night","Night Sky","Nature",D.dCJ,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a49=new C.rl(4,"orbs")
D.dCS=new C.m1("aurora","Aurora","Nature",D.a49,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dD1=new C.m1("sand","Sand Dune","Nature",D.aEV,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dCK=new C.rl(9,"rays")
D.dCR=new C.m1("golden","Golden Hour","Warm",D.dCK,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dCP=new C.m1("royal","Royal Purple","Warm",D.aET,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dCQ=new C.m1("rose","Rose Petal","Warm",D.a49,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dCD=new C.rl(12,"blocks")
D.dCT=new C.m1("electric","Electric Blue","Bold",D.dCD,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dD2=new C.m1("mint","Fresh Mint","Bold",D.a49,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dCF=new C.rl(14,"minimal")
D.dCZ=new C.m1("white","Clean White","Clean",D.dCF,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dCC=new C.rl(10,"frame")
D.dCW=new C.m1("midnight","Midnight Gold","Clean",D.dCC,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dCY=new C.m1("community","Community Green","Clean",D.aEU,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2r=w([D.dD3,D.dD0,D.dCM,D.dCX,D.dCL,D.dCO,D.dCV,D.dD_,D.dCN,D.dCU,D.dCS,D.dD1,D.dCR,D.dCP,D.dCQ,D.dCT,D.dD2,D.dCZ,D.dCW,D.dCY],B.ax("O<m1>"))
D.d93=w([D.Ap,A.wV,A.hG,A.bY],x.O)
D.d9j=w([D.adV,D.j7],x.O)
D.d9s=w(["pdf","docx","txt","md"],x.s)
D.eBe=new B.bt(-3,150,34)
D.eBf=new B.bt(-3,214,62)
D.eBg=new B.bt(-3,288,62)
D.dag=w([D.eBe,D.eBf,D.eBg],B.ax("O<+(N,N,N)>"))
D.daK=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dbj=w(["Write","Design","Print & fold"],x.s)
D.jE=new C.uw(2,"triangle")
D.Cl=new C.uw(3,"arrow")
D.fp=new C.uw(4,"line")
D.jF=new C.uw(5,"parallelogram")
D.dbm=w([D.be,D.eI,D.jE,D.Cl,D.fp,D.jF,D.kT],x.m)
D.ed0=new B.y(240,96)
D.eft=new B.y(560,46)
D.dbr=w([D.ed0,D.eft],x.G)
D.fVZ=new C.xj(0,"classic")
D.dyA=new C.nC("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aEv,4294570461,4282000405,4284234270)
D.dyM=new C.nC("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aEw,4294635750,4281999378,4285213214)
D.dyB=new C.nC("elegant_navy","Umoja Mzuri",y.s,D.a43,4294967035,4279378237,4290283019)
D.dyO=new C.nC("elegant_gold","Umoja wa Dhahabu",y.Q,D.aEE,4294966515,4281016592,4289102906)
D.dyQ=new C.nC("kente_sunset","Kente ya Jua",y.H,D.aEx,4294964964,4282000405,4279983648)
D.dyy=new C.nC("indigo_mudcloth","Nguo ya Indigo",y.n,D.aEy,4294439140,4279903102,4279903102)
D.dyD=new C.nC("adinkra_royal","Muhuri wa Adinkra",y.z,D.aEz,4294965484,4285218591,4287322667)
D.dyI=new C.nC("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEA,4294244340,4279196764,4279196764)
D.dyK=new C.nC("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEB,4294505710,4279970378,4291058750)
D.fW_=new C.xj(1,"ringsNdoa")
D.dyC=new C.nC("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rj,4294966259,4279378237,4291404327)
D.fW1=new C.xj(2,"coupleCards")
D.dyN=new C.nC("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rj,4294966259,4279378237,4291404327)
D.fW2=new C.xj(3,"kuhoweshaForm")
D.dyJ=new C.nC("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cf,4294966519,4279378237,4291404327)
D.fW3=new C.xj(4,"mahariPande")
D.dyz=new C.nC("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rj,4294966259,4279904068,4291404327)
D.fW4=new C.xj(5,"familiaMti")
D.dyP=new C.nC("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEC,4294966776,4280241466,4291404327)
D.fW5=new C.xj(6,"ndoaSafi")
D.dyG=new C.nC("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cf,4294966519,4279378237,4291404327)
D.fW6=new C.xj(7,"peteWide")
D.dyF=new C.nC("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rj,4294966259,4282001936,4291404327)
D.fW7=new C.xj(8,"muhuriCrest")
D.dyE=new C.nC("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rj,4294966259,4279378237,4291404327)
D.fW8=new C.xj(9,"fomuWazi")
D.dyH=new C.nC("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cf,4294966519,4279904068,4291404327)
D.fW0=new C.xj(10,"upendoOrnate")
D.dyL=new C.nC("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aED,4294965493,4286200650,4291404327)
D.Q6=w([D.dyA,D.dyM,D.dyB,D.dyO,D.dyQ,D.dyy,D.dyD,D.dyI,D.dyK,D.dyC,D.dyN,D.dyJ,D.dyz,D.dyP,D.dyG,D.dyF,D.dyE,D.dyH,D.dyL],B.ax("O<nC>"))
D.Cj=new C.aq5(0,"landscape169")
D.o4=new C.aq5(1,"portrait916")
D.dcc=w([D.Cj,D.o4],B.ax("O<aq5>"))
D.axf=w([A.hG,A.bK,A.ct,A.io,A.c],x.O)
D.u_=w([A.bY,A.it],x.O)
D.ecf=new B.y(1000,"M")
D.egz=new B.y(900,"CM")
D.efo=new B.y(500,"D")
D.edL=new B.y(400,"CD")
D.ecg=new B.y(100,"C")
D.egA=new B.y(90,"XC")
D.efp=new B.y(50,"L")
D.edM=new B.y(40,"XL")
D.ecl=new B.y(10,"X")
D.egK=new B.y(9,"IX")
D.efE=new B.y(5,"V")
D.efb=new B.y(4,"IV")
D.ecI=new B.y(1,"I")
D.dcM=w([D.ecf,D.egz,D.efo,D.edL,D.ecg,D.egA,D.efp,D.edM,D.ecl,D.egK,D.efE,D.efb,D.ecI],x.ek)
D.eCb=new B.cH(["open",A.jg,"Open & write","Keep writing this book"])
D.eCC=new B.cH(["print",A.tO,"Print as a book","Fold and staple it"])
D.dcW=w([D.eCb,D.eCC],B.ax("O<+(n,a0,n,n)>"))
D.ddA=w([D.a4b,D.mx,D.HA,D.Re,D.dd,D.Rd],x.i)
D.etz=new B.y(-1,"Small")
D.ec3=new B.y(0,"Normal")
D.ecH=new B.y(1,"Big")
D.edg=new B.y(2,"Huge")
D.de3=w([D.etz,D.ec3,D.ecH,D.edg],x.ek)
D.det=w([49,65,89,38,83,89],x.t)
D.deA=w([A.wV,A.hG,A.bY],x.O)
D.df0=w([D.dd,D.mx,D.u6,D.a4b,D.HA,D.Re],x.i)
D.aCx=new B.dS([0,D.L4,8,D.aff,12,D.afg],B.ax("dS<H,a36>"))
D.dZf={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bgU=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cKu=w([A.bK,D.bgU],x.O)
D.d3c=w([A.b1,A.bk],x.O)
D.cZ4=w([A.bU,A.aS,A.cj],x.O)
D.dcX=w([A.cp,A.bu],x.O)
D.cS1=w([A.b8,A.fh],x.O)
D.d0F=w([A.b7,A.f7],x.O)
D.bai=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d_Y=w([D.bai,A.op],x.O)
D.cVK=w([A.h0,A.wW],x.O)
D.cRQ=w([A.bt,A.c9],x.O)
D.dhD=new B.bm(D.dZf,[D.cKu,H.anU,D.d3c,D.cZ4,D.dcX,D.cS1,D.d0F,D.d_Y,D.cVK,D.cRQ],B.ax("bm<n,ai<w>>"))
D.dYp={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a32=new B.bm(D.dYp,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bm<n,n>"))
D.a39=new B.bm(A.i2,[],B.ax("bm<H,+icon3d,picture(n?,n?)>"))
D.dlN=new F.Ms(30,null)
D.dqR=new F.mn("Chapter 1","","","")
D.dbZ=w([D.dqR],x.B)
D.dqV=new F.rb("My Book","","",D.dbZ,E.aDP)
D.dqT=new F.um("starry",null,null,null,null,"","","")
D.dqW=new F.rb("Dream Big","","",E.a29,D.dqT)
D.dqU=new F.um("story",null,null,null,null,"","","")
D.dqX=new F.rb("Little Lion","","",E.a29,D.dqU)
D.dqS=new F.um("vintage",null,null,null,null,"","","")
D.dqY=new F.rb("Our Story","","",E.a29,D.dqS)
D.dtZ=new C.Ea("","NGMY","","")
D.dBe=new C.z9("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dT9=new C.b_Z(null,null,null,null)
D.dUS=new C.aqa(null)
D.dV4=new C.aqG(0,"smaller")
D.dV5=new C.aqG(1,"bigger")
D.aF8=new C.aqG(2,"fit")
D.e0H=new B.u(3,6)
D.e0R=new B.u(4,8)
D.e4g=new B.C(E.ag2,T.aaY,null)
D.e4k=new B.C(A.XF,A.lz,null)
D.bEH=new B.ae(A.lh,16,A.c_,null,null,null)
D.e4o=new B.C(A.jd,D.bEH,null)
D.b4X=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e4A=new B.C(A.Fd,D.b4X,null)
D.bOT=new B.ae(A.cA,16,A.az,null,null,null)
D.e4E=new B.C(A.eo,D.bOT,null)
D.fgn=new B.x("Play",null,A.np,null,null,null,null,null,null,null,null,null)
D.d3r=w([U.amo,A.rw,D.fgn],x.p)
D.eGN=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d3r,null)
D.e4H=new B.C(A.nS,D.eGN,null)
D.b55=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eM1=new B.a7(20,20,D.b55,null)
D.e4M=new B.C(A.jd,D.eM1,null)
D.fpi=new B.x("Seconds per slide",null,A.ho,null,null,null,null,null,null,null,null,null)
D.e4U=new B.C(A.bj,D.fpi,null)
D.e6e=new C.a7W(2,"print")
D.e6h=new B.iN(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e7U=new B.h6("/Annot")
D.e7W=new B.h6("/URI")
D.faS=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e9U=new B.jk("share",48,D.faS,null,B.ax("jk<n>"))
D.bON=new B.ae(A.dW,14,A.ez,null,null,null)
D.ea2=new B.cL(null,-2,-2,null,null,null,D.bON,null)
D.cMr=w([N.ady,A.K],x.O)
D.bV0=new B.a8(A.a3,A.a7,A.x,D.cMr,null,null)
D.aYO=new B.o(null,null,null,null,null,D.bV0,A.n)
D.blw=new B.kM(D.aYO,A.bd,null,null)
D.eae=new B.cL(0,0,null,0,8,null,D.blw,null)
D.d7I=w([A.hU,A.oq,A.cd],x.O)
D.eaT=new B.bS(A.A,0.5,A.x,null,0,D.d7I,null,null)
D.ed9=new B.y(0.22,A.bk)
D.eh4=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ej6=new B.y(0.5,A.hf)
D.es9=new B.y(0.78,A.aV)
D.eC1=new B.cH([A.by,0.22,0.7,2.6])
D.eC7=new B.cH([A.b8,0.36,1.2,1.3])
D.eCd=new B.cH([A.dO,0.28,0.2,0.4])
D.eCj=new B.cH([A.cy,0.05,0.3,0.35])
D.eCp=new B.cH([A.bt,0.28,0.9,0])
D.eCx=new B.cH([A.aE,-0.25,-0.15,0.45])
D.eDn=new B.cH([A.bU,0.42,1,4.1])
D.eGv=new B.a8S(9)
D.bFN=new B.ae(A.G6,28,A.cj,null,null,null)
D.fpR=new B.x("NGMY News",null,A.ds,null,null,null,null,null,null,null,null,null)
D.bve=new B.bD(1,A.bi,D.fpR,null)
D.daN=w([D.bFN,A.av,D.bve],x.p)
D.eGH=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.daN,null)
D.bFY=new B.ae(A.pO,16,A.c,null,null,null)
D.frh=new B.x("Book",null,A.ob,null,null,null,null,null,null,null,null,null)
D.dez=w([D.bFY,A.eb,D.frh],x.p)
D.eGP=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dez,null)
D.bMo=new B.ae(A.jh,10,A.c,null,null,null)
D.fev=new B.x("Pro",null,A.nn,null,null,null,null,null,null,null,null,null)
D.d3w=w([D.bMo,A.q9,D.fev],x.p)
D.eGT=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d3w,null)
D.fph=new B.x("Make a newspaper",null,Au.Tg,null,null,null,null,null,null,null,null,null)
D.bW9=w([E.a08,A.ab,D.fph],x.p)
D.eGU=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bW9,null)
D.bKX=new B.ae(A.le,18,A.bK,null,null,null)
D.fgB=new B.x("Ending celebration",null,A.i4,null,null,null,null,null,null,null,null,null)
D.d9S=w([D.bKX,A.bp,D.fgB],x.p)
D.eGX=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.d9S,null)
D.bMa=new B.ae(A.jg,18,A.jQ,null,null,null)
D.eWu=new B.G(!0,A.jQ,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fry=new B.x("Write",null,D.eWu,null,null,null,null,null,null,null,null,null)
D.cU0=w([D.bMa,A.ab,D.fry],x.p)
D.eH1=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cU0,null)
D.fet=new B.x("Download picture",null,A.qd,null,null,null,null,null,null,null,null,null)
D.bxh=new B.qd(A.eg,A.A,A.f,D.fet,null)
D.bxs=new B.dq(1,A.cl,D.bxh,null)
D.d3T=w([K.ame,A.ab,D.bxs],x.p)
D.eH2=new B.cn(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d3T,null)
D.bHK=new B.ae(A.G6,22,A.cj,null,null,null)
D.fnW=new B.x("NGMY NEWS",null,H.a6I,null,null,null,null,null,null,null,null,null)
D.cLT=w([D.bHK,A.ab,D.fnW],x.p)
D.eHa=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cLT,null)
D.eHl=new B.p2(!1,!1,null,T.V6,null,A.bX,null,null,null)
D.a5O=new B.jL([D.ci,D.dd,D.u6,D.Hz,D.u7,D.aEZ],B.ax("jL<hw>"))
D.e_v={title:0,quote:1,closing:2,bio:3}
D.eIt=new B.eK(D.e_v,4,x.M)
D.dYH={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eIv=new B.eK(D.dYH,5,x.M)
D.e_0={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5P=new B.eK(D.e_0,8,x.M)
D.dZn={Design:0,Transitions:1,Insert:2}
D.eIz=new B.eK(D.dZn,3,x.M)
D.fWg=new B.jL([D.a4c],B.ax("jL<vL>"))
D.dZv={float3d:0,drift:1,pulse:2}
D.eIC=new B.eK(D.dZv,3,x.M)
D.aMd=new B.jL([D.Hw,D.Hx,D.Hy],B.ax("jL<mr>"))
D.dYE={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aMg=new B.eK(D.dYE,14,x.M)
D.fWh=new B.eK(A.i2,0,B.ax("eK<vL>"))
D.dZs={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sh=new B.eK(D.dZs,4,x.M)
D.dYx={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aMj=new B.eK(D.dYx,30,x.M)
D.dZA={circle:0,triangle:1,hexagon:2,diamond:3}
D.eIS=new B.eK(D.dZA,4,x.M)
D.eL0=new B.at(390,844)
D.eLM=new B.a7(20,20,A6.JZ,null)
D.aN5=new B.a7(null,2.5,null,null)
D.eLW=new B.a7(18,18,A6.JZ,null)
D.bMe=new B.ae(A.iX,19,A.c,null,null,null)
D.eM6=new B.a7(38,38,D.bMe,null)
D.bKx=new B.ae(A.yf,22,A.c,null,null,null)
D.eM8=new B.a7(40,40,D.bKx,null)
D.eMH=new B.hK(2,10,10,1.15,null)
D.aNd=new B.hK(2,16,14,0.62,null)
D.bth=new B.Q(32,30,32,40)
D.b6l=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bFK=new B.ae(A.pJ,56,D.b6l,null,null,null)
D.aer=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eYr=new B.G(!0,D.aer,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl1=new B.x("Your books will live here.",null,D.eYr,null,A.L,null,null,null,null,null,null,null)
D.cWB=w([D.bFK,A.S,D.fl1],x.p)
D.bkJ=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cWB,null)
D.e4S=new B.C(D.bth,D.bkJ,null)
D.eN1=new B.m4(D.e4S,null)
D.fkZ=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eNj=new B.b1(D.fkZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fj7=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eNk=new B.b1(D.fj7,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnZ=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eNt=new B.b1(D.fnZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fov=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eNI=new B.b1(D.fov,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhN=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eNV=new B.b1(D.fhN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvo=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eOd=new B.b1(D.fvo,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsB=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new B.b1(D.fsB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.foD=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eP4=new B.b1(D.foD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fcQ=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePk=new B.b1(D.fcQ,null,null,null,null,null,null,null,A.ij,null,null,null,null,A.pz,!1,null,null,null,A.r,null)
D.feB=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.ePC=new B.b1(D.feB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkG=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ePE=new B.b1(D.fkG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkm=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.ePF=new B.b1(D.fkm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqB=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ePG=new B.b1(D.fqB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f95=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ePP=new B.b1(D.f95,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ffJ=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eQb=new B.b1(D.ffJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fu9=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eQd=new B.b1(D.fu9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftI=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eQh=new B.b1(D.ftI,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f85=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eQj=new B.b1(D.f85,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpM=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eQs=new B.b1(D.fpM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftj=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eQH=new B.b1(D.ftj,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fta=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eQJ=new B.b1(D.fta,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f7Y=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eQP=new B.b1(D.f7Y,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbR=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eRg=new B.b1(D.fbR,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fso=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eRr=new B.b1(D.fso,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbF=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eRG=new B.b1(D.fbF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bd6=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cKI=w([A.io,A.op,D.bd6,D.abo,A.io],x.O)
D.eS3=new B.fS(A.A,0,6.283185307179586,A.x,D.cKI,null,null)
D.cTd=w([A.bK,A.bY,A.hG,D.Ap,A.bK],x.O)
D.aNN=new B.fS(A.A,0,6.283185307179586,A.x,D.cTd,null,null)
D.d5w=w([A.bU,A.by,A.b8,A.b4,A.cj,A.bU],x.O)
D.eS8=new B.fS(A.A,0,6.283185307179586,A.x,D.d5w,null,null)
D.cMF=w([A.pw,A.or,A.Ae,A.io,A.pw],x.O)
D.eS9=new B.fS(A.A,0,6.283185307179586,A.x,D.cMF,null,null)
D.d5q=w([A.aP,A.bJ,A.aL,A.ak,A.aP],x.O)
D.eSa=new B.fS(A.A,0,6.283185307179586,A.x,D.d5q,null,null)
D.dcD=w([A.bt,A.b8,A.by,A.bU,A.bt],x.O)
D.eSc=new B.fS(A.A,0,6.283185307179586,A.x,D.dcD,null,null)
D.bdo=new B.w(1,0,1,1,A.t)
D.b7y=new B.w(1,1,0,1,A.t)
D.d8W=w([A.E0,A.adg,H.acc,D.bdo,H.acB,D.b7y,A.E0],x.O)
D.eSd=new B.fS(A.A,0,6.283185307179586,A.x,D.d8W,null,null)
D.eSs=new C.auI(2,"immersiveSticky")
D.eSt=new C.auI(3,"edgeToEdge")
D.eSu=new C.auI(4,"manual")
D.eUJ=new B.G(!0,A.ol,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOi=new B.G(!0,A.f3,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVh=new B.G(!0,E.mW,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWL=new B.G(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXT=new B.G(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new B.G(!0,A.ez,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZy=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZH=new B.G(!0,A.ja,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new B.ru(!0,A.HS,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_o=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f00=new B.G(!0,A.j9,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new B.G(!0,A.az,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e6k=new B.iN(1,1,0.7568627450980392,0.027450980392156862)
D.f0s=new B.ru(!0,D.e6k,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adn=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aP1=new B.G(!0,D.adn,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0z=new B.G(!0,D.aer,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0A=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP3=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1d=new B.ru(!0,A.oT,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1u=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ta=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f21=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f23=new B.G(!0,D.adn,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IK=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new B.G(!0,A.bY,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2E=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2H=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Y=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.av4,null,null,null)
D.f3_=new B.G(!0,A.cg,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f31=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3e=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3p=new B.G(!0,A.dw,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new B.G(!0,A.aR,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f44=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4i=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPF=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPH=new B.G(!0,A.c_,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.biq=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f61=new B.G(!0,D.biq,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPP=new B.G(!0,E.mW,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6w=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6z=new B.G(!0,O.l8,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_C=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7L=new B.x("NEW",null,D.f_C,null,null,null,null,null,null,null,null,null)
D.f80=new B.x("Hati ya Kuhowesha",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f8t=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f8N=new B.x("Scrollable PDF on this slide",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f9u=new B.x("Big quote mark",null,A.iG,null,null,null,null,null,null,null,null,null)
D.f9x=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fa9=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fab=new B.x("How many slides?",null,A.ho,null,null,null,null,null,null,null,null,null)
D.faJ=new B.x("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eWx=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb3=new B.x("Luxury FX",null,D.eWx,null,null,null,null,null,null,null,null,null)
D.fbp=new B.x("Font",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fbA=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fbG=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f5z=new B.G(!0,A.bJ,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbO=new B.x("Example  GA847",null,D.f5z,null,null,null,null,null,null,null,null,null)
D.fcd=new B.x("Design shapes",null,A.iG,null,null,null,null,null,null,null,null,null)
D.fcm=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fcq=new B.x("Non-stop (loop)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fcE=new B.x("Hati ya Kuhoweya",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fcX=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fdm=new B.x("Add your picture",null,A.kZ,null,null,null,null,null,null,null,null,null)
D.eZW=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new B.x("Enter document code",null,D.eZW,null,A.L,null,null,null,null,null,null,null)
D.fdo=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fdt=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eXz=new B.G(!0,E.mW,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdM=new B.x("Delete this book?",null,D.eXz,null,A.L,null,null,null,null,null,null,null)
D.f12=new B.G(!0,E.mW,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feD=new B.x("Your library",null,D.f12,null,null,null,null,null,null,null,null,null)
D.feI=new B.x("Delete",null,A.aOW,null,null,null,null,null,null,null,null,null)
D.feK=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.IH,null,null,null,null,null,null,null,null,null)
D.feV=new B.x("Element flies in",null,A.aP7,null,null,null,null,null,null,null,null,null)
D.Tq=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.ffj=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.ffC=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.ffG=new B.x("Cancel",null,E.aPh,null,null,null,null,null,null,null,null,null)
D.ffI=new B.x("The lines and circles that come with the design",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f4q=new B.G(!0,A.hh,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.x("DOCUMENT CODE",null,D.f4q,null,null,null,null,null,null,null,null,null)
D.fgW=new B.x("Quotes",null,G.a7j,null,null,null,null,null,null,null,null,null)
D.eZl=new B.G(!0,O.l8,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new B.x("Add a picture",null,D.eZl,null,null,null,null,null,null,null,null,null)
D.fhb=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6Z,null,A.L,null,null,null,null,null,null,null)
D.fhf=new B.x("Look & feel",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fhk=new B.x("Rings",null,A.i4,null,null,null,null,null,null,null,null,null)
D.fhq=new B.x("W",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fhA=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IJ,null,A.L,null,null,null,null,null,null,null)
D.fhV=new B.x("Write your book",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fiG=new B.x("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fiU=new B.x("Malipo ya Awamu ya Mahari",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eZL=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new B.x("Create with AI",null,D.eZL,null,A.L,null,null,null,null,null,null,null)
D.fjB=new B.x("Apply look",null,A.i4,null,null,null,null,null,null,null,null,null)
D.f_t=new B.G(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fko=new B.x("Type your presentation below",null,D.f_t,null,A.L,null,null,null,null,null,null,null)
D.fkr=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aPR,null,A.L,null,null,null,null,null,null,null)
D.fkt=new B.x("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eVy=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkA=new B.x("Done",null,D.eVy,null,null,null,null,null,null,null,null,null)
D.fkV=new B.x("Delete",null,A.no,null,null,null,null,null,null,null,null,null)
D.fl3=new B.x("Hati ya Kiapo cha Uongozi",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eYJ=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flW=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eYJ,null,A.L,null,null,null,null,null,null,null)
D.fmh=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fmn=new B.x("Layout",null,A.Ti,null,null,null,null,null,null,null,null,null)
D.fmZ=new B.x("Print",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fn3=new B.x("X",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fnD=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.T4,null,null,null,null,null,null,null,null,null)
D.foa=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fom=new B.x("Hati ya Kuhowa",null,A.hq,null,null,null,null,null,null,null,null,null)
D.foo=new B.x("Choose a class template",null,A.hq,null,null,null,null,null,null,null,null,null)
D.foq=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fox=new B.x("Download the newspaper picture",null,A.cx,null,null,null,null,null,null,null,null,null)
D.foJ=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.foQ=new B.x("Done",null,A.aPE,null,null,null,null,null,null,null,null,null)
D.fp_=new B.x("Ending celebration",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fp0=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fpf=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.SW,null,null,null,null,null,null,null,null,null)
D.fqb=new B.x("Export presentation",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fqc=new B.x("What would you like to do?",null,D.aP1,null,null,null,null,null,null,null,null,null)
D.fqf=new B.x("Delete",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fqJ=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fqN=new B.x("Hati (Documents)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fr_=new B.x("Done",null,A.l0,null,null,null,null,null,null,null,null,null)
D.f5p=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr4=new B.x("Delete presentation?",null,D.f5p,null,A.L,null,null,null,null,null,null,null)
D.frl=new B.x("After the last slide it starts again from the first",null,A.hp,null,null,null,null,null,null,null,null,null)
D.frw=new B.x("\ud83c\udf33",null,A.IE,null,A.L,null,null,null,null,null,null,null)
D.frO=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.frV=new B.x("Transfer document",null,A.p1,null,null,null,null,null,null,null,null,null)
D.fs5=new B.x("Add to the slides",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fss=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fsH=new B.x("Make a book",null,I.aOz,null,null,null,null,null,null,null,null,null)
D.fsL=new B.x("Books",null,A.cx,null,null,null,null,null,null,null,null,null)
D.eZe=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new B.x("Keep this page open until it finishes.",null,D.eZe,null,null,null,null,null,null,null,null,null)
D.fsP=new B.x("Making your video",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fsU=new B.x("LANGUAGE",null,D.Ta,null,null,null,null,null,null,null,null,null)
D.ft0=new B.x("Use this ending",null,A.cx,null,null,null,null,null,null,null,null,null)
D.ft8=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new B.x("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.ftp=new B.x("Delete from the database?",null,A.kZ,null,null,null,null,null,null,null,null,null)
D.ftq=new B.x("H",null,A.rC,null,null,null,null,null,null,null,null,null)
D.ftO=new B.x("NGMY Quotes",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fue=new B.x("Cover",null,D.aPP,null,null,null,null,null,null,null,null,null)
D.fui=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fuj=new B.x("Each page becomes its own slide you can present",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fuG=new B.x("Y",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fuR=new B.x("Crop the picture",null,A.l0,null,null,null,null,null,null,null,null,null)
D.fuX=new B.x("Edit text",null,A.IF,null,null,null,null,null,null,null,null,null)
D.fxa=B.dR("a7I")
D.De=new C.aw1(0,"none")
D.aSH=new C.aw1(1,"zipCrypto")
D.aSI=new C.aw1(2,"aes")
D.fLn=new F.OT("","",null)
D.fMt=new C.bb6(null)
D.fNA=new C.YZ(null)
D.fP9=new C.acx(null)
D.fPb=new C.aDd(null)
D.fRX=new C.a_d(null)
D.fSc=new C.a_I(null)
D.fSv=new C.bsB(null)})();(function staticFields(){$.h9_=null
$.h90=null
$.h91=null
$.h92=null
$.fSa=B.uV("_lastQuoRemDigits")
$.fSb=B.uV("_lastQuoRemUsed")
$.awn=B.uV("_lastRemUsed")
$.fSc=B.uV("_lastRem_nsh")
$.q_=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6x=B.T(x.N,x.I)
$.fPH=!1
$.hdN=B.T(B.ax("kP"),x.N)
$.he_=B.T(B.ax("kP"),x.E)
$.hc_=!1
$.bye="q"
$.PQ=0
$.Ch=B.T(x.N,B.ax("ai<zb>"))
$.hcm=!1
$.fTL=!1
$.hiz=null
$.hMD=B.T(x.N,B.ax("ay<n?>"))
$.JY=""
$.iY=0
$.h5M=function(){var w=x.N
return B.T(w,w)}()
$.h5L=B.T(x.N,x.R)
$.fU5=!1
$.afb=B.T(x.N,x.E)
$.fUT=0
$.bja=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iaM","CF",()=>C.b8C(0))
w($,"iaK","a1W",()=>C.b8C(1))
w($,"iaL","hm8",()=>C.b8C(2))
w($,"iaJ","fYC",()=>$.a1W().uN(0))
w($,"iaH","hm6",()=>C.b8C(1e4))
w($,"iaI","hm7",()=>B.DT(8))
w($,"i6z","hk9",()=>B.DT(0))
w($,"i6H","hkd",()=>B.DT(0))
w($,"i6G","hkc",()=>B.bWQ(0))
w($,"ieq","ho8",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a32.gdK(D.a32),v=v.gae(v);v.C();){u=v.gS(v)
t.n(0,u.b,u.a)}return t})
w($,"ieR","bCL",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mQ(new C.fAJ(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mQ(new C.fAK(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mQ(new C.fAL(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mQ(new C.fAW(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mQ(new C.fB0(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mQ(new C.fB1(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mQ(new C.fB2(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mQ(new C.fB3(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mQ(new C.fB4(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mQ(new C.fB5(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mQ(new C.fB6(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mQ(new C.fAM(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mQ(new C.fAN(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mQ(new C.fAO(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mQ(new C.fAP(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mQ(new C.fAQ(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mQ(new C.fAR(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mQ(new C.fAS(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mQ(new C.fAT(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mQ(new C.fAU(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mQ(new C.fAV(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mQ(new C.fAX(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mQ(new C.fAY(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mQ(new C.fAZ(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mQ(new C.fB_(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Ej>"))})
w($,"iet","hoa",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["Zf2pXdOhAo/CEFHylMOynBmaOUI="]=a.current})($__dart_deferred_initializers__);