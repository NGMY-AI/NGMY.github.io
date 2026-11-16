((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A8,Ak,Al,V,A9,Am,An,C={
uk(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hbB(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KH(d){var w
if(d===0)return $.DN()
if(d===1)return $.a43()
if(d===2)return $.hIt()
if(Math.abs(d)<4294967296)return C.bcb(A.o.M(d))
w=C.i2N(d)
return w},
bcb(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.uk(4,w)
return new C.oj(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.uk(1,w)
return new C.oj(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.uk(2,w)
return new C.oj(v===0?!1:s,w,v)}v=A.o.ar(A.o.galB(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ar(d,65536)}v=C.uk(v,w)
return new C.oj(v===0?!1:s,w,v)},
i2N(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dM("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DN()
w=$.hIs()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lo(A.aI.gaU(w))
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
if(s<0)p=q.mF(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hbC(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
huu(d,e,f,g){var w,v,u,t,s,r=A.o.ar(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hup(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16)
if(A.o.F(f,16)===0)return C.hbC(d,e,s,g)
w=e+s+1
C.huu(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i2Q(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cOD(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i2O(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bcc(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
huv(d,e,f,g,h,i){var w,v,u,t,s,r
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
i2P(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oj:function oj(d,e,f){this.a=d
this.b=e
this.c=f},
cOE:function cOE(){},
cOF:function cOF(){},
cOG:function cOG(d,e){this.a=d
this.b=e},
cOH:function cOH(d){this.a=d},
aTu:function aTu(d,e){this.a=d
this.b=e},
hk3(d,e,f){var w=new C.T0(d,A.o.ar(Date.now(),1000),e)
w.Q=f
return w},
T0:function T0(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a50:function a50(d,e){this.a=d
this.b=e},
bKy:function bKy(d){this.a=d
this.c=this.b=0},
hLO(){return new C.bIQ()},
bIQ:function bIQ(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cGD:function cGD(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i2t(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cd(d.gd2V(d)))
v=f*2+2
u=C.hs9(C.hsb(),64)
t=new C.cpk(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cpl(e,1000,v)
s=new Uint8Array(v)
return A.aI.dt(s,0,t.cQJ(w,0,s,0))},
cGB:function cGB(d,e){this.c=d
this.d=e},
az_:function az_(d,e){this.a=d
this.b=e},
cGE:function cGE(d,e,f,g){var _=this
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
baS:function baS(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cGC:function cGC(){this.a=$},
htZ(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hLx(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHq:function bHq(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hhG(d,e){e&=31
return(d&$.qx[e])<<e>>>0},
nQ(d,e){e&=31
return(d>>>e|C.hhG(d,32-e))>>>0},
hsa(d){var w,v=new C.auy()
if(B.iU(d))v.aMM(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hsb(){var w=C.hsa(0),v=new Uint8Array(4),u=x.S
u=new C.cpm(w,v,A.Fr,5,B.c0(5,0,!1,u),B.c0(80,0,!1,u))
u.ir(0)
return u},
hs9(d,e){var w=new C.cpi(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cph:function cph(){},
cpl:function cpl(d,e,f){this.a=d
this.b=e
this.c=f},
cpf:function cpf(){},
aux:function aux(d){this.a=d},
cpk:function cpk(d){this.a=$
this.b=d
this.c=$},
cpg:function cpg(){},
cpe:function cpe(){},
auy:function auy(){this.b=this.a=$},
cpj:function cpj(){},
cpm:function cpm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpi:function cpi(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpd:function cpd(){},
cpc:function cpc(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSO:function bSO(){},
bSP:function bSP(d){this.a=d},
czK:function czK(){},
bTQ:function bTQ(d,e){this.a=d
this.b=!1
this.c=e},
bTR:function bTR(){},
ifi(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axB(d){var w=0,v=B.j(x.H),u
var $async$axB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fmm?2:4
break
case 2:w=5
return B.b(A.kE.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axB)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kE.h7("SystemChrome.setEnabledSystemUIOverlays",C.ifi(null),u),$async$axB)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axB,v)},
axE:function axE(d,e){this.a=d
this.b=e},
a9J:function a9J(d){this.a=d},
ii3(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fGY(15,d,f,e,g,h),o=i*i,n=A.i.V(i/1.4142135623730951)
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
fGY:function fGY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ap4(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ap4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aic("ngmy_menu_lib_v1_zzslides_index",A.bO),$async$ap4)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cF(t,new C.c3M(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3N())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap4,v)},
ap6(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ap6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ap4(),$async$ap6)
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
return B.b(B.n0("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$ap6)
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
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$ap6)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap6,v)},
c3O(d){return C.hRC(d)},
hRC(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3O=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aic("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ih),$async$c3O)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xh(B.a2(q,x.N,x.z))
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
return B.i($async$c3O,v)},
ap5(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ap5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ap4(),$async$ap5)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nT(r,new C.c3P(d))
w=4
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$ap5)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aRx("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$ap5)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap5,v)},
c3M:function c3M(){},
c3N:function c3N(){},
c3P:function c3P(d){this.a=d},
isT(d,e,f){return B.bU(A.L,null,new C.fXV(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fXV:function fXV(d,e,f){this.a=d
this.b=e
this.c=f},
a2g:function a2g(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aL3:function aL3(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fie:function fie(d,e){this.a=d
this.b=e},
fii:function fii(d){this.a=d},
fij:function fij(d){this.a=d},
fik:function fik(d,e,f){this.a=d
this.b=e
this.c=f},
fif:function fif(d){this.a=d},
fig:function fig(d){this.a=d},
fih:function fih(d,e){this.a=d
this.b=e},
fi9:function fi9(d){this.a=d},
fi7:function fi7(d){this.a=d},
fi8:function fi8(d){this.a=d},
fia:function fia(d){this.a=d},
fib:function fib(d){this.a=d},
fio:function fio(d,e){this.a=d
this.b=e},
fin:function fin(d,e){this.a=d
this.b=e},
fid:function fid(d,e,f){this.a=d
this.b=e
this.c=f},
fic:function fic(d,e,f){this.a=d
this.b=e
this.c=f},
fil:function fil(d,e){this.a=d
this.b=e},
fim:function fim(d,e){this.a=d
this.b=e},
fir:function fir(d){this.a=d},
fis:function fis(d,e){this.a=d
this.b=e},
fiq:function fiq(d,e){this.a=d
this.b=e},
fip:function fip(){},
hwZ(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cF(v,new C.fpS(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fpT(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3f(d){return C.ijp(d)},
ijp(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3f=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fK9(n)
t=4
j=m
i=C
w=7
return B.b(B.a3Q("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3f)
case 7:j.$1(i.hwZ(f))
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
return B.b(B.aA(),$async$a3f)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hwZ(B.aV(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fq0(d),$async$a3f)
case 13:p=j.C(new i.Y(h,new g.fK7(f),o),o.k("M.E"))
A.d.aZ(p,new C.fK8())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3f,v)},
aiN(d,e){return C.isx(d,e)},
isx(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiN=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b8(e,new C.fXn(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aiF("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiN)
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
return B.b(B.aA(),$async$aiN)
case 12:p=g
w=13
return B.b(p.aC("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiN)
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
return B.i($async$aiN,v)},
fq0(d){return C.i7r(d)},
i7r(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fq0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fq0)
case 7:r=f
q=r.tT("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jB(q,B.U(q).c)
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
return B.i($async$fq0,v)},
ahH(d,e){return C.ihW(d,e)},
ihW(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahH=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahH)
case 6:s=g
r=B.aR(x.N)
q=s.tT("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fW(r,q)
J.c7(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ci.E"))
w=7
return B.b(s.aC("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahH)
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
return B.b(C.a3f(d),$async$ahH)
case 8:n=g
J.nT(n,new C.fGC(e))
w=9
return B.b(C.aiN(d,n),$async$ahH)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahH,v)},
isY(d,e){return B.a6(d,!1).ce(B.ec(new C.fYg(e),!0,null,x.H))},
i2S(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cE(w.d,new C.cQ0())},
oN:function oN(d,e,f){this.a=d
this.b=e
this.c=f},
fpS:function fpS(){},
fpT:function fpT(){},
fK9:function fK9(d){this.a=d},
fK7:function fK7(d){this.a=d},
fK8:function fK8(){},
fXn:function fXn(){},
fGC:function fGC(d){this.a=d},
fYg:function fYg(d){this.a=d},
ZZ:function ZZ(d,e){this.c=d
this.a=e},
azz:function azz(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQ0:function cQ0(){},
cQ2:function cQ2(d,e){this.a=d
this.b=e},
cQ5:function cQ5(d){this.a=d},
cQ6:function cQ6(d){this.a=d},
cQ4:function cQ4(){},
cQ7:function cQ7(d,e){this.a=d
this.b=e},
cQ3:function cQ3(d){this.a=d},
cQ8:function cQ8(){},
cQ1:function cQ1(d,e){this.a=d
this.b=e},
cQ9:function cQ9(){},
cPX:function cPX(d){this.a=d},
cPV:function cPV(d){this.a=d},
cPW:function cPW(d){this.a=d},
cPY:function cPY(d,e){this.a=d
this.b=e},
cPU:function cPU(d){this.a=d},
cPT:function cPT(d){this.a=d},
cPR:function cPR(d,e){this.a=d
this.b=e},
cPS:function cPS(d){this.a=d},
cQ_:function cQ_(){},
cPZ:function cPZ(d){this.a=d},
cPQ:function cPQ(d,e){this.a=d
this.b=e},
cPP:function cPP(d,e){this.a=d
this.b=e},
cPO:function cPO(d,e){this.a=d
this.b=e},
cQa:function cQa(d){this.a=d},
ZX:function ZX(d,e,f){this.c=d
this.d=e
this.a=f},
aGS:function aGS(d,e,f){this.a=d
this.b=e
this.c=f},
azv:function azv(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPh:function cPh(d){this.a=d},
cPg:function cPg(d){this.a=d},
cPj:function cPj(d,e,f){this.a=d
this.b=e
this.c=f},
cPr:function cPr(){},
cPs:function cPs(d){this.a=d},
cPk:function cPk(d,e,f){this.a=d
this.b=e
this.c=f},
cPi:function cPi(d,e){this.a=d
this.b=e},
cPm:function cPm(d,e){this.a=d
this.b=e},
cPn:function cPn(d,e){this.a=d
this.b=e},
cPo:function cPo(d,e){this.a=d
this.b=e},
cPl:function cPl(d){this.a=d},
cPq:function cPq(d){this.a=d},
cPp:function cPp(d,e){this.a=d
this.b=e},
cPx:function cPx(d){this.a=d},
cPt:function cPt(d,e){this.a=d
this.b=e},
cPu:function cPu(d,e){this.a=d
this.b=e},
cPv:function cPv(d,e){this.a=d
this.b=e},
cPw:function cPw(d,e){this.a=d
this.b=e},
azx:function azx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ilO(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fOI(),x.H).eB(new C.fOJ())}}else if(s)C.hyy()}catch(t){}},
hyy(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eB(new C.fuc())}catch(u){}},
ilR(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fOI:function fOI(){},
fOJ:function fOJ(){},
fuc:function fuc(){},
hDr(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.en(v,w,"").split(":"))},
hDo(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.lt)return null
return A.a.b2(w,14)},
hgk(d){var w
if(d.b!==D.lt)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
img(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hDs(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
imb(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cF(u,new C.fPH(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gs(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SI(A.a.aB(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SI(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
im9(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fPG())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aSx(w,u,s,0)}return w},
imd(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6Z:$.hKC(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hDp(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fqX(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hDr(q)===e)return q}return null},
ime(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b2(v,u)
return A.d.gH(D.Ia).a},
imf(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afv(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afv(0,0,0)
v=C.fqX(b6,b0)
u=C.fqX(b5,b0)
t=0
if(v!=null&&u!=null){s=C.imd(b2,C.imb(C.hDp(b2),v.r))
if(s.a!==0){u.r=C.im9(C.hDp(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hDr(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fqX(b6,n)
i=C.fqX(b5,n)
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
a0=C.hgk(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hDo(a8)===a0||C.hgk(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RR(a1,new C.fPN(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eQ(""+1000*a6+"_"+a9,D.lt,a2,a3,a4,a5,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,d.at,D.bk,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cu,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afv(k,t,e)},
ima(d){var w=C.ime(d)
if(d.w==="hati_kuhowa")return C.hCM("",w)
return C.hCL("",w)},
fPH:function fPH(){},
fPG:function fPG(){},
fPN:function fPN(d){this.a=d},
hyf(){var w=new B.V(Date.now(),0,!1),v=new C.fte()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hgt(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fQF(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lt&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hDG(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fQF(d)
w=B.bh(u)
if(w==null)return!C.fQF(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
imW(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hVF(d){return A.a.i(d).toLowerCase()},
b1z(d){return C.hVG(d)},
hVG(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$b1z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b1z)
case 7:r=f
p=r.tT("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.ir7(),B.U(o).k("N<1,n>")).bY(0,new C.cfB())
o=B.d2(o,o.$ti.k("M.E"))
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
return B.i($async$b1z,v)},
a8u(d,e){return C.hVH(d,e)},
hVH(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8u=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b1z(d),$async$a8u)
case 3:r=g
if(!J.h9(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8u)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qF(r)),$async$a8u)
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
return B.i($async$a8u,v)},
a8v(){var w=0,v=B.j(x.y),u,t
var $async$a8v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a8v)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8v,v)},
hVI(d){var w=$.Cn.h(0,d)
w=w==null?null:J.t(w,"at")
return B.bh(w==null?"":w)},
hVJ(d,e){var w,v,u,t=$.Cn.h(0,d)
if(t==null)return!1
w=J.a7(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hVI(d)
return u!=null&&!e.f.ca(u)},
hq5(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i1(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gR(w)
r=s.b
if(!v.b(r))continue
q=B.a2(r,u,t)
r=q.h(0,"at")
p=B.bh(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Cn.h(0,o)
s=s==null?null:J.t(s,"at")
n=B.bh(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbq())s=r===n.gbq()&&p.b>n.gcA()}if(s){s=$.Cn
r=p.aa().ag()
m=q.h(0,"id")
s.n(0,o,B.I(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
h8Z(){var w=$.Cm
return w.br(w,new C.cfC())},
WE(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WE=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uB("civic_hati_kiapo_uongozi",null,A.em),$async$WE)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a7(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a2(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Cn
i=new B.cb(j,B.a4(j).k("cb<1,2>")).aV(0,new C.cfE(k))
if(n.b(o.h(a2,"deletedByState")))C.hq5(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i1(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gR(o)
h=j.b
if(!n.b(h))continue
g=C.Xh(B.a2(h,m,l))
h=$.Cm
j=j.a
f=J.kP(j)
e=h.h(0,f.u(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbq())h=a0===d.gbq()&&h.b<d.gcA()
else h=!0
h=!h}else h=!0
if(h)$.Cm.n(0,f.u(j),g)}C.h8Z()
$.hq4=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WF(),$async$WE)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Cm,o=new B.cb(o,B.a4(o).k("cb<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n0("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Cn,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],m,l),null),$async$WE)
case 11:t=2
w=10
break
case 8:t=7
a3=s.pop()
p=B.ab(a3)
$.am.$1("[kiapo] push delete: "+B.w(p))
w=10
break
case 7:w=2
break
case 10:case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$WE,v)},
Ox(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ox=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cfD&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$Ox)
case 7:r=a4
q=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aQ(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i1(p),g=g.gae(g),f=x.z;g.C();){n=g.gR(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xh(B.a2(i.a(n.b),h,f)))}$.Cm=o}}m=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.X.aQ(0,m,null)
if(x.f.b(l))C.hq5(l)}C.h8Z()
t=2
w=6
break
case 4:t=3
d=s.pop()
k=B.ab(d)
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
return B.b(B.c9(),$async$Ox)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WE(),$async$Ox)
case 17:t=2
w=16
break
case 14:t=13
a0=s.pop()
j=B.ab(a0)
$.am.$1("[kiapo] cloud load: "+B.w(j))
w=16
break
case 13:w=2
break
case 16:case 12:$.cfD=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ox,v)},
WF(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WF=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WF)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Cm,o=new B.cb(o,B.a4(o).k("cb<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aw(r,null)),$async$WF)
case 7:w=8
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.X.aw($.Cn,null)),$async$WF)
case 8:u=1
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
return B.i($async$WF,v)},
a8x(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8x=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.Ox(!1),$async$a8x)
case 3:r=$.hq4
w=r==null||new B.V(Date.now(),0,!1).bD(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8v(),$async$a8x)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WE(),$async$a8x)
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
break}o=$.Cm.h(0,p)
n=o==null?null:o.hQ()
if(n==null){u=null
w=1
break}u=C.bEX(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8x,v)},
cfF(d){var w=0,v=B.j(x.y),u,t
var $async$cfF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ox(!1),$async$cfF)
case 3:t=A.a.i(d).toLowerCase()
u=$.Cn.al(0,t)&&$.Cm.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfF,v)},
a8w(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8w=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.Ox(!1),$async$a8w)
case 3:o=$.Cm.W(0,i)
n=$.Cn
m=new B.V(Date.now(),0,!1).aa().ag()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.I(["at",m,"id",l],k,k))
$.cfD=!0
w=4
return B.b(C.WF(),$async$a8w)
case 4:w=5
return B.b(C.a8v(),$async$a8w)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Cm,n=new B.cb(n,B.a4(n).k("cb<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n0("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Cn,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],k,x.z),null),$async$a8w)
case 10:r=f
u=r
w=1
break
t=2
w=9
break
case 7:t=6
h=s.pop()
p=B.ab(h)
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
return B.i($async$a8w,v)},
Oy(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Oy=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8v(),$async$Oy)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WE(),$async$Oy)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Cn.h(0,a0)
if(n!=null){d=J.a7(n)
m=d.h(n,"id")
d=(m==null?"":m).length!==0&&d.h(n,"id")===a3.a}else d=!1
if(d){$.am.$1("[kiapo] not saved: this paper was deleted by the admin")
u=!1
w=1
break}a3.w="hati_kiapo_uongozi"
a3.f=new B.V(Date.now(),0,!1)
l=a3.hQ()
for(d=l.r,m=d.length,k=0;k<d.length;d.length===m||(0,B.J)(d),++k)for(j=d[k].z,i=j.length,h=0;h<i;++h){g=j[h]
f=g.at
e=A.a.i(f==null?"":f)
f=g.db
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Cm.n(0,a0,l)
C.h8Z()
$.cfD=!0
w=11
return B.b(C.WF(),$async$Oy)
case 11:w=12
return B.b(C.a8v(),$async$Oy)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Cm,m=new B.cb(m,B.a4(m).k("cb<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n0("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Cn,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],d,x.z),null),$async$Oy)
case 17:r=a5
u=r
w=1
break
t=2
w=16
break
case 14:t=13
a2=s.pop()
p=B.ab(a2)
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
return B.i($async$Oy,v)},
aru(d){var w=0,v=B.j(x.T),u,t,s
var $async$aru=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hX().a6N(A.eP),$async$aru)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$aru)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1A(t,d),$async$aru)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aru,v)},
b1A(d,e){return C.hVK(d,e)},
hVK(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1A=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b1A)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iB("media")
w=8
return B.b(p.xK(q,new Uint8Array(B.cd(d)),D.bLl),$async$b1A)
case 8:n=p.Df(q)
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
return B.i($async$b1A,v)},
Lu(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.cu,D.cX,l,m,n)},
fsG(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
hdf(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.i.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.cI,A.U,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.cu,D.cX,g,e,f)},
fse(d,e,f,g){return C.fsG(0,0.002,D.fO,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hdg(d,e,f,g,h,i,j,k){var w=C.cE()
return C.er(A.rc,!1,j,A.aG,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.bt,A.a8,"",h,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.cu,D.cX,g,e,f)},
hye(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.en(v,w,"").split(":"))},
bEX(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hye(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.lt&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hfZ(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cr(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hye(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.lt&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.br(a1.z,new C.fOG(a2))}else A.d.br(a1.z,new C.fOH())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fQF(a0))a0.ax=a6.f.aa().ag()
return a0},
hfZ(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fRs(D.a7Z),l=C.cE(),k=x.u,j=B.a([C.er(A.bn,!1,s,A.aG,"marriage_locked_bg",r,24,A.bt,A.a8,"",1,C.cE(),m,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.cu,D.lT,1,0,0)],k),i=B.a([],k)
i.push(C.Lu("NGMY",A.K,236069181,52,A.bt,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lu("TAREHE:",A.bn,o,16,A.bt,A.I,A.i.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hdf("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hyf()))
i.push(C.fse(0.8099999999999999,0.026+A.i.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lu("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bt,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lu("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cI,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fsG(0,0.002,D.fO,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hdg("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hdg("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hdg("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fsG(268435456,0.175,D.bk,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lu("VIDEO YA KIAPO",A.bn,o,10,A.bt,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bn,!1,s,A.aG,"__kiapo_video__",r,24,A.bt,A.a8,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.cu,D.lT,0.77,0.115,0.492))
i.push(C.Lu("Rais Anayeapa:",A.bn,p,15,A.bt,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lu("Jina:",A.bn,p,13,A.bt,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hdf("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.fse(0.195,0.7130000000000001,0.62,n))
i.push(C.Lu("Sahihi:",A.bn,p,13,A.bt,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bn,!1,s,A.aG,"marriage_sign_rais",0,24,A.bt,A.a8,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.cu,D.fj,0.38,0.21500000000000002,0.73))
i.push(C.fse(0.21500000000000002,0.795,0.38,n))
i.push(C.Lu("Tarehe:",A.bn,p,13,A.bt,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hdf("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hyf()))
i.push(C.fse(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fsG(0,0.032,D.bk,o,1,"state_box",0.72,0.14,0.875),C.Lu("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bt,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.t_(4294967035,t,0,0,j,l,D.r1,"","",u,D.dp)
return C.Cr(t,t,t,t,D.oT,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3e(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3e=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fh3)
w=1
break}w=3
return B.b(C.Ox(!0),$async$a3e)
case 3:w=4
return B.b(C.a8x(p),$async$a3e)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hDG(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bmC,null,new C.fJw(p),f,!0,!0,!1,A.lU,!1,!1,x.N),$async$a3e)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fJx(),f,null,!0,!0,x.y),$async$a3e)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hfZ(p))
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
return B.b(C.cfF(p),$async$a3e)
case 13:case 12:if(l){if(f.e!=null)f.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hfZ(p))
case 1:return B.h(u,v)}})
return B.i($async$a3e,v)},
fte:function fte(){},
cfB:function cfB(){},
cfC:function cfC(){},
cfE:function cfE(d){this.a=d},
fOG:function fOG(d){this.a=d},
fOH:function fOH(){},
fJw:function fJw(d){this.a=d},
fJu:function fJu(d){this.a=d},
fJv:function fJv(d){this.a=d},
fJx:function fJx(){},
fJs:function fJs(d){this.a=d},
fJt:function fJt(d){this.a=d},
arZ:function arZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFG:function aFG(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
elU:function elU(d){this.a=d},
elS:function elS(d){this.a=d},
elT:function elT(d){this.a=d},
elV:function elV(d){this.a=d},
elW:function elW(d){this.a=d},
xa(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",j,D.bk,4280172719,2,d,0,0,"",D.cu,D.cX,l,m,n)},
hxQ(d,e,f){var w=4291404327
return B.a([C.qw(0,f,D.f0,w,2,"ring_l",f,d-f*0.42,e),C.qw(0,f,D.f0,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
frE(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qw(4294967288,f,D.f0,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qw(h,s,D.f0,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qw(h,f*0.46,D.f0,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qw(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
frD(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.i.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.i.ad(g,3)+":"+A.o.ad(j,1):u+A.i.ad(g,3),4280640491,j,A.cI,A.U,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,l,0,0,"",D.cu,D.cX,g,e,f)},
bCk(d,e,f,g){return C.qw(0,0.002,D.fO,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hxP(d,e,f,g,h){var w=A.i.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qw(0,0.036,D.bk,h,1.4,"banner_box_"+d,w,v,e),C.xa(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hDq(){var w=new B.V(Date.now(),0,!1),v=new C.fPM()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hxR(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.xa(r+".",A.bn,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.frD("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bCk(q,g+A.i.D(0.0272,0.02,0.06),p,w),C.xa("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bt,A.a8,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.cu,D.fj,s,t,g-0.004),C.bCk(t,g+0.044,s,w)],x.u)},
aie(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dt3,D.cv3,D.dkU,D.dmW],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hcr(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fRs(d.d),v=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cE(),w,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.cu,D.lT,1,0,0)],x.u)
A.d.v(v,C.ia5(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
ia5(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.xa("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hxQ(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hxQ(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.frE(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.frE(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.xa("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qw(0,0.062,D.f0,b1,1.6,"crest_o",0.11,0.445,0.012),C.qw(0,0.046,D.f0,b1,1,"crest_i",0.084,0.458,0.02),C.xa("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qw(0,0.002,D.fO,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qw(b9,0.016,D.lu,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qw(0,0.002,D.fO,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.xa("TAREHE:",A.bn,c0,20,A.I,A.i.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.frD("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hDq()),C.bCk(0.814,0.026+A.i.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.xa(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qw(c0,0.0026,D.bk,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qw(c3.e,0.138,D.bk,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.er(A.bn,!1,b9,A.aG,"marriage_field_utangulizi:"+A.i.ad(0.82,3),b2,19,A.bt,A.cB,"",0.128,s,a9,"","",0,!1,"",0,D.bk,b3,2,c5,0,0,"",D.cu,D.cX,0.82,0.09,t))
t+=c4
if(c8){r=A.i.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qw(0,0.036,D.bk,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.i.ad(r,3),b2,30,A.bt,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bk,b3,2,c7,0,0,"",D.cu,D.cX,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hxP(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.xa(c9,A.bn,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.i.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.frD("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
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
d=B.a([new C.eQ(""+1000*i+"_"+h,D.cX,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bt,A.aG,c0,A.bn,a9,D.bk,b2,b3,2,0,!1,s,0,D.cu,0,"","","","","",!1,0),j,new C.eQ(""+1000*f+"_"+e,D.fj,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.fO,0,b5,0.8,0,!1,g,0,D.cu,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eQ(""+1000*s+"_"+p,D.cX,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bt,A.aG,b7,A.e2,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cu,0,"","","","","",!1,0),new C.eQ(""+1000*i+"_"+h,D.fj,a1,a2,0.046,0.025875,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cu,0,"","","","","",!1,0),new C.eQ(""+1000*g+"_"+f,D.cX,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bt,A.aG,b7,A.K,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cu,0,"","","","","",!1,0),new C.eQ(""+1000*e+"_"+a3,D.fj,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cu,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hxP("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7Q||w===D.a7S||w===D.a7P||w===D.a7R){w=t-0.008
A.d.v(c2,C.frE(0.21,w,0.044,!0,b0))
A.d.v(c2,C.frE(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qw(0,a4,D.bk,c0,1.3,"wit_table_border",0.82,0.09,t),C.qw(c0,a4,D.bk,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qw(0,0.0022,D.fO,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.xa("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.xa("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hxR("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hxR("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qw(0,0.11,D.bk,c0,1.2,"mw_box",0.82,0.09,t),C.xa("MWANDISHI",A.bn,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.xa("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.frD("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bCk(0.215,p,0.3116,b5),C.xa("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bn,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bt,A.a8,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.cu,D.fj,0.3161999999999999,0.5738,s-0.044),C.bCk(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qw(0,0.032,D.bk,c0,1,"state_box",0.7,0.15,a8),C.xa("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
imc(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.hgD(d.d),p=new C.fPI(s),o=new C.fPJ(s),n=d.z,m=n===D.a7Q||n===D.a7S||n===D.a7P||n===D.a7R,l=n===D.aKa||n===D.a7T||n===D.aKb,k=B.bS(0,B.fR(q,A.A,t,t,A.ck,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7T?26:16
i.push(new C.fPL().$1$size(w))}if(n===D.aKc)i.push(D.fZq)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iW,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.m(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.l(4)
i.push(B.r(t,B.x(B.a([p.$0(),D.aTN,p.$1$w(0.9),D.aTN,p.$1$w(0.75)],j),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(D.bh5,t,n,w,t,t,A.n),t,t,t,t,A.an2,t,t,t))
i.push(A.am)
i.push(new C.fPK(r).$1("NIMETOWE"))
i.push(A.fD)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NX,new B.c8(A.aL,A.e,A.j,A.l,t,A.p,t,0,B.a([B.r(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.df,new B.bz(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.m(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b1,A.t,B.a([k,new B.D(A.alD,B.x(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
hCL(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aie(e,t)
if(r==null)r=A.d.gH(D.Ia)
w=C.cE()
v=C.t_(r.e,t,0,0,C.hcr(r,0.165,y.O,D.dny,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r1,"","",s,D.dp)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cr(t,t,t,t,D.oT,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hCM(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aie(e,t)
if(r==null)r=A.d.gH(D.Ia)
w=C.cE()
v=C.t_(r.e,t,0,0,C.hcr(r,0.165,y.f,D.diS,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r1,"","",s,D.dp)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cr(t,t,t,t,D.oT,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGh(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h0Q(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGh,v)},
ahP(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahP=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJA(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.N4,null,new C.fJB(p),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahP)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGh(d,"Hati ya Kuhowa",D.Ia),$async$ahP)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahP)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCL(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahP,v)},
ahQ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahQ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJE(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.N4,null,new C.fJF(p),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahQ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGh(d,"Hati ya Kuhoweya",D.Ia),$async$ahQ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahQ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCM(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahQ,v)},
ahR(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahR=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fJI(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.N4,null,new C.fJJ(m),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahR)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGh(d,"Malipo ya Awamu ya Mahari",D.St),$async$ahR)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kb,"Chagua jimbo"),$async$ahR)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aie(s,D.St)
if(q==null)q=A.d.gH(D.St)
n=C.cE()
p=C.t_(q.e,null,0,0,C.hcr(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.ddl,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r1,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dp)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cr(null,null,null,null,D.oT,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahR,v)},
ye:function ye(d,e){this.a=d
this.b=e},
jE:function jE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fPM:function fPM(){},
fPI:function fPI(d){this.a=d},
fPK:function fPK(d){this.a=d},
fPL:function fPL(){},
fPJ:function fPJ(d){this.a=d},
h0Q:function h0Q(d,e){this.a=d
this.b=e},
aeD:function aeD(d,e,f){this.c=d
this.d=e
this.a=f},
e8j:function e8j(d,e,f){this.a=d
this.b=e
this.c=f},
e8i:function e8i(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
ae1:function ae1(d,e,f){this.c=d
this.d=e
this.a=f},
fJA:function fJA(){},
fJB:function fJB(d){this.a=d},
fJy:function fJy(d){this.a=d},
fJz:function fJz(d){this.a=d},
fJE:function fJE(){},
fJF:function fJF(d){this.a=d},
fJC:function fJC(d){this.a=d},
fJD:function fJD(d){this.a=d},
fJI:function fJI(){},
fJJ:function fJJ(d){this.a=d},
fJG:function fJG(d){this.a=d},
fJH:function fJH(d){this.a=d},
Lx(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.cu,D.cX,k,l,m)},
Dt(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cu,D.fj,j,k,l)},
hyB(d,e,f){return C.Dt(0,0.002,D.fO,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCv(d,e,f,g,h){return B.a([C.Dt(4294967288,0.032,D.bk,4291404327,1.15,"pill_"+d,g,f,e),C.Lx(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hdk(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dt(0,0.002,D.fO,g,1,"orn_l_"+t,u,d,v),C.Dt(h,0.016,D.lu,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dt(0,0.002,D.fO,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2E(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lx(d,A.bn,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.i.ad(t,3),4280640491,i,A.cI,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.cu,D.cX,t,u,g-0.002),C.hyB(u,g+0.018,t)],x.u)},
hyC(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dt(h,0.028,D.bk,h,0,"chv_"+d,g,e,f),C.Dt(w,0.024,D.lu,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dt(w,0.024,D.lu,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lx(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCu(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lx("Sahihi:",A.bn,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bt,A.a8,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.cu,D.fj,v,w,f-0.006),C.hyB(w,f+0.016,v)],x.u)},
hgE(d){var w,v
for(w=0;w<19;++w){v=D.SJ[w]
if(v.a===d)return v}return null},
ioz(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aie(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aie(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.aie(u,D.St)
v=w==null?l:w.d
if(v==null){w=C.aie(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hgE(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hzr.a8(0)
$.hzD.a8(0)
t=C.fRs(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hhO(d){var w=0,v=B.j(x.T),u
var $async$hhO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h2i(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hhO,v)},
yh:function yh(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blH:function blH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h2i:function h2i(){},
aeG:function aeG(d){this.a=d},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqF:function eqF(d){this.a=d},
eqE:function eqE(d,e){this.a=d
this.b=e},
agm:function agm(d,e,f){this.c=d
this.d=e
this.a=f},
hgD(d){return $.hzD.c3(0,d,new C.fRu(d))},
fRs(d){return $.hzr.c3(0,d,new C.fRt(d))},
fG(d){return B.h6A(d>>>16&255,d>>>8&255,d&255,255)},
idj(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hAJ(4294570461,4293910718,4284234270,u)
case 1:return C.hAJ(4294635750,4293975240,t,4292912216)
case 2:w=C.fqb(s,4294505966,r)
C.bCe(w,14,16,p)
C.kL(w,8,9,464,836,u,1.2)
C.Dp(w,2,2,1,1,u,10)
C.Dp(w,478,2,-1,1,u,10)
C.Dp(w,2,852,1,-1,u,10)
C.Dp(w,478,852,-1,-1,u,10)
return w
case 3:return C.fqb(4294966515,4294373082,4289102906)
case 4:return C.i7N(C.fqb(4294376440,4293653998,4290287194))
case 5:w=C.fqb(4294965238,4294437098,4288444980)
C.bCe(w,14,16,4283043359)
C.kL(w,6,7,468,840,u,1)
C.kL(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,n,4294175448)
C.tj(v,n)
C.kL(v,24,24,432,806,4286209070,1)
C.a2r(v,12,12,468,12,o,3,20)
C.a2r(v,12,842,468,842,o,3,20)
C.a2r(v,12,12,12,842,o,3,20)
C.a2r(v,468,12,468,842,o,3,20)
return v
case 7:return C.i5x(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,m,4293911504)
C.tj(v,m)
C.kL(v,28,28,424,798,l,1)
C.fzU(v,28,28,l,k)
C.fzU(v,452,28,l,k)
C.fzU(v,28,826,l,k)
C.fzU(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,j,4294111986)
C.tj(v,j)
C.kL(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fG(p),0,13,0,853)
return v
case 10:return C.i9S(i,4294173372)
case 11:return C.ib2(4294439140,4293449662)
case 12:return C.i5j(h,4294239432)
case 13:return C.ias(4294244340,4293193448)
case 14:return C.ieP(4294505710,4293780694)
case 15:return C.fp2(4294966259,4294439138,o,p,q)
case 16:return C.fp2(4294966776,4294178544,o,g,g)
case 17:return C.fp2(4294965493,4294504170,o,4286200650,q)
case 18:return C.fp2(4294966519,4294373862,o,p,p)
case 19:return C.i8Y()
case 20:return C.i8Z()
case 21:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,h,4293976768)
C.tj(v,h)
C.bCe(v,14,16,p)
B.iW(v,!0,C.fG(u),4,475,4,9)
B.iW(v,!0,C.fG(u),4,475,844,849)
B.iW(v,!0,C.fG(u),4,9,4,849)
B.iW(v,!0,C.fG(u),470,475,4,849)
C.a2r(v,10,12,470,12,u,2,16)
C.a2r(v,10,842,470,842,u,2,16)
C.a2r(v,10,12,10,842,u,2,18)
C.a2r(v,470,12,470,842,u,2,18)
C.Dp(v,2,2,1,1,t,10)
C.Dp(v,478,2,-1,1,t,10)
C.Dp(v,2,852,1,-1,t,10)
C.Dp(v,478,852,-1,-1,t,10)
C.kL(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,s,4294438872)
C.tj(v,s)
C.kL(v,14,16,452,822,o,2.2)
C.kL(v,22,24,436,806,o,1)
C.heK(v,!1,!1,o,p,p,36,14,16)
C.l0(v,240,20,7,o,!0)
C.l0(v,240,834,7,o,!0)
C.l0(v,18,427,7,o,!0)
C.l0(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,i,4293910712)
C.tj(v,i)
B.iW(v,!0,C.fG(u),0,479,0,20)
B.iW(v,!0,C.fG(u),0,479,834,853)
B.iW(v,!0,C.fG(u),0,20,0,853)
B.iW(v,!0,C.fG(u),460,479,0,853)
B.iW(v,!0,C.fG(f),5,474,5,9)
B.iW(v,!0,C.fG(f),5,474,844,848)
B.iW(v,!0,C.fG(f),5,9,5,848)
B.iW(v,!0,C.fG(f),470,474,5,848)
C.kL(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cd,0,A.ea,854,q,0,3,q,A.cd,480,!1)
C.z9(v,e,4294174404)
C.tj(v,e)
C.bCe(v,14,16,p)
B.iW(v,!0,C.fG(u),3,476,3,8)
B.iW(v,!0,C.fG(u),3,476,845,850)
B.iW(v,!0,C.fG(u),3,8,3,850)
B.iW(v,!0,C.fG(u),471,476,3,850)
C.kL(v,9,10,462,834,t,1)
C.kL(v,14,16,452,822,u,1.8)
C.l0(v,240,8,4,u,!0)
C.l0(v,240,846,4,u,!0)
C.l0(v,8,427,4,u,!0)
C.l0(v,472,427,4,u,!0)
C.l0(v,8,8,3,t,!0)
C.l0(v,472,8,3,t,!0)
C.l0(v,8,846,3,t,!0)
C.l0(v,472,846,3,t,!0)
return v}},
z9(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.l2(d,!1,A.dj,new B.MM(s),r,A.d3,1,0,w-1,k,k);++k}},
tj(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e5()
n.d_(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.it()
v=A.o.D(A.i.M(s.gb9(s))-3,0,255)
r=A.o.D(A.i.M(s.gbe())-3,0,255)
q=A.o.D(A.i.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kL(d,e,f,g,h,i,j){var w,v=null,u=C.fG(i),t=e+g
B.l2(d,!0,A.dj,u,v,A.d3,j,e,t,f,f)
w=f+h
B.l2(d,!0,A.dj,u,v,A.d3,j,e,t,w,w)
B.l2(d,!0,A.dj,u,v,A.d3,j,e,e,f,w)
B.l2(d,!0,A.dj,u,v,A.d3,j,t,t,f,w)},
Dp(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.i.V(j*0.72),8,j-2)
B.l2(d,!0,A.dj,C.fG(i),u,A.d3,2,e,e+g*j,f,f)
B.l2(d,!0,A.dj,C.fG(i),u,A.d3,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l2(d,!0,A.dj,C.fG(i),u,A.d3,1,w,e+g*t,v,v)
B.l2(d,!0,A.dj,C.fG(i),u,A.d3,1,w,w,v,f+h*t)},
hAJ(d,e,f,g){var w=null,v=B.hn(w,w,A.cd,0,A.ea,854,w,0,3,w,A.cd,480,!1)
C.z9(v,d,e)
C.tj(v,d)
B.iW(v,!0,C.fG(f),0,479,0,28)
B.iW(v,!0,C.fG(f),0,479,826,853)
B.iW(v,!0,C.fG(f),0,28,0,853)
B.iW(v,!0,C.fG(f),452,479,0,853)
C.kL(v,5,5,470,844,g,1.1)
C.kL(v,28,28,424,798,g,1.6)
C.Dp(v,2,2,1,1,g,11)
C.Dp(v,478,2,-1,1,g,11)
C.Dp(v,2,852,1,-1,g,11)
C.Dp(v,478,852,-1,-1,g,11)
return v},
fqb(d,e,f){var w=null,v=B.hn(w,w,A.cd,0,A.ea,854,w,0,3,w,A.cd,480,!1)
C.z9(v,d,e)
C.tj(v,d)
C.kL(v,14,16,452,822,f,1.6)
C.kL(v,20,22,440,810,f,0.8)
return v},
bCe(d,e,f,g){var w,v=C.fG(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i7N(d){var w,v,u=4291404327
C.bCe(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l0(d,w,8,3,u,!0)
C.l0(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l0(d,7,v,3,u,!0)
C.l0(d,473,v,3,u,!0)}return d},
fDc(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jt(e,f),new B.jt(e+g*n,f),new B.jt(e,f+h*n)],t)
B.a3a(d,C.fG(m),s)
w=A.o.D(A.i.V(n*0.17),5,8)
v=A.i.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jt(s,u),new B.jt(e+g*v,u),new B.jt(s,f+h*v)],t)
B.a3a(d,C.fG(k),t)
t=A.i.V(n*0.39)
C.l0(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l0(d,e+g*t,f+h*3,4,k,!0)
C.l0(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l0(d,e+g*t,f,5,k,!0)
C.l0(d,e,f+h*t,5,k,!0)}},
heK(d,e,f,g,h,i,j,k,l){var w,v
C.fDc(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fDc(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fDc(d,k,v,1,-1,e,f,g,h,i,j)
C.fDc(d,w,v,-1,-1,e,f,g,h,i,j)},
a2r(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.i.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.i.V(e+o*s)
q=A.i.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lm(d,!0,A.dj,new B.rt(p),null,A.d3,j,r,q)}},
fC3(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l2(d,!0,A.dj,new B.rt(o),null,A.d3,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l2(d,!0,A.dj,new B.rt(o),null,A.d3,1.4,q,q,p,p+h*r)}},
i5x(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cd,0,A.ea,854,o,0,3,o,A.cd,480,!1)
C.z9(n,d,e)
C.tj(n,d)
C.kL(n,20,20,440,814,f,1.2)
C.fC3(n,0,0,1,1,g)
C.fC3(n,480,0,-1,1,g)
C.fC3(n,0,854,1,-1,g)
C.fC3(n,480,854,-1,-1,g)
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
B.l2(n,!0,A.dj,new B.rt(p),o,A.d3,1.2,240,r,60,q)}return n},
fzU(d,e,f,g,h){var w
C.fGZ(d,!0,C.fG(g),13,e,f)
C.fGZ(d,!0,C.fG(g),9,e,f)
w=B.a([new B.jt(e,f-4),new B.jt(e+4,f),new B.jt(e,f+4),new B.jt(e-4,f)],x.J)
B.a3a(d,C.fG(h),w)},
l0(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jt(e,v),new B.jt(u,f),new B.jt(e,t),new B.jt(s,f)],x.J)
if(i){B.a3a(d,C.fG(h),r)
return}B.l2(d,!0,A.dj,C.fG(h),w,A.d3,1,e,u,v,f)
B.l2(d,!0,A.dj,C.fG(h),w,A.d3,1,u,e,f,t)
B.l2(d,!0,A.dj,C.fG(h),w,A.d3,1,e,s,t,f)
B.l2(d,!0,A.dj,C.fG(h),w,A.d3,1,s,e,f,v)},
fp1(d,e,f,g,h,i,j){var w,v=B.a([new B.jt(e,f),new B.jt(e+g*28,f),new B.jt(e,f+h*28)],x.J)
B.a3a(d,C.fG(i),v)
v=e+g*14
w=f+h*14
C.l0(d,v,w,6,j,!0)
C.l0(d,v,w,3,i,!0)},
fp2(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cd,0,A.ea,854,w,0,3,w,A.cd,480,!1)
C.z9(v,d,e)
C.tj(v,d)
C.kL(v,18,18,444,818,f,2)
C.kL(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fG(h),28,451,28,34)
C.fp1(v,18,18,1,1,g,f)
C.fp1(v,462,18,-1,1,g,f)
C.fp1(v,18,836,1,-1,g,f)
C.fp1(v,462,836,-1,-1,g,f)
return v},
i8Y(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cd,0,A.ea,854,v,0,3,v,A.cd,480,!1)
C.z9(r,u,4294240980)
C.tj(r,u)
C.kL(r,10,12,460,830,t,3.2)
C.kL(r,18,20,444,814,s,1.2)
C.kL(r,24,26,432,802,t,1.8)
C.heK(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l0(r,w,16,3,t,!0)
C.l0(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l0(r,16,w,3,t,!0)
C.l0(r,464,w,3,t,!0)}return r},
i8Z(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cd,0,A.ea,854,t,0,3,t,A.cd,480,!1)
C.z9(p,s,4294373080)
C.tj(p,s)
C.kL(p,16,18,448,818,r,2.4)
C.kL(p,24,26,432,802,4286209044,1)
w=new C.frv(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.heK(p,!1,!0,r,q,q,34,16,18)
return p},
bCW(d,e,f,g,h,i){B.iW(d,!0,C.fG(i),e,e+g,f,f+h)},
bDN(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.l2(d,!1,A.dj,new B.MM(i),null,A.d3,1,e,w,l,l)}},
i9R(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.l2(d,!1,A.dj,new B.rt(r),null,A.d3,1,e,s,t,t);++v}return}w=f+g-1
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
B.l2(d,!1,A.dj,new B.rt(r),null,A.d3,1,t,t,f,s);++q}},
i9S(d,e){var w,v,u=null,t=B.hn(u,u,A.cd,0,A.ea,854,u,0,3,u,A.cd,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i9R(t,v,w,30,D.d5t,(A.o.ar(v,30)+A.o.ar(w,30)&1)===0)
C.bCW(t,44,44,392,766,d)
C.bDN(t,44,44,392,766,d,e)
C.tj(t,d)
C.kL(t,44,44,392,766,4292128567,2.2)
C.kL(t,50,50,380,754,4279898632,0.8)
return t},
ib1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l0(d,e,f,7,h,!0)
C.l0(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l2(d,!0,A.dj,C.fG(h),o,A.d3,1.6,w,u,v,t)
B.l2(d,!0,A.dj,C.fG(h),o,A.d3,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l2(d,!0,A.dj,new B.rt(p),o,A.d3,1.2,w,v,q,q)}break
default:B.l2(d,!0,A.dj,C.fG(h),o,A.d3,1.5,e-8,e+8,f,f)
B.l2(d,!0,A.dj,C.fG(h),o,A.d3,1.5,e,e,f-8,f+8)
B.lm(d,!0,A.dj,C.fG(h),o,A.d3,2,e,f)}},
ib2(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cd,0,A.ea,854,s,0,3,s,A.cd,480,!1)
B.iW(r,!0,C.fG(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.ib1(r,u,v,w,4292391514)}C.bCW(r,46,46,388,762,d)
C.bDN(r,46,46,388,762,d,e)
C.tj(r,d)
C.kL(r,46,46,388,762,4291404327,1.8)
return r},
hvZ(d,e,f,g){C.fGZ(d,!0,C.fG(g),16,e,f)
C.fGZ(d,!0,C.fG(g),11,e,f)
C.l0(d,e,f,6,g,!0)
B.l2(d,!0,A.dj,C.fG(g),null,A.d3,1.3,e-14,e+14,f,f)
B.l2(d,!0,A.dj,C.fG(g),null,A.d3,1.3,e,e,f-14,f+14)},
i5j(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cd,0,A.ea,854,v,0,3,v,A.cd,480,!1)
B.iW(s,!0,C.fG(4280948752),0,479,0,853)
B.iW(s,!0,C.fG(u),0,479,0,78)
B.iW(s,!0,C.fG(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hvZ(s,w,39,t)
C.hvZ(s,w,815,t)}C.bCW(s,38,92,404,670,d)
C.bDN(s,38,92,404,670,d,e)
C.tj(s,d)
C.kL(s,38,92,404,670,t,1.8)
C.kL(s,45,99,390,656,4287322667,0.8)
return s},
iar(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jt(e,f),new B.jt(q-5,w),new B.jt(q,f-(18-Math.abs(r)*3)),new B.jt(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a3a(d,new B.rt(o),p)}B.lm(d,!0,A.dj,C.fG(4292128567),null,A.d3,3,e,f)},
ias(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cd,0,A.ea,854,s,0,3,s,A.cd,480,!1)
C.z9(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l2(q,!0,A.dj,new B.rt(v),s,A.d3,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l2(q,!0,A.dj,new B.rt(u),s,A.d3,1.1,v,v,0,853)}B.iW(q,!0,C.fG(r),0,479,0,70)
B.iW(q,!0,C.fG(r),0,479,798,853)
for(t=0;t<5;++t)C.iar(q,70+t*85,48,4292128567)
C.bCW(q,48,78,384,712,d)
C.bDN(q,48,78,384,712,d,e)
C.tj(q,d)
C.kL(q,48,78,384,712,4291404327,1.6)
return q},
ieP(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cd,0,A.ea,854,t,0,3,t,A.cd,480,!1)
B.iW(r,!0,C.fG(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l0(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lm(r,!0,A.dj,new B.rt(u),t,A.d3,1,v,w)}C.bCW(r,40,40,400,774,d)
C.bDN(r,40,40,400,774,d,e)
C.tj(r,d)
C.kL(r,40,40,400,774,4291058750,2)
C.kL(r,48,48,384,758,s,0.8)
return r},
lb:function lb(d,e){this.a=d
this.b=e},
fRu:function fRu(d){this.a=d},
fRt:function fRt(d){this.a=d},
frv:function frv(d){this.a=d},
fSa(d){var w
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
iaV(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hdd(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p6(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aQ(0,Ak.aib(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
agJ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vW(null,""),$async$agJ)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nm(n)
if(e==null)s=A.i3
else{r=C.iaV(e)
s=B.a([new B.a1o(A.cR.gcu().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rh(t,d,s,"news",E.GG),$async$agJ)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LY(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agJ,v)},
bFq(d){return C.iof(d)},
iof(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agJ(r,null),$async$bFq)
case 7:q=f
p=C.hdd(q)
if(p==null){u=d
w=1
break}o=d.aEQ(p)
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
return B.i($async$bFq,v)},
hzX(d){var w,v=F.hfV(d)
v=B.aL(v,"book","newspaper")
if(F.a3v(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fW9(d,e,f,g){return C.iq8(d,e,f,g)},
iq8(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fW9=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fSa(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hDP()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agJ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hzX(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fW9)
case 3:r=m.hdd(i)
if(r==null)throw B.W(y.S)
q=new C.Ae(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEQ(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a3v(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3v(A.d.aO(t," "))==="sw"?C.bFq(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fW9,v)},
bEV(d,e,f,g,h){return C.ilM(d,e,f,g,h)},
ilM(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEV=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hDP()
k=A.X.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agJ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hzX(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEV)
case 3:p=j.hdd(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aEQ(B.a2(o,x.N,x.z))
m=A.X.aw(n.aj(),null)!==A.X.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3v(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFq(n),$async$bEV)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9b(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEV,v)},
a9b:function a9b(d,e,f){this.a=d
this.b=e
this.c=f},
ity(d,e){return B.a6(d,!1).ce(B.ec(new C.h2t(e),!0,null,x.H))},
h2t:function h2t(d){this.a=d},
X7:function X7(d,e){this.c=d
this.a=e},
aFX:function aFX(d,e,f,g,h,i,j,k){var _=this
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
etD:function etD(d){this.a=d},
etC:function etC(){},
etE:function etE(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
etF:function etF(){},
etf:function etf(d,e){this.a=d
this.b=e},
etb:function etb(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
etn:function etn(d,e){this.a=d
this.b=e},
eto:function eto(d){this.a=d},
eth:function eth(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
etk:function etk(d){this.a=d},
etl:function etl(d){this.a=d},
etg:function etg(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
ete:function ete(d){this.a=d},
etu:function etu(d){this.a=d},
etv:function etv(d){this.a=d},
ett:function ett(d){this.a=d},
etw:function etw(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
etx:function etx(d){this.a=d},
etr:function etr(d){this.a=d},
ety:function ety(d){this.a=d},
etq:function etq(d){this.a=d},
etz:function etz(d,e){this.a=d
this.b=e},
etp:function etp(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
etc:function etc(d,e){this.a=d
this.b=e},
fR3(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fR3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxy){w=1
break}r=new C.fR4()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fR3)
case 7:$.hxy=!0
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
return B.i($async$fR3,v)},
bFh(d){return A.Dw[B.mw(d)-1]+", "+A.oO[B.bM(d)-1]+" "+B.bV(d)+", "+B.bD(d)},
idX(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dxG[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hgj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fPm(),B.U(v).k("Y<1>")))
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
continue}o=new C.fPo(j,h)
n=new C.fPn(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ar(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
hcX(d,e){var w=new C.fr4()
return A.d.cG(e,0,new C.fr2(w))>=A.d.cG(d,0,new C.fr3(w))},
huE(d){var w,v,u=new B.aG($.R().r,A.ai,null,null,B.a([],x.v))
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
Ae:function Ae(d,e,f,g,h,i,j,k,l,m){var _=this
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
cjl:function cjl(d){this.a=d},
cjj:function cjj(){},
cjk:function cjk(){},
tP:function tP(d,e){this.a=d
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
fR4:function fR4(){},
fPm:function fPm(){},
fPo:function fPo(d,e){this.a=d
this.b=e},
fPn:function fPn(d,e,f){this.a=d
this.b=e
this.c=f},
fr4:function fr4(){},
fr5:function fr5(){},
fr2:function fr2(d){this.a=d},
fr3:function fr3(d){this.a=d},
b34:function b34(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjm:function cjm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjn:function cjn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjo:function cjo(d){this.a=d},
beI:function beI(d){this.a=d},
beH:function beH(d,e){this.b=d
this.a=e},
bwK:function bwK(d){this.a=d},
bba:function bba(d,e){this.b=d
this.a=e},
bud:function bud(d,e){this.b=d
this.a=e},
hFU(d,e){return B.a6(d,!1).ce(B.ec(new C.h2w(e,null),!0,null,x.E))},
h2w:function h2w(d,e){this.a=d
this.b=e},
X8:function X8(d,e,f){this.c=d
this.d=e
this.a=f},
aG_:function aG_(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eup:function eup(){},
euq:function euq(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
euc:function euc(d){this.a=d},
eud:function eud(d){this.a=d},
euj:function euj(d){this.a=d},
euk:function euk(d,e){this.a=d
this.b=e},
euh:function euh(d){this.a=d},
eui:function eui(d,e,f){this.a=d
this.b=e
this.c=f},
eue:function eue(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eul:function eul(d,e){this.a=d
this.b=e},
eug:function eug(d,e){this.a=d
this.b=e},
eum:function eum(d){this.a=d},
euf:function euf(d,e){this.a=d
this.b=e},
eun:function eun(d,e){this.a=d
this.b=e},
bef:function bef(d,e,f){this.b=d
this.c=e
this.a=f},
itE(d){return B.a6(d,!1).ce(B.ec(new C.h2M(),!0,null,x.I))},
bCH(d,e){var w,v,u,t,s,r,q=B.c0(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hep(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h2M:function h2M(){},
a1f:function a1f(d){this.a=d},
oX:function oX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHo:function aHo(d,e,f,g,h,i,j,k,l){var _=this
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
f3p:function f3p(d){this.a=d},
f2h:function f2h(d,e){this.a=d
this.b=e},
f2F:function f2F(d,e){this.a=d
this.b=e},
f2P:function f2P(d){this.a=d},
f20:function f20(d){this.a=d},
f21:function f21(d){this.a=d},
f1Z:function f1Z(d){this.a=d},
f2_:function f2_(d){this.a=d},
f2y:function f2y(d,e){this.a=d
this.b=e},
f2z:function f2z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2L:function f2L(d,e,f){this.a=d
this.b=e
this.c=f},
f2K:function f2K(d,e){this.a=d
this.b=e},
f2M:function f2M(d,e){this.a=d
this.b=e},
f2J:function f2J(d,e){this.a=d
this.b=e},
f2O:function f2O(d,e,f){this.a=d
this.b=e
this.c=f},
f2N:function f2N(d,e){this.a=d
this.b=e},
f1R:function f1R(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1Q:function f1Q(){},
f1U:function f1U(d,e){this.a=d
this.b=e},
f1P:function f1P(d,e){this.a=d
this.b=e},
f1W:function f1W(){},
f1V:function f1V(d,e){this.a=d
this.b=e},
f1O:function f1O(d,e){this.a=d
this.b=e},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1X:function f1X(d){this.a=d},
f1N:function f1N(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d){this.a=d},
f1M:function f1M(d,e){this.a=d
this.b=e},
f3e:function f3e(d,e){this.a=d
this.b=e},
f3l:function f3l(d){this.a=d},
f3m:function f3m(d,e){this.a=d
this.b=e},
f3n:function f3n(){},
f3f:function f3f(d,e){this.a=d
this.b=e},
f3d:function f3d(d,e){this.a=d
this.b=e},
f3g:function f3g(d,e){this.a=d
this.b=e},
f3c:function f3c(d,e){this.a=d
this.b=e},
f3h:function f3h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3b:function f3b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3i:function f3i(d){this.a=d},
f3j:function f3j(d,e){this.a=d
this.b=e},
f3k:function f3k(d){this.a=d},
f3a:function f3a(d){this.a=d},
f2Y:function f2Y(d){this.a=d},
f2Z:function f2Z(d){this.a=d},
f2X:function f2X(d,e){this.a=d
this.b=e},
f2S:function f2S(d,e){this.a=d
this.b=e},
f3_:function f3_(d){this.a=d},
f32:function f32(d){this.a=d},
f2W:function f2W(d){this.a=d},
f33:function f33(d){this.a=d},
f34:function f34(d){this.a=d},
f35:function f35(d){this.a=d},
f36:function f36(d){this.a=d},
f2V:function f2V(d){this.a=d},
f37:function f37(d){this.a=d},
f2U:function f2U(d){this.a=d},
f38:function f38(d,e){this.a=d
this.b=e},
f2T:function f2T(d,e){this.a=d
this.b=e},
f39:function f39(d){this.a=d},
f30:function f30(d){this.a=d},
f31:function f31(d){this.a=d},
f2C:function f2C(d){this.a=d},
f2B:function f2B(d){this.a=d},
f2D:function f2D(d,e){this.a=d
this.b=e},
f2A:function f2A(d,e){this.a=d
this.b=e},
f2E:function f2E(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2t:function f2t(d){this.a=d},
f2v:function f2v(d){this.a=d},
f2s:function f2s(d){this.a=d},
f2w:function f2w(d,e){this.a=d
this.b=e},
f2r:function f2r(d,e){this.a=d
this.b=e},
f2q:function f2q(d,e){this.a=d
this.b=e},
f28:function f28(d){this.a=d},
f29:function f29(d){this.a=d},
f2a:function f2a(d){this.a=d},
f2b:function f2b(d){this.a=d},
f2c:function f2c(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2e:function f2e(d){this.a=d},
f2f:function f2f(d){this.a=d},
f2g:function f2g(d){this.a=d},
f1u:function f1u(d){this.a=d},
f1v:function f1v(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1y:function f1y(d){this.a=d},
f1t:function f1t(d){this.a=d},
f1z:function f1z(d){this.a=d},
f1A:function f1A(d){this.a=d},
f22:function f22(d){this.a=d},
f23:function f23(d){this.a=d},
f24:function f24(d){this.a=d},
f25:function f25(d){this.a=d},
f26:function f26(d){this.a=d},
f1E:function f1E(d){this.a=d},
f1F:function f1F(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1H:function f1H(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1D:function f1D(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1C:function f1C(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1B:function f1B(d){this.a=d},
f2x:function f2x(d){this.a=d},
f2p:function f2p(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2m:function f2m(d,e){this.a=d
this.b=e},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2n:function f2n(d,e){this.a=d
this.b=e},
f2i:function f2i(d,e){this.a=d
this.b=e},
f2o:function f2o(d){this.a=d},
f2I:function f2I(d){this.a=d},
f2H:function f2H(d,e,f){this.a=d
this.b=e
this.c=f},
f2G:function f2G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2R:function f2R(d,e){this.a=d
this.b=e},
f2Q:function f2Q(d,e){this.a=d
this.b=e},
f27:function f27(d){this.a=d},
f3o:function f3o(d){this.a=d},
bhR:function bhR(d,e){this.b=d
this.a=e},
ioq(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ior(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
bDh(){var w=$.bCo,v=$.RB
$.RB=v+1
return w+"_"+v},
ik(d,e,f,g,h,i,j){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,C.bDh(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cu,D.fj,g,e,f)},
om(d,e,f,g){var w=f*9
return C.ik(D.f0,d-f/2,e-w/32,f,w/16,g,0)},
i7g(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCo
o=$.RB
$.RB=o+1
w.push(new C.eQ(p+"_"+o,D.fj,0,q,1,0.0016,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCo
o=$.RB
$.RB=o+1
w.push(new C.eQ(p+"_"+o,D.fj,n,0,0.004,1,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}w.push(C.om(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.om(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ik(D.bk,0.08,0.08,0.5,0.003,v,0),C.ik(D.bk,0.58,0.08,0.004,0.06,v,0),C.ik(D.bk,0.58,0.14,0.34,0.003,v,0),C.ik(D.bk,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ik(D.bk,0.08,0.8,0.004,0.14,t,0),C.ik(D.bk,0.08,0.94,0.6,0.003,t,0),C.om(0.58,0.08,0.05,e),C.om(0.92,0.22,0.05,e),C.om(0.08,0.8,0.05,f),C.om(0.68,0.94,0.05,f),C.om(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ik(D.lu,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ik(D.lu,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ik(D.lu,0.7,0.8,0.22,0.12,w|1140850688,0),C.ik(D.lu,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.om(0.5,0.5,1.5,w|335544320),C.om(0.5,0.5,1.15,w|402653184),C.om(0.5,0.5,0.8,v|436207616),C.om(0.95,0.05,0.4,v|855638016),C.om(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.om(0.85,0.08,0.7,w|1140850688),C.om(0.1,0.35,0.5,v|855638016),C.om(0.9,0.62,0.55,v|771751936),C.om(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ik(D.bk,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ik(D.bk,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ik(D.bk,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ik(D.bk,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.om(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.om(0.5,0.2,0.65,(w|3422552064)>>>0),C.om(0.5,0.2,0.95,w|855638016),C.ik(D.bk,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ik(D.bk,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ik(D.ke,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ik(D.ke,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ik(D.ke,0.15,0.86,0.6,0.14,1712265002,0),C.om(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d72[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCo
l=$.RB
$.RB=l+1
w.push(new C.eQ(o+"_"+l,D.fj,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.f0,s,s,0,0,!1,"",0,D.cu,0,"","","","","",!1,0))}w.push(C.om(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ik(D.ke,0.35,-0.1,0.3,0.62,w|855638016,0),C.ik(D.ke,0.05,-0.1,0.3,0.55,v,-0.5),C.ik(D.ke,0.65,-0.1,0.3,0.55,v,0.5),C.om(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ik(D.bk,0.06,0.04,0.88,0.002,e,0),C.ik(D.bk,0.06,0.96,0.88,0.002,e,0),C.ik(D.bk,0.06,0.04,0.004,0.92,e,0),C.ik(D.bk,0.936,0.04,0.004,0.92,e,0),C.ik(D.bk,0.09,0.07,0.82,0.001,w,0),C.ik(D.bk,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ik(D.kf,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ik(D.kf,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ik(D.kf,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ik(D.bk,0,0,0.3,0.09,w|1140850688,0),C.ik(D.bk,0.7,0.9,0.3,0.1,v|1426063360,0),C.ik(D.bk,0.82,0.04,0.12,0.07,w|771751936,0),C.ik(D.bk,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ik(D.f0,0.62,0.02,0.5,0.16,v,0.6),C.ik(D.f0,0.78,0.12,0.4,0.12,u,0.9),C.ik(D.f0,-0.12,0.8,0.5,0.16,u,-0.6),C.ik(D.f0,-0.05,0.9,0.4,0.12,v,-0.9),C.om(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ik(D.bk,0.09,0.12,0.16,0.006,e,0),C.ik(D.bk,0.05,0.03,0.9,0.001,w,0),C.ik(D.bk,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ikP(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCo=j
$.RB=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fML()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_background",m,24,A.bt,A.a8,"",1,C.bDh(),g,"","",0,!1,"",0,D.bk,l,2,"",0,0,"",D.cu,D.lT,1,0,0))
if(a9)A.d.v(q,C.i7g(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.i.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ioq(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fMK(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.i.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cI,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bt,A.a8,a1,a3*9/16,C.bDh(),a0,"","",0,!1,a2,0,D.bk,l,2,"",0,0,"",D.cu,D.lT,a3,a4,a5))
return C.t_(s,r,0,0,q,j+"_slide",D.r1,"","","",D.dp)},
rZ:function rZ(d,e){this.a=d
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
fML:function fML(){},
fMK:function fMK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hXT(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b8(u.a(w.h(d,"extras")),new C.ckR(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Af(u,t,s,B.w(w==null?"":w))},
fUw(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fUw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxV){w=1
break}$.hxV=!0
t=4
w=7
return B.b(B.aA(),$async$fUw)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i1(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gR(h)
l=C.hXT(m)
if(l!=null)J.c7(n,l)}$.Dq.c3(0,B.w(o.a),new C.fUx(n))}C.he3()
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
return B.i($async$fUw,v)},
he3(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dq,$.Dq.r,$.Dq.e);w.C();)J.nT(w.d,new C.fza(v))
$.Dq.br($.Dq,new C.fzb())},
aQ6(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQ6=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQ6)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cb($.Dq,B.a4($.Dq).k("cb<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gR(h)
g=o
J.c7(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aC("String","ngmy_slides_ai_history_v1",A.X.aw(n,null)),$async$aQ6)
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
return B.i($async$aQ6,v)},
ip3(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.he3()
w=$.Dq.c3(0,d,new C.fUz())
v=Date.now()
u=B.C(e,B.a4(e).k("ci.E"))
J.n2(w,0,new C.Af(new B.V(v,0,!1),f,u,g))
C.aQ6()},
ip0(d){var w,v=$.Dq.h(0,d)
if(v==null||J.cs(v))return
w=J.cC(v)
w.cH(v,0)
if(w.gau(v))$.Dq.W(0,d)
C.aQ6()},
Af:function Af(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckR:function ckR(){},
fUx:function fUx(d){this.a=d},
fza:function fza(d){this.a=d},
fzb:function fzb(){},
fUz:function fUz(){},
ip5(d){return A.d.dP(D.x2,new C.fUC(d),new C.fUD())},
hXR(d){var w
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
hXQ(d){var w
switch(d.a){case 0:w=D.apE
break
case 1:w=A.zp
break
case 2:w=A.PO
break
case 3:w=I.apj
break
case 4:w=A.aq9
break
case 5:w=A.ml
break
default:w=null}return w},
iax(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RT[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RT[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hXS(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.X.aw(B.I(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ip1(d,e,f,g,h){var w=new B.N(D.x2,new C.fUv(),x.eC).aO(0,", "),v=""+d,u=C.hDH(h),t=F.fO9(h),s=C.hzB(g),r=e.q(0,D.Jp)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jq)?'- New slides get an "icon3d" from: '+A.d.aO(D.RT,", ")+".\n":"",p=e.q(0,D.E5)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ip2(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.x2,new C.fUy(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Jp)){p.a=s
w=s}else w=""
if(e.q(0,D.Jq))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RT,", ")+".\n")
if(e.q(0,D.E5))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hDH(d)
v=F.fO9(d)
u=C.hzB(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aiq(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DP(a3,"{"),a5=J.h67(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mh(a3,a4,a5+1)
try{w=A.X.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cs(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b8(p.a(J.t(t,a2)),new C.fSt(),m).bY(0,new C.fSu())
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
f=C.iax(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c7(u,new C.a9j(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.aV(D.x2,new C.fSv(r))?r:a7
o=C.fyq(J.t(w,"logo_frame"),D.Ds)
n=C.fyq(J.t(w,"logo_ring"),D.Dl)
m=C.fyq(J.t(w,"photo_frame"),D.Ds)
l=C.fyq(J.t(w,"photo_ring"),D.Dl)
return new C.asT(q,p,u,o,n,m,l)}catch(a0){return a1}},
a30(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hCO(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.E6),f7=f6?C.i3E():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e5()
v.d_(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.oa("luxe",u.a,A.ml,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dp)
w=s}if(w==null)w=C.ip5(f9.b)
r=g2.q(0,D.a8a)||f6
q=g2.q(0,D.Jp)
p=g2.q(0,D.TR)
o=new C.fMP()
n=B.a([],x.g)
m=new C.fMS(o,w,r)
l=new C.fMR(o,r)
k=new C.fMQ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fMO(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d8I[b8]
c0=D.d7z[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fbt.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.f0,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.f0,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f0,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.na,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r2,500,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TO
break A}if("section"===d2){c1.push(l.$8$fx$key(D.f0,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lu,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bk,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.E3
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.f0,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f0,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.na,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cI,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r2,500,f2,f0))
d3=D.n9
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.f0,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bk,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vk:D.cu
c1.push(new C.eQ(b4,D.a88,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bt,A.aG,4279310375,A.bn,e4,D.bk,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n9
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.f0,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f0,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.na,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r2,450,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TO
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.f0,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.f0,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bk,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bk,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jn,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n9}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dp,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i5i(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dA8[A.o.F(b1,6)]:s
n.push(new C.m1(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cr(e4,e4,e4,e4,D.E2,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fPc(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fPc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.E5)
n=e.q(0,D.Jq)
if(!o&&!n){u=D.a75
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fPf(o,s[r],n,$.i9e,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fPc)
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
return B.i($async$fPc,v)},
fOc(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fOc=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ip2(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPp(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fOc)
case 3:u=s.aPL(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOc,v)},
bEW(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEW=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.ip3(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aiq(i,"colorful")
t=C.ip1(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPp(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i3),$async$bEW)
case 3:u=o.aPL(m,f,h,g,D.ee3,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEW,v)},
aPp(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPp=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vW(null,""),$async$aPp)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nm(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rh(t,d,g,"slides",null),$async$aPp)
case 7:q=i
p=q.b
if(p!=null){o=C.aiq(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LY(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPp,v)},
aPL(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPL=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.E5)||e.q(0,D.Jq)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d2(e,x.Q)
t.W(0,D.E5)}w=6
return B.b(C.fPc(d,t),$async$aPL)
case 6:s=k
w=4
break
case 5:s=D.a75
case 4:t=d.c
w=A.d.aV(t,new C.fqZ())?7:9
break
case 7:r=$.hEA
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dL(r,x.aP),$async$aPL)
case 10:q=k
p=q!=null?A.X.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hCO(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hXS(new C.asT(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fr_(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k9<ci.E,n>")
t=B.C(new B.k9(e,new C.fr0(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TR)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPL,v)},
hh2(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5Q[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
itJ(d){return B.bU(A.L,null,new C.h2Y(),d,!0,!0,!0,null,!1,!1,x.I)},
i4h(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cR.gcu().aN(d)},
itI(d,e,f){return B.bU(A.L,null,new C.h2X(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hh3(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hh4(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fyq(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fyr(w))?w:""},
hzB(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hEy(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aiq(a1==null?"":a1,a0),a3=C.aiq(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nA(new B.Y(r,new C.fUE(t[p]),q))
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
g=B.C(new B.Y(k,new C.fUF(),v),r)
A.d.aZ(g,new C.fUG())
if(g.length===0)continue
f=new C.fUH(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ipm(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aLc
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.efX
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.efY
return null},
hzc(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.i.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.i.cD(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ip6(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oT
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cX)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.i.D(m*0.85,10,120)
break
case 1:j=A.i.D(m*1.15,10,120)
if(C.hzc(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hzc(n,i,v,u))if(n.w>10){f=h+1
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
ip4(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aiq(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5Q[r]
if(q.b===s)w.J(0,q)}}v=C.hh3(e)
u=C.hh4(e)
p=C.hCO(n,D.a75,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fUA(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k9<ci.E,n>")
o=B.C(new B.k9(w,new C.fUB(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TR)
return p},
itv(d,e,f){return B.bU(A.L,null,new C.h2a(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i3E(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e5()
s.d_(t)
w=D.cMG[s.az(10)]
v=new C.eq3(s)
u=x.N
return new C.eq2(w,s.az(4),J.fs(v.$1$2(D.ddB,1,x.ff)),w.r[s.az(3)],v.$1$2(D.dvh,2+s.az(2),u),v.$1$2(D.dnJ,2,u),v.$1$2(D.dyz,4,x.fP),t)},
i5i(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e5()
a1.d_(a5.w+a3*13)
w=new C.fn6(a4)
v=new C.fn8(a4,d)
u=new C.fn7(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cX){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.f0,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a30(a0,52),"lux_spot",a5.xf(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bk,0,0,1,1,0,"lux_back",a5.xf(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bk,0,0,1,1,0,"lux_back2",a5.aHo(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.022,0.038,0.956,0.924,0,g,a5.xf(0,f),D.dp,150,C.a30(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.018,0.032,0.964,0.936,0,g,a5.xf(0,f),D.dp,120,C.a30(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dp,260,C.a30(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bk,0,0,1,1,0,"lux_filigree",a5.xf(0,"filigree"),D.dp,200))
break
default:a2.push(w.$10$anim$delay(D.bk,0.08,0.06,0.84,0.004,C.a30(a0,208),"lux_rule",a5.aHo(0,"shimmer",r),D.vj,150))
a2.push(w.$10$anim$delay(D.bk,0.08,0.936,0.84,0.004,C.a30(a0,144),"lux_rule2","",D.Jn,220))}l=!A.d.aV(a2,new C.fn5())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xf(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xf(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a30(r,242)
j=a5.xf(0,"orbit")
i=s===D.bk?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r2,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.f0,t-0.007,0.9495,0.014,0.025,C.a30(r,242),"lux_g2",a5.xf(0,"orbit"),D.r2,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bk,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bk,0,0,1,1,0,"lux_velvet",a5.xf(0,"velvet")))},
oa:function oa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fUC:function fUC(d){this.a=d},
fUD:function fUD(){},
wA:function wA(d,e){this.a=d
this.b=e},
a9j:function a9j(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asT:function asT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fUv:function fUv(){},
fUy:function fUy(){},
fSt:function fSt(){},
fSu:function fSu(){},
fSv:function fSv(d){this.a=d},
fMP:function fMP(){},
fMS:function fMS(d,e,f){this.a=d
this.b=e
this.c=f},
fMR:function fMR(d,e){this.a=d
this.b=e},
fMQ:function fMQ(d,e){this.a=d
this.b=e},
fMO:function fMO(d){this.a=d},
fPf:function fPf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fPd:function fPd(d){this.a=d},
fPe:function fPe(d){this.a=d},
fqZ:function fqZ(){},
fr_:function fr_(){},
fr0:function fr0(){},
h2Y:function h2Y(){},
a1M:function a1M(d){this.a=d},
aJk:function aJk(d,e,f,g,h){var _=this
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
f9M:function f9M(d,e,f){this.a=d
this.b=e
this.c=f},
f9N:function f9N(d,e){this.a=d
this.b=e},
f9K:function f9K(d,e){this.a=d
this.b=e},
f9L:function f9L(d,e){this.a=d
this.b=e},
f9J:function f9J(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f9E:function f9E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9I:function f9I(d,e){this.a=d
this.b=e},
f9D:function f9D(d,e){this.a=d
this.b=e},
f9H:function f9H(d,e){this.a=d
this.b=e},
f9C:function f9C(d,e){this.a=d
this.b=e},
f9F:function f9F(d){this.a=d},
f9G:function f9G(d,e){this.a=d
this.b=e},
f9s:function f9s(d,e){this.a=d
this.b=e},
f9t:function f9t(d,e){this.a=d
this.b=e},
f9v:function f9v(d){this.a=d},
f9w:function f9w(d){this.a=d},
f9x:function f9x(d){this.a=d},
f9y:function f9y(d){this.a=d},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9z:function f9z(d,e){this.a=d
this.b=e},
fa_:function fa_(d){this.a=d},
fa0:function fa0(d){this.a=d},
f9Z:function f9Z(d){this.a=d},
fa1:function fa1(d){this.a=d},
f9Y:function f9Y(d){this.a=d},
fa3:function fa3(d){this.a=d},
f9X:function f9X(d,e){this.a=d
this.b=e},
fa4:function fa4(d){this.a=d},
f9W:function f9W(d,e){this.a=d
this.b=e},
fa5:function fa5(d){this.a=d},
f9V:function f9V(d){this.a=d},
fa6:function fa6(d){this.a=d},
f9U:function f9U(d,e){this.a=d
this.b=e},
fa7:function fa7(d){this.a=d},
f9T:function f9T(d,e){this.a=d
this.b=e},
fa8:function fa8(d){this.a=d},
f9S:function f9S(d){this.a=d},
fa9:function fa9(d,e){this.a=d
this.b=e},
f9R:function f9R(d,e){this.a=d
this.b=e},
faa:function faa(d){this.a=d},
fa2:function fa2(d){this.a=d},
f9Q:function f9Q(d,e){this.a=d
this.b=e},
f9A:function f9A(d,e,f){this.a=d
this.b=e
this.c=f},
f9B:function f9B(d,e,f){this.a=d
this.b=e
this.c=f},
f9P:function f9P(d,e){this.a=d
this.b=e},
f9O:function f9O(d,e){this.a=d
this.b=e},
h2X:function h2X(d,e){this.a=d
this.b=e},
a1L:function a1L(d,e,f){this.c=d
this.d=e
this.a=f},
aJj:function aJj(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f9l:function f9l(d){this.a=d},
f9m:function f9m(d){this.a=d},
f9n:function f9n(d,e){this.a=d
this.b=e},
f9o:function f9o(d){this.a=d},
f9p:function f9p(d){this.a=d},
f9k:function f9k(d,e){this.a=d
this.b=e},
f9q:function f9q(d,e){this.a=d
this.b=e},
f9r:function f9r(d,e){this.a=d
this.b=e},
fyr:function fyr(d){this.a=d},
b3t:function b3t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFR:function aFR(d,e,f){this.c=d
this.d=e
this.a=f},
bmF:function bmF(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
eq5:function eq5(d){this.a=d},
eq4:function eq4(){},
bk8:function bk8(d,e){this.b=d
this.a=e},
fUE:function fUE(d){this.a=d},
fUF:function fUF(){},
fUG:function fUG(){},
fUH:function fUH(d){this.a=d},
atq:function atq(d,e){this.a=d
this.b=e},
fUA:function fUA(){},
fUB:function fUB(){},
h2a:function h2a(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f){this.c=d
this.d=e
this.a=f},
aDm:function aDm(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dsV:function dsV(d){this.a=d},
dsW:function dsW(d){this.a=d},
dsX:function dsX(d,e){this.a=d
this.b=e},
dt_:function dt_(d){this.a=d},
dt0:function dt0(d,e){this.a=d
this.b=e},
dsZ:function dsZ(d,e){this.a=d
this.b=e},
dt1:function dt1(d){this.a=d},
dsY:function dsY(d,e){this.a=d
this.b=e},
bvl:function bvl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eq2:function eq2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eq3:function eq3(d){this.a=d},
fn6:function fn6(d){this.a=d},
fn8:function fn8(d,e){this.a=d
this.b=e},
fn7:function fn7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fn5:function fn5(){},
aNZ:function aNZ(){},
hfS(d){var w,v,u
try{w=A.X.aQ(0,d,null)
if(x.f.b(w)){v=B.wt(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b3p:function b3p(d,e,f){this.c=d
this.d=e
this.a=f},
bof:function bof(d,e){this.c=d
this.a=e},
ili(d){return A.d.dP(D.Is,new C.fNW(d),new C.fNX())},
ilj(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Is,new C.fNY(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k0("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lu:function lu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNW:function fNW(d){this.a=d},
fNX:function fNX(){},
fNY:function fNY(d){this.a=d},
nc(d,e,f,g,h){return new C.Fx(f,g,d)},
i6I(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fpl(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Lm
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cu,D.fj,j,k,l)},
hCB(d,e){var w
C.i6I(d)
w=A.d.dP($.bGW(),new C.fLM(e),new C.fLN())
$.Lm=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lm=""}d.z=B.bq(d.z,!0,x.F)},
Fx:function Fx(d,e,f){this.a=d
this.b=e
this.e=f},
fpl:function fpl(){},
fU6:function fU6(){},
fU7:function fU7(){},
fU8:function fU8(){},
fUj:function fUj(){},
fUo:function fUo(){},
fUp:function fUp(){},
fUq:function fUq(){},
fUr:function fUr(){},
fUs:function fUs(){},
fUt:function fUt(){},
fUu:function fUu(){},
fU9:function fU9(){},
fUa:function fUa(){},
fUb:function fUb(){},
fUc:function fUc(){},
fUd:function fUd(){},
fUe:function fUe(){},
fUf:function fUf(){},
fUg:function fUg(){},
fUh:function fUh(){},
fUi:function fUi(){},
fUk:function fUk(){},
fUl:function fUl(){},
fUm:function fUm(){},
fUn:function fUn(){},
fLM:function fLM(d){this.a=d},
fLN:function fLN(){},
j6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bk,4280172719,2,m,n,0,"",o,D.cX,p,q,r)},
DH(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cu,D.fj,j,k,l)},
bFF(){var w=new B.V(Date.now(),0,!1)
return A.iT[B.bM(w)-1]+" "+B.bV(w)+", "+B.bD(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bD1(d){return new B.j2((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
icg(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aoo(A.cK.aN(A.d.gam(d.split(","))))
return w}catch(v){return null}},
ick(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fxK(),x.dv).aO(0,"\n")},
icj(d){switch(d.a){case 2:return A.nW
case 1:case 5:return A.fmR
default:return A.Ve}},
icd(d){switch(d.a){case 2:return A.vU
case 1:case 5:return A.Xh
default:return A.adr}},
ich(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bD1(u),q=(s&255)===0?v:C.bD1(d.ch),p=A.i.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nV(q,p,A.l8)
w=new B.q_(t,t,t,t)}switch(d.ax.a){case 1:return B.lR(v,v,v,new B.kT(r,w,v,A.aeJ,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xF(B.lR(v,v,q,v,p+0.4,v,v,v))
default:return B.lR(v,v,v,new B.kT(r,w,B.w3(4),A.i8,v),v,v,v,v)}},
icf(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fj?0.4:12,g=A.i.D(d.e*e,h,e),f=A.i.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.icd(d.as)
v=A.i.D(d.w*(e/960),3,96)
u=C.ick(d)
t=C.bD1(d.Q)
s=d.x.a>=700?A.eC:A.wy
r=d.y===A.cI?A.z4:A.ao3
q=d.z
p=new B.DT(w,l,l,B.fc(u,l,l,l,B.hc(l,t,1===q.a?A.aUL:A.aUK,l,l,l,l,l,l,A.dF,l,l,v,r,s,l,!0,l,l,l,l),C.icj(d.as)))
break
case 1:case 4:o=C.icg(d.at)
n=i===D.lT&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xF(B.fc(w,l,l,l,B.hc(l,A.tv,l,l,l,l,l,l,l,A.dF,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IQ(o,n?A.aeF:A.XI,l,l)
break
case 3:w=new B.nV(A.JK,1,A.l8)
u=B.w3(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lR(A.vU,B.fc(t,l,l,l,B.hc(l,D.eur,l,l,l,l,l,l,l,A.dF,l,l,11,l,A.eC,l,!0,l,l,l,l),A.nW),l,new B.kT(E.aME,new B.q_(w,w,w,w),u,A.i8,l),l,l,l,l)
break
case 2:p=C.ich(d,e)
break
case 5:p=C.ice(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.htT(-w,p)
w=i===D.cX
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.auf(m/255,p)}if(w)return new F.wF(k,l,j,l,new B.TF(new B.kS(g,g,f,1/0),p))
if(i===D.lt){i=new B.nV(A.JK,1,A.l8)
i=B.lR(A.vU,p,l,new B.kT(A.pP,new B.q_(i,i,i,i),B.w3(4),A.i8,l),l,l,D.bGX,l)}else i=p
return new F.wF(k,l,j,l,new B.fV(g,f,i))},
ici(d,e,f,g){var w,v=null,u=C.bD1(d.e),t=d.f
t=B.a([F.hst(t!=null?B.lR(v,v,v,new B.kT(v,v,v,A.i8,new B.aYV(E.Xj,A.adm,B.a([u,C.bD1(t)],x.cR),v)),v,v,v,v):B.lR(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fxJ(f,g),B.U(w).k("N<1,fi>")))
return F.cAb(t)},
hh6(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hh6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5u(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XU(A.xb,A.JH,D.bI8,null,null,null,!1,null)
o=new B.Cw(o,new C.fUN(607,787,p,d))
o.Ni(n,null)
r.push(o)}u=n.jI(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hh6,v)},
ice(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hfS(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gal9()
if(h==null)h=A.aBQ
j=B.u1(4279308564)
w=B.w3(18)
v=new B.nV(B.u1(4287531653),3,A.l8)
u=i.length===0?"My links":i
u=B.a([B.xF(B.fc(u,m,m,m,B.hc(m,A.pP,m,m,m,m,m,m,m,A.dF,m,m,12,m,A.eC,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xF(B.fc(A.a.i(l.c),m,m,m,D.fuC,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gI(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u1(4280690220)
o=new B.aaE(8,8)
n=A.a.i(r.b)
u.push(new B.ob(D.bB_,new C.ayA(new C.ajz(q),B.lR(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fx2,A.nW),m,new B.kT(p,m,new B.ak2(o,o,o,o),A.i8,m),m,m,D.bHp,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xF(B.fc(k,m,m,m,D.fwg,m))
u.push(new C.ayA(C.hLD(k),t))}return B.lR(m,B.zy(u,A.NE,A.lS),m,new B.kT(j,new B.q_(v,v,v,v),w,A.i8,m),m,m,D.bBQ,m)},
fxK:function fxK(){},
fxJ:function fxJ(d,e){this.a=d
this.b=e},
fUN:function fUN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aid(d){var w,v
for(w=0;w<32;++w){v=D.Ij[w]
if(v.a===d)return v}return null},
hww(d){var w,v,u=A.a.co(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cK.aN(A.a.b2(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hFQ(d,e){return B.a6(d,!1).ce(B.ec(new C.h0A(e),!0,null,x.fB))},
hFP(d,e){return B.bU(A.L,null,new C.h0z(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fo:function Fo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Or:function Or(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm0:function bm0(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.a9$=f
_.c=_.a=null},
e3y:function e3y(d){this.a=d},
e3x:function e3x(d,e,f){this.a=d
this.b=e
this.c=f},
e3w:function e3w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btS:function btS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8y:function f8y(d,e){this.a=d
this.b=e},
bgW:function bgW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1j:function b1j(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfc:function cfc(){},
cfd:function cfd(d){this.a=d},
cfe:function cfe(d,e,f){this.a=d
this.b=e
this.c=f},
cff:function cff(d,e,f){this.a=d
this.b=e
this.c=f},
h0A:function h0A(d){this.a=d},
a_H:function a_H(d,e){this.c=d
this.a=e},
aBJ:function aBJ(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
di8:function di8(d,e,f){this.a=d
this.b=e
this.c=f},
did:function did(d){this.a=d},
die:function die(d){this.a=d},
dic:function dic(d){this.a=d},
dif:function dif(d){this.a=d},
dib:function dib(d,e){this.a=d
this.b=e},
dig:function dig(d){this.a=d},
dia:function dia(d){this.a=d},
dih:function dih(d){this.a=d},
di9:function di9(d,e){this.a=d
this.b=e},
dii:function dii(d,e){this.a=d
this.b=e},
h0z:function h0z(d){this.a=d},
h0y:function h0y(d){this.a=d},
h0x:function h0x(d,e,f){this.a=d
this.b=e
this.c=f},
h0w:function h0w(d,e){this.a=d
this.b=e},
aNt:function aNt(){},
itH(d){return B.bU(A.L,null,new C.h2W(),d,!0,!0,!0,null,!1,!1,x.N)},
h2W:function h2W(){},
a01:function a01(d){this.a=d},
bis:function bis(d){this.d=d
this.c=this.a=null},
doX:function doX(d){this.a=d},
doY:function doY(d,e){this.a=d
this.b=e},
doZ:function doZ(d){this.a=d},
i8q(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b1(w)}return D.yu},
inf(d){var w=7000
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
ine(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i8q(d)
switch(q){case"shimmer":return B.of(A.LR,g,new C.fRn(p,A.i.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bhN(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dN(B.e1(A.A,B.d3(F.bXg(g,new B.Eu(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bhu(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.i.D(0.55+s*0.45,0,1)
return B.d3(B.eN(A.A,e*0.5,B.e1(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n2(Math.sin(e)*0.3)
return B.dN(B.fz(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bqC(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bcj(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bbX(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bxI(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.buG(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.btO(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bgP(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ac,A.f,B.a([B.bS(0,new B.du(!0,B.e1(A.A,new B.bN(new B.p(r,r,r,r,r,new B.bY(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bi,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eN(A.A,s*0.06,B.e1(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fRn:function fRn(d,e){this.a=d
this.b=e},
bhN:function bhN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhu:function bhu(d,e,f){this.b=d
this.c=e
this.a=f},
bqC:function bqC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcj:function bcj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbX:function bbX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxI:function bxI(d,e,f){this.b=d
this.c=e
this.a=f},
buG:function buG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btO:function btO(d,e,f){this.b=d
this.c=e
this.a=f},
bgP:function bgP(d,e,f){this.b=d
this.d=e
this.a=f},
dhQ:function dhQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yg:function yg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fRq(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.lt},
ink(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fRr())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aSx(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
inj(d,e){var w,v,u,t,s,r=d.db
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
d.e=A.i.D(s,0.06,u)}else{d.w=A.i.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.i.D(r*(d.w*0.001)+0.028,0.06,u)},
ahS(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahS=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fJM(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dW,null,new C.fJN(e),d,!0,!0,!1,A.lU,!1,!1,x.N),$async$ahS)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hhO(d),$async$ahS)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.HF(d,"Search states\u2026","",A.kb,"Choose state"),$async$ahS)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hgE(s)
if(p==null)p=A.d.gH(D.SJ)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fRs(p.d)
k=x.u
j=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cE(),l,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.cu,D.lT,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dt(i,0.016,D.lu,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dt(0,0.058,D.f0,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dt(0,0.058,D.f0,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lx("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lx("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hdk(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCv("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2E("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2E("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2E("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2E("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCv("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dt(m,0.082,D.bk,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.er(A.bn,!1,i,A.aG,"marriage_field_utangulizi:"+A.i.ad(0.78,3),4280640491,9.5,A.bt,A.cB,"",0.074,g,null,"","",0,!1,"",0,D.bk,4280172719,2,y.O,0,0,"",D.cu,D.cX,0.78,0.11,0.388))
A.d.v(k,C.hdk(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCv("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hyC("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hyC("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2E("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2E("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bCu("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bCu("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCv("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lx("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lx("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bCu("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bCu("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCv("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2E("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bCu("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2E("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hdk(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lx("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lx("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cr(null,null,null,null,D.oT,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.t_(m,null,0,0,j,n,D.r1,"","","Hati ya Ndoa",D.dp)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahS,v)},
fRr:function fRr(){},
fJM:function fJM(){},
fJN:function fJN(d){this.a=d},
fJK:function fJK(d){this.a=d},
fJL:function fJL(d){this.a=d},
ibF(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
ibE(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ne
case"lineThrough":return A.xk
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eQ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hAH(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Ss[w]
if(v.b===u)return v}return D.dp},
i7O(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d45[w]
if(v.b===u)return v}return D.cX},
ies(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dw4[w]
if(v.b===u)return v}return D.bk},
t_(d,e,f,g,h,i,j,k,l,m,n){return new C.m1(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hre(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i9W(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.i.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.i.M(s)
r=C.hAH(d.h(0,"transition"))
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
else{n=J.dd(n,x.f)
n=B.cF(n,new C.ckO(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.t_(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i9W(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.atr[w]
if(v.b===u)return v}return D.n9},
Cr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.hQ(p,t,a1,h,i,w,a0==null?B.a([C.t_(4294967295,null,0,0,null,C.cE(),D.r1,"","","",D.dp)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xh(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i5E(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.i.M(t),1,120)
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
o=C.kN(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kN(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b8(f,new C.ckB(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b8(e,new C.ckC(),x.N)
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
g=B.cF(g,new C.ckD(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cr(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.t_(4294967295,a3,0,0,a3,C.cE(),D.r1,"","","",D.dp)],x.g):g,v,p,o,s)},
kN(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i5E(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dwW[w]
if(v.b===u)return v}return D.E2},
cE(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
cl4(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.E3){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bt,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.cu,D.cX,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bt,A.cB,"",0.12,u,p,"","",0,!1,"",0,D.bk,m,2,"Click to add subtitle",0,0,"",D.cu,D.cX,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,32,A.bt,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.cu,D.cX,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bn,!0,f.e.l(),A.aG,"",n,20,A.bt,A.cB,"",0.68,u,p,"","",0,!1,"",0,D.bk,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cu,D.cX,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Two Column Slide",0,0,"",D.cu,D.cX,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bk,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cu,D.cX,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bk,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cu,D.cX,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bt,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bk,m,2,"Section Header",0,0,"",D.cu,D.cX,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Compare",0,0,"",D.cu,D.cX,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.er(A.bn,!1,l,A.aG,"",t.j(0.12).l(),24,A.bt,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bk,t.l(),2,"",0,0,"",D.cu,D.fj,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bk,m,2,"Option A",0,0,"",D.cu,D.cX,0.38,0.08,0.26)
q=C.cE()
t=C.er(A.bn,!1,l,A.aG,"",t.j(0.06).l(),24,A.bt,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bk,t.j(0.5).l(),2,"",0,0,"",D.cu,D.fj,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bk,m,2,"Option B",0,0,"",D.cu,D.cX,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bt,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bk,m,2,"TERM / QUESTION",0,0,"",D.cu,D.cX,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bt,A.cB,"",0.35,u,p,"","",0,!1,"",0,D.bk,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cu,D.cX,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,28,A.bt,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bk,m,2,"Quiz Question",0,0,"",D.cu,D.cX,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,20,A.bt,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bk,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cu,D.cX,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,26,A.bt,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bk,m,2,"Worksheet / Assignment",0,0,"",D.cu,D.cX,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,18,A.bt,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bk,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cu,D.cX,0.88,0.06,0.16)],x.u))
break}},
hY1(d){return A.d.dP(D.a5s,new C.cl5(d),new C.cl6())},
hXZ(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c7(v,C.Xh(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h9A(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cl0(t)
for(w=J.aT(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b7<2>")
u=B.C(new B.b7(t,w),w.k("M.E"))
A.d.aZ(u,new C.cl_())
return u},
hrh(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ckW()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
asU(d){return C.hXX(d)},
hXX(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ckZ()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3Q(m),$async$asU)
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
return B.b(B.aA(),$async$asU)
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
case 11:o=l.$1($.hrg.h(0,m))
n=C.h9A(C.h9A(j,r),o)
if(n.length===0){u=C.hrh(C.hrh(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asU,v)},
ckV(d){return C.hXW(d)},
hXW(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckV)
case 7:r=f
q=r.tT("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jB(q,B.U(q).c)
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
return B.i($async$ckV,v)},
b3v(d,e){return C.hXY(d,e)},
hXY(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3v=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3v)
case 6:s=g
q=s.tT("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mg(r,J.ad(r)-500):r
w=7
return B.b(s.aC("StringList","ngmy_slides_deleted_"+p,o),$async$b3v)
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
return B.i($async$b3v,v)},
Xi(d,e){return C.hY_(d,e)},
hY_(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xi=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hrf.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asU(a3),$async$Xi)
case 5:p=a6
case 4:w=6
return B.b(C.ckV(a3),$async$Xi)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b7<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b7(n,m),new C.cl1(o),l),l.k("M.E"))
A.d.aZ(e,new C.cl2())
$.hrf.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.cl3(),n),n.k("ak.E"))
r=A.X.aw(n,null)
$.hrg.n(0,a0,r)
t=8
w=11
return B.b(B.aiF(a0,r),$async$Xi)
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
return B.b(B.aA(),$async$Xi)
case 16:q=a6
w=17
return B.b(q.aC("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xi)
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
return B.i($async$Xi,v)},
JK:function JK(d,e){this.a=d
this.b=e},
asS:function asS(d,e){this.a=d
this.b=e},
vj:function vj(d,e){this.a=d
this.b=e},
mV:function mV(d,e){this.a=d
this.b=e},
hG:function hG(d,e){this.a=d
this.b=e},
eQ:function eQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m1:function m1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ckP:function ckP(){},
ckQ:function ckQ(){},
ckO:function ckO(){},
hQ:function hQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ckE:function ckE(){},
ckF:function ckF(){},
ckB:function ckB(){},
ckC:function ckC(){},
ckD:function ckD(){},
k0:function k0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cl5:function cl5(d){this.a=d},
cl6:function cl6(){},
cl0:function cl0(d){this.a=d},
cl_:function cl_(){},
ckW:function ckW(){},
ckX:function ckX(){},
ckY:function ckY(){},
ckZ:function ckZ(){},
cl1:function cl1(d){this.a=d},
cl2:function cl2(){},
cl3:function cl3(){},
inx(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fS2(e,v,d,B.aR(w))
w.$1(new C.fRZ())
w.$1(new C.fS_())
w.$1(new C.fS0())
w.$1(new C.fS1())
return v},
fS2:function fS2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRZ:function fRZ(){},
fS_:function fS_(){},
fS0:function fS0(){},
fS1:function fS1(){},
b3s:function b3s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckK:function ckK(d){this.a=d},
ckJ:function ckJ(){},
ckL:function ckL(){},
ckM:function ckM(d,e){this.a=d
this.b=e},
ckN:function ckN(d){this.a=d},
apW:function apW(d,e){this.c=d
this.a=e},
blJ:function blJ(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dQt:function dQt(){},
aNc:function aNc(){},
ckS(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fk0)
u=!1
w=1
break}u=B.ld(!1,d,t,!1,null,A.a8c,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckS,v)},
hXU(d){var w=A.d.bj(D.Is,new C.ckT(d))
if(w<0)return!0
return w>=4},
hXV(d){var w=A.d.bj($.bGW(),new C.ckU(d))
if(w<0)return!0
return w>=5},
ckT:function ckT(d){this.a=d},
ckU:function ckU(d){this.a=d},
ipg(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xu()
$.pY().pd(t,new C.fUU(s),!0)
u=B.a([B.BZ(v,A.pQ,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ap(v,B.r(v,B.d(e,v,v,v,v,v,v,D.fv5,v,v,v),A.f,v,v,new B.p(A.aU,v,v,w,v,v,A.n),v,v,v,v,A.n0,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b1,A.t,u,v)},
fUU:function fUU(d){this.a=d},
ioS(){return C.hh_()},
ilH(){return C.bET()},
inQ(){return C.hgR()},
aRA(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fU_(d,f),$async$aRA)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRA,v)},
fU_(d,e){var w=0,v=B.j(x.H),u
var $async$fU_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bD2
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.L,null,new C.fU0(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fU_)
case 2:return B.h(null,v)}})
return B.i($async$fU_,v)},
fU0:function fU0(d,e){this.a=d
this.b=e},
aeJ:function aeJ(d,e,f){this.c=d
this.d=e
this.a=f},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCs:function eCs(d){this.a=d},
af_:function af_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3r(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3q(g,m,f,d,e,h,l,k,j,o,i,null)},
hDX(d){return B.cq(new C.fRY(d))},
hh1(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ip_(d){if(d===D.cu)return"None"
return C.hh1(d)},
bDy(d,e,f,g){return C.iez(d,e,f,g)},
iez(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDy=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hdD&&t.pY())t.eA()
$.hdD=!0
s.a=null
w=3
return B.b(B.hL(A.bp,!0,"Animation preview",d,new C.fAu(s,e,g,f),null,A.eJ,!0,x.H),$async$bDy)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hdD=!1
case 1:return B.h(u,v)}})
return B.i($async$bDy,v)},
h3K(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h3K=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aF(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.cu
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hh1(f)+" Slide transition preview"
s=s?Ah.GK:A.qx
w=3
return B.b(C.bDy(d,s,new B.a5(t,t*0.56,B.bx(B.l(14),new C.aKJ(f,null),A.aq),null),r),$async$h3K)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h3K,v)},
hDd(d,e,f){var w,v,u=null,t=A.cx.aA(0,A.i.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dN(B.d3(f,t),new B.o((1-t)*48,0))
case 3:return B.dN(B.d3(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dN(B.d3(f,t),new B.o(0,(1-t)*36))
case 5:return B.dN(B.d3(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.e1(A.A,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e1(A.A,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n2((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dN(B.d3(f,t),new B.o((1-t)*24,0))}},
bGq(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aF(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.cu
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hh1(f)+" Element animation preview"
s=s?Ah.GK:A.qx
w=3
return B.b(C.bDy(d,s,new B.a5(t,t*0.62,B.bx(B.l(14),new C.aBo(f,null),A.aq),null),r),$async$bGq)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGq,v)},
ioZ(d){var w,v,u,t,s=$.ahk.W(0,d)
if(s!=null){$.ahk.n(0,d,s)
return s}w=A.cK.aN(A.a.b2(d,A.a.co(d,",")+1))
$.ahk.n(0,d,w)
v=$.heu=$.heu+w.length
u=B.a4($.ahk).k("cx<1>")
for(;;){if(!(v>41943040&&$.ahk.a>1))break
t=new B.cx($.ahk,u).gae(0)
if(!t.C())B.bj(B.fp())
v-=$.ahk.W(0,t.gR(0)).length
$.heu=v}return w},
ioE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aB(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cL,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TB(s,A.u))
v.push(new B.eo(n,l,l,A.cL,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TB(t,A.u))
v.push(new B.eo(n,l,l,A.cL,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TB(u,A.cB))
v.push(new B.eo(n,l,l,A.cL,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3P(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aG($.R().r,A.ai,n,n,B.a([],m))
m.E(new B.jS(e))
return m
case"rounded":m=new B.aG($.R().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.j8(B.bn(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aG($.R().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bu())
return m
case"hexagon":w=$.R()
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
case"diamond":m=new B.aG($.R().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbw().a,e.b))
m.E(new B.aq(e.c,e.gbw().b))
m.E(new B.aq(e.gbw().a,e.d))
m.E(new B.aq(e.a,e.gbw().b))
m.E(new B.bu())
return m
case"arch":m=new B.aG($.R().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdy(new B.o(t,p),new B.aN(s,s))
m.E(new B.aq(t,u))
m.E(new B.bu())
return m
default:m=new B.aG($.R().r,A.ai,n,n,B.a([],m))
m.E(new B.ox(e))
return m}},
fPu(d,e,f){return B.cq(new C.fPv(D.fca.q(0,d),d,f,e))},
b3q:function b3q(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckI:function ckI(d){this.a=d},
ckH:function ckH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckG:function ckG(){},
b3n:function b3n(d,e){this.b=d
this.a=e},
fRY:function fRY(d){this.a=d},
fRX:function fRX(d,e){this.a=d
this.b=e},
fAu:function fAu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAs:function fAs(d){this.a=d},
fAt:function fAt(d,e){this.a=d
this.b=e},
aKJ:function aKJ(d,e){this.c=d
this.a=e},
bxc:function bxc(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fh8:function fh8(d,e,f){this.a=d
this.b=e
this.c=f},
aLq:function aLq(d,e){this.b=d
this.a=e},
Wo:function Wo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blX:function blX(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
e1h:function e1h(d){this.a=d},
e1g:function e1g(d){this.a=d},
e1f:function e1f(d){this.a=d},
JJ:function JJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckA:function ckA(d){this.a=d},
ckz:function ckz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBo:function aBo(d,e){this.c=d
this.a=e},
bgf:function bgf(){this.d=0
this.c=this.a=null},
df2:function df2(d){this.a=d},
df1:function df1(d){this.a=d},
a91:function a91(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmD:function bmD(d,e){var _=this
_.d=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
epM:function epM(d,e,f){this.a=d
this.b=e
this.c=f},
b1m:function b1m(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhs:function bhs(d,e,f){this.b=d
this.c=e
this.a=f},
bsI:function bsI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f62:function f62(){},
fPv:function fPv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btL:function btL(d,e,f){this.b=d
this.c=e
this.a=f},
aNs:function aNs(){},
aNX:function aNX(){},
aPg:function aPg(){},
fSZ(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fSZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xQ.cq().MH(D.dtT,A.uF,!0),$async$fSZ)
case 3:r=e
if(r==null||J.cs(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ioy(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSZ,v)},
ioy(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a9k(d,new B.a1o(A.cR.gcu().aN(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.igq(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a9k(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.ca.Lt(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a9k(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
igq(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cGC().cQu(B.rK(d,A.it,o,o),o,o,!1).cSp(0,"word/document.xml")
if(n==null)return""
w=n.d_z()
v=A.ca.Lt(0,w==null?$.hGm():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cF(q,new C.fDB(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9k:function a9k(d,e,f){this.a=d
this.b=e
this.c=f},
fDB:function fDB(){},
hY0(d,e,f,g,h,i,j,k,l){return new C.OX(l,e,d,g,f,i,h,j,k,null)},
OX:function OX(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGg:function aGg(d,e,f,g,h,i,j,k,l){var _=this
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
eIE:function eIE(d){this.a=d},
eIC:function eIC(){},
eID:function eID(d){this.a=d},
eF1:function eF1(){},
eF2:function eF2(){},
eF3:function eF3(d,e){this.a=d
this.b=e},
eGC:function eGC(d){this.a=d},
eGq:function eGq(){},
eGr:function eGr(){},
eEp:function eEp(){},
eHK:function eHK(d){this.a=d},
eIA:function eIA(d,e){this.a=d
this.b=e},
eGA:function eGA(d,e){this.a=d
this.b=e},
eIn:function eIn(d){this.a=d},
eIo:function eIo(){},
eIp:function eIp(){},
eIq:function eIq(d){this.a=d},
eIr:function eIr(){},
eDO:function eDO(d){this.a=d},
eIB:function eIB(){},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eDM:function eDM(d){this.a=d},
eDN:function eDN(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d,e,f){this.a=d
this.b=e
this.c=f},
eG7:function eG7(d){this.a=d},
eFI:function eFI(){},
eFH:function eFH(d){this.a=d},
eFF:function eFF(){},
eFE:function eFE(d){this.a=d},
eFG:function eFG(){},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eFP:function eFP(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eDQ:function eDQ(){},
eDR:function eDR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG0:function eG0(){},
eG1:function eG1(d,e){this.a=d
this.b=e},
eFZ:function eFZ(d,e,f){this.a=d
this.b=e
this.c=f},
eG_:function eG_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFT:function eFT(d,e,f){this.a=d
this.b=e
this.c=f},
eFU:function eFU(d,e,f){this.a=d
this.b=e
this.c=f},
eFV:function eFV(d){this.a=d},
eFW:function eFW(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eG2:function eG2(d){this.a=d},
eGl:function eGl(){},
eGm:function eGm(){},
eGn:function eGn(){},
eGo:function eGo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGi:function eGi(d){this.a=d},
eGk:function eGk(){},
eGj:function eGj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGg:function eGg(d,e,f){this.a=d
this.b=e
this.c=f},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGp:function eGp(){},
eFR:function eFR(d,e){this.a=d
this.b=e},
eE6:function eE6(){},
eE7:function eE7(d,e,f){this.a=d
this.b=e
this.c=f},
eE8:function eE8(d){this.a=d},
eE9:function eE9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eE5:function eE5(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGt:function eGt(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGw:function eGw(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e){this.a=d
this.b=e},
eE2:function eE2(d){this.a=d},
eGE:function eGE(d,e,f){this.a=d
this.b=e
this.c=f},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eGD:function eGD(d,e,f){this.a=d
this.b=e
this.c=f},
eDP:function eDP(d){this.a=d},
eEq:function eEq(){},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(d,e,f){this.a=d
this.b=e
this.c=f},
eHL:function eHL(d,e,f){this.a=d
this.b=e
this.c=f},
eCL:function eCL(d){this.a=d},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCv:function eCv(d){this.a=d},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eDc:function eDc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDi:function eDi(d){this.a=d},
eDf:function eDf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDg:function eDg(d){this.a=d},
eDe:function eDe(){},
eDb:function eDb(d,e,f){this.a=d
this.b=e
this.c=f},
eGf:function eGf(d,e){this.a=d
this.b=e},
eIu:function eIu(d){this.a=d},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIw:function eIw(d){this.a=d},
eIx:function eIx(d,e,f){this.a=d
this.b=e
this.c=f},
eIt:function eIt(d){this.a=d},
eI0:function eI0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI_:function eI_(d,e,f){this.a=d
this.b=e
this.c=f},
eHZ:function eHZ(){},
eHY:function eHY(d,e,f){this.a=d
this.b=e
this.c=f},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e,f){this.a=d
this.b=e
this.c=f},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHW:function eHW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHV:function eHV(d){this.a=d},
eEU:function eEU(d,e){this.a=d
this.b=e},
eET:function eET(d,e){this.a=d
this.b=e},
eHM:function eHM(){},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIi:function eIi(d){this.a=d},
eIj:function eIj(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCF:function eCF(d,e,f){this.a=d
this.b=e
this.c=f},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eCA:function eCA(d,e,f){this.a=d
this.b=e
this.c=f},
eCz:function eCz(d){this.a=d},
eGB:function eGB(d,e,f){this.a=d
this.b=e
this.c=f},
eIs:function eIs(d,e,f){this.a=d
this.b=e
this.c=f},
eEX:function eEX(d,e,f){this.a=d
this.b=e
this.c=f},
eEW:function eEW(){},
eDl:function eDl(d,e,f){this.a=d
this.b=e
this.c=f},
eDm:function eDm(d){this.a=d},
eCx:function eCx(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCP:function eCP(d){this.a=d},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e){this.a=d
this.b=e},
eCO:function eCO(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eCN:function eCN(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(){},
eDa:function eDa(){},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e,f){this.a=d
this.b=e
this.c=f},
eEm:function eEm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEl:function eEl(d,e,f){this.a=d
this.b=e
this.c=f},
eEk:function eEk(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e){this.a=d
this.b=e},
eDp:function eDp(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDs:function eDs(){},
eDt:function eDt(d,e){this.a=d
this.b=e},
eE3:function eE3(d){this.a=d},
eGe:function eGe(d,e){this.a=d
this.b=e},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGa:function eGa(d){this.a=d},
eGb:function eGb(d,e){this.a=d
this.b=e},
eG8:function eG8(){},
eG9:function eG9(){},
eHN:function eHN(){},
eHO:function eHO(d,e,f){this.a=d
this.b=e
this.c=f},
eHP:function eHP(){},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
eCM:function eCM(d,e){this.a=d
this.b=e},
eDS:function eDS(){},
eDT:function eDT(){},
eDU:function eDU(){},
eDX:function eDX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e,f){this.a=d
this.b=e
this.c=f},
eFn:function eFn(d){this.a=d},
eFm:function eFm(){},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFl:function eFl(d){this.a=d},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFk:function eFk(d){this.a=d},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFj:function eFj(d){this.a=d},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFi:function eFi(d){this.a=d},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFh:function eFh(d,e){this.a=d
this.b=e},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFg:function eFg(d){this.a=d},
eFv:function eFv(d,e){this.a=d
this.b=e},
eFf:function eFf(d){this.a=d},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF9:function eF9(d){this.a=d},
eFa:function eFa(d){this.a=d},
eF7:function eF7(d){this.a=d},
eFb:function eFb(d,e){this.a=d
this.b=e},
eF6:function eF6(d){this.a=d},
eFc:function eFc(d,e){this.a=d
this.b=e},
eF5:function eF5(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
eF4:function eF4(d){this.a=d},
eFe:function eFe(d){this.a=d},
eEg:function eEg(d){this.a=d},
eEh:function eEh(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEb:function eEb(d){this.a=d},
eEa:function eEa(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d){this.a=d},
eEf:function eEf(d,e){this.a=d
this.b=e},
eEi:function eEi(d){this.a=d},
eIy:function eIy(d){this.a=d},
eIz:function eIz(d){this.a=d},
eFy:function eFy(d,e){this.a=d
this.b=e},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFw:function eFw(d,e){this.a=d
this.b=e},
eFz:function eFz(d){this.a=d},
eFA:function eFA(d){this.a=d},
eGX:function eGX(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH9:function eH9(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHv:function eHv(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHG:function eHG(d,e){this.a=d
this.b=e},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH4:function eH4(d){this.a=d},
eH5:function eH5(d){this.a=d},
eH6:function eH6(d){this.a=d},
eH7:function eH7(d){this.a=d},
eH8:function eH8(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHc:function eHc(d){this.a=d},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d){this.a=d},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d){this.a=d},
eHh:function eHh(d){this.a=d},
eHi:function eHi(d){this.a=d},
eGN:function eGN(d){this.a=d},
eHj:function eHj(d){this.a=d},
eGV:function eGV(d){this.a=d},
eHl:function eHl(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHn:function eHn(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e,f){this.a=d
this.b=e
this.c=f},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGW:function eGW(d){this.a=d},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e,f){this.a=d
this.b=e
this.c=f},
eGS:function eGS(d,e,f){this.a=d
this.b=e
this.c=f},
eGI:function eGI(d,e,f){this.a=d
this.b=e
this.c=f},
eGG:function eGG(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e){this.a=d
this.b=e},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGH:function eGH(d,e){this.a=d
this.b=e},
eGF:function eGF(d,e){this.a=d
this.b=e},
eHq:function eHq(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHu:function eHu(d){this.a=d},
eGP:function eGP(d){this.a=d},
eHw:function eHw(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eGO:function eGO(d){this.a=d},
eHz:function eHz(d,e){this.a=d
this.b=e},
eGM:function eGM(d){this.a=d},
eHA:function eHA(d,e){this.a=d
this.b=e},
eGL:function eGL(d){this.a=d},
eHB:function eHB(d,e){this.a=d
this.b=e},
eGK:function eGK(d){this.a=d},
eDk:function eDk(d,e,f){this.a=d
this.b=e
this.c=f},
eDj:function eDj(d,e){this.a=d
this.b=e},
eI3:function eI3(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEs:function eEs(d){this.a=d},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEr:function eEr(d){this.a=d},
eF0:function eF0(){},
eF_:function eF_(){},
eIg:function eIg(d){this.a=d},
eIf:function eIf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIe:function eIe(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eId:function eId(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIa:function eIa(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI7:function eI7(d){this.a=d},
eI8:function eI8(d){this.a=d},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIc:function eIc(d,e){this.a=d
this.b=e},
eIh:function eIh(d){this.a=d},
eDL:function eDL(d){this.a=d},
eDK:function eDK(d,e,f){this.a=d
this.b=e
this.c=f},
eDJ:function eDJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDy:function eDy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDx:function eDx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDC:function eDC(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDw:function eDw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDu:function eDu(d){this.a=d},
eDI:function eDI(d,e){this.a=d
this.b=e},
eFC:function eFC(d){this.a=d},
eFB:function eFB(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEI:function eEI(d,e){this.a=d
this.b=e},
eEG:function eEG(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEF:function eEF(d,e){this.a=d
this.b=e},
eEK:function eEK(d,e){this.a=d
this.b=e},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e){this.a=d
this.b=e},
eED:function eED(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e){this.a=d
this.b=e},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e,f){this.a=d
this.b=e
this.c=f},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e,f){this.a=d
this.b=e
this.c=f},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEz:function eEz(d,e,f){this.a=d
this.b=e
this.c=f},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eEy:function eEy(d,e){this.a=d
this.b=e},
eER:function eER(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e,f){this.a=d
this.b=e
this.c=f},
eEv:function eEv(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCt:function eCt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGx:function eGx(d){this.a=d},
eGy:function eGy(d,e){this.a=d
this.b=e},
agw:function agw(d,e,f){this.a=d
this.b=e
this.c=f},
aAL:function aAL(d,e,f){this.c=d
this.e=e
this.a=f},
bf1:function bf1(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dau:function dau(d){this.a=d},
dat:function dat(d){this.a=d},
bfg:function bfg(d,e){this.c=d
this.a=e},
daS:function daS(d){this.a=d},
daT:function daT(d){this.a=d},
KL:function KL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bf0:function bf0(){this.d=!1
this.c=this.a=null},
dar:function dar(d){this.a=d},
dan:function dan(d){this.a=d},
das:function das(d){this.a=d},
dam:function dam(d){this.a=d},
daq:function daq(d){this.a=d},
dao:function dao(d){this.a=d},
dap:function dap(d,e){this.a=d
this.b=e},
QH:function QH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0T:function a0T(d,e,f){this.c=d
this.d=e
this.a=f},
aGj:function aGj(d,e,f){var _=this
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
eJe:function eJe(){},
eJ4:function eJ4(d){this.a=d},
eJd:function eJd(d){this.a=d},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ0:function eJ0(d){this.a=d},
eJ1:function eJ1(d,e){this.a=d
this.b=e},
eJ2:function eJ2(d){this.a=d},
eJ3:function eJ3(d,e,f){this.a=d
this.b=e
this.c=f},
eJb:function eJb(){},
eJc:function eJc(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
eJ9:function eJ9(d){this.a=d},
eJa:function eJa(d){this.a=d},
eJf:function eJf(d,e,f){this.a=d
this.b=e
this.c=f},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJg:function eJg(d){this.a=d},
KR:function KR(d,e){this.c=d
this.a=e},
bug:function bug(d,e){this.b=d
this.a=e},
bk1:function bk1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bk0:function bk0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aM7:function aM7(){},
aO9:function aO9(){},
bA4:function bA4(){},
aOa:function aOa(){},
fUV(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fUV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xQ.cq().MH(B.a(["pdf"],x.s),A.uF,!0),$async$fUV)
case 3:q=e
if(q==null||J.cs(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bro(s,"data:application/pdf;base64,"+A.cR.gcu().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUV,v)},
ipa(d){var w,v,u,t,s,r
try{w=B.jK(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.ajc(t,1,200)
return s}}catch(r){}return 1},
fUM(d){return C.ip9(d)},
ip9(d){var w=0,v=B.j(x.T),u
var $async$fUM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUM,v)},
bFE(d,e,f,g){return C.ipj(d,e,f,g)},
ipj(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFE=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.i.D(b5.a,80,2400)
q=A.i.D(b5.b,80,2400)
p=B.hEx(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.ji(a9),b0)
b0=n
a9=k.b
n=Math.min(B.ji(b0),a9)
a9=m
b0=k.a
m=Math.max(B.ji(a9),b0)
b0=l
a9=k.b
l=Math.max(B.ji(b0),a9)}o=A.i.D(o-0.04,0,1)
n=A.i.D(n-0.04,0,1)
m=A.i.D(m+0.04,0,1)
l=A.i.D(l+0.04,0,1)
j=A.i.D(m-o,0.12,1)
i=A.i.D(l-n,0.12,1)
h=A.o.D(A.i.V(800*(i/j)),180,420)
$.R()
g=new B.q0(new B.pC())
f=B.zx(g,null)
a7=B.K()
a7.r=A.rB.gp(0)
f.aq(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bu
b1.e=A.dT
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.o((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o3()
w=7
return B.b(a3.xG(800,h),$async$bFE)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hr(A.hl),$async$bFE)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dQ.gaU(a5))
a7=A.cR.gcu().aN(a7)
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
return B.i($async$bFE,v)},
aS7(d,e,f){return C.ip7(d,e,f)},
ip7(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aS7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiT(d,e,f,new C.fUK(r,q),q,"Sign document"),$async$aS7)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFE(q,t,r.b,r.c),$async$aS7)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3u(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS7,v)},
iph(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hxj(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hxj(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.i.ad(q.c*100,2)+"%;top:"+A.i.ad(q.d*100,2)+"%;width:"+A.i.ad(q.e*100,2)+"%;height:"+A.i.ad(q.f*100,2)+'%">'
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.hwV(q.ay)+";border:2px solid "+C.hwV(q.ch)+'"></div>'
break
case 5:l=C.hfS(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gal9()
if(p==null)p=A.aBQ
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n8(p,0,8,n.c)
j=new B.bR(j,j.gI(0),k.k("bR<ak.E>"))
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
hwV(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.i.ad((w&255)/255,3)+")"},
hxj(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFC(d,e){var w=0,v=B.j(x.H)
var $async$bFC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fUT(e,C.iph(e),d),d,null,!0,!0,x.H),$async$bFC)
case 2:return B.h(null,v)}})
return B.i($async$bFC,v)},
bFD(){var w=0,v=B.j(x.T),u,t,s
var $async$bFD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hy(92,2400),$async$bFD)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fUM(s),$async$bFD)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFD,v)},
aS8(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aS8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hh6(d),$async$aS8)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A2.fXv(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aS8,v)},
hrd(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3u:function b3u(d,e,f){this.a=d
this.b=e
this.c=f},
fUK:function fUK(d,e){this.a=d
this.b=e},
fUT:function fUT(d,e,f){this.a=d
this.b=e
this.c=f},
fUQ:function fUQ(d){this.a=d},
fUR:function fUR(d,e,f){this.a=d
this.b=e
this.c=f},
fUS:function fUS(d,e,f){this.a=d
this.b=e
this.c=f},
ip8(d){return C.kN(d.w)},
ipf(d){var w,v,u,t
if(d.length===0||!A.d.cE(d,C.irw()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zh(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hKE()
if(w.b.test(u))return u
return null},
hEz(d,e,f){var w,v,u=C.hTD(d),t=$.os()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
ipl(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eG(w,d.b);v.C();){u=w.gR(w).y
t=C.zh(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fUI(d,e){var w,v=d.y,u=C.zh(v==null?"":v)
if(u!=null)return d.y=u
w=C.ipl(new B.Y(e,new C.fUJ(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hEz(v==null?"":v,null,w)},
ipk(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kN(w.w))return null
v=w.y
return C.zh(v==null?"":v)},
hY2(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.he(u)},
Xl(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xl)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bO),$async$Xl)
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
return B.i($async$Xl,v)},
Xm(d){return C.hY3(d)},
hY3(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xm)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hK("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cN,null),$async$Xm)
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
return B.i($async$Xm,v)},
a9m(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9m=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a9m)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xl(),$async$a9m)
case 4:s=a6
r=C.zh(a2==null?"":a2)
if(r==null)r=a3!=null?C.hEz(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dp(s),n=J.aT(o.ghJ(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zh(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dV.aN(t)
g.n(0,"payload",A.cR.gcu().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UQ.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zh(J.k(q==null?"":q))
if(f==null)f=C.hri(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xm(s),$async$a9m)
case 7:u=new B.aHL(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hY2()
n=r==null
d=n?C.hri(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dV.aN(t)
q.n(0,"payload",A.cR.gcu().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UQ.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xm(s),$async$a9m)
case 8:u=new B.aHL(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9m,v)},
hri(d){var w,v,u=$.os()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.az(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asW(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$asW)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xl(),$async$asW)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.br(t,new C.cl7(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xm(t),$async$asW)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asW,v)},
asV(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zh(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$asV)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xl(),$async$asV)
case 6:t=o.i1(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zh(J.k(q==null?"":q))===p){u=C.a9l(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asV,v)},
a9l(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9l=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$a9l)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xl(),$async$a9l)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
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
try{s=A.ca.cJ(0,A.cK.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UQ.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aQ(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.X.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xm(p),$async$a9l)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9l,v)},
ipe(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fUP(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fUX(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.X.aw(w,null)}return A.X.aw(C.ipe(d==null?B.a([],x.D):d,f,g),null)},
fUW(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fUW=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9m(h,d,e,f,g),$async$fUW)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zh(e==null?"":e)
u=new B.aHx(s,t)
w=1
break}t=A.dV.aN(h)
t=A.kJ.gcu().aN(t)
u=new B.aHx(C.zh(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUW,v)},
hh8(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eH(q,s)||J.eH(q,r))return!0
if(J.d5(q,"{"))try{w=A.X.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
ipi(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hh8(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hh8(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hh8(s))return s}}return null},
fUL(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.X.aQ(0,A.ca.cJ(0,A.cK.aN(J.nq(t,8))),null))
else w=v.a(A.X.aQ(0,t,null))
v=C.i7c(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiE(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asV(t[1]),$async$aiE)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUL(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zh(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.asV(r),$async$aiE)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUL(s)
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
return B.b(C.a9l(t[1]),$async$aiE)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUL(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fUL(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiE,v)},
i7c(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UQ.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hh5(C.Xh(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cF(t,new C.fpR(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hh5(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jc
$.jc=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xh(B.a2(o,x.N,x.z))
if(e&&C.kN(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bFn(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hx(),$async$bFn)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiE(s),$async$bFn)
case 4:t=e
u=J.cs(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFn,v)},
h2Z(d){var w=0,v=B.j(x.T),u,t
var $async$h2Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hL(D.YZ,!0,"Dismiss",d,new C.h3_(),new C.h30(),A.GI,!0,x.N),$async$h2Z)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fi8)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2Z,v)},
itK(d,e,f,g,h){return B.a6(d,!1).ce(B.ec(new C.h31(h,e,g,f),!0,null,x.H))},
fUJ:function fUJ(d){this.a=d},
cl7:function cl7(d){this.a=d},
fUP:function fUP(){},
fpR:function fpR(d){this.a=d},
h3_:function h3_(){},
h30:function h30(){},
h31:function h31(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xj:function Xj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGh:function aGh(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eIL:function eIL(){},
eIH:function eIH(d,e){this.a=d
this.b=e},
eIK:function eIK(d,e){this.a=d
this.b=e},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIQ:function eIQ(d){this.a=d},
eIR:function eIR(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIS:function eIS(d){this.a=d},
eIO:function eIO(d){this.a=d},
eIT:function eIT(d,e){this.a=d
this.b=e},
eIG:function eIG(d,e){this.a=d
this.b=e},
eIF:function eIF(d,e){this.a=d
this.b=e},
Xk:function Xk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmZ:function bmZ(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eIU:function eIU(d,e){this.a=d
this.b=e},
eIV:function eIV(d){this.a=d},
eIW:function eIW(){},
eIX:function eIX(d){this.a=d},
eIY:function eIY(d,e){this.a=d
this.b=e},
aGe:function aGe(d){this.a=d},
aGf:function aGf(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCn:function eCn(d){this.a=d},
eCm:function eCm(){},
eCo:function eCo(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCi:function eCi(){},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
bxy:function bxy(){},
asX:function asX(d){this.a=d},
aGi:function aGi(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJ_:function eJ_(d){this.a=d},
eIZ:function eIZ(d){this.a=d},
icN(){var w,v,u,t
for(v=0;v<4;++v){w=D.dhE[v]
try{if(Ae.c1f(w)){u=w
return u}}catch(t){}}return null},
Sm(d,e){return C.ilS(d,e)},
ilS(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sm=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.icN()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oT?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.i.V(b3?1280:1280*b2)
b5=c2.b=A.i.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qU(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eB(b8,b9)
n=new B.eB("Getting ready\u2026",b9)
m=new B.eB(0,b9)
l=B.pz(new C.fOY(c2,b7,o),!1,!1)
b6.m9(0,l)
b9=x.H
B.cg(null,A.bB,!1,null,new C.fOZ(n,m),c6,null,!0,!0,b9)
k=new C.fP2(b7)
j=new C.fP3()
i=null
t=4
b3=c2.a
h=Al.aUp(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h6_(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZt(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.J5.za(i,"dataavailable",new C.fP_(e))
d=new B.c3(new B.bk($.bF,x.dT),x.b2)
A.J5.za(i,"stop",new C.fP0(d))
J.ajh(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sm)
case 8:w=7
return B.b(c5.$1(d0),$async$Sm)
case 7:a0=d0
J.h60(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajh(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajh(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sm)
case 15:w=14
return B.b(c5.$1(d0),$async$Sm)
case 14:a0=d0
case 13:J.h60(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajh(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.h60(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fg,null,b9),$async$Sm)
case 18:w=16
break
case 17:J.ajh(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajh(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dh(0,A.oq),$async$Sm)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hM(e,a5)
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
J.HM(b0)
J.lL(b0)
B.bQ(A.qw,new C.fP1(a7),b9)
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
J.lL(l)
if(p.pY())p.eA()
c3=o
b3=$.aw()
c3.sic(b3)
J.aT2(c3,0)
c3=n
c3.sic(b3)
J.aT2(c3,0)
c3=m
c3.sic(b3)
J.aT2(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sm,v)},
fOY:function fOY(d,e,f){this.a=d
this.b=e
this.c=f},
fOX:function fOX(){},
fOZ:function fOZ(d,e){this.a=d
this.b=e},
fP2:function fP2(d){this.a=d},
fP3:function fP3(){},
fP_:function fP_(d){this.a=d},
fP0:function fP0(d){this.a=d},
fP1:function fP1(d){this.a=d},
bxM:function bxM(d,e,f){this.c=d
this.d=e
this.a=f},
fjM:function fjM(){},
fjN:function fjN(){},
clt(d){var w=0,v=B.j(x.at),u,t,s
var $async$clt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at4(d,A.Aq),$async$clt)
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
return B.i($async$clt,v)},
cls(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a92:function a92(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmI:function bmI(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eqD:function eqD(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
a9W:function a9W(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oU$=k
_.oV$=l
_.oW$=m
_.o6$=n},
a9X:function a9X(d,e){this.a=d
this.b=e},
b59:function b59(){},
cpn:function cpn(){},
cpo:function cpo(){},
cpp:function cpp(d,e,f,g,h,i,j,k,l){var _=this
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
hLD(d){return new C.ajz(d)},
a4h:function a4h(){},
ajz:function ajz(d){this.a=d},
aTm:function aTm(){},
ayA:function ayA(d,e){this.d=d
this.b=e
this.a=null},
aUO:function aUO(d){this.b=d
this.a=null},
bEh(d,e){var w=0,v=B.j(x.H),u
var $async$bEh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.R().guf().Mq(d,e),$async$bEh)
case 2:u=B.fXE()
w=3
return B.b(u,$async$bEh)
case 3:return B.h(null,v)}})
return B.i($async$bEh,v)},
hBK(d,e){return(A.th[(d^e)&255]^A.o.aI(d,8))>>>0},
fGZ(d,e,f,g,h,i){var w=C.ii3(d,A.dj,f,null,A.d3,g,h,i)
return w},
hDH(d){var w=F.hEq(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hTD(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pL.h(0,w)
if(v!=null)return v
for(u=A.pL.gdO(A.pL),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hDP(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<75;++w)v+="- "+D.dsp[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDv(d,e){return C.ieu(d,e)},
ieu(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDv=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hM([d],"application/pdf")
n=x.z
q=B.aWz(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jP(o,"share",[p]),x.H),$async$bDv)
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
return B.i($async$bDv,v)},
hh_(){var w=0,v=B.j(x.y),u,t,s
var $async$hh_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fxL
s=$.bD2
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDv(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hh_,v)},
bET(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bET=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fxL
l=$.bD2
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A2.hy2()?3:4
break
case 3:w=5
return B.b(C.bDv(m,k),$async$bET)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bD3
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
J.HM(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bET)
case 10:J.lL(q)
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
return B.i($async$bET,v)},
hgR(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hgR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bD3
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lZ.rl(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hgR,v)},
hh7(d,e){var w=0,v=B.j(x.H),u,t
var $async$hh7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hM([d],"text/html"))
t.toString
u=window
u.toString
A.lZ.rl(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hh7,v)},
b45(d,e){var w=0,v=B.j(x.y),u
var $async$b45=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b47(d,e),$async$b45)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b46(d),$async$b45)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b45,v)}},D,O,Ao,Aa,A0,A1,W,Ap,G,F,E,H,X,R,A2,A3,Aq,M,Ar,A4,As,Ab,K,At,Au,Y,N,Z,P,A_,Av,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,T,U,AD,L,A5,A6,A7
J=c[1]
B=c[0]
A=c[2]
Aj=c[206]
A8=c[74]
Ak=c[54]
Al=c[65]
V=c[223]
A9=c[58]
Am=c[151]
An=c[233]
C=a.updateHolder(c[5],C)
D=c[221]
O=c[142]
Ao=c[42]
Aa=c[225]
A0=c[222]
A1=c[234]
W=c[211]
Ap=c[135]
G=c[193]
F=c[35]
E=c[224]
H=c[96]
X=c[122]
R=c[153]
A2=c[32]
A3=c[181]
Aq=c[236]
M=c[161]
Ar=c[188]
A4=c[106]
As=c[137]
Ab=c[117]
K=c[226]
At=c[237]
Au=c[134]
Y=c[68]
N=c[201]
Z=c[83]
P=c[163]
A_=c[115]
Av=c[124]
Ac=c[119]
Aw=c[228]
Q=c[126]
Ad=c[144]
Ax=c[94]
Ae=c[59]
Af=c[197]
Ay=c[40]
Ag=c[81]
Az=c[160]
Ah=c[152]
Ai=c[232]
AA=c[235]
AB=c[231]
S=c[75]
AC=c[229]
I=c[178]
T=c[52]
U=c[227]
AD=c[238]
L=c[208]
A5=c[230]
A6=c[112]
A7=c[64]
C.oj.prototype={
vI(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.uk(t,v)
return new C.oj(t===0?!1:w,v,t)},
bPZ(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DN()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.uk(w,u)
return new C.oj(r===0?!1:s,u,r)},
bQv(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DN()
w=o-d
if(w<=0)return p.a?$.hiD():$.DN()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.uk(w,u)
q=new C.oj(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aK(0,$.a43())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ar(e,16)
if(A.o.F(e,16)===0)return r.bPZ(v)
u=w+v+1
t=new Uint16Array(u)
C.huu(r.b,w,e,t)
w=r.a
s=C.uk(u,t)
return new C.oj(s===0?!1:w,t,s)},
mF(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ar(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQv(v)
t=w-v
if(t<=0)return n.a?$.hiD():$.DN()
s=n.b
r=new Uint16Array(t)
C.i2Q(s,w,e,r)
w=n.a
q=C.uk(t,r)
p=new C.oj(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aK(0,$.a43())
for(o=0;o<v;++o)if(s[o]!==0)return p.aK(0,$.a43())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cOD(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9k(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9k(t,e)
if(s===0)return $.DN()
if(r===0)return t.a===e?t:t.vI(0)
w=s+1
v=new Uint16Array(w)
C.i2O(t.b,s,d.b,r,v)
u=C.uk(w,v)
return new C.oj(u===0?!1:e,v,u)},
HS(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DN()
w=d.c
if(w===0)return t.a===e?t:t.vI(0)
v=new Uint16Array(s)
C.bcc(t.b,s,d.b,w,v)
u=C.uk(s,v)
return new C.oj(u===0?!1:e,v,u)},
bCR(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.uk(r,u)
return new C.oj(!1,u,s)},
bCQ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.uk(u,r)
return new C.oj(!1,r,v)},
bCS(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.uk(p,m)
return new C.oj(s!==0,m,s)},
VD(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DN()
w=t.a
if(w===e.a){if(w){w=$.a43()
return t.HS(w,!0).bCS(e.HS(w,!0),!0).a9k(w,!0)}return t.bCR(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCQ(v.HS($.a43(),!1),!1)},
a2(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9k(e,v)
if(C.cOD(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aK(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vI(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9k(e,v)
if(C.cOD(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DN()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.huv(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.uk(w,t)
return new C.oj(q===0?!1:r,t,q)},
bPY(d){var w,v,u,t
if(this.c<d.c)return $.DN()
this.aU2(d)
w=$.hbz.cq()-$.azn.cq()
v=C.hbB($.hby.cq(),$.azn.cq(),$.hbz.cq(),w)
u=C.uk(w,v)
t=new C.oj(!1,v,u)
return this.a!==d.a&&u>0?t.vI(0):t},
ctr(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aU2(d)
w=C.hbB($.hby.cq(),0,$.azn.cq(),$.azn.cq())
v=C.uk($.azn.cq(),w)
u=new C.oj(!1,w,v)
if($.hbA.cq()>0)u=u.mF(0,$.hbA.cq())
return t.a&&u.c>0?u.vI(0):u},
aU2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hur&&d.c===$.hut&&g.b===$.huq&&d.b===$.hus)return
w=d.b
v=d.c
u=16-A.o.galB(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hup(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hup(g.b,f,u,r)}else{r=C.hbB(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hbC(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cOD(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bcc(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bcc(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i2P(p,r,i);--o
C.huv(h,j,0,r,o,s)
if(r[i]<h){m=C.hbC(j,s,o,n)
C.bcc(r,l,n,m,r)
while(--h,r[i]<h)C.bcc(r,l,n,m,r)}--i}$.huq=g.b
$.hur=f
$.hus=w
$.hut=v
$.hby.b=r
$.hbz.b=l
$.azn.b=s
$.hbA.b=u},
gX(d){var w,v,u,t=new C.cOE(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cOF().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oj&&this.aS(0,e)===0},
tU(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vB(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galB(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cOG(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOH(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lo(A.aI.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vI(0):r
while(v.c>1){u=$.hIr()
if(u.c===0)B.bj(D.bb0)
t=v.ctr(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPY(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaU5:1,
$ihN:1}
C.aTu.prototype={
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
cSp(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gam(d){return A.d.gam(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kk(w,w.length,B.U(w).k("kk<1>"))}}
C.T0.prototype={
d_z(){var w,v
if(this.as==null)this.bg_()
w=this.as
v=w==null?null:w.aqO()
return v==null?null:v.eV()},
bg_(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqO().eV()
this.as=new C.bSP(v)}},
gZ(d){return this.at}}
C.a50.prototype={
a7(){return"CompressionType."+this.b}}
C.bKy.prototype={
eJ(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.A_[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.A_[d])
s.c=t}return v}}
C.bIQ.prototype={
cQt(d,e){var w,v,u,t,s,r=this,q=new C.bKy(d)
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
t=r.crI(q)
if(t<0)return!1
if(t===0){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
s=r.crL(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
return!0}}return!0},
crI(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eJ(8)
if(t!==D.dzz[u])v=!1
if(t!==D.daB[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crL(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eJ(1),d2=((d3.eJ(8)<<8|d3.eJ(8))<<8|d3.eJ(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c69()
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
u[w]=l}c9.fr=B.c0(6,$.hGq(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eJ(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eJ(1)===0)break
i=d3.eJ(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hGp()
u=x.an
c9.y=B.c0(6,v,!1,u)
c9.z=B.c0(6,v,!1,u)
c9.Q=B.c0(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1p(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avU(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avU(d3)}while(a3===0||a3===1);++a5
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
a3=c9.avU(d3)
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
c1=(c1<<8^D.IA[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IE[b9];++b9
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
if(b8===0){b8=D.IE[b9];++b9
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
if(b8===0){b8=D.IE[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IE[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IE[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.IA[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.IA[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.IA[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.IA[c1>>>24&255^c7&255])>>>0
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
avU(d){var w,v,u,t,s=this,r=s.ay
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
c1p(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c69(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cGD.prototype={
aKd(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTC(e)
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
if(w>0)e.aKg(w,!1)
r.cs5(e)
q=r.r
v=r.f
u=e.aNm(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baS()
s.d_y(0,u,e,f)
q.push(s)}},
cs5(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a90(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tF()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tF()
d.b4()
d.b4()
d.aT()
d.aT()
d.tF()
d.tF()
u=d.tF()
t=d.tF()
this.f=u
this.r=t
d.c=s},
bTC(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a90(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ann(A.it)
o.aOB(r.eV(),A.it,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cGB.prototype={}
C.az_.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cGE.prototype={
aKd(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b4()
o.b=e.b4()
w=D.aIA.h(0,e.b4())
o.c=w==null?D.Ny:w
o.d=e.b4()
o.e=e.b4()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b4()
u=e.b4()
o.x=e.apr(v)
o.y=e.hq(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_N:D.F0
o.ay=f
o.Q=e.hq(t)
if(o.at!==D.F0&&u>2){w=o.y
w.toString
s=B.rK(w,A.it,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b4()===39169){s.b4()
s.b4()
s.apr(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b4()
o.at=D.b_O
o.ax=new C.cGB(r,q)
w=D.aIA.h(0,q)
o.c=w==null?D.Ny:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpJ().length},
aqO(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rK(new Uint8Array(0),A.it,q,q)
w=r.at
if(w!==D.F0)if(p.gI(0)<=0)r.at=D.F0
else{if(w===D.b_N){p=r.bOg(p)
r.Q=p}else if(w===D.b_O){p=r.bNU(p)
r.Q=p}r.at=D.F0}w=r.c
if(w===D.akv){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q8.Ca(p.eV(),!0,!1)
else{t=B.a9L(A.it,r.w)
p=r.Q
p.toString
A.q8.a55(p,t,!0,!1)
u.b=t.Hs()}r.Q.c=v
return B.rK(u.bl(),A.it,q,q)}else if(w===D.akw){s=B.a9L(A.it,32768)
p=r.Q
v=p.c
C.hLO().cQt(p,s)
u=s.Hs()
r.Q.c=v
return B.rK(u,A.it,q,q)}else return B.rK(p.eV(),A.it,q,q)},
bpJ(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbO(d){var w=this.ch,v=C.KH(C.hBK(w[0].M(0),d))
w[0]=v
v=w[1].a2(0,v.VD(0,C.KH(255)))
w[1]=v
w[1]=v.aM(0,C.KH(134775813)).a2(0,C.KH(1)).VD(0,C.KH(4294967295))
w[2]=C.KH(C.hBK(w[2].M(0),w[1].mF(0,24).M(0)))},
aTr(){var w=(this.ch[2].VD(0,C.KH(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOg(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rK(new Uint8Array(0),A.it,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbO(u[v.c++]^r.aTr())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTr()
r.bbO(s)
u&2&&B.aj(t)
t[w]=s}return B.rK(t,A.it,q,q)},
bNU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hq(8).eV()
v=16}else if(k===2){w=d.hq(12).eV()
v=24}else{w=d.hq(16).eV()
v=32}u=d.hq(2).eV()
t=d.hq(d.gI(0)-10)
s=d.hq(10)
r=t.eV()
k=this.ay
k.toString
q=C.i2t(k,w,v)
p=new Uint8Array(B.cd(A.aI.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cd(A.aI.dt(q,v,k)))
if(!C.htZ(A.aI.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bHq(k,new Uint8Array(16),p)
k=x.S
m=J.a6w(0,k)
m=n.r=new C.cpc(m)
m.c=!0
m.b=m.bp_(!0,new C.aux(p))
if(m.c)m.d=B.bq(D.oR,!0,k)
else m.d=B.bq(D.zN,!0,k)
l=C.hs9(C.hsb(),64)
l.biq(new C.aux(o))
n.w=l
n.d_4(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.htZ(k,m))throw B.W(B.fl("macs don't match"))
return B.rK(r,A.it,null,null)}}
C.baS.prototype={
d_y(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.apr(w)
if(v>0){t=e.hq(v).eV()
n.ax=t
if(v>=4){s=B.rK(t,A.it,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b4()
p=s.b4()
o=s.a90(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tF()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tF()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tF()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apr(u)
f.c=n.as
t=new C.cGE(D.Ny,n,D.F0,B.a([C.KH(0),C.KH(0),C.KH(0)],x.f3))
n.ch=t
t.aKd(0,f,g)},
u(d){return this.at}}
C.cGC.prototype={
cQu(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cGD(B.a([],x.fT))
this.a=g
g.aKd(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTu(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.T0(o,A.o.ar(Date.now(),1000),0):C.hk3(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hk3(o,q.w,q)
if(k.as==null)k.bg_()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ann(A.it)
j.aOB(o,A.it,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GW(!1).E4(i,0,h,!0)}}return v}}
C.bHq.prototype={
d_4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D2(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hLx(u,m.a)
q=m.r
if(16>u.byteLength)B.bj(B.dM("Input buffer too short",null))
if(16>w.byteLength)B.bj(B.dM("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRO(u,0,w,0,o)}else{o===$&&B.c()
q.bOk(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LL(w,0)
m.x=A.aI.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.D2(0,w,0,w.length)
return f}}
C.cph.prototype={}
C.cpl.prototype={}
C.cpf.prototype={}
C.aux.prototype={}
C.cpk.prototype={
cQJ(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.biq(new C.aux(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSW(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bSW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dM("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D2(0,d,0,d.length)
v.D2(0,f,0,4)
u=m.c
u===$&&B.c()
w.LL(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D2(0,s,0,s.length)
w.LL(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpg.prototype={}
C.cpe.prototype={}
C.auy.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auy){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tU(d,e){var w=this.a
w===$&&B.c()
w=A.o.tU(w,e.gc1G())
if(!w)e.gc1G()
return w},
aMM(d,e){this.a=0
this.b=d},
tX(d){return this.aMM(d,null)},
aNp(d){var w,v=this,u=v.b
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
w.b3r(v,u)
u=w.b
u===$&&B.c()
w.b3r(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3r(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.by(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cpj.prototype={
ir(d){var w,v=this
v.a.tX(0)
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
aqh(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4U(u,0)
v.c=0}v.a.aNp(1)},
D2(d,e,f,g){var w=this.cqr(e,f,g)
f+=w
g-=w
w=this.cqs(e,f,g)
this.cqi(e,f+w,g-w)},
LL(d,e){var w,v=this,u=C.hsa(v.a),t=u.a
t===$&&B.c()
t=C.hhG(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hhG(w,3)
v.cqm()
v.cqj(u)
v.auI()
v.cks(d,e)
v.ir(0)
return 20},
b4U(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ou(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iG===w.d)
if(w.w===16)w.auI()},
auI(){this.d_3()
this.w=0
A.d.hx(this.r,0,16,0)},
cqi(d,e,f){while(f>0){this.aqh(d[e]);++e;--f}},
cqs(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4U(d,e)
e+=4
f-=4
w.aNp(4)
v+=4}return v},
cqr(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqh(d[e]);++e;--f;++v}return v},
cqm(){this.aqh(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqh(0)}},
cqj(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auI()
u=v.d
switch(u){case A.iG:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fr:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
cks(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iG===this.d,s=0;s<w;++s){r=v[s]
q=J.ou(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cpm.prototype={
d_3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qx[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qx[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qx[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qx[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qx[30]
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
C.cpi.prototype={
biq(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D2(0,w,0,v)
w=s.d
w===$&&B.c()
r.LL(w,0)
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
s.bd1(s.d,u,54)
s.bd1(s.e,u,92)
u=s.d
r.D2(0,u,0,u.length)},
LL(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LL(s,w)
s=u.e
t.D2(0,s,0,s.length)
v=t.LL(d,e)
s=u.e
A.aI.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D2(0,s,0,s.length)
return v},
bd1(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpd.prototype={}
C.cpc.prototype={
a3k(d){return(D.oR[d&255]&255|(D.oR[d>>>8&255]&255)<<8|(D.oR[d>>>16&255]&255)<<16|D.oR[d>>>24&255]<<24)>>>0},
bp_(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dM("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c0(4,0,!1,u)
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
for(r=1;r<=10;++r){p=(p^f.a3k((m>>>8|(m&$.qx[24])<<24)>>>0)^D.cMy[r-1])>>>0
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
p=(p^f.a3k((k>>>8|(k&$.qx[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3k((k>>>8|(k&$.qx[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a3k((g>>>8|(g&$.qx[24])<<24)>>>0)^j)>>>0
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
bRO(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ou(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ep[a8&255]
u=D.ep[a9>>>8&255]
t=$.qx[8]
s=D.ep[b0>>>16&255]
r=$.qx[16]
q=D.ep[b1>>>24&255]
p=$.qx[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ep[a8&255]^C.nQ(D.ep[a9>>>8&255],24)^C.nQ(D.ep[b0>>>16&255],16)^C.nQ(D.ep[b1>>>24&255],8)^b6[w][0]
m=D.ep[a9&255]^C.nQ(D.ep[b0>>>8&255],24)^C.nQ(D.ep[b1>>>16&255],16)^C.nQ(D.ep[a8>>>24&255],8)^b6[w][1]
l=D.ep[b0&255]^C.nQ(D.ep[b1>>>8&255],24)^C.nQ(D.ep[a8>>>16&255],16)^C.nQ(D.ep[a9>>>24&255],8)^b6[w][2]
b1=D.ep[b1&255]^C.nQ(D.ep[a8>>>8&255],24)^C.nQ(D.ep[a9>>>16&255],16)^C.nQ(D.ep[b0>>>24&255],8)^b6[w][3]
a7=D.oR[n&255]
b0=D.oR[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oR[l>>>8&255]
a9=D.oR[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oR[b1>>>8&255]
h=D.oR[n>>>16&255]
g=D.oR[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oR[l>>>24&255]
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
bOk(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.eo[a6&255]
v=D.eo[b0>>>8&255]
u=$.qx[8]
t=D.eo[a5>>>16&255]
s=$.qx[16]
r=D.eo[a4>>>24&255]
q=$.qx[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.eo[a6&255]^C.nQ(D.eo[b0>>>8&255],24)^C.nQ(D.eo[a5>>>16&255],16)^C.nQ(D.eo[a4>>>24&255],8)^b5[a9][0]
o=D.eo[a4&255]^C.nQ(D.eo[a6>>>8&255],24)^C.nQ(D.eo[b0>>>16&255],16)^C.nQ(D.eo[a5>>>24&255],8)^b5[a9][1]
n=D.eo[a5&255]^C.nQ(D.eo[a4>>>8&255],24)^C.nQ(D.eo[a6>>>16&255],16)^C.nQ(D.eo[b0>>>24&255],8)^b5[a9][2]
b0=D.eo[b0&255]^C.nQ(D.eo[a5>>>8&255],24)^C.nQ(D.eo[a4>>>16&255],16)^C.nQ(D.eo[a6>>>24&255],8)^b5[a9][3]
a4=D.zN[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zN[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zN[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zN[o>>>8&255]
i=D.zN[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zN[b0&255]
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
C.bSO.prototype={}
C.bSP.prototype={
gI(d){var w=this.a.length
return w},
aqO(){return B.rK(this.a,A.it,null,null)}}
C.czK.prototype={
Nn(d){var w=d.w,v=Math.max(1,A.i.cD(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abp(v,t+20,u+16,t,u,B.uv(d.x))},
nF(d){return!1}}
C.bTQ.prototype={
cKw(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTR(),x.E))},
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
return B.b(p.bEh(f,r),$async$mZ)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mZ,v)}}
C.axE.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9J.prototype={
A(d,e){if(e==null)return!1
if(J.bX(e)!==B.b4(this))return!1
return e instanceof C.a9J&&e.a===this.a},
gX(d){return B.by(B.b4(this),B.xr(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b4(this)===D.h4j)return"["+(w+B.eb(this.a))+"]"
return"[ObjectKey "+(w+B.eb(this.a))+"]"}}
C.a2g.prototype={
S(){return new C.aL3(B.aR(x.N))},
cYb(d){return this.d.$1(d)},
cVS(){return this.e.$0()}}
C.aL3.prototype={
Y(){this.a4()
this.PN()},
PN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVS(),$async$PN)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fie(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PN,v)},
ZY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fii(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fij(t))
w=3
return B.b(C.ap6(p),$async$ZY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fik(t,s,p))
w=4
return B.b(t.PN(),$async$ZY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZY,v)},
a2f(d){return this.cuD(d)},
cuD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fif(t))
s=J.t(d,"id")
w=3
return B.b(C.c3O(J.k(s==null?"":s)),$async$a2f)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fig(t))
w=1
break}q=C.hh5(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYb(B.a([q],x.D)),$async$a2f)
case 4:if(t.c==null){w=1
break}t.m(new C.fih(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2f,v)},
PM(d,e){return this.bOM(0,e)},
bOM(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fi9(q),r,null,!0,!0,x.y),$async$PM)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fia(t))
s=s.h(e,"id")
w=4
return B.b(C.ap5(J.k(s==null?"":s)),$async$PM)
case 4:if(t.c==null){w=1
break}t.m(new C.fib(t))
w=5
return B.b(t.PN(),$async$PM)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PM,v)},
cJv(d){var w=B.bh(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iT[B.bM(v)-1]+" "+B.bV(v)},
aTi(d,e){var w=null,v=B.l(e*0.3)
return B.r(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Q9,A.n),w,e,w,w,w,w,w,e)},
aTh(d){return this.aTi(d,44)},
ba6(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q9:u,r=B.l(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,A_.AK,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.v(q,B.a([A_.AK,B.r(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bIa,u,u,u)],p))}return B.E(B.az(A.c4,B.cT(u,B.A(q,A.l,u,A.ba,A.j,0,u,u),u,u,A.b0,new B.p(u,u,u,r,u,s,A.n),A.h5,u,u,u,u,A.qD,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fio(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cop(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.a_6,n=B.l(18),m=p?A.d5:A.dn
m=B.L(m,A.r,p?1.8:1)
w=this.aTh(A.qQ)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aWw,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cQ,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aWy,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.Q9:q
u=p?q:B.L(A.aT,A.r,1.6)
r=p?D.bZF:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bc,t,B.cT(q,r,q,q,A.b0,new B.p(q,q,u,q,q,v,A.a6),A.h_,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.j,0,q,q),q,q,A.b0,new B.p(o,q,m,n,q,q,A.n),A.h_,q,q,q,A.d6,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fid(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwf(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJv(J.k(o==null?"":o))
o=B.l(18)
w=B.L(A.dn,A.r,1)
v=r.aTh(A.Ph)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aWw,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cQ,B.d(p+" slides"+t,q,q,q,q,q,q,D.aWy,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b6A(A.i2,A.bx,"Bring it back",r.r?q:new C.fil(r,d))
return B.r(q,B.A(B.a([v,A.bc,t,p,A.bm,r.b6A(A.ej,A.c0,"Delete",r.r?q:new C.fim(r,d))],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(D.a_6,q,w,o,q,q,A.n),q,q,q,A.d6,D.bCq,q,q,q)},
b6A(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.h6(B.az(w,B.r(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auY(d,e,f){var w=null
return new B.D(D.bBp,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fAw,w,w,w),A.ax,B.d(f,w,w,w,w,w,w,D.fsm,A.K,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ce
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aF(d,A.c1,x.w).w
u=B.r(i,i,A.f,i,i,new B.p(A.aT,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTi(A.zA,46),A.bc,D.bJ8],t)
if(j.r)s.push(D.esU)
s.push(B.aI(i,i,i,i,A.td,i,i,i,new C.fir(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.L(A.dn,A.r,1)
o=J.a7(h)
q=B.a([A.W,u,new B.D(D.bF8,s,i),B.r(i,B.A(B.a([j.ba6(0,A.zh,"Save",j.a.c.length),j.ba6(1,A.Pz,"Saved",o.gI(h))],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bE9,A.eB,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.l(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Pl:A.ee
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.r(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vu,i,i,i),1)],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bE5,A.hK,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fwc,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fzt,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fis(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.j,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.auY(A.qQ,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.cop(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.esp)
else if(j.e==null)s.push(j.auY(A.a2E,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.auY(A.pv,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwf(r.gR(r)))
A.d.v(u,s)}q.push(new B.dl(1,A.cn,B.cl(u,i,i,A0.amk,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8M()
p=s?i:D.Q9
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cC,18)],x.V)
u=u.a
m=u===0
k=B.X(A.zh,m?A.k_:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bEL,B.az(i,B.cT(i,B.A(B.a([k,A.V3,new B.dl(1,A.cn,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.k_:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e5),i)],t),A.l,i,A.ba,A.j,0,i,i),i,i,A.b0,new B.p(s,i,i,o,n,p,A.n),A.h5,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.W)
return B.r(i,B.bm(!0,B.x(q,A.l,i,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b7Q,i,i,i,i,i,i,i,i)}}
C.oN.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZZ.prototype={
S(){return new C.azz(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azz.prototype={
Y(){this.a4()
this.PX()},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3f(t.a.c),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQ2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
cCy(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.ow(t.d,new C.cQ5(d))
v=w<0
if(v&&C.i2S(d))return t.f
u=t.d
if(v)J.n2(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h7k(new C.cQ6(t),v)
return t.f=t.f.bG(new C.cQ7(t,d),v).eB(new C.cQ8())},
Jh(d,e,f){return this.chW(0,e,f)},
b0j(d,e){return this.Jh(0,e,!1)},
chW(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ce(B.ec(new C.cQ1(t,e),!1,null,x.H)),$async$Jh)
case 3:w=4
return B.b(t.f,$async$Jh)
case 4:w=5
return B.b(t.PX(),$async$Jh)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
b_z(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dMD:d
this.Jh(0,new C.oN(w,v,new B.V(Date.now(),0,!1)),!0)},
c8c(){return this.b_z(null)},
aeF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQ9(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_z(s)
case 1:return B.h(u,v)}})
return B.i($async$aeF,v)},
Jg(d,e){return this.bOD(0,e)},
bOD(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cPX(e),s,null,!0,!0,x.y),$async$Jg)
case 3:if(g!==!0){w=1
break}t.m(new C.cPY(t,e))
w=4
return B.b(t.f,$async$Jg)
case 4:w=5
return B.b(C.ahH(t.a.c,e.a),$async$Jg)
case 5:w=6
return B.b(t.PX(),$async$Jg)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jg,v)},
DQ(d){return this.bGI(d)},
bGI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cPT(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DQ)
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
return B.b(t.b0j(0,d),$async$DQ)
case 9:w=5
break
case 7:w=10
return B.b(F.hhI(r,d.b,null),$async$DQ)
case 10:w=5
break
case 8:w=11
return B.b(t.Jg(0,d),$async$DQ)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DQ,v)},
c1C(){var w,v,u,t,s=null,r=[D.dMG,D.dME,D.dMF],q=new C.cQ_(),p=B.l(26),o=x.V,n=B.a([new B.ac(0,A.G,A.d_.j(0.4),A.eQ,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dw1[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.r(s,B.d(v,s,s,s,s,s,s,A.p3,s,s,s),A.f,s,s,new B.p(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.ov,s,s,s))}return B.r(s,B.A(B.a([B.E(B.x(B.a([D.h_A,A.T,B.bW(A.bH,l,A.bs,s,6,6),A.aO,B.az(s,B.r(s,D.f9C,A.f,s,s,new B.p(A.c,s,s,B.l(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],o),s,A.n),s,s,s,s,V.amJ,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPZ(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.j,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ac,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.j,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c7b,A.n),s,s,s,s,D.bFi,s,s,s)},
bGG(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cC,14)],x.V),r=x.p
s=B.r(v,B.bx(B.l(6),new B.an(A.a0,v,A.b1,A.t,B.a([B.ev(A.A,F.apI(d.b),A.f,A.c_),D.eyW,B.ap(v,B.az(v,B.r(v,D.c_w,A.f,v,v,D.b8O,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPO(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fps,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.T,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fwo,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPP(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPQ(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eI(B.a([new B.D(O.ale,B.h6(B.az(s,B.r(s,A.as9,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.H,12)],x.V),E.wZ,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9B(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nz,s,s,s,!0,s,s,s,s,s,D.h_E,s,s,s,1,s,!0)
if(t.e)r=D.bck
else{w=t.c1C()
v=B.a([D.fLD,A.ae],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.r(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.foU,s,s,s),A.f,s,s,new B.p(D.bhy,s,s,u,s,s,A.n),s,s,s,s,A.yX,s,s,s))}r=B.a([new B.nI(A8.a0v,new B.m3(w,s),s),new B.nI(D.bEF,new B.m3(B.A(v,A.l,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cs(t.d))r.push(D.fgM)
else r.push(new B.nI(D.bE7,B.PX(new B.oR(new C.cQa(t),J.ad(t.d),!0,!0,!0,0,B.tr(),s),D.bbz),s))
r=B.w7(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bg9,r,s,!1,!1,s,s)}}
C.ZX.prototype={
S(){return new C.azv(B.a([],x.bx))},
UT(d){return this.d.$1(d)}}
C.aGS.prototype={}
C.azv.prototype={
b3t(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b6,A.aP),w),u=this.gb0i()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aP),w)
w.aW(0,u)
return new C.aGS(v,w,f)},
EE(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qB,new C.cPh(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a4()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b6,A.aP),v)
t=m.gb0i()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aP),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aP),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aP),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aP),v)
n.aW(0,t)
r.push(new C.aGS(o,n,p.c))}if(r.length===0)r.push(m.b3t("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpy()
q=r.a
q.UT(q.c)}q=r.d
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
s.P$=0}r.a3()},
gpy(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mS(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rP(n,w,v,t,u)},
Bp(){var w=0,v=B.j(x.H),u=this,t
var $async$Bp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpy()
t=u.a
w=2
return B.b(t.UT(t.c),$async$Bp)
case 2:return B.h(null,v)}})
return B.i($async$Bp,v)},
c9z(){this.m(new C.cPg(this))
this.EE()},
b_e(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPj(w,d,v))
w.EE()},
c9A(d,e){var w=A.d.cH(this.w,e)
this.m(new C.cPr())
this.EE()
$.aW.x1$.push(new C.cPs(w))},
Rg(d){return this.cof(d)},
cof(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l8(80,1400,A.eP),$async$Rg)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Rg)
case 8:p=f
o=q.b.toLowerCase()
n=J.ajd(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPk(d,n,p))
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
return B.i($async$Rg,v)},
yt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hFD(r,t.gpy()),$async$yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPi(t,s))
t.EE()
case 1:return B.h(u,v)}})
return B.i($async$yt,v)},
cox(d){var w,v=this,u=null,t=F.fOe(d.c)
if(t==null)return new B.bL(A.a7,u,u,B.ho(D.bTC,D.fOd,new C.cPm(v,d),u),u)
w=x.p
return new B.D(A.cy,new B.an(A.a0,u,A.ac,A.t,B.a([B.bx(B.l(12),B.fR(t,A.A,u,u,A.ck,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6B(A.jM,new C.cPn(v,d)),A.bm,v.b6B(A.cz,new C.cPo(v,d))],w),A.l,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6B(d,e){var w=null
return B.aH(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hL,B.X(d,A.c,w,w,w,18),w),A.cT,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aU,0,w,w,A.cT,w,w,A.aj)},
JV(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bp(),$async$JV)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hhI(s,t.gpy(),new C.cPq(t)),$async$JV)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eI(B.a([new B.D(A.po,B.ho(D.bYn,D.fUu,m.gaAM(),B.fv(l,l,l,l,l,l,l,l,l,l,l,A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aI(l,l,l,l,A.as8,l,l,l,new C.cPt(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Z5,l,1,l,l,l,!1,l,!1,E.nz,l,l,l,!0,l,l,l,l,l,D.fP5,l,l,l,1,l,!0),i=Ay.aWL(N.lG,A.c,Ag.XR,A.oK,D.fPQ,m.gc9y()),h=B.l(18),g=m.gayI(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.iD,12)],x.V)
f=B.az(l,B.r(l,new B.a5(92,142.1818181818182,B.ev(A.A,F.apI(m.gpy()),A.f,A.dD),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.r(l,B.A(B.a([f,A.ew,B.E(B.x(B.a([D.h1f,A.ax,B.d(F.hg8(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fCo,l,l,l),A.W,B.dh(E.arr,E.aXk,g,B.bp(A.d_,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.j,0,A.p),1)],k),A.l,l,A.e,A.j,0,l,l),A.f,l,l,new B.p(E.Z5,l,l,h,l,l,A.n),l,l,l,l,A.bg,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(12),A.dt),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.p1,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(12),A.dt),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.T,w,A.T,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(12),A.dt),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lG.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fCW,l,l,l)
r=B.aI(l,l,l,l,D.bX_,l,l,l,v===0?l:new C.cPu(m,v),l,l,l,l,"Move up",A.cg)
q=h.length
p=B.aI(l,l,l,l,D.c2C,l,l,l,v===q-1?l:new C.cPv(m,v),l,l,l,l,"Move down",A.cg)
q=q===1?l:new C.cPw(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.r(l,B.x(B.a([new B.c8(A.aL,A.e,A.j,A.l,l,A.p,l,0,B.a([s,A.b3,r,p,B.aI(l,l,l,l,B.X(A.ej,A.pk,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cg)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e6(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dt),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.ci,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.cox(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e6(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dt),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(E.nz,l,new B.bH(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9J(g),A.en,D.bCG,l,l,l))}return B.oO(!0,B.c4(j,E.ajc,B.cl(f,l,l,D.bDa,l,l,A.ah,!1),l,!1,!1,i,l),new C.cPx(m),x.C)}}
C.azx.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nz,q=B.l(16),p=B.l(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d_.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eO,B.aH(!1,A.a3,!0,t,B.aP(!1,q,!0,B.r(t,B.A(B.a([B.r(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aVR,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eH,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.j,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bg,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arZ.prototype={
S(){return new C.aFG()}}
C.aFG.prototype={
Y(){this.a4()
this.a_G()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a24()},
a24(){var w=0,v=B.j(x.H),u=this,t
var $async$a24=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dL(t,x.H),$async$a24)
case 2:u.d=null
if(u.c!=null)u.m(new C.elU(u))
w=3
return B.b(u.a_G(),$async$a24)
case 3:return B.h(null,v)}})
return B.i($async$a24,v)},
a_G(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZC(B.cD(n,0,null),new B.Qj(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iX(0).dh(0,A.qy),$async$a_G)
case 7:if(r.c==null){w=1
break}r.d.tZ(!1)
r.m(new C.elS(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.elT(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_G,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccE(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.elV(w))}else{v.qq(0)
w.m(new C.elW(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bN
n=B.l(8*n.d)
m=B.a([D.jC.j(0.92),D.Mq.j(0.95)],x.O)
w=B.L(A.c3.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qT,A.c3,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bN(new B.p(o,o,w,n,o,new B.a8(A.aA,A.aE,A.x,m,o,o),A.n),A.bi,B.at(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.P,0,A.p),o,o,o),o)}if(p.f)return B.at(B.X(A.aqG,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bdc
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([B.ev(A.A,new B.a5(r,q,new B.AO(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.r(o,B.X(A.hj,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a6),o,o,o,o,new B.S(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bx(n,new B.an(A.a0,o,A.b1,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccD(),o,o,o,o,o,o,!1,A.a4)}}
C.ye.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jE.prototype={}
C.aeD.prototype={
B(d){return B.ph(new C.e8j(this,B.Q(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.ae1.prototype={
B(d){var w,v,u=null,t=B.Q(d).ax.a===A.J,s=B.l(18),r=B.l(18),q=B.L(D.jC.j(t?0.35:0.4),A.r,1),p=t?D.N4:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cC,14)],o),m=B.l(10),l=B.L(A.c3.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dJ,6)],o)
w=this.c
o=B.E(B.r(u,new B.fH(0.5625,C.imc(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.ane,u,u,u,u),1)
m=D.jC.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jC,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aH(!1,A.a3,!0,u,B.aP(!1,s,!0,B.r(u,B.x(B.a([o,B.r(u,B.x(B.a([l,A.cQ,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aD:D.boW,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.alv,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yh.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o7.prototype={}
C.blH.prototype={
a_P(d){var w=null
return new B.bL(A.a7,w,w,B.BX(A.A,B.r(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cd7(){return this.a_P(1)},
azp(d){var w=null,v=B.l(8),u=B.L(A.iv,A.r,0.9)
return B.r(A.A,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agL,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.r(v,v,A.f,v,v,new B.p(v,v,B.L(A.iv,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dN(B.r(v,v,A.f,v,v,new B.p(v,v,B.L(A.iv,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.l,v,A.ba,A.j,0,v,v),A.ax,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azp("TAARIFA ZA WANANDOA"),A.am,w.cd7(),A.cQ,w.a_P(0.9),A.cQ,w.a_P(0.7),A.T,w.azp("TAMKO LA MAKUBALIANO"),A.fD,w.a_P(1),A.cQ,w.a_P(0.95),A.T,w.azp("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.j,0,A.p)}}
C.aeG.prototype={
B(d){return B.ph(new C.eqG(B.Q(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.agm.prototype={
B(d){var w,v,u,t,s,r=null,q=B.Q(d).ax.a===A.J,p=B.l(18),o=B.l(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bos:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cC,14)],l),j=B.l(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dJ,6)],l)
w=this.c
v=C.hgE(w.a)
if(v==null)v=A.d.gH(D.SJ)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.r(r,new B.fH(0.5625,new B.an(A.a0,r,A.b1,A.t,B.a([B.bS(0,B.fR(C.hgD(v.d),A.A,r,r,A.ck,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.am9,new C.blH(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.ane,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:A3.N5,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aH(!1,A.a3,!0,r,B.aP(!1,p,!0,B.r(r,B.x(B.a([l,B.r(r,B.x(B.a([i,A.cQ,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aD:D.bgN,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.alv,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.lb.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9b.prototype={}
C.X7.prototype={
S(){var w=$.aw()
return new C.aFX(new B.cw(null,x.A),new B.au(A.aw,w),new B.au(A.aw,w),B.mZ(0,null,null),A.d.gH(D.a5J),D.dX7,B.a([],x.L),B.a([],x.gE))}}
C.aFX.prototype={
Y(){var w,v=this
v.a4()
v.w=v.a.c
v.z=new C.Ae(C.fSa(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fR3().bG(new C.etD(v),w)
$.rk().jp(0,"assets/images/ngmy_logo.png").bG(new C.etE(v),w).eB(new C.etF())},
t(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.t()
w.a3()},
afw(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l8(88,1600,A.eP),$async$JA)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JA)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hFU(m,p),$async$JA)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bG1(new B.qa(o,1),m),$async$JA)
case 10:if(r.c!=null)r.m(new C.etf(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afw("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JA,v)},
XJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hFU(s,q),$async$XJ)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bG1(new B.qa(r,1),s),$async$XJ)
case 4:if(t.c!=null)t.m(new C.etb(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XJ,v)},
afx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etm(q))
t=4
q.a.toString
p=C.iri()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afx)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etn(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afw(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eto(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afx,v)},
a_U(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_U=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eth(q,i))
t=4
q.a.toString
p=C.irh()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_U)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eti(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.etj(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etk(q))
$.aW.x1$.push(new C.etl(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_U,v)},
cdn(d){this.m(new C.etg(this,d))},
EV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etd(q))
t=4
w=7
return B.b($.aW.gmV(),$async$EV)
case 7:w=8
return B.b(B.bQ(A.mV,null,x.H),$async$EV)
case 8:k=$.aW.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qk))throw B.W("The page is not ready yet.")
w=9
return B.b(p.mg(1800/p.gZ(0).a),$async$EV)
case 9:o=e
w=10
return B.b(o.hr(A.hl),$async$EV)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A9.ahJ(J.eT(A.dQ.gaU(n)),"ngmy_news.png","image/png"),$async$EV)
case 11:m=e
q.afw(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afw(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ete(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EV,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.lp,a2,a2,a2,new C.etu(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bYU,a2,a2,a2,new C.etv(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.oJ,a2,a2,a2,a4?a1.gb1B():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eI(v,a2,a2,!0,!0,A.C5,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f9N,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eQ,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.r(a2,new B.fH(0.7142857142857143,B.ev(A.A,new B.en(new C.b34(t,s,r,a1.x,a2),a1.d),A.f,A.dD),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tL,a2,a2,a2)
t=a1.as?a2:a1.gcdm()
t=B.a([B.E(B.dh(D.bZG,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ci,a2,a2,a2),t,B.bp(D.uh,a2,a2,a2,A.c,A.h9,a2,a2,new B.b9(B.l(14),Q.vW),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.l(10),B.fR(r,A.A,a2,a2,A.ck,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aI(a2,a2,a2,a2,D.bWh,a2,a2,a2,a1.as?a2:a1.gbNe(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tL,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aV9("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dpS[o]
p.push(B.n3(a2,D.uh,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pW,a2,a2,a2),A.hn,new C.etw(a1,n),a2,a2,Q.vW,a2))}p=B.bW(A.bH,p,A.bs,a2,6,8)
m=a1.Q
m=B.bW(A.bH,B.a([D.h_N,A.bc,B.jx(a2,a2,a2,D.fKj,a2,new C.etx(a1),m==="en",a2,a2,a2,a2),A.ae,B.jx(a2,a2,a2,D.fKe,a2,new C.ety(a1),m==="sw",a2,a2,a2,a2)],w),A.vQ,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tL,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5J,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gI(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTB(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5J,10,a2,j),h=j.$ti,j=new B.bR(j,j.gI(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTB(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdp()
h=B.l(18)
v=B.a([new B.ac(0,A.G,A.bE.j(0.4),A.H,18)],v)
v=B.a([u,A.aB,new B.D(A.cy,s,a2),t,A.aB,new B.D(A.cy,r,a2),q,A.T,p,A.W,m,A.aB,new B.D(A.cy,l,a2),new B.a5(a2,78,k,a2),A.T,new B.a5(a2,78,j,a2),A.aO,B.az(a2,B.r(A.A,B.A(B.a([D.bZA,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fE,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.v3,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dHk,A.au,D.bJw],w),A.l,a2,A.e,A.j,0,a2,a2),A.T],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a7
q=e?A.b7.j(0.35):D.uh
p=new B.aN(16,16)
d=new B.ay(A.bA,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.r(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fAf,a2,a2,a2),A.f,a2,Aa.XC,new B.p(q,a2,new B.bH(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cy,A.hK,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.db4[o]
t.push(B.n3(a2,D.uh,B.d(a0,a2,a2,a2,a2,a2,a2,A.KH,a2,a2,a2),A.hn,new C.etz(a1,a0),a2,a2,Q.vW,a2))}u.push(B.bW(A.bH,t,A.bs,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aV9("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.etA(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdo()
u.push(B.A(B.a([t,A.ae,B.IJ(A.zE,s,B.o1(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1B()
u.push(B.dh(A.oJ,D.fWc,t,B.bp(A.cY,a2,a2,a2,a2,A.Kp,a2,a2,new B.b9(B.l(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.alU,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.L(E.kr.j(0.5),A.r,1)
v.push(B.bS(0,B.e9(B.at(B.r(a2,B.A(B.a([E.aat,A.ew,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jy,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.p(E.BX,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bFA,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.C5,new B.an(A.a0,a2,A.ac,A.t,v,a2),a2,!1,!1,a2,a2)},
aV9(d){var w=null
return B.bt(w,new B.b6(4,B.l(14),A.a1),w,A.f_,w,w,w,w,!0,w,w,w,w,w,w,D.uh,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Z.EJ,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTB(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b1(d.f),p=s?A.bE:A.bA
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.r(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.kx,t,t,t,t),A.fD],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.r(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bBE,t,t,t,t))
w.push(A.cQ)
w.push(new B.D(A.jr,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.r(t,B.x(w,A.l,t,A.ba,A.j,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iQ,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.etc(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ae.prototype={
bfb(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ae(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOf(d){var w=null
return this.bfb(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjl(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjj(),B.U(w).k("N<1,n>")).bY(0,new C.cjk())
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
return this.bfb(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG7(d){return this.f}}
C.tP.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cb.prototype={
a7(){return"NewsFrame."+this.b}}
C.lx.prototype={}
C.b34.prototype={
rW(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1D(d,e,f,g){return this.rW(d,e,null,1.25,f,A.bt,g)},
Qz(d,e,f,g,h){return this.rW(d,e,f,1.25,g,A.bt,h)},
azv(d,e,f,g,h){return this.rW(d,e,null,f,g,A.bt,h)},
azu(d,e,f,g,h){return this.rW(d,e,f,g,0,A.bt,h)},
b1F(d,e,f,g,h){return this.rW(d,e,null,f,0,g,h)},
cdt(d,e,f,g,h,i){return this.rW(d,e,f,g,0,h,i)},
azt(d,e,f,g){return this.rW(d,e,null,f,0,A.bt,g)},
afA(d,e,f){return this.rW(d,e,null,f,0,A.bt,A.cV)},
b1E(d,e,f,g,h){return this.rW(d,e,f,g,0,h,A.cV)},
cds(d,e,f,g){return this.rW(d,e,null,f,0,g,A.cV)},
cdr(d,e,f,g){return this.rW(d,e,f,g,0,A.bt,A.cV)},
afB(d,e,f,g,h,i){return this.rW(d,e,f,g,h,A.bt,i)},
b1C(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.eo(d,u,u,A.cL,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jh(1),u,u,h,u,A.bY,u,A.ct)
v.o8(g)
if(!v.b.a.c.gaGB())return w
w-=2}return j},
afy(d,e,f,g,h,i,j,k){return this.b1C(d,e,f,g,h,i,j,k,A.bt)},
aBH(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.r(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.r(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.j,0,A.p)},
aBG(d){return this.aBH(null,!1,d)},
aiy(d,e){return this.aBH(null,d,e)},
cvm(d,e){return this.aBH(d,!1,e)},
gb3Q(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXR(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pi(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afy(w.gaXR(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaXR(),v,g,A.a2,v,v,v,w.azu(u,t,f,1.02,A.U),e,v,v)},
aXW(d){return this.Pi(d,A.K,null,2,78,30)},
acO(d,e,f,g,h){return this.Pi(d,e,null,f,g,h)},
c1v(d,e,f,g,h){return this.Pi(d,A.K,e,f,g,h)},
c1u(d,e,f){return this.Pi(d,A.K,null,e,f,30)},
Sz(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bN
w=v.d.as
return new B.D(A.jG,B.d(s,u,g,A.a2,u,u,u,v.b1E(w,v.b1C(t,w,A.cV,d,g,h,15,1.2,A.cI),f,1.2,A.cI),e,u,u),u)},
b9L(d){return this.Sz(d,A.K,null,3,24)},
aDa(d,e,f,g){return this.Sz(d,e,null,f,g)},
cD1(d,e,f){return this.Sz(d,A.K,e,3,f)},
b9M(d,e){return this.Sz(d,e,null,3,24)},
cD_(d,e){return this.Sz(d,A.K,null,3,e)},
cD0(d,e,f){return this.Sz(d,e,null,3,f)},
at_(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f4,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qz("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.r(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.r(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.j,0,v,v)},
Od(){return this.at_(null,!0)},
asZ(d){return this.at_(null,d)},
bJ9(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bN
return new B.D(A.hZ,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cds(this.d.as,13.5,1.2,A.cI),e,w,w),w),w)},
w9(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3Q(),h=A.o.ar(j.bD(B.c2(B.bD(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.idX(Math.max(1,B.bD(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1D(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afy(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afy(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.r(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eR,l,l,l,m.afB(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.l,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.S(18,w,18,w),l,l,l),A.T,B.A(B.a([B.d(C.bFh(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iW,A.j,0,l,l),A.am,m.aiy(!0,3)],s),A.l,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.r(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ew,B.E(B.d(i,l,1,A.eR,l,l,l,m.azt(v,u*0.9,1,A.U),l,l,l),1)],w),A.l,l,A.e,A.j,0,l,l),A.W,B.A(B.a([B.d(C.bFh(j),l,l,l,l,l,l,m.Qz(k,13,B.b1(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iW,A.j,0,l,l),A.T,m.cvm(B.b1(h),3)],w),A.l,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb3Q()
v=B.d("NGMY",l,l,l,l,l,l,m.azv(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eN(A.A,-0.03,B.r(l,B.d("NEWS",l,l,l,l,l,l,m.rW(k,r*0.72,o,1.05,-0.5,A.cI,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.S(t,s,t,s),l,l,l),l),A.b3,new B.dl(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afB(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.U),A.e2,l,l),l)],n),A.l,l,A.e,A.j,0,l,l),A.T,B.r(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iW,A.j,0,l,l)
t=m.aiy(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azt(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ax,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aiy(!0,1.4),A.ax,B.d(C.bFh(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ax,m.aBG(3)],h),A.l,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azv(v,u,1,3,A.U),A.K,l,l),A.T,m.aiy(!0,1.2),A.ax,B.A(B.a([B.d(C.bFh(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iW,A.j,0,l,l),A.ax,m.aBG(3)],h),A.l,l,A.e,A.j,0,A.p)}},
ae_(d){return this.w9(d,!1)},
afz(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.l(f)
return B.r(w,B.d(d,w,w,w,w,w,w,this.afB("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.S(v,u,v,u),w,w,w)},
cdq(d,e){return this.afz(d,null,e,null)},
b_6(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b1(this.d.w).j(0.75),s=this.azu("Roboto",15,t,1,A.cB),r=B.X(E.aoR,t,w,w,w,18),q=A.a.aB(A.oO[B.bM(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bV(v)+", "+B.bD(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.r(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h7,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
ay9(){return this.b_6(A.n4)},
b6O(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afB("Roboto",this.afy(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aBK(d,e,f){return this.b6O(d,e,f,30)},
aDd(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bN
return new B.D(A.rY,B.d(v,w,e,A.a2,w,w,w,this.cdr("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b9Q(d){return this.aDd(d,3,22)},
cDc(d,e){return this.aDd(d,e,22)},
ui(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.ck,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BJ(D.bIr,w,s)
if(v==="sepia")w=new B.BJ(D.bIq,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.r(s,B.at(B.X(A.zb,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bN(new B.p(s,s,s,s,s,new B.bY(A.A,0.95,A.x,s,0,B.a([A.L,A.Z0.j(0.38)],x.O),s,s),A.n),A.bi,s,s))
return new B.a5(d,e,new B.an(A.a0,s,A.b1,A.t,v,s),s)},
qX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b1(i),A.r,3)
i=B.L(B.b1(i),A.r,1)
return B.r(j,B.r(j,k.ui(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.eB,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.mf,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.eo9,14)],x.V)
v=k.ui(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eN(A.A,-0.035,B.r(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1E(i.as,13.5,D.biw,1.1,A.cI),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(D.bmr,j,j,j,w,j,A.n),j,e,j,j,D.bD5,j,j,d),j)
case 3:w=B.l(30)
i=B.L(B.b1(i.x),A.r,5)
return B.r(j,B.bx(B.l(25),k.ui(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b1(i.x),A.r,6)
i=B.b1(i.f)
v=t-10
return new B.a5(d,e,B.at(B.r(j,B.hV(k.ui(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a6),j,t,j,j,A.mf,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.enQ,10)],x.V)
return B.eN(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ac,A.f,B.a([B.bS(0,B.r(j,k.ui(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.t2,j,j,j),0,0,0),B.ap(j,B.eN(A.A,-0.6,B.r(j,j,A.f,A.bM.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eN(A.A,-0.6,B.r(j,j,A.f,A.bM.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b1(i.x)
return new B.a5(d,e,B.b2(B.nW(k.ui(d,e),A.aq,D.huu),new C.beH(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ui(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.i.bh(s));++m){l=new B.aN(2,2)
n.push(B.r(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c8(A.aL,A.qX,A.j,A.l,j,A.p,j,0,n,j),j))}return B.r(j,new B.an(A.a0,j,A.b1,A.t,w,j),A.f,A.eq,j,j,j,e,j,j,D.bHH,j,j,d)
case 8:w=d/2
v=B.xC(A.fP,new B.aN(w,w))
i=B.L(B.b1(i.x),A.r,5)
w-=5
return B.r(j,B.bx(B.xC(A.hT,new B.aN(w,w)),k.ui(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h8,22)],x.V)
return B.r(j,k.ui(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nW(k.ui(d,e),A.aq,D.hCK),j)
case 0:i=B.L(B.b1(i.w),A.r,2.4)
return B.r(j,k.ui(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.eB,j,j,d)}},
aR5(d,e){return this.d.e===D.Tk?A.bN:this.bJ9(d,e)},
Xf(d){return this.aR5(d,A.K)},
gaCu(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCt(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.L(B.b1(v.w),A.r,1.6)
t=v.x
s=B.b1(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1F(v.Q,19,1.15,A.cI,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qz("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.ax)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afA(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.r(n,B.jm(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bg,n,n,d)},
gclK(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aau(d,e,f,g){return B.cq(new C.cjm(this,e,d,f,g))},
aat(d){return this.aau(d,22,!0,18)},
Xs(d,e){return this.aau(d,22,!0,e)},
aSb(d,e,f){return this.aau(d,22,e,f)},
bL9(d,e,f){return this.aau(d,e,!0,f)},
bcP(d,e,f,g){return B.cq(new C.cjn(this,e,d,g,!0,f))},
ckx(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ae_(824),A.aB,k.aXW(824),k.b9L(824),A.T,k.Od(),A.af,B.at(k.qX(824,360),j,j,j),k.Xf(824),A.af,B.E(k.aat(3),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ae_(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acO(440,A.bn,3,62,26),k.aDa(440,A.bn,2,20),A.b3,k.at_(B.b1(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Kq,B.x(B.a([k.qX(362,310),k.Xf(362)],w),A.l,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.W,k.aBG(2),A.af,B.E(k.aat(3),1)],w),A.al,j,A.e,A.j,0,A.p)
case 2:w=k.w9(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.c1v(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cD1(788,u?B.b1(h.f):A.c,22))
v=B.r(j,B.x(s,A.l,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Cr,j,j,j)
u=B.a([B.at(k.qX(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tk){h=A.w.j(0.65)
u.push(B.ap(0,B.r(j,B.d(s,j,2,A.a2,j,j,j,k.azu(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lL,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ac,A.t,u,j),A.T,k.Od(),A.W,B.E(k.Xs(2,21),1)],t),A.al,j,A.e,A.j,0,A.p)
case 3:h=k.w9(824,!0)
w=k.qX(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b8,j,A.ac,A.t,B.a([w,B.ap(0,B.r(j,k.Pi(780,A.bn,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a8(A.b4,A.b8,A.x,v,j,j),A.n),j,j,j,j,D.bFT,j,j,j),j,j,0,0,j,j)],u),j),k.b9M(824,A.bn),A.T,k.Od(),A.W,B.E(k.aat(3),1)],u),A.al,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ae_(824),A.aB,k.aXW(824),k.b9L(824),A.T,k.Od(),A.af,B.E(k.bcP(3,300,B.x(B.a([k.qX(300,300),k.Xf(300)],h),A.l,j,A.e,A.j,0,A.p),360),1)],h),A.al,j,A.e,A.j,0,A.p)
case 5:w=k.w9(824,!0)
v=x.p
u=B.x(B.a([k.acO(440,A.bn,3,62,26),k.aDa(440,A.bn,2,20),A.b3,k.asZ(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bz,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTK,new B.D(A.hZ,k.qX(364,h.e===D.Tk?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Xs(2,21),1)],v),A.al,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.ae_(824),A.af,k.c1u(824,2,70),k.cD_(824,21),A.T,k.Od(),A.af,B.E(k.bcP(3,340,B.at(k.qX(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 7:w=k.w9(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bFh(new B.V(u,0,!1))
t=x.p
v=B.a([B.r(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qz(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bg,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1F(h.Q,24,1.15,A.cI,A.U),j,j,j))
v.push(A.b3)
if(k.gaCu())v.push(k.aCt(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.j,0,A.p),j),B.r(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.alt,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acO(570,A.bn,3,62,28),k.cD0(570,A.bn,20),A.T,k.asZ(!1),A.T,B.at(k.qX(570,330),j,j,j),k.Xf(570),A.W,B.E(k.aSb(2,!1,17),1)],t),A.al,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.al,j,A.e,A.j,0,A.p)
case 8:w=k.w9(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qz(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.r(j,B.x(B.a([t,A.am,k.Pi(788,A.bn,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bEa,j,j,j),k.b9M(824,A.bn),A.W,B.at(k.qX(824,310),j,j,j),k.Xf(824),A.T,k.Od(),A.W,B.E(k.aat(3),1)],s),A.al,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w9(824,!0),A.aO,new B.an(A.a0,j,A.ac,A.t,B.a([k.qX(824,430),B.ap(18,k.cdq(k.c.b,17),j,j,18,j,j,j)],w),j),A.bz,k.aBK(824,3,66),k.b9Q(824),A.af,B.r(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ay9(),A.aB,B.E(k.Xs(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w9(824,!0),A.bz,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afz(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aO,k.b6O(410,4,58,28),k.aDd(410,6,20),A.b3],w),A.E,j,A.e,A.j,0,A.p),j),V.aTL,k.qX(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aB,k.ay9(),A.aO,B.E(k.Xs(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 12:w=k.w9(824,!0)
v=k.qX(824,420)
u=B.hQN(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.H,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ac,A.t,B.a([v,B.ap(22,B.fz(j,B.r(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdt(i,30,A.c,1,A.cI,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bG8,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bz,k.aBK(824,3,62),k.b9Q(824),A.af,B.r(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.b_6(A.lQ),A.aB,B.E(k.Xs(2,18),1)],r),A.al,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w9(824,!0)
u=h.w
t=x.p
w=B.a([k.qX(824,380),B.ap(j,k.afz(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aBK(824,2,60)
r=k.cDc(824,2)
p=k.ay9()
o=B.E(k.aSb(2,!1,18),1)
n=B.L(B.b1(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ac,A.t,w,j),A.aO,s,r,A.W,p,A.aB,o,A.af,B.r(j,B.A(B.a([B.bx(B.l(14),k.ui(150,104),A.aq),A.p_,B.E(B.x(B.a([k.afz("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.T,B.d(q,j,2,A.a2,j,j,j,k.azt(i,19,1.15,A.I),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eH,B.b1(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bg,j,j,j)],t),A.al,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.w9(824,!0),A.bz,k.acO(824,A.bn,3,62,30),k.aDa(824,A.bn,2,22),A.W,k.asZ(!1),A.W,B.at(k.qX(824,330),j,j,j),k.aR5(824,A.bn),A.aO,B.E(k.bL9(2,40,21),1)],x.p),A.al,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,new B.bN(new B.p(s,s,s,s,s,new B.a8(A.aA,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bi,s,s),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b2(s,s,s,new C.bba(B.b1(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bGF,B.x(B.a([B.E(t.ckx(),1),A.T,B.r(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fD,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1D(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qz(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iW,A.j,0,s,s)],o),A.al,s,A.e,A.j,0,A.p),s))
v=B.b1(w)
n.push(B.bS(0,new B.du(!0,B.b2(s,s,s,new C.bud(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b1(p).j(0.75)
v=B.L(B.b1(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hV(B.fR(q,A.A,s,s,A.ck,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n4,B.b1(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azv(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.du(!0,B.d3(B.r(s,B.A(o,A.l,s,A.e,A.P,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bHQ,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jm(new B.an(A.a0,s,A.ac,A.t,n,s),A.t,s),s)}}
C.beI.prototype={
ju(d){return C.huE(d)},
k9(d){return!1}}
C.beH.prototype={
a5(d,e){var w,v=C.huE(e)
$.R()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aD(d){return!d.b.A(0,this.b)}}
C.bwK.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e5()
o.d_(3)
w=$.R()
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
C.bba.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e5()
o.d_(7)
$.R()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.bY(A.A,0.5,A.x,p,0,B.a([A.Yt.j(0.13),A.L],v),p,p).aJ(0,B.bZ(r,q)))
d.N(r,q,w)}w.sav(p)},
aD(d){return!1}}
C.bud.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.ct,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dB,A.bY)
s.e5()
w=d.c
J.bo(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.o(-v/2,-t.gba(t)/2))
w.restore()},
aD(d){return!d.b.A(0,this.b)}}
C.X8.prototype={
S(){return new C.aG_()}}
C.aG_.prototype={
Y(){var w=this
w.a4()
B.fIs(w.a.c,null).bG(new C.eup(),x.g7).bG(new C.euq(w),x.a)
w.a.toString},
gaPS(){var w=D.azw[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazw(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPS()
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
a_W(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_W=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.euc(r))
t=4
q=r.gazw()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.R()
n=new B.q0(new B.pC())
m=B.zx(n,null)
i=B.K()
i.z=A.hi
m.q3(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o3().xG(J.hjM(p),J.hjM(o)),$async$a_W)
case 7:l=e
w=8
return B.b(l.hr(A.hl),$async$a_W)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.w1(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eud(r))
r.c.L(x.q).f.T(D.fjq)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_W,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.lp,s,s,s,new C.euj(d),s,s,s,s,s,s),p=x.p
q=B.eI(B.a([B.bO(!1,D.fYR,s,s,!0,s,s,s,t.y||r==null?s:t.gcdu(),s,s)],p),s,s,!0,!0,A.C5,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h1S,s,s,s,1,s,!0)
if(r==null)p=A.m3
else{w=B.E(new B.D(A.bQ,B.at(new B.fH(t.gaPS(),B.cq(new C.euk(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iQ,B.jx(s,s,s,B.d(D.azw[u].a,s,s,s,s,s,s,A.ab5,s,s,s),s,new C.eul(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.r(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.c_n,B.E(B.kX(s,s,s,6,1,new C.eum(t),t.f),1),D.bZX],p),A.l,s,A.e,A.j,0,s,s),D.fW5,A.am,B.bO(!1,D.fVO,s,s,!0,s,s,s,new C.eun(t,d),s,s)],p),A.l,s,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Zh,s,s,s,s,s,s,D.bDx,s,s,s)],p),A.l,s,A.e,A.j,0,A.p)}return B.c4(q,A.C5,p,s,!1,!1,s,s)}}
C.bef.prototype={
a5(d,e){var w
$.R()
w=B.K()
w.z=A.ck
return d.q3(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aD(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1f.prototype={
S(){var w=$.aw(),v=x.A
return new C.aHo(new B.au(A.aw,w),new B.au(new B.ba("NGMY",A.b6,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6k),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oX.prototype={}
C.aHo.prototype={
gaY4(){var w,v,u=this
if(u.p1)w=new B.rC(1,u.p2,0.9,u.p3).jd().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.i.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a4()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f3p(w))},
t(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a3()},
Zu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rk().jp(0,"assets/images/ngmy_logo.png"),$async$Zu)
case 7:q=e
p=J.eT(J.w1(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bG1(new B.qa(p,1),o),$async$Zu)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f2h(r,p))
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
QC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l8(92,1800,A.eP),$async$QC)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QC)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bG1(new B.qa(p,1),n),$async$QC)
case 9:if(r.c==null){w=1
break}r.m(new C.f2F(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QC,v)},
b6a(){var w=this
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
aZR(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCH(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dsZ)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCH(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCH(C.hep(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCH(C.hep(1-a0*0.5,n,n,n),w)}return a1?C.bCH(C.hep(-1,255,255,255),w):w},
aDj(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xE(u,v,w)
this.dx.pz(new C.f2P(t),!0)
return t},
b8K(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDj()
w=C.ior(e.d.a.a,e.db)
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
return C.ikP(d,k,v,a0,j,e.gaY4(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAQ(){return this.b8K(null)},
DP(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmV(),$async$DP)
case 3:w=4
return B.b(B.bQ(A.eT,null,x.H),$async$DP)
case 4:w=5
return B.b($.aW.gmV(),$async$DP)
case 5:s=$.aW.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qk)){u=null
w=1
break}w=7
return B.b(r.mg(1080/r.gZ(0).a),$async$DP)
case 7:w=6
return B.b(e.hr(A.hl),$async$DP)
case 6:q=e
u=q==null?null:J.eT(A.dQ.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DP,v)},
abo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f20(q))
t=4
w=7
return B.b(q.DP(),$async$abo)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cR.gcu().aN(p)
n=C.Cr(null,null,null,null,D.oT,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8K(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f21(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abo,v)},
B7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f1Z(q))
t=4
w=7
return B.b($.aW.gmV(),$async$B7)
case 7:w=8
return B.b(B.bQ(A.mW,null,x.H),$async$B7)
case 8:w=9
return B.b($.aW.gmV(),$async$B7)
case 9:k=$.aW.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qk))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.mg(1080/p.gZ(0).a),$async$B7)
case 10:o=e
w=11
return B.b(o.hr(A.hl),$async$B7)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A9.ahJ(J.eT(A.dQ.gaU(n)),"ngmy_quote.png","image/png"),$async$B7)
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
l=B.ab(i)
k=q.c
if(k!=null)k.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2_(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B7,v)},
cnG(){var w=this.p4
w.toString
return B.cq(new C.f2y(this,w))},
b1M(d,e){var w=null
return B.bt(w,w,w,w,w,D.fuo,w,w,!0,new B.b6(4,B.l(16),Q.vW),w,w,w,w,w,D.uh,!0,w,w,w,w,new B.b6(4,B.l(16),D.b5u),w,w,w,w,w,w,w,w,Ad.ER,e,w,w,w,w,w,w,w,D.fA5,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yD(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aWt,w,w,w))
return new B.D(H.alj,B.A(u,A.l,w,A.e,A.j,0,w,w),w)},
b1L(d,e){var w=null,v=B.l(18),u=B.L(A.bA,A.r,1)
return B.r(w,B.aH(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.ju),A.f,w,w,new B.p(D.uh,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wh(d){return this.b1L(d,A.bI)},
oz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.v3:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.L(f?A.L:A.bA,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.k_,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.k_,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.P,0,r,r),r,r,A.b0,new B.p(w,r,u,v,r,p,A.n),A.h5,r,r,r,r,A.GP,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahu(d,e,f){return this.oz(d,null,e,f)},
azA(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eN:A.bA,s=x.p
v=B.a([B.cT(w,d,w,w,A.b0,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h5,w,e,w,w,new B.S(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.ax,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1P(d,e,f,g,h,i){return this.azA(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aVh,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.est,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f2L(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.r(u,B.d(j,u,u,u,u,u,u,A.Vz,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a0Z,u,u,u))
s=B.A(s,A.l,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.abm(w).cPB(A.b7,A.bA,A.b7.j(0.2),A.c,D.f91,4)
return new B.D(A.yE,B.x(B.a([s,B.Z_(B.kX(u,u,u,g,f,new C.f2M(this,h),A.i.D(e,f,g)),w)],t),A.l,u,A.e,A.j,0,A.p),u)},
ajx(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ajW(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dn:B.b1(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bTd:o
n.push(B.az(o,B.r(o,t,A.f,o,o,new B.p(s,o,new B.bH(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f2O(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bH,n,A.bs,o,10,10)},
bPi(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6k
else{v=x.a8
w=B.C(new B.Y(D.a6k,new C.f1R(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1M("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f1S(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.abn,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1M("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f1T(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yD("DESIGNS",A.uN)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d1Q[q]
r.push(new B.D(A.iQ,o.ahu(p,o.x===p,new C.f1U(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.ce(B.A(r,A.l,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hP(n,new C.f1V(o,w),w.length,n,n,A.aL,new C.f1W(),!1),n),A.T,o.b1L(B.x(B.a([B.iQ(A.b7,n,n,A.ag,!0,new C.f1X(o),n,D.fML,n,D.fIV,o.k3),B.iQ(A.b7,n,n,A.ag,!0,new C.f1Y(o),n,n,n,D.fG4,o.k2)],s),A.l,n,A.e,A.j,0,A.p),A.alT)],s),A.E,n,A.e,A.j,0,A.p)},
cJN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDj()
if(a7.length===0)return a5.wh(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KQ,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gam(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ci.E"))
A.d.fj(m)
l=m.length!==0&&A.d.cE(m,new C.f3e(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f3l(a5)
j=new C.f3n()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KQ,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eN:A.bA
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.r(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bH(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Or,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f3f(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wh(B.bW(A.bH,o,A.vQ,a6,6,6))
i=B.a([a5.oz("All words",K.aqp,!1,new C.f3g(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahu("Sentence "+a3,!1,new C.f3h(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahu("Clear picks",!1,new C.f3i(a5)))
i=B.bW(A.bH,i,A.bs,a6,8,8)
g=a5.yD("SIZE OF THE PICKED WORDS",D.apQ)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dz8[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f3j(e,k)
f.push(a5.ahu(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bW(A.bH,f,A.bs,a6,8,8),A.W,a5.oz("Make every word normal",A.k9,!1,new C.f3k(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cEJ(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bJ5,B.d(A.d.fg(D.aBh,new C.f2Y(q)).b,p,p,p,p,p,p,D.fsI,p,p,p)],o),A.l,p,A.e,A.j,0,p,p),m=B.cq(new C.f2Z(q)),l=q.yD("HIGHLIGHT BEHIND THE WORDS",A.a2T),k=q.p1?-1:q.k4
k=q.ajW(k,new C.f3_(q),D.ddg)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.W,m,l,B.bW(A.bH,B.a([k,B.az(p,B.r(p,D.bWb,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.fm5,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f32(q),p,p,p,p,p,p,!1,A.a4)],o),A.vQ,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KQ,p,p,p)],o)
if(q.gaY4()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajx("Colour",l,0,360,new C.f33(q),""+A.i.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajx("Shade",k,0.15,0.9,new C.f34(q),""+A.i.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f35(q),1,""+A.i.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.wh(B.x(m,A.l,p,A.e,A.j,0,A.p))],o))}n.push(q.yD("LOOK",A.wS))
m=B.a([q.oz("Bold",I.apO,q.fy,new C.f36(q)),q.oz("Italic",I.apP,q.go,new C.f37(q))],o)
for(u=0;u<3;++u){l={}
k=D.d36[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.v3:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.bA,1,A.r,-1)
m.push(B.az(p,B.r(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bH(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f38(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bH,m,A.vQ,p,8,8))
n.push(q.yD("COLOUR",A.mj))
n.push(q.ajW(q.fx,new C.f39(q),D.dpj))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KQ,p,p,p))
n.push(q.yD("SIZE AND PLACE",A.HN))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f30(q),1,""+A.i.V(m*100)+"%")
l=q.k1
n.push(q.wh(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f31(q),0.3,""+A.i.V(l*100))],o),A.l,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cnH(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.L(A.b7.j(0.6),A.r,1.6)
u=B.a([A.b7.j(0.18),A.bE.j(0.12)],x.O)
return B.az(q,B.r(q,B.x(B.a([B.r(q,D.c0S,A.f,q,q,D.b8s,q,62,q,q,q,q,q,62),A.aB,D.fKc,A.am,D.fP3],x.p),A.l,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(D.uh,q,v,w,q,new B.a8(A.a7,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bEK,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1O(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bx(B.l(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.ck,A.c_,!1,q,!1,q,q),q),A.aq),A.bc,B.E(B.x(B.a([D.fJI,A.T,B.bW(A.bH,B.a([r.oz("Change",A.jM,!1,r.gb1O()),r.oz("Remove",A.ej,!1,new C.f2C(r))],w),A.bs,q,6,6)],w),A.E,q,A.e,A.j,0,A.p),1)],w),A.l,q,A.e,A.j,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dlr[t]
u.push(r.oz(s.b,s.a,r.at===t,new C.f2D(r,t)))}u=B.bW(A.bH,u,A.bs,q,8,8)
switch(r.at){case 0:s=r.c5D(p)
break
case 1:s=r.c4y()
break
case 2:s=r.bL8()
break
case 3:s=r.bRB()
break
default:s=r.bNf()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.W,new B.bL(A.a7,q,q,r.oz("Reset the whole picture",A.k9,!1,new C.f2E(r)),q)],w),A.E,q,A.e,A.j,0,A.p)},
c5D(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bH,B.a([w.oz("Auto enhance",E.a2x,!1,new C.f2u(w)),w.oz("Make words easy to read",A.pC,!1,new C.f2v(w))],v),A.bs,null,8,8),A.aB,B.cq(new C.f2w(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c4y(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f28(o),0,A.i.ad(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f29(o),0,""+A.i.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f2a(o),1,""+A.i.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f2b(o),0,""+A.i.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f2c(o),0,""+A.i.V(t*100))
s=o.a0
s=o.kB("Darken",s,0,0.85,new C.f2d(o),0,""+A.i.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f2e(o),0,""+A.i.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f2f(o),0,""+A.i.V(q*100))
p=o.aR
return o.wh(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f2g(o),0,""+A.i.V(p*100))],x.p),A.l,null,A.e,A.j,0,A.p))},
bL8(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f1u(s),1,""+A.i.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f1v(s),0,""+A.i.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f1w(s),0,""+A.i.V(v*100))
u=s.x2
t=x.p
u=s.wh(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f1x(s),0,""+A.i.V(u)+"\xb0"),new B.bL(A.a7,r,r,s.oz("Negative",D.bRc,s.y1,new C.f1y(s)),r)],t),A.l,r,A.e,A.j,0,A.p))
v=s.yD("COLOUR WASH",A.Ps)
w=s.b8
q=B.a([null],x.Z)
A.d.v(q,D.azV)
t=B.a([u,v,s.ajW(w,new C.f1z(s),q),A.T],t)
if(s.b8!=null){q=s.b6
t.push(s.wh(s.ajx("Wash strength",q,0,0.9,new C.f1A(s),""+A.i.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bRB(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f22(r),0,A.o.u(A.i.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f23(r),0,""+A.i.V(w*100))
v=r.aG
u=x.p
v=r.wh(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f24(r),0,""+A.i.V(v*100))],u),A.l,null,A.e,A.j,0,A.p))
w=r.yD("LIGHT LEAK",D.bQV)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azV,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajW(q,new C.f25(r),t),A.T],u)
if(r.bf!=null){q=r.bK
u.push(r.wh(r.ajx("Leak strength",q,0,1,new C.f26(r),""+A.i.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bNf(){var w,v,u,t,s=this,r=s.aP
r=s.kB("Zoom",r,1,3,new C.f1E(s),1,""+A.i.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f1F(s),0,""+A.i.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f1G(s),0,""+A.i.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.wh(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f1H(s),0,""+A.i.V(u)+"\xb0")],t),A.l,null,A.e,A.j,0,A.p)),A.W,B.bW(A.bH,B.a([s.oz("Turn 90\xb0",H.aqS,!1,new C.f1I(s)),s.oz("Flip sideways",A.CV,s.c5,new C.f1J(s)),s.oz("Flip upside down",A.CV,s.cP,new C.f1K(s))],t),A.bs,null,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c8l(){var w=null,v=B.l(22),u=B.L(A.bA,A.r,1)
return B.r(w,B.x(B.a([D.f9d,A.W,D.fLL,A.aB,B.az(w,B.r(A.A,D.f9r,A.f,w,w,new B.p(w,w,w,B.l(16),w,G.v3,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2x(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(D.uh,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c5q(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f2p(p),m=x.p,l=B.A(B.a([D.bJb,p.oz("Reset",A.k9,!1,new C.f2l(p))],m),A.l,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KQ,o,o,o),j=p.yD("SHAPE",A.aqP),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Ds[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1P(n.$2(t,p.cy),62,u.b,s===t,new C.f2m(v,p),62))}}i=B.bW(A.bH,i,A.bs,o,8,8)
v=p.yD("RING",A.pt)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Dl[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1P(n.$2(p.cx,t),62,r.b,q===t,new C.f2n(s,p),62))}u=B.bW(A.bH,u,A.bs,o,8,8)
s=p.CW
return B.x(B.a([l,A.ax,k,j,i,v,u,A.af,p.wh(p.kB("Size",s,0.12,0.4,new C.f2o(p),0.22,""+A.i.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b4O(d){return new B.a5(null,d,new B.fH(0.5625,B.cq(new C.f2I(this)),null),null)},
cDX(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.L(A.bA,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.v3:q
t=new B.aN(14,14)
s=D.dnI[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bb,B.az(A.c4,B.cT(q,B.x(B.a([r,A.cQ,new B.qK(A.e5,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.P,0,A.p),q,q,A.b0,new B.p(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bAe,q,q,q,q,A.hJ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f2R(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.r(q,B.A(l,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bCn,A.mf,q,q,q)},
aSK(){var w,v,u=this,t=null,s=u.cDX()
switch(u.as){case 0:w=u.bPi()
break
case 1:w=u.cJN()
break
case 2:w=u.cEJ()
break
case 3:w=u.cnH()
break
case 4:w=u.c5q()
break
default:w=u.c8l()
break}v=x.p
return B.bx(A.tW,B.e9(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bDy,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.j,0,A.p),D.Zh,!0),A.aq)},
aOM(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdV(),p=B.l(16)
q=B.E(B.az(r,B.r(r,D.f9D,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbR9()
w=B.l(16)
v=B.a([new B.ac(0,A.G,A.bE.j(0.35),A.cC,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.ffD)
else t.push(D.bVh)
t.push(A.ae)
t.push(D.bLG)
return B.r(r,B.A(B.a([q,A.au,B.E(B.az(r,B.r(r,B.A(t,A.l,r,A.ba,A.j,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.v3,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.j,0,r,r),A.f,r,r,D.b7z,r,r,r,r,Av.a0l,r,r,r)},
b1N(){var w=null
return new B.D(U.a0U,B.A(B.a([B.aI(w,w,w,w,A.n5,w,w,w,new C.f27(this),w,w,w,w,w,w),D.h0M,A.b3,D.c3e],x.p),A.l,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.C5,B.bm(!0,B.cq(new C.f3o(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e5()
n.d_(7)
w=e.a
v=e.b
u=A.i.V(w*v/55)
$.R()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.aq(new B.a1(s,p,s+1.1,p+1.1),o)}},
aD(d){return d.b!==this.b}}
C.rZ.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mu.prototype={}
C.Af.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.oa.prototype={}
C.wA.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9j.prototype={}
C.asT.prototype={}
C.a1M.prototype={
S(){return new C.aJk(new B.au(A.aw,$.aw()),B.ka(!0,null,!0,!0,null,null,!1),D.dPI,B.a([],x.s),B.eA([D.Jp],x.Q))}}
C.aJk.prototype={
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.t()
this.a3()},
a1h(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1h=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().CL(90,700,700,A.eP),$async$a1h)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1h)
case 8:p=e
if(r.c!=null)r.m(new C.f9M(r,p,q))
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
return B.i($async$a1h,v)},
a1k(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1k=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hX().aJT(78,n,1100,1100),$async$a1k)
case 7:q=e
if(J.cs(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1k)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c7(p,"data:"+k+";base64,"+A.cR.gcu().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f9N(r,p))
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
return B.i($async$a1k,v)},
b6N(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cK.aN(A.d.gam(d.split(","))),A.A,u,u,A.ck,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.byn},
c5x(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.czy(C.fPu(w,this.b6N(d),f),g)},
adJ(d,e,f,g,h){var w=null,v=new C.f9K(f,e),u=new C.f9L(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.L(p?A.bA:A.b7.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ac,A.f,B.a([B.at(B.X(f?A.zq:A.Pg,A.bW,w,w,w,26),w,w,w),D.eyJ],x.p),w),w)
else p=this.c5x(g,v.$1(h),u.$1(h),34)
return B.aH(!1,A.a3,!0,s,B.aP(!1,r,!0,B.r(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bUZ],x.p),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.n_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f9J(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZX(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.l(8),B.fR(A.cK.aN(A.d.gam(h.split(","))),A.A,p,p,A.ck,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.L(n?A.bA:A.bd.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KW,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Q0,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.r(p,B.A(n,A.l,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.kx,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9N=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fSZ(),$async$a9N)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f9s(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f9t(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9N,v)},
afJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afJ=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f9v(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f9w(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f9x(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c7(p,h)}w=7
return B.b(C.fOc(q,r.cx,j,new C.b3t(r.z,r.Q,r.as,r.at),new C.f9y(r),i,m,p,k),$async$afJ)
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
if(r.c!=null)r.m(new C.f9z(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aF(d,A.eS,g).w
g=B.aF(d,A.c1,g).w
w=B.at(B.r(h,h,A.f,h,h,new B.p(A.aT,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.az(h,B.r(h,D.bYi,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bd.j(0.5),A.H,24)],v),D.c7l,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fa_(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,H.Q0,h,h,h,i.ax?h:new C.fa0(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbG1()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.H,10)],v)
s.push(B.h6(B.aH(!1,A.a3,!0,h,B.aP(!1,h,!0,B.r(h,B.X(i.e==null?A.wH:A.hM,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wZ,A.a6),h,40,h,h,h,h,h,40),A.cT,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cT,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b51),h,h,h,h,h,h,h,h,Z.EJ,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iQ,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,h,D.aVT,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.fa1(i)
s=i.aZX(A.ln,q,r,i.gco8(),s)
r=i.z
r=B.E(i.adJ(new C.fa3(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bm,B.E(i.adJ(new C.fa4(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.fa5(i)
s=i.aZX(A.uI,r,p,i.gcog(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adJ(new C.fa6(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fQm,A.ax,D.fTi,A.bz,u,A.T,D.fRG,A.aB,v,A.bz,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bm,B.E(i.adJ(new C.fa7(i),r,!0,n,o),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fVe],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.L(D.bpP,A.r,1)
w=C.aid(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bL(A.a7,h,h,B.r(h,B.A(B.a([D.bZq,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fyH,h,h,h),B.aP(!1,h,!0,D.esK,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fa8(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.P,0,h,h),A.f,h,h,new B.p(D.bhG,h,u,v,h,h,A.n),h,h,h,h,D.bC1,h,h,h),h)],t))}o.push(A.bz)
o.push(D.fGN)
o.push(A.T)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dfs[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bA,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.bz(1,A.bb,new B.D(A.jr,B.az(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b0,new B.p(v,h,new B.bH(k,k,k,k),h,h,h,A.a6),A.eJ,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fa9(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.j,0,h,h))
o.push(A.bz)
o.push(D.h__)
o.push(A.T)
o.push(B.cq(new C.faa(i)))
o.push(A.bz)
o.push(D.fOp)
o.push(A.T)
w=B.a([i.b9J("auto","Let AI choose",A.ed,A.S7)],t)
for(v=x.O,m=0;m<11;++m){j=D.x2[m]
u=j.d
w.push(i.b9J(j.a,j.b,j.c,B.a([B.b1(A.d.gH(u).a),B.b1(A.d.gH(u).b)],v)))}o.push(B.bW(A.bH,w,A.bs,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.l(16)
u=B.L(i.r?A.bd.j(0.5):A.bA,A.r,1)
o.push(B.r(h,B.iQ(h,A.bd,h,h,h,new C.fa2(i),D.bUr,D.fZe,h,D.fJb,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aV3,h,h,h)],t))
o.push(A.bz)
w=i.ax?h:i.gcdZ()
v=B.ft(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fft:A.I_
o.push(new B.a5(h,54,B.lS(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ng,h,h,h),w,v),h))
return new B.D(new B.S(0,0,0,f.f.d),B.r(h,B.bm(!0,B.ce(B.x(o,A.al,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.wt,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aez,h,h,h,h,h,h,h,h),h)},
bST(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f9A(this,p,d)
if(d===D.E6)return new C.aFR(p,o,q)
w=B.l(16)
v=p?E.wZ:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bA,A.r,1)
s=B.X(p?A.ee:C.hXQ(d),A.c,q,q,q,20)
r=C.hXR(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.ax,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e5)],x.p),A.l,q,A.ba,A.j,0,A.p),q,q,A.b0,new B.p(u,q,t,w,q,v,A.n),A.h5,q,64,q,q,A.hL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9J(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bA
r=B.L(r,A.r,u?1.6:1)
w=B.r(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a8(A.a7,A.aa,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,A_.AK,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,v,v),v,v,A.b0,new B.p(s,v,r,t,v,v,A.n),A.eJ,v,v,v,v,P.an3,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9P(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1L.prototype={
S(){return new C.aJj(new B.au(A.aw,$.aw()))}}
C.aJj.prototype={
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
afK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afK=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f9l(r))
w=1
break}B.eY()
r.m(new C.f9m(r))
t=4
q=C.ipm(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ip6(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f9n(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.he3()
f=$.Dq.h(0,k.a)
o=f==null||J.cs(f)?null:J.fs(f)
if(o==null){r.m(new C.f9o(r))
w=1
break}n=C.ip4(o,r.a.c)
C.ip0(r.a.c.a)
$.hdi=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hh2(j)
h=C.hh3(r.a.c)
e=C.hh4(r.a.c)
w=7
return B.b(C.bEW(k,r.a.c.a,j,h,new C.f9p(r),i,e,a0),$async$afK)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f9q(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aF(d,A.eS,i).w
i=B.aF(d,A.c1,i).w
w=B.at(B.r(j,j,A.f,j,j,new B.p(A.aT,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.r(j,D.ar8,A.f,j,j,D.b7e,j,34,j,j,j,j,j,34),A.au,D.bJQ],v),A.l,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Z.ab2,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),Aw.ae0),j,j,j,j,j,j,j,j,Z.EJ,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,D.aVT,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.dbx[q]
o=B.d(p,j,j,j,j,j,j,AC.Vt,j,j,j)
n=A.c.j(0.06)
r.push(B.n3(j,n,o,j,k.e?j:new C.f9r(k,p),j,j,Q.vW,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.W,B.bW(A.bH,r,A.bs,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aV3,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gce_()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.bd.j(0.5),A.er.j(0.5)],x.O):D.cJb
o=B.a([new B.ac(0,A.G,A.bd.j(0.35),A.cC,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.esG:D.bZ_
n=B.r(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aH(!1,A.a3,!0,j,B.aP(!1,s,!0,B.ez(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hp,j,j,j)],v),A.l,j,A.ba,A.j,0,j,j),j,new B.p(j,j,j,r,o,new B.a8(A.a7,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.S(0,0,0,h.f.d),B.r(j,B.bm(!0,B.ce(B.x(w,A.al,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.wt,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aez,j,j,j,j,j,j,j,j),j)}}
C.b3t.prototype={}
C.aFR.prototype={
S(){return new C.bmF(null,null)}}
C.bmF.prototype={
gazB(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qz,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazB().t()
this.bzN()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c5(this.gazB(),new C.eq5(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bk8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dhX[t]
q=r.a*v
r=r.b*u
$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.yu.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aD(d){return d.b!==this.b}}
C.atq.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a09.prototype={
S(){return new C.aDm()}}
C.aDm.prototype={
gajT(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aiq(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAQ(){var w=this.e
return w===$?this.e=C.hh2(this.a.c).q(0,D.E6):w},
a9A(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9A=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dsV(s))
u=3
r=A.d.fg(D.x2,new C.dsW(s))
q=B.d2(C.hh2(s.a.c),x.Q)
l=q
J.h9(l,D.E6)
p=l
if(s.gAQ())J.c7(p,D.E6)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAQ()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hh3(i.c)
g=C.hh4(s.a.c)
w=6
return B.b(C.bEW(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9A)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aiq(q,s.gajT())
f=q==null?null:q.b
n=f==null?s.gajT():f
if(!J.z(n,r.a)&&!s.gAQ())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dsX(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9A,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.Q(d).ax.a===A.J,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.l(28),h=B.L(m?A.bA:A.bh,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dt_(d)
e=B.A(B.a([f,B.aI(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.x2[w]
u=o.gajT()
t=o.f?n:new C.dt0(o,v)
f.push(new C.bvl(v,u===v.a,t,n))}f=B.kW(1.25,f,3,10,10,n,A.dZ,!0)
u=B.l(18)
t=o.gAQ()?D.ca6:n
if(o.gAQ())s=n
else s=m?A.br:A.cc
r=B.X(A.ed,o.gAQ()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAQ()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAQ()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAQ()
f=B.a([f,A.aB,B.r(n,B.A(B.a([r,A.au,q,B.b97(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dt1(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,O.alL,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fz0,n,n,n)],g))
f=B.ce(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.GW,n,n,A.ah)
u=o.f?n:o.gbF0()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bm(!0,B.r(n,B.x(B.a([new B.D(D.bFd,e,n),new B.dl(1,A.cn,f,n),new B.D(A.GV,new B.a5(1/0,50,B.bJ(B.ez(B.at(o.f?A.tG:D.fQS,n,n,n),n,new B.p(n,n,n,s,n,D.c8F,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.P,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.ux,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvl.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.H,12)],x.V):w
v=B.a([new B.bL(A.lz,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lA,w,w,B.d(v.b,w,w,w,w,w,w,D.fyY,w,w,w),w)],x.p)
if(q)v.push(D.b2b)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ac,A.t,v,w),w,w,A.b0,new B.p(w,w,p,t,s,new B.a8(A.aA,A.aE,A.x,r,w,w),A.n),A.eJ,w,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eq2.prototype={
aHo(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xf(d,e){return this.aHo(0,e,null)}}
C.aNZ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3p.prototype={
B(d){var w,v,u=null,t=C.hfS(this.c)
if(t==null)w=D.bwP
else{w=B.aF(d,u,x.w).w.cP3(D.bBx,D.feD)
v=this.d
w=B.q9(new B.du(!v,B.apB(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a5(416,870,new C.bof(w,u),u),A.f,A.dD)}}
C.bof.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.duL[w]
u=new B.aN(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.r(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.at6,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dwa[w]
u=new B.aN(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.r(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.at6,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,new B.bN(new B.p(t,t,t,B.l(64),D.d0m,D.c72,A.n),A.bi,t,t),0,0,0))
s.push(B.bS(3,new B.bN(new B.p(A.w,t,t,B.l(61),t,t,A.n),A.bi,t,t),3,3,3))
s.push(B.bS(13,B.bx(B.l(51),B.e9(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ap(t,B.at(B.r(D.b2n,B.r(t,t,A.f,t,t,D.b7x,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,new B.du(!0,B.bx(B.l(51),D.byu,A.aq),t),13,13,13))
s.push(B.ap(22,new B.du(!0,B.at(B.r(t,t,A.f,t,t,new B.p(A.ab,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ac,A.f,s,t)}}
C.lu.prototype={
pX(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bt,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bk,j,2,"Your Presentation Title",0,0,"",D.na,D.cX,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bt,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bk,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dp,D.cX,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.t_(i,l,0,0,B.a([f,w,C.er(A.bn,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bt,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fO,t.l(),3,"",0,0,"",D.cu,D.fj,0.3,0.35,0.72)],s),C.cE(),D.n9,"","","Welcome",D.dp)
u=C.cE()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,34,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Agenda",0,0,"",D.cu,D.cX,0.84,0.08,0.08)
w=C.cE()
w=C.t_(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bk,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vk,D.cX,0.8,0.1,0.26)],s),C.cE(),D.n9,"","","Agenda",D.dp)
u=C.cE()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,32,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Main Idea",0,0,"",D.cu,D.cX,0.84,0.08,0.08)
f=C.cE()
f=C.t_(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,21,A.bt,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bk,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cu,D.cX,0.8,0.1,0.26)],s),C.cE(),D.n9,"","","Key Point 1",D.dp)
u=C.cE()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,30,A.bt,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bk,j,2,"Compare & Contrast",0,0,"",D.cu,D.cX,0.84,0.08,0.08)
r=C.cE()
r=C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bk,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cu,D.cX,0.4,0.08,0.24)
q=C.cE()
q=C.t_(i,l,0,0,B.a([u,r,C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bk,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cu,D.cX,0.4,0.52,0.24)],s),C.cE(),D.n9,"","","Key Point 2",D.dp)
r=C.cE()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bt,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bk,j,2,h,0,0,"",D.dp,D.cX,0.8,0.1,0.32)
e=C.cE()
p=C.Cr(l,l,l,l,D.E2,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.t_(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bk,j,2,"Questions?",0,0,"",D.cu,D.cX,0.7,0.15,0.58)],s),C.cE(),D.n9,"","",h,D.dp)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fx.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fo.prototype={
gaNo(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aid(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4I(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fo(v,u,t,d==null?w.d:d)},
Gf(d){return this.a4I(null,d,null,null)},
aG2(d){return this.a4I(null,null,null,d)},
cP1(d,e){return this.a4I(d,e,null,null)},
bf3(d){return this.a4I(d,null,null,null)},
bf9(d){return this.a4I(null,null,d,null)}}
C.Or.prototype={
S(){return new C.bm0(new B.eB(0,$.aw()),null,null)}}
C.bm0.prototype={
Y(){var w,v=this
v.a4()
w=v.q0(new C.e3y(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.U$=$.aw()
w.P$=0
this.bzg()},
B(d){var w=C.aid(this.a.c.a)
if(w==null)w=A.d.gH(D.Ij)
return B.cq(new C.e3x(this,w,C.hww(this.a.c.d)))}}
C.btS.prototype={
B(d){return B.of(A.Xr,this.e,new C.f8y(this,A.i.F(this.d*0.35,1.6)-0.3))}}
C.bgW.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVp(d,e,v)
break
case"confetti":w.bLC(d,e,v)
break
case"crown":w.bNg(d,e,v)
break
case"aurora":w.bG5(d,e,v)
break
case"champagne":w.bJu(d,e,v)
break
case"diamonds":w.bPr(d,e,v)
break
case"starburst":w.cBz(d,e,v)
break
case"balloons":w.bGj(d,e,v)
break
case"galaxy":w.bUN(d,e,v)
break
case"redcarpet":w.cst(d,e,v)
break
case"coins":w.bL0(d,e,v)
break
case"lanterns":w.c42(d,e,v)
break
case"hearts":w.c1y(d,e,v)
break
case"petals":w.cny(d,e,v)
break
case"butterflies":w.bIr(d,e,v)
break
case"neon":w.c85(d,e,v)
break
case"disco":w.bPC(d,e,v)
break
case"sunrise":w.cDe(d,e,v)
break
case"pearls":w.cmC(d,e,v)
break
case"snow":w.cBg(d,e,v)
break
case"laurel":w.c48(d,e,v)
break
case"ribbons":w.cuZ(d,e,v)
break
case"kente":w.c3R(d,e,v)
break
case"trophy":w.cGY(d,e,v)
break
case"shooting":w.cz0(d,e,v)
break
case"bokeh":w.bGF(d,e,v)
break
case"orbits":w.ckd(d,e,v)
break
case"flowers":w.bU0(d,e,v)
break
case"music":w.c7O(d,e,v)
break
case"mandala":w.c6d(d,e,v)
break
case"sparklers":w.cBn(d,e,v)
break
case"city":w.bKh(d,e,v)
break}},
t9(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.R()
v=B.K()
v.r=g.j(A.i.D(h,0,1)).gp(0)
v.a=A.pa
u=new B.aG(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c6(w,t,w+f,t))
u.E(new B.c6(w,t,w,t+f))
u.E(new B.c6(w,t,w-f,t))
u.E(new B.c6(w,t,w,s))
u.E(new B.bu())
d.af(u,v)
d.N(e,f*0.18,v)},
m2(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.i.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.t9(d,new B.o(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVp(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m2(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.av],w),B.a([A.iu,A.bE],w),B.a([A.eG,A.aH],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.i.bh(l/2.8)
j=A.i.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.ku(new B.o(h,b8),new B.o(g,f),A.cx.aA(0,j/0.22))
d.toString
$.R()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.a7,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aJ(0,B.t1(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bu
a1=B.ku(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cx.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.i.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.R()
a6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.R()
b6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bu
b6.a=A.pa
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.t9(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLC(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.i.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.R(),d=B.K()
d.sav(new B.a8(A.aA,A.aE,A.x,D.doZ,B.a([A.i.D(h-0.15,0,1),A.i.D(h,0,1),A.i.D(h+0.15,0,1)],x.x),null).aJ(0,new B.a1(0,0,g,f)))
a0.aq(new B.a1(0,0,g,f),d)
d=Math.max(4,A.i.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.i.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.Rz[A.o.D(A.i.bh(C.cZ(u,7)*5),0,4)]
J.bo(g.save())
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
m.ab()}e=$.R()
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=B.b1(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.aq(B.bs(A.H,q*1.8*A.i.D(t,0.15,1),q),n)
g.restore()}this.m2(a0,a1,a2,25,A.bM,30)},
bNg(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.o(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.R()
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
p.sav(new B.bY(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bjO],v),a4,a4).aJ(0,B.bZ(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aG($.R().r,A.ai,a4,a4,B.a([],s))
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
i=A.i.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a8(A.b4,A.b8,A.x,D.dnC,a4,a4).aJ(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eJ1,D.eCa,D.eSI],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=A.ab.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.hH.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xN(j),u=B.a([],x.X),p=new B.ry(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bj(B.jI(y.M));--h
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
a2.r=A.bM.gp(0)
a8.af(new B.aG(o,e,a4,new B.cu([new B.BS(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.i.F(b0*0.5,1)
this.t9(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m2(a8,a9,b0,45,A.bM,40)},
bG5(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m2(a6,a7,a8,60,A.c,50)
w=[D.f4s,D.f4a,D.f43,D.f5r]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.R()
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
i.ab()}}$.R()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.pa
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.pa
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.i.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.i.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.R()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.wf.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.pa
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJu(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.R(),e=B.K()
e.sav(new B.bY(A.A,0.5,A.x,n,0,B.a([A.ia.j(0.25+0.1*j),D.Zu],x.O),n,n).aJ(0,B.bZ(new B.o(i,h),g)))
d.N(new B.o(i,h),g,e)
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
u.ab()}g=$.R()
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=j
f.r=D.Rz[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.i.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.i.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.t9(d,new B.o(s,p),o*2.4,A.bM,A.i.D(p/i,0,1))
continue}$.R()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.ud.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bPr(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m2(b0,b1,b2,30,A.ld,60)
for(w=Math.max(4,A.i.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.i.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bo(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.R()
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
g.sav(new B.a8(A.aA,A.aE,A.x,D.dj4,a6,a6).aJ(0,B.bs(A.H,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t9(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBz(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.o(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.R()
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
p.r=A.bM.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.i.F(a0+l*0.6,1.8)/1.8
$.R()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.i.bh(a0/2.4)
k=A.i.F(a0,2.4)/2.4
for(v=Math.max(4,A.i.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bxO.aA(0,k)*(0.5+0.5*C.cZ(t,u)))
this.t9(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.Rz[A.o.D(A.i.bh(C.cZ(t,4)*5),0,4)],r)}},
bGj(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.i.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.i.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAl[A.o.F(p,6)]
i=$.R()
h=B.a([],t)
g=new B.aG(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.R()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.bY(D.b2q,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.aAb,a1).aJ(0,a0))
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
a5.af(h,m)}for(w=Math.max(4,A.i.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.i.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.bo(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.H,t,u)
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=D.aAl[A.o.F(p,6)].j(0.85).gp(0)
a5.aq(s,q)
a3.restore()}},
bUN(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m2(b0,b1,b2,50,A.c,70)
for(w=[D.f4A,D.f4g,D.f4m],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.R()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aJ(0,B.bZ(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.i.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cZ(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cZ(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bM,A.eN,i)
f.toString
e=C.cZ(k,3)
$.R()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.pa
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.R()
a8=B.K()
a8.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.ud.j(0.55),D.ajf],t),a3,a3).aJ(0,B.bZ(a9,a7)))
b0.N(a9,a7,a8)
a0=A.i.F(b2,3.5)/3.5
if(a0<0.25){a1=A.i.bh(b2/3.5)
a2=new B.o(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.ku(a2,a2.a2(0,new B.o(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.ku(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aJ(0,B.t1(a2,a4)))
a7.c=a6*0.005
a7.d=A.bu
b0.ah(a5,a4,a7)}},
cst(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.R()
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
p.sav(new B.bY(A.A,0.5,A.x,b4,0,B.a([A.ud.j(0.28),D.ajf],w),b4,b4).aJ(0,B.bZ(new B.o(r,v),u)))
p.a=A.pa
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.el:A.et)
a8=$.R()
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
a8=new B.bu()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a8.sav(new B.a8(A.a7,A.aa,A.x,a6,b4,b4).aJ(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b0.r=A.ia.gp(0)
b0.c=o
b0.d=A.bu
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aG($.R().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bu())
v=B.K()
v.sav(D.c8z.aJ(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.i.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.i.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t9(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bM,0.3+0.7*((p+1)/2))}},
bL0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.i.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.i.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.i.D(n,0.12,1))
$.R()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.sav(new B.a8(A.aA,A.aE,A.x,o>0?D.dzF:D.cP2,null,null).aJ(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.buq.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t9(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m2(d,e,f,30,A.bM,110)},
c42(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m2(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.i.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.i.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.R()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.sav(new B.bY(A.A,0.5,A.x,e,0,B.a([As.yr.j(0.45*l),D.ahO],v),e,e).aJ(0,B.bZ(new B.o(m,n),k)))
a2.N(new B.o(m,n),k,i)
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
j=B.ar(D.bk2,A.c,0.2*l)
j.toString
k.sav(new B.a8(A.b4,A.b8,A.x,B.a([D.bpp,j],v),e,e).aJ(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1y(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.i.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.i.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bo(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.R()
l=B.a([],t)
i=new B.aG(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.km(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.km(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bu()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d9e[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.bY(A.rn,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a5a,d).aJ(0,B.bZ(A.H,o*1.4)))
a3.af(i,m)
u.restore()}this.m2(a3,a4,a5,30,A.iu,130)},
cny(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.i.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bo(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.R()
m=B.a([],u)
k=new B.aG(n.r,A.ai,h,h,m)
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
n=new B.bu()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=(q&1)===0?D.cJa:D.dks
n.sav(new B.a8(A.a7,A.aa,A.x,m,h,h).aJ(0,B.bZ(A.H,p)))
d.af(k,n)
v.restore()}this.m2(d,a0,a1,25,A.bM,140)},
bIr(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m2(b1,b2,b3,40,A.bM,150)
for(w=Math.max(4,A.i.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b3*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bo(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bo(v.save())
v.scale(a2*n,1)
a3=$.R()
a4=B.a([],u)
a5=new B.aG(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.km(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.km(q,g,f,q,0,g)
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
a3.sav(new B.a8(A.a7,A.aa,A.x,h?D.dka:D.dn5,a7,a7).aJ(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BZ.gp(0)
b1.af(a5,a3)
v.restore()}$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.btF.gp(0)
p.c=q*0.1
p.d=A.bu
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c85(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.i.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.R()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=v
r.r=D.aBu[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.an(B.bn(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aBu[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bn(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.R()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.adP,q)
d.an(k,l)}},
bPC(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.i.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bM,A.o9,A.dl][A.o.F(q,4)]
k=C.cZ(q,3)
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.75).gp(0)
j.a=A.pa
j.y=new B.hw(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.R()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.dc.gp(0)
a2.N(v,u,t)
t=a2.c
J.bo(t.save())
a0=new B.aG(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jS(B.bZ(v,u)))
a2.mT(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.i.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.R()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=B.ar(A.bo,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.aq(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t9(a2,v.a2(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDe(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cx.aA(0,A.i.D(a1/3,0,1))),e=new B.o(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.R()
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
s.r=A.bM.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.R()
f=B.K()
f.sav(new B.bY(A.A,0.5,A.x,k,0,B.a([D.bfi.j(0.6),D.ahO],x.O),k,k).aJ(0,B.bZ(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.ezA.aJ(0,B.bZ(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.i.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m2(d,a0,a1,20,A.hH,180)},
cmC(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.R()
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
$.R()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=B.ar(A.cA,A.ji,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.i.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.i.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.R()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.sav(new B.bY(Ap.Bg,0.5,A.x,h,0,D.dqG,h,h).aJ(0,B.bZ(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m2(d,a0,a1,25,A.c,190)},
cBg(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.i.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.R()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bu
J.bo(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.H,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m2(d,e,a0,40,A.eG,200)},
c48(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.i.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.i.cD(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bo(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.R()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.sav(D.c8m.aJ(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.R()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bkm.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t9(a3,w.a2(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m2(a3,a4,a5,40,A.bM,210)},
cuZ(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.ia,A.hH],a4),B.a([A.pi,A.iu],a4),B.a([A.aF,A.eN],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bR<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.R()
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
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.ds(j,t),m=new B.bR(m,m.gI(0),s);m.C();){i=m.d
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
$.R()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=a5[n]
i=l[0]
m.sav(new B.a8(A.a7,A.aa,A.x,B.a([i,l[1],i],a4),A.nM,new B.mN(w)).aJ(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m2(a6,a7,a8,40,A.c,220)},
c3R(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.i.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.i.bh(g/s),5)
a1=g+s
$.R()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3=Math.abs(a0)
a2.r=D.a5d[a3].gp(0)
b0.aq(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=D.a5d[A.o.F(a3+2,5)].gp(0)
b0.aq(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.i.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.i.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.t9(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a5d[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGY(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=u
p.r=A.bM.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aG($.R().r,A.ai,null,null,B.a([],x.v))
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
m.E(new B.bu())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cC(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a8(A.a7,A.aa,A.x,D.dtr,A.aAt,null).aJ(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.i.F(a6*0.6,1.4)
if(a0<1)this.t9(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLD(a4,a5,a6,60)},
bLD(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.i.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.i.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bo(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.H,r*A.i.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.R()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=D.Rz[A.o.F(p,5)].gp(0)
d.aq(o,n)
u.restore()}},
cz0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m2(d,e,f,70,A.c,250)
for(w=Math.max(4,A.i.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.i.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.i.bh((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.bM],s),null,null).aJ(0,B.t1(j,l)))
k.c=r
k.d=A.bu
d.ah(j,l,k)
this.t9(d,l,q,A.c,1-n)}},
bGF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.i.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.i.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.i.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.R()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=A.o.F(s,5)
n.r=D.aDh[m].j(o).gp(0)
n.a=A.pa
n.y=new B.hw(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aDh[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
ckd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bo(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.H,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.R()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=u
o.r=A.bM.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.hH.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.ia.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m2(d,e,f,45,A.bM,270)},
bU0(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.i.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.i.F(a6+C.cZ(o,2)*4,4)/4
j=A.e0.aA(0,A.i.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dh2[A.o.F(o,5)]
J.bo(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.R()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.b4,A.b8,A.x,B.a([A.c,g],u),null,null).aJ(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.R()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.ia.gp(0)
a4.N(A.H,h*0.3,l)
v.restore()}this.m2(a4,a5,a6,30,A.hH,280)},
c7O(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.i.F(t+n/4,1)
l=B.bZ(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=u
j.r=D.azx[n].j((1-m)*0.8).gp(0)
a4.cC(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.i.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.i.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.azx[A.o.F(h,4)]
$.R()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(0)
J.bo(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.H,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c6d(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.o(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bo(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.R()
a0=B.a([],s)
a1=new B.aG(d.r,A.ai,a3,a3,a0)
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
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=u
d.r=B.ar(A.bM,A.o9,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.hH.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.R()
a5=B.K()
a5.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.ia.j(0.25),D.Zu],x.O),a3,a3).aJ(0,B.bZ(w,a4)))
a7.N(w,a4,a5)
this.m2(a7,a8,a9,30,A.bM,300)},
cBn(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.R()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.r=A.bo.gp(0)
g.c=q
g.d=A.bu
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.bY(A.A,0.5,A.x,null,0,B.a([A.hH,A.ia.j(0.6),D.Zu],o),null,null).aJ(0,B.bZ(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.i.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.i.F(b3+C.cZ(f,2)*e,e)/e
a0=A.i.bh((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a7.r=B.ar(A.hH,A.av,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bu
a7.a=A.pa
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m2(b1,b2,b3,35,A.bM,310)},
bKh(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVp(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.sav(D.c9j.aJ(0,k))
a7.aq(k,j)
i=A.i.bh(n/r)
h=A.i.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.R()
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=A.bM.j(0.85).gp(0)
a7.aq(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.b1j.prototype={
B(d){var w,v=null,u=new C.cfc(),t=new C.cfe(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.r(v,D.ase,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfd(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ij[w]))
return B.bW(A.bH,s,A.bs,v,12,10)}}
C.a_H.prototype={
S(){return new C.aBJ()}}
C.aBJ.prototype={
gwi(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1S(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aP),$.aw())}return v},
gazC(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNo()
v=$.aw()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.ba(w,A.b6,A.aP),v)}return t},
t(){var w=this.gb1S(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gazC()
w.U$=v
w.P$=0
this.a3()},
a06(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a06=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().CL(90,700,700,A.eP),$async$a06)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a06)
case 8:p=e
o=q.b.toLowerCase()
n=J.ajd(o,".png")?"image/png":"image/jpeg"
r.m(new C.di8(r,n,p))
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
return B.i($async$a06,v)},
b1R(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VF,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aid(p.gwi().a)
if(n==null)n=A.d.gH(D.Ij)
w=p.gwi()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ac,A.t,B.a([B.bS(0,new C.Or(p.gwi(),!1,!0,new B.bC(w.a+v,x.W)),0,0,0),B.ap(o,B.IJ(A.n5,new C.did(d),B.o1(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IJ(A.ar6,new C.die(p),B.o1(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVS,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1S(0),o,o,o,o,o,2,p.b1R("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dif(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.h1,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.ia.j(0.6),A.r,1)
if(p.gwi().d.length===0)q=D.bWF
else{q=C.hww(p.gwi().d)
if(q==null)q=new Uint8Array(0)
q=B.hV(B.fR(q,A.A,o,o,A.ck,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.az(o,B.r(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gce0(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwi().d.length!==0)r.push(B.aI(o,o,o,o,H.Q0,o,o,o,new C.dig(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.r(o,B.x(B.a([w,A.W,B.A(r,A.l,o,A.e,A.j,0,o,o),A.T,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazC(),o,o,o,o,o,2,p.b1R("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dih(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bVy,D.h_U,new C.dii(p,d),B.bp(A.aC,o,o,o,A.w,o,A.cq,o,new B.b9(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.P,0,A.p),A.f,o,o,D.b7J,o,o,o,o,A.GS,o,o,o)],u),A.l,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a01.prototype={
S(){return new C.bis(new B.au(A.aw,$.aw()))}}
C.bis.prototype={
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.Q(d).ax.a===A.J,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aF(d,A.c1,x.w).w,j=n?A.a_:A.c,i=B.l(28),h=B.L(n?A.bA:A.bh,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.doX(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d_P[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.cc
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.r(A.A,B.d(s,o,o,o,o,o,o,A.pZ,o,o,o),A.f,o,o,new B.p(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doY(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hJ,u,o),new B.D1(A.bH,6,6,A.bs,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.T)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.br:A.aS
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bt(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bJ(A.aWS,o,new C.doZ(this),o)],g),A.l,o,A.e,A.j,0,o,o))
e.push(A.T)
return B.bm(!0,B.r(o,B.x(B.a([f,new B.dl(1,A.cn,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.ux,A.a0y,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhN.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e5()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.R()
u=B.K()
u.y=A.H8
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
$.R()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aD(d){return d.b!==this.b}}
C.bhu.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bn(new B.a1(0,0,0+a3.a,0+a3.b),A.jN),e=this.b,d=Math.sin(e*2),a0=$.R(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mg
a2.an(f,a1)
a1=x.v
a0=new B.aG(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.j8(f))
v=new B.U0(new B.ry(B.xN(a0),!1,B.a([],x.X))).gH(0)
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
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.i.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.d=A.bu
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.i.F(o-q*(1-n/10),t)
i=A.i.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aG(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aG(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aG(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iy()
h=u[d].Di(o).a
$.R()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=w.gp(0)
l.y=Ad.ow
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aD(d){return d.b!==this.b}}
C.bqC.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e5()
f.d_(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gaoa()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.R()
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
k.sav(new B.alM(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.af(i,k)}},
aD(d){return d.b!==this.b}}
C.bcj.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e5()
e.d_(this.c*7+3)
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
g=f}$.R()
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aD(d){return d.b!==this.b}}
C.bbX.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e5()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.R()
i=B.a([],o)
h=new B.aG(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=s
j.d=A.bu
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aD(d){return d.b!==this.b}}
C.bxI.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.R()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.bY(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d7W,null).aJ(0,u))
d.aq(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.aq(w,v)},
aD(d){return d.b!==this.b}}
C.buG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.i.bh(f)*7,q=0;q<7;++q){p=new B.e5()
p.d_(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.i.F(A.i.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.R()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=k.gp(0)
j.c=1.4
j.d=A.bu
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
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aD(d){return d.b!==this.b}}
C.btO.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.R()
v=B.K()
v.a=A.pa
v.sav(new B.a8(A.aA,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.i.D(u-0.15,0,1),A.i.D(u,0,1),A.i.D(u+0.15,0,1)],x.x),null).aJ(0,w))
d.aq(w,v)},
aD(d){return d.b!==this.b}}
C.bgP.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.R()
w=B.K()
w.b=A.a9
w.c=1.4
w.d=A.bu
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uD
r=new C.dhQ(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aD(d){return d.b!==this.b}}
C.yg.prototype={}
C.JK.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asS.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vj.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mV.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hG.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eQ.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
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
u.n(0,"decoration",C.ibF(v.z))
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
C.m1.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eQ>")
n=B.C(new B.N(n,new C.ckP(),m),m.k("ak.E"))
return C.t_(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.ckQ(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hQ.prototype={
gbdj(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gTa(){if(!C.kN(this.w))return!1
var w=this.gbdj()
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
q=B.U(r).k("N<1,m1>")
r=B.C(new B.N(r,new C.ckE(),q),q.k("ak.E"))
return C.Cr(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.C(new B.N(w,new C.ckF(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k0.prototype={}
C.b3s.prototype={
B(d){return B.cq(new C.ckK(this))}}
C.apW.prototype={
S(){return new C.blJ(null,null)}}
C.blJ.prototype={
gb1T(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fJ,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb1T().t()
this.byZ()},
B(d){return B.c5(this.gb1T(),new C.dQt(),this.a.c)}}
C.aNc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aeJ.prototype={
QF(d,e,f,g){return this.bTE(d,e,f,g)},
bTE(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QF=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QF)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.T(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.em,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QF,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),r=B.at(B.r(v,v,A.f,v,v,new B.p(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dm,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.ax,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d9)
n.push(B.A(B.a([B.E(new C.af_(A.i2,"Download",A.c3,new C.eCp(w,d),!0,v),1),A.au,B.E(new C.af_(A.uS,"Share",A.bl,new C.eCq(w,d),!1,v),1),A.au,B.E(new C.af_(A.hO,"Safari",A.b2,new C.eCr(w,d),!1,v),1)],m),A.l,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bO(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eCs(d),v,v))
return B.bm(!0,new B.D(A.qE,B.x(B.a([B.r(v,B.x(n,A.al,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(A.jl,v,t,u,s,v,A.n),v,v,v,v,A.GZ,v,v,1/0)],m),A.l,v,A.e,A.P,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.af_.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aH(!1,A.a3,!0,v,B.aP(!1,u,!0,B.ez(B.x(B.a([p,A.T,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bHG,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3q.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.arZ(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.S(v,w,v,w)}else{v=6*w
u=new B.S(v,10*w,v,12*w)}t=i.ce1().amc(1.35)
s=B.axv(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEB(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bl,h,h,h,h,2,D.c43,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bC("slide_tf_"+g.a,x.W),h,A.xl,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AL,A.ao,h,A.Vh,h,h)
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
w=n?t.cOP(B.b1(g.Q).j(0.45),A.cI):t
p=g.as
l=m?1:h
k=m?A.eR:A.EH
p=B.d(f,new B.bC("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V8:s
$.R()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dT
j.r=A.as.gp(0)
j=i.cv1(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ac,A.t,B.a([j,i.cv_(k,t,l?A.V8:s)],x.p),h)}else w=i.cv0(p,t,g.k2?A.V8:s,m)
v=new B.mq(w,new B.bC("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c2f()
case 3:return i.cmB()
case 2:return B.b2(h,h,h,new C.b3n(g,h),A.fQ)
case 5:g=g.r
return new C.b3p(g,!i.e&&i.z==null,h)}},
ce1(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k5
j=A.cI
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahL,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.H,6*v),new B.cU(l,A.H,16*v),new B.cU(l.j(0.8),A.H,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bj
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
e=B.a([new B.cU(A.bE,new B.o(v,v),0)],x.r)
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
e=B.a([new B.cU(A.b9,new B.o(-3*v,0),0),new B.cU(A.ay,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cG,A.H,8*v),new B.cU(A.ay,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A4.y4
break
case"ice":v=o.d
e=B.a([new B.cU(A.aH,A.H,10*v),new B.cU(A.cA,A.H,22*v)],x.r)
k=A.U
w=A.eG
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.H,3*h)],x.r)
w=l
k=A.k5
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.da3[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.R()
f=B.K()
v=o.d
f.sav(D.c6L.aJ(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.Me,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.R()
f=B.K()
v=o.d
f.sav(D.c74.aJ(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.H,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cB
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.o(u,u),0),new B.cU(l.j(0.2),new B.o(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k5
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.m(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBD(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.fbw.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ckI(h)
v=r.k2?C.ioE(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eR:A.EH
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Za(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cv1(d,e,f,g){return this.aBD(d,e,f,!1,g)},
cv_(d,e,f){return this.aBD(d,e,f,!1,null)},
cv0(d,e,f,g){return this.aBD(d,e,f,g,null)},
bEB(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a7}},
c2f(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bN
return B.at(B.X(s.b===D.lt?A.HV:A.CI,A.aD,t,t,t,32),t,t,t)}w=u.bHF(r)
if(s.b===D.lt){s=B.l(6)
v=2*u.d
return B.r(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.cv,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dJ,6)],x.V),t,A.n),t,1/0,t,t,new B.S(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQx(r,!0)
return C.fPu(s.go,v,s.id)}return w},
aQx(d,e){var w,v,u,t
try{w=C.ioZ(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cq(new C.ckH(this,w,v,e))
return u}catch(t){return D.afc}},
bHF(d){return this.aQx(d,!1)},
cmB(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bdd
return C.ipg(v,w.db,w.dx)}}
C.b3n.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R(),g=B.K(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.K()
w.r=B.b1(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a1(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aq(s,g)
d.aq(s,w)
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
d.ah(new B.o(0,h),new B.o(u,h),w)
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
aD(d){return d.b!==this.b}}
C.aKJ.prototype={
S(){return new C.bxc(null,null)}}
C.bxc.prototype={
Y(){var w,v=this
v.a4()
w=B.bl(null,A.hI,null,1,null,v)
w.cL(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBf()},
aQI(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bN(new B.p(w,w,w,B.l(8),w,new B.a8(A.a7,A.aa,A.x,v,w,w),A.n),A.bi,B.at(B.d(d,w,w,w,w,w,w,A.dm,w,w,w),w,w,w),w)},
bEP(){var w,v=this,u=null,t=v.aQI("Slide A",A.bl),s=v.aQI("Slide B",A.b2)
if(v.a.c===D.cu)return new B.an(A.a0,u,A.b1,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c5(w,new C.fh8(v,s,t),u)},
B(d){return this.bEP()}}
C.aLq.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wo.prototype={
S(){return new C.blX(null,null)}}
C.blX.prototype={
Y(){var w,v,u=this
u.a4()
w=B.bl(null,A.Cd,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cu){w.sp(0,1)
return}B.bQ(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1h(u),x.a)},
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
else B.bQ(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1g(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzf()},
B(d){var w,v=this.a
if(v.c.dy===D.cu||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c5(w,new C.e1f(this),v.d)}}
C.JJ.prototype={
B(d){return B.cq(new C.ckA(this))}}
C.aBo.prototype={
S(){return new C.bgf()}}
C.bgf.prototype={
Y(){this.a4()
if(this.a.c!==D.cu)B.bQ(A.NP,new C.df2(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cu)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wo(C.er(A.bn,!1,4279310375,A.aG,"",4294538006,24,A.bt,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bk,o,2,"",0,0,"",u,D.fj,0.84,0.08,0.12),B.r(p,p,A.f,p,p,new B.p(A.c6,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bC("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bn,!1,4294967295,A.aG,"",4280640491,22,A.bt,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bk,o,2,"Element flies in",0,0,"",q.a.c,D.cX,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ac,A.t,B.a([w,B.ap(32,new C.Wo(t,B.r(p,D.fLW,A.f,p,p,new B.p(s,p,B.L(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jq,p,p,1/0),!0,1,new B.bC("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bN(D.b8i,A.bi,n,p)}}
C.a91.prototype={
S(){return new C.bmD(null,null)}}
C.bmD.prototype={
gb2u(){var w=this.a
if(w.e)w=D.fbJ.q(0,w.c)||D.aSV.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a4()
if(v.gb2u()){w=C.inf(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzL()},
B(d){var w,v=this,u=v.d
if(!v.gb2u()||u==null)return v.a.d
w=v.a
return B.c5(u,new C.epM(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1m.prototype={
B(d){var w=null
return B.at(C.b3r(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bt,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bk,4280172719,2,"Aa",0,0,this.c,D.cu,D.cX,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhs.prototype={
ju(d){return C.a3P(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3P(k,l),i=e.gdA(),h=new C.f62()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aUt.aJ(0,l))
d.af(j,w)
k=C.a3P(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bua.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fm2.aJ(0,l))
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
k.sav(D.fm0.aJ(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3P(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.b9.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pj.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.flW.aJ(0,l))
d.af(j,w)
w=C.a3P(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bh3.gp(0)
d.af(w,v)
k=C.a3P(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bk5.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aUt.aJ(0,l))
d.af(j,k)
for(k=B.xN(j),w=B.a([],x.X),k=new B.ry(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bj(B.jI(y.M));--r
k.iy()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.i.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iy()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iy()
n=w[r].Di(q*o/p).a
m=D.d7b[A.o.F(o,4)]
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fm4.aJ(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fm1.aJ(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3P(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.od.gp(0)
d.af(k,w)
break}},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btL.prototype={
a5(d,e){d.Gu(C.a3P(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aNs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aNX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a9k.prototype={}
C.OX.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGg(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUx(){return this.r},
gUy(){return this.w},
gMg(){return this.x}}
C.aGg.prototype={
Y(){var w,v=this
v.a4()
$.aW.c1$.push(v)
C.fUw()
$.hEA=new C.eIE(v)
w=B.bl(null,A.Ca,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.J1()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P9(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J1()}},
jm(d){if(d===A.Bi||d===A.tV||d===A.tU||d===A.q5)this.ue()},
t(){var w,v,u,t=this
$.aW.hV(t)
w=t.at
if(w!=null)w.a1(0)
t.ue()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.bzY()},
gYZ(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPs(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ade(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTa())return!1
return!0},
ky(){return this.ade(null)},
aka(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.fkh)},
qQ(){if(!this.ky())return!1
this.aka()
return!0},
at4(d){var w,v,u,t,s,r=this
if(r.ade(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hDG(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
At(){return this.at4(null)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asU(k),$async$J1)
case 3:j=e
w=4
return B.b(C.b1z(k),$async$J1)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h9A(j,t.c5g())
w=t.gYZ()?5:7
break
case 5:r=t.gPs()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8x(r),$async$J1)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.br(s,new C.eF1())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.br(s,new C.eF2())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zh(m==null?"":m)!=null)continue
C.fUI(n,s)
p=!0}t.m(new C.eF3(t,s))
if(p||s.length>J.ad(j))t.ue()
case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
c5g(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kN(w)&&w!==q}if(w)p.push(r)
return p},
ctt(d){var w,v=this,u=d.w
if(!C.kN(u)||u==="hati_kiapo_uongozi")return
v.aby(d)
w=A.d.bj(v.d,new C.eGC(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hQ())
v.db=!1},
cnx(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kN(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctt(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hQ>")
s=B.C(new B.cM(new B.Y(s,new C.eGq(),w.k("Y<1>")),new C.eGr(),v),v.k("M.E"))
return s},
P9(d){return this.bU4(d)},
ue(){return this.P9(null)},
bU4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnx()
w=3
return B.b(C.Xi(d==null?t.a.c:d,s),$async$P9)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.at4(r)?4:5
break
case 4:w=6
return B.b(C.Oy(r),$async$P9)
case 6:q=r.x
p=A.a.i(q==null?t.gPs():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eEp())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c9(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P9,v)},
pK(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kN(u.w))===!0?A.h5:A.lI
v.at=B.cy(w,new C.eHK(v))},
b1U(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agw(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cH(w,0)
A.d.a8(v.ay)},
cHf(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agw(w.e.hQ(),w.f,w.r))
w.m(new C.eIA(w,v.pop()))
w.pK()},
csy(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agw(w.e.hQ(),w.f,w.r))
w.m(new C.eGA(w,v.pop()))
w.pK()},
oF(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIn(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yx(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ye(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KP(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d2(new B.cM(new B.Y(w,new C.eIo(),v.k("Y<1>")),new C.eIp(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cX)continue
p=n.a
m=w.c3(0,p,new C.eIq(n))
s.c3(0,p,new C.eIr())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ik(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eDO(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPs()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hQ())}u.oF()
u.pK()},
akw(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.Yx(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kN(v.w))===!0
if(u){C.inj(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ink(t,w.d+w.f*0.5)}}s.Ik()
s.oF()
s.pK()
if(u&&s.c!=null)s.m(new C.eIB())},
cIn(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ik()
w.oF()
w.pK()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqU(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ilj(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c2u(v)
t=q.c2t(v)
s=B.b1(v.e)
r=v.f
return new C.k0(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hY1(o)},
c2u(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cX)s=t.w>=28||A.o.D(A.o.ar(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.a_},
c2t(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cX&&t.w<28)return B.b1(t.Q)}return A.aM},
agt(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gYZ()){w.c.L(x.q).f.T(D.fiS)
return}w.aby(d)
w.b3b(C.bEX(d))
return}if(C.cls(v)){w.aby(d)
w.b3b(d)
return}w.m(new C.eFJ(w,d))},
atD(){var w,v,u,t,s,r,q=this
q.a3f(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kN(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eDM(q))
if(r&&q.c!=null){u.toString
q.Kl(u,s)}return}q.ue()
q.m(new C.eDN(q))},
b3a(d){this.aby(d)
this.a0J(d,!0)},
aby(d){if(!C.kN(d.w))return
C.fUI(d,this.d)},
a0J(d,e){return this.cjp(d,e)},
b3b(d){return this.a0J(d,!1)},
cjp(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0J=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEX(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPs():r)
t.dy.W(0,q.toLowerCase())
C.a8u(t.a.c,q)}r=s}else r=d
w=C.cls(r.w)?3:4
break
case 3:w=5
return B.b(t.abz(r),$async$a0J)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eG5(l))
o=l.a.hQ()
n=C.kN(o.w)&&C.ioz(o)
t.m(new C.eG6(t,o,p))
if(n){m=A.d.bj(t.d,new C.eG7(o))
if(m>=0){t.d[m]=o.hQ()
t.ue()}}if(!t.ade(l.a))t.ZK()
r=!1
if(t.c!=null)if(!t.ade(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.at4(r)&&C.fQF(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.fjs)
case 1:return B.h(u,v)}})
return B.i($async$a0J,v)},
abz(d){return this.bS4(d)},
bS4(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ly(r.c,A.Aq),$async$abz)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.ld(!1,r,s.c,s.d,null,A.Aq,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abz,v)},
ot(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ot=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cls(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckS(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ot,v)},
aga(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aga=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eFI(),s,null,!0,!0,x.H),$async$aga)
case 3:if(t.c==null){w=1
break}t.atD()
case 1:return B.h(u,v)}})
return B.i($async$aga,v)},
ag9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eFF(),s,null,!0,!0,x.H),$async$ag9)
case 3:if(t.c==null){w=1
break}t.m(new C.eFG())
t.atD()
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
ZK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$ZK)
case 3:r=e
if(B.k5(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aC("Bool","ngmy_marriage_hint_seen",!0),$async$ZK)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fhs)
case 1:return B.h(u,v)}})
return B.i($async$ZK,v)},
Kl(d,e){return this.ctT(d,e)},
ctT(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kl=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahP(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kl)
case 9:w=4
break
case 6:w=10
return B.b(C.ahQ(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kl)
case 10:w=4
break
case 7:w=11
return B.b(C.ahR(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kl)
case 11:w=4
break
case 8:w=12
return B.b(C.ahS(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kl)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kl,v)},
Zk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Zk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gYZ()){t.c.L(x.q).f.T(D.fhF)
w=1
break}s=t.gPs()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.HF(r,"Search states\u2026",s,A.kb,"Hati ya Kiapo: which state?"),$async$Zk)
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
C.a3e(p,o,r,p,new C.eEY(t),new C.eEZ(t),s)
case 1:return B.h(u,v)}})
return B.i($async$Zk,v)},
agu(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dW,null,new C.eFP(u),s,!0,!0,!1,A.lU,!1,!1,x.N),$async$agu)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahS(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahP(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahQ(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahR(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.Zk()
return B.h(null,v)}})
return B.i($async$agu,v)},
civ(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1U()
w=C.cE()
v=C.Cr(t,t,t,t,D.E2,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eFQ(u,v))},
aaW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qQ()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itJ(s),$async$aaW)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cE(q.r,new C.eDQ())
t.dc(new C.eDR(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaW,v)},
aiv(d,e,f,g){var w=null,v=g?A.dn:A.cc,u=B.L(g?A.aT:A.cv,A.r,1)
return B.h6(B.az(w,B.r(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qQ()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eG0(),q),q.k("M.E"))}o=s!=null&&s.b===D.lT?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fjE)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eG1(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0I)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0I,v)},
agL(){return this.cjo()},
cjo(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qQ()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itv(s,t.f+1,o),$async$agL)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jB(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eG3(q))
t.dc(new C.eG4(p,t,o,q,r))
t.c.L(x.q).f.T(D.fk2)
case 1:return B.h(u,v)}})
return B.i($async$agL,v)},
agS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qQ()||!t.At()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGl(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fhd)
w=1
break}o=new B.N(p,new C.eGm(),B.U(p).k("N<1,G>")).f1(0,new C.eGn())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aP),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.L,null,new C.eGo(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agS)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eGp())
case 1:return B.h(u,v)}})
return B.i($async$agS,v)},
agx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qQ()){w=1
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
return B.b(C.hFP(s,new C.Fo(r,q,p,o==null?"":o)),$async$agx)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eFR(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aid(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agx,v)},
abs(){return this.bRm()},
bRm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qQ()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itI(s,t.f+1,l),$async$abs)
case 3:r=e
q=$.hdi
$.hdi=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eE6())
t.c.L(x.q).f.T(D.fh4)
w=1
break}if(!q){s=r.CW
s=C.hEy(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eE7(t,l,r))
t.c.L(x.q).f.T(D.fkx)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jB(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eE8(p))
o=s.length
t.dc(new C.eE9(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abs,v)},
aSX(d,e){if(e){this.ahk()
return}this.civ(d,!1)},
bMR(){return this.aSX(null,!1)},
ahk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c2,null,new C.eGv(t),r,!0,!0,!0,A.pS,!1,!1,x.N),$async$ahk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eGw(t,C.ili(s).pX()))
case 1:return B.h(u,v)}})
return B.i($async$ahk,v)},
dc(d){var w=this
if(w.qQ())return
w.Ik()
w.b1U()
w.m(d)
w.KP()
w.oF()
w.pK()},
a9r(){this.dc(new C.eCK(this,D.n9))},
aUr(){var w=this.gdB()
if(w==null)return
this.dc(new C.eE4(this,w))},
aTx(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eE2(this))},
b65(d,e){if(this.e==null||d===e)return
this.dc(new C.eGE(this,d,e))},
OG(d){return this.bOS(d)},
bOS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.L(x.q).f.T(D.fjz)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPs():s)
w=5
return B.b(C.a8w(r),$async$OG)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8u(t.a.c,r)
s=t.c
if(s!=null){s=s.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.asW(s)
w=6
return B.b(C.b3v(t.a.c,s),$async$OG)
case 6:if(t.c==null){w=1
break}t.m(new C.eDZ(t,d))
w=7
return B.b(t.ue(),$async$OG)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OG,v)},
ctQ(d,e){var w=this
if(d.z){w.aka()
return}w.m(new C.eGD(w,d,e))
w.pK()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xx(d){return this.ch.c3(0,d.a,new C.eDP(d))},
avw(d){return this.CW.c3(0,d.a,new C.eEq())},
a3f(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yx(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ap$.d.c
if(u!=null)u.js()},
b9D(){return this.a3f(!0)},
a3b(d){var w,v,u=this
if(u.qQ())return
if(!u.At())return
w=u.Yx(d)
if(w==null||w.b!==D.cX)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xx(w).sb1(0,"")}u.m(new C.eIl(u,d))
$.aW.x1$.push(new C.eIm(u,d,w))},
bab(d){var w=this
if(d.b===D.cX&&!w.ky()&&w.At()){w.a3b(d.a)
return}w.aC2(d.a)},
aC2(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.Yx(w)
if(v!=null&&v.b===D.cX){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eHL(r,s,d))
if(s||d==null){t=$.aW.ap$.d.c
if(t!=null)t.js()}},
aP1(){this.dc(new C.eCL(this))},
ps(d){return this.bDS(d)},
bDS(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ps=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$ps)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCI(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ps,v)},
WA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hy(78,1920),$async$WA)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eCy(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WA,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(T.DC(t.a.c),$async$Wu)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.fl6)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eCv(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wu)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.dc(new C.eCw(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
auu(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eE0(v))){w.c.L(x.q).f.T(D.fk6)
return}if(w.w===v)w.a3f(!0)
w.dc(new C.eE1(w,v))},
bL6(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fj)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cX)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPK(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.dc(new C.eDc(w,v,d,e,t,u))},
bFs(d){return this.aPK(d,null)},
a9H(d){return this.bFA(d)},
bFA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aa3.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.ot(),$async$a9H)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cX)t.bFs(s.w>=28||s.x.gdR(0)>=A.I.gdR(0)?d.d:d.e)
else if(r===D.fj){r=d.c
t.aPK(r.j(0.88),r)}w=1
break}t.dc(new C.eDh(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9H,v)},
a9G(d){return this.bFy(d)},
bFy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9G=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.ot(),$async$a9G)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDf(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
bFi(d){var w=this.gdB()
if(w==null)return
this.dc(new C.eDb(this,w,d))},
a0O(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.itE(r),$async$a0O)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oF()
t.m(new C.eGf(t,s))
w=4
return B.b(t.ue(),$async$a0O)
case 4:if(t.c!=null)t.agt(s)
case 1:return B.h(u,v)}})
return B.i($async$a0O,v)},
abj(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3f(!0)
t.oF()
s=t.c
s.toString
w=3
return B.b(C.Sm(s,q),$async$abj)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abj,v)},
Ea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ea=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oF()
t=4
w=7
return B.b(C.aS8(m),$async$Ea)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRA(o,q,m.b),$async$Ea)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
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
FR(d,e){return this.cGD(d,e)},
cGD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FR=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qQ()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3f(!0)
t.oF()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eIu(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.img(q?"":s)
o=C.hDs(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eIv(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czI(n.length,o,s),$async$FR)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ima(h.a)
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
return B.b(t.czH(n,o),$async$FR)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fg(t.d,new C.eIw(s))
s=h.a.b
w=11
return B.b(t.czF(k.b,s),$async$FR)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.imf(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.fli)
w=1
break}w=12
return B.b(t.czG(j.a,s,o,j.c),$async$FR)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eIx(h,t,i))
t.pK()
case 1:return B.h(u,v)}})
return B.i($async$FR,v)},
czI(d,e,f){var w=this.c
w.toString
return B.bU(A.L,null,new C.eI0(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czH(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eI_(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czF(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eHU(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czG(d,e,f,g){var w=this.c
w.toString
return B.bU(A.L,null,new C.eHW(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acM(){var w=null
return B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acN(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ar(d,A.c2,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dq,18)],x.V)
v=x.p
return B.A(B.a([B.r(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a8(A.aA,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ew,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fwp,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aXN(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.L(e.j(0.22),A.r,1)
return B.r(w,B.d(d,w,2,A.a2,w,w,w,A.VT,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXQ(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a8(A.aA,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aH(!1,A.a3,!0,w,B.aP(!1,v,!0,B.r(w,B.A(B.a([B.r(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nh,w,w,w),A.cQ,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.zf,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEU(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1o(d,e,f,g,h,i){return this.aXQ(d,e,f,!1,g,h,i)},
awQ(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.L(A.c.j(0.08),A.r,1)
return B.r(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dm,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0X,w,w,w)},
aXP(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.cq,w,new B.b9(B.l(14),A.a1),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.o_,w,w,w),w,new C.eET(d,f),v)},
aXO(d,e){return this.aXP(d,e,null)},
KG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.py(l,s.c,s.d),$async$KG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eG(l,new C.eHM());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abe(l.charCodeAt(0)==0?l:l,r.b),$async$KG)
case 4:l=t.a
w=5
return B.b(B.px(l.c,l.d),$async$KG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KG,v)},
IG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.py(q,s.c,s.d),$async$IG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abe(A.X.aw(r.aj(),null),r.b+".json"),$async$IG)
case 4:q=t.a
w=5
return B.b(B.px(q.c,q.d),$async$IG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IG,v)},
b9m(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oF()
u.ue()
w=u.c
w.toString
v=B.ec(new C.eIk(u,t),!1,null,x.z)
B.a6(w,!1).ce(v)},
HU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$HU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fUV(),$async$HU)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ipa(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.as,null,new C.eCD(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HU)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eCE(t,s))
w=1
break}if(p==="split")t.dc(new C.eCF(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HU,v)},
O0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qQ()){w=1
break}w=3
return B.b(t.ot(),$async$O0)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aS7(s,null,null),$async$O0)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eCJ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$O0,v)},
b5S(d){var w=this.e
if(w==null||!C.kN(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aR6(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aS7(s,t==null?null:B.b1(t),u)},
a9p(d){return this.bDJ(d)},
bDJ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9p=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qQ()){w=1
break}if(!t.At()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fly)
w=1
break}w=3
return B.b(t.aR6(),$async$a9p)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eCA(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9p,v)},
ai3(d){return this.csB(d)},
csB(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ai3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qQ()){w=1
break}if(!t.At()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fkF)
w=1
break}w=3
return B.b(t.aR6(),$async$ai3)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eGB(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ai3,v)},
cfa(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFD()}},
cFD(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eIs(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1J(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eEX(this,r,u.d))},
c6z(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kN(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fRq(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lt&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c6A(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kN(w.w))!==!0)return!0
if(!this.At())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fRq(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lt&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
O8(d){return this.bG_(d)},
bG_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qQ()){w=1
break}if(!t.At()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fjt)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aru(p),$async$O8)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fk8)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.Oy(r)
w=1
break}t.m(new C.eDl(t,d,o))
t.oF()
$.aW.x1$.push(new C.eDm(t))
case 1:return B.h(u,v)}})
return B.i($async$O8,v)},
Wy(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$Wy)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFD(),$async$Wy)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eCx(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wy,v)},
OV(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$OV)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fUM(r),$async$OV)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eEo(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OV,v)},
jk(d){this.dc(new C.eCG(this,d))},
qF(d){return this.bFb(d)},
bFb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qQ()){w=1
break}m=!D.aSY.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.ot(),$async$qF)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HU()
w=1
break A
case"sign_paper":t.O0()
w=1
break A
case"hd_photo":t.Wy()
w=1
break A
case"sharpen":t.OV()
w=1
break A
case"print":t.Ea()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.dc(new C.eCP(s))
w=1
break A
case"text_box":t.aP1()
w=1
break A
case"picture":t.WA()
w=1
break A
case"present":t.b9m()
w=1
break A
case"new_slide":t.a9r()
w=1
break A
case"export_json":t.IG()
w=1
break A
case"outline_share":t.KG()
w=1
break A
case"flashcard_tool":t.vR(D.Jk)
w=1
break A
case"quiz_tool":t.vR(D.Jl)
w=1
break A
case"worksheet_tool":t.vR(D.Jm)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.dc(new C.eCQ(t,s))
w=1
break A
case"delete_el":t.auu()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eCR(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eD1(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.dc(new C.eD4(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.dc(new C.eD5(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.dc(new C.eD6(s))
w=1
break A
case"grayscale":case"brighten":t.OV()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.dc(new C.eD7(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.dc(new C.eD8(s))
w=1
break A
case"rectangle":t.ps(D.bk)
w=1
break A
case"circle":t.ps(D.f0)
w=1
break A
case"triangle":t.ps(D.ke)
w=1
break A
case"arrow":t.ps(D.E4)
w=1
break A
case"line":case"divider":t.ps(D.fO)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eG(q,new C.eD9()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eDa(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.jk(C.j6(A.K,!1,t.gqU().d.l(),A.aG,40,A.bt,A.u,0.18,q,"Presentation Title",0,D.na,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.jk(C.j6(A.K,!1,t.gqU().e.l(),A.aG,22,A.bt,A.a8,0.12,q,"Subtitle goes here",0,D.dp,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jk(C.j6(A.bn,!0,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vk,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jk(C.j6(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.vj,0.8,0.1,0.22))
w=1
break A
case"quote":t.jk(C.j6(A.K,!1,4279310375,A.aG,24,A.cI,A.a8,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dp,0.8,0.1,0.3))
w=1
break A
case"citation":t.jk(C.j6(A.bn,!1,4284773515,A.aG,14,A.bt,A.a8,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.vk,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jk(C.j6(A.e2,!1,4279310375,A.aG,14,A.bt,A.a8,0.08,C.cE(),C.bFF(),0,D.dp,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jk(C.j6(A.e2,!1,4279310375,A.aG,13,A.bt,A.a8,0.06,C.cE(),"Page "+(t.f+1),0,D.dp,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eCS(t))
w=1
break A
case"footer_bar":t.dc(new C.eCT(t))
w=1
break A
case"highlight":t.dc(new C.eCU(t))
w=1
break A
case"redact":t.dc(new C.eCV(t))
w=1
break A
case"callout":t.dc(new C.eCW(t))
w=1
break A
case"checkboxes":t.jk(C.j6(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dp,0.8,0.1,0.2))
w=1
break A
case"table":t.jk(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dp,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eCX(t))
w=1
break A
case"letter":t.jk(C.j6(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.82,C.cE(),C.bFF()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dp,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jk(C.j6(A.bn,!1,4279310375,A.aG,22,A.bt,A.U,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vk,0.8,0.1,0.12))
w=1
break A
case"toc":t.jk(C.j6(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dp,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jk(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cE(),"Signature: _________________________",0,D.dp,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jk(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cE(),"Initials: ______",0,D.dp,0.3,0.65,0.78))
w=1
break A
case"approved":t.jk(C.j6(A.K,!1,4278556265,A.aG,28,A.bt,A.u,0.12,C.cE(),"APPROVED",0,D.na,0.32,0.62,0.08))
w=1
break A
case"draft":t.jk(C.j6(A.K,!1,4292617766,A.aG,28,A.bt,A.u,0.12,C.cE(),"DRAFT",0,D.dp,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jk(C.j6(A.K,!1,871318596,A.aG,36,A.bt,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dp,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eCY(t))
w=1
break A
case"progress":t.dc(new C.eCZ(t))
w=1
break A
case"stars":t.jk(C.j6(A.K,!1,4279310375,A.aG,36,A.bt,A.a8,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.r2,0.8,0.1,0.4))
w=1
break A
case"equation":t.jk(C.j6(A.K,!1,4279310375,A.aG,32,A.bt,A.U,0.14,C.cE(),"y = mx + b",0,D.dp,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jk(C.j6(A.K,!1,4279310375,A.aG,18,A.bt,A.a8,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vj,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eD_(t))
w=1
break A
case"compare":t.dc(new C.eD0(t))
w=1
break A
case"link_text":t.jk(C.j6(A.bn,!1,4280640491,A.ne,16,A.bt,A.a8,0.1,C.cE(),"https://example.com",0,D.dp,0.8,0.1,0.5))
w=1
break A
case"phone":t.jk(C.j6(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.1,C.cE(),"(555) 123-4567",0,D.dp,0.8,0.1,0.5))
w=1
break A
case"email":t.jk(C.j6(A.bn,!1,4280640491,A.aG,18,A.bt,A.a8,0.1,C.cE(),"name@email.com",0,D.dp,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eD2(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.dc(new C.eD3(t,r))
w=1
break A
case"invoice":t.jk(C.j6(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dp,0.8,0.1,0.08))
w=1
break A
case"resume":t.jk(C.j6(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dp,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jk(C.j6(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bFF()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dp,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jk(C.j6(A.bn,!1,4279310375,A.aG,17,A.bt,A.a8,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dp,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jk(C.j6(A.bn,!1,4279310375,A.aG,15,A.bt,A.a8,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dp,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qF,v)},
cz9(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fbF.q(0,this.z)},
cz8(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bb4(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cu,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.bA
u=B.L(u,A.r,o&&e?2:1)
t=C.ip_(d)
s=o?12:18
r=o?A.I:A.cV
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.r(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.S(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.r(p,D.PS,A.f,p,p,D.Fp,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fC,B.az(p,new B.an(A.a0,p,A.ac,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRD(d){var w,v=null,u=this.kc()
if(u==null)return A.bN
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aD:A.an,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.Ss,new C.eEn(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.j,0,v,v)},
vR(d){return this.bDR(d)},
bDR(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSS.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.ot(),$async$vR)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCH(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f9Z
w=h.e
if(w==null)return h.bHL()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.Q(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aF(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aF(u,A.eS,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c2:D.bjr
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTa()}else j=!1
if(j)k.push(new C.a92(h.a.c,!1,h.e.gbdj(),h.gcf7(),g))
else if(s&&h.e!=null&&!h.ky()&&C.cls(h.e.w)){j=h.a
k.push(new C.a92(j.c,j.d,g,h.gcgg(),g))}if(s)k.push(h.bRy(w,t,r))
if(s&&h.ky()){w=t?A.fY:A.lg
j=B.l(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.r(g,B.A(B.a([D.bYz,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.fY,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.j,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yH,A.hK,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7x(t,r))
if(w&&h.ky())k.push(h.cGE(t))
if(r&&h.kc()!=null&&w&&!h.ky())k.push(h.c7s(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8M(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8M(t,!1),g))
i.push(B.E(new B.bL(A.b4,g,g,h.bJ6(v,t,!s||p),g),1))
if(h.cz9(r)&&u&&s&&!h.ky())i.push(h.ceU(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.j,0,A.p),1))
if(q&&!h.ky()&&h.cz8(!1))j.push(new B.a5(240,g,h.bUt(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c7t(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ac,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHL(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.Q(p).ax.a===A.J
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f2(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.u2(0,!1)}p=w?A.c2:A.h3
v=r.c
v.toString
v=B.aF(v,A.dR,x.w).w
u=r.a.e
t=x.p
s=B.a([r.ce2(A.bl,A.qL,new C.eDp(r),r.gcis(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.bz,B.A(B.a([B.E(r.as9(A.bl,A.i0,"Blank Presentation",new C.eDq(r)),1),A.au,B.E(r.as9(A.b2,A.uY,"Class Template",new C.eDr(r)),1)],t),A.l,q,A.e,A.j,0,q,q)],t)
if(r.a.d&&r.gYZ()&&!A.d.aV(r.d,new C.eDs()))A.d.v(s,B.a([A.W,new B.mq(r.as9(A.c3,A.j8,"Create Hati ya Kiapo",r.gc46()),D.hqT)],t))
s.push(A.nd)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.m(q,q,w?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.af)
t=r.d
if(t.length===0)s.push(r.bEE(w))
else{t=new B.i3(t,B.U(t).k("i3<1>"))
A.d.v(s,t.gdO(t).dM(0,new C.eDt(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cl(s,q,q,new B.S(18,v.r.b+12,18,u),q,q,A.ah,!1),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bPF(){this.m(new C.eE3(this))
var w=this.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900){w=$.aW.ap$.d.c
if(w!=null)w.js()}},
agM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.Q(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGe(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agM,v)},
Bu(d,e){return this.czv(d,e)},
czv(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bu=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hL(D.YZ,!0,"Dismiss",j,new C.eHN(),new C.eHO(r,d,e),A.iO,!0,x.N),$async$Bu)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aka()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTa()){r.aka()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aS8(d),$async$Bu)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRA(j,q,d.b),$async$Bu)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
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
return B.b(r.FR(d,!1),$async$Bu)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hL(D.YZ,!0,"Dismiss",j,new C.eHP(),new C.eHQ(d),A.a3,!0,x.y),$async$Bu)
case 20:if(g===!0)r.OG(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahO("Rename presentation",d.b),$async$Bu)
case 24:l=g
if(l!=null)r.ctQ(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eHR(r,k))
r.pK()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bu,v)},
b3P(d,e){var w=null
return B.bO(!1,D.fWw,w,w,!0,w,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.az,w,A.lL,w,w,w,w,w,A.kB,w,w))},
bEE(d){var w,v=null
if(!d)return B.r(v,D.bx2,A.f,v,v,B.NZ(22),v,v,v,v,A.ey,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c5(w,new C.eCM(this,!0),v)},
bNL(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eDS(),x.dv).bY(0,new C.eDT()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.alo,this.aPk(v,e,new C.eDU(),f),null)},
aPk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e7)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bw,n,n,n,10),A.r9],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.r(n,new B.c8(A.aL,A.e,A.P,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bH(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n0,n,n,n))
A.d.v(l,u)}return B.ev(A.a7,B.A(l,A.l,n,A.e,A.P,0,n,n),A.f,A.e5)},
bEC(d,e,f){return this.aPk(d,e,null,f)},
bNN(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dtJ
else if(v==="hati_kuhoweya")w=D.de9
else{if(v==="hati_kiapo_uongozi")v=D.d_J
else v=C.kN(v)?D.d7y:A.S3
w=v}v=this.fy
v===$&&B.c()
return B.c5(v,new C.eDX(this,f,e,d,w),null)},
c7t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cX)return A.bN
w=k.Xx(i)
v=k.avw(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Ck,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bO(!1,D.fRS,j,j,!0,j,j,j,new C.eFn(k),j,j)],t),A.l,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.l(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hh,new B.bN(new B.p(r,j,p,q,o,j,A.n),A.bi,new B.D(A.f_,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bl,j,j,j,j,2,D.c3M,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xl,j,j,j,j,j,j,!1,"\u2022",j,new C.eFo(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AL,A.ao,j,A.Vh,j,j),j),j),j),1)
q=B.l(16)
p=d?A.br:A.c
o=B.L(d?A.aM:A.bh,A.r,1)
n=B.E(B.ce(B.A(B.a([k.uI(G.OU,j,new C.eFp(k,i),d),k.uI(G.a24,j,new C.eFq(k,i),d),k.uI(I.apR,j,new C.eFr(k,i),d),k.uI(I.a2Q,j,new C.eFs(k,i),d),k.uI(k.bEA(i.as),j,new C.eFt(k,i),d),k.uI(D.aqX,j,new C.eFu(k,i),d),k.uI(D.aqW,j,new C.eFv(k,i),d)],t),A.l,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.i.M(i.w)
return B.bS(0,B.aH(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.alx,B.r(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aD:A.an,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.df],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lM,j,j,j),j)],t),A.l,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7s(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bN
w=m.b
v=w===D.cX
u=B.l(18)
t=x.O
t=d?B.a([A.br,A.a_],t):B.a([A.c,A.aS],t)
s=B.L(d?A.aM:A.bh,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cC,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7n(A.j6,"Edit",new C.eF8(o,m),d,!0))
if(w===D.lT)p.push(o.b7n(A.HQ,"Shape & ring",new C.eF9(o),d,!0))
p.push(o.uI(A.Db,"Format",new C.eFa(o),d))
if(v)A.d.v(p,B.a([o.uI(G.OU,n,new C.eFb(o,m),d),o.uI(D.aqX,n,new C.eFc(o,m),d),o.uI(D.aqW,n,new C.eFd(o,m),d)],q))
p.push(A.b3)
p.push(o.cxm(A.ej,n,o.gaTv(),d,!0))
p.push(o.uI(A.hM,"Done",new C.eFe(o),d))
return B.r(n,B.A(p,A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a8(A.a7,A.aa,A.x,t,n,n),A.n),n,n,n,A.Ci,A.lM,n,n,n)},
bEA(d){switch(d.a){case 2:return D.a2N
case 1:case 5:return D.a2P
default:return D.a2O}},
c8n(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e2
default:return A.bn}},
aC0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.l(12)
u=B.l(12)
t=h?K.I8:n
if(h)s=n
else s=g?A.c.j(0.06):A.cc
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e7,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.po,B.aH(!1,A.a3,!0,n,B.aP(!1,v,!1,B.ez(new B.D(new B.S(q,8,q,8),B.A(o,A.l,n,A.e,A.P,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uI(d,e,f,g){return this.aC0(d,e,f,g,!1,!1)},
b7n(d,e,f,g,h){return this.aC0(d,e,f,g,h,!1)},
cxm(d,e,f,g,h){return this.aC0(d,e,f,g,!1,h)},
bRy(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.l(20),m=x.O
m=e?B.a([A.br,A.a_],m):B.a([A.c,A.og],m)
w=B.L(e?A.aM:A.no,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cC,18)],x.V)
u=p.a3G(A.eL,"Back",p.gbKR(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.m(o,o,e?A.c:A.a_,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.df,B.E(B.A(B.a([new B.dl(1,A.cn,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.m(o,o,e?A.bW:A.an,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uq,o,A.e,A.j,0,A.d2,o),1)],q)
if(!p.ky()){u=p.a3G(A.pB,"Undo",p.ax.length===0?o:p.gcHe(),e)
A.d.v(r,B.a([u,p.a3G(D.bS_,"Redo",p.ay.length===0?o:p.gcsx(),e)],q))}r.push(p.a3G(A.zd,"PDF",new C.eEg(p),e))
r.push(p.a3G(A.i2,"Download as video",new C.eEh(p),e))
if(!p.ky())r.push(B.CE(o,o,B.X(A.oC,e?A.ab:A.bw,o,o,o,o),new C.eEi(p),A.H,new C.eEj(p),A.ag,"More",x.N))
r.push(A.df)
r.push(B.aH(!1,A.a3,!0,o,B.aP(!1,B.l(14),!0,B.ez(D.esN,o,new B.p(o,o,o,B.l(14),o,K.I8,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCQ(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.r(o,B.A(r,A.l,o,A.e,A.j,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a8(A.aA,A.aE,A.x,m,o,o),A.n),o,o,o,D.bC4,D.bHu,o,o,o)},
cGE(d){var w=this,v=null,u=B.l(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cs:A.bh,A.r,1)
return B.r(v,B.ce(B.A(B.a([w.j5(A.uV,"Print",new C.eIy(w),d),w.j5(A.zd,"Download PDF",new C.eIz(w),d),w.j5(A.qQ,"Present",w.gaCQ(),d)],x.p),A.l,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yH,G.ana,v,v,v)},
a3G(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dv
else w=g?A.ab:A.aM
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cg)},
c7x(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cs:A.bh,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eFy(r,d),t),t.k("ak.E"))
t.push(new B.D(A0.amR,new B.ff(new C.eFz(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wv,r.aiv(A.k8,"Ending celebration",r.gciF(),d),q),new B.D(S.wv,r.aiv(A.HQ,"Logo ring & frame",r.gcjm(),d),q)],x.p):A.f7)
A.d.v(t,w?B.a([new B.D(S.wv,r.aiv(A.mj,"Look and feel",r.gcjn(),d),q),new B.D(S.wv,r.aiv(A.pE,"Edit this slide's text",r.gcjU(),d),q)],x.p):A.f7)
t.push(new B.D(S.wv,B.h6(B.az(q,B.r(q,D.f9m,A.f,q,q,new B.p(q,q,q,B.l(999),B.a([new B.ac(0,A.G,N.lG.j(0.4),A.H,10)],x.V),D.at0,A.n),q,34,q,q,A.f4,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eFA(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ce(B.A(t,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bHY,q,q,A.aL)
s=e?8:10
return B.r(q,B.x(B.a([t,B.ce(r.cuY(d),A.t,q,A.y,q,new B.S(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yH,q,q,q,q)},
cuY(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dmS[v]
u.a=null
s=u.a=t.b
w.push(e.m_(e.cwK(s),t.a,new C.eGX(u,e),a3,D.aSS.q(0,s)))}w.push(e.j5(A.ll,"Notes Slide",new C.eGY(e),a3))
w.push(e.m_(A.HP,"Quiz",new C.eGZ(e),a3,!0))
w.push(e.m_(P.Hq,"Worksheet",new C.eH9(e),a3,!0))
w.push(e.m_(W.HS,"Flashcard",new C.eHk(e),a3,!0))
w.push(e.m_(A.PI,"Lab Report",new C.eHv(e),a3,!0))
w.push(e.m_(A.qO,"Rubric",new C.eHC(e),a3,!0))
w.push(e.m_(A.pw,"Minutes",new C.eHD(e),a3,!0))
w.push(e.m_(A.oB,"Syllabus",new C.eHE(e),a3,!0))
w.push(e.m_(A.a3n,"Timeline",new C.eHF(e),a3,!0))
return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dof[v]
w.push(e.m_(r.b,r.c,new C.eHG(e,r),a3,!D.aSY.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wS,a0,e.gaP0(),a3),e.j5(A.uR,"Picture",new C.eH_(e),a3),e.j5(A.zo,"Bio link",new C.eH0(e),a3),e.j5(A.a3m,"Table",new C.eH1(e),a3),e.j5(A.PM,"Sticky",new C.eH2(e),a3),e.j5(A.t7,"Divider",new C.eH3(e),a3),e.j5(A.zx,"Header",new C.eH4(e),a3),e.m_(A6.t5,"Rectangle",new C.eH5(e),a3,!0),e.m_(A.pt,"Circle",new C.eH6(e),a3,!0),e.m_(A.a2D,"Triangle",new C.eH7(e),a3,!0),e.m_(A.jI,"Arrow",new C.eH8(e),a3,!0),e.m_(D.bQr,"Parallelogram",new C.eHa(e),a3,!0),e.m_(D.bSW,"Hexagon",new C.eHb(e),a3,!0),e.m_(A.t7,"Line",new C.eHc(e),a3,!0),e.m_(A.zd,"PDF",new C.eHd(e),a3,!0),e.m_(N.a3w,"Signature",new C.eHe(e),a3,!0),e.j5(A5.CW,"Quote",new C.eHf(e),a3),e.j5(D.a2c,a1,new C.eHg(e),a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPT("Wide 16:9",D.E2,a3),e.aPT("Short 9:16",D.oT,a3),new B.D(A.fC,B.n3(D.bV4,d,D.fO3,d,new C.eHh(e),d,d,d,d),d)],u),A.l,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bL5("This slide",!e.Q,a3,new C.eHi(e)),A.bm,e.aSa("All slides",e.Q,a3,new C.eHj(e),!0)],u),A.l,d,A.e,A.j,0,d,d)
p=e.bL6()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bW:A.bL,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5s,new C.eHl(e),n),n.k("ak.E"))
n=B.ce(B.A(n,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dpf[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dv:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fC,B.az(d,B.r(d,d,A.f,d,d,new B.p(j,d,new B.bH(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHm(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ce(B.A(l,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGW()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHn(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.T,q,A.am,p,A.T,o,A.ax,n,A.T,m,A.ax,l,A.T,j,A.ax,B.ce(B.A(h,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4d(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=new C.eGW(e)
t=new C.eHH(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Ss,f.dy,new C.eHo(e,u,f),A.b2)
A.d.v(p,B.a([o,A.ax,n,A.T,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ax],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Ss,q,new C.eHp(e,u),A.bl))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.ll,w,new C.eHq(e),a3),e.j5(A.uV,"Print deck",new C.eHr(e),a3),e.m_(D.aoY,"Export JSON",new C.eHs(e),a3,!0),e.j5(A.fM,"Duplicate Slide",e.gaUq(),a3),e.j5(A.ej,a2,e.gaTw(),a3),e.cAR(a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j5(D.a2c,a1,new C.eHt(e),a3),e.j5(A.fM,"Duplicate",e.gaUq(),a3),e.j5(A.ej,a2,e.gaTw(),a3),e.j5(A.qQ,"Present",e.gaCQ(),a3),e.j5(A.D9,a0,e.gaP0(),a3),e.j5(A.D1,"Fit Text",new C.eHu(e),a3),e.j5(A.zd,"Download PDF",new C.eHw(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jM,"Transfer",new C.eHx(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.OU,"Bold",new C.eHy(e,f),a3),e.j5(G.a24,"Italic",new C.eHz(e,f),a3),e.j5(G.aoz,"Underline",new C.eHA(e,f),a3),e.j5(Ag.OV,"Bullets",new C.eHB(e,f),a3),e.bUc(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bRD(a3))
w.push(e.j5(D.bP8,"Delete",e.gaTv(),a3))
A.d.v(u,w)}return B.A(u,A.l,d,A.e,A.j,0,d,d)}},
aPT(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oT
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abw,t,t,t)],v)
if(w)A.d.v(u,B.a([A.df,D.bUg],v))
return new B.D(A.fC,B.jx(t,t,t,B.A(u,A.l,t,A.e,A.P,0,t,t),t,new C.eDk(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cAR(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bN
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aT:A.cv,A.r,1)
u=B.l(8)
t=B.X(A.Ho,d?A.aD:A.an,q,q,q,14)
s=B.aI(q,q,q,q,D.arZ,q,q,q,new C.eI3(r,p),q,q,q,q,q,A.cg)
return B.r(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bp,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.arQ,q,q,q,new C.eI4(r,p),q,q,q,q,q,A.cg)],x.p),A.l,q,A.e,A.P,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.H3,A.n_,q,q,q)},
cwK(d){switch(d.a){case 6:return W.HS
case 7:return A.HP
case 8:return P.Hq
case 4:return A.zx
default:return A.ll}},
bUc(d,e){var w=null,v=B.L(e?A.aT:A.cv,A.r,1),u=B.l(8),t=B.aI(w,w,w,w,D.arZ,w,w,w,new C.eEt(this,d),w,w,w,w,w,A.cg),s=A.i.M(d.w)
return B.r(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bp,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.arQ,w,w,w,new C.eEu(this,d),w,w,w,w,w,A.cg)],x.p),A.l,w,A.e,A.P,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.uC,A.n_,w,w,w)},
c4d(d){var w=null
return B.CE(B.E7(B.X(A8.a2f,d?A.ab:A.bw,w,w,w,16),w,w,D.fTO,w,w,w),w,w,new C.eF0(),A.H,this.gbFh(),A.cm,"Slide layout",x.fO)},
m_(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.cc,s=B.L(g?A.dn:A.bh,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dl:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.r(w,D.PS,A.f,w,w,D.Fp,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fC,B.aH(!1,A.a3,!0,w,B.aP(!1,v,!0,B.ez(new B.D(A.hh,B.x(B.a([new B.an(A.a0,w,A.ac,A.f,q,w),A.cQ,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aR:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.P,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.m_(d,e,f,g,!1)},
b8M(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hP(t,new C.eIf(u,s,e,d),s.r.length,A.cm,t,w,new C.eIg(e),!1)
s=d?A.as:A.cc
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cm,B.IJ(E.asc,new C.eIh(u),B.o1(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aTD,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.r(t,B.x(w,A.l,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJ6(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oT?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.S(u,u,u,u),new B.bL(A.b4,v,v,new B.fH(w,B.az(v,B.cq(new C.eDK(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eDL(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJ8(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kN(a9.w))===!0,b1=b0&&C.fRq(b3),b2=b0&&b3.b===D.lt&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6A(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6z(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c6:A.bl
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hgt(b3))o=a8
else if(p&&!a7.ky())o=a7.gcf9()
else o=a7.ky()?a8:new C.eDy(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.iR
i=w&&C.hgt(b3)&&a7.At()?new C.eDz(a7,b3):a8
h=v&&b3.b===D.cX?new C.eDA(a7,b3):a8
g=u?new C.eDB(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bd
else e=q?A.c3:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c3.j(0.08)
else a0=b3.b===D.lt?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c3.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aF(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.At()
a3=b3.b===D.cX
a4=a3?a7.Xx(b3):a8
a5=a3?a7.avw(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aF(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eDC(a7,b3):a8
a3=v&&a3?new C.eDD(a7,b3):a8
a6=C.b3r(q,a4,a1,b3,a5,a2,a3,new C.eDE(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.r(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ap(-4,B.az(a8,B.r(a8,D.bX5,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDF(a7,b3,b4,b5),a8,a8,new C.eDG(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.az(a8,B.r(a8,D.bXN,A.f,a8,a8,new B.p(A.dc,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1I(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.az(a8,B.r(a8,D.bZs,A.f,a8,a8,new B.p(A.c3,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDH(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cX)if(a7.w!==a9){e=a7.c
e.toString
e=B.aF(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.az(a8,B.r(a8,D.h1Z,A.f,a8,a8,new B.p(A.bl,a8,a8,B.l(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.H,8)],x.V),a8,A.n),a8,a8,a8,a8,A.li,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDI(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.az(j,B.eN(A.A,f,new B.an(A.a0,a8,A.ac,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bC("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSa(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.L(e?A.bl:A.bA,A.r,1)
if(e)t=A.bl
else t=f?A.aD:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.df,B.r(r,D.PS,A.f,r,r,D.Fp,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.r(r,B.A(t,A.l,r,A.e,A.P,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.hf,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bL5(d,e,f,g){return this.aSa(d,e,f,g,!1)},
ceU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aP),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aS
t=f?A.xP:l
if(f)s=new B.bH(new B.ay(e?A.bA:A.bh,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tu,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.ab:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3P(e,new C.eFC(m))],q),A.l,l,A.e,A.j,0,l,l)
o=B.m(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bW:A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.r(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.l(10),A.dt),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eFD(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.S(12,w,12,v),l,l,l)},
aVK(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bN
w=new C.eEH(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.i.D(1-a2.c,0.06,1)
t=A.i.D(1-a2.d,0.06,1)
s=A.i.D(1-a2.e,0.01,1)
r=A.i.D(1-a2.f,0.01,1)
q=a5?A.dZ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3P(a3,a0.gbPE())],p),A.l,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fOA,B.E(B.kX(a1,a1,a1,u,0.05,new C.eEI(w,a2),A.i.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.h0m,B.E(B.kX(a1,a1,a1,t,0.05,new C.eEJ(w,a2),A.i.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cX
if(m)o.push(B.A(B.a([D.fI3,B.E(B.kX(a1,a1,a1,96,10,new C.eEK(w,a2),A.i.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
l=n===D.lT
if(l||n===D.lt||n===D.TN)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fUD,B.E(B.kX(a1,a1,a1,s,0,new C.eEL(w,a2),A.i.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.h1G,B.E(B.kX(a1,a1,a1,r,0,new C.eEM(w,a2),A.i.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Ds[j]
i.a=null
g=h.a
i.a=g
k.push(B.jx(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pY,a1,a1,a1),a1,new C.eEN(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bH,k,A.bs,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Dl[j]
f.a=null
g=e.a
f.a=g
h.push(B.jx(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pY,a1,a1,a1),a1,new C.eEO(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.T,l,A.am,k,A.T,i,A.am,B.bW(A.bH,h,A.bs,a1,6,6)],p))}o.push(A.T)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eEP(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bH,l,A.bs,a1,6,6),A.af,B.ht1(new C.eEQ(w,a2),D.cBm,B.eA([a2.as],k),!0,a1,k)],p))}if(n===D.fj){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eER(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bH,m,A.bs,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bZe,D.fWI,new C.eES(a0,a5),B.bp(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cs:A.c
p=a4?A.xP:a1
if(a4)o=new B.bH(new B.ay(a3?A.bA:A.bh,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.r(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tu,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GO,a1,a1,a1)},
bUt(d){return this.aVK(d,!1,!1,null)},
ce2(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c5(q,new C.eEV(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fxk,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bc,B.E(B.x(B.a([w,A.bG,A.cQ,s.bEC(D.d4M,d,B.Q(v).ax.a===A.J)],u),A.E,r,A.e,A.j,0,A.p),1)],u)
q=x.V
A.d.v(v,B.a([A.ae,B.dN(B.h6(B.aH(!1,A.a3,!0,r,B.aP(!1,r,!0,B.ez(D.ffP,r,new B.p(r,r,B.L(A.c.j(0.55),A.r,1.3),r,B.a([new B.ac(0,A.G,A.c3.j(0.4),A.ev,8)],q),D.at5,A.a6),r,r,r),A.cT,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj),r,"Documents (Hati)",r,r),A.H)],u))
t=B.A(v,A.l,r,A.e,A.j,0,r,r)
w=s.c
w.toString
if(B.Q(w).ax.a!==A.J)q=B.NZ(20)
else{w=B.l(20)
v=B.a([D.bfv,D.bfY],x.O)
u=B.L(d.j(0.45),A.r,1.2)
q=new B.p(r,r,u,w,B.a([new B.ac(0,A.G,d.j(0.18),A.cC,14)],q),new B.a8(A.aA,A.aE,A.x,v,r,r),A.n)}return B.r(r,t,A.f,r,r,q,r,r,r,r,A.bV,r,r,r)},
as9(d,e,f,g){var w,v=null,u=this.c
u.toString
if(B.Q(u).ax.a===A.dk){u=B.l(22)
w=B.NZ(22)
return B.aH(!1,A.a3,!0,v,B.aP(!1,u,!0,B.ez(B.x(B.a([new B.NY(d,48,e,v,v),A.af,B.d(f,v,v,v,v,v,v,D.foT,A.K,v,v)],x.p),A.l,v,A.ba,A.j,0,A.p),v,w,v,A.Cq,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}u=this.fy
u===$&&B.c()
return B.c5(u,new C.eCt(this,g,d,e,f),v)},
ahO(d,e){return this.cqL(d,e)},
cqL(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b6,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eGz(d,q),p,null,!0,!0,x.N),$async$ahO)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahO,v)},
QG(d){var w=d.bT()
return""+B.bM(w)+"/"+B.bV(w)+"/"+B.bD(w)}}
C.agw.prototype={}
C.aAL.prototype={
S(){return new C.bf1(null,null)}}
C.bf1.prototype={
gcDb(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bM(u)+"/"+B.bV(u)+"/"+B.bD(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a4()
w=B.bl(u,A.qz,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bAz,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxR()},
JD(d){var w=0.12+d*0.09,v=A.i.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cx.aA(0,new B.hO(w,v,A.cx).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bGg,B.c5(new B.h7(B.a([u,w],x.dS)),new C.dau(this),v),v),v,v,v)}}
C.bfg.prototype={
B(d){var w=null,v=B.l(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bGx,B.aH(!1,A.a3,!0,w,B.r(w,B.bx(B.l(22),B.x(B.a([new B.D(D.bFI,B.x(B.a([B.r(w,D.bXT,A.f,w,w,new B.p(A.ay.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fYV,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fyD,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.e1,D.bzC,B.A(B.a([B.E(B.bO(!1,D.fMJ,w,w,!0,w,w,w,new C.daS(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bL,w,w,w,w,w,A.nF,w,A.oY,w,w,w,w,w,w)),1),B.r(w,w,A.f,A.br,w,w,w,48,w,w,w,w,w,1),B.E(B.bO(!1,D.fSc,w,w,!0,w,w,w,new C.daT(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nF,w,A.oY,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w)],t),A.l,w,A.e,A.P,0,A.p),A.aq),A.f,w,Aa.XC,new B.p(A.as,w,u,v,D.d5a,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KL.prototype={
S(){return new C.bf0()}}
C.bf0.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.l(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dJ,8)],t)
s=m.j(l?0.16:0.14)
r=B.l(9)
q=p.a
r=B.r(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.p(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dN(B.d3(B.az(o,B.uJ(B.cT(o,B.A(B.a([r,A.au,new B.dl(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.eW:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.ba,A.P,0,o,o),o,o,A.b0,new B.p(n,o,u,v,t,o,A.n),A.eJ,o,o,o,o,A.nG,o,o,1/0),A.cx,A.jp,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dap(p,d),new C.daq(p),new C.dar(p),new C.das(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.QH.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aH(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.f_,B.A(B.a([B.r(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a8(A.aA,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ew,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nh,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eH,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0T.prototype={
S(){return new C.aGj(D.dp,null,null)}}
C.aGj.prototype={
gZR(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bA8,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b9f(d){if(!this.a.c.ay)return
this.x=d
this.gZR().iA(0,0)},
Y(){var w,v=this
v.a4()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axB(D.fmk)
C.ilO()
v.S9()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZR().t()
v=w.z
if(v!=null)v.a1(0)
C.axB(D.fml)
C.ilR()
w.bzZ()},
cG1(){B.jY()
this.m(new C.eJe())
var w=this.c.L(x.q).f
w.a5U()
if($.bn_)w.T(D.fj8)},
S9(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dw(0,0,0,0,0,A.o.D(C.hrd(u,w),1,120)),new C.eJ4(v))},
cFF(){var w,v=this
v.m(new C.eJd(v))
if(v.r)v.S9()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXG(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czB(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJ5(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lJ,new C.eJ6(w))},
azD(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eJ0(u))
u.S9()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXG()){u.czB()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eJ1(u,A.o.F(w+1,s)))
u.b9f(w)
u.S9()}},
cpp(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJ2(v))
v.S9()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJ3(v,w,t))
v.b9f(w)
v.S9()}},
cB6(d){var w,v=this,u=v.e
if(u===D.cu){u=v.d
u===$&&B.c()
return new B.mq(d,new B.bC(u,x.ac))}w=v.cB7(u)
u=v.d
u===$&&B.c()
return B.oy(new B.mq(d,new B.bC(u,x.ac)),w,new C.eJb(),A.b0,A.b0,new C.eJc(v))},
cB7(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bAv
case 16:return A.iP
case 18:return A.mV
default:return A.mc}},
cB5(d,e,f){var w,v,u,t=null,s=B.cG(A.cx,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d1(s,!1,e,t)
case 2:case 17:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.vt,A.H,w),w.k("bg<bP.T>")),t,!0)
case 3:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.U0,A.H,w),w.k("bg<bP.T>")),t,!0)
case 4:case 21:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.i5,A.H,w),w.k("bg<bP.T>")),t,!0)
case 5:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.tt,A.H,w),w.k("bg<bP.T>")),t,!0)
case 6:case 16:w=x.b
return B.ig(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bP.T>")))
case 7:w=x.b
return B.ig(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bP.T>")))
case 8:return B.c5(s,new C.eJ7(s),e)
case 9:return B.c5(s,new C.eJ8(s),e)
case 10:return B.c5(s,new C.eJ9(s),e)
case 11:return B.c5(s,new C.eJa(s),e)
case 12:w=x.b
return new B.d1(s,!1,B.ig(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bP.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jm(B.jJ(e,new B.bg(s,new B.br(A.vt,A.H,v),v.k("bg<bP.T>")),t,!0),A.t,new C.bug(w,t))
case 15:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.U0,A.H,w),w.k("bg<bP.T>")),t,!0)
case 19:w=B.dr()
w.n2((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fz(A.A,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eN(A.A,(1-s.gp(0))*0.2,new B.d1(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jm(new C.apW(B.c5(n.gZR(),new C.eJf(n,v,w),m),m),A.t,m)}else{t=B.r3(new C.JJ(w,!0,!1,m))
l=B.b1(w.e)
u=n.cB6(B.e9(B.jm(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.r(m,B.A(B.a([B.d(n.r?"Auto "+C.hrd(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p3,m,m,m),A.bm,D.c_k],k),A.l,m,A.e,A.P,0,m,m),A.f,m,m,new B.p(A.aU,m,m,l,m,m,A.n),m,m,m,m,A.hg,m,m,m)
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
l.push(B.bS(0,new C.Or(new C.Fo(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oT?0.5625:1.7777777777777777
l.push(B.at(new B.fH(r,B.jm(B.v2(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bn_){r=B.IJ(A.lp,new C.eJg(d),B.o1(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.IJ(B.X(n.r?Am.uU:A.hj,m,m,m,m,m),n.gcFE(),B.o1(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ap(16,B.bm(!0,B.r(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h1,m,m,m),A.f,m,m,new B.p(A.aU,m,m,r,m,m,A.n),m,m,m,m,A.hg,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.az(A.c4,B.r(A.lz,$.bn_?A.bN:s,A.f,m,m,m,m,64,m,m,D.bBe,m,m,150),A.y,!1,m,n.gcG0(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.az(m,new B.an(A.a0,m,A.b1,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJh(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KR.prototype={
B(d){var w=null
return B.r(w,B.bm(!0,new B.D(E.amC,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b80,w,w,w,w,w,w,w,w)}}
C.bug.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bk1.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b4M
break
default:w=B.l(6)
break}v=s.e
u=B.L(v?A.aF:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cT(r,B.at(B.r(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wZ,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b0,new B.p(s.f,r,u,w,r,r,A.n),A.h5,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aF:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bk0.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dCP.h(0,p)
if(o==null)o=D.dop
p=p==="none"
w=p?q:new B.a8(A.a7,A.aa,A.x,o,q,q)
p=p?A.d1.j(0.25):q
v=r.e
u=v?B.L(A.aF,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ara:q
w=B.r(q,B.r(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a6),q,52,q,q,A.eB,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aF:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aM7.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aO9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA4.prototype={}
C.aOa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3u.prototype={}
C.Xj.prototype={
S(){return new C.aGh()},
bk1(d){return this.e.$1(d)}}
C.aGh.prototype={
gb7t(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabH(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7t()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQK(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7t()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8L(){return A.d.cG(this.gabH(),0,new C.eIL())},
Y(){var w,v=this
v.a4()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RK()},
RK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b45(s.c,s.f),$async$RK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eIH(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RK,v)},
JF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabH()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fUI(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.py(o,q.c,q.f),$async$JF)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ec(new C.eIK(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ce(q),$async$JF)
case 4:q=t.a
w=5
return B.b(B.px(q.c,q.f),$async$JF)
case 5:w=6
return B.b(t.RK(),$async$JF)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JF,v)},
S7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hy(o,D.efM,!0,"NgmySlidesTransferScan",x.N),$async$S7)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eII(t))
w=4
return B.b(C.aiE(s),$async$S7)
case 4:r=e
t.m(new C.eIJ(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.fhY)
w=1
break}w=5
return B.b(t.a.bk1(r),$async$S7)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S7,v)},
JE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabH()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.py(s,r.c,r.f),$async$JE)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fUX(null,A.d.gH(n),s,t.a.f)}else q=C.fUX(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hk(q,"ngmy_slides_"+p,!1),$async$JE)
case 4:o=e
s=t.a
w=5
return B.b(B.px(s.c,s.f),$async$JE)
case 5:w=6
return B.b(t.RK(),$async$JE)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JE,v)},
a3R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eIM(t))
w=3
return B.b(C.bFn(),$async$a3R)
case 3:s=e
t.m(new C.eIN(t))
if(s==null||J.cs(s)){w=1
break}w=4
return B.b(t.a.bk1(s),$async$a3R)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3R,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.Q(d).ax.a===A.J,l=m?A.bB:A.cc,k=o.gabH().length!==0,j=B.ap(n,B.r(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.bY(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cz,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eIQ(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tE],h),A.l,n,A.e,A.j,0,n,n)
w=B.l(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.eQ,24)],x.V)
u=B.ap(n,B.X(A.qL,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.r(n,D.c_T,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ew,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ax,D.bLp],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.h6(B.az(A.c4,D.ffS,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gck5(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.r(n,new B.an(A.a0,n,A.ac,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a41,A.n),n,n,n,n,E.a0K,n,n,1/0),A.e1,o.azE(m,"What to transfer"),A.af,B.A(B.a([B.E(o.b_7(A.qQ,m,new C.eIR(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.b_7(D.bQk,m,new C.eIS(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d9,o.azE(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.l(16)
s=B.L(m?A.bA:A.bh,A.r,1)
v.push(B.r(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aD:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eIT(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.nd)
w.push(o.azE(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.asb(A.aH,k,!0,A.jL,m,o.r,o.gce6(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOL(A.jY,!0,A.js,m,o.gcwj(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.j,0,n,n))
w.push(A.W)
w.push(B.A(B.a([B.E(o.bD5(A.aW,k,A.i2,m,o.r,o.gce3(),"Download .json","Backup file"),1),A.au,B.E(o.aOL(A.av,!0,AB.zw,m,o.gcIy(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.j,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.l(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lP,A.bl.j(0.9),n,n,n,18)
r=o.gaQK()
q=o.gb8L()
p=o.gb8L()===1?"":"s"
A.d.v(w,B.a([A.bz,B.r(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.ab:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bI,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Oq,i,n),B.E(B.cl(w,n,n,D.bEP,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.r(n,U.XX,A.f,A.dS,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ac,A.t,j,n),n,!1,!1,n,n)},
agZ(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.isT(s,t.d,t.e),$async$agZ)
case 2:return B.h(null,v)}})
return B.i($async$agZ,v)},
azE(d,e){var w=null,v=B.r(w,w,A.f,w,w,new B.p(A.bl,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aD:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
b_7(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.as:A.c
if(g)w=A.bl
else w=e?A.bA:A.bh
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cC,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.l(12)
t=B.r(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aH(!1,A.a3,!0,s,B.aP(!1,r,!0,B.ez(new B.D(A.bI,B.x(B.a([t,A.W,u,A.bG,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNM(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.as:A.c,m=B.l(16)
if(p)w=A.bl
else w=e?A.bA:A.bh
w=B.L(w,A.r,p?2:1)
v=B.r(q,D.c05,A.f,q,q,new B.p(q,q,q,B.l(12),q,new B.a8(A.a7,A.aa,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.pt
if(p)r=A.bl
else r=e?A.aT:A.dv
return new B.D(A.cy,B.aH(!1,A.a3,!0,q,B.aP(!1,o,!0,B.r(q,B.A(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bI,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eIG(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
asb(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.bA:A.bh
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.r(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.t2,s,s,s)],t)
if(i)u.push(B.ap(s,B.r(s,D.arK,A.f,s,s,D.b7N,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aH(!1,A.a3,!0,s,B.aP(!1,p,!0,B.ez(new B.D(E.a0n,B.x(B.a([new B.an(A.a0,s,A.ac,A.f,u,s),A.af,v,A.bG,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOL(d,e,f,g,h,i,j){return this.asb(d,e,!1,f,g,!1,h,i,j)},
bD5(d,e,f,g,h,i,j,k){return this.asb(d,e,!1,f,g,h,i,j,k)}}
C.Xk.prototype={
S(){return new C.bmZ()}}
C.bmZ.prototype={
Y(){this.a4()
this.afL()},
afL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fUX(null,A.d.gH(m),k,r.a.f):C.fUX(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kN(A.d.gH(n).w))C.fUI(A.d.gH(r.a.d),D.dm8)
n=r.a
m=n.c
n=C.ipf(n.d)
w=7
return B.b(C.fUW(p,C.ipk(r.a.d),n,m,q),$async$afL)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eIU(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eIV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.Q(d).ax.a===A.J,h=i?A.bB:A.cc,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.eIW())
v=B.aI(j,j,j,j,B.X(A.eL,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eIX(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tE],u),A.l,j,A.e,A.j,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dm,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.r(j,B.x(B.a([r,A.T,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a41,A.n),j,j,j,j,E.a0K,j,j,1/0)
q=B.l(24)
s=B.L(A.aH.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vp,A.K,j,j))
else if(k.d==null)r.push(D.esl)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ac(0,A.G,A.aF.j(0.35),A.cC,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fNe,A.am,B.az(j,B.r(j,B.A(B.a([D.c1F,A.au,B.d(m,j,j,j,j,j,j,D.fz2,j,j,j)],u),A.l,j,A.e,A.P,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c6A,A.n),j,j,j,j,Y.amn,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eIY(k,d),j,j,j,j,j,j,!1,A.a4),A.T,D.fRJ,A.aB],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.L(A.bA,A.r,1)
l=k.d
l.toString
p.push(B.r(j,B.qc(j,j,!1,l,j,!0,!0,j,!1,D.bvD),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ho,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Oq,v,j),B.E(B.ce(B.x(B.a([t,A.aO,B.r(j,B.x(r,A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c8v,A.n),j,j,j,j,A.uB,j,j,1/0)],u),A.l,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.amG,j,j,A.ah),1)],u),A.l,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGe.prototype={
S(){return new C.aGf(new B.au(A.aw,$.aw()),B.ka(!0,null,!0,!0,null,null,!1))}}
C.aGf.prototype={
Y(){var w=this
w.a4()
w.e.aW(0,new C.eCn(w))
$.aW.x1$.push(new C.eCo(w))},
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.t()
this.a3()},
b1W(){var w,v=this.c
v.toString
w=C.zh(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aF(a2,A.eS,x.w).w,i=B.l(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vq,36),D.aeI],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.r(k,B.x(B.a([B.r(k,D.bXX,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fKd,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.j,0,A.p),A.f,k,k,D.b8d,k,k,k,k,A.yU,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.a_
o=new B.aN(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.H,12)],g):k
t.push(new B.bz(1,A.bb,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fsc,k,k,k),k,k,A.b0,new B.p(s,k,new B.bH(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h5,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A_.AK)
A.d.v(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.j,0,k,k),B.bS(0,B.d3(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c4u,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uX(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C7(5,k),new C.bxy()],x.aS),k,k,A.aUR,k,5,k,1,k,k,!1,"\u2022",k,new C.eCj(l),k,new C.eCk(l),k,!1,k,k,!1,k,!0,k,A.ad,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mz,k,k,k,k),0),0,0,0)],a1)
d=C.zh(w.a.a.toUpperCase())==null?k:l.gce7()
return B.at(new B.D(new B.S(24,24,24,24+j.f.d),B.aH(!1,A.a3,!0,k,new B.cP(Af.LW,B.r(k,B.bx(e,B.x(B.a([a0,new B.D(D.bFl,B.x(B.a([new B.an(A.a0,k,A.ac,A.t,g,k),A.W,D.fIv,A.bz,new B.a5(1/0,50,B.bJ(D.fZP,k,d,B.bp(A.bl,A.br,A.an,k,A.c,k,k,k,new B.b9(B.l(16),A.a1),k,k,k)),k),A.am,B.bO(!1,A.o1,k,k,!0,k,k,k,new C.eCl(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.j,0,A.p),k)],a1),A.l,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.p(A.bB,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxy.prototype={
oZ(d,e){var w=e.a.toUpperCase()
return e.cP6(B.hh(A.bC,w.length),w)}}
C.asX.prototype={
S(){return new C.aGi(B.zY(A.NJ,A.o7,A.v7))}}
C.aGi.prototype={
t(){this.d.t()
this.a3()},
b1V(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j1(w,d)},
abC(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h2Z(s),$async$abC)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1V("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abC,v)},
ce5(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.ipi(w[u])
if(t!=null){this.b1V(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.wU,s,s,s,t.gbSb(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eI(B.a([r,B.aI(s,s,s,s,B.X(q?A.uO:An.Pp,s,s,s,s,s),s,s,s,new C.eJ_(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bB,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h01,s,s,s,1,s,!0)
r=B.zX(t.d,A.c_,t.gce4())
w=B.l(28)
w=B.at(B.r(s,s,A.f,s,s,new B.p(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.H,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b1,A.t,B.a([r,w,B.ap(32,B.r(s,D.fOl,A.f,s,s,new B.p(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jq,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxM.prototype={
B(d){var w=null,v=B.l(24),u=B.L(A.aM,A.r,1)
return B.aH(!1,A.a3,!0,w,B.r(w,B.x(B.a([B.r(w,H.arp,A.f,w,w,D.b7X,w,56,w,w,w,w,w,56),A.aO,D.h_I,A.am,new B.k4(this.c,new C.fjM(),w,w,x.cI),A.aO,new B.k4(this.d,new C.fjN(),w,w,x.cl),A.af,D.h_G],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,Af.LW,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0Q,D.bFZ,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a92.prototype={
S(){return new C.bmI(A.bF)},
gd1(){return this.c}}
C.bmI.prototype={
Y(){var w=this
w.a4()
if(w.a.d)return
w.a07()
w.d=B.df(A.fJ,new C.eqD(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a07(){return this.csE()},
csE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a07=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eqB(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.clt(p.c),$async$a07)
case 6:r=e
q.a=r==null?A.bF:r
case 4:if(t.c==null){w=1
break}t.m(new C.eqC(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a07,v)},
bUk(d){var w,v,u=d.a,t=A.o.ar(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ar(u,6e7)%60
v=A.o.ar(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bN
w=s.e.a
v=A.o.ar(w,6e7)<30&&A.o.ar(w,36e8)<999?A.ay:A.c3
w=v.j(0.14)
u=B.l(14)
t=B.L(v.j(0.55),A.r,1)
return B.r(r,B.A(B.a([B.X(A.Ho,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bUk(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.j,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A1.als,A.hK,r,r,1/0)}}
C.a9W.prototype={
nx(){var w,v,u,t=this
t.xZ()
w=t.cx
v=t.c
w.bul(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qi(B.I(["/S",D.ew5,"/URI",new B.t0(B.XV(w.as),A.vu,!0)],x.N,u),u))}}
C.a9X.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b59.prototype={
bC4(d,e,f,g,h,i,j,k,l,m){var w=B.eA([D.euo],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSA(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k9(w,new C.cpn(),B.a4(w).k("k9<ci.E,H>")).f1(0,new C.cpo())},
aF9(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hf(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u0(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.js(d.a,d.b))
s.n(0,"/Border",B.u0(H.att))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h4(t.gcSA()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qi(w,x.Y))}}
C.cpp.prototype={}
C.a4h.prototype={}
C.ajz.prototype={}
C.aTm.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lC(d)
q.MD(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjm(w)
u=x.N
t=x.Y
s=new C.cpp(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bC4(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qi(B.I(["/Type",D.ew3],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9W(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayA.prototype={}
C.aUO.prototype={
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
u.LM(t)
u.Tp(0)
u.pn(0,v)
w.fV(d)
u.nA(0)}}}
var z=a.updateTypes(["aB<~>()","~(m1)","P(hQ)","~()","P(eQ)","P(oN)","P(m1)","~(hQ)","P(eQ,eQ)","KR(Z)","P(oa)","P(lu)","aB<P>()","H(H,hQ)","ai<Af>()","n(oa)","P(a9j)","n(m1)","n(wA)","P(Fx)","H(hQ,hQ)","a9<n,@>(hQ)","n(eQ)","v(eQ)","cK(eQ)","v(hG)","~(hG)","eQ(n,G,G,G,G,G{align:qn,anim:hG,bullets:P,color:H?,delay:H,fx:n,key:n,style:IC,weight:nZ})","eQ(n,G,G,G,G,G,H{align:qn,style:IC,weight:nZ})","eQ(n,G,H)","~(ai<oN>)","P(Af)","P(n,ai<Af>)","H(oN,oN)","oa()","a9<n,@>(oN)","a2g(Z)","eQ(vj,G,G,G,G,H{fx:n,key:n,rotation:G})","eQ(n,G,G,G,G{anim:hG,delay:H,fx:n,key:n})","ZZ(Z)","aB<~>(oN)","P(mS)","a1M(Z)","a1L(Z)","ZX(Z)","a09(Z)","eQ(vj,G,G,G,G,H,n,n{anim:hG,delay:H,rotation:G,stroke:H,strokeWidth:G})","eQ(n,G,G,G,G,G,n,n,H)","eQ(G,G,n,H{size:G})","Qw(Z)","lu()","v(rP,G,G)","oN(a9<@,@>)","Fx()","fi(eQ)","v(jb)","a_H(Z)","~(Fo)","a01(Z)","H(eQ,eQ)","eQ(eQ)","a9<n,@>(eQ)","eQ(a9<@,@>)","m1(m1)","a9<n,@>(m1)","m1(a9<@,@>)","P(k0)","k0()","~(v8)","n(hQ)","V(ai<hQ>)","V(hQ)","P(n,hQ)","aeD(Z)","~(P(eQ,eQ))","ae1(Z,H)","aeG(Z)","u(m1,P)","agm(Z,H)","aeJ(Z)","X7(Z)","~(mV)","hQ(hQ)","G(eQ)","X8(Z)","a0T(Z)","hQ()","a1f(Z)","aB<~>(ai<hQ>)","v(bA<H,hQ>)","D(k0)","D(Fx)","aB<~>(hG,~())","v(ai<hG>,hG?,~(hG),u)","ai<FU>()","ai<jG<mV>>(Z)","jG<mV>(mV)","hQ(a9<@,@>)","Xj(Z)","P(mu)","Xk(Z)","v(hQ)","~(ml)","JJ(Z,m1,v?)","H(a9X)","aB<ai<a9<n,@>>?>()","n(n)","aB<Ae>({paper:n?,photo:dK?,request:n,template!lx})","aB<a9b>({doc!Ae,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lx})","ai<hQ>(n?)"])
C.cOE.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:62}
C.cOF.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:72}
C.cOG.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galB(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mF(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:72}
C.cOH.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTR.prototype={
$1(d){return J.eE(A.dQ.gaU(d),d.byteOffset,d.byteLength)},
$S:1692}
C.fGY.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1693}
C.c3M.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:31}
C.c3N.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:42}
C.c3P.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fXV.prototype={
$1(d){return new C.a2g(this.a,this.b,C.iqa(),null)},
$S:z+36}
C.fie.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fii.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fij.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fik.prototype={
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
C.fif.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fig.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fih.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fi9.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hn,w,w,w)
return B.eg(B.a([B.bO(!1,E.aWZ,w,w,!0,w,w,w,new C.fi7(d),w,w),B.bO(!1,D.fLI,w,w,!0,w,w,w,new C.fi8(d),w,w)],x.p),w,w,D.a_6,v,w,w,w,w,D.h0k,w)},
$S:18}
C.fi7.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fi8.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fia.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fib.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fio.prototype={
$0(){var w=this.a
return w.m(new C.fin(w,this.b))},
$S:0}
C.fin.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fid.prototype={
$0(){var w=this.a
return w.m(new C.fic(w,this.b,this.c))},
$S:0}
C.fic.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fil.prototype={
$0(){return this.a.a2f(this.b)},
$S:0}
C.fim.prototype={
$0(){return this.a.PM(0,this.b)},
$S:0}
C.fir.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fis.prototype={
$0(){var w=this.a
return w.m(new C.fiq(w,this.b))},
$S:0}
C.fiq.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fip(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fip.prototype={
$1(d){return d.a},
$S:z+69}
C.fpS.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hoi(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.oN(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+52}
C.fpT.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fK9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcA()}if(q)v.n(0,s,t)}},
$S:z+30}
C.fK7.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fK8.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+33}
C.fXn.prototype={
$1(d){return d.aj()},
$S:z+35}
C.fGC.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fYg.prototype={
$1(d){return new C.ZZ(this.a,null)},
$S:z+39}
C.cQ0.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+41}
C.cQ2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQ5.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQ6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQ4())},
$S:12}
C.cQ4.prototype={
$0(){},
$S:0}
C.cQ7.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3f(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cQ3(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiN(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:316}
C.cQ3.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQ8.prototype={
$1(d){},
$S:28}
C.cQ1.prototype={
$1(d){return new C.ZX(this.b,this.a.gcCx(),null)},
$S:z+44}
C.cQ9.prototype={
$1(d){return D.htm},
$S:z+49}
C.cPX.prototype={
$1(d){var w=null,v=B.l(24),u=B.L(D.ZE,A.r,1),t=x.p
return B.at(B.aH(!1,A.a3,!0,w,B.r(w,B.x(B.a([new B.D(D.bFL,B.x(B.a([B.r(w,D.bV5,A.f,w,w,new B.p(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fKF,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fxV,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.e1,new B.D(A.qE,B.A(B.a([B.E(B.dU(D.fRL,new C.cPV(d),B.di(w,w,w,w,w,w,w,w,w,E.nz,w,w,A.cq,w,new B.b9(B.l(14),A.a1),D.b5d,w,w,w,w)),1),A.au,B.E(B.bJ(D.fY3,w,new C.cPW(d),B.bp(A.bD,w,w,w,w,w,A.cq,w,new B.b9(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w),w)],t),A.l,w,A.e,A.P,0,A.p),A.f,w,A.xS,new B.p(D.agv,w,u,v,D.da0,w,A.n),w,w,w,K.a0Q,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1694}
C.cPV.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPW.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPY.prototype={
$0(){return J.nT(this.a.d,new C.cPU(this.b))},
$S:0}
C.cPU.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPT.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.L(D.ZE,A.r,1),q=x.p
q=B.a([B.A(B.a([B.r(t,D.c_b,A.f,t,t,new B.p(t,t,t,B.l(14),t,D.at0,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aWE,t,t,t),A.bG,D.fXZ],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.l,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dxR[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azx(u[1],u[2],u[3],new C.cPR(v,d),!1,t))}q.push(A.am)
q.push(D.bzF)
q.push(A.am)
q.push(new C.azx(A.ej,"Delete book","Remove it from this device",new C.cPS(d),!0,t))
return B.bm(!0,B.r(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.p(D.agv,t,r,s,t,t,A.n),t,t,t,A.ux,A.GT,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cPR.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPS.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cQ_.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLS,12)],x.V)
return B.dN(B.eN(A.A,e,B.r(w,B.bx(B.l(4),new B.a5(62,95.81818181818181,B.ev(A.A,F.apI(d),A.f,A.dD),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+51}
C.cPZ.prototype={
$0(){return this.a.c8c()},
$S:0}
C.cPQ.prototype={
$0(){return this.a.b0j(0,this.b)},
$S:0}
C.cPP.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cPO.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQa.prototype={
$2(d,e){var w=this.a
return w.bGG(J.t(w.d,e))},
$S:41}
C.cPh.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bp()},
$S:0}
C.cPg.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3t("Page "+(v.length+1),"",""))},
$S:0}
C.cPj.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPr.prototype={
$0(){},
$S:0}
C.cPs.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:7}
C.cPk.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cR.gcu().aN(this.c)},
$S:0}
C.cPi.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPm.prototype={
$0(){return this.a.Rg(this.b)},
$S:0}
C.cPn.prototype={
$0(){return this.a.Rg(this.b)},
$S:0}
C.cPo.prototype={
$0(){var w=this.a
w.m(new C.cPl(this.b))
w.EE()},
$S:0}
C.cPl.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPp(w,d))
w.EE()},
$S:z+68}
C.cPp.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPx.prototype={
$2(d,e){if(d)this.a.Bp()},
$S:129}
C.cPt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bp(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fkz)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cPu.prototype={
$0(){return this.a.b_e(this.b,-1)},
$S:0}
C.cPv.prototype={
$0(){return this.a.b_e(this.b,1)},
$S:0}
C.cPw.prototype={
$0(){return this.a.c9A(0,this.b)},
$S:0}
C.fOI.prototype={
$1(d){return C.hyy()},
$S:44}
C.fOJ.prototype={
$1(d){return null},
$S:28}
C.fuc.prototype={
$1(d){return null},
$S:28}
C.fPH.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:294}
C.fPG.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:210}
C.fPN.prototype={
$1(d){var w=this.a
return C.hgk(d)===w||C.hDo(d)===w},
$S:z+4}
C.fte.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:77}
C.cfB.prototype={
$1(d){return d.length!==0},
$S:3}
C.cfC.prototype={
$2(d,e){return C.hVJ(d,e)},
$S:z+72}
C.cfE.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.t(t,"at")
v=B.bh(J.k(w==null?"":w))}else v=null
w=J.t(d.b,"at")
u=B.bh(w==null?"":w)
if(u!=null)w=v==null||u.ca(v)
else w=!1
return w},
$S:1695}
C.fOG.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fOH.prototype={
$1(d){return C.fRq(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fJw.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yS,B.x(B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fSn,A.T,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I0,D.fMl,new C.fJu(d),B.bp(A.c3,w,w,w,A.w,w,A.cq,w,w,w,w,w)),A.W,B.es(A.v1,D.fTH,new C.fJv(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xQ,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fJu.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJv.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJx.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,D.fIl,w,w,!0,w,w,w,new C.fJs(d),w,w),B.bJ(D.h_m,w,new C.fJt(d),w)],x.p),w,w,w,D.h1j,w,w,w,w,D.fIe,w)},
$S:18}
C.fJs.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fJt.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.elU.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.elS.prototype={
$0(){return this.a.e=!0},
$S:0}
C.elT.prototype={
$0(){return this.a.f=!0},
$S:0}
C.elV.prototype={
$0(){return this.a.r=!1},
$S:0}
C.elW.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fPM.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:77}
C.fPI.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a7,w,w,B.BX(A.A,B.r(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1696}
C.fPK.prototype={
$1(d){var w=null,v=B.l(3)
return B.r(A.A,B.d(d,w,w,w,w,w,w,D.fzh,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:140}
C.fPL.prototype={
$1$size(d){var w=null
return B.A(B.a([B.r(w,w,A.f,w,w,new B.p(w,w,B.L(A.iv,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dN(B.r(w,w,A.f,w,w,new B.p(w,w,B.L(A.iv,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.l,w,A.ba,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1697}
C.fPJ.prototype={
$2$female$size(d,e){var w=null,v=d?D.aiL:this.a,u=B.L(A.iv,A.r,1),t=e*0.32,s=B.ap(w,B.r(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.r(w,new B.an(A.A,w,A.ac,A.t,B.a([s,B.ap(e*0.06,B.r(w,w,A.f,w,w,new B.p(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agL,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1698}
C.h0Q.prototype={
$1(d){return new C.aeD(this.a,this.b,null)},
$S:z+73}
C.e8j.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bwf:A.N9,q=B.L(D.jC.j(0.25),A.r,1),p=B.at(B.r(t,t,A.f,t,t,new B.p(A.c3.j(0.45),t,t,B.l(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.l(15)
o=B.r(t,D.arJ,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jC.j(0.35),A.ev,10)],x.V),D.c98,A.n),t,t,t,t,A.yI,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.r(t,B.x(B.a([new B.D(O.a0G,B.x(B.a([p,A.aB,B.A(B.a([o,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.m(t,t,s?A.c:D.jC,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fys,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.l,t,A.e,A.j,0,t,t)],u),A.l,t,A.e,A.j,0,A.p),t),B.E(B.ip(!0,t,e,A.y,D.aTV,new C.e8i(w,this.c),v,D.amh,t,A.ah,!1),1)],u),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(r,t,q,A.mF,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:122}
C.e8i.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ae1(w,new C.e8h(this.b,w),null)},
$S:z+75}
C.e8h.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fJA.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fJB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yS,B.x(B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fW1,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I0,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJy(d),B.bp(D.jC,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oK,D.VZ,new C.fJz(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xQ,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fJy.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJz.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJE.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fJF.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yS,B.x(B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fJp,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I0,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJC(d),B.bp(D.jC,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oK,D.VZ,new C.fJD(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xQ,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fJC.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJD.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJI.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fJJ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yS,B.x(B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fQ7,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I0,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJG(d),B.bp(D.jC,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oK,D.VZ,new C.fJH(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xQ,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fJG.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJH.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h2i.prototype={
$1(d){return D.hyz},
$S:z+76}
C.eqG.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bmJ:A.N9,s=B.L(A.aC.j(0.25),A.r,1),r=B.at(B.r(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.r(v,D.c1C,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c3.j(0.35),A.ev,10)],x.V),D.at5,A.n),v,v,v,v,A.yI,v,v,v)
w=x.p
return B.r(v,B.x(B.a([new B.D(O.a0G,B.x(B.a([r,A.aB,B.A(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:A3.N5,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fvP,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.l,v,A.e,A.j,0,v,v)],w),A.l,v,A.e,A.j,0,A.p),v),B.E(B.ip(!0,v,e,A.y,D.aTV,new C.eqF(this.b),19,D.amh,v,A.ah,!1),1)],w),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.mF,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:122}
C.eqF.prototype={
$2(d,e){var w=D.SJ[e]
return new C.agm(w,new C.eqE(this.a,w),null)},
$S:z+78}
C.eqE.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fRu.prototype={
$0(){return B.hff(C.idj(this.a))},
$S:335}
C.fRt.prototype={
$0(){var w=C.hgD(this.a)
return"data:image/png;base64,"+A.cR.gcu().aN(w)},
$S:23}
C.frv.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jt(d,e),new B.jt(w,e+v),new B.jt(d+f*14,e),new B.jt(w,e-v)],x.J)
B.a3a(this.a,C.fG(4291404327),v)},
$S:677}
C.h2t.prototype={
$1(d){return new C.X7(this.a,null)},
$S:z+80}
C.etD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etC())},
$S:29}
C.etC.prototype={
$0(){},
$S:0}
C.etE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etB(w,d))},
$S:1700}
C.etB.prototype={
$0(){return this.a.x=J.eT(A.dQ.gaU(this.b))},
$S:0}
C.etF.prototype={
$1(d){},
$S:28}
C.etf.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etb.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etm.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etn.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eGO)},
$S:0}
C.eto.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eth.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cf)},
$S:0}
C.eti.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.etj.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.etk.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etl.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.ix)}},
$S:7}
C.etg.prototype={
$0(){var w=this.a,v=w.z,u=C.fSa(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOf(C.fSa(t))},
$S:0}
C.etd.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ete.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etu.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.etv.prototype={
$0(){var w=this.a
return w.m(new C.ett(w))},
$S:0}
C.ett.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.etw.prototype={
$0(){var w=this.a
return w.m(new C.ets(w,this.b))},
$S:0}
C.ets.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.etx.prototype={
$1(d){var w=this.a
return w.m(new C.etr(w))},
$S:9}
C.etr.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ety.prototype={
$1(d){var w=this.a
return w.m(new C.etq(w))},
$S:9}
C.etq.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.etz.prototype={
$0(){var w=this.a
return w.m(new C.etp(w,this.b))},
$S:0}
C.etp.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.etA.prototype={
$1(d){return this.a.a_U()},
$S:2}
C.etc.prototype={
$0(){return this.a.cdn(this.b)},
$S:0}
C.cjl.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:342}
C.cjj.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cjk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fR4.prototype={
boD(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTQ(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cKw($.rk().jp(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mZ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boD(d,e)},
$S:1701}
C.fPm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPo.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:77}
C.fPn.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.ct,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.rc,A.bX,t,A.dB,A.bY)
v=this.a
w.o8(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:34}
C.fr4.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fr5(),B.U(w).k("Y<1>")).gI(0)},
$S:259}
C.fr5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fr2.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:233}
C.fr3.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:233}
C.cjm.prototype={
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
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hgj(i,new B.F(!0,h,a6,k,a6,a6,q,A.cV,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcX(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gclK(),"\n\n")
d=B.fq(a6,A.ct,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afA(k,q,1.28),j),A.rc,A.bX,a6,A.dB,A.bY)
d.o8(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hgj(i,new B.F(!0,h,a6,k,a6,a6,q,A.cV,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hcX(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afA(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.S(v,0,v,0),B.r(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bb,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.rc,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCt(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:403}
C.cjn.prototype={
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
e=B.b1(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hgj(f,new B.F(!0,e,a5,i,a5,a5,h,A.cV,A.bt,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hcX(g.length===0?B.a([a6],n):g,l))break}a1=o.afA(i,h,1.28)
a2=new C.cjo(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kq,new B.a5(v,a5,a4.f,a5),A.Kq,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bI9,B.r(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bb,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.rc,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCt(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.l,a5,A.e,A.j,0,A.p)},
$S:157}
C.cjo.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.rc,w,w),w)},
$S:678}
C.h2w.prototype={
$1(d){return new C.X8(this.a,this.b,null)},
$S:z+84}
C.eup.prototype={
$1(d){return d.lc()},
$S:1703}
C.euq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euo(w,d))},
$S:1704}
C.euo.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.euc.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eud.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euj.prototype={
$0(){return B.a6(this.a,!1).eA()},
$S:0}
C.euk.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bE,A.r,2.5)
return B.az(w,B.r(w,B.b2(w,w,w,new C.bef(u,v.gazw(),w),A.fQ),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euh(v),new C.eui(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.euh.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:275}
C.eui.prototype={
$1(d){var w=this.a
w.m(new C.eue(w,d,this.b,this.c))},
$S:213}
C.eue.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.i.D(s.x*r.d,1,6)
w=s.gazw()
r=r.a
v=t.c
u=t.d
s.r=A.i.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.i.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eul.prototype={
$1(d){var w=this.a
return w.m(new C.eug(w,this.b))},
$S:9}
C.eug.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eum.prototype={
$1(d){var w=this.a
return w.m(new C.euf(w,d))},
$S:6}
C.euf.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eun.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h2M.prototype={
$1(d){return D.hBm},
$S:z+87}
C.f3p.prototype={
$1(d){return this.a.Zu()},
$S:7}
C.f2h.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cR.gcu().aN(v)},
$S:0}
C.f2F.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f2P.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.f20.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f21.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1Z.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2_.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2y.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f2z(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jm(B.r3(q>0.2?F.bXg(r,new B.Eu(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jm(B.d3(B.r3(F.bXg(s.$1(!0),new B.Eu(12,12,A.x))),w*0.75),A.t,v))
s=t.b8
if(s!=null&&t.b6>0)q.push(B.e9(v,B.b1(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b1(s).j(t.bK)
w=t.bf
w.toString
q.push(new B.bN(new B.p(v,v,v,v,v,new B.bY(D.b2B,1.15,A.x,v,0,B.a([s,B.b1(w).j(0)],x.O),v,v),A.n),A.bi,v,v))}s=t.aL
if(s>0)q.push(new B.bN(new B.p(v,v,v,v,v,new B.bY(D.b2l,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi,v,v))
s=t.aR
if(s>0)q.push(new B.bN(new B.p(v,v,v,v,v,new B.a8(A.b4,A.b8,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d8y,v),A.n),A.bi,v,v))
if(t.aH>0){s=t.k1
q.push(B.ap(v,new B.bN(new B.p(v,v,v,v,v,new B.a8(A.b4,A.b8,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.dkq,v),A.n),A.bi,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.e9(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(new B.bN(new B.p(v,v,v,v,v,new B.bY(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dhe,v),A.n),A.bi,v,v))
t=t.aG
if(t>0)q.push(B.b2(v,v,v,new C.bhR(t,v),A.az))
return new B.an(A.a0,v,A.b1,A.t,q,v)},
$S:66}
C.f2z.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.ck,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZR(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
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
return B.dN(B.e1(A.A,B.eN(A.A,l,B.fz(A.A,new B.BJ(new B.uS(q,q,n,A.y3),p,q),q,B.wn(s,o.cP?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.f2L.prototype={
$0(){return this.a.m(new C.f2K(this.b,this.c))},
$S:0}
C.f2K.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2M.prototype={
$1(d){return this.a.m(new C.f2J(this.b,d))},
$S:6}
C.f2J.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2O.prototype={
$0(){return this.a.m(new C.f2N(this.b,this.c))},
$S:0}
C.f2N.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1R.prototype={
$1(d){return d.c===this.a.x},
$S:z+99}
C.f1S.prototype={
$1(d){var w=this.a
return w.m(w.gcDV())},
$S:2}
C.f1T.prototype={
$1(d){return this.a.m(new C.f1Q())},
$S:2}
C.f1Q.prototype={
$0(){},
$S:0}
C.f1U.prototype={
$0(){var w=this.a
return w.m(new C.f1P(w,this.b))},
$S:0}
C.f1P.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f1W.prototype={
$2(d,e){return A.au},
$S:36}
C.f1V.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bA
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b0,new B.p(w,w,q,s,w,new B.a8(A.b4,A.b8,A.x,r,w,w),A.n),A.h5,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fD,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1O(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f1O.prototype={
$0(){var w=this.a
return w.m(new C.f1L(w,this.b))},
$S:0}
C.f1L.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1X.prototype={
$1(d){var w=this.a
return w.m(new C.f1N(w,d))},
$S:9}
C.f1N.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f1Y.prototype={
$1(d){var w=this.a
return w.m(new C.f1M(w,d))},
$S:9}
C.f1M.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f3e.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:34}
C.f3l.prototype={
$1(d){var w=this.a
return w.m(new C.f3m(w,d))},
$S:32}
C.f3m.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f3n.prototype={
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
C.f3f.prototype={
$0(){var w=this.a
return w.m(new C.f3d(w,this.b))},
$S:0}
C.f3d.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f3g.prototype={
$0(){var w=this.a
return w.m(new C.f3c(w,this.b))},
$S:0}
C.f3c.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f3h.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f3b(v,w.b,w.c,w.d))},
$S:0}
C.f3b.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f3i.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtf(v))},
$S:0}
C.f3j.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f3k.prototype={
$0(){var w=this.a
return w.m(new C.f3a(w))},
$S:0}
C.f3a.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.f2Y.prototype={
$1(d){return d.a===this.a.dy},
$S:219}
C.f2Z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aBh[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azA(new B.ns(new B.be(n,n,n,n),A.aq,new B.bN(new B.p(j,j,j,j,j,new B.a8(A.a7,A.aa,A.x,m,j,j),A.n),A.bi,new C.b1m(l,B.b1(k==null?v.w.x:k),A.i.D(w,12,26),j),j),j),u,q.b,o===p,new C.f2X(r,v),2,i))}return B.bW(A.bH,h,A.bs,j,7,7)},
$S:167}
C.f2X.prototype={
$0(){var w=this.b
return w.m(new C.f2S(this.a,w))},
$S:0}
C.f2S.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f3_.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:150}
C.f32.prototype={
$0(){var w=this.a
return w.m(new C.f2W(w))},
$S:0}
C.f2W.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f33.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f34.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f35.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f36.prototype={
$0(){var w=this.a
return w.m(new C.f2V(w))},
$S:0}
C.f2V.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f37.prototype={
$0(){var w=this.a
return w.m(new C.f2U(w))},
$S:0}
C.f2U.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f38.prototype={
$0(){var w=this.b
return w.m(new C.f2T(this.a,w))},
$S:0}
C.f2T.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f39.prototype={
$1(d){return this.a.fx=d},
$S:150}
C.f30.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f31.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f2C.prototype={
$0(){var w=this.a
return w.m(new C.f2B(w))},
$S:0}
C.f2B.prototype={
$0(){var w=this.a
w.p4=null
w.b6a()},
$S:0}
C.f2D.prototype={
$0(){var w=this.a
return w.m(new C.f2A(w,this.b))},
$S:0}
C.f2A.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f2E.prototype={
$0(){var w=this.a
return w.m(w.gcuh())},
$S:0}
C.f2u.prototype={
$0(){var w=this.a
return w.m(new C.f2t(w))},
$S:0}
C.f2t.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f2v.prototype={
$0(){var w=this.a
return w.m(new C.f2s(w))},
$S:0}
C.f2s.prototype={
$0(){var w=this.a
w.aH=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f2w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dhF[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azA(new B.ns(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BJ(new B.uS(o,o,v.aZR(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.y3),B.fR(u,A.A,140,o,A.ck,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f2r(v,s),3,n))}return B.bW(A.bH,m,A.bs,o,10,8)},
$S:167}
C.f2r.prototype={
$0(){var w=this.a
return w.m(new C.f2q(w,this.b))},
$S:0}
C.f2q.prototype={
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
C.f28.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f29.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f2a.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f2b.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f2c.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f2d.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f2e.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f2f.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f2g.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f1u.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f1v.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f1w.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f1x.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f1y.prototype={
$0(){var w=this.a
return w.m(new C.f1t(w))},
$S:0}
C.f1t.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f1z.prototype={
$1(d){return this.a.b8=d},
$S:150}
C.f1A.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f22.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f23.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f24.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f25.prototype={
$1(d){return this.a.bf=d},
$S:150}
C.f26.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f1E.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f1F.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f1G.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f1H.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f1I.prototype={
$0(){var w=this.a
return w.m(new C.f1D(w))},
$S:0}
C.f1D.prototype={
$0(){var w=this.a
return w.c8=A.i.F(w.c8+90+180,360)-180},
$S:0}
C.f1J.prototype={
$0(){var w=this.a
return w.m(new C.f1C(w))},
$S:0}
C.f1C.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f1K.prototype={
$0(){var w=this.a
return w.m(new C.f1B(w))},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.cP=!w.cP},
$S:0}
C.f2x.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ity(v,w.p4)},
$S:0}
C.f2p.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bwA:B.fR(v,A.A,w,w,A.ck,A.c_,!1,w,!1,w,w)
return C.fPu(d.length===0?"rounded":d,u,e)},
$S:130}
C.f2l.prototype={
$0(){var w=this.a
return w.m(new C.f2k(w))},
$S:0}
C.f2k.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f2m.prototype={
$0(){var w=this.b
return w.m(new C.f2j(this.a,w))},
$S:0}
C.f2j.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f2n.prototype={
$0(){var w=this.b
return w.m(new C.f2i(this.a,w))},
$S:0}
C.f2i.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f2o.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.i.D(w.ay,0,1-d)
w.ch=A.i.D(w.ch,0,0.95)},
$S:6}
C.f2I.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.H,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.cnG(),n.r))
l.push(new C.JJ(n.cAQ(),!1,!1,t))
o=B.bS(0,B.bx(o,new B.en(new B.an(A.a0,t,A.b1,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.r(t,new B.an(A.a0,t,A.ac,A.t,B.a([o,B.ap(t,B.az(A.c4,new B.bN(new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f2H(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:161}
C.f2H.prototype={
$1(d){var w=this.a
return w.m(new C.f2G(w,d,this.b,this.c))},
$S:19}
C.f2G.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.i.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.i.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f2R.prototype={
$0(){var w=this.a
return w.m(new C.f2Q(w,this.b))},
$S:0}
C.f2Q.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f27.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f3o.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1N(),B.E(B.at(w.b4O(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aSK(),1),w.aOM()],v),A.l,t,A.e,A.j,0,A.p),1)],v),A.l,t,A.e,A.j,0,t,t)}u=A.i.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1N(),new B.D(A.hJ,B.at(s.b4O(u),t,t,t),t),B.E(s.aSK(),1),s.aOM()],x.p),A.l,t,A.e,A.j,0,A.p)},
$S:668}
C.fML.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bDh(),null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.cu,D.cX,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bt,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,A.U)},
$S:z+28}
C.fMK.prototype={
$3(d,e,f){var w=this,v=C.bDh(),u=w.b?A.I:A.cB,t=w.c?A.cI:A.bt
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bk,4280172719,2,d,0,w.f,w.e,D.cu,D.cX,0.82,0.09,w.a)},
$S:z+29}
C.ckR.prototype={
$1(d){return B.w(d)},
$S:17}
C.fUx.prototype={
$0(){return this.a},
$S:z+14}
C.fza.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+31}
C.fzb.prototype={
$2(d,e){return J.cs(e)},
$S:z+32}
C.fUz.prototype={
$0(){return B.a([],x.o)},
$S:z+14}
C.fUC.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fUD.prototype={
$0(){return A.d.gH(D.x2)},
$S:z+34}
C.fUv.prototype={
$1(d){return d.a},
$S:z+15}
C.fUy.prototype={
$1(d){return d.a},
$S:z+15}
C.fSt.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fSu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSv.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMP.prototype={
$0(){return C.cE()},
$S:23}
C.fMS.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cu,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bk,4280172719,2,d,s,0,"",t,D.cX,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dp,!1,null,0,"","",A.bt,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dp,!1,null,0,"",j,A.bt,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dp,!1,null,0,j,k,A.bt,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bt,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bt,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dp,!1,k,l,"",m,A.bt,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bt,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dp,!1,j,k,"",l,A.bt,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bt,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bt,A.a8)},
$S:z+27}
C.fMR.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cu,D.fj,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+37}
C.fMQ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cu,t=v?j:0
return C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bk,4280172719,2,"",t,0,"",u,D.lT,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r2,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+38}
C.fMO.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.fPf.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hzA.c3(0,A.a.i(s.w).toLowerCase(),new C.fPd(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fPe(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.br2(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1707}
C.fPd.prototype={
$0(){return F.aPI(this.a.w)},
$S:199}
C.fPe.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCa("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.ca,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:199}
C.fqZ.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.fr_.prototype={
$1(d){return d.a},
$S:z+17}
C.fr0.prototype={
$1(d){return d.b},
$S:z+18}
C.h2Y.prototype={
$1(d){return D.hC7},
$S:z+42}
C.f9M.prototype={
$0(){return this.a.x=C.i4h(this.b,this.c.b)},
$S:0}
C.f9N.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f9K.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:443}
C.f9L.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:443}
C.f9J.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.as,null,new C.f9E(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kh,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f9F(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hFQ(o,m.cP1(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f9G(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f9E.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f9I(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.r(p,D.bcQ,A.f,p,p,D.b7G,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Dl:D.Ds,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fPu(v,i.b6N(h),u),p)))}t=B.kW(1,m,4,10,10,p,A.dZ,!0)
if(!l)return B.bm(!0,new B.D(Ab.yP,t,p),!0,!1,A.ag,!0,!0)
s=new C.f9H(i,d)
m=B.aF(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ij[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,m.a.b*0.85),B.ce(B.x(B.a([D.fOu,A.W,t,A.e1,D.f9u,A.ax,D.fZI,A.W,B.kW(1.15,l,3,10,10,p,A.dZ,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Ab.yP,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.f9I.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bq:A.dn
return B.az(w,B.r(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hL,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f9D(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1708}
C.f9D.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f9H.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bM:A.bA
r=B.L(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.r(v,B.bx(w,d.length===0?B.r(v,D.ase,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.du(!0,new C.Or(u.Gf(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.ax,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bM:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9C(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:130}
C.f9C.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f9F.prototype={
$0(){var w=this.a
return w.w=w.w.Gf("")},
$S:0}
C.f9G.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f9s.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f9t.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f9v.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f9w.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f9x.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f9y.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9u(w,d))},
$S:2}
C.f9u.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f9z.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.fa_.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.fa0.prototype={
$0(){var w=this.a
return w.m(new C.f9Z(w))},
$S:0}
C.f9Z.prototype={
$0(){return this.a.e=null},
$S:0}
C.fa1.prototype={
$0(){var w=this.a
return w.m(new C.f9Y(w))},
$S:0}
C.f9Y.prototype={
$0(){return this.a.x=null},
$S:0}
C.fa3.prototype={
$1(d){var w=this.a
return w.m(new C.f9X(w,d))},
$S:35}
C.f9X.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.fa4.prototype={
$1(d){var w=this.a
return w.m(new C.f9W(w,d))},
$S:35}
C.f9W.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fa5.prototype={
$0(){var w=this.a
return w.m(new C.f9V(w))},
$S:0}
C.f9V.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.fa6.prototype={
$1(d){var w=this.a
return w.m(new C.f9U(w,d))},
$S:35}
C.f9U.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.fa7.prototype={
$1(d){var w=this.a
return w.m(new C.f9T(w,d))},
$S:35}
C.f9T.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fa8.prototype={
$0(){var w=this.a
return w.m(new C.f9S(w))},
$S:0}
C.f9S.prototype={
$0(){var w=this.a
return w.w=w.w.Gf("")},
$S:0}
C.fa9.prototype={
$0(){var w=this.a
return w.m(new C.f9R(w,this.b))},
$S:0}
C.f9R.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.faa.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bST(D.a5Q[v]),null))
return B.bW(A.bH,t,A.bs,null,8,8)},
$S:167}
C.fa2.prototype={
$1(d){var w=this.a
return w.m(new C.f9Q(w,d))},
$S:9}
C.f9Q.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f9A.prototype={
$0(){var w=this.a
return w.m(new C.f9B(w,this.b,this.c))},
$S:0}
C.f9B.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f9P.prototype={
$0(){var w=this.a
return w.m(new C.f9O(w,this.b))},
$S:0}
C.f9O.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h2X.prototype={
$1(d){return new C.a1L(this.a,this.b,null)},
$S:z+43}
C.f9l.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f9m.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f9n.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aLc?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f9o.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f9p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9k(w,d))},
$S:2}
C.f9k.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f9q.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f9r.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hh(A.bC,w.length),A.aP))},
$S:0}
C.fyr.prototype={
$1(d){return d.a===this.a},
$S:219}
C.eq5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazB(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d21:D.dk8
t=D.yu.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yu.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.H,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bS(0,B.b2(q,q,q,new C.bk8(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bS(0,B.bU6(B.eN(A.A,0.5,B.r(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a8(A.a7,A.aa,A.x,B.a([A.L,D.bkM.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.r(q,B.bx(s,new B.an(A.a0,q,A.ac,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ee:A.ml,D.yu,q,q,q,20),A.ax,B.ev(A.A,B.of(A.jU,D.fHJ,new C.eq4()),A.f,A.e5)],r),A.l,q,A.e,A.P,0,A.p),q,q,q),B.ap(q,B.r(q,D.fEb,A.f,q,q,new B.p(D.yu,q,q,B.l(6),q,q,A.n),q,q,q,q,P.amZ,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a8(A.aA,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:88}
C.eq4.prototype={
$1(d){return D.c7k.aJ(0,d)},
$S:70}
C.fUE.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fUF.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:219}
C.fUG.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1709}
C.fUH.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fUA.prototype={
$1(d){return d.a},
$S:z+17}
C.fUB.prototype={
$1(d){return d.b},
$S:z+18}
C.h2a.prototype={
$1(d){return new C.a09(this.a,this.b,null)},
$S:z+45}
C.dsV.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dsW.prototype={
$1(d){return d.a===this.a.gajT()},
$S:z+10}
C.dsX.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dt_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dt0.prototype={
$0(){var w=this.a
return w.m(new C.dsZ(w,this.b))},
$S:0}
C.dsZ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dt1.prototype={
$1(d){var w=this.a
return w.m(new C.dsY(w,d))},
$S:9}
C.dsY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eq3.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1710}
C.fn6.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fj,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cu,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+46}
C.fn8.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bt,A.cV,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bk,4280172719,2,d,l,0,"",D.na,D.cX,g,e,f)},
$S:z+47}
C.fn7.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xf(0,"twinkle")
w=t===D.bk?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.na,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+48}
C.fn5.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fNW.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fNX.prototype={
$0(){return A.d.gH(D.Is)},
$S:z+50}
C.fNY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fpl.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fU6.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bk,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bk,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bk,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fO,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU7.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bk,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bk,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bk,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fO,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fO,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fU8.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bk,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kf,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kf,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fO,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUj.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kf,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kf,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.ke,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bk,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUo.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.ke,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bk,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fO,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bk,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUp.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kf,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bk,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fO,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUq.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d0U[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fj,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.bk,v,4294967295,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lm
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fO,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUr.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mS,A.dl,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fj,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.E4,v,2450411,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lm
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fO,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fUs.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bk,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.ke,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fO,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUt.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bk,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bk,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fO,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kf,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bk,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUu.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kf,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bk,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bk,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fU9.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.ke,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.ke,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fO,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fUa.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.ke,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.ke,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.ke,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.f0,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fUb.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bk,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bk,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kf,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.ke,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fO,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fUc.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bk,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.ke,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.ke,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fO,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fUd.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lu,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lu,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lu,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lu,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lu,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fO,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUe.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kf,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.f0,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fO,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUf.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mS,A.dl,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fj,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.E4,v,2450411,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lm
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bk,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fO,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUg.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eQ("design_"+(""+1000*v+"_"+u),D.fj,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bt,A.aG,s,A.bn,null,D.fO,t,t,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lm
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bk,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bk,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fO,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUh.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bk,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bk,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bk,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bk,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bk,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fO,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fUi.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eQ("design_"+(""+1000*u+"_"+t),D.fj,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,4294967295,4280640491,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
u=$.Lm
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.d7,A.cp,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eQ("design_"+(""+1000*t+"_"+s),D.fj,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,u,q,0,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lm
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bk,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.ke,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fUk.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kf,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kf,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kf,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kf,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bk,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.f0,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUl.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bk,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.f0,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.f0,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.f0,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kf,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUm.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bk,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bk,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bk,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.f0,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fO,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eQ("design_"+(""+1000*v+"_"+u),D.fj,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.f0,16777215,t,2,0,!1,"",0,D.cu,0,"","","","","",!1,0)
v=$.Lm
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fUn.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kf,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kf,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bk,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bk,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fLM.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fLN.prototype={
$0(){return A.d.gH($.bGW())},
$S:z+53}
C.fxK.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fxJ.prototype={
$1(d){return C.icf(d,this.a,this.b)},
$S:z+54}
C.fUN.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wn(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUO(B.i1e(A.vU,C.ici(w.c,w.d,v,u),t)))},
$S:446}
C.e3y.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e3x.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.jm(new B.an(A.a0,w,A.b1,A.t,B.a([new B.bN(new B.p(w,w,w,w,w,new B.bY(A.Fi,1.2,A.x,w,0,u.d,w,w),A.n),A.bi,w,w),new B.en(B.b2(w,w,w,new C.bgW(u.a,s,r,s),A.az),w),B.at(new B.k4(s,new C.e3w(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:341}
C.e3w.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e0.aA(0,A.i.D(e/1.4,0,1)),p=A.i.D(e/0.9,0,1),o=A.i.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.H,l)],x.V)
A.d.v(j,B.a([B.r(r,B.hV(B.fR(i,A.A,r,r,A.ck,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fZ(A.A,0,6.283185307179586,A.x,t,r,new B.mN(e*0.8)),A.a6),r,w,r,r,new B.S(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btS(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.H,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dN(B.x(B.a([B.r(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a8(A.a7,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNo(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.P,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.d3(B.e1(A.A,new B.D(new B.S(l,0,l,0),B.x(j,A.l,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f8y.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aE,A.x,this.a.c,B.a([0,A.i.D(w-0.1,0,1),A.i.D(w,0,1),A.i.D(w+0.1,0,1),1],x.x),null).aJ(0,d)},
$S:70}
C.cfc.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bM:A.bA
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.ia.j(0.4),A.H,14)],x.V):v
w=B.cT(v,B.bx(B.l(12),d,A.aq),v,v,A.b0,new B.p(v,v,t,u,w,v,A.n),A.eJ,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fD,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bM:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1711}
C.cfd.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gf(""))},
$S:0}
C.cfe.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.du(!0,new C.Or(v.Gf(u),!0,!1,null),null),d.b,new C.cff(w,this.c,d),v.a===u)},
$S:z+55}
C.cff.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hFQ(u.b,t.c.Gf(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h0A.prototype={
$1(d){return new C.a_H(this.a,null)},
$S:z+56}
C.di8.prototype={
$0(){var w=this.a
w.d=w.gwi().bf3("data:"+this.b+";base64,"+A.cR.gcu().aN(this.c));++w.r},
$S:0}
C.did.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.die.prototype={
$0(){var w=this.a
return w.m(new C.dic(w))},
$S:0}
C.dic.prototype={
$0(){return this.a.r++},
$S:0}
C.dif.prototype={
$1(d){var w=this.a
return w.m(new C.dib(w,d))},
$S:2}
C.dib.prototype={
$0(){var w=this.a
return w.d=w.gwi().aG2(this.b)},
$S:0}
C.dig.prototype={
$0(){var w=this.a
return w.m(new C.dia(w))},
$S:0}
C.dia.prototype={
$0(){var w=this.a
return w.d=w.gwi().bf3("")},
$S:0}
C.dih.prototype={
$1(d){var w=this.a
return w.m(new C.di9(w,d))},
$S:2}
C.di9.prototype={
$0(){var w=this.a
return w.d=w.gwi().bf9(this.b)},
$S:0}
C.dii.prototype={
$0(){var w=this.a
w=w.gwi().bf9(w.gazC().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h0z.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h0y(w),null)},
$S:20}
C.h0y.prototype={
$2(d,e){var w=null,v=this.a
return B.r(w,B.bm(!0,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.85),B.ce(B.x(B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fWH,A.ax,D.fWX,A.aB,new C.b1j(v.a,new C.h0x(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b8e,w,w,w,w,A.Ob,w,w,w)},
$S:163}
C.h0x.prototype={
$1(d){this.b.$1(new C.h0w(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+57}
C.h0w.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h2W.prototype={
$1(d){return D.hvA},
$S:z+58}
C.doX.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.doY.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.doZ.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fRn.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.i.D(w-0.12,0,1),A.i.D(w,0,1),A.i.D(w+0.12,0,1)],x.x),null).aJ(0,d)},
$S:70}
C.dhQ.prototype={
$3(d,e,f){var w,v=this,u=new B.aG($.R().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c6(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c6(w,q+p,w,q+p*1.2))
u.E(new B.DS(B.bZ(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:455}
C.fRr.prototype={
$2(d,e){return A.i.aS(d.c,e.c)},
$S:z+59}
C.fJM.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fJN.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yS,B.x(B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fEt,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I0,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJK(d),B.bp(A.c3,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oK,D.VZ,new C.fJL(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xQ,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fJK.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJL.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ckP.prototype={
$1(d){return d.hQ()},
$S:z+60}
C.ckQ.prototype={
$1(d){return d.aj()},
$S:z+61}
C.ckO.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.i.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.i.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.i.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i7O(b2.h(0,"type"))
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
n=A.aDo[A.o.D(b4,0,8)]
m=D.d46[A.o.D(w,0,1)]
l=C.ibE(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.i.M(k)
if(k==null)k=4279310375
j=A.azK[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ies(b2.h(0,"shape"))
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
a3=C.hAH(b2.h(0,"textTransition"))
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
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+62}
C.ckE.prototype={
$1(d){return d.hQ()},
$S:z+63}
C.ckF.prototype={
$1(d){return d.aj()},
$S:z+64}
C.ckB.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckC.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckD.prototype={
$1(d){return C.hre(B.a2(d,x.N,x.z))},
$S:z+65}
C.cl5.prototype={
$1(d){return d.a===this.a},
$S:z+66}
C.cl6.prototype={
$0(){return A.d.gH(D.a5s)},
$S:z+67}
C.cl0.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.cl_.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.ckW.prototype={
$1(d){return new B.N(d,new C.ckX(),B.U(d).k("N<1,V>")).f1(0,new C.ckY())},
$S:z+70}
C.ckX.prototype={
$1(d){return d.f},
$S:z+71}
C.ckY.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:682}
C.ckZ.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hXZ(d)},
$S:z+109}
C.cl1.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cl2.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.cl3.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fS2.prototype={
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
$S:z+74}
C.fRZ.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fS_.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fS0.prototype={
$2(d,e){var w
if(d.b===D.cX){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fS1.prototype={
$2(d,e){return d.b===D.fj&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ckK.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.inx(b2,b3),b5=B.a4(b4).k("b7<2>")
b5=B.cF(new B.b7(b4,b5),new C.ckJ(),b5.k("M.E"),x.N)
w=B.d2(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qv.aA(0,A.i.D(b1,0,1))
u=new C.ckL()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ckM(a9,b7.d)
r=new C.ckN(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jE.aA(0,A.i.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.i.D(1-k,0,1),B.dN(B.e1(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lT&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b1,A.t,B.a([new B.kH(A.i.D(o,0,1),r.$1(l),a8),new B.kH(A.i.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wR(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.i.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cu)a7=D.na
p.push(s.$5(i.c,i.d,i.e,i.f,C.hDd(a7,a6,r.$1(i))))}}return new B.bN(new B.p(a8,a8,a8,a8,a8,new B.a8(A.a7,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi,new B.an(A.a0,a8,A.ac,A.t,p,a8),a8)},
$S:456}
C.ckJ.prototype={
$1(d){return d.a},
$S:z+22}
C.ckL.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+77}
C.ckM.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1715}
C.ckN.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a91(v,C.b3r(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQt.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e1(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ckT.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ckU.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fUU.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:292}
C.fU0.prototype={
$1(d){return new C.aeJ(this.a,this.b,null)},
$S:z+79}
C.eCp.prototype={
$0(){return this.a.QF(this.b,C.irt(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eCq.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QF(this.b,C.irv(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eCr.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QF(this.b,C.iru(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eCs.prototype={
$0(){A2.hCY()
B.a6(this.a,!1).O(null)},
$S:0}
C.ckI.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1716}
C.ckH.prototype={
$2(d,e){var w,v=this,u=null,t=B.dP(d,A.o3),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.i.V(A.i.D(p*Math.max(B.ji(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dD
return B.fR(t,A.A,o,new C.ckG(),A.ck,w,!0,u,!1,new B.bC("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1717}
C.ckG.prototype={
$3(d,e,f){return D.afc},
$S:214}
C.fRY.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a8(A.aA,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.cW(r,0,B.dA(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fRX(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,new B.bN(new B.p(v,t,t,t,t,w,A.n),A.bi,new B.an(A.a0,t,A.ac,A.t,r,t),t),A.aq)},
$S:1718}
C.fRX.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3r(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fAu.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fAs(d))
w=B.aF(d,A.c1,x.w).w
v=B.l(22)
u=B.L(A.bA,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h8,28)],x.V)
s=x.p
return new B.d1(e,!1,B.at(B.aH(!1,A.a3,!0,q,B.r(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jQ,q,q,q),A.ax,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bO(!1,A.AZ,q,q,!0,q,q,q,new C.fAt(p,d),q,B.fv(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cm,q,new B.b9(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h7,A.GY,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:263}
C.fAs.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pY())B.a6(w,!0).eA()},
$S:0}
C.fAt.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eA()},
$S:0}
C.fh8.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dN(u.b,new B.o((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dN(u.b,new B.o(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dN(u.b,new B.o(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dN(u.b,new B.o(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fz(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fz(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.km(r*0.5)
return B.fz(A.A,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fz(A.aa,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(B.e1(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLq(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLq(1-r,t))],x.p),t)
case 16:v=A1.XQ.aA(0,r)
return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(B.e9(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n2(r*6.28)
s.k5(r,r,r,1)
return B.fz(A.A,u.b,t,s,!0)
case 20:return B.eN(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:68}
C.e1h.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1g.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1f.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hDd(v,w,e)},
$S:68}
C.ckA.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b1(v.e)
t=v.f
t.toString
t=new B.a8(A.a7,A.aa,A.x,B.a([u,B.b1(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b1(v.e):r
v=v.z
s=B.U(v).k("N<1,cK>")
q=B.C(new B.N(v,new C.ckz(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bN(new B.p(t,r,r,r,r,u,A.n),A.bi,new B.an(A.a0,r,A.ac,A.f,q,r),r)},
$S:456}
C.ckz.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cu?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a91(m,new C.Wo(d,C.b3r(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.df2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.df1(w))},
$S:12}
C.df1.prototype={
$0(){return this.a.d++},
$S:0}
C.epM.prototype={
$2(d,e){var w,v=null,u=A.o.ar(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSV.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ine(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ej(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fz(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dN(B.e1(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e1(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:68}
C.f62.prototype={
$1(d){var w
$.R()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dT
return w},
$S:1719}
C.fPv.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.btL(u,t,r),A.az))
w.push(B.nW(s.d,A.aq,new C.bhs(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bsI(u,q,t,r),A.az))
return B.at(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b1,A.t,w,r),r),r,r,r)},
$S:231}
C.fDB.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:294}
C.eIE.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.DC(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eIC(),new C.eID(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1720}
C.eIC.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:201}
C.eID.prototype={
$0(){return J.fs(this.a)},
$S:1722}
C.eF1.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF2.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eF3.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eGC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGq.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eGr.prototype={
$1(d){return d.hQ()},
$S:z+82}
C.eEp.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eHK.prototype={
$0(){this.a.ue()},
$S:0}
C.eIA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KP()},
$S:0}
C.eGA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KP()},
$S:0}
C.eIn.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIo.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eIp.prototype={
$1(d){return d.a},
$S:z+22}
C.eIq.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.aw())},
$S:269}
C.eIr.prototype={
$0(){return B.ka(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eDO.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIB.prototype={
$0(){},
$S:0}
C.eFJ.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ye()
w.KP()},
$S:0}
C.eDM.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.ye()},
$S:0}
C.eDN.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.ye()},
$S:0}
C.eG5.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eG6.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ye()
w.KP()
w.z="Home"},
$S:0}
C.eG7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFI.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,A.VY,w,w,!0,w,w,w,new C.eFH(d),w,w)],x.p),w,w,w,D.fYA,w,w,w,w,D.fEV,w)},
$S:18}
C.eFH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFF.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,A.VY,w,w,!0,w,w,w,new C.eFE(d),w,w)],x.p),w,w,w,D.fJ6,w,w,w,w,D.fGL,w)},
$S:18}
C.eFE.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFG.prototype={
$0(){},
$S:0}
C.eEY.prototype={
$1(d){return this.a.b3a(C.bEX(d))},
$S:z+7}
C.eEZ.prototype={
$1(d){return this.a.agt(C.bEX(d))},
$S:z+7}
C.eFP.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.r(w,w,A.f,w,w,new B.p(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fYE,A.ax,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bz,new C.QH(A.wH,D.aB6,"HATI YA KUHOWA","Hati ya mahari",new C.eFK(d),w),A.W,new C.QH(A.hA,D.dhH,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eFL(d),w),A.W,new C.QH(A.hN,D.d26,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eFM(d),w),A.W,new C.QH(A.ii,D.d09,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eFN(d),w)],v)
if(this.a.gYZ())A.d.v(u,B.a([A.W,new C.QH(A.j8,D.cM0,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eFO(d),w)],v))
return B.bm(!0,B.ce(B.x(u,A.al,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yS,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eFK.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eFL.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eFM.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eFN.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eFO.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eFQ.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ye()},
$S:0}
C.eDQ.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eDR.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
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
C.eG0.prototype={
$1(d){return d.b===D.lT},
$S:z+4}
C.eG1.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eFZ(w,this.a,v),null)},
$S:20}
C.eFZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eG_(p,o,a3,n),l=B.Q(a2).ax.a===A.J,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.br:A.cc,h=l?A.a_:A.c,g=B.l(28),f=B.L(l?A.bA:A.bh,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aI(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eFV(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Ds[w]
v.a=null
t=v.a=u.a
a1.push(new C.bk1(t,u.b,p.a===t,i,k,new C.eFW(v,m),q))}a1=B.bW(A.bH,a1,A.bs,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Dl[w]
s.a=null
t=s.a=r.a
u.push(new C.bk0(t,r.b,p.b===t,k,j,new C.eFX(s,m),q))}return B.bm(!0,B.r(q,B.ce(B.x(B.a([d,A.aO,a0,A.W,a1,A.bz,v,A.W,B.bW(A.bH,u,A.bs,q,12,12),A.bz,new B.a5(1/0,48,B.es(D.c3l,D.h03,new C.eFY(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aF,q,q,q,q,new B.b9(B.l(16),A.a1),D.b5K,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.ux,D.bEu,q,q,q),!0,!1,A.ag,!0,!0)},
$S:89}
C.eG_.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eFT(w.a,d,e))
w.b.dc(new C.eFU(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1725}
C.eFT.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eFU.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eFV.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFW.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eFX.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eFY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hy(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eFS(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFS.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eG3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eG4.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.eG2(t.d))
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
s.ye()},
$S:0}
C.eG2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGl.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eGm.prototype={
$1(d){return d.w},
$S:z+83}
C.eGn.prototype={
$2(d,e){return d>e?d:e},
$S:81}
C.eGo.prototype={
$1(d){var w=this,v=null,u=B.Q(d).ax.a===A.J,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.br:A.aS,q=u?A.a_:A.c,p=B.l(28),o=B.L(u?A.bA:A.bh,A.r,1),n=B.aF(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.r(v,B.x(B.a([B.A(B.a([B.r(v,D.bXJ,A.f,v,v,D.b76,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aI(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eGi(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.j,0,v,v),A.aB,new B.dl(1,A.cn,B.hP(v,new C.eGj(m,k,w.c,s,w.d,t,r),k.length,A.fC,v,A.ah,new C.eGk(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.ux,A.a0y,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGi.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGk.prototype={
$2(d,e){return A.af},
$S:36}
C.eGj.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aF:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cB
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.c04,q,q,q,new C.eGg(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bGL,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bt(q,new B.b6(4,B.l(16),A.a1),q,A.f_,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b5p),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGh(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ad,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:687}
C.eGg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.itH(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oc(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hh(A.bC,o+s.length),A.aP))
l.akw(k,m)
l.pK()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGh.prototype={
$1(d){var w=this.a
w.akw(this.b.a,d)
w.pK()},
$S:2}
C.eGp.prototype={
$0(){},
$S:0}
C.eFR.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eE6.prototype={
$0(){},
$S:0}
C.eE7.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hEy(this.b,w,!0)
w=this.a
w.r=null
w.ye()},
$S:0}
C.eE8.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eE9.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.eE5(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.ye()},
$S:0}
C.eE5.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGv.prototype={
$1(d){return B.ph(new C.eGu(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:139}
C.eGu.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amE,B.x(B.a([D.fW3,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.ip(!0,w,e,A.y,D.fgq,new C.eGt(this.a,this.b),20,A.uA,w,A.ah,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:458}
C.eGt.prototype={
$2(d,e){var w=null,v=D.Is[e],u=C.hXU(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.r(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fL,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.r(w,D.f9q,A.f,w,w,new B.p(A.dM.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n0,w,w,w)],m))
return B.aH(!1,A.a3,!0,w,B.aP(!1,t,!0,B.r(w,B.x(B.a([B.A(n,A.l,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a8(A.a7,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGs(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eGs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckS(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGw.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ye()},
$S:0}
C.eCK.prototype={
$0(){var w,v=this.a,u=v.gqU(),t=C.t_(4294967295,null,0,0,null,C.cE(),D.n9,"","","",D.dp),s=this.b
C.cl4(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.E3){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eE4.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hre(q));++v.f},
$S:0}
C.eE2.prototype={
$0(){var w=this.a
A.d.cH(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eGE.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cH(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eDZ.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.d,new C.eDY(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eDY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGD.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eDP.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.aw())},
$S:269}
C.eEq.prototype={
$0(){return B.ka(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eIl.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIm.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avw(w).fW()
v=u.Xx(w)
v.stW(B.hh(A.bC,v.a.a.length))},
$S:7}
C.eHL.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yx(v)
if(u!=null&&u.b===D.cX)w.Xx(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eCL.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bn,!1,v.gqU().e.l(),A.aG,"",4280640491,24,A.bt,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bk,4280172719,2,"Tap to edit text",0,0,"",D.cu,D.cX,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCI.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bn,!1,4279310375,A.aG,"",v.gqU().c.j(0.25).l(),24,A.bt,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqU().c.l(),2,"",0,0,"",D.cu,D.fj,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCy.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.cu,D.lT,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eCv.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.caj],x.p)
for(w=J.aT(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gal9().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bVo,r,r,r,r,new C.eCu(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eCu.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eCw.prototype={
$0(){var w=A.i.D(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.aw(u.aj(),null),s=C.er(A.bn,!1,4279310375,A.aG,u.b,4280640491,24,A.bt,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bk,4280172719,2,t,0,0,"",D.cu,D.a88,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eE0.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eE1.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.gdB().z,new C.eE_(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eE_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDc.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cX)s.Q=t.c.l()
else if(w===D.fj){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDd(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDd.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDh.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDi(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDi.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDf.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cX){s.Q=t.c
return}w=new C.eDg(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDg.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eG(w,new C.eDe()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDe.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eDb.prototype={
$0(){return C.cl4(this.b,this.c,this.a.gqU())},
$S:0}
C.eGf.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eIu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIv.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eIw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIx.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bj(s,new C.eIt(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTa()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.ye()
t.KP()}},
$S:0}
C.eIt.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eI0.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acM(),s=w.b,r=u.acN(A.fp,A.jM,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.T,r,A.bz,B.r(v,B.A(B.a([B.E(u.aXN(w.c,A.an),1),new B.D(A.fK,B.r(v,D.bVt,A.f,v,v,new B.p(A.fp.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aXN(s,A.fp),1)],n),A.l,v,A.e,A.j,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a8(A.aA,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bI,v,v,v),A.bz,u.aXQ(A.fp,d,D.bRB,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.c1o(A.aH,d,A.uP,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXO(d,"Not now"))
return new C.KR(B.x(p,A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eI_.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KR(B.x(B.a([v.acM(),A.T,v.acN(A.aH,D.bRg,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.42),B.hP(w,new C.eHY(v,u,d),u.length,w,w,A.ah,new C.eHZ(),!0),w),A.aB,v.aXO(d,"Cancel")],x.p),A.al,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eHZ.prototype={
$2(d,e){return A.W},
$S:36}
C.eHY.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aH(!1,A.a3,!0,w,B.aP(!1,u,!0,B.r(w,B.A(B.a([B.r(w,D.arJ,A.f,w,w,new B.p(w,w,w,B.l(12),w,D.c7f,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nh,w,w,w),A.cQ,B.d("Updated "+this.a.QG(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eH,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHX(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eHX.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eHU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acM()
t=t.acN(A.av,A.v_,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KR(B.x(B.a([s,A.T,t,A.bz,B.A(B.a([B.E(B.dU(A.abF,new C.eHS(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cq,u,new B.b9(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bJ(D.fHl,u,new C.eHT(d),B.bp(A.fp,u,u,u,A.c,u,A.cq,u,new B.b9(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eHS.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eHT.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eHW.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acM(),s=w.b,r=u.acN(A.aW,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awQ("Names",""+w.c),1),A.ae,B.E(u.awQ("Fields",""+w.d),1),A.ae,B.E(u.awQ("Signatures",""+w.e),1)],q),A.l,v,A.e,A.j,0,v,v),o=B.bp(A.bl,v,v,v,A.c,v,A.yF,v,new B.b9(B.l(14),A.a1),v,v,v)
return new C.KR(B.x(B.a([t,A.T,r,A.aO,p,A.bz,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.o_,v,v,v),v,new C.eHV(d),o),A.W,u.aXP(d,"Stay here",!1)],q),A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eHV.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eEU.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eET.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eHM.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eIk.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0T(A.d.dP(w.d,new C.eIi(v),new C.eIj(v)).hQ(),w.f,null)},
$S:z+85}
C.eIi.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIj.prototype={
$0(){return this.a},
$S:z+86}
C.eCD.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bI,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h1,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXh,w,w,w,w,new C.eCB(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fFj,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYy,w,w,w,w,new C.eCC(d),!1,w,w,w,w,w,D.h1k,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eCB.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eCC.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eCE.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bn,!1,4279310375,A.aG,v,4280640491,24,A.bt,A.a8,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bk,4280172719,2,v,0,0,"",D.cu,D.TN,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCF.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eQ(""+1000*l+"_"+k,D.TN,0.04,0.06,0.92,0.88,v,24,A.a8,A.bt,A.aG,4279310375,A.bn,u,D.bk,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cu,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.m1(""+1000*p+"_"+o,r+n,"",D.r1,4294967295,null,D.dp,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eCJ.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kN(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bn,!1,4279310375,A.aG,t,4280640491,24,A.bt,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.cu,D.lt,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eCA.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5S(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.en(v.db,"marriage_sign_",""),4280640491,24,A.bt,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.cu,D.lt,s,u,t)
A.d.J(p.gdB().z,q)
A.d.br(p.gdB().z,new C.eCz(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.imW(p)}},
$S:0}
C.eCz.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGB.prototype={
$0(){var w=this.a,v=this.b
w.b5S(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eIs.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eEX.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.br(r.z,new C.eEW())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eEW.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDl.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDm.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ue()},
$S:7}
C.eCx.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bt,A.a8,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.cu,D.lT,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEo.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCG.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eCP.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eCQ.prototype={
$0(){var w=this.b.hQ(),v=C.cE(),u=A.i.D(w.c+0.04,0,0.92),t=A.i.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eCR.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCO(v))
if(u>=0&&u<w.length-1){A.d.cH(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eCO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD1.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCN(v))
if(u>0){A.d.cH(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eCN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD4.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eD5.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eD6.prototype={
$0(){return this.a.as=A.e2},
$S:0}
C.eD7.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eD8.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eD9.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eDa.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCS.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.J(v,C.DH(w.gqU().c.j(0.18).l(),0.1,u,D.bk,0,2,1,0,0))
u=w.gdB().z
v=C.cE()
A.d.J(u,C.j6(A.bn,!1,w.gqU().d.l(),A.aG,18,A.bt,A.I,0.07,v,"Document Header",0,D.dp,0.9,0.05,0.02))},
$S:0}
C.eCT.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cE()
A.d.J(u,C.DH(v.gqU().c.j(0.12).l(),0.1,t,D.bk,0,2,1,0,0.9))
t=v.gdB().z
u=C.cE()
w=C.bFF()
A.d.J(t,C.j6(A.K,!1,v.gqU().e.l(),A.aG,12,A.bt,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dp,0.9,0.05,0.92))},
$S:0}
C.eCU.prototype={
$0(){A.d.J(this.a.gdB().z,C.DH(1727914055,0.12,C.cE(),D.bk,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eCV.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DH(w,0.08,C.cE(),D.bk,w,2,0.5,0.2,0.4))},
$S:0}
C.eCW.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.J(v,C.DH(w.gqU().c.j(0.35).l(),0.12,u,D.E4,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j6(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.15,C.cE(),"Important note",0,D.r2,0.5,0.38,0.52))},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DH(4294507260,0.78,C.cE(),D.bk,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j6(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFF()+"\n\nSubject:\n\nBody text\u2026",0,D.dp,0.76,0.12,0.14))},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DH(4294897802,0.28,C.cE(),D.bk,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j6(A.bn,!1,4285611794,A.aG,15,A.bt,A.a8,0.24,C.cE(),"Sticky note",0,D.aL0,0.26,0.64,0.14))},
$S:0}
C.eCZ.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DH(4293060848,0.04,C.cE(),D.bk,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DH(w,0.04,C.cE(),D.bk,w,2,0.55,0.1,0.48))},
$S:0}
C.eD_.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jn,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vj,0.42,0.52,0.18))},
$S:0}
C.eD0.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DH(858088427,0.62,C.cE(),D.bk,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DH(856004201,0.62,C.cE(),D.bk,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,20,A.bt,A.I,0.1,C.cE(),"Option A",0,D.dp,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j6(A.bn,!1,w,A.aG,20,A.bt,A.I,0.1,C.cE(),"Option B",0,D.dp,0.36,0.56,0.2))},
$S:0}
C.eD2.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DH(4294967295,0.36,C.cE(),D.bk,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j6(A.K,!1,w,A.aG,14,A.bt,A.a8,0.12,C.cE(),"[ QR CODE ]",0,D.dp,0.24,0.38,0.4))},
$S:0}
C.eD3.prototype={
$0(){return C.cl4(this.b,D.TO,this.a.gqU())},
$S:0}
C.eEn.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.aa1.q(0,d),t=this.a
return t.bb4(d,v===d,A.b2,this.c,new C.eEm(t,u,d,w),u)},
$S:z+25}
C.eEm.prototype={
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
C.bGq(r,new C.eEl(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEl.prototype={
$0(){return this.a.dc(new C.eEk(this.b,this.c))},
$S:0}
C.eEk.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eCH.prototype={
$0(){var w,v=this.a,u=v.gqU(),t=C.t_(4294967295,null,0,0,null,C.cE(),D.n9,"","","",D.dp),s=this.b
C.cl4(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.E3){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.itK(p,q.d,s,new C.eDo(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ue(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDo.prototype={
$1(d){return this.bo3(d)},
bo3(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDn(t,d))
w=2
return B.b(t.ue(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+88}
C.eDn.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eDq.prototype={
$0(){return this.a.bMR()},
$S:0}
C.eDr.prototype={
$0(){return this.a.aSX("Class Presentation",!0)},
$S:0}
C.eDs.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDt.prototype={
$1(d){return this.a.bNN(d.b,this.b,d.a)},
$S:z+89}
C.eE3.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGe.prototype={
$1(d){return new B.D(new B.S(0,0,0,B.aF(d,A.eS,x.w).w.f.d),new B.dY(new C.eGd(this.a,this.b),null),null)},
$S:59}
C.eGd.prototype={
$2(d,e){return B.ph(new C.eGc(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:602}
C.eGc.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.bA:A.bh,A.r,1),r=B.r(v,v,A.f,v,v,new B.p(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.r(v,B.x(B.a([A.W,r,new B.D(A.am2,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bO(!1,A.AZ,v,v,!0,v,v,v,new C.eGa(w.c),v,v)],q),A.l,v,A.e,A.j,0,v,v),v),B.E(B.cl(B.a([p.aVK(u,!0,!0,new C.eGb(p,w.d))],q),e,v,D.bCa,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.l7,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:122}
C.eGa.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGb.prototype={
$0(){this.b.$1(new C.eG8())
var w=this.a
if(w.c!=null)w.m(new C.eG9())},
$S:0}
C.eG8.prototype={
$0(){},
$S:0}
C.eG9.prototype={
$0(){},
$S:0}
C.eHN.prototype={
$3(d,e,f){return A.bN},
$C:"$3",
$R:3,
$S:86}
C.eHO.prototype={
$4(d,e,f,g){var w=A.cx.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.aAL(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:261}
C.eHP.prototype={
$3(d,e,f){return A.bN},
$C:"$3",
$R:3,
$S:86}
C.eHQ.prototype={
$4(d,e,f,g){var w=A.cx.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.bfg(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:261}
C.eHR.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xh(this.b))},
$S:0}
C.eCM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dE.aA(0,o)
o=B.l(22)
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.qf.j(0.75)],t)
r=B.L(A.b_.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.b_.j(0.45+q),A.r,1)
t=B.r(p,B.X(Y.P8,u?A.ab:A.a_,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.bY(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.uA(A.fk,B.r(p,B.x(B.a([t,A.aB,q,A.am,B.d(y.K,p,p,p,p,p,p,B.m(p,p,u?A.aD:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.j,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a8(A.aA,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.ey,p,p,1/0),14,!1),A.aq)},
$S:302}
C.eDS.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eDT.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDU.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.ka
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2X:A.CG}return w},
$S:689}
C.eDX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j.fy
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dE.aA(0,A.i.F(i+l.b*0.12,1))
i=l.c
v=i?k:new B.p(k,k,k,B.l(20),A.Iy,k,A.n)
u=B.l(20)
t=l.d
s=B.l(20)
r=x.O
r=i?B.a([A.c.j(0.1+w*0.04),A.as.j(0.78)],r):B.a([A.c,A.c],r)
q=!i
p=q?A.c:A.d.gH(l.e).j(0.34+w*0.22)
p=B.L(p,A.r,q?1.2:1.25)
o=B.l(10)
n=l.e
q=B.r(k,B.X(C.kN(t.w)?A.wH:A.qQ,A.c,k,k,k,22),A.f,k,k,new B.p(k,k,k,o,k,new B.a8(A.a7,A.aa,A.x,n,k,k),A.n),k,36,k,k,k,k,k,52)
o=t.b
o=B.d(o.toUpperCase(),k,k,k,k,k,k,B.m(k,k,i?A.c:A.a_,k,k,k,k,k,k,k,k,k,k,k,A.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=t.w
if(m==="marriage_agreement")m="Hati ya Kuhowesha \u2022 Updated "+j.QG(t.f)
else if(m==="hati_kuhowa")m="Hati ya Kuhowa \u2022 Updated "+j.QG(t.f)
else if(m==="hati_kuhoweya")m="Hati ya Kuhoweya \u2022 Updated "+j.QG(t.f)
else if(m==="hati_kiapo_uongozi"){m=t.x
if(A.a.i(m==null?"":m).length===0)m="Civic Registry"
m="Kiapo cha Uongozi \u2022 "+B.w(m)+" \u2022 Updated "+j.QG(t.f)}else m=""+t.r.length+" slides \u2022 Updated "+j.QG(t.f)
n=j.bNL(m,A.d.gH(n),i)
return B.r(k,B.bx(u,new B.a9c(B.aH(!1,A.a3,!0,k,B.aP(!1,k,!0,B.r(k,B.dG(!1,A.O8,k,k,!0,k,k,k,!0,k,k,q,k,k,k,k,k,!1,k,k,k,k,k,n,k,o,k,B.aI(k,k,k,k,B.X(A.oC,i?A.aD:A.bL,k,k,k,k),k,k,k,new C.eDV(j,t,i),k,k,k,k,"Project options",k),k),A.f,k,k,new B.p(k,k,p,s,k,new B.a8(A.aA,A.aE,A.x,r,k,k),A.n),k,k,k,k,k,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.eDW(j,t),k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),k),A.aq),A.f,k,k,v,k,k,k,A.kw,k,k,k,k)},
$S:88}
C.eDW.prototype={
$0(){return this.a.agt(this.b)},
$S:0}
C.eDV.prototype={
$0(){return this.a.Bu(this.b,this.c)},
$S:0}
C.eFn.prototype={
$0(){var w=this.a
w.b9D()
w.m(new C.eFm())},
$S:0}
C.eFm.prototype={
$0(){},
$S:0}
C.eFo.prototype={
$1(d){return this.a.akw(this.b.a,d)},
$S:2}
C.eFp.prototype={
$0(){this.a.dc(new C.eFl(this.b))},
$S:0}
C.eFl.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cB:A.U},
$S:0}
C.eFq.prototype={
$0(){this.a.dc(new C.eFk(this.b))},
$S:0}
C.eFk.prototype={
$0(){var w=this.a
return w.y=w.y===A.cI?A.bt:A.cI},
$S:0}
C.eFr.prototype={
$0(){this.a.dc(new C.eFj(this.b))},
$S:0}
C.eFj.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eFs.prototype={
$0(){this.a.dc(new C.eFi(this.b))},
$S:0}
C.eFi.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eFt.prototype={
$0(){var w=this.a
w.dc(new C.eFh(w,this.b))},
$S:0}
C.eFh.prototype={
$0(){var w=this.b
return w.as=this.a.c8n(w.as)},
$S:0}
C.eFu.prototype={
$0(){return this.a.dc(new C.eFg(this.b))},
$S:0}
C.eFg.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFv.prototype={
$0(){return this.a.dc(new C.eFf(this.b))},
$S:0}
C.eFf.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eF8.prototype={
$0(){return this.a.a3b(this.b.a)},
$S:0}
C.eF9.prototype={
$0(){this.a.a0I()
return null},
$S:0}
C.eFa.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aF(v,A.c1,x.w).w.a.a<900)w.agM()
else w.m(new C.eF7(w))},
$S:0}
C.eF7.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eFb.prototype={
$0(){this.a.dc(new C.eF6(this.b))},
$S:0}
C.eF6.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cB:A.U},
$S:0}
C.eFc.prototype={
$0(){return this.a.dc(new C.eF5(this.b))},
$S:0}
C.eF5.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFd.prototype={
$0(){return this.a.dc(new C.eF4(this.b))},
$S:0}
C.eF4.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eFe.prototype={
$0(){return this.a.aC2(null)},
$S:0}
C.eEg.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eEh.prototype={
$0(){this.a.abj()
return null},
$S:0}
C.eEj.prototype={
$1(d){return this.bo4(d)},
bo4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KG(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.as,null,new C.eEb(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eEc(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEd(r))
s=s.c.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEe(r))
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
return B.b(C.hFP(q,new C.Fo(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eEf(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aid(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eEb.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.et3],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.di,p,p,p)
q=u.e===s?D.bXq:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eEa(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEa.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eEc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEd.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEe.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEf.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEi.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Aq(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Aq(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Aq(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aid(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eyA,q,v,u,B.Aq(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:133}
C.eIy.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFC(w,v)}},
$S:0}
C.eIz.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eFy.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c79:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.cc
if(s)v=A.c
else v=this.b?A.aR:A.bw
return new B.D(A.fC,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b0,new B.p(w,u,u,r,u,q,A.n),A.eJ,u,u,u,u,A.lL,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eFx(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:138}
C.eFx.prototype={
$0(){var w=this.a
return w.m(new C.eFw(w,this.b))},
$S:0}
C.eFw.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eFz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a60:E.aBd
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRl():t.gbNb()
return B.h6(B.az(u,B.r(u,D.ar8,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.H,10)],x.V),new B.a8(A.a7,A.aa,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1729}
C.eFA.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.isY(v,w.a.c)},
$S:0}
C.eGX.prototype={
$0(){return this.b.vR(this.a.a)},
$S:0}
C.eGY.prototype={
$0(){return this.a.vR(D.n9)},
$S:0}
C.eGZ.prototype={
$0(){return this.a.vR(D.Jl)},
$S:0}
C.eH9.prototype={
$0(){return this.a.vR(D.Jm)},
$S:0}
C.eHk.prototype={
$0(){return this.a.vR(D.Jk)},
$S:0}
C.eHv.prototype={
$0(){return this.a.qF("lab_report")},
$S:0}
C.eHC.prototype={
$0(){return this.a.qF("rubric")},
$S:0}
C.eHD.prototype={
$0(){return this.a.qF("minutes")},
$S:0}
C.eHE.prototype={
$0(){return this.a.qF("agenda")},
$S:0}
C.eHF.prototype={
$0(){return this.a.qF("timeline")},
$S:0}
C.eHG.prototype={
$0(){return this.a.qF(this.b.a)},
$S:0}
C.eH_.prototype={
$0(){this.a.WA()
return null},
$S:0}
C.eH0.prototype={
$0(){this.a.Wu()
return null},
$S:0}
C.eH1.prototype={
$0(){return this.a.qF("table")},
$S:0}
C.eH2.prototype={
$0(){return this.a.qF("sticky")},
$S:0}
C.eH3.prototype={
$0(){return this.a.qF("divider")},
$S:0}
C.eH4.prototype={
$0(){return this.a.qF("header_bar")},
$S:0}
C.eH5.prototype={
$0(){return this.a.ps(D.bk)},
$S:0}
C.eH6.prototype={
$0(){return this.a.ps(D.f0)},
$S:0}
C.eH7.prototype={
$0(){return this.a.ps(D.ke)},
$S:0}
C.eH8.prototype={
$0(){return this.a.ps(D.E4)},
$S:0}
C.eHa.prototype={
$0(){return this.a.ps(D.kf)},
$S:0}
C.eHb.prototype={
$0(){return this.a.ps(D.lu)},
$S:0}
C.eHc.prototype={
$0(){return this.a.ps(D.fO)},
$S:0}
C.eHd.prototype={
$0(){this.a.HU()
return null},
$S:0}
C.eHe.prototype={
$0(){this.a.O0()
return null},
$S:0}
C.eHf.prototype={
$0(){return this.a.qF("quote")},
$S:0}
C.eHg.prototype={
$0(){return this.a.a9r()},
$S:0}
C.eHh.prototype={
$0(){this.a.a0O()
return null},
$S:0}
C.eHi.prototype={
$0(){var w=this.a
return w.m(new C.eGN(w))},
$S:0}
C.eGN.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.ot(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eGV(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHl.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aa3.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.r(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a8(A.a7,A.aa,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.aa3.q(0,q))u.push(B.ap(s,B.r(s,D.PS,A.f,s,s,D.Fp,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fC,B.az(s,B.h6(new B.an(A.a0,s,A.ac,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eGU(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+90}
C.eGU.prototype={
$0(){this.a.a9H(this.b)
return null},
$S:0}
C.eHm.prototype={
$0(){this.a.a9G(this.b)
return null},
$S:0}
C.eHn.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hXV(d),p=this.a,o=B.l(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aT
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.t_(4294967295,r,0,0,r,"preview_"+w,D.r1,"","","",D.dp)
C.hCB(s,w)
w=x.p
u=B.a([B.bx(o,B.r(r,B.bx(t,C.hDX(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.r(r,D.arK,A.f,r,r,D.Fp,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iQ,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ac,A.t,u,r),A.cQ,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aD:A.an,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eGT(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+91}
C.eGT.prototype={
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
break}s.dc(new C.eGJ(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGJ.prototype={
$0(){return C.hCB(this.a,this.b.a)},
$S:0}
C.eGW.prototype={
bo5(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.aa1.q(0,d)
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
$2(d,e){return this.bo5(d,e)},
$S:z+92}
C.eHH.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eHJ(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ce(B.A(v,A.l,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+93}
C.eHJ.prototype={
$1(d){var w=this
return w.a.bb4(d,w.b===d,w.c,w.d,new C.eHI(w.e,d),!D.aa1.q(0,d))},
$S:z+25}
C.eHI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHo.prototype={
$1(d){this.b.$2(d,new C.eGS(this.a,d,this.c))
return null},
$S:z+26}
C.eGS.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGq(u,new C.eGI(v,this.c,w),w)},
$S:0}
C.eGI.prototype={
$0(){return this.a.dc(new C.eGG(this.b,this.c))},
$S:0}
C.eGG.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eHp.prototype={
$1(d){this.b.$2(d,new C.eGR(this.a,d))
return null},
$S:z+26}
C.eGR.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h3K(u,new C.eGH(v,w),w)},
$S:0}
C.eGH.prototype={
$0(){var w=this.a
return w.dc(new C.eGF(w,this.b))},
$S:0}
C.eGF.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eHq.prototype={
$0(){var w=this.a
return w.m(new C.eGQ(w))},
$S:0}
C.eGQ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eHr.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFC(w,v)}},
$S:0}
C.eHs.prototype={
$0(){this.a.IG()
return null},
$S:0}
C.eHt.prototype={
$0(){return this.a.a9r()},
$S:0}
C.eHu.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cX)w.dc(new C.eGP(v))},
$S:0}
C.eGP.prototype={
$0(){var w=this.a
w.f=A.i.D(w.f*1.25,0.08,1.8)
w.e=A.i.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eHw.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eHx.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FR(v,!0)
return null},
$S:0}
C.eHy.prototype={
$0(){this.a.dc(new C.eGO(this.b))},
$S:0}
C.eGO.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cB:A.U},
$S:0}
C.eHz.prototype={
$0(){this.a.dc(new C.eGM(this.b))},
$S:0}
C.eGM.prototype={
$0(){var w=this.a
return w.y=w.y===A.cI?A.bt:A.cI},
$S:0}
C.eHA.prototype={
$0(){this.a.dc(new C.eGL(this.b))},
$S:0}
C.eGL.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.ne},
$S:0}
C.eHB.prototype={
$0(){this.a.dc(new C.eGK(this.b))},
$S:0}
C.eGK.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDk.prototype={
$1(d){return this.bo2(d)},
bo2(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.dc(new C.eDj(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:196}
C.eDj.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eI3.prototype={
$0(){var w=this.a
return w.dc(new C.eI2(w,this.b))},
$S:0}
C.eI2.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eI4.prototype={
$0(){var w=this.a
return w.dc(new C.eI1(w,this.b))},
$S:0}
C.eI1.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eEt.prototype={
$0(){return this.a.dc(new C.eEs(this.b))},
$S:0}
C.eEs.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eEu.prototype={
$0(){return this.a.dc(new C.eEr(this.b))},
$S:0}
C.eEr.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eF0.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.atr,new C.eF_(),w),w.k("ak.E"))
return w},
$S:z+95}
C.eF_.prototype={
$1(d){var w=null
return B.Aq(B.d(d.b,w,w,w,w,w,w,A.lX,w,w,w),48,d,x.fO)},
$S:z+96}
C.eIg.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.eIf.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eId(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bl
else v=r.d?A.aT:A.cv
v=B.L(v,A.r,o?2:1)
u=r.d?A.cs:A.c
t=B.bS(0,C.hDX(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.r(q,new B.an(A.a0,q,A.ac,A.t,B.a([t,B.ap(4,B.r(q,B.d(""+(e+1),q,q,q,q,q,q,A.nX,q,q,q),A.f,q,q,new B.p(A.aU,q,q,s,q,q,A.n),q,q,q,q,A.an_,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIe(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eIe.prototype={
$0(){var w=this.a
return w.m(new C.eI9(w,this.b))},
$S:0}
C.eI9.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KP()},
$S:0}
C.eId.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eIa(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eIb(q,s))
q.aUr()}else if(r==="del"){q=t.a
q.m(new C.eIc(q,s))
q.aTx()}else if(r==="up")t.a.b65(s,s-1)
else if(r==="down")t.a.b65(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIa.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZb,w,w,w,w,new C.eI5(d),!1,w,w,w,w,w,w,w,D.fGi,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZ4,w,w,w,w,new C.eI6(d),!1,w,w,w,w,w,w,w,A.xs,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYj,w,w,w,w,new C.eI7(d),!1,w,w,w,w,w,w,w,D.fOK,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_s,w,w,w,w,new C.eI8(d),!1,w,w,w,w,w,w,w,D.fG6,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eI5.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eI6.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eI7.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eI8.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eIb.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIh.prototype={
$0(){return this.a.a9r()},
$S:0}
C.eDL.prototype={
$0(){var w=this.a
w.b9D()
w.aC2(null)},
$S:0}
C.eDK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.l(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a8(A.aA,A.aE,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.l(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a8(A.aA,A.aE,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,new B.bN(new B.p(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bi,A.l1,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eDJ(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aD:A.bL,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bN(new B.p(v,p,p,o,n,w,A.n),A.bi,new B.an(A.a0,p,A.ac,A.f,s,new B.bC("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:456}
C.eDJ.prototype={
$1(d){var w=this
return w.a.bJ8(d,w.b,w.c,w.d)},
$S:z+23}
C.eDy.prototype={
$0(){var w=this
if(w.b){w.a.O8(w.c)
return}if(w.d){w.a.a9p(w.c)
return}if(w.e){w.a.ai3(w.c)
return}if(w.f)w.a.bab(w.c)},
$S:0}
C.eDz.prototype={
$0(){this.a.O8(this.b)
return null},
$S:0}
C.eDA.prototype={
$0(){return this.a.a3b(this.b.a)},
$S:0}
C.eDB.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eDx(u,d,w.c,w.d))
v.Ik()
v.oF()
v.pK()},
$S:19}
C.eDx.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.i.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.i.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eDC.prototype={
$1(d){return this.a.akw(this.b.a,d)},
$S:2}
C.eDE.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hgt(w))u.a.O8(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bab(v)},
$S:0}
C.eDD.prototype={
$0(){return this.a.a3b(this.b.a)},
$S:0}
C.eDF.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eDw(w.b,d,w.c,w.d))
v.Ik()
v.oF()
v.pK()},
$S:19}
C.eDw.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.i.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.i.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cX)v.w=A.i.D(v.w+u*0.15,10,120)},
$S:0}
C.eDG.prototype={
$1(d){var w=this.a
w.m(new C.eDv(this.b,d))
w.Ik()
w.oF()
w.pK()},
$S:213}
C.eDv.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.i.D(w.e*v,0.04,1.8)
w.f=A.i.D(w.f*v,0.04,1.8)
if(w.b===D.cX)w.w=A.i.D(w.w*v,10,120)},
$S:0}
C.eDH.prototype={
$0(){var w=this.a
w.m(new C.eDu(this.b))
w.Ik()
w.oF()
w.pK()},
$S:0}
C.eDu.prototype={
$0(){this.a.r=C.hDq()},
$S:0}
C.eDI.prototype={
$0(){return this.a.a3b(this.b.a)},
$S:0}
C.eFC.prototype={
$0(){var w=this.a
return w.m(new C.eFB(w))},
$S:0}
C.eFB.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eFD.prototype={
$1(d){return this.a.cIn(this.b.a,d)},
$S:2}
C.eEH.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:168}
C.eEI.prototype={
$1(d){return this.a.$1(new C.eEG(this.b,d))},
$S:6}
C.eEG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEJ.prototype={
$1(d){return this.a.$1(new C.eEF(this.b,d))},
$S:6}
C.eEF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEK.prototype={
$1(d){return this.a.$1(new C.eEE(this.b,d))},
$S:6}
C.eEE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eEL.prototype={
$1(d){return this.a.$1(new C.eED(this.b,d))},
$S:6}
C.eED.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eEM.prototype={
$1(d){return this.a.$1(new C.eEC(this.b,d))},
$S:6}
C.eEC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEN.prototype={
$1(d){return this.b.$1(new C.eEB(this.a,this.c))},
$S:9}
C.eEB.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eEO.prototype={
$1(d){return this.b.$1(new C.eEA(this.a,this.c))},
$S:9}
C.eEA.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eEP.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bl:A.d1
return B.az(w,B.r(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEz(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:452}
C.eEz.prototype={
$0(){return this.a.$1(new C.eEw(this.b,this.c))},
$S:0}
C.eEw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eEQ.prototype={
$1(d){return this.a.$1(new C.eEy(this.b,d))},
$S:1730}
C.eEy.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eER.prototype={
$1(d){var w=null
return B.az(w,B.r(w,w,A.f,w,w,new B.p(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEx(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:452}
C.eEx.prototype={
$0(){return this.a.$1(new C.eEv(this.b,this.c))},
$S:0}
C.eEv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eES.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pY()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eA()}v.a.auu()},
$S:0}
C.eEV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dE.aA(0,k)
k=B.l(16)
v=B.l(16)
u=B.Q(d).ax.a===A.dk?A.b4:A.aA
t=B.Q(d).ax.a===A.dk?A.b8:A.aE
s=m.c
r=x.O
if(B.Q(d).ax.a===A.dk){q=B.ar(s,A.c,0.22)
q.toString
r=B.a([q,s],r)}else{q=B.ar(s,A.b_,0.35+w*0.15)
q.toString
r=B.a([s,q],r)}q=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
p=B.a([B.X(m.d,A.c,l,l,l,26)],x.p)
o=B.l(6)
n=B.L(s,A.r,1.2)
p.push(B.ap(2,B.r(l,B.X(A.v_,s,l,l,l,10),A.f,l,l,new B.p(A.c,l,n,o,l,l,A.n),l,l,l,l,A.nI,l,l,l),l,l,l,2,l,l))
return B.aH(!1,A.a3,!0,l,B.aP(!1,k,!0,B.ez(new B.a5(48,48,new B.an(A.A,l,A.ac,A.t,p,l),l),l,new B.p(l,l,q,v,l,new B.a8(u,t,A.x,r,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.aj)},
$S:145}
C.eCt.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dE.aA(0,o)
o=B.l(22)
v=B.l(22)
u=q.c
t=B.ar(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aH(!1,A.a3,!0,p,B.aP(!1,o,!0,B.ez(B.x(B.a([B.e1(A.A,B.r(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.jd,A.K,p,p)],x.p),A.l,p,A.ba,A.j,0,A.p),p,new B.p(p,p,t,v,p,new B.a8(A.aA,A.aE,A.x,u,p,p),A.n),p,A.Cq,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:145}
C.eGz.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.asB,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bO(!1,A.dr,w,w,!0,w,w,w,new C.eGx(d),w,w),B.bJ(A.re,w,new C.eGy(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eGx.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGy.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.dau.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dE.aA(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.e0.aA(0,A.i.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.dK.aA(0,h)
v=B.l(22)
t=B.ar(A.aM,A.d.gH(C.kN(i.a.c.w)?D.vc:L.nN),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kN(i.a.c.w)?D.vc:L.nN).j(0.18+w*0.12),A.H,32+w*10),D.aeI],s)
q=B.l(22)
p=x.O
o=B.ap(j,B.r(j,j,A.f,j,j,new B.p(j,j,j,j,j,new B.bY(A.b4,0.9,A.x,j,0,B.a([A.d.gH(C.kN(i.a.c.w)?D.vc:L.nN).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.kN(i.a.c.w)?D.vc:L.nN).j(0.28+w*0.14)
p=B.r(j,j,A.f,j,j,new B.p(j,j,j,j,j,new B.bY(A.A,0.5,A.x,j,0,B.a([m,A.d.gam(C.kN(i.a.c.w)?D.vc:L.nN).j(0.08),A.L],p),j,j),A.a6),j,n,j,j,j,j,j,n)
n=B.l(14)
m=i.a.c.w
l=C.kN(m)?D.vc:L.nN
s=B.a([new B.ac(0,A.G,A.d.gH(C.kN(m)?D.vc:L.nN).j(0.45+w*0.2),A.cC,18)],s)
m=x.p
l=B.a([p,B.e1(A.A,B.r(j,B.X(C.kN(i.a.c.w)?A.wH:A.qQ,A.c,j,j,j,22),A.f,j,j,new B.p(j,j,j,n,s,new B.a8(A.aA,A.aE,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.A,j,A.ac,A.t,l,j),A.W,B.d("PRESENTATION",j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kN(i.a.c.w)?D.vc:L.nN).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.I,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fD,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fxT,A.K,j,j),A.ax,B.d(i.gcDb(),j,j,j,j,j,j,D.fCT,A.K,j,j),A.aB],m)
p=i.a.c
if(p.z){p=p.gTa()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kN(i.a.c.w)?D.vc:L.nN).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.af],m))}s.push(new C.KL(A.zd,"Download PDF","pdf",A.d5,i.JD(0),!1,j))
p=i.a.c
if(!p.z||p.gTa()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.v(s,B.a([A.am,new C.KL(A.jM,"Transfer to "+C.hDs(p==null?"":p),"transfer_hati",A.aW,i.JD(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JD(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.v(s,B.a([A.am,new C.KL(D.bQE,"Rename presentation","rename",A.ch,n,!1,j),A.am,new C.KL(A.aoU,"Duplicate","duplicate",A.b7,i.JD(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.v(s,B.a([A.T,new C.KL(A.ej,p,"delete",A.ay,i.JD(n),!0,j)],m))}s.push(A.ax)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JD(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JD(n)
s.push(B.dN(B.d3(B.bO(!1,E.aWP,j,j,!0,j,j,j,new C.dat(d),j,B.fv(j,j,j,j,j,j,j,j,j,j,j,A.bL,j,j,j,A.az,j,D.bFq,j,j,j,j,j,A.kB,j,j)),n),new B.o(0,(1-p)*8)))
return B.e1(A.A,B.d3(B.aH(!1,A.a3,!0,j,B.r(j,B.bx(q,new B.an(A.a0,j,A.ac,A.t,B.a([o,new B.D(D.bEz,B.x(s,A.l,j,A.e,A.P,0,A.p),j)],m),j),A.aq),A.f,j,A.XA,new B.p(A.as,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj),h),0.88+u*0.12,j,j)},
$S:45}
C.dat.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.daS.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.daT.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dar.prototype={
$1(d){var w=this.a
return w.m(new C.dan(w))},
$S:22}
C.dan.prototype={
$0(){return this.a.d=!0},
$S:0}
C.das.prototype={
$1(d){var w=this.a
return w.m(new C.dam(w))},
$S:65}
C.dam.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daq.prototype={
$0(){var w=this.a
return w.m(new C.dao(w))},
$S:0}
C.dao.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dap.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eJe.prototype={
$0(){return $.bn_=!$.bn_},
$S:0}
C.eJ4.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXG())u.azD()},
$S:0}
C.eJd.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJ5.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJ6.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azD()},
$S:0}
C.eJ0.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eJ1.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJ2.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJ3.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJb.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b1,A.t,w,null)},
$S:1731}
C.eJc.prototype={
$2(d,e){var w
if(e.gc4(e)===A.is)return new B.d1(e,!1,d,null)
w=this.a
return w.cB5(w.e,d,e)},
$S:459}
C.eJ7.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJ8.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJ9.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJa.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fz(A.aa,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJf.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZR().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZR().x
t===$&&B.c()
return new C.b3s(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JJ(v.c,t,!0,new B.bC("cine"+u,x.W))},
$S:670}
C.eJh.prototype={
$1(d){var w=this.a
if(d.b.a>B.aF(this.b,A.c1,x.w).w.a.a*0.55)w.azD()
else w.cpp()},
$S:65}
C.eJg.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fUK.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:460}
C.fUT.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bO(!1,A.dr,w,w,!0,w,w,w,new C.fUQ(d),w,w),B.bO(!1,D.fWp,w,w,!0,w,w,w,new C.fUR(d,this.b,v),w,w),B.bJ(A.aX7,w,new C.fUS(d,v,this.c),w)],x.p),w,w,P.uk,new B.a5(320,w,t,w),w,w,w,w,D.fXY,w)},
$S:18}
C.fUQ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fUR.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hh7(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUS.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aS8(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRA(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUJ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cl7.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:544}
C.fUP.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fpR.prototype={
$1(d){return C.hh5(C.Xh(B.a2(d,x.N,x.z)),this.a)},
$S:z+97}
C.h3_.prototype={
$3(d,e,f){return A.bN},
$C:"$3",
$R:3,
$S:86}
C.h30.prototype={
$4(d,e,f,g){var w=A.cx.aA(0,e.gp(0))
return B.d3(B.e1(A.A,D.hyB,0.94+w*0.06,null,null),w)},
$S:261}
C.h31.prototype={
$1(d){var w=this
return new C.Xj(w.a,w.b,w.c,w.d,null)},
$S:z+98}
C.eIL.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIH.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eIK.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xk(u,this.b,w.gaQK(),v,null)},
$S:z+100}
C.eII.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIM.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIN.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIQ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eIR.prototype={
$0(){var w=this.a
return w.m(new C.eIP(w))},
$S:0}
C.eIP.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eIS.prototype={
$0(){var w=this.a
return w.m(new C.eIO(w))},
$S:0}
C.eIO.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eIT.prototype={
$1(d){return this.a.bNM(d,this.b)},
$S:z+101}
C.eIG.prototype={
$0(){var w=this.a
return w.m(new C.eIF(w,this.b))},
$S:0}
C.eIF.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eIU.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eIV.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eIW.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIX.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eIY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fF(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.fju)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCm())},
$S:0}
C.eCm.prototype={
$0(){},
$S:0}
C.eCo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eCj.prototype={
$1(d){return this.a.m(new C.eCi())},
$S:2}
C.eCi.prototype={
$0(){},
$S:0}
C.eCk.prototype={
$1(d){return this.a.b1W()},
$S:2}
C.eCl.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJ_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qu(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eIZ(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIZ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fOY.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.en(new B.k4(this.c,new C.fOX(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:242}
C.fOX.prototype={
$3(d,e,f){return new C.JJ(e,!1,!1,new B.bC(e.a,x.W))},
$S:z+103}
C.fOZ.prototype={
$1(d){var w=null
return B.oO(!1,B.at(new C.bxM(this.a,this.b,w),w,w,w),w,x.z)},
$S:326}
C.fP2.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmV(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.mc,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmV(),$async$$0)
case 5:s=$.aW.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qk))throw B.W("Could not draw the slide.")
u=r.mg(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1734}
C.fP3.prototype={
boA(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.hl),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hM([J.eT(A.dQ.gaU(r))],"image/png"))
t.toString
s=Ao.h7u(t)
w=4
return B.b(new B.qs(s,"load",!1,x.ev).gH(0).dh(0,A.k0),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boA(d)},
$S:1735}
C.fP_.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:148}
C.fP0.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:148}
C.fP1.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fjM.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fud,A.K,w,w)},
$S:1736}
C.fjN.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.bx(v,B.kq(A.br,w,A.dN,8,w,e===0?w:e,w),A.aq)},
$S:575}
C.eqD.prototype={
$1(d){this.a.a07()
return null},
$S:11}
C.eqB.prototype={
$0(){return this.a.e=D.bAo},
$S:0}
C.eqC.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bF
return this.b.e=w},
$S:0}
C.cpn.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+104}
C.cpo.prototype={
$2(d,e){return(d|e)>>>0},
$S:62};(function aliases(){var w=C.aNZ.prototype
w.bzN=w.t
w=C.aNt.prototype
w.bzg=w.t
w=C.aNc.prototype
w.byZ=w.t
w=C.aNs.prototype
w.bzf=w.t
w=C.aNX.prototype
w.bzL=w.t
w=C.aPg.prototype
w.bBf=w.t
w=C.aM7.prototype
w.bxR=w.t
w=C.aO9.prototype
w.bzY=w.t
w=C.aOa.prototype
w.bzZ=w.t
w=C.b59.prototype
w.bul=w.aF9})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iqa","ap4",105)
v(C.aL3.prototype,"gc8M","ZY",0)
var r
u(r=C.azz.prototype,"gcCx","cCy",40)
v(r,"gc9B","aeF",0)
v(r=C.azv.prototype,"gb0i","EE",3)
v(r,"gc9y","c9z",3)
v(r,"gayI","yt",0)
v(r,"gaAM","JV",0)
t(C,"ir7","hVF",106)
v(C.aFG.prototype,"gccD","ccE",3)
s(C,"iri",0,null,["$4$paper$photo$request$template"],["fW9"],107,0)
s(C,"irh",0,null,["$5$doc$history$instruction$photo$template"],["bEV"],108,0)
v(r=C.aFX.prototype,"gcdm","JA",0)
v(r,"gbNe","XJ",0)
v(r,"gcdp","afx",0)
v(r,"gcdo","a_U",0)
v(r,"gb1B","EV",0)
v(C.aG_.prototype,"gcdu","a_W",0)
v(r=C.aHo.prototype,"gb1O","QC",0)
v(r,"gcuh","b6a",3)
v(r,"gcDV","aDj",94)
v(r,"gbR9","abo",0)
v(r,"gcdV","B7",0)
v(r=C.aJk.prototype,"gco8","a1h",0)
v(r,"gcog","a1k",0)
v(r,"gbG1","a9N",0)
v(r,"gcdZ","afJ",0)
v(C.aJj.prototype,"gce_","afK",0)
v(C.aDm.prototype,"gbF0","a9A",0)
v(C.aBJ.prototype,"gce0","a06",0)
w(C,"irv","ioS",12)
w(C,"irt","ilH",12)
w(C,"iru","inQ",12)
v(r=C.aGg.prototype,"gcHe","cHf",3)
v(r,"gcsx","csy",3)
u(r,"gF0","agt",7)
v(r,"gbKR","atD",3)
u(r,"gF1","b3a",7)
v(r,"gcgg","aga",0)
v(r,"gcf7","ag9",0)
v(r,"gc46","Zk",0)
v(r,"gcis","agu",0)
v(r,"gbNb","aaW",0)
v(r,"gcjm","a0I",0)
v(r,"gcjn","agL",0)
v(r,"gcjU","agS",0)
v(r,"gciF","agx",0)
v(r,"gbRl","abs",0)
v(r,"gaUq","aUr",3)
v(r,"gaTw","aTx",3)
v(r,"gaP0","aP1",3)
v(r,"gaTv","auu",3)
u(r,"gbFh","bFi",81)
v(r,"gaCQ","b9m",3)
v(r,"gcf9","cfa",3)
v(r,"gc1I","c1J",3)
v(r,"gbPE","bPF",3)
v(r=C.aGj.prototype,"gcG0","cG1",3)
v(r,"gcFE","cFF",3)
t(C,"irw","ip8",2)
v(r=C.aGh.prototype,"gce6","JF",0)
v(r,"gcwj","S7",0)
v(r,"gce3","JE",0)
v(r,"gcIy","a3R",0)
v(r,"gck5","agZ",0)
v(C.aGf.prototype,"gce7","b1W",3)
v(r=C.aGi.prototype,"gbSb","abC",0)
u(r,"gce4","ce5",102)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oj,C.T0,C.bKy,C.bIQ,C.cGD,C.cGB,C.bSO,C.baS,C.cGC,C.bHq,C.cph,C.cpf,C.cpg,C.cpe,C.auy,C.cpd,C.bTQ,C.oN,C.aGS,C.jE,C.o7,C.a9b,C.Ae,C.lx,C.oX,C.mu,C.Af,C.oa,C.a9j,C.asT,C.b3t,C.eq2,C.lu,C.Fx,C.ew,C.jb,C.Fo,C.yg,C.eQ,C.m1,C.hQ,C.k0,C.a9k,C.agw,C.b3u,C.b59,C.a4h])
u(B.jy,[C.cOE,C.c3N,C.fK8,C.cQa,C.cPx,C.fPG,C.cfC,C.e8j,C.e8i,C.eqG,C.eqF,C.fR4,C.fr2,C.fr3,C.cjm,C.cjn,C.cjo,C.euk,C.f2y,C.f1W,C.f1V,C.f2Z,C.f2w,C.f2p,C.f2I,C.f3o,C.fzb,C.f9I,C.f9H,C.faa,C.eq5,C.fUG,C.e3x,C.h0y,C.fRr,C.cl_,C.ckY,C.cl2,C.fRZ,C.fS_,C.fS0,C.fS1,C.ckK,C.ckL,C.dQt,C.ckH,C.fRY,C.fh8,C.e1f,C.ckA,C.epM,C.fPv,C.eFZ,C.eGn,C.eGk,C.eGj,C.eGu,C.eGt,C.eHZ,C.eHY,C.eGd,C.eGc,C.eCM,C.eDX,C.eGW,C.eIg,C.eIf,C.eDK,C.eEV,C.eCt,C.dau,C.eJb,C.eJc,C.eJ7,C.eJ8,C.eJ9,C.eJa,C.eJf,C.cl7,C.eIL,C.eIW,C.cpo])
u(B.ht,[C.cOF,C.cOG,C.bTR,C.fGY,C.c3M,C.c3P,C.fXV,C.fii,C.fi9,C.fip,C.fpS,C.fpT,C.fK9,C.fK7,C.fXn,C.fGC,C.fYg,C.cQ0,C.cQ5,C.cQ7,C.cQ3,C.cQ8,C.cQ1,C.cQ9,C.cPX,C.cPU,C.cPT,C.cQ_,C.cPs,C.cPq,C.fOI,C.fOJ,C.fuc,C.fPH,C.fPN,C.fte,C.cfB,C.cfE,C.fOG,C.fOH,C.fJw,C.fJx,C.fPM,C.fPI,C.fPK,C.fPL,C.fPJ,C.h0Q,C.fJA,C.fJB,C.fJE,C.fJF,C.fJI,C.fJJ,C.h2i,C.frv,C.h2t,C.etD,C.etE,C.etF,C.etl,C.etx,C.ety,C.etA,C.cjl,C.cjj,C.cjk,C.fPm,C.fPo,C.fPn,C.fr4,C.fr5,C.h2w,C.eup,C.euq,C.euh,C.eui,C.eul,C.eum,C.h2M,C.f3p,C.f2P,C.f2z,C.f2M,C.f1R,C.f1S,C.f1T,C.f1X,C.f1Y,C.f3e,C.f3l,C.f3n,C.f2Y,C.f3_,C.f33,C.f34,C.f35,C.f39,C.f30,C.f31,C.f28,C.f29,C.f2a,C.f2b,C.f2c,C.f2d,C.f2e,C.f2f,C.f2g,C.f1u,C.f1v,C.f1w,C.f1x,C.f1z,C.f1A,C.f22,C.f23,C.f24,C.f25,C.f26,C.f1E,C.f1F,C.f1G,C.f1H,C.f2o,C.f2H,C.fML,C.fMK,C.ckR,C.fza,C.fUC,C.fUv,C.fUy,C.fSt,C.fSu,C.fSv,C.fMS,C.fMR,C.fMQ,C.fMO,C.fqZ,C.fr_,C.fr0,C.h2Y,C.f9K,C.f9L,C.f9E,C.f9y,C.fa3,C.fa4,C.fa6,C.fa7,C.fa2,C.h2X,C.f9p,C.fyr,C.eq4,C.fUE,C.fUF,C.fUH,C.fUA,C.fUB,C.h2a,C.dsW,C.dt1,C.eq3,C.fn6,C.fn8,C.fn7,C.fn5,C.fNW,C.fNY,C.fpl,C.fU6,C.fU7,C.fU8,C.fUj,C.fUo,C.fUp,C.fUq,C.fUr,C.fUs,C.fUt,C.fUu,C.fU9,C.fUa,C.fUb,C.fUc,C.fUd,C.fUe,C.fUf,C.fUg,C.fUh,C.fUi,C.fUk,C.fUl,C.fUm,C.fUn,C.fLM,C.fxK,C.fxJ,C.fUN,C.e3y,C.e3w,C.f8y,C.cfc,C.cfe,C.h0A,C.dif,C.dih,C.h0z,C.h0x,C.h2W,C.fRn,C.dhQ,C.fJM,C.fJN,C.ckP,C.ckQ,C.ckO,C.ckE,C.ckF,C.ckB,C.ckC,C.ckD,C.cl5,C.cl0,C.ckW,C.ckX,C.ckZ,C.cl1,C.cl3,C.fS2,C.ckJ,C.ckM,C.ckN,C.ckT,C.ckU,C.fUU,C.fU0,C.ckI,C.ckG,C.fRX,C.fAu,C.ckz,C.f62,C.fDB,C.eIC,C.eF1,C.eF2,C.eGC,C.eGq,C.eGr,C.eEp,C.eIn,C.eIo,C.eIp,C.eDO,C.eG5,C.eG7,C.eFI,C.eFF,C.eEY,C.eEZ,C.eFP,C.eDQ,C.eG0,C.eG1,C.eG_,C.eG3,C.eG2,C.eGl,C.eGm,C.eGo,C.eGh,C.eE8,C.eE5,C.eGv,C.eDY,C.eIm,C.eCv,C.eE0,C.eE_,C.eDd,C.eDi,C.eDg,C.eDe,C.eIu,C.eIv,C.eIw,C.eIt,C.eI0,C.eI_,C.eHU,C.eHW,C.eHM,C.eIk,C.eIi,C.eCD,C.eCz,C.eEW,C.eDm,C.eCO,C.eCN,C.eD9,C.eDa,C.eEn,C.eDo,C.eDs,C.eDt,C.eGe,C.eHN,C.eHO,C.eHP,C.eHQ,C.eDS,C.eDT,C.eDU,C.eFo,C.eEj,C.eEb,C.eEi,C.eFy,C.eFz,C.eHl,C.eHn,C.eHH,C.eHJ,C.eHo,C.eHp,C.eDk,C.eF0,C.eF_,C.eIa,C.eDJ,C.eDB,C.eDC,C.eDF,C.eDG,C.eFD,C.eEH,C.eEI,C.eEJ,C.eEK,C.eEL,C.eEM,C.eEN,C.eEO,C.eEP,C.eEQ,C.eER,C.eGz,C.dar,C.das,C.eJh,C.fUK,C.fUT,C.fUJ,C.fUP,C.fpR,C.h3_,C.h30,C.h31,C.eIK,C.eIT,C.eCo,C.eCj,C.eCk,C.fOY,C.fOX,C.fOZ,C.fP3,C.fP_,C.fP0,C.fjM,C.fjN,C.eqD,C.cpn])
u(B.iJ,[C.cOH,C.fie,C.fij,C.fik,C.fif,C.fig,C.fih,C.fi7,C.fi8,C.fia,C.fib,C.fio,C.fin,C.fid,C.fic,C.fil,C.fim,C.fir,C.fis,C.fiq,C.cQ2,C.cQ6,C.cQ4,C.cPV,C.cPW,C.cPY,C.cPR,C.cPS,C.cPZ,C.cPQ,C.cPP,C.cPO,C.cPh,C.cPg,C.cPj,C.cPr,C.cPk,C.cPi,C.cPm,C.cPn,C.cPo,C.cPl,C.cPp,C.cPt,C.cPu,C.cPv,C.cPw,C.fJu,C.fJv,C.fJs,C.fJt,C.elU,C.elS,C.elT,C.elV,C.elW,C.e8h,C.fJy,C.fJz,C.fJC,C.fJD,C.fJG,C.fJH,C.eqE,C.fRu,C.fRt,C.etC,C.etB,C.etf,C.etb,C.etm,C.etn,C.eto,C.eth,C.eti,C.etj,C.etk,C.etg,C.etd,C.ete,C.etu,C.etv,C.ett,C.etw,C.ets,C.etr,C.etq,C.etz,C.etp,C.etc,C.euo,C.euc,C.eud,C.euj,C.eue,C.eug,C.euf,C.eun,C.f2h,C.f2F,C.f20,C.f21,C.f1Z,C.f2_,C.f2L,C.f2K,C.f2J,C.f2O,C.f2N,C.f1Q,C.f1U,C.f1P,C.f1O,C.f1L,C.f1N,C.f1M,C.f3m,C.f3f,C.f3d,C.f3g,C.f3c,C.f3h,C.f3b,C.f3i,C.f3j,C.f3k,C.f3a,C.f2X,C.f2S,C.f32,C.f2W,C.f36,C.f2V,C.f37,C.f2U,C.f38,C.f2T,C.f2C,C.f2B,C.f2D,C.f2A,C.f2E,C.f2u,C.f2t,C.f2v,C.f2s,C.f2r,C.f2q,C.f1y,C.f1t,C.f1I,C.f1D,C.f1J,C.f1C,C.f1K,C.f1B,C.f2x,C.f2l,C.f2k,C.f2m,C.f2j,C.f2n,C.f2i,C.f2G,C.f2R,C.f2Q,C.f27,C.fUx,C.fUz,C.fUD,C.fMP,C.fPf,C.fPd,C.fPe,C.f9M,C.f9N,C.f9J,C.f9D,C.f9C,C.f9F,C.f9G,C.f9s,C.f9t,C.f9v,C.f9w,C.f9x,C.f9u,C.f9z,C.fa_,C.fa0,C.f9Z,C.fa1,C.f9Y,C.f9X,C.f9W,C.fa5,C.f9V,C.f9U,C.f9T,C.fa8,C.f9S,C.fa9,C.f9R,C.f9Q,C.f9A,C.f9B,C.f9P,C.f9O,C.f9l,C.f9m,C.f9n,C.f9o,C.f9k,C.f9q,C.f9r,C.dsV,C.dsX,C.dt_,C.dt0,C.dsZ,C.dsY,C.fNX,C.fLN,C.cfd,C.cff,C.di8,C.did,C.die,C.dic,C.dib,C.dig,C.dia,C.di9,C.dii,C.h0w,C.doX,C.doY,C.doZ,C.fJK,C.fJL,C.cl6,C.eCp,C.eCq,C.eCr,C.eCs,C.fAs,C.fAt,C.e1h,C.e1g,C.df2,C.df1,C.eIE,C.eID,C.eF3,C.eHK,C.eIA,C.eGA,C.eIq,C.eIr,C.eIB,C.eFJ,C.eDM,C.eDN,C.eG6,C.eFH,C.eFE,C.eFG,C.eFK,C.eFL,C.eFM,C.eFN,C.eFO,C.eFQ,C.eDR,C.eFT,C.eFU,C.eFV,C.eFW,C.eFX,C.eFY,C.eFS,C.eG4,C.eGi,C.eGg,C.eGp,C.eFR,C.eE6,C.eE7,C.eE9,C.eGs,C.eGw,C.eCK,C.eE4,C.eE2,C.eGE,C.eDZ,C.eGD,C.eDP,C.eEq,C.eIl,C.eHL,C.eCL,C.eCI,C.eCy,C.eCu,C.eCw,C.eE1,C.eDc,C.eDh,C.eDf,C.eDb,C.eGf,C.eIx,C.eHX,C.eHS,C.eHT,C.eHV,C.eEU,C.eET,C.eIj,C.eCB,C.eCC,C.eCE,C.eCF,C.eCJ,C.eCA,C.eGB,C.eIs,C.eEX,C.eDl,C.eCx,C.eEo,C.eCG,C.eCP,C.eCQ,C.eCR,C.eD1,C.eD4,C.eD5,C.eD6,C.eD7,C.eD8,C.eCS,C.eCT,C.eCU,C.eCV,C.eCW,C.eCX,C.eCY,C.eCZ,C.eD_,C.eD0,C.eD2,C.eD3,C.eEm,C.eEl,C.eEk,C.eCH,C.eDp,C.eDn,C.eDq,C.eDr,C.eE3,C.eGa,C.eGb,C.eG8,C.eG9,C.eHR,C.eDW,C.eDV,C.eFn,C.eFm,C.eFp,C.eFl,C.eFq,C.eFk,C.eFr,C.eFj,C.eFs,C.eFi,C.eFt,C.eFh,C.eFu,C.eFg,C.eFv,C.eFf,C.eF8,C.eF9,C.eFa,C.eF7,C.eFb,C.eF6,C.eFc,C.eF5,C.eFd,C.eF4,C.eFe,C.eEg,C.eEh,C.eEa,C.eEc,C.eEd,C.eEe,C.eEf,C.eIy,C.eIz,C.eFx,C.eFw,C.eFA,C.eGX,C.eGY,C.eGZ,C.eH9,C.eHk,C.eHv,C.eHC,C.eHD,C.eHE,C.eHF,C.eHG,C.eH_,C.eH0,C.eH1,C.eH2,C.eH3,C.eH4,C.eH5,C.eH6,C.eH7,C.eH8,C.eHa,C.eHb,C.eHc,C.eHd,C.eHe,C.eHf,C.eHg,C.eHh,C.eHi,C.eGN,C.eHj,C.eGV,C.eGU,C.eHm,C.eGT,C.eGJ,C.eHI,C.eGS,C.eGI,C.eGG,C.eGR,C.eGH,C.eGF,C.eHq,C.eGQ,C.eHr,C.eHs,C.eHt,C.eHu,C.eGP,C.eHw,C.eHx,C.eHy,C.eGO,C.eHz,C.eGM,C.eHA,C.eGL,C.eHB,C.eGK,C.eDj,C.eI3,C.eI2,C.eI4,C.eI1,C.eEt,C.eEs,C.eEu,C.eEr,C.eIe,C.eI9,C.eId,C.eI5,C.eI6,C.eI7,C.eI8,C.eIb,C.eIc,C.eIh,C.eDL,C.eDy,C.eDz,C.eDA,C.eDx,C.eDE,C.eDD,C.eDw,C.eDv,C.eDH,C.eDu,C.eDI,C.eFC,C.eFB,C.eEG,C.eEF,C.eEE,C.eED,C.eEC,C.eEB,C.eEA,C.eEz,C.eEw,C.eEy,C.eEx,C.eEv,C.eES,C.eGx,C.eGy,C.dat,C.daS,C.daT,C.dan,C.dam,C.daq,C.dao,C.dap,C.eJe,C.eJ4,C.eJd,C.eJ5,C.eJ6,C.eJ0,C.eJ1,C.eJ2,C.eJ3,C.eJg,C.fUQ,C.fUR,C.fUS,C.eIH,C.eII,C.eIJ,C.eIM,C.eIN,C.eIQ,C.eIR,C.eIP,C.eIS,C.eIO,C.eIG,C.eIF,C.eIU,C.eIV,C.eIX,C.eIY,C.eCn,C.eCm,C.eCi,C.eCl,C.eJ_,C.eIZ,C.fP2,C.fP1,C.eqB,C.eqC])
t(C.aTu,B.M)
u(B.lD,[C.a50,C.az_,C.axE,C.ye,C.yh,C.lb,C.tP,C.Cb,C.rZ,C.wA,C.atq,C.JK,C.asS,C.vj,C.mV,C.hG,C.a9X])
u(C.bSO,[C.cGE,C.bSP])
u(C.cph,[C.cpl,C.aux])
t(C.cpk,C.cpf)
t(C.cpj,C.cpe)
t(C.cpm,C.cpj)
t(C.cpi,C.cpg)
t(C.cpc,C.cpd)
t(C.czK,B.ax6)
t(C.a9J,B.y0)
u(B.af,[C.a2g,C.ZZ,C.ZX,C.arZ,C.X7,C.X8,C.a1f,C.a1M,C.a1L,C.aFR,C.a09,C.Or,C.a_H,C.a01,C.apW,C.aKJ,C.Wo,C.aBo,C.a91,C.OX,C.aAL,C.KL,C.a0T,C.Xj,C.Xk,C.aGe,C.asX,C.a92])
u(B.ah,[C.aL3,C.azz,C.azv,C.aFG,C.aFX,C.aG_,C.aHo,C.aJk,C.aJj,C.aNZ,C.aDm,C.aNt,C.aBJ,C.bis,C.aNc,C.aPg,C.aNs,C.bgf,C.aNX,C.aO9,C.aM7,C.bf0,C.aOa,C.aGh,C.bmZ,C.aGf,C.aGi,C.bmI])
u(B.ax,[C.azx,C.aeD,C.ae1,C.blH,C.aeG,C.agm,C.b34,C.bvl,C.b3p,C.bof,C.btS,C.b1j,C.b3s,C.aeJ,C.af_,C.b3q,C.JJ,C.b1m,C.bfg,C.QH,C.KR,C.bk1,C.bk0,C.bxM])
u(B.Ia,[C.beI,C.bwK,C.aLq,C.bhs,C.bug])
u(B.mn,[C.beH,C.bba,C.bud,C.bef,C.bhR,C.bk8,C.bgW,C.bhN,C.bhu,C.bqC,C.bcj,C.bbX,C.bxI,C.buG,C.btO,C.bgP,C.b3n,C.bsI,C.btL])
t(C.bmF,C.aNZ)
t(C.bm0,C.aNt)
t(C.blJ,C.aNc)
t(C.bxc,C.aPg)
t(C.blX,C.aNs)
t(C.bmD,C.aNX)
t(C.bA4,C.aO9)
t(C.aGg,C.bA4)
t(C.bf1,C.aM7)
t(C.aGj,C.aOa)
t(C.bxy,B.j4)
t(C.a9W,B.kI)
t(C.cpp,C.b59)
t(C.ajz,C.a4h)
u(B.YY,[C.aTm,C.aUO])
t(C.ayA,C.aTm)
w(C.aNZ,B.cc)
w(C.aNt,B.cc)
w(C.aNc,B.cc)
w(C.aNs,B.cc)
w(C.aNX,B.cc)
w(C.aPg,B.cc)
w(C.aM7,B.eM)
w(C.aO9,B.cc)
v(C.bA4,B.eC)
w(C.aOa,B.cc)})()
B.iT(b.typeUniverse,JSON.parse('{"aU5":{"hN":["aU5"]},"oj":{"aU5":[],"hN":["aU5"]},"aTu":{"M":["T0"],"M.E":"T0"},"a9J":{"y0":[],"oG":[]},"a2g":{"af":[],"v":[]},"aL3":{"ah":["a2g"]},"ZZ":{"af":[],"v":[]},"ZX":{"af":[],"v":[]},"azz":{"ah":["ZZ"]},"azv":{"ah":["ZX"]},"azx":{"ax":[],"v":[]},"arZ":{"af":[],"v":[]},"aFG":{"ah":["arZ"]},"aeD":{"ax":[],"v":[]},"ae1":{"ax":[],"v":[]},"aeG":{"ax":[],"v":[]},"agm":{"ax":[],"v":[]},"blH":{"ax":[],"v":[]},"X7":{"af":[],"v":[]},"aFX":{"ah":["X7"]},"b34":{"ax":[],"v":[]},"beI":{"aC":[]},"beH":{"aC":[]},"bwK":{"aC":[]},"bba":{"aC":[]},"bud":{"aC":[]},"X8":{"af":[],"v":[]},"aG_":{"ah":["X8"]},"bef":{"aC":[]},"a1f":{"af":[],"v":[]},"aHo":{"ah":["a1f"]},"bhR":{"aC":[]},"a1M":{"af":[],"v":[]},"a1L":{"af":[],"v":[]},"aFR":{"af":[],"v":[]},"a09":{"af":[],"v":[]},"aJk":{"ah":["a1M"]},"aJj":{"ah":["a1L"]},"bmF":{"ah":["aFR"]},"bk8":{"aC":[]},"aDm":{"ah":["a09"]},"bvl":{"ax":[],"v":[]},"b3p":{"ax":[],"v":[]},"bof":{"ax":[],"v":[]},"Or":{"af":[],"v":[]},"a_H":{"af":[],"v":[]},"bm0":{"ah":["Or"]},"btS":{"ax":[],"v":[]},"bgW":{"aC":[]},"b1j":{"ax":[],"v":[]},"aBJ":{"ah":["a_H"]},"a01":{"af":[],"v":[]},"bis":{"ah":["a01"]},"bhN":{"aC":[]},"bhu":{"aC":[]},"bqC":{"aC":[]},"bcj":{"aC":[]},"bbX":{"aC":[]},"bxI":{"aC":[]},"buG":{"aC":[]},"btO":{"aC":[]},"bgP":{"aC":[]},"apW":{"af":[],"v":[]},"b3s":{"ax":[],"v":[]},"blJ":{"ah":["apW"]},"aeJ":{"ax":[],"v":[]},"af_":{"ax":[],"v":[]},"aKJ":{"af":[],"v":[]},"Wo":{"af":[],"v":[]},"JJ":{"ax":[],"v":[]},"aBo":{"af":[],"v":[]},"a91":{"af":[],"v":[]},"b3q":{"ax":[],"v":[]},"b3n":{"aC":[]},"bxc":{"ah":["aKJ"]},"aLq":{"aC":[]},"blX":{"ah":["Wo"]},"bgf":{"ah":["aBo"]},"bmD":{"ah":["a91"]},"b1m":{"ax":[],"v":[]},"bhs":{"aC":[]},"bsI":{"aC":[]},"btL":{"aC":[]},"aAL":{"af":[],"v":[]},"KL":{"af":[],"v":[]},"a0T":{"af":[],"v":[]},"KR":{"ax":[],"v":[]},"OX":{"af":[],"v":[]},"aGg":{"ah":["OX"],"eC":[]},"bf1":{"ah":["aAL"]},"bfg":{"ax":[],"v":[]},"bf0":{"ah":["KL"]},"QH":{"ax":[],"v":[]},"aGj":{"ah":["a0T"]},"bug":{"aC":[]},"bk1":{"ax":[],"v":[]},"bk0":{"ax":[],"v":[]},"Xj":{"af":[],"v":[]},"Xk":{"af":[],"v":[]},"aGe":{"af":[],"v":[]},"asX":{"af":[],"v":[]},"aGh":{"ah":["Xj"]},"bmZ":{"ah":["Xk"]},"aGf":{"ah":["aGe"]},"bxy":{"j4":[]},"aGi":{"ah":["asX"]},"bxM":{"ax":[],"v":[]},"a92":{"af":[],"v":[]},"bmI":{"ah":["a92"]},"a9W":{"kI":["fy<eW>"],"kw":["fy<eW>"]},"ajz":{"a4h":[]},"aTm":{"jg":[],"fi":[]},"ayA":{"jg":[],"fi":[]},"aUO":{"jg":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("MB"),U:w("w4<qn>"),bz:w("u"),M:w("de<n>"),bo:w("jV"),g7:w("Un"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C3"),fS:w("EK"),an:w("IU"),bm:w("O<T0>"),X:w("O<T3>"),f3:w("O<aU5>"),aK:w("O<nr>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lT>"),d5:w("O<aB<bA<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jE>>"),ez:w("O<a9<n,aE>>"),d:w("O<a9<n,@>>"),B:w("O<mS>"),h:w("O<jE>"),gE:w("O<Ae>"),k:w("O<oN>"),g:w("O<m1>"),D:w("O<hQ>"),u:w("O<eQ>"),m:w("O<vj>"),i:w("O<hG>"),aC:w("O<a9j>"),o:w("O<Af>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j2>"),J:w("O<jt>"),gx:w("O<pD<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(G,G)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j4>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baS>"),bx:w("O<aGS>"),gz:w("O<agw>"),x:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<H?>"),cA:w("O<cj>"),A:w("cw<ah<af>>"),gL:w("ai<oN>"),R:w("ai<hQ>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bA<H,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<H,+icon3d,picture(n?,n?)>"),bR:w("N<hG,v>"),eC:w("N<oa,n>"),cT:w("N<k0,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,q5>"),gh:w("N<mV,jG<mV>>"),w:w("iC"),ei:w("iF"),g2:w("rP"),fB:w("Fo"),b6:w("Ae"),gX:w("a9b"),dt:w("lx"),ea:w("oN"),bt:w("m1"),I:w("hQ"),F:w("eQ"),fO:w("mV"),ff:w("vj"),fP:w("hG"),Q:w("wA"),dO:w("asT"),a:w("ct"),C:w("aE"),dw:w("auy"),di:w("a9X"),Y:w("eW"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FU"),dB:w("ds<o>"),bJ:w("ds<n>"),_:w("e0<n>"),N:w("n"),fw:w("qn"),bO:w("au"),K:w("br<o>"),b:w("br<G>"),E:w("dK"),W:w("bC<n>"),ac:w("bC<H>"),ex:w("k4<m1>"),cI:w("k4<n>"),cl:w("k4<G>"),b4:w("Y<lu>"),a8:w("Y<mu>"),fR:w("Y<+(n,n)>"),co:w("ea<o>"),l:w("v"),b2:w("c3<~>"),ev:w("qs<e_>"),dT:w("bk<~>"),q:w("mC"),y:w("P"),gR:w("G"),z:w("@"),S:w("H"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hQ>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("hQ?"),go:w("b3u?"),a6:w("a9k?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2b=new B.bL(A.aA,null,null,H.asm,null)
D.b2l=new B.da(0,-0.15)
D.b2n=new B.da(0.62,0)
D.b2q=new B.da(-0.35,-0.45)
D.b2B=new B.da(0.9,-0.85)
D.b4M=new B.be(H.Ut,H.Ut,A.fP,A.fP)
D.b51=new B.ay(A.b7,1,A.r,-1)
D.bqP=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b5d=new B.ay(D.bqP,1,A.r,-1)
D.b5p=new B.ay(A.aF,1.5,A.r,-1)
D.b5u=new B.ay(A.b7,1.6,A.r,-1)
D.b5K=new B.ay(A.aF,1.4,A.r,-1)
D.b76=new B.p(null,null,null,null,null,K.I8,A.a6)
D.c8k=new B.a8(A.a7,A.aa,A.x,G.a60,null,null)
D.b7e=new B.p(null,null,null,null,null,D.c8k,A.a6)
D.aez=new B.p(A.as,null,null,A.tW,null,null,A.n)
D.bjF=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bqM=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d76=w([D.bjF,D.bqM],x.O)
D.ezZ=new B.bY(A.A,0.5,A.x,null,0,D.d76,null,null)
D.b7x=new B.p(null,null,null,null,null,D.ezZ,A.a6)
D.Zh=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b6_=new B.bH(Q.vW,A.a1,A.a1,A.a1)
D.b7z=new B.p(D.Zh,null,D.b6_,null,null,null,A.n)
D.ca4=new B.a8(A.a7,A.aa,A.x,A.S7,null,null)
D.b7G=new B.p(null,null,null,null,null,D.ca4,A.a6)
D.aga=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b7J=new B.p(D.aga,null,null,A.rq,null,null,A.n)
D.b7N=new B.p(A.jZ,null,null,null,null,null,A.a6)
D.b7Q=new B.p(A3.ahr,null,H.aeb,A.mF,null,null,A.n)
D.Fp=new B.p(A.dM,null,null,null,null,null,A.a6)
D.b7X=new B.p(null,null,null,null,null,E.wZ,A.a6)
D.dcu=w([E.air,A.c2],x.O)
D.c9H=new B.a8(A.b4,A.b8,A.x,D.dcu,null,null)
D.b80=new B.p(null,null,null,A.mF,null,D.c9H,A.n)
D.do4=w([A.bl,A.dM,A.jY],x.O)
D.a41=new B.a8(A.aA,A.aE,A.x,D.do4,null,null)
D.b8d=new B.p(null,null,null,null,null,D.a41,A.n)
D.b8e=new B.p(D.aga,null,null,A.l7,null,null,A.n)
D.cBC=w([A.d7,A.bl],x.O)
D.c9y=new B.a8(A.aA,A.aE,A.x,D.cBC,null,null)
D.b8i=new B.p(null,null,null,null,null,D.c9y,A.n)
D.b8s=new B.p(null,null,null,null,null,G.v3,A.a6)
D.b8O=new B.p(A.ait,null,null,null,null,null,A.a6)
D.bkG=new B.u(0.5647058823529412,0,0,0,A.q)
D.aeI=new B.ac(0,A.G,D.bkG,A.JA,28)
D.bb0=new B.aYi()
D.bbz=new C.czK()
D.afc=new B.ch(A.A,null,null,A.a3R,null)
D.ber=new B.fk(null,null,null,null,null,E.nz,null,null,null,null)
D.bck=new B.ch(A.A,null,null,D.ber,null)
D.bTB=new B.ae(A.ed,28,A.c,null,null,null)
D.bcQ=new B.ch(A.A,null,null,D.bTB,null)
D.beo=new B.fk(2,null,null,null,null,A.c3,null,null,null,null)
D.bdc=new B.ch(A.A,null,null,D.beo,null)
D.bTV=new B.ae(K.PG,40,A.bD,null,null,null)
D.bdd=new B.ch(A.A,null,null,D.bTV,null)
D.bfi=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bfv=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bfY=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bg9=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bgN=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bh3=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bh5=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mq=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bhy=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bhG=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agv=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.biw=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bjr=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agL=new B.u(1,1,1,0.9725490196078431,A.q)
D.bjO=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bk2=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bk5=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bkm=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bkM=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bmr=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YZ=new B.u(0.8509803921568627,0,0,0,A.q)
D.bmC=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bmJ=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahL=new B.u(0.6,0,0,0,A.q)
D.ahO=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bos=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.uh=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.boW=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bpp=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bpP=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aiL=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zu=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BZ=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.N4=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jC=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ajf=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.ZE=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.btF=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bua=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.buq=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_6=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bvD=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yu=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bwf=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bwA=new B.hB(A.aT,!0,null,null)
D.fB2=new B.F(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1c=new B.B("Bio link",null,D.fB2,null,null,null,null,null,null,null,null,null)
D.bd7=new B.ch(A.A,null,null,D.h1c,null)
D.bwP=new B.hB(A.BD,!0,D.bd7,null)
D.dOM=new B.NY(A.bl,56,Y.P8,null,null)
D.fxz=new B.F(!0,A.bB,null,null,null,null,null,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK7=new B.B("No presentations yet",null,D.fxz,null,null,null,null,null,null,null,null,null)
D.fC3=new B.F(!0,A.dI,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHu=new B.B(y.K,null,D.fC3,null,A.K,null,null,null,null,null,null,null)
D.cTv=w([D.dOM,A.aB,D.fK7,A.am,D.fHu],x.p)
D.bx2=new B.fj(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.cTv,null)
D.Ny=new C.a50(0,"none")
D.akv=new C.a50(1,"deflate")
D.akw=new C.a50(2,"bzip2")
D.bxO=new B.kC(0.165,0.84,0.44,1)
D.dcO=w([A.c6,A.dN,A.aF],x.O)
D.c8N=new B.a8(A.aA,A.aE,A.x,D.dcO,null,null)
D.b7b=new B.p(null,null,null,null,null,D.c8N,A.n)
D.c26=new B.ae(A.f6,null,A.ab,null,null,null)
D.bdM=new B.ch(A.A,null,null,D.c26,null)
D.byn=new B.bN(D.b7b,A.bi,D.bdM,null)
D.btU=new B.u(0.058823529411764705,1,1,1,A.q)
D.dgf=w([A.bA,A.rB,A.rB,D.btU],x.O)
D.cT7=w([0,0.32,0.7,1],x.x)
D.c9o=new B.a8(A.aA,A.aE,A.x,D.dgf,D.cT7,null)
D.b70=new B.p(null,null,null,null,null,D.c9o,A.n)
D.byu=new B.bN(D.b70,A.bi,null,null)
D.bzC=new B.mK(1,1,null,null,null,A.br,null)
D.bzF=new B.mK(1,null,null,null,null,D.ZE,null)
D.bA8=new B.bd(125e4)
D.bAe=new B.bd(17e4)
D.bAo=new B.bd(35964e8)
D.bAv=new B.bd(55e4)
D.bAz=new B.bd(68e4)
D.bB_=new B.im(0,0,0,5)
D.bBe=new B.S(0,16,16,0)
D.bBp=new B.S(0,36,0,36)
D.bBx=new B.S(0,54,0,0)
D.bBE=new B.S(10,0,10,3)
D.bBQ=new B.im(10,16,10,10)
D.bC1=new B.S(10,6,4,6)
D.bC4=new B.S(10,8,10,6)
D.alv=new B.S(11,8,11,11)
D.bCa=new B.S(12,0,12,24)
D.bCn=new B.S(12,12,12,4)
D.bCq=new B.S(12,12,8,12)
D.bCG=new B.S(12,8,8,12)
D.bD5=new B.S(14,14,14,0)
D.bDa=new B.S(14,14,14,90)
D.bDx=new B.S(16,10,16,16)
D.bDy=new B.S(16,10,16,20)
D.amh=new B.S(16,6,16,28)
D.bE5=new B.S(18,0,18,10)
D.bE7=new B.S(18,0,18,30)
D.bE9=new B.S(18,10,18,12)
D.bEa=new B.S(18,10,18,14)
D.bEu=new B.S(18,16,14,18)
D.bEz=new B.S(18,18,18,12)
D.bEF=new B.S(18,26,18,12)
D.bEK=new B.S(18,34,18,34)
D.bEL=new B.S(18,4,18,14)
D.bEP=new B.S(18,8,18,24)
D.bF8=new B.S(20,16,14,4)
D.bFd=new B.S(20,18,12,4)
D.bFi=new B.S(20,20,12,20)
D.bFl=new B.S(20,22,20,20)
D.bFq=new B.S(20,6,20,6)
D.bFA=new B.S(22,18,22,18)
D.bFI=new B.S(22,24,22,0)
D.bFL=new B.S(22,24,22,4)
D.bFT=new B.S(22,60,22,22)
D.bFZ=new B.S(24,24,24,22)
D.bG8=new B.S(26,10,60,10)
D.bGg=new B.S(28,44,28,44)
D.bGx=new B.S(32,44,32,44)
D.bGF=new B.S(38,30,38,20)
D.bGL=new B.S(4,0,0,6)
D.bGX=new B.im(4,4,4,4)
D.bHp=new B.im(6,5,6,5)
D.bHu=new B.S(6,6,8,6)
D.bHG=new B.S(8,14,8,14)
D.bHH=new B.S(8,22,8,22)
D.bHQ=new B.S(8,6,12,6)
D.bHY=new B.S(8,8,8,4)
D.ane=new B.S(9,9,9,6)
D.bI8=new B.im(2.5,2.5,2.5,2.5)
D.bI9=new B.S(10.5,0,10.5,0)
D.bIa=new B.S(7,1.5,7,1.5)
D.d3U=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bIq=new B.uS(null,null,D.d3U,A.y3)
D.d0E=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bIr=new B.uS(null,null,D.d0E,A.y3)
D.aWt=new B.F(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0u=new B.B("WORD DESIGN",null,D.aWt,null,null,null,null,null,null,null,null,null)
D.bJ5=new B.bz(1,A.bb,D.h0u,null)
D.h07=new B.B("Slides database",null,Ac.vD,null,null,null,null,null,null,null,null,null)
D.fYl=new B.B("Admin only \xb7 keep as many as you like",null,V.aVW,null,null,null,null,null,null,null,null,null)
D.dwV=w([D.h07,A.bG,D.fYl],x.p)
D.bxg=new B.fj(A.ah,A.e,A.j,A.E,null,A.p,null,0,D.dwV,null)
D.bJ8=new B.bz(1,A.bb,D.bxg,null)
D.fSs=new B.B("NGMY logo",null,A.fE,null,null,null,null,null,null,null,null,null)
D.bJb=new B.bz(1,A.bb,D.fSs,null)
D.fyG=new B.F(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2x=new B.B("TALK TO THE EDITOR",null,D.fyG,null,null,null,null,null,null,null,null,null)
D.bJw=new B.bz(1,A.bb,D.h2x,null)
D.fM2=new B.B("Tell the AI what to change",null,Ac.vD,null,null,null,null,null,null,null,null,null)
D.bJQ=new B.bz(1,A.bb,D.fM2,null)
D.bLl=new B.Ez(!0,"video/mp4")
D.fwN=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJY=new B.B("Move presentations between devices",null,D.fwN,null,null,null,!1,null,null,1,null,null)
D.bLp=new B.qK(A.e5,A.a7,A.f,D.fJY,null)
D.fLd=new B.B("Edit in Slides",null,A.jd,null,null,null,null,null,null,null,null,null)
D.bLq=new B.qK(A.e5,A.A,A.f,D.fLd,null)
D.bLG=new B.dl(1,A.cn,D.bLq,null)
D.a2c=new B.a0(60988,"MaterialIcons",!1)
D.bP8=new B.a0(61352,"MaterialIcons",!1)
D.aoY=new B.a0(61531,"MaterialIcons",!1)
D.bQk=new B.a0(63062,"MaterialIcons",!1)
D.bQr=new B.a0(63109,"MaterialIcons",!1)
D.bQE=new B.a0(63206,"MaterialIcons",!1)
D.apE=new B.a0(63238,"MaterialIcons",!1)
D.bQV=new B.a0(63338,"MaterialIcons",!1)
D.a2N=new B.a0(63365,"MaterialIcons",!1)
D.a2O=new B.a0(63367,"MaterialIcons",!1)
D.a2P=new B.a0(63368,"MaterialIcons",!1)
D.apQ=new B.a0(63384,"MaterialIcons",!1)
D.bRc=new B.a0(63525,"MaterialIcons",!1)
D.bRg=new B.a0(63568,"MaterialIcons",!1)
D.bRB=new B.a0(983072,"MaterialIcons",!1)
D.bS_=new B.a0(983271,"MaterialIcons",!0)
D.aqW=new B.a0(983965,"MaterialIcons",!1)
D.aqX=new B.a0(983966,"MaterialIcons",!1)
D.bSW=new B.a0(984592,"MaterialIcons",!1)
D.bTd=new B.ae(A.uK,16,A.aD,null,null,null)
D.ar8=new B.ae(A.pz,18,A.c,null,null,null)
D.bTC=new B.ae(A.CF,18,N.lG,null,null,null)
D.bUg=new B.ae(A.jJ,11,null,null,null,null)
D.bUr=new B.ae(A.a2u,null,A.es,null,null,null)
D.bUZ=new B.ae(A.t6,18,A.aD,null,null,null)
D.bV4=new B.ae(A5.CW,14,null,null,null,null)
D.bV5=new B.ae(A.ej,28,A.c0,null,null,null)
D.bVh=new B.ae(A.qQ,20,A.c,null,null,null)
D.bVo=new B.ae(A.zo,null,null,null,null,null)
D.bVt=new B.ae(A.jI,18,A.hu,null,null,null)
D.bVy=new B.ae(A.k8,null,null,null,null,null)
D.bQm=new B.a0(63065,"MaterialIcons",!1)
D.bWb=new B.ae(D.bQm,15,A.c,null,null,null)
D.bQs=new B.a0(63113,"MaterialIcons",!1)
D.bWh=new B.ae(D.bQs,null,A.ab,null,null,null)
D.bWF=new B.ae(A.uI,22,A.bM,null,null,null)
D.bX_=new B.ae(A.t3,18,null,null,null,null)
D.bX5=new B.ae(A.D1,12,A.c,null,null,null)
D.bSy=new B.a0(983687,"MaterialIcons",!1)
D.bXh=new B.ae(D.bSy,null,A.bl,null,null,null)
D.bXq=new B.ae(A.hM,null,A.bl,null,null,null)
D.bXJ=new B.ae(A.pE,22,A.c,null,null,null)
D.bXN=new B.ae(A.cz,13,A.c,null,null,null)
D.bXT=new B.ae(A.ej,26,A.ay,null,null,null)
D.bXX=new B.ae(A.t9,26,A.c,null,null,null)
D.PS=new B.ae(A.jJ,8,A.c,null,null,null)
D.bYi=new B.ae(A.pz,40,A.c,null,null,null)
D.bYj=new B.ae(A.bO5,null,null,null,null,null)
D.bYn=new B.ae(A.uV,20,null,null,null,null)
D.bSx=new B.a0(983683,"MaterialIcons",!1)
D.bYy=new B.ae(D.bSx,null,A.b2,null,null,null)
D.bYz=new B.ae(A.jJ,16,A.bl,null,null,null)
D.bYU=new B.ae(A.pB,null,null,null,null,null)
D.arJ=new B.ae(A.wH,22,A.c,null,null,null)
D.bZ_=new B.ae(A.ed,17,A.c,null,null,null)
D.arK=new B.ae(A.jJ,9,A.c,null,null,null)
D.bZ4=new B.ae(A.wC,null,null,null,null,null)
D.bOm=new B.a0(57744,"MaterialIcons",!1)
D.bZb=new B.ae(D.bOm,null,null,null,null,null)
D.bZe=new B.ae(A.wC,16,null,null,null,null)
D.bT4=new B.a0(985181,"MaterialIcons",!1)
D.I0=new B.ae(D.bT4,null,null,null,null,null)
D.bZq=new B.ae(A.k8,16,A.bM,null,null,null)
D.bSq=new B.a0(983615,"MaterialIcons",!1)
D.bZs=new B.ae(D.bSq,12,A.c,null,null,null)
D.arQ=new B.ae(A.za,16,null,null,null,null)
D.bZA=new B.ae(A.ed,21,A.c,null,null,null)
D.bZF=new B.ae(A.hM,17,A.c,null,null,null)
D.bZG=new B.ae(A.uI,null,null,null,null,null)
D.bZX=new B.ae(A.a3t,20,A.aD,null,null,null)
D.c_b=new B.ae(A.oB,22,E.nz,null,null,null)
D.c_k=new B.ae(A.qP,13,A.ab,null,null,null)
D.c_n=new B.ae(A.aqJ,20,A.aD,null,null,null)
D.bO3=new B.a0(57495,"MaterialIcons",!1)
D.c_s=new B.ae(D.bO3,null,null,null,null,null)
D.c_w=new B.ae(A.oC,18,A.c,null,null,null)
D.c_T=new B.ae(A.v_,28,A.c,null,null,null)
D.c04=new B.ae(D.apE,null,A.aF,null,null,null)
D.c05=new B.ae(A.qQ,22,A.c,null,null,null)
D.arZ=new B.ae(A.a28,16,null,null,null,null)
D.c0S=new B.ae(A.uI,32,A.c,null,null,null)
D.c1C=new B.ae(A.j8,22,A.c,null,null,null)
D.c1F=new B.ae(A.t9,22,A.ab,null,null,null)
D.ase=new B.ae(A.uK,null,A.bW,null,null,null)
D.c2C=new B.ae(A.qK,18,null,null,null,null)
D.c3e=new B.ae(A.ed,18,A.bj,null,null,null)
D.c3l=new B.ae(A.aqE,null,null,null,null,null)
D.c3M=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aWh,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eM,!0,null,null,null,null)
D.fol=new B.F(!0,A.bL,null,null,null,null,null,A.cB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c43=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fol,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eM,!0,null,null,null,null)
D.c4u=new B.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eM,!0,null,null,null,null)
D.d89=w([A.dM,A.aF],x.O)
D.c6A=new B.a8(A.a7,A.aa,A.x,D.d89,null,null)
D.c6L=new B.a8(A.b4,A.b8,A.W5,A.azn,null,null)
D.bfN=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bkO=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bot=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bin=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cT9=w([D.bfN,D.bkO,D.bot,D.bin],x.O)
D.c72=new B.a8(A.aA,A.aE,A.x,D.cT9,A.Ix,null)
D.dx3=w([A.cG,A.bE,A.b7],x.O)
D.c74=new B.a8(A.b4,A.b8,A.W5,D.dx3,null,null)
D.dyA=w([A.bl,A.ch],x.O)
D.c79=new B.a8(A.a7,A.aa,A.x,D.dyA,null,null)
D.dtd=w([A.fH,A.d_,A.av],x.O)
D.c7b=new B.a8(A.aA,A.aE,A.x,D.dtd,null,null)
D.dey=w([A.cH,A.fp],x.O)
D.c7f=new B.a8(A.a7,A.aa,A.x,D.dey,null,null)
D.dwX=w([N.lG,A.d_],x.O)
D.at0=new B.a8(A.a7,A.aa,A.x,D.dwX,null,null)
D.blw=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dwU=w([D.blw,D.yu,A.c3],x.O)
D.c7k=new B.a8(A.a7,A.aa,A.x,D.dwU,null,null)
D.d9V=w([A.b5,A.cY,A.er],x.O)
D.c7l=new B.a8(A.aA,A.aE,A.x,D.d9V,null,null)
D.Q9=new B.a8(A.a7,A.aa,A.x,A.IN,null,null)
D.buO=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cM5=w([D.buO,A.c3,A.jD],x.O)
D.at5=new B.a8(A.aA,A.aE,A.x,D.cM5,null,null)
D.dkj=w([A.ua,A.aC,D.BZ],x.O)
D.c8m=new B.a8(A.a7,A.aa,A.x,D.dkj,null,null)
D.bwg=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bjq=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bpD=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d90=w([D.bwg,D.bjq,D.bpD],x.O)
D.at6=new B.a8(A.a7,A.aa,A.x,D.d90,null,null)
D.bly=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.can=w([AA.ak9,D.bly],x.O)
D.c8v=new B.a8(A.b4,A.b8,A.x,D.can,null,null)
D.d6V=w([A.mP,A.bD],x.O)
D.c8z=new B.a8(A.b4,A.b8,A.x,D.d6V,null,null)
D.dpL=w([A.aF,A.dN],x.O)
D.c8F=new B.a8(A.a7,A.aa,A.x,D.dpL,null,null)
D.aiY=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aB6=w([D.aiY,D.jC,D.Mq],x.O)
D.c98=new B.a8(A.aA,A.aE,A.x,D.aB6,null,null)
D.cLY=w([A.dz,A.dC],x.O)
D.c9j=new B.a8(A.b4,A.b8,A.x,D.cLY,null,null)
D.dmD=w([A.y6,A.yg],x.O)
D.ca6=new B.a8(A.a7,A.aa,A.x,D.dmD,null,null)
D.fU5=new B.B("Which Bio link?",null,A.cE,null,null,null,null,null,null,null,null,null)
D.caj=new B.q8(null,D.fU5,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zN=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7Z=new C.lb(2,"elegantNavy")
D.hG_=w([A.Zr,D.jC,A.c3],x.O)
D.kd=new C.ye(0,"classic")
D.a7O=new C.jE("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7Z,4294967035,4279378237,4290283019,D.kd)
D.aKH=new C.lb(3,"elegantGold")
D.bfh=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bgt=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ahf=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hFs=w([D.bfh,D.bgt,D.ahf],x.O)
D.a7M=new C.jE("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKH,4294966515,4281016592,4289102906,D.kd)
D.dUj=new C.lb(22,"goldRibbon")
D.hFo=w([A.Zr,D.jC,A.iv],x.O)
D.a7F=new C.jE("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dUj,4294967035,4279378237,4291404327,D.kd)
D.dUk=new C.lb(23,"goldBaroque")
D.ai0=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hFu=w([D.ai0,A.aC,A.jD],x.O)
D.a7G=new C.jE("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dUk,4294964964,4283053072,4292128567,D.kd)
D.dUm=new C.lb(4,"elegantEmerald")
D.bhO=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.biO=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hFA=w([D.bhO,D.biO,A.iv],x.O)
D.a7H=new C.jE("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dUm,4294376440,4279122734,4291404327,D.kd)
D.dUn=new C.lb(5,"elegantBurgundy")
D.bn9=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hFH=w([D.bn9,A.agm,A.iv],x.O)
D.a7K=new C.jE("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dUn,4294965238,4283043359,4291404327,D.kd)
D.dUg=new C.lb(19,"goldFiligree")
D.Nc=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hFv=w([D.Nc,A.aC,A.jD],x.O)
D.a7I=new C.jE("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dUg,4294966259,4279378237,4292128567,D.kd)
D.dUh=new C.lb(20,"goldLaurel")
D.buE=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hFI=w([A.Mi,A.iv,D.buE],x.O)
D.a7J=new C.jE("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dUh,4294966776,4282000405,4291404327,D.kd)
D.dUi=new C.lb(21,"goldCrest")
D.agd=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.buL=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hFx=w([D.agd,A.aC,D.buL],x.O)
D.a7N=new C.jE("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dUi,4294965484,4283053072,4292128567,D.kd)
D.dUl=new C.lb(24,"goldStar")
D.bw7=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hFB=w([D.bw7,A.aC,D.jC],x.O)
D.a7L=new C.jE("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dUl,4294966518,4279378237,4292128567,D.kd)
D.Ia=w([D.a7O,D.a7M,D.a7F,D.a7G,D.a7H,D.a7K,D.a7I,D.a7J,D.a7N,D.a7L],x.h)
D.r1=new C.mV(0,"blank")
D.TO=new C.mV(1,"title")
D.n9=new C.mV(2,"titleContent")
D.edW=new C.mV(3,"twoColumn")
D.E3=new C.mV(4,"section")
D.edX=new C.mV(5,"comparison")
D.Jk=new C.mV(6,"flashcard")
D.Jl=new C.mV(7,"quiz")
D.Jm=new C.mV(8,"worksheet")
D.atr=w([D.r1,D.TO,D.n9,D.edW,D.E3,D.edX,D.Jk,D.Jl,D.Jm],B.as("O<mV>"))
D.aCd=w([Aq.YK,A.dC],x.O)
D.kX=w([A.c3,A.bM,A.hH,A.ia,D.BZ],x.O)
D.dQ2=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aCd,D.kX)
D.bv0=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bn7=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d77=w([D.bv0,D.bn7],x.O)
D.dPU=new C.jb("confetti","Golden Confetti","Together we rise",D.d77,D.kX)
D.d4_=w([A.o8,A.Yk],x.O)
D.dPV=new C.jb("crown","Crown of Glory","Built for our community",D.d4_,D.kX)
D.bjd=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bmL=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.dbo=w([D.bjd,D.bmL],x.O)
D.v5=w([A.bL,A.aS,A.c,A.bh,A.an],x.O)
D.dPP=new C.jb("aurora","Aurora Gala","A brighter future, together",D.dbo,D.v5)
D.bov=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dmM=w([G.afP,D.bov],x.O)
D.dQ5=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dmM,D.kX)
D.dQ6=new C.jb("diamonds","Diamond Rain","Every member is a jewel",A0.aD_,D.v5)
D.bgh=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bma=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dsq=w([D.bgh,D.bma],x.O)
D.dPK=new C.jb("starburst","Golden Starburst","Thank you!",D.dsq,D.kX)
D.cau=w([A.fo,A.yl],x.O)
D.afZ=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RK=w([A.pi,A.iu,A.wg,A.o9,D.afZ],x.O)
D.dQd=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.cau,D.RK)
D.d3c=w([A.Yy,A.w],x.O)
D.dQ1=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d3c,D.v5)
D.bsO=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dj1=w([A.kt,D.bsO],x.O)
D.dPX=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.dj1,D.kX)
D.bqj=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.boe=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dnK=w([D.bqj,D.boe],x.O)
D.dPM=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dnK,D.kX)
D.dvf=w([A.dz,A.i9],x.O)
D.dPS=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.dvf,D.kX)
D.bks=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d1_=w([A.yn,D.bks],x.O)
D.dPO=new C.jb("hearts","Floating Hearts","Made with love",D.d1_,D.RK)
D.bgW=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bhV=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dwS=w([D.bgW,D.bhV],x.O)
D.dQc=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dwS,D.RK)
D.btS=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dsM=w([A.lf,D.btS],x.O)
D.dPJ=new C.jb("butterflies","Golden Butterflies","New beginnings",D.dsM,D.kX)
D.bpz=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d24=w([D.bpz,A.w],x.O)
D.dQ4=new C.jb("neon","Neon Night","Let's go!",D.d24,D.v5)
D.blO=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dpX=w([A.MN,D.blO],x.O)
D.dQ7=new C.jb("disco","Disco Ball","Party time",D.dpX,D.v5)
D.bq8=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dps=w([A.fH,D.bq8],x.O)
D.dPN=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.dps,D.kX)
D.dp3=w([A.rG,A.dC],x.O)
D.dQ8=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.dp3,D.v5)
D.bjk=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dph=w([D.bjk,A.dC],x.O)
D.dQb=new C.jb("snow","Winter Gala","Warm wishes to all",D.dph,D.v5)
D.bfq=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bgH=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dvL=w([D.bfq,D.bgH],x.O)
D.dQ0=new C.jb("laurel","Laurel Victory","We did it together",D.dvL,D.kX)
D.bfg=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bmH=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d_Z=w([D.bfg,D.bmH],x.O)
D.dQa=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.d_Z,D.kX)
D.bnT=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cLV=w([G.BY,D.bnT],x.O)
D.dPY=new C.jb("kente","Kente Pride","Proud of our roots",D.cLV,D.kX)
D.br_=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.buf=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.ddb=w([D.br_,D.buf],x.O)
D.dPT=new C.jb("trophy","Trophy Shine","Winners together",D.ddb,D.kX)
D.dpo=w([Ar.Mx,A.w],x.O)
D.dPL=new C.jb("shooting","Shooting Stars","Make a wish",D.dpo,D.v5)
D.bfz=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajV=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dw3=w([D.bfz,D.ajV],x.O)
D.dPZ=new C.jb("bokeh","Golden Bokeh","Shine bright",D.dw3,D.kX)
D.bg_=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.djT=w([D.bg_,A.w],x.O)
D.dPR=new C.jb("orbits","Golden Orbits","Always moving forward",D.djT,D.kX)
D.btT=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dg7=w([A.aha,D.btT],x.O)
D.dPW=new C.jb("flowers","Blooming Garden","Growing together",D.dg7,D.RK)
D.bfL=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bgy=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.duH=w([D.bfL,D.bgy],x.O)
D.dPQ=new C.jb("music","Music Party","Celebrate with us",D.duH,D.v5)
D.bhz=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.buH=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d1d=w([D.bhz,D.buH],x.O)
D.dQ9=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d1d,D.kX)
D.dgd=w([G.BY,D.ajV],x.O)
D.dQ3=new C.jb("sparklers","Golden Sparklers","Light up the night",D.dgd,D.kX)
D.dQ_=new C.jb("city","City Lights","The whole city celebrates",D.aCd,D.kX)
D.Ij=w([D.dQ2,D.dPU,D.dPV,D.dPP,D.dQ5,D.dQ6,D.dPK,D.dQd,D.dQ1,D.dPX,D.dPM,D.dPS,D.dPO,D.dQc,D.dPJ,D.dQ4,D.dQ7,D.dPN,D.dQ8,D.dQb,D.dQ0,D.dQa,D.dPY,D.dPT,D.dPL,D.dPZ,D.dPR,D.dPW,D.dPQ,D.dQ9,D.dQ3,D.dQ_],B.as("O<jb>"))
D.eFX=new B.y("","No ring")
D.eWr=new B.y("platinum","Platinum")
D.eSt=new B.y("glow","Glow")
D.eJH=new B.y("double","Double line")
D.eIA=new B.y("framed","Gallery frame")
D.eFt=new B.y("rosegold","Rose gold")
D.eTi=new B.y("jewels","Jeweled")
D.ePU=new B.y("aurora","Aurora")
D.Dl=w([D.eFX,A.Uz,D.eWr,D.eSt,M.aRu,D.eJH,A.aRs,D.eIA,D.eFt,D.eTi,D.ePU],x.L)
D.cv3=w([D.a7I,D.a7J,D.a7N,D.a7F,D.a7G,D.a7L],x.h)
D.bZO=new B.ae(G.aoy,16,null,null,null,null)
D.bao=new B.w4(A.bn,D.bZO,null,x.U)
D.bOv=new B.a0(58027,"MaterialIcons",!1)
D.bTj=new B.ae(D.bOv,16,null,null,null,null)
D.bam=new B.w4(A.K,D.bTj,null,x.U)
D.bOw=new B.a0(58030,"MaterialIcons",!1)
D.bXo=new B.ae(D.bOw,16,null,null,null,null)
D.bap=new B.w4(A.e2,D.bXo,null,x.U)
D.cBm=w([D.bao,D.bam,D.bap],B.as("O<w4<qn>>"))
D.cJa=w([A.C2,A.hG],x.O)
D.cJb=w([A.b5,A.bd,A.er],x.O)
D.Rz=w([A.bM,A.ia,A.hH,A.aC,A.o9],x.O)
D.cM0=w([A.c3,D.jC,D.Mq],x.O)
D.cMy=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eDg=new B.y(4278913286,4280030216)
D.eDy=new B.y(4279373061,4278518787)
D.eDF=new B.y(4279898630,4278847235)
D.dcy=w([D.eDg,D.eDy,D.eDF],x.n)
D.d7T=w(["\u265b","\u269c","\u2726"],x.s)
D.dUe=new C.yg("Royal Onyx & Gold",D.dcy,4292128567,4294370209,4294965479,3874020544,D.d7T)
D.eD3=new B.y(4278326799,4278598442)
D.eD5=new B.y(4278395929,4278258953)
D.eDc=new B.y(4278599728,4278327826)
D.dv6=w([D.eD3,D.eD5,D.eDc],x.n)
D.d1X=w(["\u269c","\u2756","\u2727"],x.s)
D.dUb=new C.yg("Imperial Emerald",D.dv6,4293050997,4294699968,4294180856,3872254170,D.d1X)
D.eD6=new B.y(4278455076,4278918747)
D.eDb=new B.y(4278587439,4278322714)
D.eDp=new B.y(4279051376,4278455076)
D.dt9=w([D.eD6,D.eDb,D.eDp],x.n)
D.dkD=w(["\u2654","\u2726","\u2748"],x.s)
D.dU5=new C.yg("Sapphire Crown",D.dt9,4291417834,4294967295,4294310143,3871986666,D.dkD)
D.eDD=new B.y(4279894534,4283041554)
D.eDP=new B.y(4281008906,4279042307)
D.eDX=new B.y(4284221976,4279894534)
D.dzf=w([D.eDD,D.eDP,D.eDX],x.n)
D.d3l=w(["\u265b","\u2766","\u2726"],x.s)
D.dU7=new C.yg("Ruby Throne",D.dzf,4293378685,4294963145,4294964466,3874213833,D.d3l)
D.eDx=new B.y(4279371039,4281995100)
D.eDH=new B.y(4280092723,4278714896)
D.eDU=new B.y(4283045242,4279371039)
D.dvu=w([D.eDx,D.eDH,D.eDU],x.n)
D.dtw=w(["\u2655","\u2756","\u2727"],x.s)
D.dUc=new C.yg("Amethyst Palace",D.dvu,4293314984,4294963421,4294702591,3873229802,D.dtw)
D.eD8=new B.y(4278519045,4280032287)
D.eDq=new B.y(4279111184,4278321666)
D.eDM=new B.y(4280492839,4278716426)
D.drS=w([D.eD8,D.eDq,D.eDM],x.n)
D.diO=w(["\u2726","\u25c6","\u2742"],x.s)
D.dU9=new C.yg("Obsidian & Platinum",D.drS,4293256418,4294967295,4294638330,3872378836,D.diO)
D.eDE=new B.y(4279896588,4282194463)
D.eDN=new B.y(4280553487,4279043334)
D.eDV=new B.y(4283048488,4279896588)
D.did=w([D.eDE,D.eDN,D.eDV],x.n)
D.dxl=w(["\u2766","\u273f","\u2727"],x.s)
D.dU6=new C.yg("Rose Gold Velvet",D.did,4293440672,4294960345,4294964979,3874214602,D.dxl)
D.eD9=new B.y(4278520340,4279180595)
D.eDe=new B.y(4278718495,4278322443)
D.eDB=new B.y(4279510591,4278520340)
D.cSQ=w([D.eD9,D.eDe,D.eDB],x.n)
D.djx=w(["\u269c","\u2736","\u2756"],x.s)
D.dUa=new C.yg("Midnight Brass",D.cSQ,4291405148,4293975208,4294439914,3872837564,D.djx)
D.eE9=new B.y(4294703086,4293780428)
D.eE5=new B.y(4294307549,4293187253)
D.eEa=new B.y(4294966517,4293977807)
D.d5I=w([D.eE9,D.eE5,D.eEa],x.n)
D.djX=w(["\u269c","\u265b","\u2726"],x.s)
D.dUd=new C.yg("Ivory Marble & Gold",D.d5I,4289760572,4286209048,4280951062,3863625518,D.djX)
D.eDk=new B.y(4278978566,4280555024)
D.eDA=new B.y(4279504137,4278518530)
D.eDR=new B.y(4281211923,4278978566)
D.d3b=w([D.eDk,D.eDA,D.eDR],x.n)
D.duh=w(["\u2742","\u2726","\u265c"],x.s)
D.dU8=new C.yg("Onyx & Copper",D.d3b,4291856987,4294365880,4294964718,3873885630,D.duh)
D.cMG=w([D.dUe,D.dUb,D.dU5,D.dU7,D.dUc,D.dU9,D.dU6,D.dUa,D.dUd,D.dU8],B.as("O<yg>"))
D.cP2=w([A.aC,D.BZ,A.ia],x.O)
D.eLX=new B.y("Original",null)
D.eM6=new B.y("Wide 16:9",1.7777777777777777)
D.eOu=new B.y("Landscape 3:2",1.5)
D.eLn=new B.y("Photo 4:3",1.3333333333333333)
D.f_l=new B.y("Portrait 3:4",0.75)
D.azw=w([D.eLX,D.eM6,D.eOu,D.eLn,M.aRi,D.f_l],B.as("O<+(n,G?)>"))
D.azx=w([A.ia,A.bT,A.b9,A.bq],x.O)
D.eOG=new B.y("","Original")
D.eQD=new B.y("circle","Circle")
D.eXf=new B.y("rounded","Rounded")
D.eYf=new B.y("triangle","Triangle")
D.eSK=new B.y("hexagon","Hexagon")
D.eR3=new B.y("diamond","Diamond")
D.ePT=new B.y("arch","Arch")
D.Ds=w([D.eOG,D.eQD,D.eXf,D.eYf,D.eSK,D.eR3,D.ePT],x.L)
D.dP8=new C.lu("classic_blue","Classic Blue","Normal",A.bl,A.c,A.lg,A.d7,A.aM)
D.dPo=new C.lu("campus_green","Campus Green","Normal",A.b2,A.nw,A.uc,A.he,A.e6)
D.dPf=new C.lu("warm_sand","Warm Sand","Normal",A.e_,A.hH,A.bM,A.ic,A.of)
D.dPm=new C.lu("slate_minimal","Slate Minimal","Normal",A.bw,A.aS,A.bh,A.a_,A.aM)
D.dP7=new C.lu("coral_fresh","Coral Fresh","Normal",A.c6,A.hX,A.qb,A.ku,A.u5)
D.dPn=new C.lu("lavender_calm","Lavender Calm","Normal",A.b7,A.qe,A.ye,A.ol,A.kq)
D.dP9=new C.lu("ocean_breeze","Ocean Breeze","Normal",A.fp,A.rO,A.u1,A.u7,A.oh)
D.aj5=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dPk=new C.lu("berry_pop","Berry Pop","Normal",A.fe,D.aj5,A.kM,G.a_3,A.C3)
D.dPa=new C.lu("midnight_pro","Midnight Pro","Professional",A.aF,A.a_,A.dz,A.kM,A.cv)
D.dPj=new C.lu("executive_navy","Executive Navy","Professional",A.d5,A.aif,A.d7,A.ld,A.bL)
D.dPh=new C.lu("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.br,A.a_,A.aS,A.cv)
D.dPb=new C.lu("corporate_steel","Corporate Steel","Professional",A.oj,A.a_,A.mS,A.fI,A.bL)
D.dPe=new C.lu("gold_luxe","Gold Luxe","Luxury",A.mK,A.dW,A.pg,A.m5,A.bM)
D.bqd=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dPi=new C.lu("rose_gold_elite","Rose Gold Elite","Luxury",A.hG,D.bqd,A.ZM,A.iu,A.o9)
D.dPl=new C.lu("platinum_night","Platinum Night","Luxury",A.cv,A.dC,A.br,A.aS,A.bh)
D.dPp=new C.lu("emerald_prestige","Emerald Prestige","Luxury",A.aW,A.qi,A.eX,A.qr,A.jW)
D.dP6=new C.lu("royal_purple","Royal Purple","Luxury",A.nv,A.YQ,A.kq,A.kM,A.Mh)
D.dPg=new C.lu("neon_pitch","Neon Pitch","Bold",A.b9,A.dC,A.a_,A.b_,A.bh)
D.dPd=new C.lu("crimson_impact","Crimson Impact","Bold",A.bD,A.kt,A.el,A.rP,A.eW)
D.dPc=new C.lu("sunset_gallery","Sunset Gallery","Bold",A.fq,A.u5,A.ku,A.qb,A.mQ)
D.Is=w([D.dP8,D.dPo,D.dPf,D.dPm,D.dP7,D.dPn,D.dP9,D.dPk,D.dPa,D.dPj,D.dPh,D.dPb,D.dPe,D.dPi,D.dPl,D.dPp,D.dP6,D.dPg,D.dPd,D.dPc],B.as("O<lu>"))
D.d_J=w([A.c3,D.jC],x.O)
D.dix=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.ePD=new B.y("Faces & people",D.dix)
D.cP6=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eBT=new B.y("Ideas & work",D.cP6)
D.d8o=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eSP=new B.y("Nature",D.d8o)
D.diG=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eLV=new B.y("Places & things",D.diG)
D.dc5=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ePY=new B.y("Symbols",D.dc5)
D.d_P=w([D.ePD,D.eBT,D.eSP,D.eLV,D.ePY],B.as("O<+(n,ai<n>)>"))
D.bfQ=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d09=w([A.c3,D.ahf,D.bfQ],x.O)
D.b9G=new B.ac(0,A.G,A.Me,A.aLx,40)
D.b9m=new B.ac(0,A.G,A.od,A.ev,8)
D.d0m=w([D.b9G,D.b9m],x.V)
D.d0U=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azV=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a5d=w([A.ia,A.er,A.bD,A.as,A.c6],x.O)
D.d1Q=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ahv=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d21=w([A.ZC,D.ahv,A.ZC],x.O)
D.d26=w([A.iv,D.jC,D.Mq],x.O)
D.eLH=new B.y(A.bn,D.a2O)
D.eN9=new B.y(A.K,D.a2N)
D.eGJ=new B.y(A.e2,D.a2P)
D.d36=w([D.eLH,D.eN9,D.eGJ],B.as("O<+(qn,a0)>"))
D.cX=new C.JK(0,"text")
D.lT=new C.JK(1,"image")
D.fj=new C.JK(2,"shape")
D.TN=new C.JK(3,"pdf")
D.lt=new C.JK(4,"signature")
D.a88=new C.JK(5,"bio")
D.d45=w([D.cX,D.lT,D.fj,D.TN,D.lt,D.a88],B.as("O<JK>"))
D.d46=w([A.bt,A.cI],B.as("O<IC>"))
D.d4M=w(["School","Documents","Sign & present"],x.s)
D.b9M=new B.ac(0,A.G,A.ajK,A.vq,28)
D.d5a=w([D.b9M],x.V)
D.d5t=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RT=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAl=w([A.ia,A.Gs,A.bh,A.c,A.pi,A.aC],x.O)
D.eZJ=new B.y(0.1,0.08)
D.eSN=new B.y(0.3,0.05)
D.eGb=new B.y(0.55,0.1)
D.eKD=new B.y(0.8,0.06)
D.eNV=new B.y(0.92,0.16)
D.eNo=new B.y(0.2,0.2)
D.eL7=new B.y(0.7,0.22)
D.eRq=new B.y(0.05,0.4)
D.eOm=new B.y(0.95,0.45)
D.eGZ=new B.y(0.12,0.7)
D.eJl=new B.y(0.88,0.75)
D.eJt=new B.y(0.4,0.9)
D.eEr=new B.y(0.65,0.93)
D.eKg=new B.y(0.25,0.97)
D.eLE=new B.y(0.85,0.9)
D.eHU=new B.y(0.5,0.04)
D.d72=w([D.eZJ,D.eSN,D.eGb,D.eKD,D.eNV,D.eNo,D.eL7,D.eRq,D.eOm,D.eGZ,D.eJl,D.eJt,D.eEr,D.eKg,D.eLE,D.eHU],x.G)
D.d7b=w([A.c,A.hG,A.aH,A.aW],x.O)
D.efy=new C.k0("office_blue","Office Blue",A.bl,A.d7,A.aM,A.c,A.lg)
D.efJ=new C.k0("campus_green","Campus Green",A.b2,A.he,A.e6,A.nw,A.uc)
D.efz=new C.k0("sunset","Sunset",A.fq,A.ku,A.of,A.hX,A.qb)
D.efA=new C.k0("midnight","Midnight",A.aF,A.kM,A.cv,A.a_,A.dz)
D.efL=new C.k0("classic","Classic",A.d_,A.dW,A.m6,A.hH,A.fz)
D.efI=new C.k0("rose_gold","Rose Gold",A.hG,A.yo,A.yn,A.wg,A.C2)
D.eft=new C.k0("ocean_teal","Ocean Teal",A.fp,A.u7,A.oh,A.rO,A.u1)
D.efs=new C.k0("slate_pro","Slate Pro",A.bw,A.a_,A.aM,A.aS,A.bh)
D.efr=new C.k0("neon_night","Neon Night",A.b9,A.b_,A.bh,A.dC,A.a_)
D.efD=new C.k0("lavender","Lavender",A.b7,A.ol,A.kq,A.qe,A.ye)
D.efF=new C.k0("coral","Coral",A.c6,A.ku,A.u5,A.hX,A.mQ)
D.efu=new C.k0("forest","Forest",A.ht,A.e9,A.cs,A.m7,A.es)
D.efv=new C.k0("berry","Berry",A.fe,G.a_3,A.C3,D.aj5,A.kM)
D.efC=new C.k0("sand","Sand",A.e_,A.ic,A.of,A.hH,A.bM)
D.efH=new C.k0("ice","Ice",A.oj,A.FZ,A.aM,A.og,A.fI)
D.efx=new C.k0("charcoal","Charcoal",A.an,A.aS,A.cv,A.br,A.a_)
D.efq=new C.k0("mint","Mint",A.aW,A.fX,A.he,A.m7,A.qr)
D.efG=new C.k0("crimson","Crimson",A.bD,A.mP,A.kt,A.Gq,A.rP)
D.biN=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.efB=new C.k0("gold","Gold",A.mK,A.y6,A.pg,D.biN,A.m5)
D.efE=new C.k0("aqua","Aqua",A.bU,A.Gb,A.pd,A.qf,A.pj)
D.efw=new C.k0("plum","Plum",A.nv,A.yl,A.C3,A.G_,A.rK)
D.efK=new C.k0("steel","Steel",A.d5,A.d7,A.br,A.lg,A.ld)
D.a5s=w([D.efy,D.efJ,D.efz,D.efA,D.efL,D.efI,D.eft,D.efs,D.efr,D.efD,D.efF,D.efu,D.efv,D.efC,D.efH,D.efx,D.efq,D.efG,D.efB,D.efE,D.efw,D.efK],B.as("O<k0>"))
D.d7y=w([A.c3,A.jD],x.O)
D.TP=new C.hG(10,"rotate3d")
D.Jo=new C.hG(8,"flip")
D.aL_=new C.hG(19,"spiral")
D.r2=new C.hG(16,"bounce")
D.aL2=new C.hG(9,"flipVertical")
D.d7z=w([D.TP,D.Jo,D.aL_,D.r2,D.aL2],x.i)
D.eo=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d7W=w([0.62,1],x.x)
D.d8y=w([0,0.32,0.68,1],x.x)
D.na=new C.hG(6,"zoom")
D.vk=new C.hG(4,"slideUp")
D.vj=new C.hG(2,"slideLeft")
D.d8I=w([D.na,D.Jo,D.vk,D.TP,D.vj],x.i)
D.d9e=w([A.bT,A.hG,A.iu,A.ia,A.c],x.O)
D.b9B=new B.ac(0,A.G,D.ahL,A.vq,30)
D.da0=w([D.b9B],x.V)
D.er8=new B.o(0,-2.5)
D.eqZ=new B.o(-2.5,0)
D.epa=new B.o(2.5,0)
D.da3=w([A.U2,A.a8A,A.aMa,A.a8z,D.er8,O.aM6,D.eqZ,D.epa],x.dN)
D.IA=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.daB=w([23,114,69,56,80,144],x.t)
D.db4=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.dbx=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.ddg=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.ddl=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bk=new C.vj(0,"rectangle")
D.f0=new C.vj(1,"circle")
D.lu=new C.vj(6,"hexagon")
D.ddB=w([D.bk,D.f0,D.lu],x.m)
D.oR=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aje=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.de9=w([D.aje,A.e9],x.O)
D.eGs=new B.y("","Classic")
D.eEG=new B.y("caps","Bold caps")
D.eRt=new B.y("elegant","Elegant")
D.eXz=new B.y("shadow","Shadow")
D.eL0=new B.y("neon","Neon glow")
D.eVf=new B.y("marker","Highlighter")
D.eXN=new B.y("stamp","Stamp")
D.eJT=new B.y("threed","3D")
D.eS_=new B.y("fire","Fire")
D.eSZ=new B.y("ice","Ice")
D.eQC=new B.y("chalk","Chalk")
D.eQH=new B.y("comic","Comic")
D.eZ4=new B.y("softglow","Soft glow")
D.eU1=new B.y("lowercase","Lowercase")
D.eRb=new B.y("double","Echo")
D.eZd=new B.y("whisper","Whisper")
D.aBh=w([D.eGs,D.eEG,D.eRt,D.eXz,D.eL0,M.aRt,D.eVf,D.eXN,M.aRv,D.eJT,M.aRn,D.eS_,D.eSZ,D.eQC,D.eQH,A.Uz,At.aRw,D.eZ4,D.eU1,D.eRb,D.eZd],x.L)
D.dfs=w([3,5,7,10,12,15],x.t)
D.dh2=w([A.bT,A.bM,A.c,A.eN,A.cG],x.O)
D.dGB=new C.tP(10,"cardWorld")
D.DX=new C.Cb(3,"rounded")
D.dXe=new C.lx("world","NGMY World",D.dGB,D.DX,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dGC=new C.tP(11,"cardSplit")
D.dXa=new C.lx("business","Business Wire",D.dGC,D.DX,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dGD=new C.tP(12,"cardBreaking")
D.dXn=new C.lx("breaking","Breaking Red",D.dGD,D.DX,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dGE=new C.tP(13,"cardFeature")
D.dXg=new C.lx("feature","Tech Feature",D.dGE,D.DX,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJD=new C.tP(6,"circle")
D.aJx=new C.Cb(4,"circle")
D.dXk=new C.lx("parchment","Royal Circle",D.aJD,D.aJx,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dX9=new C.lx("ocean","Blue Ocean",D.aJD,D.aJx,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dGH=new C.tP(7,"rail")
D.aJw=new C.Cb(1,"double")
D.dXb=new C.lx("forest","Green Leaf",D.dGH,D.aJw,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJA=new C.tP(1,"sideBySide")
D.dXp=new C.lx("herald","NGMY Herald",D.aJA,D.DX,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJz=new C.tP(0,"classic")
D.a7k=new C.Cb(9,"shadow")
D.dXo=new C.lx("daily","The Daily",D.aJz,D.a7k,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dGF=new C.tP(2,"splash")
D.aJy=new C.Cb(6,"cutCorner")
D.dX8=new C.lx("tabloid","Big Tabloid",D.dGF,D.aJy,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJE=new C.tP(9,"minimal")
D.dXj=new C.lx("modern","Modern Digest",D.aJE,D.DX,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJB=new C.tP(3,"magazine")
D.aJv=new C.Cb(0,"plain")
D.dXf=new C.lx("midnight","Midnight Edition",D.aJB,D.aJv,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dGI=new C.tP(8,"banner")
D.dXh=new C.lx("metro","Metro Wire",D.dGI,D.aJy,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dGA=new C.Cb(8,"arch")
D.dXi=new C.lx("sunrise","Sunrise Post",D.aJB,D.dGA,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJC=new C.tP(5,"scrapbook")
D.dGz=new C.Cb(5,"tape")
D.dXd=new C.lx("neon","Neon Beat",D.aJC,D.dGz,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dGG=new C.tP(4,"wrap")
D.dXq=new C.lx("gold","Golden Press",D.dGG,D.a7k,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dXr=new C.lx("minimal","Paper White",D.aJE,D.a7k,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dXc=new C.lx("gazette","Fresh Gazette",D.aJz,D.aJw,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dXm=new C.lx("times","Classic Times",D.aJA,D.aJv,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tk=new C.Cb(2,"polaroid")
D.dXl=new C.lx("scrapbook","Memory Scrapbook",D.aJC,D.Tk,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5J=w([D.dXe,D.dXa,D.dXn,D.dXg,D.dXk,D.dX9,D.dXb,D.dXp,D.dXo,D.dX8,D.dXj,D.dXf,D.dXh,D.dXi,D.dXd,D.dXq,D.dXr,D.dXc,D.dXm,D.dXl],B.as("O<lx>"))
D.dhe=w([0.45,1],x.x)
D.IE=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dhE=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hAj=new C.oX("Original",0,1,1,0,0,0)
D.hAn=new C.oX("Black & white",0,1.1,0,0,0,0)
D.hAa=new C.oX("Noir",-0.05,1.55,0,0,0,0)
D.hAe=new C.oX("Sepia",0,1,0.25,0.9,0,0)
D.hAd=new C.oX("Vivid",0,1.15,1.6,0,0,0)
D.hA6=new C.oX("Pop",0,1.3,1.9,0,0,0)
D.hA8=new C.oX("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hAk=new C.oX("Matte",0,0.9,0.85,0,0,0.55)
D.hAf=new C.oX("Cool",0,1.05,1,-0.8,0,0)
D.hAm=new C.oX("Warm",0.03,1.05,1.1,0.8,0,0)
D.hA7=new C.oX("Golden hour",0.04,1,1.25,1,0,0)
D.hAc=new C.oX("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hAl=new C.oX("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hAb=new C.oX("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hAh=new C.oX("Retro",0,0.9,0.7,0.4,0,0.35)
D.hAg=new C.oX("Forest",0,1,1.2,-0.1,-0.45,0)
D.hAi=new C.oX("Rose",0,1,1.1,0.3,0.4,0)
D.hA9=new C.oX("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dhF=w([D.hAj,D.hAn,D.hAa,D.hAe,D.hAd,D.hA6,D.hA8,D.hAk,D.hAf,D.hAm,D.hA7,D.hAc,D.hAl,D.hAb,D.hAh,D.hAg,D.hAi,D.hA9],B.as("O<oX>"))
D.bfb=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dhH=w([D.aje,A.e9,D.bfb],x.O)
D.eBM=new B.y(0.12,0.3)
D.eT9=new B.y(0.26,0.75)
D.eRp=new B.y(0.8,0.22)
D.eXZ=new B.y(0.9,0.7)
D.eU0=new B.y(0.5,0.15)
D.eW9=new B.y(0.65,0.85)
D.eIq=new B.y(0.08,0.85)
D.dhX=w([D.eBM,D.eT9,D.eRp,D.eXZ,D.eU0,D.eW9,D.eIq],x.G)
D.aBu=w([A.b9,A.bT,A.bq,A.b5],x.O)
D.diS=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dj4=w([A.c,A.fI,A.dl,A.w6],x.O)
D.bj2=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dk8=w([D.bj2,D.ahv],x.O)
D.dka=w([A.ua,A.aC],x.O)
D.dkq=w([0,0.25,0.75,1],x.x)
D.dks=w([A.ya,A.pi],x.O)
D.aKA=new C.lb(10,"kenteSunset")
D.hFq=w([D.ai0,A.ko,A.aC],x.O)
D.dSr=new C.jE("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aKA,4294964964,4282000405,4279983648,D.kd)
D.aKB=new C.lb(11,"indigoMudcloth")
D.bgn=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hFE=w([D.bgn,A.ahs,A.iv],x.O)
D.dSz=new C.jE("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKB,4294439140,4279903102,4279903102,D.kd)
D.aKC=new C.lb(12,"adinkraRoyal")
D.bvs=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hFF=w([D.agd,D.bvs,A.aC],x.O)
D.dSB=new C.jE("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKC,4294965484,4285218591,4287322667,D.kd)
D.aKD=new C.lb(13,"nileLotus")
D.brl=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bnt=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hFK=w([D.brl,D.bnt,A.iv],x.O)
D.dSA=new C.jE("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKD,4294244340,4279196764,4279196764,D.kd)
D.aKE=new C.lb(14,"shweshweIvory")
D.blk=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bjV=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bgV=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hFr=w([D.blk,D.bjV,D.bgV],x.O)
D.dSw=new C.jE("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKE,4294505710,4279970378,4291058750,D.kd)
D.tp=new C.lb(15,"certIvoryNavy")
D.hFp=w([D.Nc,D.jC,A.iv],x.O)
D.aKa=new C.ye(1,"ringsNdoa")
D.dSt=new C.jE("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tp,4294966259,4279378237,4291404327,D.aKa)
D.a7Q=new C.ye(2,"coupleCards")
D.dSo=new C.jE("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tp,4294966259,4279378237,4291404327,D.a7Q)
D.E_=new C.lb(18,"certIvoryNavyBar")
D.agc=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hFD=w([D.agc,D.jC,A.iv],x.O)
D.aKb=new C.ye(3,"kuhoweshaForm")
D.dSm=new C.jE("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.E_,4294966519,4279378237,4291404327,D.aKb)
D.ahJ=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hFX=w([D.Nc,D.ahJ,A.iv],x.O)
D.a7R=new C.ye(4,"mahariPande")
D.dSp=new C.jE("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tp,4294966259,4279904068,4291404327,D.a7R)
D.aKF=new C.lb(16,"certIvoryGreen")
D.bkD=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hFt=w([A.Mi,D.bkD,A.iv],x.O)
D.aKc=new C.ye(5,"familiaMti")
D.dSv=new C.jE("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKF,4294966776,4280241466,4291404327,D.aKc)
D.a7S=new C.ye(6,"ndoaSafi")
D.dSn=new C.jE("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.E_,4294966519,4279378237,4291404327,D.a7S)
D.bpy=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hFw=w([D.Nc,A.iv,D.bpy],x.O)
D.a7T=new C.ye(7,"peteWide")
D.dSs=new C.jE("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tp,4294966259,4282001936,4291404327,D.a7T)
D.dSC=new C.ye(8,"muhuriCrest")
D.dSl=new C.jE("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tp,4294966259,4279378237,4291404327,D.dSC)
D.hFG=w([D.agc,D.ahJ,A.iv],x.O)
D.dSD=new C.ye(9,"fomuWazi")
D.dSy=new C.jE("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.E_,4294966519,4279904068,4291404327,D.dSD)
D.aKG=new C.lb(17,"certIvoryRose")
D.blp=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hFJ=w([D.blp,D.aiL,A.iv],x.O)
D.a7P=new C.ye(10,"upendoOrnate")
D.dSu=new C.jE("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKG,4294965493,4286200650,4291404327,D.a7P)
D.dkU=w([D.dSr,D.dSz,D.dSB,D.dSA,D.dSw,D.dSt,D.dSo,D.dSm,D.dSp,D.dSv,D.dSn,D.dSs,D.dSl,D.dSy,D.dSu],x.h)
D.ep=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jp=new C.wA(0,"emojis")
D.E5=new C.wA(1,"pictures")
D.Jq=new C.wA(2,"icons3d")
D.a8a=new C.wA(3,"animations")
D.TR=new C.wA(4,"videoMotion")
D.E6=new C.wA(5,"luxe")
D.a5Q=w([D.Jp,D.E5,D.Jq,D.a8a,D.TR,D.E6],B.as("O<wA>"))
D.eWN=new B.y(A.ed,"Looks")
D.eKw=new B.y(A.Dd,"Light")
D.eKt=new B.y(A.mj,"Colour")
D.eIr=new B.y(A.wF,"Effects")
D.apz=new B.a0(63112,"MaterialIcons",!1)
D.eEW=new B.y(D.apz,"Crop")
D.dlr=w([D.eWN,D.eKw,D.eKt,D.eIr,D.eEW],x.f2)
D.dm8=w([],x.D)
D.hFU=w([],x.L)
D.eIF=new B.y("Flashcard",D.Jk)
D.eMz=new B.y("Quiz",D.Jl)
D.eOB=new B.y("Worksheet",D.Jm)
D.eLz=new B.y("Notes",D.n9)
D.eN7=new B.y("Section",D.E3)
D.dmS=w([D.eIF,D.eMz,D.eOB,D.eLz,D.eN7],B.as("O<+(n,mV)>"))
D.dUo=new C.lb(6,"beadedPearl")
D.boj=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hFY=w([H.ZL,D.boj,A.iv],x.O)
D.aK8=new C.jE("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dUo,4294966774,4286209070,4291404327,D.kd)
D.dUp=new C.lb(7,"artDeco")
D.bsI=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bvO=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hFW=w([D.bsI,D.bvO,A.c3],x.O)
D.aK9=new C.jE("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dUp,4294440434,4280228630,4290283019,D.kd)
D.dUq=new C.lb(8,"rosetteCorners")
D.buU=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bj7=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bob=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hFz=w([D.buU,D.bj7,D.bob],x.O)
D.aK7=new C.jE("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dUq,4294702831,4285218602,4291394365,D.kd)
D.dUr=new C.lb(9,"modernLedger")
D.hFy=w([A.c,D.jC,D.jC],x.O)
D.aK6=new C.jE("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dUr,4294967295,4279378237,4279378237,D.kd)
D.dmW=w([D.aK8,D.aK9,D.aK7,D.aK6],x.h)
D.dn5=w([A.iu,A.pi],x.O)
D.cu=new C.hG(0,"none")
D.dp=new C.hG(1,"fade")
D.Jn=new C.hG(3,"slideRight")
D.aL1=new C.hG(5,"slideDown")
D.ee2=new C.hG(7,"zoomOut")
D.a89=new C.hG(11,"cube")
D.edY=new C.hG(12,"blur")
D.aKZ=new C.hG(13,"dissolve")
D.edZ=new C.hG(14,"wipeLeft")
D.ee_=new C.hG(15,"wipeRight")
D.TQ=new C.hG(17,"push")
D.ee0=new C.hG(18,"flash")
D.aL0=new C.hG(20,"swing")
D.ee1=new C.hG(21,"curtain")
D.Ss=w([D.cu,D.dp,D.vj,D.Jn,D.vk,D.aL1,D.na,D.ee2,D.Jo,D.aL2,D.TP,D.a89,D.edY,D.aKZ,D.edZ,D.ee_,D.r2,D.TQ,D.ee0,D.aL_,D.aL0,D.ee1],x.i)
D.St=w([D.a7O,D.a7M,D.a7F,D.a7G,D.a7H,D.a7K,D.a7I,D.a7J,D.a7N,D.a7L,D.aK8,D.aK9,D.aK7,D.aK6],x.h)
D.dny=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dnC=w([A.ud,A.ia,A.c3],x.O)
D.eJN=new B.y(A.uN,"Design")
D.eYo=new B.y(D.apQ,"Word sizes")
D.eTK=new B.y(A.D9,"Text")
D.bRQ=new B.a0(983182,"MaterialIcons",!1)
D.eTP=new B.y(D.bRQ,"Photo")
D.eEu=new B.y(A.ln,"Logo")
D.eZH=new B.y(A.HY,"News")
D.dnI=w([D.eJN,D.eYo,D.eTK,D.eTP,D.eEu,D.eZH],x.f2)
D.dnJ=w(["golddust","sparkle","sheen"],x.s)
D.efp=new C.ew("upload_pdf",K.PG,"Upload PDF")
D.eez=new C.ew("sign_paper",A.HV,"Sign Paper")
D.bR5=new B.a0(63438,"MaterialIcons",!1)
D.efl=new C.ew("hd_photo",D.bR5,"HD Photo")
D.eer=new C.ew("sharpen",E.a2x,"Sharpen")
D.eeB=new C.ew("print",K.PG,"Download PDF")
D.ef2=new C.ew("rotate",D.apz,"Rotate")
D.eeK=new C.ew("text_box",A.D9,"Text Box")
D.eeM=new C.ew("picture",A.uR,"Picture")
D.eeI=new C.ew("title",A.wS,"Title")
D.eeE=new C.ew("subtitle",U.aqq,"Subtitle")
D.efb=new C.ew("bullets",I.a2Q,"Bullet List")
D.eeF=new C.ew("numbered",A.Pt,"Numbered")
D.efe=new C.ew("quote",A5.CW,"Quote")
D.eeR=new C.ew("citation",A.oB,"Citation")
D.efh=new C.ew("date_stamp",Aj.a2B,"Date Stamp")
D.ef4=new C.ew("page_number",A.zv,"Page #")
D.ef8=new C.ew("header_bar",A.zx,"Header")
D.eeL=new C.ew("footer_bar",Au.a3o,"Footer")
D.eeA=new C.ew("divider",A.t7,"Divider")
D.eew=new C.ew("highlight",A.a2T,"Highlight")
D.efa=new C.ew("redact",A.v0,"Redact")
D.eeY=new C.ew("callout",A.CN,"Callout")
D.efj=new C.ew("checkboxes",I.aoS,"Checklist")
D.eeV=new C.ew("table",A.a3m,"Table")
D.eeP=new C.ew("memo",I.a35,"Memo")
D.eeZ=new C.ew("letter",A.HK,"Letter")
D.bQJ=new B.a0(63259,"MaterialIcons",!0)
D.eeq=new C.ew("agenda",D.bQJ,"Agenda")
D.eeC=new C.ew("toc",AD.aq2,"Contents")
D.bR1=new B.a0(63406,"MaterialIcons",!1)
D.eeW=new C.ew("sig_line",D.bR1,"Sign Line")
D.eej=new C.ew("initial_line",A.j6,"Initials")
D.eem=new C.ew("approved",A.ln,"APPROVED")
D.ef0=new C.ew("draft",A.pE,"DRAFT")
D.ef6=new C.ew("confidential",A.jJ,"Confidential")
D.ef9=new C.ew("sticky",A.PM,"Sticky Note")
D.efi=new C.ew("progress",A.aq1,"Progress")
D.bSf=new B.a0(983507,"MaterialIcons",!1)
D.eex=new C.ew("stars",D.bSf,"Star Rating")
D.eeh=new C.ew("equation",A.apS,"Equation")
D.ees=new C.ew("timeline",A.a3n,"Timeline")
D.eeQ=new C.ew("two_col",A.a3p,"Two Columns")
D.eeu=new C.ew("compare",Az.a2F,"Compare")
D.eef=new C.ew("duplicate_el",A.fM,"Duplicate")
D.efn=new C.ew("delete_el",A.ej,"Delete")
D.efd=new C.ew("bring_fwd",H.apM,"Bring Front")
D.eek=new C.ew("send_back",H.apL,"Send Back")
D.ef_=new C.ew("align_left",D.a2O,"Align L")
D.ef5=new C.ew("align_center",D.a2N,"Align C")
D.efm=new C.ew("align_right",D.a2P,"Align R")
D.eeJ=new C.ew("word_count",Y.a2d,"Word Count")
D.eeG=new C.ew("link_text",A.hP,"Link")
D.ef3=new C.ew("phone",A.j7,"Phone")
D.eev=new C.ew("email",A.CS,"Email")
D.efo=new C.ew("qr_placeholder",A.jL,"QR Placeholder")
D.eep=new C.ew("rectangle",A6.t5,"Rectangle")
D.eeU=new C.ew("circle",A.pt,"Circle")
D.eel=new C.ew("arrow",A.jI,"Arrow")
D.efc=new C.ew("line",A.t7,"Line")
D.eey=new C.ew("triangle",A.a2D,"Triangle")
D.bQQ=new B.a0(63318,"MaterialIcons",!1)
D.eeD=new C.ew("grayscale",D.bQQ,"Grayscale")
D.eeN=new C.ew("brighten",I.apc,"Brighten")
D.eeS=new C.ew("flip_h",A.CV,"Flip H")
D.bQX=new B.a0(63348,"MaterialIcons",!1)
D.efk=new C.ew("flip_v",D.bQX,"Flip V")
D.ef7=new C.ew("cover_page",A.qL,"Cover Page")
D.eei=new C.ew("invoice",A.hA,"Invoice")
D.eet=new C.ew("resume",A.n1,"Resume")
D.eeH=new C.ew("minutes",A.pw,"Minutes")
D.een=new C.ew("lab_report",A.PI,"Lab Report")
D.eeo=new C.ew("rubric",A.qO,"Rubric")
D.eeT=new C.ew("flashcard_tool",W.HS,"Flashcard")
D.eff=new C.ew("quiz_tool",A.HP,"Quiz Block")
D.eeX=new C.ew("worksheet_tool",P.Hq,"Worksheet")
D.ef1=new C.ew("outline_share",A.PK,"Share Outline")
D.efg=new C.ew("export_json",D.aoY,"Export JSON")
D.eeg=new C.ew("new_slide",D.a2c,"New Slide")
D.eeO=new C.ew("present",A.qQ,"Present")
D.dof=w([D.efp,D.eez,D.efl,D.eer,D.eeB,D.ef2,D.eeK,D.eeM,D.eeI,D.eeE,D.efb,D.eeF,D.efe,D.eeR,D.efh,D.ef4,D.ef8,D.eeL,D.eeA,D.eew,D.efa,D.eeY,D.efj,D.eeV,D.eeP,D.eeZ,D.eeq,D.eeC,D.eeW,D.eej,D.eem,D.ef0,D.ef6,D.ef9,D.efi,D.eex,D.eeh,D.ees,D.eeQ,D.eeu,D.eef,D.efn,D.efd,D.eek,D.ef_,D.ef5,D.efm,D.eeJ,D.eeG,D.ef3,D.eev,D.efo,D.eep,D.eeU,D.eel,D.efc,D.eey,D.eeD,D.eeN,D.eeS,D.efk,D.ef7,D.eei,D.eet,D.eeH,D.een,D.eeo,D.eeT,D.eff,D.eeX,D.ef1,D.efg,D.eeg,D.eeO],B.as("O<ew>"))
D.dop=w([A.cv,A.an],x.O)
D.eE0=new B.y(4286331629,4292552567)
D.eDO=new B.y(4280640491,4278630100)
D.eE8=new B.y(4294538006,4292943176)
D.eDa=new B.y(4278556265,4280640491)
D.di8=w([D.eE0,D.eDO,D.eE8,D.eDa],x.n)
D.cFb=w([4294626325,4280472558,4294210230],x.t)
D.eea=new C.oa("colorful","Colorful",A.mj,D.di8,4294967295,3875536895,D.cFb,D.na)
D.eDC=new B.y(4279522093,4279657780)
D.eDS=new B.y(4281750292,4283268111)
D.eDd=new B.y(4278603323,4279203438)
D.eDT=new B.y(4282343954,4279599165)
D.cQk=w([D.eDC,D.eDS,D.eDd,D.eDT],x.n)
D.cEU=w([4288931381,4294829706,4287033260],x.t)
D.ee6=new C.oa("nature","Nature",A.HW,D.cQk,4294442727,3874290891,D.cEU,D.dp)
D.eDw=new B.y(4279369771,4283178389)
D.eDt=new B.y(4279179050,4286456526)
D.eDK=new B.y(4280163147,4290648157)
D.eD2=new B.y(4278322711,4285343961)
D.d7N=w([D.eDw,D.eDt,D.eDK,D.eD2],x.n)
D.cF7=w([4294210230,4280472558,4289170426],x.t)
D.ee4=new C.oa("vibe","Vibe",A.Px,D.d7N,4294967295,3874869502,D.cF7,D.vj)
D.eE4=new B.y(4290007817,4292552567)
D.eDZ=new B.y(4286328082,4294286859)
D.eE3=new B.y(4288485197,4294538006)
D.eDY=new B.y(4285343961,4293675161)
D.caX=w([D.eE4,D.eDZ,D.eE3,D.eDY],x.n)
D.cFc=w([4294829706,4294967295,4284999929],x.t)
D.ee5=new C.oa("celebration","Celebration",A.k8,D.caX,4294967295,4009752557,D.cFc,D.r2)
D.eDr=new B.y(4279179050,4280171146)
D.eDv=new B.y(4279310375,4280232247)
D.eDj=new B.y(4278916151,4280172719)
D.eDs=new B.y(4279179050,4281549141)
D.d02=w([D.eDr,D.eDv,D.eDj,D.eDs],x.n)
D.cEP=w([4281908728,4294626325,4287931320],x.t)
D.ee9=new C.oa("professional","Professional",A.zg,D.d02,4294967295,3872118241,D.cEP,D.TQ)
D.eDn=new B.y(4278995566,4278413729)
D.eDf=new B.y(4278727492,4279137424)
D.eDL=new B.y(4280171146,4278751666)
D.eDo=new B.y(4278995566,4279590517)
D.cJ2=w([D.eDn,D.eDf,D.eDL,D.eDo],x.n)
D.cES=w([4286436348,4284410580,4294829706],x.t)
D.eeb=new C.oa("ocean","Ocean",I.a3r,D.cJ2,4294967295,3873501950,D.cES,D.vk)
D.eE_=new B.y(4286328082,4294538006)
D.eE1=new B.y(4286781507,4294677052)
D.eDW=new B.y(4283178389,4294197086)
D.eE2=new B.y(4288295954,4294688548)
D.cXf=w([D.eE_,D.eE1,D.eDW,D.eE2],x.n)
D.cFd=w([4294829706,4294967295,4294747557],x.t)
D.eec=new C.oa("sunset","Sunset",A.PP,D.cXf,4294967295,4009749973,D.cFd,D.dp)
D.eEc=new B.y(4294967295,4294047225)
D.eE7=new B.y(4294507260,4294967295)
D.eEb=new B.y(4294967295,4293060848)
D.eE6=new B.y(4294507260,4294047225)
D.dba=w([D.eEc,D.eE7,D.eEb,D.eE6],x.n)
D.cEN=w([4280640491,4279179050,4287931320],x.t)
D.ee8=new C.oa("minimal","Minimal",A6.t5,D.dba,4279179050,4282865001,D.cEN,D.dp)
D.eDm=new B.y(4278979081,4280886564)
D.eDG=new B.y(4280031511,4278979081)
D.eDu=new B.y(4279308561,4281148438)
D.eDl=new B.y(4278979081,4280031511)
D.dqq=w([D.eDm,D.eDG,D.eDu,D.eDl],x.n)
D.cF0=w([4292128567,4294829706,4289241758],x.t)
D.eed=new C.oa("elegant","Elegant",A.ml,D.dqq,4294898631,3873957348,D.cF0,D.aKZ)
D.eDI=new B.y(4280159034,4282058596)
D.eDi=new B.y(4278916151,4280163147)
D.eDQ=new B.y(4281208933,4278916151)
D.eDz=new B.y(4279502891,4283178389)
D.dy0=w([D.eDI,D.eDi,D.eDQ,D.eDz],x.n)
D.cF9=w([4294296657,4292128567,4291081725],x.t)
D.ee7=new C.oa("royal","Royal Gold",A.j8,D.dy0,4294965222,3874084351,D.cF9,D.na)
D.eD7=new B.y(4278464302,4280163147)
D.eDh=new B.y(4278916151,4279455306)
D.eDJ=new B.y(4280163147,4283040846)
D.eD4=new B.y(4278332450,4281413249)
D.dhK=w([D.eD7,D.eDh,D.eDJ,D.eD4],x.n)
D.cEO=w([4281193663,4289170426,4294210230],x.t)
D.eee=new C.oa("aurora","Aurora Glow",A.ed,D.dhK,4293983738,3869766608,D.cEO,D.dp)
D.x2=w([D.eea,D.ee6,D.ee4,D.ee5,D.ee9,D.eeb,D.eec,D.ee8,D.eed,D.ee7,D.eee],B.as("O<oa>"))
D.boU=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.doZ=w([A.rB,D.boU,A.rB],x.O)
D.dpf=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dpj=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eTC=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eJn=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eO9=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eAx=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eML=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eKT=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.ePs=new B.y("Surprise me","")
D.dpS=w([D.eTC,D.eJn,D.eO9,D.eAx,D.eML,D.eKT,D.ePs],x.L)
D.bgX=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.btg=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dqG=w([A.c,D.bgX,D.btg],x.O)
D.dsp=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. Instead, once a day when the app opens, that person gets a Swahili orange pop-up, Hongera, with the amount they contributed and what it was for; not again that day.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), tappable Hub and Creator Toolkit tiles with a colour rim and a light inside, pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dsZ=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aKy=new C.lb(0,"heritageGold")
D.bnd=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hFZ=w([D.bnd,A1.ahW,A.aC],x.O)
D.dSx=new C.jE("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aKy,4294570461,4284234270,4292128567,D.kd)
D.aKz=new C.lb(1,"heritageCrimson")
D.bf7=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.blm=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bt2=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hFC=w([D.bf7,D.blm,D.bt2],x.O)
D.dSq=new C.jE("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aKz,4294635750,4285213214,4292912216,D.kd)
D.dt3=w([D.a7O,D.a7M,D.dSx,D.dSq,D.a7H,D.a7K],x.h)
D.dYu=new C.rZ(1,"circuit")
D.dYX=new C.mu("neural","Neural Link","Robotic",D.dYu,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dYt=new C.rZ(0,"grid")
D.dYU=new C.mu("signal","Signal Grid","Robotic",D.dYt,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dYz=new C.rZ(2,"hexes")
D.dYF=new C.mu("core","Core Protocol","Robotic",D.dYz,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKW=new C.rZ(11,"diagonal")
D.dYQ=new C.mu("steel","Steel Tech","Robotic",D.aKW,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKX=new C.rZ(3,"rings")
D.dYE=new C.mu("vault","Vault Gold","Robotic",D.aKX,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dYx=new C.rZ(13,"leaves")
D.dYH=new C.mu("forest","Forest Morning","Nature",D.dYx,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKY=new C.rZ(5,"waves")
D.dYO=new C.mu("ocean","Ocean Calm","Nature",D.aKY,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dYA=new C.rZ(6,"sunset")
D.dYT=new C.mu("sunset","Sunset Glow","Nature",D.dYA,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dYB=new C.rZ(7,"mountains")
D.dYG=new C.mu("mountain","Mountain Air","Nature",D.dYB,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dYC=new C.rZ(8,"stars")
D.dYN=new C.mu("night","Night Sky","Nature",D.dYC,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a87=new C.rZ(4,"orbs")
D.dYL=new C.mu("aurora","Aurora","Nature",D.a87,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dYV=new C.mu("sand","Sand Dune","Nature",D.aKY,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dYD=new C.rZ(9,"rays")
D.dYK=new C.mu("golden","Golden Hour","Warm",D.dYD,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dYI=new C.mu("royal","Royal Purple","Warm",D.aKW,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dYJ=new C.mu("rose","Rose Petal","Warm",D.a87,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dYw=new C.rZ(12,"blocks")
D.dYM=new C.mu("electric","Electric Blue","Bold",D.dYw,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dYW=new C.mu("mint","Fresh Mint","Bold",D.a87,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dYy=new C.rZ(14,"minimal")
D.dYS=new C.mu("white","Clean White","Clean",D.dYy,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dYv=new C.rZ(10,"frame")
D.dYP=new C.mu("midnight","Midnight Gold","Clean",D.dYv,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dYR=new C.mu("community","Community Green","Clean",D.aKX,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6k=w([D.dYX,D.dYU,D.dYF,D.dYQ,D.dYE,D.dYH,D.dYO,D.dYT,D.dYG,D.dYN,D.dYL,D.dYV,D.dYK,D.dYI,D.dYJ,D.dYM,D.dYW,D.dYS,D.dYP,D.dYR],B.as("O<mu>"))
D.dtr=w([D.BZ,A.ua,A.ia,A.c3],x.O)
D.dtJ=w([D.aiY,D.jC],x.O)
D.dtT=w(["pdf","docx","txt","md"],x.s)
D.f2W=new B.b5(-3,150,34)
D.f2X=new B.b5(-3,214,62)
D.f2Y=new B.b5(-3,288,62)
D.duL=w([D.f2W,D.f2X,D.f2Y],B.as("O<+(G,G,G)>"))
D.dvh=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dw1=w(["Write","Design","Print & fold"],x.s)
D.ke=new C.vj(2,"triangle")
D.E4=new C.vj(3,"arrow")
D.fO=new C.vj(4,"line")
D.kf=new C.vj(5,"parallelogram")
D.dw4=w([D.bk,D.f0,D.ke,D.E4,D.fO,D.kf,D.lu],x.m)
D.eC1=new B.y(240,96)
D.eEO=new B.y(560,46)
D.dwa=w([D.eC1,D.eEO],x.G)
D.hG9=new C.yh(0,"classic")
D.dUu=new C.o7("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aKy,4294570461,4282000405,4284234270)
D.dUG=new C.o7("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aKz,4294635750,4281999378,4285213214)
D.dUv=new C.o7("elegant_navy","Umoja Mzuri",y.s,D.a7Z,4294967035,4279378237,4290283019)
D.dUI=new C.o7("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKH,4294966515,4281016592,4289102906)
D.dUK=new C.o7("kente_sunset","Kente ya Jua",y.H,D.aKA,4294964964,4282000405,4279983648)
D.dUs=new C.o7("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKB,4294439140,4279903102,4279903102)
D.dUx=new C.o7("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKC,4294965484,4285218591,4287322667)
D.dUC=new C.o7("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKD,4294244340,4279196764,4279196764)
D.dUE=new C.o7("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKE,4294505710,4279970378,4291058750)
D.hGa=new C.yh(1,"ringsNdoa")
D.dUw=new C.o7("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tp,4294966259,4279378237,4291404327)
D.hGc=new C.yh(2,"coupleCards")
D.dUH=new C.o7("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tp,4294966259,4279378237,4291404327)
D.hGd=new C.yh(3,"kuhoweshaForm")
D.dUD=new C.o7("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.E_,4294966519,4279378237,4291404327)
D.hGe=new C.yh(4,"mahariPande")
D.dUt=new C.o7("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tp,4294966259,4279904068,4291404327)
D.hGf=new C.yh(5,"familiaMti")
D.dUJ=new C.o7("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKF,4294966776,4280241466,4291404327)
D.hGg=new C.yh(6,"ndoaSafi")
D.dUA=new C.o7("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.E_,4294966519,4279378237,4291404327)
D.hGh=new C.yh(7,"peteWide")
D.dUz=new C.o7("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tp,4294966259,4282001936,4291404327)
D.hGi=new C.yh(8,"muhuriCrest")
D.dUy=new C.o7("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tp,4294966259,4279378237,4291404327)
D.hGj=new C.yh(9,"fomuWazi")
D.dUB=new C.o7("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.E_,4294966519,4279904068,4291404327)
D.hGb=new C.yh(10,"upendoOrnate")
D.dUF=new C.o7("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKG,4294965493,4286200650,4291404327)
D.SJ=w([D.dUu,D.dUG,D.dUv,D.dUI,D.dUK,D.dUs,D.dUx,D.dUC,D.dUE,D.dUw,D.dUH,D.dUD,D.dUt,D.dUJ,D.dUA,D.dUz,D.dUy,D.dUB,D.dUF],B.as("O<o7>"))
D.E2=new C.asS(0,"landscape169")
D.oT=new C.asS(1,"portrait916")
D.dwW=w([D.E2,D.oT],B.as("O<asS>"))
D.aDh=w([A.ia,A.bM,A.cG,A.iu,A.c],x.O)
D.vc=w([A.c3,A.ic],x.O)
D.eB1=new B.y(1000,"M")
D.eGh=new B.y(900,"CM")
D.eEI=new B.y(500,"D")
D.eCY=new B.y(400,"CD")
D.eB2=new B.y(100,"C")
D.eGi=new B.y(90,"XC")
D.eEJ=new B.y(50,"L")
D.eCZ=new B.y(40,"XL")
D.eB8=new B.y(10,"X")
D.eGu=new B.y(9,"IX")
D.eF_=new B.y(5,"V")
D.eEt=new B.y(4,"IV")
D.eBF=new B.y(1,"I")
D.dxG=w([D.eB1,D.eGh,D.eEI,D.eCY,D.eB2,D.eGi,D.eEJ,D.eCZ,D.eB8,D.eGu,D.eF_,D.eEt,D.eBF],x.ek)
D.f4e=new B.cu(["open",A.j6,"Open & write","Keep writing this book"])
D.f4F=new B.cu(["print",A.uV,"Print as a book","Fold and staple it"])
D.dxR=w([D.f4e,D.f4F],B.as("O<+(n,a0,n,n)>"))
D.dyz=w([D.a89,D.na,D.Jo,D.TQ,D.dp,D.TP],x.i)
D.eUm=new B.y(-1,"Small")
D.eAN=new B.y(0,"Normal")
D.eBC=new B.y(1,"Big")
D.eCi=new B.y(2,"Huge")
D.dz8=w([D.eUm,D.eAN,D.eBC,D.eCi],x.ek)
D.dzz=w([49,65,89,38,83,89],x.t)
D.dzF=w([A.ua,A.ia,A.c3],x.O)
D.dA8=w([D.dp,D.na,D.vj,D.a89,D.Jo,D.TQ],x.i)
D.aIA=new B.d_([0,D.Ny,8,D.akv,12,D.akw],B.as("d_<H,a50>"))
D.ekf={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d0d=w([A.bM,H.ajz],x.O)
D.dmB=w([A.b_,A.bl],x.O)
D.dgO=w([A.bT,A.aH,A.bj],x.O)
D.dxS=w([A.cv,A.bw],x.O)
D.d8M=w([A.b9,A.fe],x.O)
D.djJ=w([A.b7,A.fo],x.O)
D.bl_=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dj_=w([D.bl_,A.pi],x.O)
D.dd_=w([A.hq,A.yh],x.O)
D.d8z=w([A.bx,A.ch],x.O)
D.dCP=new B.bv(D.ekf,[D.d0d,O.ato,D.dmB,D.dgO,D.dxS,D.d8M,D.djJ,D.dj_,D.dd_,D.d8z],B.as("bv<n,ai<u>>"))
D.ejn={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6Z=new B.bv(D.ejn,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bv<n,n>"))
D.a75=new B.bv(A.i4,[],B.as("bv<H,+icon3d,picture(n?,n?)>"))
D.dHk=new F.NT(30,null)
D.dMz=new F.mS("Chapter 1","","","")
D.dwJ=w([D.dMz],x.B)
D.dMD=new F.rP("My Book","","",D.dwJ,E.aJZ)
D.dMB=new F.v8("starry",null,null,null,null,"","","")
D.dME=new F.rP("Dream Big","","",E.a5Y,D.dMB)
D.dMC=new F.v8("story",null,null,null,null,"","","")
D.dMF=new F.rP("Little Lion","","",E.a5Y,D.dMC)
D.dMA=new F.v8("vintage",null,null,null,null,"","","")
D.dMG=new F.rP("Our Story","","",E.a5Y,D.dMA)
D.dPI=new C.Fo("","NGMY","","")
D.dX7=new C.Ae("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ee3=new C.b3t(null,null,null,null)
D.efM=new C.asX(null)
D.efX=new C.atq(0,"smaller")
D.efY=new C.atq(1,"bigger")
D.aLc=new C.atq(2,"fit")
D.enQ=new B.o(3,6)
D.eo9=new B.o(4,8)
D.esl=new B.D(E.aln,U.afu,null)
D.esp=new B.D(A.a07,A.m3,null)
D.bTA=new B.ae(A.k9,16,A.bW,null,null,null)
D.est=new B.D(A.iQ,D.bTA,null)
D.bew=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.esG=new B.D(A.H2,D.bew,null)
D.c3c=new B.ae(A.cz,16,A.aD,null,null,null)
D.esK=new B.D(A.eB,D.c3c,null)
D.fNu=new B.B("Play",null,A.o0,null,null,null,null,null,null,null,null,null)
D.dmT=w([V.arR,A.vA,D.fNu],x.p)
D.f9j=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dmT,null)
D.esN=new B.D(A.nG,D.f9j,null)
D.beF=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.ffK=new B.a5(20,20,D.beF,null)
D.esU=new B.D(A.iQ,D.ffK,null)
D.fX0=new B.B("Seconds per slide",null,A.h1,null,null,null,null,null,null,null,null,null)
D.et3=new B.D(A.bg,D.fX0,null)
D.euo=new C.a9X(2,"print")
D.eur=new B.j2(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ew3=new B.hf("/Annot")
D.ew5=new B.hf("/URI")
D.fHt=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eyA=new B.jG("share",48,D.fHt,null,B.as("jG<n>"))
D.c36=new B.ae(A.ed,14,A.eN,null,null,null)
D.eyJ=new B.cK(null,-2,-2,null,null,null,D.c36,null)
D.d2u=w([H.ais,A.L],x.O)
D.c9G=new B.a8(A.a7,A.aa,A.x,D.d2u,null,null)
D.b73=new B.p(null,null,null,null,null,D.c9G,A.n)
D.byj=new B.bN(D.b73,A.bi,null,null)
D.eyW=new B.cK(0,0,null,0,8,null,D.byj,null)
D.drT=w([A.hH,A.mQ,A.c6],x.O)
D.ezA=new B.bY(A.A,0.5,A.x,null,0,D.drT,null,null)
D.eCa=new B.y(0.22,A.bl)
D.eGO=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eJ1=new B.y(0.5,A.hG)
D.eSI=new B.y(0.78,A.aW)
D.f43=new B.cu([A.bq,0.22,0.7,2.6])
D.f4a=new B.cu([A.b9,0.36,1.2,1.3])
D.f4g=new B.cu([A.dN,0.28,0.2,0.4])
D.f4m=new B.cu([A.cA,0.05,0.3,0.35])
D.f4s=new B.cu([A.bx,0.28,0.9,0])
D.f4A=new B.cu([A.aF,-0.25,-0.15,0.45])
D.f5r=new B.cu([A.bT,0.42,1,4.1])
D.f91=new B.aaW(9)
D.bUG=new B.ae(A.HY,28,A.bj,null,null,null)
D.fXA=new B.B("NGMY News",null,A.dm,null,null,null,null,null,null,null,null,null)
D.bIG=new B.bz(1,A.bb,D.fXA,null)
D.dvk=w([D.bUG,A.au,D.bIG],x.p)
D.f9d=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.dvk,null)
D.bUR=new B.ae(A.oB,16,A.c,null,null,null)
D.fZa=new B.B("Book",null,A.nZ,null,null,null,null,null,null,null,null,null)
D.dzE=w([D.bUR,A.e7,D.fZa],x.p)
D.f9m=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dzE,null)
D.c0D=new B.ae(A.jJ,10,A.c,null,null,null)
D.fLt=new B.B("Pro",null,A.nX,null,null,null,null,null,null,null,null,null)
D.dmY=w([D.c0D,A.r9,D.fLt],x.p)
D.f9q=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dmY,null)
D.fWZ=new B.B("Make a newspaper",null,A.VO,null,null,null,null,null,null,null,null,null)
D.caV=w([E.a3O,A.ae,D.fWZ],x.p)
D.f9r=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.caV,null)
D.c_3=new B.ae(A.k8,18,A.bM,null,null,null)
D.fNI=new B.B("Ending celebration",null,A.hp,null,null,null,null,null,null,null,null,null)
D.duk=w([D.c_3,A.bm,D.fNI],x.p)
D.f9u=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.duk,null)
D.c0o=new B.ae(A.j6,18,A.ku,null,null,null)
D.fqP=new B.F(!0,A.ku,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZt=new B.B("Write",null,D.fqP,null,null,null,null,null,null,null,null,null)
D.daZ=w([D.c0o,A.ae,D.fZt],x.p)
D.f9C=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.daZ,null)
D.fLr=new B.B("Download picture",null,A.nY,null,null,null,null,null,null,null,null,null)
D.bLs=new B.qK(A.e5,A.A,A.f,D.fLr,null)
D.bLE=new B.dl(1,A.cn,D.bLs,null)
D.dnn=w([K.arI,A.ae,D.bLE],x.p)
D.f9D=new B.c8(A.aL,A.ba,A.j,A.l,null,A.p,null,0,D.dnn,null)
D.bWD=new B.ae(A.HY,22,A.bj,null,null,null)
D.fVw=new B.B("NGMY NEWS",null,M.aaV,null,null,null,null,null,null,null,null,null)
D.d1T=w([D.bWD,A.ae,D.fVw],x.p)
D.f9N=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.d1T,null)
D.f9Z=new B.pE(!1,!1,null,U.XX,null,A.c2,null,null,null)
D.aa1=new B.iM([D.cu,D.dp,D.vj,D.Jn,D.vk,D.aL1],B.as("iM<hG>"))
D.em3={title:0,quote:1,closing:2,bio:3}
D.fbt=new B.de(D.em3,4,x.M)
D.ejJ={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.fbw=new B.de(D.ejJ,5,x.M)
D.elj={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aa3=new B.de(D.elj,8,x.M)
D.ekt={Design:0,Transitions:1,Insert:2}
D.fbF=new B.de(D.ekt,3,x.M)
D.hGs=new B.iM([D.a8a],B.as("iM<wA>"))
D.ekC={float3d:0,drift:1,pulse:2}
D.fbJ=new B.de(D.ekC,3,x.M)
D.aSS=new B.iM([D.Jk,D.Jl,D.Jm],B.as("iM<mV>"))
D.ejH={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSV=new B.de(D.ejH,14,x.M)
D.hGt=new B.de(A.i4,0,B.as("de<wA>"))
D.ekz={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UQ=new B.de(D.ekz,4,x.M)
D.ejz={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSY=new B.de(D.ejz,30,x.M)
D.ekI={circle:0,triangle:1,hexagon:2,diamond:3}
D.fca=new B.de(D.ekI,4,x.M)
D.feD=new B.av(390,844)
D.fft=new B.a5(20,20,A.Mb,null)
D.aTN=new B.a5(null,2.5,null,null)
D.ffD=new B.a5(18,18,A.Mb,null)
D.c0s=new B.ae(A.j8,19,A.c,null,null,null)
D.ffP=new B.a5(38,38,D.c0s,null)
D.bZC=new B.ae(A.zA,22,A.c,null,null,null)
D.ffS=new B.a5(40,40,D.bZC,null)
D.fgq=new B.hH(2,10,10,1.15,null)
D.aTV=new B.hH(2,16,14,0.62,null)
D.bGw=new B.S(32,30,32,40)
D.bgc=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bUD=new B.ae(A.qL,56,D.bgc,null,null,null)
D.ajy=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fsZ=new B.F(!0,D.ajy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSl=new B.B("Your books will live here.",null,D.fsZ,null,A.K,null,null,null,null,null,null,null)
D.de_=w([D.bUD,A.W,D.fSl],x.p)
D.bxf=new B.fj(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.de_,null)
D.et1=new B.D(D.bGw,D.bxf,null)
D.fgM=new B.m3(D.et1,null)
D.fSi=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new B.b0(D.fSi,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fQl=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new B.b0(D.fQl,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fVA=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fhd=new B.b0(D.fVA,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fW9=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new B.b0(D.fW9,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOY=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fhF=new B.b0(D.fOY,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2u=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new B.b0(D.h2u,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_u=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new B.b0(D.h_u,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fWi=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new B.b0(D.fWi,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fJB=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new B.b0(D.fJB,null,null,null,null,null,null,null,A.iZ,null,null,null,null,A.or,!1,null,null,null,A.t,null)
D.fLB=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fjq=new B.b0(D.fLB,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fRY=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new B.b0(D.fRY,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fRE=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fjt=new B.b0(D.fRE,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fYr=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fju=new B.b0(D.fYr,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0l=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fjz=new B.b0(D.h0l,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fFD=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fjE=new B.b0(D.fFD,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMM=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fk0=new B.b0(D.fMM,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h19=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fk2=new B.b0(D.h19,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0G=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fk6=new B.b0(D.h0G,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fEz=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new B.b0(D.fEz,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fXv=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fkh=new B.b0(D.fXv,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0e=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new B.b0(D.h0e,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h05=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fkz=new B.b0(D.h05,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fEq=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fkF=new B.b0(D.fEq,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIy=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fl6=new B.b0(D.fIy,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_i=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fli=new B.b0(D.h_i,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIk=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fly=new B.b0(D.fIk,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.boy=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d0t=w([A.iu,A.pi,D.boy,D.afZ,A.iu],x.O)
D.flW=new B.fZ(A.A,0,6.283185307179586,A.x,D.d0t,null,null)
D.da4=w([A.bM,A.c3,A.ia,D.BZ,A.bM],x.O)
D.aUt=new B.fZ(A.A,0,6.283185307179586,A.x,D.da4,null,null)
D.dpd=w([A.bT,A.bq,A.b9,A.b5,A.bj,A.bT],x.O)
D.fm0=new B.fZ(A.A,0,6.283185307179586,A.x,D.dpd,null,null)
D.d2L=w([A.qr,A.pj,A.ye,A.iu,A.qr],x.O)
D.fm1=new B.fZ(A.A,0,6.283185307179586,A.x,D.d2L,null,null)
D.dp7=w([A.aS,A.bL,A.bh,A.an,A.aS],x.O)
D.fm2=new B.fZ(A.A,0,6.283185307179586,A.x,D.dp7,null,null)
D.dxt=w([A.bx,A.b9,A.bq,A.bT,A.bx],x.O)
D.fm4=new B.fZ(A.A,0,6.283185307179586,A.x,D.dxt,null,null)
D.bjU=new B.u(1,0,1,0,A.q)
D.boT=new B.u(1,0,1,1,A.q)
D.blJ=new B.u(1,0,0,1,A.q)
D.bhB=new B.u(1,1,0,1,A.q)
D.dtj=w([A.Mt,A.Zd,D.bjU,D.boT,D.blJ,D.bhB,A.Mt],x.O)
D.fm5=new B.fZ(A.A,0,6.283185307179586,A.x,D.dtj,null,null)
D.fmk=new C.axE(2,"immersiveSticky")
D.fml=new C.axE(3,"edgeToEdge")
D.fmm=new C.axE(4,"manual")
D.foT=new B.F(!0,A.bB,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foU=new B.F(!0,A.oc,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV3=new B.F(!0,A.eW,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fps=new B.F(!0,E.nz,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new B.F(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new B.F(!0,A.eN,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fud=new B.F(!0,A.bL,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuo=new B.F(!0,A.k_,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuC=new B.t8(!0,A.JK,null,null,null,null,A.dF,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv5=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new B.F(!0,A.jD,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwc=new B.F(!0,A.aD,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euu=new B.j2(1,1,0.7568627450980392,0.027450980392156862)
D.fwg=new B.t8(!0,D.euu,null,null,null,null,A.dF,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aih=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVR=new B.F(!0,D.aih,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new B.F(!0,D.ajy,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVT=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new B.t8(!0,A.pP,null,null,null,null,A.dF,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxk=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxT=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new B.F(!0,D.aih,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KQ=new B.F(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fys=new B.F(!0,A.c3,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new B.F(!0,A.bL,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyH=new B.F(!0,A.bM,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5v,null,null,null)
D.fz0=new B.F(!0,A.c0,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzh=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new B.F(!0,A.dl,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA5=new B.F(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAf=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new B.F(!0,A.ab,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWw=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWy=new B.F(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.buG=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fCo=new B.F(!0,D.buG,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWE=new B.F(!0,E.nz,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.F(!0,A.bL,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new B.F(!0,N.lG,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvk=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.B("NEW",null,D.fvk,null,null,null,null,null,null,null,null,null)
D.fEt=new B.B("Hati ya Kuhowesha",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fEV=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fFj=new B.B("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.fG4=new B.B("Big quote mark",null,A.jy,null,null,null,null,null,null,null,null,null)
D.fG6=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fGi=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fGN=new B.B("How many slides?",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fHl=new B.B("Transfer",null,A.ci,null,null,null,null,null,null,null,null,null)
D.fqS=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.B("Luxury FX",null,D.fqS,null,null,null,null,null,null,null,null,null)
D.fI3=new B.B("Font",null,A.tK,null,null,null,null,null,null,null,null,null)
D.fIe=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fIl=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fBU=new B.F(!0,A.bL,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIv=new B.B("Example  GA847",null,D.fBU,null,null,null,null,null,null,null,null,null)
D.fIV=new B.B("Design shapes",null,A.jy,null,null,null,null,null,null,null,null,null)
D.fJ6=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fJb=new B.B("Non-stop (loop)",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fJp=new B.B("Hati ya Kuhoweya",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fJI=new B.B("Photo studio",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fKc=new B.B("Add your picture",null,A.jQ,null,null,null,null,null,null,null,null,null)
D.fuD=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKd=new B.B("Enter document code",null,D.fuD,null,A.K,null,null,null,null,null,null,null)
D.fKe=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fKj=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fs0=new B.F(!0,E.nz,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKF=new B.B("Delete this book?",null,D.fs0,null,A.K,null,null,null,null,null,null,null)
D.fwS=new B.F(!0,E.nz,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLD=new B.B("Your library",null,D.fwS,null,null,null,null,null,null,null,null,null)
D.fLI=new B.B("Delete",null,A.aVK,null,null,null,null,null,null,null,null,null)
D.fLL=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.EO,null,null,null,null,null,null,null,null,null)
D.fLW=new B.B("Element flies in",null,A.aVX,null,null,null,null,null,null,null,null,null)
D.VZ=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fMl=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fMJ=new B.B("Cancel",null,E.aW7,null,null,null,null,null,null,null,null,null)
D.fML=new B.B("The lines and circles that come with the design",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fAF=new B.F(!0,A.hw,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNe=new B.B("DOCUMENT CODE",null,D.fAF,null,null,null,null,null,null,null,null,null)
D.fO3=new B.B("Quotes",null,G.abw,null,null,null,null,null,null,null,null,null)
D.fu_=new B.F(!0,N.lG,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOd=new B.B("Add a picture",null,D.fu_,null,null,null,null,null,null,null,null,null)
D.fOl=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.VC,null,A.K,null,null,null,null,null,null,null)
D.fOp=new B.B("Look & feel",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fOu=new B.B("Rings",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fOA=new B.B("W",null,A.tK,null,null,null,null,null,null,null,null,null)
D.fOK=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fP3=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VL,null,A.K,null,null,null,null,null,null,null)
D.fP5=new B.B("Write your book",null,A.cE,null,null,null,null,null,null,null,null,null)
D.fPQ=new B.B("Add page",null,A.ci,null,null,null,null,null,null,null,null,null)
D.fQ7=new B.B("Malipo ya Awamu ya Mahari",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fus=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQm=new B.B("Create with AI",null,D.fus,null,A.K,null,null,null,null,null,null,null)
D.fQS=new B.B("Apply look",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fva=new B.F(!0,A.es,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRG=new B.B("Type your presentation below",null,D.fva,null,A.K,null,null,null,null,null,null,null)
D.fRJ=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWI,null,A.K,null,null,null,null,null,null,null)
D.fRL=new B.B("Keep it",null,A.ci,null,null,null,null,null,null,null,null,null)
D.fpL=new B.F(!0,A.cp,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRS=new B.B("Done",null,D.fpL,null,null,null,null,null,null,null,null,null)
D.fSc=new B.B("Delete",null,A.o_,null,null,null,null,null,null,null,null,null)
D.fSn=new B.B("Hati ya Kiapo cha Uongozi",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fth=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTi=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fth,null,A.K,null,null,null,null,null,null,null)
D.fTH=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fTO=new B.B("Layout",null,A.VQ,null,null,null,null,null,null,null,null,null)
D.fUu=new B.B("Print",null,A.cE,null,null,null,null,null,null,null,null,null)
D.fUD=new B.B("X",null,A.tK,null,null,null,null,null,null,null,null,null)
D.fVe=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A4.xn,null,null,null,null,null,null,null,null,null)
D.fVO=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fW1=new B.B("Hati ya Kuhowa",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fW3=new B.B("Choose a class template",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fW5=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fWc=new B.B("Download the newspaper picture",null,A.cE,null,null,null,null,null,null,null,null,null)
D.fWp=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fWw=new B.B("Done",null,A.aWv,null,null,null,null,null,null,null,null,null)
D.fWH=new B.B("Ending celebration",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fWI=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fWX=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A4.tJ,null,null,null,null,null,null,null,null,null)
D.fXY=new B.B("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.fXZ=new B.B("What would you like to do?",null,D.aVR,null,null,null,null,null,null,null,null,null)
D.fY3=new B.B("Delete",null,A.cE,null,null,null,null,null,null,null,null,null)
D.fYA=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fYE=new B.B("Hati (Documents)",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fYR=new B.B("Done",null,A.lx,null,null,null,null,null,null,null,null,null)
D.fBJ=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYV=new B.B("Delete presentation?",null,D.fBJ,null,A.K,null,null,null,null,null,null,null)
D.fZe=new B.B("After the last slide it starts again from the first",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fZq=new B.B("\ud83c\udf33",null,A.EN,null,A.K,null,null,null,null,null,null,null)
D.fZI=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fZP=new B.B("Transfer document",null,A.ng,null,null,null,null,null,null,null,null,null)
D.h__=new B.B("Add to the slides",null,A.h1,null,null,null,null,null,null,null,null,null)
D.h_m=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new B.F(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_A=new B.B("Make a book",null,D.frw,null,null,null,null,null,null,null,null,null)
D.h_E=new B.B("Books",null,A.cE,null,null,null,null,null,null,null,null,null)
D.ftS=new B.F(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_G=new B.B("Keep this page open until it finishes.",null,D.ftS,null,null,null,null,null,null,null,null,null)
D.h_I=new B.B("Making your video",null,A.dm,null,null,null,null,null,null,null,null,null)
D.h_N=new B.B("LANGUAGE",null,X.tL,null,null,null,null,null,null,null,null,null)
D.h_U=new B.B("Use this ending",null,A.cE,null,null,null,null,null,null,null,null,null)
D.h01=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h03=new B.B("Upload a different logo",null,A.ci,null,null,null,null,null,null,null,null,null)
D.h0k=new B.B("Delete from the database?",null,A.jQ,null,null,null,null,null,null,null,null,null)
D.h0m=new B.B("H",null,A.tK,null,null,null,null,null,null,null,null,null)
D.h0M=new B.B("NGMY Quotes",null,A.dm,null,null,null,null,null,null,null,null,null)
D.h1f=new B.B("Cover",null,D.aWE,null,null,null,null,null,null,null,null,null)
D.h1j=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h1k=new B.B("Each page becomes its own slide you can present",null,A.ho,null,null,null,null,null,null,null,null,null)
D.h1G=new B.B("Y",null,A.tK,null,null,null,null,null,null,null,null,null)
D.h1S=new B.B("Crop the picture",null,A.lx,null,null,null,null,null,null,null,null,null)
D.h1Z=new B.B("Edit text",null,A.KL,null,null,null,null,null,null,null,null,null)
D.h4j=B.dR("a9J")
D.hqT=new B.bC("slides-create-kiapo",x.W)
D.F0=new C.az_(0,"none")
D.b_N=new C.az_(1,"zipCrypto")
D.b_O=new C.az_(2,"aes")
D.htm=new F.Qw("","",null)
D.huu=new C.beI(null)
D.hvA=new C.a01(null)
D.hyz=new C.aeG(null)
D.hyB=new C.aGe(null)
D.hBm=new C.a1f(null)
D.hC7=new C.a1M(null)
D.hCK=new C.bwK(null)})();(function staticFields(){$.huq=null
$.hur=null
$.hus=null
$.hut=null
$.hby=B.wZ("_lastQuoRemDigits")
$.hbz=B.wZ("_lastQuoRemUsed")
$.azn=B.wZ("_lastRemUsed")
$.hbA=B.wZ("_lastRem_nsh")
$.qx=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Cm=B.T(x.N,x.I)
$.cfD=!1
$.hq4=null
$.Cn=B.T(x.N,B.as("a9<n,n>"))
$.hzr=B.T(B.as("lb"),x.N)
$.hzD=B.T(B.as("lb"),x.E)
$.hxy=!1
$.bCo="q"
$.RB=0
$.Dq=B.T(x.N,B.as("ai<Af>"))
$.hxV=!1
$.hdi=!1
$.hEA=null
$.i9e=B.T(x.N,B.as("aB<n?>"))
$.Lm=""
$.jc=0
$.hrg=function(){var w=x.N
return B.T(w,w)}()
$.hrf=B.T(x.N,x.R)
$.hdD=!1
$.ahk=B.T(x.N,x.E)
$.heu=0
$.bn_=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"izR","DN",()=>C.bcb(0))
w($,"izP","a43",()=>C.bcb(1))
w($,"izQ","hIt",()=>C.bcb(2))
w($,"izO","hiD",()=>$.a43().vI(0))
w($,"izM","hIr",()=>C.bcb(1e4))
w($,"izN","hIs",()=>B.F4(8))
w($,"ivx","hGm",()=>B.F4(0))
w($,"ivF","hGq",()=>B.F4(0))
w($,"ivE","hGp",()=>B.c2F(0))
w($,"iDO","hKC",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6Z.gdO(D.a6Z),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iEf","bGW",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nc(new C.fU6(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.nc(new C.fU7(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.nc(new C.fU8(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.nc(new C.fUj(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.nc(new C.fUo(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.nc(new C.fUp(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.nc(new C.fUq(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.nc(new C.fUr(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.nc(new C.fUs(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.nc(new C.fUt(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.nc(new C.fUu(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.nc(new C.fU9(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.nc(new C.fUa(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.nc(new C.fUb(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.nc(new C.fUc(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.nc(new C.fUd(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.nc(new C.fUe(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.nc(new C.fUf(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.nc(new C.fUg(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.nc(new C.fUh(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.nc(new C.fUi(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.nc(new C.fUk(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.nc(new C.fUl(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.nc(new C.fUm(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.nc(new C.fUn(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.as("O<Fx>"))})
w($,"iDR","hKE",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["te5TpoIDVf0NkCZKmSb4MwUaFmg="]=a.current})($__dart_deferred_initializers__);