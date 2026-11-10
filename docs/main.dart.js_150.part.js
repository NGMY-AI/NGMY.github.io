((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ai,A6,Aj,Ak,V,A7,Al,Am,C={
u8(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h5V(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
K6(d){var w
if(d===0)return $.Dl()
if(d===1)return $.a3a()
if(d===2)return $.hBN()
if(Math.abs(d)<4294967296)return C.bbh(A.o.N(d))
w=C.hWF(d)
return w},
bbh(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.u8(4,w)
return new C.o8(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.u8(1,w)
return new C.o8(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.u8(2,w)
return new C.o8(v===0?!1:s,w,v)}v=A.o.ao(A.o.gakX(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ao(d,65536)}v=C.u8(v,w)
return new C.o8(v===0?!1:s,w,v)},
hWF(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dl()
w=$.hBM()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.ll(A.aG.gaR(w))
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
q=new C.o8(!1,r,4)
if(s<0)p=q.mx(0,-s)
else p=s>0?q.dU(0,s):q
return p},
h5W(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hof(d,e,f,g){var w,v,u,t,s,r=A.o.ao(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fM(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hoa(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16)
if(A.o.F(f,16)===0)return C.h5W(d,e,s,g)
w=e+s+1
C.hof(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hWI(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fM(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fM(u,r)}w&2&&B.aj(g)
g[n]=o},
cL9(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hWG(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbi(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hog(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.ao(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.ao(r,65536)}},
hWH(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ea((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o8:function o8(d,e,f){this.a=d
this.b=e
this.c=f},
cLa:function cLa(){},
cLb:function cLb(){},
cLc:function cLc(d,e){this.a=d
this.b=e},
cLd:function cLd(d){this.a=d},
aSB:function aSB(d,e){this.a=d
this.b=e},
he1(d,e,f){var w=new C.Sh(d,A.o.ao(Date.now(),1000),e)
w.Q=f
return w},
Sh:function Sh(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4k:function a4k(d,e){this.a=d
this.b=e},
bJo:function bJo(d){this.a=d
this.c=this.b=0},
hF1(){return new C.bHJ()},
bHJ:function bHJ(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cDj:function cDj(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hWn(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.cn(d.gd_v(d)))
v=f*2+2
u=C.hlU(C.hlW(),64)
t=new C.cmt(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cmu(e,1000,v)
s=new Uint8Array(v)
return A.aG.ds(s,0,t.cNA(w,0,s,0))},
cDh:function cDh(d,e){this.c=d
this.d=e},
ay8:function ay8(d,e){this.a=d
this.b=e},
cDk:function cDk(d,e,f,g){var _=this
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
ba_:function ba_(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cDi:function cDi(){this.a=$},
hnG(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hEL(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bGj:function bGj(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hbG(d,e){e&=31
return(d&$.qo[e])<<e>>>0},
nD(d,e){e&=31
return(d>>>e|C.hbG(d,32-e))>>>0},
hlV(d){var w,v=new C.atH()
if(B.iQ(d))v.aLs(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hlW(){var w=C.hlV(0),v=new Uint8Array(4),u=x.S
u=new C.cmv(w,v,A.ET,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.kK(0)
return u},
hlU(d,e){var w=new C.cmr(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cmq:function cmq(){},
cmu:function cmu(d,e,f){this.a=d
this.b=e
this.c=f},
cmo:function cmo(){},
atG:function atG(d){this.a=d},
cmt:function cmt(d){this.a=$
this.b=d
this.c=$},
cmp:function cmp(){},
cmn:function cmn(){},
atH:function atH(){this.b=this.a=$},
cms:function cms(){},
cmv:function cmv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cmr:function cmr(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cmm:function cmm(){},
cml:function cml(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bRo:function bRo(){},
bRp:function bRp(d){this.a=d},
hZF(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bbx:function bbx(){},
cwR:function cwR(){},
bSr:function bSr(d,e){this.a=d
this.b=!1
this.c=e},
bSs:function bSs(){},
i7M(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
awK(d){var w=0,v=B.j(x.H),u
var $async$awK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.ffh?2:4
break
case 2:w=5
return B.b(A.kt.h3("SystemChrome.setEnabledSystemUIMode",d.a6(),u),$async$awK)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kt.h3("SystemChrome.setEnabledSystemUIOverlays",C.i7M(null),u),$async$awK)
case 6:case 3:return B.h(null,v)}})
return B.i($async$awK,v)},
awN:function awN(d,e){this.a=d
this.b=e},
a8V:function a8V(d){this.a=d},
iax(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fBK(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bf(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fBK:function fBK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aof(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aof=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ahp("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$aof)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cF(t,new C.c2m(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a7(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c2n())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aof,v)},
aoh(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aof(),$async$aoh)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gS(r)
p=J.r(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).a8().ae()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nC("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.ah(),"savedAt",l],t,q),null),$async$aoh)
case 7:if(!f){w=5
break}s.n(0,p,B.H(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
w=10
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).a8().ae()],t,q),null),$async$aoh)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoh,v)},
c2o(d){return C.hKC(d)},
hKC(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c2o=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ahp("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.i3),$async$c2o)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Wn(B.a2(q,x.N,x.z))
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
return B.i($async$c2o,v)},
aog(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aog=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aof(),$async$aog)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nG(r,new C.c2p(d))
w=4
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).a8().ae()],x.N,x.z),null),$async$aog)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aQB("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aog)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aog,v)},
c2m:function c2m(){},
c2n:function c2n(){},
c2p:function c2p(d){this.a=d},
ikC(d,e,f){return B.bV(A.L,null,new C.fSm(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fSm:function fSm(d,e,f){this.a=d
this.b=e
this.c=f},
a1q:function a1q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKg:function aKg(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fdQ:function fdQ(d,e){this.a=d
this.b=e},
fdU:function fdU(d){this.a=d},
fdV:function fdV(d){this.a=d},
fdW:function fdW(d,e,f){this.a=d
this.b=e
this.c=f},
fdR:function fdR(d){this.a=d},
fdS:function fdS(d){this.a=d},
fdT:function fdT(d,e){this.a=d
this.b=e},
fdL:function fdL(d){this.a=d},
fdJ:function fdJ(d){this.a=d},
fdK:function fdK(d){this.a=d},
fdM:function fdM(d){this.a=d},
fdN:function fdN(d){this.a=d},
fe_:function fe_(d,e){this.a=d
this.b=e},
fdZ:function fdZ(d,e){this.a=d
this.b=e},
fdP:function fdP(d,e,f){this.a=d
this.b=e
this.c=f},
fdO:function fdO(d,e,f){this.a=d
this.b=e
this.c=f},
fdX:function fdX(d,e){this.a=d
this.b=e},
fdY:function fdY(d,e){this.a=d
this.b=e},
fe2:function fe2(d){this.a=d},
fe3:function fe3(d,e){this.a=d
this.b=e},
fe1:function fe1(d,e){this.a=d
this.b=e},
fe0:function fe0(){},
hqG(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aM(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cF(v,new C.flq(),v.$ti.k("M.E"),x.ea)
u=B.a7(v).k("Z<M.E>")
v=B.C(new B.Z(v,new C.flr(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2o(d){return C.ibN(d)},
ibN(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2o=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fEI(n)
t=4
j=m
i=C
w=7
return B.b(B.a2Y("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2o)
case 7:j.$1(i.hqG(f))
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
return B.b(B.az(),$async$a2o)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hqG(B.aT(J.r(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bd<2>")
o=p.k("Z<M.E>")
j=B
i=B
h=new B.bd(n,p)
g=C
w=13
return B.b(C.flz(d),$async$a2o)
case 13:p=j.C(new i.Z(h,new g.fEG(f),o),o.k("M.E"))
A.d.aZ(p,new C.fEH())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2o,v)},
ai_(d,e){return C.ikh(d,e)},
ikh(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ai_=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fRR(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aq(n,null)
q=!1
t=4
w=7
return B.b(B.ahS("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ai_)
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
return B.b(B.az(),$async$ai_)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ai_)
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
return B.i($async$ai_,v)},
flz(d){return C.i02(d)},
i02(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$flz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$flz)
case 7:r=f
q=r.tA("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.k5(q,B.T(q).c)
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
return B.i($async$flz,v)},
agQ(d,e){return C.iaq(d,e)},
iaq(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agQ=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agQ)
case 6:s=g
r=B.aX(x.N)
q=s.tA("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h9(r,q)
J.ca(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a7(q).k("cs.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$agQ)
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
return B.b(C.a2o(d),$async$agQ)
case 8:n=g
J.nG(n,new C.fBo(e))
w=9
return B.b(C.ai_(d,n),$async$agQ)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agQ,v)},
ikH(d,e){return B.a4(d,!1).cc(B.eh(new C.fSI(e),!0,null,x.H))},
hWK(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d5(w.d,new C.cMx())},
oA:function oA(d,e,f){this.a=d
this.b=e
this.c=f},
flq:function flq(){},
flr:function flr(){},
fEI:function fEI(d){this.a=d},
fEG:function fEG(d){this.a=d},
fEH:function fEH(){},
fRR:function fRR(){},
fBo:function fBo(d){this.a=d},
fSI:function fSI(d){this.a=d},
Z6:function Z6(d,e){this.c=d
this.a=e},
ayH:function ayH(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cMx:function cMx(){},
cMz:function cMz(d,e){this.a=d
this.b=e},
cMC:function cMC(d){this.a=d},
cMD:function cMD(d){this.a=d},
cMB:function cMB(){},
cME:function cME(d,e){this.a=d
this.b=e},
cMA:function cMA(d){this.a=d},
cMF:function cMF(){},
cMy:function cMy(d,e){this.a=d
this.b=e},
cMG:function cMG(){},
cMt:function cMt(d){this.a=d},
cMr:function cMr(d){this.a=d},
cMs:function cMs(d){this.a=d},
cMu:function cMu(d,e){this.a=d
this.b=e},
cMq:function cMq(d){this.a=d},
cMp:function cMp(d){this.a=d},
cMn:function cMn(d,e){this.a=d
this.b=e},
cMo:function cMo(d){this.a=d},
cMw:function cMw(){},
cMv:function cMv(d){this.a=d},
cMm:function cMm(d,e){this.a=d
this.b=e},
cMl:function cMl(d,e){this.a=d
this.b=e},
cMk:function cMk(d,e){this.a=d
this.b=e},
cMH:function cMH(d){this.a=d},
Z4:function Z4(d,e,f){this.c=d
this.d=e
this.a=f},
aG3:function aG3(d,e,f){this.a=d
this.b=e
this.c=f},
ayD:function ayD(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cLO:function cLO(d){this.a=d},
cLN:function cLN(d){this.a=d},
cLQ:function cLQ(d,e,f){this.a=d
this.b=e
this.c=f},
cLY:function cLY(){},
cLZ:function cLZ(d){this.a=d},
cLR:function cLR(d,e,f){this.a=d
this.b=e
this.c=f},
cLP:function cLP(d,e){this.a=d
this.b=e},
cLT:function cLT(d,e){this.a=d
this.b=e},
cLU:function cLU(d,e){this.a=d
this.b=e},
cLV:function cLV(d,e){this.a=d
this.b=e},
cLS:function cLS(d){this.a=d},
cLX:function cLX(d){this.a=d},
cLW:function cLW(d,e){this.a=d
this.b=e},
cM3:function cM3(d){this.a=d},
cM_:function cM_(d,e){this.a=d
this.b=e},
cM0:function cM0(d,e){this.a=d
this.b=e},
cM1:function cM1(d,e){this.a=d
this.b=e},
cM2:function cM2(d,e){this.a=d
this.b=e},
ayF:function ayF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ie9(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ed(v,x.cK).bK(new C.fJf(),x.H).eR(new C.fJg())}}else if(s)C.hsd()}catch(t){}},
hsd(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ed(v,x.cK).eR(new C.fpH())}catch(u){}},
iec(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fJf:function fJf(){},
fJg:function fJg(){},
fpH:function fpH(){},
hwU(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ek(v,w,"").split(":"))},
hwR(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lj)return null
return A.a.b5(w,14)},
hao(d){var w
if(d.b!==D.lj)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b5(w,21)},
ieC(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hwV(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
iex(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.lc(0,f)
t=x.N
u=B.cF(u,new C.fKe(),B.a7(u).k("M.E"),t)
s=B.C(u,B.a7(u).k("M.E"))
if(s.length===0)return B.U(t,t)
for(u=v.lc(0,f),u=new B.K5(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.RZ(A.a.ar(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.RZ(A.a.b5(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
iev(d,e){var w,v,u,t,s,r=B.a7(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fKd())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aRA(w,u,s,0)}return w},
iez(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a5T:$.hDP(),s=x.N,r=B.U(s,s)
for(s=t.gdV(t),s=s.gag(s);s.C();){w=s.gS(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
hwS(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fms(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hwU(q)===e)return q}return null},
ieA(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b5(v,u)
return A.d.gI(D.HH).a},
ieB(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aeC(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aeC(0,0,0)
v=C.fms(b6,b0)
u=C.fms(b5,b0)
t=0
if(v!=null&&u!=null){s=C.iez(b2,C.iex(C.hwS(b2),v.r))
if(s.a!==0){u.r=C.iev(C.hwS(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hwU(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.en(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fms(b6,n)
i=C.fms(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.hao(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hwR(a8)===a0||C.hao(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Rw(a1,new C.fKk(a0),!0)
a1=f.z
a6=Date.now()
a9=$.ja
$.ja=a9+1
A.d.M(a1,new C.eP(""+1000*a6+"_"+a9,D.lj,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,d.at,D.bi,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cn,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.aeC(k,t,e)},
iew(d){var w=C.ieA(d)
if(d.w==="hati_kuhowa")return C.hwe("",w)
return C.hwd("",w)},
fKe:function fKe(){},
fKd:function fKd(){},
fKk:function fKk(d){this.a=d},
hrW(){var w=new B.V(Date.now(),0,!1),v=new C.foK()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hax(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fLc(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lj&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hx8(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fLc(d)
w=B.bk(u)
if(w==null)return!C.fLc(d)
return new B.V(Date.now(),0,!1).a8().d1(w.a8().bS(18e9))},
ifh(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).a8().ae()},
hOF(d){return A.a.i(d).toLowerCase()},
aqC(d){return C.hOH(d)},
hOH(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aqC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aqC)
case 7:r=f
p=r.tA("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Y:p
o=q
o=new B.N(o,C.iiT(),B.T(o).k("N<1,m>")).c_(0,new C.cdF())
o=B.df(o,o.$ti.k("M.E"))
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
return B.i($async$aqC,v)},
aqB(d,e){return C.hOG(d,e)},
hOG(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqB=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqC(d),$async$aqB)
case 3:r=g
if(!J.ca(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqB)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qy(r)),$async$aqB)
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
return B.i($async$aqB,v)},
aqD(d,e){return C.hOI(d,e)},
hOI(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqD=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqC(d),$async$aqD)
case 3:r=g
if(!J.hu(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqD)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qy(r)),$async$aqD)
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
return B.i($async$aqD,v)},
VL(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$VL=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h3g&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$VL)
case 7:r=a7
q=B.aT(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aM(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.k0(p),d=d.gag(d),a0=x.z;d.C();){n=d.gS(d)
if(f.b(n.b))J.aJ(o,J.k(n.a),C.Wn(B.a2(f.a(n.b),e,a0)))}$.a7J=o}}t=2
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
return B.b(B.c8(),$async$VL)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uo("civic_hati_kiapo_uongozi",null,A.ep),$async$VL)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.k0(f.a(J.r(l,"byState"))),e=e.gag(e),d=x.z;e.C();){j=e.gS(e)
if(!f.b(j.b))continue
J.aJ(k,J.k(j.a),C.Wn(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a7(o).k("cI<1,2>")).gag(0);o.C();){f=o.d
f.toString
i=f
h=$.a7J.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcE()
else f=!0
f=!f}else f=!0
if(f)$.a7J.n(0,i.a,i.b)}w=20
return B.b(C.aqE(),$async$VL)
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
case 16:case 9:$.h3g=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VL,v)},
aqE(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqE=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqE)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7J,o=new B.cI(o,B.a7(o).k("cI<1,2>")).gag(0);o.C();){n=o.d
n.toString
q=n
J.aJ(r,q.a,q.b.ah())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aq(r,null)),$async$aqE)
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
return B.i($async$aqE,v)},
b0D(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b0D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.VL(!1),$async$b0D)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7J.h(0,t)
r=s==null?null:s.hM()
if(r==null){u=null
w=1
break}u=C.bDQ(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0D,v)},
a7K(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7K=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hM()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7J.n(0,d,o)
$.h3g=!0
w=3
return B.b(C.aqE(),$async$a7K)
case 3:w=4
return B.b(B.c8(),$async$a7K)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7J,n=new B.cI(n,B.a7(n).k("cI<1,2>")).gag(0);n.C();){l=n.d
l.toString
q=l
J.aJ(r,q.a,q.b.ah())}w=9
return B.b(B.nC("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).a8().ae()],e,x.z),null),$async$a7K)
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
return B.i($async$a7K,v)},
aqF(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a6p(A.eK),$async$aqF)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fl(),$async$aqF)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b0C(t,d),$async$aqF)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqF,v)},
b0C(d,e){return C.hOJ(d,e)},
hOJ(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0C=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b0C)
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
p=n.iu("media")
w=8
return B.b(p.xi(q,new Uint8Array(B.cn(d)),D.bHm),$async$b0C)
case 8:n=p.CR(q)
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
return B.i($async$b0C,v)},
KV(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.ew(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.cn,D.cV,l,m,n)},
foa(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.fa,j,k,l)},
h7t(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.k.E(i*0.0017,0.02,0.06)
return C.ew(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cD,A.U,"",v,w,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.cn,D.cV,g,e,f)},
fnJ(d,e,f,g){return C.foa(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h7u(d,e,f,g,h,i,j,k){var w=C.cE()
return C.ew(A.qS,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.cn,D.cV,g,e,f)},
hrV(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ek(v,w,"").split(":"))},
bDQ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hrV(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lj&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hM()}h=C.ha2(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.C0(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hrV(m)
if(l!=null&&r.aj(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lj&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fJd(a2))}else A.d.bs(a1.z,new C.fJe())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fLc(a0))a0.ax=a6.f.a8().ae()
return a0},
ha2(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fM_(D.a6V),l=C.cE(),k=x.u,j=B.a([C.ew(A.bj,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cE(),m,"","",0,!1,"",0,D.bi,q,2,"",0,0,"",D.cn,D.lO,1,0,0)],k),i=B.a([],k)
i.push(C.KV("NGMY",A.K,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KV("TAREHE:",A.bj,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h7t("tarehe",0.8059999999999999,0.026,0.18,A.bj,16,p,C.hrW()))
i.push(C.fnJ(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KV("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KV("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cD,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.foa(0,0.002,D.fD,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h7u("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h7u("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h7u("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.foa(268435456,0.175,D.bi,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KV("VIDEO YA KIAPO",A.bj,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ew(A.bj,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bi,q,2,"",0,0,"",D.cn,D.lO,0.77,0.115,0.492))
i.push(C.KV("Rais Anayeapa:",A.bj,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KV("Jina:",A.bj,p,13,A.bp,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h7t("rais_jina",0.195,0.6930000000000001,0.62,A.bj,13,p,""))
i.push(C.fnJ(0.195,0.7130000000000001,0.62,n))
i.push(C.KV("Sahihi:",A.bj,p,13,A.bp,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ew(A.bj,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.cn,D.fa,0.38,0.21500000000000002,0.73))
i.push(C.fnJ(0.21500000000000002,0.795,0.38,n))
i.push(C.KV("Tarehe:",A.bj,p,13,A.bp,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h7t("rais_tarehe",0.745,0.74,0.2,A.bj,12,p,C.hrW()))
i.push(C.fnJ(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.foa(0,0.032,D.bi,o,1,"state_box",0.72,0.14,0.875),C.KV("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bp,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rL(4294967035,t,0,0,j,l,D.qH,"","",u,D.dh)
return C.C0(t,t,t,t,D.oB,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ah0(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah0=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.fa1)
w=1
break}w=3
return B.b(C.VL(!0),$async$ah0)
case 3:w=4
return B.b(C.b0D(p),$async$ah0)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hx8(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.bjv,null,new C.fE3(p),f,!0,!0,!1,A.lP,!1,!1,x.N),$async$ah0)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ck(null,null,!0,null,new C.fE4(),f,null,!0,!0,x.y),$async$ah0)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.ha2(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.ha2(p))
case 1:return B.h(u,v)}})
return B.i($async$ah0,v)},
foK:function foK(){},
cdF:function cdF(){},
fJd:function fJd(d){this.a=d},
fJe:function fJe(){},
fE3:function fE3(d){this.a=d},
fE1:function fE1(d){this.a=d},
fE2:function fE2(d){this.a=d},
fE4:function fE4(){},
fE_:function fE_(d){this.a=d},
fE0:function fE0(d){this.a=d},
ar9:function ar9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aES:function aES(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ehE:function ehE(d){this.a=d},
ehC:function ehC(d){this.a=d},
ehD:function ehD(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehG:function ehG(d){this.a=d},
wP(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.ew(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bi,4280172719,2,d,0,0,"",D.cn,D.cV,l,m,n)},
hrx(d,e,f){var w=4291404327
return B.a([C.qn(0,f,D.eT,w,2,"ring_l",f,d-f*0.42,e),C.qn(0,f,D.eT,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fn9(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qn(4294967288,f,D.eT,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qn(h,s,D.eT,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qn(h,f*0.46,D.eT,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qn(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.fa,j,k,l)},
fn8(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ew(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cD,A.U,"",v,w,null,"","",0,!1,"",0,D.bi,4280172719,2,l,0,0,"",D.cn,D.cV,g,e,f)},
bBf(d,e,f,g){return C.qn(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hrw(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qn(0,0.036,D.bi,h,1.4,"banner_box_"+d,w,v,e),C.wP(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hwT(){var w=new B.V(Date.now(),0,!1),v=new C.fKj()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hry(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wP(r+".",A.bj,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fn8("witness_"+d+"_"+r+"_name",q,g,p,A.bj,!0,16,j,"[Jina la Shahidi]"),C.bBf(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wP("Sahihi:",A.bj,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.cn,D.fa,s,t,g-0.004),C.bBf(t,g+0.044,s,w)],x.u)},
ahr(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.doa,D.cqQ,D.dg9,D.di5],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gag(s[w]);v.C();){u=v.gS(0)
if(u.a===d)return u}return null},
h6J(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fM_(d.d),v=B.a([C.ew(A.bj,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),w,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.cn,D.lO,1,0,0)],x.u)
A.d.v(v,C.i2A(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i2A(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wP("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hrx(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hrx(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fn9(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fn9(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wP("\ud83c\udf33",A.K,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qn(0,0.062,D.eT,b1,1.6,"crest_o",0.11,0.445,0.012),C.qn(0,0.046,D.eT,b1,1,"crest_i",0.084,0.458,0.02),C.wP("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qn(0,0.002,D.fD,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qn(b9,0.016,D.lk,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qn(0,0.002,D.fD,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wP("TAREHE:",A.bj,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fn8("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bj,!1,21,b9,C.hwT()),C.bBf(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wP(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qn(c0,0.0026,D.bi,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qn(c3.e,0.138,D.bi,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.ew(A.bj,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cz,"",0.128,s,a9,"","",0,!1,"",0,D.bi,b3,2,c5,0,0,"",D.cn,D.cV,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qn(0,0.036,D.bi,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.ew(A.K,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bi,b3,2,c7,0,0,"",D.cn,D.cV,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hrw(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wP(c9,A.bj,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fn8("mahari_"+p,0.132,k,m,A.bj,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.ja
$.ja=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.ja
$.ja=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eP(""+1000*i+"_"+h,D.cV,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bj,a9,D.bi,b2,b3,2,0,!1,s,0,D.cn,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fa,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.fD,0,b5,0.8,0,!1,g,0,D.cn,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.ja
$.ja=p+1
i=Date.now()
h=$.ja
$.ja=h+1
g=Date.now()
f=$.ja
$.ja=f+1
e=Date.now()
a3=$.ja
$.ja=a3+1
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cV,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dV,a9,D.bi,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cn,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fa,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.bi,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cn,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cV,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.K,a9,D.bi,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cn,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fa,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.bi,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cn,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hrw("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a6K||w===D.a6M||w===D.a6J||w===D.a6L){w=t-0.008
A.d.v(c2,C.fn9(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fn9(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qn(0,a4,D.bi,c0,1.3,"wit_table_border",0.82,0.09,t),C.qn(c0,a4,D.bi,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qn(0,0.0022,D.fD,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wP("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wP("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hry("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hry("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qn(0,0.11,D.bi,c0,1.2,"mw_box",0.82,0.09,t),C.wP("MWANDISHI",A.bj,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wP("Jina:",A.bj,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fn8("mwandishi_jina",0.215,w,0.3116,A.bj,!0,15,b9,""),C.bBf(0.215,p,0.3116,b5),C.wP("Sahihi:",A.bj,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.ew(A.bj,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.cn,D.fa,0.3161999999999999,0.5738,s-0.044),C.bBf(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qn(0,0.032,D.bi,c0,1,"state_box",0.7,0.15,a8),C.wP("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
iey(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.haH(d.d),p=new C.fKf(s),o=new C.fKg(s),n=d.z,m=n===D.a6K||n===D.a6M||n===D.a6J||n===D.a6L,l=n===D.aIr||n===D.a6N||n===D.aIs,k=B.bS(0,B.fT(q,A.A,t,t,A.ci,A.bX,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a6N?26:16
i.push(new C.fKi().$1$size(w))}if(n===D.aIt)i.push(D.fRM)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iJ,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.K(r,A.r,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aRQ,p.$1$w(0.9),D.aRQ,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.be5,t,n,w,t,t,A.n),t,t,t,t,A.alz,t,t,t))
i.push(A.am)
i.push(new C.fKh(r).$1("NIMETOWE"))
i.push(A.fG)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Ng,new B.cd(A.aM,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bA(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b2)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a_,t,A.b3,A.t,B.a([k,new B.D(A.aka,B.x(i,A.ak,t,A.e,A.i,0,A.p),t)],j),t)},
hwd(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahr(e,t)
if(r==null)r=A.d.gI(D.HH)
w=C.cE()
v=C.rL(r.e,t,0,0,C.h6J(r,0.165,y.O,D.diH,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qH,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.C0(t,t,t,t,D.oB,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hwe(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahr(e,t)
if(r==null)r=A.d.gI(D.HH)
w=C.cE()
v=C.rL(r.e,t,0,0,C.h6J(r,0.165,y.f,D.de7,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qH,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.C0(t,t,t,t,D.oB,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFb(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fWa(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFb,v)},
ah1(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah1=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fE7(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mq,null,new C.fE8(p),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ah1)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hM())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFb(d,"Hati ya Kuhowa",D.HH),$async$ah1)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LA(d,"Tafuta jimbo\u2026","",A.kn,"Chagua jimbo"),$async$ah1)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hwd(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ah1,v)},
ah2(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah2=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fEb(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mq,null,new C.fEc(p),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ah2)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hM())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFb(d,"Hati ya Kuhoweya",D.HH),$async$ah2)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LA(d,"Tafuta jimbo\u2026","",A.kn,"Chagua jimbo"),$async$ah2)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hwe(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ah2,v)},
ah3(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ah3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fEf(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mq,null,new C.fEg(m),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ah3)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hM())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFb(d,"Malipo ya Awamu ya Mahari",D.RG),$async$ah3)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LA(d,"Tafuta jimbo\u2026","",A.kn,"Chagua jimbo"),$async$ah3)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahr(s,D.RG)
if(q==null)q=A.d.gI(D.RG)
n=C.cE()
p=C.rL(q.e,null,0,0,C.h6J(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d8I,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qH,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.C0(null,null,null,null,D.oB,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ah3,v)},
xS:function xS(d,e){this.a=d
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
fKj:function fKj(){},
fKf:function fKf(d){this.a=d},
fKh:function fKh(d){this.a=d},
fKi:function fKi(){},
fKg:function fKg(d){this.a=d},
fWa:function fWa(d,e){this.a=d
this.b=e},
adL:function adL(d,e,f){this.c=d
this.d=e
this.a=f},
e4b:function e4b(d,e,f){this.a=d
this.b=e
this.c=f},
e4a:function e4a(d,e){this.a=d
this.b=e},
e49:function e49(d,e){this.a=d
this.b=e},
ad9:function ad9(d,e,f){this.c=d
this.d=e
this.a=f},
fE7:function fE7(){},
fE8:function fE8(d){this.a=d},
fE5:function fE5(d){this.a=d},
fE6:function fE6(d){this.a=d},
fEb:function fEb(){},
fEc:function fEc(d){this.a=d},
fE9:function fE9(d){this.a=d},
fEa:function fEa(d){this.a=d},
fEf:function fEf(){},
fEg:function fEg(d){this.a=d},
fEd:function fEd(d){this.a=d},
fEe:function fEe(d){this.a=d},
KY(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.ew(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.cn,D.cV,k,l,m)},
D2(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.fa,j,k,l)},
hsg(d,e,f){return C.D2(0,0.002,D.fD,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bBp(d,e,f,g,h){return B.a([C.D2(4294967288,0.032,D.bi,4291404327,1.15,"pill_"+d,g,f,e),C.KY(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h7y(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.D2(0,0.002,D.fD,g,1,"orn_l_"+t,u,d,v),C.D2(h,0.016,D.lk,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.D2(0,0.002,D.fD,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1N(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KY(d,A.bj,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.ew(A.K,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cD,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.cn,D.cV,t,u,g-0.002),C.hsg(u,g+0.018,t)],x.u)},
hsh(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.D2(h,0.028,D.bi,h,0,"chv_"+d,g,e,f),C.D2(w,0.024,D.lk,w,0,"chv_l_"+d,0.024,e-0.008,v),C.D2(w,0.024,D.lk,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KY(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bBo(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KY("Sahihi:",A.bj,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.cn,D.fa,v,w,f-0.006),C.hsg(w,f+0.016,v)],x.u)},
haI(d){var w,v
for(w=0;w<19;++w){v=D.RU[w]
if(v.a===d)return v}return null},
igR(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahr(A.a.b5(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahr(A.a.b5(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b5(k,18)
w=C.ahr(u,D.RG)
v=w==null?l:w.d
if(v==null){w=C.ahr(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.haI(A.a.b5(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.ht5.aa(0)
$.hti.aa(0)
t=C.fM_(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hbO(d){var w=0,v=B.j(x.T),u
var $async$hbO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fXD(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hbO,v)},
xV:function xV(d,e){this.a=d
this.b=e},
nU:function nU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bkN:function bkN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fXD:function fXD(){},
adO:function adO(d){this.a=d},
emq:function emq(d,e){this.a=d
this.b=e},
emp:function emp(d){this.a=d},
emo:function emo(d,e){this.a=d
this.b=e},
aft:function aft(d,e,f){this.c=d
this.d=e
this.a=f},
haH(d){return $.hti.c3(0,d,new C.fM1(d))},
fM_(d){return $.ht5.c3(0,d,new C.fM0(d))},
fG(d){return B.h0Q(d>>>16&255,d>>>8&255,d&255,255)},
i5J(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.huq(4294570461,4293910718,4284234270,u)
case 1:return C.huq(4294635750,4293975240,t,4292912216)
case 2:w=C.flH(s,4294505966,r)
C.bB9(w,14,16,p)
C.kF(w,8,9,464,836,u,1.2)
C.CZ(w,2,2,1,1,u,10)
C.CZ(w,478,2,-1,1,u,10)
C.CZ(w,2,852,1,-1,u,10)
C.CZ(w,478,852,-1,-1,u,10)
return w
case 3:return C.flH(4294966515,4294373082,4289102906)
case 4:return C.i0j(C.flH(4294376440,4293653998,4290287194))
case 5:w=C.flH(4294965238,4294437098,4288444980)
C.bB9(w,14,16,4283043359)
C.kF(w,6,7,468,840,u,1)
C.kF(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,n,4294175448)
C.t5(v,n)
C.kF(v,24,24,432,806,4286209070,1)
C.a1A(v,12,12,468,12,o,3,20)
C.a1A(v,12,842,468,842,o,3,20)
C.a1A(v,12,12,12,842,o,3,20)
C.a1A(v,468,12,468,842,o,3,20)
return v
case 7:return C.hZj(4294440434,4293518297,4280228630,r)
case 8:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,m,4293911504)
C.t5(v,m)
C.kF(v,28,28,424,798,l,1)
C.fvh(v,28,28,l,k)
C.fvh(v,452,28,l,k)
C.fvh(v,28,826,l,k)
C.fvh(v,452,826,l,k)
return v
case 9:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,j,4294111986)
C.t5(v,j)
C.kF(v,18,18,444,818,4292401368,0.7)
B.iS(v,!0,C.fG(p),0,13,0,853)
return v
case 10:return C.i2m(i,4294173372)
case 11:return C.i3t(4294439140,4293449662)
case 12:return C.hZb(h,4294239432)
case 13:return C.i2V(4294244340,4293193448)
case 14:return C.i7j(4294505710,4293780694)
case 15:return C.fkD(4294966259,4294439138,o,p,q)
case 16:return C.fkD(4294966776,4294178544,o,g,g)
case 17:return C.fkD(4294965493,4294504170,o,4286200650,q)
case 18:return C.fkD(4294966519,4294373862,o,p,p)
case 19:return C.i1s()
case 20:return C.i1t()
case 21:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,h,4293976768)
C.t5(v,h)
C.bB9(v,14,16,p)
B.iS(v,!0,C.fG(u),4,475,4,9)
B.iS(v,!0,C.fG(u),4,475,844,849)
B.iS(v,!0,C.fG(u),4,9,4,849)
B.iS(v,!0,C.fG(u),470,475,4,849)
C.a1A(v,10,12,470,12,u,2,16)
C.a1A(v,10,842,470,842,u,2,16)
C.a1A(v,10,12,10,842,u,2,18)
C.a1A(v,470,12,470,842,u,2,18)
C.CZ(v,2,2,1,1,t,10)
C.CZ(v,478,2,-1,1,t,10)
C.CZ(v,2,852,1,-1,t,10)
C.CZ(v,478,852,-1,-1,t,10)
C.kF(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,s,4294438872)
C.t5(v,s)
C.kF(v,14,16,452,822,o,2.2)
C.kF(v,22,24,436,806,o,1)
C.h8U(v,!1,!1,o,p,p,36,14,16)
C.kT(v,240,20,7,o,!0)
C.kT(v,240,834,7,o,!0)
C.kT(v,18,427,7,o,!0)
C.kT(v,462,427,7,o,!0)
return v
case 23:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,i,4293910712)
C.t5(v,i)
B.iS(v,!0,C.fG(u),0,479,0,20)
B.iS(v,!0,C.fG(u),0,479,834,853)
B.iS(v,!0,C.fG(u),0,20,0,853)
B.iS(v,!0,C.fG(u),460,479,0,853)
B.iS(v,!0,C.fG(f),5,474,5,9)
B.iS(v,!0,C.fG(f),5,474,844,848)
B.iS(v,!0,C.fG(f),5,9,5,848)
B.iS(v,!0,C.fG(f),470,474,5,848)
C.kF(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,e,4294174404)
C.t5(v,e)
C.bB9(v,14,16,p)
B.iS(v,!0,C.fG(u),3,476,3,8)
B.iS(v,!0,C.fG(u),3,476,845,850)
B.iS(v,!0,C.fG(u),3,8,3,850)
B.iS(v,!0,C.fG(u),471,476,3,850)
C.kF(v,9,10,462,834,t,1)
C.kF(v,14,16,452,822,u,1.8)
C.kT(v,240,8,4,u,!0)
C.kT(v,240,846,4,u,!0)
C.kT(v,8,427,4,u,!0)
C.kT(v,472,427,4,u,!0)
C.kT(v,8,8,3,t,!0)
C.kT(v,472,8,3,t,!0)
C.kT(v,8,846,3,t,!0)
C.kT(v,472,846,3,t,!0)
return v}},
yM(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.E(A.k.V(q*w+p*t),0,255)
u=A.o.E(A.k.V(o*w+n*t),0,255)
w=A.o.E(A.k.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kV(d,!1,A.dg,new B.SC(s),r,A.d_,1,0,w-1,k,k);++k}},
t5(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e4()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.ap(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.ap(v==null?0:v)
v=d.a
s=v==null?o:v.dR(u,t,o)
if(s==null)s=new B.it()
v=A.o.E(A.k.N(s.gb6(s))-3,0,255)
r=A.o.E(A.k.N(s.gbc())-3,0,255)
q=A.o.E(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jZ(u,t,v,r,q,255)}},
kF(d,e,f,g,h,i,j){var w,v=null,u=C.fG(i),t=e+g
B.kV(d,!0,A.dg,u,v,A.d_,j,e,t,f,f)
w=f+h
B.kV(d,!0,A.dg,u,v,A.d_,j,e,t,w,w)
B.kV(d,!0,A.dg,u,v,A.d_,j,e,e,f,w)
B.kV(d,!0,A.dg,u,v,A.d_,j,t,t,f,w)},
CZ(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kV(d,!0,A.dg,C.fG(i),u,A.d_,2,e,e+g*j,f,f)
B.kV(d,!0,A.dg,C.fG(i),u,A.d_,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kV(d,!0,A.dg,C.fG(i),u,A.d_,1,w,e+g*t,v,v)
B.kV(d,!0,A.dg,C.fG(i),u,A.d_,1,w,w,v,f+h*t)},
huq(d,e,f,g){var w=null,v=B.hr(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yM(v,d,e)
C.t5(v,d)
B.iS(v,!0,C.fG(f),0,479,0,28)
B.iS(v,!0,C.fG(f),0,479,826,853)
B.iS(v,!0,C.fG(f),0,28,0,853)
B.iS(v,!0,C.fG(f),452,479,0,853)
C.kF(v,5,5,470,844,g,1.1)
C.kF(v,28,28,424,798,g,1.6)
C.CZ(v,2,2,1,1,g,11)
C.CZ(v,478,2,-1,1,g,11)
C.CZ(v,2,852,1,-1,g,11)
C.CZ(v,478,852,-1,-1,g,11)
return v},
flH(d,e,f){var w=null,v=B.hr(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yM(v,d,e)
C.t5(v,d)
C.kF(v,14,16,452,822,f,1.6)
C.kF(v,20,22,440,810,f,0.8)
return v},
bB9(d,e,f,g){var w,v=C.fG(g)
B.iS(d,!0,v,0,479,0,f-1)
w=854-f
B.iS(d,!0,v,0,479,w,853);--w
B.iS(d,!0,v,0,e-1,f,w)
B.iS(d,!0,v,480-e,479,f,w)},
i0j(d){var w,v,u=4291404327
C.bB9(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kT(d,w,8,3,u,!0)
C.kT(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kT(d,7,v,3,u,!0)
C.kT(d,473,v,3,u,!0)}return d},
fyr(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jp(e,f),new B.jp(e+g*n,f),new B.jp(e,f+h*n)],t)
B.a2l(d,C.fG(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jp(s,u),new B.jp(e+g*v,u),new B.jp(s,f+h*v)],t)
B.a2l(d,C.fG(k),t)
t=A.k.V(n*0.39)
C.kT(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kT(d,e+g*t,f+h*3,4,k,!0)
C.kT(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kT(d,e+g*t,f,5,k,!0)
C.kT(d,e,f+h*t,5,k,!0)}},
h8U(d,e,f,g,h,i,j,k,l){var w,v
C.fyr(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fyr(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fyr(d,k,v,1,-1,e,f,g,h,i,j)
C.fyr(d,w,v,-1,-1,e,f,g,h,i,j)},
a1A(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lg(d,!0,A.dg,new B.rh(p),null,A.d_,j,r,q)}},
fxp(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kV(d,!0,A.dg,new B.rh(o),null,A.d_,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kV(d,!0,A.dg,new B.rh(o),null,A.d_,1.4,q,q,p,p+h*r)}},
hZj(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hr(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.yM(n,d,e)
C.t5(n,d)
C.kF(n,20,20,440,814,f,1.2)
C.fxp(n,0,0,1,1,g)
C.fxp(n,480,0,-1,1,g)
C.fxp(n,0,854,1,-1,g)
C.fxp(n,480,854,-1,-1,g)
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
B.kV(n,!0,A.dg,new B.rh(p),o,A.d_,1.2,240,r,60,q)}return n},
fvh(d,e,f,g,h){var w
C.fBL(d,!0,C.fG(g),13,e,f)
C.fBL(d,!0,C.fG(g),9,e,f)
w=B.a([new B.jp(e,f-4),new B.jp(e+4,f),new B.jp(e,f+4),new B.jp(e-4,f)],x.J)
B.a2l(d,C.fG(h),w)},
kT(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jp(e,v),new B.jp(u,f),new B.jp(e,t),new B.jp(s,f)],x.J)
if(i){B.a2l(d,C.fG(h),r)
return}B.kV(d,!0,A.dg,C.fG(h),w,A.d_,1,e,u,v,f)
B.kV(d,!0,A.dg,C.fG(h),w,A.d_,1,u,e,f,t)
B.kV(d,!0,A.dg,C.fG(h),w,A.d_,1,e,s,t,f)
B.kV(d,!0,A.dg,C.fG(h),w,A.d_,1,s,e,f,v)},
fkC(d,e,f,g,h,i,j){var w,v=B.a([new B.jp(e,f),new B.jp(e+g*28,f),new B.jp(e,f+h*28)],x.J)
B.a2l(d,C.fG(i),v)
v=e+g*14
w=f+h*14
C.kT(d,v,w,6,j,!0)
C.kT(d,v,w,3,i,!0)},
fkD(d,e,f,g,h){var w=null,v=B.hr(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yM(v,d,e)
C.t5(v,d)
C.kF(v,18,18,444,818,f,2)
C.kF(v,26,26,428,802,f,0.9)
if(h!=null)B.iS(v,!0,C.fG(h),28,451,28,34)
C.fkC(v,18,18,1,1,g,f)
C.fkC(v,462,18,-1,1,g,f)
C.fkC(v,18,836,1,-1,g,f)
C.fkC(v,462,836,-1,-1,g,f)
return v},
i1s(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hr(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.yM(r,u,4294240980)
C.t5(r,u)
C.kF(r,10,12,460,830,t,3.2)
C.kF(r,18,20,444,814,s,1.2)
C.kF(r,24,26,432,802,t,1.8)
C.h8U(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kT(r,w,16,3,t,!0)
C.kT(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kT(r,16,w,3,t,!0)
C.kT(r,464,w,3,t,!0)}return r},
i1t(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hr(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.yM(p,s,4294373080)
C.t5(p,s)
C.kF(p,16,18,448,818,r,2.4)
C.kF(p,24,26,432,802,4286209044,1)
w=new C.fn0(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h8U(p,!1,!0,r,q,q,34,16,18)
return p},
bBQ(d,e,f,g,h,i){B.iS(d,!0,C.fG(i),e,e+g,f,f+h)},
bCH(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.E(A.k.V(v*l+u*m),0,255)
j=A.o.E(A.k.V(t*l+s*m),0,255)
l=A.o.E(A.k.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kV(d,!1,A.dg,new B.SC(i),null,A.d_,1,e,w,l,l)}},
i2l(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.ao(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kV(d,!1,A.dg,new B.rh(r),null,A.d_,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.ao(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kV(d,!1,A.dg,new B.rh(r),null,A.d_,1,t,t,f,s);++q}},
i2m(d,e){var w,v,u=null,t=B.hr(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i2l(t,v,w,30,D.d0Z,(A.o.ao(v,30)+A.o.ao(w,30)&1)===0)
C.bBQ(t,44,44,392,766,d)
C.bCH(t,44,44,392,766,d,e)
C.t5(t,d)
C.kF(t,44,44,392,766,4292128567,2.2)
C.kF(t,50,50,380,754,4279898632,0.8)
return t},
i3s(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kT(d,e,f,7,h,!0)
C.kT(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kV(d,!0,A.dg,C.fG(h),o,A.d_,1.6,w,u,v,t)
B.kV(d,!0,A.dg,C.fG(h),o,A.d_,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kV(d,!0,A.dg,new B.rh(p),o,A.d_,1.2,w,v,q,q)}break
default:B.kV(d,!0,A.dg,C.fG(h),o,A.d_,1.5,e-8,e+8,f,f)
B.kV(d,!0,A.dg,C.fG(h),o,A.d_,1.5,e,e,f-8,f+8)
B.lg(d,!0,A.dg,C.fG(h),o,A.d_,2,e,f)}},
i3t(d,e){var w,v,u,t,s=null,r=B.hr(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iS(r,!0,C.fG(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i3s(r,u,v,w,4292391514)}C.bBQ(r,46,46,388,762,d)
C.bCH(r,46,46,388,762,d,e)
C.t5(r,d)
C.kF(r,46,46,388,762,4291404327,1.8)
return r},
hpH(d,e,f,g){C.fBL(d,!0,C.fG(g),16,e,f)
C.fBL(d,!0,C.fG(g),11,e,f)
C.kT(d,e,f,6,g,!0)
B.kV(d,!0,A.dg,C.fG(g),null,A.d_,1.3,e-14,e+14,f,f)
B.kV(d,!0,A.dg,C.fG(g),null,A.d_,1.3,e,e,f-14,f+14)},
hZb(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hr(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iS(s,!0,C.fG(4280948752),0,479,0,853)
B.iS(s,!0,C.fG(u),0,479,0,78)
B.iS(s,!0,C.fG(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hpH(s,w,39,t)
C.hpH(s,w,815,t)}C.bBQ(s,38,92,404,670,d)
C.bCH(s,38,92,404,670,d,e)
C.t5(s,d)
C.kF(s,38,92,404,670,t,1.8)
C.kF(s,45,99,390,656,4287322667,0.8)
return s},
i2U(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jp(e,f),new B.jp(q-5,w),new B.jp(q,f-(18-Math.abs(r)*3)),new B.jp(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2l(d,new B.rh(o),p)}B.lg(d,!0,A.dg,C.fG(4292128567),null,A.d_,3,e,f)},
i2V(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hr(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.yM(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kV(q,!0,A.dg,new B.rh(v),s,A.d_,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kV(q,!0,A.dg,new B.rh(u),s,A.d_,1.1,v,v,0,853)}B.iS(q,!0,C.fG(r),0,479,0,70)
B.iS(q,!0,C.fG(r),0,479,798,853)
for(t=0;t<5;++t)C.i2U(q,70+t*85,48,4292128567)
C.bBQ(q,48,78,384,712,d)
C.bCH(q,48,78,384,712,d,e)
C.t5(q,d)
C.kF(q,48,78,384,712,4291404327,1.6)
return q},
i7j(d,e){var w,v,u,t=null,s=4279970378,r=B.hr(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iS(r,!0,C.fG(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kT(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lg(r,!0,A.dg,new B.rh(u),t,A.d_,1,v,w)}C.bBQ(r,40,40,400,774,d)
C.bCH(r,40,40,400,774,d,e)
C.t5(r,d)
C.kF(r,40,40,400,774,4291058750,2)
C.kF(r,48,48,384,758,s,0.8)
return r},
l4:function l4(d,e){this.a=d
this.b=e},
fM1:function fM1(d){this.a=d},
fM0:function fM0(d){this.a=d},
fn0:function fn0(d){this.a=d},
fMF(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
i3m(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h7r(d){var w,v,u,t=null,s=A.a.cu(d,"{"),r=A.a.oR(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aM(0,Aj.ahn(A.a.ar(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afS(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vD(null,""),$async$afS)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nh(n)
if(e==null)s=A.hS
else{r=C.i3m(e)
s=B.a([new B.a0y(A.cJ.gct().aO(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.r8(t,d,s,"news",E.G9),$async$afS)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.Lp(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afS,v)},
bEj(d){return C.igx(d)},
igx(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bEj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aq(d.ah(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afS(r,null),$async$bEj)
case 7:q=f
p=C.h7r(q)
if(p==null){u=d
w=1
break}o=d.aDI(p)
if(o.r.length===0||A.d.aG(o.r," ").length<A.d.aG(d.r," ").length*0.5){u=d
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
return B.i($async$bEj,v)},
htG(d){var w,v=F.h9Z(d)
v=B.aL(v,"book","newspaper")
if(F.a2E(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fQE(d,e,f,g){return C.iiq(d,e,f,g)},
iiq(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fQE=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fMF(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hxh()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afS('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.htG(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fQE)
case 3:r=m.h7r(i)
if(r==null)throw B.W(y.S)
q=new C.zR(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","").aDI(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a2E(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2E(A.d.aG(t," "))==="sw"?C.bEj(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQE,v)},
bDO(d,e,f,g,h){return C.ie7(d,e,f,g,h)},
ie7(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bDO=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fL(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hxh()
k=A.X.aq(d.ah(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afS('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.htG(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bDO)
case 3:p=j.h7r(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cL(o)){n=d.aDI(B.a2(o,x.N,x.z))
m=A.X.aq(n.ah(),null)!==A.X.aq(d.ah(),null)}else{n=d
m=!1}w=m&&F.a2E(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bEj(n),$async$bDO)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8n(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDO,v)},
a8n:function a8n(d,e,f){this.a=d
this.b=e
this.c=f},
ilf(d,e){return B.a4(d,!1).cc(B.eh(new C.fXO(e),!0,null,x.H))},
fXO:function fXO(d){this.a=d},
Wd:function Wd(d,e){this.c=d
this.a=e},
aF8:function aF8(d,e,f,g,h,i,j,k){var _=this
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
epn:function epn(d){this.a=d},
epm:function epm(){},
epo:function epo(d){this.a=d},
epl:function epl(d,e){this.a=d
this.b=e},
epp:function epp(){},
ep_:function ep_(d,e){this.a=d
this.b=e},
eoW:function eoW(d,e){this.a=d
this.b=e},
ep6:function ep6(d){this.a=d},
ep7:function ep7(d,e){this.a=d
this.b=e},
ep8:function ep8(d){this.a=d},
ep1:function ep1(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
ep3:function ep3(d,e){this.a=d
this.b=e},
ep4:function ep4(d){this.a=d},
ep5:function ep5(d){this.a=d},
ep0:function ep0(d,e){this.a=d
this.b=e},
eoY:function eoY(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
epe:function epe(d){this.a=d},
epf:function epf(d){this.a=d},
epd:function epd(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
epc:function epc(d,e){this.a=d
this.b=e},
eph:function eph(d){this.a=d},
epb:function epb(d){this.a=d},
epi:function epi(d){this.a=d},
epa:function epa(d){this.a=d},
epj:function epj(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e){this.a=d
this.b=e},
epk:function epk(d){this.a=d},
eoX:function eoX(d,e){this.a=d
this.b=e},
fLB(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fLB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hrf){w=1
break}r=new C.fLC()
t=4
q=x.s
w=7
return B.b(B.iW(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fLB)
case 7:$.hrf=!0
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
return B.i($async$fLB,v)},
bEa(d){return A.CX[B.mm(d)-1]+", "+A.ov[B.bL(d)-1]+" "+B.bW(d)+", "+B.bC(d)},
i6n(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dsJ[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
han(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fz(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fJU(),B.T(v).k("Z<1>")))
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
continue}o=new C.fJW(j,h)
n=new C.fJV(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ao(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j6(o.$1(l)))
j.a+=l}return u},
h7a(d,e){var w=new C.fmA()
return A.d.cI(e,0,new C.fmy(w))>=A.d.cI(d,0,new C.fmz(w))},
hom(d){var w,v,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
u.D(new B.aY(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bs())
return u},
zR:function zR(d,e,f,g,h,i,j,k,l,m){var _=this
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
chk:function chk(d){this.a=d},
chi:function chi(){},
chj:function chj(){},
tA:function tA(d,e){this.a=d
this.b=e},
BN:function BN(d,e){this.a=d
this.b=e},
lt:function lt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fLC:function fLC(){},
fJU:function fJU(){},
fJW:function fJW(d,e){this.a=d
this.b=e},
fJV:function fJV(d,e,f){this.a=d
this.b=e
this.c=f},
fmA:function fmA(){},
fmB:function fmB(){},
fmy:function fmy(d){this.a=d},
fmz:function fmz(d){this.a=d},
b27:function b27(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
chl:function chl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chm:function chm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chn:function chn(d){this.a=d},
bdN:function bdN(d){this.a=d},
bdM:function bdM(d,e){this.b=d
this.a=e},
bvG:function bvG(d){this.a=d},
bah:function bah(d,e){this.b=d
this.a=e},
bta:function bta(d,e){this.b=d
this.a=e},
hzl(d,e){return B.a4(d,!1).cc(B.eh(new C.fXR(e,null),!0,null,x.E))},
fXR:function fXR(d,e){this.a=d
this.b=e},
We:function We(d,e,f){this.c=d
this.d=e
this.a=f},
aFb:function aFb(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eq9:function eq9(){},
eqa:function eqa(d){this.a=d},
eq8:function eq8(d,e){this.a=d
this.b=e},
epX:function epX(d){this.a=d},
epY:function epY(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d,e){this.a=d
this.b=e},
eq1:function eq1(d){this.a=d},
eq2:function eq2(d,e,f){this.a=d
this.b=e
this.c=f},
epZ:function epZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq5:function eq5(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e){this.a=d
this.b=e},
eq6:function eq6(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq7:function eq7(d,e){this.a=d
this.b=e},
bdj:function bdj(d,e,f){this.b=d
this.c=e
this.a=f},
ill(d){return B.a4(d,!1).cc(B.eh(new C.fY6(),!0,null,x.I))},
bBB(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h8B(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fY6:function fY6(){},
a0p:function a0p(d){this.a=d},
oL:function oL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGA:function aGA(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aN=_.aF=_.aB=_.a_=_.b8=_.bj=_.y2=0
_.b4=null
_.b2=0.25
_.be=null
_.bM=0.5
_.aK=1
_.c8=_.bG=_.bi=0
_.cL=_.c5=!1
_.c=_.a=null},
eZZ:function eZZ(d){this.a=d},
eYR:function eYR(d,e){this.a=d
this.b=e},
eZe:function eZe(d,e){this.a=d
this.b=e},
eZo:function eZo(d){this.a=d},
eYA:function eYA(d){this.a=d},
eYB:function eYB(d){this.a=d},
eYy:function eYy(d){this.a=d},
eYz:function eYz(d){this.a=d},
eZ7:function eZ7(d,e){this.a=d
this.b=e},
eZ8:function eZ8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZk:function eZk(d,e,f){this.a=d
this.b=e
this.c=f},
eZj:function eZj(d,e){this.a=d
this.b=e},
eZl:function eZl(d,e){this.a=d
this.b=e},
eZi:function eZi(d,e){this.a=d
this.b=e},
eZn:function eZn(d,e,f){this.a=d
this.b=e
this.c=f},
eZm:function eZm(d,e){this.a=d
this.b=e},
eYq:function eYq(d){this.a=d},
eYr:function eYr(d){this.a=d},
eYs:function eYs(d){this.a=d},
eYp:function eYp(){},
eYt:function eYt(d,e){this.a=d
this.b=e},
eYo:function eYo(d,e){this.a=d
this.b=e},
eYv:function eYv(){},
eYu:function eYu(d,e){this.a=d
this.b=e},
eYn:function eYn(d,e){this.a=d
this.b=e},
eYk:function eYk(d,e){this.a=d
this.b=e},
eYw:function eYw(d){this.a=d},
eYm:function eYm(d,e){this.a=d
this.b=e},
eYx:function eYx(d){this.a=d},
eYl:function eYl(d,e){this.a=d
this.b=e},
eZO:function eZO(d,e){this.a=d
this.b=e},
eZV:function eZV(d){this.a=d},
eZW:function eZW(d,e){this.a=d
this.b=e},
eZX:function eZX(){},
eZP:function eZP(d,e){this.a=d
this.b=e},
eZN:function eZN(d,e){this.a=d
this.b=e},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
eZM:function eZM(d,e){this.a=d
this.b=e},
eZR:function eZR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZL:function eZL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZS:function eZS(d){this.a=d},
eZT:function eZT(d,e){this.a=d
this.b=e},
eZU:function eZU(d){this.a=d},
eZK:function eZK(d){this.a=d},
eZx:function eZx(d){this.a=d},
eZy:function eZy(d){this.a=d},
eZw:function eZw(d,e){this.a=d
this.b=e},
eZr:function eZr(d,e){this.a=d
this.b=e},
eZz:function eZz(d){this.a=d},
eZC:function eZC(d){this.a=d},
eZv:function eZv(d){this.a=d},
eZD:function eZD(d){this.a=d},
eZE:function eZE(d){this.a=d},
eZF:function eZF(d){this.a=d},
eZG:function eZG(d){this.a=d},
eZu:function eZu(d){this.a=d},
eZH:function eZH(d){this.a=d},
eZt:function eZt(d){this.a=d},
eZI:function eZI(d,e){this.a=d
this.b=e},
eZs:function eZs(d,e){this.a=d
this.b=e},
eZJ:function eZJ(d){this.a=d},
eZA:function eZA(d){this.a=d},
eZB:function eZB(d){this.a=d},
eZb:function eZb(d){this.a=d},
eZa:function eZa(d){this.a=d},
eZc:function eZc(d,e){this.a=d
this.b=e},
eZ9:function eZ9(d,e){this.a=d
this.b=e},
eZd:function eZd(d){this.a=d},
eZ3:function eZ3(d){this.a=d},
eZ2:function eZ2(d){this.a=d},
eZ4:function eZ4(d){this.a=d},
eZ1:function eZ1(d){this.a=d},
eZ5:function eZ5(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d,e){this.a=d
this.b=e},
eZ_:function eZ_(d,e){this.a=d
this.b=e},
eYI:function eYI(d){this.a=d},
eYJ:function eYJ(d){this.a=d},
eYK:function eYK(d){this.a=d},
eYL:function eYL(d){this.a=d},
eYM:function eYM(d){this.a=d},
eYN:function eYN(d){this.a=d},
eYO:function eYO(d){this.a=d},
eYP:function eYP(d){this.a=d},
eYQ:function eYQ(d){this.a=d},
eY3:function eY3(d){this.a=d},
eY4:function eY4(d){this.a=d},
eY5:function eY5(d){this.a=d},
eY6:function eY6(d){this.a=d},
eY7:function eY7(d){this.a=d},
eY2:function eY2(d){this.a=d},
eY8:function eY8(d){this.a=d},
eY9:function eY9(d){this.a=d},
eYC:function eYC(d){this.a=d},
eYD:function eYD(d){this.a=d},
eYE:function eYE(d){this.a=d},
eYF:function eYF(d){this.a=d},
eYG:function eYG(d){this.a=d},
eYd:function eYd(d){this.a=d},
eYe:function eYe(d){this.a=d},
eYf:function eYf(d){this.a=d},
eYg:function eYg(d){this.a=d},
eYh:function eYh(d){this.a=d},
eYc:function eYc(d){this.a=d},
eYi:function eYi(d){this.a=d},
eYb:function eYb(d){this.a=d},
eYj:function eYj(d){this.a=d},
eYa:function eYa(d){this.a=d},
eZ6:function eZ6(d){this.a=d},
eYZ:function eYZ(d){this.a=d},
eYV:function eYV(d){this.a=d},
eYU:function eYU(d){this.a=d},
eYW:function eYW(d,e){this.a=d
this.b=e},
eYT:function eYT(d,e){this.a=d
this.b=e},
eYX:function eYX(d,e){this.a=d
this.b=e},
eYS:function eYS(d,e){this.a=d
this.b=e},
eYY:function eYY(d){this.a=d},
eZh:function eZh(d){this.a=d},
eZg:function eZg(d,e,f){this.a=d
this.b=e
this.c=f},
eZf:function eZf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZq:function eZq(d,e){this.a=d
this.b=e},
eZp:function eZp(d,e){this.a=d
this.b=e},
eYH:function eYH(d){this.a=d},
eZY:function eZY(d){this.a=d},
bgX:function bgX(d,e){this.b=d
this.a=e},
igI(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
igJ(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).lc(0,d),m=B.C(n,B.a7(n).k("M.E"))
if(m.length===0)return d
w=new B.fh("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.ar(d,v,n)
p=m[r].b
p=A.a.ar(d,n,p.index+p[0].length)
n=B.ag("[*~^]",!0,!1,!1,!1)
o=B.aL(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.b5(d,v)
return n.charCodeAt(0)==0?n:n},
bCb(){var w=$.bBj,v=$.QU
$.QU=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bCb(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cn,D.fa,g,e,f)},
ob(d,e,f,g){var w=f*9
return C.ii(D.eT,d-f/2,e-w/32,f,w/16,g,0)},
i_S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bBj
p=$.QU
$.QU=p+1
w.push(new C.eP(q+"_"+p,D.fa,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.bi,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bBj
p=$.QU
$.QU=p+1
w.push(new C.eP(q+"_"+p,D.fa,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.bi,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.ob(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.ob(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bi,0.08,0.08,0.5,0.003,v,0),C.ii(D.bi,0.58,0.08,0.004,0.06,v,0),C.ii(D.bi,0.58,0.14,0.34,0.003,v,0),C.ii(D.bi,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bi,0.08,0.8,0.004,0.14,t,0),C.ii(D.bi,0.08,0.94,0.6,0.003,t,0),C.ob(0.58,0.08,0.05,e),C.ob(0.92,0.22,0.05,e),C.ob(0.08,0.8,0.05,f),C.ob(0.68,0.94,0.05,f),C.ob(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.lk,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.lk,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.lk,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.lk,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.ob(0.5,0.5,1.5,w|335544320),C.ob(0.5,0.5,1.15,w|402653184),C.ob(0.5,0.5,0.8,v|436207616),C.ob(0.95,0.05,0.4,v|855638016),C.ob(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.ob(0.85,0.08,0.7,w|1140850688),C.ob(0.1,0.35,0.5,v|855638016),C.ob(0.9,0.62,0.55,v|771751936),C.ob(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ii(D.bi,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ii(D.bi,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ii(D.bi,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ii(D.bi,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.ob(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.ob(0.5,0.2,0.65,(w|3422552064)>>>0),C.ob(0.5,0.2,0.95,w|855638016),C.ii(D.bi,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ii(D.bi,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ii(D.k0,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.k0,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.k0,0.15,0.86,0.6,0.14,1712265002,0),C.ob(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.d2x[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bBj
l=$.QU
$.QU=l+1
w.push(new C.eP(m+"_"+l,D.fa,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.eT,q,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.ob(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.k0,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.k0,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.k0,0.65,-0.1,0.3,0.55,v,0.5),C.ob(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bi,0.06,0.04,0.88,0.002,e,0),C.ii(D.bi,0.06,0.96,0.88,0.002,e,0),C.ii(D.bi,0.06,0.04,0.004,0.92,e,0),C.ii(D.bi,0.936,0.04,0.004,0.92,e,0),C.ii(D.bi,0.09,0.07,0.82,0.001,w,0),C.ii(D.bi,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.k1,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.k1,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.k1,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bi,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bi,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bi,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bi,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eT,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eT,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eT,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eT,-0.05,0.9,0.4,0.12,v,-0.9),C.ob(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bi,0.09,0.12,0.16,0.006,e,0),C.ii(D.bi,0.05,0.03,0.9,0.001,w,0),C.ii(D.bi,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ida(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bBj=j
$.QU=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fHi()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ew(A.bj,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bCb(),g,"","",0,!1,"",0,D.bi,l,2,"",0,0,"",D.cn,D.lO,1,0,0))
if(a9)A.d.v(q,C.i_S(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.igI(B.aL(w,p,""))
o=A.a.t(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fHh(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.ew(A.bj,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bCb(),a0,"","",0,!1,a2,0,D.bi,l,2,"",0,0,"",D.cn,D.lO,a3,a4,a5))
return C.rL(s,r,0,0,q,j+"_slide",D.qH,"","","",D.dh)},
rK:function rK(d,e){this.a=d
this.b=e},
mk:function mk(d,e,f,g,h,i,j,k,l,m){var _=this
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
fHi:function fHi(){},
fHh:function fHh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hQS(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bk(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ciQ(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zS(u,t,s,B.w(w==null?"":w))},
fP0(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fP0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hrC){w=1
break}$.hrC=!0
t=4
w=7
return B.b(B.az(),$async$fP0)
case 7:r=e
q=B.aT(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aM(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.k0(p),k=k.gag(k),j=x.j,i=x.o;k.C();){o=k.gS(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gS(h)
l=C.hQS(m)
if(l!=null)J.ca(n,l)}$.D_.c3(0,B.w(o.a),new C.fP1(n))}C.h8g()
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
return B.i($async$fP0,v)},
h8g(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.du($.D_,$.D_.r,$.D_.e);w.C();)J.nG(w.d,new C.fuu(v))
$.D_.bs($.D_,new C.fuv())},
aPg(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPg=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPg)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.D_,B.a7($.D_).k("cI<1,2>")).gag(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gS(h)
g=o
J.ca(p,B.H(["at",g.a.a8().ae(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aJ(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.X.aq(n,null)),$async$aPg)
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
return B.i($async$aPg,v)},
ihl(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h8g()
w=$.D_.c3(0,d,new C.fP3())
v=Date.now()
u=B.C(e,B.a7(e).k("cs.E"))
J.pM(w,0,new C.zS(new B.V(v,0,!1),f,u,g))
C.aPg()},
ihi(d){var w,v=$.D_.h(0,d)
if(v==null||J.ct(v))return
w=J.cD(v)
w.cz(v,0)
if(w.gan(v))$.D_.W(0,d)
C.aPg()},
zS:function zS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciQ:function ciQ(){},
fP1:function fP1(d){this.a=d},
fuu:function fuu(d){this.a=d},
fuv:function fuv(){},
fP3:function fP3(){},
ihn(d){return A.d.dM(D.wG,new C.fP6(d),new C.fP7())},
hQQ(d){var w
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
hQP(d){var w
switch(d.a){case 0:w=D.ao7
break
case 1:w=A.yZ
break
case 2:w=A.apd
break
case 3:w=I.anK
break
case 4:w=A.aoF
break
case 5:w=A.mc
break
default:w=null}return w},
i3_(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.R4[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.R4[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hQR(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
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
o.push(q)}return A.X.aq(B.H(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ihj(d,e,f,g,h){var w=new B.N(D.wG,new C.fP_(),x.eC).aG(0,", "),v=""+d,u=C.hx9(h),t=F.fIH(h),s=C.htg(g),r=e.t(0,D.IZ)?'- New slides get an "emoji".\n':"",q=e.t(0,D.J_)?'- New slides get an "icon3d" from: '+A.d.aG(D.R4,", ")+".\n":"",p=e.t(0,D.Dy)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ihk(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wG,new C.fP2(),x.eC).aG(0,", "),p=new B.fh("")
if(e.t(0,D.IZ)){p.a=s
w=s}else w=""
if(e.t(0,D.J_))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.R4,", ")+".\n")
if(e.t(0,D.Dy))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hx9(d)
v=F.fIH(d)
u=C.htg(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahD(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Dp(a3,"{"),a5=J.h0o(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.LI(a3,a4,a5+1)
try{w=A.X.aM(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.r(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gS(o)
if(!q.b(t))continue
if(p.b(J.r(t,a2))){l=J.b6(p.a(J.r(t,a2)),new C.fMY(),m).c_(0,new C.fMZ())
k=B.C(l,l.$ti.k("M.E"))}else k=B.a([],n)
s=k
l=J.r(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.r(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.r(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.r(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.r(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.r(t,"icon3d")
f=C.i3_(B.w(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.r(t,"picture")
d=B.cc(B.w(d==null?0:d),a1)
if(d==null)d=0
J.ca(u,new C.a8v(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.b3(D.wG,new C.fN_(r))?r:a7
o=C.ftJ(J.r(w,"logo_frame"),D.CT)
n=C.ftJ(J.r(w,"logo_ring"),D.CM)
m=C.ftJ(J.r(w,"photo_frame"),D.CT)
l=C.ftJ(J.r(w,"photo_ring"),D.CM)
return new C.as3(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2b(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hwg(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Dz),f7=f6?C.hXx():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.cY(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.dZ(t,v)
s=u.c
s=new C.nY("luxe",u.a,A.mc,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.ihn(f9.b)
r=g2.t(0,D.a73)||f6
q=g2.t(0,D.IZ)
p=g2.t(0,D.T3)
o=new C.fHm()
n=B.a([],x.g)
m=new C.fHp(o,w,r)
l=new C.fHo(o,r)
k=new C.fHn(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b3(u,new C.fHl(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d4c[b8]
c0=D.d33[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f4C.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eT,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eT,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mV,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qI,500,f2,f0))
c1.push(l.$8$fx$key(D.bi,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.T0
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eT,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lk,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bi,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Dw
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eT,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mV,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cD,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qI,500,f2,f0))
d3=D.mU
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eT,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bi,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uY:D.cn
c1.push(new C.eP(b4,D.a71,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bj,e4,D.bi,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mU
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eT,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mV,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qI,450,f2,f0))
c1.push(l.$8$fx$key(D.bi,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.T0
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eT,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eT,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bi,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bi,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.IX,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mU}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dh,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hZa(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dva[A.o.F(b1,6)]:s
n.push(new C.lV(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.C0(e4,e4,e4,e4,D.Dv,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ar(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fJK(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fJK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Dy)
n=e.t(0,D.J_)
if(!o&&!n){u=D.a6_
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fJN(o,s[r],n,$.i1J,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iW(t,x.e),$async$fJK)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gS(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJK,v)},
fIK(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fIK=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ihk(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aOA(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fIK)
case 3:u=s.aOW(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIK,v)},
bDP(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bDP=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.en(f,f.r,B.a7(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.ihl(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahD(i,"colorful")
t=C.ihj(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aOA(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hS),$async$bDP)
case 3:u=o.aOW(m,f,h,g,D.e8F,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDP,v)},
aOA(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aOA=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vD(null,""),$async$aOA)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nh(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.r8(t,d,g,"slides",null),$async$aOA)
case 7:q=i
p=q.b
if(p!=null){o=C.ahD(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.Lp(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aOA,v)},
aOW(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aOW=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Dy)||e.t(0,D.J_)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.df(e,x.Q)
t.W(0,D.Dy)}w=6
return B.b(C.fJK(d,t),$async$aOW)
case 6:s=k
w=4
break
case 5:s=D.a6_
case 4:t=d.c
w=A.d.b3(t,new C.fmu())?7:9
break
case 7:r=$.hy1
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dV(r,x.aP),$async$aOW)
case 10:q=k
p=q!=null?A.X.aq(q.ah(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hwg(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hQR(new C.as3(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("N<1,m>")
t=B.C(new B.N(m,new C.fmv(),n),n.k("ak.E"))
l.cx=t
t=B.a7(e).k("k3<cs.E,m>")
t=B.C(new B.k3(e,new C.fmw(),t),t.k("M.E"))
l.cy=t
l.ay=e.t(0,D.T3)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOW,v)},
hb6(d){var w,v,u,t=d.cy
if(t==null)t=A.Y
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a4K[v]
if(A.d.t(t,u.b))w.M(0,u)}return w},
ilq(d){return B.bV(A.L,null,new C.fYi(),d,!0,!0,!0,null,!1,!1,x.I)},
hY9(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aO(d)},
ilp(d,e,f){return B.bV(A.L,null,new C.fYh(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hb7(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hb8(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
ftJ(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b3(e,new C.ftK(w))?w:""},
htg(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hy_(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahD(a1==null?"":a1,a0),a3=C.ahD(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.Y
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.T(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.pV(new B.Z(r,new C.fP8(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("M.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.Z(k,new C.fP9(),v),r)
A.d.aZ(g,new C.fPa())
if(g.length===0)continue
f=new C.fPb(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ihE(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aJy
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eay
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eaz
return null},
hsS(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bf(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dd(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
iho(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.oB
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.L)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
if(n.b!==D.cV)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hsS(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hsS(n,i,v,u))if(n.w>10){f=h+1
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
ihm(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahD(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a4K[r]
if(q.b===s)w.M(0,q)}}v=C.hb7(e)
u=C.hb8(e)
p=C.hwg(n,D.a6_,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("N<1,m>")
o=B.C(new B.N(o,new C.fP4(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k3<cs.E,m>")
o=B.C(new B.k3(w,new C.fP5(),o),o.k("M.E"))
p.cy=o
p.ay=w.t(0,D.T3)
return p},
ilc(d,e,f){return B.bV(A.L,null,new C.fXv(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hXx(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.cY(t)
w=D.cIm[s.ap(10)]
v=new C.elO(s)
u=x.N
return new C.elN(w,s.ap(4),J.fs(v.$1$2(D.d8X,1,x.ff)),w.r[s.ap(3)],v.$1$2(D.dqm,2+s.ap(2),u),v.$1$2(D.diS,2,u),v.$1$2(D.dtC,4,x.fP),t)},
hZa(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.cY(a5.w+a3*13)
w=new C.fiV(a4)
v=new C.fiX(a4,d)
u=new C.fiW(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cV){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aX(A.o.fu(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aX(A.o.fu(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c6(a2,0,w.$8(D.eT,0.1+a1.af()*0.45,0.05+a1.af()*0.3,0.45,0.75,C.a2b(a0,52),"lux_spot",a5.wN(0,"spotlight")))
else A.d.c6(a2,0,w.$8(D.bi,0,0,1,1,0,"lux_back",a5.wN(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c6(a2,1,w.$8(D.bi,0,0,1,1,0,"lux_back2",a5.aGe(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.022,0.038,0.956,0.924,0,g,a5.wN(0,f),D.dh,150,C.a2b(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.018,0.032,0.964,0.936,0,g,a5.wN(0,f),D.dh,120,C.a2b(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a2b(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bi,0,0,1,1,0,"lux_filigree",a5.wN(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bi,0.08,0.06,0.84,0.004,C.a2b(a0,208),"lux_rule",a5.aGe(0,"shimmer",r),D.uX,150))
a2.push(w.$10$anim$delay(D.bi,0.08,0.936,0.84,0.004,C.a2b(a0,144),"lux_rule2","",D.IX,220))}l=!A.d.b3(a2,new C.fiU())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wN(0,"crest"),350))
else{o=a1.h4()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wN(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2b(r,242)
j=a5.wN(0,"orbit")
i=s===D.bi?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qI,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eT,t-0.007,0.9495,0.014,0.025,C.a2b(r,242),"lux_g2",a5.wN(0,"orbit"),D.qI,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bi,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aX(A.o.fu(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bi,0,0,1,1,0,"lux_velvet",a5.wN(0,"velvet")))},
nY:function nY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fP6:function fP6(d){this.a=d},
fP7:function fP7(){},
wf:function wf(d,e){this.a=d
this.b=e},
a8v:function a8v(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
as3:function as3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fP_:function fP_(){},
fP2:function fP2(){},
fMY:function fMY(){},
fMZ:function fMZ(){},
fN_:function fN_(d){this.a=d},
fHm:function fHm(){},
fHp:function fHp(d,e,f){this.a=d
this.b=e
this.c=f},
fHo:function fHo(d,e){this.a=d
this.b=e},
fHn:function fHn(d,e){this.a=d
this.b=e},
fHl:function fHl(d){this.a=d},
fJN:function fJN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fJL:function fJL(d){this.a=d},
fJM:function fJM(d){this.a=d},
fmu:function fmu(){},
fmv:function fmv(){},
fmw:function fmw(){},
fYi:function fYi(){},
a0W:function a0W(d){this.a=d},
aIx:function aIx(d,e,f,g,h){var _=this
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
f5p:function f5p(d,e,f){this.a=d
this.b=e
this.c=f},
f5q:function f5q(d,e){this.a=d
this.b=e},
f5n:function f5n(d,e){this.a=d
this.b=e},
f5o:function f5o(d,e){this.a=d
this.b=e},
f5m:function f5m(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f5h:function f5h(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f5l:function f5l(d,e){this.a=d
this.b=e},
f5g:function f5g(d,e){this.a=d
this.b=e},
f5k:function f5k(d,e){this.a=d
this.b=e},
f5f:function f5f(d,e){this.a=d
this.b=e},
f5i:function f5i(d){this.a=d},
f5j:function f5j(d,e){this.a=d
this.b=e},
f55:function f55(d,e){this.a=d
this.b=e},
f56:function f56(d,e){this.a=d
this.b=e},
f58:function f58(d){this.a=d},
f59:function f59(d){this.a=d},
f5a:function f5a(d){this.a=d},
f5b:function f5b(d){this.a=d},
f57:function f57(d,e){this.a=d
this.b=e},
f5c:function f5c(d,e){this.a=d
this.b=e},
f5D:function f5D(d){this.a=d},
f5E:function f5E(d){this.a=d},
f5C:function f5C(d){this.a=d},
f5F:function f5F(d){this.a=d},
f5B:function f5B(d){this.a=d},
f5H:function f5H(d){this.a=d},
f5A:function f5A(d,e){this.a=d
this.b=e},
f5I:function f5I(d){this.a=d},
f5z:function f5z(d,e){this.a=d
this.b=e},
f5J:function f5J(d){this.a=d},
f5y:function f5y(d){this.a=d},
f5K:function f5K(d){this.a=d},
f5x:function f5x(d,e){this.a=d
this.b=e},
f5L:function f5L(d){this.a=d},
f5w:function f5w(d,e){this.a=d
this.b=e},
f5M:function f5M(d){this.a=d},
f5v:function f5v(d){this.a=d},
f5N:function f5N(d,e){this.a=d
this.b=e},
f5u:function f5u(d,e){this.a=d
this.b=e},
f5O:function f5O(d){this.a=d},
f5G:function f5G(d){this.a=d},
f5t:function f5t(d,e){this.a=d
this.b=e},
f5d:function f5d(d,e,f){this.a=d
this.b=e
this.c=f},
f5e:function f5e(d,e,f){this.a=d
this.b=e
this.c=f},
f5s:function f5s(d,e){this.a=d
this.b=e},
f5r:function f5r(d,e){this.a=d
this.b=e},
fYh:function fYh(d,e){this.a=d
this.b=e},
a0V:function a0V(d,e,f){this.c=d
this.d=e
this.a=f},
aIw:function aIw(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f4Z:function f4Z(d){this.a=d},
f5_:function f5_(d){this.a=d},
f50:function f50(d,e){this.a=d
this.b=e},
f51:function f51(d){this.a=d},
f52:function f52(d){this.a=d},
f4Y:function f4Y(d,e){this.a=d
this.b=e},
f53:function f53(d,e){this.a=d
this.b=e},
f54:function f54(d,e){this.a=d
this.b=e},
ftK:function ftK(d){this.a=d},
b2w:function b2w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aF2:function aF2(d,e,f){this.c=d
this.d=e
this.a=f},
blI:function blI(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
elQ:function elQ(d){this.a=d},
elP:function elP(){},
bje:function bje(d,e){this.b=d
this.a=e},
fP8:function fP8(d){this.a=d},
fP9:function fP9(){},
fPa:function fPa(){},
fPb:function fPb(d){this.a=d},
asB:function asB(d,e){this.a=d
this.b=e},
fP4:function fP4(){},
fP5:function fP5(){},
fXv:function fXv(d,e){this.a=d
this.b=e},
a_h:function a_h(d,e,f){this.c=d
this.d=e
this.a=f},
aCy:function aCy(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dpd:function dpd(d){this.a=d},
dpe:function dpe(d){this.a=d},
dpf:function dpf(d,e){this.a=d
this.b=e},
dpi:function dpi(d){this.a=d},
dpj:function dpj(d,e){this.a=d
this.b=e},
dph:function dph(d,e){this.a=d
this.b=e},
dpk:function dpk(d){this.a=d},
dpg:function dpg(d,e){this.a=d
this.b=e},
buh:function buh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
elN:function elN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
elO:function elO(d){this.a=d},
fiV:function fiV(d){this.a=d},
fiX:function fiX(d,e){this.a=d
this.b=e},
fiW:function fiW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiU:function fiU(){},
aN9:function aN9(){},
h9W(d){var w,v,u
try{w=A.X.aM(0,d,null)
if(x.f.b(w)){v=B.w8(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b2s:function b2s(d,e,f){this.c=d
this.d=e
this.a=f},
bni:function bni(d,e){this.c=d
this.a=e},
idE(d){return A.d.dM(D.HZ,new C.fIt(d),new C.fIu())},
idF(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b5(t,6)
if(w.length===0)return null
v=new B.Z(D.HZ,new C.fIv(w),x.b4)
if(!v.gag(0).C())return null
u=v.gI(0)
return new C.jT("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lq:function lq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fIt:function fIt(d){this.a=d},
fIu:function fIu(){},
fIv:function fIv(d){this.a=d},
n7(d,e,f,g,h){return new C.F1(f,g,d)},
i_m(d){var w=d.z,v=B.T(w).k("Z<1>")
w=B.C(new B.Z(w,new C.fkW(),v),v.k("M.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.KN
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c6(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.ew(A.bj,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cn,D.fa,j,k,l)},
hw3(d,e){var w
C.i_m(d)
w=A.d.dM($.bFQ(),new C.fGj(e),new C.fGk())
$.KN=w.a
d.x=w.a;++d.y
try{w.bw(d)}finally{$.KN=""}d.z=B.bq(d.z,!0,x.F)},
F1:function F1(d,e,f){this.a=d
this.b=e
this.e=f},
fkW:function fkW(){},
fOB:function fOB(){},
fOC:function fOC(){},
fOD:function fOD(){},
fOO:function fOO(){},
fOT:function fOT(){},
fOU:function fOU(){},
fOV:function fOV(){},
fOW:function fOW(){},
fOX:function fOX(){},
fOY:function fOY(){},
fOZ:function fOZ(){},
fOE:function fOE(){},
fOF:function fOF(){},
fOG:function fOG(){},
fOH:function fOH(){},
fOI:function fOI(){},
fOJ:function fOJ(){},
fOK:function fOK(){},
fOL:function fOL(){},
fOM:function fOM(){},
fON:function fON(){},
fOP:function fOP(){},
fOQ:function fOQ(){},
fOR:function fOR(){},
fOS:function fOS(){},
fGj:function fGj(d){this.a=d},
fGk:function fGk(){},
j4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ew(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bi,4280172719,2,m,n,0,"",o,D.cV,p,q,r)},
Df(d,e,f,g,h,i,j,k,l){return C.ew(A.bj,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cn,D.fa,j,k,l)},
bEy(){var w=new B.V(Date.now(),0,!1)
return A.iH[B.bL(w)-1]+" "+B.bW(w)+", "+B.bC(w)},
eB:function eB(d,e,f){this.a=d
this.b=e
this.c=f},
bBW(d){return new B.iZ((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
i4F(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anA(A.cF.aO(A.d.gak(d.split(","))))
return w}catch(v){return null}},
i4J(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.ft2(),x.dv).aG(0,"\n")},
i4I(d){switch(d.a){case 2:return A.nF
case 1:case 5:return A.ffM
default:return A.Ux}},
i4C(d){switch(d.a){case 2:return A.vA
case 1:case 5:return A.Wy
default:return A.ace}},
i4G(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bBW(u),q=(s&255)===0?v:C.bBW(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nI(q,p,A.kZ)
w=new B.pN(t,t,t,t)}switch(d.ax.a){case 1:return B.lK(v,v,v,new B.kM(r,w,v,A.adx,v),v,v,v,v)
case 4:return u?new B.fW(v,v,v):B.xk(B.lK(v,v,q,v,p+0.4,v,v,v))
default:return B.lK(v,v,v,new B.kM(r,w,B.vM(4),A.hV,v),v,v,v,v)}},
i4E(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fa?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i4C(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.i4J(d)
t=C.bBW(d.Q)
s=d.x.a>=700?A.ew:A.wb
r=d.y===A.cD?A.yE:A.ams
q=d.z
p=new B.Ds(w,l,l,B.fd(u,l,l,l,B.hd(l,t,1===q.a?A.aSN:A.aSM,l,l,l,l,l,l,A.dx,l,l,v,r,s,l,!0,l,l,l,l),C.i4I(d.as)))
break
case 1:case 4:o=C.i4F(d.at)
n=i===D.lO&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xk(B.fd(w,l,l,l,B.hd(l,A.t1,l,l,l,l,l,l,l,A.dx,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ig(o,n?A.adt:A.WW,l,l)
break
case 3:w=new B.nI(A.Jj,1,A.kZ)
u=B.vM(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lK(A.vA,B.fd(t,l,l,l,B.hd(l,D.eoB,l,l,l,l,l,l,l,A.dx,l,l,11,l,A.ew,l,!0,l,l,l,l),A.nF),l,new B.kM(E.aKY,new B.pN(w,w,w,w),u,A.hV,l),l,l,l,l)
break
case 2:p=C.i4G(d,e)
break
case 5:p=C.i4D(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hnA(-w,p)
w=i===D.cV
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.ato(m/255,p)}if(w)return new F.wl(k,l,j,l,new B.SJ(new B.kL(g,g,f,1/0),p))
if(i===D.lj){i=new B.nI(A.Jj,1,A.kZ)
i=B.lK(A.vA,p,l,new B.kM(A.pv,new B.pN(i,i,i,i),B.vM(4),A.hV,l),l,l,D.bDp,l)}else i=p
return new F.wl(k,l,j,l,new B.fW(g,f,i))},
i4H(d,e,f,g){var w,v=null,u=C.bBW(d.e),t=d.f
t=B.a([F.hmc(t!=null?B.lK(v,v,v,new B.kM(v,v,v,A.hV,new B.aXY(E.WA,A.ac8,B.a([u,C.bBW(t)],x.cR),v)),v,v,v,v):B.lK(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.ft1(f,g),B.T(w).k("N<1,fi>")))
return F.cxj(t)},
hba(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hba=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4N(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.WZ(A.wP,A.Jg,D.bEC,null,null,null,!1,null)
o=new B.C5(o,new C.fPh(607,787,p,d))
o.N5(n,null)
r.push(o)}u=n.jB(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hba,v)},
i4D(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h9W(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gakz()
if(h==null)h=A.aAg
j=B.tN(4279308564)
w=B.vM(18)
v=new B.nI(B.tN(4287531653),3,A.kZ)
u=i.length===0?"My links":i
u=B.a([B.xk(B.fd(u,m,m,m,B.hd(m,A.pv,m,m,m,m,m,m,m,A.dx,m,m,12,m,A.ew,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xk(B.fd(A.a.i(l.c),m,m,m,D.fno,m)))
u.push(new B.fW(m,8,m))
for(t=B.d_(h,0,B.dB(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bR(t,t.gL(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tN(4280690220)
o=new B.a9Q(8,8)
n=A.a.i(r.b)
u.push(new B.nZ(D.bxy,new C.axI(new C.aiK(q),B.lK(m,B.fd(n.length===0?A.a.i(r.c):n,m,m,m,D.fpN,A.nF),m,new B.kM(p,m,new B.aja(o,o,o,o),A.hV,m),m,m,D.bDS,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xk(B.fd(k,m,m,m,D.fp0,m))
u.push(new C.axI(C.hER(k),t))}return B.lK(m,B.z9(u,A.MY,A.lN),m,new B.kM(j,new B.pN(v,v,v,v),w,A.hV,m),m,m,D.byn,m)},
ft2:function ft2(){},
ft1:function ft1(d,e){this.a=d
this.b=e},
fPh:function fPh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahq(d){var w,v
for(w=0;w<32;++w){v=D.HQ[w]
if(v.a===d)return v}return null},
hqd(d){var w,v,u=A.a.cu(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aO(A.a.b5(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hzh(d,e){return B.a4(d,!1).cc(B.eh(new C.fVV(e),!0,null,x.fB))},
hzg(d,e){return B.bV(A.L,null,new C.fVU(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j9:function j9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ET:function ET(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NS:function NS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bl4:function bl4(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.a9$=f
_.c=_.a=null},
e_q:function e_q(d){this.a=d},
e_p:function e_p(d,e,f){this.a=d
this.b=e
this.c=f},
e_o:function e_o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsQ:function bsQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f4c:function f4c(d,e){this.a=d
this.b=e},
bg0:function bg0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0m:function b0m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdg:function cdg(){},
cdh:function cdh(d){this.a=d},
cdi:function cdi(d,e,f){this.a=d
this.b=e
this.c=f},
cdj:function cdj(d,e,f){this.a=d
this.b=e
this.c=f},
fVV:function fVV(d){this.a=d},
ZP:function ZP(d,e){this.c=d
this.a=e},
aAW:function aAW(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
deu:function deu(d,e,f){this.a=d
this.b=e
this.c=f},
dez:function dez(d){this.a=d},
deA:function deA(d){this.a=d},
dey:function dey(d){this.a=d},
deB:function deB(d){this.a=d},
dex:function dex(d,e){this.a=d
this.b=e},
deC:function deC(d){this.a=d},
dew:function dew(d){this.a=d},
deD:function deD(d){this.a=d},
dev:function dev(d,e){this.a=d
this.b=e},
deE:function deE(d,e){this.a=d
this.b=e},
fVU:function fVU(d){this.a=d},
fVT:function fVT(d){this.a=d},
fVS:function fVS(d,e,f){this.a=d
this.b=e
this.c=f},
fVR:function fVR(d,e){this.a=d
this.b=e},
aME:function aME(){},
ilo(d){return B.bV(A.L,null,new C.fYg(),d,!0,!0,!0,null,!1,!1,x.N)},
fYg:function fYg(){},
a_9:function a_9(d){this.a=d},
bhy:function bhy(d){this.d=d
this.c=this.a=null},
dlf:function dlf(d){this.a=d},
dlg:function dlg(d,e){this.a=d
this.b=e},
dlh:function dlh(d){this.a=d},
i0Y(d){var w,v=d.split("@")
if(v.length>1){w=B.cc(v[1],16)
if(w!=null)return B.b1(w)}return D.y3},
ifz(d){var w,v=A.d.gI(d.split("@"))
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
ify(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.i0Y(d)
switch(q){case"shimmer":return B.o2(A.Lj,g,new C.fLV(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bgT(e,f,p,r),A.aw),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ee(A.A,B.db(F.bVT(g,B.TJ(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bgA(e,p,r),A.aw),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.db(B.eM(A.A,e*0.5,B.ee(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fI(e)
u.mT(Math.sin(e)*0.3)
return B.dP(B.fy(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b3,A.t,B.a([B.dZ(B.b4(r,r,r,new C.bpD(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b3,A.t,B.a([B.dZ(B.b4(r,r,r,new C.bbp(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b3,A.t,B.a([B.dZ(B.b4(r,r,r,new C.bb3(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bwE(e,p,r),A.aw),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.btD(e,f,p,r),A.aw),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bsM(e,p,r),A.aw),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bfU(e,p,r),A.aw),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ab,A.f,B.a([B.bS(0,B.dZ(B.ee(A.A,B.c3(r,new B.o(r,r,r,r,r,new B.c2(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bh),1.6+s*0.15,r,r),!0,r),0,0,0),B.eM(A.A,s*0.06,B.ee(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fLV:function fLV(d,e){this.a=d
this.b=e},
bgT:function bgT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bgA:function bgA(d,e,f){this.b=d
this.c=e
this.a=f},
bpD:function bpD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbp:function bbp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bb3:function bb3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bwE:function bwE(d,e,f){this.b=d
this.c=e
this.a=f},
btD:function btD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsM:function bsM(d,e,f){this.b=d
this.c=e
this.a=f},
bfU:function bfU(d,e,f){this.b=d
this.d=e
this.a=f},
deb:function deb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xU:function xU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fLY(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lj},
ifE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fLZ())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aRA(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ifD(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d4(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d4(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.E(s,0.06,u)}else{d.w=A.k.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.E(r*(d.w*0.001)+0.028,0.06,u)},
ah4(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ah4=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fEj(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dP,null,new C.fEk(e),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ah4)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hM())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hbO(d),$async$ah4)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LA(d,"Search states\u2026","",A.kn,"Choose state"),$async$ah4)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.haI(s)
if(p==null)p=A.d.gI(D.RU)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fM_(p.d)
k=x.u
j=B.a([C.ew(A.bj,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),l,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.cn,D.lO,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.D2(i,0.016,D.lk,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.D2(0,0.058,D.eT,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.D2(0,0.058,D.eT,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KY("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KY("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h7y(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bBp("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1N("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1N("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1N("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1N("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bBp("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.D2(m,0.082,D.bi,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.ew(A.bj,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cz,"",0.074,g,null,"","",0,!1,"",0,D.bi,4280172719,2,y.O,0,0,"",D.cn,D.cV,0.78,0.11,0.388))
A.d.v(k,C.h7y(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bBp("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hsh("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hsh("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1N("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1N("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bBo("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bBo("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bBp("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KY("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KY("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bBo("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bBo("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bBp("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1N("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bBo("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1N("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h7y(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KY("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KY("Nakala ya Hati",A.K,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.C0(null,null,null,null,D.oB,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rL(m,null,0,0,j,n,D.qH,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ah4,v)},
fLZ:function fLZ(){},
fEj:function fEj(){},
fEk:function fEk(d){this.a=d},
fEh:function fEh(d){this.a=d},
fEi:function fEi(d){this.a=d},
i45(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i44(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.n_
case"lineThrough":return A.wY
default:return A.aF}},
ew(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
huo(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.RF[w]
if(v.b===u)return v}return D.dh},
i0k(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d_D[w]
if(v.b===u)return v}return D.cV},
i6X(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dr5[w]
if(v.b===u)return v}return D.bi},
rL(d,e,f,g,h,i,j,k,l,m,n){return new C.lV(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hkY(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i2q(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.huo(d.h(0,"transition"))
q=B.aK(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aK(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cF(n,new C.ciN(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a7(n).k("M.E"))}return C.rL(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i2q(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.arV[w]
if(v.b===u)return v}return D.mU},
C0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i5(p,t,a1,h,i,w,a0==null?B.a([C.rL(4294967295,null,0,0,null,C.cE(),D.qH,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Wn(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hZq(a6.h(0,"aspectRatio"))
t=B.aK(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bk(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kH(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kH(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aK(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aK(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.N(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.A(a6.h(0,"cinematic"),!0)
i=J.A(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.ciA(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.ciB(),x.N)
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
g=B.cF(g,new C.ciC(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a7(g).k("M.E"))}return C.C0(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rL(4294967295,a3,0,0,a3,C.cE(),D.qH,"","","",D.dh)],x.g):g,v,p,o,s)},
kH(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hZq(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.drZ[w]
if(v.b===u)return v}return D.Dv},
cE(){var w=Date.now(),v=$.ja
$.ja=v+1
return""+1000*w+"_"+v},
cj3(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.aa(d.z)
if(e!==D.Dw){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.ew(A.K,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bi,m,2,o,0,0,"",D.cn,D.cV,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.ew(A.K,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cz,"",0.12,u,p,"","",0,!1,"",0,D.bi,m,2,"Click to add subtitle",0,0,"",D.cn,D.cV,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bi,m,2,o,0,0,"",D.cn,D.cV,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.ew(A.bj,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cz,"",0.68,u,p,"","",0,!1,"",0,D.bi,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cn,D.cV,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bi,m,2,"Two Column Slide",0,0,"",D.cn,D.cV,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.ew(A.bj,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bi,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cn,D.cV,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.ew(A.bj,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bi,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cn,D.cV,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.ew(A.K,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bi,m,2,"Section Header",0,0,"",D.cn,D.cV,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bi,m,2,"Compare",0,0,"",D.cn,D.cV,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.ew(A.bj,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bi,t.l(),2,"",0,0,"",D.cn,D.fa,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.ew(A.bj,!1,r.l(),A.aF,"",n,20,A.bp,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bi,m,2,"Option A",0,0,"",D.cn,D.cV,0.38,0.08,0.26)
q=C.cE()
t=C.ew(A.bj,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bi,t.j(0.5).l(),2,"",0,0,"",D.cn,D.fa,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.ew(A.bj,!1,r.l(),A.aF,"",n,20,A.bp,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bi,m,2,"Option B",0,0,"",D.cn,D.cV,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.ew(A.K,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bi,m,2,"TERM / QUESTION",0,0,"",D.cn,D.cV,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.ew(A.K,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cz,"",0.35,u,p,"","",0,!1,"",0,D.bi,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cn,D.cV,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bi,m,2,"Quiz Question",0,0,"",D.cn,D.cV,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.ew(A.bj,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bi,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cn,D.cV,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bi,m,2,"Worksheet / Assignment",0,0,"",D.cn,D.cV,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.ew(A.bj,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bi,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cn,D.cV,0.88,0.06,0.16)],x.u))
break}},
hR0(d){return A.d.dM(D.a4m,new C.cj4(d),new C.cj5())},
hQY(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aM(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gS(t)
if(!q.b(u))continue
try{J.ca(v,C.Wn(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h3S(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cj_(t)
for(w=J.aW(d);w.C();)s.$1(w.gS(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bd<2>")
u=B.C(new B.bd(t,w),w.k("M.E"))
A.d.aZ(u,new C.ciZ())
return u},
hl0(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ciV()
if(u!==w)return u>=w?d:e
return v.$1(d).ce(v.$1(e))?d:e},
as4(d){return C.hQW(d)},
hQW(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$as4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ciY()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2Y(m),$async$as4)
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
return B.b(B.az(),$async$as4)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.r(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hl_.h(0,m))
n=C.h3S(C.h3S(j,r),o)
if(n.length===0){u=C.hl0(C.hl0(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$as4,v)},
ciU(d){return C.hQV(d)},
hQV(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ciU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ciU)
case 7:r=f
q=r.tA("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.k5(q,B.T(q).c)
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
return B.i($async$ciU,v)},
b2y(d,e){return C.hQX(d,e)},
hQX(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b2y=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2y)
case 6:s=g
q=s.tA("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.LH(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b2y)
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
return B.i($async$b2y,v)},
Wo(d,e){return C.hQZ(d,e)},
hQZ(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Wo=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hkZ.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.as4(a3),$async$Wo)
case 5:p=a6
case 4:w=6
return B.b(C.ciU(a3),$async$Wo)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gS(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbr())k=f===g.gbr()&&k.b>g.gcE()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bd<2>")
l=m.k("Z<M.E>")
e=B.C(new B.Z(new B.bd(n,m),new C.cj0(o),l),l.k("M.E"))
A.d.aZ(e,new C.cj1())
$.hkZ.n(0,a0,e)
n=B.T(e).k("N<1,a8<m,@>>")
n=B.C(new B.N(e,new C.cj2(),n),n.k("ak.E"))
r=A.X.aq(n,null)
$.hl_.n(0,a0,r)
t=8
w=11
return B.b(B.ahS(a0,r),$async$Wo)
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
return B.b(B.az(),$async$Wo)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Wo)
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
return B.i($async$Wo,v)},
J9:function J9(d,e){this.a=d
this.b=e},
as2:function as2(d,e){this.a=d
this.b=e},
v1:function v1(d,e){this.a=d
this.b=e},
mO:function mO(d,e){this.a=d
this.b=e},
hI:function hI(d,e){this.a=d
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
lV:function lV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ciO:function ciO(){},
ciP:function ciP(){},
ciN:function ciN(){},
i5:function i5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ciD:function ciD(){},
ciE:function ciE(){},
ciA:function ciA(){},
ciB:function ciB(){},
ciC:function ciC(){},
jT:function jT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cj4:function cj4(d){this.a=d},
cj5:function cj5(){},
cj_:function cj_(d){this.a=d},
ciZ:function ciZ(){},
ciV:function ciV(){},
ciW:function ciW(){},
ciX:function ciX(){},
ciY:function ciY(){},
cj0:function cj0(d){this.a=d},
cj1:function cj1(){},
cj2:function cj2(){},
ifP(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fMx(e,v,d,B.aX(w))
w.$1(new C.fMt())
w.$1(new C.fMu())
w.$1(new C.fMv())
w.$1(new C.fMw())
return v},
fMx:function fMx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMt:function fMt(){},
fMu:function fMu(){},
fMv:function fMv(){},
fMw:function fMw(){},
b2v:function b2v(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciJ:function ciJ(d){this.a=d},
ciI:function ciI(){},
ciK:function ciK(){},
ciL:function ciL(d,e){this.a=d
this.b=e},
ciM:function ciM(d){this.a=d},
ap6:function ap6(d,e){this.c=d
this.a=e},
bkP:function bkP(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dMH:function dMH(){},
aMp:function aMp(){},
ciR(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ciR=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.fcY)
u=!1
w=1
break}u=B.l6(!1,d,t,!1,null,A.a75,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ciR,v)},
hQT(d){var w=A.d.bh(D.HZ,new C.ciS(d))
if(w<0)return!0
return w>=4},
hQU(d){var w=A.d.bh($.bFQ(),new C.ciT(d))
if(w<0)return!0
return w>=5},
ciS:function ciS(d){this.a=d},
ciT:function ciT(d){this.a=d},
ihy(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.x8()
$.pJ().oY(t,new C.fPo(s),!0)
u=B.a([B.Bz(v,A.pw,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ap(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fnR,v,v,v),A.f,v,v,new B.o(A.aS,v,v,w,v,v,A.n),v,v,v,v,A.mK,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b3,A.t,u,v)},
fPo:function fPo(d){this.a=d},
ih9(){return C.hb3()},
ie2(){return C.bDM()},
ig7(){return C.haV()},
aQE(d,e,f){var w=0,v=B.j(x.H),u
var $async$aQE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fOu(d,f),$async$aQE)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aQE,v)},
fOu(d,e){var w=0,v=B.j(x.H),u
var $async$fOu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bBX
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.L,null,new C.fOv(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fOu)
case 2:return B.h(null,v)}})
return B.i($async$fOu,v)},
fOv:function fOv(d,e){this.a=d
this.b=e},
adR:function adR(d,e,f){this.c=d
this.d=e
this.a=f},
ey9:function ey9(d,e){this.a=d
this.b=e},
eya:function eya(d,e){this.a=d
this.b=e},
eyb:function eyb(d,e){this.a=d
this.b=e},
eyc:function eyc(d){this.a=d},
ae7:function ae7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b2u(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b2t(g,m,f,d,e,h,l,k,j,o,i,null)},
hxo(d){return B.cv(new C.fMs(d))},
hb5(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ihh(d){if(d===D.cn)return"None"
return C.hb5(d)},
bCs(d,e,f,g){return C.i73(d,e,f,g)},
i73(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bCs=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.h7R&&t.pP())t.eM()
$.h7R=!0
s.a=null
w=3
return B.b(B.i1(A.bk,!0,"Animation preview",d,new C.fvQ(s,e,g,f),null,A.eO,!0,x.H),$async$bCs)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h7R=!1
case 1:return B.h(u,v)}})
return B.i($async$bCs,v)},
fZ4(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fZ4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bZ,x.w).w.a.a*0.88,280,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hb5(f)+" Slide transition preview"
s=s?Ag.Gd:A.u3
w=3
return B.b(C.bCs(d,s,new B.a5(t,t*0.56,B.bx(B.n(14),new C.aJW(f,null),A.ap),null),r),$async$fZ4)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fZ4,v)},
hwG(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dP(B.db(f,t),new B.t((1-t)*48,0))
case 3:return B.dP(B.db(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dP(B.db(f,t),new B.t(0,(1-t)*36))
case 5:return B.dP(B.db(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.ee(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.ee(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fI((1-t)*1.2)
return B.fy(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kh((1-t)*1.2)
return B.fy(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mT((1-t)*0.8)
v=0.6+t*0.4
w.jX(v,v,v,1)
return B.fy(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.db(f,t),new B.t((1-t)*24,0))}},
bFk(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bFk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bZ,x.w).w.a.a*0.88,300,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hb5(f)+" Element animation preview"
s=s?Ag.Gd:A.u3
w=3
return B.b(C.bCs(d,s,new B.a5(t,t*0.62,B.bx(B.n(14),new C.aAB(f,null),A.ap),null),r),$async$bFk)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bFk,v)},
ihg(d){var w,v,u,t,s=$.agx.W(0,d)
if(s!=null){$.agx.n(0,d,s)
return s}w=A.cF.aO(A.a.b5(d,A.a.cu(d,",")+1))
$.agx.n(0,d,w)
v=$.h8G=$.h8G+w.length
u=B.a7($.agx).k("cx<1>")
for(;;){if(!(v>41943040&&$.agx.a>1))break
t=new B.cx($.agx,u).gag(0)
if(!t.C())B.b9(B.fu())
v-=$.agx.W(0,t.gS(0)).length
$.h8G=v}return w},
igW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).lc(0,d),j=B.C(k,B.a7(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ar(d,r,o)
m=f.$1(e)
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Te(s,A.u))
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Te(t,A.u))
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Te(u,A.cz))
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b5(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2X(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.jK(e))
return m
case"rounded":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.gdC()*0.18
m.D(new B.iT(B.br(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aY(e.gbL().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bs())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aF(w.r,A.ag,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aY(p,o)
m.push(p)
o=v.f
if(o!=null)p.bw(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.bw(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.bs())
return v
case"diamond":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aY(e.gbL().a,e.b))
m.D(new B.aq(e.c,e.gbL().b))
m.D(new B.aq(e.gbL().a,e.d))
m.D(new B.aq(e.a,e.gbL().b))
m.D(new B.bs())
return m
case"arch":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aY(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bbQ(new B.t(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bs())
return m
default:m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.ok(e))
return m}},
fK1(d,e,f){return B.cv(new C.fK2(D.f5c.t(0,d),d,f,e))},
b2t:function b2t(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ciH:function ciH(d){this.a=d},
ciG:function ciG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciF:function ciF(){},
b2q:function b2q(d,e){this.b=d
this.a=e},
fMs:function fMs(d){this.a=d},
fMr:function fMr(d,e){this.a=d
this.b=e},
fvQ:function fvQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvO:function fvO(d){this.a=d},
fvP:function fvP(d,e){this.a=d
this.b=e},
aJW:function aJW(d,e){this.c=d
this.a=e},
bw8:function bw8(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fcK:function fcK(d,e,f){this.a=d
this.b=e
this.c=f},
aKE:function aKE(d,e){this.b=d
this.a=e},
Vv:function Vv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl0:function bl0(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dY9:function dY9(d){this.a=d},
dY8:function dY8(d){this.a=d},
dY7:function dY7(d){this.a=d},
J8:function J8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciz:function ciz(d){this.a=d},
ciy:function ciy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAB:function aAB(d,e){this.c=d
this.a=e},
bfk:function bfk(){this.d=0
this.c=this.a=null},
dbq:function dbq(d){this.a=d},
dbp:function dbp(d){this.a=d},
a8d:function a8d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blG:function blG(d,e){var _=this
_.d=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
elw:function elw(d,e,f){this.a=d
this.b=e
this.c=f},
b0p:function b0p(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bgy:function bgy(d,e,f){this.b=d
this.c=e
this.a=f},
brG:function brG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f1C:function f1C(){},
fK2:function fK2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsJ:function bsJ(d,e,f){this.b=d
this.c=e
this.a=f},
aMD:function aMD(){},
aN7:function aN7(){},
aOr:function aOr(){},
fNt(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fNt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xv.ca().Ms(D.doZ,A.uh,!0),$async$fNt)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.igQ(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNt,v)},
igQ(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a8w(d,new B.a0y(A.cJ.gct().aO(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.i8L(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8w(d,null,w.length>6e4?A.a.ar(w,0,6e4):w)}w=A.ch.Lc(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8w(d,null,w.length>6e4?A.a.ar(w,0,6e4):w)},
i8L(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cDi().cNl(B.rv(d,A.ij,o,o),o,o,!1).cPb(0,"word/document.xml")
if(n==null)return""
w=n.cXj()
v=A.ch.Lc(0,w==null?$.hzN():w,!0).split("</w:p>")
u=new B.fh("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).lc(0,r)
p=A.a.i(B.cF(q,new C.fyQ(),B.a7(q).k("M.E"),t).hl(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8w:function a8w(d,e,f){this.a=d
this.b=e
this.c=f},
fyQ:function fyQ(){},
hR_(d,e,f,g,h,i,j,k,l){return new C.Ol(l,e,d,g,f,i,h,j,k,null)},
Ol:function Ol(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFs:function aFs(d,e,f,g,h,i,j,k,l){var _=this
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
eEn:function eEn(d){this.a=d},
eEl:function eEl(){},
eEm:function eEm(d){this.a=d},
eAL:function eAL(){},
eAM:function eAM(){},
eAN:function eAN(d,e){this.a=d
this.b=e},
eCl:function eCl(d){this.a=d},
eC9:function eC9(){},
eCa:function eCa(){},
eA8:function eA8(){},
eDt:function eDt(d){this.a=d},
eEj:function eEj(d,e){this.a=d
this.b=e},
eCj:function eCj(d,e){this.a=d
this.b=e},
eE6:function eE6(d){this.a=d},
eE7:function eE7(){},
eE8:function eE8(){},
eE9:function eE9(d){this.a=d},
eEa:function eEa(){},
ezx:function ezx(d){this.a=d},
eEk:function eEk(){},
eBs:function eBs(d,e){this.a=d
this.b=e},
ezv:function ezv(d){this.a=d},
ezw:function ezw(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d,e,f){this.a=d
this.b=e
this.c=f},
eBR:function eBR(d){this.a=d},
eBr:function eBr(){},
eBq:function eBq(d){this.a=d},
eBo:function eBo(){},
eBn:function eBn(d){this.a=d},
eBp:function eBp(){},
eAH:function eAH(d){this.a=d},
eAI:function eAI(d){this.a=d},
eBy:function eBy(d){this.a=d},
eBt:function eBt(d){this.a=d},
eBu:function eBu(d){this.a=d},
eBv:function eBv(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBx:function eBx(d){this.a=d},
eBz:function eBz(d,e){this.a=d
this.b=e},
ezz:function ezz(){},
ezA:function ezA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBK:function eBK(){},
eBL:function eBL(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e,f){this.a=d
this.b=e
this.c=f},
eBJ:function eBJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBC:function eBC(d,e,f){this.a=d
this.b=e
this.c=f},
eBD:function eBD(d,e,f){this.a=d
this.b=e
this.c=f},
eBE:function eBE(d){this.a=d},
eBF:function eBF(d,e){this.a=d
this.b=e},
eBG:function eBG(d,e){this.a=d
this.b=e},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBB:function eBB(d,e){this.a=d
this.b=e},
eBN:function eBN(d){this.a=d},
eBO:function eBO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eBM:function eBM(d){this.a=d},
eC4:function eC4(){},
eC5:function eC5(){},
eC6:function eC6(){},
eC7:function eC7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eC1:function eC1(d){this.a=d},
eC3:function eC3(){},
eC2:function eC2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eC_:function eC_(d,e,f){this.a=d
this.b=e
this.c=f},
eC0:function eC0(d,e){this.a=d
this.b=e},
eC8:function eC8(){},
eBA:function eBA(d,e){this.a=d
this.b=e},
ezQ:function ezQ(){},
ezR:function ezR(d,e,f){this.a=d
this.b=e
this.c=f},
ezS:function ezS(d){this.a=d},
ezT:function ezT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ezP:function ezP(d){this.a=d},
eCe:function eCe(d){this.a=d},
eCd:function eCd(d,e){this.a=d
this.b=e},
eCc:function eCc(d,e){this.a=d
this.b=e},
eCb:function eCb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCf:function eCf(d,e){this.a=d
this.b=e},
eyu:function eyu(d,e){this.a=d
this.b=e},
ezO:function ezO(d,e){this.a=d
this.b=e},
ezM:function ezM(d){this.a=d},
eCn:function eCn(d,e,f){this.a=d
this.b=e
this.c=f},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezH:function ezH(d){this.a=d},
eCm:function eCm(d,e,f){this.a=d
this.b=e
this.c=f},
ezy:function ezy(d){this.a=d},
eA9:function eA9(){},
eE4:function eE4(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e,f){this.a=d
this.b=e
this.c=f},
eDu:function eDu(d,e,f){this.a=d
this.b=e
this.c=f},
eyv:function eyv(d){this.a=d},
eys:function eys(d,e){this.a=d
this.b=e},
eyi:function eyi(d,e){this.a=d
this.b=e},
eyf:function eyf(d){this.a=d},
eye:function eye(d,e){this.a=d
this.b=e},
eyg:function eyg(d,e){this.a=d
this.b=e},
ezK:function ezK(d){this.a=d},
ezL:function ezL(d,e){this.a=d
this.b=e},
ezJ:function ezJ(d){this.a=d},
eyX:function eyX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eyY:function eyY(d,e){this.a=d
this.b=e},
ez1:function ez1(d,e){this.a=d
this.b=e},
ez2:function ez2(d){this.a=d},
ez_:function ez_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez0:function ez0(d){this.a=d},
eyZ:function eyZ(){},
eyW:function eyW(d,e,f){this.a=d
this.b=e
this.c=f},
eBZ:function eBZ(d,e){this.a=d
this.b=e},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEf:function eEf(d){this.a=d},
eEg:function eEg(d,e,f){this.a=d
this.b=e
this.c=f},
eEc:function eEc(d){this.a=d},
eDK:function eDK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDJ:function eDJ(d,e,f){this.a=d
this.b=e
this.c=f},
eDI:function eDI(){},
eDH:function eDH(d,e,f){this.a=d
this.b=e
this.c=f},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDD:function eDD(d,e,f){this.a=d
this.b=e
this.c=f},
eDB:function eDB(d){this.a=d},
eDC:function eDC(d){this.a=d},
eDF:function eDF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDE:function eDE(d){this.a=d},
eAD:function eAD(d,e){this.a=d
this.b=e},
eAC:function eAC(d,e){this.a=d
this.b=e},
eDv:function eDv(){},
eE3:function eE3(d,e){this.a=d
this.b=e},
eE1:function eE1(d){this.a=d},
eE2:function eE2(d){this.a=d},
eyn:function eyn(d,e){this.a=d
this.b=e},
eyl:function eyl(d){this.a=d},
eym:function eym(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyp:function eyp(d,e,f){this.a=d
this.b=e
this.c=f},
eyt:function eyt(d,e){this.a=d
this.b=e},
eyk:function eyk(d,e,f){this.a=d
this.b=e
this.c=f},
eyj:function eyj(d){this.a=d},
eCk:function eCk(d,e,f){this.a=d
this.b=e
this.c=f},
eEb:function eEb(d,e,f){this.a=d
this.b=e
this.c=f},
eAG:function eAG(d,e,f){this.a=d
this.b=e
this.c=f},
eAF:function eAF(){},
ez5:function ez5(d,e,f){this.a=d
this.b=e
this.c=f},
ez6:function ez6(d){this.a=d},
eyh:function eyh(d,e){this.a=d
this.b=e},
eA7:function eA7(d,e){this.a=d
this.b=e},
eyq:function eyq(d,e){this.a=d
this.b=e},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d,e){this.a=d
this.b=e},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyy:function eyy(d){this.a=d},
eyM:function eyM(d,e){this.a=d
this.b=e},
eyx:function eyx(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyU:function eyU(){},
eyV:function eyV(){},
eyC:function eyC(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyO:function eyO(d,e){this.a=d
this.b=e},
eA6:function eA6(d,e,f){this.a=d
this.b=e
this.c=f},
eA5:function eA5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eA4:function eA4(d,e,f){this.a=d
this.b=e
this.c=f},
eA3:function eA3(d,e){this.a=d
this.b=e},
eyr:function eyr(d,e){this.a=d
this.b=e},
ez9:function ez9(d){this.a=d},
ez8:function ez8(d){this.a=d},
ez7:function ez7(d,e){this.a=d
this.b=e},
eza:function eza(d){this.a=d},
ezb:function ezb(d){this.a=d},
ezc:function ezc(d,e){this.a=d
this.b=e},
ezN:function ezN(d){this.a=d},
eBY:function eBY(d,e){this.a=d
this.b=e},
eBX:function eBX(d,e){this.a=d
this.b=e},
eBW:function eBW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBU:function eBU(d){this.a=d},
eBV:function eBV(d,e){this.a=d
this.b=e},
eBS:function eBS(){},
eBT:function eBT(){},
eDw:function eDw(){},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDy:function eDy(){},
eDz:function eDz(d){this.a=d},
eDA:function eDA(d,e){this.a=d
this.b=e},
eyw:function eyw(d,e){this.a=d
this.b=e},
ezB:function ezB(){},
ezC:function ezC(){},
ezD:function ezD(){},
ezG:function ezG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ezF:function ezF(d,e){this.a=d
this.b=e},
ezE:function ezE(d,e,f){this.a=d
this.b=e
this.c=f},
eB6:function eB6(d){this.a=d},
eB5:function eB5(){},
eB7:function eB7(d,e){this.a=d
this.b=e},
eB8:function eB8(d,e){this.a=d
this.b=e},
eB4:function eB4(d){this.a=d},
eB9:function eB9(d,e){this.a=d
this.b=e},
eB3:function eB3(d){this.a=d},
eBa:function eBa(d,e){this.a=d
this.b=e},
eB2:function eB2(d){this.a=d},
eBb:function eBb(d,e){this.a=d
this.b=e},
eB1:function eB1(d){this.a=d},
eBc:function eBc(d,e){this.a=d
this.b=e},
eB0:function eB0(d,e){this.a=d
this.b=e},
eBd:function eBd(d,e){this.a=d
this.b=e},
eB_:function eB_(d){this.a=d},
eBe:function eBe(d,e){this.a=d
this.b=e},
eAZ:function eAZ(d){this.a=d},
eAS:function eAS(d,e){this.a=d
this.b=e},
eAT:function eAT(d){this.a=d},
eAU:function eAU(d){this.a=d},
eAR:function eAR(d){this.a=d},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d){this.a=d},
eAW:function eAW(d,e){this.a=d
this.b=e},
eAP:function eAP(d){this.a=d},
eAX:function eAX(d,e){this.a=d
this.b=e},
eAO:function eAO(d){this.a=d},
eAY:function eAY(d){this.a=d},
eA_:function eA_(d){this.a=d},
eA0:function eA0(d){this.a=d},
eA2:function eA2(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezU:function ezU(d,e){this.a=d
this.b=e},
ezW:function ezW(d,e){this.a=d
this.b=e},
ezX:function ezX(d){this.a=d},
ezY:function ezY(d){this.a=d},
ezZ:function ezZ(d,e){this.a=d
this.b=e},
eA1:function eA1(d){this.a=d},
eEh:function eEh(d){this.a=d},
eEi:function eEi(d){this.a=d},
eBh:function eBh(d,e){this.a=d
this.b=e},
eBg:function eBg(d,e){this.a=d
this.b=e},
eBf:function eBf(d,e){this.a=d
this.b=e},
eBi:function eBi(d){this.a=d},
eBj:function eBj(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCH:function eCH(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCT:function eCT(d){this.a=d},
eD3:function eD3(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d){this.a=d},
eCK:function eCK(d){this.a=d},
eCL:function eCL(d){this.a=d},
eCM:function eCM(d){this.a=d},
eCN:function eCN(d){this.a=d},
eCO:function eCO(d){this.a=d},
eCP:function eCP(d){this.a=d},
eCQ:function eCQ(d){this.a=d},
eCR:function eCR(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD1:function eD1(d){this.a=d},
eCw:function eCw(d){this.a=d},
eD2:function eD2(d){this.a=d},
eCE:function eCE(d){this.a=d},
eD4:function eD4(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
eD5:function eD5(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e){this.a=d
this.b=e},
eCC:function eCC(d,e,f){this.a=d
this.b=e
this.c=f},
eCs:function eCs(d,e){this.a=d
this.b=e},
eCF:function eCF(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDr:function eDr(d,e){this.a=d
this.b=e},
eD7:function eD7(d,e,f){this.a=d
this.b=e
this.c=f},
eCB:function eCB(d,e,f){this.a=d
this.b=e
this.c=f},
eCr:function eCr(d,e,f){this.a=d
this.b=e
this.c=f},
eCp:function eCp(d,e){this.a=d
this.b=e},
eD8:function eD8(d,e){this.a=d
this.b=e},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCo:function eCo(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eCz:function eCz(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d){this.a=d},
eCy:function eCy(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDh:function eDh(d,e){this.a=d
this.b=e},
eCx:function eCx(d){this.a=d},
eDi:function eDi(d,e){this.a=d
this.b=e},
eCv:function eCv(d){this.a=d},
eDj:function eDj(d,e){this.a=d
this.b=e},
eCu:function eCu(d){this.a=d},
eDk:function eDk(d,e){this.a=d
this.b=e},
eCt:function eCt(d){this.a=d},
ez4:function ez4(d,e,f){this.a=d
this.b=e
this.c=f},
ez3:function ez3(d,e){this.a=d
this.b=e},
eDN:function eDN(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e){this.a=d
this.b=e},
eAc:function eAc(d,e){this.a=d
this.b=e},
eAb:function eAb(d){this.a=d},
eAd:function eAd(d,e){this.a=d
this.b=e},
eAa:function eAa(d){this.a=d},
eAK:function eAK(){},
eAJ:function eAJ(){},
eE_:function eE_(d){this.a=d},
eDZ:function eDZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDY:function eDY(d,e){this.a=d
this.b=e},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDX:function eDX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDP:function eDP(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDS:function eDS(d){this.a=d},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDW:function eDW(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezt:function ezt(d,e,f){this.a=d
this.b=e
this.c=f},
ezs:function ezs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezh:function ezh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ezi:function ezi(d,e){this.a=d
this.b=e},
ezj:function ezj(d,e){this.a=d
this.b=e},
ezk:function ezk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezg:function ezg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezl:function ezl(d,e){this.a=d
this.b=e},
ezn:function ezn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezm:function ezm(d,e){this.a=d
this.b=e},
ezo:function ezo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezf:function ezf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezp:function ezp(d,e){this.a=d
this.b=e},
eze:function eze(d,e){this.a=d
this.b=e},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezd:function ezd(d){this.a=d},
ezr:function ezr(d,e){this.a=d
this.b=e},
eBl:function eBl(d){this.a=d},
eBk:function eBk(d){this.a=d},
eBm:function eBm(d,e){this.a=d
this.b=e},
eAq:function eAq(d,e){this.a=d
this.b=e},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAp:function eAp(d,e){this.a=d
this.b=e},
eAs:function eAs(d,e){this.a=d
this.b=e},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAt:function eAt(d,e){this.a=d
this.b=e},
eAn:function eAn(d,e){this.a=d
this.b=e},
eAu:function eAu(d,e){this.a=d
this.b=e},
eAm:function eAm(d,e){this.a=d
this.b=e},
eAv:function eAv(d,e){this.a=d
this.b=e},
eAl:function eAl(d,e){this.a=d
this.b=e},
eAw:function eAw(d,e,f){this.a=d
this.b=e
this.c=f},
eAk:function eAk(d,e){this.a=d
this.b=e},
eAx:function eAx(d,e,f){this.a=d
this.b=e
this.c=f},
eAj:function eAj(d,e){this.a=d
this.b=e},
eAy:function eAy(d,e){this.a=d
this.b=e},
eAi:function eAi(d,e,f){this.a=d
this.b=e
this.c=f},
eAf:function eAf(d,e){this.a=d
this.b=e},
eAz:function eAz(d,e){this.a=d
this.b=e},
eAh:function eAh(d,e){this.a=d
this.b=e},
eAA:function eAA(d,e){this.a=d
this.b=e},
eAg:function eAg(d,e,f){this.a=d
this.b=e
this.c=f},
eAe:function eAe(d,e){this.a=d
this.b=e},
eAB:function eAB(d,e){this.a=d
this.b=e},
eAE:function eAE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyd:function eyd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCi:function eCi(d,e){this.a=d
this.b=e},
eCg:function eCg(d){this.a=d},
eCh:function eCh(d,e){this.a=d
this.b=e},
afD:function afD(d,e,f){this.a=d
this.b=e
this.c=f},
azX:function azX(d,e){this.c=d
this.a=e},
be6:function be6(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b7$=e
_.c=_.a=null},
d71:function d71(d){this.a=d},
d70:function d70(d){this.a=d},
bel:function bel(d,e){this.c=d
this.a=e},
d7p:function d7p(d){this.a=d},
d7q:function d7q(d){this.a=d},
Ka:function Ka(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
be5:function be5(){this.d=!1
this.c=this.a=null},
d6Z:function d6Z(d){this.a=d},
d6V:function d6V(d){this.a=d},
d7_:function d7_(d){this.a=d},
d6U:function d6U(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
d6W:function d6W(d){this.a=d},
d6X:function d6X(d,e){this.a=d
this.b=e},
Q1:function Q1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a01:function a01(d,e,f){this.c=d
this.d=e
this.a=f},
aFv:function aFv(d,e,f){var _=this
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
eEY:function eEY(){},
eEO:function eEO(d){this.a=d},
eEX:function eEX(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEM:function eEM(d){this.a=d},
eEN:function eEN(d,e,f){this.a=d
this.b=e
this.c=f},
eEV:function eEV(){},
eEW:function eEW(d){this.a=d},
eER:function eER(d){this.a=d},
eES:function eES(d){this.a=d},
eET:function eET(d){this.a=d},
eEU:function eEU(d){this.a=d},
eEZ:function eEZ(d,e,f){this.a=d
this.b=e
this.c=f},
eF0:function eF0(d,e){this.a=d
this.b=e},
eF_:function eF_(d){this.a=d},
Kg:function Kg(d,e){this.c=d
this.a=e},
btd:function btd(d,e){this.b=d
this.a=e},
bj7:function bj7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bj6:function bj6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLl:function aLl(){},
aNk:function aNk(){},
bz0:function bz0(){},
aNl:function aNl(){},
fPp(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fPp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xv.ca().Ms(B.a(["pdf"],x.s),A.uh,!0),$async$fPp)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqo(s,"data:application/pdf;base64,"+A.cJ.gct().aO(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPp,v)},
ihs(d){var w,v,u,t,s,r
try{w=B.jE(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.cc(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).lc(0,w).gL(0)
if(t>0){s=J.aS2(t,1,200)
return s}}catch(r){}return 1},
fPg(d){return C.ihr(d)},
ihr(d){var w=0,v=B.j(x.T),u
var $async$fPg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPg,v)},
bEx(d,e,f,g){return C.ihB(d,e,f,g)},
ihB(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bEx=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ef(b6,x.co).gag(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hxZ(b9,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jZ(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jZ(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jZ(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jZ(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.S()
g=new B.p2()
f=B.z8(g,null)
a7=B.I()
a7.r=A.re.gp(0)
f.aP(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.I()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bB
b1.e=A.dQ
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.L)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.t((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.G()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.ni()
w=7
return B.b(a3.xd(800,h),$async$bEx)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hw(A.h9),$async$bEx)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eS(A.dK.gaR(a5))
a7=A.cJ.gct().aO(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.ab(b5)
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
return B.i($async$bEx,v)},
aRc(d,e,f){return C.ihp(d,e,f)},
ihp(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ai5(d,e,f,new C.fPe(r,q),q,"Sign document"),$async$aRc)
case 3:if(!new B.ef(q,x.co).gag(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bEx(q,t,r.b,r.c),$async$aRc)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b2x(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRc,v)},
ihz(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hr0(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hr0(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b5(A.a.aX(A.o.fu(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b5(A.a.aX(A.o.fu(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lO&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hqC(q.ay)+";border:2px solid "+C.hqC(q.ch)+'"></div>'
break
case 5:l=C.h9W(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gakz()
if(p==null)p=A.aAg
n=B.T(p)
k=n.k("je<1>")
j=new B.je(p,0,8,k)
j.od(p,0,8,n.c)
j=new B.bR(j,j.gL(0),k.k("bR<ak.E>"))
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
hqC(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hr0(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bEv(d,e){var w=0,v=B.j(x.H)
var $async$bEv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ck(null,null,!0,null,new C.fPn(e,C.ihz(e),d),d,null,!0,!0,x.H),$async$bEv)
case 2:return B.h(null,v)}})
return B.i($async$bEv,v)},
bEw(){var w=0,v=B.j(x.T),u,t,s
var $async$bEw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.H2(92,2400),$async$bEw)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fPg(s),$async$bEw)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEw,v)},
aRd(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hba(d),$async$aRd)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=Z.fRZ(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRd,v)},
hkX(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b2x:function b2x(d,e,f){this.a=d
this.b=e
this.c=f},
fPe:function fPe(d,e){this.a=d
this.b=e},
fPn:function fPn(d,e,f){this.a=d
this.b=e
this.c=f},
fPk:function fPk(d){this.a=d},
fPl:function fPl(d,e,f){this.a=d
this.b=e
this.c=f},
fPm:function fPm(d,e,f){this.a=d
this.b=e
this.c=f},
ihq(d){return C.kH(d.w)},
ihx(d){var w,v,u,t
if(d.length===0||!A.d.d5(d,C.ijh()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yV(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hDR()
if(w.b.test(u))return u
return null},
hy0(d,e,f){var w,v,u=C.hMD(d),t=$.oh()
for(w=0;w<80;++w){v=u+A.a.aX(A.o.u(t.ap(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
ihD(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aW(d.a),v=new B.f2(w,d.b);v.C();){u=w.gS(w).y
t=C.yV(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fPc(d,e){var w,v=d.y,u=C.yV(v==null?"":v)
if(u!=null)return d.y=u
w=C.ihD(new B.Z(e,new C.fPd(d),B.T(e).k("Z<1>")))
v=d.x
return d.y=C.hy0(v==null?"":v,null,w)},
ihC(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kH(w.w))return null
v=w.y
return C.yV(v==null?"":v)},
hR1(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"SL"+A.d.hl(u)},
Wr(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Wr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Wr)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$Wr)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
w=1
break}q=J.r(r,"stashes")
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
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wr,v)},
Ws(d){return C.hR2(d)},
hR2(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Ws=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Ws)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hM("ngmy_slides_transfer_qr_stashes_v1",B.H(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,A.cG,null),$async$Ws)
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
return B.i($async$Ws,v)},
a8y(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8y=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8y)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Wr(),$async$a8y)
case 4:s=a6
r=C.yV(a2==null?"":a2)
if(r==null)r=a3!=null?C.hy0(a3,null,A.vg):null
q=x.N
p=B.aX(q)
for(o=J.dn(s),n=J.aW(o.gi2(s)),m=x.f;n.C();){l=n.gS(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.yV(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdV(s),n=n.gag(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gS(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dO.aO(t)
g.n(0,"payload",A.cJ.gct().aO(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).a8().ae())
if(D.U8.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yV(J.k(q==null?"":q))
if(f==null)f=C.hl1(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Ws(s),$async$a8y)
case 7:u=new B.aGY(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hR1()
n=r==null
d=n?C.hl1(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dO.aO(t)
q.n(0,"payload",A.cJ.gct().aO(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).a8().ae())
if(D.U8.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Ws(s),$async$a8y)
case 8:u=new B.aGY(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8y,v)},
hl1(d){var w,v,u=$.oh()
for(w=0;w<200;++w){v="SL"+A.a.aX(A.o.u(u.ap(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
as6(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$as6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$as6)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Wr(),$async$as6)
case 6:t=f
s=J.a6(t)
r=s.gL(t)
s.bs(t,new C.cj6(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.Ws(t),$async$as6)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$as6,v)},
as5(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$as5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yV(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$as5)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Wr(),$async$as5)
case 6:t=o.k0(f),t=t.gag(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gS(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.yV(J.k(q==null?"":q))===p){u=C.a8x(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as5,v)},
a8x(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8x=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a8x)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Wr(),$async$a8x)
case 6:p=a1
o=J.a6(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a6(n)
k=B.aK(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.ch.cB(0,A.cF.aO(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.U8.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aM(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aJ(q,"sharedByAdmin",!0)
s=A.X.aq(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dR(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).a8().ae())
o.n(p,g,l)}w=7
return B.b(C.Ws(p),$async$a8x)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8x,v)},
ihw(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).a8().ae())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("N<1,a8<m,@>>")
w=B.C(new B.N(d,new C.fPj(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fPr(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).a8().ae())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ah())
return A.X.aq(w,null)}return A.X.aq(C.ihw(d==null?B.a([],x.D):d,f,g),null)},
fPq(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fPq=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8y(h,d,e,f,g),$async$fPq)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yV(e==null?"":e)
u=new B.aGK(s,t)
w=1
break}t=A.dO.aO(h)
t=A.kA.gct().aO(t)
u=new B.aGK(C.yV(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPq,v)},
hbc(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d2(q,"{"))try{w=A.X.aM(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
ihA(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.hbc(v))return v
u=A.a.cu(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b5(v,u))
if(C.hbc(t))return t}s=A.a.cu(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b5(v,s))
if(C.hbc(t))return t}}return null},
fPf(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.X.aM(0,A.ch.cB(0,A.cF.aO(J.nk(t,8))),null))
else w=v.a(A.X.aM(0,t,null))
v=C.i_O(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahR(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.as5(t[1]),$async$ahR)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fPf(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yV(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.as5(r),$async$ahR)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fPf(s)
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
return B.b(C.a8x(t[1]),$async$ahR)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fPf(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fPf(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahR,v)},
i_O(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.U8.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hb9(C.Wn(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cF(t,new C.flp(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a7(t).k("M.E"))
return t}return B.a([],x.D)},
hb9(d,e){var w,v,u,t,s,r,q,p,o=d.ah()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gS(u)
if(t.b(s)){r=Date.now()
q=$.ja
$.ja=q+1
J.aJ(s,"id",""+1000*r+"_"+q)}}p=C.Wn(B.a2(o,x.N,x.z))
if(e&&C.kH(p.w))p.Q=new B.V(Date.now(),0,!1).a8().bS(144e8).ae()
return p},
bEg(){var w=0,v=B.j(x.aT),u,t,s
var $async$bEg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.H1(),$async$bEg)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahR(s),$async$bEg)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEg,v)},
fYj(d){var w=0,v=B.j(x.T),u,t
var $async$fYj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i1(D.Y7,!0,"Dismiss",d,new C.fYk(),new C.fYl(),A.Gb,!0,x.N),$async$fYj)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.fb6)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fYj,v)},
ilr(d,e,f,g,h){return B.a4(d,!1).cc(B.eh(new C.fYm(h,e,g,f),!0,null,x.H))},
fPd:function fPd(d){this.a=d},
cj6:function cj6(d){this.a=d},
fPj:function fPj(){},
flp:function flp(d){this.a=d},
fYk:function fYk(){},
fYl:function fYl(){},
fYm:function fYm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wp:function Wp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFt:function aFt(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eEu:function eEu(){},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEr:function eEr(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEv:function eEv(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEz:function eEz(d){this.a=d},
eEA:function eEA(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEB:function eEB(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
Wq:function Wq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm1:function bm1(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eED:function eED(d,e){this.a=d
this.b=e},
eEE:function eEE(d){this.a=d},
eEF:function eEF(){},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d,e){this.a=d
this.b=e},
aFq:function aFq(d){this.a=d},
aFr:function aFr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ey7:function ey7(d){this.a=d},
ey6:function ey6(){},
ey8:function ey8(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey2:function ey2(){},
ey4:function ey4(d){this.a=d},
ey5:function ey5(d){this.a=d},
bwu:function bwu(){},
as7:function as7(d){this.a=d},
aFu:function aFu(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eEJ:function eEJ(d){this.a=d},
eEI:function eEI(d){this.a=d},
i5b(){var w,v,u,t
for(v=0;v<4;++v){w=D.dcZ[v]
try{if(Ad.c_S(w)){u=w
return u}}catch(t){}}return null},
RD(d,e){return C.ied(d,e)},
ied(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$RD=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i5b()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oB?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qN(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gI(c3)
b9=$.ax()
o=new B.eD(b8,b9)
n=new B.eD("Getting ready\u2026",b9)
m=new B.eD(0,b9)
l=B.oB(new C.fJv(c2,b7,o),!1,!1)
b6.m_(0,l)
b9=x.H
B.ck(null,A.de,!1,null,new C.fJw(n,m),c6,null,!0,!0,b9)
k=new C.fJA(b7)
j=new C.fJB()
i=null
t=4
b3=c2.a
h=Ak.aTx(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h0f(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ad.aYw(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.ID.yH(i,"dataavailable",new C.fJx(e))
d=new B.c_(new B.bj($.bB,x.dT),x.b2)
A.ID.yH(i,"stop",new C.fJy(d))
J.ais(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$RD)
case 8:w=7
return B.b(c5.$1(d0),$async$RD)
case 7:a0=d0
J.h0h(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ais(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ais(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$RD)
case 15:w=14
return B.b(c5.$1(d0),$async$RD)
case 14:a0=d0
case 13:J.h0h(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.ais(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcE()
else b3=!0
if(!b3){w=17
break}J.h0h(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bP(A.ft,null,b9),$async$RD)
case 18:w=16
break
case 17:J.ais(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ais(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.da(0,A.ob),$async$RD)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hN(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.mZ(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Hg(b0)
J.lF(b0)
B.bP(A.qb,new C.fJz(a7),b9)
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
J.lF(l)
if(p.pP())p.eM()
c3=o
b3=$.ax()
c3.si6(b3)
J.aS6(c3,0)
c3=n
c3.si6(b3)
J.aS6(c3,0)
c3=m
c3.si6(b3)
J.aS6(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$RD,v)},
fJv:function fJv(d,e,f){this.a=d
this.b=e
this.c=f},
fJu:function fJu(){},
fJw:function fJw(d,e){this.a=d
this.b=e},
fJA:function fJA(d){this.a=d},
fJB:function fJB(){},
fJx:function fJx(d){this.a=d},
fJy:function fJy(d){this.a=d},
fJz:function fJz(d){this.a=d},
bwI:function bwI(d,e,f){this.c=d
this.d=e
this.a=f},
ffn:function ffn(){},
ffo:function ffo(){},
cjs(d){var w=0,v=B.j(x.at),u,t,s
var $async$cjs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asf(d,A.zX),$async$cjs)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bF(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bA
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjs,v)},
cjr(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8e:function a8e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blL:function blL(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
emn:function emn(d){this.a=d},
eml:function eml(d){this.a=d},
emm:function emm(d,e){this.a=d
this.b=e},
a97:function a97(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oI$=k
_.oJ$=l
_.oK$=m
_.nZ$=n},
a98:function a98(d,e){this.a=d
this.b=e},
b4b:function b4b(){},
cmw:function cmw(){},
cmx:function cmx(){},
cmy:function cmy(d,e,f,g,h,i,j,k,l){var _=this
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
hER(d){return new C.aiK(d)},
a3n:function a3n(){},
aiK:function aiK(d){this.a=d},
aSr:function aSr(){},
axI:function axI(d,e){this.d=d
this.b=e
this.a=null},
aTY:function aTY(d){this.b=d
this.a=null},
fED(d,e){var w=0,v=B.j(x.H)
var $async$fED=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gxS().M9(d,e),$async$fED)
case 2:B.fS4()
return B.h(null,v)}})
return B.i($async$fED,v)},
hvh(d,e){return(A.rO[(d^e)&255]^A.o.aD(d,8))>>>0},
fBL(d,e,f,g,h,i){var w=C.iax(d,A.dg,f,null,A.d_,g,h,i)
return w},
hx9(d){var w=F.hxS(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hMD(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.ps.h(0,w)
if(v!=null)return v
for(u=A.ps.gdV(A.ps),u=u.gag(u);u.C();){t=u.gS(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ar(s,0,2)
return A.a.ar(s+"XX",0,2)},
hxh(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.deL[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bCp(d,e){return C.i6Z(d,e)},
i6Z(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hN([d],"application/pdf")
n=x.z
q=B.aVF(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cC(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ed(B.jY(o,"share",[p]),x.H),$async$bCp)
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
return B.i($async$bCp,v)},
hb3(){var w=0,v=B.j(x.y),u,t,s
var $async$hb3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ft3
s=$.bBX
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bCp(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hb3,v)},
bDM(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.ft3
l=$.bBX
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hrJ()?3:4
break
case 3:w=5
return B.b(C.bCp(m,k),$async$bDM)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bBY
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mZ(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Hg(q)
w=10
return B.b(B.bP(A.a2,null,x.H),$async$bDM)
case 10:J.lF(q)
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
return B.i($async$bDM,v)},
haV(){var w=0,v=B.j(x.y),u,t,s,r
var $async$haV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bBY
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lU.r0(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$haV,v)},
hbb(d,e){var w=0,v=B.j(x.H),u,t
var $async$hbb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hN([d],"text/html"))
t.toString
u=window
u.toString
A.lU.r0(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hbb,v)},
b38(d,e){var w=0,v=B.j(x.y),u
var $async$b38=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3a(d,e),$async$b38)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b39(d),$async$b38)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b38,v)}},D,P,An,A8,Y,A9,W,Ao,G,F,E,H,X,R,Z,A_,Ap,N,Aq,A0,Ar,As,Aa,K,At,Au,A1,O,A2,L,Ab,Av,Aw,Q,Ac,Ax,Ad,Ae,Ay,Af,Az,Ag,Ah,AA,AB,S,AC,I,AD,T,U,M,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ai=c[204]
A6=c[74]
Aj=c[54]
Ak=c[65]
V=c[221]
A7=c[58]
Al=c[147]
Am=c[232]
C=a.updateHolder(c[5],C)
D=c[219]
P=c[139]
An=c[41]
A8=c[223]
Y=c[220]
A9=c[233]
W=c[209]
Ao=c[133]
G=c[188]
F=c[35]
E=c[222]
H=c[97]
X=c[122]
R=c[149]
Z=c[32]
A_=c[177]
Ap=c[235]
N=c[157]
Aq=c[185]
A0=c[107]
Ar=c[135]
As=c[228]
Aa=c[117]
K=c[224]
At=c[236]
Au=c[132]
A1=c[68]
O=c[198]
A2=c[83]
L=c[159]
Ab=c[119]
Av=c[95]
Aw=c[226]
Q=c[124]
Ac=c[141]
Ax=c[94]
Ad=c[59]
Ae=c[194]
Ay=c[40]
Af=c[81]
Az=c[156]
Ag=c[148]
Ah=c[231]
AA=c[234]
AB=c[230]
S=c[75]
AC=c[227]
I=c[174]
AD=c[237]
T=c[52]
U=c[225]
M=c[206]
A3=c[229]
A4=c[113]
A5=c[64]
C.o8.prototype={
vl(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.u8(t,v)
return new C.o8(t===0?!1:w,v,t)},
bNM(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dl()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.u8(w,u)
return new C.o8(r===0?!1:s,u,r)},
bOi(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dl()
w=o-d
if(w<=0)return p.a?$.hcB():$.Dl()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.u8(w,u)
q=new C.o8(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a3a())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ao(e,16)
if(A.o.F(e,16)===0)return r.bNM(v)
u=w+v+1
t=new Uint16Array(u)
C.hof(r.b,w,e,t)
w=r.a
s=C.u8(u,t)
return new C.o8(s===0?!1:w,t,s)},
mx(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ao(e,16)
u=A.o.F(e,16)
if(u===0)return n.bOi(v)
t=w-v
if(t<=0)return n.a?$.hcB():$.Dl()
s=n.b
r=new Uint16Array(t)
C.hWI(s,w,e,r)
w=n.a
q=C.u8(t,r)
p=new C.o8(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aE(0,$.a3a())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a3a())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cL9(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8R(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8R(t,e)
if(s===0)return $.Dl()
if(r===0)return t.a===e?t:t.vl(0)
w=s+1
v=new Uint16Array(w)
C.hWG(t.b,s,d.b,r,v)
u=C.u8(w,v)
return new C.o8(u===0?!1:e,v,u)},
Hz(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dl()
w=d.c
if(w===0)return t.a===e?t:t.vl(0)
v=new Uint16Array(s)
C.bbi(t.b,s,d.b,w,v)
u=C.u8(s,v)
return new C.o8(u===0?!1:e,v,u)},
bAJ(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.u8(r,u)
return new C.o8(!1,u,s)},
bAI(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.u8(u,r)
return new C.o8(!1,r,v)},
bAK(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.u8(p,m)
return new C.o8(s!==0,m,s)},
Vi(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Dl()
w=t.a
if(w===e.a){if(w){w=$.a3a()
return t.Hz(w,!0).bAK(e.Hz(w,!0),!0).a8R(w,!0)}return t.bAJ(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bAI(v.Hz($.a3a(),!1),!1)},
a7(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8R(e,v)
if(C.cL9(u.b,t,e.b,w)>=0)return u.Hz(e,v)
return e.Hz(u,!v)},
aE(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vl(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8R(e,v)
if(C.cL9(u.b,t,e.b,w)>=0)return u.Hz(e,v)
return e.Hz(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dl()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hog(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.u8(w,t)
return new C.o8(q===0?!1:r,t,q)},
bNL(d){var w,v,u,t
if(this.c<d.c)return $.Dl()
this.aSD(d)
w=$.h5T.ca()-$.ayv.ca()
v=C.h5V($.h5S.ca(),$.ayv.ca(),$.h5T.ca(),w)
u=C.u8(w,v)
t=new C.o8(!1,v,u)
return this.a!==d.a&&u>0?t.vl(0):t},
cqx(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aSD(d)
w=C.h5V($.h5S.ca(),0,$.ayv.ca(),$.ayv.ca())
v=C.u8($.ayv.ca(),w)
u=new C.o8(!1,w,v)
if($.h5U.ca()>0)u=u.mx(0,$.h5U.ca())
return t.a&&u.c>0?u.vl(0):u},
aSD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hoc&&d.c===$.hoe&&g.b===$.hob&&d.b===$.hod)return
w=d.b
v=d.c
u=16-A.o.gakX(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hoa(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hoa(g.b,f,u,r)}else{r=C.h5V(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h5W(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cL9(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbi(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbi(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hWH(p,r,i);--o
C.hog(h,j,0,r,o,s)
if(r[i]<h){m=C.h5W(j,s,o,n)
C.bbi(r,l,n,m,r)
while(--h,r[i]<h)C.bbi(r,l,n,m,r)}--i}$.hob=g.b
$.hoc=f
$.hod=w
$.hoe=v
$.h5S.b=r
$.h5T.b=l
$.ayv.b=s
$.h5U.b=u},
gX(d){var w,v,u,t=new C.cLa(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cLb().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o8&&this.aL(0,e)===0},
tB(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vg(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gakX(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cLc(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cLd(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.ll(A.aG.gaR(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vl(0):r
while(v.c>1){u=$.hBL()
if(u.c===0)B.b9(D.b85)
t=v.cqx(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bNL(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).hl(0)},
$iaTa:1,
$ihP:1}
C.aSB.prototype={
M(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gL(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cPb(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gak(d){return A.d.gak(this.a)},
gan(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gag(d){var w=this.a
return new J.ke(w,w.length,B.T(w).k("ke<1>"))}}
C.Sh.prototype={
cXj(){var w,v
if(this.as==null)this.beb()
w=this.as
v=w==null?null:w.apS()
return v==null?null:v.eU()},
beb(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.apS().eU()
this.as=new C.bRp(v)}},
gY(d){return this.at}}
C.a4k.prototype={
a6(){return"CompressionType."+this.b}}
C.bJo.prototype={
eE(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cr()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.zw[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cr()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fM(u,t)&A.zw[d])
s.c=t}return v}}
C.bHJ.prototype={
cNk(d,e){var w,v,u,t,s,r=this,q=new C.bJo(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eE(8)!==66||q.eE(8)!==90||q.eE(8)!==104)return!1
w=r.a=q.eE(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.coP(q)
if(t<0)return!1
if(t===0){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
s=r.coS(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
return!0}}return!0},
coP(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eE(8)
if(t!==D.duC[u])v=!1
if(t!==D.d61[u])w=!1
if(!w&&!v)return-1}return v?0:2},
coS(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eE(1),d2=((d3.eE(8)<<8|d3.eE(8))<<8|d3.eE(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c3M()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eE(3)
if(q<2||q>6)return-1
v=d3.eE(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eE(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.bZ(6,$.hzR(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eE(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eE(1)===0)break
i=d3.eE(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hzQ()
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
if(f<h)h=f}c9.c_7(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.auP(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.auP(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.ao(a8,16)
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
a3=c9.auP(d3)
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
d4.bt(c3)
c1=(c1<<8^D.I4[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.I8[b9];++b9
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
if(b8===0){b8=D.I8[b9];++b9
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
if(b8===0){b8=D.I8[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.I8[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.I8[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bt(c3)
c1=c1<<8^D.I4[c1>>>24&255^v];--c2}d4.bt(c3)
c1=(c1<<8^D.I4[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bt(c7)
c1=(c1<<8^D.I4[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bt(c7)
c1=(c1<<8^D.I4[c1>>>24&255^c7&255])>>>0
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
auP(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eE(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eE(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c_7(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c3M(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cDj.prototype={
aIX(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bRj(e)
if(q<0)return
e.c=q
if(e.aQ()!==101010256)return
e.b_()
e.b_()
e.b_()
e.b_()
r.f=e.aQ()
r.r=e.aQ()
w=e.b_()
if(w>0)e.aJ_(w,!1)
r.cpc(e)
q=r.r
v=r.f
u=e.aM1(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aQ()!==33639248)break
s=new C.ba_()
s.cXi(0,u,e,f)
q.push(s)}},
cpc(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8u(20,r)
if(w.aQ()!==117853008){d.c=s
return}w.aQ()
v=w.tm()
w.aQ()
d.c=v
if(d.aQ()!==101075792){d.c=s
return}d.tm()
d.b_()
d.b_()
d.aQ()
d.aQ()
d.tm()
d.tm()
u=d.tm()
t=d.tm()
this.f=u
this.r=t
d.c=s},
bRj(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8u(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.amy(A.ij)
o.aNi(r.eU(),A.ij,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aQ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cDh.prototype={}
C.ay8.prototype={
a6(){return"ZipEncryptionMode."+this.b}}
C.cDk.prototype={
aIX(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aQ()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aGV.h(0,e.b_())
o.c=w==null?D.MS:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aQ()
o.r=e.aQ()
o.w=e.aQ()
v=e.b_()
u=e.b_()
o.x=e.aoz(v)
o.y=e.hn(u).eU()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aYf:D.Es
o.ay=f
o.Q=e.hn(t)
if(o.at!==D.Es&&u>2){w=o.y
w.toString
s=B.rv(w,A.ij,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.aoz(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aYg
o.ax=new C.cDh(r,q)
w=D.aGV.h(0,q)
o.c=w==null?D.MS:w}}}if((o.b&8)!==0){p=e.aQ()
if(p===134695760)o.f=e.aQ()
else o.f=p
o.r=e.aQ()
o.w=e.aQ()}},
gL(d){return this.bnP().length},
apS(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rv(new Uint8Array(0),A.ij,q,q)
w=r.at
if(w!==D.Es)if(p.gL(0)<=0)r.at=D.Es
else{if(w===D.aYf){p=r.bM3(p)
r.Q=p}else if(w===D.aYg){p=r.bLH(p)
r.Q=p}r.at=D.Es}w=r.c
if(w===D.aj2){v=p.c
u=B.dm()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pP.BF(p.eU(),!0,!1)
else{t=B.a8X(A.ij,r.w)
p=r.Q
p.toString
A.pP.a4G(p,t,!0,!1)
u.b=t.H6()}r.Q.c=v
return B.rv(u.bk(),A.ij,q,q)}else if(w===D.aj3){s=B.a8X(A.ij,32768)
p=r.Q
v=p.c
C.hF1().cNk(p,s)
u=s.H6()
r.Q.c=v
return B.rv(u,A.ij,q,q)}else return B.rv(p.eU(),A.ij,q,q)},
bnP(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eU()},
u(d){return this.x},
ba5(d){var w=this.ch,v=C.K6(C.hvh(w[0].N(0),d))
w[0]=v
v=w[1].a7(0,v.Vi(0,C.K6(255)))
w[1]=v
w[1]=v.aI(0,C.K6(134775813)).a7(0,C.K6(1)).Vi(0,C.K6(4294967295))
w[2]=C.K6(C.hvh(w[2].N(0),w[1].mx(0,24).N(0)))},
aS1(){var w=(this.ch[2].Vi(0,C.K6(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bM3(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rv(new Uint8Array(0),A.ij,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.ba5(u[v.c++]^r.aS1())}t=r.Q.eU()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aS1()
r.ba5(s)
u&2&&B.aj(t)
t[w]=s}return B.rv(t,A.ij,q,q)},
bLH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hn(8).eU()
v=16}else if(k===2){w=d.hn(12).eU()
v=24}else{w=d.hn(16).eU()
v=32}u=d.hn(2).eU()
t=d.hn(d.gL(0)-10)
s=d.hn(10)
r=t.eU()
k=this.ay
k.toString
q=C.hWn(k,w,v)
p=new Uint8Array(B.cn(A.aG.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.cn(A.aG.ds(q,v,k)))
if(!C.hnG(A.aG.ds(q,k,k+2),u))throw B.W(B.fo("password error"))
k=new Uint8Array(16)
n=new C.bGj(k,new Uint8Array(16),p)
k=x.S
m=J.a5K(0,k)
m=n.r=new C.cml(m)
m.c=!0
m.b=m.bn6(!0,new C.atG(p))
if(m.c)m.d=B.bq(D.ox,!0,k)
else m.d=B.bq(D.zk,!0,k)
l=C.hlU(C.hlW(),64)
l.bgx(new C.atG(o))
n.w=l
n.cWT(r,0,r.length)
k=s.eU()
m=n.x
m===$&&B.c()
if(!C.hnG(k,m))throw B.W(B.fo("macs don't match"))
return B.rv(r,A.ij,null,null)}}
C.ba_.prototype={
cXi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.aQ()
n.w=e.aQ()
n.x=e.aQ()
w=e.b_()
v=e.b_()
u=e.b_()
n.y=e.b_()
e.b_()
n.Q=e.aQ()
n.as=e.aQ()
if(w>0)n.at=e.aoz(w)
if(v>0){t=e.hn(v).eU()
n.ax=t
if(v>=4){s=B.rv(t,A.ij,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a8u(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tm()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tm()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tm()
p-=8}if(p>=4&&n.y===65535)n.y=o.aQ()}}}}if(u>0)e.aoz(u)
f.c=n.as
t=new C.cDk(D.MS,n,D.Es,B.a([C.K6(0),C.K6(0),C.K6(0)],x.f3))
n.ch=t
t.aIX(0,f,g)},
u(d){return this.at}}
C.cDi.prototype={
cNl(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cDj(B.a([],x.fT))
this.a=g
g.aIX(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aSB(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Sh(o,A.o.ao(Date.now(),1000),0):C.he1(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.he1(o,q.w,q)
if(k.as==null)k.beb()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.amy(A.ij)
j.aNi(o,A.ij,h,h)}i=j==null?h:j.eU()
if(i!=null)new B.Gq(!1).DJ(i,0,h,!0)}}return v}}
C.bGj.prototype={
cWT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CD(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hEL(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bPy(u,0,w,0,o)}else{o===$&&B.c()
q.bM7(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lt(w,0)
m.x=A.aG.ds(m.x,0,10)
w=m.w
l=w.a
l.kK(0)
w=w.d
w===$&&B.c()
l.CD(0,w,0,w.length)
return f}}
C.cmq.prototype={}
C.cmu.prototype={}
C.cmo.prototype={}
C.atG.prototype={}
C.cmt.prototype={
cNA(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ea(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bgx(new C.atG(A.aG.fL(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bQE(n.a,n.b,t,s,r)
r+=v}A.aG.hd(f,g,g+w,s)
return o.a.c},
bQE(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CD(0,d,0,d.length)
v.CD(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lt(u,0)
u=m.c
A.aG.hd(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CD(0,s,0,s.length)
w.Lt(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cmp.prototype={}
C.cmn.prototype={}
C.atH.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.atH){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tB(d,e){var w=this.a
w===$&&B.c()
w=A.o.tB(w,e.gc_o())
if(!w)e.gc_o()
return w},
aLs(d,e){this.a=0
this.b=d},
tE(d){return this.aLs(d,null)},
aM4(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fh(""),u=w.a
u===$&&B.c()
w.b1N(v,u)
u=w.b
u===$&&B.c()
w.b1N(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b1N(d,e){var w,v=A.o.fu(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bv(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cms.prototype={
kK(d){var w,v=this
v.a.tE(0)
v.c=0
A.aG.ht(v.b,0,4,0)
v.w=0
w=v.r
A.d.ht(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
apl(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b3e(u,0)
v.c=0}v.a.aM4(1)},
CD(d,e,f,g){var w=this.cnz(e,f,g)
f+=w
g-=w
w=this.cnA(e,f,g)
this.cnq(e,f+w,g-w)},
Lt(d,e){var w,v=this,u=C.hlV(v.a),t=u.a
t===$&&B.c()
t=C.hbG(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hbG(w,3)
v.cnu()
v.cnr(u)
v.atE()
v.chB(d,e)
v.kK(0)
return 20},
b3e(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oj(A.aG.gaR(d),d.byteOffset,d.length).getUint32(e,A.iv===w.d)
if(w.w===16)w.atE()},
atE(){this.cWS()
this.w=0
A.d.ht(this.r,0,16,0)},
cnq(d,e,f){while(f>0){this.apl(d[e]);++e;--f}},
cnA(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b3e(d,e)
e+=4
f-=4
w.aM4(4)
v+=4}return v},
cnz(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.apl(d[e]);++e;--f;++v}return v},
cnu(){this.apl(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.apl(0)}},
cnr(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.atE()
u=v.d
switch(u){case A.iv:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.ET:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.be("Invalid endianness: "+u.u(0)))}},
chB(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iv===this.d,s=0;s<w;++s){r=v[s]
q=J.oj(A.aG.gaR(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cmv.prototype={
cWS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qo[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qo[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qo[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qo[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qo[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qo[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qo[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qo[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qo[30]
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
C.cmr.prototype={
bgx(d){var w,v,u,t,s=this,r=s.a
r.kK(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CD(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lt(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hd(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.ht(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hd(w,0,u,s.d)
s.bbj(s.d,u,54)
s.bbj(s.e,u,92)
u=s.d
r.CD(0,u,0,u.length)},
Lt(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lt(s,w)
s=u.e
t.CD(0,s,0,s.length)
v=t.Lt(d,e)
s=u.e
A.aG.ht(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CD(0,s,0,s.length)
return v},
bbj(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cmm.prototype={}
C.cml.prototype={
a2X(d){return(D.ox[d&255]&255|(D.ox[d>>>8&255]&255)<<8|(D.ox[d>>>16&255]&255)<<16|D.ox[d>>>24&255]<<24)>>>0},
bn6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.oj(A.aG.gaR(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2X((m>>>8|(m&$.qo[24])<<24)>>>0)^D.cIe[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.oj(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2X((k>>>8|(k&$.qo[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2X((k>>>8|(k&$.qo[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.oj(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2X((g>>>8|(g&$.qo[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2X(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.be("Should never get here"))}return s},
bPy(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oj(A.aG.gaR(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ef[a8&255]
u=D.ef[a9>>>8&255]
t=$.qo[8]
s=D.ef[b0>>>16&255]
r=$.qo[16]
q=D.ef[b1>>>24&255]
p=$.qo[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ef[a9&255]
s=D.ef[b0>>>8&255]
u=D.ef[b1>>>16&255]
v=D.ef[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ef[b0&255]
u=D.ef[b1>>>8&255]
s=D.ef[a8>>>16&255]
q=D.ef[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ef[b1&255]
a8=D.ef[a8>>>8&255]
a9=D.ef[a9>>>16&255]
b0=D.ef[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ef[n&255]
b0=D.ef[m>>>8&255]
a9=D.ef[l>>>16&255]
a8=D.ef[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ef[m&255]
b0=D.ef[l>>>8&255]
o=D.ef[b1>>>16&255]
s=D.ef[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ef[l&255]
o=D.ef[b1>>>8&255]
b0=D.ef[n>>>16&255]
u=D.ef[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ef[b1&255]
o=D.ef[n>>>8&255]
s=D.ef[m>>>16&255]
v=D.ef[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ef[a8&255]^C.nD(D.ef[a9>>>8&255],24)^C.nD(D.ef[b0>>>16&255],16)^C.nD(D.ef[b1>>>24&255],8)^b6[w][0]
m=D.ef[a9&255]^C.nD(D.ef[b0>>>8&255],24)^C.nD(D.ef[b1>>>16&255],16)^C.nD(D.ef[a8>>>24&255],8)^b6[w][1]
l=D.ef[b0&255]^C.nD(D.ef[b1>>>8&255],24)^C.nD(D.ef[a8>>>16&255],16)^C.nD(D.ef[a9>>>24&255],8)^b6[w][2]
b1=D.ef[b1&255]^C.nD(D.ef[a8>>>8&255],24)^C.nD(D.ef[a9>>>16&255],16)^C.nD(D.ef[b0>>>24&255],8)^b6[w][3]
a7=D.ox[n&255]
b0=D.ox[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.ox[l>>>8&255]
a9=D.ox[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.ox[b1>>>8&255]
h=D.ox[n>>>16&255]
g=D.ox[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.ox[l>>>24&255]
s=s[3]
a1=J.oj(A.aG.gaR(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.oj(A.aG.gaR(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.oj(A.aG.gaR(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.oj(A.aG.gaR(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bM7(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oj(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oj(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oj(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oj(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ee[a6&255]
v=D.ee[b0>>>8&255]
u=$.qo[8]
t=D.ee[a5>>>16&255]
s=$.qo[16]
r=D.ee[a4>>>24&255]
q=$.qo[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ee[a4&255]
t=D.ee[a6>>>8&255]
v=D.ee[b0>>>16&255]
w=D.ee[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ee[a5&255]
v=D.ee[a4>>>8&255]
t=D.ee[a6>>>16&255]
r=D.ee[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ee[b0&255]
a5=D.ee[a5>>>8&255]
a4=D.ee[a4>>>16&255]
a6=D.ee[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ee[p&255]
a6=D.ee[b0>>>8&255]
a4=D.ee[n>>>16&255]
a5=D.ee[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ee[o&255]
a4=D.ee[p>>>8&255]
a7=D.ee[b0>>>16&255]
t=D.ee[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ee[n&255]
a7=D.ee[o>>>8&255]
a5=D.ee[p>>>16&255]
v=D.ee[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ee[b0&255]
a7=D.ee[n>>>8&255]
t=D.ee[o>>>16&255]
w=D.ee[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ee[a6&255]^C.nD(D.ee[b0>>>8&255],24)^C.nD(D.ee[a5>>>16&255],16)^C.nD(D.ee[a4>>>24&255],8)^b5[a9][0]
o=D.ee[a4&255]^C.nD(D.ee[a6>>>8&255],24)^C.nD(D.ee[b0>>>16&255],16)^C.nD(D.ee[a5>>>24&255],8)^b5[a9][1]
n=D.ee[a5&255]^C.nD(D.ee[a4>>>8&255],24)^C.nD(D.ee[a6>>>16&255],16)^C.nD(D.ee[b0>>>24&255],8)^b5[a9][2]
b0=D.ee[b0&255]^C.nD(D.ee[a5>>>8&255],24)^C.nD(D.ee[a4>>>16&255],16)^C.nD(D.ee[a6>>>24&255],8)^b5[a9][3]
a4=D.zk[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zk[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zk[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zk[o>>>8&255]
i=D.zk[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zk[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.oj(A.aG.gaR(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bRo.prototype={}
C.bRp.prototype={
gL(d){var w=this.a.length
return w},
apS(){return B.rv(this.a,A.ij,null,null)}}
C.bbx.prototype={
vh(d){return C.hZF(d)}}
C.cwR.prototype={
N9(d){var w=d.w,v=Math.max(1,A.k.dd(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aaA(v,t+20,u+16,t,u,B.ui(d.x))},
nx(d){return!1}}
C.bSr.prototype={
cHs(d){if(this.b)throw B.W(B.be("FontLoader is already loaded"))
this.c.push(d.bK(new C.bSs(),x.E))},
mP(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.be("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mP)
case 6:w=5
return B.b(p.fED(f,r),$async$mP)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mP,v)}}
C.awN.prototype={
a6(){return"SystemUiMode."+this.b}}
C.a8V.prototype={
A(d,e){if(e==null)return!1
if(J.bQ(e)!==B.b0(this))return!1
return e instanceof C.a8V&&e.a===this.a},
gX(d){return B.bv(B.b0(this),B.x5(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b0(this)===D.fXG)return"["+(w+B.e8(this.a))+"]"
return"[ObjectKey "+(w+B.e8(this.a))+"]"}}
C.a1q.prototype={
R(){return new C.aKg(B.aX(x.N))},
cV_(d){return this.d.$1(d)},
cSH(){return this.e.$0()}}
C.aKg.prototype={
Z(){this.a2()
this.Pw()},
Pw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cSH(),$async$Pw)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fdQ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pw,v)},
ZC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.fdU(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fdV(t))
w=3
return B.b(C.aoh(p),$async$ZC)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fdW(t,s,p))
w=4
return B.b(t.Pw(),$async$ZC)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZC,v)},
a1R(d){return this.crJ(d)},
crJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fdR(t))
s=J.r(d,"id")
w=3
return B.b(C.c2o(J.k(s==null?"":s)),$async$a1R)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fdS(t))
w=1
break}q=C.hb9(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cV_(B.a([q],x.D)),$async$a1R)
case 4:if(t.c==null){w=1
break}t.m(new C.fdT(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1R,v)},
Pv(d,e){return this.bMz(0,e)},
bMz(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ck(null,null,!0,null,new C.fdL(q),r,null,!0,!0,x.y),$async$Pv)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fdM(t))
s=s.h(e,"id")
w=4
return B.b(C.aog(J.k(s==null?"":s)),$async$Pv)
case 4:if(t.c==null){w=1
break}t.m(new C.fdN(t))
w=5
return B.b(t.Pw(),$async$Pv)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pv,v)},
cGr(d){var w=B.bk(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iH[B.bL(v)-1]+" "+B.bW(v)},
aRT(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Pn,A.n),w,e,w,w,w,w,w,e)},
aRS(d){return this.aRT(d,44)},
b8p(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Pn:u,r=B.n(14),q=B.X(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,L.JV,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([L.JV,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bEE,u,u,u)],p))}return B.E(B.aA(A.c5,B.da(u,B.B(q,A.m,u,A.b9,A.i,0,u,u),u,u,A.b7,new B.o(u,u,u,r,u,s,A.n),A.hu,u,u,u,u,A.u7,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fe_(this,d),u,u,u,u,u,u,!1,A.a3),1)},
clx(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Z6,n=B.n(18),m=p?A.d3:A.dq
m=B.K(m,A.r,p?1.8:1)
w=this.aRS(A.qw)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aUv,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aUx,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Pn:q
u=p?q:B.K(A.aY,A.r,1.6)
r=p?D.bVA:q
return B.aA(q,B.da(q,B.B(B.a([w,A.bb,t,B.da(q,r,q,q,A.b7,new B.o(q,q,u,q,q,v,A.a6),A.fO,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b7,new B.o(o,q,m,n,q,q,A.n),A.fO,q,q,q,A.d2,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fdP(this,p,d),q,q,q,q,q,q,!1,A.a3)},
ctl(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cGr(J.k(o==null?"":o))
o=B.n(18)
w=B.K(A.dq,A.r,1)
v=r.aRS(A.Oy)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aUv,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aUx,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b4V(A.hR,A.bv,"Bring it back",r.r?q:new C.fdX(r,d))
return B.p(q,B.B(B.a([v,A.bb,t,p,A.bn,r.b4V(A.e9,A.c6,"Delete",r.r?q:new C.fdY(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.Z6,q,w,o,q,q,A.n),q,q,q,A.d2,D.byX,q,q,q)},
b4V(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.he(B.aA(w,B.p(w,B.X(d,v?A.aY:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),w,f,w,w)},
atU(d,e,f){var w=null
return new B.D(D.bxY,B.x(B.a([B.X(d,A.aY,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.ft9,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fld,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bZ,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aY,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aRT(A.z7,46),A.bb,D.bFv],t)
if(j.r)s.push(D.en3)
s.push(B.aH(i,i,i,i,A.rJ,i,i,i,new C.fe2(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.K(A.dq,A.r,1)
o=J.a6(h)
q=B.a([A.W,u,new B.D(D.bBC,s,i),B.p(i,B.B(B.a([j.b8p(0,A.yQ,"Save",j.a.c.length),j.b8p(1,A.OP,"Saved",o.gL(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bAD,A.ev,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c6:A.bv).j(0.12)
s=B.n(14)
r=B.K((j.y?A.c6:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.OB:A.ed
n=B.X(n,p?A.c6:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ad,B.E(B.d(m,i,i,i,i,i,i,A.UP,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bAz,A.iq,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.foX,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fs9,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fe3(j,v),i,i,i,i,i,i,!1,A.a3))
s=B.a([B.B(s,A.m,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.atU(A.qw,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.clx(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.emB)
else if(j.e==null)s.push(j.atU(A.a1y,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.atU(A.pd,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gag(h);r.C();)s.push(j.ctl(r.gS(r)))
A.d.v(u,s)}q.push(new B.ds(1,A.cp,B.cl(u,i,i,Y.akR,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc6l()
p=s?i:D.Pn
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yQ,m?A.jN:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bBe,B.aA(i,B.da(i,B.B(B.a([k,A.a9e,new B.ds(1,A.cp,B.eO(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jN:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e3),i)],t),A.m,i,A.b9,A.i,0,i,i),i,i,A.b7,new B.o(s,i,i,o,n,p,A.n),A.hu,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a3),i))}else q.push(A.W)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.O,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b4Y,i,i,i,i,i,i,i,i)}}
C.oA.prototype={
ah(){return B.H(["id",this.a,"doc",this.b.ah(),"updatedAt",this.c.a8().ae()],x.N,x.z)}}
C.Z6.prototype={
R(){return new C.ayH(B.a([],x.k),B.f8(null,x.H))},
ge1(){return this.c}}
C.ayH.prototype={
Z(){this.a2()
this.PG()},
PG(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2o(t.a.c),$async$PG)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cMz(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PG,v)},
czH(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qx(t.d,new C.cMC(d))
v=w<0
if(v&&C.hWK(d))return t.f
u=t.d
if(v)J.pM(u,0,d)
else J.aJ(u,w,d)
v=x.a
B.h1A(new C.cMD(t),v)
return t.f=t.f.bK(new C.cME(t,d),v).eR(new C.cMF())},
IY(d,e,f){return this.cf6(0,e,f)},
aZK(d,e){return this.IY(0,e,!1)},
cf6(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).cc(B.eh(new C.cMy(t,e),!1,null,x.H)),$async$IY)
case 3:w=4
return B.b(t.f,$async$IY)
case 4:w=5
return B.b(t.PG(),$async$IY)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IY,v)},
aZ0(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dHt:d
this.IY(0,new C.oA(w,v,new B.V(Date.now(),0,!1)),!0)},
c5O(){return this.aZ0(null)},
ae9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cMG(),r,!1,!1,!0,null,!1,!1,x.g2),$async$ae9)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aZ0(s)
case 1:return B.h(u,v)}})
return B.i($async$ae9,v)},
IX(d,e){return this.bMq(0,e)},
bMq(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ck(null,null,!0,null,new C.cMt(e),s,null,!0,!0,x.y),$async$IX)
case 3:if(g!==!0){w=1
break}t.m(new C.cMu(t,e))
w=4
return B.b(t.f,$async$IX)
case 4:w=5
return B.b(C.agQ(t.a.c,e.a),$async$IX)
case 5:w=6
return B.b(t.PG(),$async$IX)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IX,v)},
Dr(d){return this.bEy(d)},
bEy(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Dr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cMp(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Dr)
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
return B.b(t.aZK(0,d),$async$Dr)
case 9:w=5
break
case 7:w=10
return B.b(F.hbI(r,d.b,null),$async$Dr)
case 10:w=5
break
case 8:w=11
return B.b(t.IX(0,d),$async$Dr)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Dr,v)},
c_k(){var w,v,u=null,t=[D.dHw,D.dHu,D.dHv],s=new C.cMw(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d1.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aP(999,999)
n.push(B.p(u,new B.y(D.dr2[w],u,A.oO,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bh(v,v,v,v),u,u,A.n),u,u,u,u,A.oe,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fSX,A.P,B.bX(A.bG,n,A.bq,u,6,6),A.aQ,B.aA(u,B.p(u,D.f35,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,V.alf,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cMv(this),u,u,u,u,u,u,!1,A.a3)],o),A.E,u,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,u,A.ab,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c31,A.n),u,u,u,u,D.bBM,u,u,u)},
bEw(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bx(B.n(6),new B.an(A.a_,v,A.b3,A.t,B.a([B.eO(A.A,F.aoT(d.b),A.f,A.bX),D.et4,B.ap(v,B.aA(v,B.p(v,D.bWp,A.f,v,v,D.b5V,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cMk(this,d),v,v,v,v,v,v,!1,A.a3),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.fil,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fp8,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cMl(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cMm(this,d),v,v,v,v,v,v,!1,A.a3)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eJ(B.a([new B.D(P.ajM,B.he(B.aA(s,B.p(s,A.aqE,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.I,12)],x.V),E.wA,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc7a(),s,s,s,s,s,s,!1,A.a3),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nh,s,s,s,!0,s,s,s,s,s,D.fT0,s,s,s,1,s,!0)
if(t.e)r=D.b9p
else{w=t.c_k()
v=B.a([D.fEc,A.ad],r)
if(J.cL(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fhM,s,s,s),A.f,s,s,new B.o(D.bey,s,s,u,s,s,A.n),s,s,s,s,A.yw,s,s,s))}r=B.a([new B.o3(A6.a_r,new B.mp(w,s),s),new B.o3(D.bB8,new B.mp(B.B(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.f9K)
else r.push(new B.o3(D.bAB,B.Pl(new B.oF(new C.cMH(t),J.ad(t.d),!0,!0,!0,0,B.tb(),s),D.b8E),s))
r=B.vR(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c5(q,D.bdb,r,s,!1,!1,s,s)}}
C.Z4.prototype={
R(){return new C.ayD(B.a([],x.bx))},
Uw(d){return this.d.$1(d)}}
C.aG3.prototype={}
C.ayD.prototype={
b1P(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b4,A.aO),w),u=this.gaZJ()
v.aS(0,u)
w=new B.au(new B.ba(e,A.b4,A.aO),w)
w.aS(0,u)
return new C.aG3(v,w,f)},
Ei(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cG(A.qg,new C.cLO(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b4,A.aO),v)
t=m.gaZJ()
u.aS(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b4,A.aO),v)
u.aS(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b4,A.aO),v)
u.aS(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b4,A.aO),v)
o.aS(0,t)
n=new B.au(new B.ba(p.b,A.b4,A.aO),v)
n.aS(0,t)
r.push(new C.aG3(o,n,p.c))}if(r.length===0)r.push(m.b1P("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a4(0)
if(r.y){r.a.c.b=r.gpp()
q=r.a
q.Uw(q.c)}q=r.d
q===$&&B.c()
w=q.T$=$.ax()
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
s.P$=0}r.a1()},
gpp(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mK(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rA(n,w,v,t,u)},
AW(){var w=0,v=B.j(x.H),u=this,t
var $async$AW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a4(0)
u.y=!1
u.a.c.b=u.gpp()
t=u.a
w=2
return B.b(t.Uw(t.c),$async$AW)
case 2:return B.h(null,v)}})
return B.i($async$AW,v)},
c78(){this.m(new C.cLN(this))
this.Ei()},
aYI(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cLQ(w,d,v))
w.Ei()},
c79(d,e){var w=A.d.cz(this.w,e)
this.m(new C.cLY())
this.Ei()
$.aV.x1$.push(new C.cLZ(w))},
QX(d){return this.cln(d)},
cln(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(80,1400,A.eK),$async$QX)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$QX)
case 8:p=f
o=q.b.toLowerCase()
n=J.ain(o,".png")?"image/png":"image/jpeg"
r.m(new C.cLR(d,n,p))
r.Ei()
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
return B.i($async$QX,v)},
y_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$y_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hz4(r,t.gpp()),$async$y_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cLP(t,s))
t.Ei()
case 1:return B.h(u,v)}})
return B.i($async$y_,v)},
clF(d){var w,v=this,u=null,t=F.fIM(d.c)
if(t==null)return new B.bM(A.a5,u,u,B.hs(D.bPy,D.fGL,new C.cLT(v,d),u),u)
w=x.p
return new B.D(A.cu,new B.an(A.a_,u,A.ab,A.t,B.a([B.bx(B.n(12),B.fT(t,A.A,u,u,A.ci,A.bX,!0,140,!1,u,1/0),A.ap),B.ap(u,B.B(B.a([v.b4W(A.jW,new C.cLU(v,d)),A.bn,v.b4W(A.cy,new C.cLV(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b4W(d,e){var w=null
return B.aI(!1,A.a2,!0,w,B.aO(!1,w,!0,new B.D(A.hP,B.X(d,A.c,w,w,w,18),w),A.cO,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aS,0,w,w,A.cO,w,w,A.ai)},
IZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AW(),$async$IZ)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hbI(s,t.gpp(),new C.cLX(t)),$async$IZ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eJ(B.a([new B.D(A.qh,B.hs(D.bUj,D.fMU,n.gaxC(),B.fw(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.aqD,m,m,m,new C.cM_(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Yd,m,1,m,m,m,!1,m,!1,E.nh,m,m,m,!0,m,m,m,m,m,D.fHC,m,m,m,1,m,!0),j=Ay.aVR(O.lA,A.c,Af.X3,A.or,D.fIm,n.gc77()),i=B.n(18),h=n.gaxB(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j1,12)],x.V)
g=B.aA(m,B.p(m,new B.a5(92,142.1818181818182,B.eO(A.A,F.aoT(n.gpp()),A.f,A.dz),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a3)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.x(B.a([D.fUC,A.au,B.d(F.hac(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fuZ,m,m,m),A.W,B.dl(E.apW,E.aVi,h,B.bo(A.d1,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.i,0,A.p),1)],l),A.m,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(E.Yd,m,m,i,m,m,A.n),m,m,m,m,A.bg,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),h,m,m,m,m,m,2,B.bt(m,new B.b5(4,B.n(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.oK,!0,A.a4,m,A.ao,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),w,m,m,m,m,m,2,B.bt(m,new B.b5(4,B.n(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.ao,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.P,w,A.P,B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),g,m,m,m,m,m,2,B.bt(m,new B.b5(4,B.n(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.ao,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aP(16,16)
u=new B.ay(O.lA.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bSX,m,m,m,v===0?m:new C.cM0(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aH(m,m,m,m,D.bZq,m,m,m,v===r-1?m:new C.cM1(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cM2(n,v)
p=new B.aP(12,12)
o=new B.aP(12,12)
g.push(B.p(m,B.x(B.a([new B.cd(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fvw,m,m,m,m,m,m,m,m,m),A.b2,s,q,B.aH(m,m,m,m,B.X(A.e9,A.p5,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e6(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bh(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a4,m,A.ao,m,m,m,m),A.am,n.clF(i[v]),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e6(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bh(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.ao,m,m,m,m)],l),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(E.nh,m,new B.bH(u,u,u,u),new B.bh(w,w,w,w),m,m,A.n),m,m,new C.a8V(h),A.ec,D.bzc,m,m,m))}return B.oC(!0,B.c5(k,E.ahN,B.cl(g,m,m,D.bzG,m,m,A.ah,!1),m,!1,!1,j,m),new C.cM3(n),x.C)}}
C.ayF.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c6:E.nh,q=B.n(16),p=B.n(16),o=s?A.ax.j(0.08):A.c.j(0.04)
s=s?A.ax.j(0.16):A.d1.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eH,B.aI(!1,A.a2,!0,t,B.aO(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bb,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(u.e,t,t,t,t,t,t,D.aTR,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eE,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bg,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.ai),t)}}
C.ar9.prototype={
R(){return new C.aES()}}
C.aES.prototype={
Z(){this.a2()
this.a_g()},
bz(d){this.bH(d)
if(d.c!=this.a.c)this.a1G()},
a1G(){var w=0,v=B.j(x.H),u=this,t
var $async$a1G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dV(t,x.H),$async$a1G)
case 2:u.d=null
if(u.c!=null)u.m(new C.ehE(u))
w=3
return B.b(u.a_g(),$async$a1G)
case 3:return B.h(null,v)}})
return B.i($async$a1G,v)},
a_g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.YI(B.cH(n,0,null),new B.PI(!0))
r.d=o}else{o=B.fo("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iv(0).da(0,A.qd),$async$a_g)
case 7:if(r.c==null){w=1
break}r.d.tG(!1)
r.m(new C.ehC(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ehD(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_g,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a1()},
c9O(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hc(0)
w.m(new C.ehF(w))}else{v.qc(0)
w.m(new C.ehG(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.n(8*n.d)
m=B.a([D.jt.j(0.92),D.LS.j(0.95)],x.O)
w=B.K(A.c2.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qz,A.c2,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.O,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),A.bh)}if(p.f)return B.as(B.X(A.apb,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bah
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eO(A.A,new B.a5(r,q,new B.Ap(s,o),o),A.t,A.bX)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.p(o,B.X(A.hl,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.bx(n,new B.an(A.a_,o,A.b3,A.t,m,o),A.ap),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc9N(),o,o,o,o,o,o,!1,A.a3)}}
C.xS.prototype={
a6(){return"NgmyHatiLayoutKind."+this.b}}
C.jz.prototype={}
C.adL.prototype={
B(d){return B.p5(new C.e4b(this,B.P(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.ad9.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.J,s=B.n(18),r=B.n(18),q=B.K(D.jt.j(t?0.35:0.4),A.r,1),p=t?D.Mq:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.n(10),l=B.K(A.c2.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],o)
w=this.c
o=B.E(B.p(u,new B.fH(0.5625,C.iey(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.alK,u,u,u,u),1)
m=D.jt.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jt,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aI(!1,A.a2,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cS,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aB:D.blJ,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.ak2,u,u,u)],v),A.ak,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}}
C.xV.prototype={
a6(){return"NgmyMarriageLayoutKind."+this.b}}
C.nU.prototype={}
C.bkN.prototype={
a_p(d){var w=null
return new B.bM(A.a5,w,w,B.Bx(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cah(){return this.a_p(1)},
ayf(d){var w=null,v=B.n(8),u=B.K(A.il,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.afw,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.il,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.il,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b9,A.i,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.ayf("TAARIFA ZA WANANDOA"),A.am,w.cah(),A.cS,w.a_p(0.9),A.cS,w.a_p(0.7),A.P,w.ayf("TAMKO LA MAKUBALIANO"),A.fG,w.a_p(1),A.cS,w.a_p(0.95),A.P,w.ayf("MASHAHIDI"),A.b2,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.adO.prototype={
B(d){return B.p5(new C.emq(B.P(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.aft.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.J,p=B.n(18),o=B.n(18),n=B.K(A.az.j(q?0.35:0.4),A.r,1),m=q?D.blf:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.n(10),i=B.K(A.az.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],l)
w=this.c
v=C.haI(w.a)
if(v==null)v=A.d.gI(D.RU)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fH(0.5625,new B.an(A.a_,r,A.b3,A.t,B.a([B.bS(0,B.fT(C.haH(v.d),A.A,r,r,A.ci,A.bX,!0,r,!1,r,r),0,0,0),new B.D(A.akH,new C.bkN(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.alK,r,r,r,r),1)
j=A.az.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.Mr,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aI(!1,A.a2,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cS,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aB:D.bdN,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.ak2,r,r,r)],s),A.ak,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.l4.prototype={
a6(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8n.prototype={}
C.Wd.prototype={
R(){var w=$.ax()
return new C.aF8(new B.cw(null,x.A),new B.au(A.at,w),new B.au(A.at,w),B.mS(0,null,null),A.d.gI(D.a4D),D.dRJ,B.a([],x.L),B.a([],x.gE))}}
C.aF8.prototype={
Z(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.zR(C.fMF(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
w=x.a
C.fLB().bK(new C.epn(v),w)
$.ra().ji(0,"assets/images/ngmy_logo.png").bK(new C.epo(v),w).eR(new C.epp())},
q(){var w=this,v=w.e,u=$.ax()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a1()},
aeY(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
Jg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(88,1600,A.eK),$async$Jg)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Jg)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hzl(m,p),$async$Jg)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bEW(new B.q0(o,1),m),$async$Jg)
case 10:if(r.c!=null)r.m(new C.ep_(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.aeY("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jg,v)},
Xq(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Xq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hzl(s,q),$async$Xq)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bEW(new B.q0(r,1),s),$async$Xq)
case 4:if(t.c!=null)t.m(new C.eoW(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Xq,v)},
aeZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aeZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ep6(q))
t=4
q.a.toString
p=C.ij3()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aeZ)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ep7(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.aeY(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ep8(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeZ,v)},
a_u(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_u=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ep1(q,i))
t=4
q.a.toString
p=C.ij2()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_u)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ep2(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.ep3(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ep4(q))
$.aV.x1$.push(new C.ep5(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_u,v)},
cax(d){this.m(new C.ep0(this,d))},
Ez(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ez=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eoY(q))
t=4
w=7
return B.b($.aV.gmK(),$async$Ez)
case 7:w=8
return B.b(B.bP(A.mE,null,x.H),$async$Ez)
case 8:k=$.aV.al$.x.h(0,q.d)
p=k==null?null:k.gbd()
if(!(p instanceof B.qa))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m6(1800/p.gY(0).a),$async$Ez)
case 9:o=e
w=10
return B.b(o.hw(A.h9),$async$Ez)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.agT(J.eS(A.dK.gaR(n)),"ngmy_news.png","image/png"),$async$Ez)
case 11:m=e
q.aeY(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.aeY(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eoZ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ez,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.le,a2,a2,a2,new C.epe(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bUP,a2,a2,a2,new C.epf(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oq,a2,a2,a2,a4?a1.gb_X():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eJ(v,a2,a2,!0,!0,A.Bz,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f3f,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fH(0.7142857142857143,B.eO(A.A,new B.er(new C.b27(t,s,r,a1.x,a2),a1.d),A.f,A.dz),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.th,a2,a2,a2)
t=a1.as?a2:a1.gcaw()
t=B.a([B.E(B.dl(D.bVB,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bo(D.tP,a2,a2,a2,A.c,A.h0,a2,a2,new B.b8(B.n(14),Q.vC),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.n(10),B.fT(r,A.A,a2,a2,A.ci,A.bX,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.as,r,B.aH(a2,a2,a2,a2,D.bSe,a2,a2,a2,a1.as?a2:a1.gbL1(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.th,a2,a2,a2)
q=B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aTJ("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a4,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dl1[o]
p.push(B.mY(a2,D.tP,new B.y(n.a,a2,A.pD,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hb,new C.epg(a1,n),a2,a2,Q.vC,a2))}p=B.bX(A.bG,p,A.bq,a2,6,8)
m=a1.Q
m=B.bX(A.bG,B.a([D.fT9,A.bb,B.iU(a2,a2,a2,D.fCT,a2,new C.eph(a1),m==="en",a2,a2,a2,a2),A.ad,B.iU(a2,a2,a2,D.fCO,a2,new C.epi(a1),m==="sw",a2,a2,a2,a2)],w),A.vv,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.th,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d_(D.a4D,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gL(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aSc(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.d_(D.a4D,10,a2,j),h=j.$ti,j=new B.bR(j,j.gL(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aSc(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gcaz()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.I,18)],v)
v=B.a([u,A.aA,new B.D(A.cu,s,a2),t,A.aA,new B.D(A.cu,r,a2),q,A.P,p,A.W,m,A.aA,new B.D(A.cu,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aQ,B.aA(a2,B.p(A.A,B.B(B.a([D.bVv,A.ad,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fx,a2,a2,a2)],w),A.m,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uI,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a3)],w)
if(a4){u=B.a([A.dT,B.B(B.a([D.dCa,A.as,D.bFR],w),A.m,a2,A.e,A.i,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a5
q=e?A.b6.j(0.35):D.tP
p=new B.aP(16,16)
d=new B.ay(A.bC,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fsU,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.WS,new B.o(q,a2,new B.bH(d,d,d,d),new B.bh(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cu,A.iq,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d6v[o]
t.push(B.mY(a2,D.tP,new B.y(a0,a2,A.K8,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hb,new C.epj(a1,a0),a2,a2,Q.vC,a2))}u.push(B.bX(A.bG,t,A.bq,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aTJ("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.epk(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a4,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcay()
u.push(B.B(B.a([t,A.ad,B.I9(A.zb,s,B.nO(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gb_X()
u.push(B.dl(A.oq,D.fOA,t,B.bo(A.cT,a2,a2,a2,a2,A.JT,a2,a2,new B.b8(B.n(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.aks,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.K(E.kc.j(0.5),A.r,1)
v.push(B.bS(0,B.ec(B.as(B.p(a2,B.B(B.a([E.a9f,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jm,a2,a2,a2)],w),A.m,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(E.Bp,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bC3,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c5(a3,A.Bz,new B.an(A.a_,a2,A.ab,A.t,v,a2),a2,!1,!1,a2,a2)},
aTJ(d){var w=null
return B.bt(w,new B.b5(4,B.n(14),A.a0),w,A.eS,w,w,w,w,!0,w,w,w,w,w,w,D.tP,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A2.K3,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aSc(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b1(d.f),p=s?A.bD:A.bC
p=B.K(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.kj,t,t,t,t),A.fG],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.byc,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.jz,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.p(t,B.x(w,A.m,t,A.b9,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iD,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eoX(this,d),t,t,t,t,t,t,!1,A.a3)}}
C.zR.prototype={
bdp(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zR(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cL6(d){var w=null
return this.bdp(w,w,w,w,w,d,w,w,w,w)},
ah(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aDI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.chk(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gS(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fz(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.chi(),B.T(w).k("N<1,m>")).c_(0,new C.chj())
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
return this.bdp(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFN(d){return this.f}}
C.tA.prototype={
a6(){return"NewsLayout."+this.b}}
C.BN.prototype={
a6(){return"NewsFrame."+this.b}}
C.lt.prototype={}
C.b27.prototype={
rF(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b_Z(d,e,f,g){return this.rF(d,e,null,1.25,f,A.bp,g)},
Qg(d,e,f,g,h){return this.rF(d,e,f,1.25,g,A.bp,h)},
ayl(d,e,f,g,h){return this.rF(d,e,null,f,g,A.bp,h)},
ayk(d,e,f,g,h){return this.rF(d,e,f,g,0,A.bp,h)},
b00(d,e,f,g,h){return this.rF(d,e,null,f,0,g,h)},
caD(d,e,f,g,h,i){return this.rF(d,e,f,g,0,h,i)},
ayj(d,e,f,g){return this.rF(d,e,null,f,0,A.bp,g)},
af1(d,e,f){return this.rF(d,e,null,f,0,A.bp,A.cR)},
b0_(d,e,f,g,h){return this.rF(d,e,f,g,0,h,A.cR)},
caC(d,e,f,g){return this.rF(d,e,null,f,0,g,A.cR)},
caB(d,e,f,g){return this.rF(d,e,f,g,0,A.bp,A.cR)},
af2(d,e,f,g,h,i){return this.rF(d,e,f,g,h,A.bp,i)},
b_Y(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iN(new B.eu(d,u,u,A.cN,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.bY,new B.jr(1),u,u,h,u,A.bW,u)
v.o0(g)
if(!v.b.a.c.gaFt())return w
w-=2}return j},
af_(d,e,f,g,h,i,j,k){return this.b_Y(d,e,f,g,h,i,j,k,A.bp)},
aAv(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aAu(d){return this.aAv(null,!1,d)},
ahX(d,e){return this.aAv(null,d,e)},
cst(d,e){return this.aAv(d,!1,e)},
gb2b(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaWo(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
P0(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.af_(w.gaWo(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaWo(),v,g,A.a1,v,v,v,w.ayk(u,t,f,1.02,A.U),e,v,v)},
aWt(d){return this.P0(d,A.K,null,2,78,30)},
ack(d,e,f,g,h){return this.P0(d,e,null,f,g,h)},
c_d(d,e,f,g,h){return this.P0(d,A.K,e,f,g,h)},
c_c(d,e,f){return this.P0(d,A.K,null,e,f,30)},
Sd(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jy,B.d(s,u,g,A.a1,u,u,u,v.b0_(w,v.b_Y(t,w,A.cR,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b83(d){return this.Sd(d,A.K,null,3,24)},
aC_(d,e,f,g){return this.Sd(d,e,null,f,g)},
cAa(d,e,f){return this.Sd(d,A.K,e,3,f)},
b84(d,e){return this.Sd(d,e,null,3,24)},
cA8(d,e){return this.Sd(d,A.K,null,3,e)},
cA9(d,e,f){return this.Sd(d,e,null,3,f)},
arW(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.eZ,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qg("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
NX(){return this.arW(null,!0)},
arV(d){return this.arW(null,d)},
bGY(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.i4,new B.a5(d,w,B.d(v,w,2,A.a1,w,w,w,this.caC(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vM(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb2b(),h=A.o.ao(j.bF(B.c6(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i6n(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b_Z(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.af_(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.af_(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eL,l,l,l,m.af2(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.bEa(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iJ,A.i,0,l,l),A.am,m.ahX(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eL,l,l,l,m.ayj(v,u*0.9,1,A.U),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.W,B.B(B.a([B.d(C.bEa(j),l,l,l,l,l,l,m.Qg(k,13,B.b1(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iJ,A.i,0,l,l),A.P,m.cst(B.b1(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb2b()
v=B.d("NGMY",l,l,l,l,l,l,m.ayl(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ad,B.eM(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rF(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b2,new B.ds(1,A.cp,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.af2(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.U),A.dV,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.P,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iJ,A.i,0,l,l)
t=m.ahX(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ayj(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.ahX(!0,1.4),A.au,B.d(C.bEa(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.au,m.aAu(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ayl(v,u,1,3,A.U),A.K,l,l),A.P,m.ahX(!0,1.2),A.au,B.B(B.a([B.d(C.bEa(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iJ,A.i,0,l,l),A.au,m.aAu(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adv(d){return this.vM(d,!1)},
af0(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.af2("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
caA(d,e){return this.af0(d,null,e,null)},
aYA(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b1(this.d.w).j(0.75),s=this.ayk("Roboto",15,t,1,A.cz),r=B.X(E.anf,t,w,w,w,18),q=A.a.ar(A.ov[B.bL(v)-1],0,3),p=A.a.aX(A.o.u(B.fQ(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ad,B.d(q+" "+B.bW(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fZ,w,w,w,1),B.X(d,t,w,w,w,19),A.ad,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
ax3(){return this.aYA(A.mO)},
b59(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.af2("Roboto",this.af_(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aAy(d,e,f){return this.b59(d,e,f,30)},
aC2(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.vY,B.d(v,w,e,A.a1,w,w,w,this.caB("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b88(d){return this.aC2(d,3,22)},
cAl(d,e){return this.aC2(d,e,22)},
tW(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fT(r,A.A,s,s,A.ci,A.bX,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bk(D.bEV,w,s)
if(v==="sepia")w=new B.Bk(D.bEU,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.X(A.yL,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.o(s,s,s,s,s,new B.c2(A.A,0.95,A.x,s,0,B.a([A.L,A.Y9.j(0.38)],x.O),s,s),A.n),A.bh))
return new B.a5(d,e,new B.an(A.a_,s,A.b3,A.t,v,s),s)},
qI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.K(B.b1(j),A.r,3)
j=B.K(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.tW(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ev,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m9,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ein,14)],x.V)
v=l.tW(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eM(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.as(B.d(u,k,2,A.a1,k,k,k,l.b0_(j.as,13.5,D.bfx,1.1,A.cD),A.K,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.i,0,A.p),A.f,k,k,new B.o(D.bjl,k,k,k,w,k,A.n),k,e,k,k,D.bzB,k,k,d),k)
case 3:w=B.n(30)
j=B.K(B.b1(j.x),A.r,5)
return B.p(k,B.bx(B.n(25),l.tW(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.K(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a5(d,e,B.as(B.p(k,B.hU(l.tW(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m9,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.ei3,10)],x.V)
return B.eM(A.A,0.025,new B.a5(d,e,new B.an(A.a_,k,A.ab,A.f,B.a([B.bS(0,B.p(k,l.tW(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rz,k,k,k),0,0,0),B.ap(k,B.eM(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ap(-10,B.eM(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a5(d,e,B.b4(B.nJ(l.tW(d,e),A.ap,D.hjY),new C.bdM(j,k),k,k,A.aw),k)
case 7:j=x.p
w=B.a([l.tW(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bf(u));++n){m=new B.aP(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bh(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.cd(A.aM,A.qC,A.i,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b3,A.t,w,k),A.f,A.ei,k,k,k,e,k,k,D.bE8,k,k,d)
case 8:w=d/2
v=B.xe(A.fE,new B.aP(w,w))
j=B.K(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.xe(A.hE,new B.aP(w,w)),l.tW(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h_,22)],x.V)
return B.p(k,l.tW(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a5(d,e,B.nJ(l.tW(d,e),A.ap,D.hrE),k)
case 0:j=B.K(B.b1(j.w),A.r,2.4)
return B.p(k,l.tW(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ev,k,k,d)}},
aPM(d,e){return this.d.e===D.Sx?A.bJ:this.bGY(d,e)},
WX(d){return this.aPM(d,A.K)},
gaBj(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aBi(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.b00(v.Q,19,1.15,A.cD,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.Qg("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.af1(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jj(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bg,n,n,d)},
gciT(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aa1(d,e,f,g){return B.cv(new C.chl(this,e,d,f,g))},
aa0(d){return this.aa1(d,22,!0,18)},
X9(d,e){return this.aa1(d,22,!0,e)},
aQO(d,e,f){return this.aa1(d,22,e,f)},
bIY(d,e,f){return this.aa1(d,e,!0,f)},
bb6(d,e,f,g){return B.cv(new C.chm(this,e,d,g,!0,f))},
chG(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adv(824),A.aA,k.aWt(824),k.b83(824),A.P,k.NX(),A.ae,B.as(k.qI(824,360),j,j,j),k.WX(824),A.ae,B.E(k.aa0(3),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adv(824),A.aQ,new B.a5(j,350,B.B(B.a([new B.a5(440,j,B.x(B.a([k.ack(440,A.bj,3,62,26),k.aC_(440,A.bj,2,20),A.b2,k.arW(B.b1(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.JU,B.x(B.a([k.qI(362,310),k.WX(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aAu(2),A.ae,B.E(k.aa0(3),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 2:w=k.vM(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.c_d(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cAa(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.BU,j,j,j)
u=B.a([B.as(k.qI(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Sx){h=A.w.j(0.65)
u.push(B.ap(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.ayk(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lF,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a_,j,A.ab,A.t,u,j),A.P,k.NX(),A.W,B.E(k.X9(2,21),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 3:h=k.vM(824,!0)
w=k.qI(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b5,j,A.ab,A.t,B.a([w,B.ap(0,B.p(j,k.P0(780,A.bj,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b0,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bCm,j,j,j),j,j,0,0,j,j)],u),j),k.b84(824,A.bj),A.P,k.NX(),A.W,B.E(k.aa0(3),1)],u),A.ak,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adv(824),A.aA,k.aWt(824),k.b83(824),A.P,k.NX(),A.ae,B.E(k.bb6(3,300,B.x(B.a([k.qI(300,300),k.WX(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.ak,j,A.e,A.i,0,A.p)
case 5:w=k.vM(824,!0)
v=x.p
u=B.x(B.a([k.ack(440,A.bj,3,62,26),k.aC_(440,A.bj,2,20),A.b2,k.arV(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bx,new B.a5(j,400,B.B(B.a([new B.a5(440,j,u,j),A.aRO,new B.D(A.i4,k.qI(364,h.e===D.Sx?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aA,B.E(k.X9(2,21),1)],v),A.ak,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adv(824),A.ae,k.c_c(824,2,70),k.cA8(824,21),A.P,k.NX(),A.ae,B.E(k.bb6(3,340,B.as(k.qI(340,340),j,j,j),350),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 7:w=k.vM(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bEa(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qg(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bg,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b00(h.Q,24,1.15,A.cD,A.U),j,j,j))
v.push(A.b2)
if(k.gaBj())v.push(k.aBi(230,250))
return B.x(B.a([w,A.aA,B.E(B.B(B.a([new B.a5(230,j,B.x(v,A.ak,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.ak0,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.ack(570,A.bj,3,62,28),k.cA9(570,A.bj,20),A.P,k.arV(!1),A.P,B.as(k.qI(570,330),j,j,j),k.WX(570),A.W,B.E(k.aQO(2,!1,17),1)],t),A.ak,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 8:w=k.vM(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qg(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.p(j,B.x(B.a([t,A.am,k.P0(788,A.bj,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bAE,j,j,j),k.b84(824,A.bj),A.W,B.as(k.qI(824,310),j,j,j),k.WX(824),A.P,k.NX(),A.W,B.E(k.aa0(3),1)],s),A.ak,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vM(824,!0),A.aQ,new B.an(A.a_,j,A.ab,A.t,B.a([k.qI(824,430),B.ap(18,k.caA(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.aAy(824,3,66),k.b88(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.ax3(),A.aA,B.E(k.X9(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vM(824,!0),A.bx,new B.a5(j,500,B.B(B.a([new B.a5(410,j,B.x(B.a([k.af0(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aQ,k.b59(410,4,58,28),k.aC2(410,6,20),A.b2],w),A.E,j,A.e,A.i,0,A.p),j),V.aRP,k.qI(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aA,k.ax3(),A.aQ,B.E(k.X9(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 12:w=k.vM(824,!0)
v=k.qI(824,420)
u=B.hJM(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aQ,new B.an(A.a_,j,A.ab,A.t,B.a([v,B.ap(22,B.fy(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.caD(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bCC,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.aAy(824,3,62),k.b88(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.aYA(A.lK),A.aA,B.E(k.X9(2,18),1)],r),A.ak,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vM(824,!0)
u=h.w
t=x.p
w=B.a([k.qI(824,380),B.ap(j,k.af0(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aAy(824,2,60)
r=k.cAl(824,2)
p=k.ax3()
o=B.E(k.aQO(2,!1,18),1)
n=B.K(B.b1(u).j(0.18),A.r,1)
m=B.n(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aQ,new B.an(A.a_,j,A.ab,A.t,w,j),A.aQ,s,r,A.W,p,A.aA,o,A.ae,B.p(j,B.B(B.a([B.bx(B.n(14),k.tW(150,104),A.ap),A.oH,B.E(B.x(B.a([k.af0("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.P,B.d(q,j,2,A.a1,j,j,j,k.ayj(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.O,0,A.p),1),B.X(A.eE,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bg,j,j,j)],t),A.ak,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.vM(824,!0),A.bx,k.ack(824,A.bj,3,62,30),k.aC_(824,A.bj,2,22),A.W,k.arV(!1),A.W,B.as(k.qI(824,330),j,j,j),k.aPM(824,A.bj),A.aQ,B.E(k.bIY(2,40,21),1)],x.p),A.ak,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,B.c3(s,new B.o(s,s,s,s,s,new B.a9(A.ay,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bh),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b4(s,s,s,new C.bah(B.b1(q.w),s),A.aw),0,0,0))
w=q.w
n.push(new B.D(D.bD8,B.x(B.a([B.E(t.chG(),1),A.P,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fG,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b_Z(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qg(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iJ,A.i,0,s,s)],o),A.ak,s,A.e,A.i,0,A.p),s))
v=B.b1(w)
n.push(B.bS(0,B.dZ(B.b4(s,s,s,new C.bta(v.j(q.ch?0.07:0.06),s),A.aw),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.K(B.b1(w).j(0.5),A.r,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fT(q,A.A,s,s,A.ci,A.bX,!1,30,!1,s,30),A.ap))
else o.push(B.X(A.mO,B.b1(w),s,s,s,28))
o.push(A.ad)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ayl(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,B.dZ(B.db(B.p(s,B.B(o,A.m,s,A.e,A.O,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bEh,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jj(new B.an(A.a_,s,A.ab,A.t,n,s),A.t,s),s)}}
C.bdN.prototype={
jo(d){return C.hom(d)},
k0(d){return!1}}
C.bdM.prototype={
a3(d,e){var w,v=C.hom(e)
$.S()
w=B.I()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.aH(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.bvG.prototype={
jo(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.cY(3)
w=$.S()
v=B.a([],x.v)
u=new B.aF(w.r,A.ag,null,null,v)
u.D(new B.aY(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.af()*14)
v.push(w)
r=u.f
if(r!=null)w.bw(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.af()*14)
v.push(q)
p=u.f
if(p!=null)q.bw(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.aq(0,r))
u.D(new B.bs())
return u},
k0(d){return!1}}
C.bah.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.e4()
k.cY(7)
$.S()
w=B.I()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.af()*0.07).gp(0)
q=k.af()
p=k.af()
o=k.af()
n=w.G()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.af()*u
p=k.af()*t
m=50+k.af()*90
w.sam(new B.c2(A.A,0.5,A.x,l,0,B.a([A.XD.j(0.13),A.L],v),l,l).aA(0,B.bY(new B.t(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sam(l)},
av(d){return!1}}
C.bta.prototype={
a3(d,e){var w,v,u=null,t=e.a,s=B.fx(u,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.bY,u,A.dA,A.bW)
s.ej()
w=d.a
J.bl(w.save())
w.translate(t/2,e.b*0.52)
d.ii(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a3(d,new B.t(-v/2,-t.gbb(t)/2))
w.restore()},
av(d){return!d.b.A(0,this.b)}}
C.We.prototype={
R(){return new C.aFb()}}
C.aFb.prototype={
Z(){var w=this
w.a2()
B.fD2(w.a.c,null).bK(new C.eq9(),x.g7).bK(new C.eqa(w),x.a)
w.a.toString},
gaOA(){var w=D.axW[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaym(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaOA()
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
return new B.a3(q,w,q+s,w+t)},
a_w(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_w=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.epX(r))
t=4
q=r.gaym()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.p2()
m=B.z8(n,null)
i=B.I()
i.Q=A.h7
m.oD(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.ni().xd(J.hdL(p),J.hdL(o)),$async$a_w)
case 7:l=e
w=8
return B.b(l.hw(A.h9),$async$a_w)
case 8:k=e
j=r.c
if(j!=null){j=B.a4(j,!1)
i=k
i.toString
j.O(J.eS(J.vI(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.epY(r))
r.c.K(x.q).f.U(D.fco)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_w,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.le,s,s,s,new C.eq3(d),s,s,s,s,s,s),p=x.p
q=B.eJ(B.a([B.bN(!1,D.fRc,s,s,!0,s,s,s,t.y||r==null?s:t.gcaE(),s,s)],p),s,s,!0,!0,A.Bz,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fVf,s,s,s,1,s,!0)
if(r==null)p=A.m_
else{w=B.E(new B.D(A.bQ,B.as(new B.fH(t.gaOA(),B.cv(new C.eq4(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iD,B.iU(s,s,s,new B.y(D.axW[u].a,s,A.a9T,s,s,s,s,s,s,s,s,s),s,new C.eq5(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aM,!1),s),B.B(B.a([D.bWg,B.E(B.kQ(s,s,s,6,1,new C.eq6(t),t.f),1),D.bVS],p),A.m,s,A.e,A.i,0,s,s),D.fOt,A.am,B.bN(!1,D.fOb,s,s,!0,s,s,s,new C.eq7(t,d),s,s)],p),A.m,s,A.e,A.O,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Yn,s,s,s,s,s,s,D.bA_,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c5(q,A.Bz,p,s,!1,!1,s,s)}}
C.bdj.prototype={
a3(d,e){var w
$.S()
w=B.I()
w.Q=A.ci
return d.oD(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0p.prototype={
R(){var w=$.ax(),v=x.A
return new C.aGA(new B.au(A.at,w),new B.au(new B.ba("NGMY",A.b4,A.aO),w),new B.cw(null,v),new B.cw(null,v),A.d.gI(D.a5d),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.K)}}
C.oL.prototype={}
C.aGA.prototype={
gaWB(){var w,v,u=this
if(u.p1)w=new B.vX(1,u.p2,0.9,u.p3).jU().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eZZ(w))},
q(){var w=this.d,v=$.ax()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a1()},
Z8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.ra().ji(0,"assets/images/ngmy_logo.png"),$async$Z8)
case 7:q=e
p=J.eS(J.vI(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bEW(new B.q0(p,1),o),$async$Z8)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eYR(r,p))
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
return B.i($async$Z8,v)},
Qj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l2(92,1800,A.eK),$async$Qj)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Qj)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bEW(new B.q0(p,1),n),$async$Qj)
case 9:if(r.c==null){w=1
break}r.m(new C.eZe(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qj,v)},
b4v(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aN=w.aF=w.aB=w.a_=w.b8=w.bj=w.y2=0
w.b4=null
w.b2=0.25
w.be=null
w.bM=0.5
w.aK=1
w.c8=w.bG=w.bi=0
w.cL=w.c5=!1},
aYk(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bBB(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.do5)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bBB(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bBB(C.h8B(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bBB(C.h8B(1-a0*0.5,n,n,n),w)}return a1?C.bBB(C.h8B(-1,255,255,255),w):w},
aC8(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).lc(0,this.d.a.a),t=B.C(u,B.a7(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xc(u,v,w)
this.dx.pq(new C.eZo(t),!0)
return t},
b72(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aC8()
w=C.igJ(e.d.a.a,e.db)
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
return C.ida(d,k,v,a0,j,e.gaWB(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cxZ(){return this.b72(null)},
Dq(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmK(),$async$Dq)
case 3:w=4
return B.b(B.bP(A.eR,null,x.H),$async$Dq)
case 4:w=5
return B.b($.aV.gmK(),$async$Dq)
case 5:s=$.aV.al$.x.h(0,t.r)
r=s==null?null:s.gbd()
if(!(r instanceof B.qa)){u=null
w=1
break}w=7
return B.b(r.m6(1080/r.gY(0).a),$async$Dq)
case 7:w=6
return B.b(e.hw(A.h9),$async$Dq)
case 6:q=e
u=q==null?null:J.eS(A.dK.gaR(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dq,v)},
aaT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aaT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eYA(q))
t=4
w=7
return B.b(q.Dq(),$async$aaT)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aO(p)
n=C.C0(null,null,null,null,D.oB,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b72(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a4(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eYB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaT,v)},
AF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$AF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eYy(q))
t=4
w=7
return B.b($.aV.gmK(),$async$AF)
case 7:w=8
return B.b(B.bP(A.no,null,x.H),$async$AF)
case 8:w=9
return B.b($.aV.gmK(),$async$AF)
case 9:k=$.aV.al$.x.h(0,q.f)
p=k==null?null:k.gbd()
if(!(p instanceof B.qa))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m6(1080/p.gY(0).a),$async$AF)
case 10:o=e
w=11
return B.b(o.hw(A.h9),$async$AF)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.agT(J.eS(A.dK.gaR(n)),"ngmy_quote.png","image/png"),$async$AF)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.K(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eYz(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AF,v)},
ckO(){var w=this.p4
w.toString
return B.cv(new C.eZ7(this,w))},
b07(d,e){var w=null
return B.bt(w,w,w,w,w,D.fna,w,w,!0,new B.b5(4,B.n(16),Q.vC),w,w,w,w,w,D.tP,!0,w,w,w,w,new B.b5(4,B.n(16),D.b2D),w,w,w,w,w,w,w,w,Ac.Ei,e,w,w,w,w,w,w,w,D.fsL,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
ya(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aUs,w,w,w))
return new B.D(H.ajR,B.B(u,A.m,w,A.e,A.i,0,w,w),w)},
b06(d,e){var w=null,v=B.n(18),u=B.K(A.bC,A.r,1)
return B.p(w,B.aI(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.jX),A.f,w,w,new B.o(D.tP,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vT(d){return this.b06(d,A.bE)},
oo(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uI:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.K(f?A.L:A.bC,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jN,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jN,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.da(r,B.B(s,A.m,r,A.e,A.O,0,r,r),r,r,A.b7,new B.o(w,r,u,v,r,p,A.n),A.hu,r,r,r,r,A.Gj,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a3)},
agW(d,e,f){return this.oo(d,null,e,f)},
ayq(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eG:A.bC,s=x.p
v=B.a([B.da(w,d,w,w,A.b7,new B.o(u,w,B.K(t,A.r,g?2:1),v,w,w,A.n),A.hu,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a5(j,w,B.x(v,A.m,w,A.e,A.O,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a3)},
b0a(d,e,f,g,h,i){return this.ayq(d,e,f,g,h,5,i)},
kt(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aTf,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.emF,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eZk(this,h,i),u,u,u,u,u,u,!1,A.a3))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aTu,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a_T,u,u,u))
s=B.B(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.awd(w).cMt(A.b6,A.bC,A.b6.j(0.2),A.c,D.f2x,4)
return new B.D(A.yf,B.x(B.a([s,B.aaw(B.kQ(u,u,u,g,f,new C.eZl(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
aiW(d,e,f,g,h,i){return this.kt(d,e,f,g,h,null,i)},
ajl(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b1(u)
r=d==u
q=r?A.c:A.aY
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bP9:o
n.push(B.aA(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bH(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eZn(this,e,u),o,o,o,o,o,o,!1,A.a3))}return B.bX(A.bG,n,A.bq,o,10,10)},
bN5(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5d
else{v=x.a8
w=B.C(new B.Z(D.a5d,new C.eYq(o),v),v.k("M.E"))}v=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b07("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eYr(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.aab,!0,A.a4,n,A.ao,n,n,n,n)
u=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b07("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eYs(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.df,!0,A.a4,n,A.ao,n,n,n,n)
t=o.ya("DESIGNS",A.up)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cYs[q]
r.push(new B.D(A.iD,o.agW(p,o.x===p,new C.eYt(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.ch(B.B(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aM),A.ae,new B.a5(n,118,B.hQ(n,new C.eYu(o,w),w.length,n,n,A.aM,new C.eYv(),!1),n),A.P,o.b06(B.x(B.a([B.iM(A.b6,n,n,A.af,!0,new C.eYw(o),n,D.fFl,n,D.fBw,o.k3),B.iM(A.b6,n,n,A.af,!0,new C.eYx(o),n,n,n,D.fyG,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.akr)],s),A.E,n,A.e,A.i,0,A.p)},
cGJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aC8()
if(a7.length===0)return a5.vT(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Kh,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.L)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ar(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.C(u,B.a7(u).k("cs.E"))
A.d.ff(m)
l=m.length!==0&&A.d.d5(m,new C.eZO(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eZV(a5)
j=new C.eZX()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Kh,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eG:A.bC
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ar(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aA(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bH(d,d,d,d),new B.bh(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.NM,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eZP(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a3))}o=a5.vT(B.bX(A.bG,o,A.vv,a6,6,6))
i=B.a([a5.oo("All words",K.aoU,!1,new C.eZQ(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.agW("Sentence "+a3,!1,new C.eZR(a5,a7,v,a2)))
a2=a3}}i.push(a5.agW("Clear picks",!1,new C.eZS(a5)))
i=B.bX(A.bG,i,A.bq,a6,8,8)
g=a5.ya("SIZE OF THE PICKED WORDS",D.aoj)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dub[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eZT(e,k)
f.push(a5.agW(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bX(A.bG,f,A.bq,a6,8,8),A.W,a5.oo("Make every word normal",A.kM,!1,new C.eZU(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cBP(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bFs,B.d(A.d.fY(D.azJ,new C.eZx(q)).b,p,p,p,p,p,p,D.flz,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cv(new C.eZy(q)),l=q.ya("HIGHLIGHT BEHIND THE WORDS",A.a1N),k=q.p1?-1:q.k4
k=q.ajl(k,new C.eZz(q),D.d8E)
w=q.p1
v=w?A.c:A.aY
n=B.a([n,A.W,m,l,B.bX(A.bG,B.a([k,B.aA(p,B.p(p,D.bS8,A.f,p,p,new B.o(p,p,B.K(v,A.r,w?3:1),p,p,D.ff0,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eZC(q),p,p,p,p,p,p,!1,A.a3)],o),A.vv,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Kh,p,p,p)],o)
if(q.gaWB()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aiW("Colour",l,0,360,new C.eZD(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aiW("Shade",k,0.15,0.9,new C.eZE(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kt("Strength",l,0.15,1,new C.eZF(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.vT(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.ya("LOOK",A.wv))
m=B.a([q.oo("Bold",I.aoh,q.fy,new C.eZG(q)),q.oo("Italic",I.aoi,q.go,new C.eZH(q))],o)
for(u=0;u<3;++u){l={}
k=D.cZF[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uI:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bC,1,A.r,-1)
m.push(B.aA(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bH(r,r,r,r),new B.bh(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eZI(l,q),p,p,p,p,p,p,!1,A.a3))}n.push(B.bX(A.bG,m,A.vv,p,8,8))
n.push(q.ya("COLOUR",A.mb))
n.push(q.ajl(q.fx,new C.eZJ(q),D.dks))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Kh,p,p,p))
n.push(q.ya("SIZE AND PLACE",A.Hj))
m=q.fr
m=q.kt("Text size",m,0.5,1.6,new C.eZA(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vT(B.x(B.a([m,q.kt("Up / down",l,0.12,0.5,new C.eZB(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
ckP(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.K(A.b6.j(0.6),A.r,1.6)
u=B.a([A.b6.j(0.18),A.bD.j(0.12)],x.O)
return B.aA(p,B.p(p,B.x(B.a([B.p(p,D.bXK,A.f,p,p,D.b5A,p,62,p,p,p,p,p,62),A.aA,D.fCM,A.am,D.fHA],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(D.tP,p,v,w,p,new B.a9(A.a5,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bBd,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb09(),p,p,p,p,p,p,!1,A.a3)}w=x.p
v=B.B(B.a([B.bx(B.n(12),new B.a5(46,62,B.fT(o,A.A,120,p,A.ci,A.bX,!1,p,!1,p,p),p),A.ap),A.bb,B.E(B.x(B.a([D.fCi,A.P,B.bX(A.bG,B.a([q.oo("Change",A.jW,!1,q.gb09()),q.oo("Remove",A.e9,!1,new C.eZb(q))],w),A.bq,p,6,6)],w),A.E,p,A.e,A.i,0,A.p),1)],w),A.m,p,A.e,A.i,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dgG[t]
u.push(q.oo(s.b,s.a,q.at===t,new C.eZc(q,t)))}u=B.bX(A.bG,u,A.bq,p,8,8)
r=q.at
A:{if(0===r){s=q.c3f(o)
break A}if(1===r){s=q.c2a()
break A}if(2===r){s=q.bIX()
break A}if(3===r){s=q.bPl()
break A}s=q.bL2()
break A}return B.x(B.a([v,A.ae,u,A.aA,s,A.W,new B.bM(A.a5,p,p,q.oo("Reset the whole picture",A.kM,!1,new C.eZd(q)),p)],w),A.E,p,A.e,A.i,0,A.p)},
c3f(d){var w=this,v=x.p
return B.x(B.a([B.bX(A.bG,B.a([w.oo("Auto enhance",E.a1r,!1,new C.eZ3(w)),w.oo("Make words easy to read",A.pj,!1,new C.eZ4(w))],v),A.bq,null,8,8),A.aA,B.cv(new C.eZ5(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c2a(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kt("Exposure",n,-1.5,1.5,new C.eYI(o),0,A.k.ac(n,1))
w=o.RG
w=o.kt("Brightness",w,-0.5,0.5,new C.eYJ(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kt("Contrast",v,0.4,2,new C.eYK(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kt("Fade",u,0,1,new C.eYL(o),0,""+A.k.V(u*100))
t=o.aF
t=o.kt("Spotlight",t,0,1,new C.eYM(o),0,""+A.k.V(t*100))
s=o.a_
s=o.kt("Darken",s,0,0.85,new C.eYN(o),0,""+A.k.V(s*100))
r=o.b8
r=o.kt("Vignette",r,0,0.9,new C.eYO(o),0,""+A.k.V(r*100))
q=o.aC
q=o.kt("Shade behind words",q,0,0.85,new C.eYP(o),0,""+A.k.V(q*100))
p=o.aN
return o.vT(B.x(B.a([n,w,v,u,t,s,r,q,o.kt("Shade top & bottom",p,0,0.85,new C.eYQ(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bIX(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kt("Colour strength",q,0,2.2,new C.eY3(s),1,""+A.k.V(q*100))
w=s.to
w=s.kt("Warmth",w,-1,1,new C.eY4(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kt("Tint",v,-1,1,new C.eY5(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vT(B.x(B.a([q,w,v,s.kt("Shift colours",u,-180,180,new C.eY6(s),0,""+A.k.V(u)+"\xb0"),new B.bM(A.a5,r,r,s.oo("Negative",D.bN6,s.y1,new C.eY7(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.ya("COLOUR WASH",A.OI)
w=s.b4
q=B.a([null],x.Z)
A.d.v(q,D.ayk)
t=B.a([u,v,s.ajl(w,new C.eY8(s),q),A.P],t)
if(s.b4!=null){q=s.b2
t.push(s.vT(s.aiW("Wash strength",q,0,0.9,new C.eY9(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bPl(){var w,v,u,t,s,r=this,q=r.y2
q=r.kt("Blur",q,0,24,new C.eYC(r),0,A.o.u(A.k.V(q)))
w=r.bj
w=r.kt("Soft focus",w,0,1,new C.eYD(r),0,""+A.k.V(w*100))
v=r.aB
u=x.p
v=r.vT(B.x(B.a([q,w,r.kt("Film grain",v,0,1,new C.eYE(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.ya("LIGHT LEAK",D.bMP)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d_(D.ayk,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.ajl(q,new C.eYF(r),t),A.P],u)
if(r.be!=null){q=r.bM
u.push(r.vT(r.aiW("Leak strength",q,0,1,new C.eYG(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bL2(){var w,v,u,t,s=this,r=s.aK
r=s.kt("Zoom",r,1,3,new C.eYd(s),1,""+A.k.V(r*100)+"%")
w=s.bi
w=s.kt("Left / right",w,-1,1,new C.eYe(s),0,""+A.k.V(w*100))
v=s.bG
v=s.kt("Up / down",v,-1,1,new C.eYf(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.vT(B.x(B.a([r,w,v,s.kt("Turn",u,-180,180,new C.eYg(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.W,B.bX(A.bG,B.a([s.oo("Turn 90\xb0",H.apo,!1,new C.eYh(s)),s.oo("Flip sideways",A.Ck,s.c5,new C.eYi(s)),s.oo("Flip upside down",A.Ck,s.cL,new C.eYj(s))],t),A.bq,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c5X(){var w=null,v=B.n(22),u=B.K(A.bC,A.r,1)
return B.p(w,B.x(B.a([D.f2J,A.W,D.fEl,A.aA,B.aA(w,B.p(A.A,D.f2W,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uI,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eZ6(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.tP,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c32(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eYZ(p),m=x.p,l=B.B(B.a([D.bFy,p.oo("Reset",A.kM,!1,new C.eYV(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Kh,o,o,o),j=p.ya("SHAPE",A.apl),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.CT[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b0a(n.$2(t,p.cy),62,u.b,s===t,new C.eYW(v,p),62))}}i=B.bX(A.bG,i,A.bq,o,8,8)
v=p.ya("RING",A.qo)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.CM[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b0a(n.$2(p.cx,t),62,r.b,q===t,new C.eYX(s,p),62))}u=B.bX(A.bG,u,A.bq,o,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ae,p.vT(p.kt("Size",s,0.12,0.4,new C.eYY(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b37(d){return new B.a5(null,d,new B.fH(0.5625,B.cv(new C.eZh(this)),null),null)},
cB5(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.K(A.bC,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uI:q
t=new B.aP(14,14)
s=D.diR[w]
r=v?A.c:A.aB
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bA(1,A.bd,B.aA(A.c5,B.da(q,B.x(B.a([r,A.cS,new B.qD(A.e3,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.O,0,A.p),q,q,A.b7,new B.o(q,q,q,new B.bh(t,t,t,t),q,u,A.n),D.bwN,q,q,q,q,A.hw,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eZq(this,w),q,q,q,q,q,q,!1,A.a3),q))}return B.p(q,B.B(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.byU,A.m9,q,q,q)},
aRk(){var w,v,u=this,t=null,s=u.cB5(),r=u.as
A:{if(0===r){w=u.bN5()
break A}if(1===r){w=u.cGJ()
break A}if(2===r){w=u.cBP()
break A}if(3===r){w=u.ckP()
break A}if(4===r){w=u.c32()
break A}w=u.c5X()
break A}v=x.p
return B.bx(A.tu,B.ec(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bA0,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.Yn,!0),A.ap)},
aNv(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcb4(),p=B.n(16)
q=B.E(B.aA(r,B.p(r,D.f36,A.f,r,r,new B.o(A.c.j(0.08),r,B.K(A.aY,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1)
p=s.Q?r:s.gbOU()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f8B)
else t.push(D.bRe)
t.push(A.ad)
t.push(D.bHG)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aA(r,B.p(r,B.B(t,A.m,r,A.b9,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uI,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a3),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b4H,r,r,r,r,G.akh,r,r,r)},
b08(){var w=null
return new B.D(U.a_O,B.B(B.a([B.aH(w,w,w,w,A.mQ,w,w,w,new C.eYH(this),w,w,w,w,w,w),D.fU7,A.b2,D.c_2],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c5(w,A.Bz,B.bm(!0,B.cv(new C.eZY(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bgX.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.e4()
m.cY(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.S()
t=B.I()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.I()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.af()*w
o=m.af()*v
n=((q&1)===0?t:r).G()
s.drawRect(B.bG(new B.a3(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rK.prototype={
a6(){return"NgmyQuoteDeco."+this.b}}
C.mk.prototype={}
C.zS.prototype={
ah(){var w=this
return B.H(["at",w.a.a8().ae(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nY.prototype={}
C.wf.prototype={
a6(){return"NgmySlidesAiExtra."+this.b}}
C.a8v.prototype={}
C.as3.prototype={}
C.a0W.prototype={
R(){return new C.aIx(new B.au(A.at,$.ax()),B.k4(!0,null,!0,!0,null,null,!1),D.dKu,B.a([],x.s),B.eE([D.IZ],x.Q))}}
C.aIx.prototype={
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.f.q()
this.a1()},
a0T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().Ci(90,700,700,A.eK),$async$a0T)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a0T)
case 8:p=e
if(r.c!=null)r.m(new C.f5p(r,p,q))
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
return B.i($async$a0T,v)},
a0W(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0W=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aIE(78,n,1100,1100),$async$a0W)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gS(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fl(),$async$a0W)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c9(l,".png"))k="image/png"
else k=A.a.c9(l,".webp")?"image/webp":"image/jpeg"
J.ca(p,"data:"+k+";base64,"+A.cJ.gct().aO(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f5q(r,p))
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
return B.i($async$a0W,v)},
b58(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fT(A.cF.aO(A.d.gak(d.split(","))),A.A,u,u,A.ci,A.bX,!0,u,!1,u,u)
return w}catch(v){}return D.buX},
c39(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cwF(C.fK1(w,this.b58(d),f),g)},
adf(d,e,f,g,h){var w=null,v=new C.f5n(f,e),u=new C.f5o(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.K(p?A.bC:A.b6.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a_,w,A.ab,A.f,B.a([B.as(B.X(f?A.Cr:A.Ox,A.bU,w,w,w,26),w,w,w),D.esT],x.p),w),w)
else p=this.c39(g,v.$1(h),u.$1(h),34)
return B.aI(!1,A.a2,!0,s,B.aO(!1,r,!0,B.p(w,B.B(B.a([B.E(B.as(p,w,w,w),1),D.bQW],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mJ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5m(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
aYq(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bx(B.n(8),B.fT(A.cF.aO(A.d.gak(h.split(","))),A.A,p,p,A.ci,A.bX,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.K(n?A.bC:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.ad,B.E(B.d(e,p,1,A.a1,p,p,p,A.Kn,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,D.a2M,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a3))
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kj,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
a9l(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9l=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fNt(),$async$a9l)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f55(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f56(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9l,v)},
afa(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afa=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f58(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f59(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f5a(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ca(p,h)}w=7
return B.b(C.fIK(q,r.cx,j,new C.b2w(r.z,r.Q,r.as,r.at),new C.f5b(r),i,m,p,k),$async$afa)
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
if(p!=null)B.a4(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.f5c(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afa,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.eM,g).w
g=B.aG(d,A.bZ,g).w
w=B.as(B.p(h,h,A.f,h,h,new B.o(A.aY,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.aA(h,B.p(h,D.bUe,A.f,h,h,new B.o(h,h,B.K(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.I,24)],v),D.c3b,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f5D(i),h,h,h,h,h,h,!1,A.a3),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a2M,h,h,h,i.ax?h:new C.f5E(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbDT()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.I,10)],v)
s.push(B.he(B.aI(!1,A.a2,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.wk:A.hy,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wA,A.a6),h,40,h,h,h,h,h,40),A.cO,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cO,h,h,A.ai),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.O,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.n(16),D.b2a),h,h,h,h,h,h,h,h,A2.K3,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iD,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,h,D.aTT,!0,A.a4,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f5F(i)
s=i.aYq(A.lL,q,r,i.gclg(),s)
r=i.z
r=B.E(i.adf(new C.f5H(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bn,B.E(i.adf(new C.f5I(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f5J(i)
s=i.aYq(A.uk,r,p,i.gclo(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.adf(new C.f5K(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.fIU,A.au,D.fLM,A.bx,u,A.P,D.fKa,A.aA,v,A.bx,B.B(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bn,B.E(i.adf(new C.f5L(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fND],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.K(D.bmA,A.r,1)
w=C.ahq(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bM(A.a5,h,h,B.p(h,B.B(B.a([D.bVl,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.frm,h,h,h),B.aO(!1,h,!0,D.emV,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f5M(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.O,0,h,h),A.f,h,h,new B.o(D.beG,h,u,v,h,h,A.n),h,h,h,h,D.byz,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fzp)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.daQ[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bC,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.bA(1,A.bd,new B.D(A.jz,B.aA(h,B.da(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b7,new B.o(v,h,new B.bH(k,k,k,k),h,h,h,A.a6),A.eO,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f5N(i,l),h,h,h,h,h,h,!1,A.a3),h),h))}o.push(B.B(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bx)
o.push(D.fSl)
o.push(A.P)
o.push(B.cv(new C.f5O(i)))
o.push(A.bx)
o.push(D.fGX)
o.push(A.P)
w=B.a([i.b81("auto","Let AI choose",A.e5,A.Rj)],t)
for(v=x.O,m=0;m<11;++m){j=D.wG[m]
u=j.d
w.push(i.b81(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bX(A.bG,w,A.bq,h,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.n(16)
u=B.K(i.r?A.be.j(0.5):A.bC,A.r,1)
o.push(B.p(h,B.iM(h,A.be,h,h,h,new C.f5G(i),D.bQo,D.fRA,h,D.fBM,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aT2,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gcb8()
v=B.fq(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b8(B.n(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f8r:A.Hw
o.push(new B.a5(h,54,B.lL(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oL,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.ch(B.x(o,A.ak,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.w7,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.adm,h,h,h,h,h,h,h,h),h)},
bQB(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f5d(this,p,d)
if(d===D.Dz)return new C.aF2(p,o,q)
w=B.n(16)
v=p?E.wA:q
u=p?q:A.c.j(0.05)
t=B.K(p?A.aB:A.bC,A.r,1)
s=B.X(p?A.ed:C.hQP(d),A.c,q,q,q,20)
r=C.hQQ(d)
return B.aA(q,B.da(q,B.x(B.a([s,A.au,B.eO(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e3)],x.p),A.m,q,A.b9,A.i,0,A.p),q,q,A.b7,new B.o(u,q,t,w,q,v,A.n),A.hu,q,64,q,q,A.hP,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a3)},
b81(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ac:A.bC
r=B.K(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a5,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aA(v,B.da(v,B.B(B.a([w,L.JV,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.O,0,v,v),v,v,A.b7,new B.o(s,v,r,t,v,v,A.n),A.eO,v,v,v,v,L.alA,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f5s(this,d),v,v,v,v,v,v,!1,A.a3)}}
C.a0V.prototype={
R(){return new C.aIw(new B.au(A.at,$.ax()))}}
C.aIw.prototype={
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
afb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afb=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f4Z(r))
w=1
break}B.f1()
r.m(new C.f5_(r))
t=4
q=C.ihE(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.iho(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f50(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h8g()
f=$.D_.h(0,k.a)
o=f==null||J.ct(f)?null:J.fs(f)
if(o==null){r.m(new C.f51(r))
w=1
break}n=C.ihm(o,r.a.c)
C.ihi(r.a.c.a)
$.h7w=!0
k=r.c
if(k!=null)B.a4(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hb6(j)
h=C.hb7(r.a.c)
e=C.hb8(r.a.c)
w=7
return B.b(C.bDP(k,r.a.c.a,j,h,new C.f52(r),i,e,a0),$async$afb)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f53(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.eM,i).w
i=B.aG(d,A.bZ,i).w
w=B.as(B.p(j,j,A.f,j,j,new B.o(A.aY,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.apD,A.f,j,j,D.b4m,j,34,j,j,j,j,j,34),A.as,D.bGa],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Av.a9Q,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.n(16),Aw.acN),j,j,j,j,j,j,j,j,A2.K3,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,D.aTT,!0,A.a4,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d6Y[q]
o=A.c.j(0.06)
n=k.e?j:new C.f54(k,p)
r.push(B.mY(j,o,new B.y(p,j,AC.UN,j,j,j,j,j,j,j,j,j),j,n,j,j,Q.vC,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.W,B.bX(A.bG,r,A.bq,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aT2,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gcb9()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.be.j(0.5),A.ej.j(0.5)],x.O):D.cET
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.emR:D.bUV
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aI(!1,A.a2,!0,j,B.aO(!1,s,!0,B.eK(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hr,j,j,j)],v),A.m,j,A.b9,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a5,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.ch(B.x(w,A.ak,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.w7,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.adm,j,j,j,j,j,j,j,j),j)}}
C.b2w.prototype={}
C.aF2.prototype={
R(){return new C.blI(null,null)}}
C.blI.prototype={
gayr(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.qe,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gayr().q()
this.bxL()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.cb(this.gayr(),new C.elQ(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.bje.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.ddf[s]
p=q.a*v
q=q.b*u
$.S()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=D.y3.j(0.25+r*0.6).gp(0)
n=o.G()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.G()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.G()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
av(d){return d.b!==this.b}}
C.asB.prototype={
a6(){return"NgmyTextCommand."+this.b}}
C.a_h.prototype={
R(){return new C.aCy()}}
C.aCy.prototype={
gaji(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahD(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAp(){var w=this.e
return w===$?this.e=C.hb6(this.a.c).t(0,D.Dz):w},
a98(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a98=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dpd(s))
u=3
r=A.d.fY(D.wG,new C.dpe(s))
q=B.df(C.hb6(s.a.c),x.Q)
l=q
J.hu(l,D.Dz)
p=l
if(s.gAp())J.ca(p,D.Dz)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAp()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hb7(i.c)
g=C.hb8(s.a.c)
w=6
return B.b(C.bDP(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a98)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahD(q,s.gaji())
f=q==null?null:q.b
n=f==null?s.gaji():f
if(!J.A(n,r.a)&&!s.gAp())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dpf(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a98,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.J,l=m?A.c:A.N,k=m?A.aR:A.al,j=m?A.N:A.c,i=B.n(28),h=B.K(m?A.bC:A.aN,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bF,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dpi(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cy,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wG[w]
u=o.gaji()
t=o.f?n:new C.dpj(o,v)
f.push(new C.buh(v,u===v.a,t,n))}f=B.kP(1.25,f,3,10,10,n,A.dS,!0)
u=B.n(18)
t=o.gAp()?D.c5Z:n
if(o.gAp())s=n
else s=m?A.bo:A.bN
r=B.X(A.e5,o.gAp()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAp()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAp()?A.ac:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAp()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.as,q,B.b8c(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dpk(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,P.akj,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.frG,n,n,n)],g))
f=B.ch(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.Gq,n,n,A.ah)
u=o.f?n:o.gbCS()
t=B.bo(A.L,n,n,n,n,n,A.af,n,new B.b8(B.n(16),A.a0),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bBH,e,n),new B.ds(1,A.cp,f,n),new B.D(A.Gp,new B.a5(1/0,50,B.bI(B.eK(B.as(o.f?A.tc:D.fJn,n,n,n),n,new B.o(n,n,n,s,n,D.c4x,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.O,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.ua,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.buh.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.K(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bM(A.ls,w,w,B.X(v.c,A.ac,w,w,w,18),w),new B.bM(A.lt,w,w,B.d(v.b,w,w,w,w,w,w,D.frD,w,w,w),w)],x.p)
if(q)v.push(D.b_D)
return B.aA(w,B.da(w,new B.an(A.a_,w,A.ab,A.t,v,w),w,w,A.b7,new B.o(w,w,p,t,s,new B.a9(A.ay,A.aE,A.x,r,w,w),A.n),A.eO,w,w,w,w,A.ck,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a3)}}
C.elN.prototype={
aGe(d,e,f){return e+"@"+A.a.aX(A.o.fu(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wN(d,e){return this.aGe(0,e,null)}}
C.aN9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.b2s.prototype={
B(d){var w,v,u=null,t=C.h9W(this.c)
if(t==null)w=D.btr
else{w=B.aG(d,u,x.w).w.cLW(D.by5,D.f7B)
v=this.d
w=B.q_(B.dZ(B.aoM(!1,t,!1,v,!1,390),!v,u),w)}return B.eO(A.A,new B.a5(416,870,new C.bni(w,u),u),A.f,A.dz)}}
C.bni.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dpR[w]
u=new B.aP(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bh(u,u,u,u),t,D.arA,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.drc[w]
u=new B.aP(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bh(u,u,u,u),t,D.arA,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,B.c3(t,new B.o(t,t,t,B.n(64),D.cWZ,D.c2T,A.n),A.bh),0,0,0))
s.push(B.bS(3,B.c3(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bh),3,3,3))
s.push(B.bS(13,B.bx(B.n(51),B.ec(this.c,A.w,!0),A.ap),13,13,13))
u=B.n(20)
s.push(B.ap(t,B.as(B.p(D.b_O,B.p(t,t,A.f,t,t,D.b4F,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,B.dZ(B.bx(B.n(51),D.bv2,A.ap),!0,t),13,13,13))
s.push(B.ap(22,B.dZ(B.as(B.p(t,t,A.f,t,t,new B.o(A.ac,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.ab,A.f,s,t)}}
C.lq.prototype={
pO(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.ew(A.K,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bi,j,2,"Your Presentation Title",0,0,"",D.mV,D.cV,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.ew(A.K,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bi,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cV,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.rL(i,l,0,0,B.a([f,w,C.ew(A.bj,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fD,t.l(),3,"",0,0,"",D.cn,D.fa,0.3,0.35,0.72)],s),C.cE(),D.mU,"","","Welcome",D.dh)
u=C.cE()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bi,j,2,"Agenda",0,0,"",D.cn,D.cV,0.84,0.08,0.08)
w=C.cE()
w=C.rL(i,l,0,0,B.a([u,C.ew(A.bj,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bi,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uY,D.cV,0.8,0.1,0.26)],s),C.cE(),D.mU,"","","Agenda",D.dh)
u=C.cE()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bi,j,2,"Main Idea",0,0,"",D.cn,D.cV,0.84,0.08,0.08)
f=C.cE()
f=C.rL(i,l,0,0,B.a([u,C.ew(A.bj,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bi,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cn,D.cV,0.8,0.1,0.26)],s),C.cE(),D.mU,"","","Key Point 1",D.dh)
u=C.cE()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bi,j,2,"Compare & Contrast",0,0,"",D.cn,D.cV,0.84,0.08,0.08)
r=C.cE()
r=C.ew(A.bj,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bi,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cV,0.4,0.08,0.24)
q=C.cE()
q=C.rL(i,l,0,0,B.a([u,r,C.ew(A.bj,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bi,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cV,0.4,0.52,0.24)],s),C.cE(),D.mU,"","","Key Point 2",D.dh)
r=C.cE()
r=C.ew(A.K,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bi,j,2,h,0,0,"",D.dh,D.cV,0.8,0.1,0.32)
e=C.cE()
p=C.C0(l,l,l,l,D.Dv,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rL(i,l,0,0,B.a([r,C.ew(A.K,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bi,j,2,"Questions?",0,0,"",D.cn,D.cV,0.7,0.15,0.58)],s),C.cE(),D.mU,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.F1.prototype={
bw(d){return this.e.$1(d)}}
C.eB.prototype={}
C.j9.prototype={}
C.ET.prototype={
gaM3(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahq(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4l(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.ET(v,u,t,d==null?w.d:d)},
FV(d){return this.a4l(null,d,null,null)},
aEW(d){return this.a4l(null,null,null,d)},
cLU(d,e){return this.a4l(d,e,null,null)},
bdh(d){return this.a4l(d,null,null,null)},
bdn(d){return this.a4l(null,null,d,null)}}
C.NS.prototype={
R(){return new C.bl4(new B.eD(0,$.ax()),null,null)}}
C.bl4.prototype={
Z(){var w,v=this
v.a2()
w=v.pS(new C.e_q(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.h6(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.ax()
w.P$=0
this.bxe()},
B(d){var w=C.ahq(this.a.c.a)
if(w==null)w=A.d.gI(D.HQ)
return B.cv(new C.e_p(this,w,C.hqd(this.a.c.d)))}}
C.bsQ.prototype={
B(d){return B.o2(A.WI,this.e,new C.f4c(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bg0.prototype={
a3(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aTY(d,e,v)
break
case"confetti":w.bJq(d,e,v)
break
case"crown":w.bL3(d,e,v)
break
case"aurora":w.bDX(d,e,v)
break
case"champagne":w.bHi(d,e,v)
break
case"diamonds":w.bNe(d,e,v)
break
case"starburst":w.cyI(d,e,v)
break
case"balloons":w.bEa(d,e,v)
break
case"galaxy":w.bSs(d,e,v)
break
case"redcarpet":w.cpA(d,e,v)
break
case"coins":w.bIP(d,e,v)
break
case"lanterns":w.c1H(d,e,v)
break
case"hearts":w.c_g(d,e,v)
break
case"petals":w.ckG(d,e,v)
break
case"butterflies":w.bGh(d,e,v)
break
case"neon":w.c5H(d,e,v)
break
case"disco":w.bNp(d,e,v)
break
case"sunrise":w.cAn(d,e,v)
break
case"pearls":w.cjK(d,e,v)
break
case"snow":w.cyp(d,e,v)
break
case"laurel":w.c1N(d,e,v)
break
case"ribbons":w.cs4(d,e,v)
break
case"kente":w.c1v(d,e,v)
break
case"trophy":w.cE_(d,e,v)
break
case"shooting":w.cw9(d,e,v)
break
case"bokeh":w.bEv(d,e,v)
break
case"orbits":w.chm(d,e,v)
break
case"flowers":w.bRH(d,e,v)
break
case"music":w.c5p(d,e,v)
break
case"mandala":w.c3Q(d,e,v)
break
case"sparklers":w.cyw(d,e,v)
break
case"city":w.bI5(d,e,v)
break}},
rU(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.I()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oU
u=new B.aF(w.r,A.ag,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aY(w,s))
u.D(new B.c4(w,t,w+f,t))
u.D(new B.c4(w,t,w,t+f))
u.D(new B.c4(w,t,w-f,t))
u.D(new B.c4(w,t,w,s))
u.D(new B.bs())
d.aH(u,v)
d.ad(e,f*0.18,v)},
lT(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.rU(d,new B.t(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aTY(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lT(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aC],w),B.a([A.ik,A.bD],w),B.a([A.eA,A.aJ],w),B.a([A.c,A.az],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bf(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cZ(h,1))
f=g+c0*(C.cZ(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cZ(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kA(new B.t(g,c1),new B.t(f,e),A.ct.aw(0,i/0.22))
a0.toString
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.a5,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rN(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.bB
a2=B.kA(new B.t(g,c1),a0,0.75)
a2.toString
a3=a1.G()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.r=A.c.gp(0)
a3=a2.G()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.ct.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cZ(h,4)
if(a5<0.15){a4=1-a5/0.15
$.S()
a8=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hi(A.G,o)
a3=a8.G()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cZ(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cZ(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.S()
b9=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bB
b9.a=A.oU
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cZ(h,b1+120)>0.5)this.rU(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bJq(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.S(),a0=B.I()
a0.sam(new B.a9(A.ay,A.aE,A.x,D.dk7,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aA(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a3*(0.8+C.cZ(u,4))+u)
q=h*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a3*(2+3*C.cZ(u,6))+u)
o=D.QL[A.o.E(A.k.bf(C.cZ(u,7)*5),0,4)]
J.bl(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(d.r,A.ag,null,null,t)
d=-q*2
t.push(new B.aY(d,0))
for(l=1;l<=8;++l){s=new B.aq(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bw(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.S()
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=B.b1(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cf(m.gbv().a.snapshot()):t).a,k)
k.delete()}else{t=B.bK(A.I,q*1.8*A.k.E(t,0.15,1),q)
k=n.G()
f.drawRect(B.bG(t),k)
k.delete()}f.restore()}this.lT(a1,a2,a3,25,A.bL,30)},
bL3(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.t(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.S()
n=B.a([],r)
m=new B.aF(o.r,A.ag,a4,a4,n)
n.push(new B.aY(a5,a6))
o=p-0.07
n.push(new B.aq(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.aq(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bs())
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bgK],v),a4,a4).aA(0,B.bY(w,u)))
l=o.G()
o=m.gbv().a.snapshot()
t.drawPath((m.e=new B.cf(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aF($.S().r,A.ag,a4,a4,B.a([],r))
v=a6+j
i.D(new B.aY(a5,v))
u=j*0.3
s=a6+u
i.D(new B.aq(a5,s))
o=a6+j*0.6
i.D(new B.aq(a5+k*0.22,o))
i.D(new B.aq(a5+k*0.5,a6))
i.D(new B.aq(a5+k*0.78,o))
o=a5+k
i.D(new B.aq(o,s))
i.D(new B.aq(o,v))
i.D(new B.bs())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.I()
n.sam(new B.a9(A.b0,A.b5,A.x,D.diL,a4,a4).aA(0,new B.a3(a5,a6,o,v)))
a8.aH(i,n)
for(v=[D.eDa,D.ewk,D.eMP],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.r=a0.gp(a0)
l=a1.G()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.r=A.ac.gp(0)
l=a1.G()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.i_.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xt(i),u=B.a([],x.X),o=new B.tq(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jC(y.M));--f
o.io()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aF(n,v.b,a4,new B.cy([new B.Bs(o,f),0,d*h,!0]),B.a([],r))
f=new B.ao(A.Q,A.M,A.S,A.T,A.R)
f.b=A.a9
f.c=g
f.e=A.dQ
f.r=A.bL.gp(0)
l=f.G()
f=d.gbv().a.snapshot()
t.drawPath((d.e=new B.cf(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rU(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lT(a8,a9,b0,45,A.bL,40)},
bDX(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lT(a8,a9,b0,60,A.c,50)
w=[D.eZ_,D.eYI,D.eYC,D.eZY]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.S()
i=B.a([],p)
h=new B.aF(n.r,A.ag,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.aY(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bw(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.aq(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bw(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.S()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.b=A.a9
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oU
n.z=new B.hi(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cf(h.gbv().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.b=A.a9
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oU
n.z=new B.hi(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cf(h.gbv().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cZ(a4,1))+C.cZ(a4,2)*a3,a3)
r=C.cZ(a4,3)
q=Math.sin(b0+a4)
p=C.cZ(a4,4)
$.S()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=A.vV.j(0.4+0.5*C.cZ(a4,5)).gp(0)
n.a=A.oU
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bHi(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.S(),a0=B.I()
a0.sam(new B.c2(A.A,0.5,A.x,l,0,B.a([A.hX.j(0.25+0.1*h),D.Yy],x.O),l,l).aA(0,B.bY(new B.t(g,f),e)))
a1.ad(new B.t(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aF(d.r,A.ag,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.aY(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.aq(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bw(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.b=A.a9
a0.c=h
a0.r=D.QL[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cf(u.gbv().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*o,o)
r=k*(0.1+0.8*C.cZ(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cZ(w,4))
if(n<f){this.rU(a1,new B.t(r,n),m*2.4,A.bL,A.k.E(n/f,0,1))
continue}$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xV.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bNe(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lT(a9,b0,b1,30,A.l3,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cZ(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bl(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aF(h.r,A.ag,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.aY(e,i))
h*=0.28
j*=0.6
g.push(new B.aq(h,j))
d=o*0.28
g.push(new B.aq(d,j))
a0=o*0.5
g.push(new B.aq(a0,i))
a1=k*0.6
g.push(new B.aq(0,a1))
g.push(new B.bs())
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.sam(new B.a9(A.ay,A.aE,A.x,D.dek,a5,a5).aA(0,B.bK(A.I,k*1.2,o)))
a2=g.G()
g=f.gbv().a.snapshot()
v.drawPath((f.e=new B.cf(g)).a,a2)
a2.delete()
a3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a3.b=A.a9
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gp(0)
a2=a3.G()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.G()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.G()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.rU(a9,new B.t(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cyI(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aF(p.r,A.ag,null,null,o)
o.push(new B.aY(h,g))
p=s-q
o.push(new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bs())
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbv().a.snapshot()
w.drawPath((n.e=new B.cf(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bf(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.buq.aw(0,k)*(0.5+0.5*C.cZ(t,v)))
this.rU(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.QL[A.o.E(A.k.bf(C.cZ(t,4)*5),0,4)],u)}},
bEa(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cZ(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cZ(o,2))+C.cZ(o,3)*m,m)
j=C.cZ(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.ayM[A.o.F(o,6)]
h=$.S()
g=B.a([],s)
f=new B.aF(h.r,A.ag,a3,a3,g)
h=k+n*1.15
g.push(new B.aY(j,h))
for(e=1;e<=6;++e){d=new B.aq(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bw(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cf(f.gbv().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bK(new B.t(j,k),n*2.3,l)
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d=B.ar(i,A.w,0.35)
d.toString
l.sam(new B.c2(D.b_R,0.9,A.x,a3,0,B.a([A.c,i,d],t),W.ayC,a3).aA(0,a2))
a1=l.G()
u.drawOval(B.bG(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aF(g.r,A.ag,a3,a3,l)
d=n*0.12
l.push(new B.aY(j-d,h))
l.push(new B.aq(j+d,h))
l.push(new B.aq(j,k+n))
l.push(new B.bs())
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.G()
l=g.gbv().a.snapshot()
u.drawPath((g.e=new B.cf(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cZ(o,11))+C.cZ(o,12)*m,m)
r=C.cZ(o,13)
J.bl(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bK(A.I,t,v)
$.S()
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=D.ayM[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.bG(s),a1)
a1.delete()
u.restore()}},
bSs(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lT(b1,b2,b3,50,A.c,70)
for(w=[D.eZ7,D.eYO,D.eYU],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.S()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bY(new B.t(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cZ(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cZ(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bL,A.eG,g)
k.toString
d=C.cZ(i,3)
$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.r=k.j(0.5+0.5*C.cZ(i,4)).gp(0)
a0.a=A.oU
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.S()
a9=B.I()
a9.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([A.xV.j(0.55),D.ahP],u),a4,a4).aA(0,B.bY(b0,a8)))
b1.ad(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bf(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.cZ(a2,9)),a6*0.1*C.cZ(a2,8))
a5=B.kA(a3,a3.a7(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kA(a3,a5,0.6)
a6.toString
a8=B.I()
a8.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rN(a3,a5)))
a8.c=a7*0.005
a8.d=A.bB
b1.bo(a6,a5,a8)}},
cpA(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.S()
n=B.a([],s)
m=new B.aF(o.r,A.ag,b5,b5,n)
n.push(new B.aY(q,u))
o=p-0.16
n.push(new B.aq(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.aq(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bs())
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(new B.c2(A.A,0.5,A.x,b5,0,B.a([A.xV.j(0.28),D.ahP],w),b5,b5).aA(0,B.bY(new B.t(q,u),t)))
o.a=A.oU
l=o.G()
q=m.gbv().a.snapshot()
v.drawPath((m.e=new B.cf(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ek:A.el)
a9=$.S()
b0=B.a([],s)
m=new B.aF(a9.r,A.ag,b5,b5,b0)
b0.push(new B.aY(a5?0:b6,0))
b0.push(new B.aq(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.c4(a9,k,a5?g:a1,b7))
b0.push(new B.aq(a5?0:b6,b7))
b0.push(new B.bs())
a9=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a9.sam(new B.a9(A.a5,A.a8,A.x,a7,b5,b5).aA(0,new B.a3(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbv().a.snapshot()
v.drawPath((m.e=new B.cf(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b1.r=A.hX.gp(0)
b1.c=o
b1.d=A.bB
l=b1.G()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aF($.S().r,A.ag,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.aY(b6*0.42,w))
b2.D(new B.aq(b6*0.58,w))
b2.D(new B.aq(b6*0.8,b7))
b2.D(new B.aq(b6*0.2,b7))
b2.D(new B.bs())
v=B.I()
v.sam(D.c4q.aA(0,new B.a3(0,w,0+b6,w+b7*0.22)))
b9.aH(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cZ(r,1))+C.cZ(r,2)*b3,b3)
u=C.cZ(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rU(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cZ(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bIP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cZ(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cZ(t,2))+C.cZ(t,3)*r,r)-q
o=C.cZ(t,4)*i
n=Math.cos(f*(2+3*C.cZ(t,5))+t)
m=Math.abs(n)
l=B.bK(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.sam(new B.a9(A.ay,A.aE,A.x,n>0?D.duI:D.cKJ,null,null).aA(0,l))
k=q.G()
v.drawOval(B.bG(l),k)
k.delete()
q=-(s*0.22)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=Math.max(0.6,s*0.08)
j.r=D.br4.gp(0)
k=j.G()
v.drawOval(B.bG(new B.a3(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rU(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lT(d,e,f,30,A.bL,110)},
c1H(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lT(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cZ(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.sam(new B.c2(A.A,0.5,A.x,d,0,B.a([Ar.MC.j(0.45*k),D.agu],u),d,d).aA(0,B.bY(new B.t(l,m),j)))
g=h.G()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aF(i.r,A.ag,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.aY(l-i,e))
j.push(new B.aq(l+i,e))
i=o*0.38
h=m+h
j.push(new B.aq(l+i,h))
j.push(new B.aq(l-i,h))
j.push(new B.bs())
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i=B.ar(D.bgZ,A.c,0.2*k)
i.toString
j.sam(new B.a9(A.b0,A.b5,A.x,B.a([D.bma,i],u),d,d).aA(0,B.bK(new B.t(l,m),o*1.4,o)))
g=j.G()
j=f.gbv().a.snapshot()
v.drawPath((f.e=new B.cf(j)).a,g)
g.delete()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
c_g(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bl(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aF(m.r,A.ag,d,d,l)
m=o*0.9
l.push(new B.aY(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.l_(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.l_(m,g,o*1.8,h,0,m))
l.push(new B.bs())
f=D.d4I[A.o.F(p,5)]
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l=B.ar(f,A.w,0.25)
l.toString
m.sam(new B.c2(A.tr,0.5,A.x,d,0,B.a([A.c,f,l],u),N.a43,d).aA(0,B.bY(A.I,o*1.4)))
e=m.G()
m=i.gbv().a.snapshot()
v.drawPath((i.e=new B.cf(m)).a,e)
e.delete()
v.restore()}this.lT(a3,a4,a5,30,A.ik,130)},
ckG(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cZ(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bl(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aF(n.r,A.ag,i,i,m)
n=-p
m.push(new B.aY(0,n))
l=n*0.2
m.push(new B.c4(p,l,0,p))
m.push(new B.c4(n,l,0,n))
m.push(new B.bs())
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m=(q&1)===0?D.cES:D.dfI
n.sam(new B.a9(A.a5,A.a8,A.x,m,i,i).aA(0,B.bY(A.I,p)))
j=n.G()
n=k.gbv().a.snapshot()
v.drawPath((k.e=new B.cf(n)).a,j)
j.delete()
v.restore()}this.lT(d,e,a0,25,A.bL,140)},
bGh(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lT(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b2*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bl(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bl(v.save())
v.scale(a1*n,1)
a2=$.S()
a3=B.a([],u)
a4=new B.aF(a2.r,A.ag,a6,a6,a3)
a3.push(new B.aY(0,0))
a3.push(new B.l_(f,e,l,d,h,0))
a3.push(new B.l_(q,h,g,q,0,h))
a3.push(new B.bs())
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.sam(new B.a9(A.a5,A.a8,A.x,i?D.dfr:D.die,a6,a6).aA(0,new B.a3(0,m,k,j)))
a5=a2.G()
a2=a4.gbv().a.snapshot()
v.drawPath((a4.e=new B.cf(a2)).a,a5)
a5.delete()
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.b=A.a9
a2.c=Math.max(0.6,o)
a2.r=D.Br.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cf(a4.gbv().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=D.bqk.gp(0)
p.c=q*0.1
p.d=A.bB
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c5H(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=v
q.r=D.azV[t].j((1-s)*0.9).gp(0)
q.z=new B.hi(A.G,v)
p=r*0.3
p=B.br(B.bK(e,r,r*1.6),new B.aP(p,p))
o=q.G()
u.drawRRect(B.e5(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cZ(m,1)*4)+m)))
k=D.azV[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.br(new B.a3(j,i,j+w,i+l),new B.aP(v,v))
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=k.j(0.85).gp(0)
j.z=new B.hi(A.acB,p)
o=j.G()
u.drawRRect(B.e5(i),o)
o.delete()}},
bNp(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cZ(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cZ(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nT,A.du][A.o.F(p,4)]
j=C.cZ(p,3)
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=k.j(0.75).gp(0)
i.a=A.oU
i.z=new B.hi(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.S()
t=B.I()
t.r=A.aB.gp(0)
t.c=1.2
a3.bo(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.I()
t.r=A.dt.gp(0)
a3.ad(v,u,t)
J.bl(q.save())
a1=new B.aF(a1.r,A.ag,null,null,B.a([],x.v))
a1.D(new B.jK(B.bY(v,u)))
a3.mJ(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=B.ar(A.bm,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.G()
q.drawRect(B.bG(new B.a3(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rU(a3,v.a7(0,new B.t(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cAn(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.aw(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.S()
q=B.a([],u)
p=new B.aF(r.r,A.ag,h,h,q)
q.push(new B.aY(d,a0))
r=s-0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bs())
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.bL.j(0.1).gp(0)
o=r.G()
r=p.gbv().a.snapshot()
w.drawPath((p.e=new B.cf(r)).a,o)
o.delete()}d=e*0.5
$.S()
a0=B.I()
a0.sam(new B.c2(A.A,0.5,A.x,h,0,B.a([D.bcn.j(0.6),D.agu],x.O),h,h).aA(0,B.bY(a1,d)))
a2.ad(a1,d,a0)
a0=e*0.2
d=B.I()
d.sam(D.etJ.aA(0,B.bY(a1,a0)))
a2.ad(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cZ(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.c.j(0.18).gp(0)
i=B.bK(new B.t(l,k),r,u)
o=j.G()
w.drawOval(B.bG(i),o)
o.delete()
i=B.bK(new B.t(l+q,k-n),r,m)
o=j.G()
w.drawOval(B.bG(i),o)
o.delete()}this.lT(a2,a3,a4,20,A.i_,180)},
cjK(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.S()
q=B.a([],t)
p=new B.aF(r.r,A.ag,f,f,q)
q.push(new B.aY(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.aq(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bw(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.aq(e,d)
q.push(r)
o=p.f
if(o!=null)r.bw(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bs()
q.push(r)
q=p.f
if(q!=null)r.bw(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.S()
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=B.ar(A.cw,A.j7,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cf(p.gbv().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cZ(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cZ(i,2))+C.cZ(i,3)*j,j)
n=C.cZ(i,4)*e+Math.sin(a3+i)*a0*0.02
$.S()
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.sam(new B.c2(Ao.xr,0.5,A.x,f,0,D.dlQ,f,f).aA(0,B.bY(new B.t(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lT(a1,a2,a3,25,A.c,190)},
cyp(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cZ(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bB
J.bl(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.G()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.G()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.G()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lT(d,a0,a1,40,A.eA,200)},
c1N(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.t(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dd(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bl(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bK(new B.t(p,0),q,r)
$.S()
f=new B.ao(A.Q,A.M,A.S,A.T,A.R)
f.sam(D.c4d.aA(0,new B.a3(0,o,n,m)))
e=f.G()
s.drawOval(B.bG(g),e)
e.delete()
s.restore()}}$.S()
a0=B.I()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bhi.gp(0)
a3.ad(w,v*1.08,a0)
d=a5*0.8
this.rU(a3,w.a7(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lT(a3,a4,a5,40,A.bL,210)},
cs4(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hX,A.i_],a6),B.a([A.p2,A.ik],a6),B.a([A.aD,A.eG],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.S()
k=B.a([],o)
j=new B.aF(l.r,A.ag,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.aY(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bw(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.aq(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bw(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dw(i,s),l=new B.bR(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aq(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bw(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bs()
k.push(l)
k=j.f
if(k!=null)l.bw(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.S()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k=a7[m]
h=k[0]
l.sam(new B.a9(A.a5,A.a8,A.x,B.a([h,k[1],h],a6),As.zp,new B.mE(w)).aA(0,new B.a3(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cf(j.gbv().a.snapshot()):l).a,a2)
a2.delete()}this.lT(a8,a9,b0,40,A.c,220)},
c1v(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bf(g/t),5)
a1=g+t
$.S()
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a3=Math.abs(a0)
a2.r=D.a47[a3].gp(0)
a4=a2.G()
s.drawRect(B.bG(new B.a3(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a5.r=D.a47[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.bG(new B.a3(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a6,a6)
v=C.cZ(a0,3)
t=C.cZ(a0,4)
this.rU(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a47[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cE_(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.c=v
p.r=A.bL.j(0.06).gp(0)
o=p.G()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.D(new B.aY(v,a2))
w=a1+w
l.D(new B.aq(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.D(new B.c4(w,r,p,k))
w=a2+m*0.95
l.D(new B.aq(p,w))
p=n*0.3
j=a2+m
l.D(new B.aq(a1+p,j))
l.D(new B.aq(a1-p,j))
q=a1-q
l.D(new B.aq(q,w))
l.D(new B.aq(q,k))
l.D(new B.c4(v,r,v,a2))
l.D(new B.bs())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.bK(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=q
d.r=A.az.gp(0)
o=d.G()
u.drawArc.apply(u,[B.bG(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.I()
a1.sam(new B.a9(A.a5,A.a8,A.x,D.dox,A.ayU,null).aA(0,new B.a3(v,a2,r,j)))
a4.aH(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rU(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bJr(a4,a5,a6,60)},
bJr(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bl(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bK(A.I,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=D.QL[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.bG(o),m)
m.delete()
u.restore()}},
cw9(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lT(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cZ(o,1)*1.6
m=A.k.F(a2+C.cZ(o,2)*n,n)/n
l=e*(C.cZ(o*7+A.k.bf((a2+C.cZ(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aA(0,B.rN(new B.t(l,h),i)))
g.c=r
g.d=A.bB
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rU(a0,i,p,A.c,1-m)}},
bEv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cZ(r,1))
p=A.k.F(C.cZ(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cZ(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.S()
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l=A.o.F(r,5)
m.r=D.aBC[l].j(n).gp(0)
m.a=A.oU
m.z=new B.hi(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m.b=A.a9
m.c=Math.max(0.6,q*0.05)
m.r=D.aBC[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
chm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bl(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bK(A.I,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.S()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.b=A.a9
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.G()
w.drawOval(B.bG(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=A.i_.gp(0)
n=k.G()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=A.hX.j(0.4).gp(0)
k.z=new B.hi(A.G,r)
n=k.G()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lT(d,e,f,45,A.bL,270)},
bRH(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.cZ(o,2)*4,4)/4
j=A.et.aw(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dcm[A.o.F(o,5)]
J.bl(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bK(new B.t(0,l),i,j)
$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.sam(new B.a9(A.b0,A.b5,A.x,B.a([A.c,g],u),null,null).aA(0,B.bK(new B.t(0,l),f,h)))
a1=a0.G()
v.drawOval(B.bG(d),a1)
a1.delete()}$.S()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.hX.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lT(a5,a6,a7,30,A.i_,280)},
c5p(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bY(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=v
j.r=D.axX[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.bG(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cZ(g,1))+C.cZ(g,2)*h,h)
e=C.cZ(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cZ(g,4))
a0=D.axX[A.o.F(g,4)]
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.r=a0.gp(0)
J.bl(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bK(A.I,d,d*1.5)
i=a1.G()
u.drawOval(B.bG(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.G()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.G()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c3Q(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.t(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bl(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aF(d.r,A.ag,a3,a3,a0)
a0.push(new B.aY(0,i))
a0.push(new B.c4(h,m,0,g))
a0.push(new B.c4(j,m,0,i))
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=t
d.r=B.ar(A.bL,A.nT,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbv().a.snapshot()
v.drawPath((a1.e=new B.cf(d)).a,a2)
a2.delete()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=A.i_.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.S()
a5=B.I()
a5.sam(new B.c2(A.A,0.5,A.x,a3,0,B.a([A.hX.j(0.25),D.Yy],x.O),a3,a3).aA(0,B.bY(w,a4)))
a7.ad(w,a4,a5)
this.lT(a7,a8,a9,30,A.bL,300)},
cyw(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=A.bm.gp(0)
h.c=q
h.d=A.bB
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.sam(new B.c2(A.A,0.5,A.x,null,0,B.a([A.i_,A.hX.j(0.6),D.Yy],o),null,null).aA(0,B.bY(new B.t(j,i),p)))
g=l.G()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.k.F(b2+C.cZ(f,2)*e,e)/e
a0=A.k.bf((b2+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cZ(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.i_,A.aC,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bB
a6.a=A.oU
g=a6.G()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.G()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.G()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lT(b0,b1,b2,35,A.bL,310)},
bI5(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aTY(a9,new B.av(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cZ(n,1))
l=a8*(0.14+0.24*C.cZ(n,2))
k=a8-l
j=new B.a3(o,k,o+m,k+l)
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.sam(D.c5a.aA(0,j))
h=i.G()
r.drawRect(B.bG(j),h)
h.delete()
g=A.k.bf(m/q)
f=A.k.bf(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cZ(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.S()
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a6.r=A.bL.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.bG(new B.a3(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.b0m.prototype={
B(d){var w,v=null,u=new C.cdg(),t=new C.cdi(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aqJ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cdh(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.HQ[w]))
return B.bX(A.bG,s,A.bq,v,12,10)}}
C.ZP.prototype={
R(){return new C.aAW()}}
C.aAW.prototype={
gvU(){var w=this.d
return w===$?this.d=this.a.c:w},
gb0d(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b4,A.aO),$.ax())}return v},
gays(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaM3()
v=$.ax()
u.f!==$&&B.bF()
t=u.f=new B.au(new B.ba(w,A.b4,A.aO),v)}return t},
q(){var w=this.gb0d(0),v=$.ax()
w.T$=v
w.P$=0
w=this.gays()
w.T$=v
w.P$=0
this.a1()},
a_H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_H=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().Ci(90,700,700,A.eK),$async$a_H)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a_H)
case 8:p=e
o=q.b.toLowerCase()
n=J.ain(o,".png")?"image/png":"image/jpeg"
r.m(new C.deu(r,n,p))
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
return B.i($async$a_H,v)},
b0c(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b5(4,B.n(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.UZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahq(p.gvU().a)
if(n==null)n=A.d.gI(D.HQ)
w=p.gvU()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.ab,A.t,B.a([B.bS(0,new C.NS(p.gvU(),!1,!0,new B.bT(w.a+v,x.W)),0,0,0),B.ap(o,B.I9(A.mQ,new C.dez(d),B.nO(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.I9(A.apB,new C.deA(p),B.nO(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aTS,o,o,o)
t=B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gb0d(0),o,o,o,o,o,2,p.b0c("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.deB(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.fS,!0,A.a4,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.K(A.hX.j(0.6),A.r,1)
if(p.gvU().d.length===0)q=D.bSC
else{q=C.hqd(p.gvU().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fT(q,A.A,o,o,A.ci,A.bX,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ad,B.aA(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcba(),o,o,o,o,o,o,!1,A.a3)],u)
if(p.gvU().d.length!==0)r.push(B.aH(o,o,o,o,D.a2M,o,o,o,new C.deC(p),o,o,o,o,"Remove logo",o))
return B.c5(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.W,B.B(r,A.m,o,A.e,A.i,0,o,o),A.P,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gays(),o,o,o,o,o,2,p.b0c("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.deD(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a4,o,A.ao,o,o,o,o),A.ae,B.dl(D.bRw,D.fTg,new C.deE(p,d),B.bo(A.az,o,o,o,A.w,o,A.cm,o,new B.b8(B.n(14),A.a0),o,o,o))],u),A.ak,o,A.e,A.O,0,A.p),A.f,o,o,D.b4R,o,o,o,o,A.Gm,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aME.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.a_9.prototype={
R(){return new C.bhy(new B.au(A.at,$.ax()))}}
C.bhy.prototype={
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.J,m=n?A.c:A.N,l=n?A.aR:A.al,k=B.aG(d,A.bZ,x.w).w,j=n?A.N:A.c,i=B.n(28),h=B.K(n?A.bC:A.aN,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cy,l,o,o,o,o),o,o,o,new C.dlf(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cWq[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gS(t)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aO(!1,new B.bh(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pF,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bh(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dlg(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hw,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.CB(A.bG,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.bt(o,new B.b5(4,B.n(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.ao,o,o,o,o),1),A.ad,B.bI(A.aUR,o,new C.dlh(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.ds(1,A.cp,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.O,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.ua,A.a_u,o,o,o),!0,!1,A.af,!0,!0)}}
C.bgT.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e4()
a2.cY(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.I()
u.z=A.IB
t=B.I()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.af()
l=a2.af()
k=a2.af()
j=0.8+a2.af()*2.2
i=Math.sin(w*(3+a2.ap(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.af()<0.25){f=B.ar(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.E(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.G()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.G()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.r=e.gp(0)
a1.c=1
d=a1.G()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.G()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
av(d){return d.b!==this.b}}
C.bgA.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.br(new B.a3(0,0,0+a7.a,0+a7.b),A.k2),a2=this.b,a3=Math.sin(a2*2),a4=$.S(),a5=B.I()
a5.b=A.a9
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mT
a6.az(a1,a5)
a5=x.v
a4=new B.aF(a4.r,A.ag,a0,a0,B.a([],a5))
a4.D(new B.iT(a1))
v=new B.T4(new B.tq(B.xt(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.io()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.F(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.d=A.bB
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aF(r,k,a0,new B.cy([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbv().a.snapshot()
q.drawPath((k.e=new B.cf(f)).a,g)
g.delete()}else{k=new B.aF(r,k,a0,new B.cy([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbv().a.snapshot()
q.drawPath((k.e=new B.cf(f)).a,g)
g.delete()
k=new B.aF(r,a2.b,a0,new B.cy([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbv().a.snapshot()
q.drawPath((k.e=new B.cf(f)).a,g)
g.delete()}}a4.io()
e=u[a3].Hc(n).a
$.S()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=w.gp(0)
k.z=Ac.oz
g=k.G()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=A.c.gp(0)
g=d.G()
q.drawCircle(k,f,2,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bpD.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.e4()
e.cY(this.c)
w=a0.a*(0.2+e.af()*0.6)
v=e.h4()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.ganp()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.S()
i=B.a([],n)
h=new B.aF(j.r,A.ag,f,f,i)
i.push(new B.aY(w,v))
j=l-k
i.push(new B.aq(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.aq(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bs())
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.sam(B.tt(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.kP
g=j.G()
j=h.gbv().a.snapshot()
q.drawPath((h.e=new B.cf(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bbp.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e4()
a0.cY(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.af()
l=a0.af()
k=Math.min(t,r)*(0.03+a0.af()*0.09)
j=a0.af()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.S()
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.r=f.j(g).gp(0)
e.z=new B.hi(A.G,k*0.35)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bb3.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e4()
a0.cY(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.af()-0.5)*0.1)
k=v*(0.06+a0.af()*0.05)
j=a0.af()*3.141592653589793*2
i=$.S()
h=B.a([],n)
g=new B.aF(i.r,A.ag,null,null,h)
h.push(new B.aY(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.aq(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bw(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.b=A.a9
i.c=r
i.d=A.bB
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hi(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cf(g.gbv().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bwE.prototype={
a3(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.I()
t=(0.5+0.5*t)*0.12
w.sam(new B.c2(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d3r,null).aA(0,u))
d.aP(u,w)
w=u.cq(-3)
v=B.I()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.kP
d.aP(w,v)},
av(d){return d.b!==this.b}}
C.btD.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bf(d)*7,p=0;p<7;++p){o=new B.e4()
o.cY(q+p)
n=o.af()*w
m=o.af()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.af()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=j.gp(0)
i.c=1.4
i.d=A.bB
h=i.G()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.G()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.G()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.G()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hi(A.G,k*0.3)
h=g.G()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.bsM.prototype={
a3(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.I()
v.a=A.oU
v.sam(new B.a9(A.ay,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aA(0,w))
d.aP(w,v)},
av(d){return d.b!==this.b}}
C.bfU.prototype={
a3(d,e){var w,v,u,t,s,r=e.gdC(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.I()
w.b=A.a9
w.c=1.4
w.d=A.bB
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.I()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uR
r=new C.deb(this,r*0.16,d,u,w)
t=e.gdC()*0.045
r.$3(new B.t(t,t),1,1)
v=e.a-t
r.$3(new B.t(v,t),-1,1)
s=e.b-t
r.$3(new B.t(t,s),1,-1)
r.$3(new B.t(v,s),-1,-1)},
av(d){return d.b!==this.b}}
C.xU.prototype={}
C.J9.prototype={
a6(){return"NgmySlideElementType."+this.b}}
C.as2.prototype={
a6(){return"NgmySlideAspectRatio."+this.b}}
C.v1.prototype={
a6(){return"NgmySlideShapeKind."+this.b}}
C.mO.prototype={
a6(){return"NgmySlideLayout."+this.b}}
C.hI.prototype={
a6(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
hM(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ew(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ah(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdO(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.i45(v.z))
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
C.lV.prototype={
hM(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.ciO(),m),m.k("ak.E"))
return C.rL(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ah(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,a8<m,@>>")
n=B.C(new B.N(n,new C.ciP(),m),m.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i5.prototype={
gbbC(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bk(v)},
gSO(){if(!C.kH(this.w))return!1
var w=this.gbbC()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d1(w.bU())},
hM(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("N<1,lV>")
r=B.C(new B.N(r,new C.ciD(),q),q.k("ak.E"))
return C.C0(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ah(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a8().ae())
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
w=B.C(new B.N(w,new C.ciE(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jT.prototype={}
C.b2v.prototype={
B(d){return B.cv(new C.ciJ(this))}}
C.ap6.prototype={
R(){return new C.bkP(null,null)}}
C.bkP.prototype={
gb0e(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fB,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gb0e().q()
this.bwZ()},
B(d){return B.cb(this.gb0e(),new C.dMH(),this.a.c)}}
C.aMp.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.adR.prototype={
Qm(d,e,f,g){return this.bRl(d,e,f,g)},
bRl(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Qm=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Qm)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qm,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.K(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dr,24)],x.V),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aY,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dd,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.am,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d4)
n.push(B.B(B.a([B.E(new C.ae7(A.hR,"Download",A.c2,new C.ey9(w,d),!0,v),1),A.as,B.E(new C.ae7(A.uw,"Share",A.bl,new C.eya(w,d),!1,v),1),A.as,B.E(new C.ae7(A.hA,"Safari",A.b1,new C.eyb(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aA)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eyc(d),v,v))
return B.bm(!0,new B.D(A.qj,B.x(B.a([B.p(v,B.x(n,A.ak,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.ja,v,t,u,s,v,A.n),v,v,v,v,A.Gt,v,v,1/0)],m),A.m,v,A.e,A.O,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.ae7.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.K(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aI(!1,A.a2,!0,v,B.aO(!1,u,!0,B.eK(B.x(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.O,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bE7,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.b2t.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.ar9(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.cbb().alv(1.35)
s=B.awE(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bCs(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.w,A.bl,h,h,h,h,2,D.c_S,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.bT("slide_tf_"+g.a,x.W),h,A.wZ,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.Af,A.ao,h,A.UA,h,h)
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
w=n?t.cLH(B.b1(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eL:A.E8
p=B.d(f,new B.bT("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Ur:s
$.S()
j=B.I()
j.b=A.a9
j.c=3*w
j.e=A.dQ
j.r=A.av.gp(0)
j=i.cs7(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.ab,A.t,B.a([j,i.cs5(k,t,l?A.Ur:s)],x.p),h)}else w=i.cs6(p,t,g.k2?A.Ur:s,m)
v=new B.mG(w,new B.bT("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a3)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.c_Y()
case 3:return i.cjJ()
case 2:return B.b4(h,h,h,new C.b2q(g,h),A.fF)
case 5:g=g.r
return new C.b2s(g,!i.e&&i.z==null,h)}},
cbb(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jS
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cW(D.ags,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cW(l,A.I,6*v),new B.cW(l,A.I,16*v),new B.cW(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bu
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.n_
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cW(A.bD,new B.t(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cW(v,new B.t(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cW(A.b8,new B.t(-3*v,0),0),new B.cW(A.ax,new B.t(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cW(A.cL,A.I,8*v),new B.cW(A.ax,new B.t(0,-3*v),18*v)],x.r)
k=A.u
w=A0.xJ
break
case"ice":v=o.d
e=B.a([new B.cW(A.aJ,A.I,10*v),new B.cW(A.cw,A.I,22*v)],x.r)
k=A.U
w=A.eA
break
case"chalk":h=o.d
e=B.a([new B.cW(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.jS
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d5w[q]
u.push(new B.cW(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cW(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.I()
v=o.d
f.sam(D.c2A.aA(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cW(A.LH,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.I()
v=o.d
f.sam(D.c2V.aA(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cW(l,A.I,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cz
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cW(l.j(0.45),new B.t(u,u),0),new B.cW(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jS
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aAr(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f4F.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ciH(h)
v=r.k2?C.igW(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eL:A.E8
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Yg(B.cS(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cs7(d,e,f,g){return this.aAr(d,e,f,!1,g)},
cs5(d,e,f){return this.aAr(d,e,f,!1,null)},
cs6(d,e,f,g){return this.aAr(d,e,f,g,null)},
bCs(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a5}},
c_Y(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.as(B.X(s.b===D.lj?A.Hr:A.C9,A.aB,t,t,t,32),t,t,t)}w=u.bFv(r)
if(s.b===D.lj){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.K(A.cq,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dC,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aPe(r,!0)
return C.fK1(s.go,v,s.id)}return w},
aPe(d,e){var w,v,u,t
try{w=C.ihg(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cv(new C.ciG(this,w,v,e))
return u}catch(t){return D.ae1}},
bFv(d){return this.aPe(d,!1)},
cjJ(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bai
return C.ihy(v,w.db,w.dx)}}
C.b2q.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.I(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.I()
w.r=B.b1(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a3(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aP(s,g)
d.aP(s,w)
break
case 1:d.dP(s,g)
d.dP(s,w)
break
case 2:r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aY(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bs())
d.aH(r,g)
d.aH(r,w)
break
case 3:r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
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
r.D(new B.bs())
d.aH(r,g)
d.aH(r,w)
break
case 4:h=t/2
w.c=v+2
d.bo(new B.t(0,h),new B.t(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aY(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bs())
d.aH(r,g)
d.aH(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aF(h.r,A.ag,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aY(k,j)
f.push(h)
v=r.f
if(v!=null)h.bw(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.bw(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.bs())
d.aH(r,g)
d.aH(r,w)
break}},
av(d){return d.b!==this.b}}
C.aJW.prototype={
R(){return new C.bw8(null,null)}}
C.bw8.prototype={
Z(){var w,v=this
v.a2()
w=B.bn(null,A.hv,null,1,null,v)
w.cM(0)
v.d!==$&&B.aQ()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bzd()},
aPp(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c3(B.as(B.d(d,w,w,w,w,w,w,A.dd,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a5,A.a8,A.x,v,w,w),A.n),A.bh)},
bCG(){var w,v=this,u=null,t=v.aPp("Slide A",A.bl),s=v.aPp("Slide B",A.b1)
if(v.a.c===D.cn)return new B.an(A.a_,u,A.b3,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.cb(w,new C.fcK(v,s,t),u)},
B(d){return this.bCG()}}
C.aKE.prototype={
jo(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
k0(d){return d.b!==this.b}}
C.Vv.prototype={
R(){return new C.bl0(null,null)}}
C.bl0.prototype={
Z(){var w,v,u=this
u.a2()
w=B.bn(null,A.BH,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cn){w.sp(0,1)
return}B.bP(B.dx(0,0,0,v.c.fr+v.f*120,0,0),new C.dY9(u),x.a)},
bz(d){var w,v,u,t=this
t.bH(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cn)w.sp(0,1)
else B.bP(B.dx(0,0,0,v.c.fr+v.f*120,0,0),new C.dY8(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bxd()},
B(d){var w,v=this.a
if(v.c.dy===D.cn||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.cb(w,new C.dY7(this),v.d)}}
C.J8.prototype={
B(d){return B.cv(new C.ciz(this))}}
C.aAB.prototype={
R(){return new C.bfk()}}
C.bfk.prototype={
Z(){this.a2()
if(this.a.c!==D.cn)B.bP(A.N8,new C.dbq(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cn)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Vv(C.ew(A.bj,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bi,o,2,"",0,0,"",u,D.fa,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cd,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bT("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ew(A.bj,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bi,o,2,"Element flies in",0,0,"",q.a.c,D.cV,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.a_,p,A.ab,A.t,B.a([w,B.ap(32,new C.Vv(t,B.p(p,D.fEx,A.f,p,p,new B.o(s,p,B.K(A.aY,A.r,1),r,p,p,A.n),p,p,p,p,A.jf,p,p,1/0),!0,1,new B.bT("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b5q,A.bh)}}
C.a8d.prototype={
R(){return new C.blG(null,null)}}
C.blG.prototype={
gb0Q(){var w=this.a
if(w.e)w=D.f4O.t(0,w.c)||D.aR0.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a2()
if(v.gb0Q()){w=C.ifz(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dx(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bxJ()},
B(d){var w,v=this,u=v.d
if(!v.gb0Q()||u==null)return v.a.d
w=v.a
return B.cb(u,new C.elw(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b0p.prototype={
B(d){var w=null
return B.as(C.b2u(!0,w,!1,C.ew(A.K,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bi,4280172719,2,"Aa",0,0,this.c,D.cn,D.cV,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bgy.prototype={
jo(d){return C.a2X(this.b,new B.a3(0,0,0+d.a,0+d.b).cq(-this.c))},
k0(d){return d.b!==this.b||d.c!==this.c}}
C.brG.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a3(0,0,0+a1.a,0+a1.b).cq(-this.d),g=this.b,f=C.a2X(g,h),e=a1.gdC(),d=new C.f1C()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sam(D.aSv.aA(0,h))
a0.aH(f,w)
g=C.a2X(g,h.cq(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bqP.gp(0)
a0.aH(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sam(D.feY.aA(0,h))
a0.aH(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hi(A.G,e*0.04)
a0.aH(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aH(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sam(D.feW.aA(0,h))
a0.aH(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aH(f,w)
g=C.a2X(g,h.cq(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aH(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hi(A.G,e*0.035)
a0.aH(f,g)
g=d.$1(e*0.016)
g.r=A.p3.gp(0)
a0.aH(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sam(D.feR.aA(0,h))
a0.aH(f,w)
w=C.a2X(g,h.cq(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.be3.gp(0)
a0.aH(w,v)
g=C.a2X(g,h.cq(e*0.03))
v=d.$1(e*0.004)
v.r=D.bh1.gp(0)
a0.aH(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sam(D.aSv.aA(0,h))
a0.aH(f,g)
for(g=B.xt(f),w=B.a([],x.X),g=new B.tq(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jC(y.M));--q
g.io()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bf(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.io()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.io()
m=w[q].Hc(p*n/o).a
l=D.d2H[A.o.F(n,4)]
$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=l.gp(0)
k=p.G()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=A.c.j(0.9).gp(0)
k=i.G()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sam(D.ff_.aA(0,h))
g.z=new B.hi(A.G,e*0.03)
a0.aH(f,g)
g=d.$1(e*0.018)
g.sam(D.feX.aA(0,h))
a0.aH(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aH(f,w)
g=C.a2X(g,h.cq(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nX.gp(0)
a0.aH(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bsJ.prototype={
a3(d,e){d.Ga(C.a2X(this.b,new B.a3(0,0,0+e.a,0+e.b).cq(-this.c)),A.w,e.gdC()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aMD.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aN7.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aOr.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.a8w.prototype={}
C.Ol.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aFs(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge1(){return this.c},
gU9(){return this.r},
gUa(){return this.w},
gM_(){return this.x}}
C.aFs.prototype={
Z(){var w,v=this
v.a2()
$.aV.bZ$.push(v)
C.fP0()
$.hy1=new C.eEn(v)
w=B.bn(null,A.BE,null,1,null,v)
w.fn(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.II()},
bz(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.OS(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.II()}},
jg(d){if(d===A.AJ||d===A.tt||d===A.ts||d===A.pM)this.tT()},
q(){var w,v,u,t=this
$.aV.hR(t)
w=t.at
if(w!=null)w.a4(0)
t.tT()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.ax()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.he()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.ax()
v.P$=0}t.bxW()},
gace(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPb(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acK(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSO())return!1
return!0},
kq(){return this.acK(null)},
ajA(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.fde)},
qB(){if(!this.kq())return!1
this.ajA()
return!0},
as0(d){var w,v,u,t,s,r=this
if(r.acK(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hx8(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
A3(){return this.as0(null)},
II(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$II=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.as4(k),$async$II)
case 3:j=e
w=4
return B.b(C.aqC(k),$async$II)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h3S(j,t.c2T())
w=t.gace()?5:7
break
case 5:r=t.gPb()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b0D(r),$async$II)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.eAL())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c6(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.eAM())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yV(m==null?"":m)!=null)continue
C.fPc(n,s)
p=!0}t.m(new C.eAN(t,s))
if(p||s.length>J.ad(j))t.tT()
case 1:return B.h(u,v)}})
return B.i($async$II,v)},
c2T(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kH(w)&&w!==q}if(w)p.push(r)
return p},
cqz(d){var w,v=this,u=d.w
if(!C.kH(u)||u==="hati_kiapo_uongozi")return
v.ab2(d)
w=A.d.bh(v.d,new C.eCl(d))
u=v.d
if(w>=0){u[w]=d.hM()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c6(u,0,d.hM())
v.db=!1},
ckF(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kH(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cqz(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,i5>")
s=B.C(new B.cQ(new B.Z(s,new C.eC9(),w.k("Z<1>")),new C.eCa(),v),v.k("M.E"))
return s},
OS(d){return this.bRL(d)},
tT(){return this.OS(null)},
bRL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$OS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ckF()
w=3
return B.b(C.Wo(d==null?t.a.c:d,s),$async$OS)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.as0(r)?4:5
break
case 4:w=6
return B.b(C.a7K(r),$async$OS)
case 6:q=r.x
p=A.a.i(q==null?t.gPb():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bh(t.d,new C.eA8())
q=t.d
if(o>=0)q[o]=r.hM()
else A.d.c6(q,0,r.hM())
case 5:case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
pB(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.kH(u.w))===!0?A.hu:A.lD
v.at=B.cG(w,new C.eDt(v))},
b0f(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afD(u.hM(),v.f,v.r))
if(w.length>40)A.d.cz(w,0)
A.d.aa(v.ay)},
cEg(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afD(w.e.hM(),w.f,w.r))
w.m(new C.eEj(w,v.pop()))
w.pB()},
cpF(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afD(w.e.hM(),w.f,w.r))
w.m(new C.eCj(w,v.pop()))
w.pB()},
ot(){var w,v,u=this
if(u.e==null)return
w=A.d.bh(u.d,new C.eE6(u))
if(w>=0){u.d[w]=u.e.hM()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yd(d){var w,v,u,t,s=this.gdw()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xM(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.T$=$.ax()
u.P$=0}w.aa(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.he()}w.aa(0)},
Ks(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdw()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,m>")
t=B.df(new B.cQ(new B.Z(w,new C.eE7(),v.k("Z<1>")),new C.eE8(),u),u.k("M.E"))
w=this.ch
v=B.a7(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.he()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cV)continue
p=n.a
m=w.c3(0,p,new C.eE9(n))
s.c3(0,p,new C.eEa())
p=m.a.a
o=n.r
if(p!==o)m.saY(0,o)}},
I1(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b3(u.d,new C.ezx(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPb()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c6(u.d,0,u.e.hM())}u.ot()
u.pB()},
ajW(d,e){var w,v,u,t,s=this
if(s.kq())return
w=s.Yd(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kH(v.w))===!0
if(u){C.ifD(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdw()
if(t!=null)C.ifE(t,w.d+w.f*0.5)}}s.I1()
s.ot()
s.pB()
if(u&&s.c!=null)s.m(new C.eEk())},
cFk(d,e){var w=this,v=w.gdw()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.I1()
w.ot()
w.pB()},
gdw(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqF(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.idF(o)
if(w!=null)return w
v=q.gdw()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c0c(v)
t=q.c0b(v)
s=B.b1(v.e)
r=v.f
return new C.jT(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hR0(o)},
c0c(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cV)s=t.w>=28||A.o.E(A.o.ao(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.N},
c0b(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cV&&t.w<28)return B.b1(t.Q)}return A.aK},
afV(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gace()){w.c.K(x.q).f.U(D.fbQ)
return}w.ab2(d)
w.b1x(C.bDQ(d))
return}if(C.cjr(v)){w.ab2(d)
w.b1x(d)
return}w.m(new C.eBs(w,d))},
asz(){var w,v,u,t,s,r,q=this
q.a2S(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kH(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.ezv(q))
if(r&&q.c!=null){u.toString
q.K1(u,s)}return}q.tT()
q.m(new C.ezw(q))},
b1w(d){this.ab2(d)
this.a0j(d,!0)},
ab2(d){if(!C.kH(d.w))return
C.fPc(d,this.d)},
a0j(d,e){return this.cgy(d,e)},
b1x(d){return this.a0j(d,!1)},
cgy(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0j=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bDQ(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPb():r)
t.dy.W(0,q.toLowerCase())
C.aqD(t.a.c,q)}r=s}else r=d
w=C.cjr(r.w)?3:4
break
case 3:w=5
return B.b(t.ab3(r),$async$a0j)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b3(t.d,new C.eBP(l))
o=l.a.hM()
n=C.kH(o.w)&&C.igR(o)
t.m(new C.eBQ(t,o,p))
if(n){m=A.d.bh(t.d,new C.eBR(o))
if(m>=0){t.d[m]=o.hM()
t.tT()}}if(!t.acK(l.a))t.Zo()
r=!1
if(t.c!=null)if(!t.acK(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.as0(r)&&C.fLc(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.fcq)
case 1:return B.h(u,v)}})
return B.i($async$a0j,v)},
ab3(d){return this.bPP(d)},
bPP(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ab3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lu(r.c,A.zX),$async$ab3)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.l6(!1,r,s.c,s.d,null,A.zX,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ab3,v)},
oh(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cjr(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ciR(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oh,v)},
afC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ck(null,null,!1,null,new C.eBr(),s,null,!0,!0,x.H),$async$afC)
case 3:if(t.c==null){w=1
break}t.asz()
case 1:return B.h(u,v)}})
return B.i($async$afC,v)},
afB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ck(null,null,!1,null,new C.eBo(),s,null,!0,!0,x.H),$async$afB)
case 3:if(t.c==null){w=1
break}t.m(new C.eBp())
t.asz()
case 1:return B.h(u,v)}})
return B.i($async$afB,v)},
Zo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Zo)
case 3:r=e
if(B.jX(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Zo)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.faq)
case 1:return B.h(u,v)}})
return B.i($async$Zo,v)},
K1(d,e){return this.cqY(d,e)},
cqY(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$K1=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ah1(s,t.gEG(),t.gEF(),!0,e,t.d),$async$K1)
case 9:w=4
break
case 6:w=10
return B.b(C.ah2(s,t.gEG(),t.gEF(),!0,e,t.d),$async$K1)
case 10:w=4
break
case 7:w=11
return B.b(C.ah3(s,t.gEG(),t.gEF(),!0,e,t.d),$async$K1)
case 11:w=4
break
case 8:w=12
return B.b(C.ah4(s,t.gEG(),t.gEF(),!0,e,t.d),$async$K1)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$K1,v)},
c1L(){var w,v,u,t,s=this
if(!s.gace()){s.c.K(x.q).f.U(D.faD)
return}w=s.gPb()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ah0(u,t,v,new C.eAH(s),new C.eAI(s),w)},
afW(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dP,null,new C.eBy(u),s,!0,!0,!1,A.lP,!1,!1,x.N),$async$afW)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ah4(s,u.gEG(),u.gEF(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ah1(s,u.gEG(),u.gEF(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ah2(s,u.gEG(),u.gEF(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ah3(s,u.gEG(),u.gEF(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c1L()
return B.h(null,v)}})
return B.i($async$afW,v)},
cfE(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b0f()
w=C.cE()
v=C.C0(t,t,t,t,D.Dv,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eBz(u,v))},
aat(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aat=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qB()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ilq(s),$async$aat)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d5(q.r,new C.ezz())
t.d7(new C.ezA(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aat,v)},
ahU(d,e,f,g){var w=null,v=g?A.dq:A.bN,u=B.K(g?A.aY:A.cq,A.r,1)
return B.he(B.aA(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a3),w,e,w,w)},
a0i(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0i=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qB()){w=1
break}s=t.k7()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.eBK(),q),q.k("M.E"))}o=s!=null&&s.b===D.lO?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.fcB)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.eBL(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0i)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0i,v)},
agc(){return this.cgx()},
cgx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qB()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ilc(s,t.f+1,o),$async$agc)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Y
q=B.k5(s,B.T(s).c)
p.a=A.d.bh(o.r,new C.eBN(q))
t.d7(new C.eBO(p,t,o,q,r))
t.c.K(x.q).f.U(D.fd_)
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
agj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qB()||!t.A3()){w=1
break}s=t.gdw()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.eC4(),q),q.k("M.E"))
if(p.length===0){t.c.K(x.q).f.U(D.fab)
w=1
break}o=new B.N(p,new C.eC5(),B.T(p).k("N<1,J>")).f4(0,new C.eC6())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b4,A.aO),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.L,null,new C.eC7(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agj)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.T$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.eC8())
case 1:return B.h(u,v)}})
return B.i($async$agj,v)},
afZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$afZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qB()){w=1
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
return B.b(C.hzg(s,new C.ET(r,q,p,o==null?"":o)),$async$afZ)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d7(new C.eBA(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahq(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$afZ,v)},
aaX(){return this.bP6()},
bP6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aaX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qB()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ilp(s,t.f+1,l),$async$aaX)
case 3:r=e
q=$.h7w
$.h7w=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d7(new C.ezQ())
t.c.K(x.q).f.U(D.fa2)
w=1
break}if(!q){s=r.CW
s=C.hy_(l,s==null?"":s,!1)}else s=!1
if(s){t.d7(new C.ezR(t,l,r))
t.c.K(x.q).f.U(D.fdt)
w=1
break}s=l.cx
if(s==null)s=A.Y
p=B.k5(s,B.T(s).c)
s=l.r
m.a=A.d.bh(s,new C.ezS(p))
o=s.length
t.d7(new C.ezT(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaX,v)},
aRx(d,e){if(e){this.agM()
return}this.cfE(d,!1)},
bKE(){return this.aRx(null,!1)},
agM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.c1,null,new C.eCe(t),r,!0,!0,!0,A.pz,!1,!1,x.N),$async$agM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eCf(t,C.idE(s).pO()))
case 1:return B.h(u,v)}})
return B.i($async$agM,v)},
d7(d){var w=this
if(w.qB())return
w.I1()
w.b0f()
w.m(d)
w.Ks()
w.ot()
w.pB()},
a8Y(){this.d7(new C.eyu(this,D.mU))},
aT0(){var w=this.gdw()
if(w==null)return
this.d7(new C.ezO(this,w))},
aS8(){var w=this.e
if(w==null||w.r.length<=1)return
this.d7(new C.ezM(this))},
b4q(d,e){if(this.e==null||d===e)return
this.d7(new C.eCn(this,d,e))},
Oo(d){return this.bMF(d)},
bMF(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Oo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPb():s)
w=5
return B.b(C.aqB(t.a.c,r),$async$Oo)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.as6(s)
w=6
return B.b(C.b2y(t.a.c,s),$async$Oo)
case 6:if(t.c==null){w=1
break}t.m(new C.ezI(t,d))
w=7
return B.b(t.tT(),$async$Oo)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Oo,v)},
cqV(d,e){var w=this
if(d.z){w.ajA()
return}w.m(new C.eCm(w,d,e))
w.pB()},
k7(){var w,v,u,t,s,r=this.gdw()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xe(d){return this.ch.c3(0,d.a,new C.ezy(d))},
aur(d){return this.CW.c3(0,d.a,new C.eA9())},
a2S(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yd(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.al$.d.c
if(u!=null)u.jm()},
b7W(){return this.a2S(!0)},
a2O(d){var w,v,u=this
if(u.qB())return
if(!u.A3())return
w=u.Yd(d)
if(w==null||w.b!==D.cV)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xe(w).saY(0,"")}u.m(new C.eE4(u,d))
$.aV.x1$.push(new C.eE5(u,d,w))},
b8u(d){var w=this
if(d.b===D.cV&&!w.kq()&&w.A3()){w.a2O(d.a)
return}w.aAS(d.a)},
aAS(d){var w,v,u,t,s,r=this
if(r.kq())return
w=r.r
if(w!=null&&w!==d){v=r.Yd(w)
if(v!=null&&v.b===D.cV){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eDu(r,s,d))
if(s||d==null){t=$.aV.al$.d.c
if(t!=null)t.jm()}},
aNL(){this.d7(new C.eyv(this))},
pi(d){return this.bBJ(d)},
bBJ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$pi)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d7(new C.eys(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pi,v)},
Wk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.H2(78,1920),$async$Wk)
case 3:s=e
if(s==null||t.gdw()==null){w=1
break}t.d7(new C.eyi(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wk,v)},
We(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$We=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdw()==null){w=1
break}w=3
return B.b(T.Da(t.a.c),$async$We)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gan(s)){t.c.K(x.q).f.U(D.fe2)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.eyf(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$We)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdw()==null){w=1
break}t.d7(new C.eyg(t,q))
case 1:return B.h(u,v)}})
return B.i($async$We,v)},
atp(){var w=this,v=w.r
if(v==null||w.gdw()==null)return
if(A.d.b3(w.gdw().z,new C.ezK(v))){w.c.K(x.q).f.U(D.fd3)
return}if(w.w===v)w.a2S(!0)
w.d7(new C.ezL(w,v))},
bIV(){var w=this.k7(),v=w==null
if((v?null:w.b)===D.fa)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cV)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aOt(d,e){var w=this,v=w.k7(),u=w.gdw(),t=w.e
if(t==null)return
w.d7(new C.eyX(w,v,d,e,t,u))},
bDj(d){return this.aOt(d,null)},
a9f(d){return this.bDr(d)},
bDr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a8P.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oh(),$async$a9f)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.k7()
if(s!=null){r=s.b
if(r===D.cV)t.bDj(s.w>=28||s.x.gdO(0)>=A.H.gdO(0)?d.d:d.e)
else if(r===D.fa){r=d.c
t.aOt(r.j(0.88),r)}w=1
break}t.d7(new C.ez1(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9f,v)},
a9e(d){return this.bDp(d)},
bDp(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.k7()
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
return B.b(t.oh(),$async$a9e)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.ez_(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9e,v)},
bD9(d){var w=this.gdw()
if(w==null)return
this.d7(new C.eyW(this,w,d))},
a0o(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0o=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ill(r),$async$a0o)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.ot()
t.m(new C.eBZ(t,s))
w=4
return B.b(t.tT(),$async$a0o)
case 4:if(t.c!=null)t.afV(s)
case 1:return B.h(u,v)}})
return B.i($async$a0o,v)},
aaP(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2S(!0)
t.ot()
s=t.c
s.toString
w=3
return B.b(C.RD(s,q),$async$aaP)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaP,v)},
DP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.ot()
t=4
w=7
return B.b(C.aRd(m),$async$DP)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aQE(o,q,m.b),$async$DP)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DP,v)},
Fu(d,e){return this.cDF(d,e)},
cDF(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fu=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qB()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2S(!0)
t.ot()
s=h.a=t.e.hM()}else{r=A.d.bh(t.d,new C.eEd(d))
s=h.a=r>=0?t.d[r].hM():d.hM()}s=s.w
q=s==null
p=C.ieC(q?"":s)
o=C.hwV(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("Z<1>")
n=B.C(new B.Z(s,new C.eEe(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cwR(n.length,o,s),$async$Fu)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.iew(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gI(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cwQ(n,o),$async$Fu)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fY(t.d,new C.eEf(s))
s=h.a.b
w=11
return B.b(t.cwO(k.b,s),$async$Fu)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hM()
case 5:j=C.ieB(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.fee)
w=1
break}w=12
return B.b(t.cwP(j.a,s,o,j.c),$async$Fu)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eEg(h,t,i))
t.pB()
case 1:return B.h(u,v)}})
return B.i($async$Fu,v)},
cwR(d,e,f){var w=this.c
w.toString
return B.bV(A.L,null,new C.eDK(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cwQ(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eDJ(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cwO(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eDD(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cwP(d,e,f,g){var w=this.c
w.toString
return B.bV(A.L,null,new C.eDF(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aci(){var w=null
return B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acj(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.ar(d,A.c1,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dr,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.ay,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fp9,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aWk(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.K(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.Vc,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aWn(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.ay,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.K(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bb,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.n1,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.yP,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eAD(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
c_6(d,e,f,g,h,i){return this.aWn(d,e,f,!1,g,h,i)},
avM(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.K(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dd,w,w,w),A.bF,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a_R,w,w,w)},
aWm(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b8(B.n(14),A.a0),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nI,w,w,w),w,new C.eAC(d,f),v)},
aWl(d,e){return this.aWm(d,e,null)},
Kj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pm(l,s.c,s.d),$async$Kj)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aI("=",l.length)+"\n\n"
q=new B.fh(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gag(o.z),n=new B.f2(l,new C.eDv());n.C();){m=l.gS(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aap(l.charCodeAt(0)==0?l:l,r.b),$async$Kj)
case 4:l=t.a
w=5
return B.b(B.pl(l.c,l.d),$async$Kj)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kj,v)},
In(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$In=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pm(q,s.c,s.d),$async$In)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aap(A.X.aq(r.ah(),null),r.b+".json"),$async$In)
case 4:q=t.a
w=5
return B.b(B.pl(q.c,q.d),$async$In)
case 5:case 1:return B.h(u,v)}})
return B.i($async$In,v)},
b7F(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.ot()
u.tT()
w=u.c
w.toString
v=B.eh(new C.eE3(u,t),!1,null,x.z)
B.a4(w,!1).cc(v)},
HB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$HB)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fPp(),$async$HB)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ihs(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.av,null,new C.eyn(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HB)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d7(new C.eyo(t,s))
w=1
break}if(p==="split")t.d7(new C.eyp(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HB,v)},
NL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}w=3
return B.b(t.oh(),$async$NL)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRc(s,null,null),$async$NL)
case 4:r=e
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.eyt(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NL,v)},
b4d(d){var w=this.e
if(w==null||!C.kH(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aPN(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRc(s,t==null?null:B.b1(t),u)},
a8W(d){return this.bBA(d)},
bBA(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}if(!t.A3()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fet)
w=1
break}w=3
return B.b(t.aPN(),$async$a8W)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.eyk(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8W,v)},
ahv(d){return this.cpI(d)},
cpI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}if(!t.A3()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fdB)
w=1
break}w=3
return B.b(t.aPN(),$async$ahv)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.eCk(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahv,v)},
ccl(){var w,v,u=this
if(u.kq())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bF(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cCJ()}},
cCJ(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d7(new C.eEb(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c_r(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d7(new C.eAG(this,r,u.d))},
c4b(d){var w
if(this.kq())return!1
w=this.e
if((w==null?null:C.kH(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fLY(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lj&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c4c(d){var w
if(this.kq())return!1
w=this.e
if((w==null?null:C.kH(w.w))!==!0)return!0
if(!this.A3())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fLY(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lj&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NT(d){return this.bDR(d)},
bDR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}if(!t.A3()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fcr)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqF(p),$async$NT)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.fd5)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7K(r)
w=1
break}t.m(new C.ez5(t,d,o))
t.ot()
$.aV.x1$.push(new C.ez6(t))
case 1:return B.h(u,v)}})
return B.i($async$NT,v)},
Wi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$Wi)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bEw(),$async$Wi)
case 4:s=e
if(s==null||t.gdw()==null){w=1
break}t.d7(new C.eyh(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wi,v)},
OD(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$OD)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.k7()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fPg(r),$async$OD)
case 4:q=e
if(q==null){w=1
break}t.d7(new C.eA7(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OD,v)},
je(d){this.d7(new C.eyq(this,d))},
qr(d){return this.bD2(d)},
bD2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qB()){w=1
break}m=!D.aR3.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oh(),$async$qr)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HB()
w=1
break A
case"sign_paper":t.NL()
w=1
break A
case"hd_photo":t.Wi()
w=1
break A
case"sharpen":t.OD()
w=1
break A
case"print":t.DP()
w=1
break A
case"rotate":s=t.k7()
if(s!=null)t.d7(new C.eyz(s))
w=1
break A
case"text_box":t.aNL()
w=1
break A
case"picture":t.Wk()
w=1
break A
case"present":t.b7F()
w=1
break A
case"new_slide":t.a8Y()
w=1
break A
case"export_json":t.In()
w=1
break A
case"outline_share":t.Kj()
w=1
break A
case"flashcard_tool":t.vu(D.IU)
w=1
break A
case"quiz_tool":t.vu(D.IV)
w=1
break A
case"worksheet_tool":t.vu(D.IW)
w=1
break A
case"duplicate_el":s=t.k7()
if(s==null){w=1
break A}t.d7(new C.eyA(t,s))
w=1
break A
case"delete_el":t.atp()
w=1
break A
case"bring_fwd":s=t.k7()
if(s==null||t.gdw()==null){w=1
break A}t.d7(new C.eyB(t,s))
w=1
break A
case"send_back":s=t.k7()
if(s==null||t.gdw()==null){w=1
break A}t.d7(new C.eyM(t,s))
w=1
break A
case"align_left":s=t.k7()
if(s!=null)t.d7(new C.eyP(s))
w=1
break A
case"align_center":s=t.k7()
if(s!=null)t.d7(new C.eyQ(s))
w=1
break A
case"align_right":s=t.k7()
if(s!=null)t.d7(new C.eyR(s))
w=1
break A
case"grayscale":case"brighten":t.OD()
w=1
break A
case"flip_h":s=t.k7()
if(s!=null)t.d7(new C.eyS(s))
w=1
break A
case"flip_v":s=t.k7()
if(s!=null)t.d7(new C.eyT(s))
w=1
break A
case"rectangle":t.pi(D.bi)
w=1
break A
case"circle":t.pi(D.eT)
w=1
break A
case"triangle":t.pi(D.k0)
w=1
break A
case"arrow":t.pi(D.Dx)
w=1
break A
case"line":case"divider":t.pi(D.fD)
w=1
break A
case"word_count":r=t.gdw()
if(r==null){w=1
break A}for(q=A.d.gag(r.z),p=new B.f2(q,new C.eyU()),o=0;p.C();){n=A.a.fz(A.a.i(q.gS(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.eyV(),B.T(n).k("Z<1>")).gL(0)}t.c.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.je(C.j4(A.K,!1,t.gqF().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mV,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.je(C.j4(A.K,!1,t.gqF().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.je(C.j4(A.bj,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uY,0.8,0.1,0.22))
w=1
break A
case"numbered":t.je(C.j4(A.bj,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.uX,0.8,0.1,0.22))
w=1
break A
case"quote":t.je(C.j4(A.K,!1,4279310375,A.aF,24,A.cD,A.a7,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.je(C.j4(A.bj,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.uY,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.je(C.j4(A.dV,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cE(),C.bEy(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.je(C.j4(A.dV,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cE(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d7(new C.eyC(t))
w=1
break A
case"footer_bar":t.d7(new C.eyD(t))
w=1
break A
case"highlight":t.d7(new C.eyE(t))
w=1
break A
case"redact":t.d7(new C.eyF(t))
w=1
break A
case"callout":t.d7(new C.eyG(t))
w=1
break A
case"checkboxes":t.je(C.j4(A.bj,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.je(C.j4(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d7(new C.eyH(t))
w=1
break A
case"letter":t.je(C.j4(A.bj,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cE(),C.bEy()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.je(C.j4(A.bj,!1,4279310375,A.aF,22,A.bp,A.U,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uY,0.8,0.1,0.12))
w=1
break A
case"toc":t.je(C.j4(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.je(C.j4(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.je(C.j4(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.je(C.j4(A.K,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cE(),"APPROVED",0,D.mV,0.32,0.62,0.08))
w=1
break A
case"draft":t.je(C.j4(A.K,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cE(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.je(C.j4(A.K,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d7(new C.eyI(t))
w=1
break A
case"progress":t.d7(new C.eyJ(t))
w=1
break A
case"stars":t.je(C.j4(A.K,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.qI,0.8,0.1,0.4))
w=1
break A
case"equation":t.je(C.j4(A.K,!1,4279310375,A.aF,32,A.bp,A.U,0.14,C.cE(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.je(C.j4(A.K,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uX,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d7(new C.eyK(t))
w=1
break A
case"compare":t.d7(new C.eyL(t))
w=1
break A
case"link_text":t.je(C.j4(A.bj,!1,4280640491,A.n_,16,A.bp,A.a7,0.1,C.cE(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.je(C.j4(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cE(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.je(C.j4(A.bj,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cE(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d7(new C.eyN(t))
w=1
break A
case"cover_page":r=t.gdw()
if(r==null){w=1
break A}t.d7(new C.eyO(t,r))
w=1
break A
case"invoice":t.je(C.j4(A.bj,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.je(C.j4(A.bj,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.je(C.j4(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bEy()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.je(C.j4(A.bj,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.je(C.j4(A.bj,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qr,v)},
cwi(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f4K.t(0,this.z)},
cwh(d){if(this.k7()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b9m(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cn,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bC
u=B.K(u,A.r,o&&e?2:1)
t=C.ihh(d)
s=o?12:18
r=o?A.H:A.cR
if(o)if(e)q=f
else q=g?A.ac:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.p(p,D.P6,A.f,p,p,D.ER,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fu,B.aA(p,new B.an(A.a_,p,A.ab,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a3),p)},
bPn(d){var w,v=null,u=this.k7()
if(u==null)return A.bJ
w=B.a([A.ad,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.N(D.RF,new C.eA6(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.i,0,v,v)},
vu(d){return this.bBI(d)},
bBI(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aQY.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oh(),$async$vu)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.eyr(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f3r
w=h.e
if(w==null)return h.bFB()
v=h.gdw()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bZ,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.eM,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c1:D.bgq
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSO()}else j=!1
if(j)k.push(new C.a8e(h.a.c,!1,h.e.gbbC(),h.gcci(),g))
else if(s&&h.e!=null&&!h.kq()&&C.cjr(h.e.w)){j=h.a
k.push(new C.a8e(j.c,j.d,g,h.gcdr(),g))}if(s)k.push(h.bPi(w,t,r))
if(s&&h.kq()){w=t?A.fN:A.kG
j=B.n(14)
i=B.K(A.bl.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bUu,A.ad,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fN,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yh,A.iq,g,g,g))}w=!n
if(w&&!h.kq())k.push(h.c58(t,r))
if(w&&h.kq())k.push(h.cDG(t))
if(r&&h.k7()!=null&&w&&!h.kq())k.push(h.c53(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b74(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b74(t,!1),g))
i.push(B.E(new B.bM(A.b0,g,g,h.bGV(v,t,!s||p),g),1))
if(h.cwi(r)&&u&&s&&!h.kq())i.push(h.cc4(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kq()&&h.cwh(!1))j.push(new B.a5(240,g,h.bS8(t),g))
k.push(B.E(B.B(j,A.ak,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c54(t))
return B.c5(g,m,B.bm(!1,new B.an(A.a_,g,A.ab,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bFB(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.J
p=w?A.c1:A.bN
v=r.a.e
u=r.cbc(A.bl,A.qr,new C.ez9(r),r.gcfB(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aNt(A.bl,A.hQ,"Blank Presentation",new C.eza(r)),1),A.as,B.E(r.aNt(A.b1,A.uB,"Class Template",new C.ezb(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bx,s,A.mZ,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ae],t)
t=r.d
if(t.length===0)u.push(r.bCv(w))
else{t=new B.i3(t,B.T(t).k("i3<1>"))
A.d.v(u,t.gdV(t).dH(0,new C.ezc(r,w),x.l))}return B.c5(q,p,B.bm(!1,B.cl(u,q,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bNs(){this.m(new C.ezN(this))
var w=this.c
w.toString
if(B.aG(w,A.bZ,x.w).w.a.a<900){w=$.aV.al$.d.c
if(w!=null)w.jm()}},
agd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.k7()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.eBY(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agd)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
B0(d,e){return this.cwE(d,e)},
cwE(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$B0=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i1(D.Y7,!0,"Dismiss",j,new C.eDw(),new C.eDx(d,e),A.iB,!0,x.N),$async$B0)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajA()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSO()){r.ajA()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRd(d),$async$B0)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aQE(j,q,d.b),$async$B0)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fu(d,!1),$async$B0)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i1(D.Y7,!0,"Dismiss",j,new C.eDy(),new C.eDz(d),A.a2,!0,x.y),$async$B0)
case 20:if(g===!0)r.Oo(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahf("Rename presentation",d.b),$async$B0)
case 24:l=g
if(l!=null)r.cqV(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ah()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eDA(r,k))
r.pB()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B0,v)},
b2a(d,e){var w=null
return B.bN(!1,D.fOU,w,w,!0,w,w,w,e,w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.aw,w,A.lF,w,w,w,w,w,A.kq,w,w))},
bCv(d){var w=this.fy
w===$&&B.c()
return B.cb(w,new C.eyw(this,d),null)},
bLy(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.ezB(),x.dv).c_(0,new C.ezC()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.ajW,this.aO3(v,e,new C.ezD(),f),null)},
aO3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eg)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ac:A.bs,n,n,n,10),A.qP],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cd(A.aM,A.e,A.O,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bH(r,r,r,r),new B.bh(s,s,s,s),n,n,A.n),n,n,n,n,A.mK,n,n,n))
A.d.v(l,u)}return B.eO(A.a5,B.B(l,A.m,n,A.e,A.O,0,n,n),A.f,A.e3)},
bCt(d,e,f){return this.aO3(d,e,null,f)},
bLA(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.doP
else if(v==="hati_kuhoweya")w=D.d9v
else{if(v==="hati_kiapo_uongozi")v=D.cWk
else v=C.kH(v)?D.d32:A.Rf
w=v}v=this.fy
v===$&&B.c()
return B.cb(v,new C.ezG(this,f,d,e,w),null)},
c54(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.k7()
if(i==null||i.b!==D.cV)return A.bJ
w=k.Xe(i)
v=k.aur(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.BO,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b2,B.bN(!1,D.fKm,j,j,!0,j,j,j,new C.eB6(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.av:A.c
q=B.n(18)
p=B.K(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h6,B.c3(new B.D(A.eS,B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),w,A.bl,j,j,j,j,2,D.c_A,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wZ,j,j,j,j,j,j,!1,"\u2022",j,new C.eB7(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.N,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.Af,A.ao,j,A.UA,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bh),j),1)
q=B.n(16)
p=d?A.bo:A.c
o=B.K(d?A.aK:A.aN,A.r,1)
n=B.E(B.ch(B.B(B.a([k.uj(G.Oa,j,new C.eB8(k,i),d),k.uj(G.a10,j,new C.eB9(k,i),d),k.uj(I.aok,j,new C.eBa(k,i),d),k.uj(I.a1J,j,new C.eBb(k,i),d),k.uj(k.bCr(i.as),j,new C.eBc(k,i),d),k.uj(D.apt,j,new C.eBd(k,i),d),k.uj(D.aps,j,new C.eBe(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aM),1)
m=A.k.N(i.w)
return B.bS(0,B.aI(!1,A.a2,!0,j,B.x(B.a([s,r,new B.D(H.ak4,B.p(j,B.B(B.a([n,A.ad,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lG,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c53(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.k7()
if(m==null)return A.bJ
w=m.b
v=w===D.cV
u=B.n(18)
t=x.O
t=d?B.a([A.bo,A.N],t):B.a([A.c,A.aP],t)
s=B.K(d?A.aK:A.aN,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b5J(A.iX,"Edit",new C.eAS(o,m),d,!0))
if(w===D.lO)p.push(o.b5J(A.Hm,"Shape & ring",new C.eAT(o),d,!0))
p.push(o.uj(A.Cz,"Format",new C.eAU(o),d))
if(v)A.d.v(p,B.a([o.uj(G.Oa,n,new C.eAV(o,m),d),o.uj(D.apt,n,new C.eAW(o,m),d),o.uj(D.aps,n,new C.eAX(o,m),d)],q))
p.push(A.b2)
p.push(o.cuu(A.e9,n,o.gaS6(),d,!0))
p.push(o.uj(A.hy,"Done",new C.eAY(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a5,A.a8,A.x,t,n,n),A.n),n,n,n,A.BN,A.lG,n,n,n)},
bCr(d){switch(d.a){case 2:return D.a1G
case 1:case 5:return D.a1I
default:return D.a1H}},
c5Z(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dV
default:return A.bj}},
aAQ(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ax
else if(h)w=A.c
else{v=g?A.ac:A.aK
w=v}v=B.n(12)
u=B.n(12)
t=h?K.HF:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eg,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qh,B.aI(!1,A.a2,!0,n,B.aO(!1,v,!1,B.eK(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.O,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai),n)},
uj(d,e,f,g){return this.aAQ(d,e,f,g,!1,!1)},
b5J(d,e,f,g,h){return this.aAQ(d,e,f,g,h,!1)},
cuu(d,e,f,g,h){return this.aAQ(d,e,f,g,!1,h)},
bPi(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bo,A.N],m):B.a([A.c,A.na],m)
w=B.K(e?A.aK:A.nW,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a3i(A.eJ,"Back",p.gbIF(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.N,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.ds(1,A.cp,t,o),A.ad,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bU:A.al,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tZ,o,A.e,A.i,0,A.cZ,o),1)],q)
if(!p.kq()){u=p.a3i(A.pi,"Undo",p.ax.length===0?o:p.gcEf(),e)
A.d.v(r,B.a([u,p.a3i(D.bNU,"Redo",p.ay.length===0?o:p.gcpE(),e)],q))}r.push(p.a3i(A.yN,"PDF",new C.eA_(p),e))
r.push(p.a3i(A.hR,"Download as video",new C.eA0(p),e))
if(!p.kq())r.push(B.Cd(o,o,B.X(A.oj,e?A.ac:A.bs,o,o,o,o),new C.eA1(p),A.I,new C.eA2(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aI(!1,A.a2,!0,o,B.aO(!1,B.n(14),!0,B.eK(D.emY,o,new B.o(o,o,o,B.n(14),o,K.HF,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaBF(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.ai))
return B.p(o,B.B(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),o,o,o,D.byC,D.bDX,o,o,o)},
cDG(d){var w=this,v=null,u=B.n(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.K(d?A.cr:A.aN,A.r,1)
return B.p(v,B.ch(B.B(B.a([w.iZ(A.uz,"Print",new C.eEh(w),d),w.iZ(A.yN,"Download PDF",new C.eEi(w),d),w.iZ(A.qw,"Present",w.gaBF(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yh,G.alH,v,v,v)},
a3i(d,e,f,g){var w,v=null
if(f==null)w=g?A.aY:A.dm
else w=g?A.ac:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c58(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.K(d?A.cr:A.aN,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eBh(r,d),t),t.k("ak.E"))
t.push(new B.D(Y.alm,new B.fe(new C.eBi(r),q),q))
A.d.v(t,w?B.a([new B.D(S.w9,r.ahU(A.km,"Ending celebration",r.gcfO(),d),q),new B.D(S.w9,r.ahU(A.Hm,"Logo ring & frame",r.gcgv(),d),q)],x.p):A.f1)
A.d.v(t,w?B.a([new B.D(S.w9,r.ahU(A.mb,"Look and feel",r.gcgw(),d),q),new B.D(S.w9,r.ahU(A.pl,"Edit this slide's text",r.gch2(),d),q)],x.p):A.f1)
t.push(new B.D(S.w9,B.he(B.aA(q,B.p(q,D.f2R,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.lA.j(0.4),A.I,10)],x.V),D.aru,A.n),q,34,q,q,A.eZ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eBj(r),q,q,q,q,q,q,!1,A.a3),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.B(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bEq,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ch(r.cs3(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.ak,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yh,q,q,q,q)},
cs3(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.di1[v]
u.a=null
s=u.a=t.b
w.push(e.lQ(e.ctS(s),t.a,new C.eCG(u,e),a3,D.aQY.t(0,s)))}w.push(e.iZ(A.lb,"Notes Slide",new C.eCH(e),a3))
w.push(e.lQ(A.Hl,"Quiz",new C.eCI(e),a3,!0))
w.push(e.lQ(L.GV,"Worksheet",new C.eCT(e),a3,!0))
w.push(e.lQ(W.Hp,"Flashcard",new C.eD3(e),a3,!0))
w.push(e.lQ(A.OY,"Lab Report",new C.eDe(e),a3,!0))
w.push(e.lQ(A.uq,"Rubric",new C.eDl(e),a3,!0))
w.push(e.lQ(A.pf,"Minutes",new C.eDm(e),a3,!0))
w.push(e.lQ(A.oi,"Syllabus",new C.eDn(e),a3,!0))
w.push(e.lQ(A.a2e,"Timeline",new C.eDo(e),a3,!0))
return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.djn[v]
w.push(e.lQ(r.b,r.c,new C.eDp(e,r),a3,!D.aR3.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.B(B.a([e.iZ(A.wv,a0,e.gaNK(),a3),e.iZ(A.uv,"Picture",new C.eCJ(e),a3),e.iZ(A.yY,"Bio link",new C.eCK(e),a3),e.iZ(A.a2d,"Table",new C.eCL(e),a3),e.iZ(A.P1,"Sticky",new C.eCM(e),a3),e.iZ(A.uu,"Divider",new C.eCN(e),a3),e.iZ(A.CA,"Header",new C.eCO(e),a3),e.lQ(A4.uo,"Rectangle",new C.eCP(e),a3,!0),e.lQ(A.qo,"Circle",new C.eCQ(e),a3,!0),e.lQ(A.a1x,"Triangle",new C.eCR(e),a3,!0),e.lQ(A.jA,"Arrow",new C.eCS(e),a3,!0),e.lQ(D.bMm,"Parallelogram",new C.eCU(e),a3,!0),e.lQ(D.bOQ,"Hexagon",new C.eCV(e),a3,!0),e.lQ(A.uu,"Line",new C.eCW(e),a3,!0),e.lQ(A.yN,"PDF",new C.eCX(e),a3,!0),e.lQ(O.a2o,"Signature",new C.eCY(e),a3,!0),e.iZ(A3.Cl,"Quote",new C.eCZ(e),a3),e.iZ(D.a18,a1,new C.eD_(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bZ,x.w).w
u=x.p
t=B.B(B.a([e.aOB("Wide 16:9",D.Dv,a3),e.aOB("Short 9:16",D.oB,a3),new B.D(A.fu,B.mY(D.bR1,d,D.fGC,d,new C.eD0(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.B(B.a([e.bIU("This slide",!e.Q,a3,new C.eD1(e)),A.bn,e.aQN("All slides",e.Q,a3,new C.eD2(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bIV()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bU:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a4m,new C.eD4(e),n),n.k("ak.E"))
n=B.ch(B.B(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dko[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dm:A.aY,1.5,A.r,-1)
l.push(new B.D(A.fu,B.aA(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bH(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eD5(e,k),d,d,d,d,d,d,!1,A.a3),d))}l=B.ch(B.B(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bFQ()
g=B.T(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eD6(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.P,q,A.am,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.ch(B.B(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM),A.am,e.c1S(a3)],u),A.E,d,A.e,A.O,0,A.p),d)
case"Transitions":f=e.k7()
w=e.c
w.toString
w=B.aG(w,A.bZ,x.w).w
u=new C.eCF(e)
t=new C.eDq(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.RF,f.dy,new C.eD7(e,u,f),A.b1)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdw()
q=q==null?d:q.r
p.push(t.$4(D.RF,q,new C.eD8(e,u),A.bl))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.O,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iZ(A.lb,w,new C.eD9(e),a3),e.iZ(A.uz,"Print deck",new C.eDa(e),a3),e.lQ(D.anm,"Export JSON",new C.eDb(e),a3,!0),e.iZ(A.fQ,"Duplicate Slide",e.gaT_(),a3),e.iZ(A.e9,a2,e.gaS7(),a3),e.cy_(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.k7()
w=x.p
u=B.a([e.iZ(D.a18,a1,new C.eDc(e),a3),e.iZ(A.fQ,"Duplicate",e.gaT_(),a3),e.iZ(A.e9,a2,e.gaS7(),a3),e.iZ(A.qw,"Present",e.gaBF(),a3),e.iZ(A.Cx,a0,e.gaNK(),a3),e.iZ(A.Cp,"Fit Text",new C.eDd(e),a3),e.iZ(A.yN,"Download PDF",new C.eDf(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iZ(A.jW,"Transfer",new C.eDg(e),a3))
if(f!=null){w=B.a([A.ad,e.iZ(G.Oa,"Bold",new C.eDh(e,f),a3),e.iZ(G.a10,"Italic",new C.eDi(e,f),a3),e.iZ(G.amY,"Underline",new C.eDj(e,f),a3),e.iZ(Af.Ob,"Bullets",new C.eDk(e,f),a3),e.bRS(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bPn(a3))
w.push(e.iZ(D.bL4,"Delete",e.gaS6(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.i,0,d,d)}},
aOB(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oB
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.aaj,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bQd],v))
return new B.D(A.fu,B.iU(t,t,t,B.B(u,A.m,t,A.e,A.O,0,t,t),t,new C.ez4(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cy_(d){var w,v,u,t,s,r=this,q=null,p=r.gdw()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.K(d?A.aY:A.cq,A.r,1)
u=B.n(8)
t=B.X(A.GS,d?A.aB:A.al,q,q,q,14)
s=B.aH(q,q,q,q,D.aqt,q,q,q,new C.eDN(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.aqk,q,q,q,new C.eDO(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.O,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Gy,A.mJ,q,q,q)},
ctS(d){switch(d.a){case 6:return W.Hp
case 7:return A.Hl
case 8:return L.GV
case 4:return A.CA
default:return A.lb}},
bRS(d,e){var w=null,v=B.K(e?A.aY:A.cq,A.r,1),u=B.n(8),t=B.aH(w,w,w,w,D.aqt,w,w,w,new C.eAc(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.aqk,w,w,w,new C.eAd(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.O,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.w8,A.mJ,w,w,w)},
c1S(d){var w=null
return B.Cd(B.DI(B.X(A6.a1b,d?A.ac:A.bs,w,w,w,16),w,w,D.fMg,w,w,w),w,w,new C.eAK(),A.I,this.gbD8(),A.ck,"Slide layout",x.fO)},
lQ(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bN,s=B.K(g?A.dq:A.aN,A.r,1),r=x.p,q=B.a([B.X(d,g?A.du:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.p(w,D.P6,A.f,w,w,D.ER,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fu,B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,B.eK(new B.D(A.h6,B.x(B.a([new B.an(A.a_,w,A.ab,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bs,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.O,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w)},
iZ(d,e,f,g){return this.lQ(d,e,f,g,!1)},
b74(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aM
v=B.hQ(t,new C.eDZ(u,s,e,d),s.r.length,A.ck,t,w,new C.eE_(e),!1)
s=d?A.av:A.bN
w=B.a([],x.p)
if(e&&!u.kq())w.push(new B.D(A.ck,B.I9(E.aqH,new C.eE0(u),B.nO(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aRH,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bGV(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oB?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bM(A.b0,v,v,new B.fH(w,B.aA(v,B.cv(new C.ezt(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ezu(this),v,v,v,v,v,v,!1,A.a3),v),v),v)},
bGX(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kH(a9.w))===!0,b1=b0&&C.fLY(b3),b2=b0&&b3.b===D.lj&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kq())v=!b0||a7.c4c(b3)
else v=!1
if(!a7.kq())u=!b0||a7.c4b(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cd:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hax(b3))o=a8
else if(p&&!a7.kq())o=a7.gcck()
else o=a7.kq()?a8:new C.ezh(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iE
i=w&&C.hax(b3)&&a7.A3()?new C.ezi(a7,b3):a8
h=v&&b3.b===D.cV?new C.ezj(a7,b3):a8
g=u?new C.ezk(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c2:r
else e=A.L
e=B.K(e,A.r,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c2.j(0.08)
else a0=b3.b===D.lj?A.L:a8
if(b1){a1=a7.kq()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c2.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bZ,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.A3()
a3=b3.b===D.cV
a4=a3?a7.Xe(b3):a8
a5=a3?a7.aur(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bZ,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ezl(a7,b3):a8
a3=v&&a3?new C.ezm(a7,b3):a8
a6=C.b2u(q,a4,a1,b3,a5,a2,a3,new C.ezn(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ap(-4,B.aA(a8,B.p(a8,D.bT2,A.f,a8,a8,new B.o(r,a8,B.K(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ezo(a7,b3,b4,b5),a8,a8,new C.ezp(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kq()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bTK,A.f,a8,a8,new B.o(A.dt,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc_q(),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kq()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bVn,A.f,a8,a8,new B.o(A.c2,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ezq(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cV)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bZ,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.as(B.aA(a8,B.p(a8,D.fVm,A.f,a8,a8,new B.o(A.bl,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l7,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ezr(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eM(A.A,f,new B.an(A.a_,a8,A.ab,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a3),k*b5,new B.bT("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aQN(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.K(e?A.bl:A.bC,A.r,1)
if(e)t=A.bl
else t=f?A.aB:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.P6,A.f,r,r,D.ER,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.p(r,B.B(t,A.m,r,A.e,A.O,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h4,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a3)},
bIU(d,e,f,g){return this.aQN(d,e,f,g,!1)},
cc4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b4,A.aO),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aP
t=f?A.xu:l
if(f)s=new B.bH(new B.ay(e?A.bC:A.aN,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.t0,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ac:A.bs,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b2,m.b2a(e,new C.eBl(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bU:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bt(l,new B.b5(4,B.n(10),A.dk),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eBm(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.ao,l,l,l,l),1)],q),A.ak,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aUh(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.k7()
if(a2==null)return A.bJ
w=new C.eAq(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dS:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.N,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b2,a0.b2a(a3,a0.gbNr())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fH7,B.E(B.kQ(a1,a1,a1,u,0.05,new C.eAr(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.B(B.a([D.fTI,B.E(B.kQ(a1,a1,a1,t,0.05,new C.eAs(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cV
if(m)o.push(B.B(B.a([D.fAF,B.E(B.kQ(a1,a1,a1,96,10,new C.eAt(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lO
if(l||n===D.lj||n===D.T_)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fN2,B.E(B.kQ(a1,a1,a1,s,0,new C.eAu(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.B(B.a([D.fV3,B.E(B.kQ(a1,a1,a1,r,0,new C.eAv(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.CT[j]
i.a=null
g=h.a
i.a=g
k.push(B.iU(a1,a1,a1,new B.y(h.b,a1,A.pE,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eAw(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bX(A.bG,k,A.bq,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.CM[j]
f.a=null
g=e.a
f.a=g
h.push(B.iU(a1,a1,a1,new B.y(e.b,a1,A.pE,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eAx(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.am,k,A.P,i,A.am,B.bX(A.bG,h,A.bq,a1,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eAy(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bX(A.bG,l,A.bq,a1,6,6),A.ae,B.hmM(new C.eAz(w,a2),D.cx7,B.eE([a2.as],k),!0,a1,k)],p))}if(n===D.fa){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eAA(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bX(A.bG,m,A.bq,a1,0,6)],p))}o.push(A.ae)
o.push(B.dl(D.bV9,D.fP5,new C.eAB(a0,a5),B.bo(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cr:A.c
p=a4?A.xu:a1
if(a4)o=new B.bH(new B.ay(a3?A.bC:A.aN,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.t0,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Gh,a1,a1,a1)},
bS8(d){return this.aUh(d,!1,!1,null)},
cbc(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.cb(p,new C.eAE(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fq3,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bb,B.E(B.x(B.a([w,A.bF,A.cS,r.bCt(D.d0h,d,B.P(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ad,B.dP(B.he(B.aI(!1,A.a2,!0,q,B.aO(!1,q,!0,B.eK(D.f8N,q,new B.o(q,q,B.K(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c2.j(0.4),A.en,8)],p),D.arz,A.a6),q,q,q),A.cO,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,"Documents (Hati)",q,q),A.I)],u))
t=B.B(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.J
w=B.n(20)
v=x.O
v=s?B.a([D.bcz,D.bd1],v):B.a([A.c,A.kG],v)
u=B.K(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a9(A.ay,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aNt(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.cb(w,new C.eyd(this,g,d,e,f),null)},
ahf(d,e){return this.cnT(d,e)},
cnT(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b4,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.ck(null,null,!0,null,new C.eCi(d,q),p,null,!0,!0,x.N),$async$ahf)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahf,v)},
Qn(d){var w=d.bU()
return""+B.bL(w)+"/"+B.bW(w)+"/"+B.bC(w)}}
C.afD.prototype={}
C.azX.prototype={
R(){return new C.be6(null,null)}}
C.be6.prototype={
gcAk(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bL(u)+"/"+B.bW(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a2()
w=B.bn(u,A.qe,u,1,u,v)
w.fn(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bx7,u,1,u,v)
w.cp(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bvS()},
Jj(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hX(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bCK,B.cb(new B.h8(B.a([u,w],x.dS)),new C.d71(this),v),v),v,v,v)}}
C.bel.prototype={
B(d){var w=null,v=B.n(22),u=B.K(A.aK,A.r,1),t=x.p
return B.as(new B.D(D.bD0,B.aI(!1,A.a2,!0,w,B.p(w,B.bx(B.n(22),B.x(B.a([new B.D(D.bCb,B.x(B.a([B.p(w,D.bTQ,A.f,w,w,new B.o(A.ax.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fRg,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fri,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dT,D.bwa,B.B(B.a([B.E(B.bN(!1,D.fFj,w,w,!0,w,w,w,new C.d7p(d),w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.nq,w,A.oF,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fKH,w,w,!0,w,w,w,new C.d7q(d),w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.ax,w,w,w,w,w,A.nq,w,A.oF,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.O,0,A.p),A.ap),A.f,w,A8.WS,new B.o(A.av,w,u,v,D.d0G,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.Ka.prototype={
R(){return new C.be5()}}
C.be5.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.K(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dC,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.db(B.aA(o,B.vK(B.da(o,B.B(B.a([r,A.as,new B.ds(1,A.cp,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.eP:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.b9,A.O,0,o,o),o,o,A.b7,new B.o(n,o,u,v,t,o,A.n),A.eO,o,o,o,o,A.nr,o,o,1/0),A.ct,A.je,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d6X(p,d),new C.d6Y(p),new C.d6Z(p),new C.d7_(p),o,o,o,!1,A.a3),k),new B.t(0,(1-k)*16))}}
C.Q1.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.K(A.c.j(0.5),A.r,1.2),p=x.p
return B.aI(!1,A.a2,!0,t,B.aO(!1,s,!0,new B.D(A.eS,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.ay,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.n1,v,v,v),A.bF,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a01.prototype={
R(){return new C.aFv(D.dh,null,null)}}
C.aFv.prototype={
gZv(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bwH,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b7y(d){if(!this.a.c.ay)return
this.x=d
this.gZv().iQ(0,0)},
Z(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.awK(D.fff)
C.ie9()
v.RO()},
q(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gZv().q()
v=w.z
if(v!=null)v.a4(0)
C.awK(D.ffg)
C.iec()
w.bxX()},
cD5(){B.jP()
this.m(new C.eEY())
var w=this.c.K(x.q).f
w.a5u()
if($.bm2)w.U(D.fc6)},
RO(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cG(B.dx(0,0,0,0,0,A.o.E(C.hkX(u,w),1,120)),new C.eEO(v))},
cCL(){var w,v=this
v.m(new C.eEX(v))
if(v.r)v.RO()
else{w=v.f
if(w!=null)w.a4(0)}},
gaWd(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cwK(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.eEP(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cG(A.lE,new C.eEQ(w))},
ayt(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.eEK(u))
u.RO()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaWd()){u.cwK()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eEL(u,A.o.F(w+1,s)))
u.b7y(w)
u.RO()}},
cmx(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.eEM(v))
v.RO()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eEN(v,w,t))
v.b7y(w)
v.RO()}},
cyf(d){var w,v=this,u=v.e
if(u===D.cn){u=v.d
u===$&&B.c()
return new B.mG(d,new B.bT(u,x.ac))}w=v.cyg(u)
u=v.d
u===$&&B.c()
return B.p_(new B.mG(d,new B.bT(u,x.ac)),w,new C.eEV(),A.b7,A.b7,new C.eEW(v))},
cyg(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bx3
case 16:return A.iV
case 18:return A.mE
default:return A.mF}},
cye(d,e,f){var w,v,u,t=null,s=B.cK(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d1(s,!1,e,t)
case 2:case 17:w=x.K
return B.jD(e,new B.bg(s,new B.bp(A.v6,A.I,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jD(e,new B.bg(s,new B.bp(A.Td,A.I,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jD(e,new B.bg(s,new B.bp(A.ic,A.I,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jD(e,new B.bg(s,new B.bp(A.t_,A.I,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.iu(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.bp(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.iu(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.bp(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.cb(s,new C.eER(s),e)
case 9:return B.cb(s,new C.eES(s),e)
case 10:return B.cb(s,new C.eET(s),e)
case 11:return B.cb(s,new C.eEU(s),e)
case 12:w=x.b
return new B.d1(s,!1,B.iu(A.A,e,t,new B.bg(s,new B.bp(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jj(B.jD(e,new B.bg(s,new B.bp(A.v6,A.I,v),v.k("bg<bO.T>")),t,!0),A.t,new C.btd(w,t))
case 15:w=x.K
return B.jD(e,new B.bg(s,new B.bp(A.Td,A.I,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.dr()
w.mT((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jX(v,u,v,1)
return B.fy(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eM(A.A,(1-s.gp(0))*0.2,new B.d1(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jj(new C.ap6(B.cb(n.gZv(),new C.eEZ(n,v,w),m),m),A.t,m)}else{t=B.rR(new C.J8(w,!0,!1,m))
l=B.b1(w.e)
u=n.cyf(B.ec(B.jj(t,A.t,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hkX(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oO,m,m,m),A.bn,D.bWe],k),A.m,m,A.e,A.O,0,m,m),A.f,m,m,new B.o(A.aS,m,m,l,m,m,A.n),m,m,m,m,A.h5,m,m,m)
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
l.push(B.bS(0,new C.NS(new C.ET(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oB?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jj(B.uN(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bm2){r=B.I9(A.le,new C.eF_(d),B.nO(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.B(B.a([r,A.ad,B.I9(B.X(n.r?Al.uy:A.hl,m,m,m,m,m),n.gcCK(),B.nO(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ap(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fS,m,m,m),A.f,m,m,new B.o(A.aS,m,m,r,m,m,A.n),m,m,m,m,A.h5,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.aA(A.c5,B.p(A.ls,$.bm2?A.bJ:s,A.f,m,m,m,m,64,m,m,D.bxO,m,m,150),A.y,!1,m,n.gcD4(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a3),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c5(m,A.w,B.aA(m,new B.an(A.a_,m,A.b3,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eF0(n,d),m,m,m,!1,A.a3),m,!1,!1,m,m)}}
C.Kg.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.al8,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b58,w,w,w,w,w,w,w,w)}}
C.btd.prototype={
jo(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
k0(d){return d.b!==this.b}}
C.bj7.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.b1W
break A}w=B.n(6)
break A}v=s.e
u=B.K(v?A.aD:A.L,A.r,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.da(r,B.as(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wA,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b7,new B.o(s.f,r,u,w,r,r,A.n),A.hu,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a3)}}
C.bj6.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dxQ.h(0,p)
if(o==null)o=D.djx
p=p==="none"
w=p?q:new B.a9(A.a5,A.a8,A.x,o,q,q)
p=p?A.cY.j(0.25):q
v=r.e
u=v?B.K(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.apF:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ev,q,q,52)
return B.aA(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a3)}}
C.aLl.prototype={
aV(){this.b1()
this.b0()
this.dJ()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.aNk.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bz0.prototype={}
C.aNl.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.b2x.prototype={}
C.Wp.prototype={
R(){return new C.aFt()},
bib(d){return this.e.$1(d)}}
C.aFt.prototype={
gb5P(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabc(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb5P()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaPr(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb5P()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb73(){return A.d.cI(this.gabc(),0,new C.eEu())},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.Rq()},
Rq(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Rq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b38(s.c,s.f),$async$Rq)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eEq(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Rq,v)},
Jl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabc()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fPc(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pm(o,q.c,q.f),$async$Jl)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eh(new C.eEt(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).cc(q),$async$Jl)
case 4:q=t.a
w=5
return B.b(B.pl(q.c,q.f),$async$Jl)
case 5:w=6
return B.b(t.Rq(),$async$Jl)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jl,v)},
RM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$RM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hH(o,D.ean,!0,"NgmySlidesTransferScan",x.N),$async$RM)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eEr(t))
w=4
return B.b(C.ahR(s),$async$RM)
case 4:r=e
t.m(new C.eEs(t))
o=J.a6(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.faW)
w=1
break}w=5
return B.b(t.a.bib(r),$async$RM)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$RM,v)},
Jk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabc()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pm(s,r.c,r.f),$async$Jk)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fPr(null,A.d.gI(n),s,t.a.f)}else q=C.fPr(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.GQ(q,"ngmy_slides_"+p,!1),$async$Jk)
case 4:o=e
s=t.a
w=5
return B.b(B.pl(s.c,s.f),$async$Jk)
case 5:w=6
return B.b(t.Rq(),$async$Jk)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jk,v)},
a3t(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eEv(t))
w=3
return B.b(C.bEg(),$async$a3t)
case 3:s=e
t.m(new C.eEw(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bib(s),$async$a3t)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a6(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3t,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.J,l=m?A.de:A.bN,k=o.gabc().length!==0,j=B.ap(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c2(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cy,m?A.ac:A.al,n,n,n,n),n,n,n,new C.eEz(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.N,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.Ad],h),A.m,n,A.e,A.i,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.eU,24)],x.V)
u=B.ap(n,B.X(A.qr,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bWM,A.f,n,n,new B.o(t,n,B.K(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bHq],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.he(B.aA(A.c5,D.f8P,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gche(),n,n,n,n,n,n,!1,A.a3),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.ab,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.a2V,A.n),n,n,n,n,E.a_F,n,n,1/0),A.dT,o.ayu(m,"What to transfer"),A.ae,B.B(B.a([B.E(o.aYB(A.qw,m,new C.eEA(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aYB(D.bMf,m,new C.eEB(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.ayu(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.n(16)
s=B.K(m?A.bC:A.aN,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eEC(o,m),B.T(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.mZ)
w.push(o.ayu(m,"Transfer options"))
w.push(A.ae)
w.push(B.B(B.a([B.E(o.ar7(A.aJ,k,!0,A.jD,m,o.r,o.gcbg(),"Scan on another device","Show QR"),1),A.as,B.E(o.aNu(A.kd,!0,A.jg,m,o.gctr(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.B(B.a([B.E(o.bAY(A.aW,k,A.hR,m,o.r,o.gcbd(),"Download .json","Backup file"),1),A.as,B.E(o.aNu(A.aC,!0,AB.z4,m,o.gcFv(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.n(16)
t=B.K(A.bl.j(0.28),A.r,1)
s=B.X(A.lJ,A.bl.j(0.9),n,n,n,18)
r=o.gaPr()
q=o.gb73()
p=o.gb73()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ac:A.bs,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bE,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ah.NL,i,n),B.E(B.cl(w,n,n,D.bBj,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,U.X9,A.f,A.dL,n,n,n,n,n,n,n,n,n,n))
return B.c5(n,l,new B.an(A.a_,n,A.ab,A.t,j,n),n,!1,!1,n,n)},
agq(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ikC(s,t.d,t.e),$async$agq)
case 2:return B.h(null,v)}})
return B.i($async$agq,v)},
ayu(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bl,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ad,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aYB(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.av:A.c
if(g)w=A.bl
else w=e?A.bC:A.aN
w=B.K(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cx,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.N,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aI(!1,A.a2,!0,s,B.aO(!1,r,!0,B.eK(new B.D(A.bE,B.x(B.a([t,A.W,u,A.bF,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai)},
bLz(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.av:A.c,m=B.n(16)
if(p)w=A.bl
else w=e?A.bC:A.aN
w=B.K(w,A.r,p?2:1)
v=B.p(q,D.bWY,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a5,A.a8,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.N,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ed:A.qo
if(p)r=A.bl
else r=e?A.aY:A.dm
return new B.D(A.cu,B.aI(!1,A.a2,!0,q,B.aO(!1,o,!0,B.p(q,B.B(B.a([v,A.bb,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bE,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eEp(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q)},
ar7(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bC:A.aN
w=B.K(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rz,s,s,s)],t)
if(i)u.push(B.ap(s,B.p(s,D.aqe,A.f,s,s,D.b4V,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.N,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aI(!1,A.a2,!0,s,B.aO(!1,p,!0,B.eK(new B.D(E.a_i,B.x(B.a([new B.an(A.a_,s,A.ab,A.f,u,s),A.ae,v,A.bF,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai),r)},
aNu(d,e,f,g,h,i,j){return this.ar7(d,e,!1,f,g,!1,h,i,j)},
bAY(d,e,f,g,h,i,j,k){return this.ar7(d,e,!1,f,g,h,i,j,k)}}
C.Wq.prototype={
R(){return new C.bm1()}}
C.bm1.prototype={
Z(){this.a2()
this.afc()},
afc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fPr(null,A.d.gI(m),k,r.a.f):C.fPr(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kH(A.d.gI(n).w))C.fPc(A.d.gI(r.a.d),D.dhk)
n=r.a
m=n.c
n=C.ihx(n.d)
w=7
return B.b(C.fPq(p,C.ihC(r.a.d),n,m,q),$async$afc)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eED(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eEE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afc,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.J,h=i?A.de:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eEF())
v=B.aH(j,j,j,j,B.X(A.eJ,i?A.ac:A.al,j,j,j,18),j,j,j,new C.eEG(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.N,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.Ad],u),A.m,j,A.e,A.i,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dd,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a2V,A.n),j,j,j,j,E.a_F,j,j,1/0)
q=B.n(24)
s=B.K(A.aJ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.UI,A.K,j,j))
else if(k.d==null)r.push(D.emx)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fFM,A.am,B.aA(j,B.p(j,B.B(B.a([D.bYv,A.as,B.d(m,j,j,j,j,j,j,D.frI,j,j,j)],u),A.m,j,A.e,A.O,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c2p,A.n),j,j,j,j,A1.akU,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eEH(k,d),j,j,j,j,j,j,!1,A.a3),A.P,D.fKd,A.aA],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.K(A.bC,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.q2(j,j,!1,l,j,!0,!0,j,!1,D.bsk),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hq,A.K,j,j))
return B.c5(j,h,B.bm(!0,B.x(B.a([new B.D(Ah.NL,v,j),B.E(B.ch(B.x(B.a([t,A.aQ,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c4m,A.n),j,j,j,j,A.uf,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.ald,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aFq.prototype={
R(){return new C.aFr(new B.au(A.at,$.ax()),B.k4(!0,null,!0,!0,null,null,!1))}}
C.aFr.prototype={
Z(){var w=this
w.a2()
w.e.aS(0,new C.ey7(w))
$.aV.x1$.push(new C.ey8(w))},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.e.q()
this.a1()},
b0h(){var w,v=this.c
v.toString
w=C.yV(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.eM,x.w).w,i=B.n(28),h=B.K(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.v3,36),D.adw],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bTU,A.f,k,k,new B.o(d,k,B.K(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fCN,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b5l,k,k,k,k,A.ys,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ged()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.N
o=new B.aP(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.bA(1,A.bd,B.da(A.A,new B.y(p,k,D.fl3,k,k,k,k,k,k,k,k,k),k,k,A.b7,new B.o(s,k,new B.bH(m,m,m,m),new B.bh(o,o,o,o),n,k,A.n),A.hu,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.JV)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.i,0,k,k),B.bS(0,B.db(B.aM(k,A.Y,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c0i,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uG(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BK(5,k),new C.bwu()],x.aS),k,k,A.aST,k,5,k,1,k,k,!1,"\u2022",k,new C.ey3(l),k,new C.ey4(l),k,!1,k,k,!1,k,!0,k,A.aa,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.mo,k,k,k,k),0),0,0,0)],a1)
d=C.yV(w.a.a.toUpperCase())==null?k:l.gcbh()
return B.as(new B.D(new B.Q(24,24,24,24+j.f.d),B.aI(!1,A.a2,!0,k,new B.cT(Ae.Lo,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bBP,B.x(B.a([new B.an(A.a_,k,A.ab,A.t,g,k),A.W,D.fB6,A.bx,new B.a5(1/0,50,B.bI(D.fSa,k,d,B.bo(A.bl,A.bo,A.al,k,A.c,k,k,k,new B.b8(B.n(16),A.a0),k,k,k)),k),A.am,B.bN(!1,A.nL,k,k,!0,k,k,k,new C.ey5(a2),k,B.fw(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.O,0,A.p),A.ap),A.f,k,k,new B.o(A.de,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bwu.prototype={
oN(d,e){var w=e.a.toUpperCase()
return e.cLZ(B.hl(A.by,w.length),w)}}
C.as7.prototype={
R(){return new C.aFu(B.zz(A.N2,A.nR,A.uL))}}
C.aFu.prototype={
q(){this.d.q()
this.a1()},
b0g(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iY(w,d)},
ab7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ab7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fYj(s),$async$ab7)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b0g("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$ab7,v)},
cbf(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.ihA(w[u])
if(t!=null){this.b0g(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.wx,s,s,s,t.gbPW(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eJ(B.a([r,B.aH(s,s,s,s,B.X(q?A.ur:Am.OF,s,s,s,s,s),s,s,s,new C.eEJ(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.de,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fTo,s,s,s,1,s,!0)
r=B.zy(t.d,A.bX,t.gcbe())
w=B.n(28)
w=B.as(B.p(s,s,A.f,s,s,new B.o(s,s,B.K(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c5(p,A.w,new B.an(A.a_,s,A.b3,A.t,B.a([r,w,B.ap(32,B.p(s,D.fGT,A.f,s,s,new B.o(v,s,B.K(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jf,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bwI.prototype={
B(d){var w=null,v=B.n(24),u=B.K(A.aK,A.r,1)
return B.aI(!1,A.a2,!0,w,B.p(w,B.x(B.a([B.p(w,H.apU,A.f,w,w,D.b54,w,56,w,w,w,w,w,56),A.aQ,D.fT4,A.am,new B.jW(this.c,new C.ffn(),w,w,x.cI),A.aQ,new B.jW(this.d,new C.ffo(),w,w,x.cl),A.ae,D.fT2],x.p),A.m,w,A.e,A.O,0,A.p),A.f,w,Ae.Lo,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,K.a_L,D.bCs,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)}}
C.a8e.prototype={
R(){return new C.blL(A.bA)},
gd_(){return this.c}}
C.blL.prototype={
Z(){var w=this
w.a2()
if(w.a.d)return
w.a_I()
w.d=B.dh(A.fB,new C.emn(w))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
a_I(){return this.cpL()},
cpL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eml(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bF(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cjs(p.c),$async$a_I)
case 6:r=e
q.a=r==null?A.bA:r
case 4:if(t.c==null){w=1
break}t.m(new C.emm(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
bS_(d){var w,v,u=d.a,t=A.o.ao(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ao(u,6e7)%60
v=A.o.ao(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aX(A.o.u(w),2,"0")+"m "+A.a.aX(A.o.u(v),2,"0")+"s left"
return A.a.aX(A.o.u(w),2,"0")+":"+A.a.aX(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.ao(w,6e7)<30&&A.o.ao(w,36e8)<999?A.ax:A.c2
w=v.j(0.14)
u=B.n(14)
t=B.K(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.GS,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bS_(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A9.ak_,A.iq,r,r,1/0)}}
C.a97.prototype={
np(){var w,v,u,t=this
t.xx()
w=t.cx
v=t.c
w.bsp(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q8(B.H(["/S",D.eqf,"/URI",new B.rM(B.X_(w.as),A.v7,!0)],x.N,u),u))}}
C.a98.prototype={
a6(){return"PdfAnnotFlags."+this.b}}
C.b4b.prototype={
bA_(d,e,f,g,h,i,j,k,l,m){var w=B.eE([D.eoy],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcPm(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k3(w,new C.cmw(),B.a7(w).k("k3<cs.E,G>")).f4(0,new C.cmx())},
aE1(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hj(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tM(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jo(d.a,d.b))
s.n(0,"/Border",B.tM(H.arX))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h6(t.gcPm()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q8(w,x.Y))}}
C.cmy.prototype={}
C.a3n.prototype={}
C.aiK.prototype={}
C.aSr.prototype={
h5(d){var w,v,u,t,s,r,q=this,p=null
q.lt(d)
q.Mn(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bhy(w)
u=x.N
t=x.Y
s=new C.cmy(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bA_(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q8(B.H(["/Type",D.eqd],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a97(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.axI.prototype={}
C.aTY.prototype={
h5(d){var w,v,u,t,s=this
s.lt(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ee(u.a,u.b,0,1)
u=d.b
u.ij()
t=s.a
t.toString
u.Lu(t)
u.T2(0)
u.pc(0,v)
w.h5(d)
u.ns(0)}}}
var z=a.updateTypes(["aB<~>()","~(lV)","R(i5)","~()","R(eP)","R(oA)","R(lV)","~(i5)","R(eP,eP)","Kg(Y)","R(nY)","R(lq)","aB<R>()","G(G,i5)","a8<m,@>(i5)","ai<zS>()","m(nY)","R(a8v)","m(lV)","m(wf)","R(F1)","G(i5,i5)","m(eP)","v(eP)","cN(eP)","v(hI)","~(hI)","eP(v1,J,J,J,J,G{fx:m,key:m,rotation:J})","eP(m,J,G)","G(oA,oA)","R(zS)","R(m,ai<zS>)","a8<m,@>(oA)","nY()","Z6(Y)","eP(m,J,J,J,J,J{align:qe,anim:hI,bullets:R,color:G?,delay:G,fx:m,key:m,style:I4,weight:nM})","a1q(Y)","eP(m,J,J,J,J{anim:hI,delay:G,fx:m,key:m})","aB<~>(oA)","R(mK)","Z4(Y)","a0W(Y)","a0V(Y)","PS(Y)","a_h(Y)","eP(v1,J,J,J,J,G,m,m{anim:hI,delay:G,rotation:J,stroke:G,strokeWidth:J})","eP(m,J,J,J,J,J,m,m,G)","eP(J,J,m,G{size:J})","v(rA,J,J)","lq()","oA(a8<@,@>)","~(uS)","F1()","fi(eP)","v(j9)","ZP(Y)","~(ET)","a_9(Y)","G(eP,eP)","eP(eP)","a8<m,@>(eP)","eP(a8<@,@>)","lV(lV)","a8<m,@>(lV)","lV(a8<@,@>)","R(jT)","jT()","m(i5)","~(ai<oA>)","V(ai<i5>)","V(i5)","ai<i5>(m?)","ad9(Y,G)","~(R(eP,eP))","adO(Y)","aft(Y,G)","u(lV,R)","Wd(Y)","adR(Y)","We(Y)","~(mO)","i5(i5)","J(eP)","a0p(Y)","a01(Y)","i5()","ai<Fo>()","aB<~>(ai<i5>)","v(bz<G,i5>)","D(jT)","D(F1)","aB<~>(hI,~())","v(ai<hI>,hI?,~(hI),u)","R(mk)","ai<jB<mO>>(Y)","jB<mO>(mO)","i5(a8<@,@>)","Wp(Y)","eP(m,J,J,J,J,J,G{align:qe,style:I4,weight:nM})","Wq(Y)","v(i5)","~(md)","J8(Y,lV,v?)","G(a98)","aB<ai<a8<m,@>>?>()","m(m)","aB<zR>({paper:m?,photo:dK?,request:m,template!lt})","aB<a8n>({doc!zR,history:ai<+(m,m)>,instruction!m,photo:dK?,template!lt})","adL(Y)"])
C.cLa.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:67}
C.cLb.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:78}
C.cLc.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gakX(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mx(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:78}
C.cLd.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bSs.prototype={
$1(d){return J.eI(A.dK.gaR(d),d.byteOffset,d.byteLength)},
$S:1681}
C.fBK.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iR(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iR(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iR(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iR(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1682}
C.c2m.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:32}
C.c2n.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.c2p.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fSm.prototype={
$1(d){return new C.a1q(this.a,this.b,C.iis(),null)},
$S:z+36}
C.fdQ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fdU.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.fdV.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fdW.prototype={
$0(){var w,v,u=this.a
u.r=!1
w=this.b
v=this.c.length
if(w===v){v=w===1?"":"s"
u.x="Saved "+w+" presentation"+v+" to the database."
u.y=!1
u.d.aa(0)
u.w=1}else if(w===0){u.x="Could not save. Check the connection and try again."
u.y=!0}else{u.x="Saved "+w+" of "+v+". Try the rest again."
u.y=!0}},
$S:0}
C.fdR.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fdS.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fdT.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fdL.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hb,w,w,w)
return B.ep(B.a([B.bN(!1,E.aUY,w,w,!0,w,w,w,new C.fdJ(d),w,w),B.bN(!1,D.fEi,w,w,!0,w,w,w,new C.fdK(d),w,w)],x.p),w,w,D.Z6,v,w,w,w,w,D.fTH,w)},
$S:19}
C.fdJ.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fdK.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.fdM.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fdN.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fe_.prototype={
$0(){var w=this.a
return w.m(new C.fdZ(w,this.b))},
$S:0}
C.fdZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fdP.prototype={
$0(){var w=this.a
return w.m(new C.fdO(w,this.b,this.c))},
$S:0}
C.fdO.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.fdX.prototype={
$0(){return this.a.a1R(this.b)},
$S:0}
C.fdY.prototype={
$0(){return this.a.Pv(0,this.b)},
$S:0}
C.fe2.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fe3.prototype={
$0(){var w=this.a
return w.m(new C.fe1(w,this.b))},
$S:0}
C.fe1.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.aa(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fe0(),B.T(w).k("N<1,m>")))}},
$S:0}
C.fe0.prototype={
$1(d){return d.a},
$S:z+67}
C.flq.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hi8(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bk(J.k(t==null?"":t))
return new C.oA(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.flr.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fEI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbr())q=n===o.gbr()&&p.b>o.gcE()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fEG.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fEH.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fRR.prototype={
$1(d){return d.ah()},
$S:z+32}
C.fBo.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fSI.prototype={
$1(d){return new C.Z6(this.a,null)},
$S:z+34}
C.cMx.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cMz.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cMC.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMD.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cMB())},
$S:12}
C.cMB.prototype={
$0(){},
$S:0}
C.cME.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2o(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bh(s,new C.cMA(r))
if(p<0)q.c6(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ai_(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:345}
C.cMA.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMF.prototype={
$1(d){},
$S:28}
C.cMy.prototype={
$1(d){return new C.Z4(this.b,this.a.gczG(),null)},
$S:z+40}
C.cMG.prototype={
$1(d){return D.hiS},
$S:z+43}
C.cMt.prototype={
$1(d){var w=null,v=B.n(24),u=B.K(D.YI,A.r,1),t=x.p
return B.as(B.aI(!1,A.a2,!0,w,B.p(w,B.x(B.a([new B.D(D.bCe,B.x(B.a([B.p(w,D.bR2,A.f,w,w,new B.o(A.ax.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fDd,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fqD,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dT,new B.D(A.qj,B.B(B.a([B.E(B.dT(D.fKf,new C.cMr(d),B.di(w,w,w,w,w,w,w,w,w,E.nh,w,w,A.cm,w,new B.b8(B.n(14),A.a0),D.b2m,w,w,w,w)),1),A.as,B.E(B.bI(D.fQq,w,new C.cMs(d),B.bo(A.bz,w,w,w,w,w,A.cm,w,new B.b8(B.n(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.O,0,A.p),A.f,w,A.xx,new B.o(D.afh,w,u,v,D.d5t,w,A.n),w,w,w,K.a_L,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1683}
C.cMr.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.cMs.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.cMu.prototype={
$0(){return J.nG(this.a.d,new C.cMq(this.b))},
$S:0}
C.cMq.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMp.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.K(D.YI,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bW6,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aru,A.n),t,44,t,t,t,t,t,44),A.bb,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aUD,t,t,t),A.bF,D.fQl],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dsU[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ayF(u[1],u[2],u[3],new C.cMn(v,d),!1,t))}q.push(A.am)
q.push(D.bwd)
q.push(A.am)
q.push(new C.ayF(A.e9,"Delete book","Remove it from this device",new C.cMo(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.O,0,A.p),A.f,t,t,new B.o(D.afh,t,r,s,t,t,A.n),t,t,t,A.ua,E.a_o,t,t,t),!0,!1,A.af,!0,!0)},
$S:27}
C.cMn.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.cMo.prototype={
$0(){B.a4(this.a,!1).O("delete")
return null},
$S:0}
C.cMw.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aKc,12)],x.V)
return B.dP(B.eM(A.A,e,B.p(w,B.bx(B.n(4),new B.a5(62,95.81818181818181,B.eO(A.A,F.aoT(d),A.f,A.dz),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cMv.prototype={
$0(){return this.a.c5O()},
$S:0}
C.cMm.prototype={
$0(){return this.a.aZK(0,this.b)},
$S:0}
C.cMl.prototype={
$0(){return this.a.Dr(this.b)},
$S:0}
C.cMk.prototype={
$0(){return this.a.Dr(this.b)},
$S:0}
C.cMH.prototype={
$2(d,e){var w=this.a
return w.bEw(J.r(w.d,e))},
$S:43}
C.cLO.prototype={
$0(){var w=this.a
if(w.c!=null)w.AW()},
$S:0}
C.cLN.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b1P("Page "+(v.length+1),"",""))},
$S:0}
C.cLQ.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cLY.prototype={
$0(){},
$S:0}
C.cLZ.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:8}
C.cLR.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aO(this.c)},
$S:0}
C.cLP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cLT.prototype={
$0(){return this.a.QX(this.b)},
$S:0}
C.cLU.prototype={
$0(){return this.a.QX(this.b)},
$S:0}
C.cLV.prototype={
$0(){var w=this.a
w.m(new C.cLS(this.b))
w.Ei()},
$S:0}
C.cLS.prototype={
$0(){return this.a.c=""},
$S:0}
C.cLX.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cLW(w,d))
w.Ei()},
$S:z+51}
C.cLW.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cM3.prototype={
$2(d,e){if(d)this.a.AW()},
$S:129}
C.cM_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AW(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.fdv)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cM0.prototype={
$0(){return this.a.aYI(this.b,-1)},
$S:0}
C.cM1.prototype={
$0(){return this.a.aYI(this.b,1)},
$S:0}
C.cM2.prototype={
$0(){return this.a.c79(0,this.b)},
$S:0}
C.fJf.prototype={
$1(d){return C.hsd()},
$S:44}
C.fJg.prototype={
$1(d){return null},
$S:28}
C.fpH.prototype={
$1(d){return null},
$S:28}
C.fKe.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:323}
C.fKd.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:210}
C.fKk.prototype={
$1(d){var w=this.a
return C.hao(d)===w||C.hwR(d)===w},
$S:z+4}
C.foK.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:74}
C.cdF.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJd.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fJe.prototype={
$1(d){return C.fLY(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fE3.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yr,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fKR,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dl(D.Hx,D.fEW,new C.fE1(d),B.bo(A.c2,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.uG,D.fMa,new C.fE2(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xv,w,w,w,w))],x.p),A.ak,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fE1.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fE2.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fE4.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,D.fAX,w,w,!0,w,w,w,new C.fE_(d),w,w),B.bI(D.fSI,w,new C.fE0(d),w)],x.p),w,w,w,D.fUG,w,w,w,w,D.fAQ,w)},
$S:19}
C.fE_.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fE0.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ehE.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ehC.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ehD.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ehF.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ehG.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fKj.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:74}
C.fKf.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a5,w,w,B.Bx(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1684}
C.fKh.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.frX,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:137}
C.fKi.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.il,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.il,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b9,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1685}
C.fKg.prototype={
$2$female$size(d,e){var w=null,v=d?D.ahl:this.a,u=B.K(A.il,A.r,1),t=e*0.32,s=B.ap(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ab,A.t,B.a([s,B.ap(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.afw,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1686}
C.fWa.prototype={
$1(d){return new C.adL(this.a,this.b,null)},
$S:z+108}
C.e4b.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bsS:A.Mv,q=B.K(D.jt.j(0.25),A.r,1),p=B.as(B.p(t,t,A.f,t,t,new B.o(A.c2.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.aqd,A.f,t,t,new B.o(t,t,B.K(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jt.j(0.35),A.en,10)],x.V),D.c5_,A.n),t,t,t,t,A.yi,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(P.a_B,B.x(B.a([p,A.aA,B.B(B.a([o,A.bb,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jt,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fr8,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.io(!0,t,e,A.y,D.aRX,new C.e4a(w,this.c),v,D.akO,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mt,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:121}
C.e4a.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ad9(w,new C.e49(this.b,w),null)},
$S:z+72}
C.e49.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fE7.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fE8.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yr,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fOp,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dl(D.Hx,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fE5(d),B.bo(D.jt,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.or,D.Vj,new C.fE6(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xv,w,w,w,w))],x.p),A.ak,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fE5.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fE6.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fEb.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fEc.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yr,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fC_,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dl(D.Hx,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fE9(d),B.bo(D.jt,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.or,D.Vj,new C.fEa(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xv,w,w,w,w))],x.p),A.ak,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fE9.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fEa.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fEf.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fEg.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yr,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fIE,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dl(D.Hx,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fEd(d),B.bo(D.jt,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.or,D.Vj,new C.fEe(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xv,w,w,w,w))],x.p),A.ak,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fEd.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fEe.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fXD.prototype={
$1(d){return D.hnZ},
$S:z+74}
C.emq.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bjC:A.Mv,s=B.K(A.az.j(0.25),A.r,1),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.az.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bYs,A.f,v,v,new B.o(v,v,B.K(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c2.j(0.35),A.en,10)],x.V),D.arz,A.n),v,v,v,v,A.yi,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(P.a_B,B.x(B.a([r,A.aA,B.B(B.a([q,A.bb,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.Mr,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bF,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.foz,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.io(!0,v,e,A.y,D.aRX,new C.emp(this.b),19,D.akO,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mt,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.emp.prototype={
$2(d,e){var w=D.RU[e]
return new C.aft(w,new C.emo(this.a,w),null)},
$S:z+75}
C.emo.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fM1.prototype={
$0(){return B.h9l(C.i5J(this.a))},
$S:321}
C.fM0.prototype={
$0(){var w=C.haH(this.a)
return"data:image/png;base64,"+A.cJ.gct().aO(w)},
$S:23}
C.fn0.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jp(d,e),new B.jp(w,e+v),new B.jp(d+f*14,e),new B.jp(w,e-v)],x.J)
B.a2l(this.a,C.fG(4291404327),v)},
$S:687}
C.fXO.prototype={
$1(d){return new C.Wd(this.a,null)},
$S:z+77}
C.epn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.epm())},
$S:31}
C.epm.prototype={
$0(){},
$S:0}
C.epo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.epl(w,d))},
$S:1688}
C.epl.prototype={
$0(){return this.a.x=J.eS(A.dK.gaR(this.b))},
$S:0}
C.epp.prototype={
$1(d){},
$S:28}
C.ep_.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eoW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ep6.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ep7.prototype={
$0(){var w=this.a
A.d.aa(w.ay)
w.z=this.b
w=w.ax
A.d.aa(w)
w.push(D.eAY)},
$S:0}
C.ep8.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ep1.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.cb)},
$S:0}
C.ep2.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ep3.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.ep4.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ep5.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd2(v).Q
v.toString
w.mh(v,A.dU,A.iC)}},
$S:8}
C.ep0.prototype={
$0(){var w=this.a,v=w.z,u=C.fMF(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cL6(C.fMF(t))},
$S:0}
C.eoY.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eoZ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.epe.prototype={
$0(){return B.a4(this.a,!1).ih()},
$S:0}
C.epf.prototype={
$0(){var w=this.a
return w.m(new C.epd(w))},
$S:0}
C.epd.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.epg.prototype={
$0(){var w=this.a
return w.m(new C.epc(w,this.b))},
$S:0}
C.epc.prototype={
$0(){var w=this.b.b
this.a.e.saY(0,w)
return w},
$S:0}
C.eph.prototype={
$1(d){var w=this.a
return w.m(new C.epb(w))},
$S:9}
C.epb.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.epi.prototype={
$1(d){var w=this.a
return w.m(new C.epa(w))},
$S:9}
C.epa.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.epj.prototype={
$0(){var w=this.a
return w.m(new C.ep9(w,this.b))},
$S:0}
C.ep9.prototype={
$0(){var w=this.b
this.a.f.saY(0,w)
return w},
$S:0}
C.epk.prototype={
$1(d){return this.a.a_u()},
$S:2}
C.eoX.prototype={
$0(){return this.a.cax(this.b)},
$S:0}
C.chk.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:338}
C.chi.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.chj.prototype={
$1(d){return d.length!==0},
$S:3}
C.fLC.prototype={
bmK(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bSr(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cHs($.ra().ji(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mP(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bmK(d,e)},
$S:1689}
C.fJU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJW.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.ds(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:74}
C.fJV.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fx(t,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qS,A.bY,t,A.dA,A.bW)
v=this.a
w.o0(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:34}
C.fmA.prototype={
$1(d){var w=A.a.fz(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.fmB(),B.T(w).k("Z<1>")).gL(0)},
$S:249}
C.fmB.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmy.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.fmz.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.chl.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaBj()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.han(i,new B.F(!0,h,a6,k,a6,a6,q,A.cR,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h7a(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gciT(),"\n\n")
d=B.fx(a6,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.af1(k,q,1.28),j),A.qS,A.bY,a6,A.dA,A.bW)
d.o0(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.han(i,new B.F(!0,h,a6,k,a6,a6,q,A.cR,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h7a(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.af1(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bA(1,A.bd,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qS,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aBi(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:434}
C.chm.prototype={
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
n=o.gaBj()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.han(f,new B.F(!0,e,a5,i,a5,a5,h,A.cR,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h7a(g.length===0?B.a([a6],n):g,l))break}a1=o.af1(i,h,1.28)
a2=new C.chn(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.JU,new B.a5(v,a5,a4.f,a5),A.JU,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bED,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bA(1,A.bd,new B.y(l[2+a3],a5,a1,a5,A.qS,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aBi(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.ae,B.E(B.B(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:146}
C.chn.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qS,w,w),w)},
$S:1690}
C.fXR.prototype={
$1(d){return new C.We(this.a,this.b,null)},
$S:z+79}
C.eq9.prototype={
$1(d){return d.lM()},
$S:1691}
C.eqa.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eq8(w,d))},
$S:1692}
C.eq8.prototype={
$0(){var w=this.b
return this.a.d=w.gfD(w)},
$S:0}
C.epX.prototype={
$0(){return this.a.y=!0},
$S:0}
C.epY.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eq3.prototype={
$0(){return B.a4(this.a,!1).eM()},
$S:0}
C.eq4.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.K(A.bD,A.r,2.5)
return B.aA(w,B.p(w,B.b4(w,w,w,new C.bdj(u,v.gaym(),w),A.fF),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eq1(v),new C.eq2(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a3)},
$S:36}
C.eq1.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:244}
C.eq2.prototype={
$1(d){var w=this.a
w.m(new C.epZ(w,d,this.b,this.c))},
$S:216}
C.epZ.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gaym()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eq5.prototype={
$1(d){var w=this.a
return w.m(new C.eq0(w,this.b))},
$S:9}
C.eq0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eq6.prototype={
$1(d){var w=this.a
return w.m(new C.eq_(w,d))},
$S:6}
C.eq_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eq7.prototype={
$0(){return B.a4(this.b,!1).O(this.a.a.c)},
$S:0}
C.fY6.prototype={
$1(d){return D.hqM},
$S:z+83}
C.eZZ.prototype={
$1(d){return this.a.Z8()},
$S:8}
C.eYR.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aO(v)},
$S:0}
C.eZe.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eZo.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.eYA.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eYB.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eYy.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eYz.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eZ7.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eZ8(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jj(B.rR(p>0.2?F.bVT(q,B.TJ(p,p,A.x)):q),A.t,u)],x.p)
w=s.bj
if(w>0.02){v=B.TJ(12,12,A.x)
p.push(B.jj(B.db(B.rR(F.bVT(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b4
if(r!=null&&s.b2>0)p.push(B.ec(u,B.b1(r).j(s.b2),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b1(r).j(s.bM)
w=s.be
w.toString
p.push(B.c3(u,new B.o(u,u,u,u,u,new B.c2(D.b00,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bh))}r=s.aF
if(r>0)p.push(B.c3(u,new B.o(u,u,u,u,u,new B.c2(D.b_M,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bh))
r=s.aN
if(r>0)p.push(B.c3(u,new B.o(u,u,u,u,u,new B.a9(A.b0,A.b5,A.x,B.a([A.w.j(r),A.L,A.L,A.w.j(s.aN)],x.O),D.d42,u),A.n),A.bh))
if(s.aC>0){r=s.k1
p.push(B.ap(u,B.c3(u,new B.o(u,u,u,u,u,new B.a9(A.b0,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.dfG,u),A.n),A.bh),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.ec(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c3(u,new B.o(u,u,u,u,u,new B.c2(A.A,0.95,A.x,u,0,B.a([A.L,A.w.j(r)],x.O),D.dcy,u),A.n),A.bh))
s=s.aB
if(s>0)p.push(B.b4(u,u,u,new C.bgX(s,u),A.aw))
return new B.an(A.a_,u,A.b3,A.t,p,u)},
$S:64}
C.eZ8.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fT(r.b,A.A,q,q,A.ci,A.bX,!0,q,!1,q,q),o=r.a,n=o.aYk(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bi
v=o.aK
u=v-1
t=o.bG
s=o.c5?-1:1
return B.dP(B.ee(A.A,B.eM(A.A,l,B.fy(A.A,new B.Bk(new B.xs(q,q,n,A.B3),p,q),q,B.w2(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:556}
C.eZk.prototype={
$0(){return this.a.m(new C.eZj(this.b,this.c))},
$S:0}
C.eZj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eZl.prototype={
$1(d){return this.a.m(new C.eZi(this.b,d))},
$S:6}
C.eZi.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eZn.prototype={
$0(){return this.a.m(new C.eZm(this.b,this.c))},
$S:0}
C.eZm.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eYq.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eYr.prototype={
$1(d){var w=this.a
return w.m(w.gcB3())},
$S:2}
C.eYs.prototype={
$1(d){return this.a.m(new C.eYp())},
$S:2}
C.eYp.prototype={
$0(){},
$S:0}
C.eYt.prototype={
$0(){var w=this.a
return w.m(new C.eYo(w,this.b))},
$S:0}
C.eYo.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eYv.prototype={
$2(d,e){return A.as},
$S:37}
C.eYu.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bC
q=B.K(q,A.r,t?2.5:1)
r=B.da(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b7,new B.o(w,w,q,s,w,new B.a9(A.b0,A.b5,A.x,r,w,w),A.n),A.hu,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a5(70,w,B.x(B.a([r,A.fG,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eYn(u,v),w,w,w,w,w,w,!1,A.a3)},
$S:82}
C.eYn.prototype={
$0(){var w=this.a
return w.m(new C.eYk(w,this.b))},
$S:0}
C.eYk.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eYw.prototype={
$1(d){var w=this.a
return w.m(new C.eYm(w,d))},
$S:9}
C.eYm.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eYx.prototype={
$1(d){var w=this.a
return w.m(new C.eYl(w,d))},
$S:9}
C.eYl.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eZO.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:34}
C.eZV.prototype={
$1(d){var w=this.a
return w.m(new C.eZW(w,d))},
$S:29}
C.eZW.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.en(v,v.r,B.a7(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eZX.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:266}
C.eZP.prototype={
$0(){var w=this.a
return w.m(new C.eZN(w,this.b))},
$S:0}
C.eZN.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eZQ.prototype={
$0(){var w=this.a
return w.m(new C.eZM(w,this.b))},
$S:0}
C.eZM.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eZR.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eZL(v,w.b,w.c,w.d))},
$S:0}
C.eZL.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.aa(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eZS.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grZ(v))},
$S:0}
C.eZT.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eZU.prototype={
$0(){var w=this.a
return w.m(new C.eZK(w))},
$S:0}
C.eZK.prototype={
$0(){var w=this.a.db
return A.d.ht(w,0,w.length,0)},
$S:0}
C.eZx.prototype={
$1(d){return d.a===this.a.dy},
$S:219}
C.eZy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.azJ[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ayq(new B.nm(new B.bh(n,n,n,n),A.ap,new B.l0(new B.o(j,j,j,j,j,new B.a9(A.a5,A.a8,A.x,m,j,j),A.n),A.bh,new C.b0p(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eZw(r,v),2,i))}return B.bX(A.bG,h,A.bq,j,7,7)},
$S:166}
C.eZw.prototype={
$0(){var w=this.b
return w.m(new C.eZr(this.a,w))},
$S:0}
C.eZr.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eZz.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:158}
C.eZC.prototype={
$0(){var w=this.a
return w.m(new C.eZv(w))},
$S:0}
C.eZv.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eZD.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eZE.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eZF.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eZG.prototype={
$0(){var w=this.a
return w.m(new C.eZu(w))},
$S:0}
C.eZu.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eZH.prototype={
$0(){var w=this.a
return w.m(new C.eZt(w))},
$S:0}
C.eZt.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eZI.prototype={
$0(){var w=this.b
return w.m(new C.eZs(this.a,w))},
$S:0}
C.eZs.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eZJ.prototype={
$1(d){return this.a.fx=d},
$S:158}
C.eZA.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eZB.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eZb.prototype={
$0(){var w=this.a
return w.m(new C.eZa(w))},
$S:0}
C.eZa.prototype={
$0(){var w=this.a
w.p4=null
w.b4v()},
$S:0}
C.eZc.prototype={
$0(){var w=this.a
return w.m(new C.eZ9(w,this.b))},
$S:0}
C.eZ9.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZd.prototype={
$0(){var w=this.a
return w.m(w.gcrm())},
$S:0}
C.eZ3.prototype={
$0(){var w=this.a
return w.m(new C.eZ2(w))},
$S:0}
C.eZ2.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eZ4.prototype={
$0(){var w=this.a
return w.m(new C.eZ1(w))},
$S:0}
C.eZ1.prototype={
$0(){var w=this.a
w.aC=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eZ5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dd_[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.ayq(new B.nm(new B.bh(p,p,p,p),A.ap,new B.a5(1/0,1/0,new B.Bk(new B.xs(o,o,v.aYk(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.B3),B.fT(u,A.A,140,o,A.ci,A.bX,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eZ0(v,s),3,n))}return B.bX(A.bG,m,A.bq,o,10,8)},
$S:166}
C.eZ0.prototype={
$0(){var w=this.a
return w.m(new C.eZ_(w,this.b))},
$S:0}
C.eZ_.prototype={
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
C.eYI.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eYJ.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eYK.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eYL.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eYM.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eYN.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eYO.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eYP.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eYQ.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eY3.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eY4.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eY5.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eY6.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eY7.prototype={
$0(){var w=this.a
return w.m(new C.eY2(w))},
$S:0}
C.eY2.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eY8.prototype={
$1(d){return this.a.b4=d},
$S:158}
C.eY9.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.eYC.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eYD.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eYE.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eYF.prototype={
$1(d){return this.a.be=d},
$S:158}
C.eYG.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.eYd.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.eYe.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eYf.prototype={
$1(d){return this.a.bG=d},
$S:6}
C.eYg.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eYh.prototype={
$0(){var w=this.a
return w.m(new C.eYc(w))},
$S:0}
C.eYc.prototype={
$0(){var w=this.a
return w.c8=A.k.F(w.c8+90+180,360)-180},
$S:0}
C.eYi.prototype={
$0(){var w=this.a
return w.m(new C.eYb(w))},
$S:0}
C.eYb.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eYj.prototype={
$0(){var w=this.a
return w.m(new C.eYa(w))},
$S:0}
C.eYa.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eZ6.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ilf(v,w.p4)},
$S:0}
C.eYZ.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.btc:B.fT(v,A.A,w,w,A.ci,A.bX,!1,w,!1,w,w)
return C.fK1(d.length===0?"rounded":d,u,e)},
$S:130}
C.eYV.prototype={
$0(){var w=this.a
return w.m(new C.eYU(w))},
$S:0}
C.eYU.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eYW.prototype={
$0(){var w=this.b
return w.m(new C.eYT(this.a,w))},
$S:0}
C.eYT.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eYX.prototype={
$0(){var w=this.b
return w.m(new C.eYS(this.a,w))},
$S:0}
C.eYS.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eYY.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:6}
C.eZh.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.I,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.er(n.ckO(),n.r))
l.push(new C.J8(n.cxZ(),!1,!1,t))
o=B.bS(0,B.bx(o,new B.er(new B.an(A.a_,t,A.b3,A.t,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.a_,t,A.ab,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.o(t,t,B.K(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bh),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eZg(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a3),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:228}
C.eZg.prototype={
$1(d){var w=this.a
return w.m(new C.eZf(w,d,this.b,this.c))},
$S:18}
C.eZf.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eZq.prototype={
$0(){var w=this.a
return w.m(new C.eZp(w,this.b))},
$S:0}
C.eZp.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eYH.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ih()},
$S:0}
C.eZY.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b08(),B.E(B.as(w.b37(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aRk(),1),w.aNv()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b08(),new B.D(A.hw,B.as(s.b37(u),t,t,t),t),B.E(s.aRk(),1),s.aNv()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:601}
C.fHi.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ew(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bCb(),null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.cn,D.cV,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,A.U)},
$S:z+98}
C.fHh.prototype={
$3(d,e,f){var w=this,v=C.bCb(),u=w.b?A.H:A.cz,t=w.c?A.cD:A.bp
return C.ew(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bi,4280172719,2,d,0,w.f,w.e,D.cn,D.cV,0.82,0.09,w.a)},
$S:z+28}
C.ciQ.prototype={
$1(d){return B.w(d)},
$S:17}
C.fP1.prototype={
$0(){return this.a},
$S:z+15}
C.fuu.prototype={
$1(d){return d.a.d1(this.a)},
$S:z+30}
C.fuv.prototype={
$2(d,e){return J.ct(e)},
$S:z+31}
C.fP3.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fP6.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fP7.prototype={
$0(){return A.d.gI(D.wG)},
$S:z+33}
C.fP_.prototype={
$1(d){return d.a},
$S:z+16}
C.fP2.prototype={
$1(d){return d.a},
$S:z+16}
C.fMY.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fMZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fN_.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fHm.prototype={
$0(){return C.cE()},
$S:23}
C.fHp.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cn,s=u?n:0
return C.ew(j,l,v,A.aF,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bi,4280172719,2,d,s,0,"",t,D.cV,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,D.dh,!1,null,0,"","",A.bp,A.a7)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,D.dh,!1,null,0,"",j,A.bp,A.a7)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,D.dh,!1,null,0,j,k,A.bp,A.a7)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bp,A.a7)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bp,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dh,!1,k,l,"",m,A.bp,A.a7)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,j,!1,null,0,"",k,A.bp,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,D.dh,!1,j,k,"",l,A.bp,A.a7)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,j,!1,k,0,l,m,A.bp,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bj,j,k,l,m,"",n,A.bp,A.a7)},
$S:z+35}
C.fHo.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cn,D.fa,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fHn.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cn,t=v?j:0
return C.ew(A.bj,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bi,4280172719,2,"",t,0,"",u,D.lO,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qI,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fHl.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fJN.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.htf.c3(0,A.a.i(s.w).toLowerCase(),new C.fJL(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fJM(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bz(t.e,new B.bq3(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1695}
C.fJL.prototype={
$0(){return F.aOT(this.a.w)},
$S:182}
C.fJM.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bB5("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ig(2,w,A.ch,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:182}
C.fmu.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fmv.prototype={
$1(d){return d.a},
$S:z+18}
C.fmw.prototype={
$1(d){return d.b},
$S:z+19}
C.fYi.prototype={
$1(d){return D.hr1},
$S:z+41}
C.f5p.prototype={
$0(){return this.a.x=C.hY9(this.b,this.c.b)},
$S:0}
C.f5q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f5n.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:395}
C.f5o.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:395}
C.f5m.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.av,null,new C.f5h(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k3,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b5(s,7)
if(r.length===0){n.m(new C.f5i(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hzh(o,m.cLU(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f5j(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f5h.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f5l(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b9U,A.f,p,p,D.b4O,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.CM:D.CT,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fK1(v,i.b58(h),u),p)))}t=B.kP(1,m,4,10,10,p,A.dS,!0)
if(!l)return B.bm(!0,new B.D(Aa.yp,t,p),!0,!1,A.af,!0,!0)
s=new C.f5k(i,d)
m=B.aG(d,A.bZ,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.HQ[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aZ(0,1/0,0,m.a.b*0.85),B.ch(B.x(B.a([D.fH1,A.W,t,A.dT,D.f2Z,A.au,D.fS3,A.W,B.kP(1.15,l,3,10,10,p,A.dS,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Aa.yp,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:27}
C.f5l.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.br:A.dq
return B.aA(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.K(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hP,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f5g(this.b,d),w,w,w,w,w,w,!1,A.a3)},
$S:1696}
C.f5g.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.f5k.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bL:A.bC
r=B.K(r,A.r,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.aqJ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.dZ(new C.NS(u.FV(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bL:A.ac,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f5f(this.b,d),v,v,v,v,v,v,!1,A.a3)},
$S:130}
C.f5f.prototype={
$0(){B.a4(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f5i.prototype={
$0(){var w=this.a
return w.w=w.w.FV("")},
$S:0}
C.f5j.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f55.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f56.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f58.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f59.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f5a.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f5b.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f57(w,d))},
$S:2}
C.f57.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f5c.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f5D.prototype={
$0(){return this.a.f.fS()},
$S:0}
C.f5E.prototype={
$0(){var w=this.a
return w.m(new C.f5C(w))},
$S:0}
C.f5C.prototype={
$0(){return this.a.e=null},
$S:0}
C.f5F.prototype={
$0(){var w=this.a
return w.m(new C.f5B(w))},
$S:0}
C.f5B.prototype={
$0(){return this.a.x=null},
$S:0}
C.f5H.prototype={
$1(d){var w=this.a
return w.m(new C.f5A(w,d))},
$S:35}
C.f5A.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f5I.prototype={
$1(d){var w=this.a
return w.m(new C.f5z(w,d))},
$S:35}
C.f5z.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f5J.prototype={
$0(){var w=this.a
return w.m(new C.f5y(w))},
$S:0}
C.f5y.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f5K.prototype={
$1(d){var w=this.a
return w.m(new C.f5x(w,d))},
$S:35}
C.f5x.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f5L.prototype={
$1(d){var w=this.a
return w.m(new C.f5w(w,d))},
$S:35}
C.f5w.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f5M.prototype={
$0(){var w=this.a
return w.m(new C.f5v(w))},
$S:0}
C.f5v.prototype={
$0(){var w=this.a
return w.w=w.w.FV("")},
$S:0}
C.f5N.prototype={
$0(){var w=this.a
return w.m(new C.f5u(w,this.b))},
$S:0}
C.f5u.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f5O.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bQB(D.a4K[v]),null))
return B.bX(A.bG,t,A.bq,null,8,8)},
$S:166}
C.f5G.prototype={
$1(d){var w=this.a
return w.m(new C.f5t(w,d))},
$S:9}
C.f5t.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f5d.prototype={
$0(){var w=this.a
return w.m(new C.f5e(w,this.b,this.c))},
$S:0}
C.f5e.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f5s.prototype={
$0(){var w=this.a
return w.m(new C.f5r(w,this.b))},
$S:0}
C.f5r.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fYh.prototype={
$1(d){return new C.a0V(this.a,this.b,null)},
$S:z+42}
C.f4Z.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f5_.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f50.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aJy?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f51.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f52.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f4Y(w,d))},
$S:2}
C.f4Y.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f53.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f54.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.ar(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hl(A.by,w.length),A.aO))},
$S:0}
C.ftK.prototype={
$1(d){return d.a===this.a},
$S:219}
C.elQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gayr(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cYD:D.dfp
t=D.y3.j(v?1:0.55)
v=p.a.c
t=B.K(t,A.r,v?1.8:1.2)
s=D.y3.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bS(0,B.b4(q,q,q,new C.bje(n*6.283,q),A.aw),0,0,0)
o=o.x
o=B.bS(0,B.bSI(B.eM(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a5,A.a8,A.x,B.a([A.L,D.bhH.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.ab,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ed:A.mc,D.y3,q,q,q,20),A.au,B.eO(A.A,B.o2(A.jH,D.fAj,new C.elP()),A.f,A.e3)],r),A.m,q,A.e,A.O,0,A.p),q,q,q),B.ap(q,B.p(q,D.fwN,A.f,q,q,new B.o(D.y3,q,q,B.n(6),q,q,A.n),q,q,q,q,L.alv,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.ay,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.elP.prototype={
$1(d){return D.c3a.aA(0,d)},
$S:68}
C.fP8.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fP9.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:219}
C.fPa.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1697}
C.fPb.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fP4.prototype={
$1(d){return d.a},
$S:z+18}
C.fP5.prototype={
$1(d){return d.b},
$S:z+19}
C.fXv.prototype={
$1(d){return new C.a_h(this.a,this.b,null)},
$S:z+44}
C.dpd.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dpe.prototype={
$1(d){return d.a===this.a.gaji()},
$S:z+10}
C.dpf.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dpi.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dpj.prototype={
$0(){var w=this.a
return w.m(new C.dph(w,this.b))},
$S:0}
C.dph.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dpk.prototype={
$1(d){var w=this.a
return w.m(new C.dpg(w,d))},
$S:9}
C.dpg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.elO.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.dZ(w,this.a)
return B.d_(w,0,B.dB(e,"count",x.S),B.T(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1698}
C.fiV.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fa,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cn,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fiX.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ew(A.K,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cR,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bi,4280172719,2,d,l,0,"",D.mV,D.cV,g,e,f)},
$S:z+46}
C.fiW.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wN(0,"twinkle")
w=t===D.bi?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mV,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fiU.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fIt.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fIu.prototype={
$0(){return A.d.gI(D.HZ)},
$S:z+49}
C.fIv.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fkW.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fOB.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bi,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bi,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bi,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOC.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bi,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bi,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bi,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fD,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fOD.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bi,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bi,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.k1,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.k1,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fD,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fOO.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.k1,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.k1,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.k0,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bi,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fOT.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.k0,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bi,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bi,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOU.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bi,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.k1,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bi,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fOV.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cXw[w]
u=Date.now()
t=$.ja
$.ja=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fa,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.bi,v,4294967295,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.KN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fOW.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mB,A.du,w/3).l()
u=Date.now()
t=$.ja
$.ja=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fa,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.Dx,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.KN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fOX.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bi,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.k0,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fD,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOY.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bi,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bi,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fD,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.k1,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bi,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOZ.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.k1,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bi,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bi,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOE.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.k0,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.k0,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fOF.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.k0,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.k0,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.k0,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.eT,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fOG.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bi,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bi,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.k1,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.k0,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fOH.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bi,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.k0,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.k0,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fD,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fOI.prototype={
$1(d){var w=4279080072,v=2450411
C.dz(d,C.dA(w,0.14,0,D.lk,v,0,0.14,0.68,0.18))
C.dz(d,C.dA(4279548070,0.14,0,D.lk,v,0,0.14,0.78,0.28))
C.dz(d,C.dA(4281193663,0.14,0,D.lk,v,0,0.14,0.68,0.38))
C.dz(d,C.dA(4284410580,0.14,0,D.lk,v,0,0.14,0.78,0.48))
C.dz(d,C.dA(4279203438,0.14,0,D.lk,v,0,0.14,0.68,0.58))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fOJ.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bi,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.k1,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.eT,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fOK.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mB,A.du,w/3).l()
u=Date.now()
t=$.ja
$.ja=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fa,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.Dx,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.KN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bi,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fOL.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.ja
$.ja=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fa,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bj,null,D.fD,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.KN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bi,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bi,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOM.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bi,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bi,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bi,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bi,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bi,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fD,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fON.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.ja
$.ja=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fa,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bj,null,D.bi,4294967295,4280640491,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.KN
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,t)
u=B.ar(A.d7,A.co,w/2).l()
t=Date.now()
s=$.ja
$.ja=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fa,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bj,null,D.bi,u,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.KN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bi,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.k0,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fOP.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.k1,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.k1,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.k1,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.k1,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bi,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.eT,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fOQ.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bi,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bi,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bi,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bi,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.eT,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.eT,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.eT,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.k1,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fOR.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bi,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bi,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bi,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.eT,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fD,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.ja
$.ja=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fa,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.eT,16777215,t,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.KN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fOS.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bi,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.k1,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.k1,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bi,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bi,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fGj.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fGk.prototype={
$0(){return A.d.gI($.bFQ())},
$S:z+52}
C.ft2.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.ft1.prototype={
$1(d){return C.i4E(d,this.a,this.b)},
$S:z+53}
C.fPh.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.w2(1.0375,1.01875,1)
return new B.fW(v,u,new C.aTY(B.hV9(A.vA,C.i4H(w.c,w.d,v,u),t)))},
$S:392}
C.e_q.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.e_p.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.o(w,w,w,w,w,new B.c2(A.L2,1.2,A.x,w,0,u.d,w,w),A.n),A.bh),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jj(new B.an(A.a_,w,A.b3,A.t,B.a([t,new B.er(B.b4(w,w,w,new C.bg0(u.a,r,q,r),A.aw),w),B.as(new B.jW(r,new C.e_o(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:287}
C.e_o.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.aw(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hU(B.fT(i,A.A,r,r,A.ci,A.bX,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.h0(A.A,0,6.283185307179586,A.x,t,r,new B.mE(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bsQ(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cW(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a5,A.a8,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaM3(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.O,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.db(B.ee(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.O,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f4c.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:68}
C.cdg.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bL:A.bC
t=B.K(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hX.j(0.4),A.I,14)],x.V):v
w=B.da(v,B.bx(B.n(12),d,A.ap),v,v,A.b7,new B.o(v,v,t,u,w,v,A.n),A.eO,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a5(112,v,B.x(B.a([w,A.fG,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bL:A.ac,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a3)},
$S:1699}
C.cdh.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FV(""))},
$S:0}
C.cdi.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.dZ(new C.NS(v.FV(u),!0,!1,null),!0,null),d.b,new C.cdj(w,this.c,d),v.a===u)},
$S:z+54}
C.cdj.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hzh(u.b,t.c.FV(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVV.prototype={
$1(d){return new C.ZP(this.a,null)},
$S:z+55}
C.deu.prototype={
$0(){var w=this.a
w.d=w.gvU().bdh("data:"+this.b+";base64,"+A.cJ.gct().aO(this.c));++w.r},
$S:0}
C.dez.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.deA.prototype={
$0(){var w=this.a
return w.m(new C.dey(w))},
$S:0}
C.dey.prototype={
$0(){return this.a.r++},
$S:0}
C.deB.prototype={
$1(d){var w=this.a
return w.m(new C.dex(w,d))},
$S:2}
C.dex.prototype={
$0(){var w=this.a
return w.d=w.gvU().aEW(this.b)},
$S:0}
C.deC.prototype={
$0(){var w=this.a
return w.m(new C.dew(w))},
$S:0}
C.dew.prototype={
$0(){var w=this.a
return w.d=w.gvU().bdh("")},
$S:0}
C.deD.prototype={
$1(d){var w=this.a
return w.m(new C.dev(w,d))},
$S:2}
C.dev.prototype={
$0(){var w=this.a
return w.d=w.gvU().bdn(this.b)},
$S:0}
C.deE.prototype={
$0(){var w=this.a
w=w.gvU().bdn(w.gays().a.a)
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.fVU.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fVT(w),null)},
$S:21}
C.fVT.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aZ(0,1/0,0,B.aG(d,A.bZ,x.w).w.a.b*0.85),B.ch(B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fP4,A.au,D.fPk,A.aA,new C.b0m(v.a,new C.fVS(v,e,d),!0,w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b5m,w,w,w,w,A.Nv,w,w,w)},
$S:162}
C.fVS.prototype={
$1(d){this.b.$1(new C.fVR(this.a,d))
B.a4(this.c,!1).O(d)},
$S:z+56}
C.fVR.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fYg.prototype={
$1(d){return D.hl7},
$S:z+57}
C.dlf.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dlg.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).O(this.b)
return null},
$S:0}
C.dlh.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).O(v)}},
$S:0}
C.fLV.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:68}
C.deb.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aY(t+r*1.2,o))
u.D(new B.c4(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c4(w,q+p,w,q+p*1.2))
u.D(new B.Dr(B.bY(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aH(u,v.d)
s.aH(u,v.e)
p=B.I()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ad(new B.t(w,o),2.2,p)},
$S:465}
C.fLZ.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fEj.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fEk.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yr,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fx4,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dl(D.Hx,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fEh(d),B.bo(A.c2,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.or,D.Vj,new C.fEi(d),B.di(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xv,w,w,w,w))],x.p),A.ak,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fEh.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fEi.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ciO.prototype={
$1(d){return d.hM()},
$S:z+59}
C.ciP.prototype={
$1(d){return d.ah()},
$S:z+60}
C.ciN.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdO(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i0k(b2.h(0,"type"))
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
n=A.aBJ[A.o.E(b4,0,8)]
m=D.d_E[A.o.E(w,0,1)]
l=C.i44(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.ay9[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i6X(b2.h(0,"shape"))
g=B.aK(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aK(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
if(f==null)f=4280172719
e=B.aK(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aK(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.A(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aK(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.huo(b2.h(0,"textTransition"))
a4=B.aK(b2.h(0,"textAnimDelayMs"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aK(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.ew(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ciD.prototype={
$1(d){return d.hM()},
$S:z+62}
C.ciE.prototype={
$1(d){return d.ah()},
$S:z+63}
C.ciA.prototype={
$1(d){return B.w(d)},
$S:17}
C.ciB.prototype={
$1(d){return B.w(d)},
$S:17}
C.ciC.prototype={
$1(d){return C.hkY(B.a2(d,x.N,x.z))},
$S:z+64}
C.cj4.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cj5.prototype={
$0(){return A.d.gI(D.a4m)},
$S:z+66}
C.cj_.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ce(d.f))w.n(0,u,d.hM())},
$S:z+7}
C.ciZ.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ciV.prototype={
$1(d){return new B.N(d,new C.ciW(),B.T(d).k("N<1,V>")).f4(0,new C.ciX())},
$S:z+69}
C.ciW.prototype={
$1(d){return d.f},
$S:z+70}
C.ciX.prototype={
$2(d,e){return d.ce(e)?d:e},
$S:689}
C.ciY.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hQY(d)},
$S:z+71}
C.cj0.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cj1.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cj2.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fMx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.aj(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fMt.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fMu.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fMv.prototype={
$2(d,e){var w
if(d.b===D.cV){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fMw.prototype={
$2(d,e){return d.b===D.fa&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ciJ.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ifP(b2,b3),b5=B.a7(b4).k("bd<2>")
b5=B.cF(new B.bd(b4,b5),new C.ciI(),b5.k("M.E"),x.N)
w=B.df(b5,B.a7(b5).k("M.E"))
b1=b1.e
v=A.qa.aw(0,A.k.E(b1,0,1))
u=new C.ciK()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ciL(a9,b7.d)
r=new C.ciM(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jO.aw(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kB(A.k.E(1-k,0,1),B.dP(B.ee(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.fa){a4=i.hM()
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lO&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b3,A.t,B.a([new B.kB(A.k.E(o,0,1),r.$1(l),a8),new B.kB(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iO(B.wx(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cn)a7=D.mV
p.push(s.$5(i.c,i.d,i.e,i.f,C.hwG(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a_,a8,A.ab,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a5,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bh)},
$S:457}
C.ciI.prototype={
$1(d){return d.a},
$S:z+22}
C.ciK.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.ciL.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1703}
C.ciM.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8d(v,C.b2u(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dMH.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ee(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ciS.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ciT.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fPo.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:322}
C.fOv.prototype={
$1(d){return new C.adR(this.a,this.b,null)},
$S:z+78}
C.ey9.prototype={
$0(){return this.a.Qm(this.b,C.ije(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eya.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Qm(this.b,C.ijg(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eyb.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Qm(this.b,C.ijf(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eyc.prototype={
$0(){Z.hwq()
B.a4(this.a,!1).O(null)},
$S:0}
C.ciH.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1704}
C.ciG.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nN),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jZ(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bX:A.dz
return B.fT(t,A.A,o,new C.ciF(),A.ci,w,!0,u,!1,new B.bT("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1705}
C.ciF.prototype={
$3(d,e,f){return D.ae1},
$S:204}
C.fMs.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d_(r,0,B.dB(6,"count",x.S),B.T(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fMr(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c3(new B.an(A.a_,t,A.ab,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bh),A.ap)},
$S:1706}
C.fMr.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b2u(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fvQ.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cG(r.b,new C.fvO(d))
w=B.aG(d,A.bZ,x.w).w
v=B.n(22)
u=B.K(A.bC,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h_,28)],x.V)
s=x.p
return new B.d1(e,!1,B.as(B.aI(!1,A.a2,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.k6,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bN(!1,A.Aq,q,q,!0,q,q,q,new C.fvP(p,d),q,B.fw(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.BQ,q,new B.b8(B.n(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.O,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fZ,A.Gs,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:258}
C.fvO.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).pP())B.a4(w,!0).eM()},
$S:0}
C.fvP.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a4(this.b,!0).eM()},
$S:0}
C.fcK.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dP(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dP(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dP(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dP(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fI(r*3.14159)
return B.fy(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kh(r*3.14159)
return B.fy(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fI(r*1.2)
s.kh(r*0.5)
return B.fy(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fI(-r*1.4)
return B.fy(A.a8,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(B.ee(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.jj(u.b,A.t,new C.aKE(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.jj(u.b,A.t,new C.aKE(1-r,t))],x.p),t)
case 16:v=D.b8Q.aw(0,r)
return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.mT(r*6.28)
s.jX(r,r,r,1)
return B.fy(A.A,u.b,t,s,!0)
case 20:return B.eM(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:58}
C.dY9.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dY8.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dY7.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hwG(v,w,e)},
$S:58}
C.ciz.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b1(v.e)
t=v.f
t.toString
t=new B.a9(A.a5,A.a8,A.x,B.a([u,B.b1(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b1(v.e):r
v=v.z
s=B.T(v).k("N<1,cN>")
q=B.C(new B.N(v,new C.ciy(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a_,r,A.ab,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bh)},
$S:457}
C.ciy.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cn?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8d(m,new C.Vv(d,C.b2u(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dbq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dbp(w))},
$S:12}
C.dbp.prototype={
$0(){return this.a.d++},
$S:0}
C.elw.prototype={
$2(d,e){var w,v=null,u=A.o.ao(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aR0.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ify(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ee(0,w*7,0,1)
s.fI(Math.sin(t)*0.32)
s.kh(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jX(w,w,w,1)
return B.fy(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ee(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.ee(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.f1C.prototype={
$1(d){var w
$.S()
w=B.I()
w.b=A.a9
w.c=d
w.e=A.dQ
return w},
$S:1707}
C.fK2.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdC()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bsJ(u,t,r),A.aw))
w.push(B.nJ(s.d,A.ap,new C.bgy(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.brG(u,q,t,r),A.aw))
return B.as(new B.a5(v.a,v.b,new B.an(A.a_,r,A.b3,A.t,w,r),r),r,r,r)},
$S:231}
C.fyQ.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:323}
C.eEn.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.Da(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gan(s)){u=null
w=1
break}u=r.dM(s,new C.eEl(),new C.eEm(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.eEl.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:198}
C.eEm.prototype={
$0(){return J.fs(this.a)},
$S:1710}
C.eAL.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eAM.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eAN.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eCl.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eC9.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eCa.prototype={
$1(d){return d.hM()},
$S:z+81}
C.eA8.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDt.prototype={
$0(){this.a.tT()},
$S:0}
C.eEj.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.ot()
w.Ks()},
$S:0}
C.eCj.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.ot()
w.Ks()},
$S:0}
C.eE6.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eE7.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eE8.prototype={
$1(d){return d.a},
$S:z+22}
C.eE9.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b4,A.aO),$.ax())},
$S:268}
C.eEa.prototype={
$0(){return B.k4(!0,null,!0,!0,null,null,!1)},
$S:691}
C.ezx.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eEk.prototype={
$0(){},
$S:0}
C.eBs.prototype={
$0(){var w=this.a
w.e=this.b.hM()
w.f=0
w.r=null
w.db=!1
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()
w.Ks()},
$S:0}
C.ezv.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xM()},
$S:0}
C.ezw.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xM()},
$S:0}
C.eBP.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eBQ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()
w.Ks()
w.z="Home"},
$S:0}
C.eBR.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eBr.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.Vi,w,w,!0,w,w,w,new C.eBq(d),w,w)],x.p),w,w,w,D.fQW,w,w,w,w,D.fxy,w)},
$S:19}
C.eBq.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBo.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.Vi,w,w,!0,w,w,w,new C.eBn(d),w,w)],x.p),w,w,w,D.fBH,w,w,w,w,D.fzn,w)},
$S:19}
C.eBn.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBp.prototype={
$0(){},
$S:0}
C.eAH.prototype={
$1(d){return this.a.b1w(C.bDQ(d))},
$S:z+7}
C.eAI.prototype={
$1(d){return this.a.afV(C.bDQ(d))},
$S:z+7}
C.eBy.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aY,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fR_,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.Q1(A.wk,D.azy,"HATI YA KUHOWA","Hati ya mahari",new C.eBt(d),w),A.W,new C.Q1(A.hm,D.dd1,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eBu(d),w),A.W,new C.Q1(A.hz,D.cYJ,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eBv(d),w),A.W,new C.Q1(A.i6,D.cWM,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eBw(d),w)],v)
if(this.a.gace())A.d.v(u,B.a([A.W,new C.Q1(A.jh,D.cHH,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eBx(d),w)],v))
return B.bm(!0,B.ch(B.x(u,A.ak,w,A.e,A.O,0,A.p),A.t,w,A.y,w,E.yr,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:27}
C.eBt.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eBu.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eBv.prototype={
$0(){B.a4(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eBw.prototype={
$0(){B.a4(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eBx.prototype={
$0(){B.a4(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eBz.prototype={
$0(){var w=this.a
w.e=this.b.hM()
w.f=0
w.r=null
w.db=!0
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()},
$S:0}
C.ezz.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ezA.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.aa(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.no(r,v.f+1,q);++v.f
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
C.eBK.prototype={
$1(d){return d.b===D.lO},
$S:z+4}
C.eBL.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e0(new C.eBI(w,this.a,v),null)},
$S:21}
C.eBI.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eBJ(p,o,a3,n),l=B.P(a2).ax.a===A.J,k=l?A.c:A.N,j=l?A.aR:A.al,i=l?A.bo:A.bN,h=l?A.N:A.c,g=B.n(28),f=B.K(l?A.bC:A.aN,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bF,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aH(q,q,q,q,B.X(A.cy,j,q,q,q,q),q,q,q,new C.eBE(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.CT[w]
v.a=null
t=v.a=u.a
a1.push(new C.bj7(t,u.b,p.a===t,i,k,new C.eBF(v,m),q))}a1=B.bX(A.bG,a1,A.bq,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.CM[w]
s.a=null
t=s.a=r.a
u.push(new C.bj6(t,r.b,p.b===t,k,j,new C.eBG(s,m),q))}return B.bm(!0,B.p(q,B.ch(B.x(B.a([d,A.aQ,a0,A.W,a1,A.bx,v,A.W,B.bX(A.bG,u,A.bq,q,12,12),A.bx,new B.a5(1/0,48,B.ex(D.c_9,D.fTq,new C.eBH(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b8(B.n(16),A.a0),D.b2T,q,q,q,q)),q)],e),A.E,q,A.e,A.O,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.ua,D.bAY,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.eBJ.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eBC(w.a,d,e))
w.b.d7(new C.eBD(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1713}
C.eBC.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eBD.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eBE.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBF.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eBG.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eBH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.H2(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d7(new C.eBB(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBB.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eBN.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eBO.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eBM(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.no(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xM()},
$S:0}
C.eBM.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eC4.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eC5.prototype={
$1(d){return d.w},
$S:z+82}
C.eC6.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eC7.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.J,t=u?A.c:A.N,s=u?A.aR:A.al,r=u?A.bo:A.aP,q=u?A.N:A.c,p=B.n(28),o=B.K(u?A.bC:A.aN,A.r,1),n=B.aG(d,A.bZ,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bTG,A.f,v,v,D.b4e,v,38,v,v,v,v,v,38),A.bb,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aH(v,v,v,v,B.X(A.cy,s,v,v,v,v),v,v,v,new C.eC1(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aA,new B.ds(1,A.cp,B.hQ(v,new C.eC2(m,k,w.c,s,w.d,t,r),k.length,A.fu,v,A.ah,new C.eC3(),!0),v)],l),A.E,v,A.e,A.O,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.ua,A.a_u,v,v,v),!0,!1,A.af,!0,!0)},
$S:27}
C.eC1.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eC3.prototype={
$2(d,e){return A.ae},
$S:37}
C.eC2.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cz
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bWX,q,q,q,new C.eC_(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bDd,n,q),B.aM(q,A.Y,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.bt(q,new B.b5(4,B.n(16),A.a0),q,A.eS,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.n(16),D.b2y),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eC0(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.aa,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:692}
C.eC_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ilo(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geL()?p.a:q.a.length
n=p.geL()?p.b:q.a.length
m=A.a.oZ(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hl(A.by,o+s.length),A.aO))
l.ajW(k,m)
l.pB()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eC0.prototype={
$1(d){var w=this.a
w.ajW(this.b.a,d)
w.pB()},
$S:2}
C.eC8.prototype={
$0(){},
$S:0}
C.eBA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ezQ.prototype={
$0(){},
$S:0}
C.ezR.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hy_(this.b,w,!0)
w=this.a
w.r=null
w.xM()},
$S:0}
C.ezS.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ezT.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.ezP(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.no(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xM()},
$S:0}
C.ezP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eCe.prototype={
$1(d){return B.p5(new C.eCd(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:143}
C.eCd.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.alb,B.x(B.a([D.fOr,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.io(!0,w,e,A.y,D.f9o,new C.eCc(this.a,this.b),20,A.ud,w,A.ah,!1),1)],v),A.ak,w,A.e,A.i,0,A.p)},
$S:453}
C.eCc.prototype={
$2(d,e){var w=null,v=D.HZ[e],u=C.hQT(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.K(q.j(0.45),A.r,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fP,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.f2V,A.f,w,w,new B.o(A.dF.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.mK,w,w,w)],m))
return B.aI(!1,A.a2,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.i,0,w,w),A.b2,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a5,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eCb(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:81}
C.eCb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ciR(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a4(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCf.prototype={
$0(){var w=this.a
w.e=this.b.hM()
w.f=0
w.r=null
w.db=!0
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()},
$S:0}
C.eyu.prototype={
$0(){var w,v=this.a,u=v.gqF(),t=C.rL(4294967295,null,0,0,null,C.cE(),D.mU,"","","",D.dh),s=this.b
C.cj3(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dw){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ezO.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ah()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gS(v)
if(u.b(t)){s=Date.now()
r=$.ja
$.ja=r+1
J.aJ(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c6(v.e.r,v.f+1,C.hkY(q));++v.f},
$S:0}
C.ezM.prototype={
$0(){var w=this.a
A.d.cz(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eCn.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cz(v.e.r,u),s=this.c
A.d.c6(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ezI.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.ezH(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ezH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eCm.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ezy.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b4,A.aO),$.ax())},
$S:268}
C.eA9.prototype={
$0(){return B.k4(!0,null,!0,!0,null,null,!1)},
$S:691}
C.eE4.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eE5.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aur(w).fS()
v=u.Xe(w)
v.stD(B.hl(A.by,v.a.a.length))},
$S:8}
C.eDu.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yd(v)
if(u!=null&&u.b===D.cV)w.Xe(u).saY(0,u.r)}else w.w=null},
$S:0}
C.eyv.prototype={
$0(){var w=C.cE(),v=this.a,u=C.ew(A.bj,!1,v.gqF().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bi,4280172719,2,"Tap to edit text",0,0,"",D.cn,D.cV,0.7,0.15,0.2)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eys.prototype={
$0(){var w=C.cE(),v=this.a,u=C.ew(A.bj,!1,4279310375,A.aF,"",v.gqF().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqF().c.l(),2,"",0,0,"",D.cn,D.fa,0.25,0.3,0.3)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eyi.prototype={
$0(){var w=C.ew(A.bj,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.cn,D.lO,0.6,0.2,0.18),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.eyf.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c69],x.p)
for(w=J.aW(this.a);w.C();){v=w.gS(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gakz().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bRl,r,r,r,r,new C.eye(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:27}
C.eye.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eyg.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.aq(u.ah(),null),s=C.ew(A.bj,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bi,4280172719,2,t,0,0,"",D.cn,D.a71,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdw().z,s)
t.r=s.a},
$S:0}
C.ezK.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ezL.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdw().z,new C.ezJ(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.ezJ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eyX.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cV)s.Q=t.c.l()
else if(w===D.fa){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eyY(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eyY.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ez1.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ez2(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdw()
if(t!=null)v.$1(t)}},
$S:0}
C.ez2.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ez_.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cV){s.Q=t.c
return}w=new C.ez0(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ez0.prototype={
$1(d){var w,v,u
for(w=A.d.gag(d.z),v=new B.f2(w,new C.eyZ()),u=this.a;v.C();)w.gS(0).Q=u},
$S:z+1}
C.eyZ.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eyW.prototype={
$0(){return C.cj3(this.b,this.c,this.a.gqF())},
$S:0}
C.eBZ.prototype={
$0(){return A.d.c6(this.a.d,0,this.b)},
$S:0}
C.eEd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEe.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eEf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEg.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c6(s,0,v.b)
else{w=A.d.bh(s,new C.eEc(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSO()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hM()
t.f=0
t.r=null
t.db=!1
A.d.aa(t.ax)
A.d.aa(t.ay)
t.xM()
t.Ks()}},
$S:0}
C.eEc.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eDK.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aci(),s=w.b,r=u.acj(A.fg,A.jW,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.K(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bx,B.p(v,B.B(B.a([B.E(u.aWk(w.c,A.al),1),new B.D(A.fC,B.p(v,D.bRr,A.f,v,v,new B.o(A.fg.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aWk(s,A.fg),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.ay,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bE,v,v,v),A.bx,u.aWn(A.fg,d,D.bNw,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.c_6(A.aJ,d,A.us,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aWl(d,"Not now"))
return new C.Kg(B.x(p,A.ak,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eDJ.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Kg(B.x(B.a([v.aci(),A.P,v.acj(A.aJ,D.bNa,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cT(new B.aZ(0,1/0,0,B.aG(d,A.bZ,x.w).w.a.b*0.42),B.hQ(w,new C.eDH(v,u,d),u.length,w,w,A.ah,new C.eDI(),!0),w),A.aA,v.aWl(d,"Cancel")],x.p),A.ak,w,A.e,A.O,0,A.p),w)},
$S:z+9}
C.eDI.prototype={
$2(d,e){return A.W},
$S:37}
C.eDH.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.K(A.c.j(0.08),A.r,1),q=x.p
return B.aI(!1,A.a2,!0,w,B.aO(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aqd,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.c35,A.n),w,42,w,w,w,w,w,42),A.bb,B.E(B.x(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.n1,w,w,w),A.cS,B.d("Updated "+this.a.Qn(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDG(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:81}
C.eDG.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eDD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aci()
t=t.acj(A.aC,A.uD,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Kg(B.x(B.a([s,A.P,t,A.bx,B.B(B.a([B.E(B.dT(A.aar,new C.eDB(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b8(B.n(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bI(D.fzY,u,new C.eDC(d),B.bo(A.fg,u,u,u,A.c,u,A.cm,u,new B.b8(B.n(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.ak,u,A.e,A.O,0,A.p),u)},
$S:z+9}
C.eDB.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eDC.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eDF.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aci(),s=w.b,r=u.acj(A.aW,A.ed,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.avM("Names",""+w.c),1),A.ad,B.E(u.avM("Fields",""+w.d),1),A.ad,B.E(u.avM("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bo(A.bl,v,v,v,A.c,v,A.yg,v,new B.b8(B.n(14),A.a0),v,v,v)
return new C.Kg(B.x(B.a([t,A.P,r,A.aQ,p,A.bx,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nI,v,v,v),v,new C.eDE(d),o),A.W,u.aWm(d,"Stay here",!1)],q),A.ak,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eDE.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eAD.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eAC.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eDv.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eE3.prototype={
$1(d){var w=this.a,v=this.b
return new C.a01(A.d.dM(w.d,new C.eE1(v),new C.eE2(v)).hM(),w.f,null)},
$S:z+84}
C.eE1.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eE2.prototype={
$0(){return this.a},
$S:z+85}
C.eyn.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bE,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fS,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTe,w,w,w,w,new C.eyl(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fxX,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bUt,w,w,w,w,new C.eym(d),!1,w,w,w,w,w,D.fUH,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.df,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.O,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eyl.prototype={
$0(){B.a4(this.a,!1).O("scroll")
return null},
$S:0}
C.eym.prototype={
$0(){B.a4(this.a,!1).O("split")
return null},
$S:0}
C.eyo.prototype={
$0(){var w=this.b,v=w.c,u=C.ew(A.bj,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bi,4280172719,2,v,0,0,"",D.cn,D.T_,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eyp.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.ja
$.ja=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.ja
$.ja=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.T_,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bj,u,D.bi,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cn,0,"","","","","",!1,0))
A.d.c6(j.e.r,i+q-1,new C.lV(""+1000*p+"_"+o,r+n,"",D.qH,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eyt.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kH(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ew(A.bj,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.cn,D.lj,0.35,0.55,0.62)
A.d.M(u.gdw().z,w)
u.r=w.a},
$S:0}
C.eyk.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b4d(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.ek(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.cn,D.lj,s,u,t)
A.d.M(p.gdw().z,q)
A.d.bs(p.gdw().z,new C.eyj(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.ifh(p)}},
$S:0}
C.eyj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCk.prototype={
$0(){var w=this.a,v=this.b
w.b4d(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eEb.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eAG.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.eAF())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eAF.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ez5.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ez6.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tT()},
$S:8}
C.eyh.prototype={
$0(){var w=C.ew(A.bj,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.cn,D.lO,0.8,0.1,0.1),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.eA7.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eyq.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdw().z,v)
w.r=v.a},
$S:0}
C.eyz.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eyA.prototype={
$0(){var w=this.b.hM(),v=C.cE(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ew(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdw().z,f)
t.r=f.a},
$S:0}
C.eyB.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bh(w,new C.eyy(v))
if(u>=0&&u<w.length-1){A.d.cz(w,u)
A.d.c6(w,u+1,v)}},
$S:0}
C.eyy.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyM.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bh(w,new C.eyx(v))
if(u>0){A.d.cz(w,u)
A.d.c6(w,u-1,v)}},
$S:0}
C.eyx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyP.prototype={
$0(){return this.a.as=A.bj},
$S:0}
C.eyQ.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eyR.prototype={
$0(){return this.a.as=A.dV},
$S:0}
C.eyS.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eyT.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eyU.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eyV.prototype={
$1(d){return d.length!==0},
$S:3}
C.eyC.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cE()
A.d.M(v,C.Df(w.gqF().c.j(0.18).l(),0.1,u,D.bi,0,2,1,0,0))
u=w.gdw().z
v=C.cE()
A.d.M(u,C.j4(A.bj,!1,w.gqF().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.eyD.prototype={
$0(){var w,v=this.a,u=v.gdw().z,t=C.cE()
A.d.M(u,C.Df(v.gqF().c.j(0.12).l(),0.1,t,D.bi,0,2,1,0,0.9))
t=v.gdw().z
u=C.cE()
w=C.bEy()
A.d.M(t,C.j4(A.K,!1,v.gqF().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.eyE.prototype={
$0(){A.d.M(this.a.gdw().z,C.Df(1727914055,0.12,C.cE(),D.bi,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eyF.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdw().z,C.Df(w,0.08,C.cE(),D.bi,w,2,0.5,0.2,0.4))},
$S:0}
C.eyG.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cE()
A.d.M(v,C.Df(w.gqF().c.j(0.35).l(),0.12,u,D.Dx,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdw().z,C.j4(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cE(),"Important note",0,D.qI,0.5,0.38,0.52))},
$S:0}
C.eyH.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.Df(4294507260,0.78,C.cE(),D.bi,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdw().z,C.j4(A.bj,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bEy()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.eyI.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.Df(4294897802,0.28,C.cE(),D.bi,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdw().z,C.j4(A.bj,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cE(),"Sticky note",0,D.aJm,0.26,0.64,0.14))},
$S:0}
C.eyJ.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdw().z,C.Df(4293060848,0.04,C.cE(),D.bi,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdw().z,C.Df(w,0.04,C.cE(),D.bi,w,2,0.55,0.1,0.48))},
$S:0}
C.eyK.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.j4(A.bj,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.IX,0.42,0.06,0.18))
A.d.M(v.gdw().z,C.j4(A.bj,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uX,0.42,0.52,0.18))},
$S:0}
C.eyL.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.Df(858088427,0.62,C.cE(),D.bi,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdw().z,C.Df(856004201,0.62,C.cE(),D.bi,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdw().z,C.j4(A.bj,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdw().z,C.j4(A.bj,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.eyN.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.Df(4294967295,0.36,C.cE(),D.bi,w,2,0.24,0.38,0.28))
A.d.M(v.gdw().z,C.j4(A.K,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cE(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.eyO.prototype={
$0(){return C.cj3(this.b,D.T0,this.a.gqF())},
$S:0}
C.eA6.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a8O.t(0,d),t=this.a
return t.b9m(d,v===d,A.b1,this.c,new C.eA5(t,u,d,w),u)},
$S:z+25}
C.eA5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oh(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bFk(r,new C.eA4(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eA4.prototype={
$0(){return this.a.d7(new C.eA3(this.b,this.c))},
$S:0}
C.eA3.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eyr.prototype={
$0(){var w,v=this.a,u=v.gqF(),t=C.rL(4294967295,null,0,0,null,C.cE(),D.mU,"","","",D.dh),s=this.b
C.cj3(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dw){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ez9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ilr(p,q.d,s,new C.ez8(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tT(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ez8.prototype={
$1(d){return this.bma(d)},
bma(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.ez7(t,d))
w=2
return B.b(t.tT(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ez7.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gS(w)
A.d.c6(v.d,0,u)}},
$S:0}
C.eza.prototype={
$0(){return this.a.bKE()},
$S:0}
C.ezb.prototype={
$0(){return this.a.aRx("Class Presentation",!0)},
$S:0}
C.ezc.prototype={
$1(d){return this.a.bLA(d.b,this.b,d.a)},
$S:z+88}
C.ezN.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bZ,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eBY.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aG(d,A.eM,x.w).w.f.d),new B.e0(new C.eBX(this.a,this.b),null),null)},
$S:59}
C.eBX.prototype={
$2(d,e){return B.p5(new C.eBW(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:623}
C.eBW.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.K(u?A.bC:A.aN,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aY,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.W,r,new B.D(A.akB,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.N,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b2,B.bN(!1,A.Aq,v,v,!0,v,v,v,new C.eBU(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aUh(u,!0,!0,new C.eBV(p,w.d))],q),e,v,D.byH,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.kY,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.eBU.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBV.prototype={
$0(){this.b.$1(new C.eBS())
var w=this.a
if(w.c!=null)w.m(new C.eBT())},
$S:0}
C.eBS.prototype={
$0(){},
$S:0}
C.eBT.prototype={
$0(){},
$S:0}
C.eDw.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:93}
C.eDx.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.db(B.ee(A.A,new C.azX(this.a,null),0.94+w*0.06,null,null),w)},
$S:451}
C.eDy.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:93}
C.eDz.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.db(B.ee(A.A,new C.bel(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:451}
C.eDA.prototype={
$0(){return A.d.c6(this.a.d,0,C.Wn(this.b))},
$S:0}
C.eyw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.aw(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pW.j(0.75)],t)
r=B.K(A.b_.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.cf.j(0.18),A.L],t)
q=B.K(A.b_.j(0.45+q),A.r,1)
t=B.p(p,B.X(A1.a1k,u?A.ac:A.N,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c2(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.N,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.un(A.fL,B.p(p,B.x(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.ay,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.eu,p,p,1/0),14,!1),A.ap)},
$S:299}
C.ezB.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ezC.prototype={
$1(d){return d.length!==0},
$S:3}
C.ezD.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jV
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a1R:A.C7}return w},
$S:695}
C.ezG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dw.aw(0,A.k.F(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.na.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.K(q.j(p+w*0.22),A.r,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kH(v.w)?A.wk:A.qw,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a5,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.N,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Qn(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Qn(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Qn(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Qn(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Qn(v.f)
r=k.bLy(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a8o(B.aI(!1,A.a2,!0,l,B.aO(!1,l,!0,B.p(l,B.dG(!1,A.Ns,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.oj,t?A.aB:A.bM,l,l,l,l),l,l,l,new C.ezE(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.ay,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ezF(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai),l),A.ap),A.f,l,l,l,l,l,l,A.d2,l,l,l,l)},
$S:94}
C.ezF.prototype={
$0(){return this.a.afV(this.b)},
$S:0}
C.ezE.prototype={
$0(){return this.a.B0(this.b,this.c)},
$S:0}
C.eB6.prototype={
$0(){var w=this.a
w.b7W()
w.m(new C.eB5())},
$S:0}
C.eB5.prototype={
$0(){},
$S:0}
C.eB7.prototype={
$1(d){return this.a.ajW(this.b.a,d)},
$S:2}
C.eB8.prototype={
$0(){this.a.d7(new C.eB4(this.b))},
$S:0}
C.eB4.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cz:A.U},
$S:0}
C.eB9.prototype={
$0(){this.a.d7(new C.eB3(this.b))},
$S:0}
C.eB3.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eBa.prototype={
$0(){this.a.d7(new C.eB2(this.b))},
$S:0}
C.eB2.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.n_},
$S:0}
C.eBb.prototype={
$0(){this.a.d7(new C.eB1(this.b))},
$S:0}
C.eB1.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eBc.prototype={
$0(){var w=this.a
w.d7(new C.eB0(w,this.b))},
$S:0}
C.eB0.prototype={
$0(){var w=this.b
return w.as=this.a.c5Z(w.as)},
$S:0}
C.eBd.prototype={
$0(){return this.a.d7(new C.eB_(this.b))},
$S:0}
C.eB_.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eBe.prototype={
$0(){return this.a.d7(new C.eAZ(this.b))},
$S:0}
C.eAZ.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eAS.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.eAT.prototype={
$0(){this.a.a0i()
return null},
$S:0}
C.eAU.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bZ,x.w).w.a.a<900)w.agd()
else w.m(new C.eAR(w))},
$S:0}
C.eAR.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eAV.prototype={
$0(){this.a.d7(new C.eAQ(this.b))},
$S:0}
C.eAQ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cz:A.U},
$S:0}
C.eAW.prototype={
$0(){return this.a.d7(new C.eAP(this.b))},
$S:0}
C.eAP.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eAX.prototype={
$0(){return this.a.d7(new C.eAO(this.b))},
$S:0}
C.eAO.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eAY.prototype={
$0(){return this.a.aAS(null)},
$S:0}
C.eA_.prototype={
$0(){this.a.DP()
return null},
$S:0}
C.eA0.prototype={
$0(){this.a.aaP()
return null},
$S:0}
C.eA2.prototype={
$1(d){return this.bmb(d)},
bmb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kj(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bV(A.av,null,new C.ezV(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d7(new C.ezW(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.ezX(r))
s=s.c.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.ezY(r))
s=s.c.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hzg(q,new C.ET(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d7(new C.ezZ(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahq(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:91}
C.ezV.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.end],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bTn:r
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,r,new C.ezU(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.df,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.O,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.ezU.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ezW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ezX.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ezY.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ezZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eA1.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.A2(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.A2(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.A2(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahq(r?t:s.db)
s=s==null?t:s.b
return B.a([D.esK,q,v,u,B.A2(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:144}
C.eEh.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bEv(w,v)}},
$S:0}
C.eEi.prototype={
$0(){this.a.DP()
return null},
$S:0}
C.eBh.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.c3_:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bs
return new B.D(A.fu,B.aA(u,B.da(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b7,new B.o(w,u,u,r,u,q,A.n),A.eO,u,u,u,u,A.lF,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eBg(t,d),u,u,u,u,u,u,!1,A.a3),u)},
$S:142}
C.eBg.prototype={
$0(){var w=this.a
return w.m(new C.eBf(w,this.b))},
$S:0}
C.eBf.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eBi.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a4V:E.azF
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbP5():t.gbKZ()
return B.he(B.aA(u,B.p(u,D.apD,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.I,10)],x.V),new B.a9(A.a5,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a3),u,s,u,u)},
$S:1718}
C.eBj.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ikH(v,w.a.c)},
$S:0}
C.eCG.prototype={
$0(){return this.b.vu(this.a.a)},
$S:0}
C.eCH.prototype={
$0(){return this.a.vu(D.mU)},
$S:0}
C.eCI.prototype={
$0(){return this.a.vu(D.IV)},
$S:0}
C.eCT.prototype={
$0(){return this.a.vu(D.IW)},
$S:0}
C.eD3.prototype={
$0(){return this.a.vu(D.IU)},
$S:0}
C.eDe.prototype={
$0(){return this.a.qr("lab_report")},
$S:0}
C.eDl.prototype={
$0(){return this.a.qr("rubric")},
$S:0}
C.eDm.prototype={
$0(){return this.a.qr("minutes")},
$S:0}
C.eDn.prototype={
$0(){return this.a.qr("agenda")},
$S:0}
C.eDo.prototype={
$0(){return this.a.qr("timeline")},
$S:0}
C.eDp.prototype={
$0(){return this.a.qr(this.b.a)},
$S:0}
C.eCJ.prototype={
$0(){this.a.Wk()
return null},
$S:0}
C.eCK.prototype={
$0(){this.a.We()
return null},
$S:0}
C.eCL.prototype={
$0(){return this.a.qr("table")},
$S:0}
C.eCM.prototype={
$0(){return this.a.qr("sticky")},
$S:0}
C.eCN.prototype={
$0(){return this.a.qr("divider")},
$S:0}
C.eCO.prototype={
$0(){return this.a.qr("header_bar")},
$S:0}
C.eCP.prototype={
$0(){return this.a.pi(D.bi)},
$S:0}
C.eCQ.prototype={
$0(){return this.a.pi(D.eT)},
$S:0}
C.eCR.prototype={
$0(){return this.a.pi(D.k0)},
$S:0}
C.eCS.prototype={
$0(){return this.a.pi(D.Dx)},
$S:0}
C.eCU.prototype={
$0(){return this.a.pi(D.k1)},
$S:0}
C.eCV.prototype={
$0(){return this.a.pi(D.lk)},
$S:0}
C.eCW.prototype={
$0(){return this.a.pi(D.fD)},
$S:0}
C.eCX.prototype={
$0(){this.a.HB()
return null},
$S:0}
C.eCY.prototype={
$0(){this.a.NL()
return null},
$S:0}
C.eCZ.prototype={
$0(){return this.a.qr("quote")},
$S:0}
C.eD_.prototype={
$0(){return this.a.a8Y()},
$S:0}
C.eD0.prototype={
$0(){this.a.a0o()
return null},
$S:0}
C.eD1.prototype={
$0(){var w=this.a
return w.m(new C.eCw(w))},
$S:0}
C.eCw.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eD2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oh(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eCE(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCE.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eD4.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.k7()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a8P.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aY
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.K(t,A.r,v?2.5:1),s,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a8P.t(0,q))u.push(B.ap(s,B.p(s,D.P6,A.f,s,s,D.ER,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fu,B.aA(s,B.he(new B.an(A.a_,s,A.ab,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eCD(r,d),s,s,s,s,s,s,!1,A.a3),s)},
$S:z+89}
C.eCD.prototype={
$0(){this.a.a9f(this.b)
return null},
$S:0}
C.eD5.prototype={
$0(){this.a.a9e(this.b)
return null},
$S:0}
C.eD6.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hQU(d),p=this.a,o=B.n(8),n=p.gdw()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aY
v=p.gdw()
n=B.K(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rL(4294967295,r,0,0,r,"preview_"+w,D.qH,"","","",D.dh)
C.hw3(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hxo(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.ap(r,B.p(r,D.aqe,A.f,r,r,D.ER,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iD,B.aA(r,B.x(B.a([new B.an(A.a_,r,A.ab,A.t,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.al,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eCC(p,q,d),r,r,r,r,r,r,!1,A.a3),r)},
$S:z+90}
C.eCC.prototype={
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
return B.b(s.oh(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d7(new C.eCs(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCs.prototype={
$0(){return C.hw3(this.a,this.b.a)},
$S:0}
C.eCF.prototype={
bmc(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a8O.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oh(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bmc(d,e)},
$S:z+91}
C.eDq.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eDs(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ch(B.B(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM)},
$S:z+92}
C.eDs.prototype={
$1(d){var w=this
return w.a.b9m(d,w.b===d,w.c,w.d,new C.eDr(w.e,d),!D.a8O.t(0,d))},
$S:z+25}
C.eDr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eD7.prototype={
$1(d){this.b.$2(d,new C.eCB(this.a,d,this.c))
return null},
$S:z+26}
C.eCB.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bFk(u,new C.eCr(v,this.c,w),w)},
$S:0}
C.eCr.prototype={
$0(){return this.a.d7(new C.eCp(this.b,this.c))},
$S:0}
C.eCp.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eD8.prototype={
$1(d){this.b.$2(d,new C.eCA(this.a,d))
return null},
$S:z+26}
C.eCA.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fZ4(u,new C.eCq(v,w),w)},
$S:0}
C.eCq.prototype={
$0(){var w=this.a
return w.d7(new C.eCo(w,this.b))},
$S:0}
C.eCo.prototype={
$0(){return this.a.gdw().r=this.b},
$S:0}
C.eD9.prototype={
$0(){var w=this.a
return w.m(new C.eCz(w))},
$S:0}
C.eCz.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eDa.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bEv(w,v)}},
$S:0}
C.eDb.prototype={
$0(){this.a.In()
return null},
$S:0}
C.eDc.prototype={
$0(){return this.a.a8Y()},
$S:0}
C.eDd.prototype={
$0(){var w=this.a,v=w.k7()
if(v!=null&&v.b===D.cV)w.d7(new C.eCy(v))},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eDf.prototype={
$0(){this.a.DP()
return null},
$S:0}
C.eDg.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fu(v,!0)
return null},
$S:0}
C.eDh.prototype={
$0(){this.a.d7(new C.eCx(this.b))},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cz:A.U},
$S:0}
C.eDi.prototype={
$0(){this.a.d7(new C.eCv(this.b))},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eDj.prototype={
$0(){this.a.d7(new C.eCu(this.b))},
$S:0}
C.eCu.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.n_},
$S:0}
C.eDk.prototype={
$0(){this.a.d7(new C.eCt(this.b))},
$S:0}
C.eCt.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ez4.prototype={
$1(d){return this.bm9(d)},
bm9(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oh(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d7(new C.ez3(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:183}
C.ez3.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eDN.prototype={
$0(){var w=this.a
return w.d7(new C.eDM(w,this.b))},
$S:0}
C.eDM.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eDO.prototype={
$0(){var w=this.a
return w.d7(new C.eDL(w,this.b))},
$S:0}
C.eDL.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eAc.prototype={
$0(){return this.a.d7(new C.eAb(this.b))},
$S:0}
C.eAb.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eAd.prototype={
$0(){return this.a.d7(new C.eAa(this.b))},
$S:0}
C.eAa.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eAK.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.arV,new C.eAJ(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eAJ.prototype={
$1(d){var w=null
return B.A2(B.d(d.b,w,w,w,w,w,w,A.lS,w,w,w),48,d,x.fO)},
$S:z+95}
C.eE_.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:37}
C.eDZ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kq()?q:new C.eDX(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bl
else v=r.d?A.aY:A.cq
v=B.K(v,A.r,o?2:1)
u=r.d?A.cr:A.c
t=B.bS(0,C.hxo(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aA(q,B.p(q,new B.an(A.a_,q,A.ab,A.t,B.a([t,B.ap(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nG,q,q,q),A.f,q,q,new B.o(A.aS,q,q,s,q,q,A.n),q,q,q,q,A.alw,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eDY(p,e),q,q,q,q,q,q,!1,A.a3)},
$S:82}
C.eDY.prototype={
$0(){var w=this.a
return w.m(new C.eDT(w,this.b))},
$S:0}
C.eDT.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Ks()},
$S:0}
C.eDX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.eDU(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eDV(q,s))
q.aT0()}else if(r==="del"){q=t.a
q.m(new C.eDW(q,s))
q.aS8()}else if(r==="up")t.a.b4q(s,s-1)
else if(r==="down")t.a.b4q(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDU.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bV6,w,w,w,w,new C.eDP(d),!1,w,w,w,w,w,w,w,D.fyV,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bV_,w,w,w,w,new C.eDQ(d),!1,w,w,w,w,w,w,w,A.x6,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bUf,w,w,w,w,new C.eDR(d),!1,w,w,w,w,w,w,w,D.fHh,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWl,w,w,w,w,new C.eDS(d),!1,w,w,w,w,w,w,w,D.fyJ,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.O,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eDP.prototype={
$0(){B.a4(this.a,!1).O("dup")
return null},
$S:0}
C.eDQ.prototype={
$0(){B.a4(this.a,!1).O("del")
return null},
$S:0}
C.eDR.prototype={
$0(){B.a4(this.a,!1).O("up")
return null},
$S:0}
C.eDS.prototype={
$0(){B.a4(this.a,!1).O("down")
return null},
$S:0}
C.eDV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eE0.prototype={
$0(){return this.a.a8Y()},
$S:0}
C.ezu.prototype={
$0(){var w=this.a
w.b7W()
w.aAS(null)},
$S:0}
C.ezt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dr,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a9(A.ay,A.aE,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c3(A.ku,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bh),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.ezs(this.a,e.b,e.d,q),B.T(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a_,p,A.ab,A.f,s,new B.bT("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bh)},
$S:457}
C.ezs.prototype={
$1(d){var w=this
return w.a.bGX(d,w.b,w.c,w.d)},
$S:z+23}
C.ezh.prototype={
$0(){var w=this
if(w.b){w.a.NT(w.c)
return}if(w.d){w.a.a8W(w.c)
return}if(w.e){w.a.ahv(w.c)
return}if(w.f)w.a.b8u(w.c)},
$S:0}
C.ezi.prototype={
$0(){this.a.NT(this.b)
return null},
$S:0}
C.ezj.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.ezk.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ezg(u,d,w.c,w.d))
v.I1()
v.ot()
v.pB()},
$S:18}
C.ezg.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ezl.prototype={
$1(d){return this.a.ajW(this.b.a,d)},
$S:2}
C.ezn.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hax(w))u.a.NT(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b8u(v)},
$S:0}
C.ezm.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.ezo.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ezf(w.b,d,w.c,w.d))
v.I1()
v.ot()
v.pB()},
$S:18}
C.ezf.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cV)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.ezp.prototype={
$1(d){var w=this.a
w.m(new C.eze(this.b,d))
w.I1()
w.ot()
w.pB()},
$S:216}
C.eze.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cV)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.ezq.prototype={
$0(){var w=this.a
w.m(new C.ezd(this.b))
w.I1()
w.ot()
w.pB()},
$S:0}
C.ezd.prototype={
$0(){this.a.r=C.hwT()},
$S:0}
C.ezr.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.eBl.prototype={
$0(){var w=this.a
return w.m(new C.eBk(w))},
$S:0}
C.eBk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eBm.prototype={
$1(d){return this.a.cFk(this.b.a,d)},
$S:2}
C.eAq.prototype={
$1(d){var w
this.a.d7(d)
w=this.b
if(w!=null)w.$0()},
$S:170}
C.eAr.prototype={
$1(d){return this.a.$1(new C.eAp(this.b,d))},
$S:6}
C.eAp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eAs.prototype={
$1(d){return this.a.$1(new C.eAo(this.b,d))},
$S:6}
C.eAo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eAt.prototype={
$1(d){return this.a.$1(new C.eAn(this.b,d))},
$S:6}
C.eAn.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eAu.prototype={
$1(d){return this.a.$1(new C.eAm(this.b,d))},
$S:6}
C.eAm.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eAv.prototype={
$1(d){return this.a.$1(new C.eAl(this.b,d))},
$S:6}
C.eAl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eAw.prototype={
$1(d){return this.b.$1(new C.eAk(this.a,this.c))},
$S:9}
C.eAk.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eAx.prototype={
$1(d){return this.b.$1(new C.eAj(this.a,this.c))},
$S:9}
C.eAj.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eAy.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bl:A.cY
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.K(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAi(this.a,v,d),w,w,w,w,w,w,!1,A.a3)},
$S:468}
C.eAi.prototype={
$0(){return this.a.$1(new C.eAf(this.b,this.c))},
$S:0}
C.eAf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eAz.prototype={
$1(d){return this.a.$1(new C.eAh(this.b,d))},
$S:1719}
C.eAh.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.eAA.prototype={
$1(d){var w=null
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAg(this.a,this.b,d),w,w,w,w,w,w,!1,A.a3)},
$S:468}
C.eAg.prototype={
$0(){return this.a.$1(new C.eAe(this.b,this.c))},
$S:0}
C.eAe.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eAB.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).pP()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eM()}v.a.atp()},
$S:0}
C.eAE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dw.aw(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.ar(u,A.b_,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.K(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.K(u,A.r,1.2)
r.push(B.ap(2,B.p(n,B.X(A.uD,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nt,n,n,n),n,n,n,2,n,n))
return B.aI(!1,A.a2,!0,n,B.aO(!1,m,!0,B.eK(new B.a5(48,48,new B.an(A.A,n,A.ab,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.ay,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.ai)},
$S:132}
C.eyd.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.aw(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.ar(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.K(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.K(A.c.j(0.4+w*0.15),A.r,1)
return B.aI(!1,A.a2,!0,p,B.aO(!1,o,!0,B.eK(B.x(B.a([B.ee(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j3,A.K,p,p)],x.p),A.m,p,A.b9,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.ay,A.aE,A.x,u,p,p),A.n),p,A.Gn,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.ai)},
$S:132}
C.eCi.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Y,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.ar4,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.ao,w,w,w,w)
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.eCg(d),w,w),B.bI(A.qU,w,new C.eCh(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eCg.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eCh.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).O(w)
return null},
$S:0}
C.d71.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dw.aw(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.aw(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.aw(0,i)
v=B.n(22)
t=B.ar(A.aK,A.d.gI(C.kH(j.a.c.w)?D.uO:M.ny),w*0.35)
t.toString
t=B.K(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kH(j.a.c.w)?D.uO:M.ny).j(0.18+w*0.12),A.I,32+w*10),D.adw],s)
q=B.n(22)
p=x.O
o=B.ap(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c2(A.b0,0.9,A.x,k,0,B.a([A.d.gI(C.kH(j.a.c.w)?D.uO:M.ny).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kH(j.a.c.w)?D.uO:M.ny).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c2(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kH(j.a.c.w)?D.uO:M.ny).j(0.08),A.L],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kH(m)?D.uO:M.ny
s=B.a([new B.ac(0,A.G,A.d.gI(C.kH(m)?D.uO:M.ny).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.ee(A.A,B.p(k,B.X(C.kH(j.a.c.w)?A.wk:A.qw,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.ay,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ab,A.t,l,k),A.W,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kH(j.a.c.w)?D.uO:M.ny).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fG,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.fqB,A.K,k,k),A.au,B.d(j.gcAk(),k,k,k,k,k,k,D.fvt,A.K,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSO()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kH(j.a.c.w)?D.uO:M.ny).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.U,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.ae],m))}s.push(new C.Ka(A.yN,"Download PDF","pdf",A.d3,j.Jj(0),!1,k))
p=j.a.c
if(!p.z||p.gSO()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Ka(A.jW,"Transfer to "+C.hwV(p==null?"":p),"transfer_hati",A.aW,j.Jj(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jj(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Ka(D.bMz,"Rename presentation","rename",A.cf,n,!1,k),A.am,new C.Ka(A.ani,"Duplicate","duplicate",A.b6,j.Jj(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ka(A.e9,"Delete presentation","delete",A.ax,j.Jj(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jj(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jj(n)
s.push(B.dP(B.db(B.bN(!1,E.aUO,k,k,!0,k,k,k,new C.d70(d),k,B.fw(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.aw,k,D.bBU,k,k,k,k,k,A.kq,k,k)),n),new B.t(0,(1-p)*8)))
return B.ee(A.A,B.db(B.aI(!1,A.a2,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.ab,A.t,B.a([o,new B.D(D.bB2,B.x(s,A.m,k,A.e,A.O,0,A.p),k)],m),k),A.ap),A.f,k,A.WR,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai),i),0.88+u*0.12,k,k)},
$S:45}
C.d70.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d7p.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d7q.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d6Z.prototype={
$1(d){var w=this.a
return w.m(new C.d6V(w))},
$S:22}
C.d6V.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d7_.prototype={
$1(d){var w=this.a
return w.m(new C.d6U(w))},
$S:70}
C.d6U.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d6Y.prototype={
$0(){var w=this.a
return w.m(new C.d6W(w))},
$S:0}
C.d6W.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d6X.prototype={
$0(){var w=this.a.a.e
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.eEY.prototype={
$0(){return $.bm2=!$.bm2},
$S:0}
C.eEO.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaWd())u.ayt()},
$S:0}
C.eEX.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eEP.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eEQ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ayt()},
$S:0}
C.eEK.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eEL.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eEM.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eEN.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eEV.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b3,A.t,w,null)},
$S:1720}
C.eEW.prototype={
$2(d,e){var w
if(e.gc4(e)===A.ii)return new B.d1(e,!1,d,null)
w=this.a
return w.cye(w.e,d,e)},
$S:449}
C.eER.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fI((1-v.gp(0))*1.5708)
return B.fy(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.eES.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kh((1-v.gp(0))*1.5708)
return B.fy(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.eET.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fI(v.gp(0)*0.8)
w.kh(v.gp(0)*0.35)
return B.fy(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.eEU.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fI(-v.gp(0)*1.2)
return B.fy(A.a8,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.eEZ.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZv().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZv().x
t===$&&B.c()
return new C.b2v(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.J8(v.c,t,!0,new B.bT("cine"+u,x.W))},
$S:680}
C.eF0.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bZ,x.w).w.a.a*0.55)w.ayt()
else w.cmx()},
$S:70}
C.eF_.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fPe.prototype={
$4(d,e,f,g){var w=this.b
A.d.aa(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:435}
C.fPn.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.fPk(d),w,w),B.bN(!1,D.fON,w,w,!0,w,w,w,new C.fPl(d,this.b,v),w,w),B.bI(A.aV5,w,new C.fPm(d,v,this.c),w)],x.p),w,w,L.tT,new B.a5(320,w,t,w),w,w,w,w,D.fQk,w)},
$S:19}
C.fPk.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fPl.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
C.hbb(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fPm.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRd(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aQE(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fPd.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cj6.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:591}
C.fPj.prototype={
$1(d){return d.ah()},
$S:z+14}
C.flp.prototype={
$1(d){return C.hb9(C.Wn(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fYk.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:93}
C.fYl.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.db(B.ee(A.A,D.ho0,0.94+w*0.06,null,null),w)},
$S:451}
C.fYm.prototype={
$1(d){var w=this
return new C.Wp(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eEu.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eEq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eEt.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Wq(u,this.b,w.gaPr(),v,null)},
$S:z+99}
C.eEr.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eEs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eEv.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eEw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eEz.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eEA.prototype={
$0(){var w=this.a
return w.m(new C.eEy(w))},
$S:0}
C.eEy.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eEB.prototype={
$0(){var w=this.a
return w.m(new C.eEx(w))},
$S:0}
C.eEx.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eEC.prototype={
$1(d){return this.a.bLz(d,this.b)},
$S:z+100}
C.eEp.prototype={
$0(){var w=this.a
return w.m(new C.eEo(w,this.b))},
$S:0}
C.eEo.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eED.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eEE.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eEF.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eEG.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eEH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.fcs)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ey7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ey6())},
$S:0}
C.ey6.prototype={
$0(){},
$S:0}
C.ey8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fS()},
$S:8}
C.ey3.prototype={
$1(d){return this.a.m(new C.ey2())},
$S:2}
C.ey2.prototype={
$0(){},
$S:0}
C.ey4.prototype={
$1(d){return this.a.b0h()},
$S:2}
C.ey5.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eEJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qf(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eEI(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEI.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fJv.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.er(new B.jW(this.c,new C.fJu(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:230}
C.fJu.prototype={
$3(d,e,f){return new C.J8(e,!1,!1,new B.bT(e.a,x.W))},
$S:z+102}
C.fJw.prototype={
$1(d){var w=null
return B.oC(!1,B.as(new C.bwI(this.a,this.b,w),w,w,w),w,x.z)},
$S:325}
C.fJA.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmK(),$async$$0)
case 3:w=4
return B.b(B.bP(A.mF,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmK(),$async$$0)
case 5:s=$.aV.al$.x.h(0,t.a)
r=s==null?null:s.gbd()
if(!(r instanceof B.qa))throw B.W("Could not draw the slide.")
u=r.m6(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1723}
C.fJB.prototype={
bmH(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hw(A.h9),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hN([J.eS(A.dK.gaR(r))],"image/png"))
t.toString
s=An.h1K(t)
w=4
return B.b(new B.qh(s,"load",!1,x.ev).gI(0).da(0,A.jP),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bmH(d)},
$S:1724}
C.fJx.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fJy.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fW(0)},
$S:155}
C.fJz.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.ffn.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fn0,A.K,w,w)},
$S:1725}
C.ffo.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bx(v,B.kx(A.bo,w,A.dH,8,w,e===0?w:e,w),A.ap)},
$S:609}
C.emn.prototype={
$1(d){this.a.a_I()
return null},
$S:11}
C.eml.prototype={
$0(){return this.a.e=D.bwX},
$S:0}
C.emm.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bA
return this.b.e=w},
$S:0}
C.cmw.prototype={
$1(d){return A.o.dt(1,d.a)},
$S:z+103}
C.cmx.prototype={
$2(d,e){return(d|e)>>>0},
$S:67};(function aliases(){var w=C.aN9.prototype
w.bxL=w.q
w=C.aME.prototype
w.bxe=w.q
w=C.aMp.prototype
w.bwZ=w.q
w=C.aMD.prototype
w.bxd=w.q
w=C.aN7.prototype
w.bxJ=w.q
w=C.aOr.prototype
w.bzd=w.q
w=C.aLl.prototype
w.bvS=w.q
w=C.aNk.prototype
w.bxW=w.q
w=C.aNl.prototype
w.bxX=w.q
w=C.b4b.prototype
w.bsp=w.aE1})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iis","aof",104)
v(C.aKg.prototype,"gc6l","ZC",0)
var r
u(r=C.ayH.prototype,"gczG","czH",38)
v(r,"gc7a","ae9",0)
v(r=C.ayD.prototype,"gaZJ","Ei",3)
v(r,"gc77","c78",3)
v(r,"gaxB","y_",0)
v(r,"gaxC","IZ",0)
t(C,"iiT","hOF",105)
v(C.aES.prototype,"gc9N","c9O",3)
s(C,"ij3",0,null,["$4$paper$photo$request$template"],["fQE"],106,0)
s(C,"ij2",0,null,["$5$doc$history$instruction$photo$template"],["bDO"],107,0)
v(r=C.aF8.prototype,"gcaw","Jg",0)
v(r,"gbL1","Xq",0)
v(r,"gcaz","aeZ",0)
v(r,"gcay","a_u",0)
v(r,"gb_X","Ez",0)
v(C.aFb.prototype,"gcaE","a_w",0)
v(r=C.aGA.prototype,"gb09","Qj",0)
v(r,"gcrm","b4v",3)
v(r,"gcB3","aC8",86)
v(r,"gbOU","aaT",0)
v(r,"gcb4","AF",0)
v(r=C.aIx.prototype,"gclg","a0T",0)
v(r,"gclo","a0W",0)
v(r,"gbDT","a9l",0)
v(r,"gcb8","afa",0)
v(C.aIw.prototype,"gcb9","afb",0)
v(C.aCy.prototype,"gbCS","a98",0)
v(C.aAW.prototype,"gcba","a_H",0)
w(C,"ijg","ih9",12)
w(C,"ije","ie2",12)
w(C,"ijf","ig7",12)
v(r=C.aFs.prototype,"gcEf","cEg",3)
v(r,"gcpE","cpF",3)
u(r,"gEF","afV",7)
v(r,"gbIF","asz",3)
u(r,"gEG","b1w",7)
v(r,"gcdr","afC",0)
v(r,"gcci","afB",0)
v(r,"gcfB","afW",0)
v(r,"gbKZ","aat",0)
v(r,"gcgv","a0i",0)
v(r,"gcgw","agc",0)
v(r,"gch2","agj",0)
v(r,"gcfO","afZ",0)
v(r,"gbP5","aaX",0)
v(r,"gaT_","aT0",3)
v(r,"gaS7","aS8",3)
v(r,"gaNK","aNL",3)
v(r,"gaS6","atp",3)
u(r,"gbD8","bD9",80)
v(r,"gaBF","b7F",3)
v(r,"gcck","ccl",3)
v(r,"gc_q","c_r",3)
v(r,"gbNr","bNs",3)
v(r=C.aFv.prototype,"gcD4","cD5",3)
v(r,"gcCK","cCL",3)
t(C,"ijh","ihq",2)
v(r=C.aFt.prototype,"gcbg","Jl",0)
v(r,"gctr","RM",0)
v(r,"gcbd","Jk",0)
v(r,"gcFv","a3t",0)
v(r,"gche","agq",0)
v(C.aFr.prototype,"gcbh","b0h",3)
v(r=C.aFu.prototype,"gbPW","ab7",0)
u(r,"gcbe","cbf",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o8,C.Sh,C.bJo,C.bHJ,C.cDj,C.cDh,C.bRo,C.ba_,C.cDi,C.bGj,C.cmq,C.cmo,C.cmp,C.cmn,C.atH,C.cmm,C.bSr,C.oA,C.aG3,C.jz,C.nU,C.a8n,C.zR,C.lt,C.oL,C.mk,C.zS,C.nY,C.a8v,C.as3,C.b2w,C.elN,C.lq,C.F1,C.eB,C.j9,C.ET,C.xU,C.eP,C.lV,C.i5,C.jT,C.a8w,C.afD,C.b2x,C.b4b,C.a3n])
u(B.ju,[C.cLa,C.c2n,C.fEH,C.cMH,C.cM3,C.fKd,C.e4b,C.e4a,C.emq,C.emp,C.fLC,C.fmy,C.fmz,C.chl,C.chm,C.chn,C.eq4,C.eZ7,C.eYv,C.eYu,C.eZy,C.eZ5,C.eYZ,C.eZh,C.eZY,C.fuv,C.f5l,C.f5k,C.f5O,C.elQ,C.fPa,C.e_p,C.fVT,C.fLZ,C.ciZ,C.ciX,C.cj1,C.fMt,C.fMu,C.fMv,C.fMw,C.ciJ,C.ciK,C.dMH,C.ciG,C.fMs,C.fcK,C.dY7,C.ciz,C.elw,C.fK2,C.eBI,C.eC6,C.eC3,C.eC2,C.eCd,C.eCc,C.eDI,C.eDH,C.eBX,C.eBW,C.eyw,C.ezG,C.eCF,C.eE_,C.eDZ,C.ezt,C.eAE,C.eyd,C.d71,C.eEV,C.eEW,C.eER,C.eES,C.eET,C.eEU,C.eEZ,C.cj6,C.eEu,C.eEF,C.cmx])
u(B.hy,[C.cLb,C.cLc,C.bSs,C.fBK,C.c2m,C.c2p,C.fSm,C.fdU,C.fdL,C.fe0,C.flq,C.flr,C.fEI,C.fEG,C.fRR,C.fBo,C.fSI,C.cMx,C.cMC,C.cME,C.cMA,C.cMF,C.cMy,C.cMG,C.cMt,C.cMq,C.cMp,C.cMw,C.cLZ,C.cLX,C.fJf,C.fJg,C.fpH,C.fKe,C.fKk,C.foK,C.cdF,C.fJd,C.fJe,C.fE3,C.fE4,C.fKj,C.fKf,C.fKh,C.fKi,C.fKg,C.fWa,C.fE7,C.fE8,C.fEb,C.fEc,C.fEf,C.fEg,C.fXD,C.fn0,C.fXO,C.epn,C.epo,C.epp,C.ep5,C.eph,C.epi,C.epk,C.chk,C.chi,C.chj,C.fJU,C.fJW,C.fJV,C.fmA,C.fmB,C.fXR,C.eq9,C.eqa,C.eq1,C.eq2,C.eq5,C.eq6,C.fY6,C.eZZ,C.eZo,C.eZ8,C.eZl,C.eYq,C.eYr,C.eYs,C.eYw,C.eYx,C.eZO,C.eZV,C.eZX,C.eZx,C.eZz,C.eZD,C.eZE,C.eZF,C.eZJ,C.eZA,C.eZB,C.eYI,C.eYJ,C.eYK,C.eYL,C.eYM,C.eYN,C.eYO,C.eYP,C.eYQ,C.eY3,C.eY4,C.eY5,C.eY6,C.eY8,C.eY9,C.eYC,C.eYD,C.eYE,C.eYF,C.eYG,C.eYd,C.eYe,C.eYf,C.eYg,C.eYY,C.eZg,C.fHi,C.fHh,C.ciQ,C.fuu,C.fP6,C.fP_,C.fP2,C.fMY,C.fMZ,C.fN_,C.fHp,C.fHo,C.fHn,C.fHl,C.fmu,C.fmv,C.fmw,C.fYi,C.f5n,C.f5o,C.f5h,C.f5b,C.f5H,C.f5I,C.f5K,C.f5L,C.f5G,C.fYh,C.f52,C.ftK,C.elP,C.fP8,C.fP9,C.fPb,C.fP4,C.fP5,C.fXv,C.dpe,C.dpk,C.elO,C.fiV,C.fiX,C.fiW,C.fiU,C.fIt,C.fIv,C.fkW,C.fOB,C.fOC,C.fOD,C.fOO,C.fOT,C.fOU,C.fOV,C.fOW,C.fOX,C.fOY,C.fOZ,C.fOE,C.fOF,C.fOG,C.fOH,C.fOI,C.fOJ,C.fOK,C.fOL,C.fOM,C.fON,C.fOP,C.fOQ,C.fOR,C.fOS,C.fGj,C.ft2,C.ft1,C.fPh,C.e_q,C.e_o,C.f4c,C.cdg,C.cdi,C.fVV,C.deB,C.deD,C.fVU,C.fVS,C.fYg,C.fLV,C.deb,C.fEj,C.fEk,C.ciO,C.ciP,C.ciN,C.ciD,C.ciE,C.ciA,C.ciB,C.ciC,C.cj4,C.cj_,C.ciV,C.ciW,C.ciY,C.cj0,C.cj2,C.fMx,C.ciI,C.ciL,C.ciM,C.ciS,C.ciT,C.fPo,C.fOv,C.ciH,C.ciF,C.fMr,C.fvQ,C.ciy,C.f1C,C.fyQ,C.eEl,C.eAL,C.eAM,C.eCl,C.eC9,C.eCa,C.eA8,C.eE6,C.eE7,C.eE8,C.ezx,C.eBP,C.eBR,C.eBr,C.eBo,C.eAH,C.eAI,C.eBy,C.ezz,C.eBK,C.eBL,C.eBJ,C.eBN,C.eBM,C.eC4,C.eC5,C.eC7,C.eC0,C.ezS,C.ezP,C.eCe,C.ezH,C.eE5,C.eyf,C.ezK,C.ezJ,C.eyY,C.ez2,C.ez0,C.eyZ,C.eEd,C.eEe,C.eEf,C.eEc,C.eDK,C.eDJ,C.eDD,C.eDF,C.eDv,C.eE3,C.eE1,C.eyn,C.eyj,C.eAF,C.ez6,C.eyy,C.eyx,C.eyU,C.eyV,C.eA6,C.ez8,C.ezc,C.eBY,C.eDw,C.eDx,C.eDy,C.eDz,C.ezB,C.ezC,C.ezD,C.eB7,C.eA2,C.ezV,C.eA1,C.eBh,C.eBi,C.eD4,C.eD6,C.eDq,C.eDs,C.eD7,C.eD8,C.ez4,C.eAK,C.eAJ,C.eDU,C.ezs,C.ezk,C.ezl,C.ezo,C.ezp,C.eBm,C.eAq,C.eAr,C.eAs,C.eAt,C.eAu,C.eAv,C.eAw,C.eAx,C.eAy,C.eAz,C.eAA,C.eCi,C.d6Z,C.d7_,C.eF0,C.fPe,C.fPn,C.fPd,C.fPj,C.flp,C.fYk,C.fYl,C.fYm,C.eEt,C.eEC,C.ey8,C.ey3,C.ey4,C.fJv,C.fJu,C.fJw,C.fJB,C.fJx,C.fJy,C.ffn,C.ffo,C.emn,C.cmw])
u(B.iG,[C.cLd,C.fdQ,C.fdV,C.fdW,C.fdR,C.fdS,C.fdT,C.fdJ,C.fdK,C.fdM,C.fdN,C.fe_,C.fdZ,C.fdP,C.fdO,C.fdX,C.fdY,C.fe2,C.fe3,C.fe1,C.cMz,C.cMD,C.cMB,C.cMr,C.cMs,C.cMu,C.cMn,C.cMo,C.cMv,C.cMm,C.cMl,C.cMk,C.cLO,C.cLN,C.cLQ,C.cLY,C.cLR,C.cLP,C.cLT,C.cLU,C.cLV,C.cLS,C.cLW,C.cM_,C.cM0,C.cM1,C.cM2,C.fE1,C.fE2,C.fE_,C.fE0,C.ehE,C.ehC,C.ehD,C.ehF,C.ehG,C.e49,C.fE5,C.fE6,C.fE9,C.fEa,C.fEd,C.fEe,C.emo,C.fM1,C.fM0,C.epm,C.epl,C.ep_,C.eoW,C.ep6,C.ep7,C.ep8,C.ep1,C.ep2,C.ep3,C.ep4,C.ep0,C.eoY,C.eoZ,C.epe,C.epf,C.epd,C.epg,C.epc,C.epb,C.epa,C.epj,C.ep9,C.eoX,C.eq8,C.epX,C.epY,C.eq3,C.epZ,C.eq0,C.eq_,C.eq7,C.eYR,C.eZe,C.eYA,C.eYB,C.eYy,C.eYz,C.eZk,C.eZj,C.eZi,C.eZn,C.eZm,C.eYp,C.eYt,C.eYo,C.eYn,C.eYk,C.eYm,C.eYl,C.eZW,C.eZP,C.eZN,C.eZQ,C.eZM,C.eZR,C.eZL,C.eZS,C.eZT,C.eZU,C.eZK,C.eZw,C.eZr,C.eZC,C.eZv,C.eZG,C.eZu,C.eZH,C.eZt,C.eZI,C.eZs,C.eZb,C.eZa,C.eZc,C.eZ9,C.eZd,C.eZ3,C.eZ2,C.eZ4,C.eZ1,C.eZ0,C.eZ_,C.eY7,C.eY2,C.eYh,C.eYc,C.eYi,C.eYb,C.eYj,C.eYa,C.eZ6,C.eYV,C.eYU,C.eYW,C.eYT,C.eYX,C.eYS,C.eZf,C.eZq,C.eZp,C.eYH,C.fP1,C.fP3,C.fP7,C.fHm,C.fJN,C.fJL,C.fJM,C.f5p,C.f5q,C.f5m,C.f5g,C.f5f,C.f5i,C.f5j,C.f55,C.f56,C.f58,C.f59,C.f5a,C.f57,C.f5c,C.f5D,C.f5E,C.f5C,C.f5F,C.f5B,C.f5A,C.f5z,C.f5J,C.f5y,C.f5x,C.f5w,C.f5M,C.f5v,C.f5N,C.f5u,C.f5t,C.f5d,C.f5e,C.f5s,C.f5r,C.f4Z,C.f5_,C.f50,C.f51,C.f4Y,C.f53,C.f54,C.dpd,C.dpf,C.dpi,C.dpj,C.dph,C.dpg,C.fIu,C.fGk,C.cdh,C.cdj,C.deu,C.dez,C.deA,C.dey,C.dex,C.deC,C.dew,C.dev,C.deE,C.fVR,C.dlf,C.dlg,C.dlh,C.fEh,C.fEi,C.cj5,C.ey9,C.eya,C.eyb,C.eyc,C.fvO,C.fvP,C.dY9,C.dY8,C.dbq,C.dbp,C.eEn,C.eEm,C.eAN,C.eDt,C.eEj,C.eCj,C.eE9,C.eEa,C.eEk,C.eBs,C.ezv,C.ezw,C.eBQ,C.eBq,C.eBn,C.eBp,C.eBt,C.eBu,C.eBv,C.eBw,C.eBx,C.eBz,C.ezA,C.eBC,C.eBD,C.eBE,C.eBF,C.eBG,C.eBH,C.eBB,C.eBO,C.eC1,C.eC_,C.eC8,C.eBA,C.ezQ,C.ezR,C.ezT,C.eCb,C.eCf,C.eyu,C.ezO,C.ezM,C.eCn,C.ezI,C.eCm,C.ezy,C.eA9,C.eE4,C.eDu,C.eyv,C.eys,C.eyi,C.eye,C.eyg,C.ezL,C.eyX,C.ez1,C.ez_,C.eyW,C.eBZ,C.eEg,C.eDG,C.eDB,C.eDC,C.eDE,C.eAD,C.eAC,C.eE2,C.eyl,C.eym,C.eyo,C.eyp,C.eyt,C.eyk,C.eCk,C.eEb,C.eAG,C.ez5,C.eyh,C.eA7,C.eyq,C.eyz,C.eyA,C.eyB,C.eyM,C.eyP,C.eyQ,C.eyR,C.eyS,C.eyT,C.eyC,C.eyD,C.eyE,C.eyF,C.eyG,C.eyH,C.eyI,C.eyJ,C.eyK,C.eyL,C.eyN,C.eyO,C.eA5,C.eA4,C.eA3,C.eyr,C.ez9,C.ez7,C.eza,C.ezb,C.ezN,C.eBU,C.eBV,C.eBS,C.eBT,C.eDA,C.ezF,C.ezE,C.eB6,C.eB5,C.eB8,C.eB4,C.eB9,C.eB3,C.eBa,C.eB2,C.eBb,C.eB1,C.eBc,C.eB0,C.eBd,C.eB_,C.eBe,C.eAZ,C.eAS,C.eAT,C.eAU,C.eAR,C.eAV,C.eAQ,C.eAW,C.eAP,C.eAX,C.eAO,C.eAY,C.eA_,C.eA0,C.ezU,C.ezW,C.ezX,C.ezY,C.ezZ,C.eEh,C.eEi,C.eBg,C.eBf,C.eBj,C.eCG,C.eCH,C.eCI,C.eCT,C.eD3,C.eDe,C.eDl,C.eDm,C.eDn,C.eDo,C.eDp,C.eCJ,C.eCK,C.eCL,C.eCM,C.eCN,C.eCO,C.eCP,C.eCQ,C.eCR,C.eCS,C.eCU,C.eCV,C.eCW,C.eCX,C.eCY,C.eCZ,C.eD_,C.eD0,C.eD1,C.eCw,C.eD2,C.eCE,C.eCD,C.eD5,C.eCC,C.eCs,C.eDr,C.eCB,C.eCr,C.eCp,C.eCA,C.eCq,C.eCo,C.eD9,C.eCz,C.eDa,C.eDb,C.eDc,C.eDd,C.eCy,C.eDf,C.eDg,C.eDh,C.eCx,C.eDi,C.eCv,C.eDj,C.eCu,C.eDk,C.eCt,C.ez3,C.eDN,C.eDM,C.eDO,C.eDL,C.eAc,C.eAb,C.eAd,C.eAa,C.eDY,C.eDT,C.eDX,C.eDP,C.eDQ,C.eDR,C.eDS,C.eDV,C.eDW,C.eE0,C.ezu,C.ezh,C.ezi,C.ezj,C.ezg,C.ezn,C.ezm,C.ezf,C.eze,C.ezq,C.ezd,C.ezr,C.eBl,C.eBk,C.eAp,C.eAo,C.eAn,C.eAm,C.eAl,C.eAk,C.eAj,C.eAi,C.eAf,C.eAh,C.eAg,C.eAe,C.eAB,C.eCg,C.eCh,C.d70,C.d7p,C.d7q,C.d6V,C.d6U,C.d6Y,C.d6W,C.d6X,C.eEY,C.eEO,C.eEX,C.eEP,C.eEQ,C.eEK,C.eEL,C.eEM,C.eEN,C.eF_,C.fPk,C.fPl,C.fPm,C.eEq,C.eEr,C.eEs,C.eEv,C.eEw,C.eEz,C.eEA,C.eEy,C.eEB,C.eEx,C.eEp,C.eEo,C.eED,C.eEE,C.eEG,C.eEH,C.ey7,C.ey6,C.ey2,C.ey5,C.eEJ,C.eEI,C.fJA,C.fJz,C.eml,C.emm])
t(C.aSB,B.M)
u(B.lA,[C.a4k,C.ay8,C.awN,C.xS,C.xV,C.l4,C.tA,C.BN,C.rK,C.wf,C.asB,C.J9,C.as2,C.v1,C.mO,C.hI,C.a98])
u(C.bRo,[C.cDk,C.bRp])
u(C.cmq,[C.cmu,C.atG])
t(C.cmt,C.cmo)
t(C.cms,C.cmn)
t(C.cmv,C.cms)
t(C.cmr,C.cmp)
t(C.cml,C.cmm)
t(C.bbx,B.p3)
t(C.cwR,B.awf)
t(C.a8V,B.xF)
u(B.af,[C.a1q,C.Z6,C.Z4,C.ar9,C.Wd,C.We,C.a0p,C.a0W,C.a0V,C.aF2,C.a_h,C.NS,C.ZP,C.a_9,C.ap6,C.aJW,C.Vv,C.aAB,C.a8d,C.Ol,C.azX,C.Ka,C.a01,C.Wp,C.Wq,C.aFq,C.as7,C.a8e])
u(B.ah,[C.aKg,C.ayH,C.ayD,C.aES,C.aF8,C.aFb,C.aGA,C.aIx,C.aIw,C.aN9,C.aCy,C.aME,C.aAW,C.bhy,C.aMp,C.aOr,C.aMD,C.bfk,C.aN7,C.aNk,C.aLl,C.be5,C.aNl,C.aFt,C.bm1,C.aFr,C.aFu,C.blL])
u(B.aw,[C.ayF,C.adL,C.ad9,C.bkN,C.adO,C.aft,C.b27,C.buh,C.b2s,C.bni,C.bsQ,C.b0m,C.b2v,C.adR,C.ae7,C.b2t,C.J8,C.b0p,C.bel,C.Q1,C.Kg,C.bj7,C.bj6,C.bwI])
u(B.HE,[C.bdN,C.bvG,C.aKE,C.bgy,C.btd])
u(B.mf,[C.bdM,C.bah,C.bta,C.bdj,C.bgX,C.bje,C.bg0,C.bgT,C.bgA,C.bpD,C.bbp,C.bb3,C.bwE,C.btD,C.bsM,C.bfU,C.b2q,C.brG,C.bsJ])
t(C.blI,C.aN9)
t(C.bl4,C.aME)
t(C.bkP,C.aMp)
t(C.bw8,C.aOr)
t(C.bl0,C.aMD)
t(C.blG,C.aN7)
t(C.bz0,C.aNk)
t(C.aFs,C.bz0)
t(C.be6,C.aLl)
t(C.aFv,C.aNl)
t(C.bwu,B.j0)
t(C.a97,B.kC)
t(C.cmy,C.b4b)
t(C.aiK,C.a3n)
u(B.Y3,[C.aSr,C.aTY])
t(C.axI,C.aSr)
w(C.aN9,B.cg)
w(C.aME,B.cg)
w(C.aMp,B.cg)
w(C.aMD,B.cg)
w(C.aN7,B.cg)
w(C.aOr,B.cg)
w(C.aLl,B.eQ)
w(C.aNk,B.cg)
v(C.bz0,B.eF)
w(C.aNl,B.cg)})()
B.j1(b.typeUniverse,JSON.parse('{"aTa":{"hP":["aTa"]},"o8":{"aTa":[],"hP":["aTa"]},"aSB":{"M":["Sh"],"M.E":"Sh"},"bbx":{"p3":[]},"a8V":{"xF":[],"ou":[]},"a1q":{"af":[],"v":[]},"aKg":{"ah":["a1q"]},"Z6":{"af":[],"v":[]},"Z4":{"af":[],"v":[]},"ayH":{"ah":["Z6"]},"ayD":{"ah":["Z4"]},"ayF":{"aw":[],"v":[]},"ar9":{"af":[],"v":[]},"aES":{"ah":["ar9"]},"adL":{"aw":[],"v":[]},"ad9":{"aw":[],"v":[]},"adO":{"aw":[],"v":[]},"aft":{"aw":[],"v":[]},"bkN":{"aw":[],"v":[]},"Wd":{"af":[],"v":[]},"aF8":{"ah":["Wd"]},"b27":{"aw":[],"v":[]},"bdN":{"aC":[]},"bdM":{"aC":[]},"bvG":{"aC":[]},"bah":{"aC":[]},"bta":{"aC":[]},"We":{"af":[],"v":[]},"aFb":{"ah":["We"]},"bdj":{"aC":[]},"a0p":{"af":[],"v":[]},"aGA":{"ah":["a0p"]},"bgX":{"aC":[]},"a0W":{"af":[],"v":[]},"a0V":{"af":[],"v":[]},"aF2":{"af":[],"v":[]},"a_h":{"af":[],"v":[]},"aIx":{"ah":["a0W"]},"aIw":{"ah":["a0V"]},"blI":{"ah":["aF2"]},"bje":{"aC":[]},"aCy":{"ah":["a_h"]},"buh":{"aw":[],"v":[]},"b2s":{"aw":[],"v":[]},"bni":{"aw":[],"v":[]},"NS":{"af":[],"v":[]},"ZP":{"af":[],"v":[]},"bl4":{"ah":["NS"]},"bsQ":{"aw":[],"v":[]},"bg0":{"aC":[]},"b0m":{"aw":[],"v":[]},"aAW":{"ah":["ZP"]},"a_9":{"af":[],"v":[]},"bhy":{"ah":["a_9"]},"bgT":{"aC":[]},"bgA":{"aC":[]},"bpD":{"aC":[]},"bbp":{"aC":[]},"bb3":{"aC":[]},"bwE":{"aC":[]},"btD":{"aC":[]},"bsM":{"aC":[]},"bfU":{"aC":[]},"ap6":{"af":[],"v":[]},"b2v":{"aw":[],"v":[]},"bkP":{"ah":["ap6"]},"adR":{"aw":[],"v":[]},"ae7":{"aw":[],"v":[]},"aJW":{"af":[],"v":[]},"Vv":{"af":[],"v":[]},"J8":{"aw":[],"v":[]},"aAB":{"af":[],"v":[]},"a8d":{"af":[],"v":[]},"b2t":{"aw":[],"v":[]},"b2q":{"aC":[]},"bw8":{"ah":["aJW"]},"aKE":{"aC":[]},"bl0":{"ah":["Vv"]},"bfk":{"ah":["aAB"]},"blG":{"ah":["a8d"]},"b0p":{"aw":[],"v":[]},"bgy":{"aC":[]},"brG":{"aC":[]},"bsJ":{"aC":[]},"azX":{"af":[],"v":[]},"Ka":{"af":[],"v":[]},"a01":{"af":[],"v":[]},"Kg":{"aw":[],"v":[]},"Ol":{"af":[],"v":[]},"aFs":{"ah":["Ol"],"eF":[]},"be6":{"ah":["azX"]},"bel":{"aw":[],"v":[]},"be5":{"ah":["Ka"]},"Q1":{"aw":[],"v":[]},"aFv":{"ah":["a01"]},"btd":{"aC":[]},"bj7":{"aw":[],"v":[]},"bj6":{"aw":[],"v":[]},"Wp":{"af":[],"v":[]},"Wq":{"af":[],"v":[]},"aFq":{"af":[],"v":[]},"as7":{"af":[],"v":[]},"aFt":{"ah":["Wp"]},"bm1":{"ah":["Wq"]},"aFr":{"ah":["aFq"]},"bwu":{"j0":[]},"aFu":{"ah":["as7"]},"bwI":{"aw":[],"v":[]},"a8e":{"af":[],"v":[]},"blL":{"ah":["a8e"]},"a97":{"kC":["fv<eW>"],"ko":["fv<eW>"]},"aiK":{"a3n":[]},"aSr":{"jd":[],"fi":[]},"axI":{"jd":[],"fi":[]},"aTY":{"jd":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("M1"),U:w("vN<qe>"),bz:w("u"),M:w("dD<m>"),bo:w("jM"),g7:w("MB"),gc:w("aB<iE?>"),bq:w("aB<~>"),cc:w("MN"),fS:w("Eh"),an:w("Ik"),bm:w("O<Sh>"),X:w("O<a3v>"),f3:w("O<aTa>"),aK:w("O<nl>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lN>"),d5:w("O<aB<bz<G,+icon3d,picture(m?,m?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<ns>"),cd:w("O<ai<jz>>"),ez:w("O<a8<m,aD>>"),d:w("O<a8<m,@>>"),B:w("O<mK>"),h:w("O<jz>"),gE:w("O<zR>"),k:w("O<oA>"),g:w("O<lV>"),D:w("O<i5>"),u:w("O<eP>"),m:w("O<v1>"),i:w("O<hI>"),aC:w("O<a8v>"),o:w("O<zS>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<h_>"),cR:w("O<iZ>"),J:w("O<jp>"),gx:w("O<pp<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(J,J)>"),ek:w("O<+(G,m)>"),n:w("O<+(G,G)>"),r:w("O<cW>"),s:w("O<m>"),aS:w("O<j0>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<ba_>"),bx:w("O<aG3>"),gz:w("O<afD>"),x:w("O<J>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<G?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oA>"),R:w("ai<i5>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bz<G,+icon3d,picture(m?,m?)>"),P:w("a8<m,@>"),f:w("a8<@,@>"),gI:w("a8<G,+icon3d,picture(m?,m?)>"),bR:w("N<hI,v>"),eC:w("N<nY,m>"),cT:w("N<jT,D>"),dv:w("N<m,m>"),f0:w("N<m,v>"),gN:w("N<G,pS>"),gh:w("N<mO,jB<mO>>"),w:w("iB"),ei:w("iE"),g2:w("rA"),fB:w("ET"),b6:w("zR"),gX:w("a8n"),dt:w("lt"),ea:w("oA"),bt:w("lV"),I:w("i5"),F:w("eP"),fO:w("mO"),ff:w("v1"),fP:w("hI"),Q:w("wf"),dO:w("as3"),a:w("cu"),C:w("aD"),dw:w("atH"),di:w("a98"),Y:w("eW"),fz:w("+(m,m)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("Fo"),dB:w("dw<t>"),bJ:w("dw<m>"),_:w("e3<m>"),N:w("m"),fw:w("qe"),bO:w("au"),K:w("bp<t>"),b:w("bp<J>"),E:w("dK"),W:w("bT<m>"),ac:w("bT<G>"),ex:w("jW<lV>"),cI:w("jW<m>"),cl:w("jW<J>"),b4:w("Z<lq>"),a8:w("Z<mk>"),fR:w("Z<+(m,m)>"),co:w("ef<t>"),l:w("v"),b2:w("c_<~>"),ev:w("qh<dY>"),dT:w("bj<~>"),q:w("mt"),y:w("R"),gR:w("J"),z:w("@"),S:w("G"),at:w("bb?"),gw:w("ai<a8<m,@>>?"),aT:w("ai<i5>?"),c:w("ai<@>?"),aP:w("iE?"),af:w("i5?"),go:w("b2x?"),a6:w("a8w?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dK,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_D=new B.bM(A.ay,null,null,H.aqQ,null)
D.b_M=new B.d9(0,-0.15)
D.b_O=new B.d9(0.62,0)
D.b_R=new B.d9(-0.35,-0.45)
D.b00=new B.d9(0.9,-0.85)
D.b1W=new B.bh(H.TF,H.TF,A.fE,A.fE)
D.b2a=new B.ay(A.b6,1,A.r,-1)
D.bnz=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b2m=new B.ay(D.bnz,1,A.r,-1)
D.b2y=new B.ay(A.aD,1.5,A.r,-1)
D.b2D=new B.ay(A.b6,1.6,A.r,-1)
D.b2T=new B.ay(A.aD,1.4,A.r,-1)
D.b4e=new B.o(null,null,null,null,null,K.HF,A.a6)
D.c4b=new B.a9(A.a5,A.a8,A.x,G.a4V,null,null)
D.b4m=new B.o(null,null,null,null,null,D.c4b,A.a6)
D.adm=new B.o(A.av,null,null,A.tu,null,null,A.n)
D.bgB=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bnw=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d2B=w([D.bgB,D.bnw],x.O)
D.eu8=new B.c2(A.A,0.5,A.x,null,0,D.d2B,null,null)
D.b4F=new B.o(null,null,null,null,null,D.eu8,A.a6)
D.Yn=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b38=new B.bH(Q.vC,A.a0,A.a0,A.a0)
D.b4H=new B.o(D.Yn,null,D.b38,null,null,null,A.n)
D.c5X=new B.a9(A.a5,A.a8,A.x,A.Rj,null,null)
D.b4O=new B.o(null,null,null,null,null,D.c5X,A.a6)
D.aeY=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b4R=new B.o(D.aeY,null,null,A.r5,null,null,A.n)
D.b4V=new B.o(A.jw,null,null,null,null,null,A.a6)
D.b4Y=new B.o(A_.ag9,null,H.acY,A.mt,null,null,A.n)
D.ER=new B.o(A.dF,null,null,null,null,null,A.a6)
D.b54=new B.o(null,null,null,null,null,E.wA,A.a6)
D.d7S=w([E.ah8,A.c1],x.O)
D.c5y=new B.a9(A.b0,A.b5,A.x,D.d7S,null,null)
D.b58=new B.o(null,null,null,A.mt,null,D.c5y,A.n)
D.djd=w([A.bl,A.dF,A.kd],x.O)
D.a2V=new B.a9(A.ay,A.aE,A.x,D.djd,null,null)
D.b5l=new B.o(null,null,null,null,null,D.a2V,A.n)
D.b5m=new B.o(D.aeY,null,null,A.kY,null,null,A.n)
D.cxm=w([A.d7,A.bl],x.O)
D.c5p=new B.a9(A.ay,A.aE,A.x,D.cxm,null,null)
D.b5q=new B.o(null,null,null,null,null,D.c5p,A.n)
D.b5A=new B.o(null,null,null,null,null,G.uI,A.a6)
D.b5V=new B.o(A.aha,null,null,null,null,null,A.a6)
D.bhB=new B.u(0.5647058823529412,0,0,0,A.q)
D.adw=new B.ac(0,A.G,D.bhB,A.J9,28)
D.b85=new B.aXm()
D.b8E=new C.cwR()
D.b8Q=new C.bbx()
D.ae1=new B.ce(A.A,null,null,A.a2J,null)
D.bbw=new B.fk(null,null,null,null,null,E.nh,null,null,null,null)
D.b9p=new B.ce(A.A,null,null,D.bbw,null)
D.bPx=new B.ae(A.e5,28,A.c,null,null,null)
D.b9U=new B.ce(A.A,null,null,D.bPx,null)
D.bbt=new B.fk(2,null,null,null,null,A.c2,null,null,null,null)
D.bah=new B.ce(A.A,null,null,D.bbt,null)
D.bPR=new B.ae(K.OU,40,A.bz,null,null,null)
D.bai=new B.ce(A.A,null,null,D.bPR,null)
D.bcn=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bcz=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bd1=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bdb=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bdN=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.be3=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.be5=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.LS=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bey=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.beG=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.afh=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bfx=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bgq=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.afw=new B.u(1,1,1,0.9725490196078431,A.q)
D.bgK=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bgZ=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bh1=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bhi=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bhH=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bjl=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Y7=new B.u(0.8509803921568627,0,0,0,A.q)
D.bjv=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bjC=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ags=new B.u(0.6,0,0,0,A.q)
D.agu=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.blf=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tP=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.blJ=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bma=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bmA=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ahl=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Yy=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Br=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Mq=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jt=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ahP=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.YI=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bqk=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bqP=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.br4=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.Z6=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bsk=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.y3=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bsS=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.btc=new B.hO(A.aY,!0,null,null)
D.ftF=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUz=new B.y("Bio link",null,D.ftF,null,null,null,null,null,null,null,null,null)
D.bab=new B.ce(A.A,null,null,D.fUz,null)
D.btr=new B.hO(A.B4,!0,D.bab,null)
D.MS=new C.a4k(0,"none")
D.aj2=new C.a4k(1,"deflate")
D.aj3=new C.a4k(2,"bzip2")
D.buq=new B.ku(0.165,0.84,0.44,1)
D.d8b=w([A.cd,A.dH,A.aD],x.O)
D.c4G=new B.a9(A.ay,A.aE,A.x,D.d8b,null,null)
D.b4j=new B.o(null,null,null,null,null,D.c4G,A.n)
D.bYW=new B.ae(A.f0,null,A.ac,null,null,null)
D.baR=new B.ce(A.A,null,null,D.bYW,null)
D.buX=new B.l0(D.b4j,A.bh,D.baR,null)
D.bqz=new B.u(0.058823529411764705,1,1,1,A.q)
D.dbB=w([A.bC,A.re,A.re,D.bqz],x.O)
D.cON=w([0,0.32,0.7,1],x.x)
D.c5f=new B.a9(A.ay,A.aE,A.x,D.dbB,D.cON,null)
D.b48=new B.o(null,null,null,null,null,D.c5f,A.n)
D.bv2=new B.l0(D.b48,A.bh,null,null)
D.bwa=new B.mB(1,1,null,null,null,A.bo,null)
D.bwd=new B.mB(1,null,null,null,null,D.YI,null)
D.bwH=new B.bb(125e4)
D.bwN=new B.bb(17e4)
D.bwX=new B.bb(35964e8)
D.bx3=new B.bb(55e4)
D.bx7=new B.bb(68e4)
D.bxy=new B.ik(0,0,0,5)
D.bxO=new B.Q(0,16,16,0)
D.bxY=new B.Q(0,36,0,36)
D.by5=new B.Q(0,54,0,0)
D.byc=new B.Q(10,0,10,3)
D.byn=new B.ik(10,16,10,10)
D.byz=new B.Q(10,6,4,6)
D.byC=new B.Q(10,8,10,6)
D.ak2=new B.Q(11,8,11,11)
D.byH=new B.Q(12,0,12,24)
D.byU=new B.Q(12,12,12,4)
D.byX=new B.Q(12,12,8,12)
D.bzc=new B.Q(12,8,8,12)
D.bzB=new B.Q(14,14,14,0)
D.bzG=new B.Q(14,14,14,90)
D.bA_=new B.Q(16,10,16,16)
D.bA0=new B.Q(16,10,16,20)
D.akO=new B.Q(16,6,16,28)
D.bAz=new B.Q(18,0,18,10)
D.bAB=new B.Q(18,0,18,30)
D.bAD=new B.Q(18,10,18,12)
D.bAE=new B.Q(18,10,18,14)
D.bAY=new B.Q(18,16,14,18)
D.bB2=new B.Q(18,18,18,12)
D.bB8=new B.Q(18,26,18,12)
D.bBd=new B.Q(18,34,18,34)
D.bBe=new B.Q(18,4,18,14)
D.bBj=new B.Q(18,8,18,24)
D.bBC=new B.Q(20,16,14,4)
D.bBH=new B.Q(20,18,12,4)
D.bBM=new B.Q(20,20,12,20)
D.bBP=new B.Q(20,22,20,20)
D.bBU=new B.Q(20,6,20,6)
D.bC3=new B.Q(22,18,22,18)
D.bCb=new B.Q(22,24,22,0)
D.bCe=new B.Q(22,24,22,4)
D.bCm=new B.Q(22,60,22,22)
D.bCs=new B.Q(24,24,24,22)
D.bCC=new B.Q(26,10,60,10)
D.bCK=new B.Q(28,44,28,44)
D.bD0=new B.Q(32,44,32,44)
D.bD8=new B.Q(38,30,38,20)
D.bDd=new B.Q(4,0,0,6)
D.bDp=new B.ik(4,4,4,4)
D.bDS=new B.ik(6,5,6,5)
D.bDX=new B.Q(6,6,8,6)
D.bE7=new B.Q(8,14,8,14)
D.bE8=new B.Q(8,22,8,22)
D.bEh=new B.Q(8,6,12,6)
D.bEq=new B.Q(8,8,8,4)
D.alK=new B.Q(9,9,9,6)
D.bEC=new B.ik(2.5,2.5,2.5,2.5)
D.bED=new B.Q(10.5,0,10.5,0)
D.bEE=new B.Q(7,1.5,7,1.5)
D.d_r=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bEU=new B.xs(null,null,D.d_r,A.B3)
D.cXg=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bEV=new B.xs(null,null,D.cXg,A.B3)
D.aUs=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.y("WORD DESIGN",null,D.aUs,null,null,null,null,null,null,null,null,null)
D.bFs=new B.bA(1,A.bd,D.fTQ,null)
D.fTu=new B.y("Slides database",null,Ab.te,null,null,null,null,null,null,null,null,null)
D.fQI=new B.y("Admin only \xb7 keep as many as you like",null,V.aTW,null,null,null,null,null,null,null,null,null)
D.drY=w([D.fTu,A.bF,D.fQI],x.p)
D.btS=new B.fj(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.drY,null)
D.bFv=new B.bA(1,A.bd,D.btS,null)
D.fKW=new B.y("NGMY logo",null,A.fx,null,null,null,null,null,null,null,null,null)
D.bFy=new B.bA(1,A.bd,D.fKW,null)
D.frl=new B.F(!0,A.ac,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVV=new B.y("TALK TO THE EDITOR",null,D.frl,null,null,null,null,null,null,null,null,null)
D.bFR=new B.bA(1,A.bd,D.fVV,null)
D.fED=new B.y("Tell the AI what to change",null,Ab.te,null,null,null,null,null,null,null,null,null)
D.bGa=new B.bA(1,A.bd,D.fED,null)
D.bHm=new B.E7(!0,"video/mp4")
D.fpx=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCy=new B.y("Move presentations between devices",null,D.fpx,null,null,null,!1,null,null,1,null,null)
D.bHq=new B.qD(A.e3,A.a5,A.f,D.fCy,null)
D.fDN=new B.y("Edit in Slides",null,A.j3,null,null,null,null,null,null,null,null,null)
D.bHr=new B.qD(A.e3,A.A,A.f,D.fDN,null)
D.bHG=new B.ds(1,A.cp,D.bHr,null)
D.a18=new B.a0(60988,"MaterialIcons",!1)
D.bL4=new B.a0(61352,"MaterialIcons",!1)
D.anm=new B.a0(61531,"MaterialIcons",!1)
D.bMf=new B.a0(63062,"MaterialIcons",!1)
D.bMm=new B.a0(63109,"MaterialIcons",!1)
D.bMz=new B.a0(63206,"MaterialIcons",!1)
D.ao7=new B.a0(63238,"MaterialIcons",!1)
D.bMP=new B.a0(63338,"MaterialIcons",!1)
D.a1G=new B.a0(63365,"MaterialIcons",!1)
D.a1H=new B.a0(63367,"MaterialIcons",!1)
D.a1I=new B.a0(63368,"MaterialIcons",!1)
D.aoj=new B.a0(63384,"MaterialIcons",!1)
D.bN6=new B.a0(63525,"MaterialIcons",!1)
D.bNa=new B.a0(63568,"MaterialIcons",!1)
D.bNw=new B.a0(983072,"MaterialIcons",!1)
D.bNU=new B.a0(983271,"MaterialIcons",!0)
D.aps=new B.a0(983965,"MaterialIcons",!1)
D.apt=new B.a0(983966,"MaterialIcons",!1)
D.bOQ=new B.a0(984592,"MaterialIcons",!1)
D.bP9=new B.ae(A.um,16,A.aB,null,null,null)
D.apD=new B.ae(A.ph,18,A.c,null,null,null)
D.bPy=new B.ae(A.C6,18,O.lA,null,null,null)
D.bQd=new B.ae(A.jB,11,null,null,null,null)
D.bQo=new B.ae(A.a1p,null,A.es,null,null,null)
D.bQW=new B.ae(A.rC,18,A.aB,null,null,null)
D.bR1=new B.ae(A3.Cl,14,null,null,null,null)
D.bR2=new B.ae(A.e9,28,A.c6,null,null,null)
D.bRe=new B.ae(A.qw,20,A.c,null,null,null)
D.bRl=new B.ae(A.yY,null,null,null,null,null)
D.bRr=new B.ae(A.jA,18,A.hg,null,null,null)
D.bRw=new B.ae(A.km,null,null,null,null,null)
D.bMh=new B.a0(63065,"MaterialIcons",!1)
D.bS8=new B.ae(D.bMh,15,A.c,null,null,null)
D.bMn=new B.a0(63113,"MaterialIcons",!1)
D.bSe=new B.ae(D.bMn,null,A.ac,null,null,null)
D.bSC=new B.ae(A.uk,22,A.bL,null,null,null)
D.bSX=new B.ae(A.rA,18,null,null,null,null)
D.bT2=new B.ae(A.Cp,12,A.c,null,null,null)
D.bOs=new B.a0(983687,"MaterialIcons",!1)
D.bTe=new B.ae(D.bOs,null,A.bl,null,null,null)
D.bTn=new B.ae(A.hy,null,A.bl,null,null,null)
D.bTG=new B.ae(A.pl,22,A.c,null,null,null)
D.bTK=new B.ae(A.cy,13,A.c,null,null,null)
D.bTQ=new B.ae(A.e9,26,A.ax,null,null,null)
D.bTU=new B.ae(A.rF,26,A.c,null,null,null)
D.P6=new B.ae(A.jB,8,A.c,null,null,null)
D.bUe=new B.ae(A.ph,40,A.c,null,null,null)
D.bUf=new B.ae(A.bK1,null,null,null,null,null)
D.bUj=new B.ae(A.uz,20,null,null,null,null)
D.bOr=new B.a0(983683,"MaterialIcons",!1)
D.bUt=new B.ae(D.bOr,null,A.b1,null,null,null)
D.bUu=new B.ae(A.jB,16,A.bl,null,null,null)
D.bUP=new B.ae(A.pi,null,null,null,null,null)
D.aqd=new B.ae(A.wk,22,A.c,null,null,null)
D.bUV=new B.ae(A.e5,17,A.c,null,null,null)
D.aqe=new B.ae(A.jB,9,A.c,null,null,null)
D.bV_=new B.ae(A.wf,null,null,null,null,null)
D.bKi=new B.a0(57744,"MaterialIcons",!1)
D.bV6=new B.ae(D.bKi,null,null,null,null,null)
D.bV9=new B.ae(A.wf,16,null,null,null,null)
D.bP0=new B.a0(985181,"MaterialIcons",!1)
D.Hx=new B.ae(D.bP0,null,null,null,null,null)
D.bVl=new B.ae(A.km,16,A.bL,null,null,null)
D.bOk=new B.a0(983615,"MaterialIcons",!1)
D.bVn=new B.ae(D.bOk,12,A.c,null,null,null)
D.aqk=new B.ae(A.yK,16,null,null,null,null)
D.bVv=new B.ae(A.e5,21,A.c,null,null,null)
D.bVA=new B.ae(A.hy,17,A.c,null,null,null)
D.bVB=new B.ae(A.uk,null,null,null,null,null)
D.bVS=new B.ae(A.a2l,20,A.aB,null,null,null)
D.bW6=new B.ae(A.oi,22,E.nh,null,null,null)
D.bWe=new B.ae(A.qv,13,A.ac,null,null,null)
D.bWg=new B.ae(A.apf,20,A.aB,null,null,null)
D.bK_=new B.a0(57495,"MaterialIcons",!1)
D.bWl=new B.ae(D.bK_,null,null,null,null,null)
D.bWp=new B.ae(A.oj,18,A.c,null,null,null)
D.bWM=new B.ae(A.uD,28,A.c,null,null,null)
D.bWX=new B.ae(D.ao7,null,A.aD,null,null,null)
D.bWY=new B.ae(A.qw,22,A.c,null,null,null)
D.aqt=new B.ae(A.a14,16,null,null,null,null)
D.bXK=new B.ae(A.uk,32,A.c,null,null,null)
D.bYs=new B.ae(A.jh,22,A.c,null,null,null)
D.bYv=new B.ae(A.rF,22,A.ac,null,null,null)
D.aqJ=new B.ae(A.um,null,A.bU,null,null,null)
D.bZq=new B.ae(A.qq,18,null,null,null,null)
D.c_2=new B.ae(A.e5,18,A.bu,null,null,null)
D.a2M=new B.ae(A.cy,18,A.aB,null,null,null)
D.c_9=new B.ae(A.ap9,null,null,null,null,null)
D.c_A=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aUg,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.fhh=new B.F(!0,A.bM,null,null,null,null,null,A.cz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_S=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fhh,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.c0i=new B.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.d3F=w([A.dF,A.aD],x.O)
D.c2p=new B.a9(A.a5,A.a8,A.x,D.d3F,null,null)
D.c2A=new B.a9(A.b0,A.b5,A.Vq,A.axN,null,null)
D.bcR=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bhK=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.blg=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bfp=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cOP=w([D.bcR,D.bhK,D.blg,D.bfp],x.O)
D.c2T=new B.a9(A.ay,A.aE,A.x,D.cOP,A.I2,null)
D.ds6=w([A.cL,A.bD,A.b6],x.O)
D.c2V=new B.a9(A.b0,A.b5,A.Vq,D.ds6,null,null)
D.dtD=w([A.bl,A.cf],x.O)
D.c3_=new B.a9(A.a5,A.a8,A.x,D.dtD,null,null)
D.doj=w([A.hM,A.d1,A.aC],x.O)
D.c31=new B.a9(A.ay,A.aE,A.x,D.doj,null,null)
D.d9W=w([A.cQ,A.fg],x.O)
D.c35=new B.a9(A.a5,A.a8,A.x,D.d9W,null,null)
D.ds_=w([O.lA,A.d1],x.O)
D.aru=new B.a9(A.a5,A.a8,A.x,D.ds_,null,null)
D.bis=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.drX=w([D.bis,D.y3,A.c2],x.O)
D.c3a=new B.a9(A.a5,A.a8,A.x,D.drX,null,null)
D.d5o=w([A.bf,A.cT,A.ej],x.O)
D.c3b=new B.a9(A.ay,A.aE,A.x,D.d5o,null,null)
D.Pn=new B.a9(A.a5,A.a8,A.x,A.Ih,null,null)
D.brt=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cHM=w([D.brt,A.c2,A.jv],x.O)
D.arz=new B.a9(A.ay,A.aE,A.x,D.cHM,null,null)
D.dfA=w([A.tJ,A.az,D.Br],x.O)
D.c4d=new B.a9(A.a5,A.a8,A.x,D.dfA,null,null)
D.bsT=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bgp=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bmo=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d4u=w([D.bsT,D.bgp,D.bmo],x.O)
D.arA=new B.a9(A.a5,A.a8,A.x,D.d4u,null,null)
D.biu=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c6c=w([AA.aiH,D.biu],x.O)
D.c4m=new B.a9(A.b0,A.b5,A.x,D.c6c,null,null)
D.d2p=w([A.nf,A.bz],x.O)
D.c4q=new B.a9(A.b0,A.b5,A.x,D.d2p,null,null)
D.dkV=w([A.aD,A.dH],x.O)
D.c4x=new B.a9(A.a5,A.a8,A.x,D.dkV,null,null)
D.ahx=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.azy=w([D.ahx,D.jt,D.LS],x.O)
D.c5_=new B.a9(A.ay,A.aE,A.x,D.azy,null,null)
D.cHE=w([A.dv,A.dG],x.O)
D.c5a=new B.a9(A.b0,A.b5,A.x,D.cHE,null,null)
D.dhO=w([A.xM,A.Bj],x.O)
D.c5Z=new B.a9(A.a5,A.a8,A.x,D.dhO,null,null)
D.fMw=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c69=new B.pZ(null,D.fMw,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zk=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a6V=new C.l4(2,"elegantNavy")
D.hv9=w([A.Yw,D.jt,A.c2],x.O)
D.k_=new C.xS(0,"classic")
D.a6I=new C.jz("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a6V,4294967035,4279378237,4290283019,D.k_)
D.aJ2=new C.l4(3,"elegantGold")
D.bcm=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bdt=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.afZ=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.huC=w([D.bcm,D.bdt,D.afZ],x.O)
D.a6G=new C.jz("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aJ2,4294966515,4281016592,4289102906,D.k_)
D.dOV=new C.l4(22,"goldRibbon")
D.huy=w([A.Yw,D.jt,A.il],x.O)
D.a6z=new C.jz("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dOV,4294967035,4279378237,4291404327,D.k_)
D.dOW=new C.l4(23,"goldBaroque")
D.agG=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.huE=w([D.agG,A.az,A.jv],x.O)
D.a6A=new C.jz("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dOW,4294964964,4283053072,4292128567,D.k_)
D.dOY=new C.l4(4,"elegantEmerald")
D.beN=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bfO=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.huK=w([D.beN,D.bfO,A.il],x.O)
D.a6B=new C.jz("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dOY,4294376440,4279122734,4291404327,D.k_)
D.dOZ=new C.l4(5,"elegantBurgundy")
D.bk2=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.huR=w([D.bk2,A.af9,A.il],x.O)
D.a6E=new C.jz("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dOZ,4294965238,4283043359,4291404327,D.k_)
D.dOS=new C.l4(19,"goldFiligree")
D.My=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.huF=w([D.My,A.az,A.jv],x.O)
D.a6C=new C.jz("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dOS,4294966259,4279378237,4292128567,D.k_)
D.dOT=new C.l4(20,"goldLaurel")
D.brj=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.huS=w([A.LL,A.il,D.brj],x.O)
D.a6D=new C.jz("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dOT,4294966776,4282000405,4291404327,D.k_)
D.dOU=new C.l4(21,"goldCrest")
D.af0=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.brq=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.huH=w([D.af0,A.az,D.brq],x.O)
D.a6H=new C.jz("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dOU,4294965484,4283053072,4292128567,D.k_)
D.dOX=new C.l4(24,"goldStar")
D.bsK=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.huL=w([D.bsK,A.az,D.jt],x.O)
D.a6F=new C.jz("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dOX,4294966518,4279378237,4292128567,D.k_)
D.HH=w([D.a6I,D.a6G,D.a6z,D.a6A,D.a6B,D.a6E,D.a6C,D.a6D,D.a6H,D.a6F],x.h)
D.qH=new C.mO(0,"blank")
D.T0=new C.mO(1,"title")
D.mU=new C.mO(2,"titleContent")
D.e8x=new C.mO(3,"twoColumn")
D.Dw=new C.mO(4,"section")
D.e8y=new C.mO(5,"comparison")
D.IU=new C.mO(6,"flashcard")
D.IV=new C.mO(7,"quiz")
D.IW=new C.mO(8,"worksheet")
D.arV=w([D.qH,D.T0,D.mU,D.e8x,D.Dw,D.e8y,D.IU,D.IV,D.IW],B.at("O<mO>"))
D.aAF=w([Ap.XU,A.dG],x.O)
D.kO=w([A.c2,A.bL,A.i_,A.hX,D.Br],x.O)
D.dKP=new C.j9("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aAF,D.kO)
D.brE=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bk0=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d2C=w([D.brE,D.bk0],x.O)
D.dKG=new C.j9("confetti","Golden Confetti","Together we rise",D.d2C,D.kO)
D.d_x=w([A.nS,A.Xv],x.O)
D.dKH=new C.j9("crown","Crown of Glory","Built for our community",D.d_x,D.kO)
D.bgc=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bjE=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d6P=w([D.bgc,D.bjE],x.O)
D.uK=w([A.bM,A.aP,A.c,A.aN,A.al],x.O)
D.dKB=new C.j9("aurora","Aurora Gala","A brighter future, together",D.d6P,D.uK)
D.bli=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dhW=w([G.aeD,D.bli],x.O)
D.dKS=new C.j9("champagne","Champagne Toast","Cheers to every member",D.dhW,D.kO)
D.dKT=new C.j9("diamonds","Diamond Rain","Every member is a jewel",Y.aBm,D.uK)
D.bdi=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bj6=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dny=w([D.bdi,D.bj6],x.O)
D.dKw=new C.j9("starburst","Golden Starburst","Thank you!",D.dny,D.kO)
D.c6j=w([A.fc,A.xY],x.O)
D.aeN=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.QW=w([A.p2,A.ik,A.vW,A.nT,D.aeN],x.O)
D.dL_=new C.j9("balloons","Luxury Balloons","Let's celebrate",D.c6j,D.QW)
D.cZL=w([A.XI,A.w],x.O)
D.dKO=new C.j9("galaxy","Galaxy Spiral","The sky is not the limit",D.cZL,D.uK)
D.bpw=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.deh=w([A.jM,D.bpw],x.O)
D.dKJ=new C.j9("redcarpet","Red Carpet","Tonight we shine",D.deh,D.kO)
D.bn4=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bl3=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.diT=w([D.bn4,D.bl3],x.O)
D.dKy=new C.j9("coins","Gold Coin Rain","Every contribution counts",D.diT,D.kO)
D.dqk=w([A.dv,A.hW],x.O)
D.dKE=new C.j9("lanterns","Sky Lanterns","Lighting the way together",D.dqk,D.kO)
D.bhn=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cXC=w([A.y_,D.bhn],x.O)
D.dKA=new C.j9("hearts","Floating Hearts","Made with love",D.cXC,D.QW)
D.bdW=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.beU=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.drV=w([D.bdW,D.beU],x.O)
D.dKZ=new C.j9("petals","Rose Petals","Thank you, from our hearts",D.drV,D.QW)
D.bqx=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dnU=w([A.l5,D.bqx],x.O)
D.dKv=new C.j9("butterflies","Golden Butterflies","New beginnings",D.dnU,D.kO)
D.bmk=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cYG=w([D.bmk,A.w],x.O)
D.dKR=new C.j9("neon","Neon Night","Let's go!",D.cYG,D.uK)
D.biK=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dl6=w([A.Ma,D.biK],x.O)
D.dKU=new C.j9("disco","Disco Ball","Party time",D.dl6,D.uK)
D.bmV=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dkB=w([A.hM,D.bmV],x.O)
D.dKz=new C.j9("sunrise","Golden Sunrise","A new day for our community",D.dkB,D.kO)
D.dkc=w([A.pY,A.dG],x.O)
D.dKV=new C.j9("pearls","Ocean Pearls","Deep roots, bright future",D.dkc,D.uK)
D.bgj=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dkq=w([D.bgj,A.dG],x.O)
D.dKY=new C.j9("snow","Winter Gala","Warm wishes to all",D.dkq,D.uK)
D.bcv=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bdH=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dqM=w([D.bcv,D.bdH],x.O)
D.dKN=new C.j9("laurel","Laurel Victory","We did it together",D.dqM,D.kO)
D.bcl=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bjA=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cWB=w([D.bcl,D.bjA],x.O)
D.dKX=new C.j9("ribbons","Silk Ribbons","Elegance in every step",D.cWB,D.kO)
D.bkK=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cHB=w([G.Bq,D.bkK],x.O)
D.dKK=new C.j9("kente","Kente Pride","Proud of our roots",D.cHB,D.kO)
D.bnJ=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bqU=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d8z=w([D.bnJ,D.bqU],x.O)
D.dKF=new C.j9("trophy","Trophy Shine","Winners together",D.d8z,D.kO)
D.dkx=w([Aq.LY,A.w],x.O)
D.dKx=new C.j9("shooting","Shooting Stars","Make a wish",D.dkx,D.uK)
D.bcD=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ait=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dr4=w([D.bcD,D.ait],x.O)
D.dKL=new C.j9("bokeh","Golden Bokeh","Shine bright",D.dr4,D.kO)
D.bd3=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.df9=w([D.bd3,A.w],x.O)
D.dKD=new C.j9("orbits","Golden Orbits","Always moving forward",D.df9,D.kO)
D.bqy=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dbt=w([A.afU,D.bqy],x.O)
D.dKI=new C.j9("flowers","Blooming Garden","Growing together",D.dbt,D.QW)
D.bcP=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bdy=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dpM=w([D.bcP,D.bdy],x.O)
D.dKC=new C.j9("music","Music Party","Celebrate with us",D.dpM,D.uK)
D.bez=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.brm=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cXQ=w([D.bez,D.brm],x.O)
D.dKW=new C.j9("mandala","Royal Mandala","Harmony and unity",D.cXQ,D.kO)
D.dbz=w([G.Bq,D.ait],x.O)
D.dKQ=new C.j9("sparklers","Golden Sparklers","Light up the night",D.dbz,D.kO)
D.dKM=new C.j9("city","City Lights","The whole city celebrates",D.aAF,D.kO)
D.HQ=w([D.dKP,D.dKG,D.dKH,D.dKB,D.dKS,D.dKT,D.dKw,D.dL_,D.dKO,D.dKJ,D.dKy,D.dKE,D.dKA,D.dKZ,D.dKv,D.dKR,D.dKU,D.dKz,D.dKV,D.dKY,D.dKN,D.dKX,D.dKK,D.dKF,D.dKx,D.dKL,D.dKD,D.dKI,D.dKC,D.dKW,D.dKQ,D.dKM],B.at("O<j9>"))
D.eA6=new B.z("","No ring")
D.eQw=new B.z("platinum","Platinum")
D.eMA=new B.z("glow","Glow")
D.eDQ=new B.z("double","Double line")
D.eCJ=new B.z("framed","Gallery frame")
D.ezD=new B.z("rosegold","Rose gold")
D.eNp=new B.z("jewels","Jeweled")
D.eK0=new B.z("aurora","Aurora")
D.CM=w([D.eA6,A.TL,D.eQw,D.eMA,N.aPN,D.eDQ,A.aPL,D.eCJ,D.ezD,D.eNp,D.eK0],x.L)
D.cqQ=w([D.a6C,D.a6D,D.a6H,D.a6z,D.a6A,D.a6F],x.h)
D.bVJ=new B.ae(G.amX,16,null,null,null,null)
D.b7q=new B.vN(A.bj,D.bVJ,null,x.U)
D.bKr=new B.a0(58027,"MaterialIcons",!1)
D.bPf=new B.ae(D.bKr,16,null,null,null,null)
D.b7o=new B.vN(A.K,D.bPf,null,x.U)
D.bKs=new B.a0(58030,"MaterialIcons",!1)
D.bTl=new B.ae(D.bKs,16,null,null,null,null)
D.b7r=new B.vN(A.dV,D.bTl,null,x.U)
D.cx7=w([D.b7q,D.b7o,D.b7r],B.at("O<vN<qe>>"))
D.cES=w([A.Bv,A.ht],x.O)
D.cET=w([A.bf,A.be,A.ej],x.O)
D.QL=w([A.bL,A.hX,A.i_,A.az,A.nT],x.O)
D.cHH=w([A.c2,D.jt,D.LS],x.O)
D.cIe=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.exq=new B.z(4278913286,4280030216)
D.exI=new B.z(4279373061,4278518787)
D.exP=new B.z(4279898630,4278847235)
D.d7W=w([D.exq,D.exI,D.exP],x.n)
D.d3o=w(["\u265b","\u269c","\u2726"],x.s)
D.dOQ=new C.xU("Royal Onyx & Gold",D.d7W,4292128567,4294370209,4294965479,3874020544,D.d3o)
D.exd=new B.z(4278326799,4278598442)
D.exf=new B.z(4278395929,4278258953)
D.exm=new B.z(4278599728,4278327826)
D.dqb=w([D.exd,D.exf,D.exm],x.n)
D.cYy=w(["\u269c","\u2756","\u2727"],x.s)
D.dON=new C.xU("Imperial Emerald",D.dqb,4293050997,4294699968,4294180856,3872254170,D.cYy)
D.exg=new B.z(4278455076,4278918747)
D.exl=new B.z(4278587439,4278322714)
D.exz=new B.z(4279051376,4278455076)
D.dof=w([D.exg,D.exl,D.exz],x.n)
D.dfT=w(["\u2654","\u2726","\u2748"],x.s)
D.dOH=new C.xU("Sapphire Crown",D.dof,4291417834,4294967295,4294310143,3871986666,D.dfT)
D.exN=new B.z(4279894534,4283041554)
D.exZ=new B.z(4281008906,4279042307)
D.ey6=new B.z(4284221976,4279894534)
D.dui=w([D.exN,D.exZ,D.ey6],x.n)
D.cZU=w(["\u265b","\u2766","\u2726"],x.s)
D.dOJ=new C.xU("Ruby Throne",D.dui,4293378685,4294963145,4294964466,3874213833,D.cZU)
D.exH=new B.z(4279371039,4281995100)
D.exR=new B.z(4280092723,4278714896)
D.ey3=new B.z(4283045242,4279371039)
D.dqy=w([D.exH,D.exR,D.ey3],x.n)
D.doC=w(["\u2655","\u2756","\u2727"],x.s)
D.dOO=new C.xU("Amethyst Palace",D.dqy,4293314984,4294963421,4294702591,3873229802,D.doC)
D.exi=new B.z(4278519045,4280032287)
D.exA=new B.z(4279111184,4278321666)
D.exW=new B.z(4280492839,4278716426)
D.dn_=w([D.exi,D.exA,D.exW],x.n)
D.de3=w(["\u2726","\u25c6","\u2742"],x.s)
D.dOL=new C.xU("Obsidian & Platinum",D.dn_,4293256418,4294967295,4294638330,3872378836,D.de3)
D.exO=new B.z(4279896588,4282194463)
D.exX=new B.z(4280553487,4279043334)
D.ey4=new B.z(4283048488,4279896588)
D.ddw=w([D.exO,D.exX,D.ey4],x.n)
D.dso=w(["\u2766","\u273f","\u2727"],x.s)
D.dOI=new C.xU("Rose Gold Velvet",D.ddw,4293440672,4294960345,4294964979,3874214602,D.dso)
D.exj=new B.z(4278520340,4279180595)
D.exo=new B.z(4278718495,4278322443)
D.exL=new B.z(4279510591,4278520340)
D.cOw=w([D.exj,D.exo,D.exL],x.n)
D.deN=w(["\u269c","\u2736","\u2756"],x.s)
D.dOM=new C.xU("Midnight Brass",D.cOw,4291405148,4293975208,4294439914,3872837564,D.deN)
D.eyj=new B.z(4294703086,4293780428)
D.eyf=new B.z(4294307549,4293187253)
D.eyk=new B.z(4294966517,4293977807)
D.d1d=w([D.eyj,D.eyf,D.eyk],x.n)
D.dfd=w(["\u269c","\u265b","\u2726"],x.s)
D.dOP=new C.xU("Ivory Marble & Gold",D.d1d,4289760572,4286209048,4280951062,3863625518,D.dfd)
D.exu=new B.z(4278978566,4280555024)
D.exK=new B.z(4279504137,4278518530)
D.ey0=new B.z(4281211923,4278978566)
D.cZK=w([D.exu,D.exK,D.ey0],x.n)
D.dpm=w(["\u2742","\u2726","\u265c"],x.s)
D.dOK=new C.xU("Onyx & Copper",D.cZK,4291856987,4294365880,4294964718,3873885630,D.dpm)
D.cIm=w([D.dOQ,D.dON,D.dOH,D.dOJ,D.dOO,D.dOL,D.dOI,D.dOM,D.dOP,D.dOK],B.at("O<xU>"))
D.cKJ=w([A.az,D.Br,A.hX],x.O)
D.eG5=new B.z("Original",null)
D.eGf=new B.z("Wide 16:9",1.7777777777777777)
D.eID=new B.z("Landscape 3:2",1.5)
D.eFw=new B.z("Photo 4:3",1.3333333333333333)
D.eUp=new B.z("Portrait 3:4",0.75)
D.axW=w([D.eG5,D.eGf,D.eID,D.eFw,N.aPB,D.eUp],B.at("O<+(m,J?)>"))
D.axX=w([A.hX,A.c_,A.b8,A.br],x.O)
D.eIP=new B.z("","Original")
D.eKK=new B.z("circle","Circle")
D.eRk=new B.z("rounded","Rounded")
D.eSk=new B.z("triangle","Triangle")
D.eMR=new B.z("hexagon","Hexagon")
D.eLa=new B.z("diamond","Diamond")
D.eK_=new B.z("arch","Arch")
D.CT=w([D.eIP,D.eKK,D.eRk,D.eSk,D.eMR,D.eLa,D.eK_],x.L)
D.dJW=new C.lq("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kG,A.d7,A.aK)
D.dKb=new C.lq("campus_green","Campus Green","Normal",A.b1,A.nd,A.tM,A.h3,A.e7)
D.dK2=new C.lq("warm_sand","Warm Sand","Normal",A.dZ,A.i_,A.bL,A.im,A.nZ)
D.dK9=new C.lq("slate_minimal","Slate Minimal","Normal",A.bs,A.aP,A.aN,A.N,A.aK)
D.dJV=new C.lq("coral_fresh","Coral Fresh","Normal",A.cd,A.hY,A.pS,A.kf,A.tE)
D.dKa=new C.lq("lavender_calm","Lavender Calm","Normal",A.b6,A.pV,A.xU,A.o6,A.jr)
D.dJX=new C.lq("ocean_breeze","Ocean Breeze","Normal",A.fg,A.rn,A.tB,A.tG,A.o_)
D.ahF=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dK7=new C.lq("berry_pop","Berry Pop","Normal",A.f6,D.ahF,A.kC,G.Z3,A.Bw)
D.dJY=new C.lq("midnight_pro","Midnight Pro","Professional",A.aD,A.N,A.dv,A.kC,A.cq)
D.dK6=new C.lq("executive_navy","Executive Navy","Professional",A.d3,A.agW,A.d7,A.l3,A.bM)
D.dK4=new C.lq("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bo,A.N,A.aP,A.cq)
D.dJZ=new C.lq("corporate_steel","Corporate Steel","Professional",A.o2,A.N,A.mB,A.fj,A.bM)
D.dK1=new C.lq("gold_luxe","Gold Luxe","Luxury",A.m0,A.dP,A.p1,A.m1,A.bL)
D.bn_=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dK5=new C.lq("rose_gold_elite","Rose Gold Elite","Luxury",A.ht,D.bn_,A.YP,A.ik,A.nT)
D.dK8=new C.lq("platinum_night","Platinum Night","Luxury",A.cq,A.dG,A.bo,A.aP,A.aN)
D.dKc=new C.lq("emerald_prestige","Emerald Prestige","Luxury",A.aW,A.q0,A.f7,A.q8,A.jJ)
D.dJU=new C.lq("royal_purple","Royal Purple","Luxury",A.nc,A.Y_,A.jr,A.kC,A.LK)
D.dK3=new C.lq("neon_pitch","Neon Pitch","Bold",A.b8,A.dG,A.N,A.b_,A.aN)
D.dK0=new C.lq("crimson_impact","Crimson Impact","Bold",A.bz,A.jM,A.ek,A.ro,A.eP)
D.dK_=new C.lq("sunset_gallery","Sunset Gallery","Bold",A.fr,A.tE,A.kf,A.pS,A.mA)
D.HZ=w([D.dJW,D.dKb,D.dK2,D.dK9,D.dJV,D.dKa,D.dJX,D.dK7,D.dJY,D.dK6,D.dK4,D.dJZ,D.dK1,D.dK5,D.dK8,D.dKc,D.dJU,D.dK3,D.dK0,D.dK_],B.at("O<lq>"))
D.cWk=w([A.c2,D.jt],x.O)
D.ddO=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eJL=new B.z("Faces & people",D.ddO)
D.cKN=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ew2=new B.z("Ideas & work",D.cKN)
D.d3U=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eMW=new B.z("Nature",D.d3U)
D.ddX=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eG3=new B.z("Places & things",D.ddX)
D.d7t=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eK4=new B.z("Symbols",D.d7t)
D.cWq=w([D.eJL,D.ew2,D.eMW,D.eG3,D.eK4],B.at("O<+(m,ai<m>)>"))
D.bcU=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cWM=w([A.c2,D.afZ,D.bcU],x.O)
D.b6L=new B.ac(0,A.G,A.LH,A.aJT,40)
D.b6r=new B.ac(0,A.G,A.nX,A.en,8)
D.cWZ=w([D.b6L,D.b6r],x.V)
D.cXw=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.ayk=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a47=w([A.hX,A.ej,A.bz,A.av,A.cd],x.O)
D.cYs=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.agd=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cYD=w([A.YF,D.agd,A.YF],x.O)
D.cYJ=w([A.il,D.jt,D.LS],x.O)
D.eFQ=new B.z(A.bj,D.a1H)
D.eHi=new B.z(A.K,D.a1G)
D.eAT=new B.z(A.dV,D.a1I)
D.cZF=w([D.eFQ,D.eHi,D.eAT],B.at("O<+(qe,a0)>"))
D.cV=new C.J9(0,"text")
D.lO=new C.J9(1,"image")
D.fa=new C.J9(2,"shape")
D.T_=new C.J9(3,"pdf")
D.lj=new C.J9(4,"signature")
D.a71=new C.J9(5,"bio")
D.d_D=w([D.cV,D.lO,D.fa,D.T_,D.lj,D.a71],B.at("O<J9>"))
D.d_E=w([A.bp,A.cD],B.at("O<I4>"))
D.d0h=w(["School","Documents","Sign & present"],x.s)
D.b6Q=new B.ac(0,A.G,A.aih,A.v3,28)
D.d0G=w([D.b6Q],x.V)
D.d0Z=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.R4=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.ayM=w([A.hX,A.FW,A.aN,A.c,A.p2,A.az],x.O)
D.eTO=new B.z(0.1,0.08)
D.eMU=new B.z(0.3,0.05)
D.eAl=new B.z(0.55,0.1)
D.eEM=new B.z(0.8,0.06)
D.eI3=new B.z(0.92,0.16)
D.eHx=new B.z(0.2,0.2)
D.eFg=new B.z(0.7,0.22)
D.eLx=new B.z(0.05,0.4)
D.eIv=new B.z(0.95,0.45)
D.eB8=new B.z(0.12,0.7)
D.eDu=new B.z(0.88,0.75)
D.eDC=new B.z(0.4,0.9)
D.eyB=new B.z(0.65,0.93)
D.eEp=new B.z(0.25,0.97)
D.eFN=new B.z(0.85,0.9)
D.eC2=new B.z(0.5,0.04)
D.d2x=w([D.eTO,D.eMU,D.eAl,D.eEM,D.eI3,D.eHx,D.eFg,D.eLx,D.eIv,D.eB8,D.eDu,D.eDC,D.eyB,D.eEp,D.eFN,D.eC2],x.G)
D.d2H=w([A.c,A.ht,A.aJ,A.aW],x.O)
D.ea9=new C.jT("office_blue","Office Blue",A.bl,A.d7,A.aK,A.c,A.kG)
D.eak=new C.jT("campus_green","Campus Green",A.b1,A.h3,A.e7,A.nd,A.tM)
D.eaa=new C.jT("sunset","Sunset",A.fr,A.kf,A.nZ,A.hY,A.pS)
D.eab=new C.jT("midnight","Midnight",A.aD,A.kC,A.cq,A.N,A.dv)
D.eam=new C.jT("classic","Classic",A.d1,A.dP,A.m2,A.i_,A.fU)
D.eaj=new C.jT("rose_gold","Rose Gold",A.ht,A.y0,A.y_,A.vW,A.Bv)
D.ea4=new C.jT("ocean_teal","Ocean Teal",A.fg,A.tG,A.o_,A.rn,A.tB)
D.ea3=new C.jT("slate_pro","Slate Pro",A.bs,A.N,A.aK,A.aP,A.aN)
D.ea2=new C.jT("neon_night","Neon Night",A.b8,A.b_,A.aN,A.dG,A.N)
D.eae=new C.jT("lavender","Lavender",A.b6,A.o6,A.jr,A.pV,A.xU)
D.eag=new C.jT("coral","Coral",A.cd,A.kf,A.tE,A.hY,A.mA)
D.ea5=new C.jT("forest","Forest",A.hf,A.dY,A.cr,A.m3,A.es)
D.ea6=new C.jT("berry","Berry",A.f6,G.Z3,A.Bw,D.ahF,A.kC)
D.ead=new C.jT("sand","Sand",A.dZ,A.im,A.nZ,A.i_,A.bL)
D.eai=new C.jT("ice","Ice",A.o2,A.Ft,A.aK,A.na,A.fj)
D.ea8=new C.jT("charcoal","Charcoal",A.al,A.aP,A.cq,A.bo,A.N)
D.ea1=new C.jT("mint","Mint",A.aW,A.fM,A.h3,A.m3,A.q8)
D.eah=new C.jT("crimson","Crimson",A.bz,A.nf,A.jM,A.FU,A.ro)
D.bfN=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eac=new C.jT("gold","Gold",A.m0,A.xM,A.p1,D.bfN,A.m1)
D.eaf=new C.jT("aqua","Aqua",A.bS,A.FG,A.oZ,A.pW,A.p3)
D.ea7=new C.jT("plum","Plum",A.nc,A.xY,A.Bw,A.Fu,A.rj)
D.eal=new C.jT("steel","Steel",A.d3,A.d7,A.bo,A.kG,A.l3)
D.a4m=w([D.ea9,D.eak,D.eaa,D.eab,D.eam,D.eaj,D.ea4,D.ea3,D.ea2,D.eae,D.eag,D.ea5,D.ea6,D.ead,D.eai,D.ea8,D.ea1,D.eah,D.eac,D.eaf,D.ea7,D.eal],B.at("O<jT>"))
D.d32=w([A.c2,A.jv],x.O)
D.T1=new C.hI(10,"rotate3d")
D.IY=new C.hI(8,"flip")
D.aJl=new C.hI(19,"spiral")
D.qI=new C.hI(16,"bounce")
D.aJo=new C.hI(9,"flipVertical")
D.d33=w([D.T1,D.IY,D.aJl,D.qI,D.aJo],x.i)
D.ee=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d3r=w([0.62,1],x.x)
D.d42=w([0,0.32,0.68,1],x.x)
D.mV=new C.hI(6,"zoom")
D.uY=new C.hI(4,"slideUp")
D.uX=new C.hI(2,"slideLeft")
D.d4c=w([D.mV,D.IY,D.uY,D.T1,D.uX],x.i)
D.d4I=w([A.c_,A.ht,A.ik,A.hX,A.c],x.O)
D.b6G=new B.ac(0,A.G,D.ags,A.v3,30)
D.d5t=w([D.b6G],x.V)
D.ell=new B.t(0,-2.5)
D.elb=new B.t(-2.5,0)
D.ejp=new B.t(2.5,0)
D.d5w=w([A.Tf,A.a7s,A.aKv,A.a7r,D.ell,P.aKr,D.elb,D.ejp],x.dN)
D.I4=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d61=w([23,114,69,56,80,144],x.t)
D.d6v=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d6Y=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d8E=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d8I=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bi=new C.v1(0,"rectangle")
D.eT=new C.v1(1,"circle")
D.lk=new C.v1(6,"hexagon")
D.d8X=w([D.bi,D.eT,D.lk],x.m)
D.ox=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ahO=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.d9v=w([D.ahO,A.dY],x.O)
D.eAC=new B.z("","Classic")
D.eyQ=new B.z("caps","Bold caps")
D.eLA=new B.z("elegant","Elegant")
D.eRE=new B.z("shadow","Shadow")
D.eF9=new B.z("neon","Neon glow")
D.ePk=new B.z("marker","Highlighter")
D.eRS=new B.z("stamp","Stamp")
D.eE1=new B.z("threed","3D")
D.eM6=new B.z("fire","Fire")
D.eN5=new B.z("ice","Ice")
D.eKJ=new B.z("chalk","Chalk")
D.eKO=new B.z("comic","Comic")
D.eT9=new B.z("softglow","Soft glow")
D.eO8=new B.z("lowercase","Lowercase")
D.eLi=new B.z("double","Echo")
D.eTi=new B.z("whisper","Whisper")
D.azJ=w([D.eAC,D.eyQ,D.eLA,D.eRE,D.eF9,N.aPM,D.ePk,D.eRS,N.aPO,D.eE1,N.aPG,D.eM6,D.eN5,D.eKJ,D.eKO,A.TL,At.aPP,D.eT9,D.eO8,D.eLi,D.eTi],x.L)
D.daQ=w([3,5,7,10,12,15],x.t)
D.dcm=w([A.c_,A.bL,A.c,A.eG,A.cL],x.O)
D.dBr=new C.tA(10,"cardWorld")
D.Do=new C.BN(3,"rounded")
D.dRQ=new C.lt("world","NGMY World",D.dBr,D.Do,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dBs=new C.tA(11,"cardSplit")
D.dRM=new C.lt("business","Business Wire",D.dBs,D.Do,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dBt=new C.tA(12,"cardBreaking")
D.dRZ=new C.lt("breaking","Breaking Red",D.dBt,D.Do,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dBu=new C.tA(13,"cardFeature")
D.dRS=new C.lt("feature","Tech Feature",D.dBu,D.Do,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aHS=new C.tA(6,"circle")
D.aHM=new C.BN(4,"circle")
D.dRW=new C.lt("parchment","Royal Circle",D.aHS,D.aHM,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dRL=new C.lt("ocean","Blue Ocean",D.aHS,D.aHM,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dBx=new C.tA(7,"rail")
D.aHL=new C.BN(1,"double")
D.dRN=new C.lt("forest","Green Leaf",D.dBx,D.aHL,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aHP=new C.tA(1,"sideBySide")
D.dS0=new C.lt("herald","NGMY Herald",D.aHP,D.Do,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aHO=new C.tA(0,"classic")
D.a6e=new C.BN(9,"shadow")
D.dS_=new C.lt("daily","The Daily",D.aHO,D.a6e,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dBv=new C.tA(2,"splash")
D.aHN=new C.BN(6,"cutCorner")
D.dRK=new C.lt("tabloid","Big Tabloid",D.dBv,D.aHN,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aHT=new C.tA(9,"minimal")
D.dRV=new C.lt("modern","Modern Digest",D.aHT,D.Do,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aHQ=new C.tA(3,"magazine")
D.aHK=new C.BN(0,"plain")
D.dRR=new C.lt("midnight","Midnight Edition",D.aHQ,D.aHK,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dBy=new C.tA(8,"banner")
D.dRT=new C.lt("metro","Metro Wire",D.dBy,D.aHN,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dBq=new C.BN(8,"arch")
D.dRU=new C.lt("sunrise","Sunrise Post",D.aHQ,D.dBq,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aHR=new C.tA(5,"scrapbook")
D.dBp=new C.BN(5,"tape")
D.dRP=new C.lt("neon","Neon Beat",D.aHR,D.dBp,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dBw=new C.tA(4,"wrap")
D.dS1=new C.lt("gold","Golden Press",D.dBw,D.a6e,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dS2=new C.lt("minimal","Paper White",D.aHT,D.a6e,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dRO=new C.lt("gazette","Fresh Gazette",D.aHO,D.aHL,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dRY=new C.lt("times","Classic Times",D.aHP,D.aHK,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Sx=new C.BN(2,"polaroid")
D.dRX=new C.lt("scrapbook","Memory Scrapbook",D.aHR,D.Sx,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a4D=w([D.dRQ,D.dRM,D.dRZ,D.dRS,D.dRW,D.dRL,D.dRN,D.dS0,D.dS_,D.dRK,D.dRV,D.dRR,D.dRT,D.dRU,D.dRP,D.dS1,D.dS2,D.dRO,D.dRY,D.dRX],B.at("O<lt>"))
D.dcy=w([0.45,1],x.x)
D.I8=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dcZ=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hpJ=new C.oL("Original",0,1,1,0,0,0)
D.hpN=new C.oL("Black & white",0,1.1,0,0,0,0)
D.hpA=new C.oL("Noir",-0.05,1.55,0,0,0,0)
D.hpE=new C.oL("Sepia",0,1,0.25,0.9,0,0)
D.hpD=new C.oL("Vivid",0,1.15,1.6,0,0,0)
D.hpw=new C.oL("Pop",0,1.3,1.9,0,0,0)
D.hpy=new C.oL("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hpK=new C.oL("Matte",0,0.9,0.85,0,0,0.55)
D.hpF=new C.oL("Cool",0,1.05,1,-0.8,0,0)
D.hpM=new C.oL("Warm",0.03,1.05,1.1,0.8,0,0)
D.hpx=new C.oL("Golden hour",0.04,1,1.25,1,0,0)
D.hpC=new C.oL("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hpL=new C.oL("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hpB=new C.oL("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hpH=new C.oL("Retro",0,0.9,0.7,0.4,0,0.35)
D.hpG=new C.oL("Forest",0,1,1.2,-0.1,-0.45,0)
D.hpI=new C.oL("Rose",0,1,1.1,0.3,0.4,0)
D.hpz=new C.oL("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dd_=w([D.hpJ,D.hpN,D.hpA,D.hpE,D.hpD,D.hpw,D.hpy,D.hpK,D.hpF,D.hpM,D.hpx,D.hpC,D.hpL,D.hpB,D.hpH,D.hpG,D.hpI,D.hpz],B.at("O<oL>"))
D.bcg=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dd1=w([D.ahO,A.dY,D.bcg],x.O)
D.evW=new B.z(0.12,0.3)
D.eNg=new B.z(0.26,0.75)
D.eLw=new B.z(0.8,0.22)
D.eS3=new B.z(0.9,0.7)
D.eO7=new B.z(0.5,0.15)
D.eQe=new B.z(0.65,0.85)
D.eCz=new B.z(0.08,0.85)
D.ddf=w([D.evW,D.eNg,D.eLw,D.eS3,D.eO7,D.eQe,D.eCz],x.G)
D.azV=w([A.b8,A.c_,A.br,A.bf],x.O)
D.de7=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dek=w([A.c,A.fj,A.du,A.vM],x.O)
D.deL=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.bg2=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dfp=w([D.bg2,D.agd],x.O)
D.dfr=w([A.tJ,A.az],x.O)
D.dfG=w([0,0.25,0.75,1],x.x)
D.dfI=w([A.xQ,A.p2],x.O)
D.aIW=new C.l4(10,"kenteSunset")
D.huA=w([D.agG,A.ka,A.az],x.O)
D.dN9=new C.jz("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aIW,4294964964,4282000405,4279983648,D.k_)
D.aIX=new C.l4(11,"indigoMudcloth")
D.bdn=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.huO=w([D.bdn,A.aga,A.il],x.O)
D.dNh=new C.jz("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aIX,4294439140,4279903102,4279903102,D.k_)
D.aIY=new C.l4(12,"adinkraRoyal")
D.bs7=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.huP=w([D.af0,D.bs7,A.az],x.O)
D.dNj=new C.jz("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aIY,4294965484,4285218591,4287322667,D.k_)
D.aIZ=new C.l4(13,"nileLotus")
D.bo3=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bkl=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.huU=w([D.bo3,D.bkl,A.il],x.O)
D.dNi=new C.jz("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aIZ,4294244340,4279196764,4279196764,D.k_)
D.aJ_=new C.l4(14,"shweshweIvory")
D.big=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bgR=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bdV=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.huB=w([D.big,D.bgR,D.bdV],x.O)
D.dNe=new C.jz("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aJ_,4294505710,4279970378,4291058750,D.k_)
D.rW=new C.l4(15,"certIvoryNavy")
D.huz=w([D.My,D.jt,A.il],x.O)
D.aIr=new C.xS(1,"ringsNdoa")
D.dNb=new C.jz("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rW,4294966259,4279378237,4291404327,D.aIr)
D.a6K=new C.xS(2,"coupleCards")
D.dN6=new C.jz("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rW,4294966259,4279378237,4291404327,D.a6K)
D.Dr=new C.l4(18,"certIvoryNavyBar")
D.af_=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.huN=w([D.af_,D.jt,A.il],x.O)
D.aIs=new C.xS(3,"kuhoweshaForm")
D.dN4=new C.jz("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Dr,4294966519,4279378237,4291404327,D.aIs)
D.agq=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hv6=w([D.My,D.agq,A.il],x.O)
D.a6L=new C.xS(4,"mahariPande")
D.dN7=new C.jz("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rW,4294966259,4279904068,4291404327,D.a6L)
D.aJ0=new C.l4(16,"certIvoryGreen")
D.bhy=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.huD=w([A.LL,D.bhy,A.il],x.O)
D.aIt=new C.xS(5,"familiaMti")
D.dNd=new C.jz("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aJ0,4294966776,4280241466,4291404327,D.aIt)
D.a6M=new C.xS(6,"ndoaSafi")
D.dN5=new C.jz("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Dr,4294966519,4279378237,4291404327,D.a6M)
D.bmj=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.huG=w([D.My,A.il,D.bmj],x.O)
D.a6N=new C.xS(7,"peteWide")
D.dNa=new C.jz("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rW,4294966259,4282001936,4291404327,D.a6N)
D.dNk=new C.xS(8,"muhuriCrest")
D.dN3=new C.jz("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rW,4294966259,4279378237,4291404327,D.dNk)
D.huQ=w([D.af_,D.agq,A.il],x.O)
D.dNl=new C.xS(9,"fomuWazi")
D.dNg=new C.jz("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Dr,4294966519,4279904068,4291404327,D.dNl)
D.aJ1=new C.l4(17,"certIvoryRose")
D.bil=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.huT=w([D.bil,D.ahl,A.il],x.O)
D.a6J=new C.xS(10,"upendoOrnate")
D.dNc=new C.jz("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aJ1,4294965493,4286200650,4291404327,D.a6J)
D.dg9=w([D.dN9,D.dNh,D.dNj,D.dNi,D.dNe,D.dNb,D.dN6,D.dN4,D.dN7,D.dNd,D.dN5,D.dNa,D.dN3,D.dNg,D.dNc],x.h)
D.ef=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.IZ=new C.wf(0,"emojis")
D.Dy=new C.wf(1,"pictures")
D.J_=new C.wf(2,"icons3d")
D.a73=new C.wf(3,"animations")
D.T3=new C.wf(4,"videoMotion")
D.Dz=new C.wf(5,"luxe")
D.a4K=w([D.IZ,D.Dy,D.J_,D.a73,D.T3,D.Dz],B.at("O<wf>"))
D.eQS=new B.z(A.e5,"Looks")
D.eEF=new B.z(A.CC,"Light")
D.eEC=new B.z(A.mb,"Colour")
D.eCA=new B.z(A.wi,"Effects")
D.ao1=new B.a0(63112,"MaterialIcons",!1)
D.ez5=new B.z(D.ao1,"Crop")
D.dgG=w([D.eQS,D.eEF,D.eEC,D.eCA,D.ez5],x.f2)
D.dhk=w([],x.D)
D.hv3=w([],x.L)
D.eCO=new B.z("Flashcard",D.IU)
D.eGI=new B.z("Quiz",D.IV)
D.eIK=new B.z("Worksheet",D.IW)
D.eFI=new B.z("Notes",D.mU)
D.eHg=new B.z("Section",D.Dw)
D.di1=w([D.eCO,D.eGI,D.eIK,D.eFI,D.eHg],B.at("O<+(m,mO)>"))
D.dP_=new C.l4(6,"beadedPearl")
D.bl6=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hv7=w([H.YO,D.bl6,A.il],x.O)
D.aIp=new C.jz("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dP_,4294966774,4286209070,4291404327,D.k_)
D.dP0=new C.l4(7,"artDeco")
D.bpq=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bss=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hv5=w([D.bpq,D.bss,A.c2],x.O)
D.aIq=new C.jz("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dP0,4294440434,4280228630,4290283019,D.k_)
D.dP1=new C.l4(8,"rosetteCorners")
D.brx=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bg7=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bl1=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.huJ=w([D.brx,D.bg7,D.bl1],x.O)
D.aIo=new C.jz("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dP1,4294702831,4285218602,4291394365,D.k_)
D.dP2=new C.l4(9,"modernLedger")
D.huI=w([A.c,D.jt,D.jt],x.O)
D.aIn=new C.jz("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dP2,4294967295,4279378237,4279378237,D.k_)
D.di5=w([D.aIp,D.aIq,D.aIo,D.aIn],x.h)
D.die=w([A.ik,A.p2],x.O)
D.cn=new C.hI(0,"none")
D.dh=new C.hI(1,"fade")
D.IX=new C.hI(3,"slideRight")
D.aJn=new C.hI(5,"slideDown")
D.e8E=new C.hI(7,"zoomOut")
D.a72=new C.hI(11,"cube")
D.e8z=new C.hI(12,"blur")
D.aJk=new C.hI(13,"dissolve")
D.e8A=new C.hI(14,"wipeLeft")
D.e8B=new C.hI(15,"wipeRight")
D.T2=new C.hI(17,"push")
D.e8C=new C.hI(18,"flash")
D.aJm=new C.hI(20,"swing")
D.e8D=new C.hI(21,"curtain")
D.RF=w([D.cn,D.dh,D.uX,D.IX,D.uY,D.aJn,D.mV,D.e8E,D.IY,D.aJo,D.T1,D.a72,D.e8z,D.aJk,D.e8A,D.e8B,D.qI,D.T2,D.e8C,D.aJl,D.aJm,D.e8D],x.i)
D.RG=w([D.a6I,D.a6G,D.a6z,D.a6A,D.a6B,D.a6E,D.a6C,D.a6D,D.a6H,D.a6F,D.aIp,D.aIq,D.aIo,D.aIn],x.h)
D.diH=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.diL=w([A.xV,A.hX,A.c2],x.O)
D.eDW=new B.z(A.up,"Design")
D.eSt=new B.z(D.aoj,"Word sizes")
D.eNR=new B.z(A.Cx,"Text")
D.bNL=new B.a0(983182,"MaterialIcons",!1)
D.eNW=new B.z(D.bNL,"Photo")
D.eyE=new B.z(A.lL,"Logo")
D.eTM=new B.z(A.Hu,"News")
D.diR=w([D.eDW,D.eSt,D.eNR,D.eNW,D.eyE,D.eTM],x.f2)
D.diS=w(["golddust","sparkle","sheen"],x.s)
D.ea0=new C.eB("upload_pdf",K.OU,"Upload PDF")
D.e9a=new C.eB("sign_paper",A.Hr,"Sign Paper")
D.bN_=new B.a0(63438,"MaterialIcons",!1)
D.e9X=new C.eB("hd_photo",D.bN_,"HD Photo")
D.e92=new C.eB("sharpen",E.a1r,"Sharpen")
D.e9c=new C.eB("print",K.OU,"Download PDF")
D.e9E=new C.eB("rotate",D.ao1,"Rotate")
D.e9l=new C.eB("text_box",A.Cx,"Text Box")
D.e9n=new C.eB("picture",A.uv,"Picture")
D.e9j=new C.eB("title",A.wv,"Title")
D.e9f=new C.eB("subtitle",U.aoV,"Subtitle")
D.e9N=new C.eB("bullets",I.a1J,"Bullet List")
D.e9g=new C.eB("numbered",A.OJ,"Numbered")
D.e9Q=new C.eB("quote",A3.Cl,"Quote")
D.e9s=new C.eB("citation",A.oi,"Citation")
D.e9T=new C.eB("date_stamp",Ai.a1v,"Date Stamp")
D.e9G=new C.eB("page_number",A.z3,"Page #")
D.e9K=new C.eB("header_bar",A.CA,"Header")
D.e9m=new C.eB("footer_bar",Au.a2g,"Footer")
D.e9b=new C.eB("divider",A.uu,"Divider")
D.e97=new C.eB("highlight",A.a1N,"Highlight")
D.e9M=new C.eB("redact",A.uF,"Redact")
D.e9z=new C.eB("callout",A.Ce,"Callout")
D.e9V=new C.eB("checkboxes",I.ang,"Checklist")
D.e9w=new C.eB("table",A.a2d,"Table")
D.e9q=new C.eB("memo",I.a1Z,"Memo")
D.e9A=new C.eB("letter",A.Hg,"Letter")
D.bMD=new B.a0(63259,"MaterialIcons",!0)
D.e91=new C.eB("agenda",D.bMD,"Agenda")
D.e9d=new C.eB("toc",AD.aox,"Contents")
D.bMW=new B.a0(63406,"MaterialIcons",!1)
D.e9x=new C.eB("sig_line",D.bMW,"Sign Line")
D.e8V=new C.eB("initial_line",A.iX,"Initials")
D.e8Y=new C.eB("approved",A.lL,"APPROVED")
D.e9C=new C.eB("draft",A.pl,"DRAFT")
D.e9I=new C.eB("confidential",A.jB,"Confidential")
D.e9L=new C.eB("sticky",A.P1,"Sticky Note")
D.e9U=new C.eB("progress",A.aow,"Progress")
D.bOa=new B.a0(983507,"MaterialIcons",!1)
D.e98=new C.eB("stars",D.bOa,"Star Rating")
D.e8T=new C.eB("equation",A.aol,"Equation")
D.e93=new C.eB("timeline",A.a2e,"Timeline")
D.e9r=new C.eB("two_col",A.a2h,"Two Columns")
D.e95=new C.eB("compare",Az.a1z,"Compare")
D.e8R=new C.eB("duplicate_el",A.fQ,"Duplicate")
D.e9Z=new C.eB("delete_el",A.e9,"Delete")
D.e9P=new C.eB("bring_fwd",H.aof,"Bring Front")
D.e8W=new C.eB("send_back",H.aoe,"Send Back")
D.e9B=new C.eB("align_left",D.a1H,"Align L")
D.e9H=new C.eB("align_center",D.a1G,"Align C")
D.e9Y=new C.eB("align_right",D.a1I,"Align R")
D.e9k=new C.eB("word_count",A1.a19,"Word Count")
D.e9h=new C.eB("link_text",A.hB,"Link")
D.e9F=new C.eB("phone",A.iY,"Phone")
D.e96=new C.eB("email",A.Ch,"Email")
D.ea_=new C.eB("qr_placeholder",A.jD,"QR Placeholder")
D.e90=new C.eB("rectangle",A4.uo,"Rectangle")
D.e9v=new C.eB("circle",A.qo,"Circle")
D.e8X=new C.eB("arrow",A.jA,"Arrow")
D.e9O=new C.eB("line",A.uu,"Line")
D.e99=new C.eB("triangle",A.a1x,"Triangle")
D.bMK=new B.a0(63318,"MaterialIcons",!1)
D.e9e=new C.eB("grayscale",D.bMK,"Grayscale")
D.e9o=new C.eB("brighten",I.anB,"Brighten")
D.e9t=new C.eB("flip_h",A.Ck,"Flip H")
D.bMR=new B.a0(63348,"MaterialIcons",!1)
D.e9W=new C.eB("flip_v",D.bMR,"Flip V")
D.e9J=new C.eB("cover_page",A.qr,"Cover Page")
D.e8U=new C.eB("invoice",A.hm,"Invoice")
D.e94=new C.eB("resume",A.mL,"Resume")
D.e9i=new C.eB("minutes",A.pf,"Minutes")
D.e8Z=new C.eB("lab_report",A.OY,"Lab Report")
D.e9_=new C.eB("rubric",A.uq,"Rubric")
D.e9u=new C.eB("flashcard_tool",W.Hp,"Flashcard")
D.e9R=new C.eB("quiz_tool",A.Hl,"Quiz Block")
D.e9y=new C.eB("worksheet_tool",L.GV,"Worksheet")
D.e9D=new C.eB("outline_share",A.P_,"Share Outline")
D.e9S=new C.eB("export_json",D.anm,"Export JSON")
D.e8S=new C.eB("new_slide",D.a18,"New Slide")
D.e9p=new C.eB("present",A.qw,"Present")
D.djn=w([D.ea0,D.e9a,D.e9X,D.e92,D.e9c,D.e9E,D.e9l,D.e9n,D.e9j,D.e9f,D.e9N,D.e9g,D.e9Q,D.e9s,D.e9T,D.e9G,D.e9K,D.e9m,D.e9b,D.e97,D.e9M,D.e9z,D.e9V,D.e9w,D.e9q,D.e9A,D.e91,D.e9d,D.e9x,D.e8V,D.e8Y,D.e9C,D.e9I,D.e9L,D.e9U,D.e98,D.e8T,D.e93,D.e9r,D.e95,D.e8R,D.e9Z,D.e9P,D.e8W,D.e9B,D.e9H,D.e9Y,D.e9k,D.e9h,D.e9F,D.e96,D.ea_,D.e90,D.e9v,D.e8X,D.e9O,D.e99,D.e9e,D.e9o,D.e9t,D.e9W,D.e9J,D.e8U,D.e94,D.e9i,D.e8Z,D.e9_,D.e9u,D.e9R,D.e9y,D.e9D,D.e9S,D.e8S,D.e9p],B.at("O<eB>"))
D.djx=w([A.cq,A.al],x.O)
D.eya=new B.z(4286331629,4292552567)
D.exY=new B.z(4280640491,4278630100)
D.eyi=new B.z(4294538006,4292943176)
D.exk=new B.z(4278556265,4280640491)
D.ddr=w([D.eya,D.exY,D.eyi,D.exk],x.n)
D.cAU=w([4294626325,4280472558,4294210230],x.t)
D.e8M=new C.nY("colorful","Colorful",A.mb,D.ddr,4294967295,3875536895,D.cAU,D.mV)
D.exM=new B.z(4279522093,4279657780)
D.ey1=new B.z(4281750292,4283268111)
D.exn=new B.z(4278603323,4279203438)
D.ey2=new B.z(4282343954,4279599165)
D.cM0=w([D.exM,D.ey1,D.exn,D.ey2],x.n)
D.cAC=w([4288931381,4294829706,4287033260],x.t)
D.e8I=new C.nY("nature","Nature",A.Hs,D.cM0,4294442727,3874290891,D.cAC,D.dh)
D.exG=new B.z(4279369771,4283178389)
D.exD=new B.z(4279179050,4286456526)
D.exU=new B.z(4280163147,4290648157)
D.exc=new B.z(4278322711,4285343961)
D.d3i=w([D.exG,D.exD,D.exU,D.exc],x.n)
D.cAQ=w([4294210230,4280472558,4289170426],x.t)
D.e8G=new C.nY("vibe","Vibe",A.OM,D.d3i,4294967295,3874869502,D.cAQ,D.uX)
D.eye=new B.z(4290007817,4292552567)
D.ey8=new B.z(4286328082,4294286859)
D.eyd=new B.z(4288485197,4294538006)
D.ey7=new B.z(4285343961,4293675161)
D.c6L=w([D.eye,D.ey8,D.eyd,D.ey7],x.n)
D.cAV=w([4294829706,4294967295,4284999929],x.t)
D.e8H=new C.nY("celebration","Celebration",A.km,D.c6L,4294967295,4009752557,D.cAV,D.qI)
D.exB=new B.z(4279179050,4280171146)
D.exF=new B.z(4279310375,4280232247)
D.ext=new B.z(4278916151,4280172719)
D.exC=new B.z(4279179050,4281549141)
D.cWF=w([D.exB,D.exF,D.ext,D.exC],x.n)
D.cAx=w([4281908728,4294626325,4287931320],x.t)
D.e8L=new C.nY("professional","Professional",A.Cc,D.cWF,4294967295,3872118241,D.cAx,D.T2)
D.exx=new B.z(4278995566,4278413729)
D.exp=new B.z(4278727492,4279137424)
D.exV=new B.z(4280171146,4278751666)
D.exy=new B.z(4278995566,4279590517)
D.cEK=w([D.exx,D.exp,D.exV,D.exy],x.n)
D.cAA=w([4286436348,4284410580,4294829706],x.t)
D.e8N=new C.nY("ocean","Ocean",I.a2j,D.cEK,4294967295,3873501950,D.cAA,D.uY)
D.ey9=new B.z(4286328082,4294538006)
D.eyb=new B.z(4286781507,4294677052)
D.ey5=new B.z(4283178389,4294197086)
D.eyc=new B.z(4288295954,4294688548)
D.cSS=w([D.ey9,D.eyb,D.ey5,D.eyc],x.n)
D.cAW=w([4294829706,4294967295,4294747557],x.t)
D.e8O=new C.nY("sunset","Sunset",A.P3,D.cSS,4294967295,4009749973,D.cAW,D.dh)
D.eym=new B.z(4294967295,4294047225)
D.eyh=new B.z(4294507260,4294967295)
D.eyl=new B.z(4294967295,4293060848)
D.eyg=new B.z(4294507260,4294047225)
D.d6B=w([D.eym,D.eyh,D.eyl,D.eyg],x.n)
D.cAv=w([4280640491,4279179050,4287931320],x.t)
D.e8K=new C.nY("minimal","Minimal",A4.uo,D.d6B,4279179050,4282865001,D.cAv,D.dh)
D.exw=new B.z(4278979081,4280886564)
D.exQ=new B.z(4280031511,4278979081)
D.exE=new B.z(4279308561,4281148438)
D.exv=new B.z(4278979081,4280031511)
D.dlB=w([D.exw,D.exQ,D.exE,D.exv],x.n)
D.cAJ=w([4292128567,4294829706,4289241758],x.t)
D.e8P=new C.nY("elegant","Elegant",A.mc,D.dlB,4294898631,3873957348,D.cAJ,D.aJk)
D.exS=new B.z(4280159034,4282058596)
D.exs=new B.z(4278916151,4280163147)
D.ey_=new B.z(4281208933,4278916151)
D.exJ=new B.z(4279502891,4283178389)
D.dt3=w([D.exS,D.exs,D.ey_,D.exJ],x.n)
D.cAS=w([4294296657,4292128567,4291081725],x.t)
D.e8J=new C.nY("royal","Royal Gold",A.jh,D.dt3,4294965222,3874084351,D.cAS,D.mV)
D.exh=new B.z(4278464302,4280163147)
D.exr=new B.z(4278916151,4279455306)
D.exT=new B.z(4280163147,4283040846)
D.exe=new B.z(4278332450,4281413249)
D.dd4=w([D.exh,D.exr,D.exT,D.exe],x.n)
D.cAw=w([4281193663,4289170426,4294210230],x.t)
D.e8Q=new C.nY("aurora","Aurora Glow",A.e5,D.dd4,4293983738,3869766608,D.cAw,D.dh)
D.wG=w([D.e8M,D.e8I,D.e8G,D.e8H,D.e8L,D.e8N,D.e8O,D.e8K,D.e8P,D.e8J,D.e8Q],B.at("O<nY>"))
D.blH=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dk7=w([A.re,D.blH,A.re],x.O)
D.dko=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dks=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eNJ=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eDw=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eIi=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.euI=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eGU=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eF1=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eJA=new B.z("Surprise me","")
D.dl1=w([D.eNJ,D.eDw,D.eIi,D.euI,D.eGU,D.eF1,D.eJA],x.L)
D.bdX=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bpY=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dlQ=w([A.c,D.bdX,D.bpY],x.O)
D.do5=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aIU=new C.l4(0,"heritageGold")
D.bk5=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hv8=w([D.bk5,A9.agC,A.az],x.O)
D.dNf=new C.jz("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aIU,4294570461,4284234270,4292128567,D.k_)
D.aIV=new C.l4(1,"heritageCrimson")
D.bcc=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bii=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bpL=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.huM=w([D.bcc,D.bii,D.bpL],x.O)
D.dN8=new C.jz("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aIV,4294635750,4285213214,4292912216,D.k_)
D.doa=w([D.a6I,D.a6G,D.dNf,D.dN8,D.a6B,D.a6E],x.h)
D.dT5=new C.rK(1,"circuit")
D.dTy=new C.mk("neural","Neural Link","Robotic",D.dT5,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dT4=new C.rK(0,"grid")
D.dTv=new C.mk("signal","Signal Grid","Robotic",D.dT4,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dTa=new C.rK(2,"hexes")
D.dTg=new C.mk("core","Core Protocol","Robotic",D.dTa,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aJh=new C.rK(11,"diagonal")
D.dTr=new C.mk("steel","Steel Tech","Robotic",D.aJh,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aJi=new C.rK(3,"rings")
D.dTf=new C.mk("vault","Vault Gold","Robotic",D.aJi,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dT8=new C.rK(13,"leaves")
D.dTi=new C.mk("forest","Forest Morning","Nature",D.dT8,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aJj=new C.rK(5,"waves")
D.dTp=new C.mk("ocean","Ocean Calm","Nature",D.aJj,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dTb=new C.rK(6,"sunset")
D.dTu=new C.mk("sunset","Sunset Glow","Nature",D.dTb,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dTc=new C.rK(7,"mountains")
D.dTh=new C.mk("mountain","Mountain Air","Nature",D.dTc,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dTd=new C.rK(8,"stars")
D.dTo=new C.mk("night","Night Sky","Nature",D.dTd,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a70=new C.rK(4,"orbs")
D.dTm=new C.mk("aurora","Aurora","Nature",D.a70,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dTw=new C.mk("sand","Sand Dune","Nature",D.aJj,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dTe=new C.rK(9,"rays")
D.dTl=new C.mk("golden","Golden Hour","Warm",D.dTe,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dTj=new C.mk("royal","Royal Purple","Warm",D.aJh,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dTk=new C.mk("rose","Rose Petal","Warm",D.a70,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dT7=new C.rK(12,"blocks")
D.dTn=new C.mk("electric","Electric Blue","Bold",D.dT7,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dTx=new C.mk("mint","Fresh Mint","Bold",D.a70,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dT9=new C.rK(14,"minimal")
D.dTt=new C.mk("white","Clean White","Clean",D.dT9,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dT6=new C.rK(10,"frame")
D.dTq=new C.mk("midnight","Midnight Gold","Clean",D.dT6,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dTs=new C.mk("community","Community Green","Clean",D.aJi,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5d=w([D.dTy,D.dTv,D.dTg,D.dTr,D.dTf,D.dTi,D.dTp,D.dTu,D.dTh,D.dTo,D.dTm,D.dTw,D.dTl,D.dTj,D.dTk,D.dTn,D.dTx,D.dTt,D.dTq,D.dTs],B.at("O<mk>"))
D.dox=w([D.Br,A.tJ,A.hX,A.c2],x.O)
D.doP=w([D.ahx,D.jt],x.O)
D.doZ=w(["pdf","docx","txt","md"],x.s)
D.eXD=new B.b7(-3,150,34)
D.eXE=new B.b7(-3,214,62)
D.eXF=new B.b7(-3,288,62)
D.dpR=w([D.eXD,D.eXE,D.eXF],B.at("O<+(J,J,J)>"))
D.dqm=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dr2=w(["Write","Design","Print & fold"],x.s)
D.k0=new C.v1(2,"triangle")
D.Dx=new C.v1(3,"arrow")
D.fD=new C.v1(4,"line")
D.k1=new C.v1(5,"parallelogram")
D.dr5=w([D.bi,D.eT,D.k0,D.Dx,D.fD,D.k1,D.lk],x.m)
D.ewb=new B.z(240,96)
D.eyY=new B.z(560,46)
D.drc=w([D.ewb,D.eyY],x.G)
D.hvj=new C.xV(0,"classic")
D.dP5=new C.nU("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aIU,4294570461,4282000405,4284234270)
D.dPh=new C.nU("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aIV,4294635750,4281999378,4285213214)
D.dP6=new C.nU("elegant_navy","Umoja Mzuri",y.s,D.a6V,4294967035,4279378237,4290283019)
D.dPj=new C.nU("elegant_gold","Umoja wa Dhahabu",y.Q,D.aJ2,4294966515,4281016592,4289102906)
D.dPl=new C.nU("kente_sunset","Kente ya Jua",y.H,D.aIW,4294964964,4282000405,4279983648)
D.dP3=new C.nU("indigo_mudcloth","Nguo ya Indigo",y.n,D.aIX,4294439140,4279903102,4279903102)
D.dP8=new C.nU("adinkra_royal","Muhuri wa Adinkra",y.z,D.aIY,4294965484,4285218591,4287322667)
D.dPd=new C.nU("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aIZ,4294244340,4279196764,4279196764)
D.dPf=new C.nU("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aJ_,4294505710,4279970378,4291058750)
D.hvk=new C.xV(1,"ringsNdoa")
D.dP7=new C.nU("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rW,4294966259,4279378237,4291404327)
D.hvm=new C.xV(2,"coupleCards")
D.dPi=new C.nU("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rW,4294966259,4279378237,4291404327)
D.hvn=new C.xV(3,"kuhoweshaForm")
D.dPe=new C.nU("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Dr,4294966519,4279378237,4291404327)
D.hvo=new C.xV(4,"mahariPande")
D.dP4=new C.nU("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rW,4294966259,4279904068,4291404327)
D.hvp=new C.xV(5,"familiaMti")
D.dPk=new C.nU("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aJ0,4294966776,4280241466,4291404327)
D.hvq=new C.xV(6,"ndoaSafi")
D.dPb=new C.nU("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Dr,4294966519,4279378237,4291404327)
D.hvr=new C.xV(7,"peteWide")
D.dPa=new C.nU("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rW,4294966259,4282001936,4291404327)
D.hvs=new C.xV(8,"muhuriCrest")
D.dP9=new C.nU("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rW,4294966259,4279378237,4291404327)
D.hvt=new C.xV(9,"fomuWazi")
D.dPc=new C.nU("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Dr,4294966519,4279904068,4291404327)
D.hvl=new C.xV(10,"upendoOrnate")
D.dPg=new C.nU("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aJ1,4294965493,4286200650,4291404327)
D.RU=w([D.dP5,D.dPh,D.dP6,D.dPj,D.dPl,D.dP3,D.dP8,D.dPd,D.dPf,D.dP7,D.dPi,D.dPe,D.dP4,D.dPk,D.dPb,D.dPa,D.dP9,D.dPc,D.dPg],B.at("O<nU>"))
D.Dv=new C.as2(0,"landscape169")
D.oB=new C.as2(1,"portrait916")
D.drZ=w([D.Dv,D.oB],B.at("O<as2>"))
D.aBC=w([A.hX,A.bL,A.cL,A.ik,A.c],x.O)
D.uO=w([A.c2,A.im],x.O)
D.evc=new B.z(1000,"M")
D.eAr=new B.z(900,"CM")
D.eyS=new B.z(500,"D")
D.ex7=new B.z(400,"CD")
D.evd=new B.z(100,"C")
D.eAs=new B.z(90,"XC")
D.eyT=new B.z(50,"L")
D.ex8=new B.z(40,"XL")
D.evj=new B.z(10,"X")
D.eAE=new B.z(9,"IX")
D.ez9=new B.z(5,"V")
D.eyD=new B.z(4,"IV")
D.evP=new B.z(1,"I")
D.dsJ=w([D.evc,D.eAr,D.eyS,D.ex7,D.evd,D.eAs,D.eyT,D.ex8,D.evj,D.eAE,D.ez9,D.eyD,D.evP],x.ek)
D.eYM=new B.cy(["open",A.iX,"Open & write","Keep writing this book"])
D.eZc=new B.cy(["print",A.uz,"Print as a book","Fold and staple it"])
D.dsU=w([D.eYM,D.eZc],B.at("O<+(m,a0,m,m)>"))
D.dtC=w([D.a72,D.mV,D.IY,D.T2,D.dh,D.T1],x.i)
D.eOs=new B.z(-1,"Small")
D.euY=new B.z(0,"Normal")
D.evN=new B.z(1,"Big")
D.ews=new B.z(2,"Huge")
D.dub=w([D.eOs,D.euY,D.evN,D.ews],x.ek)
D.duC=w([49,65,89,38,83,89],x.t)
D.duI=w([A.tJ,A.hX,A.c2],x.O)
D.dva=w([D.dh,D.mV,D.uX,D.a72,D.IY,D.T2],x.i)
D.aGV=new B.dp([0,D.MS,8,D.aj2,12,D.aj3],B.at("dp<G,a4k>"))
D.eeD={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bpB=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cWQ=w([A.bL,D.bpB],x.O)
D.dhM=w([A.b_,A.bl],x.O)
D.dc8=w([A.c_,A.aJ,A.bu],x.O)
D.dsV=w([A.cq,A.bs],x.O)
D.d4g=w([A.b8,A.f6],x.O)
D.df_=w([A.b6,A.fc],x.O)
D.bhW=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.def=w([D.bhW,A.p2],x.O)
D.d8n=w([A.hc,A.xW],x.O)
D.d43=w([A.bv,A.cf],x.O)
D.dxQ=new B.bw(D.eeD,[D.cWQ,P.arS,D.dhM,D.dc8,D.dsV,D.d4g,D.df_,D.def,D.d8n,D.d43],B.at("bw<m,ai<u>>"))
D.edU={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a5T=new B.bw(D.edU,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bw<m,m>"))
D.a6_=new B.bw(A.hT,[],B.at("bw<G,+icon3d,picture(m?,m?)>"))
D.dCa=new F.Nl(30,null)
D.dHp=new F.mK("Chapter 1","","","")
D.drL=w([D.dHp],x.B)
D.dHt=new F.rA("My Book","","",D.drL,E.aId)
D.dHr=new F.uS("starry",null,null,null,null,"","","")
D.dHu=new F.rA("Dream Big","","",E.a4S,D.dHr)
D.dHs=new F.uS("story",null,null,null,null,"","","")
D.dHv=new F.rA("Little Lion","","",E.a4S,D.dHs)
D.dHq=new F.uS("vintage",null,null,null,null,"","","")
D.dHw=new F.rA("Our Story","","",E.a4S,D.dHq)
D.dKu=new C.ET("","NGMY","","")
D.dRJ=new C.zR("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
D.e8F=new C.b2w(null,null,null,null)
D.ean=new C.as7(null)
D.eay=new C.asB(0,"smaller")
D.eaz=new C.asB(1,"bigger")
D.aJy=new C.asB(2,"fit")
D.ei3=new B.t(3,6)
D.ein=new B.t(4,8)
D.emx=new B.D(E.ajV,U.aej,null)
D.emB=new B.D(A.a_3,A.m_,null)
D.bPw=new B.ae(A.kM,16,A.bU,null,null,null)
D.emF=new B.D(A.iD,D.bPw,null)
D.bbB=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.emR=new B.D(A.Gx,D.bbB,null)
D.c_0=new B.ae(A.cy,16,A.aB,null,null,null)
D.emV=new B.D(A.ev,D.c_0,null)
D.fG2=new B.y("Play",null,A.nK,null,null,null,null,null,null,null,null,null)
D.di2=w([V.aql,A.ta,D.fG2],x.p)
D.f2P=new B.cd(A.aM,A.e,A.O,A.m,null,A.p,null,0,D.di2,null)
D.emY=new B.D(A.nr,D.f2P,null)
D.bbK=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.f8I=new B.a5(20,20,D.bbK,null)
D.en3=new B.D(A.iD,D.f8I,null)
D.fPo=new B.y("Seconds per slide",null,A.fS,null,null,null,null,null,null,null,null,null)
D.end=new B.D(A.bg,D.fPo,null)
D.eoy=new C.a98(2,"print")
D.eoB=new B.iZ(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eqd=new B.hj("/Annot")
D.eqf=new B.hj("/URI")
D.fA5=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.esK=new B.jB("share",48,D.fA5,null,B.at("jB<m>"))
D.bZV=new B.ae(A.e5,14,A.eG,null,null,null)
D.esT=new B.cN(null,-2,-2,null,null,null,D.bZV,null)
D.cZ5=w([H.ah9,A.L],x.O)
D.c5x=new B.a9(A.a5,A.a8,A.x,D.cZ5,null,null)
D.b4b=new B.o(null,null,null,null,null,D.c5x,A.n)
D.buU=new B.l0(D.b4b,A.bh,null,null)
D.et4=new B.cN(0,0,null,0,8,null,D.buU,null)
D.dn0=w([A.i_,A.mA,A.cd],x.O)
D.etJ=new B.c2(A.A,0.5,A.x,null,0,D.dn0,null,null)
D.ewk=new B.z(0.22,A.bl)
D.eAY=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eDa=new B.z(0.5,A.ht)
D.eMP=new B.z(0.78,A.aW)
D.eYC=new B.cy([A.br,0.22,0.7,2.6])
D.eYI=new B.cy([A.b8,0.36,1.2,1.3])
D.eYO=new B.cy([A.dH,0.28,0.2,0.4])
D.eYU=new B.cy([A.cw,0.05,0.3,0.35])
D.eZ_=new B.cy([A.bv,0.28,0.9,0])
D.eZ7=new B.cy([A.aD,-0.25,-0.15,0.45])
D.eZY=new B.cy([A.c_,0.42,1,4.1])
D.f2x=new B.aa6(9)
D.bQD=new B.ae(A.Hu,28,A.bu,null,null,null)
D.fPX=new B.y("NGMY News",null,A.dd,null,null,null,null,null,null,null,null,null)
D.bF1=new B.bA(1,A.bd,D.fPX,null)
D.dqp=w([D.bQD,A.as,D.bF1],x.p)
D.f2J=new B.cd(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.dqp,null)
D.bQO=new B.ae(A.oi,16,A.c,null,null,null)
D.fRw=new B.y("Book",null,A.oJ,null,null,null,null,null,null,null,null,null)
D.duH=w([D.bQO,A.eg,D.fRw],x.p)
D.f2R=new B.cd(A.aM,A.e,A.O,A.m,null,A.p,null,0,D.duH,null)
D.bXv=new B.ae(A.jB,10,A.c,null,null,null)
D.fE2=new B.y("Pro",null,A.nG,null,null,null,null,null,null,null,null,null)
D.di7=w([D.bXv,A.qP,D.fE2],x.p)
D.f2V=new B.cd(A.aM,A.e,A.O,A.m,null,A.p,null,0,D.di7,null)
D.fPm=new B.y("Make a newspaper",null,A.V7,null,null,null,null,null,null,null,null,null)
D.c6J=w([E.a2G,A.ad,D.fPm],x.p)
D.f2W=new B.cd(A.aM,A.e,A.O,A.m,null,A.p,null,0,D.c6J,null)
D.bVZ=new B.ae(A.km,18,A.bL,null,null,null)
D.fGg=new B.y("Ending celebration",null,A.hr,null,null,null,null,null,null,null,null,null)
D.dpp=w([D.bVZ,A.bn,D.fGg],x.p)
D.f2Z=new B.cd(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.dpp,null)
D.bXh=new B.ae(A.iX,18,A.kf,null,null,null)
D.fjH=new B.F(!0,A.kf,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRP=new B.y("Write",null,D.fjH,null,null,null,null,null,null,null,null,null)
D.d6p=w([D.bXh,A.ad,D.fRP],x.p)
D.f35=new B.cd(A.aM,A.e,A.O,A.m,null,A.p,null,0,D.d6p,null)
D.fE0=new B.y("Download picture",null,A.nH,null,null,null,null,null,null,null,null,null)
D.bHt=new B.qD(A.e3,A.A,A.f,D.fE0,null)
D.bHE=new B.ds(1,A.cp,D.bHt,null)
D.diw=w([K.aqc,A.ad,D.bHE],x.p)
D.f36=new B.cd(A.aM,A.b9,A.i,A.m,null,A.p,null,0,D.diw,null)
D.bSA=new B.ae(A.Hu,22,A.bu,null,null,null)
D.fNV=new B.y("NGMY NEWS",null,N.a9H,null,null,null,null,null,null,null,null,null)
D.cYv=w([D.bSA,A.ad,D.fNV],x.p)
D.f3f=new B.cd(A.aM,A.e,A.O,A.m,null,A.p,null,0,D.cYv,null)
D.f3r=new B.pq(!1,!1,null,U.X9,null,A.c1,null,null,null)
D.a8O=new B.jv([D.cn,D.dh,D.uX,D.IX,D.uY,D.aJn],B.at("jv<hI>"))
D.egl={title:0,quote:1,closing:2,bio:3}
D.f4C=new B.dD(D.egl,4,x.M)
D.eec={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f4F=new B.dD(D.eec,5,x.M)
D.efE={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a8P=new B.dD(D.efE,8,x.M)
D.eeP={Design:0,Transitions:1,Insert:2}
D.f4K=new B.dD(D.eeP,3,x.M)
D.hvC=new B.jv([D.a73],B.at("jv<wf>"))
D.eeY={float3d:0,drift:1,pulse:2}
D.f4O=new B.dD(D.eeY,3,x.M)
D.aQY=new B.jv([D.IU,D.IV,D.IW],B.at("jv<mO>"))
D.eea={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aR0=new B.dD(D.eea,14,x.M)
D.hvD=new B.dD(A.hT,0,B.at("dD<wf>"))
D.eeV={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.U8=new B.dD(D.eeV,4,x.M)
D.ee3={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aR3=new B.dD(D.ee3,30,x.M)
D.ef3={circle:0,triangle:1,hexagon:2,diamond:3}
D.f5c=new B.dD(D.ef3,4,x.M)
D.f7B=new B.av(390,844)
D.f8r=new B.a5(20,20,A.LE,null)
D.aRQ=new B.a5(null,2.5,null,null)
D.f8B=new B.a5(18,18,A.LE,null)
D.bXl=new B.ae(A.jh,19,A.c,null,null,null)
D.f8N=new B.a5(38,38,D.bXl,null)
D.bVx=new B.ae(A.z7,22,A.c,null,null,null)
D.f8P=new B.a5(40,40,D.bVx,null)
D.f9o=new B.hK(2,10,10,1.15,null)
D.aRX=new B.hK(2,16,14,0.62,null)
D.bD_=new B.Q(32,30,32,40)
D.bdd=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bQA=new B.ae(A.qr,56,D.bdd,null,null,null)
D.ai7=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.flP=new B.F(!0,D.ai7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new B.y("Your books will live here.",null,D.flP,null,A.K,null,null,null,null,null,null,null)
D.d9l=w([D.bQA,A.W,D.fKP],x.p)
D.btR=new B.fj(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.d9l,null)
D.enb=new B.D(D.bD_,D.btR,null)
D.f9K=new B.mp(D.enb,null)
D.fKM=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fa1=new B.b2(D.fKM,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fIT=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fa2=new B.b2(D.fIT,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fNZ=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fab=new B.b2(D.fNZ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fOx=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.faq=new B.b2(D.fOx,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fHu=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.faD=new B.b2(D.fHu,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fVS=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.faW=new B.b2(D.fVS,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fSR=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new B.b2(D.fSR,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fOG=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fbQ=new B.b2(D.fOG,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fCb=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new B.b2(D.fCb,null,null,null,null,null,null,null,A.iM,null,null,null,null,A.qc,!1,null,null,null,A.t,null)
D.fEa=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fco=new B.b2(D.fEa,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fKs=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fcq=new B.b2(D.fKs,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fK8=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fcr=new B.b2(D.fK8,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fQO=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fcs=new B.b2(D.fQO,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fyg=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new B.b2(D.fyg,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fFm=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fcY=new B.b2(D.fFm,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fUw=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new B.b2(D.fUw,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fU1=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fd3=new B.b2(D.fU1,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fxa=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new B.b2(D.fxa,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fPS=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fde=new B.b2(D.fPS,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fTB=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fdt=new B.b2(D.fTB,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fTs=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fdv=new B.b2(D.fTs,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fx1=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fdB=new B.b2(D.fx1,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fB9=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new B.b2(D.fB9,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fSE=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fee=new B.b2(D.fSE,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fAW=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fet=new B.b2(D.fAW,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.bll=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cX5=w([A.ik,A.p2,D.bll,D.aeN,A.ik],x.O)
D.feR=new B.h0(A.A,0,6.283185307179586,A.x,D.cX5,null,null)
D.d5x=w([A.bL,A.c2,A.hX,D.Br,A.bL],x.O)
D.aSv=new B.h0(A.A,0,6.283185307179586,A.x,D.d5x,null,null)
D.dkm=w([A.c_,A.br,A.b8,A.bf,A.bu,A.c_],x.O)
D.feW=new B.h0(A.A,0,6.283185307179586,A.x,D.dkm,null,null)
D.cZk=w([A.q8,A.p3,A.xU,A.ik,A.q8],x.O)
D.feX=new B.h0(A.A,0,6.283185307179586,A.x,D.cZk,null,null)
D.dkg=w([A.aP,A.bM,A.aN,A.al,A.aP],x.O)
D.feY=new B.h0(A.A,0,6.283185307179586,A.x,D.dkg,null,null)
D.dsw=w([A.bv,A.b8,A.br,A.c_,A.bv],x.O)
D.ff_=new B.h0(A.A,0,6.283185307179586,A.x,D.dsw,null,null)
D.bgQ=new B.u(1,0,1,0,A.q)
D.blG=new B.u(1,0,1,1,A.q)
D.biF=new B.u(1,0,0,1,A.q)
D.beB=new B.u(1,1,0,1,A.q)
D.dop=w([A.LV,A.agQ,D.bgQ,D.blG,D.biF,D.beB,A.LV],x.O)
D.ff0=new B.h0(A.A,0,6.283185307179586,A.x,D.dop,null,null)
D.fff=new C.awN(2,"immersiveSticky")
D.ffg=new C.awN(3,"edgeToEdge")
D.ffh=new C.awN(4,"manual")
D.fhM=new B.F(!0,A.oY,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT2=new B.F(!0,A.eP,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fil=new B.F(!0,E.nh,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fld=new B.F(!0,A.bU,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flz=new B.F(!0,A.eG,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn0=new B.F(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fna=new B.F(!0,A.jN,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fno=new B.rV(!0,A.Jj,null,null,null,null,A.dx,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foz=new B.F(!0,A.jv,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foX=new B.F(!0,A.aB,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoE=new B.iZ(1,1,0.7568627450980392,0.027450980392156862)
D.fp0=new B.rV(!0,D.eoE,null,null,null,null,A.dx,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.agY=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aTR=new B.F(!0,D.agY,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new B.F(!0,D.ai7,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp9=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTT=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpN=new B.rV(!0,A.pv,null,null,null,null,A.dx,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq3=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqB=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqD=new B.F(!0,D.agY,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kh=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr8=new B.F(!0,A.c2,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fri=new B.F(!0,A.bM,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frm=new B.F(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a4p,null,null,null)
D.frG=new B.F(!0,A.c6,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frI=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frX=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new B.F(!0,A.du,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new B.F(!0,A.aR,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsU=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new B.F(!0,A.ac,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUv=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUx=new B.F(!0,A.bU,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.brl=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fuZ=new B.F(!0,D.brl,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUD=new B.F(!0,E.nh,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvt=new B.F(!0,A.bM,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvw=new B.F(!0,O.lA,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo5=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new B.y("NEW",null,D.fo5,null,null,null,null,null,null,null,null,null)
D.fx4=new B.y("Hati ya Kuhowesha",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fxy=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fxX=new B.y("Scrollable PDF on this slide",null,A.df,null,null,null,null,null,null,null,null,null)
D.fyG=new B.y("Big quote mark",null,A.jm,null,null,null,null,null,null,null,null,null)
D.fyJ=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new B.y("How many slides?",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fzY=new B.y("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fjK=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAj=new B.y("Luxury FX",null,D.fjK,null,null,null,null,null,null,null,null,null)
D.fAF=new B.y("Font",null,A.tg,null,null,null,null,null,null,null,null,null)
D.fAQ=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fAX=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new B.F(!0,A.bM,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB6=new B.y("Example  GA847",null,D.fuv,null,null,null,null,null,null,null,null,null)
D.fBw=new B.y("Design shapes",null,A.jm,null,null,null,null,null,null,null,null,null)
D.fBH=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fBM=new B.y("Non-stop (loop)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fC_=new B.y("Hati ya Kuhoweya",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fCi=new B.y("Photo studio",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fCM=new B.y("Add your picture",null,A.k6,null,null,null,null,null,null,null,null,null)
D.fnp=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCN=new B.y("Enter document code",null,D.fnp,null,A.K,null,null,null,null,null,null,null)
D.fCO=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new B.F(!0,E.nh,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDd=new B.y("Delete this book?",null,D.fkS,null,A.K,null,null,null,null,null,null,null)
D.fpC=new B.F(!0,E.nh,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEc=new B.y("Your library",null,D.fpC,null,null,null,null,null,null,null,null,null)
D.fEi=new B.y("Delete",null,A.aTK,null,null,null,null,null,null,null,null,null)
D.fEl=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.Ef,null,null,null,null,null,null,null,null,null)
D.fEx=new B.y("Element flies in",null,A.aTX,null,null,null,null,null,null,null,null,null)
D.Vj=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fEW=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fFj=new B.y("Cancel",null,E.aU6,null,null,null,null,null,null,null,null,null)
D.fFl=new B.y("The lines and circles that come with the design",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fti=new B.F(!0,A.hi,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new B.y("DOCUMENT CODE",null,D.fti,null,null,null,null,null,null,null,null,null)
D.fGC=new B.y("Quotes",null,G.aaj,null,null,null,null,null,null,null,null,null)
D.fmN=new B.F(!0,O.lA,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new B.y("Add a picture",null,D.fmN,null,null,null,null,null,null,null,null,null)
D.fGT=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.UW,null,A.K,null,null,null,null,null,null,null)
D.fGX=new B.y("Look & feel",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fH1=new B.y("Rings",null,A.hr,null,null,null,null,null,null,null,null,null)
D.fH7=new B.y("W",null,A.tg,null,null,null,null,null,null,null,null,null)
D.fHh=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fHA=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.V4,null,A.K,null,null,null,null,null,null,null)
D.fHC=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fIm=new B.y("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fIE=new B.y("Malipo ya Awamu ya Mahari",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fne=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIU=new B.y("Create with AI",null,D.fne,null,A.K,null,null,null,null,null,null,null)
D.fJn=new B.y("Apply look",null,A.hr,null,null,null,null,null,null,null,null,null)
D.fnW=new B.F(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKa=new B.y("Type your presentation below",null,D.fnW,null,A.K,null,null,null,null,null,null,null)
D.fKd=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,N.aUH,null,A.K,null,null,null,null,null,null,null)
D.fKf=new B.y("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fiE=new B.F(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKm=new B.y("Done",null,D.fiE,null,null,null,null,null,null,null,null,null)
D.fKH=new B.y("Delete",null,A.nI,null,null,null,null,null,null,null,null,null)
D.fKR=new B.y("Hati ya Kiapo cha Uongozi",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fm6=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLM=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fm6,null,A.K,null,null,null,null,null,null,null)
D.fMa=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new B.y("Layout",null,A.V9,null,null,null,null,null,null,null,null,null)
D.fMU=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fN2=new B.y("X",null,A.tg,null,null,null,null,null,null,null,null,null)
D.fND=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A0.Ee,null,null,null,null,null,null,null,null,null)
D.fOb=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fOp=new B.y("Hati ya Kuhowa",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fOr=new B.y("Choose a class template",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fOt=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fOA=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fON=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fOU=new B.y("Done",null,A.aUu,null,null,null,null,null,null,null,null,null)
D.fP4=new B.y("Ending celebration",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fP5=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fPk=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A0.tf,null,null,null,null,null,null,null,null,null)
D.fQk=new B.y("Export presentation",null,A.df,null,null,null,null,null,null,null,null,null)
D.fQl=new B.y("What would you like to do?",null,D.aTR,null,null,null,null,null,null,null,null,null)
D.fQq=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fQW=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fR_=new B.y("Hati (Documents)",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fRc=new B.y("Done",null,A.lq,null,null,null,null,null,null,null,null,null)
D.fuk=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRg=new B.y("Delete presentation?",null,D.fuk,null,A.K,null,null,null,null,null,null,null)
D.fRA=new B.y("After the last slide it starts again from the first",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fRM=new B.y("\ud83c\udf33",null,A.Ed,null,A.K,null,null,null,null,null,null,null)
D.fS3=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fSa=new B.y("Transfer document",null,A.oL,null,null,null,null,null,null,null,null,null)
D.fSl=new B.y("Add to the slides",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fSI=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fSX=new B.y("Make a book",null,I.aTl,null,null,null,null,null,null,null,null,null)
D.fT0=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fmG=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT2=new B.y("Keep this page open until it finishes.",null,D.fmG,null,null,null,null,null,null,null,null,null)
D.fT4=new B.y("Making your video",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fT9=new B.y("LANGUAGE",null,X.th,null,null,null,null,null,null,null,null,null)
D.fTg=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTo=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTq=new B.y("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fTH=new B.y("Delete from the database?",null,A.k6,null,null,null,null,null,null,null,null,null)
D.fTI=new B.y("H",null,A.tg,null,null,null,null,null,null,null,null,null)
D.fU7=new B.y("NGMY Quotes",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fUC=new B.y("Cover",null,D.aUD,null,null,null,null,null,null,null,null,null)
D.fUG=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fUH=new B.y("Each page becomes its own slide you can present",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fV3=new B.y("Y",null,A.tg,null,null,null,null,null,null,null,null,null)
D.fVf=new B.y("Crop the picture",null,A.lq,null,null,null,null,null,null,null,null,null)
D.fVm=new B.y("Edit text",null,A.Kc,null,null,null,null,null,null,null,null,null)
D.fXG=B.dW("a8V")
D.Es=new C.ay8(0,"none")
D.aYf=new C.ay8(1,"zipCrypto")
D.aYg=new C.ay8(2,"aes")
D.hiS=new F.PS("","",null)
D.hjY=new C.bdN(null)
D.hl7=new C.a_9(null)
D.hnZ=new C.adO(null)
D.ho0=new C.aFq(null)
D.hqM=new C.a0p(null)
D.hr1=new C.a0W(null)
D.hrE=new C.bvG(null)})();(function staticFields(){$.hob=null
$.hoc=null
$.hod=null
$.hoe=null
$.h5S=B.vp("_lastQuoRemDigits")
$.h5T=B.vp("_lastQuoRemUsed")
$.ayv=B.vp("_lastRemUsed")
$.h5U=B.vp("_lastRem_nsh")
$.qo=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7J=B.U(x.N,x.I)
$.h3g=!1
$.ht5=B.U(B.at("l4"),x.N)
$.hti=B.U(B.at("l4"),x.E)
$.hrf=!1
$.bBj="q"
$.QU=0
$.D_=B.U(x.N,B.at("ai<zS>"))
$.hrC=!1
$.h7w=!1
$.hy1=null
$.i1J=B.U(x.N,B.at("aB<m?>"))
$.KN=""
$.ja=0
$.hl_=function(){var w=x.N
return B.U(w,w)}()
$.hkZ=B.U(x.N,x.R)
$.h7R=!1
$.agx=B.U(x.N,x.E)
$.h8G=0
$.bm2=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iro","Dl",()=>C.bbh(0))
w($,"irm","a3a",()=>C.bbh(1))
w($,"irn","hBN",()=>C.bbh(2))
w($,"irl","hcB",()=>$.a3a().vl(0))
w($,"irj","hBL",()=>C.bbh(1e4))
w($,"irk","hBM",()=>B.Ez(8))
w($,"in9","hzN",()=>B.Ez(0))
w($,"inh","hzR",()=>B.Ez(0))
w($,"ing","hzQ",()=>B.c1g(0))
w($,"iv9","hDP",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a5T.gdV(D.a5T),v=v.gag(v);v.C();){u=v.gS(v)
t.n(0,u.b,u.a)}return t})
w($,"ivA","bFQ",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n7(new C.fOB(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.n7(new C.fOC(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.n7(new C.fOD(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.n7(new C.fOO(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.n7(new C.fOT(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.n7(new C.fOU(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.n7(new C.fOV(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.n7(new C.fOW(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.n7(new C.fOX(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.n7(new C.fOY(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.n7(new C.fOZ(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.n7(new C.fOE(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.n7(new C.fOF(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.n7(new C.fOG(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.n7(new C.fOH(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.n7(new C.fOI(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.n7(new C.fOJ(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.n7(new C.fOK(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.n7(new C.fOL(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.n7(new C.fOM(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.n7(new C.fON(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.n7(new C.fOP(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.n7(new C.fOQ(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.n7(new C.fOR(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.n7(new C.fOS(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.at("O<F1>"))})
w($,"ivc","hDR",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["uy2nof8OF4LeivM9focoTEO5BTk="]=a.current})($__dart_deferred_initializers__);