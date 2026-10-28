((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tA(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fRD(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jd(d){var w
if(d===0)return $.CF()
if(d===1)return $.a1V()
if(d===2)return $.hlz()
if(Math.abs(d)<4294967296)return C.b8s(A.o.N(d))
w=C.hGd(d)
return w},
b8s(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tA(4,w)
return new C.nP(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tA(1,w)
return new C.nP(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tA(2,w)
return new C.nP(v===0?!1:s,w,v)}v=A.o.an(A.o.gajb(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tA(v,w)
return new C.nP(v===0?!1:s,w,v)},
hGd(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CF()
w=$.hly()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ai(w)
w[u]=0}v=J.l3(A.aG.gaM(w))
v.$flags&2&&B.ai(v,13)
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
fRE(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ai(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ai(g)
g[w]=0}return e+f},
h8u(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.G(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fB(t,p)
v&2&&B.ai(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.ai(g)
g[r]=u},
h8p(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.G(f,16)===0)return C.fRE(d,e,s,g)
w=e+s+1
C.h8u(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ai(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hGg(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.G(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fB(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.ai(g)
g[v]=(t|o)>>>0
o=A.o.fB(u,r)}w&2&&B.ai(g)
g[n]=o},
cCX(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hGe(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ai(h)
h[e]=v},
b8t(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h8v(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ai(g)
g[h]=t&65535
v=A.o.an(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ai(g)
g[h]=r&65535
v=A.o.an(r,65536)}},
hGf(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e3((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nP:function nP(d,e,f){this.a=d
this.b=e
this.c=f},
cCY:function cCY(){},
cCZ:function cCZ(){},
cD_:function cD_(d,e){this.a=d
this.b=e},
cD0:function cD0(d){this.a=d},
aQ3:function aQ3(d,e){this.a=d
this.b=e},
fZp(d,e,f){var w=new C.Ra(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Ra:function Ra(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a34:function a34(d,e){this.a=d
this.b=e},
bG8:function bG8(d){this.a=d
this.c=this.b=0},
hoM(){return new C.bEv()},
bEv:function bEv(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cv7:function cv7(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hFW(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcTN(d)))
v=f*2+2
u=C.h67(C.h69(),64)
t=new C.cf9(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cfa(e,1000,v)
s=new Uint8Array(v)
return A.aG.dq(s,0,t.cHj(w,0,s,0))},
cv5:function cv5(d,e){this.c=d
this.d=e},
avY:function avY(d,e){this.a=d
this.b=e},
cv8:function cv8(d,e,f,g){var _=this
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
b79:function b79(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cv6:function cv6(){this.a=$},
h7U(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hov(d,e){var w
d.$flags&2&&B.ai(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bD5:function bD5(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fXa(d,e){e&=31
return(d&$.pZ[e])<<e>>>0},
nm(d,e){e&=31
return(d>>>e|C.fXa(d,32-e))>>>0},
h68(d){var w,v=new C.arG()
if(B.iF(d))v.aIY(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h69(){var w=C.h68(0),v=new Uint8Array(4),u=x.S
u=new C.cfb(w,v,A.DE,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lu(0)
return u},
h67(d,e){var w=new C.cf7(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cf6:function cf6(){},
cfa:function cfa(d,e,f){this.a=d
this.b=e
this.c=f},
cf4:function cf4(){},
arF:function arF(d){this.a=d},
cf9:function cf9(d){this.a=$
this.b=d
this.c=$},
cf5:function cf5(){},
cf3:function cf3(){},
arG:function arG(){this.b=this.a=$},
cf8:function cf8(){},
cfb:function cfb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cf7:function cf7(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cf2:function cf2(){},
cf1:function cf1(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bMe:function bMe(){},
bMf:function bMf(d){this.a=d},
hJ8(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8I:function b8I(){},
cp4:function cp4(){},
bN7:function bN7(d,e){this.a=d
this.b=!1
this.c=e},
bN8:function bN8(){},
hRZ(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
auC(d){var w=0,v=B.j(x.H),u
var $async$auC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eS5?2:4
break
case 2:w=5
return B.b(A.k2.fV("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$auC)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k2.fV("SystemChrome.setEnabledSystemUIOverlays",C.hRZ(null),u),$async$auC)
case 6:case 3:return B.h(null,v)}})
return B.i($async$auC,v)},
auF:function auF(d,e){this.a=d
this.b=e},
a7H:function a7H(d){this.a=d},
fNB(d,e){return new C.aUu(e,d,null)},
aUu:function aUu(d,e,f){this.e=d
this.c=e
this.a=f},
azv:function azv(d,e,f,g,h){var _=this
_.ag=d
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
hUA(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fnO(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fnO:function fnO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
amy(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$amy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ag1("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$amy)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cD(t,new C.bXL(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bXM())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amy,v)},
amA(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amy(),$async$amA)
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
return B.b(B.nl("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.af(),"savedAt",l],t,q),null),$async$amA)
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
return B.b(B.nl("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$amA)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amA,v)},
bXN(d){return C.hue(d)},
hue(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bXN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ag1("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hH),$async$bXN)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vg(B.a1(q,x.N,x.z))
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
return B.i($async$bXN,v)},
amz(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amy(),$async$amz)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nn(r,new C.bXO(d))
w=4
return B.b(B.nl("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$amz)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aO6("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$amz)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amz,v)},
bXL:function bXL(){},
bXM:function bXM(){},
bXO:function bXO(d){this.a=d},
i3t(d,e,f){return B.bV(A.K,null,new C.fDA(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fDA:function fDA(d,e,f){this.a=d
this.b=e
this.c=f},
a08:function a08(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHT:function aHT(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f2_:function f2_(d,e){this.a=d
this.b=e},
f23:function f23(d){this.a=d},
f24:function f24(d){this.a=d},
f25:function f25(d,e,f){this.a=d
this.b=e
this.c=f},
f20:function f20(d){this.a=d},
f21:function f21(d){this.a=d},
f22:function f22(d,e){this.a=d
this.b=e},
f1V:function f1V(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1W:function f1W(d){this.a=d},
f1X:function f1X(d){this.a=d},
f29:function f29(d,e){this.a=d
this.b=e},
f28:function f28(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e,f){this.a=d
this.b=e
this.c=f},
f1Y:function f1Y(d,e,f){this.a=d
this.b=e
this.c=f},
f26:function f26(d,e){this.a=d
this.b=e},
f27:function f27(d,e){this.a=d
this.b=e},
f2c:function f2c(d){this.a=d},
f2d:function f2d(d,e){this.a=d
this.b=e},
f2b:function f2b(d,e){this.a=d
this.b=e},
f2a:function f2a(){},
haT(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cD(v,new C.f9c(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a2<J.E>")
v=B.B(new B.a2(v,new C.f9d(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a16(d){return C.hVQ(d)},
hVQ(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a16=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fqk(n)
t=4
j=m
i=C
w=7
return B.b(B.a1G("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a16)
case 7:j.$1(i.haT(f))
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
return B.b(B.az(),$async$a16)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.haT(B.aT(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.f9l(d),$async$a16)
case 13:p=j.B(new i.a2(h,new g.fqi(f),o),o.k("J.E"))
A.d.b_(p,new C.fqj())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a16,v)},
agB(d,e){return C.i38(d,e)},
i38(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agB=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fD4(),x.P)
n=B.B(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agt("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agB)
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
return B.b(B.az(),$async$agB)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agB)
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
return B.i($async$agB,v)},
f9l(d){return C.hKx(d)},
hKx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f9l=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$f9l)
case 7:r=f
q=r.rV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kz(q,B.U(q).c)
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
return B.i($async$f9l,v)},
afq(d,e){return C.hUs(d,e)},
hUs(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afq=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$afq)
case 6:s=g
r=B.aX(x.N)
q=s.rV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a3(q).k("cn.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$afq)
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
return B.b(C.a16(d),$async$afq)
case 8:n=g
J.nn(n,new C.fnu(e))
w=9
return B.b(C.agB(d,n),$async$afq)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afq,v)},
i3y(d,e){return B.a6(d,!1).c8(B.e8(new C.fDW(e),!0,null,x.H))},
hGi(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.da(w.d,new C.cEj())},
oe:function oe(d,e,f){this.a=d
this.b=e
this.c=f},
f9c:function f9c(){},
f9d:function f9d(){},
fqk:function fqk(d){this.a=d},
fqi:function fqi(d){this.a=d},
fqj:function fqj(){},
fD4:function fD4(){},
fnu:function fnu(d){this.a=d},
fDW:function fDW(d){this.a=d},
XW:function XW(d,e){this.c=d
this.a=e},
awv:function awv(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cEj:function cEj(){},
cEl:function cEl(d,e){this.a=d
this.b=e},
cEo:function cEo(d){this.a=d},
cEp:function cEp(d){this.a=d},
cEn:function cEn(){},
cEq:function cEq(d,e){this.a=d
this.b=e},
cEm:function cEm(d){this.a=d},
cEr:function cEr(){},
cEk:function cEk(d,e){this.a=d
this.b=e},
cEs:function cEs(){},
cEf:function cEf(d){this.a=d},
cEd:function cEd(d){this.a=d},
cEe:function cEe(d){this.a=d},
cEg:function cEg(d,e){this.a=d
this.b=e},
cEc:function cEc(d){this.a=d},
cEb:function cEb(d){this.a=d},
cE9:function cE9(d,e){this.a=d
this.b=e},
cEa:function cEa(d){this.a=d},
cEi:function cEi(){},
cEh:function cEh(d){this.a=d},
cE8:function cE8(d,e){this.a=d
this.b=e},
cE7:function cE7(d,e){this.a=d
this.b=e},
cE6:function cE6(d,e){this.a=d
this.b=e},
cEt:function cEt(d){this.a=d},
XU:function XU(d,e,f){this.c=d
this.d=e
this.a=f},
aDN:function aDN(d,e,f){this.a=d
this.b=e
this.c=f},
awr:function awr(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cDA:function cDA(d){this.a=d},
cDz:function cDz(d){this.a=d},
cDC:function cDC(d,e,f){this.a=d
this.b=e
this.c=f},
cDK:function cDK(){},
cDL:function cDL(d){this.a=d},
cDD:function cDD(d,e,f){this.a=d
this.b=e
this.c=f},
cDB:function cDB(d,e){this.a=d
this.b=e},
cDF:function cDF(d,e){this.a=d
this.b=e},
cDG:function cDG(d,e){this.a=d
this.b=e},
cDH:function cDH(d,e){this.a=d
this.b=e},
cDE:function cDE(d){this.a=d},
cDJ:function cDJ(d){this.a=d},
cDI:function cDI(d,e){this.a=d
this.b=e},
cDQ:function cDQ(d){this.a=d},
cDM:function cDM(d,e){this.a=d
this.b=e},
cDN:function cDN(d,e){this.a=d
this.b=e},
cDO:function cDO(d,e){this.a=d
this.b=e},
cDP:function cDP(d,e){this.a=d
this.b=e},
awt:function awt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hYa(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eh(v,x.cK).bz(new C.fuR(),x.H).eU(new C.fuS())}}else if(s)C.hcm()}catch(t){}},
hcm(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eh(v,x.cK).eU(new C.fdC())}catch(u){}},
hYd(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fuR:function fuR(){},
fuS:function fuS(){},
fdC:function fdC(){},
hgT(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ea(v,w,"").split(":"))},
hgQ(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kS)return null
return A.a.b0(w,14)},
fVU(d){var w
if(d.b!==D.kS)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b0(w,21)},
hYD(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hgU(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hYy(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kS(0,f)
t=x.N
u=B.cD(u,new C.fvQ(),B.a3(u).k("J.E"),t)
s=B.B(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kS(0,f),u=new B.Jc(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QR(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QR(A.a.b0(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hYw(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.B(new B.cu(e,r),r.k("J.E"))
A.d.b_(q,new C.fvP())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aP3(w,u,s,0)}return w},
hYA(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2X:$.hnz(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gae(s);s.C();){w=s.gS(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hgR(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
faf(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hgT(q)===e)return q}return null},
hYB(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b0(v,u)
return A.d.gL(D.Gj).a},
hYC(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adl(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adl(0,0,0)
v=C.faf(b6,b0)
u=C.faf(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hYA(b2,C.hYy(C.hgR(b2),v.r))
if(s.a!==0){u.r=C.hYw(C.hgR(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hgT(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.ec(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.faf(b6,n)
i=C.faf(b5,n)
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
a0=C.fVU(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hgQ(a8)===a0||C.fVU(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ai(a1,16)
A.d.Qr(a1,new C.fvW(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iX
$.iX=a9+1
A.d.K(a1,new C.eI(""+1000*a6+"_"+a9,D.kS,a2,a3,a4,a5,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ch,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adl(k,t,e)},
hYx(d){var w=C.hYB(d)
if(d.w==="hati_kuhowa")return C.hgd("",w)
return C.hgc("",w)},
fvQ:function fvQ(){},
fvP:function fvP(){},
fvW:function fvW(d){this.a=d},
hc5(){var w=new B.S(Date.now(),0,!1),v=new C.fcF()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
fW1(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fwO(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kS&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hh6(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fwO(d)
w=B.bi(u)
if(w==null)return!C.fwO(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bP(18e9))},
hZi(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hyf(d){return A.a.i(d).toLowerCase()},
aoH(d){return C.hyh(d)},
hyh(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aoH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aoH)
case 7:r=f
p=r.rV("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i1P(),B.U(o).k("K<1,n>")).c_(0,new C.c7k())
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
return B.i($async$aoH,v)},
aoG(d,e){return C.hyg(d,e)},
hyg(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoH(d),$async$aoG)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoG)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q7(r)),$async$aoG)
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
return B.i($async$aoG,v)},
aoI(d,e){return C.hyi(d,e)},
hyi(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoI=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoH(d),$async$aoI)
case 3:r=g
if(!J.hC(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoI)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q7(r)),$async$aoI)
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
return B.i($async$aoI,v)},
Uy(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Uy=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fP5&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Uy)
case 7:r=a7
q=B.aT(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.js(p),d=d.gae(d),a0=x.z;d.C();){n=d.gS(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vg(B.a1(f.a(n.b),e,a0)))}$.a6w=o}}t=2
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
return B.b(B.c3(),$async$Uy)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tN("civic_hati_kiapo_uongozi",null,A.ed),$async$Uy)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.js(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gS(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vg(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a6w.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcw()
else f=!0
f=!f}else f=!0
if(f)$.a6w.n(0,i.a,i.b)}w=20
return B.b(C.aoJ(),$async$Uy)
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
case 16:case 9:$.fP5=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Uy,v)},
aoJ(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aoJ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aoJ)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6w,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.af())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aoJ)
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
return B.i($async$aoJ,v)},
aYW(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Uy(!1),$async$aYW)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6w.h(0,t)
r=s==null?null:s.hA()
if(r==null){u=null
w=1
break}u=C.bAA(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYW,v)},
a6x(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6x=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hA()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6w.n(0,d,o)
$.fP5=!0
w=3
return B.b(C.aoJ(),$async$a6x)
case 3:w=4
return B.b(B.c3(),$async$a6x)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6w,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.af())}w=9
return B.b(B.nl("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6x)
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
return B.i($async$a6x,v)},
aoK(d){var w=0,v=B.j(x.T),u,t,s
var $async$aoK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a4U(A.eG),$async$aoK)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.ff(),$async$aoK)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYV(t,d),$async$aoK)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoK,v)},
aYV(d,e){return C.hyj(d,e)},
hyj(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aYV)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eW().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i4("media")
w=8
return B.b(p.wE(q,new Uint8Array(B.ce(d)),D.bwX),$async$aYV)
case 8:n=p.Cf(q)
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
return B.i($async$aYV,v)},
K2(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.ch,D.cQ,l,m,n)},
fbV(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ch,D.f_,j,k,l)},
fT6(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eo(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.ch,D.cQ,g,e,f)},
fbt(d,e,f,g){return C.fbV(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fT7(d,e,f,g,h,i,j,k){var w=C.cC()
return C.eo(A.qc,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a5,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.ch,D.cQ,g,e,f)},
hc4(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ea(v,w,"").split(":"))},
bAA(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hc4(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kS&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hA()}h=C.fVy(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bg(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hc4(m)
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
A.d.bn(a1.z,new C.fuP(a2))}else A.d.bn(a1.z,new C.fuQ())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fwO(a0))a0.ax=a6.f.a6().ac()
return a0},
fVy(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fxB(D.a3Y),l=C.cC(),k=x.u,j=B.a([C.eo(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a5,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.ch,D.lm,1,0,0)],k),i=B.a([],k)
i.push(C.K2("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.K2("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fT6("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hc5()))
i.push(C.fbt(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.K2("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.K2("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fbV(0,0.002,D.fp,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fT7("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fT7("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fT7("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fbV(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.K2("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eo(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a5,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.ch,D.lm,0.77,0.115,0.492))
i.push(C.K2("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.K2("Jina:",A.bg,p,13,A.bl,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fT6("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fbt(0.195,0.7130000000000001,0.62,n))
i.push(C.K2("Sahihi:",A.bg,p,13,A.bl,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eo(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a5,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ch,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.fbt(0.21500000000000002,0.795,0.38,n))
i.push(C.K2("Tarehe:",A.bg,p,13,A.bl,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fT6("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hc5()))
i.push(C.fbt(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fbV(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.K2("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rj(4294967035,t,0,0,j,l,D.q1,"","",u,D.dd)
return C.Bg(t,t,t,t,D.o2,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afC(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afC=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eMV)
w=1
break}w=3
return B.b(C.Uy(!0),$async$afC)
case 3:w=4
return B.b(C.aYW(p),$async$afC)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hh6(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.bbi,null,new C.fpG(p),f,!0,!0,!1,A.lo,!1,!1,x.N),$async$afC)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fpH(),f,null,!0,!0,x.y),$async$afC)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fVy(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fVy(p))
case 1:return B.h(u,v)}})
return B.i($async$afC,v)},
fcF:function fcF(){},
c7k:function c7k(){},
fuP:function fuP(d){this.a=d},
fuQ:function fuQ(){},
fpG:function fpG(d){this.a=d},
fpE:function fpE(d){this.a=d},
fpF:function fpF(d){this.a=d},
fpH:function fpH(){},
fpC:function fpC(d){this.a=d},
fpD:function fpD(d){this.a=d},
ape:function ape(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCz:function aCz(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e61:function e61(d){this.a=d},
e6_:function e6_(d){this.a=d},
e60:function e60(d){this.a=d},
e62:function e62(d){this.a=d},
e63:function e63(d){this.a=d},
wh(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.ch,D.cQ,l,m,n)},
hbJ(d,e,f){var w=4291404327
return B.a([C.pY(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pY(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
faU(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pY(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pY(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pY(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pY(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ch,D.f_,j,k,l)},
faT(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eo(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.ch,D.cQ,g,e,f)},
by_(d,e,f,g){return C.pY(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hbI(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pY(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wh(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hgS(){var w=new B.S(Date.now(),0,!1),v=new C.fvV()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
hbK(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wh(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.faT("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.by_(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wh("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a5,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ch,D.f_,s,t,g-0.004),C.by_(t,g+0.044,s,w)],x.u)},
ag3(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d8k,D.ceR,D.d1i,D.d37],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gS(0)
if(u.a===d)return u}return null},
fSq(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fxB(d.d),v=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ch,D.lm,1,0,0)],x.u)
A.d.v(v,C.hMW(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hMW(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wh("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hbJ(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hbJ(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.faU(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.faU(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wh("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pY(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pY(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wh("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pY(0,0.002,D.fp,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pY(b9,0.016,D.kT,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pY(0,0.002,D.fp,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wh("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.faT("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hgS()),C.by_(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wh(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pY(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pY(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.eo(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.ch,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pY(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.eo(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.ch,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hbI(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wh(c9,A.bg,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.faT("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iX
$.iX=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iX
$.iX=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eI(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.ch,0,"","","","","",!1,0),j,new C.eI(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.fp,0,b5,0.8,0,!1,g,0,D.ch,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iX
$.iX=p+1
i=Date.now()
h=$.iX
$.iX=h+1
g=Date.now()
f=$.iX
$.iX=f+1
e=Date.now()
a3=$.iX
$.iX=a3+1
A.d.v(d,B.a([new C.eI(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dL,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ch,0,"","","","","",!1,0),new C.eI(""+1000*i+"_"+h,D.f_,a1,a2,0.046,0.025875,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ch,0,"","","","","",!1,0),new C.eI(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ch,0,"","","","","",!1,0),new C.eI(""+1000*e+"_"+a3,D.f_,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ch,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hbI("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3N||w===D.a3P||w===D.a3M||w===D.a3O){w=t-0.008
A.d.v(c2,C.faU(0.21,w,0.044,!0,b0))
A.d.v(c2,C.faU(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pY(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pY(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pY(0,0.0022,D.fp,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wh("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wh("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hbK("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hbK("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pY(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wh("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wh("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.faT("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.by_(0.215,p,0.3116,b5),C.wh("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.eo(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a5,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ch,D.f_,0.3161999999999999,0.5738,s-0.044),C.by_(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pY(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wh("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hYz(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fWb(d.d),p=new C.fvR(s),o=new C.fvS(s),n=d.z,m=n===D.a3N||n===D.a3P||n===D.a3M||n===D.a3O,l=n===D.aDT||n===D.a3Q||n===D.aDU,k=B.bZ(0,B.fL(q,A.A,t,t,A.cl,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3Q?26:16
i.push(new C.fvU().$1$size(w))}if(n===D.aDV)i.push(D.fr5)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hM,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aMU,p.$1$w(0.9),D.aMU,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b6U,t,n,w,t,t,A.n),t,t,t,t,A.ahD,t,t,t))
i.push(A.an)
i.push(new C.fvT(r).$1("NIMETOWE"))
i.push(A.fZ)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Lp,new B.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bD(1,A.bi,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b4)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.r,B.a([k,new B.C(A.agd,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hgc(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ag3(e,t)
if(r==null)r=A.d.gL(D.Gj)
w=C.cC()
v=C.rj(r.e,t,0,0,C.fSq(r,0.165,y.O,D.d3H,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q1,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bg(t,t,t,t,D.o2,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hgd(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ag3(e,t)
if(r==null)r=A.d.gL(D.Gj)
w=C.cC()
v=C.rj(r.e,t,0,0,C.fSq(r,0.165,y.f,D.d_v,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q1,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bg(t,t,t,t,D.o2,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bBZ(d,e,f){var w=0,v=B.j(x.T),u
var $async$bBZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.K,null,new C.fHn(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBZ,v)},
afD(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afD=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fpK(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KD,null,new C.fpL(p),d,!0,!0,!1,A.lo,!1,!1,x.N),$async$afD)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBZ(d,"Hati ya Kuhowa",D.Gj),$async$afD)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KG(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$afD)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hgc(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afD,v)},
afE(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afE=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fpO(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KD,null,new C.fpP(p),d,!0,!0,!1,A.lo,!1,!1,x.N),$async$afE)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBZ(d,"Hati ya Kuhoweya",D.Gj),$async$afE)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KG(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$afE)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hgd(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afE,v)},
afF(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fpS(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KD,null,new C.fpT(m),d,!0,!0,!1,A.lo,!1,!1,x.N),$async$afF)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBZ(d,"Malipo ya Awamu ya Mahari",D.PQ),$async$afF)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KG(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$afF)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ag3(s,D.PQ)
if(q==null)q=A.d.gL(D.PQ)
n=C.cC()
p=C.rj(q.e,null,0,0,C.fSq(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cVF,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q1,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bg(null,null,null,null,D.o2,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
xe:function xe(d,e){this.a=d
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
fvV:function fvV(){},
fvR:function fvR(d){this.a=d},
fvT:function fvT(d){this.a=d},
fvU:function fvU(){},
fvS:function fvS(d){this.a=d},
fHn:function fHn(d,e){this.a=d
this.b=e},
acs:function acs(d,e,f){this.c=d
this.d=e
this.a=f},
dW9:function dW9(d,e,f){this.a=d
this.b=e
this.c=f},
dW8:function dW8(d,e){this.a=d
this.b=e},
dW7:function dW7(d,e){this.a=d
this.b=e},
abS:function abS(d,e,f){this.c=d
this.d=e
this.a=f},
fpK:function fpK(){},
fpL:function fpL(d){this.a=d},
fpI:function fpI(d){this.a=d},
fpJ:function fpJ(d){this.a=d},
fpO:function fpO(){},
fpP:function fpP(d){this.a=d},
fpM:function fpM(d){this.a=d},
fpN:function fpN(d){this.a=d},
fpS:function fpS(){},
fpT:function fpT(d){this.a=d},
fpQ:function fpQ(d){this.a=d},
fpR:function fpR(d){this.a=d},
K5(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.eo(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.ch,D.cQ,k,l,m)},
Ck(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ch,D.f_,j,k,l)},
hcp(d,e,f){return C.Ck(0,0.002,D.fp,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
by9(d,e,f,g,h){return B.a([C.Ck(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.K5(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fTb(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Ck(0,0.002,D.fp,g,1,"orn_l_"+t,u,d,v),C.Ck(h,0.016,D.kT,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Ck(0,0.002,D.fp,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0u(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.K5(d,A.bg,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.eo(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.P,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.ch,D.cQ,t,u,g-0.002),C.hcp(u,g+0.018,t)],x.u)},
hcq(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Ck(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Ck(w,0.024,D.kT,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Ck(w,0.024,D.kT,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.K5(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
by8(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.K5("Sahihi:",A.bg,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a5,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.ch,D.f_,v,w,f-0.006),C.hcp(w,f+0.016,v)],x.u)},
fWc(d){var w,v
for(w=0;w<19;++w){v=D.Q2[w]
if(v.a===d)return v}return null},
i_Q(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ag3(A.a.b0(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ag3(A.a.b0(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b0(k,18)
w=C.ag3(u,D.PQ)
v=w==null?l:w.d
if(v==null){w=C.ag3(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fWc(A.a.b0(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hde.a9(0)
$.hdr.a9(0)
t=C.fxB(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fXh(d){var w=0,v=B.j(x.T),u
var $async$fXh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.K,null,new C.fIQ(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXh,v)},
xh:function xh(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhL:function bhL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fIQ:function fIQ(){},
acv:function acv(d){this.a=d},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebf:function ebf(d){this.a=d},
ebe:function ebe(d,e){this.a=d
this.b=e},
ae9:function ae9(d,e,f){this.c=d
this.d=e
this.a=f},
fWb(d){return $.hdr.cg(0,d,new C.fxD(d))},
fxB(d){return $.hde.cg(0,d,new C.fxC(d))},
fy(d){return B.fMG(d>>>16&255,d>>>8&255,d&255,255)},
hPY(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hev(4294570461,4293910718,4284234270,u)
case 1:return C.hev(4294635750,4293975240,t,4292912216)
case 2:w=C.f9t(s,4294505966,r)
C.bxU(w,14,16,p)
C.kq(w,8,9,464,836,u,1.2)
C.Cg(w,2,2,1,1,u,10)
C.Cg(w,478,2,-1,1,u,10)
C.Cg(w,2,852,1,-1,u,10)
C.Cg(w,478,852,-1,-1,u,10)
return w
case 3:return C.f9t(4294966515,4294373082,4289102906)
case 4:return C.hKL(C.f9t(4294376440,4293653998,4290287194))
case 5:w=C.f9t(4294965238,4294437098,4288444980)
C.bxU(w,14,16,4283043359)
C.kq(w,6,7,468,840,u,1)
C.kq(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,n,4294175448)
C.rD(v,n)
C.kq(v,24,24,432,806,4286209070,1)
C.a0i(v,12,12,468,12,o,3,20)
C.a0i(v,12,842,468,842,o,3,20)
C.a0i(v,12,12,12,842,o,3,20)
C.a0i(v,468,12,468,842,o,3,20)
return v
case 7:return C.hIP(4294440434,4293518297,4280228630,r)
case 8:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,m,4293911504)
C.rD(v,m)
C.kq(v,28,28,424,798,l,1)
C.fid(v,28,28,l,k)
C.fid(v,452,28,l,k)
C.fid(v,28,826,l,k)
C.fid(v,452,826,l,k)
return v
case 9:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,j,4294111986)
C.rD(v,j)
C.kq(v,18,18,444,818,4292401368,0.7)
B.iH(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hMI(i,4294173372)
case 11:return C.hNN(4294439140,4293449662)
case 12:return C.hIH(h,4294239432)
case 13:return C.hNe(4294244340,4293193448)
case 14:return C.hRw(4294505710,4293780694)
case 15:return C.f8t(4294966259,4294439138,o,p,q)
case 16:return C.f8t(4294966776,4294178544,o,g,g)
case 17:return C.f8t(4294965493,4294504170,o,4286200650,q)
case 18:return C.f8t(4294966519,4294373862,o,p,p)
case 19:return C.hLQ()
case 20:return C.hLR()
case 21:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,h,4293976768)
C.rD(v,h)
C.bxU(v,14,16,p)
B.iH(v,!0,C.fy(u),4,475,4,9)
B.iH(v,!0,C.fy(u),4,475,844,849)
B.iH(v,!0,C.fy(u),4,9,4,849)
B.iH(v,!0,C.fy(u),470,475,4,849)
C.a0i(v,10,12,470,12,u,2,16)
C.a0i(v,10,842,470,842,u,2,16)
C.a0i(v,10,12,10,842,u,2,18)
C.a0i(v,470,12,470,842,u,2,18)
C.Cg(v,2,2,1,1,t,10)
C.Cg(v,478,2,-1,1,t,10)
C.Cg(v,2,852,1,-1,t,10)
C.Cg(v,478,852,-1,-1,t,10)
C.kq(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,s,4294438872)
C.rD(v,s)
C.kq(v,14,16,452,822,o,2.2)
C.kq(v,22,24,436,806,o,1)
C.fUt(v,!1,!1,o,p,p,36,14,16)
C.kE(v,240,20,7,o,!0)
C.kE(v,240,834,7,o,!0)
C.kE(v,18,427,7,o,!0)
C.kE(v,462,427,7,o,!0)
return v
case 23:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,i,4293910712)
C.rD(v,i)
B.iH(v,!0,C.fy(u),0,479,0,20)
B.iH(v,!0,C.fy(u),0,479,834,853)
B.iH(v,!0,C.fy(u),0,20,0,853)
B.iH(v,!0,C.fy(u),460,479,0,853)
B.iH(v,!0,C.fy(f),5,474,5,9)
B.iH(v,!0,C.fy(f),5,474,844,848)
B.iH(v,!0,C.fy(f),5,9,5,848)
B.iH(v,!0,C.fy(f),470,474,5,848)
C.kq(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hl(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.y6(v,e,4294174404)
C.rD(v,e)
C.bxU(v,14,16,p)
B.iH(v,!0,C.fy(u),3,476,3,8)
B.iH(v,!0,C.fy(u),3,476,845,850)
B.iH(v,!0,C.fy(u),3,8,3,850)
B.iH(v,!0,C.fy(u),471,476,3,850)
C.kq(v,9,10,462,834,t,1)
C.kq(v,14,16,452,822,u,1.8)
C.kE(v,240,8,4,u,!0)
C.kE(v,240,846,4,u,!0)
C.kE(v,8,427,4,u,!0)
C.kE(v,472,427,4,u,!0)
C.kE(v,8,8,3,t,!0)
C.kE(v,472,8,3,t,!0)
C.kE(v,8,846,3,t,!0)
C.kE(v,472,846,3,t,!0)
return v}},
y6(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kG(d,!1,A.da,new B.Ru(s),r,A.cW,1,0,w-1,k,k);++k}},
rD(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eJ()
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
if(p!=null)p.jC(u,t,v,r,q,255)}},
kq(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kG(d,!0,A.da,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kG(d,!0,A.da,u,v,A.cW,j,e,t,w,w)
B.kG(d,!0,A.da,u,v,A.cW,j,e,e,f,w)
B.kG(d,!0,A.da,u,v,A.cW,j,t,t,f,w)},
Cg(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kG(d,!0,A.da,C.fy(i),u,A.cW,2,e,e+g*j,f,f)
B.kG(d,!0,A.da,C.fy(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kG(d,!0,A.da,C.fy(i),u,A.cW,1,w,e+g*t,v,v)
B.kG(d,!0,A.da,C.fy(i),u,A.cW,1,w,w,v,f+h*t)},
hev(d,e,f,g){var w=null,v=B.hl(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.y6(v,d,e)
C.rD(v,d)
B.iH(v,!0,C.fy(f),0,479,0,28)
B.iH(v,!0,C.fy(f),0,479,826,853)
B.iH(v,!0,C.fy(f),0,28,0,853)
B.iH(v,!0,C.fy(f),452,479,0,853)
C.kq(v,5,5,470,844,g,1.1)
C.kq(v,28,28,424,798,g,1.6)
C.Cg(v,2,2,1,1,g,11)
C.Cg(v,478,2,-1,1,g,11)
C.Cg(v,2,852,1,-1,g,11)
C.Cg(v,478,852,-1,-1,g,11)
return v},
f9t(d,e,f){var w=null,v=B.hl(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.y6(v,d,e)
C.rD(v,d)
C.kq(v,14,16,452,822,f,1.6)
C.kq(v,20,22,440,810,f,0.8)
return v},
bxU(d,e,f,g){var w,v=C.fy(g)
B.iH(d,!0,v,0,479,0,f-1)
w=854-f
B.iH(d,!0,v,0,479,w,853);--w
B.iH(d,!0,v,0,e-1,f,w)
B.iH(d,!0,v,480-e,479,f,w)},
hKL(d){var w,v,u=4291404327
C.bxU(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kE(d,w,8,3,u,!0)
C.kE(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kE(d,7,v,3,u,!0)
C.kE(d,473,v,3,u,!0)}return d},
flc(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j9(e,f),new B.j9(e+g*n,f),new B.j9(e,f+h*n)],t)
B.a13(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j9(s,u),new B.j9(e+g*v,u),new B.j9(s,f+h*v)],t)
B.a13(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kE(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kE(d,e+g*t,f+h*3,4,k,!0)
C.kE(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kE(d,e+g*t,f,5,k,!0)
C.kE(d,e,f+h*t,5,k,!0)}},
fUt(d,e,f,g,h,i,j,k,l){var w,v
C.flc(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.flc(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.flc(d,k,v,1,-1,e,f,g,h,i,j)
C.flc(d,w,v,-1,-1,e,f,g,h,i,j)},
a0i(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kY(d,!0,A.da,new B.qQ(p),null,A.cW,j,r,q)}},
fkl(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kG(d,!0,A.da,new B.qQ(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kG(d,!0,A.da,new B.qQ(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hIP(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hl(o,o,A.c7,0,A.e0,854,o,0,3,o,A.c7,480,!1)
C.y6(n,d,e)
C.rD(n,d)
C.kq(n,20,20,440,814,f,1.2)
C.fkl(n,0,0,1,1,g)
C.fkl(n,480,0,-1,1,g)
C.fkl(n,0,854,1,-1,g)
C.fkl(n,480,854,-1,-1,g)
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
B.kG(n,!0,A.da,new B.qQ(p),o,A.cW,1.2,240,r,60,q)}return n},
fid(d,e,f,g,h){var w
C.fnP(d,!0,C.fy(g),13,e,f)
C.fnP(d,!0,C.fy(g),9,e,f)
w=B.a([new B.j9(e,f-4),new B.j9(e+4,f),new B.j9(e,f+4),new B.j9(e-4,f)],x.J)
B.a13(d,C.fy(h),w)},
kE(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j9(e,v),new B.j9(u,f),new B.j9(e,t),new B.j9(s,f)],x.J)
if(i){B.a13(d,C.fy(h),r)
return}B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,e,u,v,f)
B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,u,e,f,t)
B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,e,s,t,f)
B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,s,e,f,v)},
f8s(d,e,f,g,h,i,j){var w,v=B.a([new B.j9(e,f),new B.j9(e+g*28,f),new B.j9(e,f+h*28)],x.J)
B.a13(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kE(d,v,w,6,j,!0)
C.kE(d,v,w,3,i,!0)},
f8t(d,e,f,g,h){var w=null,v=B.hl(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.y6(v,d,e)
C.rD(v,d)
C.kq(v,18,18,444,818,f,2)
C.kq(v,26,26,428,802,f,0.9)
if(h!=null)B.iH(v,!0,C.fy(h),28,451,28,34)
C.f8s(v,18,18,1,1,g,f)
C.f8s(v,462,18,-1,1,g,f)
C.f8s(v,18,836,1,-1,g,f)
C.f8s(v,462,836,-1,-1,g,f)
return v},
hLQ(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hl(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
C.y6(r,u,4294240980)
C.rD(r,u)
C.kq(r,10,12,460,830,t,3.2)
C.kq(r,18,20,444,814,s,1.2)
C.kq(r,24,26,432,802,t,1.8)
C.fUt(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kE(r,w,16,3,t,!0)
C.kE(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kE(r,16,w,3,t,!0)
C.kE(r,464,w,3,t,!0)}return r},
hLR(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hl(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
C.y6(p,s,4294373080)
C.rD(p,s)
C.kq(p,16,18,448,818,r,2.4)
C.kq(p,24,26,432,802,4286209044,1)
w=new C.faL(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fUt(p,!1,!0,r,q,q,34,16,18)
return p},
byA(d,e,f,g,h,i){B.iH(d,!0,C.fy(i),e,e+g,f,f+h)},
bzp(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kG(d,!1,A.da,new B.Ru(i),null,A.cW,1,e,w,l,l)}},
hMH(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.G(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kG(d,!1,A.da,new B.qQ(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.G(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kG(d,!1,A.da,new B.qQ(r),null,A.cW,1,t,t,f,s);++q}},
hMI(d,e){var w,v,u=null,t=B.hl(u,u,A.c7,0,A.e0,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hMH(t,v,w,30,D.cOL,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.byA(t,44,44,392,766,d)
C.bzp(t,44,44,392,766,d,e)
C.rD(t,d)
C.kq(t,44,44,392,766,4292128567,2.2)
C.kq(t,50,50,380,754,4279898632,0.8)
return t},
hNM(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.G(g,4)){case 0:C.kE(d,e,f,7,h,!0)
C.kE(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.6,w,u,v,t)
B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kG(d,!0,A.da,new B.qQ(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kY(d,!0,A.da,C.fy(h),o,A.cW,2,e,f)}},
hNN(d,e){var w,v,u,t,s=null,r=B.hl(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
B.iH(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hNM(r,u,v,w,4292391514)}C.byA(r,46,46,388,762,d)
C.bzp(r,46,46,388,762,d,e)
C.rD(r,d)
C.kq(r,46,46,388,762,4291404327,1.8)
return r},
h9W(d,e,f,g){C.fnP(d,!0,C.fy(g),16,e,f)
C.fnP(d,!0,C.fy(g),11,e,f)
C.kE(d,e,f,6,g,!0)
B.kG(d,!0,A.da,C.fy(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kG(d,!0,A.da,C.fy(g),null,A.cW,1.3,e,e,f-14,f+14)},
hIH(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hl(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
B.iH(s,!0,C.fy(4280948752),0,479,0,853)
B.iH(s,!0,C.fy(u),0,479,0,78)
B.iH(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h9W(s,w,39,t)
C.h9W(s,w,815,t)}C.byA(s,38,92,404,670,d)
C.bzp(s,38,92,404,670,d,e)
C.rD(s,d)
C.kq(s,38,92,404,670,t,1.8)
C.kq(s,45,99,390,656,4287322667,0.8)
return s},
hNd(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j9(e,f),new B.j9(q-5,w),new B.j9(q,f-(18-Math.abs(r)*3)),new B.j9(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a13(d,new B.qQ(o),p)}B.kY(d,!0,A.da,C.fy(4292128567),null,A.cW,3,e,f)},
hNe(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hl(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
C.y6(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kG(q,!0,A.da,new B.qQ(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kG(q,!0,A.da,new B.qQ(u),s,A.cW,1.1,v,v,0,853)}B.iH(q,!0,C.fy(r),0,479,0,70)
B.iH(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hNd(q,70+t*85,48,4292128567)
C.byA(q,48,78,384,712,d)
C.bzp(q,48,78,384,712,d,e)
C.rD(q,d)
C.kq(q,48,78,384,712,4291404327,1.6)
return q},
hRw(d,e){var w,v,u,t=null,s=4279970378,r=B.hl(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
B.iH(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kE(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kY(r,!0,A.da,new B.qQ(u),t,A.cW,1,v,w)}C.byA(r,40,40,400,774,d)
C.bzp(r,40,40,400,774,d,e)
C.rD(r,d)
C.kq(r,40,40,400,774,4291058750,2)
C.kq(r,48,48,384,758,s,0.8)
return r},
kN:function kN(d,e){this.a=d
this.b=e},
fxD:function fxD(d){this.a=d},
fxC:function fxC(d){this.a=d},
faL:function faL(d){this.a=d},
fyg(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hNG(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fT4(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oq(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.ag_(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aev(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aev=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v6(null,""),$async$aev)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n1(n)
if(e==null)s=A.hl
else{r=C.hNG(e)
s=B.a([new B.a_j(A.cS.gcv().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qG(t,d,s,E.ER),$async$aev)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.Kv(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aev,v)},
bB4(d){return C.i_w(d)},
i_w(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bB4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.af(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aev(r,null),$async$bB4)
case 7:q=f
p=C.fT4(q)
if(p==null){u=d
w=1
break}o=d.aBo(p)
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
return B.i($async$bB4,v)},
hdP(d){var w,v=F.fVu(d)
v=B.aK(v,"book","newspaper")
if(F.a1m(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fCb(d,e,f,g){return C.i1n(d,e,f,g)},
i1n(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fCb=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fyg(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hhf()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aev('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hdP(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fCb)
case 3:r=m.fT4(i)
if(r==null)throw B.V(y.S)
q=new C.z6(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBo(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1m(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1m(A.d.aI(t," "))==="sw"?C.bB4(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fCb,v)},
bAy(d,e,f,g,h){return C.hY8(d,e,f,g,h)},
hY8(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bAy=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fJ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hhf()
k=A.R.ao(d.af(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aev('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hdP(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bAy)
case 3:p=j.fT4(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBo(B.a1(o,x.N,x.z))
m=A.R.ao(n.af(),null)!==A.R.ao(d.af(),null)}else{n=d
m=!1}w=m&&F.a1m(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bB4(n),$async$bAy)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7a(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAy,v)},
a7a:function a7a(d,e,f){this.a=d
this.b=e
this.c=f},
i46(d,e){return B.a6(d,!1).c8(B.e8(new C.fJ0(e),!0,null,x.H))},
fJ0:function fJ0(d){this.a=d},
V3:function V3(d,e){this.c=d
this.a=e},
aCS:function aCS(d,e,f,g,h,i,j,k){var _=this
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
eey:function eey(d){this.a=d},
eex:function eex(){},
eez:function eez(d){this.a=d},
eew:function eew(d,e){this.a=d
this.b=e},
eeA:function eeA(){},
eea:function eea(d,e){this.a=d
this.b=e},
ee6:function ee6(d,e){this.a=d
this.b=e},
eeh:function eeh(d){this.a=d},
eei:function eei(d,e){this.a=d
this.b=e},
eej:function eej(d){this.a=d},
eec:function eec(d,e){this.a=d
this.b=e},
eed:function eed(d,e){this.a=d
this.b=e},
eee:function eee(d,e){this.a=d
this.b=e},
eef:function eef(d){this.a=d},
eeg:function eeg(d){this.a=d},
eeb:function eeb(d,e){this.a=d
this.b=e},
ee8:function ee8(d){this.a=d},
ee9:function ee9(d){this.a=d},
eep:function eep(d){this.a=d},
eeq:function eeq(d){this.a=d},
eeo:function eeo(d){this.a=d},
eer:function eer(d,e){this.a=d
this.b=e},
een:function een(d,e){this.a=d
this.b=e},
ees:function ees(d){this.a=d},
eem:function eem(d){this.a=d},
eet:function eet(d){this.a=d},
eel:function eel(d){this.a=d},
eeu:function eeu(d,e){this.a=d
this.b=e},
eek:function eek(d,e){this.a=d
this.b=e},
eev:function eev(d){this.a=d},
ee7:function ee7(d,e){this.a=d
this.b=e},
fxc(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fxc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hbq){w=1
break}r=new C.fxd()
t=4
q=x.s
w=7
return B.b(B.iJ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fxc)
case 7:$.hbq=!0
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
return B.i($async$fxc,v)},
bAV(d){return A.GE[B.mu(d)-1]+", "+A.oM[B.bG(d)-1]+" "+B.bQ(d)+", "+B.by(d)},
hQC(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dcp[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fVT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fA(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fvv(),B.U(v).k("a2<1>")))
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
continue}o=new C.fvx(j,h)
n=new C.fvw(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iS(o.$1(l)))
j.a+=l}return u},
fSP(d,e){var w=new C.fam()
return A.d.cI(e,0,new C.fak(w))>=A.d.cI(d,0,new C.fal(w))},
h8B(d){var w,v,u=new B.aP($.X().r,A.ap,null,null,B.a([],x.v))
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
z6:function z6(d,e,f,g,h,i,j,k,l,m){var _=this
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
cb0:function cb0(d){this.a=d},
caZ:function caZ(){},
cb_:function cb_(){},
t5:function t5(d,e){this.a=d
this.b=e},
B3:function B3(d,e){this.a=d
this.b=e},
lb:function lb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fxd:function fxd(){},
fvv:function fvv(){},
fvx:function fvx(d,e){this.a=d
this.b=e},
fvw:function fvw(d,e,f){this.a=d
this.b=e
this.c=f},
fam:function fam(){},
fan:function fan(){},
fak:function fak(d){this.a=d},
fal:function fal(d){this.a=d},
b_r:function b_r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cb1:function cb1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cb2:function cb2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cb3:function cb3(d){this.a=d},
baX:function baX(d){this.a=d},
baW:function baW(d,e){this.b=d
this.a=e},
bsq:function bsq(d){this.a=d},
b7r:function b7r(d,e){this.b=d
this.a=e},
bpX:function bpX(d,e){this.b=d
this.a=e},
hj9(d,e){return B.a6(d,!1).c8(B.e8(new C.fJ3(e,null),!0,null,x.E))},
fJ3:function fJ3(d,e){this.a=d
this.b=e},
V6:function V6(d,e,f){this.c=d
this.d=e
this.a=f},
aCW:function aCW(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
efJ:function efJ(){},
efK:function efK(d){this.a=d},
efI:function efI(d,e){this.a=d
this.b=e},
efw:function efw(d){this.a=d},
efx:function efx(d){this.a=d},
efD:function efD(d){this.a=d},
efE:function efE(d,e){this.a=d
this.b=e},
efB:function efB(d){this.a=d},
efC:function efC(d,e,f){this.a=d
this.b=e
this.c=f},
efy:function efy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efF:function efF(d,e){this.a=d
this.b=e},
efA:function efA(d,e){this.a=d
this.b=e},
efG:function efG(d){this.a=d},
efz:function efz(d,e){this.a=d
this.b=e},
efH:function efH(d,e){this.a=d
this.b=e},
bat:function bat(d,e,f){this.b=d
this.c=e
this.a=f},
i4c(d){return B.a6(d,!1).c8(B.e8(new C.fJj(),!0,null,x.I))},
byl(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fUc(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fJj:function fJj(){},
a_c:function a_c(d){this.a=d},
oq:function oq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEi:function aEi(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aO=_.aE=_.az=_.Z=_.b6=_.bi=_.y2=0
_.b3=null
_.b1=0.25
_.be=null
_.bK=0.5
_.aR=1
_.c7=_.bT=_.bj=0
_.cX=_.cU=!1
_.c=_.a=null},
eOY:function eOY(d){this.a=d},
eNQ:function eNQ(d,e){this.a=d
this.b=e},
eOd:function eOd(d,e){this.a=d
this.b=e},
eOn:function eOn(d){this.a=d},
eNz:function eNz(d){this.a=d},
eNA:function eNA(d){this.a=d},
eNx:function eNx(d){this.a=d},
eNy:function eNy(d){this.a=d},
eO6:function eO6(d,e){this.a=d
this.b=e},
eO7:function eO7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOj:function eOj(d,e,f){this.a=d
this.b=e
this.c=f},
eOi:function eOi(d,e){this.a=d
this.b=e},
eOk:function eOk(d,e){this.a=d
this.b=e},
eOh:function eOh(d,e){this.a=d
this.b=e},
eOm:function eOm(d,e,f){this.a=d
this.b=e
this.c=f},
eOl:function eOl(d,e){this.a=d
this.b=e},
eNp:function eNp(d){this.a=d},
eNq:function eNq(d){this.a=d},
eNr:function eNr(d){this.a=d},
eNo:function eNo(){},
eNs:function eNs(d,e){this.a=d
this.b=e},
eNn:function eNn(d,e){this.a=d
this.b=e},
eNu:function eNu(){},
eNt:function eNt(d,e){this.a=d
this.b=e},
eNm:function eNm(d,e){this.a=d
this.b=e},
eNj:function eNj(d,e){this.a=d
this.b=e},
eNv:function eNv(d){this.a=d},
eNl:function eNl(d,e){this.a=d
this.b=e},
eNw:function eNw(d){this.a=d},
eNk:function eNk(d,e){this.a=d
this.b=e},
eON:function eON(d,e){this.a=d
this.b=e},
eOU:function eOU(d){this.a=d},
eOV:function eOV(d,e){this.a=d
this.b=e},
eOW:function eOW(){},
eOO:function eOO(d,e){this.a=d
this.b=e},
eOM:function eOM(d,e){this.a=d
this.b=e},
eOP:function eOP(d,e){this.a=d
this.b=e},
eOL:function eOL(d,e){this.a=d
this.b=e},
eOQ:function eOQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOK:function eOK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOR:function eOR(d){this.a=d},
eOS:function eOS(d,e){this.a=d
this.b=e},
eOT:function eOT(d){this.a=d},
eOJ:function eOJ(d){this.a=d},
eOw:function eOw(d){this.a=d},
eOx:function eOx(d){this.a=d},
eOv:function eOv(d,e){this.a=d
this.b=e},
eOq:function eOq(d,e){this.a=d
this.b=e},
eOy:function eOy(d){this.a=d},
eOB:function eOB(d){this.a=d},
eOu:function eOu(d){this.a=d},
eOC:function eOC(d){this.a=d},
eOD:function eOD(d){this.a=d},
eOE:function eOE(d){this.a=d},
eOF:function eOF(d){this.a=d},
eOt:function eOt(d){this.a=d},
eOG:function eOG(d){this.a=d},
eOs:function eOs(d){this.a=d},
eOH:function eOH(d,e){this.a=d
this.b=e},
eOr:function eOr(d,e){this.a=d
this.b=e},
eOI:function eOI(d){this.a=d},
eOz:function eOz(d){this.a=d},
eOA:function eOA(d){this.a=d},
eOa:function eOa(d){this.a=d},
eO9:function eO9(d){this.a=d},
eOb:function eOb(d,e){this.a=d
this.b=e},
eO8:function eO8(d,e){this.a=d
this.b=e},
eOc:function eOc(d){this.a=d},
eO2:function eO2(d){this.a=d},
eO1:function eO1(d){this.a=d},
eO3:function eO3(d){this.a=d},
eO0:function eO0(d){this.a=d},
eO4:function eO4(d,e){this.a=d
this.b=e},
eO_:function eO_(d,e){this.a=d
this.b=e},
eNZ:function eNZ(d,e){this.a=d
this.b=e},
eNH:function eNH(d){this.a=d},
eNI:function eNI(d){this.a=d},
eNJ:function eNJ(d){this.a=d},
eNK:function eNK(d){this.a=d},
eNL:function eNL(d){this.a=d},
eNM:function eNM(d){this.a=d},
eNN:function eNN(d){this.a=d},
eNO:function eNO(d){this.a=d},
eNP:function eNP(d){this.a=d},
eN2:function eN2(d){this.a=d},
eN3:function eN3(d){this.a=d},
eN4:function eN4(d){this.a=d},
eN5:function eN5(d){this.a=d},
eN6:function eN6(d){this.a=d},
eN1:function eN1(d){this.a=d},
eN7:function eN7(d){this.a=d},
eN8:function eN8(d){this.a=d},
eNB:function eNB(d){this.a=d},
eNC:function eNC(d){this.a=d},
eND:function eND(d){this.a=d},
eNE:function eNE(d){this.a=d},
eNF:function eNF(d){this.a=d},
eNc:function eNc(d){this.a=d},
eNd:function eNd(d){this.a=d},
eNe:function eNe(d){this.a=d},
eNf:function eNf(d){this.a=d},
eNg:function eNg(d){this.a=d},
eNb:function eNb(d){this.a=d},
eNh:function eNh(d){this.a=d},
eNa:function eNa(d){this.a=d},
eNi:function eNi(d){this.a=d},
eN9:function eN9(d){this.a=d},
eO5:function eO5(d){this.a=d},
eNY:function eNY(d){this.a=d},
eNU:function eNU(d){this.a=d},
eNT:function eNT(d){this.a=d},
eNV:function eNV(d,e){this.a=d
this.b=e},
eNS:function eNS(d,e){this.a=d
this.b=e},
eNW:function eNW(d,e){this.a=d
this.b=e},
eNR:function eNR(d,e){this.a=d
this.b=e},
eNX:function eNX(d){this.a=d},
eOg:function eOg(d){this.a=d},
eOf:function eOf(d,e,f){this.a=d
this.b=e
this.c=f},
eOe:function eOe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOp:function eOp(d,e){this.a=d
this.b=e},
eOo:function eOo(d,e){this.a=d
this.b=e},
eNG:function eNG(d){this.a=d},
eOX:function eOX(d){this.a=d},
be0:function be0(d,e){this.b=d
this.a=e},
i_H(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i_I(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kS(0,d),m=B.B(n,B.a3(n).k("J.E"))
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
byW(){var w=$.by3,v=$.PN
$.PN=v+1
return w+"_"+v},
i7(d,e,f,g,h,i,j){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,C.byW(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ch,D.f_,g,e,f)},
nS(d,e,f,g){var w=f*9
return C.i7(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hKm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.by3
p=$.PN
$.PN=p+1
w.push(new C.eI(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.ch,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.by3
p=$.PN
$.PN=p+1
w.push(new C.eI(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.ch,0,"","","","","",!1,0))}w.push(C.nS(0.88,0.1,0.5,f&16777215|855638016))
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
for(n=0;n<16;++n){v=D.cQ7[n]
u=A.o.G(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.by3
l=$.PN
$.PN=l+1
w.push(new C.eI(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.ch,0,"","","","","",!1,0))}w.push(C.nS(0.85,0.12,0.35,f&16777215|570425344))
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
hXc(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.by3=j
$.PN=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fsU()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a5,"",1,C.byW(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.ch,D.lm,1,0,0))
if(a9)A.d.v(q,C.hKm(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i_H(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fsT(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a5,a1,a3*9/16,C.byW(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.ch,D.lm,a3,a4,a5))
return C.rj(s,r,0,0,q,j+"_slide",D.q1,"","","",D.dd)},
ri:function ri(d,e){this.a=d
this.b=e},
m0:function m0(d,e,f,g,h,i,j,k,l,m){var _=this
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
fsU:function fsU(){},
fsT:function fsT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hAt(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ccn(),x.N)
s=B.B(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.z8(u,t,s,B.t(w==null?"":w))},
fAz(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fAz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hbO){w=1
break}$.hbO=!0
t=4
w=7
return B.b(B.az(),$async$fAz)
case 7:r=e
q=B.aT(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.js(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gS(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gS(h)
l=C.hAt(m)
if(l!=null)J.ch(n,l)}$.Ch.cg(0,B.t(o.a),new C.fAA(n))}C.fTT()
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
return B.i($async$fAz,v)},
fTT(){var w,v=new B.S(Date.now(),0,!1).bP(-12e8)
for(w=new B.dt($.Ch,$.Ch.r,$.Ch.e);w.C();)J.nn(w.d,new C.fhq(v))
$.Ch.bn($.Ch,new C.fhr())},
aMQ(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMQ=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aMQ)
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
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMQ)
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
return B.i($async$aMQ,v)},
i0i(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fTT()
w=$.Ch.cg(0,d,new C.fAC())
v=Date.now()
u=B.B(e,B.a3(e).k("cn.E"))
J.po(w,0,new C.z8(new B.S(v,0,!1),f,u,g))
C.aMQ()},
i0f(d){var w,v=$.Ch.h(0,d)
if(v==null||J.cl(v))return
w=J.cE(v)
w.cA(v,0)
if(w.gam(v))$.Ch.W(0,d)
C.aMQ()},
z8:function z8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccn:function ccn(){},
fAA:function fAA(d){this.a=d},
fhq:function fhq(d){this.a=d},
fhr:function fhr(){},
fAC:function fAC(){},
i0k(d){return A.d.dL(D.vK,new C.fAF(d),new C.fAG())},
hAr(d){var w
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
hAq(d){var w
switch(d.a){case 0:w=D.ak1
break
case 1:w=A.y_
break
case 2:w=A.al9
break
case 3:w=I.ajF
break
case 4:w=A.akx
break
case 5:w=A.lM
break
default:w=null}return w},
hNj(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Pg[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Pg[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hAs(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i0g(d,e,f,g,h){var w=new B.K(D.vK,new C.fAy(),x.eC).aI(0,", "),v=""+d,u=C.hh7(h),t=F.fui(h),s=C.hdp(g),r=e.t(0,D.Hz)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HA)?'- New slides get an "icon3d" from: '+A.d.aI(D.Pg,", ")+".\n":"",p=e.t(0,D.Ck)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i0h(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vK,new C.fAB(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.Hz)){p.a=s
w=s}else w=""
if(e.t(0,D.HA))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Pg,", ")+".\n")
if(e.t(0,D.Ck))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hh7(d)
v=F.fui(d)
u=C.hdp(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agf(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CI(a3,"{"),a5=J.fMg(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KQ(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cl(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gS(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fyy(),m).c_(0,new C.fyz())
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
f=C.hNj(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7i(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b8(D.vK,new C.fyA(r))?r:a7
o=C.fgF(J.q(w,"logo_frame"),D.BK)
n=C.fgF(J.q(w,"logo_ring"),D.BF)
m=C.fgF(J.q(w,"photo_frame"),D.BK)
l=C.fgF(J.q(w,"photo_ring"),D.BF)
return new C.aq3(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0T(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hgf(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Cl),f7=f6?C.hH4():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eJ()
v.dB(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.ft(t,v)
s=u.c
s=new C.nG("luxe",u.a,A.lM,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i0k(f9.b)
r=g2.t(0,D.a46)||f6
q=g2.t(0,D.Hz)
p=g2.t(0,D.Rb)
o=new C.fsY()
n=B.a([],x.g)
m=new C.ft0(o,w,r)
l=new C.ft_(o,r)
k=new C.fsZ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b8(u,new C.fsX(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.G(b1,a3.length)]
b4=A.o.G(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.G(b1,5)
b9=D.cRD[b8]
c0=D.cQA[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eI3.t(0,b2.a)){c7=b0+1
c5=g8[A.o.G(b0,g8.length)]
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mw,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q2,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.R8
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kT,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ci
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mw,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q2,500,f2,f0))
d3=D.mv
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.u8:D.ch
c1.push(new C.eI(b4,D.a44,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mv
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mw,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q2,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.R8
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Hx,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mv}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hIG(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.G(b1,b8.length)]}else b8=r?D.deE[A.o.G(b1,6)]:s
n.push(new C.lB(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bg(e4,e4,e4,e4,D.Ch,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fvl(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fvl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Ck)
n=e.t(0,D.HA)
if(!o&&!n){u=D.a33
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fvo(o,s[r],n,$.hM4,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$fvl)
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
return B.i($async$fvl,v)},
ful(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$ful=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i0h(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMb(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$ful)
case 3:u=s.aMw(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ful,v)},
bAz(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bAz=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ec(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.i0i(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agf(i,"colorful")
t=C.i0g(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMb(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hl),$async$bAz)
case 3:u=o.aMw(m,f,h,g,D.dSI,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAz,v)},
aMb(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMb=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v6(null,""),$async$aMb)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n1(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qG(t,d,g,null),$async$aMb)
case 7:q=i
p=q.b
if(p!=null){o=C.agf(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.Kv(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMb,v)},
aMw(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMw=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Ck)||e.t(0,D.HA)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.Ck)}w=6
return B.b(C.fvl(d,t),$async$aMw)
case 6:s=k
w=4
break
case 5:s=D.a33
case 4:t=d.c
w=A.d.b8(t,new C.fah())?7:9
break
case 7:r=$.hi_
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aMw)
case 10:q=k
p=q!=null?A.R.ao(q.af(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hgf(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hAs(new C.aq3(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.B(new B.K(m,new C.fai(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jK<cn.E,n>")
t=B.B(new B.jK(e,new C.faj(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rb)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMw,v)},
fWB(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a1V[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
i4h(d){return B.bV(A.K,null,new C.fJv(),d,!0,!0,!0,null,!1,!1,x.I)},
hHG(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcv().aJ(d)},
i4g(d,e,f){return B.bV(A.K,null,new C.fJu(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fWC(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fWD(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fgF(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b8(e,new C.fgG(w))?w:""},
hdp(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hhY(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agf(a1==null?"":a1,a0),a3=C.agf(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r4(new B.a2(r,new C.fAH(t[p]),q))
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
g=B.B(new B.a2(k,new C.fAI(),v),r)
A.d.b_(g,new C.fAJ())
if(g.length===0)continue
f=new C.fAK(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i0B(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aEZ
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dUD
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dUE
return null},
hd0(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bu(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i0l(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.o2
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
if(C.hd0(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hd0(n,i,v,u))if(n.w>10){f=h+1
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
i0j(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agf(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1V[r]
if(q.b===s)w.K(0,q)}}v=C.fWC(e)
u=C.fWD(e)
p=C.hgf(n,D.a33,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fAD(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jK<cn.E,n>")
o=B.B(new B.jK(w,new C.fAE(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rb)
return p},
i43(d,e,f){return B.bV(A.K,null,new C.fII(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hH4(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eJ()
s.dB(t)
w=D.cvW[s.aB(10)]
v=new C.eaE(s)
u=x.N
return new C.eaD(w,s.aB(4),J.fo(v.$1$2(D.cVR,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.dan,2+s.aB(2),u),v.$1$2(D.d3R,2,u),v.$1$2(D.ddd,4,x.fP),t)},
hIG(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eJ()
a1.dB(a5.w+a3*13)
w=new C.f6M(a4)
v=new C.f6O(a4,d)
u=new C.f6N(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fQ(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fQ(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.G(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0T(a0,52),"lux_spot",a5.we(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.we(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aDO(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.we(0,f),D.dd,150,C.a0T(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.we(0,f),D.dd,120,C.a0T(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a0T(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.we(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0T(a0,208),"lux_rule",a5.aDO(0,"shimmer",r),D.u7,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0T(a0,144),"lux_rule2","",D.Hx,220))}l=!A.d.b8(a2,new C.f6L())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.we(0,"crest"),350))
else{o=a1.h9()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.we(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0T(r,242)
j=a5.we(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q2,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0T(r,242),"lux_g2",a5.we(0,"orbit"),D.q2,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fQ(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.we(0,"velvet")))},
nG:function nG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAF:function fAF(d){this.a=d},
fAG:function fAG(){},
vJ:function vJ(d,e){this.a=d
this.b=e},
a7i:function a7i(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aq3:function aq3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fAy:function fAy(){},
fAB:function fAB(){},
fyy:function fyy(){},
fyz:function fyz(){},
fyA:function fyA(d){this.a=d},
fsY:function fsY(){},
ft0:function ft0(d,e,f){this.a=d
this.b=e
this.c=f},
ft_:function ft_(d,e){this.a=d
this.b=e},
fsZ:function fsZ(d,e){this.a=d
this.b=e},
fsX:function fsX(d){this.a=d},
fvo:function fvo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fvm:function fvm(d){this.a=d},
fvn:function fvn(d){this.a=d},
fah:function fah(){},
fai:function fai(){},
faj:function faj(){},
fJv:function fJv(){},
a_H:function a_H(d){this.a=d},
aGc:function aGc(d,e,f,g,h){var _=this
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
eUZ:function eUZ(d,e,f){this.a=d
this.b=e
this.c=f},
eV_:function eV_(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e){this.a=d
this.b=e},
eUY:function eUY(d,e){this.a=d
this.b=e},
eUW:function eUW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eUR:function eUR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUP:function eUP(d,e){this.a=d
this.b=e},
eUS:function eUS(d){this.a=d},
eUT:function eUT(d,e){this.a=d
this.b=e},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUG:function eUG(d,e){this.a=d
this.b=e},
eUI:function eUI(d){this.a=d},
eUJ:function eUJ(d){this.a=d},
eUK:function eUK(d){this.a=d},
eUL:function eUL(d){this.a=d},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUM:function eUM(d,e){this.a=d
this.b=e},
eVc:function eVc(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVe:function eVe(d){this.a=d},
eVa:function eVa(d){this.a=d},
eVg:function eVg(d){this.a=d},
eV9:function eV9(d,e){this.a=d
this.b=e},
eVh:function eVh(d){this.a=d},
eV8:function eV8(d,e){this.a=d
this.b=e},
eVi:function eVi(d){this.a=d},
eV7:function eV7(d){this.a=d},
eVj:function eVj(d){this.a=d},
eV6:function eV6(d,e){this.a=d
this.b=e},
eVk:function eVk(d){this.a=d},
eV5:function eV5(d,e){this.a=d
this.b=e},
eVl:function eVl(d){this.a=d},
eV4:function eV4(d){this.a=d},
eVm:function eVm(d,e){this.a=d
this.b=e},
eV3:function eV3(d,e){this.a=d
this.b=e},
eVn:function eVn(d){this.a=d},
eVf:function eVf(d){this.a=d},
eV2:function eV2(d,e){this.a=d
this.b=e},
eUN:function eUN(d,e,f){this.a=d
this.b=e
this.c=f},
eUO:function eUO(d,e,f){this.a=d
this.b=e
this.c=f},
eV1:function eV1(d,e){this.a=d
this.b=e},
eV0:function eV0(d,e){this.a=d
this.b=e},
fJu:function fJu(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e,f){this.c=d
this.d=e
this.a=f},
aGb:function aGb(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eUy:function eUy(d){this.a=d},
eUz:function eUz(d){this.a=d},
eUA:function eUA(d,e){this.a=d
this.b=e},
eUB:function eUB(d){this.a=d},
eUC:function eUC(d){this.a=d},
eUx:function eUx(d,e){this.a=d
this.b=e},
eUD:function eUD(d,e){this.a=d
this.b=e},
eUE:function eUE(d,e){this.a=d
this.b=e},
fgG:function fgG(d){this.a=d},
b_P:function b_P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCL:function aCL(d,e,f){this.c=d
this.d=e
this.a=f},
biG:function biG(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
eaG:function eaG(d){this.a=d},
eaF:function eaF(){},
bgd:function bgd(d,e){this.b=d
this.a=e},
fAH:function fAH(d){this.a=d},
fAI:function fAI(){},
fAJ:function fAJ(){},
fAK:function fAK(d){this.a=d},
aqD:function aqD(d,e){this.a=d
this.b=e},
fAD:function fAD(){},
fAE:function fAE(){},
fII:function fII(d,e){this.a=d
this.b=e},
Z4:function Z4(d,e,f){this.c=d
this.d=e
this.a=f},
aAc:function aAc(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d,e){this.a=d
this.b=e},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgA:function dgA(d){this.a=d},
dgw:function dgw(d,e){this.a=d
this.b=e},
br1:function br1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eaD:function eaD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eaE:function eaE(d){this.a=d},
f6M:function f6M(d){this.a=d},
f6O:function f6O(d,e){this.a=d
this.b=e},
f6N:function f6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6L:function f6L(){},
aKK:function aKK(){},
fVr(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vB(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_L:function b_L(d,e,f){this.c=d
this.d=e
this.a=f},
bkj:function bkj(d,e){this.c=d
this.a=e},
hXF(d){return A.d.dL(D.GB,new C.fu4(d),new C.fu5())},
hXG(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b0(t,6)
if(w.length===0)return null
v=new B.a2(D.GB,new C.fu6(w),x.b4)
if(!v.gae(0).C())return null
u=v.gL(0)
return new C.jB("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l8:function l8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fu4:function fu4(d){this.a=d},
fu5:function fu5(){},
fu6:function fu6(d){this.a=d},
mQ(d,e,f,g,h){return new C.Eh(f,g,d)},
hJU(d){var w=d.z,v=B.U(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f8M(),v),v.k("J.E"))
d.z=w
d.x=""},
du(d,e){var w=$.JV
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dv(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ch,D.f_,j,k,l)},
hg2(d,e){var w
C.hJU(d)
w=A.d.dL($.bCC(),new C.frV(e),new C.frW())
$.JV=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JV=""}d.z=B.bl(d.z,!0,x.F)},
Eh:function Eh(d,e,f){this.a=d
this.b=e
this.e=f},
f8M:function f8M(){},
fA9:function fA9(){},
fAa:function fAa(){},
fAb:function fAb(){},
fAm:function fAm(){},
fAr:function fAr(){},
fAs:function fAs(){},
fAt:function fAt(){},
fAu:function fAu(){},
fAv:function fAv(){},
fAw:function fAw(){},
fAx:function fAx(){},
fAc:function fAc(){},
fAd:function fAd(){},
fAe:function fAe(){},
fAf:function fAf(){},
fAg:function fAg(){},
fAh:function fAh(){},
fAi:function fAi(){},
fAj:function fAj(){},
fAk:function fAk(){},
fAl:function fAl(){},
fAn:function fAn(){},
fAo:function fAo(){},
fAp:function fAp(){},
fAq:function fAq(){},
frV:function frV(d){this.a=d},
frW:function frW(){},
iR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eo(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cz(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ch,D.f_,j,k,l)},
bBj(){var w=new B.S(Date.now(),0,!1)
return A.ib[B.bG(w)-1]+" "+B.bQ(w)+", "+B.by(w)},
es:function es(d,e,f){this.a=d
this.b=e
this.c=f},
byG(d){return new B.iM((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hOW(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alS(A.cE.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hP_(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fge(),x.dv).aI(0,"\n")},
hOZ(d){switch(d.a){case 2:return A.nk
case 1:case 5:return A.eSp
default:return A.Sy}},
hOT(d){switch(d.a){case 2:return A.uG
case 1:case 5:return A.Uo
default:return A.a8U}},
hOX(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.byG(u),q=(s&255)===0?v:C.byG(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.np(q,p,A.kA)
w=new B.pp(t,t,t,t)}switch(d.ax.a){case 1:return B.lq(v,v,v,new B.kw(r,w,v,A.aa7,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wI(B.lq(v,v,q,v,p+0.4,v,v,v))
default:return B.lq(v,v,v,new B.kw(r,w,B.ve(4),A.hC,v),v,v,v,v)}},
hOV(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hOT(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hP_(d)
t=C.byG(d.Q)
s=d.x.a>=700?A.ej:A.vh
r=d.y===A.cD?A.xC:A.aiw
q=d.z
p=new B.CL(w,l,l,B.fa(u,l,l,l,B.h2(l,t,1===q.a?A.aNS:A.aNR,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hOZ(d.as)))
break
case 1:case 4:o=C.hOW(d.at)
n=i===D.lm&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wI(B.fa(w,l,l,l,B.h2(l,A.ro,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ho(o,n?A.aa3:A.UL,l,l)
break
case 3:w=new B.np(A.HQ,1,A.kA)
u=B.ve(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lq(A.uG,B.fa(t,l,l,l,B.h2(l,D.e5P,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ej,l,!0,l,l,l,l),A.nk),l,new B.kw(E.aGh,new B.pp(w,w,w,w),u,A.hC,l),l,l,l,l)
break
case 2:p=C.hOX(d,e)
break
case 5:p=C.hOU(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h7N(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.aro(m/255,p)}if(w)return new F.vP(k,l,j,l,new B.RB(new B.kv(g,g,f,1/0),p))
if(i===D.kS){i=new B.np(A.HQ,1,A.kA)
i=B.lq(A.uG,p,l,new B.kw(A.oT,new B.pp(i,i,i,i),B.ve(4),A.hC,l),l,l,D.btu,l)}else i=p
return new F.vP(k,l,j,l,new B.fO(g,f,i))},
hOY(d,e,f,g){var w,v=null,u=C.byG(d.e),t=d.f
t=B.a([F.h6q(t!=null?B.lq(v,v,v,new B.kw(v,v,v,A.hC,new B.aVi(E.Up,A.a8O,B.a([u,C.byG(t)],x.cR),v)),v,v,v,v):B.lq(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fgd(f,g),B.U(w).k("K<1,fe>")))
return F.cpx(t)},
fWF(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fWF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3s(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.VQ(A.vW,A.HN,D.buB,null,null,null,!1,null)
o=new B.Bm(o,new C.fAQ(607,787,p,d))
o.M9(n,null)
r.push(o)}u=n.jW(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWF,v)},
hOU(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fVr(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaiM()
if(h==null)h=A.avY
j=B.ti(4279308564)
w=B.ve(18)
v=new B.np(B.ti(4287531653),3,A.kA)
u=i.length===0?"My links":i
u=B.a([B.wI(B.fa(u,m,m,m,B.h2(m,A.oT,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ej,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wI(B.fa(A.a.i(l.c),m,m,m,D.eZw,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.ti(4280690220)
o=new B.a8y(8,8)
n=A.a.i(r.b)
u.push(new B.nH(D.bnN,new C.avA(new C.ahj(q),B.lq(m,B.fa(n.length===0?A.a.i(r.c):n,m,m,m,D.f0P,A.nk),m,new B.kw(p,m,new B.ahK(o,o,o,o),A.hC,m),m,m,D.btV,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wI(B.fa(k,m,m,m,D.f03,m))
u.push(new C.avA(C.hoB(k),t))}return B.lq(m,B.yt(u,A.L7,A.lk),m,new B.kw(j,new B.pp(v,v,v,v),w,A.hC,m),m,m,D.boD,m)},
fge:function fge(){},
fgd:function fgd(d,e){this.a=d
this.b=e},
fAQ:function fAQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag2(d){var w,v
for(w=0;w<32;++w){v=D.Gs[w]
if(v.a===d)return v}return null},
haq(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cE.aJ(A.a.b0(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hj5(d,e){return B.a6(d,!1).c8(B.e8(new C.fH7(e),!0,null,x.fB))},
hj4(d,e){return B.bV(A.K,null,new C.fH6(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iV:function iV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
E8:function E8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
MW:function MW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi2:function bi2(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dRU:function dRU(d){this.a=d},
dRT:function dRT(d,e,f){this.a=d
this.b=e
this.c=f},
dRS:function dRS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpC:function bpC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTM:function eTM(d,e){this.a=d
this.b=e},
bd6:function bd6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYF:function aYF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6W:function c6W(){},
c6X:function c6X(d){this.a=d},
c6Y:function c6Y(d,e,f){this.a=d
this.b=e
this.c=f},
c6Z:function c6Z(d,e,f){this.a=d
this.b=e
this.c=f},
fH7:function fH7(d){this.a=d},
YD:function YD(d,e){this.c=d
this.a=e},
ayA:function ayA(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d5G:function d5G(d,e,f){this.a=d
this.b=e
this.c=f},
d5L:function d5L(d){this.a=d},
d5M:function d5M(d){this.a=d},
d5K:function d5K(d){this.a=d},
d5N:function d5N(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5O:function d5O(d){this.a=d},
d5I:function d5I(d){this.a=d},
d5P:function d5P(d){this.a=d},
d5H:function d5H(d,e){this.a=d
this.b=e},
d5Q:function d5Q(d,e){this.a=d
this.b=e},
fH6:function fH6(d){this.a=d},
fH5:function fH5(d){this.a=d},
fH4:function fH4(d,e,f){this.a=d
this.b=e
this.c=f},
fH3:function fH3(d,e){this.a=d
this.b=e},
aKd:function aKd(){},
i4f(d){return B.bV(A.K,null,new C.fJt(),d,!0,!0,!0,null,!1,!1,x.N)},
fJt:function fJt(){},
YY:function YY(d){this.a=d},
beA:function beA(d){this.d=d
this.c=this.a=null},
dcs:function dcs(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcu:function dcu(d){this.a=d},
hLn(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.x4},
hZA(d){var w,v=A.d.gL(d.split("@"))
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
hZz(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hLn(d)
switch(q){case"shimmer":return B.nL(A.a9f,g,new C.fxw(p,A.k.G(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdY(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dW(B.eb(A.A,B.dc(C.fNB(g,B.a4m(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdF(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eC(A.A,e*0.5,B.eb(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dm()
t=u.a
t.$flags&2&&B.ai(t)
t[11]=0.002
u.fz(e)
u.mE(Math.sin(e)*0.3)
return B.dW(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.bmu(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8A(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8d(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.btm(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqp(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bpy(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bd_(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.eb(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bS(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eC(A.A,s*0.06,B.eb(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fxw:function fxw(d,e){this.a=d
this.b=e},
bdY:function bdY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdF:function bdF(d,e,f){this.b=d
this.c=e
this.a=f},
bmu:function bmu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8A:function b8A(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8d:function b8d(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btm:function btm(d,e,f){this.b=d
this.c=e
this.a=f},
bqp:function bqp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpy:function bpy(d,e,f){this.b=d
this.c=e
this.a=f},
bd_:function bd_(d,e,f){this.b=d
this.d=e
this.a=f},
d5n:function d5n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xg:function xg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fxz(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kS},
hZF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fxA())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aP3(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hZE(d,e){var w,v,u,t,s,r=d.db
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
afG(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afG=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fpW(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dF,null,new C.fpX(e),d,!0,!0,!1,A.lo,!1,!1,x.N),$async$afG)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fXh(d),$async$afG)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KG(d,"Search states\u2026","",A.jZ,"Choose state"),$async$afG)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fWc(s)
if(p==null)p=A.d.gL(D.Q2)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fxB(p.d)
k=x.u
j=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ch,D.lm,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Ck(i,0.016,D.kT,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Ck(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Ck(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.K5("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.K5("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fTb(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.by9("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0u("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0u("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0u("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0u("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.by9("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Ck(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.eo(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.ch,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fTb(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.by9("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hcq("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hcq("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0u("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0u("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.by8("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.by8("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.by9("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.K5("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.K5("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.by8("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.by8("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.by9("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0u("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.by8("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0u("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fTb(0.22,0.83,0.56,4291404327,i),h)
h.push(C.K5("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.K5("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bg(null,null,null,null,D.o2,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rj(m,null,0,0,j,n,D.q1,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afG,v)},
fxA:function fxA(){},
fpW:function fpW(){},
fpX:function fpX(d){this.a=d},
fpU:function fpU(d){this.a=d},
fpV:function fpV(d){this.a=d},
hOo(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hOn(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mB
case"lineThrough":return A.zg
default:return A.aD}},
eo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eI(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
het(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.PP[w]
if(v.b===u)return v}return D.dd},
hKM(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cNx[w]
if(v.b===u)return v}return D.cQ},
hRa(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.db_[w]
if(v.b===u)return v}return D.be},
rj(d,e,f,g,h,i,j,k,l,m,n){return new C.lB(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h5a(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hMM(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.het(d.h(0,"transition"))
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
n=B.cD(n,new C.cck(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a3(n).k("J.E"))}return C.rj(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hMM(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.anQ[w]
if(v.b===u)return v}return D.mv},
Bg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hZ(p,t,a1,h,i,w,a0==null?B.a([C.rj(4294967295,null,0,0,null,C.cC(),D.q1,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vg(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hIW(a6.h(0,"aspectRatio"))
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
o=C.ks(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ks(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cc7(),x.N)
f=B.B(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cc8(),x.N)
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
g=B.cD(g,new C.cc9(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a3(g).k("J.E"))}return C.Bg(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rj(4294967295,a3,0,0,a3,C.cC(),D.q1,"","","",D.dd)],x.g):g,v,p,o,s)},
ks(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hIW(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dbQ[w]
if(v.b===u)return v}return D.Ch},
cC(){var w=Date.now(),v=$.iX
$.iX=v+1
return""+1000*w+"_"+v},
ccB(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Ci){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.ch,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.ch,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.ch,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ch,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.ch,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ch,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ch,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.K(d.z,C.eo(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.ch,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.ch,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.eo(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.ch,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.ch,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.eo(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.ch,D.f_,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.ch,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.ch,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,22,A.bl,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ch,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.ch,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bl,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ch,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.ch,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bl,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ch,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hAC(d){return A.d.dL(D.a1y,new C.ccC(d),new C.ccD())},
hAz(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gS(t)
if(!q.b(u))continue
try{J.ch(v,C.Vg(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fPJ(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ccx(t)
for(w=J.aV(d);w.C();)s.$1(w.gS(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b_(u,new C.ccw())
return u},
h5d(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ccs()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aq4(d){return C.hAx(d)},
hAx(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ccv()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1G(m),$async$aq4)
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
return B.b(B.az(),$async$aq4)
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
case 11:o=l.$1($.h5c.h(0,m))
n=C.fPJ(C.fPJ(j,r),o)
if(n.length===0){u=C.h5d(C.h5d(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aq4,v)},
ccr(d){return C.hAw(d)},
hAw(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ccr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ccr)
case 7:r=f
q=r.rV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kz(q,B.U(q).c)
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
return B.i($async$ccr,v)},
b_R(d,e){return C.hAy(d,e)},
hAy(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_R=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b_R)
case 6:s=g
q=s.rV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.KP(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b_R)
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
return B.i($async$b_R,v)},
Vh(d,e){return C.hAA(d,e)},
hAA(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vh=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h5b.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aq4(a3),$async$Vh)
case 5:p=a6
case 4:w=6
return B.b(C.ccr(a3),$async$Vh)
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
e=B.B(new B.a2(new B.bc(n,m),new C.ccy(o),l),l.k("J.E"))
A.d.b_(e,new C.ccz())
$.h5b.n(0,a0,e)
n=B.U(e).k("K<1,a4<n,@>>")
n=B.B(new B.K(e,new C.ccA(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h5c.n(0,a0,r)
t=8
w=11
return B.b(B.agt(a0,r),$async$Vh)
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
return B.b(B.az(),$async$Vh)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vh)
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
return B.i($async$Vh,v)},
Ih:function Ih(d,e){this.a=d
this.b=e},
aq2:function aq2(d,e){this.a=d
this.b=e},
uv:function uv(d,e){this.a=d
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
lB:function lB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ccl:function ccl(){},
ccm:function ccm(){},
cck:function cck(){},
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
cca:function cca(){},
ccb:function ccb(){},
cc7:function cc7(){},
cc8:function cc8(){},
cc9:function cc9(){},
jB:function jB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ccC:function ccC(d){this.a=d},
ccD:function ccD(){},
ccx:function ccx(d){this.a=d},
ccw:function ccw(){},
ccs:function ccs(){},
cct:function cct(){},
ccu:function ccu(){},
ccv:function ccv(){},
ccy:function ccy(d){this.a=d},
ccz:function ccz(){},
ccA:function ccA(){},
hZQ(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fy8(e,v,d,B.aX(w))
w.$1(new C.fy4())
w.$1(new C.fy5())
w.$1(new C.fy6())
w.$1(new C.fy7())
return v},
fy8:function fy8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fy4:function fy4(){},
fy5:function fy5(){},
fy6:function fy6(){},
fy7:function fy7(){},
b_O:function b_O(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccg:function ccg(d){this.a=d},
ccf:function ccf(){},
cch:function cch(){},
cci:function cci(d,e){this.a=d
this.b=e},
ccj:function ccj(d){this.a=d},
ang:function ang(d,e){this.c=d
this.a=e},
bhN:function bhN(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dE6:function dE6(){},
aJZ:function aJZ(){},
cco(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cco=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.ePN)
u=!1
w=1
break}u=B.kP(!1,d,t,!1,null,A.a48,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cco,v)},
hAu(d){var w=A.d.bc(D.GB,new C.ccp(d))
if(w<0)return!0
return w>=4},
hAv(d){var w=A.d.bc($.bCC(),new C.ccq(d))
if(w<0)return!0
return w>=5},
ccp:function ccp(d){this.a=d},
ccq:function ccq(d){this.a=d},
i0v(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yi()
$.q4().pD(t,new C.fAX(s),!0)
u=B.a([B.Du(v,A.q5,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f__,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.n5,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.r,u,v)},
fAX:function fAX(d){this.a=d},
i06(){return C.fWy()},
hY3(){return C.bAw()},
i_6(){return C.fWp()},
aO9(d,e,f){var w=0,v=B.j(x.H),u
var $async$aO9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fA2(d,f),$async$aO9)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aO9,v)},
fA2(d,e){var w=0,v=B.j(x.H),u
var $async$fA2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.byH
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.K,null,new C.fA3(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fA2)
case 2:return B.h(null,v)}})
return B.i($async$fA2,v)},
fA3:function fA3(d,e){this.a=d
this.b=e},
acy:function acy(d,e,f){this.c=d
this.d=e
this.a=f},
emK:function emK(d,e){this.a=d
this.b=e},
emL:function emL(d,e){this.a=d
this.b=e},
emM:function emM(d,e){this.a=d
this.b=e},
emN:function emN(d){this.a=d},
acQ:function acQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_N(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_M(g,m,f,d,e,h,l,k,j,o,i,null)},
hhm(d){return B.cp(new C.fy3(d))},
fWA(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i0e(d){if(d===D.ch)return"None"
return C.fWA(d)},
bzc(d,e,f,g){return C.hRh(d,e,f,g)},
hRh(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bzc=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fTu&&t.pl())t.eJ()
$.fTu=!0
s.a=null
w=3
return B.b(B.hR(A.bh,!0,"Animation preview",d,new C.fiM(s,e,g,f),null,A.eE,!0,x.H),$async$bzc)
case 3:s=s.a
if(s!=null)s.a8(0)
$.fTu=!1
case 1:return B.h(u,v)}})
return B.i($async$bzc,v)},
fKh(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fKh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,280,440)
s=f===D.ch
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fWA(f)+" Slide transition preview"
s=s?Af.EV:A.v1
w=3
return B.b(C.bzc(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aHA(f,null),A.aq),null),r),$async$fKh)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fKh,v)},
hgF(d,e,f){var w,v,u=null,t=A.cr.aw(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dW(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dW(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dW(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dW(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.eb(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.eb(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dm()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.fz((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dm()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.jR((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dm()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
w.mE((1-t)*0.8)
v=0.6+t*0.4
w.jB(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dW(B.dc(f,t),new B.u((1-t)*24,0))}},
bC7(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bC7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,300,440)
s=f===D.ch
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fWA(f)+" Element animation preview"
s=s?Af.EV:A.v1
w=3
return B.b(C.bzc(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayk(f,null),A.aq),null),r),$async$bC7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bC7,v)},
i0d(d){var w,v,u,t,s=$.af8.W(0,d)
if(s!=null){$.af8.n(0,d,s)
return s}w=A.cE.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
$.af8.n(0,d,w)
v=$.fUh=$.fUh+w.length
u=B.a3($.af8).k("cu<1>")
for(;;){if(!(v>41943040&&$.af8.a>1))break
t=new B.cu($.af8,u).gae(0)
if(!t.C())B.ba(B.fA())
v-=$.af8.W(0,t.gS(0)).length
$.fUh=v}return w},
i_V(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kS(0,d),j=B.B(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.S9(s,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.S9(t,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.S9(u,A.cv))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b0(d,r)
v.push(B.dn(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1F(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aP($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.ke(e))
return m
case"rounded":m=new B.aP($.X().r,A.ap,n,n,B.a([],m))
w=e.geg()*0.18
m.E(new B.iT(B.bz(e,new B.aW(w,w))))
return m
case"triangle":m=new B.aP($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbR().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bF())
return m
case"hexagon":w=$.X()
m=B.a([],m)
v=new B.aP(w.r,A.ap,n,n,m)
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
case"diamond":m=new B.aP($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbR().a,e.b))
m.E(new B.ap(e.c,e.gbR().b))
m.E(new B.ap(e.gbR().a,e.d))
m.E(new B.ap(e.a,e.gbR().b))
m.E(new B.bF())
return m
case"arch":m=new B.aP($.X().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b8v(new B.u(t,p),new B.aW(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aP($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.o_(e))
return m}},
fvD(d,e,f){return B.cp(new C.fvE(D.eIs.t(0,d),d,f,e))},
b_M:function b_M(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cce:function cce(d){this.a=d},
ccd:function ccd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccc:function ccc(){},
b_J:function b_J(d,e){this.b=d
this.a=e},
fy3:function fy3(d){this.a=d},
fy2:function fy2(d,e){this.a=d
this.b=e},
fiM:function fiM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiK:function fiK(d){this.a=d},
fiL:function fiL(d,e){this.a=d
this.b=e},
aHA:function aHA(d,e){this.c=d
this.a=e},
bsT:function bsT(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f15:function f15(d,e,f){this.a=d
this.b=e
this.c=f},
aIc:function aIc(d,e){this.b=d
this.a=e},
Ui:function Ui(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bi_:function bi_(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dQ6:function dQ6(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
Ig:function Ig(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cc6:function cc6(d){this.a=d},
cc5:function cc5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayk:function ayk(d,e){this.c=d
this.a=e},
bct:function bct(){this.d=0
this.c=this.a=null},
d2C:function d2C(d){this.a=d},
d2B:function d2B(d){this.a=d},
a70:function a70(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biE:function biE(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
eam:function eam(d,e,f){this.a=d
this.b=e
this.c=f},
aYI:function aYI(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bdD:function bdD(d,e,f){this.b=d
this.c=e
this.a=f},
bov:function bov(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eRp:function eRp(){},
fvE:function fvE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpv:function bpv(d,e,f){this.b=d
this.c=e
this.a=f},
aKc:function aKc(){},
aKI:function aKI(){},
aM2:function aM2(){},
fz3(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fz3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wR.c5().Lz(D.d95,A.tC,!0),$async$fz3)
case 3:r=e
if(r==null||J.cl(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i_P(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fz3,v)},
i_P(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7j(d,new B.a_j(A.cS.gcv().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hST(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7j(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.Kl(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7j(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hST(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cv6().cH4(B.r3(d,A.hT,o,o),o,o,!1).cIM(0,"word/document.xml")
if(n==null)return""
w=n.cQN()
v=A.c4.Kl(0,w==null?$.hjA():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kS(0,r)
p=A.a.i(B.cD(q,new C.flB(),B.a3(q).k("J.E"),t).fW(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7j:function a7j(d,e,f){this.a=d
this.b=e
this.c=f},
flB:function flB(){},
hAB(d,e,f,g,h,i,j,k,l){return new C.Nn(l,e,d,g,f,i,h,j,k,null)},
Nn:function Nn(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDb:function aDb(d,e,f,g,h,i,j,k,l){var _=this
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
_.a7$=l
_.c=_.a=null},
esY:function esY(d){this.a=d},
esW:function esW(){},
esX:function esX(d){this.a=d},
epl:function epl(){},
epm:function epm(){},
epn:function epn(d,e){this.a=d
this.b=e},
eqW:function eqW(d){this.a=d},
eqK:function eqK(){},
eqL:function eqL(){},
eoJ:function eoJ(){},
es3:function es3(d){this.a=d},
esU:function esU(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
esH:function esH(d){this.a=d},
esI:function esI(){},
esJ:function esJ(){},
esK:function esK(d){this.a=d},
esL:function esL(){},
eo7:function eo7(d){this.a=d},
esV:function esV(){},
eq2:function eq2(d,e){this.a=d
this.b=e},
eo5:function eo5(d){this.a=d},
eo6:function eo6(d){this.a=d},
eqp:function eqp(d){this.a=d},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
eqr:function eqr(d){this.a=d},
eq1:function eq1(){},
eq0:function eq0(d){this.a=d},
epZ:function epZ(){},
epY:function epY(d){this.a=d},
eq_:function eq_(){},
eph:function eph(d){this.a=d},
epi:function epi(d){this.a=d},
eq8:function eq8(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d){this.a=d},
eq7:function eq7(d){this.a=d},
eq9:function eq9(d,e){this.a=d
this.b=e},
eo9:function eo9(){},
eoa:function eoa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqk:function eqk(){},
eql:function eql(d,e){this.a=d
this.b=e},
eqi:function eqi(d,e,f){this.a=d
this.b=e
this.c=f},
eqj:function eqj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqc:function eqc(d,e,f){this.a=d
this.b=e
this.c=f},
eqd:function eqd(d,e,f){this.a=d
this.b=e
this.c=f},
eqe:function eqe(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqh:function eqh(d,e){this.a=d
this.b=e},
eqb:function eqb(d,e){this.a=d
this.b=e},
eqn:function eqn(d){this.a=d},
eqo:function eqo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqm:function eqm(d){this.a=d},
eqF:function eqF(){},
eqG:function eqG(){},
eqH:function eqH(){},
eqI:function eqI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqC:function eqC(d){this.a=d},
eqE:function eqE(){},
eqD:function eqD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eqA:function eqA(d,e,f){this.a=d
this.b=e
this.c=f},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqJ:function eqJ(){},
eqa:function eqa(d,e){this.a=d
this.b=e},
eoq:function eoq(){},
eor:function eor(d,e,f){this.a=d
this.b=e
this.c=f},
eos:function eos(d){this.a=d},
eot:function eot(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eop:function eop(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e){this.a=d
this.b=e},
eqM:function eqM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
en4:function en4(d,e){this.a=d
this.b=e},
eoo:function eoo(d,e){this.a=d
this.b=e},
eom:function eom(d){this.a=d},
eqY:function eqY(d,e,f){this.a=d
this.b=e
this.c=f},
eoi:function eoi(d,e){this.a=d
this.b=e},
eoh:function eoh(d){this.a=d},
eqX:function eqX(d,e,f){this.a=d
this.b=e
this.c=f},
eo8:function eo8(d){this.a=d},
eoK:function eoK(){},
esF:function esF(d,e){this.a=d
this.b=e},
esG:function esG(d,e,f){this.a=d
this.b=e
this.c=f},
es4:function es4(d,e,f){this.a=d
this.b=e
this.c=f},
en5:function en5(d){this.a=d},
en2:function en2(d,e){this.a=d
this.b=e},
emT:function emT(d,e){this.a=d
this.b=e},
emQ:function emQ(d){this.a=d},
emP:function emP(d,e){this.a=d
this.b=e},
emR:function emR(d,e){this.a=d
this.b=e},
eok:function eok(d){this.a=d},
eol:function eol(d,e){this.a=d
this.b=e},
eoj:function eoj(d){this.a=d},
enx:function enx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eny:function eny(d,e){this.a=d
this.b=e},
enC:function enC(d,e){this.a=d
this.b=e},
enD:function enD(d){this.a=d},
enA:function enA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
enB:function enB(d){this.a=d},
enz:function enz(){},
enw:function enw(d,e,f){this.a=d
this.b=e
this.c=f},
eqz:function eqz(d,e){this.a=d
this.b=e},
esO:function esO(d){this.a=d},
esP:function esP(d,e){this.a=d
this.b=e},
esQ:function esQ(d){this.a=d},
esR:function esR(d,e,f){this.a=d
this.b=e
this.c=f},
esN:function esN(d){this.a=d},
esk:function esk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esj:function esj(d,e,f){this.a=d
this.b=e
this.c=f},
esi:function esi(){},
esh:function esh(d,e,f){this.a=d
this.b=e
this.c=f},
esg:function esg(d,e){this.a=d
this.b=e},
esd:function esd(d,e,f){this.a=d
this.b=e
this.c=f},
esb:function esb(d){this.a=d},
esc:function esc(d){this.a=d},
esf:function esf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ese:function ese(d){this.a=d},
epd:function epd(d,e){this.a=d
this.b=e},
epc:function epc(d,e){this.a=d
this.b=e},
es5:function es5(){},
esE:function esE(d,e){this.a=d
this.b=e},
esC:function esC(d){this.a=d},
esD:function esD(d){this.a=d},
emY:function emY(d,e){this.a=d
this.b=e},
emW:function emW(d){this.a=d},
emX:function emX(d){this.a=d},
emZ:function emZ(d,e){this.a=d
this.b=e},
en_:function en_(d,e,f){this.a=d
this.b=e
this.c=f},
en3:function en3(d,e){this.a=d
this.b=e},
emV:function emV(d,e,f){this.a=d
this.b=e
this.c=f},
emU:function emU(d){this.a=d},
eqV:function eqV(d,e,f){this.a=d
this.b=e
this.c=f},
esM:function esM(d,e,f){this.a=d
this.b=e
this.c=f},
epg:function epg(d,e,f){this.a=d
this.b=e
this.c=f},
epf:function epf(){},
enG:function enG(d,e,f){this.a=d
this.b=e
this.c=f},
enH:function enH(d){this.a=d},
emS:function emS(d,e){this.a=d
this.b=e},
eoI:function eoI(d,e){this.a=d
this.b=e},
en0:function en0(d,e){this.a=d
this.b=e},
en9:function en9(d){this.a=d},
ena:function ena(d,e){this.a=d
this.b=e},
enb:function enb(d,e){this.a=d
this.b=e},
en8:function en8(d){this.a=d},
enm:function enm(d,e){this.a=d
this.b=e},
en7:function en7(d){this.a=d},
enp:function enp(d){this.a=d},
enq:function enq(d){this.a=d},
enr:function enr(d){this.a=d},
ens:function ens(d){this.a=d},
ent:function ent(d){this.a=d},
enu:function enu(){},
env:function env(){},
enc:function enc(d){this.a=d},
end:function end(d){this.a=d},
ene:function ene(d){this.a=d},
enf:function enf(d){this.a=d},
eng:function eng(d){this.a=d},
enh:function enh(d){this.a=d},
eni:function eni(d){this.a=d},
enj:function enj(d){this.a=d},
enk:function enk(d){this.a=d},
enl:function enl(d){this.a=d},
enn:function enn(d){this.a=d},
eno:function eno(d,e){this.a=d
this.b=e},
eoH:function eoH(d,e,f){this.a=d
this.b=e
this.c=f},
eoG:function eoG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoF:function eoF(d,e,f){this.a=d
this.b=e
this.c=f},
eoE:function eoE(d,e){this.a=d
this.b=e},
en1:function en1(d,e){this.a=d
this.b=e},
enK:function enK(d){this.a=d},
enJ:function enJ(d){this.a=d},
enI:function enI(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
enM:function enM(d){this.a=d},
enN:function enN(d,e){this.a=d
this.b=e},
eon:function eon(d){this.a=d},
eqy:function eqy(d,e){this.a=d
this.b=e},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqw:function eqw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
equ:function equ(d){this.a=d},
eqv:function eqv(d,e){this.a=d
this.b=e},
eqs:function eqs(){},
eqt:function eqt(){},
es6:function es6(){},
es7:function es7(d,e){this.a=d
this.b=e},
es8:function es8(){},
es9:function es9(d){this.a=d},
esa:function esa(d,e){this.a=d
this.b=e},
en6:function en6(d,e){this.a=d
this.b=e},
eob:function eob(){},
eoc:function eoc(){},
eod:function eod(){},
eog:function eog(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eof:function eof(d,e){this.a=d
this.b=e},
eoe:function eoe(d,e,f){this.a=d
this.b=e
this.c=f},
epH:function epH(d){this.a=d},
epG:function epG(){},
epI:function epI(d,e){this.a=d
this.b=e},
epJ:function epJ(d,e){this.a=d
this.b=e},
epF:function epF(d){this.a=d},
epK:function epK(d,e){this.a=d
this.b=e},
epE:function epE(d){this.a=d},
epL:function epL(d,e){this.a=d
this.b=e},
epD:function epD(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
epC:function epC(d){this.a=d},
epN:function epN(d,e){this.a=d
this.b=e},
epB:function epB(d,e){this.a=d
this.b=e},
epO:function epO(d,e){this.a=d
this.b=e},
epA:function epA(d){this.a=d},
epP:function epP(d,e){this.a=d
this.b=e},
epz:function epz(d){this.a=d},
eps:function eps(d,e){this.a=d
this.b=e},
ept:function ept(d){this.a=d},
epu:function epu(d){this.a=d},
epr:function epr(d){this.a=d},
epv:function epv(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
epw:function epw(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
epx:function epx(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
epy:function epy(d){this.a=d},
eoA:function eoA(d){this.a=d},
eoB:function eoB(d){this.a=d},
eoD:function eoD(d){this.a=d},
eov:function eov(d){this.a=d},
eou:function eou(d,e){this.a=d
this.b=e},
eow:function eow(d,e){this.a=d
this.b=e},
eox:function eox(d){this.a=d},
eoy:function eoy(d){this.a=d},
eoz:function eoz(d,e){this.a=d
this.b=e},
eoC:function eoC(d){this.a=d},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
epS:function epS(d,e){this.a=d
this.b=e},
epR:function epR(d,e){this.a=d
this.b=e},
epQ:function epQ(d,e){this.a=d
this.b=e},
epT:function epT(d){this.a=d},
epU:function epU(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
erh:function erh(d){this.a=d},
eri:function eri(d){this.a=d},
ert:function ert(d){this.a=d},
erE:function erE(d){this.a=d},
erP:function erP(d){this.a=d},
erW:function erW(d){this.a=d},
erX:function erX(d){this.a=d},
erY:function erY(d){this.a=d},
erZ:function erZ(d){this.a=d},
es_:function es_(d,e){this.a=d
this.b=e},
erj:function erj(d){this.a=d},
erk:function erk(d){this.a=d},
erl:function erl(d){this.a=d},
erm:function erm(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erp:function erp(d){this.a=d},
erq:function erq(d){this.a=d},
err:function err(d){this.a=d},
ers:function ers(d){this.a=d},
eru:function eru(d){this.a=d},
erv:function erv(d){this.a=d},
erw:function erw(d){this.a=d},
erx:function erx(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(d){this.a=d},
erA:function erA(d){this.a=d},
erB:function erB(d){this.a=d},
erC:function erC(d){this.a=d},
er6:function er6(d){this.a=d},
erD:function erD(d){this.a=d},
ere:function ere(d){this.a=d},
erF:function erF(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
erG:function erG(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
erc:function erc(d,e,f){this.a=d
this.b=e
this.c=f},
er2:function er2(d,e){this.a=d
this.b=e},
erf:function erf(d){this.a=d},
es0:function es0(d,e){this.a=d
this.b=e},
es2:function es2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
es1:function es1(d,e){this.a=d
this.b=e},
erI:function erI(d,e,f){this.a=d
this.b=e
this.c=f},
erb:function erb(d,e,f){this.a=d
this.b=e
this.c=f},
er1:function er1(d,e,f){this.a=d
this.b=e
this.c=f},
er_:function er_(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
er0:function er0(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
erK:function erK(d){this.a=d},
er9:function er9(d){this.a=d},
erL:function erL(d){this.a=d},
erM:function erM(d){this.a=d},
erN:function erN(d){this.a=d},
erO:function erO(d){this.a=d},
er8:function er8(d){this.a=d},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
erS:function erS(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
erT:function erT(d,e){this.a=d
this.b=e},
er5:function er5(d){this.a=d},
erU:function erU(d,e){this.a=d
this.b=e},
er4:function er4(d){this.a=d},
erV:function erV(d,e){this.a=d
this.b=e},
er3:function er3(d){this.a=d},
enF:function enF(d,e,f){this.a=d
this.b=e
this.c=f},
enE:function enE(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
esm:function esm(d,e){this.a=d
this.b=e},
eso:function eso(d,e){this.a=d
this.b=e},
esl:function esl(d,e){this.a=d
this.b=e},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoM:function eoM(d){this.a=d},
eoO:function eoO(d,e){this.a=d
this.b=e},
eoL:function eoL(d){this.a=d},
epk:function epk(){},
epj:function epj(){},
esA:function esA(d){this.a=d},
esz:function esz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esy:function esy(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esx:function esx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esu:function esu(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
ess:function ess(d){this.a=d},
esv:function esv(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esB:function esB(d){this.a=d},
eo4:function eo4(d){this.a=d},
eo3:function eo3(d,e,f){this.a=d
this.b=e
this.c=f},
eo2:function eo2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enS:function enS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
enT:function enT(d,e){this.a=d
this.b=e},
enU:function enU(d,e){this.a=d
this.b=e},
enV:function enV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enR:function enR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enW:function enW(d,e){this.a=d
this.b=e},
enY:function enY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enX:function enX(d,e){this.a=d
this.b=e},
enZ:function enZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enQ:function enQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eo_:function eo_(d,e){this.a=d
this.b=e},
enP:function enP(d,e){this.a=d
this.b=e},
eo0:function eo0(d,e){this.a=d
this.b=e},
enO:function enO(d){this.a=d},
eo1:function eo1(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epV:function epV(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
ep0:function ep0(d,e){this.a=d
this.b=e},
ep1:function ep1(d,e){this.a=d
this.b=e},
ep_:function ep_(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
ep3:function ep3(d,e){this.a=d
this.b=e},
eoY:function eoY(d,e){this.a=d
this.b=e},
ep4:function ep4(d,e){this.a=d
this.b=e},
eoX:function eoX(d,e){this.a=d
this.b=e},
ep5:function ep5(d,e){this.a=d
this.b=e},
eoW:function eoW(d,e){this.a=d
this.b=e},
ep6:function ep6(d,e,f){this.a=d
this.b=e
this.c=f},
eoV:function eoV(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e,f){this.a=d
this.b=e
this.c=f},
eoU:function eoU(d,e){this.a=d
this.b=e},
ep8:function ep8(d,e){this.a=d
this.b=e},
eoT:function eoT(d,e,f){this.a=d
this.b=e
this.c=f},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e){this.a=d
this.b=e},
eoS:function eoS(d,e){this.a=d
this.b=e},
epa:function epa(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e,f){this.a=d
this.b=e
this.c=f},
eoP:function eoP(d,e){this.a=d
this.b=e},
epb:function epb(d,e){this.a=d
this.b=e},
epe:function epe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emO:function emO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqT:function eqT(d,e){this.a=d
this.b=e},
eqR:function eqR(d){this.a=d},
eqS:function eqS(d,e){this.a=d
this.b=e},
aej:function aej(d,e,f){this.a=d
this.b=e
this.c=f},
axH:function axH(d,e){this.c=d
this.a=e},
bbg:function bbg(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cZE:function cZE(d){this.a=d},
cZD:function cZD(d){this.a=d},
bbu:function bbu(d,e){this.c=d
this.a=e},
d__:function d__(d){this.a=d},
d_0:function d_0(d){this.a=d},
Jh:function Jh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbf:function bbf(){this.d=!1
this.c=this.a=null},
cZB:function cZB(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZC:function cZC(d){this.a=d},
cZw:function cZw(d){this.a=d},
cZA:function cZA(d){this.a=d},
cZy:function cZy(d){this.a=d},
cZz:function cZz(d,e){this.a=d
this.b=e},
P_:function P_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ZP:function ZP(d,e,f){this.c=d
this.d=e
this.a=f},
aDe:function aDe(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a7$=f
_.c=_.a=null},
ety:function ety(){},
eto:function eto(d){this.a=d},
etx:function etx(d){this.a=d},
etp:function etp(d){this.a=d},
etq:function etq(d){this.a=d},
etk:function etk(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
etn:function etn(d,e,f){this.a=d
this.b=e
this.c=f},
etv:function etv(){},
etw:function etw(d){this.a=d},
etr:function etr(d){this.a=d},
ets:function ets(d){this.a=d},
ett:function ett(d){this.a=d},
etu:function etu(d){this.a=d},
etz:function etz(d,e,f){this.a=d
this.b=e
this.c=f},
etB:function etB(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
Jo:function Jo(d,e){this.c=d
this.a=e},
bq_:function bq_(d,e){this.b=d
this.a=e},
bg7:function bg7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bg6:function bg6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIU:function aIU(){},
aKW:function aKW(){},
bvH:function bvH(){},
aKX:function aKX(){},
fAY(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fAY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wR.c5().Lz(B.a(["pdf"],x.s),A.tC,!0),$async$fAY)
case 3:q=e
if(q==null||J.cl(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bng(s,"data:application/pdf;base64,"+A.cS.gcv().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAY,v)},
i0p(d){var w,v,u,t,s,r
try{w=B.jm(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kS(0,w).gM(0)
if(t>0){s=J.aPv(t,1,200)
return s}}catch(r){}return 1},
fAP(d){return C.i0o(d)},
i0o(d){var w=0,v=B.j(x.T),u
var $async$fAP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAP,v)},
bBi(d,e,f,g){return C.i0y(d,e,f,g)},
i0y(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bBi=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e7(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hhX(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lK(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lK(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lK(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lK(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.X()
g=new B.rV()
f=B.GG(g,null)
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
b2.delete()}a0=a2}a3=g.qj()
w=7
return B.b(a3.z1(800,h),$async$bBi)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hp(A.fW),$async$bBi)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dC.gaM(a5))
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
return B.i($async$bBi,v)},
aOJ(d,e,f){return C.i0m(d,e,f)},
i0m(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.agH(d,e,f,new C.fAN(r,q),q,"Sign document"),$async$aOJ)
case 3:if(!new B.e7(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bBi(q,t,r.b,r.c),$async$aOJ)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_Q(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOJ,v)},
i0w(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hbc(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hbc(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b0(A.a.aT(A.o.fQ(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b0(A.a.aT(A.o.fQ(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lm&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.haP(q.ay)+";border:2px solid "+C.haP(q.ch)+'"></div>'
break
case 5:l=C.fVr(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaiM()
if(p==null)p=A.avY
n=B.U(p)
k=n.k("pQ<1>")
j=new B.pQ(p,0,8,k)
j.GQ(p,0,8,n.c)
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
haP(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hbc(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bBg(d,e){var w=0,v=B.j(x.H)
var $async$bBg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fAW(e,C.i0w(e),d),d,null,!0,!0,x.H),$async$bBg)
case 2:return B.h(null,v)}})
return B.i($async$bBg,v)},
bBh(){var w=0,v=B.j(x.T),u,t,s
var $async$bBh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gc(92,2400),$async$bBh)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fAP(s),$async$bBh)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBh,v)},
aOK(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fWF(d),$async$aOK)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Z.fDc(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOK,v)},
h59(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_Q:function b_Q(d,e,f){this.a=d
this.b=e
this.c=f},
fAN:function fAN(d,e){this.a=d
this.b=e},
fAW:function fAW(d,e,f){this.a=d
this.b=e
this.c=f},
fAT:function fAT(d){this.a=d},
fAU:function fAU(d,e,f){this.a=d
this.b=e
this.c=f},
fAV:function fAV(d,e,f){this.a=d
this.b=e
this.c=f},
i0n(d){return C.ks(d.w)},
i0u(d){var w,v,u,t
if(d.length===0||!A.d.da(d,C.i2d()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yg(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hnB()
if(w.b.test(u))return u
return null},
hhZ(d,e,f){var w,v,u=C.hwd(d),t=$.pk()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i0A(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fk(w,d.b);v.C();){u=w.gS(w).y
t=C.yg(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
fAL(d,e){var w,v=d.y,u=C.yg(v==null?"":v)
if(u!=null)return d.y=u
w=C.i0A(new B.a2(e,new C.fAM(d),B.U(e).k("a2<1>")))
v=d.x
return d.y=C.hhZ(v==null?"":v,null,w)},
i0z(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.ks(w.w))return null
v=w.y
return C.yg(v==null?"":v)},
hAD(){var w,v=$.pk(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fW(u)},
Vk(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Vk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$Vk)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f2("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$Vk)
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
return B.i($async$Vk,v)},
Vl(d){return C.hAE(d)},
hAE(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Vl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$Vl)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hB("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cG,null),$async$Vl)
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
return B.i($async$Vl,v)},
a7l(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7l=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7l)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Vk(),$async$a7l)
case 4:s=a6
r=C.yg(a2==null?"":a2)
if(r==null)r=a3!=null?C.hhZ(a3,null,A.Id):null
q=x.N
p=B.aX(q)
for(o=J.dk(s),n=J.aV(o.gi_(s)),m=x.f;n.C();){l=n.gS(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yg(J.k(k==null?"":k))
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
if(D.Sa.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yg(J.k(q==null?"":q))
if(f==null)f=C.h5e(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Vl(s),$async$a7l)
case 7:u=new B.aEE(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hAD()
n=r==null
d=n?C.h5e(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcv().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sa.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Vl(s),$async$a7l)
case 8:u=new B.aEE(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7l,v)},
h5e(d){var w,v,u=$.pk()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aq6(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aq6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aq6)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Vk(),$async$aq6)
case 6:t=f
s=J.a5(t)
r=s.gM(t)
s.bn(t,new C.ccE(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.Vl(t),$async$aq6)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aq6,v)},
aq5(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aq5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yg(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aq5)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Vk(),$async$aq5)
case 6:t=o.js(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gS(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yg(J.k(q==null?"":q))===p){u=C.a7k(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aq5,v)},
a7k(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7k=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7k)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Vk(),$async$a7k)
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
try{s=A.c4.ca(0,A.cE.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Sa.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dU(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.Vl(p),$async$a7k)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7k,v)},
i0t(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a4<n,@>>")
w=B.B(new B.K(d,new C.fAS(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fB_(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.af())
return A.R.ao(w,null)}return A.R.ao(C.i0t(d==null?B.a([],x.D):d,f,g),null)},
fAZ(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fAZ=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7l(h,d,e,f,g),$async$fAZ)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yg(e==null?"":e)
u=new B.aEr(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.k7.gcv().aJ(t)
u=new B.aEr(C.yg(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAZ,v)},
fWH(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
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
i0x(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fWH(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b0(v,u))
if(C.fWH(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b0(v,s))
if(C.fWH(t))return t}}return null},
fAO(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c4.ca(0,A.cE.aJ(J.mC(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hKj(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ags(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ags=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aq5(t[1]),$async$ags)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAO(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yg(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aq5(r),$async$ags)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAO(s)
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
return B.b(C.a7k(t[1]),$async$ags)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAO(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fAO(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ags,v)},
hKj(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sa.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fWE(C.Vg(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cD(t,new C.f9b(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
fWE(d,e){var w,v,u,t,s,r,q,p,o=d.af()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gS(u)
if(t.b(s)){r=Date.now()
q=$.iX
$.iX=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vg(B.a1(o,x.N,x.z))
if(e&&C.ks(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bP(144e8).ac()
return p},
bB0(){var w=0,v=B.j(x.aT),u,t,s
var $async$bB0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gb(),$async$bB0)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ags(s),$async$bB0)
case 4:t=e
u=J.cl(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bB0,v)},
fJw(d){var w=0,v=B.j(x.T),u,t
var $async$fJw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.VU,!0,"Dismiss",d,new C.fJx(),new C.fJy(),A.ET,!0,x.N),$async$fJw)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eO_)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJw,v)},
i4i(d,e,f,g,h){return B.a6(d,!1).c8(B.e8(new C.fJz(h,e,g,f),!0,null,x.H))},
fAM:function fAM(d){this.a=d},
ccE:function ccE(d){this.a=d},
fAS:function fAS(){},
f9b:function f9b(d){this.a=d},
fJx:function fJx(){},
fJy:function fJy(){},
fJz:function fJz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vi:function Vi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDc:function aDc(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
et4:function et4(){},
et0:function et0(d,e){this.a=d
this.b=e},
et3:function et3(d,e){this.a=d
this.b=e},
et1:function et1(d){this.a=d},
et2:function et2(d){this.a=d},
et5:function et5(d){this.a=d},
et6:function et6(d){this.a=d},
et9:function et9(d){this.a=d},
eta:function eta(d){this.a=d},
et8:function et8(d){this.a=d},
etb:function etb(d){this.a=d},
et7:function et7(d){this.a=d},
etc:function etc(d,e){this.a=d
this.b=e},
et_:function et_(d,e){this.a=d
this.b=e},
esZ:function esZ(d,e){this.a=d
this.b=e},
Vj:function Vj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bj_:function bj_(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
etd:function etd(d,e){this.a=d
this.b=e},
ete:function ete(d){this.a=d},
etf:function etf(){},
etg:function etg(d){this.a=d},
eth:function eth(d,e){this.a=d
this.b=e},
aD9:function aD9(d){this.a=d},
aDa:function aDa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
emI:function emI(d){this.a=d},
emH:function emH(){},
emJ:function emJ(d){this.a=d},
emE:function emE(d){this.a=d},
emD:function emD(){},
emF:function emF(d){this.a=d},
emG:function emG(d){this.a=d},
btd:function btd(){},
aq7:function aq7(d){this.a=d},
aDd:function aDd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
etj:function etj(d){this.a=d},
eti:function eti(d){this.a=d},
hPs(){var w,v,u,t
for(v=0;v<4;++v){w=D.cZt[v]
try{if(Ac.bVi(w)){u=w
return u}}catch(t){}}return null},
Qx(d,e){return C.hYe(d,e)},
hYe(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Qx=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hPs()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.o2?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.G(b4,2)
c2.b=b5-A.o.G(b5,2)
b6=B.qn(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eO(b8,b9)
n=new B.eO("Getting ready\u2026",b9)
m=new B.eO(0,b9)
l=B.of(new C.fv6(c2,b7,o),!1,!1)
b6.lK(0,l)
b9=x.H
B.ca(null,A.db,!1,null,new C.fv7(n,m),c6,null,!0,!0,b9)
k=new C.fvb(b7)
j=new C.fvc()
i=null
t=4
b3=c2.a
h=Aj.aR_(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fM7(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aVS(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hd.y0(i,"dataavailable",new C.fv8(e))
d=new B.bW(new B.bg($.bx,x.dT),x.b2)
A.Hd.y0(i,"stop",new C.fv9(d))
J.ah1(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Qx)
case 8:w=7
return B.b(c5.$1(d0),$async$Qx)
case 7:a0=d0
J.fM9(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ah1(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ah1(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Qx)
case 15:w=14
return B.b(c5.$1(d0),$async$Qx)
case 14:a0=d0
case 13:J.fM9(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ah1(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bP(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcw()
else b3=!0
if(!b3){w=17
break}J.fM9(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fw,null,b9),$async$Qx)
case 18:w=16
break
case 17:J.ah1(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ah1(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nM),$async$Qx)
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
J.KM(b0)
J.lR(b0)
B.bN(A.nL,new C.fva(a7),b9)
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
J.lR(l)
if(p.pl())p.eJ()
c3=o
b3=$.aw()
c3.shS(b3)
J.aPz(c3,0)
c3=n
c3.shS(b3)
J.aPz(c3,0)
c3=m
c3.shS(b3)
J.aPz(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qx,v)},
fv6:function fv6(d,e,f){this.a=d
this.b=e
this.c=f},
fv5:function fv5(){},
fv7:function fv7(d,e){this.a=d
this.b=e},
fvb:function fvb(d){this.a=d},
fvc:function fvc(){},
fv8:function fv8(d){this.a=d},
fv9:function fv9(d){this.a=d},
fva:function fva(d){this.a=d},
btp:function btp(d,e,f){this.c=d
this.d=e
this.a=f},
f3x:function f3x(){},
f3y:function f3y(){},
cd0(d){var w=0,v=B.j(x.at),u,t,s
var $async$cd0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqh(d,A.yX),$async$cd0)
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
return B.i($async$cd0,v)},
cd_(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a71:function a71(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biJ:function biJ(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ebd:function ebd(d){this.a=d},
ebb:function ebb(d){this.a=d},
ebc:function ebc(d,e){this.a=d
this.b=e},
a7U:function a7U(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a7V:function a7V(d,e){this.a=d
this.b=e},
b1t:function b1t(){},
cfc:function cfc(){},
cfd:function cfd(){},
cfe:function cfe(d,e,f,g,h,i,j,k,l){var _=this
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
hoB(d){return new C.ahj(d)},
a27:function a27(){},
ahj:function ahj(d){this.a=d},
aPU:function aPU(){},
avA:function avA(d,e){this.d=d
this.b=e
this.a=null},
aRo:function aRo(d){this.b=d
this.a=null},
fqf(d,e){var w=0,v=B.j(x.H)
var $async$fqf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gxd().Li(d,e),$async$fqf)
case 2:B.fDi()
return B.h(null,v)}})
return B.i($async$fqf,v)},
hfg(d,e){return(A.r9[(d^e)&255]^A.o.aA(d,8))>>>0},
fnP(d,e,f,g,h,i){var w=C.hUA(d,A.da,f,null,A.cW,g,h,i)
return w},
hh7(d){var w=F.hhQ(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hwd(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oQ.h(0,w)
if(v!=null)return v
for(u=A.oQ.gdK(A.oQ),u=u.gae(u);u.C();){t=u.gS(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hhf(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<36;++w)v+="- "+D.cZR[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bz9(d,e){return C.hRc(d,e)},
hRc(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bz9=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hM([d],"application/pdf")
n=x.z
q=B.aT1(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cA(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jU(o,"share",[p]),x.H),$async$bz9)
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
return B.i($async$bz9,v)},
fWy(){var w=0,v=B.j(x.y),u,t,s
var $async$fWy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fgf
s=$.byH
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bz9(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWy,v)},
bAw(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bAw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fgf
l=$.byH
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hbU()?3:4
break
case 3:w=5
return B.b(C.bz9(m,k),$async$bAw)
case 5:if(e){u=!0
w=1
break}case 4:r=$.byI
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
J.KM(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bAw)
case 10:J.lR(q)
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
return B.i($async$bAw,v)},
fWp(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fWp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.byI
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ls.us(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fWp,v)},
fWG(d,e){var w=0,v=B.j(x.H),u,t
var $async$fWG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hM([d],"text/html"))
t.toString
u=window
u.toString
A.ls.us(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fWG,v)},
b0q(d,e){var w=0,v=B.j(x.y),u
var $async$b0q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b0s(d,e),$async$b0q)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b0r(d),$async$b0q)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0q,v)}},D,O,H,Am,A8,Y,V,An,G,F,E,Ao,W,Q,Z,A_,Ap,Aq,A9,K,Ar,A0,N,X,Aa,L,Ab,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,AA,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[190]
A5=c[66]
Ai=c[49]
A6=c[155]
Aj=c[57]
U=c[205]
A7=c[52]
Ak=c[131]
Al=c[215]
C=a.updateHolder(c[4],C)
D=c[203]
O=c[89]
H=c[119]
Am=c[36]
A8=c[207]
Y=c[204]
V=c[193]
An=c[111]
G=c[174]
F=c[31]
E=c[206]
Ao=c[96]
W=c[115]
Q=c[133]
Z=c[29]
A_=c[162]
Ap=c[217]
Aq=c[170]
A9=c[136]
K=c[208]
Ar=c[110]
A0=c[60]
N=c[184]
X=c[75]
Aa=c[112]
L=c[143]
Ab=c[101]
As=c[210]
P=c[105]
A1=c[122]
At=c[86]
Au=c[117]
Ac=c[53]
Ad=c[180]
Av=c[35]
Ae=c[73]
Af=c[132]
Ag=c[214]
Aw=c[216]
Ax=c[213]
R=c[67]
Ay=c[211]
I=c[159]
Az=c[171]
AA=c[218]
S=c[47]
T=c[209]
M=c[191]
A2=c[212]
A3=c[99]
A4=c[56]
C.nP.prototype={
uM(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tA(t,v)
return new C.nP(t===0?!1:w,v,t)},
bJF(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CF()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tA(w,u)
return new C.nP(r===0?!1:s,u,r)},
bK9(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CF()
w=o-d
if(w<=0)return p.a?$.fY2():$.CF()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tA(w,u)
q=new C.nP(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1V())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.G(e,16)===0)return r.bJF(v)
u=w+v+1
t=new Uint16Array(u)
C.h8u(r.b,w,e,t)
w=r.a
s=C.tA(u,t)
return new C.nP(s===0?!1:w,t,s)},
mk(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.G(e,16)
if(u===0)return n.bK9(v)
t=w-v
if(t<=0)return n.a?$.fY2():$.CF()
s=n.b
r=new Uint16Array(t)
C.hGg(s,w,e,r)
w=n.a
q=C.tA(t,r)
p=new C.nP(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1V())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1V())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cCX(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7i(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7i(t,e)
if(s===0)return $.CF()
if(r===0)return t.a===e?t:t.uM(0)
w=s+1
v=new Uint16Array(w)
C.hGe(t.b,s,d.b,r,v)
u=C.tA(w,v)
return new C.nP(u===0?!1:e,v,u)},
GR(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CF()
w=d.c
if(w===0)return t.a===e?t:t.uM(0)
v=new Uint16Array(s)
C.b8t(t.b,s,d.b,w,v)
u=C.tA(s,v)
return new C.nP(u===0?!1:e,v,u)},
bwK(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tA(r,u)
return new C.nP(!1,u,s)},
bwJ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tA(u,r)
return new C.nP(!1,r,v)},
bwL(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tA(p,m)
return new C.nP(s!==0,m,s)},
U6(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CF()
w=t.a
if(w===e.a){if(w){w=$.a1V()
return t.GR(w,!0).bwL(e.GR(w,!0),!0).a7i(w,!0)}return t.bwK(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bwJ(v.GR($.a1V(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7i(e,v)
if(C.cCX(u.b,t,e.b,w)>=0)return u.GR(e,v)
return e.GR(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uM(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7i(e,v)
if(C.cCX(u.b,t,e.b,w)>=0)return u.GR(e,v)
return e.GR(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CF()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h8v(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tA(w,t)
return new C.nP(q===0?!1:r,t,q)},
bJE(d){var w,v,u,t
if(this.c<d.c)return $.CF()
this.aQ1(d)
w=$.fRB.c5()-$.awj.c5()
v=C.fRD($.fRA.c5(),$.awj.c5(),$.fRB.c5(),w)
u=C.tA(w,v)
t=new C.nP(!1,v,u)
return this.a!==d.a&&u>0?t.uM(0):t},
cl_(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQ1(d)
w=C.fRD($.fRA.c5(),0,$.awj.c5(),$.awj.c5())
v=C.tA($.awj.c5(),w)
u=new C.nP(!1,w,v)
if($.fRC.c5()>0)u=u.mk(0,$.fRC.c5())
return t.a&&u.c>0?u.uM(0):u},
aQ1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h8r&&d.c===$.h8t&&g.b===$.h8q&&d.b===$.h8s)return
w=d.b
v=d.c
u=16-A.o.gajb(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h8p(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h8p(g.b,f,u,r)}else{r=C.fRD(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fRE(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cCX(r,q,n,m)>=0){k&2&&B.ai(r)
r[q]=1
C.b8t(r,l,n,m,r)}else{k&2&&B.ai(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b8t(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hGf(p,r,i);--o
C.h8v(h,j,0,r,o,s)
if(r[i]<h){m=C.fRE(j,s,o,n)
C.b8t(r,l,n,m,r)
while(--h,r[i]<h)C.b8t(r,l,n,m,r)}--i}$.h8q=g.b
$.h8r=f
$.h8s=w
$.h8t=v
$.fRA.b=r
$.fRB.b=l
$.awj.b=s
$.fRC.b=u},
gX(d){var w,v,u,t=new C.cCY(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cCZ().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nP&&this.aL(0,e)===0},
rW(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uG(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajb(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cD_(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cD0(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l3(A.aG.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uM(0):r
while(v.c>1){u=$.hlx()
if(u.c===0)B.ba(D.b1o)
t=v.cl_(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bJE(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).fW(0)},
$iaQD:1,
$ihF:1}
C.aQ3.prototype={
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
cIM(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcn(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.jX(w,w.length,B.U(w).k("jX<1>"))}}
C.Ra.prototype={
cQN(){var w,v
if(this.as==null)this.baV()
w=this.as
v=w==null?null:w.anS()
return v==null?null:v.eD()},
baV(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.anS().eD()
this.as=new C.bMf(v)}},
gY(d){return this.at}}
C.a34.prototype={
a4(){return"CompressionType."+this.b}}
C.bG8.prototype={
er(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yw[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fB(u,t)&A.yw[d])
s.c=t}return v}}
C.bEv.prototype={
cH3(d,e){var w,v,u,t,s,r=this,q=new C.bG8(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.er(8)!==66||q.er(8)!==90||q.er(8)!==104)return!1
w=r.a=q.er(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cjh(q)
if(t<0)return!1
if(t===0){q.er(8)
q.er(8)
q.er(8)
q.er(8)
s=r.cjk(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.er(8)
q.er(8)
q.er(8)
q.er(8)
return!0}}return!0},
cjh(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.er(8)
if(t!==D.de6[u])v=!1
if(t!==D.cTk[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cjk(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.er(1),d2=((d3.er(8)<<8|d3.er(8))<<8|d3.er(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.er(1)
v.$flags&2&&B.ai(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.er(1)
v.$flags&2&&B.ai(v)
v[t+s]=u}c9.bZT()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.er(3)
if(q<2||q>6)return-1
v=d3.er(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.er(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.ai(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.ai(u)
u[w]=l}c9.fr=B.c2(6,$.hjE(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.er(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.er(1)===0)break
i=d3.er(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ai(v)
v[w]=i}}v=$.hjD()
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
if(f<h)h=f}c9.bVr(v[j],u[j],o[j],n[j],h,g,r)
v=c9.as
v.$flags&2&&B.ai(v)
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
a3=c9.asF(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asF(d3)}while(a3===0||a3===1);++a5
v=c9.e
v===$&&B.c()
a7=v[c9.f[c9.r[0]]]
v=c9.at
u=v[a7]
v.$flags&2&&B.ai(v)
v[a7]=u+a5
for(v=c9.b;a5>0;){if(a4>=d)return-1
v===$&&B.c()
v.$flags&2&&B.ai(v)
v[a4]=a7;++a4;--a5}continue}else{if(a4>=d)return-1
a8=a3-1
v=c9.r
u=c9.f
if(a8<16){a9=v[0]
a7=u[a9+a8]
for(v=u.$flags|0;a8>3;){b0=a9+a8
o=b0-1
n=u[o]
v&2&&B.ai(u)
u[b0]=n
n=b0-2
u[o]=u[n]
o=b0-3
u[n]=u[o]
u[o]=u[b0-4]
a8-=4}while(a8>0){o=a9+a8
n=u[o-1]
v&2&&B.ai(u)
u[o]=n;--a8}v&2&&B.ai(u)
u[a9]=a7}else{b1=A.o.an(a8,16)
b2=A.o.G(a8,16)
a9=v[b1]+b2
a7=u[a9]
for(o=u.$flags|0;n=v[b1],a9>n;a9=b3){b3=a9-1
n=u[b3]
o&2&&B.ai(u)
u[a9]=n}v.$flags&2&&B.ai(v)
v[b1]=n+1
while(b1>0){v[b1]=v[b1]-1
n=v[b1];--b1
b4=u[v[b1]+16-1]
o&2&&B.ai(u)
u[n]=b4}v[0]=v[0]-1
n=v[0]
o&2&&B.ai(u)
u[n]=a7
if(v[0]===0)for(a0=4095,a1=15;a1>=0;--a1){for(a2=15;a2>=0;--a2){u[a0]=u[v[a1]+a2];--a0}v[a1]=a0+1}}v=c9.at
u=c9.e
u===$&&B.c()
o=u[a7]
n=v[o]
v.$flags&2&&B.ai(v)
v[o]=n+1
n=c9.b
n===$&&B.c()
u=u[a7]
n.$flags&2&&B.ai(n)
n[a4]=u;++a4
a3=c9.asF(d3)
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
u.$flags&2&&B.ai(u)
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
d4.bF(c3)
c1=(c1<<8^D.GI[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GK[b9];++b9
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
if(b8===0){b8=D.GK[b9];++b9
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
if(b8===0){b8=D.GK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GK[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bF(c3)
c1=c1<<8^D.GI[c1>>>24&255^v];--c2}d4.bF(c3)
c1=(c1<<8^D.GI[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bF(c7)
c1=(c1<<8^D.GI[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bF(c7)
c1=(c1<<8^D.GI[c1>>>24&255^c7&255])>>>0
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
asF(d){var w,v,u,t,s=this,r=s.ay
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
t=d.er(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.er(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bVr(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
for(w=f.$flags|0,v=h,u=0;v<=i;++v)for(t=0;t<j;++t)if(g[t]===v){w&2&&B.ai(f)
f[u]=t;++u}for(w=e.$flags|0,v=0;v<23;++v){w&2&&B.ai(e)
e[v]=0}for(v=0;v<j;++v){s=g[v]+1
r=e[s]
w&2&&B.ai(e)
e[s]=r+1}for(v=1;v<23;++v){s=e[v]
r=e[v-1]
w&2&&B.ai(e)
e[v]=s+r}for(s=d.$flags|0,v=0;v<23;++v){s&2&&B.ai(d)
d[v]=0}for(v=h,q=0;v<=i;v=p){p=v+1
q+=e[p]-e[v]
s&2&&B.ai(d)
d[v]=q-1
q=q<<1>>>0}for(v=h+1;v<=i;++v){s=d[v-1]
r=e[v]
w&2&&B.ai(e)
e[v]=(s+1<<1>>>0)-r}},
bZT(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ai(v)
v[u]=w}}}}
C.cv7.prototype={
aGt(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bMQ(e)
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
if(w>0)e.aGw(w,!1)
r.cjF(e)
q=r.r
v=r.f
u=e.aJw(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b79()
s.cQM(0,u,e,f)
q.push(s)}},
cjF(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6W(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rK()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rK()
d.aU()
d.aU()
d.aK()
d.aK()
d.rK()
d.rK()
u=d.rK()
t=d.rK()
this.f=u
this.r=t
d.c=s},
bMQ(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6W(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akR(A.hT)
o.aKN(r.eD(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cv5.prototype={}
C.avY.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cv8.prototype={
aGt(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCp.h(0,e.aU())
o.c=w==null?D.L1:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amG(v)
o.y=e.hb(u).eD()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aSu:D.Dd
o.ay=f
o.Q=e.hb(t)
if(o.at!==D.Dd&&u>2){w=o.y
w.toString
s=B.r3(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amG(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aSv
o.ax=new C.cv5(r,q)
w=D.aCp.h(0,q)
o.c=w==null?D.L1:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkp().length},
anS(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r3(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.Dd)if(p.gM(0)<=0)r.at=D.Dd
else{if(w===D.aSu){p=r.bHZ(p)
r.Q=p}else if(w===D.aSv){p=r.bHC(p)
r.Q=p}r.at=D.Dd}w=r.c
if(w===D.af9){v=p.c
u=B.dg()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pe.B8(p.eD(),!0,!1)
else{t=B.a7J(A.hT,r.w)
p=r.Q
p.toString
A.pe.a39(p,t,!0,!1)
u.b=t.Go()}r.Q.c=v
return B.r3(u.bf(),A.hT,q,q)}else if(w===D.afa){s=B.a7J(A.hT,32768)
p=r.Q
v=p.c
C.hoM().cH3(p,s)
u=s.Go()
r.Q.c=v
return B.r3(u,A.hT,q,q)}else return B.r3(p.eD(),A.hT,q,q)},
bkp(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eD()},
u(d){return this.x},
b6N(d){var w=this.ch,v=C.Jd(C.hfg(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.U6(0,C.Jd(255)))
w[1]=v
w[1]=v.aF(0,C.Jd(134775813)).ad(0,C.Jd(1)).U6(0,C.Jd(4294967295))
w[2]=C.Jd(C.hfg(w[2].N(0),w[1].mk(0,24).N(0)))},
aPr(){var w=(this.ch[2].U6(0,C.Jd(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bHZ(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r3(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b6N(u[v.c++]^r.aPr())}t=r.Q.eD()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPr()
r.b6N(s)
u&2&&B.ai(t)
t[w]=s}return B.r3(t,A.hT,q,q)},
bHC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hb(8).eD()
v=16}else if(k===2){w=d.hb(12).eD()
v=24}else{w=d.hb(16).eD()
v=32}u=d.hb(2).eD()
t=d.hb(d.gM(0)-10)
s=d.hb(10)
r=t.eD()
k=this.ay
k.toString
q=C.hFW(k,w,v)
p=new Uint8Array(B.ce(A.aG.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aG.dq(q,v,k)))
if(!C.h7U(A.aG.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bD5(k,new Uint8Array(16),p)
k=x.S
m=J.a4u(0,k)
m=n.r=new C.cf1(m)
m.c=!0
m.b=m.bjI(!0,new C.arF(p))
if(m.c)m.d=B.bl(D.o_,!0,k)
else m.d=B.bl(D.yp,!0,k)
l=C.h67(C.h69(),64)
l.bdf(new C.arF(o))
n.w=l
n.cQk(r,0,r.length)
k=s.eD()
m=n.x
m===$&&B.c()
if(!C.h7U(k,m))throw B.V(B.fl("macs don't match"))
return B.r3(r,A.hT,null,null)}}
C.b79.prototype={
cQM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amG(w)
if(v>0){t=e.hb(v).eD()
n.ax=t
if(v>=4){s=B.r3(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6W(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rK()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rK()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rK()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amG(u)
f.c=n.as
t=new C.cv8(D.L1,n,D.Dd,B.a([C.Jd(0),C.Jd(0),C.Jd(0)],x.f3))
n.ch=t
t.aGt(0,f,g)},
u(d){return this.at}}
C.cv6.prototype={
cH4(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cv7(B.a([],x.fT))
this.a=g
g.aGt(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQ3(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Ra(o,A.o.an(Date.now(),1000),0):C.fZp(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fZp(o,q.w,q)
if(k.as==null)k.baV()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akR(A.hT)
j.aKN(o,A.hT,h,h)}i=j==null?h:j.eD()
if(i!=null)new B.FA(!1).D3(i,0,h,!0)}}return v}}
C.bD5.prototype={
cQk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.C2(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hov(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bLe(u,0,w,0,o)}else{o===$&&B.c()
q.bI2(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ai(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KC(w,0)
m.x=A.aG.dq(m.x,0,10)
w=m.w
l=w.a
l.lu(0)
w=w.d
w===$&&B.c()
l.C2(0,w,0,w.length)
return f}}
C.cf6.prototype={}
C.cfa.prototype={}
C.cf4.prototype={}
C.arF.prototype={}
C.cf9.prototype={
cHj(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e3(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdf(new C.arF(A.aG.fJ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bMc(n.a,n.b,t,s,r)
r+=v}A.aG.hd(f,g,g+w,s)
return o.a.c},
bMc(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.C2(0,d,0,d.length)
v.C2(0,f,0,4)
u=m.c
u===$&&B.c()
w.KC(u,0)
u=m.c
A.aG.hd(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.C2(0,s,0,s.length)
w.KC(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ai(g)
g[p]=o^n}}}}
C.cf5.prototype={}
C.cf3.prototype={}
C.arG.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arG){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rW(d,e){var w=this.a
w===$&&B.c()
w=A.o.rW(w,e.gbVI())
if(!w)e.gbVI()
return w},
aIY(d,e){this.a=0
this.b=d},
t_(d){return this.aIY(d,null)},
aJz(d){var w,v=this,u=v.b
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
w.aZF(v,u)
u=w.b
u===$&&B.c()
w.aZF(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aZF(d,e){var w,v=A.o.fQ(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cf8.prototype={
lu(d){var w,v=this
v.a.t_(0)
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
anm(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ai(u)
u[t]=d&255
if(w===4){v.b09(u,0)
v.c=0}v.a.aJz(1)},
C2(d,e,f,g){var w=this.ci8(e,f,g)
f+=w
g-=w
w=this.ci9(e,f,g)
this.ci_(e,f+w,g-w)},
KC(d,e){var w,v=this,u=C.h68(v.a),t=u.a
t===$&&B.c()
t=C.fXa(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fXa(w,3)
v.ci3()
v.ci0(u)
v.arv()
v.ccd(d,e)
v.lu(0)
return 20},
b09(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nZ(A.aG.gaM(d),d.byteOffset,d.length).getUint32(e,A.i4===w.d)
if(w.w===16)w.arv()},
arv(){this.cQj()
this.w=0
A.d.fZ(this.r,0,16,0)},
ci_(d,e,f){while(f>0){this.anm(d[e]);++e;--f}},
ci9(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b09(d,e)
e+=4
f-=4
w.aJz(4)
v+=4}return v},
ci8(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anm(d[e]);++e;--f;++v}return v},
ci3(){this.anm(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anm(0)}},
ci0(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arv()
u=v.d
switch(u){case A.i4:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DE:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
ccd(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i4===this.d,s=0;s<w;++s){r=v[s]
q=J.nZ(A.aG.gaM(d),d.byteOffset,u)
q.$flags&2&&B.ai(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cfb.prototype={
cQj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pZ[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pZ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pZ[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pZ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pZ[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pZ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pZ[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pZ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pZ[30]
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
C.cf7.prototype={
bdf(d){var w,v,u,t,s=this,r=s.a
r.lu(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.C2(0,w,0,v)
w=s.d
w===$&&B.c()
r.KC(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hd(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.fZ(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hd(w,0,u,s.d)
s.b7W(s.d,u,54)
s.b7W(s.e,u,92)
u=s.d
r.C2(0,u,0,u.length)},
KC(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KC(s,w)
s=u.e
t.C2(0,s,0,s.length)
v=t.KC(d,e)
s=u.e
A.aG.fZ(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.C2(0,s,0,s.length)
return v},
b7W(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ai(d)
d[v]=u^f}}}
C.cf2.prototype={}
C.cf1.prototype={
a1v(d){return(D.o_[d&255]&255|(D.o_[d>>>8&255]&255)<<8|(D.o_[d>>>16&255]&255)<<16|D.o_[d>>>24&255]<<24)>>>0},
bjI(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
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
for(r=1;r<=10;++r){p=(p^f.a1v((m>>>8|(m&$.pZ[24])<<24)>>>0)^D.cvO[r-1])>>>0
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
p=(p^f.a1v((k>>>8|(k&$.pZ[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1v((k>>>8|(k&$.pZ[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a1v((g>>>8|(g&$.pZ[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1v(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bLe(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nZ(A.aG.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e6[a8&255]
u=D.e6[a9>>>8&255]
t=$.pZ[8]
s=D.e6[b0>>>16&255]
r=$.pZ[16]
q=D.e6[b1>>>24&255]
p=$.pZ[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e6[a9&255]
s=D.e6[b0>>>8&255]
u=D.e6[b1>>>16&255]
v=D.e6[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e6[b0&255]
u=D.e6[b1>>>8&255]
s=D.e6[a8>>>16&255]
q=D.e6[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e6[b1&255]
a8=D.e6[a8>>>8&255]
a9=D.e6[a9>>>16&255]
b0=D.e6[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e6[n&255]
b0=D.e6[m>>>8&255]
a9=D.e6[l>>>16&255]
a8=D.e6[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e6[m&255]
b0=D.e6[l>>>8&255]
o=D.e6[b1>>>16&255]
s=D.e6[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e6[l&255]
o=D.e6[b1>>>8&255]
b0=D.e6[n>>>16&255]
u=D.e6[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e6[b1&255]
o=D.e6[n>>>8&255]
s=D.e6[m>>>16&255]
v=D.e6[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e6[a8&255]^C.nm(D.e6[a9>>>8&255],24)^C.nm(D.e6[b0>>>16&255],16)^C.nm(D.e6[b1>>>24&255],8)^b6[w][0]
m=D.e6[a9&255]^C.nm(D.e6[b0>>>8&255],24)^C.nm(D.e6[b1>>>16&255],16)^C.nm(D.e6[a8>>>24&255],8)^b6[w][1]
l=D.e6[b0&255]^C.nm(D.e6[b1>>>8&255],24)^C.nm(D.e6[a8>>>16&255],16)^C.nm(D.e6[a9>>>24&255],8)^b6[w][2]
b1=D.e6[b1&255]^C.nm(D.e6[a8>>>8&255],24)^C.nm(D.e6[a9>>>16&255],16)^C.nm(D.e6[b0>>>24&255],8)^b6[w][3]
a7=D.o_[n&255]
b0=D.o_[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o_[l>>>8&255]
a9=D.o_[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o_[b1>>>8&255]
h=D.o_[n>>>16&255]
g=D.o_[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o_[l>>>24&255]
s=s[3]
a1=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
a1.$flags&2&&B.ai(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
r.$flags&2&&B.ai(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
k.$flags&2&&B.ai(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
f.$flags&2&&B.ai(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bI2(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e5[a6&255]
v=D.e5[b0>>>8&255]
u=$.pZ[8]
t=D.e5[a5>>>16&255]
s=$.pZ[16]
r=D.e5[a4>>>24&255]
q=$.pZ[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e5[a4&255]
t=D.e5[a6>>>8&255]
v=D.e5[b0>>>16&255]
w=D.e5[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e5[a5&255]
v=D.e5[a4>>>8&255]
t=D.e5[a6>>>16&255]
r=D.e5[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e5[b0&255]
a5=D.e5[a5>>>8&255]
a4=D.e5[a4>>>16&255]
a6=D.e5[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e5[p&255]
a6=D.e5[b0>>>8&255]
a4=D.e5[n>>>16&255]
a5=D.e5[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e5[o&255]
a4=D.e5[p>>>8&255]
a7=D.e5[b0>>>16&255]
t=D.e5[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e5[n&255]
a7=D.e5[o>>>8&255]
a5=D.e5[p>>>16&255]
v=D.e5[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e5[b0&255]
a7=D.e5[n>>>8&255]
t=D.e5[o>>>16&255]
w=D.e5[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e5[a6&255]^C.nm(D.e5[b0>>>8&255],24)^C.nm(D.e5[a5>>>16&255],16)^C.nm(D.e5[a4>>>24&255],8)^b5[a9][0]
o=D.e5[a4&255]^C.nm(D.e5[a6>>>8&255],24)^C.nm(D.e5[b0>>>16&255],16)^C.nm(D.e5[a5>>>24&255],8)^b5[a9][1]
n=D.e5[a5&255]^C.nm(D.e5[a4>>>8&255],24)^C.nm(D.e5[a6>>>16&255],16)^C.nm(D.e5[b0>>>24&255],8)^b5[a9][2]
b0=D.e5[b0&255]^C.nm(D.e5[a5>>>8&255],24)^C.nm(D.e5[a4>>>16&255],16)^C.nm(D.e5[a6>>>24&255],8)^b5[a9][3]
a4=D.yp[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yp[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yp[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yp[o>>>8&255]
i=D.yp[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yp[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nZ(A.aG.gaM(b3),b3.byteOffset,16)
d.$flags&2&&B.ai(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bMe.prototype={}
C.bMf.prototype={
gM(d){var w=this.a.length
return w},
anS(){return B.r3(this.a,A.hT,null,null)}}
C.b8I.prototype={
uI(d){return C.hJ8(d)}}
C.cp4.prototype={
Md(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9j(v,t+20,u+16,t,u,B.tJ(d.x))},
nf(d){return!1}}
C.bN7.prototype={
cBo(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bN8(),x.E))},
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
return B.b(p.fqf(f,r),$async$mA)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mA,v)}}
C.auF.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7H.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7H&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.ww(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fwK)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aUu.prototype={
c0(d){var w=new C.azv(!0,this.e,null,new B.de(),B.ci())
w.bZ()
w.scC(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syl(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aF5()}}}
C.azv.prototype={
syl(d,e){return},
gpi(){var w=this.ab$
return w!=null},
gl_(){var w=this.ab$
return w!=null},
M2(d){var w=d==null?B.h0P(null):d
w.sa43(this.ak)
return w}}
C.a08.prototype={
U(){return new C.aHT(B.aX(x.N))},
cOv(d){return this.d.$1(d)},
cMi(){return this.e.$0()}}
C.aHT.prototype={
a_(){this.a1()
this.OA()},
OA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cMi(),$async$OA)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f2_(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OA,v)},
Yh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f23(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f24(t))
w=3
return B.b(C.amA(p),$async$Yh)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f25(t,s,p))
w=4
return B.b(t.OA(),$async$Yh)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yh,v)},
a0t(d){return this.cmd(d)},
cmd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f20(t))
s=J.q(d,"id")
w=3
return B.b(C.bXN(J.k(s==null?"":s)),$async$a0t)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f21(t))
w=1
break}q=C.fWE(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cOv(B.a([q],x.D)),$async$a0t)
case 4:if(t.c==null){w=1
break}t.m(new C.f22(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0t,v)},
Oz(d,e){return this.bIr(0,e)},
bIr(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oz=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f1V(q),r,null,!0,!0,x.y),$async$Oz)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f1W(t))
s=s.h(e,"id")
w=4
return B.b(C.amz(J.k(s==null?"":s)),$async$Oz)
case 4:if(t.c==null){w=1
break}t.m(new C.f1X(t))
w=5
return B.b(t.OA(),$async$Oz)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oz,v)},
cAr(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ib[B.bG(v)-1]+" "+B.bQ(v)},
aPi(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NA,A.n),w,e,w,w,w,w,w,e)},
aPh(d){return this.aPi(d,44)},
b59(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NA:u,r=B.m(14),q=B.W(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Iq,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Iq,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.buD,u,u,u)],p))}return B.D(B.aE(A.c5,B.dh(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.v4,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f29(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cg6(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.WN,n=B.m(18),m=p?A.d6:A.dp
m=B.I(m,A.q,p?1.8:1)
w=this.aPh(A.pP)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aPt,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.cX,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aPv,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NA:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bKm:q
return B.aE(q,B.dh(q,B.A(B.a([w,A.bf,t,B.dh(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fF,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fF,q,q,A.dc,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1Z(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cnL(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cAr(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dp,A.q,1)
v=r.aPh(A.MN)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aPt,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.cX,B.d(p+" slides"+t,q,q,q,q,q,q,D.aPv,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b1O(A.hz,A.bt,"Bring it back",r.r?q:new C.f26(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b1O(A.e4,A.ci,"Delete",r.r?q:new C.f27(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.WN,q,w,o,q,q,A.n),q,q,q,A.dc,D.bpa,q,q,q)},
b1O(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aE(w,B.p(w,B.W(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
arL(d,e,f){var w=null
return new B.C(D.boe,B.v(B.a([B.W(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f3T,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eXu,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bT,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPi(A.yc,46),A.bf,D.bvt],t)
if(j.r)s.push(D.e4j)
s.push(B.aH(i,i,i,i,A.Nl,i,i,i,new C.f2c(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dp,A.q,1)
o=J.a5(h)
q=B.a([A.S,u,new B.C(D.brJ,s,i),B.p(i,B.A(B.a([j.b59(0,A.xM,"Save",j.a.c.length),j.b59(1,A.N1,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bqN,A.eo,i,i,i)],t)
if(j.x!=null){u=(j.y?A.ci:A.bt).j(0.12)
s=B.m(14)
r=B.I((j.y?A.ci:A.bt).j(0.4),A.q,1)
p=j.y
n=p?A.MO:A.ee
n=B.W(n,p?A.ci:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a6H,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bqJ,A.ix,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f0_,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f3_,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f2d(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.arL(A.pP,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cg6(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e3S)
else if(j.e==null)s.push(j.arL(A.ajP,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.arL(A.oz,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cnL(r.gS(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cj,B.cB(u,i,Y.agW,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc1m()
p=s?i:D.NA
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cw,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xM,m?A.j9:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.brl,B.aE(i,B.dh(i,B.A(B.a([k,A.a6a,new B.dq(1,A.cj,B.f3(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j9:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bn(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aZm,i,i,i,i,i,i,i,i)}}
C.oe.prototype={
af(){return B.F(["id",this.a,"doc",this.b.af(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.XW.prototype={
U(){return new C.awv(B.a([],x.k),B.f7(null,x.H))},
gdX(){return this.c}}
C.awv.prototype={
a_(){this.a1()
this.OI()},
OI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a16(t.a.c),$async$OI)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cEl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OI,v)},
ctO(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q6(t.d,new C.cEo(d))
v=w<0
if(v&&C.hGi(d))return t.f
u=t.d
if(v)J.po(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fNo(new C.cEp(t),v)
return t.f=t.f.bz(new C.cEq(t,d),v).eU(new C.cEr())},
Ib(d,e,f){return this.c9L(0,e,f)},
aWP(d,e){return this.Ib(0,e,!1)},
c9L(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ib=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).c8(B.e8(new C.cEk(t,e),!1,null,x.H)),$async$Ib)
case 3:w=4
return B.b(t.f,$async$Ib)
case 4:w=5
return B.b(t.OI(),$async$Ib)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ib,v)},
aW5(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dqt:d
this.Ib(0,new C.oe(w,v,new B.S(Date.now(),0,!1)),!0)},
c0S(){return this.aW5(null)},
acs(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.cEs(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acs)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aW5(s)
case 1:return B.h(u,v)}})
return B.i($async$acs,v)},
Ia(d,e){return this.bIj(0,e)},
bIj(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ia=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cEf(e),s,null,!0,!0,x.y),$async$Ia)
case 3:if(g!==!0){w=1
break}t.m(new C.cEg(t,e))
w=4
return B.b(t.f,$async$Ia)
case 4:w=5
return B.b(C.afq(t.a.c,e.a),$async$Ia)
case 5:w=6
return B.b(t.OI(),$async$Ia)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ia,v)},
CM(d){return this.bAx(d)},
bAx(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.cEb(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CM)
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
return B.b(t.aWP(0,d),$async$CM)
case 9:w=5
break
case 7:w=10
return B.b(F.fXc(r,d.b,null),$async$CM)
case 10:w=5
break
case 8:w=11
return B.b(t.Ia(0,d),$async$CM)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CM,v)},
bVF(){var w,v,u=null,t=[D.dqw,D.dqu,D.dqv],s=new C.cEi(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d9.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aW(999,999)
n.push(B.p(u,new B.x(D.daX[w],u,A.ob,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bq(v,v,v,v),u,u,A.n),u,u,u,u,A.nS,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.fsg,A.O,B.bY(A.bz,n,A.br,6,6),A.aP,B.aE(u,B.p(u,D.eGC,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahj,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cEh(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bSh,A.n),u,u,u,u,D.brT,u,u,u)},
bAv(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cw,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b_,A.r,B.a([B.f3(A.A,F.an7(d.b),A.f,A.bQ),D.e9M,B.ao(v,B.aE(v,B.p(v,D.bL8,A.f,v,v,D.b_h,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cE6(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eUT,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f0a,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cE7(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cE8(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.C(H.afQ,B.hp(B.aE(s,B.p(s,A.amz,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.vE,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc27(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mU,s,s,s,!0,s,s,s,s,s,D.fsk,s,s,s,1,s,!0)
if(t.e)r=D.b2F
else{w=t.bVF()
v=B.a([D.fed,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eUk,s,s,s),A.f,s,s,new B.o(D.b7i,s,s,u,s,s,A.n),s,s,s,s,A.xu,s,s,s))}r=B.a([new B.nM(A5.XU,new B.m3(w,s),s),new B.nM(D.brf,new B.m3(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cl(t.d))r.push(D.eMD)
else r.push(new B.nM(D.bqL,B.Ol(new B.oj(new C.cEt(t),J.ad(t.d),!0,!0,!0,0,B.rK(),s),D.b1X),s))
r=B.vj(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b66,r,s,!1,!1,s,s)}}
C.XU.prototype={
U(){return new C.awr(B.a([],x.bx))},
Tn(d){return this.d.$1(d)}}
C.aDN.prototype={}
C.awr.prototype={
aZH(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b3,A.aN),w),u=this.gaWO()
v.aN(0,u)
w=new B.ar(new B.bb(e,A.b3,A.aN),w)
w.aN(0,u)
return new C.aDN(v,w,f)},
DC(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a8(0)
v.x=B.cM(A.pE,new C.cDA(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b3,A.aN),v)
t=m.gaWO()
u.aN(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ar(new B.bb(w.b,A.b3,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ar(new B.bb(w.c,A.b3,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b3,A.aN),v)
o.aN(0,t)
n=new B.ar(new B.bb(p.b,A.b3,A.aN),v)
n.aN(0,t)
r.push(new C.aDN(o,n,p.c))}if(r.length===0)r.push(m.aZH("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a8(0)
if(r.y){r.a.c.b=r.goU()
q=r.a
q.Tn(q.c)}q=r.d
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
t.push(new F.mn(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.r8(n,w,v,t,u)},
Ar(){var w=0,v=B.j(x.H),u=this,t
var $async$Ar=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a8(0)
u.y=!1
u.a.c.b=u.goU()
t=u.a
w=2
return B.b(t.Tn(t.c),$async$Ar)
case 2:return B.h(null,v)}})
return B.i($async$Ar,v)},
c25(){this.m(new C.cDz(this))
this.DC()},
aVN(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cDC(w,d,v))
w.DC()},
c26(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cDK())
this.DC()
$.aU.x1$.push(new C.cDL(w))},
PT(d){return this.cfX(d)},
cfX(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(80,1400,A.eG),$async$PT)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$PT)
case 8:p=f
o=q.b.toLowerCase()
n=J.agX(o,".png")?"image/png":"image/jpeg"
r.m(new C.cDD(d,n,p))
r.DC()
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
return B.i($async$PT,v)},
xl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hiT(r,t.goU()),$async$xl)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cDB(t,s))
t.DC()
case 1:return B.h(u,v)}})
return B.i($async$xl,v)},
cge(d){var w,v=this,u=null,t=F.fun(d.c)
if(t==null)return new B.bH(A.a3,u,u,B.hc(D.bEv,D.fgD,new C.cDF(v,d),u),u)
w=x.p
return new B.C(A.cH,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cl,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b1P(A.kN,new C.cDG(v,d)),A.bp,v.b1P(A.cA,new C.cDH(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b1P(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.C(A.hw,B.W(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Ic(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ic=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Ar(),$async$Ic)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fXc(s,t.goU(),new C.cDJ(t)),$async$Ic)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ic,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.C(A.qP,B.hc(D.bJ7,D.fmy,n.gavp(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.amy,m,m,m,new C.cDM(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.W_,m,1,m,m,m,!1,m,!1,E.mU,m,m,m,!0,m,m,m,m,m,D.fhu,m,m,m,1,m,!0),j=Av.aTc(N.l6,A.c,Ae.UT,A.nW,D.fif,n.gc24()),i=B.m(18),h=n.gavo(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f3(A.A,F.an7(n.goU()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eB,B.D(B.v(B.a([D.ftO,A.at,B.d(F.fVI(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f5C,m,m,m),A.S,B.dp(E.alQ,E.aQe,h,B.bk(A.d9,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.W_,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oa,!0,A.a4,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.O,w,A.O,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aW(16,16)
u=new B.aA(N.l6.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bHS,m,m,m,v===0?m:new C.cDN(n,v),m,m,m,m,"Move up",A.c8)
r=i.length
q=B.aH(m,m,m,m,D.bO5,m,m,m,v===r-1?m:new C.cDO(n,v),m,m,m,m,"Move down",A.c8)
r=r===1?m:new C.cDP(n,v)
p=new B.aW(12,12)
o=new B.aW(12,12)
g.push(B.p(m,B.v(B.a([new B.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f69,m,m,m,m,m,m,m,m,m),A.b4,s,q,B.aH(m,m,m,m,B.W(A.e4,A.os,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c8)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a4,m,A.am,m,m,m,m),A.an,n.cge(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mU,m,new B.bP(u,u,u,u),new B.bq(w,w,w,w),m,m,A.n),m,m,new C.a7H(h),A.e3,D.bpp,m,m,m))}return B.og(!0,B.c8(k,E.ae_,B.cB(g,m,D.bpR,m,m,A.ah,!1),m,!1,!1,j,m),new C.cDQ(n),x.C)}}
C.awt.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.ci:E.mU,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d9.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aOQ,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.ape.prototype={
U(){return new C.aCz()}}
C.aCz.prototype={
a_(){this.a1()
this.YV()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a0i()},
a0i(){var w=0,v=B.j(x.H),u=this,t
var $async$a0i=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0i)
case 2:u.d=null
if(u.c!=null)u.m(new C.e61(u))
w=3
return B.b(u.YV(),$async$a0i)
case 3:return B.h(null,v)}})
return B.i($async$a0i,v)},
YV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.Xw(B.cw(n,0,null),new B.OJ(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.i5(0).cM(0,A.pA),$async$YV)
case 7:if(r.c==null){w=1
break}r.d.t1(!1)
r.m(new C.e6_(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e60(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YV,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c4E(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h1(0)
w.m(new C.e62(w))}else{v.pC(0)
w.m(new C.e63(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j5.j(0.92),D.K9.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.W(A.pS,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.W(A.al7,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b3u
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f3(A.A,new B.a7(r,q,new B.zK(s,o),o),A.r,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.W(A.iT,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b_,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc4D(),o,o,o,o,o,o,!1,A.a8)}}
C.xe.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.ji.prototype={}
C.acs.prototype={
B(d){return B.oJ(new C.dW9(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.abS.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j5.j(t?0.35:0.4),A.q,1),p=t?D.KD:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cw,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],o)
w=this.c
o=B.D(B.p(u,new B.fG(0.5625,C.hYz(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ahN,u,u,u,u),1)
m=D.j5.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j5,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cX,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bdb,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.aA(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ag5,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xh.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nC.prototype={}
C.bhL.prototype={
Z3(d){var w=null
return new B.bH(A.a3,w,w,B.Dt(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c55(){return this.Z3(1)},
aw4(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ac2,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dW(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.aw4("TAARIFA ZA WANANDOA"),A.an,w.c55(),A.cX,w.Z3(0.9),A.cX,w.Z3(0.7),A.O,w.aw4("TAMKO LA MAKUBALIANO"),A.fZ,w.Z3(1),A.cX,w.Z3(0.95),A.O,w.aw4("MASHAHIDI"),A.b4,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acv.prototype={
B(d){return B.oJ(new C.ebg(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.ae9.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bcM:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cw,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],l)
w=this.c
v=C.fWc(w.a)
if(v==null)v=A.d.gL(D.Q2)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b_,A.r,B.a([B.bZ(0,B.fL(C.fWb(v.d),A.A,r,r,A.cl,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.agN,new C.bhL(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ahN,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.KE,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cX,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b6C,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.aA(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ag5,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kN.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7a.prototype={}
C.V3.prototype={
U(){var w=$.aw()
return new C.aCS(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mw(0,null,null),A.d.gL(D.a1O),D.dAN,B.a([],x.L),B.a([],x.gE))}}
C.aCS.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z6(C.fyg(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fxc().bz(new C.eey(v),w)
$.qK().jr(0,"assets/images/ngmy_logo.png").bz(new C.eez(v),w).eU(new C.eeA())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
agk(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
Iv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Iv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(88,1600,A.eG),$async$Iv)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Iv)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hj9(m,p),$async$Iv)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bBH(new B.pC(o,1),m),$async$Iv)
case 10:if(r.c!=null)r.m(new C.eea(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agk("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Iv,v)},
W9(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$W9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hj9(s,q),$async$W9)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bBH(new B.pC(r,1),s),$async$W9)
case 4:if(t.c!=null)t.m(new C.ee6(t,r))
case 1:return B.h(u,v)}})
return B.i($async$W9,v)},
adg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eeh(q))
t=4
q.a.toString
p=C.i2_()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adg)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eei(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agk(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eej(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adg,v)},
Z8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Z8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eec(q,i))
t=4
q.a.toString
p=C.i1Z()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Z8)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eed(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.eee(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eef(q))
$.aU.x1$.push(new C.eeg(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z8,v)},
c5l(d){this.m(new C.eeb(this,d))},
DX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ee8(q))
t=4
w=7
return B.b($.aU.gmu(),$async$DX)
case 7:w=8
return B.b(B.bN(A.n_,null,x.H),$async$DX)
case 8:k=$.aU.ak$.x.h(0,q.d)
p=k==null?null:k.gb7()
if(!(p instanceof B.pN))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lT(1800/p.gY(0).a),$async$DX)
case 9:o=e
w=10
return B.b(o.hp(A.fW),$async$DX)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.aft(J.eQ(A.dC.gaM(n)),"ngmy_news.png","image/png"),$async$DX)
case 11:m=e
q.agk(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agk(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ee9(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DX,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kP,a2,a2,a2,new C.eep(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bJD,a2,a2,a2,new C.eeq(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oI,a2,a2,a2,a4?a1.gaXV():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.Au,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eGL,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f3(A.A,new B.et(new C.b_r(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.T3,a2,a2,a2)
t=a1.as?a2:a1.gc5k()
t=B.a([B.D(B.dp(D.bKn,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bk(D.t9,a2,a2,a2,A.c,A.fM,a2,a2,new B.b7(B.m(14),P.uI),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cl,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bHa,a2,a2,a2,a1.as?a2:a1.gbGX(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.T3,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aR3("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a4,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d5K[o]
p.push(B.mE(a2,D.t9,new B.x(n.a,a2,A.p2,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hB,new C.eer(a1,n),a2,a2,P.uI,a2))}p=B.bY(A.bz,p,A.br,6,8)
m=a1.Q
m=B.bY(A.bz,B.a([D.fst,A.bf,B.jI(a2,a2,a2,D.fd3,a2,new C.ees(a1),m==="en",a2,a2,a2,a2),A.ab,B.jI(a2,a2,a2,D.fcZ,a2,new C.eet(a1),m==="sw",a2,a2,a2,a2)],w),A.rI,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.T3,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a1O,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aPB(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a1O,10,a2,j),h=j.$ti,j=new B.bR(j,j.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aPB(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc5n()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.C(A.cH,s,a2),t,A.aA,new B.C(A.cH,r,a2),q,A.O,p,A.S,m,A.aA,new B.C(A.cH,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aP,B.aE(a2,B.p(A.A,B.A(B.a([D.bKh,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fN,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tV,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dll,A.av,D.bvM],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b6.j(0.35):D.t9
p=new B.aW(16,16)
d=new B.aA(A.bF,1,A.q,-1)
u.push(new B.bH(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f3F,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.UH,new B.o(q,a2,new B.bP(d,d,d,d),new B.bq(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cH,A.ix,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cTK[o]
t.push(B.mE(a2,D.t9,new B.x(a0,a2,A.IA,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hB,new C.eeu(a1,a0),a2,a2,P.uI,a2))}u.push(B.bY(A.bz,t,A.br,6,8))
u.push(A.S)
t=B.D(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aR3("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eev(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a4,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc5m()
u.push(B.A(B.a([t,A.ab,B.Hi(A.yh,s,B.nw(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaXV()
u.push(B.dp(A.oI,D.fo5,t,B.bk(A.d_,a2,a2,a2,a2,A.Io,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.agz,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jN.j(0.5),A.q,1)
v.push(B.bZ(0,B.ek(B.av(B.p(a2,B.A(B.a([E.a6b,A.eB,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iH,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Al,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bs9,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.Au,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aR3(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.t9,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.Iw,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPB(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l9,t,t,t,t),A.fZ],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bos,t,t,t,t))
w.push(A.cX)
w.push(new B.C(A.je,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jc,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ee7(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.z6.prototype={
ba5(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z6(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cEQ(d){var w=null
return this.ba5(w,w,w,w,w,d,w,w,w,w)},
af(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cb0(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gS(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fA(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.caZ(),B.U(w).k("K<1,n>")).c_(0,new C.cb_())
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
return this.ba5(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gF7(d){return this.f}}
C.t5.prototype={
a4(){return"NewsLayout."+this.b}}
C.B3.prototype={
a4(){return"NewsFrame."+this.b}}
C.lb.prototype={}
C.b_r.prototype={
r2(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aXX(d,e,f,g){return this.r2(d,e,null,1.25,f,A.bl,g)},
Pe(d,e,f,g,h){return this.r2(d,e,f,1.25,g,A.bl,h)},
awa(d,e,f,g,h){return this.r2(d,e,null,f,g,A.bl,h)},
aw9(d,e,f,g,h){return this.r2(d,e,f,g,0,A.bl,h)},
aXZ(d,e,f,g,h){return this.r2(d,e,null,f,0,g,h)},
c5r(d,e,f,g,h,i){return this.r2(d,e,f,g,0,h,i)},
aw8(d,e,f,g){return this.r2(d,e,null,f,0,A.bl,g)},
adj(d,e,f){return this.r2(d,e,null,f,0,A.bl,A.cN)},
aXY(d,e,f,g,h){return this.r2(d,e,f,g,0,h,A.cN)},
c5q(d,e,f,g){return this.r2(d,e,null,f,0,g,A.cN)},
c5p(d,e,f,g){return this.r2(d,e,f,g,0,A.bl,A.cN)},
adk(d,e,f,g,h,i){return this.r2(d,e,f,g,h,A.bl,i)},
aXW(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kp(new B.ep(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.cc,new B.jo(1),u,u,h,u,A.ca,u)
v.Bw(g)
if(!v.b.a.c.gaD2())return w
w-=2}return j},
adh(d,e,f,g,h,i,j,k){return this.aXW(d,e,f,g,h,i,j,k,A.bl)},
ayg(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayf(d){return this.ayg(null,!1,d)},
ag8(d,e){return this.ayg(null,d,e)},
cmU(d,e){return this.ayg(d,!1,e)},
gb_4(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaTD(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
O5(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adh(w.gaTD(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaTD(),v,g,A.a2,v,v,v,w.aw9(u,t,f,1.02,A.P),e,v,v)},
aTI(d){return this.O5(d,A.L,null,2,78,30)},
aaK(d,e,f,g,h){return this.O5(d,e,null,f,g,h)},
bVx(d,e,f,g,h){return this.O5(d,A.L,e,f,g,h)},
bVw(d,e,f){return this.O5(d,A.L,null,e,f,30)},
Ra(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kh,B.d(s,u,g,A.a2,u,u,u,v.aXY(w,v.aXW(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b4Q(d){return this.Ra(d,A.L,null,3,24)},
azK(d,e,f,g){return this.Ra(d,e,null,f,g)},
cuh(d,e,f){return this.Ra(d,A.L,e,3,f)},
b4R(d,e){return this.Ra(d,e,null,3,24)},
cuf(d,e){return this.Ra(d,A.L,null,3,e)},
cug(d,e,f){return this.Ra(d,e,null,3,f)},
apN(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.fT,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Pe("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
N2(){return this.apN(null,!0)},
apM(d){return this.apN(null,d)},
bCR(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.ia,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c5q(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
ve(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_4(),h=A.o.an(j.by(B.c0(B.by(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hQC(Math.max(1,B.by(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aXX(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adh(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adh(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.adk(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.A(B.a([B.d(C.bAV(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hM,A.j,0,l,l),A.an,m.ag8(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eB,B.D(B.d(i,l,1,A.eC,l,l,l,m.aw8(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bAV(j),l,l,l,l,l,l,m.Pe(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hM,A.j,0,l,l),A.O,m.cmU(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_4()
v=B.d("NGMY",l,l,l,l,l,l,m.awa(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eC(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.r2(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b4,new B.dq(1,A.cj,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adk(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dL,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hM,A.j,0,l,l)
t=m.ag8(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.aw8(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ag8(!0,1.4),A.at,B.d(C.bAV(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayf(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awa(v,u,1,3,A.P),A.L,l,l),A.O,m.ag8(!0,1.2),A.at,B.A(B.a([B.d(C.bAV(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hM,A.j,0,l,l),A.at,m.ayf(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abR(d){return this.ve(d,!1)},
adi(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adk("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c5o(d,e){return this.adi(d,null,e,null)},
aVF(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.G(B.di(v),12)===0?12:A.o.G(B.di(v),12),t=B.b0(this.d.w).j(0.75),s=this.aw9("Roboto",15,t,1,A.cv),r=B.W(E.ajb,t,w,w,w,18),q=A.a.ap(A.oM[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.di(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.by(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fI,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
auS(){return this.aVF(A.mm)},
b22(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adk("Roboto",this.adh(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayj(d,e,f){return this.b22(d,e,f,30)},
azN(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.v3,B.d(v,w,e,A.a2,w,w,w,this.c5p("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b4V(d){return this.azN(d,3,22)},
cus(d,e){return this.azN(d,e,22)},
tj(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cl,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.D1(D.buU,w,s)
if(v==="sepia")w=new B.D1(D.buT,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.W(A.xH,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bS(A.A,0.95,A.x,s,0,B.a([A.K,A.VW.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b_,A.r,v,s),s)},
q7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tj(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eo,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lJ,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e0p,14)],x.V)
v=l.tj(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eC(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aXY(j.as,13.5,D.b85,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bba,k,k,k,w,k,A.n),k,e,k,k,D.bpM,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tj(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hS(l.tj(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lJ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e0f,10)],x.V)
return B.eC(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tj(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qS,k,k,k),0,0,0),B.ao(k,B.eC(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eC(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nq(l.tj(d,e),A.aq,D.fLc),new C.baW(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tj(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bu(u));++n){m=new B.aW(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bR,k,k,new B.bq(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cm(A.aO,A.pW,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.r,w,k),A.f,A.e8,k,k,k,e,k,k,D.bua,k,k,d)
case 8:w=d/2
v=B.wE(A.he,new B.aW(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wE(A.hA,new B.aW(w,w)),l.tj(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fL,22)],x.V)
return B.p(k,l.tj(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a7(d,e,B.nq(l.tj(d,e),A.aq,D.fRe),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tj(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eo,k,k,d)}},
aNd(d,e){return this.d.e===D.QG?A.bH:this.bCR(d,e)},
VI(d){return this.aNd(d,A.L)},
gaz4(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
az3(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aXZ(v.Q,19,1.15,A.cD,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Pe("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.adj(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jt(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcdu(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8t(d,e,f,g){return B.cp(new C.cb1(this,e,d,f,g))},
a8s(d){return this.a8t(d,22,!0,18)},
VT(d,e){return this.a8t(d,22,!0,e)},
aOf(d,e,f){return this.a8t(d,22,e,f)},
bES(d,e,f){return this.a8t(d,e,!0,f)},
b7M(d,e,f,g){return B.cp(new C.cb2(this,e,d,g,!0,f))},
cci(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abR(824),A.aA,k.aTI(824),k.b4Q(824),A.O,k.N2(),A.ac,B.av(k.q7(824,360),j,j,j),k.VI(824),A.ac,B.D(k.a8s(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abR(824),A.aP,new B.a7(j,350,B.A(B.a([new B.a7(440,j,B.v(B.a([k.aaK(440,A.bg,3,62,26),k.azK(440,A.bg,2,20),A.b4,k.apN(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Ip,B.v(B.a([k.q7(362,310),k.VI(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayf(2),A.ac,B.D(k.a8s(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.ve(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bVx(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cuh(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AR,j,j,j)
u=B.a([B.av(k.q7(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QG){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.aw9(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lH,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.N2(),A.S,B.D(k.VT(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.ve(824,!0)
w=k.q7(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.O5(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bss,j,j,j),j,j,0,0,j,j)],u),j),k.b4R(824,A.bg),A.O,k.N2(),A.S,B.D(k.a8s(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abR(824),A.aA,k.aTI(824),k.b4Q(824),A.O,k.N2(),A.ac,B.D(k.b7M(3,300,B.v(B.a([k.q7(300,300),k.VI(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.ve(824,!0)
v=x.p
u=B.v(B.a([k.aaK(440,A.bg,3,62,26),k.azK(440,A.bg,2,20),A.b4,k.apM(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bx,new B.a7(j,400,B.A(B.a([new B.a7(440,j,u,j),A.aMS,new B.C(A.ia,k.q7(364,h.e===D.QG?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.D(k.VT(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abR(824),A.ac,k.bVw(824,2,70),k.cuf(824,21),A.O,k.N2(),A.ac,B.D(k.b7M(3,340,B.av(k.q7(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.ve(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bAV(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Pe(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aXZ(h.Q,24,1.15,A.cD,A.P),j,j,j))
v.push(A.b4)
if(k.gaz4())v.push(k.az3(230,250))
return B.v(B.a([w,A.aA,B.D(B.A(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ag3,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaK(570,A.bg,3,62,28),k.cug(570,A.bg,20),A.O,k.apM(!1),A.O,B.av(k.q7(570,330),j,j,j),k.VI(570),A.S,B.D(k.aOf(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.ve(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Pe(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.an,k.O5(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bqO,j,j,j),k.b4R(824,A.bg),A.S,B.av(k.q7(824,310),j,j,j),k.VI(824),A.O,k.N2(),A.S,B.D(k.a8s(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.ve(824,!0),A.aP,new B.an(A.W,j,A.aa,A.r,B.a([k.q7(824,430),B.ao(18,k.c5o(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.ayj(824,3,66),k.b4V(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.auS(),A.aA,B.D(k.VT(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.ve(824,!0),A.bx,new B.a7(j,500,B.A(B.a([new B.a7(410,j,B.v(B.a([k.adi(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b22(410,4,58,28),k.azN(410,6,20),A.b4],w),A.F,j,A.e,A.j,0,A.p),j),U.aMT,k.q7(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.auS(),A.aP,B.D(k.VT(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.ve(824,!0)
v=k.q7(824,420)
u=B.hto(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aP,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c5r(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bsI,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.ayj(824,3,62),k.b4V(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aVF(A.lg),A.aA,B.D(k.VT(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.ve(824,!0)
u=h.w
t=x.p
w=B.a([k.q7(824,380),B.ao(j,k.adi(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayj(824,2,60)
r=k.cus(824,2)
p=k.auS()
o=B.D(k.aOf(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aP,new B.an(A.W,j,A.aa,A.r,w,j),A.aP,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.tj(150,104),A.aq),A.o8,B.D(B.v(B.a([k.adi("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.aw8(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.ve(824,!0),A.bx,k.aaK(824,A.bg,3,62,30),k.azK(824,A.bg,2,22),A.S,k.apM(!1),A.S,B.av(k.q7(824,330),j,j,j),k.aNd(824,A.bg),A.aP,B.D(k.bES(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b7r(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.btd,B.v(B.a([B.D(t.cci(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fZ,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aXX(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Pe(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hM,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bpX(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fL(q,A.A,s,s,A.cl,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.mm,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awa(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bui,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jt(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.baX.prototype={
iY(d){return C.h8B(d)},
jE(d){return!1}}
C.baW.prototype={
a5(d,e){var w,v=C.h8B(e)
$.X()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aP(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.bsq.prototype={
iY(d){var w,v,u,t,s,r,q,p,o=new B.eJ()
o.dB(3)
w=$.X()
v=B.a([],x.v)
u=new B.aP(w.r,A.ap,null,null,v)
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
jE(d){return!1}}
C.b7r.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eJ()
k.dB(7)
$.X()
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
w.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.Ka.j(0.13),A.K],v),l,l).av(0,B.bT(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
ar(d){return!1}}
C.bpX.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.i1(u,u,u,u,B.dn(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.cc,u,A.eh,A.ca)
s.eI()
w=d.a
J.bA(w.save())
w.translate(t/2,e.b*0.52)
d.iW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbd(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.V6.prototype={
U(){return new C.aCW()}}
C.aCW.prototype={
a_(){var w=this
w.a1()
B.fV4(w.a.c,null).bz(new C.efJ(),x.g7).bz(new C.efK(w),x.a)
w.a.toString},
gaM2(){var w=D.atP[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawb(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaM2()
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
Za(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Za=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.efw(r))
t=4
q=r.gawb()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.rV()
m=B.GG(n,null)
i=B.M()
i.Q=A.fU
m.yj(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.qj().z1(J.fZ9(p),J.fZ9(o)),$async$Za)
case 7:l=e
w=8
return B.b(l.hp(A.fW),$async$Za)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eQ(J.va(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.efx(r))
r.c.I(x.q).f.R(D.ePd)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Za,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kP,s,s,s,new C.efD(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fqz,s,s,!0,s,s,t.y||r==null?s:t.gc5s(),s,s)],p),s,s,!0,!0,A.Au,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fuq,s,s,s,1,s,!0)
if(r==null)p=A.lz
else{w=B.D(new B.C(A.bV,B.av(new B.fG(t.gaM2(),B.cp(new C.efE(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jc,B.jI(s,s,s,new B.x(D.atP[u].a,s,E.aOF,s,s,s,s,s,s,s,s,s),s,new C.efF(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bn(!0,B.v(B.a([new B.a7(s,40,B.cB(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bL_,B.D(B.kU(s,s,s,6,1,new C.efG(t),t.f),1),D.bKC],p),A.m,s,A.e,A.j,0,s,s),D.fo_,A.an,B.bK(!1,D.fnK,s,s,!0,s,s,new C.efH(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.W9,s,s,s,s,s,s,D.bq9,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.Au,p,s,!1,!1,s,s)}}
C.bat.prototype={
a5(d,e){var w
$.X()
w=B.M()
w.Q=A.cl
return d.yj(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_c.prototype={
U(){var w=$.aw(),v=x.A
return new C.aEi(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b3,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a2l),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oq.prototype={}
C.aEi.prototype={
gaTQ(){var w,v,u=this
if(u.p1)w=new B.wU(1,u.p2,0.9,u.p3).iG().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.eOY(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
XP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qK().jr(0,"assets/images/ngmy_logo.png"),$async$XP)
case 7:q=e
p=J.eQ(J.va(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bBH(new B.pC(p,1),o),$async$XP)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eNQ(r,p))
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
return B.i($async$XP,v)},
Ph(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ph=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(92,1800,A.eG),$async$Ph)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Ph)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bBH(new B.pC(p,1),n),$async$Ph)
case 9:if(r.c==null){w=1
break}r.m(new C.eOd(r,p))
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
return B.i($async$Ph,v)},
b1q(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aO=w.aE=w.az=w.Z=w.b6=w.bi=w.y2=0
w.b3=null
w.b1=0.25
w.be=null
w.bK=0.5
w.aR=1
w.c7=w.bT=w.bj=0
w.cX=w.cU=!1},
aVp(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.byl(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d8g)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.byl(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.byl(C.fUc(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.byl(C.fUc(1-a0*0.5,n,n,n),w)}return a1?C.byl(C.fUc(-1,255,255,255),w):w},
azT(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kS(0,this.d.a.a),t=B.B(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yV(u,v,w)
this.dx.pZ(new C.eOn(t),!0)
return t},
b3W(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.azT()
w=C.i_I(e.d.a.a,e.db)
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
return C.hXc(d,k,v,a0,j,e.gaTQ(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
csd(){return this.b3W(null)},
CL(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmu(),$async$CL)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CL)
case 4:w=5
return B.b($.aU.gmu(),$async$CL)
case 5:s=$.aU.ak$.x.h(0,t.r)
r=s==null?null:s.gb7()
if(!(r instanceof B.pN)){u=null
w=1
break}w=7
return B.b(r.lT(1080/r.gY(0).a),$async$CL)
case 7:w=6
return B.b(e.hp(A.fW),$async$CL)
case 6:q=e
u=q==null?null:J.eQ(A.dC.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CL,v)},
a9k(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9k=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eNz(q))
t=4
w=7
return B.b(q.CL(),$async$a9k)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcv().aJ(p)
n=C.Bg(null,null,null,null,D.o2,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b3W(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.eNA(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9k,v)},
A9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$A9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eNx(q))
t=4
w=7
return B.b($.aU.gmu(),$async$A9)
case 7:w=8
return B.b(B.bN(A.ov,null,x.H),$async$A9)
case 8:w=9
return B.b($.aU.gmu(),$async$A9)
case 9:k=$.aU.ak$.x.h(0,q.f)
p=k==null?null:k.gb7()
if(!(p instanceof B.pN))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lT(1080/p.gY(0).a),$async$A9)
case 10:o=e
w=11
return B.b(o.hp(A.fW),$async$A9)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.aft(J.eQ(A.dC.gaM(n)),"ngmy_quote.png","image/png"),$async$A9)
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
if(q.c!=null)q.m(new C.eNy(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A9,v)},
cfo(){var w=this.p4
w.toString
return B.cp(new C.eO6(this,w))},
aY5(d,e){var w=null
return B.br(w,w,w,w,w,D.eZi,w,w,!0,new B.b4(4,B.m(16),P.uI),w,w,w,w,w,D.t9,!0,w,w,w,w,new B.b4(4,B.m(16),D.aX0),w,w,w,w,w,w,w,w,A1.D1,e,w,w,w,w,w,w,w,D.f3w,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xv(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPq,w,w,w))
return new B.C(D.bo6,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aY4(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jA),A.f,w,w,new B.o(D.t9,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vk(d){return this.aY4(d,A.bC)},
nY(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tV:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j9,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j9,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dh(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.EY,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
af8(d,e,f){return this.nY(d,null,e,f)},
awf(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.ez:A.bF,s=x.p
v=B.a([B.dh(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aY8(d,e,f,g,h,i){return this.awf(d,e,f,g,h,5,i)},
ka(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eWm,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e3W,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eOj(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aOv,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Yj,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.au4(w).cGc(A.b6,A.bF,A.b6.j(0.2),A.c,D.eG5,4)
return new B.C(A.xg,B.v(B.a([s,B.a9f(B.kU(u,u,u,g,f,new C.eOk(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ah8(d,e,f,g,h,i){return this.ka(d,e,f,g,h,null,i)},
ahy(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dp:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.aA(q,r?3:1,A.q,-1)
t=t?D.bE7:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eOm(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bY(A.bz,n,A.br,10,10)},
bIZ(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2l
else{v=x.a8
w=B.B(new B.a2(D.a2l,new C.eNp(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aY5("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eNq(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a78,!0,A.a4,n,A.am,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aY5("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eNr(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dl,!0,A.a4,n,A.am,n,n,n,n)
t=o.xv("DESIGNS",A.tJ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cLw[q]
r.push(new B.C(A.jc,o.af8(p,o.x===p,new C.eNs(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hH(n,new C.eNt(o,w),w.length,n,n,A.aO,new C.eNu(),!1),n),A.O,o.aY4(B.v(B.a([B.iD(A.b6,n,n,A.af,!0,new C.eNv(o),n,D.ffh,n,D.fbO,o.k3),B.iD(A.b6,n,n,A.af,!0,new C.eNw(o),n,n,n,D.f94,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.agy)],s),A.F,n,A.e,A.j,0,A.p)},
cAH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.azT()
if(a7.length===0)return a5.vk(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.II,a6,a6,a6))
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
m=B.B(u,B.a3(u).k("cn.E"))
A.d.fh(m)
l=m.length!==0&&A.d.da(m,new C.eON(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eOU(a5)
j=new C.eOW()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.II,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aW(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ez:A.bF
d=new B.aA(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bq(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.LY,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eOO(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vk(B.bY(A.bz,o,A.rI,6,6))
i=B.a([a5.nY("All words",K.akO,!1,new C.eOP(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.af8("Sentence "+a3,!1,new C.eOQ(a5,a7,v,a2)))
a2=a3}}i.push(a5.af8("Clear picks",!1,new C.eOR(a5)))
i=B.bY(A.bz,i,A.br,8,8)
g=a5.xv("SIZE OF THE PICKED WORDS",D.akd)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.ddH[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eOS(e,k)
f.push(a5.af8(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bY(A.bz,f,A.br,8,8),A.S,a5.nY("Make every word normal",A.lf,!1,new C.eOT(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cvW(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bvq,B.d(A.d.iC(D.avv,new C.eOw(q)).b,p,p,p,p,p,p,D.eXP,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eOx(q)),l=q.xv("HIGHLIGHT BEHIND THE WORDS",A.a_c),k=q.p1?-1:q.k4
k=q.ahy(k,new C.eOy(q),D.cVB)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bY(A.bz,B.a([k,B.aE(p,B.p(p,D.bH4,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eRP,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eOB(q),p,p,p,p,p,p,!1,A.a8)],o),A.rI,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.II,p,p,p)],o)
if(q.gaTQ()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ah8("Colour",l,0,360,new C.eOC(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ah8("Shade",k,0.15,0.9,new C.eOD(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ka("Strength",l,0.15,1,new C.eOE(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vk(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xv("LOOK",A.y5))
m=B.a([q.nY("Bold",I.akb,q.fy,new C.eOF(q)),q.nY("Italic",I.akc,q.go,new C.eOG(q))],o)
for(u=0;u<3;++u){l={}
k=D.cMG[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tV:p
w=w?p:A.c.j(0.07)
s=new B.aW(14,14)
r=new B.aA(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bq(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eOH(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bY(A.bz,m,A.rI,8,8))
n.push(q.xv("COLOUR",A.n8))
n.push(q.ahy(q.fx,new C.eOI(q),D.d5f))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.II,p,p,p))
n.push(q.xv("SIZE AND PLACE",A.FU))
m=q.fr
m=q.ka("Text size",m,0.5,1.6,new C.eOz(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vk(B.v(B.a([m,q.ka("Up / down",l,0.12,0.5,new C.eOA(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cfp(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bMp,A.f,p,p,D.aZZ,p,62,p,p,p,p,p,62),A.aA,D.fcX,A.an,D.fhs],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.t9,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.brk,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaY7(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cl,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.D(B.v(B.a([D.fcx,A.O,B.bY(A.bz,B.a([q.nY("Change",A.kN,!1,q.gaY7()),q.nY("Remove",A.e4,!1,new C.eOa(q))],w),A.br,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d1O[t]
u.push(q.nY(s.b,s.a,q.at===t,new C.eOb(q,t)))}u=B.bY(A.bz,u,A.br,8,8)
r=q.at
A:{if(0===r){s=q.bZn(o)
break A}if(1===r){s=q.bYq()
break A}if(2===r){s=q.bER()
break A}if(3===r){s=q.bL5()
break A}s=q.bGY()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bH(A.a3,p,p,q.nY("Reset the whole picture",A.lf,!1,new C.eOc(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bZn(d){var w=this,v=x.p
return B.v(B.a([B.bY(A.bz,B.a([w.nY("Auto enhance",E.ZR,!1,new C.eO2(w)),w.nY("Make words easy to read",A.oF,!1,new C.eO3(w))],v),A.br,8,8),A.aA,B.cp(new C.eO4(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bYq(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ka("Exposure",n,-1.5,1.5,new C.eNH(o),0,A.k.aa(n,1))
w=o.RG
w=o.ka("Brightness",w,-0.5,0.5,new C.eNI(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ka("Contrast",v,0.4,2,new C.eNJ(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ka("Fade",u,0,1,new C.eNK(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ka("Spotlight",t,0,1,new C.eNL(o),0,""+A.k.V(t*100))
s=o.Z
s=o.ka("Darken",s,0,0.85,new C.eNM(o),0,""+A.k.V(s*100))
r=o.b6
r=o.ka("Vignette",r,0,0.9,new C.eNN(o),0,""+A.k.V(r*100))
q=o.aH
q=o.ka("Shade behind words",q,0,0.85,new C.eNO(o),0,""+A.k.V(q*100))
p=o.aO
return o.vk(B.v(B.a([n,w,v,u,t,s,r,q,o.ka("Shade top & bottom",p,0,0.85,new C.eNP(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bER(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ka("Colour strength",q,0,2.2,new C.eN2(s),1,""+A.k.V(q*100))
w=s.to
w=s.ka("Warmth",w,-1,1,new C.eN3(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ka("Tint",v,-1,1,new C.eN4(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vk(B.v(B.a([q,w,v,s.ka("Shift colours",u,-180,180,new C.eN5(s),0,""+A.k.V(u)+"\xb0"),new B.bH(A.a3,r,r,s.nY("Negative",D.bC7,s.y1,new C.eN6(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xv("COLOUR WASH",A.MX)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.aue)
t=B.a([u,v,s.ahy(w,new C.eN7(s),q),A.O],t)
if(s.b3!=null){q=s.b1
t.push(s.vk(s.ah8("Wash strength",q,0,0.9,new C.eN8(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bL5(){var w,v,u,t,s,r=this,q=r.y2
q=r.ka("Blur",q,0,24,new C.eNB(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.ka("Soft focus",w,0,1,new C.eNC(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vk(B.v(B.a([q,w,r.ka("Film grain",v,0,1,new C.eND(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xv("LIGHT LEAK",H.ak7)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.aue,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahy(q,new C.eNE(r),t),A.O],u)
if(r.be!=null){q=r.bK
u.push(r.vk(r.ah8("Leak strength",q,0,1,new C.eNF(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bGY(){var w,v,u,t,s=this,r=s.aR
r=s.ka("Zoom",r,1,3,new C.eNc(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.ka("Left / right",w,-1,1,new C.eNd(s),0,""+A.k.V(w*100))
v=s.bT
v=s.ka("Up / down",v,-1,1,new C.eNe(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.v(B.a([s.vk(B.v(B.a([r,w,v,s.ka("Turn",u,-180,180,new C.eNf(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bY(A.bz,B.a([s.nY("Turn 90\xb0",O.all,!1,new C.eNg(s)),s.nY("Flip sideways",A.FI,s.cU,new C.eNh(s)),s.nY("Flip upside down",A.FI,s.cX,new C.eNi(s))],t),A.br,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c10(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eGh,A.S,D.fek,A.aA,B.aE(w,B.p(A.A,D.eGu,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tV,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eO5(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.t9,w,u,v,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
bZf(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eNY(p),m=x.p,l=B.A(B.a([D.bvw,p.nY("Reset",A.lf,!1,new C.eNU(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.II,o,o,o),j=p.xv("SHAPE",A.alh),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BK[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aY8(n.$2(t,p.cy),62,u.b,s===t,new C.eNV(v,p),62))}}i=B.bY(A.bz,i,A.br,8,8)
v=p.xv("RING",A.qU)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BF[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aY8(n.$2(p.cx,t),62,r.b,q===t,new C.eNW(s,p),62))}u=B.bY(A.bz,u,A.br,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vk(p.ka("Size",s,0.12,0.4,new C.eNX(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b02(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eOg(this)),null),null)},
cvd(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tV:q
t=new B.aW(14,14)
s=D.d3Q[w]
r=v?A.c:A.az
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bi,B.aE(A.c5,B.dh(q,B.v(B.a([r,A.cX,new B.qb(A.eg,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bq(t,t,t,t),q,u,A.n),D.bn2,q,q,q,A.hI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eOp(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bp7,A.lJ,q,q,q)},
aOL(){var w,v,u=this,t=null,s=u.cvd(),r=u.as
A:{if(0===r){w=u.bIZ()
break A}if(1===r){w=u.cAH()
break A}if(2===r){w=u.cvW()
break A}if(3===r){w=u.cfp()
break A}if(4===r){w=u.bZf()
break A}w=u.c10()
break A}v=x.p
return B.bw(A.rO,B.ek(B.v(B.a([s,B.D(B.cB(B.a([w],v),t,D.bqa,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.W9,!0),A.aq)},
aL_(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc5T(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.eGD,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbKG()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cw,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eLx)
else t.push(D.bGa)
t.push(A.ab)
t.push(D.bxg)
return B.p(r,B.A(B.a([q,A.av,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tV,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZ6,r,r,r,r,G.agm,r,r,r)},
aY6(){var w=null
return new B.C(T.Yf,B.A(B.a([B.aH(w,w,w,w,A.mq,w,w,w,new C.eNG(this),w,w,w,w,w,w),D.ftn,A.b4,D.bOH],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.Au,B.bn(!0,B.cp(new C.eOX(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.be0.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eJ()
m.dB(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.X()
t=B.M()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.M()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c1(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.ri.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.m0.prototype={}
C.z8.prototype={
af(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nG.prototype={}
C.vJ.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7i.prototype={}
C.aq3.prototype={}
C.a_H.prototype={
U(){return new C.aGc(new B.ar(A.as,$.aw()),B.kj(!0,null,!0,!0,null,null,!1),D.dtx,B.a([],x.s),B.ew([D.Hz],x.Q))}}
C.aGc.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_v(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_v=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BI(90,700,700,A.eG),$async$a_v)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$a_v)
case 8:p=e
if(r.c!=null)r.m(new C.eUZ(r,p,q))
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
return B.i($async$a_v,v)},
a_y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aGb(78,n,1100,1100),$async$a_y)
case 7:q=e
if(J.cl(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gS(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.ff(),$async$a_y)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cS.gcv().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eV_(r,p))
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
return B.i($async$a_y,v)},
b21(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cE.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cl,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.blk},
bZl(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.coT(C.fvD(w,this.b21(d),f),g)},
abC(d,e,f,g,h){var w=null,v=new C.eUX(f,e),u=new C.eUY(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.W(f?A.Bp:A.MM,A.c_,w,w,w,26),w,w,w),D.e9A],x.p),w),w)
else p=this.bZl(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bFS],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUW(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVv(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cE.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cl,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.W(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.Tf,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a06,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l9,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a7N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7N=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fz3(),$async$a7N)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eUF(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eUG(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7N,v)},
ads(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ads=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eUI(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eUJ(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eUK(r))
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
return B.b(C.ful(q,r.cx,j,new C.b_P(r.z,r.Q,r.as,r.at),new C.eUL(r),i,m,p,k),$async$ads)
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
if(r.c!=null)r.m(new C.eUM(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ads,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bT,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bJ2,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bSr,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eVc(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a06,h,h,h,i.ax?h:new C.eVd(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbzU()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hp(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.W(i.e==null?A.vp:A.hy,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vE,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aWy),h,h,h,h,h,h,h,h,X.Iw,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jc,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aOS,!0,A.a4,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eVe(i)
s=i.aVv(A.lh,q,r,i.gcfQ(),s)
r=i.z
r=B.D(i.abC(new C.eVg(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.an,B.A(B.a([r,A.bp,B.D(i.abC(new C.eVh(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eVi(i)
s=i.aVv(A.vn,r,p,i.gcfY(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.abC(new C.eVj(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.aA,D.fiI,A.at,D.flv,A.bx,u,A.O,D.fjY,A.aA,v,A.bx,B.A(B.a([q,A.av,B.D(B.v(B.a([s,A.an,B.A(B.a([p,A.bp,B.D(i.abC(new C.eVk(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fnc],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bdZ,A.q,1)
w=C.ag2(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bH(A.a3,h,h,B.p(h,B.A(B.a([D.bK7,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f2h,h,h,h),B.aL(!1,h,!0,D.e4b,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eVl(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b7n,h,u,v,h,h,A.n),h,h,h,h,D.boP,h,h,h),h)],t))}o.push(A.bx)
o.push(D.f9M)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cXC[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.aA(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bD(1,A.bi,new B.C(A.je,B.aE(h,B.dh(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eVm(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bx)
o.push(D.frF)
o.push(A.O)
o.push(B.cp(new C.eVn(i)))
o.push(A.bx)
o.push(D.fgP)
o.push(A.O)
w=B.a([i.b4O("auto","Let AI choose",A.dW,A.Pu)],t)
for(v=x.O,m=0;m<11;++m){j=D.vK[m]
u=j.d
w.push(i.b4O(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.bY(A.bz,w,A.br,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iD(h,A.bo,h,h,h,new C.eVf(i),D.bFj,D.fqV,h,D.fc0,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aO6,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gc5X()
v=B.fm(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eLn:A.G7
o.push(new B.a7(h,54,B.lr(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p1,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vf,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.a9X,h,h,h,h,h,h,h,h),h)},
bM9(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eUN(this,p,d)
if(d===D.Cl)return new C.aCL(p,o,q)
w=B.m(16)
v=p?E.vE:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.W(p?A.ee:C.hAq(d),A.c,q,q,q,20)
r=C.hAr(d)
return B.aE(q,B.dh(q,B.v(B.a([s,A.at,B.f3(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hw,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b4O(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dh(v,B.A(B.a([w,L.Iq,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ahE,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eV1(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_G.prototype={
U(){return new C.aGb(new B.ar(A.as,$.aw()))}}
C.aGb.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
adt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adt=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eUy(r))
w=1
break}B.eS()
r.m(new C.eUz(r))
t=4
q=C.i0B(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i0l(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eUA(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fTT()
f=$.Ch.h(0,k.a)
o=f==null||J.cl(f)?null:J.fo(f)
if(o==null){r.m(new C.eUB(r))
w=1
break}n=C.i0j(o,r.a.c)
C.i0f(r.a.c.a)
$.fT9=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fWB(j)
h=C.fWC(r.a.c)
e=C.fWD(r.a.c)
w=7
return B.b(C.bAz(k,r.a.c.a,j,h,new C.eUC(r),i,e,a0),$async$adt)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eUD(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adt,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bT,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.alA,A.f,j,j,D.aYM,j,34,j,j,j,j,j,34),A.av,D.bw5],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aOz,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.a9s),j,j,j,j,j,j,j,j,X.Iw,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aOS,!0,A.a4,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cU8[q]
o=A.c.j(0.06)
n=k.e?j:new C.eUE(k,p)
r.push(B.mE(j,o,new B.x(p,j,Ay.SM,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uI,j))}w=B.a([w,A.aA,u,A.an,t,A.aA,s,A.S,B.bY(A.bz,r,A.br,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aO6,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc5Y()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.fm.j(0.5)],x.O):D.csA
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cw,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e47:D.bJH
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eA(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i3,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vf,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.a9X,j,j,j,j,j,j,j,j),j)}}
C.b_P.prototype={}
C.aCL.prototype={
U(){return new C.biG(null,null)}}
C.biG.prototype={
gawg(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pC,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gawg().q()
this.btR()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawg(),new C.eaG(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgd.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cZH[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.x4.j(0.25+r*0.6).gp(0)
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
C.aqD.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Z4.prototype={
U(){return new C.aAc()}}
C.aAc.prototype={
gahv(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agf(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzV(){var w=this.e
return w===$?this.e=C.fWB(this.a.c).t(0,D.Cl):w},
a7A(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7A=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dgt(s))
u=3
r=A.d.iC(D.vK,new C.dgu(s))
q=B.db(C.fWB(s.a.c),x.Q)
l=q
J.hC(l,D.Cl)
p=l
if(s.gzV())J.ch(p,D.Cl)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzV()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fWC(i.c)
g=C.fWD(s.a.c)
w=6
return B.b(C.bAz(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7A)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agf(q,s.gahv())
f=q==null?null:q.b
n=f==null?s.gahv():f
if(!J.z(n,r.a)&&!s.gzV())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dgv(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7A,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dgy(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.W(A.cA,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vK[w]
u=o.gahv()
t=o.f?n:new C.dgz(o,v)
f.push(new C.br1(v,u===v.a,t,n))}f=B.lW(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzV()?D.bVa:n
if(o.gzV())s=n
else s=m?A.bm:A.bM
r=B.W(A.dW,o.gzV()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzV()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzV()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzV()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.auA(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dgA(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agp,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f2A,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.F5,n,n,A.ah)
u=o.f?n:o.gbyT()
t=B.bk(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bn(!0,B.p(n,B.v(B.a([new B.C(D.brO,e,n),new B.dq(1,A.cj,f,n),new B.C(A.F4,new B.a7(1/0,50,B.bJ(B.eA(B.av(o.f?A.ry:D.fja,n,n,n),n,new B.o(n,n,n,s,n,D.bTK,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tu,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.br1.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bH(A.l1,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bH(A.lu,w,w,B.d(v.b,w,w,w,w,w,w,D.f2y,w,w,w),w)],x.p)
if(q)v.push(D.aUE)
return B.aE(w,B.dh(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.ck,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.eaD.prototype={
aDO(d,e,f){return e+"@"+A.a.aT(A.o.fQ(f==null?this.a.c:f,16),8,"0").toUpperCase()},
we(d,e){return this.aDO(0,e,null)}}
C.aKK.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.b_L.prototype={
B(d){var w,v,u=null,t=C.fVr(this.c)
if(t==null)w=D.bk6
else{w=B.aI(d,u,x.w).w.cFF(D.bol,D.eKB)
v=this.d
w=B.ui(B.e1(B.an0(!1,t,!1,v,!1,390),!v,u),w)}return B.f3(A.A,new B.a7(416,870,new C.bkj(w,u),u),A.f,A.du)}}
C.bkj.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d9U[w]
u=new B.aW(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anu,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.db4[w]
u=new B.aW(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anu,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cKj,D.bS9,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.ek(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aUQ,B.p(t,t,A.f,t,t,D.aZ4,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.blq,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l8.prototype={
pk(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.eo(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mw,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.eo(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rj(i,l,0,0,B.a([f,w,C.eo(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fp,t.l(),3,"",0,0,"",D.ch,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mv,"","","Welcome",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.ch,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rj(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.u8,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mv,"","","Agenda",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.ch,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rj(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ch,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mv,"","","Key Point 1",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.ch,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ch,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rj(i,l,0,0,B.a([u,r,C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ch,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mv,"","","Key Point 2",D.dd)
r=C.cC()
r=C.eo(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Bg(l,l,l,l,D.Ch,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rj(i,l,0,0,B.a([r,C.eo(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.ch,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mv,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Eh.prototype={
bx(d){return this.e.$1(d)}}
C.es.prototype={}
C.iV.prototype={}
C.E8.prototype={
gaJy(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ag2(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2Q(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.E8(v,u,t,d==null?w.d:d)},
Fe(d){return this.a2Q(null,d,null,null)},
aCx(d){return this.a2Q(null,null,null,d)},
cFD(d,e){return this.a2Q(d,e,null,null)},
b9X(d){return this.a2Q(d,null,null,null)},
ba3(d){return this.a2Q(null,null,d,null)}}
C.MW.prototype={
U(){return new C.bi2(new B.eO(0,$.aw()),null,null)}}
C.bi2.prototype={
a_(){var w,v=this
v.a1()
w=v.qi(new C.dRU(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.j1(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.aw()
w.P$=0
this.btj()},
B(d){var w=C.ag2(this.a.c.a)
if(w==null)w=A.d.gL(D.Gs)
return B.cp(new C.dRT(this,w,C.haq(this.a.c.d)))}}
C.bpC.prototype={
B(d){return B.nL(A.Ux,this.e,new C.eTM(this,A.k.G(this.d*0.35,1.6)-0.3))}}
C.bd6.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRi(d,e,v)
break
case"confetti":w.bFm(d,e,v)
break
case"crown":w.bGZ(d,e,v)
break
case"aurora":w.bzY(d,e,v)
break
case"champagne":w.bDb(d,e,v)
break
case"diamonds":w.bJ7(d,e,v)
break
case"starburst":w.csW(d,e,v)
break
case"balloons":w.bAb(d,e,v)
break
case"galaxy":w.bNT(d,e,v)
break
case"redcarpet":w.ck2(d,e,v)
break
case"coins":w.bEJ(d,e,v)
break
case"lanterns":w.bXX(d,e,v)
break
case"hearts":w.bVB(d,e,v)
break
case"petals":w.cfh(d,e,v)
break
case"butterflies":w.bCc(d,e,v)
break
case"neon":w.c0L(d,e,v)
break
case"disco":w.bJi(d,e,v)
break
case"sunrise":w.cuu(d,e,v)
break
case"pearls":w.cel(d,e,v)
break
case"snow":w.csB(d,e,v)
break
case"laurel":w.bY2(d,e,v)
break
case"ribbons":w.cmA(d,e,v)
break
case"kente":w.bXL(d,e,v)
break
case"trophy":w.cy6(d,e,v)
break
case"shooting":w.cqs(d,e,v)
break
case"bokeh":w.bAu(d,e,v)
break
case"orbits":w.cc_(d,e,v)
break
case"flowers":w.bNa(d,e,v)
break
case"music":w.c0v(d,e,v)
break
case"mandala":w.bZX(d,e,v)
break
case"sparklers":w.csK(d,e,v)
break
case"city":w.bE0(d,e,v)
break}},
rh(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.X()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nt
u=new B.aP(w.r,A.ap,null,null,B.a([],x.v))
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
d.ah(e,f*0.18,v)},
lE(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.rh(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aRi(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lE(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.io,A.bA],w),B.a([A.et,A.aT],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bu(k/2.8)
i=A.k.G(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.G(h,4))]
if(i<0.22){a0=B.le(new B.u(g,c1),new B.u(f,e),A.cr.aw(0,i/0.22))
a0.toString
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rl(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.le(new B.u(g,c1),a0,0.75)
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
a6=A.cr.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cT(h,4)
if(a5<0.15){a4=1-a5/0.15
$.X()
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
$.X()
b9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.nt
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.rh(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bFm(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.G(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.M()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d4V,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aX(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.G(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.OY[A.o.D(A.k.bu(C.cT(u,7)*5),0,4)]
J.bA(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cT(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.G(u,5)===0){t=B.a([],v)
m=new B.aP(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbI().a.snapshot()):t).a,k)
k.delete()}else{t=B.co(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c1(t),k)
k.delete()}f.restore()}this.lE(a1,a2,a3,25,A.bK,30)},
bGZ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.X()
n=B.a([],r)
m=new B.aP(o.r,A.ap,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b96],v),a4,a4).av(0,B.bT(w,u)))
l=o.H()
o=m.gbI().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aP($.X().r,A.ap,a4,a4,B.a([],r))
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
n.saq(new B.a8(A.b0,A.b5,A.x,D.d3L,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.eiH,D.ecJ,D.erK],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
l.delete()}}for(v=B.wP(i),u=B.a([],x.X),o=new B.vm(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jR(y.M));--f
o.jk()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aP(n,v.b,a4,new B.cH([new B.GZ(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fz
f.r=A.bK.gp(0)
l=f.H()
f=d.gbI().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.G(b0*0.5,1)
this.rh(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lE(a8,a9,b0,45,A.bK,40)},
bzY(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lE(a8,a9,b0,60,A.c,50)
w=[D.eBZ,D.eBH,D.eBB,D.eCY]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.X()
i=B.a([],p)
h=new B.aP(n.r,A.ap,null,null,i)
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
h.e=null}}$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nt
n.z=new B.ht(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nt
n.z=new B.ht(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.G(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.x3.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nt
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDb(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.M()
a0.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.hE.j(0.25+0.1*h),D.Wj],x.O),l,l).av(0,B.bT(new B.u(g,f),e)))
a1.ah(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aP(d.r,A.ap,l,l,a0)
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
u.e=null}d=$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.OY[A.o.G(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbI().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.G(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.rh(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Af.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bJ7(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lE(a9,b0,b1,30,A.l3,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cT(p,1))
n=a7+o*4
m=A.k.G(t*(0.04+0.06*C.cT(p,2))+C.cT(p,3)*n,n)-o*2
l=C.cT(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bA(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.X()
g=B.a([],q)
f=new B.aP(h.r,A.ap,a5,a5,g)
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
g.saq(new B.a8(A.ax,A.aC,A.x,D.d_H,a5,a5).av(0,B.co(A.J,k*1.2,o)))
a2=g.H()
g=f.gbI().a.snapshot()
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
if(a4>0.85)this.rh(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
csW(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.X()
o=B.a([],v)
n=new B.aP(p.r,A.ap,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bF())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bK.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbI().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.G(a0+l*0.6,1.8)/1.8
$.X()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bu(a0/2.4)
k=A.k.G(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bkN.aw(0,k)*(0.5+0.5*C.cT(t,v)))
this.rh(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.OY[A.o.D(A.k.bu(C.cT(t,4)*5),0,4)],u)}},
bAb(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.G(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.auD[A.o.G(o,6)]
h=$.X()
g=B.a([],s)
f=new B.aP(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbI().a.snapshot()):d).a,a1)
a1.delete()
a2=B.co(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bS(D.aUT,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.auu,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c1(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aP(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbI().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.G(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.bA(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.co(A.J,t,v)
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.auD[A.o.G(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c1(s),a1)
a1.delete()
u.restore()}},
bNT(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lE(b1,b2,b3,50,A.c,70)
for(w=[D.eC6,D.eBN,D.eBT],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bT(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.G(i,3)
g=C.cT(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cT(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bK,A.ez,g)
k.toString
d=C.cT(i,3)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cT(i,4)).gp(0)
a0.a=A.nt
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.X()
a9=B.M()
a9.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.Af.j(0.55),D.ae1],u),a4,a4).av(0,B.bT(b0,a8)))
b1.ah(b0,a8,a9)
a1=A.k.G(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bu(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.le(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.le(a3,a5,0.6)
a6.toString
a8=B.M()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rl(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
ck2(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.X()
n=B.a([],s)
m=new B.aP(o.r,A.ap,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bS(A.A,0.5,A.x,b5,0,B.a([A.Af.j(0.28),D.ae1],w),b5,b5).av(0,B.bT(new B.u(q,u),t)))
o.a=A.nt
l=o.H()
q=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.er:A.eM)
a9=$.X()
b0=B.a([],s)
m=new B.aP(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cS(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hE.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aP($.X().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bF())
v=B.M()
v.saq(D.bTE.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.G(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rh(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bEJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.G(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.co(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.ded:D.cyc,null,null).av(0,l))
k=q.H()
v.drawOval(B.c1(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bhX.gp(0)
k=j.H()
v.drawOval(B.c1(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rh(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lE(d,e,f,30,A.bK,110)},
bXX(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lE(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.G(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bS(A.A,0.5,A.x,d,0,B.a([W.Ww.j(0.45*k),D.acT],u),d,d).av(0,B.bT(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aP(i.r,A.ap,d,d,j)
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
i=B.aq(D.b9h,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b0,A.b5,A.x,B.a([D.bdC,i],u),d,d).av(0,B.co(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bVB(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cT(p,1))
n=a1+o*4
m=A.k.G(s*(0.05+0.06*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bA(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.X()
l=B.a([],t)
i=new B.aP(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pt(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pt(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cS7[A.o.G(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bS(A.rL,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1g,d).av(0,B.bT(A.J,o*1.4)))
e=m.H()
m=i.gbI().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lE(a3,a4,a5,30,A.io,130)},
cfh(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cT(q,1))
o=g+p*4
n=A.k.G(t*(0.05+0.06*C.cT(q,2))+C.cT(q,3)*o,o)
m=C.cT(q,4)
l=Math.sin(s+q*0.7)
J.bA(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cT(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.X()
m=B.a([],u)
k=new B.aP(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cS(p,l,0,p))
m.push(new B.cS(n,l,0,n))
m.push(new B.bF())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.csz:D.d0V
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bT(A.J,p)))
j=n.H()
n=k.gbI().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lE(d,e,a0,25,A.bK,140)},
bCc(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lE(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cT(r,1))
p=Math.sin(b2*(0.15+0.1*C.cT(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cT(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bA(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bA(v.save())
v.scale(a1*n,1)
a2=$.X()
a3=B.a([],u)
a4=new B.aP(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pt(f,e,l,d,h,0))
a3.push(new B.pt(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d0F:D.d3f,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbI().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.An.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbI().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bhf.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c0L(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.G(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.avF[t].j((1-s)*0.9).gp(0)
q.z=new B.ht(A.G,v)
p=r*0.3
p=B.bz(B.co(e,r,r*1.6),new B.aW(p,p))
o=q.H()
u.drawRRect(B.eq(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.avF[A.o.G(m,4)]
j=m*n+h
i=g-l
i=B.bz(new B.a9(j,i,j+w,i+l),new B.aW(v,v))
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.ht(A.a9g,p)
o=j.H()
u.drawRRect(B.eq(i),o)
o.delete()}},
bJi(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.mL,A.dy][A.o.G(p,4)]
j=C.cT(p,3)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nt
i.z=new B.ht(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.X()
t=B.M()
t.r=A.az.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dz.gp(0)
a3.ah(v,u,t)
J.bA(q.save())
a1=new B.aP(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.ke(B.bT(v,u)))
a3.qf(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.G(a1,g)
i=Math.sin(e*1.7+l+s)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c1(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rh(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cuu(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cr.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.X()
q=B.a([],u)
p=new B.aP(r.r,A.ap,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bK.j(0.1).gp(0)
o=r.H()
r=p.gbI().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.X()
a0=B.M()
a0.saq(new B.bS(A.A,0.5,A.x,h,0,B.a([D.b5r.j(0.6),D.acT],x.O),h,h).av(0,B.bT(a1,d)))
a2.ah(a1,d,a0)
a0=e*0.2
d=B.M()
d.saq(D.eaq.av(0,B.bT(a1,a0)))
a2.ah(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.G(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.co(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c1(i),o)
o.delete()
i=B.co(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c1(i),o)
o.delete()}this.lE(a2,a3,a4,20,A.hU,180)},
cel(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.X()
q=B.a([],t)
p=new B.aP(r.r,A.ap,f,f,q)
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
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cy,A.j3,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbI().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.G(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bS(An.pa,0.5,A.x,f,0,D.d6u,f,f).av(0,B.bT(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lE(a1,a2,a3,25,A.c,190)},
csB(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cT(r,1))
p=f+q*4
o=A.k.G(u*(0.03+0.05*C.cT(r,2))+C.cT(r,3)*p,p)
n=C.cT(r,4)
m=Math.sin(t+r)
$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cT(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
J.bA(v.save())
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
bY2(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dw(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bA(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.co(new B.u(p,0),q,r)
$.X()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bTr.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c1(g),e)
e.delete()
s.restore()}}$.X()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b9v.gp(0)
a3.ah(w,v*1.08,a0)
d=a5*0.8
this.rh(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lE(a3,a4,a5,40,A.bK,210)},
cmA(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hE,A.hU],a6),B.a([A.oo,A.io],a6),B.a([A.aE,A.ez],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.X()
k=B.a([],o)
j=new B.aP(l.r,A.ap,null,null,k)
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dw(i,s),l=new B.bR(l,l.gM(0),r);l.C();){h=l.d
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
$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avj,new B.mh(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbI().a.snapshot()):l).a,a2)
a2.delete()}this.lE(a8,a9,b0,40,A.c,220)},
bXL(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.G(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.G(A.k.bu(g/t),5)
a1=g+t
$.X()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1j[a3].gp(0)
a4=a2.H()
s.drawRect(B.c1(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1j[A.o.G(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c1(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.G(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.rh(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1j[A.o.G(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cy6(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bK.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aP($.X().r,A.ap,null,null,B.a([],x.v))
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
f=B.co(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c1(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.saq(new B.a8(A.a3,A.a7,A.x,D.d8H,A.auK,null).av(0,new B.a9(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.G(a6*0.6,1.4)
if(a0<1)this.rh(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bFn(a4,a5,a6,60)},
bFn(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.G(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bA(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.co(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.OY[A.o.G(p,5)].gp(0)
m=n.H()
u.drawRect(B.c1(o),m)
m.delete()
u.restore()}},
cqs(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lE(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.G(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bu((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.X()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).av(0,B.rl(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rh(a0,i,p,A.c,1-m)}},
bAu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.G(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.G(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.G(r,5)
m.r=D.ax7[l].j(n).gp(0)
m.a=A.nt
m.z=new B.ht(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ax7[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cc_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bA(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.co(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bK.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c1(p),n)
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
k.r=A.hE.j(0.4).gp(0)
k.z=new B.ht(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lE(d,e,f,45,A.bK,270)},
bNa(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.G(o,4)
m=C.cT(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.G(a7+C.cT(o,2)*4,4)/4
j=A.ev.aw(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cT(o,3))*(j*i)
if(h<=0.5)continue
g=D.cYW[A.o.G(o,5)]
J.bA(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.co(new B.u(0,l),i,j)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b0,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.co(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c1(d),a1)
a1.delete()}$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hE.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lE(a5,a6,a7,30,A.hU,280)},
c0v(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.G(t+n/4,1)
l=B.bT(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.atQ[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c1(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.G(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.atQ[A.o.G(g,4)]
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bA(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.co(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c1(s),i)
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
bZX(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bA(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.X()
a0=B.a([],s)
a1=new B.aP(d.r,A.ap,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cS(h,m,0,g))
a0.push(new B.cS(j,m,0,i))
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bK,A.mL,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbI().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hU.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.X()
a5=B.M()
a5.saq(new B.bS(A.A,0.5,A.x,a3,0,B.a([A.hE.j(0.25),D.Wj],x.O),a3,a3).av(0,B.bT(w,a4)))
a7.ah(w,a4,a5)
this.lE(a7,a8,a9,30,A.bK,300)},
csK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bS(A.A,0.5,A.x,null,0,B.a([A.hU,A.hE.j(0.6),D.Wj],o),null,null).av(0,B.bT(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cT(f,1)
d=A.k.G(b2+C.cT(f,2)*e,e)/e
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
a6.a=A.nt
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
bE0(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRi(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bUm.av(0,j))
h=i.H()
r.drawRect(B.c1(j),h)
h.delete()
g=A.k.bu(m/q)
f=A.k.bu(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c1(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aYF.prototype={
B(d){var w,v=null,u=new C.c6W(),t=new C.c6Y(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.amD,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c6X(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gs[w]))
return B.bY(A.bz,s,A.br,12,10)}}
C.YD.prototype={
U(){return new C.ayA()}}
C.ayA.prototype={
gvl(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYb(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b3,A.aN),$.aw())}return v},
gawh(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJy()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b3,A.aN),v)}return t},
q(){var w=this.gaYb(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gawh()
w.T$=v
w.P$=0
this.a2()},
Zl(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BI(90,700,700,A.eG),$async$Zl)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Zl)
case 8:p=e
o=q.b.toLowerCase()
n=J.agX(o,".png")?"image/png":"image/jpeg"
r.m(new C.d5G(r,n,p))
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
return B.i($async$Zl,v)},
aYa(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aOX,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ag2(p.gvl().a)
if(n==null)n=A.d.gL(D.Gs)
w=p.gvl()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.MW(p.gvl(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hi(A.mq,new C.d5L(d),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hi(D.bEe,new C.d5M(p),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aOR,o,o,o)
t=B.D(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYb(0),o,o,o,o,o,2,p.aYa("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d5N(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ho,!0,A.a4,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hE.j(0.6),A.q,1)
if(p.gvl().d.length===0)q=D.bHy
else{q=C.haq(p.gvl().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fL(q,A.A,o,o,A.cl,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5Z(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvl().d.length!==0)r.push(B.aH(o,o,o,o,D.a06,o,o,o,new C.d5O(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bn(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawh(),o,o,o,o,o,2,p.aYa("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d5P(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dl,!0,A.a4,o,A.am,o,o,o,o),A.ac,B.dp(D.bGs,D.fsA,new C.d5Q(p,d),B.bk(A.aw,o,o,o,A.w,o,A.cg,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZf,o,o,o,o,A.F1,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKd.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.YY.prototype={
U(){return new C.beA(new B.ar(A.as,$.aw()))}}
C.beA.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bT,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.W(A.cA,l,o,o,o,o),o,o,o,new C.dcs(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cJK[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gS(t)
r=new B.aW(12,12)
q=new B.aW(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aL(!1,new B.bq(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uv,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bq(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dct(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hI,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.BT(A.bz,6,6,A.br,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aQ
e.push(B.A(B.a([B.D(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aPN,new C.dcu(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bn(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cj,B.cB(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tu,A.XX,o,o,o),!0,!1,A.af,!0,!0)}}
C.bdY.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eJ()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.M()
u.z=A.Qw
t=B.M()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.G(l-v*(0.4+k*0.9),1)
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
$.X()
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
C.bdF.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bz(new B.a9(0,0,0+a7.a,0+a7.b),A.kq),a2=this.b,a3=Math.sin(a2*2),a4=$.X(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.ll
a6.aD(a1,a5)
a5=x.v
a4=new B.aP(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iT(a1))
v=new B.RW(new B.vm(B.wP(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.jk()
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
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.G(n-p*(1-m/10),t)
h=A.k.G(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aP(r,k,a0,new B.cH([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aP(r,k,a0,new B.cH([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aP(r,a2.b,a0,new B.cH([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jk()
e=u[a3].Mi(n).a
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mu
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
C.bmu.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eJ()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.h9()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galA()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.X()
i=B.a([],n)
h=new B.aP(j.r,A.ap,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bF())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aTL(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jk
g=j.H()
j=h.gbI().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b8A.prototype={
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
f=e}$.X()
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
C.b8d.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eJ()
a0.dB(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.X()
h=B.a([],n)
g=new B.aP(i.r,A.ap,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.X()
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
t.drawPath((i==null?g.e=new B.cF(g.gbI().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.btm.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.M()
t=(0.5+0.5*t)*0.12
w.saq(new B.bS(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cQV,null).av(0,u))
d.aX(u,w)
w=u.cF(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jk
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bqp.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bu(d)*7,p=0;p<7;++p){o=new B.eJ()
o.dB(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.G(A.k.G(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.X()
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
C.bpy.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.X()
v=B.M()
v.a=A.nt
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bd_.prototype={
a5(d,e){var w,v,u,t,s,r=e.geg(),q=0.55+0.45*Math.sin(this.b)
$.X()
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
r=new C.d5n(this,r*0.16,d,u,w)
t=e.geg()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.xg.prototype={}
C.Ih.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aq2.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uv.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mr.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hw.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eI.prototype={
hA(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eo(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
af(){var w,v=this,u=B.T(x.N,x.z)
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
u.n(0,"decoration",C.hOo(v.z))
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
C.lB.prototype={
hA(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,eI>")
n=B.B(new B.K(n,new C.ccl(),m),m.k("ak.E"))
return C.rj(t,s,o,q,n,w.a,u,v,p,w.b,r)},
af(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a4<n,@>>")
n=B.B(new B.K(n,new C.ccm(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hZ.prototype={
gb8f(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRI(){if(!C.ks(this.w))return!1
var w=this.gb8f()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bS())},
hA(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("K<1,lB>")
r=B.B(new B.K(r,new C.cca(),q),q.k("ak.E"))
return C.Bg(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
af(){var w,v,u=this,t=B.T(x.N,x.z)
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
w=B.B(new B.K(w,new C.ccb(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jB.prototype={}
C.b_O.prototype={
B(d){return B.cp(new C.ccg(this))}}
C.ang.prototype={
U(){return new C.bhN(null,null)}}
C.bhN.prototype={
gaYc(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.h4,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaYc().q()
this.bt3()},
B(d){return B.c6(this.gaYc(),new C.dE6(),this.a.c)}}
C.aJZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.acy.prototype={
Pk(d,e,f,g){return this.bMS(d,e,f,g)},
bMS(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pk=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pk)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pk,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.ds,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.D(new C.acQ(A.hz,"Download",A.bY,new C.emK(w,d),!0,v),1),A.av,B.D(new C.acQ(A.vr,"Share",A.bj,new C.emL(w,d),!1,v),1),A.av,B.D(new C.acQ(A.hj,"Safari",A.aZ,new C.emM(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.emN(d),v,v))
return B.bn(!0,new B.C(A.pF,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.F8,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.acQ.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eA(B.v(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bu9,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b_M.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.ape(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c6_().ajK(1.35)
s=B.auu(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.byt(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bPu,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.w4,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zf,A.am,h,A.SB,h,h)
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
w=n?t.cFq(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eC:A.CS
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Ss:s
$.X()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fz
j.r=A.aB.gp(0)
j=i.cmD(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cmB(k,t,l?A.Ss:s)],x.p),h)}else w=i.cmC(p,t,g.k2?A.Ss:s,m)
v=new B.nb(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bH(r,h,h,q,h),h)
case 1:case 4:return i.bWf()
case 3:return i.cek()
case 2:return B.b3(h,h,h,new C.b_J(g,h),A.f0)
case 5:g=g.r
return new C.b_L(g,!i.e&&i.z==null,h)}},
c6_(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
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
e=B.a([new B.cP(D.acR,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.co
w=A.aB
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mB
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
w=W.Vo
break
case"ice":v=o.d
e=B.a([new B.cP(A.aT,A.J,10*v),new B.cP(A.cy,A.J,22*v)],x.r)
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
for(t=o.d,q=0;q<8;++q){p=D.cSS[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.M()
v=o.d
f.saq(D.bRR.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.JZ,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.M()
v=o.d
f.saq(D.bSb.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
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
ayc(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eI5.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cce(h)
v=r.k2?C.i_V(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.CS
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.X8(B.dn(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cmD(d,e,f,g){return this.ayc(d,e,f,!1,g)},
cmB(d,e,f){return this.ayc(d,e,f,!1,null)},
cmC(d,e,f,g){return this.ayc(d,e,f,g,null)},
byt(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bWf(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.W(s.b===D.kS?A.G2:A.Bb,A.az,t,t,t,32),t,t,t)}w=u.bBq(r)
if(s.b===D.kS){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cp,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dD,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aMH(r,!0)
return C.fvD(s.go,v,s.id)}return w},
aMH(d,e){var w,v,u,t
try{w=C.i0d(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.ccd(this,w,v,e))
return u}catch(t){return D.aaC}},
bBq(d){return this.aMH(d,!1)},
cek(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b3v
return C.i0v(v,w.db,w.dx)}}
C.b_J.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.X(),g=B.M(),f=this.b
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
case 2:r=new B.aP(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aP(r,g)
d.aP(r,w)
break
case 3:r=new B.aP(h.r,A.ap,i,i,B.a([],x.v))
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
r=new B.aP(h.r,A.ap,i,i,B.a([],x.v))
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
r=new B.aP(h.r,A.ap,i,i,f)
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
C.aHA.prototype={
U(){return new C.bsT(null,null)}}
C.bsT.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.i9,null,1,null,v)
w.cH(0)
v.d!==$&&B.aO()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvj()},
aMS(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.ds,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
byH(){var w,v=this,u=null,t=v.aMS("Slide A",A.bj),s=v.aMS("Slide B",A.aZ)
if(v.a.c===D.ch)return new B.an(A.W,u,A.b_,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f15(v,s,t),u)},
B(d){return this.byH()}}
C.aIc.prototype={
iY(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jE(d){return d.b!==this.b}}
C.Ui.prototype={
U(){return new C.bi_(null,null)}}
C.bi_.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AC,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ch){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dQ6(u),x.a)},
br(d){var w,v,u,t=this
t.bE(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ch)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dQ5(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bti()},
B(d){var w,v=this.a
if(v.c.dy===D.ch||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dQ4(this),v.d)}}
C.Ig.prototype={
B(d){return B.cp(new C.cc6(this))}}
C.ayk.prototype={
U(){return new C.bct()}}
C.bct.prototype={
a_(){this.a1()
if(this.a.c!==D.ch)B.bN(A.Lh,new C.d2C(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ch)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Ui(C.eo(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cd,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eo(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Ui(t,B.p(p,D.fev,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.jd,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.aZP,A.bd)}}
C.a70.prototype={
U(){return new C.biE(null,null)}}
C.biE.prototype={
gaYJ(){var w=this.a
if(w.e)w=D.eIc.t(0,w.c)||D.aM5.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaYJ()){w=C.hZA(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.btP()},
B(d){var w,v=this,u=v.d
if(!v.gaYJ()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.eam(v,u,A.o.G(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYI.prototype={
B(d){var w=null
return B.av(C.b_N(!0,w,!1,C.eo(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.ch,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bdD.prototype={
iY(d){return C.a1F(this.b,new B.a9(0,0,0+d.a,0+d.b).cF(-this.c))},
jE(d){return d.b!==this.b||d.c!==this.c}}
C.bov.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cF(-this.d),g=this.b,f=C.a1F(g,h),e=a1.geg(),d=new C.eRp()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aNB.av(0,h))
a0.aP(f,w)
g=C.a1F(g,h.cF(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bhJ.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eRM.av(0,h))
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
g.saq(D.eRK.av(0,h))
a0.aP(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a1F(g,h.cF(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aP(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.ht(A.G,e*0.035)
a0.aP(f,g)
g=d.$1(e*0.016)
g.r=A.oq.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eRF.av(0,h))
a0.aP(f,w)
w=C.a1F(g,h.cF(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b6T.gp(0)
a0.aP(w,v)
g=C.a1F(g,h.cF(e*0.03))
v=d.$1(e*0.004)
v.r=D.b9k.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aNB.av(0,h))
a0.aP(f,g)
for(g=B.wP(f),w=B.a([],x.X),g=new B.vm(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jR(y.M));--q
g.jk()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bu(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jk()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jk()
m=w[q].Mi(p*n/o).a
l=D.cQe[A.o.G(n,4)]
$.X()
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
g.saq(D.eRO.av(0,h))
g.z=new B.ht(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.saq(D.eRL.av(0,h))
a0.aP(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a1F(g,h.cF(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nz.gp(0)
a0.aP(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bpv.prototype={
a5(d,e){d.Ft(C.a1F(this.b,new B.a9(0,0,0+e.a,0+e.b).cF(-this.c)),A.w,e.geg()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aKc.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aKI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.aM2.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.a7j.prototype={}
C.Nn.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aDb(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
gdX(){return this.c},
gT0(){return this.r},
gT1(){return this.w},
gL8(){return this.x}}
C.aDb.prototype={
a_(){var w,v=this
v.a1()
$.aU.c2$.push(v)
C.fAz()
$.hi_=new C.esY(v)
w=B.bj(null,A.AA,null,1,null,v)
w.f9(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.HZ()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.NX(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.HZ()}},
iS(d){if(d===A.zG||d===A.rN||d===A.rM||d===A.pb)this.tg()},
q(){var w,v,u,t=this
$.aU.hE(t)
w=t.at
if(w!=null)w.a8(0)
t.tg()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bL(0)
v.h2()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bu2()},
gaaE(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOg(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ab7(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRI())return!1
return!0},
k6(){return this.ab7(null)},
ahN(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.eQ3)},
q0(){if(!this.k6())return!1
this.ahN()
return!0},
apS(d){var w,v,u,t,s,r=this
if(r.ab7(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hh6(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zz(){return this.apS(null)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aq4(k),$async$HZ)
case 3:j=e
w=4
return B.b(C.aoH(k),$async$HZ)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fPJ(j,t.bZ6())
w=t.gaaE()?5:7
break
case 5:r=t.gOg()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYW(r),$async$HZ)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.epl())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.epm())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yg(m==null?"":m)!=null)continue
C.fAL(n,s)
p=!0}t.m(new C.epn(t,s))
if(p||s.length>J.ad(j))t.tg()
case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
bZ6(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ks(w)&&w!==q}if(w)p.push(r)
return p},
cl1(d){var w,v=this,u=d.w
if(!C.ks(u)||u==="hati_kiapo_uongozi")return
v.a9u(d)
w=A.d.bc(v.d,new C.eqW(d))
u=v.d
if(w>=0){u[w]=d.hA()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hA())
v.db=!1},
cfg(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ks(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cl1(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,hZ>")
s=B.B(new B.cQ(new B.a2(s,new C.eqK(),w.k("a2<1>")),new C.eqL(),v),v.k("J.E"))
return s},
NX(d){return this.bNe(d)},
tg(){return this.NX(null)},
bNe(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$NX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cfg()
w=3
return B.b(C.Vh(d==null?t.a.c:d,s),$async$NX)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.apS(r)?4:5
break
case 4:w=6
return B.b(C.a6x(r),$async$NX)
case 6:q=r.x
p=A.a.i(q==null?t.gOg():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bc(t.d,new C.eoJ())
q=t.d
if(o>=0)q[o]=r.hA()
else A.d.ck(q,0,r.hA())
case 5:case 1:return B.h(u,v)}})
return B.i($async$NX,v)},
p7(){var w,v=this,u=v.at
if(u!=null)u.a8(0)
u=v.e
w=(u==null?null:C.ks(u.w))===!0?A.hX:A.lG
v.at=B.cM(w,new C.es3(v))},
aYd(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aej(u.hA(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cyk(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aej(w.e.hA(),w.f,w.r))
w.m(new C.esU(w,v.pop()))
w.p7()},
ck7(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aej(w.e.hA(),w.f,w.r))
w.m(new C.eqU(w,v.pop()))
w.p7()},
o1(){var w,v,u=this
if(u.e==null)return
w=A.d.bc(u.d,new C.esH(u))
if(w>=0){u.d[w]=u.e.hA()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
WX(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
x7(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bL(0)
u.h2()}w.a9(0)},
JF(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.db(new B.cQ(new B.a2(w,new C.esI(),v.k("a2<1>")),new C.esJ(),u),u.k("J.E"))
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
if(o!=null)o.bL(0)
p.h2()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.esK(n))
s.cg(0,p,new C.esL())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hk(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b8(u.d,new C.eo7(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOg()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hA())}u.o1()
u.p7()},
ai8(d,e){var w,v,u,t,s=this
if(s.k6())return
w=s.WX(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ks(v.w))===!0
if(u){C.hZE(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.hZF(t,w.d+w.f*0.5)}}s.Hk()
s.o1()
s.p7()
if(u&&s.c!=null)s.m(new C.esV())},
czn(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hk()
w.o1()
w.p7()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gq4(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hXG(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bWu(v)
t=q.bWt(v)
s=B.b0(v.e)
r=v.f
return new C.jB(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hAC(o)},
bWu(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bWt(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
ae7(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaE()){w.c.I(x.q).f.R(D.eOG)
return}w.a9u(d)
w.aZp(C.bAA(d))
return}if(C.cd_(v)){w.a9u(d)
w.aZp(d)
return}w.m(new C.eq2(w,d))},
aqq(){var w,v,u,t,s,r,q=this
q.a1p(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ks(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eo5(q))
if(r&&q.c!=null){u.toString
q.Jf(u,s)}return}q.tg()
q.m(new C.eo6(q))},
aZo(d){this.a9u(d)
this.ZW(d,!0)},
a9u(d){if(!C.ks(d.w))return
C.fAL(d,this.d)},
ZW(d,e){return this.cbb(d,e)},
aZp(d){return this.ZW(d,!1)},
cbb(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bAA(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOg():r)
t.dy.W(0,q.toLowerCase())
C.aoI(t.a.c,q)}r=s}else r=d
w=C.cd_(r.w)?3:4
break
case 3:w=5
return B.b(t.a9v(r),$async$ZW)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b8(t.d,new C.eqp(l))
o=l.a.hA()
n=C.ks(o.w)&&C.i_Q(o)
t.m(new C.eqq(t,o,p))
if(n){m=A.d.bc(t.d,new C.eqr(o))
if(m>=0){t.d[m]=o.hA()
t.tg()}}if(!t.ab7(l.a))t.Y4()
r=!1
if(t.c!=null)if(!t.ab7(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.apS(r)&&C.fwO(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.ePf)
case 1:return B.h(u,v)}})
return B.i($async$ZW,v)},
a9v(d){return this.bLu(d)},
bLu(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9v=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lc(r.c,A.yX),$async$a9v)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kP(!1,r,s.c,s.d,null,A.yX,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9v,v)},
nU(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cd_(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cco(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nU,v)},
adP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.eq1(),s,null,!0,!0,x.H),$async$adP)
case 3:if(t.c==null){w=1
break}t.aqq()
case 1:return B.h(u,v)}})
return B.i($async$adP,v)},
adO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.epZ(),s,null,!0,!0,x.H),$async$adO)
case 3:if(t.c==null){w=1
break}t.m(new C.eq_())
t.aqq()
case 1:return B.h(u,v)}})
return B.i($async$adO,v)},
Y4(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Y4)
case 3:r=e
if(B.kc(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Y4)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eNj)
case 1:return B.h(u,v)}})
return B.i($async$Y4,v)},
Jf(d,e){return this.cls(d,e)},
cls(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jf=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afD(s,t.gE3(),t.gE2(),!0,e,t.d),$async$Jf)
case 9:w=4
break
case 6:w=10
return B.b(C.afE(s,t.gE3(),t.gE2(),!0,e,t.d),$async$Jf)
case 10:w=4
break
case 7:w=11
return B.b(C.afF(s,t.gE3(),t.gE2(),!0,e,t.d),$async$Jf)
case 11:w=4
break
case 8:w=12
return B.b(C.afG(s,t.gE3(),t.gE2(),!0,e,t.d),$async$Jf)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jf,v)},
bY0(){var w,v,u,t,s=this
if(!s.gaaE()){s.c.I(x.q).f.R(D.eNw)
return}w=s.gOg()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afC(u,t,v,new C.eph(s),new C.epi(s),w)},
ae8(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ae8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dF,null,new C.eq8(u),s,!0,!0,!1,A.lo,!1,!1,x.N),$async$ae8)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afG(s,u.gE3(),u.gE2(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afD(s,u.gE3(),u.gE2(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.afE(s,u.gE3(),u.gE2(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afF(s,u.gE3(),u.gE2(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bY0()
return B.h(null,v)}})
return B.i($async$ae8,v)},
cai(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYd()
w=C.cC()
v=C.Bg(t,t,t,t,D.Ch,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eq9(u,v))},
a8W(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.q0()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i4h(s),$async$a8W)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.da(q.r,new C.eo9())
t.d2(new C.eoa(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8W,v)},
ag5(d,e,f,g){var w=null,v=g?A.dp:A.bM,u=B.I(g?A.b2:A.cp,A.q,1)
return B.hp(B.aE(w,B.p(w,B.W(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
ZV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.q0()){w=1
break}s=t.jH()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eqk(),q),q.k("J.E"))}o=s!=null&&s.b===D.lm?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.ePq)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.eql(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$ZV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZV,v)},
aep(){return this.cba()},
cba(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aep=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.q0()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i43(s,t.f+1,o),$async$aep)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kz(s,B.U(s).c)
p.a=A.d.bc(o.r,new C.eqn(q))
t.d2(new C.eqo(p,t,o,q,r))
t.c.I(x.q).f.R(D.ePP)
case 1:return B.h(u,v)}})
return B.i($async$aep,v)},
aew(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.q0()||!t.zz()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eqF(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eN4)
w=1
break}o=new B.K(p,new C.eqG(),B.U(p).k("K<1,N>")).fo(0,new C.eqH())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b3,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.K,null,new C.eqI(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aew)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eqJ())
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
aeb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.q0()){w=1
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
return B.b(C.hj4(s,new C.E8(r,q,p,o==null?"":o)),$async$aeb)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d2(new C.eqa(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ag2(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeb,v)},
a9o(){return this.bKR()},
bKR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9o=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.q0()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i4g(s,t.f+1,l),$async$a9o)
case 3:r=e
q=$.fT9
$.fT9=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d2(new C.eoq())
t.c.I(x.q).f.R(D.eMW)
w=1
break}if(!q){s=r.CW
s=C.hhY(l,s==null?"":s,!1)}else s=!1
if(s){t.d2(new C.eor(t,l,r))
t.c.I(x.q).f.R(D.eQi)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kz(s,B.U(s).c)
s=l.r
m.a=A.d.bc(s,new C.eos(p))
o=s.length
t.d2(new C.eot(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9o,v)},
aOX(d,e){if(e){this.aeZ()
return}this.cai(d,!1)},
bGz(){return this.aOX(null,!1)},
aeZ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.bX,null,new C.eqP(t),r,!0,!0,!0,A.oW,!1,!1,x.N),$async$aeZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eqQ(t,C.hXF(s).pk()))
case 1:return B.h(u,v)}})
return B.i($async$aeZ,v)},
d2(d){var w=this
if(w.q0())return
w.Hk()
w.aYd()
w.m(d)
w.JF()
w.o1()
w.p7()},
a7p(){this.d2(new C.en4(this,D.mv))},
aQl(){var w=this.gdr()
if(w==null)return
this.d2(new C.eoo(this,w))},
aPx(){var w=this.e
if(w==null||w.r.length<=1)return
this.d2(new C.eom(this))},
b1k(d,e){if(this.e==null||d===e)return
this.d2(new C.eqY(this,d,e))},
Nu(d){return this.bIx(d)},
bIx(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOg():s)
w=5
return B.b(C.aoG(t.a.c,r),$async$Nu)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aq6(s)
w=6
return B.b(C.b_R(t.a.c,s),$async$Nu)
case 6:if(t.c==null){w=1
break}t.m(new C.eoi(t,d))
w=7
return B.b(t.tg(),$async$Nu)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nu,v)},
clp(d,e){var w=this
if(d.z){w.ahN()
return}w.m(new C.eqX(w,d,e))
w.p7()},
jH(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
VY(d){return this.ch.cg(0,d.a,new C.eo8(d))},
asg(d){return this.CW.cg(0,d.a,new C.eoK())},
a1p(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.WX(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ak$.d.c
if(u!=null)u.jx()},
b4I(){return this.a1p(!0)},
a1n(d){var w,v,u=this
if(u.q0())return
if(!u.zz())return
w=u.WX(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.VY(w).saV(0,"")}u.m(new C.esF(u,d))
$.aU.x1$.push(new C.esG(u,d,w))},
b5d(d){var w=this
if(d.b===D.cQ&&!w.k6()&&w.zz()){w.a1n(d.a)
return}w.ayC(d.a)},
ayC(d){var w,v,u,t,s,r=this
if(r.k6())return
w=r.r
if(w!=null&&w!==d){v=r.WX(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.es4(r,s,d))
if(s||d==null){t=$.aU.ak$.d.c
if(t!=null)t.jx()}},
aLf(){this.d2(new C.en5(this))},
oO(d){return this.bxK(d)},
bxK(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$oO)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d2(new C.en2(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oO,v)},
V6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gc(78,1920),$async$V6)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d2(new C.emT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V6,v)},
V0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$V0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.Cu(t.a.c),$async$V0)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gam(s)){t.c.I(x.q).f.R(D.eQS)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.emQ(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$V0)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d2(new C.emR(t,q))
case 1:return B.h(u,v)}})
return B.i($async$V0,v)},
arg(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b8(w.gdr().z,new C.eok(v))){w.c.I(x.q).f.R(D.ePT)
return}if(w.w===v)w.a1p(!0)
w.d2(new C.eol(w,v))},
bEP(){var w=this.jH(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aLX(d,e){var w=this,v=w.jH(),u=w.gdr(),t=w.e
if(t==null)return
w.d2(new C.enx(w,v,d,e,t,u))},
bzk(d){return this.aLX(d,null)},
a7H(d){return this.bzs(d)},
bzs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5M.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nU(),$async$a7H)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jH()
if(s!=null){r=s.b
if(r===D.cQ)t.bzk(s.w>=28||s.x.gdI(0)>=A.H.gdI(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aLX(r.j(0.88),r)}w=1
break}t.d2(new C.enC(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7H,v)},
a7G(d){return this.bzq(d)},
bzq(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jH()
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
return B.b(t.nU(),$async$a7G)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.enA(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7G,v)},
bza(d){var w=this.gdr()
if(w==null)return
this.d2(new C.enw(this,w,d))},
a_0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i4c(r),$async$a_0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.o1()
t.m(new C.eqz(t,s))
w=4
return B.b(t.tg(),$async$a_0)
case 4:if(t.c!=null)t.ae7(s)
case 1:return B.h(u,v)}})
return B.i($async$a_0,v)},
a9g(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9g=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1p(!0)
t.o1()
s=t.c
s.toString
w=3
return B.b(C.Qx(s,q),$async$a9g)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9g,v)},
D9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$D9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.o1()
t=4
w=7
return B.b(C.aOK(m),$async$D9)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aO9(o,q,m.b),$async$D9)
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
return B.i($async$D9,v)},
ER(d,e){return this.cxO(d,e)},
cxO(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ER=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.q0()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1p(!0)
t.o1()
s=h.a=t.e.hA()}else{r=A.d.bc(t.d,new C.esO(d))
s=h.a=r>=0?t.d[r].hA():d.hA()}s=s.w
q=s==null
p=C.hYD(q?"":s)
o=C.hgU(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a2<1>")
n=B.B(new B.a2(s,new C.esP(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cr9(n.length,o,s),$async$ER)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hYx(h.a)
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
return B.b(t.cr8(n,o),$async$ER)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iC(t.d,new C.esQ(s))
s=h.a.b
w=11
return B.b(t.cr6(k.b,s),$async$ER)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hA()
case 5:j=C.hYC(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eR2)
w=1
break}w=12
return B.b(t.cr7(j.a,s,o,j.c),$async$ER)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.esR(h,t,i))
t.p7()
case 1:return B.h(u,v)}})
return B.i($async$ER,v)},
cr9(d,e,f){var w=this.c
w.toString
return B.bV(A.K,null,new C.esk(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cr8(d,e){var w=this.c
w.toString
return B.bV(A.K,null,new C.esj(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cr6(d,e){var w=this.c
w.toString
return B.bV(A.K,null,new C.esd(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cr7(d,e,f,g){var w=this.c
w.toString
return B.bV(A.K,null,new C.esf(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaI(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaJ(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eB,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f0b,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aTz(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Td,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aTC(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.no,w,w,w),A.cX,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.Be,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.epd(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bVq(d,e,f,g,h,i){return this.aTC(d,e,f,!1,g,h,i)},
atB(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.ds,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Yh,w,w,w)},
aTB(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cg,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nm,w,w,w),new C.epc(d,f),v)},
aTA(d,e){return this.aTB(d,e,null)},
Jw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oZ(l,s.c,s.d),$async$Jw)
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
for(l=A.d.gae(o.z),n=new B.fk(l,new C.es5());n.C();){m=l.gS(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a98(l.charCodeAt(0)==0?l:l,r.b),$async$Jw)
case 4:l=t.a
w=5
return B.b(B.oY(l.c,l.d),$async$Jw)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jw,v)},
HF(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oZ(q,s.c,s.d),$async$HF)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a98(A.R.ao(r.af(),null),r.b+".json"),$async$HF)
case 4:q=t.a
w=5
return B.b(B.oY(q.c,q.d),$async$HF)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HF,v)},
b4s(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.o1()
u.tg()
w=u.c
w.toString
v=B.e8(new C.esE(u,t),!1,null,x.z)
B.a6(w,!1).c8(v)},
GT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$GT)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fAY(),$async$GT)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i0p(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.aB,null,new C.emY(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GT)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d2(new C.emZ(t,s))
w=1
break}if(p==="split")t.d2(new C.en_(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GT,v)},
MQ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.q0()){w=1
break}w=3
return B.b(t.nU(),$async$MQ)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOJ(s,null,null),$async$MQ)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d2(new C.en3(t,r))
case 1:return B.h(u,v)}})
return B.i($async$MQ,v)},
b17(d){var w=this.e
if(w==null||!C.ks(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNe(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOJ(s,t==null?null:B.b0(t),u)},
a7n(d){return this.bxB(d)},
bxB(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7n=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.q0()){w=1
break}if(!t.zz()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eRh)
w=1
break}w=3
return B.b(t.aNe(),$async$a7n)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d2(new C.emV(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7n,v)},
afJ(d){return this.cka(d)},
cka(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.q0()){w=1
break}if(!t.zz()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eQq)
w=1
break}w=3
return B.b(t.aNe(),$async$afJ)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d2(new C.eqV(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afJ,v)},
c7_(){var w,v,u=this
if(u.k6())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cwQ()}},
cwQ(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d2(new C.esM(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bVL(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d2(new C.epg(this,r,u.d))},
c_i(d){var w
if(this.k6())return!1
w=this.e
if((w==null?null:C.ks(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fxz(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c_j(d){var w
if(this.k6())return!1
w=this.e
if((w==null?null:C.ks(w.w))!==!0)return!0
if(!this.zz())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fxz(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
MZ(d){return this.bzS(d)},
bzS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$MZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.q0()){w=1
break}if(!t.zz()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.ePg)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aoK(p),$async$MZ)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.ePV)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6x(r)
w=1
break}t.m(new C.enG(t,d,o))
t.o1()
$.aU.x1$.push(new C.enH(t))
case 1:return B.h(u,v)}})
return B.i($async$MZ,v)},
V4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$V4)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bBh(),$async$V4)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d2(new C.emS(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V4,v)},
NI(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nU(),$async$NI)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jH()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fAP(r),$async$NI)
case 4:q=e
if(q==null){w=1
break}t.d2(new C.eoI(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NI,v)},
iO(d){this.d2(new C.en0(this,d))},
pQ(d){return this.bz3(d)},
bz3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.q0()){w=1
break}m=!D.aM7.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nU(),$async$pQ)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.GT()
w=1
break A
case"sign_paper":t.MQ()
w=1
break A
case"hd_photo":t.V4()
w=1
break A
case"sharpen":t.NI()
w=1
break A
case"print":t.D9()
w=1
break A
case"rotate":s=t.jH()
if(s!=null)t.d2(new C.en9(s))
w=1
break A
case"text_box":t.aLf()
w=1
break A
case"picture":t.V6()
w=1
break A
case"present":t.b4s()
w=1
break A
case"new_slide":t.a7p()
w=1
break A
case"export_json":t.HF()
w=1
break A
case"outline_share":t.Jw()
w=1
break A
case"flashcard_tool":t.uV(D.Hu)
w=1
break A
case"quiz_tool":t.uV(D.Hv)
w=1
break A
case"worksheet_tool":t.uV(D.Hw)
w=1
break A
case"duplicate_el":s=t.jH()
if(s==null){w=1
break A}t.d2(new C.ena(t,s))
w=1
break A
case"delete_el":t.arg()
w=1
break A
case"bring_fwd":s=t.jH()
if(s==null||t.gdr()==null){w=1
break A}t.d2(new C.enb(t,s))
w=1
break A
case"send_back":s=t.jH()
if(s==null||t.gdr()==null){w=1
break A}t.d2(new C.enm(t,s))
w=1
break A
case"align_left":s=t.jH()
if(s!=null)t.d2(new C.enp(s))
w=1
break A
case"align_center":s=t.jH()
if(s!=null)t.d2(new C.enq(s))
w=1
break A
case"align_right":s=t.jH()
if(s!=null)t.d2(new C.enr(s))
w=1
break A
case"grayscale":case"brighten":t.NI()
w=1
break A
case"flip_h":s=t.jH()
if(s!=null)t.d2(new C.ens(s))
w=1
break A
case"flip_v":s=t.jH()
if(s!=null)t.d2(new C.ent(s))
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
case"arrow":t.oO(D.Cj)
w=1
break A
case"line":case"divider":t.oO(D.fp)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.fk(q,new C.enu()),o=0;p.C();){n=A.a.fA(A.a.i(q.gS(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.env(),B.U(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iO(C.iR(A.L,!1,t.gq4().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mw,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iO(C.iR(A.L,!1,t.gq4().e.l(),A.aD,22,A.bl,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iO(C.iR(A.bg,!0,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.u8,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iO(C.iR(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.u7,0.8,0.1,0.22))
w=1
break A
case"quote":t.iO(C.iR(A.L,!1,4279310375,A.aD,24,A.cD,A.a5,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iO(C.iR(A.bg,!1,4284773515,A.aD,14,A.bl,A.a5,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.u8,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iO(C.iR(A.dL,!1,4279310375,A.aD,14,A.bl,A.a5,0.08,C.cC(),C.bBj(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iO(C.iR(A.dL,!1,4279310375,A.aD,13,A.bl,A.a5,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d2(new C.enc(t))
w=1
break A
case"footer_bar":t.d2(new C.end(t))
w=1
break A
case"highlight":t.d2(new C.ene(t))
w=1
break A
case"redact":t.d2(new C.enf(t))
w=1
break A
case"callout":t.d2(new C.eng(t))
w=1
break A
case"checkboxes":t.iO(C.iR(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d2(new C.enh(t))
w=1
break A
case"letter":t.iO(C.iR(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.82,C.cC(),C.bBj()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iO(C.iR(A.bg,!1,4279310375,A.aD,22,A.bl,A.P,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.u8,0.8,0.1,0.12))
w=1
break A
case"toc":t.iO(C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iO(C.iR(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mw,0.32,0.62,0.08))
w=1
break A
case"draft":t.iO(C.iR(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iO(C.iR(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d2(new C.eni(t))
w=1
break A
case"progress":t.d2(new C.enj(t))
w=1
break A
case"stars":t.iO(C.iR(A.L,!1,4279310375,A.aD,36,A.bl,A.a5,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q2,0.8,0.1,0.4))
w=1
break A
case"equation":t.iO(C.iR(A.L,!1,4279310375,A.aD,32,A.bl,A.P,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iO(C.iR(A.L,!1,4279310375,A.aD,18,A.bl,A.a5,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.u7,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d2(new C.enk(t))
w=1
break A
case"compare":t.d2(new C.enl(t))
w=1
break A
case"link_text":t.iO(C.iR(A.bg,!1,4280640491,A.mB,16,A.bl,A.a5,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iO(C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iO(C.iR(A.bg,!1,4280640491,A.aD,18,A.bl,A.a5,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d2(new C.enn(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d2(new C.eno(t,r))
w=1
break A
case"invoice":t.iO(C.iR(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iO(C.iR(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bBj()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iO(C.iR(A.bg,!1,4279310375,A.aD,17,A.bl,A.a5,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iO(C.iR(A.bg,!1,4279310375,A.aD,15,A.bl,A.a5,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pQ,v)},
cqB(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eI9.t(0,this.z)},
cqA(d){if(this.jH()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b63(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ch,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i0e(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Nm,A.f,p,p,D.DC,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fx,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bL6(d){var w,v=null,u=this.jH()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.PP,new C.eoH(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uV(d){return this.bxJ(d)},
bxJ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aM2.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nU(),$async$uV)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.en1(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eGW
w=h.e
if(w==null)return h.bBw()
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
m=t?A.bX:D.b8O
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRI()}else j=!1
if(j)k.push(new C.a71(h.a.c,!1,h.e.gb8f(),h.gc6X(),g))
else if(s&&h.e!=null&&!h.k6()&&C.cd_(h.e.w)){j=h.a
k.push(new C.a71(j.c,j.d,g,h.gc85(),g))}if(s)k.push(h.bL2(w,t,r))
if(s&&h.k6()){w=t?A.fl:A.ke
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bJi,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fl,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AH,A.ix,g,g,g))}w=!n
if(w&&!h.k6())k.push(h.c0e(t,r))
if(w&&h.k6())k.push(h.cxP(t))
if(r&&h.jH()!=null&&w&&!h.k6())k.push(h.c0a(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b3Y(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b3Y(t,!1),g))
i.push(B.D(new B.bH(A.b0,g,g,h.bCO(v,t,!s||p),g),1))
if(h.cqB(r)&&u&&s&&!h.k6())i.push(h.c6L(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.k6()&&h.cqA(!1))j.push(new B.a7(240,g,h.bNC(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c0b(t))
return B.c8(g,m,B.bn(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bBw(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bX:A.bM
v=r.a.e
u=r.c60(A.bj,A.pI,new C.enK(r),r.gcaf(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aKY(A.bj,A.hx,"Blank Presentation",new C.enL(r)),1),A.av,B.D(r.aKY(A.aZ,A.y2,"Class Template",new C.enM(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bx,s,A.mA,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.byw(w))
else{t=new B.hX(t,B.U(t).k("hX<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.enN(r,w),x.l))}return B.c8(q,p,B.bn(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bJl(){this.m(new C.eon(this))
var w=this.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900){w=$.aU.ak$.d.c
if(w!=null)w.jx()}},
aeq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jH()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.eqy(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeq)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeq,v)},
Aw(d,e){return this.cqX(d,e)},
cqX(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Aw=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.VU,!0,"Dismiss",j,new C.es6(),new C.es7(d,e),A.iv,!0,x.N),$async$Aw)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahN()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRI()){r.ahN()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOK(d),$async$Aw)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aO9(j,q,d.b),$async$Aw)
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
return B.b(r.ER(d,!1),$async$Aw)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hR(D.VU,!0,"Dismiss",j,new C.es8(),new C.es9(d),A.a1,!0,x.y),$async$Aw)
case 20:if(g===!0)r.Nu(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.aft("Rename presentation",d.b),$async$Aw)
case 24:l=g
if(l!=null)r.clp(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.af()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.esa(r,k))
r.p7()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Aw,v)},
b_3(d,e){var w=null
return B.bK(!1,D.foo,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lH,w,w,w,w,w,A.km,w,w))},
byw(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.en6(this,d),null)},
bHt(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.eob(),x.dv).c_(0,new C.eoc()),v=B.B(w,w.$ti.k("J.E"))
return new B.C(G.afY,this.aLx(v,e,new C.eod(),f),null)},
aLx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aW(6,6)
r=new B.aA(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.bv,n,n,n,10),A.q9],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cm(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bq(s,s,s,s),n,n,A.n),n,n,n,n,A.n5,n,n,n))
A.d.v(l,u)}return B.f3(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
byu(d,e,f){return this.aLx(d,e,null,f)},
bHv(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d8X
else if(v==="hati_kuhoweya")w=D.cWo
else{if(v==="hati_kiapo_uongozi")v=D.cJE
else v=C.ks(v)?D.cQz:A.Pq
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eog(this,f,d,e,w),null)},
c0b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jH()
if(i==null||i.b!==D.cQ)return A.bH
w=k.VY(i)
v=k.asg(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.C(A.AK,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b4,B.bK(!1,D.fk9,j,j,!0,j,j,new C.epH(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h6,B.c_(new B.C(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bPc,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.w4,j,j,j,j,j,j,!1,"\u2022",j,new C.epI(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zf,A.am,j,A.SB,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.D(B.cd(B.A(B.a([k.tF(G.Ml,j,new C.epJ(k,i),d),k.tF(G.Zr,j,new C.epK(k,i),d),k.tF(I.ake,j,new C.epL(k,i),d),k.tF(I.a_7,j,new C.epM(k,i),d),k.tF(k.bys(i.as),j,new C.epN(k,i),d),k.tF(D.alq,j,new C.epO(k,i),d),k.tF(D.alp,j,new C.epP(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(O.ag6,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lb,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c0a(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jH()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cw,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b2C(A.jg,"Edit",new C.eps(o,m),d,!0))
if(w===D.lm)p.push(o.b2C(A.FX,"Shape & ring",new C.ept(o),d,!0))
p.push(o.tF(A.Bu,"Format",new C.epu(o),d))
if(v)A.d.v(p,B.a([o.tF(G.Ml,n,new C.epv(o,m),d),o.tF(D.alq,n,new C.epw(o,m),d),o.tF(D.alp,n,new C.epx(o,m),d)],q))
p.push(A.b4)
p.push(o.coQ(A.e4,n,o.gaPv(),d,!0))
p.push(o.tF(A.hy,"Done",new C.epy(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AI,A.lb,n,n,n)},
bys(d){switch(d.a){case 2:return D.a_4
case 1:case 5:return D.a_6
default:return D.a_5}},
c11(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dL
default:return A.bg}},
ayB(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gh:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qP,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eA(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tF(d,e,f,g){return this.ayB(d,e,f,g,!1,!1)},
b2C(d,e,f,g,h){return this.ayB(d,e,f,g,h,!1)},
coQ(d,e,f,g,h){return this.ayB(d,e,f,g,!1,h)},
bL2(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mN],m)
w=B.I(e?A.aK:A.pg,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cw,18)],x.V)
u=p.a1Q(A.eA,"Back",p.gbEz(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dq(1,A.cj,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tj,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.k6()){u=p.a1Q(A.r3,"Undo",p.ax.length===0?o:p.gcyj(),e)
A.d.v(r,B.a([u,p.a1Q(D.bCT,"Redo",p.ay.length===0?o:p.gck6(),e)],q))}r.push(p.a1Q(A.xJ,"PDF",new C.eoA(p),e))
r.push(p.a1Q(A.hz,"Download as video",new C.eoB(p),e))
if(!p.k6())r.push(B.Bu(o,o,B.W(A.nU,e?A.ad:A.bv,o,o,o,o),new C.eoC(p),A.J,new C.eoD(p),A.af,"More",x.N))
r.push(A.d8)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eA(D.e4e,o,new B.o(o,o,o,B.m(14),o,K.Gh,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazq(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.boS,D.btZ,o,o,o)},
cxP(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.iv(A.tP,"Print",new C.esS(w),d),w.iv(A.xJ,"Download PDF",new C.esT(w),d),w.iv(A.pP,"Present",w.gazq(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AH,G.ahL,v,v,v)},
a1Q(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dn
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c8)},
c0e(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.epS(r,d),t),t.k("ak.E"))
t.push(new B.C(Y.ahq,new B.fh(new C.epT(r),q),q))
A.d.v(t,w?B.a([new B.C(R.vg,r.ag5(A.lc,"Ending celebration",r.gcas(),d),q),new B.C(R.vg,r.ag5(A.FX,"Logo ring & frame",r.gcb8(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.C(R.vg,r.ag5(A.n8,"Look and feel",r.gcb9(),d),q),new B.C(R.vg,r.ag5(A.oH,"Edit this slide's text",r.gcbG(),d),q)],x.p):A.ha)
t.push(new B.C(R.vg,B.hp(B.aE(q,B.p(q,D.eGp,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.l6.j(0.4),A.J,10)],x.V),D.ano,A.n),q,34,q,q,A.fT,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.epU(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bur,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cmz(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AH,q,q,q,q)},
cmz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d33[v]
u.a=null
s=u.a=t.b
w.push(e.lB(e.cof(s),t.a,new C.erg(u,e),a3,D.aM2.t(0,s)))}w.push(e.iv(A.kL,"Notes Slide",new C.erh(e),a3))
w.push(e.lB(A.FW,"Quiz",new C.eri(e),a3,!0))
w.push(e.lB(L.Fz,"Worksheet",new C.ert(e),a3,!0))
w.push(e.lB(V.FZ,"Flashcard",new C.erE(e),a3,!0))
w.push(e.lB(A.Nc,"Lab Report",new C.erP(e),a3,!0))
w.push(e.lB(A.xP,"Rubric",new C.erW(e),a3,!0))
w.push(e.lB(A.oB,"Minutes",new C.erX(e),a3,!0))
w.push(e.lB(A.pN,"Syllabus",new C.erY(e),a3,!0))
w.push(e.lB(A.Ng,"Timeline",new C.erZ(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d4g[v]
w.push(e.lB(r.b,r.c,new C.es_(e,r),a3,!D.aM7.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iv(A.y5,a0,e.gaLe(),a3),e.iv(A.tM,"Picture",new C.erj(e),a3),e.iv(A.xZ,"Bio link",new C.erk(e),a3),e.iv(A.a_B,"Table",new C.erl(e),a3),e.iv(A.Nf,"Sticky",new C.erm(e),a3),e.iv(A.tL,"Divider",new C.ern(e),a3),e.iv(A.Bv,"Header",new C.ero(e),a3),e.lB(A3.vo,"Rectangle",new C.erp(e),a3,!0),e.lB(A.qU,"Circle",new C.erq(e),a3,!0),e.lB(A.ZX,"Triangle",new C.err(e),a3,!0),e.lB(A.iz,"Arrow",new C.ers(e),a3,!0),e.lB(D.bBn,"Parallelogram",new C.eru(e),a3,!0),e.lB(D.bDQ,"Hexagon",new C.erv(e),a3,!0),e.lB(A.tL,"Line",new C.erw(e),a3,!0),e.lB(A.xJ,"PDF",new C.erx(e),a3,!0),e.lB(N.a_K,"Signature",new C.ery(e),a3,!0),e.iv(A2.Bl,"Quote",new C.erz(e),a3),e.iv(D.Zz,a1,new C.erA(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=x.p
t=B.A(B.a([e.aM3("Wide 16:9",D.Ch,a3),e.aM3("Short 9:16",D.o2,a3),new B.C(A.fx,B.mE(D.bFY,d,D.fgv,d,new C.erB(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bEO("This slide",!e.Q,a3,new C.erC(e)),A.bp,e.aOe("All slides",e.Q,a3,new C.erD(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bEP()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1y,new C.erF(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d5b[v]
j=B.b0(k)
i=new B.aA(k===4294967295?A.dn:A.b2,1.5,A.q,-1)
l.push(new B.C(A.fx,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.erG(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bCC()
g=B.U(h).k("K<1,C>")
h=B.B(new B.K(h,new C.erH(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.O,q,A.an,p,A.O,o,A.at,n,A.O,m,A.at,l,A.O,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.an,e.bY7(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jH()
w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=new C.erf(e)
t=new C.es0(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.PP,f.dy,new C.erI(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.PP,q,new C.erJ(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iv(A.kL,w,new C.erK(e),a3),e.iv(A.tP,"Print deck",new C.erL(e),a3),e.lB(D.aji,"Export JSON",new C.erM(e),a3,!0),e.iv(A.fK,"Duplicate Slide",e.gaQk(),a3),e.iv(A.e4,a2,e.gaPw(),a3),e.cse(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jH()
w=x.p
u=B.a([e.iv(D.Zz,a1,new C.erN(e),a3),e.iv(A.fK,"Duplicate",e.gaQk(),a3),e.iv(A.e4,a2,e.gaPw(),a3),e.iv(A.pP,"Present",e.gazq(),a3),e.iv(A.Bt,a0,e.gaLe(),a3),e.iv(A.Bo,"Fit Text",new C.erO(e),a3),e.iv(A.xJ,"Download PDF",new C.erQ(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iv(A.kN,"Transfer",new C.erR(e),a3))
if(f!=null){w=B.a([A.ab,e.iv(G.Ml,"Bold",new C.erS(e,f),a3),e.iv(G.Zr,"Italic",new C.erT(e,f),a3),e.iv(G.aiU,"Underline",new C.erU(e,f),a3),e.iv(Ae.Mm,"Bullets",new C.erV(e,f),a3),e.bNl(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bL6(a3))
w.push(e.iv(D.bA1,"Delete",e.gaPv(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aM3(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o2
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7g,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bF9],v))
return new B.C(A.fx,B.jI(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.enF(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cse(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cp,A.q,1)
u=B.m(8)
t=B.W(A.Fx,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amo,q,q,q,new C.esn(r,p),q,q,q,q,q,A.c8)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amf,q,q,q,new C.eso(r,p),q,q,q,q,q,A.c8)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fd,A.mi,q,q,q)},
cof(d){switch(d.a){case 6:return V.FZ
case 7:return A.FW
case 8:return L.Fz
case 4:return A.Bv
default:return A.kL}},
bNl(d,e){var w=null,v=B.I(e?A.b2:A.cp,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amo,w,w,w,new C.eoN(this,d),w,w,w,w,w,A.c8),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amf,w,w,w,new C.eoO(this,d),w,w,w,w,w,A.c8)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xs,A.mi,w,w,w)},
bY7(d){var w=null
return B.Bu(B.D_(B.W(A5.ZC,d?A.ad:A.bv,w,w,w,16),w,w,D.flX,w,w,w),w,w,new C.epk(),A.J,this.gbz9(),A.ck,"Slide layout",x.fO)},
lB(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dp:A.aL,A.q,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Nm,A.f,w,w,D.DC,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fx,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eA(new B.C(A.h6,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cX,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iv(d,e,f,g){return this.lB(d,e,f,g,!1)},
b3Y(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hH(t,new C.esz(u,s,e,d),s.r.length,A.ck,t,w,new C.esA(e),!1)
s=d?A.aB:A.bM
w=B.a([],x.p)
if(e&&!u.k6())w.push(new B.C(A.ck,B.Hi(E.amB,new C.esB(u),B.nw(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aML,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bCO(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o2?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bH(A.b0,v,v,new B.fG(w,B.aE(v,B.cp(new C.eo3(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eo4(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bCQ(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ks(a9.w))===!0,b1=b0&&C.fxz(b3),b2=b0&&b3.b===D.kS&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.k6())v=!b0||a7.c_j(b3)
else v=!1
if(!a7.k6())u=!b0||a7.c_i(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cd:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fW1(b3))o=a8
else if(p&&!a7.k6())o=a7.gc6Z()
else o=a7.k6()?a8:new C.enS(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jf
i=w&&C.fW1(b3)&&a7.zz()?new C.enT(a7,b3):a8
h=v&&b3.b===D.cQ?new C.enU(a7,b3):a8
g=u?new C.enV(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.kS?A.K:a8
if(b1){a1=a7.k6()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bT,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zz()
a3=b3.b===D.cQ
a4=a3?a7.VY(b3):a8
a5=a3?a7.asg(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bT,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.enW(a7,b3):a8
a3=v&&a3?new C.enX(a7,b3):a8
a6=C.b_N(q,a4,a1,b3,a5,a2,a3,new C.enY(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bHY,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.enZ(a7,b3,b4,b5),a8,a8,new C.eo_(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.k6()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bIC,A.f,a8,a8,new B.o(A.dz,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbVK(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.k6()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bK9,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eo0(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bT,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fuw,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kJ,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eo1(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eC(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOe(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.Nm,A.f,r,r,D.DC,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bEO(d,e,f,g){return this.aOe(d,e,f,g,!1)},
c6L(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b3,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aB:A.aQ
t=f?A.wv:l
if(f)s=new B.bP(new B.aA(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rn,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b4,m.b_3(e,new C.epW(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.an,B.D(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.epX(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aRB(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jH()
if(a2==null)return A.bH
w=new C.ep0(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b4,a0.b_3(a3,a0.gbJk())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fh_,B.D(B.kU(a1,a1,a1,u,0.05,new C.ep1(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.ft_,B.D(B.kU(a1,a1,a1,t,0.05,new C.ep2(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fb_,B.D(B.kU(a1,a1,a1,96,10,new C.ep3(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lm
if(l||n===D.kS||n===D.R7)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fmD,B.D(B.kU(a1,a1,a1,s,0,new C.ep4(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fuf,B.D(B.kU(a1,a1,a1,r,0,new C.ep5(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BK[j]
i.a=null
g=h.a
i.a=g
k.push(B.jI(a1,a1,a1,new B.x(h.b,a1,A.qe,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ep6(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bY(A.bz,k,A.br,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BF[j]
f.a=null
g=e.a
f.a=g
h.push(B.jI(a1,a1,a1,new B.x(e.b,a1,A.qe,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ep7(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.an,k,A.O,i,A.an,B.bY(A.bz,h,A.br,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.ep8(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bY(A.bz,l,A.br,6,6),A.ac,B.h6Z(new C.ep9(w,a2),D.cl0,B.ew([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.epa(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bY(A.bz,m,A.br,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bJW,D.foA,new C.epb(a0,a5),B.bk(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wv:a1
if(a4)o=new B.bP(new B.aA(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rn,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EX,a1,a1,a1)},
bNC(d){return this.aRB(d,!1,!1,null)},
c60(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.epe(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f15,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.D(B.v(B.a([w,A.bB,A.cX,r.byu(D.cO8,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dW(B.hp(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eA(D.eLI,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.ek,8)],p),D.ant,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b5D,D.b60],v):B.a([A.c,A.ke],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cw,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aKY(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.emO(this,g,d,e,f),null)},
aft(d,e){return this.cis(d,e)},
cis(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$aft=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b3,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.eqT(d,q),p,null,!0,!0,x.N),$async$aft)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aft,v)},
Pl(d){var w=d.bS()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.by(w)}}
C.aej.prototype={}
C.axH.prototype={
U(){return new C.bbg(null,null)}}
C.bbg.prototype={
gcur(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.by(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pC,u,1,u,v)
w.f9(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bj(u,D.bnm,u,1,u,v)
w.cq(0)
v.e!==$&&B.aO()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.brW()},
Iy(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cr.aw(0,new B.hN(w,v,A.cr).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.bsP,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cZE(this),v),v),v,v,v)}}
C.bbu.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.C(D.bt5,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.C(D.bsh,B.v(B.a([B.p(w,D.bII,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fqE,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f2e,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bmq,B.A(B.a([B.D(B.bK(!1,D.fff,w,w,!0,w,w,new C.d__(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n2,w,A.o6,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.fku,w,w,!0,w,w,new C.d_0(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n2,w,A.o6,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.UH,new B.o(A.aB,w,u,v,D.cOs,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jh.prototype={
U(){return new C.bbf()}}
C.bbf.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dD,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dW(B.dc(B.aE(o,B.vc(B.dh(o,B.A(B.a([r,A.av,new B.dq(1,A.cj,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.nQ,o,o,1/0),A.cr,A.ja,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cZz(p,d),new C.cZA(p),new C.cZB(p),new C.cZC(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.P_.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eB,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.no,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.ZP.prototype={
U(){return new C.aDe(D.dd,null,null)}}
C.aDe.prototype={
gYa(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bmX,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b4n(d){if(!this.a.c.ay)return
this.x=d
this.gYa().ir(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.auC(D.eS3)
C.hYa()
v.QK()},
q(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.gYa().q()
v=w.z
if(v!=null)v.a8(0)
C.auC(D.eS4)
C.hYd()
w.bu3()},
cxc(){B.je()
this.m(new C.ety())
var w=this.c.I(x.q).f
w.a3Y()
if($.bj0)w.R(D.eOW)},
QK(){var w,v=this,u=v.f
if(u!=null)u.a8(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h59(u,w),1,120)),new C.eto(v))},
cwS(){var w,v=this
v.m(new C.etx(v))
if(v.r)v.QK()
else{w=v.f
if(w!=null)w.a8(0)}},
gaTs(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cr2(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.m(new C.etp(w))
v=w.z
if(v!=null)v.a8(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l8,new C.etq(w))},
av5(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a8(0)
if(u.a.c.ch){u.m(new C.etk(u))
u.QK()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTs()){u.cr2()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.etl(u,A.o.G(w+1,s)))
u.b4n(w)
u.QK()}},
ch6(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a8(0)
v.m(new C.etm(v))
v.QK()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.etn(v,w,t))
v.b4n(w)
v.QK()}},
csr(d){var w,v=this,u=v.e
if(u===D.ch){u=v.d
u===$&&B.c()
return new B.nb(d,new B.cx(u,x.ac))}w=v.css(u)
u=v.d
u===$&&B.c()
return B.q8(new B.nb(d,new B.cx(u,x.ac)),w,new C.etv(),A.bc,A.bc,new C.etw(v))},
css(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bni
case 16:return A.kg
case 18:return A.n_
default:return A.n0}},
csq(d,e,f){var w,v,u,t=null,s=B.cJ(A.cr,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cY(s,!1,e,t)
case 2:case 17:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.ug,A.J,w),w.k("bf<bI.T>")),t,!0)
case 3:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.Rn,A.J,w),w.k("bf<bI.T>")),t,!0)
case 4:case 21:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.ig,A.J,w),w.k("bf<bI.T>")),t,!0)
case 5:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.uf,A.J,w),w.k("bf<bI.T>")),t,!0)
case 6:case 16:w=x.b
return B.ij(A.A,new B.cY(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bI.T>")))
case 7:w=x.b
return B.ij(A.A,new B.cY(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bI.T>")))
case 8:return B.c6(s,new C.etr(s),e)
case 9:return B.c6(s,new C.ets(s),e)
case 10:return B.c6(s,new C.ett(s),e)
case 11:return B.c6(s,new C.etu(s),e)
case 12:w=x.b
return new B.cY(s,!1,B.ij(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bI.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jt(B.jl(e,new B.bf(s,new B.bo(A.ug,A.J,v),v.k("bf<bI.T>")),t,!0),A.r,new C.bq_(w,t))
case 15:w=x.K
return B.jl(e,new B.bf(s,new B.bo(A.Rn,A.J,w),w.k("bf<bI.T>")),t,!0)
case 19:w=B.dm()
w.mE((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jB(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eC(A.A,(1-s.gp(0))*0.2,new B.cY(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jt(new C.ang(B.c6(n.gYa(),new C.etz(n,v,w),m),m),A.r,m)}else{t=B.rn(new C.Ig(w,!0,!1,m))
l=B.b0(w.e)
u=n.csr(B.ek(B.jt(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h59(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ob,m,m,m),A.bp,D.bKY],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fH,m,m,m)
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
l.push(B.bZ(0,new C.MW(new C.E8(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o2?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jt(B.ue(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bj0){r=B.Hi(A.kP,new C.etA(d),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bn(!0,B.A(B.a([r,A.ab,B.Hi(B.W(n.r?Ak.xX:A.iT,m,m,m,m,m),n.gcwR(),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ho,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fH,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bn(!0,B.aE(A.c5,B.p(A.l1,$.bj0?A.bH:s,A.f,m,m,m,m,64,m,m,D.bo3,m,m,150),A.y,!1,m,n.gcxb(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.etB(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jo.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.C(E.ahc,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZx,w,w,w,w,w,w,w,w)}}
C.bq_.prototype={
iY(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jE(d){return d.b!==this.b}}
C.bg7.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aWk
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dh(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vE,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bg6.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dhg.h(0,p)
if(o==null)o=D.d4p
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.alC:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eo,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aIU.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aKW.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.bvH.prototype={}
C.aKX.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
C.b_Q.prototype={}
C.Vi.prototype={
U(){return new C.aDc()},
beV(d){return this.e.$1(d)}}
C.aDc.prototype={
gb2I(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9E(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb2I()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaMU(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb2I()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb3X(){return A.d.cI(this.ga9E(),0,new C.et4())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Ql()},
Ql(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ql=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b0q(s.c,s.f),$async$Ql)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.et0(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Ql,v)},
IA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9E()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fAL(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oZ(o,q.c,q.f),$async$IA)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.et3(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).c8(q),$async$IA)
case 4:q=t.a
w=5
return B.b(B.oY(q.c,q.f),$async$IA)
case 5:w=6
return B.b(t.Ql(),$async$IA)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IA,v)},
QI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hv(o,D.dUq,!0,"NgmySlidesTransferScan",x.N),$async$QI)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.et1(t))
w=4
return B.b(C.ags(s),$async$QI)
case 4:r=e
t.m(new C.et2(t))
o=J.a5(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eNP)
w=1
break}w=5
return B.b(t.a.beV(r),$async$QI)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QI,v)},
Iz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Iz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9E()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oZ(s,r.c,r.f),$async$Iz)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fB_(null,A.d.gL(n),s,t.a.f)}else q=C.fB_(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.G0(q,"ngmy_slides_"+p,!1),$async$Iz)
case 4:o=e
s=t.a
w=5
return B.b(B.oY(s.c,s.f),$async$Iz)
case 5:w=6
return B.b(t.Ql(),$async$Iz)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Iz,v)},
a20(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a20=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.et5(t))
w=3
return B.b(C.bB0(),$async$a20)
case 3:s=e
t.m(new C.et6(t))
if(s==null||J.cl(s)){w=1
break}w=4
return B.b(t.a.beV(s),$async$a20)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a5(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a20,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.db:A.bM,k=o.ga9E().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bS(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.W(A.cA,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.et9(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zc],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.W(A.pI,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bLt,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eB,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bx0],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aE(A.c5,D.eLK,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcbS(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0e,A.n),n,n,n,n,E.Y5,n,n,1/0),A.e1,o.awi(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aVG(A.pP,m,new C.eta(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.D(o.aVG(D.bBf,m,new C.etb(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awi(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bV,n,n,n))}else A.d.v(v,new B.K(u,new C.etc(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mA)
w.push(o.awi(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.ap1(A.aT,k,!0,A.jj,m,o.r,o.gc64(),"Scan on another device","Show QR"),1),A.av,B.D(o.aKZ(A.jO,!0,A.iU,m,o.gcnQ(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bwZ(A.aV,k,A.hz,m,o.r,o.gc61(),"Download .json","Backup file"),1),A.av,B.D(o.aKZ(A.aH,!0,Ax.y7,m,o.gczy(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.W(A.le,A.bj.j(0.9),n,n,n,18)
r=o.gaMU()
q=o.gb3X()
p=o.gb3X()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.A(B.a([s,A.av,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bn(!0,B.v(B.a([new B.C(Ag.LX,i,n),B.D(B.cB(w,n,D.brr,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.V_,A.f,A.dA,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeD(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i3t(s,t.d,t.e),$async$aeD)
case 2:return B.h(null,v)}})
return B.i($async$aeD,v)},
awi(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aVG(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cw,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eA(new B.C(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bHu(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bLE,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qU
if(p)r=A.bj
else r=e?A.b2:A.dn
return new B.C(A.cH,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.et_(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
ap1(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qS,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.am9,A.f,s,s,D.aZj,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eA(new B.C(E.XM,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aKZ(d,e,f,g,h,i,j){return this.ap1(d,e,!1,f,g,!1,h,i,j)},
bwZ(d,e,f,g,h,i,j,k){return this.ap1(d,e,!1,f,g,h,i,j,k)}}
C.Vj.prototype={
U(){return new C.bj_()}}
C.bj_.prototype={
a_(){this.a1()
this.adu()},
adu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fB_(null,A.d.gL(m),k,r.a.f):C.fB_(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ks(A.d.gL(n).w))C.fAL(A.d.gL(r.a.d),D.d2q)
n=r.a
m=n.c
n=C.i0u(n.d)
w=7
return B.b(C.fAZ(p,C.i0z(r.a.d),n,m,q),$async$adu)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.etd(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ete(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.db:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.etf())
v=B.aH(j,j,j,j,B.W(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.etg(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zc],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.ds,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0e,A.n),j,j,j,j,E.Y5,j,j,1/0)
q=B.m(24)
s=B.I(A.aT.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6E,A.L,j,j))
else if(k.d==null)r.push(D.e3O)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cw,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.ffI,A.an,B.aE(j,B.p(j,B.A(B.a([D.bNb,A.av,B.d(m,j,j,j,j,j,j,D.f2C,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bRF,A.n),j,j,j,j,A0.agZ,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eth(k,d),j,j,j,j,j,j,!1,A.a8),A.O,D.fk0,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pE(j,j,!1,l,j,!0,!0,j,!1,D.bj4),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hp,A.L,j,j))
return B.c8(j,h,B.bn(!0,B.v(B.a([new B.C(Ag.LX,v,j),B.D(B.cd(B.v(B.a([t,A.aP,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bTA,A.n),j,j,j,j,A.tz,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahh,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aD9.prototype={
U(){return new C.aDa(new B.ar(A.as,$.aw()),B.kj(!0,null,!0,!0,null,null,!1))}}
C.aDa.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.emI(w))
$.aU.x1$.push(new C.emJ(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYf(){var w,v=this.c
v.toString
w=C.yg(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.ue,36),D.aa6],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bIL,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fcY,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aZK,k,k,k,k,A.xr,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge6()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aW(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.aA(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bi,B.dh(A.A,new B.x(p,k,D.eXk,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bP(m,m,m,m),new B.bq(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Iq)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bPV,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u5(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AY(5,k),new C.btd()],x.aS),k,k,A.aNZ,k,5,k,1,k,k,!1,"\u2022",k,new C.emE(l),k,new C.emF(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.lX,k,k,k,k),0),0,0,0)],a1)
d=C.yg(w.a.a.toUpperCase())==null?k:l.gc65()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cV(Ad.JK,B.p(k,B.bw(e,B.v(B.a([a0,new B.C(D.brW,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fbo,A.bx,new B.a7(1/0,50,B.bJ(D.fru,d,B.bk(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.an,B.bK(!1,A.np,k,k,!0,k,k,new C.emG(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.btd.prototype={
om(d,e){var w=e.a.toUpperCase()
return e.cFI(B.h8(A.bu,w.length),w)}}
C.aq7.prototype={
U(){return new C.aDd(B.yQ(A.Lc,A.nw,A.tY))}}
C.aDd.prototype={
q(){this.d.q()
this.a2()},
aYe(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iL(w,d)},
a9y(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fJw(s),$async$a9y)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYe("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9y,v)},
c63(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i0x(w[u])
if(t!=null){this.aYe(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vB,s,s,s,t.gbLB(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.W(q?A.qZ:Al.MT,s,s,s,s,s),s,s,s,new C.etj(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fsI,s,s,s,1,s,!0)
r=B.yP(t.d,A.bQ,t.gc62())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b_,A.r,B.a([r,w,B.ao(32,B.p(s,D.fgL,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jd,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.btp.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bGW,A.f,w,w,D.aZt,w,56,w,w,w,w,w,56),A.aP,D.fso,A.an,new B.kb(this.c,new C.f3x(),w,w,x.cI),A.aP,new B.kb(this.d,new C.f3y(),w,w,x.cl),A.ac,D.fsl],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.JK,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.Yc,D.bsy,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a71.prototype={
U(){return new C.biJ(A.bw)},
gdd(){return this.c}}
C.biJ.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Zm()
w.d=B.dA(A.h4,new C.ebd(w))},
q(){var w=this.d
if(w!=null)w.a8(0)
this.a2()},
Zm(){return this.ckd()},
ckd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ebb(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cd0(p.c),$async$Zm)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.m(new C.ebc(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Zm,v)},
bNt(d){var w,v,u=d.a,t=A.o.an(u,36e8)
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
return B.p(r,B.A(B.a([B.W(A.Fx,v,r,r,r,20),A.av,B.D(B.d("Marriage document session \xb7 "+s.bNt(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ag1,A.ix,r,r,1/0)}}
C.a7U.prototype={
n5(){var w,v,u,t=this
t.wR()
w=t.cx
v=t.c
w.boA(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pL(B.F(["/S",D.e7t,"/URI",new B.rk(B.VR(w.as),A.uh,!0)],x.N,u),u))}}
C.a7V.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b1t.prototype={
bw2(d,e,f,g,h,i,j,k,l,m){var w=B.ew([D.e5M],x.di)
this.w!==$&&B.aO()
this.w=w},
gcIY(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jK(w,new C.cfc(),B.a3(w).k("jK<cn.E,H>")).fo(0,new C.cfd())},
aBH(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.th(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j8(d.a,d.b))
s.n(0,"/Border",B.th(O.anS))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcIY()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pL(w,x.Y))}}
C.cfe.prototype={}
C.a27.prototype={}
C.ahj.prototype={}
C.aPU.prototype={
fX(d){var w,v,u,t,s,r,q=this,p=null
q.lc(d)
q.Lv(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beh(w)
u=x.N
t=x.Y
s=new C.cfe(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bw2(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pL(B.F(["/Type",D.e7r],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7U(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.avA.prototype={}
C.aRo.prototype={
fX(d){var w,v,u,t,s=this
s.lc(d)
w=s.b
if(w!=null){v=B.dm()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.i0()
t=s.a
t.toString
u.KD(t)
u.RY(0)
u.oH(0,v)
w.fX(d)
u.n8(0)}}}
var z=a.updateTypes(["ay<~>()","~(lB)","R(hZ)","~()","R(eI)","R(oe)","R(lB)","~(hZ)","R(eI,eI)","Jo(Y)","R(nG)","R(l8)","ay<R>()","H(H,hZ)","a4<n,@>(hZ)","aj<z8>()","n(nG)","R(a7i)","n(lB)","n(vJ)","R(Eh)","H(hZ,hZ)","n(eI)","r(eI)","cL(eI)","r(hw)","~(hw)","eI(uv,N,N,N,N,H{fx:n,key:n,rotation:N})","eI(n,N,H)","H(oe,oe)","R(z8)","R(n,aj<z8>)","a4<n,@>(oe)","nG()","XW(Y)","eI(n,N,N,N,N,N{align:pS,anim:hw,bullets:R,color:H?,delay:H,fx:n,key:n,style:Hc,weight:qd})","a08(Y)","eI(n,N,N,N,N{anim:hw,delay:H,fx:n,key:n})","ay<~>(oe)","R(mn)","XU(Y)","a_H(Y)","a_G(Y)","OQ(Y)","Z4(Y)","eI(uv,N,N,N,N,H,n,n{anim:hw,delay:H,rotation:N,stroke:H,strokeWidth:N})","eI(n,N,N,N,N,N,n,n,H)","eI(N,N,n,H{size:N})","r(r8,N,N)","l8()","oe(a4<@,@>)","~(ul)","Eh()","fe(eI)","r(iV)","YD(Y)","~(E8)","YY(Y)","H(eI,eI)","eI(eI)","a4<n,@>(eI)","eI(a4<@,@>)","lB(lB)","a4<n,@>(lB)","lB(a4<@,@>)","R(jB)","jB()","n(hZ)","~(aj<oe>)","S(aj<hZ>)","S(hZ)","aj<hZ>(n?)","abS(Y,H)","~(R(eI,eI))","acv(Y)","ae9(Y,H)","w(lB,R)","V3(Y)","acy(Y)","V6(Y)","~(mr)","hZ(hZ)","N(eI)","a_c(Y)","ZP(Y)","hZ()","aj<ED>()","ay<~>(aj<hZ>)","r(bv<H,hZ>)","C(jB)","C(Eh)","ay<~>(hw,~())","r(aj<hw>,hw?,~(hw),w)","R(m0)","aj<jk<mr>>(Y)","jk<mr>(mr)","hZ(a4<@,@>)","Vi(Y)","eI(n,N,N,N,N,N,H{align:pS,style:Hc,weight:qd})","Vj(Y)","r(hZ)","~(lU)","Ig(Y,lB,r?)","H(a7V)","ay<aj<a4<n,@>>?>()","n(n)","ay<z6>({paper:n?,photo:dD?,request:n,template!lb})","ay<a7a>({doc!z6,history:aj<+(n,n)>,instruction!n,photo:dD?,template!lb})","acs(Y)"])
C.cCY.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:75}
C.cCZ.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:76}
C.cD_.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajb(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mk(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:76}
C.cD0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ai(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bN8.prototype={
$1(d){return J.eX(A.dC.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fnO.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iG(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iG(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iG(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iG(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bXL.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:27}
C.bXM.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:44}
C.bXO.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fDA.prototype={
$1(d){return new C.a08(this.a,this.b,C.i1p(),null)},
$S:z+36}
C.f2_.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f23.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f24.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f25.prototype={
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
C.f20.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f21.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f22.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f1V.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hB,w,w,w)
return B.ej(B.a([B.bK(!1,D.ffb,w,w,!0,w,w,new C.f1T(d),w,w),B.bK(!1,D.fei,w,w,!0,w,w,new C.f1U(d),w,w)],x.p),w,w,D.WN,v,w,w,w,w,D.fsZ,w)},
$S:19}
C.f1T.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f1U.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f1W.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f1X.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f29.prototype={
$0(){var w=this.a
return w.m(new C.f28(w,this.b))},
$S:0}
C.f28.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1Z.prototype={
$0(){var w=this.a
return w.m(new C.f1Y(w,this.b,this.c))},
$S:0}
C.f1Y.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.f26.prototype={
$0(){return this.a.a0t(this.b)},
$S:0}
C.f27.prototype={
$0(){return this.a.Oz(0,this.b)},
$S:0}
C.f2c.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f2d.prototype={
$0(){var w=this.a
return w.m(new C.f2b(w,this.b))},
$S:0}
C.f2b.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f2a(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f2a.prototype={
$1(d){return d.a},
$S:z+67}
C.f9c.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h2o(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oe(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f9d.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fqk.prototype={
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
C.fqi.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fqj.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fD4.prototype={
$1(d){return d.af()},
$S:z+32}
C.fnu.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fDW.prototype={
$1(d){return new C.XW(this.a,null)},
$S:z+34}
C.cEj.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cEl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cEo.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEn())},
$S:11}
C.cEn.prototype={
$0(){},
$S:0}
C.cEq.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a16(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bc(s,new C.cEm(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agB(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:330}
C.cEm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEr.prototype={
$1(d){},
$S:30}
C.cEk.prototype={
$1(d){return new C.XU(this.b,this.a.gctN(),null)},
$S:z+40}
C.cEs.prototype={
$1(d){return D.fK6},
$S:z+43}
C.cEf.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.Wu,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bsk,B.v(B.a([B.p(w,D.bFZ,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aP,D.fdm,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f1E,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.C(A.pF,B.A(B.a([B.D(B.dV(D.fk2,new C.cEd(d),B.df(w,w,w,w,w,w,w,w,w,E.mU,w,w,A.cg,w,new B.b7(B.m(14),A.Y),D.aWK,w,w,w,w)),1),A.av,B.D(B.bJ(D.fpP,new C.cEe(d),B.bk(A.bI,w,w,w,w,w,A.cg,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wy,new B.o(D.abP,w,u,v,D.cSP,w,A.n),w,w,w,K.Yc,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cEd.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cEe.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cEg.prototype={
$0(){return J.nn(this.a.d,new C.cEc(this.b))},
$S:0}
C.cEc.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEb.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.Wu,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bKR,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.ano,A.n),t,44,t,t,t,t,t,44),A.bf,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aPD,t,t,t),A.bB,D.fpM],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dcz[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awt(u[1],u[2],u[3],new C.cE9(v,d),!1,t))}q.push(A.an)
q.push(D.bmt)
q.push(A.an)
q.push(new C.awt(A.e4,"Delete book","Remove it from this device",new C.cEa(d),!0,t))
return B.bn(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abP,t,r,s,t,t,A.n),t,t,t,A.tu,Ao.LI,t,t,t),!0,!1,A.af,!0,!0)},
$S:28}
C.cE9.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cEa.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cEi.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aFz,12)],x.V)
return B.dW(B.eC(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f3(A.A,F.an7(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cEh.prototype={
$0(){return this.a.c0S()},
$S:0}
C.cE8.prototype={
$0(){return this.a.aWP(0,this.b)},
$S:0}
C.cE7.prototype={
$0(){return this.a.CM(this.b)},
$S:0}
C.cE6.prototype={
$0(){return this.a.CM(this.b)},
$S:0}
C.cEt.prototype={
$2(d,e){var w=this.a
return w.bAv(J.q(w.d,e))},
$S:41}
C.cDA.prototype={
$0(){var w=this.a
if(w.c!=null)w.Ar()},
$S:0}
C.cDz.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aZH("Page "+(v.length+1),"",""))},
$S:0}
C.cDC.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cDK.prototype={
$0(){},
$S:0}
C.cDL.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:8}
C.cDD.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c)},
$S:0}
C.cDB.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDF.prototype={
$0(){return this.a.PT(this.b)},
$S:0}
C.cDG.prototype={
$0(){return this.a.PT(this.b)},
$S:0}
C.cDH.prototype={
$0(){var w=this.a
w.m(new C.cDE(this.b))
w.DC()},
$S:0}
C.cDE.prototype={
$0(){return this.a.c=""},
$S:0}
C.cDJ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cDI(w,d))
w.DC()},
$S:z+51}
C.cDI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDQ.prototype={
$2(d,e){if(d)this.a.Ar()},
$S:119}
C.cDM.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Ar(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eQk)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cDN.prototype={
$0(){return this.a.aVN(this.b,-1)},
$S:0}
C.cDO.prototype={
$0(){return this.a.aVN(this.b,1)},
$S:0}
C.cDP.prototype={
$0(){return this.a.c26(0,this.b)},
$S:0}
C.fuR.prototype={
$1(d){return C.hcm()},
$S:43}
C.fuS.prototype={
$1(d){return null},
$S:30}
C.fdC.prototype={
$1(d){return null},
$S:30}
C.fvQ.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:322}
C.fvP.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:248}
C.fvW.prototype={
$1(d){var w=this.a
return C.fVU(d)===w||C.hgQ(d)===w},
$S:z+4}
C.fcF.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:77}
C.c7k.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuP.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fuQ.prototype={
$1(d){return C.fxz(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fpG.prototype={
$1(d){var w=null
return B.bn(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fkD,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G8,D.feT,new C.fpE(d),B.bk(A.bY,w,w,w,A.w,w,A.cg,w,w,w,w,w)),A.S,B.ex(A.vA,D.flR,new C.fpF(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cg,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpE.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpF.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fpH.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,D.fbg,w,w,!0,w,w,new C.fpC(d),w,w),B.bJ(D.fs1,new C.fpD(d),w)],x.p),w,w,w,D.ftS,w,w,w,w,D.fba,w)},
$S:19}
C.fpC.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fpD.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e61.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e6_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e60.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e62.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e63.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fvV.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:77}
C.fvR.prototype={
$2$h$w(d,e){var w=null
return new B.bH(A.a3,w,w,B.Dt(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fvT.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f2P,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:190}
C.fvU.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dW(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fvS.prototype={
$2$female$size(d,e){var w=null,v=d?D.adD:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ac2,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fHn.prototype={
$1(d){return new C.acs(this.a,this.b,null)},
$S:z+108}
C.dW9.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bjz:A.KH,q=B.I(D.j5.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.am8,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j5.j(0.35),A.ek,10)],x.V),D.bUb,A.n),t,t,t,t,A.Lw,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Y1,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j5,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f26,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.id(!0,t,e,A.y,D.aN1,new C.dW8(w,this.c),v,D.agU,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m1,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:110}
C.dW8.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abS(w,new C.dW7(this.b,w),null)},
$S:z+72}
C.dW7.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fpK.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fpL.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fnW,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G8,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpI(d),B.bk(D.j5,w,w,w,A.c,w,A.cg,w,w,w,w,w)),A.S,B.ex(A.nW,D.Tj,new C.fpJ(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cg,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpI.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpJ.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fpO.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fpP.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fce,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G8,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpM(d),B.bk(D.j5,w,w,w,A.c,w,A.cg,w,w,w,w,w)),A.S,B.ex(A.nW,D.Tj,new C.fpN(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cg,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpM.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpN.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fpS.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fpT.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fit,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G8,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpQ(d),B.bk(D.j5,w,w,w,A.c,w,A.cg,w,w,w,w,w)),A.S,B.ex(A.nW,D.Tj,new C.fpR(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cg,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpQ.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpR.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIQ.prototype={
$1(d){return D.fNT},
$S:z+74}
C.ebg.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bbp:A.KH,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bN7,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.ek,10)],x.V),D.ant,A.n),v,v,v,v,A.Lw,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Y1,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.KE,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f_C,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.id(!0,v,e,A.y,D.aN1,new C.ebf(this.b),19,D.agU,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m1,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.ebf.prototype={
$2(d,e){var w=D.Q2[e]
return new C.ae9(w,new C.ebe(this.a,w),null)},
$S:z+75}
C.ebe.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fxD.prototype={
$0(){return B.fUT(C.hPY(this.a))},
$S:324}
C.fxC.prototype={
$0(){var w=C.fWb(this.a)
return"data:image/png;base64,"+A.cS.gcv().aJ(w)},
$S:22}
C.faL.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j9(d,e),new B.j9(w,e+v),new B.j9(d+f*14,e),new B.j9(w,e-v)],x.J)
B.a13(this.a,C.fy(4291404327),v)},
$S:664}
C.fJ0.prototype={
$1(d){return new C.V3(this.a,null)},
$S:z+77}
C.eey.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eex())},
$S:29}
C.eex.prototype={
$0(){},
$S:0}
C.eez.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eew(w,d))},
$S:1673}
C.eew.prototype={
$0(){return this.a.x=J.eQ(A.dC.gaM(this.b))},
$S:0}
C.eeA.prototype={
$1(d){},
$S:30}
C.eea.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ee6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eeh.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eei.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.egF)},
$S:0}
C.eej.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eec.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bN(0,A.c3)},
$S:0}
C.eed.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eee.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.eef.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eeg.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m5(v,A.dV,A.i8)}},
$S:8}
C.eeb.prototype={
$0(){var w=this.a,v=w.z,u=C.fyg(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cEQ(C.fyg(t))},
$S:0}
C.ee8.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ee9.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eep.prototype={
$0(){return B.a6(this.a,!1).lN()},
$S:0}
C.eeq.prototype={
$0(){var w=this.a
return w.m(new C.eeo(w))},
$S:0}
C.eeo.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eer.prototype={
$0(){var w=this.a
return w.m(new C.een(w,this.b))},
$S:0}
C.een.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ees.prototype={
$1(d){var w=this.a
return w.m(new C.eem(w))},
$S:9}
C.eem.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eet.prototype={
$1(d){var w=this.a
return w.m(new C.eel(w))},
$S:9}
C.eel.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eeu.prototype={
$0(){var w=this.a
return w.m(new C.eek(w,this.b))},
$S:0}
C.eek.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.eev.prototype={
$1(d){return this.a.Z8()},
$S:2}
C.ee7.prototype={
$0(){return this.a.c5l(this.b)},
$S:0}
C.cb0.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:279}
C.caZ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cb_.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxd.prototype={
bjl(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bN7(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cBo($.qK().jr(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mA(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjl(d,e)},
$S:1674}
C.fvv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvx.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:77}
C.fvw.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.i1(t,t,t,t,B.dn(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qc,A.cc,t,A.eh,A.ca)
v=this.a
w.Bw(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:33}
C.fam.prototype={
$1(d){var w=A.a.fA(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.fan(),B.U(w).k("a2<1>")).gM(0)},
$S:241}
C.fan.prototype={
$1(d){return d.length!==0},
$S:3}
C.fak.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:220}
C.fal.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:220}
C.cb1.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaz4()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fVT(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fSP(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcdu(),"\n\n")
d=B.i1(a6,a6,a6,a6,B.dn(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adj(k,q,1.28),j),A.qc,A.cc,a6,A.eh,A.ca)
d.Bw(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fVT(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fSP(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adj(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bi,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qc,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.az3(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:400}
C.cb2.prototype={
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
n=o.gaz4()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fVT(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fSP(g.length===0?B.a([a6],n):g,l))break}a1=o.adj(i,h,1.28)
a2=new C.cb3(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ip,new B.a7(v,a5,a4.f,a5),A.Ip,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.buC,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bi,new B.x(l[2+a3],a5,a1,a5,A.qc,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.az3(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:154}
C.cb3.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qc,w,w),w)},
$S:1675}
C.fJ3.prototype={
$1(d){return new C.V6(this.a,this.b,null)},
$S:z+79}
C.efJ.prototype={
$1(d){return d.lV()},
$S:1676}
C.efK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.efI(w,d))},
$S:1677}
C.efI.prototype={
$0(){var w=this.b
return this.a.d=w.gfm(w)},
$S:0}
C.efw.prototype={
$0(){return this.a.y=!0},
$S:0}
C.efx.prototype={
$0(){return this.a.y=!1},
$S:0}
C.efD.prototype={
$0(){return B.a6(this.a,!1).eJ()},
$S:0}
C.efE.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bat(u,v.gawb(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.efB(v),new C.efC(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.efB.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:234}
C.efC.prototype={
$1(d){var w=this.a
w.m(new C.efy(w,d,this.b,this.c))},
$S:211}
C.efy.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawb()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.efF.prototype={
$1(d){var w=this.a
return w.m(new C.efA(w,this.b))},
$S:9}
C.efA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.efG.prototype={
$1(d){var w=this.a
return w.m(new C.efz(w,d))},
$S:6}
C.efz.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.efH.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fJj.prototype={
$1(d){return D.fQG},
$S:z+83}
C.eOY.prototype={
$1(d){return this.a.XP()},
$S:8}
C.eNQ.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcv().aJ(v)},
$S:0}
C.eOd.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eOn.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eNz.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eNA.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eNx.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eNy.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eO6.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eO7(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jt(B.rn(p>0.2?C.fNB(q,B.a4m(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4m(12,12,A.x)
p.push(B.jt(B.dc(B.rn(C.fNB(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b1>0)p.push(B.ek(u,B.b0(r).j(s.b1),!0))
r=s.be
if(r!=null&&s.bK>0){r=B.b0(r).j(s.bK)
w=s.be
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(D.aV2,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(D.aUO,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aO
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aO)],x.O),D.cRu,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d0T,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ek(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cZ7,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.be0(s,u),A.au))
return new B.an(A.W,u,A.b_,A.r,p,u)},
$S:61}
C.eO7.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cl,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aVp(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
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
return B.dW(B.eb(A.A,B.eC(A.A,l,B.fs(A.A,new B.D1(new B.yw(q,q,n,A.A1),p,q),q,B.vw(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eOj.prototype={
$0(){return this.a.m(new C.eOi(this.b,this.c))},
$S:0}
C.eOi.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eOk.prototype={
$1(d){return this.a.m(new C.eOh(this.b,d))},
$S:6}
C.eOh.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eOm.prototype={
$0(){return this.a.m(new C.eOl(this.b,this.c))},
$S:0}
C.eOl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eNp.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eNq.prototype={
$1(d){var w=this.a
return w.m(w.gcvb())},
$S:2}
C.eNr.prototype={
$1(d){return this.a.m(new C.eNo())},
$S:2}
C.eNo.prototype={
$0(){},
$S:0}
C.eNs.prototype={
$0(){var w=this.a
return w.m(new C.eNn(w,this.b))},
$S:0}
C.eNn.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eNu.prototype={
$2(d,e){return A.av},
$S:36}
C.eNt.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dh(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b5,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.fZ,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eNm(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:74}
C.eNm.prototype={
$0(){var w=this.a
return w.m(new C.eNj(w,this.b))},
$S:0}
C.eNj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eNv.prototype={
$1(d){var w=this.a
return w.m(new C.eNl(w,d))},
$S:9}
C.eNl.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eNw.prototype={
$1(d){var w=this.a
return w.m(new C.eNk(w,d))},
$S:9}
C.eNk.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eON.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:33}
C.eOU.prototype={
$1(d){var w=this.a
return w.m(new C.eOV(w,d))},
$S:26}
C.eOV.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ec(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eOW.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:258}
C.eOO.prototype={
$0(){var w=this.a
return w.m(new C.eOM(w,this.b))},
$S:0}
C.eOM.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eOP.prototype={
$0(){var w=this.a
return w.m(new C.eOL(w,this.b))},
$S:0}
C.eOL.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eOQ.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eOK(v,w.b,w.c,w.d))},
$S:0}
C.eOK.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eOR.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grl(v))},
$S:0}
C.eOS.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eOT.prototype={
$0(){var w=this.a
return w.m(new C.eOJ(w))},
$S:0}
C.eOJ.prototype={
$0(){var w=this.a.db
return A.d.fZ(w,0,w.length,0)},
$S:0}
C.eOw.prototype={
$1(d){return d.a===this.a.dy},
$S:208}
C.eOx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avv[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aW(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awf(new B.n5(new B.bq(n,n,n,n),A.aq,new B.kK(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYI(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eOv(r,v),2,i))}return B.bY(A.bz,h,A.br,7,7)},
$S:172}
C.eOv.prototype={
$0(){var w=this.b
return w.m(new C.eOq(this.a,w))},
$S:0}
C.eOq.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eOy.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:259}
C.eOB.prototype={
$0(){var w=this.a
return w.m(new C.eOu(w))},
$S:0}
C.eOu.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eOC.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eOD.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eOE.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eOF.prototype={
$0(){var w=this.a
return w.m(new C.eOt(w))},
$S:0}
C.eOt.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eOG.prototype={
$0(){var w=this.a
return w.m(new C.eOs(w))},
$S:0}
C.eOs.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eOH.prototype={
$0(){var w=this.b
return w.m(new C.eOr(this.a,w))},
$S:0}
C.eOr.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eOI.prototype={
$1(d){return this.a.fx=d},
$S:259}
C.eOz.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eOA.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eOa.prototype={
$0(){var w=this.a
return w.m(new C.eO9(w))},
$S:0}
C.eO9.prototype={
$0(){var w=this.a
w.p4=null
w.b1q()},
$S:0}
C.eOb.prototype={
$0(){var w=this.a
return w.m(new C.eO8(w,this.b))},
$S:0}
C.eO8.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eOc.prototype={
$0(){var w=this.a
return w.m(w.gclR())},
$S:0}
C.eO2.prototype={
$0(){var w=this.a
return w.m(new C.eO1(w))},
$S:0}
C.eO1.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eO3.prototype={
$0(){var w=this.a
return w.m(new C.eO0(w))},
$S:0}
C.eO0.prototype={
$0(){var w=this.a
w.aH=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eO4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cZu[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aW(9,9)
m.push(v.awf(new B.n5(new B.bq(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.D1(new B.yw(o,o,v.aVp(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.A1),B.fL(u,A.A,140,o,A.cl,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eO_(v,s),3,n))}return B.bY(A.bz,m,A.br,10,8)},
$S:172}
C.eO_.prototype={
$0(){var w=this.a
return w.m(new C.eNZ(w,this.b))},
$S:0}
C.eNZ.prototype={
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
C.eNH.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eNI.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eNJ.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eNK.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eNL.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eNM.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eNN.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.eNO.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.eNP.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eN2.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eN3.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eN4.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eN5.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eN6.prototype={
$0(){var w=this.a
return w.m(new C.eN1(w))},
$S:0}
C.eN1.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eN7.prototype={
$1(d){return this.a.b3=d},
$S:259}
C.eN8.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eNB.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eNC.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eND.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eNE.prototype={
$1(d){return this.a.be=d},
$S:259}
C.eNF.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.eNc.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eNd.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eNe.prototype={
$1(d){return this.a.bT=d},
$S:6}
C.eNf.prototype={
$1(d){return this.a.c7=d},
$S:6}
C.eNg.prototype={
$0(){var w=this.a
return w.m(new C.eNb(w))},
$S:0}
C.eNb.prototype={
$0(){var w=this.a
return w.c7=A.k.G(w.c7+90+180,360)-180},
$S:0}
C.eNh.prototype={
$0(){var w=this.a
return w.m(new C.eNa(w))},
$S:0}
C.eNa.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.eNi.prototype={
$0(){var w=this.a
return w.m(new C.eN9(w))},
$S:0}
C.eN9.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eO5.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i46(v,w.p4)},
$S:0}
C.eNY.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bjR:B.fL(v,A.A,w,w,A.cl,A.bQ,!1,w,!1,w,w)
return C.fvD(d.length===0?"rounded":d,u,e)},
$S:139}
C.eNU.prototype={
$0(){var w=this.a
return w.m(new C.eNT(w))},
$S:0}
C.eNT.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eNV.prototype={
$0(){var w=this.b
return w.m(new C.eNS(this.a,w))},
$S:0}
C.eNS.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eNW.prototype={
$0(){var w=this.b
return w.m(new C.eNR(this.a,w))},
$S:0}
C.eNR.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eNX.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eOg.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.et(n.cfo(),n.r))
l.push(new C.Ig(n.csd(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.et(new B.an(A.W,t,A.b_,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c5,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eOf(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eOf.prototype={
$1(d){var w=this.a
return w.m(new C.eOe(w,d,this.b,this.c))},
$S:18}
C.eOe.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eOp.prototype={
$0(){var w=this.a
return w.m(new C.eOo(w,this.b))},
$S:0}
C.eOo.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eNG.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lN()},
$S:0}
C.eOX.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aY6(),B.D(B.av(w.b02(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aOL(),1),w.aL_()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aY6(),new B.C(A.hI,B.av(s.b02(u),t,t,t),t),B.D(s.aOL(),1),s.aL_()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:699}
C.fsU.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eo(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.byW(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.ch,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.P)},
$S:z+98}
C.fsT.prototype={
$3(d,e,f){var w=this,v=C.byW(),u=w.b?A.H:A.cv,t=w.c?A.cD:A.bl
return C.eo(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.ch,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.ccn.prototype={
$1(d){return B.t(d)},
$S:17}
C.fAA.prototype={
$0(){return this.a},
$S:z+15}
C.fhq.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fhr.prototype={
$2(d,e){return J.cl(e)},
$S:z+31}
C.fAC.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fAF.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fAG.prototype={
$0(){return A.d.gL(D.vK)},
$S:z+33}
C.fAy.prototype={
$1(d){return d.a},
$S:z+16}
C.fAB.prototype={
$1(d){return d.a},
$S:z+16}
C.fyy.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fyz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyA.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fsY.prototype={
$0(){return C.cC()},
$S:22}
C.ft0.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ch,s=u?n:0
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
C.ft_.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ch,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fsZ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ch,t=v?j:0
return C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lm,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q2,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fsX.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fvo.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hdo.cg(0,A.a.i(s.w).toLowerCase(),new C.fvm(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fvn(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bmW(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fvm.prototype={
$0(){return F.aMt(this.a.w)},
$S:192}
C.fvn.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.bxQ("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:192}
C.fah.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fai.prototype={
$1(d){return d.a},
$S:z+18}
C.faj.prototype={
$1(d){return d.b},
$S:z+19}
C.fJv.prototype={
$1(d){return D.fQW},
$S:z+41}
C.eUZ.prototype={
$0(){return this.a.x=C.hHG(this.b,this.c.b)},
$S:0}
C.eV_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eUX.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:391}
C.eUY.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:391}
C.eUW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.aB,null,new C.eUR(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kX,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b0(s,7)
if(r.length===0){n.m(new C.eUS(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hj5(o,m.cFD(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eUT(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eUR.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eUV(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b38,A.f,p,p,D.aZd,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BF:D.BK,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fvD(v,i.b21(h),u),p)))}t=B.lW(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bn(!0,new B.C(A9.AP,t,p),!0,!1,A.af,!0,!0)
s=new C.eUU(i,d)
m=B.aI(d,A.bT,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gs[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cV(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fgU,A.S,t,A.e1,D.eGx,A.at,D.frn,A.S,B.lW(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.AP,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:28}
C.eUV.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.by:A.dp
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hw,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUQ(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eUQ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eUU.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bw(w,d.length===0?B.p(v,D.amD,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.MW(u.Fe(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eUP(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:139}
C.eUP.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eUS.prototype={
$0(){var w=this.a
return w.w=w.w.Fe("")},
$S:0}
C.eUT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eUF.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eUG.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eUI.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eUJ.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eUK.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eUL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eUH(w,d))},
$S:2}
C.eUH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eUM.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eVc.prototype={
$0(){return this.a.f.fG()},
$S:0}
C.eVd.prototype={
$0(){var w=this.a
return w.m(new C.eVb(w))},
$S:0}
C.eVb.prototype={
$0(){return this.a.e=null},
$S:0}
C.eVe.prototype={
$0(){var w=this.a
return w.m(new C.eVa(w))},
$S:0}
C.eVa.prototype={
$0(){return this.a.x=null},
$S:0}
C.eVg.prototype={
$1(d){var w=this.a
return w.m(new C.eV9(w,d))},
$S:34}
C.eV9.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eVh.prototype={
$1(d){var w=this.a
return w.m(new C.eV8(w,d))},
$S:34}
C.eV8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eVi.prototype={
$0(){var w=this.a
return w.m(new C.eV7(w))},
$S:0}
C.eV7.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eVj.prototype={
$1(d){var w=this.a
return w.m(new C.eV6(w,d))},
$S:34}
C.eV6.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eVk.prototype={
$1(d){var w=this.a
return w.m(new C.eV5(w,d))},
$S:34}
C.eV5.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eVl.prototype={
$0(){var w=this.a
return w.m(new C.eV4(w))},
$S:0}
C.eV4.prototype={
$0(){var w=this.a
return w.w=w.w.Fe("")},
$S:0}
C.eVm.prototype={
$0(){var w=this.a
return w.m(new C.eV3(w,this.b))},
$S:0}
C.eV3.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eVn.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bM9(D.a1V[v]),null))
return B.bY(A.bz,t,A.br,8,8)},
$S:172}
C.eVf.prototype={
$1(d){var w=this.a
return w.m(new C.eV2(w,d))},
$S:9}
C.eV2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eUN.prototype={
$0(){var w=this.a
return w.m(new C.eUO(w,this.b,this.c))},
$S:0}
C.eUO.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eV1.prototype={
$0(){var w=this.a
return w.m(new C.eV0(w,this.b))},
$S:0}
C.eV0.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fJu.prototype={
$1(d){return new C.a_G(this.a,this.b,null)},
$S:z+42}
C.eUy.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eUz.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eUA.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aEZ?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eUB.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eUC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eUx(w,d))},
$S:2}
C.eUx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eUD.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eUE.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bN(0,new B.bb(w,B.h8(A.bu,w.length),A.aN))},
$S:0}
C.fgG.prototype={
$1(d){return d.a===this.a},
$S:208}
C.eaG.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawg(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cLH:D.d0E
t=D.x4.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.x4.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bgd(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bNo(B.eC(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.b9Q.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.W(p.a.c?A.ee:A.lM,D.x4,q,q,q,20),A.at,B.f3(A.A,B.nL(A.jp,D.faE,new C.eaF()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f7l,A.f,q,q,new B.o(D.x4,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ahz,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.eaF.prototype={
$1(d){return D.bSq.av(0,d)},
$S:65}
C.fAH.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fAI.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:208}
C.fAJ.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fAK.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fAD.prototype={
$1(d){return d.a},
$S:z+18}
C.fAE.prototype={
$1(d){return d.b},
$S:z+19}
C.fII.prototype={
$1(d){return new C.Z4(this.a,this.b,null)},
$S:z+44}
C.dgt.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dgu.prototype={
$1(d){return d.a===this.a.gahv()},
$S:z+10}
C.dgv.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dgy.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgz.prototype={
$0(){var w=this.a
return w.m(new C.dgx(w,this.b))},
$S:0}
C.dgx.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgA.prototype={
$1(d){var w=this.a
return w.m(new C.dgw(w,d))},
$S:9}
C.dgw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eaE.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.ft(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dG(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f6M.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ch,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f6O.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eo(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mw,D.cQ,g,e,f)},
$S:z+46}
C.f6N.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.we(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mw,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f6L.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fu4.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fu5.prototype={
$0(){return A.d.gL(D.GB)},
$S:z+49}
C.fu6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f8M.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fA9.prototype={
$1(d){var w=2450411,v=4281908728
C.du(d,C.dv(4280171146,1,0,D.be,w,0,0.52,0,0))
C.du(d,C.dv(v,1,0,D.be,w,0,0.04,0.48,0))
C.du(d,C.dv(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAa.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.du(d,C.dv(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.du(d,C.dv(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.du(d,C.dv(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.22,0.08,0.12))
C.du(d,C.dv(u,0.004,0,D.fp,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fAb.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(4279080072,0.11,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.du(d,C.dv(856528008,0.72,0,D.jF,w,0,0.28,0.72,0.14))
C.du(d,C.dv(1426953352,0.2,0,D.jF,w,0,0.2,0.78,0.22))
C.du(d,C.dv(v,0.004,0,D.fp,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAm.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4279203438,0.55,0,D.jF,w,0,0.5,0.55,-0.05))
C.du(d,C.dv(4280171146,0.5,0,D.jF,w,0,0.45,0.62,0.35))
C.du(d,C.dv(4280640491,0.4,0.3,D.jE,w,0,0.35,0.68,0.55))
C.du(d,C.dv(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fAr.prototype={
$1(d){var w=4280472558
C.du(d,C.dv(4279310375,0.75,-0.4,D.jE,2450411,0,0.75,-0.15,0.35))
C.du(d,C.dv(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.35,0.08,0.08))
C.du(d,C.dv(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAs.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3423541034,0.48,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.12,-0.08,D.jF,w,0,1.1,-0.05,0.38))
C.du(d,C.dv(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fAt.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cKL[w]
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.ch,0,"","","","","",!1,0)
u=$.JV
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fAu.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mb,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cj,v,2450411,0,0,!1,"",0,D.ch,0,"","","","","",!1,0)
u=$.JV
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fAv.prototype={
$1(d){var w=4294967295
C.du(d,C.dv(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.du(d,C.dv(4280110808,1.1,1.57,D.jE,2450411,0,0.18,0.35,-0.05))
C.du(d,C.dv(w,0.006,0,D.fp,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAw.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0))
C.du(d,C.dv(u,0.012,0,D.be,v,0,1,0,0.1))
C.du(d,C.dv(u,0.006,0,D.fp,u,3,0.42,0.06,0.14))
C.du(d,C.dv(403446057,0.68,0,D.jF,v,0,0.22,0.72,0.18))
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAx.prototype={
$1(d){var w=4278630100
C.du(d,C.dv(4279310375,1.2,0.15,D.jF,2450411,0,0.55,-0.2,-0.1))
C.du(d,C.dv(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.du(d,C.dv(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAc.prototype={
$1(d){var w=4292617766
C.du(d,C.dv(4282714634,0.65,-0.2,D.jE,2450411,0,0.65,-0.1,0.45))
C.du(d,C.dv(w,0.5,-0.15,D.jE,2450411,0,0.5,0.05,0.55))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fAd.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4278413729,0.35,3.14,D.jE,w,0,0.45,-0.05,0.7))
C.du(d,C.dv(4278355143,0.3,3.14,D.jE,w,0,0.4,0.25,0.75))
C.du(d,C.dv(4279150057,0.32,3.14,D.jE,w,0,0.5,0.55,0.72))
C.du(d,C.dv(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fAe.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.du(d,C.dv(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.du(d,C.dv(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.du(d,C.dv(w,0.28,0,D.jF,v,0,0.35,-0.08,0.78))
C.du(d,C.dv(u,0.22,0.5,D.jE,v,0,0.3,0.72,0.78))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fAf.prototype={
$1(d){var w=4293571336,v=1156231944
C.du(d,C.dv(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.du(d,C.dv(v,0.15,0,D.jE,2450411,0,0.15,0.02,0.02))
C.du(d,C.dv(v,0.15,3.14,D.jE,2450411,0,0.15,0.83,0.83))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fAg.prototype={
$1(d){var w=4279080072,v=2450411
C.du(d,C.dv(w,0.14,0,D.kT,v,0,0.14,0.68,0.18))
C.du(d,C.dv(4279548070,0.14,0,D.kT,v,0,0.14,0.78,0.28))
C.du(d,C.dv(4281193663,0.14,0,D.kT,v,0,0.14,0.68,0.38))
C.du(d,C.dv(4284410580,0.14,0,D.kT,v,0,0.14,0.78,0.48))
C.du(d,C.dv(4279203438,0.14,0,D.kT,v,0,0.14,0.68,0.58))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAh.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3708753706,0.42,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.06,-0.05,D.jF,w,0,1,0,0.38))
C.du(d,C.dv(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fAi.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mb,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cj,v,2450411,0,0,!1,"",0,D.ch,0,"","","","","",!1,0)
u=$.JV
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.du(d,C.dv(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fAj.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bl,A.aD,s,A.bg,null,D.fp,t,t,0,0,!1,"",0,D.ch,0,"","","","","",!1,0)
v=$.JV
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.du(d,C.dv(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.du(d,C.dv(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAk.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.du(d,C.dv(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fAl.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iX
$.iX=t+1
t=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.ch,0,"","","","","",!1,0)
u=$.JV
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dq,A.cs,w/2).l()
t=Date.now()
s=$.iX
$.iX=s+1
u=new C.eI("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.ch,0,"","","","","",!1,0)
v=$.JV
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.du(d,C.dv(4280171146,1,0,D.be,q,0,0.48,0,0))
C.du(d,C.dv(4280172719,1.1,1.57,D.jE,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fAn.prototype={
$1(d){var w=2450411
C.du(d,C.dv(870995980,0.55,0.45,D.jF,w,0,0.55,-0.12,-0.08))
C.du(d,C.dv(856996006,0.45,0.45,D.jF,w,0,0.45,0.62,-0.05))
C.du(d,C.dv(16777215,0.38,0.45,D.jF,4293548044,5,0.38,0.52,0.12))
C.du(d,C.dv(585783308,0.3,0.45,D.jF,w,0,0.3,0.56,0.16))
C.du(d,C.dv(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.du(d,C.dv(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAo.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.du(d,C.dv(w,1,0,D.be,v,0,0.07,0,0))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.du(d,C.dv(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.du(d,C.dv(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.du(d,C.dv(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.du(d,C.dv(16777215,0.32,0.45,D.jF,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAp.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.du(d,C.dv(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.du(d,C.dv(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.du(d,C.dv(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.du(d,C.dv(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.du(d,C.dv(r,0.006,0,D.fp,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.ch,0,"","","","","",!1,0)
v=$.JV
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fAq.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(3423541034,0.55,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4009754623,0.56,0.45,D.jF,w,0,0.56,0.22,0.18))
C.du(d,C.dv(3439329279,0.44,0.45,D.jF,w,0,0.44,0.28,0.24))
C.du(d,C.dv(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.du(d,C.dv(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.frV.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.frW.prototype={
$0(){return A.d.gL($.bCC())},
$S:z+52}
C.fge.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fgd.prototype={
$1(d){return C.hOV(d,this.a,this.b)},
$S:z+53}
C.fAQ.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vw(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRo(B.hEI(A.uG,C.hOY(w.c,w.d,v,u),t)))},
$S:473}
C.dRU.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dRT.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bS(A.Jp,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jt(new B.an(A.W,w,A.b_,A.r,B.a([t,new B.et(B.b3(w,w,w,new C.bd6(u.a,r,q,r),A.au),w),B.av(new B.kb(r,new C.dRS(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:460}
C.dRS.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hS(B.fL(i,A.A,r,r,A.cl,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mh(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bpC(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dW(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJy(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.eb(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:102}
C.eTM.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:65}
C.c6W.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hE.j(0.4),A.J,14)],x.V):v
w=B.dh(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.fZ,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c6X.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fe(""))},
$S:0}
C.c6Y.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.MW(v.Fe(u),!0,!1,null),!0,null),d.b,new C.c6Z(w,this.c,d),v.a===u)},
$S:z+54}
C.c6Z.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hj5(u.b,t.c.Fe(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fH7.prototype={
$1(d){return new C.YD(this.a,null)},
$S:z+55}
C.d5G.prototype={
$0(){var w=this.a
w.d=w.gvl().b9X("data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c));++w.r},
$S:0}
C.d5L.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d5M.prototype={
$0(){var w=this.a
return w.m(new C.d5K(w))},
$S:0}
C.d5K.prototype={
$0(){return this.a.r++},
$S:0}
C.d5N.prototype={
$1(d){var w=this.a
return w.m(new C.d5J(w,d))},
$S:2}
C.d5J.prototype={
$0(){var w=this.a
return w.d=w.gvl().aCx(this.b)},
$S:0}
C.d5O.prototype={
$0(){var w=this.a
return w.m(new C.d5I(w))},
$S:0}
C.d5I.prototype={
$0(){var w=this.a
return w.d=w.gvl().b9X("")},
$S:0}
C.d5P.prototype={
$1(d){var w=this.a
return w.m(new C.d5H(w,d))},
$S:2}
C.d5H.prototype={
$0(){var w=this.a
return w.d=w.gvl().ba3(this.b)},
$S:0}
C.d5Q.prototype={
$0(){var w=this.a
w=w.gvl().ba3(w.gawh().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fH6.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fH5(w),null)},
$S:20}
C.fH5.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cV(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.foz,A.at,D.foP,A.aA,new C.aYF(v.a,new C.fH4(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZL,w,w,w,w,A.LG,w,w,w)},
$S:197}
C.fH4.prototype={
$1(d){this.b.$1(new C.fH3(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fH3.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fJt.prototype={
$1(d){return D.fMj},
$S:z+57}
C.dcs.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dct.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dcu.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fxw.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:65}
C.d5n.prototype={
$3(d,e,f){var w,v=this,u=new B.aP($.X().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
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
s.ah(new B.u(w,o),2.2,p)},
$S:668}
C.fxA.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fpW.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fpX.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.f7B,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G8,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpU(d),B.bk(A.bY,w,w,w,A.c,w,A.cg,w,w,w,w,w)),A.S,B.ex(A.nW,D.Tj,new C.fpV(d),B.df(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cg,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpU.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpV.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ccl.prototype={
$1(d){return d.hA()},
$S:z+59}
C.ccm.prototype={
$1(d){return d.af()},
$S:z+60}
C.cck.prototype={
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
u=C.hKM(b2.h(0,"type"))
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
n=A.axf[A.o.D(b4,0,8)]
m=D.cNy[A.o.D(w,0,1)]
l=C.hOn(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.au1[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hRa(b2.h(0,"shape"))
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
a3=C.het(b2.h(0,"textTransition"))
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
C.cca.prototype={
$1(d){return d.hA()},
$S:z+62}
C.ccb.prototype={
$1(d){return d.af()},
$S:z+63}
C.cc7.prototype={
$1(d){return B.t(d)},
$S:17}
C.cc8.prototype={
$1(d){return B.t(d)},
$S:17}
C.cc9.prototype={
$1(d){return C.h5a(B.a1(d,x.N,x.z))},
$S:z+64}
C.ccC.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ccD.prototype={
$0(){return A.d.gL(D.a1y)},
$S:z+66}
C.ccx.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hA())},
$S:z+7}
C.ccw.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ccs.prototype={
$1(d){return new B.K(d,new C.cct(),B.U(d).k("K<1,S>")).fo(0,new C.ccu())},
$S:z+69}
C.cct.prototype={
$1(d){return d.f},
$S:z+70}
C.ccu.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:669}
C.ccv.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hAz(d)},
$S:z+71}
C.ccy.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ccz.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ccA.prototype={
$1(d){return d.af()},
$S:z+14}
C.fy8.prototype={
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
C.fy4.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fy5.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fy6.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fy7.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ccg.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hZQ(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.ccf(),b5.k("J.E"),x.N)
w=B.db(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.py.aw(0,A.k.D(b1,0,1))
u=new C.cch()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cci(a9,b7.d)
r=new C.ccj(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jR.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kA(A.k.D(1-k,0,1),B.dW(B.eb(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f_){a4=i.hA()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lm&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.r,B.a([new B.kA(A.k.D(o,0,1),r.$1(l),a8),new B.kA(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iE(B.w0(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ch)a7=D.mw
p.push(s.$5(i.c,i.d,i.e,i.f,C.hgF(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:360}
C.ccf.prototype={
$1(d){return d.a},
$S:z+22}
C.cch.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cci.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.ccj.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a70(v,C.b_N(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dE6.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.eb(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ccp.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ccq.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fAX.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:339}
C.fA3.prototype={
$1(d){return new C.acy(this.a,this.b,null)},
$S:z+78}
C.emK.prototype={
$0(){return this.a.Pk(this.b,C.i2a(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.emL.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pk(this.b,C.i2c(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.emM.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pk(this.b,C.i2b(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.emN.prototype={
$0(){Z.hgp()
B.a6(this.a,!1).O(null)},
$S:0}
C.cce.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.ccd.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.nr),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lK(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.du
return B.fL(t,A.A,o,new C.ccc(),A.cl,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.ccc.prototype={
$3(d,e,f){return D.aaC},
$S:205}
C.fy3.prototype={
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
r=B.B(new B.K(r,new C.fy2(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fy2.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_N(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fiM.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fiK(d))
w=B.aI(d,A.bT,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fL,28)],x.V)
s=x.p
return new B.cY(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kY,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zn,q,q,!0,q,q,new C.fiL(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.EZ,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fI,A.F7,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:247}
C.fiK.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pl())B.a6(w,!0).eJ()},
$S:0}
C.fiL.prototype={
$0(){var w=this.a.a
if(w!=null)w.a8(0)
B.a6(this.b,!0).eJ()},
$S:0}
C.f15.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dm()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.fz(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dm()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.jR(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dm()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.fz(r*1.2)
s.jR(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dm()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.fz(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(B.eb(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aIc(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aIc(1-r,t))],x.p),t)
case 16:v=D.b28.aw(0,r)
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(B.ek(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dm()
s.mE(r*6.28)
s.jB(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eC(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:59}
C.dQ6.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dQ5.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dQ4.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hgF(v,w,e)},
$S:59}
C.cc6.prototype={
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
q=B.B(new B.K(v,new C.cc5(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:360}
C.cc5.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ch?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a70(m,new C.Ui(d,C.b_N(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d2C.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d2B(w))},
$S:11}
C.d2B.prototype={
$0(){return this.a.d++},
$S:0}
C.eam.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.G(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aM5.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hZz(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dm()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.fz(Math.sin(t)*0.32)
s.jR(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jB(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dW(B.eb(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.eb(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eRp.prototype={
$1(d){var w
$.X()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fz
return w},
$S:1693}
C.fvE.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.geg()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bpv(u,t,r),A.au))
w.push(B.nq(s.d,A.aq,new C.bdD(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bov(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b_,A.r,w,r),r),r,r,r)},
$S:254}
C.flB.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:322}
C.esY.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cu(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.esW(),new C.esX(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.esW.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:194}
C.esX.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.epl.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.epm.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.epn.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eqW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqK.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eqL.prototype={
$1(d){return d.hA()},
$S:z+81}
C.eoJ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.es3.prototype={
$0(){this.a.tg()},
$S:0}
C.esU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o1()
w.JF()},
$S:0}
C.eqU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o1()
w.JF()},
$S:0}
C.esH.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.esI.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esJ.prototype={
$1(d){return d.a},
$S:z+22}
C.esK.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:260}
C.esL.prototype={
$0(){return B.kj(!0,null,!0,!0,null,null,!1)},
$S:673}
C.eo7.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.esV.prototype={
$0(){},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()
w.JF()},
$S:0}
C.eo5.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.x7()},
$S:0}
C.eo6.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.x7()},
$S:0}
C.eqp.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eqq.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()
w.JF()
w.z="Home"},
$S:0}
C.eqr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eq1.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.Ti,w,w,!0,w,w,new C.eq0(d),w,w)],x.p),w,w,w,D.fqi,w,w,w,w,D.f83,w)},
$S:19}
C.eq0.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.epZ.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.Ti,w,w,!0,w,w,new C.epY(d),w,w)],x.p),w,w,w,D.fbX,w,w,w,w,D.f9K,w)},
$S:19}
C.epY.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eq_.prototype={
$0(){},
$S:0}
C.eph.prototype={
$1(d){return this.a.aZo(C.bAA(d))},
$S:z+7}
C.epi.prototype={
$1(d){return this.a.ae7(C.bAA(d))},
$S:z+7}
C.eq8.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fqm,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.P_(A.vp,D.avn,"HATI YA KUHOWA","Hati ya mahari",new C.eq3(d),w),A.S,new C.P_(A.h9,D.cZv,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eq4(d),w),A.S,new C.P_(A.hZ,D.cLN,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eq5(d),w),A.S,new C.P_(A.hK,D.cK7,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eq6(d),w)],v)
if(this.a.gaaE())A.d.v(u,B.a([A.S,new C.P_(A.iV,D.cvg,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eq7(d),w)],v))
return B.bn(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xq,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:28}
C.eq3.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eq4.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eq5.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eq6.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eq7.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eq9.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()},
$S:0}
C.eo9.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eoa.prototype={
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
C.eqk.prototype={
$1(d){return d.b===D.lm},
$S:z+4}
C.eql.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e0(new C.eqi(w,this.a,v),null)},
$S:20}
C.eqi.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eqj(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.W(A.cA,j,q,q,q,q),q,q,q,new C.eqe(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BK[w]
v.a=null
t=v.a=u.a
a1.push(new C.bg7(t,u.b,p.a===t,i,k,new C.eqf(v,m),q))}a1=B.bY(A.bz,a1,A.br,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BF[w]
s.a=null
t=s.a=r.a
u.push(new C.bg6(t,r.b,p.b===t,k,j,new C.eqg(s,m),q))}return B.bn(!0,B.p(q,B.cd(B.v(B.a([d,A.aP,a0,A.S,a1,A.bx,v,A.S,B.bY(A.bz,u,A.br,12,12),A.bx,new B.a7(1/0,48,B.ex(D.bON,D.fsJ,new C.eqh(o,n),B.df(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXg,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tu,D.br4,q,q,q),!0,!1,A.af,!0,!0)},
$S:83}
C.eqj.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eqc(w.a,d,e))
w.b.d2(new C.eqd(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eqc.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eqd.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eqe.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqf.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eqg.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eqh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gc(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d2(new C.eqb(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqb.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eqn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqo.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eqm(t.d))
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
s.x7()},
$S:0}
C.eqm.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqF.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqG.prototype={
$1(d){return d.w},
$S:z+82}
C.eqH.prototype={
$2(d,e){return d>e?d:e},
$S:87}
C.eqI.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aQ,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bT,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bIy,A.f,v,v,D.aYE,v,38,v,v,v,v,v,38),A.bf,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.W(A.cA,s,v,v,v,v),v,v,v,new C.eqC(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dq(1,A.cj,B.hH(v,new C.eqD(m,k,w.c,s,w.d,t,r),k.length,A.fx,v,A.ah,new C.eqE(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tu,A.XX,v,v,v),!0,!1,A.af,!0,!0)},
$S:28}
C.eqC.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqE.prototype={
$2(d,e){return A.ac},
$S:36}
C.eqD.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bLD,q,q,q,new C.eqA(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bti,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aWW),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eqB(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.eqA.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i4f(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gev()?p.a:q.a.length
n=p.gev()?p.b:q.a.length
m=A.a.ox(q.a,o,n,s)
r.bN(0,new B.bb(m,B.h8(A.bu,o+s.length),A.aN))
l.ai8(k,m)
l.p7()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqB.prototype={
$1(d){var w=this.a
w.ai8(this.b.a,d)
w.p7()},
$S:2}
C.eqJ.prototype={
$0(){},
$S:0}
C.eqa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eoq.prototype={
$0(){},
$S:0}
C.eor.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hhY(this.b,w,!0)
w=this.a
w.r=null
w.x7()},
$S:0}
C.eos.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eot.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eop(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n4(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x7()},
$S:0}
C.eop.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqP.prototype={
$1(d){return B.oJ(new C.eqO(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:132}
C.eqO.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.ahf,B.v(B.a([D.fnY,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.id(!0,w,e,A.y,D.eMi,new C.eqN(this.a,this.b),20,A.tx,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:376}
C.eqN.prototype={
$2(d,e){var w=null,v=D.GB[e],u=C.hAu(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fJ,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eGt,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n5,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b4,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqM(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:73}
C.eqM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cco(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqQ.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()},
$S:0}
C.en4.prototype={
$0(){var w,v=this.a,u=v.gq4(),t=C.rj(4294967295,null,0,0,null,C.cC(),D.mv,"","","",D.dd),s=this.b
C.ccB(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Ci){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eoo.prototype={
$0(){var w,v,u,t,s,r,q=this.b.af()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gS(v)
if(u.b(t)){s=Date.now()
r=$.iX
$.iX=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h5a(q));++v.f},
$S:0}
C.eom.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eqY.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eoi.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eoh(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eoh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqX.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eo8.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:260}
C.eoK.prototype={
$0(){return B.kj(!0,null,!0,!0,null,null,!1)},
$S:673}
C.esF.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.esG.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asg(w).fG()
v=u.VY(w)
v.srZ(B.h8(A.bu,v.a.a.length))},
$S:8}
C.es4.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.WX(v)
if(u!=null&&u.b===D.cQ)w.VY(u).saV(0,u.r)}else w.w=null},
$S:0}
C.en5.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,v.gq4().e.l(),A.aD,"",4280640491,24,A.bl,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.ch,D.cQ,0.7,0.15,0.2)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.en2.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,4279310375,A.aD,"",v.gq4().c.j(0.25).l(),24,A.bl,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gq4().c.l(),2,"",0,0,"",D.ch,D.f_,0.25,0.3,0.3)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.emT.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ch,D.lm,0.6,0.2,0.18),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.emQ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bVl],x.p)
for(w=J.aV(this.a);w.C();){v=w.gS(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaiM().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bGh,r,r,r,r,new C.emP(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.cB(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:28}
C.emP.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.emR.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.af(),null),s=C.eo(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.ch,D.a44,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdr().z,s)
t.r=s.a},
$S:0}
C.eok.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eol.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdr().z,new C.eoj(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eoj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.enx.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eny(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eny.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.enC.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.enD(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.enD.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.enA.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.enB(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.enB.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.fk(w,new C.enz()),u=this.a;v.C();)w.gS(0).Q=u},
$S:z+1}
C.enz.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.enw.prototype={
$0(){return C.ccB(this.b,this.c,this.a.gq4())},
$S:0}
C.eqz.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.esO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esP.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.esQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esR.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bc(s,new C.esN(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRI()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hA()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.x7()
t.JF()}},
$S:0}
C.esN.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.esk.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaI(),s=w.b,r=u.aaJ(A.f7,A.kN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.bx,B.p(v,B.A(B.a([B.D(u.aTz(w.c,A.ak),1),new B.C(A.fo,B.p(v,D.bGn,A.f,v,v,new B.o(A.f7.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aTz(s,A.f7),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bx,u.aTC(A.f7,d,D.bCv,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bVq(A.aT,d,A.tK,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aTA(d,"Not now"))
return new C.Jo(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.esj.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jo(B.v(B.a([v.aaI(),A.O,v.aaJ(A.aT,D.bCa,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cV(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.42),B.hH(w,new C.esh(v,u,d),u.length,w,w,A.ah,new C.esi(),!0),w),A.aA,v.aTA(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.esi.prototype={
$2(d,e){return A.S},
$S:36}
C.esh.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.am8,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bSl,A.n),w,42,w,w,w,w,w,42),A.bf,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.no,w,w,w),A.cX,B.d("Updated "+this.a.Pl(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esg(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:73}
C.esg.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.esd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaI()
t=t.aaJ(A.aH,A.tT,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jo(B.v(B.a([s,A.O,t,A.bx,B.A(B.a([B.D(B.dV(A.a7o,new C.esb(d),B.df(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cg,u,new B.b7(B.m(14),A.Y),new B.aA(w,1,A.q,-1),u,u,u,u)),1),A.av,B.D(B.bJ(D.faj,new C.esc(d),B.bk(A.f7,u,u,u,A.c,u,A.cg,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.esb.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.esc.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.esf.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaI(),s=w.b,r=u.aaJ(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.atB("Names",""+w.c),1),A.ab,B.D(u.atB("Fields",""+w.d),1),A.ab,B.D(u.atB("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.xh,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jo(B.v(B.a([t,A.O,r,A.aP,p,A.bx,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nm,v,v,v),new C.ese(d),o),A.S,u.aTB(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ese.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.epd.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.epc.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.es5.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esE.prototype={
$1(d){var w=this.a,v=this.b
return new C.ZP(A.d.dL(w.d,new C.esC(v),new C.esD(v)).hA(),w.f,null)},
$S:z+84}
C.esC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esD.prototype={
$0(){return this.a},
$S:z+85}
C.emY.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ho,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bI8,w,w,w,w,new C.emW(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f8n,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJh,w,w,w,w,new C.emX(d),!1,w,w,w,w,w,D.ftT,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dl,w,w,w),w,w,w))
return B.bn(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.emW.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.emX.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.emZ.prototype={
$0(){var w=this.b,v=w.c,u=C.eo(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a5,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.ch,D.R7,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.en_.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iX
$.iX=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iX
$.iX=k+1
m.push(new C.eI(""+1000*l+"_"+k,D.R7,0.04,0.06,0.92,0.88,v,24,A.a5,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ch,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lB(""+1000*p+"_"+o,r+n,"",D.q1,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.en3.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.ks(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eo(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ch,D.kS,0.35,0.55,0.62)
A.d.K(u.gdr().z,w)
u.r=w.a},
$S:0}
C.emV.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b17(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ea(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ch,D.kS,s,u,t)
A.d.K(p.gdr().z,q)
A.d.bn(p.gdr().z,new C.emU(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hZi(p)}},
$S:0}
C.emU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqV.prototype={
$0(){var w=this.a,v=this.b
w.b17(v)
this.c.at=v.a
w.r=null},
$S:0}
C.esM.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.epg.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.epf())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.epf.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.enG.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.enH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tg()},
$S:8}
C.emS.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a5,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.ch,D.lm,0.8,0.1,0.1),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eoI.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.en0.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdr().z,v)
w.r=v.a},
$S:0}
C.en9.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ena.prototype={
$0(){var w=this.b.hA(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eo(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdr().z,f)
t.r=f.a},
$S:0}
C.enb.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bc(w,new C.en8(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.en8.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.enm.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bc(w,new C.en7(v))
if(u>0){A.d.cA(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.en7.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.enp.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.enq.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.enr.prototype={
$0(){return this.a.as=A.dL},
$S:0}
C.ens.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ent.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.enu.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.env.prototype={
$1(d){return d.length!==0},
$S:3}
C.enc.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.K(v,C.Cz(w.gq4().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdr().z
v=C.cC()
A.d.K(u,C.iR(A.bg,!1,w.gq4().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.end.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cC()
A.d.K(u,C.Cz(v.gq4().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdr().z
u=C.cC()
w=C.bBj()
A.d.K(t,C.iR(A.L,!1,v.gq4().e.l(),A.aD,12,A.bl,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.ene.prototype={
$0(){A.d.K(this.a.gdr().z,C.Cz(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.enf.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdr().z,C.Cz(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.eng.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.K(v,C.Cz(w.gq4().c.j(0.35).l(),0.12,u,D.Cj,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdr().z,C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.15,C.cC(),"Important note",0,D.q2,0.5,0.38,0.52))},
$S:0}
C.enh.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.Cz(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdr().z,C.iR(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bBj()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.eni.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.Cz(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdr().z,C.iR(A.bg,!1,4285611794,A.aD,15,A.bl,A.a5,0.24,C.cC(),"Sticky note",0,D.aEO,0.26,0.64,0.14))},
$S:0}
C.enj.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdr().z,C.Cz(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdr().z,C.Cz(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.enk.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.iR(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Hx,0.42,0.06,0.18))
A.d.K(v.gdr().z,C.iR(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.u7,0.42,0.52,0.18))},
$S:0}
C.enl.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.Cz(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdr().z,C.Cz(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdr().z,C.iR(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.K(v.gdr().z,C.iR(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.enn.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.Cz(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.K(v.gdr().z,C.iR(A.L,!1,w,A.aD,14,A.bl,A.a5,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.eno.prototype={
$0(){return C.ccB(this.b,D.R8,this.a.gq4())},
$S:0}
C.eoH.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5L.t(0,d),t=this.a
return t.b63(d,v===d,A.aZ,this.c,new C.eoG(t,u,d,w),u)},
$S:z+25}
C.eoG.prototype={
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
C.bC7(r,new C.eoF(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoF.prototype={
$0(){return this.a.d2(new C.eoE(this.b,this.c))},
$S:0}
C.eoE.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.en1.prototype={
$0(){var w,v=this.a,u=v.gq4(),t=C.rj(4294967295,null,0,0,null,C.cC(),D.mv,"","","",D.dd),s=this.b
C.ccB(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Ci){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.enK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i4i(p,q.d,s,new C.enJ(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tg(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.enJ.prototype={
$1(d){return this.biL(d)},
biL(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.enI(t,d))
w=2
return B.b(t.tg(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.enI.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gS(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.enL.prototype={
$0(){return this.a.bGz()},
$S:0}
C.enM.prototype={
$0(){return this.a.aOX("Class Presentation",!0)},
$S:0}
C.enN.prototype={
$1(d){return this.a.bHv(d.b,this.b,d.a)},
$S:z+88}
C.eon.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eqy.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e0(new C.eqx(this.a,this.b),null),null)},
$S:60}
C.eqx.prototype={
$2(d,e){return B.oJ(new C.eqw(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.eqw.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.agH,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b4,B.bK(!1,A.zn,v,v,!0,v,v,new C.equ(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cB(B.a([p.aRB(u,!0,!0,new C.eqv(p,w.d))],q),e,D.boW,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kz,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.equ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqv.prototype={
$0(){this.b.$1(new C.eqs())
var w=this.a
if(w.c!=null)w.m(new C.eqt())},
$S:0}
C.eqs.prototype={
$0(){},
$S:0}
C.eqt.prototype={
$0(){},
$S:0}
C.es6.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.es7.prototype={
$4(d,e,f,g){var w=A.cr.aw(0,e.gp(0))
return B.dc(B.eb(A.A,new C.axH(this.a,null),0.94+w*0.06,null,null),w)},
$S:378}
C.es8.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.es9.prototype={
$4(d,e,f,g){var w=A.cr.aw(0,e.gp(0))
return B.dc(B.eb(A.A,new C.bbu(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:378}
C.esa.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vg(this.b))},
$S:0}
C.en6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dB.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.pk.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c9.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.W(A0.ZL,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bS(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tM(A.ft,B.p(p,B.v(B.a([t,A.aA,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:332}
C.eob.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eoc.prototype={
$1(d){return d.length!==0},
$S:3}
C.eod.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kj
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_g:A.B9}return w},
$S:677}
C.eog.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dB.aw(0,A.k.G(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.78)],s):B.a([A.c.j(0.92),A.mN.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.W(C.ks(v.w)?A.vp:A.pP,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pl(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pl(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pl(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pl(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pl(v.f)
r=k.bHt(n,A.d.gL(r),t)
return B.p(l,B.bw(j,new B.a7b(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.LD,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.W(A.nU,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.eoe(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eof(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.dc,l,l,l,l)},
$S:90}
C.eof.prototype={
$0(){return this.a.ae7(this.b)},
$S:0}
C.eoe.prototype={
$0(){return this.a.Aw(this.b,this.c)},
$S:0}
C.epH.prototype={
$0(){var w=this.a
w.b4I()
w.m(new C.epG())},
$S:0}
C.epG.prototype={
$0(){},
$S:0}
C.epI.prototype={
$1(d){return this.a.ai8(this.b.a,d)},
$S:2}
C.epJ.prototype={
$0(){this.a.d2(new C.epF(this.b))},
$S:0}
C.epF.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.epK.prototype={
$0(){this.a.d2(new C.epE(this.b))},
$S:0}
C.epE.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.epL.prototype={
$0(){this.a.d2(new C.epD(this.b))},
$S:0}
C.epD.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mB},
$S:0}
C.epM.prototype={
$0(){this.a.d2(new C.epC(this.b))},
$S:0}
C.epC.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epN.prototype={
$0(){var w=this.a
w.d2(new C.epB(w,this.b))},
$S:0}
C.epB.prototype={
$0(){var w=this.b
return w.as=this.a.c11(w.as)},
$S:0}
C.epO.prototype={
$0(){return this.a.d2(new C.epA(this.b))},
$S:0}
C.epA.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epP.prototype={
$0(){return this.a.d2(new C.epz(this.b))},
$S:0}
C.epz.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eps.prototype={
$0(){return this.a.a1n(this.b.a)},
$S:0}
C.ept.prototype={
$0(){this.a.ZV()
return null},
$S:0}
C.epu.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bT,x.w).w.a.a<900)w.aeq()
else w.m(new C.epr(w))},
$S:0}
C.epr.prototype={
$0(){return this.a.as=!0},
$S:0}
C.epv.prototype={
$0(){this.a.d2(new C.epq(this.b))},
$S:0}
C.epq.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.epw.prototype={
$0(){return this.a.d2(new C.epp(this.b))},
$S:0}
C.epp.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epx.prototype={
$0(){return this.a.d2(new C.epo(this.b))},
$S:0}
C.epo.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.epy.prototype={
$0(){return this.a.ayC(null)},
$S:0}
C.eoA.prototype={
$0(){this.a.D9()
return null},
$S:0}
C.eoB.prototype={
$0(){this.a.a9g()
return null},
$S:0}
C.eoD.prototype={
$1(d){return this.biM(d)},
biM(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Jw(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bV(A.aB,null,new C.eov(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d2(new C.eow(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.eox(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.eoy(r))
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
return B.b(C.hj4(q,new C.E8(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d2(new C.eoz(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ag2(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.eov.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e4r],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bIf:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eou(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dl,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.eou.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eow.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eox.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eoy.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eoz.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eoC.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zj(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zj(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zj(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ag2(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e9r,q,v,u,B.zj(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.esS.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBg(w,v)}},
$S:0}
C.esT.prototype={
$0(){this.a.D9()
return null},
$S:0}
C.epS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bSf:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.C(A.fx,B.aE(u,B.dh(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.epR(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:131}
C.epR.prototype={
$0(){var w=this.a
return w.m(new C.epQ(w,this.b))},
$S:0}
C.epQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.epT.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a25:E.avt
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbKQ():t.gbGU()
return B.hp(B.aE(u,B.p(u,D.alA,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.epU.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i3y(v,w.a.c)},
$S:0}
C.erg.prototype={
$0(){return this.b.uV(this.a.a)},
$S:0}
C.erh.prototype={
$0(){return this.a.uV(D.mv)},
$S:0}
C.eri.prototype={
$0(){return this.a.uV(D.Hv)},
$S:0}
C.ert.prototype={
$0(){return this.a.uV(D.Hw)},
$S:0}
C.erE.prototype={
$0(){return this.a.uV(D.Hu)},
$S:0}
C.erP.prototype={
$0(){return this.a.pQ("lab_report")},
$S:0}
C.erW.prototype={
$0(){return this.a.pQ("rubric")},
$S:0}
C.erX.prototype={
$0(){return this.a.pQ("minutes")},
$S:0}
C.erY.prototype={
$0(){return this.a.pQ("agenda")},
$S:0}
C.erZ.prototype={
$0(){return this.a.pQ("timeline")},
$S:0}
C.es_.prototype={
$0(){return this.a.pQ(this.b.a)},
$S:0}
C.erj.prototype={
$0(){this.a.V6()
return null},
$S:0}
C.erk.prototype={
$0(){this.a.V0()
return null},
$S:0}
C.erl.prototype={
$0(){return this.a.pQ("table")},
$S:0}
C.erm.prototype={
$0(){return this.a.pQ("sticky")},
$S:0}
C.ern.prototype={
$0(){return this.a.pQ("divider")},
$S:0}
C.ero.prototype={
$0(){return this.a.pQ("header_bar")},
$S:0}
C.erp.prototype={
$0(){return this.a.oO(D.be)},
$S:0}
C.erq.prototype={
$0(){return this.a.oO(D.eI)},
$S:0}
C.err.prototype={
$0(){return this.a.oO(D.jE)},
$S:0}
C.ers.prototype={
$0(){return this.a.oO(D.Cj)},
$S:0}
C.eru.prototype={
$0(){return this.a.oO(D.jF)},
$S:0}
C.erv.prototype={
$0(){return this.a.oO(D.kT)},
$S:0}
C.erw.prototype={
$0(){return this.a.oO(D.fp)},
$S:0}
C.erx.prototype={
$0(){this.a.GT()
return null},
$S:0}
C.ery.prototype={
$0(){this.a.MQ()
return null},
$S:0}
C.erz.prototype={
$0(){return this.a.pQ("quote")},
$S:0}
C.erA.prototype={
$0(){return this.a.a7p()},
$S:0}
C.erB.prototype={
$0(){this.a.a_0()
return null},
$S:0}
C.erC.prototype={
$0(){var w=this.a
return w.m(new C.er6(w))},
$S:0}
C.er6.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.erD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nU(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ere(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ere.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.erF.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jH()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5M.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5M.t(0,q))u.push(B.ao(s,B.p(s,D.Nm,A.f,s,s,D.DC,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fx,B.aE(s,B.hp(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.erd(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.erd.prototype={
$0(){this.a.a7H(this.b)
return null},
$S:0}
C.erG.prototype={
$0(){this.a.a7G(this.b)
return null},
$S:0}
C.erH.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hAv(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b2
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rj(4294967295,r,0,0,r,"preview_"+w,D.q1,"","","",D.dd)
C.hg2(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hhm(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.am9,A.f,r,r,D.DC,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jc,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cX,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.erc(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.erc.prototype={
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
break}s.d2(new C.er2(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.er2.prototype={
$0(){return C.hg2(this.a,this.b.a)},
$S:0}
C.erf.prototype={
biN(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5L.t(0,d)
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
$2(d,e){return this.biN(d,e)},
$S:z+91}
C.es0.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.B(new B.K(d,new C.es2(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.es2.prototype={
$1(d){var w=this
return w.a.b63(d,w.b===d,w.c,w.d,new C.es1(w.e,d),!D.a5L.t(0,d))},
$S:z+25}
C.es1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.erI.prototype={
$1(d){this.b.$2(d,new C.erb(this.a,d,this.c))
return null},
$S:z+26}
C.erb.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bC7(u,new C.er1(v,this.c,w),w)},
$S:0}
C.er1.prototype={
$0(){return this.a.d2(new C.er_(this.b,this.c))},
$S:0}
C.er_.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.erJ.prototype={
$1(d){this.b.$2(d,new C.era(this.a,d))
return null},
$S:z+26}
C.era.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fKh(u,new C.er0(v,w),w)},
$S:0}
C.er0.prototype={
$0(){var w=this.a
return w.d2(new C.eqZ(w,this.b))},
$S:0}
C.eqZ.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.erK.prototype={
$0(){var w=this.a
return w.m(new C.er9(w))},
$S:0}
C.er9.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.erL.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBg(w,v)}},
$S:0}
C.erM.prototype={
$0(){this.a.HF()
return null},
$S:0}
C.erN.prototype={
$0(){return this.a.a7p()},
$S:0}
C.erO.prototype={
$0(){var w=this.a,v=w.jH()
if(v!=null&&v.b===D.cQ)w.d2(new C.er8(v))},
$S:0}
C.er8.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.erQ.prototype={
$0(){this.a.D9()
return null},
$S:0}
C.erR.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.ER(v,!0)
return null},
$S:0}
C.erS.prototype={
$0(){this.a.d2(new C.er7(this.b))},
$S:0}
C.er7.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.erT.prototype={
$0(){this.a.d2(new C.er5(this.b))},
$S:0}
C.er5.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.erU.prototype={
$0(){this.a.d2(new C.er4(this.b))},
$S:0}
C.er4.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mB},
$S:0}
C.erV.prototype={
$0(){this.a.d2(new C.er3(this.b))},
$S:0}
C.er3.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.enF.prototype={
$1(d){return this.biK(d)},
biK(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d2(new C.enE(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:181}
C.enE.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.esn.prototype={
$0(){var w=this.a
return w.d2(new C.esm(w,this.b))},
$S:0}
C.esm.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eso.prototype={
$0(){var w=this.a
return w.d2(new C.esl(w,this.b))},
$S:0}
C.esl.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eoN.prototype={
$0(){return this.a.d2(new C.eoM(this.b))},
$S:0}
C.eoM.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eoO.prototype={
$0(){return this.a.d2(new C.eoL(this.b))},
$S:0}
C.eoL.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epk.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.anQ,new C.epj(),w),w.k("ak.E"))
return w},
$S:z+94}
C.epj.prototype={
$1(d){var w=null
return B.zj(B.d(d.b,w,w,w,w,w,w,A.mE,w,w,w),48,d,x.fO)},
$S:z+95}
C.esA.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.esz.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.k6()?q:new C.esx(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b2:A.cp
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bZ(0,C.hhm(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nl,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ahA,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.esy(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:74}
C.esy.prototype={
$0(){var w=this.a
return w.m(new C.est(w,this.b))},
$S:0}
C.est.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JF()},
$S:0}
C.esx.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.esu(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.esv(q,s))
q.aQl()}else if(r==="del"){q=t.a
q.m(new C.esw(q,s))
q.aPx()}else if(r==="up")t.a.b1k(s,s-1)
else if(r==="down")t.a.b1k(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esu.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJT,w,w,w,w,new C.esp(d),!1,w,w,w,w,w,w,w,D.f9i,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJM,w,w,w,w,new C.esq(d),!1,w,w,w,w,w,w,w,A.w9,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJ3,w,w,w,w,new C.esr(d),!1,w,w,w,w,w,w,w,D.fh9,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bL4,w,w,w,w,new C.ess(d),!1,w,w,w,w,w,w,w,D.f97,w,w,w))
return B.bn(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.esp.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.esq.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.esr.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.ess.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.esv.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esB.prototype={
$0(){return this.a.a7p()},
$S:0}
C.eo4.prototype={
$0(){var w=this.a
w.b4I()
w.ayC(null)},
$S:0}
C.eo3.prototype={
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
A.d.v(s,new B.K(r,new C.eo2(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:360}
C.eo2.prototype={
$1(d){var w=this
return w.a.bCQ(d,w.b,w.c,w.d)},
$S:z+23}
C.enS.prototype={
$0(){var w=this
if(w.b){w.a.MZ(w.c)
return}if(w.d){w.a.a7n(w.c)
return}if(w.e){w.a.afJ(w.c)
return}if(w.f)w.a.b5d(w.c)},
$S:0}
C.enT.prototype={
$0(){this.a.MZ(this.b)
return null},
$S:0}
C.enU.prototype={
$0(){return this.a.a1n(this.b.a)},
$S:0}
C.enV.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.enR(u,d,w.c,w.d))
v.Hk()
v.o1()
v.p7()},
$S:18}
C.enR.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.enW.prototype={
$1(d){return this.a.ai8(this.b.a,d)},
$S:2}
C.enY.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fW1(w))u.a.MZ(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5d(v)},
$S:0}
C.enX.prototype={
$0(){return this.a.a1n(this.b.a)},
$S:0}
C.enZ.prototype={
$1(d){var w=this,v=w.a
v.m(new C.enQ(w.b,d,w.c,w.d))
v.Hk()
v.o1()
v.p7()},
$S:18}
C.enQ.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eo_.prototype={
$1(d){var w=this.a
w.m(new C.enP(this.b,d))
w.Hk()
w.o1()
w.p7()},
$S:211}
C.enP.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eo0.prototype={
$0(){var w=this.a
w.m(new C.enO(this.b))
w.Hk()
w.o1()
w.p7()},
$S:0}
C.enO.prototype={
$0(){this.a.r=C.hgS()},
$S:0}
C.eo1.prototype={
$0(){return this.a.a1n(this.b.a)},
$S:0}
C.epW.prototype={
$0(){var w=this.a
return w.m(new C.epV(w))},
$S:0}
C.epV.prototype={
$0(){return this.a.y=!1},
$S:0}
C.epX.prototype={
$1(d){return this.a.czn(this.b.a,d)},
$S:2}
C.ep0.prototype={
$1(d){var w
this.a.d2(d)
w=this.b
if(w!=null)w.$0()},
$S:164}
C.ep1.prototype={
$1(d){return this.a.$1(new C.ep_(this.b,d))},
$S:6}
C.ep_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ep2.prototype={
$1(d){return this.a.$1(new C.eoZ(this.b,d))},
$S:6}
C.eoZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ep3.prototype={
$1(d){return this.a.$1(new C.eoY(this.b,d))},
$S:6}
C.eoY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ep4.prototype={
$1(d){return this.a.$1(new C.eoX(this.b,d))},
$S:6}
C.eoX.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ep5.prototype={
$1(d){return this.a.$1(new C.eoW(this.b,d))},
$S:6}
C.eoW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ep6.prototype={
$1(d){return this.b.$1(new C.eoV(this.a,this.c))},
$S:9}
C.eoV.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ep7.prototype={
$1(d){return this.b.$1(new C.eoU(this.a,this.c))},
$S:9}
C.eoU.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ep8.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eoT(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:345}
C.eoT.prototype={
$0(){return this.a.$1(new C.eoQ(this.b,this.c))},
$S:0}
C.eoQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ep9.prototype={
$1(d){return this.a.$1(new C.eoS(this.b,d))},
$S:1705}
C.eoS.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.epa.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eoR(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:345}
C.eoR.prototype={
$0(){return this.a.$1(new C.eoP(this.b,this.c))},
$S:0}
C.eoP.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.epb.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pl()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eJ()}v.a.arg()},
$S:0}
C.epe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dB.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.W(A.tT,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.n4,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eA(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:127}
C.emO.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dB.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eA(B.v(B.a([B.eb(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jn,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.F2,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:127}
C.eqT.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.an_,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.am,w,w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.eqR(d),w,w),B.bJ(A.p4,new C.eqS(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eqR.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqS.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.cZE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dB.aw(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.aw(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.aw(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.ks(j.a.c.w)?D.u0:M.nd),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gL(C.ks(j.a.c.w)?D.u0:M.nd).j(0.18+w*0.12),A.J,32+w*10),D.aa6],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.b0,0.9,A.x,k,0,B.a([A.d.gL(C.ks(j.a.c.w)?D.u0:M.nd).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.ks(j.a.c.w)?D.u0:M.nd).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ks(j.a.c.w)?D.u0:M.nd).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ks(m)?D.u0:M.nd
s=B.a([new B.ac(0,A.G,A.d.gL(C.ks(m)?D.u0:M.nd).j(0.45+w*0.2),A.cw,18)],s)
m=x.p
l=B.a([p,B.eb(A.A,B.p(k,B.W(C.ks(j.a.c.w)?A.vp:A.pP,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ks(j.a.c.w)?D.u0:M.nd).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fZ,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f1C,A.L,k,k),A.at,B.d(j.gcur(),k,k,k,k,k,k,D.f66,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRI()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ks(j.a.c.w)?D.u0:M.nd).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jh(A.xJ,"Download PDF","pdf",A.d6,j.Iy(0),!1,k))
p=j.a.c
if(!p.z||p.gRI()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jh(A.kN,"Transfer to "+C.hgU(p==null?"":p),"transfer_hati",A.aV,j.Iy(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Iy(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jh(D.bBy,"Rename presentation","rename",A.c9,n,!1,k),A.an,new C.Jh(A.aje,"Duplicate","duplicate",A.b6,j.Iy(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jh(A.e4,"Delete presentation","delete",A.ay,j.Iy(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Iy(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Iy(n)
s.push(B.dW(B.dc(B.bK(!1,E.aPK,k,k,!0,k,k,new C.cZD(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.bs0,k,k,k,k,k,A.km,k,k)),n),new B.u(0,(1-p)*8)))
return B.eb(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.C(D.br9,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.UG,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.cZD.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d__.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d_0.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cZB.prototype={
$1(d){var w=this.a
return w.m(new C.cZx(w))},
$S:23}
C.cZx.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cZC.prototype={
$1(d){var w=this.a
return w.m(new C.cZw(w))},
$S:49}
C.cZw.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZA.prototype={
$0(){var w=this.a
return w.m(new C.cZy(w))},
$S:0}
C.cZy.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZz.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.ety.prototype={
$0(){return $.bj0=!$.bj0},
$S:0}
C.eto.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTs())u.av5()},
$S:0}
C.etx.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.etp.prototype={
$0(){return this.a.y=!0},
$S:0}
C.etq.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.av5()},
$S:0}
C.etk.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.etl.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.etm.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etn.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.G(w-1+v,v)},
$S:0}
C.etv.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.r,w,null)},
$S:1706}
C.etw.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cY(e,!1,d,null)
w=this.a
return w.csq(w.e,d,e)},
$S:380}
C.etr.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.fz((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.ets.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.jR((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.ett.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
v=this.a
w.fz(v.gp(0)*0.8)
w.jR(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.etu.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.0025
v=this.a
w.fz(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.etz.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYa().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYa().x
t===$&&B.c()
return new C.b_O(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ig(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:657}
C.etB.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bT,x.w).w.a.a*0.55)w.av5()
else w.ch6()},
$S:49}
C.etA.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fAN.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:385}
C.fAW.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fAT(d),w,w),B.bK(!1,D.foh,w,w,!0,w,w,new C.fAU(d,this.b,v),w,w),B.bJ(A.aQ0,new C.fAV(d,v,this.c),w)],x.p),w,w,L.tb,new B.a7(320,w,t,w),w,w,w,w,D.fpL,w)},
$S:19}
C.fAT.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fAU.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.fWG(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fAV.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aOK(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aO9(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fAM.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ccE.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fAS.prototype={
$1(d){return d.af()},
$S:z+14}
C.f9b.prototype={
$1(d){return C.fWE(C.Vg(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fJx.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.fJy.prototype={
$4(d,e,f,g){var w=A.cr.aw(0,e.gp(0))
return B.dc(B.eb(A.A,D.fNV,0.94+w*0.06,null,null),w)},
$S:378}
C.fJz.prototype={
$1(d){var w=this
return new C.Vi(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.et4.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.et0.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.et3.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vj(u,this.b,w.gaMU(),v,null)},
$S:z+99}
C.et1.prototype={
$0(){return this.a.f=!0},
$S:0}
C.et2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.et5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.et6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.et9.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eta.prototype={
$0(){var w=this.a
return w.m(new C.et8(w))},
$S:0}
C.et8.prototype={
$0(){return this.a.d="one"},
$S:0}
C.etb.prototype={
$0(){var w=this.a
return w.m(new C.et7(w))},
$S:0}
C.et7.prototype={
$0(){return this.a.d="all"},
$S:0}
C.etc.prototype={
$1(d){return this.a.bHu(d,this.b)},
$S:z+100}
C.et_.prototype={
$0(){var w=this.a
return w.m(new C.esZ(w,this.b))},
$S:0}
C.esZ.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.etd.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ete.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.etf.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.etg.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eth.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.ePh)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.emH())},
$S:0}
C.emH.prototype={
$0(){},
$S:0}
C.emJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fG()},
$S:8}
C.emE.prototype={
$1(d){return this.a.m(new C.emD())},
$S:2}
C.emD.prototype={
$0(){},
$S:0}
C.emF.prototype={
$1(d){return this.a.aYf()},
$S:2}
C.emG.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etj.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pG(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eti(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eti.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fv6.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.et(new B.kb(this.c,new C.fv5(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:223}
C.fv5.prototype={
$3(d,e,f){return new C.Ig(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fv7.prototype={
$1(d){var w=null
return B.og(!1,B.av(new C.btp(this.a,this.b,w),w,w,w),w,x.z)},
$S:314}
C.fvb.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmu(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n0,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmu(),$async$$0)
case 5:s=$.aU.ak$.x.h(0,t.a)
r=s==null?null:s.gb7()
if(!(r instanceof B.pN))throw B.V("Could not draw the slide.")
u=r.lT(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fvc.prototype={
bji(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hp(A.fW),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hM([J.eQ(A.dC.gaM(r))],"image/png"))
t.toString
s=Am.fNz(t)
w=4
return B.b(new B.pT(s,"load",!1,x.ev).gL(0).cM(0,A.jv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bji(d)},
$S:1710}
C.fv8.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:149}
C.fv9.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fN(0)},
$S:149}
C.fva.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f3x.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eZ9,A.L,w,w)},
$S:1711}
C.f3y.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.lZ(A.bm,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.ebd.prototype={
$1(d){this.a.Zm()
return null},
$S:13}
C.ebb.prototype={
$0(){return this.a.e=D.bnc},
$S:0}
C.ebc.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.cfc.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cfd.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aKK.prototype
w.btR=w.q
w=C.aKd.prototype
w.btj=w.q
w=C.aJZ.prototype
w.bt3=w.q
w=C.aKc.prototype
w.bti=w.q
w=C.aKI.prototype
w.btP=w.q
w=C.aM2.prototype
w.bvj=w.q
w=C.aIU.prototype
w.brW=w.q
w=C.aKW.prototype
w.bu2=w.q
w=C.aKX.prototype
w.bu3=w.q
w=C.b1t.prototype
w.boA=w.aBH})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i1p","amy",104)
v(C.aHT.prototype,"gc1m","Yh",0)
var r
u(r=C.awv.prototype,"gctN","ctO",38)
v(r,"gc27","acs",0)
v(r=C.awr.prototype,"gaWO","DC",3)
v(r,"gc24","c25",3)
v(r,"gavo","xl",0)
v(r,"gavp","Ic",0)
t(C,"i1P","hyf",105)
v(C.aCz.prototype,"gc4D","c4E",3)
s(C,"i2_",0,null,["$4$paper$photo$request$template"],["fCb"],106,0)
s(C,"i1Z",0,null,["$5$doc$history$instruction$photo$template"],["bAy"],107,0)
v(r=C.aCS.prototype,"gc5k","Iv",0)
v(r,"gbGX","W9",0)
v(r,"gc5n","adg",0)
v(r,"gc5m","Z8",0)
v(r,"gaXV","DX",0)
v(C.aCW.prototype,"gc5s","Za",0)
v(r=C.aEi.prototype,"gaY7","Ph",0)
v(r,"gclR","b1q",3)
v(r,"gcvb","azT",86)
v(r,"gbKG","a9k",0)
v(r,"gc5T","A9",0)
v(r=C.aGc.prototype,"gcfQ","a_v",0)
v(r,"gcfY","a_y",0)
v(r,"gbzU","a7N",0)
v(r,"gc5X","ads",0)
v(C.aGb.prototype,"gc5Y","adt",0)
v(C.aAc.prototype,"gbyT","a7A",0)
v(C.ayA.prototype,"gc5Z","Zl",0)
w(C,"i2c","i06",12)
w(C,"i2a","hY3",12)
w(C,"i2b","i_6",12)
v(r=C.aDb.prototype,"gcyj","cyk",3)
v(r,"gck6","ck7",3)
u(r,"gE2","ae7",7)
v(r,"gbEz","aqq",3)
u(r,"gE3","aZo",7)
v(r,"gc85","adP",0)
v(r,"gc6X","adO",0)
v(r,"gcaf","ae8",0)
v(r,"gbGU","a8W",0)
v(r,"gcb8","ZV",0)
v(r,"gcb9","aep",0)
v(r,"gcbG","aew",0)
v(r,"gcas","aeb",0)
v(r,"gbKQ","a9o",0)
v(r,"gaQk","aQl",3)
v(r,"gaPw","aPx",3)
v(r,"gaLe","aLf",3)
v(r,"gaPv","arg",3)
u(r,"gbz9","bza",80)
v(r,"gazq","b4s",3)
v(r,"gc6Z","c7_",3)
v(r,"gbVK","bVL",3)
v(r,"gbJk","bJl",3)
v(r=C.aDe.prototype,"gcxb","cxc",3)
v(r,"gcwR","cwS",3)
t(C,"i2d","i0n",2)
v(r=C.aDc.prototype,"gc64","IA",0)
v(r,"gcnQ","QI",0)
v(r,"gc61","Iz",0)
v(r,"gczy","a20",0)
v(r,"gcbS","aeD",0)
v(C.aDa.prototype,"gc65","aYf",3)
v(r=C.aDd.prototype,"gbLB","a9y",0)
u(r,"gc62","c63",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nP,C.Ra,C.bG8,C.bEv,C.cv7,C.cv5,C.bMe,C.b79,C.cv6,C.bD5,C.cf6,C.cf4,C.cf5,C.cf3,C.arG,C.cf2,C.bN7,C.oe,C.aDN,C.ji,C.nC,C.a7a,C.z6,C.lb,C.oq,C.m0,C.z8,C.nG,C.a7i,C.aq3,C.b_P,C.eaD,C.l8,C.Eh,C.es,C.iV,C.E8,C.xg,C.eI,C.lB,C.hZ,C.jB,C.a7j,C.aej,C.b_Q,C.b1t,C.a27])
u(B.kf,[C.cCY,C.bXM,C.fqj,C.cEt,C.cDQ,C.fvP,C.dW9,C.dW8,C.ebg,C.ebf,C.fxd,C.fak,C.fal,C.cb1,C.cb2,C.cb3,C.efE,C.eO6,C.eNu,C.eNt,C.eOx,C.eO4,C.eNY,C.eOg,C.eOX,C.fhr,C.eUV,C.eUU,C.eVn,C.eaG,C.fAJ,C.dRT,C.fH5,C.fxA,C.ccw,C.ccu,C.ccz,C.fy4,C.fy5,C.fy6,C.fy7,C.ccg,C.cch,C.dE6,C.ccd,C.fy3,C.f15,C.dQ4,C.cc6,C.eam,C.fvE,C.eqi,C.eqH,C.eqE,C.eqD,C.eqO,C.eqN,C.esi,C.esh,C.eqx,C.eqw,C.en6,C.eog,C.erf,C.esA,C.esz,C.eo3,C.epe,C.emO,C.cZE,C.etv,C.etw,C.etr,C.ets,C.ett,C.etu,C.etz,C.ccE,C.et4,C.etf,C.cfd])
u(B.hT,[C.cCZ,C.cD_,C.bN8,C.fnO,C.bXL,C.bXO,C.fDA,C.f23,C.f1V,C.f2a,C.f9c,C.f9d,C.fqk,C.fqi,C.fD4,C.fnu,C.fDW,C.cEj,C.cEo,C.cEq,C.cEm,C.cEr,C.cEk,C.cEs,C.cEf,C.cEc,C.cEb,C.cEi,C.cDL,C.cDJ,C.fuR,C.fuS,C.fdC,C.fvQ,C.fvW,C.fcF,C.c7k,C.fuP,C.fuQ,C.fpG,C.fpH,C.fvV,C.fvR,C.fvT,C.fvU,C.fvS,C.fHn,C.fpK,C.fpL,C.fpO,C.fpP,C.fpS,C.fpT,C.fIQ,C.faL,C.fJ0,C.eey,C.eez,C.eeA,C.eeg,C.ees,C.eet,C.eev,C.cb0,C.caZ,C.cb_,C.fvv,C.fvx,C.fvw,C.fam,C.fan,C.fJ3,C.efJ,C.efK,C.efB,C.efC,C.efF,C.efG,C.fJj,C.eOY,C.eOn,C.eO7,C.eOk,C.eNp,C.eNq,C.eNr,C.eNv,C.eNw,C.eON,C.eOU,C.eOW,C.eOw,C.eOy,C.eOC,C.eOD,C.eOE,C.eOI,C.eOz,C.eOA,C.eNH,C.eNI,C.eNJ,C.eNK,C.eNL,C.eNM,C.eNN,C.eNO,C.eNP,C.eN2,C.eN3,C.eN4,C.eN5,C.eN7,C.eN8,C.eNB,C.eNC,C.eND,C.eNE,C.eNF,C.eNc,C.eNd,C.eNe,C.eNf,C.eNX,C.eOf,C.fsU,C.fsT,C.ccn,C.fhq,C.fAF,C.fAy,C.fAB,C.fyy,C.fyz,C.fyA,C.ft0,C.ft_,C.fsZ,C.fsX,C.fah,C.fai,C.faj,C.fJv,C.eUX,C.eUY,C.eUR,C.eUL,C.eVg,C.eVh,C.eVj,C.eVk,C.eVf,C.fJu,C.eUC,C.fgG,C.eaF,C.fAH,C.fAI,C.fAK,C.fAD,C.fAE,C.fII,C.dgu,C.dgA,C.eaE,C.f6M,C.f6O,C.f6N,C.f6L,C.fu4,C.fu6,C.f8M,C.fA9,C.fAa,C.fAb,C.fAm,C.fAr,C.fAs,C.fAt,C.fAu,C.fAv,C.fAw,C.fAx,C.fAc,C.fAd,C.fAe,C.fAf,C.fAg,C.fAh,C.fAi,C.fAj,C.fAk,C.fAl,C.fAn,C.fAo,C.fAp,C.fAq,C.frV,C.fge,C.fgd,C.fAQ,C.dRU,C.dRS,C.eTM,C.c6W,C.c6Y,C.fH7,C.d5N,C.d5P,C.fH6,C.fH4,C.fJt,C.fxw,C.d5n,C.fpW,C.fpX,C.ccl,C.ccm,C.cck,C.cca,C.ccb,C.cc7,C.cc8,C.cc9,C.ccC,C.ccx,C.ccs,C.cct,C.ccv,C.ccy,C.ccA,C.fy8,C.ccf,C.cci,C.ccj,C.ccp,C.ccq,C.fAX,C.fA3,C.cce,C.ccc,C.fy2,C.fiM,C.cc5,C.eRp,C.flB,C.esW,C.epl,C.epm,C.eqW,C.eqK,C.eqL,C.eoJ,C.esH,C.esI,C.esJ,C.eo7,C.eqp,C.eqr,C.eq1,C.epZ,C.eph,C.epi,C.eq8,C.eo9,C.eqk,C.eql,C.eqj,C.eqn,C.eqm,C.eqF,C.eqG,C.eqI,C.eqB,C.eos,C.eop,C.eqP,C.eoh,C.esG,C.emQ,C.eok,C.eoj,C.eny,C.enD,C.enB,C.enz,C.esO,C.esP,C.esQ,C.esN,C.esk,C.esj,C.esd,C.esf,C.es5,C.esE,C.esC,C.emY,C.emU,C.epf,C.enH,C.en8,C.en7,C.enu,C.env,C.eoH,C.enJ,C.enN,C.eqy,C.es6,C.es7,C.es8,C.es9,C.eob,C.eoc,C.eod,C.epI,C.eoD,C.eov,C.eoC,C.epS,C.epT,C.erF,C.erH,C.es0,C.es2,C.erI,C.erJ,C.enF,C.epk,C.epj,C.esu,C.eo2,C.enV,C.enW,C.enZ,C.eo_,C.epX,C.ep0,C.ep1,C.ep2,C.ep3,C.ep4,C.ep5,C.ep6,C.ep7,C.ep8,C.ep9,C.epa,C.eqT,C.cZB,C.cZC,C.etB,C.fAN,C.fAW,C.fAM,C.fAS,C.f9b,C.fJx,C.fJy,C.fJz,C.et3,C.etc,C.emJ,C.emE,C.emF,C.fv6,C.fv5,C.fv7,C.fvc,C.fv8,C.fv9,C.f3x,C.f3y,C.ebd,C.cfc])
u(B.j3,[C.cD0,C.f2_,C.f24,C.f25,C.f20,C.f21,C.f22,C.f1T,C.f1U,C.f1W,C.f1X,C.f29,C.f28,C.f1Z,C.f1Y,C.f26,C.f27,C.f2c,C.f2d,C.f2b,C.cEl,C.cEp,C.cEn,C.cEd,C.cEe,C.cEg,C.cE9,C.cEa,C.cEh,C.cE8,C.cE7,C.cE6,C.cDA,C.cDz,C.cDC,C.cDK,C.cDD,C.cDB,C.cDF,C.cDG,C.cDH,C.cDE,C.cDI,C.cDM,C.cDN,C.cDO,C.cDP,C.fpE,C.fpF,C.fpC,C.fpD,C.e61,C.e6_,C.e60,C.e62,C.e63,C.dW7,C.fpI,C.fpJ,C.fpM,C.fpN,C.fpQ,C.fpR,C.ebe,C.fxD,C.fxC,C.eex,C.eew,C.eea,C.ee6,C.eeh,C.eei,C.eej,C.eec,C.eed,C.eee,C.eef,C.eeb,C.ee8,C.ee9,C.eep,C.eeq,C.eeo,C.eer,C.een,C.eem,C.eel,C.eeu,C.eek,C.ee7,C.efI,C.efw,C.efx,C.efD,C.efy,C.efA,C.efz,C.efH,C.eNQ,C.eOd,C.eNz,C.eNA,C.eNx,C.eNy,C.eOj,C.eOi,C.eOh,C.eOm,C.eOl,C.eNo,C.eNs,C.eNn,C.eNm,C.eNj,C.eNl,C.eNk,C.eOV,C.eOO,C.eOM,C.eOP,C.eOL,C.eOQ,C.eOK,C.eOR,C.eOS,C.eOT,C.eOJ,C.eOv,C.eOq,C.eOB,C.eOu,C.eOF,C.eOt,C.eOG,C.eOs,C.eOH,C.eOr,C.eOa,C.eO9,C.eOb,C.eO8,C.eOc,C.eO2,C.eO1,C.eO3,C.eO0,C.eO_,C.eNZ,C.eN6,C.eN1,C.eNg,C.eNb,C.eNh,C.eNa,C.eNi,C.eN9,C.eO5,C.eNU,C.eNT,C.eNV,C.eNS,C.eNW,C.eNR,C.eOe,C.eOp,C.eOo,C.eNG,C.fAA,C.fAC,C.fAG,C.fsY,C.fvo,C.fvm,C.fvn,C.eUZ,C.eV_,C.eUW,C.eUQ,C.eUP,C.eUS,C.eUT,C.eUF,C.eUG,C.eUI,C.eUJ,C.eUK,C.eUH,C.eUM,C.eVc,C.eVd,C.eVb,C.eVe,C.eVa,C.eV9,C.eV8,C.eVi,C.eV7,C.eV6,C.eV5,C.eVl,C.eV4,C.eVm,C.eV3,C.eV2,C.eUN,C.eUO,C.eV1,C.eV0,C.eUy,C.eUz,C.eUA,C.eUB,C.eUx,C.eUD,C.eUE,C.dgt,C.dgv,C.dgy,C.dgz,C.dgx,C.dgw,C.fu5,C.frW,C.c6X,C.c6Z,C.d5G,C.d5L,C.d5M,C.d5K,C.d5J,C.d5O,C.d5I,C.d5H,C.d5Q,C.fH3,C.dcs,C.dct,C.dcu,C.fpU,C.fpV,C.ccD,C.emK,C.emL,C.emM,C.emN,C.fiK,C.fiL,C.dQ6,C.dQ5,C.d2C,C.d2B,C.esY,C.esX,C.epn,C.es3,C.esU,C.eqU,C.esK,C.esL,C.esV,C.eq2,C.eo5,C.eo6,C.eqq,C.eq0,C.epY,C.eq_,C.eq3,C.eq4,C.eq5,C.eq6,C.eq7,C.eq9,C.eoa,C.eqc,C.eqd,C.eqe,C.eqf,C.eqg,C.eqh,C.eqb,C.eqo,C.eqC,C.eqA,C.eqJ,C.eqa,C.eoq,C.eor,C.eot,C.eqM,C.eqQ,C.en4,C.eoo,C.eom,C.eqY,C.eoi,C.eqX,C.eo8,C.eoK,C.esF,C.es4,C.en5,C.en2,C.emT,C.emP,C.emR,C.eol,C.enx,C.enC,C.enA,C.enw,C.eqz,C.esR,C.esg,C.esb,C.esc,C.ese,C.epd,C.epc,C.esD,C.emW,C.emX,C.emZ,C.en_,C.en3,C.emV,C.eqV,C.esM,C.epg,C.enG,C.emS,C.eoI,C.en0,C.en9,C.ena,C.enb,C.enm,C.enp,C.enq,C.enr,C.ens,C.ent,C.enc,C.end,C.ene,C.enf,C.eng,C.enh,C.eni,C.enj,C.enk,C.enl,C.enn,C.eno,C.eoG,C.eoF,C.eoE,C.en1,C.enK,C.enI,C.enL,C.enM,C.eon,C.equ,C.eqv,C.eqs,C.eqt,C.esa,C.eof,C.eoe,C.epH,C.epG,C.epJ,C.epF,C.epK,C.epE,C.epL,C.epD,C.epM,C.epC,C.epN,C.epB,C.epO,C.epA,C.epP,C.epz,C.eps,C.ept,C.epu,C.epr,C.epv,C.epq,C.epw,C.epp,C.epx,C.epo,C.epy,C.eoA,C.eoB,C.eou,C.eow,C.eox,C.eoy,C.eoz,C.esS,C.esT,C.epR,C.epQ,C.epU,C.erg,C.erh,C.eri,C.ert,C.erE,C.erP,C.erW,C.erX,C.erY,C.erZ,C.es_,C.erj,C.erk,C.erl,C.erm,C.ern,C.ero,C.erp,C.erq,C.err,C.ers,C.eru,C.erv,C.erw,C.erx,C.ery,C.erz,C.erA,C.erB,C.erC,C.er6,C.erD,C.ere,C.erd,C.erG,C.erc,C.er2,C.es1,C.erb,C.er1,C.er_,C.era,C.er0,C.eqZ,C.erK,C.er9,C.erL,C.erM,C.erN,C.erO,C.er8,C.erQ,C.erR,C.erS,C.er7,C.erT,C.er5,C.erU,C.er4,C.erV,C.er3,C.enE,C.esn,C.esm,C.eso,C.esl,C.eoN,C.eoM,C.eoO,C.eoL,C.esy,C.est,C.esx,C.esp,C.esq,C.esr,C.ess,C.esv,C.esw,C.esB,C.eo4,C.enS,C.enT,C.enU,C.enR,C.enY,C.enX,C.enQ,C.enP,C.eo0,C.enO,C.eo1,C.epW,C.epV,C.ep_,C.eoZ,C.eoY,C.eoX,C.eoW,C.eoV,C.eoU,C.eoT,C.eoQ,C.eoS,C.eoR,C.eoP,C.epb,C.eqR,C.eqS,C.cZD,C.d__,C.d_0,C.cZx,C.cZw,C.cZA,C.cZy,C.cZz,C.ety,C.eto,C.etx,C.etp,C.etq,C.etk,C.etl,C.etm,C.etn,C.etA,C.fAT,C.fAU,C.fAV,C.et0,C.et1,C.et2,C.et5,C.et6,C.et9,C.eta,C.et8,C.etb,C.et7,C.et_,C.esZ,C.etd,C.ete,C.etg,C.eth,C.emI,C.emH,C.emD,C.emG,C.etj,C.eti,C.fvb,C.fva,C.ebb,C.ebc])
t(C.aQ3,B.J)
u(B.m5,[C.a34,C.avY,C.auF,C.xe,C.xh,C.kN,C.t5,C.B3,C.ri,C.vJ,C.aqD,C.Ih,C.aq2,C.uv,C.mr,C.hw,C.a7V])
u(C.bMe,[C.cv8,C.bMf])
u(C.cf6,[C.cfa,C.arF])
t(C.cf9,C.cf4)
t(C.cf8,C.cf3)
t(C.cfb,C.cf8)
t(C.cf7,C.cf5)
t(C.cf1,C.cf2)
t(C.b8I,B.oH)
t(C.cp4,B.au6)
t(C.a7H,B.x1)
t(C.aUu,B.dG)
t(C.azv,B.at_)
u(B.ag,[C.a08,C.XW,C.XU,C.ape,C.V3,C.V6,C.a_c,C.a_H,C.a_G,C.aCL,C.Z4,C.MW,C.YD,C.YY,C.ang,C.aHA,C.Ui,C.ayk,C.a70,C.Nn,C.axH,C.Jh,C.ZP,C.Vi,C.Vj,C.aD9,C.aq7,C.a71])
u(B.ah,[C.aHT,C.awv,C.awr,C.aCz,C.aCS,C.aCW,C.aEi,C.aGc,C.aGb,C.aKK,C.aAc,C.aKd,C.ayA,C.beA,C.aJZ,C.aM2,C.aKc,C.bct,C.aKI,C.aKW,C.aIU,C.bbf,C.aKX,C.aDc,C.bj_,C.aDa,C.aDd,C.biJ])
u(B.au,[C.awt,C.acs,C.abS,C.bhL,C.acv,C.ae9,C.b_r,C.br1,C.b_L,C.bkj,C.bpC,C.aYF,C.b_O,C.acy,C.acQ,C.b_M,C.Ig,C.aYI,C.bbu,C.P_,C.Jo,C.bg7,C.bg6,C.btp])
u(B.GM,[C.baX,C.bsq,C.aIc,C.bdD,C.bq_])
u(B.mJ,[C.baW,C.b7r,C.bpX,C.bat,C.be0,C.bgd,C.bd6,C.bdY,C.bdF,C.bmu,C.b8A,C.b8d,C.btm,C.bqp,C.bpy,C.bd_,C.b_J,C.bov,C.bpv])
t(C.biG,C.aKK)
t(C.bi2,C.aKd)
t(C.bhN,C.aJZ)
t(C.bsT,C.aM2)
t(C.bi_,C.aKc)
t(C.biE,C.aKI)
t(C.bvH,C.aKW)
t(C.aDb,C.bvH)
t(C.bbg,C.aIU)
t(C.aDe,C.aKX)
t(C.btd,B.iO)
t(C.a7U,B.kn)
t(C.cfe,C.b1t)
t(C.ahj,C.a27)
u(B.WW,[C.aPU,C.aRo])
t(C.avA,C.aPU)
w(C.aKK,B.c9)
w(C.aKd,B.c9)
w(C.aJZ,B.c9)
w(C.aKc,B.c9)
w(C.aKI,B.c9)
w(C.aM2,B.c9)
w(C.aIU,B.eU)
w(C.aKW,B.c9)
v(C.bvH,B.ey)
w(C.aKX,B.c9)})()
B.jT(b.typeUniverse,JSON.parse('{"aQD":{"hF":["aQD"]},"nP":{"aQD":[],"hF":["aQD"]},"aQ3":{"J":["Ra"],"J.E":"Ra"},"b8I":{"oH":[]},"a7H":{"x1":[],"o7":[]},"aUu":{"dG":[],"cz":[],"r":[]},"azv":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a08":{"ag":[],"r":[]},"aHT":{"ah":["a08"]},"XW":{"ag":[],"r":[]},"XU":{"ag":[],"r":[]},"awv":{"ah":["XW"]},"awr":{"ah":["XU"]},"awt":{"au":[],"r":[]},"ape":{"ag":[],"r":[]},"aCz":{"ah":["ape"]},"acs":{"au":[],"r":[]},"abS":{"au":[],"r":[]},"acv":{"au":[],"r":[]},"ae9":{"au":[],"r":[]},"bhL":{"au":[],"r":[]},"V3":{"ag":[],"r":[]},"aCS":{"ah":["V3"]},"b_r":{"au":[],"r":[]},"baX":{"aB":[]},"baW":{"aB":[]},"bsq":{"aB":[]},"b7r":{"aB":[]},"bpX":{"aB":[]},"V6":{"ag":[],"r":[]},"aCW":{"ah":["V6"]},"bat":{"aB":[]},"a_c":{"ag":[],"r":[]},"aEi":{"ah":["a_c"]},"be0":{"aB":[]},"a_H":{"ag":[],"r":[]},"a_G":{"ag":[],"r":[]},"aCL":{"ag":[],"r":[]},"Z4":{"ag":[],"r":[]},"aGc":{"ah":["a_H"]},"aGb":{"ah":["a_G"]},"biG":{"ah":["aCL"]},"bgd":{"aB":[]},"aAc":{"ah":["Z4"]},"br1":{"au":[],"r":[]},"b_L":{"au":[],"r":[]},"bkj":{"au":[],"r":[]},"MW":{"ag":[],"r":[]},"YD":{"ag":[],"r":[]},"bi2":{"ah":["MW"]},"bpC":{"au":[],"r":[]},"bd6":{"aB":[]},"aYF":{"au":[],"r":[]},"ayA":{"ah":["YD"]},"YY":{"ag":[],"r":[]},"beA":{"ah":["YY"]},"bdY":{"aB":[]},"bdF":{"aB":[]},"bmu":{"aB":[]},"b8A":{"aB":[]},"b8d":{"aB":[]},"btm":{"aB":[]},"bqp":{"aB":[]},"bpy":{"aB":[]},"bd_":{"aB":[]},"ang":{"ag":[],"r":[]},"b_O":{"au":[],"r":[]},"bhN":{"ah":["ang"]},"acy":{"au":[],"r":[]},"acQ":{"au":[],"r":[]},"aHA":{"ag":[],"r":[]},"Ui":{"ag":[],"r":[]},"Ig":{"au":[],"r":[]},"ayk":{"ag":[],"r":[]},"a70":{"ag":[],"r":[]},"b_M":{"au":[],"r":[]},"b_J":{"aB":[]},"bsT":{"ah":["aHA"]},"aIc":{"aB":[]},"bi_":{"ah":["Ui"]},"bct":{"ah":["ayk"]},"biE":{"ah":["a70"]},"aYI":{"au":[],"r":[]},"bdD":{"aB":[]},"bov":{"aB":[]},"bpv":{"aB":[]},"axH":{"ag":[],"r":[]},"Jh":{"ag":[],"r":[]},"ZP":{"ag":[],"r":[]},"Jo":{"au":[],"r":[]},"Nn":{"ag":[],"r":[]},"aDb":{"ah":["Nn"],"ey":[]},"bbg":{"ah":["axH"]},"bbu":{"au":[],"r":[]},"bbf":{"ah":["Jh"]},"P_":{"au":[],"r":[]},"aDe":{"ah":["ZP"]},"bq_":{"aB":[]},"bg7":{"au":[],"r":[]},"bg6":{"au":[],"r":[]},"Vi":{"ag":[],"r":[]},"Vj":{"ag":[],"r":[]},"aD9":{"ag":[],"r":[]},"aq7":{"ag":[],"r":[]},"aDc":{"ah":["Vi"]},"bj_":{"ah":["Vj"]},"aDa":{"ah":["aD9"]},"btd":{"iO":[]},"aDd":{"ah":["aq7"]},"btp":{"au":[],"r":[]},"a71":{"ag":[],"r":[]},"biJ":{"ah":["a71"]},"a7U":{"kn":["fr<eM>"],"k8":["fr<eM>"]},"ahj":{"a27":[]},"aPU":{"iZ":[],"fe":[]},"avA":{"iZ":[],"fe":[]},"aRo":{"iZ":[],"fe":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("L8"),U:w("vf<pS>"),bz:w("w"),M:w("eY<n>"),bo:w("jv"),g7:w("LE"),gc:w("ay<it?>"),bq:w("ay<~>"),cc:w("LR"),fS:w("Dz"),an:w("Ht"),bm:w("O<Ra>"),X:w("O<a2f>"),f3:w("O<aQD>"),aK:w("O<n4>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lt>"),d5:w("O<ay<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<ay<dD>>"),fG:w("O<ay<~>>"),aF:w("O<na>"),cd:w("O<aj<ji>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mn>"),h:w("O<ji>"),gE:w("O<z6>"),k:w("O<oe>"),g:w("O<lB>"),D:w("O<hZ>"),u:w("O<eI>"),m:w("O<uv>"),i:w("O<hw>"),aC:w("O<a7i>"),o:w("O<z8>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hn>"),cR:w("O<iM>"),J:w("O<j9>"),gx:w("O<p0<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cP>"),s:w("O<n>"),aS:w("O<iO>"),p:w("O<r>"),eR:w("O<fe>"),fT:w("O<b79>"),bx:w("O<aDN>"),gz:w("O<aej>"),x:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("aj<oe>"),R:w("aj<hZ>"),j:w("aj<@>"),bW:w("aj<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("K<hw,r>"),eC:w("K<nG,n>"),cT:w("K<jB,C>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,pv>"),gh:w("K<mr,jk<mr>>"),w:w("iz"),ei:w("it"),g2:w("r8"),fB:w("E8"),b6:w("z6"),gX:w("a7a"),dt:w("lb"),ea:w("oe"),bt:w("lB"),I:w("hZ"),F:w("eI"),fO:w("mr"),ff:w("uv"),fP:w("hw"),Q:w("vJ"),dO:w("aq3"),a:w("cq"),C:w("aC"),dw:w("arG"),di:w("a7V"),Y:w("eM"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("ED"),dB:w("dw<u>"),bJ:w("dw<n>"),_:w("e_<n>"),N:w("n"),fw:w("pS"),bO:w("ar"),K:w("bo<u>"),b:w("bo<N>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kb<lB>"),cI:w("kb<n>"),cl:w("kb<N>"),b4:w("a2<l8>"),a8:w("a2<m0>"),fR:w("a2<+(n,n)>"),co:w("e7<u>"),l:w("r"),b2:w("bW<~>"),ev:w("pT<dX>"),dT:w("bg<~>"),cQ:w("azv"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("aj<a4<n,@>>?"),aT:w("aj<hZ>?"),c:w("aj<@>?"),aP:w("it?"),af:w("hZ?"),go:w("b_Q?"),a6:w("a7j?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUE=new B.bH(A.ax,null,null,O.amK,null)
D.aUO=new B.da(0,-0.15)
D.aUQ=new B.da(0.62,0)
D.aUT=new B.da(-0.35,-0.45)
D.aV2=new B.da(0.9,-0.85)
D.aKK=new B.aW(30,30)
D.aWk=new B.bq(D.aKK,D.aKK,A.he,A.he)
D.aWy=new B.aA(A.b6,1,A.q,-1)
D.beR=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aWK=new B.aA(D.beR,1,A.q,-1)
D.aWW=new B.aA(A.aE,1.5,A.q,-1)
D.aX0=new B.aA(A.b6,1.6,A.q,-1)
D.aXg=new B.aA(A.aE,1.4,A.q,-1)
D.aYE=new B.o(null,null,null,null,null,K.Gh,A.a6)
D.bTp=new B.a8(A.a3,A.a7,A.x,G.a25,null,null)
D.aYM=new B.o(null,null,null,null,null,D.bTp,A.a6)
D.a9X=new B.o(A.aB,null,null,A.rO,null,null,A.n)
D.b8Z=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.beO=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cQb=w([D.b8Z,D.beO],x.O)
D.eaQ=new B.bS(A.A,0.5,A.x,null,0,D.cQb,null,null)
D.aZ4=new B.o(null,null,null,null,null,D.eaQ,A.a6)
D.W9=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aXw=new B.bP(P.uI,A.Y,A.Y,A.Y)
D.aZ6=new B.o(D.W9,null,D.aXw,null,null,null,A.n)
D.bV8=new B.a8(A.a3,A.a7,A.x,A.Pu,null,null)
D.aZd=new B.o(null,null,null,null,null,D.bV8,A.a6)
D.abv=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZf=new B.o(D.abv,null,null,A.qq,null,null,A.n)
D.aZj=new B.o(A.kd,null,null,null,null,null,A.a6)
D.aXD=new B.bP(A.zP,A.Y,A.Y,A.Y)
D.aZm=new B.o(A_.acA,null,D.aXD,A.m1,null,null,A.n)
D.DC=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aZt=new B.o(null,null,null,null,null,E.vE,A.a6)
D.cUV=w([E.ads,A.bX],x.O)
D.bUK=new B.a8(A.b0,A.b5,A.x,D.cUV,null,null)
D.aZx=new B.o(null,null,null,A.m1,null,D.bUK,A.n)
D.d4a=w([A.bj,A.dS,A.jO],x.O)
D.a0e=new B.a8(A.ax,A.aC,A.x,D.d4a,null,null)
D.aZK=new B.o(null,null,null,null,null,D.a0e,A.n)
D.aZL=new B.o(D.abv,null,null,A.kz,null,null,A.n)
D.clc=w([A.dq,A.bj],x.O)
D.bUC=new B.a8(A.ax,A.aC,A.x,D.clc,null,null)
D.aZP=new B.o(null,null,null,null,null,D.bUC,A.n)
D.aZZ=new B.o(null,null,null,null,null,G.tV,A.a6)
D.b_h=new B.o(A.adt,null,null,null,null,null,A.a6)
D.b9L=new B.w(0.5647058823529412,0,0,0,A.t)
D.aa6=new B.ac(0,A.G,D.b9L,A.Rj,28)
D.b1o=new B.aUH()
D.b1X=new C.cp4()
D.b28=new C.b8I()
D.aaC=new B.cr(A.A,null,null,A.a03,null)
D.b4F=new B.fi(null,null,null,null,null,E.mU,null,null,null,null)
D.b2F=new B.cr(A.A,null,null,D.b4F,null)
D.bEu=new B.ae(A.dW,28,A.c,null,null,null)
D.b38=new B.cr(A.A,null,null,D.bEu,null)
D.b4C=new B.fi(2,null,null,null,null,A.bY,null,null,null,null)
D.b3u=new B.cr(A.A,null,null,D.b4C,null)
D.bEO=new B.ae(K.N9,40,A.bI,null,null,null)
D.b3v=new B.cr(A.A,null,null,D.bEO,null)
D.b5r=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b5D=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b60=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b66=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b6C=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b6T=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b6U=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.K9=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7i=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b7n=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abP=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b85=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b8O=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.ac2=new B.w(1,1,1,0.9725490196078431,A.t)
D.b96=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9h=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b9k=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b9v=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9Q=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bba=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.VU=new B.w(0.8509803921568627,0,0,0,A.t)
D.bbi=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bbp=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.acR=new B.w(0.6,0,0,0,A.t)
D.acT=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bcM=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.t9=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bdb=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bdC=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bdZ=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adD=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Wj=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.An=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KD=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j5=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.ae1=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Wu=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bhf=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bhJ=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bhX=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.WN=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bj4=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.x4=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bjz=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bjR=new B.hE(A.b2,!0,null,null)
D.f4m=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftL=new B.x("Bio link",null,D.f4m,null,null,null,null,null,null,null,null,null)
D.b3o=new B.cr(A.A,null,null,D.ftL,null)
D.bk6=new B.hE(A.Vg,!0,D.b3o,null)
D.L1=new C.a34(0,"none")
D.af9=new C.a34(1,"deflate")
D.afa=new C.a34(2,"bzip2")
D.bkN=new B.kh(0.165,0.84,0.44,1)
D.cVd=w([A.cd,A.dO,A.aE],x.O)
D.bTT=new B.a8(A.ax,A.aC,A.x,D.cVd,null,null)
D.aYJ=new B.o(null,null,null,null,null,D.bTT,A.n)
D.bNA=new B.ae(A.eR,null,A.ad,null,null,null)
D.b4_=new B.cr(A.A,null,null,D.bNA,null)
D.blk=new B.kK(D.aYJ,A.bd,D.b4_,null)
D.bhv=new B.w(0.058823529411764705,1,1,1,A.t)
D.cYg=w([A.bF,A.qB,A.qB,D.bhv],x.O)
D.cCd=w([0,0.32,0.7,1],x.x)
D.bUr=new B.a8(A.ax,A.aC,A.x,D.cYg,D.cCd,null)
D.aYy=new B.o(null,null,null,null,null,D.bUr,A.n)
D.blq=new B.kK(D.aYy,A.bd,null,null)
D.bmq=new B.me(1,1,null,null,null,A.bm,null)
D.bmt=new B.me(1,null,null,null,null,D.Wu,null)
D.bmX=new B.b9(125e4)
D.bn2=new B.b9(17e4)
D.bnc=new B.b9(35964e8)
D.bni=new B.b9(55e4)
D.bnm=new B.b9(68e4)
D.bnN=new B.ia(0,0,0,5)
D.bo3=new B.Q(0,16,16,0)
D.bo6=new B.Q(0,18,0,8)
D.boe=new B.Q(0,36,0,36)
D.bol=new B.Q(0,54,0,0)
D.bos=new B.Q(10,0,10,3)
D.boD=new B.ia(10,16,10,10)
D.boP=new B.Q(10,6,4,6)
D.boS=new B.Q(10,8,10,6)
D.ag5=new B.Q(11,8,11,11)
D.boW=new B.Q(12,0,12,24)
D.bp7=new B.Q(12,12,12,4)
D.bpa=new B.Q(12,12,8,12)
D.bpp=new B.Q(12,8,8,12)
D.bpM=new B.Q(14,14,14,0)
D.bpR=new B.Q(14,14,14,90)
D.bq9=new B.Q(16,10,16,16)
D.bqa=new B.Q(16,10,16,20)
D.agU=new B.Q(16,6,16,28)
D.bqJ=new B.Q(18,0,18,10)
D.bqL=new B.Q(18,0,18,30)
D.bqN=new B.Q(18,10,18,12)
D.bqO=new B.Q(18,10,18,14)
D.br4=new B.Q(18,16,14,18)
D.br9=new B.Q(18,18,18,12)
D.brf=new B.Q(18,26,18,12)
D.brk=new B.Q(18,34,18,34)
D.brl=new B.Q(18,4,18,14)
D.brr=new B.Q(18,8,18,24)
D.brJ=new B.Q(20,16,14,4)
D.brO=new B.Q(20,18,12,4)
D.brT=new B.Q(20,20,12,20)
D.brW=new B.Q(20,22,20,20)
D.bs0=new B.Q(20,6,20,6)
D.bs9=new B.Q(22,18,22,18)
D.bsh=new B.Q(22,24,22,0)
D.bsk=new B.Q(22,24,22,4)
D.bss=new B.Q(22,60,22,22)
D.bsy=new B.Q(24,24,24,22)
D.bsI=new B.Q(26,10,60,10)
D.bsP=new B.Q(28,44,28,44)
D.bt5=new B.Q(32,44,32,44)
D.btd=new B.Q(38,30,38,20)
D.bti=new B.Q(4,0,0,6)
D.btu=new B.ia(4,4,4,4)
D.btV=new B.ia(6,5,6,5)
D.btZ=new B.Q(6,6,8,6)
D.bu9=new B.Q(8,14,8,14)
D.bua=new B.Q(8,22,8,22)
D.bui=new B.Q(8,6,12,6)
D.bur=new B.Q(8,8,8,4)
D.ahN=new B.Q(9,9,9,6)
D.buB=new B.ia(2.5,2.5,2.5,2.5)
D.buC=new B.Q(10.5,0,10.5,0)
D.buD=new B.Q(7,1.5,7,1.5)
D.cNo=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.buT=new B.yw(null,null,D.cNo,A.A1)
D.cKy=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.buU=new B.yw(null,null,D.cKy,A.A1)
D.aPq=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft5=new B.x("WORD DESIGN",null,D.aPq,null,null,null,null,null,null,null,null,null)
D.bvq=new B.bD(1,A.bi,D.ft5,null)
D.fsM=new B.x("Slides database",null,Ab.rA,null,null,null,null,null,null,null,null,null)
D.fq5=new B.x("Admin only \xb7 keep as many as you like",null,U.aOV,null,null,null,null,null,null,null,null,null)
D.dbP=w([D.fsM,A.bB,D.fq5],x.p)
D.bkv=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.dbP,null)
D.bvt=new B.bD(1,A.bi,D.bkv,null)
D.fkI=new B.x("NGMY logo",null,A.fN,null,null,null,null,null,null,null,null,null)
D.bvw=new B.bD(1,A.bi,D.fkI,null)
D.f2g=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new B.x("TALK TO THE EDITOR",null,D.f2g,null,null,null,null,null,null,null,null,null)
D.bvM=new B.bD(1,A.bi,D.fv0,null)
D.feB=new B.x("Tell the AI what to change",null,Ab.rA,null,null,null,null,null,null,null,null,null)
D.bw5=new B.bD(1,A.bi,D.feB,null)
D.bwX=new B.Do(!0,"video/mp4")
D.f0z=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcN=new B.x("Move presentations between devices",null,D.f0z,null,null,null,!1,null,null,1,null,null)
D.bx0=new B.qb(A.eg,A.a3,A.f,D.fcN,null)
D.fdR=new B.x("Edit in Slides",null,A.jn,null,null,null,null,null,null,null,null,null)
D.bx1=new B.qb(A.eg,A.A,A.f,D.fdR,null)
D.bxg=new B.dq(1,A.cj,D.bx1,null)
D.Zz=new B.a_(60988,"MaterialIcons",!1)
D.bA1=new B.a_(61352,"MaterialIcons",!1)
D.aji=new B.a_(61531,"MaterialIcons",!1)
D.bBf=new B.a_(63062,"MaterialIcons",!1)
D.bBn=new B.a_(63109,"MaterialIcons",!1)
D.bBy=new B.a_(63206,"MaterialIcons",!1)
D.ak1=new B.a_(63238,"MaterialIcons",!1)
D.a_4=new B.a_(63365,"MaterialIcons",!1)
D.a_5=new B.a_(63367,"MaterialIcons",!1)
D.a_6=new B.a_(63368,"MaterialIcons",!1)
D.akd=new B.a_(63384,"MaterialIcons",!1)
D.bC7=new B.a_(63525,"MaterialIcons",!1)
D.bCa=new B.a_(63568,"MaterialIcons",!1)
D.bCv=new B.a_(983072,"MaterialIcons",!1)
D.bCT=new B.a_(983271,"MaterialIcons",!0)
D.alp=new B.a_(983965,"MaterialIcons",!1)
D.alq=new B.a_(983966,"MaterialIcons",!1)
D.bDQ=new B.a_(984592,"MaterialIcons",!1)
D.bE7=new B.ae(A.tH,16,A.az,null,null,null)
D.bEe=new B.ae(A.mn,null,A.c,null,null,null)
D.alA=new B.ae(A.pO,18,A.c,null,null,null)
D.bEv=new B.ae(A.B8,18,N.l6,null,null,null)
D.bF9=new B.ae(A.jh,11,null,null,null,null)
D.bFj=new B.ae(A.ZP,null,A.es,null,null,null)
D.bFS=new B.ae(A.qY,18,A.az,null,null,null)
D.bFY=new B.ae(A2.Bl,14,null,null,null,null)
D.bFZ=new B.ae(A.e4,28,A.ci,null,null,null)
D.bGa=new B.ae(A.pP,20,A.c,null,null,null)
D.bGh=new B.ae(A.xZ,null,null,null,null,null)
D.bGn=new B.ae(A.iz,18,A.hv,null,null,null)
D.bGs=new B.ae(A.lc,null,null,null,null,null)
D.bGW=new B.ae(A.a_k,28,A.c,null,null,null)
D.bBi=new B.a_(63065,"MaterialIcons",!1)
D.bH4=new B.ae(D.bBi,15,A.c,null,null,null)
D.bBo=new B.a_(63113,"MaterialIcons",!1)
D.bHa=new B.ae(D.bBo,null,A.ad,null,null,null)
D.bHy=new B.ae(A.vn,22,A.bK,null,null,null)
D.bHS=new B.ae(A.tG,18,null,null,null,null)
D.bHY=new B.ae(A.Bo,12,A.c,null,null,null)
D.bDs=new B.a_(983687,"MaterialIcons",!1)
D.bI8=new B.ae(D.bDs,null,A.bj,null,null,null)
D.bIf=new B.ae(A.hy,null,A.bj,null,null,null)
D.bIy=new B.ae(A.oH,22,A.c,null,null,null)
D.bIC=new B.ae(A.cA,13,A.c,null,null,null)
D.bII=new B.ae(A.e4,26,A.ay,null,null,null)
D.bIL=new B.ae(A.r2,26,A.c,null,null,null)
D.Nm=new B.ae(A.jh,8,A.c,null,null,null)
D.bJ2=new B.ae(A.pO,40,A.c,null,null,null)
D.bJ3=new B.ae(A.byZ,null,null,null,null,null)
D.bJ7=new B.ae(A.tP,20,null,null,null,null)
D.bDr=new B.a_(983683,"MaterialIcons",!1)
D.bJh=new B.ae(D.bDr,null,A.aZ,null,null,null)
D.bJi=new B.ae(A.jh,16,A.bj,null,null,null)
D.bJD=new B.ae(A.r3,null,null,null,null,null)
D.am8=new B.ae(A.vp,22,A.c,null,null,null)
D.bJH=new B.ae(A.dW,17,A.c,null,null,null)
D.am9=new B.ae(A.jh,9,A.c,null,null,null)
D.bJM=new B.ae(A.vk,null,null,null,null,null)
D.bzf=new B.a_(57744,"MaterialIcons",!1)
D.bJT=new B.ae(D.bzf,null,null,null,null,null)
D.bJW=new B.ae(A.vk,16,null,null,null,null)
D.bDZ=new B.a_(985181,"MaterialIcons",!1)
D.G8=new B.ae(D.bDZ,null,null,null,null,null)
D.bK7=new B.ae(A.lc,16,A.bK,null,null,null)
D.bDk=new B.a_(983615,"MaterialIcons",!1)
D.bK9=new B.ae(D.bDk,12,A.c,null,null,null)
D.amf=new B.ae(A.xG,16,null,null,null,null)
D.bKh=new B.ae(A.dW,21,A.c,null,null,null)
D.bKm=new B.ae(A.hy,17,A.c,null,null,null)
D.bKn=new B.ae(A.vn,null,null,null,null,null)
D.bKC=new B.ae(A.a_I,20,A.az,null,null,null)
D.bKR=new B.ae(A.pN,22,E.mU,null,null,null)
D.bKY=new B.ae(A.pM,13,A.ad,null,null,null)
D.bL_=new B.ae(A.alb,20,A.az,null,null,null)
D.byX=new B.a_(57495,"MaterialIcons",!1)
D.bL4=new B.ae(D.byX,null,null,null,null,null)
D.bL8=new B.ae(A.nU,18,A.c,null,null,null)
D.bLt=new B.ae(A.tT,28,A.c,null,null,null)
D.bLD=new B.ae(D.ak1,null,A.aE,null,null,null)
D.bLE=new B.ae(A.pP,22,A.c,null,null,null)
D.amo=new B.ae(A.Zv,16,null,null,null,null)
D.bMp=new B.ae(A.vn,32,A.c,null,null,null)
D.bN7=new B.ae(A.iV,22,A.c,null,null,null)
D.bNb=new B.ae(A.r2,22,A.ad,null,null,null)
D.amD=new B.ae(A.tH,null,A.c_,null,null,null)
D.bO5=new B.ae(A.qV,18,null,null,null,null)
D.bOH=new B.ae(A.dW,18,A.co,null,null,null)
D.a06=new B.ae(A.cA,18,A.az,null,null,null)
D.bON=new B.ae(A.al5,null,null,null,null,null)
D.bPc=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aPd,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.eTS=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bPu=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eTS,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.bPV=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.cR8=w([A.dS,A.aE],x.O)
D.bRF=new B.a8(A.a3,A.a7,A.x,D.cR8,null,null)
D.bRR=new B.a8(A.b0,A.b5,A.Tq,A.atH,null,null)
D.b5R=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b9T=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bcN=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b7Y=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cCf=w([D.b5R,D.b9T,D.bcN,D.b7Y],x.O)
D.bS9=new B.a8(A.ax,A.aC,A.x,D.cCf,A.GH,null)
D.dbW=w([A.ct,A.bA,A.b6],x.O)
D.bSb=new B.a8(A.b0,A.b5,A.Tq,D.dbW,null,null)
D.dde=w([A.bj,A.c9],x.O)
D.bSf=new B.a8(A.a3,A.a7,A.x,D.dde,null,null)
D.d8t=w([A.hu,A.d9,A.aH],x.O)
D.bSh=new B.a8(A.ax,A.aC,A.x,D.d8t,null,null)
D.cWN=w([A.cZ,A.f7],x.O)
D.bSl=new B.a8(A.a3,A.a7,A.x,D.cWN,null,null)
D.dbR=w([N.l6,A.d9],x.O)
D.ano=new B.a8(A.a3,A.a7,A.x,D.dbR,null,null)
D.bar=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dbO=w([D.bar,D.x4,A.bY],x.O)
D.bSq=new B.a8(A.a3,A.a7,A.x,D.dbO,null,null)
D.cSK=w([A.b7,A.d_,A.fm],x.O)
D.bSr=new B.a8(A.ax,A.aC,A.x,D.cSK,null,null)
D.NA=new B.a8(A.a3,A.a7,A.x,A.GV,null,null)
D.bij=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cvl=w([D.bij,A.bY,A.j7],x.O)
D.ant=new B.a8(A.ax,A.aC,A.x,D.cvl,null,null)
D.d0O=w([A.wT,A.aw,D.An],x.O)
D.bTr=new B.a8(A.a3,A.a7,A.x,D.d0O,null,null)
D.bjA=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b8N=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bdP=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cRU=w([D.bjA,D.b8N,D.bdP],x.O)
D.anu=new B.a8(A.a3,A.a7,A.x,D.cRU,null,null)
D.bat=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bVo=w([Aw.aeR,D.bat],x.O)
D.bTA=new B.a8(A.b0,A.b5,A.x,D.bVo,null,null)
D.cQ_=w([A.mT,A.bI],x.O)
D.bTE=new B.a8(A.b0,A.b5,A.x,D.cQ_,null,null)
D.d5E=w([A.aE,A.dO],x.O)
D.bTK=new B.a8(A.a3,A.a7,A.x,D.d5E,null,null)
D.adO=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avn=w([D.adO,D.j5,D.K9],x.O)
D.bUb=new B.a8(A.ax,A.aC,A.x,D.avn,null,null)
D.cvd=w([A.dv,A.dK],x.O)
D.bUm=new B.a8(A.b0,A.b5,A.x,D.cvd,null,null)
D.d2S=w([A.uO,Az.Ef],x.O)
D.bVa=new B.a8(A.a3,A.a7,A.x,D.d2S,null,null)
D.fmc=new B.x("Which Bio link?",null,A.cx,null,null,null,null,null,null,null,null,null)
D.bVl=new B.pB(null,D.fmc,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yp=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3Y=new C.kN(2,"elegantNavy")
D.fUs=w([A.Wh,D.j5,A.bY],x.O)
D.jD=new C.xe(0,"classic")
D.a3L=new C.ji("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3Y,4294967035,4279378237,4290283019,D.jD)
D.aEu=new C.kN(3,"elegantGold")
D.b5q=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b6l=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acq=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fTV=w([D.b5q,D.b6l,D.acq],x.O)
D.a3J=new C.ji("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aEu,4294966515,4281016592,4289102906,D.jD)
D.dxY=new C.kN(22,"goldRibbon")
D.fTR=w([A.Wh,D.j5,A.hV],x.O)
D.a3C=new C.ji("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dxY,4294967035,4279378237,4291404327,D.jD)
D.dxZ=new C.kN(23,"goldBaroque")
D.ad1=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fTX=w([D.ad1,A.aw,A.j7],x.O)
D.a3D=new C.ji("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dxZ,4294964964,4283053072,4292128567,D.jD)
D.dy0=new C.kN(4,"elegantEmerald")
D.b7t=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b8k=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fU2=w([D.b7t,D.b8k,A.hV],x.O)
D.a3E=new C.ji("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dy0,4294376440,4279122734,4291404327,D.jD)
D.dy1=new C.kN(5,"elegantBurgundy")
D.bbO=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fU9=w([D.bbO,A.abH,A.hV],x.O)
D.a3H=new C.ji("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dy1,4294965238,4283043359,4291404327,D.jD)
D.dxV=new C.kN(19,"goldFiligree")
D.KK=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fTY=w([D.KK,A.aw,A.j7],x.O)
D.a3F=new C.ji("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dxV,4294966259,4279378237,4292128567,D.jD)
D.dxW=new C.kN(20,"goldLaurel")
D.bi9=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fUa=w([A.K2,A.hV,D.bi9],x.O)
D.a3G=new C.ji("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dxW,4294966776,4282000405,4291404327,D.jD)
D.dxX=new C.kN(21,"goldCrest")
D.aby=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.big=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fU_=w([D.aby,A.aw,D.big],x.O)
D.a3K=new C.ji("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dxX,4294965484,4283053072,4292128567,D.jD)
D.dy_=new C.kN(24,"goldStar")
D.bjt=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fU3=w([D.bjt,A.aw,D.j5],x.O)
D.a3I=new C.ji("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dy_,4294966518,4279378237,4292128567,D.jD)
D.Gj=w([D.a3L,D.a3J,D.a3C,D.a3D,D.a3E,D.a3H,D.a3F,D.a3G,D.a3K,D.a3I],x.h)
D.q1=new C.mr(0,"blank")
D.R8=new C.mr(1,"title")
D.mv=new C.mr(2,"titleContent")
D.dSA=new C.mr(3,"twoColumn")
D.Ci=new C.mr(4,"section")
D.dSB=new C.mr(5,"comparison")
D.Hu=new C.mr(6,"flashcard")
D.Hv=new C.mr(7,"quiz")
D.Hw=new C.mr(8,"worksheet")
D.anQ=w([D.q1,D.R8,D.mv,D.dSA,D.Ci,D.dSB,D.Hu,D.Hv,D.Hw],B.ax("O<mr>"))
D.awm=w([Ap.VE,A.dK],x.O)
D.kl=w([A.bY,A.bK,A.hU,A.hE,D.An],x.O)
D.dtS=new C.iV("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awm,D.kl)
D.bis=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bbM=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cQc=w([D.bis,D.bbM],x.O)
D.dtJ=new C.iV("confetti","Golden Confetti","Together we rise",D.cQc,D.kl)
D.cNt=w([A.nx,A.Vj],x.O)
D.dtK=new C.iV("crown","Crown of Glory","Built for our community",D.cNt,D.kl)
D.b8E=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bbr=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cU1=w([D.b8E,D.bbr],x.O)
D.tX=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dtE=new C.iV("aurora","Aurora Gala","A brighter future, together",D.cU1,D.tX)
D.bcP=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d2Y=w([G.abb,D.bcP],x.O)
D.dtV=new C.iV("champagne","Champagne Toast","Cheers to every member",D.d2Y,D.kl)
D.dtW=new C.iV("diamonds","Diamond Rain","Every member is a jewel",Y.awX,D.tX)
D.b6c=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.baY=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d7N=w([D.b6c,D.baY],x.O)
D.dtz=new C.iV("starburst","Golden Starburst","Thank you!",D.d7N,D.kl)
D.bVu=w([A.f6,A.wX],x.O)
D.abk=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.P8=w([A.oo,A.io,A.v_,A.mL,D.abk],x.O)
D.du2=new C.iV("balloons","Luxury Balloons","Let's celebrate",D.bVu,D.P8)
D.cMM=w([A.Vr,A.w],x.O)
D.dtR=new C.iV("galaxy","Galaxy Spiral","The sky is not the limit",D.cMM,D.tX)
D.bgz=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d_E=w([A.kc,D.bgz],x.O)
D.dtM=new C.iV("redcarpet","Red Carpet","Tonight we shine",D.d_E,D.kl)
D.beq=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bcC=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d3S=w([D.beq,D.bcC],x.O)
D.dtB=new C.iV("coins","Gold Coin Rain","Every contribution counts",D.d3S,D.kl)
D.dal=w([A.dv,A.hD],x.O)
D.dtH=new C.iV("lanterns","Sky Lanterns","Lighting the way together",D.dal,D.kl)
D.b9z=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cKP=w([A.wZ,D.b9z],x.O)
D.dtD=new C.iV("hearts","Floating Hearts","Made with love",D.cKP,D.P8)
D.b6M=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b7z=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dbM=w([D.b6M,D.b7z],x.O)
D.du1=new C.iV("petals","Rose Petals","Thank you, from our hearts",D.dbM,D.P8)
D.bht=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d86=w([A.l5,D.bht],x.O)
D.dty=new C.iV("butterflies","Golden Butterflies","New beginnings",D.d86,D.kl)
D.bdM=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cLK=w([D.bdM,A.w],x.O)
D.dtU=new C.iV("neon","Neon Night","Let's go!",D.cLK,D.tX)
D.baG=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d5O=w([A.Kp,D.baG],x.O)
D.dtX=new C.iV("disco","Disco Ball","Party time",D.d5O,D.tX)
D.bei=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d5m=w([A.hu,D.bei],x.O)
D.dtC=new C.iV("sunrise","Golden Sunrise","A new day for our community",D.d5m,D.kl)
D.d5_=w([A.qF,A.dK],x.O)
D.dtY=new C.iV("pearls","Ocean Pearls","Deep roots, bright future",D.d5_,D.tX)
D.b8J=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d5d=w([D.b8J,A.dK],x.O)
D.du0=new C.iV("snow","Winter Gala","Warm wishes to all",D.d5d,D.tX)
D.b5z=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b6w=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.daJ=w([D.b5z,D.b6w],x.O)
D.dtQ=new C.iV("laurel","Laurel Victory","We did it together",D.daJ,D.kl)
D.b5p=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bbn=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cJX=w([D.b5p,D.bbn],x.O)
D.du_=new C.iV("ribbons","Silk Ribbons","Elegance in every step",D.cJX,D.kl)
D.bcm=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cva=w([G.Am,D.bcm],x.O)
D.dtN=new C.iV("kente","Kente Pride","Proud of our roots",D.cva,D.kl)
D.bf_=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bhN=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cVx=w([D.bf_,D.bhN],x.O)
D.dtI=new C.iV("trophy","Trophy Shine","Winners together",D.cVx,D.kl)
D.d5j=w([Aq.Kf,A.w],x.O)
D.dtA=new C.iV("shooting","Shooting Stars","Make a wish",D.d5j,D.tX)
D.b5G=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aeE=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.daZ=w([D.b5G,D.aeE],x.O)
D.dtO=new C.iV("bokeh","Golden Bokeh","Shine bright",D.daZ,D.kl)
D.b61=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d0s=w([D.b61,A.w],x.O)
D.dtG=new C.iV("orbits","Golden Orbits","Always moving forward",D.d0s,D.kl)
D.bhu=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cY9=w([A.acm,D.bhu],x.O)
D.dtL=new C.iV("flowers","Blooming Garden","Growing together",D.cY9,D.P8)
D.b5P=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b6q=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d9P=w([D.b5P,D.b6q],x.O)
D.dtF=new C.iV("music","Music Party","Celebrate with us",D.d9P,D.tX)
D.b7j=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bic=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cL0=w([D.b7j,D.bic],x.O)
D.dtZ=new C.iV("mandala","Royal Mandala","Harmony and unity",D.cL0,D.kl)
D.cYe=w([G.Am,D.aeE],x.O)
D.dtT=new C.iV("sparklers","Golden Sparklers","Light up the night",D.cYe,D.kl)
D.dtP=new C.iV("city","City Lights","The whole city celebrates",D.awm,D.kl)
D.Gs=w([D.dtS,D.dtJ,D.dtK,D.dtE,D.dtV,D.dtW,D.dtz,D.du2,D.dtR,D.dtM,D.dtB,D.dtH,D.dtD,D.du1,D.dty,D.dtU,D.dtX,D.dtC,D.dtY,D.du0,D.dtQ,D.du_,D.dtN,D.dtI,D.dtA,D.dtO,D.dtG,D.dtL,D.dtF,D.dtZ,D.dtT,D.dtP],B.ax("O<iV>"))
D.efX=new B.y("","No ring")
D.euy=new B.y("platinum","Platinum")
D.ery=new B.y("glow","Glow")
D.ejl=new B.y("double","Double line")
D.eig=new B.y("framed","Gallery frame")
D.efz=new B.y("rosegold","Rose gold")
D.esi=new B.y("jewels","Jeweled")
D.ep1=new B.y("aurora","Aurora")
D.BF=w([D.efX,A.a5g,D.euy,D.ery,H.aKZ,D.ejl,A.a5i,D.eig,D.efz,D.esi,D.ep1],x.L)
D.ceR=w([D.a3F,D.a3G,D.a3K,D.a3C,D.a3D,D.a3I],x.h)
D.bKv=new B.ae(G.aiT,16,null,null,null,null)
D.b0K=new B.vf(A.bg,D.bKv,null,x.U)
D.bzo=new B.a_(58027,"MaterialIcons",!1)
D.bEd=new B.ae(D.bzo,16,null,null,null,null)
D.b0I=new B.vf(A.L,D.bEd,null,x.U)
D.bzp=new B.a_(58030,"MaterialIcons",!1)
D.bIe=new B.ae(D.bzp,16,null,null,null,null)
D.b0L=new B.vf(A.dL,D.bIe,null,x.U)
D.cl0=w([D.b0K,D.b0I,D.b0L],B.ax("O<vf<pS>>"))
D.csz=w([A.Ar,A.hg],x.O)
D.csA=w([A.b7,A.bo,A.fm],x.O)
D.OY=w([A.bK,A.hE,A.hU,A.aw,A.mL],x.O)
D.cvg=w([A.bY,D.j5,D.K9],x.O)
D.cvO=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.edC=new B.y(4278913286,4280030216)
D.edU=new B.y(4279373061,4278518787)
D.ee0=new B.y(4279898630,4278847235)
D.cUZ=w([D.edC,D.edU,D.ee0],x.n)
D.cQS=w(["\u265b","\u269c","\u2726"],x.s)
D.dxT=new C.xg("Royal Onyx & Gold",D.cUZ,4292128567,4294370209,4294965479,3874020544,D.cQS)
D.edp=new B.y(4278326799,4278598442)
D.edr=new B.y(4278395929,4278258953)
D.edy=new B.y(4278599728,4278327826)
D.dac=w([D.edp,D.edr,D.edy],x.n)
D.cLC=w(["\u269c","\u2756","\u2727"],x.s)
D.dxQ=new C.xg("Imperial Emerald",D.dac,4293050997,4294699968,4294180856,3872254170,D.cLC)
D.eds=new B.y(4278455076,4278918747)
D.edx=new B.y(4278587439,4278322714)
D.edL=new B.y(4279051376,4278455076)
D.d8p=w([D.eds,D.edx,D.edL],x.n)
D.d12=w(["\u2654","\u2726","\u2748"],x.s)
D.dxK=new C.xg("Sapphire Crown",D.d8p,4291417834,4294967295,4294310143,3871986666,D.d12)
D.edZ=new B.y(4279894534,4283041554)
D.eea=new B.y(4281008906,4279042307)
D.eei=new B.y(4284221976,4279894534)
D.ddN=w([D.edZ,D.eea,D.eei],x.n)
D.cMV=w(["\u265b","\u2766","\u2726"],x.s)
D.dxM=new C.xg("Ruby Throne",D.ddN,4293378685,4294963145,4294964466,3874213833,D.cMV)
D.edT=new B.y(4279371039,4281995100)
D.ee2=new B.y(4280092723,4278714896)
D.eef=new B.y(4283045242,4279371039)
D.day=w([D.edT,D.ee2,D.eef],x.n)
D.d8L=w(["\u2655","\u2756","\u2727"],x.s)
D.dxR=new C.xg("Amethyst Palace",D.day,4293314984,4294963421,4294702591,3873229802,D.d8L)
D.edu=new B.y(4278519045,4280032287)
D.edM=new B.y(4279111184,4278321666)
D.ee7=new B.y(4280492839,4278716426)
D.d7k=w([D.edu,D.edM,D.ee7],x.n)
D.d_r=w(["\u2726","\u25c6","\u2742"],x.s)
D.dxO=new C.xg("Obsidian & Platinum",D.d7k,4293256418,4294967295,4294638330,3872378836,D.d_r)
D.ee_=new B.y(4279896588,4282194463)
D.ee8=new B.y(4280553487,4279043334)
D.eeg=new B.y(4283048488,4279896588)
D.cZX=w([D.ee_,D.ee8,D.eeg],x.n)
D.dc9=w(["\u2766","\u273f","\u2727"],x.s)
D.dxL=new C.xg("Rose Gold Velvet",D.cZX,4293440672,4294960345,4294964979,3874214602,D.dc9)
D.edv=new B.y(4278520340,4279180595)
D.edA=new B.y(4278718495,4278322443)
D.edX=new B.y(4279510591,4278520340)
D.cBY=w([D.edv,D.edA,D.edX],x.n)
D.d06=w(["\u269c","\u2736","\u2756"],x.s)
D.dxP=new C.xg("Midnight Brass",D.cBY,4291405148,4293975208,4294439914,3872837564,D.d06)
D.eev=new B.y(4294703086,4293780428)
D.eer=new B.y(4294307549,4293187253)
D.eew=new B.y(4294966517,4293977807)
D.cOZ=w([D.eev,D.eer,D.eew],x.n)
D.d0v=w(["\u269c","\u265b","\u2726"],x.s)
D.dxS=new C.xg("Ivory Marble & Gold",D.cOZ,4289760572,4286209048,4280951062,3863625518,D.d0v)
D.edG=new B.y(4278978566,4280555024)
D.edW=new B.y(4279504137,4278518530)
D.eec=new B.y(4281211923,4278978566)
D.cML=w([D.edG,D.edW,D.eec],x.n)
D.d9s=w(["\u2742","\u2726","\u265c"],x.s)
D.dxN=new C.xg("Onyx & Copper",D.cML,4291856987,4294365880,4294964718,3873885630,D.d9s)
D.cvW=w([D.dxT,D.dxQ,D.dxK,D.dxM,D.dxR,D.dxO,D.dxL,D.dxP,D.dxS,D.dxN],B.ax("O<xg>"))
D.cyc=w([A.aw,D.An,A.hE],x.O)
D.elr=new B.y("Original",null)
D.elz=new B.y("Wide 16:9",1.7777777777777777)
D.enN=new B.y("Landscape 3:2",1.5)
D.ekV=new B.y("Photo 4:3",1.3333333333333333)
D.emC=new B.y("Square",1)
D.ey7=new B.y("Portrait 3:4",0.75)
D.atP=w([D.elr,D.elz,D.enN,D.ekV,D.emC,D.ey7],B.ax("O<+(n,N?)>"))
D.atQ=w([A.hE,A.bU,A.b8,A.by],x.O)
D.enX=new B.y("","Original")
D.epL=new B.y("circle","Circle")
D.evi=new B.y("rounded","Rounded")
D.ewc=new B.y("triangle","Triangle")
D.erM=new B.y("hexagon","Hexagon")
D.eq9=new B.y("diamond","Diamond")
D.ep0=new B.y("arch","Arch")
D.BK=w([D.enX,D.epL,D.evi,D.ewc,D.erM,D.eq9,D.ep0],x.L)
D.dsY=new C.l8("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ke,A.dq,A.aK)
D.dtd=new C.l8("campus_green","Campus Green","Normal",A.aZ,A.mR,A.t5,A.h3,A.eu)
D.dt4=new C.l8("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.it,A.nB)
D.dtb=new C.l8("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aL,A.M,A.aK)
D.dsX=new C.l8("coral_fresh","Coral Fresh","Normal",A.cd,A.iq,A.qx,A.jQ,A.t_)
D.dtc=new C.l8("lavender_calm","Lavender Calm","Normal",A.b6,A.pi,A.Ab,A.pl,A.jr)
D.dsZ=new C.l8("ocean_breeze","Ocean Breeze","Normal",A.f7,A.qJ,A.rV,A.uQ,A.nC)
D.adU=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dt9=new C.l8("berry_pop","Berry Pop","Normal",A.ff,D.adU,A.k9,G.WL,A.ED)
D.dt_=new C.l8("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dv,A.k9,A.cp)
D.dt8=new C.l8("executive_navy","Executive Navy","Professional",A.d6,A.adg,A.dq,A.l3,A.bJ)
D.dt6=new C.l8("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aQ,A.cp)
D.dt0=new C.l8("corporate_steel","Corporate Steel","Professional",A.mP,A.M,A.mb,A.fg,A.bJ)
D.dt3=new C.l8("gold_luxe","Gold Luxe","Luxury",A.om,A.dF,A.on,A.lB,A.bK)
D.bem=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dt7=new C.l8("rose_gold_elite","Rose Gold Elite","Luxury",A.hg,D.bem,A.WB,A.io,A.mL)
D.dta=new C.l8("platinum_night","Platinum Night","Luxury",A.cp,A.dK,A.bm,A.aQ,A.aL)
D.dte=new C.l8("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.po,A.eX,A.pw,A.js)
D.dsW=new C.l8("royal_purple","Royal Purple","Luxury",A.mQ,A.VL,A.jr,A.k9,A.K1)
D.dt5=new C.l8("neon_pitch","Neon Pitch","Bold",A.b8,A.dK,A.M,A.b1,A.aL)
D.dt2=new C.l8("crimson_impact","Crimson Impact","Bold",A.bI,A.kc,A.er,A.tg,A.f3)
D.dt1=new C.l8("sunset_gallery","Sunset Gallery","Bold",A.fC,A.t_,A.jQ,A.qx,A.op)
D.GB=w([D.dsY,D.dtd,D.dt4,D.dtb,D.dsX,D.dtc,D.dsZ,D.dt9,D.dt_,D.dt8,D.dt6,D.dt0,D.dt3,D.dt7,D.dta,D.dte,D.dsW,D.dt5,D.dt2,D.dt1],B.ax("O<l8>"))
D.cJE=w([A.bY,D.j5],x.O)
D.d_c=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eoN=new B.y("Faces & people",D.d_c)
D.cyg=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ect=new B.y("Ideas & work",D.cyg)
D.cRm=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.erR=new B.y("Nature",D.cRm)
D.d_k=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.elp=new B.y("Places & things",D.d_k)
D.cUz=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ep5=new B.y("Symbols",D.cUz)
D.cJK=w([D.eoN,D.ect,D.erR,D.elp,D.ep5],B.ax("O<+(n,aj<n>)>"))
D.b5U=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cK7=w([A.bY,D.acq,D.b5U],x.O)
D.b05=new B.ac(0,A.G,A.JZ,A.aFj,40)
D.b_N=new B.ac(0,A.G,A.nz,A.ek,8)
D.cKj=w([D.b05,D.b_N],x.V)
D.cKL=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aue=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1j=w([A.hE,A.fm,A.bI,A.aB,A.cd],x.O)
D.cLw=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acE=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cLH=w([A.Wr,D.acE,A.Wr],x.O)
D.cLN=w([A.hV,D.j5,D.K9],x.O)
D.eld=new B.y(A.bg,D.a_5)
D.emx=new B.y(A.L,D.a_4)
D.egA=new B.y(A.dL,D.a_6)
D.cMG=w([D.eld,D.emx,D.egA],B.ax("O<+(pS,a_)>"))
D.cQ=new C.Ih(0,"text")
D.lm=new C.Ih(1,"image")
D.f_=new C.Ih(2,"shape")
D.R7=new C.Ih(3,"pdf")
D.kS=new C.Ih(4,"signature")
D.a44=new C.Ih(5,"bio")
D.cNx=w([D.cQ,D.lm,D.f_,D.R7,D.kS,D.a44],B.ax("O<Ih>"))
D.cNy=w([A.bl,A.cD],B.ax("O<Hc>"))
D.cO8=w(["School","Documents","Sign & present"],x.s)
D.b0a=new B.ac(0,A.G,A.aeu,A.ue,28)
D.cOs=w([D.b0a],x.V)
D.cOL=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Pg=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.auD=w([A.hE,A.EC,A.aL,A.c,A.oo,A.aw],x.O)
D.exv=new B.y(0.1,0.08)
D.erP=new B.y(0.3,0.05)
D.eg6=new B.y(0.55,0.1)
D.ekd=new B.y(0.8,0.06)
D.eng=new B.y(0.92,0.16)
D.emM=new B.y(0.2,0.2)
D.ekG=new B.y(0.7,0.22)
D.eqw=new B.y(0.05,0.4)
D.enF=new B.y(0.95,0.45)
D.egP=new B.y(0.12,0.7)
D.ej_=new B.y(0.88,0.75)
D.ej7=new B.y(0.4,0.9)
D.eeL=new B.y(0.65,0.93)
D.ejQ=new B.y(0.25,0.97)
D.ela=new B.y(0.85,0.9)
D.ehE=new B.y(0.5,0.04)
D.cQ7=w([D.exv,D.erP,D.eg6,D.ekd,D.eng,D.emM,D.ekG,D.eqw,D.enF,D.egP,D.ej_,D.ej7,D.eeL,D.ejQ,D.ela,D.ehE],x.G)
D.cQe=w([A.c,A.hg,A.aT,A.aV],x.O)
D.dUc=new C.jB("office_blue","Office Blue",A.bj,A.dq,A.aK,A.c,A.ke)
D.dUn=new C.jB("campus_green","Campus Green",A.aZ,A.h3,A.eu,A.mR,A.t5)
D.dUd=new C.jB("sunset","Sunset",A.fC,A.jQ,A.nB,A.iq,A.qx)
D.dUe=new C.jB("midnight","Midnight",A.aE,A.k9,A.cp,A.M,A.dv)
D.dUp=new C.jB("classic","Classic",A.d9,A.dF,A.lC,A.hU,A.h1)
D.dUm=new C.jB("rose_gold","Rose Gold",A.hg,A.x_,A.wZ,A.v_,A.Ar)
D.dU7=new C.jB("ocean_teal","Ocean Teal",A.f7,A.uQ,A.nC,A.qJ,A.rV)
D.dU6=new C.jB("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aQ,A.aL)
D.dU5=new C.jB("neon_night","Neon Night",A.b8,A.b1,A.aL,A.dK,A.M)
D.dUh=new C.jB("lavender","Lavender",A.b6,A.pl,A.jr,A.pi,A.Ab)
D.dUj=new C.jB("coral","Coral",A.cd,A.jQ,A.t_,A.iq,A.op)
D.dU8=new C.jB("forest","Forest",A.hh,A.e9,A.cC,A.lD,A.es)
D.dU9=new C.jB("berry","Berry",A.ff,G.WL,A.ED,D.adU,A.k9)
D.dUg=new C.jB("sand","Sand",A.dT,A.it,A.nB,A.hU,A.bK)
D.dUl=new C.jB("ice","Ice",A.mP,A.Kq,A.aK,A.mN,A.fg)
D.dUb=new C.jB("charcoal","Charcoal",A.ak,A.aQ,A.cp,A.bm,A.M)
D.dU4=new C.jB("mint","Mint",A.aV,A.fu,A.h3,A.lD,A.pw)
D.dUk=new C.jB("crimson","Crimson",A.bI,A.mT,A.kc,A.EA,A.tg)
D.b8j=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dUf=new C.jB("gold","Gold",A.om,A.uO,A.on,D.b8j,A.lB)
D.dUi=new C.jB("aqua","Aqua",A.bN,A.Ep,A.ok,A.pk,A.oq)
D.dUa=new C.jB("plum","Plum",A.mQ,A.wX,A.ED,A.Eb,A.qI)
D.dUo=new C.jB("steel","Steel",A.d6,A.dq,A.bm,A.ke,A.l3)
D.a1y=w([D.dUc,D.dUn,D.dUd,D.dUe,D.dUp,D.dUm,D.dU7,D.dU6,D.dU5,D.dUh,D.dUj,D.dU8,D.dU9,D.dUg,D.dUl,D.dUb,D.dU4,D.dUk,D.dUf,D.dUi,D.dUa,D.dUo],B.ax("O<jB>"))
D.cQz=w([A.bY,A.j7],x.O)
D.R9=new C.hw(10,"rotate3d")
D.Hy=new C.hw(8,"flip")
D.aEN=new C.hw(19,"spiral")
D.q2=new C.hw(16,"bounce")
D.aEQ=new C.hw(9,"flipVertical")
D.cQA=w([D.R9,D.Hy,D.aEN,D.q2,D.aEQ],x.i)
D.e5=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cQV=w([0.62,1],x.x)
D.cRu=w([0,0.32,0.68,1],x.x)
D.mw=new C.hw(6,"zoom")
D.u8=new C.hw(4,"slideUp")
D.u7=new C.hw(2,"slideLeft")
D.cRD=w([D.mw,D.Hy,D.u8,D.R9,D.u7],x.i)
D.cS7=w([A.bU,A.hg,A.io,A.hE,A.c],x.O)
D.b00=new B.ac(0,A.G,D.acR,A.ue,30)
D.cSP=w([D.b00],x.V)
D.e2K=new B.u(0,-2.5)
D.e2A=new B.u(-2.5,0)
D.e1i=new B.u(2.5,0)
D.cSS=w([A.Rp,A.a4r,A.aFP,A.a4q,D.e2K,H.aFL,D.e2A,D.e1i],x.dN)
D.GI=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cTk=w([23,114,69,56,80,144],x.t)
D.cTK=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cU8=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cVB=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cVF=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uv(0,"rectangle")
D.eI=new C.uv(1,"circle")
D.kT=new C.uv(6,"hexagon")
D.cVR=w([D.be,D.eI,D.kT],x.m)
D.o_=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ae0=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cWo=w([D.ae0,A.e9],x.O)
D.egi=new B.y("","Classic")
D.eeY=new B.y("caps","Bold caps")
D.eqz=new B.y("elegant","Elegant")
D.evB=new B.y("shadow","Shadow")
D.ekz=new B.y("neon","Neon glow")
D.eue=new B.y("outline","Outline")
D.etq=new B.y("marker","Highlighter")
D.evM=new B.y("stamp","Stamp")
D.evd=new B.y("retro","Retro")
D.ejx=new B.y("threed","3D")
D.er4=new B.y("fire","Fire")
D.es0=new B.y("ice","Ice")
D.epK=new B.y("chalk","Chalk")
D.epP=new B.y("comic","Comic")
D.evO=new B.y("sunset","Sunset")
D.ewV=new B.y("softglow","Soft glow")
D.et_=new B.y("lowercase","Lowercase")
D.eqg=new B.y("double","Echo")
D.ex3=new B.y("whisper","Whisper")
D.avv=w([D.egi,D.eeY,D.eqz,D.evB,D.ekz,D.eue,D.etq,D.evM,D.evd,D.ejx,H.aKX,D.er4,D.es0,D.epK,D.epP,A.a5g,D.evO,D.ewV,D.et_,D.eqg,D.ex3],x.L)
D.cXC=w([3,5,7,10,12,15],x.t)
D.cYW=w([A.bU,A.bK,A.c,A.ez,A.ct],x.O)
D.dkC=new C.t5(10,"cardWorld")
D.Ca=new C.B3(3,"rounded")
D.dAU=new C.lb("world","NGMY World",D.dkC,D.Ca,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dkD=new C.t5(11,"cardSplit")
D.dAQ=new C.lb("business","Business Wire",D.dkD,D.Ca,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dkE=new C.t5(12,"cardBreaking")
D.dB2=new C.lb("breaking","Breaking Red",D.dkE,D.Ca,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dkF=new C.t5(13,"cardFeature")
D.dAW=new C.lb("feature","Tech Feature",D.dkF,D.Ca,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDj=new C.t5(6,"circle")
D.aDd=new C.B3(4,"circle")
D.dB_=new C.lb("parchment","Royal Circle",D.aDj,D.aDd,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dAP=new C.lb("ocean","Blue Ocean",D.aDj,D.aDd,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dkI=new C.t5(7,"rail")
D.aDc=new C.B3(1,"double")
D.dAR=new C.lb("forest","Green Leaf",D.dkI,D.aDc,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDg=new C.t5(1,"sideBySide")
D.dB4=new C.lb("herald","NGMY Herald",D.aDg,D.Ca,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aDf=new C.t5(0,"classic")
D.a3h=new C.B3(9,"shadow")
D.dB3=new C.lb("daily","The Daily",D.aDf,D.a3h,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dkG=new C.t5(2,"splash")
D.aDe=new C.B3(6,"cutCorner")
D.dAO=new C.lb("tabloid","Big Tabloid",D.dkG,D.aDe,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDk=new C.t5(9,"minimal")
D.dAZ=new C.lb("modern","Modern Digest",D.aDk,D.Ca,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDh=new C.t5(3,"magazine")
D.aDb=new C.B3(0,"plain")
D.dAV=new C.lb("midnight","Midnight Edition",D.aDh,D.aDb,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dkJ=new C.t5(8,"banner")
D.dAX=new C.lb("metro","Metro Wire",D.dkJ,D.aDe,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dkB=new C.B3(8,"arch")
D.dAY=new C.lb("sunrise","Sunrise Post",D.aDh,D.dkB,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDi=new C.t5(5,"scrapbook")
D.dkA=new C.B3(5,"tape")
D.dAT=new C.lb("neon","Neon Beat",D.aDi,D.dkA,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dkH=new C.t5(4,"wrap")
D.dB5=new C.lb("gold","Golden Press",D.dkH,D.a3h,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dB6=new C.lb("minimal","Paper White",D.aDk,D.a3h,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dAS=new C.lb("gazette","Fresh Gazette",D.aDf,D.aDc,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dB1=new C.lb("times","Classic Times",D.aDg,D.aDb,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QG=new C.B3(2,"polaroid")
D.dB0=new C.lb("scrapbook","Memory Scrapbook",D.aDi,D.QG,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1O=w([D.dAU,D.dAQ,D.dB2,D.dAW,D.dB_,D.dAP,D.dAR,D.dB4,D.dB3,D.dAO,D.dAZ,D.dAV,D.dAX,D.dAY,D.dAT,D.dB5,D.dB6,D.dAS,D.dB1,D.dB0],B.ax("O<lb>"))
D.cZ7=w([0.45,1],x.x)
D.GK=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cZt=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fPD=new C.oq("Original",0,1,1,0,0,0)
D.fPH=new C.oq("Black & white",0,1.1,0,0,0,0)
D.fPu=new C.oq("Noir",-0.05,1.55,0,0,0,0)
D.fPy=new C.oq("Sepia",0,1,0.25,0.9,0,0)
D.fPx=new C.oq("Vivid",0,1.15,1.6,0,0,0)
D.fPq=new C.oq("Pop",0,1.3,1.9,0,0,0)
D.fPs=new C.oq("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fPE=new C.oq("Matte",0,0.9,0.85,0,0,0.55)
D.fPz=new C.oq("Cool",0,1.05,1,-0.8,0,0)
D.fPG=new C.oq("Warm",0.03,1.05,1.1,0.8,0,0)
D.fPr=new C.oq("Golden hour",0.04,1,1.25,1,0,0)
D.fPw=new C.oq("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fPF=new C.oq("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fPv=new C.oq("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fPB=new C.oq("Retro",0,0.9,0.7,0.4,0,0.35)
D.fPA=new C.oq("Forest",0,1,1.2,-0.1,-0.45,0)
D.fPC=new C.oq("Rose",0,1,1.1,0.3,0.4,0)
D.fPt=new C.oq("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cZu=w([D.fPD,D.fPH,D.fPu,D.fPy,D.fPx,D.fPq,D.fPs,D.fPE,D.fPz,D.fPG,D.fPr,D.fPw,D.fPF,D.fPv,D.fPB,D.fPA,D.fPC,D.fPt],B.ax("O<oq>"))
D.b5l=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cZv=w([D.ae0,A.e9,D.b5l],x.O)
D.ecm=new B.y(0.12,0.3)
D.esb=new B.y(0.26,0.75)
D.eqv=new B.y(0.8,0.22)
D.evW=new B.y(0.9,0.7)
D.esZ=new B.y(0.5,0.15)
D.eug=new B.y(0.65,0.85)
D.ei7=new B.y(0.08,0.85)
D.cZH=w([D.ecm,D.esb,D.eqv,D.evW,D.esZ,D.eug,D.ei7],x.G)
D.cZR=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.avF=w([A.b8,A.bU,A.by,A.b7],x.O)
D.d_v=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d_H=w([A.c,A.fg,A.dy,A.uR],x.O)
D.b8w=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d0E=w([D.b8w,D.acE],x.O)
D.d0F=w([A.wT,A.aw],x.O)
D.d0T=w([0,0.25,0.75,1],x.x)
D.d0V=w([A.wP,A.oo],x.O)
D.aEn=new C.kN(10,"kenteSunset")
D.fTT=w([D.ad1,A.jM,A.aw],x.O)
D.dwb=new C.ji("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aEn,4294964964,4282000405,4279983648,D.jD)
D.aEo=new C.kN(11,"indigoMudcloth")
D.b6h=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fU6=w([D.b6h,A.acB,A.hV],x.O)
D.dwj=new C.ji("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aEo,4294439140,4279903102,4279903102,D.jD)
D.aEp=new C.kN(12,"adinkraRoyal")
D.biV=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fU7=w([D.aby,D.biV,A.aw],x.O)
D.dwl=new C.ji("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aEp,4294965484,4285218591,4287322667,D.jD)
D.aEq=new C.kN(13,"nileLotus")
D.bff=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bc1=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fUc=w([D.bff,D.bc1,A.hV],x.O)
D.dwk=new C.ji("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEq,4294244340,4279196764,4279196764,D.jD)
D.aEr=new C.kN(14,"shweshweIvory")
D.bah=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b9a=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b6L=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fTU=w([D.bah,D.b9a,D.b6L],x.O)
D.dwg=new C.ji("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEr,4294505710,4279970378,4291058750,D.jD)
D.rj=new C.kN(15,"certIvoryNavy")
D.fTS=w([D.KK,D.j5,A.hV],x.O)
D.aDT=new C.xe(1,"ringsNdoa")
D.dwd=new C.ji("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rj,4294966259,4279378237,4291404327,D.aDT)
D.a3N=new C.xe(2,"coupleCards")
D.dw8=new C.ji("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rj,4294966259,4279378237,4291404327,D.a3N)
D.Cd=new C.kN(18,"certIvoryNavyBar")
D.abx=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fU5=w([D.abx,D.j5,A.hV],x.O)
D.aDU=new C.xe(3,"kuhoweshaForm")
D.dw6=new C.ji("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cd,4294966519,4279378237,4291404327,D.aDU)
D.acP=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fUp=w([D.KK,D.acP,A.hV],x.O)
D.a3O=new C.xe(4,"mahariPande")
D.dw9=new C.ji("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rj,4294966259,4279904068,4291404327,D.a3O)
D.aEs=new C.kN(16,"certIvoryGreen")
D.b9J=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fTW=w([A.K2,D.b9J,A.hV],x.O)
D.aDV=new C.xe(5,"familiaMti")
D.dwf=new C.ji("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEs,4294966776,4280241466,4291404327,D.aDV)
D.a3P=new C.xe(6,"ndoaSafi")
D.dw7=new C.ji("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cd,4294966519,4279378237,4291404327,D.a3P)
D.bdL=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fTZ=w([D.KK,A.hV,D.bdL],x.O)
D.a3Q=new C.xe(7,"peteWide")
D.dwc=new C.ji("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rj,4294966259,4282001936,4291404327,D.a3Q)
D.dwm=new C.xe(8,"muhuriCrest")
D.dw5=new C.ji("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rj,4294966259,4279378237,4291404327,D.dwm)
D.fU8=w([D.abx,D.acP,A.hV],x.O)
D.dwn=new C.xe(9,"fomuWazi")
D.dwi=new C.ji("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cd,4294966519,4279904068,4291404327,D.dwn)
D.aEt=new C.kN(17,"certIvoryRose")
D.bal=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fUb=w([D.bal,D.adD,A.hV],x.O)
D.a3M=new C.xe(10,"upendoOrnate")
D.dwe=new C.ji("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aEt,4294965493,4286200650,4291404327,D.a3M)
D.d1i=w([D.dwb,D.dwj,D.dwl,D.dwk,D.dwg,D.dwd,D.dw8,D.dw6,D.dw9,D.dwf,D.dw7,D.dwc,D.dw5,D.dwi,D.dwe],x.h)
D.e6=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Hz=new C.vJ(0,"emojis")
D.Ck=new C.vJ(1,"pictures")
D.HA=new C.vJ(2,"icons3d")
D.a46=new C.vJ(3,"animations")
D.Rb=new C.vJ(4,"videoMotion")
D.Cl=new C.vJ(5,"luxe")
D.a1V=w([D.Hz,D.Ck,D.HA,D.a46,D.Rb,D.Cl],B.ax("O<vJ>"))
D.euR=new B.y(A.dW,"Looks")
D.ek6=new B.y(A.yb,"Light")
D.ek2=new B.y(A.n8,"Colour")
D.ei8=new B.y(A.xL,"Effects")
D.ajX=new B.a_(63112,"MaterialIcons",!1)
D.efa=new B.y(D.ajX,"Crop")
D.d1O=w([D.euR,D.ek6,D.ek2,D.ei8,D.efa],x.f2)
D.d2q=w([],x.D)
D.fUm=w([],x.L)
D.eil=new B.y("Flashcard",D.Hu)
D.em0=new B.y("Quiz",D.Hv)
D.enS=new B.y("Worksheet",D.Hw)
D.el5=new B.y("Notes",D.mv)
D.emv=new B.y("Section",D.Ci)
D.d33=w([D.eil,D.em0,D.enS,D.el5,D.emv],B.ax("O<+(n,mr)>"))
D.dy2=new C.kN(6,"beadedPearl")
D.bcF=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fUq=w([O.WA,D.bcF,A.hV],x.O)
D.aDR=new C.ji("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dy2,4294966774,4286209070,4291404327,D.jD)
D.dy3=new C.kN(7,"artDeco")
D.bgt=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bjb=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fUo=w([D.bgt,D.bjb,A.bY],x.O)
D.aDS=new C.ji("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dy3,4294440434,4280228630,4290283019,D.jD)
D.dy4=new C.kN(8,"rosetteCorners")
D.bim=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b8z=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bcA=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fU1=w([D.bim,D.b8z,D.bcA],x.O)
D.aDQ=new C.ji("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dy4,4294702831,4285218602,4291394365,D.jD)
D.dy5=new C.kN(9,"modernLedger")
D.fU0=w([A.c,D.j5,D.j5],x.O)
D.aDP=new C.ji("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dy5,4294967295,4279378237,4279378237,D.jD)
D.d37=w([D.aDR,D.aDS,D.aDQ,D.aDP],x.h)
D.d3f=w([A.io,A.oo],x.O)
D.ch=new C.hw(0,"none")
D.dd=new C.hw(1,"fade")
D.Hx=new C.hw(3,"slideRight")
D.aEP=new C.hw(5,"slideDown")
D.dSH=new C.hw(7,"zoomOut")
D.a45=new C.hw(11,"cube")
D.dSC=new C.hw(12,"blur")
D.aEM=new C.hw(13,"dissolve")
D.dSD=new C.hw(14,"wipeLeft")
D.dSE=new C.hw(15,"wipeRight")
D.Ra=new C.hw(17,"push")
D.dSF=new C.hw(18,"flash")
D.aEO=new C.hw(20,"swing")
D.dSG=new C.hw(21,"curtain")
D.PP=w([D.ch,D.dd,D.u7,D.Hx,D.u8,D.aEP,D.mw,D.dSH,D.Hy,D.aEQ,D.R9,D.a45,D.dSC,D.aEM,D.dSD,D.dSE,D.q2,D.Ra,D.dSF,D.aEN,D.aEO,D.dSG],x.i)
D.PQ=w([D.a3L,D.a3J,D.a3C,D.a3D,D.a3E,D.a3H,D.a3F,D.a3G,D.a3K,D.a3I,D.aDR,D.aDS,D.aDQ,D.aDP],x.h)
D.d3H=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d3L=w([A.Af,A.hE,A.bY],x.O)
D.ejr=new B.y(A.tJ,"Design")
D.ewl=new B.y(D.akd,"Word sizes")
D.esJ=new B.y(A.Bt,"Text")
D.bCK=new B.a_(983182,"MaterialIcons",!1)
D.esN=new B.y(D.bCK,"Photo")
D.eeN=new B.y(A.lh,"Logo")
D.ext=new B.y(A.G5,"News")
D.d3Q=w([D.ejr,D.ewl,D.esJ,D.esN,D.eeN,D.ext],x.f2)
D.d3R=w(["golddust","sparkle","sheen"],x.s)
D.dU3=new C.es("upload_pdf",K.N9,"Upload PDF")
D.dTd=new C.es("sign_paper",A.G2,"Sign Paper")
D.bC0=new B.a_(63438,"MaterialIcons",!1)
D.dU_=new C.es("hd_photo",D.bC0,"HD Photo")
D.dT5=new C.es("sharpen",E.ZR,"Sharpen")
D.dTf=new C.es("print",K.N9,"Download PDF")
D.dTH=new C.es("rotate",D.ajX,"Rotate")
D.dTo=new C.es("text_box",A.Bt,"Text Box")
D.dTq=new C.es("picture",A.tM,"Picture")
D.dTm=new C.es("title",A.y5,"Title")
D.dTi=new C.es("subtitle",T.akQ,"Subtitle")
D.dTQ=new C.es("bullets",I.a_7,"Bullet List")
D.dTj=new C.es("numbered",A.MY,"Numbered")
D.dTT=new C.es("quote",A2.Bl,"Quote")
D.dTv=new C.es("citation",A.pN,"Citation")
D.dTW=new C.es("date_stamp",Ah.ZW,"Date Stamp")
D.dTJ=new C.es("page_number",A.y4,"Page #")
D.dTN=new C.es("header_bar",A.Bv,"Header")
D.dTp=new C.es("footer_bar",Ar.a_D,"Footer")
D.dTe=new C.es("divider",A.tL,"Divider")
D.dTa=new C.es("highlight",A.a_c,"Highlight")
D.dTP=new C.es("redact",A.y8,"Redact")
D.dTC=new C.es("callout",A.Bh,"Callout")
D.dTY=new C.es("checkboxes",I.ajc,"Checklist")
D.dTz=new C.es("table",A.a_B,"Table")
D.dTt=new C.es("memo",I.a_n,"Memo")
D.dTD=new C.es("letter",A.FS,"Letter")
D.bBD=new B.a_(63259,"MaterialIcons",!0)
D.dT4=new C.es("agenda",D.bBD,"Agenda")
D.dTg=new C.es("toc",AA.akq,"Contents")
D.bBX=new B.a_(63406,"MaterialIcons",!1)
D.dTA=new C.es("sig_line",D.bBX,"Sign Line")
D.dSY=new C.es("initial_line",A.jg,"Initials")
D.dT0=new C.es("approved",A.lh,"APPROVED")
D.dTF=new C.es("draft",A.oH,"DRAFT")
D.dTL=new C.es("confidential",A.jh,"Confidential")
D.dTO=new C.es("sticky",A.Nf,"Sticky Note")
D.dTX=new C.es("progress",A.akp,"Progress")
D.bDc=new B.a_(983507,"MaterialIcons",!1)
D.dTb=new C.es("stars",D.bDc,"Star Rating")
D.dSW=new C.es("equation",A.akg,"Equation")
D.dT6=new C.es("timeline",A.Ng,"Timeline")
D.dTu=new C.es("two_col",A.a_E,"Two Columns")
D.dT8=new C.es("compare",A1.ZZ,"Compare")
D.dSU=new C.es("duplicate_el",A.fK,"Duplicate")
D.dU1=new C.es("delete_el",A.e4,"Delete")
D.dTS=new C.es("bring_fwd",O.ak9,"Bring Front")
D.dSZ=new C.es("send_back",O.ak8,"Send Back")
D.dTE=new C.es("align_left",D.a_5,"Align L")
D.dTK=new C.es("align_center",D.a_4,"Align C")
D.dU0=new C.es("align_right",D.a_6,"Align R")
D.dTn=new C.es("word_count",A0.ZA,"Word Count")
D.dTk=new C.es("link_text",A.hk,"Link")
D.dTI=new C.es("phone",A.iB,"Phone")
D.dT9=new C.es("email",A.Bj,"Email")
D.dU2=new C.es("qr_placeholder",A.jj,"QR Placeholder")
D.dT3=new C.es("rectangle",A3.vo,"Rectangle")
D.dTy=new C.es("circle",A.qU,"Circle")
D.dT_=new C.es("arrow",A.iz,"Arrow")
D.dTR=new C.es("line",A.tL,"Line")
D.dTc=new C.es("triangle",A.ZX,"Triangle")
D.bBL=new B.a_(63318,"MaterialIcons",!1)
D.dTh=new C.es("grayscale",D.bBL,"Grayscale")
D.dTr=new C.es("brighten",I.ajw,"Brighten")
D.dTw=new C.es("flip_h",A.FI,"Flip H")
D.bBS=new B.a_(63348,"MaterialIcons",!1)
D.dTZ=new C.es("flip_v",D.bBS,"Flip V")
D.dTM=new C.es("cover_page",A.pI,"Cover Page")
D.dSX=new C.es("invoice",A.h9,"Invoice")
D.dT7=new C.es("resume",A.mj,"Resume")
D.dTl=new C.es("minutes",A.oB,"Minutes")
D.dT1=new C.es("lab_report",A.Nc,"Lab Report")
D.dT2=new C.es("rubric",A.xP,"Rubric")
D.dTx=new C.es("flashcard_tool",V.FZ,"Flashcard")
D.dTU=new C.es("quiz_tool",A.FW,"Quiz Block")
D.dTB=new C.es("worksheet_tool",L.Fz,"Worksheet")
D.dTG=new C.es("outline_share",A.Nd,"Share Outline")
D.dTV=new C.es("export_json",D.aji,"Export JSON")
D.dSV=new C.es("new_slide",D.Zz,"New Slide")
D.dTs=new C.es("present",A.pP,"Present")
D.d4g=w([D.dU3,D.dTd,D.dU_,D.dT5,D.dTf,D.dTH,D.dTo,D.dTq,D.dTm,D.dTi,D.dTQ,D.dTj,D.dTT,D.dTv,D.dTW,D.dTJ,D.dTN,D.dTp,D.dTe,D.dTa,D.dTP,D.dTC,D.dTY,D.dTz,D.dTt,D.dTD,D.dT4,D.dTg,D.dTA,D.dSY,D.dT0,D.dTF,D.dTL,D.dTO,D.dTX,D.dTb,D.dSW,D.dT6,D.dTu,D.dT8,D.dSU,D.dU1,D.dTS,D.dSZ,D.dTE,D.dTK,D.dU0,D.dTn,D.dTk,D.dTI,D.dT9,D.dU2,D.dT3,D.dTy,D.dT_,D.dTR,D.dTc,D.dTh,D.dTr,D.dTw,D.dTZ,D.dTM,D.dSX,D.dT7,D.dTl,D.dT1,D.dT2,D.dTx,D.dTU,D.dTB,D.dTG,D.dTV,D.dSV,D.dTs],B.ax("O<es>"))
D.d4p=w([A.cp,A.ak],x.O)
D.eem=new B.y(4286331629,4292552567)
D.ee9=new B.y(4280640491,4278630100)
D.eeu=new B.y(4294538006,4292943176)
D.edw=new B.y(4278556265,4280640491)
D.cZS=w([D.eem,D.ee9,D.eeu,D.edw],x.n)
D.coH=w([4294626325,4280472558,4294210230],x.t)
D.dSP=new C.nG("colorful","Colorful",A.n8,D.cZS,4294967295,3875536895,D.coH,D.mw)
D.edY=new B.y(4279522093,4279657780)
D.eed=new B.y(4281750292,4283268111)
D.edz=new B.y(4278603323,4279203438)
D.eee=new B.y(4282343954,4279599165)
D.czt=w([D.edY,D.eed,D.edz,D.eee],x.n)
D.cop=w([4288931381,4294829706,4287033260],x.t)
D.dSL=new C.nG("nature","Nature",A.G3,D.czt,4294442727,3874290891,D.cop,D.dd)
D.edS=new B.y(4279369771,4283178389)
D.edP=new B.y(4279179050,4286456526)
D.ee5=new B.y(4280163147,4290648157)
D.edo=new B.y(4278322711,4285343961)
D.cQN=w([D.edS,D.edP,D.ee5,D.edo],x.n)
D.coD=w([4294210230,4280472558,4289170426],x.t)
D.dSJ=new C.nG("vibe","Vibe",A.a_a,D.cQN,4294967295,3874869502,D.coD,D.u7)
D.eeq=new B.y(4290007817,4292552567)
D.eek=new B.y(4286328082,4294286859)
D.eep=new B.y(4288485197,4294538006)
D.eej=new B.y(4285343961,4293675161)
D.bVU=w([D.eeq,D.eek,D.eep,D.eej],x.n)
D.coI=w([4294829706,4294967295,4284999929],x.t)
D.dSK=new C.nG("celebration","Celebration",A.lc,D.bVU,4294967295,4009752557,D.coI,D.q2)
D.edN=new B.y(4279179050,4280171146)
D.edR=new B.y(4279310375,4280232247)
D.edF=new B.y(4278916151,4280172719)
D.edO=new B.y(4279179050,4281549141)
D.cK0=w([D.edN,D.edR,D.edF,D.edO],x.n)
D.cok=w([4281908728,4294626325,4287931320],x.t)
D.dSO=new C.nG("professional","Professional",A.Bf,D.cK0,4294967295,3872118241,D.cok,D.Ra)
D.edJ=new B.y(4278995566,4278413729)
D.edB=new B.y(4278727492,4279137424)
D.ee6=new B.y(4280171146,4278751666)
D.edK=new B.y(4278995566,4279590517)
D.css=w([D.edJ,D.edB,D.ee6,D.edK],x.n)
D.con=w([4286436348,4284410580,4294829706],x.t)
D.dSQ=new C.nG("ocean","Ocean",I.a_G,D.css,4294967295,3873501950,D.con,D.u8)
D.eel=new B.y(4286328082,4294538006)
D.een=new B.y(4286781507,4294677052)
D.eeh=new B.y(4283178389,4294197086)
D.eeo=new B.y(4288295954,4294688548)
D.cGd=w([D.eel,D.een,D.eeh,D.eeo],x.n)
D.coJ=w([4294829706,4294967295,4294747557],x.t)
D.dSR=new C.nG("sunset","Sunset",A.Ni,D.cGd,4294967295,4009749973,D.coJ,D.dd)
D.eey=new B.y(4294967295,4294047225)
D.eet=new B.y(4294507260,4294967295)
D.eex=new B.y(4294967295,4293060848)
D.ees=new B.y(4294507260,4294047225)
D.cTQ=w([D.eey,D.eet,D.eex,D.ees],x.n)
D.coi=w([4280640491,4279179050,4287931320],x.t)
D.dSN=new C.nG("minimal","Minimal",A3.vo,D.cTQ,4279179050,4282865001,D.coi,D.dd)
D.edI=new B.y(4278979081,4280886564)
D.ee1=new B.y(4280031511,4278979081)
D.edQ=new B.y(4279308561,4281148438)
D.edH=new B.y(4278979081,4280031511)
D.d6i=w([D.edI,D.ee1,D.edQ,D.edH],x.n)
D.cow=w([4292128567,4294829706,4289241758],x.t)
D.dSS=new C.nG("elegant","Elegant",A.lM,D.d6i,4294898631,3873957348,D.cow,D.aEM)
D.ee3=new B.y(4280159034,4282058596)
D.edE=new B.y(4278916151,4280163147)
D.eeb=new B.y(4281208933,4278916151)
D.edV=new B.y(4279502891,4283178389)
D.dcJ=w([D.ee3,D.edE,D.eeb,D.edV],x.n)
D.coF=w([4294296657,4292128567,4291081725],x.t)
D.dSM=new C.nG("royal","Royal Gold",A.iV,D.dcJ,4294965222,3874084351,D.coF,D.mw)
D.edt=new B.y(4278464302,4280163147)
D.edD=new B.y(4278916151,4279455306)
D.ee4=new B.y(4280163147,4283040846)
D.edq=new B.y(4278332450,4281413249)
D.cZy=w([D.edt,D.edD,D.ee4,D.edq],x.n)
D.coj=w([4281193663,4289170426,4294210230],x.t)
D.dST=new C.nG("aurora","Aurora Glow",A.dW,D.cZy,4293983738,3869766608,D.coj,D.dd)
D.vK=w([D.dSP,D.dSL,D.dSJ,D.dSK,D.dSO,D.dSQ,D.dSR,D.dSN,D.dSS,D.dSM,D.dST],B.ax("O<nG>"))
D.bd9=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d4V=w([A.qB,D.bd9,A.qB],x.O)
D.d5b=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d5f=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.esB=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.ej1=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ent=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ebp=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ema=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ekr=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eoC=new B.y("Surprise me","")
D.d5K=w([D.esB,D.ej1,D.ent,D.ebp,D.ema,D.ekr,D.eoC],x.L)
D.b6N=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bgW=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d6u=w([A.c,D.b6N,D.bgW],x.O)
D.d8g=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aEl=new C.kN(0,"heritageGold")
D.bbR=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fUr=w([D.bbR,W.acZ,A.aw],x.O)
D.dwh=new C.ji("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aEl,4294570461,4284234270,4292128567,D.jD)
D.aEm=new C.kN(1,"heritageCrimson")
D.b5h=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bai=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bgM=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fU4=w([D.b5h,D.bai,D.bgM],x.O)
D.dwa=new C.ji("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aEm,4294635750,4285213214,4292912216,D.jD)
D.d8k=w([D.a3L,D.a3J,D.dwh,D.dwa,D.a3E,D.a3H],x.h)
D.dC9=new C.ri(1,"circuit")
D.dCC=new C.m0("neural","Neural Link","Robotic",D.dC9,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dC8=new C.ri(0,"grid")
D.dCz=new C.m0("signal","Signal Grid","Robotic",D.dC8,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dCe=new C.ri(2,"hexes")
D.dCk=new C.m0("core","Core Protocol","Robotic",D.dCe,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aEJ=new C.ri(11,"diagonal")
D.dCv=new C.m0("steel","Steel Tech","Robotic",D.aEJ,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aEK=new C.ri(3,"rings")
D.dCj=new C.m0("vault","Vault Gold","Robotic",D.aEK,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dCc=new C.ri(13,"leaves")
D.dCm=new C.m0("forest","Forest Morning","Nature",D.dCc,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aEL=new C.ri(5,"waves")
D.dCt=new C.m0("ocean","Ocean Calm","Nature",D.aEL,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dCf=new C.ri(6,"sunset")
D.dCy=new C.m0("sunset","Sunset Glow","Nature",D.dCf,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dCg=new C.ri(7,"mountains")
D.dCl=new C.m0("mountain","Mountain Air","Nature",D.dCg,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dCh=new C.ri(8,"stars")
D.dCs=new C.m0("night","Night Sky","Nature",D.dCh,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a43=new C.ri(4,"orbs")
D.dCq=new C.m0("aurora","Aurora","Nature",D.a43,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dCA=new C.m0("sand","Sand Dune","Nature",D.aEL,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dCi=new C.ri(9,"rays")
D.dCp=new C.m0("golden","Golden Hour","Warm",D.dCi,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dCn=new C.m0("royal","Royal Purple","Warm",D.aEJ,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dCo=new C.m0("rose","Rose Petal","Warm",D.a43,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dCb=new C.ri(12,"blocks")
D.dCr=new C.m0("electric","Electric Blue","Bold",D.dCb,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dCB=new C.m0("mint","Fresh Mint","Bold",D.a43,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dCd=new C.ri(14,"minimal")
D.dCx=new C.m0("white","Clean White","Clean",D.dCd,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dCa=new C.ri(10,"frame")
D.dCu=new C.m0("midnight","Midnight Gold","Clean",D.dCa,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dCw=new C.m0("community","Community Green","Clean",D.aEK,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2l=w([D.dCC,D.dCz,D.dCk,D.dCv,D.dCj,D.dCm,D.dCt,D.dCy,D.dCl,D.dCs,D.dCq,D.dCA,D.dCp,D.dCn,D.dCo,D.dCr,D.dCB,D.dCx,D.dCu,D.dCw],B.ax("O<m0>"))
D.d8H=w([D.An,A.wT,A.hE,A.bY],x.O)
D.d8X=w([D.adO,D.j5],x.O)
D.d95=w(["pdf","docx","txt","md"],x.s)
D.eAO=new B.bt(-3,150,34)
D.eAP=new B.bt(-3,214,62)
D.eAQ=new B.bt(-3,288,62)
D.d9U=w([D.eAO,D.eAP,D.eAQ],B.ax("O<+(N,N,N)>"))
D.dan=w(["rays","bokeh","aurora","spotlight"],x.s)
D.daX=w(["Write","Design","Print & fold"],x.s)
D.jE=new C.uv(2,"triangle")
D.Cj=new C.uv(3,"arrow")
D.fp=new C.uv(4,"line")
D.jF=new C.uv(5,"parallelogram")
D.db_=w([D.be,D.eI,D.jE,D.Cj,D.fp,D.jF,D.kT],x.m)
D.ecA=new B.y(240,96)
D.ef3=new B.y(560,46)
D.db4=w([D.ecA,D.ef3],x.G)
D.fUC=new C.xh(0,"classic")
D.dy8=new C.nC("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aEl,4294570461,4282000405,4284234270)
D.dyk=new C.nC("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aEm,4294635750,4281999378,4285213214)
D.dy9=new C.nC("elegant_navy","Umoja Mzuri",y.s,D.a3Y,4294967035,4279378237,4290283019)
D.dym=new C.nC("elegant_gold","Umoja wa Dhahabu",y.Q,D.aEu,4294966515,4281016592,4289102906)
D.dyo=new C.nC("kente_sunset","Kente ya Jua",y.H,D.aEn,4294964964,4282000405,4279983648)
D.dy6=new C.nC("indigo_mudcloth","Nguo ya Indigo",y.n,D.aEo,4294439140,4279903102,4279903102)
D.dyb=new C.nC("adinkra_royal","Muhuri wa Adinkra",y.z,D.aEp,4294965484,4285218591,4287322667)
D.dyg=new C.nC("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEq,4294244340,4279196764,4279196764)
D.dyi=new C.nC("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEr,4294505710,4279970378,4291058750)
D.fUD=new C.xh(1,"ringsNdoa")
D.dya=new C.nC("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rj,4294966259,4279378237,4291404327)
D.fUF=new C.xh(2,"coupleCards")
D.dyl=new C.nC("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rj,4294966259,4279378237,4291404327)
D.fUG=new C.xh(3,"kuhoweshaForm")
D.dyh=new C.nC("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cd,4294966519,4279378237,4291404327)
D.fUH=new C.xh(4,"mahariPande")
D.dy7=new C.nC("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rj,4294966259,4279904068,4291404327)
D.fUI=new C.xh(5,"familiaMti")
D.dyn=new C.nC("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEs,4294966776,4280241466,4291404327)
D.fUJ=new C.xh(6,"ndoaSafi")
D.dye=new C.nC("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cd,4294966519,4279378237,4291404327)
D.fUK=new C.xh(7,"peteWide")
D.dyd=new C.nC("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rj,4294966259,4282001936,4291404327)
D.fUL=new C.xh(8,"muhuriCrest")
D.dyc=new C.nC("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rj,4294966259,4279378237,4291404327)
D.fUM=new C.xh(9,"fomuWazi")
D.dyf=new C.nC("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cd,4294966519,4279904068,4291404327)
D.fUE=new C.xh(10,"upendoOrnate")
D.dyj=new C.nC("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aEt,4294965493,4286200650,4291404327)
D.Q2=w([D.dy8,D.dyk,D.dy9,D.dym,D.dyo,D.dy6,D.dyb,D.dyg,D.dyi,D.dya,D.dyl,D.dyh,D.dy7,D.dyn,D.dye,D.dyd,D.dyc,D.dyf,D.dyj],B.ax("O<nC>"))
D.Ch=new C.aq2(0,"landscape169")
D.o2=new C.aq2(1,"portrait916")
D.dbQ=w([D.Ch,D.o2],B.ax("O<aq2>"))
D.ax7=w([A.hE,A.bK,A.ct,A.io,A.c],x.O)
D.u0=w([A.bY,A.it],x.O)
D.ebN=new B.y(1000,"M")
D.eg8=new B.y(900,"CM")
D.eeZ=new B.y(500,"D")
D.edl=new B.y(400,"CD")
D.ebO=new B.y(100,"C")
D.ega=new B.y(90,"XC")
D.ef_=new B.y(50,"L")
D.edn=new B.y(40,"XL")
D.ebS=new B.y(10,"X")
D.egk=new B.y(9,"IX")
D.efd=new B.y(5,"V")
D.eeM=new B.y(4,"IV")
D.ech=new B.y(1,"I")
D.dcp=w([D.ebN,D.eg8,D.eeZ,D.edl,D.ebO,D.ega,D.ef_,D.edn,D.ebS,D.egk,D.efd,D.eeM,D.ech],x.ek)
D.eBL=new B.cH(["open",A.jg,"Open & write","Keep writing this book"])
D.eCb=new B.cH(["print",A.tP,"Print as a book","Fold and staple it"])
D.dcz=w([D.eBL,D.eCb],B.ax("O<+(n,a_,n,n)>"))
D.ddd=w([D.a45,D.mw,D.Hy,D.Ra,D.dd,D.R9],x.i)
D.et8=new B.y(-1,"Small")
D.ebB=new B.y(0,"Normal")
D.ecg=new B.y(1,"Big")
D.ecQ=new B.y(2,"Huge")
D.ddH=w([D.et8,D.ebB,D.ecg,D.ecQ],x.ek)
D.de6=w([49,65,89,38,83,89],x.t)
D.ded=w([A.wT,A.hE,A.bY],x.O)
D.deE=w([D.dd,D.mw,D.u7,D.a45,D.Hy,D.Ra],x.i)
D.aCp=new B.dS([0,D.L1,8,D.af9,12,D.afa],B.ax("dS<H,a34>"))
D.dYO={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bgF=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cKa=w([A.bK,D.bgF],x.O)
D.d2Q=w([A.b1,A.bj],x.O)
D.cYI=w([A.bU,A.aT,A.co],x.O)
D.dcA=w([A.cp,A.bv],x.O)
D.cRH=w([A.b8,A.ff],x.O)
D.d0j=w([A.b6,A.f6],x.O)
D.ba3=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d_C=w([D.ba3,A.oo],x.O)
D.cVo=w([A.h_,A.wU],x.O)
D.cRv=w([A.bt,A.c9],x.O)
D.dhg=new B.bm(D.dYO,[D.cKa,H.anM,D.d2Q,D.cYI,D.dcA,D.cRH,D.d0j,D.d_C,D.cVo,D.cRv],B.ax("bm<n,aj<w>>"))
D.dXY={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2X=new B.bm(D.dXY,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bm<n,n>"))
D.a33=new B.bm(A.ie,[],B.ax("bm<H,+icon3d,picture(n?,n?)>"))
D.dll=new F.Mp(30,null)
D.dqp=new F.mn("Chapter 1","","","")
D.dbC=w([D.dqp],x.B)
D.dqt=new F.r8("My Book","","",D.dbC,E.aDF)
D.dqr=new F.ul("starry",null,null,null,null,"","","")
D.dqu=new F.r8("Dream Big","","",E.a23,D.dqr)
D.dqs=new F.ul("story",null,null,null,null,"","","")
D.dqv=new F.r8("Little Lion","","",E.a23,D.dqs)
D.dqq=new F.ul("vintage",null,null,null,null,"","","")
D.dqw=new F.r8("Our Story","","",E.a23,D.dqq)
D.dtx=new C.E8("","NGMY","","")
D.dAN=new C.z6("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dSI=new C.b_P(null,null,null,null)
D.dUq=new C.aq7(null)
D.dUD=new C.aqD(0,"smaller")
D.dUE=new C.aqD(1,"bigger")
D.aEZ=new C.aqD(2,"fit")
D.e0f=new B.u(3,6)
D.e0p=new B.u(4,8)
D.e3O=new B.C(E.afX,T.aaU,null)
D.e3S=new B.C(A.Xx,A.lz,null)
D.bEt=new B.ae(A.lf,16,A.c_,null,null,null)
D.e3W=new B.C(A.jc,D.bEt,null)
D.b4K=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.e47=new B.C(A.Fc,D.b4K,null)
D.bOF=new B.ae(A.cA,16,A.az,null,null,null)
D.e4b=new B.C(A.eo,D.bOF,null)
D.ffX=new B.x("Play",null,A.nn,null,null,null,null,null,null,null,null,null)
D.d34=w([U.amg,A.rw,D.ffX],x.p)
D.eGn=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d34,null)
D.e4e=new B.C(A.nQ,D.eGn,null)
D.b4T=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.eLD=new B.a7(20,20,D.b4T,null)
D.e4j=new B.C(A.jc,D.eLD,null)
D.foS=new B.x("Seconds per slide",null,A.ho,null,null,null,null,null,null,null,null,null)
D.e4r=new B.C(A.bk,D.foS,null)
D.e5M=new C.a7V(2,"print")
D.e5P=new B.iM(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e7r=new B.h6("/Annot")
D.e7t=new B.h6("/URI")
D.fas=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e9r=new B.jk("share",48,D.fas,null,B.ax("jk<n>"))
D.bOz=new B.ae(A.dW,14,A.ez,null,null,null)
D.e9A=new B.cL(null,-2,-2,null,null,null,D.bOz,null)
D.bdA=new B.w(0.3333333333333333,0,0,0,A.t)
D.cM7=w([D.bdA,A.K],x.O)
D.bUJ=new B.a8(A.a3,A.a7,A.x,D.cM7,null,null)
D.aYB=new B.o(null,null,null,null,null,D.bUJ,A.n)
D.blh=new B.kK(D.aYB,A.bd,null,null)
D.e9M=new B.cL(0,0,null,0,8,null,D.blh,null)
D.d7l=w([A.hU,A.op,A.cd],x.O)
D.eaq=new B.bS(A.A,0.5,A.x,null,0,D.d7l,null,null)
D.ecJ=new B.y(0.22,A.bj)
D.egF=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eiH=new B.y(0.5,A.hg)
D.erK=new B.y(0.78,A.aV)
D.eBB=new B.cH([A.by,0.22,0.7,2.6])
D.eBH=new B.cH([A.b8,0.36,1.2,1.3])
D.eBN=new B.cH([A.dO,0.28,0.2,0.4])
D.eBT=new B.cH([A.cy,0.05,0.3,0.35])
D.eBZ=new B.cH([A.bt,0.28,0.9,0])
D.eC6=new B.cH([A.aE,-0.25,-0.15,0.45])
D.eCY=new B.cH([A.bU,0.42,1,4.1])
D.eG5=new B.a8Q(9)
D.bFz=new B.ae(A.G5,28,A.co,null,null,null)
D.fpq=new B.x("NGMY News",null,A.ds,null,null,null,null,null,null,null,null,null)
D.bv0=new B.bD(1,A.bi,D.fpq,null)
D.daq=w([D.bFz,A.av,D.bv0],x.p)
D.eGh=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.daq,null)
D.bFK=new B.ae(A.pN,16,A.c,null,null,null)
D.fqR=new B.x("Book",null,A.o9,null,null,null,null,null,null,null,null,null)
D.dec=w([D.bFK,A.eb,D.fqR],x.p)
D.eGp=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dec,null)
D.bMa=new B.ae(A.jh,10,A.c,null,null,null)
D.fe5=new B.x("Pro",null,A.nl,null,null,null,null,null,null,null,null,null)
D.d39=w([D.bMa,A.q9,D.fe5],x.p)
D.eGt=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d39,null)
D.foR=new B.x("Make a newspaper",null,Au.T9,null,null,null,null,null,null,null,null,null)
D.bVS=w([E.a00,A.ab,D.foR],x.p)
D.eGu=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bVS,null)
D.bKJ=new B.ae(A.lc,18,A.bK,null,null,null)
D.fga=new B.x("Ending celebration",null,A.i3,null,null,null,null,null,null,null,null,null)
D.d9v=w([D.bKJ,A.bp,D.fga],x.p)
D.eGx=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.d9v,null)
D.bLX=new B.ae(A.jg,18,A.jQ,null,null,null)
D.eW5=new B.G(!0,A.jQ,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr7=new B.x("Write",null,D.eW5,null,null,null,null,null,null,null,null,null)
D.cTF=w([D.bLX,A.ab,D.fr7],x.p)
D.eGC=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cTF,null)
D.fe3=new B.x("Download picture",null,A.qd,null,null,null,null,null,null,null,null,null)
D.bx3=new B.qb(A.eg,A.A,A.f,D.fe3,null)
D.bxe=new B.dq(1,A.cj,D.bx3,null)
D.d3w=w([K.am6,A.ab,D.bxe],x.p)
D.eGD=new B.cm(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d3w,null)
D.bHw=new B.ae(A.G5,22,A.co,null,null,null)
D.fnv=new B.x("NGMY NEWS",null,H.a6F,null,null,null,null,null,null,null,null,null)
D.cLz=w([D.bHw,A.ab,D.fnv],x.p)
D.eGL=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cLz,null)
D.eGW=new B.p1(!1,!1,null,T.V_,null,A.bX,null,null,null)
D.a5L=new B.jL([D.ch,D.dd,D.u7,D.Hx,D.u8,D.aEP],B.ax("jL<hw>"))
D.e_3={title:0,quote:1,closing:2,bio:3}
D.eI3=new B.eY(D.e_3,4,x.M)
D.dYf={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eI5=new B.eY(D.dYf,5,x.M)
D.dZz={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5M=new B.eY(D.dZz,8,x.M)
D.dYW={Design:0,Transitions:1,Insert:2}
D.eI9=new B.eY(D.dYW,3,x.M)
D.fUU=new B.jL([D.a46],B.ax("jL<vJ>"))
D.dZ3={float3d:0,drift:1,pulse:2}
D.eIc=new B.eY(D.dZ3,3,x.M)
D.aM2=new B.jL([D.Hu,D.Hv,D.Hw],B.ax("jL<mr>"))
D.dYc={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aM5=new B.eY(D.dYc,14,x.M)
D.fUV=new B.eY(A.ie,0,B.ax("eY<vJ>"))
D.dZ0={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sa=new B.eY(D.dZ0,4,x.M)
D.dY5={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aM7=new B.eY(D.dY5,30,x.M)
D.dZ8={circle:0,triangle:1,hexagon:2,diamond:3}
D.eIs=new B.eY(D.dZ8,4,x.M)
D.eKB=new B.at(390,844)
D.eLn=new B.a7(20,20,A6.JX,null)
D.aMU=new B.a7(null,2.5,null,null)
D.eLx=new B.a7(18,18,A6.JX,null)
D.bM0=new B.ae(A.iV,19,A.c,null,null,null)
D.eLI=new B.a7(38,38,D.bM0,null)
D.bKj=new B.ae(A.yc,22,A.c,null,null,null)
D.eLK=new B.a7(40,40,D.bKj,null)
D.eMi=new B.hK(2,10,10,1.15,null)
D.aN1=new B.hK(2,16,14,0.62,null)
D.bt4=new B.Q(32,30,32,40)
D.b68=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bFw=new B.ae(A.pI,56,D.b68,null,null,null)
D.aek=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eY2=new B.G(!0,D.aek,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkB=new B.x("Your books will live here.",null,D.eY2,null,A.L,null,null,null,null,null,null,null)
D.cWf=w([D.bFw,A.S,D.fkB],x.p)
D.bku=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cWf,null)
D.e4p=new B.C(D.bt4,D.bku,null)
D.eMD=new B.m3(D.e4p,null)
D.fky=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eMV=new B.b1(D.fky,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fiH=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eMW=new B.b1(D.fiH,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fny=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eN4=new B.b1(D.fny,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fo3=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eNj=new B.b1(D.fo3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhm=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eNw=new B.b1(D.fhm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuY=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eNP=new B.b1(D.fuY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsa=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eO_=new B.b1(D.fsa,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fob=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eOG=new B.b1(D.fob,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fcq=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eOW=new B.b1(D.fcq,null,null,null,null,null,null,null,A.ij,null,null,null,null,A.pz,!1,null,null,null,A.r,null)
D.feb=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new B.b1(D.feb,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkf=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ePf=new B.b1(D.fkf,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fjW=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.ePg=new B.b1(D.fjW,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqa=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ePh=new B.b1(D.fqa,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f8G=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ePq=new B.b1(D.f8G,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ffi=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ePN=new B.b1(D.ffi,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftJ=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ePP=new B.b1(D.ftJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fth=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.ePT=new B.b1(D.fth,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f7G=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ePV=new B.b1(D.f7G,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpl=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ3=new B.b1(D.fpl,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsT=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eQi=new B.b1(D.fsT,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsK=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eQk=new B.b1(D.fsK,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f7y=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eQq=new B.b1(D.f7y,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbr=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQS=new B.b1(D.fbr,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frY=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eR2=new B.b1(D.frY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbf=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eRh=new B.b1(D.fbf,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bcR=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cKo=w([A.io,A.oo,D.bcR,D.abk,A.io],x.O)
D.eRF=new B.fS(A.A,0,6.283185307179586,A.x,D.cKo,null,null)
D.cST=w([A.bK,A.bY,A.hE,D.An,A.bK],x.O)
D.aNB=new B.fS(A.A,0,6.283185307179586,A.x,D.cST,null,null)
D.d59=w([A.bU,A.by,A.b8,A.b7,A.co,A.bU],x.O)
D.eRK=new B.fS(A.A,0,6.283185307179586,A.x,D.d59,null,null)
D.cMl=w([A.pw,A.oq,A.Ab,A.io,A.pw],x.O)
D.eRL=new B.fS(A.A,0,6.283185307179586,A.x,D.cMl,null,null)
D.d53=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eRM=new B.fS(A.A,0,6.283185307179586,A.x,D.d53,null,null)
D.dcg=w([A.bt,A.b8,A.by,A.bU,A.bt],x.O)
D.eRO=new B.fS(A.A,0,6.283185307179586,A.x,D.dcg,null,null)
D.bd8=new B.w(1,0,1,1,A.t)
D.b7l=new B.w(1,1,0,1,A.t)
D.d8z=w([A.E0,A.adb,H.ac7,D.bd8,H.acw,D.b7l,A.E0],x.O)
D.eRP=new B.fS(A.A,0,6.283185307179586,A.x,D.d8z,null,null)
D.eS3=new C.auF(2,"immersiveSticky")
D.eS4=new C.auF(3,"edgeToEdge")
D.eS5=new C.auF(4,"manual")
D.eUk=new B.G(!0,A.oj,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO6=new B.G(!0,A.f3,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUT=new B.G(!0,E.mU,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWm=new B.G(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXk=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXu=new B.G(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXP=new B.G(!0,A.ez,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ9=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZi=new B.G(!0,A.j9,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZw=new B.rr(!0,A.HQ,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f__=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_C=new B.G(!0,A.j7,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0_=new B.G(!0,A.az,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e5S=new B.iM(1,1,0.7568627450980392,0.027450980392156862)
D.f03=new B.rr(!0,D.e5S,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adi=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aOQ=new B.G(!0,D.adi,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0a=new B.G(!0,D.aek,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0b=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOS=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0P=new B.rr(!0,A.oT,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f15=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.T3=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1C=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1E=new B.G(!0,D.adi,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.II=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f26=new B.G(!0,A.bY,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2e=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2h=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2y=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.auX,null,null,null)
D.f2A=new B.G(!0,A.ci,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2C=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2P=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3_=new B.G(!0,A.dy,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3w=new B.G(!0,A.aR,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3F=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3T=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPt=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPv=new B.G(!0,A.c_,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bib=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f5C=new B.G(!0,D.bib,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPD=new B.G(!0,E.mU,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f66=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f69=new B.G(!0,N.l6,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_d=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7l=new B.x("NEW",null,D.f_d,null,null,null,null,null,null,null,null,null)
D.f7B=new B.x("Hati ya Kuhowesha",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f83=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new B.x("Scrollable PDF on this slide",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f94=new B.x("Big quote mark",null,A.iH,null,null,null,null,null,null,null,null,null)
D.f97=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f9i=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f9K=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f9M=new B.x("How many slides?",null,A.ho,null,null,null,null,null,null,null,null,null)
D.faj=new B.x("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eW8=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faE=new B.x("Luxury FX",null,D.eW8,null,null,null,null,null,null,null,null,null)
D.fb_=new B.x("Font",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fba=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f59=new B.G(!0,A.bJ,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbo=new B.x("Example  GA847",null,D.f59,null,null,null,null,null,null,null,null,null)
D.fbO=new B.x("Design shapes",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fbX=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fc0=new B.x("Non-stop (loop)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fce=new B.x("Hati ya Kuhoweya",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fcx=new B.x("Photo studio",null,A.fN,null,null,null,null,null,null,null,null,null)
D.fcX=new B.x("Add your picture",null,A.kY,null,null,null,null,null,null,null,null,null)
D.eZx=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcY=new B.x("Enter document code",null,D.eZx,null,A.L,null,null,null,null,null,null,null)
D.fcZ=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fd3=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eXa=new B.G(!0,E.mU,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new B.x("Delete this book?",null,D.eXa,null,A.L,null,null,null,null,null,null,null)
D.f0E=new B.G(!0,E.mU,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fed=new B.x("Your library",null,D.f0E,null,null,null,null,null,null,null,null,null)
D.fei=new B.x("Delete",null,A.aOK,null,null,null,null,null,null,null,null,null)
D.fek=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.IF,null,null,null,null,null,null,null,null,null)
D.fev=new B.x("Element flies in",null,A.aOW,null,null,null,null,null,null,null,null,null)
D.Tj=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.feT=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.ffb=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fff=new B.x("Cancel",null,E.aP5,null,null,null,null,null,null,null,null,null)
D.ffh=new B.x("The lines and circles that come with the design",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f40=new B.G(!0,A.hi,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffI=new B.x("DOCUMENT CODE",null,D.f40,null,null,null,null,null,null,null,null,null)
D.fgv=new B.x("Quotes",null,G.a7g,null,null,null,null,null,null,null,null,null)
D.eYX=new B.G(!0,N.l6,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgD=new B.x("Add a picture",null,D.eYX,null,null,null,null,null,null,null,null,null)
D.fgL=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6W,null,A.L,null,null,null,null,null,null,null)
D.fgP=new B.x("Look & feel",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fgU=new B.x("Rings",null,A.i3,null,null,null,null,null,null,null,null,null)
D.fh_=new B.x("W",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fh9=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IH,null,A.L,null,null,null,null,null,null,null)
D.fhu=new B.x("Write your book",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fif=new B.x("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fit=new B.x("Malipo ya Awamu ya Mahari",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eZm=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiI=new B.x("Create with AI",null,D.eZm,null,A.L,null,null,null,null,null,null,null)
D.fja=new B.x("Apply look",null,A.i3,null,null,null,null,null,null,null,null,null)
D.f_4=new B.G(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new B.x("Type your presentation below",null,D.f_4,null,A.L,null,null,null,null,null,null,null)
D.fk0=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aPF,null,A.L,null,null,null,null,null,null,null)
D.fk2=new B.x("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.eV9=new B.G(!0,A.cs,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk9=new B.x("Done",null,D.eV9,null,null,null,null,null,null,null,null,null)
D.fku=new B.x("Delete",null,A.nm,null,null,null,null,null,null,null,null,null)
D.fkD=new B.x("Hati ya Kiapo cha Uongozi",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eYk=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flv=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eYk,null,A.L,null,null,null,null,null,null,null)
D.flR=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.flX=new B.x("Layout",null,A.Tb,null,null,null,null,null,null,null,null,null)
D.fmy=new B.x("Print",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fmD=new B.x("X",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fnc=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.SY,null,null,null,null,null,null,null,null,null)
D.fnK=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new B.x("Hati ya Kuhowa",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fnY=new B.x("Choose a class template",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fo_=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fo5=new B.x("Download the newspaper picture",null,A.cx,null,null,null,null,null,null,null,null,null)
D.foh=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.foo=new B.x("Done",null,A.aPs,null,null,null,null,null,null,null,null,null)
D.foz=new B.x("Ending celebration",null,A.ds,null,null,null,null,null,null,null,null,null)
D.foA=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.foP=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.SP,null,null,null,null,null,null,null,null,null)
D.fpL=new B.x("Export presentation",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fpM=new B.x("What would you like to do?",null,D.aOQ,null,null,null,null,null,null,null,null,null)
D.fpP=new B.x("Delete",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fqi=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fqm=new B.x("Hati (Documents)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fqz=new B.x("Done",null,A.l_,null,null,null,null,null,null,null,null,null)
D.f5_=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqE=new B.x("Delete presentation?",null,D.f5_,null,A.L,null,null,null,null,null,null,null)
D.fqV=new B.x("After the last slide it starts again from the first",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fr5=new B.x("\ud83c\udf33",null,A.IC,null,A.L,null,null,null,null,null,null,null)
D.frn=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fru=new B.x("Transfer document",null,A.p1,null,null,null,null,null,null,null,null,null)
D.frF=new B.x("Add to the slides",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fs1=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fsg=new B.x("Make a book",null,I.aOn,null,null,null,null,null,null,null,null,null)
D.fsk=new B.x("Books",null,A.cx,null,null,null,null,null,null,null,null,null)
D.eYQ=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsl=new B.x("Keep this page open until it finishes.",null,D.eYQ,null,null,null,null,null,null,null,null,null)
D.fso=new B.x("Making your video",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fst=new B.x("LANGUAGE",null,D.T3,null,null,null,null,null,null,null,null,null)
D.fsA=new B.x("Use this ending",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fsI=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fsJ=new B.x("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fsZ=new B.x("Delete from the database?",null,A.kY,null,null,null,null,null,null,null,null,null)
D.ft_=new B.x("H",null,A.rC,null,null,null,null,null,null,null,null,null)
D.ftn=new B.x("NGMY Quotes",null,A.ds,null,null,null,null,null,null,null,null,null)
D.ftO=new B.x("Cover",null,D.aPD,null,null,null,null,null,null,null,null,null)
D.ftS=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.ftT=new B.x("Each page becomes its own slide you can present",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fuf=new B.x("Y",null,A.rC,null,null,null,null,null,null,null,null,null)
D.fuq=new B.x("Crop the picture",null,A.l_,null,null,null,null,null,null,null,null,null)
D.fuw=new B.x("Edit text",null,A.ID,null,null,null,null,null,null,null,null,null)
D.fwK=B.dR("a7H")
D.Dd=new C.avY(0,"none")
D.aSu=new C.avY(1,"zipCrypto")
D.aSv=new C.avY(2,"aes")
D.fK6=new F.OQ("","",null)
D.fLc=new C.baX(null)
D.fMj=new C.YY(null)
D.fNT=new C.acv(null)
D.fNV=new C.aD9(null)
D.fQG=new C.a_c(null)
D.fQW=new C.a_H(null)
D.fRe=new C.bsq(null)})();(function staticFields(){$.h8q=null
$.h8r=null
$.h8s=null
$.h8t=null
$.fRA=B.uT("_lastQuoRemDigits")
$.fRB=B.uT("_lastQuoRemUsed")
$.awj=B.uT("_lastRemUsed")
$.fRC=B.uT("_lastRem_nsh")
$.pZ=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6w=B.T(x.N,x.I)
$.fP5=!1
$.hde=B.T(B.ax("kN"),x.N)
$.hdr=B.T(B.ax("kN"),x.E)
$.hbq=!1
$.by3="q"
$.PN=0
$.Ch=B.T(x.N,B.ax("aj<z8>"))
$.hbO=!1
$.fT9=!1
$.hi_=null
$.hM4=B.T(x.N,B.ax("ay<n?>"))
$.JV=""
$.iX=0
$.h5c=function(){var w=x.N
return B.T(w,w)}()
$.h5b=B.T(x.N,x.R)
$.fTu=!1
$.af8=B.T(x.N,x.E)
$.fUh=0
$.bj0=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iaa","CF",()=>C.b8s(0))
w($,"ia8","a1V",()=>C.b8s(1))
w($,"ia9","hlz",()=>C.b8s(2))
w($,"ia7","fY2",()=>$.a1V().uM(0))
w($,"ia5","hlx",()=>C.b8s(1e4))
w($,"ia6","hly",()=>B.DR(8))
w($,"i5Y","hjA",()=>B.DR(0))
w($,"i65","hjE",()=>B.DR(0))
w($,"i64","hjD",()=>B.bWH(0))
w($,"idP","hnz",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a2X.gdK(D.a2X),v=v.gae(v);v.C();){u=v.gS(v)
t.n(0,u.b,u.a)}return t})
w($,"ief","bCC",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mQ(new C.fA9(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mQ(new C.fAa(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mQ(new C.fAb(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mQ(new C.fAm(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mQ(new C.fAr(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mQ(new C.fAs(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mQ(new C.fAt(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mQ(new C.fAu(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mQ(new C.fAv(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mQ(new C.fAw(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mQ(new C.fAx(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mQ(new C.fAc(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mQ(new C.fAd(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mQ(new C.fAe(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mQ(new C.fAf(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mQ(new C.fAg(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mQ(new C.fAh(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mQ(new C.fAi(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mQ(new C.fAj(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mQ(new C.fAk(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mQ(new C.fAl(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mQ(new C.fAn(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mQ(new C.fAo(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mQ(new C.fAp(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mQ(new C.fAq(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Eh>"))})
w($,"idS","hnB",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["ouXofRS6tBHEGDHYo4zMd2WO4uY="]=a.current})($__dart_deferred_initializers__);