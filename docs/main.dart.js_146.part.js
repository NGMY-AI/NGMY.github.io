((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ai,A6,Aj,Ak,W,A7,Al,Am,C={
uj(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hbj(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KC(d){var w
if(d===0)return $.DK()
if(d===1)return $.a3W()
if(d===2)return $.hI6()
if(Math.abs(d)<4294967296)return C.bc7(A.o.L(d))
w=C.i2r(d)
return w},
bc7(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.uj(4,w)
return new C.oj(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.uj(1,w)
return new C.oj(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.uj(2,w)
return new C.oj(v===0?!1:s,w,v)}v=A.o.ap(A.o.galF(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ap(d,65536)}v=C.uj(v,w)
return new C.oj(v===0?!1:s,w,v)},
i2r(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DK()
w=$.hI5()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lp(A.aI.gaU(w))
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
q=new C.oj(!1,r,4)
if(s<0)p=q.mD(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hbk(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hu7(d,e,f,g){var w,v,u,t,s,r=A.o.ap(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fR(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hu2(d,e,f,g){var w,v,u,t,s=A.o.ap(f,16)
if(A.o.F(f,16)===0)return C.hbk(d,e,s,g)
w=e+s+1
C.hu7(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i2u(d,e,f,g){var w,v,u,t,s=A.o.ap(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fR(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fR(u,r)}w&2&&B.aj(g)
g[n]=o},
cOU(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i2s(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bc8(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hu8(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.ap(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.ap(r,65536)}},
i2t(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oj:function oj(d,e,f){this.a=d
this.b=e
this.c=f},
cOV:function cOV(){},
cOW:function cOW(){},
cOX:function cOX(d,e){this.a=d
this.b=e},
cOY:function cOY(d){this.a=d},
aTp:function aTp(d,e){this.a=d
this.b=e},
hjN(d,e,f){var w=new C.SP(d,A.o.ap(Date.now(),1000),e)
w.Q=f
return w},
SP:function SP(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4T:function a4T(d,e){this.a=d
this.b=e},
bKu:function bKu(d){this.a=d
this.c=this.b=0},
hLt(){return new C.bIM()},
bIM:function bIM(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cGU:function cGU(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i27(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cc(d.gd37(d)))
v=f*2+2
u=C.hrN(C.hrP(),64)
t=new C.cpD(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cpE(e,1000,v)
s=new Uint8Array(v)
return A.aI.dq(s,0,t.cQW(w,0,s,0))},
cGS:function cGS(d,e){this.c=d
this.d=e},
ayX:function ayX(d,e){this.a=d
this.b=e},
cGV:function cGV(d,e,f,g){var _=this
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
baO:function baO(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cGT:function cGT(){this.a=$},
htC(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hLc(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHl:function bHl(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hhp(d,e){e&=31
return(d&$.qv[e])<<e>>>0},
nO(d,e){e&=31
return(d>>>e|C.hhp(d,32-e))>>>0},
hrO(d){var w,v=new C.auv()
if(B.iU(d))v.aMP(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hrP(){var w=C.hrO(0),v=new Uint8Array(4),u=x.S
u=new C.cpF(w,v,A.Fm,5,B.c_(5,0,!1,u),B.c_(80,0,!1,u))
u.ia(0)
return u},
hrN(d,e){var w=new C.cpB(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cpA:function cpA(){},
cpE:function cpE(d,e,f){this.a=d
this.b=e
this.c=f},
cpy:function cpy(){},
auu:function auu(d){this.a=d},
cpD:function cpD(d){this.a=$
this.b=d
this.c=$},
cpz:function cpz(){},
cpx:function cpx(){},
auv:function auv(){this.b=this.a=$},
cpC:function cpC(){},
cpF:function cpF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpB:function cpB(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpw:function cpw(){},
cpv:function cpv(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSJ:function bSJ(){},
bSK:function bSK(d){this.a=d},
cA2:function cA2(){},
bTL:function bTL(d,e){this.a=d
this.b=!1
this.c=e},
bTM:function bTM(){},
ieX(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axy(d){var w=0,v=B.j(x.H),u
var $async$axy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.flK?2:4
break
case 2:w=5
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axy)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIOverlays",C.ieX(null),u),$async$axy)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axy,v)},
axB:function axB(d,e){this.a=d
this.b=e},
a9x:function a9x(d){this.a=d},
ihJ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fGM(15,d,f,e,g,h),o=i*i,n=A.i.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.i.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fGM:function fGM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoZ(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.ai6("ngmy_menu_lib_v1_zzslides_index",A.bL),$async$aoZ)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cE(t,new C.c3H(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3I())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoZ,v)},
ap0(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ap0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoZ(),$async$ap0)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aU(j);r.C();){q=r.gR(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nN("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$ap0)
case 7:if(!f){w=5
break}s.n(0,p,B.I(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
w=10
return B.b(B.nN("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$ap0)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap0,v)},
c3J(d){return C.hRh(d)},
hRh(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3J=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.ai6("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ib),$async$c3J)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.X6(B.a3(q,x.N,x.z))
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
return B.i($async$c3J,v)},
ap_(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ap_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoZ(),$async$ap_)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nR(r,new C.c3K(d))
w=4
return B.b(B.nN("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$ap_)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aRo("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$ap_)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap_,v)},
c3H:function c3H(){},
c3I:function c3I(){},
c3K:function c3K(d){this.a=d},
isv(d,e,f){return B.bT(A.L,null,new C.fXI(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fXI:function fXI(d,e,f){this.a=d
this.b=e
this.c=f},
a29:function a29(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aL0:function aL0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fi5:function fi5(d,e){this.a=d
this.b=e},
fi9:function fi9(d){this.a=d},
fia:function fia(d){this.a=d},
fib:function fib(d,e,f){this.a=d
this.b=e
this.c=f},
fi6:function fi6(d){this.a=d},
fi7:function fi7(d){this.a=d},
fi8:function fi8(d,e){this.a=d
this.b=e},
fi0:function fi0(d){this.a=d},
fhZ:function fhZ(d){this.a=d},
fi_:function fi_(d){this.a=d},
fi1:function fi1(d){this.a=d},
fi2:function fi2(d){this.a=d},
fif:function fif(d,e){this.a=d
this.b=e},
fie:function fie(d,e){this.a=d
this.b=e},
fi4:function fi4(d,e,f){this.a=d
this.b=e
this.c=f},
fi3:function fi3(d,e,f){this.a=d
this.b=e
this.c=f},
fic:function fic(d,e){this.a=d
this.b=e},
fid:function fid(d,e){this.a=d
this.b=e},
fii:function fii(d){this.a=d},
fij:function fij(d,e){this.a=d
this.b=e},
fih:function fih(d,e){this.a=d
this.b=e},
fig:function fig(){},
hwC(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cE(v,new C.fpJ(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fpK(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a38(d){return C.ij4(d)},
ij4(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a38=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fJY(n)
t=4
j=m
i=C
w=7
return B.b(B.a3I("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a38)
case 7:j.$1(i.hwC(f))
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
return B.b(B.az(),$async$a38)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hwC(B.aS(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fpS(d),$async$a38)
case 13:p=j.C(new i.Y(h,new g.fJW(f),o),o.k("M.E"))
A.d.aZ(p,new C.fJX())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a38,v)},
aiH(d,e){return C.is8(d,e)},
is8(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiH=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b8(e,new C.fX9(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aiz("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiH)
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
return B.b(B.az(),$async$aiH)
case 12:p=g
w=13
return B.b(p.aB("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiH)
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
return B.i($async$aiH,v)},
fpS(d){return C.i74(d)},
i74(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fpS=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fpS)
case 7:r=f
q=r.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jz(q,B.U(q).c)
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
return B.i($async$fpS,v)},
ahz(d,e){return C.ihB(d,e)},
ihB(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahz=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ahz)
case 6:s=g
r=B.aR(x.N)
q=s.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h7(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("cj.E"))
w=7
return B.b(s.aB("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahz)
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
return B.b(C.a38(d),$async$ahz)
case 8:n=g
J.nR(n,new C.fGm(e))
w=9
return B.b(C.aiH(d,n),$async$ahz)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahz,v)},
isA(d,e){return B.a7(d,!1).ca(B.e9(new C.fY3(e),!0,null,x.H))},
i2w(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cQh())},
oK:function oK(d,e,f){this.a=d
this.b=e
this.c=f},
fpJ:function fpJ(){},
fpK:function fpK(){},
fJY:function fJY(d){this.a=d},
fJW:function fJW(d){this.a=d},
fJX:function fJX(){},
fX9:function fX9(){},
fGm:function fGm(d){this.a=d},
fY3:function fY3(d){this.a=d},
ZR:function ZR(d,e){this.c=d
this.a=e},
azv:function azv(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQh:function cQh(){},
cQj:function cQj(d,e){this.a=d
this.b=e},
cQm:function cQm(d){this.a=d},
cQn:function cQn(d){this.a=d},
cQl:function cQl(){},
cQo:function cQo(d,e){this.a=d
this.b=e},
cQk:function cQk(d){this.a=d},
cQp:function cQp(){},
cQi:function cQi(d,e){this.a=d
this.b=e},
cQq:function cQq(){},
cQd:function cQd(d){this.a=d},
cQb:function cQb(d){this.a=d},
cQc:function cQc(d){this.a=d},
cQe:function cQe(d,e){this.a=d
this.b=e},
cQa:function cQa(d){this.a=d},
cQ9:function cQ9(d){this.a=d},
cQ7:function cQ7(d,e){this.a=d
this.b=e},
cQ8:function cQ8(d){this.a=d},
cQg:function cQg(){},
cQf:function cQf(d){this.a=d},
cQ6:function cQ6(d,e){this.a=d
this.b=e},
cQ5:function cQ5(d,e){this.a=d
this.b=e},
cQ4:function cQ4(d,e){this.a=d
this.b=e},
cQr:function cQr(d){this.a=d},
ZP:function ZP(d,e,f){this.c=d
this.d=e
this.a=f},
aGP:function aGP(d,e,f){this.a=d
this.b=e
this.c=f},
azr:function azr(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPy:function cPy(d){this.a=d},
cPx:function cPx(d){this.a=d},
cPA:function cPA(d,e,f){this.a=d
this.b=e
this.c=f},
cPI:function cPI(){},
cPJ:function cPJ(d){this.a=d},
cPB:function cPB(d,e,f){this.a=d
this.b=e
this.c=f},
cPz:function cPz(d,e){this.a=d
this.b=e},
cPD:function cPD(d,e){this.a=d
this.b=e},
cPE:function cPE(d,e){this.a=d
this.b=e},
cPF:function cPF(d,e){this.a=d
this.b=e},
cPC:function cPC(d){this.a=d},
cPH:function cPH(d){this.a=d},
cPG:function cPG(d,e){this.a=d
this.b=e},
cPO:function cPO(d){this.a=d},
cPK:function cPK(d,e){this.a=d
this.b=e},
cPL:function cPL(d,e){this.a=d
this.b=e},
cPM:function cPM(d,e){this.a=d
this.b=e},
cPN:function cPN(d,e){this.a=d
this.b=e},
azt:function azt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ils(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fOw(),x.H).eM(new C.fOx())}}else if(s)C.hyb()}catch(t){}},
hyb(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.fu4())}catch(u){}},
ilv(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fOw:function fOw(){},
fOx:function fOx(){},
fu4:function fu4(){},
hD4(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ei(v,w,"").split(":"))},
hD1(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lu)return null
return A.a.b2(w,14)},
hg3(d){var w
if(d.b!==D.lu)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ilV(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hD5(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ilQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fPv(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Go(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Sx(A.a.aC(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Sx(A.a.b2(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ilO(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fPu())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aSq(w,u,s,0)}return w},
ilS(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6R:$.hKf(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hD2(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fqO(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hD4(q)===e)return q}return null},
ilT(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I9).a},
ilU(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afi(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afi(0,0,0)
v=C.fqO(b6,b0)
u=C.fqO(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ilS(b2,C.ilQ(C.hD2(b2),v.r))
if(s.a!==0){u.r=C.ilO(C.hD2(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hD4(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fqO(b6,n)
i=C.fqO(b5,n)
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
a0=C.hg3(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hD1(a8)===a0||C.hg3(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RS(a1,new C.fPB(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eP(""+1000*a6+"_"+a9,D.lu,a2,a3,a4,a5,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,d.at,D.bk,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ct,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afi(k,t,e)},
ilP(d){var w=C.ilT(d)
if(d.w==="hati_kuhowa")return C.hCp("",w)
return C.hCo("",w)},
fPv:function fPv(){},
fPu:function fPu(){},
fPB:function fPB(d){this.a=d},
hxT(){var w=new B.V(Date.now(),0,!1),v=new C.ft5()
return B.w(v.$1(B.bU(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hgc(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fQt(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lu&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hDj(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fQt(d)
w=B.bj(u)
if(w==null)return!C.fQt(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
imA(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hVk(d){return A.a.i(d).toLowerCase()},
aro(d){return C.hVm(d)},
hVm(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aro=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aro)
case 7:r=f
p=r.tS("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.iqI(),B.U(o).k("N<1,n>")).bY(0,new C.cfZ())
o=B.d4(o,o.$ti.k("M.E"))
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
return B.i($async$aro,v)},
arn(d,e){return C.hVl(d,e)},
hVl(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arn=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aro(d),$async$arn)
case 3:r=g
if(!J.c5(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arn)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pY(r)),$async$arn)
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
return B.i($async$arn,v)},
arp(d,e){return C.hVn(d,e)},
hVn(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aro(d),$async$arp)
case 3:r=g
if(!J.hk(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arp)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pY(r)),$async$arp)
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
return B.i($async$arp,v)},
Wu(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wu=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h8H&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Wu)
case 7:r=a7
q=B.aS(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aQ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.hT(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aK(o,J.k(n.a),C.X6(B.a3(f.a(n.b),e,a0)))}$.a8l=o}}t=2
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
return B.b(B.c8(),$async$Wu)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uz("civic_hati_kiapo_uongozi",null,A.el),$async$Wu)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.hT(f.a(J.t(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aK(k,J.k(j.a),C.X6(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.ch(o,B.a4(o).k("ch<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a8l.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcG()
else f=!0
f=!f}else f=!0
if(f)$.a8l.n(0,i.a,i.b)}w=20
return B.b(C.arq(),$async$Wu)
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
case 16:case 9:$.h8H=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wu,v)},
arq(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$arq=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$arq)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a8l,o=new B.ch(o,B.a4(o).k("ch<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aB("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.aw(r,null)),$async$arq)
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
return B.i($async$arq,v)},
b1u(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wu(!1),$async$b1u)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a8l.h(0,t)
r=s==null?null:s.hR()
if(r==null){u=null
w=1
break}u=C.bES(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1u,v)},
a8m(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8m=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hR()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a8l.n(0,d,o)
$.h8H=!0
w=3
return B.b(C.arq(),$async$a8m)
case 3:w=4
return B.b(B.c8(),$async$a8m)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a8l,n=new B.ch(n,B.a4(n).k("ch<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.aj())}w=9
return B.b(B.nN("civic_hati_kiapo_uongozi",B.I(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],e,x.z),null),$async$a8m)
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
return B.i($async$a8m,v)},
arr(d){var w=0,v=B.j(x.T),u,t,s
var $async$arr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a6O(A.eO),$async$arr)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$arr)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1t(t,d),$async$arr)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arr,v)},
b1t(d,e){return C.hVo(d,e)},
hVo(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1t=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1t)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iC("media")
w=8
return B.b(p.xH(q,new Uint8Array(B.cc(d)),D.bKS),$async$b1t)
case 8:n=p.Dc(q)
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
return B.i($async$b1t,v)},
Lp(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
fsx(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hcY(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.i.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ac(g,3),4280640491,i,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
fs5(d,e,f,g){return C.fsx(0,0.002,D.fK,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hcZ(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r9,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ac(g,3),4280640491,i,A.bt,A.a8,"",h,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
hxS(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ei(v,w,"").split(":"))},
bES(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hxS(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lu&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hR()}h=C.hfI(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cp(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hxS(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lu&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fOu(a2))}else A.d.bt(a1.z,new C.fOv())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fQt(a0))a0.ax=a6.f.aa().ag()
return a0},
hfI(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fRg(D.a7R),l=C.cD(),k=x.u,j=B.a([C.er(A.bn,!1,s,A.aG,"marriage_locked_bg",r,24,A.bt,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lU,1,0,0)],k),i=B.a([],k)
i.push(C.Lp("NGMY",A.K,236069181,52,A.bt,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lp("TAREHE:",A.bn,o,16,A.bt,A.H,A.i.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hcY("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hxT()))
i.push(C.fs5(0.8099999999999999,0.026+A.i.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lp("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bt,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lp("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cH,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fsx(0,0.002,D.fK,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hcZ("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hcZ("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hcZ("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fsx(268435456,0.175,D.bk,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lp("VIDEO YA KIAPO",A.bn,o,10,A.bt,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bn,!1,s,A.aG,"__kiapo_video__",r,24,A.bt,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lU,0.77,0.115,0.492))
i.push(C.Lp("Rais Anayeapa:",A.bn,p,15,A.bt,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lp("Jina:",A.bn,p,13,A.bt,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hcY("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.fs5(0.195,0.7130000000000001,0.62,n))
i.push(C.Lp("Sahihi:",A.bn,p,13,A.bt,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bn,!1,s,A.aG,"marriage_sign_rais",0,24,A.bt,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.38,0.21500000000000002,0.73))
i.push(C.fs5(0.21500000000000002,0.795,0.38,n))
i.push(C.Lp("Tarehe:",A.bn,p,13,A.bt,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hcY("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hxT()))
i.push(C.fs5(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fsx(0,0.032,D.bk,o,1,"state_box",0.72,0.14,0.875),C.Lp("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bt,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rW(4294967035,t,0,0,j,l,D.qZ,"","",u,D.dm)
return C.Cp(t,t,t,t,D.oO,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahH(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahH=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.M(x.q).f.U(D.fgu)
w=1
break}w=3
return B.b(C.Wu(!0),$async$ahH)
case 3:w=4
return B.b(C.b1u(p),$async$ahH)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hDj(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bmd,null,new C.fJk(p),f,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahH)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fJl(),f,null,!0,!0,x.y),$async$ahH)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hfI(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.M(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hfI(p))
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
ft5:function ft5(){},
cfZ:function cfZ(){},
fOu:function fOu(d){this.a=d},
fOv:function fOv(){},
fJk:function fJk(d){this.a=d},
fJi:function fJi(d){this.a=d},
fJj:function fJj(d){this.a=d},
fJl:function fJl(){},
fJg:function fJg(d){this.a=d},
fJh:function fJh(d){this.a=d},
arW:function arW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFD:function aFD(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
elT:function elT(d){this.a=d},
elR:function elR(d){this.a=d},
elS:function elS(d){this.a=d},
elU:function elU(d){this.a=d},
elV:function elV(d){this.a=d},
x8(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",j,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
hxt(d,e,f){var w=4291404327
return B.a([C.qu(0,f,D.eZ,w,2,"ring_l",f,d-f*0.42,e),C.qu(0,f,D.eZ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
frv(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qu(4294967288,f,D.eZ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qu(h,s,D.eZ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qu(h,f*0.46,D.eZ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qu(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
fru(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.i.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.i.ac(g,3)+":"+A.o.ac(j,1):u+A.i.ac(g,3),4280640491,j,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,l,0,0,"",D.ct,D.cW,g,e,f)},
bCf(d,e,f,g){return C.qu(0,0.002,D.fK,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hxs(d,e,f,g,h){var w=A.i.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qu(0,0.036,D.bk,h,1.4,"banner_box_"+d,w,v,e),C.x8(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hD3(){var w=new B.V(Date.now(),0,!1),v=new C.fPA()
return B.w(v.$1(B.bU(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hxu(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x8(r+".",A.bn,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fru("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bCf(q,g+A.i.D(0.0272,0.02,0.06),p,w),C.x8("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bt,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,s,t,g-0.004),C.bCf(t,g+0.044,s,w)],x.u)},
ai8(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dss,D.cut,D.dki,D.dml],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hc9(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fRg(d.d),v=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,1,0,0)],x.u)
A.d.v(v,C.i9J(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i9J(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x8("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hxt(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hxt(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.frv(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.frv(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x8("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qu(0,0.062,D.eZ,b1,1.6,"crest_o",0.11,0.445,0.012),C.qu(0,0.046,D.eZ,b1,1,"crest_i",0.084,0.458,0.02),C.x8("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qu(0,0.002,D.fK,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qu(b9,0.016,D.lv,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qu(0,0.002,D.fK,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x8("TAREHE:",A.bn,c0,20,A.H,A.i.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fru("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hD3()),C.bCf(0.814,0.026+A.i.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x8(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qu(c0,0.0026,D.bk,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qu(c3.e,0.138,D.bk,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bn,!1,b9,A.aG,"marriage_field_utangulizi:"+A.i.ac(0.82,3),b2,19,A.bt,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bk,b3,2,c5,0,0,"",D.ct,D.cW,0.82,0.09,t))
t+=c4
if(c8){r=A.i.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qu(0,0.036,D.bk,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.i.ac(r,3),b2,30,A.bt,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bk,b3,2,c7,0,0,"",D.ct,D.cW,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hxs(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x8(c9,A.bn,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.i.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fru("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.jc
$.jc=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.jc
$.jc=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eP(""+1000*i+"_"+h,D.cW,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bt,A.aG,c0,A.bn,a9,D.bk,b2,b3,2,0,!1,s,0,D.ct,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fi,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.fK,0,b5,0.8,0,!1,g,0,D.ct,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.jc
$.jc=p+1
i=Date.now()
h=$.jc
$.jc=h+1
g=Date.now()
f=$.jc
$.jc=f+1
e=Date.now()
a3=$.jc
$.jc=a3+1
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cW,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bt,A.aG,b7,A.e_,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fi,a1,a2,0.046,0.025875,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cW,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bt,A.aG,b7,A.K,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fi,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ct,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hxs("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7I||w===D.a7K||w===D.a7H||w===D.a7J){w=t-0.008
A.d.v(c2,C.frv(0.21,w,0.044,!0,b0))
A.d.v(c2,C.frv(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qu(0,a4,D.bk,c0,1.3,"wit_table_border",0.82,0.09,t),C.qu(c0,a4,D.bk,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qu(0,0.0022,D.fK,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x8("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x8("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hxu("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hxu("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qu(0,0.11,D.bk,c0,1.2,"mw_box",0.82,0.09,t),C.x8("MWANDISHI",A.bn,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x8("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fru("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bCf(0.215,p,0.3116,b5),C.x8("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bn,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bt,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.3161999999999999,0.5738,s-0.044),C.bCf(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qu(0,0.032,D.bk,c0,1,"state_box",0.7,0.15,a8),C.x8("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ilR(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hgm(d.d),p=new C.fPw(s),o=new C.fPx(s),n=d.z,m=n===D.a7I||n===D.a7K||n===D.a7H||n===D.a7J,l=n===D.aK3||n===D.a7L||n===D.aK4,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7L?26:16
i.push(new C.fPz().$1$size(w))}if(n===D.aK5)i.push(D.fYB)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iR,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.m(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTF,p.$1$w(0.9),D.aTF,p.$1$w(0.75)],j),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(D.bgI,t,n,w,t,t,A.n),t,t,t,t,A.amU,t,t,t))
i.push(A.am)
i.push(new C.fPy(r).$1("NIMETOWE"))
i.push(A.fM)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NW,new B.c7(A.aL,A.e,A.j,A.l,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.de,new B.bz(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(A.alx,B.x(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
hCo(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ai8(e,t)
if(r==null)r=A.d.gH(D.I9)
w=C.cD()
v=C.rW(r.e,t,0,0,C.hc9(r,0.165,y.O,D.dmY,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qZ,"","",s,D.dm)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cp(t,t,t,t,D.oO,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hCp(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ai8(e,t)
if(r==null)r=A.d.gH(D.I9)
w=C.cD()
v=C.rW(r.e,t,0,0,C.hc9(r,0.165,y.f,D.dig,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qZ,"","",s,D.dm)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cp(t,t,t,t,D.oO,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGb(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h0w(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGb,v)},
ahI(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahI=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJo(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N2,null,new C.fJp(p),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahI)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGb(d,"Hati ya Kuhowa",D.I9),$async$ahI)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M4(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahI)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCo(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahI,v)},
ahJ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahJ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJs(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N2,null,new C.fJt(p),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahJ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGb(d,"Hati ya Kuhoweya",D.I9),$async$ahJ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M4(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahJ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCp(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahJ,v)},
ahK(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahK=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fJw(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.N2,null,new C.fJx(m),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahK)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGb(d,"Malipo ya Awamu ya Mahari",D.Sw),$async$ahK)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M4(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahK)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ai8(s,D.Sw)
if(q==null)q=A.d.gH(D.Sw)
n=C.cD()
p=C.rW(q.e,null,0,0,C.hc9(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dcJ,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qZ,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dm)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cp(null,null,null,null,D.oO,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahK,v)},
ya:function ya(d,e){this.a=d
this.b=e},
jC:function jC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fPA:function fPA(){},
fPw:function fPw(d){this.a=d},
fPy:function fPy(d){this.a=d},
fPz:function fPz(){},
fPx:function fPx(d){this.a=d},
h0w:function h0w(d,e){this.a=d
this.b=e},
aer:function aer(d,e,f){this.c=d
this.d=e
this.a=f},
e8i:function e8i(d,e,f){this.a=d
this.b=e
this.c=f},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8g:function e8g(d,e){this.a=d
this.b=e},
adQ:function adQ(d,e,f){this.c=d
this.d=e
this.a=f},
fJo:function fJo(){},
fJp:function fJp(d){this.a=d},
fJm:function fJm(d){this.a=d},
fJn:function fJn(d){this.a=d},
fJs:function fJs(){},
fJt:function fJt(d){this.a=d},
fJq:function fJq(d){this.a=d},
fJr:function fJr(d){this.a=d},
fJw:function fJw(){},
fJx:function fJx(d){this.a=d},
fJu:function fJu(d){this.a=d},
fJv:function fJv(d){this.a=d},
Ls(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,k,l,m)},
Dq(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hye(d,e,f){return C.Dq(0,0.002,D.fK,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCq(d,e,f,g,h){return B.a([C.Dq(4294967288,0.032,D.bk,4291404327,1.15,"pill_"+d,g,f,e),C.Ls(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hd2(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dq(0,0.002,D.fK,g,1,"orn_l_"+t,u,d,v),C.Dq(h,0.016,D.lv,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dq(0,0.002,D.fK,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2x(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ls(d,A.bn,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.i.ac(t,3),4280640491,i,A.cH,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,t,u,g-0.002),C.hye(u,g+0.018,t)],x.u)},
hyf(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dq(h,0.028,D.bk,h,0,"chv_"+d,g,e,f),C.Dq(w,0.024,D.lv,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dq(w,0.024,D.lv,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ls(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCp(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ls("Sahihi:",A.bn,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bt,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,v,w,f-0.006),C.hye(w,f+0.016,v)],x.u)},
hgn(d){var w,v
for(w=0;w<19;++w){v=D.SM[w]
if(v.a===d)return v}return null},
io9(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ai8(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ai8(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ai8(u,D.Sw)
v=w==null?l:w.d
if(v==null){w=C.ai8(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hgn(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hz3.a8(0)
$.hzf.a8(0)
t=C.fRg(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hhx(d){var w=0,v=B.j(x.T),u
var $async$hhx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h1Z(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hhx,v)},
yd:function yd(d,e){this.a=d
this.b=e},
o5:function o5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blE:function blE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h1Z:function h1Z(){},
aeu:function aeu(d){this.a=d},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqE:function eqE(d){this.a=d},
eqD:function eqD(d,e){this.a=d
this.b=e},
ag9:function ag9(d,e,f){this.c=d
this.d=e
this.a=f},
hgm(d){return $.hzf.c4(0,d,new C.fRi(d))},
fRg(d){return $.hz3.c4(0,d,new C.fRh(d))},
fE(d){return B.h6g(d>>>16&255,d>>>8&255,d&255,255)},
icX(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hAl(4294570461,4293910718,4284234270,u)
case 1:return C.hAl(4294635750,4293975240,t,4292912216)
case 2:w=C.fq2(s,4294505966,r)
C.bC9(w,14,16,p)
C.kK(w,8,9,464,836,u,1.2)
C.Dm(w,2,2,1,1,u,10)
C.Dm(w,478,2,-1,1,u,10)
C.Dm(w,2,852,1,-1,u,10)
C.Dm(w,478,852,-1,-1,u,10)
return w
case 3:return C.fq2(4294966515,4294373082,4289102906)
case 4:return C.i7q(C.fq2(4294376440,4293653998,4290287194))
case 5:w=C.fq2(4294965238,4294437098,4288444980)
C.bC9(w,14,16,4283043359)
C.kK(w,6,7,468,840,u,1)
C.kK(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,n,4294175448)
C.tg(v,n)
C.kK(v,24,24,432,806,4286209070,1)
C.a2k(v,12,12,468,12,o,3,20)
C.a2k(v,12,842,468,842,o,3,20)
C.a2k(v,12,12,12,842,o,3,20)
C.a2k(v,468,12,468,842,o,3,20)
return v
case 7:return C.i5b(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,m,4293911504)
C.tg(v,m)
C.kK(v,28,28,424,798,l,1)
C.fzJ(v,28,28,l,k)
C.fzJ(v,452,28,l,k)
C.fzJ(v,28,826,l,k)
C.fzJ(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,j,4294111986)
C.tg(v,j)
C.kK(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i9v(i,4294173372)
case 11:return C.iaG(4294439140,4293449662)
case 12:return C.i4Y(h,4294239432)
case 13:return C.ia5(4294244340,4293193448)
case 14:return C.iet(4294505710,4293780694)
case 15:return C.foU(4294966259,4294439138,o,p,q)
case 16:return C.foU(4294966776,4294178544,o,g,g)
case 17:return C.foU(4294965493,4294504170,o,4286200650,q)
case 18:return C.foU(4294966519,4294373862,o,p,p)
case 19:return C.i8B()
case 20:return C.i8C()
case 21:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,h,4293976768)
C.tg(v,h)
C.bC9(v,14,16,p)
B.iW(v,!0,C.fE(u),4,475,4,9)
B.iW(v,!0,C.fE(u),4,475,844,849)
B.iW(v,!0,C.fE(u),4,9,4,849)
B.iW(v,!0,C.fE(u),470,475,4,849)
C.a2k(v,10,12,470,12,u,2,16)
C.a2k(v,10,842,470,842,u,2,16)
C.a2k(v,10,12,10,842,u,2,18)
C.a2k(v,470,12,470,842,u,2,18)
C.Dm(v,2,2,1,1,t,10)
C.Dm(v,478,2,-1,1,t,10)
C.Dm(v,2,852,1,-1,t,10)
C.Dm(v,478,852,-1,-1,t,10)
C.kK(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,s,4294438872)
C.tg(v,s)
C.kK(v,14,16,452,822,o,2.2)
C.kK(v,22,24,436,806,o,1)
C.hes(v,!1,!1,o,p,p,36,14,16)
C.kY(v,240,20,7,o,!0)
C.kY(v,240,834,7,o,!0)
C.kY(v,18,427,7,o,!0)
C.kY(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,i,4293910712)
C.tg(v,i)
B.iW(v,!0,C.fE(u),0,479,0,20)
B.iW(v,!0,C.fE(u),0,479,834,853)
B.iW(v,!0,C.fE(u),0,20,0,853)
B.iW(v,!0,C.fE(u),460,479,0,853)
B.iW(v,!0,C.fE(f),5,474,5,9)
B.iW(v,!0,C.fE(f),5,474,844,848)
B.iW(v,!0,C.fE(f),5,9,5,848)
B.iW(v,!0,C.fE(f),470,474,5,848)
C.kK(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z6(v,e,4294174404)
C.tg(v,e)
C.bC9(v,14,16,p)
B.iW(v,!0,C.fE(u),3,476,3,8)
B.iW(v,!0,C.fE(u),3,476,845,850)
B.iW(v,!0,C.fE(u),3,8,3,850)
B.iW(v,!0,C.fE(u),471,476,3,850)
C.kK(v,9,10,462,834,t,1)
C.kK(v,14,16,452,822,u,1.8)
C.kY(v,240,8,4,u,!0)
C.kY(v,240,846,4,u,!0)
C.kY(v,8,427,4,u,!0)
C.kY(v,472,427,4,u,!0)
C.kY(v,8,8,3,t,!0)
C.kY(v,472,8,3,t,!0)
C.kY(v,8,846,3,t,!0)
C.kY(v,472,846,3,t,!0)
return v}},
z6(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.l_(d,!1,A.dj,new B.MI(s),r,A.d2,1,0,w-1,k,k);++k}},
tg(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e1()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.is()
v=A.o.D(A.i.L(s.gb8(s))-3,0,255)
r=A.o.D(A.i.L(s.gbe())-3,0,255)
q=A.o.D(A.i.L(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kK(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,f,f)
w=f+h
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,w,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,e,e,f,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,t,t,f,w)},
Dm(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.i.V(j*0.72),8,j-2)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e+g*j,f,f)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,e+g*t,v,v)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,w,v,f+h*t)},
hAl(d,e,f,g){var w=null,v=B.hn(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z6(v,d,e)
C.tg(v,d)
B.iW(v,!0,C.fE(f),0,479,0,28)
B.iW(v,!0,C.fE(f),0,479,826,853)
B.iW(v,!0,C.fE(f),0,28,0,853)
B.iW(v,!0,C.fE(f),452,479,0,853)
C.kK(v,5,5,470,844,g,1.1)
C.kK(v,28,28,424,798,g,1.6)
C.Dm(v,2,2,1,1,g,11)
C.Dm(v,478,2,-1,1,g,11)
C.Dm(v,2,852,1,-1,g,11)
C.Dm(v,478,852,-1,-1,g,11)
return v},
fq2(d,e,f){var w=null,v=B.hn(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z6(v,d,e)
C.tg(v,d)
C.kK(v,14,16,452,822,f,1.6)
C.kK(v,20,22,440,810,f,0.8)
return v},
bC9(d,e,f,g){var w,v=C.fE(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i7q(d){var w,v,u=4291404327
C.bC9(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kY(d,w,8,3,u,!0)
C.kY(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kY(d,7,v,3,u,!0)
C.kY(d,473,v,3,u,!0)}return d},
fD0(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.js(e,f),new B.js(e+g*n,f),new B.js(e,f+h*n)],t)
B.a34(d,C.fE(m),s)
w=A.o.D(A.i.V(n*0.17),5,8)
v=A.i.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.js(s,u),new B.js(e+g*v,u),new B.js(s,f+h*v)],t)
B.a34(d,C.fE(k),t)
t=A.i.V(n*0.39)
C.kY(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kY(d,e+g*t,f+h*3,4,k,!0)
C.kY(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kY(d,e+g*t,f,5,k,!0)
C.kY(d,e,f+h*t,5,k,!0)}},
hes(d,e,f,g,h,i,j,k,l){var w,v
C.fD0(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fD0(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fD0(d,k,v,1,-1,e,f,g,h,i,j)
C.fD0(d,w,v,-1,-1,e,f,g,h,i,j)},
a2k(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.i.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.i.V(e+o*s)
q=A.i.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ln(d,!0,A.dj,new B.rq(p),null,A.d2,j,r,q)}},
fBS(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l_(d,!0,A.dj,new B.rq(o),null,A.d2,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l_(d,!0,A.dj,new B.rq(o),null,A.d2,1.4,q,q,p,p+h*r)}},
i5b(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cc,0,A.e8,854,o,0,3,o,A.cc,480,!1)
C.z6(n,d,e)
C.tg(n,d)
C.kK(n,20,20,440,814,f,1.2)
C.fBS(n,0,0,1,1,g)
C.fBS(n,480,0,-1,1,g)
C.fBS(n,0,854,1,-1,g)
C.fBS(n,480,854,-1,-1,g)
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
B.l_(n,!0,A.dj,new B.rq(p),o,A.d2,1.2,240,r,60,q)}return n},
fzJ(d,e,f,g,h){var w
C.fGN(d,!0,C.fE(g),13,e,f)
C.fGN(d,!0,C.fE(g),9,e,f)
w=B.a([new B.js(e,f-4),new B.js(e+4,f),new B.js(e,f+4),new B.js(e-4,f)],x.J)
B.a34(d,C.fE(h),w)},
kY(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.js(e,v),new B.js(u,f),new B.js(e,t),new B.js(s,f)],x.J)
if(i){B.a34(d,C.fE(h),r)
return}B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,u,v,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,u,e,f,t)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,s,t,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,s,e,f,v)},
foT(d,e,f,g,h,i,j){var w,v=B.a([new B.js(e,f),new B.js(e+g*28,f),new B.js(e,f+h*28)],x.J)
B.a34(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kY(d,v,w,6,j,!0)
C.kY(d,v,w,3,i,!0)},
foU(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z6(v,d,e)
C.tg(v,d)
C.kK(v,18,18,444,818,f,2)
C.kK(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fE(h),28,451,28,34)
C.foT(v,18,18,1,1,g,f)
C.foT(v,462,18,-1,1,g,f)
C.foT(v,18,836,1,-1,g,f)
C.foT(v,462,836,-1,-1,g,f)
return v},
i8B(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cc,0,A.e8,854,v,0,3,v,A.cc,480,!1)
C.z6(r,u,4294240980)
C.tg(r,u)
C.kK(r,10,12,460,830,t,3.2)
C.kK(r,18,20,444,814,s,1.2)
C.kK(r,24,26,432,802,t,1.8)
C.hes(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kY(r,w,16,3,t,!0)
C.kY(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kY(r,16,w,3,t,!0)
C.kY(r,464,w,3,t,!0)}return r},
i8C(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cc,0,A.e8,854,t,0,3,t,A.cc,480,!1)
C.z6(p,s,4294373080)
C.tg(p,s)
C.kK(p,16,18,448,818,r,2.4)
C.kK(p,24,26,432,802,4286209044,1)
w=new C.frm(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hes(p,!1,!0,r,q,q,34,16,18)
return p},
bCR(d,e,f,g,h,i){B.iW(d,!0,C.fE(i),e,e+g,f,f+h)},
bDI(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.l_(d,!1,A.dj,new B.MI(i),null,A.d2,1,e,w,l,l)}},
i9u(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.ap(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l_(d,!1,A.dj,new B.rq(r),null,A.d2,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.ap(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l_(d,!1,A.dj,new B.rq(r),null,A.d2,1,t,t,f,s);++q}},
i9v(d,e){var w,v,u=null,t=B.hn(u,u,A.cc,0,A.e8,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i9u(t,v,w,30,D.d4U,(A.o.ap(v,30)+A.o.ap(w,30)&1)===0)
C.bCR(t,44,44,392,766,d)
C.bDI(t,44,44,392,766,d,e)
C.tg(t,d)
C.kK(t,44,44,392,766,4292128567,2.2)
C.kK(t,50,50,380,754,4279898632,0.8)
return t},
iaF(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kY(d,e,f,7,h,!0)
C.kY(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.6,w,u,v,t)
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l_(d,!0,A.dj,new B.rq(p),o,A.d2,1.2,w,v,q,q)}break
default:B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.5,e-8,e+8,f,f)
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.5,e,e,f-8,f+8)
B.ln(d,!0,A.dj,C.fE(h),o,A.d2,2,e,f)}},
iaG(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cc,0,A.e8,854,s,0,3,s,A.cc,480,!1)
B.iW(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.iaF(r,u,v,w,4292391514)}C.bCR(r,46,46,388,762,d)
C.bDI(r,46,46,388,762,d,e)
C.tg(r,d)
C.kK(r,46,46,388,762,4291404327,1.8)
return r},
hvC(d,e,f,g){C.fGN(d,!0,C.fE(g),16,e,f)
C.fGN(d,!0,C.fE(g),11,e,f)
C.kY(d,e,f,6,g,!0)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e-14,e+14,f,f)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e,e,f-14,f+14)},
i4Y(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cc,0,A.e8,854,v,0,3,v,A.cc,480,!1)
B.iW(s,!0,C.fE(4280948752),0,479,0,853)
B.iW(s,!0,C.fE(u),0,479,0,78)
B.iW(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hvC(s,w,39,t)
C.hvC(s,w,815,t)}C.bCR(s,38,92,404,670,d)
C.bDI(s,38,92,404,670,d,e)
C.tg(s,d)
C.kK(s,38,92,404,670,t,1.8)
C.kK(s,45,99,390,656,4287322667,0.8)
return s},
ia4(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.js(e,f),new B.js(q-5,w),new B.js(q,f-(18-Math.abs(r)*3)),new B.js(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a34(d,new B.rq(o),p)}B.ln(d,!0,A.dj,C.fE(4292128567),null,A.d2,3,e,f)},
ia5(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cc,0,A.e8,854,s,0,3,s,A.cc,480,!1)
C.z6(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l_(q,!0,A.dj,new B.rq(v),s,A.d2,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l_(q,!0,A.dj,new B.rq(u),s,A.d2,1.1,v,v,0,853)}B.iW(q,!0,C.fE(r),0,479,0,70)
B.iW(q,!0,C.fE(r),0,479,798,853)
for(t=0;t<5;++t)C.ia4(q,70+t*85,48,4292128567)
C.bCR(q,48,78,384,712,d)
C.bDI(q,48,78,384,712,d,e)
C.tg(q,d)
C.kK(q,48,78,384,712,4291404327,1.6)
return q},
iet(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cc,0,A.e8,854,t,0,3,t,A.cc,480,!1)
B.iW(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kY(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ln(r,!0,A.dj,new B.rq(u),t,A.d2,1,v,w)}C.bCR(r,40,40,400,774,d)
C.bDI(r,40,40,400,774,d,e)
C.tg(r,d)
C.kK(r,40,40,400,774,4291058750,2)
C.kK(r,48,48,384,758,s,0.8)
return r},
la:function la(d,e){this.a=d
this.b=e},
fRi:function fRi(d){this.a=d},
fRh:function fRh(d){this.a=d},
frm:function frm(d){this.a=d},
fRW(d){var w
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
iay(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hcW(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p5(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Aj.ai4(A.a.aC(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agw(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vR(null,""),$async$agw)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nl(n)
if(e==null)s=A.hY
else{r=C.iay(e)
s=B.a([new B.a1h(A.cP.gcu().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rf(t,d,s,"news",E.GB),$async$agw)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LT(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agw,v)},
bFl(d){return C.inQ(d)},
inQ(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agw(r,null),$async$bFl)
case 7:q=f
p=C.hcW(q)
if(p==null){u=d
w=1
break}o=d.aEQ(p)
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
return B.i($async$bFl,v)},
hzz(d){var w,v=F.hfE(d)
v=B.aL(v,"book","newspaper")
if(F.a3o(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fVV(d,e,f,g){return C.ipJ(d,e,f,g)},
ipJ(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fVV=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fRW(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hDs()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agw('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hzz(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fVV)
case 3:r=m.hcW(i)
if(r==null)throw B.W(y.S)
q=new C.Ad(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEQ(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aM(t," ")
if(F.a3o(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3o(A.d.aM(t," "))==="sw"?C.bFl(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVV,v)},
bEQ(d,e,f,g,h){return C.ilq(d,e,f,g,h)},
ilq(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEQ=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aM(l,"\n")
l=C.hDs()
k=A.Y.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agw('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hzz(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEQ)
case 3:p=j.hcW(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aEQ(B.a3(o,x.N,x.z))
m=A.Y.aw(n.aj(),null)!==A.Y.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3o(A.d.aM(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFl(n),$async$bEQ)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9_(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEQ,v)},
a9_:function a9_(d,e,f){this.a=d
this.b=e
this.c=f},
it8(d,e){return B.a7(d,!1).ca(B.e9(new C.h29(e),!0,null,x.H))},
h29:function h29(d){this.a=d},
WX:function WX(d,e){this.c=d
this.a=e},
aFU:function aFU(d,e,f,g,h,i,j,k){var _=this
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
etC:function etC(d){this.a=d},
etB:function etB(){},
etD:function etD(d){this.a=d},
etA:function etA(d,e){this.a=d
this.b=e},
etE:function etE(){},
ete:function ete(d,e){this.a=d
this.b=e},
eta:function eta(d,e){this.a=d
this.b=e},
etl:function etl(d){this.a=d},
etm:function etm(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
etg:function etg(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
etj:function etj(d){this.a=d},
etk:function etk(d){this.a=d},
etf:function etf(d,e){this.a=d
this.b=e},
etc:function etc(d){this.a=d},
etd:function etd(d){this.a=d},
ett:function ett(d){this.a=d},
etu:function etu(d){this.a=d},
ets:function ets(d){this.a=d},
etv:function etv(d,e){this.a=d
this.b=e},
etr:function etr(d,e){this.a=d
this.b=e},
etw:function etw(d){this.a=d},
etq:function etq(d){this.a=d},
etx:function etx(d){this.a=d},
etp:function etp(d){this.a=d},
ety:function ety(d,e){this.a=d
this.b=e},
eto:function eto(d,e){this.a=d
this.b=e},
etz:function etz(d){this.a=d},
etb:function etb(d,e){this.a=d
this.b=e},
fQS(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fQS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxb){w=1
break}r=new C.fQT()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fQS)
case 7:$.hxb=!0
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
return B.i($async$fQS,v)},
bFc(d){return A.Dn[B.ms(d)-1]+", "+A.oJ[B.bL(d)-1]+" "+B.bU(d)+", "+B.bC(d)},
idA(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dx3[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hg2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fPa(),B.U(v).k("Y<1>")))
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
continue}o=new C.fPc(j,h)
n=new C.fPb(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ap(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j7(o.$1(l)))
j.a+=l}return u},
hcF(d,e){var w=new C.fqW()
return A.d.cF(e,0,new C.fqU(w))>=A.d.cF(d,0,new C.fqV(w))},
huh(d){var w,v,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bv())
return u},
Ad:function Ad(d,e,f,g,h,i,j,k,l,m){var _=this
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
cjE:function cjE(d){this.a=d},
cjC:function cjC(){},
cjD:function cjD(){},
tN:function tN(d,e){this.a=d
this.b=e},
Cb:function Cb(d,e){this.a=d
this.b=e},
lx:function lx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fQT:function fQT(){},
fPa:function fPa(){},
fPc:function fPc(d,e){this.a=d
this.b=e},
fPb:function fPb(d,e,f){this.a=d
this.b=e
this.c=f},
fqW:function fqW(){},
fqX:function fqX(){},
fqU:function fqU(d){this.a=d},
fqV:function fqV(d){this.a=d},
b2Z:function b2Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjF:function cjF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjG:function cjG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjH:function cjH(d){this.a=d},
beF:function beF(d){this.a=d},
beE:function beE(d,e){this.b=d
this.a=e},
bwF:function bwF(d){this.a=d},
bb6:function bb6(d,e){this.b=d
this.a=e},
bu8:function bu8(d,e){this.b=d
this.a=e},
hFx(d,e){return B.a7(d,!1).ca(B.e9(new C.h2c(e,null),!0,null,x.E))},
h2c:function h2c(d,e){this.a=d
this.b=e},
WY:function WY(d,e,f){this.c=d
this.d=e
this.a=f},
aFX:function aFX(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
euo:function euo(){},
eup:function eup(d){this.a=d},
eun:function eun(d,e){this.a=d
this.b=e},
eub:function eub(d){this.a=d},
euc:function euc(d){this.a=d},
eui:function eui(d){this.a=d},
euj:function euj(d,e){this.a=d
this.b=e},
eug:function eug(d){this.a=d},
euh:function euh(d,e,f){this.a=d
this.b=e
this.c=f},
eud:function eud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euk:function euk(d,e){this.a=d
this.b=e},
euf:function euf(d,e){this.a=d
this.b=e},
eul:function eul(d){this.a=d},
eue:function eue(d,e){this.a=d
this.b=e},
eum:function eum(d,e){this.a=d
this.b=e},
bec:function bec(d,e,f){this.b=d
this.c=e
this.a=f},
ite(d){return B.a7(d,!1).ca(B.e9(new C.h2s(),!0,null,x.I))},
bCC(d,e){var w,v,u,t,s,r,q=B.c_(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
he7(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h2s:function h2s(){},
a18:function a18(d){this.a=d},
oU:function oU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHl:function aHl(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aR=_.aL=_.aG=_.a_=_.bb=_.bn=_.y2=0
_.b7=null
_.b6=0.25
_.bf=null
_.bK=0.5
_.aP=1
_.c9=_.bH=_.bm=0
_.cO=_.c6=!1
_.c=_.a=null},
f3h:function f3h(d){this.a=d},
f29:function f29(d,e){this.a=d
this.b=e},
f2x:function f2x(d,e){this.a=d
this.b=e},
f2H:function f2H(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1R:function f1R(d){this.a=d},
f1S:function f1S(d){this.a=d},
f2q:function f2q(d,e){this.a=d
this.b=e},
f2r:function f2r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2D:function f2D(d,e,f){this.a=d
this.b=e
this.c=f},
f2C:function f2C(d,e){this.a=d
this.b=e},
f2E:function f2E(d,e){this.a=d
this.b=e},
f2B:function f2B(d,e){this.a=d
this.b=e},
f2G:function f2G(d,e,f){this.a=d
this.b=e
this.c=f},
f2F:function f2F(d,e){this.a=d
this.b=e},
f1J:function f1J(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1L:function f1L(d){this.a=d},
f1I:function f1I(){},
f1M:function f1M(d,e){this.a=d
this.b=e},
f1H:function f1H(d,e){this.a=d
this.b=e},
f1O:function f1O(){},
f1N:function f1N(d,e){this.a=d
this.b=e},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1D:function f1D(d,e){this.a=d
this.b=e},
f1P:function f1P(d){this.a=d},
f1F:function f1F(d,e){this.a=d
this.b=e},
f1Q:function f1Q(d){this.a=d},
f1E:function f1E(d,e){this.a=d
this.b=e},
f36:function f36(d,e){this.a=d
this.b=e},
f3d:function f3d(d){this.a=d},
f3e:function f3e(d,e){this.a=d
this.b=e},
f3f:function f3f(){},
f37:function f37(d,e){this.a=d
this.b=e},
f35:function f35(d,e){this.a=d
this.b=e},
f38:function f38(d,e){this.a=d
this.b=e},
f34:function f34(d,e){this.a=d
this.b=e},
f39:function f39(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f33:function f33(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3a:function f3a(d){this.a=d},
f3b:function f3b(d,e){this.a=d
this.b=e},
f3c:function f3c(d){this.a=d},
f32:function f32(d){this.a=d},
f2Q:function f2Q(d){this.a=d},
f2R:function f2R(d){this.a=d},
f2P:function f2P(d,e){this.a=d
this.b=e},
f2K:function f2K(d,e){this.a=d
this.b=e},
f2S:function f2S(d){this.a=d},
f2V:function f2V(d){this.a=d},
f2O:function f2O(d){this.a=d},
f2W:function f2W(d){this.a=d},
f2X:function f2X(d){this.a=d},
f2Y:function f2Y(d){this.a=d},
f2Z:function f2Z(d){this.a=d},
f2N:function f2N(d){this.a=d},
f3_:function f3_(d){this.a=d},
f2M:function f2M(d){this.a=d},
f30:function f30(d,e){this.a=d
this.b=e},
f2L:function f2L(d,e){this.a=d
this.b=e},
f31:function f31(d){this.a=d},
f2T:function f2T(d){this.a=d},
f2U:function f2U(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2t:function f2t(d){this.a=d},
f2v:function f2v(d,e){this.a=d
this.b=e},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2w:function f2w(d){this.a=d},
f2m:function f2m(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2n:function f2n(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2o:function f2o(d,e){this.a=d
this.b=e},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2i:function f2i(d,e){this.a=d
this.b=e},
f20:function f20(d){this.a=d},
f21:function f21(d){this.a=d},
f22:function f22(d){this.a=d},
f23:function f23(d){this.a=d},
f24:function f24(d){this.a=d},
f25:function f25(d){this.a=d},
f26:function f26(d){this.a=d},
f27:function f27(d){this.a=d},
f28:function f28(d){this.a=d},
f1m:function f1m(d){this.a=d},
f1n:function f1n(d){this.a=d},
f1o:function f1o(d){this.a=d},
f1p:function f1p(d){this.a=d},
f1q:function f1q(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1r:function f1r(d){this.a=d},
f1s:function f1s(d){this.a=d},
f1V:function f1V(d){this.a=d},
f1W:function f1W(d){this.a=d},
f1X:function f1X(d){this.a=d},
f1Y:function f1Y(d){this.a=d},
f1Z:function f1Z(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1y:function f1y(d){this.a=d},
f1z:function f1z(d){this.a=d},
f1A:function f1A(d){this.a=d},
f1v:function f1v(d){this.a=d},
f1B:function f1B(d){this.a=d},
f1u:function f1u(d){this.a=d},
f1C:function f1C(d){this.a=d},
f1t:function f1t(d){this.a=d},
f2p:function f2p(d){this.a=d},
f2h:function f2h(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2c:function f2c(d){this.a=d},
f2e:function f2e(d,e){this.a=d
this.b=e},
f2b:function f2b(d,e){this.a=d
this.b=e},
f2f:function f2f(d,e){this.a=d
this.b=e},
f2a:function f2a(d,e){this.a=d
this.b=e},
f2g:function f2g(d){this.a=d},
f2A:function f2A(d){this.a=d},
f2z:function f2z(d,e,f){this.a=d
this.b=e
this.c=f},
f2y:function f2y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2J:function f2J(d,e){this.a=d
this.b=e},
f2I:function f2I(d,e){this.a=d
this.b=e},
f2_:function f2_(d){this.a=d},
f3g:function f3g(d){this.a=d},
bhO:function bhO(d,e){this.b=d
this.a=e},
io0(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
io1(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
t=w.a+=A.a.aC(d,v,n)
p=m[r].b
p=A.a.aC(d,n,p.index+p[0].length)
n=B.af("[*~^]",!0,!1,!1,!1)
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
bDc(){var w=$.bCj,v=$.Rr
$.Rr=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,C.bDc(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
om(d,e,f,g){var w=f*9
return C.ii(D.eZ,d-f/2,e-w/32,f,w/16,g,0)},
i6U(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCj
o=$.Rr
$.Rr=o+1
w.push(new C.eP(p+"_"+o,D.fi,0,q,1,0.0016,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCj
o=$.Rr
$.Rr=o+1
w.push(new C.eP(p+"_"+o,D.fi,n,0,0.004,1,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.om(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.om(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bk,0.08,0.08,0.5,0.003,v,0),C.ii(D.bk,0.58,0.08,0.004,0.06,v,0),C.ii(D.bk,0.58,0.14,0.34,0.003,v,0),C.ii(D.bk,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bk,0.08,0.8,0.004,0.14,t,0),C.ii(D.bk,0.08,0.94,0.6,0.003,t,0),C.om(0.58,0.08,0.05,e),C.om(0.92,0.22,0.05,e),C.om(0.08,0.8,0.05,f),C.om(0.68,0.94,0.05,f),C.om(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.lv,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.lv,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.lv,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.lv,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.om(0.5,0.5,1.5,w|335544320),C.om(0.5,0.5,1.15,w|402653184),C.om(0.5,0.5,0.8,v|436207616),C.om(0.95,0.05,0.4,v|855638016),C.om(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.om(0.85,0.08,0.7,w|1140850688),C.om(0.1,0.35,0.5,v|855638016),C.om(0.9,0.62,0.55,v|771751936),C.om(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ii(D.bk,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ii(D.bk,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ii(D.bk,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ii(D.bk,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.om(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.om(0.5,0.2,0.65,(w|3422552064)>>>0),C.om(0.5,0.2,0.95,w|855638016),C.ii(D.bk,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ii(D.bk,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ii(D.kc,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.kc,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.kc,0.15,0.86,0.6,0.14,1712265002,0),C.om(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d6s[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCj
l=$.Rr
$.Rr=l+1
w.push(new C.eP(o+"_"+l,D.fi,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.eZ,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.om(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.kc,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.kc,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.kc,0.65,-0.1,0.3,0.55,v,0.5),C.om(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bk,0.06,0.04,0.88,0.002,e,0),C.ii(D.bk,0.06,0.96,0.88,0.002,e,0),C.ii(D.bk,0.06,0.04,0.004,0.92,e,0),C.ii(D.bk,0.936,0.04,0.004,0.92,e,0),C.ii(D.bk,0.09,0.07,0.82,0.001,w,0),C.ii(D.bk,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.kd,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.kd,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.kd,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bk,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bk,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bk,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bk,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eZ,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eZ,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eZ,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eZ,-0.05,0.9,0.4,0.12,v,-0.9),C.om(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bk,0.09,0.12,0.16,0.006,e,0),C.ii(D.bk,0.05,0.03,0.9,0.001,w,0),C.ii(D.bk,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ikt(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCj=j
$.Rr=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fMz()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_background",m,24,A.bt,A.a8,"",1,C.bDc(),g,"","",0,!1,"",0,D.bk,l,2,"",0,0,"",D.ct,D.lU,1,0,0))
if(a9)A.d.v(q,C.i6U(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.i.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.io0(B.aL(w,p,""))
o=A.a.q(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fMy(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.i.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cH,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bt,A.a8,a1,a3*9/16,C.bDc(),a0,"","",0,!1,a2,0,D.bk,l,2,"",0,0,"",D.ct,D.lU,a3,a4,a5))
return C.rW(s,r,0,0,q,j+"_slide",D.qZ,"","","",D.dm)},
rV:function rV(d,e){this.a=d
this.b=e},
mq:function mq(d,e,f,g,h,i,j,k,l,m){var _=this
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
fMz:function fMz(){},
fMy:function fMy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hXx(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b8(u.a(w.h(d,"extras")),new C.cl9(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ae(u,t,s,B.w(w==null?"":w))},
fUh(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fUh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxy){w=1
break}$.hxy=!0
t=4
w=7
return B.b(B.az(),$async$fUh)
case 7:r=e
q=B.aS(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.hT(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gR(h)
l=C.hXx(m)
if(l!=null)J.c5(n,l)}$.Dn.c4(0,B.w(o.a),new C.fUi(n))}C.hdM()
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
return B.i($async$fUh,v)},
hdM(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dr($.Dn,$.Dn.r,$.Dn.e);w.C();)J.nR(w.d,new C.fz_(v))
$.Dn.bt($.Dn,new C.fz0())},
aQ1(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQ1=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aQ1)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.ch($.Dn,B.a4($.Dn).k("ch<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gR(h)
g=o
J.c5(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aB("String","ngmy_slides_ai_history_v1",A.Y.aw(n,null)),$async$aQ1)
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
return B.i($async$aQ1,v)},
ioE(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hdM()
w=$.Dn.c4(0,d,new C.fUk())
v=Date.now()
u=B.C(e,B.a4(e).k("cj.E"))
J.pX(w,0,new C.Ae(new B.V(v,0,!1),f,u,g))
C.aQ1()},
ioB(d){var w,v=$.Dn.h(0,d)
if(v==null||J.cq(v))return
w=J.cC(v)
w.cB(v,0)
if(w.gau(v))$.Dn.W(0,d)
C.aQ1()},
Ae:function Ae(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl9:function cl9(){},
fUi:function fUi(d){this.a=d},
fz_:function fz_(d){this.a=d},
fz0:function fz0(){},
fUk:function fUk(){},
ioG(d){return A.d.dP(D.wV,new C.fUn(d),new C.fUo())},
hXv(d){var w
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
hXu(d){var w
switch(d.a){case 0:w=D.apv
break
case 1:w=A.zi
break
case 2:w=A.PQ
break
case 3:w=I.apa
break
case 4:w=A.aq2
break
case 5:w=A.mm
break
default:w=null}return w},
iaa(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RW[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RW[w]
if(!B.cQ(v.toLowerCase(),t,0))u=B.cQ(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hXw(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Y.aw(B.I(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ioC(d,e,f,g,h){var w=new B.N(D.wV,new C.fUg(),x.eC).aM(0,", "),v=""+d,u=C.hDk(h),t=F.fNY(h),s=C.hzd(g),r=e.q(0,D.Jn)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jo)?'- New slides get an "icon3d" from: '+A.d.aM(D.RW,", ")+".\n":"",p=e.q(0,D.DY)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ioD(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wV,new C.fUj(),x.eC).aM(0,", "),p=new B.fd("")
if(e.q(0,D.Jn)){p.a=s
w=s}else w=""
if(e.q(0,D.Jo))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aM(D.RW,", ")+".\n")
if(e.q(0,D.DY))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hDk(d)
v=F.fNY(d)
u=C.hzd(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aik(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DM(a3,"{"),a5=J.h5O(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Md(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cq(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b8(p.a(J.t(t,a2)),new C.fSe(),m).bY(0,new C.fSf())
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
f=C.iaa(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a97(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.aV(D.wV,new C.fSg(r))?r:a7
o=C.fyf(J.t(w,"logo_frame"),D.Dj)
n=C.fyf(J.t(w,"logo_ring"),D.Dc)
m=C.fyf(J.t(w,"photo_frame"),D.Dj)
l=C.fyf(J.t(w,"photo_ring"),D.Dc)
return new C.asQ(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2V(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hCr(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DZ),f7=f6?C.i3i():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e1()
v.cY(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o9("luxe",u.a,A.mm,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dm)
w=s}if(w==null)w=C.ioG(f9.b)
r=g2.q(0,D.a82)||f6
q=g2.q(0,D.Jn)
p=g2.q(0,D.TU)
o=new C.fMD()
n=B.a([],x.g)
m=new C.fMG(o,w,r)
l=new C.fMF(o,r)
k=new C.fME(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.aV(u,new C.fMC(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d87[b8]
c0=D.d6Z[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.faT.q(0,b2.a)){c7=b0+1
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
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r_,500,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TR
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eZ,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lv,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bk,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DW
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eZ,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.na,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cH,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r_,500,f2,f0))
d3=D.n9
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eZ,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bk,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vf:D.ct
c1.push(new C.eP(b4,D.a80,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bt,A.aG,4279310375,A.bn,e4,D.bk,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n9
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eZ,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.na,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r_,450,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TR
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eZ,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eZ,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bk,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bk,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aM(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jl,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n9}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dm,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i4X(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dzw[A.o.F(b1,6)]:s
n.push(new C.m0(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cp(e4,e4,e4,e4,D.DV,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aC(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fP0(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fP0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DY)
n=e.q(0,D.Jo)
if(!o&&!n){u=D.a6Y
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fP3(o,s[r],n,$.i8S,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fP0)
case 3:q=m.aU(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fP0,v)},
fO0(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fO0=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ioD(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPk(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fO0)
case 3:u=s.aPG(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fO0,v)},
bER(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bER=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.ioE(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aik(i,"colorful")
t=C.ioC(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPk(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hY),$async$bER)
case 3:u=o.aPG(m,f,h,g,D.edm,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bER,v)},
aPk(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPk=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vR(null,""),$async$aPk)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nl(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rf(t,d,g,"slides",null),$async$aPk)
case 7:q=i
p=q.b
if(p!=null){o=C.aik(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LT(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPk,v)},
aPG(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPG=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DY)||e.q(0,D.Jo)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DY)}w=6
return B.b(C.fP0(d,t),$async$aPG)
case 6:s=k
w=4
break
case 5:s=D.a6Y
case 4:t=d.c
w=A.d.aV(t,new C.fqQ())?7:9
break
case 7:r=$.hEc
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aPG)
case 10:q=k
p=q!=null?A.Y.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hCr(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hXw(new C.asQ(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fqR(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k7<cj.E,n>")
t=B.C(new B.k7(e,new C.fqS(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TU)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPG,v)},
hgM(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5H[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
itj(d){return B.bT(A.L,null,new C.h2E(),d,!0,!0,!0,null,!1,!1,x.I)},
i3W(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcu().aN(d)},
iti(d,e,f){return B.bT(A.L,null,new C.h2D(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hgN(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hgO(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fyf(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fyg(w))?w:""},
hzd(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hEa(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aik(a1==null?"":a1,a0),a3=C.aik(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nA(new B.Y(r,new C.fUp(t[p]),q))
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
g=B.C(new B.Y(k,new C.fUq(),v),r)
A.d.aZ(g,new C.fUr())
if(g.length===0)continue
f=new C.fUs(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ioX(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aL5
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eff
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.efg
return null},
hyQ(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.i.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.i.cL(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ioH(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oO
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cW)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.i.D(m*0.85,10,120)
break
case 1:j=A.i.D(m*1.15,10,120)
if(C.hyQ(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hyQ(n,i,v,u))if(n.w>10){f=h+1
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
ioF(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aik(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5H[r]
if(q.b===s)w.J(0,q)}}v=C.hgN(e)
u=C.hgO(e)
p=C.hCr(n,D.a6Y,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fUl(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k7<cj.E,n>")
o=B.C(new B.k7(w,new C.fUm(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TU)
return p},
it5(d,e,f){return B.bT(A.L,null,new C.h1R(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i3i(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e1()
s.cY(t)
w=D.cM6[s.az(10)]
v=new C.eq2(s)
u=x.N
return new C.eq1(w,s.az(4),J.fs(v.$1$2(D.dcZ,1,x.ff)),w.r[s.az(3)],v.$1$2(D.duH,2+s.az(2),u),v.$1$2(D.dn8,2,u),v.$1$2(D.dxX,4,x.fP),t)},
i4X(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e1()
a1.cY(a5.w+a3*13)
w=new C.fmY(a4)
v=new C.fn_(a4,d)
u=new C.fmZ(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cW){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c3(a2,0,w.$8(D.eZ,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a2V(a0,52),"lux_spot",a5.xc(0,"spotlight")))
else A.d.c3(a2,0,w.$8(D.bk,0,0,1,1,0,"lux_back",a5.xc(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c3(a2,1,w.$8(D.bk,0,0,1,1,0,"lux_back2",a5.aHp(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.022,0.038,0.956,0.924,0,g,a5.xc(0,f),D.dm,150,C.a2V(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.018,0.032,0.964,0.936,0,g,a5.xc(0,f),D.dm,120,C.a2V(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dm,260,C.a2V(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bk,0,0,1,1,0,"lux_filigree",a5.xc(0,"filigree"),D.dm,200))
break
default:a2.push(w.$10$anim$delay(D.bk,0.08,0.06,0.84,0.004,C.a2V(a0,208),"lux_rule",a5.aHp(0,"shimmer",r),D.ve,150))
a2.push(w.$10$anim$delay(D.bk,0.08,0.936,0.84,0.004,C.a2V(a0,144),"lux_rule2","",D.Jl,220))}l=!A.d.aV(a2,new C.fmX())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xc(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xc(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2V(r,242)
j=a5.xc(0,"orbit")
i=s===D.bk?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r_,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eZ,t-0.007,0.9495,0.014,0.025,C.a2V(r,242),"lux_g2",a5.xc(0,"orbit"),D.r_,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bk,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bk,0,0,1,1,0,"lux_velvet",a5.xc(0,"velvet")))},
o9:function o9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fUn:function fUn(d){this.a=d},
fUo:function fUo(){},
ww:function ww(d,e){this.a=d
this.b=e},
a97:function a97(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asQ:function asQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fUg:function fUg(){},
fUj:function fUj(){},
fSe:function fSe(){},
fSf:function fSf(){},
fSg:function fSg(d){this.a=d},
fMD:function fMD(){},
fMG:function fMG(d,e,f){this.a=d
this.b=e
this.c=f},
fMF:function fMF(d,e){this.a=d
this.b=e},
fME:function fME(d,e){this.a=d
this.b=e},
fMC:function fMC(d){this.a=d},
fP3:function fP3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fP1:function fP1(d){this.a=d},
fP2:function fP2(d){this.a=d},
fqQ:function fqQ(){},
fqR:function fqR(){},
fqS:function fqS(){},
h2E:function h2E(){},
a1F:function a1F(d){this.a=d},
aJh:function aJh(d,e,f,g,h){var _=this
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
f9E:function f9E(d,e,f){this.a=d
this.b=e
this.c=f},
f9F:function f9F(d,e){this.a=d
this.b=e},
f9C:function f9C(d,e){this.a=d
this.b=e},
f9D:function f9D(d,e){this.a=d
this.b=e},
f9B:function f9B(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f9w:function f9w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9A:function f9A(d,e){this.a=d
this.b=e},
f9v:function f9v(d,e){this.a=d
this.b=e},
f9z:function f9z(d,e){this.a=d
this.b=e},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9x:function f9x(d){this.a=d},
f9y:function f9y(d,e){this.a=d
this.b=e},
f9k:function f9k(d,e){this.a=d
this.b=e},
f9l:function f9l(d,e){this.a=d
this.b=e},
f9n:function f9n(d){this.a=d},
f9o:function f9o(d){this.a=d},
f9p:function f9p(d){this.a=d},
f9q:function f9q(d){this.a=d},
f9m:function f9m(d,e){this.a=d
this.b=e},
f9r:function f9r(d,e){this.a=d
this.b=e},
f9S:function f9S(d){this.a=d},
f9T:function f9T(d){this.a=d},
f9R:function f9R(d){this.a=d},
f9U:function f9U(d){this.a=d},
f9Q:function f9Q(d){this.a=d},
f9W:function f9W(d){this.a=d},
f9P:function f9P(d,e){this.a=d
this.b=e},
f9X:function f9X(d){this.a=d},
f9O:function f9O(d,e){this.a=d
this.b=e},
f9Y:function f9Y(d){this.a=d},
f9N:function f9N(d){this.a=d},
f9Z:function f9Z(d){this.a=d},
f9M:function f9M(d,e){this.a=d
this.b=e},
fa_:function fa_(d){this.a=d},
f9L:function f9L(d,e){this.a=d
this.b=e},
fa0:function fa0(d){this.a=d},
f9K:function f9K(d){this.a=d},
fa1:function fa1(d,e){this.a=d
this.b=e},
f9J:function f9J(d,e){this.a=d
this.b=e},
fa2:function fa2(d){this.a=d},
f9V:function f9V(d){this.a=d},
f9I:function f9I(d,e){this.a=d
this.b=e},
f9s:function f9s(d,e,f){this.a=d
this.b=e
this.c=f},
f9t:function f9t(d,e,f){this.a=d
this.b=e
this.c=f},
f9H:function f9H(d,e){this.a=d
this.b=e},
f9G:function f9G(d,e){this.a=d
this.b=e},
h2D:function h2D(d,e){this.a=d
this.b=e},
a1E:function a1E(d,e,f){this.c=d
this.d=e
this.a=f},
aJg:function aJg(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f9d:function f9d(d){this.a=d},
f9e:function f9e(d){this.a=d},
f9f:function f9f(d,e){this.a=d
this.b=e},
f9g:function f9g(d){this.a=d},
f9h:function f9h(d){this.a=d},
f9c:function f9c(d,e){this.a=d
this.b=e},
f9i:function f9i(d,e){this.a=d
this.b=e},
f9j:function f9j(d,e){this.a=d
this.b=e},
fyg:function fyg(d){this.a=d},
b3n:function b3n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFO:function aFO(d,e,f){this.c=d
this.d=e
this.a=f},
bmA:function bmA(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
eq4:function eq4(d){this.a=d},
eq3:function eq3(){},
bk6:function bk6(d,e){this.b=d
this.a=e},
fUp:function fUp(d){this.a=d},
fUq:function fUq(){},
fUr:function fUr(){},
fUs:function fUs(d){this.a=d},
atn:function atn(d,e){this.a=d
this.b=e},
fUl:function fUl(){},
fUm:function fUm(){},
h1R:function h1R(d,e){this.a=d
this.b=e},
a01:function a01(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dt9:function dt9(d){this.a=d},
dta:function dta(d){this.a=d},
dtb:function dtb(d,e){this.a=d
this.b=e},
dte:function dte(d){this.a=d},
dtf:function dtf(d,e){this.a=d
this.b=e},
dtd:function dtd(d,e){this.a=d
this.b=e},
dtg:function dtg(d){this.a=d},
dtc:function dtc(d,e){this.a=d
this.b=e},
bvg:function bvg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eq1:function eq1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eq2:function eq2(d){this.a=d},
fmY:function fmY(d){this.a=d},
fn_:function fn_(d,e){this.a=d
this.b=e},
fmZ:function fmZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmX:function fmX(){},
aNU:function aNU(){},
hfB(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wp(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b3j:function b3j(d,e,f){this.c=d
this.d=e
this.a=f},
boa:function boa(d,e){this.c=d
this.a=e},
ikX(d){return A.d.dP(D.Ir,new C.fNK(d),new C.fNL())},
ikY(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Ir,new C.fNM(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jY("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lu:function lu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNK:function fNK(d){this.a=d},
fNL:function fNL(){},
fNM:function fNM(d){this.a=d},
nb(d,e,f,g,h){return new C.Ft(f,g,d)},
i6l(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fpc(),v),v.k("M.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.Lh
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c3(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
hCe(d,e){var w
C.i6l(d)
w=A.d.dP($.bGQ(),new C.fLA(e),new C.fLB())
$.Lh=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lh=""}d.z=B.bq(d.z,!0,x.F)},
Ft:function Ft(d,e,f){this.a=d
this.b=e
this.e=f},
fpc:function fpc(){},
fTS:function fTS(){},
fTT:function fTT(){},
fTU:function fTU(){},
fU4:function fU4(){},
fU9:function fU9(){},
fUa:function fUa(){},
fUb:function fUb(){},
fUc:function fUc(){},
fUd:function fUd(){},
fUe:function fUe(){},
fUf:function fUf(){},
fTV:function fTV(){},
fTW:function fTW(){},
fTX:function fTX(){},
fTY:function fTY(){},
fTZ:function fTZ(){},
fU_:function fU_(){},
fU0:function fU0(){},
fU1:function fU1(){},
fU2:function fU2(){},
fU3:function fU3(){},
fU5:function fU5(){},
fU6:function fU6(){},
fU7:function fU7(){},
fU8:function fU8(){},
fLA:function fLA(d){this.a=d},
fLB:function fLB(){},
j5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bk,4280172719,2,m,n,0,"",o,D.cW,p,q,r)},
DE(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
bFA(){var w=new B.V(Date.now(),0,!1)
return A.iO[B.bL(w)-1]+" "+B.bU(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bCX(d){return new B.j0((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
ibU(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.aoi(A.cI.aN(A.d.gan(d.split(","))))
return w}catch(v){return null}},
ibY(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fxz(),x.dv).aM(0,"\n")},
ibX(d){switch(d.a){case 2:return A.nV
case 1:case 5:return A.fmh
default:return A.Vh}},
ibR(d){switch(d.a){case 2:return A.vO
case 1:case 5:return A.Xg
default:return A.adl}},
ibV(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bCX(u),q=(s&255)===0?v:C.bCX(d.ch),p=A.i.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nT(q,p,A.la)
w=new B.pZ(t,t,t,t)}switch(d.ax.a){case 1:return B.lQ(v,v,v,new B.kQ(r,w,v,A.aeE,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xC(B.lQ(v,v,q,v,p+0.4,v,v,v))
default:return B.lQ(v,v,v,new B.kQ(r,w,B.vZ(4),A.i1,v),v,v,v,v)}},
ibT(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fi?0.4:12,g=A.i.D(d.e*e,h,e),f=A.i.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.ibR(d.as)
v=A.i.D(d.w*(e/960),3,96)
u=C.ibY(d)
t=C.bCX(d.Q)
s=d.x.a>=700?A.eB:A.wq
r=d.y===A.cH?A.yZ:A.anV
q=d.z
p=new B.DQ(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aUC:A.aUB,l,l,l,l,l,l,A.dD,l,l,v,r,s,l,!0,l,l,l,l),C.ibX(d.as)))
break
case 1:case 4:o=C.ibU(d.at)
n=i===D.lU&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xC(B.fc(w,l,l,l,B.ha(l,A.tq,l,l,l,l,l,l,l,A.dD,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IL(o,n?A.aeA:A.XF,l,l)
break
case 3:w=new B.nT(A.JI,1,A.la)
u=B.vZ(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lQ(A.vO,B.fc(t,l,l,l,B.ha(l,D.etS,l,l,l,l,l,l,l,A.dD,l,l,11,l,A.eB,l,!0,l,l,l,l),A.nV),l,new B.kQ(E.aMx,new B.pZ(w,w,w,w),u,A.i1,l),l,l,l,l)
break
case 2:p=C.ibV(d,e)
break
case 5:p=C.ibS(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.htw(-w,p)
w=i===D.cW
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.auc(m/255,p)}if(w)return new F.wC(k,l,j,l,new B.Tt(new B.kP(g,g,f,1/0),p))
if(i===D.lu){i=new B.nT(A.JI,1,A.la)
i=B.lQ(A.vO,p,l,new B.kQ(A.pJ,new B.pZ(i,i,i,i),B.vZ(4),A.i1,l),l,l,D.bGu,l)}else i=p
return new F.wC(k,l,j,l,new B.fV(g,f,i))},
ibW(d,e,f,g){var w,v=null,u=C.bCX(d.e),t=d.f
t=B.a([F.hs6(t!=null?B.lQ(v,v,v,new B.kQ(v,v,v,A.i1,new B.aYQ(E.Xi,A.adg,B.a([u,C.bCX(t)],x.cR),v)),v,v,v,v):B.lQ(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fxy(f,g),B.U(w).k("N<1,fi>")))
return F.cAu(t)},
hgQ(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hgQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5m(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XJ(A.x3,A.JF,D.bHH,null,null,null,!1,null)
o=new B.Cu(o,new C.fUy(607,787,p,d))
o.Ng(n,null)
r.push(o)}u=n.hL(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgQ,v)},
ibS(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hfB(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gald()
if(h==null)h=A.aBK
j=B.u_(4279308564)
w=B.vZ(18)
v=new B.nT(B.u_(4287531653),3,A.la)
u=i.length===0?"My links":i
u=B.a([B.xC(B.fc(u,m,m,m,B.ha(m,A.pJ,m,m,m,m,m,m,m,A.dD,m,m,12,m,A.eB,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xC(B.fc(A.a.i(l.c),m,m,m,D.ftZ,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dB(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bP(t,t.gI(0),s.k("bP<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u_(4280690220)
o=new B.aar(8,8)
n=A.a.i(r.b)
u.push(new B.oa(D.bAx,new C.ayx(new C.ajt(q),B.lQ(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fwo,A.nV),m,new B.kQ(p,m,new B.ajW(o,o,o,o),A.i1,m),m,m,D.bGX,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xC(B.fc(k,m,m,m,D.fvC,m))
u.push(new C.ayx(C.hLi(k),t))}return B.lQ(m,B.zw(u,A.NC,A.lT),m,new B.kQ(j,new B.pZ(v,v,v,v),w,A.i1,m),m,m,D.bBo,m)},
fxz:function fxz(){},
fxy:function fxy(d,e){this.a=d
this.b=e},
fUy:function fUy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ai7(d){var w,v
for(w=0;w<32;++w){v=D.Ii[w]
if(v.a===d)return v}return null},
hw9(d){var w,v,u=A.a.co(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aN(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hFt(d,e){return B.a7(d,!1).ca(B.e9(new C.h0g(e),!0,null,x.fB))},
hFs(d,e){return B.bT(A.L,null,new C.h0f(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fk:function Fk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ol:function Ol(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blW:function blW(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.a9$=f
_.c=_.a=null},
e3x:function e3x(d){this.a=d},
e3w:function e3w(d,e,f){this.a=d
this.b=e
this.c=f},
e3v:function e3v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btN:function btN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8q:function f8q(d,e){this.a=d
this.b=e},
bgT:function bgT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1d:function b1d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfA:function cfA(){},
cfB:function cfB(d){this.a=d},
cfC:function cfC(d,e,f){this.a=d
this.b=e
this.c=f},
cfD:function cfD(d,e,f){this.a=d
this.b=e
this.c=f},
h0g:function h0g(d){this.a=d},
a_z:function a_z(d,e){this.c=d
this.a=e},
aBF:function aBF(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dil:function dil(d,e,f){this.a=d
this.b=e
this.c=f},
diq:function diq(d){this.a=d},
dir:function dir(d){this.a=d},
dip:function dip(d){this.a=d},
dis:function dis(d){this.a=d},
dio:function dio(d,e){this.a=d
this.b=e},
dit:function dit(d){this.a=d},
din:function din(d){this.a=d},
diu:function diu(d){this.a=d},
dim:function dim(d,e){this.a=d
this.b=e},
div:function div(d,e){this.a=d
this.b=e},
h0f:function h0f(d){this.a=d},
h0e:function h0e(d){this.a=d},
h0d:function h0d(d,e,f){this.a=d
this.b=e
this.c=f},
h0c:function h0c(d,e){this.a=d
this.b=e},
aNo:function aNo(){},
ith(d){return B.bT(A.L,null,new C.h2C(),d,!0,!0,!0,null,!1,!1,x.N)},
h2C:function h2C(){},
a_U:function a_U(d){this.a=d},
bip:function bip(d){this.d=d
this.c=this.a=null},
dp9:function dp9(d){this.a=d},
dpa:function dpa(d,e){this.a=d
this.b=e},
dpb:function dpb(d){this.a=d},
i83(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.yn},
imS(d){var w=7000
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
imR(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i83(d)
switch(q){case"shimmer":return B.oe(A.LP,g,new C.fRb(p,A.i.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bhK(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.da(F.bXb(g,new B.Er(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bhr(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.i.D(0.55+s*0.45,0,1)
return B.da(B.eM(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.ds()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n_(Math.sin(e)*0.3)
return B.dP(B.fx(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dy(!0,B.b4(r,r,r,new C.bqw(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dy(!0,B.b4(r,r,r,new C.bcf(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dy(!0,B.b4(r,r,r,new C.bbT(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bxD(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.buB(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.btJ(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dy(!0,B.b4(r,r,r,new C.bgM(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bR(0,new B.dy(!0,B.ed(A.A,B.c3(r,new B.p(r,r,r,r,r,new B.c0(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bj),1.6+s*0.15,r,r),r),0,0,0),B.eM(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fRb:function fRb(d,e){this.a=d
this.b=e},
bhK:function bhK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhr:function bhr(d,e,f){this.b=d
this.c=e
this.a=f},
bqw:function bqw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcf:function bcf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbT:function bbT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxD:function bxD(d,e,f){this.b=d
this.c=e
this.a=f},
buB:function buB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btJ:function btJ(d,e,f){this.b=d
this.c=e
this.a=f},
bgM:function bgM(d,e,f){this.b=d
this.d=e
this.a=f},
di2:function di2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yc:function yc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fRe(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lu},
imX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fRf())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aSq(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
imW(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d1(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d1(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.i.D(s,0.06,u)}else{d.w=A.i.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.i.D(r*(d.w*0.001)+0.028,0.06,u)},
ahL(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahL=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fJA(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dT,null,new C.fJB(e),d,!0,!0,!1,A.lV,!1,!1,x.N),$async$ahL)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hhx(d),$async$ahL)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.M4(d,"Search states\u2026","",A.kw,"Choose state"),$async$ahL)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hgn(s)
if(p==null)p=A.d.gH(D.SM)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fRg(p.d)
k=x.u
j=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dq(i,0.016,D.lv,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dq(0,0.058,D.eZ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dq(0,0.058,D.eZ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ls("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ls("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hd2(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCq("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2x("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2x("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2x("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2x("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCq("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dq(m,0.082,D.bk,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bn,!1,i,A.aG,"marriage_field_utangulizi:"+A.i.ac(0.78,3),4280640491,9.5,A.bt,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bk,4280172719,2,y.O,0,0,"",D.ct,D.cW,0.78,0.11,0.388))
A.d.v(k,C.hd2(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCq("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hyf("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hyf("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2x("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2x("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bCp("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bCp("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCq("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ls("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ls("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bCp("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bCp("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCq("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2x("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bCp("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2x("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hd2(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ls("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ls("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cp(null,null,null,null,D.oO,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rW(m,null,0,0,j,n,D.qZ,"","","Hati ya Ndoa",D.dm)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahL,v)},
fRf:function fRf(){},
fJA:function fJA(){},
fJB:function fJB(d){this.a=d},
fJy:function fJy(d){this.a=d},
fJz:function fJz(d){this.a=d},
ibi(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
ibh(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ne
case"lineThrough":return A.xe
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hAj(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Sv[w]
if(v.b===u)return v}return D.dm},
i7r(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d3w[w]
if(v.b===u)return v}return D.cW},
ie6(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dvt[w]
if(v.b===u)return v}return D.bk},
rW(d,e,f,g,h,i,j,k,l,m,n){return new C.m0(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hqS(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i9z(d.h(0,"layout"))
t=B.aH(d.h(0,"background"))
t=t==null?m:A.i.L(t)
if(t==null)t=4294967295
s=B.aH(d.h(0,"backgroundEnd"))
s=s==null?m:A.i.L(s)
r=C.hAj(d.h(0,"transition"))
q=B.aH(d.h(0,"durationSeconds"))
q=q==null?m:A.i.L(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aH(d.h(0,"designRevision"))
o=o==null?m:A.i.L(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cE(n,new C.cl6(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rW(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i9z(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.atl[w]
if(v.b===u)return v}return D.n9},
Cp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rW(4294967295,null,0,0,null,C.cD(),D.qZ,"","","",D.dm)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
X6(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i5i(a6.h(0,"aspectRatio"))
t=B.aH(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.i.L(t),1,120)
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
o=C.kM(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kM(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aH(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aH(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.i.L(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b8(f,new C.ckU(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b8(e,new C.ckV(),x.N)
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
g=B.cE(g,new C.ckW(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cp(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rW(4294967295,a3,0,0,a3,C.cD(),D.qZ,"","","",D.dm)],x.g):g,v,p,o,s)},
kM(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i5i(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dwk[w]
if(v.b===u)return v}return D.DV},
cD(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
cln(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.DW){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bt,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bt,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bk,m,2,"Click to add subtitle",0,0,"",D.ct,D.cW,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,32,A.bt,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!0,f.e.l(),A.aG,"",n,20,A.bt,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bk,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ct,D.cW,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Two Column Slide",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bk,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ct,D.cW,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bk,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ct,D.cW,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bt,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bk,m,2,"Section Header",0,0,"",D.ct,D.cW,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Compare",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bn,!1,l,A.aG,"",t.j(0.12).l(),24,A.bt,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bk,t.l(),2,"",0,0,"",D.ct,D.fi,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bk,m,2,"Option A",0,0,"",D.ct,D.cW,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bn,!1,l,A.aG,"",t.j(0.06).l(),24,A.bt,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bk,t.j(0.5).l(),2,"",0,0,"",D.ct,D.fi,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bk,m,2,"Option B",0,0,"",D.ct,D.cW,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bt,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bk,m,2,"TERM / QUESTION",0,0,"",D.ct,D.cW,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bt,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bk,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ct,D.cW,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,28,A.bt,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bk,m,2,"Quiz Question",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,20,A.bt,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bk,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ct,D.cW,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,26,A.bt,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bk,m,2,"Worksheet / Assignment",0,0,"",D.ct,D.cW,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,18,A.bt,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bk,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ct,D.cW,0.88,0.06,0.16)],x.u))
break}},
hXG(d){return A.d.dP(D.a5j,new C.clo(d),new C.clp())},
hXD(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c5(v,C.X6(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h9i(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.clj(t)
for(w=J.aU(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b7<2>")
u=B.C(new B.b7(t,w),w.k("M.E"))
A.d.aZ(u,new C.cli())
return u},
hqV(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cle()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asR(d){return C.hXB(d)},
hXB(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.clh()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3I(m),$async$asR)
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
return B.b(B.az(),$async$asR)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aS(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hqU.h(0,m))
n=C.h9i(C.h9i(j,r),o)
if(n.length===0){u=C.hqV(C.hqV(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asR,v)},
cld(d){return C.hXA(d)},
hXA(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cld=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cld)
case 7:r=f
q=r.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jz(q,B.U(q).c)
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
return B.i($async$cld,v)},
b3p(d,e){return C.hXC(d,e)},
hXC(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3p=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b3p)
case 6:s=g
q=s.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mc(r,J.ad(r)-500):r
w=7
return B.b(s.aB("StringList","ngmy_slides_deleted_"+p,o),$async$b3p)
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
return B.i($async$b3p,v)},
X7(d,e){return C.hXE(d,e)},
hXE(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$X7=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hqT.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asR(a3),$async$X7)
case 5:p=a6
case 4:w=6
return B.b(C.cld(a3),$async$X7)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbs())k=f===g.gbs()&&k.b>g.gcG()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b7<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b7(n,m),new C.clk(o),l),l.k("M.E"))
A.d.aZ(e,new C.cll())
$.hqT.n(0,a0,e)
n=B.U(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.clm(),n),n.k("ak.E"))
r=A.Y.aw(n,null)
$.hqU.n(0,a0,r)
t=8
w=11
return B.b(B.aiz(a0,r),$async$X7)
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
return B.b(B.az(),$async$X7)
case 16:q=a6
w=17
return B.b(q.aB("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$X7)
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
return B.i($async$X7,v)},
JF:function JF(d,e){this.a=d
this.b=e},
asP:function asP(d,e){this.a=d
this.b=e},
vf:function vf(d,e){this.a=d
this.b=e},
mT:function mT(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eP:function eP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m0:function m0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cl7:function cl7(){},
cl8:function cl8(){},
cl6:function cl6(){},
i4:function i4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ckX:function ckX(){},
ckY:function ckY(){},
ckU:function ckU(){},
ckV:function ckV(){},
ckW:function ckW(){},
jY:function jY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
clo:function clo(d){this.a=d},
clp:function clp(){},
clj:function clj(d){this.a=d},
cli:function cli(){},
cle:function cle(){},
clf:function clf(){},
clg:function clg(){},
clh:function clh(){},
clk:function clk(d){this.a=d},
cll:function cll(){},
clm:function clm(){},
in7(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fRO(e,v,d,B.aR(w))
w.$1(new C.fRK())
w.$1(new C.fRL())
w.$1(new C.fRM())
w.$1(new C.fRN())
return v},
fRO:function fRO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRK:function fRK(){},
fRL:function fRL(){},
fRM:function fRM(){},
fRN:function fRN(){},
b3m:function b3m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cl2:function cl2(d){this.a=d},
cl1:function cl1(){},
cl3:function cl3(){},
cl4:function cl4(d,e){this.a=d
this.b=e},
cl5:function cl5(d){this.a=d},
apR:function apR(d,e){this.c=d
this.a=e},
blG:function blG(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dQG:function dQG(){},
aN9:function aN9(){},
cla(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cla=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.M(x.q).f.U(D.fjq)
u=!1
w=1
break}u=B.lc(!1,d,t,!1,null,A.a84,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cla,v)},
hXy(d){var w=A.d.bj(D.Ir,new C.clb(d))
if(w<0)return!0
return w>=4},
hXz(d){var w=A.d.bj($.bGQ(),new C.clc(d))
if(w<0)return!0
return w>=5},
clb:function clb(d){this.a=d},
clc:function clc(d){this.a=d},
ioR(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xr()
$.pU().pc(t,new C.fUF(s),!0)
u=B.a([B.BZ(v,A.pK,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ap(v,B.q(v,B.d(e,v,v,v,v,v,v,D.fur,v,v,v),A.f,v,v,new B.p(A.aU,v,v,w,v,v,A.n),v,v,v,v,A.n1,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fUF:function fUF(d){this.a=d},
ios(){return C.hgJ()},
ill(){return C.bEO()},
inq(){return C.hgA()},
aRr(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRr=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fTL(d,f),$async$aRr)
case 5:w=1
break
case 4:if(d.e!=null)d.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRr,v)},
fTL(d,e){var w=0,v=B.j(x.H),u
var $async$fTL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCY
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fTM(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fTL)
case 2:return B.h(null,v)}})
return B.i($async$fTL,v)},
fTM:function fTM(d,e){this.a=d
this.b=e},
aex:function aex(d,e,f){this.c=d
this.d=e
this.a=f},
eCo:function eCo(d,e){this.a=d
this.b=e},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCr:function eCr(d){this.a=d},
aeO:function aeO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3l(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3k(g,m,f,d,e,h,l,k,j,o,i,null)},
hDz(d){return B.ct(new C.fRJ(d))},
hgL(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ioA(d){if(d===D.ct)return"None"
return C.hgL(d)},
bDt(d,e,f,g){return C.ied(d,e,f,g)},
ied(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDt=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a7(d,!0)
if($.hdl&&t.pX())t.eO()
$.hdl=!0
s.a=null
w=3
return B.b(B.i0(A.bo,!0,"Animation preview",d,new C.fAi(s,e,g,f),null,A.eH,!0,x.H),$async$bDt)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hdl=!1
case 1:return B.h(u,v)}})
return B.i($async$bDt,v)},
h3q(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h3q=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aI(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hgL(f)+" Slide transition preview"
s=s?Ag.GF:A.rN
w=3
return B.b(C.bDt(d,s,new B.a6(t,t*0.56,B.by(B.m(14),new C.aKG(f,null),A.aq),null),r),$async$h3q)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h3q,v)},
hCR(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.i.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dP(B.da(f,t),new B.o((1-t)*48,0))
case 3:return B.dP(B.da(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dP(B.da(f,t),new B.o(0,(1-t)*36))
case 5:return B.dP(B.da(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.da(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.da(f,t),1.4-t*0.4,u,u)
case 8:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 9:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 10:case 19:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n_((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.da(f,t),new B.o((1-t)*24,0))}},
bGk(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aI(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hgL(f)+" Element animation preview"
s=s?Ag.GF:A.rN
w=3
return B.b(C.bDt(d,s,new B.a6(t,t*0.62,B.by(B.m(14),new C.aBk(f,null),A.aq),null),r),$async$bGk)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGk,v)},
ioz(d){var w,v,u,t,s=$.ahb.W(0,d)
if(s!=null){$.ahb.n(0,d,s)
return s}w=A.cI.aN(A.a.b2(d,A.a.co(d,",")+1))
$.ahb.n(0,d,w)
v=$.hec=$.hec+w.length
u=B.a4($.ahb).k("cx<1>")
for(;;){if(!(v>41943040&&$.ahb.a>1))break
t=new B.cx($.ahb,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.ahb.W(0,t.gR(0)).length
$.hec=v}return w},
ioe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aC(d,r,o)
m=f.$1(e)
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TC(s,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TC(t,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TC(u,A.cC))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cP(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3H(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.jP(e))
return m
case"rounded":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.j8(B.bl(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bv())
return m
case"hexagon":w=$.Q()
m=B.a([],m)
v=new B.aF(w.r,A.ai,n,n,m)
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
v.ab()}}v.E(new B.bv())
return v
case"diamond":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
m.E(new B.aq(e.c,e.gbw().b))
m.E(new B.aq(e.gbw().a,e.d))
m.E(new B.aq(e.a,e.gbw().b))
m.E(new B.bv())
return m
case"arch":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdF(new B.o(t,p),new B.aN(s,s))
m.E(new B.aq(t,u))
m.E(new B.bv())
return m
default:m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.E(new B.ov(e))
return m}},
fPi(d,e,f){return B.ct(new C.fPj(D.fbA.q(0,d),d,f,e))},
b3k:function b3k(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cl0:function cl0(d){this.a=d},
cl_:function cl_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckZ:function ckZ(){},
b3h:function b3h(d,e){this.b=d
this.a=e},
fRJ:function fRJ(d){this.a=d},
fRI:function fRI(d,e){this.a=d
this.b=e},
fAi:function fAi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAg:function fAg(d){this.a=d},
fAh:function fAh(d,e){this.a=d
this.b=e},
aKG:function aKG(d,e){this.c=d
this.a=e},
bx7:function bx7(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fh_:function fh_(d,e,f){this.a=d
this.b=e
this.c=f},
aLn:function aLn(d,e){this.b=d
this.a=e},
We:function We(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blS:function blS(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
e1g:function e1g(d){this.a=d},
e1f:function e1f(d){this.a=d},
e1e:function e1e(d){this.a=d},
JE:function JE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckT:function ckT(d){this.a=d},
ckS:function ckS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBk:function aBk(d,e){this.c=d
this.a=e},
bgc:function bgc(){this.d=0
this.c=this.a=null},
dff:function dff(d){this.a=d},
dfe:function dfe(d){this.a=d},
a8Q:function a8Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmy:function bmy(d,e){var _=this
_.d=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
epL:function epL(d,e,f){this.a=d
this.b=e
this.c=f},
b1g:function b1g(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhp:function bhp(d,e,f){this.b=d
this.c=e
this.a=f},
bsD:function bsD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f5V:function f5V(){},
fPj:function fPj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btG:function btG(d,e,f){this.b=d
this.c=e
this.a=f},
aNn:function aNn(){},
aNS:function aNS(){},
aPb:function aPb(){},
fSK(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fSK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xN.cq().MF(D.dth,A.uD,!0),$async$fSK)
case 3:r=e
if(r==null||J.cq(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.io8(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSK,v)},
io8(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a98(d,new B.a1h(A.cP.gcu().aN(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.ig4(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a98(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)}w=A.c9.Lq(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a98(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)},
ig4(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cGT().cQG(B.rG(d,A.iq,o,o),o,o,!1).cSC(0,"word/document.xml")
if(n==null)return""
w=n.d_M()
v=A.c9.Lq(0,w==null?$.hG_():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fDp(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a98:function a98(d,e,f){this.a=d
this.b=e
this.c=f},
fDp:function fDp(){},
hXF(d,e,f,g,h,i,j,k,l){return new C.OP(l,e,d,g,f,i,h,j,k,null)},
OP:function OP(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGd:function aGd(d,e,f,g,h,i,j,k,l){var _=this
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
_.a9$=l
_.c=_.a=null},
eIC:function eIC(d){this.a=d},
eIA:function eIA(){},
eIB:function eIB(d){this.a=d},
eF_:function eF_(){},
eF0:function eF0(){},
eF1:function eF1(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGo:function eGo(){},
eGp:function eGp(){},
eEn:function eEn(){},
eHI:function eHI(d){this.a=d},
eIy:function eIy(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eIl:function eIl(d){this.a=d},
eIm:function eIm(){},
eIn:function eIn(){},
eIo:function eIo(d){this.a=d},
eIp:function eIp(){},
eDM:function eDM(d){this.a=d},
eIz:function eIz(){},
eFH:function eFH(d,e){this.a=d
this.b=e},
eDK:function eDK(d){this.a=d},
eDL:function eDL(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d,e,f){this.a=d
this.b=e
this.c=f},
eG5:function eG5(d){this.a=d},
eFG:function eFG(){},
eFF:function eFF(d){this.a=d},
eFD:function eFD(){},
eFC:function eFC(d){this.a=d},
eFE:function eFE(){},
eEW:function eEW(d){this.a=d},
eEX:function eEX(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eDO:function eDO(){},
eDP:function eDP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFZ:function eFZ(){},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e,f){this.a=d
this.b=e
this.c=f},
eFY:function eFY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFR:function eFR(d,e,f){this.a=d
this.b=e
this.c=f},
eFS:function eFS(d,e,f){this.a=d
this.b=e
this.c=f},
eFT:function eFT(d){this.a=d},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eFW:function eFW(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eG0:function eG0(d){this.a=d},
eGj:function eGj(){},
eGk:function eGk(){},
eGl:function eGl(){},
eGm:function eGm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGg:function eGg(d){this.a=d},
eGi:function eGi(){},
eGh:function eGh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGe:function eGe(d,e,f){this.a=d
this.b=e
this.c=f},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGn:function eGn(){},
eFP:function eFP(d,e){this.a=d
this.b=e},
eE4:function eE4(){},
eE5:function eE5(d,e,f){this.a=d
this.b=e
this.c=f},
eE6:function eE6(d){this.a=d},
eE7:function eE7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eE3:function eE3(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGu:function eGu(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eE2:function eE2(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eGC:function eGC(d,e,f){this.a=d
this.b=e
this.c=f},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDW:function eDW(d){this.a=d},
eGB:function eGB(d,e,f){this.a=d
this.b=e
this.c=f},
eDN:function eDN(d){this.a=d},
eEo:function eEo(){},
eIj:function eIj(d,e){this.a=d
this.b=e},
eIk:function eIk(d,e,f){this.a=d
this.b=e
this.c=f},
eHJ:function eHJ(d,e,f){this.a=d
this.b=e
this.c=f},
eCK:function eCK(d){this.a=d},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCx:function eCx(d,e){this.a=d
this.b=e},
eCu:function eCu(d){this.a=d},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCv:function eCv(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d){this.a=d},
eE_:function eE_(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eDb:function eDb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDg:function eDg(d,e){this.a=d
this.b=e},
eDh:function eDh(d){this.a=d},
eDe:function eDe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDf:function eDf(d){this.a=d},
eDd:function eDd(){},
eDa:function eDa(d,e,f){this.a=d
this.b=e
this.c=f},
eGd:function eGd(d,e){this.a=d
this.b=e},
eIs:function eIs(d){this.a=d},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIu:function eIu(d){this.a=d},
eIv:function eIv(d,e,f){this.a=d
this.b=e
this.c=f},
eIr:function eIr(d){this.a=d},
eHZ:function eHZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHY:function eHY(d,e,f){this.a=d
this.b=e
this.c=f},
eHX:function eHX(){},
eHW:function eHW(d,e,f){this.a=d
this.b=e
this.c=f},
eHV:function eHV(d,e){this.a=d
this.b=e},
eHS:function eHS(d,e,f){this.a=d
this.b=e
this.c=f},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHU:function eHU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHT:function eHT(d){this.a=d},
eES:function eES(d,e){this.a=d
this.b=e},
eER:function eER(d,e){this.a=d
this.b=e},
eHK:function eHK(){},
eIi:function eIi(d,e){this.a=d
this.b=e},
eIg:function eIg(d){this.a=d},
eIh:function eIh(d){this.a=d},
eCC:function eCC(d,e){this.a=d
this.b=e},
eCA:function eCA(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e,f){this.a=d
this.b=e
this.c=f},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCz:function eCz(d,e,f){this.a=d
this.b=e
this.c=f},
eCy:function eCy(d){this.a=d},
eGz:function eGz(d,e,f){this.a=d
this.b=e
this.c=f},
eIq:function eIq(d,e,f){this.a=d
this.b=e
this.c=f},
eEV:function eEV(d,e,f){this.a=d
this.b=e
this.c=f},
eEU:function eEU(){},
eDk:function eDk(d,e,f){this.a=d
this.b=e
this.c=f},
eDl:function eDl(d){this.a=d},
eCw:function eCw(d,e){this.a=d
this.b=e},
eEm:function eEm(d,e){this.a=d
this.b=e},
eCF:function eCF(d,e){this.a=d
this.b=e},
eCO:function eCO(d){this.a=d},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCN:function eCN(d){this.a=d},
eD0:function eD0(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(){},
eD9:function eD9(){},
eCR:function eCR(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD1:function eD1(d){this.a=d},
eD2:function eD2(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e,f){this.a=d
this.b=e
this.c=f},
eEk:function eEk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEj:function eEj(d,e,f){this.a=d
this.b=e
this.c=f},
eEi:function eEi(d,e){this.a=d
this.b=e},
eCG:function eCG(d,e){this.a=d
this.b=e},
eDo:function eDo(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d,e){this.a=d
this.b=e},
eE1:function eE1(d){this.a=d},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGb:function eGb(d,e){this.a=d
this.b=e},
eGa:function eGa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d,e){this.a=d
this.b=e},
eG6:function eG6(){},
eG7:function eG7(){},
eHL:function eHL(){},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHN:function eHN(){},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d,e){this.a=d
this.b=e},
eCL:function eCL(d,e){this.a=d
this.b=e},
eDQ:function eDQ(){},
eDR:function eDR(){},
eDS:function eDS(){},
eDV:function eDV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDT:function eDT(d,e,f){this.a=d
this.b=e
this.c=f},
eFl:function eFl(d){this.a=d},
eFk:function eFk(){},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFj:function eFj(d){this.a=d},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFi:function eFi(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFh:function eFh(d){this.a=d},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFg:function eFg(d){this.a=d},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFe:function eFe(d){this.a=d},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFd:function eFd(d){this.a=d},
eF6:function eF6(d,e){this.a=d
this.b=e},
eF7:function eF7(d){this.a=d},
eF8:function eF8(d){this.a=d},
eF5:function eF5(d){this.a=d},
eF9:function eF9(d,e){this.a=d
this.b=e},
eF4:function eF4(d){this.a=d},
eFa:function eFa(d,e){this.a=d
this.b=e},
eF3:function eF3(d){this.a=d},
eFb:function eFb(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eFc:function eFc(d){this.a=d},
eEe:function eEe(d){this.a=d},
eEf:function eEf(d){this.a=d},
eEh:function eEh(d){this.a=d},
eE9:function eE9(d){this.a=d},
eE8:function eE8(d,e){this.a=d
this.b=e},
eEa:function eEa(d,e){this.a=d
this.b=e},
eEb:function eEb(d){this.a=d},
eEc:function eEc(d){this.a=d},
eEd:function eEd(d,e){this.a=d
this.b=e},
eEg:function eEg(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIx:function eIx(d){this.a=d},
eFw:function eFw(d,e){this.a=d
this.b=e},
eFv:function eFv(d,e){this.a=d
this.b=e},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eFy:function eFy(d){this.a=d},
eGV:function eGV(d,e){this.a=d
this.b=e},
eGW:function eGW(d){this.a=d},
eGX:function eGX(d){this.a=d},
eH7:function eH7(d){this.a=d},
eHi:function eHi(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH4:function eH4(d){this.a=d},
eH5:function eH5(d){this.a=d},
eH6:function eH6(d){this.a=d},
eH8:function eH8(d){this.a=d},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHc:function eHc(d){this.a=d},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d){this.a=d},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d){this.a=d},
eGL:function eGL(d){this.a=d},
eHh:function eHh(d){this.a=d},
eGT:function eGT(d){this.a=d},
eHj:function eHj(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eHk:function eHk(d,e){this.a=d
this.b=e},
eHl:function eHl(d,e){this.a=d
this.b=e},
eGR:function eGR(d,e,f){this.a=d
this.b=e
this.c=f},
eGH:function eGH(d,e){this.a=d
this.b=e},
eGU:function eGU(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHG:function eHG(d,e){this.a=d
this.b=e},
eHm:function eHm(d,e,f){this.a=d
this.b=e
this.c=f},
eGQ:function eGQ(d,e,f){this.a=d
this.b=e
this.c=f},
eGG:function eGG(d,e,f){this.a=d
this.b=e
this.c=f},
eGE:function eGE(d,e){this.a=d
this.b=e},
eHn:function eHn(d,e){this.a=d
this.b=e},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGD:function eGD(d,e){this.a=d
this.b=e},
eHo:function eHo(d){this.a=d},
eGO:function eGO(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d){this.a=d},
eGN:function eGN(d){this.a=d},
eHu:function eHu(d){this.a=d},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eGM:function eGM(d){this.a=d},
eHx:function eHx(d,e){this.a=d
this.b=e},
eGK:function eGK(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d){this.a=d},
eHz:function eHz(d,e){this.a=d
this.b=e},
eGI:function eGI(d){this.a=d},
eDj:function eDj(d,e,f){this.a=d
this.b=e
this.c=f},
eDi:function eDi(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e){this.a=d
this.b=e},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEq:function eEq(d){this.a=d},
eEs:function eEs(d,e){this.a=d
this.b=e},
eEp:function eEp(d){this.a=d},
eEZ:function eEZ(){},
eEY:function eEY(){},
eIe:function eIe(d){this.a=d},
eId:function eId(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIc:function eIc(d,e){this.a=d
this.b=e},
eI7:function eI7(d,e){this.a=d
this.b=e},
eIb:function eIb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI9:function eI9(d,e){this.a=d
this.b=e},
eIa:function eIa(d,e){this.a=d
this.b=e},
eIf:function eIf(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDI:function eDI(d,e,f){this.a=d
this.b=e
this.c=f},
eDH:function eDH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDw:function eDw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDv:function eDv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDC:function eDC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDD:function eDD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDu:function eDu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDs:function eDs(d){this.a=d},
eDG:function eDG(d,e){this.a=d
this.b=e},
eFA:function eFA(d){this.a=d},
eFz:function eFz(d){this.a=d},
eFB:function eFB(d,e){this.a=d
this.b=e},
eEF:function eEF(d,e){this.a=d
this.b=e},
eEG:function eEG(d,e){this.a=d
this.b=e},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEH:function eEH(d,e){this.a=d
this.b=e},
eED:function eED(d,e){this.a=d
this.b=e},
eEI:function eEI(d,e){this.a=d
this.b=e},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEK:function eEK(d,e){this.a=d
this.b=e},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e,f){this.a=d
this.b=e
this.c=f},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e,f){this.a=d
this.b=e
this.c=f},
eEy:function eEy(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e,f){this.a=d
this.b=e
this.c=f},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEv:function eEv(d,e,f){this.a=d
this.b=e
this.c=f},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eET:function eET(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCs:function eCs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d,e){this.a=d
this.b=e},
agj:function agj(d,e,f){this.a=d
this.b=e
this.c=f},
aAH:function aAH(d,e){this.c=d
this.a=e},
beZ:function beZ(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
daH:function daH(d){this.a=d},
daG:function daG(d){this.a=d},
bfd:function bfd(d,e){this.c=d
this.a=e},
db4:function db4(d){this.a=d},
db5:function db5(d){this.a=d},
KG:function KG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beY:function beY(){this.d=!1
this.c=this.a=null},
daE:function daE(d){this.a=d},
daA:function daA(d){this.a=d},
daF:function daF(d){this.a=d},
daz:function daz(d){this.a=d},
daD:function daD(d){this.a=d},
daB:function daB(d){this.a=d},
daC:function daC(d,e){this.a=d
this.b=e},
Qy:function Qy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0L:function a0L(d,e,f){this.c=d
this.d=e
this.a=f},
aGg:function aGg(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bx$=e
_.a9$=f
_.c=_.a=null},
eJc:function eJc(){},
eJ2:function eJ2(d){this.a=d},
eJb:function eJb(d){this.a=d},
eJ3:function eJ3(d){this.a=d},
eJ4:function eJ4(d){this.a=d},
eIZ:function eIZ(d){this.a=d},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eJ0:function eJ0(d){this.a=d},
eJ1:function eJ1(d,e,f){this.a=d
this.b=e
this.c=f},
eJ9:function eJ9(){},
eJa:function eJa(d){this.a=d},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
eJd:function eJd(d,e,f){this.a=d
this.b=e
this.c=f},
eJf:function eJf(d,e){this.a=d
this.b=e},
eJe:function eJe(d){this.a=d},
KM:function KM(d,e){this.c=d
this.a=e},
bub:function bub(d,e){this.b=d
this.a=e},
bk_:function bk_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjZ:function bjZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aM4:function aM4(){},
aO4:function aO4(){},
bA_:function bA_(){},
aO5:function aO5(){},
fUG(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fUG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xN.cq().MF(B.a(["pdf"],x.s),A.uD,!0),$async$fUG)
case 3:q=e
if(q==null||J.cq(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.brj(s,"data:application/pdf;base64,"+A.cP.gcu().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUG,v)},
ioL(d){var w,v,u,t,s,r
try{w=B.jI(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aj6(t,1,200)
return s}}catch(r){}return 1},
fUx(d){return C.ioK(d)},
ioK(d){var w=0,v=B.j(x.T),u
var $async$fUx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUx,v)},
bFz(d,e,f,g){return C.ioU(d,e,f,g)},
ioU(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFz=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.i.D(b5.a,80,2400)
q=A.i.D(b5.b,80,2400)
p=B.hE9(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jh(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jh(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jh(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jh(b0),a9)}o=A.i.D(o-0.04,0,1)
n=A.i.D(n-0.04,0,1)
m=A.i.D(m+0.04,0,1)
l=A.i.D(l+0.04,0,1)
j=A.i.D(m-o,0.12,1)
i=A.i.D(l-n,0.12,1)
h=A.o.D(A.i.V(800*(i/j)),180,420)
$.Q()
g=new B.q_(new B.pz())
f=B.zv(g,null)
a7=B.K()
a7.r=A.rw.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bw
b1.e=A.dP
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.o((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o0()
w=7
return B.b(a3.xD(800,h),$async$bFz)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.hh),$async$bFz)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dN.gaU(a5))
a7=A.cP.gcu().aN(a7)
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
return B.i($async$bFz,v)},
aS_(d,e,f){return C.ioI(d,e,f)},
ioI(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aS_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiN(d,e,f,new C.fUv(r,q),q,"Sign document"),$async$aS_)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFz(q,t,r.b,r.c),$async$aS_)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3o(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS_,v)},
ioS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hwX(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hwX(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.i.ac(q.c*100,2)+"%;top:"+A.i.ac(q.d*100,2)+"%;width:"+A.i.ac(q.e*100,2)+"%;height:"+A.i.ac(q.f*100,2)+'%">'
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
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lU&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hwy(q.ay)+";border:2px solid "+C.hwy(q.ch)+'"></div>'
break
case 5:l=C.hfB(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gald()
if(p==null)p=A.aBK
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n5(p,0,8,n.c)
j=new B.bP(j,j.gI(0),k.k("bP<ak.E>"))
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
hwy(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.i.ac((w&255)/255,3)+")"},
hwX(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFx(d,e){var w=0,v=B.j(x.H)
var $async$bFx=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fUE(e,C.ioS(e),d),d,null,!0,!0,x.H),$async$bFx)
case 2:return B.h(null,v)}})
return B.i($async$bFx,v)},
bFy(){var w=0,v=B.j(x.T),u,t,s
var $async$bFy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.Hu(92,2400),$async$bFy)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fUx(s),$async$bFy)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFy,v)},
aS0(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aS0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hgQ(d),$async$aS0)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fXh(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS0,v)},
hqR(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3o:function b3o(d,e,f){this.a=d
this.b=e
this.c=f},
fUv:function fUv(d,e){this.a=d
this.b=e},
fUE:function fUE(d,e,f){this.a=d
this.b=e
this.c=f},
fUB:function fUB(d){this.a=d},
fUC:function fUC(d,e,f){this.a=d
this.b=e
this.c=f},
fUD:function fUD(d,e,f){this.a=d
this.b=e
this.c=f},
ioJ(d){return C.kM(d.w)},
ioQ(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.ir6()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zf(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hKh()
if(w.b.test(u))return u
return null},
hEb(d,e,f){var w,v,u=C.hTi(d),t=$.os()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
ioW(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aU(d.a),v=new B.eG(w,d.b);v.C();){u=w.gR(w).y
t=C.zf(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fUt(d,e){var w,v=d.y,u=C.zf(v==null?"":v)
if(u!=null)return d.y=u
w=C.ioW(new B.Y(e,new C.fUu(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hEb(v==null?"":v,null,w)},
ioV(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kM(w.w))return null
v=w.y
return C.zf(v==null?"":v)},
hXH(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.he(u)},
Xa(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xa=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xa)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bL),$async$Xa)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
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
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xa,v)},
Xb(d){return C.hXI(d)},
hXI(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xb=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xb)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cL,null),$async$Xb)
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
return B.i($async$Xb,v)},
a9a(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9a=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a9a)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xa(),$async$a9a)
case 4:s=a6
r=C.zf(a2==null?"":a2)
if(r==null)r=a3!=null?C.hEb(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dm(s),n=J.aU(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zf(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dS.aN(t)
g.n(0,"payload",A.cP.gcu().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UT.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zf(J.k(q==null?"":q))
if(f==null)f=C.hqW(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xb(s),$async$a9a)
case 7:u=new B.aHJ(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hXH()
n=r==null
d=n?C.hqW(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dS.aN(t)
q.n(0,"payload",A.cP.gcu().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UT.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xb(s),$async$a9a)
case 8:u=new B.aHJ(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9a,v)},
hqW(d){var w,v,u=$.os()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.az(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asT(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asT)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xa(),$async$asT)
case 6:t=f
s=J.a5(t)
r=s.gI(t)
s.bt(t,new C.clq(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xb(t),$async$asT)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asT,v)},
asS(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zf(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asS)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xa(),$async$asS)
case 6:t=o.hT(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zf(J.k(q==null?"":q))===p){u=C.a99(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asS,v)},
a99(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a99=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a99)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xa(),$async$a99)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
k=B.aH(l.h(n,"usesRemaining"))
j=k==null?null:A.i.L(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.c9.cI(0,A.cI.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UT.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
if(m.b(r)){q=B.a3(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.Y.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dM(B.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xb(p),$async$a99)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a99,v)},
ioP(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fUA(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fUI(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.Y.aw(w,null)}return A.Y.aw(C.ioP(d==null?B.a([],x.D):d,f,g),null)},
fUH(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fUH=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9a(h,d,e,f,g),$async$fUH)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zf(e==null?"":e)
u=new B.aHv(s,t)
w=1
break}t=A.dS.aN(h)
t=A.kI.gcu().aN(t)
u=new B.aHv(C.zf(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUH,v)},
hgS(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.eH(q,s)||J.eH(q,r))return!0
if(J.d3(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
ioT(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hgS(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hgS(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hgS(s))return s}}return null},
fUw(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.c9.cI(0,A.cI.aN(J.nq(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i6Q(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiy(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asS(t[1]),$async$aiy)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUw(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zf(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asS(r),$async$aiy)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUw(s)
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
return B.b(C.a99(t[1]),$async$aiy)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUw(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fUw(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiy,v)},
i6Q(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UT.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hgP(C.X6(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cE(t,new C.fpI(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hgP(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jc
$.jc=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.X6(B.a3(o,x.N,x.z))
if(e&&C.kM(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bFi(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Ht(),$async$bFi)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiy(s),$async$bFi)
case 4:t=e
u=J.cq(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFi,v)},
h2F(d){var w=0,v=B.j(x.T),u,t
var $async$h2F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i0(D.YV,!0,"Dismiss",d,new C.h2G(),new C.h2H(),A.GD,!0,x.N),$async$h2F)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.M(x.q).f.U(D.fhz)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2F,v)},
itk(d,e,f,g,h){return B.a7(d,!1).ca(B.e9(new C.h2I(h,e,g,f),!0,null,x.H))},
fUu:function fUu(d){this.a=d},
clq:function clq(d){this.a=d},
fUA:function fUA(){},
fpI:function fpI(d){this.a=d},
h2G:function h2G(){},
h2H:function h2H(){},
h2I:function h2I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X8:function X8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGe:function aGe(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eIJ:function eIJ(){},
eIF:function eIF(d,e){this.a=d
this.b=e},
eII:function eII(d,e){this.a=d
this.b=e},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIO:function eIO(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIQ:function eIQ(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIR:function eIR(d,e){this.a=d
this.b=e},
eIE:function eIE(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
X9:function X9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmU:function bmU(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eIS:function eIS(d,e){this.a=d
this.b=e},
eIT:function eIT(d){this.a=d},
eIU:function eIU(){},
eIV:function eIV(d){this.a=d},
eIW:function eIW(d,e){this.a=d
this.b=e},
aGb:function aGb(d){this.a=d},
aGc:function aGc(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCm:function eCm(d){this.a=d},
eCl:function eCl(){},
eCn:function eCn(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCh:function eCh(){},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
bxt:function bxt(){},
asU:function asU(d){this.a=d},
aGf:function aGf(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eIY:function eIY(d){this.a=d},
eIX:function eIX(d){this.a=d},
icq(){var w,v,u,t
for(v=0;v<4;++v){w=D.dh2[v]
try{if(Ad.c1a(w)){u=w
return u}}catch(t){}}return null},
Sc(d,e){return C.ilw(d,e)},
ilw(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sc=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.icq()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oO?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.i.V(b3?1280:1280*b2)
b5=c2.b=A.i.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qS(c6,!0)
b6.toString
p=B.a7(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.pw(new C.fOM(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.cf(null,A.dh,!1,null,new C.fON(n,m),c6,null,!0,!0,b9)
k=new C.fOR(b7)
j=new C.fOS()
i=null
t=4
b3=c2.a
h=Ak.aUk(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h5G(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ad.aZn(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.J3.z6(i,"dataavailable",new C.fOO(e))
d=new B.c2(new B.bk($.bE,x.dT),x.b2)
A.J3.z6(i,"stop",new C.fOP(d))
J.ajb(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sc)
case 8:w=7
return B.b(c5.$1(d0),$async$Sc)
case 7:a0=d0
J.h5H(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajb(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajb(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sc)
case 15:w=14
return B.b(c5.$1(d0),$async$Sc)
case 14:a0=d0
case 13:J.h5H(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajb(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcG()
else b3=!0
if(!b3){w=17
break}J.h5H(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.ff,null,b9),$async$Sc)
case 18:w=16
break
case 17:J.ajb(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajb(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dh(0,A.on),$async$Sc)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n3(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HH(b0)
J.lK(b0)
B.bQ(A.qs,new C.fOQ(a7),b9)
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
J.lK(l)
if(p.pX())p.eO()
c3=o
b3=$.aw()
c3.sig(b3)
J.aSW(c3,0)
c3=n
c3.sig(b3)
J.aSW(c3,0)
c3=m
c3.sig(b3)
J.aSW(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sc,v)},
fOM:function fOM(d,e,f){this.a=d
this.b=e
this.c=f},
fOL:function fOL(){},
fON:function fON(d,e){this.a=d
this.b=e},
fOR:function fOR(d){this.a=d},
fOS:function fOS(){},
fOO:function fOO(d){this.a=d},
fOP:function fOP(d){this.a=d},
fOQ:function fOQ(d){this.a=d},
bxH:function bxH(d,e,f){this.c=d
this.d=e
this.a=f},
fjD:function fjD(){},
fjE:function fjE(){},
clM(d){var w=0,v=B.j(x.at),u,t,s
var $async$clM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at1(d,A.Ak),$async$clM)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bE
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clM,v)},
clL(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8R:function a8R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmD:function bmD(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eqC:function eqC(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqB:function eqB(d,e){this.a=d
this.b=e},
a9K:function a9K(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oT$=k
_.oU$=l
_.oV$=m
_.o3$=n},
a9L:function a9L(d,e){this.a=d
this.b=e},
b53:function b53(){},
cpG:function cpG(){},
cpH:function cpH(){},
cpI:function cpI(d,e,f,g,h,i,j,k,l){var _=this
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
hLi(d){return new C.ajt(d)},
a4a:function a4a(){},
ajt:function ajt(d){this.a=d},
aTf:function aTf(){},
ayx:function ayx(d,e){this.d=d
this.b=e
this.a=null},
aUJ:function aUJ(d){this.b=d
this.a=null},
bEc(d,e){var w=0,v=B.j(x.H),u
var $async$bEc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.Q().gud().Mn(d,e),$async$bEc)
case 2:u=B.fXq()
w=3
return B.b(u,$async$bEc)
case 3:return B.h(null,v)}})
return B.i($async$bEc,v)},
hBn(d,e){return(A.tc[(d^e)&255]^A.o.aI(d,8))>>>0},
fGN(d,e,f,g,h,i){var w=C.ihJ(d,A.dj,f,null,A.d2,g,h,i)
return w},
hDk(d){var w=F.hE2(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hTi(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pF.h(0,w)
if(v!=null)return v
for(u=A.pF.gdO(A.pF),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aC(s,0,2)
return A.a.aC(s+"XX",0,2)},
hDs(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<62;++w)v+="- "+D.dnD[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDq(d,e){return C.ie8(d,e)},
ie8(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDq=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aWu(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jN(o,"share",[p]),x.H),$async$bDq)
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
return B.i($async$bDq,v)},
hgJ(){var w=0,v=B.j(x.y),u,t,s
var $async$hgJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fxA
s=$.bCY
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDq(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgJ,v)},
bEO(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fxA
l=$.bCY
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hxG()?3:4
break
case 3:w=5
return B.b(C.bDq(m,k),$async$bEO)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCZ
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
J.HH(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bEO)
case 10:J.lK(q)
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
return B.i($async$bEO,v)},
hgA(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hgA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCZ
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.m_.rk(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hgA,v)},
hgR(d,e){var w=0,v=B.j(x.H),u,t
var $async$hgR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.m_.rk(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hgR,v)},
b4_(d,e){var w=0,v=B.j(x.y),u
var $async$b4_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b41(d,e),$async$b4_)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b40(d),$async$b4_)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4_,v)}},D,O,An,A8,Z,A_,X,Ao,G,F,E,H,R,S,A0,A1,Ap,M,Aq,A9,Ar,As,Aa,K,At,Au,A2,N,Y,P,Ab,Av,Q,Ac,Aw,Ad,Ae,Ax,Af,Ay,Ag,Ah,Az,AA,T,AB,I,U,V,AC,L,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ai=c[204]
A6=c[74]
Aj=c[54]
Ak=c[65]
W=c[221]
A7=c[58]
Al=c[147]
Am=c[232]
C=a.updateHolder(c[5],C)
D=c[219]
O=c[139]
An=c[42]
A8=c[223]
Z=c[220]
A_=c[233]
X=c[209]
Ao=c[131]
G=c[190]
F=c[35]
E=c[222]
H=c[95]
R=c[119]
S=c[149]
A0=c[32]
A1=c[178]
Ap=c[235]
M=c[158]
Aq=c[185]
A9=c[132]
Ar=c[134]
As=c[228]
Aa=c[114]
K=c[224]
At=c[236]
Au=c[130]
A2=c[68]
N=c[198]
Y=c[83]
P=c[160]
Ab=c[116]
Av=c[226]
Q=c[122]
Ac=c[141]
Aw=c[93]
Ad=c[59]
Ae=c[194]
Ax=c[40]
Af=c[81]
Ay=c[157]
Ag=c[148]
Ah=c[231]
Az=c[234]
AA=c[230]
T=c[75]
AB=c[227]
I=c[175]
U=c[52]
V=c[225]
AC=c[237]
L=c[206]
A3=c[229]
A4=c[110]
A5=c[64]
C.oj.prototype={
vF(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.uj(t,v)
return new C.oj(t===0?!1:w,v,t)},
bQ5(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DK()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.uj(w,u)
return new C.oj(r===0?!1:s,u,r)},
bQC(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DK()
w=o-d
if(w<=0)return p.a?$.him():$.DK()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.uj(w,u)
q=new C.oj(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a3W())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ap(e,16)
if(A.o.F(e,16)===0)return r.bQ5(v)
u=w+v+1
t=new Uint16Array(u)
C.hu7(r.b,w,e,t)
w=r.a
s=C.uj(u,t)
return new C.oj(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ap(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQC(v)
t=w-v
if(t<=0)return n.a?$.him():$.DK()
s=n.b
r=new Uint16Array(t)
C.i2u(s,w,e,r)
w=n.a
q=C.uj(t,r)
p=new C.oj(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a3W())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a3W())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cOU(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9l(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9l(t,e)
if(s===0)return $.DK()
if(r===0)return t.a===e?t:t.vF(0)
w=s+1
v=new Uint16Array(w)
C.i2s(t.b,s,d.b,r,v)
u=C.uj(w,v)
return new C.oj(u===0?!1:e,v,u)},
HQ(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DK()
w=d.c
if(w===0)return t.a===e?t:t.vF(0)
v=new Uint16Array(s)
C.bc8(t.b,s,d.b,w,v)
u=C.uj(s,v)
return new C.oj(u===0?!1:e,v,u)},
bCY(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.uj(r,u)
return new C.oj(!1,u,s)},
bCX(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.uj(u,r)
return new C.oj(!1,r,v)},
bCZ(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.uj(p,m)
return new C.oj(s!==0,m,s)},
VE(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DK()
w=t.a
if(w===e.a){if(w){w=$.a3W()
return t.HQ(w,!0).bCZ(e.HQ(w,!0),!0).a9l(w,!0)}return t.bCY(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCX(v.HQ($.a3W(),!1),!1)},
a4(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9l(e,v)
if(C.cOU(u.b,t,e.b,w)>=0)return u.HQ(e,v)
return e.HQ(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vF(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9l(e,v)
if(C.cOU(u.b,t,e.b,w)>=0)return u.HQ(e,v)
return e.HQ(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DK()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hu8(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.uj(w,t)
return new C.oj(q===0?!1:r,t,q)},
bQ4(d){var w,v,u,t
if(this.c<d.c)return $.DK()
this.aU8(d)
w=$.hbh.cq()-$.azj.cq()
v=C.hbj($.hbg.cq(),$.azj.cq(),$.hbh.cq(),w)
u=C.uj(w,v)
t=new C.oj(!1,v,u)
return this.a!==d.a&&u>0?t.vF(0):t},
ctB(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aU8(d)
w=C.hbj($.hbg.cq(),0,$.azj.cq(),$.azj.cq())
v=C.uj($.azj.cq(),w)
u=new C.oj(!1,w,v)
if($.hbi.cq()>0)u=u.mD(0,$.hbi.cq())
return t.a&&u.c>0?u.vF(0):u},
aU8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hu4&&d.c===$.hu6&&g.b===$.hu3&&d.b===$.hu5)return
w=d.b
v=d.c
u=16-A.o.galF(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hu2(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hu2(g.b,f,u,r)}else{r=C.hbj(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hbk(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cOU(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bc8(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bc8(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i2t(p,r,i);--o
C.hu8(h,j,0,r,o,s)
if(r[i]<h){m=C.hbk(j,s,o,n)
C.bc8(r,l,n,m,r)
while(--h,r[i]<h)C.bc8(r,l,n,m,r)}--i}$.hu3=g.b
$.hu4=f
$.hu5=w
$.hu6=v
$.hbg.b=r
$.hbh.b=l
$.azj.b=s
$.hbi.b=u},
gX(d){var w,v,u,t=new C.cOV(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cOW().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oj&&this.aS(0,e)===0},
tT(d,e){return this.aS(0,e)>0},
L(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vy(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
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
s=new C.cOX(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOY(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lp(A.aI.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vF(0):r
while(v.c>1){u=$.hI4()
if(u.c===0)B.bi(D.baC)
t=v.ctB(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQ4(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dt(w,x.bJ).he(0)},
$iaU0:1,
$ihM:1}
C.aTp.prototype={
J(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gI(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cSC(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gan(d){return A.d.gan(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kj(w,w.length,B.U(w).k("kj<1>"))}}
C.SP.prototype={
d_M(){var w,v
if(this.as==null)this.bg6()
w=this.as
v=w==null?null:w.aqR()
return v==null?null:v.eV()},
bg6(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqR().eV()
this.as=new C.bSK(v)}},
gZ(d){return this.at}}
C.a4T.prototype={
a7(){return"CompressionType."+this.b}}
C.bKu.prototype={
eH(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zU[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fR(u,t)&A.zU[d])
s.c=t}return v}}
C.bIM.prototype={
cQF(d,e){var w,v,u,t,s,r=this,q=new C.bKu(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eH(8)!==66||q.eH(8)!==90||q.eH(8)!==104)return!1
w=r.a=q.eH(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crR(q)
if(t<0)return!1
if(t===0){q.eH(8)
q.eH(8)
q.eH(8)
q.eH(8)
s=r.crU(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eH(8)
q.eH(8)
q.eH(8)
q.eH(8)
return!0}}return!0},
crR(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eH(8)
if(t!==D.dyX[u])v=!1
if(t!==D.da_[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crU(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eH(1),d2=((d3.eH(8)<<8|d3.eH(8))<<8|d3.eH(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eH(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eH(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6i()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eH(3)
if(q<2||q>6)return-1
v=d3.eH(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eH(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c_(6,$.hG3(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eH(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eH(1)===0)break
i=d3.eH(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hG2()
u=x.an
c9.y=B.c_(6,v,!1,u)
c9.z=B.c_(6,v,!1,u)
c9.Q=B.c_(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1w(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avW(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avW(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.ap(a8,16)
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
a3=c9.avW(d3)
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
c1=(c1<<8^D.Ix[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IB[b9];++b9
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
if(b8===0){b8=D.IB[b9];++b9
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
if(b8===0){b8=D.IB[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IB[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IB[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Ix[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Ix[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Ix[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Ix[c1>>>24&255^c7&255])>>>0
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
avW(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eH(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eH(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1w(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6i(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cGU.prototype={
aKd(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTJ(e)
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
if(w>0)e.aKg(w,!1)
r.cse(e)
q=r.r
v=r.f
u=e.aNr(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baO()
s.d_L(0,u,e,f)
q.push(s)}},
cse(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a91(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tE()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tE()
d.b3()
d.b3()
d.aT()
d.aT()
d.tE()
d.tE()
u=d.tE()
t=d.tE()
this.f=u
this.r=t
d.c=s},
bTJ(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a91(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ang(A.iq)
o.aOG(r.eV(),A.iq,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cGS.prototype={}
C.ayX.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cGV.prototype={
aKd(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aIt.h(0,e.b3())
o.c=w==null?D.Nw:w
o.d=e.b3()
o.e=e.b3()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b3()
u=e.b3()
o.x=e.apu(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_u:D.EV
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.EV&&u>2){w=o.y
w.toString
s=B.rG(w,A.iq,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b3()===39169){s.b3()
s.b3()
s.apu(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b3()
o.at=D.b_v
o.ax=new C.cGS(r,q)
w=D.aIt.h(0,q)
o.c=w==null?D.Nw:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpQ().length},
aqR(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rG(new Uint8Array(0),A.iq,q,q)
w=r.at
if(w!==D.EV)if(p.gI(0)<=0)r.at=D.EV
else{if(w===D.b_u){p=r.bOk(p)
r.Q=p}else if(w===D.b_v){p=r.bNY(p)
r.Q=p}r.at=D.EV}w=r.c
if(w===D.akp){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q4.C7(p.eV(),!0,!1)
else{t=B.a9z(A.iq,r.w)
p=r.Q
p.toString
A.q4.a55(p,t,!0,!1)
u.b=t.Hp()}r.Q.c=v
return B.rG(u.bl(),A.iq,q,q)}else if(w===D.akq){s=B.a9z(A.iq,32768)
p=r.Q
v=p.c
C.hLt().cQF(p,s)
u=s.Hp()
r.Q.c=v
return B.rG(u,A.iq,q,q)}else return B.rG(p.eV(),A.iq,q,q)},
bpQ(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbV(d){var w=this.ch,v=C.KC(C.hBn(w[0].L(0),d))
w[0]=v
v=w[1].a4(0,v.VE(0,C.KC(255)))
w[1]=v
w[1]=v.aO(0,C.KC(134775813)).a4(0,C.KC(1)).VE(0,C.KC(4294967295))
w[2]=C.KC(C.hBn(w[2].L(0),w[1].mD(0,24).L(0)))},
aTx(){var w=(this.ch[2].VE(0,C.KC(65535)).L(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOk(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rG(new Uint8Array(0),A.iq,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbV(u[v.c++]^r.aTx())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTx()
r.bbV(s)
u&2&&B.aj(t)
t[w]=s}return B.rG(t,A.iq,q,q)},
bNY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i27(k,w,v)
p=new Uint8Array(B.cc(A.aI.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.cc(A.aI.dq(q,v,k)))
if(!C.htC(A.aI.dq(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bHl(k,new Uint8Array(16),p)
k=x.S
m=J.a6o(0,k)
m=n.r=new C.cpv(m)
m.c=!0
m.b=m.bp6(!0,new C.auu(p))
if(m.c)m.d=B.bq(D.oM,!0,k)
else m.d=B.bq(D.zH,!0,k)
l=C.hrN(C.hrP(),64)
l.biw(new C.auu(o))
n.w=l
n.d_h(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.htC(k,m))throw B.W(B.fl("macs don't match"))
return B.rG(r,A.iq,null,null)}}
C.baO.prototype={
d_L(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.apu(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rG(t,A.iq,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b3()
p=s.b3()
o=s.a91(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tE()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tE()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tE()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apu(u)
f.c=n.as
t=new C.cGV(D.Nw,n,D.EV,B.a([C.KC(0),C.KC(0),C.KC(0)],x.f3))
n.ch=t
t.aKd(0,f,g)},
u(d){return this.at}}
C.cGT.prototype={
cQG(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cGU(B.a([],x.fT))
this.a=g
g.aKd(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTp(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SP(o,A.o.ap(Date.now(),1000),0):C.hjN(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hjN(o,q.w,q)
if(k.as==null)k.bg6()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ang(A.iq)
j.aOG(o,A.iq,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GS(!1).E2(i,0,h,!0)}}return v}}
C.bHl.prototype={
d_h(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D_(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hLc(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRV(u,0,w,0,o)}else{o===$&&B.c()
q.bOo(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LI(w,0)
m.x=A.aI.dq(m.x,0,10)
w=m.w
l=w.a
l.ia(0)
w=w.d
w===$&&B.c()
l.D_(0,w,0,w.length)
return f}}
C.cpA.prototype={}
C.cpE.prototype={}
C.cpy.prototype={}
C.auu.prototype={}
C.cpD.prototype={
cQW(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.biw(new C.auu(A.aI.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bT2(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bT2(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D_(0,d,0,d.length)
v.D_(0,f,0,4)
u=m.c
u===$&&B.c()
w.LI(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D_(0,s,0,s.length)
w.LI(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpz.prototype={}
C.cpx.prototype={}
C.auv.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auv){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tT(d,e){var w=this.a
w===$&&B.c()
w=A.o.tT(w,e.gc1N())
if(!w)e.gc1N()
return w},
aMP(d,e){this.a=0
this.b=d},
tW(d){return this.aMP(d,null)},
aNu(d){var w,v=this,u=v.b
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
w.b3y(v,u)
u=w.b
u===$&&B.c()
w.b3y(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3y(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bx(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cpC.prototype={
ia(d){var w,v=this
v.a.tW(0)
v.c=0
A.aI.hy(v.b,0,4,0)
v.w=0
w=v.r
A.d.hy(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqk(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b50(u,0)
v.c=0}v.a.aNu(1)},
D_(d,e,f,g){var w=this.cqA(e,f,g)
f+=w
g-=w
w=this.cqB(e,f,g)
this.cqr(e,f+w,g-w)},
LI(d,e){var w,v=this,u=C.hrO(v.a),t=u.a
t===$&&B.c()
t=C.hhp(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hhp(w,3)
v.cqv()
v.cqs(u)
v.auK()
v.ckB(d,e)
v.ia(0)
return 20},
b50(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ou(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iA===w.d)
if(w.w===16)w.auK()},
auK(){this.d_g()
this.w=0
A.d.hy(this.r,0,16,0)},
cqr(d,e,f){while(f>0){this.aqk(d[e]);++e;--f}},
cqB(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b50(d,e)
e+=4
f-=4
w.aNu(4)
v+=4}return v},
cqA(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqk(d[e]);++e;--f;++v}return v},
cqv(){this.aqk(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqk(0)}},
cqs(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auK()
u=v.d
switch(u){case A.iA:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fm:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
ckB(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iA===this.d,s=0;s<w;++s){r=v[s]
q=J.ou(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdf(d){return this.f}}
C.cpF.prototype={
d_g(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qv[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qv[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qv[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qv[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qv[30]
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
C.cpB.prototype={
biw(d){var w,v,u,t,s=this,r=s.a
r.ia(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D_(0,w,0,v)
w=s.d
w===$&&B.c()
r.LI(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hy(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.h9(w,0,u,s.d)
s.bd8(s.d,u,54)
s.bd8(s.e,u,92)
u=s.d
r.D_(0,u,0,u.length)},
LI(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LI(s,w)
s=u.e
t.D_(0,s,0,s.length)
v=t.LI(d,e)
s=u.e
A.aI.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D_(0,s,0,s.length)
return v},
bd8(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpw.prototype={}
C.cpv.prototype={
a3k(d){return(D.oM[d&255]&255|(D.oM[d>>>8&255]&255)<<8|(D.oM[d>>>16&255]&255)<<16|D.oM[d>>>24&255]<<24)>>>0},
bp6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c_(4,0,!1,u)
switch(v){case 4:q=J.ou(A.aI.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3k((m>>>8|(m&$.qv[24])<<24)>>>0)^D.cLZ[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ou(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3k((k>>>8|(k&$.qv[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3k((k>>>8|(k&$.qv[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ou(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3k((g>>>8|(g&$.qv[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3k(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRV(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ou(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.en[a8&255]
u=D.en[a9>>>8&255]
t=$.qv[8]
s=D.en[b0>>>16&255]
r=$.qv[16]
q=D.en[b1>>>24&255]
p=$.qv[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.en[a8&255]^C.nO(D.en[a9>>>8&255],24)^C.nO(D.en[b0>>>16&255],16)^C.nO(D.en[b1>>>24&255],8)^b6[w][0]
m=D.en[a9&255]^C.nO(D.en[b0>>>8&255],24)^C.nO(D.en[b1>>>16&255],16)^C.nO(D.en[a8>>>24&255],8)^b6[w][1]
l=D.en[b0&255]^C.nO(D.en[b1>>>8&255],24)^C.nO(D.en[a8>>>16&255],16)^C.nO(D.en[a9>>>24&255],8)^b6[w][2]
b1=D.en[b1&255]^C.nO(D.en[a8>>>8&255],24)^C.nO(D.en[a9>>>16&255],16)^C.nO(D.en[b0>>>24&255],8)^b6[w][3]
a7=D.oM[n&255]
b0=D.oM[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oM[l>>>8&255]
a9=D.oM[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oM[b1>>>8&255]
h=D.oM[n>>>16&255]
g=D.oM[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oM[l>>>24&255]
s=s[3]
a1=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOo(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.em[a6&255]
v=D.em[b0>>>8&255]
u=$.qv[8]
t=D.em[a5>>>16&255]
s=$.qv[16]
r=D.em[a4>>>24&255]
q=$.qv[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.em[a6&255]^C.nO(D.em[b0>>>8&255],24)^C.nO(D.em[a5>>>16&255],16)^C.nO(D.em[a4>>>24&255],8)^b5[a9][0]
o=D.em[a4&255]^C.nO(D.em[a6>>>8&255],24)^C.nO(D.em[b0>>>16&255],16)^C.nO(D.em[a5>>>24&255],8)^b5[a9][1]
n=D.em[a5&255]^C.nO(D.em[a4>>>8&255],24)^C.nO(D.em[a6>>>16&255],16)^C.nO(D.em[b0>>>24&255],8)^b5[a9][2]
b0=D.em[b0&255]^C.nO(D.em[a5>>>8&255],24)^C.nO(D.em[a4>>>16&255],16)^C.nO(D.em[a6>>>24&255],8)^b5[a9][3]
a4=D.zH[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zH[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zH[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zH[o>>>8&255]
i=D.zH[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zH[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ou(A.aI.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSJ.prototype={}
C.bSK.prototype={
gI(d){var w=this.a.length
return w},
aqR(){return B.rG(this.a,A.iq,null,null)}}
C.cA2.prototype={
Nl(d){var w=d.w,v=Math.max(1,A.i.cL(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abc(v,t+20,u+16,t,u,B.ut(d.x))},
nD(d){return!1}}
C.bTL.prototype={
cKI(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTM(),x.E))},
mW(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mW)
case 6:w=5
return B.b(p.bEc(f,r),$async$mW)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mW,v)}}
C.axB.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9x.prototype={
A(d,e){if(e==null)return!1
if(J.bW(e)!==B.b2(this))return!1
return e instanceof C.a9x&&e.a===this.a},
gX(d){return B.bx(B.b2(this),B.xo(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h3v)return"["+(w+B.eb(this.a))+"]"
return"[ObjectKey "+(w+B.eb(this.a))+"]"}}
C.a29.prototype={
S(){return new C.aL0(B.aR(x.N))},
cYo(d){return this.d.$1(d)},
cW4(){return this.e.$0()}}
C.aL0.prototype={
Y(){this.a2()
this.PM()},
PM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cW4(),$async$PM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fi5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PM,v)},
ZY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fi9(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fia(t))
w=3
return B.b(C.ap0(p),$async$ZY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fib(t,s,p))
w=4
return B.b(t.PM(),$async$ZY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZY,v)},
a2e(d){return this.cuN(d)},
cuN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fi6(t))
s=J.t(d,"id")
w=3
return B.b(C.c3J(J.k(s==null?"":s)),$async$a2e)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fi7(t))
w=1
break}q=C.hgP(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYo(B.a([q],x.D)),$async$a2e)
case 4:if(t.c==null){w=1
break}t.m(new C.fi8(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2e,v)},
PL(d,e){return this.bOQ(0,e)},
bOQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.fi0(q),r,null,!0,!0,x.y),$async$PL)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fi1(t))
s=s.h(e,"id")
w=4
return B.b(C.ap_(J.k(s==null?"":s)),$async$PL)
case 4:if(t.c==null){w=1
break}t.m(new C.fi2(t))
w=5
return B.b(t.PM(),$async$PL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PL,v)},
cJH(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iO[B.bL(v)-1]+" "+B.bU(v)},
aTo(d,e){var w=null,v=B.m(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Qc,A.n),w,e,w,w,w,w,w,e)},
aTn(d){return this.aTo(d,44)},
bad(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Qc:u,r=B.m(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,A.xa,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([A.xa,B.q(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bHJ,u,u,u)],p))}return B.E(B.aA(A.c5,B.cT(u,B.A(q,A.l,u,A.bc,A.j,0,u,u),u,u,A.b4,new B.p(u,u,u,r,u,s,A.n),A.h1,u,u,u,u,A.qz,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fif(this,d),u,u,u,u,u,u,!1,A.a4),1)},
coy(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.a_1,n=B.m(18),m=p?A.d5:A.dk
m=B.L(m,A.r,p?1.8:1)
w=this.aTn(A.qO)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aWl,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aWn,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.Qc:q
u=p?q:B.L(A.aT,A.r,1.6)
r=p?D.bZb:q
return B.aA(q,B.cT(q,B.A(B.a([w,A.be,t,B.cT(q,r,q,q,A.b4,new B.p(q,q,u,q,q,v,A.a7),A.fU,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.j,0,q,q),q,q,A.b4,new B.p(o,q,m,n,q,q,A.n),A.fU,q,q,q,A.d3,A.bi,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fi4(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwp(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cJH(J.k(o==null?"":o))
o=B.m(18)
w=B.L(A.dk,A.r,1)
v=r.aTn(A.Pk)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aWl,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aWn,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b6H(A.hX,A.bx,"Bring it back",r.r?q:new C.fic(r,d))
return B.q(q,B.A(B.a([v,A.be,t,p,A.bm,r.b6H(A.ei,A.c0,"Delete",r.r?q:new C.fid(r,d))],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(D.a_1,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBY,q,q,q)},
b6H(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.q(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
av_(d,e,f){var w=null
return new B.D(D.bAY,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fzM,w,w,w),A.ay,B.d(f,w,w,w,w,w,w,D.frM,A.K,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cd
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.c1,x.w).w
u=B.q(i,i,A.f,i,i,new B.p(A.aT,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTo(A.zt,46),A.be,D.bII],t)
if(j.r)s.push(D.esb)
s.push(B.aG(i,i,i,i,A.t8,i,i,i,new C.fii(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.L(A.dk,A.r,1)
o=J.a5(h)
q=B.a([A.X,u,new B.D(D.bEH,s,i),B.q(i,B.A(B.a([j.bad(0,A.za,"Save",j.a.c.length),j.bad(1,A.PC,"Saved",o.gI(h))],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bDH,A.eA,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.m(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Po:A.ee
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vx,i,i,i),1)],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bDD,A.iv,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fvy,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fyL,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fij(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.j,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.av_(A.qO,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.coy(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.erI)
else if(j.e==null)s.push(j.av_(A.a2u,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.av_(A.pq,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwp(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cr,B.cd(u,i,i,Z.amc,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8V()
p=s?i:D.Qc
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b9.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.za,m?A.jY:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bEj,B.aA(i,B.cT(i,B.A(B.a([k,A.aal,new B.dq(1,A.cr,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jY:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.l,i,A.bc,A.j,0,i,i),i,i,A.b4,new B.p(s,i,i,o,n,p,A.n),A.h1,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.q(i,B.bm(!0,B.x(q,A.l,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b7w,i,i,i,i,i,i,i,i)}}
C.oK.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZR.prototype={
S(){return new C.azv(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azv.prototype={
Y(){this.a2()
this.PX()},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a38(t.a.c),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
cCJ(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qD(t.d,new C.cQm(d))
v=w<0
if(v&&C.i2w(d))return t.f
u=t.d
if(v)J.pX(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h70(new C.cQn(t),v)
return t.f=t.f.bG(new C.cQo(t,d),v).eM(new C.cQp())},
Je(d,e,f){return this.ci5(0,e,f)},
b0q(d,e){return this.Je(0,e,!1)},
ci5(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Je=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a7(s,!1).ca(B.e9(new C.cQi(t,e),!1,null,x.H)),$async$Je)
case 3:w=4
return B.b(t.f,$async$Je)
case 4:w=5
return B.b(t.PX(),$async$Je)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Je,v)},
b_E(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dM0:d
this.Je(0,new C.oK(w,v,new B.V(Date.now(),0,!1)),!0)},
c8l(){return this.b_E(null)},
aeI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cQq(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeI)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_E(s)
case 1:return B.h(u,v)}})
return B.i($async$aeI,v)},
Jd(d,e){return this.bOH(0,e)},
bOH(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cQd(e),s,null,!0,!0,x.y),$async$Jd)
case 3:if(g!==!0){w=1
break}t.m(new C.cQe(t,e))
w=4
return B.b(t.f,$async$Jd)
case 4:w=5
return B.b(C.ahz(t.a.c,e.a),$async$Jd)
case 5:w=6
return B.b(t.PX(),$async$Jd)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jd,v)},
DO(d){return this.bGP(d)},
bGP(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cQ9(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DO)
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
return B.b(t.b0q(0,d),$async$DO)
case 9:w=5
break
case 7:w=10
return B.b(F.hhr(r,d.b,null),$async$DO)
case 10:w=5
break
case 8:w=11
return B.b(t.Jd(0,d),$async$DO)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DO,v)},
c1J(){var w,v,u,t,s=null,r=[D.dM3,D.dM1,D.dM2],q=new C.cQg(),p=B.m(26),o=x.V,n=B.a([new B.ac(0,A.G,A.cZ.j(0.4),A.f_,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dvq[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.p_,s,s,s),A.f,s,s,new B.p(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.or,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.fZM,A.U,B.bV(A.bG,l,A.bs,s,6,6),A.aR,B.aA(s,B.q(s,D.f91,A.f,s,s,new B.p(A.c,s,s,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cM,10)],o),s,A.n),s,s,s,s,W.amA,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cQf(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.j,0,A.p),1),new B.a6(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.j,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c6C,A.n),s,s,s,s,D.bER,s,s,s)},
bGN(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.q(v,B.by(B.m(6),new B.an(A.a0,v,A.b2,A.t,B.a([B.ev(A.A,F.apD(d.b),A.f,A.c_),D.eyl,B.ap(v,B.aA(v,B.q(v,D.c_1,A.f,v,v,D.b8t,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQ4(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.foT,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.U,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fvK,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cQ5(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQ6(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eE(B.a([new B.D(O.al8,B.hb(B.aA(s,B.q(s,A.as3,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ac(0,A.G,A.b9.j(0.5),A.I,12)],x.V),E.wR,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9M(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.ny,s,s,s,!0,s,s,s,s,s,D.fZQ,s,s,s,1,s,!0)
if(t.e)r=D.bbW
else{w=t.c1J()
v=B.a([D.fKR,A.ae],r)
if(J.cI(t.d)){u=B.m(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.foi,s,s,s),A.f,s,s,new B.p(D.bha,s,s,u,s,s,A.n),s,s,s,s,A.yR,s,s,s))}r=B.a([new B.of(A6.a0l,new B.mv(w,s),s),new B.of(D.bEd,new B.mv(B.A(v,A.l,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cq(t.d))r.push(D.fgc)
else r.push(new B.of(D.bDF,B.PO(new B.oO(new C.cQr(t),J.ad(t.d),!0,!0,!0,0,B.tp(),s),D.bba),s))
r=B.w2(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bfM,r,s,!1,!1,s,s)}}
C.ZP.prototype={
S(){return new C.azr(B.a([],x.bx))},
UU(d){return this.d.$1(d)}}
C.aGP.prototype={}
C.azr.prototype={
b3A(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b6,A.aQ),w),u=this.gb0p()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aQ),w)
w.aW(0,u)
return new C.aGP(v,w,f)},
EC(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qx,new C.cPy(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b6,A.aQ),v)
t=m.gb0p()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aQ),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aQ),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aQ),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aQ),v)
n.aW(0,t)
r.push(new C.aGP(o,n,p.c))}if(r.length===0)r.push(m.b3A("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpx()
q=r.a
q.UU(q.c)}q=r.d
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
s.P$=0}r.a3()},
gpx(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mP(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rL(n,w,v,t,u)},
Bm(){var w=0,v=B.j(x.H),u=this,t
var $async$Bm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpx()
t=u.a
w=2
return B.b(t.UU(t.c),$async$Bm)
case 2:return B.h(null,v)}})
return B.i($async$Bm,v)},
c9K(){this.m(new C.cPx(this))
this.EC()},
b_j(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPA(w,d,v))
w.EC()},
c9L(d,e){var w=A.d.cB(this.w,e)
this.m(new C.cPI())
this.EC()
$.aW.x1$.push(new C.cPJ(w))},
Rh(d){return this.coo(d)},
coo(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(80,1400,A.eO),$async$Rh)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rh)
case 8:p=f
o=q.b.toLowerCase()
n=J.aj7(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPB(d,n,p))
r.EC()
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
return B.i($async$Rh,v)},
yq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hFg(r,t.gpx()),$async$yq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPz(t,s))
t.EC()
case 1:return B.h(u,v)}})
return B.i($async$yq,v)},
coG(d){var w,v=this,u=null,t=F.fO2(d.c)
if(t==null)return new B.bM(A.a6,u,u,B.ho(D.bT6,D.fNq,new C.cPD(v,d),u),u)
w=x.p
return new B.D(A.cx,new B.an(A.a0,u,A.ad,A.t,B.a([B.by(B.m(12),B.fR(t,A.A,u,u,A.cj,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6I(A.jJ,new C.cPE(v,d)),A.bm,v.b6I(A.cz,new C.cPF(v,d))],w),A.l,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6I(d,e){var w=null
return B.aJ(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hH,B.X(d,A.c,w,w,w,18),w),A.cR,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aU,0,w,w,A.cR,w,w,A.aj)},
JR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bm(),$async$JR)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hhr(s,t.gpx(),new C.cPH(t)),$async$JR)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eE(B.a([new B.D(A.qy,B.ho(D.bXV,D.fTG,m.gaAM(),B.fu(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.as2,l,l,l,new C.cPK(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Z1,l,1,l,l,l,!1,l,!1,E.ny,l,l,l,!0,l,l,l,l,l,D.fOi,l,l,l,1,l,!0),i=Ax.aWG(N.lH,A.c,Af.XN,A.oF,D.fP2,m.gc9J()),h=B.m(18),g=m.gayJ(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j9,12)],x.V)
f=B.aA(l,B.q(l,new B.a6(92,142.1818181818182,B.ev(A.A,F.apD(m.gpx()),A.f,A.dB),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ex,B.E(B.x(B.a([D.h0q,A.ay,B.d(F.hfS(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fBB,l,l,l),A.X,B.dg(E.arl,l,E.aXa,g,B.bo(A.cZ,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.j,0,A.p),1)],k),A.l,l,A.e,A.j,0,l,l),A.f,l,l,new B.p(E.Z1,l,l,h,l,l,A.n),l,l,l,l,A.bi,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.oY,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.U,w,A.U,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lH.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fC8,l,l,l)
r=B.aG(l,l,l,l,D.bWy,l,l,l,v===0?l:new C.cPL(m,v),l,l,l,l,"Move up",A.cf)
q=h.length
p=B.aG(l,l,l,l,D.c22,l,l,l,v===q-1?l:new C.cPM(m,v),l,l,l,l,"Move down",A.cf)
q=q===1?l:new C.cPN(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.q(l,B.x(B.a([new B.c7(A.aL,A.e,A.j,A.l,l,A.p,l,0,B.a([s,A.b3,r,p,B.aG(l,l,l,l,B.X(A.ei,A.pg,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cf)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cg,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.coG(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(E.ny,l,new B.bG(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9x(g),A.eh,D.bCd,l,l,l))}return B.oL(!0,B.c4(j,E.aj6,B.cd(f,l,l,D.bCH,l,l,A.ah,!1),l,!1,!1,i,l),new C.cPO(m),x.C)}}
C.azt.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.ny,q=B.m(16),p=B.m(16),o=s?A.av.j(0.08):A.c.j(0.04)
s=s?A.av.j(0.16):A.cZ.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eM,B.aJ(!1,A.a3,!0,t,B.aP(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(u.e,t,t,t,t,t,t,D.aVH,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eJ,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.j,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bi,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arW.prototype={
S(){return new C.aFD()}}
C.aFD.prototype={
Y(){this.a2()
this.a_F()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a23()},
a23(){var w=0,v=B.j(x.H),u=this,t
var $async$a23=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a23)
case 2:u.d=null
if(u.c!=null)u.m(new C.elT(u))
w=3
return B.b(u.a_F(),$async$a23)
case 3:return B.h(null,v)}})
return B.i($async$a23,v)},
a_F(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.Zu(B.cF(n,0,null),new B.Qa(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iW(0).dh(0,A.qu),$async$a_F)
case 7:if(r.c==null){w=1
break}r.d.tY(!1)
r.m(new C.elR(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.elS(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_F,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccO(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.elU(w))}else{v.qp(0)
w.m(new C.elV(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.m(8*n.d)
m=B.a([D.jB.j(0.92),D.Mo.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qQ,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.Q,0,A.p),o,o,o),new B.p(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bj)}if(p.f)return B.at(B.X(A.aqA,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcO
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.ev(A.A,new B.a6(r,q,new B.AN(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.q(o,B.X(A.hx,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a7),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.by(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccN(),o,o,o,o,o,o,!1,A.a4)}}
C.ya.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jC.prototype={}
C.aer.prototype={
B(d){return B.pe(new C.e8i(this,B.S(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adQ.prototype={
B(d){var w,v,u=null,t=B.S(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.L(D.jB.j(t?0.35:0.4),A.r,1),p=t?D.N2:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.m(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],o)
w=this.c
o=B.E(B.q(u,new B.fF(0.5625,C.ilR(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.an5,u,u,u,u),1)
m=D.jB.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jB,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aJ(!1,A.a3,!0,u,B.aP(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.box,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.alp,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yd.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o5.prototype={}
C.blE.prototype={
a_O(d){var w=null
return new B.bM(A.a6,w,w,B.BX(A.A,B.q(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cdh(){return this.a_O(1)},
azp(d){var w=null,v=B.m(8),u=B.L(A.is,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agH,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.is,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.is,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.l,v,A.bc,A.j,0,v,v),A.ay,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azp("TAARIFA ZA WANANDOA"),A.am,w.cdh(),A.cU,w.a_O(0.9),A.cU,w.a_O(0.7),A.U,w.azp("TAMKO LA MAKUBALIANO"),A.fM,w.a_O(1),A.cU,w.a_O(0.95),A.U,w.azp("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.j,0,A.p)}}
C.aeu.prototype={
B(d){return B.pe(new C.eqF(B.S(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.ag9.prototype={
B(d){var w,v,u,t,s,r=null,q=B.S(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bo3:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.m(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],l)
w=this.c
v=C.hgn(w.a)
if(v==null)v=A.d.gH(D.SM)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fF(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bR(0,B.fR(C.hgm(v.d),A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.am2,new C.blE(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.an5,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.N3,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aJ(!1,A.a3,!0,r,B.aP(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bgp,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.alp,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.la.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9_.prototype={}
C.WX.prototype={
S(){var w=$.aw()
return new C.aFU(new B.cw(null,x.A),new B.au(A.ax,w),new B.au(A.ax,w),B.mX(0,null,null),A.d.gH(D.a5A),D.dWq,B.a([],x.L),B.a([],x.gE))}}
C.aFU.prototype={
Y(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.Ad(C.fRW(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fQS().bG(new C.etC(v),w)
$.rh().jp(0,"assets/images/ngmy_logo.png").bG(new C.etD(v),w).eM(new C.etE())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a3()},
afz(d){var w=null,v=this.c
if(v!=null)v.M(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
Jw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(88,1600,A.eO),$async$Jw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Jw)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hFx(m,p),$async$Jw)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFX(new B.q9(o,1),m),$async$Jw)
case 10:if(r.c!=null)r.m(new C.ete(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afz("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jw,v)},
XL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hFx(s,q),$async$XL)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFX(new B.q9(r,1),s),$async$XL)
case 4:if(t.c!=null)t.m(new C.eta(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XL,v)},
afA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etl(q))
t=4
q.a.toString
p=C.iqT()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afA)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etm(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afz(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etn(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afA,v)},
a_T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.etg(q,i))
t=4
q.a.toString
p=C.iqS()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_T)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eth(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.eti(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etj(q))
$.aW.x1$.push(new C.etk(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_T,v)},
cdx(d){this.m(new C.etf(this,d))},
ET(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ET=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etc(q))
t=4
w=7
return B.b($.aW.gmS(),$async$ET)
case 7:w=8
return B.b(B.bQ(A.mW,null,x.H),$async$ET)
case 8:k=$.aW.aq$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qj))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$ET)
case 9:o=e
w=10
return B.b(o.hs(A.hh),$async$ET)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.ahB(J.eT(A.dN.gaU(n)),"ngmy_news.png","image/png"),$async$ET)
case 11:m=e
q.afz(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afz(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etd(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ET,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.lp,a2,a2,a2,new C.ett(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bYq,a2,a2,a2,new C.etu(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oE,a2,a2,a2,a4?a1.gb1I():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eE(v,a2,a2,!0,!0,A.BZ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f9c,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f_,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fF(0.7142857142857143,B.ev(A.A,new B.em(new C.b2Z(t,s,r,a1.x,a2),a1.d),A.f,A.dB),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,R.tF,a2,a2,a2)
t=a1.as?a2:a1.gcdw()
t=B.a([B.E(B.dg(D.bZc,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cg,a2,a2,a2),t,B.bo(D.uc,a2,a2,a2,A.c,A.h5,a2,a2,new B.b9(B.m(14),Q.vQ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.m(10),B.fR(r,A.A,a2,a2,A.cj,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aG(a2,a2,a2,a2,D.bVP,a2,a2,a2,a1.as?a2:a1.gbNi(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,R.tF,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVe("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dpi[o]
p.push(B.n2(a2,D.uc,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pR,a2,a2,a2),A.hj,new C.etv(a1,n),a2,a2,Q.vQ,a2))}p=B.bV(A.bG,p,A.bs,a2,6,8)
m=a1.Q
m=B.bV(A.bG,B.a([D.fZZ,A.be,B.jl(a2,a2,a2,D.fJv,a2,new C.etw(a1),m==="en",a2,a2,a2,a2),A.ae,B.jl(a2,a2,a2,D.fJq,a2,new C.etx(a1),m==="sw",a2,a2,a2,a2)],w),A.vK,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,R.tF,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5A,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bP(i,i.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTH(g==null?h.a(g):g))}k=B.cd(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5A,10,a2,j),h=j.$ti,j=new B.bP(j,j.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTH(g==null?h.a(g):g))}j=B.cd(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdz()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.I,18)],v)
v=B.a([u,A.aB,new B.D(A.cx,s,a2),t,A.aB,new B.D(A.cx,r,a2),q,A.U,p,A.X,m,A.aB,new B.D(A.cx,l,a2),new B.a6(a2,78,k,a2),A.U,new B.a6(a2,78,j,a2),A.aR,B.aA(a2,B.q(A.A,B.A(B.a([D.bZ6,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fx,a2,a2,a2)],w),A.l,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.uZ,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dY,B.A(B.a([D.dGI,A.au,D.bJ3],w),A.l,a2,A.e,A.j,0,a2,a2),A.U],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a6
q=e?A.b9.j(0.35):D.uc
p=new B.aN(16,16)
d=new B.ay(A.by,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fzw,a2,a2,a2),A.f,a2,A8.XB,new B.p(q,a2,new B.bG(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cx,A.iv,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dat[o]
t.push(B.n2(a2,D.uc,B.d(a0,a2,a2,a2,a2,a2,a2,A.KD,a2,a2,a2),A.hj,new C.ety(a1,a0),a2,a2,Q.vQ,a2))}u.push(B.bV(A.bG,t,A.bs,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVe("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.etz(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdy()
u.push(B.A(B.a([t,A.ae,B.IE(A.zx,s,B.o_(a2,A.b9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1I()
u.push(B.dg(A.oE,a2,D.fVo,t,B.bo(A.cX,a2,a2,a2,a2,A.Kn,a2,a2,new B.b9(B.m(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cd(v,a1.r,a2,A.alO,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.L(E.ko.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.q(a2,B.A(B.a([E.aam,A.ex,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jx,a2,a2,a2)],w),A.l,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(E.BP,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bF8,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.BZ,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aVe(d){var w=null
return B.bt(w,new B.b6(4,B.m(14),A.a1),w,A.eY,w,w,w,w,!0,w,w,w,w,w,w,D.uc,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.EC,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTH(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bD:A.by
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kt,t,t,t,t),A.fM],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bBc,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jp,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.q(t,B.x(w,A.l,t,A.bc,A.j,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iK,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.etb(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ad.prototype={
bfi(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ad(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOr(d){var w=null
return this.bfi(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjE(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjC(),B.U(w).k("N<1,n>")).bY(0,new C.cjD())
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
return this.bfi(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG5(d){return this.f}}
C.tN.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cb.prototype={
a7(){return"NewsFrame."+this.b}}
C.lx.prototype={}
C.b2Z.prototype={
rV(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1K(d,e,f,g){return this.rV(d,e,null,1.25,f,A.bt,g)},
QA(d,e,f,g,h){return this.rV(d,e,f,1.25,g,A.bt,h)},
azv(d,e,f,g,h){return this.rV(d,e,null,f,g,A.bt,h)},
azu(d,e,f,g,h){return this.rV(d,e,f,g,0,A.bt,h)},
b1M(d,e,f,g,h){return this.rV(d,e,null,f,0,g,h)},
cdD(d,e,f,g,h,i){return this.rV(d,e,f,g,0,h,i)},
azt(d,e,f,g){return this.rV(d,e,null,f,0,A.bt,g)},
afD(d,e,f){return this.rV(d,e,null,f,0,A.bt,A.cT)},
b1L(d,e,f,g,h){return this.rV(d,e,f,g,0,h,A.cT)},
cdC(d,e,f,g){return this.rV(d,e,null,f,0,g,A.cT)},
cdB(d,e,f,g){return this.rV(d,e,f,g,0,A.bt,A.cT)},
afE(d,e,f,g,h,i){return this.rV(d,e,f,g,h,A.bt,i)},
b1J(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.en(d,u,u,A.cJ,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jg(1),u,u,h,u,A.bY,u,A.cs)
v.o5(g)
if(!v.b.a.c.gaGC())return w
w-=2}return j},
afB(d,e,f,g,h,i,j,k){return this.b1J(d,e,f,g,h,i,j,k,A.bt)},
aBH(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.j,0,A.p)},
aBG(d){return this.aBH(null,!1,d)},
aiB(d,e){return this.aBH(null,d,e)},
cvw(d,e){return this.aBH(d,!1,e)},
gb3X(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXW(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Ph(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afB(w.gaXW(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXW(),v,g,A.a2,v,v,v,w.azu(u,t,f,1.02,A.V),e,v,v)},
aY0(d){return this.Ph(d,A.K,null,2,78,30)},
acR(d,e,f,g,h){return this.Ph(d,e,null,f,g,h)},
c1C(d,e,f,g,h){return this.Ph(d,A.K,e,f,g,h)},
c1B(d,e,f){return this.Ph(d,A.K,null,e,f,30)},
SA(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jG,B.d(s,u,g,A.a2,u,u,u,v.b1L(w,v.b1J(t,w,A.cT,d,g,h,15,1.2,A.cH),f,1.2,A.cH),e,u,u),u)},
b9S(d){return this.SA(d,A.K,null,3,24)},
aDa(d,e,f,g){return this.SA(d,e,null,f,g)},
cDd(d,e,f){return this.SA(d,A.K,e,3,f)},
b9T(d,e){return this.SA(d,e,null,3,24)},
cDb(d,e){return this.SA(d,A.K,null,3,e)},
cDc(d,e,f){return this.SA(d,e,null,3,f)},
at2(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f3,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QA("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.j,0,v,v)},
Ob(){return this.at2(null,!0)},
at1(d){return this.at2(null,d)},
bJf(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.hU,new B.a6(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdC(this.d.as,13.5,1.2,A.cH),e,w,w),w),w)},
w6(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3X(),h=A.o.ap(j.bD(B.bZ(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.idA(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1K(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afB(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afB(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eP,l,l,l,m.afE(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.l,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.U,B.A(B.a([B.d(C.bFc(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iR,A.j,0,l,l),A.am,m.aiB(!0,3)],s),A.l,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ex,B.E(B.d(i,l,1,A.eP,l,l,l,m.azt(v,u*0.9,1,A.V),l,l,l),1)],w),A.l,l,A.e,A.j,0,l,l),A.X,B.A(B.a([B.d(C.bFc(j),l,l,l,l,l,l,m.QA(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iR,A.j,0,l,l),A.U,m.cvw(B.b0(h),3)],w),A.l,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb3X()
v=B.d("NGMY",l,l,l,l,l,l,m.azv(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eM(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rV(k,r*0.72,o,1.05,-0.5,A.cH,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b3,new B.dq(1,A.cr,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afE(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.e_,l,l),l)],n),A.l,l,A.e,A.j,0,l,l),A.U,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iR,A.j,0,l,l)
t=m.aiB(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azt(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ay,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.aiB(!0,1.4),A.ay,B.d(C.bFc(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ay,m.aBG(3)],h),A.l,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azv(v,u,1,3,A.V),A.K,l,l),A.U,m.aiB(!0,1.2),A.ay,B.A(B.a([B.d(C.bFc(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iR,A.j,0,l,l),A.ay,m.aBG(3)],h),A.l,l,A.e,A.j,0,A.p)}},
ae2(d){return this.w6(d,!1)},
afC(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afE("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cdA(d,e){return this.afC(d,null,e,null)},
b_b(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dh(v),12)===0?12:A.o.F(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.azu("Roboto",15,t,1,A.cC),r=B.X(E.aoI,t,w,w,w,18),q=A.a.aC(A.oJ[B.bL(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bU(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h3,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
ayb(){return this.b_b(A.n4)},
b6V(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afE("Roboto",this.afB(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBK(d,e,f){return this.b6V(d,e,f,30)},
aDd(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.us,B.d(v,w,e,A.a2,w,w,w,this.cdB("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9X(d){return this.aDd(d,3,22)},
cDo(d,e){return this.aDd(d,e,22)},
ug(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BJ(D.bI_,w,s)
if(v==="sepia")w=new B.BJ(D.bHZ,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.at(B.X(A.z5,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.p(s,s,s,s,s,new B.c0(A.A,0.95,A.x,s,0,B.a([A.L,A.YX.j(0.38)],x.O),s,s),A.n),A.bj))
return new B.a6(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.ug(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.eA,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.mg,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ens,14)],x.V)
v=k.ug(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eM(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1L(i.as,13.5,D.bi9,1.1,A.cH),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(D.bm2,j,j,j,w,j,A.n),j,e,j,j,D.bCC,j,j,d),j)
case 3:w=B.m(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.by(B.m(25),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a6(d,e,B.at(B.q(j,B.hU(k.ug(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a7),j,t,j,j,A.mg,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.en8,10)],x.V)
return B.eM(A.A,0.025,new B.a6(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bR(0,B.q(j,k.ug(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rX,j,j,j),0,0,0),B.ap(j,B.eM(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eM(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a6(d,e,B.b4(B.nU(k.ug(d,e),A.aq,D.htA),new C.beE(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ug(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.i.bh(s));++m){l=new B.aN(2,2)
n.push(B.q(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c7(A.aL,A.qU,A.j,A.l,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.ep,j,j,j,e,j,j,D.bHe,j,j,d)
case 8:w=d/2
v=B.xz(A.fL,new B.aN(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.by(B.xz(A.hP,new B.aN(w,w)),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h4,22)],x.V)
return B.q(j,k.ug(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a6(d,e,B.nU(k.ug(d,e),A.aq,D.hBQ),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.ug(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.eA,j,j,d)}},
aRd(d,e){return this.d.e===D.Tn?A.bM:this.bJf(d,e)},
Xg(d){return this.aRd(d,A.K)},
gaCu(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCt(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1M(v.Q,19,1.15,A.cH,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QA("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.ay)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afD(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jm(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bi,n,n,d)},
gclT(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaw(d,e,f,g){return B.ct(new C.cjF(this,e,d,f,g))},
aav(d){return this.aaw(d,22,!0,18)},
Xu(d,e){return this.aaw(d,22,!0,e)},
aSh(d,e,f){return this.aaw(d,22,e,f)},
bLe(d,e,f){return this.aaw(d,e,!0,f)},
bcW(d,e,f,g){return B.ct(new C.cjG(this,e,d,g,!0,f))},
ckG(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ae2(824),A.aB,k.aY0(824),k.b9S(824),A.U,k.Ob(),A.af,B.at(k.qW(824,360),j,j,j),k.Xg(824),A.af,B.E(k.aav(3),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ae2(824),A.aR,new B.a6(j,350,B.A(B.a([new B.a6(440,j,B.x(B.a([k.acR(440,A.bn,3,62,26),k.aDa(440,A.bn,2,20),A.b3,k.at2(B.b0(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Ko,B.x(B.a([k.qW(362,310),k.Xg(362)],w),A.l,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.X,k.aBG(2),A.af,B.E(k.aav(3),1)],w),A.al,j,A.e,A.j,0,A.p)
case 2:w=k.w6(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1C(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cDd(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.l,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Ci,j,j,j)
u=B.a([B.at(k.qW(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tn){h=A.w.j(0.65)
u.push(B.ap(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azu(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lM,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.U,k.Ob(),A.X,B.E(k.Xu(2,21),1)],t),A.al,j,A.e,A.j,0,A.p)
case 3:h=k.w6(824,!0)
w=k.qW(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.ba,j,A.ad,A.t,B.a([w,B.ap(0,B.q(j,k.Ph(780,A.bn,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.ba,A.x,v,j,j),A.n),j,j,j,j,D.bFr,j,j,j),j,j,0,0,j,j)],u),j),k.b9T(824,A.bn),A.U,k.Ob(),A.X,B.E(k.aav(3),1)],u),A.al,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ae2(824),A.aB,k.aY0(824),k.b9S(824),A.U,k.Ob(),A.af,B.E(k.bcW(3,300,B.x(B.a([k.qW(300,300),k.Xg(300)],h),A.l,j,A.e,A.j,0,A.p),360),1)],h),A.al,j,A.e,A.j,0,A.p)
case 5:w=k.w6(824,!0)
v=x.p
u=B.x(B.a([k.acR(440,A.bn,3,62,26),k.aDa(440,A.bn,2,20),A.b3,k.at1(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bA,new B.a6(j,400,B.A(B.a([new B.a6(440,j,u,j),A.aTC,new B.D(A.hU,k.qW(364,h.e===D.Tn?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Xu(2,21),1)],v),A.al,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.ae2(824),A.af,k.c1B(824,2,70),k.cDb(824,21),A.U,k.Ob(),A.af,B.E(k.bcW(3,340,B.at(k.qW(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 7:w=k.w6(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFc(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QA(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bi,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1M(h.Q,24,1.15,A.cH,A.V),j,j,j))
v.push(A.b3)
if(k.gaCu())v.push(k.aCt(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a6(230,j,B.x(v,A.al,j,A.e,A.j,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.aln,j,j,j,1.2),new B.a6(570,j,B.x(B.a([k.acR(570,A.bn,3,62,28),k.cDc(570,A.bn,20),A.U,k.at1(!1),A.U,B.at(k.qW(570,330),j,j,j),k.Xg(570),A.X,B.E(k.aSh(2,!1,17),1)],t),A.al,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.al,j,A.e,A.j,0,A.p)
case 8:w=k.w6(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QA(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.q(j,B.x(B.a([t,A.am,k.Ph(788,A.bn,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bDI,j,j,j),k.b9T(824,A.bn),A.X,B.at(k.qW(824,310),j,j,j),k.Xg(824),A.U,k.Ob(),A.X,B.E(k.aav(3),1)],s),A.al,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w6(824,!0),A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([k.qW(824,430),B.ap(18,k.cdA(k.c.b,17),j,j,18,j,j,j)],w),j),A.bA,k.aBK(824,3,66),k.b9X(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ayb(),A.aB,B.E(k.Xu(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w6(824,!0),A.bA,new B.a6(j,500,B.A(B.a([new B.a6(410,j,B.x(B.a([k.afC(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6V(410,4,58,28),k.aDd(410,6,20),A.b3],w),A.E,j,A.e,A.j,0,A.p),j),W.aTD,k.qW(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aB,k.ayb(),A.aR,B.E(k.Xu(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 12:w=k.w6(824,!0)
v=k.qW(824,420)
u=B.hQs(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ap(22,B.fx(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdD(i,30,A.c,1,A.cH,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bFH,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bA,k.aBK(824,3,62),k.b9X(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.b_b(A.lR),A.aB,B.E(k.Xu(2,18),1)],r),A.al,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w6(824,!0)
u=h.w
t=x.p
w=B.a([k.qW(824,380),B.ap(j,k.afC(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBK(824,2,60)
r=k.cDo(824,2)
p=k.ayb()
o=B.E(k.aSh(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ad,A.t,w,j),A.aR,s,r,A.X,p,A.aB,o,A.af,B.q(j,B.A(B.a([B.by(B.m(14),k.ug(150,104),A.aq),A.oV,B.E(B.x(B.a([k.afC("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.U,B.d(q,j,2,A.a2,j,j,j,k.azt(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.Q,0,A.p),1),B.X(A.eJ,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bi,j,j,j)],t),A.al,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.w6(824,!0),A.bA,k.acR(824,A.bn,3,62,30),k.aDa(824,A.bn,2,22),A.X,k.at1(!1),A.X,B.at(k.qW(824,330),j,j,j),k.aRd(824,A.bn),A.aR,B.E(k.bLe(2,40,21),1)],x.p),A.al,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.p(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bj),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.bb6(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bGd,B.x(B.a([B.E(t.ckG(),1),A.U,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fM,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1K(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QA(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iR,A.j,0,s,s)],o),A.al,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dy(!0,B.b4(s,s,s,new C.bu8(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fR(q,A.A,s,s,A.cj,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n4,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azv(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.dy(!0,B.da(B.q(s,B.A(o,A.l,s,A.e,A.Q,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bHn,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a6(900,1260,B.jm(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.beF.prototype={
ju(d){return C.huh(d)},
k9(d){return!1}}
C.beE.prototype={
a5(d,e){var w,v=C.huh(e)
$.Q()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aD(d){return!d.b.A(0,this.b)}}
C.bwF.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e1()
o.cY(3)
w=$.Q()
v=B.a([],x.v)
u=new B.aF(w.r,A.ai,null,null,v)
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
u.E(new B.bv())
return u},
k9(d){return!1}}
C.bb6.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e1()
o.cY(7)
$.Q()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.c0(A.A,0.5,A.x,p,0,B.a([A.Yp.j(0.13),A.L],v),p,p).aK(0,B.bY(r,q)))
d.N(r,q,w)}w.sav(p)},
aD(d){return!1}}
C.bu8.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.cs,u,u,u,B.cP(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dz,A.bY)
s.e5()
w=d.c
J.bp(w.save())
w.translate(t/2,e.b*0.52)
d.hX(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.o(-v/2,-t.gba(t)/2))
w.restore()},
aD(d){return!d.b.A(0,this.b)}}
C.WY.prototype={
S(){return new C.aFX()}}
C.aFX.prototype={
Y(){var w=this
w.a2()
B.fIg(w.a.c,null).bG(new C.euo(),x.g7).bG(new C.eup(w),x.a)
w.a.toString},
gaPY(){var w=D.azq[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazw(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPY()
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
return new B.a1(q,w,q+s,w+t)},
a_V(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_V=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eub(r))
t=4
q=r.gazw()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.Q()
n=new B.q_(new B.pz())
m=B.zv(n,null)
i=B.K()
i.z=A.he
m.q2(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o0().xD(J.hjv(p),J.hjv(o)),$async$a_V)
case 7:l=e
w=8
return B.b(l.hs(A.hh),$async$a_V)
case 8:k=e
j=r.c
if(j!=null){j=B.a7(j,!1)
i=k
i.toString
j.O(J.eT(J.vW(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.euc(r))
r.c.M(x.q).f.U(D.fiR)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_V,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.lp,s,s,s,new C.eui(d),s,s,s,s,s,s),p=x.p
q=B.eE(B.a([B.bN(!1,D.fY1,s,s,!0,s,s,s,t.y||r==null?s:t.gcdE(),s,s)],p),s,s,!0,!0,A.BZ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h13,s,s,s,1,s,!0)
if(r==null)p=A.kK
else{w=B.E(new B.D(A.bQ,B.at(new B.fF(t.gaPY(),B.ct(new C.euj(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iK,B.jl(s,s,s,B.d(D.azq[u].a,s,s,s,s,s,s,A.ab0,s,s,s),s,new C.euk(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bm(!0,B.x(B.a([new B.a6(s,40,B.cd(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZT,B.E(B.kV(s,s,s,6,1,new C.eul(t),t.f),1),D.bZt],p),A.l,s,A.e,A.j,0,s,s),D.fVh,A.am,B.bN(!1,D.fUZ,s,s,!0,s,s,s,new C.eum(t,d),s,s)],p),A.l,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Zd,s,s,s,s,s,s,D.bD3,s,s,s)],p),A.l,s,A.e,A.j,0,A.p)}return B.c4(q,A.BZ,p,s,!1,!1,s,s)}}
C.bec.prototype={
a5(d,e){var w
$.Q()
w=B.K()
w.z=A.cj
return d.q2(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aD(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a18.prototype={
S(){var w=$.aw(),v=x.A
return new C.aHl(new B.au(A.ax,w),new B.au(new B.ba("NGMY",A.b6,A.aQ),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6c),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oU.prototype={}
C.aHl.prototype={
gaY9(){var w,v,u=this
if(u.p1)w=new B.wc(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.i.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f3h(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a3()},
Zu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rh().jp(0,"assets/images/ngmy_logo.png"),$async$Zu)
case 7:q=e
p=J.eT(J.vW(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFX(new B.q9(p,1),o),$async$Zu)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f29(r,p))
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
return B.i($async$Zu,v)},
QD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l8(92,1800,A.eO),$async$QD)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$QD)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFX(new B.q9(p,1),n),$async$QD)
case 9:if(r.c==null){w=1
break}r.m(new C.f2x(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QD,v)},
b6h(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a_=w.bb=w.bn=w.y2=0
w.b7=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c9=w.bH=w.bm=0
w.cO=w.c6=!1},
aZW(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCC(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dsn)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCC(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCC(C.he7(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCC(C.he7(1-a0*0.5,n,n,n),w)}return a1?C.bCC(C.he7(-1,255,255,255),w):w},
aDj(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xB(u,v,w)
this.dx.py(new C.f2H(t),!0)
return t},
b8R(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDj()
w=C.io1(e.d.a.a,e.db)
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
return C.ikt(d,k,v,a0,j,e.gaY9(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cB0(){return this.b8R(null)},
DN(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmS(),$async$DN)
case 3:w=4
return B.b(B.bQ(A.eR,null,x.H),$async$DN)
case 4:w=5
return B.b($.aW.gmS(),$async$DN)
case 5:s=$.aW.aq$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qj)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DN)
case 7:w=6
return B.b(e.hs(A.hh),$async$DN)
case 6:q=e
u=q==null?null:J.eT(A.dN.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DN,v)},
abq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1T(q))
t=4
w=7
return B.b(q.DN(),$async$abq)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcu().aN(p)
n=C.Cp(null,null,null,null,D.oO,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8R(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a7(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f1U(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abq,v)},
B4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1R(q))
t=4
w=7
return B.b($.aW.gmS(),$async$B4)
case 7:w=8
return B.b(B.bQ(A.mX,null,x.H),$async$B4)
case 8:w=9
return B.b($.aW.gmS(),$async$B4)
case 9:k=$.aW.aq$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qj))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B4)
case 10:o=e
w=11
return B.b(o.hs(A.hh),$async$B4)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.ahB(J.eT(A.dN.gaU(n)),"ngmy_quote.png","image/png"),$async$B4)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.M(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f1S(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B4,v)},
cnP(){var w=this.p4
w.toString
return B.ct(new C.f2q(this,w))},
b1T(d,e){var w=null
return B.bt(w,w,w,w,w,D.ftL,w,w,!0,new B.b6(4,B.m(16),Q.vQ),w,w,w,w,w,D.uc,!0,w,w,w,w,new B.b6(4,B.m(16),D.b5a),w,w,w,w,w,w,w,w,Ac.EK,e,w,w,w,w,w,w,w,D.fzm,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yz(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b9,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aWi,w,w,w))
return new B.D(H.ald,B.A(u,A.l,w,A.e,A.j,0,w,w),w)},
b1S(d,e){var w=null,v=B.m(18),u=B.L(A.by,A.r,1)
return B.q(w,B.aJ(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k9),A.f,w,w,new B.p(D.uc,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
we(d){return this.b1S(d,A.bF)},
ox(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uZ:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.L(f?A.L:A.by,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jY,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jY,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cT(r,B.A(s,A.l,r,A.e,A.Q,0,r,r),r,r,A.b4,new B.p(w,r,u,v,r,p,A.n),A.h1,r,r,r,r,A.GM,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahx(d,e,f){return this.ox(d,null,e,f)},
azA(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b9.j(0.28):A.c.j(0.05),t=g?A.eL:A.by,s=x.p
v=B.a([B.cT(w,d,w,w,A.b4,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h1,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.ay,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a6(j,w,B.x(v,A.l,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1W(d,e,f,g,h,i){return this.azA(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aV5,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.erM,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f2D(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.aaX,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a0O,u,u,u))
s=B.A(s,A.l,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.ab9(w).cPN(A.b9,A.by,A.b9.j(0.2),A.c,D.f8s,4)
return new B.D(A.yz,B.x(B.a([s,B.YS(B.kV(u,u,u,g,f,new C.f2E(this,h),A.i.D(e,f,g)),w)],t),A.l,u,A.e,A.j,0,A.p),u)},
ajB(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ak_(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dk:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bSH:o
n.push(B.aA(o,B.q(o,t,A.f,o,o,new B.p(s,o,new B.bG(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f2G(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bV(A.bG,n,A.bs,o,10,10)},
bPp(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6c
else{v=x.a8
w=B.C(new B.Y(D.a6c,new C.f1J(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1T("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f1K(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.abj,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1T("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f1L(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yz("DESIGNS",A.uL)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d1f[q]
r.push(new B.D(A.iK,o.ahx(p,o.x===p,new C.f1M(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.ci(B.A(r,A.l,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a6(n,118,B.hN(n,new C.f1N(o,w),w.length,n,n,A.aL,new C.f1O(),!1),n),A.U,o.b1S(B.x(B.a([B.iQ(A.b9,n,n,A.ag,!0,new C.f1P(o),n,D.fLY,n,D.fI6,o.k3),B.iQ(A.b9,n,n,A.ag,!0,new C.f1Q(o),n,n,n,D.fFi,o.k2)],s),A.l,n,A.e,A.j,0,A.p),A.alN)],s),A.E,n,A.e,A.j,0,A.p)},
cJZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDj()
if(a7.length===0)return a5.we(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KN,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aC(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gan(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("cj.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cD(m,new C.f36(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f3d(a5)
j=new C.f3f()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KN,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b9.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eL:A.by
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aC(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bG(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Ou,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f37(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.we(B.bV(A.bG,o,A.vK,a6,6,6))
i=B.a([a5.ox("All words",K.aqi,!1,new C.f38(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahx("Sentence "+a3,!1,new C.f39(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahx("Clear picks",!1,new C.f3a(a5)))
i=B.bV(A.bG,i,A.bs,a6,8,8)
g=a5.yz("SIZE OF THE PICKED WORDS",D.apI)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dyw[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f3b(e,k)
f.push(a5.ahx(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bV(A.bG,f,A.bs,a6,8,8),A.X,a5.ox("Make every word normal",A.k7,!1,new C.f3c(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cEV(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bIF,B.d(A.d.fa(D.aBb,new C.f2Q(q)).b,p,p,p,p,p,p,D.fs7,p,p,p)],o),A.l,p,A.e,A.j,0,p,p),m=B.ct(new C.f2R(q)),l=q.yz("HIGHLIGHT BEHIND THE WORDS",A.a2J),k=q.p1?-1:q.k4
k=q.ak_(k,new C.f2S(q),D.dcE)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.X,m,l,B.bV(A.bG,B.a([k,B.aA(p,B.q(p,D.bVJ,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.flt,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f2V(q),p,p,p,p,p,p,!1,A.a4)],o),A.vK,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KN,p,p,p)],o)
if(q.gaY9()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajB("Colour",l,0,360,new C.f2W(q),""+A.i.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajB("Shade",k,0.15,0.9,new C.f2X(q),""+A.i.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f2Y(q),1,""+A.i.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.we(B.x(m,A.l,p,A.e,A.j,0,A.p))],o))}n.push(q.yz("LOOK",A.wL))
m=B.a([q.ox("Bold",I.apG,q.fy,new C.f2Z(q)),q.ox("Italic",I.apH,q.go,new C.f3_(q))],o)
for(u=0;u<3;++u){l={}
k=D.d2w[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uZ:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.by,1,A.r,-1)
m.push(B.aA(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bG(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f30(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bV(A.bG,m,A.vK,p,8,8))
n.push(q.yz("COLOUR",A.ml))
n.push(q.ak_(q.fx,new C.f31(q),D.doJ))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KN,p,p,p))
n.push(q.yz("SIZE AND PLACE",A.HL))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f2T(q),1,""+A.i.V(m*100)+"%")
l=q.k1
n.push(q.we(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f2U(q),0.3,""+A.i.V(l*100))],o),A.l,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cnQ(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.m(22)
v=B.L(A.b9.j(0.6),A.r,1.6)
u=B.a([A.b9.j(0.18),A.bD.j(0.12)],x.O)
return B.aA(q,B.q(q,B.x(B.a([B.q(q,D.c0m,A.f,q,q,D.b88,q,62,q,q,q,q,q,62),A.aB,D.fJo,A.am,D.fOg],x.p),A.l,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(D.uc,q,v,w,q,new B.a9(A.a6,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bEi,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1V(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.by(B.m(12),new B.a6(46,62,B.fR(p,A.A,120,q,A.cj,A.c_,!1,q,!1,q,q),q),A.aq),A.be,B.E(B.x(B.a([D.fIV,A.U,B.bV(A.bG,B.a([r.ox("Change",A.jJ,!1,r.gb1V()),r.ox("Remove",A.ei,!1,new C.f2u(r))],w),A.bs,q,6,6)],w),A.E,q,A.e,A.j,0,A.p),1)],w),A.l,q,A.e,A.j,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dkQ[t]
u.push(r.ox(s.b,s.a,r.at===t,new C.f2v(r,t)))}u=B.bV(A.bG,u,A.bs,q,8,8)
switch(r.at){case 0:s=r.c5M(p)
break
case 1:s=r.c4H()
break
case 2:s=r.bLd()
break
case 3:s=r.bRI()
break
default:s=r.bNj()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.X,new B.bM(A.a6,q,q,r.ox("Reset the whole picture",A.k7,!1,new C.f2w(r)),q)],w),A.E,q,A.e,A.j,0,A.p)},
c5M(d){var w=this,v=x.p
return B.x(B.a([B.bV(A.bG,B.a([w.ox("Auto enhance",E.a2n,!1,new C.f2m(w)),w.ox("Make words easy to read",A.oB,!1,new C.f2n(w))],v),A.bs,null,8,8),A.aB,B.ct(new C.f2o(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c4H(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f20(o),0,A.i.ac(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f21(o),0,""+A.i.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f22(o),1,""+A.i.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f23(o),0,""+A.i.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f24(o),0,""+A.i.V(t*100))
s=o.a_
s=o.kB("Darken",s,0,0.85,new C.f25(o),0,""+A.i.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f26(o),0,""+A.i.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f27(o),0,""+A.i.V(q*100))
p=o.aR
return o.we(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f28(o),0,""+A.i.V(p*100))],x.p),A.l,null,A.e,A.j,0,A.p))},
bLd(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f1m(s),1,""+A.i.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f1n(s),0,""+A.i.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f1o(s),0,""+A.i.V(v*100))
u=s.x2
t=x.p
u=s.we(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f1p(s),0,""+A.i.V(u)+"\xb0"),new B.bM(A.a6,r,r,s.ox("Negative",D.bQG,s.y1,new C.f1q(s)),r)],t),A.l,r,A.e,A.j,0,A.p))
v=s.yz("COLOUR WASH",A.Pv)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azP)
t=B.a([u,v,s.ak_(w,new C.f1r(s),q),A.U],t)
if(s.b7!=null){q=s.b6
t.push(s.we(s.ajB("Wash strength",q,0,0.9,new C.f1s(s),""+A.i.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bRI(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f1V(r),0,A.o.u(A.i.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f1W(r),0,""+A.i.V(w*100))
v=r.aG
u=x.p
v=r.we(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f1X(r),0,""+A.i.V(v*100))],u),A.l,null,A.e,A.j,0,A.p))
w=r.yz("LIGHT LEAK",D.bQp)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azP,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.ak_(q,new C.f1Y(r),t),A.U],u)
if(r.bf!=null){q=r.bK
u.push(r.we(r.ajB("Leak strength",q,0,1,new C.f1Z(r),""+A.i.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bNj(){var w,v,u,t,s=this,r=s.aP
r=s.kB("Zoom",r,1,3,new C.f1w(s),1,""+A.i.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f1x(s),0,""+A.i.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f1y(s),0,""+A.i.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.we(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f1z(s),0,""+A.i.V(u)+"\xb0")],t),A.l,null,A.e,A.j,0,A.p)),A.X,B.bV(A.bG,B.a([s.ox("Turn 90\xb0",H.aqM,!1,new C.f1A(s)),s.ox("Flip sideways",A.CN,s.c6,new C.f1B(s)),s.ox("Flip upside down",A.CN,s.cO,new C.f1C(s))],t),A.bs,null,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c8u(){var w=null,v=B.m(22),u=B.L(A.by,A.r,1)
return B.q(w,B.x(B.a([D.f8E,A.X,D.fL_,A.aB,B.aA(w,B.q(A.A,D.f8S,A.f,w,w,new B.p(w,w,w,B.m(16),w,G.uZ,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2p(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(D.uc,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c5z(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f2h(p),m=x.p,l=B.A(B.a([D.bIL,p.ox("Reset",A.k7,!1,new C.f2d(p))],m),A.l,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KN,o,o,o),j=p.yz("SHAPE",A.aqJ),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Dj[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1W(n.$2(t,p.cy),62,u.b,s===t,new C.f2e(v,p),62))}}i=B.bV(A.bG,i,A.bs,o,8,8)
v=p.yz("RING",A.po)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Dc[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1W(n.$2(p.cx,t),62,r.b,q===t,new C.f2f(s,p),62))}u=B.bV(A.bG,u,A.bs,o,8,8)
s=p.CW
return B.x(B.a([l,A.ay,k,j,i,v,u,A.af,p.we(p.kB("Size",s,0.12,0.4,new C.f2g(p),0.22,""+A.i.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b4V(d){return new B.a6(null,d,new B.fF(0.5625,B.ct(new C.f2A(this)),null),null)},
cE8(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.L(A.by,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uZ:q
t=new B.aN(14,14)
s=D.dn7[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bd,B.aA(A.c5,B.cT(q,B.x(B.a([r,A.cU,new B.qI(A.e2,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.Q,0,A.p),q,q,A.b4,new B.p(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bzM,q,q,q,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f2J(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bBV,A.mg,q,q,q)},
aSQ(){var w,v,u=this,t=null,s=u.cE8()
switch(u.as){case 0:w=u.bPp()
break
case 1:w=u.cJZ()
break
case 2:w=u.cEV()
break
case 3:w=u.cnQ()
break
case 4:w=u.c5z()
break
default:w=u.c8u()
break}v=x.p
return B.by(A.tR,B.e8(B.x(B.a([s,B.E(B.cd(B.a([w],v),t,t,D.bD4,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.j,0,A.p),D.Zd,!0),A.aq)},
aOS(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gce4(),p=B.m(16)
q=B.E(B.aA(r,B.q(r,D.f92,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRg()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.ff2)
else t.push(D.bUN)
t.push(A.ae)
t.push(D.bLb)
return B.q(r,B.A(B.a([q,A.au,B.E(B.aA(r,B.q(r,B.A(t,A.l,r,A.bc,A.j,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.uZ,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.j,0,r,r),A.f,r,r,D.b7f,r,r,r,r,A.O7,r,r,r)},
b1U(){var w=null
return new B.D(V.a0J,B.A(B.a([B.aG(w,w,w,w,A.n6,w,w,w,new C.f2_(this),w,w,w,w,w,w),D.h_X,A.b3,D.c2F],x.p),A.l,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.BZ,B.bm(!0,B.ct(new C.f3g(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhO.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e1()
n.cY(7)
w=e.a
v=e.b
u=A.i.V(w*v/55)
$.Q()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.ar(new B.a1(s,p,s+1.1,p+1.1),o)}},
aD(d){return d.b!==this.b}}
C.rV.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mq.prototype={}
C.Ae.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o9.prototype={}
C.ww.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a97.prototype={}
C.asQ.prototype={}
C.a1F.prototype={
S(){return new C.aJh(new B.au(A.ax,$.aw()),B.k8(!0,null,!0,!0,null,null,!1),D.dP4,B.a([],x.s),B.ez([D.Jn],x.Q))}}
C.aJh.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a3()},
a1g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().CI(90,700,700,A.eO),$async$a1g)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a1g)
case 8:p=e
if(r.c!=null)r.m(new C.f9E(r,p,q))
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
return B.i($async$a1g,v)},
a1j(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1j=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aJT(78,n,1100,1100),$async$a1j)
case 7:q=e
if(J.cq(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1j)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cP.gcu().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f9F(r,p))
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
return B.i($async$a1j,v)},
b6U(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cI.aN(A.d.gan(d.split(","))),A.A,u,u,A.cj,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.bxW},
c5G(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.czR(C.fPi(w,this.b6U(d),f),g)},
adM(d,e,f,g,h){var w=null,v=new C.f9C(f,e),u=new C.f9D(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.L(p?A.by:A.b9.j(0.6),A.r,1)
if(p)p=new B.a6(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.at(B.X(f?A.zj:A.Pj,A.bW,w,w,w,26),w,w,w),D.ey9],x.p),w),w)
else p=this.c5G(g,v.$1(h),u.$1(h),34)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.q(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bUt],x.p),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.n0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f9B(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
b_1(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.by(B.m(8),B.fR(A.cI.aN(A.d.gan(h.split(","))),A.A,p,p,A.cj,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.L(n?A.by:A.b8.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ev,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KU,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.Q3,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aJ(!1,A.a3,!0,u,B.aP(!1,t,!0,B.q(p,B.A(n,A.l,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.kt,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9O(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9O=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fSK(),$async$a9O)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f9k(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f9l(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9O,v)},
afM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afM=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f9n(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f9o(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f9p(r))
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
return B.b(C.fO0(q,r.cx,j,new C.b3n(r.z,r.Q,r.as,r.at),new C.f9q(r),i,m,p,k),$async$afM)
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
if(p!=null)B.a7(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.f9r(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eQ,g).w
g=B.aI(d,A.c1,g).w
w=B.at(B.q(h,h,A.f,h,h,new B.p(A.aT,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.q(h,D.bXQ,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.b8.j(0.5),A.I,24)],v),D.c6M,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9S(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.Q3,h,h,h,i.ax?h:new C.f9T(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbG8()
v=B.a([new B.ac(0,A.G,A.b9.j(0.45),A.I,10)],v)
s.push(B.hb(B.aJ(!1,A.a3,!0,h,B.aP(!1,h,!0,B.q(h,B.X(i.e==null?A.wz:A.hI,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wR,A.a7),h,40,h,h,h,h,h,40),A.cR,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cR,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.m(16),D.b4I),h,h,h,h,h,h,h,h,Y.EC,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iK,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aVJ,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f9U(i)
s=i.b_1(A.kY,q,r,i.gcoh(),s)
r=i.z
r=B.E(i.adM(new C.f9W(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bm,B.E(i.adM(new C.f9X(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f9Y(i)
s=i.b_1(A.uG,r,p,i.gcop(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adM(new C.f9Z(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fPz,A.ay,D.fSt,A.bA,u,A.U,D.fQS,A.aB,v,A.bA,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bm,B.E(i.adM(new C.fa_(i),r,!0,n,o),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fUq],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.L(D.bpq,A.r,1)
w=C.ai7(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bM(A.a6,h,h,B.q(h,B.A(B.a([D.bYX,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fxZ,h,h,h),B.aP(!1,h,!0,D.es1,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fa0(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.Q,0,h,h),A.f,h,h,new B.p(D.bhi,h,u,v,h,h,A.n),h,h,h,h,D.bBA,h,h,h),h)],t))}o.push(A.bA)
o.push(D.fG0)
o.push(A.U)
w=B.a([],t)
for(m=0;m<6;++m){l=D.deR[m]
v=i.ch===l?A.b9:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.by,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.bz(1,A.bd,new B.D(A.jp,B.aA(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b4,new B.p(v,h,new B.bG(k,k,k,k),h,h,h,A.a7),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fa1(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.j,0,h,h))
o.push(A.bA)
o.push(D.fZa)
o.push(A.U)
o.push(B.ct(new C.fa2(i)))
o.push(A.bA)
o.push(D.fNC)
o.push(A.U)
w=B.a([i.b9Q("auto","Let AI choose",A.ed,A.Sa)],t)
for(v=x.O,m=0;m<11;++m){j=D.wV[m]
u=j.d
w.push(i.b9Q(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bV(A.bG,w,A.bs,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.m(16)
u=B.L(i.r?A.b8.j(0.5):A.by,A.r,1)
o.push(B.q(h,B.iQ(h,A.b8,h,h,h,new C.f9V(i),D.bTW,D.fYp,h,D.fIo,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aUT,h,h,h)],t))
o.push(A.bA)
w=i.ax?h:i.gce8()
v=B.ft(h,h,A.b9,A.b9.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.m(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.feT:A.HZ
o.push(new B.a6(h,54,B.lR(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ng,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.q(h,B.bm(!0,B.ci(B.x(o,A.al,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.wl,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aet,h,h,h,h,h,h,h,h),h)},
bT_(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f9s(this,p,d)
if(d===D.DZ)return new C.aFO(p,o,q)
w=B.m(16)
v=p?E.wR:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.by,A.r,1)
s=B.X(p?A.ee:C.hXu(d),A.c,q,q,q,20)
r=C.hXv(d)
return B.aA(q,B.cT(q,B.x(B.a([s,A.ay,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.l,q,A.bc,A.j,0,A.p),q,q,A.b4,new B.p(u,q,t,w,q,v,A.n),A.h1,q,64,q,q,A.hH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9Q(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.by
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a9(A.a6,A.aa,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cT(v,B.A(B.a([w,A.xa,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.Q,0,v,v),v,v,A.b4,new B.p(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.amV,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9H(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1E.prototype={
S(){return new C.aJg(new B.au(A.ax,$.aw()))}}
C.aJg.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
afN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afN=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f9d(r))
w=1
break}B.eY()
r.m(new C.f9e(r))
t=4
q=C.ioX(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ioH(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f9f(r,q))
w=1
break}k=r.c
if(k!=null)B.a7(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hdM()
f=$.Dn.h(0,k.a)
o=f==null||J.cq(f)?null:J.fs(f)
if(o==null){r.m(new C.f9g(r))
w=1
break}n=C.ioF(o,r.a.c)
C.ioB(r.a.c.a)
$.hd0=!0
k=r.c
if(k!=null)B.a7(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hgM(j)
h=C.hgN(r.a.c)
e=C.hgO(r.a.c)
w=7
return B.b(C.bER(k,r.a.c.a,j,h,new C.f9h(r),i,e,a0),$async$afN)
case 7:m=a3
k=r.c
if(k!=null)B.a7(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f9i(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eQ,i).w
i=B.aI(d,A.c1,i).w
w=B.at(B.q(j,j,A.f,j,j,new B.p(A.aT,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.ar2,A.f,j,j,D.b6V,j,34,j,j,j,j,j,34),A.au,D.bJn],v),A.l,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaY,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.m(16),Av.adV),j,j,j,j,j,j,j,j,Y.EC,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aVJ,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.daW[q]
o=B.d(p,j,j,j,j,j,j,AB.Vw,j,j,j)
n=A.c.j(0.06)
r.push(B.n2(j,n,o,j,k.e?j:new C.f9j(k,p),j,j,Q.vQ,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.X,B.bV(A.bG,r,A.bs,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUT,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gce9()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.b8.j(0.5),A.eq.j(0.5)],x.O):D.cIC
o=B.a([new B.ac(0,A.G,A.b8.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.erY:D.bYw
n=B.q(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aJ(!1,A.a3,!0,j,B.aP(!1,s,!0,B.eJ(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hl,j,j,j)],v),A.l,j,A.bc,A.j,0,j,j),j,new B.p(j,j,j,r,o,new B.a9(A.a6,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.q(j,B.bm(!0,B.ci(B.x(w,A.al,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.wl,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aet,j,j,j,j,j,j,j,j),j)}}
C.b3n.prototype={}
C.aFO.prototype={
S(){return new C.bmA(null,null)}}
C.bmA.prototype={
gazB(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.qv,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gazB().t()
this.bzU()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazB(),new C.eq4(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bk6.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dhl[t]
q=r.a*v
r=r.b*u
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=D.yn.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aD(d){return d.b!==this.b}}
C.atn.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a01.prototype={
S(){return new C.aDi()}}
C.aDi.prototype={
gajX(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aik(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAN(){var w=this.e
return w===$?this.e=C.hgM(this.a.c).q(0,D.DZ):w},
a9B(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9B=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dt9(s))
u=3
r=A.d.fa(D.wV,new C.dta(s))
q=B.d4(C.hgM(s.a.c),x.Q)
l=q
J.hk(l,D.DZ)
p=l
if(s.gAN())J.c5(p,D.DZ)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAN()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hgN(i.c)
g=C.hgO(s.a.c)
w=6
return B.b(C.bER(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9B)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aik(q,s.gajX())
f=q==null?null:q.b
n=f==null?s.gajX():f
if(!J.z(n,r.a)&&!s.gAN())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a7(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dtb(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9B,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.c:A.T,k=m?A.aS:A.an,j=m?A.T:A.c,i=B.m(28),h=B.L(m?A.by:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bH,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dte(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wV[w]
u=o.gajX()
t=o.f?n:new C.dtf(o,v)
f.push(new C.bvg(v,u===v.a,t,n))}f=B.kU(1.25,f,3,10,10,n,A.dW,!0)
u=B.m(18)
t=o.gAN()?D.c9v:n
if(o.gAN())s=n
else s=m?A.bp:A.bO
r=B.X(A.ed,o.gAN()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAN()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAN()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAN()
f=B.a([f,A.aB,B.q(n,B.A(B.a([r,A.au,q,B.b91(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dtg(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,O.alF,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fyi,n,n,n)],g))
f=B.ci(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.GT,n,n,A.ah)
u=o.f?n:o.gbF7()
t=B.bo(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.m(16),A.a1),n,n,n)
s=B.m(16)
return B.bm(!0,B.q(n,B.x(B.a([new B.D(D.bEM,e,n),new B.dq(1,A.cr,f,n),new B.D(A.GS,new B.a6(1/0,50,B.bI(B.eJ(B.at(o.f?A.tB:D.fQ4,n,n,n),n,new B.p(n,n,n,s,n,D.c85,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.Q,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.uv,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvg.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bM(A.lA,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bM(A.lB,w,w,B.d(v.b,w,w,w,w,w,w,D.fyf,w,w,w),w)],x.p)
if(q)v.push(D.b1T)
return B.aA(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b4,new B.p(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eq1.prototype={
aHp(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xc(d,e){return this.aHp(0,e,null)}}
C.aNU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3j.prototype={
B(d){var w,v,u=null,t=C.hfB(this.c)
if(t==null)w=D.bwo
else{w=B.aI(d,u,x.w).w.cPf(D.bB5,D.fe2)
v=this.d
w=B.q8(new B.dy(!v,B.apw(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a6(416,870,new C.boa(w,u),u),A.f,A.dB)}}
C.boa.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dua[w]
u=new B.aN(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.at0,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dvz[w]
u=new B.aN(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.at0,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.p(t,t,t,B.m(64),D.d_M,D.c6t,A.n),A.bj),0,0,0))
s.push(B.bR(3,B.c3(t,new B.p(A.w,t,t,B.m(61),t,t,A.n),A.bj),3,3,3))
s.push(B.bR(13,B.by(B.m(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ap(t,B.at(B.q(D.b23,B.q(t,t,A.f,t,t,D.b7d,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dy(!0,B.by(B.m(51),D.by1,A.aq),t),13,13,13))
s.push(B.ap(22,new B.dy(!0,B.at(B.q(t,t,A.f,t,t,new B.p(A.ab,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lu.prototype={
pW(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bt,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bk,j,2,"Your Presentation Title",0,0,"",D.na,D.cW,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bt,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bk,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dm,D.cW,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rW(i,l,0,0,B.a([f,w,C.er(A.bn,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bt,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fK,t.l(),3,"",0,0,"",D.ct,D.fi,0.3,0.35,0.72)],s),C.cD(),D.n9,"","","Welcome",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,34,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Agenda",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
w=C.cD()
w=C.rW(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bk,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vf,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n9,"","","Agenda",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,32,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Main Idea",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
f=C.cD()
f=C.rW(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,21,A.bt,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bk,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ct,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n9,"","","Key Point 1",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,30,A.bt,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bk,j,2,"Compare & Contrast",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bk,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.08,0.24)
q=C.cD()
q=C.rW(i,l,0,0,B.a([u,r,C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bk,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.52,0.24)],s),C.cD(),D.n9,"","","Key Point 2",D.dm)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bt,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bk,j,2,h,0,0,"",D.dm,D.cW,0.8,0.1,0.32)
e=C.cD()
p=C.Cp(l,l,l,l,D.DV,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rW(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bk,j,2,"Questions?",0,0,"",D.ct,D.cW,0.7,0.15,0.58)],s),C.cD(),D.n9,"","",h,D.dm)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Ft.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fk.prototype={
gaNt(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ai7(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4I(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fk(v,u,t,d==null?w.d:d)},
Gd(d){return this.a4I(null,d,null,null)},
aG3(d){return this.a4I(null,null,null,d)},
cPd(d,e){return this.a4I(d,e,null,null)},
bfa(d){return this.a4I(d,null,null,null)},
bfg(d){return this.a4I(null,null,d,null)}}
C.Ol.prototype={
S(){return new C.blW(new B.eA(0,$.aw()),null,null)}}
C.blW.prototype={
Y(){var w,v=this
v.a2()
w=v.q_(new C.e3x(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fO(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.aw()
w.P$=0
this.bzn()},
B(d){var w=C.ai7(this.a.c.a)
if(w==null)w=A.d.gH(D.Ii)
return B.ct(new C.e3w(this,w,C.hw9(this.a.c.d)))}}
C.btN.prototype={
B(d){return B.oe(A.Xq,this.e,new C.f8q(this,A.i.F(this.d*0.35,1.6)-0.3))}}
C.bgT.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVu(d,e,v)
break
case"confetti":w.bLH(d,e,v)
break
case"crown":w.bNk(d,e,v)
break
case"aurora":w.bGc(d,e,v)
break
case"champagne":w.bJA(d,e,v)
break
case"diamonds":w.bPy(d,e,v)
break
case"starburst":w.cBK(d,e,v)
break
case"balloons":w.bGq(d,e,v)
break
case"galaxy":w.bUU(d,e,v)
break
case"redcarpet":w.csD(d,e,v)
break
case"coins":w.bL5(d,e,v)
break
case"lanterns":w.c49(d,e,v)
break
case"hearts":w.c1F(d,e,v)
break
case"petals":w.cnH(d,e,v)
break
case"butterflies":w.bIy(d,e,v)
break
case"neon":w.c8e(d,e,v)
break
case"disco":w.bPJ(d,e,v)
break
case"sunrise":w.cDq(d,e,v)
break
case"pearls":w.cmL(d,e,v)
break
case"snow":w.cBr(d,e,v)
break
case"laurel":w.c4f(d,e,v)
break
case"ribbons":w.cv8(d,e,v)
break
case"kente":w.c3Y(d,e,v)
break
case"trophy":w.cH9(d,e,v)
break
case"shooting":w.cza(d,e,v)
break
case"bokeh":w.bGM(d,e,v)
break
case"orbits":w.ckm(d,e,v)
break
case"flowers":w.bU7(d,e,v)
break
case"music":w.c7X(d,e,v)
break
case"mandala":w.c6m(d,e,v)
break
case"sparklers":w.cBy(d,e,v)
break
case"city":w.bKm(d,e,v)
break}},
t8(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.Q()
v=B.K()
v.r=g.j(A.i.D(h,0,1)).gp(0)
v.a=A.p6
u=new B.aF(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c6(w,t,w+f,t))
u.E(new B.c6(w,t,w,t+f))
u.E(new B.c6(w,t,w-f,t))
u.E(new B.c6(w,t,w,s))
u.E(new B.bv())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.i.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t8(d,new B.o(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aVu(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.aw],w),B.a([A.ir,A.bD],w),B.a([A.eE,A.aH],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.i.bh(l/2.8)
j=A.i.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.ks(new B.o(h,b8),new B.o(g,f),A.cw.aA(0,j/0.22))
d.toString
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.sav(new B.a9(A.a6,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.rY(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bw
a1=B.ks(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.S,A.P)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.i.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.Q()
a6=new B.ao(A.O,A.M,A.R,A.S,A.P)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.Q()
b6=new B.ao(A.O,A.M,A.R,A.S,A.P)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bw
b6.a=A.p6
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t8(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLH(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.i.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.Q(),d=B.K()
d.sav(new B.a9(A.aA,A.aF,A.x,D.doo,B.a([A.i.D(h-0.15,0,1),A.i.D(h,0,1),A.i.D(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.i.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.i.F(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.RC[A.o.D(A.i.bh(C.cY(u,7)*5),0,4)]
J.bp(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.Q()
t=new B.ao(A.O,A.M,A.R,A.S,A.P)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.I,q*1.8*A.i.D(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bNk(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.o(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.Q()
o=B.a([],s)
n=new B.aF(p.r,A.ai,a4,a4,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.sav(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.bjp],v),a4,a4).aK(0,B.bY(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aF($.Q().r,A.ai,a4,a4,B.a([],s))
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
j.E(new B.bv())
i=A.i.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a9(A.b7,A.ba,A.x,D.dn1,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eIs,D.eBA,D.eSc],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=A.ab.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.S,A.P)
h.r=A.i5.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xK(j),u=B.a([],x.X),p=new B.rv(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jG(y.M));--h
p.iz()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
a2.b=A.a9
a2.c=m
a2.e=A.dP
a2.r=A.bN.gp(0)
a8.af(new B.aF(o,e,a4,new B.cu([new B.BS(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.i.F(b0*0.5,1)
this.t8(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bGc(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f3T,D.f3B,D.f3u,D.f4S]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.Q()
j=B.a([],q)
i=new B.aF(o.r,A.ai,null,null,j)
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
i.ab()}}$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p6
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p6
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.i.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.i.F(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=A.wa.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p6
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.Q(),e=B.K()
e.sav(new B.c0(A.A,0.5,A.x,n,0,B.a([A.i3.j(0.25+0.1*j),D.Zp],x.O),n,n).aK(0,B.bY(new B.o(i,h),g)))
d.N(new B.o(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aF(g.r,A.ai,n,n,f)
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
u.ab()}g=$.Q()
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.b=A.a9
f.c=j
f.r=D.RC[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.i.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.i.F(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t8(d,new B.o(s,p),o*2.4,A.bN,A.i.D(p/i,0,1))
continue}$.Q()
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u9.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bPy(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.lf,60)
for(w=Math.max(4,A.i.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.i.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bp(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.Q()
g=B.a([],q)
f=new B.aF(h.r,A.ai,a6,a6,g)
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
a2=new B.bv()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.sav(new B.a9(A.aA,A.aF,A.x,D.dit,a6,a6).aK(0,B.bs(A.I,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.S,A.P)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t8(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBK(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.o(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.Q()
o=B.a([],v)
n=new B.aF(p.r,A.ai,null,null,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.i.F(a0+l*0.6,1.8)/1.8
$.Q()
u=new B.ao(A.O,A.M,A.R,A.S,A.P)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.i.bh(a0/2.4)
k=A.i.F(a0,2.4)/2.4
for(v=Math.max(4,A.i.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bxn.aA(0,k)*(0.5+0.5*C.cY(t,u)))
this.t8(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.RC[A.o.D(A.i.bh(C.cY(t,4)*5),0,4)],r)}},
bGq(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.i.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.i.F(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAf[A.o.F(p,6)]
i=$.Q()
h=B.a([],t)
g=new B.aF(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.c0(D.b26,0.9,A.x,a1,0,B.a([A.c,j,e],u),X.aA5,a1).aK(0,a0))
a5.bZ(a0,m)
m=B.a([],t)
h=new B.aF(h.r,A.ai,a1,a1,m)
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
i=new B.bv()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.i.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.i.F(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.bp(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.I,t,u)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=D.aAf[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUU(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f40,D.f3H,D.f3N],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bY(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.i.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cY(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cY(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bN,A.eL,i)
f.toString
e=C.cY(k,3)
$.Q()
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p6
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.Q()
a8=B.K()
a8.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.u9.j(0.55),D.aj9],t),a3,a3).aK(0,B.bY(a9,a7)))
b0.N(a9,a7,a8)
a0=A.i.F(b2,3.5)/3.5
if(a0<0.25){a1=A.i.bh(b2/3.5)
a2=new B.o(a4*(0.1+0.5*C.cY(a1,9)),a5*0.1*C.cY(a1,8))
a4=B.ks(a2,a2.a4(0,new B.o(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.ks(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.rY(a2,a4)))
a7.c=a6*0.005
a7.d=A.bw
b0.ah(a5,a4,a7)}},
csD(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.Q()
o=B.a([],t)
n=new B.aF(p.r,A.ai,b4,b4,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.sav(new B.c0(A.A,0.5,A.x,b4,0,B.a([A.u9.j(0.28),D.aj9],w),b4,b4).aK(0,B.bY(new B.o(r,v),u)))
p.a=A.p6
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.ek:A.er)
a8=$.Q()
a9=B.a([],t)
n=new B.aF(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.c6(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bv()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.S,A.P)
a8.sav(new B.a9(A.a6,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.S,A.P)
b0.r=A.i3.gp(0)
b0.c=o
b0.d=A.bw
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aF($.Q().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bv())
v=B.K()
v.sav(D.c8_.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.i.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.i.F(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t8(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bL5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.i.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.i.F(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.i.D(n,0.12,1))
$.Q()
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.sav(new B.a9(A.aA,A.aF,A.x,o>0?D.dz2:D.cOt,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.bu0.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t8(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c49(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.i.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.i.F(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.Q()
i=new B.ao(A.O,A.M,A.R,A.S,A.P)
i.sav(new B.c0(A.A,0.5,A.x,e,0,B.a([Ar.yk.j(0.45*l),D.ahJ],v),e,e).aK(0,B.bY(new B.o(m,n),k)))
a2.N(new B.o(m,n),k,i)
i=B.a([],r)
h=new B.aF(j.r,A.ai,e,e,i)
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
k=new B.bv()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
j=B.ar(D.bjE,A.c,0.2*l)
j.toString
k.sav(new B.a9(A.b7,A.ba,A.x,B.a([D.bp0,j],v),e,e).aK(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1F(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.i.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.i.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bp(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.Q()
l=B.a([],t)
i=new B.aF(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.kR(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.kR(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bv()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d8D[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.c0(A.tO,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a50,d).aK(0,B.bY(A.I,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.ir,130)},
cnH(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.i.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bp(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.Q()
m=B.a([],u)
k=new B.aF(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.c6(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c6(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bv()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
m=(q&1)===0?D.cIB:D.djR
n.sav(new B.a9(A.a6,A.aa,A.x,m,h,h).aK(0,B.bY(A.I,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bIy(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.i.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bp(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bp(v.save())
v.scale(a2*n,1)
a3=$.Q()
a4=B.a([],u)
a5=new B.aF(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.kR(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.kR(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bv()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3.sav(new B.a9(A.a6,A.aa,A.x,h?D.djz:D.dmv,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BR.gp(0)
b1.af(a5,a3)
v.restore()}$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.r=D.btf.gp(0)
p.c=q*0.1
p.d=A.bw
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c8e(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.i.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.Q()
r=new B.ao(A.O,A.M,A.R,A.S,A.P)
r.b=A.a9
r.c=v
r.r=D.aBo[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.am(B.bl(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aBo[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bl(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.adJ,q)
d.am(k,l)}},
bPJ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.i.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o7,A.dl][A.o.F(q,4)]
k=C.cY(q,3)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=l.j(0.75).gp(0)
j.a=A.p6
j.y=new B.hw(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.Q()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.db.gp(0)
a2.N(v,u,t)
t=a2.c
J.bp(t.save())
a0=new B.aF(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jP(B.bY(v,u)))
a2.mQ(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.i.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.r=B.ar(A.bq,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t8(a2,v.a4(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDq(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.i.D(a1/3,0,1))),e=new B.o(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.Q()
r=B.a([],v)
q=new B.aF(s.r,A.ai,k,k,r)
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=A.bN.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.Q()
f=B.K()
f.sav(new B.c0(A.A,0.5,A.x,k,0,B.a([D.beV.j(0.6),D.ahJ],x.O),k,k).aK(0,B.bY(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.ez_.aK(0,B.bY(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.i.F(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i5,180)},
cmL(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.Q()
r=B.a([],u)
q=new B.aF(s.r,A.ai,h,h,r)
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.Q()
s=new B.ao(A.O,A.M,A.R,A.S,A.P)
s.r=B.ar(A.cy,A.jh,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.i.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.i.F(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.Q()
u=new B.ao(A.O,A.M,A.R,A.S,A.P)
u.sav(new B.c0(Ao.B8,0.5,A.x,h,0,D.dq6,h,h).aK(0,B.bY(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cBr(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.i.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bw
J.bp(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.I,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eE,200)},
c4f(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.i.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.i.cL(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bp(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.S,A.P)
e.sav(D.c7N.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.Q()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bjY.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t8(a3,w.a4(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cv8(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i3,A.i5],a4),B.a([A.pe,A.ir],a4),B.a([A.aE,A.eL],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bP<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.Q()
l=B.a([],p)
k=new B.aF(m.r,A.ai,null,null,l)
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
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.dt(j,t),m=new B.bP(m,m.gI(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bv()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.Q()
m=new B.ao(A.O,A.M,A.R,A.S,A.P)
l=a5[n]
i=l[0]
m.sav(new B.a9(A.a6,A.aa,A.x,B.a([i,l[1],i],a4),As.zO,new B.mJ(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3Y(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.i.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.i.bh(g/s),5)
a1=g+s
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.S,A.P)
a3=Math.abs(a0)
a2.r=D.a54[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.S,A.P)
a4.r=D.a54[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.i.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.i.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t8(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a54[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cH9(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.S,A.P)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.c6(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.c6(u,r,u,a2))
m.E(new B.bv())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cC(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a9(A.a6,A.aa,A.x,D.dsQ,A.aAn,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.i.F(a6*0.6,1.4)
if(a0<1)this.t8(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLI(a4,a5,a6,60)},
bLI(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.i.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.i.F(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bp(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.I,r*A.i.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.Q()
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
n.r=D.RC[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cza(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.i.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.i.F(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.i.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.bN],s),null,null).aK(0,B.rY(j,l)))
k.c=r
k.d=A.bw
d.ah(j,l,k)
this.t8(d,l,q,A.c,1-n)}},
bGM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.i.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.i.F(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.i.F(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.Q()
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
m=A.o.F(s,5)
n.r=D.aDa[m].j(o).gp(0)
n.a=A.p6
n.y=new B.hw(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.S,A.P)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aDa[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
ckm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bp(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.I,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.b=A.a9
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=A.i5.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=A.i3.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bU7(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.i.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.i.F(a6+C.cY(o,2)*4,4)/4
j=A.e7.aA(0,A.i.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dgr[A.o.F(o,5)]
J.bp(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.sav(new B.a9(A.b7,A.ba,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.i3.gp(0)
a4.N(A.I,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i5,280)},
c7X(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.i.F(t+n/4,1)
l=B.bY(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.b=A.a9
j.c=u
j.r=D.azr[n].j((1-m)*0.8).gp(0)
a4.cC(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.i.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.i.F(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.azr[A.o.F(h,4)]
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=d.gp(0)
J.bp(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.I,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.S,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c6m(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.o(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bp(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.Q()
a0=B.a([],s)
a1=new B.aF(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c6(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c6(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.b=A.a9
d.c=u
d.r=B.ar(A.bN,A.o7,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.S,A.P)
d.r=A.i5.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.Q()
a5=B.K()
a5.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.i3.j(0.25),D.Zp],x.O),a3,a3).aK(0,B.bY(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cBy(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.Q()
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.r=A.bq.gp(0)
g.c=q
g.d=A.bw
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.S,A.P)
g.sav(new B.c0(A.A,0.5,A.x,null,0,B.a([A.i5,A.i3.j(0.6),D.Zp],o),null,null).aK(0,B.bY(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.i.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.i.F(b3+C.cY(f,2)*e,e)/e
a0=A.i.bh((b3+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cY(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.S,A.P)
a7.r=B.ar(A.i5,A.aw,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bw
a7.a=A.p6
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bKm(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVu(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.sav(D.c8I.aK(0,k))
a7.ar(k,j)
i=A.i.bh(n/r)
h=A.i.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.Q()
a4=new B.ao(A.O,A.M,A.R,A.S,A.P)
a4.r=A.bN.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.b1d.prototype={
B(d){var w,v=null,u=new C.cfA(),t=new C.cfC(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.as8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfB(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ii[w]))
return B.bV(A.bG,s,A.bs,v,12,10)}}
C.a_z.prototype={
S(){return new C.aBF()}}
C.aBF.prototype={
gwf(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1Z(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aQ),$.aw())}return v},
gazC(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNt()
v=$.aw()
u.f!==$&&B.bF()
t=u.f=new B.au(new B.ba(w,A.b6,A.aQ),v)}return t},
t(){var w=this.gb1Z(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gazC()
w.T$=v
w.P$=0
this.a3()},
a05(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a05=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().CI(90,700,700,A.eO),$async$a05)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a05)
case 8:p=e
o=q.b.toLowerCase()
n=J.aj7(o,".png")?"image/png":"image/jpeg"
r.m(new C.dil(r,n,p))
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
return B.i($async$a05,v)},
b1Y(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b6(4,B.m(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VG,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ai7(p.gwf().a)
if(n==null)n=A.d.gH(D.Ii)
w=p.gwf()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bR(0,new C.Ol(p.gwf(),!1,!0,new B.bJ(w.a+v,x.W)),0,0,0),B.ap(o,B.IE(A.n6,new C.diq(d),B.o_(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IE(A.ar0,new C.dir(p),B.o_(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVI,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1Z(0),o,o,o,o,o,2,p.b1Y("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dis(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.fY,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i3.j(0.6),A.r,1)
if(p.gwf().d.length===0)q=D.bWd
else{q=C.hw9(p.gwf().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fR(q,A.A,o,o,A.cj,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.q(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcea(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwf().d.length!==0)r.push(B.aG(o,o,o,o,H.Q3,o,o,o,new C.dit(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.X,B.A(r,A.l,o,A.e,A.j,0,o,o),A.U,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazC(),o,o,o,o,o,2,p.b1Y("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diu(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dg(D.bV5,o,D.h_5,new C.div(p,d),B.bo(A.aC,o,o,o,A.w,o,A.cp,o,new B.b9(B.m(14),A.a1),o,o,o))],u),A.al,o,A.e,A.Q,0,A.p),A.f,o,o,D.b7p,o,o,o,o,A.GP,o,o,o)],u),A.l,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a_U.prototype={
S(){return new C.bip(new B.au(A.ax,$.aw()))}}
C.bip.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.S(d).ax.a===A.J,m=n?A.c:A.T,l=n?A.aS:A.an,k=B.aI(d,A.c1,x.w).w,j=n?A.T:A.c,i=B.m(28),h=B.L(n?A.by:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.dp9(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d_e[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aU(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pU,o,o,o),A.f,o,o,new B.p(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dpa(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hG,u,o),new B.CZ(A.bG,6,6,A.bs,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.U)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bt(o,new B.b6(4,B.m(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bI(A.aWI,o,new C.dpb(this),o)],g),A.l,o,A.e,A.j,0,o,o))
e.push(A.U)
return B.bm(!0,B.q(o,B.x(B.a([f,new B.dq(1,A.cr,B.cd(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.uv,A.a0o,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhK.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e1()
a1.cY(this.c)
w=this.b
v=w/6.283185307179586
$.Q()
u=B.K()
u.y=A.H6
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.az(4))+o)
i=A.i.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.o(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.i.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.S,A.P)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aD(d){return d.b!==this.b}}
C.bhr.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bl(new B.a1(0,0,0+a3.a,0+a3.b),A.jK),e=this.b,d=Math.sin(e*2),a0=$.Q(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mh
a2.am(f,a1)
a1=x.v
a0=new B.aF(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.j8(f))
v=new B.TP(new B.rv(B.xK(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.iz()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.i.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.Q()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
k.b=A.a9
k.d=A.bw
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.i.F(o-q*(1-n/10),t)
i=A.i.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aF(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aF(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aF(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iz()
h=u[d].Df(o).a
$.Q()
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=w.gp(0)
l.y=Ac.os
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.S,A.P)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aD(d){return d.b!==this.b}}
C.bqw.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e1()
f.cY(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gaod()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.Q()
j=B.a([],o)
i=new B.aF(k.r,A.ai,g,g,j)
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
k=new B.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.P)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alF(u,t,j,g,A.x,g,g,0))
k.y=A.kW
d.af(i,k)}},
aD(d){return d.b!==this.b}}
C.bcf.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e1()
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
g=f}$.Q()
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.S,A.P)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aD(d){return d.b!==this.b}}
C.bbT.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e1()
e.cY(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.Q()
i=B.a([],o)
h=new B.aF(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.b=A.a9
j.c=s
j.d=A.bw
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aD(d){return d.b!==this.b}}
C.bxD.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.Q()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.c0(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d7l,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kW
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.buB.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.i.bh(f)*7,q=0;q<7;++q){p=new B.e1()
p.cY(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.i.F(A.i.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.S,A.P)
j.r=k.gp(0)
j.c=1.4
j.d=A.bw
d.ah(new B.o(o-l,n),new B.o(o+l,n+0),j)
i=l*1.4
d.ah(new B.o(o,n-i),new B.o(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.o(h,n-i),new B.o(g,n+i),j)
i=-l*0.45
d.ah(new B.o(h,n-i),new B.o(g,n+i),j)
i=new B.ao(A.O,A.M,A.R,A.S,A.P)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aD(d){return d.b!==this.b}}
C.btJ.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.Q()
v=B.K()
v.a=A.p6
v.sav(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.i.D(u-0.15,0,1),A.i.D(u,0,1),A.i.D(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.bgM.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.Q()
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
u.y=A.uB
r=new C.di2(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aD(d){return d.b!==this.b}}
C.yc.prototype={}
C.JF.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asP.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vf.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mT.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
hR(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.ibi(v.z))
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
C.m0.prototype={
hR(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.cl7(),m),m.k("ak.E"))
return C.rW(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.cl8(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbdq(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gTb(){if(!C.kM(this.w))return!1
var w=this.gbdq()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d3(w.bT())},
hR(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("N<1,m0>")
r=B.C(new B.N(r,new C.ckX(),q),q.k("ak.E"))
return C.Cp(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.U(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.ckY(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jY.prototype={}
C.b3m.prototype={
B(d){return B.ct(new C.cl2(this))}}
C.apR.prototype={
S(){return new C.blG(null,null)}}
C.blG.prototype={
gb2_(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fA,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gb2_().t()
this.bz7()},
B(d){return B.c9(this.gb2_(),new C.dQG(),this.a.c)}}
C.aN9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aex.prototype={
QG(d,e,f,g){return this.bTL(d,e,f,g)},
bTL(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QG=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QG)
case 3:s=i
if(d.e==null){w=1
break}B.a7(d,!1).O(null)
t=d.M(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.el,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QG,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.di,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.ay,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d8)
n.push(B.A(B.a([B.E(new C.aeO(A.hX,"Download",A.c4,new C.eCo(w,d),!0,v),1),A.au,B.E(new C.aeO(A.uQ,"Share",A.bl,new C.eCp(w,d),!1,v),1),A.au,B.E(new C.aeO(A.hK,"Safari",A.b1,new C.eCq(w,d),!1,v),1)],m),A.l,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eCr(d),v,v))
return B.bm(!0,new B.D(A.qA,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(A.jk,v,t,u,s,v,A.n),v,v,v,v,A.GW,v,v,1/0)],m),A.l,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeO.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aJ(!1,A.a3,!0,v,B.aP(!1,u,!0,B.eJ(B.x(B.a([p,A.U,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.Q,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bHd,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3k.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arW(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.ceb().amf(1.35)
s=B.axs(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEI(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bl,h,h,h,h,2,D.c3u,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bJ("slide_tf_"+g.a,x.W),h,A.xf,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AE,A.ao,h,A.Vk,h,h)
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
w=n?t.cP0(B.b0(g.Q).j(0.45),A.cH):t
p=g.as
l=m?1:h
k=m?A.eP:A.Ez
p=B.d(f,new B.bJ("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Vb:s
$.Q()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dP
j.r=A.as.gp(0)
j=i.cvb(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cv9(k,t,l?A.Vb:s)],x.p),h)}else w=i.cva(p,t,g.k2?A.Vb:s,m)
v=new B.mL(w,new B.bJ("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.c2m()
case 3:return i.cmK()
case 2:return B.b4(h,h,h,new C.b3h(g,h),A.fD)
case 5:g=g.r
return new C.b3j(g,!i.e&&i.z==null,h)}},
ceb(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k3
j=A.cH
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahH,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.I,6*v),new B.cU(l,A.I,16*v),new B.cU(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bh
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.ne
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bD,new B.o(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cU(v,new B.o(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cU(A.bb,new B.o(-3*v,0),0),new B.cU(A.av,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cF,A.I,8*v),new B.cU(A.av,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A9.xY
break
case"ice":v=o.d
e=B.a([new B.cU(A.aH,A.I,10*v),new B.cU(A.cy,A.I,22*v)],x.r)
k=A.V
w=A.eE
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.k3
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d9s[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.Q()
f=B.K()
v=o.d
f.sav(D.c6b.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.Mc,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.Q()
f=B.K()
v=o.d
f.sav(D.c6v.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.I,14*o.d)],x.r)
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
e=B.a([new B.cU(l.j(0.45),new B.o(u,u),0),new B.cU(l.j(0.2),new B.o(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k3
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBD(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.faW.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cl0(h)
v=r.k2?C.ioe(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eP:A.Ez
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Z2(B.cP(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cvb(d,e,f,g){return this.aBD(d,e,f,!1,g)},
cv9(d,e,f){return this.aBD(d,e,f,!1,null)},
cva(d,e,f,g){return this.aBD(d,e,f,g,null)},
bEI(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a6}},
c2m(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bM
return B.at(B.X(s.b===D.lu?A.HU:A.Cz,A.aD,t,t,t,32),t,t,t)}w=u.bHM(r)
if(s.b===D.lu){s=B.m(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.cu,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQF(r,!0)
return C.fPi(s.go,v,s.id)}return w},
aQF(d,e){var w,v,u,t
try{w=C.ioz(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.ct(new C.cl_(this,w,v,e))
return u}catch(t){return D.af7}},
bHM(d){return this.aQF(d,!1)},
cmK(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcP
return C.ioR(v,w.db,w.dx)}}
C.b3h.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q(),g=B.K(),f=this.b
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
case 2:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
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
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.o(0,h),new B.o(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aF(h.r,A.ai,i,i,f)
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
r.ab()}}r.E(new B.bv())
d.af(r,g)
d.af(r,w)
break}},
aD(d){return d.b!==this.b}}
C.aKG.prototype={
S(){return new C.bx7(null,null)}}
C.bx7.prototype={
Y(){var w,v=this
v.a2()
w=B.bn(null,A.hF,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBm()},
aQQ(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.di,w,w,w),w,w,w),new B.p(w,w,w,u,w,new B.a9(A.a6,A.aa,A.x,v,w,w),A.n),A.bj)},
bEW(){var w,v=this,u=null,t=v.aQQ("Slide A",A.bl),s=v.aQQ("Slide B",A.b1)
if(v.a.c===D.ct)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.fh_(v,s,t),u)},
B(d){return this.bEW()}}
C.aLn.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.We.prototype={
S(){return new C.blS(null,null)}}
C.blS.prototype={
Y(){var w,v,u=this
u.a2()
w=B.bn(null,A.C6,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ct){w.sp(0,1)
return}B.bQ(B.dp(0,0,0,v.c.fr+v.f*120,0,0),new C.e1g(u),x.a)},
bz(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ct)w.sp(0,1)
else B.bQ(B.dp(0,0,0,v.c.fr+v.f*120,0,0),new C.e1f(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzm()},
B(d){var w,v=this.a
if(v.c.dy===D.ct||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e1e(this),v.d)}}
C.JE.prototype={
B(d){return B.ct(new C.ckT(this))}}
C.aBk.prototype={
S(){return new C.bgc()}}
C.bgc.prototype={
Y(){this.a2()
if(this.a.c!==D.ct)B.bQ(A.NN,new C.dff(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ct)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.We(C.er(A.bn,!1,4279310375,A.aG,"",4294538006,24,A.bt,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bk,o,2,"",0,0,"",u,D.fi,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.p(A.ca,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bJ("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bn,!1,4294967295,A.aG,"",4280640491,22,A.bt,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bk,o,2,"Element flies in",0,0,"",q.a.c,D.cW,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ap(32,new C.We(t,B.q(p,D.fLa,A.f,p,p,new B.p(s,p,B.L(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jo,p,p,1/0),!0,1,new B.bJ("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7Z,A.bj)}}
C.a8Q.prototype={
S(){return new C.bmy(null,null)}}
C.bmy.prototype={
gb2B(){var w=this.a
if(w.e)w=D.fb8.q(0,w.c)||D.aSN.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a2()
if(v.gb2B()){w=C.imS(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dp(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzS()},
B(d){var w,v=this,u=v.d
if(!v.gb2B()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.epL(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1g.prototype={
B(d){var w=null
return B.at(C.b3l(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bt,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bk,4280172719,2,"Aa",0,0,this.c,D.ct,D.cW,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhp.prototype={
ju(d){return C.a3H(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3H(k,l),i=e.gdA(),h=new C.f5V()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aUk.aK(0,l))
d.af(j,w)
k=C.a3H(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.btL.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.flq.aK(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hw(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sav(D.flo.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3H(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.bb.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pf.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.flj.aK(0,l))
d.af(j,w)
w=C.a3H(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgG.gp(0)
d.af(w,v)
k=C.a3H(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjH.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aUk.aK(0,l))
d.af(j,k)
for(k=B.xK(j),w=B.a([],x.X),k=new B.rv(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jG(y.M));--r
k.iz()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.i.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iz()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iz()
n=w[r].Df(q*o/p).a
m=D.d6B[A.o.F(o,4)]
$.Q()
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.S,A.P)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fls.aK(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.flp.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3H(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.ob.gp(0)
d.af(k,w)
break}},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btG.prototype={
a5(d,e){d.Gr(C.a3H(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aNn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aNS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aPb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a98.prototype={}
C.OP.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGd(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUy(){return this.r},
gUz(){return this.w},
gMd(){return this.x}}
C.aGd.prototype={
Y(){var w,v=this
v.a2()
$.aW.c1$.push(v)
C.fUh()
$.hEc=new C.eIC(v)
w=B.bn(null,A.C3,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IZ()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P8(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IZ()}},
jm(d){if(d===A.Ba||d===A.tQ||d===A.tP||d===A.q1)this.uc()},
t(){var w,v,u,t=this
$.aW.hW(t)
w=t.at
if(w!=null)w.a1(0)
t.uc()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bA4()},
gacL(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPr(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adh(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTb())return!1
return!0},
ky(){return this.adh(null)},
ake(){var w=this.c
if(w==null)return
w.M(x.q).f.U(D.fjH)},
qP(){if(!this.ky())return!1
this.ake()
return!0},
at7(d){var w,v,u,t,s,r=this
if(r.adh(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hDj(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Aq(){return this.at7(null)},
IZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asR(k),$async$IZ)
case 3:j=e
w=4
return B.b(C.aro(k),$async$IZ)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h9i(j,t.c5p())
w=t.gacL()?5:7
break
case 5:r=t.gPr()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1u(r),$async$IZ)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eF_())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c3(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eF0())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zf(m==null?"":m)!=null)continue
C.fUt(n,s)
p=!0}t.m(new C.eF1(t,s))
if(p||s.length>J.ad(j))t.uc()
case 1:return B.h(u,v)}})
return B.i($async$IZ,v)},
c5p(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kM(w)&&w!==q}if(w)p.push(r)
return p},
ctD(d){var w,v=this,u=d.w
if(!C.kM(u)||u==="hati_kiapo_uongozi")return
v.abA(d)
w=A.d.bj(v.d,new C.eGA(d))
u=v.d
if(w>=0){u[w]=d.hR()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c3(u,0,d.hR())
v.db=!1},
cnG(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kM(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctD(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i4>")
s=B.C(new B.cM(new B.Y(s,new C.eGo(),w.k("Y<1>")),new C.eGp(),v),v.k("M.E"))
return s},
P8(d){return this.bUb(d)},
uc(){return this.P8(null)},
bUb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnG()
w=3
return B.b(C.X7(d==null?t.a.c:d,s),$async$P8)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.at7(r)?4:5
break
case 4:w=6
return B.b(C.a8m(r),$async$P8)
case 6:q=r.x
p=A.a.i(q==null?t.gPr():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eEn())
q=t.d
if(o>=0)q[o]=r.hR()
else A.d.c3(q,0,r.hR())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P8,v)},
pJ(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kM(u.w))===!0?A.h1:A.lJ
v.at=B.cy(w,new C.eHI(v))},
b20(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agj(u.hR(),v.f,v.r))
if(w.length>40)A.d.cB(w,0)
A.d.a8(v.ay)},
cHr(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agj(w.e.hR(),w.f,w.r))
w.m(new C.eIy(w,v.pop()))
w.pJ()},
csI(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agj(w.e.hR(),w.f,w.r))
w.m(new C.eGy(w,v.pop()))
w.pJ()},
oD(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIl(u))
if(w>=0){u.d[w]=u.e.hR()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yz(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ya(){var w,v,u,t
for(w=this.ch,v=new B.dr(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dr(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KL(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d4(new B.cM(new B.Y(w,new C.eIm(),v.k("Y<1>")),new C.eIn(),u),u.k("M.E"))
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
if(n.b!==D.cW)continue
p=n.a
m=w.c4(0,p,new C.eIo(n))
s.c4(0,p,new C.eIp())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ii(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eDM(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPr()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c3(u.d,0,u.e.hR())}u.oD()
u.pJ()},
akA(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.Yz(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kM(v.w))===!0
if(u){C.imW(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.imX(t,w.d+w.f*0.5)}}s.Ii()
s.oD()
s.pJ()
if(u&&s.c!=null)s.m(new C.eIz())},
cIz(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ii()
w.oD()
w.pJ()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqT(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ikY(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2B(v)
t=q.c2A(v)
s=B.b0(v.e)
r=v.f
return new C.jY(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hXG(o)},
c2B(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cW)s=t.w>=28||A.o.D(A.o.ap(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.T},
c2A(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cW&&t.w<28)return B.b0(t.Q)}return A.aM},
agw(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacL()){w.c.M(x.q).f.U(D.fii)
return}w.abA(d)
w.b3i(C.bES(d))
return}if(C.clL(v)){w.abA(d)
w.b3i(d)
return}w.m(new C.eFH(w,d))},
atF(){var w,v,u,t,s,r,q=this
q.a3e(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kM(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eDK(q))
if(r&&q.c!=null){u.toString
q.Kh(u,s)}return}q.uc()
q.m(new C.eDL(q))},
b3h(d){this.abA(d)
this.a0I(d,!0)},
abA(d){if(!C.kM(d.w))return
C.fUt(d,this.d)},
a0I(d,e){return this.cjy(d,e)},
b3i(d){return this.a0I(d,!1)},
cjy(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bES(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPr():r)
t.dy.W(0,q.toLowerCase())
C.arp(t.a.c,q)}r=s}else r=d
w=C.clL(r.w)?3:4
break
case 3:w=5
return B.b(t.abB(r),$async$a0I)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eG3(l))
o=l.a.hR()
n=C.kM(o.w)&&C.io9(o)
t.m(new C.eG4(t,o,p))
if(n){m=A.d.bj(t.d,new C.eG5(o))
if(m>=0){t.d[m]=o.hR()
t.uc()}}if(!t.adh(l.a))t.ZK()
r=!1
if(t.c!=null)if(!t.adh(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.at7(r)&&C.fQt(l.a)}else l=r
else l=r
if(l)t.c.M(x.q).f.U(D.fiT)
case 1:return B.h(u,v)}})
return B.i($async$a0I,v)},
abB(d){return this.bSb(d)},
bSb(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ly(r.c,A.Ak),$async$abB)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lc(!1,r,s.c,s.d,null,A.Ak,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abB,v)},
or(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$or=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.clL(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cla(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$or,v)},
agd(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eFG(),s,null,!0,!0,x.H),$async$agd)
case 3:if(t.c==null){w=1
break}t.atF()
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
agc(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eFD(),s,null,!0,!0,x.H),$async$agc)
case 3:if(t.c==null){w=1
break}t.m(new C.eFE())
t.atF()
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
ZK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ZK)
case 3:r=e
if(B.k2(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aB("Bool","ngmy_marriage_hint_seen",!0),$async$ZK)
case 4:s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fgT)
case 1:return B.h(u,v)}})
return B.i($async$ZK,v)},
Kh(d,e){return this.cu2(d,e)},
cu2(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kh=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahI(s,t.gF_(),t.gEZ(),!0,e,t.d),$async$Kh)
case 9:w=4
break
case 6:w=10
return B.b(C.ahJ(s,t.gF_(),t.gEZ(),!0,e,t.d),$async$Kh)
case 10:w=4
break
case 7:w=11
return B.b(C.ahK(s,t.gF_(),t.gEZ(),!0,e,t.d),$async$Kh)
case 11:w=4
break
case 8:w=12
return B.b(C.ahL(s,t.gF_(),t.gEZ(),!0,e,t.d),$async$Kh)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kh,v)},
c4d(){var w,v,u,t,s=this
if(!s.gacL()){s.c.M(x.q).f.U(D.fh5)
return}w=s.gPr()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahH(u,t,v,new C.eEW(s),new C.eEX(s),w)},
agx(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dT,null,new C.eFN(u),s,!0,!0,!1,A.lV,!1,!1,x.N),$async$agx)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahL(s,u.gF_(),u.gEZ(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahI(s,u.gF_(),u.gEZ(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahJ(s,u.gF_(),u.gEZ(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahK(s,u.gF_(),u.gEZ(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c4d()
return B.h(null,v)}})
return B.i($async$agx,v)},
ciE(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b20()
w=C.cD()
v=C.Cp(t,t,t,t,D.DV,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eFO(u,v))},
aaY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itj(s),$async$aaY)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eDO())
t.da(new C.eDP(t,p,q,r))
s=t.c.M(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaY,v)},
aiy(d,e,f,g){var w=null,v=g?A.dk:A.bO,u=B.L(g?A.aT:A.cu,A.r,1)
return B.hb(B.aA(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qP()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFZ(),q),q.k("M.E"))}o=s!=null&&s.b===D.lU?B.a([s],x.u):p
if(o.length===0){t.c.M(x.q).f.U(D.fj3)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eG_(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0H)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
agO(){return this.cjx()},
cjx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.it5(s,t.f+1,o),$async$agO)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jz(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eG1(q))
t.da(new C.eG2(p,t,o,q,r))
t.c.M(x.q).f.U(D.fjs)
case 1:return B.h(u,v)}})
return B.i($async$agO,v)},
agV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()||!t.Aq()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGj(),q),q.k("M.E"))
if(p.length===0){t.c.M(x.q).f.U(D.fgE)
w=1
break}o=new B.N(p,new C.eGk(),B.U(p).k("N<1,F>")).f1(0,new C.eGl())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aQ),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eGm(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agV)
case 3:for(r=new B.dr(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eGn())
case 1:return B.h(u,v)}})
return B.i($async$agV,v)},
agA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qP()){w=1
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
return B.b(C.hFs(s,new C.Fk(r,q,p,o==null?"":o)),$async$agA)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.da(new C.eFP(m,n))
s=t.c.M(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ai7(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agA,v)},
abu(){return this.bRt()},
bRt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iti(s,t.f+1,l),$async$abu)
case 3:r=e
q=$.hd0
$.hd0=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.da(new C.eE4())
t.c.M(x.q).f.U(D.fgv)
w=1
break}if(!q){s=r.CW
s=C.hEa(l,s==null?"":s,!1)}else s=!1
if(s){t.da(new C.eE5(t,l,r))
t.c.M(x.q).f.U(D.fjW)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jz(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eE6(p))
o=s.length
t.da(new C.eE7(m,t,l,p,r))
n=s.length-o
s=t.c.M(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abu,v)},
aT2(d,e){if(e){this.ahn()
return}this.ciE(d,!1)},
bMV(){return this.aT2(null,!1)},
ahn(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c3,null,new C.eGt(t),r,!0,!0,!0,A.pM,!1,!1,x.N),$async$ahn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eGu(t,C.ikX(s).pW()))
case 1:return B.h(u,v)}})
return B.i($async$ahn,v)},
da(d){var w=this
if(w.qP())return
w.Ii()
w.b20()
w.m(d)
w.KL()
w.oD()
w.pJ()},
a9s(){this.da(new C.eCJ(this,D.n9))},
aUx(){var w=this.gdB()
if(w==null)return
this.da(new C.eE2(this,w))},
aTD(){var w=this.e
if(w==null||w.r.length<=1)return
this.da(new C.eE0(this))},
b6c(d,e){if(this.e==null||d===e)return
this.da(new C.eGC(this,d,e))},
OE(d){return this.bOW(d)},
bOW(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPr():s)
w=5
return B.b(C.arn(t.a.c,r),$async$OE)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asT(s)
w=6
return B.b(C.b3p(t.a.c,s),$async$OE)
case 6:if(t.c==null){w=1
break}t.m(new C.eDX(t,d))
w=7
return B.b(t.uc(),$async$OE)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OE,v)},
cu_(d,e){var w=this
if(d.z){w.ake()
return}w.m(new C.eGB(w,d,e))
w.pJ()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xz(d){return this.ch.c4(0,d.a,new C.eDN(d))},
avy(d){return this.CW.c4(0,d.a,new C.eEo())},
a3e(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yz(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.aq$.d.c
if(u!=null)u.js()},
b9K(){return this.a3e(!0)},
a3a(d){var w,v,u=this
if(u.qP())return
if(!u.Aq())return
w=u.Yz(d)
if(w==null||w.b!==D.cW)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xz(w).sb1(0,"")}u.m(new C.eIj(u,d))
$.aW.x1$.push(new C.eIk(u,d,w))},
bai(d){var w=this
if(d.b===D.cW&&!w.ky()&&w.Aq()){w.a3a(d.a)
return}w.aC2(d.a)},
aC2(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.Yz(w)
if(v!=null&&v.b===D.cW){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eHJ(r,s,d))
if(s||d==null){t=$.aW.aq$.d.c
if(t!=null)t.js()}},
aP7(){this.da(new C.eCK(this))},
pr(d){return this.bDZ(d)},
bDZ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$pr)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.da(new C.eCH(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pr,v)},
WB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.Hu(78,1920),$async$WB)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eCx(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WB,v)},
Wv(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(U.Dz(t.a.c),$async$Wv)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gau(s)){t.c.M(x.q).f.U(D.fkv)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eCu(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wv)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.da(new C.eCv(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wv,v)},
auw(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eDZ(v))){w.c.M(x.q).f.U(D.fjw)
return}if(w.w===v)w.a3e(!0)
w.da(new C.eE_(w,v))},
bLb(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fi)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cW)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPQ(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.da(new C.eDb(w,v,d,e,t,u))},
bFz(d){return this.aPQ(d,null)},
a9I(d){return this.bFH(d)},
bFH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9W.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.or(),$async$a9I)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cW)t.bFz(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.fi){r=d.c
t.aPQ(r.j(0.88),r)}w=1
break}t.da(new C.eDg(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9I,v)},
a9H(d){return this.bFF(d)},
bFF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kc()
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
return B.b(t.or(),$async$a9H)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eDe(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9H,v)},
bFp(d){var w=this.gdB()
if(w==null)return
this.da(new C.eDa(this,w,d))},
a0N(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ite(r),$async$a0N)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oD()
t.m(new C.eGd(t,s))
w=4
return B.b(t.uc(),$async$a0N)
case 4:if(t.c!=null)t.agw(s)
case 1:return B.h(u,v)}})
return B.i($async$a0N,v)},
abl(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3e(!0)
t.oD()
s=t.c
s.toString
w=3
return B.b(C.Sc(s,q),$async$abl)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.M(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abl,v)},
E8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oD()
t=4
w=7
return B.b(C.aS0(m),$async$E8)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRr(o,q,m.b),$async$E8)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E8,v)},
FP(d,e){return this.cGP(d,e)},
cGP(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FP=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qP()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3e(!0)
t.oD()
s=h.a=t.e.hR()}else{r=A.d.bj(t.d,new C.eIs(d))
s=h.a=r>=0?t.d[r].hR():d.hR()}s=s.w
q=s==null
p=C.ilV(q?"":s)
o=C.hD5(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eIt(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czS(n.length,o,s),$async$FP)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ilP(h.a)
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
return B.b(t.czR(n,o),$async$FP)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fa(t.d,new C.eIu(s))
s=h.a.b
w=11
return B.b(t.czP(k.b,s),$async$FP)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hR()
case 5:j=C.ilU(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.M(x.q).f.U(D.fkH)
w=1
break}w=12
return B.b(t.czQ(j.a,s,o,j.c),$async$FP)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eIv(h,t,i))
t.pJ()
case 1:return B.h(u,v)}})
return B.i($async$FP,v)},
czS(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHZ(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czR(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHY(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czP(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHS(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czQ(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHU(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acP(){var w=null
return B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acQ(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dv,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ex,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fvL,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aXS(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VT,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXV(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nh,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.z9,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eES(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1v(d,e,f,g,h,i){return this.aXV(d,e,f,!1,g,h,i)},
awS(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.di,w,w,w),A.bH,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0M,w,w,w)},
aXU(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cp,w,new B.b9(B.m(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nY,w,w,w),w,new C.eER(d,f),v)},
aXT(d,e){return this.aXU(d,e,null)},
KC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pv(l,s.c,s.d),$async$KC)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aO("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eG(l,new C.eHK());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.ab1(l.charCodeAt(0)==0?l:l,r.b),$async$KC)
case 4:l=t.a
w=5
return B.b(B.pu(l.c,l.d),$async$KC)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KC,v)},
IE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pv(q,s.c,s.d),$async$IE)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.ab1(A.Y.aw(r.aj(),null),r.b+".json"),$async$IE)
case 4:q=t.a
w=5
return B.b(B.pu(q.c,q.d),$async$IE)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
b9t(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oD()
u.uc()
w=u.c
w.toString
v=B.e9(new C.eIi(u,t),!1,null,x.z)
B.a7(w,!1).ca(v)},
HS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$HS)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fUG(),$async$HS)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ioL(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.as,null,new C.eCC(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HS)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.da(new C.eCD(t,s))
w=1
break}if(p==="split")t.da(new C.eCE(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HS,v)},
NZ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}w=3
return B.b(t.or(),$async$NZ)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aS_(s,null,null),$async$NZ)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eCI(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NZ,v)},
b5Z(d){var w=this.e
if(w==null||!C.kM(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRe(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aS_(s,t==null?null:B.b0(t),u)},
a9q(d){return this.bDQ(d)},
bDQ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Aq()){s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fkW)
w=1
break}w=3
return B.b(t.aRe(),$async$a9q)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eCz(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9q,v)},
ai6(d){return this.csL(d)},
csL(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ai6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Aq()){s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fk3)
w=1
break}w=3
return B.b(t.aRe(),$async$ai6)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eGz(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ai6,v)},
cfk(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFP()}},
cFP(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.da(new C.eIq(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1Q(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.da(new C.eEV(this,r,u.d))},
c6I(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kM(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fRe(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lu&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c6J(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kM(w.w))!==!0)return!0
if(!this.Aq())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fRe(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lu&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O6(d){return this.bG6(d)},
bG6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Aq()){s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fiU)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arr(p),$async$O6)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.M(x.q).f.U(D.fjy)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8m(r)
w=1
break}t.m(new C.eDk(t,d,o))
t.oD()
$.aW.x1$.push(new C.eDl(t))
case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
Wz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$Wz)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFy(),$async$Wz)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eCw(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wz,v)},
OU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$OU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fUx(r),$async$OU)
case 4:q=e
if(q==null){w=1
break}t.da(new C.eEm(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OU,v)},
jk(d){this.da(new C.eCF(this,d))},
qE(d){return this.bFi(d)},
bFi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qP()){w=1
break}m=!D.aSQ.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.or(),$async$qE)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HS()
w=1
break A
case"sign_paper":t.NZ()
w=1
break A
case"hd_photo":t.Wz()
w=1
break A
case"sharpen":t.OU()
w=1
break A
case"print":t.E8()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.da(new C.eCO(s))
w=1
break A
case"text_box":t.aP7()
w=1
break A
case"picture":t.WB()
w=1
break A
case"present":t.b9t()
w=1
break A
case"new_slide":t.a9s()
w=1
break A
case"export_json":t.IE()
w=1
break A
case"outline_share":t.KC()
w=1
break A
case"flashcard_tool":t.vO(D.Ji)
w=1
break A
case"quiz_tool":t.vO(D.Jj)
w=1
break A
case"worksheet_tool":t.vO(D.Jk)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.da(new C.eCP(t,s))
w=1
break A
case"delete_el":t.auw()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eCQ(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eD0(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.da(new C.eD3(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.da(new C.eD4(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.da(new C.eD5(s))
w=1
break A
case"grayscale":case"brighten":t.OU()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.da(new C.eD6(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.da(new C.eD7(s))
w=1
break A
case"rectangle":t.pr(D.bk)
w=1
break A
case"circle":t.pr(D.eZ)
w=1
break A
case"triangle":t.pr(D.kc)
w=1
break A
case"arrow":t.pr(D.DX)
w=1
break A
case"line":case"divider":t.pr(D.fK)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eG(q,new C.eD8()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eD9(),B.U(n).k("Y<1>")).gI(0)}t.c.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.jk(C.j5(A.K,!1,t.gqT().d.l(),A.aG,40,A.bt,A.u,0.18,q,"Presentation Title",0,D.na,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.jk(C.j5(A.K,!1,t.gqT().e.l(),A.aG,22,A.bt,A.a8,0.12,q,"Subtitle goes here",0,D.dm,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jk(C.j5(A.bn,!0,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vf,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jk(C.j5(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.ve,0.8,0.1,0.22))
w=1
break A
case"quote":t.jk(C.j5(A.K,!1,4279310375,A.aG,24,A.cH,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dm,0.8,0.1,0.3))
w=1
break A
case"citation":t.jk(C.j5(A.bn,!1,4284773515,A.aG,14,A.bt,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.vf,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jk(C.j5(A.e_,!1,4279310375,A.aG,14,A.bt,A.a8,0.08,C.cD(),C.bFA(),0,D.dm,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jk(C.j5(A.e_,!1,4279310375,A.aG,13,A.bt,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dm,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.da(new C.eCR(t))
w=1
break A
case"footer_bar":t.da(new C.eCS(t))
w=1
break A
case"highlight":t.da(new C.eCT(t))
w=1
break A
case"redact":t.da(new C.eCU(t))
w=1
break A
case"callout":t.da(new C.eCV(t))
w=1
break A
case"checkboxes":t.jk(C.j5(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dm,0.8,0.1,0.2))
w=1
break A
case"table":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dm,0.8,0.1,0.18))
w=1
break A
case"memo":t.da(new C.eCW(t))
w=1
break A
case"letter":t.jk(C.j5(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.82,C.cD(),C.bFA()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jk(C.j5(A.bn,!1,4279310375,A.aG,22,A.bt,A.V,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vf,0.8,0.1,0.12))
w=1
break A
case"toc":t.jk(C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dm,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dm,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cD(),"Initials: ______",0,D.dm,0.3,0.65,0.78))
w=1
break A
case"approved":t.jk(C.j5(A.K,!1,4278556265,A.aG,28,A.bt,A.u,0.12,C.cD(),"APPROVED",0,D.na,0.32,0.62,0.08))
w=1
break A
case"draft":t.jk(C.j5(A.K,!1,4292617766,A.aG,28,A.bt,A.u,0.12,C.cD(),"DRAFT",0,D.dm,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jk(C.j5(A.K,!1,871318596,A.aG,36,A.bt,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dm,0.8,0.1,0.42))
w=1
break A
case"sticky":t.da(new C.eCX(t))
w=1
break A
case"progress":t.da(new C.eCY(t))
w=1
break A
case"stars":t.jk(C.j5(A.K,!1,4279310375,A.aG,36,A.bt,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.r_,0.8,0.1,0.4))
w=1
break A
case"equation":t.jk(C.j5(A.K,!1,4279310375,A.aG,32,A.bt,A.V,0.14,C.cD(),"y = mx + b",0,D.dm,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jk(C.j5(A.K,!1,4279310375,A.aG,18,A.bt,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ve,0.8,0.1,0.35))
w=1
break A
case"two_col":t.da(new C.eCZ(t))
w=1
break A
case"compare":t.da(new C.eD_(t))
w=1
break A
case"link_text":t.jk(C.j5(A.bn,!1,4280640491,A.ne,16,A.bt,A.a8,0.1,C.cD(),"https://example.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"phone":t.jk(C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"email":t.jk(C.j5(A.bn,!1,4280640491,A.aG,18,A.bt,A.a8,0.1,C.cD(),"name@email.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.da(new C.eD1(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.da(new C.eD2(t,r))
w=1
break A
case"invoice":t.jk(C.j5(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"resume":t.jk(C.j5(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jk(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bFA()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jk(C.j5(A.bn,!1,4279310375,A.aG,17,A.bt,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jk(C.j5(A.bn,!1,4279310375,A.aG,15,A.bt,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dm,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qE,v)},
czj(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fb4.q(0,this.z)},
czi(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bbb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ct,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.by
u=B.L(u,A.r,o&&e?2:1)
t=C.ioA(d)
s=o?12:18
r=o?A.H:A.cT
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.q(p,D.PV,A.f,p,p,D.Fk,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aA(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRK(d){var w,v=null,u=this.kc()
if(u==null)return A.bM
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.an,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.Sv,new C.eEl(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.j,0,v,v)},
vO(d){return this.bDY(d)},
bDY(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSK.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.or(),$async$vO)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eCG(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f9o
w=h.e
if(w==null)return h.bHS()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.S(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aI(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eQ,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.bj3
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTb()}else j=!1
if(j)k.push(new C.a8R(h.a.c,!1,h.e.gbdq(),h.gcfh(),g))
else if(s&&h.e!=null&&!h.ky()&&C.clL(h.e.w)){j=h.a
k.push(new C.a8R(j.c,j.d,g,h.gcgq(),g))}if(s)k.push(h.bRF(w,t,r))
if(s&&h.ky()){w=t?A.fS:A.kQ
j=B.m(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bY5,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fS,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.j,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yC,A.iv,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7G(t,r))
if(w&&h.ky())k.push(h.cGQ(t))
if(r&&h.kc()!=null&&w&&!h.ky())k.push(h.c7B(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b8T(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b8T(t,!1),g))
i.push(B.E(new B.bM(A.b7,g,g,h.bJc(v,t,!s||p),g),1))
if(h.czj(r)&&u&&s&&!h.ky())i.push(h.cf3(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.j,0,A.p),1))
if(q&&!h.ky()&&h.czi(!1))j.push(new B.a6(240,g,h.bUA(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c7C(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHS(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.S(p).ax.a===A.J
p=w?A.c3:A.bO
v=r.a.e
u=r.cec(A.bl,A.qH,new C.eDo(r),r.gciB(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOQ(A.bl,A.hW,"Blank Presentation",new C.eDp(r)),1),A.au,B.E(r.aOQ(A.b1,A.t4,"Class Template",new C.eDq(r)),1)],t),A.l,q,A.e,A.j,0,q,q)
u=B.a([u,A.bA,s,A.nd,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bEL(w))
else{t=new B.i2(t,B.U(t).k("i2<1>"))
A.d.v(u,t.gdO(t).dL(0,new C.eDr(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cd(u,q,q,new B.R(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bPM(){this.m(new C.eE1(this))
var w=this.c
w.toString
if(B.aI(w,A.c1,x.w).w.a.a<900){w=$.aW.aq$.d.c
if(w!=null)w.js()}},
agP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.S(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eGc(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agP,v)},
Br(d,e){return this.czF(d,e)},
czF(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Br=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i0(D.YV,!0,"Dismiss",j,new C.eHL(),new C.eHM(d,e),A.iI,!0,x.N),$async$Br)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ake()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTb()){r.ake()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aS0(d),$async$Br)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRr(j,q,d.b),$async$Br)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FP(d,!1),$async$Br)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i0(D.YV,!0,"Dismiss",j,new C.eHN(),new C.eHO(d),A.a3,!0,x.y),$async$Br)
case 20:if(g===!0)r.OE(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahR("Rename presentation",d.b),$async$Br)
case 24:l=g
if(l!=null)r.cu_(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eHP(r,k))
r.pJ()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Br,v)},
b3W(d,e){var w=null
return B.bN(!1,D.fVI,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.az,w,A.lM,w,w,w,w,w,A.kz,w,w))},
bEL(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eCL(this,d),null)},
bNP(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eDQ(),x.dv).bY(0,new C.eDR()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.ali,this.aPq(v,e,new C.eDS(),f),null)},
aPq(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e3)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bv,n,n,n,10),A.r6],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c7(A.aL,A.e,A.Q,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bG(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n1,n,n,n))
A.d.v(l,u)}return B.ev(A.a6,B.A(l,A.l,n,A.e,A.Q,0,n,n),A.f,A.e2)},
bEJ(d,e,f){return this.aPq(d,e,null,f)},
bNR(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dt7
else if(v==="hati_kuhoweya")w=D.ddx
else{if(v==="hati_kiapo_uongozi")v=D.d_8
else v=C.kM(v)?D.d6Y:A.S6
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eDV(this,f,d,e,w),null)},
c7C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cW)return A.bM
w=k.Xz(i)
v=k.avy(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cc,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bN(!1,D.fR3,j,j,!0,j,j,j,new C.eFl(k),j,j)],t),A.l,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.m(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hd,B.c3(new B.D(A.eY,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bl,j,j,j,j,2,D.c3c,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xf,j,j,j,j,j,j,!1,"\u2022",j,new C.eFm(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.T,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AE,A.ao,j,A.Vk,j,j),j),new B.p(r,j,p,q,o,j,A.n),A.bj),j),1)
q=B.m(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.ci(B.A(B.a([k.uF(G.OX,j,new C.eFn(k,i),d),k.uF(G.a1U,j,new C.eFo(k,i),d),k.uF(I.apJ,j,new C.eFp(k,i),d),k.uF(I.a2G,j,new C.eFq(k,i),d),k.uF(k.bEH(i.as),j,new C.eFr(k,i),d),k.uF(D.aqR,j,new C.eFs(k,i),d),k.uF(D.aqQ,j,new C.eFt(k,i),d)],t),A.l,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.i.L(i.w)
return B.bR(0,B.aJ(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.alr,B.q(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.an,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.de],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lN,j,j,j),j)],t),A.l,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bM
w=m.b
v=w===D.cW
u=B.m(18)
t=x.O
t=d?B.a([A.bp,A.T],t):B.a([A.c,A.aP],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7u(A.j3,"Edit",new C.eF6(o,m),d,!0))
if(w===D.lU)p.push(o.b7u(A.HO,"Shape & ring",new C.eF7(o),d,!0))
p.push(o.uF(A.D2,"Format",new C.eF8(o),d))
if(v)A.d.v(p,B.a([o.uF(G.OX,n,new C.eF9(o,m),d),o.uF(D.aqR,n,new C.eFa(o,m),d),o.uF(D.aqQ,n,new C.eFb(o,m),d)],q))
p.push(A.b3)
p.push(o.cxw(A.ei,n,o.gaTB(),d,!0))
p.push(o.uF(A.hI,"Done",new C.eFc(o),d))
return B.q(n,B.A(p,A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a9(A.a6,A.aa,A.x,t,n,n),A.n),n,n,n,A.Cb,A.lN,n,n,n)},
bEH(d){switch(d.a){case 2:return D.a2D
case 1:case 5:return D.a2F
default:return D.a2E}},
c8w(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e_
default:return A.bn}},
aC0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.av
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.m(12)
u=B.m(12)
t=h?K.I7:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e3,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qy,B.aJ(!1,A.a3,!0,n,B.aP(!1,v,!1,B.eJ(new B.D(new B.R(q,8,q,8),B.A(o,A.l,n,A.e,A.Q,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uF(d,e,f,g){return this.aC0(d,e,f,g,!1,!1)},
b7u(d,e,f,g,h){return this.aC0(d,e,f,g,h,!1)},
cxw(d,e,f,g,h){return this.aC0(d,e,f,g,!1,h)},
bRF(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bp,A.T],m):B.a([A.c,A.nq],m)
w=B.L(e?A.aM:A.nn,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3G(A.eN,"Back",p.gbKW(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.T,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.de,B.E(B.A(B.a([new B.dq(1,A.cr,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bW:A.an,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ul,o,A.e,A.j,0,A.d1,o),1)],q)
if(!p.ky()){u=p.a3G(A.pw,"Undo",p.ax.length===0?o:p.gcHq(),e)
A.d.v(r,B.a([u,p.a3G(D.bRu,"Redo",p.ay.length===0?o:p.gcsH(),e)],q))}r.push(p.a3G(A.z7,"PDF",new C.eEe(p),e))
r.push(p.a3G(A.hX,"Download as video",new C.eEf(p),e))
if(!p.ky())r.push(B.CC(o,o,B.X(A.ox,e?A.ab:A.bv,o,o,o,o),new C.eEg(p),A.I,new C.eEh(p),A.ag,"More",x.N))
r.push(A.de)
r.push(B.aJ(!1,A.a3,!0,o,B.aP(!1,B.m(14),!0,B.eJ(D.es4,o,new B.p(o,o,o,B.m(14),o,K.I7,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCQ(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.l,o,A.e,A.j,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bBD,D.bH1,o,o,o)},
cGQ(d){var w=this,v=null,u=B.m(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cq:A.aO,A.r,1)
return B.q(v,B.ci(B.A(B.a([w.j6(A.uT,"Print",new C.eIw(w),d),w.j6(A.z7,"Download PDF",new C.eIx(w),d),w.j6(A.qO,"Present",w.gaCQ(),d)],x.p),A.l,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yC,G.an1,v,v,v)},
a3G(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.ds
else w=g?A.ab:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cf)},
c7G(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cq:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eFw(r,d),t),t.k("ak.E"))
t.push(new B.D(Z.amH,new B.ff(new C.eFx(r),q),q))
A.d.v(t,w?B.a([new B.D(T.wn,r.aiy(A.kv,"Ending celebration",r.gciO(),d),q),new B.D(T.wn,r.aiy(A.HO,"Logo ring & frame",r.gcjv(),d),q)],x.p):A.f6)
A.d.v(t,w?B.a([new B.D(T.wn,r.aiy(A.ml,"Look and feel",r.gcjw(),d),q),new B.D(T.wn,r.aiy(A.py,"Edit this slide's text",r.gck2(),d),q)],x.p):A.f6)
t.push(new B.D(T.wn,B.hb(B.aA(q,B.q(q,D.f8N,A.f,q,q,new B.p(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.lH.j(0.4),A.I,10)],x.V),D.asV,A.n),q,34,q,q,A.f3,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eFy(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ci(B.A(t,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bHw,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.ci(r.cv7(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yC,q,q,q,q)},
cv7(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dmh[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwU(s),t.a,new C.eGV(u,e),a3,D.aSK.q(0,s)))}w.push(e.j6(A.lm,"Notes Slide",new C.eGW(e),a3))
w.push(e.lY(A.HN,"Quiz",new C.eGX(e),a3,!0))
w.push(e.lY(P.Ho,"Worksheet",new C.eH7(e),a3,!0))
w.push(e.lY(X.HR,"Flashcard",new C.eHi(e),a3,!0))
w.push(e.lY(A.HP,"Lab Report",new C.eHt(e),a3,!0))
w.push(e.lY(A.qK,"Rubric",new C.eHA(e),a3,!0))
w.push(e.lY(A.pr,"Minutes",new C.eHB(e),a3,!0))
w.push(e.lY(A.nJ,"Syllabus",new C.eHC(e),a3,!0))
w.push(e.lY(A.a3d,"Timeline",new C.eHD(e),a3,!0))
return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dnF[v]
w.push(e.lY(r.b,r.c,new C.eHE(e,r),a3,!D.aSQ.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.j6(A.wL,a0,e.gaP6(),a3),e.j6(A.uP,"Picture",new C.eGY(e),a3),e.j6(A.zh,"Bio link",new C.eGZ(e),a3),e.j6(A.a3c,"Table",new C.eH_(e),a3),e.j6(A.PO,"Sticky",new C.eH0(e),a3),e.j6(A.t1,"Divider",new C.eH1(e),a3),e.j6(A.zq,"Header",new C.eH2(e),a3),e.lY(A4.t_,"Rectangle",new C.eH3(e),a3,!0),e.lY(A.po,"Circle",new C.eH4(e),a3,!0),e.lY(A.a2t,"Triangle",new C.eH5(e),a3,!0),e.lY(A.jq,"Arrow",new C.eH6(e),a3,!0),e.lY(D.bPW,"Parallelogram",new C.eH8(e),a3,!0),e.lY(D.bSp,"Hexagon",new C.eH9(e),a3,!0),e.lY(A.t1,"Line",new C.eHa(e),a3,!0),e.lY(A.z7,"PDF",new C.eHb(e),a3,!0),e.lY(N.a3m,"Signature",new C.eHc(e),a3,!0),e.j6(A3.CO,"Quote",new C.eHd(e),a3),e.j6(D.a21,a1,new C.eHe(e),a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPZ("Wide 16:9",D.DV,a3),e.aPZ("Short 9:16",D.oO,a3),new B.D(A.fB,B.n2(D.bUA,d,D.fNg,d,new C.eHf(e),d,d,d,d),d)],u),A.l,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bLa("This slide",!e.Q,a3,new C.eHg(e)),A.bm,e.aSg("All slides",e.Q,a3,new C.eHh(e),!0)],u),A.l,d,A.e,A.j,0,d,d)
p=e.bLb()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bW:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5j,new C.eHj(e),n),n.k("ak.E"))
n=B.ci(B.A(n,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.doF[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.ds:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fB,B.aA(d,B.q(d,d,A.f,d,d,new B.p(j,d,new B.bG(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHk(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ci(B.A(l,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGQ()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHl(e,a3),g),g.k("ak.E"))
return new B.a6(w.a.a-20,d,B.x(B.a([t,A.U,q,A.am,p,A.U,o,A.ay,n,A.U,m,A.ay,l,A.U,j,A.ay,B.ci(B.A(h,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4k(a3)],u),A.E,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aI(w,A.c1,x.w).w
u=new C.eGU(e)
t=new C.eHF(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Sv,f.dy,new C.eHm(e,u,f),A.b1)
A.d.v(p,B.a([o,A.ay,n,A.U,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ay],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Sv,q,new C.eHn(e,u),A.bl))
return new B.a6(w.a.a-20,d,B.x(p,A.E,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j6(A.lm,w,new C.eHo(e),a3),e.j6(A.uT,"Print deck",new C.eHp(e),a3),e.lY(D.aoP,"Export JSON",new C.eHq(e),a3,!0),e.j6(A.fW,"Duplicate Slide",e.gaUw(),a3),e.j6(A.ei,a2,e.gaTC(),a3),e.cB1(a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j6(D.a21,a1,new C.eHr(e),a3),e.j6(A.fW,"Duplicate",e.gaUw(),a3),e.j6(A.ei,a2,e.gaTC(),a3),e.j6(A.qO,"Present",e.gaCQ(),a3),e.j6(A.D0,a0,e.gaP6(),a3),e.j6(A.CT,"Fit Text",new C.eHs(e),a3),e.j6(A.z7,"Download PDF",new C.eHu(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j6(A.jJ,"Transfer",new C.eHv(e),a3))
if(f!=null){w=B.a([A.ae,e.j6(G.OX,"Bold",new C.eHw(e,f),a3),e.j6(G.a1U,"Italic",new C.eHx(e,f),a3),e.j6(G.aoq,"Underline",new C.eHy(e,f),a3),e.j6(Af.OY,"Bullets",new C.eHz(e,f),a3),e.bUj(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bRK(a3))
w.push(e.j6(D.bOD,"Delete",e.gaTB(),a3))
A.d.v(u,w)}return B.A(u,A.l,d,A.e,A.j,0,d,d)}},
aPZ(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oO
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abs,t,t,t)],v)
if(w)A.d.v(u,B.a([A.de,D.bTL],v))
return new B.D(A.fB,B.jl(t,t,t,B.A(u,A.l,t,A.e,A.Q,0,t,t),t,new C.eDj(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cB1(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aT:A.cu,A.r,1)
u=B.m(8)
t=B.X(A.Hm,d?A.aD:A.an,q,q,q,14)
s=B.aG(q,q,q,q,D.arT,q,q,q,new C.eI1(r,p),q,q,q,q,q,A.cf)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bo,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arK,q,q,q,new C.eI2(r,p),q,q,q,q,q,A.cf)],x.p),A.l,q,A.e,A.Q,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.H0,A.n0,q,q,q)},
cwU(d){switch(d.a){case 6:return X.HR
case 7:return A.HN
case 8:return P.Ho
case 4:return A.zq
default:return A.lm}},
bUj(d,e){var w=null,v=B.L(e?A.aT:A.cu,A.r,1),u=B.m(8),t=B.aG(w,w,w,w,D.arT,w,w,w,new C.eEr(this,d),w,w,w,w,w,A.cf),s=A.i.L(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bo,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arK,w,w,w,new C.eEs(this,d),w,w,w,w,w,A.cf)],x.p),A.l,w,A.e,A.Q,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.uA,A.n0,w,w,w)},
c4k(d){var w=null
return B.CC(B.E4(B.X(A6.a24,d?A.ab:A.bv,w,w,w,16),w,w,D.fSZ,w,w,w),w,w,new C.eEZ(),A.I,this.gbFo(),A.cm,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dk:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dl:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.q(w,D.PV,A.f,w,w,D.Fk,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.eJ(new B.D(A.hd,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.Q,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j6(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8T(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hN(t,new C.eId(u,s,e,d),s.r.length,A.cm,t,w,new C.eIe(e),!1)
s=d?A.as:A.bO
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cm,B.IE(E.as6,new C.eIf(u),B.o_(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aTv,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.l,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJc(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oO?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bM(A.b7,v,v,new B.fF(w,B.aA(v,B.ct(new C.eDI(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eDJ(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJe(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kM(a9.w))===!0,b1=b0&&C.fRe(b3),b2=b0&&b3.b===D.lu&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6J(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6I(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ca:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hgc(b3))o=a8
else if(p&&!a7.ky())o=a7.gcfj()
else o=a7.ky()?a8:new C.eDw(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iL
i=w&&C.hgc(b3)&&a7.Aq()?new C.eDx(a7,b3):a8
h=v&&b3.b===D.cW?new C.eDy(a7,b3):a8
g=u?new C.eDz(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.b8
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.lu?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Aq()
a3=b3.b===D.cW
a4=a3?a7.Xz(b3):a8
a5=a3?a7.avy(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eDA(a7,b3):a8
a3=v&&a3?new C.eDB(a7,b3):a8
a6=C.b3l(q,a4,a1,b3,a5,a2,a3,new C.eDC(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ap(-4,B.aA(a8,B.q(a8,D.bWE,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDD(a7,b3,b4,b5),a8,a8,new C.eDE(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bXl,A.f,a8,a8,new B.p(A.db,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1P(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bYZ,A.f,a8,a8,new B.p(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDF(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cW)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.q(a8,D.h1a,A.f,a8,a8,new B.p(A.bl,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lj,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDG(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eM(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bJ("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSg(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.L(e?A.bl:A.by,A.r,1)
if(e)t=A.bl
else t=f?A.aD:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.de,B.q(r,D.PV,A.f,r,r,D.Fk,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.q(r,B.A(t,A.l,r,A.e,A.Q,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bLa(d,e,f,g){return this.aSg(d,e,f,g,!1)},
cf3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aQ),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aP
t=f?A.xJ:l
if(f)s=new B.bG(new B.ay(e?A.by:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tp,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ab:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3W(e,new C.eFA(m))],q),A.l,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bW:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(10),A.dq),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eFB(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVP(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bM
w=new C.eEF(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.i.D(1-a2.c,0.06,1)
t=A.i.D(1-a2.d,0.06,1)
s=A.i.D(1-a2.e,0.01,1)
r=A.i.D(1-a2.f,0.01,1)
q=a5?A.dW:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.T,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3W(a3,a0.gbPL())],p),A.l,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fNN,B.E(B.kV(a1,a1,a1,u,0.05,new C.eEG(w,a2),A.i.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.h_x,B.E(B.kV(a1,a1,a1,t,0.05,new C.eEH(w,a2),A.i.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cW
if(m)o.push(B.A(B.a([D.fHf,B.E(B.kV(a1,a1,a1,96,10,new C.eEI(w,a2),A.i.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
l=n===D.lU
if(l||n===D.lu||n===D.TQ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fTP,B.E(B.kV(a1,a1,a1,s,0,new C.eEJ(w,a2),A.i.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.h0S,B.E(B.kV(a1,a1,a1,r,0,new C.eEK(w,a2),A.i.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Dj[j]
i.a=null
g=h.a
i.a=g
k.push(B.jl(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pT,a1,a1,a1),a1,new C.eEL(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bV(A.bG,k,A.bs,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Dc[j]
f.a=null
g=e.a
f.a=g
h.push(B.jl(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pT,a1,a1,a1),a1,new C.eEM(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.U,l,A.am,k,A.U,i,A.am,B.bV(A.bG,h,A.bs,a1,6,6)],p))}o.push(A.U)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eEN(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bV(A.bG,l,A.bs,a1,6,6),A.af,B.hsF(new C.eEO(w,a2),D.cAN,B.ez([a2.as],k),!0,a1,k)],p))}if(n===D.fi){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eEP(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bV(A.bG,m,A.bs,a1,0,6)],p))}o.push(A.af)
o.push(B.dg(D.bYL,a1,D.fVU,new C.eEQ(a0,a5),B.bo(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cd(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cq:A.c
p=a4?A.xJ:a1
if(a4)o=new B.bG(new B.ay(a3?A.by:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tp,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GK,a1,a1,a1)},
bUA(d){return this.aVP(d,!1,!1,null)},
cec(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eET(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fwF,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bH,A.cU,r.bEJ(D.d4c,d,B.S(v).ax.a===A.J)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dP(B.hb(B.aJ(!1,A.a3,!0,q,B.aP(!1,q,!0,B.eJ(D.ffe,q,new B.p(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c4.j(0.4),A.et,8)],p),D.at_,A.a7),q,q,q),A.cR,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.A(v,A.l,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.S(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.bf7,D.bfA],v):B.a([A.c,A.kQ],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.q(q,t,A.f,q,q,new B.p(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bV,q,q,q)},
aOQ(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eCs(this,g,d,e,f),null)},
ahR(d,e){return this.cqU(d,e)},
cqU(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b6,A.aQ),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eGx(d,q),p,null,!0,!0,x.N),$async$ahR)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahR,v)},
QH(d){var w=d.bT()
return""+B.bL(w)+"/"+B.bU(w)+"/"+B.bC(w)}}
C.agj.prototype={}
C.aAH.prototype={
S(){return new C.beZ(null,null)}}
C.beZ.prototype={
gcDn(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bL(u)+"/"+B.bU(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a2()
w=B.bn(u,A.qv,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bA6,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.by_()},
Jz(d){var w=0.12+d*0.09,v=A.i.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hX(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bFP,B.c9(new B.h6(B.a([u,w],x.dS)),new C.daH(this),v),v),v,v,v)}}
C.bfd.prototype={
B(d){var w=null,v=B.m(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bG5,B.aJ(!1,A.a3,!0,w,B.q(w,B.by(B.m(22),B.x(B.a([new B.D(D.bFg,B.x(B.a([B.q(w,D.bXr,A.f,w,w,new B.p(A.av.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fY5,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fxV,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.dY,D.bz9,B.A(B.a([B.E(B.bN(!1,D.fLW,w,w,!0,w,w,w,new C.db4(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nD,w,A.oT,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fRo,w,w,!0,w,w,w,new C.db5(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.av,w,w,w,w,w,A.nD,w,A.oT,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w)],t),A.l,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.XB,new B.p(A.as,w,u,v,D.d4B,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KG.prototype={
S(){return new C.beY()}}
C.beY.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.q(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.p(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.da(B.aA(o,B.vY(B.cT(o,B.A(B.a([r,A.au,new B.dq(1,A.cr,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eU:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.bc,A.Q,0,o,o),o,o,A.b4,new B.p(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nE,o,o,1/0),A.cw,A.j0,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.daC(p,d),new C.daD(p),new C.daE(p),new C.daF(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.Qy.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aJ(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.eY,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ex,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nh,v,v,v),A.bH,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eJ,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0L.prototype={
S(){return new C.aGg(D.dm,null,null)}}
C.aGg.prototype={
gZR(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bzG,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b9m(d){if(!this.a.c.ay)return
this.x=d
this.gZR().iB(0,0)},
Y(){var w,v=this
v.a2()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axy(D.flI)
C.ils()
v.Sa()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZR().t()
v=w.z
if(v!=null)v.a1(0)
C.axy(D.flJ)
C.ilv()
w.bA5()},
cGd(){B.jV()
this.m(new C.eJc())
var w=this.c.M(x.q).f
w.a5U()
if($.bmV)w.U(D.fiz)},
Sa(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dp(0,0,0,0,0,A.o.D(C.hqR(u,w),1,120)),new C.eJ2(v))},
cFR(){var w,v=this
v.m(new C.eJb(v))
if(v.r)v.Sa()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXL(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czL(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJ3(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lK,new C.eJ4(w))},
azD(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eIZ(u))
u.Sa()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXL()){u.czL()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eJ_(u,A.o.F(w+1,s)))
u.b9m(w)
u.Sa()}},
cpy(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJ0(v))
v.Sa()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJ1(v,w,t))
v.b9m(w)
v.Sa()}},
cBh(d){var w,v=this,u=v.e
if(u===D.ct){u=v.d
u===$&&B.c()
return new B.mL(d,new B.bJ(u,x.ac))}w=v.cBi(u)
u=v.d
u===$&&B.c()
return B.p8(new B.mL(d,new B.bJ(u,x.ac)),w,new C.eJ9(),A.b4,A.b4,new C.eJa(v))},
cBi(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bA2
case 16:return A.iu
case 18:return A.mW
default:return A.md}},
cBg(d,e,f){var w,v,u,t=null,s=B.cJ(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.vo,A.I,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.U3,A.I,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.ik,A.I,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.to,A.I,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.c9(s,new C.eJ5(s),e)
case 9:return B.c9(s,new C.eJ6(s),e)
case 10:return B.c9(s,new C.eJ7(s),e)
case 11:return B.c9(s,new C.eJ8(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.it(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jm(B.jH(e,new B.bg(s,new B.br(A.vo,A.I,v),v.k("bg<bO.T>")),t,!0),A.t,new C.bub(w,t))
case 15:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.U3,A.I,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.ds()
w.n_((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fx(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eM(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jm(new C.apR(B.c9(n.gZR(),new C.eJd(n,v,w),m),m),A.t,m)}else{t=B.t1(new C.JE(w,!0,!1,m))
l=B.b0(w.e)
u=n.cBh(B.e8(B.jm(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hqR(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p_,m,m,m),A.bm,D.bZQ],k),A.l,m,A.e,A.Q,0,m,m),A.f,m,m,new B.p(A.aU,m,m,l,m,m,A.n),m,m,m,m,A.hc,m,m,m)
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
l.push(B.bR(0,new C.Ol(new C.Fk(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oO?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jm(B.v_(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmV){r=B.IE(A.lp,new C.eJe(d),B.o_(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.IE(B.X(n.r?Al.uS:A.hx,m,m,m,m,m),n.gcFQ(),B.o_(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ap(16,B.bm(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fY,m,m,m),A.f,m,m,new B.p(A.aU,m,m,r,m,m,A.n),m,m,m,m,A.hc,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.aA(A.c5,B.q(A.lA,$.bmV?A.bM:s,A.f,m,m,m,m,64,m,m,D.bAN,m,m,150),A.y,!1,m,n.gcGc(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.aA(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJf(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KM.prototype={
B(d){var w=null
return B.q(w,B.bm(!0,new B.D(E.amt,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7H,w,w,w,w,w,w,w,w)}}
C.bub.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bk_.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.m(999)
break
case"rounded":w=B.m(18)
break
case"arch":w=D.b4s
break
default:w=B.m(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.m(999)
else{t=B.m(q==="rounded"?9:3)
q=t}w=B.cT(r,B.at(B.q(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wR,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b4,new B.p(s.f,r,u,w,r,r,A.n),A.h1,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a6(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjZ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dCc.h(0,p)
if(o==null)o=D.dnP
p=p==="none"
w=p?q:new B.a9(A.a6,A.aa,A.x,o,q,q)
p=p?A.d0.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ar4:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a7),q,52,q,q,A.eA,q,q,52)
return B.aA(q,new B.a6(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aM4.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aO4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bA_.prototype={}
C.aO5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3o.prototype={}
C.X8.prototype={
S(){return new C.aGe()},
bk7(d){return this.e.$1(d)}}
C.aGe.prototype={
gb7A(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabJ(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7A()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQS(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7A()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8S(){return A.d.cF(this.gabJ(),0,new C.eIJ())},
Y(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RL()},
RL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4_(s.c,s.f),$async$RL)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eIF(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RL,v)},
JB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabJ()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fUt(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pv(o,q.c,q.f),$async$JB)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.eII(t,p),!1,null,x.H)
w=4
return B.b(B.a7(o,!1).ca(q),$async$JB)
case 4:q=t.a
w=5
return B.b(B.pu(q.c,q.f),$async$JB)
case 5:w=6
return B.b(t.RL(),$async$JB)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JB,v)},
S8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.ef4,!0,"NgmySlidesTransferScan",x.N),$async$S8)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eIG(t))
w=4
return B.b(C.aiy(s),$async$S8)
case 4:r=e
t.m(new C.eIH(t))
o=J.a5(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.M(x.q).f.U(D.fho)
w=1
break}w=5
return B.b(t.a.bk7(r),$async$S8)
case 5:q=t.c
if(q==null){w=1
break}B.a7(q,!1).O(null)
q=t.c.M(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S8,v)},
JA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabJ()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pv(s,r.c,r.f),$async$JA)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fUI(null,A.d.gH(n),s,t.a.f)}else q=C.fUI(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hg(q,"ngmy_slides_"+p,!1),$async$JA)
case 4:o=e
s=t.a
w=5
return B.b(B.pu(s.c,s.f),$async$JA)
case 5:w=6
return B.b(t.RL(),$async$JA)
case 6:s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JA,v)},
a3R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eIK(t))
w=3
return B.b(C.bFi(),$async$a3R)
case 3:s=e
t.m(new C.eIL(t))
if(s==null||J.cq(s)){w=1
break}w=4
return B.b(t.a.bk7(s),$async$a3R)
case 4:r=t.c
if(r==null){w=1
break}B.a7(r,!1).O(null)
r=t.c.M(x.q).f
q=J.a5(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3R,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.dh:A.bO,k=o.gabJ().length!==0,j=B.ap(n,B.q(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.c0(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eIO(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.T,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.x9],h),A.l,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.f_,24)],x.V)
u=B.ap(n,B.X(A.qH,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.q(n,D.c_o,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ex,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ay,D.bKW],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hb(B.aA(A.c5,D.ffh,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcke(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a3S,A.n),n,n,n,n,E.a0A,n,n,1/0),A.dY,o.azE(m,"What to transfer"),A.af,B.A(B.a([B.E(o.b_c(A.qO,m,new C.eIP(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.b_c(D.bPP,m,new C.eIQ(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.azE(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.m(16)
s=B.L(m?A.by:A.aO,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eIR(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.nd)
w.push(o.azE(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.asd(A.aH,k,!0,A.jI,m,o.r,o.gceg(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOR(A.jW,!0,A.jr,m,o.gcwt(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.j,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bDc(A.aY,k,A.hX,m,o.r,o.gced(),"Download .json","Backup file"),1),A.au,B.E(o.aOR(A.aw,!0,AA.zp,m,o.gcIK(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.j,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.m(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lQ,A.bl.j(0.9),n,n,n,18)
r=o.gaQS()
q=o.gb8S()
p=o.gb8S()===1?"":"s"
A.d.v(w,B.a([A.bA,B.q(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ab:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bF,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ah.Ot,i,n),B.E(B.cd(w,n,n,D.bEo,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,V.XT,A.f,A.dO,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
ah1(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.isv(s,t.d,t.e),$async$ah1)
case 2:return B.h(null,v)}})
return B.i($async$ah1,v)},
azE(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.p(A.bl,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
b_c(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.as:A.c
if(g)w=A.bl
else w=e?A.by:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cA,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.m(12)
t=B.q(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.T,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.eJ(new B.D(A.bF,B.x(B.a([t,A.X,u,A.bH,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNQ(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.as:A.c,m=B.m(16)
if(p)w=A.bl
else w=e?A.by:A.aO
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c_A,A.f,q,q,new B.p(q,q,q,B.m(12),q,new B.a9(A.a6,A.aa,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.T,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.po
if(p)r=A.bl
else r=e?A.aT:A.ds
return new B.D(A.cx,B.aJ(!1,A.a3,!0,q,B.aP(!1,o,!0,B.q(q,B.A(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bF,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eIE(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
asd(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.by:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.rX,s,s,s)],t)
if(i)u.push(B.ap(s,B.q(s,D.arE,A.f,s,s,D.b7t,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.T,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aJ(!1,A.a3,!0,s,B.aP(!1,p,!0,B.eJ(new B.D(E.a0d,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bH,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOR(d,e,f,g,h,i,j){return this.asd(d,e,!1,f,g,!1,h,i,j)},
bDc(d,e,f,g,h,i,j,k){return this.asd(d,e,!1,f,g,h,i,j,k)}}
C.X9.prototype={
S(){return new C.bmU()}}
C.bmU.prototype={
Y(){this.a2()
this.afO()},
afO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fUI(null,A.d.gH(m),k,r.a.f):C.fUI(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kM(A.d.gH(n).w))C.fUt(A.d.gH(r.a.d),D.dlx)
n=r.a
m=n.c
n=C.ioQ(n.d)
w=7
return B.b(C.fUH(p,C.ioV(r.a.d),n,m,q),$async$afO)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eIS(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eIT(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.S(d).ax.a===A.J,h=i?A.dh:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cF(k.a.d,0,new C.eIU())
v=B.aG(j,j,j,j,B.X(A.eN,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eIV(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.T,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.x9],u),A.l,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.di,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.U,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a3S,A.n),j,j,j,j,E.a0A,j,j,1/0)
q=B.m(24)
s=B.L(A.aH.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vs,A.K,j,j))
else if(k.d==null)r.push(D.erE)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fMq,A.am,B.aA(j,B.q(j,B.A(B.a([D.c17,A.au,B.d(m,j,j,j,j,j,j,D.fyk,j,j,j)],u),A.l,j,A.e,A.Q,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c60,A.n),j,j,j,j,A2.amf,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eIW(k,d),j,j,j,j,j,j,!1,A.a4),A.U,D.fQV,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.L(A.by,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.qb(j,j,!1,l,j,!0,!0,j,!1,D.bvd),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hk,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ah.Ot,v,j),B.E(B.ci(B.x(B.a([t,A.aR,B.q(j,B.x(r,A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c7W,A.n),j,j,j,j,A.uz,j,j,1/0)],u),A.l,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.amy,j,j,A.ah),1)],u),A.l,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGb.prototype={
S(){return new C.aGc(new B.au(A.ax,$.aw()),B.k8(!0,null,!0,!0,null,null,!1))}}
C.aGc.prototype={
Y(){var w=this
w.a2()
w.e.aW(0,new C.eCm(w))
$.aW.x1$.push(new C.eCn(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a3()},
b22(){var w,v=this.c
v.toString
w=C.zf(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a7(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eQ,x.w).w,i=B.m(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vl,36),D.aeD],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bXv,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fJp,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.j,0,A.p),A.f,k,k,D.b7U,k,k,k,k,A.yO,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.T
o=new B.aN(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.bz(1,A.bd,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.frC,k,k,k),k,k,A.b4,new B.p(s,k,new B.bG(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h1,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A.xa)
A.d.v(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.j,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c3V,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uU(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C7(5,k),new C.bxt()],x.aS),k,k,A.aUI,k,5,k,1,k,k,!1,"\u2022",k,new C.eCi(l),k,new C.eCj(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mA,k,k,k,k),0),0,0,0)],a1)
d=C.zf(w.a.a.toUpperCase())==null?k:l.gceh()
return B.at(new B.D(new B.R(24,24,24,24+j.f.d),B.aJ(!1,A.a3,!0,k,new B.cS(Ae.LU,B.q(k,B.by(e,B.x(B.a([a0,new B.D(D.bEU,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.X,D.fHH,A.bA,new B.a6(1/0,50,B.bI(D.fZ_,k,d,B.bo(A.bl,A.bp,A.an,k,A.c,k,k,k,new B.b9(B.m(16),A.a1),k,k,k)),k),A.am,B.bN(!1,A.o_,k,k,!0,k,k,k,new C.eCk(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.j,0,A.p),k)],a1),A.l,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.p(A.dh,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxt.prototype={
oY(d,e){var w=e.a.toUpperCase()
return e.cPi(B.hg(A.bB,w.length),w)}}
C.asU.prototype={
S(){return new C.aGf(B.zW(A.NH,A.o5,A.v2))}}
C.aGf.prototype={
t(){this.d.t()
this.a3()},
b21(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j_(w,d)},
abE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h2F(s),$async$abE)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b21("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abE,v)},
cef(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.ioT(w[u])
if(t!=null){this.b21(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wN,s,s,s,t.gbSi(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eE(B.a([r,B.aG(s,s,s,s,B.X(q?A.uM:Am.Ps,s,s,s,s,s),s,s,s,new C.eIY(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dh,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h_d,s,s,s,1,s,!0)
r=B.zV(t.d,A.c_,t.gcee())
w=B.m(28)
w=B.at(B.q(s,s,A.f,s,s,new B.p(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ap(32,B.q(s,D.fNy,A.f,s,s,new B.p(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jo,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxH.prototype={
B(d){var w=null,v=B.m(24),u=B.L(A.aM,A.r,1)
return B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.arj,A.f,w,w,D.b7D,w,56,w,w,w,w,w,56),A.aR,D.fZU,A.am,new B.k1(this.c,new C.fjD(),w,w,x.cI),A.aR,new B.k1(this.d,new C.fjE(),w,w,x.cl),A.af,D.fZS],x.p),A.l,w,A.e,A.Q,0,A.p),A.f,w,Ae.LU,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0G,D.bFx,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8R.prototype={
S(){return new C.bmD(A.bE)},
gd1(){return this.c}}
C.bmD.prototype={
Y(){var w=this
w.a2()
if(w.a.d)return
w.a06()
w.d=B.dc(A.fA,new C.eqC(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a06(){return this.csO()},
csO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a06=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eqA(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.clM(p.c),$async$a06)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.eqB(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a06,v)},
bUr(d){var w,v,u=d.a,t=A.o.ap(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ap(u,6e7)%60
v=A.o.ap(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.ap(w,6e7)<30&&A.o.ap(w,36e8)<999?A.av:A.c4
w=v.j(0.14)
u=B.m(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hm,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bUr(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.j,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A_.alm,A.iv,r,r,1/0)}}
C.a9K.prototype={
nv(){var w,v,u,t=this
t.xV()
w=t.cx
v=t.c
w.but(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qh(B.I(["/S",D.evw,"/URI",new B.rX(B.XL(w.as),A.vp,!0)],x.N,u),u))}}
C.a9L.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b53.prototype={
bCb(d,e,f,g,h,i,j,k,l,m){var w=B.ez([D.etP],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSN(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k7(w,new C.cpG(),B.a4(w).k("k7<cj.E,G>")).f1(0,new C.cpH())},
aF9(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tZ(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jr(d.a,d.b))
s.n(0,"/Border",B.tZ(H.atn))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h4(t.gcSN()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qh(w,x.Y))}}
C.cpI.prototype={}
C.a4a.prototype={}
C.ajt.prototype={}
C.aTf.prototype={
fW(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.MB(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjs(w)
u=x.N
t=x.Y
s=new C.cpI(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bCb(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qh(B.I(["/Type",D.evu],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9K(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayx.prototype={}
C.aUJ.prototype={
fW(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.ds()
u=s.a
v.ej(u.a,u.b,0,1)
u=d.b
u.it()
t=s.a
t.toString
u.LJ(t)
u.Tq(0)
u.pm(0,v)
w.fW(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(m0)","P(i4)","~()","P(eP)","P(oK)","P(m0)","~(i4)","P(eP,eP)","KM(Z)","P(o9)","P(lu)","aB<P>()","G(G,i4)","a8<n,@>(i4)","ai<Ae>()","n(o9)","P(a97)","n(m0)","n(ww)","P(Ft)","G(i4,i4)","n(eP)","v(eP)","cL(eP)","v(hF)","~(hF)","eP(vf,F,F,F,F,G{fx:n,key:n,rotation:F})","eP(n,F,G)","G(oK,oK)","P(Ae)","P(n,ai<Ae>)","a8<n,@>(oK)","o9()","ZR(Z)","eP(n,F,F,F,F,F{align:qm,anim:hF,bullets:P,color:G?,delay:G,fx:n,key:n,style:Ix,weight:nX})","a29(Z)","eP(n,F,F,F,F{anim:hF,delay:G,fx:n,key:n})","aB<~>(oK)","P(mP)","ZP(Z)","a1F(Z)","a1E(Z)","Qn(Z)","a01(Z)","eP(vf,F,F,F,F,G,n,n{anim:hF,delay:G,rotation:F,stroke:G,strokeWidth:F})","eP(n,F,F,F,F,F,n,n,G)","eP(F,F,n,G{size:F})","v(rL,F,F)","lu()","oK(a8<@,@>)","~(v5)","Ft()","fi(eP)","v(jb)","a_z(Z)","~(Fk)","a_U(Z)","G(eP,eP)","eP(eP)","a8<n,@>(eP)","eP(a8<@,@>)","m0(m0)","a8<n,@>(m0)","m0(a8<@,@>)","P(jY)","jY()","n(i4)","~(ai<oK>)","V(ai<i4>)","V(i4)","ai<i4>(n?)","adQ(Z,G)","~(P(eP,eP))","aeu(Z)","ag9(Z,G)","u(m0,P)","WX(Z)","aex(Z)","WY(Z)","~(mT)","i4(i4)","F(eP)","a18(Z)","a0L(Z)","i4()","ai<FQ>()","aB<~>(ai<i4>)","v(bB<G,i4>)","D(jY)","D(Ft)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(mq)","ai<jE<mT>>(Z)","jE<mT>(mT)","i4(a8<@,@>)","X8(Z)","eP(n,F,F,F,F,F,G{align:qm,style:Ix,weight:nX})","X9(Z)","v(i4)","~(mi)","JE(Z,m0,v?)","G(a9L)","aB<ai<a8<n,@>>?>()","n(n)","aB<Ad>({paper:n?,photo:dK?,request:n,template!lx})","aB<a9_>({doc!Ad,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lx})","aer(Z)"])
C.cOV.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:61}
C.cOW.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:69}
C.cOX.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galF(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mD(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:69}
C.cOY.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTM.prototype={
$1(d){return J.eD(A.dN.gaU(d),d.byteOffset,d.byteLength)},
$S:1695}
C.fGM.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1696}
C.c3H.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:31}
C.c3I.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:41}
C.c3K.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fXI.prototype={
$1(d){return new C.a29(this.a,this.b,C.ipL(),null)},
$S:z+36}
C.fi5.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fi9.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fia.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fib.prototype={
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
C.fi6.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fi7.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fi8.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fi0.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hj,w,w,w)
return B.eg(B.a([B.bN(!1,E.aWP,w,w,!0,w,w,w,new C.fhZ(d),w,w),B.bN(!1,D.fKX,w,w,!0,w,w,w,new C.fi_(d),w,w)],x.p),w,w,D.a_1,v,w,w,w,w,D.h_w,w)},
$S:18}
C.fhZ.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.fi_.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.fi1.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fi2.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fif.prototype={
$0(){var w=this.a
return w.m(new C.fie(w,this.b))},
$S:0}
C.fie.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fi4.prototype={
$0(){var w=this.a
return w.m(new C.fi3(w,this.b,this.c))},
$S:0}
C.fi3.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fic.prototype={
$0(){return this.a.a2e(this.b)},
$S:0}
C.fid.prototype={
$0(){return this.a.PL(0,this.b)},
$S:0}
C.fii.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.fij.prototype={
$0(){var w=this.a
return w.m(new C.fih(w,this.b))},
$S:0}
C.fih.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fig(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fig.prototype={
$1(d){return d.a},
$S:z+67}
C.fpJ.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.ho2(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oK(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fpK.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fJY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcG()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fJW.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fJX.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fX9.prototype={
$1(d){return d.aj()},
$S:z+32}
C.fGm.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fY3.prototype={
$1(d){return new C.ZR(this.a,null)},
$S:z+34}
C.cQh.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cQj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQl())},
$S:12}
C.cQl.prototype={
$0(){},
$S:0}
C.cQo.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a38(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cQk(r))
if(p<0)q.c3(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiH(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:332}
C.cQk.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQp.prototype={
$1(d){},
$S:32}
C.cQi.prototype={
$1(d){return new C.ZP(this.b,this.a.gcCI(),null)},
$S:z+40}
C.cQq.prototype={
$1(d){return D.hss},
$S:z+43}
C.cQd.prototype={
$1(d){var w=null,v=B.m(24),u=B.L(D.Zz,A.r,1),t=x.p
return B.at(B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bFj,B.x(B.a([B.q(w,D.bUB,A.f,w,w,new B.p(A.av.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fJQ,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fxe,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.qA,B.A(B.a([B.E(B.dU(D.fQX,new C.cQb(d),B.di(w,w,w,w,w,w,w,w,w,E.ny,w,w,A.cp,w,new B.b9(B.m(14),A.a1),D.b4U,w,w,w,w)),1),A.au,B.E(B.bI(D.fXe,w,new C.cQc(d),B.bo(A.bC,w,w,w,w,w,A.cp,w,new B.b9(B.m(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w),w)],t),A.l,w,A.e,A.Q,0,A.p),A.f,w,A.xM,new B.p(D.agr,w,u,v,D.d9p,w,A.n),w,w,w,K.a0G,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1697}
C.cQb.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.cQc.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.cQe.prototype={
$0(){return J.nR(this.a.d,new C.cQa(this.b))},
$S:0}
C.cQa.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQ9.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.L(D.Zz,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.bZI,A.f,t,t,new B.p(t,t,t,B.m(14),t,D.asV,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aWt,t,t,t),A.bH,D.fX9],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.l,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dxe[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azt(u[1],u[2],u[3],new C.cQ7(v,d),!1,t))}q.push(A.am)
q.push(D.bzc)
q.push(A.am)
q.push(new C.azt(A.ei,"Delete book","Remove it from this device",new C.cQ8(d),!0,t))
return B.bm(!0,B.q(t,B.x(q,A.E,t,A.e,A.Q,0,A.p),A.f,t,t,new B.p(D.agr,t,r,s,t,t,A.n),t,t,t,A.uv,R.Of,t,t,t),!0,!1,A.ag,!0,!0)},
$S:25}
C.cQ7.prototype={
$0(){var w=this.a.a
B.a7(this.b,!1).O(w)
return null},
$S:0}
C.cQ8.prototype={
$0(){B.a7(this.a,!1).O("delete")
return null},
$S:0}
C.cQg.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLL,12)],x.V)
return B.dP(B.eM(A.A,e,B.q(w,B.by(B.m(4),new B.a6(62,95.81818181818181,B.ev(A.A,F.apD(d),A.f,A.dB),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+48}
C.cQf.prototype={
$0(){return this.a.c8l()},
$S:0}
C.cQ6.prototype={
$0(){return this.a.b0q(0,this.b)},
$S:0}
C.cQ5.prototype={
$0(){return this.a.DO(this.b)},
$S:0}
C.cQ4.prototype={
$0(){return this.a.DO(this.b)},
$S:0}
C.cQr.prototype={
$2(d,e){var w=this.a
return w.bGN(J.t(w.d,e))},
$S:43}
C.cPy.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bm()},
$S:0}
C.cPx.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3A("Page "+(v.length+1),"",""))},
$S:0}
C.cPA.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPI.prototype={
$0(){},
$S:0}
C.cPJ.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cPB.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcu().aN(this.c)},
$S:0}
C.cPz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPD.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.cPE.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.cPF.prototype={
$0(){var w=this.a
w.m(new C.cPC(this.b))
w.EC()},
$S:0}
C.cPC.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPG(w,d))
w.EC()},
$S:z+51}
C.cPG.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPO.prototype={
$2(d,e){if(d)this.a.Bm()},
$S:128}
C.cPK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bm(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.M(x.q).f.U(D.fjY)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cPL.prototype={
$0(){return this.a.b_j(this.b,-1)},
$S:0}
C.cPM.prototype={
$0(){return this.a.b_j(this.b,1)},
$S:0}
C.cPN.prototype={
$0(){return this.a.c9L(0,this.b)},
$S:0}
C.fOw.prototype={
$1(d){return C.hyb()},
$S:44}
C.fOx.prototype={
$1(d){return null},
$S:32}
C.fu4.prototype={
$1(d){return null},
$S:32}
C.fPv.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:304}
C.fPu.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:208}
C.fPB.prototype={
$1(d){var w=this.a
return C.hg3(d)===w||C.hD1(d)===w},
$S:z+4}
C.ft5.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.cfZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fOu.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fOv.prototype={
$1(d){return C.fRe(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fJk.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yN,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fRz,A.U,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.I_,w,D.fLz,new C.fJi(d),B.bo(A.c4,w,w,w,A.w,w,A.cp,w,w,w,w,w)),A.X,B.es(A.uX,D.fSS,new C.fJj(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xK,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJi.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJj.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.fJl.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,D.fHx,w,w,!0,w,w,w,new C.fJg(d),w,w),B.bI(D.fZx,w,new C.fJh(d),w)],x.p),w,w,w,D.h0u,w,w,w,w,D.fHq,w)},
$S:18}
C.fJg.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.fJh.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.elT.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.elR.prototype={
$0(){return this.a.e=!0},
$S:0}
C.elS.prototype={
$0(){return this.a.f=!0},
$S:0}
C.elU.prototype={
$0(){return this.a.r=!1},
$S:0}
C.elV.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fPA.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.fPw.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a6,w,w,B.BX(A.A,B.q(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1698}
C.fPy.prototype={
$1(d){var w=null,v=B.m(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fyz,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:139}
C.fPz.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.is,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.is,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.l,w,A.bc,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1699}
C.fPx.prototype={
$2$female$size(d,e){var w=null,v=d?D.aiE:this.a,u=B.L(A.is,A.r,1),t=e*0.32,s=B.ap(w,B.q(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ap(e*0.06,B.q(w,w,A.f,w,w,new B.p(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agH,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1700}
C.h0w.prototype={
$1(d){return new C.aer(this.a,this.b,null)},
$S:z+108}
C.e8i.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bvP:A.N7,q=B.L(D.jB.j(0.25),A.r,1),p=B.at(B.q(t,t,A.f,t,t,new B.p(A.c4.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.q(t,D.arD,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jB.j(0.35),A.et,10)],x.V),D.c8x,A.n),t,t,t,t,A.yD,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(O.a0w,B.x(B.a([p,A.aB,B.A(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jB,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fxL,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.l,t,A.e,A.j,0,t,t)],u),A.l,t,A.e,A.j,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aTM,new C.e8h(w,this.c),v,D.am9,t,A.ah,!1),1)],u),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(r,t,q,A.mG,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:118}
C.e8h.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adQ(w,new C.e8g(this.b,w),null)},
$S:z+72}
C.e8g.prototype={
$0(){B.a7(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fJo.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fJp.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yN,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fVd,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.I_,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJm(d),B.bo(D.jB,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oF,D.VZ,new C.fJn(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xK,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJm.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJn.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.fJs.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fJt.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yN,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fIC,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.I_,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJq(d),B.bo(D.jB,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oF,D.VZ,new C.fJr(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xK,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJq.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJr.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.fJw.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fJx.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yN,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fPk,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.I_,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJu(d),B.bo(D.jB,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oF,D.VZ,new C.fJv(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xK,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJu.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJv.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.h1Z.prototype={
$1(d){return D.hxF},
$S:z+74}
C.eqF.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bmk:A.N7,s=B.L(A.aC.j(0.25),A.r,1),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.q(v,D.c14,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c4.j(0.35),A.et,10)],x.V),D.at_,A.n),v,v,v,v,A.yD,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(O.a0w,B.x(B.a([r,A.aB,B.A(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.N3,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bH,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fv9,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.l,v,A.e,A.j,0,v,v)],w),A.l,v,A.e,A.j,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aTM,new C.eqE(this.b),19,D.am9,v,A.ah,!1),1)],w),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.mG,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eqE.prototype={
$2(d,e){var w=D.SM[e]
return new C.ag9(w,new C.eqD(this.a,w),null)},
$S:z+75}
C.eqD.prototype={
$0(){B.a7(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fRi.prototype={
$0(){return B.heZ(C.icX(this.a))},
$S:334}
C.fRh.prototype={
$0(){var w=C.hgm(this.a)
return"data:image/png;base64,"+A.cP.gcu().aN(w)},
$S:22}
C.frm.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.js(d,e),new B.js(w,e+v),new B.js(d+f*14,e),new B.js(w,e-v)],x.J)
B.a34(this.a,C.fE(4291404327),v)},
$S:677}
C.h29.prototype={
$1(d){return new C.WX(this.a,null)},
$S:z+77}
C.etC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etB())},
$S:28}
C.etB.prototype={
$0(){},
$S:0}
C.etD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etA(w,d))},
$S:1702}
C.etA.prototype={
$0(){return this.a.x=J.eT(A.dN.gaU(this.b))},
$S:0}
C.etE.prototype={
$1(d){},
$S:32}
C.ete.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eta.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etl.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etm.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eGe)},
$S:0}
C.etn.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etg.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.ce)},
$S:0}
C.eth.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eti.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.etj.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etk.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iJ)}},
$S:7}
C.etf.prototype={
$0(){var w=this.a,v=w.z,u=C.fRW(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOr(C.fRW(t))},
$S:0}
C.etc.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.etd.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ett.prototype={
$0(){return B.a7(this.a,!1).hV()},
$S:0}
C.etu.prototype={
$0(){var w=this.a
return w.m(new C.ets(w))},
$S:0}
C.ets.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.etv.prototype={
$0(){var w=this.a
return w.m(new C.etr(w,this.b))},
$S:0}
C.etr.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.etw.prototype={
$1(d){var w=this.a
return w.m(new C.etq(w))},
$S:9}
C.etq.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.etx.prototype={
$1(d){var w=this.a
return w.m(new C.etp(w))},
$S:9}
C.etp.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ety.prototype={
$0(){var w=this.a
return w.m(new C.eto(w,this.b))},
$S:0}
C.eto.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.etz.prototype={
$1(d){return this.a.a_T()},
$S:2}
C.etb.prototype={
$0(){return this.a.cdx(this.b)},
$S:0}
C.cjE.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:341}
C.cjC.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cjD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQT.prototype={
boK(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTL(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cKI($.rh().jp(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mW(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boK(d,e)},
$S:1703}
C.fPa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPc.prototype={
$1(d){var w=this.a.a
w=A.d.aM(A.d.dq(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:76}
C.fPb.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.cs,t,t,t,B.cP(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r9,A.bX,t,A.dz,A.bY)
v=this.a
w.o5(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:30}
C.fqW.prototype={
$1(d){var w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fqX(),B.U(w).k("Y<1>")).gI(0)},
$S:269}
C.fqX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqU.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.fqV.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.cjF.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCu()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hg2(i,new B.H(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcF(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aM(n.gclT(),"\n\n")
d=B.fq(a6,A.cs,a6,a6,a6,B.cP(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afD(k,q,1.28),j),A.r9,A.bX,a6,A.dz,A.bY)
d.o5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hg2(i,new B.H(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcF(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afD(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bd,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r9,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCt(s,j))
i.push(new B.a6(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:403}
C.cjG.prototype={
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
n=o.gaCu()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hg2(f,new B.H(!0,e,a5,i,a5,a5,h,A.cT,A.bt,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hcF(g.length===0?B.a([a6],n):g,l))break}a1=o.afD(i,h,1.28)
a2=new C.cjH(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ko,new B.a6(v,a5,a4.f,a5),A.Ko,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bHI,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bd,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r9,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCt(r,g))
f.push(new B.a6(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a6(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.l,a5,A.e,A.j,0,A.p)},
$S:147}
C.cjH.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r9,w,w),w)},
$S:678}
C.h2c.prototype={
$1(d){return new C.WY(this.a,this.b,null)},
$S:z+79}
C.euo.prototype={
$1(d){return d.lb()},
$S:1705}
C.eup.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eun(w,d))},
$S:1706}
C.eun.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.eub.prototype={
$0(){return this.a.y=!0},
$S:0}
C.euc.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eui.prototype={
$0(){return B.a7(this.a,!1).eO()},
$S:0}
C.euj.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bD,A.r,2.5)
return B.aA(w,B.q(w,B.b4(w,w,w,new C.bec(u,v.gazw(),w),A.fD),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eug(v),new C.euh(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.eug.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:259}
C.euh.prototype={
$1(d){var w=this.a
w.m(new C.eud(w,d,this.b,this.c))},
$S:210}
C.eud.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.i.D(s.x*r.d,1,6)
w=s.gazw()
r=r.a
v=t.c
u=t.d
s.r=A.i.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.i.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.euk.prototype={
$1(d){var w=this.a
return w.m(new C.euf(w,this.b))},
$S:9}
C.euf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eul.prototype={
$1(d){var w=this.a
return w.m(new C.eue(w,d))},
$S:6}
C.eue.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eum.prototype={
$0(){return B.a7(this.b,!1).O(this.a.a.c)},
$S:0}
C.h2s.prototype={
$1(d){return D.hAs},
$S:z+83}
C.f3h.prototype={
$1(d){return this.a.Zu()},
$S:7}
C.f29.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcu().aN(v)},
$S:0}
C.f2x.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f2H.prototype={
$1(d){return d>=this.a.length},
$S:30}
C.f1T.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f1U.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1R.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f1S.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2q.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f2r(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jm(B.t1(q>0.2?F.bXb(r,new B.Er(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jm(B.da(B.t1(F.bXb(s.$1(!0),new B.Er(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c0(D.b2h,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bj))}s=t.aL
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c0(D.b21,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bj))
s=t.aR
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.ba,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d7Y,v),A.n),A.bj))
if(t.aH>0){s=t.k1
q.push(B.ap(v,B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.ba,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.djP,v),A.n),A.bj),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c0(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dgD,v),A.n),A.bj))
t=t.aG
if(t>0)q.push(B.b4(v,v,v,new C.bhO(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:65}
C.f2r.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZW(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
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
s=o.c6?-1:1
return B.dP(B.ed(A.A,B.eM(A.A,l,B.fx(A.A,new B.BJ(new B.uP(q,q,n,A.xX),p,q),q,B.wj(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:481}
C.f2D.prototype={
$0(){return this.a.m(new C.f2C(this.b,this.c))},
$S:0}
C.f2C.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2E.prototype={
$1(d){return this.a.m(new C.f2B(this.b,d))},
$S:6}
C.f2B.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2G.prototype={
$0(){return this.a.m(new C.f2F(this.b,this.c))},
$S:0}
C.f2F.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1J.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f1K.prototype={
$1(d){var w=this.a
return w.m(w.gcE6())},
$S:2}
C.f1L.prototype={
$1(d){return this.a.m(new C.f1I())},
$S:2}
C.f1I.prototype={
$0(){},
$S:0}
C.f1M.prototype={
$0(){var w=this.a
return w.m(new C.f1H(w,this.b))},
$S:0}
C.f1H.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f1O.prototype={
$2(d,e){return A.au},
$S:37}
C.f1N.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.by
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b4,new B.p(w,w,q,s,w,new B.a9(A.b7,A.ba,A.x,r,w,w),A.n),A.h1,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a6(70,w,B.x(B.a([r,A.fM,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1G(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f1G.prototype={
$0(){var w=this.a
return w.m(new C.f1D(w,this.b))},
$S:0}
C.f1D.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1P.prototype={
$1(d){var w=this.a
return w.m(new C.f1F(w,d))},
$S:9}
C.f1F.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f1Q.prototype={
$1(d){var w=this.a
return w.m(new C.f1E(w,d))},
$S:9}
C.f1E.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f36.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:30}
C.f3d.prototype={
$1(d){var w=this.a
return w.m(new C.f3e(w,d))},
$S:29}
C.f3e.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f3f.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:145}
C.f37.prototype={
$0(){var w=this.a
return w.m(new C.f35(w,this.b))},
$S:0}
C.f35.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f38.prototype={
$0(){var w=this.a
return w.m(new C.f34(w,this.b))},
$S:0}
C.f34.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f39.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f33(v,w.b,w.c,w.d))},
$S:0}
C.f33.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f3a.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gte(v))},
$S:0}
C.f3b.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f3c.prototype={
$0(){var w=this.a
return w.m(new C.f32(w))},
$S:0}
C.f32.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f2Q.prototype={
$1(d){return d.a===this.a.dy},
$S:215}
C.f2R.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aBb[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azA(new B.ns(new B.be(n,n,n,n),A.aq,new B.l5(new B.p(j,j,j,j,j,new B.a9(A.a6,A.aa,A.x,m,j,j),A.n),A.bj,new C.b1g(l,B.b0(k==null?v.w.x:k),A.i.D(w,12,26),j),j),j),u,q.b,o===p,new C.f2P(r,v),2,i))}return B.bV(A.bG,h,A.bs,j,7,7)},
$S:163}
C.f2P.prototype={
$0(){var w=this.b
return w.m(new C.f2K(this.a,w))},
$S:0}
C.f2K.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f2S.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:157}
C.f2V.prototype={
$0(){var w=this.a
return w.m(new C.f2O(w))},
$S:0}
C.f2O.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f2W.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f2X.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f2Y.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f2Z.prototype={
$0(){var w=this.a
return w.m(new C.f2N(w))},
$S:0}
C.f2N.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f3_.prototype={
$0(){var w=this.a
return w.m(new C.f2M(w))},
$S:0}
C.f2M.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f30.prototype={
$0(){var w=this.b
return w.m(new C.f2L(this.a,w))},
$S:0}
C.f2L.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f31.prototype={
$1(d){return this.a.fx=d},
$S:157}
C.f2T.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f2U.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f2u.prototype={
$0(){var w=this.a
return w.m(new C.f2t(w))},
$S:0}
C.f2t.prototype={
$0(){var w=this.a
w.p4=null
w.b6h()},
$S:0}
C.f2v.prototype={
$0(){var w=this.a
return w.m(new C.f2s(w,this.b))},
$S:0}
C.f2s.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f2w.prototype={
$0(){var w=this.a
return w.m(w.gcur())},
$S:0}
C.f2m.prototype={
$0(){var w=this.a
return w.m(new C.f2l(w))},
$S:0}
C.f2l.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f2n.prototype={
$0(){var w=this.a
return w.m(new C.f2k(w))},
$S:0}
C.f2k.prototype={
$0(){var w=this.a
w.aH=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f2o.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dh3[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azA(new B.ns(new B.be(p,p,p,p),A.aq,new B.a6(1/0,1/0,new B.BJ(new B.uP(o,o,v.aZW(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xX),B.fR(u,A.A,140,o,A.cj,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f2j(v,s),3,n))}return B.bV(A.bG,m,A.bs,o,10,8)},
$S:163}
C.f2j.prototype={
$0(){var w=this.a
return w.m(new C.f2i(w,this.b))},
$S:0}
C.f2i.prototype={
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
C.f20.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f21.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f22.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f23.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f24.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f25.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f26.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f27.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f28.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f1m.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f1n.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f1o.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f1p.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f1q.prototype={
$0(){var w=this.a
return w.m(new C.f1l(w))},
$S:0}
C.f1l.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f1r.prototype={
$1(d){return this.a.b7=d},
$S:157}
C.f1s.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f1V.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f1W.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f1X.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f1Y.prototype={
$1(d){return this.a.bf=d},
$S:157}
C.f1Z.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f1w.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f1x.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f1y.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f1z.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f1A.prototype={
$0(){var w=this.a
return w.m(new C.f1v(w))},
$S:0}
C.f1v.prototype={
$0(){var w=this.a
return w.c9=A.i.F(w.c9+90+180,360)-180},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.m(new C.f1u(w))},
$S:0}
C.f1u.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f1C.prototype={
$0(){var w=this.a
return w.m(new C.f1t(w))},
$S:0}
C.f1t.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f2p.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.it8(v,w.p4)},
$S:0}
C.f2h.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bw9:B.fR(v,A.A,w,w,A.cj,A.c_,!1,w,!1,w,w)
return C.fPi(d.length===0?"rounded":d,u,e)},
$S:131}
C.f2d.prototype={
$0(){var w=this.a
return w.m(new C.f2c(w))},
$S:0}
C.f2c.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f2e.prototype={
$0(){var w=this.b
return w.m(new C.f2b(this.a,w))},
$S:0}
C.f2b.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f2f.prototype={
$0(){var w=this.b
return w.m(new C.f2a(this.a,w))},
$S:0}
C.f2a.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f2g.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.i.D(w.ay,0,1-d)
w.ch=A.i.D(w.ch,0,0.95)},
$S:6}
C.f2A.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b9.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cnP(),n.r))
l.push(new C.JE(n.cB0(),!1,!1,t))
o=B.bR(0,B.by(o,new B.em(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.q(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bj),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f2z(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:235}
C.f2z.prototype={
$1(d){var w=this.a
return w.m(new C.f2y(w,d,this.b,this.c))},
$S:19}
C.f2y.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.i.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.i.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f2J.prototype={
$0(){var w=this.a
return w.m(new C.f2I(w,this.b))},
$S:0}
C.f2I.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f2_.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).hV()},
$S:0}
C.f3g.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a6(Math.min(s*0.4,460),t,B.x(B.a([w.b1U(),B.E(B.at(w.b4V(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aSQ(),1),w.aOS()],v),A.l,t,A.e,A.j,0,A.p),1)],v),A.l,t,A.e,A.j,0,t,t)}u=A.i.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1U(),new B.D(A.hG,B.at(s.b4V(u),t,t,t),t),B.E(s.aSQ(),1),s.aOS()],x.p),A.l,t,A.e,A.j,0,A.p)},
$S:667}
C.fMz.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bDc(),null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bt,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,A.V)},
$S:z+98}
C.fMy.prototype={
$3(d,e,f){var w=this,v=C.bDc(),u=w.b?A.H:A.cC,t=w.c?A.cH:A.bt
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bk,4280172719,2,d,0,w.f,w.e,D.ct,D.cW,0.82,0.09,w.a)},
$S:z+28}
C.cl9.prototype={
$1(d){return B.w(d)},
$S:17}
C.fUi.prototype={
$0(){return this.a},
$S:z+15}
C.fz_.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fz0.prototype={
$2(d,e){return J.cq(e)},
$S:z+31}
C.fUk.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fUn.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fUo.prototype={
$0(){return A.d.gH(D.wV)},
$S:z+33}
C.fUg.prototype={
$1(d){return d.a},
$S:z+16}
C.fUj.prototype={
$1(d){return d.a},
$S:z+16}
C.fSe.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fSf.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSg.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMD.prototype={
$0(){return C.cD()},
$S:22}
C.fMG.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ct,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bk,4280172719,2,d,s,0,"",t,D.cW,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,"","",A.bt,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,"",j,A.bt,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,j,k,A.bt,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bt,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bt,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dm,!1,k,l,"",m,A.bt,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bt,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,j,k,"",l,A.bt,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bt,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bt,A.a8)},
$S:z+35}
C.fMF.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fME.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ct,t=v?j:0
return C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bk,4280172719,2,"",t,0,"",u,D.lU,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r_,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fMC.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fP3.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hzc.c4(0,A.a.i(s.w).toLowerCase(),new C.fP1(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c4(0,s.r,new C.fP2(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.bqX(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.fP1.prototype={
$0(){return F.aPD(this.a.w)},
$S:200}
C.fP2.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bC5("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:200}
C.fqQ.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fqR.prototype={
$1(d){return d.a},
$S:z+18}
C.fqS.prototype={
$1(d){return d.b},
$S:z+19}
C.h2E.prototype={
$1(d){return D.hBd},
$S:z+41}
C.f9E.prototype={
$0(){return this.a.x=C.i3W(this.b,this.c.b)},
$S:0}
C.f9F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f9C.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:443}
C.f9D.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:443}
C.f9B.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.as,null,new C.f9w(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kf,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f9x(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hFt(o,m.cPd(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f9y(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f9w.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f9A(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bcr,A.f,p,p,D.b7m,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Dc:D.Dj,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.fPi(v,i.b6U(h),u),p)))}t=B.kU(1,m,4,10,10,p,A.dW,!0)
if(!l)return B.bm(!0,new B.D(Aa.yK,t,p),!0,!1,A.ag,!0,!0)
s=new C.f9z(i,d)
m=B.aI(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ii[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.ci(B.x(B.a([D.fNH,A.X,t,A.dY,D.f8V,A.ay,D.fYT,A.X,B.kU(1.15,l,3,10,10,p,A.dW,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Aa.yK,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:25}
C.f9A.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b9.j(0.22):A.c.j(0.04),s=v?A.br:A.dk
return B.aA(w,B.q(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hH,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f9v(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1709}
C.f9v.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.f9z.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bN:A.by
r=B.L(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.q(v,B.by(w,d.length===0?B.q(v,D.as8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dy(!0,new C.Ol(u.Gd(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.ay,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9u(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:131}
C.f9u.prototype={
$0(){B.a7(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f9x.prototype={
$0(){var w=this.a
return w.w=w.w.Gd("")},
$S:0}
C.f9y.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f9k.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f9l.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f9n.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f9o.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f9p.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f9q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9m(w,d))},
$S:2}
C.f9m.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f9r.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f9S.prototype={
$0(){return this.a.f.fX()},
$S:0}
C.f9T.prototype={
$0(){var w=this.a
return w.m(new C.f9R(w))},
$S:0}
C.f9R.prototype={
$0(){return this.a.e=null},
$S:0}
C.f9U.prototype={
$0(){var w=this.a
return w.m(new C.f9Q(w))},
$S:0}
C.f9Q.prototype={
$0(){return this.a.x=null},
$S:0}
C.f9W.prototype={
$1(d){var w=this.a
return w.m(new C.f9P(w,d))},
$S:35}
C.f9P.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f9X.prototype={
$1(d){var w=this.a
return w.m(new C.f9O(w,d))},
$S:35}
C.f9O.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f9Y.prototype={
$0(){var w=this.a
return w.m(new C.f9N(w))},
$S:0}
C.f9N.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f9Z.prototype={
$1(d){var w=this.a
return w.m(new C.f9M(w,d))},
$S:35}
C.f9M.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.fa_.prototype={
$1(d){var w=this.a
return w.m(new C.f9L(w,d))},
$S:35}
C.f9L.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fa0.prototype={
$0(){var w=this.a
return w.m(new C.f9K(w))},
$S:0}
C.f9K.prototype={
$0(){var w=this.a
return w.w=w.w.Gd("")},
$S:0}
C.fa1.prototype={
$0(){var w=this.a
return w.m(new C.f9J(w,this.b))},
$S:0}
C.f9J.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fa2.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bT_(D.a5H[v]),null))
return B.bV(A.bG,t,A.bs,null,8,8)},
$S:163}
C.f9V.prototype={
$1(d){var w=this.a
return w.m(new C.f9I(w,d))},
$S:9}
C.f9I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f9s.prototype={
$0(){var w=this.a
return w.m(new C.f9t(w,this.b,this.c))},
$S:0}
C.f9t.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f9H.prototype={
$0(){var w=this.a
return w.m(new C.f9G(w,this.b))},
$S:0}
C.f9G.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h2D.prototype={
$1(d){return new C.a1E(this.a,this.b,null)},
$S:z+42}
C.f9d.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f9e.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f9f.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aL5?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f9g.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f9h.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9c(w,d))},
$S:2}
C.f9c.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f9i.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f9j.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aC(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bB,w.length),A.aQ))},
$S:0}
C.fyg.prototype={
$1(d){return d.a===this.a},
$S:215}
C.eq4.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazB(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.d1r:D.djx
t=D.yn.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yn.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bR(0,B.b4(q,q,q,new C.bk6(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bU1(B.eM(A.A,0.5,B.q(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a9(A.a6,A.aa,A.x,B.a([A.L,D.bkn.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.by(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ee:A.mm,D.yn,q,q,q,20),A.ay,B.ev(A.A,B.oe(A.jS,D.fGV,new C.eq3()),A.f,A.e2)],r),A.l,q,A.e,A.Q,0,A.p),q,q,q),B.ap(q,B.q(q,D.fDo,A.f,q,q,new B.p(D.yn,q,q,B.m(6),q,q,A.n),q,q,q,q,P.amQ,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.eq3.prototype={
$1(d){return D.c6L.aK(0,d)},
$S:73}
C.fUp.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fUq.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:215}
C.fUr.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1710}
C.fUs.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fUl.prototype={
$1(d){return d.a},
$S:z+18}
C.fUm.prototype={
$1(d){return d.b},
$S:z+19}
C.h1R.prototype={
$1(d){return new C.a01(this.a,this.b,null)},
$S:z+44}
C.dt9.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dta.prototype={
$1(d){return d.a===this.a.gajX()},
$S:z+10}
C.dtb.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dte.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.dtf.prototype={
$0(){var w=this.a
return w.m(new C.dtd(w,this.b))},
$S:0}
C.dtd.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dtg.prototype={
$1(d){var w=this.a
return w.m(new C.dtc(w,d))},
$S:9}
C.dtc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eq2.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dB(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1711}
C.fmY.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fi,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ct,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fn_.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bt,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bk,4280172719,2,d,l,0,"",D.na,D.cW,g,e,f)},
$S:z+46}
C.fmZ.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xc(0,"twinkle")
w=t===D.bk?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.na,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fmX.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fNK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fNL.prototype={
$0(){return A.d.gH(D.Ir)},
$S:z+49}
C.fNM.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fpc.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fTS.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bk,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bk,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bk,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fK,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTT.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bk,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bk,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bk,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fK,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fK,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTU.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bk,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.kd,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.kd,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fK,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fU4.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.kd,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.kd,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.kc,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bk,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fU9.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.kc,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bk,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fK,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bk,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUa.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.kd,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bk,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fK,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUb.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d0j[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.bk,v,4294967295,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fK,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUc.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mT,A.dl,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DX,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fK,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fUd.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bk,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.kc,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fK,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUe.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bk,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bk,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fK,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.kd,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bk,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUf.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.kd,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bk,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bk,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTV.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.kc,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.kc,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fK,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fTW.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.kc,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.kc,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.kc,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.eZ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fTX.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bk,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bk,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.kd,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.kc,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fK,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fTY.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bk,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.kc,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.kc,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fK,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fTZ.prototype={
$1(d){var w=4279080072,v=2450411
C.dz(d,C.dA(w,0.14,0,D.lv,v,0,0.14,0.68,0.18))
C.dz(d,C.dA(4279548070,0.14,0,D.lv,v,0,0.14,0.78,0.28))
C.dz(d,C.dA(4281193663,0.14,0,D.lv,v,0,0.14,0.68,0.38))
C.dz(d,C.dA(4284410580,0.14,0,D.lv,v,0,0.14,0.78,0.48))
C.dz(d,C.dA(4279203438,0.14,0,D.lv,v,0,0.14,0.68,0.58))
C.dz(d,C.dA(w,0.006,0,D.fK,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fU_.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.kd,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.eZ,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fK,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fU0.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mT,A.dl,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DX,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bk,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fK,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fU1.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bt,A.aG,s,A.bn,null,D.fK,t,t,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bk,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bk,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fK,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU2.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bk,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bk,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bk,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bk,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bk,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fK,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fU3.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,4294967295,4280640491,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lh
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,t)
u=B.ar(A.d6,A.co,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fi,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,u,q,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bk,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.kc,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fU5.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.kd,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.kd,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.kd,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.kd,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bk,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.eZ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU6.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bk,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bk,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bk,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bk,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.eZ,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.eZ,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.eZ,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.kd,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fU7.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bk,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bk,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bk,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.eZ,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fK,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.eZ,16777215,t,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fU8.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bk,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.kd,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.kd,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bk,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bk,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fLA.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fLB.prototype={
$0(){return A.d.gH($.bGQ())},
$S:z+52}
C.fxz.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fxy.prototype={
$1(d){return C.ibT(d,this.a,this.b)},
$S:z+53}
C.fUy.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wj(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUJ(B.i0T(A.vO,C.ibW(w.c,w.d,v,u),t)))},
$S:446}
C.e3x.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e3w.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.p(w,w,w,w,w,new B.c0(A.Fc,1.2,A.x,w,0,u.d,w,w),A.n),A.bj),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jm(new B.an(A.a0,w,A.b2,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgT(u.a,r,q,r),A.az),w),B.at(new B.k1(r,new C.e3v(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:324}
C.e3v.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e7.aA(0,A.i.D(e/1.4,0,1)),p=A.i.D(e/0.9,0,1),o=A.i.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hU(B.fR(i,A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mJ(e*0.8)),A.a7),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btN(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dP(B.x(B.a([B.q(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a9(A.a6,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaNt(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.Q,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.l,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f8q.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.i.D(w-0.1,0,1),A.i.D(w,0,1),A.i.D(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:73}
C.cfA.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bN:A.by
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i3.j(0.4),A.I,14)],x.V):v
w=B.cT(v,B.by(B.m(12),d,A.aq),v,v,A.b4,new B.p(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a6(112,v,B.x(B.a([w,A.fM,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1712}
C.cfB.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gd(""))},
$S:0}
C.cfC.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dy(!0,new C.Ol(v.Gd(u),!0,!1,null),null),d.b,new C.cfD(w,this.c,d),v.a===u)},
$S:z+54}
C.cfD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hFt(u.b,t.c.Gd(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h0g.prototype={
$1(d){return new C.a_z(this.a,null)},
$S:z+55}
C.dil.prototype={
$0(){var w=this.a
w.d=w.gwf().bfa("data:"+this.b+";base64,"+A.cP.gcu().aN(this.c));++w.r},
$S:0}
C.diq.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.dir.prototype={
$0(){var w=this.a
return w.m(new C.dip(w))},
$S:0}
C.dip.prototype={
$0(){return this.a.r++},
$S:0}
C.dis.prototype={
$1(d){var w=this.a
return w.m(new C.dio(w,d))},
$S:2}
C.dio.prototype={
$0(){var w=this.a
return w.d=w.gwf().aG3(this.b)},
$S:0}
C.dit.prototype={
$0(){var w=this.a
return w.m(new C.din(w))},
$S:0}
C.din.prototype={
$0(){var w=this.a
return w.d=w.gwf().bfa("")},
$S:0}
C.diu.prototype={
$1(d){var w=this.a
return w.m(new C.dim(w,d))},
$S:2}
C.dim.prototype={
$0(){var w=this.a
return w.d=w.gwf().bfg(this.b)},
$S:0}
C.div.prototype={
$0(){var w=this.a
w=w.gwf().bfg(w.gazC().a.a)
B.a7(this.b,!1).O(w)
return null},
$S:0}
C.h0f.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h0e(w),null)},
$S:20}
C.h0e.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bm(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.c1,x.w).w.a.b*0.85),B.ci(B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fVT,A.ay,D.fW8,A.aB,new C.b1d(v.a,new C.h0d(v,e,d),!0,w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7V,w,w,w,w,A.Oc,w,w,w)},
$S:172}
C.h0d.prototype={
$1(d){this.b.$1(new C.h0c(this.a,d))
B.a7(this.c,!1).O(d)},
$S:z+56}
C.h0c.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h2C.prototype={
$1(d){return D.huG},
$S:z+57}
C.dp9.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.dpa.prototype={
$0(){var w=this.a.c
w.toString
B.a7(w,!1).O(this.b)
return null},
$S:0}
C.dpb.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a7(w,!1).O(v)}},
$S:0}
C.fRb.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.i.D(w-0.12,0,1),A.i.D(w,0,1),A.i.D(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:73}
C.di2.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c6(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c6(w,q+p,w,q+p*1.2))
u.E(new B.DP(B.bY(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:454}
C.fRf.prototype={
$2(d,e){return A.i.aS(d.c,e.c)},
$S:z+58}
C.fJA.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fJB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yN,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fDG,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dg(D.I_,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJy(d),B.bo(A.c4,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.X,B.es(A.oF,D.VZ,new C.fJz(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.xK,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJy.prototype={
$0(){B.a7(this.a,!1).O("continue")
return null},
$S:0}
C.fJz.prototype={
$0(){B.a7(this.a,!1).O("new")
return null},
$S:0}
C.cl7.prototype={
$1(d){return d.hR()},
$S:z+59}
C.cl8.prototype={
$1(d){return d.aj()},
$S:z+60}
C.cl6.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a3(b5,x.N,x.z),b3=B.aH(b2.h(0,"fontWeight")),b4=b3==null?b1:A.i.L(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aH(b2.h(0,"fontStyle"))
w=b3==null?b1:A.i.L(b3)
if(w==null)w=0
b3=B.aH(b2.h(0,"align"))
v=b3==null?b1:A.i.L(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i7r(b2.h(0,"type"))
t=B.aH(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aH(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aH(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aH(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aH(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.aDh[A.o.D(b4,0,8)]
m=D.d3x[A.o.D(w,0,1)]
l=C.ibh(b2.h(0,"decoration"))
k=B.aH(b2.h(0,"color"))
k=k==null?b1:A.i.L(k)
if(k==null)k=4279310375
j=A.azE[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ie6(b2.h(0,"shape"))
g=B.aH(b2.h(0,"fillColor"))
g=g==null?b1:A.i.L(g)
if(g==null)g=4280640491
f=B.aH(b2.h(0,"strokeColor"))
f=f==null?b1:A.i.L(f)
if(f==null)f=4280172719
e=B.aH(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aH(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aH(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.i.L(a2)
if(a2==null)a2=0
a3=C.hAj(b2.h(0,"textTransition"))
a4=B.aH(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.i.L(a4)
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
b2=B.aH(b2.h(0,"textBg"))
b2=b2==null?b1:A.i.L(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ckX.prototype={
$1(d){return d.hR()},
$S:z+62}
C.ckY.prototype={
$1(d){return d.aj()},
$S:z+63}
C.ckU.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckV.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckW.prototype={
$1(d){return C.hqS(B.a3(d,x.N,x.z))},
$S:z+64}
C.clo.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.clp.prototype={
$0(){return A.d.gH(D.a5j)},
$S:z+66}
C.clj.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hR())},
$S:z+7}
C.cli.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.cle.prototype={
$1(d){return new B.N(d,new C.clf(),B.U(d).k("N<1,V>")).f1(0,new C.clg())},
$S:z+69}
C.clf.prototype={
$1(d){return d.f},
$S:z+70}
C.clg.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:681}
C.clh.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hXD(d)},
$S:z+71}
C.clk.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cll.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.clm.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fRO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.al(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fRK.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fRL.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fRM.prototype={
$2(d,e){var w
if(d.b===D.cW){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fRN.prototype={
$2(d,e){return d.b===D.fi&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cl2.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.in7(b2,b3),b5=B.a4(b4).k("b7<2>")
b5=B.cE(new B.b7(b4,b5),new C.cl1(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qr.aA(0,A.i.D(b1,0,1))
u=new C.cl3()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cl4(a9,b7.d)
r=new C.cl5(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jE.aA(0,A.i.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.i.D(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fi){a4=i.hR()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lU&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kH(A.i.D(o,0,1),r.$1(l),a8),new B.kH(A.i.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wP(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.i.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ct)a7=D.na
p.push(s.$5(i.c,i.d,i.e,i.f,C.hCR(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ad,A.t,p,a8),new B.p(a8,a8,a8,a8,a8,new B.a9(A.a6,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bj)},
$S:455}
C.cl1.prototype={
$1(d){return d.a},
$S:z+22}
C.cl3.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cl4.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1716}
C.cl5.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8Q(v,C.b3l(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQG.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.clb.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.clc.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fUF.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:277}
C.fTM.prototype={
$1(d){return new C.aex(this.a,this.b,null)},
$S:z+78}
C.eCo.prototype={
$0(){return this.a.QG(this.b,C.ir3(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eCp.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QG(this.b,C.ir5(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eCq.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QG(this.b,C.ir4(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eCr.prototype={
$0(){A0.hCB()
B.a7(this.a,!1).O(null)},
$S:0}
C.cl0.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1717}
C.cl_.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.o1),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.i.V(A.i.D(p*Math.max(B.jh(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dB
return B.fR(t,A.A,o,new C.ckZ(),A.cj,w,!0,u,!1,new B.bJ("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1718}
C.ckZ.prototype={
$3(d,e,f){return D.af7},
$S:212}
C.fRJ.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dB(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cL>")
r=B.C(new B.N(r,new C.fRI(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c3(new B.an(A.a0,t,A.ad,A.t,r,t),new B.p(v,t,t,t,t,w,A.n),A.bj),A.aq)},
$S:1719}
C.fRI.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3l(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fAi.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fAg(d))
w=B.aI(d,A.c1,x.w).w
v=B.m(22)
u=B.L(A.by,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h4,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aJ(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jN,q,q,q),A.ay,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bN(!1,A.AR,q,q,!0,q,q,q,new C.fAh(p,d),q,B.fu(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ce,q,new B.b9(B.m(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h3,A.GV,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:248}
C.fAg.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a7(w,!0).pX())B.a7(w,!0).eO()},
$S:0}
C.fAh.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a7(this.b,!0).eO()},
$S:0}
C.fh_.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fx(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fx(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.km(r*0.5)
return B.fx(A.A,B.da(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fx(A.aa,B.da(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLn(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLn(1-r,t))],x.p),t)
case 16:v=A_.XM.aA(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.ds()
s.n_(r*6.28)
s.k5(r,r,r,1)
return B.fx(A.A,u.b,t,s,!0)
case 20:return B.eM(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:67}
C.e1g.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1f.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1e.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hCR(v,w,e)},
$S:67}
C.ckT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a6,A.aa,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cL>")
q=B.C(new B.N(v,new C.ckS(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ad,A.f,q,r),new B.p(t,r,r,r,r,u,A.n),A.bj)},
$S:455}
C.ckS.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ct?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8Q(m,new C.We(d,C.b3l(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dff.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dfe(w))},
$S:12}
C.dfe.prototype={
$0(){return this.a.d++},
$S:0}
C.epL.prototype={
$2(d,e){var w,v=null,u=A.o.ap(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSN.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.imR(w,t,s,e)}switch(s.a.c){case"float3d":s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ej(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fx(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:67}
C.f5V.prototype={
$1(d){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dP
return w},
$S:1720}
C.fPj.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.btG(u,t,r),A.az))
w.push(B.nU(s.d,A.aq,new C.bhp(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsD(u,q,t,r),A.az))
return B.at(new B.a6(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:226}
C.fDp.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:304}
C.eIC.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.Dz(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eIA(),new C.eIB(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1721}
C.eIA.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:183}
C.eIB.prototype={
$0(){return J.fs(this.a)},
$S:1723}
C.eF_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF0.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF1.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eGA.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGo.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eGp.prototype={
$1(d){return d.hR()},
$S:z+81}
C.eEn.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eHI.prototype={
$0(){this.a.uc()},
$S:0}
C.eIy.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KL()},
$S:0}
C.eGy.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KL()},
$S:0}
C.eIl.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIm.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eIn.prototype={
$1(d){return d.a},
$S:z+22}
C.eIo.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aQ),$.aw())},
$S:263}
C.eIp.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:685}
C.eDM.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIz.prototype={
$0(){},
$S:0}
C.eFH.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()
w.KL()},
$S:0}
C.eDK.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.ya()},
$S:0}
C.eDL.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.ya()},
$S:0}
C.eG3.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eG4.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()
w.KL()
w.z="Home"},
$S:0}
C.eG5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFG.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VY,w,w,!0,w,w,w,new C.eFF(d),w,w)],x.p),w,w,w,D.fXL,w,w,w,w,D.fE8,w)},
$S:18}
C.eFF.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eFD.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VY,w,w,!0,w,w,w,new C.eFC(d),w,w)],x.p),w,w,w,D.fIj,w,w,w,w,D.fFZ,w)},
$S:18}
C.eFC.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eFE.prototype={
$0(){},
$S:0}
C.eEW.prototype={
$1(d){return this.a.b3h(C.bES(d))},
$S:z+7}
C.eEX.prototype={
$1(d){return this.a.agw(C.bES(d))},
$S:z+7}
C.eFN.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bA,D.fXP,A.ay,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bA,new C.Qy(A.wz,D.aB0,"HATI YA KUHOWA","Hati ya mahari",new C.eFI(d),w),A.X,new C.Qy(A.hf,D.dh5,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eFJ(d),w),A.X,new C.Qy(A.hJ,D.d1w,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eFK(d),w),A.X,new C.Qy(A.id,D.d_z,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eFL(d),w)],v)
if(this.a.gacL())A.d.v(u,B.a([A.X,new C.Qy(A.js,D.cLr,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eFM(d),w)],v))
return B.bm(!0,B.ci(B.x(u,A.al,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,E.yN,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:25}
C.eFI.prototype={
$0(){B.a7(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eFJ.prototype={
$0(){B.a7(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eFK.prototype={
$0(){B.a7(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eFL.prototype={
$0(){B.a7(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eFM.prototype={
$0(){B.a7(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eFO.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()},
$S:0}
C.eDO.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eDP.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nu(r,v.f+1,q);++v.f
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
C.eFZ.prototype={
$1(d){return d.b===D.lU},
$S:z+4}
C.eG_.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eFX(w,this.a,v),null)},
$S:20}
C.eFX.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eFY(p,o,a3,n),l=B.S(a2).ax.a===A.J,k=l?A.c:A.T,j=l?A.aS:A.an,i=l?A.bp:A.bO,h=l?A.T:A.c,g=B.m(28),f=B.L(l?A.by:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bH,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eFT(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Dj[w]
v.a=null
t=v.a=u.a
a1.push(new C.bk_(t,u.b,p.a===t,i,k,new C.eFU(v,m),q))}a1=B.bV(A.bG,a1,A.bs,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Dc[w]
s.a=null
t=s.a=r.a
u.push(new C.bjZ(t,r.b,p.b===t,k,j,new C.eFV(s,m),q))}return B.bm(!0,B.q(q,B.ci(B.x(B.a([d,A.aR,a0,A.X,a1,A.bA,v,A.X,B.bV(A.bG,u,A.bs,q,12,12),A.bA,new B.a6(1/0,48,B.es(D.c2M,D.h_f,new C.eFW(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.m(16),A.a1),D.b5q,q,q,q,q)),q)],e),A.E,q,A.e,A.Q,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.uv,D.bE2,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eFY.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eFR(w.a,d,e))
w.b.da(new C.eFS(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1726}
C.eFR.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eFS.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eFT.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eFU.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eFV.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eFW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.Hu(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.da(new C.eFQ(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFQ.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eG1.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eG2.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eG0(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.ya()},
$S:0}
C.eG0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGj.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eGk.prototype={
$1(d){return d.w},
$S:z+82}
C.eGl.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eGm.prototype={
$1(d){var w=this,v=null,u=B.S(d).ax.a===A.J,t=u?A.c:A.T,s=u?A.aS:A.an,r=u?A.bp:A.aP,q=u?A.T:A.c,p=B.m(28),o=B.L(u?A.by:A.aO,A.r,1),n=B.aI(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bXh,A.f,v,v,D.b6N,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eGg(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cr,B.hN(v,new C.eGh(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ah,new C.eGi(),!0),v)],l),A.E,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.uv,A.a0o,v,v,v),!0,!1,A.ag,!0,!0)},
$S:25}
C.eGg.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eGi.prototype={
$2(d,e){return A.af},
$S:37}
C.eGh.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.c_z,q,q,q,new C.eGe(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bGi,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bt(q,new B.b6(4,B.m(16),A.a1),q,A.eY,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.m(16),D.b55),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGf(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:686}
C.eGe.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ith(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geC()?p.a:q.a.length
n=p.geC()?p.b:q.a.length
m=A.a.oa(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bB,o+s.length),A.aQ))
l.akA(k,m)
l.pJ()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGf.prototype={
$1(d){var w=this.a
w.akA(this.b.a,d)
w.pJ()},
$S:2}
C.eGn.prototype={
$0(){},
$S:0}
C.eFP.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eE4.prototype={
$0(){},
$S:0}
C.eE5.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hEa(this.b,w,!0)
w=this.a
w.r=null
w.ya()},
$S:0}
C.eE6.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eE7.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eE3(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.ya()},
$S:0}
C.eE3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGt.prototype={
$1(d){return B.pe(new C.eGs(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:142}
C.eGs.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amw,B.x(B.a([D.fVf,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.ffR,new C.eGr(this.a,this.b),20,A.uy,w,A.ah,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:457}
C.eGr.prototype={
$2(d,e){var w=null,v=D.Ir[e],u=C.hXy(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fV,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.q(w,D.f8R,A.f,w,w,new B.p(A.dJ.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n1,w,w,w)],m))
return B.aJ(!1,A.a3,!0,w,B.aP(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.l,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a9(A.a6,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGq(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eGq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cla(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a7(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGu.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()},
$S:0}
C.eCJ.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rW(4294967295,null,0,0,null,C.cD(),D.n9,"","","",D.dm),s=this.b
C.cln(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DW){t.e=w.e
t.f=w.f}A.d.c3(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eE2.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c3(v.e.r,v.f+1,C.hqS(q));++v.f},
$S:0}
C.eE0.prototype={
$0(){var w=this.a
A.d.cB(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eGC.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cB(v.e.r,u),s=this.c
A.d.c3(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eDX.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eDW(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eDW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGB.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eDN.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aQ),$.aw())},
$S:263}
C.eEo.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:685}
C.eIj.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIk.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avy(w).fX()
v=u.Xz(w)
v.stV(B.hg(A.bB,v.a.a.length))},
$S:7}
C.eHJ.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yz(v)
if(u!=null&&u.b===D.cW)w.Xz(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eCK.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,v.gqT().e.l(),A.aG,"",4280640491,24,A.bt,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bk,4280172719,2,"Tap to edit text",0,0,"",D.ct,D.cW,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCH.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,4279310375,A.aG,"",v.gqT().c.j(0.25).l(),24,A.bt,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqT().c.l(),2,"",0,0,"",D.ct,D.fi,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCx.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eCu.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c9I],x.p)
for(w=J.aU(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gald().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUU,r,r,r,r,new C.eCt(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cd(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCt.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eCv.prototype={
$0(){var w=A.i.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.aw(u.aj(),null),s=C.er(A.bn,!1,4279310375,A.aG,u.b,4280640491,24,A.bt,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bk,4280172719,2,t,0,0,"",D.ct,D.a80,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eDZ.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eE_.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eDY(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eDY.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDb.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cW)s.Q=t.c.l()
else if(w===D.fi){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDc(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDc.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDg.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDh(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDh.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDe.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cW){s.Q=t.c
return}w=new C.eDf(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDf.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eG(w,new C.eDd()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDd.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eDa.prototype={
$0(){return C.cln(this.b,this.c,this.a.gqT())},
$S:0}
C.eGd.prototype={
$0(){return A.d.c3(this.a.d,0,this.b)},
$S:0}
C.eIs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIt.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eIu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIv.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c3(s,0,v.b)
else{w=A.d.bj(s,new C.eIr(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTb()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hR()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.ya()
t.KL()}},
$S:0}
C.eIr.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eHZ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acP(),s=w.b,r=u.acQ(A.fo,A.jJ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.U,r,A.bA,B.q(v,B.A(B.a([B.E(u.aXS(w.c,A.an),1),new B.D(A.fI,B.q(v,D.bV_,A.f,v,v,new B.p(A.fo.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXS(s,A.fo),1)],n),A.l,v,A.e,A.j,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bF,v,v,v),A.bA,u.aXV(A.fo,d,D.bR4,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c1v(A.aH,d,A.uN,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXT(d,"Not now"))
return new C.KM(B.x(p,A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eHY.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KM(B.x(B.a([v.acP(),A.U,v.acQ(A.aH,D.bQK,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.c1,x.w).w.a.b*0.42),B.hN(w,new C.eHW(v,u,d),u.length,w,w,A.ah,new C.eHX(),!0),w),A.aB,v.aXT(d,"Cancel")],x.p),A.al,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eHX.prototype={
$2(d,e){return A.X},
$S:37}
C.eHW.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.arD,A.f,w,w,new B.p(w,w,w,B.m(12),w,D.c6G,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nh,w,w,w),A.cU,B.d("Updated "+this.a.QH(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eJ,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHV(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eHV.prototype={
$0(){B.a7(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eHS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acP()
t=t.acQ(A.aw,A.uV,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KM(B.x(B.a([s,A.U,t,A.bA,B.A(B.a([B.E(B.dU(A.abA,new C.eHQ(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cp,u,new B.b9(B.m(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bI(D.fGz,u,new C.eHR(d),B.bo(A.fo,u,u,u,A.c,u,A.cp,u,new B.b9(B.m(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eHQ.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.eHR.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.eHU.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acP(),s=w.b,r=u.acQ(A.aY,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awS("Names",""+w.c),1),A.ae,B.E(u.awS("Fields",""+w.d),1),A.ae,B.E(u.awS("Signatures",""+w.e),1)],q),A.l,v,A.e,A.j,0,v,v),o=B.bo(A.bl,v,v,v,A.c,v,A.yA,v,new B.b9(B.m(14),A.a1),v,v,v)
return new C.KM(B.x(B.a([t,A.U,r,A.aR,p,A.bA,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nY,v,v,v),v,new C.eHT(d),o),A.X,u.aXU(d,"Stay here",!1)],q),A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eHT.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.eES.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eER.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eHK.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eIi.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0L(A.d.dP(w.d,new C.eIg(v),new C.eIh(v)).hR(),w.f,null)},
$S:z+84}
C.eIg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIh.prototype={
$0(){return this.a},
$S:z+85}
C.eCC.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bF,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fY,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWQ,w,w,w,w,new C.eCA(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fEx,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY4,w,w,w,w,new C.eCB(d),!1,w,w,w,w,w,D.h0v,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCA.prototype={
$0(){B.a7(this.a,!1).O("scroll")
return null},
$S:0}
C.eCB.prototype={
$0(){B.a7(this.a,!1).O("split")
return null},
$S:0}
C.eCD.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bn,!1,4279310375,A.aG,v,4280640491,24,A.bt,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bk,4280172719,2,v,0,0,"",D.ct,D.TQ,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCE.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.TQ,0.04,0.06,0.92,0.88,v,24,A.a8,A.bt,A.aG,4279310375,A.bn,u,D.bk,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ct,0,"","","","","",!1,0))
A.d.c3(j.e.r,i+q-1,new C.m0(""+1000*p+"_"+o,r+n,"",D.qZ,4294967295,null,D.dm,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eCI.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kM(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bn,!1,4279310375,A.aG,t,4280640491,24,A.bt,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lu,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eCz.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5Z(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.ei(v.db,"marriage_sign_",""),4280640491,24,A.bt,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lu,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eCy(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.imA(p)}},
$S:0}
C.eCy.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGz.prototype={
$0(){var w=this.a,v=this.b
w.b5Z(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eIq.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eEV.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eEU())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eEU.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDk.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDl.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uc()},
$S:7}
C.eCw.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bt,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lU,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEm.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCF.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eCO.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eCP.prototype={
$0(){var w=this.b.hR(),v=C.cD(),u=A.i.D(w.c+0.04,0,0.92),t=A.i.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eCQ.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCN(v))
if(u>=0&&u<w.length-1){A.d.cB(w,u)
A.d.c3(w,u+1,v)}},
$S:0}
C.eCN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD0.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCM(v))
if(u>0){A.d.cB(w,u)
A.d.c3(w,u-1,v)}},
$S:0}
C.eCM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD3.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eD4.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eD5.prototype={
$0(){return this.a.as=A.e_},
$S:0}
C.eD6.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eD7.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eD8.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eD9.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCR.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DE(w.gqT().c.j(0.18).l(),0.1,u,D.bk,0,2,1,0,0))
u=w.gdB().z
v=C.cD()
A.d.J(u,C.j5(A.bn,!1,w.gqT().d.l(),A.aG,18,A.bt,A.H,0.07,v,"Document Header",0,D.dm,0.9,0.05,0.02))},
$S:0}
C.eCS.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cD()
A.d.J(u,C.DE(v.gqT().c.j(0.12).l(),0.1,t,D.bk,0,2,1,0,0.9))
t=v.gdB().z
u=C.cD()
w=C.bFA()
A.d.J(t,C.j5(A.K,!1,v.gqT().e.l(),A.aG,12,A.bt,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dm,0.9,0.05,0.92))},
$S:0}
C.eCT.prototype={
$0(){A.d.J(this.a.gdB().z,C.DE(1727914055,0.12,C.cD(),D.bk,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eCU.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DE(w,0.08,C.cD(),D.bk,w,2,0.5,0.2,0.4))},
$S:0}
C.eCV.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DE(w.gqT().c.j(0.35).l(),0.12,u,D.DX,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.15,C.cD(),"Important note",0,D.r_,0.5,0.38,0.52))},
$S:0}
C.eCW.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DE(4294507260,0.78,C.cD(),D.bk,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFA()+"\n\nSubject:\n\nBody text\u2026",0,D.dm,0.76,0.12,0.14))},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DE(4294897802,0.28,C.cD(),D.bk,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4285611794,A.aG,15,A.bt,A.a8,0.24,C.cD(),"Sticky note",0,D.aKU,0.26,0.64,0.14))},
$S:0}
C.eCY.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DE(4293060848,0.04,C.cD(),D.bk,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DE(w,0.04,C.cD(),D.bk,w,2,0.55,0.1,0.48))},
$S:0}
C.eCZ.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jl,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ve,0.42,0.52,0.18))},
$S:0}
C.eD_.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DE(858088427,0.62,C.cD(),D.bk,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DE(856004201,0.62,C.cD(),D.bk,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bt,A.H,0.1,C.cD(),"Option A",0,D.dm,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bt,A.H,0.1,C.cD(),"Option B",0,D.dm,0.36,0.56,0.2))},
$S:0}
C.eD1.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DE(4294967295,0.36,C.cD(),D.bk,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j5(A.K,!1,w,A.aG,14,A.bt,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dm,0.24,0.38,0.4))},
$S:0}
C.eD2.prototype={
$0(){return C.cln(this.b,D.TR,this.a.gqT())},
$S:0}
C.eEl.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9U.q(0,d),t=this.a
return t.bbb(d,v===d,A.b1,this.c,new C.eEk(t,u,d,w),u)},
$S:z+25}
C.eEk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGk(r,new C.eEj(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEj.prototype={
$0(){return this.a.da(new C.eEi(this.b,this.c))},
$S:0}
C.eEi.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eCG.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rW(4294967295,null,0,0,null,C.cD(),D.n9,"","","",D.dm),s=this.b
C.cln(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DW){t.e=w.e
t.f=w.f}A.d.c3(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.itk(p,q.d,s,new C.eDn(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uc(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDn.prototype={
$1(d){return this.boa(d)},
boa(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDm(t,d))
w=2
return B.b(t.uc(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eDm.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c3(v.d,0,u)}},
$S:0}
C.eDp.prototype={
$0(){return this.a.bMV()},
$S:0}
C.eDq.prototype={
$0(){return this.a.aT2("Class Presentation",!0)},
$S:0}
C.eDr.prototype={
$1(d){return this.a.bNR(d.b,this.b,d.a)},
$S:z+88}
C.eE1.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGc.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aI(d,A.eQ,x.w).w.f.d),new B.dY(new C.eGb(this.a,this.b),null),null)},
$S:64}
C.eGb.prototype={
$2(d,e){return B.pe(new C.eGa(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:601}
C.eGa.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.by:A.aO,A.r,1),r=B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.X,r,new B.D(A.alX,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.T,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bN(!1,A.AR,v,v,!0,v,v,v,new C.eG8(w.c),v,v)],q),A.l,v,A.e,A.j,0,v,v),v),B.E(B.cd(B.a([p.aVP(u,!0,!0,new C.eG9(p,w.d))],q),e,v,D.bBI,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.l9,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eG8.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eG9.prototype={
$0(){this.b.$1(new C.eG6())
var w=this.a
if(w.c!=null)w.m(new C.eG7())},
$S:0}
C.eG6.prototype={
$0(){},
$S:0}
C.eG7.prototype={
$0(){},
$S:0}
C.eHL.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.eHM.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAH(this.a,null),0.94+w*0.06,null,null),w)},
$S:458}
C.eHN.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.eHO.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.bfd(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:458}
C.eHP.prototype={
$0(){return A.d.c3(this.a.d,0,C.X6(this.b))},
$S:0}
C.eCL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.qb.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.q(p,B.X(A2.a2d,u?A.ab:A.T,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.c0(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.T,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.uy(A.fj,B.q(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.j,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:301}
C.eDQ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eDR.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDS.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k8
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2N:A.Cx}return w},
$S:689}
C.eDV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aA(0,A.i.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.as.j(0.78)],s):B.a([A.c.j(0.92),A.nq.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.q(l,B.X(C.kM(v.w)?A.wz:A.qO,A.c,l,l,l,22),A.f,l,l,new B.p(l,l,l,q,l,new B.a9(A.a6,A.aa,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.T,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QH(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QH(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QH(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QH(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QH(v.f)
r=k.bNP(n,A.d.gH(r),t)
return B.q(l,B.by(j,new B.a90(B.aJ(!1,A.a3,!0,l,B.aP(!1,l,!0,B.q(l,B.dG(!1,A.O9,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ox,t?A.aD:A.bK,l,l,l,l),l,l,l,new C.eDT(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.p(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eDU(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:93}
C.eDU.prototype={
$0(){return this.a.agw(this.b)},
$S:0}
C.eDT.prototype={
$0(){return this.a.Br(this.b,this.c)},
$S:0}
C.eFl.prototype={
$0(){var w=this.a
w.b9K()
w.m(new C.eFk())},
$S:0}
C.eFk.prototype={
$0(){},
$S:0}
C.eFm.prototype={
$1(d){return this.a.akA(this.b.a,d)},
$S:2}
C.eFn.prototype={
$0(){this.a.da(new C.eFj(this.b))},
$S:0}
C.eFj.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eFo.prototype={
$0(){this.a.da(new C.eFi(this.b))},
$S:0}
C.eFi.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eFp.prototype={
$0(){this.a.da(new C.eFh(this.b))},
$S:0}
C.eFh.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eFq.prototype={
$0(){this.a.da(new C.eFg(this.b))},
$S:0}
C.eFg.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eFr.prototype={
$0(){var w=this.a
w.da(new C.eFf(w,this.b))},
$S:0}
C.eFf.prototype={
$0(){var w=this.b
return w.as=this.a.c8w(w.as)},
$S:0}
C.eFs.prototype={
$0(){return this.a.da(new C.eFe(this.b))},
$S:0}
C.eFe.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFt.prototype={
$0(){return this.a.da(new C.eFd(this.b))},
$S:0}
C.eFd.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eF6.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eF7.prototype={
$0(){this.a.a0H()
return null},
$S:0}
C.eF8.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.c1,x.w).w.a.a<900)w.agP()
else w.m(new C.eF5(w))},
$S:0}
C.eF5.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eF9.prototype={
$0(){this.a.da(new C.eF4(this.b))},
$S:0}
C.eF4.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eFa.prototype={
$0(){return this.a.da(new C.eF3(this.b))},
$S:0}
C.eF3.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFb.prototype={
$0(){return this.a.da(new C.eF2(this.b))},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eFc.prototype={
$0(){return this.a.aC2(null)},
$S:0}
C.eEe.prototype={
$0(){this.a.E8()
return null},
$S:0}
C.eEf.prototype={
$0(){this.a.abl()
return null},
$S:0}
C.eEh.prototype={
$1(d){return this.bob(d)},
bob(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KC(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.as,null,new C.eE9(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.da(new C.eEa(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eEb(r))
s=s.c.M(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eEc(r))
s=s.c.M(x.q).f
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
return B.b(C.hFs(q,new C.Fk(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.da(new C.eEd(r,p))
s=s.c.M(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ai7(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eE9.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.esl],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dg,p,p,p)
q=u.e===s?D.bWZ:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eE8(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eE8.prototype={
$0(){B.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.eEa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEb.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEc.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEd.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEg.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Ap(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Ap(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Ap(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ai7(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ey0,q,v,u,B.Ap(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.eIw.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFx(w,v)}},
$S:0}
C.eIx.prototype={
$0(){this.a.E8()
return null},
$S:0}
C.eFw.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c6A:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fB,B.aA(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b4,new B.p(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lM,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eFv(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:141}
C.eFv.prototype={
$0(){var w=this.a
return w.m(new C.eFu(w,this.b))},
$S:0}
C.eFu.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eFx.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5S:E.aB7
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRs():t.gbNf()
return B.hb(B.aA(u,B.q(u,D.ar2,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.I,10)],x.V),new B.a9(A.a6,A.aa,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1731}
C.eFy.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.isA(v,w.a.c)},
$S:0}
C.eGV.prototype={
$0(){return this.b.vO(this.a.a)},
$S:0}
C.eGW.prototype={
$0(){return this.a.vO(D.n9)},
$S:0}
C.eGX.prototype={
$0(){return this.a.vO(D.Jj)},
$S:0}
C.eH7.prototype={
$0(){return this.a.vO(D.Jk)},
$S:0}
C.eHi.prototype={
$0(){return this.a.vO(D.Ji)},
$S:0}
C.eHt.prototype={
$0(){return this.a.qE("lab_report")},
$S:0}
C.eHA.prototype={
$0(){return this.a.qE("rubric")},
$S:0}
C.eHB.prototype={
$0(){return this.a.qE("minutes")},
$S:0}
C.eHC.prototype={
$0(){return this.a.qE("agenda")},
$S:0}
C.eHD.prototype={
$0(){return this.a.qE("timeline")},
$S:0}
C.eHE.prototype={
$0(){return this.a.qE(this.b.a)},
$S:0}
C.eGY.prototype={
$0(){this.a.WB()
return null},
$S:0}
C.eGZ.prototype={
$0(){this.a.Wv()
return null},
$S:0}
C.eH_.prototype={
$0(){return this.a.qE("table")},
$S:0}
C.eH0.prototype={
$0(){return this.a.qE("sticky")},
$S:0}
C.eH1.prototype={
$0(){return this.a.qE("divider")},
$S:0}
C.eH2.prototype={
$0(){return this.a.qE("header_bar")},
$S:0}
C.eH3.prototype={
$0(){return this.a.pr(D.bk)},
$S:0}
C.eH4.prototype={
$0(){return this.a.pr(D.eZ)},
$S:0}
C.eH5.prototype={
$0(){return this.a.pr(D.kc)},
$S:0}
C.eH6.prototype={
$0(){return this.a.pr(D.DX)},
$S:0}
C.eH8.prototype={
$0(){return this.a.pr(D.kd)},
$S:0}
C.eH9.prototype={
$0(){return this.a.pr(D.lv)},
$S:0}
C.eHa.prototype={
$0(){return this.a.pr(D.fK)},
$S:0}
C.eHb.prototype={
$0(){this.a.HS()
return null},
$S:0}
C.eHc.prototype={
$0(){this.a.NZ()
return null},
$S:0}
C.eHd.prototype={
$0(){return this.a.qE("quote")},
$S:0}
C.eHe.prototype={
$0(){return this.a.a9s()},
$S:0}
C.eHf.prototype={
$0(){this.a.a0N()
return null},
$S:0}
C.eHg.prototype={
$0(){var w=this.a
return w.m(new C.eGL(w))},
$S:0}
C.eGL.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.or(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eGT(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGT.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHj.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9W.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.q(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.aa,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9W.q(0,q))u.push(B.ap(s,B.q(s,D.PV,A.f,s,s,D.Fk,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aA(s,B.hb(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eGS(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eGS.prototype={
$0(){this.a.a9I(this.b)
return null},
$S:0}
C.eHk.prototype={
$0(){this.a.a9H(this.b)
return null},
$S:0}
C.eHl.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hXz(d),p=this.a,o=B.m(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aT
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rW(4294967295,r,0,0,r,"preview_"+w,D.qZ,"","","",D.dm)
C.hCe(s,w)
w=x.p
u=B.a([B.by(o,B.q(r,B.by(t,C.hDz(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.q(r,D.arE,A.f,r,r,D.Fk,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iK,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.an,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eGR(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eGR.prototype={
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
return B.b(s.or(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.da(new C.eGH(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGH.prototype={
$0(){return C.hCe(this.a,this.b.a)},
$S:0}
C.eGU.prototype={
boc(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9U.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boc(d,e)},
$S:z+91}
C.eHF.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eHH(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ci(B.A(v,A.l,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eHH.prototype={
$1(d){var w=this
return w.a.bbb(d,w.b===d,w.c,w.d,new C.eHG(w.e,d),!D.a9U.q(0,d))},
$S:z+25}
C.eHG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHm.prototype={
$1(d){this.b.$2(d,new C.eGQ(this.a,d,this.c))
return null},
$S:z+26}
C.eGQ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGk(u,new C.eGG(v,this.c,w),w)},
$S:0}
C.eGG.prototype={
$0(){return this.a.da(new C.eGE(this.b,this.c))},
$S:0}
C.eGE.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eHn.prototype={
$1(d){this.b.$2(d,new C.eGP(this.a,d))
return null},
$S:z+26}
C.eGP.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h3q(u,new C.eGF(v,w),w)},
$S:0}
C.eGF.prototype={
$0(){var w=this.a
return w.da(new C.eGD(w,this.b))},
$S:0}
C.eGD.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eHo.prototype={
$0(){var w=this.a
return w.m(new C.eGO(w))},
$S:0}
C.eGO.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eHp.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFx(w,v)}},
$S:0}
C.eHq.prototype={
$0(){this.a.IE()
return null},
$S:0}
C.eHr.prototype={
$0(){return this.a.a9s()},
$S:0}
C.eHs.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cW)w.da(new C.eGN(v))},
$S:0}
C.eGN.prototype={
$0(){var w=this.a
w.f=A.i.D(w.f*1.25,0.08,1.8)
w.e=A.i.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eHu.prototype={
$0(){this.a.E8()
return null},
$S:0}
C.eHv.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FP(v,!0)
return null},
$S:0}
C.eHw.prototype={
$0(){this.a.da(new C.eGM(this.b))},
$S:0}
C.eGM.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eHx.prototype={
$0(){this.a.da(new C.eGK(this.b))},
$S:0}
C.eGK.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eHy.prototype={
$0(){this.a.da(new C.eGJ(this.b))},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eHz.prototype={
$0(){this.a.da(new C.eGI(this.b))},
$S:0}
C.eGI.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDj.prototype={
$1(d){return this.bo9(d)},
bo9(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.da(new C.eDi(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:197}
C.eDi.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eI1.prototype={
$0(){var w=this.a
return w.da(new C.eI0(w,this.b))},
$S:0}
C.eI0.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eI2.prototype={
$0(){var w=this.a
return w.da(new C.eI_(w,this.b))},
$S:0}
C.eI_.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eEr.prototype={
$0(){return this.a.da(new C.eEq(this.b))},
$S:0}
C.eEq.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eEs.prototype={
$0(){return this.a.da(new C.eEp(this.b))},
$S:0}
C.eEp.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eEZ.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.atl,new C.eEY(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eEY.prototype={
$1(d){var w=null
return B.Ap(B.d(d.b,w,w,w,w,w,w,A.lY,w,w,w),48,d,x.fO)},
$S:z+95}
C.eIe.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:37}
C.eId.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eIb(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bl
else v=r.d?A.aT:A.cu
v=B.L(v,A.r,o?2:1)
u=r.d?A.cq:A.c
t=B.bR(0,C.hDz(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aA(q,B.q(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ap(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nW,q,q,q),A.f,q,q,new B.p(A.aU,q,q,s,q,q,A.n),q,q,q,q,A.amR,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIc(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eIc.prototype={
$0(){var w=this.a
return w.m(new C.eI7(w,this.b))},
$S:0}
C.eI7.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KL()},
$S:0}
C.eIb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eI8(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eI9(q,s))
q.aUx()}else if(r==="del"){q=t.a
q.m(new C.eIa(q,s))
q.aTD()}else if(r==="up")t.a.b6c(s,s-1)
else if(r==="down")t.a.b6c(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eI8.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYI,w,w,w,w,new C.eI3(d),!1,w,w,w,w,w,w,w,D.fFw,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYB,w,w,w,w,new C.eI4(d),!1,w,w,w,w,w,w,w,A.xn,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXR,w,w,w,w,new C.eI5(d),!1,w,w,w,w,w,w,w,D.fNX,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZY,w,w,w,w,new C.eI6(d),!1,w,w,w,w,w,w,w,D.fFk,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eI3.prototype={
$0(){B.a7(this.a,!1).O("dup")
return null},
$S:0}
C.eI4.prototype={
$0(){B.a7(this.a,!1).O("del")
return null},
$S:0}
C.eI5.prototype={
$0(){B.a7(this.a,!1).O("up")
return null},
$S:0}
C.eI6.prototype={
$0(){B.a7(this.a,!1).O("down")
return null},
$S:0}
C.eI9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIa.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIf.prototype={
$0(){return this.a.a9s()},
$S:0}
C.eDJ.prototype={
$0(){var w=this.a
w.b9K()
w.aC2(null)},
$S:0}
C.eDI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.aA,A.aF,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.by(s,B.c3(A.l4,new B.p(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bj),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eDH(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ad,A.f,s,new B.bJ("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.p(v,p,p,o,n,w,A.n),A.bj)},
$S:455}
C.eDH.prototype={
$1(d){var w=this
return w.a.bJe(d,w.b,w.c,w.d)},
$S:z+23}
C.eDw.prototype={
$0(){var w=this
if(w.b){w.a.O6(w.c)
return}if(w.d){w.a.a9q(w.c)
return}if(w.e){w.a.ai6(w.c)
return}if(w.f)w.a.bai(w.c)},
$S:0}
C.eDx.prototype={
$0(){this.a.O6(this.b)
return null},
$S:0}
C.eDy.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eDz.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eDv(u,d,w.c,w.d))
v.Ii()
v.oD()
v.pJ()},
$S:19}
C.eDv.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.i.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.i.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eDA.prototype={
$1(d){return this.a.akA(this.b.a,d)},
$S:2}
C.eDC.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hgc(w))u.a.O6(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bai(v)},
$S:0}
C.eDB.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eDD.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eDu(w.b,d,w.c,w.d))
v.Ii()
v.oD()
v.pJ()},
$S:19}
C.eDu.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.i.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.i.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cW)v.w=A.i.D(v.w+u*0.15,10,120)},
$S:0}
C.eDE.prototype={
$1(d){var w=this.a
w.m(new C.eDt(this.b,d))
w.Ii()
w.oD()
w.pJ()},
$S:210}
C.eDt.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.i.D(w.e*v,0.04,1.8)
w.f=A.i.D(w.f*v,0.04,1.8)
if(w.b===D.cW)w.w=A.i.D(w.w*v,10,120)},
$S:0}
C.eDF.prototype={
$0(){var w=this.a
w.m(new C.eDs(this.b))
w.Ii()
w.oD()
w.pJ()},
$S:0}
C.eDs.prototype={
$0(){this.a.r=C.hD3()},
$S:0}
C.eDG.prototype={
$0(){return this.a.a3a(this.b.a)},
$S:0}
C.eFA.prototype={
$0(){var w=this.a
return w.m(new C.eFz(w))},
$S:0}
C.eFz.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eFB.prototype={
$1(d){return this.a.cIz(this.b.a,d)},
$S:2}
C.eEF.prototype={
$1(d){var w
this.a.da(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.eEG.prototype={
$1(d){return this.a.$1(new C.eEE(this.b,d))},
$S:6}
C.eEE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEH.prototype={
$1(d){return this.a.$1(new C.eED(this.b,d))},
$S:6}
C.eED.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEI.prototype={
$1(d){return this.a.$1(new C.eEC(this.b,d))},
$S:6}
C.eEC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eEJ.prototype={
$1(d){return this.a.$1(new C.eEB(this.b,d))},
$S:6}
C.eEB.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eEK.prototype={
$1(d){return this.a.$1(new C.eEA(this.b,d))},
$S:6}
C.eEA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEL.prototype={
$1(d){return this.b.$1(new C.eEz(this.a,this.c))},
$S:9}
C.eEz.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eEM.prototype={
$1(d){return this.b.$1(new C.eEy(this.a,this.c))},
$S:9}
C.eEy.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eEN.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bl:A.d0
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEx(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:452}
C.eEx.prototype={
$0(){return this.a.$1(new C.eEu(this.b,this.c))},
$S:0}
C.eEu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eEO.prototype={
$1(d){return this.a.$1(new C.eEw(this.b,d))},
$S:1732}
C.eEw.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eEP.prototype={
$1(d){var w=null
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEv(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:452}
C.eEv.prototype={
$0(){return this.a.$1(new C.eEt(this.b,this.c))},
$S:0}
C.eEt.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eEQ.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a7(w,!1).pX()}else w=!1
if(w){w=v.a.c
w.toString
B.a7(w,!1).eO()}v.a.auw()},
$S:0}
C.eET.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aA(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.q(n,B.X(A.uV,u,n,n,n,10),A.f,n,n,new B.p(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nG,n,n,n),n,n,n,2,n,n))
return B.aJ(!1,A.a3,!0,n,B.aP(!1,m,!0,B.eJ(new B.a6(48,48,new B.an(A.A,n,A.ad,A.t,r,n),n),n,new B.p(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:132}
C.eCs.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aJ(!1,A.a3,!0,p,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.ed(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.jc,A.K,p,p)],x.p),A.l,p,A.bc,A.j,0,A.p),p,new B.p(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GQ,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:132}
C.eGx.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.asv,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.eGv(d),w,w),B.bI(A.rb,w,new C.eGw(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eGv.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eGw.prototype={
$0(){var w=this.b.a.a
B.a7(this.a,!1).O(w)
return null},
$S:0}
C.daH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aA(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.e7.aA(0,A.i.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dH.aA(0,i)
v=B.m(22)
t=B.ar(A.aM,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nM),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nM).j(0.18+w*0.12),A.I,32+w*10),D.aeD],s)
q=B.m(22)
p=x.O
o=B.ap(k,B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c0(A.b7,0.9,A.x,k,0,B.a([A.d.gH(C.kM(j.a.c.w)?D.v7:L.nM).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kM(j.a.c.w)?D.v7:L.nM).j(0.28+w*0.14)
p=B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c0(A.A,0.5,A.x,k,0,B.a([m,A.d.gan(C.kM(j.a.c.w)?D.v7:L.nM).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kM(m)?D.v7:L.nM
s=B.a([new B.ac(0,A.G,A.d.gH(C.kM(m)?D.v7:L.nM).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.q(k,B.X(C.kM(j.a.c.w)?A.wz:A.qO,A.c,k,k,k,22),A.f,k,k,new B.p(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ad,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nM).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fM,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fxc,A.K,k,k),A.ay,B.d(j.gcDn(),k,k,k,k,k,k,D.fC5,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gTb()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kM(j.a.c.w)?D.v7:L.nM).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.KG(A.z7,"Download PDF","pdf",A.d5,j.Jz(0),!1,k))
p=j.a.c
if(!p.z||p.gTb()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.KG(A.jJ,"Transfer to "+C.hD5(p==null?"":p),"transfer_hati",A.aY,j.Jz(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jz(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.KG(D.bQ8,"Rename presentation","rename",A.ch,n,!1,k),A.am,new C.KG(A.aoL,"Duplicate","duplicate",A.b9,j.Jz(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.U)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.KG(A.ei,"Delete presentation","delete",A.av,j.Jz(p),!0,k))
s.push(A.ay)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jz(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jz(n)
s.push(B.dP(B.da(B.bN(!1,E.aWF,k,k,!0,k,k,k,new C.daG(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bEZ,k,k,k,k,k,A.kz,k,k)),n),new B.o(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aJ(!1,A.a3,!0,k,B.q(k,B.by(q,new B.an(A.a0,k,A.ad,A.t,B.a([o,new B.D(D.bE7,B.x(s,A.l,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Xz,new B.p(A.as,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.daG.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.db4.prototype={
$0(){B.a7(this.a,!1).O(!1)
return null},
$S:0}
C.db5.prototype={
$0(){B.a7(this.a,!1).O(!0)
return null},
$S:0}
C.daE.prototype={
$1(d){var w=this.a
return w.m(new C.daA(w))},
$S:24}
C.daA.prototype={
$0(){return this.a.d=!0},
$S:0}
C.daF.prototype={
$1(d){var w=this.a
return w.m(new C.daz(w))},
$S:72}
C.daz.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daD.prototype={
$0(){var w=this.a
return w.m(new C.daB(w))},
$S:0}
C.daB.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daC.prototype={
$0(){var w=this.a.a.e
B.a7(this.b,!1).O(w)
return null},
$S:0}
C.eJc.prototype={
$0(){return $.bmV=!$.bmV},
$S:0}
C.eJ2.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXL())u.azD()},
$S:0}
C.eJb.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJ3.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJ4.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azD()},
$S:0}
C.eIZ.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eJ_.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJ0.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJ1.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJ9.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1733}
C.eJa.prototype={
$2(d,e){var w
if(e.gc5(e)===A.ip)return new B.d0(e,!1,d,null)
w=this.a
return w.cBg(w.e,d,e)},
$S:459}
C.eJ5.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJ6.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJ7.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJ8.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fx(A.aa,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eJd.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZR().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZR().x
t===$&&B.c()
return new C.b3m(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JE(v.c,t,!0,new B.bJ("cine"+u,x.W))},
$S:670}
C.eJf.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.c1,x.w).w.a.a*0.55)w.azD()
else w.cpy()},
$S:72}
C.eJe.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.fUv.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:460}
C.fUE.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.fUB(d),w,w),B.bN(!1,D.fVB,w,w,!0,w,w,w,new C.fUC(d,this.b,v),w,w),B.bI(A.aWY,w,new C.fUD(d,v,this.c),w)],x.p),w,w,P.uf,new B.a6(320,w,t,w),w,w,w,w,D.fX8,w)},
$S:18}
C.fUB.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.fUC.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).O(null)
C.hgR(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aS0(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRr(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUu.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.clq.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:545}
C.fUA.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fpI.prototype={
$1(d){return C.hgP(C.X6(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h2G.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.h2H.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,D.hxH,0.94+w*0.06,null,null),w)},
$S:458}
C.h2I.prototype={
$1(d){var w=this
return new C.X8(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eIJ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eII.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.X9(u,this.b,w.gaQS(),v,null)},
$S:z+99}
C.eIG.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIH.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIK.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIL.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIO.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eIP.prototype={
$0(){var w=this.a
return w.m(new C.eIN(w))},
$S:0}
C.eIN.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eIQ.prototype={
$0(){var w=this.a
return w.m(new C.eIM(w))},
$S:0}
C.eIM.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eIR.prototype={
$1(d){return this.a.bNQ(d,this.b)},
$S:z+100}
C.eIE.prototype={
$0(){var w=this.a
return w.m(new C.eID(w,this.b))},
$S:0}
C.eID.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eIS.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eIT.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eIU.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIV.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eIW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.M(x.q).f.U(D.fiV)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCl())},
$S:0}
C.eCl.prototype={
$0(){},
$S:0}
C.eCn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.eCi.prototype={
$1(d){return this.a.m(new C.eCh())},
$S:2}
C.eCh.prototype={
$0(){},
$S:0}
C.eCj.prototype={
$1(d){return this.a.b22()},
$S:2}
C.eCk.prototype={
$0(){B.a7(this.a,!1).O(null)
return null},
$S:0}
C.eIY.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eIX(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIX.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fOM.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k1(this.c,new C.fOL(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:227}
C.fOL.prototype={
$3(d,e,f){return new C.JE(e,!1,!1,new B.bJ(e.a,x.W))},
$S:z+102}
C.fON.prototype={
$1(d){var w=null
return B.oL(!1,B.at(new C.bxH(this.a,this.b,w),w,w,w),w,x.z)},
$S:337}
C.fOR.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmS(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.md,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmS(),$async$$0)
case 5:s=$.aW.aq$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qj))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1736}
C.fOS.prototype={
boH(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.hh),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eT(A.dN.gaU(r))],"image/png"))
t.toString
s=An.h7a(t)
w=4
return B.b(new B.qq(s,"load",!1,x.ev).gH(0).dh(0,A.jZ),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boH(d)},
$S:1737}
C.fOO.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fOP.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:155}
C.fOQ.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fjD.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.ftA,A.K,w,w)},
$S:1738}
C.fjE.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.by(v,B.k9(A.bp,w,A.dK,8,w,e===0?w:e,w),A.aq)},
$S:574}
C.eqC.prototype={
$1(d){this.a.a06()
return null},
$S:11}
C.eqA.prototype={
$0(){return this.a.e=D.bzW},
$S:0}
C.eqB.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.cpG.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.cpH.prototype={
$2(d,e){return(d|e)>>>0},
$S:61};(function aliases(){var w=C.aNU.prototype
w.bzU=w.t
w=C.aNo.prototype
w.bzn=w.t
w=C.aN9.prototype
w.bz7=w.t
w=C.aNn.prototype
w.bzm=w.t
w=C.aNS.prototype
w.bzS=w.t
w=C.aPb.prototype
w.bBm=w.t
w=C.aM4.prototype
w.by_=w.t
w=C.aO4.prototype
w.bA4=w.t
w=C.aO5.prototype
w.bA5=w.t
w=C.b53.prototype
w.but=w.aF9})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ipL","aoZ",104)
v(C.aL0.prototype,"gc8V","ZY",0)
var r
u(r=C.azv.prototype,"gcCI","cCJ",38)
v(r,"gc9M","aeI",0)
v(r=C.azr.prototype,"gb0p","EC",3)
v(r,"gc9J","c9K",3)
v(r,"gayJ","yq",0)
v(r,"gaAM","JR",0)
t(C,"iqI","hVk",105)
v(C.aFD.prototype,"gccN","ccO",3)
s(C,"iqT",0,null,["$4$paper$photo$request$template"],["fVV"],106,0)
s(C,"iqS",0,null,["$5$doc$history$instruction$photo$template"],["bEQ"],107,0)
v(r=C.aFU.prototype,"gcdw","Jw",0)
v(r,"gbNi","XL",0)
v(r,"gcdz","afA",0)
v(r,"gcdy","a_T",0)
v(r,"gb1I","ET",0)
v(C.aFX.prototype,"gcdE","a_V",0)
v(r=C.aHl.prototype,"gb1V","QD",0)
v(r,"gcur","b6h",3)
v(r,"gcE6","aDj",86)
v(r,"gbRg","abq",0)
v(r,"gce4","B4",0)
v(r=C.aJh.prototype,"gcoh","a1g",0)
v(r,"gcop","a1j",0)
v(r,"gbG8","a9O",0)
v(r,"gce8","afM",0)
v(C.aJg.prototype,"gce9","afN",0)
v(C.aDi.prototype,"gbF7","a9B",0)
v(C.aBF.prototype,"gcea","a05",0)
w(C,"ir5","ios",12)
w(C,"ir3","ill",12)
w(C,"ir4","inq",12)
v(r=C.aGd.prototype,"gcHq","cHr",3)
v(r,"gcsH","csI",3)
u(r,"gEZ","agw",7)
v(r,"gbKW","atF",3)
u(r,"gF_","b3h",7)
v(r,"gcgq","agd",0)
v(r,"gcfh","agc",0)
v(r,"gciB","agx",0)
v(r,"gbNf","aaY",0)
v(r,"gcjv","a0H",0)
v(r,"gcjw","agO",0)
v(r,"gck2","agV",0)
v(r,"gciO","agA",0)
v(r,"gbRs","abu",0)
v(r,"gaUw","aUx",3)
v(r,"gaTC","aTD",3)
v(r,"gaP6","aP7",3)
v(r,"gaTB","auw",3)
u(r,"gbFo","bFp",80)
v(r,"gaCQ","b9t",3)
v(r,"gcfj","cfk",3)
v(r,"gc1P","c1Q",3)
v(r,"gbPL","bPM",3)
v(r=C.aGg.prototype,"gcGc","cGd",3)
v(r,"gcFQ","cFR",3)
t(C,"ir6","ioJ",2)
v(r=C.aGe.prototype,"gceg","JB",0)
v(r,"gcwt","S8",0)
v(r,"gced","JA",0)
v(r,"gcIK","a3R",0)
v(r,"gcke","ah1",0)
v(C.aGc.prototype,"gceh","b22",3)
v(r=C.aGf.prototype,"gbSi","abE",0)
u(r,"gcee","cef",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oj,C.SP,C.bKu,C.bIM,C.cGU,C.cGS,C.bSJ,C.baO,C.cGT,C.bHl,C.cpA,C.cpy,C.cpz,C.cpx,C.auv,C.cpw,C.bTL,C.oK,C.aGP,C.jC,C.o5,C.a9_,C.Ad,C.lx,C.oU,C.mq,C.Ae,C.o9,C.a97,C.asQ,C.b3n,C.eq1,C.lu,C.Ft,C.ew,C.jb,C.Fk,C.yc,C.eP,C.m0,C.i4,C.jY,C.a98,C.agj,C.b3o,C.b53,C.a4a])
u(B.jw,[C.cOV,C.c3I,C.fJX,C.cQr,C.cPO,C.fPu,C.e8i,C.e8h,C.eqF,C.eqE,C.fQT,C.fqU,C.fqV,C.cjF,C.cjG,C.cjH,C.euj,C.f2q,C.f1O,C.f1N,C.f2R,C.f2o,C.f2h,C.f2A,C.f3g,C.fz0,C.f9A,C.f9z,C.fa2,C.eq4,C.fUr,C.e3w,C.h0e,C.fRf,C.cli,C.clg,C.cll,C.fRK,C.fRL,C.fRM,C.fRN,C.cl2,C.cl3,C.dQG,C.cl_,C.fRJ,C.fh_,C.e1e,C.ckT,C.epL,C.fPj,C.eFX,C.eGl,C.eGi,C.eGh,C.eGs,C.eGr,C.eHX,C.eHW,C.eGb,C.eGa,C.eCL,C.eDV,C.eGU,C.eIe,C.eId,C.eDI,C.eET,C.eCs,C.daH,C.eJ9,C.eJa,C.eJ5,C.eJ6,C.eJ7,C.eJ8,C.eJd,C.clq,C.eIJ,C.eIU,C.cpH])
u(B.ht,[C.cOW,C.cOX,C.bTM,C.fGM,C.c3H,C.c3K,C.fXI,C.fi9,C.fi0,C.fig,C.fpJ,C.fpK,C.fJY,C.fJW,C.fX9,C.fGm,C.fY3,C.cQh,C.cQm,C.cQo,C.cQk,C.cQp,C.cQi,C.cQq,C.cQd,C.cQa,C.cQ9,C.cQg,C.cPJ,C.cPH,C.fOw,C.fOx,C.fu4,C.fPv,C.fPB,C.ft5,C.cfZ,C.fOu,C.fOv,C.fJk,C.fJl,C.fPA,C.fPw,C.fPy,C.fPz,C.fPx,C.h0w,C.fJo,C.fJp,C.fJs,C.fJt,C.fJw,C.fJx,C.h1Z,C.frm,C.h29,C.etC,C.etD,C.etE,C.etk,C.etw,C.etx,C.etz,C.cjE,C.cjC,C.cjD,C.fPa,C.fPc,C.fPb,C.fqW,C.fqX,C.h2c,C.euo,C.eup,C.eug,C.euh,C.euk,C.eul,C.h2s,C.f3h,C.f2H,C.f2r,C.f2E,C.f1J,C.f1K,C.f1L,C.f1P,C.f1Q,C.f36,C.f3d,C.f3f,C.f2Q,C.f2S,C.f2W,C.f2X,C.f2Y,C.f31,C.f2T,C.f2U,C.f20,C.f21,C.f22,C.f23,C.f24,C.f25,C.f26,C.f27,C.f28,C.f1m,C.f1n,C.f1o,C.f1p,C.f1r,C.f1s,C.f1V,C.f1W,C.f1X,C.f1Y,C.f1Z,C.f1w,C.f1x,C.f1y,C.f1z,C.f2g,C.f2z,C.fMz,C.fMy,C.cl9,C.fz_,C.fUn,C.fUg,C.fUj,C.fSe,C.fSf,C.fSg,C.fMG,C.fMF,C.fME,C.fMC,C.fqQ,C.fqR,C.fqS,C.h2E,C.f9C,C.f9D,C.f9w,C.f9q,C.f9W,C.f9X,C.f9Z,C.fa_,C.f9V,C.h2D,C.f9h,C.fyg,C.eq3,C.fUp,C.fUq,C.fUs,C.fUl,C.fUm,C.h1R,C.dta,C.dtg,C.eq2,C.fmY,C.fn_,C.fmZ,C.fmX,C.fNK,C.fNM,C.fpc,C.fTS,C.fTT,C.fTU,C.fU4,C.fU9,C.fUa,C.fUb,C.fUc,C.fUd,C.fUe,C.fUf,C.fTV,C.fTW,C.fTX,C.fTY,C.fTZ,C.fU_,C.fU0,C.fU1,C.fU2,C.fU3,C.fU5,C.fU6,C.fU7,C.fU8,C.fLA,C.fxz,C.fxy,C.fUy,C.e3x,C.e3v,C.f8q,C.cfA,C.cfC,C.h0g,C.dis,C.diu,C.h0f,C.h0d,C.h2C,C.fRb,C.di2,C.fJA,C.fJB,C.cl7,C.cl8,C.cl6,C.ckX,C.ckY,C.ckU,C.ckV,C.ckW,C.clo,C.clj,C.cle,C.clf,C.clh,C.clk,C.clm,C.fRO,C.cl1,C.cl4,C.cl5,C.clb,C.clc,C.fUF,C.fTM,C.cl0,C.ckZ,C.fRI,C.fAi,C.ckS,C.f5V,C.fDp,C.eIA,C.eF_,C.eF0,C.eGA,C.eGo,C.eGp,C.eEn,C.eIl,C.eIm,C.eIn,C.eDM,C.eG3,C.eG5,C.eFG,C.eFD,C.eEW,C.eEX,C.eFN,C.eDO,C.eFZ,C.eG_,C.eFY,C.eG1,C.eG0,C.eGj,C.eGk,C.eGm,C.eGf,C.eE6,C.eE3,C.eGt,C.eDW,C.eIk,C.eCu,C.eDZ,C.eDY,C.eDc,C.eDh,C.eDf,C.eDd,C.eIs,C.eIt,C.eIu,C.eIr,C.eHZ,C.eHY,C.eHS,C.eHU,C.eHK,C.eIi,C.eIg,C.eCC,C.eCy,C.eEU,C.eDl,C.eCN,C.eCM,C.eD8,C.eD9,C.eEl,C.eDn,C.eDr,C.eGc,C.eHL,C.eHM,C.eHN,C.eHO,C.eDQ,C.eDR,C.eDS,C.eFm,C.eEh,C.eE9,C.eEg,C.eFw,C.eFx,C.eHj,C.eHl,C.eHF,C.eHH,C.eHm,C.eHn,C.eDj,C.eEZ,C.eEY,C.eI8,C.eDH,C.eDz,C.eDA,C.eDD,C.eDE,C.eFB,C.eEF,C.eEG,C.eEH,C.eEI,C.eEJ,C.eEK,C.eEL,C.eEM,C.eEN,C.eEO,C.eEP,C.eGx,C.daE,C.daF,C.eJf,C.fUv,C.fUE,C.fUu,C.fUA,C.fpI,C.h2G,C.h2H,C.h2I,C.eII,C.eIR,C.eCn,C.eCi,C.eCj,C.fOM,C.fOL,C.fON,C.fOS,C.fOO,C.fOP,C.fjD,C.fjE,C.eqC,C.cpG])
u(B.iJ,[C.cOY,C.fi5,C.fia,C.fib,C.fi6,C.fi7,C.fi8,C.fhZ,C.fi_,C.fi1,C.fi2,C.fif,C.fie,C.fi4,C.fi3,C.fic,C.fid,C.fii,C.fij,C.fih,C.cQj,C.cQn,C.cQl,C.cQb,C.cQc,C.cQe,C.cQ7,C.cQ8,C.cQf,C.cQ6,C.cQ5,C.cQ4,C.cPy,C.cPx,C.cPA,C.cPI,C.cPB,C.cPz,C.cPD,C.cPE,C.cPF,C.cPC,C.cPG,C.cPK,C.cPL,C.cPM,C.cPN,C.fJi,C.fJj,C.fJg,C.fJh,C.elT,C.elR,C.elS,C.elU,C.elV,C.e8g,C.fJm,C.fJn,C.fJq,C.fJr,C.fJu,C.fJv,C.eqD,C.fRi,C.fRh,C.etB,C.etA,C.ete,C.eta,C.etl,C.etm,C.etn,C.etg,C.eth,C.eti,C.etj,C.etf,C.etc,C.etd,C.ett,C.etu,C.ets,C.etv,C.etr,C.etq,C.etp,C.ety,C.eto,C.etb,C.eun,C.eub,C.euc,C.eui,C.eud,C.euf,C.eue,C.eum,C.f29,C.f2x,C.f1T,C.f1U,C.f1R,C.f1S,C.f2D,C.f2C,C.f2B,C.f2G,C.f2F,C.f1I,C.f1M,C.f1H,C.f1G,C.f1D,C.f1F,C.f1E,C.f3e,C.f37,C.f35,C.f38,C.f34,C.f39,C.f33,C.f3a,C.f3b,C.f3c,C.f32,C.f2P,C.f2K,C.f2V,C.f2O,C.f2Z,C.f2N,C.f3_,C.f2M,C.f30,C.f2L,C.f2u,C.f2t,C.f2v,C.f2s,C.f2w,C.f2m,C.f2l,C.f2n,C.f2k,C.f2j,C.f2i,C.f1q,C.f1l,C.f1A,C.f1v,C.f1B,C.f1u,C.f1C,C.f1t,C.f2p,C.f2d,C.f2c,C.f2e,C.f2b,C.f2f,C.f2a,C.f2y,C.f2J,C.f2I,C.f2_,C.fUi,C.fUk,C.fUo,C.fMD,C.fP3,C.fP1,C.fP2,C.f9E,C.f9F,C.f9B,C.f9v,C.f9u,C.f9x,C.f9y,C.f9k,C.f9l,C.f9n,C.f9o,C.f9p,C.f9m,C.f9r,C.f9S,C.f9T,C.f9R,C.f9U,C.f9Q,C.f9P,C.f9O,C.f9Y,C.f9N,C.f9M,C.f9L,C.fa0,C.f9K,C.fa1,C.f9J,C.f9I,C.f9s,C.f9t,C.f9H,C.f9G,C.f9d,C.f9e,C.f9f,C.f9g,C.f9c,C.f9i,C.f9j,C.dt9,C.dtb,C.dte,C.dtf,C.dtd,C.dtc,C.fNL,C.fLB,C.cfB,C.cfD,C.dil,C.diq,C.dir,C.dip,C.dio,C.dit,C.din,C.dim,C.div,C.h0c,C.dp9,C.dpa,C.dpb,C.fJy,C.fJz,C.clp,C.eCo,C.eCp,C.eCq,C.eCr,C.fAg,C.fAh,C.e1g,C.e1f,C.dff,C.dfe,C.eIC,C.eIB,C.eF1,C.eHI,C.eIy,C.eGy,C.eIo,C.eIp,C.eIz,C.eFH,C.eDK,C.eDL,C.eG4,C.eFF,C.eFC,C.eFE,C.eFI,C.eFJ,C.eFK,C.eFL,C.eFM,C.eFO,C.eDP,C.eFR,C.eFS,C.eFT,C.eFU,C.eFV,C.eFW,C.eFQ,C.eG2,C.eGg,C.eGe,C.eGn,C.eFP,C.eE4,C.eE5,C.eE7,C.eGq,C.eGu,C.eCJ,C.eE2,C.eE0,C.eGC,C.eDX,C.eGB,C.eDN,C.eEo,C.eIj,C.eHJ,C.eCK,C.eCH,C.eCx,C.eCt,C.eCv,C.eE_,C.eDb,C.eDg,C.eDe,C.eDa,C.eGd,C.eIv,C.eHV,C.eHQ,C.eHR,C.eHT,C.eES,C.eER,C.eIh,C.eCA,C.eCB,C.eCD,C.eCE,C.eCI,C.eCz,C.eGz,C.eIq,C.eEV,C.eDk,C.eCw,C.eEm,C.eCF,C.eCO,C.eCP,C.eCQ,C.eD0,C.eD3,C.eD4,C.eD5,C.eD6,C.eD7,C.eCR,C.eCS,C.eCT,C.eCU,C.eCV,C.eCW,C.eCX,C.eCY,C.eCZ,C.eD_,C.eD1,C.eD2,C.eEk,C.eEj,C.eEi,C.eCG,C.eDo,C.eDm,C.eDp,C.eDq,C.eE1,C.eG8,C.eG9,C.eG6,C.eG7,C.eHP,C.eDU,C.eDT,C.eFl,C.eFk,C.eFn,C.eFj,C.eFo,C.eFi,C.eFp,C.eFh,C.eFq,C.eFg,C.eFr,C.eFf,C.eFs,C.eFe,C.eFt,C.eFd,C.eF6,C.eF7,C.eF8,C.eF5,C.eF9,C.eF4,C.eFa,C.eF3,C.eFb,C.eF2,C.eFc,C.eEe,C.eEf,C.eE8,C.eEa,C.eEb,C.eEc,C.eEd,C.eIw,C.eIx,C.eFv,C.eFu,C.eFy,C.eGV,C.eGW,C.eGX,C.eH7,C.eHi,C.eHt,C.eHA,C.eHB,C.eHC,C.eHD,C.eHE,C.eGY,C.eGZ,C.eH_,C.eH0,C.eH1,C.eH2,C.eH3,C.eH4,C.eH5,C.eH6,C.eH8,C.eH9,C.eHa,C.eHb,C.eHc,C.eHd,C.eHe,C.eHf,C.eHg,C.eGL,C.eHh,C.eGT,C.eGS,C.eHk,C.eGR,C.eGH,C.eHG,C.eGQ,C.eGG,C.eGE,C.eGP,C.eGF,C.eGD,C.eHo,C.eGO,C.eHp,C.eHq,C.eHr,C.eHs,C.eGN,C.eHu,C.eHv,C.eHw,C.eGM,C.eHx,C.eGK,C.eHy,C.eGJ,C.eHz,C.eGI,C.eDi,C.eI1,C.eI0,C.eI2,C.eI_,C.eEr,C.eEq,C.eEs,C.eEp,C.eIc,C.eI7,C.eIb,C.eI3,C.eI4,C.eI5,C.eI6,C.eI9,C.eIa,C.eIf,C.eDJ,C.eDw,C.eDx,C.eDy,C.eDv,C.eDC,C.eDB,C.eDu,C.eDt,C.eDF,C.eDs,C.eDG,C.eFA,C.eFz,C.eEE,C.eED,C.eEC,C.eEB,C.eEA,C.eEz,C.eEy,C.eEx,C.eEu,C.eEw,C.eEv,C.eEt,C.eEQ,C.eGv,C.eGw,C.daG,C.db4,C.db5,C.daA,C.daz,C.daD,C.daB,C.daC,C.eJc,C.eJ2,C.eJb,C.eJ3,C.eJ4,C.eIZ,C.eJ_,C.eJ0,C.eJ1,C.eJe,C.fUB,C.fUC,C.fUD,C.eIF,C.eIG,C.eIH,C.eIK,C.eIL,C.eIO,C.eIP,C.eIN,C.eIQ,C.eIM,C.eIE,C.eID,C.eIS,C.eIT,C.eIV,C.eIW,C.eCm,C.eCl,C.eCh,C.eCk,C.eIY,C.eIX,C.fOR,C.fOQ,C.eqA,C.eqB])
t(C.aTp,B.M)
u(B.lD,[C.a4T,C.ayX,C.axB,C.ya,C.yd,C.la,C.tN,C.Cb,C.rV,C.ww,C.atn,C.JF,C.asP,C.vf,C.mT,C.hF,C.a9L])
u(C.bSJ,[C.cGV,C.bSK])
u(C.cpA,[C.cpE,C.auu])
t(C.cpD,C.cpy)
t(C.cpC,C.cpx)
t(C.cpF,C.cpC)
t(C.cpB,C.cpz)
t(C.cpv,C.cpw)
t(C.cA2,B.ax3)
t(C.a9x,B.xY)
u(B.ag,[C.a29,C.ZR,C.ZP,C.arW,C.WX,C.WY,C.a18,C.a1F,C.a1E,C.aFO,C.a01,C.Ol,C.a_z,C.a_U,C.apR,C.aKG,C.We,C.aBk,C.a8Q,C.OP,C.aAH,C.KG,C.a0L,C.X8,C.X9,C.aGb,C.asU,C.a8R])
u(B.ah,[C.aL0,C.azv,C.azr,C.aFD,C.aFU,C.aFX,C.aHl,C.aJh,C.aJg,C.aNU,C.aDi,C.aNo,C.aBF,C.bip,C.aN9,C.aPb,C.aNn,C.bgc,C.aNS,C.aO4,C.aM4,C.beY,C.aO5,C.aGe,C.bmU,C.aGc,C.aGf,C.bmD])
u(B.ax,[C.azt,C.aer,C.adQ,C.blE,C.aeu,C.ag9,C.b2Z,C.bvg,C.b3j,C.boa,C.btN,C.b1d,C.b3m,C.aex,C.aeO,C.b3k,C.JE,C.b1g,C.bfd,C.Qy,C.KM,C.bk_,C.bjZ,C.bxH])
u(B.I5,[C.beF,C.bwF,C.aLn,C.bhp,C.bub])
u(B.mk,[C.beE,C.bb6,C.bu8,C.bec,C.bhO,C.bk6,C.bgT,C.bhK,C.bhr,C.bqw,C.bcf,C.bbT,C.bxD,C.buB,C.btJ,C.bgM,C.b3h,C.bsD,C.btG])
t(C.bmA,C.aNU)
t(C.blW,C.aNo)
t(C.blG,C.aN9)
t(C.bx7,C.aPb)
t(C.blS,C.aNn)
t(C.bmy,C.aNS)
t(C.bA_,C.aO4)
t(C.aGd,C.bA_)
t(C.beZ,C.aM4)
t(C.aGg,C.aO5)
t(C.bxt,B.j2)
t(C.a9K,B.kI)
t(C.cpI,C.b53)
t(C.ajt,C.a4a)
u(B.YQ,[C.aTf,C.aUJ])
t(C.ayx,C.aTf)
w(C.aNU,B.cb)
w(C.aNo,B.cb)
w(C.aN9,B.cb)
w(C.aNn,B.cb)
w(C.aNS,B.cb)
w(C.aPb,B.cb)
w(C.aM4,B.eQ)
w(C.aO4,B.cb)
v(C.bA_,B.eB)
w(C.aO5,B.cb)})()
B.iT(b.typeUniverse,JSON.parse('{"aU0":{"hM":["aU0"]},"oj":{"aU0":[],"hM":["aU0"]},"aTp":{"M":["SP"],"M.E":"SP"},"a9x":{"xY":[],"oD":[]},"a29":{"ag":[],"v":[]},"aL0":{"ah":["a29"]},"ZR":{"ag":[],"v":[]},"ZP":{"ag":[],"v":[]},"azv":{"ah":["ZR"]},"azr":{"ah":["ZP"]},"azt":{"ax":[],"v":[]},"arW":{"ag":[],"v":[]},"aFD":{"ah":["arW"]},"aer":{"ax":[],"v":[]},"adQ":{"ax":[],"v":[]},"aeu":{"ax":[],"v":[]},"ag9":{"ax":[],"v":[]},"blE":{"ax":[],"v":[]},"WX":{"ag":[],"v":[]},"aFU":{"ah":["WX"]},"b2Z":{"ax":[],"v":[]},"beF":{"aC":[]},"beE":{"aC":[]},"bwF":{"aC":[]},"bb6":{"aC":[]},"bu8":{"aC":[]},"WY":{"ag":[],"v":[]},"aFX":{"ah":["WY"]},"bec":{"aC":[]},"a18":{"ag":[],"v":[]},"aHl":{"ah":["a18"]},"bhO":{"aC":[]},"a1F":{"ag":[],"v":[]},"a1E":{"ag":[],"v":[]},"aFO":{"ag":[],"v":[]},"a01":{"ag":[],"v":[]},"aJh":{"ah":["a1F"]},"aJg":{"ah":["a1E"]},"bmA":{"ah":["aFO"]},"bk6":{"aC":[]},"aDi":{"ah":["a01"]},"bvg":{"ax":[],"v":[]},"b3j":{"ax":[],"v":[]},"boa":{"ax":[],"v":[]},"Ol":{"ag":[],"v":[]},"a_z":{"ag":[],"v":[]},"blW":{"ah":["Ol"]},"btN":{"ax":[],"v":[]},"bgT":{"aC":[]},"b1d":{"ax":[],"v":[]},"aBF":{"ah":["a_z"]},"a_U":{"ag":[],"v":[]},"bip":{"ah":["a_U"]},"bhK":{"aC":[]},"bhr":{"aC":[]},"bqw":{"aC":[]},"bcf":{"aC":[]},"bbT":{"aC":[]},"bxD":{"aC":[]},"buB":{"aC":[]},"btJ":{"aC":[]},"bgM":{"aC":[]},"apR":{"ag":[],"v":[]},"b3m":{"ax":[],"v":[]},"blG":{"ah":["apR"]},"aex":{"ax":[],"v":[]},"aeO":{"ax":[],"v":[]},"aKG":{"ag":[],"v":[]},"We":{"ag":[],"v":[]},"JE":{"ax":[],"v":[]},"aBk":{"ag":[],"v":[]},"a8Q":{"ag":[],"v":[]},"b3k":{"ax":[],"v":[]},"b3h":{"aC":[]},"bx7":{"ah":["aKG"]},"aLn":{"aC":[]},"blS":{"ah":["We"]},"bgc":{"ah":["aBk"]},"bmy":{"ah":["a8Q"]},"b1g":{"ax":[],"v":[]},"bhp":{"aC":[]},"bsD":{"aC":[]},"btG":{"aC":[]},"aAH":{"ag":[],"v":[]},"KG":{"ag":[],"v":[]},"a0L":{"ag":[],"v":[]},"KM":{"ax":[],"v":[]},"OP":{"ag":[],"v":[]},"aGd":{"ah":["OP"],"eB":[]},"beZ":{"ah":["aAH"]},"bfd":{"ax":[],"v":[]},"beY":{"ah":["KG"]},"Qy":{"ax":[],"v":[]},"aGg":{"ah":["a0L"]},"bub":{"aC":[]},"bk_":{"ax":[],"v":[]},"bjZ":{"ax":[],"v":[]},"X8":{"ag":[],"v":[]},"X9":{"ag":[],"v":[]},"aGb":{"ag":[],"v":[]},"asU":{"ag":[],"v":[]},"aGe":{"ah":["X8"]},"bmU":{"ah":["X9"]},"aGc":{"ah":["aGb"]},"bxt":{"j2":[]},"aGf":{"ah":["asU"]},"bxH":{"ax":[],"v":[]},"a8R":{"ag":[],"v":[]},"bmD":{"ah":["a8R"]},"a9K":{"kI":["fw<eW>"],"ku":["fw<eW>"]},"ajt":{"a4a":[]},"aTf":{"jf":[],"fi":[]},"ayx":{"jf":[],"fi":[]},"aUJ":{"jf":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mx"),U:w("w_<qm>"),bz:w("u"),M:w("df<n>"),bo:w("jS"),g7:w("Ub"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C3"),fS:w("EG"),an:w("IP"),bm:w("O<SP>"),X:w("O<SS>"),f3:w("O<aU0>"),aK:w("O<nr>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lS>"),d5:w("O<aB<bB<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jC>>"),ez:w("O<a8<n,aE>>"),d:w("O<a8<n,@>>"),B:w("O<mP>"),h:w("O<jC>"),gE:w("O<Ad>"),k:w("O<oK>"),g:w("O<m0>"),D:w("O<i4>"),u:w("O<eP>"),m:w("O<vf>"),i:w("O<hF>"),aC:w("O<a97>"),o:w("O<Ae>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j0>"),J:w("O<js>"),gx:w("O<pA<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(F,F)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j2>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baO>"),bx:w("O<aGP>"),gz:w("O<agj>"),x:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<G?>"),cA:w("O<ck>"),A:w("cw<ah<ag>>"),gL:w("ai<oK>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bB<G,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<G,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<o9,n>"),cT:w("N<jY,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<G,q4>"),gh:w("N<mT,jE<mT>>"),w:w("iC"),ei:w("iF"),g2:w("rL"),fB:w("Fk"),b6:w("Ad"),gX:w("a9_"),dt:w("lx"),ea:w("oK"),bt:w("m0"),I:w("i4"),F:w("eP"),fO:w("mT"),ff:w("vf"),fP:w("hF"),Q:w("ww"),dO:w("asQ"),a:w("cr"),C:w("aE"),dw:w("auv"),di:w("a9L"),Y:w("eW"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FQ"),dB:w("dt<o>"),bJ:w("dt<n>"),_:w("e0<n>"),N:w("n"),fw:w("qm"),bO:w("au"),K:w("br<o>"),b:w("br<F>"),E:w("dK"),W:w("bJ<n>"),ac:w("bJ<G>"),ex:w("k1<m0>"),cI:w("k1<n>"),cl:w("k1<F>"),b4:w("Y<lu>"),a8:w("Y<mq>"),fR:w("Y<+(n,n)>"),co:w("ea<o>"),l:w("v"),b2:w("c2<~>"),ev:w("qq<e_>"),dT:w("bk<~>"),q:w("mz"),y:w("P"),gR:w("F"),z:w("@"),S:w("G"),at:w("bd?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("i4?"),go:w("b3o?"),a6:w("a98?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1T=new B.bM(A.aA,null,null,H.asg,null)
D.b21=new B.d9(0,-0.15)
D.b23=new B.d9(0.62,0)
D.b26=new B.d9(-0.35,-0.45)
D.b2h=new B.d9(0.9,-0.85)
D.b4s=new B.be(H.Uw,H.Uw,A.fL,A.fL)
D.b4I=new B.ay(A.b9,1,A.r,-1)
D.bqr=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4U=new B.ay(D.bqr,1,A.r,-1)
D.b55=new B.ay(A.aE,1.5,A.r,-1)
D.b5a=new B.ay(A.b9,1.6,A.r,-1)
D.b5q=new B.ay(A.aE,1.4,A.r,-1)
D.b6N=new B.p(null,null,null,null,null,K.I7,A.a7)
D.c7L=new B.a9(A.a6,A.aa,A.x,G.a5S,null,null)
D.b6V=new B.p(null,null,null,null,null,D.c7L,A.a7)
D.aet=new B.p(A.as,null,null,A.tR,null,null,A.n)
D.bjg=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bqo=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d6w=w([D.bjg,D.bqo],x.O)
D.ezo=new B.c0(A.A,0.5,A.x,null,0,D.d6w,null,null)
D.b7d=new B.p(null,null,null,null,null,D.ezo,A.a7)
D.Zd=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5G=new B.bG(Q.vQ,A.a1,A.a1,A.a1)
D.b7f=new B.p(D.Zd,null,D.b5G,null,null,null,A.n)
D.c9t=new B.a9(A.a6,A.aa,A.x,A.Sa,null,null)
D.b7m=new B.p(null,null,null,null,null,D.c9t,A.a7)
D.ag6=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b7p=new B.p(D.ag6,null,null,A.rm,null,null,A.n)
D.b7t=new B.p(A.jX,null,null,null,null,null,A.a7)
D.b7w=new B.p(A1.ahn,null,H.ae5,A.mG,null,null,A.n)
D.Fk=new B.p(A.dJ,null,null,null,null,null,A.a7)
D.b7D=new B.p(null,null,null,null,null,E.wR,A.a7)
D.dbS=w([E.ail,A.c3],x.O)
D.c95=new B.a9(A.b7,A.ba,A.x,D.dbS,null,null)
D.b7H=new B.p(null,null,null,A.mG,null,D.c95,A.n)
D.dnu=w([A.bl,A.dJ,A.jW],x.O)
D.a3S=new B.a9(A.aA,A.aF,A.x,D.dnu,null,null)
D.b7U=new B.p(null,null,null,null,null,D.a3S,A.n)
D.b7V=new B.p(D.ag6,null,null,A.l9,null,null,A.n)
D.cB2=w([A.d6,A.bl],x.O)
D.c8X=new B.a9(A.aA,A.aF,A.x,D.cB2,null,null)
D.b7Z=new B.p(null,null,null,null,null,D.c8X,A.n)
D.b88=new B.p(null,null,null,null,null,G.uZ,A.a7)
D.b8t=new B.p(A.ain,null,null,null,null,null,A.a7)
D.bkh=new B.u(0.5647058823529412,0,0,0,A.q)
D.aeD=new B.ac(0,A.G,D.bkh,A.Jy,28)
D.baC=new B.aYd()
D.bba=new C.cA2()
D.af7=new B.cg(A.A,null,null,A.a3H,null)
D.be2=new B.fk(null,null,null,null,null,E.ny,null,null,null,null)
D.bbW=new B.cg(A.A,null,null,D.be2,null)
D.bT5=new B.ae(A.ed,28,A.c,null,null,null)
D.bcr=new B.cg(A.A,null,null,D.bT5,null)
D.be_=new B.fk(2,null,null,null,null,A.c4,null,null,null,null)
D.bcO=new B.cg(A.A,null,null,D.be_,null)
D.bTp=new B.ae(K.PJ,40,A.bC,null,null,null)
D.bcP=new B.cg(A.A,null,null,D.bTp,null)
D.beV=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bf7=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bfA=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfM=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bgp=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgG=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgI=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mo=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bha=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bhi=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agr=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bi9=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bj3=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agH=new B.u(1,1,1,0.9725490196078431,A.q)
D.bjp=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjE=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjH=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjY=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bkn=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bm2=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YV=new B.u(0.8509803921568627,0,0,0,A.q)
D.bmd=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bmk=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahH=new B.u(0.6,0,0,0,A.q)
D.ahJ=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bo3=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.uc=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.box=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bp0=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bpq=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aiE=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zp=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BR=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.N2=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jB=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aj9=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zz=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.btf=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.btL=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bu0=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_1=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bvd=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yn=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bvP=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bw9=new B.hL(A.aT,!0,null,null)
D.fAi=new B.H(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0n=new B.B("Bio link",null,D.fAi,null,null,null,null,null,null,null,null,null)
D.bcJ=new B.cg(A.A,null,null,D.h0n,null)
D.bwo=new B.hL(A.Bv,!0,D.bcJ,null)
D.Nw=new C.a4T(0,"none")
D.akp=new C.a4T(1,"deflate")
D.akq=new C.a4T(2,"bzip2")
D.bxn=new B.kC(0.165,0.84,0.44,1)
D.dcb=w([A.ca,A.dK,A.aE],x.O)
D.c8d=new B.a9(A.aA,A.aF,A.x,D.dcb,null,null)
D.b6S=new B.p(null,null,null,null,null,D.c8d,A.n)
D.c1y=new B.ae(A.f5,null,A.ab,null,null,null)
D.bdn=new B.cg(A.A,null,null,D.c1y,null)
D.bxW=new B.l5(D.b6S,A.bj,D.bdn,null)
D.btu=new B.u(0.058823529411764705,1,1,1,A.q)
D.dfE=w([A.by,A.rw,A.rw,D.btu],x.O)
D.cSy=w([0,0.32,0.7,1],x.x)
D.c8N=new B.a9(A.aA,A.aF,A.x,D.dfE,D.cSy,null)
D.b6H=new B.p(null,null,null,null,null,D.c8N,A.n)
D.by1=new B.l5(D.b6H,A.bj,null,null)
D.bz9=new B.mG(1,1,null,null,null,A.bp,null)
D.bzc=new B.mG(1,null,null,null,null,D.Zz,null)
D.bzG=new B.bd(125e4)
D.bzM=new B.bd(17e4)
D.bzW=new B.bd(35964e8)
D.bA2=new B.bd(55e4)
D.bA6=new B.bd(68e4)
D.bAx=new B.ik(0,0,0,5)
D.bAN=new B.R(0,16,16,0)
D.bAY=new B.R(0,36,0,36)
D.bB5=new B.R(0,54,0,0)
D.bBc=new B.R(10,0,10,3)
D.bBo=new B.ik(10,16,10,10)
D.bBA=new B.R(10,6,4,6)
D.bBD=new B.R(10,8,10,6)
D.alp=new B.R(11,8,11,11)
D.bBI=new B.R(12,0,12,24)
D.bBV=new B.R(12,12,12,4)
D.bBY=new B.R(12,12,8,12)
D.bCd=new B.R(12,8,8,12)
D.bCC=new B.R(14,14,14,0)
D.bCH=new B.R(14,14,14,90)
D.bD3=new B.R(16,10,16,16)
D.bD4=new B.R(16,10,16,20)
D.am9=new B.R(16,6,16,28)
D.bDD=new B.R(18,0,18,10)
D.bDF=new B.R(18,0,18,30)
D.bDH=new B.R(18,10,18,12)
D.bDI=new B.R(18,10,18,14)
D.bE2=new B.R(18,16,14,18)
D.bE7=new B.R(18,18,18,12)
D.bEd=new B.R(18,26,18,12)
D.bEi=new B.R(18,34,18,34)
D.bEj=new B.R(18,4,18,14)
D.bEo=new B.R(18,8,18,24)
D.bEH=new B.R(20,16,14,4)
D.bEM=new B.R(20,18,12,4)
D.bER=new B.R(20,20,12,20)
D.bEU=new B.R(20,22,20,20)
D.bEZ=new B.R(20,6,20,6)
D.bF8=new B.R(22,18,22,18)
D.bFg=new B.R(22,24,22,0)
D.bFj=new B.R(22,24,22,4)
D.bFr=new B.R(22,60,22,22)
D.bFx=new B.R(24,24,24,22)
D.bFH=new B.R(26,10,60,10)
D.bFP=new B.R(28,44,28,44)
D.bG5=new B.R(32,44,32,44)
D.bGd=new B.R(38,30,38,20)
D.bGi=new B.R(4,0,0,6)
D.bGu=new B.ik(4,4,4,4)
D.bGX=new B.ik(6,5,6,5)
D.bH1=new B.R(6,6,8,6)
D.bHd=new B.R(8,14,8,14)
D.bHe=new B.R(8,22,8,22)
D.bHn=new B.R(8,6,12,6)
D.bHw=new B.R(8,8,8,4)
D.an5=new B.R(9,9,9,6)
D.bHH=new B.ik(2.5,2.5,2.5,2.5)
D.bHI=new B.R(10.5,0,10.5,0)
D.bHJ=new B.R(7,1.5,7,1.5)
D.d3k=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHZ=new B.uP(null,null,D.d3k,A.xX)
D.d03=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bI_=new B.uP(null,null,D.d03,A.xX)
D.aWi=new B.H(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_F=new B.B("WORD DESIGN",null,D.aWi,null,null,null,null,null,null,null,null,null)
D.bIF=new B.bz(1,A.bd,D.h_F,null)
D.h_j=new B.B("Slides database",null,Ab.vx,null,null,null,null,null,null,null,null,null)
D.fXw=new B.B("Admin only \xb7 keep as many as you like",null,W.aVM,null,null,null,null,null,null,null,null,null)
D.dwj=w([D.h_j,A.bH,D.fXw],x.p)
D.bwP=new B.fj(A.ah,A.e,A.j,A.E,null,A.p,null,0,D.dwj,null)
D.bII=new B.bz(1,A.bd,D.bwP,null)
D.fRE=new B.B("NGMY logo",null,A.fx,null,null,null,null,null,null,null,null,null)
D.bIL=new B.bz(1,A.bd,D.fRE,null)
D.fxY=new B.H(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1I=new B.B("TALK TO THE EDITOR",null,D.fxY,null,null,null,null,null,null,null,null,null)
D.bJ3=new B.bz(1,A.bd,D.h1I,null)
D.fLg=new B.B("Tell the AI what to change",null,Ab.vx,null,null,null,null,null,null,null,null,null)
D.bJn=new B.bz(1,A.bd,D.fLg,null)
D.bKS=new B.Ew(!0,"video/mp4")
D.fw8=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJa=new B.B("Move presentations between devices",null,D.fw8,null,null,null,!1,null,null,1,null,null)
D.bKW=new B.qI(A.e2,A.a6,A.f,D.fJa,null)
D.fKq=new B.B("Edit in Slides",null,A.jc,null,null,null,null,null,null,null,null,null)
D.bKX=new B.qI(A.e2,A.A,A.f,D.fKq,null)
D.bLb=new B.dq(1,A.cr,D.bKX,null)
D.a21=new B.a_(60988,"MaterialIcons",!1)
D.bOD=new B.a_(61352,"MaterialIcons",!1)
D.aoP=new B.a_(61531,"MaterialIcons",!1)
D.bPP=new B.a_(63062,"MaterialIcons",!1)
D.bPW=new B.a_(63109,"MaterialIcons",!1)
D.bQ8=new B.a_(63206,"MaterialIcons",!1)
D.apv=new B.a_(63238,"MaterialIcons",!1)
D.bQp=new B.a_(63338,"MaterialIcons",!1)
D.a2D=new B.a_(63365,"MaterialIcons",!1)
D.a2E=new B.a_(63367,"MaterialIcons",!1)
D.a2F=new B.a_(63368,"MaterialIcons",!1)
D.apI=new B.a_(63384,"MaterialIcons",!1)
D.bQG=new B.a_(63525,"MaterialIcons",!1)
D.bQK=new B.a_(63568,"MaterialIcons",!1)
D.bR4=new B.a_(983072,"MaterialIcons",!1)
D.bRu=new B.a_(983271,"MaterialIcons",!0)
D.aqQ=new B.a_(983965,"MaterialIcons",!1)
D.aqR=new B.a_(983966,"MaterialIcons",!1)
D.bSp=new B.a_(984592,"MaterialIcons",!1)
D.bSH=new B.ae(A.uI,16,A.aD,null,null,null)
D.ar2=new B.ae(A.pt,18,A.c,null,null,null)
D.bT6=new B.ae(A.Cw,18,N.lH,null,null,null)
D.bTL=new B.ae(A.j4,11,null,null,null,null)
D.bTW=new B.ae(A.a2k,null,A.ev,null,null,null)
D.bUt=new B.ae(A.t0,18,A.aD,null,null,null)
D.bUA=new B.ae(A3.CO,14,null,null,null,null)
D.bUB=new B.ae(A.ei,28,A.c0,null,null,null)
D.bUN=new B.ae(A.qO,20,A.c,null,null,null)
D.bUU=new B.ae(A.zh,null,null,null,null,null)
D.bV_=new B.ae(A.jq,18,A.hr,null,null,null)
D.bV5=new B.ae(A.kv,null,null,null,null,null)
D.bPR=new B.a_(63065,"MaterialIcons",!1)
D.bVJ=new B.ae(D.bPR,15,A.c,null,null,null)
D.bPX=new B.a_(63113,"MaterialIcons",!1)
D.bVP=new B.ae(D.bPX,null,A.ab,null,null,null)
D.bWd=new B.ae(A.uG,22,A.bN,null,null,null)
D.bWy=new B.ae(A.rY,18,null,null,null,null)
D.bWE=new B.ae(A.CT,12,A.c,null,null,null)
D.bS1=new B.a_(983687,"MaterialIcons",!1)
D.bWQ=new B.ae(D.bS1,null,A.bl,null,null,null)
D.bWZ=new B.ae(A.hI,null,A.bl,null,null,null)
D.bXh=new B.ae(A.py,22,A.c,null,null,null)
D.bXl=new B.ae(A.cz,13,A.c,null,null,null)
D.bXr=new B.ae(A.ei,26,A.av,null,null,null)
D.bXv=new B.ae(A.t3,26,A.c,null,null,null)
D.PV=new B.ae(A.j4,8,A.c,null,null,null)
D.bXQ=new B.ae(A.pt,40,A.c,null,null,null)
D.bXR=new B.ae(A.bNA,null,null,null,null,null)
D.bXV=new B.ae(A.uT,20,null,null,null,null)
D.bS0=new B.a_(983683,"MaterialIcons",!1)
D.bY4=new B.ae(D.bS0,null,A.b1,null,null,null)
D.bY5=new B.ae(A.j4,16,A.bl,null,null,null)
D.bYq=new B.ae(A.pw,null,null,null,null,null)
D.arD=new B.ae(A.wz,22,A.c,null,null,null)
D.bYw=new B.ae(A.ed,17,A.c,null,null,null)
D.arE=new B.ae(A.j4,9,A.c,null,null,null)
D.bYB=new B.ae(A.wu,null,null,null,null,null)
D.bNR=new B.a_(57744,"MaterialIcons",!1)
D.bYI=new B.ae(D.bNR,null,null,null,null,null)
D.bYL=new B.ae(A.wu,16,null,null,null,null)
D.bSy=new B.a_(985181,"MaterialIcons",!1)
D.I_=new B.ae(D.bSy,null,null,null,null,null)
D.bYX=new B.ae(A.kv,16,A.bN,null,null,null)
D.bRV=new B.a_(983615,"MaterialIcons",!1)
D.bYZ=new B.ae(D.bRV,12,A.c,null,null,null)
D.arK=new B.ae(A.z4,16,null,null,null,null)
D.bZ6=new B.ae(A.ed,21,A.c,null,null,null)
D.bZb=new B.ae(A.hI,17,A.c,null,null,null)
D.bZc=new B.ae(A.uG,null,null,null,null,null)
D.bZt=new B.ae(A.PT,20,A.aD,null,null,null)
D.bZI=new B.ae(A.nJ,22,E.ny,null,null,null)
D.bZQ=new B.ae(A.qM,13,A.ab,null,null,null)
D.bZT=new B.ae(A.a3k,20,A.aD,null,null,null)
D.bNy=new B.a_(57495,"MaterialIcons",!1)
D.bZY=new B.ae(D.bNy,null,null,null,null,null)
D.c_1=new B.ae(A.ox,18,A.c,null,null,null)
D.c_o=new B.ae(A.uV,28,A.c,null,null,null)
D.c_z=new B.ae(D.apv,null,A.aE,null,null,null)
D.c_A=new B.ae(A.qO,22,A.c,null,null,null)
D.arT=new B.ae(A.a1Y,16,null,null,null,null)
D.c0m=new B.ae(A.uG,32,A.c,null,null,null)
D.c14=new B.ae(A.js,22,A.c,null,null,null)
D.c17=new B.ae(A.t3,22,A.ab,null,null,null)
D.as8=new B.ae(A.uI,null,A.bW,null,null,null)
D.c22=new B.ae(A.qG,18,null,null,null,null)
D.c2F=new B.ae(A.ed,18,A.bh,null,null,null)
D.c2M=new B.ae(A.aqy,null,null,null,null,null)
D.c3c=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aW6,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.fnN=new B.H(!0,A.bK,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3u=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fnN,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.c3V=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.d7z=w([A.dJ,A.aE],x.O)
D.c60=new B.a9(A.a6,A.aa,A.x,D.d7z,null,null)
D.c6b=new B.a9(A.b7,A.ba,A.W5,A.azh,null,null)
D.bfp=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bkp=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bo4=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bi0=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cSA=w([D.bfp,D.bkp,D.bo4,D.bi0],x.O)
D.c6t=new B.a9(A.aA,A.aF,A.x,D.cSA,A.Iv,null)
D.dws=w([A.cF,A.bD,A.b9],x.O)
D.c6v=new B.a9(A.b7,A.ba,A.W5,D.dws,null,null)
D.dxY=w([A.bl,A.ch],x.O)
D.c6A=new B.a9(A.a6,A.aa,A.x,D.dxY,null,null)
D.dsC=w([A.hE,A.cZ,A.aw],x.O)
D.c6C=new B.a9(A.aA,A.aF,A.x,D.dsC,null,null)
D.ddX=w([A.cG,A.fo],x.O)
D.c6G=new B.a9(A.a6,A.aa,A.x,D.ddX,null,null)
D.dwl=w([N.lH,A.cZ],x.O)
D.asV=new B.a9(A.a6,A.aa,A.x,D.dwl,null,null)
D.bl7=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dwi=w([D.bl7,D.yn,A.c4],x.O)
D.c6L=new B.a9(A.a6,A.aa,A.x,D.dwi,null,null)
D.d9j=w([A.b5,A.cX,A.eq],x.O)
D.c6M=new B.a9(A.aA,A.aF,A.x,D.d9j,null,null)
D.Qc=new B.a9(A.a6,A.aa,A.x,A.IL,null,null)
D.buo=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cLw=w([D.buo,A.c4,A.jD],x.O)
D.at_=new B.a9(A.aA,A.aF,A.x,D.cLw,null,null)
D.djI=w([A.u6,A.aC,D.BR],x.O)
D.c7N=new B.a9(A.a6,A.aa,A.x,D.djI,null,null)
D.bvQ=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bj2=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bpe=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d8p=w([D.bvQ,D.bj2,D.bpe],x.O)
D.at0=new B.a9(A.a6,A.aa,A.x,D.d8p,null,null)
D.bl9=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9M=w([Az.ak3,D.bl9],x.O)
D.c7W=new B.a9(A.b7,A.ba,A.x,D.c9M,null,null)
D.d6k=w([A.mQ,A.bC],x.O)
D.c8_=new B.a9(A.b7,A.ba,A.x,D.d6k,null,null)
D.dpb=w([A.aE,A.dK],x.O)
D.c85=new B.a9(A.a6,A.aa,A.x,D.dpb,null,null)
D.aiS=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aB0=w([D.aiS,D.jB,D.Mo],x.O)
D.c8x=new B.a9(A.aA,A.aF,A.x,D.aB0,null,null)
D.cLo=w([A.dx,A.dA],x.O)
D.c8I=new B.a9(A.b7,A.ba,A.x,D.cLo,null,null)
D.dm2=w([A.y_,A.y9],x.O)
D.c9v=new B.a9(A.a6,A.aa,A.x,D.dm2,null,null)
D.fTg=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c9I=new B.q7(null,D.fTg,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zH=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7R=new C.la(2,"elegantNavy")
D.hF5=w([A.Zn,D.jB,A.c4],x.O)
D.kb=new C.ya(0,"classic")
D.a7G=new C.jC("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7R,4294967035,4279378237,4290283019,D.kb)
D.aKA=new C.la(3,"elegantGold")
D.beU=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bg5=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ahb=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hEy=w([D.beU,D.bg5,D.ahb],x.O)
D.a7E=new C.jC("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKA,4294966515,4281016592,4289102906,D.kb)
D.dTC=new C.la(22,"goldRibbon")
D.hEu=w([A.Zn,D.jB,A.is],x.O)
D.a7x=new C.jC("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dTC,4294967035,4279378237,4291404327,D.kb)
D.dTD=new C.la(23,"goldBaroque")
D.ahW=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hEA=w([D.ahW,A.aC,A.jD],x.O)
D.a7y=new C.jC("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dTD,4294964964,4283053072,4292128567,D.kb)
D.dTF=new C.la(4,"elegantEmerald")
D.bhq=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bir=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hEG=w([D.bhq,D.bir,A.is],x.O)
D.a7z=new C.jC("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dTF,4294376440,4279122734,4291404327,D.kb)
D.dTG=new C.la(5,"elegantBurgundy")
D.bmL=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hEN=w([D.bmL,A.agi,A.is],x.O)
D.a7C=new C.jC("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dTG,4294965238,4283043359,4291404327,D.kb)
D.dTz=new C.la(19,"goldFiligree")
D.Na=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hEB=w([D.Na,A.aC,A.jD],x.O)
D.a7A=new C.jC("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dTz,4294966259,4279378237,4292128567,D.kb)
D.dTA=new C.la(20,"goldLaurel")
D.bue=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hEO=w([A.Mg,A.is,D.bue],x.O)
D.a7B=new C.jC("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dTA,4294966776,4282000405,4291404327,D.kb)
D.dTB=new C.la(21,"goldCrest")
D.ag9=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bul=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hED=w([D.ag9,A.aC,D.bul],x.O)
D.a7F=new C.jC("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dTB,4294965484,4283053072,4292128567,D.kb)
D.dTE=new C.la(24,"goldStar")
D.bvH=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hEH=w([D.bvH,A.aC,D.jB],x.O)
D.a7D=new C.jC("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dTE,4294966518,4279378237,4292128567,D.kb)
D.I9=w([D.a7G,D.a7E,D.a7x,D.a7y,D.a7z,D.a7C,D.a7A,D.a7B,D.a7F,D.a7D],x.h)
D.qZ=new C.mT(0,"blank")
D.TR=new C.mT(1,"title")
D.n9=new C.mT(2,"titleContent")
D.ede=new C.mT(3,"twoColumn")
D.DW=new C.mT(4,"section")
D.edf=new C.mT(5,"comparison")
D.Ji=new C.mT(6,"flashcard")
D.Jj=new C.mT(7,"quiz")
D.Jk=new C.mT(8,"worksheet")
D.atl=w([D.qZ,D.TR,D.n9,D.ede,D.DW,D.edf,D.Ji,D.Jj,D.Jk],B.as("O<mT>"))
D.aC7=w([Ap.YG,A.dA],x.O)
D.l_=w([A.c4,A.bN,A.i5,A.i3,D.BR],x.O)
D.dPp=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aC7,D.l_)
D.buB=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmJ=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d6x=w([D.buB,D.bmJ],x.O)
D.dPg=new C.jb("confetti","Golden Confetti","Together we rise",D.d6x,D.l_)
D.d3q=w([A.o6,A.Yg],x.O)
D.dPh=new C.jb("crown","Crown of Glory","Built for our community",D.d3q,D.l_)
D.biQ=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bmm=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.daN=w([D.biQ,D.bmm],x.O)
D.v0=w([A.bK,A.aP,A.c,A.aO,A.an],x.O)
D.dPb=new C.jb("aurora","Aurora Gala","A brighter future, together",D.daN,D.v0)
D.bo6=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dmb=w([G.afL,D.bo6],x.O)
D.dPs=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dmb,D.l_)
D.dPt=new C.jb("diamonds","Diamond Rain","Every member is a jewel",Z.aCT,D.v0)
D.bfU=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blM=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.drP=w([D.bfU,D.blM],x.O)
D.dP6=new C.jb("starburst","Golden Starburst","Thank you!",D.drP,D.l_)
D.c9T=w([A.fn,A.ye],x.O)
D.afV=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RN=w([A.pe,A.ir,A.wb,A.o7,D.afV],x.O)
D.dPA=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.c9T,D.RN)
D.d2D=w([A.Yu,A.w],x.O)
D.dPo=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d2D,D.v0)
D.bsq=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.diq=w([A.kq,D.bsq],x.O)
D.dPj=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.diq,D.l_)
D.bpW=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnQ=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dn9=w([D.bpW,D.bnQ],x.O)
D.dP8=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dn9,D.l_)
D.duF=w([A.dx,A.i2],x.O)
D.dPe=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.duF,D.l_)
D.bk3=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d0p=w([A.yg,D.bk3],x.O)
D.dPa=new C.jb("hearts","Floating Hearts","Made with love",D.d0p,D.RN)
D.bgy=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bhx=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dwg=w([D.bgy,D.bhx],x.O)
D.dPz=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dwg,D.RN)
D.bts=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dsa=w([A.lh,D.bts],x.O)
D.dP5=new C.jb("butterflies","Golden Butterflies","New beginnings",D.dsa,D.l_)
D.bpa=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d1u=w([D.bpa,A.w],x.O)
D.dPr=new C.jb("neon","Neon Night","Let's go!",D.d1u,D.v0)
D.blp=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dpn=w([A.ML,D.blp],x.O)
D.dPu=new C.jb("disco","Disco Ball","Party time",D.dpn,D.v0)
D.bpL=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.doS=w([A.hE,D.bpL],x.O)
D.dP9=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.doS,D.l_)
D.dot=w([A.rA,A.dA],x.O)
D.dPv=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.dot,D.v0)
D.biX=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.doH=w([D.biX,A.dA],x.O)
D.dPy=new C.jb("snow","Winter Gala","Warm wishes to all",D.doH,D.v0)
D.bf2=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bgj=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dv9=w([D.bf2,D.bgj],x.O)
D.dPn=new C.jb("laurel","Laurel Victory","We did it together",D.dv9,D.l_)
D.beT=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bmi=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d_o=w([D.beT,D.bmi],x.O)
D.dPx=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.d_o,D.l_)
D.bnu=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cLl=w([G.BQ,D.bnu],x.O)
D.dPk=new C.jb("kente","Kente Pride","Proud of our roots",D.cLl,D.l_)
D.bqC=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.btQ=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dcz=w([D.bqC,D.btQ],x.O)
D.dPf=new C.jb("trophy","Trophy Shine","Winners together",D.dcz,D.l_)
D.doO=w([Aq.Mv,A.w],x.O)
D.dP7=new C.jb("shooting","Shooting Stars","Make a wish",D.doO,D.v0)
D.bfb=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajP=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dvs=w([D.bfb,D.ajP],x.O)
D.dPl=new C.jb("bokeh","Golden Bokeh","Shine bright",D.dvs,D.l_)
D.bfC=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.djh=w([D.bfC,A.w],x.O)
D.dPd=new C.jb("orbits","Golden Orbits","Always moving forward",D.djh,D.l_)
D.btt=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dfw=w([A.ah6,D.btt],x.O)
D.dPi=new C.jb("flowers","Blooming Garden","Growing together",D.dfw,D.RN)
D.bfn=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bga=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.du5=w([D.bfn,D.bga],x.O)
D.dPc=new C.jb("music","Music Party","Celebrate with us",D.du5,D.v0)
D.bhb=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.buh=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d0D=w([D.bhb,D.buh],x.O)
D.dPw=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d0D,D.l_)
D.dfC=w([G.BQ,D.ajP],x.O)
D.dPq=new C.jb("sparklers","Golden Sparklers","Light up the night",D.dfC,D.l_)
D.dPm=new C.jb("city","City Lights","The whole city celebrates",D.aC7,D.l_)
D.Ii=w([D.dPp,D.dPg,D.dPh,D.dPb,D.dPs,D.dPt,D.dP6,D.dPA,D.dPo,D.dPj,D.dP8,D.dPe,D.dPa,D.dPz,D.dP5,D.dPr,D.dPu,D.dP9,D.dPv,D.dPy,D.dPn,D.dPx,D.dPk,D.dPf,D.dP7,D.dPl,D.dPd,D.dPi,D.dPc,D.dPw,D.dPq,D.dPm],B.as("O<jb>"))
D.eFm=new B.y("","No ring")
D.eVW=new B.y("platinum","Platinum")
D.eRY=new B.y("glow","Glow")
D.eJ8=new B.y("double","Double line")
D.eI0=new B.y("framed","Gallery frame")
D.eET=new B.y("rosegold","Rose gold")
D.eSN=new B.y("jewels","Jeweled")
D.ePm=new B.y("aurora","Aurora")
D.Dc=w([D.eFm,A.UC,D.eVW,D.eRY,M.aRm,D.eJ8,A.aRk,D.eI0,D.eET,D.eSN,D.ePm],x.L)
D.cut=w([D.a7A,D.a7B,D.a7F,D.a7x,D.a7y,D.a7D],x.h)
D.bZk=new B.ae(G.aop,16,null,null,null,null)
D.ba_=new B.w_(A.bn,D.bZk,null,x.U)
D.bO_=new B.a_(58027,"MaterialIcons",!1)
D.bSN=new B.ae(D.bO_,16,null,null,null,null)
D.b9Y=new B.w_(A.K,D.bSN,null,x.U)
D.bO0=new B.a_(58030,"MaterialIcons",!1)
D.bWX=new B.ae(D.bO0,16,null,null,null,null)
D.ba0=new B.w_(A.e_,D.bWX,null,x.U)
D.cAN=w([D.ba_,D.b9Y,D.ba0],B.as("O<w_<qm>>"))
D.cIB=w([A.BW,A.hD],x.O)
D.cIC=w([A.b5,A.b8,A.eq],x.O)
D.RC=w([A.bN,A.i3,A.i5,A.aC,A.o7],x.O)
D.cLr=w([A.c4,D.jB,D.Mo],x.O)
D.cLZ=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eCG=new B.y(4278913286,4280030216)
D.eCY=new B.y(4279373061,4278518787)
D.eD4=new B.y(4279898630,4278847235)
D.dbW=w([D.eCG,D.eCY,D.eD4],x.n)
D.d7i=w(["\u265b","\u269c","\u2726"],x.s)
D.dTx=new C.yc("Royal Onyx & Gold",D.dbW,4292128567,4294370209,4294965479,3874020544,D.d7i)
D.eCt=new B.y(4278326799,4278598442)
D.eCv=new B.y(4278395929,4278258953)
D.eCC=new B.y(4278599728,4278327826)
D.duw=w([D.eCt,D.eCv,D.eCC],x.n)
D.d1m=w(["\u269c","\u2756","\u2727"],x.s)
D.dTu=new C.yc("Imperial Emerald",D.duw,4293050997,4294699968,4294180856,3872254170,D.d1m)
D.eCw=new B.y(4278455076,4278918747)
D.eCB=new B.y(4278587439,4278322714)
D.eCP=new B.y(4279051376,4278455076)
D.dsy=w([D.eCw,D.eCB,D.eCP],x.n)
D.dk1=w(["\u2654","\u2726","\u2748"],x.s)
D.dTo=new C.yc("Sapphire Crown",D.dsy,4291417834,4294967295,4294310143,3871986666,D.dk1)
D.eD2=new B.y(4279894534,4283041554)
D.eDe=new B.y(4281008906,4279042307)
D.eDm=new B.y(4284221976,4279894534)
D.dyD=w([D.eD2,D.eDe,D.eDm],x.n)
D.d2M=w(["\u265b","\u2766","\u2726"],x.s)
D.dTq=new C.yc("Ruby Throne",D.dyD,4293378685,4294963145,4294964466,3874213833,D.d2M)
D.eCX=new B.y(4279371039,4281995100)
D.eD6=new B.y(4280092723,4278714896)
D.eDj=new B.y(4283045242,4279371039)
D.duU=w([D.eCX,D.eD6,D.eDj],x.n)
D.dsV=w(["\u2655","\u2756","\u2727"],x.s)
D.dTv=new C.yc("Amethyst Palace",D.duU,4293314984,4294963421,4294702591,3873229802,D.dsV)
D.eCy=new B.y(4278519045,4280032287)
D.eCQ=new B.y(4279111184,4278321666)
D.eDb=new B.y(4280492839,4278716426)
D.dri=w([D.eCy,D.eCQ,D.eDb],x.n)
D.dic=w(["\u2726","\u25c6","\u2742"],x.s)
D.dTs=new C.yc("Obsidian & Platinum",D.dri,4293256418,4294967295,4294638330,3872378836,D.dic)
D.eD3=new B.y(4279896588,4282194463)
D.eDc=new B.y(4280553487,4279043334)
D.eDk=new B.y(4283048488,4279896588)
D.dhC=w([D.eD3,D.eDc,D.eDk],x.n)
D.dwJ=w(["\u2766","\u273f","\u2727"],x.s)
D.dTp=new C.yc("Rose Gold Velvet",D.dhC,4293440672,4294960345,4294964979,3874214602,D.dwJ)
D.eCz=new B.y(4278520340,4279180595)
D.eCE=new B.y(4278718495,4278322443)
D.eD0=new B.y(4279510591,4278520340)
D.cSg=w([D.eCz,D.eCE,D.eD0],x.n)
D.diW=w(["\u269c","\u2736","\u2756"],x.s)
D.dTt=new C.yc("Midnight Brass",D.cSg,4291405148,4293975208,4294439914,3872837564,D.diW)
D.eDz=new B.y(4294703086,4293780428)
D.eDv=new B.y(4294307549,4293187253)
D.eDA=new B.y(4294966517,4293977807)
D.d58=w([D.eDz,D.eDv,D.eDA],x.n)
D.djl=w(["\u269c","\u265b","\u2726"],x.s)
D.dTw=new C.yc("Ivory Marble & Gold",D.d58,4289760572,4286209048,4280951062,3863625518,D.djl)
D.eCK=new B.y(4278978566,4280555024)
D.eD_=new B.y(4279504137,4278518530)
D.eDg=new B.y(4281211923,4278978566)
D.d2B=w([D.eCK,D.eD_,D.eDg],x.n)
D.dtG=w(["\u2742","\u2726","\u265c"],x.s)
D.dTr=new C.yc("Onyx & Copper",D.d2B,4291856987,4294365880,4294964718,3873885630,D.dtG)
D.cM6=w([D.dTx,D.dTu,D.dTo,D.dTq,D.dTv,D.dTs,D.dTp,D.dTt,D.dTw,D.dTr],B.as("O<yc>"))
D.cOt=w([A.aC,D.BR,A.i3],x.O)
D.eLp=new B.y("Original",null)
D.eLz=new B.y("Wide 16:9",1.7777777777777777)
D.eNX=new B.y("Landscape 3:2",1.5)
D.eKQ=new B.y("Photo 4:3",1.3333333333333333)
D.eZQ=new B.y("Portrait 3:4",0.75)
D.azq=w([D.eLp,D.eLz,D.eNX,D.eKQ,M.aRa,D.eZQ],B.as("O<+(n,F?)>"))
D.azr=w([A.i3,A.bT,A.bb,A.br],x.O)
D.eO8=new B.y("","Original")
D.eQ6=new B.y("circle","Circle")
D.eWK=new B.y("rounded","Rounded")
D.eXK=new B.y("triangle","Triangle")
D.eSe=new B.y("hexagon","Hexagon")
D.eQy=new B.y("diamond","Diamond")
D.ePl=new B.y("arch","Arch")
D.Dj=w([D.eO8,D.eQ6,D.eWK,D.eXK,D.eSe,D.eQy,D.ePl],x.L)
D.dOv=new C.lu("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kQ,A.d6,A.aM)
D.dOL=new C.lu("campus_green","Campus Green","Normal",A.b1,A.nw,A.u8,A.ha,A.e6)
D.dOC=new C.lu("warm_sand","Warm Sand","Normal",A.dX,A.i5,A.bN,A.i7,A.od)
D.dOJ=new C.lu("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aO,A.T,A.aM)
D.dOu=new C.lu("coral_fresh","Coral Fresh","Normal",A.ca,A.i4,A.q7,A.kr,A.u1)
D.dOK=new C.lu("lavender_calm","Lavender Calm","Normal",A.b9,A.qa,A.y7,A.oi,A.kn)
D.dOw=new C.lu("ocean_breeze","Ocean Breeze","Normal",A.fo,A.rI,A.tY,A.u3,A.oe)
D.aj_=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dOH=new C.lu("berry_pop","Berry Pop","Normal",A.fd,D.aj_,A.kM,G.ZZ,A.BX)
D.dOx=new C.lu("midnight_pro","Midnight Pro","Professional",A.aE,A.T,A.dx,A.kM,A.cu)
D.dOG=new C.lu("executive_navy","Executive Navy","Professional",A.d5,A.ai9,A.d6,A.lf,A.bK)
D.dOE=new C.lu("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.bp,A.T,A.aP,A.cu)
D.dOy=new C.lu("corporate_steel","Corporate Steel","Professional",A.og,A.T,A.mT,A.fH,A.bK)
D.dOB=new C.lu("gold_luxe","Gold Luxe","Luxury",A.mL,A.dT,A.pc,A.m5,A.bN)
D.bpQ=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dOF=new C.lu("rose_gold_elite","Rose Gold Elite","Luxury",A.hD,D.bpQ,A.ZH,A.ir,A.o7)
D.dOI=new C.lu("platinum_night","Platinum Night","Luxury",A.cu,A.dA,A.bp,A.aP,A.aO)
D.dOM=new C.lu("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qe,A.eV,A.qn,A.jU)
D.dOt=new C.lu("royal_purple","Royal Purple","Luxury",A.nv,A.YM,A.kn,A.kM,A.Mf)
D.dOD=new C.lu("neon_pitch","Neon Pitch","Bold",A.bb,A.dA,A.T,A.b0,A.aO)
D.dOA=new C.lu("crimson_impact","Crimson Impact","Bold",A.bC,A.kq,A.ek,A.rJ,A.eU)
D.dOz=new C.lu("sunset_gallery","Sunset Gallery","Bold",A.fp,A.u1,A.kr,A.q7,A.mR)
D.Ir=w([D.dOv,D.dOL,D.dOC,D.dOJ,D.dOu,D.dOK,D.dOw,D.dOH,D.dOx,D.dOG,D.dOE,D.dOy,D.dOB,D.dOF,D.dOI,D.dOM,D.dOt,D.dOD,D.dOA,D.dOz],B.as("O<lu>"))
D.d_8=w([A.c4,D.jB],x.O)
D.dhW=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eP5=new B.y("Faces & people",D.dhW)
D.cOx=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eBi=new B.y("Ideas & work",D.cOx)
D.d7O=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eSj=new B.y("Nature",D.d7O)
D.di4=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eLn=new B.y("Places & things",D.di4)
D.dbt=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ePq=new B.y("Symbols",D.dbt)
D.d_e=w([D.eP5,D.eBi,D.eSj,D.eLn,D.ePq],B.as("O<+(n,ai<n>)>"))
D.bfs=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d_z=w([A.c4,D.ahb,D.bfs],x.O)
D.b9j=new B.ac(0,A.G,A.Mc,A.aLq,40)
D.b9_=new B.ac(0,A.G,A.ob,A.et,8)
D.d_M=w([D.b9j,D.b9_],x.V)
D.d0j=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azP=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a54=w([A.i3,A.eq,A.bC,A.as,A.ca],x.O)
D.d1f=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ahr=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d1r=w([A.Zx,D.ahr,A.Zx],x.O)
D.d1w=w([A.is,D.jB,D.Mo],x.O)
D.eL9=new B.y(A.bn,D.a2E)
D.eMC=new B.y(A.K,D.a2D)
D.eG9=new B.y(A.e_,D.a2F)
D.d2w=w([D.eL9,D.eMC,D.eG9],B.as("O<+(qm,a_)>"))
D.cW=new C.JF(0,"text")
D.lU=new C.JF(1,"image")
D.fi=new C.JF(2,"shape")
D.TQ=new C.JF(3,"pdf")
D.lu=new C.JF(4,"signature")
D.a80=new C.JF(5,"bio")
D.d3w=w([D.cW,D.lU,D.fi,D.TQ,D.lu,D.a80],B.as("O<JF>"))
D.d3x=w([A.bt,A.cH],B.as("O<Ix>"))
D.d4c=w(["School","Documents","Sign & present"],x.s)
D.b9o=new B.ac(0,A.G,A.ajE,A.vl,28)
D.d4B=w([D.b9o],x.V)
D.d4U=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RW=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAf=w([A.i3,A.Gn,A.aO,A.c,A.pe,A.aC],x.O)
D.eZd=new B.y(0.1,0.08)
D.eSh=new B.y(0.3,0.05)
D.eFB=new B.y(0.55,0.1)
D.eK4=new B.y(0.8,0.06)
D.eNn=new B.y(0.92,0.16)
D.eMR=new B.y(0.2,0.2)
D.eKA=new B.y(0.7,0.22)
D.eQV=new B.y(0.05,0.4)
D.eNP=new B.y(0.95,0.45)
D.eGp=new B.y(0.12,0.7)
D.eIM=new B.y(0.88,0.75)
D.eIU=new B.y(0.4,0.9)
D.eDR=new B.y(0.65,0.93)
D.eJI=new B.y(0.25,0.97)
D.eL6=new B.y(0.85,0.9)
D.eHk=new B.y(0.5,0.04)
D.d6s=w([D.eZd,D.eSh,D.eFB,D.eK4,D.eNn,D.eMR,D.eKA,D.eQV,D.eNP,D.eGp,D.eIM,D.eIU,D.eDR,D.eJI,D.eL6,D.eHk],x.G)
D.d6B=w([A.c,A.hD,A.aH,A.aY],x.O)
D.eeR=new C.jY("office_blue","Office Blue",A.bl,A.d6,A.aM,A.c,A.kQ)
D.ef1=new C.jY("campus_green","Campus Green",A.b1,A.ha,A.e6,A.nw,A.u8)
D.eeS=new C.jY("sunset","Sunset",A.fp,A.kr,A.od,A.i4,A.q7)
D.eeT=new C.jY("midnight","Midnight",A.aE,A.kM,A.cu,A.T,A.dx)
D.ef3=new C.jY("classic","Classic",A.cZ,A.dT,A.m6,A.i5,A.h_)
D.ef0=new C.jY("rose_gold","Rose Gold",A.hD,A.yh,A.yg,A.wb,A.BW)
D.eeM=new C.jY("ocean_teal","Ocean Teal",A.fo,A.u3,A.oe,A.rI,A.tY)
D.eeL=new C.jY("slate_pro","Slate Pro",A.bv,A.T,A.aM,A.aP,A.aO)
D.eeK=new C.jY("neon_night","Neon Night",A.bb,A.b0,A.aO,A.dA,A.T)
D.eeW=new C.jY("lavender","Lavender",A.b9,A.oi,A.kn,A.qa,A.y7)
D.eeY=new C.jY("coral","Coral",A.ca,A.kr,A.u1,A.i4,A.mR)
D.eeN=new C.jY("forest","Forest",A.hq,A.e5,A.cq,A.m7,A.ev)
D.eeO=new C.jY("berry","Berry",A.fd,G.ZZ,A.BX,D.aj_,A.kM)
D.eeV=new C.jY("sand","Sand",A.dX,A.i7,A.od,A.i5,A.bN)
D.ef_=new C.jY("ice","Ice",A.og,A.FU,A.aM,A.nq,A.fH)
D.eeQ=new C.jY("charcoal","Charcoal",A.an,A.aP,A.cu,A.bp,A.T)
D.eeJ=new C.jY("mint","Mint",A.aY,A.fR,A.ha,A.m7,A.qn)
D.eeZ=new C.jY("crimson","Crimson",A.bC,A.mQ,A.kq,A.Gl,A.rJ)
D.biq=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eeU=new C.jY("gold","Gold",A.mL,A.y_,A.pc,D.biq,A.m5)
D.eeX=new C.jY("aqua","Aqua",A.bU,A.G6,A.p9,A.qb,A.pf)
D.eeP=new C.jY("plum","Plum",A.nv,A.ye,A.BX,A.FV,A.rE)
D.ef2=new C.jY("steel","Steel",A.d5,A.d6,A.bp,A.kQ,A.lf)
D.a5j=w([D.eeR,D.ef1,D.eeS,D.eeT,D.ef3,D.ef0,D.eeM,D.eeL,D.eeK,D.eeW,D.eeY,D.eeN,D.eeO,D.eeV,D.ef_,D.eeQ,D.eeJ,D.eeZ,D.eeU,D.eeX,D.eeP,D.ef2],B.as("O<jY>"))
D.d6Y=w([A.c4,A.jD],x.O)
D.TS=new C.hF(10,"rotate3d")
D.Jm=new C.hF(8,"flip")
D.aKT=new C.hF(19,"spiral")
D.r_=new C.hF(16,"bounce")
D.aKW=new C.hF(9,"flipVertical")
D.d6Z=w([D.TS,D.Jm,D.aKT,D.r_,D.aKW],x.i)
D.em=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d7l=w([0.62,1],x.x)
D.d7Y=w([0,0.32,0.68,1],x.x)
D.na=new C.hF(6,"zoom")
D.vf=new C.hF(4,"slideUp")
D.ve=new C.hF(2,"slideLeft")
D.d87=w([D.na,D.Jm,D.vf,D.TS,D.ve],x.i)
D.d8D=w([A.bT,A.hD,A.ir,A.i3,A.c],x.O)
D.b9e=new B.ac(0,A.G,D.ahH,A.vl,30)
D.d9p=w([D.b9e],x.V)
D.eqr=new B.o(0,-2.5)
D.eqh=new B.o(-2.5,0)
D.eot=new B.o(2.5,0)
D.d9s=w([A.U5,A.a8s,A.aM3,A.a8r,D.eqr,O.aM_,D.eqh,D.eot],x.dN)
D.Ix=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.da_=w([23,114,69,56,80,144],x.t)
D.dat=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.daW=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dcE=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dcJ=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bk=new C.vf(0,"rectangle")
D.eZ=new C.vf(1,"circle")
D.lv=new C.vf(6,"hexagon")
D.dcZ=w([D.bk,D.eZ,D.lv],x.m)
D.oM=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aj8=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.ddx=w([D.aj8,A.e5],x.O)
D.eFS=new B.y("","Classic")
D.eE5=new B.y("caps","Bold caps")
D.eQY=new B.y("elegant","Elegant")
D.eX3=new B.y("shadow","Shadow")
D.eKt=new B.y("neon","Neon glow")
D.eUK=new B.y("marker","Highlighter")
D.eXh=new B.y("stamp","Stamp")
D.eJk=new B.y("threed","3D")
D.eRu=new B.y("fire","Fire")
D.eSt=new B.y("ice","Ice")
D.eQ5=new B.y("chalk","Chalk")
D.eQa=new B.y("comic","Comic")
D.eYz=new B.y("softglow","Soft glow")
D.eTw=new B.y("lowercase","Lowercase")
D.eQG=new B.y("double","Echo")
D.eYI=new B.y("whisper","Whisper")
D.aBb=w([D.eFS,D.eE5,D.eQY,D.eX3,D.eKt,M.aRl,D.eUK,D.eXh,M.aRn,D.eJk,M.aRf,D.eRu,D.eSt,D.eQ5,D.eQa,A.UC,At.aRo,D.eYz,D.eTw,D.eQG,D.eYI],x.L)
D.deR=w([3,5,7,10,12,15],x.t)
D.dgr=w([A.bT,A.bN,A.c,A.eL,A.cF],x.O)
D.dFZ=new C.tN(10,"cardWorld")
D.DP=new C.Cb(3,"rounded")
D.dWx=new C.lx("world","NGMY World",D.dFZ,D.DP,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dG_=new C.tN(11,"cardSplit")
D.dWt=new C.lx("business","Business Wire",D.dG_,D.DP,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dG0=new C.tN(12,"cardBreaking")
D.dWG=new C.lx("breaking","Breaking Red",D.dG0,D.DP,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dG1=new C.tN(13,"cardFeature")
D.dWz=new C.lx("feature","Tech Feature",D.dG1,D.DP,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJw=new C.tN(6,"circle")
D.aJq=new C.Cb(4,"circle")
D.dWD=new C.lx("parchment","Royal Circle",D.aJw,D.aJq,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dWs=new C.lx("ocean","Blue Ocean",D.aJw,D.aJq,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dG4=new C.tN(7,"rail")
D.aJp=new C.Cb(1,"double")
D.dWu=new C.lx("forest","Green Leaf",D.dG4,D.aJp,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJt=new C.tN(1,"sideBySide")
D.dWI=new C.lx("herald","NGMY Herald",D.aJt,D.DP,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJs=new C.tN(0,"classic")
D.a7c=new C.Cb(9,"shadow")
D.dWH=new C.lx("daily","The Daily",D.aJs,D.a7c,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dG2=new C.tN(2,"splash")
D.aJr=new C.Cb(6,"cutCorner")
D.dWr=new C.lx("tabloid","Big Tabloid",D.dG2,D.aJr,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJx=new C.tN(9,"minimal")
D.dWC=new C.lx("modern","Modern Digest",D.aJx,D.DP,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJu=new C.tN(3,"magazine")
D.aJo=new C.Cb(0,"plain")
D.dWy=new C.lx("midnight","Midnight Edition",D.aJu,D.aJo,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dG5=new C.tN(8,"banner")
D.dWA=new C.lx("metro","Metro Wire",D.dG5,D.aJr,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dFY=new C.Cb(8,"arch")
D.dWB=new C.lx("sunrise","Sunrise Post",D.aJu,D.dFY,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJv=new C.tN(5,"scrapbook")
D.dFX=new C.Cb(5,"tape")
D.dWw=new C.lx("neon","Neon Beat",D.aJv,D.dFX,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dG3=new C.tN(4,"wrap")
D.dWJ=new C.lx("gold","Golden Press",D.dG3,D.a7c,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dWK=new C.lx("minimal","Paper White",D.aJx,D.a7c,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dWv=new C.lx("gazette","Fresh Gazette",D.aJs,D.aJp,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dWF=new C.lx("times","Classic Times",D.aJt,D.aJo,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tn=new C.Cb(2,"polaroid")
D.dWE=new C.lx("scrapbook","Memory Scrapbook",D.aJv,D.Tn,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5A=w([D.dWx,D.dWt,D.dWG,D.dWz,D.dWD,D.dWs,D.dWu,D.dWI,D.dWH,D.dWr,D.dWC,D.dWy,D.dWA,D.dWB,D.dWw,D.dWJ,D.dWK,D.dWv,D.dWF,D.dWE],B.as("O<lx>"))
D.dgD=w([0.45,1],x.x)
D.IB=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dh2=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hzp=new C.oU("Original",0,1,1,0,0,0)
D.hzt=new C.oU("Black & white",0,1.1,0,0,0,0)
D.hzg=new C.oU("Noir",-0.05,1.55,0,0,0,0)
D.hzk=new C.oU("Sepia",0,1,0.25,0.9,0,0)
D.hzj=new C.oU("Vivid",0,1.15,1.6,0,0,0)
D.hzc=new C.oU("Pop",0,1.3,1.9,0,0,0)
D.hze=new C.oU("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hzq=new C.oU("Matte",0,0.9,0.85,0,0,0.55)
D.hzl=new C.oU("Cool",0,1.05,1,-0.8,0,0)
D.hzs=new C.oU("Warm",0.03,1.05,1.1,0.8,0,0)
D.hzd=new C.oU("Golden hour",0.04,1,1.25,1,0,0)
D.hzi=new C.oU("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hzr=new C.oU("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hzh=new C.oU("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hzn=new C.oU("Retro",0,0.9,0.7,0.4,0,0.35)
D.hzm=new C.oU("Forest",0,1,1.2,-0.1,-0.45,0)
D.hzo=new C.oU("Rose",0,1,1.1,0.3,0.4,0)
D.hzf=new C.oU("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dh3=w([D.hzp,D.hzt,D.hzg,D.hzk,D.hzj,D.hzc,D.hze,D.hzq,D.hzl,D.hzs,D.hzd,D.hzi,D.hzr,D.hzh,D.hzn,D.hzm,D.hzo,D.hzf],B.as("O<oU>"))
D.beO=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dh5=w([D.aj8,A.e5,D.beO],x.O)
D.eBb=new B.y(0.12,0.3)
D.eSE=new B.y(0.26,0.75)
D.eQU=new B.y(0.8,0.22)
D.eXt=new B.y(0.9,0.7)
D.eTv=new B.y(0.5,0.15)
D.eVE=new B.y(0.65,0.85)
D.eHR=new B.y(0.08,0.85)
D.dhl=w([D.eBb,D.eSE,D.eQU,D.eXt,D.eTv,D.eVE,D.eHR],x.G)
D.aBo=w([A.bb,A.bT,A.br,A.b5],x.O)
D.dig=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dit=w([A.c,A.fH,A.dl,A.w0],x.O)
D.biG=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.djx=w([D.biG,D.ahr],x.O)
D.djz=w([A.u6,A.aC],x.O)
D.djP=w([0,0.25,0.75,1],x.x)
D.djR=w([A.y3,A.pe],x.O)
D.aKt=new C.la(10,"kenteSunset")
D.hEw=w([D.ahW,A.kl,A.aC],x.O)
D.dRK=new C.jC("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aKt,4294964964,4282000405,4279983648,D.kb)
D.aKu=new C.la(11,"indigoMudcloth")
D.bg_=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hEK=w([D.bg_,A.aho,A.is],x.O)
D.dRS=new C.jC("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKu,4294439140,4279903102,4279903102,D.kb)
D.aKv=new C.la(12,"adinkraRoyal")
D.bv2=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hEL=w([D.ag9,D.bv2,A.aC],x.O)
D.dRU=new C.jC("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKv,4294965484,4285218591,4287322667,D.kb)
D.aKw=new C.la(13,"nileLotus")
D.bqY=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bn4=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hEQ=w([D.bqY,D.bn4,A.is],x.O)
D.dRT=new C.jC("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKw,4294244340,4279196764,4279196764,D.kb)
D.aKx=new C.la(14,"shweshweIvory")
D.bkW=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bjw=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bgx=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hEx=w([D.bkW,D.bjw,D.bgx],x.O)
D.dRP=new C.jC("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKx,4294505710,4279970378,4291058750,D.kb)
D.tk=new C.la(15,"certIvoryNavy")
D.hEv=w([D.Na,D.jB,A.is],x.O)
D.aK3=new C.ya(1,"ringsNdoa")
D.dRM=new C.jC("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tk,4294966259,4279378237,4291404327,D.aK3)
D.a7I=new C.ya(2,"coupleCards")
D.dRH=new C.jC("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tk,4294966259,4279378237,4291404327,D.a7I)
D.DS=new C.la(18,"certIvoryNavyBar")
D.ag8=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hEJ=w([D.ag8,D.jB,A.is],x.O)
D.aK4=new C.ya(3,"kuhoweshaForm")
D.dRF=new C.jC("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DS,4294966519,4279378237,4291404327,D.aK4)
D.ahF=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hF2=w([D.Na,D.ahF,A.is],x.O)
D.a7J=new C.ya(4,"mahariPande")
D.dRI=new C.jC("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tk,4294966259,4279904068,4291404327,D.a7J)
D.aKy=new C.la(16,"certIvoryGreen")
D.bke=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hEz=w([A.Mg,D.bke,A.is],x.O)
D.aK5=new C.ya(5,"familiaMti")
D.dRO=new C.jC("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKy,4294966776,4280241466,4291404327,D.aK5)
D.a7K=new C.ya(6,"ndoaSafi")
D.dRG=new C.jC("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DS,4294966519,4279378237,4291404327,D.a7K)
D.bp9=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hEC=w([D.Na,A.is,D.bp9],x.O)
D.a7L=new C.ya(7,"peteWide")
D.dRL=new C.jC("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tk,4294966259,4282001936,4291404327,D.a7L)
D.dRV=new C.ya(8,"muhuriCrest")
D.dRE=new C.jC("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tk,4294966259,4279378237,4291404327,D.dRV)
D.hEM=w([D.ag8,D.ahF,A.is],x.O)
D.dRW=new C.ya(9,"fomuWazi")
D.dRR=new C.jC("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DS,4294966519,4279904068,4291404327,D.dRW)
D.aKz=new C.la(17,"certIvoryRose")
D.bl0=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hEP=w([D.bl0,D.aiE,A.is],x.O)
D.a7H=new C.ya(10,"upendoOrnate")
D.dRN=new C.jC("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKz,4294965493,4286200650,4291404327,D.a7H)
D.dki=w([D.dRK,D.dRS,D.dRU,D.dRT,D.dRP,D.dRM,D.dRH,D.dRF,D.dRI,D.dRO,D.dRG,D.dRL,D.dRE,D.dRR,D.dRN],x.h)
D.en=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jn=new C.ww(0,"emojis")
D.DY=new C.ww(1,"pictures")
D.Jo=new C.ww(2,"icons3d")
D.a82=new C.ww(3,"animations")
D.TU=new C.ww(4,"videoMotion")
D.DZ=new C.ww(5,"luxe")
D.a5H=w([D.Jn,D.DY,D.Jo,D.a82,D.TU,D.DZ],B.as("O<ww>"))
D.eWh=new B.y(A.ed,"Looks")
D.eJY=new B.y(A.D4,"Light")
D.eJV=new B.y(A.ml,"Colour")
D.eHS=new B.y(A.wx,"Effects")
D.apq=new B.a_(63112,"MaterialIcons",!1)
D.eEl=new B.y(D.apq,"Crop")
D.dkQ=w([D.eWh,D.eJY,D.eJV,D.eHS,D.eEl],x.f2)
D.dlx=w([],x.D)
D.hF_=w([],x.L)
D.eI5=new B.y("Flashcard",D.Ji)
D.eM1=new B.y("Quiz",D.Jj)
D.eO3=new B.y("Worksheet",D.Jk)
D.eL1=new B.y("Notes",D.n9)
D.eMA=new B.y("Section",D.DW)
D.dmh=w([D.eI5,D.eM1,D.eO3,D.eL1,D.eMA],B.as("O<+(n,mT)>"))
D.dTH=new C.la(6,"beadedPearl")
D.bnV=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hF3=w([H.ZG,D.bnV,A.is],x.O)
D.aK1=new C.jC("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dTH,4294966774,4286209070,4291404327,D.kb)
D.dTI=new C.la(7,"artDeco")
D.bsk=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bvn=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hF1=w([D.bsk,D.bvn,A.c4],x.O)
D.aK2=new C.jC("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dTI,4294440434,4280228630,4290283019,D.kb)
D.dTJ=new C.la(8,"rosetteCorners")
D.buu=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.biL=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bnN=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hEF=w([D.buu,D.biL,D.bnN],x.O)
D.aK0=new C.jC("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dTJ,4294702831,4285218602,4291394365,D.kb)
D.dTK=new C.la(9,"modernLedger")
D.hEE=w([A.c,D.jB,D.jB],x.O)
D.aK_=new C.jC("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dTK,4294967295,4279378237,4279378237,D.kb)
D.dml=w([D.aK1,D.aK2,D.aK0,D.aK_],x.h)
D.dmv=w([A.ir,A.pe],x.O)
D.ct=new C.hF(0,"none")
D.dm=new C.hF(1,"fade")
D.Jl=new C.hF(3,"slideRight")
D.aKV=new C.hF(5,"slideDown")
D.edl=new C.hF(7,"zoomOut")
D.a81=new C.hF(11,"cube")
D.edg=new C.hF(12,"blur")
D.aKS=new C.hF(13,"dissolve")
D.edh=new C.hF(14,"wipeLeft")
D.edi=new C.hF(15,"wipeRight")
D.TT=new C.hF(17,"push")
D.edj=new C.hF(18,"flash")
D.aKU=new C.hF(20,"swing")
D.edk=new C.hF(21,"curtain")
D.Sv=w([D.ct,D.dm,D.ve,D.Jl,D.vf,D.aKV,D.na,D.edl,D.Jm,D.aKW,D.TS,D.a81,D.edg,D.aKS,D.edh,D.edi,D.r_,D.TT,D.edj,D.aKT,D.aKU,D.edk],x.i)
D.Sw=w([D.a7G,D.a7E,D.a7x,D.a7y,D.a7z,D.a7C,D.a7A,D.a7B,D.a7F,D.a7D,D.aK1,D.aK2,D.aK0,D.aK_],x.h)
D.dmY=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dn1=w([A.u9,A.i3,A.c4],x.O)
D.eJe=new B.y(A.uL,"Design")
D.eXT=new B.y(D.apI,"Word sizes")
D.eTe=new B.y(A.D0,"Text")
D.bRk=new B.a_(983182,"MaterialIcons",!1)
D.eTj=new B.y(D.bRk,"Photo")
D.eDU=new B.y(A.kY,"Logo")
D.eZb=new B.y(A.HX,"News")
D.dn7=w([D.eJe,D.eXT,D.eTe,D.eTj,D.eDU,D.eZb],x.f2)
D.dn8=w(["golddust","sparkle","sheen"],x.s)
D.dnD=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","ADVISOR TRADING ACADEMY: the live browser panel of the advisor chat has a candlestick button that opens the Trading Academy of the advisor. Learn tab: five short lessons on candlesticks, then the advisor studies four markets (real candles, or a practice market when offline), zooming in and out and going back over the past, for five minutes at the most; it learns only once and what it learned (how often the price went up after each shape) is saved on the device for each advisor, and each day it only tops up with the newest candles. Demo tab: practice trades on the past with practice money, so you can see how well it learned. Real tab: NGMY is not connected to a broker and never places real-money trades; the advisor only shows its setup (direction, entry, stop, target) with the reasons, for the person to place themselves, with a clear risk note.","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.eeI=new C.ew("upload_pdf",K.PJ,"Upload PDF")
D.edS=new C.ew("sign_paper",A.HU,"Sign Paper")
D.bQA=new B.a_(63438,"MaterialIcons",!1)
D.eeE=new C.ew("hd_photo",D.bQA,"HD Photo")
D.edK=new C.ew("sharpen",E.a2n,"Sharpen")
D.edU=new C.ew("print",K.PJ,"Download PDF")
D.eel=new C.ew("rotate",D.apq,"Rotate")
D.ee2=new C.ew("text_box",A.D0,"Text Box")
D.ee4=new C.ew("picture",A.uP,"Picture")
D.ee0=new C.ew("title",A.wL,"Title")
D.edX=new C.ew("subtitle",V.aqj,"Subtitle")
D.eeu=new C.ew("bullets",I.a2G,"Bullet List")
D.edY=new C.ew("numbered",A.Pw,"Numbered")
D.eex=new C.ew("quote",A3.CO,"Quote")
D.ee9=new C.ew("citation",A.nJ,"Citation")
D.eeA=new C.ew("date_stamp",Ai.a2r,"Date Stamp")
D.een=new C.ew("page_number",A.zo,"Page #")
D.eer=new C.ew("header_bar",A.zq,"Header")
D.ee3=new C.ew("footer_bar",Au.a3e,"Footer")
D.edT=new C.ew("divider",A.t1,"Divider")
D.edP=new C.ew("highlight",A.a2J,"Highlight")
D.eet=new C.ew("redact",A.uW,"Redact")
D.eeg=new C.ew("callout",A.CF,"Callout")
D.eeC=new C.ew("checkboxes",I.aoJ,"Checklist")
D.eed=new C.ew("table",A.a3c,"Table")
D.ee7=new C.ew("memo",I.a2W,"Memo")
D.eeh=new C.ew("letter",A.HI,"Letter")
D.bQd=new B.a_(63259,"MaterialIcons",!0)
D.edJ=new C.ew("agenda",D.bQd,"Agenda")
D.edV=new C.ew("toc",AC.apW,"Contents")
D.bQw=new B.a_(63406,"MaterialIcons",!1)
D.eee=new C.ew("sig_line",D.bQw,"Sign Line")
D.edC=new C.ew("initial_line",A.j3,"Initials")
D.edF=new C.ew("approved",A.kY,"APPROVED")
D.eej=new C.ew("draft",A.py,"DRAFT")
D.eep=new C.ew("confidential",A.j4,"Confidential")
D.ees=new C.ew("sticky",A.PO,"Sticky Note")
D.eeB=new C.ew("progress",A.apV,"Progress")
D.bRK=new B.a_(983507,"MaterialIcons",!1)
D.edQ=new C.ew("stars",D.bRK,"Star Rating")
D.edA=new C.ew("equation",A.apK,"Equation")
D.edL=new C.ew("timeline",A.a3d,"Timeline")
D.ee8=new C.ew("two_col",A.a3f,"Two Columns")
D.edN=new C.ew("compare",Ay.a2v,"Compare")
D.edy=new C.ew("duplicate_el",A.fW,"Duplicate")
D.eeG=new C.ew("delete_el",A.ei,"Delete")
D.eew=new C.ew("bring_fwd",H.apE,"Bring Front")
D.edD=new C.ew("send_back",H.apD,"Send Back")
D.eei=new C.ew("align_left",D.a2E,"Align L")
D.eeo=new C.ew("align_center",D.a2D,"Align C")
D.eeF=new C.ew("align_right",D.a2F,"Align R")
D.ee1=new C.ew("word_count",A2.a22,"Word Count")
D.edZ=new C.ew("link_text",A.hL,"Link")
D.eem=new C.ew("phone",A.j5,"Phone")
D.edO=new C.ew("email",A.CK,"Email")
D.eeH=new C.ew("qr_placeholder",A.jI,"QR Placeholder")
D.edI=new C.ew("rectangle",A4.t_,"Rectangle")
D.eec=new C.ew("circle",A.po,"Circle")
D.edE=new C.ew("arrow",A.jq,"Arrow")
D.eev=new C.ew("line",A.t1,"Line")
D.edR=new C.ew("triangle",A.a2t,"Triangle")
D.bQk=new B.a_(63318,"MaterialIcons",!1)
D.edW=new C.ew("grayscale",D.bQk,"Grayscale")
D.ee5=new C.ew("brighten",I.ap3,"Brighten")
D.eea=new C.ew("flip_h",A.CN,"Flip H")
D.bQr=new B.a_(63348,"MaterialIcons",!1)
D.eeD=new C.ew("flip_v",D.bQr,"Flip V")
D.eeq=new C.ew("cover_page",A.qH,"Cover Page")
D.edB=new C.ew("invoice",A.hf,"Invoice")
D.edM=new C.ew("resume",A.n2,"Resume")
D.ee_=new C.ew("minutes",A.pr,"Minutes")
D.edG=new C.ew("lab_report",A.HP,"Lab Report")
D.edH=new C.ew("rubric",A.qK,"Rubric")
D.eeb=new C.ew("flashcard_tool",X.HR,"Flashcard")
D.eey=new C.ew("quiz_tool",A.HN,"Quiz Block")
D.eef=new C.ew("worksheet_tool",P.Ho,"Worksheet")
D.eek=new C.ew("outline_share",A.PM,"Share Outline")
D.eez=new C.ew("export_json",D.aoP,"Export JSON")
D.edz=new C.ew("new_slide",D.a21,"New Slide")
D.ee6=new C.ew("present",A.qO,"Present")
D.dnF=w([D.eeI,D.edS,D.eeE,D.edK,D.edU,D.eel,D.ee2,D.ee4,D.ee0,D.edX,D.eeu,D.edY,D.eex,D.ee9,D.eeA,D.een,D.eer,D.ee3,D.edT,D.edP,D.eet,D.eeg,D.eeC,D.eed,D.ee7,D.eeh,D.edJ,D.edV,D.eee,D.edC,D.edF,D.eej,D.eep,D.ees,D.eeB,D.edQ,D.edA,D.edL,D.ee8,D.edN,D.edy,D.eeG,D.eew,D.edD,D.eei,D.eeo,D.eeF,D.ee1,D.edZ,D.eem,D.edO,D.eeH,D.edI,D.eec,D.edE,D.eev,D.edR,D.edW,D.ee5,D.eea,D.eeD,D.eeq,D.edB,D.edM,D.ee_,D.edG,D.edH,D.eeb,D.eey,D.eef,D.eek,D.eez,D.edz,D.ee6],B.as("O<ew>"))
D.dnP=w([A.cu,A.an],x.O)
D.eDq=new B.y(4286331629,4292552567)
D.eDd=new B.y(4280640491,4278630100)
D.eDy=new B.y(4294538006,4292943176)
D.eCA=new B.y(4278556265,4280640491)
D.dhx=w([D.eDq,D.eDd,D.eDy,D.eCA],x.n)
D.cEC=w([4294626325,4280472558,4294210230],x.t)
D.edt=new C.o9("colorful","Colorful",A.ml,D.dhx,4294967295,3875536895,D.cEC,D.na)
D.eD1=new B.y(4279522093,4279657780)
D.eDh=new B.y(4281750292,4283268111)
D.eCD=new B.y(4278603323,4279203438)
D.eDi=new B.y(4282343954,4279599165)
D.cPL=w([D.eD1,D.eDh,D.eCD,D.eDi],x.n)
D.cEk=w([4288931381,4294829706,4287033260],x.t)
D.edp=new C.o9("nature","Nature",A.HV,D.cPL,4294442727,3874290891,D.cEk,D.dm)
D.eCW=new B.y(4279369771,4283178389)
D.eCT=new B.y(4279179050,4286456526)
D.eD9=new B.y(4280163147,4290648157)
D.eCs=new B.y(4278322711,4285343961)
D.d7c=w([D.eCW,D.eCT,D.eD9,D.eCs],x.n)
D.cEy=w([4294210230,4280472558,4289170426],x.t)
D.edn=new C.o9("vibe","Vibe",A.PA,D.d7c,4294967295,3874869502,D.cEy,D.ve)
D.eDu=new B.y(4290007817,4292552567)
D.eDo=new B.y(4286328082,4294286859)
D.eDt=new B.y(4288485197,4294538006)
D.eDn=new B.y(4285343961,4293675161)
D.cal=w([D.eDu,D.eDo,D.eDt,D.eDn],x.n)
D.cED=w([4294829706,4294967295,4284999929],x.t)
D.edo=new C.o9("celebration","Celebration",A.kv,D.cal,4294967295,4009752557,D.cED,D.r_)
D.eCR=new B.y(4279179050,4280171146)
D.eCV=new B.y(4279310375,4280232247)
D.eCJ=new B.y(4278916151,4280172719)
D.eCS=new B.y(4279179050,4281549141)
D.d_s=w([D.eCR,D.eCV,D.eCJ,D.eCS],x.n)
D.cEf=w([4281908728,4294626325,4287931320],x.t)
D.eds=new C.o9("professional","Professional",A.CD,D.d_s,4294967295,3872118241,D.cEf,D.TT)
D.eCN=new B.y(4278995566,4278413729)
D.eCF=new B.y(4278727492,4279137424)
D.eDa=new B.y(4280171146,4278751666)
D.eCO=new B.y(4278995566,4279590517)
D.cIt=w([D.eCN,D.eCF,D.eDa,D.eCO],x.n)
D.cEi=w([4286436348,4284410580,4294829706],x.t)
D.edu=new C.o9("ocean","Ocean",I.a3h,D.cIt,4294967295,3873501950,D.cEi,D.vf)
D.eDp=new B.y(4286328082,4294538006)
D.eDr=new B.y(4286781507,4294677052)
D.eDl=new B.y(4283178389,4294197086)
D.eDs=new B.y(4288295954,4294688548)
D.cWF=w([D.eDp,D.eDr,D.eDl,D.eDs],x.n)
D.cEE=w([4294829706,4294967295,4294747557],x.t)
D.edv=new C.o9("sunset","Sunset",A.PR,D.cWF,4294967295,4009749973,D.cEE,D.dm)
D.eDC=new B.y(4294967295,4294047225)
D.eDx=new B.y(4294507260,4294967295)
D.eDB=new B.y(4294967295,4293060848)
D.eDw=new B.y(4294507260,4294047225)
D.daz=w([D.eDC,D.eDx,D.eDB,D.eDw],x.n)
D.cEd=w([4280640491,4279179050,4287931320],x.t)
D.edr=new C.o9("minimal","Minimal",A4.t_,D.daz,4279179050,4282865001,D.cEd,D.dm)
D.eCM=new B.y(4278979081,4280886564)
D.eD5=new B.y(4280031511,4278979081)
D.eCU=new B.y(4279308561,4281148438)
D.eCL=new B.y(4278979081,4280031511)
D.dpR=w([D.eCM,D.eD5,D.eCU,D.eCL],x.n)
D.cEr=w([4292128567,4294829706,4289241758],x.t)
D.edw=new C.o9("elegant","Elegant",A.mm,D.dpR,4294898631,3873957348,D.cEr,D.aKS)
D.eD7=new B.y(4280159034,4282058596)
D.eCI=new B.y(4278916151,4280163147)
D.eDf=new B.y(4281208933,4278916151)
D.eCZ=new B.y(4279502891,4283178389)
D.dxo=w([D.eD7,D.eCI,D.eDf,D.eCZ],x.n)
D.cEA=w([4294296657,4292128567,4291081725],x.t)
D.edq=new C.o9("royal","Royal Gold",A.js,D.dxo,4294965222,3874084351,D.cEA,D.na)
D.eCx=new B.y(4278464302,4280163147)
D.eCH=new B.y(4278916151,4279455306)
D.eD8=new B.y(4280163147,4283040846)
D.eCu=new B.y(4278332450,4281413249)
D.dh8=w([D.eCx,D.eCH,D.eD8,D.eCu],x.n)
D.cEe=w([4281193663,4289170426,4294210230],x.t)
D.edx=new C.o9("aurora","Aurora Glow",A.ed,D.dh8,4293983738,3869766608,D.cEe,D.dm)
D.wV=w([D.edt,D.edp,D.edn,D.edo,D.eds,D.edu,D.edv,D.edr,D.edw,D.edq,D.edx],B.as("O<o9>"))
D.bov=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.doo=w([A.rw,D.bov,A.rw],x.O)
D.doF=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.doJ=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eT6=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eIO=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eNC=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ezX=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eMd=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eKl=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eOV=new B.y("Surprise me","")
D.dpi=w([D.eT6,D.eIO,D.eNC,D.ezX,D.eMd,D.eKl,D.eOV],x.L)
D.bgz=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsS=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dq6=w([A.c,D.bgz,D.bsS],x.O)
D.dsn=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aKr=new C.la(0,"heritageGold")
D.bmP=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hF4=w([D.bmP,A_.ahR,A.aC],x.O)
D.dRQ=new C.jC("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aKr,4294570461,4284234270,4292128567,D.kb)
D.aKs=new C.la(1,"heritageCrimson")
D.beJ=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bkY=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bsE=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hEI=w([D.beJ,D.bkY,D.bsE],x.O)
D.dRJ=new C.jC("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aKs,4294635750,4285213214,4292912216,D.kb)
D.dss=w([D.a7G,D.a7E,D.dRQ,D.dRJ,D.a7z,D.a7C],x.h)
D.dXN=new C.rV(1,"circuit")
D.dYf=new C.mq("neural","Neural Link","Robotic",D.dXN,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dXM=new C.rV(0,"grid")
D.dYc=new C.mq("signal","Signal Grid","Robotic",D.dXM,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dXS=new C.rV(2,"hexes")
D.dXY=new C.mq("core","Core Protocol","Robotic",D.dXS,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKP=new C.rV(11,"diagonal")
D.dY8=new C.mq("steel","Steel Tech","Robotic",D.aKP,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKQ=new C.rV(3,"rings")
D.dXX=new C.mq("vault","Vault Gold","Robotic",D.aKQ,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dXQ=new C.rV(13,"leaves")
D.dY_=new C.mq("forest","Forest Morning","Nature",D.dXQ,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKR=new C.rV(5,"waves")
D.dY6=new C.mq("ocean","Ocean Calm","Nature",D.aKR,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dXT=new C.rV(6,"sunset")
D.dYb=new C.mq("sunset","Sunset Glow","Nature",D.dXT,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dXU=new C.rV(7,"mountains")
D.dXZ=new C.mq("mountain","Mountain Air","Nature",D.dXU,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dXV=new C.rV(8,"stars")
D.dY5=new C.mq("night","Night Sky","Nature",D.dXV,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a8_=new C.rV(4,"orbs")
D.dY3=new C.mq("aurora","Aurora","Nature",D.a8_,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dYd=new C.mq("sand","Sand Dune","Nature",D.aKR,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dXW=new C.rV(9,"rays")
D.dY2=new C.mq("golden","Golden Hour","Warm",D.dXW,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dY0=new C.mq("royal","Royal Purple","Warm",D.aKP,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dY1=new C.mq("rose","Rose Petal","Warm",D.a8_,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dXP=new C.rV(12,"blocks")
D.dY4=new C.mq("electric","Electric Blue","Bold",D.dXP,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dYe=new C.mq("mint","Fresh Mint","Bold",D.a8_,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dXR=new C.rV(14,"minimal")
D.dYa=new C.mq("white","Clean White","Clean",D.dXR,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dXO=new C.rV(10,"frame")
D.dY7=new C.mq("midnight","Midnight Gold","Clean",D.dXO,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dY9=new C.mq("community","Community Green","Clean",D.aKQ,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6c=w([D.dYf,D.dYc,D.dXY,D.dY8,D.dXX,D.dY_,D.dY6,D.dYb,D.dXZ,D.dY5,D.dY3,D.dYd,D.dY2,D.dY0,D.dY1,D.dY4,D.dYe,D.dYa,D.dY7,D.dY9],B.as("O<mq>"))
D.dsQ=w([D.BR,A.u6,A.i3,A.c4],x.O)
D.dt7=w([D.aiS,D.jB],x.O)
D.dth=w(["pdf","docx","txt","md"],x.s)
D.f2p=new B.b5(-3,150,34)
D.f2q=new B.b5(-3,214,62)
D.f2r=new B.b5(-3,288,62)
D.dua=w([D.f2p,D.f2q,D.f2r],B.as("O<+(F,F,F)>"))
D.duH=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dvq=w(["Write","Design","Print & fold"],x.s)
D.kc=new C.vf(2,"triangle")
D.DX=new C.vf(3,"arrow")
D.fK=new C.vf(4,"line")
D.kd=new C.vf(5,"parallelogram")
D.dvt=w([D.bk,D.eZ,D.kc,D.DX,D.fK,D.kd,D.lv],x.m)
D.eBr=new B.y(240,96)
D.eEd=new B.y(560,46)
D.dvz=w([D.eBr,D.eEd],x.G)
D.hFf=new C.yd(0,"classic")
D.dTN=new C.o5("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aKr,4294570461,4282000405,4284234270)
D.dTZ=new C.o5("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aKs,4294635750,4281999378,4285213214)
D.dTO=new C.o5("elegant_navy","Umoja Mzuri",y.s,D.a7R,4294967035,4279378237,4290283019)
D.dU0=new C.o5("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKA,4294966515,4281016592,4289102906)
D.dU2=new C.o5("kente_sunset","Kente ya Jua",y.H,D.aKt,4294964964,4282000405,4279983648)
D.dTL=new C.o5("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKu,4294439140,4279903102,4279903102)
D.dTQ=new C.o5("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKv,4294965484,4285218591,4287322667)
D.dTV=new C.o5("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKw,4294244340,4279196764,4279196764)
D.dTX=new C.o5("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKx,4294505710,4279970378,4291058750)
D.hFg=new C.yd(1,"ringsNdoa")
D.dTP=new C.o5("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tk,4294966259,4279378237,4291404327)
D.hFi=new C.yd(2,"coupleCards")
D.dU_=new C.o5("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tk,4294966259,4279378237,4291404327)
D.hFj=new C.yd(3,"kuhoweshaForm")
D.dTW=new C.o5("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DS,4294966519,4279378237,4291404327)
D.hFk=new C.yd(4,"mahariPande")
D.dTM=new C.o5("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tk,4294966259,4279904068,4291404327)
D.hFl=new C.yd(5,"familiaMti")
D.dU1=new C.o5("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKy,4294966776,4280241466,4291404327)
D.hFm=new C.yd(6,"ndoaSafi")
D.dTT=new C.o5("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DS,4294966519,4279378237,4291404327)
D.hFn=new C.yd(7,"peteWide")
D.dTS=new C.o5("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tk,4294966259,4282001936,4291404327)
D.hFo=new C.yd(8,"muhuriCrest")
D.dTR=new C.o5("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tk,4294966259,4279378237,4291404327)
D.hFp=new C.yd(9,"fomuWazi")
D.dTU=new C.o5("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DS,4294966519,4279904068,4291404327)
D.hFh=new C.yd(10,"upendoOrnate")
D.dTY=new C.o5("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKz,4294965493,4286200650,4291404327)
D.SM=w([D.dTN,D.dTZ,D.dTO,D.dU0,D.dU2,D.dTL,D.dTQ,D.dTV,D.dTX,D.dTP,D.dU_,D.dTW,D.dTM,D.dU1,D.dTT,D.dTS,D.dTR,D.dTU,D.dTY],B.as("O<o5>"))
D.DV=new C.asP(0,"landscape169")
D.oO=new C.asP(1,"portrait916")
D.dwk=w([D.DV,D.oO],B.as("O<asP>"))
D.aDa=w([A.i3,A.bN,A.cF,A.ir,A.c],x.O)
D.v7=w([A.c4,A.i7],x.O)
D.eAr=new B.y(1000,"M")
D.eFH=new B.y(900,"CM")
D.eE7=new B.y(500,"D")
D.eCn=new B.y(400,"CD")
D.eAs=new B.y(100,"C")
D.eFI=new B.y(90,"XC")
D.eE8=new B.y(50,"L")
D.eCo=new B.y(40,"XL")
D.eAy=new B.y(10,"X")
D.eFU=new B.y(9,"IX")
D.eEp=new B.y(5,"V")
D.eDT=new B.y(4,"IV")
D.eB4=new B.y(1,"I")
D.dx3=w([D.eAr,D.eFH,D.eE7,D.eCn,D.eAs,D.eFI,D.eE8,D.eCo,D.eAy,D.eFU,D.eEp,D.eDT,D.eB4],x.ek)
D.f3F=new B.cu(["open",A.j3,"Open & write","Keep writing this book"])
D.f45=new B.cu(["print",A.uT,"Print as a book","Fold and staple it"])
D.dxe=w([D.f3F,D.f45],B.as("O<+(n,a_,n,n)>"))
D.dxX=w([D.a81,D.na,D.Jm,D.TT,D.dm,D.TS],x.i)
D.eTR=new B.y(-1,"Small")
D.eAc=new B.y(0,"Normal")
D.eB1=new B.y(1,"Big")
D.eBI=new B.y(2,"Huge")
D.dyw=w([D.eTR,D.eAc,D.eB1,D.eBI],x.ek)
D.dyX=w([49,65,89,38,83,89],x.t)
D.dz2=w([A.u6,A.i3,A.c4],x.O)
D.dzw=w([D.dm,D.na,D.ve,D.a81,D.Jm,D.TT],x.i)
D.aIt=new B.cZ([0,D.Nw,8,D.akp,12,D.akq],B.as("cZ<G,a4T>"))
D.ejy={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d_D=w([A.bN,H.ajt],x.O)
D.dm0=w([A.b0,A.bl],x.O)
D.dgc=w([A.bT,A.aH,A.bh],x.O)
D.dxf=w([A.cu,A.bv],x.O)
D.d8b=w([A.bb,A.fd],x.O)
D.dj7=w([A.b9,A.fn],x.O)
D.bkB=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dio=w([D.bkB,A.pe],x.O)
D.dcn=w([A.hn,A.ya],x.O)
D.d7Z=w([A.bx,A.ch],x.O)
D.dCc=new B.bu(D.ejy,[D.d_D,O.ati,D.dm0,D.dgc,D.dxf,D.d8b,D.dj7,D.dio,D.dcn,D.d7Z],B.as("bu<n,ai<u>>"))
D.eiG={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6R=new B.bu(D.eiG,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bu<n,n>"))
D.a6Y=new B.bu(A.hZ,[],B.as("bu<G,+icon3d,picture(n?,n?)>"))
D.dGI=new F.NP(30,null)
D.dLX=new F.mP("Chapter 1","","","")
D.dw7=w([D.dLX],x.B)
D.dM0=new F.rL("My Book","","",D.dw7,E.aJS)
D.dLZ=new F.v5("starry",null,null,null,null,"","","")
D.dM1=new F.rL("Dream Big","","",E.a5P,D.dLZ)
D.dM_=new F.v5("story",null,null,null,null,"","","")
D.dM2=new F.rL("Little Lion","","",E.a5P,D.dM_)
D.dLY=new F.v5("vintage",null,null,null,null,"","","")
D.dM3=new F.rL("Our Story","","",E.a5P,D.dLY)
D.dP4=new C.Fk("","NGMY","","")
D.dWq=new C.Ad("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.edm=new C.b3n(null,null,null,null)
D.ef4=new C.asU(null)
D.eff=new C.atn(0,"smaller")
D.efg=new C.atn(1,"bigger")
D.aL5=new C.atn(2,"fit")
D.en8=new B.o(3,6)
D.ens=new B.o(4,8)
D.erE=new B.D(E.alh,V.afp,null)
D.erI=new B.D(A.a0_,A.kK,null)
D.bT4=new B.ae(A.k7,16,A.bW,null,null,null)
D.erM=new B.D(A.iK,D.bT4,null)
D.be7=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.erY=new B.D(A.H_,D.be7,null)
D.c2D=new B.ae(A.cz,16,A.aD,null,null,null)
D.es1=new B.D(A.eA,D.c2D,null)
D.fMH=new B.B("Play",null,A.nZ,null,null,null,null,null,null,null,null,null)
D.dmi=w([W.arL,A.tz,D.fMH],x.p)
D.f8K=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dmi,null)
D.es4=new B.D(A.nE,D.f8K,null)
D.beg=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.ff9=new B.a6(20,20,D.beg,null)
D.esb=new B.D(A.iK,D.ff9,null)
D.fWc=new B.B("Seconds per slide",null,A.fY,null,null,null,null,null,null,null,null,null)
D.esl=new B.D(A.bi,D.fWc,null)
D.etP=new C.a9L(2,"print")
D.etS=new B.j0(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.evu=new B.he("/Annot")
D.evw=new B.he("/URI")
D.fGH=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ey0=new B.jE("share",48,D.fGH,null,B.as("jE<n>"))
D.c2x=new B.ae(A.ed,14,A.eL,null,null,null)
D.ey9=new B.cL(null,-2,-2,null,null,null,D.c2x,null)
D.d1U=w([H.aim,A.L],x.O)
D.c94=new B.a9(A.a6,A.aa,A.x,D.d1U,null,null)
D.b6K=new B.p(null,null,null,null,null,D.c94,A.n)
D.bxT=new B.l5(D.b6K,A.bj,null,null)
D.eyl=new B.cL(0,0,null,0,8,null,D.bxT,null)
D.drj=w([A.i5,A.mR,A.ca],x.O)
D.ez_=new B.c0(A.A,0.5,A.x,null,0,D.drj,null,null)
D.eBA=new B.y(0.22,A.bl)
D.eGe=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eIs=new B.y(0.5,A.hD)
D.eSc=new B.y(0.78,A.aY)
D.f3u=new B.cu([A.br,0.22,0.7,2.6])
D.f3B=new B.cu([A.bb,0.36,1.2,1.3])
D.f3H=new B.cu([A.dK,0.28,0.2,0.4])
D.f3N=new B.cu([A.cy,0.05,0.3,0.35])
D.f3T=new B.cu([A.bx,0.28,0.9,0])
D.f40=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f4S=new B.cu([A.bT,0.42,1,4.1])
D.f8s=new B.aaJ(9)
D.bUa=new B.ae(A.HX,28,A.bh,null,null,null)
D.fWL=new B.B("NGMY News",null,A.di,null,null,null,null,null,null,null,null,null)
D.bIe=new B.bz(1,A.bd,D.fWL,null)
D.duK=w([D.bUa,A.au,D.bIe],x.p)
D.f8E=new B.c7(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.duK,null)
D.bUl=new B.ae(A.nJ,16,A.c,null,null,null)
D.fYl=new B.B("Book",null,A.oX,null,null,null,null,null,null,null,null,null)
D.dz1=w([D.bUl,A.e3,D.fYl],x.p)
D.f8N=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dz1,null)
D.c07=new B.ae(A.j4,10,A.c,null,null,null)
D.fKH=new B.B("Pro",null,A.nW,null,null,null,null,null,null,null,null,null)
D.dmn=w([D.c07,A.r6,D.fKH],x.p)
D.f8R=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dmn,null)
D.fWa=new B.B("Make a newspaper",null,A.VO,null,null,null,null,null,null,null,null,null)
D.caj=w([E.a3E,A.ae,D.fWa],x.p)
D.f8S=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.caj,null)
D.bZA=new B.ae(A.kv,18,A.bN,null,null,null)
D.fMV=new B.B("Ending celebration",null,A.hl,null,null,null,null,null,null,null,null,null)
D.dtJ=w([D.bZA,A.bm,D.fMV],x.p)
D.f8V=new B.c7(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.dtJ,null)
D.c_T=new B.ae(A.j3,18,A.kr,null,null,null)
D.fqf=new B.H(!0,A.kr,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYE=new B.B("Write",null,D.fqf,null,null,null,null,null,null,null,null,null)
D.dan=w([D.c_T,A.ae,D.fYE],x.p)
D.f91=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.dan,null)
D.fKF=new B.B("Download picture",null,A.nX,null,null,null,null,null,null,null,null,null)
D.bKZ=new B.qI(A.e2,A.A,A.f,D.fKF,null)
D.bL9=new B.dq(1,A.cr,D.bKZ,null)
D.dmN=w([K.arC,A.ae,D.bL9],x.p)
D.f92=new B.c7(A.aL,A.bc,A.j,A.l,null,A.p,null,0,D.dmN,null)
D.bWb=new B.ae(A.HX,22,A.bh,null,null,null)
D.fUI=new B.B("NGMY NEWS",null,M.aaP,null,null,null,null,null,null,null,null,null)
D.d1i=w([D.bWb,A.ae,D.fUI],x.p)
D.f9c=new B.c7(A.aL,A.e,A.Q,A.l,null,A.p,null,0,D.d1i,null)
D.f9o=new B.pB(!1,!1,null,V.XT,null,A.c3,null,null,null)
D.a9U=new B.iM([D.ct,D.dm,D.ve,D.Jl,D.vf,D.aKV],B.as("iM<hF>"))
D.elm={title:0,quote:1,closing:2,bio:3}
D.faT=new B.df(D.elm,4,x.M)
D.ej1={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.faW=new B.df(D.ej1,5,x.M)
D.ekC={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9W=new B.df(D.ekC,8,x.M)
D.ejM={Design:0,Transitions:1,Insert:2}
D.fb4=new B.df(D.ejM,3,x.M)
D.hFy=new B.iM([D.a82],B.as("iM<ww>"))
D.ejV={float3d:0,drift:1,pulse:2}
D.fb8=new B.df(D.ejV,3,x.M)
D.aSK=new B.iM([D.Ji,D.Jj,D.Jk],B.as("iM<mT>"))
D.ej_={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSN=new B.df(D.ej_,14,x.M)
D.hFz=new B.df(A.hZ,0,B.as("df<ww>"))
D.ejS={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UT=new B.df(D.ejS,4,x.M)
D.eiS={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSQ=new B.df(D.eiS,30,x.M)
D.ek0={circle:0,triangle:1,hexagon:2,diamond:3}
D.fbA=new B.df(D.ek0,4,x.M)
D.fe2=new B.av(390,844)
D.feT=new B.a6(20,20,A.M9,null)
D.aTF=new B.a6(null,2.5,null,null)
D.ff2=new B.a6(18,18,A.M9,null)
D.c_X=new B.ae(A.js,19,A.c,null,null,null)
D.ffe=new B.a6(38,38,D.c_X,null)
D.bZ8=new B.ae(A.zt,22,A.c,null,null,null)
D.ffh=new B.a6(40,40,D.bZ8,null)
D.ffR=new B.hG(2,10,10,1.15,null)
D.aTM=new B.hG(2,16,14,0.62,null)
D.bG4=new B.R(32,30,32,40)
D.bfP=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bU7=new B.ae(A.qH,56,D.bfP,null,null,null)
D.ajs=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fsn=new B.H(!0,D.ajs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRx=new B.B("Your books will live here.",null,D.fsn,null,A.K,null,null,null,null,null,null,null)
D.ddn=w([D.bU7,A.X,D.fRx],x.p)
D.bwO=new B.fj(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.ddn,null)
D.esj=new B.D(D.bG4,D.bwO,null)
D.fgc=new B.mv(D.esj,null)
D.fRu=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fgu=new B.b1(D.fRu,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPy=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new B.b1(D.fPy,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUM=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new B.b1(D.fUM,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVl=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new B.b1(D.fVl,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fOa=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fh5=new B.b1(D.fOa,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h1F=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fho=new B.b1(D.h1F,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZG=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new B.b1(D.fZG,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVu=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fii=new B.b1(D.fVu,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fIO=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new B.b1(D.fIO,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qt,!1,null,null,null,A.t,null)
D.fKP=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fiR=new B.b1(D.fKP,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fR9=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fiT=new B.b1(D.fR9,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fQQ=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new B.b1(D.fQQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXC=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fiV=new B.b1(D.fXC,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fER=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fj3=new B.b1(D.fER,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fLZ=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fjq=new B.b1(D.fLZ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h0k=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new B.b1(D.h0k,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_R=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fjw=new B.b1(D.h_R,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDM=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjy=new B.b1(D.fDM,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fWG=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fjH=new B.b1(D.fWG,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_q=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new B.b1(D.h_q,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_h=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new B.b1(D.h_h,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDD=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new B.b1(D.fDD,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHK=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkv=new B.b1(D.fHK,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZt=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkH=new B.b1(D.fZt,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHw=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fkW=new B.b1(D.fHw,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bo9=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_T=w([A.ir,A.pe,D.bo9,D.afV,A.ir],x.O)
D.flj=new B.fY(A.A,0,6.283185307179586,A.x,D.d_T,null,null)
D.d9t=w([A.bN,A.c4,A.i3,D.BR,A.bN],x.O)
D.aUk=new B.fY(A.A,0,6.283185307179586,A.x,D.d9t,null,null)
D.doD=w([A.bT,A.br,A.bb,A.b5,A.bh,A.bT],x.O)
D.flo=new B.fY(A.A,0,6.283185307179586,A.x,D.doD,null,null)
D.d2a=w([A.qn,A.pf,A.y7,A.ir,A.qn],x.O)
D.flp=new B.fY(A.A,0,6.283185307179586,A.x,D.d2a,null,null)
D.dox=w([A.aP,A.bK,A.aO,A.an,A.aP],x.O)
D.flq=new B.fY(A.A,0,6.283185307179586,A.x,D.dox,null,null)
D.dwR=w([A.bx,A.bb,A.br,A.bT,A.bx],x.O)
D.fls=new B.fY(A.A,0,6.283185307179586,A.x,D.dwR,null,null)
D.bjv=new B.u(1,0,1,0,A.q)
D.bou=new B.u(1,0,1,1,A.q)
D.blk=new B.u(1,0,0,1,A.q)
D.bhd=new B.u(1,1,0,1,A.q)
D.dsI=w([A.Mr,A.Z9,D.bjv,D.bou,D.blk,D.bhd,A.Mr],x.O)
D.flt=new B.fY(A.A,0,6.283185307179586,A.x,D.dsI,null,null)
D.flI=new C.axB(2,"immersiveSticky")
D.flJ=new C.axB(3,"edgeToEdge")
D.flK=new C.axB(4,"manual")
D.foi=new B.H(!0,A.oa,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUT=new B.H(!0,A.eU,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foT=new B.H(!0,E.ny,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frM=new B.H(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs7=new B.H(!0,A.eL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftL=new B.H(!0,A.jY,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftZ=new B.t5(!0,A.JI,null,null,null,null,A.dD,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fur=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv9=new B.H(!0,A.jD,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvy=new B.H(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etV=new B.j0(1,1,0.7568627450980392,0.027450980392156862)
D.fvC=new B.t5(!0,D.etV,null,null,null,null,A.dD,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aib=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVH=new B.H(!0,D.aib,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvK=new B.H(!0,D.ajs,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvL=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVJ=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new B.t5(!0,A.pJ,null,null,null,null,A.dD,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwF=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxc=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new B.H(!0,D.aib,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KN=new B.H(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxL=new B.H(!0,A.c4,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new B.H(!0,A.bK,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.H(!0,A.bN,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyf=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5m,null,null,null)
D.fyi=new B.H(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyk=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyL=new B.H(!0,A.dl,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzm=new B.H(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzw=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new B.H(!0,A.ab,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWl=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWn=new B.H(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bug=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fBB=new B.H(!0,D.bug,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWt=new B.H(!0,E.ny,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC5=new B.H(!0,A.bK,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC8=new B.H(!0,N.lH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuG=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDo=new B.B("NEW",null,D.fuG,null,null,null,null,null,null,null,null,null)
D.fDG=new B.B("Hati ya Kuhowesha",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fE8=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEx=new B.B("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fFi=new B.B("Big quote mark",null,A.jx,null,null,null,null,null,null,null,null,null)
D.fFk=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fFw=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fG0=new B.B("How many slides?",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fGz=new B.B("Transfer",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fqi=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGV=new B.B("Luxury FX",null,D.fqi,null,null,null,null,null,null,null,null,null)
D.fHf=new B.B("Font",null,A.tE,null,null,null,null,null,null,null,null,null)
D.fHq=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fHx=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fB7=new B.H(!0,A.bK,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new B.B("Example  GA847",null,D.fB7,null,null,null,null,null,null,null,null,null)
D.fI6=new B.B("Design shapes",null,A.jx,null,null,null,null,null,null,null,null,null)
D.fIj=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fIo=new B.B("Non-stop (loop)",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fIC=new B.B("Hati ya Kuhoweya",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fIV=new B.B("Photo studio",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fJo=new B.B("Add your picture",null,A.jN,null,null,null,null,null,null,null,null,null)
D.fu_=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJp=new B.B("Enter document code",null,D.fu_,null,A.K,null,null,null,null,null,null,null)
D.fJq=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fJv=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.frq=new B.H(!0,E.ny,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJQ=new B.B("Delete this book?",null,D.frq,null,A.K,null,null,null,null,null,null,null)
D.fwd=new B.H(!0,E.ny,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKR=new B.B("Your library",null,D.fwd,null,null,null,null,null,null,null,null,null)
D.fKX=new B.B("Delete",null,A.aVA,null,null,null,null,null,null,null,null,null)
D.fL_=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Aw.EH,null,null,null,null,null,null,null,null,null)
D.fLa=new B.B("Element flies in",null,A.aVN,null,null,null,null,null,null,null,null,null)
D.VZ=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fLz=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fLW=new B.B("Cancel",null,E.aVX,null,null,null,null,null,null,null,null,null)
D.fLY=new B.B("The lines and circles that come with the design",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fzV=new B.H(!0,A.ht,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMq=new B.B("DOCUMENT CODE",null,D.fzV,null,null,null,null,null,null,null,null,null)
D.fNg=new B.B("Quotes",null,G.abs,null,null,null,null,null,null,null,null,null)
D.ftm=new B.H(!0,N.lH,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNq=new B.B("Add a picture",null,D.ftm,null,null,null,null,null,null,null,null,null)
D.fNy=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.KH,null,A.K,null,null,null,null,null,null,null)
D.fNC=new B.B("Look & feel",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fNH=new B.B("Rings",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fNN=new B.B("W",null,A.tE,null,null,null,null,null,null,null,null,null)
D.fNX=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fOg=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VL,null,A.K,null,null,null,null,null,null,null)
D.fOi=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fP2=new B.B("Add page",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fPk=new B.B("Malipo ya Awamu ya Mahari",null,A.fE,null,null,null,null,null,null,null,null,null)
D.ftP=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPz=new B.B("Create with AI",null,D.ftP,null,A.K,null,null,null,null,null,null,null)
D.fQ4=new B.B("Apply look",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fuw=new B.H(!0,A.ev,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQS=new B.B("Type your presentation below",null,D.fuw,null,A.K,null,null,null,null,null,null,null)
D.fQV=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWy,null,A.K,null,null,null,null,null,null,null)
D.fQX=new B.B("Keep it",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fpb=new B.H(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR3=new B.B("Done",null,D.fpb,null,null,null,null,null,null,null,null,null)
D.fRo=new B.B("Delete",null,A.nY,null,null,null,null,null,null,null,null,null)
D.fRz=new B.B("Hati ya Kiapo cha Uongozi",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fsF=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSt=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fsF,null,A.K,null,null,null,null,null,null,null)
D.fSS=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fSZ=new B.B("Layout",null,A.VQ,null,null,null,null,null,null,null,null,null)
D.fTG=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTP=new B.B("X",null,A.tE,null,null,null,null,null,null,null,null,null)
D.fUq=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.xh,null,null,null,null,null,null,null,null,null)
D.fUZ=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fVd=new B.B("Hati ya Kuhowa",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fVf=new B.B("Choose a class template",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fVh=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fVo=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fVB=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fVI=new B.B("Done",null,A.aWk,null,null,null,null,null,null,null,null,null)
D.fVT=new B.B("Ending celebration",null,A.di,null,null,null,null,null,null,null,null,null)
D.fVU=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fW8=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A.pQ,null,null,null,null,null,null,null,null,null)
D.fX8=new B.B("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fX9=new B.B("What would you like to do?",null,D.aVH,null,null,null,null,null,null,null,null,null)
D.fXe=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fXL=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fXP=new B.B("Hati (Documents)",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fY1=new B.B("Done",null,A.ly,null,null,null,null,null,null,null,null,null)
D.fAX=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY5=new B.B("Delete presentation?",null,D.fAX,null,A.K,null,null,null,null,null,null,null)
D.fYp=new B.B("After the last slide it starts again from the first",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fYB=new B.B("\ud83c\udf33",null,A.EG,null,A.K,null,null,null,null,null,null,null)
D.fYT=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fZ_=new B.B("Transfer document",null,A.ng,null,null,null,null,null,null,null,null,null)
D.fZa=new B.B("Add to the slides",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fZx=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fZM=new B.B("Make a book",null,I.aVb,null,null,null,null,null,null,null,null,null)
D.fZQ=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.ftf=new B.H(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZS=new B.B("Keep this page open until it finishes.",null,D.ftf,null,null,null,null,null,null,null,null,null)
D.fZU=new B.B("Making your video",null,A.di,null,null,null,null,null,null,null,null,null)
D.fZZ=new B.B("LANGUAGE",null,R.tF,null,null,null,null,null,null,null,null,null)
D.h_5=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.h_d=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_f=new B.B("Upload a different logo",null,A.cg,null,null,null,null,null,null,null,null,null)
D.h_w=new B.B("Delete from the database?",null,A.jN,null,null,null,null,null,null,null,null,null)
D.h_x=new B.B("H",null,A.tE,null,null,null,null,null,null,null,null,null)
D.h_X=new B.B("NGMY Quotes",null,A.di,null,null,null,null,null,null,null,null,null)
D.h0q=new B.B("Cover",null,D.aWt,null,null,null,null,null,null,null,null,null)
D.h0u=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h0v=new B.B("Each page becomes its own slide you can present",null,A.hk,null,null,null,null,null,null,null,null,null)
D.h0S=new B.B("Y",null,A.tE,null,null,null,null,null,null,null,null,null)
D.h13=new B.B("Crop the picture",null,A.ly,null,null,null,null,null,null,null,null,null)
D.h1a=new B.B("Edit text",null,A.KI,null,null,null,null,null,null,null,null,null)
D.h3v=B.dR("a9x")
D.EV=new C.ayX(0,"none")
D.b_u=new C.ayX(1,"zipCrypto")
D.b_v=new C.ayX(2,"aes")
D.hss=new F.Qn("","",null)
D.htA=new C.beF(null)
D.huG=new C.a_U(null)
D.hxF=new C.aeu(null)
D.hxH=new C.aGb(null)
D.hAs=new C.a18(null)
D.hBd=new C.a1F(null)
D.hBQ=new C.bwF(null)})();(function staticFields(){$.hu3=null
$.hu4=null
$.hu5=null
$.hu6=null
$.hbg=B.wX("_lastQuoRemDigits")
$.hbh=B.wX("_lastQuoRemUsed")
$.azj=B.wX("_lastRemUsed")
$.hbi=B.wX("_lastRem_nsh")
$.qv=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a8l=B.T(x.N,x.I)
$.h8H=!1
$.hz3=B.T(B.as("la"),x.N)
$.hzf=B.T(B.as("la"),x.E)
$.hxb=!1
$.bCj="q"
$.Rr=0
$.Dn=B.T(x.N,B.as("ai<Ae>"))
$.hxy=!1
$.hd0=!1
$.hEc=null
$.i8S=B.T(x.N,B.as("aB<n?>"))
$.Lh=""
$.jc=0
$.hqU=function(){var w=x.N
return B.T(w,w)}()
$.hqT=B.T(x.N,x.R)
$.hdl=!1
$.ahb=B.T(x.N,x.E)
$.hec=0
$.bmV=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"izr","DK",()=>C.bc7(0))
w($,"izp","a3W",()=>C.bc7(1))
w($,"izq","hI6",()=>C.bc7(2))
w($,"izo","him",()=>$.a3W().vF(0))
w($,"izm","hI4",()=>C.bc7(1e4))
w($,"izn","hI5",()=>B.F0(8))
w($,"iv7","hG_",()=>B.F0(0))
w($,"ivf","hG3",()=>B.F0(0))
w($,"ive","hG2",()=>B.c2A(0))
w($,"iDo","hKf",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6R.gdO(D.a6R),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iDQ","bGQ",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nb(new C.fTS(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nb(new C.fTT(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nb(new C.fTU(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nb(new C.fU4(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nb(new C.fU9(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nb(new C.fUa(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nb(new C.fUb(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nb(new C.fUc(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nb(new C.fUd(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nb(new C.fUe(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nb(new C.fUf(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nb(new C.fTV(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nb(new C.fTW(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nb(new C.fTX(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nb(new C.fTY(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nb(new C.fTZ(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nb(new C.fU_(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nb(new C.fU0(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nb(new C.fU1(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nb(new C.fU2(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nb(new C.fU3(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nb(new C.fU5(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nb(new C.fU6(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nb(new C.fU7(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nb(new C.fU8(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Ft>"))})
w($,"iDr","hKh",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["zacbEhka0PVjx/EVrkC5Qdc8Xow="]=a.current})($__dart_deferred_initializers__);